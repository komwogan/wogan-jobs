/*! For license information please see 8072.c8c9711981f9b7112076-site-bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [8072], {
        408072: function(e, t, n) {
            n.r(t), n.d(t, {
                areBackgroundAnimationsEnabledOnThisDevice: function() {
                    return B
                },
                default: function() {
                    return R
                }
            });
            var a, i = n(468420),
                o = n(327344),
                s = n(844845),
                r = n(54103),
                l = n.n(r),
                h = n(778914),
                c = n.n(h),
                u = n(786483),
                d = n(818166),
                m = n(914578),
                g = n(694473),
                _ = n.n(g),
                f = n(933032),
                p = n.n(f),
                v = n(820666),
                y = n(223336),
                w = function() {
                    function e(t, n) {
                        var a, o, r, h;
                        if ((0, i.Z)(this, e), (0, s.Z)(this, "_waypoints", void 0), (0, s.Z)(this, "_refreshTimeout", null), (0, s.Z)(this, "_animationType", null), this._waypoints = [], t && "none" !== t.page_scroll) {
                            var c = t.page_scroll;
                            this._animationType = c;
                            var u = "s-animation-page-".concat(c, "-before");
                            _()(a = y(n)).call(a, ".s-section .s-component, .s-section.s-rows-section .s-item-text-group, .process-item-infos").each((function(e, t) {
                                if (!v(t)) {
                                    var n = (t = y(t)).parents(".s-info-box"),
                                        a = t.parents(".s-item-text-group");
                                    n.length > 0 ? t = n : a.length > 0 && (t = a), t.addClass(u)
                                }
                            })), y("." + u).each((function() {
                                y(this).parents("." + u).removeClass(u)
                            }));
                            var d = l()(o = this._onScrolledToElement).call(o, this);
                            this._waypoints = _()(r = y(n)).call(r, "." + u).waypoint((function(e) {
                                "down" === e && (d(this.element), this.destroy())
                            }), {
                                offset: "100%"
                            }), this._onScroll = m.debounce(l()(h = this._onScroll).call(h, this), 200), y(window).on("scroll", this._onScroll), this._refreshTimeout = p()((function() {
                                Waypoint.refreshAll(), this._refreshTimeout = null
                            }), 500)
                        }
                    }
                    return (0, o.Z)(e, [{
                        key: "_onScrolledToElement",
                        value: function(e) {
                            y(e).addClass("s-animation-page-".concat(this._animationType)).removeClass("s-animation-page-".concat(this._animationType, "-before"))
                        }
                    }, {
                        key: "_onScroll",
                        value: function() {
                            var e = this;
                            y(window).scrollTop() + y(window).height() >= y("body").height() && y(".s-animation-page-".concat(this._animationType, "-before")).each((function(t, n) {
                                return e._onScrolledToElement(n)
                            }))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e;
                            c()(e = this._waypoints).call(e, (function(e) {
                                return e.destroy()
                            })), y(window).off("resize", this._onScroll), clearTimeout(this._refreshTimeout)
                        }
                    }]), e
                }(),
                k = n(977766),
                S = n.n(k),
                b = n(620116),
                A = n.n(b),
                T = n(981643),
                x = n.n(T),
                P = n(98926),
                C = n.n(P),
                Z = n(43138),
                E = n(234584);

            function H(e) {
                var t, n;
                return _()(t = y(e)).call(t, ".s-bg-image").length > 0 && (e = _()(n = y(e)).call(n, ".s-bg-image")[0]), e
            }
            var B, D = ["zine", "glow", "pitch_new"],
                I = S()(a = ["app", "s5-theme"]).call(a, D),
                W = function() {
                    function e(t, n) {
                        var a, o;
                        (0, i.Z)(this, e), (0, s.Z)(this, "_sectionsThatShouldBeAnimated", void 0), (0, s.Z)(this, "_parallaxSpeed", void 0), (0, s.Z)(this, "_contentElement", void 0), (0, s.Z)(this, "_isDestroyed", !1), this._contentElement = n, this._applyParallax = l()(a = this._applyParallax).call(a, this), this._onWindowResize = m.debounce(l()(o = this._onWindowResize).call(o, this), 200), y(window).on("resize", this._onWindowResize), y(window).on("scroll", this._applyParallax), this._updateSectionsThatShouldBeAnimated(), this._updateBackgroundAnimationSpeed(t, !0)
                    }
                    return (0, o.Z)(e, [{
                        key: "_updateBackgroundAnimationSpeed",
                        value: function(e, t) {
                            var n = this._getParallaxSpeed(e);
                            n !== this._parallaxSpeed && (this._parallaxSpeed = n, 1 === this._parallaxSpeed ? this._removeParallax() : t || this._applyParallax(!0))
                        }
                    }, {
                        key: "_getParallaxSpeed",
                        value: function(e) {
                            return "none" === e.background ? 1 : "fixed" === e.background ? 0 : "parallax" === e.background ? .3 : void 0
                        }
                    }, {
                        key: "_onWindowResize",
                        value: function() {
                            var e = this;
                            B() || this._sectionsThatShouldBeAnimated.each((function(t, n) {
                                e._revertAnimationStyles(n)
                            })), this._applyParallax(!0)
                        }
                    }, {
                        key: "handlePageDataChange",
                        value: function(e) {
                            this._updateSectionsThatShouldBeAnimated(), this._updateBackgroundAnimationSpeed(e)
                        }
                    }, {
                        key: "_removeParallax",
                        value: function() {
                            var e = this;
                            this._sectionsThatShouldBeAnimated.each((function(t, n) {
                                e._revertAnimationStyles(n)
                            }))
                        }
                    }, {
                        key: "_updateSectionsThatShouldBeAnimated",
                        value: function() {
                            var e, t;
                            this._sectionsThatShouldBeAnimated = A()(e = _()(t = y(this._contentElement)).call(t, ".s-section")).call(e, (function(e, t) {
                                var n = y(t),
                                    a = n.is(".s-slider-section"),
                                    i = n.is(".s-grid-section"),
                                    o = "none" != n.css("backgroundImage") || "none" != _()(n).call(n, "s-bg-image").css("backgroundImage"),
                                    s = n.is(".s-bg-video");
                                return o && !a && !s && !i
                            }))
                        }
                    }, {
                        key: "_applyParallax",
                        value: function(e) {
                            var t = this;
                            if (B() && 1 !== this._parallaxSpeed) {
                                var n = y(window).scrollTop();
                                this._sectionsThatShouldBeAnimated.each((function(a, i) {
                                    if (i = H(i), y(i).hasClass("_animate-background")) {
                                        var o = y(i).parents(".slide").index(),
                                            s = o <= 1,
                                            r = 1 === o,
                                            l = y(i).data("imageHeight") > y(i).outerHeight() + 150,
                                            h = t._parallaxSpeed,
                                            c = .3 === h,
                                            u = i.offsetHeight,
                                            m = window.innerHeight,
                                            g = (window.innerWidth, i.getBoundingClientRect().top + n),
                                            _ = g,
                                            f = E.getThemeName(),
                                            p = -1 !== x()(I).call(I, f);
                                        if (s && p && c && l && !Z.isSmallerThanDesktop()) {
                                            h = .7;
                                            var v = "s5-theme" === f,
                                                w = -1 === x()(D).call(D, f);
                                            if (v) {
                                                var k = d.getS5Theme(),
                                                    b = null == k ? void 0 : k.getIn(["nav", "name"]);
                                                w = !(null != k && k.getIn(["nav", "isTransparent"])) && "left" !== b
                                            }
                                            w && (_ -= y(".s-navbar-desktop").outerHeight() || y("#header-container").outerHeight()), r && (_ -= y(".s-section-1").outerHeight())
                                        }
                                        var A = _ - m,
                                            T = _ + u,
                                            P = g - m <= n && n <= g + u,
                                            B = T - A,
                                            W = (n - A) / B,
                                            z = (Math.max(m, u), T - m),
                                            F = T - (z + (m * h - B * h * ((z - A) / B)));
                                        if (e && $B.TH.getBackgroundImageSize(y(i), (function(e) {
                                                if (!t._isDestroyed) {
                                                    var n = e.width / e.height;
                                                    if (y(i).hasClass("_image-position-center")) y(i).data("imageWidth", e.width), y(i).data("imageHeight", e.height);
                                                    else {
                                                        var a = F,
                                                            o = F * n;
                                                        o < y(i).outerWidth() && (a = (o = y(i).outerWidth()) / n), y(i).data("imageWidth", o), y(i).data("imageHeight", a)
                                                    }
                                                    t._applyParallax(!1)
                                                }
                                            })), P) {
                                            var N, L = y(i).offset().left + (y(i).outerWidth() - y(i).data("imageWidth")) / 2,
                                                R = m * h - B * h * W,
                                                M = (F - y(i).data("imageHeight")) / 2 + R + 2.75;
                                            if (s && p && c && l && !Z.isSmallerThanDesktop()) {
                                                var O = (y(i).data("imageHeight") - y(i).outerHeight()) / 2,
                                                    j = (y(i).offset() || {}).top;
                                                if (!C()(j) && (M = j - O + R, r)) {
                                                    var J = j - n;
                                                    M = Math.min(J, M)
                                                }
                                            }
                                            if (C()(M)) return;
                                            y(i).css({
                                                "background-attachment": "fixed",
                                                "background-position-x": L,
                                                "background-position-y": M
                                            }), "repeat" !== y(i).css("background-repeat") && y(i).css({
                                                "background-size": S()(N = "".concat(y(i).data("imageWidth"), "px ")).call(N, y(i).data("imageHeight"), "px")
                                            })
                                        }
                                    } else t._revertAnimationStyles(i)
                                }))
                            }
                        }
                    }, {
                        key: "_revertAnimationStyles",
                        value: function(e) {
                            e = H(e), y(e).css("background-attachment", "");
                            var t = y(e).attr("data-react-style");
                            t && y(e).css(JSON.parse(t))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._removeParallax(), y(window).off("resize", this._onWindowResize), y(window).off("scroll", this._applyParallax), this._isDestroyed = !0
                        }
                    }]), e
                }();
            B = function() {
                return !(Z.isMobile() || Z.isSmallScreen() || Z.isEdge() || Z.isIE11())
            }, n(569600);
            var z = n(2991),
                F = n.n(z),
                N = function() {
                    function e(t, n) {
                        if ((0, i.Z)(this, e), (0, s.Z)(this, "_contentElement", void 0), this._contentElement = n, !Z.isMobile() && "zoom_in" === t.image_link_hover) {
                            var a = [".s-component.s-media", ".s-gallery-item", ".image-wrapper", ".s-image", ".s-blog-avatar-container"],
                                o = F()(a).call(a, (function(e) {
                                    return ".s-section:not(.s-footer-section) " + e + " a img"
                                })).join(", ");
                            o += ", .s-blog-avatar, .s-grid-section-cell a .s-bg-image", y(n).on("mouseenter.imageLinkHoverAnimator", o, (function() {
                                var e, t = y(this),
                                    n = t.width(),
                                    a = t.height();
                                e = n > a ? (n + 20) / n : (a + 20) / a, y(this).css("transform", "scale(" + e + ")")
                            })), y(n).on("mouseleave.imageLinkHoverAnimator", o, (function() {
                                y(this).css("transform", "")
                            }))
                        }
                    }
                    return (0, o.Z)(e, [{
                        key: "destroy",
                        value: function() {
                            y(this._contentElement).off("mouseenter.imageLinkHoverAnimator"), y(this._contentElement).off("mouseleave.imageLinkHoverAnimator")
                        }
                    }]), e
                }(),
                L = function() {
                    function e(t) {
                        var n, a;
                        (0, i.Z)(this, e), (0, s.Z)(this, "_newPageFadeInToken", null), (0, s.Z)(this, "_animations", void 0), (0, s.Z)(this, "_contentElement", void 0), this._contentElement = t, this._shouldAnimate() && (d.getSiteAnimations(), this._initAnimations(t), this._onPageDataChange = m.debounce(l()(n = this._onPageDataChange).call(n, this), 50), d.addChangeListener(this._onPageDataChange), this._onNewPageFadeIn = l()(a = this._onNewPageFadeIn).call(a, this), this._newPageFadeInToken = u.Event.subscribe("Page.afterNewOneFadeIn", this._onNewPageFadeIn))
                    }
                    return (0, o.Z)(e, [{
                        key: "_onPageDataChange",
                        value: function() {
                            var e, t = d.getSiteAnimations();
                            c()(e = this._animations).call(e, (function(e) {
                                e.handlePageDataChange && e.handlePageDataChange(t)
                            }))
                        }
                    }, {
                        key: "_onNewPageFadeIn",
                        value: function() {
                            d.getSiteAnimations(), this._destroyAnimations(), this._initAnimations(this._contentElement)
                        }
                    }, {
                        key: "_initAnimations",
                        value: function(e) {
                            var t = d.getSiteAnimations();
                            this._animations = [], this._animations.push(new w(t, e)), this._animations.push(new N(t, e)), this._animations.push(new W(t, e))
                        }
                    }, {
                        key: "_shouldAnimate",
                        value: function() {
                            return !/animation=0/.test(window.location.href)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._shouldAnimate() && (d.removeChangeListener(this._onPageDataChange), u.Event.unsubscribe(this._newPageFadeInToken), this._destroyAnimations())
                        }
                    }, {
                        key: "_destroyAnimations",
                        value: function() {
                            var e;
                            c()(e = this._animations).call(e, (function(e) {
                                return e.destroy()
                            }))
                        }
                    }]), e
                }(),
                R = L
        }
    }
]);