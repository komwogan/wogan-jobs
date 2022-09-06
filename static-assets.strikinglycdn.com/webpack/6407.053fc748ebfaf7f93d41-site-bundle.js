/*! For license information please see 6407.053fc748ebfaf7f93d41-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [6407], {
        466407: function(e, t, o) {
            o.r(t);
            var n = o(686902),
                s = o.n(n),
                a = o(14310),
                i = o.n(a),
                l = o(620116),
                r = o.n(l),
                c = o(834074),
                m = o.n(c),
                h = o(778914),
                p = o.n(h),
                g = o(239649),
                d = o.n(g),
                b = o(820368),
                u = o.n(b),
                v = o(663978),
                w = o.n(v),
                f = o(844845),
                E = o(694473),
                N = o.n(E),
                k = o(51942),
                _ = o.n(k),
                L = o(981643),
                P = o.n(L),
                y = (o(209653), o(974916), o(864765), o(914578)),
                I = o(836808),
                x = o(45697),
                C = o(223336),
                B = o(399069),
                S = o.n(B),
                T = o(234584),
                j = o.n(T),
                M = o(183123),
                F = o(8689),
                D = o.n(F),
                A = (o(141655), o(43138)),
                W = o.n(A),
                z = o(585209),
                R = o.n(z),
                U = o(792681),
                Z = o(267385);

            function q(e, t) {
                var o = s()(e);
                if (i()) {
                    var n = i()(e);
                    t && (n = r()(n).call(n, (function(t) {
                        return m()(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o, n = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) p()(o = q(Object(n), !0)).call(o, (function(t) {
                        (0, f.Z)(e, t, n[t])
                    }));
                    else if (d()) u()(e, d()(n));
                    else {
                        var s;
                        p()(s = q(Object(n))).call(s, (function(t) {
                            w()(e, t, m()(n, t))
                        }))
                    }
                }
                return e
            }
            var O = y.throttle((function() {
                var e = o(796764),
                    t = H(H({}, j().getUserSubscriptionAttributes()), {}, {
                        site_id: j().getId()
                    });
                t = _()({}, t, {
                    pbs_i18n_abtest: I.get("_pbs_i18n_ab_test"),
                    pbs_i18n_status: M.getPbsI18n() && (0, U.matchPbsI18nLocaleWithBrowserLocale)()
                }), e.sendPbsImpression(t)
            }), 8e3, {
                leading: !1
            });
            t.default = S().createPageComponent({
                displayName: "FooterLogo",
                observedProps: ["showLogo", "showTermsLink", "showPrivacyPolicyLink"],
                bobcatPropTypes: {
                    designer: {
                        showLogo: x.bool.isRequired,
                        showTermsLink: x.bool,
                        showPrivacyPolicyLink: x.bool
                    }
                },
                componentDidMount: function() {
                    !this.isEditMode() && this.props.showLogo && function(e) {
                        var t = C(window),
                            o = C(document);
                        e.hide();
                        var n = C(".logo-link-pbs-b");
                        if (e.css({
                                bottom: 0,
                                position: "fixed"
                            }).hide(), Number(t.height()) >= Number(o.height()) ? (n.length ? e.show() : e.css({
                                bottom: "-5px"
                            }).show(), O()) : t.scroll((function() {
                                var s, a = Number(o.height()),
                                    i = Number(t.height()),
                                    l = Number(o.scrollTop()),
                                    r = j().getIsBlog(),
                                    c = a - i - l,
                                    m = C(".s-footer-section").outerHeight() || 500;
                                s = "free" === j().getMemberShip() ? l > 10 : m > c;
                                var h = N()(e).call(e, ".logo-link");
                                return h.outerHeight(), l + i + Number(n.outerHeight()) >= a ? (h.removeClass("fixed animate-show animate-hide"), O()) : s ? (h.addClass("fixed"), h.removeClass("animate-hide"), h.addClass("animate-show"), O()) : (h.removeClass("animate-show"), h.addClass("animate-hide")), "s5-theme" !== j().getThemeName() || r ? e.css({
                                    bottom: 0,
                                    position: "absolute"
                                }).show() : e.css({
                                    bottom: -Number(n.outerHeight()),
                                    position: "absolute"
                                }).show()
                            })), M.getIsSxl() || (N()(e).call(e, "a.logo-link").mouseover((function() {
                                return N()(e).call(e, ".s-footer-logo-tooltip").addClass("hover")
                            })), N()(e).call(e, "a.logo-link").mouseout((function() {
                                return N()(e).call(e, ".s-footer-logo-tooltip").removeClass("hover")
                            }))), j().hasNewMobileActions()) e.addClass("has-new-mobile-actions")
                    }(C(this.refs.logo)), this.setPostion()
                },
                componentDidUpdate: function() {
                    this.setPostion()
                },
                _onClickRemoveLogo: function() {},
                setPostion: function() {
                    if (this.props.showLogo) {
                        var e, t = 50;
                        e = M.getIsSxl() ? C(".s-footer-logo") : C(".s-footer-logo-pbs"), this.props.isMobilePreview && (t = 130);
                        var o = Number(C(".logo-link-pbs-b").outerHeight());
                        if (o < t) requestAnimationFrame(this.setPostion);
                        else {
                            var n = 0;
                            W().isMobile() && (n = 100), C("#s-content").css("padding-bottom", o), "s5-theme" != j().getThemeName() || j().getIsBlog() || e.css("bottom", "-".concat(o + n, "px"))
                        }
                    } else C("#s-content").css("padding-bottom", "0")
                },
                _onClickMobileFooter: function(e) {
                    var t;
                    return t = M.getIsInstantFollowRollout() ? "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyNjAxNTI1NA==&scene=110#wechat_redirect" : "http://mp.weixin.qq.com/s?__biz=MzIyNjAxNTI1NA==&mid=502981655&idx=1&sn=0d28f2e6e3d02cbf91dcfc5802371c0c#rd", e.preventDefault(), M.getInWeChat() ? window.location.href = t : window.location.href = D().getFooterLogoSeoData().anchor_link
                },
                _isLoadedInTemplatePreview: function() {
                    var e;
                    return !(!window.location || !window.location.search) && P()(e = window.location.search).call(e, "in_template_preview=1") > -1
                },
                isPBSB: function() {
                    return M.getIsPBSB()
                },
                isI18nPbsB: function() {
                    return "b" === (0, U.getPbsI18nAbTest)()
                },
                getI18nPbsMatchLocale: function() {
                    var e = (0, Z.getBrowserLocale)();
                    return (0, U.matchPbsI18nLocaleWithBrowserLocale)() ? e : "en"
                },
                render: function() {
                    return /smoke-test=1/.test(window.location.href) ? null : R().apply(this)
                }
            })
        },
        585209: function(e, t, o) {
            var n = o(353147),
                s = o(366757),
                a = o(914578),
                i = o(8689),
                l = (o(183123), o(834243)),
                r = o(271866),
                c = o(589499);
            o(43138), e.exports = function() {
                return s.createElement(r, {}, this.props.showLogo ? s.createElement("div", {
                    className: "s-component s-footer-logo s-footer-pbs " + this.getI18nPbsMatchLocale() + " " + a.keys(a.pick({
                        "s-footer-logo-pbs": !0
                    }, a.identity)).join(" "),
                    ref: "logo"
                }, this.isEditMode() ? s.createElement("div", {
                    className: "s-component-editor-wrapper"
                }, this.isState("editor") ? null : s.createElement("div", {
                    className: "s-component-overlay",
                    onClick: this._onClickRemoveLogo
                }, s.createElement("div", {
                    className: "center"
                }, s.createElement("span", {}, n("Remove"))))) : null, this.isI18nPbsB() ? null : s.createElement("div", {}, s.createElement("a", {
                    className: "i18n-pbs-link logo-link",
                    target: "_parent",
                    href: i.getFooterLogoSeoData().anchor_link
                }, s.createElement("div", {
                    className: "logo-content"
                }, s.createElement("i", {
                    className: "down-icon fa fa-caret-down"
                }), s.createElement("div", {
                    className: "vertical-line"
                }), s.createElement("div", {
                    className: "logo-panel"
                }, s.createElement("div", {
                    className: "pbs-text"
                }, "\n              Create a site with\n              ", s.createElement("img", {
                    src: c.cdnAssetPath("/images/pbs/logo-footer-pbs.svg"),
                    style: {
                        width: "88px",
                        height: "22px"
                    }
                })))), s.createElement("div", {
                    className: "s-footer-logo-tooltip"
                }, s.createElement("div", {
                    className: "tooltip-container"
                }, s.createElement("div", {
                    className: "tooltip-white"
                }, "\n              ", n("This website is built with Strikingly."), "\n              ", s.createElement("br", {}), "\n              ", n("Create yours today!"), "\n            ")))), s.createElement("a", {
                    className: "logo-link-pbs-b",
                    target: "_parent",
                    href: i.getFooterLogoSeoData().anchor_link
                }, s.createElement("p", {}, "\n          ", n("This website is built with Strikingly."), "\n        "), s.createElement("p", {}, "\n          ", n("Create your FREE website today!"), "\n        "), s.createElement("button", {}, s.createElement("span", {}, "\n            ", n("start now"), "\n          "), s.createElement("span", {
                    className: "arrow entypo-right-open-big"
                })))), this.isI18nPbsB() ? s.createElement("div", {}, s.createElement("a", {
                    className: "i18n-pbs-link logo-link " + this.getI18nPbsMatchLocale(),
                    target: "_parent",
                    href: i.getFooterLogoSeoData().anchor_link
                }, s.createElement("div", {
                    className: "logo-content"
                }, s.createElement("i", {
                    className: "down-icon fa fa-caret-down"
                }), s.createElement("div", {
                    className: "vertical-line"
                }), s.createElement("div", {
                    className: "logo-panel"
                }, "\n            ", i.getPhraseWithBrowserLocale("title")(), "\n          ")), s.createElement("div", {
                    className: "s-footer-logo-tooltip"
                }, s.createElement("div", {
                    className: "tooltip-container"
                }, s.createElement("div", {
                    className: "tooltip-white"
                }, "\n              ", i.getPhraseWithBrowserLocale("tooltipText1"), "\n              ", s.createElement("br", {}), "\n              ", i.getPhraseWithBrowserLocale("tooltipText2"), "\n            ")))), s.createElement("a", {
                    className: "logo-link-pbs-b",
                    target: "_parent",
                    href: i.getFooterLogoSeoData().anchor_link
                }, s.createElement("p", {}, "\n          ", i.getPhraseWithBrowserLocale("guideText1"), "\n        "), s.createElement("p", {}, "\n          ", i.getPhraseWithBrowserLocale("guideText2"), "\n        "), s.createElement("button", {}, s.createElement("span", {}, "\n            ", i.getPhraseWithBrowserLocale("startNow"), "\n          "), s.createElement("span", {
                    className: "arrow entypo-right-open-big"
                })))) : null) : null, this.props.showLogo ? s.createElement("div", {
                    className: "s-component s-footer-logo " + a.keys(a.pick({
                        "s-footer-logo-zbj": l.isZbjUser()
                    }, a.identity)).join(" "),
                    ref: "logo"
                }, s.createElement("span", {}, this.isEditMode() ? s.createElement("div", {
                    className: "s-component-editor-wrapper",
                    skip: "true"
                }, this.isState("editor") ? null : s.createElement("div", {
                    className: "s-component-overlay",
                    onClick: this._onClickRemoveLogo
                }, s.createElement("div", {
                    className: "center"
                }, s.createElement("span", {}, n("Remove"))))) : null, s.createElement("a", {
                    className: "logo-link " + (l.isZbjUser() ? "logo-link-sxl-zbj" : "logo-link-sxl"),
                    target: l.isZbjUser() ? "_blank" : "_parent",
                    href: this._isLoadedInTemplatePreview() ? "javascript: void 0" : l.isZbjUser() ? "http://yunzhan.zbj.com" : i.getFooterLogoSeoData().anchor_link
                }, "\n        ", l.isZbjUser() ? "八戒云站提供技术支持" : i.getFooterLogoSeoData().anchor_text, "\n      "), s.createElement("div", {
                    className: "logo-hover logo-hover-sxl"
                }), s.createElement("div", {
                    className: "s-footer-logo-tooltip"
                }, s.createElement("div", {
                    className: "tooltip-container"
                }, s.createElement("div", {
                    className: "tooltip-white"
                }, "\n            ", l.isZbjUser() ? "开始用八戒云站创建自己的网站" : "开始用上线了创建自己的网站", "\n          "))))) : null)
            }
        }
    }
]);