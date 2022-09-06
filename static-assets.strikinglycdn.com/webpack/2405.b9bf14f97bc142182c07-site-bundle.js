/*! For license information please see 2405.b9bf14f97bc142182c07-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [2405], {
        588034: function(e, n, t) {
            var r = t(893379),
                o = t(690423);
            "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
                [e.id, o, ""]
            ]);
            r(o, {
                insert: "head",
                singleton: !1
            }), e.exports = o.locals || {}
        },
        72405: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return ie
                }
            });
            var r = t(501068),
                o = t.n(r),
                i = t(863056),
                a = t(468420),
                c = t(327344),
                s = t(505281),
                l = t(484441),
                d = t(103020),
                u = t(803362),
                p = t(844845),
                m = t(981643),
                v = t.n(m),
                g = t(933032),
                h = t.n(g),
                f = t(2991),
                w = t.n(f),
                b = t(977766),
                x = t.n(b),
                Z = t(366757),
                S = t(223336),
                y = t(143393),
                k = t(459800),
                N = t(573126),
                D = t(381633),
                C = function(e) {
                    var n = e.input,
                        t = e.placeholder,
                        r = e.maxLength,
                        o = e.meta || {},
                        a = o.touched,
                        c = o.error;
                    return (0, i.Z)("div", {
                        className: "input-section"
                    }, void 0, Z.createElement(D.Input, (0, N.Z)({}, n, {
                        className: "form-input",
                        placeholder: t,
                        maxLength: r || 50
                    })), a && c && (0, i.Z)("div", {
                        className: "form-field-error"
                    }, void 0, c))
                },
                E = t(805803),
                R = function(e) {
                    var n, t, r = e.input,
                        o = e.maxLength,
                        a = e.placeholder,
                        c = e.meta,
                        s = c.touched,
                        l = c.error;
                    return (0, i.Z)("div", {
                        className: "textarea-section"
                    }, void 0, Z.createElement(D.Input, (0, N.Z)({}, r, {
                        type: "textarea",
                        showCount: !0,
                        placeholder: a,
                        maxLength: o || 500
                    })), (0, i.Z)("div", {
                        className: "count"
                    }, void 0, x()(n = "".concat((null === (t = r.value) || void 0 === t ? void 0 : t.length) || 0, " / ")).call(n, o)), s && l && (0, i.Z)("div", {
                        className: "form-field-error"
                    }, void 0, l))
                },
                O = t(294184),
                F = t.n(O),
                P = t(359011),
                I = t(684961),
                z = t(183123),
                G = t(234584),
                A = t(391435),
                L = t(818166),
                M = t(117847),
                T = t(975538),
                _ = I("stores.pageMeta.id") || I("blogPostData.pageMeta.id"),
                q = t(353147),
                j = function(e) {
                    var n = e.score,
                        t = e.meta,
                        r = e.draftScore,
                        o = e.onScoreChange,
                        a = t || {},
                        c = a.touched,
                        s = a.error,
                        l = r || n;
                    return (0, i.Z)("div", {
                        className: "product-rate"
                    }, void 0, (0, i.Z)("div", {
                        className: F()("rate-label", {
                            error: c && s
                        })
                    }, void 0, q("Ecommerce|Rate this product")), (0, i.Z)("div", {
                        className: "score-star"
                    }, void 0, (0, i.Z)(T.Z, {
                        scoreNum: l,
                        onChange: o
                    })))
                },
                B = t(589499),
                J = t(333938),
                V = t(359340),
                Y = t.n(V),
                H = t(563109),
                U = t.n(H),
                W = function() {
                    var e = (0, J.Z)(U().mark((function e(n) {
                        var t;
                        return U().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, e.t0 = n.response && n.response.json, !e.t0) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 5, n.response.json();
                                case 5:
                                    e.t0 = e.sent;
                                case 6:
                                    if (!(t = e.t0) || !t.meta) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", t.meta.devMessage);
                                case 9:
                                    return e.abrupt("return", n && n.message || "error");
                                case 12:
                                    throw e.prev = 12, e.t1 = e.catch(0), n && n.message || "error";
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 12]
                        ])
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }();

            function K() {
                return (K = (0, J.Z)(U().mark((function e(n) {
                    var t, r, o;
                    return U().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, P.fetchJSON)(x()(t = "/r/v1/sites/".concat(_, "/ecommerce/product_reviews/")).call(t, n, "/order_info"), {
                                    method: "GET"
                                });
                            case 3:
                                return r = e.sent, e.next = 6, r.json();
                            case 6:
                                return o = e.sent, e.abrupt("return", null == o ? void 0 : o.data);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), e.next = 14, W(e.t0);
                            case 14:
                                throw e.sent;
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 10]
                    ])
                })))).apply(this, arguments)
            }

            function Q() {
                return (Q = (0, J.Z)(U().mark((function e(n) {
                    var t, r;
                    return U().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, P.fetchJSON)("/r/v1/sites/".concat(_, "/ecommerce/product_reviews"), {
                                    method: "POST",
                                    body: Y()(n)
                                });
                            case 3:
                                return t = e.sent, e.next = 6, t.json();
                            case 6:
                                return r = e.sent, e.abrupt("return", null == r ? void 0 : r.data);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), e.next = 14, W(e.t0);
                            case 14:
                                throw e.sent;
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 10]
                    ])
                })))).apply(this, arguments)
            }
            var X, $, ee, ne = t(576574),
                te = (t(588034), t(353147));
            var re = function(e) {
                    (0, l.Z)(m, e);
                    var n, t, r = (n = m, t = function() {
                        if ("undefined" == typeof Reflect || !o()) return !1;
                        if (o().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r = (0, u.Z)(n);
                        if (t) {
                            var i = (0, u.Z)(this).constructor;
                            e = o()(r, arguments, i)
                        } else e = r.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function m(e) {
                        var n;
                        return (0, a.Z)(this, m), n = r.call(this, e), (0, p.Z)((0, s.Z)(n), "onFetchProductDetail", (function(e) {
                            (function(e) {
                                return K.apply(this, arguments)
                            })(e).then((function(t) {
                                n.setState({
                                    uuid: e,
                                    productDetail: t
                                }), n.onOpenDialog()
                            })).catch((function(e) {
                                console.error(e), v()(e).call(e, "already submit review") > -1 ? (n.onCloseDialog(), n.setState({
                                    errorType: "repeatSubmit"
                                }, (function() {
                                    return n.onOpenReviewFailureDialog()
                                }))) : alert(te("Ecommerce|Sorry, this product is currently unavailable for review. Please contact us if you have any questions."))
                            }))
                        })), (0, p.Z)((0, s.Z)(n), "onListenScoreStarChange", (function() {
                            var e = (0, s.Z)(n);
                            S(".score-star .star-icon").on("mouseenter", (function() {
                                var n = S(this).index() + 1;
                                e.setState({
                                    draftScore: n
                                })
                            })), S(".score-star").on("mouseleave", (function() {
                                n.setState({
                                    draftScore: 0
                                })
                            }))
                        })), (0, p.Z)((0, s.Z)(n), "onCloseDialog", (function() {
                            n.setState({
                                isOpen: !1
                            })
                        })), (0, p.Z)((0, s.Z)(n), "onOpenDialog", (function() {
                            n.setState({
                                isOpen: !0
                            }, (function() {
                                h()((function() {
                                    return n.onListenScoreStarChange()
                                }), 2e3)
                            }))
                        })), (0, p.Z)((0, s.Z)(n), "onOpenReviewSuccessDialog", (function() {
                            n.setState({
                                isOpenSuccessDialog: !0
                            })
                        })), (0, p.Z)((0, s.Z)(n), "onOpenReviewFailureDialog", (function() {
                            n.setState({
                                isOpenFailureDialog: !0
                            })
                        })), (0, p.Z)((0, s.Z)(n), "handleCloseReviewFailureDialog", (function() {
                            n.setState({
                                isOpenFailureDialog: !1
                            })
                        })), (0, p.Z)((0, s.Z)(n), "handleCloseReviewSuccessDialog", (function() {
                            n.setState({
                                isOpenSuccessDialog: !1
                            })
                        })), (0, p.Z)((0, s.Z)(n), "handleSelectScore", (function(e) {
                            var t = n.props.change;
                            t && t("score", e + 1)
                        })), (0, p.Z)((0, s.Z)(n), "renderLoading", (function() {
                            return X || (X = (0, i.Z)("div", {
                                className: "loading-container"
                            }, void 0, (0, i.Z)("i", {
                                className: "fa fa-spin fa-spinner"
                            })))
                        })), (0, p.Z)((0, s.Z)(n), "onSetIsSubmitting", (function(e) {
                            n.setState({
                                isSubmitting: e
                            })
                        })), (0, p.Z)((0, s.Z)(n), "toggleGDPRAccepted", (function(e) {
                            n.setState({
                                gdprAccepted: e.target.checked,
                                gdprError: ""
                            })
                        })), (0, p.Z)((0, s.Z)(n), "handleError", (function(e) {
                            v()(e).call(e, "invalid content") > -1 ? alert(te("Ecommerce|Sorry, the comment may contain illegal content. Please check and modify it and submit it again.")) : v()(e).call(e, "already submit review") > -1 ? (n.onCloseDialog(), n.setState({
                                errorType: "repeatSubmit"
                            }, (function() {
                                return n.onOpenReviewFailureDialog()
                            }))) : (n.onCloseDialog(), n.setState({
                                errorType: "commonError"
                            }, (function() {
                                return n.onOpenReviewFailureDialog()
                            })))
                        })), (0, p.Z)((0, s.Z)(n), "getIsShowGDPRCompliance", (function() {
                            return z.getGDPRComplianceFeature()
                        })), (0, p.Z)((0, s.Z)(n), "handleSubmitForm", (function() {
                            var e = n.props.handleSubmit,
                                t = n.state,
                                r = t.gdprAccepted,
                                o = t.uuid,
                                i = n.getIsShowGDPRCompliance();
                            e && e((function(e) {
                                if (!i || r) {
                                    n.onSetIsSubmitting(!0);
                                    var t = e.toJS();
                                    t.uuid = o,
                                        function(e) {
                                            return Q.apply(this, arguments)
                                        }(t).then((function() {
                                            n.onCloseDialog(), n.onSetIsSubmitting(!1), n.onOpenReviewSuccessDialog()
                                        })).catch((function(e) {
                                            console.error(e), n.handleError(e), n.onSetIsSubmitting(!1)
                                        }))
                                } else n.setState({
                                    gdprError: te("Dashboard|You must agree to the terms and conditions to continue.")
                                })
                            }))()
                        })), (0, p.Z)((0, s.Z)(n), "renderGDPRCompliance", (function() {
                            var e = n.state.gdprAccepted;
                            return (0, i.Z)("div", {
                                className: "gdpr-container"
                            }, void 0, (0, i.Z)("input", {
                                type: "checkbox",
                                className: "review-checkbox",
                                id: "product-review-gdpr",
                                checked: e,
                                onChange: n.toggleGDPRAccepted
                            }), (0, i.Z)("label", {
                                htmlFor: "product-review-gdpr",
                                className: "gdpr-text s-font-body"
                            }, void 0, A()))
                        })), n.state = {
                            uuid: "",
                            draftScore: 0,
                            isOpen: !1,
                            gdprError: "",
                            productDetail: {},
                            gdprAccepted: !1,
                            isSubmitting: !1,
                            errorType: "commonError",
                            isOpenSuccessDialog: !1,
                            isOpenFailureDialog: !1
                        }, n
                    }
                    return (0, c.Z)(m, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = E.browserHistory.getCurrentLocation(),
                                n = e.query,
                                t = e.pathname,
                                r = n || {},
                                o = r.uuid,
                                i = r.action;
                            !(v()(t).call(t, "/store/products") > -1 && "submitProductReview" === i) || G.getEnableProductReview() && L.hasSection("ecommerce") ? o && "submitProductReview" === i && this.onFetchProductDetail(o) : h()((function() {
                                alert(te("Ecommerce|Sorry, this product is currently unavailable for review. Please contact us if you have any questions."))
                            }), 2e3)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                n = e.isOpen,
                                t = e.gdprError,
                                r = e.draftScore,
                                o = e.errorType,
                                a = e.isSubmitting,
                                c = e.gdprAccepted,
                                s = e.productDetail,
                                l = e.isOpenSuccessDialog,
                                d = e.isOpenFailureDialog,
                                u = this.props.score,
                                p = this.getIsShowGDPRCompliance(),
                                m = s || {},
                                v = m.productName,
                                g = m.productPicture,
                                h = void 0 === g ? [] : g,
                                f = m.productVariations,
                                b = void 0 === f ? [] : f;
                            return (0, i.Z)("div", {}, void 0, (0, i.Z)(D.Modal, {
                                wrapClassName: "product-review-dialog-wrapper",
                                className: "s-kit-modal-standard-layout product-reviews-dialog",
                                zIndex: 2600,
                                visible: n,
                                maskClosable: !1,
                                onCancel: this.onCloseDialog
                            }, void 0, (0, i.Z)("div", {
                                className: "product-info-panel"
                            }, void 0, (0, i.Z)("div", {
                                className: "product-img",
                                style: {
                                    backgroundImage: "url(".concat(h[0], ")")
                                }
                            }), (0, i.Z)("div", {
                                className: "product-name"
                            }, void 0, v || ""), b.length > 0 && (0, i.Z)("div", {
                                className: "product-variations"
                            }, void 0, w()(b).call(b, (function(e, n) {
                                var t;
                                return (0, i.Z)("span", {}, n, (0, i.Z)("span", {
                                    className: "detail-text"
                                }, void 0, e.name ? x()(t = "".concat(e.name, ": ")).call(t, e.value) : e.value), n >= 0 && n < b.length - 1 && ($ || ($ = (0, i.Z)("span", {
                                    className: "line"
                                }))))
                            }))), (0, i.Z)(D.Form, {
                                className: "product-reviews-form"
                            }, void 0, (0, i.Z)(ne.Field, {
                                name: "score",
                                score: u,
                                draftScore: r,
                                component: j,
                                onScoreChange: this.handleSelectScore
                            }), (0, i.Z)(ne.Field, {
                                name: "name",
                                component: C,
                                placeholder: te("Ecommerce|Your name")
                            }), (0, i.Z)(ne.Field, {
                                name: "content",
                                maxLength: 500,
                                component: R,
                                placeholder: te("Ecommerce|Leave any comments…")
                            })), p && this.renderGDPRCompliance(), t && (0, i.Z)("div", {
                                className: "form-field-error"
                            }, void 0, t)), (0, i.Z)(D.Button, {
                                loading: a,
                                className: "submit-btn no-margin",
                                onClick: this.handleSubmitForm,
                                disabled: p && !c,
                                style: {
                                    marginTop: "20px"
                                }
                            }, void 0, te("Ecommerce|Submit Review"))), (0, i.Z)(D.Modal, {
                                className: "s-kit-modal-standard-layout product-review-success-dialog",
                                wrapClassName: "product-review-dialog",
                                zIndex: 2600,
                                visible: l,
                                maskClosable: !1,
                                onCancel: this.handleCloseReviewSuccessDialog
                            }, void 0, (0, i.Z)("div", {
                                className: "review-success-panel"
                            }, void 0, ee || (ee = (0, i.Z)(D.Icon, {
                                type: "fa fa-check success-icon"
                            })), (0, i.Z)("div", {
                                className: "review-title"
                            }, void 0, te("Ecommerce|Review submitted!")), (0, i.Z)("div", {
                                className: "review-text"
                            }, void 0, te("Ecommerce|Thank you for your review!")), (0, i.Z)(D.Button, {
                                className: "back-btn no-margin",
                                onClick: this.handleCloseReviewSuccessDialog
                            }, void 0, te("Ecommerce|Back to site")))), (0, i.Z)(D.Modal, {
                                className: "s-kit-modal-standard-layout product-review-failure-dialog",
                                wrapClassName: "product-review-dialog",
                                zIndex: 2600,
                                visible: d,
                                maskClosable: !1,
                                onCancel: this.handleCloseReviewFailureDialog
                            }, void 0, (0, i.Z)("div", {
                                className: "review-failure-panel"
                            }, void 0, (0, i.Z)("img", {
                                className: "message-icon",
                                src: (0, B.cdnAssetPath)(M.U.WARNING_MESSAGE_ICON)
                            }), (0, i.Z)("div", {
                                className: "error-message"
                            }, void 0, te("repeatSubmit" === o ? "Ecommerce|You have already submitted a review for this product." : "Ecommerce|Sorry, product reviews cannot be submitted at this time. Please contact us if you have any questions.")))))
                        }
                    }]), m
                }(Z.Component),
                oe = (0, ne.formValueSelector)("productReviewsForm"),
                ie = (0, k.connect)((function(e) {
                    var n = y.fromJS({
                        name: "",
                        score: 0,
                        content: ""
                    });
                    return {
                        score: oe(e, "score"),
                        initialValues: n
                    }
                }), {})((0, ne.reduxForm)({
                    form: "productReviewsForm",
                    enableReinitialize: !0,
                    validate: function(e) {
                        var n = {},
                            t = e.toJS(),
                            r = t.name,
                            o = t.score,
                            i = t.content;
                        return o || (n.score = te("Ecommerce|Rate this product")), r || (n.name = te("Ecommerce|Name is required")), i || (n.content = te("Ecommerce|Comment is required")), n
                    },
                    shouldValidate: function() {
                        return !0
                    }
                })(re))
        },
        690423: function(e, n, t) {
            (n = t(923645)(!1)).push([e.id, ".product-reviews-dialog .s-kit-modal-content {\n  width: 500px;\n}\n.product-reviews-dialog .product-info-panel {\n  color: #636972;\n  font-size: 14px;\n  text-align: center;\n}\n.product-reviews-dialog .product-img {\n  width: 60px;\n  height: 60px;\n  border-radius: 6%;\n  margin: 30px auto 20px;\n  background-size: cover;\n  background-position: center;\n}\n.product-reviews-dialog .product-name {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.product-reviews-dialog .product-variations {\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n.product-reviews-dialog .product-variations .line {\n  height: 12px;\n  width: 1px;\n  margin: 0 10px;\n  margin-right: 10px;\n  display: inline-block;\n  background-color: #a9aeb2;\n}\n.product-reviews-dialog .product-rate {\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n.product-reviews-dialog .product-rate .rate-label.error {\n  color: #E64751;\n}\n.product-reviews-dialog .product-rate .score-star {\n  margin-top: 10px;\n  display: inline-block;\n}\n.product-reviews-dialog .product-rate .star-icon {\n  cursor: pointer;\n  font-size: 30px;\n  margin-right: 10px;\n  color: #E2E4E7;\n}\n.product-reviews-dialog .product-rate .star-icon.selected {\n  color: #F3C735;\n}\n.product-reviews-dialog .product-reviews-form .input-section input {\n  width: 100%;\n  height: 38px;\n}\n.product-reviews-dialog .product-reviews-form .textarea-section textarea {\n  width: 100%;\n  resize: none;\n  height: 120px;\n  margin-top: 20px;\n}\n.product-reviews-dialog .product-reviews-form .textarea-section .count {\n  margin-top: 4px;\n  font-size: 13px;\n  text-align: right;\n  color: #a9aeb2;\n}\n.product-reviews-dialog .gdpr-container {\n  width: 100%;\n  margin-top: 10px;\n  text-align: left;\n  display: inline-table;\n}\n.product-reviews-dialog .gdpr-container .review-checkbox {\n  cursor: pointer;\n  margin-right: 6px;\n}\n.product-reviews-dialog .gdpr-container .s-terms-link {\n  color: #1bb0e6;\n  cursor: pointer;\n  display: inline-block;\n}\n.product-reviews-dialog .gdpr-container .gdpr-text {\n  text-align: left;\n}\n.product-reviews-dialog .submit-btn {\n  width: 100%;\n}\n.product-reviews-dialog .form-field-error {\n  color: #E64751;\n  margin-top: 6px;\n  line-height: 1.2;\n  text-align: left;\n}\n.product-review-success-dialog .review-success-panel {\n  text-align: center;\n}\n.product-review-success-dialog .review-success-panel .success-icon {\n  color: #93b719;\n  font-size: 32px;\n  margin-top: 40px;\n}\n.product-review-success-dialog .review-success-panel .review-title {\n  color: #636972;\n  font-size: 18px;\n  margin-top: 20px;\n  font-weight: bold;\n}\n.product-review-success-dialog .review-success-panel .review-text {\n  margin: 10px 0 20px 0;\n}\n.product-review-success-dialog .review-success-panel .back-btn {\n  width: 100%;\n  display: none;\n}\n.product-review-failure-dialog .s-kit-modal-content {\n  width: 470px;\n}\n.product-review-failure-dialog .message-icon {\n  width: 40px;\n  height: auto;\n}\n.product-review-failure-dialog .review-failure-panel {\n  margin-top: 40px;\n  text-align: center;\n}\n.product-review-failure-dialog .error-message {\n  margin: 14px 0;\n}\n@media screen and (max-width: 500px) {\n  .product-review-dialog-wrapper .s-kit-modal-content {\n    padding-top: 10vh;\n  }\n  .product-review-dialog-wrapper .s-kit-modal-content .s-kit-modal-close {\n    top: 60px;\n  }\n  .product-reviews-dialog .s-kit-modal-content,\n  .product-review-success-dialog .s-kit-modal-content,\n  .product-review-failure-dialog .s-kit-modal-content {\n    height: 100vh;\n    width: 100vw;\n    border-radius: 0;\n    box-sizing: border-box;\n  }\n  .product-reviews-dialog .s-kit-modal-content .s-kit-modal-body,\n  .product-review-success-dialog .s-kit-modal-content .s-kit-modal-body,\n  .product-review-failure-dialog .s-kit-modal-content .s-kit-modal-body {\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .product-review-success-dialog {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .product-review-success-dialog .review-success-panel {\n    margin-top: 24vh;\n  }\n  .product-review-success-dialog .review-success-panel .back-btn {\n    display: block;\n  }\n  .product-review-failure-dialog .review-failure-panel {\n    margin-top: 26vh;\n  }\n}\n", ""]), e.exports = n
        }
    }
]);