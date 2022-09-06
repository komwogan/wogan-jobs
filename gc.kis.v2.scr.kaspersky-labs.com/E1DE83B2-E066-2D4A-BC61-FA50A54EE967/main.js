(function() {
    var KasperskyLab = (function(context) {
        function GetClass(obj) {
            if (typeof obj === "undefined")
                return "undefined";
            if (obj === null)
                return "null";
            return Object.prototype.toString.call(obj)
                .match(/^\[object\s(.*)\]$/)[1];
        }
        var exports = {},
            undef;

        function ObjectToJson(object) {
            if (object === null || object == Infinity || object == -Infinity || object === undef)
                return "null";
            var className = GetClass(object);
            if (className == "Boolean") {
                return "" + object;
            } else if (className == "Number") {
                return window.isNaN(object) ? "null" : "" + object;
            } else if (className == "String") {
                var escapedStr = "" + object;
                return "\"" + escapedStr.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"") + "\"";
            }
            if (typeof object == "object") {
                if (!ObjectToJson.check) ObjectToJson.check = [];
                for (var i = 0, chkLen = ObjectToJson.check.length; i < chkLen; ++i) {
                    if (ObjectToJson.check[i] === object) {
                        throw new TypeError();
                    }
                }
                ObjectToJson.check.push(object);
                var str = '';
                if (className == "Array") {
                    for (var index = 0, length = object.length; index < length; ++index) {
                        str += ObjectToJson(object[index]) + ',';
                    }
                    ObjectToJson.check.pop();
                    return "[" + str.slice(0, -1) + "]";
                } else {
                    for (var property in object) {
                        if (object.hasOwnProperty(property)) {
                            str += '"' + property + '":' + ObjectToJson(object[property]) + ',';
                        }
                    }
                    ObjectToJson.check.pop();
                    return "{" + str.slice(0, -1) + "}";
                }
            }
            return undef;
        }
        exports.stringify = function(source) {
            return ObjectToJson(source);
        };
        var parser = {
            source: null,
            grammar: /^[\x20\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/,
            ThrowError: function() {
                throw new SyntaxError('JSON syntax error');
            },
            NextToken: function(token) {
                this.source = token.input.slice(token[0].length);
                return this.grammar.exec(this.source);
            },
            ParseArray: function() {
                var token = this.grammar.exec(this.source),
                    parseItem = token && token[1] != ']',
                    result = [];
                for (;; token = this.NextToken(token)) {
                    if (!token)
                        this.ThrowError();
                    if (parseItem) {
                        result.push(this.ParseValue(token));
                        token = this.grammar.exec(this.source);
                    } else {
                        if (token[1]) {
                            if (token[1] == ']') {
                                break;
                            } else if (token[1] != ',') {
                                this.ThrowError();
                            }
                        } else {
                            this.ThrowError();
                        }
                    }
                    parseItem = !parseItem;
                }
                return result;
            },
            ParseObject: function() {
                var propertyName, parseProperty = true,
                    result = {};
                for (var token = this.grammar.exec(this.source);; token = this.NextToken(token)) {
                    if (!token)
                        this.ThrowError();
                    if (parseProperty) {
                        if (token[1] && token[1] == '}') {
                            break;
                        } else if (token[1] || token[2] || !token[3]) {
                            this.ThrowError();
                        }
                        propertyName = token[3];
                        token = this.NextToken(token);
                        if (!token || !token[1] || token[1] != ':')
                            this.ThrowError();
                        parseProperty = false;
                    } else {
                        if (!propertyName)
                            this.ThrowError();
                        result[propertyName] = this.ParseValue(token);
                        token = this.NextToken(this.grammar.exec(this.source));
                        if (token[1]) {
                            if (token[1] == '}') {
                                break;
                            } else if (token[1] != ',') {
                                this.ThrowError();
                            }
                        } else {
                            this.ThrowError();
                        }
                        propertyName = undef;
                        parseProperty = true;
                    }
                }
                return result;
            },
            ParseValue: function(token) {
                if (token[1]) {
                    switch (token[1]) {
                        case '[':
                            this.source = this.source.slice(token[0].length);
                            return this.ParseArray();
                        case '{':
                            this.source = this.source.slice(token[0].length);
                            return this.ParseObject();
                        case 'true':
                            return true;
                        case 'false':
                            return false;
                        case 'null':
                            return null;
                        default:
                            this.ThrowError();
                    }
                } else if (token[2]) {
                    return +token[2];
                }
                return token[3].replace(/\\(?:u(.{4})|(["\\\/'bfnrt]))/g, function(substr, utfCode, esc) {
                    if (utfCode) {
                        return String.fromCharCode(parseInt(utfCode, 16));
                    } else {
                        switch (esc) {
                            case 'b':
                                return '\b';
                            case 'f':
                                return '\f';
                            case 'n':
                                return '\n';
                            case 'r':
                                return '\r';
                            case 't':
                                return '\t';
                            default:
                                return esc;
                        }
                    }
                });
            },
            Parse: function(str) {
                if ('String' != GetClass(str))
                    throw new TypeError();
                this.source = str;
                var token = this.grammar.exec(this.source);
                if (!token)
                    this.ThrowError();
                return this.ParseValue(token);
            }
        };
        exports.parse = function(source) {
            return parser.Parse(source);
        };
        context['JSONStringify'] = exports.stringify;
        context['JSONParse'] = exports.parse;
        return context;
    }).call(this, KasperskyLab || {});
    var KasperskyLab = (function(ns) {
        ns.MaxRequestDelay = 2000;
        ns.Log = function() {};
        ns.SessionLog = function() {};
        var originalWindowOpen = window.open;
        ns.WindowOpen = function(url) {
            if (typeof(originalWindowOpen) === "function")
                originalWindowOpen.call(window, url);
            else
                originalWindowOpen(url);
        }
        ns.EncodeURI = encodeURI;
        ns.GetResourceSrc = function() {};
        ns.AddEventListener = function(element, name, func) {
            if ("addEventListener" in element)
                element.addEventListener(name,
                    function(e) {
                        try {
                            func(e || window.event);
                        } catch (e) {
                            ns.SessionLog(e);
                        }
                    }, true);
            else
                element.attachEvent("on" + name,
                    function(e) {
                        try {
                            func.call(element, e || window.event);
                        } catch (e) {
                            ns.SessionLog(e);
                        }
                    });
        };
        ns.AddRemovableEventListener = function(element, name, func) {
            if (element.addEventListener)
                element.addEventListener(name, func, true);
            else
                element.attachEvent('on' + name, func);
        };
        ns.RunModule = function(func, timeout) {
            if (document.readyState === "loading") {
                if (timeout)
                    ns.SetTimeout(func, timeout);
                if (document.addEventListener)
                    ns.AddEventListener(document, "DOMContentLoaded", func);
                else
                    ns.AddEventListener(document, "load", func);
            } else {
                func();
            }
        };
        ns.RemoveEventListener = function(element, name, func) {
            if (element.removeEventListener)
                element.removeEventListener(name, func, true);
            else
                element.detachEvent('on' + name, func);
        };
        ns.SetTimeout = function(func, timeout) {
            return setTimeout(
                function() {
                    try {
                        func();
                    } catch (e) {
                        ns.SessionLog(e);
                    }
                }, timeout);
        }
        ns.SetInterval = function(func, interval) {
            return setInterval(
                function() {
                    try {
                        func();
                    } catch (e) {
                        ns.SessionLog(e);
                    }
                }, interval);
        }

        function InsertStyleRule(style, rule) {
            if (style.styleSheet)
                style.styleSheet.cssText += rule + '\n';
            else
                style.appendChild(document.createTextNode(rule));
        }
        ns.AddStyles = function(rules) {
            return ns.AddDocumentStyles(document, rules);
        }
        ns.AddDocumentStyles = function(document, rules) {
            if (typeof rules !== 'object' || rules.constructor !== Array) {
                return;
            }
            var style = document.createElement('style');
            style.type = 'text/css';
            style.setAttribute('nonce', ns.ContentSecurityPolicyNonceAttribute);
            for (var i = 0, len = rules.length; i < len; ++i) {
                var rule = rules[i];
                if (document.querySelectorAll) {
                    InsertStyleRule(style, rule);
                } else {
                    var styleBegin = rule.lastIndexOf('{');
                    if (styleBegin == -1)
                        continue;
                    var styleText = rule.substr(styleBegin);
                    var selectors = rule.substr(0, styleBegin).split(',');
                    if (style.styleSheet) {
                        var cssText = '';
                        for (var j = 0; j != selectors.length; ++j)
                            cssText += selectors[j] + styleText + '\n';
                        style.styleSheet.cssText = cssText;
                    } else {
                        for (var j = 0; j != selectors.length; ++j)
                            style.appendChild(document.createTextNode(selectors[j] + styleText));
                    }
                }
            }
            if (document.head)
                document.head.appendChild(style);
            else
                document.getElementsByTagName('head')[0].appendChild(style);
            return style;
        };
        ns.AddCssLink = function(document, href, loadCallback, errorCallback) {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = href;
            if (loadCallback) {
                ns.AddEventListener(link, "load", function() {
                    try {
                        link && link.sheet && link.sheet.cssText;
                        loadCallback();
                    } catch (e) {
                        if (errorCallback)
                            errorCallback();
                    }
                });
            }
            if (errorCallback) {
                ns.AddEventListener(link, "error",
                    function() {
                        errorCallback();
                        ns.SessionLog("failed load resource: " + href);
                    });
            }
            if (document.head)
                document.head.appendChild(link);
            else
                document.getElementsByTagName("head")[0].appendChild(link);
        }
        ns.GetCurrentTime = function() {
            return new Date().getTime();
        };
        ns.GetPageScroll = function() {
            return {
                left: (document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft,
                top: (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
            };
        };
        ns.GetPageHeight = function() {
            return document.documentElement.clientHeight || document.body.clientHeight;
        };
        ns.GetPageWidth = function() {
            return document.documentElement.clientWidth || document.body.clientWidth;
        };
        ns.IsDefined = function(variable) {
            return "undefined" !== typeof(variable);
        };
        ns.StopProcessingEvent = function(evt) {
            if (evt.preventDefault)
                evt.preventDefault();
            else
                evt.returnValue = false;
            if (evt.stopPropagation)
                evt.stopPropagation();
            if (ns.IsDefined(evt.cancelBubble))
                evt.cancelBubble = true;
        }
        ns.AddIframeDoctype = function(element) {
            var frameDocument = element.contentDocument || element.contentWindow.document;
            if (document.implementation && document.implementation.createDocumentType) {
                var newDoctype = document.implementation.createDocumentType('html', '', '');
                if (frameDocument.childNodes.length)
                    frameDocument.insertBefore(newDoctype, frameDocument.childNodes[0]);
                else
                    frameDocument.appendChild(newDoctype);
            } else {
                frameDocument.write("<!DOCTYPE html>");
                frameDocument.close();
            }
        }

        function IsGoogleSearch(linkElement) {
            if (linkElement.parentNode.tagName.toLowerCase() === "h3" &&
                linkElement.parentNode.className.toLowerCase() === "r")
                return true;
            return false;
        }

        function IsYandexSearch(linkElement) {
            if (linkElement.parentNode.tagName.toLowerCase() === "h2" && (
                    linkElement.className.toLowerCase().indexOf("serp-item__title-link") !== -1 ||
                    linkElement.className.toLowerCase().indexOf("b-serp-item__title-link") !== -1 ||
                    linkElement.className.toLowerCase().indexOf("organic__url") !== -1))
                return true;
            else
                return false;
        }

        function IsYahooSearch(linkElement) {
            if (linkElement.className.toLowerCase().indexOf("ac-1st") !== -1 ||
                linkElement.className.toLowerCase().indexOf("ac-21th") !== -1)
                return true;
            return false;
        }

        function IsYahooLocalSearch(linkElement) {
            return linkElement.className.toLowerCase().indexOf("td-u") !== -1;
        }

        function IsYahooCoSearch(linkElement) {
            if (linkElement.parentNode.tagName.toLowerCase() === "h3" &&
                linkElement.parentNode.parentNode &&
                linkElement.parentNode.parentNode.className.toLowerCase() === "hd")
                return true;
            return false;
        }

        function IsBingSearch(linkElement) {
            if (linkElement.parentNode.tagName.toLowerCase() !== "h2" || !linkElement.parentNode.parentNode)
                return false;
            if (linkElement.parentNode.parentNode.className.toLowerCase().indexOf("sb_tlst") !== -1 ||
                linkElement.parentNode.parentNode.className.toLowerCase().indexOf("b_algo") !== -1)
                return true;
            if (linkElement.parentNode.parentNode.parentNode &&
                linkElement.parentNode.parentNode.className.toLowerCase().indexOf("b_title") !== -1 &&
                linkElement.parentNode.parentNode.parentNode.className.toLowerCase().indexOf("b_algo") !== -1)
                return true;
            return false;
        }

        function IsMailRuSearch(linkElement) {
            if (linkElement.target.toLowerCase() === "_blank" && (
                    linkElement.parentNode.className.toLowerCase() === "res-head" ||
                    linkElement.parentNode.className.toLowerCase() === "result__title"))
                return true;
            return false;
        }

        function IsNigmaRuSearch(linkElement) {
            if (linkElement.parentNode.className.toLowerCase() === "snippet_title")
                return true;
            return false;
        }

        function IsRamblerRuSearch(linkElement) {
            if (linkElement.className.toLowerCase() === "b-serp-item__link")
                return true;
            return false;
        }

        function IsBaiduComSearch(linkElement) {
            if (linkElement.parentNode.className.toLowerCase() === "t")
                return true;
            return false;
        }

        function IsBaiduJpSearch(linkElement) {
            if (linkElement.parentNode.tagName.toLowerCase() === "h3" &&
                linkElement.parentNode.parentNode &&
                linkElement.parentNode.parentNode.parentNode &&
                linkElement.parentNode.parentNode.parentNode.className.toLowerCase() === "web")
                return true;
            return false;
        }

        function IsAskComSearch(linkElement) {
            if (linkElement.className.toLowerCase() === "web-result-title-link")
                return true;
            return false;
        }

        function NotSearchSite() {
            return false;
        }

        function DecodeURI(query) {
            return decodeURIComponent(query.replace(/\+/g, ' '));
        }

        function DecodeNigmaURI(query) {
            return DecodeURI(query).replace(/~\|-/g, '+');
        }

        function GetSearchRequest(parameterName, decodeUriFunc) {
            var parameters = document.location.href.split(/[?#&]/);
            var result = "";
            for (var i = 0; i < parameters.length; ++i) {
                var parameter = parameters[i];
                var parameterSeparatorPos = parameter.indexOf("=");
                if (parameterSeparatorPos == -1)
                    continue;
                if (parameter.substr(0, parameterSeparatorPos) != parameterName)
                    continue;
                if (decodeUriFunc)
                    result = decodeUriFunc(parameter.substr(parameterSeparatorPos + 1));
                else
                    result = DecodeURI(parameter.substr(parameterSeparatorPos + 1));
            }
            return result;
        }

        function NotSearchSiteRequest() {
            return "";
        }

        function GetGeneralSearchSiteRequest() {
            return GetSearchRequest('q');
        }

        function GetYahooSearchSiteRequest() {
            return GetSearchRequest('p');
        }

        function GetYandexSearchSiteRequest() {
            return GetSearchRequest('text');
        }

        function GetNigmaSearchSiteRequest() {
            return GetSearchRequest('s', DecodeNigmaURI);
        }

        function GetRamblerSearchSiteRequest() {
            return GetSearchRequest('query');
        }

        function GetBaiduSearchSiteRequest() {
            return GetSearchRequest('wd');
        }

        function GetGoogleTypedSearchRequest() {
            var t = document.getElementById('lst-ib');
            if (t && t.tagName.toLowerCase() == "input")
                return t.value;
            else
                return ns.GetSearchSiteRequest();
        }
        try {
            var currentPageUrl = document.location.href;
            var schemeEndPos = currentPageUrl.indexOf("://");
            var linkFilterFunction;
            var getSearchSiteRequest;
            var getTypedRequest = null;
            if (schemeEndPos !== -1) {
                var host = currentPageUrl.substr(schemeEndPos + 3).toLowerCase();
                if (host.indexOf("www.google.") === 0) {
                    linkFilterFunction = IsGoogleSearch;
                    getSearchSiteRequest = GetGeneralSearchSiteRequest;
                    getTypedRequest = GetGoogleTypedSearchRequest;
                } else if (host.indexOf("yandex.") === 0 || host.indexOf("www.yandex.com") === 0) {
                    linkFilterFunction = IsYandexSearch;
                    getSearchSiteRequest = GetYandexSearchSiteRequest;
                } else if (host.indexOf("search.yahoo.com") === 0) {
                    linkFilterFunction = IsYahooSearch;
                    getSearchSiteRequest = GetYahooSearchSiteRequest;
                } else if (host.indexOf("search.yahoo.co.") === 0) {
                    linkFilterFunction = IsYahooCoSearch;
                    getSearchSiteRequest = GetYahooSearchSiteRequest;
                } else if (host.indexOf("search.yahoo.com") !== -1) {
                    linkFilterFunction = IsYahooLocalSearch;
                    getSearchSiteRequest = GetYahooSearchSiteRequest;
                } else if (host.indexOf("www.bing.com") === 0) {
                    linkFilterFunction = IsBingSearch;
                    getSearchSiteRequest = GetGeneralSearchSiteRequest;
                } else if (host.indexOf("go.mail.ru") === 0) {
                    linkFilterFunction = IsMailRuSearch;
                    getSearchSiteRequest = GetGeneralSearchSiteRequest;
                } else if (host.indexOf("nigma.ru") === 0) {
                    linkFilterFunction = IsNigmaRuSearch;
                    getSearchSiteRequest = GetNigmaSearchSiteRequest;
                } else if (host.indexOf("www.nigma.ru") === 0) {
                    linkFilterFunction = IsNigmaRuSearch;
                    getSearchSiteRequest = GetNigmaSearchSiteRequest;
                } else if (host.indexOf("nova.rambler.ru") === 0) {
                    linkFilterFunction = IsRamblerRuSearch;
                    getSearchSiteRequest = GetRamblerSearchSiteRequest;
                } else if (host.indexOf("www.baidu.com") === 0) {
                    linkFilterFunction = IsBaiduComSearch;
                    getSearchSiteRequest = GetBaiduSearchSiteRequest;
                } else if (host.indexOf("www.baidu.jp") === 0) {
                    linkFilterFunction = IsBaiduJpSearch;
                    getSearchSiteRequest = GetBaiduSearchSiteRequest;
                } else if (host.indexOf("www.ask.com") === 0) {
                    linkFilterFunction = IsAskComSearch;
                    getSearchSiteRequest = GetGeneralSearchSiteRequest;
                } else {
                    linkFilterFunction = NotSearchSite;
                    getSearchSiteRequest = NotSearchSiteRequest;
                }
            }
            ns.IsLinkSearchResult = linkFilterFunction;
            ns.GetSearchSiteRequest = getSearchSiteRequest;
            ns.GetTypedSearchRequest = getTypedRequest ? getTypedRequest : getSearchSiteRequest;
        } catch (e) {
            ns.IsLinkSearchResult = NotSearchSite;
            ns.GetSearchSiteRequest = NotSearchSiteRequest;
            ns.GetTypedSearchRequest = NotSearchSiteRequest;
        }

        function IsElementNode(node) {
            return node.nodeType === 1;
        }

        function IsNodeContainsElementWithTag(node, observeTag) {
            return IsElementNode(node) && (node.tagName.toLowerCase() === observeTag || node.getElementsByTagName(observeTag).length > 0);
        }

        function MutationChangeObserver(observeTag) {
            var m_observer;
            var m_callback;
            var m_functionCheckInteresting = observeTag ? function(node) {
                return IsNodeContainsElementWithTag(node, observeTag);
            } : IsElementNode;

            function ProcessNodeList(nodeList) {
                for (var i = 0; i < nodeList.length; ++i) {
                    if (m_functionCheckInteresting(nodeList[i]))
                        return true;
                }
                return false;
            }

            function ProcessDomChange(records) {
                if (!m_callback)
                    return;
                for (var i = 0; i < records.length; ++i) {
                    var record = records[i];
                    if ((record.addedNodes.length && ProcessNodeList(record.addedNodes)) ||
                        (record.removedNodes.length && ProcessNodeList(record.removedNodes))) {
                        m_callback();
                        return;
                    }
                }
            }
            this.Start = function(callback) {
                m_callback = callback;
                m_observer = new MutationObserver(ProcessDomChange);
                m_observer.observe(document, {
                    childList: true,
                    subtree: true
                });
            };
            this.Stop = function() {
                m_observer.disconnect();
                m_callback = null;
            };
        }

        function DomEventsChangeObserver(observeTag) {
            var m_callback;
            var m_functionCheckInteresting = observeTag ? function(node) {
                return IsNodeContainsElementWithTag(node, observeTag);
            } : IsElementNode;

            function ProcessEvent(event) {
                if (!m_callback)
                    return;
                if (m_functionCheckInteresting(event.target))
                    m_callback();
            }
            this.Start = function(callback) {
                ns.AddRemovableEventListener(window, "DOMNodeInserted", ProcessEvent);
                ns.AddRemovableEventListener(window, "DOMNodeRemoved", ProcessEvent);
                m_callback = callback;
            }
            this.Stop = function() {
                ns.RemoveEventListener(window, "DOMNodeInserted", ProcessEvent);
                ns.RemoveEventListener(window, "DOMNodeRemoved", ProcessEvent);
                m_callback = null;
            }
        }

        function TimeoutChangeObserver(observeTag) {
            var m_interval;
            var m_callback;
            var m_tagCount;
            var m_attribute = 'klot_' + ns.GetCurrentTime();

            function IsChangesOccure(nodeList) {
                for (var i = 0; i < nodeList.length; ++i)
                    if (!nodeList[i][m_attribute])
                        return true;
                return false;
            }

            function FillTagInfo(nodeList) {
                m_tagCount = nodeList.length;
                for (var i = 0; i < m_tagCount; ++i)
                    nodeList[i][m_attribute] = true;
            }

            function TimeoutProcess() {
                if (!m_callback)
                    return;
                var nodeList = observeTag ? document.getElementsByTagName(observeTag) : document.getElementsByTagName("*");
                if (nodeList.length !== m_tagCount || IsChangesOccure(nodeList)) {
                    FillTagInfo(nodeList);
                    m_callback();
                }
            }
            this.Start = function(callback) {
                m_callback = callback;
                FillTagInfo(document.getElementsByTagName(observeTag));
                m_interval = ns.SetInterval(TimeoutProcess, 10 * 1000);
                if (document.readyState !== "complete")
                    ns.AddEventListener(window, "load", TimeoutProcess);
            }
            this.Stop = function() {
                clearInterval(m_interval);
                m_callback = null;
            }
        }
        ns.GetDomChangeObserver = function(observeTag) {
            var observeTagLowerCase = observeTag ? observeTag.toLowerCase() : observeTag;
            if (window.MutationObserver && document.documentMode !== 11)
                return new MutationChangeObserver(observeTagLowerCase);
            if (window.addEventListener)
                return new DomEventsChangeObserver(observeTagLowerCase);
            return new TimeoutChangeObserver(observeTagLowerCase);
        }
        return ns;
    })(KasperskyLab || {});
    (function(ns) {
        function md5cycle(x, k) {
            var a = x[0],
                b = x[1],
                c = x[2],
                d = x[3];
            a = ff(a, b, c, d, k[0], 7, -680876936);
            d = ff(d, a, b, c, k[1], 12, -389564586);
            c = ff(c, d, a, b, k[2], 17, 606105819);
            b = ff(b, c, d, a, k[3], 22, -1044525330);
            a = ff(a, b, c, d, k[4], 7, -176418897);
            d = ff(d, a, b, c, k[5], 12, 1200080426);
            c = ff(c, d, a, b, k[6], 17, -1473231341);
            b = ff(b, c, d, a, k[7], 22, -45705983);
            a = ff(a, b, c, d, k[8], 7, 1770035416);
            d = ff(d, a, b, c, k[9], 12, -1958414417);
            c = ff(c, d, a, b, k[10], 17, -42063);
            b = ff(b, c, d, a, k[11], 22, -1990404162);
            a = ff(a, b, c, d, k[12], 7, 1804603682);
            d = ff(d, a, b, c, k[13], 12, -40341101);
            c = ff(c, d, a, b, k[14], 17, -1502002290);
            b = ff(b, c, d, a, k[15], 22, 1236535329);
            a = gg(a, b, c, d, k[1], 5, -165796510);
            d = gg(d, a, b, c, k[6], 9, -1069501632);
            c = gg(c, d, a, b, k[11], 14, 643717713);
            b = gg(b, c, d, a, k[0], 20, -373897302);
            a = gg(a, b, c, d, k[5], 5, -701558691);
            d = gg(d, a, b, c, k[10], 9, 38016083);
            c = gg(c, d, a, b, k[15], 14, -660478335);
            b = gg(b, c, d, a, k[4], 20, -405537848);
            a = gg(a, b, c, d, k[9], 5, 568446438);
            d = gg(d, a, b, c, k[14], 9, -1019803690);
            c = gg(c, d, a, b, k[3], 14, -187363961);
            b = gg(b, c, d, a, k[8], 20, 1163531501);
            a = gg(a, b, c, d, k[13], 5, -1444681467);
            d = gg(d, a, b, c, k[2], 9, -51403784);
            c = gg(c, d, a, b, k[7], 14, 1735328473);
            b = gg(b, c, d, a, k[12], 20, -1926607734);
            a = hh(a, b, c, d, k[5], 4, -378558);
            d = hh(d, a, b, c, k[8], 11, -2022574463);
            c = hh(c, d, a, b, k[11], 16, 1839030562);
            b = hh(b, c, d, a, k[14], 23, -35309556);
            a = hh(a, b, c, d, k[1], 4, -1530992060);
            d = hh(d, a, b, c, k[4], 11, 1272893353);
            c = hh(c, d, a, b, k[7], 16, -155497632);
            b = hh(b, c, d, a, k[10], 23, -1094730640);
            a = hh(a, b, c, d, k[13], 4, 681279174);
            d = hh(d, a, b, c, k[0], 11, -358537222);
            c = hh(c, d, a, b, k[3], 16, -722521979);
            b = hh(b, c, d, a, k[6], 23, 76029189);
            a = hh(a, b, c, d, k[9], 4, -640364487);
            d = hh(d, a, b, c, k[12], 11, -421815835);
            c = hh(c, d, a, b, k[15], 16, 530742520);
            b = hh(b, c, d, a, k[2], 23, -995338651);
            a = ii(a, b, c, d, k[0], 6, -198630844);
            d = ii(d, a, b, c, k[7], 10, 1126891415);
            c = ii(c, d, a, b, k[14], 15, -1416354905);
            b = ii(b, c, d, a, k[5], 21, -57434055);
            a = ii(a, b, c, d, k[12], 6, 1700485571);
            d = ii(d, a, b, c, k[3], 10, -1894986606);
            c = ii(c, d, a, b, k[10], 15, -1051523);
            b = ii(b, c, d, a, k[1], 21, -2054922799);
            a = ii(a, b, c, d, k[8], 6, 1873313359);
            d = ii(d, a, b, c, k[15], 10, -30611744);
            c = ii(c, d, a, b, k[6], 15, -1560198380);
            b = ii(b, c, d, a, k[13], 21, 1309151649);
            a = ii(a, b, c, d, k[4], 6, -145523070);
            d = ii(d, a, b, c, k[11], 10, -1120210379);
            c = ii(c, d, a, b, k[2], 15, 718787259);
            b = ii(b, c, d, a, k[9], 21, -343485551);
            x[0] = add32(a, x[0]);
            x[1] = add32(b, x[1]);
            x[2] = add32(c, x[2]);
            x[3] = add32(d, x[3]);
        }

        function cmn(q, a, b, x, s, t) {
            a = add32(add32(a, q), add32(x, t));
            return add32((a << s) | (a >>> (32 - s)), b);
        }

        function ff(a, b, c, d, x, s, t) {
            return cmn((b & c) | ((~b) & d), a, b, x, s, t);
        }

        function gg(a, b, c, d, x, s, t) {
            return cmn((b & d) | (c & (~d)), a, b, x, s, t);
        }

        function hh(a, b, c, d, x, s, t) {
            return cmn(b ^ c ^ d, a, b, x, s, t);
        }

        function ii(a, b, c, d, x, s, t) {
            return cmn(c ^ (b | (~d)), a, b, x, s, t);
        }

        function md51(s) {
            var n = s.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i;
            for (i = 64; i <= s.length; i += 64) {
                md5cycle(state, md5blk(s.substring(i - 64, i)));
            }
            s = s.substring(i - 64);
            var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < s.length; i++)
                tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i++)
                    tail[i] = 0;
            }
            tail[14] = n * 8;
            md5cycle(state, tail);
            return state;
        }

        function md5blk(s) {
            var md5blks = [],
                i;
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) +
                    (s.charCodeAt(i + 1) << 8) +
                    (s.charCodeAt(i + 2) << 16) +
                    (s.charCodeAt(i + 3) << 24);
            }
            return md5blks;
        }
        var hex_chr = '0123456789abcdef'.split('');

        function rhex(n) {
            var s = '',
                j = 0;
            for (; j < 4; j++)
                s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
            return s;
        }

        function hex(x) {
            for (var i = 0; i < x.length; i++)
                x[i] = rhex(x[i]);
            return x.join('');
        }
        ns.md5 = function(s) {
            return hex(md51(s));
        };

        function add32(a, b) {
            return (a + b) & 0xFFFFFFFF;
        }
        if (ns.md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
            add32 = function(x, y) {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                    msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return (msw << 16) | (lsw & 0xFFFF);
            }
        }
    })(KasperskyLab || {});
    var KasperskyLab = (function(ns) {
        ns.Balloon = function(createCallback, updateCallback, cssPostfix) {
            var Initializing = 0;
            var Ready = 1;
            var m_balloon = null;
            var m_isDisplayed = false;
            var m_state = Initializing;
            var m_currentGetCoordCallback = EmptyCoordCallback;

            function EmptyCoordCallback() {
                throw new Error("empty coord callback");
            }

            function GetFrameDocument(frameNode) {
                return frameNode.contentDocument || frameNode.contentWindow.document;
            }

            function FillFrame(setupBalloonCallback) {
                var frameDocument = GetFrameDocument(m_balloon);
                if (frameDocument && frameDocument.body && !frameDocument.filled) {
                    var fillBodyFunc = function() {
                        if (frameDocument.body && frameDocument.body.childNodes.length === 0) {
                            if (ns.IsRtl)
                                frameDocument.body.className = "rtl";
                            createCallback(frameDocument.body, frameDocument);
                            setupBalloonCallback();
                        }
                    };
                    if (cssPostfix) {
                        ns.AddCssLink(frameDocument, ns.GetResourceSrc(cssPostfix), fillBodyFunc, function() {
                            frameDocument.open().write("<html><head><link type=\"text/css\" rel=\"stylesheet\" href=\"" + ns.GetResourceSrc(cssPostfix) + "\"></head><body></body></html>");
                            frameDocument.close();
                            ns.AddEventListener(frameDocument, "load", fillBodyFunc);
                            ns.SessionLog("error loading " + cssPostfix);
                        });
                    } else {
                        fillBodyFunc();
                    }
                    frameDocument.filled = true;
                }
            }

            function CreateBalloon(setupBalloonCallback) {
                m_balloon = document.createElement("iframe");
                m_balloon.scrolling = "no";
                m_balloon.frameBorder = "0";
                m_balloon.style.zIndex = "2147483647";
                m_balloon.style.border = "0";
                m_balloon.style.position = "absolute";
                m_balloon.allowTransparency = "true";
                HideBalloon();
                document.body.appendChild(m_balloon);
                try {
                    ns.AddIframeDoctype(m_balloon);
                    FillFrame(setupBalloonCallback);
                } catch (e) {
                    m_balloon.src = 'javascript:(function () {' + 'document.open();document.domain=\'' + document.domain + '\';document.close();' + '})();';
                    ns.SetTimeout(
                        function() {
                            ns.AddIframeDoctype(m_balloon);
                            FillFrame(setupBalloonCallback);
                        }, 0);
                }
                ns.SetTimeout(
                    function() {
                        FillFrame(setupBalloonCallback);
                    }, 100);
            }

            function GetElementSize(element) {
                return {
                    width: element.scrollWidth,
                    height: element.scrollHeight
                };
            }

            function HideBalloon() {
                if (m_balloon)
                    m_balloon.style.display = "none";
            }

            function ResizeBalloon(element) {
                var balloonSize = GetElementSize(element);
                m_balloon.style.height = balloonSize.height + "px";
                m_balloon.style.width = balloonSize.width + "px";
                return balloonSize;
            }

            function SetupBalloon() {
                m_state = Ready;
                m_balloon.style.display = m_isDisplayed ? "" : "none";
                m_balloon.style.height = "1px";
                m_balloon.style.width = "1px";
                m_balloon.style.left = "1px";
                m_balloon.style.top = "1px";
                var frameDocument = GetFrameDocument(m_balloon);
                if (updateCallback)
                    updateCallback(frameDocument);
                var balloonSize = ResizeBalloon(frameDocument.body);
                var coords = m_currentGetCoordCallback(balloonSize);
                m_balloon.style.left = Math.round(coords.x).toString() + "px";
                m_balloon.style.top = Math.round(coords.y).toString() + "px";
            }
            this.Show = function(getCoordCallback) {
                m_currentGetCoordCallback = getCoordCallback;
                m_isDisplayed = true;
                if (!m_balloon)
                    CreateBalloon(SetupBalloon);
                else if (m_state === Ready)
                    SetupBalloon();
            }
            this.Hide = function() {
                m_currentGetCoordCallback = EmptyCoordCallback;
                m_isDisplayed = false;
                HideBalloon();
            }
            this.Update = function() {
                if (m_isDisplayed)
                    SetupBalloon();
            }
        };
        return ns;
    })(KasperskyLab || {});
    (function() {
        KasperskyLab.WORK_IDENTIFIERS = "2A408F1A-75D1-784C,1E6277FB-AF98-6E4C,FD9D84FD-C2DE-3543";
        var kaspersyLabSessionInstance = null;
        (function(ns) {
            var prefix = ns.PREFIX || "https://gc.kis.v2.scr.kaspersky-labs.com/";
            var signature = ns.SIGNATURE || "E1DE83B2-E066-2D4A-BC61-FA50A54EE967";
            var workIdentifiersString = ns.WORK_IDENTIFIERS || "";
            var cspNonce = ns.CSP_NONCE || "93FBF7B21A99D74BAAEDD3368F0FBC91"
            if (workIdentifiersString) {
                var workIdentifiers = workIdentifiersString.split(",");
                (function(signature) {
                    var pattern = signature.toLowerCase();
                    for (var i = 0, scriptsCount = document.scripts.length; i < scriptsCount; ++i) {
                        var tag = document.scripts[i];
                        if (typeof tag.src === 'string' && tag.src.length > 76 &&
                            tag.src.toLowerCase().indexOf(pattern) > 0 &&
                            /\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\/main.js/.test(tag.src)) {
                            for (var i = 0; i < workIdentifiers.length; ++i)
                                window[workIdentifiers[i]] = true;
                            tag.parentElement.removeChild(tag);
                            return;
                        }
                    }
                })(signature);
            }

            function IsDefined(variable) {
                return "undefined" !== typeof(variable);
            }
            var m_syncCallSupported = true;
            var ajaxRequest = (function() {
                var oldOpen = window.XMLHttpRequest && window.XMLHttpRequest.prototype.open;
                var oldSend = window.XMLHttpRequest && window.XMLHttpRequest.prototype.send;
                var oldXHR = window.XMLHttpRequest;
                var oldXDR = window.XDomainRequest;
                return {
                    GetAsyncRequest: function() {
                        var xmlhttp = oldXDR ? new oldXDR() : new oldXHR();
                        if (!oldXDR) {
                            xmlhttp.open = oldOpen;
                            xmlhttp.send = oldSend;
                        }
                        xmlhttp.onprogress = function() {};
                        return xmlhttp;
                    },
                    GetSyncRequest: function() {
                        var xmlhttp = new oldXHR();
                        xmlhttp.open = oldOpen;
                        xmlhttp.send = oldSend;
                        xmlhttp.onprogress = function() {};
                        return xmlhttp;
                    }
                };
            })();
            var PingPongCallReceiver = function(caller) {
                var m_caller = caller;
                var m_isProductConnected = false;
                var m_pingWaitResponse = false;
                var m_requestDelay = ns.MaxRequestDelay;
                var m_requestTimer = null;
                var m_callCallback = function() {};
                var m_errorCallback = function() {};
                var m_updateCallback = function() {};

                function SendRequest() {
                    try {
                        m_caller.Call(
                            "from",
                            null,
                            null,
                            true,
                            function(result, parameters, method) {
                                m_pingWaitResponse = false;
                                m_isProductConnected = true;
                                if (parameters === "undefined" || method === "undefined") {
                                    m_errorCallback('AJAX pong is not received. Product is deactivated');
                                    return;
                                }
                                if (method) {
                                    ns.SetTimeout(function() {
                                        SendRequest();
                                    }, 0);
                                    m_callCallback(method, parameters);
                                }
                            },
                            function(error) {
                                m_pingWaitResponse = false;
                                m_isProductConnected = false;
                                PostponeInit();
                                m_errorCallback(error);
                            });
                        m_pingWaitResponse = true;
                    } catch (e) {
                        m_errorCallback('Ajax send ping exception: ' + (e.message || e));
                    }
                }
                this.StartReceive = function(callCallback, errorCallback, updateCallback) {
                    m_callCallback = callCallback;
                    m_errorCallback = errorCallback;
                    m_updateCallback = updateCallback;
                    m_requestDelay = m_updateCallback();
                    m_requestTimer = ns.SetTimeout(function ping() {
                        try {
                            if (m_pingWaitResponse) {
                                m_requestTimer = ns.SetTimeout(ping, 100);
                                return;
                            }
                            m_requestDelay = m_updateCallback();
                            SendRequest();
                            m_requestTimer = ns.SetTimeout(ping, m_requestDelay);
                        } catch (e) {
                            m_errorCallback('Send ping request: ' + (e.message || e));
                        }
                    }, m_requestDelay);
                };
                this.StopReceive = function() {
                    clearTimeout(m_requestTimer);
                    m_requestTimer = null;
                    m_callCallback = function() {};
                    m_errorCallback = function() {};
                    m_updateCallback = function() {};
                };
                this.IsStarted = function() {
                    return m_requestTimer !== null;
                }
                this.IsProductConnected = function() {
                    return m_isProductConnected;
                };
            };
            var AjaxCaller = function() {
                var m_path = prefix + signature;

                function NoCacheParameter() {
                    return "&nocache=" + Math.floor((1 + Math.random()) * 0x10000).toString(16);
                }

                function GetSpecialPlugins(predefined) {
                    return (predefined) ? "&plugins=" + encodeURIComponent(predefined) : "";
                }

                function PrepareRequestObject(command, commandAttribute, isPost, isAsync) {
                    var request = isAsync ? ajaxRequest.GetAsyncRequest() : ajaxRequest.GetSyncRequest();
                    if (request) {
                        var urlPath = m_path + "/" + command;
                        if (commandAttribute)
                            urlPath += "/" + commandAttribute;
                        if (isPost) {
                            request.open("POST", urlPath);
                        } else {
                            if (urlPath.indexOf("?") === -1)
                                urlPath += "?get";
                            urlPath += NoCacheParameter();
                            request.open("GET", urlPath, isAsync);
                        }
                    }
                    return request;
                }

                function AsyncCall(command, commandAttribute, data, callbackResult, callbackError) {
                    try {
                        var request = PrepareRequestObject(command, commandAttribute, data ? true : false, true);
                        if (!request) {
                            callbackError && callbackError("Cannot create AJAX request!");
                            return;
                        }
                        var timeout = ns.SetTimeout(function() {
                            callbackError && callbackError("Cannot send AJAX request for calling " + command + "/" + commandAttribute);
                            request.abort();
                        }, 120000);
                        request.onerror = function() {
                            clearTimeout(timeout);
                            request.onerror = function() {};
                            request.onload = function() {};
                            callbackError && callbackError("AJAX request error for calling " + command + "/" + commandAttribute);
                        };
                        request.onload = function() {
                            clearTimeout(timeout);
                            timeout = null;
                            request.onload = function() {};
                            request.onerror = function() {};
                            if (request.responseText) {
                                if (callbackResult)
                                    callbackResult(request.responseText);
                                request = null;
                                return;
                            }
                            request = null;
                            if (callbackError) {
                                callbackError("AJAX request with unsupported url type!");
                            }
                        };
                        request.send(data);
                        ns.Log("Call native function " + command + "/" + commandAttribute);
                    } catch (e) {
                        if (callbackError) {
                            callbackError("AJAX request " + command + "/" + commandAttribute + " exception: " + (e.message || e));
                        }
                    }
                };

                function SyncCall(command, commandAttribute, data, callbackResult, callbackError) {
                    try {
                        if (!m_syncCallSupported)
                            return false;
                        var request = PrepareRequestObject(command, commandAttribute + "?" + ns.EncodeURI(data), false, false);
                        if (!request) {
                            callbackError && callbackError("Cannot create AJAX request!");
                            return false;
                        }
                        request.send();
                        if (request.status === 200) {
                            if (callbackResult && request.responseText)
                                callbackResult(request.responseText);
                            request = null;
                            return true;
                        }
                    } catch (e) {
                        if (callbackError)
                            callbackError("AJAX request " + command + " exception: " + (e.message || e));
                    }
                    return false;
                }
                this.Start = function(callbackSuccess) {
                    callbackSuccess();
                }
                this.SendLog = function(message) {
                    AsyncCall("log?" + encodeURIComponent(message));
                }
                this.Call = function(command, commandAttribute, data, isAsync, callbackResult, callbackError) {
                    var callFunction = (isAsync || !IsDefined(isAsync)) ? AsyncCall : SyncCall;
                    return callFunction(
                        command,
                        commandAttribute,
                        data,
                        function(responseText) {
                            var commandResponse = ns.JSONParse(responseText);
                            if (commandResponse.result === -1610612735) {
                                callFunction(
                                    command,
                                    commandAttribute,
                                    data,
                                    function(responseText) {
                                        if (!callbackResult)
                                            return;
                                        commandResponse = ns.JSONParse(responseText);
                                        callbackResult(commandResponse.result, commandResponse.parameters, commandResponse.method);
                                    },
                                    callbackError);
                            } else {
                                if (callbackResult)
                                    callbackResult(commandResponse.result, commandResponse.parameters, commandResponse.method);
                            }
                        },
                        callbackError);
                }
                this.InitCall = function(pluginsInitData, callbackResult, callbackError) {
                    var specialPlugins = IsDefined(ns.PLUGINS_LIST) ? GetSpecialPlugins(ns.PLUGINS_LIST) : GetSpecialPlugins("");
                    var serializedInitData = (pluginsInitData.length) ? "&data=" + encodeURIComponent(ns.JSONStringify({
                        data: pluginsInitData
                    })) : "";
                    var isTopLevel = "&isTopLevel=" + (window && window == window.top).toString();
                    if (document.location.href == "data:text/html,chromewebdata")
                        return callbackError();
                    AsyncCall(
                        "init?url=" + encodeURIComponent(document.location.href) + specialPlugins + serializedInitData + isTopLevel,
                        null,
                        null,
                        function(responseText) {
                            var initSettings = ns.JSONParse(responseText);
                            m_path = (prefix || '/') + initSettings.ajaxId + '/' + initSettings.sessionId;
                            callbackResult(initSettings);
                        },
                        callbackError);
                }
                this.GetReceiver = function() {
                    return new PingPongCallReceiver(this);
                }
            };
            var m_webSocketSupported = IsDefined(window.WebSocket);
            var WebSocketWrapper = function() {
                var WebSocketObject = WebSocket;
                var WebSocketSend = WebSocket.prototype.send;
                var WebSocketClose = WebSocket.prototype.close;
                this.GetWebSocket = function(path) {
                    var webSocket = new WebSocketObject(path);
                    webSocket.send = WebSocketSend;
                    webSocket.close = WebSocketClose;
                    return webSocket;
                }
            }
            var m_webSocketWrapper = m_webSocketSupported ? new WebSocketWrapper : null;
            var WebSocketCaller = function() {
                var m_socket;
                var m_waitResponse = {};
                var m_callReceiver = function() {};
                var m_errorCallback = function() {};
                var m_callReceiverEnabled = false;
                var m_connected = false;
                var m_initialized = false;
                var m_deferredCalls = [];
                var m_wasCallbackErrorCalled = false;

                function GetWebSocket(callbackSuccess, callbackError) {
                    var url = (prefix === "/") ?
                        document.location.protocol + "//" + document.location.host + prefix :
                        prefix;
                    var webSocketPath = (url.indexOf("http:") === 0) ?
                        "ws" + url.substr(4) :
                        "wss" + url.substr(5);
                    webSocketPath += signature + "/websocket?url=" + encodeURIComponent(document.location.href) + "&nocache=" + (new Date().getTime());
                    var webSocket;
                    try {
                        webSocket = m_webSocketWrapper.GetWebSocket(webSocketPath);
                    } catch (e) {
                        throw e;
                    }
                    webSocket.onmessage = function(arg) {
                        ProcessMessage(arg, callbackError);
                    };
                    webSocket.onerror = function() {
                        if (!m_wasCallbackErrorCalled && callbackError)
                            callbackError();
                        m_wasCallbackErrorCalled = true;
                    }
                    webSocket.onopen = function() {
                        m_wasCallbackErrorCalled = false;
                        m_connected = true;
                        if (callbackSuccess)
                            callbackSuccess();
                    }
                    webSocket.onclose = function(closeEvent) {
                        m_connected = false;
                        if (closeEvent && closeEvent.code == 1006)
                            webSocket.onerror(closeEvent);
                        m_errorCallback("websocket closed");
                    };
                    return webSocket;
                }

                function ProcessMessage(arg, errorCallback) {
                    try {
                        m_wasCallbackErrorCalled = false;
                        var response = ns.JSONParse(arg.data);
                        if (m_waitResponse[response.callId]) {
                            var callWaiter = m_waitResponse[response.callId];
                            delete m_waitResponse[response.callId];
                            clearTimeout(callWaiter.timeout);
                            if (callWaiter.callbackResult)
                                callWaiter.callbackResult(response.commandData);
                            return;
                        }
                        if (!m_initialized) {
                            m_deferredCalls.push(arg);
                            return;
                        }
                        if (response.command === "from") {
                            var command = ns.JSONParse(response.commandData);
                            m_callReceiver(command.method, command.parameters);
                        } else if (response.command === "reconnect") {
                            m_socket.onmessage = function() {};
                            m_socket.onerror = function() {};
                            m_socket.onopen = function() {};
                            m_socket.onclose = function() {};
                            m_socket.close();
                            m_socket = GetWebSocket(function() {
                                    CallImpl("restore", "", response.commandData);
                                },
                                errorCallback);
                        }
                    } catch (e) {
                        if (kaspersyLabSessionInstance)
                            kaspersyLabSessionInstance.Log(e);
                    }
                }

                function CallImpl(command, commandAttribute, data, callbackResult, callbackError) {
                    try {
                        var callId = 0;
                        if (callbackResult || callbackError) {
                            callId = Math.floor((1 + Math.random()) * 0x10000);
                            var timeout = ns.SetTimeout(function() {
                                delete m_waitResponse[callId];
                                if (callbackError)
                                    callbackError("websocket call timeout for " + command + "/" + commandAttribute);
                            }, 120000);
                            var callWaiter = {
                                callId: callId,
                                callbackResult: callbackResult,
                                timeout: timeout
                            };
                            m_waitResponse[callId] = callWaiter;
                        }
                        m_socket.send(ns.JSONStringify({
                            callId: callId,
                            command: command,
                            commandAttribute: commandAttribute || "",
                            commandData: data || ""
                        }));
                    } catch (e) {
                        if (callbackError)
                            callbackError("websocket call " + command + "/" + commandAttribute + " exception: " + (e.message || e));
                    }
                }
                this.Start = function(callbackSuccess, callbackError) {
                    try {
                        m_socket = GetWebSocket(callbackSuccess, callbackError);
                    } catch (e) {
                        if (callbackError)
                            callbackError("websocket start exception: " + (e.message || e));
                    }
                }
                this.SendLog = function(message) {
                    CallImpl("log", null, message);
                }
                this.Call = function(command, commandAttribute, data, isAsync, callbackResult, callbackError) {
                    if (IsDefined(isAsync) && !isAsync)
                        return false;
                    CallImpl(
                        command,
                        commandAttribute,
                        data,
                        callbackResult ?
                        function(responseText) {
                            if (callbackResult) {
                                var command = ns.JSONParse(responseText);
                                callbackResult(command.result, command.parameters, command.method);
                            }
                        } :
                        null,
                        callbackError);
                }
                this.InitCall = function(pluginsInitData, callbackResult, callbackError) {
                    var initData = {
                        url: document.location.href,
                        plugins: (IsDefined(ns.PLUGINS_LIST)) ? ns.PLUGINS_LIST : "",
                        data: {
                            data: pluginsInitData
                        },
                        isTopLevel: (window && window == window.top)
                    };
                    if (document.location.href == "data:text/html,chromewebdata")
                        return callbackError();
                    CallImpl("init", null, ns.JSONStringify(initData),
                        function(responseText) {
                            m_initialized = true;
                            var initSettings = ns.JSONParse(responseText);
                            callbackResult(initSettings);
                            for (var i = 0; i < m_deferredCalls.length; ++i)
                                ProcessMessage(m_deferredCalls[i], callbackError);
                            m_deferredCalls = [];
                        },
                        callbackError);
                }
                this.GetReceiver = function() {
                    return this;
                }
                this.StartReceive = function(callMethod, errorCallback) {
                    m_callReceiverEnabled = true;
                    m_callReceiver = callMethod;
                    m_errorCallback = errorCallback;
                }
                this.StopReceive = function() {
                    m_callReceiverEnabled = false;
                    m_callReceiver = function() {};
                    m_errorCallback = function() {};
                    if (m_socket) {
                        m_connected = false;
                        m_socket.onmessage = function() {};
                        m_socket.onerror = function() {};
                        m_socket.onopen = function() {};
                        m_socket.onclose = function() {};
                        m_socket.close();
                        m_socket = null;
                    }
                }
                this.IsStarted = function() {
                    return m_callReceiverEnabled;
                }
                this.IsProductConnected = function() {
                    return m_connected;
                }
            }
            var CallReceiver = function(caller) {
                var m_plugins = {};
                var m_receiver = caller.GetReceiver();
                var m_caller = caller;
                this.RegisterMethod = function(methodName, callback) {
                    var pluginId = GetPluginIdFromMethodName(methodName);
                    if (pluginId) {
                        var methods = GetPluginMethods(pluginId);
                        if (methods) {
                            if (methods[methodName]) {
                                throw 'Already registered method ' + methodName;
                            }
                            methods[methodName] = callback;
                        } else {
                            throw 'Cannot registered ' + methodName;
                        }
                    }
                };
                this.RegisterPlugin = function(pluginId, callbackPing, callbackError) {
                    if (m_plugins[pluginId]) {
                        throw 'Already started plugin ' + pluginId;
                    }
                    var plugin = {
                        onError: callbackError,
                        onPing: callbackPing,
                        methods: {}
                    };
                    m_plugins[pluginId] = plugin;
                    if (!m_receiver.IsStarted())
                        m_receiver.StartReceive(CallMethod, ReportError, UpdateDelay);
                };
                this.UnregisterPlugin = function(pluginId) {
                    delete m_plugins[pluginId];
                    if (IsPluginListEmpty())
                        m_receiver.StopReceive();
                };
                this.UnregisterAll = function() {
                    if (IsPluginListEmpty())
                        return;
                    m_receiver.StopReceive();
                    m_plugins = {};
                };
                this.IsEmpty = IsPluginListEmpty;

                function IsPluginListEmpty() {
                    for (var key in m_plugins) {
                        if (m_plugins.hasOwnProperty(key))
                            return false;
                    }
                    return true;
                }
                this.IsProductConnected = function() {
                    return m_receiver.IsProductConnected();
                }

                function UpdateDelay() {
                    var newDelay = ns.MaxRequestDelay;
                    var currentTime = ns.GetCurrentTime();
                    for (var pluginId in m_plugins) {
                        try {
                            var onPing = m_plugins[pluginId].onPing;
                            if (onPing) {
                                var delay = onPing(currentTime);
                                if (delay < newDelay && delay > 0 && delay < ns.MaxRequestDelay) {
                                    newDelay = delay;
                                }
                            }
                        } catch (e) {
                            ReportPluginError(pluginId, 'UpdateDelay: ' + (e.message || e));
                        }
                    }
                    return newDelay;
                }

                function ReportPluginError(pluginId, status) {
                    var onError = m_plugins[pluginId].onError;
                    if (onError)
                        onError(status);
                }

                function ReportError(status) {
                    for (var pluginId in m_plugins)
                        ReportPluginError(pluginId, status);
                }

                function GetPluginIdFromMethodName(methodName) {
                    if (methodName) {
                        var names = methodName.split('.', 2);
                        if (names.length === 2) {
                            return names[0];
                        }
                    }
                    return null;
                }

                function GetPluginMethods(pluginId) {
                    var plugin = m_plugins[pluginId];
                    return plugin ? plugin.methods : null;
                }

                function CallPluginMethod(pluginId, methodName, args) {
                    var methods = GetPluginMethods(pluginId);
                    if (methods) {
                        var callback = methods[methodName];
                        if (callback) {
                            try {
                                callback(args);
                                m_caller.SendLog(methodName + " executed.");
                                return true;
                            } catch (e) {
                                m_caller.SendLog("Call " + methodName + " in plugin " + pluginId + " error: " + (e.message || e));
                            }
                        }
                    }
                    m_caller.SendLog("Cannot call " + methodName + " for plugin " + pluginId);
                    return false;
                }

                function CallMethod(methodName, args) {
                    ns.Log("Try to find js callback " + methodName);
                    var pluginId = GetPluginIdFromMethodName(methodName);
                    if (pluginId)
                        CallPluginMethod(pluginId, methodName, args);
                }
            };
            var KasperskyLabSessionClass = function(caller) {
                var self = this;
                var m_caller = caller;
                var m_callReceiver = new CallReceiver(caller);

                function CallImpl(methodName, arrayOfArgs, callbackResult, callbackError, isAsync) {
                    var data = (arrayOfArgs && arrayOfArgs.length) ?
                        ns.JSONStringify({
                            result: 0,
                            method: methodName,
                            parameters: arrayOfArgs
                        }) :
                        null;
                    return m_caller.Call("to", methodName, data, isAsync, callbackResult, callbackError);
                }

                function Call(methodName, arrayOfArgs, callbackResult, callbackError) {
                    CallImpl(methodName, arrayOfArgs, callbackResult, callbackError, true);
                }

                function SyncCall(methodName, arrayOfArgs, callbackResult, callbackError) {
                    return CallImpl(methodName, arrayOfArgs, callbackResult, callbackError, false);
                }

                function Stop() {
                    try {
                        m_callReceiver.UnregisterAll();
                        ns.Log("session stopped");
                        if (m_callReceiver.IsProductConnected()) {
                            if (!m_caller.Call("shutdown", null, null, false))
                                m_caller.Call("shutdown");
                        }
                    } catch (e) {}
                }

                function DeactivatePlugin(pluginId) {
                    ns.Log('DeactivatePlugin ' + pluginId);
                    m_callReceiver.UnregisterPlugin(pluginId);
                    if (m_callReceiver.IsEmpty()) {
                        Stop();
                    }
                }

                function ActivatePlugin(pluginId, callbackPing, callbackError) {
                    ns.Log('ActivatePlugin ' + pluginId);
                    m_callReceiver.RegisterPlugin(pluginId, callbackPing, function(e) {
                        callbackError && callbackError(e);
                        m_callReceiver.UnregisterPlugin(pluginId);
                        if (m_callReceiver.IsEmpty()) {
                            Stop();
                        }
                    });
                }

                function RegisterMethod(methodName, callback) {
                    ns.Log('RegisterMethod ' + methodName);
                    m_callReceiver.RegisterMethod(methodName, callback);
                }
                this.Log = function(error) {
                    try {
                        var msg = "" + (error.message || error);
                        if (error.stack)
                            msg += "\r\n" + error.stack;
                        msg && msg.length <= 2048 ? m_caller.SendLog(msg) : m_caller.SendLog(msg.substring(0, 2048) + '<...>');
                    } catch (e) {
                        ns.Log(e.message || e);
                    }
                };
                this.InitializePlugin = function(init) {
                    init(
                        function() {
                            ActivatePlugin.apply(self, arguments);
                        },
                        function() {
                            RegisterMethod.apply(self, arguments);
                        },
                        function() {
                            Call.apply(self, arguments);
                        },
                        function() {
                            DeactivatePlugin.apply(self, arguments);
                        },
                        function() {
                            return SyncCall.apply(self, arguments);
                        }
                    );
                };
                ns.AddEventListener(window, "unload", function() {
                    if (!m_callReceiver.IsEmpty())
                        Stop();
                });
            };
            var runners = {};
            var pluginsInitData = [];
            ns.AddRunner = function(pluginName, runnerFunc, initParameters) {
                runners[pluginName] = runnerFunc;
                if (initParameters) {
                    pluginsInitData.push({
                        plugin: pluginName,
                        parameters: initParameters
                    });
                }
            };
            ns.SessionLog = function(e) {
                if (kaspersyLabSessionInstance)
                    kaspersyLabSessionInstance.Log(e);
            }
            ns.ContentSecurityPolicyNonceAttribute = cspNonce;
            var SupportedCallerProvider = function() {
                var m_current = 0;
                var m_supportedCallers = [];
                if (m_webSocketSupported)
                    m_supportedCallers.push(new WebSocketCaller);
                m_supportedCallers.push(new AjaxCaller);

                function FindSupportedImpl(callbackSuccess) {
                    if (m_current < m_supportedCallers.length) {
                        var caller = m_supportedCallers[m_current++];
                        caller.Start(function() {
                            callbackSuccess(caller);
                        }, function() {
                            FindSupportedImpl(callbackSuccess);
                        });
                    } else {
                        m_current = 0;
                        PostponeInit();
                    }
                }
                this.FindSupported = function(callbackSuccess) {
                    FindSupportedImpl(callbackSuccess);
                }
            }

            function Init() {
                var callerProvider = new SupportedCallerProvider;
                callerProvider.FindSupported(
                    function(caller) {
                        caller.InitCall(
                            pluginsInitData,
                            function(initSettings) {
                                ns.IsRtl = initSettings.rtl;
                                var resSignature = ns.RES_SIGNATURE;
                                if (ns.IsDefined(initSettings.resSignature))
                                    resSignature = initSettings.resSignature;
                                ns.GetResourceSrc = function(resourceName) {
                                    return prefix + resSignature + resourceName;
                                };
                                kaspersyLabSessionInstance = new KasperskyLabSessionClass(caller);
                                var plugins = initSettings.plugins;
                                for (var i = 0, pluginsCount = plugins.length; i < pluginsCount; ++i) {
                                    var plugin = plugins[i];
                                    var pluginRunnerFunction = runners[plugin.name];
                                    if (pluginRunnerFunction)
                                        pluginRunnerFunction(KasperskyLab, kaspersyLabSessionInstance, plugin.settings, plugin.localization);
                                }
                            },
                            function() {
                                PostponeInit();
                            });
                    });
            }
            var postponedInitTimeout = null;

            function PostponeInit() {
                clearTimeout(postponedInitTimeout)
                postponedInitTimeout = ns.SetTimeout(function() {
                    Init();
                }, 60 * 1000);
            }
            ns.SetTimeout(function() {
                Init();
            }, 0);
        })(KasperskyLab);
        (function(ns) {
            ns.waitForApiInjection = function(isApiInjected, eventName, callback) {
                if (isApiInjected()) {
                    callback();
                    return;
                }
                var subscription = createSubscription(eventName, onApiInjected)

                function onApiInjected() {
                    if (isApiInjected()) {
                        subscription.unsubscribe();
                        callback();
                    }
                }
            }

            function createSubscription(eventName, callback) {
                var windowEventsSupported = document.createEvent || window.addEventListener;
                return new(windowEventsSupported ? ModernSubscription : IeLegacySubscription)(eventName, callback);
            }

            function ModernSubscription(eventName, callback) {
                ns.AddRemovableEventListener(window, eventName, callback);
                this.unsubscribe = function() {
                    ns.RemoveEventListener(window, eventName, callback);
                }
            }

            function IeLegacySubscription(eventName, callback) {
                ns.AddRemovableEventListener(document.documentElement, 'propertychange', onPropertyChange);
                this.unsubscribe = function() {
                    ns.RemoveEventListener(document.documentElement, 'propertychange', onPropertyChange);
                }

                function onPropertyChange(event) {
                    if (event.propertyName == eventName)
                        callback();
                }
            }
        })(KasperskyLab || {});
        var tabIdPropertyName = KasperskyLab.LIGHT_PLUGIN_API_KEY || 'klTabId_kis';
        var scriptPluginId = Math.floor((1 + Math.random()) * 0x10000).toString(16);

        function isApiInjected() {
            return !!window[tabIdPropertyName];
        }

        function makeTopLevelArgument() {
            return window == window.top ? 'true' : 'false';
        }

        function removeTabIdProperty() {
            try {
                delete window[tabIdPropertyName];
            } catch (e) {
                window[tabIdPropertyName] = undefined;
            }
        }
        var documentInitParameters = isApiInjected() ? [String(window[tabIdPropertyName]), makeTopLevelArgument(), scriptPluginId] : null;
        KasperskyLab.AddRunner("light_doc", function(ns, session) {
            session.InitializePlugin(function(activatePlugin, _, callFunction) {
                activatePlugin('light_doc');

                if (documentInitParameters) {
                    removeTabIdProperty();
                    return;
                }

                ns.waitForApiInjection(isApiInjected, tabIdPropertyName, function() {
                    var tabId = String(window[tabIdPropertyName]);
                    removeTabIdProperty();
                    callFunction("light_doc.registerDocument", [
                        tabId,
                        document.URL,
                        makeTopLevelArgument(),
                        scriptPluginId
                    ]);
                });
            });
        }, documentInitParameters);
        (function(ns) {
            ns.IsPositionEqual = function(prevPos, currentPos) {
                return prevPos && currentPos && prevPos.top === currentPos.top && prevPos.left === currentPos.left;
            };
            ns.GetAbsoluteElementPosition = function(element) {
                var box = element.getBoundingClientRect();
                var scroll = ns.GetPageScroll();
                return {
                    left: box.left + scroll.left,
                    top: box.top + scroll.top,
                    right: box.right + scroll.left,
                    bottom: box.bottom + scroll.top
                };
            };
        })(KasperskyLab || {});
        (function(ns) {
            ns.ProtectableElementDetector = function(protectMode) {
                var m_typesForbidden = ['hidden', 'submit', 'radio', 'checkbox', 'button', 'image'];
                var m_protectMode = protectMode;
                this.Test = function(element) {
                    if (m_protectMode < 2 || m_protectMode > 3)
                        return false;
                    var elementType = element.getAttribute('type');
                    elementType = elementType && elementType.toLowerCase();
                    if (m_protectMode === 2) {
                        if (elementType != 'password')
                            return false;
                    } else if (Includes(m_typesForbidden, elementType)) {
                        return false;
                    }
                    if (GetComputedStyle(element, 'display') === 'none')
                        return false;
                    var maxLength = parseInt(element.getAttribute('maxlength'), 10);
                    return typeof maxLength === 'number' && maxLength <= 3 ? false : !element.readOnly;
                };

                function Includes(list, text) {
                    var i = 0,
                        count = list.length;
                    for (; i < count; ++i)
                        if (list[i] === text)
                            return true;
                    return false;
                }

                function GetComputedStyle(element, property) {
                    var value;
                    if (element.currentStyle) {
                        value = element.currentStyle[property];
                    } else {
                        var styles = window.getComputedStyle(element, '');
                        if (styles)
                            value = styles.getPropertyValue(property);
                    }
                    return typeof value !== 'string' ? '' : value.toLowerCase();
                }
            }
        })(KasperskyLab || {});
        (function(ns) {
            ns.SecureInputTooltip = function(locales) {
                var m_balloon = new ns.Balloon(CreateTooltip, null, "/vk/secure_input_tooltip.css");
                var m_currentElement = null;
                var m_balloonElement = null;
                var m_needRestoreFocus;
                var that = this;
                var Top = 0;
                var Bottom = 1;

                function CreateTooltip(element, document) {
                    m_balloonElement = document.createElement("div");
                    var iconDiv = document.createElement("div");
                    iconDiv.className = "icon";
                    var closeDiv = document.createElement("div");
                    closeDiv.className = "close";
                    var contentText = document.createElement("span");
                    contentText.className = "content";
                    var topDiv = document.createElement("div");
                    topDiv.className = "top";
                    var pointerTop = document.createElement("div");
                    pointerTop.className = "pointer pointer_top";
                    topDiv.appendChild(pointerTop);
                    var bottomDiv = document.createElement("div");
                    bottomDiv.className = "bottom";
                    var pointerBottom = document.createElement("div");
                    pointerBottom.className = "pointer pointer_bottom";
                    bottomDiv.appendChild(pointerBottom);
                    m_balloonElement.appendChild(topDiv);
                    m_balloonElement.appendChild(iconDiv);
                    m_balloonElement.appendChild(bottomDiv);
                    iconDiv.appendChild(closeDiv);
                    iconDiv.appendChild(contentText);
                    contentText.appendChild(document.createTextNode(locales["VkTooltipText"]));
                    ns.AddEventListener(closeDiv, "mouseover", function() {
                        m_needRestoreFocus = true;
                    });
                    ns.AddEventListener(closeDiv, "mouseout", function() {
                        m_needRestoreFocus = false;
                    });
                    element.appendChild(m_balloonElement);
                }

                function PositionTooltipPointer(position) {
                    if (m_balloonElement) {
                        if (position === Top)
                            m_balloonElement.className = "top_balloon";
                        else if (position === Bottom)
                            m_balloonElement.className = "bottom_balloon";
                    }
                }

                function PositionTooltip(tooltipSize) {
                    var inputPosition = ns.GetAbsoluteElementPosition(m_currentElement);
                    var coords = {
                        x: inputPosition.left,
                        y: inputPosition.top
                    };
                    var inputTopRelative = inputPosition.top - ns.GetPageScroll().top;
                    var clientHeightUnderInput = ns.GetPageHeight() - inputTopRelative - m_currentElement.offsetHeight;
                    if ((clientHeightUnderInput > tooltipSize.height - 1) ||
                        (inputPosition.top - tooltipSize.height + 1 < 0)) {
                        coords.y = inputPosition.top + m_currentElement.offsetHeight - 1;
                        PositionTooltipPointer(Top);
                    } else {
                        coords.y = inputPosition.top - tooltipSize.height + 1;
                        PositionTooltipPointer(Bottom);
                    }
                    return coords;
                }

                function UpdateBalloonByTimer() {
                    try {
                        m_balloon.Update();
                    } catch (e) {
                        ns.SessionLog(e);
                    }
                }
                this.Show = function(element) {
                    m_currentElement = element;
                    m_balloon.Show(PositionTooltip);
                    var timer = ns.SetInterval(UpdateBalloonByTimer, 100);
                    this.Hide = function() {
                        clearInterval(timer);
                        if (m_needRestoreFocus)
                            ns.SetTimeout(function() {
                                element.focus();
                            }, 0);
                        m_balloon.Hide();
                        m_balloon = null;
                        this.Show = function() {};
                        this.Hide = function() {};
                    };
                    ns.SetTimeout(function() {
                        that.Hide();
                    }, 3000);
                };
                this.Hide = function() {};
            };
        })(KasperskyLab || {});
        (function(ns) {
            ns.VirtualKeyboardInputIcon = function(clickCallback) {
                var m_iconDiv;
                var m_element;
                var m_positionTimer;
                var m_visible = false;
                var m_balloon = new ns.Balloon(CreateIcon, null, "/vk/virtual_keyboard_icon.css");

                function ControlIconDisplaying(e) {
                    try {
                        var eventArg = e || window.event;
                        if (eventArg.keyCode === 9 || eventArg.keyCode === 16)
                            return;
                        if (m_element.value === "")
                            ShowInternal();
                        else
                            HideInternal();
                    } catch (e) {
                        ns.SessionLog(e);
                    }
                }

                function HideInternal() {
                    if (!m_visible)
                        return;
                    clearInterval(m_positionTimer);
                    m_balloon.Hide();
                    m_visible = false;
                }

                function ShowInternal() {
                    if (m_visible)
                        return;
                    m_balloon.Show(PositionIcon);
                    m_positionTimer = ns.SetInterval(UpdateIconByTimer, 100);
                    m_visible = true;
                }

                function UpdateIconByTimer() {
                    try {
                        m_balloon.Update();
                    } catch (e) {
                        ns.SessionLog(e);
                    }
                }

                function PositionIcon(tooltipSize) {
                    var inputPosition = ns.GetAbsoluteElementPosition(m_element);
                    var coords = {
                        x: inputPosition.left + m_element.offsetWidth - 20,
                        y: inputPosition.top + (m_element.offsetHeight - 16) / 2
                    };
                    return coords;
                }

                function CreateIcon(element, document) {
                    m_iconDiv = document.createElement("div");
                    m_iconDiv.className = "vk_icon";
                    ns.AddEventListener(m_iconDiv, "mouseover", function() {
                        m_iconDiv.style.filter = "alpha(opacity=60)";
                        m_iconDiv.style.opacity = 0.6;
                    });
                    ns.AddEventListener(m_iconDiv, "mouseout", function() {
                        m_iconDiv.style.filter = "alpha(opacity=100)";
                        m_iconDiv.style.opacity = 1;
                    });
                    ns.AddEventListener(m_iconDiv, "click", clickCallback);
                    element.appendChild(m_iconDiv);
                }
                this.Show = function(element) {
                    this.Hide();
                    m_element = element;
                    ShowInternal();
                    ns.AddRemovableEventListener(m_element, "keyup", ControlIconDisplaying)
                    this.Hide = function() {
                        HideInternal();
                        this.Hide = function() {};
                        ns.RemoveEventListener(m_element, "keyup", ControlIconDisplaying);
                    };
                };
                this.Hide = function() {};
            };
        })(KasperskyLab || {});
        KasperskyLab.AddRunner("vk", function(ns, session, settings, locales) {
            var VirtualKeyboard = function() {
                var m_callFunction, m_syncCallFunction;
                var m_virtualKeyboardIconShowMode = 0;
                var m_secureInputProtectMode = 0;
                var m_activeElement = null;
                var m_lastFocusedElement = null;
                var m_protectedState = 0;
                var m_enabledSecureInput = false;
                var m_protectChangeTimeout;
                var m_protectableVirtualKeyboardChecker = new ns.ProtectableElementDetector(settings.vkProtectMode);
                var m_protectableSecureInputChecker = null;
                var m_protectableVirtualKeyboardIconChecker = null;
                var m_attributeName = "vk_" + Math.floor((1 + Math.random()) * 0x10000).toString(16);

                function ShowVirtualKeyboard() {
                    if (m_lastFocusedElement)
                        m_lastFocusedElement.focus();
                    m_callFunction("vk.showKeyboard");
                }
                var m_tooltip = new ns.SecureInputTooltip(locales);
                var m_icon = new ns.VirtualKeyboardInputIcon(ShowVirtualKeyboard);
                var m_iconHideTimer;
                var m_postponeStart;
                var m_shutdown = false;
                session.InitializePlugin(function(activatePlugin, registerMethod, callFunction, deactivatePlugin, syncCallFunction) {
                    m_callFunction = callFunction;
                    m_syncCallFunction = syncCallFunction;
                    activatePlugin('vk', OnPing);
                    registerMethod('vk.settings', SetSettings);
                });

                function OnPing() {
                    return (m_protectedState == 1 || m_protectedState == 2) ? 500 : ns.MaxRequestDelay;
                }

                function SetSettings(argumentList) {
                    var newVirtualKeyboardIconShowMode = parseInt(argumentList[0], 10);
                    var newSecureInputProtectMode = parseInt(argumentList[1], 10);
                    SetSettingsImpl(newVirtualKeyboardIconShowMode, newSecureInputProtectMode);
                }

                function SetSettingsImpl(newVirtualKeyboardIconShowMode, newSecureInputProtectMode) {
                    if (newSecureInputProtectMode != m_secureInputProtectMode)
                        m_protectableSecureInputChecker = new ns.ProtectableElementDetector(newSecureInputProtectMode);
                    if (newVirtualKeyboardIconShowMode != m_virtualKeyboardIconShowMode)
                        m_protectableVirtualKeyboardIconChecker = new ns.ProtectableElementDetector(newVirtualKeyboardIconShowMode);
                    var needToUpdate = (newSecureInputProtectMode > m_secureInputProtectMode ||
                        newVirtualKeyboardIconShowMode > m_virtualKeyboardIconShowMode);
                    m_secureInputProtectMode = newSecureInputProtectMode;
                    m_virtualKeyboardIconShowMode = newVirtualKeyboardIconShowMode;
                    if (needToUpdate && m_observer)
                        m_observer.settingsChanged();
                }

                function NeedProtectElement(element) {
                    return m_protectableSecureInputChecker.Test(element) || m_protectableVirtualKeyboardChecker.Test(element);
                }

                function HandleStartProtectCallback(result, args, needSecureInputCall) {
                    if (m_protectedState === 3) {
                        if (result === 0)
                            StopProtect();
                        else
                            m_protectedState = 0;
                        return;
                    }
                    if (result === 0) {
                        if (!args || args.length < 1) {
                            session.Log("ERR VK - unexpected arguments");
                            return;
                        }
                        m_enabledSecureInput = args[0] === "true";
                        m_protectedState = 2;
                        var needSecureInput = m_protectableSecureInputChecker.Test(m_activeElement);
                        if (needSecureInput === needSecureInputCall)
                            ShowBalloons();
                        else
                            CheckProtectModeAndShowBalloons();
                        return;
                    } else if (result === 1) {
                        m_postponeStart = ns.SetTimeout(function() {
                            OnElementFocus(m_activeElement);
                        }, 100);
                    }
                    m_protectedState = 0;
                }

                function OnError(e) {
                    session.Log('ERR VK - ' + (e.message || e));
                }

                function StartProtect() {
                    if (!document.hasFocus()) {
                        m_protectedState = 0;
                        ns.SessionLog("No focus on StartProtect");
                        return;
                    }
                    var needSecureInput = m_protectableSecureInputChecker.Test(m_activeElement);
                    m_protectedState = 1;
                    m_callFunction("vk.startProtect", [needSecureInput.toString()], function(result, args) {
                        HandleStartProtectCallback(result, args, needSecureInput);
                    }, OnError);
                }

                function ChangeMode() {
                    var needSecureInput = m_protectableSecureInputChecker.Test(m_activeElement);
                    m_protectedState = 1;
                    m_callFunction("vk.changeMode", [needSecureInput.toString()], function(result, args) {
                        HandleStartProtectCallback(result, args, needSecureInput);
                    }, OnError);
                }

                function StopProtect() {
                    m_protectedState = 3;
                    m_callFunction("vk.stopProtect", [], function(result) {
                        if (m_protectedState === 1 && result === 0) {
                            StartProtect();
                            return;
                        }
                        m_protectedState = 0;
                    }, OnError);
                }

                function ShowBalloons() {
                    if (m_enabledSecureInput)
                        m_tooltip.Show(m_activeElement);
                    if (m_protectableVirtualKeyboardIconChecker.Test(m_activeElement))
                        m_icon.Show(m_activeElement);
                }

                function CheckProtectModeAndShowBalloons() {
                    var needSecureInput = m_protectableSecureInputChecker.Test(m_activeElement);
                    if (needSecureInput != m_enabledSecureInput)
                        ChangeMode();
                    else
                        ShowBalloons();
                }

                function OnElementFocus(element) {
                    if (m_shutdown)
                        return;
                    if (m_iconHideTimer) {
                        clearTimeout(m_iconHideTimer);
                        m_iconHideTimer = null;
                        m_icon.Hide();
                    }
                    if (!NeedProtectElement(element))
                        return;
                    m_activeElement = element;
                    m_lastFocusedElement = element;
                    clearTimeout(m_postponeStart);
                    clearTimeout(m_protectChangeTimeout);
                    m_protectChangeTimeout = ns.SetTimeout(function() {
                        ProcessFocus();
                    }, 0);
                }

                function OnElementBlur(element) {
                    if (m_shutdown)
                        return;
                    clearTimeout(m_postponeStart);
                    m_iconHideTimer = ns.SetTimeout(function() {
                        m_icon.Hide();
                    }, 500);
                    m_tooltip.Hide();
                    clearTimeout(m_protectChangeTimeout);
                    m_protectChangeTimeout = ns.SetTimeout(function() {
                        ProcessBlur();
                    }, 0);
                }

                function OnSettingsChanged(element) {
                    var needProtectElement = NeedProtectElement(element);
                    if ((m_activeElement !== element) ^ needProtectElement)
                        return;
                    if (needProtectElement)
                        OnElementFocus(element);
                    else
                        OnElementBlur(element);
                }

                function ProcessFocus() {
                    if (m_protectedState === 0)
                        StartProtect();
                    else if (m_protectedState === 2)
                        CheckProtectModeAndShowBalloons();
                    else if (m_protectedState === 3)
                        m_protectedState = 1;
                }

                function ProcessBlur() {
                    if (m_protectedState === 2)
                        StopProtect();
                    else if (m_protectedState === 1)
                        m_protectedState = 3;
                }
                SetSettingsImpl(settings.vkMode, settings.skMode);
                ns.AddEventListener(window, 'unload', function() {
                    clearTimeout(m_protectChangeTimeout);
                    clearTimeout(m_postponeStart);
                    m_shutdown = true;
                    m_observer.unbind();
                });
                var m_observer = new FocusChangeObserver(OnElementFocus, OnElementBlur, OnSettingsChanged);
            };

            function FocusChangeObserver(focusHandler, blurHandler, settingsChangedHandler) {
                var m_targetPropertyName;
                if (document.addEventListener) {
                    ns.AddEventListener(document, 'focus', onFocus, true);
                    ns.AddEventListener(document, 'blur', onBlur, true);
                    m_targetPropertyName = 'target';
                } else {
                    ns.AddEventListener(document, 'focusin', onFocus);
                    ns.AddEventListener(document, 'focusout', onBlur);
                    m_targetPropertyName = 'srcElement';
                }
                var m_focusedElement = tryToGetFocusedInput();
                this.settingsChanged = function() {
                    if (m_focusedElement)
                        settingsChangedHandler(m_focusedElement);
                }
                this.unbind = function() {
                    if (document.removeEventListener) {
                        document.removeEventListener('focus', onFocus, true);
                        document.removeEventListener('blur', onBlur, true);
                    } else {
                        document.detachEvent('onfocusin', onFocus);
                        document.detachEvent('onfocusout', onBlur);
                    }
                    if (m_focusedElement) {
                        blurHandler(m_focusedElement);
                        m_focusedElement = null;
                    }
                }
                if (m_focusedElement)
                    focusHandler(m_focusedElement);

                function tryToGetActiveElement() {
                    try {
                        return document.activeElement;
                    } catch (e) {}
                    return null;
                }

                function tryToGetFocusedInput() {
                    var element = tryToGetActiveElement();
                    return (document.hasFocus() && isInputElement(element)) ? element : null;
                }

                function isInputElement(element) {
                    return element &&
                        element.tagName &&
                        element.tagName.toLowerCase() === 'input';
                }

                function onBlur(event) {
                    if (m_focusedElement) {
                        var element = m_focusedElement;
                        m_focusedElement = null;
                        blurHandler(element);
                    }
                }

                function onFocus(event) {
                    var element = event[m_targetPropertyName];
                    if (isInputElement(element)) {
                        m_focusedElement = element;
                        focusHandler(element);
                    }
                }
            }
            var instance = null;
            ns.RunModule(function() {
                try {
                    if (!instance)
                        instance = new VirtualKeyboard();
                } catch (e) {
                    session.Log("VirtualKeyboard exception: " + (e.message || e));
                }
            }, 2000);
        });

    })();

})();