(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(101)
            }])
        },
        101: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSG: function() {
                    return b
                },
                default: function() {
                    return g
                }
            });
            var n = r(5893),
                l = r(7294),
                i = r(9008),
                s = r.n(i),
                a = r(5675),
                c = r.n(a),
                d = r(1664),
                o = r.n(d),
                x = r(9417),
                h = r(9603);

            function m(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        m(e, t, r[t])
                    }))
                }
                return e
            }
            var u = function(e) {
                    var t = e.name,
                        r = e.formatter,
                        l = e.url,
                        i = e.genre,
                        s = e.visits,
                        a = e.favorites,
                        c = e.rating,
                        d = e.playing;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "flex-grow",
                            children: [(0, n.jsx)("h5", {
                                className: "text-xl font-bold text-ellipsis overflow-hidden whitespace-nowrap mb-2",
                                children: t.replace(/\[[^[\]]*\]/g, "").replace(/\([^()]*\)/g, "").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "")
                            }), (0, n.jsx)("p", {
                                className: "text-bg-primary text-opacity-50 font-semibold",
                                children: i
                            }), (0, n.jsxs)("table", {
                                className: "mt-2 table-fixed w-full text-bg-primary text-opacity-50 font-semibold text-center",
                                children: [(0, n.jsx)("thead", {
                                    children: (0, n.jsxs)("tr", {
                                        children: [(0, n.jsx)("th", {
                                            children: (0, n.jsx)(h.G, {
                                                icon: x.FVb,
                                                fixedWidth: !0,
                                                size: "sm"
                                            })
                                        }), (0, n.jsx)("th", {
                                            children: (0, n.jsx)(h.G, {
                                                icon: x.GrN,
                                                fixedWidth: !0
                                            })
                                        }), (0, n.jsx)("th", {
                                            children: (0, n.jsx)(h.G, {
                                                icon: x.Tab,
                                                fixedWidth: !0
                                            })
                                        }), (0, n.jsx)("th", {
                                            children: (0, n.jsx)(h.G, {
                                                icon: x.u8Q,
                                                fixedWidth: !0
                                            })
                                        })]
                                    })
                                }), (0, n.jsx)("tbody", {
                                    children: (0, n.jsxs)("tr", {
                                        children: [(0, n.jsx)("td", {
                                            children: r.format(d)
                                        }), (0, n.jsx)("td", {
                                            children: r.format(s)
                                        }), (0, n.jsx)("td", {
                                            children: r.format(a)
                                        }), (0, n.jsxs)("td", {
                                            children: [c, "%"]
                                        })]
                                    })
                                })]
                            })]
                        }), (0, n.jsx)("a", {
                            href: l,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: (0, n.jsx)("button", {
                                className: "mt-4 bg-primary text-primary font-semibold text-base w-full py-3 rounded-lg",
                                children: "View Game"
                            })
                        })]
                    })
                },
                p = function(e) {
                    var t = Intl.NumberFormat("en-US", {
                            notation: "compact",
                            maximumFractionDigits: 1
                        }),
                        r = e.className,
                        l = e.style,
                        i = e.banner;
                    e.type;
                    return (0, n.jsxs)("div", {
                        className: ["border rounded-xl bg-text-primary text-bg-primary overflow-hidden flex flex-col", null !== r && void 0 !== r ? r : ""].join(" "),
                        style: l,
                        children: [(0, n.jsx)("div", {
                            className: "relative h-48 bg-primary rounded-t-xl flex-shrink-0",
                            children: i ? (0, n.jsx)(c(), {
                                src: null !== i && void 0 !== i ? i : "",
                                layout: "fill",
                                alt: "Banner",
                                className: "object-cover",
                                sizes: "50vw",
                                draggable: !1
                            }) : (0, n.jsx)("div", {
                                className: "bg-white animate-skeleton w-full h-full"
                            })
                        }), (0, n.jsx)("div", {
                            className: "relative flex-grow",
                            children: (0, n.jsx)("div", {
                                className: "p-4 text-left flex flex-col h-full",
                                children: (0, n.jsx)(u, f({}, e, {
                                    formatter: t
                                }))
                            })
                        })]
                    })
                };

            function j(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var b = !0;

            function g(e) {
                var t = e.games;
                return (0, n.jsxs)("div", {
                    className: "bg-black flex justify-center overflow-hidden max-w-screen",
                    children: [(0, n.jsxs)(s(), {
                        children: [(0, n.jsx)("title", {
                            children: "Quataun"
                        }), (0, n.jsx)("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }), (0, n.jsx)("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossOrigin: !0
                        }), (0, n.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
                            rel: "stylesheet"
                        })]
                    }), (0, n.jsxs)("main", {
                        className: "bg-black min-h-screen text-white relative",
                        children: [(0, n.jsxs)("header", {
                            className: "p-8 px-8 md:px-16 font-display text-4xl flex z-10 flex-col md:flex-row items-center gap-2 md:gap-0",
                            children: [(0, n.jsx)("h1", {
                                children: "alpha"
                            }), (0, n.jsxs)("div", {
                                className: "md:grow flex md:justify-end font-sans text-sm font-normal gap-2 md:gap-4 items-center md:w-12 hidden",
                                children: [(0, n.jsx)(o(), {
                                    href: "#",
                                    children: (0, n.jsx)("a", {
                                        children: "Information"
                                    })
                                }), (0, n.jsx)(o(), {
                                    href: "#",
                                    children: (0, n.jsx)("a", {
                                        children: "Partners"
                                    })
                                }), (0, n.jsx)(o(), {
                                    href: "#",
                                    children: (0, n.jsx)("a", {
                                        children: "Contact"
                                    })
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "relative",
                            children: [(0, n.jsxs)("div", {
                                className: "px-8 md:px-16 2xl:px-64 p-4 md:p-12 pb-0 md:pb-12 2xl:p-16 md:w-5/6 lg:w-2/3 leading-10 relative z-10",
                                children: [(0, n.jsx)("h1", {
                                    className: "inline font-display text-4xl lg:text-6xl",
                                    children: "alpha"
                                }), (0, n.jsx)("h1", {
                                    className: "inline text-3xl lg:text-5xl font-semibold",
                                    children: " is a digital experience agency supporting brands and creators alike."
                                }), (0, n.jsx)("h1", {
                                    className: "font-normal mt-2 lg:mt-6 text-xl lg:text-3xl",
                                    children: "Whether you're a content creator, artist, developer or brand, we'll help you find and connect with your audience from start to finish."
                                })]
                            }), (0, n.jsx)("div", {
                                className: "absolute border-white border-2 rounded-full border-opacity-50 hidden md:block",
                                Style: "height:800px;width:800px;top:-300px;right:-200px;z-index:0;"
                            })]
                        }), (0, n.jsx)("div", {
                            className: "px-8 md:px-16 2xl:px-64 p-12 mt-8 md:mt-24 text-center",
                            children: (0, n.jsxs)("div", {
                                className: "relative",
                                children: [(0, n.jsxs)("div", {
                                    className: "w-full md:w-1/2 inline-block relative pb-8",
                                    Style: "z-index:1;",
                                    children: [(0, n.jsx)("h1", {
                                        className: "inline text-3xl lg:text-5xl font-semibold leading-10",
                                        children: "Explore games partnered with"
                                    }), (0, n.jsx)("h1", {
                                        className: "inline font-display text-4xl lg:text-6xl leading-10",
                                        children: " alpha"
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "flex justify-center flex-wrap gap-4 md:gap-6 mt-2 sm:mt-4 md:mt-8 text-center relative z-10",
                                    children: t.map((function(e) {
                                        return (0, l.createElement)(p, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                })))), n.forEach((function(t) {
                                                    j(e, t, r[t])
                                                }))
                                            }
                                            return e
                                        }({}, e, {
                                            className: "home-grid-card",
                                            key: e.id
                                        }))
                                    }))
                                }), (0, n.jsx)("div", {
                                    className: "absolute border-white border-opacity-50 border-2 rounded-full hidden md:block",
                                    Style: "height:1100px;width:1100px;top:0px;left:-800px;z-index:0;"
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex items-center p-8 flex-col gap-1",
                            children: (0, n.jsxs)("h1", {
                                children: ["Quataun LLC \xa9 ", (new Date).getFullYear()]
                            })
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [976, 103, 774, 888, 179], (function() {
            return t = 5557, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);