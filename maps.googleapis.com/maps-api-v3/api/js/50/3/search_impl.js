google.maps.__gjsload__('search_impl', function(_) {
    var bjb = function(a) {
            _.F(this, a, 4)
        },
        djb = function(a) {
            cjb || (cjb = {
                N: "sssM",
                aa: ["ss"]
            });
            var b = cjb;
            return _.Gi.fb(a.Qb(), b)
        },
        ejb = function(a, b) {
            a.G[2] = b
        },
        X$ = function(a) {
            _.F(this, a, 3)
        },
        fjb = function() {
            var a = _.Bj,
                b = _.Qi;
            this.h = _.Mf;
            this.g = _.pk(_.Fr, a, _.fs + "/maps/api/js/LayersService.GetFeature", b)
        },
        ijb = function(a, b, c) {
            var d = _.LB(new fjb);
            c.gs = (0, _.Pa)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.mCa(c, _.bI(b));
            var e = [];
            e.push(_.K.addListener(c, "click", (0, _.Pa)(gjb, null, a)));
            _.qb(["mouseover", "mouseout", "mousemove"],
                function(f) {
                    e.push(_.K.addListener(c, f, (0, _.Pa)(hjb, null, a, f)))
                });
            e.push(_.K.addListener(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        gjb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.sk(e, 1) ? new _.Ee(_.Ed(e.getLocation(), 0), _.Ed(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.Od(e, 2); g < h; ++g) {
                    var k = new _.hI(_.Md(e, 2, g));
                    f.fields[k.getKey()] = k.Oa()
                }
            }
            _.K.trigger(a, "click", b, c, d, f)
        },
        hjb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.K.trigger(a, b, c, d, e, h, g)
        },
        jjb = function() {},
        cjb;
    _.D(bjb, _.E);
    bjb.prototype.mb = function() {
        return _.G(this, 1)
    };
    _.D(X$, _.E);
    X$.prototype.getStatus = function() {
        return _.Dd(this, 0, -1)
    };
    X$.prototype.getLocation = function() {
        return new _.Em(this.G[1])
    };
    fjb.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new bjb;
        d.G[0] = a.layerId.split("|")[0];
        d.G[1] = a.featureId;
        ejb(d, _.Pd(_.Sd(this.h)));
        for (var e in a.parameters) {
            var f = new _.hI(_.Nd(d, 3));
            f.G[0] = e;
            f.G[1] = a.parameters[e]
        }
        a = djb(d);
        this.g(a, c, c);
        return a
    };
    fjb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    jjb.prototype.xv = function(a) {
        if (_.hi[15]) {
            var b = a.ze,
                c = a.ze = a.getMap();
            b && a.g && (a.i ? (b = b.__gm.h, b.set(b.get().pg(a.g))) : a.g && _.ICa(a.g, b) && (_.qb(a.h || [], _.K.removeListener), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds");
                b = new _.Bl;
                d = d.split("|");
                b.layerId =
                    d[0];
                for (var t = 1; t < d.length; ++t) {
                    var v = _.A(d[t].split(":")),
                        w = v.next().value;
                    v = _.oa(v);
                    b.parameters[w] = v.join(":")
                }
                e && (b.spotlightDescription = new _.io(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.El(g));
                m && (b.travelMapRequest = new _.Ar(m));
                h && (b.mapsApiLayer = new _.Dk(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.fn(p));
                q && (b.overlayLayer = new _.wn(q));
                r && (b.caseExperimentIds = r.slice(0));
                b.darkLaunch = !!k;
                a.g = b;
                a.i = a.get("renderOnBaseMap");
                a.i ? (a = c.__gm.h, a.set(a.get().Je(b))) :
                    ijb(a, c, b);
                _.O(c, "Lg");
                _.N(c, 148282)
            }
        }
    };
    _.Xe("search_impl", new jjb);
});