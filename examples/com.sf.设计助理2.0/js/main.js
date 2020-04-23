(function(e, t) {
    function n(t, n, l, a) {
        var r = {
            data: a || 0 === a || !1 === a ? a: n ? n.data: {},
            _wrap: n ? n._wrap: null,
            tmpl: null,
            parent: n || null,
            nodes: [],
            calls: s,
            nest: c,
            wrap: f,
            html: m,
            update: d
        };
        return t && e.extend(r, t, {
            nodes: [],
            parent: n
        }),
        l && (r.tmpl = l, r._ctnt = r._ctnt || e.isFunction(r.tmpl) && r.tmpl(e, r) || l, r.key = ++v, (T.length ? y: g)[v] = r),
        r
    }
    function l(t, n, r) {
        var o, p = r ? e.map(r,
        function(e) {
            return "string" == typeof e ? t.key ? e.replace(x.template_anotate, "$1 " + $ + '="' + t.key + '" $2') : e: l(e, t, e._ctnt)
        }) : t;
        return n ? p: (p = p.join(""), p.replace(x.text_only_template,
        function(t, n, l, r) {
            o = e(l).get(),
            u(o),
            n && (o = a(n).concat(o)),
            r && (o = o.concat(a(r)))
        }), o || a(p))
    }
    function a(t) {
        var n = document.createElement("div");
        return n.innerHTML = t,
        e.makeArray(n.childNodes)
    }
    function r(t) {
        var n = function(n, l, a, r, o, i, u) {
            if (!a) return "');__.push('";
            var s, c, f, m = e.tmpl.tag[a];
            return ! m && window.console && console.group && (console.group("Exception"), console.error(t), console.error("Unknown tag: ", a), console.error(n), console.groupEnd("Exception")),
            m ? (s = m._default || [], i && !x.last_word.test(o) && (o += i, i = ""), o ? (o = p(o), u = u ? "," + p(u) + ")": i ? ")": "", c = i ? o.indexOf(".") > -1 ? o + p(i) : "(" + o + ").call($item" + u: o, f = i ? c: "(typeof(" + o + ")==='function'?(" + o + ").call($item):(" + o + "))") : f = c = s.$1 || "null", r = p(r), "');" + m[l ? "close": "open"].split("$notnull_1").join(o ? "typeof(" + o + ")!=='undefined' && (" + o + ")!=null": "true").split("$1a").join(f).split("$1").join(c).split("$2").join(r || s.$2 || "") + "__.push('") : "');__.push('"
        },
        l = function() {
            return e.tmpl.tag[arguments[2]] ? (console.group("Depreciated"), console.info(t), console.info("Markup has old style indicators, use {% %} instead of {{ }}"), console.info(arguments[0]), console.groupEnd("Depreciated"), n.apply(this, arguments)) : "');__.push('{{" + arguments[2] + "}}');__.push('"
        },
        a = "var $=$,call,__=[],$data=$item.data; with($data){__.push('",
        r = e.trim(t);
        return r = r.replace(x.sq_escape, "\\$1"),
        r = r.replace(x.nl_strip, " "),
        r = r.replace(x.shortcut_replace, "{%= $1%}"),
        r = r.replace(x.lang_parse, n),
        r = r.replace(x.old_lang_parse, l),
        a += r,
        a += "');}return __;",
        new Function("$", "$item", a)
    }
    function o(t, n) {
        t._wrap = l(t, !0, e.isArray(n) ? n: [x.html_expr.test(n) ? n: e(n).html()]).join("")
    }
    function p(e) {
        return e ? e.replace(x.sq_unescape, "'").replace(x.dq_unescape, "\\") : null
    }
    function i(e) {
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)),
        t.innerHTML
    }
    function u(t) {
        function l(t) {
            function l(e) {
                e += u,
                o = s[e] = s[e] || n(o, g[o.parent.key + u] || o.parent)
            }
            var a, r, o, p, i = t;
            if (p = t.getAttribute($)) {
                for (; i.parentNode && 1 === (i = i.parentNode).nodeType && !(a = i.getAttribute($)););
                a !== p && (i = i.parentNode ? 11 === i.nodeType ? 0 : i.getAttribute($) || 0 : 0, (o = g[p]) || (o = y[p], o = n(o, g[i] || y[i]), o.key = ++v, g[v] = o), k && l(p)),
                t.removeAttribute($)
            } else k && (o = e.data(t, "tmplItem")) && (l(o.key), g[o.key] = o, i = e.data(t.parentNode, "tmplItem"), i = i ? i.key: 0);
            if (o) {
                for (r = o; r && r.key != i;) r.nodes.push(t),
                r = r.parent;
                delete o._ctnt,
                delete o._wrap,
                e.data(t, "tmplItem", o)
            }
        }
        var a, r, o, p, i, u = "_" + k,
        s = {};
        for (o = 0, p = t.length; o < p; o++) if (1 === (a = t[o]).nodeType) {
            for (r = a.getElementsByTagName("*"), i = r.length - 1; i >= 0; i--) l(r[i]);
            l(a)
        }
    }
    function s(e, t, n, l) {
        if (!e) return T.pop();
        T.push({
            _: e,
            tmpl: t,
            item: this,
            data: n,
            options: l
        })
    }
    function c(t, n, l) {
        return e.tmpl(e.template(t), n, l, this)
    }
    function f(t, n) {
        var l = t.options || {};
        return l.wrapped = n,
        e.tmpl(e.template(t.tmpl), t.data, l, t.item)
    }
    function m(t, n) {
        var l = this._wrap;
        return e.map(e(e.isArray(l) ? l.join("") : l).filter(t || "*"),
        function(e) {
            return n ? e.innerText || e.textContent: e.outerHTML || i(e)
        })
    }
    function d() {
        var t = this.nodes;
        e.tmpl(null, null, null, this).insertBefore(t[0]),
        e(t).remove()
    }
    var _, h = e.fn.domManip,
    $ = "_tmplitem",
    g = {},
    y = {},
    w = {
        key: 0,
        data: {}
    },
    v = 0,
    k = 0,
    T = [],
    x = {
        sq_escape: /([\\'])/g,
        sq_unescape: /\\'/g,
        dq_unescape: /\\\\/g,
        nl_strip: /[\r\t\n]/g,
        shortcut_replace: /\$\{([^\}]*)\}/g,
        lang_parse: /\{\%(\/?)(\w+|.)(?:\(((?:[^\%]|\%(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\%]|\%(?!\}))*?)\))?\s*\%\}/g,
        old_lang_parse: /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
        template_anotate: /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,
        text_only_template: /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
        html_expr: /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! |\{\%! /,
        last_word: /\w$/
    };
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(t, n) {
        e.fn[t] = function(l) {
            var a, r, o, p, i = [],
            u = e(l),
            s = 1 === this.length && this[0].parentNode;
            if (_ = g || {},
            s && 11 === s.nodeType && 1 === s.childNodes.length && 1 === u.length) u[n](this[0]),
            i = this;
            else {
                for (r = 0, o = u.length; r < o; r++) k = r,
                a = (r > 0 ? this.clone(!0) : this).get(),
                e(u[r])[n](a),
                i = i.concat(a);
                k = 0,
                i = this.pushStack(i, t, u.selector)
            }
            return p = _,
            _ = null,
            e.tmpl.complete(p),
            i
        }
    }),
    e.fn.extend({
        tmpl: function(t, n, l) {
            var a = e.tmpl(this[0], t, n, l);
            return a
        },
        tmplItem: function() {
            var t = e.tmplItem(this[0]);
            return t
        },
        template: function(t) {
            var n = e.template(t, this[0]);
            return n
        },
        domManip: function(t, n, l, a) {
            if (t[0] && e.isArray(t[0])) {
                for (var r, o = e.makeArray(arguments), p = t[0], i = p.length, u = 0; u < i && !(r = e.data(p[u++], "tmplItem")););
                r && k && (o[2] = function(t) {
                    e.tmpl.afterManip(this, t, l)
                }),
                h.apply(this, o)
            } else h.apply(this, arguments);
            return k = 0,
            _ || e.tmpl.complete(g),
            this
        }
    }),
    e.extend({
        tmpl: function(t, a, r, p) {
            var i, u = !p;
            if (u) p = w,
            t = e.template[t] || e.template(null, t),
            y = {};
            else if (!t) return t = p.tmpl,
            g[p.key] = p,
            p.nodes = [],
            p.wrapped && o(p, p.wrapped),
            e(l(p, null, p.tmpl(e, p)));
            return t ? ("function" == typeof a && (a = a.call(p || {})), r && r.wrapped && o(r, r.wrapped), i = e.isArray(a) ? e.map(a,
            function(e) {
                return e ? n(r, p, t, e) : null
            }) : [n(r, p, t, a)], u ? e(l(p, null, i)) : i) : []
        },
        tmplItem: function(t) {
            var n;
            for (t instanceof e && (t = t[0]); t && 1 === t.nodeType && !(n = e.data(t, "tmplItem")) && (t = t.parentNode););
            return n || w
        },
        template: function(t, n) {
            return n ? ("string" == typeof n ? n = r(n) : n instanceof e && (n = n[0] || {}), n.nodeType && (n = e.data(n, "tmpl") || e.data(n, "tmpl", r(n.innerHTML))), "string" == typeof t ? e.template[t] = n: n) : t ? "string" != typeof t ? e.template(null, t) : e.template[t] || e.template(null, t) : null
        },
        encode: function(e) {
            return ("" + e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    }),
    e.extend(e.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            if: {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            else: {
                open: "}else{"
            },
            elif: {
                open: "}else if(($notnull_1) && $1a){"
            },
            elseif: {
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){__.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){__.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function(e) {
            g = {}
        },
        afterManip: function(t, n, l) {
            var a = 11 === n.nodeType ? e.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
            l.call(t, n),
            u(a),
            k++
        }
    })
})(jQuery);