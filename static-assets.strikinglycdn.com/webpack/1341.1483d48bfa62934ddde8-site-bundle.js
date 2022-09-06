/*! For license information please see 1341.1483d48bfa62934ddde8-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [1341], {
        246276: function(e, n, t) {
            var o = t(893379),
                i = t(743668);
            "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
                [e.id, i, ""]
            ]);
            o(i, {
                insert: "head",
                singleton: !1
            }), e.exports = i.locals || {}
        },
        591341: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                Components: function() {
                    return Qe
                },
                default: function() {
                    return Xe
                }
            });
            var o, i, a, l, r, s, c = t(501068),
                u = t.n(c),
                d = t(863056),
                p = t(468420),
                m = t(327344),
                f = t(505281),
                v = t(484441),
                h = t(103020),
                g = t(803362),
                y = t(844845),
                b = (t(569600), t(977766)),
                Z = t.n(b),
                x = t(277149),
                C = t.n(x),
                w = t(694473),
                k = t.n(w),
                D = t(678580),
                N = t.n(D),
                S = t(2991),
                T = t.n(S),
                A = t(54103),
                E = t.n(A),
                R = t(366757),
                O = t(459800),
                F = t(294184),
                I = t.n(F),
                P = t(234584),
                B = t(818166),
                L = t(125485),
                M = t(183123),
                W = t(454992),
                V = t(619793),
                j = t(69968),
                G = t(391435),
                z = t(989400),
                H = t.n(z),
                q = t(989255),
                U = function() {
                    function e(n) {
                        return (0, p.Z)(this, e), (0, y.Z)(this, "creator", void 0), (0, y.Z)(this, "actionDispatcher", void 0), this.actionSubscribs(n), this
                    }
                    return (0, m.Z)(e, [{
                        key: "formActionObservable",
                        value: function() {
                            var e = this;
                            return q.y$.create((function(n) {
                                e.actionDispatcher = function(e) {
                                    n.next({
                                        type: e.type,
                                        values: null == e ? void 0 : H()(e)
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "actionSubscribs",
                        value: function(e) {
                            return this.formActionObservable().subscribe((function(n) {
                                var t = n.type,
                                    o = H()(n);
                                "function" == typeof e[t] && e[t](o)
                            }))
                        }
                    }]), e
                }(),
                J = W((function(e) {
                    var n = e.className,
                        t = e.disbale,
                        o = e.handleClick,
                        i = e.name;
                    return (0, d.Z)("div", {
                        className: n
                    }, void 0, (0, d.Z)("div", {
                        className: I()("s-email-form-button s-common-button s-font-button", {
                            disbale: t
                        }),
                        onClick: t ? null : o
                    }, void 0, (0, d.Z)("span", {}, void 0, i)))
                })),
                K = (0, O.connect)((function() {
                    return {
                        variationClassNames: B.getTemplateVariationClassNames(),
                        fontClassNames: L.getFontClassNames()
                    }
                }), {})((function(e) {
                    var n = e.disbale,
                        t = e.name,
                        o = e.variationClassNames,
                        i = e.fontClassNames,
                        a = e.handleClick,
                        l = [];
                    return l.push(o), l.push(i), l.push("s-email-form-field"), l.push("s-submit-field"), (0, d.Z)("div", {
                        className: "button-field"
                    }, void 0, (0, d.Z)(J, {
                        className: l.join(" "),
                        name: t,
                        disbale: n,
                        handleClick: a
                    }))
                })),
                Y = t(381633),
                $ = function(e) {
                    var n = e.value,
                        t = e.placeholder,
                        a = e.onChangeValue,
                        l = e.isRtlLayout;
                    return (0, d.Z)("div", {
                        className: "input-field"
                    }, void 0, (0, d.Z)(Y.Input, {
                        suffix: l && (o || (o = (0, d.Z)(Y.Icon, {
                            className: "entypo-user"
                        }))),
                        prefix: !l && (i || (i = (0, d.Z)(Y.Icon, {
                            className: "entypo-user"
                        }))),
                        placeholder: t,
                        value: n,
                        onChange: function(e) {
                            a(e.target.value)
                        },
                        maxLength: "50"
                    }))
                },
                Q = function(e) {
                    var n = e.value,
                        t = e.placeholder,
                        o = e.onChangeValue,
                        i = e.isRtlLayout;
                    return (0, d.Z)("div", {
                        className: "input-field"
                    }, void 0, (0, d.Z)(Y.Input, {
                        prefix: !i && (a || (a = (0, d.Z)(Y.Icon, {
                            className: "entypo-mail"
                        }))),
                        suffix: i && (l || (l = (0, d.Z)(Y.Icon, {
                            className: "entypo-mail"
                        }))),
                        placeholder: t,
                        value: n,
                        onChange: function(e) {
                            o(e.target.value)
                        },
                        maxLength: "50"
                    }))
                },
                X = function(e) {
                    var n = e.value,
                        t = e.placeholder,
                        o = e.onChangeValue,
                        i = e.isRtlLayout;
                    return (0, d.Z)("div", {
                        className: "input-field"
                    }, void 0, (0, d.Z)(Y.Input, {
                        suffix: i && (r || (r = (0, d.Z)(Y.Icon, {
                            className: "entypo-mobile"
                        }))),
                        prefix: !i && (s || (s = (0, d.Z)(Y.Icon, {
                            className: "entypo-mobile"
                        }))),
                        placeholder: t,
                        value: n,
                        onChange: function(e) {
                            o(e.target.value)
                        },
                        maxLength: "50"
                    }))
                },
                ee = t(589499),
                ne = t(240975),
                te = "submit_email_form",
                oe = "EMAIL_FORM",
                ie = "PHONE_FORM",
                ae = "scroll_to_middle",
                le = "scroll_to_end",
                re = {
                    immediately: 0,
                    delay_five_seconds: 5e3,
                    delay_ten_seconds: 1e4,
                    delay_twenty_seconds: 2e4
                },
                se = "any_pages",
                ce = t(881701),
                ue = t(223336),
                de = t(353147);
            var pe = "EMAIL_FORM",
                me = "ANNOUNCEMENT",
                fe = "PHONE_FORM",
                ve = (0, ee.cdnAssetPath)("/images/image-dummy.jpg"),
                he = [te],
                ge = function(e) {
                    (0, v.Z)(i, e);
                    var n, t, o = (n = i, t = function() {
                        if ("undefined" == typeof Reflect || !u()) return !1;
                        if (u().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(u()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, g.Z)(n);
                        if (t) {
                            var i = (0, g.Z)(this).constructor;
                            e = u()(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, h.Z)(this, e)
                    });

                    function i() {
                        var e, n;
                        (0, p.Z)(this, i);
                        for (var t = arguments.length, a = new Array(t), l = 0; l < t; l++) a[l] = arguments[l];
                        return n = o.call.apply(o, Z()(e = [this]).call(e, a)), (0, y.Z)((0, f.Z)(n), "getContainerCss", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.fields,
                                t = void 0 === n ? [] : n,
                                o = e.type,
                                i = "";
                            return ((o === pe || o === fe) && null != t && C()(t).call(t, (function(e) {
                                var n;
                                return "short_text" === e.type && (null === (n = e.show) || void 0 === n ? void 0 : n.value)
                            })) || o === me) && (i = (0, ce.css)("flex-direction:column;")), (0, ce.css)("display:flex;&.layout-left{flex-direction:row;}&.layout-right{flex-direction:row-reverse;}&.layout-center{flex-direction:column;max-width:500px;padding-top:30px;.banner{padding:10px 40px 10px;display:flex;justify-content:center;form-fields{padding-top:10px;}img{max-width:100%;max-height:13em;}@media (max-width:540px){margin-top:0px;}}}&.layout-left,&.layout-right{width:50em;min-height:31.5em;.form-fields{padding-top:40px;flex-grow:1;min-width:270px;overflow:hidden;}.banner{position:relative;overflow:hidden;width:50%;display:flex;justify-content:center;align-items:center;img{position:absolute;object-fit:contain;width:100%;height:100%;}}}@media (max-width:540px){&.layout-left,&.layout-right{flex-direction:column;width:auto;height:auto;.banner,.form-fields{width:100%;max-width:100%;min-width:270px;overflow:hidden;}.banner{height:20em;img{width:100%;}}}}.form-fields{display:flex;justify-content:flex-end;padding:0px 10px;flex-direction:column;align-items:center;box-sizing:border-box;.title{flex-grow:0.5;width:100%;padding:0px 20px;box-sizing:border-box;word-break:break-word;.s-component-content{p:nth-of-type(2){margin-bottom:20px;}}}.group-fields{display:flex;width:100%;padding:0 20px 20px;box-sizing:border-box;justify-content:space-between;flex-wrap:wrap;", i, "\n\n          .input-field{flex-grow:2;margin:0 10px 10px 10px;}.button-field{flex-grow:6;margin:0 10px 10px 10px;}.error-field{align-self:center;margin:0 30px 18px 30px;color:#ff6a78;}.terms_field{margin:0 10px 18px 10px;color:#8d949c;.gdpr-text{padding-left:5px;}.s-terms-link{display:inline;.s-common-link{cursor:pointer;text-decoration:underline;}}}.s-kit-input-affix-wrapper,.s-kit-input{width:100%;}.s-kit-input{padding-left:30px;}.s-kit-input-prefix{left:8px;font-size:16px;i{color:#c6c9cd;}}}.s-email-form-button{display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:9px 9px;font-size:14px;min-height:36px;letter-spacing:1px;text-align:center;cursor:pointer;font-weight:bold;&.no_button{background:#fff;color:#010101;}}}")
                        })), (0, y.Z)((0, f.Z)(n), "getActionByRef", (function(e) {
                            var t = n.props.templateData,
                                o = (null == t ? void 0 : t.actions) || [];
                            return k()(o).call(o, (function(n) {
                                return n.fieldRef === e
                            }))
                        })), (0, y.Z)((0, f.Z)(n), "bindActionsWithEvent", (function(e) {
                            var t = n.props,
                                o = t.formActions,
                                i = t.onChangeFormData;
                            if (o) {
                                var a = n.getActionByRef(null == e ? void 0 : e.ref);
                                N()(he).call(he, null == a ? void 0 : a.type) && i("recaptchaData", {
                                    recaptchaToken: e.recaptchaToken,
                                    recaptchaType: e.recaptchaType
                                }), o.actionDispatcher({
                                    type: null == a ? void 0 : a.type,
                                    values: {
                                        action: a,
                                        field: e
                                    }
                                })
                            }
                        })), (0, y.Z)((0, f.Z)(n), "onCheckInvisibleReCaptcha", (function(e) {
                            var t = n.props.checkValidate,
                                o = n.state.reCaptchaRef,
                                i = n.getActionByRef(null == e ? void 0 : e.ref).type;
                            t && t() && N()(he).call(he, i) ? o.clickInvisibleReCaptcha(e) : n.bindActionsWithEvent(e)
                        })), (0, y.Z)((0, f.Z)(n), "needToShowGDPRCompliance", (function() {
                            return M.getGDPRComplianceFeature()
                        })), (0, y.Z)((0, f.Z)(n), "_toggleGDPRAccepted", (function() {
                            n.props.onToggleTerms()
                        })), (0, y.Z)((0, f.Z)(n), "needIncludeTerms", (function() {
                            return !M.getIsSxl() && n.needToShowGDPRCompliance()
                        })), (0, y.Z)((0, f.Z)(n), "renderGDPRCompliance", (function() {
                            if (n.needIncludeTerms()) return (0, d.Z)("div", {
                                className: "terms_field"
                            }, void 0, (0, d.Z)("input", {
                                type: "checkbox",
                                defaultChecked: n.props.gdprAccepted,
                                onChange: n._toggleGDPRAccepted
                            }), (0, d.Z)("label", {
                                htmlFor: "gdpr",
                                className: "gdpr-text s-font-body s-item-text"
                            }, void 0, G()))
                        })), (0, y.Z)((0, f.Z)(n), "renderButtons", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            return T()(e).call(e, (function(e) {
                                var t;
                                return R.createElement(R.Fragment, null, (0, d.Z)(ne.default, {
                                    invisible: !0,
                                    requestData: e,
                                    onRef: function(e) {
                                        return n.setState({
                                            reCaptchaRef: e
                                        })
                                    },
                                    handleSubmit: n.bindActionsWithEvent
                                }), (0, d.Z)(K, {
                                    name: e.name,
                                    type: e.type,
                                    handleClick: E()(t = n.onCheckInvisibleReCaptcha).call(t, (0, f.Z)(n), e)
                                }, e.ref))
                            }))
                        })), (0, y.Z)((0, f.Z)(n), "renderEmailFields", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = P.getIsRtlLayout(),
                                o = n.props,
                                i = o.formData,
                                a = o.onChangeFormData,
                                l = o.errorData,
                                r = o.gdprAccepted;
                            return T()(e).call(e, (function(e) {
                                var o, s;
                                return "short_text" === e.type && null !== (o = e.show) && void 0 !== o && o.value ? (0, d.Z)($, {
                                    value: null == i ? void 0 : i.name,
                                    placeholder: e.name,
                                    isRtlLayout: t,
                                    onChangeValue: null == a ? void 0 : E()(a).call(a, null, "name")
                                }) : "email" === e.type ? [(0, d.Z)(Q, {
                                    value: null == i ? void 0 : i.email,
                                    placeholder: e.name,
                                    isRtlLayout: t,
                                    onChangeValue: null == a ? void 0 : E()(a).call(a, null, e.type)
                                }, "email"), null != l && l.email ? (0, d.Z)("div", {
                                    className: "error-field"
                                }, void 0, de("Enter a valid email.")) : ""] : "phone" === e.type ? [(0, d.Z)(X, {
                                    value: null == i ? void 0 : i.email,
                                    placeholder: e.name,
                                    isRtlLayout: t,
                                    onChangeValue: null == a ? void 0 : E()(a).call(a, null, e.type)
                                }, "phone"), null != l && l.phone ? (0, d.Z)("div", {
                                    className: "error-field"
                                }, void 0, de("Enter a phone number.")) : ""] : "submit_button" === e.type ? R.createElement(R.Fragment, null, (0, d.Z)(ne.default, {
                                    invisible: !0,
                                    requestData: e,
                                    onRef: function(e) {
                                        return n.setState({
                                            reCaptchaRef: e
                                        })
                                    },
                                    handleSubmit: n.bindActionsWithEvent
                                }), (0, d.Z)(K, {
                                    name: e.name,
                                    type: e.type,
                                    handleClick: E()(s = n.onCheckInvisibleReCaptcha).call(s, (0, f.Z)(n), e),
                                    disbale: n.needIncludeTerms() && !r
                                })) : ""
                            }))
                        })), n
                    }
                    return (0, m.Z)(i, [{
                        key: "setStyleFallBack",
                        value: function() {
                            ue("#popups-content .s-kit-input").addClass("s-font-body")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.setStyleFallBack()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.setStyleFallBack()
                        }
                    }, {
                        key: "_getRequiredFonts",
                        value: function() {
                            var e, n = T()(e = ["body", "title", "heading", "button"]).call(e, (function(e) {
                                var n;
                                return T()(n = _([L.getFontName(e), L.getFontName(e, {
                                    preview: !0
                                })]).uniq().compact()).call(n, (function(n) {
                                    return {
                                        usedAs: e,
                                        value: L.getFontByName(n)
                                    }
                                })).value()
                            }));
                            return _.flatten(n)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, n, t, o, i, a = this.props,
                                l = a.templateData,
                                r = a.variationClassNames,
                                s = L.getFontClassNames();
                            if (null == l || !l.ref) return null;
                            var c = null == l ? void 0 : l.theme,
                                u = null == c || null === (e = c.layout) || void 0 === e ? void 0 : e.type,
                                p = "center" !== u ? ve : "",
                                m = null == l || null === (n = l.attachments) || void 0 === n || null === (t = k()(n).call(n, (function(e) {
                                    return "image" === e.type
                                }))) || void 0 === t ? void 0 : t.src,
                                f = m || p,
                                v = [];
                            return v.push(r), v.push(s), (0, d.Z)("div", {
                                className: Z()(o = Z()(i = "popups-container layout-".concat(u, " ")).call(i, this.getContainerCss(l), " ")).call(o, v.join(" ")),
                                id: "popups-content"
                            }, void 0, (0, d.Z)(V, {
                                fonts: this._getRequiredFonts(),
                                domId: "popups-content"
                            }), "center" === u && m && (0, d.Z)("div", {
                                className: "banner"
                            }, void 0, (0, d.Z)("img", {
                                src: f
                            })), "center" !== u && (0, d.Z)("div", {
                                className: "banner"
                            }, void 0, " ", (0, d.Z)("img", {
                                src: f
                            })), (0, d.Z)("div", {
                                className: "form-fields"
                            }, void 0, (0, d.Z)("div", {
                                className: "title s-component-editor-inner common-editor s-font-body"
                            }, void 0, (0, d.Z)("div", {
                                className: "s-component-content",
                                dangerouslySetInnerHTML: {
                                    __html: (null == l ? void 0 : l.titleText) || ""
                                }
                            })), (null == l ? void 0 : l.type) === pe && (0, d.Z)("div", {
                                className: "group-fields"
                            }, void 0, this.renderEmailFields(null == l ? void 0 : l.fields), this.renderGDPRCompliance()), (null == l ? void 0 : l.type) === fe && (0, d.Z)("div", {
                                className: "group-fields"
                            }, void 0, this.renderEmailFields(null == l ? void 0 : l.fields)), (null == l ? void 0 : l.type) === me && (0, d.Z)("div", {
                                className: "group-fields"
                            }, void 0, this.renderButtons(null == l ? void 0 : l.fields)), "AGE" === (null == l ? void 0 : l.type) && (0, d.Z)("div", {
                                className: "group-fields"
                            }, void 0, this.renderButtons(null == l ? void 0 : l.fields))))
                        }
                    }]), i
                }(R.PureComponent),
                ye = (0, O.connect)((function() {
                    return {
                        variationClassNames: B.getTemplateVariationClassNames(),
                        fontClassNames: L.getFontClassNames()
                    }
                }), {})(ge),
                be = t(686902),
                Ze = t.n(be),
                xe = t(14310),
                Ce = t.n(xe),
                we = t(620116),
                _e = t.n(we),
                ke = t(834074),
                De = t.n(ke),
                Ne = t(778914),
                Se = t.n(Ne),
                Te = t(239649),
                Ae = t.n(Te),
                Ee = t(820368),
                Re = t.n(Ee),
                Oe = t(663978),
                Fe = t.n(Oe),
                Ie = t(981643),
                Pe = t.n(Ie),
                Be = (t(974916), t(115306), t(914578)),
                Le = t(333938),
                Me = t(563109),
                We = t.n(Me),
                Ve = t(359011),
                je = function() {
                    var e = (0, Le.Z)(We().mark((function e() {
                        var n, t;
                        return We().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, Ve.fetchJSON)("/r/v1/sites/".concat(P.getId(), "/popups/active"));
                                case 2:
                                    return n = e.sent, e.next = 5, n.json();
                                case 5:
                                    return t = e.sent, e.abrupt("return", t.data);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Ge = t(329756),
                ze = t(836808),
                He = t(43138),
                qe = (t(246276), t(353147));

            function Ue(e, n) {
                var t = Ze()(e);
                if (Ce()) {
                    var o = Ce()(e);
                    n && (o = _e()(o).call(o, (function(n) {
                        return De()(e, n).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function Je(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t, o = null != arguments[n] ? arguments[n] : {};
                    if (n % 2) Se()(t = Ue(Object(o), !0)).call(t, (function(n) {
                        (0, y.Z)(e, n, o[n])
                    }));
                    else if (Ae()) Re()(e, Ae()(o));
                    else {
                        var i;
                        Se()(i = Ue(Object(o))).call(i, (function(n) {
                            Fe()(e, n, De()(o, n))
                        }))
                    }
                }
                return e
            }
            var Ke = function(e) {
                    return "http://" == e.substr(0, 7).toLowerCase() || "https://" == e.substr(0, 8).toLowerCase() ? e : "http://".concat(e)
                },
                Ye = function(e) {
                    (0, v.Z)(i, e);
                    var n, t, o = (n = i, t = function() {
                        if ("undefined" == typeof Reflect || !u()) return !1;
                        if (u().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(u()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, g.Z)(n);
                        if (t) {
                            var i = (0, g.Z)(this).constructor;
                            e = u()(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, h.Z)(this, e)
                    });

                    function i(e) {
                        var n, t;
                        return (0, p.Z)(this, i), t = o.call(this, e), (0, y.Z)((0, f.Z)(t), "formActions", void 0), (0, y.Z)((0, f.Z)(t), "removeBindEvent", (function() {
                            t._unbindWindowScroll(), t._unBindOnExit()
                        })), (0, y.Z)((0, f.Z)(t), "_handlePopState", (function() {
                            var e = t.state.url;
                            window.history.pushState(null, null, e), t.onOpenDialog()
                        })), (0, y.Z)((0, f.Z)(t), "_onMoveBrowserToolbar", (function(e) {
                            (null == e ? void 0 : e.clientY) < 20 && t.onOpenDialog()
                        })), (0, y.Z)((0, f.Z)(t), "_onScroll", (function() {
                            var e = t.state.templateData,
                                n = (e = void 0 === e ? {
                                    delayType: ""
                                } : e).delayType;
                            Be.debounce((function() {
                                var e = ue(document),
                                    o = ue(window),
                                    i = e.height(),
                                    a = e.height() / 2,
                                    l = o.height(),
                                    r = o.height() / 2,
                                    s = e.scrollTop(),
                                    c = a - r;
                                n === ae && c < s && s < c + r && t.onOpenDialog(), n === le && s >= i - l && t.onOpenDialog()
                            }), 100)()
                        })), (0, y.Z)((0, f.Z)(t), "assembleHandle", (function() {
                            var e;
                            t.formActions = new U((e = {}, (0, y.Z)(e, te, t.submitEmailForm), (0, y.Z)(e, "confirm_age_cliam", t.agreeAgeClaim), (0, y.Z)(e, "ignore_age_cliam", t.ignoreAgeClaim), (0, y.Z)(e, "WEB_LINK", t.goWebLink), (0, y.Z)(e, "STORE_SECTION", t.goStoreSection), (0, y.Z)(e, "BLOG_SECTION", t.goBlogSection), (0, y.Z)(e, "HOME_PAGE", t.goHomePage), (0, y.Z)(e, "EMAIL", t.callEmailBox), e))
                        })), (0, y.Z)((0, f.Z)(t), "goWebLink", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.field;
                            null != n && n.link && window.open(Ke(n.link)), t.onCloseDialog()
                        })), (0, y.Z)((0, f.Z)(t), "goBlogSection", (function() {
                            if (t.onCloseDialog(), B.getAllSectionsWithName("blog").length <= 1) {
                                var e, n = B.getPathBySection("blog");
                                null === (e = location) || void 0 === e || e.replace(n)
                            }
                        })), (0, y.Z)((0, f.Z)(t), "goStoreSection", (function() {
                            if (t.onCloseDialog(), B.getAllSectionsWithName("ecommerce").length <= 1) {
                                var e, n = B.getPathBySection("ecommerce");
                                null === (e = location) || void 0 === e || e.replace(n)
                            }
                        })), (0, y.Z)((0, f.Z)(t), "goHomePage", (function() {
                            var e;
                            t.onCloseDialog();
                            var n = B.getPathBySection("home");
                            null === (e = location) || void 0 === e || e.replace(n)
                        })), (0, y.Z)((0, f.Z)(t), "agreeAgeClaim", (function() {
                            t.onCloseDialog()
                        })), (0, y.Z)((0, f.Z)(t), "callEmailBox", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.field;
                            null != n && n.emailAddress && window.open("mailto:".concat(n.emailAddress)), t.onCloseDialog()
                        })), (0, y.Z)((0, f.Z)(t), "ignoreAgeClaim", (function() {
                            location.href = "/i/restricted"
                        })), (0, y.Z)((0, f.Z)(t), "setTemplateData", (function() {
                            t.setState({
                                templateData: {}
                            })
                        })), (0, y.Z)((0, f.Z)(t), "onOpenDialog", (function() {
                            t.setState({
                                isOpen: !0
                            })
                        })), (0, y.Z)((0, f.Z)(t), "onChangeFormData", (function(e, n) {
                            var o = t.state.formData;
                            t.setState({
                                formData: Je(Je({}, o), {}, (0, y.Z)({}, e, n))
                            })
                        })), (0, y.Z)((0, f.Z)(t), "onToggleTerms", (function() {
                            var e = t.state.gdpr_accepted;
                            t.setState({
                                gdpr_accepted: !e
                            })
                        })), (0, y.Z)((0, f.Z)(t), "checkValidate", (function() {
                            var e = t.state,
                                n = e.formData,
                                o = e.templateData;
                            if ((null == o ? void 0 : o.type) === oe) {
                                if (!Ge.RegexConstants.EMAIL.test(Be.trim(null == n ? void 0 : n.email))) return t.setState({
                                    errorData: {
                                        email: !0
                                    }
                                }), !1
                            } else if ((null == o ? void 0 : o.type) === ie && !Ge.RegexConstants.PHONE.test(Be.trim(null == n ? void 0 : n.phone))) return t.setState({
                                errorData: {
                                    phone: !0
                                }
                            }), !1;
                            return t.setState({
                                errorData: {}
                            }), !0
                        })), (0, y.Z)((0, f.Z)(t), "submitEmailForm", (function() {
                            var e;
                            if (t.checkValidate()) {
                                var n = t.state,
                                    o = n.formData,
                                    i = n.templateData,
                                    a = null == i ? void 0 : i.type,
                                    l = t.getActionByType(te),
                                    r = {
                                        collected_email: Je(Je({
                                            skip_name: !0,
                                            skip_email: !0,
                                            skip_phone_number: !0,
                                            recipient: null == l || null === (e = l.arguments) || void 0 === e ? void 0 : e.recipient,
                                            label: "popup"
                                        }, o.recaptchaData), {}, {
                                            name: o.name,
                                            email: null == o ? void 0 : o.email,
                                            phone_number: null == o ? void 0 : o.phone
                                        })
                                    };
                                a === oe ? (t.state.gdpr_accepted && (r.collected_email.gdpr_accepted = !0), r.collected_email.skip_phone_number = !0) : a === ie && (r.collected_email.skip_email = !0), j.submit({
                                    data: r,
                                    successCallback: function() {
                                        t.setState({
                                            submitted: !0
                                        })
                                    },
                                    errorCallback: function() {
                                        t.setState({
                                            submitted: !1
                                        })
                                    }
                                })
                            }
                        })), (0, y.Z)((0, f.Z)(t), "onCloseDialog", (function() {
                            var e, n = t.state.templateData;
                            null != n && n.ref && (e = null == n ? void 0 : n.ref, ze.set("_claim_popup_ref", e)), t.setState({
                                isOpen: !1,
                                formData: {},
                                templateData: {},
                                submitted: !1
                            }), t.removeBindEvent()
                        })), (0, y.Z)((0, f.Z)(t), "checkTimeDelayTypes", (function() {
                            var e = t.state.templateData,
                                n = (e = void 0 === e ? {
                                    delayType: ""
                                } : e).delayType;
                            switch (n) {
                                case ae:
                                case le:
                                    t._bindWindowScroll();
                                    break;
                                case "on_exit":
                                    t._bindOnExit();
                                    break;
                                default:
                                    var o = re[n] || 0;
                                    Be.delay((function() {
                                        t.onOpenDialog()
                                    }), o)
                            }
                        })), (0, y.Z)((0, f.Z)(t), "initTemplateData", (function(e) {
                            var n = t.state.templateData,
                                o = t.props.isMultiPage;
                            if (!Be.isEmpty(n)) {
                                var i = n || {},
                                    a = i.showOnPagesType,
                                    l = void 0 === a ? se : a,
                                    r = i.showOnPages,
                                    s = void 0 === r ? [] : r,
                                    c = i.ref,
                                    u = ze.get("_claim_popup_ref") !== c,
                                    d = l === se || -1 !== Pe()(s).call(s, e);
                                !u || !d && o || t.checkTimeDelayTypes()
                            }
                        })), (0, y.Z)((0, f.Z)(t), "renderSuccessContent", (function() {
                            var e, n = t.getActionByType(te),
                                o = L.getFontClassNames(),
                                i = [];
                            return i.push(t.props.variationClassNames), i.push(o), (0, d.Z)("div", {
                                className: "submit-result-container ".concat(i.join(" ")),
                                id: "popups-email-form-success"
                            }, void 0, (0, d.Z)(V, {
                                fonts: t._getRequiredFonts(),
                                domId: "popups-email-form-success"
                            }), (0, d.Z)("div", {
                                className: "title s-font-body"
                            }, void 0, null == n || null === (e = n.arguments) || void 0 === e ? void 0 : e.successHint), (0, d.Z)(K, {
                                type: null,
                                name: qe("Ok"),
                                handleClick: t.onCloseDialog
                            }))
                        })), (0, y.Z)((0, f.Z)(t), "getActionByType", (function(e) {
                            var n = t.state.templateData,
                                o = (null == n ? void 0 : n.actions) || [];
                            return k()(o).call(o, (function(n) {
                                return n.type === e
                            }))
                        })), t.state = {
                            isOpen: !1,
                            formData: {},
                            templateData: {},
                            errorData: {},
                            submitted: !1,
                            gdpr_accepted: !1,
                            url: (null === (n = window) || void 0 === n ? void 0 : n.location.href) || ""
                        }, t
                    }
                    return (0, m.Z)(i, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                n = this.props.currentPageUID,
                                t = void 0 === n ? "" : n;
                            je().then((function(n) {
                                var o, i = null === (o = n[0]) || void 0 === o ? void 0 : o.data;
                                e.setState({
                                    templateData: i
                                }, (function() {
                                    e.initTemplateData(t)
                                }))
                            })), this.assembleHandle()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.removeBindEvent()
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            var n = e.currentPageUID;
                            n !== this.props.currentPageUID && this.initTemplateData(n)
                        }
                    }, {
                        key: "_bindOnExit",
                        value: function() {
                            He.isMobile() ? window.addEventListener("popstate", this._handlePopState) : ue(document).on("mouseleave", this._onMoveBrowserToolbar)
                        }
                    }, {
                        key: "_unBindOnExit",
                        value: function() {
                            He.isMobile() ? window.removeEventListener("popstate", this._handlePopState) : ue(document).off("mouseleave", this._onMoveBrowserToolbar)
                        }
                    }, {
                        key: "_bindWindowScroll",
                        value: function() {
                            ue(window).on("scroll", this._onScroll)
                        }
                    }, {
                        key: "_unbindWindowScroll",
                        value: function() {
                            ue(window).off("scroll", this._onScroll)
                        }
                    }, {
                        key: "_getRequiredFonts",
                        value: function() {
                            var e, n = T()(e = ["body", "title", "heading", "button"]).call(e, (function(e) {
                                var n;
                                return T()(n = Be([L.getFontName(e), L.getFontName(e, {
                                    preview: !0
                                })]).uniq().compact()).call(n, (function(n) {
                                    return {
                                        usedAs: e,
                                        value: L.getFontByName(n)
                                    }
                                })).value()
                            }));
                            return Be.flatten(n)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, n, t = this.state,
                                o = t.isOpen,
                                i = t.templateData,
                                a = t.formData,
                                l = t.submitted,
                                r = t.errorData,
                                s = t.gdpr_accepted,
                                c = null == i || null === (e = i.theme) || void 0 === e || null === (n = e.layout) || void 0 === n ? void 0 : n.type;
                            return (0, d.Z)(Y.Modal, {
                                className: "s-email-form popups-dialog layout-".concat(c, " modify-the-position"),
                                zIndex: 10002,
                                visible: o,
                                maskClosable: !1,
                                closable: "AGE" !== (null == i ? void 0 : i.type),
                                onCancel: this.onCloseDialog
                            }, void 0, l ? this.renderSuccessContent() : (0, d.Z)(ye, {
                                templateData: i,
                                formData: a,
                                errorData: r,
                                formActions: this.formActions,
                                onChangeFormData: this.onChangeFormData,
                                onToggleTerms: this.onToggleTerms,
                                gdprAccepted: s,
                                checkValidate: this.checkValidate
                            }))
                        }
                    }]), i
                }(R.PureComponent),
                $e = (0, O.connect)((function() {
                    return {
                        isMultiPage: B.getIsMultiPage(),
                        currentPageUID: B.getCurrentPageUID(),
                        variationClassNames: B.getTemplateVariationClassNames(),
                        fontClassNames: L.getFontClassNames()
                    }
                }), {})(Ye),
                Qe = {
                    PopupsContent: ye
                },
                Xe = $e
        },
        743668: function(e, n, t) {
            (n = t(923645)(!1)).push([e.id, ".s-component-editor-inner.common-editor .s-component-content img {\n  margin: 0px auto;\n  border-radius: 3px;\n  max-width: 98%;\n  display: block;\n  padding-top: 10px 0;\n}\n.s-component-editor-inner.common-editor .s-component-content p {\n  margin: 0.5em 0;\n  line-height: 1.4;\n}\n.s-component-editor-inner.common-editor .s-component-content em {\n  font-style: italic;\n  font-weight: inherit;\n}\n.s-component-editor-inner.common-editor .s-component-content strong {\n  font-style: inherit;\n}\n.s-component-editor-inner.common-editor .s-component-content ol {\n  margin: 0.5em 0;\n  padding: 0 20px;\n  list-style-type: decimal;\n}\n.s-component-editor-inner.common-editor .s-component-content ul {\n  margin: 0.5em 0;\n  padding: 0 20px;\n  list-style-type: disc;\n}\n.s-component-editor-inner.common-editor .s-component-content li {\n  line-height: 1.4;\n}\n@media only screen and (max-width: 500px) {\n  .popups-dialog .s-kit-modal-body {\n    max-height: 74vh;\n    overflow-x: hidden;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .popups-dialog.s-email-form.modify-the-position .s-kit-modal-content .s-kit-modal-close {\n    top: -40px;\n    right: 0;\n  }\n  .s-kit-modal.popups-dialog {\n    position: fixed;\n    top: 40px;\n    left: 0;\n    min-width: 100%;\n    margin: 0;\n  }\n}\n.popups-dialog.s-email-form.modify-the-position .s-kit-modal-content {\n  overflow: visible;\n}\n.popups-dialog.s-email-form.modify-the-position .s-kit-modal-close {\n  top: 0;\n  right: -40px;\n  color: rgba(255, 255, 255, 0.75);\n}\n.popups-dialog.s-email-form .s-kit-modal-body {\n  padding: 0;\n}\n.popups-dialog.s-email-form .s-kit-modal-content {\n  width: 100%;\n}\n.popups-dialog.s-email-form .s-kit-modal-close {\n  top: 7px;\n  right: 6px;\n}\n.popups-dialog.s-email-form .submit-result-container {\n  padding: 40px;\n}\n.popups-dialog.s-email-form .submit-result-container .title {\n  margin-bottom: 40px;\n  box-sizing: border-box;\n  text-align: center;\n}\n.popups-dialog.s-email-form .submit-result-container .s-email-form-button {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 9px 9px;\n  font-size: 14px;\n  min-height: 36px;\n  line-height: 18px;\n  letter-spacing: 1.5px;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n", ""]), e.exports = n
        }
    }
]);