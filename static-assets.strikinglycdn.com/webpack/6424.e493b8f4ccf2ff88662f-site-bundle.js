/*! For license information please see 6424.e493b8f4ccf2ff88662f-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo = self.webpackChunkbobcat_monorepo || []).push([
    [6424, 1633], {
        794871: function(e, t, a) {
            "use strict";
            a.d(t, {
                KM: function() {
                    return o
                },
                ij: function() {
                    return i
                },
                sv: function() {
                    return l
                }
            });
            var n = a(369082),
                o = (new n.V_("sites"), new n.V_("publishState"), new n.V_("publishSettings"), new n.V_("formResponses"), new n.V_("FeatureSite", {
                    idAttribute: "pageId"
                }), new n.V_("orders")),
                i = new n.V_("groupbuyOrders", {
                    idAttribute: "groupbuyReadableNumber"
                }),
                l = (new n.V_("donationOrders"), new n.V_("comments")),
                r = (new n.V_("siteMember"), new n.V_("components"), new n.V_("entities"), new n.V_("emails")),
                s = new n.V_("domains");
            new n.V_("miniprograms", {
                idAttribute: "siteId"
            }), s.define({
                emails: (0, n.CT)(r)
            })
        },
        678097: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(573126),
                o = a(863056),
                i = (a(678580), a(25843), a(620116), a(778914), a(2991), a(432366), a(977766), a(66992), a(241539), a(788674), a(978783), a(333948), a(569600), a(974916), a(804723), a(115306), a(323123), a(366757)),
                l = a.n(i),
                r = a(45697),
                s = a.n(r),
                u = (a(223336), a(914578)),
                d = a.n(u),
                c = a(399069),
                f = a.n(c),
                m = a(230139),
                g = a.n(m),
                p = a(285072),
                h = a.n(p),
                v = a(234584),
                y = a.n(v),
                b = a(183123),
                _ = a.n(b),
                C = (a(79752), a(666514)),
                N = a.n(C),
                w = a(731246),
                x = a.n(w),
                k = a(802089),
                E = a.n(k),
                L = a(692381),
                S = a.n(L),
                B = a(916784),
                T = a.n(B),
                P = a(479377),
                I = a(884920),
                O = (a(381633), a(94896), {
                    "Blog.Text": "RichText",
                    "Blog.Title": "RichText",
                    "Blog.Image": "Image",
                    "Blog.Video": "Video",
                    "Blog.Button": "Button",
                    "Blog.Separator": "Separator"
                }),
                M = {
                    displayName: "BlockComponentItem",
                    mixins: [g()("editor"), h()],
                    bobcatPropTypes: {
                        data: {
                            binding: s().object
                        },
                        designer: {
                            isBlog: s().bool,
                            themeFeature: s().object,
                            empty: s().bool,
                            index: s().number,
                            columnsNum: s().number,
                            needToShowInsertBar: s().bool,
                            initialOpen: s().bool,
                            insertBarHeight: s().string,
                            _isNewItem: s().string,
                            isLastItem: s().bool,
                            isFirstItem: s().bool,
                            isHiddenSection: s().bool,
                            isNewBlogEditor: s().bool
                        },
                        callbacks: {
                            insertItem: s().func,
                            deleteItem: s().func,
                            updateInsertBarHeight: s().func,
                            onClickCb: s().func
                        }
                    },
                    observedProps: ["needToShowInsertBar", "columnsNum", "insertBarHeight", "shouldAutoFocus", "shouldAutoFocusType"],
                    componentWillMount: function() {
                        this.props.empty || this.initMeta({
                            controlState: "normal"
                        }), this.setState({
                            isHoverThis: !1,
                            isHoverEditColumns: !1,
                            isHoverInsertBar: !1,
                            isEditingColumn: !1,
                            isEditingChild: !1,
                            shouldShowMoveOverlay: !1,
                            shouldShowDeleteOverlay: !1
                        })
                    },
                    componentDidUpdate: function(e) {
                        this.props.empty || e.index === this.props.index || this.initMeta({
                            controlState: "normal"
                        })
                    },
                    componentDidMount: function() {},
                    _renderSingleComponent: function(e) {
                        var t = e.get("type"),
                            a = O[t] || t,
                            i = this.props,
                            r = (i.eagerLoad, i.isBlog),
                            s = i.onClickCb;
                        switch (a) {
                            case "Separator":
                            case "Blog.Separator":
                                return (0, o.Z)(x(), {
                                    onClick: s
                                });
                            case "Blog.Quote":
                                return l().createElement(E(), f().get("RichText").buildBobcatProps(e))
                        }
                        var u = f().get(a),
                            d = u.buildBobcatProps ? u.buildBobcatProps(e) : {};
                        if (r && "RichText" === a) {
                            switch (t) {
                                case "Blog.Text":
                                    d.textType = "body";
                                    break;
                                case "Blog.Title":
                                    d.textType = "heading"
                            }
                            d.shouldAutoFocus = this.props.shouldFocusPosition === this.props.index, d.checkParagraph = this._checkParagraph, d.mergeTextBoxesCallback = this.props.mergeTextBoxesCallback
                        }
                        switch (t) {
                            case "Blog.Video":
                            case "Video":
                                d.needToAdjustHeight = !0;
                                break;
                            case "Image":
                                d.assetType = "background"
                        }
                        return this.getDefaultBinding().get("_isNewItem") && (d.initialEditState = "editor", this.getDefaultBinding().set("_isNewItem", !1)), d.isBlogMiniProgram = _().getIsBlogMiniProgram(), l().createElement(u, (0, n.Z)({}, d, (0, I.getReduxComponentProps)(e), {
                            type: a,
                            eagerLoad: !0,
                            ref: "itemDOM"
                        }))
                    },
                    _renderItemByTemplate: function() {
                        var e = this.getDefaultBinding().get("name"),
                            t = null,
                            a = this.props,
                            n = a.nestDepth,
                            o = a.eagerLoad,
                            i = this.setEditingChild,
                            l = this.unsetEditingChild;
                        return P.default[e] && (t = P.default[e](this.getDefaultBinding().sub("components"), {
                            nestDepth: n,
                            setEditingChild: i,
                            unsetEditingChild: l,
                            eagerLoad: o
                        })), t
                    },
                    _renderBlogItem: function() {
                        return (0, o.Z)("div", {
                            className: "container"
                        }, void 0, (0, o.Z)("div", {
                            className: "sixteen columns"
                        }, void 0, this.props.empty ? null : (0, o.Z)("div", {
                            className: "s-blog-section-inner"
                        }, void 0, this.isEditMode() ? this._renderControlButtonsController() : null, this._renderSingleComponent(this.props.isNewBlogEditor ? this.getDefaultBinding() : this.getDefaultBinding().sub("component"))), this.isEditMode() && !this.props.isNewBlogEditor ? this._renderInsertBarController() : null))
                    },
                    _renderContent: function() {
                        var e = this.props.connectDragPreview,
                            t = this.getDefaultBinding(),
                            a = t.get("type");
                        if (!t.get("name") && !a) return null;
                        var n = "BlockComponentItem" === a ? this._renderItemByTemplate() : this._renderSingleComponent(this.getDefaultBinding());
                        return e ? e((0, o.Z)("div", {}, void 0, n)) : n
                    },
                    _renderNormalItem: function() {
                        var e, t = "";
                        if (!this.props.empty) {
                            var a = this.getDefaultBinding().get("type"),
                                n = this.getDefaultBinding().get("name") || "";
                            if (!this.props.isColumnBlock && !this.props.isRowBlock && (t = N().getBlockItemClassName(n, this.props.columnsNum), this.props.themeFeature)) {
                                var i = N().getClassByThemeFeature(this.props.themeFeature, n || a);
                                i && (t = i)
                            }
                        }
                        return e = {
                            position: "relative"
                        }, (0, o.Z)(S(), {}, void 0, (0, o.Z)(T(), {}, void 0, (0, o.Z)("div", {
                            className: "s-block-item-inner clearfix",
                            style: {
                                position: "relative"
                            },
                            onMouseEnter: this.setHoverState,
                            onMouseLeave: this.unsetHoverState
                        }, void 0, this.props.empty ? null : (0, o.Z)("div", {
                            className: t
                        }, void 0, this.isEditMode() ? this._renderOutline() : null, this.isEditMode() ? this._renderOverlayController() : null, this.isEditMode() ? this._renderControlButtonsController() : null, this.isEditMode() ? this._renderToolbar() : null, this._renderContent())), this.isEditMode() && this.props.needToShowInsertBar ? (0, o.Z)("div", {
                            className: "",
                            style: e
                        }, void 0, this._renderInsertBarController()) : null))
                    },
                    render: function() {
                        var e = ["s-block-item", "s-repeatable-item"];
                        if (this.props.empty) e.push("empty"), this.props.isColumnBlock && (e.push("s-no-last-row"), e.push("s-more-margin-bottom")), this.props.columnLayout && e.push(N().getClassByLayout(this.props.columnLayout));
                        else switch (e.push("s-block-sortable-item"), this.getDefaultBinding().get("name") && e.push("s-block-".concat(this.getDefaultBinding().get("name"))), this.isEditMode() ? (this.props.isRowBlock && e.push("s-margin-bottom"), (this.state.isEditingColumn || this.state.isHoverEditColumns) && e.push("myo-column-outline-visible")) : (this.props.isRowBlock && (e.push("s-no-last-row"), this.props.isFirstItem && e.push("alpha"), this.props.isLastItem && e.push("omega")), this.props.columnLayout && e.push(N().getClassByLayout(this.props.columnLayout))), this._getControlState()) {
                            case "move":
                                e.push("visible");
                                break;
                            case "delete":
                                e.push("visible warning")
                        }
                        if (this.props.isBlog) e.push("s-blog-post-section");
                        else if (this.props.empty) "perspective" === y().getTheme().get("name") && e.push("s-persp-column");
                        else if (this.isEditMode() || this.props.isColumnBlock || this.props.isRowBlock || e.push(N().getAddtionalWrapperClass(this.getDefaultBinding().get("name") || this.getDefaultBinding().get("type"), this.props.columnsNum)), this.props.nestDepth > 1) {
                            var t = this.getDefaultBinding().get("type");
                            t && "image" === t.toLowerCase() && e.push("s-block-nestedBlock-image")
                        }
                        this.props.type && e.push(d().kebabCase(this.props.type));
                        var a = null;
                        return this.props.empty ? this.props.empty && this.props.needToShowInsertBar && (a = l().createElement("div", {
                            ref: "root",
                            className: e.join(" ")
                        }, this.props.isBlog ? this._renderBlogItem() : this._renderNormalItem())) : a = l().createElement("div", {
                            ref: "root",
                            className: e.join(" "),
                            "data-sorting-index": this.props.index
                        }, this.props.isBlog ? this._renderBlogItem() : this._renderNormalItem()), a
                    }
                };
            t.default = f().createPageComponent(M)
        },
        559110: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return P
                }
            });
            var n = a(501068),
                o = a.n(n),
                i = a(333938),
                l = a(468420),
                r = a(327344),
                s = a(505281),
                u = a(484441),
                d = a(103020),
                c = a(803362),
                f = a(844845),
                m = a(863056),
                g = a(563109),
                p = a.n(g),
                h = a(366757),
                v = a(2991),
                y = a.n(v),
                b = a(923978),
                _ = a(225405),
                C = a(141655);
            var N, w = function(e) {
                    (0, u.Z)(g, e);
                    var t, n, i = (t = g, n = function() {
                        if ("undefined" == typeof Reflect || !o()) return !1;
                        if (o().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, c.Z)(t);
                        if (n) {
                            var i = (0, c.Z)(this).constructor;
                            e = o()(a, arguments, i)
                        } else e = a.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function g(e) {
                        var t;
                        return (0, l.Z)(this, g), t = i.call(this, e), (0, f.Z)((0, s.Z)(t), "handleOpenBookingPanel", (function() {
                            C.openBookingPanel()
                        })), (0, f.Z)((0, s.Z)(t), "handleOpenConfirmModal", (function(e) {
                            t.setState({
                                eventData: e,
                                isOpenModal: !0
                            })
                        })), (0, f.Z)((0, s.Z)(t), "handleCloseConfirmModal", (function() {
                            t.setState({
                                isOpenModal: !1
                            })
                        })), t.state = {
                            eventData: {},
                            isOpenModal: !1
                        }, t
                    }
                    return (0, r.Z)(g, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                n = t.isOpenModal,
                                o = t.eventData,
                                i = this.props,
                                l = i.bookingEventList,
                                r = i.layoutConfig,
                                s = r && r.get("imageSize") || "m",
                                u = a(452255).getColumnClassNames(s) || {},
                                d = u.imgColumnClassName,
                                c = u.infoColumnClassName;
                            return (0, m.Z)("div", {
                                className: "s-ecommerce-row-view-wrapper booking-event-list-panel"
                            }, void 0, y()(l).call(l, (function(t) {
                                return (0, m.Z)(b.Z, {
                                    eventItem: t,
                                    imgColumnClassName: d,
                                    infoColumnClassName: c,
                                    openConfirmModal: e.handleOpenConfirmModal
                                }, t.id)
                            })), (0, m.Z)(_.Z, {
                                onCloseModal: this.handleCloseConfirmModal,
                                eventData: o,
                                isOpen: n
                            }))
                        }
                    }]), g
                }(h.Component),
                x = a(234584),
                k = a(206814),
                E = (a(786483), a(32386)),
                L = a(621658),
                S = a(353147);
            var B = function() {
                    return null
                },
                T = function(e) {
                    (0, u.Z)(g, e);
                    var t, a, n = (t = g, a = function() {
                        if ("undefined" == typeof Reflect || !o()) return !1;
                        if (o().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, c.Z)(t);
                        if (a) {
                            var i = (0, c.Z)(this).constructor;
                            e = o()(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function g(e) {
                        var t;
                        return (0, l.Z)(this, g), t = n.call(this, e), (0, f.Z)((0, s.Z)(t), "fetchBookingEventList", (0, i.Z)(p().mark((function e() {
                            var a, n, o;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = x.getId(), e.next = 3, (0, k.sB)(a);
                                    case 3:
                                        n = e.sent, o = n.list, t.setState({
                                            eventList: o
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), (0, f.Z)((0, s.Z)(t), "handleOpenBookingPanel", (function() {
                            if ("editor" === E.getRole()) return window.alert(S("Editor|This action is blocked for now. Please contact your site owner to grant you permission to publish site changes."));
                            C.openBookingPanel()
                        })), (0, f.Z)((0, s.Z)(t), "getBookingOverlayText", (function() {
                            var e = t.state.eventList;
                            return 1 === e.length ? S("Editor|Manage Event") : e.length > 1 ? S("Editor|Manage Events") : S("Editor|Add Events")
                        })), t.state = {
                            eventList: x.getBookingEventTypes() || []
                        }, t
                    }
                    return (0, r.Z)(g, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.eventList,
                                t = this.props.layoutConfig;
                            return this.getBookingOverlayText(), (0, m.Z)("div", {
                                className: "s-component s-ecommerce"
                            }, void 0, (0, m.Z)("div", {
                                className: "s-ecommerce-content"
                            }, void 0, (0, m.Z)("div", {
                                className: "s-ecommerce-wrapper"
                            }, void 0, (0, m.Z)("div", {
                                className: "s-ecommerce-products-wrapper"
                            }, void 0, !1, e.length > 0 ? (0, m.Z)(w, {
                                layoutConfig: t,
                                bookingEventList: e
                            }) : N || (N = (0, m.Z)(B, {}))))))
                        }
                    }]), g
                }(h.Component),
                P = (0, L.Z)()(T)
        },
        312886: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return y
                }
            });
            var n = a(501068),
                o = a.n(n),
                i = a(863056),
                l = a(468420),
                r = a(327344),
                s = a(484441),
                u = a(103020),
                d = a(803362),
                c = a(2991),
                f = a.n(c),
                m = a(366757),
                g = a(914578),
                p = a(294184),
                h = a.n(p);

            function v(e, t, a, n) {
                return a <= e && n <= t
            }
            var y = function(e) {
                (0, s.Z)(c, e);
                var t, a, n = (t = c, a = function() {
                    if ("undefined" == typeof Reflect || !o()) return !1;
                    if (o().sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = (0, d.Z)(t);
                    if (a) {
                        var i = (0, d.Z)(this).constructor;
                        e = o()(n, arguments, i)
                    } else e = n.apply(this, arguments);
                    return (0, u.Z)(this, e)
                });

                function c(e) {
                    var t;
                    return (0, l.Z)(this, c), (t = n.call(this, e)).state = {
                        previewRows: null,
                        previewColumns: null
                    }, t
                }
                return (0, r.Z)(c, [{
                    key: "_isInPreviewSelection",
                    value: function(e, t) {
                        return !!this._hasPreview() && v(this.state.previewRows, this.state.previewColumns, e, t)
                    }
                }, {
                    key: "_isInSelection",
                    value: function(e, t) {
                        return v(this.props.selectedRows, this.props.selectedColumns, e, t)
                    }
                }, {
                    key: "_isSelectedSize",
                    value: function(e, t) {
                        return e === this.props.selectedRows && t === this.props.selectedColumns
                    }
                }, {
                    key: "_isPreviewSize",
                    value: function(e, t) {
                        return e === this.state.previewRows && t === this.state.previewColumns
                    }
                }, {
                    key: "_hasPreview",
                    value: function() {
                        return null !== this.state.previewRows && null !== this.state.previewColumns
                    }
                }, {
                    key: "_renderRow",
                    value: function(e) {
                        var t, a = this,
                            n = this.props.maxColumns,
                            o = f()(t = g.range(1, n + 1)).call(t, (function(t) {
                                return a._renderCell(e, t)
                            }));
                        return (0, i.Z)("tr", {}, e, o)
                    }
                }, {
                    key: "_renderCell",
                    value: function(e, t) {
                        var a, n = this,
                            o = this._hasPreview(),
                            l = 1 === e && 1 === t;
                        a = o ? this.state.previewRows + "×" + this.state.previewColumns : this.props.selectedRows + "×" + this.props.selectedColumns;
                        var r = h()("s-grid-size-selector-cell", {
                            "_in-selection": this._isInSelection(e, t),
                            "_in-preview": this._isInPreviewSelection(e, t)
                        });
                        return (0, i.Z)("td", {
                            onMouseEnter: function() {
                                return n.setState({
                                    previewColumns: t,
                                    previewRows: e
                                })
                            },
                            onMouseLeave: function() {
                                return n.setState({
                                    previewColumns: null,
                                    previewRows: null
                                })
                            },
                            onClick: function() {
                                return n.props.onSelect(e, t)
                            },
                            className: r
                        }, e + "-" + t, l ? a : null)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this,
                            a = this.props.maxRows,
                            n = f()(e = g.range(1, a + 1)).call(e, (function(e) {
                                return t._renderRow(e)
                            })),
                            o = h()("s-grid-size-selector", {
                                "_has-preview": this._hasPreview()
                            });
                        return (0, i.Z)("table", {
                            className: "".concat(o, " s-layout-menu-field")
                        }, void 0, (0, i.Z)("tbody", {}, void 0, n))
                    }
                }]), c
            }(m.Component)
        },
        791409: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(501068),
                o = a.n(n),
                i = a(573126),
                l = a(863056),
                r = a(679349),
                s = a(468420),
                u = a(327344),
                d = a(505281),
                c = a(484441),
                f = a(103020),
                m = a(803362),
                g = a(844845),
                p = a(977766),
                h = a.n(p),
                v = a(344494),
                y = a.n(v),
                b = a(778914),
                _ = a.n(b),
                C = a(981643),
                N = a.n(C),
                w = a(2991),
                x = a.n(w),
                k = a(54103),
                E = a.n(k),
                L = a(366757),
                S = a(459800),
                B = a(914578),
                T = a(294184),
                P = a.n(T),
                I = a(223336),
                O = a(241093),
                M = a(818166),
                D = a(234584),
                R = a(124218),
                A = a(589499),
                U = a(625675),
                H = a(143268),
                F = a(691043),
                V = a(629869),
                Z = a(837337),
                z = a(370917),
                K = a(353147);
            var W = function(e, t) {
                    var a, n = 2 * e,
                        o = n - n / t;
                    return h()(a = "calc(".concat({
                        1: "100%",
                        2: "50%",
                        3: "33.33%",
                        4: "25%"
                    }[t], " - ")).call(a, o, "px)")
                },
                j = (0, Z.default)("div", {
                    target: "css-8pydxo0"
                })(".image-wrapper{background:url(", (function(e) {
                    return e.thumbnail
                }), ");}.s-component-content{padding-bottom:", (function(e) {
                    return e.imageShape
                }), ";}&.s-new-gallery-grid-item{padding:", (function(e) {
                    return e.spacing
                }), "px;padding-left:", (function(e) {
                    return e.isRtlLayout ? "".concat(2 * e.spacing, "px") : "unset"
                }), ";padding-right:", (function(e) {
                    return e.isRtlLayout ? "unset" : "".concat(2 * e.spacing, "px")
                }), ";", (function(e) {
                    return (0, z.css)("&:nth-child(", e.columnsNum, "n){padding-right:", e.isRtlLayout ? "unset" : "0px", ";padding-left:", e.isRtlLayout ? "0px" : "unset", ";}width:", W(e.spacing, e.columnsNum), ";@media (max-width:728px){width:100%;}")
                }), "}&.s-new-gallery-tiled-item{width:100%;padding:", (function(e) {
                    return e.spacing
                }), "px 0px;}"),
                G = (0, Z.default)("div", {
                    target: "css-8pydxo1"
                })("padding-right:", (function(e) {
                    return 2 * e.spacing
                }), "px;", (function(e) {
                    return (0, z.css)("&:nth-child(", e.columnsNum, "n){padding-right:0px;}width:", W(e.spacing, e.columnsNum), ";@media (max-width:728px){width:100%;}")
                })),
                Y = {
                    1: "one",
                    2: "two",
                    3: "three",
                    4: "four"
                },
                q = {
                    large: 30,
                    small: 10,
                    none: 0
                },
                J = function(e) {
                    (0, c.Z)(v, e);
                    var t, n, p = (t = v, n = function() {
                        if ("undefined" == typeof Reflect || !o()) return !1;
                        if (o().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, m.Z)(t);
                        if (n) {
                            var i = (0, m.Z)(this).constructor;
                            e = o()(a, arguments, i)
                        } else e = a.apply(this, arguments);
                        return (0, f.Z)(this, e)
                    });

                    function v() {
                        var e, t;
                        (0, s.Z)(this, v);
                        for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
                        return t = p.call.apply(p, h()(e = [this]).call(e, n)), (0, g.Z)((0, d.Z)(t), "_getGalleryItemProps", (function(e) {
                            var t = e.get("id");
                            return {
                                binding: {
                                    default: e
                                },
                                key: t,
                                isNewGalleryItem: !0,
                                link: e.get("link"),
                                layout: "",
                                path: [],
                                dataProps: R[e.get("type")](e),
                                eagerLoad: !0
                            }
                        })), (0, g.Z)((0, d.Z)(t), "_getSources", (function() {
                            var e = t.props.gallery,
                                a = null == e ? void 0 : e.get("sources");
                            return A.setImagesThumbnail(a)
                        })), (0, g.Z)((0, d.Z)(t), "_getTiledSources", (function() {
                            var e = t._getSources(),
                                a = t.props.layout,
                                n = [],
                                o = [],
                                i = a && a.get("columns");
                            return i ? (n.length = i, o.length = i, y()(n).call(n, []), y()(o).call(o, 0), _()(e).call(e, (function(e) {
                                var t, a = N()(o).call(o, Math.min.apply(Math, o));
                                if (-1 !== a) {
                                    var i = e.get("w"),
                                        l = (e.get("h") || 1) / (i || 1) * 100;
                                    o[a] += l;
                                    var s = e.set("renderPercentage", "".concat(l, "%"));
                                    n[a] = h()(t = []).call(t, (0, r.Z)(n[a]), [s])
                                }
                            })), n) : []
                        })), (0, g.Z)((0, d.Z)(t), "_getStyles", (function(e) {
                            var a = t.props.layout,
                                n = null == a ? void 0 : a.get("structure"),
                                o = {
                                    spacing: q,
                                    imageShape: {
                                        square: "100%",
                                        "landscape-4-3": "75%",
                                        "landscape-16-9": "56.25%",
                                        "landscape-4-1": "25%"
                                    },
                                    columns: Y
                                },
                                i = {
                                    columnsNum: null == a ? void 0 : a.get("columns")
                                };
                            return B.forEach(o, (function(e, t) {
                                i[t] = e[null == a ? void 0 : a.get(t)]
                            })), "tiled" === n && (i.columns = "one", i.imageShape = null == e ? void 0 : e.get("renderPercentage")), i
                        })), (0, g.Z)((0, d.Z)(t), "_renderContent", (function() {
                            var e = t._getSources(),
                                a = t.props.layout;
                            if (!e || 0 === e.size) return (0, l.Z)("div", {
                                className: "empty-list s-common-status s-font-body"
                            }, void 0, K("No content."));
                            var n = null == a ? void 0 : a.get("structure");
                            return (0, l.Z)("div", {
                                className: "s-new-gallery-content"
                            }, void 0, "grid" === n ? t._renderGridList() : t._renderTiledList())
                        })), (0, g.Z)((0, d.Z)(t), "_renderGridList", (function() {
                            var e;
                            return null === (e = t._getSources()) || void 0 === e ? void 0 : x()(e).call(e, (function(e, a) {
                                return t._renderItem(e, a)
                            }))
                        })), (0, g.Z)((0, d.Z)(t), "_renderTiledList", (function() {
                            var e = t._getTiledSources(),
                                a = t.props.layout,
                                n = null == a ? void 0 : a.get("spacing"),
                                o = Y[null == e ? void 0 : e.length];
                            return null == e ? void 0 : x()(e).call(e, (function(a) {
                                return (0, l.Z)(G, {
                                    columnsNum: null == e ? void 0 : e.length,
                                    spacing: q[n],
                                    className: "s-new-gallery-tiled-columns ".concat(o)
                                }, void 0, null == a ? void 0 : x()(a).call(a, (function(e, a) {
                                    return t._renderItem(e, a)
                                })))
                            }))
                        })), (0, g.Z)((0, d.Z)(t), "renderItemTitle", (function(e) {
                            var a, n = t.props.layout,
                                o = null == n ? void 0 : n.get("showTitle"),
                                i = null == n ? void 0 : n.get("structure"),
                                r = e.get("link"),
                                s = null == e ? void 0 : e.get("caption"),
                                u = s || "";
                            return o && (u || "tiled" !== i) ? (0, l.Z)("h3", {
                                onClick: E()(a = t._openItemLink).call(a, (0, d.Z)(t), r),
                                className: P()("image-title s-title-group s-item-title s-font-title", {
                                    "hint-text": !s,
                                    "is-link": t._hasLink(r)
                                })
                            }, void 0, (0, l.Z)("span", {}, void 0, u)) : null
                        })), (0, g.Z)((0, d.Z)(t), "_hasLink", (function(e) {
                            return !(null == e || !e.get("checked") || !(null != e && e.get("url") || "section" === (null == e ? void 0 : e.get("type"))))
                        })), (0, g.Z)((0, d.Z)(t), "_getItemLink", (function(e) {
                            var a = null == e ? void 0 : e.get("type"),
                                n = null == e ? void 0 : e.get("url"),
                                o = null == e ? void 0 : e.get("pageId"),
                                i = null == e ? void 0 : e.get("sectionId");
                            if (!t._hasLink(e)) return "";
                            var l = M.getExternalLinkUrl(a, n, o, i);
                            return H.hasProtocol(l) ? l : H.addProtocol(l)
                        })), (0, g.Z)((0, d.Z)(t), "_openItemLink", (function(e) {
                            var a = null == e ? void 0 : e.get("type"),
                                n = t._getItemLink(e);
                            n && ("section" !== a ? window.open(n) : window.location.href = n)
                        })), (0, g.Z)((0, d.Z)(t), "_renderItem", (function(e, a) {
                            var n, o = t._getStyles(e),
                                r = t.props.layout,
                                s = null == r ? void 0 : r.get("structure"),
                                u = D.getIsRtlLayout(),
                                d = function(e) {
                                    return e && "!" !== e ? e : ""
                                },
                                c = "un" === e.get("storage") ? e.get("storageKey") : "";
                            return L.createElement(j, (0, i.Z)({}, o, {
                                isRtlLayout: u,
                                className: h()(n = "s-new-gallery-item s-new-gallery-".concat(s, "-item ")).call(n, o.columns),
                                thumbnail: d(e.get("thumbnail_url")) || d(e.get("url")) || d(c) || d(e.get("thumb_url"))
                            }), L.createElement(F.default, (0, i.Z)({
                                index: a,
                                key: e.get("id"),
                                ItemLink: function() {
                                    var a = e.get("link"),
                                        n = null == a ? void 0 : a.get("type");
                                    return t._hasLink(a) ? (0, l.Z)("a", {
                                        className: "link-cover",
                                        href: t._getItemLink(a),
                                        target: "section" !== n ? "_blank" : "_self"
                                    }) : null
                                },
                                itemLink: t._getItemLink(e.get("link")),
                                caption: e.get("caption"),
                                description: e.get("description")
                            }, t._getGalleryItemProps(e))), t.renderItemTitle(e))
                        })), (0, g.Z)((0, d.Z)(t), "_openGalleryEditorDialog", (function() {
                            var e, a, n, o = t.props,
                                i = o.gallery,
                                l = o.updateGallery,
                                r = o.editStateHook;
                            null != i && i.get("id") && r("focus", null == i ? void 0 : i.get("id"));
                            var s = {
                                gallery: i,
                                updateGallery: l,
                                closeCallback: function() {
                                    null != i && i.get("id") && r("defocus", null == i ? void 0 : i.get("id"))
                                }
                            };
                            null === (e = t.props) || void 0 === e || e.openGalleryEditorDialog(s), null === (a = window) || void 0 === a || null === (n = a.analytics) || void 0 === n || n.track("Editor - Gallery - Click Manage", {
                                siteId: D.getId(),
                                userId: D.getUserId()
                            })
                        })), t
                    }
                    return (0, u.Z)(v, [{
                        key: "componentDidMount",
                        value: function() {
                            this._enableFancyBox()
                        }
                    }, {
                        key: "_enableFancyBox",
                        value: function() {
                            var e = this;
                            return a.e(1626).then(function() {
                                var t, n = a(791626).Fancybox,
                                    o = O.GALLERY(I(e.refs.galleryListDOM)),
                                    i = null === (t = I(o[0])) || void 0 === t ? void 0 : t.attr("data-fancybox");
                                U.transformVideoSrc(I(e.refs.galleryListDOM)), E()(n).call(n, "[data-fancybox=".concat(i, "]"), {
                                    Thumbs: !1,
                                    Carousel: {
                                        Dots: !0
                                    },
                                    Toolbar: {
                                        display: ["zoom", "close"]
                                    }
                                })
                            }.bind(null, a)).catch(a.oe)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return (0, l.Z)("div", {
                                className: "s-component s-component-new-gallery-list"
                            }, void 0, !1, L.createElement("div", {
                                className: "s-gallery s-new-gallery",
                                ref: "galleryListDOM"
                            }, this._renderContent()))
                        }
                    }]), v
                }(L.Component),
                Q = (0, S.connect)((function(e, t) {
                    var a;
                    return {
                        targetId: null === (a = t.gallery) || void 0 === a ? void 0 : a.get("id")
                    }
                }), {
                    openGalleryEditorDialog: function(e) {
                        return (0, V.G3)("newGalleryDialog", e)
                    }
                })(J);
            t.default = Q
        },
        49643: function(e, t, a) {
            "use strict";
            var n = (0, a(837337).default)("div", {
                target: "css-7brd960"
            })("position:relative;font-family:'brandon',sans-serif;font-weight:bold;border-radius:4px;cursor:pointer;text-transform:uppercase;width:100%;margin-right:0;margin-bottom:0px;text-align:center;box-sizing:border-box;font-size:12px;padding:8px 12px;box-shadow:0 1px 1px rgb(0 0 0 / 20%);transition:all 0.15s;text-decoration:none;word-break:keep-all;user-select:none;line-height:1.25;background:#93b719;border-color:#93b719;color:white;border:solid 1px transparent;&:hover{background:#a5cd1c;border-color:#a5cd1c;}&.dark-gray{border-color:#525252;background:#525252;color:#ccc;:hover{background:#5e5e5e;border-color:#5e5e5e;color:#ccc;}}");
            t.Z = n
        },
        379190: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                PureColorPlate: function() {
                    return te
                }
            });
            var n, o, i = a(501068),
                l = a.n(i),
                r = a(83728),
                s = a(573126),
                u = a(863056),
                d = a(468420),
                c = a(327344),
                f = a(505281),
                m = a(484441),
                g = a(103020),
                p = a(803362),
                h = a(844845),
                v = a(977766),
                y = a.n(v),
                b = a(2991),
                _ = a.n(b),
                C = a(497093),
                N = a.n(C),
                w = a(277149),
                x = a.n(w),
                k = a(54103),
                E = a.n(k),
                L = a(51942),
                S = a.n(L),
                B = a(366757),
                T = a(973935),
                P = a(223336),
                I = a(818166),
                O = a(205223),
                M = a(926941),
                D = a(143393),
                R = a(498481),
                A = a(708329),
                U = a(49643),
                H = a(294184),
                F = a.n(H),
                V = a(11945),
                Z = a(837337),
                z = a(353147);

            function K(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !l()) return !1;
                    if (l().sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(l()(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = (0, p.Z)(e);
                    if (t) {
                        var o = (0, p.Z)(this).constructor;
                        a = l()(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return (0, g.Z)(this, a)
                }
            }
            var W = "#ffffff",
                j = "left",
                G = "right",
                Y = 320,
                q = (0, V.getIsEditorRtlLayout)(),
                J = (0, Z.default)("div", {
                    target: "css-11qlbll0"
                })("&.color-picker-wrapper{position:absolute;display:none;width:200px;left:", (function(e) {
                    return e.isLeftPlacement ? e.noPadding ? "-228px" : "-236px" : "initial"
                }), ";right:", (function(e) {
                    return e.isLeftPlacement ? "initial" : e.noPadding ? "-228px" : "-237px"
                }), ";bottom:", (function(e) {
                    return e.wrapperBottom
                }), "px;background:#181818;border-radius:4px;padding:10px;&.visible{display:block;}.color-popover-arrow{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;", (function(e) {
                    return e.isLeftPlacement ? "right: -8px" : "left: -7px;"
                }), "\n      bottom:", (function(e) {
                    return e.arrowBottom
                }), "px;border-left-width:0;border-right-color:#181818;&:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:7px;content:' ';", (function(e) {
                    return e.isLeftPlacement ? "right: 0;" : "left: 0;"
                }), "\n        bottom:-7px;", (function(e) {
                    return e.isLeftPlacement ? "border-right-width: 0;" : "border-left-width: 0;"
                }), "\n        ", (function(e) {
                    return e.isLeftPlacement ? "border-left-color: #181818;" : "border-right-color: #181818;"
                }), "}}}"),
                Q = (0, Z.default)("div", {
                    target: "css-11qlbll1"
                })("&.color-plate-wrapper{position:relative;width:140px;font-family:'open_sans';.color-list{display:flex;flex-flow:wrap;.color-item{width:20px;height:20px;border-radius:50%;margin:4px;cursor:pointer;box-sizing:border-box;&.dark{border:solid 1px #5c6676;}&.selected{border:solid 1px #ffff;}}}button.custom-btn{width:100%;margin-right:0;margin-bottom:0px;text-align:center;box-sizing:border-box;}.item-wrapper{padding:5px;}.setting-default{text-align:center;padding:8px;border:solid 1px;border-radius:4px;font-size:12px;cursor:pointer;border-color:#999;color:#999;font-family:'open_sans';i{color:#999;", q ? "margin-left: 5px;" : "margin-right: 5px;", "}}}"),
                $ = (0, Z.default)("div", {
                    target: "css-11qlbll2"
                })("&.custom_color_btn{border-radius:4px;color:", (function(e) {
                    return e.color ? new M(e.color).getTextColor() : "black"
                }), ";background:", (function(e) {
                    return e.color || "#fff"
                }), ";text-align:center;text-transform:uppercase;padding:8px;box-sizing:border-box;border:solid 1px #fff;cursor:", (function(e) {
                    return e.hideCustom ? "initial" : "pointer"
                }), ";}"),
                X = function(e) {
                    (0, m.Z)(a, e);
                    var t = K(a);

                    function a() {
                        var e, o;
                        (0, d.Z)(this, a);
                        for (var i = arguments.length, l = new Array(i), r = 0; r < i; r++) l[r] = arguments[r];
                        return o = t.call.apply(t, y()(e = [this]).call(e, l)), (0, h.Z)((0, f.Z)(o), "setSelectedColor", (function(e) {
                            o.props.updateUI({
                                selectedColor: e,
                                visiblePopover: !1
                            }), o.props.onChange(e)
                        })), (0, h.Z)((0, f.Z)(o), "setCustomColor", (function(e) {
                            o.props.updateUI({
                                selectedColor: null
                            }), o.props.onChange(e)
                        })), (0, h.Z)((0, f.Z)(o), "resetToDefaultColor", (function() {
                            var e = o.props,
                                t = e.ui.selectedColor,
                                a = e.specifiedDefaultColor;
                            t && o.props.updateUI({
                                selectedColor: null,
                                visiblePopover: !1
                            }), o.props.onChange(a || W)
                        })), (0, h.Z)((0, f.Z)(o), "getColorPickerPlacement", (function(e) {
                            var t, a, n = G,
                                o = (null === (t = P(e)) || void 0 === t || null === (a = t.offset()) || void 0 === a ? void 0 : a.left) || 0;
                            return window.innerWidth - o < Y && (n = j), q && o > Y && (n = j), n
                        })), (0, h.Z)((0, f.Z)(o), "togglePopover", (function() {
                            var e = o.props,
                                t = e.hideCustom,
                                a = e.ui.visiblePopover,
                                n = T.findDOMNode((0, f.Z)(o));
                            if (!t) {
                                var i = o.getColorPickerPlacement(n);
                                o.props.updateUI({
                                    colorPickerPlacement: i,
                                    visiblePopover: !a
                                })
                            }
                        })), (0, h.Z)((0, f.Z)(o), "hidePopover", (function() {
                            o.props.updateUI({
                                visiblePopover: !1
                            })
                        })), (0, h.Z)((0, f.Z)(o), "getColorPickerBottom", (function() {
                            var e = T.findDOMNode((0, f.Z)(o)),
                                t = -140,
                                a = 160;
                            if (e) {
                                var n = document.documentElement.clientHeight + document.documentElement.scrollTop - P(e).offset().top - P(e).height(),
                                    i = t + n;
                                t = Math.max(-n, t), a = Math.min(a + i, a)
                            }
                            return {
                                wrapperBottom: t,
                                arrowBottom: a
                            }
                        })), (0, h.Z)((0, f.Z)(o), "renderColorPicker", (function() {
                            var e = o.props,
                                t = e.ui,
                                a = t.visiblePopover,
                                i = t.colorPickerPlacement,
                                l = e.isPure,
                                r = e.noPadding,
                                d = o.getColorPickerBottom(),
                                c = d.wrapperBottom,
                                f = d.arrowBottom;
                            return (0, u.Z)(J, {
                                className: F()("color-picker-wrapper", {
                                    visible: a
                                }),
                                isLeftPlacement: i === j,
                                wrapperBottom: c,
                                arrowBottom: f,
                                noPadding: r
                            }, void 0, n || (n = (0, u.Z)("div", {
                                className: "color-popover-arrow"
                            })), l ? B.createElement(A.YT, (0, s.Z)({}, o.props, {
                                selectNullButtonTitle: z("Editor|Remove"),
                                onChange: o.setCustomColor,
                                buttonClick: o.hidePopover
                            })) : B.createElement(A.ZP, (0, s.Z)({}, o.props, {
                                selectNullButtonTitle: z("Editor|Remove"),
                                onChange: o.setCustomColor,
                                buttonClick: o.hidePopover
                            })))
                        })), (0, h.Z)((0, f.Z)(o), "getThemeColors", (function(e, t) {
                            var a = new M(e),
                                n = M.getDiffLightnessColors(a.toHsl());
                            return _()(n).call(n, (function(e, a) {
                                return {
                                    value: e,
                                    index: a,
                                    type: t,
                                    dark: a === n.length - 1
                                }
                            }))
                        })), (0, h.Z)((0, f.Z)(o), "getThemeColorItems", (function() {
                            var e, t, a = o.props.customColors,
                                n = a.highlight1,
                                i = a.highlight2;
                            D.isImmutable(a) && (n = a.get("highlight1"), i = a.get("highlight2"));
                            var l = n ? N()(e = o.getThemeColors(n, "highlight1")).call(e) : [],
                                r = i ? N()(t = o.getThemeColors(i, "highlight2")).call(t) : [];
                            return r.length && x()(l).call(l, (function(e, t) {
                                return M.isSameByDistance(e.value, r[t].value)
                            })) ? l : y()(l).call(l, r)
                        })), (0, h.Z)((0, f.Z)(o), "getColorList", (function() {
                            var e = o.props,
                                t = e.defaultColors,
                                a = void 0 === t ? [] : t,
                                n = [];
                            return e.needThemColors && (n = o.getThemeColorItems()), y()(n).call(n, a)
                        })), (0, h.Z)((0, f.Z)(o), "renderColorList", (function() {
                            var e = o.props.ui.selectedColor,
                                t = o.getColorList();
                            return (0, u.Z)("div", {
                                className: "color-list"
                            }, void 0, _()(t).call(t, (function(t, a) {
                                var n, i = "string" == typeof t ? t : t.value;
                                return (0, u.Z)("div", {
                                    className: F()("color-item", {
                                        selected: i === e,
                                        dark: null == t ? void 0 : t.dark
                                    }),
                                    style: {
                                        background: i
                                    },
                                    onClick: E()(n = o.setSelectedColor).call(n, (0, f.Z)(o), i)
                                }, "color_item_".concat(a))
                            })))
                        })), o
                    }
                    return (0, c.Z)(a, [{
                        key: "componentWillMount",
                        value: function() {
                            this.props.updateUI({
                                selectedColor: this.props.usedColor,
                                colorPickerPlacement: G
                            })
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            !e.ui.isVisible && this.props.ui.isVisible && this.props.updateUI({
                                visiblePopover: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.usedColor,
                                n = t.hideCustom,
                                i = !x()(e = this.getColorList()).call(e, (function(e) {
                                    var t = "string" == typeof e ? e : e.value;
                                    return a === t
                                })) || n,
                                l = W;
                            try {
                                l = a && new M(a).toHex()
                            } catch (e) {}
                            return (0, u.Z)(Q, {
                                className: "color-plate-wrapper"
                            }, void 0, (0, u.Z)("div", {
                                className: "item-wrapper"
                            }, void 0, (0, u.Z)("div", {
                                className: "setting-default",
                                onClick: this.resetToDefaultColor
                            }, void 0, o || (o = (0, u.Z)("i", {
                                className: "entypo-block"
                            })), z("Editor|Use Default"))), this.renderColorList(), !n && (0, u.Z)("div", {
                                className: "item-wrapper"
                            }, void 0, i ? (0, u.Z)($, {
                                className: "custom_color_btn",
                                color: l,
                                hideCustom: n,
                                onClick: this.togglePopover
                            }, void 0, l) : (0, u.Z)(U.Z, {
                                className: "dark-bg dark-gray custom-btn",
                                size: "small",
                                onClick: this.togglePopover
                            }, void 0, z("Editor|Custom"))), !n && this.renderColorPicker())
                        }
                    }]), a
                }(B.PureComponent),
                ee = O((0, R.default)({
                    state: {
                        hexInputValue: "",
                        selectedColor: null,
                        visiblePopover: !1,
                        colorPickerPlacement: G
                    }
                })(X), (function() {
                    return [I.getCustomColors()]
                }), (function(e) {
                    return {
                        customColors: (0, r.Z)(e, 1)[0]
                    }
                })),
                te = function(e) {
                    (0, m.Z)(a, e);
                    var t = K(a);

                    function a(e) {
                        var n;
                        return (0, d.Z)(this, a), n = t.call(this, e), (0, h.Z)((0, f.Z)(n), "updateUIHandler", (function(e) {
                            n.setState(S()({}, n.state, e))
                        })), n.state = {
                            selectedColor: null,
                            visiblePopover: !1,
                            colorPickerPlacement: G
                        }, n
                    }
                    return (0, c.Z)(a, [{
                        key: "render",
                        value: function() {
                            return B.createElement(X, (0, s.Z)({}, this.props, {
                                ui: this.state,
                                isPure: !0,
                                updateUI: this.updateUIHandler
                            }))
                        }
                    }]), a
                }(B.Component);
            t.default = ee
        },
        708329: function(e, t, a) {
            "use strict";
            a.d(t, {
                YT: function() {
                    return G
                }
            });
            var n, o, i, l = a(501068),
                r = a.n(l),
                s = a(83728),
                u = a(468420),
                d = a(327344),
                c = a(505281),
                f = a(484441),
                m = a(103020),
                g = a(803362),
                p = a(844845),
                h = a(863056),
                v = a(573126),
                y = a(2991),
                b = a.n(y),
                _ = a(977766),
                C = a.n(_),
                N = a(51942),
                w = a.n(N),
                x = a(366757),
                k = a(818166),
                E = a(205223),
                L = a(926941),
                S = a(498481),
                B = a(998475),
                T = a(1150),
                P = a(49643),
                I = a(11945),
                O = a(837337),
                M = a(353147);

            function D(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !r()) return !1;
                    if (r().sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(r()(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = (0, g.Z)(e);
                    if (t) {
                        var o = (0, g.Z)(this).constructor;
                        a = r()(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return (0, m.Z)(this, a)
                }
            }
            var R = (0, I.getIsEditorRtlLayout)(),
                A = (0, O.default)("div", {
                    target: "css-19nvig60"
                })("&.react_color_div{display:flex;width:100%;}"),
                U = (0, O.default)("div", {
                    target: "css-19nvig61"
                })("&.saturation_wrapper{position:relative;width:86%;height:170px;}"),
                H = (0, O.default)("div", {
                    target: "css-19nvig62"
                })("&.hue_wrapper_div{position:relative;width:14%;}"),
                F = (0, B.iS)((function(e) {
                    return (0, h.Z)(A, {
                        className: "react_color_div"
                    }, void 0, (0, h.Z)(H, {
                        className: "hue_wrapper_div"
                    }, void 0, x.createElement(T.PS, (0, v.Z)({}, e, {
                        direction: "vertical",
                        height: 100,
                        width: 20
                    }))), (0, h.Z)(U, {
                        className: "saturation_wrapper"
                    }, void 0, x.createElement(T.OQ, e)))
                })),
                V = (0, O.default)("div", {
                    target: "css-19nvig63"
                })("&.color_picker_wrapper{width:100%;padding:0;overflow:hidden;background:transparent;box-shadow:none;&:before{display:none;}.bottom-control{display:flex;justify-content:space-between;align-items:center;input[type='text']{width:50%;height:36px;border:none;border-radius:unset;text-indent:10px;}}}"),
                Z = (0, O.default)("a", {
                    target: "css-19nvig64"
                })("&.change-btn{display:flex;justify-content:center;color:white;opacity:0.5;cursor:pointer;width:50%;text-align:center;&:hover{opacity:0.8;}& i{display:inline-block;width:12px;height:12px;", R ? "margin-left: 4px;" : "margin-right: 4px;", "\n      float:left;}}"),
                z = (0, O.default)("div", {
                    target: "css-19nvig65"
                })("&.out_wrapper{.colors-pick-content{position:relative;margin-bottom:10px;border:solid 2px;border-radius:6px;border-color:#5c6676;}button.confirm-btn{width:100%;margin-right:0;margin-bottom:0px;text-align:center;box-sizing:border-box;}}"),
                K = b()(n = [.5, 1]).call(n, (function(e) {
                    var t;
                    return {
                        value: e,
                        label: C()(t = "".concat(100 * e, "% ")).call(t, M("Editor|Opacity"))
                    }
                })),
                W = function(e) {
                    (0, f.Z)(a, e);
                    var t = D(a);

                    function a() {
                        var e, n;
                        (0, u.Z)(this, a);
                        for (var l = arguments.length, r = new Array(l), s = 0; s < l; s++) r[s] = arguments[s];
                        return n = t.call.apply(t, C()(e = [this]).call(e, r)), (0, p.Z)((0, c.Z)(n), "renderColorPicker", (function() {
                            var e = n.props,
                                t = e.editOpacity,
                                a = e.hideDefaultColor,
                                l = e.ui.hexInputValue,
                                r = e.selectNullButtonTitle,
                                s = n.getCurrentColorObject();
                            return (0, h.Z)(V, {
                                className: "s-tooltip-dialog active color_picker_wrapper"
                            }, void 0, (0, h.Z)(F, {
                                color: s.toHex(),
                                onChangeComplete: function(e) {
                                    n.updateRgb(e.hex)
                                }
                            }), (0, h.Z)("div", {
                                className: "bottom-control"
                            }, void 0, (0, h.Z)("input", {
                                type: "text",
                                value: l.toUpperCase(),
                                onChange: function(e) {
                                    return n.handleHexInputChange(e)
                                },
                                maxLength: 7
                            }), !a && (0, h.Z)(Z, {
                                className: "change-btn",
                                onClick: function() {
                                    return n.resetToDefaultColor()
                                }
                            }, void 0, o || (o = (0, h.Z)("i", {
                                className: "entypo-block"
                            })), r || M("Editor|Use Default"))), t && (0, h.Z)("div", {
                                className: "s-form-field s-select-container small"
                            }, void 0, (0, h.Z)("select", {
                                onChange: function(e) {
                                    return n.updateAlpha(e.target.value)
                                },
                                value: s.a
                            }, void 0, b()(K).call(K, (function(e) {
                                return (0, h.Z)("option", {
                                    value: e.value
                                }, e.value, e.label)
                            }))), i || (i = (0, h.Z)("i", {
                                className: "entypo-arrow-combo"
                            }))))
                        })), n
                    }
                    return (0, d.Z)(a, [{
                        key: "updateRgb",
                        value: function(e) {
                            var t = this.getCurrentColorObject(),
                                a = new L(e);
                            a.a = t.a, this.props.onChange(a.toRgba()), this.props.updateUI({
                                hexInputValue: a.toHex()
                            })
                        }
                    }, {
                        key: "updateAlpha",
                        value: function(e) {
                            var t = this.getCurrentColorObject();
                            t.a = e, this.props.onChange(t.toRgba())
                        }
                    }, {
                        key: "resetToDefaultColor",
                        value: function() {
                            this.props.onChange(null), this.props.updateUI({
                                hexInputValue: ""
                            })
                        }
                    }, {
                        key: "handleHexInputChange",
                        value: function(e) {
                            var t = e.target.value;
                            this.props.updateUI({
                                hexInputValue: t
                            });
                            var a = "#rrggbb".length;
                            if (t.length === a) {
                                var n = null;
                                try {
                                    n = new L(t)
                                } catch (e) {}
                                n && this.updateRgb(t)
                            }
                        }
                    }, {
                        key: "getCurrentColorObject",
                        value: function() {
                            return new L(this.props.usedColor)
                        }
                    }, {
                        key: "componentWillMount",
                        value: function() {
                            this.props.updateUI({
                                hexInputValue: this.getCurrentColorObject().toHex()
                            })
                        }
                    }, {
                        key: "componentWillUpdate",
                        value: function(e) {
                            (!e.ui.hexInputValue || e.usedColor !== this.props.usedColor) && this.props.updateUI({
                                hexInputValue: new L(e.usedColor).toHex()
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                a = e.buttonClick;
                            return (0, h.Z)(z, {
                                className: "out_wrapper"
                            }, void 0, (0, h.Z)("div", {
                                className: "colors-pick-content"
                            }, void 0, t, this.renderColorPicker()), (0, h.Z)(P.Z, {
                                size: "small",
                                className: "confirm-btn",
                                onClick: a
                            }, void 0, M("Editor|Done")))
                        }
                    }]), a
                }(x.PureComponent),
                j = E((0, S.default)({
                    state: {
                        hexInputValue: ""
                    }
                })(W), (function() {
                    return [k.getCustomColors()]
                }), (function(e) {
                    return {
                        customColors: (0, s.Z)(e, 1)[0]
                    }
                })),
                G = function(e) {
                    (0, f.Z)(a, e);
                    var t = D(a);

                    function a(e) {
                        var n;
                        return (0, u.Z)(this, a), n = t.call(this, e), (0, p.Z)((0, c.Z)(n), "updateUIHandler", (function(e) {
                            n.setState(w()({}, n.state, e))
                        })), n.state = {
                            hexInputValue: ""
                        }, n
                    }
                    return (0, d.Z)(a, [{
                        key: "render",
                        value: function() {
                            return x.createElement(W, (0, v.Z)({}, this.props, {
                                ui: this.state,
                                updateUI: this.updateUIHandler
                            }))
                        }
                    }]), a
                }(x.Component);
            t.ZP = j
        },
        754546: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                BaseColorColorPicker: function() {
                    return H
                },
                BaseColorPopoverButton: function() {
                    return F
                },
                ButtonBackgroundColorColorPicker: function() {
                    return D
                },
                ButtonBackgroundColorPopoverButton: function() {
                    return R
                },
                CoreV2: function() {
                    return J.ZP
                },
                ItemSubtitleColorColorPicker: function() {
                    return G
                },
                ItemSubtitleColorPopoverButton: function() {
                    return Y
                },
                ItemTitleColorColorPicker: function() {
                    return W
                },
                ItemTitleColorPopoverButton: function() {
                    return j
                },
                NavBackgroundColor1ColorPicker: function() {
                    return E
                },
                NavBackgroundColor1PopoverButton: function() {
                    return L
                },
                NavColorsPopoverButton: function() {
                    return q
                },
                NavHighlightColorColorPicker: function() {
                    return T
                },
                NavHighlightColorPopoverButton: function() {
                    return v
                },
                NavItemColorPicker: function() {
                    return S
                },
                NavItemColorPopoverButton: function() {
                    return B
                },
                SubtitleColorColorPicker: function() {
                    return z
                },
                SubtitleColorPopoverButton: function() {
                    return K
                },
                TextHighlightColorColorPicker: function() {
                    return A
                },
                TextHighlightColorPopoverButton: function() {
                    return U
                },
                TitleColorColorPicker: function() {
                    return V
                },
                TitleColorPopoverButton: function() {
                    return Z
                },
                default: function() {
                    return Ee
                }
            });
            var n, o = a(863056),
                i = a(977766),
                l = a.n(i),
                r = a(366757),
                s = a(387937),
                u = a(926941),
                d = a(117847),
                c = a(104802),
                f = a(851172),
                m = a(589499),
                g = a(379190),
                p = a(353147);

            function h(e) {
                var t = e.usedColor;
                if (!t) return n || (n = (0, o.Z)("div", {}, void 0, "Default"));
                var a = new u(t),
                    i = a.luma(),
                    l = a.a;
                return (0, o.Z)("div", {
                    style: {
                        backgroundColor: t,
                        border: "1px solid",
                        borderColor: i < .4 || l < .5 ? "#aaa" : "transparent",
                        width: 30,
                        height: 10,
                        borderRadius: 100
                    }
                })
            }

            function v(e) {
                return null === e.rawColor && e.nullMeansUnderline ? (0, o.Z)("div", {}, void 0, p("Underline")) : h(e)
            }

            function y(e) {
                return function(t) {
                    return s(t, (function(t) {
                        return e(t)
                    }))
                }
            }
            var b = y((function(e) {
                    var t = (0, c.getNavObject)(e);
                    return {
                        usedColor: (0, c.getNavBackgroundColor1)(e),
                        editOpacity: t.supportsNavbarTranslucency(),
                        width: 200,
                        needThemColors: !0
                    }
                })),
                _ = y((function(e) {
                    var t = (0, c.getNavObject)(e);
                    return {
                        usedColor: (0, c.getNavHighlightColor)(e),
                        editOpacity: t.supportsNavbarTranslucency(),
                        rawColor: (0, c.getRawNavHighlightColor)(e),
                        nullMeansUnderline: t.nullHighlightColorMeansUnderline,
                        width: 200,
                        needThemColors: !0
                    }
                })),
                C = y((function(e) {
                    return {
                        backgroundColor: (0, c.getNavBackgroundColor1)(e),
                        itemColor: (0, c.getItemColor)(e),
                        isTransparent: (0, c.getNavIsTransparent)(e)
                    }
                })),
                N = y((function(e) {
                    var t = (0, c.getNavObject)(e);
                    return {
                        usedColor: (0, c.getItemColor)(e),
                        editOpacity: t.supportsNavbarTranslucency(),
                        rawColor: (0, c.getItemColor)(e),
                        width: 200,
                        needThemColors: !0
                    }
                })),
                w = y((function(e) {
                    return {
                        usedColor: (0, f.getUsedButtonBackgroundColor)(e),
                        width: 200,
                        needThemColors: !0
                    }
                })),
                x = y((function(e) {
                    return {
                        usedColor: (0, f.getUsedTextHighlightColor)(e),
                        width: 200,
                        needThemColors: !0
                    }
                })),
                k = function(e) {
                    return y((function(t) {
                        return {
                            usedColor: (0, f.getUsedTextColors)(t)[e],
                            width: 200,
                            needThemColors: !0
                        }
                    }))
                },
                E = b(g.default),
                L = b(h),
                S = N(g.default),
                B = N(h),
                T = _(g.default);
            v = _(v);
            var P, I, O, M, D = w(g.default),
                R = w(h),
                A = x(g.default),
                U = x(h),
                H = k("baseColor")(g.default),
                F = k("baseColor")(h),
                V = k("titleColor")(g.default),
                Z = k("titleColor")(h),
                z = k("subtitleColor")(g.default),
                K = k("subtitleColor")(h),
                W = k("itemTitleColor")(g.default),
                j = k("itemTitleColor")(h),
                G = k("itemSubtitleColor")(g.default),
                Y = k("itemSubtitleColor")(h),
                q = C((function(e) {
                    var t, a = e.backgroundColor,
                        n = e.itemColor,
                        i = e.isTransparent ? (0, o.Z)("span", {
                            className: "transparent-icon"
                        }, void 0, (0, o.Z)("img", {
                            src: (0, m.cdnAssetPath)("".concat(d.U.TRANSPARENT_ICON))
                        })) : (0, o.Z)("div", {
                            className: "color-icon",
                            style: {
                                background: l()(t = "linear-gradient(120deg,  ".concat(n, " 40%, ")).call(t, a, " 0)")
                            }
                        });
                    return (0, o.Z)("div", {
                        className: "colors-icon-wrapper"
                    }, void 0, i)
                })),
                J = a(708329),
                Q = a(83728),
                $ = a(468420),
                X = a(327344),
                ee = a(484441),
                te = a(103020),
                ae = a(803362),
                ne = a(573126),
                oe = a(2991),
                ie = a.n(oe),
                le = a(501068),
                re = a.n(le),
                se = (a(974916), a(115306), a(818166)),
                ue = a(205223),
                de = a(914578),
                ce = a(143393),
                fe = a(498481),
                me = a(998475),
                ge = a(1150),
                pe = a(837337),
                he = a(353147);
            var ve = (0, pe.default)("div", {
                    target: "css-vmgknu0"
                })("display:flex;width:150px;"),
                ye = (0, pe.default)("div", {
                    target: "css-vmgknu1"
                })("position:relative;width:130px;height:130px;"),
                be = (0, pe.default)("div", {
                    target: "css-vmgknu2"
                })("position:relative;height:130px;width:20px;"),
                _e = (0, me.iS)((function(e) {
                    return (0, o.Z)(ve, {}, void 0, (0, o.Z)(be, {}, void 0, r.createElement(ge.PS, (0, ne.Z)({}, e, {
                        direction: "vertical",
                        height: 100,
                        width: 20
                    }))), (0, o.Z)(ye, {}, void 0, r.createElement(ge.OQ, e)))
                })),
                Ce = (0, pe.default)("div", {
                    target: "css-vmgknu3"
                })("width:150px;padding:0;overflow:hidden;background:transparent;box-shadow:none;&:before{display:none;}"),
                Ne = (0, pe.default)("a", {
                    target: "css-vmgknu4"
                })("display:block;margin-bottom:5px;color:white;opacity:0.5;cursor:pointer;float:left;&:hover{opacity:0.8;}& span{display:inline-block;width:12px;height:12px;margin-right:4px;/* // HACK:Image URL from webpack contains double slash in production mode */\n    background:url(", a(702964).replace("webpack//", "webpack/"), ")\n      no-repeat;background-size:100%;float:left;}"),
                we = (0, pe.default)("div", {
                    target: "css-vmgknu5"
                })("float:left;cursor:pointer;padding-left:4px;> div{width:15px;height:15px;background:", (function(e) {
                    return e.color
                }), ";border:1px solid ", (function(e) {
                    return e.color
                }), ";box-sizing:border-box;border-radius:100px;}&:hover{> div{border-color:#eee;}}"),
                xe = ie()(P = [.5, 1]).call(P, (function(e) {
                    var t;
                    return {
                        value: e,
                        label: l()(t = "".concat(100 * e, "% ")).call(t, he("Editor|Opacity"))
                    }
                })),
                ke = function(e) {
                    (0, ee.Z)(i, e);
                    var t, a, n = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !re()) return !1;
                        if (re().sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(re()(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, ae.Z)(t);
                        if (a) {
                            var o = (0, ae.Z)(this).constructor;
                            e = re()(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, te.Z)(this, e)
                    });

                    function i() {
                        return (0, $.Z)(this, i), n.apply(this, arguments)
                    }
                    return (0, X.Z)(i, [{
                        key: "updateRgb",
                        value: function(e) {
                            var t = this.getCurrentColorObject(),
                                a = new u(e);
                            a.a = t.a, this.props.onChange(a.toRgba()), this.props.updateUI({
                                hexInputValue: a.toHex()
                            })
                        }
                    }, {
                        key: "updateAlpha",
                        value: function(e) {
                            var t = this.getCurrentColorObject();
                            t.a = e, this.props.onChange(t.toRgba())
                        }
                    }, {
                        key: "resetToDefaultColor",
                        value: function() {
                            this.props.onChange(null), this.props.updateUI({
                                hexInputValue: ""
                            })
                        }
                    }, {
                        key: "handleHexInputChange",
                        value: function(e) {
                            var t = e.target.value;
                            this.props.updateUI({
                                hexInputValue: t
                            });
                            var a = "#rrggbb".length;
                            if (t.length === a) {
                                var n = null;
                                try {
                                    n = new u(t)
                                } catch (e) {}
                                n && this.updateRgb(t)
                            }
                        }
                    }, {
                        key: "getCurrentColorObject",
                        value: function() {
                            return new u(this.props.usedColor)
                        }
                    }, {
                        key: "componentWillMount",
                        value: function() {
                            this.props.updateUI({
                                hexInputValue: this.getCurrentColorObject().toHex()
                            })
                        }
                    }, {
                        key: "componentWillUpdate",
                        value: function(e) {
                            (!e.ui.hexInputValue || e.usedColor !== this.props.usedColor) && this.props.updateUI({
                                hexInputValue: new u(e.usedColor).toHex()
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.customColors,
                                n = (t.value, t.onChange, t.editOpacity),
                                i = t.hideDefaultColor,
                                l = t.ui.hexInputValue,
                                r = t.selectNullButtonTitle,
                                s = this.getCurrentColorObject(),
                                u = a.highlight1,
                                d = a.highlight2;
                            ce.isImmutable(a) && (u = a.get("highlight1"), d = a.get("highlight2"));
                            var c = de.compact([u, d]);
                            return (0, o.Z)(Ce, {
                                className: "s-tooltip-dialog active"
                            }, void 0, (0, o.Z)("div", {
                                style: {
                                    overflow: "hidden",
                                    marginBottom: 4
                                }
                            }, void 0, !i && (0, o.Z)(Ne, {
                                onClick: function() {
                                    return e.resetToDefaultColor()
                                }
                            }, void 0, I || (I = (0, o.Z)("span", {})), r || he("Editor|Use Default")), (0, o.Z)("div", {
                                style: {
                                    float: "right"
                                }
                            }, void 0, ie()(c).call(c, (function(t) {
                                return (0, o.Z)(we, {
                                    color: t,
                                    onClick: function() {
                                        return e.updateRgb(t)
                                    }
                                }, t, O || (O = (0, o.Z)("div", {})))
                            })))), (0, o.Z)(_e, {
                                color: s.toHex(),
                                onChangeComplete: function(t) {
                                    e.updateRgb(t.hex)
                                }
                            }), (0, o.Z)("input", {
                                type: "text",
                                style: {
                                    marginTop: 4,
                                    marginBottom: 4
                                },
                                value: l.toUpperCase(),
                                onChange: function(t) {
                                    return e.handleHexInputChange(t)
                                },
                                maxLength: 7
                            }), n && (0, o.Z)("div", {
                                className: "s-form-field s-select-container small"
                            }, void 0, (0, o.Z)("select", {
                                onChange: function(t) {
                                    return e.updateAlpha(t.target.value)
                                },
                                value: s.a
                            }, void 0, ie()(xe).call(xe, (function(e) {
                                return (0, o.Z)("option", {
                                    value: e.value
                                }, e.value, e.label)
                            }))), M || (M = (0, o.Z)("i", {
                                className: "entypo-arrow-combo"
                            }))))
                        }
                    }]), i
                }(r.PureComponent),
                Ee = ke = ue(ke = (0, fe.default)({
                    state: {
                        hexInputValue: ""
                    }
                })(ke), (function() {
                    return [se.getCustomColors()]
                }), (function(e) {
                    return {
                        customColors: (0, Q.Z)(e, 1)[0]
                    }
                }))
        },
        241037: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                BaseRotationDropDown: function() {
                    return r
                }
            });
            var n = a(863056),
                o = a(2991),
                i = a.n(o),
                l = (a(366757), a(353147)),
                r = function(e) {
                    var t = e.rotationKeys,
                        a = e.onChangeKey,
                        o = e.selectedKey;
                    return (0, n.Z)("div", {
                        className: "s-layout-menu-field drop-down-select"
                    }, void 0, (0, n.Z)("select", {
                        value: o,
                        onChange: a
                    }, void 0, i()(t).call(t, (function(e, t) {
                        return (0, n.Z)("option", {
                            value: e
                        }, e, l("Layout"), " ", "ABCDEFGHI" [t])
                    }))))
                };
            t.default = r
        },
        751706: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                SECTION_HEIGHTS: function() {
                    return l
                },
                SECTION_WIDTHS: function() {
                    return r
                },
                CONTENT_ALIGNS: function() {
                    return s
                },
                getDefaultWidthByOldKey: function() {
                    return u
                },
                getDefaultHeightByOldKey: function() {
                    return d
                },
                geInitialSectionStyleData: function() {
                    return c
                },
                initSectionStyleData: function() {
                    return f
                }
            });
            var n = a(143393),
                o = a(155088),
                i = a(353147),
                l = [{
                    value: o.SectionHeightKeys.MINI,
                    label: function() {
                        return i("Editor|Minimum")
                    }
                }, {
                    value: o.SectionHeightKeys.SMALL,
                    label: function() {
                        return i("Editor|Small")
                    }
                }, {
                    value: o.SectionHeightKeys.NORMAL,
                    label: function() {
                        return i("Editor|Normal")
                    }
                }, {
                    value: o.SectionHeightKeys.LARGE,
                    label: function() {
                        return i("Editor|Large")
                    }
                }, {
                    value: o.SectionHeightKeys.FULL,
                    label: function() {
                        return i("Editor|Full")
                    }
                }],
                r = [{
                    value: o.SectionWidthKeys.SMALL,
                    label: function() {
                        return i("Editor|Small")
                    }
                }, {
                    value: o.SectionWidthKeys.NORMAL,
                    label: function() {
                        return i("Editor|Normal")
                    }
                }, {
                    value: o.SectionWidthKeys.WIDE,
                    label: function() {
                        return i("Editor|Wide")
                    }
                }, {
                    value: o.SectionWidthKeys.FULL,
                    label: function() {
                        return i("Editor|Full")
                    }
                }],
                s = [{
                    value: o.ContentAlignKeys.TOP_LEFT,
                    label: function() {
                        return i("Editor|Top Left")
                    }
                }, {
                    value: o.ContentAlignKeys.TOP_CENTER,
                    label: function() {
                        return i("Editor|Top Center")
                    }
                }, {
                    value: o.ContentAlignKeys.TOP_RIGHT,
                    label: function() {
                        return i("Editor|Top Right")
                    }
                }, {
                    value: o.ContentAlignKeys.CENTER_LEFT,
                    label: function() {
                        return i("Editor|Center Left")
                    }
                }, {
                    value: o.ContentAlignKeys.CENTER,
                    label: function() {
                        return i("Editor|Center")
                    }
                }, {
                    value: o.ContentAlignKeys.CENTER_RIGHT,
                    label: function() {
                        return i("Editor|Center Right")
                    }
                }, {
                    value: o.ContentAlignKeys.BOTTOM_LEFT,
                    label: function() {
                        return i("Editor|Bottom Left")
                    }
                }, {
                    value: o.ContentAlignKeys.BOTTOM_CENTER,
                    label: function() {
                        return i("Editor|Bottom Center")
                    }
                }, {
                    value: o.ContentAlignKeys.BOTTOM_RIGHT,
                    label: function() {
                        return i("Editor|Bottom Right")
                    }
                }],
                u = {
                    narrow: o.SectionWidthKeys.SMALL,
                    normal: o.SectionWidthKeys.NORMAL,
                    wide: o.SectionWidthKeys.WIDE,
                    full: o.SectionWidthKeys.FULL
                },
                d = {
                    small: o.SectionHeightKeys.SMALL,
                    normal: o.SectionHeightKeys.NORMAL,
                    large: o.SectionHeightKeys.LARGE
                },
                c = function(e) {
                    return {
                        width: u[null == e ? void 0 : e.width] || o.SectionWidthKeys.NORMAL,
                        height: d[null == e ? void 0 : e.height] || o.SectionHeightKeys.NORMAL,
                        content_align: o.ContentAlignKeys.CENTER
                    }
                },
                f = function(e, t) {
                    e.merge(n.fromJS(c(t)))
                }
        },
        643599: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                newLayoutOptions: function() {
                    return l
                },
                newLayoutTempateconfigs: function() {
                    return r
                }
            });
            var n = a(977766),
                o = a.n(n),
                i = a(353147),
                l = [{
                    key: "structure",
                    label: function() {
                        return i("Editor|Structure")
                    },
                    component: "select",
                    children: [{
                        value: "grid",
                        label: function() {
                            return i("Editor|Grid")
                        }
                    }, {
                        value: "tiled",
                        label: function() {
                            return i("Editor|Tiled")
                        }
                    }]
                }, {
                    key: "columns",
                    label: function() {
                        return i("Editor|Columns")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["grid", "tiled"]
                    }],
                    children: [{
                        value: 1,
                        label: function() {
                            return "1"
                        },
                        visible: [{
                            type: "structure",
                            value: ["grid"]
                        }]
                    }, {
                        value: 2,
                        label: function() {
                            return "2"
                        }
                    }, {
                        value: 3,
                        label: function() {
                            return "3"
                        }
                    }, {
                        value: 4,
                        label: function() {
                            return "4"
                        }
                    }]
                }, {
                    key: "imageShape",
                    label: function() {
                        return i("Editor|Image Shape")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["grid"]
                    }],
                    children: [{
                        value: "square",
                        label: function() {
                            return i("Editor|Square")
                        }
                    }, {
                        value: "landscape-4-3",
                        label: function() {
                            return i("Editor|Landscape (4:3)")
                        }
                    }, {
                        value: "landscape-16-9",
                        label: function() {
                            return i("Editor|Landscape (16:9)")
                        }
                    }, {
                        value: "landscape-4-1",
                        label: function() {
                            return i("Editor|Landscape (4:1)")
                        }
                    }]
                }, {
                    key: "width",
                    label: function() {
                        return i("Editor|Section Width")
                    },
                    component: "select",
                    children: [{
                        value: "small",
                        label: function() {
                            return i("Editor|Small")
                        }
                    }, {
                        value: "normal",
                        label: function() {
                            return i("Editor|Normal")
                        }
                    }, {
                        value: "wide",
                        label: function() {
                            var e;
                            return o()(e = "".concat(i("Editor|Wide"), " ")).call(e, i("Editor|(default)"))
                        }
                    }, {
                        value: "full",
                        label: function() {
                            return i("Editor|Full")
                        }
                    }]
                }, {
                    key: "spacing",
                    label: function() {
                        return i("Editor|Spacing")
                    },
                    component: "select",
                    children: [{
                        value: "large",
                        label: function() {
                            return i("Editor|Large")
                        }
                    }, {
                        value: "small",
                        label: function() {
                            return i("Editor|Small")
                        }
                    }, {
                        value: "none",
                        label: function() {
                            return i("Editor|None")
                        }
                    }]
                }, {
                    key: "showTitle",
                    label: function() {
                        return i("Editor|Show Titles")
                    },
                    component: "checkbox"
                }],
                r = [{
                    templateName: "A",
                    structure: "grid",
                    columns: 2,
                    imageShape: "landscape-16-9",
                    width: "wide",
                    spacing: "large",
                    showTitle: !0,
                    customized: !1
                }, {
                    templateName: "B",
                    structure: "grid",
                    columns: 3,
                    imageShape: "square",
                    width: "wide",
                    spacing: "small",
                    customized: !1,
                    showTitle: !1
                }, {
                    templateName: "C",
                    structure: "tiled",
                    columns: 2,
                    width: "wide",
                    spacing: "small",
                    showTitle: !1,
                    customized: !1
                }, {
                    templateName: "D",
                    structure: "tiled",
                    columns: 3,
                    width: "wide",
                    spacing: "small",
                    customized: !1,
                    showTitle: !1
                }, {
                    templateName: "E",
                    structure: "grid",
                    columns: 1,
                    imageShape: "landscape-4-1",
                    width: "wide",
                    spacing: "large",
                    showTitle: !0,
                    customized: !1
                }, {
                    templateName: "F",
                    structure: "grid",
                    columns: 2,
                    imageShape: "landscape-16-9",
                    width: "full",
                    spacing: "none",
                    showTitle: !1,
                    customized: !1
                }]
        },
        681987: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getShowLine: function() {
                    return r
                }
            });
            var n = a(678580),
                o = a.n(n),
                i = ["fresh"],
                l = ["title", "slider", "hero"];

            function r(e, t) {
                return o()(i).call(i, e) && !o()(l).call(l, t)
            }
        },
        978307: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ACCORDION_COLUMNS: function() {
                    return n
                },
                ACCORDION_LAYOUT_KEYS: function() {
                    return o
                },
                ACCORDION_LAYOUTS: function() {
                    return c
                },
                LAYOUT_CONTROL_SETTINGS: function() {
                    return f
                },
                NEUTRAL_COLOR: function() {
                    return m
                },
                NEUTRAL_COLOR_KEY: function() {
                    return g
                },
                DEFAULT_BORDER_COLOR: function() {
                    return p
                },
                DARK_BORDER_COLOR: function() {
                    return h
                },
                DEFAULT_MARGIN: function() {
                    return v
                },
                DARK_CLASSNAME: function() {
                    return y
                },
                MAXIMUM_NUM: function() {
                    return b
                },
                MINIMUM_NUM: function() {
                    return _
                },
                NEUTRAL_COLOR_CONFIG: function() {
                    return C
                }
            });
            var n, o, i = a(844845),
                l = a(20455),
                r = a.n(l),
                s = a(977766),
                u = a.n(s),
                d = a(353147);
            ! function(e) {
                e.ONE = "one", e.TWO = "two"
            }(n || (n = {})),
            function(e) {
                e.BORDER_LAYOUT = "A", e.SEPARATOR_LAYOUT = "B", e.BACKGROUND_LAYOUT = "C"
            }(o || (o = {}));
            var c = r()(o),
                f = [{
                    key: "layout",
                    lable: function() {
                        return ""
                    },
                    component: "select",
                    children: [{
                        value: o.BORDER_LAYOUT,
                        label: function() {
                            var e;
                            return u()(e = "".concat(d("Editor|Layout"), " ")).call(e, o.BORDER_LAYOUT)
                        }
                    }, {
                        value: o.SEPARATOR_LAYOUT,
                        label: function() {
                            var e;
                            return u()(e = "".concat(d("Editor|Layout"), " ")).call(e, o.SEPARATOR_LAYOUT)
                        }
                    }, {
                        value: o.BACKGROUND_LAYOUT,
                        label: function() {
                            var e;
                            return u()(e = "".concat(d("Editor|Layout"), " ")).call(e, o.BACKGROUND_LAYOUT)
                        }
                    }]
                }, {
                    key: "columns",
                    label: function() {
                        return d("Editor|Columns")
                    },
                    component: "button",
                    children: [{
                        value: n.ONE,
                        label: function() {
                            return "1"
                        }
                    }, {
                        value: n.TWO,
                        label: function() {
                            return "2"
                        }
                    }]
                }],
                m = "#B1B4B9",
                g = "neutral",
                p = "#E2E4E7",
                h = "#494D56",
                v = "20px",
                y = "dark",
                b = 100,
                _ = 2,
                C = (0, i.Z)({
                    default: {
                        textColor: h,
                        arrowColor: m
                    }
                }, o.BACKGROUND_LAYOUT, {
                    backgroundColor: "#F4F6F8",
                    textColor: h,
                    arrowColor: m
                })
        },
        653114: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                FEATURE_LIST_LAYOUTS: function() {
                    return o
                },
                DEFAULT_LAYOUTS_CLASS: function() {
                    return i
                },
                DEFAULT_LAYOUT_NAMES: function() {
                    return l
                },
                DEFAULT_LAYOUT_CONFIG: function() {
                    return r
                },
                LAYOUT_CONTROL_SETTINGS: function() {
                    return s
                }
            });
            var n = a(353147),
                o = ["A", "B", "C", "D"],
                i = {
                    repeatableClass: "",
                    itemClass: "",
                    innerItemClass: "",
                    mediaClass: "",
                    singleMediaClass: "",
                    textClass: "",
                    singleTextClass: "",
                    textInnerClass: "",
                    buttonClass: ""
                },
                l = {
                    feature1: function() {
                        return n("Sections|Feature 1")
                    },
                    feature2: function() {
                        return n("Sections|Feature 2")
                    },
                    feature3: function() {
                        return n("Sections|Feature 3")
                    },
                    button: function() {
                        return n("Sections|Read More")
                    }
                },
                r = {
                    A: {
                        layout: "A",
                        structure: "grid",
                        showButton: !0
                    },
                    B: {
                        layout: "B",
                        structure: "grid",
                        showButton: !1
                    },
                    C: {
                        layout: "C",
                        structure: "list",
                        mediaPosition: "left"
                    },
                    D: {
                        layout: "D",
                        structure: "list",
                        mediaPosition: "alternating"
                    }
                },
                s = [{
                    key: "structure",
                    label: function() {
                        return n("Editor|Structure")
                    },
                    component: "select",
                    children: [{
                        value: "list",
                        label: function() {
                            return n("Editor|List")
                        }
                    }, {
                        value: "grid",
                        label: function() {
                            return n("Editor|Grid")
                        }
                    }]
                }, {
                    key: "columns",
                    label: function() {
                        return n("Editor|Columns")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["grid"]
                    }],
                    children: [{
                        value: "two",
                        label: function() {
                            return "2"
                        }
                    }, {
                        value: "three",
                        label: function() {
                            return "3"
                        }
                    }, {
                        value: "four",
                        label: function() {
                            return "4"
                        }
                    }, {
                        value: "five",
                        label: function() {
                            return "5"
                        }
                    }, {
                        value: "six",
                        label: function() {
                            return "6"
                        }
                    }]
                }, {
                    key: "mediaSize",
                    label: function() {
                        return n("Editor|Media Size")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["list"]
                    }],
                    children: [{
                        value: "xs",
                        label: function() {
                            return n("Editor|XS")
                        }
                    }, {
                        value: "s",
                        label: function() {
                            return n("Editor|S")
                        }
                    }, {
                        value: "m",
                        label: function() {
                            return n("Editor|M")
                        }
                    }, {
                        value: "l",
                        label: function() {
                            return n("Editor|L")
                        }
                    }]
                }, {
                    key: "mediaPosition",
                    label: function() {
                        return n("Editor|Media Position")
                    },
                    component: "select",
                    visible: [{
                        type: "structure",
                        value: ["list"]
                    }],
                    children: [{
                        value: "left",
                        label: function() {
                            return n("Editor|Left")
                        }
                    }, {
                        value: "right",
                        label: function() {
                            return n("Editor|Right")
                        }
                    }, {
                        value: "alternating",
                        label: function() {
                            return n("Editor|Alternating")
                        }
                    }]
                }, {
                    key: "showButton",
                    label: function() {
                        return n("Editor|Show Buttons")
                    },
                    component: "checkbox"
                }]
        },
        18515: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                MemberNavigatorWithReduxModules: function() {
                    return b
                },
                MemberDialogWithReduxModules: function() {
                    return v
                },
                MobileMemberNavigatorWithReduxModules: function() {
                    return _
                },
                OrderHistoryDialogWithReduxModules: function() {
                    return y
                },
                BookingListDialogWithReduxModules: function() {
                    return C
                }
            });
            var n = a(863056),
                o = a(366757),
                i = a(385002),
                l = a(441589),
                r = a(116485),
                s = a(923984),
                u = a(937896),
                d = a(951362),
                c = a(913399),
                f = a(34822),
                m = [c.Z, f.UT.zk, f.qj.zk, f.ls.zk],
                g = (0, f.HL)(r.Z),
                p = (0, f.HL)(u.Z),
                h = (0, f.HL)(d.Z),
                v = o.memo((function(e) {
                    return (0, n.Z)(i.DynamicModuleLoader, {
                        modules: m
                    }, void 0, o.createElement(g, e))
                })),
                y = o.memo((function(e) {
                    return (0, n.Z)(i.DynamicModuleLoader, {
                        modules: m
                    }, void 0, o.createElement(p, e))
                })),
                b = o.memo((function(e) {
                    return (0, n.Z)(i.DynamicModuleLoader, {
                        modules: m
                    }, void 0, o.createElement(l.Z, e))
                })),
                _ = o.memo((function(e) {
                    return (0, n.Z)(i.DynamicModuleLoader, {
                        modules: m
                    }, void 0, o.createElement(s.Z, e))
                })),
                C = o.memo((function(e) {
                    return (0, n.Z)(i.DynamicModuleLoader, {
                        modules: m
                    }, void 0, o.createElement(h, e))
                }))
        },
        827057: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                PRESET_COLORS: function() {
                    return n
                }
            });
            var n = [
                ["#FFFFFF", "#E8EAEC", "#1C1C1C"],
                ["#FA8C97", "#FEC979", "#A0D26D", "#74CFE2", "#918AE7"],
                ["#77797A", "#A7BAC1", "#D6D1BB", "#BDC6BC", "#C1A7A7"]
            ]
        },
        538507: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                transformCombinedTitle: function() {
                    return le
                },
                transformToS6Binding: function() {
                    return ie
                },
                transformToS6Component: function() {
                    return oe
                }
            });
            var n, o = a(981643),
                i = a.n(o),
                l = a(143393),
                r = a(686902),
                s = a.n(r),
                u = a(14310),
                d = a.n(u),
                c = a(620116),
                f = a.n(c),
                m = a(834074),
                g = a.n(m),
                p = a(778914),
                h = a.n(p),
                v = a(239649),
                y = a.n(v),
                b = a(820368),
                _ = a.n(b),
                C = a(663978),
                N = a.n(C),
                w = a(844845),
                x = (a(569600), a(974916), a(323123), a(977766)),
                k = a.n(x),
                E = a(497093),
                L = a.n(E),
                S = a(51942),
                B = a.n(S),
                T = a(20455),
                P = a.n(T),
                I = a(2991),
                O = a.n(I),
                M = a(678580),
                D = a.n(M),
                R = a(914578),
                A = a(468811),
                U = ["ecommerce", "process", "pricing", "blog", "gallery", "portfolio", "donation", "social_feed"],
                H = ["perspective"],
                F = a(234584);

            function V(e, t) {
                var a = s()(e);
                if (d()) {
                    var n = d()(e);
                    t && (n = f()(n).call(n, (function(t) {
                        return g()(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a, n = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) h()(a = V(Object(n), !0)).call(a, (function(t) {
                        (0, w.Z)(e, t, n[t])
                    }));
                    else if (y()) _()(e, y()(n));
                    else {
                        var o;
                        h()(o = V(Object(n))).call(o, (function(t) {
                            N()(e, t, g()(n, t))
                        }))
                    }
                }
                return e
            }
            var z = function(e, t) {
                    return {
                        type: "BlockComponent",
                        id: A.v4(),
                        defaultValue: null,
                        inlineLayout: t || "1",
                        items: e || []
                    }
                },
                K = function(e, t) {
                    return {
                        name: "rowBlock",
                        type: "BlockComponentItem",
                        components: {
                            block1: {
                                id: A.v4(),
                                type: "BlockComponent",
                                inlineLayout: t || "12",
                                items: e || []
                            }
                        }
                    }
                },
                W = function(e, t) {
                    return {
                        name: "columnBlock",
                        type: "BlockComponentItem",
                        id: A.v4(),
                        components: {
                            block1: {
                                type: "BlockComponent",
                                inlineLayout: t || null,
                                items: e || []
                            }
                        }
                    }
                },
                j = function(e) {
                    return {
                        type: "BlockComponentItem",
                        id: A.v4(),
                        name: "title",
                        defaultValue: null,
                        components: {
                            text1: {
                                type: "RichText",
                                id: A.v4(),
                                value: e,
                                version: 6,
                                defaultValue: !0,
                                backupValue: null
                            }
                        }
                    }
                },
                G = function(e, t, a) {
                    return {
                        type: "BlockComponentItem",
                        id: a || A.v4(),
                        name: e,
                        defaultValue: null,
                        components: t
                    }
                },
                Y = function() {
                    return {
                        defaultValue: null,
                        id: A.v4(),
                        type: "Spacer",
                        value: null
                    }
                },
                q = function(e, t) {
                    var a, n, o, i, l = e.text1,
                        r = e.text2,
                        s = e.style,
                        u = document.createElement("div");
                    u.innerHTML = null == l ? void 0 : l.value;
                    var d = null != l && l.value ? k()(a = '<h2 class="s-title s-font-title"'.concat(s && ' style="'.concat(s, '"') || "", ">")).call(a, null === (n = $("<div>".concat(u.textContent, "</div>"))) || void 0 === n ? void 0 : n.text(), "</h2>") : "";
                    u.innerHTML = null == r ? void 0 : r.value;
                    var c = [d, null != r && r.value ? k()(o = '<h4 class="s-subtitle"'.concat(s && ' style="'.concat(s, '"') || "", ">")).call(o, null === (i = $("<div>".concat(u.textContent, "</div>"))) || void 0 === i ? void 0 : i.text(), "</h4>") : ""];
                    return t && (c = L()(c).call(c)), c.join("")
                },
                J = function(e, t) {
                    var a = e.text1,
                        n = e.text2,
                        o = e.style,
                        i = q({
                            text1: a,
                            text2: n,
                            style: o
                        }, t);
                    return j(i)
                },
                Q = function(e, t) {
                    var a, n = e.slideSettings,
                        o = B()({}, e),
                        i = (n || {}).display_settings;
                    return delete o.slideSettings, delete o.background1, delete o.text1, delete o.text2, i && (i.show_info || delete o.contactInfo1), null != o && null !== (a = o.email1) && void 0 !== a && a.customForm && (o.email1 = G("customForm", {
                        email1: o.email1
                    }, t)), o
                },
                X = function(e) {
                    var t = e.slideSettings,
                        a = e.text1,
                        n = e.text2,
                        o = e.background1,
                        i = e.button1,
                        l = e.media1,
                        r = B()({}, {
                            slideSettings: t,
                            background1: o,
                            text1: a,
                            text2: n
                        }),
                        s = (t || {}).layout_variation,
                        u = !1;
                    s && "bottom" !== s.split("-")[1] && (u = !0);
                    var d = [J({
                            text1: a,
                            text2: n
                        }, u)],
                        c = [];
                    (null != l && l.video || null != l && l.image) && (c = k()(c).call(c, K([W([l])]))), c = k()(c).call(c, K([W(d)])), null != i && i.text && (c = k()(c).call(c, K([W([i])])));
                    var f = z(c);
                    return r.block1 = f, r
                },
                ee = function(e) {
                    var t, a = e.slideSettings,
                        n = e.text1,
                        o = e.text2,
                        i = e.background1,
                        l = e.button1,
                        r = e.media1,
                        s = e.email1,
                        u = e.image1,
                        d = e.image2,
                        c = null == a || null === (t = a.layout_variation) || void 0 === t ? void 0 : t.split("-"),
                        f = B()({}, {
                            slideSettings: a,
                            background1: i,
                            text1: n,
                            text2: o
                        }),
                        m = [J({
                            text1: n,
                            text2: o
                        })],
                        g = [];
                    if (null != c && c.length) {
                        var p = c[0],
                            h = c[1];
                        if ("swap" === c[2] && (m = [J({
                                text1: n,
                                text2: o
                            }, !0)]), "button" === p) m = k()(m).call(m, l);
                        else if ("signup" === p) {
                            var v = G("signUpForm", {
                                email1: s
                            });
                            m = k()(m).call(m, v)
                        } else "images" === p && (m = k()(m).call(m, G("imageGroup", {
                            image1: u,
                            image2: d
                        })));
                        "left" === h ? g = [K([W([r]), W(m, "center")], "6-6")] : "right" === h ? g = [K([W(m, "center"), W([r])], "6-6")] : "noImage" === h && (g = [K([W(m)])])
                    }
                    var y = z(g);
                    return f.block1 = y, f
                },
                te = function(e) {
                    var t = e.slideSettings,
                        a = e.text1,
                        n = e.text2,
                        o = e.background1,
                        l = e.repeatable1,
                        r = B()({}, {
                            slideSettings: t,
                            background1: o,
                            text1: a,
                            text2: n
                        }),
                        s = t || {},
                        u = (s.name, s.layout_variation),
                        d = void 0 === u ? "" : u,
                        c = s.layout_config,
                        f = void 0 === c ? {} : c,
                        m = l || {},
                        g = (m.components, m.list),
                        p = f || {},
                        h = p.structure,
                        v = p.columns,
                        y = p.mediaPosition,
                        b = p.mediaSize;
                    delete Q(e).repeatable1;
                    var _ = [J({
                            text1: a,
                            text2: n
                        })],
                        C = [],
                        N = [],
                        w = d.split("-"),
                        x = function(e) {
                            return ""
                        },
                        E = F.getTheme().get("name");
                    if (-1 !== i()(H).call(H, E) && w.shift(), "col" === w[0] || "grid" === h) {
                        x = function() {
                            return "largeProfile"
                        };
                        var L = "",
                            S = 1,
                            T = O()(g).call(g, (function(e, t) {
                                return W([Z(Z({}, e), {}, {
                                    name: x(t),
                                    type: "BlockComponentItem"
                                })])
                            }));
                        "two" === w[1] || "two" === v ? (L = "6-6", S = 2) : "three" === w[1] || "three" === v ? (L = "4-4-4", S = 3) : (L = "3-3-3-3", S = "four" === w[1] || "four" === v ? 4 : "five" === w[1] || "five" === v ? 5 : 6);
                        var P = R.chunk(T, S);
                        N = O()(P).call(P, (function(e) {
                            return K(e, L)
                        })), C = [K([W(_)])], C = k()(C).call(C, N)
                    } else if ("row" === w[0] || "list" === h) {
                        var I = function(e) {
                                return "Left"
                            },
                            M = "large";
                        "small" === w[1] || "xs" === b ? M = "tiny" : "medium1" === w[1] || "s" === b ? M = "small" : "medium2" !== w[1] && "m" !== b || (M = "medium"), "right" === w[3] || "right" === y ? I = function() {
                            return "Right"
                        } : "alt" !== w[3] && "alternating" !== y || (I = function(e) {
                            return (e || 0) % 2 > 0 ? "Right" : "Left"
                        }), x = function(e) {
                            var t;
                            return k()(t = "".concat(M, "Feature")).call(t, I(e))
                        }, _ = [J({
                            text1: a,
                            text2: n,
                            style: "text-align: center;"
                        })], N = O()(g).call(g, (function(e, t) {
                            return K([W([Z(Z({}, e), {}, {
                                name: x(t),
                                type: "BlockComponentItem"
                            })])])
                        })), C = [K([W(_)])], C = k()(C).call(C, N)
                    } else if ("media" === w[0]) {
                        var A;
                        "left" === w[1] ? x = function() {
                            return "largeFeatureLeft"
                        } : "right" === w[1] ? x = function() {
                            return "largeFeatureRight"
                        } : "alt" === w[1] && (x = function(e) {
                            return e % 2 > 0 ? "largeFeatureRight" : "largeFeatureLeft"
                        }), D()(A = ["center", "top", "bottom"]).call(A, w[1]) ? (x = function() {
                            return "largeProfile"
                        }, N = O()(g).call(g, (function(e, t) {
                            return K([W([Y()]), W([Z(Z({}, e), {}, {
                                name: x(t),
                                type: "BlockComponentItem"
                            })]), W([Y()])], "2-8-2")
                        }))) : (_ = [J({
                            text1: a,
                            text2: n,
                            style: "text-align: center;"
                        })], N = O()(g).call(g, (function(e, t) {
                            return K([W([Z(Z({}, e), {}, {
                                name: x(t),
                                type: "BlockComponentItem"
                            })])])
                        }))), f.isNewMedia || (C = [K([W(_)])]), C = k()(C).call(C, N)
                    }
                    var U = z(C);
                    return r.block1 = U, r
                },
                ae = function(e) {
                    var t, a = e.slideSettings,
                        n = e.text1,
                        o = e.text2,
                        i = e.background1,
                        l = e.repeatable1,
                        r = a || {},
                        s = (r.name, r.layout_variation),
                        u = void 0 === s ? "" : s,
                        d = l || {},
                        c = (d.components, d.list),
                        f = B()({}, {
                            slideSettings: a,
                            background1: i,
                            text1: n,
                            text2: o
                        }),
                        m = J({
                            text1: n,
                            text2: o
                        }),
                        g = [],
                        p = u.split("-"),
                        h = "textGroup";
                    "box" === p[0] && (h = "textBox");
                    var v = O()(c).call(c, (function(e, t) {
                            return W([Z(Z({}, e), {}, {
                                name: h,
                                type: "BlockComponentItem"
                            })])
                        })),
                        y = "12",
                        b = 1;
                    "two" === p[1] ? (b = 2, y = "6-6") : "three" === p[1] ? (b = 3, y = "4-4-4") : "four" === p[1] && (b = 4, y = "3-3-3-3");
                    var _ = R.chunk(v, b);
                    m = [J({
                        text1: n,
                        text2: o,
                        style: "text-align: center;"
                    })], t = O()(_).call(_, (function(e) {
                        return K(e, y)
                    })), g = [K([W(m)])], g = k()(g).call(g, t);
                    var C = z(g);
                    return f.block1 = C, f
                },
                ne = (n = {}, (0, w.Z)(n, "hero", ee), (0, w.Z)(n, "signup_form", ee), (0, w.Z)(n, "contact_form", (function(e) {
                    var t, a = e.slideSettings,
                        n = e.text1,
                        o = e.text2,
                        i = e.background1,
                        l = e.email1,
                        r = e.contactInfo1,
                        s = (a || {}).display_settings,
                        u = B()({}, {
                            slideSettings: a,
                            background1: i,
                            text1: n,
                            text2: o
                        }),
                        d = [J({
                            text1: n,
                            text2: o
                        })],
                        c = null,
                        f = [W([G("contactForm", {
                            email1: l
                        })])];
                    if (s) {
                        var m, g;
                        s.show_map && (f = k()(f).call(f, W([G("googleMaps", {
                            contactInfo1: r
                        })]))), s.show_info && (f = k()(f).call(f, W([r])));
                        var p = "12";
                        2 === (null === (m = f) || void 0 === m ? void 0 : m.length) && (p = "6-6"), 3 === (null === (g = f) || void 0 === g ? void 0 : g.length) && (p = "4-4-4"), c = K(f, p)
                    } else c = K(f);
                    t = [K([W(d)]), c];
                    var h = z(t);
                    return u.block1 = h, u
                })), (0, w.Z)(n, "title", X), (0, w.Z)(n, "cta", X), (0, w.Z)(n, "columns", te), (0, w.Z)(n, "rows", te), (0, w.Z)(n, "media", te), (0, w.Z)(n, "media1", te), (0, w.Z)(n, "media2", te), (0, w.Z)(n, "media3", te), (0, w.Z)(n, "text", ae), (0, w.Z)(n, "info", ae), (0, w.Z)(n, "icons", (function(e) {
                    var t, a = e.slideSettings,
                        n = e.text1,
                        o = e.text2,
                        i = e.background1,
                        l = e.repeatable1,
                        r = a || {},
                        s = (r.name, r.layout_variation),
                        u = void 0 === s ? "" : s,
                        d = (l || {}).list,
                        c = B()({}, {
                            slideSettings: a,
                            background1: i,
                            text1: n,
                            text2: o
                        }),
                        f = J({
                            text1: n,
                            text2: o
                        }),
                        m = [],
                        g = 6,
                        p = "tinyIconText";
                    "col" === u && (g = 5, p = "smallIconText");
                    var h = O()(d).call(d, (function(e, t) {
                            return W([Z(Z({}, e), {}, {
                                name: p,
                                type: "BlockComponentItem"
                            })])
                        })),
                        v = R.chunk(h, g);
                    f = [J({
                        text1: n,
                        text2: o,
                        style: "text-align: center;"
                    })], t = O()(v).call(v, (function(e) {
                        return K(e, "3-3-3-3")
                    })), m = [K([W(f)])], m = k()(m).call(m, t);
                    var y = z(m);
                    return c.block1 = y, c
                })), (0, w.Z)(n, "block", (function(e) {
                    var t, a = e.slideSettings,
                        n = e.text1,
                        o = e.text2,
                        i = e.background1,
                        l = e.block1,
                        r = B()({}, {
                            slideSettings: a,
                            background1: i,
                            text1: n,
                            text2: o
                        }),
                        s = [J({
                            text1: n,
                            text2: o
                        })],
                        u = [K([W(s)])],
                        d = function(e) {
                            if (2 === (null == e ? void 0 : e.length)) {
                                var t = e[0].value;
                                if ("eight" === t) return "6-6";
                                if ("two-thirds" === t) return "8-4";
                                if ("third" === t) return "4-8"
                            } else if (3 === (null == e ? void 0 : e.length)) return "4-4-4";
                            return "12"
                        },
                        c = O()(t = l.items).call(t, (function(e) {
                            return "rowBlock" !== e.name ? K([W([e])]) : Z(Z({}, e), {}, {
                                components: Z(Z({}, e.components), {}, {
                                    block1: Z(Z({}, e.components.block1), {}, {
                                        inlineLayout: d(null === (t = e.components) || void 0 === t || null === (a = t.block1) || void 0 === a ? void 0 : a.layout)
                                    })
                                })
                            });
                            var t, a
                        }));
                    u = k()(u).call(u, c);
                    var f = z(u);
                    return r.block1 = f, r
                })), (0, w.Z)(n, "COMMON", (function(e, t) {
                    var a = e.slideSettings,
                        n = e.text1,
                        o = e.text2,
                        i = e.background1,
                        l = B()({}, {
                            slideSettings: a,
                            background1: i,
                            text1: n,
                            text2: o
                        }),
                        r = Q(e, t),
                        s = [J({
                            text1: n,
                            text2: o
                        })],
                        u = [K([W(s)]), K([W(P()(r))])],
                        d = z(u);
                    return l.block1 = d, l
                })), (0, w.Z)(n, "featureListA", te), (0, w.Z)(n, "featureListB", te), (0, w.Z)(n, "featureListC", te), (0, w.Z)(n, "featureListD", te), n),
                oe = function(e, t) {
                    var a = e.templateName,
                        n = e.sectionId;
                    return ne[a] ? ne[a](t) : ne.COMMON(t, n)
                },
                ie = function(e) {
                    var t = e.get("template_name"),
                        a = e.get("id"),
                        n = e.get("components").toJS(),
                        o = oe({
                            templateName: t,
                            sectionId: a
                        }, n);
                    e.set("template_version", "s6"), e.set("components", l.fromJS(o))
                },
                le = function(e, t) {
                    var a = e.get("template_name"),
                        n = e.get("template_version");
                    if (-1 !== i()(U).call(U, a) && "beta-s6" !== n) {
                        var o = e.sub("components"),
                            l = o.sub("text1"),
                            r = o.sub("text2"),
                            s = l.get("value"),
                            u = r.get("value"),
                            d = q({
                                text1: {
                                    value: s
                                },
                                text2: {
                                    value: u
                                }
                            });
                        l.set("value", d), e.set("template_version", "beta-s6"), "function" == typeof t && t()
                    }
                }
        },
        381633: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                Alert: function() {
                    return n.Z
                },
                Badge: function() {
                    return o.Z
                },
                Button: function() {
                    return i.Z
                },
                Card: function() {
                    return l.Z
                },
                Checkbox: function() {
                    return r.Z
                },
                Collapse: function() {
                    return s.Z
                },
                DatePicker: function() {
                    return u.Z
                },
                Dropdown: function() {
                    return c.Z
                },
                Form: function() {
                    return f.Z
                },
                Grid: function() {
                    return m
                },
                Icon: function() {
                    return g.Z
                },
                LoadingAndSavedIcon: function() {
                    return g.P
                },
                Input: function() {
                    return p.Z
                },
                Menu: function() {
                    return h.Z
                },
                Message: function() {
                    return v.Z
                },
                Modal: function() {
                    return y.Z
                },
                Pagination: function() {
                    return _.Z
                },
                Popover: function() {
                    return C.Z
                },
                Radio: function() {
                    return N.ZP
                },
                Select: function() {
                    return w.Z
                },
                Steps: function() {
                    return b.Z
                },
                Table: function() {
                    return x.Z
                },
                Tabs: function() {
                    return k.Z
                },
                Tag: function() {
                    return E.Z
                },
                TimePicker: function() {
                    return L.Z
                },
                Tooltip: function() {
                    return S.Z
                },
                Upload: function() {
                    return B.Z
                },
                Slider: function() {
                    return T.Z
                },
                Progress: function() {
                    return P.Z
                },
                SearchInput: function() {
                    return I.Z
                },
                FormLabel: function() {
                    return O.Z
                },
                BigSelect: function() {
                    return M.Z
                },
                DropdownButton: function() {
                    return D.Z
                },
                NewDatePicker: function() {
                    return d.Z
                },
                Switch: function() {
                    return R.Z
                }
            });
            var n = a(107463),
                o = a(138479),
                i = a(171725),
                l = a(225152),
                r = a(622587),
                s = a(350491),
                u = a(916279),
                d = a(967217),
                c = a(973999),
                f = a(198545),
                m = a(958342),
                g = a(601765),
                p = a(990369),
                h = a(63257),
                v = a(769230),
                y = a(685231),
                b = a(822362),
                _ = a(121946),
                C = a(665172),
                N = a(569670),
                w = a(685186),
                x = a(458103),
                k = a(230125),
                E = a(551751),
                L = a(8145),
                S = a(384788),
                B = a(276214),
                T = a(31130),
                P = a(161182),
                I = a(604965),
                O = a(2441),
                M = a(991718),
                D = a(344998),
                R = a(998254)
        },
        531468: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = a(914578),
                i = (a(539232), a(659370), a(716505)),
                l = a(436173);
            e.exports = function() {
                return n.createElement(i, (e = {
                    className: "s-new-media-section s-section " + this._getSectionType() + "  " + this._getContentAlignmentClass() + " " + this._getPaddingClass()
                }, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0), a = o.assign({}, e, t), e.hasOwnProperty("style") && (a.style = o.defaults(a.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (a.className = t.className + " " + e.className), a), null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? n.createElement(l, this.getBackgroundProps("background1")) : null, n.createElement("div", {
                    className: "container"
                }, n.createElement("div", {
                    className: "columns sixteen"
                }), "\n    ", this._renderRepeatable("repeatable1"), "\n  "));
                var e, t, a
            }
        },
        123772: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578),
                l = a(176965),
                r = a(271866);

            function s() {
                var e = l.DOM.input;
                return o.createElement("div", {
                    className: "bg-video-panel s-point-right s-tooltip-dialog " + i.keys(i.pick({
                        active: this.cbProps.showVideoPanel,
                        "rtl-layout": this.cbProps.isRtlLayout
                    }, i.identity)).join(" ")
                }, o.createElement("div", {
                    className: "menu-title"
                }, n("Video|Use Youtube/Vimeo Video")), o.createElement("div", {
                    className: "input-wrap"
                }, o.createElement(e, {
                    type: "text",
                    placeholder: n("Video|Enter Youtube/Vimeo URL"),
                    onChange: this._onChangeUrl,
                    value: this._tempVideoUrl()
                }), this._getIsUploading() ? null : o.createElement("span", {
                    className: "no-border no-margin s-btn small yellow",
                    onClick: this._uploadVideo
                }, n("Video|Upload")), this._getIsUploading() ? o.createElement("span", {
                    className: "gray no-border no-margin s-btn small"
                }, n("Video|Uploading...")) : null), this._needToShowUrlError() ? o.createElement("div", {
                    className: "error-message"
                }, o.createElement("div", {
                    className: "fa fa-question-circle"
                }), "\n    ", n("Video|Video URL is invalid."), "\n    ", o.createElement(r, {}, o.createElement("a", {
                    href: "http://support.strikingly.com/hc/en-us/articles/215046387",
                    target: "_blank"
                }, n("Video|Learn more.")), o.createElement("a", {
                    href: "http://help.sxl.cn/hc/zh-cn/articles/215309018",
                    target: "_blank"
                }, "了解更多"))) : null, o.createElement("div", {
                    className: "hint"
                }, n("Video|Note: Video backgrounds won't play on phones or tablets. A thumbnail will be shown instead.")))
            }
            e.exports = function() {
                return s.apply(this, [])
            }
        },
        277265: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), e.exports = function() {
                return n.createElement("li", {
                    className: this.props.liClassName
                }, this._isS5Theme() ? null : n.createElement("a", {
                    className: "s-external-link-item s-nav-item",
                    href: this._getUrlToShow(),
                    target: this._getTarget()
                }, n.createElement("span", {
                    className: "s-font-body"
                }, this.props.text)), this._isS5Theme() ? n.createElement("div", {
                    className: "s-nav-link-container"
                }, n.createElement("a", {
                    className: "s-external-link-item s-nav-item",
                    href: this._getUrlToShow(),
                    target: this._getTarget()
                }, n.createElement("span", {
                    className: "s-font-body"
                }, this.props.text))) : null)
            }
        },
        797411: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578),
                l = a(271866),
                r = a(381633);

            function s() {
                var e = r.Tooltip;
                return o.createElement("div", {
                    className: "premium-section-frame",
                    style: this.getFirstProSectionNoticeStyle()
                }, o.createElement("div", {
                    className: "premium-section-wrap " + i.keys(i.pick({
                        "s6-element": this.props.isS6Section
                    }, i.identity)).join(" ")
                }, o.createElement("div", {
                    className: "left premium-section-outline"
                }), o.createElement("div", {
                    className: "premium-section-outline right"
                }), o.createElement("div", {
                    className: "premium-section-outline top"
                }), o.createElement("div", {
                    className: "bottom premium-section-outline"
                }), o.createElement(e, {
                    placement: "right",
                    title: this.props.isS6Section ? n("Editor|This element is only available for Pro sites. Upgrade your account to unlock this element!") : n("Editor|This section is only available for Pro sites. Upgrade your account to unlock this section!")
                }, o.createElement("div", {
                    className: "component-editor premium-section-notice",
                    onClick: this._onClickUpgrade
                }, o.createElement("div", {
                    className: "center premium-tips small title"
                }, o.createElement(l, {}, o.createElement("span", {}, o.createElement("div", {
                    className: "fa fa-star"
                }), "\n              ", n("PRO"), "\n            "), o.createElement("span", {}, o.createElement("div", {
                    className: "fa fa-star"
                }), "\n              ", " 企业版/专业版 ", "\n            "))), o.createElement("div", {
                    className: "center hover-premium-tips small title"
                }, o.createElement("span", {}, o.createElement("div", {
                    className: "fa fa-star"
                }), "\n            ", n("Upgrade"), "\n          "))))))
            }
            e.exports = function() {
                return s.apply(this, [])
            }
        },
        218022: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), e.exports = function() {
                return n.createElement("div", {
                    className: "video-bg-wrap",
                    "data-video-html": this.dtProps.videoHtml
                })
            }
        },
        912955: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = (a(914578), a(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-block-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, n("Make Your Own Section!")))), o.createElement("div", {}, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/block-components.png")
                }))))
            }
        },
        99584: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757);
            a(914578), e.exports = function() {
                return o.createElement("div", {
                    className: "s-blog-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, n("Sections|Our Blog"))), o.createElement("div", {
                    className: "blog"
                }, o.createElement("div", {
                    className: "blog-row"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/sections/blog-image-1.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|New Blog Feature!")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 17")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/sections/blog-image-2.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Lessons Learned from Starting Up")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 12")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/sections/blog-image-3.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Our Commitment to Service")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|August 30"))))), o.createElement("div", {
                    className: "blog-row"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|New Blog Feature!")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 17")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/backgrounds/cityscape/t170.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Lessons Learned from Starting Up")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 12")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Our Commitment to Service")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|August 30")))))))))
            }
        },
        856230: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = a(914578),
                i = (a(357646), a(436173)),
                l = a(990264),
                r = (a(659370), a(845939)),
                s = a(716505),
                u = (a(467338), a(718711));

            function d(e, t) {
                var a = o.assign({}, e, t);
                return e.hasOwnProperty("style") && (a.style = o.defaults(a.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (a.className = t.className + " " + e.className), a
            }
            a(711827), e.exports = function() {
                return n.createElement(s, d({
                    className: "s-blog-section s-section " + this._getPaddingClass()
                }, this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1")), n.createElement(u, this._getWaypointProps()), null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? n.createElement(i, this.getBackgroundProps("background1")) : null, n.createElement("div", {
                    className: "container"
                }, n.createElement("div", {
                    className: "columns no-float sixteen"
                }, n.createElement(r, {
                    section: this,
                    binding: this.getDefaultBinding()
                })), n.createElement("div", {
                    className: this.sbUniformTextAlignment("text1 text2")
                }, n.createElement(l, d({
                    className: "WaypointLazy",
                    layoutSetting: this._getLayoutSettings(),
                    sectionId: this._getSectionId()
                }, this.getComponentProps("blog1")), ")"))))
            }
        },
        347347: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = (a(914578), a(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-blog-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, n("Sections|Our Blog"))), o.createElement("div", {
                    className: "blog blog1"
                }, o.createElement("div", {
                    className: "blog-row"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-1-1.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Blog Post Title A")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 17")), o.createElement("div", {
                    className: "blog-post-text"
                }, n("Sections|Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-1-2.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Blog Post Title B")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 12")), o.createElement("div", {
                    className: "blog-post-text"
                }, n("Sections|Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-1-3.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Blog Post Title C")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|August 30")), o.createElement("div", {
                    className: "blog-post-text"
                }, n("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))))))))
            }
        },
        789505: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = a(914578),
                i = (a(357646), a(436173)),
                l = a(990264),
                r = (a(659370), a(845939)),
                s = a(716505),
                u = (a(467338), a(718711));

            function d(e, t) {
                var a = o.assign({}, e, t);
                return e.hasOwnProperty("style") && (a.style = o.defaults(a.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (a.className = t.className + " " + e.className), a
            }
            a(711827), e.exports = function() {
                return n.createElement(s, d({
                    className: "s-blog-section s-section " + this._getPaddingClass()
                }, this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1")), n.createElement(u, this._getWaypointProps()), null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? n.createElement(i, this.getBackgroundProps("background1")) : null, n.createElement("div", {
                    className: "container"
                }, n.createElement("div", {
                    className: "columns no-float sixteen"
                }, n.createElement(r, {
                    section: this,
                    binding: this.getDefaultBinding()
                })), n.createElement("div", {
                    className: this.sbUniformTextAlignment("text1 text2")
                }, n.createElement(l, d({
                    className: "WaypointLazy",
                    layoutSetting: this._getLayoutSettings(),
                    sectionId: this._getSectionId()
                }, this.getComponentProps("blog1")), ")"))))
            }
        },
        186954: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = (a(914578), a(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-blog-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, n("Sections|Our Blog"))), o.createElement("div", {
                    className: "blog blog2"
                }, o.createElement("div", {
                    className: "blog-column column1"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-1.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Blog Post Title A")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 17")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-4.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Blog Post Title A")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 12"))))), o.createElement("div", {
                    className: "blog-column column2"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-2.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Blog Post Title B")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 17")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-5.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Blog Post Title B")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 12"))))), o.createElement("div", {
                    className: "blog-column column3"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-3.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Blog Post Title C")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 17")))), o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-2-6.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|Blog Post Title C")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 12")))))))))
            }
        },
        801564: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = a(914578),
                i = (a(357646), a(436173)),
                l = a(990264),
                r = (a(659370), a(845939)),
                s = a(716505),
                u = (a(467338), a(718711));

            function d(e, t) {
                var a = o.assign({}, e, t);
                return e.hasOwnProperty("style") && (a.style = o.defaults(a.style, e.style)), e.hasOwnProperty("className") && t.hasOwnProperty("className") && (a.className = t.className + " " + e.className), a
            }
            a(711827), e.exports = function() {
                return n.createElement(s, d({
                    className: "s-blog-section s-section " + this._getPaddingClass()
                }, this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1")), n.createElement(u, this._getWaypointProps()), null, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") ? n.createElement(i, this.getBackgroundProps("background1")) : null, n.createElement("div", {
                    className: "container"
                }, n.createElement("div", {
                    className: "columns no-float sixteen"
                }, n.createElement(r, {
                    section: this,
                    binding: this.getDefaultBinding()
                })), n.createElement("div", {
                    className: this.sbUniformTextAlignment("text1 text2")
                }, n.createElement(l, d({
                    className: "WaypointLazy",
                    layoutSetting: this._getLayoutSettings(),
                    sectionId: this._getSectionId()
                }, this.getComponentProps("blog1")), ")"))))
            }
        },
        813564: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = (a(914578), a(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-blog-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, n("Sections|Our Blog"))), o.createElement("div", {
                    className: "blog blog3"
                }, o.createElement("div", {
                    className: "blog-row"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-3-1.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|New Blog Feature!")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 17"))))), o.createElement("div", {
                    className: "blog-row"
                }, o.createElement("div", {
                    className: "blog-post"
                }, o.createElement("div", {
                    className: "blog-post-image"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/blog/blog-image-3-2.png")
                })), o.createElement("div", {
                    className: "blog-post-content"
                }, o.createElement("div", {
                    className: "blog-post-title s-font-heading"
                }, n("Sections|New Blog Feature!")), o.createElement("div", {
                    className: "blog-post-subtitle"
                }, n("Sections|September 17")))))))))
            }
        },
        322787: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(481486), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        201680: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757);
            a(914578), e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-booking-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text1.value)
                    }
                }))), o.createElement("div", {
                    className: "p50"
                }, o.createElement("div", {
                    className: "store-image"
                }, o.createElement("img", {
                    src: "https://static-assets.strikinglycdn.com/images/editor2/booking-section-thumb.png"
                }))), o.createElement("div", {
                    className: "p60"
                }, o.createElement("div", {
                    className: "item-title s-font-heading"
                }, n("Sections|Business Workshop")), o.createElement("div", {
                    className: "duration-time item-body-text s-font-body"
                }, n("Sections|30min")), o.createElement("div", {
                    className: "item-subtitle s-font-body"
                }, o.createElement("input", {
                    className: "date-time-picker",
                    value: n("Sections|Date & Time")
                })), o.createElement("div", {
                    className: "form-thumb s-font-body"
                }, o.createElement("div", {
                    className: "button"
                }, n("Sections|BOOK NOW"))))))
            }
        },
        734143: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757);
            a(914578), e.exports = function() {
                return o.createElement("div", {
                    className: "s-cta-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text2.value)
                    }
                })), o.createElement("div", {
                    className: "button s-font-body"
                }, n("Sections|" + this.props.content.components.button1.text)))))
            }
        },
        147629: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(164385), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        821234: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757);
            a(914578), e.exports = function() {
                return o.createElement("div", {
                    className: "s-custom-form-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text2.value)
                    }
                })), o.createElement("div", {
                    className: "form-thumb s-font-body"
                }, o.createElement("div", {
                    className: "form-wrapper"
                }, o.createElement("div", {
                    className: "form-item"
                }, o.createElement("div", {
                    id: "form-select"
                }, o.createElement("span", {
                    className: "select-label"
                }, n("Editor|Select an option")), o.createElement("span", {
                    className: "dropdown-icon fa fa-caret-down"
                }))), o.createElement("div", {
                    className: "form-item"
                }, o.createElement("label", {}, o.createElement("input", {
                    type: "checkbox",
                    name: "radio-example",
                    checked: "checked"
                }), "\n              ", n("Sections|Option 1"), "\n            "), o.createElement("label", {}, o.createElement("input", {
                    type: "checkbox",
                    name: "radio-example"
                }), "\n              ", n("Sections|Option 2"), "\n            ")), o.createElement("div", {
                    className: "form-item"
                }, o.createElement("label", {}, o.createElement("input", {
                    type: "radio",
                    name: "radio-example",
                    checked: "checked"
                }), "\n              ", n("Sections|Radio 1"), "\n            "), o.createElement("label", {}, o.createElement("input", {
                    type: "radio",
                    name: "radio-example"
                }), "\n              ", n("Sections|Radio 2"), "\n            ")), o.createElement("div", {
                    className: "button"
                }, n("Sections|" + this.props.content.components.email1.submit_label)))))))
            }
        },
        919338: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757);
            a(914578), e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-donation-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text2.value)
                    }
                }))), o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "progress-bar"
                }, o.createElement("div", {
                    className: "progress"
                }), o.createElement("div", {
                    className: "indicator"
                })), o.createElement("div", {
                    className: "price-bar"
                }, o.createElement("div", {
                    className: "left-price"
                }, o.createElement("div", {
                    className: "price"
                }, "400"), o.createElement("div", {
                    className: "text"
                }, n("Donation|Raised"))), o.createElement("div", {
                    className: "right-price"
                }, o.createElement("div", {
                    className: "price"
                }, "10000"), o.createElement("div", {
                    className: "text"
                }, n("Donation|Goal")))), o.createElement("div", {
                    className: "button"
                }, n("Sections|Donate Now")))))
            }
        },
        645777: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757);
            a(914578), e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-ecommerce-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text2.value)
                    }
                }))), o.createElement("div", {
                    className: "p50"
                }, o.createElement("div", {
                    className: "store-image"
                }, o.createElement("img", {
                    src: this._getEcommerceProductImage()
                }))), o.createElement("div", {
                    className: "p50"
                }, o.createElement("div", {
                    className: "item-title s-font-heading"
                }, n("Sections|Smart Light Bulbs")), o.createElement("div", {
                    className: "item-body-text s-font-body"
                }, "$49.99"), o.createElement("div", {
                    className: "item-subtitle s-font-body"
                }, n("Sections|While you might not need all...")), o.createElement("div", {
                    className: "form-thumb s-font-body"
                }, o.createElement("div", {
                    className: "selection-thumb"
                }, o.createElement("div", {
                    className: "select-box"
                }, n("Sections|Purple"), "\n            ", o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/sections/content/selector.png"
                }))), o.createElement("div", {
                    className: "input-thumb"
                }, o.createElement("div", {
                    className: "input-box"
                }, "1")), o.createElement("div", {
                    className: "button"
                }, n("Sections|Buy Now"))))))
            }
        },
        97786: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(17342), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        214783: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = (a(914578), a(183123));
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-faq-thumb s-faq-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {}, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, n("Sections|FAQs"))), o.createElement("div", {
                    className: "accordion"
                }, o.createElement("div", {
                    className: "item"
                }, o.createElement("div", {
                    className: "header"
                }, o.createElement("div", {
                    className: "question s-font-title title"
                }, n("Sections|What is the FAQ section?")), o.createElement("i", {
                    className: "active arrow title"
                })), o.createElement("div", {
                    className: "answer s-font-heading subtitle"
                }, n("Sections|The FAQ section lets you show expandable content. Enter questions and answers, or more detailed information for anything you want!"))), o.createElement("div", {
                    className: "item"
                }, o.createElement("div", {
                    className: "header"
                }, o.createElement("div", {
                    className: "question s-font-title title"
                }, i.getIsSxl() ? n("Sections|What is SXL?") : n("Sections|What is Strikingly?")), o.createElement("i", {
                    className: "arrow title"
                }))), o.createElement("div", {
                    className: "item"
                }, o.createElement("div", {
                    className: "header"
                }, o.createElement("div", {
                    className: "question s-font-title title"
                }, n("Sections|How do I create a website?")), o.createElement("i", {
                    className: "arrow title"
                })))))))
            }
        },
        970748: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(152160), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        287471: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578);

            function l(e, t) {
                return o.createElement("div", {
                    className: "feature-list-container",
                    key: t
                }, o.createElement("div", {
                    className: "list-img"
                }, o.createElement("img", {
                    src: this._getImageUrl(e.components.media1.image)
                })), o.createElement("div", {
                    className: "item-text-group"
                }, e.components.text1.value ? o.createElement("div", {
                    className: "item-title s-font-heading"
                }, n("Sections|" + e.components.text1.value)) : null, e.components.text2.value ? o.createElement("div", {
                    className: "item-body-text s-font-body"
                }, this._getOmittedStringByCharNum(n("Sections|" + e.components.text2.value), 60)) : null, this.props.content.components.slideSettings.layout_config.showButton ? o.createElement("div", {
                    className: "button list-btn"
                }, n("Sections|" + e.components.button1.text)) : null))
            }
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-feature-list-thumb s-section-thumb " + this._getSectionTypeClass()
                }, o.createElement.apply(this, ["div", {
                    className: "s-section-thumb-content s-thumb-layout-" + this.props.content.components.slideSettings.layout_config.layout
                }, this.props.content.components.repeatable1.list.length ? i.map(this.props.content.components.repeatable1.list, l.bind(this)) : null]))
            }
        },
        384533: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(152160), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        567837: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578);

            function l(e, t) {
                return o.createElement("div", {
                    className: "feature-list-container",
                    key: t
                }, o.createElement("div", {
                    className: "list-img"
                }, o.createElement("img", {
                    src: this._getImageUrl(e.components.media1.image)
                })), o.createElement("div", {
                    className: "item-text-group"
                }, e.components.text1.value ? o.createElement("div", {
                    className: "item-title s-font-heading"
                }, n("Sections|" + e.components.text1.value)) : null, e.components.text2.value ? o.createElement("div", {
                    className: "item-body-text s-font-body"
                }, this._getOmittedStringByCharNum(n("Sections|" + e.components.text2.value), 60)) : null, this.props.content.components.slideSettings.layout_config.showButton ? o.createElement("div", {
                    className: "button list-btn"
                }, n("Sections|" + e.components.button1.text)) : null))
            }
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-feature-list-thumb s-section-thumb " + this._getSectionTypeClass()
                }, o.createElement.apply(this, ["div", {
                    className: "s-section-thumb-content s-thumb-layout-" + this.props.content.components.slideSettings.layout_config.layout
                }, this.props.content.components.repeatable1.list.length ? i.map(this.props.content.components.repeatable1.list, l.bind(this)) : null]))
            }
        },
        19644: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(152160), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        343148: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578);

            function l(e, t) {
                return o.createElement("div", {
                    className: "feature-list-container",
                    key: t
                }, o.createElement("div", {
                    className: "list-img"
                }, o.createElement("img", {
                    src: this._getImageUrl(e.components.media1.image)
                })), o.createElement("div", {
                    className: "item-text-group"
                }, e.components.text1.value ? o.createElement("div", {
                    className: "item-title s-font-heading"
                }, n("Sections|" + e.components.text1.value)) : null, e.components.text2.value ? o.createElement("div", {
                    className: "item-body-text s-font-body"
                }, this._getOmittedStringByCharNum(n("Sections|" + e.components.text2.value), 60)) : null, this.props.content.components.slideSettings.layout_config.showButton ? o.createElement("div", {
                    className: "button list-btn"
                }, n("Sections|" + e.components.button1.text)) : null))
            }
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-feature-list-thumb s-section-thumb " + this._getSectionTypeClass()
                }, o.createElement.apply(this, ["div", {
                    className: "s-section-thumb-content s-thumb-layout-" + this.props.content.components.slideSettings.layout_config.layout
                }, this.props.content.components.repeatable1.list.length ? i.map(this.props.content.components.repeatable1.list, l.bind(this)) : null]))
            }
        },
        890128: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(152160), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        849946: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578);

            function l(e, t) {
                return o.createElement("div", {
                    className: "feature-list-container",
                    key: t
                }, o.createElement("div", {
                    className: "list-img"
                }, o.createElement("img", {
                    src: this._getImageUrl(e.components.media1.image)
                })), o.createElement("div", {
                    className: "item-text-group"
                }, e.components.text1.value ? o.createElement("div", {
                    className: "item-title s-font-heading"
                }, n("Sections|" + e.components.text1.value)) : null, e.components.text2.value ? o.createElement("div", {
                    className: "item-body-text s-font-body"
                }, this._getOmittedStringByCharNum(n("Sections|" + e.components.text2.value), 60)) : null, this.props.content.components.slideSettings.layout_config.showButton ? o.createElement("div", {
                    className: "button list-btn"
                }, n("Sections|" + e.components.button1.text)) : null))
            }
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-feature-list-thumb s-section-thumb " + this._getSectionTypeClass()
                }, o.createElement.apply(this, ["div", {
                    className: "s-section-thumb-content s-thumb-layout-" + this.props.content.components.slideSettings.layout_config.layout
                }, this.props.content.components.repeatable1.list.length ? i.map(this.props.content.components.repeatable1.list, l.bind(this)) : null]))
            }
        },
        568365: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(848388), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        293302: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578);

            function l(e, t) {
                return o.createElement("div", {
                    className: "gallery-image",
                    key: t
                }, o.createElement("img", {
                    src: this._getImageUrl(e, !1)
                }), o.createElement("div", {
                    className: "image-title item-title s-font-heading"
                }, n("Editor|Image Title")))
            }
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery1-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, this.props.content.components.gallery1.sources.length ? o.createElement.apply(this, ["div", {
                    className: "gallery-media"
                }, i.map(this._getRepetableList(this.props.content.components.gallery1.sources, 4), l.bind(this))]) : null))
            }
        },
        437600: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(848388), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        134878: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = a(914578);

            function i(e, t) {
                return n.createElement("div", {
                    className: "gallery-image",
                    key: t
                }, n.createElement("img", {
                    src: this._getImageUrl(e, !0)
                }))
            }
            e.exports = function() {
                return n.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery2-thumb s-section-thumb"
                }, n.createElement("div", {
                    className: "s-section-thumb-content"
                }, this.props.content.components.gallery1.sources.length ? n.createElement.apply(this, ["div", {
                    className: "gallery-media"
                }, o.map(this._getRepetableList(this.props.content.components.gallery1.sources, 6), i.bind(this))]) : null))
            }
        },
        444195: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(848388), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        36176: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), e.exports = function() {
                return n.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery3-thumb s-section-thumb"
                }, n.createElement("div", {
                    className: "s-section-thumb-content"
                }, n.createElement("div", {
                    className: "gallery-media"
                }, n.createElement("div", {}, n.createElement("div", {
                    className: "gallery-image"
                }, n.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[0], !0),
                    className: "image-0"
                })), n.createElement("div", {
                    className: "gallery-image"
                }, n.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[2], !0),
                    className: "image-2"
                }))), n.createElement("div", {}, n.createElement("div", {
                    className: "gallery-image"
                }, n.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[1], !0),
                    className: "image-1"
                })), n.createElement("div", {
                    className: "gallery-image"
                }, n.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[3], !0),
                    className: "image-3"
                }))))))
            }
        },
        370631: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(848388), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        5246: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), e.exports = function() {
                return n.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery4-thumb s-section-thumb"
                }, n.createElement("div", {
                    className: "s-section-thumb-content"
                }, n.createElement("div", {
                    className: "gallery-media"
                }, n.createElement("div", {}, n.createElement("div", {
                    className: "gallery-image"
                }, n.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[0], !0),
                    className: "image-0"
                }))), n.createElement("div", {}, n.createElement("div", {
                    className: "gallery-image"
                }, n.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[1], !0),
                    className: "image-1"
                })), n.createElement("div", {
                    className: "gallery-image"
                }, n.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[3], !0),
                    className: "image-3"
                }))), n.createElement("div", {}, n.createElement("div", {
                    className: "gallery-image"
                }, n.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[2], !0),
                    className: "image-2"
                })), n.createElement("div", {
                    className: "gallery-image"
                }, n.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.gallery1.sources[4], !0),
                    className: "image-4"
                }))))))
            }
        },
        411486: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(848388), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        90408: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578);

            function l(e, t) {
                return o.createElement("div", {
                    className: "gallery-image",
                    key: t
                }, o.createElement("div", {
                    className: "image",
                    style: {
                        backgroundImage: "url(" + this._getImageUrl(e, !0) + ")"
                    }
                }), o.createElement("div", {
                    className: "image-title item-title s-font-heading"
                }, n("Editor|Image Title")))
            }
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery5-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, this.props.content.components.gallery1.sources.length ? o.createElement.apply(this, ["div", {
                    className: "gallery-media"
                }, i.map(this._getRepetableList(this.props.content.components.gallery1.sources, 2), l.bind(this))]) : null))
            }
        },
        447167: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(848388), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        268163: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = a(914578);

            function i(e, t) {
                return n.createElement("div", {
                    className: "gallery-image",
                    key: t
                }, n.createElement("div", {
                    className: "image",
                    style: {
                        backgroundImage: "url(" + this._getImageUrl(e, !0) + ")"
                    }
                }))
            }
            e.exports = function() {
                return n.createElement("div", {
                    className: "no-bg s-gallery-thumb s-gallery6-thumb s-section-thumb"
                }, n.createElement("div", {
                    className: "s-section-thumb-content"
                }, this.props.content.components.gallery1.sources.length ? n.createElement.apply(this, ["div", {
                    className: "gallery-media"
                }, o.map(this._getRepetableList(this.props.content.components.gallery1.sources, 4), i.bind(this))]) : null))
            }
        },
        765146: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(259476), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        57451: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = a(914578);

            function i(e, t) {
                return n.createElement("div", {
                    className: "grid-thumb-item"
                }, n.createElement("div", {
                    className: "grid-thumb-item-content",
                    style: this._getBackgroundStyle(e.components.background1)
                }, n.createElement("div", {
                    className: "s-item-title"
                }, "\n            ", e.components.text1.value, "\n          ")))
            }
            e.exports = function() {
                return n.createElement("div", {
                    className: "s-grid-thumb s-section-thumb",
                    "=undefined": !0
                }, n.createElement("div", {
                    className: "s-section-thumb-content"
                }, n.createElement.apply(this, ["div", {
                    className: "grid-thumb-container"
                }, o.map(this.props.content.components.repeatable1.list, i.bind(this))])))
            }
        },
        658077: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = (a(914578), a(271866)),
                l = a(589499);
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-html-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text2.value)
                    }
                })), o.createElement("div", {
                    className: "app-store-thumb"
                }, o.createElement(i, {}, o.createElement("img", {
                    src: "//uploads.strikinglycdn.com/static/sections/content/appstore.jpg"
                }), o.createElement("img", {
                    src: l.cdnAssetPath("/images/editor2/appstore-sxl-1-min.png")
                }))))))
            }
        },
        4390: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = (a(914578), a(531468));
            e.exports = function() {
                return n.createElement("div", {}, "\n  ", o.apply(this), "\n")
            }
        },
        924750: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578);

            function l(e, t) {
                return o.createElement("div", {
                    key: t
                }, o.createElement("div", {
                    className: "media-image-thumb"
                }, o.createElement("img", {
                    src: this._getImageUrl(e.components.media1.image)
                })), e.components.text1.value ? o.createElement("div", {
                    className: "item-body-text s-font-body",
                    dangerouslySetInnerHTML: {
                        __html: e.components.text1.value
                    }
                }) : null)
            }
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-media-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement.apply(this, ["div", {
                    className: "big-media p100 top"
                }, o.createElement("div", {
                    className: "top-content"
                }, o.createElement("div", {
                    className: "title"
                }, n("Sections|How to Build a Website Like a Professional")), o.createElement("div", {
                    className: "subtitle"
                }, n("Sections|Become a member to get unlimited access and support the voices you want to hear more from."))), i.map(this.props.content.components.repeatable1.list, l.bind(this))])))
            }
        },
        718773: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = (a(914578), a(531468));
            e.exports = function() {
                return n.createElement("div", {}, "\n  ", o.apply(this), "\n")
            }
        },
        642958: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757);
            a(914578), e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-media-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "big-media bottom p100"
                }, this.props.content.components.repeatable1.list[0] ? o.createElement("div", {}, o.createElement("div", {
                    className: "media-image-thumb"
                }, o.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.repeatable1.list[0].components.media1.image)
                }))) : null, o.createElement("div", {
                    className: "bottom-content"
                }, o.createElement("div", {
                    className: "title"
                }, n("Sections|How to Build a Website Like a Professional")), o.createElement("div", {
                    className: "subtitle"
                }, n("Sections|Become a member to get unlimited access and support the voices you want to hear more from."))))))
            }
        },
        347072: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = (a(914578), a(531468));
            e.exports = function() {
                return n.createElement("div", {}, "\n  ", o.apply(this), "\n")
            }
        },
        119775: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757);
            a(914578), e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-media-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "big-media left p100"
                }, this.props.content.components.repeatable1.list[0] ? o.createElement("div", {
                    className: "left-media-group"
                }, o.createElement("div", {
                    className: "media-image-thumb"
                }, o.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.repeatable1.list[0].components.media1.image)
                }))) : null, o.createElement("div", {
                    className: "left-content"
                }, o.createElement("div", {
                    className: "title"
                }, n("Sections|How to Build a Website Like a Professional")), o.createElement("div", {
                    className: "subtitle"
                }, n("Sections|Become a member to get unlimited access and support the voices you want to hear more from."))))))
            }
        },
        282074: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578),
                l = a(589499);

            function r(e, t) {
                return o.createElement("div", {
                    className: "column-image",
                    key: t
                }, o.createElement("div", {
                    className: "image-wrapper"
                }, o.createElement("img", {
                    src: l.cdnAssetPath(this._getImageUrl(e.components.media1.image))
                })), o.createElement("div", {
                    className: "item-text-group"
                }, e.components.text1.value ? o.createElement("div", {
                    className: "item-title s-font-heading",
                    dangerouslySetInnerHTML: {
                        __html: e.components.text1.value
                    }
                }) : null))
            }
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-portfolio-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text2.value)
                    }
                }))), this.props.content.components.repeatable1.list.length ? o.createElement("div", {
                    className: "p100"
                }, o.createElement.apply(this, ["div", {
                    className: "columns-media"
                }, i.map(this._getRepetableList(this.props.content.components.repeatable1.list), r.bind(this))])) : null))
            }
        },
        283238: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(984806), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        763542: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = (a(914578), a(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-pricing-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text2.value)
                    }
                }))), o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "pricing-thumb"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/pricing_thumb-1.png")
                })))))
            }
        },
        868437: function(e, t, a) {
            "use strict";
            var n = a(366757),
                o = a(914578);

            function i(e, t) {
                return n.createElement("div", {
                    className: "info-box",
                    key: t
                }, n.createElement("div", {
                    className: "number-box",
                    dangerouslySetInnerHTML: {
                        __html: t + 1
                    }
                }), e.components.text1.value ? n.createElement("div", {
                    className: "item-title s-font-heading",
                    dangerouslySetInnerHTML: {
                        __html: e.components.text1.value
                    }
                }) : null, e.components.text2.value ? n.createElement("div", {
                    className: "item-subtitle s-font-body",
                    dangerouslySetInnerHTML: {
                        __html: e.components.text2.value
                    }
                }) : null)
            }
            e.exports = function() {
                return n.createElement("div", {
                    className: "s-process-thumb s-section-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, n.createElement("div", {
                    className: "s-section-thumb-content"
                }, n.createElement("div", {
                    className: "p100"
                }, n.createElement("div", {
                    className: "title-group"
                }, this.props.content.components.text1.value ? n.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: this.props.content.components.text1.value
                    }
                }) : null)), n.createElement("div", {
                    className: "p100"
                }, n.createElement.apply(this, ["div", {
                    className: "info-boxes"
                }, o.map(this._getRepetableList(this.props.content.components.repeatable1.list, 3), i.bind(this))]))))
            }
        },
        687006: function(e, t, a) {
            "use strict";
            var n = a(366757);
            a(914578), a(100570), e.exports = function() {
                return n.createElement("div", {}, "\n  ", this.renderSection(), "\n")
            }
        },
        978122: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = (a(914578), a(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-block-thumb s-section-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title"
                }, n("Make Your Own Section!")))), o.createElement("div", {}, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/block-components.png")
                }))))
            }
        },
        563657: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757);
            a(914578), e.exports = function() {
                return o.createElement("div", {
                    className: "s-section-thumb s-signup-thumb " + this._getBackgroundClass(),
                    style: this._getBackgroundStyle()
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text2.value)
                    }
                })), o.createElement("div", {
                    className: "form-thumb s-font-body"
                }, o.createElement("input", {
                    placeholder: n("Sections|" + this.props.content.components.email1.name_label)
                }), o.createElement("input", {
                    placeholder: n("Sections|" + this.props.content.components.email1.email_label)
                }), o.createElement("div", {
                    className: "button"
                }, n("Sections|" + this.props.content.components.email1.submit_label))))))
            }
        },
        812938: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = a(914578);

            function l() {
                var e = this.props.content.components.slideSettings.layout_variation;
                return o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100 " + i.keys(i.pick({
                        "dark-overlays": "noForeground" !== e
                    }, i.identity)).join(" ")
                }, "noForeground" !== e ? o.createElement("div", {
                    className: "s-slider-demo"
                }, o.createElement("div", {
                    className: "title-media"
                }, o.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)
                })), o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.slider1.list[0].components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.slider1.list[0].components.text2.value)
                    }
                }), o.createElement("div", {
                    className: "button s-font-body"
                }, n("Sections|" + this.props.content.components.slider1.list[0].components.button1.text))) : null))
            }

            function r() {
                var e = this.props.content.components.slideSettings.layout_variation;
                return o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100 " + i.keys(i.pick({
                        "dark-overlays": "noForeground" !== e
                    }, i.identity)).join(" ")
                }, "noForeground" !== e ? o.createElement("div", {
                    className: "s-slider-demo"
                }, o.createElement("div", {
                    className: "title-media"
                }, o.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.slider1.list[1].components.media1.image)
                })), o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.slider1.list[1].components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.slider1.list[1].components.text2.value)
                    }
                }), o.createElement("div", {
                    className: "button s-font-body"
                }, n("Sections|" + this.props.content.components.slider1.list[1].components.button1.text))) : null))
            }

            function s() {
                var e = this.props.content.components.slideSettings.layout_variation;
                return o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "p100 " + i.keys(i.pick({
                        "dark-overlays": "noForeground" !== e
                    }, i.identity)).join(" ")
                }, "noForeground" !== e ? o.createElement("div", {
                    className: "s-slider-demo"
                }, o.createElement("div", {
                    className: "title-media"
                }, o.createElement("img", {
                    src: this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)
                })), o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.slider1.list[0].components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.slider1.list[0].components.text2.value)
                    }
                }), o.createElement("div", {
                    className: "button s-font-body"
                }, n("Sections|" + this.props.content.components.slider1.list[0].components.button1.text))) : null))
            }

            function u() {
                var e = this.props.content.components.slideSettings.layout_variation;
                return o.createElement("div", {
                    className: "thumb-slider-controller"
                }, o.createElement("div", {
                    className: "prev-arrow " + i.keys(i.pick({
                        "dark-overlays": "noForeground" !== e
                    }, i.identity)).join(" ")
                }), o.createElement("div", {
                    className: "next-arrow " + i.keys(i.pick({
                        "dark-overlays": "noForeground" !== e
                    }, i.identity)).join(" ")
                }), o.createElement("div", {
                    className: "selector-container " + i.keys(i.pick({
                        "no-foreground": "noForeground" === e
                    }, i.identity)).join(" ")
                }, o.createElement("div", {
                    className: "selector-inner"
                }, o.createElement("div", {
                    className: "selected selector"
                }), o.createElement("div", {
                    className: "selector"
                }))))
            }
            e.exports = function() {
                return o.createElement("div", {
                    className: "s-section-thumb s-slider-thumb"
                }, o.createElement("div", {
                    className: "thumb-slider-wrapper"
                }, o.createElement("div", {
                    className: "s-slider-thumb-wrap " + this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),
                    style: this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)
                }, l.apply(this, [])), o.createElement("div", {
                    className: "s-slider-thumb-wrap " + this._getBackgroundClass(this.props.content.components.slider1.list[1].components.background1),
                    style: this._getBackgroundStyle(this.props.content.components.slider1.list[1].components.background1)
                }, r.apply(this, [])), o.createElement("div", {
                    className: "s-slider-thumb-wrap " + this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),
                    style: this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)
                }, s.apply(this, []))), u.apply(this, []))
            }
        },
        245855: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(366757),
                i = (a(914578), a(589499));
            e.exports = function() {
                return o.createElement("div", {
                    className: "no-bg s-section-thumb s-social-thumb"
                }, o.createElement("div", {
                    className: "s-section-thumb-content"
                }, o.createElement("div", {
                    className: "title-group"
                }, o.createElement("div", {
                    className: "s-font-title title",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text1.value)
                    }
                }), o.createElement("div", {
                    className: "s-font-heading subtitle",
                    dangerouslySetInnerHTML: {
                        __html: n("Sections|" + this.props.content.components.text2.value)
                    }
                })), o.createElement("div", {
                    className: "social-thumb"
                }, o.createElement("img", {
                    src: i.cdnAssetPath("/images/editor2/social_feed_thumb.png")
                }))))
            }
        },
        703599: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(812077),
                s = (0, l.default)(r),
                u = a(726394),
                d = (0, l.default)(u),
                c = a(569198),
                f = (0, l.default)(c),
                m = a(351379),
                g = (0, l.default)(m),
                p = a(900214),
                h = (0, l.default)(p),
                v = a(566380),
                y = (0, l.default)(v),
                b = a(366757),
                _ = (0, l.default)(b),
                C = a(45697),
                N = ((0, l.default)(C), a(176965));
            (0, l.default)(N);
            var w = function(e) {
                (0, g.default)(l, e);
                var t, a, i = (t = l, a = function() {
                    if ("undefined" == typeof Reflect || !o) return !1;
                    if (o.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = (0, y.default)(t);
                    if (a) {
                        var i = (0, y.default)(this).constructor;
                        e = o(n, arguments, i)
                    } else e = n.apply(this, arguments);
                    return (0, h.default)(this, e)
                });

                function l() {
                    return (0, d.default)(this, l), i.apply(this, arguments)
                }
                return (0, f.default)(l, [{
                    key: "render",
                    value: function() {
                        return (0, s.default)("div", {
                            className: "s-checkbox"
                        }, void 0, (0, s.default)("input", {
                            type: "checkbox",
                            checked: this.props.checked,
                            onChange: this.props.onToggle
                        }), (0, s.default)("label", {
                            className: "hint ".concat(this.props.small ? "small" : ""),
                            onClick: this.props.onToggle
                        }, void 0, n(this.props.label)))
                    }
                }]), l
            }(_.default.Component);
            t.default = w, e.exports = t.default
        },
        716505: function(e, t, a) {
            "use strict";
            var n = a(501068),
                o = a(686902),
                i = a(14310),
                l = a(620116),
                r = a(834074),
                s = a(778914),
                u = a(239649),
                d = a(820368),
                c = a(663978),
                f = a(60530)(a(60530));
            c(t, "__esModule", {
                value: !0
            });
            var m = a(205872),
                g = (0, f.default)(m),
                p = a(812077),
                h = (0, f.default)(p),
                v = a(726394),
                y = (0, f.default)(v),
                b = a(569198),
                _ = (0, f.default)(b),
                C = a(351379),
                N = (0, f.default)(C),
                w = a(900214),
                x = (0, f.default)(w),
                k = a(566380),
                E = (0, f.default)(k),
                L = a(487672),
                S = (0, f.default)(L);
            a(974916), a(323123), a(569600), a(115306);
            var B = a(981643),
                T = ((0, f.default)(B), a(2991)),
                P = (0, f.default)(T),
                I = a(54103),
                O = (0, f.default)(I),
                M = a(25843),
                D = (0, f.default)(M),
                R = a(666419),
                A = (0, f.default)(R),
                U = a(936384),
                H = (0, f.default)(U),
                F = a(620116),
                V = (0, f.default)(F),
                Z = a(678580),
                z = (0, f.default)(Z),
                K = a(729828),
                W = (0, f.default)(K),
                j = a(51942),
                G = (0, f.default)(j),
                Y = a(977766),
                q = (0, f.default)(Y),
                J = a(359340),
                Q = (0, f.default)(J),
                $ = a(366757),
                X = (0, f.default)($),
                ee = a(45697),
                te = ((0, f.default)(ee), a(43138)),
                ae = ((0, f.default)(te), a(973935)),
                ne = ((0, f.default)(ae), a(143268)),
                oe = a(818166),
                ie = (0, f.default)(oe),
                le = a(851922),
                re = (0, f.default)(le),
                se = a(408072),
                ue = a(294184),
                de = (0, f.default)(ue),
                ce = a(914578),
                fe = (0, f.default)(ce),
                me = a(223336),
                ge = (0, f.default)(me),
                pe = a(837337),
                he = (0, f.default)(pe);

            function ve(e, t) {
                var a = o(e);
                if (i) {
                    var n = i(e);
                    t && (n = l(n).call(n, (function(t) {
                        return r(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a, n = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) s(a = ve(Object(n), !0)).call(a, (function(t) {
                        (0, S.default)(e, t, n[t])
                    }));
                    else if (u) d(e, u(n));
                    else {
                        var o;
                        s(o = ve(Object(n))).call(o, (function(t) {
                            c(e, t, r(n, t))
                        }))
                    }
                }
                return e
            }
            var be = "undefined" != typeof window,
                _e = Boolean(be && window.document && window.document.createElement);
            _e && (a(777090), document.addEventListener("lazybeforeunveil", (function(e) {
                var t;
                e.defaultPrevented || (t = e.target.getAttribute("data-bg")) && (e.target.style.backgroundImage = "url(".concat(t, ")"), lazySizes.fire(e.target, "_lazyloaded", {}, !0, !0))
            })));
            var Ce = (0, he.default)("div", {
                    target: "css-znugt10"
                })("position:absolute;top:0;left:0;width:100%;height:100%;line-height:1;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);transition:all ease-in 0.2s;&.loaded{-webkit-backdrop-filter:blur(0px);backdrop-filter:blur(0px);visibility:hidden;}"),
                Ne = function(e) {
                    (0, N.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !n) return !1;
                        if (n.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, E.default)(t);
                        if (a) {
                            var i = (0, E.default)(this).constructor;
                            e = n(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, x.default)(this, e)
                    });

                    function i(e) {
                        var t;
                        (0, y.default)(this, i);
                        var a = (t = o.call(this, e)).props.dataSrc;
                        return t.state = {
                            isBackgroundImageLoaded: !a,
                            canUseFocus: !1
                        }, t
                    }
                    return (0, _.default)(i, [{
                        key: "componentWillMount",
                        value: function() {
                            this.updateEnableBackgroundAnimationsInState()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e, t = this,
                                a = this.props.dataSrc;
                            a && (this.backgroundImageCopy = new Image, this.backgroundImageCopy.src = a, this.backgroundImageCopy.onload = function() {
                                t.setState({
                                    isBackgroundImageLoaded: !0
                                })
                            }, this.backgroundImageCopy.onerror = function() {
                                t.setState({
                                    isBackgroundImageLoaded: !0
                                })
                            }), this.afterResize = fe.default.debounce((0, O.default)(e = this.afterResize).call(e, this), 300), (0, ge.default)(window).on("resize", this.afterResize)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            this.updateEnableBackgroundAnimationsInState(e)
                        }
                    }, {
                        key: "componentWillUpdate",
                        value: function(e) {
                            for (var t = this.lazyElement, a = !1, n = 0, o = ["src", "dataSrc"]; n < o.length; n++) {
                                var i = o[n];
                                if (this.props[i] !== e[i]) {
                                    a = !0;
                                    break
                                }
                            }
                            if (a && t && t.classList.contains("lazyloaded") && t.classList.remove("lazyloaded"), t) {
                                var l, r, s = this.props.className,
                                    u = function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                                        return (0, D.default)(e).call(e)
                                    },
                                    d = (0, P.default)(l = s.split(" ")).call(l, u),
                                    c = (0, A.default)(new H.default((0, P.default)(r = t.className.split(" ")).call(r, u))),
                                    f = (0, V.default)(c).call(c, (function(e) {
                                        return "background-image" !== e && e && !(0, z.default)(d).call(d, e) && !(0, W.default)(e).call(e, "_")
                                    }));
                                this.extraClass = f.join(" ")
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            var e = this.lazyElement;
                            !e || e.classList.contains("lazyloaded") || e.classList.contains("lazyload") || e.classList.add("lazyload")
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            (0, ge.default)(window).off("resize", this.afterResize), this.removeImageLoadListener()
                        }
                    }, {
                        key: "getContainerSize",
                        value: function() {
                            var e = this.lazyElement || {
                                clientWidth: 0,
                                clientHeight: 0
                            };
                            return {
                                width: e.clientWidth,
                                height: e.clientHeight
                            }
                        }
                    }, {
                        key: "removeImageLoadListener",
                        value: function() {
                            this.backgroundImageCopy && (this.backgroundImageCopy.onload = function() {}, this.backgroundImageCopy = null)
                        }
                    }, {
                        key: "afterResize",
                        value: function() {
                            this.updateEnableBackgroundAnimationsInState()
                        }
                    }, {
                        key: "updateEnableBackgroundAnimationsInState",
                        value: function(e) {
                            var t = "contain" !== (e = e || this.props).style.backgroundSize,
                                a = "none" !== e.animations.background && (0, se.areBackgroundAnimationsEnabledOnThisDevice)() && t;
                            this.state.enableBackgroundAnimations !== a && this.setState({
                                enableBackgroundAnimations: a
                            }), this.setState({
                                canUseFocus: !a || be && window.innerWidth <= 700
                            })
                        }
                    }, {
                        key: "imagePositioningIsCenter",
                        value: function(e) {
                            return "auto" === (e = e || this.props).style.backgroundSize && "50% 50%" === e.style.backgroundPosition && "repeat" !== e.style.backgroundRepeat
                        }
                    }, {
                        key: "renderBackgroundImage",
                        value: function() {
                            var e, t, a, n = this,
                                o = this.props,
                                i = o.className,
                                l = o.src,
                                r = o.dataSrc,
                                s = o.eagerLoad,
                                u = o.image,
                                d = o.textColor,
                                c = o.isFullContent,
                                f = (o.sectionIndex, this.state),
                                m = f.enableBackgroundAnimations,
                                p = f.canUseFocus,
                                v = f.isBackgroundImageLoaded,
                                y = m ? " _animate-background" : "";
                            this.imagePositioningIsCenter() && (y += " _image-position-center");
                            var b = this.props.style,
                                _ = u && u.getFocusCoordinate(),
                                C = this.getContainerSize(),
                                N = v > 0 ? "loaded" : "";
                            if (p && _ && C.width > 0 && (b = (0, G.default)({}, b, {
                                    backgroundPosition: u.transformFocusToBackgroundPosition(C)
                                })), s) {
                                var w, x = r;
                                return b = (0, G.default)({}, b, {
                                    backgroundImage: "url(".concat(x, ")")
                                }), X.default.createElement("div", {
                                    className: "lazyload ".concat(i + y, " background-image"),
                                    ref: function(e) {
                                        return n.lazyElement = e
                                    },
                                    style: b,
                                    "data-bg": r,
                                    "data-react-style": this.getDataReactStyle(b)
                                }, r && (0, h.default)(Ce, {
                                    className: (0, de.default)("blurred-layer", {
                                        loaded: !0
                                    })
                                }), p && _ && (0, h.default)("div", {
                                    className: (0, q.default)(w = "background-overlay overlay-".concat(d, " ")).call(w, N)
                                }), c ? [r ? (0, h.default)("img", {
                                    src: r,
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        opacity: 0
                                    }
                                }) : null, (0, h.default)("div", {
                                    style: {
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%"
                                    }
                                }, void 0, this.props.children)] : this.props.children)
                            }
                            var k = {};
                            if (r) {
                                var E = _e ? l : r;
                                b = ye(ye({}, b), {}, {
                                    backgroundImage: "url(".concat(E, ")")
                                }), k = {
                                    "data-bg": r
                                }
                            }
                            return X.default.createElement("div", (0, g.default)({
                                className: (0, q.default)(e = (0, q.default)(t = "lazyload ".concat(this.extraClass || "", " ")).call(t, i)).call(e, y, " background-image"),
                                style: b
                            }, k, {
                                ref: function(e) {
                                    return n.lazyElement = e
                                },
                                "data-react-style": this.getDataReactStyle(b)
                            }), r && (0, h.default)(Ce, {
                                className: (0, de.default)("blurred-layer", {
                                    loaded: !0
                                })
                            }), p && _ && (0, h.default)("div", {
                                className: (0, q.default)(a = "background-overlay overlay-".concat(d, " ")).call(a, N)
                            }), c ? [r ? (0, h.default)("img", {
                                src: r,
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    opacity: 0
                                }
                            }) : null, (0, h.default)("div", {
                                style: {
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%"
                                }
                            }, void 0, this.props.children)] : this.props.children)
                        }
                    }, {
                        key: "getDataReactStyle",
                        value: function(e) {
                            return e = e || {}, e = fe.default.omit(e, "backgroundImage"), (0, Q.default)(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.linkTarget,
                                a = e.linkUrl,
                                n = this.renderBackgroundImage(),
                                o = (0, ne.addProtocol)(a);
                            return a && t ? (0, h.default)("a", {
                                href: o,
                                target: t
                            }, void 0, n) : n
                        }
                    }]), i
                }(X.default.Component);
            (0, S.default)(Ne, "defaultProps", {
                className: "",
                style: {},
                eagerLoad: !1,
                src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                linkUrl: null,
                linkTarget: null,
                image: null,
                textColor: "",
                backgroundColor: null
            });
            var we = (0, re.default)(Ne, [ie.default], (function() {
                return {
                    animations: ie.default.getSiteAnimations()
                }
            }));
            t.default = we, e.exports = t.default
        },
        788898: function(e, t, a) {
            "use strict";
            var n = a(501068),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l, r = a(812077),
                s = (0, i.default)(r),
                u = a(726394),
                d = (0, i.default)(u),
                c = a(569198),
                f = (0, i.default)(c),
                m = a(351379),
                g = (0, i.default)(m),
                p = a(900214),
                h = (0, i.default)(p),
                v = a(566380),
                y = (0, i.default)(v),
                b = a(2991),
                _ = (0, i.default)(b),
                C = a(977766),
                N = (0, i.default)(C),
                w = a(366757),
                x = (0, i.default)(w),
                k = a(45697);
            (0, i.default)(k);
            var E = function(e) {
                (0, g.default)(i, e);
                var t, a, o = (t = i, a = function() {
                    if ("undefined" == typeof Reflect || !n) return !1;
                    if (n.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, o = (0, y.default)(t);
                    if (a) {
                        var i = (0, y.default)(this).constructor;
                        e = n(o, arguments, i)
                    } else e = o.apply(this, arguments);
                    return (0, h.default)(this, e)
                });

                function i() {
                    return (0, d.default)(this, i), o.apply(this, arguments)
                }
                return (0, f.default)(i, [{
                    key: "render",
                    value: function() {
                        var e = this.props.options;
                        return (0, s.default)("div", {
                            className: "s-binary-switcher s-multi-switcher"
                        }, void 0, (0, s.default)("div", {
                            className: "capsule"
                        }, void 0, (0, _.default)(e).call(e, (function(t, a) {
                            var n;
                            return (0, s.default)("div", {
                                className: (0, N.default)(n = "option".concat(t.checked ? " selected" : "", " ")).call(n, t.label.length > 5 ? "long-text" : ""),
                                onClick: t.onClick
                            }, void 0, (0, s.default)("span", {}, void 0, t.label), a !== e.length - 1 && !e[a + 1].checked && !t.checked && (l || (l = (0, s.default)("span", {
                                className: "separater"
                            }))))
                        }))))
                    }
                }]), i
            }(x.default.Component);
            t.default = E, e.exports = t.default
        },
        173327: function(e, t, a) {
            "use strict";
            var n = a(501068),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(812077),
                r = (0, i.default)(l),
                s = a(726394),
                u = (0, i.default)(s),
                d = a(569198),
                c = (0, i.default)(d),
                f = a(705824),
                m = (0, i.default)(f),
                g = a(351379),
                p = (0, i.default)(g),
                h = a(900214),
                v = (0, i.default)(h),
                y = a(566380),
                b = (0, i.default)(y),
                _ = a(487672),
                C = (0, i.default)(_);
            a(974916), a(804723);
            var N = a(366757),
                w = (0, i.default)(N),
                x = a(45697),
                k = ((0, i.default)(x), a(234584)),
                E = (0, i.default)(k),
                L = a(851922),
                S = (0, i.default)(L),
                B = a(914578),
                T = ((0, i.default)(B), a(223336)),
                P = ((0, i.default)(T), a(589499)),
                I = a(469155),
                O = (0, i.default)(I);
            var M = function(e) {
                    (0, p.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !n) return !1;
                        if (n.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, b.default)(t);
                        if (a) {
                            var i = (0, b.default)(this).constructor;
                            e = n(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, v.default)(this, e)
                    });

                    function i(e) {
                        var t;
                        return (0, u.default)(this, i), t = o.call(this, e), (0, C.default)((0, m.default)(t), "_renderICPFilingNumber", (function() {
                            var e = t.props.ICPFilingNumber;
                            if (e) {
                                var a = e || "xICP备xxxxxxxx号";
                                return (0, r.default)("div", {
                                    className: "s-regulation-icp s-regulation-item ".concat(e ? "text" : "placeholder")
                                }, void 0, (0, r.default)("a", {
                                    href: "https://beian.miit.gov.cn/",
                                    target: "_blank"
                                }, void 0, a))
                            }
                        })), (0, C.default)((0, m.default)(t), "_renderPSBFilingNumber", (function() {
                            var e = t.props.PSBFilingNumber,
                                a = void 0 === e ? "" : e;
                            if (a) {
                                var n = a && a.match(/\d{14}(-[1-9]\d?)?/) || [],
                                    o = "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=".concat(n[0]),
                                    i = a || "x公网安备xxxxxxxxxxxxxx号",
                                    l = (0, r.default)("img", {
                                        className: "psb-icon",
                                        src: (0, P.cdnAssetPath)("/images/landing-sxl/gongan-beian.png")
                                    });
                                return (0, r.default)("div", {
                                    className: "s-regulation-psb s-regulation-item ".concat(a ? "text" : "placeholder")
                                }, void 0, (0, r.default)("a", {
                                    href: o,
                                    target: "_blank"
                                }, void 0, l, i))
                            }
                        })), (0, C.default)((0, m.default)(t), "_renderRegualtionInnner", (function() {
                            var e = t.props,
                                a = e.ICPFilingNumber,
                                n = e.PSBFilingNumber;
                            if (!a && !n) return null;
                            var o = a && n;
                            return (0, r.default)("div", {
                                className: "s-regulation-inner"
                            }, void 0, t._renderPSBFilingNumber(), o && (0, r.default)("span", {
                                className: "slash ".concat(a && n ? "" : "placeholder")
                            }, void 0, "|"), t._renderICPFilingNumber())
                        })), (0, C.default)((0, m.default)(t), "onClickEditor", (function() {
                            O.default.gotoSettingsPage(!0)
                        })), t.state = {}, t
                    }
                    return (0, c.default)(i, [{
                        key: "render",
                        value: function() {
                            return this.props.customDomain, null
                        }
                    }]), i
                }(w.default.Component),
                D = (0, S.default)(M, [E.default], (function() {
                    return {
                        ICPFilingNumber: E.default.getICPFilingNumber(),
                        PSBFilingNumber: E.default.getPSBFilingNumber(),
                        customDomain: E.default.getCustomDomain()
                    }
                }));
            t.default = D, e.exports = t.default
        },
        659370: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(914578),
                l = ((0, o.default)(i), a(62431)),
                r = a(825143),
                s = (0, o.default)(r);
            s.default.sharedProps = (0, l.sharedPropsBuilder)((function() {
                return []
            })), t.default = s.default, e.exports = t.default
        },
        316056: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(914578),
                l = ((0, o.default)(i), a(62431)),
                r = a(152551),
                s = (0, o.default)(r);
            s.default.sharedProps = (0, l.sharedPropsBuilder)((function() {
                return []
            })), t.default = s.default, e.exports = t.default
        },
        955804: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l, r = a(812077),
                s = (0, i.default)(r);
            t.default = function(e) {
                return (0, s.default)("div", {
                    className: "focus-panel s-point-right",
                    rel: m,
                    style: e.style,
                    title: n("Editor|Click the focal point of the image")
                }, void 0, "Set the focus of the image:", (0, s.default)("div", {
                    style: {
                        height: e.imageSize.height,
                        backgroundImage: "url(".concat(e.imgSrc, ")")
                    },
                    className: "focus-panel-draggable-wrapper focus-panel-background ",
                    onMouseDown: e.onMouseDownOnFocus
                }, void 0, e.showFocusIndicator && (0, s.default)(c.default, {
                    bounds: {
                        left: -e.focusIndicatorRadius,
                        right: e.imageSize.width - e.focusIndicatorRadius,
                        top: -e.focusIndicatorRadius,
                        bottom: e.imageSize.height - e.focusIndicatorRadius
                    },
                    onDrag: e.handleDrag,
                    onStop: e.onDragStop,
                    position: e.deltaPosition
                }, void 0, l || (l = (0, s.default)("div", {
                    className: "focus-indicator cursor"
                })))))
            };
            var u = a(366757),
                d = ((0, i.default)(u), a(485294)),
                c = (0, i.default)(d),
                f = a(183123),
                m = (0, i.default)(f).default.getIsRTLLayout() ? "tooltip-right" : "tooltip-left";
            e.exports = t.default
        },
        200292: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(223765),
                i = a(752424),
                l = a(663978),
                r = a(834074),
                s = a(60530)(a(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u = a(45697),
                d = (0, s.default)(u),
                c = a(223336),
                f = (0, s.default)(c),
                m = a(399069),
                g = (0, s.default)(m),
                p = a(695757),
                h = (0, s.default)(p),
                v = a(317118),
                y = (0, s.default)(v),
                b = a(157444),
                _ = (0, s.default)(b),
                C = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = S(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        i = l && r;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = i ? r(e, s) : null;
                            u && (u.get || u.set) ? l(n, s, u) : n[s] = e[s]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(143268)),
                N = a(230139),
                w = (0, s.default)(N),
                x = a(154920),
                k = (0, s.default)(x),
                E = a(123772),
                L = (0, s.default)(E);

            function S(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    a = new i;
                return (S = function(e) {
                    return e ? a : t
                })(e)
            }
            t.default = g.default.createPageComponent({
                displayName: "BackgroundVideoPanel",
                mixins: [(0, w.default)("editor")],
                bobcatPropTypes: {
                    callbacks: {
                        onComponentDidMount: d.default.func.isRequired,
                        updateVideoBg: d.default.func.isRequired,
                        showVideoPanel: d.default.bool.isRequired
                    }
                },
                componentWillMount: function() {
                    this.initMeta({
                        needToShowUrlError: !1,
                        tempVideoUrl: this.props.videoUrl,
                        isUploading: !1
                    })
                },
                componentDidMount: function() {
                    this.cbProps.onComponentDidMount()
                },
                _tempVideoUrl: function() {
                    return this.getMeta("tempVideoUrl")
                },
                _needToShowUrlError: function() {
                    return this.getMeta("needToShowUrlError")
                },
                _updateVideo: function(e) {
                    return this.cbProps.updateVideoBg(e)
                },
                _uploadSuccess: function(e, t) {
                    var a = this;
                    return function(o) {
                        var i = (0, f.default)(o.message.html),
                            l = i.attr("height"),
                            r = i.attr("width");
                        switch (t) {
                            case "youtube":
                                a._updateVideo({
                                    videoHtml: y.default.getYTIFrameHtml(y.default.getVideoID(e, t), r, l),
                                    videoUrl: e,
                                    url: y.default.getHDYTThumbnail(y.default.getVideoID(e, t)),
                                    lowResThumbnail: y.default.getNormalYTThumbnail(y.default.getVideoID(e, t)),
                                    actionState: "add"
                                });
                                break;
                            case "vimeo":
                                a._updateVideo({
                                    videoHtml: y.default.getVimeoIFrameHtml(y.default.getVideoID(e, t), r, l),
                                    videoUrl: e,
                                    url: o.message.thumbnail_url,
                                    actionState: "add"
                                });
                                break;
                            default:
                                window.alert(n("Video|Video format is not supported. Please use Youtube/Vimeo full URL only."))
                        }
                        a.updateMeta({
                            isUploading: !1,
                            needToShowUrlError: !1
                        }), a.savePage(), k.default.track("Editor - Add Video Background")
                    }
                },
                _uploadFail: function(e) {
                    status.responseJSON, this.updateMeta({
                        needToShowUrlError: !0,
                        isUploading: !1
                    })
                },
                _uploadVideo: function() {
                    this.updateMeta({
                        isUploading: !0
                    });
                    var e = C.addProtocol(this.getMeta("tempVideoUrl")),
                        t = y.default.getVideoType(e);
                    return h.default.upload({
                        url: e,
                        maxwidth: 1440,
                        success: this._uploadSuccess(e, t),
                        error: this._uploadFail
                    })
                },
                _onChangeUrl: function(e) {
                    this.updateMeta({
                        tempVideoUrl: _.default.escapedValue(e.target.value)
                    })
                },
                render: function() {
                    return L.default.apply(this)
                }
            }), e.exports = t.default
        },
        711827: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(223765),
                i = a(752424),
                l = a(663978),
                r = a(834074),
                s = a(60530)(a(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u = a(812077),
                d = (0, s.default)(u);
            a(241539), a(339714);
            var c = a(2991),
                f = (0, s.default)(c),
                m = a(694473),
                g = (0, s.default)(m),
                p = a(933032),
                h = (0, s.default)(p),
                v = a(366757),
                y = ((0, s.default)(v), a(45697)),
                b = (0, s.default)(y),
                _ = a(493658),
                C = (0, s.default)(_),
                N = a(143393),
                w = (0, s.default)(N),
                x = a(461853),
                k = (0, s.default)(x),
                E = a(399069),
                L = (0, s.default)(E),
                S = a(604990),
                B = (0, s.default)(S),
                T = a(234584),
                P = (0, s.default)(T),
                I = a(851922),
                O = (0, s.default)(I),
                M = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = D(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        i = l && r;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = i ? r(e, s) : null;
                            u && (u.get || u.set) ? l(n, s, u) : n[s] = e[s]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(43138));

            function D(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    a = new i;
                return (D = function(e) {
                    return e ? a : t
                })(e)
            }
            var R = L.default.createPageComponent({
                    mixins: [k.default.enableAfterUpdate()],
                    displayName: "BlogSectionCategorySelector",
                    bobcatPropTypes: {
                        data: {
                            category: b.default.object,
                            binding: b.default.object
                        }
                    },
                    getBobcatDefaultProps: function() {
                        return {
                            data: {
                                category: w.default.Map({
                                    id: "all"
                                })
                            }
                        }
                    },
                    componentDidMount: function() {
                        var e = this;
                        (0, this.props.addBlogCategoriesChangeListener)((function(t) {
                            "all" === e.props.category.get("id") || B.default.isCategoryIdExist(e.props.category.get("id")) ? t === e.props.category.get("id") && e.forceUpdate() : e._onChangeCategory({
                                value: "all"
                            })
                        }))
                    },
                    _createDropdownOptions: function() {
                        var e, t = this.props.getCategories,
                            a = this.props.category.get("id"),
                            o = (0, f.default)(e = t()).call(e, (function(e) {
                                return {
                                    value: e.id,
                                    label: e.id.toString() === a.toString() ? (0, d.default)("div", {
                                        className: "option capitalize selected"
                                    }, void 0, e.name) : (0, d.default)("div", {
                                        className: "option capitalize"
                                    }, void 0, e.name)
                                }
                            }));
                        return o.length && "all" !== a && o.unshift({
                            value: "all",
                            label: (0, d.default)("div", {
                                className: "option"
                            }, void 0, n("Sections|All Categories"))
                        }), o
                    },
                    _getSelectedCategoryName: function(e) {
                        var t = (0, this.props.getCategories)(),
                            a = (0, g.default)(t).call(t, (function(t) {
                                return t.id.toString() === e.toString()
                            }));
                        return a ? a.name : n("Sections|All Categories")
                    },
                    _onChangeCategory: function(e) {
                        var t = this,
                            a = e.value;
                        this.updateData({
                            category: {
                                id: a,
                                name: this._getSelectedCategoryName(a)
                            }
                        }), (0, h.default)((function() {
                            t.savePage()
                        }), 1)
                    },
                    render: function() {
                        var e = this.props.category;
                        return this._createDropdownOptions().length < 1 ? null : (0, d.default)("div", {
                            className: "s-component s-category-selector no-text-transform"
                        }, void 0, (0, d.default)("div", {
                            className: "s-component-editor",
                            rel: M.isSmallScreen() ? "tooltip-top" : "tooltip-left",
                            title: "all" === e.get("id") ? n("Sections|Select a category for this section.") : n("Sections|Only show posts from a certain category.")
                        }, void 0, (0, d.default)(C.default, {
                            options: this._createDropdownOptions(),
                            value: this._getSelectedCategoryName(this.props.category.get("id")),
                            onChange: this._onChangeCategory
                        })))
                    }
                }),
                A = (0, O.default)(R, [], (function() {
                    return {
                        pageId: P.default.getId()
                    }
                }), (function() {
                    return {
                        addBlogCategoriesChangeListener: function(e) {
                            B.default.addBlogCategoriesChangeListener(e)
                        },
                        getCategories: function() {
                            return B.default.getCategories()
                        }
                    }
                }));
            t.default = A, e.exports = t.default
        },
        655600: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(726394),
                s = (0, l.default)(r),
                u = a(569198),
                d = (0, l.default)(u),
                c = a(705824),
                f = (0, l.default)(c),
                m = a(351379),
                g = (0, l.default)(m),
                p = a(900214),
                h = (0, l.default)(p),
                v = a(566380),
                y = (0, l.default)(v),
                b = a(812077),
                _ = (0, l.default)(b),
                C = a(54103),
                N = (0, l.default)(C),
                w = a(366757),
                x = (0, l.default)(w),
                k = a(141655),
                E = (0, l.default)(k),
                L = a(103356),
                S = (0, l.default)(L),
                B = a(234584),
                T = (0, l.default)(B),
                P = a(513495),
                I = (0, l.default)(P),
                O = a(372742);
            var M = function(e) {
                    var t = e.leftPrice,
                        a = e.rightPrice,
                        n = {
                            width: "".concat(Math.min(t / a * 100, 100), "%")
                        },
                        o = {
                            left: "calc(".concat(Math.min(t / a * 100, 100), "% - 10px)")
                        };
                    return (0, _.default)("div", {
                        className: "progress-bar"
                    }, void 0, (0, _.default)("div", {
                        className: "progress",
                        style: n
                    }), (0, _.default)("div", {
                        className: "indicator",
                        style: o
                    }))
                },
                D = function(e) {
                    (0, g.default)(l, e);
                    var t, a, i = (t = l, a = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, y.default)(t);
                        if (a) {
                            var i = (0, y.default)(this).constructor;
                            e = o(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, h.default)(this, e)
                    });

                    function l(e) {
                        var t, a;
                        return (0, s.default)(this, l), (a = i.call(this, e))._listener = (0, N.default)(t = a._listener).call(t, (0, f.default)(a)), a
                    }
                    return (0, d.default)(l, [{
                        key: "componentDidMount",
                        value: function() {
                            E.default.getDonationSettings({
                                pageId: T.default.getId()
                            }), S.default.addChangeListener(this._listener)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            S.default.removeChangeListener(this._listener)
                        }
                    }, {
                        key: "_listener",
                        value: function() {
                            this.forceUpdate()
                        }
                    }, {
                        key: "_onClickOpenManager",
                        value: function() {
                            E.default.openDialog("donationManager")
                        }
                    }, {
                        key: "_onClickOpenDonateDialog",
                        value: function() {
                            E.default.openDialog("donateDialog", {
                                strong: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = S.default.getData(),
                                t = e.settings,
                                a = (e.state, e.currencyFormat);
                            return (0, _.default)("div", {
                                className: "s-component s-donation ".concat(this.props.sbClass ? this.props.sbClass : "")
                            }, void 0, !1, t.data.showProgress && (0, _.default)("div", {
                                className: "s-donation-progress"
                            }, void 0, (0, _.default)(M, {
                                leftPrice: t.paid,
                                rightPrice: t.goal
                            }), (0, _.default)("div", {
                                className: "left-price"
                            }, void 0, (0, _.default)("div", {
                                className: "price"
                            }, void 0, (0, O.getFormattedPrice)(t.paid, a)), (0, _.default)("div", {
                                className: "text"
                            }, void 0, n("Donation|Raised"))), (0, _.default)("div", {
                                className: "right-price"
                            }, void 0, (0, _.default)("div", {
                                className: "price"
                            }, void 0, (0, O.getFormattedPrice)(t.goal, a)), (0, _.default)("div", {
                                className: "text"
                            }, void 0, n("Donation|Goal")))), (0, _.default)(I.default, {
                                component: "div",
                                className: "s-common-button s-cta-button s-font-button",
                                onClick: this._onClickOpenDonateDialog
                            }, void 0, t.data.buttonText || n("Donation|Donate")))
                        }
                    }]), l
                }(x.default.Component);
            t.default = D, e.exports = t.default
        },
        658840: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(223765),
                i = a(752424),
                l = a(663978),
                r = a(834074),
                s = a(60530)(a(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u = a(812077),
                d = (0, s.default)(u);
            a(241539), a(339714);
            var c = a(2991),
                f = (0, s.default)(c),
                m = a(694473),
                g = (0, s.default)(m),
                p = a(366757),
                h = ((0, s.default)(p), a(45697)),
                v = (0, s.default)(h),
                y = a(973935),
                b = ((0, s.default)(y), a(493658)),
                _ = (0, s.default)(b),
                C = a(461853),
                N = (0, s.default)(C),
                w = a(399069),
                x = (0, s.default)(w),
                k = a(266004),
                E = (0, s.default)(k),
                L = a(851922),
                S = ((0, s.default)(L), a(154920)),
                B = (0, s.default)(S),
                T = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = P(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        i = l && r;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = i ? r(e, s) : null;
                            u && (u.get || u.set) ? l(n, s, u) : n[s] = e[s]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(43138));

            function P(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    a = new i;
                return (P = function(e) {
                    return e ? a : t
                })(e)
            }
            var I = (0, a(11945).getIsEditorRtlLayout)(),
                O = function(e, t, a) {
                    return x.default.createPageComponent({
                        mixins: [N.default.enableAfterUpdate()],
                        displayName: t,
                        bobcatPropTypes: {
                            data: {
                                text: v.default.string,
                                category: v.default.oneOfType(v.default.string, v.default.number),
                                binding: v.default.object
                            }
                        },
                        getBobcatDefaultProps: function() {
                            return {
                                data: {
                                    category: "all"
                                }
                            }
                        },
                        componentWillReceiveProps: function(t) {
                            e.getCategories().length && !e.isCategoryIdExist(t.category) && this._onChangeCategory({
                                value: "all"
                            })
                        },
                        _createDropdownOptions: function() {
                            var t, o = this,
                                i = (0, f.default)(t = e.getCategories()).call(t, (function(e) {
                                    return {
                                        value: e.id,
                                        label: e.id.toString() === o.props.category.toString() ? (0, d.default)("div", {
                                            className: "option selected"
                                        }, void 0, e.name) : (0, d.default)("div", {
                                            className: "option"
                                        }, void 0, e.name)
                                    }
                                }));
                            return i.length && "all" !== this.props.category && i.unshift({
                                value: "all",
                                label: (0, d.default)("div", {
                                    className: "option"
                                }, void 0, n(a ? "Portfolio|All Categories" : "Ecommerce|All Categories"))
                            }), i
                        },
                        _getSelectedCategory: function(t) {
                            var o = e.getCategories(),
                                i = (0, g.default)(o).call(o, (function(e) {
                                    return e.id.toString() === t.toString()
                                }));
                            return i ? i.name : n(a ? "Portfolio|All Categories" : "Ecommerce|All Categories")
                        },
                        _onChangeCategory: function(e) {
                            this.updateData({
                                category: e.value
                            }), this.savePage(), a ? B.default.track("Editor - Select Portfolio Section Category") : B.default.track("Editor - Select Ecommerce Section Category")
                        },
                        render: function() {
                            if (this.observeBinding(e.getCategoriesBinding()), this.observeBinding(e.getSettingsBinding()), this._createDropdownOptions().length < 1) return null;
                            var t = I ? "tooltip-right" : "tooltip-left";
                            return (0, d.default)("div", {
                                className: "s-component s-category-selector"
                            }, void 0, (0, d.default)("div", {
                                className: "s-component-editor",
                                rel: T.isSmallScreen() ? "tooltip-top" : t,
                                title: n(a ? "Portfolio|Select a category for this section." : "Ecommerce|Select a category for this section."),
                                "data-original-title": n(a ? "Portfolio|Select a category for this section." : "Ecommerce|Select a category for this section.")
                            }, void 0, (0, d.default)(_.default, {
                                options: this._createDropdownOptions(),
                                value: this._getSelectedCategory(this.props.category),
                                onChange: this._onChangeCategory
                            })))
                        }
                    })
                },
                M = O(E.default, "EcommerceCategorySelector");
            M.createCategorySelector = O, t.default = M, e.exports = t.default
        },
        31933: function(e, t, a) {
            "use strict";
            var n = a(223765),
                o = a(752424),
                i = a(663978),
                l = a(834074),
                r = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = a(45697),
                u = (0, r.default)(s),
                d = a(399069),
                c = (0, r.default)(d),
                f = a(277265),
                m = (0, r.default)(f),
                g = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = C(t);
                    if (a && a.has(e)) return a.get(e);
                    var o = {},
                        r = i && l;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? l(e, s) : null;
                            u && (u.get || u.set) ? i(o, s, u) : o[s] = e[s]
                        }
                    return o.default = e, a && a.set(e, o), o
                }(a(143268)),
                p = a(907423),
                h = (0, r.default)(p),
                v = a(818166),
                y = (0, r.default)(v),
                b = a(234584),
                _ = (0, r.default)(b);

            function C(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    a = new o;
                return (C = function(e) {
                    return e ? a : t
                })(e)
            }
            t.default = c.default.createPageComponent({
                displayName: "ExternalLinkNav",
                observedProps: ["url", "text", "updateTimeStamp"],
                bobcatPropTypes: {
                    data: {
                        updateTimeStamp: u.default.number,
                        new_target: u.default.bool,
                        text: u.default.string,
                        url: u.default.string,
                        id: u.default.string,
                        link_type: u.default.string,
                        page_id: u.default.string,
                        section_id: u.default.string
                    }
                },
                _getUrlToShow: function() {
                    var e = this.props,
                        t = e.link_type,
                        a = e.url,
                        n = e.page_id,
                        o = e.section_id;
                    if ("section" === t) return y.default.getExternalLinkUrl(t, a, n, o);
                    var i, l = (i = a, g.getExternalLinkMappingRS(i, h.default.getPagesList()));
                    return g.addProtocol(null != l.publicURL ? l.publicURL : l.siteDeleted ? "#" : a)
                },
                _getTarget: function() {
                    var e = this.props,
                        t = e.link_type;
                    return e.new_target && "section" !== t ? "_blank" : "_self"
                },
                _isS5Theme: function() {
                    return "s5-theme" === _.default.getThemeName()
                },
                render: function() {
                    return !y.default.getShowInNavLinks(this.props.id) || y.default.getIsMultiPage() ? null : m.default.apply(this)
                }
            }), e.exports = t.default
        },
        539220: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(205872),
                l = (0, o.default)(i),
                r = a(51942),
                s = (0, o.default)(r),
                u = a(972555),
                d = (0, o.default)(u),
                c = a(366757),
                f = (0, o.default)(c),
                m = a(973935),
                g = ((0, o.default)(m), a(860644)),
                p = (0, o.default)(g),
                h = a(914578),
                v = (0, o.default)(h),
                y = a(223336),
                b = (0, o.default)(y),
                _ = a(872278),
                C = (0, o.default)(_),
                N = (0, d.default)({
                    displayName: "JQSlide",
                    getDefaultProps: function() {
                        return {
                            component: C.default.div
                        }
                    },
                    componentWillEnter: function(e) {
                        return (0, b.default)(e).slideDown(300, "easeInOutQuart")
                    },
                    componentWillExit: function(e) {
                        return (0, b.default)(e).slideUp(200, "easeInOutQuart")
                    },
                    render: function() {
                        var e = (0, s.default)({}, this.props);
                        return e = v.default.omit(e, "component"), f.default.createElement(p.default, (0, l.default)({}, e, { in: this.props.in,
                            onEnter: this.componentWillEnter,
                            onExit: this.componentWillExit,
                            timeout: 300,
                            appear: !0
                        }), this.props.component((0, s.default)({}, e, {
                            style: {
                                display: "none"
                            }
                        })))
                    }
                });
            t.default = N, e.exports = t.default
        },
        288757: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(205872),
                l = (0, o.default)(i),
                r = a(812077),
                s = (0, o.default)(r),
                u = a(366757),
                d = (0, o.default)(u),
                c = a(45697),
                f = (0, o.default)(c),
                m = a(399069),
                g = (0, o.default)(m),
                p = a(357646),
                h = (0, o.default)(p),
                v = !1;
            t.default = g.default.create({
                displayName: "ItemTextGroup",
                propTypes: {
                    section: f.default.object.isRequired,
                    itemBinding: f.default.object.isRequired,
                    className: f.default.string,
                    binding: f.default.object.isRequired,
                    upperChildrenPosition: f.default.bool,
                    isNewBigMedia: f.default.bool
                },
                shouldComponentUpdateOverride: function() {
                    return !0
                },
                renderChildren: function(e) {
                    return this.props.children ? (0, s.default)("div", {
                        className: e
                    }, void 0, this.props.children) : null
                },
                _onChange: function() {
                    if (this.props.onChange) return this.props.onChange()
                },
                render: function() {
                    var e, t, a, n = this.props,
                        o = n.section,
                        i = n.isNewBigMedia,
                        r = this.props.itemBinding,
                        u = null == this.props.showItemSubtitle || this.props.showItemSubtitle,
                        c = this.props.deprecateItemSubtitle,
                        f = this.props.upperChildrenPosition,
                        m = null != this.props.className ? this.props.className : "",
                        g = this.props.hideTextGroupTitle;
                    if (!o) throw new Error("ItemTextGroup is expecting a section prop!");
                    if (!r) throw new Error("ItemTextGroup is expecting an itemBinding prop!");
                    if (u) {
                        var p = o.getThemeFeature("itemSubtitleDefaultStyle"),
                            y = p ? {
                                defaultStyle: p
                            } : y = {};
                        a = (0, s.default)("div", {
                            className: "s-item-subtitle"
                        }, void 0, d.default.createElement(h.default, (0, l.default)({
                            tagName: "h6",
                            textType: "body",
                            sizeType: "itemSubTitle"
                        }, y, o.getComponentProps("text2", r), {
                            onChange: this._onChange
                        }))), e = "text3", t = "text1 text2 text3"
                    } else a = null, e = "text2", t = "text1 text2";
                    var b = o.sbUniformTextAlignment(t, {
                        parentBinding: r
                    });
                    return o.sbAnyHasContent(t, {
                        parentBinding: r
                    }) || this.props.children ? (0, s.default)("div", {
                        className: "s-item-text-group ".concat(m)
                    }, void 0, f && this.renderChildren(b), o.sbHasContent("text1", {
                        parentBinding: r
                    }) && !g && (i ? (0, s.default)("div", {
                        className: "s-title"
                    }, void 0, d.default.createElement(h.default, (0, l.default)({
                        tagName: "h2",
                        textType: "title",
                        sizeType: "title"
                    }, o.getComponentProps("text1", r), {
                        onChange: this._onChange
                    }))) : (0, s.default)("div", {
                        className: "s-item-title"
                    }, void 0, d.default.createElement(h.default, (0, l.default)({
                        tagName: "h3",
                        textType: "heading",
                        sizeType: "itemTitle"
                    }, o.getComponentProps("text1", r), {
                        onChange: this._onChange
                    })))), function() {
                        if (u) {
                            if (!c) return a;
                            if (!v && o.sbHasContent("text2", {
                                    parentBinding: r,
                                    showOnly: !1
                                }) && (v = !0), v) return a
                        }
                    }(), (0, s.default)("div", {
                        className: "s-item-text"
                    }, void 0, d.default.createElement(h.default, (0, l.default)({
                        tagName: "div",
                        textType: "body",
                        sizeType: "body"
                    }, o.getComponentProps(e, r), {
                        onChange: this._onChange
                    }))), !f && this.renderChildren(b)) : null
                }
            }), e.exports = t.default
        },
        663749: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r = a(812077),
                s = (0, l.default)(r),
                u = a(726394),
                d = (0, l.default)(u),
                c = a(569198),
                f = (0, l.default)(c),
                m = a(351379),
                g = (0, l.default)(m),
                p = a(900214),
                h = (0, l.default)(p),
                v = a(566380),
                y = (0, l.default)(v),
                b = a(981643),
                _ = (0, l.default)(b),
                C = a(2991),
                N = (0, l.default)(C),
                w = a(694473),
                x = (0, l.default)(w),
                k = a(366757),
                E = ((0, l.default)(k), a(978307)),
                L = a(141655),
                S = (0, l.default)(L),
                B = a(255245),
                T = a(527451),
                P = a(851922),
                I = (0, l.default)(P),
                O = a(818166),
                M = (0, l.default)(O),
                D = a(837337),
                R = (0, l.default)(D),
                A = a(370917);
            var U = (0, R.default)("div", {
                    target: "css-1y67zq80"
                })((function(e) {
                    return (0, A.css)("background-color:", e.background, ";outline:", e.selected ? "solid #fff thin;" : "none", ";")
                })),
                H = function(e) {
                    (0, g.default)(r, e);
                    var t, i, l = (t = r, i = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, y.default)(t);
                        if (i) {
                            var n = (0, y.default)(this).constructor;
                            e = o(a, arguments, n)
                        } else e = a.apply(this, arguments);
                        return (0, h.default)(this, e)
                    });

                    function r(e) {
                        var t;
                        return (0, d.default)(this, r), (t = l.call(this, e)).cacheLevel = -1, t.hideAdvancedOptions = !1, t.showBaseRotationDropdown = !1, t.buttonTitle = n("Editor|Layout"), t
                    }
                    return (0, f.default)(r, [{
                        key: "_saveNewLayout",
                        value: function(e, t) {
                            var a = this._getLayoutConfigBinding();
                            a && (a.set(e, t), S.default.save())
                        }
                    }, {
                        key: "getRotationKeys",
                        value: function() {
                            return E.ACCORDION_LAYOUTS
                        }
                    }, {
                        key: "_getCustomLayoutStatus",
                        value: function() {
                            return this.props.sectionLayoutConfig.get("layout") || E.ACCORDION_LAYOUT_KEYS.BORDER_LAYOUT
                        }
                    }, {
                        key: "_handleRotateLayout",
                        value: function() {
                            var e = this.props.sectionLayoutConfig.get("layout") || E.ACCORDION_LAYOUT_KEYS.BORDER_LAYOUT,
                                t = E.ACCORDION_LAYOUTS,
                                a = t[(0, _.default)(t).call(t, e) + 1] || E.ACCORDION_LAYOUT_KEYS.BORDER_LAYOUT;
                            return this._saveNewLayout("layout", a), !0
                        }
                    }, {
                        key: "_renderColumnsButton",
                        value: function() {
                            var e = this,
                                t = a(255245).getLayoutOptions(this.props.sectionLayoutConfig);
                            return (0, N.default)(t).call(t, (function(t) {
                                return e.renderNewLayoutItem(t)
                            }))
                        }
                    }, {
                        key: "_renderColorButton",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.sectionLayoutConfig,
                                o = t.themeColors,
                                i = (0, B.getLayoutColors)(o),
                                l = a.get("color"),
                                r = (0, x.default)(i).call(i, (function(e) {
                                    return e.type === l
                                })) || i[0];
                            return (0, s.default)("div", {
                                className: "s-layout-menu-field s-layout-color-field"
                            }, void 0, (0, s.default)("div", {
                                className: "s-layout-menu-label"
                            }, void 0, n("Editor|Color")), (0, s.default)("div", {
                                className: "s-layout-menu-content"
                            }, void 0, (0, N.default)(i).call(i, (function(t) {
                                var a = t.type,
                                    n = t.value;
                                return (0, s.default)(U, {
                                    selected: r.type === a,
                                    background: n,
                                    onClick: function() {
                                        return e._saveNewLayout("color", a)
                                    }
                                }, a)
                            }))))
                        }
                    }, {
                        key: "renderLayoutOptions",
                        value: function() {
                            return (0, s.default)("div", {}, void 0, this._renderColumnsButton(), this._renderColorButton())
                        }
                    }]), r
                }(T.BaseLayoutButton),
                F = (0, I.default)(H, [], (function() {
                    return {
                        themeColors: M.default.getCustomColors()
                    }
                }));
            t.default = F, e.exports = t.default
        },
        527451: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(223765),
                i = a(501068),
                l = a(752424),
                r = a(663978),
                s = a(834074),
                u = a(60530)(a(60530));
            r(t, "__esModule", {
                value: !0
            }), t.BaseLayoutButton = void 0;
            var d, c, f, m, g, p, h, v, y = a(726394),
                b = (0, u.default)(y),
                _ = a(569198),
                C = (0, u.default)(_),
                N = a(705824),
                w = (0, u.default)(N),
                x = a(351379),
                k = (0, u.default)(x),
                E = a(900214),
                L = (0, u.default)(E),
                S = a(566380),
                B = (0, u.default)(S),
                T = a(487672),
                P = (0, u.default)(T),
                I = a(812077),
                O = (0, u.default)(I),
                M = a(223765),
                D = (0, u.default)(M);
            t.connectToStores = function(e) {
                return (0, Fe.default)(e, [], (function() {
                    return {
                        themeName: Pe.default.getThemeName()
                    }
                }))
            }, a(974916), a(323123), a(569600);
            var R = a(686902),
                A = (0, u.default)(R),
                U = a(778914),
                H = (0, u.default)(U),
                F = a(54103),
                V = (0, u.default)(F),
                Z = a(25843),
                z = (0, u.default)(Z),
                K = a(492762),
                W = (0, u.default)(K),
                j = a(981643),
                G = (0, u.default)(j),
                Y = a(620116),
                q = (0, u.default)(Y),
                J = a(678580),
                Q = (0, u.default)(J),
                $ = a(2991),
                X = (0, u.default)($),
                ee = a(977766),
                te = (0, u.default)(ee),
                ae = a(366757),
                ne = (0, u.default)(ae),
                oe = a(973935),
                ie = (0, u.default)(oe),
                le = a(872278),
                re = (0, u.default)(le),
                se = a(223336),
                ue = (0, u.default)(se),
                de = a(692381),
                ce = (0, u.default)(de),
                fe = a(921003),
                me = (0, u.default)(fe),
                ge = a(421522),
                pe = (0, u.default)(ge),
                he = a(294184),
                ve = (0, u.default)(he),
                ye = a(914578),
                be = (0, u.default)(ye),
                _e = a(154920),
                Ce = (0, u.default)(_e),
                Ne = a(461853),
                we = (0, u.default)(Ne),
                xe = a(141655),
                ke = (0, u.default)(xe),
                Ee = a(539220),
                Le = (0, u.default)(Ee),
                Se = a(936501),
                Be = (0, u.default)(Se),
                Te = a(234584),
                Pe = (0, u.default)(Te),
                Ie = a(183123),
                Oe = (0, u.default)(Ie),
                Me = a(818166),
                De = (0, u.default)(Me),
                Re = a(97467),
                Ae = (0, u.default)(Re),
                Ue = a(241037),
                He = a(851922),
                Fe = (0, u.default)(He),
                Ve = a(381633),
                Ze = a(751706),
                ze = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = Ke(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        i = r && s;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var u = i ? s(e, l) : null;
                            u && (u.get || u.set) ? r(n, l, u) : n[l] = e[l]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(155088));

            function Ke(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    a = new l;
                return (Ke = function(e) {
                    return e ? a : t
                })(e)
            }
            var We = ["left", "right"],
                je = ["top", "bottom"],
                Ge = ["one", "two", "three", "four"],
                Ye = function() {
                    return null
                };

            function qe(e) {
                return {
                    media: n("Editor|Big Media"),
                    col: n("Editor|Columns"),
                    row: n("Editor|Rows"),
                    box: n("Editor|Text In Box"),
                    one: 1,
                    two: 2,
                    three: 3,
                    four: 4,
                    five: 5,
                    six: 6,
                    small: d || (d = (0, O.default)("i", {
                        className: "small fa fa-photo"
                    })),
                    medium1: c || (c = (0, O.default)("i", {
                        className: "medium1 fa fa-photo"
                    })),
                    medium2: f || (f = (0, O.default)("i", {
                        className: "medium2 fa fa-photo"
                    })),
                    large: m || (m = (0, O.default)("i", {
                        className: "large fa fa-photo"
                    })),
                    mediaLeft: n("Editor|Left"),
                    mediaRight: n("Editor|Right"),
                    center: n("Editor|Center"),
                    left: n("Editor|Media on Left"),
                    right: n("Editor|Media on Right"),
                    noImage: n("Editor|No Media"),
                    alt: n("Editor|Alternating"),
                    text: n("Editor|Text"),
                    button: n("Editor|Button"),
                    signup: n("Editor|Sign Up"),
                    images: n("Editor|App Store"),
                    overlay: n("Editor|Overlay"),
                    card: n("Editor|Card"),
                    swap: n("Editor|Swap Titles")
                }[e]
            }
            t.BaseLayoutButton = pe.default.decorate(we.default.enableAfterMount())(g = function(e) {
                (0, k.default)(r, e);
                var t, o, l = (t = r, o = function() {
                    if ("undefined" == typeof Reflect || !i) return !1;
                    if (i.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(i(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, a = (0, B.default)(t);
                    if (o) {
                        var n = (0, B.default)(this).constructor;
                        e = i(a, arguments, n)
                    } else e = a.apply(this, arguments);
                    return (0, L.default)(this, e)
                });

                function r(e) {
                    var t;
                    return (0, b.default)(this, r), t = l.call(this, e), (0, P.default)((0, w.default)(t), "_stopPropagationFn", (function(e) {
                        e.stopPropagation()
                    })), t.state = {
                        showLayoutOptions: !1
                    }, t._bind("_updateLayout", "_toggleLayoutOptions", "_onClickSave", "_clickRotateLayout", "_onChangeRotationKey", "_getKeysByLevel"), t._getSetLevelFn = Be.default.boundParamsMemoizer(t._setLevelKey, (0, w.default)(t)), t._createLevelKeys(t.props.layoutVariation), t._keyCaches = {}, t.cacheLevel = -1, t.showBaseRotationDropdown = !1, t
                }
                return (0, C.default)(r, [{
                    key: "componentDidMount",
                    value: function() {
                        if (-1 !== this.cacheLevel) {
                            var e = this.cacheLevel,
                                t = this._levelKeys[e];
                            this._keyCaches[t] = be.default.clone(this._levelKeys)
                        }
                        this.props.layoutOptions || console.warn("Section has no layout options defined!")
                    }
                }, {
                    key: "componentWillUpdate",
                    value: function(e, t) {
                        e.layoutVariation !== this.props.layoutVariation && this._createLevelKeys(e.layoutVariation)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        e.layoutVariation !== this.props.layoutVariation && window.edit_page.Event.publish("Layout.afterChange", {
                            target: (0, ue.default)(ie.default.findDOMNode(this))
                        }), !t.showLayoutOptions && this.state.showLayoutOptions && (0, ue.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("layout-editor-opened"), t.showLayoutOptions && !this.state.showLayoutOptions && (0, ue.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("layout-editor-opened")
                    }
                }, {
                    key: "_bind",
                    value: function() {
                        for (var e = this, t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n];
                        (0, H.default)(a).call(a, (function(t) {
                            var a;
                            return e[t] = (0, V.default)(a = e[t]).call(a, e)
                        }))
                    }
                }, {
                    key: "_createLevelKeys",
                    value: function(e) {
                        this._levelKeys = e.split("-")
                    }
                }, {
                    key: "_updateLayout",
                    value: function(e) {
                        this.props.updateLayout(be.default.remove(be.default.clone(e), (function(e) {
                            return "" !== (0, z.default)(be.default).call(be.default, e)
                        })).join("-"))
                    }
                }, {
                    key: "_setLevelKey",
                    value: function(e, t) {
                        var a = this.cacheLevel;
                        if (e === a && this._levelKeys[e] !== t) return this._keyCaches[t] ? this.updateCachedKeys(be.default.clone(this._keyCaches[t])) : this.updateToDefaultLayout(t);
                        for (var n = this._levelKeys, o = [], i = this.props.layoutOptions, l = 0; l < e; l++) i = i[n[l]];
                        o[e] = t, i = i[t];
                        for (var r, s, u = n.length, d = e + 1; d < u; d++) o[d] = (r = i, s = n[d], "object" !== (0, D.default)(r) ? "" : r[s] ? s : (0, A.default)(r)[0]), i = i[o[d]];
                        "store section" === this.sectionName && (o[2] = n[2]);
                        var c = be.default.merge([], n, o);
                        this._updateLayout(c), e !== a && -1 !== a && (this._keyCaches[n[a]] = c)
                    }
                }, {
                    key: "_getKeysByLevel",
                    value: function(e) {
                        for (var t = this.props.layoutOptions, a = 0; a < e; a++)
                            if (!(t = t[this._levelKeys[a]])) return [];
                        return "object" === (0, D.default)(t) ? (0, A.default)(t) : []
                    }
                }, {
                    key: "_getSmallButtonClass",
                    value: function(e) {
                        var t = this._getKeysByLevel(e).length;
                        return 2 === t ? "small-buttons two" : 4 === t ? "small-buttons four" : 5 === t ? "small-buttons five" : "small-buttons"
                    }
                }, {
                    key: "_getLayoutIndex",
                    value: function() {
                        var e, t, a = this.props.layoutVariation,
                            n = a;
                        "store section" == this.sectionName && (n = (0, W.default)(t = a.split("-")).call(t, 0, 2).join("-"));
                        var o = (0, G.default)(e = this.getRotationKeys()).call(e, n);
                        return a && -1 != o ? o : null
                    }
                }, {
                    key: "_getLayoutStatus",
                    value: function() {
                        return "function" == typeof this._getCustomLayoutStatus && this._getCustomLayoutStatus() ? this._getCustomLayoutStatus() : null !== this._getLayoutIndex() ? "ABCDEFGHI" [this._getLayoutIndex()] : "padding" === this.sectionName ? "" : "A"
                    }
                }, {
                    key: "_clickRotateLayout",
                    value: function() {
                        if (this.state.showLayoutOptions) this._onClickSave();
                        else if (this._shouldDirectlyOpenAdvancedOptions()) this.setState({
                            showLayoutOptions: !this.state.showLayoutOptions
                        });
                        else if ("function" != typeof this._handleRotateLayout || !this._handleRotateLayout()) {
                            var e = this.getRotationKeys(),
                                t = this._getLayoutIndex() + 1;
                            (!t || t >= e.length) && (t = 0);
                            var a = e[t] || "";
                            a && ("store section" == this.sectionName && this._levelKeys[2] && (a += "-".concat(this._levelKeys[2])), this.props.updateLayout(a), ke.default.clickLayout(), ke.default.save())
                        }
                    }
                }, {
                    key: "_onChangeRotationKey",
                    value: function(e) {
                        this.props.updateLayout(e.target.value), ke.default.clickLayout(), ke.default.save()
                    }
                }, {
                    key: "_shouldDirectlyOpenAdvancedOptions",
                    value: function() {
                        return 0 === this.getRotationKeys().length && !this.hideAdvancedOptions
                    }
                }, {
                    key: "_onClickSectionDragMode",
                    value: function(e) {
                        var t = a(538507).transformToS6Binding,
                            n = this.props,
                            o = n.sectionLayoutConfig,
                            i = n.s5ClassProps,
                            l = void 0 === i ? {} : i;
                        if (t(this.props.parentBinding), !o.get("width")) {
                            var r = l.contentWidth,
                                s = l.sectionHeight;
                            (0, Ze.initSectionStyleData)(o, {
                                width: r,
                                height: s
                            })
                        }
                        ke.default.toggleSectionOnDrag(e), ke.default.save()
                    }
                }, {
                    key: "_onClickSave",
                    value: function() {
                        this.setState({
                            showLayoutOptions: !1
                        }), ke.default.save()
                    }
                }, {
                    key: "_toggleLayoutOptions",
                    value: function() {
                        this.setState({
                            showLayoutOptions: !this.state.showLayoutOptions
                        }), this.state.showLayoutOptions || Ce.default.track("Click Advanced Layout - Editor v1", {
                            section: this.sectionName
                        })
                    }
                }, {
                    key: "_renderBaseCheckBox",
                    value: function(e) {
                        var t = e.checked,
                            a = e.labelText,
                            n = e.handleChange;
                        return (0, O.default)("div", {
                            className: "s-layout-menu-field layout-level-button layout-checkbox dark-bg",
                            onClick: n
                        }, void 0, (0, O.default)("input", {
                            type: "checkbox",
                            checked: t,
                            onClick: this._stopPropagationFn,
                            onChange: n
                        }), (0, O.default)("span", {}, void 0, a))
                    }
                }, {
                    key: "_renderCheckBox",
                    value: function(e) {
                        var t = e.levelNum,
                            a = e.labelText,
                            n = e.checkedKey,
                            o = e.unCheckedKey,
                            i = e.isNewKey,
                            l = void 0 !== i && i,
                            r = e.onChange,
                            s = this._levelKeys[t],
                            u = this._getKeysByLevel(t);
                        if (s && u.length >= 2 || l) {
                            var d = this._getSetLevelFn(t, s === n ? o : n),
                                c = r ? function() {
                                    return r(t, s === n ? o : n)
                                } : d;
                            return this._renderBaseCheckBox({
                                checked: s === n,
                                labelText: a,
                                handleChange: c
                            })
                        }
                    }
                }, {
                    key: "_renderLayoutButtons",
                    value: function(e, t) {
                        var a = this,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qe,
                            o = this._levelKeys[e],
                            i = this._getKeysByLevel(e);
                        if (o && i.length >= 2) {
                            i = (0, q.default)(i).call(i, (function(e) {
                                var t;
                                return !(0, Q.default)(t = ["top", "bottom"]).call(t, e)
                            }));
                            var l = this.getButtonClassMapping()[e];
                            return (0, O.default)(Ae.default, {
                                keys: i,
                                selectedKey: o,
                                textMapping: n,
                                className: l,
                                labelText: t,
                                onSelect: function(t) {
                                    return a._getSetLevelFn(e, t)()
                                }
                            })
                        }
                    }
                }, {
                    key: "_renderDragModeButton",
                    value: function() {
                        var e = this,
                            t = this.props.parentBinding;
                        if (!t) return null;
                        var a = t.get("id"),
                            o = t.get("template_name"),
                            i = ["ecommerce", "portfolio", "booking", "blog", "blog1", "blog2", "blog3", "pricing", "grid", "slider", "social_feed", "donation", "footer", "navbar", "gallery", "gallery1", "gallery2", "gallery3", "gallery4", "gallery5", "gallery6", "process", "faq"];
                        return (0, Q.default)(i).call(i, o) ? null : (0, O.default)(Ve.Tooltip, {
                            placement: "left",
                            title: n("Editor|Enter drag & drop mode to add, move, or remove any elements you want!")
                        }, void 0, (0, O.default)("div", {
                            style: {
                                marginBottom: "10px"
                            },
                            className: "s-btn small no-margin drag-mode-btn",
                            onClick: function() {
                                e._toggleLayoutOptions(), e._onClickSectionDragMode(a), Ce.default.track("Enter Drag & Drop Mode - Editor v1", {
                                    site_id: Pe.default.getId(),
                                    site_permalink: Pe.default.getPermalink()
                                })
                            }
                        }, void 0, p || (p = (0, O.default)("i", {
                            className: "entypo-pencil drag-icon"
                        })), n("Editor|Drag & Drop")))
                    }
                }, {
                    key: "_changeSectionLayout",
                    value: function(e, t) {
                        var a = t.target.value,
                            n = this._getLayoutConfigBinding();
                        n && (n.set(e, a), ke.default.save())
                    }
                }, {
                    key: "_getLayoutConfigBinding",
                    value: function() {
                        return this.props.binding.sub("layout_config")
                    }
                }, {
                    key: "_renderSectionLayouts",
                    value: function() {
                        var e, t, a, o = this.props.parentBinding;
                        if (!o) return null;
                        if ("grid" === o.get("template_name")) return null;
                        var i = this.props.s5ClassProps,
                            l = this._getLayoutConfigBinding(),
                            r = l.get("height"),
                            s = l.get("width"),
                            u = l.get("content_align"),
                            d = Ze.getDefaultWidthByOldKey[i.contentWidth],
                            c = Ze.getDefaultHeightByOldKey[i.sectionPadding],
                            f = Ze.CONTENT_ALIGNS;
                        return s === ze.SectionWidthKeys.FULL && (f = (0, q.default)(Ze.CONTENT_ALIGNS).call(Ze.CONTENT_ALIGNS, (function(e) {
                            return -1 === (0, G.default)(We).call(We, e.value.split("_")[1])
                        }))), r !== ze.SectionHeightKeys.FULL && r !== ze.SectionHeightKeys.MINI || (f = (0, q.default)(Ze.CONTENT_ALIGNS).call(Ze.CONTENT_ALIGNS, (function(e) {
                            return -1 === (0, G.default)(je).call(je, e.value.split("_")[0])
                        }))), (0, O.default)("div", {}, void 0, (0, O.default)("div", {
                            className: "s-layout-menu-field"
                        }, void 0, (0, O.default)("div", {
                            className: "s-layout-menu-label"
                        }, void 0, n("Editor|Section Width")), (0, O.default)("div", {
                            className: "s-layout-menu-field drop-down-select"
                        }, void 0, s && (0, O.default)("select", {
                            onChange: (0, V.default)(e = this._changeSectionLayout).call(e, this, "width"),
                            value: s
                        }, void 0, (0, X.default)(Ze.SECTION_WIDTHS).call(Ze.SECTION_WIDTHS, (function(e) {
                            var t;
                            return (0, O.default)("option", {
                                value: e.value
                            }, e.value, (0, te.default)(t = "".concat(e.label(), " ")).call(t, d === e.value ? n("Editor|(default)") : ""))
                        }))))), (0, O.default)("div", {
                            className: "s-layout-menu-field"
                        }, void 0, (0, O.default)("div", {
                            className: "s-layout-menu-label"
                        }, void 0, n("Editor|Section Height")), (0, O.default)("div", {
                            className: "s-layout-menu-field drop-down-select"
                        }, void 0, r && (0, O.default)("select", {
                            onChange: (0, V.default)(t = this._changeSectionLayout).call(t, this, "height"),
                            value: r
                        }, void 0, (0, X.default)(Ze.SECTION_HEIGHTS).call(Ze.SECTION_HEIGHTS, (function(e) {
                            var t;
                            return (0, O.default)("option", {
                                value: e.value
                            }, e.value, (0, te.default)(t = "".concat(e.label(), " ")).call(t, c === e.value ? n("Editor|(default)") : ""))
                        }))))), (0, O.default)("div", {
                            className: "s-layout-menu-field"
                        }, void 0, (0, O.default)("div", {
                            className: "s-layout-menu-label"
                        }, void 0, n("Editor|Content Position")), (0, O.default)("div", {
                            className: "s-layout-menu-field drop-down-select"
                        }, void 0, u && (0, O.default)("select", {
                            onChange: (0, V.default)(a = this._changeSectionLayout).call(a, this, "content_align"),
                            value: u
                        }, void 0, (0, X.default)(f).call(f, (function(e) {
                            return (0, O.default)("option", {
                                value: e.value
                            }, e.value, e.label())
                        }))))))
                    }
                }, {
                    key: "renderNewLayoutItem",
                    value: function(e) {
                        var t, a, n = this,
                            o = e.key,
                            i = e.label,
                            l = e.component,
                            r = e.children,
                            s = e.defaultValue,
                            u = this.props,
                            d = u.sectionLayoutConfig,
                            c = u.layoutConfig,
                            f = d.get(o) || c && c.get(o) || s,
                            m = "function" == typeof i && i();
                        return "button" === l ? (0, O.default)("div", {
                            className: "s-layout-menu-field layout-level-button dark-bg small-buttons ".concat(Ge[r.length - 1])
                        }, void 0, t || (t = (0, O.default)("div", {
                            className: "s-layout-menu-label"
                        }, void 0, m)), (0, O.default)("div", {
                            className: "s-layout-menu-content"
                        }, void 0, (0, X.default)(r).call(r, (function(e, t) {
                            return (0, O.default)("div", {
                                className: (0, ve.default)("s-btn small dark no-margin", {
                                    selected: e.value === f
                                }),
                                onClick: function() {
                                    n._saveNewLayout(o, e.value)
                                }
                            }, t, "function" == typeof e.label && e.label())
                        })))) : "checkbox" === l ? (0, O.default)("div", {
                            className: "s-layout-menu-field layout-level-button layout-checkbox dark-bg",
                            onClick: function() {
                                n._saveNewLayout(o, !f)
                            }
                        }, void 0, (0, O.default)("input", {
                            type: "checkbox",
                            checked: f,
                            onChange: function() {
                                n._saveNewLayout(o, !f)
                            }
                        }), a || (a = (0, O.default)("span", {}, void 0, m))) : (0, O.default)("div", {
                            className: "s-layout-menu-field drop-down-select"
                        }, void 0, (0, O.default)("div", {
                            className: "s-layout-menu-label"
                        }, void 0, m), (0, O.default)("select", {
                            value: f,
                            onChange: function(e) {
                                n._saveNewLayout(o, e.target.value)
                            }
                        }, void 0, (0, X.default)(r).call(r, (function(e, t) {
                            return (0, O.default)("option", {
                                value: e.value
                            }, t, "function" == typeof e.label && e.label())
                        }))))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this._getLayoutStatus(),
                            t = this.props,
                            a = t.layoutVariation,
                            o = t.themeName,
                            i = this.state.showLayoutOptions,
                            l = this.getRotationKeys()[this._getLayoutIndex()],
                            r = "ion" === o || "persona" === o || "perspective" === o || "glow" === o || "footer" === this.sectionName || /.*wide$/.test(a) && "grid" === this.sectionName,
                            s = this.hideAdvancedOptions || r && this.showBaseRotationDropdown || "footer" === this.sectionName,
                            u = De.default.getIsS6Template() || Oe.default.getCanUseS6Feature(),
                            d = n(u ? "Editor|Swap Layout" : "Editor|Click to change layouts"),
                            c = this.buttonTitle || n("Layout"),
                            f = (0, O.default)(me.default, {
                                className: "center clickable small title layout-button",
                                onTap: this._clickRotateLayout,
                                rel: "tooltip-left",
                                title: "padding" === this.sectionName ? "" : d
                            }, void 0, (0, O.default)("span", {}, void 0, c, e && !i && (0, O.default)("span", {
                                className: "layout-status"
                            }, void 0, e))),
                            m = this._getCustomLayoutClass ? this._getCustomLayoutClass() : "",
                            g = (0, O.default)(me.default, {
                                className: "center small title\n        layout-button s6-layout-button ".concat(m),
                                title: "padding" === this.sectionName ? "" : d
                            }, void 0, (0, O.default)("div", {
                                className: "status clickable title ".concat(c.length > 5 ? "long-text" : ""),
                                onClick: this._clickRotateLayout
                            }, void 0, c, e && !i && (0, O.default)("span", {}, void 0, (0, O.default)("span", {
                                className: "layout-status"
                            }, void 0, e), h || (h = (0, O.default)("i", {
                                className: "entypo-arrows-ccw layout-icon"
                            })))), (!s || u) && (0, O.default)("div", {
                                className: "setting title clickable",
                                onClick: this._toggleLayoutOptions
                            }, void 0, v || (v = (0, O.default)(Ve.Icon, {
                                className: "fa-gear setting-icon",
                                type: "fa-gear"
                            }))));
                        if (!this.props.layoutOptions && !u) return null;
                        if (!i && r && !u && "contact form section" !== this.sectionName && !this.getRotationKeys().length && "grid" !== this.sectionName) return null;
                        var p = this.renderCustomBasicButton && this.renderCustomBasicButton(this._toggleLayoutOptions),
                            y = (0, ve.default)("s-component s-layout", {
                                advanced: !s,
                                opened: i,
                                closed: !i,
                                "s-s6-layout-editor": u
                            });
                        return ne.default.createElement("div", {
                            ref: "componentDOM",
                            className: y
                        }, (0, O.default)("div", {
                            className: "s-component-editor dark-bg"
                        }, void 0, u && (p || g), !u && s && f, !u && !s && (0, O.default)("div", {
                            className: "layout-button-wrapper"
                        }, void 0, f, (0, O.default)(me.default, {
                            className: "advanced-options-button",
                            rel: "tooltip-left",
                            title: n("Editor|More layout options!"),
                            onClick: this._toggleLayoutOptions
                        }, void 0, n("Editor|Advanced"), (0, O.default)("i", {
                            className: "fa fa-angle-down",
                            style: {
                                marginLeft: "5px"
                            }
                        }))), (!s || u) && (0, O.default)(ce.default, {}, void 0, i && (0, O.default)(Le.default, {
                            component: re.default.div,
                            className: "layout-panel"
                        }, void 0, this.showBaseRotationDropdown && (0, O.default)(Ue.BaseRotationDropDown, {
                            selectedKey: l,
                            rotationKeys: this.getRotationKeys(),
                            onChangeKey: this._onChangeRotationKey
                        }), this.renderLayoutOptions && this.renderLayoutOptions(), !r && (0, O.default)(Ye, {
                            skipS5Padding: "footer" === this.sectionName,
                            updatePadding: this.props.updatePadding,
                            currentPadding: this.props.padding,
                            themeName: o
                        }), u && this._renderDragModeButton(), this.renderExtraLayoutButtons && this.renderExtraLayoutButtons(), (0, O.default)("div", {
                            className: "save-button green s-btn small",
                            onClick: this._onClickSave
                        }, void 0, n("Editor|Save"))))))
                    }
                }]), r
            }(ne.default.Component)) || g
        },
        467338: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r, s, u, d, c, f = a(812077),
                m = (0, l.default)(f),
                g = a(726394),
                p = (0, l.default)(g),
                h = a(569198),
                v = (0, l.default)(h),
                y = a(705824),
                b = (0, l.default)(y),
                _ = a(351379),
                C = (0, l.default)(_),
                N = a(900214),
                w = (0, l.default)(N),
                x = a(231474),
                k = (0, l.default)(x),
                E = a(566380),
                L = (0, l.default)(E);
            a(974916), a(115306), a(209653), a(569600);
            var S = a(2991),
                B = (0, l.default)(S),
                T = a(977766),
                P = (0, l.default)(T),
                I = a(686902),
                O = (0, l.default)(I),
                M = a(981643),
                D = (0, l.default)(M),
                R = a(51942),
                A = (0, l.default)(R),
                U = a(366757),
                H = ((0, l.default)(U), a(914578)),
                F = (0, l.default)(H),
                V = a(294184),
                Z = (0, l.default)(V),
                z = a(527451),
                K = a(109245),
                W = (0, l.default)(K),
                j = a(97467),
                G = (0, l.default)(j),
                Y = a(604990),
                q = (0, l.default)(Y),
                J = a(234584),
                Q = (0, l.default)(J),
                $ = a(183123),
                X = (0, l.default)($),
                ee = a(851922),
                te = (0, l.default)(ee),
                ae = a(766463),
                ne = a(921003),
                oe = (0, l.default)(ne),
                ie = a(381633),
                le = a(141655),
                re = (0, l.default)(le);
            var se = W.default.getNewLayoutTemplates(),
                ue = function(e) {
                    (0, C.default)(l, e);
                    var t, a, i = (t = l, a = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, L.default)(t);
                        if (a) {
                            var i = (0, L.default)(this).constructor;
                            e = o(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, w.default)(this, e)
                    });

                    function l(e) {
                        var t, a;
                        return (0, p.default)(this, l), (a = i.call(this, e)).cacheLevel = -1, a.sectionName = "blog section", a.superComponentDidMount = (0, k.default)((t = (0, b.default)(a), (0, L.default)(l.prototype)), "componentDidMount", t), a
                    }
                    return (0, v.default)(l, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.superComponentDidMount(), (0, this.props.addBlogCategoriesChangeListener)((function() {
                                e.forceUpdate()
                            })), this._initNewLayout()
                        }
                    }, {
                        key: "_initNewLayout",
                        value: function() {
                            var e = this.props,
                                t = e.sectionLayoutConfig,
                                a = e.layoutVariation;
                            e.isNewBlogLayout && !t.get("templateName") && ((0, ae.saveNewLayoutConfig)(t, W.default.getNewLayoutConfigByVariation(a)), re.default.save())
                        }
                    }, {
                        key: "_saveNewLayoutByTemplate",
                        value: function(e) {
                            var t = this.props.sectionLayoutConfig;
                            (0, ae.saveNewLayoutConfig)(t, W.default.getNewLayoutConfigByTemplate(e)), re.default.save(), this._trackNewLayout(e)
                        }
                    }, {
                        key: "_trackNewLayout",
                        value: function(e) {
                            if (e && "string" == typeof e) {
                                var t = 1 === e.length ? "Layout ".concat(e) : e;
                                window.analytics.track("Blog Layout - Click ".concat(t), {
                                    "user id": this.props.userId,
                                    "site id": this.props.siteId,
                                    blog_layout: e.toLowerCase()
                                })
                            }
                        }
                    }, {
                        key: "_saveNewLayout",
                        value: function(e, t) {
                            var a = this._getLayoutConfigBinding();
                            if (a) {
                                var n = a.get("structure"),
                                    o = a.get("imageShape"),
                                    i = a.get("columns");
                                "structure" === e && "rows" === t && "rows" !== n && a.set("columns", 1), "structure" === e && "tiled" === t && "tiled" !== n && i <= 1 && a.set("columns", 2), "structure" === e && "card" === t && "card" !== n && a.set("snippetLength", "none"), "structure" !== e || "rows" === t || "rows" !== n || "none" !== o && "circle" !== o || a.set("imageShape", "square"), a.set(e, t), re.default.save()
                            }
                        }
                    }, {
                        key: "getRotationKeys",
                        value: function() {
                            this.props.themeName;
                            var e, t = this._getParsedLayoutVariation(),
                                a = t.columns,
                                n = t.thumbnail,
                                o = t.snippet,
                                i = t.showCategoryTabs;
                            return (0, B.default)(e = this.props.layoutOptions).call(e, (function(e) {
                                var t, l = e.replace("thumbnail", "smallCircle" === n || "smallSquare" === n ? n : "smallCircle");
                                return l = (l = l.replace("snippet", "short" === o || "long" === o ? o : "short")).replace("num", "one" !== a ? a : "three"), (0, P.default)(t = "".concat(l, "-")).call(t, i ? "show" : "none")
                            }))
                        }
                    }, {
                        key: "_renderColumnsButton",
                        value: function() {
                            var e = this,
                                t = this._getParsedLayoutVariation(),
                                a = t.columns,
                                o = (0, t.getAllColumns)(),
                                i = (0, O.default)(o);
                            return (0, m.default)(G.default, {
                                keys: i,
                                selectedKey: a,
                                textMapping: function(e) {
                                    return o[e]
                                },
                                labelText: n("Editor|Columns Per Row"),
                                className: "small-buttons four",
                                onSelect: function(t) {
                                    return e._changeColumns({
                                        columns: t
                                    })
                                }
                            })
                        }
                    }, {
                        key: "_renderThumbnailDropdown",
                        value: function() {
                            var e = this,
                                t = this._getParsedLayoutVariation().getThumbnailSelectItem();
                            return t.length > 0 && (0, m.default)("div", {
                                className: "s-layout-menu-field drop-down-select"
                            }, void 0, (0, m.default)("div", {
                                className: "s-layout-menu-label"
                            }, void 0, n("Editor|Thumbnail")), (0, m.default)("select", {
                                value: this._getParsedLayoutVariation().thumbnail,
                                onChange: function(t) {
                                    return e._changeThumbnail({
                                        thumbnail: t.target.value
                                    })
                                }
                            }, void 0, (0, B.default)(t).call(t, (function(e, t) {
                                return (0, m.default)("option", {
                                    value: e.value
                                }, t, e.name)
                            }))))
                        }
                    }, {
                        key: "_renderSnippetDropdown",
                        value: function() {
                            var e = this,
                                t = this._getParsedLayoutVariation().getSnippetSelectItem();
                            return t.length > 1 && (0, m.default)("div", {
                                className: "s-layout-menu-field drop-down-select"
                            }, void 0, (0, m.default)("div", {
                                className: "s-layout-menu-label"
                            }, void 0, n("Editor|Snippet")), (0, m.default)("select", {
                                value: this._getParsedLayoutVariation().snippet,
                                onChange: function(t) {
                                    return e._patchLayout({
                                        snippet: t.target.value
                                    })
                                }
                            }, void 0, (0, B.default)(t).call(t, (function(e, t) {
                                return (0, m.default)("option", {
                                    value: e.value
                                }, t, e.name)
                            }))))
                        }
                    }, {
                        key: "_renderPostPerPageDropdown",
                        value: function() {
                            var e, t = this;
                            return (0, m.default)("div", {
                                className: "s-layout-menu-field drop-down-select"
                            }, void 0, (0, m.default)("div", {
                                className: "s-layout-menu-label"
                            }, void 0, n("Editor|Posts Per Page")), (0, m.default)("select", {
                                value: this._getBlogNumber(),
                                onChange: function(e) {
                                    t._changeBlogNumber(e.target.value)
                                }
                            }, void 0, (0, B.default)(e = F.default.range(3, 21)).call(e, (function(e, t) {
                                return (0, m.default)("option", {
                                    value: e
                                }, t, e)
                            }))))
                        }
                    }, {
                        key: "_renderShowCategoryCheckbox",
                        value: function() {
                            var e = this,
                                t = this._getParsedLayoutVariation().showCategoryTabs;
                            return (0, this.props.getCategories)().length > 0 && (0, m.default)("div", {
                                className: "s-layout-menu-field layout-level-button layout-checkbox dark-bg",
                                onClick: function() {
                                    e._patchLayout({
                                        showCategoryTabs: !t
                                    })
                                }
                            }, void 0, (0, m.default)("input", {
                                type: "checkbox",
                                checked: t,
                                onChange: function() {
                                    e._patchLayout({
                                        showCategoryTabs: !t
                                    })
                                }
                            }), (0, m.default)("span", {}, void 0, n("Editor|Show category tabs")))
                        }
                    }, {
                        key: "_renderNewLayoutOptions",
                        value: function() {
                            var e = this.props.sectionLayoutConfig;
                            return e ? e.get("customized") ? this._renderNewLayoutCustomized() : this._renderNewLayoutTemplates() : null
                        }
                    }, {
                        key: "_renderNewLayoutCustomized",
                        value: function() {
                            var e = this,
                                t = W.default.getNewLayoutOptions(this.props.sectionLayoutConfig);
                            return (0, B.default)(t).call(t, (function(t) {
                                return e.renderNewLayoutItem(t)
                            }))
                        }
                    }, {
                        key: "_renderNewLayoutTemplates",
                        value: function() {
                            var e = this,
                                t = this.props.sectionLayoutConfig,
                                a = Q.default.getIsRtlLayout(),
                                n = t.get("templateName");
                            return (0, m.default)("div", {
                                className: "layout-blog-template-wrapper layout-template-wrapper"
                            }, void 0, (0, B.default)(se).call(se, (function(t) {
                                var o = t.name,
                                    i = t.template;
                                return (0, m.default)("div", {
                                    onClick: function() {
                                        return e._saveNewLayoutByTemplate(o)
                                    },
                                    className: (0, Z.default)("item template-".concat(o.toLowerCase()), {
                                        selected: o === n,
                                        "rtl-layout": a
                                    })
                                }, o, i)
                            })))
                        }
                    }, {
                        key: "_handleRotateLayout",
                        value: function() {
                            var e = this.props,
                                t = e.sectionLayoutConfig;
                            if (e.isNewBlogLayout) {
                                var a = t.get("templateName") || "A",
                                    n = ["A", "B", "C", "D", "E", "F"],
                                    o = n[(0, D.default)(n).call(n, a) + 1] || "A";
                                return this._saveNewLayoutByTemplate(o), !0
                            }
                            return !1
                        }
                    }, {
                        key: "renderCustomBasicButton",
                        value: function(e) {
                            var t = this,
                                a = this.props,
                                o = a.sectionLayoutConfig,
                                i = a.isNewBlogLayout,
                                l = o.get("templateName"),
                                d = o.get("customized");
                            return i ? (0, m.default)(oe.default, {
                                className: "center small title layout-button s6-layout-button",
                                title: n("Editor|Swap Layout")
                            }, void 0, (0, m.default)("div", {
                                className: "status clickable title",
                                onClick: d ? e : function() {
                                    return t._handleRotateLayout(l)
                                }
                            }, void 0, n("Layout"), (0, m.default)("span", {}, void 0, (0, m.default)("span", {
                                className: (0, Z.default)("layout-status", {
                                    "is-blog-customized": d
                                })
                            }, void 0, d ? r || (r = (0, m.default)("i", {
                                className: "fa fa-pencil"
                            })) : l), !d && (s || (s = (0, m.default)("i", {
                                className: "entypo-arrows-ccw layout-icon"
                            }))))), (0, m.default)("div", {
                                className: "setting title clickable",
                                onClick: e
                            }, void 0, u || (u = (0, m.default)(ie.Icon, {
                                className: "fa-gear setting-icon",
                                type: "fa-gear"
                            })))) : null
                        }
                    }, {
                        key: "_getCustomLayoutStatus",
                        value: function() {
                            var e = this.props,
                                t = e.isNewBlogLayout,
                                a = e.sectionLayoutConfig;
                            return t ? a.get("templateName") || "A" : null
                        }
                    }, {
                        key: "renderExtraLayoutButtons",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.sectionLayoutConfig;
                            if (!t.isNewBlogLayout) return null;
                            var o = a.get("templateName"),
                                i = (0, m.default)(ie.Tooltip, {
                                    placement: "left",
                                    title: n("Editor|This section has been customized! Reset this section to start over with the original layout and content.")
                                }, "reset-button", (0, m.default)("div", {
                                    className: "reset-button no-margin s-btn small",
                                    onClick: function() {
                                        return e._saveNewLayoutByTemplate(o)
                                    }
                                }, void 0, d || (d = (0, m.default)("i", {
                                    className: "entypo-arrows-ccw reset-icon"
                                })), n("Editor|Reset"))),
                                l = (0, m.default)(ie.Tooltip, {
                                    placement: "left",
                                    title: n("Editor|View advanced layout options.")
                                }, "customize-button", (0, m.default)("div", {
                                    className: "customize-button no-margin s-btn small",
                                    onClick: function() {
                                        e._saveNewLayout("customized", !0), e._trackNewLayout("Customize")
                                    }
                                }, void 0, c || (c = (0, m.default)("i", {
                                    className: "entypo-pencil drag-icon"
                                })), n("Editor|Customize")));
                            return a.get("customized") ? i : l
                        }
                    }, {
                        key: "renderLayoutOptions",
                        value: function() {
                            var e = this.props.isNewBlogLayout;
                            return (0, m.default)("div", {}, void 0, !e && this._renderColumnsButton(), !e && this._renderThumbnailDropdown(), !e && this._renderSnippetDropdown(), e && this._renderNewLayoutOptions(), this._renderPostPerPageDropdown(), this._renderShowCategoryCheckbox())
                        }
                    }, {
                        key: "_getBlogNumber",
                        value: function() {
                            var e = this.props.layoutSetting.blogNumber,
                                t = q.default.getBlogSetting().previewNumber,
                                a = e;
                            return a || (a = t), a || 3
                        }
                    }, {
                        key: "_changeBlogNumber",
                        value: function(e) {
                            this.props.updateLayoutSettings({
                                blogNumber: Number(e)
                            })
                        }
                    }, {
                        key: "_changeThumbnail",
                        value: function(e) {
                            "one" !== this._getParsedLayoutVariation().columns && "card" === e.thumbnail && (e.snippet = "none"), this._patchLayout(e)
                        }
                    }, {
                        key: "_changeColumns",
                        value: function(e) {
                            var t = this._getParsedLayoutVariation().columns;
                            e.columns === t || "one" !== t && "one" !== e.columns || (e.thumbnail = "landscape", e.snippet = "none"), this._patchLayout(e)
                        }
                    }, {
                        key: "_patchLayout",
                        value: function(e) {
                            var t = (0, A.default)(this._getParsedLayoutVariation(), e).serialize();
                            this.props.updateLayout(t)
                        }
                    }, {
                        key: "_getParsedLayoutVariation",
                        value: function() {
                            return W.default.parseLayoutVariation(this._levelKeys.join("-"))
                        }
                    }]), l
                }(z.BaseLayoutButton),
                de = (0, te.default)(ue, [], (function() {
                    return {
                        themeName: Q.default.getThemeName(),
                        siteId: Q.default.getId(),
                        userId: Q.default.getUserId(),
                        isNewBlogLayout: X.default.getIsNewBlogLayout()
                    }
                }), (function() {
                    return {
                        getCategories: function() {
                            return q.default.getCategories()
                        },
                        addBlogCategoriesChangeListener: function(e) {
                            q.default.addBlogCategoriesChangeListener(e)
                        }
                    }
                }));
            t.default = de, e.exports = t.default
        },
        410730: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r, s = a(812077),
                u = (0, l.default)(s),
                d = a(726394),
                c = (0, l.default)(d),
                f = a(569198),
                m = (0, l.default)(f),
                g = a(705824),
                p = (0, l.default)(g),
                h = a(351379),
                v = (0, l.default)(h),
                y = a(900214),
                b = (0, l.default)(y),
                _ = a(566380),
                C = (0, l.default)(_),
                N = a(487672),
                w = (0, l.default)(N),
                x = a(2991),
                k = (0, l.default)(x),
                E = a(366757),
                L = ((0, l.default)(E), a(914578)),
                S = ((0, l.default)(L), a(527451));
            var B = function(e) {
                    (0, v.default)(l, e);
                    var t, a, i = (t = l, a = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, C.default)(t);
                        if (a) {
                            var i = (0, C.default)(this).constructor;
                            e = o(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, b.default)(this, e)
                    });

                    function l(e) {
                        var t;
                        return (0, c.default)(this, l), t = i.call(this, e), (0, w.default)((0, p.default)(t), "toggleCheckbox", (function(e, a) {
                            t.props.binding.sub("display_settings").set(e, a), t.savePage(), "show_map" === e ? r.track("".concat(a ? "Add" : "Remove", " Map - Contact Form Section - Editor v1")) : r.track("".concat(a ? "Add" : "Remove", " Contact Info - Contact Form Section - Editor v1"))
                        })), (0, w.default)((0, p.default)(t), "getCheckboxOptions", (function() {
                            var e = t.props.binding,
                                a = e.get(["display_settings", "show_map"]),
                                o = e.get(["display_settings", "show_info"]);
                            return [{
                                label: n("EditorSettings|Map"),
                                type: "show_map",
                                checked: a
                            }, {
                                label: n("Contact Info"),
                                type: "show_info",
                                checked: o
                            }]
                        })), t.sectionName = "contact form section", t
                    }
                    return (0, m.default)(l, [{
                        key: "getRotationKeys",
                        value: function() {
                            return []
                        }
                    }, {
                        key: "renderLayoutOptions",
                        value: function() {
                            var e = this,
                                t = this.getCheckboxOptions();
                            return (0, u.default)("div", {}, void 0, (0, k.default)(t).call(t, (function(t) {
                                return (0, u.default)("div", {
                                    className: "s-layout-menu-field layout-level-button layout-checkbox dark-bg",
                                    onClick: function() {
                                        e.toggleCheckbox(t.type, !t.checked)
                                    }
                                }, void 0, (0, u.default)("input", {
                                    type: "checkbox",
                                    checked: t.checked,
                                    onChange: function() {
                                        e.toggleCheckbox(t.type, !t.checked)
                                    }
                                }), (0, u.default)("span", {}, void 0, t.label))
                            })))
                        }
                    }]), l
                }(S.BaseLayoutButton),
                T = (0, S.connectToStores)(B);
            t.default = T, e.exports = t.default
        },
        332347: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r, s, u, d = a(418777),
                c = (0, l.default)(d),
                f = a(812077),
                m = (0, l.default)(f),
                g = a(726394),
                p = (0, l.default)(g),
                h = a(569198),
                v = (0, l.default)(h),
                y = a(705824),
                b = (0, l.default)(y),
                _ = a(351379),
                C = (0, l.default)(_),
                N = a(900214),
                w = (0, l.default)(N),
                x = a(566380),
                k = (0, l.default)(x),
                E = a(487672),
                L = (0, l.default)(E);
            a(569600), a(209653);
            var S = a(981643),
                B = (0, l.default)(S),
                T = a(2991),
                P = (0, l.default)(T),
                I = a(54103),
                O = (0, l.default)(I),
                M = a(977766),
                D = (0, l.default)(M),
                R = a(51942),
                A = (0, l.default)(R),
                U = a(366757),
                H = (0, l.default)(U),
                F = a(914578),
                V = (0, l.default)(F),
                Z = a(294184),
                z = (0, l.default)(Z),
                K = a(459800),
                W = a(527451),
                j = a(452255),
                G = (0, l.default)(j),
                Y = a(183123),
                q = (0, l.default)(Y),
                J = a(266004),
                Q = (0, l.default)(J),
                $ = a(32386),
                X = (0, l.default)($),
                ee = a(234584),
                te = (0, l.default)(ee),
                ae = a(141655),
                ne = (0, l.default)(ae),
                oe = a(766463),
                ie = a(748141),
                le = a(381633);
            var re = G.default.getNewLayoutTemplates(),
                se = {
                    column1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                    column2: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
                    column3: [3, 6, 9, 12, 15, 18, 21],
                    column4: [4, 8, 12, 16, 20, 24]
                },
                ue = function(e) {
                    (0, C.default)(d, e);
                    var t, i, l = (t = d, i = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, k.default)(t);
                        if (i) {
                            var n = (0, k.default)(this).constructor;
                            e = o(a, arguments, n)
                        } else e = a.apply(this, arguments);
                        return (0, w.default)(this, e)
                    });

                    function d(e) {
                        var t;
                        return (0, p.default)(this, d), t = l.call(this, e), (0, L.default)((0, b.default)(t), "handleReviewChange", (function() {
                            var e = t.props.layoutConfig,
                                a = e.get("disabledProductReview");
                            e.set("disabledProductReview", !a), t._saveNewLayout()
                        })), (0, L.default)((0, b.default)(t), "_getCustomLayoutClass", (function() {
                            return t.props.layoutConfig.get("customized") ? "is-blog-customized" : ""
                        })), (0, L.default)((0, b.default)(t), "_getCustomLayoutStatus", (function() {
                            var e = t.props,
                                a = e.isNewLayout,
                                n = e.layoutConfig,
                                o = n.get("templateName"),
                                i = n.get("customized");
                            return a ? i ? r || (r = (0, m.default)("i", {
                                className: "fa fa-pencil"
                            })) : o : null
                        })), (0, L.default)((0, b.default)(t), "_handleRotateLayout", (function() {
                            var e = t.props,
                                a = e.isNewLayout,
                                n = e.layoutConfig,
                                o = n.get("customized"),
                                i = n.get("templateName"),
                                l = ie.TEMPLATE_NAME[(0, B.default)(ie.TEMPLATE_NAME).call(ie.TEMPLATE_NAME, i) + 1] || "A";
                            return !!a && (o ? (t._toggleLayoutOptions(), !0) : (t._saveNewLayoutByTemplate(l), !0))
                        })), (0, L.default)((0, b.default)(t), "_saveNewLayout", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = t.props.sectionLayoutConfig,
                                o = t.props.layoutConfig,
                                i = o.get("imageShape");
                            e && (o = o.set(e, a)), "structure" === e && "card" === a && "auto" === i && (o = o.set("imageShape", "square")), "columns" === e && (o = o.set("productPerPage", t.getProductQuantityByColumn())), n !== o && (0, oe.saveNewLayoutConfig)(n, o), ne.default.save()
                        })), (0, L.default)((0, b.default)(t), "_renderNewLayoutTemplates", (function() {
                            var e = t.props.layoutConfig,
                                a = te.default.getIsRtlLayout(),
                                n = e.get("templateName");
                            return (0, m.default)("div", {
                                className: "layout-blog-template-wrapper layout-template-wrapper"
                            }, void 0, (0, P.default)(re).call(re, (function(e) {
                                var o, i = e.name,
                                    l = e.template;
                                return (0, m.default)("div", {
                                    onClick: (0, O.default)(o = t._saveNewLayoutByTemplate).call(o, (0, b.default)(t), i),
                                    className: (0, z.default)("item template-".concat(i.toLowerCase()), {
                                        selected: i === n,
                                        "rtl-layout": a
                                    })
                                }, i, l)
                            })))
                        })), (0, L.default)((0, b.default)(t), "_renderFilterCheckBox", (function() {
                            return t.props.isEcommerce ? t._renderCheckBox({
                                levelNum: 2,
                                onChange: function(e, a) {
                                    return t.toggleFilter(e, a)
                                },
                                checkedKey: "filter",
                                isNewKey: !0,
                                unCheckedKey: "no_filter",
                                labelText: n("Ecommerce|Show filter")
                            }) : null
                        })), (0, L.default)((0, b.default)(t), "_renderReviewCheckBox", (function() {
                            var e = t.props,
                                a = e.isEcommerce,
                                o = e.layoutConfig,
                                i = e.productReview;
                            return a && i ? t._renderBaseCheckBox({
                                checked: o.get("disabledProductReview"),
                                labelText: n("Editor|Show product rating"),
                                handleChange: t.handleReviewChange
                            }) : null
                        })), (0, L.default)((0, b.default)(t), "_renderProductPerSelect", (function() {
                            var e = t.props.layoutConfig,
                                a = se["column".concat(e.get("columns") || 1)],
                                o = {
                                    key: "productPerPage",
                                    label: function() {
                                        return n("Ecommerce|Products Per Page")
                                    },
                                    component: "select",
                                    defaultValue: 20,
                                    children: (0, P.default)(a).call(a, (function(e) {
                                        return {
                                            value: e,
                                            label: function() {
                                                return e
                                            }
                                        }
                                    }))
                                };
                            return t.renderNewLayoutItem(o)
                        })), t.cacheLevel = -1, t.sectionName = "store section", t
                    }
                    return (0, v.default)(d, [{
                        key: "updateToDefaultLayout",
                        value: function(e) {
                            var t = this.props.themeName,
                                a = V.default.clone(this._levelKeys);
                            a[0] = e;
                            var n = G.default.getDefaultLayoutKey(t, a.join("-"));
                            this.props.updateLayout(n)
                        }
                    }, {
                        key: "getRotationKeys",
                        value: function() {
                            var e, t = (0, c.default)(this._levelKeys, 1)[0];
                            return (0, P.default)(e = this._getKeysByLevel(1)).call(e, (function(e) {
                                var a;
                                return (0, D.default)(a = "".concat(t, "-")).call(a, e)
                            }))
                        }
                    }, {
                        key: "getButtonClassMapping",
                        value: function() {
                            return ["", this._getSmallButtonClass(1)]
                        }
                    }, {
                        key: "getProductQuantityByColumn",
                        value: function(e) {
                            for (var t = this.props.layoutConfig, a = e || t.get("columns") || 1, n = se["column".concat(a)], o = (null == t ? void 0 : t.get("productPerPage")) || 20, i = Number.MAX_VALUE, l = 0, r = 0; r < n.length; r++) {
                                var s = Math.abs(n[r] - o);
                                Math.abs(n[r] - o) <= i && (l = r, i = s)
                            }
                            return n[l] || n[n.length - 1]
                        }
                    }, {
                        key: "toggleFilter",
                        value: function(e, t) {
                            var o = Q.default.getSettings(),
                                i = o && o.productFilters || [];
                            if (!i || i.length <= 0) {
                                if ("editor" === X.default.getRole()) return window.alert(n("Editor|This action is blocked for now. Please contact your site owner to grant you permission to publish site changes."));
                                var l = this.props.binding.get("id");
                                ne.default.openEcommerceManagerDialog({
                                    tab: "category",
                                    sectionId: l
                                })
                            } else {
                                var r = V.default.clone(this._levelKeys);
                                r[e] = t;
                                var s = V.default.merge([], r);
                                this._updateLayout(s), a(154920).track("filter" === t ? "Editor - Store Section - Show Filter" : "Editor - Store Section - Hide Filter", {
                                    siteId: te.default.getId()
                                })
                            }
                        }
                    }, {
                        key: "_saveNewLayoutByTemplate",
                        value: function(e) {
                            var t = this.props,
                                a = t.sectionLayoutConfig,
                                n = t.layoutConfig,
                                o = G.default.getNewLayoutConfigByTemplate(e, n.get("disabledProductReview")),
                                i = this.getProductQuantityByColumn(o.columns);
                            n.set("productPerPage", i), (0, oe.saveNewLayoutConfig)(a, (0, A.default)(o, {
                                productPerPage: i
                            })), ne.default.save()
                        }
                    }, {
                        key: "_renderNewLayoutCustomized",
                        value: function() {
                            var e = this,
                                t = this.props.layoutConfig,
                                a = G.default.getNewLayoutOptions(t);
                            return (0, P.default)(a).call(a, (function(t) {
                                return e.renderNewLayoutItem(t)
                            }))
                        }
                    }, {
                        key: "_renderOldLayoutOptions",
                        value: function() {
                            var e = this,
                                t = (0, c.default)(this._levelKeys, 2),
                                a = t[0],
                                o = t[1];
                            return (0, m.default)("div", {}, void 0, this._getKeysByLevel(1) && this._renderLayoutButtons(1, n("Editor|Columns Per Row")), "one" !== o && (0, m.default)("div", {
                                className: "s-layout-menu-field drop-down-select"
                            }, void 0, (0, m.default)("div", {
                                className: "s-layout-menu-label"
                            }, void 0, n("Editor|Image Size")), (0, m.default)("select", {
                                value: a,
                                onChange: function(t) {
                                    return e._getSetLevelFn(0, t.target.value)()
                                }
                            }, void 0, (0, m.default)("option", {
                                value: "landscape"
                            }, void 0, n("Editor|Landscape")), (0, m.default)("option", {
                                value: "square"
                            }, void 0, n("Editor|Square")), (0, m.default)("option", {
                                value: "portrait"
                            }, void 0, n("Editor|Portrait")), (0, m.default)("option", {
                                value: "auto"
                            }, void 0, n("Editor|Auto")))), this._renderProductPerSelect(), this._renderFilterCheckBox())
                        }
                    }, {
                        key: "_renderNewLayoutOptions",
                        value: function() {
                            var e = this.props.layoutConfig.get("customized") ? this._renderNewLayoutCustomized() : this._renderNewLayoutTemplates();
                            return (0, m.default)(H.default.Fragment, {}, void 0, e, this._renderProductPerSelect(), this._renderFilterCheckBox(), this._renderReviewCheckBox())
                        }
                    }, {
                        key: "renderExtraLayoutButtons",
                        value: function() {
                            var e, t, a = this.props,
                                o = a.layoutConfig;
                            if (!a.isNewLayout) return null;
                            var i = o.get("templateName"),
                                l = o.get("customized"),
                                r = (0, m.default)(le.Tooltip, {
                                    placement: "left",
                                    title: n("Editor|This section has been customized! Reset this section to start over with the original layout and content.")
                                }, "reset-button", (0, m.default)("div", {
                                    className: "reset-button no-margin s-btn small",
                                    onClick: (0, O.default)(e = this._saveNewLayoutByTemplate).call(e, this, i)
                                }, void 0, s || (s = (0, m.default)("i", {
                                    className: "entypo-arrows-ccw reset-icon"
                                })), n("Editor|Reset"))),
                                d = (0, m.default)(le.Tooltip, {
                                    placement: "left",
                                    title: n("Editor|View advanced layout options.")
                                }, "customize-button", (0, m.default)("div", {
                                    className: "customize-button no-margin s-btn small",
                                    onClick: (0, O.default)(t = this._saveNewLayout).call(t, this, "customized", !0)
                                }, void 0, u || (u = (0, m.default)("i", {
                                    className: "entypo-pencil drag-icon"
                                })), n("Editor|Customize")));
                            return l ? r : d
                        }
                    }, {
                        key: "renderLayoutOptions",
                        value: function() {
                            return this.props.isNewLayout ? this._renderNewLayoutOptions() : this._renderOldLayoutOptions()
                        }
                    }]), d
                }(W.BaseLayoutButton),
                de = (0, K.connect)((function(e, t) {
                    var a = t.sectionLayoutConfig,
                        n = t.layoutVariation;
                    return {
                        layoutConfig: a.get("templateName") ? a : G.default.transformOldLayout(n),
                        siteId: te.default.getId(),
                        isNewLayout: q.default.getIsNewStoreLayout(),
                        productReview: te.default.getEnableProductReview()
                    }
                }), null)((0, W.connectToStores)(ue));
            t.default = de, e.exports = t.default
        },
        790474: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r = a(812077),
                s = (0, l.default)(r),
                u = a(726394),
                d = (0, l.default)(u),
                c = a(569198),
                f = (0, l.default)(c),
                m = a(351379),
                g = (0, l.default)(m),
                p = a(900214),
                h = (0, l.default)(p),
                v = a(566380),
                y = (0, l.default)(v),
                b = a(981643),
                _ = (0, l.default)(b),
                C = a(2991),
                N = (0, l.default)(C),
                w = a(366757),
                x = ((0, l.default)(w), a(653114)),
                k = a(141655),
                E = (0, l.default)(k),
                L = a(766463),
                S = a(527451);
            var B = function(e) {
                    (0, g.default)(r, e);
                    var t, i, l = (t = r, i = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, y.default)(t);
                        if (i) {
                            var n = (0, y.default)(this).constructor;
                            e = o(a, arguments, n)
                        } else e = a.apply(this, arguments);
                        return (0, h.default)(this, e)
                    });

                    function r(e) {
                        var t;
                        return (0, d.default)(this, r), (t = l.call(this, e)).cacheLevel = -1, t.hideAdvancedOptions = !1, t.showBaseRotationDropdown = !1, t.buttonTitle = n("Editor|Layout"), t
                    }
                    return (0, f.default)(r, [{
                        key: "_saveNewLayout",
                        value: function(e, t) {
                            var a = this._getLayoutConfigBinding();
                            a && (a.set(e, t), E.default.save())
                        }
                    }, {
                        key: "getRotationKeys",
                        value: function() {
                            return x.FEATURE_LIST_LAYOUTS
                        }
                    }, {
                        key: "_saveNewLayoutByTemplate",
                        value: function(e) {
                            var t = this.props.sectionLayoutConfig;
                            (0, L.saveNewLayoutConfig)(t, e), E.default.save()
                        }
                    }, {
                        key: "_handleRotateLayout",
                        value: function() {
                            var e = this.props.sectionLayoutConfig.get("layout") || x.FEATURE_LIST_LAYOUTS[0],
                                t = x.FEATURE_LIST_LAYOUTS,
                                a = t[(0, _.default)(t).call(t, e) + 1] || x.FEATURE_LIST_LAYOUTS[0];
                            return this._saveNewLayoutByTemplate(x.DEFAULT_LAYOUT_CONFIG[a]), !0
                        }
                    }, {
                        key: "_getCustomLayoutStatus",
                        value: function() {
                            return this.props.sectionLayoutConfig.get("layout") || x.FEATURE_LIST_LAYOUTS[0]
                        }
                    }, {
                        key: "_renderCustomizedLayoutPanel",
                        value: function() {
                            var e = this,
                                t = a(532408).getLayoutOptions(this.props.sectionLayoutConfig);
                            return (0, N.default)(t).call(t, (function(t) {
                                return e.renderNewLayoutItem(t)
                            }))
                        }
                    }, {
                        key: "renderLayoutOptions",
                        value: function() {
                            return (0, s.default)("div", {}, void 0, this._renderCustomizedLayoutPanel())
                        }
                    }]), r
                }(S.BaseLayoutButton),
                T = (0, S.connectToStores)(B);
            t.default = T, e.exports = t.default
        },
        504180: function(e, t, a) {
            "use strict";
            var n = a(501068),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(726394),
                r = (0, i.default)(l),
                s = a(569198),
                u = (0, i.default)(s),
                d = a(351379),
                c = (0, i.default)(d),
                f = a(900214),
                m = (0, i.default)(f),
                g = a(566380),
                p = (0, i.default)(g),
                h = a(527451),
                v = a(914578),
                y = (0, i.default)(v);
            var b = function(e) {
                    (0, c.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !n) return !1;
                        if (n.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, p.default)(t);
                        if (a) {
                            var i = (0, p.default)(this).constructor;
                            e = n(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, m.default)(this, e)
                    });

                    function i(e) {
                        var t;
                        return (0, r.default)(this, i), (t = o.call(this, e)).showBaseRotationDropdown = !0, t.sectionName = "footer", t
                    }
                    return (0, u.default)(i, [{
                        key: "getRotationKeys",
                        value: function() {
                            return y.default.pluck(this.props.layoutOptions, "key")
                        }
                    }]), i
                }(h.BaseLayoutButton),
                _ = (0, h.connectToStores)(b);
            t.default = _, e.exports = t.default
        },
        647851: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r, s, u, d, c, f = a(812077),
                m = (0, l.default)(f),
                g = a(726394),
                p = (0, l.default)(g),
                h = a(569198),
                v = (0, l.default)(h),
                y = a(705824),
                b = (0, l.default)(y),
                _ = a(351379),
                C = (0, l.default)(_),
                N = a(900214),
                w = (0, l.default)(N),
                x = a(566380),
                k = (0, l.default)(x),
                E = a(487672),
                L = (0, l.default)(E),
                S = a(981643),
                B = (0, l.default)(S),
                T = a(620116),
                P = (0, l.default)(T),
                I = a(2991),
                O = (0, l.default)(I),
                M = a(394198),
                D = (0, l.default)(M),
                R = a(366757),
                A = ((0, l.default)(R), a(914578)),
                U = (0, l.default)(A),
                H = a(294184),
                F = (0, l.default)(H),
                V = a(234584),
                Z = (0, l.default)(V),
                z = a(527451),
                K = a(10589),
                W = (0, l.default)(K),
                j = a(766463),
                G = a(921003),
                Y = (0, l.default)(G),
                q = a(381633),
                J = a(141655),
                Q = (0, l.default)(J);
            var $ = W.default.getNewLayoutTemplates(),
                X = function(e) {
                    (0, C.default)(l, e);
                    var t, a, i = (t = l, a = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, k.default)(t);
                        if (a) {
                            var i = (0, k.default)(this).constructor;
                            e = o(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, w.default)(this, e)
                    });

                    function l(e) {
                        var t;
                        return (0, p.default)(this, l), t = i.call(this, e), (0, L.default)((0, b.default)(t), "_renderCustomizedLayout", (function() {
                            var e = W.default.getNewLayoutOptions(t.props.sectionLayoutConfig),
                                a = Z.default.getTheme().get("name"),
                                n = ["profile", "perspective", "ion", "sleek"];
                            return -1 !== (0, B.default)(n).call(n, a) && (e = (0, P.default)(e).call(e, (function(e) {
                                return "width" !== e.key
                            }))), (0, O.default)(e).call(e, (function(e) {
                                return t.renderNewLayoutItem(e)
                            }))
                        })), (0, L.default)((0, b.default)(t), "_renderPresetLayout", (function() {
                            var e = t.props.sectionLayoutConfig.get("templateName");
                            return (0, m.default)("div", {
                                className: "layout-gallery-template-wrapper layout-template-wrapper"
                            }, void 0, (0, O.default)($).call($, (function(a) {
                                var n = a.name,
                                    o = a.template;
                                return (0, m.default)("div", {
                                    onClick: function() {
                                        return t._saveNewLayoutByTemplate(n)
                                    },
                                    className: (0, F.default)("item template-".concat(n.toLowerCase()), {
                                        selected: n === e
                                    })
                                }, void 0, o)
                            })))
                        })), (0, L.default)((0, b.default)(t), "renderLayoutOptions", (function() {
                            var e = t.props,
                                a = e.sectionLayoutConfig,
                                n = e.isNewGallery;
                            return a && n ? a.get("customized") ? t._renderCustomizedLayout() : t._renderPresetLayout() : null
                        })), t.showBaseRotationDropdown = !0, e.isNewGallery && (t.showBaseRotationDropdown = !1), t.sectionName = "new gallery", t
                    }
                    return (0, v.default)(l, [{
                        key: "getRotationKeys",
                        value: function() {
                            return U.default.pluck(this.props.layoutOptions, "key")
                        }
                    }, {
                        key: "_saveNewLayout",
                        value: function(e, t) {
                            var a = this._getLayoutConfigBinding();
                            if (a) {
                                var n, o = a.get("structure"),
                                    i = (0, D.default)(a.get("columns"));
                                "structure" === e && "tiled" === t && "grid" === o && -1 !== (0, B.default)(n = [1, 4]).call(n, i) && a.set("columns", 2), a.set(e, t), Q.default.save()
                            }
                        }
                    }, {
                        key: "_saveNewLayoutByTemplate",
                        value: function(e) {
                            var t = this.props.sectionLayoutConfig;
                            (0, j.saveNewLayoutConfig)(t, W.default.getNewLayoutConfigByTemplate(e)), Q.default.save()
                        }
                    }, {
                        key: "renderCustomBasicButton",
                        value: function(e) {
                            var t = this,
                                a = this.props,
                                o = a.sectionLayoutConfig,
                                i = a.isNewGallery,
                                l = o.get("templateName"),
                                d = o.get("customized");
                            return i ? (0, m.default)(Y.default, {
                                className: "center small title layout-button s6-layout-button",
                                title: n("Editor|Swap Layout")
                            }, void 0, (0, m.default)("div", {
                                className: "status clickable title",
                                onClick: d ? e : function() {
                                    return t._handleRotateLayout(l)
                                }
                            }, void 0, n("Layout"), (0, m.default)("span", {}, void 0, (0, m.default)("span", {
                                className: "layout-status"
                            }, void 0, d ? r || (r = (0, m.default)("i", {
                                className: "fa fa-pencil"
                            })) : l), !d && (s || (s = (0, m.default)("i", {
                                className: "entypo-arrows-ccw layout-icon"
                            }))))), (0, m.default)("div", {
                                className: "setting title clickable",
                                onClick: e
                            }, void 0, u || (u = (0, m.default)(q.Icon, {
                                className: "fa-gear setting-icon",
                                type: "fa-gear"
                            })))) : null
                        }
                    }, {
                        key: "_handleRotateLayout",
                        value: function() {
                            var e = this.props,
                                t = e.sectionLayoutConfig;
                            if (e.isNewGallery) {
                                var a = t.get("templateName") || "A",
                                    n = ["A", "B", "C", "D", "E", "F"],
                                    o = n[(0, B.default)(n).call(n, a) + 1] || "A";
                                return this._saveNewLayoutByTemplate(o), !0
                            }
                            return !1
                        }
                    }, {
                        key: "_getCustomLayoutStatus",
                        value: function() {
                            var e = this.props,
                                t = e.isNewGallery,
                                a = e.sectionLayoutConfig;
                            return t ? a.get("templateName") || "A" : null
                        }
                    }, {
                        key: "renderExtraLayoutButtons",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.sectionLayoutConfig;
                            if (!t.isNewGallery) return null;
                            var o = a.get("templateName"),
                                i = (0, m.default)(q.Tooltip, {
                                    placement: "left",
                                    title: n("Editor|This section has been customized! Reset this section to start over with the original layout and content.")
                                }, "reset-button", (0, m.default)("div", {
                                    className: "reset-button no-margin s-btn small",
                                    onClick: function() {
                                        return e._saveNewLayoutByTemplate(o)
                                    }
                                }, void 0, d || (d = (0, m.default)("i", {
                                    className: "entypo-arrows-ccw reset-icon"
                                })), n("Editor|Reset"))),
                                l = (0, m.default)(q.Tooltip, {
                                    placement: "left",
                                    title: n("Editor|View advanced layout options.")
                                }, "customize-button", (0, m.default)("div", {
                                    className: "customize-button no-margin s-btn small",
                                    onClick: function() {
                                        e._saveNewLayout("customized", !0), e._trackNewLayout("Customize")
                                    }
                                }, void 0, c || (c = (0, m.default)("i", {
                                    className: "entypo-pencil drag-icon"
                                })), n("Editor|Customize")));
                            return a.get("customized") ? i : l
                        }
                    }]), l
                }(z.BaseLayoutButton),
                ee = (0, z.connectToStores)(X);
            t.default = ee, e.exports = t.default
        },
        244467: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r, s = a(812077),
                u = (0, l.default)(s),
                d = a(726394),
                c = (0, l.default)(d),
                f = a(569198),
                m = (0, l.default)(f),
                g = a(351379),
                p = (0, l.default)(g),
                h = a(900214),
                v = (0, l.default)(h),
                y = a(566380),
                b = (0, l.default)(y);
            a(569600);
            var _ = a(678580),
                C = (0, l.default)(_),
                N = a(51942),
                w = (0, l.default)(N),
                x = a(2991),
                k = (0, l.default)(x),
                E = a(527451),
                L = a(312886),
                S = (0, l.default)(L),
                B = a(366757),
                T = ((0, l.default)(B), a(914578)),
                P = (0, l.default)(T),
                I = a(294184),
                O = (0, l.default)(I),
                M = a(97467),
                D = (0, l.default)(M),
                R = a(234584),
                A = (0, l.default)(R),
                U = a(219325),
                H = (0, l.default)(U);
            var F = function(e) {
                    (0, p.default)(l, e);
                    var t, a, i = (t = l, a = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, b.default)(t);
                        if (a) {
                            var i = (0, b.default)(this).constructor;
                            e = o(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, v.default)(this, e)
                    });

                    function l(e) {
                        var t;
                        return (0, c.default)(this, l), (t = i.call(this, e)).cacheLevel = -1, t.hideAdvancedOptions = !1, t.buttonTitle = n("Editor|Grid Layout"), t.sectionName = "grid", t
                    }
                    return (0, m.default)(l, [{
                        key: "getRotationKeys",
                        value: function() {
                            return []
                        }
                    }, {
                        key: "renderLayoutOptions",
                        value: function() {
                            var e = this._getParsedLayoutVariation();
                            return (0, u.default)("div", {}, void 0, this._renderMagazineGridToggle(), e.isGrid() ? this._renderGridUI() : this._renderMagazineUI(), this._renderDropdowns())
                        }
                    }, {
                        key: "_renderDropdowns",
                        value: function() {
                            var e, t = this,
                                a = A.default.getThemeName(),
                                o = null,
                                i = this._getParsedLayoutVariation();
                            return (0, C.default)(e = H.default.themesWithoutWideGridLayout).call(e, a) || (o = (0, u.default)("div", {
                                className: "s-layout-menu-field drop-down-select"
                            }, void 0, (0, u.default)("div", {
                                className: "s-layout-menu-label"
                            }, void 0, n("Editor|Content Width")), (0, u.default)("select", {
                                value: i.contentWidth,
                                onChange: function(e) {
                                    return t._patchLayout({
                                        contentWidth: e.target.value
                                    })
                                }
                            }, void 0, (0, u.default)("option", {
                                value: "normal"
                            }, void 0, n("Editor|Normal")), (0, u.default)("option", {
                                value: "wide"
                            }, void 0, n("Editor|Wide"))))), (0, u.default)("div", {}, void 0, (0, u.default)("div", {
                                className: "s-layout-menu-field drop-down-select"
                            }, void 0, (0, u.default)("div", {
                                className: "s-layout-menu-label"
                            }, void 0, n("Editor|Height")), (0, u.default)("select", {
                                value: this._getParsedLayoutVariation().cellHeight,
                                onChange: function(e) {
                                    return t._patchLayout({
                                        cellHeight: e.target.value
                                    })
                                }
                            }, void 0, (0, u.default)("option", {
                                value: "small"
                            }, void 0, n("Editor|Small")), (0, u.default)("option", {
                                value: "medium"
                            }, void 0, n("Editor|Medium")), (0, u.default)("option", {
                                value: "large"
                            }, void 0, n("Editor|Large")), i.canBeExtraLarge() ? (0, u.default)("option", {
                                value: "extraLarge"
                            }, void 0, n("Editor|Extra Large")) : null)), (0, u.default)("div", {
                                className: "s-layout-menu-field drop-down-select"
                            }, void 0, (0, u.default)("div", {
                                className: "s-layout-menu-label"
                            }, void 0, n("Editor|Spacing")), (0, u.default)("select", {
                                value: i.cellSpacing,
                                onChange: function(e) {
                                    return t._patchLayout({
                                        cellSpacing: e.target.value
                                    })
                                }
                            }, void 0, (0, u.default)("option", {
                                value: "none"
                            }, void 0, n("Editor|None")), (0, u.default)("option", {
                                value: "small"
                            }, void 0, n("Editor|Small")), (0, u.default)("option", {
                                value: "large"
                            }, void 0, n("Editor|Large")))), o)
                        }
                    }, {
                        key: "_renderMagazineGridToggle",
                        value: function() {
                            var e = this;
                            return (0, u.default)(D.default, {
                                keys: ["grid", "magazine"],
                                selectedKey: this._getParsedLayoutVariation().gridType,
                                textMapping: function(e) {
                                    return {
                                        grid: n("Editor|Grid"),
                                        magazine: n("Editor|Magazine")
                                    }[e]
                                },
                                className: "big-buttons",
                                onSelect: function(t) {
                                    var a = e._getParsedLayoutVariation().getCellCount(),
                                        n = {
                                            gridType: t
                                        };
                                    "magazine" === t ? n.magazineLayoutName = a <= 3 ? "twoLeftOneRight" : 4 === a ? "twoTopTwoBottom" : "twoTopThreeBottom" : a <= 4 ? (n.rows = 2, n.columns = 2) : (n.rows = 2, n.columns = 3), e._patchLayout(n)
                                }
                            })
                        }
                    }, {
                        key: "_patchLayout",
                        value: function(e) {
                            var t = (0, w.default)(this._getParsedLayoutVariation(), e).serialize();
                            this.props.updateLayout(t)
                        }
                    }, {
                        key: "_renderGridUI",
                        value: function() {
                            var e = this,
                                t = this._getParsedLayoutVariation();
                            return (0, u.default)(S.default, {
                                maxRows: 4,
                                maxColumns: 4,
                                selectedRows: t.rows,
                                selectedColumns: t.columns,
                                onSelect: function(t, a) {
                                    e._patchLayout({
                                        rows: t,
                                        columns: a
                                    })
                                }
                            })
                        }
                    }, {
                        key: "_renderMagazineUI",
                        value: function() {
                            var e = this,
                                t = (0, k.default)(P.default).call(P.default, H.default.magazineLayouts, (function(t) {
                                    var a, n = t.name === e._getParsedLayoutVariation().magazineLayoutName,
                                        o = (0, O.default)("s-grid-layout-button-magazine", {
                                            _selected: n
                                        }),
                                        i = (0, k.default)(a = P.default.range(0, t.cellCount)).call(a, (function(e) {
                                            return (0, u.default)("div", {
                                                className: "".concat("s-grid-section-cell _").concat(t.name)
                                            }, e, r || (r = (0, u.default)("div", {})))
                                        }));
                                    if ("oneLeftTwoRight" === t.name || "twoLeftOneRight" === t.name) {
                                        var l = "s-magazine-column _".concat(t.name);
                                        i = [(0, u.default)("div", {
                                            className: l
                                        }, "column-1", i[0], i[1]), (0, u.default)("div", {
                                            className: l
                                        }, "column-2", i[2])]
                                    }
                                    var s = (0, u.default)("div", {}, void 0, (0, u.default)("div", {
                                        className: "s-grid-layout-button-preview"
                                    }, void 0, i));
                                    return (0, u.default)("button", {
                                        onClick: function() {
                                            return e._patchLayout({
                                                magazineLayoutName: t.name
                                            })
                                        },
                                        className: o
                                    }, t.name, s)
                                }));
                            return (0, u.default)("div", {
                                className: "s-layout-menu-field s-grid-layout-buttons-magazine"
                            }, void 0, t)
                        }
                    }, {
                        key: "_getParsedLayoutVariation",
                        value: function() {
                            return H.default.parseLayoutVariation(this._levelKeys.join("-"))
                        }
                    }]), l
                }(E.BaseLayoutButton),
                V = (0, E.connectToStores)(F);
            t.default = V, e.exports = t.default
        },
        348113: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r = a(812077),
                s = (0, l.default)(r),
                u = a(726394),
                d = (0, l.default)(u),
                c = a(569198),
                f = (0, l.default)(c),
                m = a(351379),
                g = (0, l.default)(m),
                p = a(900214),
                h = (0, l.default)(p),
                v = a(566380),
                y = (0, l.default)(v),
                b = a(678580),
                _ = (0, l.default)(b),
                C = a(2991),
                N = (0, l.default)(C),
                w = a(977766),
                x = (0, l.default)(w),
                k = a(981643),
                E = (0, l.default)(k),
                L = a(366757),
                S = ((0, l.default)(L), a(527451));
            var B = function(e) {
                    (0, g.default)(l, e);
                    var t, a, i = (t = l, a = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, y.default)(t);
                        if (a) {
                            var i = (0, y.default)(this).constructor;
                            e = o(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, h.default)(this, e)
                    });

                    function l(e) {
                        var t;
                        (0, d.default)(this, l);
                        var a = (t = i.call(this, e)).props.themeName;
                        return t.cacheLevel = -1, "persona" !== a && "perspective" !== a || (t.hideAdvancedOptions = !0), t.sectionName = "new_hero", t
                    }
                    return (0, f.default)(l, [{
                        key: "getRotationKeys",
                        value: function() {
                            var e, t, a, n = this.props.themeName,
                                o = this._levelKeys[1];
                            return (0, _.default)(e = ["persona", "perspective"]).call(e, n) ? (0, N.default)(t = this._getKeysByLevel(0)).call(t, (function(e) {
                                var t;
                                return (0, x.default)(t = "".concat(e, "-")).call(t, o)
                            })) : "glow" === n ? (0, E.default)(a = this.props.layoutVariation).call(a, "unswap") > -1 ? ["button-left-unswap", "signup-left-unswap", "images-left-unswap", "button-right-unswap", "signup-right-unswap", "images-right-unswap", "button-noImage-unswap", "signup-noImage-unswap", "images-noImage-unswap"] : ["button-left-swap", "signup-left-swap", "images-left-swap", "button-right-swap", "signup-right-swap", "images-right-swap", "button-noImage-swap", "signup-noImage-swap", "images-noImage-swap"] : ["button-left", "signup-left", "images-left", "button-right", "signup-right", "images-right", "button-noImage", "signup-noImage", "images-noImage"]
                        }
                    }, {
                        key: "getButtonClassMapping",
                        value: function() {
                            return ["big-buttons", "big-buttons"]
                        }
                    }, {
                        key: "renderLayoutOptions",
                        value: function() {
                            var e = this.props.themeName;
                            return (0, s.default)("div", {}, void 0, this._getKeysByLevel(0) && this._renderLayoutButtons(0), this._getKeysByLevel(1) && this._renderLayoutButtons(1), "glow" === e && this._getKeysByLevel(2) && this._renderCheckBox({
                                levelNum: 2,
                                labelText: n("Editor|Swap Title"),
                                checkedKey: "swap",
                                unCheckedKey: "unswap"
                            }))
                        }
                    }]), l
                }(S.BaseLayoutButton),
                T = (0, S.connectToStores)(B);
            t.default = T, e.exports = t.default
        },
        460542: function(e, t, a) {
            "use strict";
            var n = a(501068),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(726394),
                r = (0, i.default)(l),
                s = a(569198),
                u = (0, i.default)(s),
                d = a(351379),
                c = (0, i.default)(d),
                f = a(900214),
                m = (0, i.default)(f),
                g = a(566380),
                p = (0, i.default)(g),
                h = a(527451);
            var v = function(e) {
                    (0, c.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !n) return !1;
                        if (n.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, p.default)(t);
                        if (a) {
                            var i = (0, p.default)(this).constructor;
                            e = n(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, m.default)(this, e)
                    });

                    function i(e) {
                        var t;
                        return (0, r.default)(this, i), (t = o.call(this, e)).cacheLevel = -1, t.showBaseRotationDropdown = !0, t.sectionName = "new_icon", t
                    }
                    return (0, u.default)(i, [{
                        key: "getRotationKeys",
                        value: function() {
                            return "perspective" === this.props.themeName ? ["mediaLeft-col", "mediaRight-col", "center-col"] : ["col", "natural"]
                        }
                    }]), i
                }(h.BaseLayoutButton),
                y = (0, h.connectToStores)(v);
            t.default = y, e.exports = t.default
        },
        97467: function(e, t, a) {
            "use strict";
            var n = a(501068),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(812077),
                r = (0, i.default)(l),
                s = a(726394),
                u = (0, i.default)(s),
                d = a(569198),
                c = (0, i.default)(d),
                f = a(351379),
                m = (0, i.default)(f),
                g = a(900214),
                p = (0, i.default)(g),
                h = a(566380),
                v = (0, i.default)(h),
                y = a(169301),
                b = (0, i.default)(y),
                _ = a(2991),
                C = (0, i.default)(_),
                N = a(366757),
                w = (0, i.default)(N),
                x = a(294184),
                k = (0, i.default)(x);
            var E = function(e) {
                (0, m.default)(i, e);
                var t, a, o = (t = i, a = function() {
                    if ("undefined" == typeof Reflect || !n) return !1;
                    if (n.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, o = (0, v.default)(t);
                    if (a) {
                        var i = (0, v.default)(this).constructor;
                        e = n(o, arguments, i)
                    } else e = o.apply(this, arguments);
                    return (0, p.default)(this, e)
                });

                function i() {
                    return (0, u.default)(this, i), o.apply(this, arguments)
                }
                return (0, c.default)(i, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = (0, b.default)(e),
                            a = e.selectedKey,
                            n = e.textMapping,
                            o = e.className,
                            i = e.onSelect,
                            l = e.labelText;
                        return (0, r.default)("div", {
                            className: "s-layout-menu-field layout-level-button dark-bg ".concat(o || "")
                        }, void 0, l && (0, r.default)("div", {
                            className: "s-layout-menu-label"
                        }, void 0, " ", l, " "), (0, r.default)("div", {}, void 0, (0, C.default)(t).call(t, (function(e) {
                            return (0, r.default)("div", {
                                className: (0, k.default)("s-btn small dark-gray no-margin", {
                                    selected: a === e
                                }),
                                onClick: function() {
                                    return i(e)
                                }
                            }, e, n(e))
                        }))))
                    }
                }]), i
            }(w.default.Component);
            t.default = E, e.exports = t.default
        },
        539232: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r = a(812077),
                s = (0, l.default)(r),
                u = a(418777),
                d = (0, l.default)(u),
                c = a(726394),
                f = (0, l.default)(c),
                m = a(569198),
                g = (0, l.default)(m),
                p = a(351379),
                h = (0, l.default)(p),
                v = a(900214),
                y = (0, l.default)(v),
                b = a(566380),
                _ = (0, l.default)(b),
                C = a(2991),
                N = (0, l.default)(C),
                w = a(977766),
                x = (0, l.default)(w),
                k = a(620116),
                E = (0, l.default)(k),
                L = a(678580),
                S = (0, l.default)(L);
            a(569600);
            var B = a(914578),
                T = (0, l.default)(B),
                P = a(366757),
                I = ((0, l.default)(P), a(527451)),
                O = a(453290);
            var M = function(e) {
                    (0, h.default)(r, e);
                    var t, i, l = (t = r, i = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, _.default)(t);
                        if (i) {
                            var n = (0, _.default)(this).constructor;
                            e = o(a, arguments, n)
                        } else e = a.apply(this, arguments);
                        return (0, y.default)(this, e)
                    });

                    function r(e) {
                        var t;
                        (0, f.default)(this, r), t = l.call(this, e);
                        var a = e.themeName,
                            n = e.sectionLayoutConfig;
                        return t.cacheLevel = "perspective" === a ? 1 : 0, t.sectionName = "new_media", n.get("isNewMedia") && (t.showBaseRotationDropdown = !0), t
                    }
                    return (0, g.default)(r, [{
                        key: "updateCachedKeys",
                        value: function(e) {
                            var t = "perspective" === this.props.themeName ? 3 : 2;
                            e[t] = this._levelKeys[t], this._updateLayout(e)
                        }
                    }, {
                        key: "updateToDefaultLayout",
                        value: function(e) {
                            var t = a(7146),
                                n = this.props.themeName,
                                o = "perspective" === n ? 1 : 0,
                                i = T.default.clone(this._levelKeys);
                            i[o] = e;
                            var l = t.getDefaultLayoutKey(n, i.join("-"));
                            this.props.updateLayout(l)
                        }
                    }, {
                        key: "getRotationKeys",
                        value: function() {
                            var e, t, a, n, o = (0, d.default)(this._levelKeys, 4),
                                i = o[0],
                                l = o[1],
                                r = o[2],
                                s = o[3];
                            switch (i) {
                                case "row":
                                    return (0, N.default)(e = this._getKeysByLevel(3)).call(e, (function(e) {
                                        var t, a;
                                        return (0, x.default)(t = (0, x.default)(a = "row-".concat(l, "-")).call(a, r, "-")).call(t, e)
                                    }));
                                case "col":
                                    return (0, N.default)(t = this._getKeysByLevel(1)).call(t, (function(e) {
                                        var t;
                                        return (0, x.default)(t = "col-".concat(e, "-")).call(t, r)
                                    }));
                                case "media":
                                    var u = (0, N.default)(a = this._getKeysByLevel(1)).call(a, (function(e) {
                                        var t;
                                        return (0, x.default)(t = "media-".concat(e, "-")).call(t, r)
                                    }));
                                    return this.showBaseRotationDropdown ? (0, E.default)(u).call(u, (function(e) {
                                        var t;
                                        return (0, S.default)(t = O.NewBigMediaLayout.NEW_LAYOUT).call(t, e)
                                    })) : (0, E.default)(u).call(u, (function(e) {
                                        var t;
                                        return !(0, S.default)(t = O.NewBigMediaLayout.OLD_LAYOUT).call(t, e)
                                    }));
                                case "mediaLeft":
                                case "mediaRight":
                                case "center":
                                    return (0, N.default)(n = ["mediaLeft", "mediaRight", "center"]).call(n, (function(e) {
                                        var t, a, n;
                                        return (0, x.default)(t = (0, x.default)(a = (0, x.default)(n = "".concat(e, "-")).call(n, l, "-")).call(a, r, "-")).call(t, s)
                                    }));
                                default:
                                    return []
                            }
                        }
                    }, {
                        key: "getButtonClassMapping",
                        value: function() {
                            return "perspective" === this.props.themeName ? ["big-buttons", "big-buttons", this._getSmallButtonClass(2), "big-buttons"] : ["big-buttons", "media" === this._levelKeys[0] ? "big-buttons" : this._getSmallButtonClass(1), "big-buttons", "big-buttons"]
                        }
                    }, {
                        key: "renderExtraLayoutButtons",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "renderLayoutOptions",
                        value: function() {
                            var e = this.showBaseRotationDropdown,
                                t = this.props.themeName;
                            return e ? null : (0, s.default)("div", {}, void 0, this._getKeysByLevel(0) && this._renderLayoutButtons(0), this._getKeysByLevel(1) && this._renderLayoutButtons(1), "perspective" === t ? this._getKeysByLevel(3) && this._renderCheckBox({
                                levelNum: 3,
                                checkedKey: "button",
                                unCheckedKey: "text",
                                labelText: n("Editor|Show Buttons")
                            }) : (0, s.default)("div", {}, void 0, this._getKeysByLevel(3) && this._renderLayoutButtons(3), this._getKeysByLevel(2) && this._renderCheckBox({
                                levelNum: 2,
                                checkedKey: "button",
                                unCheckedKey: "text",
                                labelText: n("Editor|Show Buttons")
                            })))
                        }
                    }]), r
                }(I.BaseLayoutButton),
                D = (0, I.connectToStores)(M);
            t.default = D, e.exports = t.default
        },
        430918: function(e, t, a) {
            "use strict";
            var n = a(501068),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(726394),
                r = (0, i.default)(l),
                s = a(569198),
                u = (0, i.default)(s),
                d = a(351379),
                c = (0, i.default)(d),
                f = a(900214),
                m = (0, i.default)(f),
                g = a(566380),
                p = (0, i.default)(g),
                h = a(527451);
            var v = function(e) {
                    (0, c.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !n) return !1;
                        if (n.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, p.default)(t);
                        if (a) {
                            var i = (0, p.default)(this).constructor;
                            e = n(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, m.default)(this, e)
                    });

                    function i(e) {
                        var t;
                        return (0, r.default)(this, i), (t = o.call(this, e)).sectionName = "padding", t
                    }
                    return (0, u.default)(i, [{
                        key: "getRotationKeys",
                        value: function() {
                            return []
                        }
                    }]), i
                }(h.BaseLayoutButton),
                y = (0, h.connectToStores)(v);
            t.default = y, e.exports = t.default
        },
        820736: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r = a(726394),
                s = (0, l.default)(r),
                u = a(569198),
                d = (0, l.default)(u),
                c = a(351379),
                f = (0, l.default)(c),
                m = a(900214),
                g = (0, l.default)(m),
                p = a(566380),
                h = (0, l.default)(p),
                v = a(527451);
            var y = function(e) {
                    (0, f.default)(l, e);
                    var t, a, i = (t = l, a = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, h.default)(t);
                        if (a) {
                            var i = (0, h.default)(this).constructor;
                            e = o(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, g.default)(this, e)
                    });

                    function l(e) {
                        var t;
                        return (0, s.default)(this, l), (t = i.call(this, e)).cacheLevel = -1, t.hideAdvancedOptions = !1, t.showBaseRotationDropdown = !0, t.buttonTitle = n("Editor|Layout"), t
                    }
                    return (0, d.default)(l, [{
                        key: "getRotationKeys",
                        value: function() {
                            return this.props.layoutOptions.layouts
                        }
                    }]), l
                }(v.BaseLayoutButton),
                b = (0, v.connectToStores)(y);
            t.default = b, e.exports = t.default
        },
        497279: function(e, t, a) {
            "use strict";
            var n = a(501068),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(726394),
                r = (0, i.default)(l),
                s = a(569198),
                u = (0, i.default)(s),
                d = a(351379),
                c = (0, i.default)(d),
                f = a(900214),
                m = (0, i.default)(f),
                g = a(566380),
                p = (0, i.default)(g),
                h = a(527451);
            var v = function(e) {
                    (0, c.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !n) return !1;
                        if (n.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, p.default)(t);
                        if (a) {
                            var i = (0, p.default)(this).constructor;
                            e = n(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, m.default)(this, e)
                    });

                    function i(e) {
                        var t;
                        return (0, r.default)(this, i), (t = o.call(this, e)).cacheLevel = -1, t.showBaseRotationDropdown = !0, t.sectionName = "process", t
                    }
                    return (0, u.default)(i, [{
                        key: "getRotationKeys",
                        value: function() {
                            return ["horizontal", "vertical"]
                        }
                    }]), i
                }(h.BaseLayoutButton),
                y = (0, h.connectToStores)(v);
            t.default = y, e.exports = t.default
        },
        916034: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(501068),
                i = a(663978),
                l = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var r = a(812077),
                s = (0, l.default)(r),
                u = a(418777),
                d = (0, l.default)(u),
                c = a(726394),
                f = (0, l.default)(c),
                m = a(569198),
                g = (0, l.default)(m),
                p = a(351379),
                h = (0, l.default)(p),
                v = a(900214),
                y = (0, l.default)(v),
                b = a(566380),
                C = (0, l.default)(b),
                N = a(2991),
                w = (0, l.default)(N),
                x = a(977766),
                k = (0, l.default)(x);
            a(569600);
            var E = a(366757),
                L = ((0, l.default)(E), a(527451));
            var S = function(e) {
                    (0, h.default)(r, e);
                    var t, i, l = (t = r, i = function() {
                        if ("undefined" == typeof Reflect || !o) return !1;
                        if (o.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(o(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, a = (0, C.default)(t);
                        if (i) {
                            var n = (0, C.default)(this).constructor;
                            e = o(a, arguments, n)
                        } else e = a.apply(this, arguments);
                        return (0, y.default)(this, e)
                    });

                    function r(e) {
                        var t;
                        return (0, f.default)(this, r), (t = l.call(this, e)).cacheLevel = -1, "perspective" === t.props.themeName && "text" === t._levelKeys[0] && (t.hideAdvancedOptions = !0), t.sectionName = "new_text", t
                    }
                    return (0, g.default)(r, [{
                        key: "updateToDefaultLayout",
                        value: function(e) {
                            var t = a(225425),
                                n = this.props.themeName,
                                o = _.clone(this._levelKeys);
                            o[0] = e;
                            var i = t.getDefaultLayoutKey(n, o.join("-"));
                            this.props.updateLayout(i)
                        }
                    }, {
                        key: "getRotationKeys",
                        value: function() {
                            var e, t, a = (0, d.default)(this._levelKeys, 3),
                                n = a[0],
                                o = (a[1], a[2]);
                            switch (n) {
                                case "box":
                                    return (0, w.default)(e = this._getKeysByLevel(1)).call(e, (function(e) {
                                        var t;
                                        return (0, k.default)(t = "box-".concat(e, "-")).call(t, o)
                                    }));
                                case "text":
                                    return (0, w.default)(t = this._getKeysByLevel(1)).call(t, (function(e) {
                                        var t;
                                        return (0, k.default)(t = "text-".concat(e, "-")).call(t, o)
                                    }));
                                default:
                                    return []
                            }
                        }
                    }, {
                        key: "getButtonClassMapping",
                        value: function() {
                            return "perspective" === this.props.themeName ? ["big-buttons", "big-buttons", "big-buttons"] : ["big-buttons", this._getSmallButtonClass(1), "big-buttons"]
                        }
                    }, {
                        key: "renderLayoutOptions",
                        value: function() {
                            var e = this.props.themeName;
                            return (0, s.default)("div", {}, void 0, "perspective" !== e && this._getKeysByLevel(0) && this._renderLayoutButtons(0), this._getKeysByLevel(1) && this._renderLayoutButtons(1), this._getKeysByLevel(2) && this._renderCheckBox({
                                levelNum: 2,
                                checkedKey: "button",
                                unCheckedKey: "text",
                                labelText: n("Editor|Show Buttons")
                            }))
                        }
                    }]), r
                }(L.BaseLayoutButton),
                B = (0, L.connectToStores)(S);
            t.default = B, e.exports = t.default
        },
        850257: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l, r = a(812077),
                s = (0, i.default)(r),
                u = a(981643),
                d = (0, i.default)(u),
                c = a(366757),
                f = ((0, i.default)(c), a(45697)),
                m = (0, i.default)(f),
                g = a(973935),
                p = a(921003),
                h = a(399069),
                v = (a(154920), a(914578)),
                y = a(141655),
                b = a(461853);
            l = h.createPageComponent({
                displayName: "LayoutSelector",
                mixins: [b.enableAfterMount()],
                bobcatPropTypes: {
                    data: {
                        layoutOptions: m.default.array,
                        layoutVariation: m.default.string,
                        binding: m.default.object.isRequired
                    }
                },
                getBobcatDefaultProps: function() {
                    return {
                        layoutOptions: [],
                        layoutVariation: null
                    }
                },
                componentDidMount: function() {
                    this.props.layoutOptions.length || console.warn("Section has no layout options defined!")
                },
                componentDidUpdate: function(e) {
                    e.layoutVariation !== this.props.layoutVariation && window.edit_page.Event.publish("Layout.afterChange", {
                        target: $(g.findDOMNode(this))
                    })
                },
                _updateLayout: function(e) {
                    return this.updateData({
                        layout_variation: e
                    })
                },
                _getLayoutKeys: function() {
                    return v.pluck(this.props.layoutOptions, "key")
                },
                _getLayoutIndex: function() {
                    var e = this._getLayoutKeys(),
                        t = this.props.layoutVariation,
                        a = (0, d.default)(e).call(e, t);
                    return t && -1 !== a ? a : null
                },
                _clickLayout: function() {
                    var e = this._getLayoutKeys(),
                        t = this._getLayoutIndex();
                    null == t && (t = 0), this._updateLayout(e[(t + 1) % e.length]), y.clickLayout(), y.save()
                },
                _layoutStatus: function() {
                    return null != this._getLayoutIndex() ? "ABCDEFGHI" [this._getLayoutIndex()] : "A"
                },
                render: function() {
                    return this.props.layoutOptions.length ? (0, s.default)("div", {
                        className: "s-component s-layout"
                    }, void 0, (0, s.default)("div", {
                        className: "s-component-editor"
                    }, void 0, (0, s.default)(p, {
                        className: "center clickable small title",
                        onTap: this._clickLayout,
                        rel: "tooltip-left",
                        title: n("Editor|Switch layout for this section")
                    }, void 0, (0, s.default)("span", {}, void 0, n("Layout"), this._layoutStatus() ? (0, s.default)("span", {
                        className: "layout-status"
                    }, void 0, this._layoutStatus()) : void 0)))) : null
                }
            }), t.default = l, e.exports = t.default
        },
        192927: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(389087),
                l = (0, o.default)(i),
                r = a(658840);
            t.default = (0, r.createCategorySelector)(l.default, "PortfolioCategorySelector", !0), e.exports = t.default
        },
        292019: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l, r, s = a(205872),
                u = (0, i.default)(s),
                d = a(812077),
                c = (0, i.default)(d),
                f = a(366757),
                m = (0, i.default)(f),
                g = a(45697),
                p = (0, i.default)(g),
                h = a(868309),
                v = (0, i.default)(h),
                y = a(183123),
                b = (0, i.default)(y),
                _ = a(294184),
                C = (0, i.default)(_),
                N = a(223336),
                w = (0, i.default)(N),
                x = a(399069),
                k = (0, i.default)(x),
                E = a(141655),
                L = (0, i.default)(E),
                S = a(882962),
                B = (0, i.default)(S),
                T = a(234584),
                P = (0, i.default)(T),
                I = a(389087),
                O = (0, i.default)(I),
                M = a(230139),
                D = (0, i.default)(M),
                R = a(534566),
                A = (0, i.default)(R),
                U = a(712774),
                H = (0, i.default)(U),
                F = a(634472),
                V = (0, i.default)(F),
                Z = a(751552),
                z = (0, i.default)(Z),
                K = a(513495),
                W = (0, i.default)(K),
                j = a(378508),
                G = (0, i.default)(j),
                Y = a(285072),
                q = (0, i.default)(Y),
                J = a(805803),
                Q = a(105001),
                $ = a(607947),
                X = (0, i.default)($),
                ee = a(32386),
                te = ((0, i.default)(ee), !1),
                ae = k.default.createPageComponent({
                    displayName: "Portfolio",
                    mixins: [(0, D.default)("editor"), q.default],
                    bobcatPropTypes: {
                        data: {
                            text: p.default.string,
                            category: p.default.oneOfType([p.default.string, p.default.number]),
                            binding: p.default.object
                        },
                        internal: {
                            onConnectionFailed: p.default.func
                        }
                    },
                    getBobcatDefaultProps: function() {
                        return {
                            data: {
                                category: "all"
                            }
                        }
                    },
                    componentWillMount: function() {
                        this.initMeta({
                            currentCategory: this.dtProps.category,
                            nextCategory: this.dtProps.category,
                            currentPage: 1,
                            detailMode: !1
                        })
                    },
                    componentDidMount: function() {
                        var e = this;
                        B.default.getPortfolioCategories({
                            success: function() {
                                return e._loadProductsFromServer()
                            },
                            pageId: P.default.getId()
                        }), O.default.getFirstLoadingState("settings") && B.default.getPortfolioSettings({
                            pageId: P.default.getId()
                        }), this._token = A.default.register((function(t) {
                            if (t.actionType === H.default.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS && (e.setMeta("currentCategory", e.getMeta("nextCategory")), !te)) {
                                te = !0;
                                var n = a(796764);
                                n.init(), n.trackPortfolioBuyerEvent(b.default.getKeenIoPortfolioBuyerLanding())
                            }
                        })), this._onCategoryChangeListenId = O.default.getCategoriesBinding().addListener("", this._onCategoryChange), (0, w.default)(window).on("resize.portfolio", X.default.debounce((function() {
                            return e.forceUpdate()
                        }), 300)), G.default.subCloseProductManagement((function(t, a) {
                            a.reloadProduct && e._loadProductsFromServer()
                        }))
                    },
                    componentDidUpdate: function(e, t) {
                        var a, n;
                        this._getRenderCategory(this.dtProps.category) === this._getRenderCategory(e.category) && e.category === this.dtProps.category && (null === (a = e.layoutConfig) || void 0 === a ? void 0 : a.get("productPerPage")) === (null === (n = this.dtProps.layoutConfig) || void 0 === n ? void 0 : n.get("productPerPage")) || ("all" === this._getRenderCategory(this.dtProps.category) || "all" === this.dtProps.category ? (this.setMeta("nextCategory", "all"), this.setMeta("currentCategory", "all"), this.setMeta("currentPage", 1)) : (this.setMeta("nextCategory", this.dtProps.category), this.setMeta("currentCategory", this.dtProps.category), this.setMeta("currentPage", 1)), this._loadProductsFromServer())
                    },
                    componentWillUnmount: function() {
                        A.default.unregister(this._token), O.default.getCategoriesBinding().removeListener(this._onCategoryChangeListenId), (0, w.default)(window).off("resize.portfolio")
                    },
                    _onCategoryChange: function() {
                        var e = this;
                        return this.setTimeout((function() {
                            return e._loadProductsFromServer()
                        }), 10)
                    },
                    _getProductsData: function() {
                        var e = this.props.layoutConfig,
                            t = (null == e ? void 0 : e.get("productPerPage")) || 20,
                            a = this.getDefaultBinding().get("id");
                        return O.default.getSectionProducts(a, this.getMeta("currentPage"), t)
                    },
                    _getEditBtnText: function() {
                        var e = this._getProductsData().length;
                        return n(0 === e ? "Portfolio|Add Product" : 1 === e ? "Portfolio|Manage Product" : "Portfolio|Manage Products")
                    },
                    _getRenderCategory: function(e) {
                        var t = "all" === e ? this.getMeta("currentCategory") : e;
                        return O.default.isCategoryIdExist(t) || (t = "all"), t
                    },
                    _loadProductsFromServer: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            a = arguments.length > 1 ? arguments[1] : void 0,
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        this.setMeta("currentPage", t);
                        var o = this.props.layoutConfig,
                            i = (null == o ? void 0 : o.get("productPerPage")) || 20,
                            l = this.getDefaultBinding() && this.getDefaultBinding().get("id"),
                            r = B.default.getPortfolioProducts({
                                pageId: P.default.getId(),
                                category: a || this._getRenderCategory(this.dtProps.category),
                                page: t,
                                needRefresh: !0,
                                per: i,
                                filter: "visible",
                                sectionId: l,
                                reloadSectionProducts: n
                            });
                        if (r) return r.fail((function() {
                            return e.props.onConnectionFailed()
                        }))
                    },
                    _getCurrentPageNum: function() {
                        return this.getMeta("currentPage")
                    },
                    _loadNextPage: function() {
                        var e = this._getCurrentPageNum();
                        return this.setMeta("currentPage", e + 1), this._loadProductsFromServer(e + 1, void 0, !1)
                    },
                    _onClickEditor: function(e) {
                        L.default.openPortfolioManagerDialog(e)
                    },
                    _changeCategory: function(e) {
                        return this.setMeta("nextCategory", e), this.setMeta("currentCategory", e), this._loadProductsFromServer(1, e)
                    },
                    _changeToDetailMode: function() {
                        return this.setMeta("detailMode", !0)
                    },
                    _changeToNormalMode: function() {
                        return this.setMeta("detailMode", !1)
                    },
                    _getCategoryBarProps: function() {
                        return {
                            currentCategory: this.getMeta("nextCategory"),
                            changeCategory: this._changeCategory,
                            categories: O.default.getCategories()
                        }
                    },
                    _getWrapperProps: function() {
                        var e = this.props,
                            t = e.layoutConfig,
                            a = e.layout,
                            n = e.category;
                        return {
                            products: this._getProductsData(),
                            pageId: P.default.getId(),
                            hasMultipleProducts: O.default.getProducts().length >= 2,
                            settings: O.default.getSettings(),
                            layout: a || "landscape-three",
                            category: n || "all",
                            changeToDetailMode: this._changeToDetailMode,
                            changeToNormalMode: this._changeToNormalMode,
                            layoutConfig: b.default.getIsNewStoreLayout() && t
                        }
                    },
                    render: function() {
                        var e = this;
                        this.observeBinding(O.default.getBinding());
                        var t = O.default.getPagination(this.getMeta("currentCategory")),
                            a = this.getMeta("detailMode"),
                            o = this._getEditBtnText(),
                            i = O.default.getLoadingState("product") || O.default.getLoadingState("settings") || O.default.getLoadingState("category"),
                            s = "persona" === P.default.getTheme().get("name") ? "" : "sixteen columns",
                            d = b.default.getFromSiteToApp(),
                            f = (0, c.default)("div", {
                                className: "".concat(s, " s-ecommerce-empty-box s-common-status no-float")
                            }, void 0, l || (l = (0, c.default)("div", {
                                className: "tags"
                            }, void 0, (0, c.default)("div", {
                                className: "fa fa-folder-open"
                            }), (0, c.default)("div", {
                                className: "fa fa-folder-open"
                            }), (0, c.default)("div", {
                                className: "fa fa-folder-open"
                            }))), (0, c.default)("div", {
                                className: "text s-font-body"
                            }, void 0, n("Portfolio|No products in this product showcase now!"))),
                            g = t && t.totalPages >= 2 && (d ? (0, c.default)("div", {
                                className: "s-ecommerce-pagination"
                            }, void 0, (0, c.default)(J.Link, {
                                className: "s-ecommerce-pagination-item s-font-body",
                                to: "/store/page?category=".concat(this.dtProps.category)
                            }, void 0, n("Ecommerce|View more"))) : (0, c.default)("div", {
                                className: "s-ecommerce-pagination"
                            }, void 0, t.totalPages > this._getCurrentPageNum() && (0, c.default)(W.default, {
                                component: "span",
                                className: "s-common-button s-small-button s-font-body",
                                onClick: this._loadNextPage
                            }, void 0, n("Load More"))));
                        return m.default.createElement("div", {
                            className: "s-component s-ecommerce",
                            ref: "root"
                        }, (0, c.default)("div", {
                            className: "s-ecommerce-content"
                        }, void 0, O.default.getCategories().length > 0 && ("all" === this.dtProps.category || !O.default.isCategoryIdExist(this.dtProps.category)) && (0, c.default)("div", {
                            className: "persona" === P.default.getTheme().get("name") ? "" : "sixteen columns",
                            style: {
                                display: a ? "none" : "block"
                            }
                        }, void 0, m.default.createElement(z.default, (0, u.default)({
                            sbClass: this.props.sbClass
                        }, this._getCategoryBarProps()), (0, c.default)("div", {
                            className: "s-component-editor-wrapper"
                        }, void 0, (0, c.default)("div", {
                            className: (0, C.default)("s-component-overlay", {
                                visible: b.default.getInWeChat()
                            }),
                            onClick: function() {
                                return e._onClickEditor({
                                    tab: "category"
                                })
                            }
                        }, void 0, (0, c.default)("div", {
                            className: "overlay"
                        }, void 0, (0, c.default)("div", {
                            className: "center"
                        }, void 0, (0, c.default)("span", {}, void 0, n("Portfolio|Manage Categories")))))))), i && (0, c.default)("div", {
                            className: (0, C.default)("s-loading-wrapper", {
                                "relative-wrapper": !this._getProductsData().length
                            })
                        }, void 0, r || (r = (0, c.default)("div", {
                            className: "s-loading"
                        }))), m.default.createElement(V.default, (0, u.default)({}, this._getWrapperProps(), {
                            isLoading: i,
                            EmptyComponent: f,
                            PaginationComponent: g
                        }), !i && (0, c.default)("div", {
                            className: "s-component-editor-wrapper"
                        }, void 0, (0, c.default)("div", {
                            className: "s-component-overlay".concat(b.default.getInWeChat() ? " visible" : ""),
                            onClick: function() {
                                return e._onClickEditor({
                                    category: e.dtProps.category,
                                    tab: "product"
                                })
                            }
                        }, void 0, (0, c.default)("div", {
                            className: "overlay"
                        }, void 0, (0, c.default)("div", {
                            className: "center"
                        }, void 0, (0, c.default)("span", {}, void 0, o))))))))
                    }
                }),
                ne = (0, Q.addOffline)(ae);
            ae.WaypointLazy = (0, v.default)(ne), t.default = ne, e.exports = t.default
        },
        922034: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(678580),
                r = (0, i.default)(l),
                s = a(45697),
                u = (0, i.default)(s),
                d = a(32386),
                c = (0, i.default)(d),
                f = a(680523),
                m = (0, i.default)(f),
                g = a(834243),
                p = (0, i.default)(g),
                h = a(399069),
                v = (0, i.default)(h),
                y = a(234584),
                b = (0, i.default)(y),
                _ = a(797411),
                C = (0, i.default)(_),
                N = a(156503),
                w = (0, i.default)(N),
                x = ["administrator", "editor", "blogger", "audience_agent", "store_manager"];
            t.default = v.default.create({
                displayName: "ProSectionNotice",
                propTypes: {
                    isS6Section: u.default.bool,
                    isFirstSection: u.default.bool,
                    navIsTransparent: u.default.bool
                },
                render: function() {
                    return C.default.apply(this)
                },
                mapStateToProps: function() {
                    return {
                        topNavHeight: w.default.get("fixedNavHeight")
                    }
                },
                getFirstProSectionNoticeStyle: function() {
                    var e = this.props,
                        t = e.isFirstSection,
                        a = e.navIsTransparent,
                        n = e.topNavHeight;
                    return {
                        paddingTop: t && a ? n : 0
                    }
                },
                _onClickUpgrade: function() {
                    var e = c.default.getRole(),
                        t = m.default.PRICING.GOTO_AND_RETURN(b.default.getId(), "ps");
                    p.default.isZbjUser() ? alert(" 八戒云站暂不支持升级， 请添加新的套餐。") : (0, r.default)(x).call(x, e) ? alert(n("Team|This is a Pro feature! Please ask the site owner to upgrade to Pro to unlock this feature.")) : window.open(t)
                }
            }), e.exports = t.default
        },
        17342: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(686902),
                i = a(14310),
                l = a(620116),
                r = a(834074),
                s = a(778914),
                u = a(239649),
                d = a(820368),
                c = a(663978),
                f = a(60530)(a(60530));
            c(t, "__esModule", {
                value: !0
            });
            var m, g = a(812077),
                p = (0, f.default)(g),
                h = a(205872),
                v = (0, f.default)(h),
                y = a(487672),
                b = (0, f.default)(y),
                _ = a(977766),
                C = (0, f.default)(_),
                N = a(729828),
                w = (0, f.default)(N),
                x = a(694473),
                k = (0, f.default)(x),
                E = a(492762),
                L = (0, f.default)(E),
                S = a(2991),
                B = (0, f.default)(S),
                T = a(703649),
                P = (0, f.default)(T),
                I = a(366757),
                O = (0, f.default)(I),
                M = a(294184),
                D = (0, f.default)(M),
                R = a(230139),
                A = (0, f.default)(R),
                U = a(792695),
                H = (0, f.default)(U),
                F = a(381633),
                V = a(43138),
                Z = (0, f.default)(V),
                z = a(926941),
                K = (0, f.default)(z),
                W = a(978307),
                j = a(255245),
                G = a(845939),
                Y = (0, f.default)(G),
                q = a(357646),
                J = (0, f.default)(q),
                Q = a(186613),
                $ = (0, f.default)(Q),
                X = a(149008),
                ee = (0, f.default)(X),
                te = a(818166),
                ae = (0, f.default)(te),
                ne = a(234584),
                oe = (0, f.default)(ne),
                ie = a(716505),
                le = (0, f.default)(ie),
                re = a(659370),
                se = ((0, f.default)(re), a(663749)),
                ue = ((0, f.default)(se), a(837337)),
                de = (0, f.default)(ue),
                ce = a(370917);

            function fe(e, t) {
                var a = o(e);
                if (i) {
                    var n = i(e);
                    t && (n = l(n).call(n, (function(t) {
                        return r(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a, n = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) s(a = fe(Object(n), !0)).call(a, (function(t) {
                        (0, b.default)(e, t, n[t])
                    }));
                    else if (u) d(e, u(n));
                    else {
                        var o;
                        s(o = fe(Object(n))).call(o, (function(t) {
                            c(e, t, r(n, t))
                        }))
                    }
                }
                return e
            }
            var ge = (0, de.default)("div", {
                    target: "css-c9go2z0"
                })((function(e) {
                    var t, a, n, o, i = e.layout,
                        l = e.colors,
                        r = e.colorType,
                        s = e.columns,
                        u = e.isRtlLayout;
                    return (0, ce.css)(".s-kit-collapse > .s-kit-collapse-item{direction:", u ? "rtl" : "ltr", ";border-radius:", i !== W.ACCORDION_LAYOUT_KEYS.SEPARATOR_LAYOUT ? "5px" : "0px", ";border:", i === W.ACCORDION_LAYOUT_KEYS.BORDER_LAYOUT && "1px solid ".concat(l.borderColor), ";> .s-kit-collapse-header{color:", l.textColor, ";i.arrow{color:", l.arrowColor || l.textColor, ";}background-color:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? l.backgroundColor : "", ";opacity:", r === W.NEUTRAL_COLOR_KEY && "0.9", ";&:active{background-color:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? l.backgroundColor : "", ";opacity:", r === W.NEUTRAL_COLOR_KEY && "0.9", "}}.s-kit-collapse-content{background-color:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? "#fff" : "", "\n        opacity:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? "0.9!important" : "", "\n        border-color:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT && "".concat(W.DEFAULT_BORDER_COLOR), "\n        border-width:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT && "0px 1px 1px 1px", "\n        border-style:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT && "solid", "}.s-kit-collapse-content .s-component.s-text{margin:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? W.DEFAULT_MARGIN : (0, C.default)(t = (0, C.default)(a = "10px ".concat(W.DEFAULT_MARGIN, " ")).call(a, W.DEFAULT_MARGIN, " ")).call(t, W.DEFAULT_MARGIN), ";}&.s-kit-collapse-item-active{.s-kit-collapse-header .s-component.s-text{margin:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? W.DEFAULT_MARGIN : (0, C.default)(n = (0, C.default)(o = "".concat(W.DEFAULT_MARGIN, " ")).call(o, W.DEFAULT_MARGIN, " 10px ")).call(n, W.DEFAULT_MARGIN), ";}.s-kit-collapse-header .arrow{top:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? "0px" : "10px", ";}}}.s-accordion-item-separator{background-color:", l.borderColor, ";width:96%;height:1px;margin:", s === W.ACCORDION_COLUMNS.TWO ? "0 10px" : "0 20px", ";}.s-repeatable-item{margin-bottom:", i === W.ACCORDION_LAYOUT_KEYS.SEPARATOR_LAYOUT ? "0px" : "20px", ";&:last-child{margin-bottom:0px;}}.s-kit-collapse-header{.s-component-editor-wrapper.empty .s-component-empty span{color:", i === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT && l.textColor, ";}}.s-component-editor-wrapper.empty .s-component-empty .overlay span{text-align:", u ? "right" : "left", ";}@media (min-width:728px){.s-accordion-repeatable .s-accordion-column-wrapper{display:flex;.s-accordion-column{flex:1;&.column-one{margin-right:10px;}&.column-two{margin-left:10px;}}}}@media (max-width:727px){.s-accordion-column-wrapper{display:flex;flex-direction:", u ? "column-reverse" : "column", ";.s-accordion-column.column-two{margin-bottom:", u ? "20px" : "0px", ";}.s-accordion-column.column-one{margin-bottom:", u ? "0px" : "20px", ";}}}")
                }), "\n  ", (function(e) {
                    return e.isRtlLayout && (0, ce.css)(".s-accordion-repeatable{text-align:right;.s-repeatable-item .s-kit-collapse-item{.s-kit-collapse-header .arrow{left:15px;right:unset;}&:not(.s-kit-collapse-item-active) .arrow{transform:rotateY(180deg);}}}.s-component.s-text .s-component-editor-wrapper .s-component-overlay{position:absolute;right:0;}")
                })),
                pe = {
                    mixins: [H.default, (0, A.default)("editor")],
                    displayName: "Accordion",
                    mapStateToProps: function() {
                        return {
                            themeColors: ae.default.getCustomColors()
                        }
                    },
                    _getLayoutOptions: function() {
                        return []
                    },
                    _getContentAlignmentClass: function() {
                        return this.sbUniformTextAlignment("text1 text2")
                    },
                    _getHeaderClassName: function() {
                        return "columns" + ("persona" === oe.default.getThemeName() ? " twelve offset-three" : " sixteen")
                    },
                    _getColors: function() {
                        var e = this._getLayoutProps().sectionLayoutConfig,
                            t = e.get("layout"),
                            a = this.getBackgroundProps("background1"),
                            n = W.DEFAULT_BORDER_COLOR,
                            o = a.textColor,
                            i = a.style.backgroundColor,
                            l = i && (0, w.default)(i).call(i, "#") && new K.default(i).getTextClass();
                        (o && o === W.DARK_CLASSNAME || !o && l === W.DARK_CLASSNAME) && (n = W.DARK_BORDER_COLOR);
                        var r = e.get("color"),
                            s = this.props.themeColors,
                            u = (0, j.getLayoutColors)(s),
                            d = (0, k.default)(u).call(u, (function(e) {
                                return e.type === r
                            })) || u[0],
                            c = d.value;
                        return d.type === W.NEUTRAL_COLOR_KEY ? me(me({}, W.NEUTRAL_COLOR_CONFIG[t] || W.NEUTRAL_COLOR_CONFIG.default), {}, {
                            borderColor: n
                        }) : t === W.ACCORDION_LAYOUT_KEYS.BACKGROUND_LAYOUT ? {
                            backgroundColor: c,
                            textColor: new K.default(c).getTextColor(),
                            borderColor: n
                        } : {
                            borderColor: n,
                            textColor: c
                        }
                    },
                    _getRepeatableItemFunc: function() {
                        var e = this;
                        return {
                            onDeleteItem: function(t) {
                                var a = e.getRepeatableBinding("repeatable1").get();
                                e.getDefaultBinding().sub("components.repeatable1.list").set((0, L.default)(a).call(a, t, 1)), e.savePage()
                            },
                            isArranging: this.isState("editor")
                        }
                    },
                    _renderItem: function(e, t) {
                        var a = this.getRepeatableBinding("repeatable1"),
                            o = a.get().size,
                            i = oe.default.getIsS5Theme(),
                            l = this._getLayoutProps().sectionLayoutConfig,
                            r = l.get("layout"),
                            s = l.get("columns"),
                            u = this._getLayoutBinding(),
                            d = a.sub(t),
                            c = function(e) {
                                return d.get(["components", e, "value"])
                            },
                            f = c("text1"),
                            g = c("text2");
                        if (!f && !g) return null;
                        var h = {
                                default: d,
                                layout: u
                            },
                            y = O.default.createElement(J.default, (0, v.default)({
                                textType: "heading",
                                needEditButton: !0,
                                className: "s-accordion-question-text",
                                emptyMessage: n("Editor|Add question.")
                            }, this.getComponentProps("text1", d))),
                            b = O.default.createElement(J.default, (0, v.default)({
                                textType: "body",
                                className: (0, D.default)("s-accordion-answer-text", {
                                    "s-item-text": i
                                }),
                                emptyMessage: n("Editor|Add answer.")
                            }, this.getComponentProps("text2", d))),
                            _ = Z.default.isMobile() || s !== W.ACCORDION_COLUMNS.TWO ? {} : this._getRepeatableItemFunc();
                        return O.default.createElement(ee.default, (0, v.default)({
                            binding: h,
                            index: t,
                            className: "s-accordion-item-".concat(t),
                            forbiddenRemove: o <= W.MINIMUM_NUM
                        }, _, this._getRepeatableItemProps(a, t)), (0, p.default)(F.Collapse, {
                            className: "s-accordion-collapse-wrapper",
                            defaultActiveKey: [],
                            bordered: !1,
                            header: y
                        }, void 0, b), r === W.ACCORDION_LAYOUT_KEYS.SEPARATOR_LAYOUT && (m || (m = (0, p.default)("div", {
                            className: "s-accordion-item-separator"
                        }))))
                    },
                    _renderRepeatable: function() {
                        var e, t = this.getRepeatableBinding("repeatable1"),
                            a = this.getComponentProps("repeatable1"),
                            n = (0, B.default)(e = t.get()).call(e, this._renderItem),
                            o = this._getLayoutProps().sectionLayoutConfig,
                            i = o.get("layout"),
                            l = o.get("columns"),
                            r = o.get("color"),
                            s = this._getColors(),
                            u = oe.default.getIsRtlLayout(),
                            d = Math.ceil(n.size / 2),
                            c = (0, P.default)(n).call(n, 0, d),
                            f = (0, P.default)(n).call(n, d);
                        if (u) {
                            var m = c;
                            c = f, f = m
                        }
                        var g = !Z.default.isMobile() && l === W.ACCORDION_COLUMNS.TWO;
                        return (0, p.default)(ge, {
                            colorType: r,
                            isRtlLayout: u,
                            layout: i,
                            columns: l,
                            colors: s
                        }, void 0, O.default.createElement($.default, (0, v.default)({
                            connectedSortableWith: g ? ".s-accordion-column" : null,
                            canAddItems: n.size < W.MAXIMUM_NUM,
                            className: "s-accordion-repeatable"
                        }, a), !g && n, g && (0, p.default)("div", {
                            className: "s-accordion-column-wrapper"
                        }, void 0, (0, p.default)("div", {
                            className: "s-accordion-column column-one"
                        }, void 0, c), (0, p.default)("div", {
                            className: "s-accordion-column column-two"
                        }, void 0, f))))
                    },
                    render: function() {
                        var e, t, a = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0),
                            n = this._getHeaderClassName(),
                            o = (0, C.default)(e = (0, C.default)(t = "s-section s-accordion-section ".concat(this._getPaddingClass(), " ")).call(t, this._getContentAlignmentClass(), " ")).call(e, a.className);
                        return O.default.createElement(le.default, (0, v.default)({}, a, {
                            className: o
                        }), !1, (0, p.default)("div", {
                            className: "container"
                        }, "layout-content", (0, p.default)("div", {
                            className: n
                        }, void 0, (0, p.default)(Y.default, {
                            canHide: !0,
                            section: this,
                            binding: this.getDefaultBinding()
                        })), this._renderRepeatable()))
                    }
                };
            t.default = pe, e.exports = t.default
        },
        481486: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(205872),
                l = (0, o.default)(i),
                r = a(812077),
                s = (0, o.default)(r),
                u = a(977766),
                d = (0, o.default)(u),
                c = a(366757),
                f = (0, o.default)(c),
                m = a(230139),
                g = (0, o.default)(m),
                p = a(845939),
                h = (0, o.default)(p),
                v = a(559110),
                y = (0, o.default)(v),
                b = a(234584),
                _ = (0, o.default)(b),
                C = a(716505),
                N = (0, o.default)(C),
                w = a(436173),
                x = (0, o.default)(w),
                k = a(792695),
                E = (0, o.default)(k),
                L = a(659370),
                S = ((0, o.default)(L), a(430918)),
                B = ((0, o.default)(S), {
                    mixins: [E.default, (0, g.default)("editor")],
                    displayName: "Booking Section",
                    _getLayoutOptions: function() {
                        return []
                    },
                    renderBookingContainer: function() {
                        var e = this._getSectionId(),
                            t = this._getLayoutProps().sectionLayoutConfig;
                        return (0, s.default)("div", {
                            className: "container"
                        }, "layout-content", (0, s.default)("div", {
                            className: "columns sixteen"
                        }, void 0, (0, s.default)(h.default, {
                            canHide: !0,
                            section: this,
                            binding: this.getDefaultBinding()
                        })), (0, s.default)("div", {
                            className: "s-ecommerce-container"
                        }, void 0, (0, s.default)(y.default, {
                            sectionId: e,
                            layoutConfig: t
                        })))
                    },
                    renderBookingContainerWrapper: function() {
                        var e, t = this._getSectionId(),
                            a = _.default.getThemeName(),
                            n = this._getLayoutProps().sectionLayoutConfig;
                        return "persona" === a ? (0, s.default)("div", {
                            className: "container"
                        }, "layout-content", (0, s.default)("div", {
                            className: "columns twelve offset-three"
                        }, void 0, (0, s.default)(h.default, {
                            canHide: !0,
                            section: this,
                            binding: this.getDefaultBinding()
                        })), e || (e = (0, s.default)("div", {
                            className: "columns twelve offset-three"
                        }, void 0, (0, s.default)("div", {
                            className: "s-ecommerce-container"
                        }, void 0, (0, s.default)(y.default, {
                            sectionId: t,
                            layoutConfig: n
                        }))))) : "perspective" === a ? (0, s.default)("div", {
                            className: "s-persp-container"
                        }, void 0, this.renderBookingContainer()) : this.renderBookingContainer()
                    },
                    render: function() {
                        var e, t = this.getBackgroundProps("background1"),
                            a = (0, d.default)(e = "s-section s-store-section ".concat(this._getPaddingClass(), " ")).call(e, t.className);
                        return f.default.createElement(N.default, (0, l.default)({}, t, {
                            className: a
                        }), !1, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") && f.default.createElement(x.default, this.getBackgroundProps("background1")), this.renderBookingContainerWrapper())
                    }
                });
            t.default = B, e.exports = t.default
        },
        164385: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(205872),
                l = (0, o.default)(i),
                r = a(812077),
                s = (0, o.default)(r),
                u = a(51942),
                d = (0, o.default)(u),
                c = a(977766),
                f = (0, o.default)(c),
                m = a(366757),
                g = (0, o.default)(m),
                p = a(230139),
                h = (0, o.default)(p),
                v = a(845939),
                y = (0, o.default)(v),
                b = a(927738),
                _ = (0, o.default)(b),
                C = a(716505),
                N = (0, o.default)(C),
                w = a(792695),
                x = (0, o.default)(w),
                k = a(659370),
                E = ((0, o.default)(k), a(430918)),
                L = ((0, o.default)(E), {
                    mixins: [x.default, (0, h.default)("editor")],
                    displayName: "CustomForm Section",
                    _getLayoutOptions: function() {
                        return []
                    },
                    handleSaveServicesData: function(e) {
                        var t = this.getComponentBinding("email1"),
                            a = t && t.toJS(),
                            n = (0, d.default)({}, a, {
                                connectedFormServices: e
                            });
                        this.setData("components.email1", n), this.savePage()
                    },
                    handleSaveFormData: function(e) {
                        var t = e || {},
                            a = t.customForm,
                            n = t.customSetting || {},
                            o = n.formNameLabel,
                            i = n.openInNewTab,
                            l = n.redirectLink,
                            r = n.enableSpamVerification,
                            s = n.submitLabel,
                            u = n.thanksMessage,
                            c = n.recipient,
                            f = this.getComponentBinding("email1"),
                            m = f && f.toJS(),
                            g = (0, d.default)({}, m, {
                                recipient: c,
                                customForm: a,
                                openInNewTab: i,
                                redirectLink: l,
                                enableSpamVerification: r,
                                thanksMessage: u,
                                submit_label: s,
                                form_name_label: o
                            });
                        this.setData("components.email1", g), this.savePage()
                    },
                    renderSchemaForm: function(e) {
                        var t = this._getSectionId(),
                            a = this.getComponentBinding(e),
                            n = a && a.toJS(),
                            o = n.recipient,
                            i = n.customForm,
                            l = n.openInNewTab,
                            r = n.redirectLink,
                            u = n.enableSpamVerification,
                            d = n.submit_label,
                            c = n.thanksMessage,
                            f = n.form_name_label,
                            m = {
                                recipient: o,
                                openInNewTab: l,
                                redirectLink: r,
                                enableSpamVerification: u,
                                thanksMessage: c,
                                connectedFormServices: n.connectedFormServices,
                                submitLabel: d,
                                formNameLabel: f
                            };
                        return (0, s.default)(_.default, {
                            id: t,
                            sectionId: t,
                            recipient: o,
                            formSchema: i,
                            formSetting: m,
                            onSaveForm: this.handleSaveFormData,
                            onSaveFormServicesData: this.handleSaveServicesData
                        })
                    },
                    render: function() {
                        var e, t = this.renderSchemaForm("email1"),
                            a = this.getBackgroundProps("background1"),
                            n = (0, f.default)(e = "s-section s-contact-section ".concat(this._getPaddingClass(), " ")).call(e, a.className);
                        return g.default.createElement(N.default, (0, l.default)({}, a, {
                            className: n
                        }), !1, (0, s.default)("div", {
                            className: "container"
                        }, "layout-content", (0, s.default)("div", {
                            className: "columns ".concat(this.getThemeFeature("narrowContactForm") ? "twelve offset-two" : "sixteen")
                        }, void 0, (0, s.default)("div", {
                            className: "s-email-form-container s-custom-form-container"
                        }, void 0, (0, s.default)(y.default, {
                            canHide: !0,
                            section: this,
                            binding: this.getDefaultBinding()
                        }), t))))
                    }
                });
            t.default = L, e.exports = t.default
        },
        152160: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(812077),
                l = (0, o.default)(i),
                r = a(205872),
                s = (0, o.default)(r),
                u = a(977766),
                d = (0, o.default)(u),
                c = a(694473),
                f = (0, o.default)(c),
                m = a(678580),
                g = (0, o.default)(m),
                p = a(2991),
                h = (0, o.default)(p),
                v = a(366757),
                y = (0, o.default)(v),
                b = a(973935),
                _ = (0, o.default)(b),
                C = a(223336),
                N = (0, o.default)(C),
                w = a(230139),
                x = (0, o.default)(w),
                k = a(234584),
                E = (0, o.default)(k),
                L = a(818166),
                S = (0, o.default)(L),
                B = a(653114),
                T = a(365940),
                P = (0, o.default)(T),
                I = a(787066),
                O = (0, o.default)(I),
                M = a(186613),
                D = (0, o.default)(M),
                R = a(845939),
                A = (0, o.default)(R),
                U = a(716505),
                H = (0, o.default)(U),
                F = a(149008),
                V = (0, o.default)(F),
                Z = a(792695),
                z = (0, o.default)(Z),
                K = a(659370),
                W = ((0, o.default)(K), a(288757)),
                j = (0, o.default)(W),
                G = a(436173),
                Y = (0, o.default)(G),
                q = a(790474),
                J = ((0, o.default)(q), a(881701)),
                Q = {
                    mixins: [z.default, (0, x.default)("editor")],
                    displayName: "Feature List Section",
                    _getLayouts: function() {
                        return B.FEATURE_LIST_LAYOUTS
                    },
                    _getLayoutName: function() {
                        var e, t, a, n = this._getLayoutProps().sectionLayoutConfig.toJS(),
                            o = n.showButton,
                            i = n.structure,
                            l = n.columns,
                            r = n.mediaSize,
                            s = n.mediaPosition;
                        switch (i) {
                            case "grid":
                                return (0, d.default)(e = "gride-".concat(l, "-")).call(e, o ? "button" : "text");
                            case "list":
                                return (0, d.default)(t = (0, d.default)(a = "list-".concat(r, "-")).call(a, o ? "button" : "text", "-")).call(t, s);
                            default:
                                return ""
                        }
                    },
                    _getLayoutStyleClass: function() {
                        var e = {},
                            t = this._getLayoutName(),
                            n = a(532408);
                        return "function" == typeof n.getLayoutStyleConfig(t) && (e = n.getLayoutStyleConfig(t)(this)), e
                    },
                    componentDidUpdate: function() {
                        var e, t;
                        "xs" === this.props.binding.get(["components", "slideSettings", "layout_config", "mediaSize"]) && ((0, f.default)(e = (0, N.default)(_.default.findDOMNode(this))).call(e, ".s-mh-nudge").css({
                            "padding-top": 0
                        }), (0, f.default)(t = (0, N.default)(_.default.findDOMNode(this))).call(t, ".s-item-media-wrapper").css({
                            "line-height": "",
                            "min-height": ""
                        }))
                    },
                    _getRootClass: function() {
                        var e = S.default.getTemplateVariation(),
                            t = ["dark", "default"];
                        return (0, J.css)("&.s-bg-dark,", (0, g.default)(t).call(t, e) ? "&.s-bg-gray, &.s-bg-white," : "", "\n        &.s-section.s-bg-dark,&.s-bg-light-text,&.s-bg-image.s-bg-light-text{color:#40404c;.inner-container{.s-item-text,.s-item-title,.s-item-subtitle{color:#40404c;.s-subtitle{color:#40404c;}}}}.inner-container{text-shadow:none;}&.s-bg-dark,&.s-section.s-bg-dark\n        ", (0, g.default)(t).call(t, e) ? ", &.s-bg-gray, &.s-bg-white, &.s-bg-image.s-bg-light-text" : "", "{.s-border-theme-color-1{border-color:#333;}}")
                    },
                    _getRepeatableClassName: function() {
                        var e = "";
                        return "persona" === E.default.getThemeName() && (e += "offset-three"), e
                    },
                    _renderRepeatable: function(e) {
                        var t, a, n, o = this,
                            i = E.default.getThemeName(),
                            r = this._getLayoutBinding(),
                            u = this._getLayoutStyleClass(),
                            c = this.getRepeatableBinding(e),
                            f = this._getLayoutProps().sectionLayoutConfig.get("showButton"),
                            m = "list" === this._getSectionSlideSettingValueByKey("structure"),
                            g = u.repeatableClass;
                        "function" == typeof g && (g = g(this));
                        var p = (0, h.default)(t = c.get()).call(t, (function(e, t) {
                                var a = c.sub(t),
                                    n = {
                                        default: a,
                                        layout: r
                                    },
                                    d = o.sbHasContent("button1", {
                                        parentBinding: a
                                    }),
                                    g = o.sbHasContent("media1", {
                                        parentBinding: a
                                    }),
                                    p = o.sbAnyHasContent("text1 text2", {
                                        parentBinding: a
                                    }),
                                    h = o.sbHasContent("button1", {
                                        parentBinding: a
                                    }),
                                    v = "editor" !== o.getComponentBinding("button1", a).get("_state") && !o.sbHasContent("button1", {
                                        parentBinding: a,
                                        showOnly: !1
                                    }),
                                    b = p || h && u.buttonClass,
                                    _ = u || {},
                                    C = _.itemClass,
                                    N = _.textClass,
                                    w = _.buttonClass,
                                    x = _.mediaClass,
                                    k = _.textInnerClass,
                                    E = _.innerItemClass,
                                    L = _.singleTextClass,
                                    S = _.singleMediaClass;
                                "function" == typeof C && (C = C(o, t)), "function" == typeof E && (E = E(o, t)), E += m ? " s-rva" : "", "function" == typeof x && (x = x(o, t)), "function" == typeof S && (S = S(o, t)), S = S || x, "function" == typeof N && (N = N(o, t)), "function" == typeof L && (L = L(o, t)), L = L || N, "function" == typeof w && (w = w(o, t)), "function" == typeof k && (k = k(o, t));
                                var B = "s-item-media-wrapper ";
                                B += b ? x : S, B += m ? " s-rva-media" : "", N = g ? N : L, N += m ? " s-rva-text" : "", "glow" === i && (N = N || "fourteen columns offset-one");
                                var T = "fresh" === i && "s-columns-section" === o._getSectionType();
                                return y.default.createElement(V.default, (0, s.default)({
                                    className: C,
                                    index: t,
                                    binding: n
                                }, o._getRepeatableItemProps(c, t)), (0, l.default)("div", {
                                    className: "clearfix"
                                }, void 0, (0, l.default)("div", {
                                    className: E
                                }, void 0, g && (0, l.default)("div", {
                                    className: B
                                }, void 0, (0, l.default)("div", {
                                    className: "s-item-media-group"
                                }, void 0, y.default.createElement(O.default, (0, s.default)({
                                    size: "large",
                                    isFreshColumn: T
                                }, o.getReduxComponentProps("media1", a), {
                                    assetType: "gallery"
                                })))), b && (0, l.default)("div", {
                                    className: N
                                }, void 0, (0, l.default)(j.default, {
                                    deprecateItemSubtitle: !0,
                                    section: o,
                                    showItemSubtitle: !1,
                                    itemBinding: a,
                                    binding: a,
                                    className: g ? k : ""
                                }, void 0, d && f && (0, l.default)("div", {
                                    className: w + (v ? " s-placeholder-button" : "")
                                }, void 0, y.default.createElement(P.default, (0, s.default)({}, o.getComponentProps("button1", a), {
                                    smallButton: !0
                                }))))))))
                            })).toArray(),
                            v = this.getComponentProps("repeatable1"),
                            b = this._getRepeatableClassName();
                        return y.default.createElement(D.default, (0, s.default)({
                            className: (0, d.default)(a = (0, d.default)(n = "".concat(g, " ")).call(n, b, " ")).call(a, "editor" === c.get("_state") ? " s-arranging" : "")
                        }, v), p)
                    },
                    _getContentAlignmentClass: function() {
                        return this.sbUniformTextAlignment("text1 text2")
                    },
                    _getSectionSlideSettingValueByKey: function(e) {
                        var t = this._getLayoutProps().sectionLayoutConfig;
                        return t && t.get(e)
                    },
                    _getSectionType: function() {
                        var e = "",
                            t = this._getSectionSlideSettingValueByKey("layout");
                        switch (this._getSectionSlideSettingValueByKey("structure")) {
                            case "grid":
                                e = "s-columns-section list-layout-".concat(t);
                                break;
                            case "list":
                                e = "s-rows-section list-layout-".concat(t)
                        }
                        return e
                    },
                    _getHeaderClassName: function() {
                        return "columns" + ("persona" === E.default.getThemeName() ? " twelve offset-three" : " sixteen")
                    },
                    render: function() {
                        var e, t, a, n, o = this._renderRepeatable("repeatable1"),
                            i = this.getBackgroundProps("background1"),
                            r = this._getRootClass(),
                            u = this._getHeaderClassName(),
                            c = (0, d.default)(e = (0, d.default)(t = (0, d.default)(a = (0, d.default)(n = "s-section s-new-media-section s-feature-list-section ".concat(this._getSectionType(), " ")).call(n, this._getPaddingClass(), " ")).call(a, this._getContentAlignmentClass(), " ")).call(t, r, " ")).call(e, i.className);
                        return y.default.createElement(H.default, (0, s.default)({}, i, {
                            className: c
                        }), !1, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") && y.default.createElement(Y.default, this.getBackgroundProps("background1")), (0, l.default)("div", {
                            className: "container"
                        }, "layout-content", (0, l.default)("div", {
                            className: u
                        }, void 0, (0, l.default)(A.default, {
                            canHide: !0,
                            section: this,
                            binding: this.getDefaultBinding()
                        })), o))
                    }
                };
            t.default = Q, e.exports = t.default
        },
        848388: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(812077),
                l = (0, o.default)(i),
                r = a(205872),
                s = (0, o.default)(r),
                u = a(977766),
                d = (0, o.default)(u),
                c = a(366757),
                f = (0, o.default)(c),
                m = a(294184),
                g = (0, o.default)(m),
                p = a(230139),
                h = (0, o.default)(p),
                v = a(792695),
                y = (0, o.default)(v),
                b = a(845939),
                _ = (0, o.default)(b),
                C = a(791409),
                N = (0, o.default)(C),
                w = a(818166),
                x = (0, o.default)(w),
                k = a(234584),
                E = (0, o.default)(k),
                L = a(716505),
                S = (0, o.default)(L),
                B = a(659370),
                T = ((0, o.default)(B), a(647851)),
                P = ((0, o.default)(T), a(837337)),
                I = (0, (0, o.default)(P).default)("div", {
                    target: "css-1m4unss0"
                })("width:", (function(e) {
                    return e.styledWrapperWidth
                }), ";&.container .sixteen.columns{width:100% !important;margin-left:0;margin-right:0;text-align:center;display:flex;flex-direction:column;}.s-new-gallery-title{display:inline-block;max-width:94%;margin:0 auto;margin-bottom:40px;&.s-title-width{width:", (function(e) {
                    return e.titleWidth
                }), ";}> div{margin-left:1%;margin-right:1%;}}.s-component-new-gallery-list{margin:0 auto;display:inline-block;max-width:100%;width:", (function(e) {
                    return e.containerWidth
                }), ";}.s-new-gallery{width:", (function(e) {
                    return e.isFullWidth ? "100%" : "98%"
                }), ";}@media (max-width:728px){.s-new-gallery-title.s-title-width,.s-component-new-gallery-list{width:100%;}}"),
                O = "100%",
                M = {
                    small: "800px",
                    normal: "1000px",
                    wide: "1200px",
                    full: O
                },
                D = {
                    full: "94%",
                    wide: "1200px",
                    normal: "1000px",
                    narrow: "800px"
                },
                R = {
                    mixins: [y.default, (0, h.default)("editor")],
                    displayName: "New Gallery",
                    _getLayoutOptions: function() {
                        return []
                    },
                    _renderEditorComponents: function() {
                        return null
                    },
                    _updateGallerySources: function(e) {
                        this.getDefaultBinding().sub("components.gallery1.sources").set(e), this.savePage()
                    },
                    render: function() {
                        var e, t = this.getThemeFeature("disableBackgrounds") ? {} : this.getBackgroundProps("background1", null, !0),
                            a = (0, d.default)(e = "s-section s-gallery-section s-new-gallery-section ".concat(this._getPaddingClass(), " ")).call(e, t.className),
                            n = this.getDefaultBinding(),
                            o = n && n.get("components.slideSettings.layout_config"),
                            i = n && n.get("components.gallery1"),
                            r = o && o.get("width"),
                            u = M[r] || O,
                            c = "profile" === E.default.getThemeName(),
                            m = c ? "unset" : "100% !important",
                            p = D.full,
                            h = "s5-theme" === E.default.getThemeName(),
                            v = x.default.getS5Theme();
                        return v && h && (p = D[v.getIn(["section", "contentWidth"]) || "normal"]), c && (u = M.small), f.default.createElement(S.default, (0, s.default)({}, t, {
                            className: a
                        }), !1, (0, l.default)(I, {
                            className: "container",
                            styledWrapperWidth: m,
                            containerWidth: u,
                            isFullWidth: u === O,
                            titleWidth: p
                        }, void 0, (0, l.default)("div", {
                            className: "columns sixteen"
                        }, void 0, (0, l.default)(_.default, {
                            className: (0, g.default)("s-new-gallery-title", {
                                "s-title-width": p
                            }),
                            section: this,
                            binding: n
                        }), (0, l.default)(N.default, {
                            layout: o,
                            updateGallery: this._updateGallerySources,
                            gallery: i,
                            id: i && i.get("id")
                        }))))
                    }
                };
            t.default = R, e.exports = t.default
        },
        259476: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(223765),
                i = a(501068),
                l = a(752424),
                r = a(663978),
                s = a(834074),
                u = a(60530)(a(60530));
            r(t, "__esModule", {
                value: !0
            });
            var d, c = a(726394),
                f = (0, u.default)(c),
                m = a(569198),
                g = (0, u.default)(m),
                p = a(705824),
                h = (0, u.default)(p),
                v = a(351379),
                y = (0, u.default)(v),
                b = a(900214),
                _ = (0, u.default)(b),
                C = a(566380),
                N = (0, u.default)(C),
                w = a(205872),
                x = (0, u.default)(w),
                k = a(812077),
                E = (0, u.default)(k),
                L = a(31238),
                S = (0, u.default)(L),
                B = a(694473),
                T = (0, u.default)(B),
                P = a(778914),
                I = (0, u.default)(P),
                O = a(2991),
                M = (0, u.default)(O),
                D = a(977766),
                R = (0, u.default)(D),
                A = a(277149),
                U = (0, u.default)(A),
                H = a(410062),
                F = (0, u.default)(H),
                V = a(703649),
                Z = (0, u.default)(V),
                z = a(54103),
                K = (0, u.default)(z),
                W = a(366757),
                j = (0, u.default)(W),
                G = a(973935),
                Y = (0, u.default)(G),
                q = a(914578),
                J = (0, u.default)(q),
                Q = a(223336),
                $ = (0, u.default)(Q),
                X = a(421522),
                ee = (0, u.default)(X),
                te = a(45697),
                ae = ((0, u.default)(te), a(176965)),
                ne = (0, u.default)(ae),
                oe = a(294184),
                ie = (0, u.default)(oe),
                le = a(138138),
                re = (0, u.default)(le),
                se = a(234584),
                ue = (0, u.default)(se),
                de = a(818166),
                ce = ((0, u.default)(de), a(156503)),
                fe = (0, u.default)(ce),
                me = a(186613),
                ge = (0, u.default)(me),
                pe = a(149008),
                he = (0, u.default)(pe),
                ve = a(288757),
                ye = (0, u.default)(ve),
                be = a(152551),
                _e = ((0, u.default)(be), a(716505)),
                Ce = (0, u.default)(_e),
                Ne = a(548273),
                we = (0, u.default)(Ne),
                xe = a(79752),
                ke = (0, u.default)(xe),
                Ee = a(143393),
                Le = (0, u.default)(Ee),
                Se = je(a(144726)),
                Be = a(230139),
                Te = (0, u.default)(Be),
                Pe = je(a(143268)),
                Ie = a(244467),
                Oe = ((0, u.default)(Ie), a(755802)),
                Me = ((0, u.default)(Oe), a(936501)),
                De = (0, u.default)(Me),
                Re = a(845939),
                Ae = (0, u.default)(Re),
                Ue = a(43138),
                He = (0, u.default)(Ue),
                Fe = a(792695),
                Ve = (0, u.default)(Fe),
                Ze = a(219325),
                ze = (0, u.default)(Ze),
                Ke = a(104802);

            function We(e) {
                if ("function" != typeof l) return null;
                var t = new l,
                    a = new l;
                return (We = function(e) {
                    return e ? a : t
                })(e)
            }

            function je(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== o(e) && "function" != typeof e) return {
                    default: e
                };
                var a = We(t);
                if (a && a.has(e)) return a.get(e);
                var n = {},
                    i = r && s;
                for (var l in e)
                    if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                        var u = i ? s(e, l) : null;
                        u && (u.get || u.set) ? r(n, l, u) : n[l] = e[l]
                    }
                return n.default = e, a && a.set(e, n), n
            }
            var Ge = {
                    mixins: [Ve.default, (0, Te.default)("editor")],
                    displayName: "GridSection",
                    mapStateToProps: function(e) {
                        return {
                            s5NavOverlapsContent: "s5-theme" === ue.default.getThemeName() && (0, Ke.getNavOverlapsContent)(e),
                            s5NavHeight: fe.default.get("navHeight")
                        }
                    },
                    componentWillMount: function() {
                        this._applyTitleGroupMigrationToData(), this._getOnToggleImageLinkEditorFn = De.default.boundParamsMemoizer(this._onToggleImageLinkEditor, this);
                        var e = ue.default.getThemeName(),
                            t = this._getLayoutVariation();
                        return this._getLayoutBinding().sub("layout_variation").set(ze.default.getDefaultLayoutKey(e, t))
                    },
                    componentDidMount: function() {
                        var e = this;
                        return this._debouncedUpdateJQueryMeasurements = J.default.debounce((function() {
                            e._updateJQueryMeasurements(), e.forceUpdate()
                        }), 200), (0, $.default)(window).on("resize", this._debouncedUpdateJQueryMeasurements), this._updateJQueryMeasurements()
                    },
                    componentWillUnmount: function() {
                        return (0, $.default)(window).off("resize", this._debouncedUpdateJQueryMeasurements)
                    },
                    componentDidUpdate: function() {
                        this._updateJQueryMeasurements()
                    },
                    _updateJQueryMeasurements: function() {
                        if (0 === this.props.index) {
                            var e = (0, $.default)(".navigator").outerHeight() || (0, $.default)(".s-nav-inner").outerHeight() || 0,
                                t = (0, $.default)(Y.default.findDOMNode(this)),
                                a = (0, S.default)((0, T.default)(t).call(t, ".s-persp-container").css("padding-top")) || (0, S.default)(t.css("padding-top")) || 0;
                            this.updateMeta({
                                navHeight: e,
                                paddingTop: a
                            })
                        }
                    },
                    _getNavHeight: function() {
                        return "s5-theme" === ue.default.getThemeName() ? this.props.s5NavHeight : this.getMeta("navHeight")
                    },
                    _applyTitleGroupMigrationToData: function() {
                        var e = this.getDefaultBinding().sub("components");
                        if ("Add subtitle" === e.get("text2").get("value")) {
                            var t = {
                                type: "RichText",
                                defaultValue: !0,
                                value: "",
                                backupValue: null,
                                version: null
                            };
                            e.set("text1", Le.default.fromJS(t)), e.set("text2", Le.default.fromJS(t))
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = ue.default.getThemeName();
                        return ze.default.getLayoutOptions(e)
                    },
                    _updateLayoutAndAdjustCellCount: function(e) {
                        var t = ze.default.parseLayoutVariation(e),
                            a = t.getCellCount();
                        this._adjustNumberOfCellsInData(a) || ("extraLarge" !== t.cellHeight || t.canBeExtraLarge() || (t.cellHeight = "large"), this._updateLayout.call(this, t.serialize()))
                    },
                    _onToggleImageLinkEditor: function(e) {
                        var t, a = this.getRepeatableBinding("repeatable1");
                        (0, I.default)(t = a.get()).call(t, (function(t, n) {
                            "editor" === t.get("components").get("background1").get("_state") && e !== n && a.sub(n).update("components.background1", (function(e) {
                                return e.set("_state", "normal")
                            }))
                        }))
                    },
                    _renderRepeatable: function(e) {
                        var t, a = this,
                            n = this.getComponentBinding(e),
                            o = this.getRepeatableBinding(e),
                            i = this._getLayoutObject(),
                            l = this.props.index,
                            r = this._getNavHeight(),
                            s = this.getMeta("paddingTop"),
                            u = this.getComponentProps("repeatable1"),
                            d = (0, M.default)(t = n.get("list")).call(t, (function(e, t) {
                                var n = o.sub(t);
                                return (0, E.default)(Ye, {
                                    layoutVariation: a._getLayoutVariation(),
                                    layoutObj: i,
                                    binding: n,
                                    section: a,
                                    index: t,
                                    sectionIndex: l,
                                    navHeight: r,
                                    sectionPaddingTop: s,
                                    hasTitleGroup: a._hasTitleGroup(),
                                    repeatableItemProps: a._getRepeatableItemProps(o, t),
                                    getComponentProps: a.getComponentProps,
                                    getBackgroundProps: a.getBackgroundProps,
                                    onToggleImageLinkEditor: a._getOnToggleImageLinkEditorFn(t)
                                }, t)
                            })).toArray();
                        return i.useMagazineColumnDom && (d = [(0, E.default)("div", {
                            className: i.magazineColumnClass
                        }, 1, d[0], d[1]), (0, E.default)("div", {
                            className: i.magazineColumnClass
                        }, 2, d[2])]), j.default.createElement(ge.default, (0, x.default)({
                            className: "s-mh".concat("editor" === n.get("_state") ? " s-arranging" : ""),
                            style: {
                                margin: i.containerMargin,
                                padding: i.containerPadding
                            },
                            canAddItems: !1
                        }, u), d)
                    },
                    _renderLayoutButton: function() {
                        return null
                    },
                    _hasTitleGroup: function() {
                        return this.sbAnyHasContent("text1 text2", {
                            showOnly: !1
                        })
                    },
                    _getSectionStyle: function() {
                        return {
                            paddingTop: this._getLayoutObject().getSectionPaddingTop(this._getNavHeight(), this._hasTitleGroup(), this.props.index, this.props.s5NavOverlapsContent)
                        }
                    },
                    _getLayoutObject: function() {
                        var e = ue.default.getThemeName(),
                            t = this._getLayoutVariation(),
                            a = He.default.isSmallerThanDesktop();
                        return ze.default.getLayout(e, t, a)()
                    },
                    _adjustNumberOfCellsInData: function(e) {
                        var t, a, o, i, l = we.default.getSectionDataBySectionName("grid"),
                            r = l.content.components.repeatable1.components,
                            s = (0, R.default)(t = []).call(t, (0, M.default)(a = l.content.components.repeatable1.list).call(a, (function(e) {
                                return e.components
                            })), r),
                            u = this.getRepeatableBinding("repeatable1"),
                            d = u.get().count();
                        if (d === e) return !1;
                        if (d < e) ! function(e) {
                            for (var t = u.get(), a = 0; a < e;) {
                                a++;
                                var n = {
                                        type: "RepeatableItem",
                                        components: r
                                    },
                                    o = Le.default.fromJS(ke.default.addMetaId(n));
                                t = t.push(o)
                            }
                            u.set(t)
                        }(e - d);
                        else if (d > e) {
                            var c, f;
                            if (o = (0, Z.default)(c = u.get()).call(c, e), !(0, F.default)(i = o.toJS()).call(i, (function(e) {
                                    var t = e.components;
                                    return (0, U.default)(J.default).call(J.default, s, (function(e) {
                                        return t.text1.value === e.text1.value && t.text2.value === e.text2.value && t.background1.url === e.background1.url && t.background1.linkUrl === e.background1.linkUrl
                                    }))
                                })) && !confirm(n("Editor|Are you sure you want to reduce the number of grid items? Some grid items will be deleted."))) return !0;
                            var m = (0, Z.default)(f = u.get()).call(f, 0, e);
                            u.set(m)
                        }
                        return !1
                    },
                    render: function() {
                        var e, t, a = this._getLayoutObject(),
                            n = ue.default.getThemeName(),
                            o = null;
                        (this._hasTitleGroup() || (a.contentWidthIsNormal, 0)) && (o = (0, E.default)("div", {}, "section-title", (0, E.default)(Ae.default, {
                            contentCheck: "repeatable1",
                            section: this,
                            binding: this.getDefaultBinding(),
                            canHide: !0
                        })), a.isWideWithLeftAlignedHeading ? o = (0, E.default)("div", {
                            style: {
                                paddingLeft: 40,
                                paddingRight: 40
                            }
                        }, "section-title", o) : "persona" !== n && "profile" !== n && (o = (0, E.default)("div", {}, "section-title", (0, E.default)("div", {
                            className: (0, ie.default)("container title-group-container", {
                                "title-group-container--no-title-content": !this._hasTitleGroup()
                            })
                        }, void 0, (0, E.default)("div", {
                            className: "sixteen columns"
                        }, void 0, o)))));
                        var i = "profile" === n || "persona" === n,
                            l = (0, E.default)("div", {}, void 0, i && o, (0, E.default)("div", {
                                className: "s-grid-section-repeatable-container ".concat(this.sbUniformTextAlignment("text1 text2"))
                            }, void 0, this._renderRepeatable("repeatable1")));
                        return "persona" === n && (l = (0, E.default)("div", {
                            className: "twelve columns offset-three"
                        }, void 0, (0, E.default)("div", {
                            className: "s-persona-content"
                        }, void 0, l))), a.needs16ColumnContainer && (l = (0, E.default)("div", {
                            className: "columns sixteen"
                        }, void 0, l)), l = [this._renderLayoutButton(), !i && o, (0, E.default)("div", {
                            className: "s-grid-section-content ".concat(this._getLayoutObject().containerClass)
                        }, "section-content", l)], a.needsPerspContainer && (l = (0, E.default)("div", {
                            className: "s-persp-container"
                        }, void 0, (0, E.default)("div", {
                            className: "s-persp-column"
                        }, void 0, l))), (0, E.default)("div", {
                            className: (0, R.default)(e = (0, R.default)(t = "s-section s-grid-section ".concat(this._getLayoutObject().sectionClass, " ")).call(t, this._hasTitleGroup() ? " _hasTitleGroup" : "", " ")).call(e, this._getPaddingClass()),
                            style: this._getSectionStyle()
                        }, void 0, (0, E.default)("div", {
                            style: {
                                width: "100%"
                            }
                        }, void 0, l))
                    }
                },
                Ye = ee.default.decorate(ne.default.Mixin)(d = function(e) {
                    (0, y.default)(o, e);
                    var t, a, n = (t = o, a = function() {
                        if ("undefined" == typeof Reflect || !i) return !1;
                        if (i.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(i(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, N.default)(t);
                        if (a) {
                            var o = (0, N.default)(this).constructor;
                            e = i(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, _.default)(this, e)
                    });

                    function o(e) {
                        var t, a;
                        return (0, f.default)(this, o), (a = n.call(this, e))._updateMinHeight = J.default.throttle((0, K.default)(t = a._updateMinHeight).call(t, (0, h.default)(a)), 200), a
                    }
                    return (0, g.default)(o, [{
                        key: "componentDidMount",
                        value: function() {
                            this._updateMinHeight()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this._updateMinHeight()
                        }
                    }, {
                        key: "getPropCompareFunctions",
                        value: function() {
                            return {
                                repeatableItemProps: function(e, t) {
                                    return (0, re.default)(e, t)
                                }
                            }
                        }
                    }, {
                        key: "_updateMinHeight",
                        value: function() {
                            var e = (0, $.default)(Y.default.findDOMNode(this)),
                                t = (0, T.default)(e).call(e, ".s-item-text-group").outerHeight(),
                                a = Math.max(this.props.layoutObj.cellMinHeight, t + 50);
                            e.css("min-height", "".concat(a, "px"))
                        }
                    }, {
                        key: "_getDefaultBackground",
                        value: function() {
                            return we.default.getSectionDataBySectionName("grid").content.components.repeatable1.components.background1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.layoutObj,
                                n = t.index,
                                o = t.sectionIndex,
                                i = t.navHeight,
                                l = t.sectionPaddingTop,
                                r = t.hasTitleGroup,
                                s = this.getDefaultBinding(),
                                u = s.sub("components.background1").toJS() || this._getDefaultBackground(),
                                d = Se.createImage(u).getUrl(),
                                c = u.linkUrl,
                                f = u.linkTarget,
                                m = Pe.imageHasContent(d),
                                g = a.cellClassName;
                            "editor" === s.sub("components.background1").get("_state") && (g += " _image-link-editor-open");
                            var p = a.getItemButtonStyles({
                                    cellIndex: n,
                                    sectionIndex: o,
                                    navHeight: i,
                                    sectionPaddingTop: l,
                                    hasTitleGroup: r,
                                    s5NavOverlapsContent: this.props.s5NavOverlapsContent
                                }),
                                h = this.props.getBackgroundProps("background1", s);
                            h.linkUrl = c, h.linkTarget = f;
                            var v = (0, E.default)("div", {
                                className: "s-grid-section-cell-content"
                            }, void 0, j.default.createElement(Ce.default, (0, x.default)({
                                key: n
                            }, h), null, (0, E.default)("div", {
                                className: "s-grid-section-item-text-group-wrapper",
                                style: {
                                    border: a.getItemBorder(m)
                                }
                            }, void 0, (0, E.default)(ye.default, {
                                section: this.props.section,
                                itemBinding: s,
                                binding: s,
                                showItemSubtitle: !1,
                                upperChildrenPosition: !0,
                                onChange: this._updateMinHeight
                            }))));
                            return j.default.createElement(he.default, (0, x.default)({
                                className: (0, R.default)(e = "".concat(g, " ")).call(e, a.isTopRightCell(n) ? "_top-right-cell" : ""),
                                style: {
                                    padding: a.cellPadding,
                                    minHeight: a.cellMinHeight
                                },
                                binding: s,
                                index: n,
                                alwaysShowButtons: !0,
                                moveButtonStyle: p.moveButton
                            }, this.props.repeatableItemProps), v)
                        }
                    }]), o
                }(j.default.Component)) || d;
            t.default = Ge, e.exports = t.default
        },
        65671: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(812077),
                r = (0, i.default)(l),
                s = a(205872),
                u = (0, i.default)(s),
                d = a(977766),
                c = (0, i.default)(d),
                f = a(366757),
                m = (0, i.default)(f),
                g = a(914578),
                p = (0, i.default)(g),
                h = a(45697),
                v = (0, i.default)(h),
                y = a(845939),
                b = (0, i.default)(y),
                _ = a(328043),
                C = (0, i.default)(_),
                N = a(787066),
                w = (0, i.default)(N),
                x = a(365940),
                k = (0, i.default)(x),
                E = a(21053),
                L = (0, i.default)(E),
                S = a(234584),
                B = (0, i.default)(S),
                T = a(792695),
                P = {
                    mixins: [(0, i.default)(T).default],
                    displayName: "NewHeroSection",
                    propTypes: {
                        eagerLoad: v.default.bool.isRequired,
                        binding: v.default.object.isRequired
                    },
                    componentWillMount: function() {
                        var e = B.default.getThemeName(),
                            t = this._getLayoutVariation(),
                            n = this.getDefaultBinding().get("template_name"),
                            o = a(299293);
                        this._getLayoutBinding().sub("layout_variation").set(o.getDefaultLayoutKey(e, t, n))
                    },
                    _getLayoutOptions: function() {
                        var e = B.default.getThemeName();
                        return a(299293).getLayoutOptions(e)
                    },
                    _getSectionType: function() {
                        return this._showImage() ? "s-hero-section" : "s-signup-section"
                    },
                    _getLayout: function() {
                        return p.default.camelCase(this._getLayoutVariation())
                    },
                    _getLayoutObj: function() {
                        var e, t = a(299293),
                            n = this._getLayoutVariation(),
                            o = B.default.getThemeName();
                        return "function" == typeof t.getLayout(o, n) && (e = t.getLayout(o, n)(this)), e
                    },
                    _getType: function() {
                        return this._getLayoutObj().type
                    },
                    _showImage: function() {
                        return this._getLayoutObj().showImage
                    },
                    _renderContent: function() {
                        var e, t = this._getLayoutObj(),
                            a = t.layoutClass,
                            n = t.mediaClass,
                            o = t.textClass,
                            i = t.textOffsetClass,
                            l = t.type,
                            s = t.showImage,
                            d = t.swapTitle,
                            f = "button" === l && this.sbHasContent("button1"),
                            g = "button" === l && this.sbHasContent("button1", {
                                showOnly: !1
                            }),
                            p = "images" === l && this.sbAnyHasContent("image1 image2"),
                            h = this.sbAnyHasContent("media1"),
                            v = B.default.getThemeName();
                        return (0, r.default)("div", {
                            className: a
                        }, void 0, (0, r.default)("div", {
                            className: n + (h ? "" : " empty-media")
                        }, void 0, s && m.default.createElement(w.default, (0, u.default)({
                            enableWidth: !0
                        }, this.getReduxComponentProps("media1")))), (0, r.default)("div", {
                            className: o
                        }, void 0, (0, r.default)("div", {
                            className: i
                        }, void 0, "glow" === v && (0, r.default)(b.default, {
                            section: this,
                            binding: this.getDefaultBinding(),
                            subtitleOnTop: d
                        }), "glow" !== v && (0, r.default)(b.default, {
                            section: this,
                            binding: this.getDefaultBinding()
                        }), (f || p || "signup" === l) && (0, r.default)("div", {
                            className: (0, c.default)(e = "".concat(g ? "" : "empty-button", " ")).call(e, this.sbUniformTextAlignment("text1 text2", {
                                parentBinding: this.getDefaultBinding()
                            }))
                        }, void 0, "button" === l && (0, r.default)("div", {
                            className: "s-button-group ib"
                        }, void 0, m.default.createElement(k.default, (0, u.default)({}, this.getComponentProps("background1"), this.getComponentProps("button1")))), "signup" === l && (0, r.default)("div", {
                            className: "s-email-form-container"
                        }, void 0, m.default.createElement(L.default, (0, u.default)({
                            signup: !0,
                            sessionId: this._getSectionId()
                        }, this.getComponentProps("email1")))), "images" === l && (0, r.default)("div", {
                            className: "s-image-wrapper"
                        }, void 0, (0, r.default)("div", {
                            className: "s-image-item"
                        }, void 0, m.default.createElement(C.default, (0, u.default)({
                            enableWidth: !0
                        }, this.getReduxComponentProps("image1"), {
                            eagerLoad: !0
                        }))), (0, r.default)("div", {
                            className: "s-image-item"
                        }, void 0, m.default.createElement(C.default, (0, u.default)({
                            enableWidth: !0
                        }, this.getReduxComponentProps("image2"), {
                            eagerLoad: !0
                        }))))))))
                    },
                    render: function() {
                        return n("Editor|Hero"), n("Editor|Great for the top of a page. Add images, a button, or even a sign-up form."), this.getTemplate().apply(this)
                    }
                };
            t.default = P, e.exports = t.default
        },
        196771: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(812077),
                l = (0, o.default)(i),
                r = a(205872),
                s = (0, o.default)(r),
                u = a(678580),
                d = (0, o.default)(u),
                c = a(703649),
                f = (0, o.default)(c),
                m = a(981643),
                g = (0, o.default)(m),
                p = a(694473),
                h = (0, o.default)(p),
                v = a(2991),
                y = (0, o.default)(v);
            a(974916), a(323123), a(569600);
            var b = a(366757),
                _ = (0, o.default)(b),
                C = a(973935),
                N = (0, o.default)(C),
                w = a(223336),
                x = (0, o.default)(w),
                k = a(234584),
                E = (0, o.default)(k),
                L = a(787066),
                S = (0, o.default)(L),
                B = a(365940),
                T = (0, o.default)(B),
                P = a(186613),
                I = (0, o.default)(P),
                O = a(149008),
                M = (0, o.default)(O),
                D = a(288757),
                R = (0, o.default)(D),
                A = a(453290),
                U = a(792695),
                H = {
                    mixins: [(0, o.default)(U).default],
                    displayName: "NewMediaSection",
                    componentWillMount: function() {
                        var e, t, n, o = E.default.getThemeName(),
                            i = this._getLayoutVariation(),
                            l = this.getDefaultBinding().get("template_name");
                        i.split("-").length >= 2 && ("perspective" === o ? (0, d.default)(e = ["mediaLeft", "mediaRight", "center"]).call(e, i.split("-")[0]) || (i = "center-".concat(i)) : (0, d.default)(t = ["mediaLeft", "mediaRight", "center"]).call(t, i.split("-")[0]) && (i = (0, f.default)(n = i.split("-")).call(n, 1).join("-")));
                        var r = a(7146),
                            s = "new_media" === l ? "" : l;
                        this._getLayoutBinding().sub("layout_variation").set(r.getDefaultLayoutKey(o, i, s))
                    },
                    componentDidUpdate: function(e, t) {
                        var a, n, o = this._getLayoutVariation(); - 1 === (0, g.default)(o).call(o, "col") && ((0, h.default)(a = (0, x.default)(N.default.findDOMNode(this))).call(a, ".s-mh-nudge").css({
                            "padding-top": 0
                        }), (0, h.default)(n = (0, x.default)(N.default.findDOMNode(this))).call(n, ".s-item-media-wrapper").css({
                            "line-height": "",
                            "min-height": ""
                        }))
                    },
                    _getLayoutOptions: function() {
                        var e = E.default.getThemeName();
                        return a(7146).getLayoutOptions(e)
                    },
                    _getSectionType: function() {
                        var e, t = 0;
                        switch ("perspective" === E.default.getThemeName() && (t = 1), this._getLayoutVariation().split("-")[t]) {
                            case "col":
                                e = "s-columns-section";
                                break;
                            case "row":
                                e = "s-rows-section";
                                break;
                            case "media":
                                e = "s-media-section"
                        }
                        return e
                    },
                    _getContentAlignmentClass: function() {
                        return this.sbUniformTextAlignment("text1 text2")
                    },
                    _renderItemTextGroup: function(e) {
                        var t, a = e.textClass,
                            n = e.isBigMedia,
                            o = e.itemBinding,
                            i = e.mediaHasContentOrIsEditMode,
                            r = e.textInnerClass,
                            u = e.buttonClass,
                            c = e.showAddButton,
                            f = e.buttonHasContentOrIsEditMode,
                            m = this._getLayoutVariation(),
                            g = (0, d.default)(t = A.NewBigMediaLayout.NEW_LAYOUT).call(t, m);
                        return (0, l.default)("div", {
                            className: a
                        }, void 0, (0, l.default)(R.default, {
                            deprecateItemSubtitle: n,
                            section: this,
                            itemBinding: o,
                            binding: o,
                            isNewBigMedia: g,
                            className: i ? r : ""
                        }, void 0, u && f && (0, l.default)("div", {
                            className: u + (c ? " s-placeholder-button" : "")
                        }, void 0, _.default.createElement(T.default, (0, s.default)({}, this.getComponentProps("background1", o), this.getComponentProps("button1", o), {
                            smallButton: !0
                        })))))
                    },
                    _renderRepeatable: function(e) {
                        var t, n, o = this,
                            i = a(7146),
                            r = E.default.getThemeName(),
                            u = this._getLayoutVariation(),
                            c = this.getComponentBinding(e),
                            f = this.getRepeatableBinding(e),
                            m = this._getLayoutBinding();
                        "function" == typeof i.getLayout(r, u) && (n = i.getLayout(r, u)(this));
                        var g = n.repeatableClass;
                        "function" == typeof g && (g = g(this));
                        var p = this.getComponentProps("repeatable1"),
                            h = 0;
                        "perspective" === (r = E.default.getThemeName()) && (h = 1);
                        var v = "media" === this._getLayoutVariation().split("-")[h],
                            b = "fresh" === r && "s-columns-section" === this._getSectionType(),
                            C = "s-rows-section" === this._getSectionType() && this.getThemeFeature("verticalAlignRowsSection"),
                            N = "media-top-text" === this._getLayoutVariation();
                        return _.default.createElement(I.default, (0, s.default)({
                            className: g + ("editor" === c.get("_state") ? " s-arranging" : "")
                        }, p), (0, y.default)(t = c.get("list")).call(t, (function(e, t) {
                            var a, i = f.sub(t),
                                c = {
                                    default: i,
                                    layout: m
                                },
                                g = o.sbHasContent("media1", {
                                    parentBinding: i
                                }),
                                p = o.sbAnyHasContent("text1 text2 text3", {
                                    parentBinding: i
                                }),
                                h = o.sbHasContent("button1", {
                                    parentBinding: i
                                }),
                                y = "editor" !== o.getComponentBinding("button1", i).get("_state") && !o.sbHasContent("button1", {
                                    parentBinding: i,
                                    showOnly: !1
                                }),
                                w = p || h && n.buttonClass,
                                x = n,
                                k = x.itemClass,
                                E = x.textClass,
                                L = x.innerItemClass,
                                B = x.mediaClass,
                                T = x.singleMediaClass,
                                P = x.singleTextClass,
                                I = x.buttonClass,
                                O = x.textInnerClass;
                            "function" == typeof k && (k = k(o, t)), (0, d.default)(a = A.NewBigMediaLayout.NEW_LAYOUT).call(a, u) && (E += " ".concat(u)), "function" == typeof L && (L = L(o, t)), L += C ? " s-rva" : "", "function" == typeof B && (B = B(o, t)), "function" == typeof T && (T = T(o, t)), T = T || B, "function" == typeof E && (E = E(o, t)), "function" == typeof P && (P = P(o, t)), P = P || E, "function" == typeof I && (I = I(o, t)), "function" == typeof O && (O = O(o, t));
                            var D = "s-item-media-wrapper ";
                            return "media-bottom-text" !== u && (D += w ? B : T), D += C ? " s-rva-media" : "", E = g ? E : P, E += C ? " s-rva-text" : "", "glow" === r && (E = E || "fourteen columns offset-one"), _.default.createElement(M.default, (0, s.default)({
                                className: k,
                                index: t,
                                binding: c
                            }, o._getRepeatableItemProps(f, t)), (0, l.default)("div", {
                                className: "clearfix"
                            }, void 0, (0, l.default)("div", {}, void 0, N && w && o._renderItemTextGroup({
                                textClass: E,
                                isBigMedia: v,
                                itemBinding: i,
                                buttonClass: I,
                                showAddButton: y,
                                textInnerClass: O,
                                mediaHasContentOrIsEditMode: g,
                                buttonHasContentOrIsEditMode: h
                            }), g && (0, l.default)("div", {
                                className: D
                            }, void 0, (0, l.default)("div", {
                                className: "s-item-media-group"
                            }, void 0, _.default.createElement(S.default, (0, s.default)({
                                size: v ? "large" : "medium",
                                isFreshColumn: b,
                                eagerLoad: !0
                            }, o.getReduxComponentProps("media1", i), {
                                assetType: "gallery"
                            })))), !N && w && o._renderItemTextGroup({
                                textClass: E,
                                isBigMedia: v,
                                itemBinding: i,
                                buttonClass: I,
                                showAddButton: y,
                                textInnerClass: O,
                                mediaHasContentOrIsEditMode: g,
                                buttonHasContentOrIsEditMode: h
                            }))))
                        })).toArray())
                    },
                    render: function() {
                        return this.getTemplate().apply(this)
                    }
                };
            t.default = H, e.exports = t.default
        },
        119964: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(812077),
                l = (0, o.default)(i),
                r = a(205872),
                s = (0, o.default)(r),
                u = a(981643),
                d = (0, o.default)(u),
                c = a(2991),
                f = (0, o.default)(c),
                m = a(54103),
                g = (0, o.default)(m);
            a(974916), a(323123);
            var p = a(366757),
                h = (0, o.default)(p),
                v = a(234584),
                y = (0, o.default)(v),
                b = a(186613),
                _ = (0, o.default)(b),
                C = a(149008),
                N = (0, o.default)(C),
                w = a(288757),
                x = (0, o.default)(w),
                k = a(365940),
                E = (0, o.default)(k),
                L = a(357646),
                S = (0, o.default)(L),
                B = a(792695),
                T = {
                    mixins: [(0, o.default)(B).default],
                    displayName: "NewTextSection",
                    componentWillMount: function() {
                        a(766463).removeOldBackgroundForText(this);
                        var e = y.default.getThemeName(),
                            t = a(225425);
                        this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e, this._getLayoutVariation()))
                    },
                    _getLayoutOptions: function() {
                        var e = y.default.getThemeName();
                        return a(225425).getLayoutOptions(e)
                    },
                    _getPositionLayout: function() {
                        return this._getLayoutVariation().split("-")[1]
                    },
                    _getTitleOverlayClass: function() {
                        var e = this._getLayoutVariation();
                        return this.sbAnyHasContent("text1 text2", {
                            showOnly: !1
                        }) ? -1 !== (0, d.default)(e).call(e, "overlay") ? "s-persp-overlay" : -1 !== (0, d.default)(e).call(e, "card") ? "s-persp-card" : void 0 : ""
                    },
                    _getSectionType: function() {
                        switch (y.default.getThemeName(), this._getLayoutVariation().split("-")[0]) {
                            case "text":
                                return "s-text-section";
                            case "box":
                                return "s-info-section"
                        }
                    },
                    _renderPerspectiveText: function(e) {
                        var t, a = this,
                            n = this.getComponentBinding("repeatable1"),
                            o = this._getLayoutBinding(),
                            i = this.getRepeatableBinding("repeatable1"),
                            r = i.get().size,
                            u = function(t, n) {
                                if (n >= 3) return null;
                                var r = i.sub(n),
                                    u = e.itemClass,
                                    d = e.textClass;
                                return "function" == typeof u && (u = u(a, n)), "function" == typeof d && (d = d(a, n)), h.default.createElement(N.default, (0, s.default)({
                                    className: u,
                                    binding: {
                                        default: r,
                                        layout: o
                                    },
                                    index: n
                                }, a._getRepeatableItemProps(i, n)), (0, l.default)("div", {
                                    className: "s-persp-column"
                                }, void 0, (0, l.default)("div", {
                                    className: d
                                }, void 0, (0, l.default)("div", {
                                    className: "s-title-group"
                                }, void 0, a.sbHasContent("text1", {
                                    parentBinding: r
                                }) && (0, l.default)("div", {
                                    className: "s-title"
                                }, void 0, h.default.createElement(S.default, (0, s.default)({
                                    tagName: "h2",
                                    textType: "title"
                                }, a.getComponentProps("text1", r)))), (0, l.default)("div", {
                                    className: "s-item-text"
                                }, void 0, h.default.createElement(S.default, (0, s.default)({
                                    tagName: "div",
                                    textType: "body"
                                }, a.getComponentProps("text2", r))))))))
                            },
                            d = this.getComponentProps("repeatable1");
                        return h.default.createElement(_.default, (0, s.default)({
                            className: (r >= 3 ? "s-hide-add-button" : "") + ("editor" === n.get("_state") ? " s-arranging" : "")
                        }, d), (0, f.default)(t = n.get("list")).call(t, (0, g.default)(u).call(u, this)).toArray())
                    },
                    _renderRepeatable: function(e) {
                        var t, n, o = this,
                            i = a(225425),
                            r = y.default.getThemeName(),
                            u = this.getComponentBinding(e),
                            d = this._getLayoutBinding(),
                            c = this.getRepeatableBinding(e);
                        "function" == typeof i.getLayout(r, this._getLayoutVariation()) && (n = i.getLayout(r, this._getLayoutVariation())(this));
                        var m = n.repeatableClass;
                        if ("s-text-section" === this._getSectionType() && "perspective" === r) return this._renderPerspectiveText(n);
                        var p = function(e, t) {
                                var a = c.sub(t),
                                    i = {
                                        default: a,
                                        layout: d
                                    },
                                    r = n,
                                    u = r.itemClass,
                                    f = r.textClass,
                                    m = r.buttonClass;
                                "function" == typeof u && (u = u(o, t)), "function" == typeof f && (f = f(o, t)), "function" == typeof m && (m = m(o, t));
                                var g = o.sbHasContent("button1", {
                                        parentBinding: a
                                    }),
                                    p = "editor" !== o.getComponentBinding("button1", a).get("_state") && !o.sbHasContent("button1", {
                                        parentBinding: a,
                                        showOnly: !1
                                    });
                                return h.default.createElement(N.default, (0, s.default)({
                                    index: t,
                                    className: u,
                                    binding: i
                                }, o._getRepeatableItemProps(c, t)), (0, l.default)("div", {
                                    className: f
                                }, void 0, (0, l.default)(x.default, {
                                    section: o,
                                    itemBinding: a,
                                    binding: a,
                                    showItemSubtitle: !1
                                }, void 0, m && g && (0, l.default)("div", {
                                    className: m + (p ? " s-placeholder-button" : "")
                                }, void 0, h.default.createElement(E.default, (0, s.default)({}, o.getComponentProps("background1", a), o.getComponentProps("button1", a), {
                                    smallButton: !0
                                }))))))
                            },
                            v = this.getComponentProps("repeatable1");
                        return h.default.createElement(_.default, (0, s.default)({
                            className: m + ("editor" === u.get("_state") ? " s-arranging" : "")
                        }, v), (0, f.default)(t = c.get()).call(t, (0, g.default)(p).call(p, this)).toArray())
                    },
                    render: function() {
                        return this.getTemplate().apply(this)
                    }
                };
            t.default = T, e.exports = t.default
        },
        930742: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(812077),
                l = (0, o.default)(i),
                r = a(205872),
                s = (0, o.default)(r),
                u = a(678580),
                d = (0, o.default)(u),
                c = a(981643),
                f = (0, o.default)(c),
                m = a(366757),
                g = (0, o.default)(m),
                p = a(143393),
                h = (0, o.default)(p),
                v = a(234584),
                y = (0, o.default)(v),
                b = a(365940),
                _ = (0, o.default)(b),
                C = a(787066),
                N = (0, o.default)(C),
                w = a(845939),
                x = (0, o.default)(w),
                k = a(792695),
                E = {
                    mixins: [(0, o.default)(k).default],
                    displayName: "NewTitleSection",
                    componentWillMount: function() {
                        var e, t = y.default.getThemeName();
                        (0, d.default)(e = ["normal", "subBottom", "center", "skinny"]).call(e, this._getLayoutVariation()) && "perspective" !== t && this.getComponentBinding("media1").sub("image").merge(h.default.fromJS({
                            url: "",
                            s: null,
                            storage: null,
                            storageKey: null,
                            format: null
                        }));
                        var n = a(531974);
                        this._getLayoutBinding().sub("layout_variation").set(n.getDefaultLayoutKey(t, this._getLayoutVariation()))
                    },
                    _getLayoutOptions: function() {
                        var e = y.default.getThemeName();
                        return a(531974).getLayoutOptions(e)
                    },
                    _getSectionType: function() {
                        var e, t = y.default.getThemeName(),
                            a = "";
                        return -1 !== (0, f.default)(e = this._getLayoutVariation()).call(e, "full") && (a += "s-section-full "), "persona" === t && (a += "cta" === this.getDefaultBinding().get("template_name") ? "s-cta-section" : "s-title-section"), a
                    },
                    _renderContent: function() {
                        var e, t = y.default.getThemeName(),
                            n = a(531974);
                        "function" == typeof n.getLayout(t, this._getLayoutVariation()) && (e = n.getLayout(t, this._getLayoutVariation())(this));
                        var o = e,
                            i = o.outerContainerClass,
                            r = o.innerContainerClass,
                            u = o.outerMediaClass,
                            d = o.innerMediaClass,
                            c = o.textClass,
                            f = o.buttonClass,
                            m = o.isSubtitleOnBottom,
                            p = this.sbHasContent("button1"),
                            h = (this.sbHasContent("button1", {
                                showOnly: !1
                            }), this.sbHasContent("media1")),
                            v = "editor" !== this.getComponentBinding("button1").get("_state") && !this.sbHasContent("button1", {
                                showOnly: !1
                            }),
                            b = "editor" !== this.getComponentBinding("media1").get("_state") && !this.sbHasContent("media1", {
                                showOnly: !1
                            });
                        return (0, l.default)("div", {
                            className: i,
                            style: {
                                zIndex: 3
                            }
                        }, void 0, (0, l.default)("div", {
                            className: r
                        }, void 0, h && u && (0, l.default)("div", {
                            className: u
                        }, void 0, (0, l.default)("div", {
                            className: d
                        }, void 0, g.default.createElement(N.default, (0, s.default)({}, this.getReduxComponentProps("media1"), {
                            showBlackButton: !0
                        })))), h && !u && (0, l.default)("div", {
                            className: d + (b ? " s-placeholder-button" : "")
                        }, void 0, g.default.createElement(N.default, (0, s.default)({}, this.getReduxComponentProps("media1"), {
                            showBlackButton: !0
                        }))), (0, l.default)(x.default, {
                            className: c,
                            contentCheck: "button1",
                            subtitleOnTop: !m,
                            section: this,
                            binding: this.getDefaultBinding()
                        }), p && (0, l.default)("div", {
                            className: f + (v ? " s-placeholder-button" : "")
                        }, void 0, g.default.createElement(_.default, (0, s.default)({}, this.getComponentProps("background1"), this.getComponentProps("button1"))))))
                    },
                    render: function() {
                        return this.getTemplate().apply(this)
                    }
                };
            t.default = E, e.exports = t.default
        },
        984806: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l, r, s, u, d, c = a(205872),
                f = (0, i.default)(c),
                m = a(812077),
                g = (0, i.default)(m),
                p = a(981643),
                h = (0, i.default)(p),
                v = a(678580),
                y = (0, i.default)(v),
                b = a(977766),
                _ = (0, i.default)(b),
                C = a(2991),
                N = (0, i.default)(C),
                w = a(51942),
                x = (0, i.default)(w),
                k = a(54103),
                E = (0, i.default)(k),
                L = a(366757),
                S = (0, i.default)(L),
                B = a(234584),
                T = (0, i.default)(B),
                P = a(818166),
                I = (0, i.default)(P),
                O = a(230139),
                M = (0, i.default)(O),
                D = a(328043),
                R = (0, i.default)(D),
                A = a(365940),
                U = (0, i.default)(A),
                H = a(357646),
                F = (0, i.default)(H),
                V = a(792695),
                Z = (0, i.default)(V),
                z = a(186613),
                K = (0, i.default)(z),
                W = a(149008),
                j = (0, i.default)(W),
                G = a(845939),
                Y = (0, i.default)(G),
                q = a(659370),
                J = ((0, i.default)(q), a(436173)),
                Q = (0, i.default)(J),
                $ = a(309955),
                X = (0, i.default)($),
                ee = a(820736),
                te = ((0, i.default)(ee), a(716505)),
                ae = (0, i.default)(te),
                ne = a(469155),
                oe = (0, i.default)(ne),
                ie = a(11945),
                le = a(837337),
                re = (0, i.default)(le),
                se = a(318592),
                ue = a(381633).Tooltip,
                de = ["image1", "title1", "text1", "button", "text2"],
                ce = (0, ie.getIsEditorRtlLayout)(),
                fe = {
                    mixins: [Z.default, (0, M.default)("editor")],
                    displayName: "Pricing Section",
                    buttonRefs: [],
                    _getLayoutOptions: function() {
                        var e = T.default.getThemeName();
                        return X.default.getLayoutOptions(e)
                    },
                    _updatePricingLayout: function(e) {
                        this._updateLayout(e)
                    },
                    _getHighlightSetting: function() {
                        return this._getLayoutSettings().highlighted_id
                    },
                    _settingHightId: function(e) {
                        var t = this._getHighlightSetting() !== e ? e : null;
                        this.setData("components.slideSettings.display_settings.highlighted_id", t), this.savePage()
                    },
                    _renderEditorHighlight: function(e, t) {
                        var o = this,
                            i = a(381633).Tooltip;
                        return (0, g.default)(i, {
                            placement: ce ? "left" : "right",
                            title: n(t ? "Editor|Highlighted" : "Editor|Highlight this item"),
                            overlayClassName: "highlight-tooltip ".concat(t ? "checked" : "")
                        }, void 0, (0, g.default)("div", {
                            className: "s-repeatable-widget-button highlight-button ".concat(t ? "checked" : ""),
                            onClick: function() {
                                o._settingHightId(e)
                            }
                        }, void 0, l || (l = (0, g.default)("i", {
                            className: "entypo-star entypo"
                        }))))
                    },
                    _getRootClass: function() {
                        var e, t, a, n, o, i, l = T.default.getThemeName(),
                            r = this._getLayoutVariation(),
                            s = I.default.getTemplateVariation(),
                            u = ["dark", "default"],
                            d = -1 !== (0, h.default)(r).call(r, "pricing-layout-4"),
                            c = (0, h.default)(e = ["onyx_new", "app", "profile"]).call(e, l) > -1,
                            f = (0, h.default)(t = ["bright", "perspective"]).call(t, l) > -1;
                        return (0, se.css)("&.s-bg-dark,", (0, y.default)(u).call(u, s) ? "&.s-bg-gray, &.s-bg-white," : "", "\n        &.s-section.s-bg-dark,&.s-bg-light-text,&.s-bg-image.s-bg-light-text{color:#40404c;.inner-container{.s-item-text,.s-item-title,.s-item-subtitle{color:#40404c;.s-subtitle{color:#40404c;}}}}.inner-container{text-shadow:none;}&.s-bg-dark,&.s-section.s-bg-dark\n        ", (0, y.default)(u).call(u, s) ? ", &.s-bg-gray, &.s-bg-white, &.s-bg-image.s-bg-light-text" : "", "{", d ? "" : (0, _.default)(a = "\n          .inner-container {\n            .s-common-button {\n              ".concat(c ? "box-shadow: 0px 3px 0 #333" : "", "\n              ")).call(a, f ? "border: 2px solid #333" : "", "\n            }\n            .s-bg-theme-color-1 {\n              background-color: #333;\n              color: #fff;\n            }\n          }\n          "), "\n        .s-border-theme-color-1{border-color:#333;}", d ? (0, _.default)(n = (0, _.default)(o = (0, _.default)(i = '.s-pricing-item {\n            .inner-container {\n              .s-item-title {\n                background-color: rgba(51, 51, 51, 0.5);\n                color: #fff;\n              }\n              .s-theme-color-1 {\n                color: #fff;\n              }\n              .s-common-button {\n                background:url("") no-repeat 0 0;\n                '.concat(c ? "box-shadow: 0px 3px 0 rgba(51, 51, 51, 0.5)" : "", "\n                ")).call(i, f ? "border: 2px solid rgba(51, 51, 51, 0.5)" : "", "\n              }\n            }\n          }\n          .highlighted {\n            border-color: #333;\n            .inner-container {\n              .s-item-title {\n                background-color: #333;\n                color: #fff;\n              }\n              .s-theme-color-1 {\n                color: #fff;\n              }\n              .s-common-button {\n                ")).call(o, c ? "box-shadow: 0px 3px 0 #333" : "", "\n                ")).call(n, f ? "border: 2px solid #333" : "", "\n              }\n              .s-item-highlight-badge {\n                background: transparent;\n              }\n            }\n          }\n         ") : "", "}")
                    },
                    _getLayoutStyle: function(e) {
                        var t = this,
                            a = {
                                title1Color: "",
                                hasHighlightItem: this._getHighlightSetting() ? "s-pricing-has-highlight-item" : "",
                                highlightedBgColor: "s-bg-theme-color-1",
                                bgColor: function(e) {
                                    return ""
                                },
                                showBorder: function(e) {
                                    return ""
                                },
                                buttonBgColor: function(e) {
                                    return ""
                                },
                                title1BgColor: function(e) {
                                    return ""
                                },
                                isHighlighted: function(e) {
                                    return e ? "highlighted" : ""
                                }
                            };
                        switch (e) {
                            case "pricing-layout-1":
                                a.bgColor = function(e) {
                                    return e ? "s-bg-theme-color-fade-1" : ""
                                };
                                break;
                            case "pricing-layout-3":
                                a.showBorder = function(e) {
                                    return e ? "s-border-theme-color-1 highlight-border" : ""
                                };
                                break;
                            case "pricing-layout-4":
                                a.title1Color = "s-theme-color-1", a.showBorder = function(e) {
                                    return e ? "s-border-theme-color-1 highlight-border" : ""
                                }, a.buttonBgColor = function(e) {
                                    return !e && t._getButtonClassName() || ""
                                }, a.title1BgColor = function(e) {
                                    return e ? "s-bg-theme-color-1" : "s-bg-theme-color-fade-2"
                                }
                        }
                        return a
                    },
                    _getButtonClassName: function() {
                        var e, t, a, n = T.default.getThemeName();
                        return (0, h.default)(e = ["onyx_new", "app", "profile"]).call(e, n) > -1 ? "s-button-theme-style-shadow" : (0, h.default)(t = ["bright", "perspective"]).call(t, n) > -1 ? "s-button-theme-style-border" : (0, h.default)(a = ["spectre", "glow"]).call(a, n) > -1 ? "s-button-theme-style-important" : "s-button-theme-style"
                    },
                    onButtonRef: function(e) {
                        this.buttonRefs.push(e)
                    },
                    _jumpToMembership: function() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        oe.default.gotoMembershipPage(t), (0, N.default)(e = this.buttonRefs).call(e, (function(e) {
                            e.onClickCancel()
                        }))
                    },
                    hasExtraSpace: function(e) {
                        switch (e.type) {
                            case "RichText":
                                return "" !== e.value;
                            case "Button":
                                return "" !== e.text;
                            case "Image":
                                return R.default.hasContent(e.dataProps);
                            default:
                                return !0
                        }
                    },
                    _renderRepeatable: function(e) {
                        var t, a, o = this,
                            i = this.getRepeatableBinding(e),
                            l = this._getLayoutVariation(),
                            c = this._getHighlightSetting(),
                            m = i.get().size,
                            p = m <= 4,
                            h = m <= 2,
                            v = this._getLayoutStyle(l),
                            y = (0, N.default)(t = i.get()).call(t, (function(e, t) {
                                var a, d, m, p, y = i.sub(t),
                                    b = i.sub(t),
                                    C = e.get("id"),
                                    w = c === C,
                                    k = T.default.getIsMembershipEnabled(),
                                    L = (0, x.default)([], de);
                                if ("pricing-layout-4" === l) {
                                    var B = L[0];
                                    L[0] = L[1], L[1] = B
                                }
                                var P = function(e) {
                                        return k ? (0, g.default)("div", {
                                            className: "hint",
                                            onClick: function(t) {
                                                return e("/i/register")
                                            }
                                        }, void 0, (0, g.default)("div", {
                                            className: "thin"
                                        }, void 0, (0, g.default)("span", {
                                            className: "tip-item"
                                        }, void 0, r || (r = (0, g.default)("i", {
                                            className: "entypo-vcard"
                                        })), " ", n("Membership|Member Registration")))) : null
                                    },
                                    I = (0, re.default)("div", {
                                        target: "css-2skvni0"
                                    })("& div{cursor:pointer;font-size:12px;font-weight:bold;margin:10px 0;padding:10px;background:#505050;display:flex;span{margin-left:5px;}.entypo-right-open-big{float:right;margin-left:auto;}}"),
                                    O = k ? null : (0, g.default)(ue, {
                                        placement: "right",
                                        title: n("Membership|If you activate Paid Subscriptions, you can let visitors subscribe here.")
                                    }, void 0, (0, g.default)(I, {}, void 0, (0, g.default)("div", {
                                        onClick: (0, E.default)(a = o._jumpToMembership).call(a, o, !0)
                                    }, void 0, s || (s = (0, g.default)("i", {
                                        className: "entypo-vcard"
                                    })), (0, g.default)("span", {}, void 0, n("Membership|Paid Subscription Membership")), u || (u = (0, g.default)("i", {
                                        className: "entypo-right-open-big"
                                    }))))),
                                    M = (0, N.default)(L).call(L, (function(e, t) {
                                        var a = o.getComponentProps(e, y);
                                        return "text1" === e && o.hasExtraSpace(a) ? (0, g.default)("div", {
                                            className: "s-pricing-sub-item s-item-subtitle"
                                        }, void 0, S.default.createElement(F.default, (0, f.default)({
                                            key: "sub-".concat(t)
                                        }, a, {
                                            sizeType: "itemSubTitle"
                                        }))) : "text2" === e && o.hasExtraSpace(a) ? (0, g.default)("div", {
                                            className: "s-pricing-sub-item s-item-text"
                                        }, void 0, S.default.createElement(F.default, (0, f.default)({
                                            key: "sub-".concat(t)
                                        }, a, {
                                            sizeType: "body"
                                        }))) : "title1" === e && o.hasExtraSpace(a) ? (0, g.default)("div", {
                                            className: "s-pricing-sub-item s-item-title ".concat(v.title1BgColor(w))
                                        }, void 0, S.default.createElement(F.default, (0, f.default)({
                                            key: "sub-".concat(t),
                                            textType: "heading",
                                            sizeType: "itemTitle",
                                            emptyMessage: n("Editor|Add title.")
                                        }, a, {
                                            className: v.title1Color
                                        }))) : "image1" === e && o.hasExtraSpace(o.getReduxComponentProps(e, y)) ? (0, g.default)("div", {
                                            className: "s-pricing-sub-item s-item-image"
                                        }, void 0, S.default.createElement(R.default, (0, f.default)({
                                            size: "480x960>",
                                            moreIcons: !0
                                        }, o.getReduxComponentProps(e, y)))) : "button" === e && o.hasExtraSpace(a) ? (0, g.default)("div", {
                                            className: "s-pricing-sub-item s-pricing-item-btn"
                                        }, void 0, S.default.createElement(U.default, (0, f.default)({}, o.getComponentProps("background1", y), a, {
                                            className: v.buttonBgColor(w),
                                            buttonExtraColumn: P,
                                            extraButtons: O,
                                            onRef: o.onButtonRef
                                        }), e)) : void 0
                                    }));
                                return S.default.createElement(j.default, (0, f.default)({
                                    className: (0, _.default)(d = (0, _.default)(m = (0, _.default)(p = "".concat(v.showBorder(w), " s-pricing-item ")).call(p, l, " ")).call(m, v.isHighlighted(w), " ")).call(d, v.hasHighlightItem),
                                    index: t
                                }, o._getRepeatableItemProps(i, t), {
                                    forbiddenRemove: h,
                                    binding: b
                                }), !1, (0, g.default)("div", {
                                    className: "inner-container ".concat(v.bgColor(w))
                                }, void 0, w && (0, g.default)("div", {
                                    className: "s-item-highlight-badge ".concat(v.highlightedBgColor, " s-subtitle")
                                }, void 0, S.default.createElement(F.default, (0, f.default)({
                                    sizeType: "subTitle",
                                    emptyMessage: n("Editor|Add title.")
                                }, o.getComponentProps("text3")))), M))
                            })).toArray(),
                            b = this.getComponentProps("repeatable1"),
                            C = (0, g.default)("div", {
                                className: "s-repeatable-add-button s-small-black-button membership-btn",
                                onClick: (0, E.default)(a = this._jumpToMembership).call(a, this, !1)
                            }, void 0, d || (d = (0, g.default)("i", {
                                className: "entypo-cog"
                            })), " ", n("Membership"));
                        return S.default.createElement(K.default, (0, f.default)({
                            className: "s-pricing-wrapper"
                        }, b, {
                            canAddItems: p,
                            extraButton: C
                        }), y)
                    },
                    render: function() {
                        var e, t, a = this._renderRepeatable("repeatable1"),
                            n = this.getBackgroundProps("background1"),
                            o = this._getRootClass(),
                            i = (0, _.default)(e = (0, _.default)(t = "s-section s-pricing-section ".concat(this._getPaddingClass(), " ")).call(t, o, " ")).call(e, n.className);
                        return S.default.createElement(ae.default, (0, f.default)({}, n, {
                            className: i
                        }), !1, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") && S.default.createElement(Q.default, this.getBackgroundProps("background1")), (0, g.default)("div", {
                            className: "container"
                        }, "layout-content", (0, g.default)(Y.default, {
                            canHide: !0,
                            section: this,
                            binding: this.getDefaultBinding()
                        }), a))
                    }
                };
            t.default = fe, e.exports = t.default
        },
        126711: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l, r = a(205872),
                s = (0, i.default)(r),
                u = a(812077),
                d = (0, i.default)(u),
                c = a(2991),
                f = (0, i.default)(c),
                m = a(366757),
                g = (0, i.default)(m),
                p = a(234584),
                h = (0, i.default)(p),
                v = a(186613),
                y = (0, i.default)(v),
                b = a(149008),
                _ = (0, i.default)(b),
                C = a(288757),
                N = (0, i.default)(C),
                w = a(792695),
                x = {
                    mixins: [(0, i.default)(w).default],
                    displayName: "ProcessSection",
                    componentWillMount: function() {
                        a(766463).removeOldBackgroundForText(this);
                        var e = h.default.getThemeName(),
                            t = a(418972),
                            n = this._getLayoutVariation();
                        this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e, n))
                    },
                    _getLayoutOptions: function() {
                        var e = h.default.getThemeName();
                        return a(418972).getLayoutOptions(e)
                    },
                    _shouldRenderItemLinker: function(e, t) {
                        return e !== t
                    },
                    _renderItemLinker: function() {
                        return l || (l = (0, d.default)("div", {
                            className: "process-item-linker"
                        }))
                    },
                    _renderRepeatable: function(e) {
                        var t, n, o = this,
                            i = a(418972),
                            l = h.default.getThemeName(),
                            r = this._getLayoutVariation(),
                            u = this.getComponentBinding(e),
                            c = this.getRepeatableBinding(e);
                        "function" == typeof i.getLayout(l, r) && (n = i.getLayout(l, r)(c));
                        var m = "function" == typeof i.getItemSize ? i.getItemSize(c) : void 0,
                            p = this.getComponentProps("repeatable1");
                        return g.default.createElement(y.default, (0, s.default)({
                            className: "s-mh".concat("editor" === u.get("_state") ? " s-arranging" : "")
                        }, p), (0, f.default)(t = u.get("list")).call(t, (function(e, t) {
                            var a = c.sub(t),
                                i = n.itemClass;
                            return g.default.createElement(_.default, (0, s.default)({
                                className: i,
                                binding: {
                                    default: a,
                                    listBinding: c
                                },
                                index: t
                            }, o._getRepeatableItemProps(c, t)), (0, d.default)("div", {
                                className: "process-item-wrapper"
                            }, void 0, (0, d.default)("div", {
                                className: "process-item-infos"
                            }, void 0, (0, d.default)("div", {
                                className: "process-item-index s-font-body"
                            }, void 0, t + 1), o._shouldRenderItemLinker(t + 1, m) ? o._renderItemLinker() : null), (0, d.default)(N.default, {
                                section: o,
                                itemBinding: a,
                                binding: a,
                                showItemSubtitle: !1,
                                upperChildrenPosition: !0
                            })))
                        })).toArray())
                    },
                    render: function() {
                        return n("Editor|Process"), n("Editor|A numbered list of steps. Explain how your service works!"), n("Sections|Process"), n("Sections|A numbered list of steps. Explain how your service works!"), n("Sections|Purchase"), n("Sections|Pick your favorites from our high-quality collections, and add to your cart."), n("Sections|Online Pay"), n("Sections|Enter your address and pay with credit, debit, or PayPal. We ship anywhere."), n("Sections|Deliver"), n("Sections|We'll deliver your goods within 5 business days. Ask us any questions!"), this.getTemplate().apply(this)
                    }
                };
            t.default = x, e.exports = t.default
        },
        589770: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(686902),
                i = a(14310),
                l = a(620116),
                r = a(834074),
                s = a(778914),
                u = a(239649),
                d = a(820368),
                c = a(663978),
                f = a(60530)(a(60530));
            c(t, "__esModule", {
                value: !0
            });
            var m, g = a(487672),
                p = (0, f.default)(g),
                h = a(205872),
                v = (0, f.default)(h),
                y = a(812077),
                b = (0, f.default)(y);
            a(974916), a(323123), a(804723), a(115306), a(569600);
            var _ = a(51942),
                C = (0, f.default)(_),
                N = a(678580),
                w = (0, f.default)(N),
                x = a(778914),
                k = (0, f.default)(x),
                E = a(25843),
                L = ((0, f.default)(E), a(620116)),
                S = ((0, f.default)(L), a(2991)),
                B = ((0, f.default)(S), a(432366)),
                T = ((0, f.default)(B), a(977766)),
                P = ((0, f.default)(T), a(366757)),
                I = (0, f.default)(P),
                O = a(45697),
                M = (0, f.default)(O),
                D = a(143393),
                R = (0, f.default)(D),
                A = (a(973935), a(223336)),
                U = ((0, f.default)(A), a(914578)),
                H = ((0, f.default)(U), a(399069)),
                F = (0, f.default)(H),
                V = a(285072),
                Z = (0, f.default)(V),
                z = a(183123),
                K = (0, f.default)(z),
                W = a(381947),
                j = (0, f.default)(W),
                G = a(79752),
                Y = ((0, f.default)(G), a(666514)),
                q = (0, f.default)(Y),
                J = a(731246),
                Q = (0, f.default)(J),
                $ = a(802089),
                X = (0, f.default)($),
                ee = a(692381),
                te = (0, f.default)(ee),
                ae = a(916784),
                ne = (0, f.default)(ae),
                oe = a(479377),
                ie = (0, f.default)(oe),
                le = a(884920),
                re = (a(381633), a(178498)),
                se = a(922034);

            function ue(e, t) {
                var a = o(e);
                if (i) {
                    var n = i(e);
                    t && (n = l(n).call(n, (function(t) {
                        return r(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }(0, f.default)(se);
            var de = {
                    "Blog.Text": "RichText",
                    "Blog.Title": "RichText",
                    "Blog.Image": "Image",
                    "Blog.Video": "Video",
                    "Blog.Button": "Button",
                    "Blog.Separator": "Separator"
                },
                ce = {
                    "gallery-vertical": "VerticalGallery"
                },
                fe = {
                    displayName: "BlockComponentItem",
                    mixins: [Z.default],
                    bobcatPropTypes: {
                        data: {
                            binding: M.default.object
                        },
                        designer: {
                            isBlog: M.default.bool,
                            themeFeature: M.default.object,
                            empty: M.default.bool,
                            index: M.default.number,
                            columnsNum: M.default.number,
                            needToShowInsertBar: M.default.bool,
                            initialOpen: M.default.bool,
                            insertBarHeight: M.default.string,
                            _isNewItem: M.default.string,
                            isLastItem: M.default.bool,
                            isFirstItem: M.default.bool,
                            isHiddenSection: M.default.bool
                        },
                        callbacks: {
                            insertItem: M.default.func,
                            deleteItem: M.default.func,
                            updateInsertBarHeight: M.default.func
                        }
                    },
                    observedProps: ["needToShowInsertBar", "columnsNum", "insertBarHeight", "shouldAutoFocus", "shouldAutoFocusType"],
                    componentWillMount: function() {
                        this.setState({
                            isHoverThis: !1,
                            isHoverEditColumns: !1,
                            isHoverInsertBar: !1,
                            isEditingColumn: !1,
                            isEditingChild: !1,
                            shouldShowMoveOverlay: !1,
                            shouldShowDeleteOverlay: !1
                        })
                    },
                    handleSaveServicesData: function(e) {
                        var t = this.getDefaultBinding().sub(["components", "email1"]),
                            a = t && t.toJS(),
                            n = (0, C.default)({}, a, {
                                connectedFormServices: e
                            });
                        t.set(R.default.fromJS(n)), this.savePage()
                    },
                    handleSaveCustomForm: function(e) {
                        var t = e || {},
                            a = t.customForm,
                            n = t.customSetting || {},
                            o = n.formNameLabel,
                            i = n.openInNewTab,
                            l = n.redirectLink,
                            r = n.enableSpamVerification,
                            s = n.submitLabel,
                            u = n.thanksMessage,
                            d = n.recipient,
                            c = this.getDefaultBinding().sub(["components", "email1"]),
                            f = c && c.toJS(),
                            m = (0, C.default)({}, f, {
                                recipient: d,
                                customForm: a,
                                openInNewTab: i,
                                redirectLink: l,
                                enableSpamVerification: r,
                                thanksMessage: u,
                                submit_label: s,
                                form_name_label: o
                            });
                        c.set(R.default.fromJS(m)), this.savePage()
                    },
                    _getCustomFormProps: function(e) {
                        var t = e.sub("email1"),
                            a = this.getDefaultBinding().get("id");
                        if (!t.get("customForm") || !t.get("customForm").size) {
                            var o = (0, re.getCustomFormSectionDefaultFormSchema)();
                            t.sub("customForm").set(o), t.sub("form_name_label").set(n("Editor|Custom Form"))
                        }
                        var i = t && t.toJS(),
                            l = i.recipient,
                            r = i.customForm,
                            s = i.openInNewTab,
                            u = i.redirectLink,
                            d = i.enableSpamVerification,
                            c = i.submit_label,
                            f = i.thanksMessage,
                            m = i.form_name_label;
                        return {
                            recipient: l,
                            formSchema: r,
                            formSetting: {
                                recipient: l,
                                openInNewTab: s,
                                redirectLink: u,
                                enableSpamVerification: d,
                                thanksMessage: f,
                                connectedFormServices: i.connectedFormServices,
                                submitLabel: c,
                                formNameLabel: m
                            },
                            sectionId: a,
                            onSaveForm: this.handleSaveCustomForm,
                            onSaveFormServicesData: this.handleSaveServicesData
                        }
                    },
                    _renderSingleComponent: function(e) {
                        var t = e.get("type"),
                            a = de[t] || t;
                        switch (this.props.eagerLoad, a) {
                            case "Separator":
                            case "Blog.Separator":
                                return m || (m = (0, b.default)(Q.default, {}));
                            case "Blog.Quote":
                                return I.default.createElement(X.default, F.default.get("RichText").buildBobcatProps(e))
                        }
                        var n = e.get("name"),
                            o = ce[n] || a,
                            i = F.default.get(o),
                            l = i.buildBobcatProps ? i.buildBobcatProps(e) : {};
                        if (this.props.isBlog && "RichText" === a) {
                            switch (t) {
                                case "Blog.Text":
                                    l.textType = "body";
                                    break;
                                case "Blog.Title":
                                    l.textType = "heading"
                            }
                            l.shouldAutoFocus = this.props.shouldFocusPosition === this.props.index, l.checkParagraph = this._checkParagraph, l.mergeTextBoxesCallback = this.props.mergeTextBoxesCallback
                        }
                        switch (t) {
                            case "Blog.Video":
                            case "Video":
                                l.needToAdjustHeight = !0;
                                break;
                            case "Image":
                                l.assetType = "background";
                                break;
                            case "Gallery":
                                var r = n.split("-");
                                l.layout = r[1]
                        }
                        return this.getDefaultBinding().get("_isNewItem") && (l.initialEditState = "editor", this.getDefaultBinding().set("_isNewItem", !1)), l.isBlogMiniProgram = K.default.getIsBlogMiniProgram(), I.default.createElement(i, (0, v.default)({}, l, (0, le.getReduxComponentProps)(e), {
                            type: a,
                            eagerLoad: !0,
                            ref: "itemDOM"
                        }))
                    },
                    _renderItemByTemplate: function() {
                        var e = this.getDefaultBinding().get("name"),
                            t = null,
                            a = this.props,
                            n = a.nestDepth,
                            o = a.eagerLoad,
                            i = a.layout,
                            l = a.layoutConfig,
                            f = a.templateVersion,
                            m = this.setEditingChild,
                            g = this.unsetEditingChild,
                            h = this.getDefaultBinding().sub("components"),
                            v = this.getDefaultBinding().get("id"),
                            y = "customForm" === e ? this._getCustomFormProps(h) : {};
                        return ie.default[e] && (t = ie.default[e](h, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a, n = null != arguments[t] ? arguments[t] : {};
                                if (t % 2) s(a = ue(Object(n), !0)).call(a, (function(t) {
                                    (0, p.default)(e, t, n[t])
                                }));
                                else if (u) d(e, u(n));
                                else {
                                    var o;
                                    s(o = ue(Object(n))).call(o, (function(t) {
                                        c(e, t, r(n, t))
                                    }))
                                }
                            }
                            return e
                        }({
                            nestDepth: n,
                            setEditingChild: m,
                            unsetEditingChild: g,
                            eagerLoad: o,
                            layout: i,
                            templateId: v,
                            layoutConfig: l,
                            templateVersion: f
                        }, y), !1, this.getDefaultBinding())), t
                    },
                    _renderContent: function() {
                        var e = this.props.connectDragPreview,
                            t = this.getDefaultBinding(),
                            a = t.get("type");
                        if (!t.get("name") && !a) return null;
                        var n = "BlockComponentItem" === a ? this._renderItemByTemplate() : this._renderSingleComponent(this.getDefaultBinding());
                        return e ? e((0, b.default)("div", {}, void 0, n)) : n
                    },
                    getIsShowProSectionNotice: function() {
                        var e = this.getDefaultBinding(),
                            t = e.get("name"),
                            a = e.get("type"),
                            n = K.default.getS6ProSectionLists();
                        return ((0, w.default)(n).call(n, t) || (0, w.default)(n).call(n, a)) && !j.default.canUse("premium_sections")
                    },
                    _renderNormalItem: function() {
                        var e = this.state,
                            t = (e.shouldShowDeleteOverlay, e.shouldShowMoveOverlay, "");
                        if (!this.props.empty) {
                            var a = this.getDefaultBinding().get("type"),
                                n = this.getDefaultBinding().get("name") || "";
                            if (!this.props.isColumnBlock && !this.props.isRowBlock && (t = q.default.getBlockItemClassName(n, this.props.columnsNum), this.props.themeFeature)) {
                                var o = q.default.getClassByThemeFeature(this.props.themeFeature, n || a);
                                o && (t = o)
                            }
                        }
                        return (0, b.default)(te.default, {}, void 0, (0, b.default)(ne.default, {}, void 0, (0, b.default)("div", {
                            className: "s-block-item-inner clearfix",
                            style: {
                                position: "relative"
                            },
                            onMouseEnter: this.setHoverState,
                            onMouseLeave: this.unsetHoverState
                        }, void 0, this.props.empty ? null : (0, b.default)("div", {
                            className: t
                        }, void 0, !1, this.isEditMode() ? this._renderOutline() : null, this.isEditMode() ? this._renderOverlayController() : null, this.isEditMode() && this.props.canDrag ? this._renderControlButtonsController() : null, this._renderContent()))))
                    },
                    _getBlockClass: function() {
                        var e = this,
                            t = "",
                            a = [
                                ["components", "block1", "inlineLayout"],
                                ["name"],
                                ["type"]
                            ];
                        (0, k.default)(a).call(a, (function(a) {
                            var n = e.getDefaultBinding().get(a);
                            n && (t += "s-block-".concat(n.toLowerCase(), " "))
                        }));
                        var n = this.getDefaultBinding().get(["name"]);
                        return t += {
                            customForm: "s-custom-form-container"
                        }[n] || ""
                    },
                    render: function() {
                        return (0, b.default)("div", {
                            className: "s-element-content"
                        }, void 0, (0, b.default)("div", {
                            className: "s-component s-block ".concat(this._getBlockClass())
                        }, void 0, " ", this._renderNormalItem()))
                    }
                };
            t.default = F.default.createPageComponent(fe), e.exports = t.default
        },
        14523: function(e, t, a) {
            "use strict";
            var n = a(501068),
                o = a(686902),
                i = a(14310),
                l = a(620116),
                r = a(834074),
                s = a(778914),
                u = a(239649),
                d = a(820368),
                c = a(663978),
                f = a(60530)(a(60530));
            c(t, "__esModule", {
                value: !0
            });
            var m = a(205872),
                g = (0, f.default)(m),
                p = a(359036),
                h = ((0, f.default)(p), a(812077)),
                v = (0, f.default)(h),
                y = a(487672),
                b = (0, f.default)(y),
                _ = a(726394),
                C = (0, f.default)(_),
                N = a(569198),
                w = (0, f.default)(N),
                x = a(351379),
                k = (0, f.default)(x),
                E = a(900214),
                L = (0, f.default)(E),
                S = a(566380),
                B = (0, f.default)(S);
            a(974916), a(323123), a(569600);
            var T = a(977766),
                P = (0, f.default)(T),
                I = a(666419),
                O = (0, f.default)(I),
                M = a(620116),
                D = (0, f.default)(M),
                R = a(492762),
                A = (0, f.default)(R),
                U = a(2991),
                H = (0, f.default)(U),
                F = a(394198),
                V = (0, f.default)(F),
                Z = a(432366),
                z = (0, f.default)(Z),
                K = a(778914),
                W = (0, f.default)(K),
                j = a(277149),
                G = ((0, f.default)(j), a(703649)),
                Y = ((0, f.default)(G), a(366757)),
                q = (0, f.default)(Y),
                J = a(45697),
                Q = (0, f.default)(J),
                $ = a(973935),
                X = a(223336),
                ee = (0, f.default)(X),
                te = a(914578),
                ae = (0, f.default)(te),
                ne = a(294184),
                oe = (0, f.default)(ne),
                ie = a(399069),
                le = (0, f.default)(ie),
                re = a(230139),
                se = (0, f.default)(re),
                ue = a(43138),
                de = ((0, f.default)(ue), a(79752)),
                ce = (0, f.default)(de),
                fe = a(468811),
                me = ((0, f.default)(fe), a(818166)),
                ge = (0, f.default)(me),
                pe = a(143393),
                he = ((0, f.default)(pe), a(589770)),
                ve = (0, f.default)(he);

            function ye(e, t) {
                var a = o(e);
                if (i) {
                    var n = i(e);
                    t && (n = l(n).call(n, (function(t) {
                        return r(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a, n = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) s(a = ye(Object(n), !0)).call(a, (function(t) {
                        (0, b.default)(e, t, n[t])
                    }));
                    else if (u) d(e, u(n));
                    else {
                        var o;
                        s(o = ye(Object(n))).call(o, (function(t) {
                            c(e, t, r(n, t))
                        }))
                    }
                }
                return e
            }
            var _e = function(e) {
                    (0, k.default)(i, e);
                    var t, a, o = (t = i, a = function() {
                        if ("undefined" == typeof Reflect || !n) return !1;
                        if (n.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(n(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, o = (0, B.default)(t);
                        if (a) {
                            var i = (0, B.default)(this).constructor;
                            e = n(o, arguments, i)
                        } else e = o.apply(this, arguments);
                        return (0, L.default)(this, e)
                    });

                    function i() {
                        return (0, C.default)(this, i), o.apply(this, arguments)
                    }
                    return (0, w.default)(i, [{
                        key: "render",
                        value: function() {
                            var e = this.props.children;
                            return q.default.createElement("div", this.props, e)
                        }
                    }]), i
                }(q.default.Component),
                Ce = _e,
                Ne = _e,
                we = ["components", "block1", "items"],
                xe = {
                    displayName: "ShadowKnight",
                    mixins: [(0, se.default)("editor")],
                    bobcatPropTypes: {
                        data: {
                            items: Q.default.oneOfType([Q.default.array, Q.default.object]),
                            binding: Q.default.object.isRequired
                        },
                        designer: {
                            isBlog: Q.default.bool,
                            themeFeature: Q.default.object,
                            nestDepth: Q.default.number
                        }
                    },
                    getBobcatDefaultProps: function() {
                        return {
                            designer: {
                                nestDepth: 1
                            }
                        }
                    },
                    componentWillMount: function() {
                        this.state = {
                            currentDOMNode: null,
                            isResizing: !1,
                            showResizeWrapper: !1
                        }
                    },
                    componentDidMount: function() {
                        this.setState({
                            currentDOMNode: (0, $.findDOMNode)(this).closest(".container")
                        })
                    },
                    _getItemsPath: function(e) {
                        var t;
                        return (0, P.default)(t = [e]).call(t, we)
                    },
                    _getRemovePosition: function(e, t) {
                        var a = e.position,
                            n = t.position,
                            o = t.type,
                            i = t.index,
                            l = {
                                row: 1,
                                column: 2,
                                element: 3
                            }[o],
                            r = (0, O.default)({
                                length: l
                            }, (function(e, t) {
                                return t
                            }));
                        n[l] = n[l] + i;
                        var s = (0, D.default)(r).call(r, (function(e, t) {
                                return n[t] === a[t]
                            })).length === l,
                            u = n[l] <= a[l];
                        return s && u && a[l]++, a
                    },
                    _resetLayout: function(e, t, a) {
                        var n, o, i = ge.default.getCurrentPageBinding().sub((0, P.default)(n = ["sections", e]).call(n, we)),
                            l = i.get((0, P.default)(o = [t]).call(o, we)),
                            r = i.get([t, "components", "block1", "inlineLayout"]),
                            s = r && r.split("-"),
                            u = l && l.size;
                        if (u != s.length && u) {
                            if (u < s.length) {
                                var d = s[a];
                                (0, A.default)(s).call(s, a, 1), (s = (0, H.default)(s).call(s, (function(e) {
                                    return (0, V.default)(e) + Math.floor(d / u)
                                })))[0] += d % u
                            }
                            u > s.length && function() {
                                for (var e = Math.floor(12 / u); e > 0;) s = (0, H.default)(s).call(s, (function(t) {
                                    var a = (0, V.default)(t);
                                    return a > 2 ? (e--, a - 1) : a
                                }));
                                s.push(Math.floor(12 / u))
                            }(), 12 === (0, z.default)(s).call(s, (function(e, t) {
                                return e + t
                            })) && i.set([t, "components", "block1", "inlineLayout"], s.join("-"))
                        }
                    },
                    _dropRow: function(e, t) {
                        var a = t.position,
                            n = t.index,
                            o = ge.default.getCurrentPageBinding().sub(["sections", a[0], "components", "block1"]),
                            i = o.get("items"),
                            l = ce.default.addSectionRow(e),
                            r = i.insert(a[1] + n, l);
                        return o.set("items", r), !0
                    },
                    _dropColumn: function(e, t) {
                        var a = t.position,
                            n = t.index,
                            o = ge.default.getCurrentPageBinding().sub(["sections", a[0], "components", "block1"]).sub(["items", a[1], "components", "block1"]),
                            i = o.get("items"),
                            l = ce.default.addSectionColumn(e),
                            r = i.insert(a[2] + n, l);
                        return o.set("items", r), this._resetLayout(a[0], a[1], a[2]), !0
                    },
                    _deleteElement: function(e) {
                        var t, a, n = this.getDefaultBinding().sub(["items"]),
                            o = n.sub((0, P.default)(t = [e[1]]).call(t, we)),
                            i = o.sub((0, P.default)(a = [e[2]]).call(a, we));
                        i.delete(e[3]), 0 !== i.get().size || 1 === n.get().size && 1 === o.get().size || (o.delete(e[2]), this._resetLayout(e[0], e[1], e[2]), 0 === o.get().size && n.delete(e[1])), this.savePage()
                    },
                    _dropElement: function(e, t) {
                        var a, n = t.position,
                            o = t.index,
                            i = ge.default.getCurrentPageBinding().sub(["sections", n[0], "components", "block1"]).sub((0, P.default)(a = ["items", n[1]]).call(a, we, [n[2], "components", "block1"])),
                            l = i.get("items").insert(n[3] + o, e);
                        return i.set("items", l), !0
                    },
                    _drop: function(e, t) {},
                    _setInsertMarkerStyle: function(e) {
                        var t = this.state.currentDOMNode.querySelector(".s-insert-marker");
                        if (e) {
                            var a = e.type,
                                n = e.index,
                                o = e.position,
                                i = e.dom;
                            if (a && i) {
                                var l = "3px",
                                    r = this.state.currentDOMNode.querySelectorAll(".s-row")[o[1]],
                                    s = i.getBoundingClientRect(),
                                    u = (s.top, s.bottom, s.left, s.right, {
                                        column: function() {
                                            var e = 4 === o.length,
                                                t = "s-row" === i.className,
                                                a = i;
                                            if (e && (a = i.closest(".s-col")), t) {
                                                var s = i.querySelectorAll(".s-col");
                                                a = 1 === n ? s[s.length - 1] : s[0]
                                            }
                                            return {
                                                left: "".concat(n <= 0 ? a.offsetLeft : a.offsetLeft + a.offsetWidth, "px"),
                                                width: l,
                                                height: "".concat(r.offsetHeight, "px"),
                                                top: "".concat(r.offsetTop, "px")
                                            }
                                        },
                                        row: function() {
                                            return {
                                                left: 0,
                                                width: "".concat(r.offsetWidth, "px"),
                                                height: l,
                                                top: "".concat(n <= 0 ? r.offsetTop : r.offsetTop + r.offsetHeight, "px")
                                            }
                                        },
                                        element: function() {
                                            var e = i.closest(".s-col");
                                            return {
                                                left: "".concat(e.offsetLeft, "px"),
                                                height: l,
                                                width: "".concat(e.offsetWidth, "px"),
                                                top: "".concat(n <= 0 ? r.offsetTop + i.offsetTop : r.offsetTop + i.offsetTop + (i.fallbackHeight || i.offsetHeight), "px")
                                            }
                                        }
                                    });
                                if (u[a]) {
                                    var d = be(be({}, u[a]()), {}, {
                                            opacity: 1
                                        }),
                                        c = "";
                                    (0, W.default)(ae.default).call(ae.default, d, (function(e, t) {
                                        var a;
                                        c += (0, P.default)(a = "".concat(t, ": ")).call(a, d[t], "; ")
                                    })), (0, ee.default)(".s-insert-marker").not(t).css("opacity", 0), t.style = c
                                }
                            }
                        } else t.style.opacity = 0
                    },
                    _hover: function(e) {},
                    _unhover: function() {},
                    _beginDrag: function() {
                        (0, ee.default)(".s-add-wrapper").css("display", "none")
                    },
                    _endDrag: function() {
                        (0, ee.default)(".s-add-wrapper").css("display", "block"), this._hideOverlay()
                    },
                    _showOverlay: function() {
                        (0, ee.default)(".s-element-overlay").css("opacity", 1)
                    },
                    _hideOverlay: function() {
                        (0, ee.default)(".s-element-overlay").css("opacity", 0)
                    },
                    _showResizeWrapper: function() {
                        this.props.isDragMode
                    },
                    _hideResizeWrapper: function() {
                        this.state.isResizing || this.setState({
                            showResizeWrapper: !1
                        })
                    },
                    _addComponent: function(e, t) {},
                    _startResize: function() {},
                    _stopResize: function() {},
                    _resizeColumn: function(e, t, a) {},
                    _renderColumnItem: function(e, t, a) {
                        var n, o = this,
                            i = e.getIn(we);
                        if (!i || i.size <= 0) return this._renderEmptyElement(t, a);
                        var l = this.getDefaultBinding().sub((0, P.default)(n = ["items", t]).call(n, we, [a], we));
                        return (0, H.default)(i).call(i, (function(e, n) {
                            var i = l.get([n, "type"]) && l.get([n, "type"]).toLowerCase();
                            return (0, v.default)(Ce, {
                                id: l.get([n, "id"]),
                                hover: o._hover,
                                drop: o._drop,
                                className: "s-element-".concat(i),
                                position: [o.props.sectionIndex, t, a, n]
                            }, void 0, o._renderElementItem(e, t, a, n))
                        }))
                    },
                    _renderInsertBar: function(e, t) {},
                    _renderEmptyElement: function(e, t) {
                        var a = this.props;
                        return a.isDragMode, a.sectionIndex, (0, v.default)("div", {
                            className: "s-element s-element-empty"
                        }, void 0, !1)
                    },
                    _renderElementItem: function(e, t, a, n) {
                        var o, i, l, r = this.props,
                            s = (r.isDragMode, r.sectionIndex),
                            u = r.layoutConfig,
                            d = !1,
                            c = this.getDefaultBinding().get((0, P.default)(o = ["items", t]).call(o, we)),
                            f = c.getIn((0, P.default)(i = [a]).call(i, we)),
                            m = {
                                binding: this.getDefaultBinding().sub((0, P.default)(l = ["items", t]).call(l, we, [a], we, [n])),
                                themeFeature: this.props.themeFeature,
                                isBlog: !1,
                                isRowBlock: !1,
                                isColumnBlock: !0
                            },
                            p = [s, t, a, n];
                        return (0, v.default)(Ne, {
                            id: e.get("id"),
                            position: p,
                            drop: this._drop,
                            beginDrag: this._beginDrag,
                            endDrag: this._endDrag,
                            className: "s-element",
                            canDrag: d,
                            columnsSize: c.size,
                            elementsSize: f.size
                        }, void 0, d, q.default.createElement(ve.default, (0, g.default)({}, m, {
                            eagerLoad: !0,
                            canDrag: d,
                            position: p,
                            layoutConfig: u,
                            layout: this.props.layout,
                            deleteHandle: this._deleteElement,
                            type: e.get("type"),
                            mouseDownHandle: this._showOverlay,
                            mouseUpHandle: this._hideOverlay,
                            templateVersion: "s6"
                        })), d)
                    },
                    _renderRowItem: function(e, t) {
                        var a, n = this,
                            o = e.getIn(we),
                            i = e.getIn(["components", "block1", "inlineLayout"]),
                            l = i && i.split("-") || [],
                            r = (this.state.currentDOMNode && this.state.currentDOMNode.getBoundingClientRect().width, o.size),
                            s = "";
                        5 === r ? s += "five-fixed col-5" : 6 === r && (s += "six-fixed col-6");
                        var u = this.getDefaultBinding().get((0, P.default)(a = ["items", t]).call(a, we));
                        return this.state.showResizeWrapper, this.props.isDragMode, (0, H.default)(o).call(o, (function(e, a) {
                            var o, i = !1;
                            return (l[a - 1] && l[a - 1] <= 3 && l[a] <= 3 || l[a + 1] && l[a + 1] <= 3 && l[a] <= 3) && (i = !0), (0, v.default)(Ce, {
                                id: u.getIn([a, "id"]),
                                position: [n.props.sectionIndex, t, a],
                                className: (0, oe.default)("s-col ".concat(s), (o = {}, (0, b.default)(o, "col-".concat(l[a]), !s), (0, b.default)(o, "half-fixed", i), o)),
                                hover: n._hover,
                                drop: n._drop
                            }, void 0, (0, v.default)("div", {
                                className: "col-list col-align-".concat(e.getIn(["components", "block1", "inlineLayout"]))
                            }, void 0, n._renderColumnItem(e, t, a)), !1)
                        }))
                    },
                    render: function() {
                        var e = this,
                            t = this.props,
                            a = t.items,
                            n = t.sectionIndex,
                            o = (t.componentClass, (0, H.default)(a).call(a, (function(t, a) {
                                return (0, v.default)(Ce, {
                                    id: e.getDefaultBinding().get(["items", a, "id"]),
                                    drop: e._drop,
                                    hover: e._hover,
                                    unhover: e._unhover,
                                    className: "s-row",
                                    position: [n, a]
                                }, void 0, (0, v.default)("div", {
                                    className: "s-row-content"
                                }, void 0, e._renderRowItem(t, a)))
                            })));
                        return (0, v.default)("div", {}, void 0, o)
                    }
                };
            t.default = le.default.createPageComponent(xe), e.exports = t.default
        },
        100570: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(205872),
                l = (0, o.default)(i),
                r = a(812077),
                s = (0, o.default)(r);
            a(974916), a(323123);
            var u = a(981643),
                d = (0, o.default)(u),
                c = a(678580),
                f = (0, o.default)(c),
                m = a(977766),
                g = (0, o.default)(m),
                p = a(366757),
                h = (0, o.default)(p),
                v = a(230139),
                y = (0, o.default)(v),
                b = a(234584),
                _ = (0, o.default)(b),
                C = a(843296),
                N = (0, o.default)(C),
                w = a(792695),
                x = (0, o.default)(w),
                k = a(436173),
                E = (0, o.default)(k),
                L = a(716505),
                S = (0, o.default)(L),
                B = a(14523),
                T = (0, o.default)(B),
                P = ["rows", "columns", "media", "icons"],
                I = ["featureListA", "featureListB", "featureListC", "featureListD"],
                O = {
                    mixins: [x.default, (0, y.default)("editor")],
                    displayName: "s6_common_section",
                    getWholeThemeFeature: function() {
                        var e = N.default.get(_.default.getTheme().get("name"));
                        return null != e ? e.features : void 0
                    },
                    _getLayoutOptions: function() {
                        return []
                    },
                    _getSectionType: function() {
                        var e, t, a, n = _.default.getThemeName(),
                            o = this._getLayoutVariation(),
                            i = this.getDefaultBinding().get("template_name");
                        if (-1 !== (0, d.default)(e = ["hero", "signup_form"]).call(e, i)) return o && -1 === (0, d.default)(o).call(o, "noImage") ? "s-hero-section" : "s-signup-section";
                        if ((0, f.default)(t = ["contact_form", "custom_form"]).call(t, i)) return "s-contact-section";
                        if (-1 !== (0, d.default)(a = ["columns", "rows", "text", "info"]).call(a, i)) {
                            var l = 0;
                            "perspective" === n && (l = 1);
                            var r = this._getLayoutVariation().split("-");
                            switch (r[l]) {
                                case "col":
                                    return "s-columns-section";
                                case "row":
                                    return "s-rows-section";
                                case "media":
                                    return "s-media-section ".concat(r[1]);
                                case "text":
                                    return "s-text-section";
                                case "box":
                                    return "s-info-section";
                                default:
                                    return "s-block-section"
                            }
                        } else if (-1 !== (0, d.default)(I).call(I, i)) {
                            var s = this._getLayoutProps().sectionLayoutConfig,
                                u = s && s.get("structure"),
                                c = s && s.get("layout");
                            return "s-feature-list-section list-layout-".concat(c, "grid" === u ? " s-columns-section" : " s-rows-section")
                        }
                        return "s-block-section"
                    },
                    _getSectionClass: function() {
                        var e = this.getDefaultBinding().get("template_name");
                        return "hero" === e ? "s-new-hero-section" : "icons" === e ? "s-icons-section" : "title" === e ? "s-new-title-section" : ""
                    },
                    _getComponentClass: function() {
                        var e = "";
                        return "persona" === _.default.getThemeName() && (e = "twelve offset-three"), e
                    },
                    _renderDragDoneButton: function() {
                        return null
                    },
                    render: function() {
                        var e, t, a, n, o = this.props,
                            i = (o.isDragMode, o.isDragSection, o.resetSection, o.onClickSectionDragMode, o.index),
                            r = this._getSectionClass(),
                            u = this._getSectionType(),
                            c = this._getPaddingClass(),
                            f = this._getComponentClass(),
                            m = this.getThemeFeature("disableBackgrounds"),
                            p = this.props.binding.get("template_name"),
                            v = -1 !== (0, d.default)(e = (0, g.default)(P).call(P, I)).call(e, p),
                            y = m ? {} : this.getBackgroundProps("background1", null, v),
                            b = (this.getComponentProps("background1"), this.getComponentProps("block1")),
                            _ = this.getComponentBinding("block1"),
                            C = this.getComponentBinding("slideSettings").get("hidden_section"),
                            N = _.sub("items").get().toArray(),
                            w = (_.get("inlineLayout"), this.getWholeThemeFeature());
                        return this.getComponentBinding("slideSettings").sub("layout_config"), (0, s.default)("div", {}, void 0, !1, h.default.createElement(S.default, (0, l.default)({}, y, {
                            className: (0, g.default)(t = (0, g.default)(a = (0, g.default)(n = "s-section s6-section ".concat(c, " ")).call(n, y && y.className, " ")).call(a, r, " ")).call(t, u)
                        }), !1, !this.getThemeFeature("disableBackgrounds") && this.hasBackgroundVideo("background1") && h.default.createElement(E.default, this.getBackgroundProps("background1")), (0, s.default)("div", {
                            className: "container"
                        }, void 0, h.default.createElement(T.default, (0, l.default)({}, b, {
                            items: N,
                            binding: _,
                            themeFeature: w,
                            isHiddenSection: C,
                            isDragMode: !0,
                            sectionIndex: i,
                            componentClass: f
                        })))))
                    }
                };
            t.default = O, e.exports = t.default
        },
        845939: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(812077),
                r = (0, i.default)(l),
                s = a(205872),
                u = (0, i.default)(s),
                d = a(977766),
                c = (0, i.default)(d),
                f = a(366757),
                m = (0, i.default)(f),
                g = a(45697),
                p = (0, i.default)(g),
                h = a(399069),
                v = (0, i.default)(h),
                y = a(357646),
                b = (0, i.default)(y),
                _ = a(183123),
                C = ((0, i.default)(_), a(818166)),
                N = ((0, i.default)(C), a(234584)),
                w = (0, i.default)(N),
                x = a(681987),
                k = a(294184),
                E = (0, i.default)(k);
            t.default = v.default.create({
                displayName: "TitleGroup",
                mixins: [],
                propTypes: {
                    className: p.default.string,
                    section: p.default.object.isRequired,
                    parentBinding: p.default.object,
                    subtitleOnTop: p.default.bool,
                    canHide: p.default.bool,
                    titleSize: p.default.oneOf(["large", "normal"]),
                    titleTag: p.default.oneOf(["h2", "h3", "h4", "h5", "h6"]),
                    subtitleTag: p.default.string,
                    contentCheck: p.default.string,
                    binding: p.default.object.isRequired
                },
                getDefaultProps: function() {
                    return {
                        className: "",
                        subtitleOnTop: !1,
                        parentBinding: void 0,
                        titleSize: "normal",
                        titleTag: "h2",
                        subtitleTag: "h4",
                        canHide: !0
                    }
                },
                componentWillMount: function() {
                    this.showDeleteOverlay = !1, this.hideInEditor = !this.props.section.sbAnyHasContent("text1 text2", {
                        parentBinding: this.props.parentBinding,
                        showOnly: !1
                    })
                },
                componentWillUpdate: function(e) {
                    this.props.section.sbAnyHasContent("text1 text2", {
                        parentBinding: e.parentBinding,
                        showOnly: !1
                    }) && (this.hideInEditor = !1)
                },
                transformCombinedTitle: function() {},
                onMouseEnterDeleteButton: function() {},
                onMouseLeaveDeleteButton: function() {},
                onClickDeleteButton: function() {},
                onClickShowButton: function() {},
                shouldComponentUpdateOverride: function() {
                    return !1
                },
                render: function() {
                    var e, t, a = this.props.section,
                        o = this.props,
                        i = o.binding,
                        l = o.parentBinding,
                        s = "",
                        d = "beta-s6" === i.get("template_version"),
                        f = i.get("template_name"),
                        g = a.sbUniformTextAlignment("text1", {
                            parentBinding: l
                        }),
                        p = g ? "sb-title-".concat(g) : "",
                        h = (w.default.getTheme().toJS() || {}).name,
                        v = (0, x.getShowLine)(h, f),
                        y = (0, E.default)("s-title ".concat(p), {
                            "has-fresh-line": v
                        });
                    if (this.props.contentCheck && (a.sbHasContent(this.props.contentCheck, {
                            parentBinding: l,
                            showOnly: !1
                        }) || (s = "s-only-title-group")), !a) throw new Error("TitleGroup is expecting a section prop!");
                    if (a.sbHasContent("text1", {
                            parentBinding: l
                        })) {
                        var _, C, N = a.getComponentProps("text1", l);
                        C = "first" === this.props.section.props.indexType ? "h1" : this.props.titleTag, _ = "large" === this.props.titleSize && "h1" !== C ? "s-title-large" : "", t = (0, r.default)("div", {
                            className: y
                        }, "title", m.default.createElement(b.default, (0, u.default)({
                            slideSettingsBinding: a.getBinding().sub("components.slideSettings"),
                            tagName: C,
                            tagClassName: _,
                            textType: "title",
                            sizeType: "title",
                            emptyMessage: n("Editor|Add title.")
                        }, N)))
                    } else t = null;
                    if (d) {
                        var k = a.getComponentProps("text1", l);
                        return (0, r.default)("div", {
                            className: "s-title-group"
                        }, "s-title-group-item-title", (0, r.default)("div", {
                            className: "s-item-title "
                        }, void 0, m.default.createElement(b.default, (0, u.default)({
                            slideSettingsBinding: a.getBinding().sub("components.slideSettings"),
                            emptyMessage: n("Editor|Add title."),
                            tagName: "h3",
                            textType: "heading",
                            sizeType: "itemTitle"
                        }, k))))
                    }
                    var L, S = a.getComponentProps("text2", l);
                    return e = S ? (0, r.default)("div", {
                        className: "s-subtitle"
                    }, "subtitle", m.default.createElement(b.default, (0, u.default)({
                        tagName: this.props.subtitleTag,
                        textType: "heading",
                        sizeType: "subTitle",
                        emptyMessage: n("Editor|Add subtitle.")
                    }, S))) : null, a.sbAnyHasContent("text1 text2", {
                        parentBinding: l
                    }) ? (0, r.default)("div", {
                        className: (0, c.default)(L = "s-title-group ".concat(s, " ")).call(L, this.props.className)
                    }, "s-title-group", void 0, this.props.subtitleOnTop ? [e, t] : [t, e]) : null
                }
            }), e.exports = t.default
        },
        436173: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            }), a(974916), a(115306), a(556977), a(323123), a(804723);
            var i = a(694473),
                l = (0, o.default)(i),
                r = a(981643),
                s = (0, o.default)(r),
                u = a(678580),
                d = (0, o.default)(u),
                c = a(394198),
                f = (0, o.default)(c),
                m = a(933032),
                g = (0, o.default)(m),
                p = a(666419),
                h = (0, o.default)(p),
                v = a(931581),
                y = (0, o.default)(v),
                b = a(359340),
                _ = (0, o.default)(b),
                C = a(54103),
                N = (0, o.default)(C),
                w = a(778914),
                x = (0, o.default)(w),
                k = a(223336),
                E = (0, o.default)(k),
                L = a(914578),
                S = (0, o.default)(L),
                B = a(45697),
                T = (0, o.default)(B),
                P = a(973935),
                I = (0, o.default)(P),
                O = a(399069),
                M = (0, o.default)(O),
                D = a(43138),
                R = (0, o.default)(D),
                A = a(786483),
                U = (0, o.default)(A),
                H = a(868309),
                F = (0, o.default)(H),
                V = a(454613),
                Z = (0, o.default)(V),
                z = a(218022),
                K = (0, o.default)(z),
                W = M.default.createPageComponent({
                    displayName: "VideoBgContent",
                    bobcatPropTypes: {
                        data: {
                            videoHtml: T.default.string,
                            videoUrl: T.default.string,
                            className: T.default.string,
                            style: T.default.object
                        }
                    },
                    observedProps: ["videoHtml"],
                    getBobcatDefaultProps: function() {
                        return {
                            data: {
                                videoHtml: ""
                            }
                        }
                    },
                    _removeIframe: function() {
                        var e = (0, E.default)(I.default.findDOMNode(this));
                        return (0, l.default)(e).call(e, "iframe").remove()
                    },
                    _isSliderCloneComponent: function() {
                        var e, t = (0, E.default)(I.default.findDOMNode(this)),
                            a = (0, l.default)(e = t.closest(".slick-track")).call(e, ".slick-slide").length - 2,
                            n = t.closest(".slick-slide");
                        return a > 0 && ("-1" === n.attr("data-index") || n.attr("data-index") === "".concat(a))
                    },
                    componentDidMount: function() {
                        this._isSliderCloneComponent() ? this._removeIframe() : this._setupBgVideo()
                    },
                    componentDidUpdate: function(e) {
                        e.videoHtml === this.dtProps.videoHtml || this._isSliderCloneComponent() || this._setupBgVideo()
                    },
                    componentWillUnmount: function() {
                        var e = this;
                        this._isSliderCloneComponent() || this._video && null != this._video.frame && null != this._video.frame.youTubePlayer && ("function" == typeof this._video.frame.youTubePlayer.stopVideo && this._video.frame.youTubePlayer.stopVideo(), "function" == typeof this._video.frame.youTubePlayer.clearVideo && this._video.frame.youTubePlayer.clearVideo(), this._video.frame.isRemoved = !0, S.default.remove(window.youTubeVideoBgList, (function(t) {
                            return t === e._video.frame
                        })))
                    },
                    afterLayoutChange: function() {
                        return this._setupBgVideo()
                    },
                    _setupBgVideo: function() {
                        var e = this;
                        U.default.Event.unsubscribe(this._token), this._video || (this._video = {});
                        var t = (0, E.default)(I.default.findDOMNode(this));
                        if (t.length && !R.default.isMobile()) {
                            window.clearInterval(null != this._video.frame ? this._video.frame.loopTimer : void 0);
                            var a = function() {
                                switch (e._video.type) {
                                    case "youtube":
                                        var t, n = e._video.frame;
                                        if (window.youTubeVideoBgList || (window.youTubeVideoBgList = []), (0, d.default)(t = (0, h.default)(window.youTubeVideoBgList)).call(t, n) || window.youTubeVideoBgList.push(n), window.onYouTubeIframeAPIReady = function() {
                                                if (null != (null != window.YT ? window.YT.Player : void 0)) {
                                                    for (var e = 0, t = (0, h.default)(window.youTubeVideoBgList); e < t.length; e++) ! function(e) {
                                                        var t = new window.YT.Player(e.attr("id"), {
                                                            videoId: e.attr("id").split("_")[0],
                                                            height: e.attr("height"),
                                                            width: e.attr("width"),
                                                            events: {
                                                                onReady: function(t) {
                                                                    var a;
                                                                    return e.player = a = t.target, Z.default.get("enableSoundForVideoBg") || (a.setVolume(0), a.mute && a.mute()), a.setLoop(!0), e.duration = a.getDuration(), e.loopTimer = null, e.startLoop = function() {
                                                                        var e = this;
                                                                        return window.clearInterval(this.loopTimer), this.loopTimer = (0, y.default)((function() {
                                                                            return e.isRemoved ? window.clearInterval(e.loopTimer) : e.player.seekTo(0)
                                                                        }), 1e3 * (this.duration - 1))
                                                                    }, e.startLoop()
                                                                },
                                                                onStateChange: function(t) {
                                                                    try {
                                                                        var a;
                                                                        if (t.data === window.YT.PlayerState.PLAYING && (e.css("opacity", 1), e.closest(".video-bg-wrap").addClass("no-bg")), (0, d.default)(a = [window.YT.PlayerState.ENDED, window.YT.PlayerState.PAUSED]).call(a, t.data)) return t.target.playVideo(), e.startLoop()
                                                                    } catch (e) {}
                                                                }
                                                            }
                                                        });
                                                        e.youTubePlayer = t
                                                    }(n = t[e]);
                                                    return window.youTubeVideoBgList = []
                                                }
                                            }, null == window.YT) return (0, E.default)("body").append((0, E.default)("<script src='https://www.youtube.com/iframe_api'><\/script>"));
                                        break;
                                    case "vimeo":
                                        var o, i = {
                                                method: "setVolume",
                                                value: "0"
                                            },
                                            l = {
                                                method: "addEventListener",
                                                value: "pause"
                                            },
                                            r = {
                                                method: "play"
                                            },
                                            s = function(e) {
                                                e.css("opacity", 1);
                                                var t = e.attr("src").split("?")[0];
                                                t = "https:".concat(t.replace(/^https?:/, ""));
                                                try {
                                                    return e[0].contentWindow.postMessage((0, _.default)(r), t)
                                                } catch (e) {}
                                            };
                                        return (0, N.default)(o = (0, E.default)(window)).call(o, "message", (function(t) {
                                            var n;
                                            if (t.originalEvent.origin.match(/player\.vimeo\.com/)) switch (JSON.parse(t.originalEvent.data).event) {
                                                case "ready":
                                                    a = !Z.default.get("enableSoundForVideoBg"),
                                                        function(e) {
                                                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                                                a = e.attr("src").split("?")[0];
                                                            a = "https:".concat(a.replace(/^https?:/, ""));
                                                            try {
                                                                e[0].contentWindow.postMessage((0, _.default)(l), a), t && e[0].contentWindow.postMessage((0, _.default)(i), a)
                                                            } catch (e) {}
                                                        }(e._video.frame, a), s(e._video.frame), (0, x.default)(n = [1e3, 2e3, 5e3, 1e4]).call(n, (function(t) {
                                                            return (0, g.default)((function() {
                                                                return s(e._video.frame)
                                                            }), t)
                                                        }));
                                                    break;
                                                case "pause":
                                                    s(e._video.frame)
                                            }
                                        }))
                                }
                            };
                            if (function() {
                                    var a = e.dtProps.isFullScreen,
                                        n = (e.dtProps.videoHtml || "").replace("&origin=", "&origin=".concat(E.default.url().attr("base"))).replace(/^(https?):/, "");
                                    if (t.html(n), "" !== n) {
                                        var o = (0, l.default)(t).call(t, "iframe");
                                        if (o.length || (o = (0, l.default)(t).call(t, "video")), e._video.frame = o, e._video.type = -1 !== (0, s.default)(n).call(n, "youtube.com") ? "youtube" : (0, s.default)(n).call(n, "vimeo.com") ? "vimeo" : "mp4", o.length) {
                                            var i;
                                            "youtube" === e._video.type && o.addClass("youtube-video");
                                            var r = t.closest(".slide, #s-header, .s-blog-header"),
                                                u = t.closest(".video-bg");
                                            (0, d.default)(i = ["static", "initial"]).call(i, u.css("position")) && u.css("position", "relative"), u.children().each((function() {
                                                var e, t, a = (0, E.default)(this);
                                                if (window.edit_page.v4 ? a.hasClass("video-bg-wrap") || !(0, d.default)(t = ["static", "initial"]).call(t, a.css("position")) || a.hasClass("s-section-editor-wrapper") || a.css("position", "relative") : !a.hasClass("video-bg-wrap") && (0, d.default)(e = ["static", "initial"]).call(e, a.css("position")) && a.css("position", "relative"), ((0, f.default)(a.css("z-index"), 10) || 1) < 3) return a.css("z-index", 3)
                                            })), (0, l.default)(u).call(u, ".video-bg-wrap").css("z-index", 1), e._resizeFn && (0, E.default)(window).off("resize", e._resizeFn), e._resizeFn = S.default.debounce((function() {
                                                var t = Math.max(r.outerHeight() || 0, u.height()),
                                                    n = Math.max(r.outerWidth() || 0, u.width()),
                                                    i = (n / t).toFixed(2);
                                                return function() {
                                                    var e, l;
                                                    o.css({
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0
                                                    });
                                                    var r = (0, f.default)(o.attr("height"), 10),
                                                        s = ((0, f.default)(o.attr("width"), 10) / r).toFixed(2);
                                                    if (s > i) {
                                                        var u = a ? (0, E.default)(window).innerHeight() : 100;
                                                        e = t + u, l = (t + u) * s
                                                    } else {
                                                        var d = a ? (0, E.default)(window).innerWidth() : 100;
                                                        e = (n + d) / s, l = n + d
                                                    }
                                                    var c = (t - e) / 2,
                                                        m = (n - l) / 2;
                                                    o.css({
                                                        height: "".concat(e, "px"),
                                                        width: "".concat(l, "px"),
                                                        top: "".concat(c, "px"),
                                                        left: "".concat(m, "px")
                                                    })
                                                }(), (0, g.default)((function() {
                                                    if (t !== Math.max(r.height() || 0, u.height())) return e._resizeFn()
                                                }), 50)
                                            }), 100), e._resizeFn
                                        }
                                    }
                                }(), a(), null != window.YT && window.onYouTubeIframeAPIReady(), this._resizeFn) {
                                for (var n = 0, o = [100, 500, 1e3, 2e3, 5e3]; n < o.length; n++) {
                                    var i = o[n];
                                    (0, g.default)(this._resizeFn, i)
                                }
                                return (0, E.default)(window).on("resize", this._resizeFn), this._token = U.default.Event.subscribe("Section.changed", (function(t, a) {
                                    return e._resizeFn()
                                })), this._token
                            }
                        }
                    },
                    render: function() {
                        return K.default.apply(this)
                    }
                });
            W.WaypointLazy = (0, F.default)(W, {
                noWrapper: !0
            }), t.default = W.WaypointLazy, e.exports = t.default
        },
        695757: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(726394),
                l = (0, o.default)(i),
                r = a(569198),
                s = (0, o.default)(r),
                u = a(678580),
                d = (0, o.default)(u),
                c = a(368768),
                f = (0, o.default)(c),
                m = a(680523),
                g = (0, o.default)(m),
                p = a(317118),
                h = (0, o.default)(p),
                v = a(921806),
                y = (0, o.default)(v),
                b = function() {
                    function e() {
                        (0, l.default)(this, e)
                    }
                    return (0, s.default)(e, [{
                        key: "upload",
                        value: function(e) {
                            var t, a, n = h.default.getVideoType(e.url);
                            if (e.nativeVideo) return e.success({
                                message: {
                                    html: h.default.getNormalVideoHtml(e.url, 1280, 800),
                                    thumbnail_url: ""
                                }
                            });
                            if (!(0, d.default)(t = ["youku", "tudou", "qq", "facebook", "bilibili", "iqiyi"]).call(t, n)) return new y.default({
                                type: "POST",
                                url: g.default.VIDEO.CREATE(),
                                data: {
                                    video: {
                                        url: e.url,
                                        maxwidth: e.maxwidth || 700
                                    }
                                },
                                success: function(t) {
                                    "retry" === t.html ? f.default.poller(g.default.TASKS.POLL(t.message.type, t.message.id, 1), e.success, e.error) : "success" === t.html && e.success(t)
                                },
                                error: e.error
                            }).run();
                            switch (n) {
                                case "youku":
                                    a = h.default.getYouKuHtml(e.url);
                                    break;
                                case "tudou":
                                    a = h.default.getTuDouHtml(e.url);
                                    break;
                                case "qq":
                                    a = h.default.getQQHtml(e.url);
                                    break;
                                case "facebook":
                                    a = h.default.getFacebookHtml(e.url);
                                    break;
                                case "bilibili":
                                    a = h.default.getBiliBiliHtml(e.url);
                                    break;
                                case "iqiyi":
                                    a = h.default.getIQiYiHtml(e.url)
                            }
                            return "" !== a ? e.success({
                                message: {
                                    html: a,
                                    thumbnail_url: ""
                                }
                            }) : "function" == typeof e.error ? e.error() : void 0
                        }
                    }]), e
                }();
            t.default = new b, e.exports = t.default
        },
        204992: function(e, t, a) {
            "use strict";
            var n = a(686902),
                o = a(14310),
                i = a(620116),
                l = a(834074),
                r = a(778914),
                s = a(239649),
                u = a(820368),
                d = a(663978),
                c = a(60530)(a(60530));
            d(t, "__esModule", {
                value: !0
            });
            var f = a(487672),
                m = (0, c.default)(f),
                g = a(977766),
                p = (0, c.default)(g),
                h = a(51942),
                v = (0, c.default)(h),
                y = a(926941),
                b = (0, c.default)(y),
                _ = a(684961),
                C = (0, c.default)(_);

            function N(e, t) {
                var a = n(e);
                if (o) {
                    var r = o(e);
                    t && (r = i(r).call(r, (function(t) {
                        return l(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a, n = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) r(a = N(Object(n), !0)).call(a, (function(t) {
                        (0, m.default)(e, t, n[t])
                    }));
                    else if (s) u(e, s(n));
                    else {
                        var o;
                        r(o = N(Object(n))).call(o, (function(t) {
                            d(e, t, l(n, t))
                        }))
                    }
                }
                return e
            }
            var x = {
                    themeColorGroup: function(e) {
                        var t, a, n, o, i, l, r = e.main.toHex(),
                            s = e.main.fade(.07).toRgba(),
                            u = e.main.fade(.2).toRgba();
                        return {
                            ".s-theme-color-1": "color: ".concat(r),
                            ".s-bg-theme-color-1": "background-color: ".concat(r),
                            ".s-bg-theme-color-fade-1": "background-color: ".concat(s),
                            ".s-bg-theme-color-fade-2": "background-color: ".concat(u),
                            ".s-border-theme-color-1": "border-color: ".concat(r),
                            ".s-button-theme-style": (0, p.default)(t = "background-color: ".concat(u, "; color: ")).call(t, r),
                            ".s-button-theme-style-shadow": (0, p.default)(a = (0, p.default)(n = "background-color: ".concat(u, "; box-shadow: 0px 3px 0 ")).call(n, u, "; color: ")).call(a, r),
                            ".s-button-theme-style-border": (0, p.default)(o = (0, p.default)(i = "background-color: ".concat(u, "; border: 2px solid ")).call(i, u, "; color1: ")).call(o, r),
                            ".s-button-theme-style-important": (0, p.default)(l = "background-color: ".concat(u, " !important; color: ")).call(l, r, " !important")
                        }
                    },
                    donationGroup: function(e) {
                        var t = e.main.toHex();
                        return {
                            ".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .progress": "background: ".concat(t),
                            ".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:before": "background: ".concat(t),
                            ".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:after": "border-top-color: ".concat(t)
                        }
                    },
                    ecommerceTextGroup: function(e) {
                        var t = e.textColor.toHex(),
                            a = e.textColor.lighten(.2).toHex(),
                            n = "color: ".concat(t, ";"),
                            o = "color: ".concat(a, ";"),
                            i = ".s-ecommerce .s-ecommerce-products-wrapper .s-ecommerce-card-view-wrapper .s-ecommerce-card-view-detail .s-ecommerce-card-view-detail-header",
                            l = {
                                ".s-section .s-category-bar .category-list .category-link-item.selected": n,
                                ".s-section .s-category-bar .category-list .category-link-item.selected:after": "background: ".concat(t),
                                ".s-section .s-category-bar .category-list .category-link-item-wrapper:hover .category-link-item:not(.no-hover)": n
                            };
                        return k() || (l = w(w({}, l), {}, {
                            ".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-cards .s-ecommerce-card-view-card .s-ecommerce-card-view-card-price": n,
                            ".s-ecommerce .s-ecommerce-row-view-product .s-ecommerce-row-view-product-detail-panel .s-ecommerce-row-view-product-pricing": n
                        })), l["".concat(i, " .back-btn")] = l["".concat(i, " .prev-product-btn")] = l["".concat(i, " .next-product-btn")] = n, l["".concat(i, " .back-btn:hover")] = l["".concat(i, " .prev-product-btn:hover")] = l["".concat(i, " .next-product-btn:hover")] = o, l
                    },
                    ecommerceGroup: function(e) {
                        var t, a, n;
                        e.textColor = e.textColor || e.main, e.mobileBg = e.mobileBg || new b.default("#f2f2f2");
                        var o = e.main.toHex(),
                            i = e.mobileBg.toHex(),
                            l = e.mobileBg.mix("#000", .2).toHex(),
                            r = "background: ".concat(o, ";"),
                            s = "background: ".concat(i, ";");
                        return (0, v.default)({
                            ".fixed-login-container .login-container": r,
                            ".s-ecommerce-row-view-product .s-ecommerce-row-view-product-thumbnail-list ul li.current": "border: 2px solid ".concat(o),
                            ".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-card .s-ecommerce-card-view-card-stock-warning": r,
                            ".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart": r,
                            ".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart.hovered": r,
                            ".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile": (0, p.default)(t = "\n        ".concat(s, "\n        border-top: 1px solid ")).call(t, l, ";"),
                            ".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile .check-btn": r,
                            ".s-ecommerce-animation-item": (0, p.default)(a = "\n        border: 2px solid ".concat(o, ";\n        color: ")).call(a, o, ";"),
                            ".s-ecommerce-row-view-product .mobile-select .price-label": "color: ".concat(o),
                            ".s-ecommerce-row-view-product .mobile-select .variation-item.selected": (0, p.default)(n = "border: 1px solid ".concat(o, "; ")).call(n, r),
                            ".s-ecommerce-row-view-product .mobile-select .add-btn": r,
                            ".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot": "border: 1px solid ".concat(o),
                            ".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot.selected": "background: ".concat(o)
                        }, x.ecommerceTextGroup({
                            textColor: e.textColor
                        }))
                    }
                },
                k = function() {
                    var e;
                    return "s5-theme" === ((0, C.default)("conf.isBlog") ? (0, C.default)("blogPostData.pageMeta.isV4") ? (0, C.default)("blogPostData.pageMeta.theme.name") : (0, C.default)("blogPostData.pageMeta.theme.name_with_v4_fallback") : null === (e = (0, C.default)("stores.pageMeta.theme")) || void 0 === e ? void 0 : e.name)
                };
            t.default = x, e.exports = t.default
        },
        297079: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(2991),
                l = (0, o.default)(i),
                r = a(25843),
                s = (0, o.default)(r),
                u = a(981643),
                d = (0, o.default)(u),
                c = a(977766),
                f = (0, o.default)(c),
                m = a(841511),
                g = (0, o.default)(m),
                p = a(778914),
                h = (0, o.default)(p);
            a(569600), a(974916), a(323123);
            var v = a(914578),
                y = (0, o.default)(v),
                b = a(926941),
                _ = (0, o.default)(b),
                C = a(204992),
                N = (0, o.default)(C),
                w = {
                    title: ".s-title",
                    subtitle: ".s-subtitle",
                    itemTitle: ".s-item-title",
                    itemSubtitle: ".s-item-subtitle",
                    titleLink: ".s-title .s-text .s-component-content a",
                    itemTitleLink: ".s-item-title .s-text .s-component-content a",
                    subtitleLink: ".s-subtitle .s-text .s-component-content a",
                    itemSubtitleLink: ".s-item-subtitle .s-text .s-component-content a",
                    textLink: ".s-text .s-component-content a",
                    socialFeedLink: ".s-social-feed .s-feeds-item .s-feed-content .s-feed-text-main a",
                    button: ".s-common-button",
                    buttonHover: ".s-common-button:hover",
                    overlay: ".s-bg-overlay:before",
                    blogInfo: ".s-blog-wrapper .s-blog-col-placeholder .s-blog-details .s-blog-info",
                    storePrice: ".s-ecommerce-row-view-product .s-ecommerce-row-view-product-pricing, .s-ecommerce-card-view-card-price",
                    termsLink: ".s-terms-link a",
                    socialLinks: ".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",
                    socialLinks2: ".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",
                    mobileActionButton: ".s-mobile-actions .s-mobile-actions-item.one-item",
                    mobileActionButtonForApp: ".s-mobile-actions .s-mobile-actions-item.selected:not(.one-item)",
                    mobileNavbarButtons: ".navbar-drawer-bar .navbar, .navbar-drawer-bar .mobile",
                    mobileNavbarButtonsOpen: ".navbar-drawer-bar.drawer-open .navbar, .navbar-drawer-bar.drawer-open .mobile"
                },
                x = {
                    default: "color",
                    button: "background",
                    buttonHover: "background",
                    mobileActionButton: "background",
                    mobileActionButtonForApp: "color",
                    overlay: "background",
                    mobileNavbarButtons: "background",
                    mobileNavbarButtonsOpen: "background",
                    socialLinks: "background",
                    socialLinks2: "color"
                };

            function k(e, t) {
                var a, n = w[e] || e;
                n = (0, l.default)(a = n.split(",")).call(a, (function(e) {
                    return ".s-custom-colors " + (0, s.default)(e).call(e)
                })).join(",");
                var o, i, r, u = x[e] || x.default;
                if (y.default.isString(t)) return -1 !== (0, d.default)(t).call(t, ":") ? (0, f.default)(r = "".concat(n, "{")).call(r, t, "}") : (0, f.default)(o = (0, f.default)(i = "".concat(n, "{")).call(i, u, ":")).call(o, t, "}");
                var c, m, g = _.default.prototype.validate(t);
                return g ? (0, f.default)(c = (0, f.default)(m = "".concat(n, "{")).call(m, u, ":")).call(c, g.toRgba(), ";}") : void 0
            }
            t.default = {
                generate: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = "",
                        n = null;
                    for (n in e)
                        if (e.hasOwnProperty(n)) {
                            var o = n.split(" ");
                            N.default[n] ? function() {
                                var o = N.default[n](e[n]),
                                    i = function(e) {
                                        var n, i;
                                        (0, g.default)(t.prefix) ? (0, h.default)(n = t.prefix).call(n, (function(t) {
                                            var n;
                                            a += k((0, f.default)(n = "".concat(t, " ")).call(n, e), o[e])
                                        })): a += k((0, f.default)(i = "".concat(t.prefix || "", " ")).call(i, e), o[e])
                                    };
                                for (var l in o) i(l)
                            }() : w[o[0]] ? (0, h.default)(o).call(o, (function(t) {
                                return a += k(t, e[n])
                            })) : k(n, e[n])
                        }
                    return a
                }
            }, e.exports = t.default
        },
        255245: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(914578),
                l = ((0, o.default)(i), a(766463)),
                r = a(978307),
                s = {
                    getLayoutOptions: function(e) {
                        return (0, l.getLayoutOptions)(e, r.LAYOUT_CONTROL_SETTINGS)
                    },
                    getLayoutColors: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = [{
                                type: "neutral",
                                value: r.NEUTRAL_COLOR
                            }],
                            a = e.highlight1,
                            n = e.highlight2;
                        return n && t.unshift({
                            type: "secondary",
                            value: n
                        }), a && t.unshift({
                            type: "primary",
                            value: a
                        }), t
                    }
                };
            t.default = s, e.exports = t.default
        },
        532408: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            }), a(974916), a(115306);
            var i = a(51942),
                l = (0, o.default)(i),
                r = a(977766),
                s = (0, o.default)(r),
                u = a(914578),
                d = (0, o.default)(u),
                c = a(766463),
                f = a(653114),
                m = (0, c.getThemeName)();

            function g() {
                return f.DEFAULT_LAYOUTS_CLASS
            }

            function p(e) {
                return (0, l.default)({}, f.DEFAULT_LAYOUTS_CLASS, e)
            }

            function h(e, t, a) {
                var n = (0, c.getThemeFeature)("narrowMedia") && 11 !== e && "fresh" !== m,
                    o = n ? 14 : 16,
                    i = n ? e - 1 : e,
                    l = n ? 8 : i,
                    r = n ? 10 : 16;
                11 === e ? r = l = 14 : "onyx_new" === m && "right" === t && (o = 15, r = 15);
                var u = (0, c.generateColumnClassWithOffset)(i, o, 16),
                    d = (0, c.generateColumnClass)(o - i),
                    f = (0, c.generateColumnClassWithOffset)(l, l, 16),
                    g = (0, c.generateColumnClassWithOffset)(r, r, 16),
                    h = "half-offset-right",
                    v = "half-offset-left";
                switch (11 !== i && 9 !== i || (h = v = ""), t) {
                    case "left":
                        return function() {
                            return p({
                                repeatableClass: "s-media-left s-layout-mediaLeft",
                                mediaClass: "".concat(u, " s-left-in-row"),
                                singleMediaClass: "".concat(f, " s-left-in-row"),
                                textClass: "".concat(d, " s-right-in-row"),
                                singleTextClass: "".concat(g, " s-right-in-row"),
                                textInnerClass: v,
                                buttonClass: a ? "s-text-button" : ""
                            })
                        };
                    case "right":
                        return function() {
                            return p({
                                repeatableClass: "s-media-right s-layout-mediaRight",
                                mediaClass: "".concat(u, " s-right-in-row right"),
                                singleMediaClass: "".concat(f, " s-right-in-row right"),
                                textClass: "".concat(d, " s-left-in-row right"),
                                singleTextClass: "".concat(g, " s-left-in-row right"),
                                textInnerClass: h,
                                buttonClass: a ? "s-text-button" : ""
                            })
                        };
                    case "alternating":
                        return function() {
                            return p({
                                repeatableClass: "s-media-alt s-layout-alt",
                                mediaClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(u, " ")).call(a, t % 2 ? "s-right-in-row right" : "s-left-in-row")
                                },
                                singleMediaClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(f, " ")).call(a, t % 2 ? "s-right-in-row right" : "s-left-in-row")
                                },
                                textClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(d, " ")).call(a, t % 2 ? "s-left-in-row right" : "s-right-in-row")
                                },
                                singleTextClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(g, " ")).call(a, t % 2 ? "s-left-in-row right" : "s-right-in-row")
                                },
                                textInnerClass: function(e, t) {
                                    return t % 2 ? h : v
                                },
                                buttonClass: a ? "s-text-button" : ""
                            })
                        }
                }
            }

            function v(e) {
                function t() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return {
                        left: h(e.mediaColumns, "left", t),
                        right: h(e.mediaColumns, "right", t),
                        alternating: h(e.mediaColumns, "alternating", t)
                    }
                }
                return {
                    text: t(),
                    button: t(!0)
                }
            }

            function y(e, t) {
                var a, n = e.getRepeatableBinding("repeatable1").sub(t);
                a = (0, c.getThemeFeature)("leftAlignColumnsMedia") ? "text1" : "text1 text2";
                var o = e.sbUniformTextAlignment(a, {
                    parentBinding: n
                });
                return "glow" === m ? "s-mhi ".concat(o, " fourteen columns offset-one") : "s-mhi ".concat(o)
            }

            function b(e) {
                return e < 2 ? "s-mh" : function(t) {
                    var a = t,
                        n = a.getRepeatableBinding("repeatable1"),
                        o = "";
                    return (0, c.getThemeFeature)("leftAlign") && n.get().size < e && (o = a.sbUniformTextAlignment("text1 text2")), "s-mh ".concat(o)
                }
            }

            function _(e) {
                return {
                    text: function() {
                        return p(e)
                    },
                    button: function() {
                        return p(d.default.extend({}, e, {
                            buttonClass: "s-text-button"
                        }))
                    }
                }
            }

            function C(e) {
                return _({
                    repeatableClass: b(e.columnsNum),
                    itemClass: (0, c.generateItemClassByColumnsNum)(e.columnsNum),
                    mediaClass: y
                })
            }
            var N = {
                    default: {
                        gride: {
                            two: C({
                                columnsNum: 2
                            }),
                            three: C({
                                columnsNum: 3
                            }),
                            four: C({
                                columnsNum: 4
                            }),
                            five: C({
                                columnsNum: 5
                            }),
                            six: C({
                                columnsNum: 6
                            })
                        },
                        list: {
                            xs: v({
                                mediaColumns: 4
                            }),
                            s: v({
                                mediaColumns: 6
                            }),
                            m: v({
                                mediaColumns: 8
                            }),
                            l: v({
                                mediaColumns: 10
                            }),
                            center: _({
                                repeatableClass: "".concat(b(1), " s-layout-normal"),
                                innerItemClass: (0, c.generateItemClassByColumnsNum)(1).replace("no-float", "") + ("persona" === m ? "" : " center"),
                                mediaClass: y
                            }),
                            left: {
                                text: h(11, "left"),
                                button: h(11, "left", !0)
                            },
                            right: {
                                text: h(11, "right"),
                                button: h(11, "right", !0)
                            },
                            alternating: {
                                text: h(11, "alternating"),
                                button: h(11, "alternating", !0)
                            }
                        }
                    }
                },
                w = (0, c.getLayoutMapping)(N),
                x = {
                    getLayouts: function() {
                        return f.FEATURE_LIST_LAYOUTS
                    },
                    getLayoutStyleConfig: function(e) {
                        return w.default[e] || g
                    },
                    getLayoutOptions: function(e) {
                        return (0, c.getLayoutOptions)(e, f.LAYOUT_CONTROL_SETTINGS)
                    }
                };
            t.default = x, e.exports = t.default
        },
        10589: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i, l, r, s, u, d, c = a(812077),
                f = (0, o.default)(c),
                m = a(694473),
                g = (0, o.default)(m),
                p = a(143393),
                h = (0, o.default)(p),
                v = a(366757),
                y = (0, o.default)(v),
                b = a(766463),
                _ = a(643599),
                C = {
                    saveNewLayoutConfig: function(e, t) {
                        e.merge(h.default.fromJS(t))
                    },
                    getNewLayoutConfigByTemplate: function(e) {
                        return (0, g.default)(_.newLayoutTempateconfigs).call(_.newLayoutTempateconfigs, (function(t) {
                            return t.templateName === e
                        })) || {}
                    },
                    getNewLayoutTemplates: function() {
                        return [{
                            name: "A",
                            template: i || (i = (0, f.default)(y.default.Fragment, {}, void 0, (0, f.default)("div", {
                                className: "left"
                            }, void 0, (0, f.default)("div", {
                                className: "block"
                            }), (0, f.default)("div", {
                                className: "title"
                            })), (0, f.default)("div", {
                                className: "right"
                            }, void 0, (0, f.default)("div", {
                                className: "block"
                            }), (0, f.default)("div", {
                                className: "title"
                            }))))
                        }, {
                            name: "B",
                            template: l || (l = (0, f.default)(y.default.Fragment, {}, void 0, (0, f.default)("div", {
                                className: "left"
                            }, void 0, (0, f.default)("div", {
                                className: "block"
                            }), (0, f.default)("div", {
                                className: "block"
                            })), (0, f.default)("div", {
                                className: "center"
                            }, void 0, (0, f.default)("div", {
                                className: "block"
                            }), (0, f.default)("div", {
                                className: "block"
                            })), (0, f.default)("div", {
                                className: "right"
                            }, void 0, (0, f.default)("div", {
                                className: "block"
                            }), (0, f.default)("div", {
                                className: "block"
                            }))))
                        }, {
                            name: "C",
                            template: r || (r = (0, f.default)(y.default.Fragment, {}, void 0, (0, f.default)("div", {
                                className: "left"
                            }, void 0, (0, f.default)("div", {
                                className: "block"
                            }), (0, f.default)("div", {
                                className: "block small"
                            })), (0, f.default)("div", {
                                className: "right"
                            }, void 0, (0, f.default)("div", {
                                className: "block small"
                            }), (0, f.default)("div", {
                                className: "block"
                            }))))
                        }, {
                            name: "D",
                            template: s || (s = (0, f.default)(y.default.Fragment, {}, void 0, (0, f.default)("div", {
                                className: "left"
                            }, void 0, (0, f.default)("div", {
                                className: "block"
                            }), (0, f.default)("div", {
                                className: "block small"
                            })), (0, f.default)("div", {
                                className: "center"
                            }, void 0, (0, f.default)("div", {
                                className: "block small"
                            }), (0, f.default)("div", {
                                className: "block"
                            })), (0, f.default)("div", {
                                className: "right"
                            }, void 0, (0, f.default)("div", {
                                className: "block"
                            }), (0, f.default)("div", {
                                className: "block small"
                            }))))
                        }, {
                            name: "E",
                            template: u || (u = (0, f.default)(y.default.Fragment, {}, void 0, (0, f.default)("div", {
                                className: "block"
                            }), (0, f.default)("div", {
                                className: "title"
                            })))
                        }, {
                            name: "F",
                            template: d || (d = (0, f.default)(y.default.Fragment, {}, void 0, (0, f.default)("div", {
                                className: "left"
                            }, void 0, (0, f.default)("div", {
                                className: "block"
                            }), (0, f.default)("div", {
                                className: "block dark"
                            })), (0, f.default)("div", {
                                className: "right"
                            }, void 0, (0, f.default)("div", {
                                className: "block dark"
                            }), (0, f.default)("div", {
                                className: "block"
                            }))))
                        }]
                    },
                    getNewLayoutOptions: function(e) {
                        return (0, b.getLayoutOptions)(e, _.newLayoutOptions)
                    }
                };
            t.default = C, e.exports = t.default
        },
        219325: function(e, t, a) {
            "use strict";
            var n = a(223765),
                o = a(752424),
                i = a(663978),
                l = a(834074),
                r = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = a(726394),
                u = (0, r.default)(s),
                d = a(569198),
                c = (0, r.default)(d),
                f = a(31238),
                m = (0, r.default)(f),
                g = a(678580),
                p = (0, r.default)(g),
                h = a(977766),
                v = (0, r.default)(h);
            a(974916), a(323123), a(569600);
            var y = function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n(e) && "function" != typeof e) return {
                    default: e
                };
                var a = b(t);
                if (a && a.has(e)) return a.get(e);
                var o = {},
                    r = i && l;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var u = r ? l(e, s) : null;
                        u && (u.get || u.set) ? i(o, s, u) : o[s] = e[s]
                    }
                return o.default = e, a && a.set(e, o), o
            }(a(914578));

            function b(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    a = new o;
                return (b = function(e) {
                    return e ? a : t
                })(e)
            }
            var _ = (0, a(11945).getIsEditorRtlLayout)(),
                C = {
                    twoLeftOneRight: {
                        cellCount: 3
                    },
                    oneLeftTwoRight: {
                        cellCount: 3
                    },
                    twoTopThreeBottom: {
                        cellCount: 5
                    },
                    twoTopTwoBottom: {
                        cellCount: 4
                    }
                };
            y.forOwn(C, (function(e, t) {
                e.name = t
            }));
            var N = function() {
                    function e(t) {
                        (0, u.default)(this, e);
                        var a = t.split("-");
                        this.rows = "", this.columns = "", this.magazineLayoutName = "", this.gridType = a[0], this.cellHeight = a[4], this.cellSpacing = a[5], this.contentWidth = a[6], "grid" === a[0] ? (this.rows = (0, m.default)(a[1]), this.columns = (0, m.default)(a[2])) : "magazine" === a[0] && (this.magazineLayoutName = a[3])
                    }
                    return (0, c.default)(e, [{
                        key: "isMagazine",
                        value: function() {
                            return "magazine" === this.gridType
                        }
                    }, {
                        key: "isGrid",
                        value: function() {
                            return "grid" === this.gridType
                        }
                    }, {
                        key: "canBeExtraLarge",
                        value: function() {
                            return this.isGrid() && 1 === this.rows
                        }
                    }, {
                        key: "serialize",
                        value: function() {
                            return [this.gridType, this.rows, this.columns, this.magazineLayoutName, this.cellHeight, this.cellSpacing, this.contentWidth].join("-")
                        }
                    }, {
                        key: "getCellCount",
                        value: function() {
                            return this.isGrid() ? this.rows * this.columns : C[this.magazineLayoutName].cellCount
                        }
                    }, {
                        key: "getTopRightCellIndex",
                        value: function() {
                            return this.isGrid() ? this.columns - 1 : {
                                twoLeftOneRight: 2,
                                oneLeftTwoRight: 0,
                                twoTopThreeBottom: 1,
                                twoTopTwoBottom: 1
                            }[this.magazineLayoutName]
                        }
                    }, {
                        key: "getTopRowCellIndices",
                        value: function() {
                            return this.isGrid() ? y.range(0, this.columns) : {
                                twoLeftOneRight: [0, 2],
                                oneLeftTwoRight: [0, 2],
                                twoTopThreeBottom: [0, 1],
                                twoTopTwoBottom: [0, 1]
                            }[this.magazineLayoutName]
                        }
                    }]), e
                }(),
                w = ["profile", "ion", "sleek", "persona"],
                x = ["sleek", "ion", "persona"],
                k = {},
                E = {
                    getDefaultLayoutKey: function(e, t) {
                        return t
                    },
                    getLayout: function(e, t, a) {
                        var n = this.parseLayoutVariation(t);

                        function o(t) {
                            var a;
                            return "s5-theme" === e ? t : (0, p.default)(a = ["pitch_new", "zine", "bright", "glow", "minimal"]).call(a, e)
                        }
                        return function() {
                            var i, l, r, s = (0, v.default)(i = (0, v.default)(l = "".concat(e, "-")).call(l, t, "-")).call(i, a);
                            if (k[s]) return k[s];
                            var u = "normal" === n.contentWidth;
                            (0, p.default)(w).call(w, e) && (u = !0);
                            var d = {};
                            d.contentWidthIsNormal = u, d.containerClass = u ? "container " : "", d.containerClass += "_cell-spacing-".concat(n.cellSpacing, " "), d.needsPerspContainer = u && "perspective" === e, d.needs16ColumnContainer = u && !(0, p.default)(r = ["perspective", "persona"]).call(r, e), d.sectionClass = u ? "" : " _wide ";
                            var c = (0, p.default)(x).call(x, e) ? "mobile" : "desktop";
                            d.sectionClass += " s-grid-section__".concat(c, "-view-on-tablet");
                            var f = "onyx_new" === e;

                            function m(t, a, n, i) {
                                var l = o(i) ? Math.max(0, a - n) : 0,
                                    r = u ? 0 : 2 * d.cellPadding,
                                    s = 10 + Math.max(0, l - r),
                                    c = 0 !== t && "ion" !== e ? 10 : -30;
                                return 0 === t && (c = 10 - n + (o(i) ? a : 0)), "ion" === e && (c = -46), {
                                    layoutButtonTop: c,
                                    topRowimageAndLinkButtonTop: s,
                                    layoutButtonOverlapsTopRightButton: !u && c + 34 + 10 > s + r
                                }
                            }
                            return d.isWideWithLeftAlignedHeading = f && !u, d.cellPadding = {
                                none: 0,
                                small: a ? 3 : 5,
                                large: a ? 7 : 15
                            }[n.cellSpacing], d.containerMargin = u ? -d.cellPadding : 0, d.containerPadding = u ? 0 : d.cellPadding, d.cellClassName = "s-grid-section-cell ", d.cellMinHeight = {
                                small: {
                                    desktop: 160,
                                    mobile: 120
                                },
                                medium: {
                                    desktop: 250,
                                    mobile: 150
                                },
                                large: {
                                    desktop: 350,
                                    mobile: 200
                                },
                                extraLarge: {
                                    desktop: 600,
                                    mobile: 300
                                }
                            }[n.cellHeight][a ? "mobile" : "desktop"], n.getCellCount() % 2 != 0 && (d.cellClassName += " _odd-cell-count "), n.isGrid() ? (d.containerClass += "_grid", d.cellClassName += " _".concat(n.columns, "-columns ")) : n.isMagazine() && (d.containerClass += "_magazine ", d.cellClassName += " _".concat(n.magazineLayoutName, " ")), d.useMagazineColumnDom = n.isMagazine() && ("twoLeftOneRight" === n.magazineLayoutName || "oneLeftTwoRight" === n.magazineLayoutName), d.magazineColumnClass = "s-magazine-column _".concat(n.magazineLayoutName), d.getItemBorder = function(e) {
                                return e || "none" === n.cellSpacing ? null : "1px solid #eee"
                            }, d.isTopRightCell = function(e) {
                                return n.getTopRightCellIndex() === e
                            }, d.isTopRowCell = function(e) {
                                var t;
                                return (0, p.default)(t = n.getTopRowCellIndices()).call(t, e)
                            }, d.getItemButtonStyles = function(e) {
                                var t = e.cellIndex,
                                    a = e.sectionIndex,
                                    o = e.navHeight,
                                    i = e.sectionPaddingTop,
                                    l = e.hasTitleGroup,
                                    r = e.s5NavOverlapsFirstSection,
                                    s = 10,
                                    u = 10,
                                    d = 0;
                                return this.isTopRowCell(t) && !l && (s = m(a, o, i, r).topRowimageAndLinkButtonTop, this.isTopRightCell(t) && (u += 160, d += 160)), n.isGrid() && (d += 28), _ ? {
                                    moveButton: {
                                        top: s,
                                        right: "initial",
                                        left: u
                                    },
                                    imageAndLinkButton: {
                                        top: s,
                                        right: "initial",
                                        left: d
                                    }
                                } : {
                                    moveButton: {
                                        top: s,
                                        right: u
                                    },
                                    imageAndLinkButton: {
                                        top: s,
                                        right: d
                                    }
                                }
                            }, d.getLayoutButtonStyle = function(e) {
                                return {
                                    top: m(e.sectionIndex, e.navHeight, e.sectionPaddingTop, e.s5NavOverlapsFirstSection).layoutButtonTop
                                }
                            }, d.getSectionPaddingTop = function(t, a, n, i) {
                                if ("perspective" === e && a && !u) return 80;
                                if ("minimal" === e || "pitch_new" === e) {
                                    var l = u || a;
                                    return (0 === n ? t : 0) + {
                                        minimal: "minimal" === e && l ? 70 : 0,
                                        pitch_new: "pitch_new" === e && l ? 90 : 0
                                    }[e]
                                }
                                return u || a ? "" : o(i) && 0 === n ? t : 0
                            }, k[s] = d, d
                        }
                    },
                    parseLayoutVariation: function(e) {
                        return new N(e)
                    },
                    magazineLayouts: C,
                    themesWithoutWideGridLayout: w
                };
            t.default = E, e.exports = t.default
        },
        299293: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(51942),
                l = (0, o.default)(i),
                r = a(977766),
                s = (0, o.default)(r),
                u = a(981643),
                d = (0, o.default)(u),
                c = a(686902),
                f = (0, o.default)(c),
                m = a(914578),
                g = (0, o.default)(m),
                p = a(766463),
                h = {
                    layoutClass: "",
                    mediaClass: "",
                    textClass: "",
                    textOffsetClass: "",
                    type: "",
                    showImage: !0
                };

            function v() {
                return h
            }

            function y(e) {
                return (0, l.default)({}, h, e)
            }

            function b(e, t) {
                return function(a) {
                    var n, o = "right" === e ? "right" : "",
                        i = "container s-rva s-layout-".concat(g.default.camelCase((0, s.default)(n = "".concat(t, "-")).call(n, e))),
                        l = "noImage" != e,
                        r = "",
                        u = "",
                        d = "";
                    return "noImage" === e ? r = "s-rva-text sixteen columns" : (d = "right" === e ? "half-offset-left" : "half-offset-right", r = "s-rva-text eight columns ".concat(o), u = "s-rva-media eight columns ".concat(o)), y({
                        layoutClass: i,
                        textClass: r,
                        textOffsetClass: d,
                        mediaClass: u,
                        type: t,
                        showImage: l
                    })
                }
            }

            function _(e) {
                return {
                    left: b("right", e),
                    right: b("left", e),
                    noImage: b("noImage", e)
                }
            }
            var C = {
                button: {
                    left: function() {
                        return y({
                            type: "button"
                        })
                    },
                    right: function() {
                        return y({
                            type: "button"
                        })
                    },
                    noImage: function() {
                        return y({
                            type: "button",
                            showImage: !1
                        })
                    }
                },
                images: {
                    left: function() {
                        return y({
                            type: "images"
                        })
                    },
                    right: function() {
                        return y({
                            type: "images"
                        })
                    },
                    noImage: function() {
                        return y({
                            type: "images",
                            showImage: !1
                        })
                    }
                },
                signup: {
                    left: function() {
                        return y({
                            type: "signup"
                        })
                    },
                    right: function() {
                        return y({
                            type: "signup"
                        })
                    },
                    noImage: function() {
                        return y({
                            type: "signup",
                            showImage: !1
                        })
                    }
                }
            };

            function N(e) {
                return {
                    left: {
                        swap: function() {
                            return y((0, l.default)(_(e).left(), {
                                type: e,
                                swapTitle: !0
                            }))
                        },
                        unswap: function() {
                            return y((0, l.default)(_(e).left(), {
                                type: e,
                                swapTitle: !1
                            }))
                        }
                    },
                    right: {
                        swap: function() {
                            return y((0, l.default)(_(e).right(), {
                                type: e,
                                swapTitle: !0
                            }))
                        },
                        unswap: function() {
                            return y((0, l.default)(_(e).right(), {
                                type: e,
                                swapTitle: !1
                            }))
                        }
                    },
                    noImage: {
                        swap: function() {
                            return y((0, l.default)(_(e).noImage(), {
                                type: e,
                                showImage: !1,
                                swapTitle: !0
                            }))
                        },
                        unswap: function() {
                            return y((0, l.default)(_(e).noImage(), {
                                type: e,
                                showImage: !1,
                                swapTitle: !1
                            }))
                        }
                    }
                }
            }
            var w = {
                    button: N("button"),
                    images: N("images"),
                    signup: N("signup")
                },
                x = {
                    default: {
                        button: _("button"),
                        images: _("images"),
                        signup: _("signup")
                    },
                    persona: C,
                    perspective: C,
                    glow: w
                },
                k = (0, p.getLayoutMapping)(x),
                E = {
                    default: {
                        buttonRight: "button-left",
                        signupRight: "signup-left",
                        imagesRight: "images-left",
                        buttonLeft: "button-right",
                        signupLeft: "signup-right",
                        imagesLeft: "images-right"
                    }
                };
            t.default = {
                getDefaultLayoutKey: function(e, t, a) {
                    var n = (E[e] || E.default)[t = t || ""];
                    return (k[e] || k.default)[t] && (n = t), "glow" === e ? (n || (-1 !== (0, d.default)(t).call(t, "button") ? n = "button-left-swap" : -1 !== (0, d.default)(t).call(t, "signup") ? n = "signup-left-swap" : -1 !== (0, d.default)(t).call(t, "images") && (n = "images-left-swap")), n || "signup_form" !== a || (n = "signup-noImage-swap")) : (n || (-1 !== (0, d.default)(t).call(t, "button") ? n = "button-left" : -1 !== (0, d.default)(t).call(t, "signup") ? n = "signup-left" : -1 !== (0, d.default)(t).call(t, "images") && (n = "images-left")), n || "signup_form" !== a || (n = "signup-noImage")), n || (n = (0, f.default)(k[e] || k.default)[0]), n
                },
                getLayout: function(e, t) {
                    return (k[e] || k.default)[t] || v
                },
                getLayoutOptions: function(e) {
                    return x[e] || x.default
                }
            }, e.exports = t.default
        },
        46366: function(e, t, a) {
            "use strict";
            var n = a(223765),
                o = a(752424),
                i = a(663978),
                l = a(834074),
                r = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = a(51942),
                u = (0, r.default)(s),
                d = a(977766),
                c = (0, r.default)(d),
                f = a(686902),
                m = (0, r.default)(f),
                g = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var o = {},
                        r = i && l;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? l(e, s) : null;
                            u && (u.get || u.set) ? i(o, s, u) : o[s] = e[s]
                        }
                    return o.default = e, a && a.set(e, o), o
                }(a(914578)),
                p = a(766463);

            function h(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    a = new o;
                return (h = function(e) {
                    return e ? a : t
                })(e)
            }
            var v = {
                    itemClass: "columns half-fixed no-float",
                    naturalImage: !0
                },
                y = (0, p.getThemeName)();

            function b() {
                return v
            }

            function _(e) {
                return (0, u.default)({}, v, e)
            }

            function C(e, t) {
                var a = t.get().size,
                    n = "half";
                return (3 === a && "center" === e || a > 4) && (n = "third"), _({
                    itemClass: n += " half-fixed s-persp-column",
                    naturalImage: !1
                })
            }
            var N, w = {
                    default: {
                        col: function(e) {
                            var t = e.get().size,
                                a = (0, p.getThemeFeature)("narrowMedia"),
                                n = "";
                            return n = t <= 1 ? a ? "third" : "sixteen" : 2 == t ? a ? "third" : "eight" : 3 == t ? "third" : 4 == t ? "four" : "three", "persona" === y && (n = "three"), "ion" === y && (n = "four"), _({
                                itemClass: n += " columns half-fixed no-float",
                                naturalImage: !1
                            })
                        },
                        natural: function() {
                            var e = "columns half-fixed no-float small-icons";
                            return "perspective" === y && (e = "s-persp-column half-fixed no-float small-icons"), _({
                                itemClass: e,
                                naturalImage: !0
                            })
                        }
                    },
                    perspective: (N = function(e) {
                        return {
                            col: g.curry(C)(e)
                        }
                    }, {
                        center: N("center"),
                        mediaLeft: N("left"),
                        mediaRight: N("right")
                    })
                },
                x = (0, p.getLayoutMapping)(w),
                k = {
                    perspective: {
                        mediaLeft: "mediaLeft-col",
                        mediaRight: "mediaRight-col",
                        center: "center-col"
                    }
                };
            t.default = {
                getDefaultLayoutKey: function(e, t, a) {
                    var n, o;
                    return t = t || "", (x[e] || x.default)[t] ? t : (a && (n = (k[e] || k.default)[(0, c.default)(o = "".concat(a, "-")).call(o, t)]), n || (n = (0, m.default)(x[e] || x.default)[0]), n)
                },
                getLayout: function(e, t) {
                    return (x[e] || x.default)[t] || v || b
                },
                getLayoutOptions: function(e) {
                    return w[e] || w.default
                }
            }, e.exports = t.default
        },
        7146: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            }), a(974916), a(115306), a(323123);
            var i = a(51942),
                l = (0, o.default)(i),
                r = a(977766),
                s = (0, o.default)(r),
                u = a(981643),
                d = (0, o.default)(u),
                c = a(686902),
                f = (0, o.default)(c),
                m = a(914578),
                g = (0, o.default)(m),
                p = a(766463),
                h = {
                    repeatableClass: "",
                    itemClass: "",
                    innerItemClass: "",
                    mediaClass: "",
                    singleMediaClass: "",
                    textClass: "",
                    singleTextClass: "",
                    textInnerClass: "",
                    buttonClass: ""
                },
                v = (0, p.getThemeName)();

            function y() {
                return h
            }

            function b(e) {
                return (0, l.default)({}, h, e)
            }

            function _(e, t, a) {
                var n = (0, p.getThemeFeature)("narrowMedia") && 11 !== e,
                    o = n ? 14 : 16,
                    i = 16,
                    l = n ? e - 1 : e,
                    r = n ? 8 : l,
                    u = n ? 10 : 16;
                11 === e ? u = r = 14 : "onyx_new" === v && "right" === t && (o = 15, u = 15), "persona" === v && (o = 12, i = 12, u = 12);
                var d = (0, p.generateColumnClassWithOffset)(l, o, i),
                    c = (0, p.generateColumnClass)(o - l),
                    f = (0, p.generateColumnClassWithOffset)(r, r, i),
                    m = (0, p.generateColumnClassWithOffset)(u, u, i),
                    g = "half-offset-right",
                    h = "half-offset-left";
                if (11 !== l && 9 !== l || (g = h = ""), "persona" === v) switch (t) {
                    case "right":
                        return function() {
                            return b({
                                repeatableClass: "s-media-right s-layout-mediaRight",
                                innerItemClass: (0, p.generateColumnClass)(12),
                                mediaClass: "".concat(d, " s-right-in-row right omega"),
                                singleMediaClass: "".concat(f, " s-right-in-row right alpha omega"),
                                textClass: "".concat(c, " s-left-in-row right alpha"),
                                singleTextClass: "".concat(m, " s-left-in-row right alpha omega"),
                                textInnerClass: g,
                                buttonClass: a ? "s-text-button" : ""
                            })
                        };
                    case "alt":
                        return function() {
                            return b({
                                repeatableClass: "s-media-alt s-layout-alt",
                                innerItemClass: (0, p.generateColumnClass)(12),
                                mediaClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(d, " ")).call(a, t % 2 ? "s-right-in-row right omega" : "s-left-in-row alpha")
                                },
                                singleMediaClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(f, " ")).call(a, t % 2 ? "s-right-in-row right alpha omega" : "s-left-in-row alpha omega")
                                },
                                textClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(c, " ")).call(a, t % 2 ? "s-left-in-row right alpha" : "s-right-in-row omega")
                                },
                                singleTextClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(m, " ")).call(a, t % 2 ? "s-left-in-row right alpha omega" : "s-right-in-row alpha omega")
                                },
                                textInnerClass: function(e, t) {
                                    return t % 2 ? g : h
                                },
                                buttonClass: a ? "s-text-button" : ""
                            })
                        }
                }
                switch (t) {
                    case "left":
                        return function() {
                            return b({
                                repeatableClass: "s-media-left s-layout-mediaLeft",
                                mediaClass: "".concat(d, " s-left-in-row"),
                                singleMediaClass: "".concat(f, " s-left-in-row"),
                                textClass: "".concat(c, " s-right-in-row"),
                                singleTextClass: "".concat(m, " s-right-in-row"),
                                textInnerClass: h,
                                buttonClass: a ? "s-text-button" : ""
                            })
                        };
                    case "right":
                        return function() {
                            return b({
                                repeatableClass: "s-media-right s-layout-mediaRight",
                                mediaClass: "".concat(d, " s-right-in-row right"),
                                singleMediaClass: "".concat(f, " s-right-in-row right"),
                                textClass: "".concat(c, " s-left-in-row right"),
                                singleTextClass: "".concat(m, " s-left-in-row right"),
                                textInnerClass: g,
                                buttonClass: a ? "s-text-button" : ""
                            })
                        };
                    case "alt":
                        return function() {
                            return b({
                                repeatableClass: "s-media-alt s-layout-alt",
                                mediaClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(d, " ")).call(a, t % 2 ? "s-right-in-row right" : "s-left-in-row")
                                },
                                singleMediaClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(f, " ")).call(a, t % 2 ? "s-right-in-row right" : "s-left-in-row")
                                },
                                textClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(c, " ")).call(a, t % 2 ? "s-left-in-row right" : "s-right-in-row")
                                },
                                singleTextClass: function(e, t) {
                                    var a;
                                    return (0, s.default)(a = "".concat(m, " ")).call(a, t % 2 ? "s-left-in-row right" : "s-right-in-row")
                                },
                                textInnerClass: function(e, t) {
                                    return t % 2 ? g : h
                                },
                                buttonClass: a ? "s-text-button" : ""
                            })
                        }
                }
            }

            function C(e) {
                function t() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return {
                        left: _(e.mediaColumns, "left", t),
                        right: _(e.mediaColumns, "right", t),
                        alt: _(e.mediaColumns, "alt", t)
                    }
                }
                return {
                    text: t(),
                    button: t(!0)
                }
            }

            function N(e, t) {
                var a, n = e,
                    o = n.getRepeatableBinding("repeatable1").sub(t);
                a = (0, p.getThemeFeature)("leftAlignColumnsMedia") ? "text1" : "text1 text2 text3";
                var i = n.sbUniformTextAlignment(a, {
                    parentBinding: o
                });
                return "glow" === v ? "s-mhi ".concat(i, " fourteen columns offset-one") : "s-mhi ".concat(i)
            }

            function w(e) {
                return e < 2 ? "s-mh" : function(t) {
                    var a = t,
                        n = a.getRepeatableBinding("repeatable1"),
                        o = "";
                    return (0, p.getThemeFeature)("leftAlign") && n.get().size < e && (o = a.sbUniformTextAlignment("text1 text2")), "s-mh ".concat(o)
                }
            }

            function x(e) {
                return {
                    text: function() {
                        return b(e)
                    },
                    button: function() {
                        return b(g.default.extend({}, e, {
                            buttonClass: "s-text-button"
                        }))
                    }
                }
            }

            function k(e) {
                return x({
                    repeatableClass: w(e.columnsNum),
                    itemClass: (0, p.generateItemClassByColumnsNum)(e.columnsNum),
                    mediaClass: N
                })
            }

            function E() {
                return x({
                    repeatableClass: "".concat(w(1), " s-layout-normal"),
                    innerItemClass: (0, p.generateItemClassByColumnsNum)(1).replace("no-float", "") + ("persona" === v ? "" : " center"),
                    mediaClass: N
                })
            }
            var L, S = {
                    two: k({
                        columnsNum: 2
                    }),
                    three: k({
                        columnsNum: 3
                    }),
                    four: k({
                        columnsNum: 4
                    }),
                    five: k({
                        columnsNum: 5
                    }),
                    six: k({
                        columnsNum: 6
                    })
                },
                B = {
                    default: {
                        col: S,
                        row: {
                            small: C({
                                mediaColumns: 4
                            }),
                            medium1: C({
                                mediaColumns: 6
                            }),
                            medium2: C({
                                mediaColumns: 8
                            }),
                            large: C({
                                mediaColumns: 10
                            })
                        },
                        media: {
                            center: E(),
                            top: E(),
                            bottom: E(),
                            left: {
                                text: _(11, "left"),
                                button: _(11, "left", !0)
                            },
                            right: {
                                text: _(11, "right"),
                                button: _(11, "right", !0)
                            },
                            alt: {
                                text: _(11, "alt"),
                                button: _(11, "alt", !0)
                            }
                        }
                    },
                    persona: {
                        col: S,
                        row: {
                            small: C({
                                mediaColumns: 3
                            }),
                            medium1: C({
                                mediaColumns: 4
                            }),
                            medium2: C({
                                mediaColumns: 6
                            }),
                            large: C({
                                mediaColumns: 8
                            })
                        },
                        media: {
                            center: E(),
                            left: {
                                text: _(9, "left"),
                                button: _(9, "left", !0)
                            },
                            right: {
                                text: _(9, "right"),
                                button: _(9, "right", !0)
                            },
                            alt: {
                                text: _(9, "alt"),
                                button: _(9, "alt", !0)
                            }
                        }
                    },
                    perspective: (L = {
                        col: {
                            three: {
                                text: function() {
                                    return b({
                                        itemClass: "s-persp-column third"
                                    })
                                },
                                button: function() {
                                    return b({
                                        itemClass: "s-persp-column third",
                                        buttonClass: "s-text-button s-persp-column"
                                    })
                                }
                            }
                        },
                        row: {
                            large: {
                                text: function() {
                                    return b({
                                        mediaClass: "s-persp-column half",
                                        textClass: "s-persp-column half"
                                    })
                                },
                                button: function() {
                                    return b({
                                        mediaClass: "s-persp-column half",
                                        textClass: "s-persp-column half",
                                        buttonClass: "s-text-button"
                                    })
                                }
                            }
                        },
                        media: {
                            center: E()
                        }
                    }, {
                        center: L,
                        mediaLeft: L,
                        mediaRight: L
                    })
                },
                T = (0, p.getLayoutMapping)(B),
                P = {
                    default: {
                        "columns-2col": "col-two-text",
                        "columns-3col": "col-three-text",
                        "columns-4col": "col-four-text",
                        "columns-5col": "col-five-text",
                        "columns-6col": "col-six-text",
                        "columns-": "col-five-text",
                        "media-normal": "media-center-text",
                        "media-mediaLeft": "media-left-text",
                        "media-mediaRight": "media-right-text",
                        "media-alt": "media-alt-text",
                        "media-": "media-center-text",
                        "rows-mediaLeft": "row-medium1-text-left",
                        "rows-mediaRight": "row-medium1-text-right",
                        "rows-alt": "row-medium1-text-alt",
                        "rows-": "row-medium1-text-left"
                    },
                    perspective: {
                        "columns-mediaLeft": "mediaLeft-col-three-text",
                        "columns-mediaRight": "mediaRight-col-three-text",
                        "columns-center": "center-col-three-text",
                        "columns-": "mediaLeft-col-three-text",
                        "rows-mediaLeft": "mediaLeft-row-large-text",
                        "rows-mediaRight": "mediaRight-row-large-text",
                        "rows-center": "center-row-large-text",
                        "rows-": "mediaLeft-row-large-text",
                        "media-mediaLeft": "mediaLeft-media-center-text",
                        "media-mediaRight": "mediaRight-media-center-text",
                        "media-center": "center-media-center-text",
                        "media-": "mediaLeft-media-center-text"
                    }
                },
                I = {
                    default: {
                        col: function(e) {
                            return "col-three-".concat(e)
                        },
                        row: function(e) {
                            return "row-medium1-".concat(e, "-left")
                        },
                        media: function(e) {
                            return "media-center-".concat(e)
                        },
                        bigMedia: function(e) {
                            return "media-bottom-".concat(e)
                        }
                    },
                    perspective: {
                        col: function(e, t) {
                            var a;
                            return (0, s.default)(a = "".concat(e, "-col-three-")).call(a, t)
                        },
                        row: function(e, t) {
                            var a;
                            return (0, s.default)(a = "".concat(e, "-row-large-")).call(a, t)
                        },
                        media: function(e, t) {
                            var a;
                            return (0, s.default)(a = "".concat(e, "-media-center-")).call(a, t)
                        }
                    }
                };
            t.default = {
                getDefaultLayoutKey: function(e, t, a) {
                    var n, o;
                    if (t = t || "", (T[e] || T.default)[t]) return t;
                    if (a && (n = (P[e] || P.default)[(0, s.default)(o = "".concat(a, "-")).call(o, t)]), !n) {
                        var i = -1 !== (0, d.default)(t).call(t, "button") ? "button" : "text",
                            l = "perspective" === e ? 1 : 0,
                            r = t.split("-"),
                            u = (I[e] || I.default)[r[l]];
                        n = "perspective" === e ? u ? u(r[0], i) : "" : u ? u(i) : ""
                    }
                    return n || (n = (0, f.default)(T[e] || T.default)[0]), n
                },
                getLayout: function(e, t) {
                    return (T[e] || T.default)[t] || h || y
                },
                getLayoutOptions: function(e) {
                    return B[e] || B.default
                }
            }, e.exports = t.default
        },
        309955: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            });
            var n = ["pricing-layout-1", "pricing-layout-2", "pricing-layout-3", "pricing-layout-4"],
                o = {
                    default: {
                        layouts: n
                    }
                },
                i = {
                    getLayout: function(e) {
                        return {
                            itemClass: n[e] || n[0]
                        }
                    },
                    getLayoutOptions: function(e) {
                        return o[e] || o.default
                    }
                };
            t.default = i, e.exports = t.default
        },
        418972: function(e, t, a) {
            "use strict";
            var n = a(223765),
                o = a(752424),
                i = a(663978),
                l = a(834074),
                r = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            }), a(569600);
            var s = a(51942),
                u = (0, r.default)(s),
                d = a(686902),
                c = (0, r.default)(d),
                f = a(678580),
                m = (0, r.default)(f),
                g = (function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = p(t);
                    if (a && a.has(e)) return a.get(e);
                    var o = {},
                        r = i && l;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? l(e, s) : null;
                            u && (u.get || u.set) ? i(o, s, u) : o[s] = e[s]
                        }
                    o.default = e, a && a.set(e, o)
                }(a(914578)), a(766463));

            function p(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    a = new o;
                return (p = function(e) {
                    return e ? a : t
                })(e)
            }
            var h = {
                    itemClass: "columns half-fixed no-float"
                },
                v = {
                    default: ["four", "four", "four", "four", "fifth", "third", "four", "four", "fifth"],
                    persona: ["three", "three", "three", "three", "four", "four", "three", "three", "four"]
                },
                y = (0, g.getThemeName)(),
                b = function() {
                    return h
                },
                _ = function(e) {
                    return (0, u.default)({}, h, e)
                },
                C = function(e) {
                    return e.get().size
                },
                N = {
                    default: {
                        horizontal: function(e) {
                            var t = C(e),
                                a = [];
                            return a.push(function(e, t) {
                                var a = e;
                                v[a] || (a = "default");
                                var n = t - 1;
                                return v[a][n] || (n = v[a].length - 1), v[a][n]
                            }(y, t)), "persona" === y ? 5 == t || 6 == t || 9 == t ? a.push("hide-linker-three") : a.push("hide-linker-four") : 6 == t ? a.push("hide-linker-three") : 7 == t || 8 == t ? a.push("hide-linker-four") : a.push("hide-linker-five"), a.push("columns"), a.push("no-float"), a.push("process-horizontal-layout"), _({
                                itemClass: a.join(" ")
                            })
                        },
                        vertical: function() {
                            var e = ["eight"];
                            return "perspective" === y ? e.push("s-persp-column") : e.push("columns"), e.push("no-float"), e.push("process-vertical-layout"), _({
                                itemClass: e.join(" ")
                            })
                        }
                    }
                },
                w = (0, g.getLayoutMapping)(N),
                x = {
                    getDefaultLayoutKey: function(e, t) {
                        var a = (0, c.default)(w[e] || w.default);
                        return (0, m.default)(a).call(a, t) ? t : a[0]
                    },
                    getLayout: function(e, t) {
                        return (w[e] || w.default)[t] || h || b
                    },
                    getLayoutOptions: function(e) {
                        return N[e] || N.default
                    },
                    getItemSize: C
                };
            t.default = x, e.exports = t.default
        },
        531974: function(e, t, a) {
            "use strict";
            var n = a(223765),
                o = a(752424),
                i = a(663978),
                l = a(834074),
                r = a(60530)(a(60530));
            i(t, "__esModule", {
                value: !0
            });
            var s = a(51942),
                u = (0, r.default)(s),
                d = a(981643),
                c = (0, r.default)(d),
                f = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = g(t);
                    if (a && a.has(e)) return a.get(e);
                    var o = {},
                        r = i && l;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = r ? l(e, s) : null;
                            u && (u.get || u.set) ? i(o, s, u) : o[s] = e[s]
                        }
                    return o.default = e, a && a.set(e, o), o
                }(a(914578)),
                m = a(766463);

            function g(e) {
                if ("function" != typeof o) return null;
                var t = new o,
                    a = new o;
                return (g = function(e) {
                    return e ? a : t
                })(e)
            }
            var p = {
                outerContainerClass: "container",
                innerContainerClass: "sixteen columns",
                outerMediaClass: "",
                innerMediaClass: "",
                textClass: "",
                buttonClass: "",
                isSubtitleOnBottom: !0
            };

            function h() {
                return p
            }

            function v(e) {
                return (0, u.default)({}, p, e)
            }

            function y(e) {
                return {
                    normal: e,
                    full: e
                }
            }
            "perspective" === (0, m.getThemeName)() && (p.outerContainerClass = "s-persp-container", p.innerContainerClass = "s-persp-column");
            var b = {
                    default: {
                        center: function(e) {
                            function t(e) {
                                return {
                                    innerMediaClass: "media-wrapper ".concat(e.sbUniformTextAlignment("text1 text2")),
                                    buttonClass: "s-button-group ".concat(e.sbUniformTextAlignment("text1 text2"))
                                }
                            }
                            return {
                                subTop: y((function(a) {
                                    return v(f.extend({}, e, t(a), {
                                        isSubtitleOnBottom: !1
                                    }))
                                })),
                                bottom: y((function(a) {
                                    return v(f.extend({}, e, t(a), {}))
                                })),
                                right: y((function(a) {
                                    return v(f.extend({}, e, t(a), {
                                        outerMediaClass: "sixteen columns media-outer",
                                        textClass: "ten columns no-float",
                                        buttonClass: "six columns no-float s-button-group",
                                        outerContainerClass: "container s-layout-skinny",
                                        innerContainerClass: ""
                                    }))
                                }))
                            }
                        }({})
                    },
                    perspective: {
                        center: function(e) {
                            function t(e) {
                                return {
                                    innerMediaClass: "media-wrapper ".concat(e.sbUniformTextAlignment("text1 text2")),
                                    outerContainerClass: "s-persp-container s-layout-center",
                                    buttonClass: "s-button-group ".concat(e.sbUniformTextAlignment("text1 text2"))
                                }
                            }
                            return {
                                subTop: y((function(a) {
                                    return v(f.extend({}, e, t(a), {
                                        isSubtitleOnBottom: !1
                                    }))
                                })),
                                bottom: y((function(a) {
                                    return v(f.extend({}, e, t(a), {}))
                                }))
                            }
                        }({})
                    }
                },
                _ = (0, m.getLayoutMapping)(b),
                C = {
                    default: {
                        normal: "center-subTop-full",
                        subBottom: "center-bottom-full",
                        withMedia: "center-bottom-full",
                        center: "center-bottom-normal",
                        skinny: "center-right-normal",
                        mediaTop: "center-bottom-normal"
                    }
                };

            function N(e) {
                return b[e] || b.default
            }
            t.default = {
                getDefaultLayoutKey: function(e, t) {
                    var a = (C[e] || C.default)[t = t || ""];
                    return (_[e] || _.default)[t] && (a = t), a || (a = (0, m.getClosestKey)(N(e), t, 3)), a || ((0, c.default)(t).call(t, "button"), a = "center-subTop-normal"), a
                },
                getLayout: function(e, t) {
                    return (_[e] || _.default)[t] || h
                },
                getLayoutOptions: N
            }, e.exports = t.default
        },
        792695: function(e, t, a) {
            "use strict";
            var n = a(663978),
                o = a(60530)(a(60530));
            n(t, "__esModule", {
                value: !0
            });
            var i = a(977766),
                l = (0, o.default)(i);
            a(974916), a(323123);
            var r = a(143393),
                s = ((0, o.default)(r), a(79752));
            (0, o.default)(s), t.default = {
                _getLayoutVariation: function() {
                    return this._getLayoutBinding().get("layout_variation") || ""
                },
                _getFirstLayout: function() {
                    return this._getLayoutVariation().split("-")[0]
                },
                _updateLayout: function(e) {
                    this._getLayoutBinding().sub("layout_variation").set(e)
                },
                _updateLayoutSettings: function(e) {},
                _getLayoutSettings: function() {
                    var e = this._getLayoutBinding().get("display_settings");
                    return e && e.toJS() || {}
                },
                _updatePadding: function(e) {
                    this._getLayoutBinding().sub("padding").set(e)
                },
                _getPadding: function() {
                    var e = this._getLayoutBinding().get("padding");
                    return (e = e && e.toJS ? e.toJS() : e) || {
                        top: "normal",
                        bottom: "normal"
                    }
                },
                _getPaddingClass: function() {
                    var e, t = this._getPadding(),
                        a = "half" === t.top ? "s-top-padding-half" : "none" === t.top ? "s-top-padding-none" : "",
                        n = "half" === t.bottom ? "s-bottom-padding-half" : "none" === t.bottom ? "s-bottom-padding-none" : "";
                    return (0, l.default)(e = "".concat(a, " ")).call(e, n)
                },
                _getLayoutStatusName: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" [e]
                }
            }, e.exports = t.default
        },
        51580: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), a(974916), a(115306), t.default = {
                correctThumbnailPath: function(e) {
                    return e.replace("../../../../public/images/v4", "../../../../images/v4")
                }
            }, e.exports = t.default
        },
        533126: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(234584),
                r = (0, i.default)(l),
                s = a(843296),
                u = (0, i.default)(s),
                d = a(792695),
                c = {
                    mixins: [(0, i.default)(d).default],
                    displayName: "BlockSection",
                    getWholeThemeFeature: function() {
                        var e = u.default.get(r.default.getTheme().get("name"));
                        return null != e ? e.features : void 0
                    },
                    _getLayoutOptions: function() {
                        return []
                    },
                    render: function() {
                        return n("Editor|Make Your Own Section"), n("Editor|Want more control over layouts? Arrange components yourself!"), this.getTemplate().apply(this)
                    }
                };
            t.default = c, e.exports = t.default
        },
        785478: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(981643),
                r = (0, i.default)(l),
                s = a(694473),
                u = (0, i.default)(s),
                d = a(933032),
                c = (0, i.default)(d),
                f = a(973935),
                m = (0, i.default)(f),
                g = a(818166),
                p = (0, i.default)(g),
                h = a(234584),
                v = (0, i.default)(h),
                y = a(183123),
                b = (0, i.default)(y),
                _ = a(381947),
                C = (0, i.default)(_),
                N = a(143393),
                w = (0, i.default)(N),
                x = a(792695),
                k = (0, i.default)(x),
                E = a(109245),
                L = (0, i.default)(E),
                S = a(914578),
                B = (0, i.default)(S),
                T = a(634899),
                P = !1,
                I = {
                    mixins: [k.default],
                    displayName: "BlogSection",
                    waypointHandler: function() {
                        var e = this._getLayoutProps().layoutVariation;
                        if (!P && p.default.getSections().length < 3 && -1 !== (0, r.default)(T.ShowTooltipVariations).call(T.ShowTooltipVariations, e)) {
                            var t, a = (0, u.default)(t = $(m.default.findDOMNode(this))).call(t, ".s-layout .s-component-editor");
                            return a.tooltip({
                                placement: "left",
                                trigger: "manual",
                                extraClassNames: "swing-right",
                                title: n("Blog|Try different layouts for blog!")
                            }), P = !0, a.tooltip("show"), a.one("mouseenter", (function() {
                                return a.tooltip("destroy")
                            })), (0, c.default)((function() {
                                return a.tooltip("destroy")
                            }), 2e4)
                        }
                    },
                    componentWillMount: function() {
                        var e = this._getLayoutProps().layoutVariation,
                            t = v.default.getThemeName();
                        this._getLayoutBinding().sub("layout_variation").set(L.default.getDefaultLayoutKey(t, e));
                        var a = this.getDefaultBinding().get("components.blog1").toJS();
                        B.default.isEmpty(a.category) && this.getDefaultBinding().set("components.blog1.category", w.default.fromJS({
                            id: "all",
                            name: n("Section|All Categories")
                        }))
                    },
                    _getWaypointProps: function() {
                        return {
                            handler: this.waypointHandler,
                            offset: 20
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = v.default.getThemeName();
                        return L.default.getLayoutOptions(e)
                    },
                    _isBlogCategoryFeatureAvailable: function() {
                        return C.default.canUse("blog_category") && b.default.isBlogCategoryRolledOut()
                    },
                    render: function() {
                        return n("Editor|Simple Blog"), n("Editor|Write beautiful blog posts that open in a new page."), this.getTemplate().apply(this)
                    }
                };
            t.default = I, e.exports = t.default
        },
        854673: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(981643),
                r = (0, i.default)(l),
                s = a(694473),
                u = (0, i.default)(s),
                d = a(933032),
                c = (0, i.default)(d),
                f = a(973935),
                m = (0, i.default)(f),
                g = a(818166),
                p = (0, i.default)(g),
                h = a(234584),
                v = (0, i.default)(h),
                y = a(183123),
                b = (0, i.default)(y),
                _ = a(381947),
                C = (0, i.default)(_),
                N = a(143393),
                w = (0, i.default)(N),
                x = a(792695),
                k = (0, i.default)(x),
                E = a(109245),
                L = (0, i.default)(E),
                S = a(914578),
                B = (0, i.default)(S),
                T = a(634899),
                P = !1,
                I = {
                    mixins: [k.default],
                    displayName: "BlogSection",
                    waypointHandler: function() {
                        var e = this._getLayoutProps().layoutVariation;
                        if (!P && p.default.getSections().length < 3 && -1 !== (0, r.default)(T.ShowTooltipVariations).call(T.ShowTooltipVariations, e)) {
                            var t, a = (0, u.default)(t = $(m.default.findDOMNode(this))).call(t, ".s-layout .s-component-editor");
                            return a.tooltip({
                                placement: "left",
                                trigger: "manual",
                                extraClassNames: "swing-right",
                                title: n("Blog|Try different layouts for blog!")
                            }), P = !0, a.tooltip("show"), a.one("mouseenter", (function() {
                                return a.tooltip("destroy")
                            })), (0, c.default)((function() {
                                return a.tooltip("destroy")
                            }), 2e4)
                        }
                    },
                    componentWillMount: function() {
                        var e = this._getLayoutProps().layoutVariation,
                            t = v.default.getThemeName();
                        this._getLayoutBinding().sub("layout_variation").set(L.default.getDefaultLayoutKey(t, e));
                        var a = this.getDefaultBinding().get("components.blog1").toJS();
                        B.default.isEmpty(a.category) && this.getDefaultBinding().set("components.blog1.category", w.default.fromJS({
                            id: "all",
                            name: n("Section|All Categories")
                        }))
                    },
                    _getWaypointProps: function() {
                        return {
                            handler: this.waypointHandler,
                            offset: 20
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = v.default.getThemeName();
                        return L.default.getLayoutOptions(e)
                    },
                    _isBlogCategoryFeatureAvailable: function() {
                        return C.default.canUse("blog_category") && b.default.isBlogCategoryRolledOut()
                    },
                    render: function() {
                        return n("Editor|Simple Blog %{var}", {
                            var: 1
                        }), n("Editor|Write beautiful blog posts that open in a new page."), this.getTemplate().apply(this)
                    }
                };
            t.default = I, e.exports = t.default
        },
        396204: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(981643),
                r = (0, i.default)(l),
                s = a(694473),
                u = (0, i.default)(s),
                d = a(933032),
                c = (0, i.default)(d),
                f = a(973935),
                m = (0, i.default)(f),
                g = a(818166),
                p = (0, i.default)(g),
                h = a(234584),
                v = (0, i.default)(h),
                y = a(183123),
                b = (0, i.default)(y),
                _ = a(381947),
                C = (0, i.default)(_),
                N = a(143393),
                w = (0, i.default)(N),
                x = a(792695),
                k = (0, i.default)(x),
                E = a(109245),
                L = (0, i.default)(E),
                S = a(634899),
                B = a(914578),
                T = (0, i.default)(B),
                P = !1,
                I = {
                    mixins: [k.default],
                    displayName: "BlogSection",
                    waypointHandler: function() {
                        var e = this._getLayoutProps().layoutVariation;
                        if (!P && p.default.getSections().length < 3 && -1 !== (0, r.default)(S.ShowTooltipVariations).call(S.ShowTooltipVariations, e)) {
                            var t, a = (0, u.default)(t = $(m.default.findDOMNode(this))).call(t, ".s-layout .s-component-editor");
                            return a.tooltip({
                                placement: "left",
                                trigger: "manual",
                                extraClassNames: "swing-right",
                                title: n("Blog|Try different layouts for blog!")
                            }), P = !0, a.tooltip("show"), a.one("mouseenter", (function() {
                                return a.tooltip("destroy")
                            })), (0, c.default)((function() {
                                return a.tooltip("destroy")
                            }), 2e4)
                        }
                    },
                    componentWillMount: function() {
                        var e = this._getLayoutProps().layoutVariation,
                            t = v.default.getThemeName();
                        this._getLayoutBinding().sub("layout_variation").set(L.default.getDefaultLayoutKey(t, e));
                        var a = this.getDefaultBinding().get("components.blog1").toJS();
                        T.default.isEmpty(a.category) && this.getDefaultBinding().set("components.blog1.category", w.default.fromJS({
                            id: "all",
                            name: n("Section|All Categories")
                        }))
                    },
                    _getWaypointProps: function() {
                        return {
                            handler: this.waypointHandler,
                            offset: 20
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = v.default.getThemeName();
                        return L.default.getLayoutOptions(e)
                    },
                    _isBlogCategoryFeatureAvailable: function() {
                        return C.default.canUse("blog_category") && b.default.isBlogCategoryRolledOut()
                    },
                    render: function() {
                        return n("Editor|Simple Blog %{var}", {
                            var: 2
                        }), n("Editor|Write beautiful blog posts that open in a new page."), this.getTemplate().apply(this)
                    }
                };
            t.default = I, e.exports = t.default
        },
        134469: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(981643),
                r = (0, i.default)(l),
                s = a(694473),
                u = (0, i.default)(s),
                d = a(933032),
                c = (0, i.default)(d),
                f = a(973935),
                m = (0, i.default)(f),
                g = a(818166),
                p = (0, i.default)(g),
                h = a(234584),
                v = (0, i.default)(h),
                y = a(183123),
                b = (0, i.default)(y),
                _ = a(381947),
                C = (0, i.default)(_),
                N = a(143393),
                w = (0, i.default)(N),
                x = a(792695),
                k = (0, i.default)(x),
                E = a(109245),
                L = (0, i.default)(E),
                S = a(914578),
                B = (0, i.default)(S),
                T = a(634899),
                P = !1,
                I = {
                    mixins: [k.default],
                    displayName: "BlogSection",
                    waypointHandler: function() {
                        var e = this._getLayoutProps().layoutVariation;
                        if (!P && p.default.getSections().length < 3 && -1 !== (0, r.default)(T.ShowTooltipVariations).call(T.ShowTooltipVariations, e)) {
                            var t, a = (0, u.default)(t = $(m.default.findDOMNode(this))).call(t, ".s-layout .s-component-editor");
                            return a.tooltip({
                                placement: "left",
                                trigger: "manual",
                                extraClassNames: "swing-right",
                                title: n("Blog|Try different layouts for blog!")
                            }), P = !0, a.tooltip("show"), a.one("mouseenter", (function() {
                                return a.tooltip("destroy")
                            })), (0, c.default)((function() {
                                return a.tooltip("destroy")
                            }), 2e4)
                        }
                    },
                    componentWillMount: function() {
                        var e = this._getLayoutProps().layoutVariation,
                            t = v.default.getThemeName();
                        this._getLayoutBinding().sub("layout_variation").set(L.default.getDefaultLayoutKey(t, e));
                        var a = this.getDefaultBinding().get("components.blog1").toJS();
                        B.default.isEmpty(a.category) && this.getDefaultBinding().set("components.blog1.category", w.default.fromJS({
                            id: "all",
                            name: n("Section|All Categories")
                        }))
                    },
                    _getWaypointProps: function() {
                        return {
                            handler: this.waypointHandler,
                            offset: 20
                        }
                    },
                    _getLayoutOptions: function() {
                        var e = v.default.getThemeName();
                        return L.default.getLayoutOptions(e)
                    },
                    _isBlogCategoryFeatureAvailable: function() {
                        return C.default.canUse("blog_category") && b.default.isBlogCategoryRolledOut()
                    },
                    render: function() {
                        return n("Editor|Simple Blog %{var}", {
                            var: 3
                        }), n("Editor|Write beautiful blog posts that open in a new page."), this.getTemplate().apply(this)
                    }
                };
            t.default = I, e.exports = t.default
        },
        264096: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(481486), e.exports = t.default
        },
        91252: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(930742), e.exports = t.default
        },
        612953: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(164385), e.exports = t.default
        },
        425192: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(792695),
                r = {
                    mixins: [(0, i.default)(l).default],
                    displayName: "DonationSection",
                    _getLayoutOptions: function() {
                        return []
                    },
                    render: function() {
                        return n("Editor|Simple Store"), n("Editor|Sell products right on your site! Manage orders, payments, and more."), this.getTemplate().apply(this)
                    }
                };
            t.default = r, e.exports = t.default
        },
        780847: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(381947),
                r = (0, i.default)(l),
                s = a(234584),
                u = (0, i.default)(s),
                d = a(792695),
                c = {
                    mixins: [(0, i.default)(d).default],
                    displayName: "EcommerceSection",
                    _showLayoutButton: function() {
                        return r.default.canUse("ecommerce_layout")
                    },
                    componentWillMount: function() {
                        var e = u.default.getThemeName(),
                            t = a(452255);
                        this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e, this._getLayoutVariation()))
                    },
                    _getLayoutOptions: function() {
                        var e = a(452255),
                            t = u.default.getThemeName();
                        return e.getLayoutOptions(t)
                    },
                    render: function() {
                        return n("Editor|Simple Store"), n("Editor|Sell products right on your site! Manage orders, payments, and more."), this.getTemplate().apply(this)
                    }
                };
            t.default = c, e.exports = t.default
        },
        583617: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(17342), e.exports = t.default
        },
        352596: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(152160), e.exports = t.default
        },
        530737: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(152160), e.exports = t.default
        },
        321479: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(152160), e.exports = t.default
        },
        984161: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(152160), e.exports = t.default
        },
        837947: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(848388), e.exports = t.default
        },
        321178: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(848388), e.exports = t.default
        },
        216177: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(848388), e.exports = t.default
        },
        37509: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(848388), e.exports = t.default
        },
        435685: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(848388), e.exports = t.default
        },
        939947: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(848388), e.exports = t.default
        },
        188717: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(259476), e.exports = t.default
        },
        980190: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(792695),
                r = {
                    mixins: [(0, i.default)(l).default],
                    displayName: "HTMLSection",
                    _getLayoutOptions: function() {
                        return []
                    },
                    render: function() {
                        return n("Editor|App Store & HTML"), n("Editor|Embed a map, a calendar, a document, a form or any HTML code!"), this.getTemplate().apply(this)
                    }
                };
            t.default = r, e.exports = t.default
        },
        401062: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(812077),
                r = (0, i.default)(l),
                s = a(205872),
                u = (0, i.default)(s),
                d = a(678580),
                c = (0, i.default)(d),
                f = a(703649),
                m = (0, i.default)(f),
                g = a(2991),
                p = (0, i.default)(g);
            a(974916), a(323123), a(569600);
            var h = a(366757),
                v = (0, i.default)(h),
                y = a(357646),
                b = (0, i.default)(y),
                _ = a(328043),
                C = (0, i.default)(_),
                N = a(186613),
                w = (0, i.default)(N),
                x = a(149008),
                k = (0, i.default)(x),
                E = a(234584),
                L = (0, i.default)(E),
                S = a(183123),
                B = (0, i.default)(S),
                T = a(792695),
                P = {
                    mixins: [(0, i.default)(T).default],
                    displayName: "ContactsSection",
                    componentWillMount: function() {
                        var e, t, n, o = L.default.getThemeName(),
                            i = this._getLayoutVariation();
                        this.getDefaultBinding().get("template_name"), i.split("-").length >= 2 && ("perspective" === o ? (0, c.default)(e = ["mediaLeft", "mediaRight", "center"]).call(e, i.split("-")[0]) || (i = "center-".concat(i)) : (0, c.default)(t = ["mediaLeft", "mediaRight", "center"]).call(t, i.split("-")[0]) && (i = (0, m.default)(n = i.split("-")).call(n, 1).join("-")));
                        var l = a(46366);
                        this._getLayoutBinding().sub("layout_variation").set(l.getDefaultLayoutKey(o, i))
                    },
                    _getLayoutOptions: function() {
                        var e = L.default.getThemeName();
                        return a(46366).getLayoutOptions(e)
                    },
                    _renderRepeatable: function(e) {
                        var t, n, o = this,
                            i = a(46366),
                            l = L.default.getThemeName(),
                            s = this._getLayoutVariation(),
                            d = this.getComponentBinding(e),
                            c = this.getRepeatableBinding(e);
                        "function" == typeof i.getLayout(l, s) && (n = i.getLayout(l, s)(c));
                        var f = this.getComponentProps("repeatable1");
                        return v.default.createElement(w.default, (0, u.default)({
                            className: "s-mh".concat("editor" === d.get("_state") ? " s-arranging" : "")
                        }, f), (0, p.default)(t = d.get("list")).call(t, (function(e, t) {
                            var a = c.sub(t),
                                i = n.itemClass,
                                l = n.naturalImage;
                            return v.default.createElement(k.default, (0, u.default)({
                                className: i,
                                binding: {
                                    default: a,
                                    listBinding: c
                                },
                                index: t
                            }, o._getRepeatableItemProps(c, t)), (0, r.default)("div", {
                                className: "s-item-media-group s-mhi"
                            }, void 0, v.default.createElement(C.default, (0, u.default)({
                                size: "480x960>",
                                moreIcons: !0,
                                naturalSize: l
                            }, o.getReduxComponentProps("image1", a)))), o.sbHasContent("text1", {
                                parentBinding: a
                            }) && (B.default.getIsSxl() || !l) && (0, r.default)("div", {
                                className: "s-item-text-group"
                            }, void 0, v.default.createElement(b.default, (0, u.default)({
                                tagName: "div",
                                applyWordBreaks: !0,
                                textType: "body",
                                sizeType: "body"
                            }, o.getComponentProps("text1", a)))))
                        })).toArray())
                    },
                    render: function() {
                        return n("Editor|Contact"), n("Editor|A list of small icons. Good for social media."), this.getTemplate().apply(this)
                    }
                };
            t.default = P, e.exports = t.default
        },
        114208: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(196771), e.exports = t.default
        },
        549212: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(196771), e.exports = t.default
        },
        485253: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(196771), e.exports = t.default
        },
        991485: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(381947),
                r = (0, i.default)(l),
                s = a(234584),
                u = (0, i.default)(s),
                d = a(452255),
                c = (0, i.default)(d),
                f = a(792695),
                m = {
                    mixins: [(0, i.default)(f).default],
                    displayName: "PortfolioSection",
                    componentWillMount: function() {
                        var e = u.default.getThemeName(),
                            t = this._getLayoutVariation();
                        if (c.default.isOldLayoutKey(e, t)) {
                            var a = c.default.getDefaultLayoutKey(e, t);
                            this._updateLayout(a)
                        }
                    },
                    _showLayoutButton: function() {
                        return r.default.canUse("portfolio_layout")
                    },
                    _getLayoutOptions: function() {
                        var e = u.default.getThemeName();
                        return c.default.getLayoutOptions(e)
                    },
                    render: function() {
                        return n("Editor|Product Showcase"), n("Editor|Add details and descriptions to each product."), this.getTemplate().apply(this)
                    }
                };
            t.default = m, e.exports = t.default
        },
        416534: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(984806), e.exports = t.default
        },
        433006: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(126711), e.exports = t.default
        },
        96152: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(100570), e.exports = t.default
        },
        977741: function(e, t, a) {
            "use strict";
            a(663978)(t, "__esModule", {
                value: !0
            }), t.default = a(65671), e.exports = t.default
        },
        612535: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l = a(812077),
                r = (0, i.default)(l),
                s = a(2991),
                u = (0, i.default)(s),
                d = a(359340),
                c = (0, i.default)(d),
                f = a(981643),
                m = (0, i.default)(f),
                g = a(666419),
                p = (0, i.default)(g),
                h = a(31238),
                v = (0, i.default)(h),
                y = a(977766),
                b = (0, i.default)(y),
                _ = a(366757),
                C = ((0, i.default)(_), a(792695)),
                N = (0, i.default)(C),
                w = a(921003),
                x = (0, i.default)(w),
                k = a(156503),
                E = (0, i.default)(k),
                L = a(234584),
                S = (0, i.default)(L),
                B = a(11945),
                T = a(104802),
                P = "noForeground",
                I = (0, B.getIsEditorRtlLayout)(),
                O = {
                    mixins: [N.default],
                    displayName: "SliderSection",
                    sliderListener: null,
                    componentWillMount: function() {
                        this.layoutOptions = ["left", "right", "noImage"], this.layoutName = this._getLayoutProps().binding.get("layout_variation"), this.layoutName === P && this.layoutOptions.push(P)
                    },
                    getInitialState: function() {
                        return {
                            imgEditorState: ""
                        }
                    },
                    setStateFunc: function(e) {
                        this.setState({
                            imgEditorState: e || ""
                        })
                    },
                    mapStateToProps: function(e) {
                        return "s5-theme" === S.default.getThemeName() ? {
                            navHeight: E.default.get("navHeight"),
                            navOverlapsContent: (0, T.getNavOverlapsContent)(e),
                            navTheme: (0, T.getNavTheme)(e)
                        } : {}
                    },
                    componentDidMount: function() {
                        var e = this;
                        this.sliderListener = this.props.binding.addListener("components.slider1.list", (function(t) {
                            var a = t.getPreviousValue(),
                                n = t.getCurrentValue(),
                                o = e.getBinding().get("components.slideSettings.layout_variation");
                            if (a && n && (!a.equals || !a.equals(n)) && e.layoutName != P && o != P) {
                                var i = e._getSliderLayoutArr(),
                                    l = {};
                                (0, u.default)(a).call(a, (function(e, t) {
                                    l[e.get("id")] = i[t] || ""
                                }));
                                var r = [];
                                (0, u.default)(n).call(n, (function(e) {
                                    l[e.get("id")] && r.push(l[e.get("id")])
                                })), e._updateLayout((0, c.default)(r))
                            }
                        }))
                    },
                    componentWillUnmount: function() {
                        this.props.binding.removeListener(this.sliderListener)
                    },
                    _showMediaWrapper: function(e) {
                        var t = ["noImage", P];
                        return -1 === (0, m.default)(t).call(t, e)
                    },
                    _sbAnyHasContent: function(e, t) {
                        var a = this.getRepeatableBinding("slider1");
                        return Boolean(this.sbAnyHasContent(t, {
                            parentBinding: a.sub(e)
                        }))
                    },
                    _sbHasMediaContent: function(e) {
                        var t = this.getRepeatableBinding("slider1");
                        return Boolean(this.sbHasContent("media1", {
                            parentBinding: t.sub(e)
                        }))
                    },
                    _getSliderLayoutArr: function() {
                        var e = this._getLayoutVariation(),
                            t = [];
                        if (-1 !== (0, m.default)(e).call(e, "[")) try {
                            t = JSON.parse(e)
                        } catch (e) {} else {
                            e || (e = this.layoutOptions[1]);
                            var a = this.getRepeatableBinding("slider1").get().size;
                            t = (0, p.default)(new Array(a), (function() {
                                return e
                            }))
                        }
                        return t
                    },
                    _imageRatioWarnning: function(e) {
                        var t = this.getRepeatableBinding("slider1"),
                            a = t.sub("".concat(e, ".components.background1")),
                            o = a.get("w"),
                            i = a.get("h");
                        a.get("url"), o && i || (o = 16, i = 9);
                        var l = n("Editor|This image is too tall! Please upload a banner with a wider aspect ratio."),
                            r = (0, v.default)(o / i);
                        if (r < 1.25) return l;
                        if (t.get().size < 2) return "";
                        var s = t.sub("0.components.background1");
                        l = n("Editor|Your banner images are different sizes! You should keep all banner images the same size.");
                        var u = s.get("w"),
                            d = s.get("h");
                        u && d || (u = 16, d = 9);
                        var c = (0, v.default)(u / d);
                        return e > 0 && Math.abs(r - c) > .2 ? l : ""
                    },
                    _getSliderLayout: function(e) {
                        var t = this._getSliderLayoutArr()[e];
                        return null != t ? t : this.layoutOptions[1]
                    },
                    _isBannerSection: function() {
                        return this.layoutName === P
                    },
                    isS5FirstSection: function() {
                        return !("s5-theme" !== S.default.getThemeName() || !this.props.navOverlapsContent || 0 !== this.props.index)
                    },
                    getDefaultS5NavH: function() {
                        var e, t, a = this.props.navTheme,
                            n = a.get("name"),
                            o = a.get("padding"),
                            i = a.get("fontSize");
                        return {
                            "topBlock-small-small": 34,
                            "topBlock-small-medium": 36,
                            "topBlock-small-large": 39,
                            "topBlock-medium-small": 44,
                            "topBlock-medium-medium": 46,
                            "topBlock-medium-large": 49,
                            "topBlock-large-small": 57,
                            "topBlock-large-medium": 59,
                            "topBlock-large-large": 62,
                            "topBar-small-small": 80
                        }[(0, b.default)(e = (0, b.default)(t = "".concat(n, "-")).call(t, o, "-")).call(e, i)] || 0
                    },
                    getSectionStyle: function() {
                        return "s5-theme" === S.default.getThemeName() && this.props.navOverlapsContent && 0 === this.props.index ? {
                            paddingTop: this.props.navHeight || this.getDefaultS5NavH()
                        } : {}
                    },
                    _renderSliderLayoutBtn: function(e) {
                        var t, a = this,
                            o = this._getSliderLayoutArr(),
                            i = o[e],
                            l = (0, m.default)(t = this.layoutOptions).call(t, i),
                            s = this._getLayoutStatusName(l) || "B";
                        return (0, r.default)("div", {
                            className: "s-component s-layout"
                        }, void 0, (0, r.default)("div", {
                            className: "s-component-editor"
                        }, void 0, (0, r.default)(x.default, {
                            className: "center clickable small title layout-button",
                            onTap: function() {
                                return -1 === l && (l = 0), l === a.layoutOptions.length - 1 && (l = -1), o[e] = a.layoutOptions[++l], a._updateLayout((0, c.default)(o))
                            },
                            rel: I ? "tooltip-right" : "tooltip-left",
                            title: n("Editor|Click to change layouts")
                        }, void 0, (0, r.default)("span", {}, void 0, n("Layout"), (0, r.default)("span", {
                            className: "layout-status"
                        }, void 0, s)))))
                    },
                    render: function() {
                        return this.getTemplate().apply(this)
                    }
                };
            t.default = O, e.exports = t.default
        },
        265892: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(686902),
                i = a(14310),
                l = a(620116),
                r = a(834074),
                s = a(778914),
                u = a(239649),
                d = a(820368),
                c = a(663978),
                f = a(60530)(a(60530));
            c(t, "__esModule", {
                value: !0
            });
            var m, g = a(359036),
                p = (0, f.default)(g),
                h = a(812077),
                v = (0, f.default)(h),
                y = a(487672),
                b = (0, f.default)(y),
                _ = a(51942),
                C = (0, f.default)(_),
                N = a(2991),
                w = (0, f.default)(N),
                x = a(492762),
                k = (0, f.default)(x),
                E = a(277149),
                L = (0, f.default)(E),
                S = a(366757),
                B = ((0, f.default)(S), a(294184)),
                T = (0, f.default)(B),
                P = a(399069),
                I = (0, f.default)(P),
                O = a(230139),
                M = (0, f.default)(O),
                D = a(461853),
                R = (0, f.default)(D),
                A = a(818166),
                U = (0, f.default)(A),
                H = a(825143),
                F = (0, f.default)(H),
                V = a(792656),
                Z = (0, f.default)(V),
                z = a(926941),
                K = (0, f.default)(z),
                W = a(851922),
                j = (0, f.default)(W),
                G = a(381633),
                Y = a(754546),
                q = (0, f.default)(Y),
                J = a(827057);

            function Q(e, t) {
                var a = o(e);
                if (i) {
                    var n = i(e);
                    t && (n = l(n).call(n, (function(t) {
                        return r(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a, n = null != arguments[t] ? arguments[t] : {};
                    if (t % 2) s(a = Q(Object(n), !0)).call(a, (function(t) {
                        (0, b.default)(e, t, n[t])
                    }));
                    else if (u) d(e, u(n));
                    else {
                        var o;
                        s(o = Q(Object(n))).call(o, (function(t) {
                            c(e, t, r(n, t))
                        }))
                    }
                }
                return e
            }
            var X = I.default.create({
                    displayName: "BackgroundColor",
                    mixins: [(0, M.default)("editor"), R.default.enableAfterMount()],
                    bobcatPropTypes: F.default.bobcatPropTypes,
                    getBobcatDefaultProps: F.default.getBobcatDefaultProps,
                    hasBgColor: !1,
                    componentDidMount: function() {
                        var e = this.getData("backgroundColor"),
                            t = e && e.get("type");
                        if ("custom" === t) {
                            var a = e.get("value");
                            this.updateMeta({
                                customColor: a,
                                selectedColorType: t
                            })
                        }
                        e && 0 === e.size && this.updateData({
                            backgroundColor: null
                        })
                    },
                    _previewBackgroundColor: function(e) {
                        var t = e.color,
                            a = e.index,
                            n = void 0 === a ? null : a,
                            o = e.type,
                            i = void 0 === o ? null : o;
                        t && (this.hasBgColor = Boolean(this.getData("backgroundColor")), this.props.storePreviewData(), this.updateData((0, C.default)({}, {
                            backgroundColor: {
                                themeColorRangeIndex: n,
                                value: t,
                                type: i
                            }
                        }, this._clearImageUrlMixin())))
                    },
                    _restorePreviewData: function(e) {
                        this.props.restorePreviewData(e, !this.hasBgColor)
                    },
                    _setBackgroundColor: function(e) {
                        var t = e.color,
                            a = e.index,
                            n = void 0 === a ? null : a,
                            o = e.type,
                            i = void 0 === o ? null : o;
                        t && (this.updateData((0, C.default)({}, {
                            backgroundColor: "remove" === i ? null : {
                                themeColorRangeIndex: n,
                                value: t,
                                type: i
                            }
                        }, this._clearImageUrlMixin())), this.updateMeta({
                            customColor: "custom" === i ? t : this.getMeta("customColor"),
                            selectedColorType: i
                        }), this.props.clearPreviewData(), this.savePage())
                    },
                    _clearImageUrlMixin: function(e) {
                        return (0, C.default)({
                            s: null,
                            storage: null,
                            storageKey: null,
                            format: null,
                            focus: null,
                            w: null,
                            h: null,
                            url: "",
                            videoHtml: "",
                            sizing: "",
                            textColor: "",
                            userClassName: "",
                            useImage: !1
                        }, e)
                    },
                    _renderColorList: function(e) {
                        var t = this,
                            a = this.getData("backgroundColor"),
                            n = Z.default.getBackgroundColorString(a);
                        return (0, v.default)("div", {
                            className: "color-list"
                        }, void 0, (0, w.default)(e).call(e, (function(e) {
                            var a = "string" == typeof e ? e : e.value,
                                o = "string" == typeof e ? {} : e;
                            return (0, v.default)("div", {
                                className: (0, T.default)("color-item", {
                                    "color-selected": a === n
                                }),
                                style: {
                                    background: a
                                },
                                onMouseEnter: function() {
                                    return t._previewBackgroundColor($({
                                        color: a
                                    }, o))
                                },
                                onMouseLeave: t._restorePreviewData,
                                onClick: function() {
                                    return t._setBackgroundColor($({
                                        color: a
                                    }, o))
                                }
                            })
                        })))
                    },
                    _getThemeColors: function(e, t) {
                        var a = new K.default(e),
                            n = (0, z.getDiffLightnessColors)(a.toHsl());
                        return (0, w.default)(n).call(n, (function(e, a) {
                            return {
                                value: e,
                                index: a,
                                type: t
                            }
                        }))
                    },
                    _renderPresetColor: function() {
                        var e = this,
                            t = (0, p.default)(J.PRESET_COLORS),
                            a = this.props.themeColor,
                            n = a.active,
                            o = a.highlight1,
                            i = a.highlight2;
                        if (n) {
                            var l = [],
                                r = [];
                            i && i !== o && (l = this._getThemeColors(i, "highlight2"), (0, k.default)(t).call(t, 1, 0, l)), o && (r = this._getThemeColors(o, "highlight1"), (0, L.default)(l).call(l, (function(e, t) {
                                return (0, z.isSameByDistance)(e.value, r[t].value)
                            })) || (0, k.default)(t).call(t, 1, 0, this._getThemeColors(o, "highlight1")))
                        }
                        return (0, v.default)("div", {
                            className: "preset-color"
                        }, void 0, (0, w.default)(t).call(t, (function(t) {
                            return e._renderColorList(t)
                        })))
                    },
                    _renderCustomColor: function() {
                        var e = this,
                            t = this.getMeta("customColor"),
                            a = this.getData("backgroundColor"),
                            o = a && a.get("value"),
                            i = "#fff";
                        return t && (i = new K.default(t).getTextColor()), (0, v.default)("div", {
                            className: "custom-color"
                        }, void 0, (0, v.default)(G.Popover, {
                            offset: [-5, -6],
                            content: (0, v.default)(q.default, {
                                value: t,
                                hideDefaultColor: !0,
                                usedColor: t || "#fff",
                                selectNullButtonTitle: n("Editor|Remove"),
                                onChange: function(t) {
                                    e._setBackgroundColor({
                                        color: t,
                                        type: t ? "custom" : "remove"
                                    })
                                }
                            }),
                            placement: "leftTop"
                        }, void 0, (0, v.default)("div", {
                            className: (0, T.default)("button no-margin s-btn dark-gray", {
                                selected: o === t
                            }),
                            style: {
                                backgroundColor: t,
                                color: i,
                                padding: "5px"
                            },
                            onMouseEnter: function() {
                                e._previewBackgroundColor({
                                    color: t,
                                    type: "custom"
                                })
                            },
                            onMouseLeave: this._restorePreviewData,
                            onClick: function() {
                                e._setBackgroundColor({
                                    color: t,
                                    type: "custom"
                                })
                            }
                        }, void 0, m || (m = (0, v.default)("i", {
                            className: "entypo-palette"
                        })), " ", n("Editor|Custom"))))
                    },
                    render: function() {
                        var e = this.props.visible;
                        return (0, v.default)("div", {
                            className: "background-editor-color-panel",
                            style: {
                                display: e ? "block" : "none"
                            }
                        }, void 0, (0, v.default)("div", {
                            className: "clearfix mb"
                        }, void 0, this._renderPresetColor(), this._renderCustomColor()))
                    }
                }),
                ee = (0, j.default)(X, [U.default], (function() {
                    return {
                        themeColor: U.default.getCustomColors()
                    }
                }));
            t.default = ee, e.exports = t.default
        },
        825143: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(223765),
                i = (a(686902), a(14310), a(620116), a(834074)),
                l = (a(778914), a(239649), a(820368), a(663978)),
                r = a(752424),
                s = a(60530)(a(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u, d, c, f, m, g, p = a(205872),
                h = (0, s.default)(p),
                v = a(812077),
                y = (0, s.default)(v),
                b = a(487672),
                _ = ((0, s.default)(b), a(981643)),
                C = (0, s.default)(_),
                N = a(694473),
                w = (0, s.default)(N),
                x = a(51942),
                k = (0, s.default)(x),
                E = a(2991),
                L = (0, s.default)(E),
                S = a(977766),
                B = (0, s.default)(S),
                T = a(366757),
                P = (0, s.default)(T),
                I = a(45697),
                O = (0, s.default)(I),
                M = a(692381),
                D = (0, s.default)(M),
                R = a(872278),
                A = (0, s.default)(R),
                U = a(921003),
                H = (0, s.default)(U),
                F = a(176965),
                V = (0, s.default)(F),
                Z = a(223336),
                z = (0, s.default)(Z),
                K = a(914578),
                W = (0, s.default)(K),
                j = a(399069),
                G = (0, s.default)(j),
                Y = a(610292),
                q = ((0, s.default)(Y), a(159508)),
                J = ((0, s.default)(q), a(183123)),
                Q = (0, s.default)(J),
                $ = a(234584),
                X = ((0, s.default)($), a(818166)),
                ee = (0, s.default)(X),
                te = a(792656),
                ae = (0, s.default)(te),
                ne = Ie(a(143268)),
                oe = a(450197),
                ie = ((0, s.default)(oe), Ie(a(144726))),
                le = a(79752),
                re = (0, s.default)(le),
                se = a(230139),
                ue = (0, s.default)(se),
                de = a(817449),
                ce = (0, s.default)(de),
                fe = a(998001),
                me = (0, s.default)(fe),
                ge = a(315321),
                pe = (0, s.default)(ge),
                he = a(539220),
                ve = (0, s.default)(he),
                ye = a(788898),
                be = (0, s.default)(ye),
                _e = a(703599),
                Ce = (0, s.default)(_e),
                Ne = a(169042),
                we = ((0, s.default)(Ne), a(549556)),
                xe = (0, s.default)(we),
                ke = a(971638),
                Ee = a(393516),
                Le = ((0, s.default)(Ee), a(786483)),
                Se = (0, s.default)(Le),
                Be = a(914990),
                Te = (0, s.default)(Be);

            function Pe(e) {
                if ("function" != typeof r) return null;
                var t = new r,
                    a = new r;
                return (Pe = function(e) {
                    return e ? a : t
                })(e)
            }

            function Ie(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== o(e) && "function" != typeof e) return {
                    default: e
                };
                var a = Pe(t);
                if (a && a.has(e)) return a.get(e);
                var n = {},
                    r = l && i;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var u = r ? i(e, s) : null;
                        u && (u.get || u.set) ? l(n, s, u) : n[s] = e[s]
                    }
                return n.default = e, a && a.set(e, n), n
            }
            var Oe = {
                    data: {
                        url: pe.default.url,
                        textColor: O.default.oneOf(["dark", "light", "overlay"]),
                        sizing: O.default.oneOf(["cover", "contain", "tile", "center"]),
                        backgroundVariation: O.default.string,
                        videoUrl: O.default.string,
                        videoHtml: O.default.string,
                        stockKey: O.default.string,
                        binding: O.default.object,
                        h: O.default.number,
                        w: O.default.number,
                        s: O.default.number,
                        storageKey: O.default.string,
                        storage: O.default.oneOf(["ali", "c", "qn", "s"]),
                        format: O.default.oneOf(["jpg", "jpeg", "png", "gif", "bmp", "ico"]),
                        bgClassNames: O.default.array,
                        userClassName: O.default.string,
                        focus: O.default.object,
                        backgroundColor: O.default.any
                    },
                    designer: {
                        size: O.default.string,
                        assetType: O.default.string,
                        minimal: O.default.bool,
                        allowColors: O.default.bool,
                        footerSection: O.default.bool
                    }
                },
                Me = function() {
                    return {
                        data: {
                            url: "",
                            textColor: "light",
                            sizing: "cover",
                            backgroundVariation: "",
                            videoUrl: "",
                            videoHtml: "",
                            userClassName: "",
                            bgClassNames: [],
                            backgroundColor: null
                        },
                        designer: {
                            size: "background",
                            assetType: "background",
                            minimal: !1,
                            allowColors: !0,
                            footerSection: !1
                        }
                    }
                },
                De = G.default.createPageComponent({
                    displayName: "BackgroundEditor",
                    mixins: [(0, ue.default)("editor"), me.default, ce.default],
                    bobcatPropTypes: Oe,
                    getBobcatDefaultProps: Me,
                    componentWillMount: function() {
                        var e = Boolean(Q.default.getMiniProgramAppType());
                        this.backgroundItemSelectionHandlers = {
                            image: null,
                            video: null,
                            color: null
                        }, this.initMeta({
                            currentType: Q.default.getInChina() || !this._hasVideoBg() ? this._hasImage() || e ? "image" : "color" : "video",
                            showVideoPanel: !1,
                            showFocusPanel: !1,
                            showFocusIndicator: !1,
                            customColor: "",
                            selectedColorType: "",
                            deltaPosition: {
                                x: 0,
                                y: 0
                            },
                            imageSize: {
                                width: 0,
                                height: 0,
                                naturalWidth: 0,
                                naturalHeight: 0
                            }
                        })
                    },
                    componentDidMount: function() {
                        if (this.getData("style") && this.updateData({
                                sizing: this.getData("style")
                            }), this.getData("selectedClassName")) {
                            var e = this.getData("selectedClassName"); - 1 !== (0, C.default)(e).call(e, "strikingly-dark-text") ? this.updateData({
                                textColor: "dark"
                            }) : -1 !== (0, C.default)(e).call(e, "strikingly-text-overlay") ? this.updateData({
                                textColor: "overlay"
                            }) : this.updateData({
                                textColor: "light"
                            })
                        }
                    },
                    componentDidUpdate: function(e) {
                        var t = Q.default.getIsBlog() ? (0, z.default)(".s-blog-header").children(".s-background") : (0, z.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper");
                        "normal" === e._state && "editor" === this.props._state && t.addClass("background-editor-opened"), "editor" === e._state && "normal" === this.props._state && (t.removeClass("background-editor-opened"), this._setShowVideoPanel(!1), this._setShowFocusPanel(!1))
                    },
                    componentWillUnmount: function() {
                        this.isState("editor") && this.toggleEditor()
                    },
                    _hasImage: function() {
                        var e = this.props,
                            t = e.wasMinimal,
                            a = (e.defaultValue, e.useImage),
                            n = this.dtProps.url;
                        if (this._dataBeforePreview && (n = this._dataBeforePreview.url), !0 === a && Boolean(n)) return !0;
                        if (!1 === a) return !1;
                        if (void 0 === a) {
                            if (t && !Q.default.getBackgroundForAllSections()) return !1;
                            var o = ie.createImage(this.dtProps).getUrl(this.dsProps.size);
                            return this._dataBeforePreview && (o = ie.createImage(this._dataBeforePreview).getUrl(this.dsProps.size)), ne.imageHasContent(o)
                        }
                    },
                    _hasVideoBg: function() {
                        var e = this.dtProps.videoHtml;
                        return this._dataBeforePreview && (e = this._dataBeforePreview.videoHtml), Boolean(e)
                    },
                    _hasOverlay: function() {
                        return "overlay" === this.dtProps.textColor
                    },
                    _needToShowRemoveButton: function() {
                        var e = this._getCurrentType();
                        return (this._hasImage() || this._hasVideoBg()) && "color" !== e
                    },
                    _needToShowRemoveColorButton: function() {
                        var e = this._getCurrentType(),
                            t = this.dtProps.backgroundColor;
                        return this._dataBeforePreview && (t = this._dataBeforePreview.backgroundColor), "color" === e && t && 0 !== t.size && "white" !== t
                    },
                    _changePositionOfAddVideoPanel: function() {
                        var e = (0, z.default)(this.refs.componentDOM),
                            t = (0, w.default)(e).call(e, ".bg-video-panel"),
                            a = (0, w.default)(e).call(e, ".add-video-btn");
                        t.css({
                            top: "".concat(a.closest(".clearfix").position().top - 31, "px")
                        })
                    },
                    _storePreviewData: function() {
                        Se.default.isBackgroundPreviewOn = !0, this.updateMeta({
                            isPreview: !0
                        }), this._dataBeforePreview = this.getDefaultBinding().toJS()
                    },
                    _clearPreviewData: function() {
                        Se.default.isBackgroundPreviewOn = !1, this.updateMeta({
                            isPreview: !1
                        }), this._dataBeforePreview && (this._dataBeforePreview = null)
                    },
                    _restorePreviewData: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        Se.default.isBackgroundPreviewOn = !1, this.updateMeta({
                            isPreview: !1
                        }), this._dataBeforePreview && (t ? this.updateData((0, k.default)({}, {
                            backgroundColor: null
                        })) : this.updateData(re.default.deleteMeta(this._dataBeforePreview)), this._dataBeforePreview = null)
                    },
                    _getImageProps: function() {
                        return W.default.extend({}, this.props, {
                            storePreviewData: this._storePreviewData,
                            clearPreviewData: this._clearPreviewData,
                            restorePreviewData: this._restorePreviewData,
                            showImageOptions: this._hasImage() && !this._hasVideoBg(),
                            showDefaultColor: this._isAllowUserClassName()
                        })
                    },
                    _isAllowUserClassName: function() {
                        return !(!this.dtProps.bgClassNames.length || !this.dsProps.allowColors)
                    },
                    _getVideoProps: function() {
                        return W.default.extend({}, this.props, {
                            storePreviewData: this._storePreviewData,
                            clearPreviewData: this._clearPreviewData,
                            restorePreviewData: this._restorePreviewData,
                            hasVideo: this._hasVideoBg(),
                            changePositionOfAddVideoPanel: this._changePositionOfAddVideoPanel
                        })
                    },
                    _getColorProps: function() {
                        return W.default.extend({}, this.props, {
                            storePreviewData: this._storePreviewData,
                            clearPreviewData: this._clearPreviewData,
                            restorePreviewData: this._restorePreviewData
                        })
                    },
                    onSetType: function(e) {
                        this._onClickSwitchType(e)
                    },
                    _onChangeUrlByAdmin: function(e) {
                        this.updateData({
                            url: e.target.value
                        })
                    },
                    _onChangeOverlayByAdmin: function(e) {
                        this.updateData({
                            textColor: e.target.checked ? "light" : "overlay"
                        }), this.savePage()
                    },
                    _onClickSwitchType: function(e) {
                        this._setCurrentType(e), this.forceUpdate()
                    },
                    _onClickRemove: function() {
                        this.updateData((0, k.default)({}, (0, ke.dataForEmptyBackground)(), {
                            useImage: !1
                        })), this._clearPreviewData(), this.savePage()
                    },
                    _onClickRemoveColor: function() {
                        this.updateData((0, k.default)({}, {
                            backgroundColor: null
                        })), this.updateMeta({
                            customColor: ""
                        }), this._clearPreviewData(), this.savePage()
                    },
                    _onClickSave: function() {
                        this.savePage(), this.updateState("normal"), "custom" !== this.getMeta("selectedColorType") && this.updateMeta({
                            customColor: ""
                        })
                    },
                    _notifyNative: function(e, t) {
                        return null
                    },
                    _rotateClassNames: function(e) {
                        var t = this.dtProps,
                            a = t.bgClassNames,
                            n = t.userClassName,
                            o = "";
                        if (n) {
                            var i = (0, C.default)(a).call(a, n);
                            o = ae.default.getSectionBackgroundByIndex(i + 1, a)
                        } else o = a[e];
                        this.updateData({
                            userClassName: o
                        })
                    },
                    _onClickChangeColor: function() {
                        var e = (0, z.default)(this.refs.componentDOM).closest(".s-section"),
                            t = e.css("backgroundColor");
                        this._rotateClassNames(0), t === e.css("backgroundColor") && this._rotateClassNames(1), this.savePage()
                    },
                    _onToggleCompression: function() {
                        this.updateData({
                            noCompression: !this.props.noCompression
                        })
                    },
                    onSetBackgroundItemSelectionHandlers: function(e, t) {
                        this.backgroundItemSelectionHandlers[e] = t, this.forceUpdate()
                    },
                    _getSwitcherOptions: function() {
                        var e = this,
                            t = this._getCurrentType(),
                            a = Q.default.getInChina(),
                            o = Q.default.getIsSxl(),
                            i = Boolean(Q.default.getMiniProgramAppType()),
                            l = {
                                color: n("Editor|Color"),
                                image: n("IMAGE"),
                                video: n("VIDEO")
                            },
                            r = (0, L.default)(W.default).call(W.default, l, (function(a, n) {
                                return {
                                    label: a,
                                    checked: t === n,
                                    onClick: function() {
                                        return e._onClickSwitchType(n)
                                    }
                                }
                            }));
                        return (a || o) && r.pop(), i && r.shift(), r
                    },
                    renderNativeWeb: function() {
                        var e = this,
                            t = this._hasImage(),
                            a = Q.default.getIsBlog(),
                            o = t ? {
                                position: "static"
                            } : {},
                            i = P.default.createElement("div", {
                                className: "s-component s-background",
                                ref: "componentDOM",
                                style: o
                            }, t ? (0, y.default)("div", {
                                className: "s-background-editor-wrapper",
                                onClick: function(t) {
                                    return e._notifyNative(t, xe.default.BACKGROUND_CLICK_MESSAGE)
                                }
                            }) : (0, y.default)("div", {
                                className: "s-component-editor"
                            }, void 0, (0, y.default)("div", {
                                className: "native-add-background-button",
                                onClick: function(t) {
                                    return e._notifyNative(t, xe.default.CLICK_ADD_BACKGROUND_MESSAGE)
                                }
                            }, void 0, n("Editor|Background"))));
                        return a ? (0, y.default)("div", {
                            className: "s-background-editor-blog-wrapper"
                        }, void 0, i) : i
                    },
                    renderMinimalEditor: function() {
                        return P.default.createElement("div", {
                            className: "s-component s-background",
                            ref: "componentDOM"
                        }, (0, y.default)("div", {
                            className: "s-component-editor minimal-size",
                            title: n("Change background color"),
                            onClick: this._onClickChangeColor
                        }, void 0, (0, y.default)("div", {
                            className: "title clickable"
                        }, void 0, (0, y.default)("div", {
                            className: "s-current-bg-thumbnail ".concat(this.dtProps.userClassName)
                        }))))
                    },
                    renderFullBackgroundEditor: function() {
                        var e, t = this,
                            o = D.default,
                            i = V.default.DOM.input,
                            l = a(265892),
                            r = a(872206),
                            s = a(883383),
                            p = this._getCurrentType(),
                            v = Te.default.isAdmin(),
                            b = Te.default.isSupport(),
                            _ = this.isIframeEditing(),
                            C = Q.default.getIsBlog(),
                            N = (ee.default.getIsS6Template() || Q.default.getCanUseS6Feature()) && !C,
                            w = this._getSwitcherOptions();
                        return P.default.createElement("div", {
                            ref: "componentDOM",
                            className: (0, B.default)(e = "s-component s-background".concat(this.addIframeEditingClass(), " ")).call(e, N ? "s-s6-background-editor" : "")
                        }, (0, y.default)("div", {
                            className: "s-component-editor dark-bg",
                            onClick: this.onToggleMobileViewEditorBox
                        }, void 0, (0, y.default)(H.default, {
                            className: "title small center clickable".concat(_ ? " hidden" : ""),
                            onTap: function() {
                                t.toggleEditor(), t.updateMeta({
                                    customColor: ""
                                })
                            }
                        }, void 0, this.isState("editor") ? (0, y.default)("div", {
                            className: "minus"
                        }, void 0, !N && (c || (c = (0, y.default)("i", {
                            className: "entypo-down-open-mini"
                        }))), N && (f || (f = (0, y.default)("i", {
                            className: "fa fa-picture-o"
                        })))) : (0, y.default)("div", {
                            className: "plus"
                        }, void 0, !N && (u || (u = (0, y.default)("i", {
                            className: "entypo-right-open-mini"
                        }))), N && (d || (d = (0, y.default)("i", {
                            className: "fa fa-picture-o"
                        })))), n("Background")), (0, y.default)(o, {}, void 0, this.isState("editor") ? (0, y.default)(ve.default, {
                            component: A.default.div,
                            className: "main-editor"
                        }, void 0, (0, y.default)("div", {
                            className: "s-layout-menu-field"
                        }, void 0, (0, y.default)(be.default, {
                            options: w
                        })), P.default.createElement(l, (0, h.default)({
                            visible: "color" === p
                        }, this._getColorProps(), {
                            onSetBackgroundItemSelectionHandlers: this.onSetBackgroundItemSelectionHandlers,
                            backgroundItemSelectionHandlers: this.backgroundItemSelectionHandlers
                        })), P.default.createElement(r, (0, h.default)({
                            visible: "image" === p
                        }, this._getImageProps(), {
                            onSetBackgroundItemSelectionHandlers: this.onSetBackgroundItemSelectionHandlers,
                            backgroundItemSelectionHandlers: this.backgroundItemSelectionHandlers
                        })), P.default.createElement(s, (0, h.default)({
                            visible: "video" === p
                        }, this._getVideoProps(), {
                            onSetBackgroundItemSelectionHandlers: this.onSetBackgroundItemSelectionHandlers,
                            backgroundItemSelectionHandlers: this.backgroundItemSelectionHandlers
                        })), this._needToShowRemoveButton() ? (0, y.default)("div", {
                            className: "clearfix mb"
                        }, void 0, (0, y.default)("div", {
                            className: "s-btn small no-margin dark-gray",
                            onClick: this._onClickRemove
                        }, void 0, n("Remove"))) : null, this._needToShowRemoveColorButton() ? (0, y.default)("div", {
                            className: "clearfix mb"
                        }, void 0, (0, y.default)("div", {
                            className: "s-btn small no-margin dark-gray",
                            onClick: this._onClickRemoveColor
                        }, void 0, n("Remove"))) : null, (0, y.default)("div", {
                            className: "clearfix"
                        }, void 0, (0, y.default)("div", {
                            className: "s-btn green small done-button no-margin",
                            onClick: this._onClickSave
                        }, void 0, n("Save"))), v || b ? (0, y.default)("div", {
                            style: {
                                overflow: "hidden"
                            }
                        }, void 0, m || (m = (0, y.default)("div", {
                            className: "separator"
                        }, void 0, (0, y.default)("hr", {}))), "ADMIN ONLY:", g || (g = (0, y.default)("br", {})), (0, y.default)(i, {
                            type: "text",
                            name: "url",
                            value: this.dtProps.url,
                            onChange: this._onChangeUrlByAdmin
                        }), this._hasVideoBg() ? (0, y.default)("div", {}, void 0, (0, y.default)(i, {
                            type: "checkbox",
                            checked: !this._hasOverlay(),
                            onChange: this._onChangeOverlayByAdmin
                        }), "Check to remove overlay") : "image" === p && (0, y.default)("div", {
                            style: {
                                marginTop: "30px"
                            },
                            rel: "tooltip-left",
                            title: n("Editor|Notice: No compression will make image slower to load!")
                        }, void 0, (0, y.default)(Ce.default, {
                            label: "No compression",
                            checked: this.props.noCompression,
                            onToggle: this._onToggleCompression
                        }))) : null) : null)))
                    },
                    render: function() {
                        var e = Q.default.getBackgroundForAllSections();
                        return this.dsProps.minimal ? e && !this.dsProps.footerSection ? this.renderFullBackgroundEditor() : this._isAllowUserClassName() ? this.renderMinimalEditor() : null : this.renderFullBackgroundEditor()
                    }
                });
            De.bobcatPropTypes = Oe, De.getBobcatDefaultProps = Me, t.default = De, e.exports = t.default
        },
        872206: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(223765),
                i = a(752424),
                l = a(663978),
                r = a(834074),
                s = a(60530)(a(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u, d, c = a(812077),
                f = (0, s.default)(c),
                m = a(492762),
                g = (0, s.default)(m),
                p = a(2991),
                h = (0, s.default)(p),
                v = a(51942),
                y = (0, s.default)(v),
                b = a(678580),
                _ = (0, s.default)(b);
            a(974916), a(115306), a(209653), a(556977);
            var C = a(366757),
                N = (0, s.default)(C),
                w = a(973935),
                x = (0, s.default)(w),
                k = a(223336),
                E = (0, s.default)(k),
                L = a(914578),
                S = (0, s.default)(L),
                B = a(399069),
                T = (0, s.default)(B),
                P = a(183123),
                I = (0, s.default)(P),
                O = a(230139),
                M = (0, s.default)(O),
                D = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var a = X(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        i = l && r;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var u = i ? r(e, s) : null;
                            u && (u.get || u.set) ? l(n, s, u) : n[s] = e[s]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(144726)),
                R = a(998001),
                A = (0, s.default)(R),
                U = a(461853),
                H = (0, s.default)(U),
                F = a(818166),
                V = (0, s.default)(F),
                Z = a(762903),
                z = ((0, s.default)(Z), a(948736)),
                K = ((0, s.default)(z), a(971638), a(825143)),
                W = (0, s.default)(K),
                j = a(955804),
                G = (0, s.default)(j),
                Y = a(154920),
                q = (0, s.default)(Y),
                J = a(43138),
                Q = (0, s.default)(J),
                $ = a(317118);

            function X(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    a = new i;
                return (X = function(e) {
                    return e ? a : t
                })(e)
            }(0, s.default)($);
            var ee = 10,
                te = I.default.getIsRTLLayout() ? "tooltip-right" : "tooltip-left",
                ae = function(e) {
                    var t = e.replace(/(\/)(\d)/, "$1t$2");
                    return {
                        url: "//uploads.strikinglycdn.com/static/backgrounds/".concat(e, ".jpg"),
                        thumbUrl: "//uploads.strikinglycdn.com/static/backgrounds/".concat(t, ".jpg"),
                        sizing: "cover"
                    }
                },
                ne = function(e) {
                    return {
                        url: "//uploads.strikinglycdn.com/page/images/backgrounds/".concat(e, ".jpg"),
                        thumbUrl: "//uploads.strikinglycdn.com/page/images/backgrounds/".concat(e, "-thumb.jpg"),
                        sizing: "cover"
                    }
                },
                oe = function(e) {
                    return {
                        url: "http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/".concat(e, ".jpg"),
                        thumbUrl: "http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/".concat(e, ".jpg"),
                        sizing: "tile"
                    }
                },
                ie = function(e) {
                    var t = e.replace(/(\/)(\d)/, "$1t$2");
                    return {
                        url: "https://uploads.sxlcdn.com/static/backgrounds/".concat(e, ".jpg"),
                        thumbUrl: "https://uploads.sxlcdn.com/static/backgrounds/".concat(t, ".jpg"),
                        sizing: "cover"
                    }
                };
            t.default = T.default.create({
                displayName: "BackgroundImage",
                mixins: [(0, M.default)("editor"), A.default, H.default.enableAfterMount()],
                image: null,
                onMouseDown: !1,
                bobcatPropTypes: W.default.bobcatPropTypes,
                getBobcatDefaultProps: W.default.getBobcatDefaultProps,
                componentDidMount: function() {
                    var e = this;
                    this.image = x.default.findDOMNode(this.refs.aviaryImage), this.props.onSetBackgroundItemSelectionHandlers("image", this._getBackgroundImageItemSelectionHandlers()), this.image && (this.image.onload = function() {
                        e.getMeta("showFocusPanel") && e.setImageSize()
                    }, this.image.onerror = function() {
                        e.image = null
                    })
                },
                componentWillUnmount: function() {
                    this.removeImageLoadListner(), "undefined" != typeof window && document.removeEventListener("mouseup", this.onMouseUp)
                },
                removeImageLoadListner: function() {
                    this.image && (this.image.onload = function() {}, this.image.onerror = function() {}, this.image = null)
                },
                componentDidUpdate: function() {
                    var e = x.default.findDOMNode(this.refs.aviaryImage);
                    this.image && e.src !== this.image.src && (this.image = e, this.setImageSize())
                },
                _setImage: function(e) {},
                _imageUploaded: function(e) {},
                _onPreviewColor: function(e) {
                    return null
                },
                _onClickTextColor: function(e) {
                    return null
                },
                _imageUrlMixin: function(e) {
                    return (0, y.default)({
                        s: null,
                        storage: null,
                        storageKey: null,
                        format: null,
                        focus: null,
                        w: null,
                        h: null
                    }, e)
                },
                _createEnterStockImageFn: function(e) {
                    var t = this;
                    return function() {
                        t.props.storePreviewData(), t.updateData(t._imageUrlMixin({
                            url: e.url,
                            videoHtml: "",
                            sizing: e.sizing,
                            textColor: "overlay",
                            userClassName: "",
                            useImage: !0
                        }))
                    }
                },
                _createClickStockImageFn: function(e) {
                    var t = this;
                    return function() {
                        t.updateData(t._imageUrlMixin({
                            url: e.url,
                            videoHtml: "",
                            sizing: e.sizing,
                            userClassName: "",
                            w: 16,
                            h: 9,
                            useImage: !0
                        })), t.props.clearPreviewData(), t.savePage(), q.default.track("Editor - Edit Background")
                    }
                },
                _onClickEditImage: function() {},
                _getUrlForImageEditor: function() {
                    var e = S.default.assign({}, this.props, {
                        s: 10
                    });
                    return D.createImage(e).getUrlWithoutFocus(this.props.size)
                },
                _url: function() {
                    return D.createImage(this.props).getUrl(this.props.size)
                },
                _onClickUpload: function() {},
                _getBackgroundImageItemSelectionHandlers: function() {
                    return {
                        itemUploaded: this._imageUploaded,
                        itemSelected: this._imageUploaded
                    }
                },
                _onClickMoreImage: function() {},
                _onChangeBackgroundSize: function(e) {},
                _onClickToggleFocusPanel: function() {},
                transformCoordinates: function(e) {
                    var t = e.naturalWidth / e.width,
                        a = this.getData().get("focus");
                    this.updateMeta({
                        showFocusIndicator: !0,
                        deltaPosition: {
                            x: a.get("x") / t - ee,
                            y: a.get("y") / t - ee
                        }
                    })
                },
                setImageSize: function() {
                    var e = this.image;
                    if (0 !== e.height) {
                        var t = 310 / e.naturalWidth,
                            a = {
                                width: 310,
                                height: Number((e.naturalHeight * t).toFixed(2)),
                                naturalWidth: e.naturalWidth,
                                naturalHeight: e.naturalHeight
                            };
                        this.updateMeta({
                            imageSize: a
                        }), this.setFocusInitPosition(a)
                    }
                },
                setFocusInitPosition: function(e) {
                    var t = this.getData().get("focus");
                    t && !isNaN(t.get("x")) ? this.transformCoordinates(e) : this.updateMeta({
                        showFocusIndicator: !0,
                        deltaPosition: {
                            x: e.width / 2 - ee,
                            y: e.height / 2 - ee
                        }
                    })
                },
                _renderStockImage: function(e) {
                    var t = this,
                        a = e;
                    a = void 0 === a ? 5 : a;
                    var n, o, i, l, r = (n = this.getData("stockKey"), o = a, i = ["nature/194", "cityscape/170", "things/121", "cityscape/166", "nature/184"], l = ae, "solidBanner" === n && (i = ["banners/banner1", "bg3", "banners/banner3", "banners/banner4", "bg1"], l = ne), I.default.getIsSxl() && (i = ["abstract/76", "nature/190", "cityscape/155", "business-2/136", "nature/171"], l = ie), "pastelSolids" === n && (i = ["44", "42", "36", "39", "48"], l = oe), o && o > 0 && o <= 5 && (i = (0, g.default)(i).call(i, 0, o)), (0, h.default)(i).call(i, (function(e) {
                        return l(e)
                    })));
                    return (0, f.default)("span", {}, void 0, (0, h.default)(r).call(r, (function(e, a) {
                        var n = {
                            backgroundImage: "url(".concat(e.thumbUrl, ")")
                        };
                        return (0, f.default)("li", {
                            style: n,
                            onClick: t._createClickStockImageFn(e),
                            onMouseEnter: t._createEnterStockImageFn(e),
                            onMouseLeave: t.props.restorePreviewData
                        }, "image-item-".concat(a))
                    })))
                },
                saveImageFocus: function(e) {
                    var t = e || this.getMeta("deltaPosition").toJS(),
                        a = this.getMeta("imageSize").toJS(),
                        n = a.naturalWidth / a.width;
                    this.updateData({
                        w: a.naturalWidth,
                        h: a.naturalHeight,
                        focus: {
                            x: (t.x + ee) * n,
                            y: (t.y + ee) * n
                        }
                    })
                },
                onDragStop: function() {
                    this.saveImageFocus()
                },
                isShowSetFocus: function() {
                    var e = this.getData(),
                        t = V.default.getSiteAnimations().background;
                    return I.default.getIsStrikingly() && "parallax" !== t && "fixed" !== t && "cover" === e.get("sizing")
                },
                onMouseDownOnFocus: function(e) {
                    var t;
                    (0, _.default)(t = e.target.className).call(t, "focus-indicator") || 3 !== e.nativeEvent.which && (this.$focusPanel = (0, E.default)(".focus-panel-background").eq(0), document.addEventListener("mousemove", this.onDraging), document.addEventListener("mouseup", this.onMouseUp), this.choseFocus(e))
                },
                onDraging: function(e) {
                    var t;
                    if (!(0, _.default)(t = e.target.className).call(t, "focus-indicator") && this.$focusPanel) {
                        var a = e.pageX - this.$focusPanel.offset().left,
                            n = e.pageY - this.$focusPanel.offset().top,
                            o = this.getMeta("imageSize");
                        this.updateMeta({
                            deltaPosition: {
                                x: Math.min(o.get("width"), Math.max(0, a)) - ee,
                                y: Math.min(o.get("height"), Math.max(0, n)) - ee
                            }
                        })
                    }
                },
                choseFocus: function(e) {
                    if (this.$focusPanel) {
                        var t = this.getMeta("imageSize"),
                            a = [0, t.get("width") + ee],
                            n = [0, t.get("height") + ee],
                            o = Math.min(a[1], Math.max(a[0], e.pageX - this.$focusPanel.offset().left)),
                            i = Math.min(n[1], Math.max(n[0], e.pageY - this.$focusPanel.offset().top)),
                            l = {
                                x: o - ee,
                                y: i - ee
                            };
                        this.updateMeta({
                            deltaPosition: l
                        }), this.saveImageFocus(l)
                    }
                },
                onMouseUp: function() {
                    document.removeEventListener("mousemove", this.onDraging), document.removeEventListener("mouseup", this.onMouseUp), this.onDragStop()
                },
                handleDrag: function(e, t) {
                    var a = this.getMeta("deltaPosition").toJS();
                    this.updateMeta({
                        deltaPosition: {
                            x: a.x + t.deltaX,
                            y: a.y + t.deltaY
                        }
                    })
                },
                _renderImgEditButton: function() {
                    return null
                },
                render: function() {
                    var e = this.props.visible;
                    return (0, f.default)("div", {
                        style: {
                            display: e ? "block" : "none"
                        }
                    }, void 0, N.default.createElement("img", {
                        style: {
                            display: "none"
                        },
                        src: this._getUrlForImageEditor(),
                        ref: "aviaryImage"
                    }), (0, f.default)("ul", {
                        className: "s-layout-menu-field stock-images clearfix"
                    }, void 0, this._renderStockImage(), (0, f.default)("li", {
                        className: "btn",
                        onClick: this._onClickMoreImage
                    }, void 0, (0, f.default)("span", {}, void 0, " ", n("More"), " "))), (0, f.default)("div", {
                        className: "clearfix mb"
                    }, void 0, (0, f.default)("div", {
                        className: "s-btn small no-margin dark-gray",
                        onClick: this._onClickUpload
                    }, void 0, n("Upload Image"))), this.props.showImageOptions ? (0, f.default)("div", {}, void 0, !1, !Q.default.isSmallScreen() && (0, f.default)("div", {
                        className: "drop-down-select mb"
                    }, void 0, u || (u = (0, f.default)("div", {
                        className: "icon"
                    })), (0, f.default)("select", {
                        onChange: this._onChangeBackgroundSize,
                        value: this.props.sizing
                    }, void 0, (0, f.default)("option", {
                        value: "cover"
                    }, void 0, n("Stretch")), (0, f.default)("option", {
                        value: "contain"
                    }, void 0, n("Contain")), (0, f.default)("option", {
                        value: "tile"
                    }, void 0, n("Tile")), (0, f.default)("option", {
                        value: "center"
                    }, void 0, n("Center")))), this.isShowSetFocus() && (0, f.default)("div", {
                        className: "set-focus"
                    }, void 0, (0, f.default)("div", {
                        onClick: this._onClickToggleFocusPanel
                    }, void 0, d || (d = (0, f.default)("i", {
                        className: "entypo-target"
                    })), " ".concat(n("Set Focus"))), (0, f.default)(G.default, {
                        style: {
                            display: this.getMeta("showFocusPanel") ? "block" : "none"
                        },
                        imageSize: this.getMeta("imageSize").toJS(),
                        focusIndicatorRadius: ee,
                        handleDrag: this.handleDrag,
                        onDragStop: this.onDragStop,
                        onMouseDownOnFocus: this.onMouseDownOnFocus,
                        deltaPosition: this.getMeta("deltaPosition").toJS(),
                        showFocusIndicator: this.getMeta("showFocusIndicator"),
                        imgSrc: this._getUrlForImageEditor()
                    })), (0, f.default)("div", {
                        className: "text-selection-wrap"
                    }, void 0, (0, f.default)("div", {
                        className: "selection light-text ".concat("light" === this.props.textColor ? "current" : ""),
                        rel: te,
                        "data-original-title": n("Light Text"),
                        onMouseEnter: this._onPreviewColor("light"),
                        onMouseLeave: this.props.restorePreviewData,
                        onClick: this._onClickTextColor("light")
                    }, void 0, "Tt"), (0, f.default)("div", {
                        className: "selection text-overlay ".concat("overlay" === this.props.textColor ? "current" : ""),
                        rel: te,
                        "data-original-title": n("Light Text + Overlay"),
                        onMouseEnter: this._onPreviewColor("overlay"),
                        onMouseLeave: this.props.restorePreviewData,
                        onClick: this._onClickTextColor("overlay")
                    }, void 0, "Tt"), (0, f.default)("div", {
                        className: "selection dark-text ".concat("dark" === this.props.textColor ? "current" : ""),
                        rel: te,
                        "data-original-title": n("Dark Text"),
                        onMouseEnter: this._onPreviewColor("dark"),
                        onMouseLeave: this.props.restorePreviewData,
                        onClick: this._onClickTextColor("dark")
                    }, void 0, "Tt"))) : null)
                }
            }), e.exports = t.default
        },
        883383: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(663978),
                i = a(60530)(a(60530));
            o(t, "__esModule", {
                value: !0
            });
            var l, r, s = a(812077),
                u = (0, i.default)(s);
            a(974916), a(115306);
            var d = a(2991),
                c = (0, i.default)(d),
                f = a(366757),
                m = (0, i.default)(f),
                g = a(45697),
                p = ((0, i.default)(g), a(223336)),
                h = (0, i.default)(p),
                v = a(399069),
                y = (0, i.default)(v),
                b = a(230139),
                _ = (0, i.default)(b),
                C = a(317118),
                N = (0, i.default)(C),
                w = a(948736),
                x = (0, i.default)(w),
                k = a(825143),
                E = (0, i.default)(k),
                L = a(200292),
                S = (0, i.default)(L),
                B = a(183123),
                T = (0, i.default)(B),
                P = (0, c.default)(l = ["oqMyjFXKX4Q", "2HYWds3Y6EQ", "IY4ZjNNuNGI", "7Oz9GA77NDA", "tv6rwluiPrA"]).call(l, (function(e) {
                    return {
                        url: "https://www.youtube.com/watch?v=".concat(e),
                        thumbUrl: "https://img.youtube.com/vi/".concat(e, "/maxresdefault.jpg")
                    }
                }));
            t.default = y.default.create({
                displayName: "BackgroundVideo",
                mixins: [(0, _.default)("editor")],
                bobcatPropTypes: E.default.bobcatPropTypes,
                getBobcatDefaultProps: E.default.getBobcatDefaultProps,
                componentDidMount: function() {
                    this.props.onSetBackgroundItemSelectionHandlers("video", this._getBackgroundVideoItemSelectionHandlers())
                },
                _getVideoProps: function() {
                    return {
                        videoHtml: this.props.vidoeHtml,
                        videoUrl: this.props.videoUrl,
                        binding: this.getDefaultBinding().sub("_addVideoPanel"),
                        onComponentDidMount: this.props.changePositionOfAddVideoPanel,
                        updateVideoBg: this._updateVideoBg,
                        showVideoPanel: this.getMeta("showVideoPanel"),
                        isRtlLayout: Boolean(T.default.getIsRTLLayout())
                    }
                },
                _updateVideoBg: function(e) {
                    switch (e.actionState) {
                        case "add":
                            var t = {
                                videoHtml: e.videoHtml,
                                url: e.url,
                                textColor: "overlay",
                                w: null,
                                h: null,
                                storage: null,
                                storageKey: null,
                                format: null,
                                useImage: !1
                            };
                            e.videoUrl && (t.videoUrl = e.videoUrl), this.updateData(t), this.updateMeta({
                                showVideoPanel: !1
                            }), this.props.clearPreviewData(), e.lowResThumbnail && this._adjustVideoBgThumbnail(e);
                            break;
                        case "preview":
                            this.props.storePreviewData(), this.updateData({
                                videoHtml: e.videoHtml,
                                url: e.url,
                                textColor: "overlay",
                                w: null,
                                h: null,
                                storage: null,
                                storageKey: null,
                                format: null
                            });
                            break;
                        case "endPreview":
                            this.props.restorePreviewData()
                    }
                },
                _adjustVideoBgThumbnail: function(e) {
                    var t = this,
                        a = (0, h.default)("<img src='".concat(e.url, "' />"));
                    a.on("load", (function() {
                        a[0].naturalWidth < 200 && t.updateData({
                            url: e.lowResThumbnail
                        })
                    })), a.error((function() {
                        t.updateData({
                            url: e.lowResThumbnail
                        })
                    }))
                },
                _createEnterStockVideoFn: function(e) {
                    var t = this;
                    return function() {
                        t._updateVideoBg({
                            videoHtml: N.default.getVideoHtmlByUrl(e.url, 1280, 720),
                            url: e.thumbUrl,
                            actionState: "preview"
                        })
                    }
                },
                _createClickStockVideoFn: function(e) {
                    var t = this;
                    return function() {
                        t._updateVideoBg({
                            videoHtml: N.default.getVideoHtmlByUrl(e.url, 1280, 720),
                            url: e.thumbUrl,
                            actionState: "add"
                        }), t.savePage()
                    }
                },
                _onMouseLeaveStockVideo: function() {
                    this._updateVideoBg({
                        actionState: "endPreview"
                    })
                },
                _onClickToggleVideoPanel: function() {
                    this.updateMeta({
                        showVideoPanel: !this.getMeta("showVideoPanel")
                    })
                },
                _getBackgroundVideoItemSelectionHandlers: function() {
                    var e = this;
                    return {
                        itemSelected: function(t) {
                            e._updateVideoBg({
                                videoHtml: N.default.getVideoHtmlByUrl(t.url, 1280, 720),
                                url: t.thumbUrl,
                                actionState: "add"
                            }), e.savePage()
                        }
                    }
                },
                _onClickMoreVideo: function() {
                    var e = this.props.backgroundItemSelectionHandlers;
                    x.default.pick({
                        dialogType: "video",
                        from: "background",
                        handlers: e.video,
                        backgroudImageHandlers: e.image,
                        backgroudVideoHandlers: e.video
                    })
                },
                _renderStockVideo: function() {
                    var e = this;
                    return (0, u.default)("ul", {
                        className: "s-layout-menu-field stock-videos clearfix"
                    }, void 0, (0, c.default)(P).call(P, (function(t, a) {
                        var n = {
                            backgroundImage: "url(".concat(t.thumbUrl.replace("maxresdefault", "mqdefault"), ")"),
                            backgroundSize: "cover"
                        };
                        return (0, u.default)("li", {
                            className: "stock-video-button",
                            style: n,
                            onClick: e._createClickStockVideoFn(t),
                            onMouseEnter: e._createEnterStockVideoFn(t),
                            onMouseLeave: e._onMouseLeaveStockVideo
                        }, a, r || (r = (0, u.default)("i", {
                            className: "fa fa-video-camera"
                        })))
                    })), (0, u.default)("li", {
                        className: "btn",
                        onClick: this._onClickMoreVideo
                    }, void 0, (0, u.default)("span", {}, void 0, n("Video|More"))))
                },
                render: function() {
                    var e = this.props.visible;
                    return (0, u.default)("div", {
                        style: {
                            display: e ? "block" : "none"
                        }
                    }, void 0, this.getMeta("showVideoPanel") && m.default.createElement(S.default, this._getVideoProps()), T.default.getIsStrikingly() && this._renderStockVideo(), (0, u.default)("div", {
                        className: "clearfix mb"
                    }, void 0, (0, u.default)("div", {
                        className: "add-video-btn s-btn small no-margin dark-gray",
                        onClick: this._onClickToggleVideoPanel
                    }, void 0, n("Video|Embed Video"))))
                }
            }), e.exports = t.default
        },
        152551: function(e, t, a) {
            "use strict";
            var n = a(353147),
                o = a(223765),
                i = a(752424),
                l = a(663978),
                r = a(834074),
                s = a(60530)(a(60530));
            l(t, "__esModule", {
                value: !0
            });
            var u, d, c, f = a(812077),
                m = (0, s.default)(f),
                g = a(51942),
                p = (0, s.default)(g),
                h = a(977766),
                v = (0, s.default)(h),
                y = a(366757),
                b = (0, s.default)(y),
                _ = ie(a(914578)),
                C = a(45697),
                N = (0, s.default)(C),
                w = a(872278),
                x = (0, s.default)(w),
                k = a(176965),
                E = (0, s.default)(k),
                L = a(692381),
                S = (0, s.default)(L),
                B = a(921003),
                T = (0, s.default)(B),
                P = a(399069),
                I = (0, s.default)(P),
                O = a(230139),
                M = (0, s.default)(O),
                D = a(817449),
                R = (0, s.default)(D),
                A = a(998001),
                U = (0, s.default)(A),
                H = a(315321),
                F = (0, s.default)(H),
                V = a(461853),
                Z = (0, s.default)(V),
                z = a(762903),
                K = ((0, s.default)(z), a(818166)),
                W = (0, s.default)(K),
                j = a(539220),
                G = (0, s.default)(j),
                Y = a(948736),
                q = (0, s.default)(Y),
                J = a(971638),
                Q = a(450197),
                $ = (0, s.default)(Q),
                X = a(317118),
                ee = (0, s.default)(X),
                te = ie(a(144726)),
                ae = a(11945),
                ne = ie(a(143268));

            function oe(e) {
                if ("function" != typeof i) return null;
                var t = new i,
                    a = new i;
                return (oe = function(e) {
                    return e ? a : t
                })(e)
            }

            function ie(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== o(e) && "function" != typeof e) return {
                    default: e
                };
                var a = oe(t);
                if (a && a.has(e)) return a.get(e);
                var n = {},
                    i = l && r;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var u = i ? r(e, s) : null;
                        u && (u.get || u.set) ? l(n, s, u) : n[s] = e[s]
                    }
                return n.default = e, a && a.set(e, n), n
            }
            var le = ne.addProtocol,
                re = (0, ae.getIsEditorRtlLayout)(),
                se = I.default.createPageComponent({
                    displayName: "ImageLinkEditor",
                    mixins: [(0, M.default)("editor"), U.default, R.default, Z.default.enableAfterMount(), Z.default.enableAfterUpdate()],
                    bobcatPropTypes: {
                        data: {
                            url: F.default.url,
                            textColor: N.default.oneOf(["dark", "light", "overlay"]),
                            sizing: N.default.oneOf(["cover", "contain", "tile", "center"]),
                            backgroundVariation: N.default.string,
                            focus: N.default.object,
                            videoUrl: N.default.string,
                            videoHtml: N.default.string,
                            stockKey: N.default.string,
                            binding: N.default.object,
                            h: N.default.number,
                            w: N.default.number,
                            s: N.default.number,
                            storageKey: N.default.string,
                            storage: N.default.oneOf(["ali", "c", "qn", "un"]),
                            linkUrl: N.default.string.isRequired,
                            linkTarget: N.default.string.isRequired
                        },
                        designer: {
                            warnningInfo: N.default.string,
                            setStateFunc: N.default.func,
                            showBackgroundOverlayToggle: N.default.bool,
                            showRemoveImageButton: N.default.bool,
                            compactButtonLayout: N.default.bool
                        }
                    },
                    _onClickSave: function() {
                        this.savePage(), this.updateState("normal")
                    },
                    getBobcatDefaultProps: function() {
                        return {
                            data: {
                                linkUrl: "",
                                linkTarget: "_blank",
                                warnningInfo: ""
                            }
                        }
                    },
                    _onChangeUrl: function(e) {
                        this.updateData({
                            linkUrl: le(e.target.value, !0)
                        }), this.savePage()
                    },
                    _onChangeTarget: function(e) {
                        this.updateData({
                            linkTarget: e.target.checked ? "_blank" : "_self"
                        }), this.savePage()
                    },
                    _isNewTab: function() {
                        return "_blank" === this.dtProps.linkTarget
                    },
                    _hasImage: function() {
                        var e = te.createImage(this.dtProps).getUrl(this.dsProps.size);
                        return ne.imageHasContent(e)
                    },
                    _hasBackgroundOverlay: function() {
                        return "overlay" === this.dtProps.textColor
                    },
                    _toggleBackgroundOverlay: function() {
                        var e = this._hasBackgroundOverlay() ? "light" : "overlay";
                        this.updateData({
                            textColor: e
                        }), this.savePage()
                    },
                    _removeImage: function() {
                        this.updateData((0, J.dataForEmptyBackground)()), this.savePage()
                    },
                    _renderWarnningInfoIcon: function() {
                        return u || (u = (0, m.default)("div", {
                            className: "show-pub-alert pub-alert"
                        }, void 0, (0, m.default)("a", {
                            className: "page publish-button"
                        }, void 0, (0, m.default)("div", {
                            className: "pub-alert-icon"
                        }, void 0, (0, m.default)("div", {
                            className: "fa fa-circle"
                        }, void 0, (0, m.default)("div", {
                            id: "unpubed-count",
                            className: "pub-count"
                        }, void 0, "!"))))))
                    },
                    _onClickEditImage: function() {
                        var e = this,
                            t = W.default.getSectionsBinding(),
                            a = this.props,
                            n = a.sectionModel,
                            o = void 0 === n ? {} : n,
                            i = a.path,
                            l = i && i[4],
                            r = t.get(l) && t.get(l).get("template_name") || o.sectionName;
                        $.default.launchTuiEditor(this._getUrlForImageEditor(), {
                            onSavedCallback: function(t) {
                                return e._imageUploaded(t)
                            },
                            sectionType: r
                        })
                    },
                    _getUrlForImageEditor: function() {
                        var e = _.assign({}, this.props, {
                            s: 10
                        });
                        return te.createImage(e).getUrl(this.props.size)
                    },
                    _onClickUpload: function() {
                        q.default.pick({
                            initialTabIdx: 0,
                            iconLibComponents: "background",
                            from: "banner",
                            handlers: {
                                itemUploaded: this._imageUploaded,
                                itemSelected: this._imageUploaded
                            }
                        })
                    },
                    _setImage: function(e) {
                        this.updateData((0, J.imageDataForSaving)(e))
                    },
                    _imageUploaded: function(e) {
                        /\.mp4$/.test(e.getUrl()) ? this.updateData((0, p.default)((0, J.imageDataForSaving)(e), {
                            videoHtml: ee.default.getVideoHtmlByUrl(e.getUrl(), 1280, 720),
                            videoUrl: e.getUrl(),
                            textColor: "light"
                        })) : this._setImage(e), this.savePage()
                    },
                    _renderImgEditButton: function() {
                        return this._hasImage() ? (0, m.default)("div", {
                            className: "clearfix s-layout-menu-button"
                        }, void 0, (0, m.default)("div", {
                            className: "s-btn small no-margin dark-gray",
                            onClick: this._onClickEditImage
                        }, void 0, n("Edit Image"))) : null
                    },
                    _afterClickEditor: function() {
                        this.props.setStateFunc("editor")
                    },
                    _afterClickCancel: function() {
                        this.props.setStateFunc("normal")
                    },
                    render: function() {
                        var e, t = E.default.DOM.input,
                            a = this.dtProps,
                            o = a.linkUrl,
                            i = a.warnningInfo,
                            l = this.props,
                            r = l.showBackgroundOverlayToggle,
                            s = l.showRemoveImageButton,
                            u = l.compactButtonLayout,
                            f = "editor" === this.getDefaultBinding().get("_state"),
                            g = this.isIframeEditing();
                        return b.default.createElement("div", {
                            ref: "componentDOM",
                            className: "s-component s-linker".concat(this.addIframeEditingClass())
                        }, (0, m.default)("div", {
                            className: "s-component-editor dark-bg ".concat(f ? "_open" : ""),
                            onClick: this.onToggleMobileViewEditorBox
                        }, void 0, i && this._renderWarnningInfoIcon(), (0, m.default)(T.default, {
                            className: (0, v.default)(e = "title center clickable".concat(g ? " hidden" : "", " ")).call(e, u ? "compact" : "small"),
                            onTap: this.toggleEditor,
                            rel: re ? "tooltip-right" : "tooltip-left",
                            "data-original-title": i || ""
                        }, void 0, this.isState("editor") ? c || (c = (0, m.default)("div", {
                            className: "minus"
                        }, void 0, (0, m.default)("i", {
                            className: "entypo-down-open-mini"
                        }))) : d || (d = (0, m.default)("div", {
                            className: "plus"
                        }, void 0, (0, m.default)("i", {
                            className: "entypo-right-open-mini"
                        }))), n("Editor|Image & Link")), (0, m.default)(S.default, {}, void 0, this.isState("editor") && (0, m.default)(G.default, {
                            component: x.default.div,
                            className: "main-editor"
                        }, void 0, (0, m.default)("div", {
                            className: "s-layout-menu-field"
                        }, void 0, (0, m.default)("div", {
                            className: "clearfix s-layout-menu-button"
                        }, void 0, (0, m.default)("div", {
                            className: "s-btn small no-margin dark-gray",
                            onClick: this._onClickUpload
                        }, void 0, n("Upload Image"))), b.default.createElement("img", {
                            style: {
                                display: "none"
                            },
                            src: this._getUrlForImageEditor(),
                            ref: "aviaryImage"
                        }), this._renderImgEditButton(), this._hasImage() && s ? (0, m.default)("div", {
                            className: "clearfix s-layout-menu-button"
                        }, void 0, (0, m.default)("div", {
                            className: "s-btn small no-margin dark-gray",
                            onClick: this._removeImage
                        }, void 0, n("Remove Image"))) : null, this._hasImage() && r ? (0, m.default)("label", {
                            className: "s-layout-menu-label"
                        }, void 0, (0, m.default)(t, {
                            type: "checkbox",
                            checked: this._hasBackgroundOverlay(),
                            onChange: this._toggleBackgroundOverlay
                        }), n("Editor|Overlay")) : null), (0, m.default)("div", {
                            className: "s-layout-menu-field"
                        }, void 0, (0, m.default)("div", {
                            className: "s-layout-menu-label"
                        }, void 0, n("Editor|Link URL")), (0, m.default)(t, {
                            type: "text",
                            name: "url",
                            className: "ltr-url-input",
                            value: o,
                            onChange: this._onChangeUrl
                        }), (0, m.default)("label", {
                            className: "s-layout-menu-label"
                        }, void 0, (0, m.default)(t, {
                            type: "checkbox",
                            checked: this._isNewTab(),
                            onChange: this._onChangeTarget
                        }), n("Editor|Open in new tab"))), (0, m.default)("div", {
                            className: "clearfix"
                        }, void 0, (0, m.default)("div", {
                            className: "s-btn green small done-button no-margin",
                            onClick: this._onClickSave
                        }, void 0, n("Save")))))))
                    }
                });
            t.default = se, e.exports = t.default
        },
        702964: function(e, t, a) {
            e.exports = a.p + "/images/default.bfaefa98266e275d6801cbd04eeb1349.png"
        },
        591021: function(e, t, a) {
            e.exports = a.p + "../../../../public/images/v4/base/sections/blog1/thumbnail/cover.png"
        }
    }
]);