google.maps.__gjsload__('overlay', function(_) {
    var Wt = function(a) {
            this.g = a
        },
        yla = function() {},
        Xt = function(a) {
            a.rp = a.rp || new yla;
            return a.rp
        },
        zla = function(a) {
            this.Ha = new _.Vh(function() {
                var b = a.rp;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.qo && a.onAdd) a.onAdd();
                        b.qo = !0;
                        a.draw()
                    }
                } else {
                    if (b.qo)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.qo = !1
                }
            }, 0)
        },
        Ala = function(a, b) {
            function c() {
                return _.Wh(e.Ha)
            }
            var d = Xt(a),
                e = d.Ym;
            e || (e = d.Ym = new zla(a));
            _.qb(d.Xa || [], _.K.removeListener);
            var f = d.Wa = d.Wa || new _.as,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.ht = d.ht || new Wt(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Xa = [_.K.addListener(a, "panes_changed", c), _.K.addListener(g, "zoom_changed", c), _.K.addListener(g, "offset_changed", c), _.K.addListener(b, "projection_changed", c), _.K.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof
            _.lf && (_.O(b, "Ox"), _.N(b, 148440))
        },
        Ela = function(a) {
            if (a) {
                var b = a.getMap();
                if (Bla(a) !== b && b && b instanceof _.lf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Cla(b, a, c.overlayLayer) : c.g.then(function(d) {
                        d = d.Ka;
                        var e = new Yt(b, d);
                        d.hb(e);
                        c.overlayLayer = e;
                        Dla(a);
                        Ela(a)
                    })
                }
            }
        },
        Dla = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.i.og(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Bla = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Cla = function(a, b, c) {
            this.map = a;
            this.g = b;
            this.i = c;
            this.h = !1;
            _.O(this.map, "Ox");
            _.N(this.map, 148440);
            c.uf(this)
        },
        Fla = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        Yt = function(a, b) {
            this.j = a;
            this.i = b;
            this.g = null;
            this.h = []
        };
    _.D(Wt, _.L);
    Wt.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.ke(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var Zt = {};
    _.D(zla, _.L);
    Zt.uf = function(a) {
        if (a) {
            var b = a.getMap();
            (Xt(a).Ms || null) !== b && (b && Ala(a, b), Xt(a).Ms = b)
        }
    };
    Zt.og = function(a) {
        var b = Xt(a),
            c = b.Wa;
        c && c.unbindAll();
        (c = b.ht) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Xa && _.qb(b.Xa, _.K.removeListener);
        b.Xa = null;
        b.Ym && (b.Ym.Ha.Od(), b.Ym = null);
        delete Xt(a).Ms
    };
    var $t = {};
    Cla.prototype.draw = function() {
        this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    Yt.prototype.dispose = function() {};
    Yt.prototype.Oc = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.Dp(this.j, this.i, function() {});
        k.Oc(a, b, c, d, e, f, g, h);
        a = _.A(this.h);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Fla(b, k), b.draw()
    };
    Yt.prototype.uf = function(a) {
        this.h.push(a);
        this.g && Fla(a, this.g);
        this.i.refresh()
    };
    Yt.prototype.og = function(a) {
        _.xb(this.h, a)
    };
    $t.uf = Ela;
    $t.og = Dla;
    _.Xe("overlay", {
        Iq: function(a) {
            if (a) {
                (0, Zt.og)(a);
                (0, $t.og)(a);
                var b = a.getMap();
                b && (b instanceof _.lf ? (0, $t.uf)(a) : (0, Zt.uf)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.hq(a, {
                onClick: function(b) {
                    return _.Np(b.event)
                },
                Ad: function(b) {
                    return _.Kp(b)
                },
                pi: function(b) {
                    return _.Lp(b)
                },
                he: function(b) {
                    return _.Lp(b)
                },
                Gd: function(b) {
                    return _.Mp(b)
                }
            }).nj(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.af);
            a.addEventListener("contextmenu", _.af);
            a.addEventListener("dblclick", _.af);
            a.addEventListener("mousedown",
                _.af);
            a.addEventListener("mousemove", _.af);
            a.addEventListener("MSPointerDown", _.af);
            a.addEventListener("pointerdown", _.af);
            a.addEventListener("touchstart", _.af);
            a.addEventListener("wheel", _.af)
        }
    });
});