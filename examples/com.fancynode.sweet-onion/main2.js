'use strict';
!function(m) {
  /**
   * @param {string} i
   * @return {?}
   */
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  /** @type {!Array} */
  t.m = m;
  t.c = n;
  /**
   * @param {!Function} d
   * @param {string} name
   * @param {!Function} n
   * @return {undefined}
   */
  t.d = function(d, name, n) {
    if (!t.o(d, name)) {
      Object.defineProperty(d, name, {
        enumerable : true,
        get : n
      });
    }
  };
  /**
   * @param {!Object} x
   * @return {undefined}
   */
  t.r = function(x) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(x, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(x, "__esModule", {
      value : true
    });
  };
  /**
   * @param {string} val
   * @param {number} byteOffset
   * @return {?}
   */
  t.t = function(val, byteOffset) {
    if (1 & byteOffset && (val = t(val)), 8 & byteOffset) {
      return val;
    }
    if (4 & byteOffset && "object" == typeof val && val && val.__esModule) {
      return val;
    }
    /** @type {!Object} */
    var d = Object.create(null);
    if (t.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : val
    }), 2 & byteOffset && "string" != typeof val) {
      var s;
      for (s in val) {
        t.d(d, s, function(attrPropertyName) {
          return val[attrPropertyName];
        }.bind(null, s));
      }
    }
    return d;
  };
  /**
   * @param {!Object} module
   * @return {?}
   */
  t.n = function(module) {
    /** @type {function(): ?} */
    var n = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return t.d(n, "a", n), n;
  };
  /**
   * @param {!Function} e
   * @param {string} input
   * @return {?}
   */
  t.o = function(e, input) {
    return Object.prototype.hasOwnProperty.call(e, input);
  };
  /** @type {string} */
  t.p = "";
  t(t.s = 30);
}([function(options, e, n) {
  var i;
  var root;
  var init;
  root = "undefined" != typeof window ? window : this;
  /**
   * @param {!Object} window
   * @param {!Function} screen
   * @return {?}
   */
  init = function(window, screen) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function isArrayLike(obj) {
      var length = !!obj && "length" in obj && obj.length;
      var ltype = jQuery.type(obj);
      return "function" !== ltype && !jQuery.isWindow(obj) && ("array" === ltype || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj);
    }
    /**
     * @param {!Object} elements
     * @param {!Object} qualifier
     * @param {boolean} not
     * @return {?}
     */
    function winnow(elements, qualifier, not) {
      if (jQuery.isFunction(qualifier)) {
        return jQuery.grep(elements, function(elem, i) {
          return !!qualifier.call(elem, i, elem) !== not;
        });
      }
      if (qualifier.nodeType) {
        return jQuery.grep(elements, function(elem) {
          return elem === qualifier !== not;
        });
      }
      if ("string" == typeof qualifier) {
        if (risSimple.test(qualifier)) {
          return jQuery.filter(qualifier, elements, not);
        }
        qualifier = jQuery.filter(qualifier, elements);
      }
      return jQuery.grep(elements, function(name) {
        return indexOf.call(qualifier, name) > -1 !== not;
      });
    }
    /**
     * @param {(Array|Element)} cur
     * @param {number} dir
     * @return {?}
     */
    function sibling(cur, dir) {
      for (; (cur = cur[dir]) && 1 !== cur.nodeType;) {
      }
      return cur;
    }
    /**
     * @return {undefined}
     */
    function $__jsx_onload() {
      document.removeEventListener("DOMContentLoaded", $__jsx_onload);
      window.removeEventListener("load", $__jsx_onload);
      jQuery.ready();
    }
    /**
     * @return {undefined}
     */
    function Data() {
      this.expando = jQuery.expando + Data.uid++;
    }
    /**
     * @param {!Object} child
     * @param {!Object} target
     * @param {?} data
     * @return {?}
     */
    function set(child, target, data) {
      var key;
      if (void 0 === data && 1 === child.nodeType) {
        if (key = "data-" + target.replace(rhyphen, "-$&").toLowerCase(), "string" == typeof(data = child.getAttribute(key))) {
          try {
            data = "true" === data || "false" !== data && ("null" === data ? null : +data + "" === data ? +data : JSON_START.test(data) ? jQuery.parseJSON(data) : data);
          } catch (t) {
          }
          self.set(child, target, data);
        } else {
          data = void 0;
        }
      }
      return data;
    }
    /**
     * @param {!Object} elem
     * @param {string} prop
     * @param {!Object} valueParts
     * @param {!Object} tween
     * @return {?}
     */
    function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted;
      /** @type {number} */
      var scale = 1;
      /** @type {number} */
      var s = 20;
      /** @type {function(): ?} */
      var currentValue = tween ? function() {
        return tween.cur();
      } : function() {
        return jQuery.css(elem, prop, "");
      };
      var initial = currentValue();
      var unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px");
      var initialInUnit = (jQuery.cssNumber[prop] || "px" !== unit && +initial) && regex.exec(jQuery.css(elem, prop));
      if (initialInUnit && initialInUnit[3] !== unit) {
        unit = unit || initialInUnit[3];
        valueParts = valueParts || [];
        /** @type {number} */
        initialInUnit = +initial || 1;
        do {
          /** @type {number} */
          initialInUnit = initialInUnit / (scale = scale || ".5");
          jQuery.style(elem, prop, initialInUnit + unit);
        } while (scale !== (scale = currentValue() / initial) && 1 !== scale && --s);
      }
      return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted;
    }
    /**
     * @param {!Object} context
     * @param {number} tag
     * @return {?}
     */
    function getAll(context, tag) {
      var n = void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : void 0 !== context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
      return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], n) : n;
    }
    /**
     * @param {number} elems
     * @param {!NodeList} refElements
     * @return {undefined}
     */
    function setGlobalEval(elems, refElements) {
      /** @type {number} */
      var i = 0;
      var length = elems.length;
      for (; i < length; i++) {
        data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
      }
    }
    /**
     * @param {!Object} elems
     * @param {!Object} context
     * @param {!Array} scripts
     * @param {!Object} arr
     * @param {(!Function|string)} result
     * @return {?}
     */
    function buildFragment(elems, context, scripts, arr, result) {
      var elem;
      var tmp;
      var tag;
      var wrap;
      var ret;
      var j;
      var fragment = context.createDocumentFragment();
      /** @type {!Array} */
      var results = [];
      /** @type {number} */
      var i = 0;
      var length = elems.length;
      for (; i < length; i++) {
        if ((elem = elems[i]) || 0 === elem) {
          if ("object" === jQuery.type(elem)) {
            jQuery.merge(results, elem.nodeType ? [elem] : elem);
          } else {
            if (re_commas.test(elem)) {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (Z.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              for (; j--;) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(results, tmp.childNodes);
              /** @type {string} */
              (tmp = fragment.firstChild).textContent = "";
            } else {
              results.push(context.createTextNode(elem));
            }
          }
        }
      }
      /** @type {string} */
      fragment.textContent = "";
      /** @type {number} */
      i = 0;
      for (; elem = results[i++];) {
        if (arr && jQuery.inArray(elem, arr) > -1) {
          if (result) {
            result.push(elem);
          }
        } else {
          if (ret = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), ret && setGlobalEval(tmp), scripts) {
            /** @type {number} */
            j = 0;
            for (; elem = tmp[j++];) {
              if (opacityRe.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
      }
      return fragment;
    }
    /**
     * @return {?}
     */
    function returnTrue() {
      return true;
    }
    /**
     * @return {?}
     */
    function returnFalse() {
      return false;
    }
    /**
     * @return {?}
     */
    function get() {
      try {
        return document.activeElement;
      } catch (t) {
      }
    }
    /**
     * @param {!Object} text
     * @param {!Object} obj
     * @param {!Object} e
     * @param {!Object} n
     * @param {!Object} fn
     * @param {number} capture
     * @return {?}
     */
    function add(text, obj, e, n, fn, capture) {
      var handler;
      var key;
      if ("object" == typeof obj) {
        for (key in "string" != typeof e && (n = n || e, e = void 0), obj) {
          add(text, key, e, n, obj[key], capture);
        }
        return text;
      }
      if (null == n && null == fn ? (fn = e, n = e = void 0) : null == fn && ("string" == typeof e ? (fn = n, n = void 0) : (fn = n, n = e, e = void 0)), false === fn) {
        /** @type {function(): ?} */
        fn = returnFalse;
      } else {
        if (!fn) {
          return text;
        }
      }
      return 1 === capture && (handler = fn, (fn = function(type) {
        return jQuery().off(type), handler.apply(this, arguments);
      }).guid = handler.guid || (handler.guid = jQuery.guid++)), text.each(function() {
        jQuery.event.add(this, obj, fn, n, e);
      });
    }
    /**
     * @param {!Object} elem
     * @param {!Object} content
     * @return {?}
     */
    function manipulationTarget(elem, content) {
      return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    /**
     * @param {!Element} elem
     * @return {?}
     */
    function next(elem) {
      return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
    }
    /**
     * @param {!Object} s
     * @return {?}
     */
    function createGeneNameGenomicState(s) {
      /** @type {(Array<string>|null)} */
      var l = re.exec(s.type);
      return l ? s.type = l[1] : s.removeAttribute("type"), s;
    }
    /**
     * @param {!Object} src
     * @param {!Object} val
     * @return {undefined}
     */
    function cloneCopyEvent(src, val) {
      var i;
      var tableslen;
      var key;
      var type;
      var item;
      var data;
      var u;
      var values;
      if (1 === val.nodeType) {
        if (data_priv.hasData(src) && (type = data_priv.access(src), item = data_priv.set(val, type), values = type.events)) {
          for (key in delete item.handle, item.events = {}, values) {
            /** @type {number} */
            i = 0;
            tableslen = values[key].length;
            for (; i < tableslen; i++) {
              jQuery.event.add(val, key, values[key][i]);
            }
          }
        }
        if (self.hasData(src)) {
          data = self.access(src);
          u = jQuery.extend({}, data);
          self.set(val, u);
        }
      }
    }
    /**
     * @param {!Object} collection
     * @param {!Object} args
     * @param {!Function} callback
     * @param {!Function} ignored
     * @return {?}
     */
    function domManip(collection, args, callback, ignored) {
      /** @type {!Array<?>} */
      args = concat.apply([], args);
      var fragment;
      var first;
      var element;
      var itl;
      var node;
      var document;
      /** @type {number} */
      var key = 0;
      var result = collection.length;
      /** @type {number} */
      var index = result - 1;
      var a = args[0];
      var klases = jQuery.isFunction(a);
      if (klases || result > 1 && "string" == typeof a && !support.checkClone && reValidName.test(a)) {
        return collection.each(function(index) {
          var self = collection.eq(index);
          if (klases) {
            args[0] = a.call(this, index, self.html());
          }
          domManip(self, args, callback, ignored);
        });
      }
      if (result && (first = (fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored)).firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
        itl = (element = jQuery.map(getAll(fragment, "script"), next)).length;
        for (; key < result; key++) {
          node = fragment;
          if (key !== index) {
            node = jQuery.clone(node, true, true);
            if (itl) {
              jQuery.merge(element, getAll(node, "script"));
            }
          }
          callback.call(collection[key], node, key);
        }
        if (itl) {
          document = element[element.length - 1].ownerDocument;
          jQuery.map(element, createGeneNameGenomicState);
          /** @type {number} */
          key = 0;
          for (; key < itl; key++) {
            node = element[key];
            if (opacityRe.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(document, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
              }
            }
          }
        }
      }
      return collection;
    }
    /**
     * @param {!Object} target
     * @param {!Object} selector
     * @param {string} keepData
     * @return {?}
     */
    function remove(target, selector, keepData) {
      var elem;
      var nodes = selector ? jQuery.filter(selector, target) : target;
      /** @type {number} */
      var i = 0;
      for (; null != (elem = nodes[i]); i++) {
        if (!(keepData || 1 !== elem.nodeType)) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }
      return target;
    }
    /**
     * @param {?} name
     * @param {!Object} doc
     * @return {?}
     */
    function actualDisplay(name, doc) {
      var elem = jQuery(doc.createElement(name)).appendTo(doc.body);
      var style1 = jQuery.css(elem[0], "display");
      return elem.detach(), style1;
    }
    /**
     * @param {?} nodeName
     * @return {?}
     */
    function defaultDisplay(nodeName) {
      var doc = document;
      var display = elemdisplay[nodeName];
      return display || ("none" !== (display = actualDisplay(nodeName, doc)) && display || ((doc = (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement))[0].contentDocument).write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), elemdisplay[nodeName] = display), display;
    }
    /**
     * @param {!Object} elem
     * @param {string} name
     * @param {!Object} computed
     * @return {?}
     */
    function curCSS(elem, name, computed) {
      var minWidth;
      var width;
      var maxWidth;
      var ret;
      var style = elem.style;
      return "" !== (ret = (computed = computed || getStyles(elem)) ? computed.getPropertyValue(name) || computed[name] : void 0) && void 0 !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), computed && !support.pixelMarginRight() && rnumnonpx.test(ret) && namespaces.test(name) && (minWidth = style.width, width = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = minWidth, style.minWidth = 
      width, style.maxWidth = maxWidth), void 0 !== ret ? ret + "" : ret;
    }
    /**
     * @param {?} conditionFn
     * @param {!Function} hookFn
     * @return {?}
     */
    function addGetHookIf(conditionFn, hookFn) {
      return {
        get : function() {
          if (!conditionFn()) {
            return (this.get = hookFn).apply(this, arguments);
          }
          delete this.get;
        }
      };
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function vendorPropName(name) {
      if (name in style) {
        return name;
      }
      var UserSelect = name[0].toUpperCase() + name.slice(1);
      /** @type {number} */
      var i = prefixes.length;
      for (; i--;) {
        if ((name = prefixes[i] + UserSelect) in style) {
          return name;
        }
      }
    }
    /**
     * @param {!Object} type
     * @param {!Object} value
     * @param {string} str
     * @return {?}
     */
    function fn(type, value, str) {
      /** @type {(Array<string>|null)} */
      var matches = regex.exec(value);
      return matches ? Math.max(0, matches[2] - (str || 0)) + (matches[3] || "px") : value;
    }
    /**
     * @param {!Object} elem
     * @param {string} name
     * @param {?} extra
     * @param {boolean} isBorderBox
     * @param {!Object} styles
     * @return {?}
     */
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
      /** @type {number} */
      var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0;
      /** @type {number} */
      var val = 0;
      for (; i < 4; i = i + 2) {
        if ("margin" === extra) {
          val = val + jQuery.css(elem, extra + cssExpand[i], true, styles);
        }
        if (isBorderBox) {
          if ("content" === extra) {
            /** @type {number} */
            val = val - jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          }
          if ("margin" !== extra) {
            /** @type {number} */
            val = val - jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        } else {
          val = val + jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          if ("padding" !== extra) {
            val = val + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        }
      }
      return val;
    }
    /**
     * @param {!Object} elem
     * @param {string} name
     * @param {!Object} extra
     * @return {?}
     */
    function getWidthOrHeight(elem, name, extra) {
      /** @type {boolean} */
      var valueIsBorderBox = true;
      var val = "width" === name ? elem.offsetWidth : elem.offsetHeight;
      var styles = getStyles(elem);
      /** @type {boolean} */
      var isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
      if (val <= 0 || null == val) {
        if (((val = curCSS(elem, name, styles)) < 0 || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) {
          return val;
        }
        valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
        /** @type {number} */
        val = parseFloat(val) || 0;
      }
      return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    /**
     * @param {!NodeList} elements
     * @param {number} show
     * @return {?}
     */
    function showHide(elements, show) {
      var display;
      var elem;
      var hidden;
      /** @type {!Array} */
      var values = [];
      /** @type {number} */
      var index = 0;
      var length = elements.length;
      for (; index < length; index++) {
        if ((elem = elements[index]).style) {
          values[index] = data_priv.get(elem, "olddisplay");
          display = elem.style.display;
          if (show) {
            if (!(values[index] || "none" !== display)) {
              /** @type {string} */
              elem.style.display = "";
            }
            if ("" === elem.style.display && isHidden(elem)) {
              values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
            }
          } else {
            hidden = isHidden(elem);
            if (!("none" === display && hidden)) {
              data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
            }
          }
        }
      }
      /** @type {number} */
      index = 0;
      for (; index < length; index++) {
        if ((elem = elements[index]).style) {
          if (!(show && "none" !== elem.style.display && "" !== elem.style.display)) {
            elem.style.display = show ? values[index] || "" : "none";
          }
        }
      }
      return elements;
    }
    /**
     * @param {!Array} type
     * @param {!Function} context
     * @param {string} object
     * @param {string} end
     * @param {number} easing
     * @return {?}
     */
    function Tween(type, context, object, end, easing) {
      return new Tween.prototype.init(type, context, object, end, easing);
    }
    /**
     * @return {?}
     */
    function createFxNow() {
      return window.setTimeout(function() {
        fxNow = void 0;
      }), fxNow = jQuery.now();
    }
    /**
     * @param {string} type
     * @param {number} includeWidth
     * @return {?}
     */
    function genFx(type, includeWidth) {
      var which;
      /** @type {number} */
      var i = 0;
      var attrs = {
        height : type
      };
      /** @type {number} */
      includeWidth = includeWidth ? 1 : 0;
      for (; i < 4; i = i + (2 - includeWidth)) {
        attrs["margin" + (which = cssExpand[i])] = attrs["padding" + which] = type;
      }
      return includeWidth && (attrs.opacity = attrs.width = type), attrs;
    }
    /**
     * @param {?} value
     * @param {!Object} prop
     * @param {?} animation
     * @return {?}
     */
    function createTween(value, prop, animation) {
      var tween;
      var t = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]);
      /** @type {number} */
      var o = 0;
      var oo = t.length;
      for (; o < oo; o++) {
        if (tween = t[o].call(animation, prop, value)) {
          return tween;
        }
      }
    }
    /**
     * @param {!Object} elem
     * @param {?} properties
     * @param {!Object} options
     * @return {?}
     */
    function Animation(elem, properties, options) {
      var result;
      var o;
      /** @type {number} */
      var index = 0;
      var ncells = Animation.prefilters.length;
      var deferred = jQuery.Deferred().always(function() {
        delete tick.elem;
      });
      /**
       * @return {?}
       */
      var tick = function() {
        if (o) {
          return false;
        }
        var currentTime = fxNow || createFxNow();
        /** @type {number} */
        var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
        /** @type {number} */
        var percent = 1 - (remaining / animation.duration || 0);
        /** @type {number} */
        var i = 0;
        var length = animation.tweens.length;
        for (; i < length; i++) {
          animation.tweens[i].run(percent);
        }
        return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (deferred.resolveWith(elem, [animation]), false);
      };
      var animation = deferred.promise({
        elem : elem,
        props : jQuery.extend({}, properties),
        opts : jQuery.extend(true, {
          specialEasing : {},
          easing : jQuery.easing._default
        }, options),
        originalProperties : properties,
        originalOptions : options,
        startTime : fxNow || createFxNow(),
        duration : options.duration,
        tweens : [],
        createTween : function(prop, end) {
          var result = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
          return animation.tweens.push(result), result;
        },
        stop : function(value) {
          /** @type {number} */
          var i = 0;
          var mid = value ? animation.tweens.length : 0;
          if (o) {
            return this;
          }
          /** @type {boolean} */
          o = true;
          for (; i < mid; i++) {
            animation.tweens[i].run(1);
          }
          return value ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, value])) : deferred.rejectWith(elem, [animation, value]), this;
        }
      });
      var props = animation.props;
      (function(res, object) {
        var key;
        var name;
        var value;
        var obj;
        var hooks;
        for (key in res) {
          if (value = object[name = jQuery.camelCase(key)], obj = res[key], jQuery.isArray(obj) && (value = obj[1], obj = res[key] = obj[0]), key !== name && (res[name] = obj, delete res[key]), (hooks = jQuery.cssHooks[name]) && "expand" in hooks) {
            for (key in obj = hooks.expand(obj), delete res[name], obj) {
              if (!(key in res)) {
                res[key] = obj[key];
                object[key] = value;
              }
            }
          } else {
            object[name] = value;
          }
        }
      })(props, animation.opts.specialEasing);
      for (; index < ncells; index++) {
        if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) {
          return jQuery.isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)), result;
        }
      }
      return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, {
        elem : elem,
        anim : animation,
        queue : animation.opts.queue
      })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    /**
     * @param {!Node} el
     * @return {?}
     */
    function getClass(el) {
      return el.getAttribute && el.getAttribute("class") || "";
    }
    /**
     * @param {!Object} structure
     * @return {?}
     */
    function addToPrefiltersOrTransports(structure) {
      return function(name, n) {
        if ("string" != typeof name) {
          /** @type {string} */
          n = name;
          /** @type {string} */
          name = "*";
        }
        var type;
        /** @type {number} */
        var callbackCount = 0;
        var callbackVals = name.toLowerCase().match(rnotwhite) || [];
        if (jQuery.isFunction(n)) {
          for (; type = callbackVals[callbackCount++];) {
            if ("+" === type[0]) {
              type = type.slice(1) || "*";
              (structure[type] = structure[type] || []).unshift(n);
            } else {
              (structure[type] = structure[type] || []).push(n);
            }
          }
        }
      };
    }
    /**
     * @param {!Object} structure
     * @param {?} options
     * @param {!Object} originalOptions
     * @param {?} jqXHR
     * @return {?}
     */
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      /**
       * @param {string} dataType
       * @return {?}
       */
      function inspect(dataType) {
        var selected;
        return inspected[dataType] = true, jQuery.each(structure[dataType] || [], function(canCreateDiscussions, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), false);
        }), selected;
      }
      var inspected = {};
      /** @type {boolean} */
      var seekingTransport = structure === transports;
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    /**
     * @param {?} target
     * @param {?} opts
     * @return {?}
     */
    function ajaxExtend(target, opts) {
      var key;
      var deep;
      var flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in opts) {
        if (void 0 !== opts[key]) {
          (flatOptions[key] ? target : deep || (deep = {}))[key] = opts[key];
        }
      }
      return deep && jQuery.extend(true, target, deep), target;
    }
    /**
     * @param {string} s
     * @param {!Object} a
     * @param {string} user
     * @param {!Function} next
     * @return {undefined}
     */
    function callback(s, a, user, next) {
      var i;
      if (jQuery.isArray(a)) {
        jQuery.each(a, function(canCreateDiscussions, response) {
          if (user || regCls.test(s)) {
            next(s, response);
          } else {
            callback(s + "[" + ("object" == typeof response && null != response ? canCreateDiscussions : "") + "]", response, user, next);
          }
        });
      } else {
        if (user || "object" !== jQuery.type(a)) {
          next(s, a);
        } else {
          for (i in a) {
            callback(s + "[" + i + "]", a[i], user, next);
          }
        }
      }
    }
    /**
     * @param {!Object} elem
     * @return {?}
     */
    function getWindow(elem) {
      return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType && elem.defaultView;
    }
    /** @type {!Array} */
    var arr = [];
    var document = window.document;
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var slice = arr.slice;
    /** @type {function(this:*, ...*): !Array<?>} */
    var concat = arr.concat;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var push = arr.push;
    /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
    var indexOf = arr.indexOf;
    var class2type = {};
    /** @type {function(this:*): string} */
    var toString = class2type.toString;
    /** @type {function(this:Object, *): boolean} */
    var hasOwn = class2type.hasOwnProperty;
    var support = {};
    /**
     * @param {!Array} element
     * @param {!Function} context
     * @return {?}
     */
    var jQuery = function(element, context) {
      return new jQuery.fn.init(element, context);
    };
    /** @type {!RegExp} */
    var REGEX_ESCAPE_EXPR = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    /** @type {!RegExp} */
    var _kerningNamesHash_escapeEscape = /^-ms-/;
    /** @type {!RegExp} */
    var datePatternRe = /-([\da-z])/gi;
    /**
     * @param {?} rotAngle
     * @param {string} arcLarge
     * @return {?}
     */
    var A = function(rotAngle, arcLarge) {
      return arcLarge.toUpperCase();
    };
    jQuery.fn = jQuery.prototype = {
      jquery : "2.2.4",
      constructor : jQuery,
      selector : "",
      length : 0,
      toArray : function() {
        return slice.call(this);
      },
      get : function(type) {
        return null != type ? type < 0 ? this[type + this.length] : this[type] : slice.call(this);
      },
      pushStack : function(elems) {
        var ret = jQuery.merge(this.constructor(), elems);
        return ret.prevObject = this, ret.context = this.context, ret;
      },
      each : function(fn) {
        return jQuery.each(this, fn);
      },
      map : function(a) {
        return this.pushStack(jQuery.map(this, function(val, n) {
          return a.call(val, n, val);
        }));
      },
      slice : function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first : function() {
        return this.eq(0);
      },
      last : function() {
        return this.eq(-1);
      },
      eq : function(i) {
        var len = this.length;
        var j = +i + (i < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end : function() {
        return this.prevObject || this.constructor();
      },
      push : push,
      sort : arr.sort,
      splice : arr.splice
    };
    /** @type {function(): ?} */
    jQuery.extend = jQuery.fn.extend = function() {
      var options;
      var name;
      var src;
      var copy;
      var copyIsArray;
      var clone;
      var target = arguments[0] || {};
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var length = arguments.length;
      /** @type {boolean} */
      var deep = false;
      if ("boolean" == typeof target) {
        /** @type {boolean} */
        deep = target;
        target = arguments[i] || {};
        i++;
      }
      if (!("object" == typeof target || jQuery.isFunction(target))) {
        target = {};
      }
      if (i === length) {
        target = this;
        i--;
      }
      for (; i < length; i++) {
        if (null != (options = arguments[i])) {
          for (name in options) {
            src = target[name];
            if (target !== (copy = options[name])) {
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                if (copyIsArray) {
                  /** @type {boolean} */
                  copyIsArray = false;
                  clone = src && jQuery.isArray(src) ? src : [];
                } else {
                  clone = src && jQuery.isPlainObject(src) ? src : {};
                }
                target[name] = jQuery.extend(deep, clone, copy);
              } else {
                if (void 0 !== copy) {
                  target[name] = copy;
                }
              }
            }
          }
        }
      }
      return target;
    };
    jQuery.extend({
      expando : "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
      isReady : true,
      error : function(name) {
        throw new Error(name);
      },
      noop : function() {
      },
      isFunction : function(obj) {
        return "function" === jQuery.type(obj);
      },
      isArray : Array.isArray,
      isWindow : function(obj) {
        return null != obj && obj === obj.window;
      },
      isNumeric : function(obj) {
        var realStringObj = obj && obj.toString();
        return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
      },
      isPlainObject : function(object) {
        var type;
        if ("object" !== jQuery.type(object) || object.nodeType || jQuery.isWindow(object)) {
          return false;
        }
        if (object.constructor && !hasOwn.call(object, "constructor") && !hasOwn.call(object.constructor.prototype || {}, "isPrototypeOf")) {
          return false;
        }
        for (type in object) {
        }
        return void 0 === type || hasOwn.call(object, type);
      },
      isEmptyObject : function(obj) {
        var key;
        for (key in obj) {
          return false;
        }
        return true;
      },
      type : function(obj) {
        return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
      },
      globalEval : function(code) {
        var script;
        /** @type {function(string): *} */
        var indirect = eval;
        if (code = jQuery.trim(code)) {
          if (1 === code.indexOf("use strict")) {
            /** @type {string} */
            (script = document.createElement("script")).text = code;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else {
            indirect(code);
          }
        }
      },
      camelCase : function(str) {
        return str.replace(_kerningNamesHash_escapeEscape, "ms-").replace(datePatternRe, A);
      },
      nodeName : function(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      },
      each : function(result, state) {
        var n;
        /** @type {number} */
        var i = 0;
        if (isArrayLike(result)) {
          n = result.length;
          for (; i < n && false !== state.call(result[i], i, result[i]); i++) {
          }
        } else {
          for (i in result) {
            if (false === state.call(result[i], i, result[i])) {
              break;
            }
          }
        }
        return result;
      },
      trim : function(text) {
        return null == text ? "" : (text + "").replace(REGEX_ESCAPE_EXPR, "");
      },
      makeArray : function(arr, o) {
        var obj = o || [];
        return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(obj, "string" == typeof arr ? [arr] : arr) : push.call(obj, arr)), obj;
      },
      inArray : function(elem, arr, i) {
        return null == arr ? -1 : indexOf.call(arr, elem, i);
      },
      merge : function(n, obj) {
        /** @type {number} */
        var cell_amount = +obj.length;
        /** @type {number} */
        var i = 0;
        var c = n.length;
        for (; i < cell_amount; i++) {
          n[c++] = obj[i];
        }
        return n.length = c, n;
      },
      grep : function(elems, callback, a) {
        /** @type {!Array} */
        var ret = [];
        /** @type {number} */
        var i = 0;
        var length = elems.length;
        /** @type {boolean} */
        var booA = !a;
        for (; i < length; i++) {
          if (!callback(elems[i], i) !== booA) {
            ret.push(elems[i]);
          }
        }
        return ret;
      },
      map : function(data, e, p) {
        var k;
        var node;
        /** @type {number} */
        var i = 0;
        /** @type {!Array} */
        var ret = [];
        if (isArrayLike(data)) {
          k = data.length;
          for (; i < k; i++) {
            if (null != (node = e(data[i], i, p))) {
              ret.push(node);
            }
          }
        } else {
          for (i in data) {
            if (null != (node = e(data[i], i, p))) {
              ret.push(node);
            }
          }
        }
        return concat.apply([], ret);
      },
      guid : 1,
      proxy : function(f, c) {
        var j;
        var headArgs;
        var proxyFn;
        if ("string" == typeof c && (j = f[c], c = f, f = j), jQuery.isFunction(f)) {
          return headArgs = slice.call(arguments, 2), (proxyFn = function() {
            return f.apply(c || this, headArgs.concat(slice.call(arguments)));
          }).guid = f.guid = f.guid || jQuery.guid++, proxyFn;
        }
      },
      now : Date.now,
      support : support
    });
    if ("function" == typeof Symbol) {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(canCreateDiscussions, p_Interval) {
      class2type["[object " + p_Interval + "]"] = p_Interval.toLowerCase();
    });
    var Sizzle = function(window) {
      /**
       * @param {string} selector
       * @param {!Object} context
       * @param {!Array} results
       * @param {!Array} seed
       * @return {?}
       */
      function Sizzle(selector, context, results, seed) {
        var m;
        var i;
        var elem;
        var nid;
        var nidselect;
        var match;
        var groups;
        var newSelector;
        var newContext = context && context.ownerDocument;
        var undefined = context ? context.nodeType : 9;
        if (results = results || [], "string" != typeof selector || !selector || 1 !== undefined && 9 !== undefined && 11 !== undefined) {
          return results;
        }
        if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && apply(context), context = context || document, documentIsHTML)) {
          if (11 !== undefined && (match = customSelectorReg.exec(selector))) {
            if (m = match[1]) {
              if (9 === undefined) {
                if (!(elem = context.getElementById(m))) {
                  return results;
                }
                if (elem.id === m) {
                  return results.push(elem), results;
                }
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  return results.push(elem), results;
                }
              }
            } else {
              if (match[2]) {
                return push.apply(results, context.getElementsByTagName(selector)), results;
              }
              if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                return push.apply(results, context.getElementsByClassName(m)), results;
              }
            }
          }
          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            if (1 !== undefined) {
              /** @type {!Object} */
              newContext = context;
              /** @type {string} */
              newSelector = selector;
            } else {
              if ("object" !== context.nodeName.toLowerCase()) {
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rescape, "\\$&");
                } else {
                  context.setAttribute("id", nid = expando);
                }
                i = (groups = tokenize(selector)).length;
                /** @type {string} */
                nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                for (; i--;) {
                  /** @type {string} */
                  groups[i] = nidselect + " " + toSelector(groups[i]);
                }
                newSelector = groups.join(",");
                newContext = $.test(selector) && testContext(context.parentNode) || context;
              }
            }
            if (newSelector) {
              try {
                return push.apply(results, newContext.querySelectorAll(newSelector)), results;
              } catch (t) {
              } finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
        return select(selector.replace(rtrim, "$1"), context, results, seed);
      }
      /**
       * @return {?}
       */
      function createCache() {
        /** @type {!Array} */
        var messages = [];
        return function cache(attr, fn) {
          return messages.push(attr + " ") > Expr.cacheLength && delete cache[messages.shift()], cache[attr + " "] = fn;
        };
      }
      /**
       * @param {!Function} fn
       * @return {?}
       */
      function markFunction(fn) {
        return fn[expando] = true, fn;
      }
      /**
       * @param {!Function} fn
       * @return {?}
       */
      function assert(fn) {
        var e = document.createElement("div");
        try {
          return !!fn(e);
        } catch (t) {
          return false;
        } finally {
          if (e.parentNode) {
            e.parentNode.removeChild(e);
          }
          /** @type {null} */
          e = null;
        }
      }
      /**
       * @param {string} attrs
       * @param {!Function} handler
       * @return {undefined}
       */
      function addHandle(attrs, handler) {
        var arr = attrs.split("|");
        var i = arr.length;
        for (; i--;) {
          /** @type {!Function} */
          Expr.attrHandle[arr[i]] = handler;
        }
      }
      /**
       * @param {!Object} a
       * @param {!Object} b
       * @return {?}
       */
      function siblingCheck(a, b) {
        var cur = b && a;
        var .num_const = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || E) - (~a.sourceIndex || E);
        if (.num_const) {
          return .num_const;
        }
        if (cur) {
          for (; cur = cur.nextSibling;) {
            if (cur === b) {
              return -1;
            }
          }
        }
        return a ? 1 : -1;
      }
      /**
       * @param {!Object} name
       * @return {?}
       */
      function jQuerify(name) {
        return function(section) {
          return "input" === section.nodeName.toLowerCase() && section.type === name;
        };
      }
      /**
       * @param {!Object} type
       * @return {?}
       */
      function createButtonPseudo(type) {
        return function(elem) {
          var undefined = elem.nodeName.toLowerCase();
          return ("input" === undefined || "button" === undefined) && elem.type === type;
        };
      }
      /**
       * @param {!Function} fn
       * @return {?}
       */
      function createPositionalPseudo(fn) {
        return markFunction(function(value) {
          return value = +value, markFunction(function(self, global) {
            var name;
            var val = fn([], self.length, value);
            var j = val.length;
            for (; j--;) {
              if (self[name = val[j]]) {
                /** @type {boolean} */
                self[name] = !(global[name] = self[name]);
              }
            }
          });
        });
      }
      /**
       * @param {!Node} context
       * @return {?}
       */
      function testContext(context) {
        return context && void 0 !== context.getElementsByTagName && context;
      }
      /**
       * @return {undefined}
       */
      function setFilters() {
      }
      /**
       * @param {!Array} tokens
       * @return {?}
       */
      function toSelector(tokens) {
        /** @type {number} */
        var len = 0;
        var i = tokens.length;
        /** @type {string} */
        var selector = "";
        for (; len < i; len++) {
          /** @type {string} */
          selector = selector + tokens[len].value;
        }
        return selector;
      }
      /**
       * @param {!Function} matcher
       * @param {!Object} combinator
       * @param {string} base
       * @return {?}
       */
      function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir;
        var checkNonElements = base && "parentNode" === dir;
        /** @type {number} */
        var doneName = done++;
        return combinator.first ? function(elem, stat, context) {
          for (; elem = elem[dir];) {
            if (1 === elem.nodeType || checkNonElements) {
              return matcher(elem, stat, context);
            }
          }
        } : function(elem, context, xml) {
          var oldCache;
          var _base;
          var outerCache;
          /** @type {!Array} */
          var newCache = [dirruns, doneName];
          if (xml) {
            for (; elem = elem[dir];) {
              if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) {
                return true;
              }
            }
          } else {
            for (; elem = elem[dir];) {
              if (1 === elem.nodeType || checkNonElements) {
                if ((oldCache = (_base = (outerCache = elem[expando] || (elem[expando] = {}))[elem.uniqueID] || (outerCache[elem.uniqueID] = {}))[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                }
                if (_base[dir] = newCache, newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        };
      }
      /**
       * @param {!Object} matchers
       * @return {?}
       */
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function(elem, context, xml) {
          var i = matchers.length;
          for (; i--;) {
            if (!matchers[i](elem, context, xml)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      /**
       * @param {!Array} data
       * @param {!Object} text
       * @param {!Function} n
       * @param {string} o
       * @param {boolean} s
       * @return {?}
       */
      function create(data, text, n, o, s) {
        var x;
        /** @type {!Array} */
        var s = [];
        /** @type {number} */
        var i = 0;
        var nbElts = data.length;
        /** @type {boolean} */
        var check_select = null != text;
        for (; i < nbElts; i++) {
          if (x = data[i]) {
            if (!(n && !n(x, o, s))) {
              s.push(x);
              if (check_select) {
                text.push(i);
              }
            }
          }
        }
        return s;
      }
      /**
       * @param {!Function} options
       * @param {!Object} prop
       * @param {!Function} callback
       * @param {!Object} a
       * @param {!Object} fn
       * @param {!Object} raw
       * @return {?}
       */
      function get(options, prop, callback, a, fn, raw) {
        return a && !a[expando] && (a = get(a)), fn && !fn[expando] && (fn = get(fn, raw)), markFunction(function(obj, object, element, key) {
          var p;
          var i;
          var val;
          /** @type {!Array} */
          var value = [];
          /** @type {!Array} */
          var r = [];
          var o = object.length;
          var foo = obj || function(selector, set, results) {
            /** @type {number} */
            var i = 0;
            var l = set.length;
            for (; i < l; i++) {
              Sizzle(selector, set[i], results);
            }
            return results;
          }(prop || "*", element.nodeType ? [element] : element, []);
          var data = !options || !obj && prop ? foo : create(foo, value, options, element, key);
          var result = callback ? fn || (obj ? options : o || a) ? [] : object : data;
          if (callback && callback(data, result, element, key), a) {
            p = create(result, r);
            a(p, [], element, key);
            i = p.length;
            for (; i--;) {
              if (val = p[i]) {
                /** @type {boolean} */
                result[r[i]] = !(data[r[i]] = val);
              }
            }
          }
          if (obj) {
            if (fn || options) {
              if (fn) {
                /** @type {!Array} */
                p = [];
                i = result.length;
                for (; i--;) {
                  if (val = result[i]) {
                    p.push(data[i] = val);
                  }
                }
                fn(null, result = [], p, key);
              }
              i = result.length;
              for (; i--;) {
                if ((val = result[i]) && (p = fn ? indexOf(obj, val) : value[i]) > -1) {
                  /** @type {boolean} */
                  obj[p] = !(object[p] = val);
                }
              }
            }
          } else {
            result = create(result === object ? result.splice(o, result.length) : result);
            if (fn) {
              fn(null, object, result, key);
            } else {
              push.apply(object, result);
            }
          }
        });
      }
      /**
       * @param {!Array} tokens
       * @return {?}
       */
      function matcherFromTokens(tokens) {
        var checkContext;
        var matcher;
        var j;
        var len = tokens.length;
        var leadingRelative = Expr.relative[tokens[0].type];
        var implicitRelative = leadingRelative || Expr.relative[" "];
        /** @type {number} */
        var i = leadingRelative ? 1 : 0;
        var matchContext = addCombinator(function(elem) {
          return elem === checkContext;
        }, implicitRelative, true);
        var matchAnyContext = addCombinator(function(value) {
          return indexOf(checkContext, value) > -1;
        }, implicitRelative, true);
        /** @type {!Array} */
        var matchers = [function(elem, context, xml) {
          var o = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          return checkContext = null, o;
        }];
        for (; i < len; i++) {
          if (matcher = Expr.relative[tokens[i].type]) {
            /** @type {!Array} */
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            if ((matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches))[expando]) {
              /** @type {number} */
              j = ++i;
              for (; j < len && !Expr.relative[tokens[j].type]; j++) {
              }
              return get(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                value : " " === tokens[i - 2].type ? "*" : ""
              })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      var i;
      var support;
      var Expr;
      var print;
      var isXML;
      var tokenize;
      var compile;
      var select;
      var outermostContext;
      var sortInput;
      var stability;
      var apply;
      var document;
      var docElem;
      var documentIsHTML;
      var rbuggyQSA;
      var rbuggyMatches;
      var matches;
      var contains;
      /** @type {string} */
      var expando = "sizzle" + 1 * new Date;
      var preferredDoc = window.document;
      /** @type {number} */
      var dirruns = 0;
      /** @type {number} */
      var done = 0;
      var classCache = createCache();
      var tokenCache = createCache();
      var compilerCache = createCache();
      /**
       * @param {?} type
       * @param {?} uuid
       * @return {?}
       */
      var event = function(type, uuid) {
        return type === uuid && (stability = true), 0;
      };
      /** @type {number} */
      var E = 1 << 31;
      /** @type {function(this:Object, *): boolean} */
      var hasOwn = {}.hasOwnProperty;
      /** @type {!Array} */
      var arr = [];
      /** @type {function(this:IArrayLike<T>): T} */
      var pop = arr.pop;
      /** @type {function(this:IArrayLike<T>, ...T): number} */
      var push_native = arr.push;
      /** @type {function(this:IArrayLike<T>, ...T): number} */
      var push = arr.push;
      /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
      var slice = arr.slice;
      /**
       * @param {string} list
       * @param {!Object} value
       * @return {?}
       */
      var indexOf = function(list, value) {
        /** @type {number} */
        var i = 0;
        var listLength = list.length;
        for (; i < listLength; i++) {
          if (list[i] === value) {
            return i;
          }
        }
        return -1;
      };
      /** @type {string} */
      var booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
      /** @type {string} */
      var _test = "[\\x20\\t\\r\\n\\f]";
      /** @type {string} */
      var escRightBracket = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+";
      /** @type {string} */
      var _end2 = "\\[" + _test + "*(" + escRightBracket + ")(?:" + _test + "*([*^$|!~]?=)" + _test + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + escRightBracket + "))|)" + _test + "*\\]";
      /** @type {string} */
      var pseudos = ":(" + escRightBracket + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _end2 + ")*)|.*)\\)|)";
      /** @type {!RegExp} */
      var entityEscapeRegExp = new RegExp(_test + "+", "g");
      /** @type {!RegExp} */
      var rtrim = new RegExp("^" + _test + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _test + "+$", "g");
      /** @type {!RegExp} */
      var chunker = new RegExp("^" + _test + "*," + _test + "*");
      /** @type {!RegExp} */
      var rcomma = new RegExp("^" + _test + "*([>+~]|" + _test + ")" + _test + "*");
      /** @type {!RegExp} */
      var rattributeQuotes = new RegExp("=" + _test + "*([^\\]'\"]*?)" + _test + "*\\]", "g");
      /** @type {!RegExp} */
      var rpseudo = new RegExp(pseudos);
      /** @type {!RegExp} */
      var ridentifier = new RegExp("^" + escRightBracket + "$");
      var matchExpr = {
        ID : new RegExp("^#(" + escRightBracket + ")"),
        CLASS : new RegExp("^\\.(" + escRightBracket + ")"),
        TAG : new RegExp("^(" + escRightBracket + "|[*])"),
        ATTR : new RegExp("^" + _end2),
        PSEUDO : new RegExp("^" + pseudos),
        CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _test + "*(even|odd|(([+-]|)(\\d*)n|)" + _test + "*(?:([+-]|)" + _test + "*(\\d+)|))" + _test + "*\\)|)", "i"),
        bool : new RegExp("^(?:" + booleans + ")$", "i"),
        needsContext : new RegExp("^" + _test + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _test + "*((?:-\\d)?\\d*)" + _test + "*\\)|)(?=[^-]|$)", "i")
      };
      /** @type {!RegExp} */
      var inputNodeNames = /^(?:input|select|textarea|button)$/i;
      /** @type {!RegExp} */
      var rnoType = /^h\d$/i;
      /** @type {!RegExp} */
      var rnative = /^[^{]+\{\s*\[native \w/;
      /** @type {!RegExp} */
      var customSelectorReg = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
      /** @type {!RegExp} */
      var $ = /[+~]/;
      /** @type {!RegExp} */
      var rescape = /'|\\/g;
      /** @type {!RegExp} */
      var val = new RegExp("\\\\([\\da-f]{1,6}" + _test + "?|(" + _test + ")|.)", "ig");
      /**
       * @param {?} name
       * @param {string} value
       * @param {boolean} force
       * @return {?}
       */
      var value = function(name, value, force) {
        /** @type {number} */
        var index = "0x" + value - 65536;
        return index != index || force ? value : index < 0 ? String.fromCharCode(index + 65536) : String.fromCharCode(index >> 10 | 55296, 1023 & index | 56320);
      };
      /**
       * @return {undefined}
       */
      var listener = function() {
        apply();
      };
      try {
        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (t) {
        push = {
          apply : arr.length ? function(target, obj) {
            push_native.apply(target, slice.call(obj));
          } : function(value, x) {
            var j = value.length;
            /** @type {number} */
            var xp = 0;
            for (; value[j++] = x[xp++];) {
            }
            /** @type {number} */
            value.length = j - 1;
          }
        };
      }
      for (i in support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
        return !!documentElement && "HTML" !== documentElement.nodeName;
      }, apply = Sizzle.setDocument = function(node) {
        var e;
        var parent;
        var doc = node ? node.ownerDocument || node : preferredDoc;
        return doc !== document && 9 === doc.nodeType && doc.documentElement ? (docElem = (document = doc).documentElement, documentIsHTML = !isXML(document), (parent = document.defaultView) && parent.top !== parent && (parent.addEventListener ? parent.addEventListener("unload", listener, false) : parent.attachEvent && parent.attachEvent("onunload", listener)), support.attributes = assert(function(elm) {
          return elm.className = "i", !elm.getAttribute("className");
        }), support.getElementsByTagName = assert(function(testee) {
          return testee.appendChild(document.createComment("")), !testee.getElementsByTagName("*").length;
        }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), support.getById = assert(function(body) {
          return docElem.appendChild(body).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length;
        }), support.getById ? (Expr.find.ID = function(elem, context) {
          if (void 0 !== context.getElementById && documentIsHTML) {
            var c_style = context.getElementById(elem);
            return c_style ? [c_style] : [];
          }
        }, Expr.filter.ID = function(elem) {
          var i = elem.replace(val, value);
          return function(t) {
            return t.getAttribute("id") === i;
          };
        }) : (delete Expr.find.ID, Expr.filter.ID = function(elem) {
          var number = elem.replace(val, value);
          return function(elem) {
            var body = void 0 !== elem.getAttributeNode && elem.getAttributeNode("id");
            return body && body.value === number;
          };
        }), Expr.find.TAG = support.getElementsByTagName ? function(v, e) {
          return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(v) : support.qsa ? e.querySelectorAll(v) : void 0;
        } : function(selector, document) {
          var arg;
          /** @type {!Array} */
          var results = [];
          /** @type {number} */
          var u = 0;
          var r = document.getElementsByTagName(selector);
          if ("*" === selector) {
            for (; arg = r[u++];) {
              if (1 === arg.nodeType) {
                results.push(arg);
              }
            }
            return results;
          }
          return r;
        }, Expr.find.CLASS = support.getElementsByClassName && function(name, titleDiv) {
          if (void 0 !== titleDiv.getElementsByClassName && documentIsHTML) {
            return titleDiv.getElementsByClassName(name);
          }
        }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(container) {
          /** @type {string} */
          docElem.appendChild(container).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
          if (container.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + _test + "*(?:''|\"\")");
          }
          if (!container.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + _test + "*(?:value|" + booleans + ")");
          }
          if (!container.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!container.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!container.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        }), assert(function(t) {
          var element = document.createElement("input");
          element.setAttribute("type", "hidden");
          t.appendChild(element).setAttribute("name", "D");
          if (t.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + _test + "*[*^$|!~]?=");
          }
          if (!t.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          t.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
          support.disconnectedMatch = matches.call(el, "div");
          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), e = rnative.test(docElem.compareDocumentPosition), contains = e || rnative.test(docElem.contains) ? function(a, n) {
          var name = 9 === a.nodeType ? a.documentElement : a;
          var b = n && n.parentNode;
          return a === b || !(!b || 1 !== b.nodeType || !(name.contains ? name.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)));
        } : function(a, b) {
          if (b) {
            for (; b = b.parentNode;) {
              if (b === a) {
                return true;
              }
            }
          }
          return false;
        }, event = e ? function(a, b) {
          if (a === b) {
            return stability = true, 0;
          }
          /** @type {number} */
          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return compare || (1 & (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1);
        } : function(a, b) {
          if (a === b) {
            return stability = true, 0;
          }
          var cur;
          /** @type {number} */
          var i = 0;
          var aup = a.parentNode;
          var bup = b.parentNode;
          /** @type {!Array} */
          var ap = [a];
          /** @type {!Array} */
          var bp = [b];
          if (!aup || !bup) {
            return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
          }
          if (aup === bup) {
            return siblingCheck(a, b);
          }
          /** @type {!Object} */
          cur = a;
          for (; cur = cur.parentNode;) {
            ap.unshift(cur);
          }
          /** @type {!Object} */
          cur = b;
          for (; cur = cur.parentNode;) {
            bp.unshift(cur);
          }
          for (; ap[i] === bp[i];) {
            i++;
          }
          return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
        }, document) : document;
      }, Sizzle.matches = function(expr, set) {
        return Sizzle(expr, null, null, set);
      }, Sizzle.matchesSelector = function(elem, expr) {
        if ((elem.ownerDocument || elem) !== document && apply(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) {
              return ret;
            }
          } catch (t) {
          }
        }
        return Sizzle(expr, document, null, [elem]).length > 0;
      }, Sizzle.contains = function(context, item) {
        return (context.ownerDocument || context) !== document && apply(context), contains(context, item);
      }, Sizzle.attr = function(elem, name) {
        if ((elem.ownerDocument || elem) !== document) {
          apply(elem);
        }
        var fn = Expr.attrHandle[name.toLowerCase()];
        var val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
        return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      }, Sizzle.error = function(name) {
        throw new Error("Syntax error, unrecognized expression: " + name);
      }, Sizzle.uniqueSort = function(results) {
        var item;
        /** @type {!Array} */
        var result = [];
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var index = 0;
        if (stability = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(event), stability) {
          for (; item = results[index++];) {
            if (item === results[index]) {
              /** @type {number} */
              i = result.push(index);
            }
          }
          for (; i--;) {
            results.splice(result[i], 1);
          }
        }
        return sortInput = null, results;
      }, print = Sizzle.getText = function(obj) {
        var item;
        /** @type {string} */
        var output = "";
        /** @type {number} */
        var objCursor = 0;
        var type = obj.nodeType;
        if (type) {
          if (1 === type || 9 === type || 11 === type) {
            if ("string" == typeof obj.textContent) {
              return obj.textContent;
            }
            obj = obj.firstChild;
            for (; obj; obj = obj.nextSibling) {
              output = output + print(obj);
            }
          } else {
            if (3 === type || 4 === type) {
              return obj.nodeValue;
            }
          }
        } else {
          for (; item = obj[objCursor++];) {
            output = output + print(item);
          }
        }
        return output;
      }, (Expr = Sizzle.selectors = {
        cacheLength : 50,
        createPseudo : markFunction,
        match : matchExpr,
        attrHandle : {},
        find : {},
        relative : {
          ">" : {
            dir : "parentNode",
            first : true
          },
          " " : {
            dir : "parentNode"
          },
          "+" : {
            dir : "previousSibling",
            first : true
          },
          "~" : {
            dir : "previousSibling"
          }
        },
        preFilter : {
          ATTR : function(result) {
            return result[1] = result[1].replace(val, value), result[3] = (result[3] || result[4] || result[5] || "").replace(val, value), "~=" === result[2] && (result[3] = " " + result[3] + " "), result.slice(0, 4);
          },
          CHILD : function(match) {
            return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
          },
          PSEUDO : function(match) {
            var excess;
            var unquoted = !match[6] && match[2];
            return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
          }
        },
        filter : {
          TAG : function(elem) {
            var nodeName = elem.replace(val, value).toLowerCase();
            return "*" === elem ? function() {
              return true;
            } : function(elem) {
              return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
            };
          },
          CLASS : function(className) {
            var pattern = classCache[className + " "];
            return pattern || (pattern = new RegExp("(^|" + _test + ")" + className + "(" + _test + "|$)")) && classCache(className, function(t) {
              return pattern.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
            });
          },
          ATTR : function(name, string, value) {
            return function(elem) {
              var key = Sizzle.attr(elem, name);
              return null == key ? "!=" === string : !string || (key = key + "", "=" === string ? key === value : "!=" === string ? key !== value : "^=" === string ? value && 0 === key.indexOf(value) : "*=" === string ? value && key.indexOf(value) > -1 : "$=" === string ? value && key.slice(-value.length) === value : "~=" === string ? (" " + key.replace(entityEscapeRegExp, " ") + " ").indexOf(value) > -1 : "|=" === string && (key === value || key.slice(0, value.length + 1) === value + "-"));
            };
          },
          CHILD : function(type, what, argument, first, last) {
            /** @type {boolean} */
            var simple = "nth" !== type.slice(0, 3);
            /** @type {boolean} */
            var forward = "last" !== type.slice(-4);
            /** @type {boolean} */
            var isStrict = "of-type" === what;
            return 1 === first && 0 === last ? function(tplDiv) {
              return !!tplDiv.parentNode;
            } : function(elem, n, isParentStrict) {
              var cache;
              var uniqueCache;
              var outerCache;
              var node;
              var nodeIndex;
              var start;
              /** @type {string} */
              var dir = simple !== forward ? "nextSibling" : "previousSibling";
              var parent = elem.parentNode;
              var iteratedVal = isStrict && elem.nodeName.toLowerCase();
              /** @type {boolean} */
              var dependency = !isParentStrict && !isStrict;
              /** @type {boolean} */
              var diff = false;
              if (parent) {
                if (simple) {
                  for (; dir;) {
                    /** @type {!Node} */
                    node = elem;
                    for (; node = node[dir];) {
                      if (isStrict ? node.nodeName.toLowerCase() === iteratedVal : 1 === node.nodeType) {
                        return false;
                      }
                    }
                    /** @type {(boolean|string)} */
                    start = dir = "only" === type && !start && "nextSibling";
                  }
                  return true;
                }
                if (start = [forward ? parent.firstChild : parent.lastChild], forward && dependency) {
                  diff = (nodeIndex = (cache = (uniqueCache = (outerCache = (node = parent)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]) && cache[2];
                  node = nodeIndex && parent.childNodes[nodeIndex];
                  for (; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) {
                    if (1 === node.nodeType && ++diff && node === elem) {
                      /** @type {!Array} */
                      uniqueCache[type] = [dirruns, nodeIndex, diff];
                      break;
                    }
                  }
                } else {
                  if (dependency && (diff = nodeIndex = (cache = (uniqueCache = (outerCache = (node = elem)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]), false === diff) {
                    for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((isStrict ? node.nodeName.toLowerCase() !== iteratedVal : 1 !== node.nodeType) || !++diff || (dependency && ((uniqueCache = (outerCache = node[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] = [dirruns, diff]), node !== elem));) {
                    }
                  }
                }
                return (diff = diff - last) === first || diff % first == 0 && diff / first >= 0;
              }
            };
          },
          PSEUDO : function(pseudo, argument) {
            var args;
            var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
            return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(values, params) {
              var i;
              var result = fn(values, argument);
              var index = result.length;
              for (; index--;) {
                /** @type {boolean} */
                values[i = indexOf(values, result[index])] = !(params[i] = result[index]);
              }
            }) : function(responce) {
              return fn(responce, 0, args);
            }) : fn;
          }
        },
        pseudos : {
          not : markFunction(function(selector) {
            /** @type {!Array} */
            var a = [];
            /** @type {!Array} */
            var results = [];
            var matcher = compile(selector.replace(rtrim, "$1"));
            return matcher[expando] ? markFunction(function(a, leftbuffer, n, context) {
              var value;
              var result = matcher(a, null, context, []);
              var i = a.length;
              for (; i--;) {
                if (value = result[i]) {
                  /** @type {boolean} */
                  a[i] = !(leftbuffer[i] = value);
                }
              }
            }) : function(sNewObjName, canCreateDiscussions, context) {
              return a[0] = sNewObjName, matcher(a, null, context, results), a[0] = null, !results.pop();
            };
          }),
          has : markFunction(function(selector) {
            return function(elem) {
              return Sizzle(selector, elem).length > 0;
            };
          }),
          contains : markFunction(function(index) {
            return index = index.replace(val, value), function(elem) {
              return (elem.textContent || elem.innerText || print(elem)).indexOf(index) > -1;
            };
          }),
          lang : markFunction(function(lang) {
            return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(val, value).toLowerCase(), function(elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-");
                }
              } while ((elem = elem.parentNode) && 1 === elem.nodeType);
              return false;
            };
          }),
          target : function(name) {
            var charListNotLatin = window.location && window.location.hash;
            return charListNotLatin && charListNotLatin.slice(1) === name.id;
          },
          root : function(elem) {
            return elem === docElem;
          },
          focus : function(obj) {
            return obj === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(obj.type || obj.href || ~obj.tabIndex);
          },
          enabled : function(elem) {
            return false === elem.disabled;
          },
          disabled : function(elem) {
            return true === elem.disabled;
          },
          checked : function(value) {
            var custom = value.nodeName.toLowerCase();
            return "input" === custom && !!value.checked || "option" === custom && !!value.selected;
          },
          selected : function(elem) {
            return elem.parentNode && elem.parentNode.selectedIndex, true === elem.selected;
          },
          empty : function(elem) {
            elem = elem.firstChild;
            for (; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent : function(type) {
            return !Expr.pseudos.empty(type);
          },
          header : function(elem) {
            return rnoType.test(elem.nodeName);
          },
          input : function(target) {
            return inputNodeNames.test(target.nodeName);
          },
          button : function(elem) {
            var left = elem.nodeName.toLowerCase();
            return "input" === left && "button" === elem.type || "button" === left;
          },
          text : function(value) {
            var EXT;
            return "input" === value.nodeName.toLowerCase() && "text" === value.type && (null == (EXT = value.getAttribute("type")) || "text" === EXT.toLowerCase());
          },
          first : createPositionalPseudo(function() {
            return [0];
          }),
          last : createPositionalPseudo(function(canCreateDiscussions, isSlidingUp) {
            return [isSlidingUp - 1];
          }),
          eq : createPositionalPseudo(function(canCreateDiscussions, pageHeight, srcY) {
            return [srcY < 0 ? srcY + pageHeight : srcY];
          }),
          even : createPositionalPseudo(function(lastshuffle, inclusiveMin) {
            /** @type {number} */
            var value = 0;
            for (; value < inclusiveMin; value = value + 2) {
              lastshuffle.push(value);
            }
            return lastshuffle;
          }),
          odd : createPositionalPseudo(function(lastshuffle, inclusiveMin) {
            /** @type {number} */
            var value = 1;
            for (; value < inclusiveMin; value = value + 2) {
              lastshuffle.push(value);
            }
            return lastshuffle;
          }),
          lt : createPositionalPseudo(function(newNodeLists, pageHeight, srcY) {
            var itemNodeList = srcY < 0 ? srcY + pageHeight : srcY;
            for (; --itemNodeList >= 0;) {
              newNodeLists.push(itemNodeList);
            }
            return newNodeLists;
          }),
          gt : createPositionalPseudo(function(newNodeLists, pageHeight, srcY) {
            var itemNodeList = srcY < 0 ? srcY + pageHeight : srcY;
            for (; ++itemNodeList < pageHeight;) {
              newNodeLists.push(itemNodeList);
            }
            return newNodeLists;
          })
        }
      }).pseudos.nth = Expr.pseudos.eq, {
        radio : true,
        checkbox : true,
        file : true,
        password : true,
        image : true
      }) {
        Expr.pseudos[i] = jQuerify(i);
      }
      for (i in{
        submit : true,
        reset : true
      }) {
        Expr.pseudos[i] = createButtonPseudo(i);
      }
      return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
        var matched;
        var match;
        var tokens;
        var type;
        var soFar;
        var groups;
        var preFilters;
        var cached = tokenCache[selector + " "];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        /** @type {!Object} */
        soFar = selector;
        /** @type {!Array} */
        groups = [];
        preFilters = Expr.preFilter;
        for (; soFar;) {
          for (type in matched && !(match = chunker.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = false, (match = rcomma.exec(soFar)) && (matched = match.shift(), tokens.push({
            value : matched,
            type : match[0].replace(rtrim, " ")
          }), soFar = soFar.slice(matched.length)), Expr.filter) {
            if (!(!(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value : matched,
                type : type,
                matches : match
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
      }, compile = Sizzle.compile = function(selector, group) {
        var i;
        /** @type {!Array} */
        var setMatchers = [];
        /** @type {!Array} */
        var elementMatchers = [];
        var cached = compilerCache[selector + " "];
        if (!cached) {
          if (!group) {
            group = tokenize(selector);
          }
          i = group.length;
          for (; i--;) {
            if ((cached = matcherFromTokens(group[i]))[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          /** @type {string} */
          (cached = compilerCache(selector, function(elementMatchers, setMatchers) {
            /** @type {boolean} */
            var bySet = setMatchers.length > 0;
            /** @type {boolean} */
            var byElement = elementMatchers.length > 0;
            /**
             * @param {!Function} seed
             * @param {!Object} context
             * @param {number} xml
             * @param {!Array} results
             * @param {!Object} outermost
             * @return {?}
             */
            var superMatcher = function(seed, context, xml, results, outermost) {
              var elem;
              var j;
              var matcher;
              /** @type {number} */
              var matchedCount = 0;
              /** @type {string} */
              var i = "0";
              var unmatched = seed && [];
              /** @type {!Array} */
              var data = [];
              var contextBackup = outermostContext;
              var elems = seed || byElement && Expr.find.TAG("*", outermost);
              var dirrunsUnique = dirruns = dirruns + (null == contextBackup ? 1 : Math.random() || .1);
              var length = elems.length;
              if (outermost) {
                outermostContext = context === document || context || outermost;
              }
              for (; i !== length && null != (elem = elems[i]); i++) {
                if (byElement && elem) {
                  /** @type {number} */
                  j = 0;
                  if (!(context || elem.ownerDocument === document)) {
                    apply(elem);
                    /** @type {boolean} */
                    xml = !documentIsHTML;
                  }
                  for (; matcher = elementMatchers[j++];) {
                    if (matcher(elem, context || document, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              if (matchedCount = matchedCount + i, bySet && i !== matchedCount) {
                /** @type {number} */
                j = 0;
                for (; matcher = setMatchers[j++];) {
                  matcher(unmatched, data, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    for (; i--;) {
                      if (!(unmatched[i] || data[i])) {
                        data[i] = pop.call(results);
                      }
                    }
                  }
                  data = create(data);
                }
                push.apply(results, data);
                if (outermost && !seed && data.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle.uniqueSort(results);
                }
              }
              return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }(elementMatchers, setMatchers))).selector = selector;
        }
        return cached;
      }, select = Sizzle.select = function(selector, context, results, seed) {
        var i;
        var tokens;
        var token;
        var type;
        var find;
        /** @type {(!Function|boolean)} */
        var compiled = "function" == typeof selector && selector;
        var match = !seed && tokenize(selector = compiled.selector || selector);
        if (results = results || [], 1 === match.length) {
          if ((tokens = match[0] = match[0].slice(0)).length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
            if (!(context = (Expr.find.ID(token.matches[0].replace(val, value), context) || [])[0])) {
              return results;
            }
            if (compiled) {
              context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
          for (; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
            if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(val, value), $.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              if (tokens.splice(i, 1), !(selector = seed.length && toSelector(tokens))) {
                return push.apply(results, seed), results;
              }
              break;
            }
          }
        }
        return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || $.test(selector) && testContext(context.parentNode) || context), results;
      }, support.sortStable = expando.split("").sort(event).join("") === expando, support.detectDuplicates = !!stability, apply(), support.sortDetached = assert(function(div1) {
        return 1 & div1.compareDocumentPosition(document.createElement("div"));
      }), assert(function(aItem) {
        return aItem.innerHTML = "<a href='#'></a>", "#" === aItem.firstChild.getAttribute("href");
      }) || addHandle("type|href|height|width", function(t, e, n) {
        if (!n) {
          return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }
      }), support.attributes && assert(function(aItem) {
        return aItem.innerHTML = "<input/>", aItem.firstChild.setAttribute("value", ""), "" === aItem.firstChild.getAttribute("value");
      }) || addHandle("value", function(src, canCreateDiscussions, n) {
        if (!n && "input" === src.nodeName.toLowerCase()) {
          return src.defaultValue;
        }
      }), assert(function(t) {
        return null == t.getAttribute("disabled");
      }) || addHandle(booleans, function(elem, name, n) {
        var val;
        if (!n) {
          return true === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      }), Sizzle;
    }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    /**
     * @param {?} elem
     * @param {string} dir
     * @param {?} name
     * @return {?}
     */
    var dir = function(elem, dir, name) {
      /** @type {!Array} */
      var matched = [];
      /** @type {boolean} */
      var o = void 0 !== name;
      for (; (elem = elem[dir]) && 9 !== elem.nodeType;) {
        if (1 === elem.nodeType) {
          if (o && jQuery(elem).is(name)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    };
    /**
     * @param {!Object} node
     * @param {!Object} elem
     * @return {?}
     */
    var _sibling = function(node, elem) {
      /** @type {!Array} */
      var result = [];
      for (; node; node = node.nextSibling) {
        if (1 === node.nodeType && node !== elem) {
          result.push(node);
        }
      }
      return result;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    /** @type {!RegExp} */
    var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
    /** @type {!RegExp} */
    var risSimple = /^.[^:#\[\.,]*$/;
    /**
     * @param {string} expr
     * @param {!Object} elems
     * @param {string} not
     * @return {?}
     */
    jQuery.filter = function(expr, elems, not) {
      var elem = elems[0];
      return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(nodeToInspect) {
        return 1 === nodeToInspect.nodeType;
      }));
    };
    jQuery.fn.extend({
      find : function(selector) {
        var i;
        var len = this.length;
        /** @type {!Array} */
        var ret = [];
        var self = this;
        if ("string" != typeof selector) {
          return this.pushStack(jQuery(selector).filter(function() {
            /** @type {number} */
            i = 0;
            for (; i < len; i++) {
              if (jQuery.contains(self[i], this)) {
                return true;
              }
            }
          }));
        }
        /** @type {number} */
        i = 0;
        for (; i < len; i++) {
          jQuery.find(selector, self[i], ret);
        }
        return (ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret)).selector = this.selector ? this.selector + " " + selector : selector, ret;
      },
      filter : function(selector) {
        return this.pushStack(winnow(this, selector || [], false));
      },
      not : function(selector) {
        return this.pushStack(winnow(this, selector || [], true));
      },
      is : function(message) {
        return !!winnow(this, "string" == typeof message && rneedsContext.test(message) ? jQuery(message) : message || [], false).length;
      }
    });
    var rootjQuery;
    /** @type {!RegExp} */
    var customSelectorReg = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (jQuery.fn.init = function(selector, context, root) {
      var match;
      var fallback;
      if (!selector) {
        return this;
      }
      if (root = root || rootjQuery, "string" == typeof selector) {
        if (!(match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : customSelectorReg.exec(selector)) || !match[1] && context) {
          return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
        }
        if (match[1]) {
          if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              if (jQuery.isFunction(this[match])) {
                this[match](context[match]);
              } else {
                this.attr(match, context[match]);
              }
            }
          }
          return this;
        }
        return (fallback = document.getElementById(match[2])) && fallback.parentNode && (this.length = 1, this[0] = fallback), this.context = document, this.selector = selector, this;
      }
      return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? void 0 !== root.ready ? root.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this));
    }).prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    /** @type {!RegExp} */
    var testRxp = /^(?:parents|prev(?:Until|All))/;
    var guaranteedUnique = {
      children : true,
      contents : true,
      next : true,
      prev : true
    };
    jQuery.fn.extend({
      has : function(name) {
        var targets = jQuery(name, this);
        var l = targets.length;
        return this.filter(function() {
          /** @type {number} */
          var i = 0;
          for (; i < l; i++) {
            if (jQuery.contains(this, targets[i])) {
              return true;
            }
          }
        });
      },
      closest : function(selector, context) {
        var node;
        /** @type {number} */
        var j = 0;
        var i = this.length;
        /** @type {!Array} */
        var ret = [];
        var s = rneedsContext.test(selector) || "string" != typeof selector ? jQuery(selector, context || this.context) : 0;
        for (; j < i; j++) {
          node = this[j];
          for (; node && node !== context; node = node.parentNode) {
            if (node.nodeType < 11 && (s ? s.index(node) > -1 : 1 === node.nodeType && jQuery.find.matchesSelector(node, selector))) {
              ret.push(node);
              break;
            }
          }
        }
        return this.pushStack(ret.length > 1 ? jQuery.uniqueSort(ret) : ret);
      },
      index : function(elem) {
        return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add : function(elem, context) {
        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(elem, context))));
      },
      addBack : function(selector) {
        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
      }
    });
    jQuery.each({
      parent : function(elem) {
        var parent = elem.parentNode;
        return parent && 11 !== parent.nodeType ? parent : null;
      },
      parents : function(elem) {
        return dir(elem, "parentNode");
      },
      parentsUntil : function(elem, i, until) {
        return dir(elem, "parentNode", until);
      },
      next : function(elem) {
        return sibling(elem, "nextSibling");
      },
      prev : function(elem) {
        return sibling(elem, "previousSibling");
      },
      nextAll : function(elem) {
        return dir(elem, "nextSibling");
      },
      prevAll : function(elem) {
        return dir(elem, "previousSibling");
      },
      nextUntil : function(elem, i, until) {
        return dir(elem, "nextSibling", until);
      },
      prevUntil : function(elem, i, until) {
        return dir(elem, "previousSibling", until);
      },
      siblings : function(elem) {
        return _sibling((elem.parentNode || {}).firstChild, elem);
      },
      children : function(elem) {
        return _sibling(elem.firstChild);
      },
      contents : function(elem) {
        return elem.contentDocument || jQuery.merge([], elem.childNodes);
      }
    }, function(name, e) {
      /**
       * @param {string} index
       * @param {!Object} target
       * @return {?}
       */
      jQuery.fn[name] = function(index, target) {
        var ret = jQuery.map(this, e, index);
        return "Until" !== name.slice(-5) && (target = index), target && "string" == typeof target && (ret = jQuery.filter(target, ret)), this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(ret), testRxp.test(name) && ret.reverse()), this.pushStack(ret);
      };
    });
    var readyList;
    /** @type {!RegExp} */
    var rnotwhite = /\S+/g;
    /**
     * @param {string} options
     * @return {?}
     */
    jQuery.Callbacks = function(options) {
      options = "string" == typeof options ? function(options) {
        var subwikiListsCache = {};
        return jQuery.each(options.match(rnotwhite) || [], function(canCreateDiscussions, wikiId) {
          /** @type {boolean} */
          subwikiListsCache[wikiId] = true;
        }), subwikiListsCache;
      }(options) : jQuery.extend({}, options);
      var costSum;
      var result;
      var gasSum;
      var o;
      /** @type {!Array} */
      var c = [];
      /** @type {!Array} */
      var s = [];
      /** @type {number} */
      var b = -1;
      /**
       * @return {undefined}
       */
      var fire = function() {
        o = options.once;
        /** @type {boolean} */
        gasSum = costSum = true;
        for (; s.length; b = -1) {
          result = s.shift();
          for (; ++b < c.length;) {
            if (false === c[b].apply(result[0], result[1]) && options.stopOnFalse) {
              b = c.length;
              /** @type {boolean} */
              result = false;
            }
          }
        }
        if (!options.memory) {
          /** @type {boolean} */
          result = false;
        }
        /** @type {boolean} */
        costSum = false;
        if (o) {
          /** @type {(Array|string)} */
          c = result ? [] : "";
        }
      };
      var self = {
        add : function() {
          return c && (result && !costSum && (b = c.length - 1, s.push(result)), function add(callback) {
            jQuery.each(callback, function(n, name) {
              if (jQuery.isFunction(name)) {
                if (!(options.unique && self.has(name))) {
                  c.push(name);
                }
              } else {
                if (name && name.length && "string" !== jQuery.type(name)) {
                  add(name);
                }
              }
            });
          }(arguments), result && !costSum && fire()), this;
        },
        remove : function() {
          return jQuery.each(arguments, function(canCreateDiscussions, img) {
            var a;
            for (; (a = jQuery.inArray(img, c, a)) > -1;) {
              c.splice(a, 1);
              if (a <= b) {
                b--;
              }
            }
          }), this;
        },
        has : function(type) {
          return type ? jQuery.inArray(type, c) > -1 : c.length > 0;
        },
        empty : function() {
          return c && (c = []), this;
        },
        disable : function() {
          return o = s = [], c = result = "", this;
        },
        disabled : function() {
          return !c;
        },
        lock : function() {
          return o = s = [], result || (c = result = ""), this;
        },
        locked : function() {
          return !!o;
        },
        fireWith : function(context, args) {
          return o || (args = [context, (args = args || []).slice ? args.slice() : args], s.push(args), costSum || fire()), this;
        },
        fire : function() {
          return self.fireWith(this, arguments), this;
        },
        fired : function() {
          return !!gasSum;
        }
      };
      return self;
    };
    jQuery.extend({
      Deferred : function(func) {
        /** @type {!Array} */
        var d = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]];
        /** @type {string} */
        var state = "pending";
        var promise = {
          state : function() {
            return state;
          },
          always : function() {
            return deferred.done(arguments).fail(arguments), this;
          },
          then : function() {
            /** @type {!Arguments} */
            var fns = arguments;
            return jQuery.Deferred(function(newDefer) {
              jQuery.each(d, function(i, tuple) {
                var fn = jQuery.isFunction(fns[i]) && fns[i];
                deferred[tuple[1]](function() {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && jQuery.isFunction(returned.promise)) {
                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                  }
                });
              });
              /** @type {null} */
              fns = null;
            }).promise();
          },
          promise : function(context) {
            return null != context ? jQuery.extend(context, promise) : promise;
          }
        };
        var deferred = {};
        return promise.pipe = promise.then, jQuery.each(d, function(x2, tuple) {
          var list = tuple[2];
          var stateString = tuple[3];
          promise[tuple[1]] = list.add;
          if (stateString) {
            list.add(function() {
              state = stateString;
            }, d[1 ^ x2][2].disable, d[2][2].lock);
          }
          /**
           * @return {?}
           */
          deferred[tuple[0]] = function() {
            return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this;
          };
          deferred[tuple[0] + "With"] = list.fireWith;
        }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
      },
      when : function(object) {
        var progressValues;
        var progressContexts;
        var resolveContexts;
        /** @type {number} */
        var i = 0;
        /** @type {!Array<?>} */
        var resolveValues = slice.call(arguments);
        /** @type {number} */
        var length = resolveValues.length;
        /** @type {number} */
        var index = 1 !== length || object && jQuery.isFunction(object.promise) ? length : 0;
        var deferred = 1 === index ? object : jQuery.Deferred();
        /**
         * @param {number} i
         * @param {number} ctx
         * @param {number} val
         * @return {?}
         */
        var updateFn = function(i, ctx, val) {
          return function(value) {
            ctx[i] = this;
            val[i] = arguments.length > 1 ? slice.call(arguments) : value;
            if (val === progressValues) {
              deferred.notifyWith(ctx, val);
            } else {
              if (!--index) {
                deferred.resolveWith(ctx, val);
              }
            }
          };
        };
        if (length > 1) {
          /** @type {!Array} */
          progressValues = new Array(length);
          /** @type {!Array} */
          progressContexts = new Array(length);
          /** @type {!Array} */
          resolveContexts = new Array(length);
          for (; i < length; i++) {
            if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
              resolveValues[i].promise().progress(updateFn(i, progressContexts, progressValues)).done(updateFn(i, resolveContexts, resolveValues)).fail(deferred.reject);
            } else {
              --index;
            }
          }
        }
        return index || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise();
      }
    });
    /**
     * @param {!Object} key
     * @return {?}
     */
    jQuery.fn.ready = function(key) {
      return jQuery.ready.promise().done(key), this;
    };
    jQuery.extend({
      isReady : false,
      readyWait : 1,
      holdReady : function(hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      },
      ready : function(user) {
        if (!(true === user ? --jQuery.readyWait : jQuery.isReady)) {
          /** @type {boolean} */
          jQuery.isReady = true;
          if (!(true !== user && --jQuery.readyWait > 0)) {
            readyList.resolveWith(document, [jQuery]);
            if (jQuery.fn.triggerHandler) {
              jQuery(document).triggerHandler("ready");
              jQuery(document).off("ready");
            }
          }
        }
      }
    });
    /**
     * @param {!Function} obj
     * @return {?}
     */
    jQuery.ready.promise = function(obj) {
      return readyList || (readyList = jQuery.Deferred(), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", $__jsx_onload), window.addEventListener("load", $__jsx_onload))), readyList.promise(obj);
    };
    jQuery.ready.promise();
    /**
     * @param {string} elems
     * @param {!Function} fn
     * @param {!Object} key
     * @param {?} value
     * @param {number} chainable
     * @param {string} emptyGet
     * @param {boolean} raw
     * @return {?}
     */
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
      /** @type {number} */
      var i = 0;
      var len = elems.length;
      /** @type {boolean} */
      var bulk = null == key;
      if ("object" === jQuery.type(key)) {
        for (i in chainable = true, key) {
          access(elems, fn, i, key[i], true, emptyGet, raw);
        }
      } else {
        if (void 0 !== value && (chainable = true, jQuery.isFunction(value) || (raw = true), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, e, value) {
          return bulk.call(jQuery(elem), value);
        })), fn)) {
          for (; i < len; i++) {
            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
          }
        }
      }
      return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    };
    /**
     * @param {!Object} selector
     * @return {?}
     */
    var $ = function(selector) {
      return 1 === selector.nodeType || 9 === selector.nodeType || !+selector.nodeType;
    };
    /** @type {number} */
    Data.uid = 1;
    Data.prototype = {
      register : function(elem, val) {
        var value = val || {};
        return elem.nodeType ? elem[this.expando] = value : Object.defineProperty(elem, this.expando, {
          value : value,
          writable : true,
          configurable : true
        }), elem[this.expando];
      },
      cache : function(node) {
        if (!$(node)) {
          return {};
        }
        var value = node[this.expando];
        return value || (value = {}, $(node) && (node.nodeType ? node[this.expando] = value : Object.defineProperty(node, this.expando, {
          value : value,
          configurable : true
        }))), value;
      },
      set : function(key, value, type) {
        var prop;
        var obj = this.cache(key);
        if ("string" == typeof value) {
          obj[value] = type;
        } else {
          for (prop in value) {
            obj[prop] = value[prop];
          }
        }
        return obj;
      },
      get : function(data, key) {
        return void 0 === key ? this.cache(data) : data[this.expando] && data[this.expando][key];
      },
      access : function(value, key, c) {
        var err;
        return void 0 === key || key && "string" == typeof key && void 0 === c ? void 0 !== (err = this.get(value, key)) ? err : this.get(value, jQuery.camelCase(key)) : (this.set(value, key, c), void 0 !== c ? c : key);
      },
      remove : function(owner, key) {
        var i;
        var name;
        var clearChatButton;
        var cache = owner[this.expando];
        if (void 0 !== cache) {
          if (void 0 === key) {
            this.register(owner);
          } else {
            if (jQuery.isArray(key)) {
              name = key.concat(key.map(jQuery.camelCase));
            } else {
              clearChatButton = jQuery.camelCase(key);
              name = key in cache ? [key, clearChatButton] : (name = clearChatButton) in cache ? [name] : name.match(rnotwhite) || [];
            }
            i = name.length;
            for (; i--;) {
              delete cache[name[i]];
            }
          }
          if (void 0 === key || jQuery.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        }
      },
      hasData : function(owner) {
        var cache = owner[this.expando];
        return void 0 !== cache && !jQuery.isEmptyObject(cache);
      }
    };
    var data_priv = new Data;
    var self = new Data;
    /** @type {!RegExp} */
    var JSON_START = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    /** @type {!RegExp} */
    var rhyphen = /[A-Z]/g;
    jQuery.extend({
      hasData : function(elem) {
        return self.hasData(elem) || data_priv.hasData(elem);
      },
      data : function(obj, name, value) {
        return self.access(obj, name, value);
      },
      removeData : function(elem, name) {
        self.remove(elem, name);
      },
      _data : function(elem, name, data) {
        return data_priv.access(elem, name, data);
      },
      _removeData : function(elem, name) {
        data_priv.remove(elem, name);
      }
    });
    jQuery.fn.extend({
      data : function(data, value) {
        var _i;
        var name;
        var attrs;
        var child = this[0];
        var el = child && child.attributes;
        if (void 0 === data) {
          if (this.length && (attrs = self.get(child), 1 === child.nodeType && !data_priv.get(child, "hasDataAttrs"))) {
            _i = el.length;
            for (; _i--;) {
              if (el[_i] && 0 === (name = el[_i].name).indexOf("data-")) {
                name = jQuery.camelCase(name.slice(5));
                set(child, name, attrs[name]);
              }
            }
            data_priv.set(child, "hasDataAttrs", true);
          }
          return attrs;
        }
        return "object" == typeof data ? this.each(function() {
          self.set(this, data);
        }) : access(this, function(info) {
          var state;
          var key;
          if (child && void 0 === info) {
            return void 0 !== (state = self.get(child, data) || self.get(child, data.replace(rhyphen, "-$&").toLowerCase())) ? state : (key = jQuery.camelCase(data), void 0 !== (state = self.get(child, key)) ? state : void 0 !== (state = set(child, key, void 0)) ? state : void 0);
          }
          key = jQuery.camelCase(data);
          this.each(function() {
            var keysToEvict = self.get(this, key);
            self.set(this, key, info);
            if (data.indexOf("-") > -1 && void 0 !== keysToEvict) {
              self.set(this, data, info);
            }
          });
        }, null, value, arguments.length > 1, null, true);
      },
      removeData : function(data) {
        return this.each(function() {
          self.remove(this, data);
        });
      }
    });
    jQuery.extend({
      queue : function(elem, type, data) {
        var q;
        if (elem) {
          return type = (type || "fx") + "queue", q = data_priv.get(elem, type), data && (!q || jQuery.isArray(data) ? q = data_priv.access(elem, type, jQuery.makeArray(data)) : q.push(data)), q || [];
        }
      },
      dequeue : function(elem, type) {
        type = type || "fx";
        var queue = jQuery.queue(elem, type);
        var i = queue.length;
        var listener = queue.shift();
        var handle = jQuery._queueHooks(elem, type);
        if ("inprogress" === listener) {
          listener = queue.shift();
          i--;
        }
        if (listener) {
          if ("fx" === type) {
            queue.unshift("inprogress");
          }
          delete handle.stop;
          listener.call(elem, function() {
            jQuery.dequeue(elem, type);
          }, handle);
        }
        if (!i && handle) {
          handle.empty.fire();
        }
      },
      _queueHooks : function(elem, type) {
        /** @type {string} */
        var key = type + "queueHooks";
        return data_priv.get(elem, key) || data_priv.access(elem, key, {
          empty : jQuery.Callbacks("once memory").add(function() {
            data_priv.remove(elem, [type + "queue", key]);
          })
        });
      }
    });
    jQuery.fn.extend({
      queue : function(type, data) {
        /** @type {number} */
        var setter = 2;
        return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
          var queue = jQuery.queue(this, type, data);
          jQuery._queueHooks(this, type);
          if ("fx" === type && "inprogress" !== queue[0]) {
            jQuery.dequeue(this, type);
          }
        });
      },
      dequeue : function(type) {
        return this.each(function() {
          jQuery.dequeue(this, type);
        });
      },
      clearQueue : function(type) {
        return this.queue(type || "fx", []);
      },
      promise : function(type, result) {
        var sel;
        /** @type {number} */
        var l = 1;
        var defer = jQuery.Deferred();
        var elements = this;
        var i = this.length;
        /**
         * @return {undefined}
         */
        var resolve = function() {
          if (!--l) {
            defer.resolveWith(elements, [elements]);
          }
        };
        if ("string" != typeof type) {
          /** @type {!Object} */
          result = type;
          type = void 0;
        }
        type = type || "fx";
        for (; i--;) {
          if ((sel = data_priv.get(elements[i], type + "queueHooks")) && sel.empty) {
            l++;
            sel.empty.add(resolve);
          }
        }
        return resolve(), defer.promise(result);
      }
    });
    /** @type {string} */
    var FSSource = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    /** @type {!RegExp} */
    var regex = new RegExp("^(?:([+-])=|)(" + FSSource + ")([a-z%]*)$", "i");
    /** @type {!Array} */
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    /**
     * @param {!Object} element
     * @param {!Object} root
     * @return {?}
     */
    var isHidden = function(element, root) {
      return element = root || element, "none" === jQuery.css(element, "display") || !jQuery.contains(element.ownerDocument, element);
    };
    /** @type {!RegExp} */
    var reg = /^(?:checkbox|radio)$/i;
    /** @type {!RegExp} */
    var Z = /<([\w:-]+)/;
    /** @type {!RegExp} */
    var opacityRe = /^$|\/(?:java|ecma)script/i;
    var wrapMap = {
      option : [1, "<select multiple='multiple'>", "</select>"],
      thead : [1, "<table>", "</table>"],
      col : [2, "<table><colgroup>", "</colgroup></table>"],
      tr : [2, "<table><tbody>", "</tbody></table>"],
      td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default : [0, "", ""]
    };
    /** @type {!Array} */
    wrapMap.optgroup = wrapMap.option;
    /** @type {!Array} */
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    /** @type {!Array} */
    wrapMap.th = wrapMap.td;
    var avalon;
    var input;
    /** @type {!RegExp} */
    var re_commas = /<|&#?\w+;/;
    avalon = document.createDocumentFragment().appendChild(document.createElement("div"));
    (input = document.createElement("input")).setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    avalon.appendChild(input);
    support.checkClone = avalon.cloneNode(true).cloneNode(true).lastChild.checked;
    /** @type {string} */
    avalon.innerHTML = "<textarea>x</textarea>";
    /** @type {boolean} */
    support.noCloneChecked = !!avalon.cloneNode(true).lastChild.defaultValue;
    /** @type {!RegExp} */
    var SIG_PATTERN = /^key/;
    /** @type {!RegExp} */
    var st = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
    /** @type {!RegExp} */
    var result = /^([^.]*)(?:\.(.+)|)/;
    jQuery.event = {
      global : {},
      add : function(elem, item, handler, data, selector) {
        var handleObjIn;
        var eventHandle;
        var BROWSER_ENGINES;
        var events;
        var i;
        var handleObj;
        var special;
        var handlers;
        var type;
        var d;
        var origType;
        var elemData = data_priv.get(elem);
        if (elemData) {
          if (handler.handler) {
            handler = (handleObjIn = handler).handler;
            selector = handleObjIn.selector;
          }
          if (!handler.guid) {
            /** @type {number} */
            handler.guid = jQuery.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = {};
          }
          if (!(eventHandle = elemData.handle)) {
            /** @type {function(!Object): ?} */
            eventHandle = elemData.handle = function(e) {
              return void 0 !== jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          i = (item = (item || "").match(rnotwhite) || [""]).length;
          for (; i--;) {
            type = origType = (BROWSER_ENGINES = result.exec(item[i]) || [])[1];
            d = (BROWSER_ENGINES[2] || "").split(".").sort();
            if (type) {
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type : type,
                origType : origType,
                data : data,
                handler : handler,
                guid : handler.guid,
                selector : selector,
                needsContext : selector && jQuery.expr.match.needsContext.test(selector),
                namespace : d.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                /** @type {number} */
                (handlers = events[type] = []).delegateCount = 0;
                if (!(special.setup && false !== special.setup.call(elem, data, d, eventHandle))) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              /** @type {boolean} */
              jQuery.event.global[type] = true;
            }
          }
        }
      },
      remove : function(elem, data, fn, selector, mappedTypes) {
        var i;
        var _;
        var tmp;
        var events;
        var t;
        var handleObj;
        var special;
        var handlers;
        var type;
        var d;
        var origType;
        var elemData = data_priv.hasData(elem) && data_priv.get(elem);
        if (elemData && (events = elemData.events)) {
          t = (data = (data || "").match(rnotwhite) || [""]).length;
          for (; t--;) {
            if (type = origType = (tmp = result.exec(data[t]) || [])[1], d = (tmp[2] || "").split(".").sort(), type) {
              special = jQuery.event.special[type] || {};
              handlers = events[type = (selector ? special.delegateType : special.bindType) || type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)");
              _ = i = handlers.length;
              for (; i--;) {
                handleObj = handlers[i];
                if (!(!mappedTypes && origType !== handleObj.origType || fn && fn.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector))) {
                  handlers.splice(i, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (_ && !handlers.length) {
                if (!(special.teardown && false !== special.teardown.call(elem, d, elemData.handle))) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            } else {
              for (type in events) {
                jQuery.event.remove(elem, type + data[t], fn, selector, true);
              }
            }
          }
          if (jQuery.isEmptyObject(events)) {
            data_priv.remove(elem, "handle events");
          }
        }
      },
      dispatch : function(event) {
        event = jQuery.event.fix(event);
        var i;
        var j;
        var docs;
        var matched;
        var handleObj;
        var handlerQueue;
        /** @type {!Array<?>} */
        var options = slice.call(arguments);
        var handlers = (data_priv.get(this, "events") || {})[event.type] || [];
        var special = jQuery.event.special[event.type] || {};
        if (options[0] = event, event.delegateTarget = this, !special.preDispatch || false !== special.preDispatch.call(this, event)) {
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          /** @type {number} */
          i = 0;
          for (; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
            event.currentTarget = matched.elem;
            /** @type {number} */
            j = 0;
            for (; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
              if (!(event.rnamespace && !event.rnamespace.test(handleObj.namespace))) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                if (void 0 !== (docs = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, options)) && false === (event.result = docs)) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
          return special.postDispatch && special.postDispatch.call(this, event), event.result;
        }
      },
      handlers : function(event, handlers) {
        var i;
        var matches;
        var x;
        var handleObj;
        /** @type {!Array} */
        var handlerQueue = [];
        var delegateCount = handlers.delegateCount;
        var cur = event.target;
        if (delegateCount && cur.nodeType && ("click" !== event.type || isNaN(event.button) || event.button < 1)) {
          for (; cur !== this; cur = cur.parentNode || this) {
            if (1 === cur.nodeType && (true !== cur.disabled || "click" !== event.type)) {
              /** @type {!Array} */
              matches = [];
              /** @type {number} */
              i = 0;
              for (; i < delegateCount; i++) {
                if (void 0 === matches[x = (handleObj = handlers[i]).selector + " "]) {
                  matches[x] = handleObj.needsContext ? jQuery(x, this).index(cur) > -1 : jQuery.find(x, this, null, [cur]).length;
                }
                if (matches[x]) {
                  matches.push(handleObj);
                }
              }
              if (matches.length) {
                handlerQueue.push({
                  elem : cur,
                  handlers : matches
                });
              }
            }
          }
        }
        return delegateCount < handlers.length && handlerQueue.push({
          elem : this,
          handlers : handlers.slice(delegateCount)
        }), handlerQueue;
      },
      props : "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks : {},
      keyHooks : {
        props : "char charCode key keyCode".split(" "),
        filter : function(o, e) {
          return null == o.which && (o.which = null != e.charCode ? e.charCode : e.keyCode), o;
        }
      },
      mouseHooks : {
        props : "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter : function(event, e) {
          var eventDoc;
          var doc;
          var body;
          var button = e.button;
          return null == event.pageX && null != e.clientX && (doc = (eventDoc = event.target.ownerDocument || document).documentElement, body = eventDoc.body, event.pageX = e.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = e.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), event.which || void 0 === button || (event.which = 1 & button ? 
          1 : 2 & button ? 3 : 4 & button ? 2 : 0), event;
        }
      },
      fix : function(event) {
        if (event[jQuery.expando]) {
          return event;
        }
        var i;
        var prop;
        var copy;
        var type = event.type;
        /** @type {!Object} */
        var originalEvent = event;
        var fixHook = this.fixHooks[type];
        if (!fixHook) {
          this.fixHooks[type] = fixHook = st.test(type) ? this.mouseHooks : SIG_PATTERN.test(type) ? this.keyHooks : {};
        }
        copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
        event = new jQuery.Event(originalEvent);
        i = copy.length;
        for (; i--;) {
          event[prop = copy[i]] = originalEvent[prop];
        }
        return event.target || (event.target = document), 3 === event.target.nodeType && (event.target = event.target.parentNode), fixHook.filter ? fixHook.filter(event, originalEvent) : event;
      },
      special : {
        load : {
          noBubble : true
        },
        focus : {
          trigger : function() {
            if (this !== get() && this.focus) {
              return this.focus(), false;
            }
          },
          delegateType : "focusin"
        },
        blur : {
          trigger : function() {
            if (this === get() && this.blur) {
              return this.blur(), false;
            }
          },
          delegateType : "focusout"
        },
        click : {
          trigger : function() {
            if ("checkbox" === this.type && this.click && jQuery.nodeName(this, "input")) {
              return this.click(), false;
            }
          },
          _default : function(event) {
            return jQuery.nodeName(event.target, "a");
          }
        },
        beforeunload : {
          postDispatch : function(event) {
            if (void 0 !== event.result && event.originalEvent) {
              event.originalEvent.returnValue = event.result;
            }
          }
        }
      }
    };
    /**
     * @param {!Object} e
     * @param {!Object} type
     * @param {?} cb
     * @return {undefined}
     */
    jQuery.removeEvent = function(e, type, cb) {
      if (e.removeEventListener) {
        e.removeEventListener(type, cb);
      }
    };
    /**
     * @param {!Object} src
     * @param {!Function} props
     * @return {?}
     */
    jQuery.Event = function(src, props) {
      if (!(this instanceof jQuery.Event)) {
        return new jQuery.Event(src, props);
      }
      if (src && src.type) {
        /** @type {!Object} */
        this.originalEvent = src;
        this.type = src.type;
        /** @type {function(): ?} */
        this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && false === src.returnValue ? returnTrue : returnFalse;
      } else {
        /** @type {!Object} */
        this.type = src;
      }
      if (props) {
        jQuery.extend(this, props);
      }
      this.timeStamp = src && src.timeStamp || jQuery.now();
      /** @type {boolean} */
      this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
      constructor : jQuery.Event,
      isDefaultPrevented : returnFalse,
      isPropagationStopped : returnFalse,
      isImmediatePropagationStopped : returnFalse,
      isSimulated : false,
      preventDefault : function() {
        var e = this.originalEvent;
        /** @type {function(): ?} */
        this.isDefaultPrevented = returnTrue;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation : function() {
        var e = this.originalEvent;
        /** @type {function(): ?} */
        this.isPropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation : function() {
        var e = this.originalEvent;
        /** @type {function(): ?} */
        this.isImmediatePropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    jQuery.each({
      mouseenter : "mouseover",
      mouseleave : "mouseout",
      pointerenter : "pointerover",
      pointerleave : "pointerout"
    }, function(orig, fix) {
      jQuery.event.special[orig] = {
        delegateType : fix,
        bindType : fix,
        handle : function(event) {
          var _ref12;
          var target = event.relatedTarget;
          var handleObj = event.handleObj;
          return target && (target === this || jQuery.contains(this, target)) || (event.type = handleObj.origType, _ref12 = handleObj.handler.apply(this, arguments), event.type = fix), _ref12;
        }
      };
    });
    jQuery.fn.extend({
      on : function(type, n, data, selector) {
        return add(this, type, n, data, selector);
      },
      one : function(text, n, fn, selector) {
        return add(this, text, n, fn, selector, 1);
      },
      off : function(types, callback, fn) {
        var handleObj;
        var type;
        if (types && types.preventDefault && types.handleObj) {
          return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
        }
        if ("object" == typeof types) {
          for (type in types) {
            this.off(type, callback, types[type]);
          }
          return this;
        }
        return false !== callback && "function" != typeof callback || (fn = callback, callback = void 0), false === fn && (fn = returnFalse), this.each(function() {
          jQuery.event.remove(this, types, fn, callback);
        });
      }
    });
    /** @type {!RegExp} */
    var rCssJsTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi;
    /** @type {!RegExp} */
    var trueRE = /<script|<style|<link/i;
    /** @type {!RegExp} */
    var reValidName = /checked\s*(?:[^=]|=\s*.checked.)/i;
    /** @type {!RegExp} */
    var re = /^true\/(.*)/;
    /** @type {!RegExp} */
    var rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    jQuery.extend({
      htmlPrefilter : function(html) {
        return html.replace(rCssJsTag, "<$1></$2>");
      },
      clone : function(elem, n, array) {
        var i;
        var l;
        var srcElements;
        var destElements;
        var src;
        var target;
        var undefined;
        var clone = elem.cloneNode(true);
        var inPage = jQuery.contains(elem.ownerDocument, elem);
        if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) {
          destElements = getAll(clone);
          /** @type {number} */
          i = 0;
          l = (srcElements = getAll(elem)).length;
          for (; i < l; i++) {
            src = srcElements[i];
            if ("input" === (undefined = (target = destElements[i]).nodeName.toLowerCase()) && reg.test(src.type)) {
              target.checked = src.checked;
            } else {
              if (!("input" !== undefined && "textarea" !== undefined)) {
                target.defaultValue = src.defaultValue;
              }
            }
          }
        }
        if (n) {
          if (array) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone);
            /** @type {number} */
            i = 0;
            l = srcElements.length;
            for (; i < l; i++) {
              cloneCopyEvent(srcElements[i], destElements[i]);
            }
          } else {
            cloneCopyEvent(elem, clone);
          }
        }
        return (destElements = getAll(clone, "script")).length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
      },
      cleanData : function(elems) {
        var data;
        var elem;
        var type;
        var special = jQuery.event.special;
        /** @type {number} */
        var i = 0;
        for (; void 0 !== (elem = elems[i]); i++) {
          if ($(elem)) {
            if (data = elem[data_priv.expando]) {
              if (data.events) {
                for (type in data.events) {
                  if (special[type]) {
                    jQuery.event.remove(elem, type);
                  } else {
                    jQuery.removeEvent(elem, type, data.handle);
                  }
                }
              }
              elem[data_priv.expando] = void 0;
            }
            if (elem[self.expando]) {
              elem[self.expando] = void 0;
            }
          }
        }
      }
    });
    jQuery.fn.extend({
      domManip : domManip,
      detach : function(context) {
        return remove(this, context, true);
      },
      remove : function(elem) {
        return remove(this, elem);
      },
      text : function(value) {
        return access(this, function(value) {
          return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
            if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
              this.textContent = value;
            }
          });
        }, null, value, arguments.length);
      },
      append : function() {
        return domManip(this, arguments, function(elem) {
          if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
            manipulationTarget(this, elem).appendChild(elem);
          }
        });
      },
      prepend : function() {
        return domManip(this, arguments, function(elem) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before : function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
          }
        });
      },
      after : function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
          }
        });
      },
      empty : function() {
        var elem;
        /** @type {number} */
        var i = 0;
        for (; null != (elem = this[i]); i++) {
          if (1 === elem.nodeType) {
            jQuery.cleanData(getAll(elem, false));
            /** @type {string} */
            elem.textContent = "";
          }
        }
        return this;
      },
      clone : function(value, options) {
        return value = null != value && value, options = null == options ? value : options, this.map(function() {
          return jQuery.clone(this, value, options);
        });
      },
      html : function(value) {
        return access(this, function(value) {
          var elem = this[0] || {};
          /** @type {number} */
          var thatpos = 0;
          var i = this.length;
          if (void 0 === value && 1 === elem.nodeType) {
            return elem.innerHTML;
          }
          if ("string" == typeof value && !trueRE.test(value) && !wrapMap[(Z.exec(value) || ["", ""])[1].toLowerCase()]) {
            value = jQuery.htmlPrefilter(value);
            try {
              for (; thatpos < i; thatpos++) {
                if (1 === (elem = this[thatpos] || {}).nodeType) {
                  jQuery.cleanData(getAll(elem, false));
                  /** @type {number} */
                  elem.innerHTML = value;
                }
              }
              /** @type {number} */
              elem = 0;
            } catch (t) {
            }
          }
          if (elem) {
            this.empty().append(value);
          }
        }, null, value, arguments.length);
      },
      replaceWith : function() {
        /** @type {!Array} */
        var ignored = [];
        return domManip(this, arguments, function(e) {
          var div = this.parentNode;
          if (jQuery.inArray(this, ignored) < 0) {
            jQuery.cleanData(getAll(this));
            if (div) {
              div.replaceChild(e, this);
            }
          }
        }, ignored);
      }
    });
    jQuery.each({
      appendTo : "append",
      prependTo : "prepend",
      insertBefore : "before",
      insertAfter : "after",
      replaceAll : "replaceWith"
    }, function(original, name) {
      /**
       * @param {!Array} path
       * @return {?}
       */
      jQuery.fn[original] = function(path) {
        var param;
        /** @type {!Array} */
        var ret = [];
        var a = jQuery(path);
        /** @type {number} */
        var last = a.length - 1;
        /** @type {number} */
        var i = 0;
        for (; i <= last; i++) {
          param = i === last ? this : this.clone(true);
          jQuery(a[i])[name](param);
          push.apply(ret, param.get());
        }
        return this.pushStack(ret);
      };
    });
    var iframe;
    var elemdisplay = {
      HTML : "block",
      BODY : "block"
    };
    /** @type {!RegExp} */
    var namespaces = /^margin/;
    /** @type {!RegExp} */
    var rnumnonpx = new RegExp("^(" + FSSource + ")(?!px)[a-z%]+$", "i");
    /**
     * @param {!Object} elem
     * @return {?}
     */
    var getStyles = function(elem) {
      var win = elem.ownerDocument.defaultView;
      return win && win.opener || (win = window), win.getComputedStyle(elem);
    };
    /**
     * @param {!Object} elem
     * @param {!Array} options
     * @param {!Function} value
     * @param {!Array} params
     * @return {?}
     */
    var swap = function(elem, options, value, params) {
      var ret;
      var prop;
      var originObject = {};
      for (prop in options) {
        originObject[prop] = elem.style[prop];
        elem.style[prop] = options[prop];
      }
      for (prop in ret = value.apply(elem, params || []), options) {
        elem.style[prop] = originObject[prop];
      }
      return ret;
    };
    var root = document.documentElement;
    !function() {
      /**
       * @return {undefined}
       */
      function computeStyleTests() {
        /** @type {string} */
        div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
        /** @type {string} */
        div.innerHTML = "";
        root.appendChild(r);
        var cs = window.getComputedStyle(div);
        /** @type {boolean} */
        t = "1%" !== cs.top;
        /** @type {boolean} */
        o = "2px" === cs.marginLeft;
        /** @type {boolean} */
        e = "4px" === cs.width;
        /** @type {string} */
        div.style.marginRight = "50%";
        /** @type {boolean} */
        i = "4px" === cs.marginRight;
        root.removeChild(r);
      }
      var t;
      var e;
      var i;
      var o;
      var r = document.createElement("div");
      var div = document.createElement("div");
      if (div.style) {
        /** @type {string} */
        div.style.backgroundClip = "content-box";
        /** @type {string} */
        div.cloneNode(true).style.backgroundClip = "";
        /** @type {boolean} */
        support.clearCloneStyle = "content-box" === div.style.backgroundClip;
        /** @type {string} */
        r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
        r.appendChild(div);
        jQuery.extend(support, {
          pixelPosition : function() {
            return computeStyleTests(), t;
          },
          boxSizingReliable : function() {
            return null == e && computeStyleTests(), e;
          },
          pixelMarginRight : function() {
            return null == e && computeStyleTests(), i;
          },
          reliableMarginLeft : function() {
            return null == e && computeStyleTests(), o;
          },
          reliableMarginRight : function() {
            var t;
            var marginDiv = div.appendChild(document.createElement("div"));
            return marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", root.appendChild(r), t = !parseFloat(window.getComputedStyle(marginDiv).marginRight), root.removeChild(r), div.removeChild(marginDiv), t;
          }
        });
      }
    }();
    /** @type {!RegExp} */
    var test = /^(none|table(?!-c[ea]).+)/;
    var cssShow = {
      position : "absolute",
      visibility : "hidden",
      display : "block"
    };
    var cssNormalTransform = {
      letterSpacing : "0",
      fontWeight : "400"
    };
    /** @type {!Array} */
    var prefixes = ["Webkit", "O", "Moz", "ms"];
    var style = document.createElement("div").style;
    jQuery.extend({
      cssHooks : {
        opacity : {
          get : function(type, value) {
            if (value) {
              var ret = curCSS(type, "opacity");
              return "" === ret ? "1" : ret;
            }
          }
        }
      },
      cssNumber : {
        animationIterationCount : true,
        columnCount : true,
        fillOpacity : true,
        flexGrow : true,
        flexShrink : true,
        fontWeight : true,
        lineHeight : true,
        opacity : true,
        order : true,
        orphans : true,
        widows : true,
        zIndex : true,
        zoom : true
      },
      cssProps : {
        float : "cssFloat"
      },
      style : function(elem, name, value, extra) {
        if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
          var ret;
          var type;
          var hooks;
          var origName = jQuery.camelCase(name);
          var style = elem.style;
          if (name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value) {
            return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, false, extra)) ? ret : style[name];
          }
          if ("string" == (type = typeof value) && (ret = regex.exec(value)) && ret[1]) {
            value = adjustCSS(elem, name, ret);
            /** @type {string} */
            type = "number";
          }
          if (null != value && value == value) {
            if ("number" === type) {
              /** @type {string} */
              value = value + (ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px"));
            }
            if (!(support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background"))) {
              /** @type {string} */
              style[name] = "inherit";
            }
            if (!(hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)))) {
              /** @type {string} */
              style[name] = value;
            }
          }
        }
      },
      css : function(key, name, value, styles) {
        var val;
        var length;
        var hooks;
        var origName = jQuery.camelCase(name);
        return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName), (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]) && "get" in hooks && (val = hooks.get(key, true, value)), void 0 === val && (val = curCSS(key, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === value || value ? (length = parseFloat(val), true === value || isFinite(length) ? length || 0 : val) : val;
      }
    });
    jQuery.each(["height", "width"], function(canCreateDiscussions, name) {
      jQuery.cssHooks[name] = {
        get : function(key, value, view) {
          if (value) {
            return test.test(jQuery.css(key, "display")) && 0 === key.offsetWidth ? swap(key, cssShow, function() {
              return getWidthOrHeight(key, name, view);
            }) : getWidthOrHeight(key, name, view);
          }
        },
        set : function(elem, value, extra) {
          var m;
          var styles = extra && getStyles(elem);
          var i = extra && augmentWidthOrHeight(elem, name, extra, "border-box" === jQuery.css(elem, "boxSizing", false, styles), styles);
          return i && (m = regex.exec(value)) && "px" !== (m[3] || "px") && (elem.style[name] = value, value = jQuery.css(elem, name)), fn(0, value, i);
        }
      };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, canCreateDiscussions) {
      if (canCreateDiscussions) {
        return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
          marginLeft : 0
        }, function() {
          return elem.getBoundingClientRect().left;
        })) + "px";
      }
    });
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, canCreateDiscussions) {
      if (canCreateDiscussions) {
        return swap(elem, {
          display : "inline-block"
        }, curCSS, [elem, "marginRight"]);
      }
    });
    jQuery.each({
      margin : "",
      padding : "",
      border : "Width"
    }, function(prefix, suffix) {
      jQuery.cssHooks[prefix + suffix] = {
        expand : function(expected) {
          /** @type {number} */
          var i = 0;
          var expanded = {};
          /** @type {!Array} */
          var stops = "string" == typeof expected ? expected.split(" ") : [expected];
          for (; i < 4; i++) {
            expanded[prefix + cssExpand[i] + suffix] = stops[i] || stops[i - 2] || stops[0];
          }
          return expanded;
        }
      };
      if (!namespaces.test(prefix)) {
        /** @type {function(!Object, !Object, string): ?} */
        jQuery.cssHooks[prefix + suffix].set = fn;
      }
    });
    jQuery.fn.extend({
      css : function(name, value) {
        return access(this, function(elem, name, undefined) {
          var styles;
          var l;
          var map = {};
          /** @type {number} */
          var i = 0;
          if (jQuery.isArray(name)) {
            styles = getStyles(elem);
            l = name.length;
            for (; i < l; i++) {
              map[name[i]] = jQuery.css(elem, name[i], false, styles);
            }
            return map;
          }
          return void 0 !== undefined ? jQuery.style(elem, name, undefined) : jQuery.css(elem, name);
        }, name, value, arguments.length > 1);
      },
      show : function() {
        return showHide(this, true);
      },
      hide : function() {
        return showHide(this);
      },
      toggle : function(state) {
        return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
          if (isHidden(this)) {
            jQuery(this).show();
          } else {
            jQuery(this).hide();
          }
        });
      }
    });
    /** @type {function(!Array, !Function, string, string, number): ?} */
    jQuery.Tween = Tween;
    Tween.prototype = {
      constructor : Tween,
      init : function(elem, opts, prop, end, easing, unit) {
        /** @type {!Object} */
        this.elem = elem;
        /** @type {!Object} */
        this.prop = prop;
        this.easing = easing || jQuery.easing._default;
        /** @type {!Object} */
        this.options = opts;
        this.start = this.now = this.cur();
        /** @type {number} */
        this.end = end;
        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
      },
      cur : function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run : function(percent) {
        var eased;
        var hooks = Tween.propHooks[this.prop];
        return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
      }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
      _default : {
        get : function(data) {
          var fitWidth;
          return 1 !== data.elem.nodeType || null != data.elem[data.prop] && null == data.elem.style[data.prop] ? data.elem[data.prop] : (fitWidth = jQuery.css(data.elem, data.prop, "")) && "auto" !== fitWidth ? fitWidth : 0;
        },
        set : function(tween) {
          if (jQuery.fx.step[tween.prop]) {
            jQuery.fx.step[tween.prop](tween);
          } else {
            if (1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop]) {
              tween.elem[tween.prop] = tween.now;
            } else {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            }
          }
        }
      }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set : function(data) {
        if (data.elem.nodeType && data.elem.parentNode) {
          data.elem[data.prop] = data.now;
        }
      }
    };
    jQuery.easing = {
      linear : function(p) {
        return p;
      },
      swing : function(p) {
        return .5 - Math.cos(p * Math.PI) / 2;
      },
      _default : "swing"
    };
    /** @type {function(!Object, !Object, !Object, number, string, !Object): undefined} */
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow;
    var slideshowtimer;
    /** @type {!RegExp} */
    var moveRegex = /^(?:toggle|show|hide)$/;
    /** @type {!RegExp} */
    var rrun = /queueHooks$/;
    jQuery.Animation = jQuery.extend(Animation, {
      tweeners : {
        "*" : [function(prop, value) {
          var tween = this.createTween(prop, value);
          return adjustCSS(tween.elem, prop, regex.exec(value), tween), tween;
        }]
      },
      tweener : function(props, callback) {
        if (jQuery.isFunction(props)) {
          /** @type {!Object} */
          callback = props;
          /** @type {!Array} */
          props = ["*"];
        } else {
          props = props.match(rnotwhite);
        }
        var prop;
        /** @type {number} */
        var i = 0;
        var k = props.length;
        for (; i < k; i++) {
          prop = props[i];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters : [function(elem, props, config) {
        var prop;
        var value;
        var matched;
        var tween;
        var hooks;
        var oldfire;
        var display;
        var anim = this;
        var orig = {};
        var style = elem.style;
        var hidden = elem.nodeType && isHidden(elem);
        var dataShow = data_priv.get(elem, "fxshow");
        for (prop in config.queue || (null == (hooks = jQuery._queueHooks(elem, "fx")).unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        }), hooks.unqueued++, anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        })), 1 === elem.nodeType && ("height" in props || "width" in props) && (config.overflow = [style.overflow, style.overflowX, style.overflowY], "inline" === ("none" === (display = jQuery.css(elem, "display")) ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display) && "none" === jQuery.css(elem, "float") && (style.display = "inline-block")), config.overflow && (style.overflow = "hidden", anim.always(function() {
          style.overflow = config.overflow[0];
          style.overflowX = config.overflow[1];
          style.overflowY = config.overflow[2];
        })), props) {
          if (value = props[prop], moveRegex.exec(value)) {
            if (delete props[prop], matched = matched || "toggle" === value, value === (hidden ? "hide" : "show")) {
              if ("show" !== value || !dataShow || void 0 === dataShow[prop]) {
                continue;
              }
              /** @type {boolean} */
              hidden = true;
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          } else {
            display = void 0;
          }
        }
        if (jQuery.isEmptyObject(orig)) {
          if ("inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display)) {
            style.display = display;
          }
        } else {
          for (prop in dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = data_priv.access(elem, "fxshow", {}), matched && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function() {
            jQuery(elem).hide();
          }), anim.done(function() {
            var prop;
            for (prop in data_priv.remove(elem, "fxshow"), orig) {
              jQuery.style(elem, prop, orig[prop]);
            }
          }), orig) {
            tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = tween.start;
              if (hidden) {
                tween.end = tween.start;
                /** @type {number} */
                tween.start = "width" === prop || "height" === prop ? 1 : 0;
              }
            }
          }
        }
      }],
      prefilter : function(callback, options) {
        if (options) {
          Animation.prefilters.unshift(callback);
        } else {
          Animation.prefilters.push(callback);
        }
      }
    });
    /**
     * @param {string} speed
     * @param {string} easing
     * @param {boolean} fn
     * @return {?}
     */
    jQuery.speed = function(speed, easing, fn) {
      var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
        complete : fn || !fn && easing || jQuery.isFunction(speed) && speed,
        duration : speed,
        easing : fn && easing || easing && !jQuery.isFunction(easing) && easing
      };
      return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, null != opt.queue && true !== opt.queue || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
        if (jQuery.isFunction(opt.old)) {
          opt.old.call(this);
        }
        if (opt.queue) {
          jQuery.dequeue(this, opt.queue);
        }
      }, opt;
    };
    jQuery.fn.extend({
      fadeTo : function(speed, to, callback, context) {
        return this.filter(isHidden).css("opacity", 0).show().end().animate({
          opacity : to
        }, speed, callback, context);
      },
      animate : function(prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop);
        var optall = jQuery.speed(speed, easing, callback);
        /**
         * @return {undefined}
         */
        var doAnimation = function() {
          var anim = Animation(this, jQuery.extend({}, prop), optall);
          if (empty || data_priv.get(this, "finish")) {
            anim.stop(true);
          }
        };
        return doAnimation.finish = doAnimation, empty || false === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
      },
      stop : function(type, n, t) {
        /**
         * @param {!Object} o
         * @return {undefined}
         */
        var callback = function(o) {
          var s = o.stop;
          delete o.stop;
          s(t);
        };
        return "string" != typeof type && (t = n, n = type, type = void 0), n && false !== type && this.queue(type || "fx", []), this.each(function() {
          /** @type {boolean} */
          var cmp = true;
          /** @type {(boolean|string)} */
          var index = null != type && type + "queueHooks";
          /** @type {!Array} */
          var timers = jQuery.timers;
          var data = data_priv.get(this);
          if (index) {
            if (data[index] && data[index].stop) {
              callback(data[index]);
            }
          } else {
            for (index in data) {
              if (data[index] && data[index].stop && rrun.test(index)) {
                callback(data[index]);
              }
            }
          }
          /** @type {number} */
          index = timers.length;
          for (; index--;) {
            if (!(timers[index].elem !== this || null != type && timers[index].queue !== type)) {
              timers[index].anim.stop(t);
              /** @type {boolean} */
              cmp = false;
              timers.splice(index, 1);
            }
          }
          if (!(!cmp && t)) {
            jQuery.dequeue(this, type);
          }
        });
      },
      finish : function(type) {
        return false !== type && (type = type || "fx"), this.each(function() {
          var index;
          var data = data_priv.get(this);
          var queue = data[type + "queue"];
          var hooks = data[type + "queueHooks"];
          /** @type {!Array} */
          var timers = jQuery.timers;
          var length = queue ? queue.length : 0;
          /** @type {boolean} */
          data.finish = true;
          jQuery.queue(this, type, []);
          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          }
          /** @type {number} */
          index = timers.length;
          for (; index--;) {
            if (timers[index].elem === this && timers[index].queue === type) {
              timers[index].anim.stop(true);
              timers.splice(index, 1);
            }
          }
          /** @type {number} */
          index = 0;
          for (; index < length; index++) {
            if (queue[index] && queue[index].finish) {
              queue[index].finish.call(this);
            }
          }
          delete data.finish;
        });
      }
    });
    jQuery.each(["toggle", "show", "hide"], function(canCreateDiscussions, name) {
      var cssFn = jQuery.fn[name];
      /**
       * @param {string} x
       * @param {string} callback
       * @param {boolean} options
       * @return {?}
       */
      jQuery.fn[name] = function(x, callback, options) {
        return null == x || "boolean" == typeof x ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), x, callback, options);
      };
    });
    jQuery.each({
      slideDown : genFx("show"),
      slideUp : genFx("hide"),
      slideToggle : genFx("toggle"),
      fadeIn : {
        opacity : "show"
      },
      fadeOut : {
        opacity : "hide"
      },
      fadeToggle : {
        opacity : "toggle"
      }
    }, function(original, props) {
      /**
       * @param {string} speed
       * @param {string} callback
       * @param {boolean} options
       * @return {?}
       */
      jQuery.fn[original] = function(speed, callback, options) {
        return this.animate(props, speed, callback, options);
      };
    });
    /** @type {!Array} */
    jQuery.timers = [];
    /**
     * @return {undefined}
     */
    jQuery.fx.tick = function() {
      var maxBet;
      /** @type {number} */
      var i = 0;
      /** @type {!Array} */
      var timers = jQuery.timers;
      fxNow = jQuery.now();
      for (; i < timers.length; i++) {
        if (!((maxBet = timers[i])() || timers[i] !== maxBet)) {
          timers.splice(i--, 1);
        }
      }
      if (!timers.length) {
        jQuery.fx.stop();
      }
      fxNow = void 0;
    };
    /**
     * @param {?} timer
     * @return {undefined}
     */
    jQuery.fx.timer = function(timer) {
      jQuery.timers.push(timer);
      if (timer()) {
        jQuery.fx.start();
      } else {
        jQuery.timers.pop();
      }
    };
    /** @type {number} */
    jQuery.fx.interval = 13;
    /**
     * @return {undefined}
     */
    jQuery.fx.start = function() {
      if (!slideshowtimer) {
        slideshowtimer = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
      }
    };
    /**
     * @return {undefined}
     */
    jQuery.fx.stop = function() {
      window.clearInterval(slideshowtimer);
      /** @type {null} */
      slideshowtimer = null;
    };
    jQuery.fx.speeds = {
      slow : 600,
      fast : 200,
      _default : 400
    };
    /**
     * @param {!Object} duration
     * @param {!Object} type
     * @return {?}
     */
    jQuery.fn.delay = function(duration, type) {
      return duration = jQuery.fx && jQuery.fx.speeds[duration] || duration, type = type || "fx", this.queue(type, function(fn, i) {
        var timer = window.setTimeout(fn, duration);
        /**
         * @return {undefined}
         */
        i.stop = function() {
          window.clearTimeout(timer);
        };
      });
    };
    (function() {
      var elem = document.createElement("input");
      var select = document.createElement("select");
      var opt = select.appendChild(document.createElement("option"));
      /** @type {string} */
      elem.type = "checkbox";
      /** @type {boolean} */
      support.checkOn = "" !== elem.value;
      support.optSelected = opt.selected;
      /** @type {boolean} */
      select.disabled = true;
      /** @type {boolean} */
      support.optDisabled = !opt.disabled;
      /** @type {string} */
      (elem = document.createElement("input")).value = "t";
      /** @type {string} */
      elem.type = "radio";
      /** @type {boolean} */
      support.radioValue = "t" === elem.value;
    })();
    var boolHook;
    var attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
      attr : function(type, value) {
        return access(this, jQuery.attr, type, value, arguments.length > 1);
      },
      removeAttr : function(name) {
        return this.each(function() {
          jQuery.removeAttr(this, name);
        });
      }
    });
    jQuery.extend({
      attr : function(elem, name, value) {
        var ret;
        var hooks;
        var type = elem.nodeType;
        if (3 !== type && 8 !== type && 2 !== type) {
          return void 0 === elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === type && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && "get" in hooks && null !== (ret = hooks.get(elem, 
          name)) ? ret : null == (ret = jQuery.find.attr(elem, name)) ? void 0 : ret);
        }
      },
      attrHooks : {
        type : {
          set : function(key, value) {
            if (!support.radioValue && "radio" === value && jQuery.nodeName(key, "input")) {
              var code = key.value;
              return key.setAttribute("type", value), code && (key.value = code), value;
            }
          }
        }
      },
      removeAttr : function(elem, value) {
        var name;
        var type;
        /** @type {number} */
        var i = 0;
        var attrNames = value && value.match(rnotwhite);
        if (attrNames && 1 === elem.nodeType) {
          for (; name = attrNames[i++];) {
            type = jQuery.propFix[name] || name;
            if (jQuery.expr.match.bool.test(name)) {
              /** @type {boolean} */
              elem[type] = false;
            }
            elem.removeAttribute(name);
          }
        }
      }
    });
    boolHook = {
      set : function(name, value, key) {
        return false === value ? jQuery.removeAttr(name, key) : name.setAttribute(key, key), key;
      }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(canCreateDiscussions, name) {
      var wrapMethod = attrHandle[name] || jQuery.find.attr;
      /**
       * @param {!Object} call
       * @param {string} name
       * @param {number} s
       * @return {?}
       */
      attrHandle[name] = function(call, name, s) {
        var ret;
        var handle;
        return s || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != wrapMethod(call, name, s) ? name.toLowerCase() : null, attrHandle[name] = handle), ret;
      };
    });
    /** @type {!RegExp} */
    var srsRegex = /^(?:input|select|textarea|button)$/i;
    /** @type {!RegExp} */
    var inputNodeNames = /^(?:a|area)$/i;
    jQuery.fn.extend({
      prop : function(type, value) {
        return access(this, jQuery.prop, type, value, arguments.length > 1);
      },
      removeProp : function(name) {
        return this.each(function() {
          delete this[jQuery.propFix[name] || name];
        });
      }
    });
    jQuery.extend({
      prop : function(elem, name, value) {
        var ret;
        var hooks;
        var type = elem.nodeType;
        if (3 !== type && 8 !== type && 2 !== type) {
          return 1 === type && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
        }
      },
      propHooks : {
        tabIndex : {
          get : function(value) {
            var b = jQuery.find.attr(value, "tabindex");
            return b ? parseInt(b, 10) : srsRegex.test(value.nodeName) || inputNodeNames.test(value.nodeName) && value.href ? 0 : -1;
          }
        }
      },
      propFix : {
        for : "htmlFor",
        class : "className"
      }
    });
    if (!support.optSelected) {
      jQuery.propHooks.selected = {
        get : function(value) {
          var e = value.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set : function(value) {
          var e = value.parentNode;
          if (e) {
            e.selectedIndex;
            if (e.parentNode) {
              e.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      jQuery.propFix[this.toLowerCase()] = this;
    });
    /** @type {!RegExp} */
    var reSpace = /[\t\r\n\f]/g;
    jQuery.fn.extend({
      addClass : function(value) {
        var points2;
        var el;
        var code;
        var curValue;
        var codeFragment;
        var s;
        var status;
        /** @type {number} */
        var u = 0;
        if (jQuery.isFunction(value)) {
          return this.each(function(i) {
            jQuery(this).addClass(value.call(this, i, getClass(this)));
          });
        }
        if ("string" == typeof value && value) {
          /** @type {!Array} */
          points2 = value.match(rnotwhite) || [];
          for (; el = this[u++];) {
            if (curValue = getClass(el), code = 1 === el.nodeType && (" " + curValue + " ").replace(reSpace, " ")) {
              /** @type {number} */
              s = 0;
              for (; codeFragment = points2[s++];) {
                if (code.indexOf(" " + codeFragment + " ") < 0) {
                  /** @type {string} */
                  code = code + (codeFragment + " ");
                }
              }
              if (curValue !== (status = jQuery.trim(code))) {
                el.setAttribute("class", status);
              }
            }
          }
        }
        return this;
      },
      removeClass : function(value) {
        var zeroSizeMaxes;
        var el;
        var body;
        var curValue;
        var zeroSizeMax;
        var callbackCount;
        var b;
        /** @type {number} */
        var u = 0;
        if (jQuery.isFunction(value)) {
          return this.each(function(i) {
            jQuery(this).removeClass(value.call(this, i, getClass(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        if ("string" == typeof value && value) {
          /** @type {!Array} */
          zeroSizeMaxes = value.match(rnotwhite) || [];
          for (; el = this[u++];) {
            if (curValue = getClass(el), body = 1 === el.nodeType && (" " + curValue + " ").replace(reSpace, " ")) {
              /** @type {number} */
              callbackCount = 0;
              for (; zeroSizeMax = zeroSizeMaxes[callbackCount++];) {
                for (; body.indexOf(" " + zeroSizeMax + " ") > -1;) {
                  /** @type {string} */
                  body = body.replace(" " + zeroSizeMax + " ", " ");
                }
              }
              if (curValue !== (b = jQuery.trim(body))) {
                el.setAttribute("class", b);
              }
            }
          }
        }
        return this;
      },
      toggleClass : function(value, stateVal) {
        /** @type {string} */
        var undefined = typeof value;
        return "boolean" == typeof stateVal && "string" === undefined ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        }) : this.each(function() {
          var className;
          var i;
          var $body;
          var classNames;
          if ("string" === undefined) {
            /** @type {number} */
            i = 0;
            $body = jQuery(this);
            classNames = value.match(rnotwhite) || [];
            for (; className = classNames[i++];) {
              if ($body.hasClass(className)) {
                $body.removeClass(className);
              } else {
                $body.addClass(className);
              }
            }
          } else {
            if (!(void 0 !== value && "boolean" !== undefined)) {
              if (className = getClass(this)) {
                data_priv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute("class", className || false === value ? "" : data_priv.get(this, "__className__") || "");
              }
            }
          }
        });
      },
      hasClass : function(name) {
        var e;
        var el;
        /** @type {number} */
        var i = 0;
        /** @type {string} */
        e = " " + name + " ";
        for (; el = this[i++];) {
          if (1 === el.nodeType && (" " + getClass(el) + " ").replace(reSpace, " ").indexOf(e) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    /** @type {!RegExp} */
    var n = /\r/g;
    /** @type {!RegExp} */
    var reNewLines = /[\x20\t\r\n\f]+/g;
    jQuery.fn.extend({
      val : function(a) {
        var hooks;
        var value;
        var i;
        var elem = this[0];
        return arguments.length ? (i = jQuery.isFunction(a), this.each(function(n) {
          var s;
          if (1 === this.nodeType) {
            if (null == (s = i ? a.call(this, n, jQuery(this).val()) : a)) {
              /** @type {string} */
              s = "";
            } else {
              if ("number" == typeof s) {
                /** @type {string} */
                s = s + "";
              } else {
                if (jQuery.isArray(s)) {
                  s = jQuery.map(s, function(value) {
                    return null == value ? "" : value + "";
                  });
                }
              }
            }
            if (!((hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && void 0 !== hooks.set(this, s, "value"))) {
              this.value = s;
            }
          }
        })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && void 0 !== (value = hooks.get(elem, "value")) ? value : "string" == typeof(value = elem.value) ? value.replace(n, "") : null == value ? "" : value : void 0;
      }
    });
    jQuery.extend({
      valHooks : {
        option : {
          get : function(type) {
            var ilabel = jQuery.find.attr(type, "value");
            return null != ilabel ? ilabel : jQuery.trim(jQuery.text(type)).replace(reNewLines, " ");
          }
        },
        select : {
          get : function(key) {
            var value;
            var e;
            var l = key.options;
            var index = key.selectedIndex;
            /** @type {boolean} */
            var one = "select-one" === key.type || index < 0;
            /** @type {(Array|null)} */
            var values = one ? null : [];
            var max = one ? index + 1 : l.length;
            var i = index < 0 ? max : one ? index : 0;
            for (; i < max; i++) {
              if (((e = l[i]).selected || i === index) && (support.optDisabled ? !e.disabled : null === e.getAttribute("disabled")) && (!e.parentNode.disabled || !jQuery.nodeName(e.parentNode, "optgroup"))) {
                if (value = jQuery(e).val(), one) {
                  return value;
                }
                values.push(value);
              }
            }
            return values;
          },
          set : function(type, value) {
            var outputFn;
            var option;
            var options = type.options;
            var result = jQuery.makeArray(value);
            var i = options.length;
            for (; i--;) {
              if ((option = options[i]).selected = jQuery.inArray(jQuery.valHooks.option.get(option), result) > -1) {
                /** @type {boolean} */
                outputFn = true;
              }
            }
            return outputFn || (type.selectedIndex = -1), result;
          }
        }
      }
    });
    jQuery.each(["radio", "checkbox"], function() {
      jQuery.valHooks[this] = {
        set : function(key, value) {
          if (jQuery.isArray(value)) {
            return key.checked = jQuery.inArray(jQuery(key).val(), value) > -1;
          }
        }
      };
      if (!support.checkOn) {
        /**
         * @param {!Object} value
         * @return {?}
         */
        jQuery.valHooks[this].get = function(value) {
          return null === value.getAttribute("value") ? "on" : value.value;
        };
      }
    });
    /** @type {!RegExp} */
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    jQuery.extend(jQuery.event, {
      trigger : function(event, value, elem, onlyHandlers) {
        var i;
        var cur;
        var tmp;
        var bubbleType;
        var ontype;
        var next;
        var special;
        /** @type {!Array} */
        var eventPath = [elem || document];
        var type = hasOwn.call(event, "type") ? event.type : event;
        var parts = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (type = (parts = type.split(".")).shift(), parts.sort()), ontype = type.indexOf(":") < 0 && "on" + type, (event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event)).isTrigger = onlyHandlers ? 2 : 3, event.namespace = parts.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + 
        parts.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), value = null == value ? [event] : jQuery.makeArray(value, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || false !== special.trigger.apply(elem, value))) {
          if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
          }
          /** @type {number} */
          i = 0;
          for (; (cur = eventPath[i++]) && !event.isPropagationStopped();) {
            event.type = i > 1 ? bubbleType : special.bindType || type;
            if (next = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle")) {
              next.apply(cur, value);
            }
            if ((next = ontype && cur[ontype]) && next.apply && $(cur)) {
              event.result = next.apply(cur, value);
              if (false === event.result) {
                event.preventDefault();
              }
            }
          }
          return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && false !== special._default.apply(eventPath.pop(), value) || !$(elem) || ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && ((tmp = elem[ontype]) && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)), event.result;
        }
      },
      simulate : function(type, elem, target) {
        var i = jQuery.extend(new jQuery.Event, target, {
          type : type,
          isSimulated : true
        });
        jQuery.event.trigger(i, null, elem);
      }
    });
    jQuery.fn.extend({
      trigger : function(type, data) {
        return this.each(function() {
          jQuery.event.trigger(type, data, this);
        });
      },
      triggerHandler : function(type, data) {
        var parent = this[0];
        if (parent) {
          return jQuery.event.trigger(type, data, parent, true);
        }
      }
    });
    jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(canCreateDiscussions, type) {
      /**
       * @param {!Object} data
       * @param {!Object} callback
       * @return {?}
       */
      jQuery.fn[type] = function(data, callback) {
        return arguments.length > 0 ? this.on(type, null, data, callback) : this.trigger(type);
      };
    });
    jQuery.fn.extend({
      hover : function(fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
      }
    });
    /** @type {boolean} */
    support.focusin = "onfocusin" in window;
    if (!support.focusin) {
      jQuery.each({
        focus : "focusin",
        blur : "focusout"
      }, function(orig, fix) {
        /**
         * @param {!Object} event
         * @return {undefined}
         */
        var handler = function(event) {
          jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };
        jQuery.event.special[fix] = {
          setup : function() {
            var doc = this.ownerDocument || this;
            var attaches = data_priv.access(doc, fix);
            if (!attaches) {
              doc.addEventListener(orig, handler, true);
            }
            data_priv.access(doc, fix, (attaches || 0) + 1);
          },
          teardown : function() {
            var doc = this.ownerDocument || this;
            /** @type {number} */
            var data = data_priv.access(doc, fix) - 1;
            if (data) {
              data_priv.access(doc, fix, data);
            } else {
              doc.removeEventListener(orig, handler, true);
              data_priv.remove(doc, fix);
            }
          }
        };
      });
    }
    var location = window.location;
    var widgetUniqueIDIndex = jQuery.now();
    /** @type {!RegExp} */
    var rquery = /\?/;
    /**
     * @param {string} data
     * @return {?}
     */
    jQuery.parseJSON = function(data) {
      return JSON.parse(data + "");
    };
    /**
     * @param {string} data
     * @return {?}
     */
    jQuery.parseXML = function(data) {
      var xml;
      if (!data || "string" != typeof data) {
        return null;
      }
      try {
        xml = (new window.DOMParser).parseFromString(data, "text/xml");
      } catch (t) {
        xml = void 0;
      }
      return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml;
    };
    /** @type {!RegExp} */
    var savedRegExp = /#.*$/;
    /** @type {!RegExp} */
    var rts = /([?&])_=[^&]*/;
    /** @type {!RegExp} */
    var idre = /^(.*?):[ \t]*([^\r\n]*)$/gm;
    /** @type {!RegExp} */
    var loader = /^(?:GET|HEAD)$/;
    /** @type {!RegExp} */
    var jsre = /^\/\//;
    var prefilters = {};
    var transports = {};
    /** @type {string} */
    var ye = "*/".concat("*");
    var originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    jQuery.extend({
      active : 0,
      lastModified : {},
      etag : {},
      ajaxSettings : {
        url : location.href,
        type : "GET",
        isLocal : /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(location.protocol),
        global : true,
        processData : true,
        async : true,
        contentType : "application/x-www-form-urlencoded; charset=UTF-8",
        accepts : {
          "*" : ye,
          text : "text/plain",
          html : "text/html",
          xml : "application/xml, text/xml",
          json : "application/json, text/javascript"
        },
        contents : {
          xml : /\bxml\b/,
          html : /\bhtml/,
          json : /\bjson\b/
        },
        responseFields : {
          xml : "responseXML",
          text : "responseText",
          json : "responseJSON"
        },
        converters : {
          "* text" : String,
          "text html" : true,
          "text json" : jQuery.parseJSON,
          "text xml" : jQuery.parseXML
        },
        flatOptions : {
          url : true,
          context : true
        }
      },
      ajaxSetup : function(target, settings) {
        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
      },
      ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
      ajaxTransport : addToPrefiltersOrTransports(transports),
      ajax : function(url, options) {
        /**
         * @param {number} status
         * @param {!Object} nativeStatusText
         * @param {!Array} responses
         * @param {!Object} headers
         * @return {undefined}
         */
        function done(status, nativeStatusText, responses, headers) {
          var isSuccess;
          var success;
          var error;
          var response;
          var modified;
          /** @type {!Object} */
          var statusText = nativeStatusText;
          if (2 !== reset) {
            /** @type {number} */
            reset = 2;
            if (showAboveTimeout) {
              window.clearTimeout(showAboveTimeout);
            }
            transport = void 0;
            arg = headers || "";
            /** @type {number} */
            jqXHR.readyState = status > 0 ? 4 : 0;
            /** @type {boolean} */
            isSuccess = status >= 200 && status < 300 || 304 === status;
            if (responses) {
              response = function(s, ajaxRequest, responses) {
                var ct;
                var type;
                var finalDataType;
                var firstDataType;
                var contents = s.contents;
                var dataTypes = s.dataTypes;
                for (; "*" === dataTypes[0];) {
                  dataTypes.shift();
                  if (void 0 === ct) {
                    ct = s.mimeType || ajaxRequest.getResponseHeader("Content-Type");
                  }
                }
                if (ct) {
                  for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                      dataTypes.unshift(type);
                      break;
                    }
                  }
                }
                if (dataTypes[0] in responses) {
                  finalDataType = dataTypes[0];
                } else {
                  for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                      /** @type {string} */
                      finalDataType = type;
                      break;
                    }
                    if (!firstDataType) {
                      /** @type {string} */
                      firstDataType = type;
                    }
                  }
                  /** @type {(string|undefined)} */
                  finalDataType = finalDataType || firstDataType;
                }
                if (finalDataType) {
                  return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
                }
              }(s, jqXHR, responses);
            }
            response = function(s, data, jqXHR, isSuccess) {
              var prop;
              var type;
              var value;
              var results;
              var key;
              var hash = {};
              var bookmarks = s.dataTypes.slice();
              if (bookmarks[1]) {
                for (value in s.converters) {
                  hash[value.toLowerCase()] = s.converters[value];
                }
              }
              type = bookmarks.shift();
              for (; type;) {
                if (s.responseFields[type] && (jqXHR[s.responseFields[type]] = data), !key && isSuccess && s.dataFilter && (data = s.dataFilter(data, s.dataType)), key = type, type = bookmarks.shift()) {
                  if ("*" === type) {
                    type = key;
                  } else {
                    if ("*" !== key && key !== type) {
                      if (!(value = hash[key + " " + type] || hash["* " + type])) {
                        for (prop in hash) {
                          if ((results = prop.split(" "))[1] === type && (value = hash[key + " " + results[0]] || hash["* " + results[0]])) {
                            if (true === value) {
                              value = hash[prop];
                            } else {
                              if (true !== hash[prop]) {
                                /** @type {string} */
                                type = results[0];
                                bookmarks.unshift(results[1]);
                              }
                            }
                            break;
                          }
                        }
                      }
                      if (true !== value) {
                        if (value && s.throws) {
                          data = value(data);
                        } else {
                          try {
                            data = value(data);
                          } catch ($null) {
                            return {
                              state : "parsererror",
                              error : value ? $null : "No conversion from " + key + " to " + type
                            };
                          }
                        }
                      }
                    }
                  }
                }
              }
              return {
                state : "success",
                data : data
              };
            }(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                if (modified = jqXHR.getResponseHeader("Last-Modified")) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                if (modified = jqXHR.getResponseHeader("etag")) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (204 === status || "HEAD" === s.type) {
                /** @type {string} */
                statusText = "nocontent";
              } else {
                if (304 === status) {
                  /** @type {string} */
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  /** @type {boolean} */
                  isSuccess = !(error = response.error);
                }
              }
            } else {
              error = statusText;
              if (!(!status && statusText)) {
                /** @type {string} */
                statusText = "error";
                if (status < 0) {
                  /** @type {number} */
                  status = 0;
                }
              }
            }
            /** @type {number} */
            jqXHR.status = status;
            /** @type {string} */
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(obj, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(obj, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (a) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            }
            completeDeferred.fireWith(obj, [jqXHR, statusText]);
            if (a) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
        }
        if ("object" == typeof url) {
          /** @type {!Object} */
          options = url;
          url = void 0;
        }
        options = options || {};
        var transport;
        var cacheURL;
        var arg;
        var p;
        var showAboveTimeout;
        var urlAnchor;
        var a;
        var i;
        var s = jQuery.ajaxSetup({}, options);
        var obj = s.context || s;
        var globalEventContext = s.context && (obj.nodeType || obj.jquery) ? jQuery(obj) : jQuery.event;
        var deferred = jQuery.Deferred();
        var completeDeferred = jQuery.Callbacks("once memory");
        var statusCode = s.statusCode || {};
        var opts = {};
        var requestHeadersNames = {};
        /** @type {number} */
        var reset = 0;
        /** @type {string} */
        var strAbort = "canceled";
        var jqXHR = {
          readyState : 0,
          getResponseHeader : function(header) {
            var e;
            if (2 === reset) {
              if (!p) {
                p = {};
                for (; e = idre.exec(arg);) {
                  /** @type {string} */
                  p[e[1].toLowerCase()] = e[2];
                }
              }
              e = p[header.toLowerCase()];
            }
            return null == e ? null : e;
          },
          getAllResponseHeaders : function() {
            return 2 === reset ? arg : null;
          },
          setRequestHeader : function(name, value) {
            var lname = name.toLowerCase();
            return reset || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, opts[name] = value), this;
          },
          overrideMimeType : function(type) {
            return reset || (s.mimeType = type), this;
          },
          statusCode : function(map) {
            var tmp;
            if (map) {
              if (reset < 2) {
                for (tmp in map) {
                  /** @type {!Array} */
                  statusCode[tmp] = [statusCode[tmp], map[tmp]];
                }
              } else {
                jqXHR.always(map[jqXHR.status]);
              }
            }
            return this;
          },
          abort : function(statusText) {
            var finalText = statusText || strAbort;
            return transport && transport.abort(finalText), done(0, finalText), this;
          }
        };
        if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || location.href) + "").replace(savedRegExp, "").replace(jsre, location.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain) {
          urlAnchor = document.createElement("a");
          try {
            /** @type {string} */
            urlAnchor.href = s.url;
            /** @type {string} */
            urlAnchor.href = urlAnchor.href;
            /** @type {boolean} */
            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (t) {
            /** @type {boolean} */
            s.crossDomain = true;
          }
        }
        if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === reset) {
          return jqXHR;
        }
        for (i in(a = jQuery.event && s.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !loader.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), false === s.cache && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + widgetUniqueIDIndex++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + widgetUniqueIDIndex++)), s.ifModified && 
        (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && false !== s.contentType || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + ye + "; q=0.01" : "") : 
        s.accepts["*"]), s.headers) {
          jqXHR.setRequestHeader(i, s.headers[i]);
        }
        if (s.beforeSend && (false === s.beforeSend.call(obj, jqXHR, s) || 2 === reset)) {
          return jqXHR.abort();
        }
        for (i in strAbort = "abort", {
          success : 1,
          error : 1,
          complete : 1
        }) {
          jqXHR[i](s[i]);
        }
        if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
          if (jqXHR.readyState = 1, a && globalEventContext.trigger("ajaxSend", [jqXHR, s]), 2 === reset) {
            return jqXHR;
          }
          if (s.async && s.timeout > 0) {
            showAboveTimeout = window.setTimeout(function() {
              jqXHR.abort("timeout");
            }, s.timeout);
          }
          try {
            /** @type {number} */
            reset = 1;
            transport.send(opts, done);
          } catch (success) {
            if (!(reset < 2)) {
              throw success;
            }
            done(-1, success);
          }
        } else {
          done(-1, "No Transport");
        }
        return jqXHR;
      },
      getJSON : function(option, data, callback) {
        return jQuery.get(option, data, callback, "json");
      },
      getScript : function(callback, type) {
        return jQuery.get(callback, void 0, type, "script");
      }
    });
    jQuery.each(["get", "post"], function(canCreateDiscussions, method) {
      /**
       * @param {!Object} url
       * @param {!Object} v
       * @param {!Object} s
       * @param {!Object} o
       * @return {?}
       */
      jQuery[method] = function(url, v, s, o) {
        return jQuery.isFunction(v) && (o = o || s, s = v, v = void 0), jQuery.ajax(jQuery.extend({
          url : url,
          type : method,
          dataType : o,
          data : v,
          success : s
        }, jQuery.isPlainObject(url) && url));
      };
    });
    /**
     * @param {string} url
     * @return {?}
     */
    jQuery._evalUrl = function(url) {
      return jQuery.ajax({
        url : url,
        type : "GET",
        dataType : "script",
        async : false,
        global : false,
        throws : true
      });
    };
    jQuery.fn.extend({
      wrapAll : function(html) {
        var e;
        return jQuery.isFunction(html) ? this.each(function(i) {
          jQuery(this).wrapAll(html.call(this, i));
        }) : (this[0] && (e = jQuery(html, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
          var elem = this;
          for (; elem.firstElementChild;) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this)), this);
      },
      wrapInner : function(html) {
        return jQuery.isFunction(html) ? this.each(function(i) {
          jQuery(this).wrapInner(html.call(this, i));
        }) : this.each(function() {
          var e = jQuery(this);
          var contents = e.contents();
          if (contents.length) {
            contents.wrapAll(html);
          } else {
            e.append(html);
          }
        });
      },
      wrap : function(html) {
        var isFunction = jQuery.isFunction(html);
        return this.each(function(i) {
          jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
        });
      },
      unwrap : function() {
        return this.parent().each(function() {
          if (!jQuery.nodeName(this, "body")) {
            jQuery(this).replaceWith(this.childNodes);
          }
        }).end();
      }
    });
    /**
     * @param {string} value
     * @return {?}
     */
    jQuery.expr.filters.hidden = function(value) {
      return !jQuery.expr.filters.visible(value);
    };
    /**
     * @param {!Element} elem
     * @return {?}
     */
    jQuery.expr.filters.visible = function(elem) {
      return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
    };
    /** @type {!RegExp} */
    var regNewline = /%20/g;
    /** @type {!RegExp} */
    var regCls = /\[\]$/;
    /** @type {!RegExp} */
    var reVowels = /\r?\n/g;
    /** @type {!RegExp} */
    var reHasHexPrefix = /^(?:submit|button|image|reset|file)$/i;
    /** @type {!RegExp} */
    var rsubmittable = /^(?:input|select|textarea|keygen)/i;
    /**
     * @param {?} obj
     * @param {string} name
     * @return {?}
     */
    jQuery.param = function(obj, name) {
      var property;
      /** @type {!Array} */
      var displayUsedBy = [];
      /**
       * @param {?} t
       * @param {string} value
       * @return {undefined}
       */
      var add = function(t, value) {
        value = jQuery.isFunction(value) ? value() : null == value ? "" : value;
        /** @type {string} */
        displayUsedBy[displayUsedBy.length] = encodeURIComponent(t) + "=" + encodeURIComponent(value);
      };
      if (void 0 === name && (name = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(obj) || obj.jquery && !jQuery.isPlainObject(obj)) {
        jQuery.each(obj, function() {
          add(this.name, this.value);
        });
      } else {
        for (property in obj) {
          callback(property, obj[property], name, add);
        }
      }
      return displayUsedBy.join("&").replace(regNewline, "+");
    };
    jQuery.fn.extend({
      serialize : function() {
        return jQuery.param(this.serializeArray());
      },
      serializeArray : function() {
        return this.map(function() {
          var elements = jQuery.prop(this, "elements");
          return elements ? jQuery.makeArray(elements) : this;
        }).filter(function() {
          var string = this.type;
          return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !reHasHexPrefix.test(string) && (this.checked || !reg.test(string));
        }).map(function(canCreateDiscussions, ctlParams) {
          var val = jQuery(this).val();
          return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
            return {
              name : ctlParams.name,
              value : val.replace(reVowels, "\r\n")
            };
          }) : {
            name : ctlParams.name,
            value : val.replace(reVowels, "\r\n")
          };
        }).get();
      }
    });
    /**
     * @return {?}
     */
    jQuery.ajaxSettings.xhr = function() {
      try {
        return new window.XMLHttpRequest;
      } catch (t) {
      }
    };
    var xhrSuccessStatus = {
      0 : 200,
      1223 : 204
    };
    var xhrSupported = jQuery.ajaxSettings.xhr();
    /** @type {boolean} */
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    /** @type {boolean} */
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
      var callback;
      var errorCallback;
      if (support.cors || xhrSupported && !options.crossDomain) {
        return {
          send : function(headers, callback) {
            var name;
            var xhr = options.xhr();
            if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields) {
              for (name in options.xhrFields) {
                xhr[name] = options.xhrFields[name];
              }
            }
            for (name in options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest"), headers) {
              xhr.setRequestHeader(name, headers[name]);
            }
            /**
             * @param {string} event
             * @return {?}
             */
            callback = function(event) {
              return function() {
                if (callback) {
                  /** @type {null} */
                  callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                  if ("abort" === event) {
                    xhr.abort();
                  } else {
                    if ("error" === event) {
                      if ("number" != typeof xhr.status) {
                        callback(0, "error");
                      } else {
                        callback(xhr.status, xhr.statusText);
                      }
                    } else {
                      callback(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                        binary : xhr.response
                      } : {
                        text : xhr.responseText
                      }, xhr.getAllResponseHeaders());
                    }
                  }
                }
              };
            };
            xhr.onload = callback();
            errorCallback = xhr.onerror = callback("error");
            if (void 0 !== xhr.onabort) {
              xhr.onabort = errorCallback;
            } else {
              /**
               * @return {undefined}
               */
              xhr.onreadystatechange = function() {
                if (4 === xhr.readyState) {
                  window.setTimeout(function() {
                    if (callback) {
                      errorCallback();
                    }
                  });
                }
              };
            }
            callback = callback("abort");
            try {
              xhr.send(options.hasContent && options.data || null);
            } catch (t) {
              if (callback) {
                throw t;
              }
            }
          },
          abort : function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    jQuery.ajaxSetup({
      accepts : {
        script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents : {
        script : /\b(?:java|ecma)script\b/
      },
      converters : {
        "text script" : function(value) {
          return jQuery.globalEval(value), value;
        }
      }
    });
    jQuery.ajaxPrefilter("script", function(settings) {
      if (void 0 === settings.cache) {
        /** @type {boolean} */
        settings.cache = false;
      }
      if (settings.crossDomain) {
        /** @type {string} */
        settings.type = "GET";
      }
    });
    jQuery.ajaxTransport("script", function(s) {
      var fileElem;
      var callback;
      if (s.crossDomain) {
        return {
          send : function(elem, callback) {
            fileElem = jQuery("<script>").prop({
              charset : s.scriptCharset,
              src : s.url
            }).on("load error", callback = function(result) {
              fileElem.remove();
              /** @type {null} */
              callback = null;
              if (result) {
                callback("error" === result.type ? 404 : 200, result.type);
              }
            });
            document.head.appendChild(fileElem[0]);
          },
          abort : function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    /** @type {!Array} */
    var oldCallbacks = [];
    /** @type {!RegExp} */
    var rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
      jsonp : "callback",
      jsonpCallback : function() {
        var indexLookupKey = oldCallbacks.pop() || jQuery.expando + "_" + widgetUniqueIDIndex++;
        return this[indexLookupKey] = true, indexLookupKey;
      }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, scanners) {
      var callbackName;
      var overwritten;
      var responseContainer;
      /** @type {(boolean|string)} */
      var jsonProp = false !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
      if (jsonProp || "jsonp" === s.dataTypes[0]) {
        return callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : false !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
          return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
        }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
          /** @type {!Arguments} */
          responseContainer = arguments;
        }, scanners.always(function() {
          if (void 0 === overwritten) {
            jQuery(window).removeProp(callbackName);
          } else {
            window[callbackName] = overwritten;
          }
          if (s[callbackName]) {
            s.jsonpCallback = originalSettings.jsonpCallback;
            oldCallbacks.push(callbackName);
          }
          if (responseContainer && jQuery.isFunction(overwritten)) {
            overwritten(responseContainer[0]);
          }
          responseContainer = overwritten = void 0;
        }), "script";
      }
    });
    /**
     * @param {string} data
     * @param {!Object} context
     * @param {!Function} keepScripts
     * @return {?}
     */
    jQuery.parseHTML = function(data, context, keepScripts) {
      if (!data || "string" != typeof data) {
        return null;
      }
      if ("boolean" == typeof context) {
        /** @type {!Object} */
        keepScripts = context;
        /** @type {boolean} */
        context = false;
      }
      context = context || document;
      /** @type {(Array<string>|null)} */
      var parsed = rsingleTag.exec(data);
      /** @type {(Array|boolean)} */
      var scripts = !keepScripts && [];
      return parsed ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes));
    };
    /** @type {function(!Object, !Object, !Array): ?} */
    var proxyStoreLoad = jQuery.fn.load;
    /**
     * @param {!Object} url
     * @param {!Object} value
     * @param {!Array} callback
     * @return {?}
     */
    jQuery.fn.load = function(url, value, callback) {
      if ("string" != typeof url && proxyStoreLoad) {
        return proxyStoreLoad.apply(this, arguments);
      }
      var selector;
      var method;
      var args;
      var self = this;
      var off = url.indexOf(" ");
      return off > -1 && (selector = jQuery.trim(url.slice(off)), url = url.slice(0, off)), jQuery.isFunction(value) ? (callback = value, value = void 0) : value && "object" == typeof value && (method = "POST"), self.length > 0 && jQuery.ajax({
        url : url,
        type : method || "GET",
        dataType : "html",
        data : value
      }).done(function(responseText) {
        /** @type {!Arguments} */
        args = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).always(callback && function(obj, document) {
        self.each(function() {
          callback.apply(this, args || [obj.responseText, document, obj]);
        });
      }), this;
    };
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(canCreateDiscussions, type) {
      /**
       * @param {!Function} leaveFunction
       * @return {?}
       */
      jQuery.fn[type] = function(leaveFunction) {
        return this.on(type, leaveFunction);
      };
    });
    /**
     * @param {?} elem
     * @return {?}
     */
    jQuery.expr.filters.animated = function(elem) {
      return jQuery.grep(jQuery.timers, function(fn) {
        return elem === fn.elem;
      }).length;
    };
    jQuery.offset = {
      setOffset : function(data, options, x) {
        var elBounds;
        var x;
        var a;
        var i;
        var curOffset;
        var value;
        var position = jQuery.css(data, "position");
        var l = jQuery(data);
        var o = {};
        if ("static" === position) {
          /** @type {string} */
          data.style.position = "relative";
        }
        curOffset = l.offset();
        a = jQuery.css(data, "top");
        value = jQuery.css(data, "left");
        if (("absolute" === position || "fixed" === position) && (a + value).indexOf("auto") > -1) {
          i = (elBounds = l.position()).top;
          x = elBounds.left;
        } else {
          /** @type {number} */
          i = parseFloat(a) || 0;
          /** @type {number} */
          x = parseFloat(value) || 0;
        }
        if (jQuery.isFunction(options)) {
          options = options.call(data, x, jQuery.extend({}, curOffset));
        }
        if (null != options.top) {
          /** @type {number} */
          o.top = options.top - curOffset.top + i;
        }
        if (null != options.left) {
          /** @type {number} */
          o.left = options.left - curOffset.left + x;
        }
        if ("using" in options) {
          options.using.call(data, o);
        } else {
          l.css(o);
        }
      }
    };
    jQuery.fn.extend({
      offset : function(y) {
        if (arguments.length) {
          return void 0 === y ? this : this.each(function(i) {
            jQuery.offset.setOffset(this, y, i);
          });
        }
        var root;
        var win;
        var elem = this[0];
        var box = {
          top : 0,
          left : 0
        };
        var doc = elem && elem.ownerDocument;
        return doc ? (root = doc.documentElement, jQuery.contains(root, elem) ? (box = elem.getBoundingClientRect(), win = getWindow(doc), {
          top : box.top + win.pageYOffset - root.clientTop,
          left : box.left + win.pageXOffset - root.clientLeft
        }) : box) : void 0;
      },
      position : function() {
        if (this[0]) {
          var offsetParent;
          var offset;
          var n = this[0];
          var parentOffset = {
            top : 0,
            left : 0
          };
          return "fixed" === jQuery.css(n, "position") ? offset = n.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true)), {
            top : offset.top - parentOffset.top - jQuery.css(n, "marginTop", true),
            left : offset.left - parentOffset.left - jQuery.css(n, "marginLeft", true)
          };
        }
      },
      offsetParent : function() {
        return this.map(function() {
          var offsetParent = this.offsetParent;
          for (; offsetParent && "static" === jQuery.css(offsetParent, "position");) {
            offsetParent = offsetParent.offsetParent;
          }
          return offsetParent || root;
        });
      }
    });
    jQuery.each({
      scrollLeft : "pageXOffset",
      scrollTop : "pageYOffset"
    }, function(type, prop) {
      /** @type {boolean} */
      var top = "pageYOffset" === prop;
      /**
       * @param {?} value
       * @return {?}
       */
      jQuery.fn[type] = function(value) {
        return access(this, function(elem, method, val) {
          var win = getWindow(elem);
          if (void 0 === val) {
            return win ? win[prop] : elem[method];
          }
          if (win) {
            win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset);
          } else {
            /** @type {number} */
            elem[method] = val;
          }
        }, type, value, arguments.length);
      };
    });
    jQuery.each(["top", "left"], function(canCreateDiscussions, prop) {
      jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, val) {
        if (val) {
          return val = curCSS(elem, prop), rnumnonpx.test(val) ? jQuery(elem).position()[prop] + "px" : val;
        }
      });
    });
    jQuery.each({
      Height : "height",
      Width : "width"
    }, function(name, type) {
      jQuery.each({
        padding : "inner" + name,
        content : type,
        "" : "outer" + name
      }, function(defaultExtra, original) {
        /**
         * @param {boolean} margin
         * @param {(number|string)} boardManager
         * @return {?}
         */
        jQuery.fn[original] = function(margin, boardManager) {
          var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
          var extra = defaultExtra || (true === margin || true === boardManager ? "margin" : "border");
          return access(this, function(elem, type, undefined) {
            var doc;
            return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, undefined, extra);
          }, type, chainable ? margin : void 0, chainable, null);
        };
      });
    });
    jQuery.fn.extend({
      bind : function(type, fn, callback) {
        return this.on(type, null, fn, callback);
      },
      unbind : function(type, fn) {
        return this.off(type, null, fn);
      },
      delegate : function(event, t, context, callback) {
        return this.on(t, event, context, callback);
      },
      undelegate : function(selector, event, callback) {
        return 1 === arguments.length ? this.off(selector, "**") : this.off(event, selector || "**", callback);
      },
      size : function() {
        return this.length;
      }
    });
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (!(void 0 === (i = function() {
      return jQuery;
    }.apply(e, [])))) {
      options.exports = i;
    }
    var _jQuery = window.jQuery;
    var old$ = window.$;
    return jQuery.noConflict = function(deep) {
      return window.$ === jQuery && (window.$ = old$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
    }, screen || (window.jQuery = window.$ = jQuery), jQuery;
  };
  if ("object" == typeof options && "object" == typeof options.exports) {
    options.exports = root.document ? init(root, true) : function(frame) {
      if (!frame.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return init(frame);
    };
  } else {
    init(root);
  }
}, function(module, canCreateDiscussions, n) {
  !function(definition) {
    if ("function" == typeof bootstrap) {
      bootstrap("promise", definition);
    } else {
      module.exports = definition();
    }
  }(function() {
    /**
     * @param {string} fn
     * @return {?}
     */
    function uncurryThis(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    }
    /**
     * @param {?} options
     * @param {!Object} x
     * @return {undefined}
     */
    function log(options, x) {
      if (hasStacks && x.stack && "object" == typeof options && null !== options && options.stack && -1 === options.stack.indexOf(g)) {
        /** @type {!Array} */
        var args = [];
        /** @type {!Object} */
        var e = x;
        for (; e; e = e.source) {
          if (e.stack) {
            args.unshift(e.stack);
          }
        }
        args.unshift(options.stack);
        /** @type {string} */
        var regex = args.join("\n" + g + "\n");
        options.stack = function(prop) {
          /** @type {!Array<string>} */
          var test_indexAdapter_slotid = prop.split("\n");
          /** @type {!Array} */
          var classes = [];
          /** @type {number} */
          var i = 0;
          for (; i < test_indexAdapter_slotid.length; ++i) {
            /** @type {string} */
            var test = test_indexAdapter_slotid[i];
            if (!callback(test) && -1 === (name = test).indexOf("(module.js:") && -1 === name.indexOf("(node.js:") && test) {
              classes.push(test);
            }
          }
          var name;
          return classes.join("\n");
        }(regex);
      }
    }
    /**
     * @param {string} url
     * @return {?}
     */
    function parse(url) {
      /** @type {(Array<string>|null)} */
      var rslt = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(url);
      if (rslt) {
        return [rslt[1], Number(rslt[2])];
      }
      /** @type {(Array<string>|null)} */
      var cmd_s = /at ([^ ]+):(\d+):(?:\d+)$/.exec(url);
      if (cmd_s) {
        return [cmd_s[1], Number(cmd_s[2])];
      }
      /** @type {(Array<string>|null)} */
      var i = /.*@(.+):(\d+)$/.exec(url);
      return i ? [i[1], Number(i[2])] : void 0;
    }
    /**
     * @param {string} url
     * @return {?}
     */
    function callback(url) {
      var r = parse(url);
      if (!r) {
        return false;
      }
      var state = r[0];
      var i = r[1];
      return state === APG_MATCH && i >= len && i <= header;
    }
    /**
     * @return {?}
     */
    function next() {
      if (hasStacks) {
        try {
          throw new Error;
        } catch (stackError) {
          var ip_segments = stackError.stack.split("\n");
          var v1 = parse(ip_segments[0].indexOf("@") > 0 ? ip_segments[1] : ip_segments[2]);
          if (!v1) {
            return;
          }
          return APG_MATCH = v1[0], v1[1];
        }
      }
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function Q(value) {
      return value instanceof Promise ? value : isPromise(value) ? (promise = value, deferred = defer(), Q.nextTick(function() {
        try {
          promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (t) {
          deferred.reject(t);
        }
      }), deferred.promise) : fulfill(value);
      var promise;
      var deferred;
    }
    /**
     * @return {?}
     */
    function defer() {
      /**
       * @param {!Object} value
       * @return {undefined}
       */
      function become(value) {
        /** @type {!Object} */
        result = value;
        /** @type {!Object} */
        promise.source = value;
        array_reduce(messages, function(canCreateDiscussions, n) {
          Q.nextTick(function() {
            value.promiseDispatch.apply(value, n);
          });
        }, void 0);
        messages = void 0;
        progressListeners = void 0;
      }
      var result;
      /** @type {!Array} */
      var messages = [];
      /** @type {!Array} */
      var progressListeners = [];
      /** @type {!Object} */
      var deferred = create(defer.prototype);
      /** @type {!Object} */
      var promise = create(Promise.prototype);
      if (promise.promiseDispatch = function(resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
          messages.push(args);
          if ("when" === op && operands[1]) {
            progressListeners.push(operands[1]);
          }
        } else {
          Q.nextTick(function() {
            result.promiseDispatch.apply(result, args);
          });
        }
      }, promise.valueOf = function() {
        if (messages) {
          return promise;
        }
        var value = nearer(result);
        return inspect(value) && (result = value), value;
      }, promise.inspect = function() {
        return result ? result.inspect() : {
          state : "pending"
        };
      }, Q.longStackSupport && hasStacks) {
        try {
          throw new Error;
        } catch (trace) {
          promise.stack = trace.stack.substring(trace.stack.indexOf("\n") + 1);
        }
      }
      return deferred.promise = promise, deferred.resolve = function(value) {
        if (!result) {
          become(Q(value));
        }
      }, deferred.fulfill = function(value) {
        if (!result) {
          become(fulfill(value));
        }
      }, deferred.reject = function(value) {
        if (!result) {
          become(resolve(value));
        }
      }, deferred.notify = function(ary) {
        if (!result) {
          array_reduce(progressListeners, function(canCreateDiscussions, swap) {
            Q.nextTick(function() {
              swap(ary);
            });
          }, void 0);
        }
      }, deferred;
    }
    /**
     * @param {!Function} resolver
     * @return {?}
     */
    function promise(resolver) {
      if ("function" != typeof resolver) {
        throw new TypeError("resolver must be a function.");
      }
      var deferred = defer();
      try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
      } catch (t) {
        deferred.reject(t);
      }
      return deferred.promise;
    }
    /**
     * @param {!NodeList} answerPs
     * @return {?}
     */
    function race(answerPs) {
      return promise(function(apexdist, unbindFinished) {
        /** @type {number} */
        var i = 0;
        var len = answerPs.length;
        for (; i < len; i++) {
          Q(answerPs[i]).then(apexdist, unbindFinished);
        }
      });
    }
    /**
     * @param {!Object} filters
     * @param {?} fn
     * @param {?} inspect
     * @return {?}
     */
    function Promise(filters, fn, inspect) {
      if (void 0 === fn) {
        /**
         * @param {string} deps
         * @return {?}
         */
        fn = function(deps) {
          return resolve(new Error("Promise does not support operation: " + deps));
        };
      }
      if (void 0 === inspect) {
        /**
         * @return {?}
         */
        inspect = function() {
          return {
            state : "unknown"
          };
        };
      }
      /** @type {!Object} */
      var self = create(Promise.prototype);
      if (self.promiseDispatch = function(resolve, name, args) {
        var mod;
        try {
          mod = filters[name] ? filters[name].apply(self, args) : fn.call(self, name, args);
        } catch (module) {
          mod = resolve(module);
        }
        if (resolve) {
          resolve(mod);
        }
      }, self.inspect = inspect, inspect) {
        var result = inspect();
        if ("rejected" === result.state) {
          self.exception = result.reason;
        }
        /**
         * @return {?}
         */
        self.valueOf = function() {
          var inspected = inspect();
          return "pending" === inspected.state || "rejected" === inspected.state ? self : inspected.value;
        };
      }
      return self;
    }
    /**
     * @param {!Object} object
     * @param {!Function} value
     * @param {!Function} fn
     * @param {!Function} ctx
     * @return {?}
     */
    function when(object, value, fn, ctx) {
      return Q(object).then(value, fn, ctx);
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function nearer(value) {
      if (inspect(value)) {
        var jitCell = value.inspect();
        if ("fulfilled" === jitCell.state) {
          return jitCell.value;
        }
      }
      return value;
    }
    /**
     * @param {!Object} object
     * @return {?}
     */
    function inspect(object) {
      return object instanceof Promise;
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function isPromise(value) {
      return (result = value) === Object(result) && "function" == typeof value.then;
      var result;
    }
    /**
     * @return {undefined}
     */
    function resetUnhandledRejections() {
      /** @type {number} */
      array.length = 0;
      /** @type {number} */
      code.length = 0;
      if (!O) {
        /** @type {boolean} */
        O = true;
      }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    function resolve(type) {
      var e = Promise({
        when : function(callback) {
          return callback && function(name) {
            if (O) {
              var n = f(code, name);
              if (-1 !== n) {
                code.splice(n, 1);
                array.splice(n, 1);
              }
            }
          }(this), callback ? callback(type) : this;
        }
      }, function() {
        return this;
      }, function() {
        return {
          state : "rejected",
          reason : type
        };
      });
      return function(ast, value) {
        if (O) {
          code.push(ast);
          if (value && void 0 !== value.stack) {
            array.push(value.stack);
          } else {
            array.push("(no stack) " + value);
          }
        }
      }(e, type), e;
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function fulfill(value) {
      return Promise({
        when : function() {
          return value;
        },
        get : function(type) {
          return value[type];
        },
        set : function(type, key) {
          /** @type {!Object} */
          value[type] = key;
        },
        delete : function(model) {
          delete value[model];
        },
        post : function(s, args) {
          return null === s || void 0 === s ? value.apply(void 0, args) : value[s].apply(value, args);
        },
        apply : function(val, obj) {
          return value.apply(val, obj);
        },
        keys : function() {
          return object_keys(value);
        }
      }, void 0, function() {
        return {
          state : "fulfilled",
          value : value
        };
      });
    }
    /**
     * @param {!Array} value
     * @param {!Function} node
     * @param {!Function} item
     * @return {?}
     */
    function spread(value, node, item) {
      return Q(value).spread(node, item);
    }
    /**
     * @param {string} object
     * @param {!Array} args
     * @param {!Array} params
     * @return {?}
     */
    function dispatch(object, args, params) {
      return Q(object).dispatch(args, params);
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function all(obj) {
      return when(obj, function(promises) {
        /** @type {number} */
        var code = 0;
        var deferred = defer();
        return array_reduce(promises, function(i, obj, index) {
          var snapshot;
          if (inspect(obj) && "fulfilled" === (snapshot = obj.inspect()).state) {
            promises[index] = snapshot.value;
          } else {
            ++code;
            when(obj, function(value) {
              promises[index] = value;
              if (0 == --code) {
                deferred.resolve(promises);
              }
            }, deferred.reject, function(command_module_id) {
              deferred.notify({
                index : index,
                value : command_module_id
              });
            });
          }
        }, void 0), 0 === code && deferred.resolve(promises), deferred.promise;
      });
    }
    /**
     * @param {!Array} promises
     * @return {?}
     */
    function any(promises) {
      if (0 === promises.length) {
        return Q.resolve();
      }
      var o = Q.defer();
      /** @type {number} */
      var n = 0;
      return array_reduce(promises, function(i, canCreateDiscussions, index) {
        var val = promises[index];
        n++;
        when(val, function(error) {
          o.resolve(error);
        }, function() {
          if (0 == --n) {
            o.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."));
          }
        }, function(command_module_id) {
          o.notify({
            index : index,
            value : command_module_id
          });
        });
      }, void 0), o.promise;
    }
    /**
     * @param {!Object} promises
     * @return {?}
     */
    function allResolved(promises) {
      return when(promises, function(promises) {
        return promises = array_map(promises, Q), when(all(array_map(promises, function(services) {
          return when(services, noop, noop);
        })), function() {
          return promises;
        });
      });
    }
    /** @type {boolean} */
    var hasStacks = false;
    try {
      throw new Error;
    } catch (undoInfo) {
      /** @type {boolean} */
      hasStacks = !!undoInfo.stack;
    }
    var APG_MATCH;
    var len = next();
    /**
     * @return {undefined}
     */
    var noop = function() {
    };
    var nextTick = function() {
      /**
       * @return {undefined}
       */
      function flush() {
        for (; head.next;) {
          var task = (head = head.next).task;
          head.task = void 0;
          var domain = head.domain;
          if (domain) {
            head.domain = void 0;
            domain.enter();
          }
          try {
            task();
          } catch (t) {
            if (isNodeJS) {
              throw domain && domain.exit(), setTimeout(flush, 0), domain && domain.enter(), t;
            }
            setTimeout(function() {
              throw t;
            }, 0);
          }
          if (domain) {
            domain.exit();
          }
        }
        /** @type {boolean} */
        n = false;
      }
      var head = {
        task : void 0,
        next : null
      };
      var tail = head;
      /** @type {boolean} */
      var n = false;
      var requestTick = void 0;
      /** @type {boolean} */
      var isNodeJS = false;
      if (nextTick = function(fn) {
        tail = tail.next = {
          task : fn,
          domain : isNodeJS && process.domain,
          next : null
        };
        if (!n) {
          /** @type {boolean} */
          n = true;
          requestTick();
        }
      }, "object" == typeof process && "[object process]" === process.toString() && process.nextTick) {
        /** @type {boolean} */
        isNodeJS = true;
        /**
         * @return {undefined}
         */
        requestTick = function() {
          process.nextTick(flush);
        };
      } else {
        if ("function" == typeof setImmediate) {
          /** @type {!Function} */
          requestTick = "undefined" != typeof window ? setImmediate.bind(window, flush) : function() {
            setImmediate(flush);
          };
        } else {
          if ("undefined" != typeof MessageChannel) {
            /** @type {!MessageChannel} */
            var channel = new MessageChannel;
            /**
             * @return {undefined}
             */
            channel.port1.onmessage = function() {
              /** @type {function(): undefined} */
              requestTick = requestPortTick;
              /** @type {function(): undefined} */
              channel.port1.onmessage = flush;
              flush();
            };
            /**
             * @return {undefined}
             */
            var requestPortTick = function() {
              channel.port2.postMessage(0);
            };
            /**
             * @return {undefined}
             */
            requestTick = function() {
              setTimeout(flush, 0);
              requestPortTick();
            };
          } else {
            /**
             * @return {undefined}
             */
            requestTick = function() {
              setTimeout(flush, 0);
            };
          }
        }
      }
      return nextTick;
    }();
    var call = Function.call;
    var Edge;
    var array_slice = uncurryThis(Array.prototype.slice);
    var array_reduce = uncurryThis(Array.prototype.reduce || function(cb, res) {
      /** @type {number} */
      var idx = 0;
      var length = this.length;
      if (1 === arguments.length) {
        for (;;) {
          if (idx in this) {
            res = this[idx++];
            break;
          }
          if (++idx >= length) {
            throw new TypeError;
          }
        }
      }
      for (; idx < length; idx++) {
        if (idx in this) {
          res = cb(res, this[idx], idx);
        }
      }
      return res;
    });
    var f = uncurryThis(Array.prototype.indexOf || function(value) {
      /** @type {number} */
      var i = 0;
      for (; i < this.length; i++) {
        if (this[i] === value) {
          return i;
        }
      }
      return -1;
    });
    var array_map = uncurryThis(Array.prototype.map || function(item, className) {
      var value = this;
      /** @type {!Array} */
      var result = [];
      return array_reduce(value, function(canCreateDiscussions, i, y) {
        result.push(item.call(className, i, y, value));
      }, void 0), result;
    });
    /** @type {function((Object|null), (Object|null)=): !Object} */
    var create = Object.create || function(proto) {
      /**
       * @return {undefined}
       */
      function Bridge() {
      }
      return Bridge.prototype = proto, new Bridge;
    };
    var object_toString = uncurryThis(Object.prototype.hasOwnProperty);
    /** @type {function(!Object): !Array<string>} */
    var object_keys = Object.keys || function(obj) {
      /** @type {!Array} */
      var currentMaxTerms = [];
      var j;
      for (j in obj) {
        if (object_toString(obj, j)) {
          currentMaxTerms.push(j);
        }
      }
      return currentMaxTerms;
    };
    var object_hasOwnProperty = uncurryThis(Object.prototype.toString);
    Edge = "undefined" != typeof ReturnValue ? ReturnValue : function(value) {
      /** @type {!Object} */
      this.value = value;
    };
    /** @type {string} */
    var g = "From previous event:";
    /** @type {function(!Object): ?} */
    Q.resolve = Q;
    Q.nextTick = nextTick;
    /** @type {boolean} */
    Q.longStackSupport = false;
    if ("object" == typeof process && process && process.env && process.env.Q_DEBUG) {
      /** @type {boolean} */
      Q.longStackSupport = true;
    }
    /** @type {function(): ?} */
    Q.defer = defer;
    /**
     * @return {?}
     */
    defer.prototype.makeNodeResolver = function() {
      var self = this;
      return function(e, n) {
        if (e) {
          self.reject(e);
        } else {
          if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
          } else {
            self.resolve(n);
          }
        }
      };
    };
    /** @type {function(!Function): ?} */
    Q.Promise = promise;
    /** @type {function(!Function): ?} */
    Q.promise = promise;
    /** @type {function(!NodeList): ?} */
    promise.race = race;
    /** @type {function(!Object): ?} */
    promise.all = all;
    /** @type {function(?): ?} */
    promise.reject = resolve;
    /** @type {function(!Object): ?} */
    promise.resolve = Q;
    /**
     * @param {?} object
     * @return {?}
     */
    Q.passByCopy = function(object) {
      return object;
    };
    /**
     * @return {?}
     */
    Promise.prototype.passByCopy = function() {
      return this;
    };
    /**
     * @param {string} x
     * @param {string} key
     * @return {?}
     */
    Q.join = function(x, key) {
      return Q(x).join(key);
    };
    /**
     * @param {string} opts
     * @return {?}
     */
    Promise.prototype.join = function(opts) {
      return Q([this, opts]).spread(function(result, e) {
        if (result === e) {
          return result;
        }
        throw new Error("Can't join: not the same: " + result + " " + e);
      });
    };
    /** @type {function(!NodeList): ?} */
    Q.race = race;
    /**
     * @return {?}
     */
    Promise.prototype.race = function() {
      return this.then(Q.race);
    };
    /** @type {function(!Object, ?, ?): ?} */
    Q.makePromise = Promise;
    /**
     * @return {?}
     */
    Promise.prototype.toString = function() {
      return "[object Promise]";
    };
    /**
     * @param {!Function} c
     * @param {!Function} type
     * @param {string} callback
     * @return {?}
     */
    Promise.prototype.then = function(c, type, callback) {
      var self = this;
      var deferred = defer();
      /** @type {boolean} */
      var r = false;
      return Q.nextTick(function() {
        self.promiseDispatch(function(context) {
          if (!r) {
            /** @type {boolean} */
            r = true;
            deferred.resolve(function(i) {
              try {
                return "function" == typeof c ? c(i) : i;
              } catch (t) {
                return resolve(t);
              }
            }(context));
          }
        }, "when", [function(moduleName) {
          if (!r) {
            /** @type {boolean} */
            r = true;
            deferred.resolve(function(value) {
              if ("function" == typeof type) {
                log(value, self);
                try {
                  return type(value);
                } catch (t) {
                  return resolve(t);
                }
              }
              return resolve(value);
            }(moduleName));
          }
        }]);
      }), self.promiseDispatch(void 0, "when", [void 0, function(nr) {
        var e;
        /** @type {boolean} */
        var i = false;
        try {
          e = function(i) {
            return "function" == typeof callback ? callback(i) : i;
          }(nr);
        } catch (e) {
          if (i = true, !Q.onerror) {
            throw e;
          }
          Q.onerror(e);
        }
        if (!i) {
          deferred.notify(e);
        }
      }]), deferred.promise;
    };
    /**
     * @param {!Object} value
     * @param {!Object} event
     * @return {?}
     */
    Q.tap = function(value, event) {
      return Q(value).tap(event);
    };
    /**
     * @param {!Object} callback
     * @return {?}
     */
    Promise.prototype.tap = function(callback) {
      return callback = Q(callback), this.then(function(value) {
        return callback.fcall(value).thenResolve(value);
      });
    };
    /** @type {function(!Object, !Function, !Function, !Function): ?} */
    Q.when = when;
    /**
     * @param {!Object} value
     * @return {?}
     */
    Promise.prototype.thenResolve = function(value) {
      return this.then(function() {
        return value;
      });
    };
    /**
     * @param {!Object} promise
     * @param {!Object} value
     * @return {?}
     */
    Q.thenResolve = function(promise, value) {
      return Q(promise).thenResolve(value);
    };
    /**
     * @param {!Object} reason
     * @return {?}
     */
    Promise.prototype.thenReject = function(reason) {
      return this.then(function() {
        throw reason;
      });
    };
    /**
     * @param {!Object} promise
     * @param {!Object} reason
     * @return {?}
     */
    Q.thenReject = function(promise, reason) {
      return Q(promise).thenReject(reason);
    };
    /** @type {function(!Object): ?} */
    Q.nearer = nearer;
    /** @type {function(!Object): ?} */
    Q.isPromise = inspect;
    /** @type {function(!Object): ?} */
    Q.isPromiseAlike = isPromise;
    /**
     * @param {!Object} object
     * @return {?}
     */
    Q.isPending = function(object) {
      return inspect(object) && "pending" === object.inspect().state;
    };
    /**
     * @return {?}
     */
    Promise.prototype.isPending = function() {
      return "pending" === this.inspect().state;
    };
    /**
     * @param {!Object} promise
     * @return {?}
     */
    Q.isFulfilled = function(promise) {
      return !inspect(promise) || "fulfilled" === promise.inspect().state;
    };
    /**
     * @return {?}
     */
    Promise.prototype.isFulfilled = function() {
      return "fulfilled" === this.inspect().state;
    };
    /**
     * @param {!Object} promise
     * @return {?}
     */
    Q.isRejected = function(promise) {
      return inspect(promise) && "rejected" === promise.inspect().state;
    };
    /**
     * @return {?}
     */
    Promise.prototype.isRejected = function() {
      return "rejected" === this.inspect().state;
    };
    var source;
    /** @type {!Array} */
    var array = [];
    /** @type {!Array} */
    var code = [];
    /** @type {boolean} */
    var O = true;
    /** @type {function(): undefined} */
    Q.resetUnhandledRejections = resetUnhandledRejections;
    /**
     * @return {?}
     */
    Q.getUnhandledReasons = function() {
      return array.slice();
    };
    /**
     * @return {undefined}
     */
    Q.stopUnhandledRejectionTracking = function() {
      resetUnhandledRejections();
      /** @type {boolean} */
      O = false;
    };
    resetUnhandledRejections();
    /** @type {function(?): ?} */
    Q.reject = resolve;
    /** @type {function(!Object): ?} */
    Q.fulfill = fulfill;
    /**
     * @param {undefined} object
     * @return {?}
     */
    Q.master = function(object) {
      return Promise({
        isDef : function() {
        }
      }, function(title, args) {
        return dispatch(object, title, args);
      }, function() {
        return Q(object).inspect();
      });
    };
    /** @type {function(!Array, !Function, !Function): ?} */
    Q.spread = spread;
    /**
     * @param {!Function} ctx
     * @param {!Function} fn
     * @return {?}
     */
    Promise.prototype.spread = function(ctx, fn) {
      return this.all().then(function(scale) {
        return ctx.apply(void 0, scale);
      }, fn);
    };
    /**
     * @param {!Function} fn
     * @return {?}
     */
    Q.async = function(fn) {
      return function() {
        /**
         * @param {?} verb
         * @param {?} arg
         * @return {?}
         */
        function continuer(verb, arg) {
          var options;
          if ("undefined" == typeof StopIteration) {
            try {
              options = generator[verb](arg);
            } catch (t) {
              return resolve(t);
            }
            return options.done ? Q(options.value) : when(options.value, callback, errback);
          }
          try {
            options = generator[verb](arg);
          } catch (result) {
            return function(object) {
              return "[object StopIteration]" === object_hasOwnProperty(object) || object instanceof Edge;
            }(result) ? Q(result.value) : resolve(result);
          }
          return when(options, callback, errback);
        }
        var generator = fn.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
      };
    };
    /**
     * @param {!Function} callback
     * @return {undefined}
     */
    Q.spawn = function(callback) {
      Q.done(Q.async(callback)());
    };
    /**
     * @param {?} node
     * @return {?}
     */
    Q.return = function(node) {
      throw new Edge(node);
    };
    /**
     * @param {!Function} f
     * @return {?}
     */
    Q.promised = function(f) {
      return function() {
        return spread([this, all(arguments)], function(e, n) {
          return f.apply(e, n);
        });
      };
    };
    /** @type {function(string, !Array, !Array): ?} */
    Q.dispatch = dispatch;
    /**
     * @param {string} op
     * @param {!Array} args
     * @return {?}
     */
    Promise.prototype.dispatch = function(op, args) {
      var self = this;
      var deferred = defer();
      return Q.nextTick(function() {
        self.promiseDispatch(deferred.resolve, op, args);
      }), deferred.promise;
    };
    /**
     * @param {!Object} value
     * @param {string} name
     * @return {?}
     */
    Q.get = function(value, name) {
      return Q(value).dispatch("get", [name]);
    };
    /**
     * @param {!Object} key
     * @return {?}
     */
    Promise.prototype.get = function(key) {
      return this.dispatch("get", [key]);
    };
    /**
     * @param {!Object} value
     * @param {!Object} key
     * @param {?} str
     * @return {?}
     */
    Q.set = function(value, key, str) {
      return Q(value).dispatch("set", [key, str]);
    };
    /**
     * @param {!Object} key
     * @param {!Object} value
     * @return {?}
     */
    Promise.prototype.set = function(key, value) {
      return this.dispatch("set", [key, value]);
    };
    /** @type {function(!Object, ?): ?} */
    Q.del = Q.delete = function(callback, name) {
      return Q(callback).dispatch("delete", [name]);
    };
    /** @type {function(?): ?} */
    Promise.prototype.del = Promise.prototype.delete = function(name) {
      return this.dispatch("delete", [name]);
    };
    /** @type {function(!Object, !Object, ?): ?} */
    Q.mapply = Q.post = function(callback, state, value) {
      return Q(callback).dispatch("post", [state, value]);
    };
    /** @type {function(string, !Object): ?} */
    Promise.prototype.mapply = Promise.prototype.post = function(name, value) {
      return this.dispatch("post", [name, value]);
    };
    /** @type {function(!Object, ?): ?} */
    Q.send = Q.mcall = Q.invoke = function(callback, name) {
      return Q(callback).dispatch("post", [name, array_slice(arguments, 2)]);
    };
    /** @type {function(?): ?} */
    Promise.prototype.send = Promise.prototype.mcall = Promise.prototype.invoke = function(name) {
      return this.dispatch("post", [name, array_slice(arguments, 1)]);
    };
    /**
     * @param {!Object} object
     * @param {?} value
     * @return {?}
     */
    Q.fapply = function(object, value) {
      return Q(object).dispatch("apply", [void 0, value]);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    Promise.prototype.fapply = function(args) {
      return this.dispatch("apply", [void 0, args]);
    };
    /** @type {function(!Object): ?} */
    Q.try = Q.fcall = function(object) {
      return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
    };
    /**
     * @return {?}
     */
    Promise.prototype.fcall = function() {
      return this.dispatch("apply", [void 0, array_slice(arguments)]);
    };
    /**
     * @param {!Object} value
     * @return {?}
     */
    Q.fbind = function(value) {
      var promise = Q(value);
      var args = array_slice(arguments, 1);
      return function() {
        return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
      };
    };
    /**
     * @return {?}
     */
    Promise.prototype.fbind = function() {
      var promise = this;
      var args = array_slice(arguments);
      return function() {
        return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
      };
    };
    /**
     * @param {!Object} obj
     * @return {?}
     */
    Q.keys = function(obj) {
      return Q(obj).dispatch("keys", []);
    };
    /**
     * @return {?}
     */
    Promise.prototype.keys = function() {
      return this.dispatch("keys", []);
    };
    /** @type {function(!Object): ?} */
    Q.all = all;
    /**
     * @return {?}
     */
    Promise.prototype.all = function() {
      return all(this);
    };
    /** @type {function(!Array): ?} */
    Q.any = any;
    /**
     * @return {?}
     */
    Promise.prototype.any = function() {
      return any(this);
    };
    /** @type {function(): ?} */
    Q.allResolved = (source = allResolved, function() {
      return "undefined" != typeof console && console.warn, source.apply(source, arguments);
    });
    /**
     * @return {?}
     */
    Promise.prototype.allResolved = function() {
      return allResolved(this);
    };
    /**
     * @param {!Object} promises
     * @return {?}
     */
    Q.allSettled = function(promises) {
      return Q(promises).allSettled();
    };
    /**
     * @return {?}
     */
    Promise.prototype.allSettled = function() {
      return this.then(function(promises) {
        return all(array_map(promises, function(promise) {
          /**
           * @return {?}
           */
          function req() {
            return promise.inspect();
          }
          return (promise = Q(promise)).then(req, req);
        }));
      });
    };
    /** @type {function(!Object, !Function): ?} */
    Q.fail = Q.catch = function(module, error) {
      return Q(module).then(void 0, error);
    };
    /** @type {function(!Function): ?} */
    Promise.prototype.fail = Promise.prototype.catch = function(handler) {
      return this.then(void 0, handler);
    };
    /**
     * @param {!Object} promise
     * @param {string} fn
     * @return {?}
     */
    Q.progress = function(promise, fn) {
      return Q(promise).then(void 0, void 0, fn);
    };
    /**
     * @param {string} onProgress
     * @return {?}
     */
    Promise.prototype.progress = function(onProgress) {
      return this.then(void 0, void 0, onProgress);
    };
    /** @type {function(!Object, !Object): ?} */
    Q.fin = Q.finally = function(promise, callback) {
      return Q(promise).finally(callback);
    };
    /** @type {function(!Object): ?} */
    Promise.prototype.fin = Promise.prototype.finally = function(callback) {
      return callback = Q(callback), this.then(function(canCreateDiscussions) {
        return callback.fcall().then(function() {
          return canCreateDiscussions;
        });
      }, function(canCreateDiscussions) {
        return callback.fcall().then(function() {
          throw canCreateDiscussions;
        });
      });
    };
    /**
     * @param {!Object} name
     * @param {!Object} e
     * @param {?} value
     * @param {boolean} source
     * @return {?}
     */
    Q.done = function(name, e, value, source) {
      return Q(name).done(e, value, source);
    };
    /**
     * @param {!Object} value
     * @param {!Object} options
     * @param {string} progress
     * @return {undefined}
     */
    Promise.prototype.done = function(value, options, progress) {
      /**
       * @param {?} error
       * @return {undefined}
       */
      var load = function(error) {
        Q.nextTick(function() {
          if (log(error, image), !Q.onerror) {
            throw error;
          }
          Q.onerror(error);
        });
      };
      var image = value || options || progress ? this.then(value, options, progress) : this;
      if ("object" == typeof process && process && process.domain) {
        load = process.domain.bind(load);
      }
      image.then(void 0, load);
    };
    /**
     * @param {!Object} value
     * @param {string} ms
     * @param {undefined} error
     * @return {?}
     */
    Q.timeout = function(value, ms, error) {
      return Q(value).timeout(ms, error);
    };
    /**
     * @param {string} ms
     * @param {!Error} error
     * @return {?}
     */
    Promise.prototype.timeout = function(ms, error) {
      var deferred = defer();
      /** @type {number} */
      var timer = setTimeout(function() {
        if (!(error && "string" != typeof error)) {
          /** @type {string} */
          (error = new Error(error || "Timed out after " + ms + " ms")).code = "ETIMEDOUT";
        }
        deferred.reject(error);
      }, ms);
      return this.then(function(t) {
        clearTimeout(timer);
        deferred.resolve(t);
      }, function(t) {
        clearTimeout(timer);
        deferred.reject(t);
      }, deferred.notify), deferred.promise;
    };
    /**
     * @param {!Object} i
     * @param {?} n
     * @return {?}
     */
    Q.delay = function(i, n) {
      return void 0 === n && (n = i, i = void 0), Q(i).delay(n);
    };
    /**
     * @param {?} wait
     * @return {?}
     */
    Promise.prototype.delay = function(wait) {
      return this.then(function(e) {
        var deferred = defer();
        return setTimeout(function() {
          deferred.resolve(e);
        }, wait), deferred.promise;
      });
    };
    /**
     * @param {!Object} callback
     * @param {!Object} args
     * @return {?}
     */
    Q.nfapply = function(callback, args) {
      return Q(callback).nfapply(args);
    };
    /**
     * @param {!Object} args
     * @return {?}
     */
    Promise.prototype.nfapply = function(args) {
      var deferred = defer();
      var nodeArgs = array_slice(args);
      return nodeArgs.push(deferred.makeNodeResolver()), this.fapply(nodeArgs).fail(deferred.reject), deferred.promise;
    };
    /**
     * @param {!Object} callback
     * @return {?}
     */
    Q.nfcall = function(callback) {
      var args = array_slice(arguments, 1);
      return Q(callback).nfapply(args);
    };
    /**
     * @return {?}
     */
    Promise.prototype.nfcall = function() {
      var nodeArgs = array_slice(arguments);
      var deferred = defer();
      return nodeArgs.push(deferred.makeNodeResolver()), this.fapply(nodeArgs).fail(deferred.reject), deferred.promise;
    };
    /** @type {function(!Object): ?} */
    Q.nfbind = Q.denodeify = function(callback) {
      var args = array_slice(arguments, 1);
      return function() {
        var nodeArgs = args.concat(array_slice(arguments));
        var deferred = defer();
        return nodeArgs.push(deferred.makeNodeResolver()), Q(callback).fapply(nodeArgs).fail(deferred.reject), deferred.promise;
      };
    };
    /** @type {function(): ?} */
    Promise.prototype.nfbind = Promise.prototype.denodeify = function() {
      var args = array_slice(arguments);
      return args.unshift(this), Q.denodeify.apply(void 0, args);
    };
    /**
     * @param {!Function} callback
     * @param {!Object} obj
     * @return {?}
     */
    Q.nbind = function(callback, obj) {
      var args = array_slice(arguments, 2);
      return function() {
        var nodeArgs = args.concat(array_slice(arguments));
        var deferred = defer();
        return nodeArgs.push(deferred.makeNodeResolver()), Q(function() {
          return callback.apply(obj, arguments);
        }).fapply(nodeArgs).fail(deferred.reject), deferred.promise;
      };
    };
    /**
     * @return {?}
     */
    Promise.prototype.nbind = function() {
      var args = array_slice(arguments, 0);
      return args.unshift(this), Q.nbind.apply(void 0, args);
    };
    /** @type {function(!Object, !Object, undefined): ?} */
    Q.nmapply = Q.npost = function(object, name, args) {
      return Q(object).npost(name, args);
    };
    /** @type {function(!Object, number): ?} */
    Promise.prototype.nmapply = Promise.prototype.npost = function(name, args) {
      var nodeArgs = array_slice(args || []);
      var deferred = defer();
      return nodeArgs.push(deferred.makeNodeResolver()), this.dispatch("post", [name, nodeArgs]).fail(deferred.reject), deferred.promise;
    };
    /** @type {function(!Object, ?): ?} */
    Q.nsend = Q.nmcall = Q.ninvoke = function(object, name) {
      var nodeArgs = array_slice(arguments, 2);
      var deferred = defer();
      return nodeArgs.push(deferred.makeNodeResolver()), Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject), deferred.promise;
    };
    /** @type {function(?): ?} */
    Promise.prototype.nsend = Promise.prototype.nmcall = Promise.prototype.ninvoke = function(name) {
      var nodeArgs = array_slice(arguments, 1);
      var deferred = defer();
      return nodeArgs.push(deferred.makeNodeResolver()), this.dispatch("post", [name, nodeArgs]).fail(deferred.reject), deferred.promise;
    };
    /**
     * @param {!Object} object
     * @param {!Object} callback
     * @return {?}
     */
    Q.nodeify = function(object, callback) {
      return Q(object).nodeify(callback);
    };
    /**
     * @param {!Object} callback
     * @return {?}
     */
    Promise.prototype.nodeify = function(callback) {
      if (!callback) {
        return this;
      }
      this.then(function(exisObj) {
        Q.nextTick(function() {
          callback(null, exisObj);
        });
      }, function(identifierPositions) {
        Q.nextTick(function() {
          callback(identifierPositions);
        });
      });
    };
    var header = next();
    return Q;
  });
}, function(module, canCreateDiscussions) {
  module.exports = require("fs");
}, function(module, canCreateDiscussions) {
  module.exports = require("path");
}, function(canCreateDiscussions, props, require) {
  /**
   * @return {?}
   */
  function getTarget() {
    return .num_const;
  }
  /**
   * @return {?}
   */
  function handleRedirectedObject() {
    return data;
  }
  Object.defineProperty(props, "__esModule", {
    value : true
  });
  var fs = require(2);
  var h = require(3);
  var settings = require(10);
  /** @type {null} */
  var adapterFetchCalledWith = null;
  /** @type {null} */
  var data = null;
  /** @type {null} */
  var .num_const = null;
  /**
   * @param {!Function} value
   * @return {undefined}
   */
  props.initXMLHttpRequest = function(value) {
    /** @type {!Function} */
    this.XMLHttpRequestClz = value;
  };
  /**
   * @return {?}
   */
  props.getXMLHttpReqeust = function() {
    return this.XMLHttpRequestClz;
  };
  /**
   * @param {!Object} options
   * @param {!Object} callback
   * @return {undefined}
   */
  props.initCore = function(options, callback) {
    /** @type {!Object} */
    data = callback;
    .num_const = new (adapterFetchCalledWith = options);
  };
  /** @type {function(): ?} */
  props.getCSInterface = getTarget;
  /**
   * @return {?}
   */
  props.getCSInterfaceClass = function() {
    return adapterFetchCalledWith;
  };
  /** @type {function(): ?} */
  props.getCSEventClass = handleRedirectedObject;
  /**
   * @param {string} name
   * @return {undefined}
   */
  props.persistent = function(name) {
    var event;
    (event = new (handleRedirectedObject())(name ? "com.adobe.PhotoshopPersistent" : "com.adobe.PhotoshopUnPersistent", "APPLICATION")).extensionId = getTarget().getExtensionID();
    getTarget().dispatchEvent(event);
  };
  /**
   * @return {?}
   */
  props.pluginVersion = function() {
    var pjson = function() {
      if (!ongoingMessage) {
        var a = settings.pluginDir();
        a = h.join(a, "package.json");
        var e = fs.readFileSync(a, "utf-8");
        /** @type {*} */
        var message = JSON.parse(e);
        /** @type {*} */
        ongoingMessage = message;
      }
      return ongoingMessage;
    }();
    return pjson.version ? pjson.version : "0.0.0";
  };
  /** @type {null} */
  var ongoingMessage = null;
  /**
   * @return {undefined}
   */
  props.signRefresh = function() {
    this.persistent(false);
  };
}, function(canCreateDiscussions, BeautifulProperties, n) {
  Object.defineProperty(BeautifulProperties, "__esModule", {
    value : true
  });
  (function(MENU_MODE) {
    /** @type {string} */
    MENU_MODE[MENU_MODE.HUABAN = 0] = "HUABAN";
    /** @type {string} */
    MENU_MODE[MENU_MODE.LOCAL = 1] = "LOCAL";
    /** @type {string} */
    MENU_MODE[MENU_MODE.UNSPLASH = 2] = "UNSPLASH";
  })(BeautifulProperties.SourceType || (BeautifulProperties.SourceType = {}));
  /** @type {!Array} */
  BeautifulProperties.unsplashList = [{
    text : "\u7231 (Love)",
    value : "Love"
  }, {
    text : "\u5df4\u9ece (Paris)",
    value : "Paris"
  }, {
    text : "\u529e\u516c\u5ba4 (Office)",
    value : "Office"
  }, {
    text : "\u57ce\u5e02 (City)",
    value : "City"
  }, {
    text : "\u51b2\u6d6a (Surf)",
    value : "Surf"
  }, {
    text : "\u5c9b\u5c7f (Island)",
    value : "Island"
  }, {
    text : "\u5730\u7403 (Earth)",
    value : "Earth"
  }, {
    text : "\u51ac\u5929 (Winter)",
    value : "Winter"
  }, {
    text : "\u52a8\u7269 (Animals)",
    value : "Animals"
  }, {
    text : "\u98ce\u666f (Landscape)",
    value : "Landscape"
  }, {
    text : "\u5de5\u4f5c (Work)",
    value : "Work"
  }, {
    text : "\u72d7 (Dogs)",
    value : "Dogs"
  }, {
    text : "\u5b69\u5b50 (Kids)",
    value : "Kids"
  }, {
    text : "\u6d77\u6ee9 (Beach)",
    value : "Beach"
  }, {
    text : "\u82b1 \uff08Flowers\uff09",
    value : "Flowers"
  }, {
    text : "\u6000\u65e7 (Retro)",
    value : "Retro"
  }, {
    text : "\u5a5a\u793c (Wedding)",
    value : "Wedding"
  }, {
    text : "\u5bb6 (Home)",
    value : "Home"
  }, {
    text : "\u5bb6\u5ead (Family)",
    value : "Family"
  }, {
    text : "\u5047\u671f (Vacation)",
    value : "Vacation"
  }, {
    text : "\u8857\u9053 (Street)",
    value : "Street"
  }, {
    text : "\u666f\u8272 (Scenery)",
    value : "Scenery"
  }, {
    text : "\u65e7\u91d1\u5c71 (San Francisco)",
    value : "San Francisco"
  }, {
    text : "\u805a\u4f1a (Party)",
    value : "Party"
  }, {
    text : "\u5496\u5561 (Coffee)",
    value : "Coffee"
  }, {
    text : "\u5496\u5561\u9986 (Cafe)",
    value : "Cafe"
  }, {
    text : "\u79d1\u6280 (Technology)",
    value : "Technology"
  }, {
    text : "\u8def (Road)",
    value : "Road"
  }, {
    text : "\u65c5\u884c (Travel)",
    value : "Travel"
  }, {
    text : "\u4f26\u6566 (London)",
    value : "London"
  }, {
    text : "\u732b \uff08Cats)",
    value : "Cats"
  }, {
    text : "\u7ebd\u7ea6 (New York)",
    value : "New York"
  }, {
    text : "\u4eba (People)",
    value : "People"
  }, {
    text : "\u65e5\u51fa (Sunrise)",
    value : "Sunrise"
  }, {
    text : "\u65e5\u843d (Sunset)",
    value : "Sunset"
  }, {
    text : "\u6c99\u6f20 (Desert)",
    value : "Desert"
  }, {
    text : "\u5c71\u8109 (Mountains)",
    value : "Mountains"
  }, {
    text : "\u65f6\u5c1a (Fashion)",
    value : "Fashion"
  }, {
    text : "\u98df\u7269 (Food)",
    value : "Food"
  }, {
    text : "\u6c34 (Water)",
    value : "Water"
  }, {
    text : "\u5929\u7a7a (Sky)",
    value : "Sky"
  }, {
    text : "\u751c\u70b9 (Dessert)",
    value : "Dessert"
  }, {
    text : "\u5b09\u76ae\u58eb (Hipster)",
    value : "Hipster"
  }, {
    text : "\u590f\u5929 (Summer)",
    value : "Summer"
  }, {
    text : "\u8096\u50cf (Portrait)",
    value : "Portrait"
  }, {
    text : "\u591c\u665a (Night)",
    value : "Night"
  }, {
    text : "\u996e\u6599 (Drink)",
    value : "Drink"
  }, {
    text : "\u5b87\u5b99 (Space)",
    value : "Space"
  }, {
    text : "\u96e8 (Rain)",
    value : "Rain"
  }, {
    text : "\u4e2d\u56fd (China)",
    value : "China"
  }, {
    text : "\u81ea\u7136 (Nature)",
    value : "Nature"
  }];
}, function(module, canCreateDiscussions) {
  module.exports = require("os");
}, function(module, canCreateDiscussions) {
  module.exports = require("child_process");
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var $ = require(0);
  var Theme = require(12);
  var ExpParser = require(15);
  var newOrg = function() {
    /**
     * @param {!Object} type
     * @param {!Object} el
     * @param {?} text
     * @param {?} markup
     * @param {string} data
     * @param {string} tabs
     * @return {undefined}
     */
    function render(type, el, text, markup, data, tabs) {
      var that = this;
      if (this._label = "", this.clicks = [], this.document = type, this.container = el, this.lightIcon = text, this.darkIcon = markup, this.button = $("<div class='icon-button'></div>").appendTo($(el)), this.img = $("<img>").appendTo($(this.button)), data && ExpParser.registerTip(type, this.button, data), tabs && tabs.length > 0) {
        /** @type {number} */
        var i = 0;
        for (; i < tabs.length; i++) {
          this.button.addClass(tabs[i]);
        }
      }
      this.button.on("click", function(canCreateDiscussions) {
        that.click_handler();
      });
      Theme.onChanged(function(wantedType) {
        that.updateIcon(wantedType);
      });
      this.updateIcon(Theme.getTheme());
    }
    return render.prototype.getBuild = function() {
      return this.button;
    }, Object.defineProperty(render.prototype, "label", {
      get : function() {
        return this._label;
      },
      set : function(value) {
        /** @type {string} */
        this._label = value;
        if (!this._span) {
          this._span = $("<span></span>").appendTo(this.button);
          this.button.addClass("text");
        }
        this._span.text(this._label);
      },
      enumerable : true,
      configurable : true
    }), render.prototype.updateIcon = function(wantedType) {
      if (wantedType == Theme.LIGHT) {
        this.img.attr("src", this.lightIcon);
      } else {
        Theme.LIGHT;
        this.img.attr("src", this.darkIcon);
      }
    }, render.prototype.click_handler = function() {
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < this.clicks.length; layer_i++) {
        this.clicks[layer_i](this);
      }
    }, render.prototype.onClick = function(click) {
      this.clicks.push(click);
    }, render.prototype.removeClick = function(e) {
      var existingProxyIndex = this.clicks.indexOf(e);
      if (-1 != existingProxyIndex) {
        this.clicks.splice(existingProxyIndex, 1);
      }
    }, render;
  }();
  e.IconButton = newOrg;
}, function(canCreateDiscussions, that, require) {
  Object.defineProperty(that, "__esModule", {
    value : true
  });
  var fs = require(2);
  var p = require(3);
  var options = require(10);
  var fsx = require(19);
  var res = {};
  /**
   * @param {number} name
   * @return {?}
   */
  that.createStorage = function(name) {
    if (void 0 === name && (name = "data.dat"), name in res) {
      return res[name];
    }
    var s = new Storage(name);
    return res[name] = s, s;
  };
  var Storage = function() {
    /**
     * @param {number} data
     * @return {undefined}
     */
    function Widget(data) {
      if (void 0 === data) {
        /** @type {string} */
        data = "data.dat";
      }
      /** @type {boolean} */
      this.inited = false;
      /** @type {string} */
      this.fulldir = "";
      /** @type {null} */
      this.cacheObject = null;
      /** @type {boolean} */
      this.isSaving = false;
      this.init(data);
    }
    return Widget.prototype.init = function(s) {
      if (void 0 === s && (s = "data.dat"), !this.inited) {
        if (this.fulldir = p.join(options.storageDir(), s), fs.existsSync(this.fulldir)) {
          /** @type {string} */
          var jsonInput = "";
          try {
            jsonInput = fs.readFileSync(this.fulldir, "utf8");
          } catch (t) {
          }
          if (jsonInput) {
            try {
              /** @type {*} */
              this.cacheObject = JSON.parse(jsonInput);
            } catch (t) {
            }
          }
        } else {
          var cache = p.dirname(this.fulldir);
          fsx.mkdirsSync(cache);
        }
        if (!this.cacheObject) {
          this.cacheObject = {};
        }
        /** @type {boolean} */
        this.inited = true;
      }
    }, Widget.prototype.has = function(name) {
      return name in this.cacheObject;
    }, Widget.prototype.get = function(type) {
      return type in this.cacheObject ? this.cacheObject[type] : null;
    }, Widget.prototype.set = function(type, value) {
      /** @type {!Object} */
      this.cacheObject[type] = value;
      this.save();
    }, Widget.prototype.save = function() {
      var options = this;
      if (!this.isSaving) {
        /** @type {boolean} */
        this.isSaving = true;
        setTimeout(function() {
          options.saveHandler();
        }, 100);
      }
    }, Widget.prototype.saveHandler = function() {
      /** @type {boolean} */
      this.isSaving = false;
      /** @type {string} */
      var envContent = JSON.stringify(this.cacheObject);
      fs.writeFileSync(this.fulldir, envContent);
    }, Widget.prototype.saveDirect = function() {
      this.saveHandler();
    }, Widget;
  }();
}, function(canCreateDiscussions, options, encodeURIComponent) {
  /**
   * @return {?}
   */
  function main() {
    var s = process.env["win32" == process.platform ? "USERPROFILE" : "HOME"];
    return (s = s.replace(/\\/g, "/")).length > 0 && "/" != s.charAt(s.length - 1) && (s = s + "/"), s;
  }
  /**
   * @return {?}
   */
  function match() {
    /** @type {string} */
    var r = window.location.pathname;
    return "/" == r.charAt(0) && "win32" == result.platform() && (r = r.slice(1)), r = decodeURIComponent(r), (r = (r = t.join(r, "../")).replace(/\\/g, "/")).length > 0 && "/" != r.charAt(r.length - 1) && (r = r + "/"), r;
  }
  Object.defineProperty(options, "__esModule", {
    value : true
  });
  var first_trend = encodeURIComponent(4);
  var t = encodeURIComponent(3);
  var result = encodeURIComponent(6);
  /** @type {function(): ?} */
  options.homeDir = main;
  /**
   * @return {?}
   */
  options.storageDir = function() {
    /** @type {string} */
    var s = "";
    return "darwin" == result.platform() ? s = t.join(main(), "./Library/Application Support/" + first_trend.getCSInterface().getExtensionID() + "/") : "win32" == result.platform() && (s = t.join(process.env.APPDATA, "./" + first_trend.getCSInterface().getExtensionID() + "/")), (s = s.replace(/\\/g, "/")).length > 0 && "/" != s.charAt(s.length - 1) && (s = s + "/"), s;
  };
  /** @type {function(): ?} */
  options.pluginDir = match;
  /**
   * @return {?}
   */
  options.cepDir = function() {
    var s;
    var m = match();
    return s = m = t.join(m, "../"), "/" != (s = (s = t.normalize(s)).replace(/\\/g, "/")).charAt(s.length - 1) && (s = s + "/"), s;
  };
  /**
   * @param {string} test
   * @return {?}
   */
  options.format = function(test) {
    return "darwin" == result.platform() ? "~" == test.charAt(0) && (test = main() + test.slice(1)) : "win32" == result.platform() && ("~" == test.charAt(0) ? test = t.join(process.env.USERPROFILE, "." + test.slice(1)) : "/" == test.charAt(0) && (test = test.charAt(1) + ":/" + test.slice(3))), test.replace(/\\/g, "/");
  };
}, function(canCreateDiscussions, renderer, require) {
  Object.defineProperty(renderer, "__esModule", {
    value : true
  });
  var identity;
  var Breakpoints = require(37);
  var Pages = require(61);
  var helper = require(63);
  var router = require(17);
  /** @type {null} */
  var container = null;
  /**
   * @param {!Object} id
   * @return {undefined}
   */
  renderer.init = function(id) {
    if (!container) {
      container = new Dialog(id);
    }
  };
  /**
   * @return {?}
   */
  renderer.getContainer = function() {
    return container;
  };
  (function(exports) {
    /** @type {string} */
    exports[exports.login = 0] = "login";
    /** @type {string} */
    exports[exports.main = 1] = "main";
  })(identity = renderer.PageType || (renderer.PageType = {}));
  var Dialog = function() {
    /**
     * @param {!Object} doc
     * @return {undefined}
     */
    function load(doc) {
      /** @type {!Object} */
      this.document = doc;
      this._mainPage = new Breakpoints.MainPage(this.document);
      this._loginPage = new Pages.LoginPage(this.document);
      this._footer = new helper.Footer(this.document);
    }
    return load.prototype.display = function(name) {
      this._mainPage.hide();
      this._loginPage.hide();
      if (name == identity.main) {
        router.pageView("/", "Main", "Main");
        this._mainPage.display();
        this._footer.show();
      } else {
        if (name == identity.login) {
          router.pageView("/", "Login", "Login");
          this._loginPage.display();
          this._footer.hide();
        }
      }
    }, load.prototype.getLoginPage = function() {
      return this._loginPage;
    }, load.prototype.getFooter = function() {
      return this._footer;
    }, load;
  }();
}, function(canCreateDiscussions, me, floor) {
  Object.defineProperty(me, "__esModule", {
    value : true
  });
  var startYNew = floor(4);
  /** @type {string} */
  me.THEME_F0 = "theme_f0";
  /** @type {string} */
  me.THEME_D6 = "theme_d6";
  /** @type {string} */
  me.THEME_B8 = "theme_b8";
  /** @type {string} */
  me.THEME_53 = "theme_53";
  /** @type {string} */
  me.THEME_34 = "theme_34";
  /** @type {string} */
  me.THEME_32 = "theme_32";
  /** @type {string} */
  me.DARK = "dark";
  /** @type {string} */
  me.LIGHT = "light";
  /** @type {null} */
  var parentView = null;
  /**
   * @param {!Document} options
   * @return {undefined}
   */
  me.initTheme = function(options) {
    if (!parentView) {
      parentView = new RivetView(options);
    }
  };
  /** @type {!Array} */
  var self = [];
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  me.onChanged = function(callback) {
    self.push(callback);
  };
  /**
   * @param {string} al
   * @return {undefined}
   */
  me.removeChanged = function(al) {
    /** @type {number} */
    var size = self.indexOf(al);
    if (-1 != size) {
      self.splice(size, 1);
    }
  };
  /**
   * @return {?}
   */
  me.getTheme = function() {
    return parentView.theme;
  };
  var RivetView = function() {
    /**
     * @param {!Object} JITCompile
     * @return {undefined}
     */
    function Animation(JITCompile) {
      /** @type {string} */
      this._theme = "";
      /** @type {!Object} */
      this.document = JITCompile;
      this.init();
    }
    return Animation.prototype.init = function() {
      startYNew.getCSInterface().addEventListener(startYNew.getCSInterfaceClass().THEME_COLOR_CHANGED_EVENT, this.setColorTheme);
      this.setColorTheme();
    }, Object.defineProperty(Animation.prototype, "theme", {
      get : function() {
        return this._theme;
      },
      enumerable : true,
      configurable : true
    }), Animation.prototype.setColorTheme = function(themeId) {
      var favs_data = window.__adobe_cep__.getHostEnvironment();
      var rgba = JSON.parse(favs_data).appSkinInfo.panelBackgroundColor.color;
      /** @type {string} */
      var bgColor = "#" + ((1 << 24) + (parseInt(rgba.red) << 16) + (parseInt(rgba.green) << 8) + parseInt(rgba.blue)).toString(16).slice(1);
      var waitMsgTarget = me.THEME_53;
      if ("#f0f0f0" == bgColor) {
        waitMsgTarget = me.THEME_F0;
        this._theme = me.LIGHT;
      } else {
        if ("#d6d6d6" == bgColor) {
          waitMsgTarget = me.THEME_D6;
          this._theme = me.LIGHT;
        } else {
          if ("#b8b8b8" == bgColor) {
            waitMsgTarget = me.THEME_B8;
            this._theme = me.LIGHT;
          } else {
            if ("#535353" == bgColor) {
              waitMsgTarget = me.THEME_53;
              this._theme = me.DARK;
            } else {
              if ("#343434" == bgColor) {
                waitMsgTarget = me.THEME_34;
                this._theme = me.DARK;
              } else {
                if ("#323232" == bgColor) {
                  waitMsgTarget = me.THEME_32;
                  this._theme = me.DARK;
                }
              }
            }
          }
        }
      }
      this.document.body.setAttribute("class", waitMsgTarget);
      /** @type {number} */
      var column = 0;
      for (; column < self.length; column++) {
        self[column](this._theme);
      }
    }, Animation;
  }();
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var env = require(22);
  var HTTPS = require(32);
  var Response = require(1);
  var you = require(6);
  var fs = require(2);
  var $ = require(0);
  var TagHourlyStat = require(33);
  /**
   * @param {string} url
   * @param {(Object|string)} type
   * @return {?}
   */
  e.post = function(url, type) {
    return Response.Promise(function(move, changeFavIcon, canCreateDiscussions) {
      var mt;
      /** @type {string} */
      mt = "string" == typeof type ? type : JSON.stringify(type);
      $.ajax({
        url : url,
        type : "POST",
        dataType : "text",
        data : mt,
        success : function(a, fn, value) {
          move("string" == typeof type ? a : JSON.parse(a));
        },
        error : function(name, a, src) {
          changeFavIcon(src);
        }
      });
    });
  };
  /**
   * @param {!Object} path
   * @param {string} charset
   * @param {boolean} length
   * @return {?}
   */
  e.request = function(path, charset, length) {
    return Response.Promise(function(getFragment, obtainGETData, negater) {
      !function(fragmentName, name, oldList, resultin, setTimeout, isBgroundImg, clientHeight) {
        if (void 0 === clientHeight) {
          /** @type {number} */
          clientHeight = 2;
        }
        /** @type {number} */
        var targetOffsetHeight = 0;
        /**
         * @return {undefined}
         */
        var pollForStatus = function() {
          !function(props, that, element, r, startFn, obtainGETData, negater) {
            /** @type {null} */
            var instance = null;
            /** @type {null} */
            var _takingTooLongTimeout = null;
            instance = function(value, options, suppressDisabledCheck, fx, opt_onError, onProgress) {
              var options = {
                onComplete : fx,
                onError : opt_onError,
                onProgress : onProgress
              };
              if (0 == value.indexOf("file:///")) {
                /** @type {string} */
                var filePath = "";
                if ("darwin" == you.platform() ? filePath = value.slice("file://".length) : "win32" == you.platform() && (filePath = value.slice("file:///".length)), filePath = decodeURI(filePath), fs.existsSync(filePath)) {
                  if (options) {
                    /** @type {null} */
                    var data = null;
                    try {
                      data = fs.readFileSync(filePath, options);
                    } catch (exception) {
                      if (options.onError) {
                        options.onError(exception);
                      }
                    }
                    if (data) {
                      if (suppressDisabledCheck) {
                        /** @type {null} */
                        var i = null;
                        try {
                          /** @type {*} */
                          i = JSON.parse(data);
                        } catch (exception) {
                          if (options.onError) {
                            options.onError(exception);
                          }
                        }
                        if (i && options.onComplete) {
                          options.onComplete(i);
                        }
                      } else {
                        if (options.onComplete) {
                          options.onComplete(data);
                        }
                      }
                    }
                  } else {
                    /** @type {null} */
                    var data = null;
                    try {
                      data = fs.readFileSync(filePath);
                    } catch (exception) {
                      if (options.onError) {
                        options.onError(exception);
                      }
                    }
                    if (data && options.onComplete) {
                      options.onComplete(data);
                    }
                  }
                } else {
                  if (options.onError) {
                    options.onError(null);
                  }
                }
              } else {
                if (options) {
                  var s3req = (0 == value.indexOf("https") ? HTTPS : env).get(value, function(http_res) {
                    /** @type {number} */
                    var width = parseInt(http_res.headers["content-length"], 10);
                    var data = new Buffer(0);
                    http_res.on("data", function(cmdBuffer) {
                      if (cmdBuffer) {
                        data = Buffer.concat([data, cmdBuffer]);
                        if (width > 0 && options.onProgress) {
                          options.onProgress(data.length / width);
                        }
                      }
                    });
                    http_res.on("end", function() {
                      if (options) {
                        var err = data.toString(options);
                        if (suppressDisabledCheck) {
                          try {
                            /** @type {*} */
                            var obj = JSON.parse(err);
                            if (options.onComplete) {
                              options.onComplete(obj);
                            }
                          } catch (exception) {
                            if (options.onError) {
                              options.onError(exception);
                            }
                          }
                        } else {
                          if (options.onComplete) {
                            options.onComplete(err);
                          }
                        }
                      } else {
                        if (options.onComplete) {
                          options.onComplete(data);
                        }
                      }
                    });
                  });
                  s3req.on("error", function(exception) {
                    if (options.onError) {
                      options.onError(exception);
                    }
                  });
                } else {
                  var listeners = new TagHourlyStat.URLLoader;
                  /**
                   * @param {?} id
                   * @param {?} obj
                   * @return {undefined}
                   */
                  listeners.onComplete = function(id, obj) {
                    if (options.onComplete) {
                      options.onComplete(obj);
                    }
                  };
                  /**
                   * @param {!Object} exception
                   * @param {!Object} error
                   * @return {undefined}
                   */
                  listeners.onError = function(exception, error) {
                    if (options.onError) {
                      options.onError(error);
                    }
                  };
                  /**
                   * @param {number} chunk
                   * @param {(boolean|number|string)} n
                   * @param {(boolean|number|string)} i
                   * @return {undefined}
                   */
                  listeners.onProgress = function(chunk, n, i) {
                    if (options.onProgress) {
                      options.onProgress(n / i);
                    }
                  };
                  listeners.get(value);
                }
              }
              return {
                dispose : function() {
                  if (s3req) {
                    s3req.abort();
                  }
                  if (listeners) {
                    listeners.close();
                    /** @type {null} */
                    listeners = null;
                  }
                  /** @type {null} */
                  options.onComplete = null;
                  /** @type {null} */
                  options.onError = null;
                  /** @type {null} */
                  options.onProgress = null;
                }
              };
            }(props, that, element, function(t) {
              if (_takingTooLongTimeout) {
                clearTimeout(_takingTooLongTimeout);
                /** @type {null} */
                _takingTooLongTimeout = null;
              }
              if (r) {
                r(t);
              }
            }, function(callback) {
              if (_takingTooLongTimeout) {
                clearTimeout(_takingTooLongTimeout);
                /** @type {null} */
                _takingTooLongTimeout = null;
              }
              if (startFn) {
                startFn(callback);
              }
            }, function(val) {
              if (obtainGETData) {
                obtainGETData(val);
              }
            });
            /** @type {number} */
            _takingTooLongTimeout = setTimeout(function() {
              if (instance) {
                instance.dispose();
                /** @type {null} */
                instance = null;
              }
              if (negater) {
                negater();
              }
            }, 1E4);
          }(fragmentName, name, oldList, resultin, setTimeout, isBgroundImg, function() {
            if (targetOffsetHeight < clientHeight) {
              setTimeout(function() {
                pollForStatus();
              }, 100);
            } else {
              if (setTimeout) {
                setTimeout("timeout");
              }
            }
            targetOffsetHeight++;
          });
        };
        pollForStatus();
      }(path, charset, length, function(fragmentName) {
        getFragment(fragmentName);
      }, function(val) {
        obtainGETData(val);
      }, function(val) {
        negater(val);
      });
    });
  };
}, function(module, canCreateDiscussions) {
  module.exports = require("crypto");
}, function(canCreateDiscussions, BeautifulProperties, require) {
  Object.defineProperty(BeautifulProperties, "__esModule", {
    value : true
  });
  var $ = require(0);
  /** @type {number} */
  var o = 5E3;
  /** @type {number} */
  var r = 0;
  var Client = function() {
    /**
     * @param {!Object} document
     * @param {number} text
     * @param {string} obj
     * @return {undefined}
     */
    function init(document, text, obj) {
      if (void 0 === text) {
        /** @type {string} */
        text = "";
      }
      var $innerblock = this;
      /** @type {string} */
      this.text = "";
      /** @type {string} */
      this.tips = "";
      /** @type {null} */
      this.stamp = null;
      /** @type {boolean} */
      this.displaied = false;
      /** @type {!Object} */
      this.document = document;
      /** @type {string} */
      this.target = obj;
      /** @type {number} */
      this.text = text;
      /** @type {number} */
      this.stamp = setTimeout(function() {
        $innerblock.show();
      }, 500);
      $(obj).one("mouseout", function() {
        $innerblock.hide();
      });
    }
    return init.prototype.show = function() {
      /** @type {boolean} */
      this.displaied = true;
      r++;
      this.tips = "tips_" + r;
      $("body").append('<div id="' + this.tips + '" class="tooltip">' + this.text + "</div>");
      /** @type {string} */
      this.tips = "#" + this.tips;
      var el_left = $(this.target).offset().left;
      var zeroSizeMax = $(this.target).offset().top;
      var _singleW = $(this.tips).outerWidth();
      var pixelSizeTargetMax = $(this.tips).outerHeight();
      /** @type {number} */
      var _singleX = el_left + $(this.target).innerWidth() / 2 - _singleW / 2;
      /** @type {number} */
      var tt_top = zeroSizeMax - pixelSizeTargetMax - 5;
      var normalWidth = $("body").outerWidth();
      if (tt_top < 0) {
        tt_top = zeroSizeMax + $(this.target).outerHeight() + 5;
      }
      if (_singleX + _singleW > normalWidth - 5) {
        /** @type {number} */
        _singleX = normalWidth - _singleW - 5;
      }
      $(this.tips).css("left", _singleX + "px");
      $(this.tips).css("top", tt_top + "px");
      $(this.tips).fadeIn(100);
      o++;
      $(this.tips).css("z-index", o);
    }, init.prototype.hide = function() {
      var me = this;
      if (this.stamp) {
        clearTimeout(this.stamp);
      }
      if (this.displaied) {
        $(this.tips).fadeOut(100, function() {
          $(me.document.body).remove(me.tips);
        });
      }
    }, init;
  }();
  /**
   * @param {!Object} type
   * @param {!Function} options
   * @param {string} object
   * @return {undefined}
   */
  BeautifulProperties.registerTip = function(type, options, object) {
    $(options).on("mouseover", function() {
      new Client(type, object, options);
    });
  };
}, function(canCreateDiscussions, BeautifulProperties, require) {
  /**
   * @param {string} props
   * @param {!Window} signature_pattern
   * @return {undefined}
   */
  function init(props, signature_pattern) {
    if (signature_pattern == flight.SourceType.HUABAN) {
      self.event("fill", props, "huaban");
    } else {
      if (signature_pattern == flight.SourceType.LOCAL) {
        self.event("fill", props, "local");
      } else {
        if (signature_pattern == flight.SourceType.UNSPLASH) {
          self.event("fill", props, "unsplash");
        }
      }
    }
  }
  /**
   * @param {!Object} url
   * @return {?}
   */
  function run(url) {
    var id = crypto.createHash("md5").update(url).digest("hex");
    var name = _.join(settings.storageDir(), "caches", id);
    return path.request(url).then(function(content) {
      var id = function(size) {
        /**
         * @param {!Array} v
         * @param {number} n
         * @return {?}
         */
        function test(v, n) {
          if (void 0 === n) {
            /** @type {number} */
            n = 0;
          }
          /** @type {number} */
          var i = 0;
          for (; i < v.length; i++) {
            if (v[i] !== out[i + n]) {
              return false;
            }
          }
          return true;
        }
        /** @type {!Uint8Array} */
        var out = new Uint8Array(size);
        if (!(out && out.length > 1)) {
          return "";
        }
        return test([255, 216, 255]) ? "jpg" : test([137, 80, 78, 71, 13, 10, 26, 10]) ? "png" : "";
      }(content);
      return name = name + ("." + id), util.mkdirsSync(_.dirname(name)), fs.writeFileSync(name, content), "jpg" == id ? Response.Promise(function(t, saveNotifs, i) {
        Response.Promise(function(extend, saveNotifs, n) {
          /**
           * @return {undefined}
           */
          function defaultOptions() {
            if ("darwin" == you.platform()) {
              var LogAxisView = _.join(settings.storageDir(), "./resources/jpeg-recompress/jpeg-recompress");
            } else {
              if ("win32" == you.platform()) {
                LogAxisView = _.join(settings.storageDir(), "./resources/jpeg-recompress/jpeg-recompress.exe");
              }
            }
            extend(LogAxisView);
          }
          if (_.join(settings.storageDir(), "./resources/jpeg-recompress"), b) {
            defaultOptions();
          } else {
            var src = _.join(settings.pluginDir(), "./resources/jpeg-recompress.zip");
            var item = _.join(settings.storageDir(), "./resources/jpeg-recompress");
            util.mkdirsSync(item);
            util.unzip(src, [item]).then(function() {
              /** @type {boolean} */
              b = true;
              defaultOptions();
            }, function(notifications) {
              saveNotifs(notifications);
            });
          }
        }).then(function(i) {
          /** @type {string} */
          var full_conversation_url = '"' + i + '"  --method smallfry --loops 1 --target 1 --quality veryhigh  "' + name + '" "' + name + '"';
          exp.exec(full_conversation_url, function(notifications, canCreateDiscussions, isSlidingUp) {
            if (notifications) {
              setTimeout(function() {
                saveNotifs(notifications);
              }, 20);
            } else {
              setTimeout(function() {
                t(name);
              }, 20);
            }
          });
        }, function(notifications) {
          setTimeout(function() {
            saveNotifs(notifications);
          }, 20);
        });
      }) : name;
    });
  }
  Object.defineProperty(BeautifulProperties, "__esModule", {
    value : true
  });
  var flight = require(5);
  var options = require(20);
  var template = require(25);
  var Response = require(1);
  var crypto = require(14);
  var settings = require(10);
  var util = require(19);
  var path = require(13);
  var _ = require(3);
  var fs = require(2);
  var exp = require(7);
  var fm = require(43);
  var component = require(11);
  var you = require(6);
  var self = require(17);
  /**
   * @param {!Object} target
   * @return {undefined}
   */
  BeautifulProperties.fillImages = function(target) {
    init("start", target.type);
    options.getDocumentId().then(function(canCreateDiscussions) {
      if (null == canCreateDiscussions) {
        fm.toast("\u5f53\u524d\u6ca1\u6709\u6587\u6863");
      } else {
        options.layersCount().then(function(jChildren) {
          if (0 == jChildren.length) {
            fm.toast("\u5f53\u524d\u6ca1\u6709\u9009\u62e9\u56fe\u5c42");
          } else {
            /** @type {number} */
            var minSize = 0;
            /** @type {number} */
            var tabHeight = 0;
            /** @type {number} */
            var i = 0;
            for (; i < jChildren.length; i++) {
              if (jChildren[i].width > minSize) {
                minSize = jChildren[i].width;
              }
              if (jChildren[i].height > tabHeight) {
                tabHeight = jChildren[i].height;
              }
            }
            var operatorType = (targetOffsetHeight = target.type) == flight.SourceType.HUABAN ? template.createBoard(template.HUABAN_BOARD) : targetOffsetHeight == flight.SourceType.LOCAL ? template.createBoard(template.LOCAL_BOARD) : targetOffsetHeight == flight.SourceType.UNSPLASH ? template.createBoard(template.UNSPLASH_BOARD) : void 0;
            if (!operatorType) {
              return void fm.toast("\u65e0\u6cd5\u627e\u5230\u753b\u677f\u7c7b\u578b");
            }
            fm.toast("\u753b\u677f\u521d\u59cb\u5316\u4e2d...", 2E4);
            operatorType.init(target.value).then(function(tResult) {
              fm.toast("\u753b\u677f\u521d\u59cb\u5316\u4e2d...", 2E4);
              (function(t, e, value, height, signature_pattern) {
                t.randomPins(e.length, value, height).then(function(t) {
                  if (t.length > 0) {
                    fm.toast("\u5171 " + t.length + " \u5f20\u56fe\u50cf\u4e0b\u8f7d\u4e2d", 4E4);
                    (function(result) {
                      return Response.Promise(function(indexOf, createElementFnc, i) {
                        /**
                         * @return {undefined}
                         */
                        function register() {
                          fm.toast("\u56fe\u50cf\u4e0b\u8f7d\u4e2d:" + times + "/" + result.length, 3E4);
                          if (result.length == times) {
                            if (anims.length > 0) {
                              indexOf(anims);
                            } else {
                              createElementFnc(null);
                            }
                          }
                        }
                        /** @type {!Array} */
                        var anims = [];
                        /** @type {number} */
                        var times = 0;
                        var deadPool = result.concat();
                        !function loop() {
                          if (0 != deadPool.length) {
                            setTimeout(function() {
                              loop();
                            }, 100);
                            run(deadPool.pop()).then(function(_anim) {
                              anims.push(_anim);
                              times++;
                              register();
                            }, function(canCreateDiscussions) {
                              times++;
                              register();
                            });
                          }
                        }();
                      });
                    })(t).then(function(initHashBlocks) {
                      if (initHashBlocks.length > 0) {
                        fm.toast(initHashBlocks.length + " \u5f20\u56fe\u50cf\u4e0b\u8f7d\u5b8c\u6210", 2E4);
                        (function(t, values) {
                          fm.toast("\u586b\u5145\u4e2d...", 1E4);
                          var deadPool = t.concat();
                          /** @type {number} */
                          var i = 0;
                          /**
                           * @return {undefined}
                           */
                          var exec = function() {
                            if (0 != deadPool.length) {
                              var item = deadPool.pop().id;
                              options.fillPhoto2(item, values[i % values.length]).then(function() {
                                i++;
                                fm.toast("\u586b\u5145\u56fe\u5c42 " + i + "/" + t.length + " \u6210\u529f", 1E4);
                                setTimeout(function() {
                                  exec();
                                }, 200);
                              }, function(canCreateDiscussions) {
                                i++;
                                if ("existEmpty" == canCreateDiscussions) {
                                  fm.toast("\u586b\u5145\u56fe\u5c42 " + i + "/" + t.length + " \u5931\u8d25: \u7a7a\u767d\u56fe\u5c42", 1E4);
                                } else {
                                  fm.toast("\u586b\u5145\u56fe\u5c42 " + i + "/" + t.length + " \u5931\u8d25", 1E4);
                                }
                                setTimeout(function() {
                                  exec();
                                }, 20);
                              });
                            } else {
                              setTimeout(function() {
                                fm.toast("\u586b\u5145\u7ed3\u675f");
                              }, 2E3);
                              (function(files) {
                                /** @type {number} */
                                var i = 0;
                                for (; i < files.length; i++) {
                                  if (fs.existsSync(files[i])) {
                                    try {
                                      fs.unlinkSync(files[i]);
                                    } catch (t) {
                                    }
                                  }
                                }
                              })(values);
                            }
                          };
                          exec();
                        })(e, initHashBlocks);
                      } else {
                        fm.toast("\u56fe\u50cf\u4e0b\u8f7d\u5931\u8d25");
                      }
                    }, function(canCreateDiscussions) {
                      fm.toast("\u56fe\u50cf\u4e0b\u8f7d\u5931\u8d25");
                      init("fail", signature_pattern);
                    });
                  } else {
                    fm.toast("\u65e0\u53ef\u7528\u56fe\u50cf");
                    init("fail", signature_pattern);
                  }
                }, function(msg) {
                  if ("string" == typeof msg) {
                    fm.toast(msg);
                  } else {
                    if ("number" == typeof msg) {
                      /** @type {string} */
                      var key = "";
                      if (1 == msg) {
                        /** @type {string} */
                        key = "\u767b\u5f55\u5931\u6548\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55";
                        component.getContainer().display(component.PageType.login);
                        component.getContainer().getLoginPage().error(key);
                      } else {
                        if (2 == msg) {
                          /** @type {string} */
                          key = "\u60a8\u7684\u8d26\u53f7\u53ef\u80fd\u5728\u5176\u4ed6\u5730\u70b9\u767b\u5f55\u3002";
                          component.getContainer().display(component.PageType.login);
                          component.getContainer().getLoginPage().error(key);
                        } else {
                          fm.toast("\u586b\u5145\u56fe\u50cf\u83b7\u53d6\u5931\u8d25");
                          init("fail", signature_pattern);
                        }
                      }
                      fm.toast(key);
                    } else {
                      fm.toast("\u586b\u5145\u56fe\u50cf\u83b7\u53d6\u5931\u8d25");
                      init("fail", signature_pattern);
                    }
                  }
                });
              })(tResult, jChildren, minSize, tabHeight, target.type);
            }, function(canCreateDiscussions) {
              fm.toast("\u753b\u677f\u521d\u59cb\u5316\u5931\u8d25");
            });
          }
          var targetOffsetHeight;
        });
      }
    });
  };
  /** @type {boolean} */
  var b = false;
}, function(canCreateDiscussions, middleware, $) {
  Object.defineProperty(middleware, "__esModule", {
    value : true
  });
  var J = $(44);
  /** @type {null} */
  var self = null;
  $(53).one(function(canCreateDiscussions, clusterShardData) {
    if (clusterShardData) {
      var size = clusterShardData.split(":");
      var b = size[0] + size[1] + size[2] + size[3];
      /** @type {string} */
      b = b + "-";
      /** @type {string} */
      b = b + (size[4] + size[5]);
      /** @type {string} */
      b = b + "-";
      /** @type {string} */
      b = b + ("4a" + size[0]);
      /** @type {string} */
      b = b + "-";
      /** @type {string} */
      b = b + ("8a" + size[1]);
      /** @type {string} */
      b = b + "-";
      /** @type {string} */
      b = b + (size[0] + size[1] + size[2] + size[3] + size[4] + size[5]);
      self = J("UA-115303567-1", b);
      for (; locations.length > 0;) {
        var req = locations.shift();
        self.pageview(req.path, req.hostname, req.title).send();
      }
      for (; items.length > 0;) {
        var data = items.shift();
        self.event(data.category, data.action, data.label, data.value).send();
      }
    }
  });
  /** @type {!Array} */
  var locations = [];
  /**
   * @param {string} route
   * @param {string} name
   * @param {string} obj
   * @return {undefined}
   */
  middleware.pageView = function(route, name, obj) {
    if (self) {
      self.pageview(route, name, obj).send();
    } else {
      locations.push({
        path : route,
        hostname : name,
        title : obj
      });
    }
  };
  /** @type {!Array} */
  var items = [];
  /**
   * @param {string} name
   * @param {string} callback
   * @param {string} options
   * @param {string} fn
   * @return {undefined}
   */
  middleware.event = function(name, callback, options, fn) {
    if (self) {
      self.event(name, callback, options, fn).send();
    } else {
      items.push({
        category : name,
        action : callback,
        label : options,
        value : fn
      });
    }
  };
}, function(canCreateDiscussions, e, n) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  /**
   * @param {!Object} name
   * @param {!Object} parent
   * @return {?}
   */
  e.contains = function(name, parent) {
    /** @type {!Object} */
    var child = name;
    if (name == parent) {
      return true;
    }
    for (; child.parentElement;) {
      if ((child = child.parentElement) == parent) {
        return true;
      }
    }
    return false;
  };
}, function(canCreateDiscussions, exports, require) {
  /**
   * @param {?} src
   * @param {?} mode
   * @return {?}
   */
  function copy(src, mode) {
    return !!fs.existsSync(src) || (copy(h.dirname(src), mode) ? (fs.mkdirSync(src, mode), true) : void 0);
  }
  /**
   * @param {?} params
   * @param {?} name
   * @param {number} status
   * @param {!Function} cb
   * @return {undefined}
   */
  function create(params, name, status, cb) {
    if (fs.existsSync(name)) {
      cb(params, name, status);
    } else {
      copy(name);
      cb(params, name, status);
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  var fs = require(2);
  var you = require(6);
  var h = require(3);
  var Response = require(1);
  var config = require(34);
  var patternVertexCount = require(7);
  var settings = require(10);
  var $ = require(23);
  /** @type {function(?, ?): ?} */
  exports.mkdirsSync = copy;
  /**
   * @param {string} filename
   * @param {!Array} data
   * @param {!Array} options
   * @return {?}
   */
  exports.unzip = function(filename, data, options) {
    return void 0 === options && (options = false), Response.Promise(function(saveNotifs, obtainGETData, canCreateDiscussions) {
      /** @type {string} */
      filename = '"' + filename + '"';
      /** @type {string} */
      var cmd = "";
      /** @type {string} */
      var header = "";
      if ("darwin" == you.platform()) {
        /** @type {number} */
        var i = 0;
        for (; i < data.length; i++) {
          /** @type {string} */
          type = '"' + (type = data[i]) + '"';
          if (options) {
            /** @type {string} */
            cmd = cmd + ("chmod 777 " + type);
            if (i != data.length - 1) {
              /** @type {string} */
              cmd = cmd + " && ";
            }
          }
          /** @type {string} */
          header = header + ("unzip -o " + filename + " -d " + type);
          if (i != data.length - 1) {
            /** @type {string} */
            header = header + " && ";
          }
        }
      } else {
        if ("win32" == you.platform()) {
          var tmp_flow_path = h.join(settings.pluginDir(), "./resources/unzip.exe");
          /** @type {string} */
          tmp_flow_path = '"' + tmp_flow_path + '"';
          /** @type {number} */
          i = 0;
          for (; i < data.length; i++) {
            var type;
            /** @type {string} */
            type = '"' + (type = data[i]) + '"';
            if (options) {
              /** @type {string} */
              cmd = cmd + ("icacls " + type + " /grant Everyone:F");
              if (i != data.length - 1) {
                /** @type {string} */
                cmd = cmd + " && ";
              }
            }
            /** @type {string} */
            header = header + (tmp_flow_path + " -o " + filename + " -d " + type);
            if (i != data.length - 1) {
              /** @type {string} */
              header = header + " && ";
            }
          }
        }
      }
      if (options) {
        config.sudo(cmd, {
          name : "PxCook"
        }, function(val, canCreateDiscussions, n) {
          if (val) {
            obtainGETData(val);
          } else {
            if (n) {
              obtainGETData(n);
            } else {
              patternVertexCount.exec(header, function(val, canCreateDiscussions, n) {
                if (val) {
                  obtainGETData(val);
                } else {
                  if (n) {
                    obtainGETData(n);
                  } else {
                    saveNotifs(void 0);
                  }
                }
              });
            }
          }
        });
      } else {
        patternVertexCount.exec(header, function(val, canCreateDiscussions, n) {
          if (val) {
            obtainGETData(val);
          } else {
            if (n) {
              obtainGETData(n);
            } else {
              saveNotifs(void 0);
            }
          }
        });
      }
    });
  };
  /**
   * @param {string} filename
   * @param {!Array} options
   * @return {undefined}
   */
  exports.deleteFileSync = function rm(filename, options) {
    if (void 0 === options && (options = false), fs.existsSync(filename)) {
      /** @type {null} */
      var statObj = null;
      try {
        statObj = fs.statSync(filename);
      } catch (t) {
        if (options) {
          throw t;
        }
      }
      if (statObj) {
        if (statObj.isDirectory()) {
          if (fs.existsSync(filename)) {
            /** @type {!Array} */
            var selected = [];
            try {
              selected = fs.readdirSync(filename);
            } catch (t) {
              if (options) {
                throw t;
              }
            }
            selected.forEach(function(name, canCreateDiscussions) {
              /** @type {string} */
              var file = filename + "/" + name;
              if (fs.statSync(file).isDirectory()) {
                rm(file);
              } else {
                try {
                  fs.unlinkSync(file);
                } catch (t) {
                  if (options) {
                    throw t;
                  }
                }
              }
            });
            try {
              fs.rmdirSync(filename);
            } catch (t) {
              if (options) {
                throw t;
              }
            }
          }
        } else {
          try {
            fs.unlinkSync(filename);
          } catch (t) {
            if (options) {
              throw t;
            }
          }
        }
      }
    }
  };
  /**
   * @param {string} path
   * @param {string} name
   * @param {number} content
   * @return {undefined}
   */
  exports.copyDir = function done(path, name, content) {
    if (void 0 === content) {
      /** @type {boolean} */
      content = false;
    }
    $.localLog("copy " + path + " " + name);
    /** @type {!Array} */
    var points = [];
    try {
      points = fs.readdirSync(path);
    } catch (guild_id) {
      if ($.localLog("error " + guild_id), content) {
        throw guild_id;
      }
    }
    /** @type {number} */
    var i = 0;
    for (; i < points.length; i++) {
      var x = points[i];
      var template = h.join(path, x);
      var a = h.join(name, x);
      /** @type {null} */
      var mock = null;
      try {
        mock = fs.statSync(template);
      } catch (guild_id) {
        if ($.localLog("error " + guild_id), content) {
          throw guild_id;
        }
      }
      if (mock) {
        if (mock.isFile()) {
          try {
            copy(h.dirname(a));
            fs.writeFileSync(a, fs.readFileSync(template));
          } catch (guild_id) {
            if ($.localLog("error " + guild_id), content) {
              throw guild_id;
            }
          }
        } else {
          if (mock.isDirectory()) {
            create(template, a, content, done);
          }
        }
      }
    }
  };
}, function(canCreateDiscussions, me, floor) {
  Object.defineProperty(me, "__esModule", {
    value : true
  });
  var startYNew = floor(4);
  var f = floor(1);
  /**
   * @param {string} canCreateDiscussions
   * @return {undefined}
   */
  me.panelAlert = function(canCreateDiscussions) {
    startYNew.getCSInterface().evalScript("panelAlert('" + canCreateDiscussions + "')", function(canCreateDiscussions) {
    });
  };
  /**
   * @return {?}
   */
  me.getDocumentId = function() {
    return f.Promise(function(saveNotifs, canCreateDiscussions, n) {
      startYNew.getCSInterface().evalScript("getDocumentId()", function(origin) {
        saveNotifs("null" == origin || null == origin ? null : origin);
      });
    });
  };
  /**
   * @param {string} cb
   * @return {?}
   */
  me.openFolderDialog = function(cb) {
    return f.Promise(function(saveNotifs, n, canCreateDiscussions) {
      startYNew.getCSInterface().evalScript("openFolderDialog('" + cb + "')", function(origin) {
        saveNotifs("null" == origin || null == origin ? null : origin);
      });
    });
  };
  /**
   * @return {?}
   */
  me.layersCount = function() {
    return f.Promise(function(tpl, canCreateDiscussions, n) {
      startYNew.getCSInterface().evalScript("layersCount()", function(b) {
        if (b) {
          /** @type {null} */
          var results = null;
          try {
            /** @type {*} */
            results = JSON.parse(b);
          } catch (t) {
          }
          if (results) {
            var model = results.layers;
            tpl(model || []);
          } else {
            tpl([]);
          }
        } else {
          tpl([]);
        }
      });
    });
  };
  /**
   * @param {string} category
   * @param {string} name
   * @return {?}
   */
  me.fillPhoto2 = function(category, name) {
    return f.Promise(function(not_dash_char, saveNotifs, canCreateDiscussions) {
      name = name.replace(/\\/g, "/");
      /** @type {string} */
      var script = "fillPhoto2(" + category + ',"' + name + '")';
      startYNew.getCSInterface().evalScript(script, function(notifications) {
        if ("existEmpty" == notifications) {
          saveNotifs("existEmpty");
        } else {
          if ("noLayer" == notifications) {
            saveNotifs(notifications);
          } else {
            if (notifications) {
              saveNotifs(notifications);
            } else {
              not_dash_char("");
            }
          }
        }
      });
    });
  };
  /**
   * @param {!NodeList} bettorRecords
   * @return {?}
   */
  me.fillPhoto = function(bettorRecords) {
    return f.Promise(function(not_dash_char, saveNotifs, canCreateDiscussions) {
      /** @type {string} */
      var rot = "[";
      /** @type {number} */
      var k = 0;
      for (; k < bettorRecords.length; k++) {
        var aDraggedText = bettorRecords[k];
        /** @type {string} */
        rot = rot + ('"' + (aDraggedText = aDraggedText.replace(/\\/g, "/")) + '"');
        if (k != bettorRecords.length - 1) {
          /** @type {string} */
          rot = rot + ",";
        }
      }
      /** @type {string} */
      var script = "fillPhoto(" + (rot = rot + "]") + ")";
      startYNew.getCSInterface().evalScript(script, function(notifications) {
        if ("existEmpty" == notifications) {
          not_dash_char("existEmpty");
        } else {
          if (notifications) {
            saveNotifs(notifications);
          } else {
            not_dash_char("");
          }
        }
      });
    });
  };
}, function(canCreateDiscussions, e, unescape) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var json = unescape(13);
  var v = unescape(1);
  /** @type {string} */
  var session = "";
  /**
   * @param {!Object} data
   * @return {?}
   */
  e.post = function(data) {
    return data.session = session, v.Promise(function(callback, saveNotifs, canCreateDiscussions) {
      json.post("https://www.fancynode.com.cn:8443/FancyPluginService/do", data).then(function(ewd) {
        session = ewd.session;
        callback(ewd);
      }, function(notifications) {
        saveNotifs(notifications);
      });
    });
  };
}, function(module, canCreateDiscussions) {
  module.exports = require("http");
}, function(canCreateDiscussions, BeautifulProperties, n) {
  Object.defineProperty(BeautifulProperties, "__esModule", {
    value : true
  });
  /**
   * @param {string} eventType
   * @return {undefined}
   */
  BeautifulProperties.localLog = function(eventType) {
  };
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var $ = require(0);
  var Theme = require(12);
  var module = require(15);
  var newOrg = function() {
    /**
     * @param {!Object} document
     * @param {!Object} container
     * @param {?} display
     * @param {?} done
     * @param {string} value
     * @param {string} tabs
     * @return {undefined}
     */
    function init(document, container, display, done, value, tabs) {
      var that = this;
      if (this._label = "", this.mouseIn = false, this.mouseDown = false, this.selected = false, this.selectedChangeds = [], this.document = document, this.container = container, this.lightIcon = display, this.darkIcon = done, this.button = $("<div class='icon-toggle-button'></div>").appendTo($(container)), this.img = $("<img>").appendTo($(this.button)), value && module.registerTip(document, this.button, value), tabs && tabs.length > 0) {
        /** @type {number} */
        var i = 0;
        for (; i < tabs.length; i++) {
          this.button.addClass(tabs[i]);
        }
      }
      this.button.on("mouseover", function(canCreateDiscussions) {
        that.mouseOver_handler();
      });
      this.button.on("mouseout", function(canCreateDiscussions) {
        that.mouseOut_handler();
      });
      this.button.on("mousedown", function(canCreateDiscussions) {
        that.mouseDown_handler();
      });
      $(document).on("mouseup", function(canCreateDiscussions) {
        that.mouseUp_handler();
      });
      this.button.on("click", function(canCreateDiscussions) {
        that.click_handler();
      });
      Theme.onChanged(function(wantedType) {
        that.updateIcon(wantedType);
      });
      this.updateIcon(Theme.getTheme());
    }
    return Object.defineProperty(init.prototype, "label", {
      get : function() {
        return this._label;
      },
      set : function(value) {
        /** @type {string} */
        this._label = value;
        if (!this._span) {
          this._span = $("<span></span>").appendTo(this.button);
          this.button.addClass("text");
        }
        this._span.text(this._label);
      },
      enumerable : true,
      configurable : true
    }), init.prototype.updateIcon = function(wantedType) {
      if (wantedType == Theme.LIGHT) {
        this.img.attr("src", this.lightIcon);
      } else {
        Theme.LIGHT;
        this.img.attr("src", this.darkIcon);
      }
    }, init.prototype.mouseOver_handler = function() {
      /** @type {boolean} */
      this.mouseIn = true;
      this.updateDisplay();
    }, init.prototype.mouseOut_handler = function() {
      /** @type {boolean} */
      this.mouseIn = false;
      this.updateDisplay();
    }, init.prototype.mouseDown_handler = function() {
      /** @type {boolean} */
      this.mouseDown = true;
      this.updateDisplay();
    }, init.prototype.mouseUp_handler = function() {
      /** @type {boolean} */
      this.mouseDown = false;
      this.updateDisplay();
    }, init.prototype.click_handler = function() {
      this.setSelect(!this.selected);
    }, init.prototype.getSelect = function() {
      return this.selected;
    }, init.prototype.setSelect = function(name, options) {
      if (void 0 === options && (options = true), this.selected = name, this.updateDisplay(), options) {
        /** @type {number} */
        var layer_i = 0;
        for (; layer_i < this.selectedChangeds.length; layer_i++) {
          this.selectedChangeds[layer_i](this);
        }
      }
    }, init.prototype.onSelectedChanged = function(model) {
      this.selectedChangeds.push(model);
    }, init.prototype.removeSelectedChanged = function(i) {
      var p0 = this.selectedChangeds.indexOf(i);
      if (-1 != p0) {
        this.selectedChangeds.splice(p0, 1);
      }
    }, init.prototype.updateDisplay = function() {
      this.button.removeClass("hover");
      this.button.removeClass("down");
      if (this.selected) {
        this.button.addClass("down");
        if (this.mouseDown) {
          this.button.addClass("down");
        } else {
          if (this.mouseIn) {
            this.button.addClass("hover");
          }
        }
      } else {
        if (this.mouseIn) {
          this.button.addClass("hover");
        }
        if (this.mouseDown) {
          this.button.addClass("down");
        }
      }
    }, init;
  }();
  e.IconToggleButton = newOrg;
}, function(canCreateDiscussions, template, unescape) {
  /**
   * @return {undefined}
   */
  function _inherits() {
    if (!u) {
      /** @type {boolean} */
      u = true;
      cache[template.HUABAN_BOARD] = d.HuaBanBoard;
      item[template.HUABAN_BOARD] = d.getTitle;
      cache[template.LOCAL_BOARD] = val.LocalBoard;
      item[template.LOCAL_BOARD] = val.getTitle;
      cache[template.UNSPLASH_BOARD] = data.UnsplashBoard;
      item[template.UNSPLASH_BOARD] = data.getTitle;
    }
  }
  Object.defineProperty(template, "__esModule", {
    value : true
  });
  var d = unescape(40);
  var data = unescape(41);
  var val = unescape(42);
  /** @type {string} */
  template.HUABAN_BOARD = "huaban";
  /** @type {string} */
  template.UNSPLASH_BOARD = "unsplash";
  /** @type {string} */
  template.LOCAL_BOARD = "local";
  var cache = {};
  var item = {};
  /** @type {boolean} */
  var u = false;
  /**
   * @param {?} callback
   * @return {?}
   */
  template.createBoard = function(callback) {
    _inherits();
    var c = cache[callback];
    return c ? new c : null;
  };
  /**
   * @param {?} t
   * @param {string} n
   * @param {?} funName
   * @return {?}
   */
  template.getBoardTitle = function(t, n, funName) {
    return _inherits(), (0, item[funName])(t, n);
  };
}, function(mixin, canCreateDiscussions, saveNotifs) {
  var _rb = saveNotifs(14).randomBytes;
  /**
   * @return {?}
   */
  mixin.exports = function() {
    return _rb(16);
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {!Array} */
  var H2 = [];
  /** @type {number} */
  var i = 0;
  for (; i < 256; ++i) {
    /** @type {string} */
    H2[i] = (i + 256).toString(16).substr(1);
  }
  /**
   * @param {!Object} children
   * @param {number} index
   * @return {?}
   */
  mixin.exports = function(children, index) {
    var i = index || 0;
    /** @type {!Array} */
    var c = H2;
    return c[children[i++]] + c[children[i++]] + c[children[i++]] + c[children[i++]] + "-" + c[children[i++]] + c[children[i++]] + "-" + c[children[i++]] + c[children[i++]] + "-" + c[children[i++]] + c[children[i++]] + "-" + c[children[i++]] + c[children[i++]] + c[children[i++]] + c[children[i++]] + c[children[i++]] + c[children[i++]];
  };
}, function(mixin, canCreateDiscussions, saveNotifs) {
  var spawn = saveNotifs(7).execFile;
  /**
   * @param {!Object} c
   * @param {!Object} C
   * @return {undefined}
   */
  mixin.exports = function(c, C) {
    spawn("ifconfig", [c], function(aA1, p_Interval) {
      if (aA1) {
        C(aA1, null);
      } else {
        /** @type {(Array<string>|null)} */
        var nameTmpArr = /[a-f0-9]{2}(:[a-f0-9]{2}){5}/.exec(p_Interval.toLowerCase());
        if (nameTmpArr) {
          C(null, nameTmpArr[0].toLowerCase());
        } else {
          C("did not find a mac address", null);
        }
      }
    });
  };
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var $ = require(0);
  var url = require(18);
  var newOrg = function() {
    /**
     * @param {?} html
     * @param {?} target
     * @param {number} a
     * @return {undefined}
     */
    function self(html, target, a) {
      /** @type {!Array} */
      this.onSelectFuncs = [];
      /** @type {!Array} */
      this.onCloses = [];
      /** @type {!Array} */
      this.onOpens = [];
      this.target = $(target);
      this.document = $(html);
      /** @type {number} */
      this.maxHeight = a;
    }
    return self.prototype.init = function(elem, style) {
      var n = this;
      if (void 0 === style) {
        /** @type {string} */
        style = "";
      }
      this.mask = $('<div class="combobox-prompt-mask"></div>').appendTo($("body"));
      /** @type {string} */
      var i = '<div class="combobox-prompt"><div class="list-container">';
      /** @type {number} */
      var j = 0;
      for (; j < elem.length; j++) {
        /** @type {string} */
        i = i + ('<div class="list-item" value="' + elem[j].value + '">' + elem[j].text + "</div>");
      }
      /** @type {string} */
      i = i + ('</div><div class="gapline"></div><input class="combobox-input" type="text" placeholder="' + style + '" /></div>');
      this.prompt = $(i).appendTo($("body"));
      if (this.maxHeight) {
        this.prompt.css("max-height", this.maxHeight + "px");
      }
      this.input = this.prompt.find(".combobox-input");
      this.target.click(function() {
        n.targetClick_handler();
      });
    }, self.prototype.targetClick_handler = function() {
      var that = this;
      var navHeightDiff = this.target.outerWidth();
      this.prompt.css("width", navHeightDiff - 12 + "px");
      var el_left = this.target.offset().left;
      var y = this.target.offset().top;
      var padding = this.target.outerHeight();
      var tt_top = (this.prompt.outerWidth(), el_left);
      var w = y - this.prompt.outerHeight() + padding;
      if (w < 5) {
        w = y;
      }
      this.input.val("");
      this.prompt.css("left", tt_top + "px");
      this.prompt.css("top", w + "px");
      this.mask.appendTo($("body"));
      this.prompt.appendTo($("body"));
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < this.onOpens.length; layer_i++) {
        this.onOpens[layer_i]();
      }
      setTimeout(function() {
        if (!that.prompt.hasClass("visible")) {
          that.prompt.addClass("visible");
        }
        if (!that.mask.hasClass("visible")) {
          that.mask.addClass("visible");
        }
        /**
         * @param {!Event} init
         * @return {undefined}
         */
        that.documentClick_handler_bind = function(init) {
          that.documentClick_handler(init);
        };
        that.document.on("click", that.documentClick_handler_bind);
        /**
         * @param {!Event} e
         * @return {undefined}
         */
        that.documentKeyup_handler_bind = function(e) {
          that.documentKeyup_handler(e);
        };
        that.document.on("keyup", that.documentKeyup_handler_bind);
        that.input[0].focus();
      }, 1);
    }, self.prototype.documentClick_handler = function(event) {
      if (url.contains(event.target, this.prompt.get(0))) {
        if ($(event.target).hasClass("list-item")) {
          var minyMin = $(event.target).attr("value");
          var n = $(event.target).text();
          /** @type {number} */
          var layer_i = 0;
          for (; layer_i < this.onSelectFuncs.length; layer_i++) {
            (0, this.onSelectFuncs[layer_i])(minyMin, n);
          }
          this.hide();
        }
      } else {
        this.hide();
      }
    }, self.prototype.documentKeyup_handler = function(event) {
      var pain = this;
      if (27 == event.keyCode) {
        this.hide();
      } else {
        if (13 == event.keyCode) {
          var n = this.input.val();
          if (!n) {
            return void(this.input.hasClass("error") || (this.input.addClass("error"), setTimeout(function() {
              pain.input.removeClass("error");
            }, 500)));
          }
          /** @type {number} */
          var i = 0;
          for (; i < this.onSelectFuncs.length; i++) {
            (0, this.onSelectFuncs[i])(n, "");
          }
          this.hide();
        }
      }
    }, self.prototype.hide = function() {
      if (this.documentClick_handler_bind) {
        this.document.unbind("click", this.documentClick_handler_bind);
      }
      /** @type {null} */
      this.documentClick_handler_bind = null;
      if (this.documentKeyup_handler_bind) {
        this.document.unbind("keyup", this.documentKeyup_handler_bind);
      }
      /** @type {null} */
      this.documentKeyup_handler_bind = null;
      this.prompt.removeClass("visible");
      this.mask.removeClass("visible");
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < this.onCloses.length; layer_i++) {
        this.onCloses[layer_i]();
      }
    }, self.prototype.onselect = function(e) {
      this.onSelectFuncs.push(e);
    }, self.prototype.onClose = function(onCloseFunc) {
      this.onCloses.push(onCloseFunc);
    }, self.prototype.onOpen = function(value) {
      this.onOpens.push(value);
    }, self;
  }();
  e.ComboboxPrompt = newOrg;
}, function(canCreateDiscussions, BeautifulProperties, __webpack_require__) {
  Object.defineProperty(BeautifulProperties, "__esModule", {
    value : true
  });
  var History = __webpack_require__(4);
  var _dispatcher = __webpack_require__(12);
  var _UiIcon = __webpack_require__(31);
  var core = __webpack_require__(36);
  var result = __webpack_require__(11);
  var Typo = function() {
    /**
     * @return {undefined}
     */
    function init() {
      var t = this;
      History.initCore(CSInterface, CSEvent);
      History.initXMLHttpRequest(XMLHttpRequest);
      _dispatcher.initTheme(document);
      History.persistent(true);
      result.init(document);
      result.getContainer().display(result.PageType.login);
      this.updater = new _UiIcon.UpdaterSample;
      /**
       * @return {undefined}
       */
      this.updater.needUpdate = function() {
        t.needUpdate_handler();
      };
      this.updater.init();
      this.updatePrompt = new core.UpdatePrompt(document);
      /**
       * @return {undefined}
       */
      this.updatePrompt.onUpateClick = function() {
        t.updateClick_handler();
      };
    }
    return init.prototype.needUpdate_handler = function() {
      this.updatePrompt.show();
    }, init.prototype.updateClick_handler = function() {
      this.updater.download();
    }, init;
  }();
  /**
   * @return {undefined}
   */
  window.onload = function() {
    new Typo;
  };
}, function(canCreateDiscussions, e, $) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var form = $(13);
  var _this = $(4);
  var options = $(10);
  var self = $(19);
  var cells = $(23);
  var $window = $(1);
  var path = $(3);
  var fs = $(2);
  var newOrg = function() {
    /**
     * @return {undefined}
     */
    function self() {
      /** @type {null} */
      this.needUpdate = null;
      /** @type {boolean} */
      this.installed = false;
      /** @type {string} */
      this.panelUrl = "";
      /** @type {string} */
      this.cepPath = "";
    }
    return self.prototype.init = function() {
      var GS = this;
      setTimeout(function() {
        GS.checkUpdate();
      }, 1);
      setInterval(function() {
        GS.checkUpdate();
      }, 18E5);
    }, self.prototype.download = function() {
      /** @type {string} */
      var all = "https://assets.fancynode.com.cn/sweet-onion/client/update.json";
      /** @type {string} */
      all = all + "?" + Math.floor(1E3 * Math.random());
      form.request(all, "utf-8", true).then(function(me) {
        var url = me.download;
        window.cep.util.openURLInDefaultBrowser(url);
      }, function(canCreateDiscussions) {
      });
    }, self.prototype.checkUpdate = function() {
      var tab = this;
      if (cells.localLog("start check update"), !this.installed) {
        /** @type {string} */
        var all = "https://assets.fancynode.com.cn/sweet-onion/client/update.json";
        /** @type {string} */
        all = all + "?" + Math.floor(1E3 * Math.random());
        form.request(all, "utf-8", true).then(function(data) {
          var delta = data.version;
          var x = _this.pluginVersion();
          cells.localLog(x + ", " + delta);
          if (function(oWaveformDataLeft, to) {
            /** @type {boolean} */
            var n = false;
            /** @type {number} */
            var i = 0;
            var itemTop = oWaveformDataLeft.split(".");
            var spheres = to.split(".");
            /** @type {number} */
            var iter_sph = 0;
            for (; iter_sph < spheres.length; iter_sph++) {
              var left = spheres[iter_sph];
              var right = itemTop[i] ? itemTop[i] : "0";
              if (parseInt(left) > parseInt(right)) {
                /** @type {boolean} */
                n = true;
                break;
              }
              if (parseInt(left) < parseInt(right)) {
                break;
              }
              i++;
            }
            return n;
          }(x, delta)) {
            tab.initUpdater(data.panel);
            tab.installPanel().then(function() {
              _this.signRefresh();
            }, function(canCreateDiscussions) {
            });
          }
        }, function(canCreateDiscussions) {
        });
      }
    }, self.prototype.initUpdater = function(canCreateDiscussions) {
      this.panelUrl = canCreateDiscussions;
      this.cepPath = options.cepDir();
    }, self.prototype.installPanel = function() {
      var item = this;
      return this.installed = true, $window.Promise(function(saveNotifs, taRegisterTool) {
        var file = path.join(options.storageDir(), "update", "update.zip");
        form.request(item.panelUrl).then(function(npmrcContent) {
          self.mkdirsSync(path.dirname(file));
          if (fs.existsSync(file)) {
            fs.unlinkSync(file);
          }
          fs.writeFileSync(file, npmrcContent);
          var q = path.join(options.storageDir(), "update", "tmp");
          self.mkdirsSync(q);
          self.unzip(file, [q]).then(function() {
            if (fs.existsSync(file)) {
              fs.unlinkSync(file);
            }
            cells.localLog("download complete");
            var dir = path.join(options.storageDir(), "update", "backup");
            if (fs.existsSync(dir)) {
              self.deleteFileSync(dir);
            }
            try {
              self.copyDir(options.pluginDir(), dir);
            } catch (startindex) {
              return void cells.localLog("backup error " + startindex);
            }
            cells.localLog("backup complete");
            /** @type {boolean} */
            var p = false;
            try {
              self.copyDir(q, item.cepPath, true);
              /** @type {boolean} */
              p = true;
              cells.localLog("update success");
            } catch (t) {
              cells.localLog("update error");
              self.copyDir(dir, options.pluginDir(), false);
              /** @type {boolean} */
              p = false;
              cells.localLog("recover backup");
            }
            self.deleteFileSync(q);
            if (p) {
              saveNotifs(void 0);
            } else {
              cells.localLog("prompt update");
              if (item.needUpdate) {
                item.needUpdate();
              }
              taRegisterTool("");
            }
          }, function(unused) {
            taRegisterTool(unused);
          });
        }, function(unused) {
          taRegisterTool(unused);
        });
      });
    }, self;
  }();
  e.UpdaterSample = newOrg;
}, function(m, canCreateDiscussions) {
  m.exports = require("https");
}, function(canCreateDiscussions, e, n) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var newOrg = function() {
    /**
     * @return {undefined}
     */
    function request() {
      /** @type {null} */
      this.onComplete = null;
      /** @type {null} */
      this.onProgress = null;
      /** @type {null} */
      this.onError = null;
      /** @type {null} */
      this.onAbort = null;
      /** @type {null} */
      this._data = null;
      this.load_handler = this.load_handler.bind(this);
      this.error_handler = this.error_handler.bind(this);
      this.abort_handler = this.abort_handler.bind(this);
      this.progress_handler = this.progress_handler.bind(this);
    }
    return Object.defineProperty(request.prototype, "data", {
      get : function() {
        return this._data;
      },
      enumerable : true,
      configurable : true
    }), request.prototype.post = function(url, data) {
      this.close();
      /** @type {null} */
      this._data = null;
      /** @type {!XMLHttpRequest} */
      this._xhr = new XMLHttpRequest;
      this._xhr.open("POST", url, true);
      /** @type {string} */
      this._xhr.responseType = "arraybuffer";
      this._xhr.send(data.buffer);
      this._xhr.addEventListener("load", this.load_handler, false);
      this._xhr.addEventListener("error", this.error_handler, false);
      this._xhr.addEventListener("abort", this.abort_handler, false);
      this._xhr.addEventListener("progress", this.progress_handler, false);
    }, request.prototype.get = function(value) {
      this.close();
      /** @type {null} */
      this._data = null;
      /** @type {!XMLHttpRequest} */
      this._xhr = new XMLHttpRequest;
      this._xhr.open("GET", value, true);
      /** @type {string} */
      this._xhr.responseType = "arraybuffer";
      this._xhr.send(null);
      this._xhr.addEventListener("load", this.load_handler, false);
      this._xhr.addEventListener("error", this.error_handler, false);
      this._xhr.addEventListener("abort", this.abort_handler, false);
      this._xhr.addEventListener("progress", this.progress_handler, false);
    }, request.prototype.load_handler = function(event) {
      var data = event.currentTarget.response;
      /** @type {null} */
      var newData = null;
      if (data instanceof ArrayBuffer) {
        newData = this.toBuffer(data);
      } else {
        if (data instanceof Buffer) {
          newData = data;
        }
      }
      /** @type {null} */
      this._data = newData;
      if (this.onComplete) {
        this.onComplete(this, this.data);
      }
    }, request.prototype.error_handler = function(err) {
      if (this.onError) {
        this.onError(this, this._xhr.status, err.message);
      }
    }, request.prototype.abort_handler = function(canCreateDiscussions) {
      if (this.onAbort) {
        this.onAbort(this);
      }
    }, request.prototype.progress_handler = function(e) {
      if (this.onProgress) {
        this.onProgress(this, e.loaded, e.total);
      }
    }, request.prototype.close = function() {
      if (this._xhr) {
        this._xhr.abort();
        this._xhr.removeEventListener("load", this.load_handler, false);
        this._xhr.removeEventListener("error", this.error_handler, false);
        this._xhr.removeEventListener("abort", this.abort_handler, false);
        this._xhr.removeEventListener("progress", this.progress_handler, false);
        /** @type {null} */
        this._xhr = null;
      }
    }, request.prototype.toBuffer = function(data) {
      var buffer = new Buffer(data.byteLength);
      /** @type {!Uint8Array} */
      var view = new Uint8Array(data);
      /** @type {number} */
      var i = 0;
      for (; i < buffer.length; ++i) {
        /** @type {number} */
        buffer[i] = view[i];
      }
      return buffer;
    }, request;
  }();
  e.URLLoader = newOrg;
}, function(canCreateDiscussions, fields, require) {
  /**
   * @param {!Object} params
   * @param {!Function} done
   * @return {?}
   */
  function start(params, done) {
    var platform = options.process.platform;
    if ("win32" === platform) {
      return function(instance, resolve) {
        /** @type {string} */
        var value = "";
        if ("tmpdir" in options.os ? value = options.os.tmpdir() : "tmpDir" in options.os && (value = options.os.tmpDir()), !value) {
          return resolve(new Error("os.tmpdir() not defined."));
        }
        get(instance, function(result, uuid) {
          return result ? resolve(result) : (instance.uuid = uuid, instance.path = options.path.join(value, instance.uuid), /"/.test(instance.path) ? resolve(new Error("instance.path cannot contain double-quotes.")) : (instance.pathElevate = options.path.join(instance.path, "elevate.vbs"), instance.pathExecute = options.path.join(instance.path, "execute.bat"), instance.pathCommand = options.path.join(instance.path, "command.bat"), instance.pathStdout = options.path.join(instance.path, "stdout"), 
          instance.pathStderr = options.path.join(instance.path, "stderr"), instance.pathStatus = options.path.join(instance.path, "status"), void options.fs.mkdir(instance.path, function(defaultSounds) {
            /**
             * @param {string} url
             * @param {?} rawRef
             * @param {string} name
             * @return {undefined}
             */
            function resolve(url, rawRef, name) {
              callback(instance.path, function(result) {
                return url ? resolve(url) : result ? resolve(result) : void resolve(void 0, rawRef, name);
              });
            }
            if (defaultSounds) {
              return resolve(defaultSounds);
            }
            !function(addedRenderer, saveNotifs) {
              saveNotifs();
            }(0, function(fileData) {
              if (fileData) {
                return resolve(fileData);
              }
              !function(instance, callback) {
                /** @type {!Array} */
                var drilldownLevelLabels = [];
                drilldownLevelLabels.push("@echo off");
                drilldownLevelLabels.push('call "' + instance.pathCommand + '" > "' + instance.pathStdout + '" 2> "' + instance.pathStderr + '"');
                drilldownLevelLabels.push('(echo %ERRORLEVEL%) > "' + instance.pathStatus + '"');
                /** @type {string} */
                var currentThing = drilldownLevelLabels.join("\r\n");
                options.fs.writeFile(instance.pathExecute, currentThing, "utf-8", callback);
              }(instance, function(fileData) {
                if (fileData) {
                  return resolve(fileData);
                }
                !function(instance, cb) {
                  var instanceFillValue = options.process.cwd();
                  if (/"/.test(instanceFillValue)) {
                    return cb(new Error("process.cwd() cannot contain double-quotes."));
                  }
                  /** @type {!Array} */
                  var command = [];
                  command.push("@echo off");
                  command.push("chcp 65001>nul");
                  command.push('cd "' + instanceFillValue + '"');
                  command.push(instance.command);
                  /** @type {string} */
                  var currentThing = command.join("\r\n");
                  options.fs.writeFile(instance.pathCommand, currentThing, "utf-8", cb);
                }(instance, function(fileData) {
                  if (fileData) {
                    return resolve(fileData);
                  }
                  !function(instance, readFileComplete) {
                    /** @type {!Array} */
                    var drilldownLevelLabels = [];
                    drilldownLevelLabels.push("powershell.exe");
                    drilldownLevelLabels.push("Start-Process");
                    drilldownLevelLabels.push("-FilePath");
                    drilldownLevelLabels.push("\"'" + instance.pathExecute.replace(/'/g, "`'") + "'\"");
                    drilldownLevelLabels.push("-WindowStyle hidden");
                    drilldownLevelLabels.push("-Verb runAs");
                    /** @type {string} */
                    var cmd = drilldownLevelLabels.join(" ");
                    options.child.exec(cmd, function(err, n, i) {
                      if (err) {
                        if (/canceled by the user/i.test(err)) {
                          readFileComplete(err);
                        } else {
                          readFileComplete(err);
                        }
                      } else {
                        readFileComplete();
                      }
                    }).stdin.end();
                  }(instance, function(post) {
                    if (post) {
                      return resolve(post);
                    }
                    !function checkFile(instance, callback) {
                      options.fs.stat(instance.pathStatus, function(err, fileOne) {
                        if (err && "ENOENT" === err.code || fileOne.size < 2) {
                          setTimeout(function() {
                            options.fs.stat(instance.pathStdout, function(i) {
                              if (i) {
                                return callback(err);
                              }
                              checkFile(instance, callback);
                            });
                          }, 1E3);
                        } else {
                          if (err) {
                            callback(err);
                          } else {
                            callback();
                          }
                        }
                      });
                    }(instance, function(post) {
                      if (post) {
                        return resolve(post);
                      }
                      !function(instance, fn) {
                        options.fs.readFile(instance.pathStatus, "utf-8", function(source_url, result) {
                          if (source_url) {
                            return fn(source_url);
                          }
                          options.fs.readFile(instance.pathStdout, "utf-8", function(source_url, lastErrorObject) {
                            if (source_url) {
                              return fn(source_url);
                            }
                            options.fs.readFile(instance.pathStderr, "utf-8", function(connection, value) {
                              if (connection) {
                                return fn(connection);
                              }
                              if (0 === (result = parseInt(result.trim(), 10))) {
                                fn(void 0, lastErrorObject, value);
                              } else {
                                /** @type {string} */
                                (connection = new Error("Command failed: " + instance.command + "\r\n" + value)).code = result;
                                fn(connection, lastErrorObject, value);
                              }
                            });
                          });
                        });
                      }(instance, resolve);
                    });
                  });
                });
              });
            });
          })));
        });
      }(params, done);
    }
    /** @type {!Array} */
    var command = [];
    command.push("/usr/bin/sudo");
    command.push("-n");
    command.push("-E");
    command.push("--");
    command.push(params.command);
    /** @type {string} */
    var full_conversation_url = command.join(" ");
    options.child.exec(full_conversation_url, function(generatedImageError, bears, redirectUri) {
      if (/sudo: /i.test(redirectUri)) {
        if ("linux" === platform) {
          return function(request, cb) {
            !function(addedRenderer, cb) {
              /** @type {number} */
              var i = 0;
              /** @type {!Array} */
              var paths = ["/usr/bin/kdesudo", "/usr/bin/pkexec"];
              !function check() {
                if (i === paths.length) {
                  return cb(new Error("Unable to find pkexec or kdesudo."));
                }
                var result = paths[i++];
                options.fs.stat(result, function(e) {
                  if (e) {
                    if ("ENOTDIR" === e.code) {
                      return check();
                    }
                    if ("ENOENT" === e.code) {
                      return check();
                    }
                    cb(e);
                  } else {
                    cb(void 0, result);
                  }
                });
              }();
            }(0, function(n, type) {
              if (n) {
                return cb(n);
              }
              /** @type {!Array} */
              var command = [];
              command.push('"' + r(type) + '"');
              if (/kdesudo/i.test(type)) {
                command.push("--comment", '"' + request.options.name + ' needs administrative privileges. Please enter your password."');
                command.push("--");
              } else {
                if (/pkexec/i.test(type)) {
                  command.push("--disable-internal-agent");
                }
              }
              command.push(request.command);
              /** @type {string} */
              var full_conversation_url = command.join(" ");
              options.child.exec(full_conversation_url, function(exception, appRet, ipAddress) {
                if (exception) {
                  if (/No authentication agent found/.test(ipAddress)) {
                    /** @type {!Error} */
                    exception = new Error(error);
                  } else {
                    if (/Request dismissed|Command failed/i.test(exception)) {
                      /** @type {!Error} */
                      exception = new Error(err);
                    }
                  }
                }
                cb(exception, appRet, ipAddress);
              });
            });
          }(params, done);
        }
        if ("darwin" === platform) {
          return function(p, f) {
            /** @type {string} */
            var c = "";
            return "tmpdir" in options.os ? c = options.os.tmpdir() : "tmpDir" in options.os && (c = options.os.tmpDir()), c ? options.process.env.USER ? void get(p, function(widthCtrl, cid) {
              /**
               * @param {!Error} type
               * @param {?} status
               * @param {string} e
               * @return {undefined}
               */
              function remove(type, status, e) {
                callback(options.path.dirname(p.path), function(t) {
                  return type ? f(type) : t ? f(t) : void f(void 0, status, e);
                });
              }
              if (widthCtrl) {
                return f(widthCtrl);
              }
              /** @type {string} */
              p.uuid = cid;
              p.path = options.path.join(c, p.uuid, p.options.name + ".app");
              (function(p, whilstNext) {
                var f = options.path.dirname(p.path);
                options.fs.mkdir(f, function(listErr) {
                  if (listErr) {
                    return whilstNext(listErr);
                  }
                  var path = options.path.join(f, "sudo-prompt-applet.zip");
                  options.fs.writeFile(path, currentThing, "base64", function(listErr) {
                    if (listErr) {
                      return whilstNext(listErr);
                    }
                    /** @type {!Array} */
                    var command = [];
                    command.push("/usr/bin/unzip");
                    command.push("-o");
                    command.push('"' + r(path) + '"');
                    command.push('-d "' + r(p.path) + '"');
                    /** @type {string} */
                    var full_conversation_url = command.join(" ");
                    options.child.exec(full_conversation_url, whilstNext);
                  });
                });
              })(p, function(down) {
                if (down) {
                  return remove(down);
                }
                !function(instance, cb) {
                  if (!instance.options.icns) {
                    return cb();
                  }
                  options.fs.readFile(instance.options.icns, function(tile, resBuf) {
                    if (tile) {
                      return cb(tile);
                    }
                    var icns = options.path.join(instance.path, "Contents", "Resources", "applet.icns");
                    options.fs.writeFile(icns, resBuf, cb);
                  });
                }(p, function(tile) {
                  if (tile) {
                    return remove(tile);
                  }
                  !function(value, cb) {
                    var xmlparser = r(options.path.join(value.path, "Contents", "Info.plist"));
                    var key = r("CFBundleName");
                    /** @type {string} */
                    var instanceFillValue = value.options.name + " Password Prompt";
                    if (/'/.test(instanceFillValue)) {
                      return cb(new Error("Value should not contain single quotes."));
                    }
                    /** @type {!Array} */
                    var command = [];
                    command.push("/usr/bin/defaults");
                    command.push("write");
                    command.push('"' + xmlparser + '"');
                    command.push('"' + key + '"');
                    command.push("'" + instanceFillValue + "'");
                    /** @type {string} */
                    var full_conversation_url = command.join(" ");
                    options.child.exec(full_conversation_url, cb);
                  }(p, function(down) {
                    if (down) {
                      return remove(down);
                    }
                    !function(value, callback) {
                      var path = options.path.join(value.path, "Contents", "MacOS", "sudo-prompt-command");
                      /** @type {!Array} */
                      var args = [];
                      var macro = options.process.cwd();
                      args.push('cd "' + r(macro) + '"');
                      args.push(value.command);
                      /** @type {string} */
                      var currentThing = args.join("\n");
                      options.fs.writeFile(path, currentThing, "utf-8", callback);
                    }(p, function(down) {
                      if (down) {
                        return remove(down);
                      }
                      !function(value, orderby) {
                        var binary = options.path.join(value.path, "Contents", "MacOS", "applet");
                        var execOptions = {
                          cwd : options.path.dirname(binary)
                        };
                        options.child.exec("./" + options.path.basename(binary), execOptions, orderby);
                      }(p, function(down) {
                        if (down) {
                          return remove(down);
                        }
                        !function(value, cb) {
                          var path = options.path.join(value.path, "Contents", "MacOS");
                          options.fs.readFile(options.path.join(path, "code"), "utf-8", function(error, result) {
                            if (error) {
                              if ("ENOENT" === error.code) {
                                return cb(new Error(err));
                              }
                              cb(error);
                            } else {
                              options.fs.readFile(options.path.join(path, "stdout"), "utf-8", function(fallbackReleases, formattedSections) {
                                if (fallbackReleases) {
                                  return cb(fallbackReleases);
                                }
                                options.fs.readFile(options.path.join(path, "stderr"), "utf-8", function(error, response) {
                                  if (error) {
                                    return cb(error);
                                  }
                                  if (0 === (result = parseInt(result.trim(), 10))) {
                                    cb(void 0, formattedSections, response);
                                  } else {
                                    /** @type {string} */
                                    (error = new Error("Command failed: " + value.command + "\n" + response)).code = result;
                                    cb(error, formattedSections, response);
                                  }
                                });
                              });
                            }
                          });
                        }(p, remove);
                      });
                    });
                  });
                });
              });
            }) : f(new Error("env['USER'] not defined.")) : f(new Error("os.tmpdir() not defined."));
          }(params, done);
        }
        done(new Error("Platform not yet supported."));
      } else {
        done(generatedImageError, bears, redirectUri);
      }
    });
  }
  /**
   * @param {string} string
   * @return {?}
   */
  function r(string) {
    if ("string" != typeof string) {
      throw new Error("Expected a string.");
    }
    return string.replace(/"/g, '\\"');
  }
  /**
   * @param {string} e
   * @param {!Function} next
   * @return {?}
   */
  function callback(e, next) {
    if ("string" != typeof e || !e.trim()) {
      return next(new Error("Argument path not defined."));
    }
    /** @type {!Array} */
    var command = [];
    if ("win32" === options.process.platform) {
      if (/"/.test(e)) {
        return next(new Error("Argument path cannot contain double-quotes."));
      }
      command.push('rmdir /s /q "' + e + '"');
    } else {
      command.push("/bin/rm");
      command.push("-rf");
      command.push('"' + r(options.path.normalize(e)) + '"');
    }
    /** @type {string} */
    var full_conversation_url = command.join(" ");
    options.child.exec(full_conversation_url, next);
  }
  /**
   * @param {!Object} params
   * @param {!Function} cb
   * @return {undefined}
   */
  function get(params, cb) {
    options.crypto.randomBytes(256, function(n, buff1) {
      if (n) {
        /** @type {string} */
        buff1 = Date.now() + "" + Math.random();
      }
      var hash = options.crypto.createHash("SHA256");
      hash.update("sudo-prompt-3");
      hash.update(params.options.name);
      hash.update(params.command);
      hash.update(buff1);
      var html = hash.digest("hex").slice(-32);
      if (!html || "string" != typeof html || 32 !== html.length) {
        return cb(new Error("Expected a valid UUID."));
      }
      cb(void 0, html);
    });
  }
  /**
   * @param {!Object} stderr
   * @return {?}
   */
  function cb(stderr) {
    return !(!/^[a-z0-9 ]+$/i.test(stderr) || 0 === stderr.trim().length || stderr.length > 70);
  }
  Object.defineProperty(fields, "__esModule", {
    value : true
  });
  var options = {
    child : require(7),
    crypto : require(14),
    fs : require(2),
    os : require(6),
    path : require(3),
    process : process,
    util : require(35)
  };
  /**
   * @return {?}
   */
  fields.sudo = function() {
    /** @type {!Array} */
    var argumentsArray = [];
    /** @type {number} */
    var i = 0;
    for (; i < arguments.length; i++) {
      argumentsArray[i] = arguments[i];
    }
    if (arguments.length < 1 || arguments.length > 3) {
      throw new Error("Wrong number of arguments.");
    }
    var route = arguments[0];
    var result = {};
    /**
     * @param {(Error|string)} gistId
     * @return {undefined}
     */
    var cb = function(gistId) {
    };
    if ("string" != typeof route) {
      throw new Error("Command should be a string.");
    }
    if (2 === arguments.length) {
      if ("object" == typeof arguments[1]) {
        result = arguments[1];
      } else {
        if ("function" != typeof arguments[1]) {
          throw new Error("Expected options or callback.");
        }
        cb = arguments[1];
      }
    } else {
      if (3 === arguments.length) {
        if ("object" != typeof arguments[1]) {
          throw new Error("Expected options to be an object.");
        }
        if (result = arguments[1], "function" != typeof arguments[2]) {
          throw new Error("Expected callback to be a function.");
        }
        cb = arguments[2];
      }
    }
    if (/^sudo/i.test(route)) {
      return cb(new Error('Command should not be prefixed with "sudo".'));
    }
    if (void 0 === result.name) {
      var e = options.process.title;
      if (!cb(e)) {
        return cb(new Error("process.title cannot be used as a valid name."));
      }
      result.name = e;
    } else {
      if (!cb(result.name)) {
        /** @type {string} */
        var t = "";
        return t = t + "options.name must be alphanumeric only ", t = t + "(spaces are allowed) and <= 70 characters.", cb(new Error(t));
      }
    }
    if (void 0 !== result.icns) {
      if ("string" != typeof result.icns) {
        return cb(new Error("options.icns must be a string if provided."));
      }
      if (0 === result.icns.trim().length) {
        return cb(new Error("options.icns must not be empty if provided."));
      }
    }
    var method = options.process.platform;
    if ("darwin" !== method && "linux" !== method && "win32" !== method) {
      return cb(new Error("Platform not yet supported."));
    }
    start({
      command : route,
      options : result,
      uuid : void 0,
      path : void 0
    }, cb);
  };
  /** @type {string} */
  var currentThing = "UEsDBAoAAAAAAO1YcEcAAAAAAAAAAAAAAAAJABwAQ29udGVudHMvVVQJAAPNnElWLZEQV3V4CwABBPUBAAAEFAAAAFBLAwQUAAAACACgeXBHlHaGqKEBAAC+AwAAEwAcAENvbnRlbnRzL0luZm8ucGxpc3RVVAkAA1zWSVYtkRBXdXgLAAEE9QEAAAQUAAAAfZNRb5swFIWfl1/BeA9OpSmqJkqVBCJFop1VyKQ9Ta59S6wa27NNCfv1M0naJWTsEXO+c8+9vo7v97UI3sBYruRdeBPNwgAkVYzL6i7cluvpbXifTOLP6bdV+QNngRbcugBvl/lmFYRThBZaC0AoLdMA55uiDLwHQtljGIQ75/RXhNq2jUiviqiqe6FF2CgNxnW5N5t6IGKOhb7M0f0ijj9lnLpk8il+hS5ZrZeNZAIWQqj2ge+B5YoSwX8T5xEbo17ktc40gIZQCm8glK5BuieovP5Dbp3xHSeZrHyCXYxO3wM+2wNtHHkWMAQP/bkxbkOVXPMxKuK0Dz6CMh+Wv3AwQ9gPM7INU1NtVK3Ha8sXlfoB+m6J6b4fRzv0mkezMf6R1Fe5MbG2VYYF+L+lMaGvpIKy01cOC4zzMazYKeNOQYuDYkjfjMcteCWJa8w/Zi2ugubFA5e8buqisw7qU81ltzB0xx3QC5/TFh7J/e385/zL+7+/wWbR/LwIOl/dvHiCXw03YFfEPJ9dwsWu5sV2kwnod3QoeLeL0eGdJJM/UEsDBAoAAAAAAHSBjkgAAAAAAAAAAAAAAAAPABwAQ29udGVudHMvTWFjT1MvVVQJAAMbpQ9XLZEQV3V4CwABBPUBAAAEFAAAAFBLAwQUAAAACABVHBdH7Dk4KTIIAADIYQAAFQAcAENvbnRlbnRzL01hY09TL2FwcGxldFVUCQADMiPZVVOlD1d1eAsAAQT1AQAABBQAAADtnG9sHEcVwGfti7M1/rONLNVtXHqpzsipis+pHOSWFOzEm25at3XrJI2ozbK+W/suuds79vaSuCKSpaOIxRy1+NSPRPAhlWj7AVRaQCWpTRz+CEo+RSKCCho4K67kVhUyAeV4b3fWt17fXZqKFgHvp8zO3/dmdmfPmtl5L7+8/uPXGWMNELZCaGRMgmjHIlxaBCibdcoGsewCljGCIAiCIAiCIAiCIP7r+M21d67zjb/zEaAdwr1bGHuWMQH2/2wAgqqODj0kf0F+8nGfoFRbJ8p9U0C5g/KRgwEZqZLGfrfwwJx+LP2kVWkelD9zJ2NfBr1nWt2xrhNisxWZ3Ex6MpNSc1Z+soqOO+5i7JMYt7vj9BC5jiZXBwirCT2V1c0qOgZAxwMYt9cbRyxnmUljusa9mKBjGON2tgG/PlXNGyeSRlxNGlOZKjpeBR0KxsFx+MB7VJy5GB46OOSrCLPKfEjrH3/gFry+4zOpuH8sm+VF5srW6ltVjZQ3HVnL3KRDDLsflMSADpyDyjuR0urp6AAdHRgHdOD9iOs6Ypl0OmPUupeecOW19OsQAmn3tzBy4LFH5OED3jz0MbYouM8D460BOdTXCaEF6tsgLkF8GeJPQBj16Rb4PTf5xl2NH4J8a5Vy1N3F3OcZzefMaCo5GeVTuJ2P4cUf/aH5qbbP73/utpfeevdbLzwfYfy+Q80woGan/1E+ljo/703g77IaOJY479t5rqFLDag9OjaTs/R0dCQ5aWrmTHS/qaX1ExnzWC66L2PqY7p5PBnTc71TXnn0sG7mkhkjFx3a0IL30e/rQxB+EXL68J4BBLe73r298DySk5tlGPtJY1BmOhZTc727PBH2Ke+ZhF35nTyP80oQBEEQBPFRcJTZVwpvrxZWpLmJkN0VKT4q2iORUGFBOPfnBuFX9nhELOG67f1D9pWxpw4XVrrmTklz+ZY5Wfwurm/t3ffi9cE+uM41vYbbj2fP5kNXt9sXiopwVRj6xhPlr160mttfuVi4Fs2vXv2rfc5u7UeZfxQ+y4pPh/JrpyUUBjmrofzmadGXKf0eui7KK/ZwJLQUiuRAe+mLUFQ+tFKUV3npd7AU9ytz8iqIiXYoUnoBsqdxDbXk3CXcRov9lYhoW5EQjBxb4NoSY9iQsvn5+QSuusrduAybL3eHIIIbLqyIS9CHlY3loB8rldVKuLfyOsE1+a6zhUVxYsFp3Amqz8tr7Lz8dza1JF8TmC3/syivYVtcfxcWOycWQDvuLcrdnc61y7mGnWsErgmsXDbK5TKkscnypJvGhsuH3TQ2X37YTaPQ8ucw7W6t1LR2TFfjekqb0SGTiedTOmz0klZSSyWf0U01pqVSufXGmThsjs20OpU3Yrjuxbnu4u+GP8b1LO6PcX2L4Q6+v8Q07u9aQFLy71Ckt54TIfjfNdzfDkMYhTAOIXHXh39vCYIgCIIgCIIgCIL4z3Nm+84/Ci1Nn8b0ryHsgbBX1rbgOXD7LZJzNtrC0/gFqYOn8csQ/GONguQchPXzcvy+9CBzvk84HxkO+tJH3bRz5Fb0pb/nS3/fl/6BL/2aL43faLzz3Wbmju8W5p6pttaoR9THjgyZ0zEeH2eqqmbNzLShpXVIpxOqflKP5S1dTehaXDeZqhvHk2bGYOo+LZXal0lnM4ZuWMPJXFazYgmmPp7VjWF9SsunrPVa1HpMn0lPm2r8hGZO3aea+nQyZ+mmmtNjFp5i4oG0lTChE+eDj2pm8lbSgDFoln4yCRp00zQyEDmZtBZLbGxnanHzgWh092d29e/uv+/f+DIQBEEQBEEQBEEQ/7P81rX/FxoZm/Xs/5UmtP8PO/W3M9fGvKoPAEfYXLQJ1HOpmk+AJx80OOb5m/URGG9z9c378rVs9F15tPXP1dS3wvVtC+Q9/H4DFX21fQcY9zvo9eXrj6++D0Af1zfqy9eyx3f16QnVMayufr+zXN+sL99YRx/O69er+RdIgXkNxJv9DfBTDIxLPa6Zudr6enz5euO6ke9Bj7TRzr0noK+JbczfyA9hgOvr9OX98t57XNFX3ydhlOsL+2T8+oK/ucrvNOCfEHbbXhAqeebLB/0V7oYp7+Pt8PsZWnl1+urRpAn7SUCcYBX/hkth95kd2cFYllX3bxB4+xCrzcCO6v4PbXzo1fwbEM/H4ds/f/nCgZH+8k+j0vNPv7Jlz7qPQ1PFx+FVPoZ76ozj42K87YP9/cT7xuf9UfpSeP0MsJvzp0A8/4g3w+78ef4R+F4QBEEQBPH/w1Gm2FeUwturytwpUSnmJfta4Q3h3J8aFeE9xf7d1ZBSOCcqhftZ/m+YKuG6wV4qaQzdGED0Z2jJ/zpa9ZcegjIF7fkVaIBrt11nJxYOOepXpPPyKjsvvytOLcnvCWxJfh87V+xTa0rx1Kpj0a8UFqWJhXL3fgHt9xXn+rCz7Bop3rkTEkNj5e7bIZ7HNRZb/ku5XE6g58HyZUzdj6mLjh1/Pbt7XMt5dvfvtLl1Fbv7BtbhrtyEPW6V038H1yE88yQTTkqC1LJVnIeaCNe7dr3sEPEe6lCb9LWGfa3efvNG8pe5fF8NeW8g3n7jCI+/xOOEVH19KvF9oudHH2n/YOtYgiAIgiAIgiAIgiA+fm69mx3aO8bYtkHn/xlwDq8nkwaavz9h9swzc+DWwRrm71A5CJVVjeChTtk26Fqwu0fxQjUL+9vqHVV/KC53OUd+bJxVfBkw7/gzCO5pr3dOK/g+WUQDeZlV/A2QRwJ5THjn1/xcd9BfhlT1KbgpVwLn+W2amGr2//8CUEsDBBQAAAAIAAVHj0ga7FYjfQEAAKoCAAAhABwAQ29udGVudHMvTWFjT1Mvc3Vkby1wcm9tcHQtc2NyaXB0VVQJAAOJkBBXipAQV3V4CwABBPUBAAAEFAAAAI1SO08cMRDu91cMHIKGxUB5xSGEUqTlFKWMvPYca+EXnjGXy6/PeNcg0qVay+PvObs5U5OLatI0DxvYIwNVm4BdQGIdMhxSkauJ8K1i7FOjvSdwB2A+/WJnXpEJdEGwjvTk0W6HhTW8WldgzKDedVF2Ug2tLn7svz3DDpTFdxWr93C/u7wbVKWyoDhVM/8XZAOPOXvcm+IyXxGcizeaUca0XJ1D0CfQnlEysE2VwbuII0br4gvdCMF37m9IoC39+oxTO2EpS8oZJdtRS0aIKY5/sCQoyLVEMMki6Ghl0BGN9SeuICkPIctXDHDDSB9oGEQi1yZWUAda8EZnIcR/eIOOVao+9TrbkpYFjLmkkHk0KYSGvdt12/e71cP6Hs2c4OJBemtsYusplVX+GLHQ7DKkQ098/ZF38dLEpRCeNUMlMW90BIseeQkWtuu2qKmIyDHCuqFuo1N11Ud/1Cf6CHb7Sfxld2ATklQoUGEDActfZ5326WU74G/HcDv8BVBLAwQKAAAAAADtWHBHqiAGewgAAAAIAAAAEAAcAENvbnRlbnRzL1BrZ0luZm9VVAkAA82cSVYqkRBXdXgLAAEE9QEAAAQUAAAAQVBQTGFwbHRQSwMECgAAAAAAm3lwRwAAAAAAAAAAAAAAABMAHABDb250ZW50cy9SZXNvdXJjZXMvVVQJAANW1klWLZEQV3V4CwABBPUBAAAEFAAAAFBLAwQUAAAACACAeXBHfrnysfYGAAAf3AAAHgAcAENvbnRlbnRzL1Jlc291cmNlcy9hcHBsZXQuaWNuc1VUCQADH9ZJVnGlD1d1eAsAAQT1AQAABBQAAADt3Xk81Hkcx/Hvb5yVo5bGsVlKbcpRRqFlGZGS5JikRBIdI0OZttMZloqiYwrVjD1UqJaUokTRubG72bZVjqR1VZNjp2XEGo9H+9gt+9h/9tHx8H7N4/fw5MHjYeaPz+P7+P7x/bL9griEPNBm+001J0S+ZbvL/NmKwzWHE0IUHebYuRFCEckjL9v/xSvk2EpCpBXZtrYuDra2Oi4hwSvZgSsIMU9MdPdePcZd1aqQu0p3fDkrcFrs+mPWihMU9y6clp5XEFFdbRrEczCtGtfkL3pWfvBGublJ4ct051kuocYtaaqll/IjdfR+V75vlTdl//AJVZU6elZ5f0S7NO3MaE2xMElhF+TUrHgW2nFYeGTrs/OrhDJN5zMX8ZJVKXrqSUM1Rj03bnf85/pJMXECNdl0D1ctfe/j82imziM2nllSa3t5q8+vP1f38k/k22uN1lmnvfz0b8dGxO+mnh91v7WB2tKdrG3d4vmJaHlTvjGzdMqWcw/9frnCtQpPZK9sMKi/Ey/jzgqIPzBy9/dlf9griI2/u+sjcApozWx6/NXytC+qBTlrhb69fE7J6tgOzpWjFSl8qxihr5dYf/qExoeupY6Ze/j2PfL1azhhZ8fU3eelJY+ylk16UJN6KmOU0M4r+75cZhH/mxNndowNb4wx7TCoN4yvMGu8ySq5l5W5t+xQyYbS/Ome7e0W0sXbC5aktl0LEXNYR9obH7dMT721dbNdT/eFzXNEYSH8GU+bQ5s6YniGcj3fHtgXPbo0Oj4i3d5G1Fjfm/Ng7kgpjQDNxw4RRnu+Vloy5ZE3J6OpwlFBzaxS25He2h3lJuizO70zJPLUYtks14RE5yrD8y2tXa5l5Wqh/NBY06yoiCLF08Nk9A5Ojbs43GmR1Ch/PaZsLf3e6uPRSrIM1ROqGjt80leqfdxYbNn+WV7K7ZKiy/t6r1/3ie46V5432T/Oahs9V7NnVzb9zoq2rFgvPxXrcAMzmvWnGjof/RpdsZThIEpex6DGbd5h6STaOyZXxV/YfW9u4KyllmZ3X15IMHHLSJtVPSOvULCsz2TyPC/WL9kGSme/1L01SSzjfbHnqk+OV7OBmevZeo3DBR7lXT5drT0MkX5PwDd1EQ0ebfkh1zy/L8ydd+VJ4CLuRndNjuwj+vMfU8q2l2l1rGtr8FC2D+fdSGk81eltuTjYSMk++4BMd0DXQo35iXbZndGdcXkGFyeG6b28evF22M2w22HlYSXetGSLW4cfFT00WqvN9bkqCujQ9KzdSt+snr+qmbcme+5Y3cDRn9BDLps+dPVltE9UkPeb6XovineiVUznTznyuZaSn/ZvR8VeRUYLqe3iHFqnU6+7+4LmtfsmaS0MdjIvslFJGG/rn7DPdMGLcx4d6eP2Oz92Y49kWbBUjudU2ijHnc7YIODQxD1aPx8PynVr+cmvJoy2+M5nQa2Kt0dvdPxp73LNU6aTeaktTfHH1L+8Pm/XalZcFcfzYxlhTefuzjRGobLKEqPZh8QKxUXWbU/ERvW78ghvTGTUNd0g9YqbcjUy5h0xVbn3S7SS54SOqKt88UR0qZuxKfxlZfODUm52o2HkGTOLw5dqhevvWjH7ssiqxAhKwA91d1nWG9w/GJIc7GwWbKKe/mAsGRqXBb87P10jH8/0LY6kpGQV1KcuAwAAeCt4LiVFWRJKs4DJ6p9GxGHWfLuTM5dt61/pzCCE7vLmSodGJM/ASqdzU2U3VjpY6WClg5XOICudUaI3VjocuWCsdAAAAAAAAAAAAAAAAD5o1Gmr054TSoqWxPvnfrLxVEIc29/cT5YmkmdgPzlCSz8a+8nYT8Z+MvaTB9lPZpJX+8lRktFyRdDF0m6IdcF2MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8ddD8G5oJkUuQnAXwnvxLAAAAADDkEFURRckVE6rIv+Tb1078MiZEetubJ34RHckzcOIXd8uWTpz4hRO/cOIXTvwa5MQvoidZ5S8a9h8nfl1QVhipQ6jyyWeuvTaBGP3D5fwgE4gpeQYmUCZ7XQ0mECYQJhAm0GATyOfVmYOU4sAdNi+cOUpm/9cdNv2Di8kkFN3mYOtrg8sE14xicGFwYXDhmlEAAD5w/Os1o8bTcM0oVjpY6WClg2tGAQAAAAAAAAAAAAAAgL/wb9eMBpow+r817yN/fwnJf33P5g78nWofEZNXD3u95GdSkh3o135/aL2i3vl/gHf/7t59oDlnDSHS8gQhNGQL8uWs6P+iwPYLDuIOzARqyM+E9QOfA3PIfw4IIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhND70J9QSwMEFAAAAAgA7VhwR/dYplZAAAAAagEAAB4AHABDb250ZW50cy9SZXNvdXJjZXMvYXBwbGV0LnJzcmNVVAkAA82cSVZTpQ9XdXgLAAEE9QEAAAQUAAAAY2BgZGBgYFQBEiDsxjDygJQDPlkmEIEaRpJAQg8kLAMML8bi5OIqIFuouKA4A0jLMTD8/w+S5AdrB7PlBIAEAFBLAwQKAAAAAADtWHBHAAAAAAAAAAAAAAAAJAAcAENvbnRlbnRzL1Jlc291cmNlcy9kZXNjcmlwdGlvbi5ydGZkL1VUCQADzZxJVi2REFd1eAsAAQT1AQAABBQAAABQSwMEFAAAAAgA7VhwRzPLNU9TAAAAZgAAACsAHABDb250ZW50cy9SZXNvdXJjZXMvZGVzY3JpcHRpb24ucnRmZC9UWFQucnRmVVQJAAPNnElWU6UPV3V4CwABBPUBAAAEFAAAACWJOw6AIBAFe08DCBVX2QbWhZgQ1vCpCHcXtHkzkzegtCDB5Xp/g0+UyihARnb70kL/UbvffYpjQODcmk9zKXListxCoUsZA7EQ5S0+dVq085gvUEsDBAoAAAAAAIeBjkgAAAAAAAAAAAAAAAAbABwAQ29udGVudHMvUmVzb3VyY2VzL1NjcmlwdHMvVVQJAAM9pQ9XLZEQV3V4CwABBPUBAAAEFAAAAFBLAwQUAAAACAAJgI5ICl5liTUBAADMAQAAJAAcAENvbnRlbnRzL1Jlc291cmNlcy9TY3JpcHRzL21haW4uc2NwdFVUCQADcaIPV1OlD1d1eAsAAQT1AQAABBQAAAB9UMtOAkEQrNldd9dhH3Dz6NGYiPIJHjTxLCZeF9iDcXEJC0RvfoI/4sEfIvoHPEQEhbIHvOok01U16emu7vOkaF2dXu7XqrUTcyMATkxCwYKthCAUbmciAQ8O11yFcGBfbF/4jR24WmCvWjwUeXqfNutn13XyEeYYHkqKam+kghdJGfUCvwIfB6jiGAX6aCHHETroCrYFe6IKNEXfGOXChc0v7HKpBRzdSFrtELvbumKVC80F/FIjzwe9bj91uZRuXJuwAiLjNi7DlsxPaJSUAMrCFOeac3GfpINennQ6d/0sA4z7JxzKiVCCV+YHAs74LuuIONUi//4RIoC63czrIbYQS3PFicWJcTMTv1JHmocmROLJ45gjzfHvXJqjf7ZZ4RT+61uaBbDipGh2ZanBcjh8/gFQSwECHgMKAAAAAADtWHBHAAAAAAAAAAAAAAAACQAYAAAAAAAAABAA7UEAAAAAQ29udGVudHMvVVQFAAPNnElWdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgAoHlwR5R2hqihAQAAvgMAABMAGAAAAAAAAQAAAKSBQwAAAENvbnRlbnRzL0luZm8ucGxpc3RVVAUAA1zWSVZ1eAsAAQT1AQAABBQAAABQSwECHgMKAAAAAAB0gY5IAAAAAAAAAAAAAAAADwAYAAAAAAAAABAA7UExAgAAQ29udGVudHMvTWFjT1MvVVQFAAMbpQ9XdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgAVRwXR+w5OCkyCAAAyGEAABUAGAAAAAAAAAAAAO2BegIAAENvbnRlbnRzL01hY09TL2FwcGxldFVUBQADMiPZVXV4CwABBPUBAAAEFAAAAFBLAQIeAxQAAAAIAAVHj0ga7FYjfQEAAKoCAAAhABgAAAAAAAEAAADtgfsKAABDb250ZW50cy9NYWNPUy9zdWRvLXByb21wdC1zY3JpcHRVVAUAA4mQEFd1eAsAAQT1AQAABBQAAABQSwECHgMKAAAAAADtWHBHqiAGewgAAAAIAAAAEAAYAAAAAAABAAAApIHTDAAAQ29udGVudHMvUGtnSW5mb1VUBQADzZxJVnV4CwABBPUBAAAEFAAAAFBLAQIeAwoAAAAAAJt5cEcAAAAAAAAAAAAAAAATABgAAAAAAAAAEADtQSUNAABDb250ZW50cy9SZXNvdXJjZXMvVVQFAANW1klWdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgAgHlwR3658rH2BgAAH9wAAB4AGAAAAAAAAAAAAKSBcg0AAENvbnRlbnRzL1Jlc291cmNlcy9hcHBsZXQuaWNuc1VUBQADH9ZJVnV4CwABBPUBAAAEFAAAAFBLAQIeAxQAAAAIAO1YcEf3WKZWQAAAAGoBAAAeABgAAAAAAAAAAACkgcAUAABDb250ZW50cy9SZXNvdXJjZXMvYXBwbGV0LnJzcmNVVAUAA82cSVZ1eAsAAQT1AQAABBQAAABQSwECHgMKAAAAAADtWHBHAAAAAAAAAAAAAAAAJAAYAAAAAAAAABAA7UFYFQAAQ29udGVudHMvUmVzb3VyY2VzL2Rlc2NyaXB0aW9uLnJ0ZmQvVVQFAAPNnElWdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgA7VhwRzPLNU9TAAAAZgAAACsAGAAAAAAAAQAAAKSBthUAAENvbnRlbnRzL1Jlc291cmNlcy9kZXNjcmlwdGlvbi5ydGZkL1RYVC5ydGZVVAUAA82cSVZ1eAsAAQT1AQAABBQAAABQSwECHgMKAAAAAACHgY5IAAAAAAAAAAAAAAAAGwAYAAAAAAAAABAA7UFuFgAAQ29udGVudHMvUmVzb3VyY2VzL1NjcmlwdHMvVVQFAAM9pQ9XdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgACYCOSApeZYk1AQAAzAEAACQAGAAAAAAAAAAAAKSBwxYAAENvbnRlbnRzL1Jlc291cmNlcy9TY3JpcHRzL21haW4uc2NwdFVUBQADcaIPV3V4CwABBPUBAAAEFAAAAFBLBQYAAAAADQANANwEAABWGAAAAAA=";
  /** @type {string} */
  var err = "User did not grant permission.";
  /** @type {string} */
  var error = "No polkit authentication agent found.";
}, function(module, canCreateDiscussions) {
  module.exports = require("util");
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var $ = require(0);
  var neatHelp = require(8);
  var newOrg = function() {
    /**
     * @param {?} id
     * @return {undefined}
     */
    function handler(id) {
      this.document = $(id);
      this.initView();
    }
    return handler.prototype.initView = function() {
      var t = this;
      this.mask = $(".update-prompt-mask");
      this.prompt = $(".update-prompt");
      var connection1 = this.prompt.find(".title-container");
      this.closeBtn = new neatHelp.IconButton(this.document, connection1, "./assets/close-icon-light.svg", "./assets/close-icon-dark.svg", null, ["close-btn"]);
      this.updateBtn = this.prompt.find(".update-btn");
      this.closeBtn.onClick(function() {
        return t.closeClick_handler();
      });
      this.updateBtn.click(function() {
        return t.updateClick_handler();
      });
    }, handler.prototype.show = function() {
      if (!this.prompt.hasClass("visible")) {
        this.prompt.addClass("visible");
      }
      if (!this.mask.hasClass("visible")) {
        this.mask.addClass("visible");
      }
    }, handler.prototype.closeClick_handler = function() {
      this.hide();
    }, handler.prototype.updateClick_handler = function() {
      if (this.onUpateClick) {
        this.onUpateClick();
      }
      this.hide();
    }, handler.prototype.hide = function() {
      this.prompt.removeClass("visible");
      this.mask.removeClass("visible");
    }, handler;
  }();
  e.UpdatePrompt = newOrg;
}, function(canCreateDiscussions, BeautifulProperties, require) {
  Object.defineProperty(BeautifulProperties, "__esModule", {
    value : true
  });
  var Breakpoints = require(38);
  var _handler = require(58);
  var $ = require(0);
  var mainPage = function() {
    /**
     * @param {!Object} gotoEnd
     * @return {undefined}
     */
    function t(gotoEnd) {
      /** @type {!Object} */
      this.document = gotoEnd;
      this.topQuickPart = new Breakpoints.TopQuickPart(this.document);
      this.btnList = new _handler.BtnList(this.document);
    }
    return t.prototype.display = function() {
      if (!$(".main-page").hasClass("visible")) {
        $(".main-page").addClass("visible");
      }
    }, t.prototype.hide = function() {
      $(".main-page").removeClass("visible");
    }, t;
  }();
  BeautifulProperties.MainPage = mainPage;
}, function(canCreateDiscussions, event, __webpack_require__) {
  Object.defineProperty(event, "__esModule", {
    value : true
  });
  var prepend = __webpack_require__(0);
  var Breakpoints = __webpack_require__(24);
  var NetMonitor = __webpack_require__(39);
  var _UiIcon = __webpack_require__(56);
  var _classlist = __webpack_require__(57);
  var relSet = function() {
    /**
     * @param {!Object} s
     * @return {undefined}
     */
    function buildButton(s) {
      var canvasLayersManager = this;
      /** @type {!Array} */
      this.quickBtns = [];
      /** @type {!Object} */
      this.document = s;
      this.buttonGroup = prepend(".top-quick-part .button-group");
      this.localBtn = new Breakpoints.IconToggleButton(this.document, this.buttonGroup, "./assets/local-icon-light.svg", "./assets/local-icon-dark.svg", "\u672c\u5730\u56fe\u7247");
      this.unsplashBtn = new Breakpoints.IconToggleButton(this.document, this.buttonGroup, "./assets/unsplash-icon-light.svg", "./assets/unsplash-icon-dark.svg", "unsplash\u56fe\u7247");
      this.huabanBtn = new Breakpoints.IconToggleButton(this.document, this.buttonGroup, "./assets/huaban-icon-light.svg", "./assets/huaban-icon-dark.svg", "\u82b1\u74e3\u56fe\u7247");
      this.localBtn.onSelectedChanged(function(j) {
        canvasLayersManager.onSelectedChanged(j);
      });
      this.unsplashBtn.onSelectedChanged(function(j) {
        canvasLayersManager.onSelectedChanged(j);
      });
      this.huabanBtn.onSelectedChanged(function(j) {
        canvasLayersManager.onSelectedChanged(j);
      });
      this.quickBtns.push(this.localBtn);
      this.quickBtns.push(this.unsplashBtn);
      this.quickBtns.push(this.huabanBtn);
      this.localPart = new NetMonitor.LocalParts(this.document);
      this.huabanPart = new _UiIcon.HuabanPart(this.document);
      this.unsplashPart = new _classlist.UnsplashPart(this.document);
      this.partGroup = prepend(".quick-container-group");
    }
    return buildButton.prototype.onSelectedChanged = function(model) {
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < this.quickBtns.length; layer_i++) {
        if (this.quickBtns[layer_i] != model) {
          this.quickBtns[layer_i].setSelect(false, false);
        }
      }
      if (this.currentPart) {
        this.currentPart.hide();
      }
      /** @type {null} */
      var part = null;
      if (model == this.localBtn && model.getSelect()) {
        part = this.localPart;
      }
      if (model == this.huabanBtn && model.getSelect()) {
        part = this.huabanPart;
      }
      if (model == this.unsplashBtn && model.getSelect()) {
        part = this.unsplashPart;
      }
      if (part) {
        part.show();
      }
      this.currentPart = part;
      if (this.currentPart) {
        if (!this.partGroup.hasClass("visible")) {
          this.partGroup.addClass("visible");
        }
      } else {
        this.partGroup.removeClass("visible");
      }
    }, buildButton;
  }();
  event.TopQuickPart = relSet;
}, function(canCreateDiscussions, event, require) {
  Object.defineProperty(event, "__esModule", {
    value : true
  });
  var $ = require(0);
  var NodeStorage = require(9);
  var variables = require(16);
  var flight = require(5);
  var a = require(20);
  var relSet = function() {
    /**
     * @param {!Object} doc
     * @return {undefined}
     */
    function next(doc) {
      var that = this;
      /** @type {!Object} */
      this.document = doc;
      this.part = $(".quick-container.local");
      this.hide();
      this.input = $(".quick-container.local .local-input");
      this.bowserBtn = $(".quick-container.local .browser-btn");
      this.fillBtn = $(".quick-container.local .fill-btn");
      this.input.on("click", function(canCreateDiscussions) {
        that.selectPath();
      });
      this.bowserBtn.on("click", function(canCreateDiscussions) {
        that.selectPath();
      });
      this.fillBtn.on("click", function() {
        var command_module_id = that.input.val();
        if (command_module_id) {
          variables.fillImages({
            name : "",
            type : flight.SourceType.LOCAL,
            value : command_module_id
          });
        } else {
          if (!that.input.hasClass("error")) {
            that.input.addClass("error");
            setTimeout(function() {
              that.input.removeClass("error");
            }, 500);
          }
        }
      });
      this.input.val(this.getStoragePath());
    }
    return next.prototype.selectPath = function() {
      var $this = this;
      var e = this.input.val();
      a.openFolderDialog(e).then(function(path) {
        if (path) {
          $this.input.val(path);
          $this.setStoragePath(path);
        }
      });
    }, next.prototype.hide = function() {
      this.part.removeClass("visible");
    }, next.prototype.show = function() {
      this.part.addClass("visible");
    }, next.prototype.getStoragePath = function() {
      var storage = this.getStorage();
      return storage.has("quickLocal") ? storage.get("quickLocal") : "";
    }, next.prototype.setStoragePath = function(path) {
      this.getStorage().set("quickLocal", path);
    }, next.prototype.getStorage = function() {
      return NodeStorage.createStorage("./quick.dat");
    }, next;
  }();
  event.LocalParts = relSet;
}, function(canCreateDiscussions, mo, require) {
  Object.defineProperty(mo, "__esModule", {
    value : true
  });
  var self = require(21);
  var socket = require(13);
  var Response = require(1);
  /**
   * @param {!Object} url
   * @param {?} versionId
   * @return {?}
   */
  mo.getTitle = function(url, versionId) {
    return Response.Promise(function(levDist, saveNotifs, i) {
      socket.request(url, "utf-8").then(function(i) {
        /** @type {null} */
        var a = null;
        try {
          a = function(t) {
            /** @type {string} */
            var a2 = 'app.page["board"] = {';
            /** @type {number} */
            var offset = t.indexOf(a2) + a2.length - 1;
            var start = t.indexOf("};\n", offset);
            var rawObject = t.slice(offset, start + 1);
            return JSON.parse(rawObject);
          }(i);
        } catch (notifications) {
          saveNotifs(notifications);
        }
        if (a && a.title) {
          levDist(a.title);
        }
      }, function(notifications) {
        saveNotifs(notifications);
      });
    });
  };
  var moMat = function() {
    /**
     * @return {undefined}
     */
    function Property() {
      /** @type {string} */
      this._title = "";
      /** @type {string} */
      this._key = "";
    }
    return Object.defineProperty(Property.prototype, "title", {
      get : function() {
        return this._title;
      },
      enumerable : true,
      configurable : true
    }), Object.defineProperty(Property.prototype, "key", {
      get : function() {
        return this._key;
      },
      enumerable : true,
      configurable : true
    }), Property.prototype.init = function(value) {
      var _restoreValue = this;
      return this._key = value, this._title = value, Response.Promise(function(setTimeout, n, i) {
        setTimeout(_restoreValue);
      });
    }, Property.prototype.randomPins = function(src, width, height) {
      var metric = this;
      return Response.Promise(function(defined, ObservableList, a) {
        self.post({
          messageId : 2001,
          session : "",
          type : 1,
          key : metric._key,
          num : src,
          width : width || 0,
          height : height || 0
        }).then(function(config) {
          if (0 != config.sessionError) {
            ObservableList(config.sessionError);
          } else {
            if (config.success) {
              var urls = config.urls;
              if (!urls) {
                /** @type {!Array} */
                urls = [];
              }
              defined(urls);
            } else {
              ObservableList(0);
            }
          }
        }, function(canCreateDiscussions) {
          ObservableList(0);
        });
      });
    }, Property;
  }();
  mo.HuaBanBoard = moMat;
}, function(canCreateDiscussions, mo, require) {
  Object.defineProperty(mo, "__esModule", {
    value : true
  });
  var self = require(21);
  var Response = require(1);
  /**
   * @param {boolean} type
   * @param {number} msg
   * @return {?}
   */
  mo.getTitle = function(type, msg) {
    return Response.Promise(function(error, i, canCreateDiscussions) {
      error(msg || type);
    });
  };
  var moMat = function() {
    /**
     * @return {undefined}
     */
    function Property() {
      /** @type {string} */
      this._title = "";
      /** @type {string} */
      this._key = "";
    }
    return Object.defineProperty(Property.prototype, "title", {
      get : function() {
        return this._title;
      },
      enumerable : true,
      configurable : true
    }), Object.defineProperty(Property.prototype, "key", {
      get : function() {
        return this._key;
      },
      enumerable : true,
      configurable : true
    }), Property.prototype.init = function(value) {
      var _restoreValue = this;
      return this._key = value, this._title = value, Response.Promise(function(setTimeout, n, i) {
        setTimeout(_restoreValue);
      });
    }, Property.prototype.randomPins = function(src, width, height) {
      var metric = this;
      return Response.Promise(function(defined, ObservableList, a) {
        self.post({
          messageId : 2001,
          session : "",
          type : 2,
          key : metric._key,
          num : src,
          width : width || 0,
          height : height || 0
        }).then(function(config) {
          if (0 != config.sessionError) {
            ObservableList(config.sessionError);
          } else {
            if (config.success) {
              var urls = config.urls;
              if (!urls) {
                /** @type {!Array} */
                urls = [];
              }
              defined(urls);
            } else {
              ObservableList(0);
            }
          }
        }, function(canCreateDiscussions) {
          ObservableList(0);
        });
      });
    }, Property;
  }();
  mo.UnsplashBoard = moMat;
}, function(canCreateDiscussions, mo, $) {
  /**
   * @param {!Object} value
   * @return {?}
   */
  function parser(value) {
    var path = item.resolve(value).replace(/\\/g, "/");
    return "/" !== path[0] && (path = "/" + path), encodeURI("file://" + path);
  }
  Object.defineProperty(mo, "__esModule", {
    value : true
  });
  var $window = $(1);
  var fs = $(2);
  var item = $(3);
  /**
   * @param {?} filename
   * @param {?} count
   * @return {?}
   */
  mo.getTitle = function(filename, count) {
    return $window.Promise(function($, error, i) {
      try {
        $(item.basename(filename));
      } catch (ERROR_ARGUMENT_OUT_OF_RANGE) {
        error(ERROR_ARGUMENT_OUT_OF_RANGE);
      }
    });
  };
  var moMat = function() {
    /**
     * @return {undefined}
     */
    function Property() {
      /** @type {string} */
      this._title = "";
      /** @type {number} */
      this._count = 0;
      /** @type {string} */
      this._key = "";
    }
    return Object.defineProperty(Property.prototype, "title", {
      get : function() {
        return this._title;
      },
      enumerable : true,
      configurable : true
    }), Object.defineProperty(Property.prototype, "count", {
      get : function() {
        return this._count;
      },
      enumerable : true,
      configurable : true
    }), Object.defineProperty(Property.prototype, "key", {
      get : function() {
        return this._key;
      },
      enumerable : true,
      configurable : true
    }), Property.prototype._init = function(on_configure) {
    }, Property.prototype.init = function(value) {
      var _restoreValue = this;
      return this._key = value, this._title = value, $window.Promise(function(setTimeout, n, i) {
        setTimeout(_restoreValue);
      });
    }, Property.prototype.randomPins = function(width, height, desiredHeight) {
      var script = this;
      return $window.Promise(function(allDoneCb, saveNotifs, i) {
        if (fs.existsSync(script._key)) {
          /** @type {!Array} */
          var data = [];
          !function load(d, f) {
            /** @type {!Array} */
            var h = [];
            try {
              h = fs.readdirSync(d);
            } catch (t) {
            }
            /** @type {number} */
            var i = 0;
            for (; i < h.length; i++) {
              var s = h[i];
              var value = item.join(d, s);
              /** @type {null} */
              var exists = null;
              try {
                exists = fs.statSync(value);
              } catch (t) {
              }
              if (exists && exists.isFile()) {
                var l = item.extname(value).toLocaleLowerCase();
                if (!(".png" != l && ".jpg" != l)) {
                  f.push(value);
                }
              } else {
                if (exists && exists.isDirectory()) {
                  load(value, f);
                }
              }
            }
          }(script._key, data);
          /** @type {number} */
          var i = 0;
          for (; i < data.length; i++) {
            data[i] = parser(data[i]);
          }
          /** @type {!Array} */
          var result = [];
          if ((data = function(canCreateDiscussions) {
            /** @type {!Array} */
            var ports = [];
            var ps = data.concat();
            for (; ps.length > 0;) {
              /** @type {number} */
              var i = Math.floor(Math.random() * ps.length);
              ports.push(ps[i]);
              ps.splice(i, 1);
            }
            return ports;
          }()).length > 0) {
            /** @type {number} */
            var len = 0;
            for (; result.length < width;) {
              result.push(data[len]);
              if (++len == data.length) {
                /** @type {number} */
                len = 0;
              }
            }
          }
          /** @type {number} */
          i = 0;
          for (; i < result.length; i++) {
          }
          allDoneCb(result);
        } else {
          saveNotifs("\u672c\u5730\u76ee\u5f55\u4e0d\u5b58\u5728");
        }
      });
    }, Property;
  }();
  mo.LocalBoard = moMat;
}, function(canCreateDiscussions, exports, require) {
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  var $this;
  var $ = require(0);
  var Toast = function() {
    /**
     * @return {undefined}
     */
    function success() {
      this.container = $('<div class="toast-container"><div class="toast"></div></div>').appendTo($("body"));
      this.toast = this.container.find(".toast");
    }
    return success.prototype.text = function(name) {
      this.toast.text(name);
    }, success;
  }();
  /** @type {null} */
  var scrollTimeout = null;
  /**
   * @param {!Object} type
   * @param {number} timeout
   * @return {undefined}
   */
  exports.toast = function(type, timeout) {
    if (void 0 === timeout) {
      /** @type {number} */
      timeout = 3E3;
    }
    if (!$this) {
      $this = new Toast;
    }
    $this.text(type);
    $this.container.fadeIn(300);
    clearTimeout(scrollTimeout);
    /** @type {number} */
    scrollTimeout = setTimeout(function() {
      $this.container.fadeOut(300);
    }, timeout);
  };
}, function(module, canCreateDiscussions, factory) {
  module.exports = factory(45);
}, function(config, canCreateDiscussions, String) {
  /**
   * @param {!Object} selector
   * @param {string} namespace
   * @param {!Function} index
   * @return {?}
   */
  function callback(selector, namespace, index) {
    return new $(selector, namespace, index);
  }
  var h = String(22);
  var uuid = String(46);
  var str = String(49);
  var o = String(50);
  var self = String(51);
  var value = String(52);
  /** @type {function(!Object, string, !Function): ?} */
  config.exports = callback;
  if ("function" != typeof Object.assign) {
    /**
     * @param {!Object} target
     * @param {...(Object|null)} p1
     * @return {!Object}
     */
    Object.assign = function(target) {
      if (void 0 === target || null === target) {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      /** @type {!Object} */
      var output = Object(target);
      /** @type {number} */
      var i = 1;
      for (; i < arguments.length; i++) {
        var value = arguments[i];
        if (void 0 !== value && null !== value) {
          var k;
          for (k in value) {
            if (value.hasOwnProperty(k)) {
              output[k] = value[k];
            }
          }
        }
      }
      return output;
    };
  }
  /** @type {function(!Object, !Object, !Object, string, number): undefined} */
  var $ = config.exports.Visitor = function(tid, cid, options, context, persistentParams) {
    if ("object" == typeof tid ? (options = tid, tid = cid = null) : "object" == typeof cid && (options = cid, cid = null), this._queue = [], this.options = options || {}, this.options.hostname && (self.hostname = this.options.hostname), this.options.path && (self.path = this.options.path), this.options.https) {
      var filterCandidatesType = value.parse(self.hostname);
      /** @type {string} */
      self.hostname = "https://" + filterCandidatesType.host;
    }
    if (void 0 !== this.options.enableBatching) {
      self.batching = options.enableBatching;
    }
    if (this.options.batchSize) {
      self.batchSize = this.options.batchSize;
    }
    this._context = context || {};
    this._persistentParams = persistentParams || {};
    this.tid = tid || this.options.tid;
    this.cid = this._determineCid(cid, this.options.cid, false !== this.options.strictCidFormat);
    if (this.options.uid) {
      this.uid = this.options.uid;
    }
  };
  /**
   * @param {!Object} opts
   * @param {!Object} options
   * @return {?}
   */
  config.exports.middleware = function(opts, options) {
    /** @type {!Object} */
    this.tid = opts;
    /** @type {!Object} */
    this.options = options;
    var cookieName = (this.options || {}).cookieName || "_ga";
    return function(req, canCreateDiscussions, next) {
      if (req.visitor = config.exports.createFromSession(req.session), req.visitor) {
        return next();
      }
      var cid;
      if (req.cookies && req.cookies[cookieName]) {
        var u = req.cookies[cookieName].split(".");
        cid = u[2] + "." + u[3];
      }
      req.visitor = callback(opts, cid, options);
      if (req.session) {
        req.session.cid = req.visitor.cid;
      }
      next();
    };
  };
  /**
   * @param {string} session
   * @return {?}
   */
  config.exports.createFromSession = function(session) {
    if (session && session.cid) {
      return callback(this.tid, session.cid, this.options);
    }
  };
  $.prototype = {
    debug : function(enableStdout) {
      return this.options.debug = 0 === arguments.length || enableStdout, this._log("Logging enabled"), this;
    },
    reset : function() {
      return this._context = null, this;
    },
    set : function(key, value) {
      this._persistentParams = this._persistentParams || {};
      /** @type {!Object} */
      this._persistentParams[key] = value;
    },
    pageview : function(path, hostname, title, params, fn) {
      return "object" == typeof path && null != path ? (params = path, "function" == typeof hostname && (fn = hostname), path = hostname = title = null) : "function" == typeof hostname ? (fn = hostname, hostname = title = null) : "function" == typeof title ? (fn = title, title = null) : "function" == typeof params && (fn = params, params = null), params = this._translateParams(params), (params = Object.assign({}, this._persistentParams || {}, params)).dp = path || params.dp || this._context.dp, params.dh = 
      hostname || params.dh || this._context.dh, params.dt = title || params.dt || this._context.dt, this._tidyParameters(params), params.dp || params.dl ? this._withContext(params)._enqueue("pageview", params, fn) : this._handleError("Please provide either a page path (dp) or a document location (dl)", fn);
    },
    screenview : function(screenName, appName, appVersion, appId, appInstallerId, params, fn) {
      return "object" == typeof screenName && null != screenName ? (params = screenName, "function" == typeof appName && (fn = appName), screenName = appName = appVersion = appId = appInstallerId = null) : "function" == typeof appName ? (fn = appName, appName = appVersion = appId = appInstallerId = null) : "function" == typeof appVersion ? (fn = appVersion, appVersion = appId = appInstallerId = null) : "function" == typeof appId ? (fn = appId, appId = appInstallerId = null) : "function" == typeof appInstallerId ? 
      (fn = appInstallerId, appInstallerId = null) : "function" == typeof params && (fn = params, params = null), params = this._translateParams(params), (params = Object.assign({}, this._persistentParams || {}, params)).cd = screenName || params.cd || this._context.cd, params.an = appName || params.an || this._context.an, params.av = appVersion || params.av || this._context.av, params.aid = appId || params.aid || this._context.aid, params.aiid = appInstallerId || params.aiid || this._context.aiid, 
      this._tidyParameters(params), params.cd && params.an ? this._withContext(params)._enqueue("screenview", params, fn) : this._handleError("Please provide at least a screen name (cd) and an app name (an)", fn);
    },
    event : function(name, action, value, callback, params, fn) {
      return "object" == typeof name && null != name ? (params = name, "function" == typeof action && (fn = action), name = action = value = callback = null) : "function" == typeof value ? (fn = value, value = callback = null) : "function" == typeof callback ? (fn = callback, callback = null) : "function" == typeof params && (fn = params, params = null), params = this._translateParams(params), (params = Object.assign({}, this._persistentParams || {}, params)).ec = name || params.ec || this._context.ec, 
      params.ea = action || params.ea || this._context.ea, params.el = value || params.el || this._context.el, params.ev = callback || params.ev || this._context.ev, params.p = params.p || params.dp || this._context.p || this._context.dp, delete params.dp, this._tidyParameters(params), params.ec && params.ea ? this._withContext(params)._enqueue("event", params, fn) : this._handleError("Please provide at least an event category (ec) and an event action (ea)", fn);
    },
    transaction : function(transaction, revenue, shipping, tax, affiliation, params, fn) {
      return "object" == typeof transaction ? (params = transaction, "function" == typeof revenue && (fn = revenue), transaction = revenue = shipping = tax = affiliation = null) : "function" == typeof revenue ? (fn = revenue, revenue = shipping = tax = affiliation = null) : "function" == typeof shipping ? (fn = shipping, shipping = tax = affiliation = null) : "function" == typeof tax ? (fn = tax, tax = affiliation = null) : "function" == typeof affiliation ? (fn = affiliation, affiliation = null) : 
      "function" == typeof params && (fn = params, params = null), params = this._translateParams(params), (params = Object.assign({}, this._persistentParams || {}, params)).ti = transaction || params.ti || this._context.ti, params.tr = revenue || params.tr || this._context.tr, params.ts = shipping || params.ts || this._context.ts, params.tt = tax || params.tt || this._context.tt, params.ta = affiliation || params.ta || this._context.ta, params.p = params.p || this._context.p || this._context.dp, 
      this._tidyParameters(params), params.ti ? this._withContext(params)._enqueue("transaction", params, fn) : this._handleError("Please provide at least a transaction ID (ti)", fn);
    },
    item : function(price, quantity, sku, name, variation, params, fn) {
      return "object" == typeof price ? (params = price, "function" == typeof quantity && (fn = quantity), price = quantity = sku = name = variation = null) : "function" == typeof quantity ? (fn = quantity, quantity = sku = name = variation = null) : "function" == typeof sku ? (fn = sku, sku = name = variation = null) : "function" == typeof name ? (fn = name, name = variation = null) : "function" == typeof variation ? (fn = variation, variation = null) : "function" == typeof params && (fn = params, 
      params = null), params = this._translateParams(params), (params = Object.assign({}, this._persistentParams || {}, params)).ip = price || params.ip || this._context.ip, params.iq = quantity || params.iq || this._context.iq, params.ic = sku || params.ic || this._context.ic, params.in = name || params.in || this._context.in, params.iv = variation || params.iv || this._context.iv, params.p = params.p || this._context.p || this._context.dp, params.ti = params.ti || this._context.ti, this._tidyParameters(params), 
      params.ti ? this._withContext(params)._enqueue("item", params, fn) : this._handleError("Please provide at least an item transaction ID (ti)", fn);
    },
    exception : function(description, fatal, params, fn) {
      return "object" == typeof description ? (params = description, "function" == typeof fatal && (fn = fatal), description = fatal = null) : "function" == typeof fatal ? (fn = fatal, fatal = 0) : "function" == typeof params && (fn = params, params = null), params = this._translateParams(params), (params = Object.assign({}, this._persistentParams || {}, params)).exd = description || params.exd || this._context.exd, params.exf = +!!(fatal || params.exf || this._context.exf), 0 === params.exf && delete params.exf, 
      this._tidyParameters(params), this._withContext(params)._enqueue("exception", params, fn);
    },
    timing : function(category, variable, time, label, params, fn) {
      return "object" == typeof category ? (params = category, "function" == typeof variable && (fn = variable), category = variable = time = label = null) : "function" == typeof variable ? (fn = variable, variable = time = label = null) : "function" == typeof time ? (fn = time, time = label = null) : "function" == typeof label ? (fn = label, label = null) : "function" == typeof params && (fn = params, params = null), params = this._translateParams(params), (params = Object.assign({}, this._persistentParams || 
      {}, params)).utc = category || params.utc || this._context.utc, params.utv = variable || params.utv || this._context.utv, params.utt = time || params.utt || this._context.utt, params.utl = label || params.utl || this._context.utl, this._tidyParameters(params), this._withContext(params)._enqueue("timing", params, fn);
    },
    send : function(db) {
      /**
       * @param {string} type
       * @return {?}
       */
      function each(type) {
        if (type) {
          return iterator(type);
        }
        next();
      }
      var me = this;
      /** @type {number} */
      var index = 1;
      db = db || function() {
      };
      me._log("Sending " + me._queue.length + " tracking call(s)");
      /**
       * @param {string} type
       * @return {undefined}
       */
      var iterator = function(type) {
        me._log("Finished sending tracking calls");
        db.call(me, type || null, index - 1);
      };
      /**
       * @return {?}
       */
      var next = function() {
        if (!me._queue.length) {
          return iterator(null);
        }
        /** @type {!Array} */
        var ret = [];
        if (self.batching) {
          ret = me._queue.splice(0, Math.min(me._queue.length, self.batchSize));
        } else {
          ret.push(me._queue.shift());
        }
        /** @type {boolean} */
        var into = ret.length > 1;
        me._log(index++ + ": " + JSON.stringify(ret));
        /** @type {!Object} */
        var keyReads = Object.assign({}, me.options.requestOptions, {
          body : function(array) {
            return array.map(function(storedComponents) {
              return str.stringify(storedComponents);
            }).join("\n");
          }(ret),
          headers : me.options.headers || {}
        });
        !function(hostname, apexRestPath, options, callback) {
          if (0 == hostname.indexOf("https://")) {
            hostname = hostname.slice("https://".length);
          }
          if (0 == hostname.indexOf("http://")) {
            hostname = hostname.slice("http://".length);
          }
          var body = options.body;
          var headers = {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Content-Length" : body.length
          };
          var name;
          for (name in options.headers) {
            headers[name] = options.headers[name];
          }
          options = {
            hostname : hostname,
            port : 80,
            path : apexRestPath,
            method : "POST",
            headers : headers
          };
          var u = h.request(options, function(socket) {
            socket.setEncoding("utf-8");
            socket.on("data", function(canCreateDiscussions) {
            });
            u.on("error", function(notifications) {
              if (callback) {
                callback(notifications);
              }
            });
          });
          u.write(body);
          u.end();
        }(self.hostname, into ? self.batchPath : self.path, keyReads, each);
      };
      next();
    },
    _enqueue : function(type, params, data) {
      return "function" == typeof params && (data = params, params = {}), params = this._translateParams(params) || {}, Object.assign(params, {
        v : self.protocolVersion,
        tid : this.tid,
        cid : this.cid,
        t : type
      }), this.uid && (params.uid = this.uid), this._queue.push(params), this.options.debug && this._checkParameters(params), this._log("Enqueued " + type + " (" + JSON.stringify(params) + ")"), data && this.send(data), this;
    },
    _handleError : function(message, fn) {
      return this._log("Error: " + message), fn && fn.call(this, new Error(message)), this;
    },
    _determineCid : function() {
      var id;
      /** @type {!Array<?>} */
      var args = Array.prototype.splice.call(arguments, 0);
      /** @type {number} */
      var n = args.length - 1;
      if (args[n]) {
        /** @type {number} */
        var i = 0;
        for (; i < n; i++) {
          if (false !== (id = o.ensureValidCid(args[i]))) {
            return id;
          }
          if (null != id) {
            this._log("Warning! Invalid UUID format '" + args[i] + "'");
          }
        }
      } else {
        /** @type {number} */
        i = 0;
        for (; i < n; i++) {
          if (args[i]) {
            return args[i];
          }
        }
      }
      return uuid.v4();
    },
    _checkParameters : function(params) {
      var key;
      for (key in params) {
        if (!(-1 !== self.acceptedParameters.indexOf(key) || self.acceptedParametersRegex.filter(function(t) {
          return t.test(key);
        }).length)) {
          this._log("Warning! Unsupported tracking parameter " + key + " (" + params[key] + ")");
        }
      }
    },
    _translateParams : function(params) {
      var translated = {};
      var key;
      for (key in params) {
        if (self.parametersMap.hasOwnProperty(key)) {
          translated[self.parametersMap[key]] = params[key];
        } else {
          translated[key] = params[key];
        }
      }
      return translated;
    },
    _tidyParameters : function(params) {
      var thing;
      for (thing in params) {
        if (!(null !== params[thing] && void 0 !== params[thing])) {
          delete params[thing];
        }
      }
      return params;
    },
    _log : function(text_to_replace) {
      this.options.debug;
    },
    _withContext : function(context) {
      var visitor = new $(this.tid, this.cid, this.options, context, this._persistentParams);
      return visitor._queue = this._queue, visitor;
    }
  };
  /** @type {function(!Object, !Object, !Object, !Object, !Array): ?} */
  $.prototype.pv = $.prototype.pageview;
  /** @type {function(string, string, string, string, !Object, !Object): ?} */
  $.prototype.e = $.prototype.event;
  /** @type {function(!Object, !Object, !Object, !Object, !Object, !Object, !Array): ?} */
  $.prototype.t = $.prototype.transaction;
  /** @type {function(string, string, string, string, string, !Object, string): ?} */
  $.prototype.i = $.prototype.item;
}, function(module, canCreateDiscussions, __webpack_require__) {
  var v1 = __webpack_require__(47);
  var v4 = __webpack_require__(48);
  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;
  module.exports = uuid;
}, function(mixin, canCreateDiscussions, require) {
  var getAlignItem = require(26);
  var getUnusedModules = require(27);
  var alignContentAlignItem = getAlignItem();
  /** @type {!Array} */
  var _nodeId = [1 | alignContentAlignItem[0], alignContentAlignItem[1], alignContentAlignItem[2], alignContentAlignItem[3], alignContentAlignItem[4], alignContentAlignItem[5]];
  /** @type {number} */
  var interestingPoint = 16383 & (alignContentAlignItem[6] << 8 | alignContentAlignItem[7]);
  /** @type {number} */
  var mw = 0;
  /** @type {number} */
  var gestureThrottle = 0;
  /**
   * @param {!Object} options
   * @param {!Object} paramName
   * @param {!Object} headerName
   * @return {?}
   */
  mixin.exports = function(options, paramName, headerName) {
    var i = paramName && headerName || 0;
    var result = paramName || [];
    var viewportCenter = void 0 !== (options = options || {}).clockseq ? options.clockseq : interestingPoint;
    var w = void 0 !== options.msecs ? options.msecs : (new Date).getTime();
    var d = void 0 !== options.nsecs ? options.nsecs : gestureThrottle + 1;
    /** @type {number} */
    var compare_left = w - mw + (d - gestureThrottle) / 1E4;
    if (compare_left < 0 && void 0 === options.clockseq && (viewportCenter = viewportCenter + 1 & 16383), (compare_left < 0 || w > mw) && void 0 === options.nsecs && (d = 0), d >= 1E4) {
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    mw = w;
    gestureThrottle = d;
    interestingPoint = viewportCenter;
    /** @type {number} */
    var MASK = (1E4 * (268435455 & (w = w + 122192928E5)) + d) % 4294967296;
    /** @type {number} */
    result[i++] = MASK >>> 24 & 255;
    /** @type {number} */
    result[i++] = MASK >>> 16 & 255;
    /** @type {number} */
    result[i++] = MASK >>> 8 & 255;
    /** @type {number} */
    result[i++] = 255 & MASK;
    /** @type {number} */
    var v = w / 4294967296 * 1E4 & 268435455;
    /** @type {number} */
    result[i++] = v >>> 8 & 255;
    /** @type {number} */
    result[i++] = 255 & v;
    /** @type {number} */
    result[i++] = v >>> 24 & 15 | 16;
    /** @type {number} */
    result[i++] = v >>> 16 & 255;
    /** @type {number} */
    result[i++] = viewportCenter >>> 8 | 128;
    /** @type {number} */
    result[i++] = 255 & viewportCenter;
    var node = options.node || _nodeId;
    /** @type {number} */
    var index = 0;
    for (; index < 6; ++index) {
      result[i + index] = node[index];
    }
    return paramName || getUnusedModules(result);
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var _rng = __webpack_require__(26);
  var uuid = __webpack_require__(27);
  /**
   * @param {!Object} options
   * @param {string} name
   * @param {string} email
   * @return {?}
   */
  mixin.exports = function(options, name, email) {
    var cke_option = name && email || 0;
    if ("string" == typeof options) {
      /** @type {(Array|null)} */
      name = "binary" == options ? new Array(16) : null;
      /** @type {null} */
      options = null;
    }
    var plugin = (options = options || {}).random || (options.rng || _rng)();
    if (plugin[6] = 15 & plugin[6] | 64, plugin[8] = 63 & plugin[8] | 128, name) {
      /** @type {number} */
      var option = 0;
      for (; option < 16; ++option) {
        name[cke_option + option] = plugin[option];
      }
    }
    return name || uuid(plugin);
  };
}, function(module, canCreateDiscussions) {
  module.exports = require("querystring");
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {string} uuid
   * @return {?}
   */
  mixin.exports.isUuid = function(uuid) {
    return !!uuid && (uuid = uuid.toString().toLowerCase(), /[0-9a-f]{8}\-?[0-9a-f]{4}\-?4[0-9a-f]{3}\-?[89ab][0-9a-f]{3}\-?[0-9a-f]{12}/.test(uuid));
  };
  /**
   * @param {string} cid
   * @return {?}
   */
  mixin.exports.isCookieCid = function(cid) {
    return /^[0-9]+\.[0-9]+$/.test(cid);
  };
  /**
   * @param {string} uuid
   * @return {?}
   */
  mixin.exports.ensureValidCid = function(uuid) {
    return this.isUuid(uuid) ? (uuid = uuid.replace(/\-/g, "")).substring(0, 8) + "-" + uuid.substring(8, 12) + "-" + uuid.substring(12, 16) + "-" + uuid.substring(16, 20) + "-" + uuid.substring(20) : !!this.isCookieCid(uuid) && uuid;
  };
}, function(self, canCreateDiscussions) {
  self.exports = {
    protocolVersion : "1",
    hostname : "http://www.google-analytics.com",
    path : "/collect",
    batchPath : "/batch",
    batching : true,
    batchSize : 10,
    acceptedParameters : ["v", "tid", "aip", "ds", "qt", "z", "cid", "uid", "sc", "uip", "ua", "geoid", "dr", "cn", "cs", "cm", "ck", "cc", "ci", "gclid", "dclid", "sr", "vp", "de", "sd", "ul", "je", "fl", "t", "ni", "dl", "dh", "dp", "dt", "cd", "linkid", "an", "aid", "av", "aiid", "ec", "ea", "el", "ev", "ti", "ta", "tr", "ts", "tt", "in", "ip", "iq", "ic", "iv", "cu", "pa", "tcc", "pal", "cos", "col", "promoa", "sn", "sa", "st", "utc", "utv", "utt", "utl", "plt", "dns", "pdt", "rrt", "tcp", "srt", 
    "dit", "clt", "exd", "exf", "xid", "xvar"],
    acceptedParametersRegex : [/^cm[0-9]+$/, /^cd[0-9]+$/, /^cg(10|[0-9])$/, /pr[0-9]{1,3}id/, /pr[0-9]{1,3}nm/, /pr[0-9]{1,3}br/, /pr[0-9]{1,3}ca/, /pr[0-9]{1,3}va/, /pr[0-9]{1,3}pr/, /pr[0-9]{1,3}qt/, /pr[0-9]{1,3}cc/, /pr[0-9]{1,3}ps/, /pr[0-9]{1,3}cd[0-9]{1,3}/, /pr[0-9]{1,3}cm[0-9]{1,3}/, /il[0-9]{1,3}nm/, /il[0-9]{1,3}pi[0-9]{1,3}id/, /il[0-9]{1,3}pi[0-9]{1,3}nm/, /il[0-9]{1,3}pi[0-9]{1,3}br/, /il[0-9]{1,3}pi[0-9]{1,3}ca/, /il[0-9]{1,3}pi[0-9]{1,3}va/, /il[0-9]{1,3}pi[0-9]{1,3}ps/, /il[0-9]{1,3}pi[0-9]{1,3}pr/, 
    /il[0-9]{1,3}pi[0-9]{1,3}cd[0-9]{1,3}/, /il[0-9]{1,3}pi[0-9]{1,3}cm[0-9]{1,3}/, /promo[0-9]{1,3}id/, /promo[0-9]{1,3}nm/, /promo[0-9]{1,3}cr/, /promo[0-9]{1,3}ps/],
    parametersMap : {
      protocolVersion : "v",
      trackingId : "tid",
      webPropertyId : "tid",
      anonymizeIp : "aip",
      dataSource : "ds",
      queueTime : "qt",
      cacheBuster : "z",
      clientId : "cid",
      userId : "uid",
      sessionControl : "sc",
      ipOverride : "uip",
      userAgentOverride : "ua",
      documentReferrer : "dr",
      campaignName : "cn",
      campaignSource : "cs",
      campaignMedium : "cm",
      campaignKeyword : "ck",
      campaignContent : "cc",
      campaignId : "ci",
      googleAdwordsId : "gclid",
      googleDisplayAdsId : "dclid",
      screenResolution : "sr",
      viewportSize : "vp",
      documentEncoding : "de",
      screenColors : "sd",
      userLanguage : "ul",
      javaEnabled : "je",
      flashVersion : "fl",
      hitType : "t",
      "non-interactionHit" : "ni",
      documentLocationUrl : "dl",
      documentHostName : "dh",
      documentPath : "dp",
      documentTitle : "dt",
      screenName : "cd",
      linkId : "linkid",
      applicationName : "an",
      applicationId : "aid",
      applicationVersion : "av",
      applicationInstallerId : "aiid",
      eventCategory : "ec",
      eventAction : "ea",
      eventLabel : "el",
      eventValue : "ev",
      transactionId : "ti",
      transactionAffiliation : "ta",
      transactionRevenue : "tr",
      transactionShipping : "ts",
      transactionTax : "tt",
      itemName : "in",
      itemPrice : "ip",
      itemQuantity : "iq",
      itemCode : "ic",
      itemCategory : "iv",
      currencyCode : "cu",
      socialNetwork : "sn",
      socialAction : "sa",
      socialActionTarget : "st",
      userTimingCategory : "utc",
      userTimingVariableName : "utv",
      userTimingTime : "utt",
      userTimingLabel : "utl",
      pageLoadTime : "plt",
      dnsTime : "dns",
      pageDownloadTime : "pdt",
      redirectResponseTime : "rrt",
      tcpConnectTime : "tcp",
      serverResponseTime : "srt",
      domInteractiveTime : "dit",
      contentLoadTime : "clt",
      exceptionDescription : "exd",
      isExceptionFatal : "exf",
      "isExceptionFatal?" : "exf",
      experimentId : "xid",
      experimentVariant : "xvar"
    }
  };
}, function(module, canCreateDiscussions) {
  module.exports = require("url");
}, function(module, canCreateDiscussions, require) {
  var fn;
  var os = require(6);
  var exports = {};
  switch(exports.networkInterfaces = function() {
    var map = {};
    try {
      var e = os.networkInterfaces();
    } catch (error) {
      if ("uv_interface_addresses" === error.syscall) {
        return map;
      }
      throw error;
    }
    return Object.keys(e).forEach(function(n) {
      var params = {};
      /** @type {boolean} */
      var o = false;
      e[n].forEach(function(options) {
        if (!options.internal) {
          params[(options.family || "").toLowerCase()] = options.address;
          /** @type {boolean} */
          o = true;
          if (options.mac) {
            params.mac = options.mac;
          }
        }
      });
      if (o) {
        map[n] = params;
      }
    }), map;
  }, os.platform()) {
    case "win32":
      fn = require(54);
      break;
    case "linux":
      fn = require(55);
      break;
    case "darwin":
    case "sunos":
    case "freebsd":
    default:
      fn = require(28);
  }
  /**
   * @param {string} name
   * @param {string} callback
   * @return {?}
   */
  exports.one = function(name, callback) {
    if ("function" == typeof name) {
      /** @type {string} */
      callback = name;
      var ifaces = exports.networkInterfaces();
      /** @type {!Array} */
      var alleged = ["eth0", "eth1", "en0", "en1"];
      /** @type {string} */
      name = Object.keys(ifaces)[0];
      /** @type {number} */
      var i = 0;
      for (; i < alleged.length; i++) {
        if (ifaces[alleged[i]]) {
          name = alleged[i];
          break;
        }
      }
      if (!ifaces[name]) {
        return "function" == typeof callback && process.nextTick(function() {
          callback(new Error("no interfaces found"), null);
        }), null;
      }
      if (ifaces[name].mac) {
        return "function" == typeof callback && process.nextTick(function() {
          callback(null, ifaces[name].mac);
        }), ifaces[name].mac;
      }
    }
    return "function" == typeof callback && fn(name, callback), null;
  };
  /**
   * @param {!Array} callback
   * @return {?}
   */
  exports.all = function(callback) {
    var ifaces = exports.networkInterfaces();
    var plugins = {};
    return Object.keys(ifaces).forEach(function(name) {
      if (!ifaces[name].mac) {
        plugins[name] = fn.bind(null, name);
      }
    }), 0 === Object.keys(plugins).length ? ("function" == typeof callback && process.nextTick(function() {
      callback(null, ifaces);
    }), ifaces) : (function(o, walk) {
      /** @type {!Array} */
      var options = [];
      /** @type {!Array} */
      var value = [];
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var index = 0;
      Object.keys(o).forEach(function(g) {
        i = i + 1;
        var a = o[g];
        (process.nextTick || global.setImmediate || global.setTimeout)(function() {
          a(function(name, frag, a) {
            if (frag) {
              value[name] = frag;
            } else {
              options[name] = a;
            }
            if ((index = index + 1) >= i) {
              walk((value.length, value), options);
            }
          }.bind(null, g), 1);
        });
      });
    }(plugins, function(n, result) {
      Object.keys(result).forEach(function(iface) {
        ifaces[iface].mac = result[iface];
      });
      if ("function" == typeof callback) {
        callback(null, ifaces);
      }
    }), null);
  };
  module.exports = exports;
}, function(mixin, canCreateDiscussions, saveNotifs) {
  var spawn = saveNotifs(7).execFile;
  /** @type {!RegExp} */
  var val = /[-\/\\^$*+?.()|[\]{}]/g;
  /**
   * @param {!Object} key
   * @param {!Object} C
   * @return {undefined}
   */
  mixin.exports = function(key, C) {
    spawn("ipconfig", ["/all"], function(aA1, i) {
      if (aA1) {
        C(aA1, null);
      } else {
        var node;
        /** @type {(Array<string>|null)} */
        var value = (new RegExp((node = key, node.replace(val, "\\$&")))).exec(i);
        if (value) {
          i = i.substring(value.index + key.length);
          if (value = /[A-Fa-f0-9]{2}(\-[A-Fa-f0-9]{2}){5}/.exec(i)) {
            C(null, value[0].toLowerCase().replace(/\-/g, ":"));
          } else {
            C("did not find a mac address", null);
          }
        } else {
          C("did not find interface in `ipconfig /all`", null);
        }
      }
    });
  };
}, function(mixin, canCreateDiscussions, saveNotifs) {
  var spawn = saveNotifs(7).execFile;
  /**
   * @param {!Object} id
   * @param {!Object} C
   * @return {undefined}
   */
  mixin.exports = function(id, C) {
    spawn("cat", ["/sys/class/net/" + id + "/address"], function(aA1, commentToCheck) {
      if (aA1) {
        C(aA1, null);
      } else {
        C(null, commentToCheck.trim().toLowerCase());
      }
    });
  };
}, function(canCreateDiscussions, event, require) {
  Object.defineProperty(event, "__esModule", {
    value : true
  });
  var $ = require(0);
  var NodeStorage = require(9);
  var EventHandler = require(15);
  var variables = require(16);
  var TagHourlyStat = require(5);
  var relSet = function() {
    /**
     * @param {!Object} doc
     * @return {undefined}
     */
    function next(doc) {
      var $this = this;
      /** @type {!Object} */
      this.document = doc;
      this.part = $(".quick-container.hauban");
      this.hide();
      this.input = $(".quick-container.hauban .huaban-input");
      this.input.bind("input propertychange change", function(canCreateDiscussions) {
        $this.setStorageValue($this.input.val());
      });
      this.fillBtn = $(".quick-container.hauban .fill-btn");
      this.fillBtn.on("click", function() {
        var t = $this.input.val();
        if (!t || -1 == t.indexOf("http://huaban.com/boards/") && -1 == t.indexOf("https://huaban.com/boards/") && -1 == t.indexOf("http://huabanpro.com/boards/") && -1 == t.indexOf("https://huabanpro.com/boards/")) {
          if (!$this.input.hasClass("error")) {
            $this.input.addClass("error");
            setTimeout(function() {
              $this.input.removeClass("error");
            }, 500);
          }
        } else {
          variables.fillImages({
            name : "",
            type : TagHourlyStat.SourceType.HUABAN,
            value : t
          });
        }
      });
      this.input.val(this.getStorageValue());
      EventHandler.registerTip(this.document, this.input, "http://huabanpro.com/boards/{\u6570\u5b57}");
    }
    return next.prototype.hide = function() {
      this.part.removeClass("visible");
    }, next.prototype.show = function() {
      this.part.addClass("visible");
    }, next.prototype.getStorageValue = function() {
      var storage = this.getStorage();
      return storage.has("quickHuaban") ? storage.get("quickHuaban") : "";
    }, next.prototype.setStorageValue = function(type) {
      this.getStorage().set("quickHuaban", type);
    }, next.prototype.getStorage = function() {
      return NodeStorage.createStorage("./quick.dat");
    }, next;
  }();
  event.HuabanPart = relSet;
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var $ = require(0);
  var Breakpoints = require(29);
  var NodeStorage = require(9);
  var url = require(5);
  var variables = require(16);
  var TagHourlyStat = require(5);
  var newOrg = function() {
    /**
     * @param {!Object} doc
     * @return {undefined}
     */
    function render(doc) {
      var $this = this;
      /** @type {!Object} */
      this.document = doc;
      this.part = $(".quick-container.unsplash");
      this.hide();
      this.input = $(".quick-container.unsplash .unsplash-input");
      this.prompt = new Breakpoints.ComboboxPrompt(this.document, this.input);
      this.prompt.init(url.unsplashList, "\u8f93\u5165\u81ea\u5b9a\u4e49\u5206\u7c7b\uff08\u82f1\u6587\uff09");
      this.prompt.onselect(function(time) {
        $this.input.val(time);
        $this.setStorageValue(time);
      });
      this.fillBtn = $(".quick-container.unsplash .fill-btn");
      this.input.val(this.getStorageValue());
      this.fillBtn.on("click", function() {
        var command_module_id = $this.input.val();
        if (command_module_id) {
          variables.fillImages({
            name : "",
            type : TagHourlyStat.SourceType.UNSPLASH,
            value : command_module_id
          });
        } else {
          if (!$this.input.hasClass("error")) {
            $this.input.addClass("error");
            setTimeout(function() {
              $this.input.removeClass("error");
            }, 500);
          }
        }
      });
    }
    return render.prototype.hide = function() {
      this.part.removeClass("visible");
    }, render.prototype.show = function() {
      this.part.addClass("visible");
    }, render.prototype.getStorageValue = function() {
      var storage = this.getStorage();
      return storage.has("quickUnsplash") ? storage.get("quickUnsplash") : "";
    }, render.prototype.setStorageValue = function(type) {
      this.getStorage().set("quickUnsplash", type);
    }, render.prototype.getStorage = function() {
      return NodeStorage.createStorage("./quick.dat");
    }, render;
  }();
  e.UnsplashPart = newOrg;
}, function(canCreateDiscussions, Buffer, require) {
  Object.defineProperty(Buffer, "__esModule", {
    value : true
  });
  var $ = require(0);
  var WebInspector = require(59);
  var NodeStorage = require(9);
  var Theme = require(12);
  var TagHourlyStat = require(5);
  var UiImpl = require(60);
  var tail = require(16);
  var Uint8Array = function() {
    /**
     * @param {!Object} doc
     * @return {undefined}
     */
    function render(doc) {
      var icon = this;
      /** @type {!Array} */
      this.btnList = [];
      /** @type {!Object} */
      this.document = doc;
      this.listContainer = $(".main-page .btn-list");
      var longhandProperties = this.getStorageValues();
      /** @type {number} */
      var i = 0;
      for (; i < longhandProperties.length; i++) {
        this.initBtn(new WebInspector.BtnListItem(doc, this.listContainer, longhandProperties[i]));
      }
      this.addBtn = $(".btn-list-container .add-btn");
      this.img = $("<img>").appendTo($(this.addBtn));
      this.addBtn.on("click", function(element) {
        icon.addCustom_handler(element);
      });
      Theme.onChanged(function(wantedType) {
        icon.updateIcon(wantedType);
      });
      this.updateIcon(Theme.getTheme());
      this.sourceEditPrompt = new UiImpl.SourceEditPrompt(doc);
      this.sourceEditPrompt.onSave(function(settings) {
        icon.onSourceEditSave(settings);
      });
    }
    return render.prototype.updateIcon = function(wantedType) {
      if (wantedType == Theme.LIGHT) {
        this.img.attr("src", "./assets/add-icon-light.svg");
      } else {
        Theme.LIGHT;
        this.img.attr("src", "./assets/add-icon-dark.svg");
      }
    }, render.prototype.addCustom_handler = function(suppressDisabledCheck) {
      this.sourceEditPrompt.show();
    }, render.prototype.onSourceEditSave = function(part) {
      this.editInfo(part);
    }, render.prototype.editInfo = function(message) {
      if (message.id) {
        /** @type {null} */
        var elem = null;
        /** @type {number} */
        var i = 0;
        for (; i < this.btnList.length; i++) {
          if (this.btnList[i].value.id == message.id) {
            elem = this.btnList[i];
            break;
          }
        }
        if (elem) {
          /** @type {string} */
          elem.value = message;
        }
      } else {
        this.initBtn(new WebInspector.BtnListItem(this.document, this.listContainer, message));
      }
      this.updateStorageValue(message);
    }, render.prototype.deleteInfo = function(id) {
      /** @type {number} */
      var i = 0;
      for (; i < this.btnList.length; i++) {
        if (this.btnList[i].value.id == id) {
          this.btnList[i].dispose();
          this.btnList.splice(i, 1);
          break;
        }
      }
      this.removeStorageValue(id);
    }, render.prototype.initBtn = function(me) {
      var allTraps = this;
      me.onClick(function(t) {
        allTraps.itemClick_handler(t);
      });
      me.onDelete(function(t) {
        allTraps.itemDelete_handler(t);
      });
      me.onEdit(function(t) {
        allTraps.itemEdit_handler(t);
      });
      this.btnList.push(me);
    }, render.prototype.itemClick_handler = function(val) {
      tail.fillImages(val.value);
    }, render.prototype.itemEdit_handler = function(result) {
      this.sourceEditPrompt.show(result.value);
    }, render.prototype.itemDelete_handler = function(ast) {
      this.deleteInfo(ast.value.id);
    }, render.prototype.getStorageValues = function() {
      var storage = this.getStorage();
      var parts = storage.has("customItems") ? storage.get("customItems") : [];
      return 0 == parts.length && (parts.push({
        id : 1,
        name : "\u5934\u50cf",
        type : TagHourlyStat.SourceType.HUABAN,
        value : "http://huabanpro.com/boards/42717139"
      }), parts.push({
        id : 2,
        name : "\u98ce\u666f",
        type : TagHourlyStat.SourceType.UNSPLASH,
        value : "Scenery"
      })), parts;
    }, render.prototype.updateStorageValue = function(result) {
      var storage = this.getStorage();
      var item = this.getStorageValues();
      /** @type {null} */
      var state = null;
      if (result.id) {
        /** @type {number} */
        var i = 0;
        for (; i < item.length; i++) {
          if (item[i].id == result.id) {
            state = item[i];
            break;
          }
        }
      }
      if (state) {
        state.id = result.id;
        state.name = result.name;
        state.type = result.type;
        state.value = result.value;
      } else {
        /** @type {null} */
        var i = null;
        if (item.length > 0) {
          i = item[item.length - 1];
        }
        var n = i ? i.id : 0;
        n = n + 1;
        result.id = n;
        item.push(result);
      }
      storage.set("customItems", item);
    }, render.prototype.removeStorageValue = function(wantedId) {
      var storage = this.getStorage();
      var settings = this.getStorageValues();
      /** @type {number} */
      var s = -1;
      /** @type {number} */
      var i = 0;
      for (; i < settings.length; i++) {
        if (settings[i].id == wantedId) {
          /** @type {number} */
          s = i;
        }
      }
      if (-1 != s) {
        settings.splice(s, 1);
      }
      storage.set("customItems", settings);
    }, render.prototype.getStorage = function() {
      return NodeStorage.createStorage("./custom.dat");
    }, render;
  }();
  Buffer.BtnList = Uint8Array;
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var $ = require(0);
  var cmakeJS = require(8);
  var newOrg = function() {
    /**
     * @param {!Object} options
     * @param {!Object} target
     * @param {!Object} a
     * @return {undefined}
     */
    function self(options, target, a) {
      var opts = this;
      /** @type {!Array} */
      this.clicks = [];
      /** @type {!Array} */
      this.edits = [];
      /** @type {!Array} */
      this.deletes = [];
      /** @type {!Object} */
      this.document = options;
      /** @type {!Object} */
      this.container = target;
      this.selfElem = $("<div class='btn-list-item'></div>").appendTo($(target));
      this.button = $("<div class='button gray fill-btn'></div>").appendTo($(this.selfElem));
      this.editBtn = new cmakeJS.IconButton(options, this.selfElem, "./assets/edit-icon-light.svg", "./assets/edit-icon-dark.svg");
      $("<div class='gapline'></div>").appendTo($(this.selfElem));
      this.deleteBtn = new cmakeJS.IconButton(options, this.selfElem, "./assets/delete-icon-light.svg", "./assets/delete-icon-dark.svg");
      this.button.on("click", function(canCreateDiscussions) {
        opts.click_handler();
      });
      this.editBtn.onClick(function(maxRefFollow) {
        opts.edit_handler(maxRefFollow);
      });
      this.deleteBtn.onClick(function(ruleGroup) {
        opts.delete_handler(ruleGroup);
      });
      /** @type {!Object} */
      this.value = a;
    }
    return Object.defineProperty(self.prototype, "value", {
      get : function() {
        return this._value;
      },
      set : function(value) {
        /** @type {!Object} */
        this._value = value;
        if (this._value) {
          this.button.text(this._value.name);
        }
      },
      enumerable : true,
      configurable : true
    }), self.prototype.click_handler = function() {
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < this.clicks.length; layer_i++) {
        this.clicks[layer_i](this);
      }
    }, self.prototype.edit_handler = function(maxRefFollow) {
      /** @type {number} */
      var i = 0;
      for (; i < this.edits.length; i++) {
        this.edits[i](this);
      }
    }, self.prototype.delete_handler = function(data) {
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < this.deletes.length; layer_i++) {
        this.deletes[layer_i](this);
      }
    }, self.prototype.onClick = function(click) {
      this.clicks.push(click);
    }, self.prototype.removeClick = function(e) {
      var existingProxyIndex = this.clicks.indexOf(e);
      if (-1 != existingProxyIndex) {
        this.clicks.splice(existingProxyIndex, 1);
      }
    }, self.prototype.onEdit = function(name) {
      this.edits.push(name);
    }, self.prototype.removeEdit = function(e) {
      var t = this.edits.indexOf(e);
      if (-1 != t) {
        this.edits.splice(t, 1);
      }
    }, self.prototype.onDelete = function(data) {
      this.deletes.push(data);
    }, self.prototype.removeDelete = function(i) {
      var p0 = this.deletes.indexOf(i);
      if (-1 != p0) {
        this.deletes.splice(p0, 1);
      }
    }, self.prototype.dispose = function() {
      /** @type {number} */
      this.clicks.length = 0;
      /** @type {number} */
      this.edits.length = 0;
      /** @type {number} */
      this.deletes.length = 0;
      this.selfElem.remove();
    }, self;
  }();
  e.BtnListItem = newOrg;
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var $ = require(0);
  var neatHelp = require(8);
  var Laces = require(24);
  var NodeStorage = require(9);
  var url = require(5);
  var Breakpoints = require(29);
  var array = require(18);
  var dom = require(15);
  var p = require(20);
  var m = require(25);
  var newOrg = function() {
    /**
     * @param {?} html
     * @return {undefined}
     */
    function self(html) {
      /** @type {boolean} */
      this.unsplashPrompting = false;
      /** @type {null} */
      this._source = null;
      /** @type {null} */
      this.updateTitleStamp = null;
      /** @type {!Array} */
      this.onSaves = [];
      this.document = $(html);
      this.initView();
      this.initLogic();
    }
    return self.prototype.initView = function() {
      var t = this;
      this.mask = $('<div class="source-edit-prompt-mask"></div>').appendTo($("body"));
      this.prompt = $('\n        <div class="source-edit-prompt">\n            <div class="title-container">\n                <div class="title">\u8bbe\u7f6e\u56fe\u7247\u6765\u6e90</div>\n            </div>\n            <div class="btn-container">\n            </div>\n            <div class="input-container">\n                <div class="local-part">\n                    <input class="local-input" readonly="readonly" type="text" placeholder="\u9009\u62e9\u6587\u4ef6\u5939" /><div class="button gray browser-btn"></div>\n                </div>\n                <div class="huaban-part">\n                    <input class="huaban-input" type="text" placeholder="\u82b1\u74e3\u753b\u677f\u7f51\u5740" />\n                </div>\n                <div class="unsplash-part">\n                    <input class="unsplash-input" readonly="readonly" type="text" placeholder="\u9009\u62e9\u5173\u952e\u5b57" />\n                </div>\n                <input class="name-input" type="text" placeholder="\u81ea\u5b9a\u4e49\u540d\u79f0" />\n                <div class="button blue save-btn">\u4fdd\u5b58</div>\n            </div>\n        </div>').appendTo($("body"));
      var connection1 = this.prompt.find(".title-container");
      this.closeBtn = new neatHelp.IconButton(this.document, connection1, "./assets/close-icon-light.svg", "./assets/close-icon-dark.svg", null, ["close-btn"]);
      var mapEditorHtml = this.prompt.find(".btn-container");
      this.localToggleBtn = new Laces.IconToggleButton(this.document, mapEditorHtml, "./assets/local-icon-light.svg", "./assets/local-icon-dark.svg");
      /** @type {string} */
      this.localToggleBtn.label = "\u672c\u5730";
      this.unsplashToggleBtn = new Laces.IconToggleButton(this.document, mapEditorHtml, "./assets/unsplash-icon-light.svg", "./assets/unsplash-icon-dark.svg");
      /** @type {string} */
      this.unsplashToggleBtn.label = "Unsplash";
      this.huabanToggleBtn = new Laces.IconToggleButton(this.document, mapEditorHtml, "./assets/huaban-icon-light.svg", "./assets/huaban-icon-dark.svg");
      /** @type {string} */
      this.huabanToggleBtn.label = "\u82b1\u74e3";
      this.nameInput = this.prompt.find(".name-input");
      this.localPart = this.prompt.find(".local-part");
      this.localInput = this.prompt.find(".local-input");
      this.localBrowserBtn = this.prompt.find(".browser-btn");
      this.unsplashPart = this.prompt.find(".unsplash-part");
      this.unsplashInput = this.prompt.find(".unsplash-input");
      this.unsplashPrompt = new Breakpoints.ComboboxPrompt(this.document, this.unsplashInput, 114);
      this.unsplashPrompt.init(url.unsplashList, "\u8f93\u5165\u81ea\u5b9a\u4e49\u5206\u7c7b\uff08\u82f1\u6587\uff09");
      this.huabanPart = this.prompt.find(".huaban-part");
      this.huabanInput = this.prompt.find(".huaban-input");
      this.huabanInput.bind("input", function(canCreateDiscussions) {
        return t.inputChanged_handler();
      });
      dom.registerTip(this.document, this.huabanInput.get(0), "http://huabanpro.com/boards/{\u6570\u5b57}");
      this.saveBtn = this.prompt.find(".save-btn");
    }, self.prototype.show = function(value) {
      var self = this;
      this.nameInput.val("");
      this.localInput.val("");
      this.unsplashInput.val("");
      this.huabanInput.val("");
      /** @type {null} */
      this._source = null;
      if (value) {
        /** @type {string} */
        this._source = value;
        setTimeout(function() {
          self.initSelection(value.type);
        }, 10);
        this.nameInput.val(value.name);
        if (value.type == url.SourceType.HUABAN) {
          this.huabanInput.val(value.value);
        } else {
          if (value.type == url.SourceType.LOCAL) {
            this.localInput.val(value.value);
          } else {
            this.unsplashInput.val(value.value);
          }
        }
      } else {
        setTimeout(function() {
          self.initSelection(url.SourceType.UNSPLASH);
        }, 10);
      }
      this.mask.appendTo($("body"));
      this.prompt.appendTo($("body"));
      setTimeout(function() {
        if (!self.prompt.hasClass("visible")) {
          self.prompt.addClass("visible");
        }
        if (!self.mask.hasClass("visible")) {
          self.mask.addClass("visible");
        }
        /**
         * @param {!Event} init
         * @return {undefined}
         */
        self.documentClick_handler_bind = function(init) {
          self.documentClick_handler(init);
        };
        self.document.on("click", self.documentClick_handler_bind);
        /**
         * @param {!Event} webcal
         * @return {undefined}
         */
        self.documentKeyup_handler_bind = function(webcal) {
          self.documentKeyup_handler(webcal);
        };
        self.document.on("keyup", self.documentKeyup_handler_bind);
        /**
         * @param {?} canCreateDiscussions
         * @return {undefined}
         */
        self.closeClick_handler_bind = function(canCreateDiscussions) {
          self.closeClick_handler();
        };
        self.closeBtn.onClick(self.closeClick_handler_bind);
        /**
         * @param {?} canCreateDiscussions
         * @return {undefined}
         */
        self.saveClick_handler_bind = function(canCreateDiscussions) {
          self.saveClick_handler();
        };
        self.saveBtn.on("click", self.saveClick_handler_bind);
      }, 1);
    }, self.prototype.documentClick_handler = function(event) {
      if (!array.contains(event.target, this.prompt.get(0))) {
        this.hide();
      }
    }, self.prototype.documentKeyup_handler = function(event) {
      if (27 == event.keyCode) {
        this.hide();
      }
    }, self.prototype.closeClick_handler = function() {
      this.hide();
    }, self.prototype.saveClick_handler = function() {
      if (this.save()) {
        this.hide();
      }
    }, self.prototype.hide = function() {
      if (!this.unsplashPrompting) {
        this.prompt.removeClass("visible");
        this.mask.removeClass("visible");
        if (this.documentClick_handler_bind) {
          this.document.unbind("click", this.documentClick_handler_bind);
        }
        /** @type {null} */
        this.documentClick_handler_bind = null;
        if (this.documentKeyup_handler_bind) {
          this.document.unbind("keyup", this.documentKeyup_handler_bind);
        }
        /** @type {null} */
        this.documentKeyup_handler_bind = null;
        if (this.closeClick_handler_bind) {
          this.closeBtn.removeClick(this.closeClick_handler_bind);
        }
        /** @type {null} */
        this.closeClick_handler_bind = null;
        if (this.saveClick_handler_bind) {
          this.saveBtn.unbind("click", this.saveClick_handler_bind);
        }
        /** @type {null} */
        this.saveClick_handler_bind = null;
      }
    }, self.prototype.initLogic = function() {
      var _this = this;
      this.localToggleBtn.onSelectedChanged(function(e) {
        _this.selectChanged(e);
      });
      this.unsplashToggleBtn.onSelectedChanged(function(e) {
        _this.selectChanged(e);
      });
      this.huabanToggleBtn.onSelectedChanged(function(e) {
        _this.selectChanged(e);
      });
      this.unsplashPrompt.onselect(function(e, n) {
        _this.unsplashInput.val(e);
        _this.unsplashInput.attr("displayText", n);
        _this.inputChanged_handler();
      });
      this.unsplashPrompt.onOpen(function() {
        /** @type {boolean} */
        _this.unsplashPrompting = true;
      });
      this.unsplashPrompt.onClose(function() {
        /** @type {boolean} */
        _this.unsplashPrompting = false;
      });
      this.localInput.on("click", function() {
        _this.selectLocal();
      });
      this.localBrowserBtn.on("click", function() {
        _this.selectLocal();
      });
    }, self.prototype.selectLocal = function() {
      var me = this;
      var e = this.localInput.val();
      p.openFolderDialog(e).then(function(e) {
        if (e) {
          me.localInput.val(e);
          me.inputChanged_handler();
        }
      });
    }, self.prototype.initSelection = function(callback) {
      this.localToggleBtn.setSelect(false, false);
      this.unsplashToggleBtn.setSelect(false, false);
      this.huabanToggleBtn.setSelect(false, false);
      var options;
      if ((options = null == callback ? this.getStorageSelected() : callback) == url.SourceType.HUABAN) {
        this.huabanToggleBtn.setSelect(true, false);
      } else {
        if (options == url.SourceType.LOCAL) {
          this.localToggleBtn.setSelect(true, false);
        } else {
          if (options == url.SourceType.UNSPLASH) {
            this.unsplashToggleBtn.setSelect(true, false);
          }
        }
      }
      this.updateSelect();
    }, self.prototype.selectChanged = function(e) {
      this.localToggleBtn.setSelect(false, false);
      this.unsplashToggleBtn.setSelect(false, false);
      this.huabanToggleBtn.setSelect(false, false);
      e.setSelect(true, false);
      this.updateSelect();
    }, self.prototype.updateSelect = function() {
      this.localPart.css("display", "none");
      this.huabanPart.css("display", "none");
      this.unsplashPart.css("display", "none");
      if (this.localToggleBtn.getSelect()) {
        this.localPart.css("display", "inherit");
        this.setStorageSelected(url.SourceType.LOCAL);
        this.localInput[0].focus();
      } else {
        if (this.unsplashToggleBtn.getSelect()) {
          this.unsplashPart.css("display", "inherit");
          this.setStorageSelected(url.SourceType.UNSPLASH);
        } else {
          if (this.huabanToggleBtn.getSelect()) {
            this.huabanPart.css("display", "inherit");
            this.setStorageSelected(url.SourceType.HUABAN);
            this.huabanInput[0].focus();
          }
        }
      }
    }, self.prototype.inputChanged_handler = function() {
      var t = this;
      if (this.updateTitleStamp) {
        clearTimeout(this.updateTitleStamp);
        /** @type {null} */
        this.updateTitleStamp = null;
      }
      /** @type {number} */
      this.updateTitleStamp = setTimeout(function() {
        t.updateTitleByInput();
      }, 200);
    }, self.prototype.updateTitleByInput = function() {
      var self = this;
      if (this.localToggleBtn.getSelect()) {
        var e = this.localInput.val();
        m.getBoardTitle(e, "", m.LOCAL_BOARD).then(function(e) {
          self.nameInput.val(e);
        }, function(canCreateDiscussions) {
        });
      } else {
        if (this.huabanToggleBtn.getSelect()) {
          var n = this.huabanInput.val();
          m.getBoardTitle(n, "", m.HUABAN_BOARD).then(function(e) {
            self.nameInput.val(e);
          }, function(canCreateDiscussions) {
          });
        } else {
          if (this.unsplashToggleBtn.getSelect()) {
            var componentsStr = this.unsplashInput.attr("displayText");
            var o = this.unsplashInput.val();
            /** @type {string} */
            var c = "";
            if (componentsStr) {
              c = componentsStr.split(" (")[0];
            }
            m.getBoardTitle(o, c, m.UNSPLASH_BOARD).then(function(e) {
              self.nameInput.val(e);
            }, function(canCreateDiscussions) {
            });
          }
        }
      }
    }, self.prototype.save = function() {
      /** @type {null} */
      var current = null;
      /** @type {string} */
      var sequence = "";
      var n = this.nameInput.val();
      if (n || this.promptInputError(this.nameInput), this.localToggleBtn.getSelect() ? (current = url.SourceType.LOCAL, (sequence = this.localInput.val()) || this.promptInputError(this.localInput)) : this.huabanToggleBtn.getSelect() ? (current = url.SourceType.HUABAN, (!(sequence = this.huabanInput.val()) || -1 == sequence.indexOf("http://huaban.com/boards/") && -1 == sequence.indexOf("https://huaban.com/boards/") && -1 == sequence.indexOf("http://huabanpro.com/boards/") && -1 == sequence.indexOf("https://huabanpro.com/boards/")) && 
      (sequence = "", this.promptInputError(this.huabanInput))) : (current = url.SourceType.UNSPLASH, (sequence = this.unsplashInput.val()) || this.promptInputError(this.unsplashInput)), !n || !sequence) {
        return false;
      }
      var config = {
        name : n,
        type : current,
        value : sequence
      };
      if (this._source) {
        config.id = this._source.id;
      }
      /** @type {number} */
      var key = 0;
      for (; key < this.onSaves.length; key++) {
        this.onSaves[key](config);
      }
      return true;
    }, self.prototype.promptInputError = function(t) {
      if (!t.hasClass("error")) {
        t.addClass("error");
        setTimeout(function() {
          t.removeClass("error");
        }, 500);
      }
    }, self.prototype.onSave = function(data) {
      this.onSaves.push(data);
    }, self.prototype.getStorageSelected = function() {
      var record = this.getStorage();
      return record.has("sourceType") ? record.get("sourceType") : url.SourceType.UNSPLASH;
    }, self.prototype.setStorageSelected = function(t) {
      this.getStorage().set("sourceType", t);
    }, self.prototype.getStorage = function() {
      return NodeStorage.createStorage("./editprompt.dat");
    }, self;
  }();
  e.SourceEditPrompt = newOrg;
}, function(canCreateDiscussions, data, require) {
  Object.defineProperty(data, "__esModule", {
    value : true
  });
  var ui = require(11);
  var $ = require(0);
  var NodeStorage = require(9);
  var crypto = require(14);
  var app = require(21);
  var options = require(4);
  var UiImpl = require(62);
  var request = require(17);
  /** @type {number} */
  data.remainDays = 0;
  /** @type {boolean} */
  data.trial = false;
  var LoginPage = function() {
    /**
     * @param {!Object} doc
     * @return {undefined}
     */
    function init(doc) {
      var michl = this;
      /** @type {string} */
      this.accountCache = "";
      /** @type {string} */
      this.passwordCache = "";
      /** @type {!Object} */
      this.document = doc;
      this._expirePrompt = new UiImpl.ExpirePrompt(doc);
      $(".login-page .login-btn").click(function(canCreateDiscussions) {
        return michl.login();
      });
      $(".login-page .account-input").on("keyup", function(event) {
        if (13 == event.keyCode) {
          michl.login();
        }
      });
      $(".login-page .password-input").on("keyup", function(event) {
        if (13 == event.keyCode) {
          michl.login();
        }
      });
      this.autoLogin();
    }
    return Object.defineProperty(init.prototype, "expirePrompt", {
      get : function() {
        return this._expirePrompt;
      },
      enumerable : true,
      configurable : true
    }), init.prototype.display = function() {
      if (!$(".login-page").hasClass("visible")) {
        $(".login-page").addClass("visible");
      }
    }, init.prototype.hide = function() {
      $(".login-page").removeClass("visible");
    }, init.prototype.autoLogin = function() {
      var self = this;
      var url = this.getStorageAccount();
      var res = this.getStoragePassword();
      if (url && res) {
        $(".login-page .account-input").val(url);
        $(".login-page .password-input").val(res);
        setTimeout(function() {
          if (self.getStorageAutoLogin()) {
            self.doLogin(url, res);
          }
        }, 100);
      }
    }, init.prototype.getCurrentAccount = function() {
      return this.accountCache;
    }, init.prototype.getCurrentPassword = function(zoomAware) {
      if (zoomAware) {
        var md5 = crypto.createHash("md5");
        md5.update(this.passwordCache);
        var b = md5.digest("hex");
        return b.toLocaleLowerCase();
      }
      return this.passwordCache;
    }, init.prototype.login = function() {
      var event = $(".login-page .account-input").val();
      var cdbOpacity = $(".login-page .password-input").val();
      this.doLogin(event, cdbOpacity);
    }, init.prototype.doLogin = function(name, data) {
      /** @type {string} */
      this.accountCache = name;
      /** @type {string} */
      this.passwordCache = data;
      var md5 = crypto.createHash("md5");
      md5.update(data);
      data = (data = md5.digest("hex")).toLocaleLowerCase();
      this.error("");
      if ("" == name && "" == data) {
        this.error("\u90ae\u7bb1\u5730\u5740\u53ca\u5bc6\u7801\u672a\u586b\u5199");
      } else {
        if ("" == name && "" != data) {
          this.error("\u90ae\u7bb1\u5730\u5740\u672a\u586b\u5199");
        } else {
          if ("" != name && "" == data) {
            this.error("\u5bc6\u7801\u672a\u586b\u5199");
          } else {
            if (this.checkEmail(name)) {
              this.loginHttp(name, data);
            } else {
              this.error("\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e");
            }
          }
        }
      }
    }, init.prototype.loginHttp = function(identifier, buffer) {
      var view = this;
      this.loginStart();
      app.post({
        messageId : 1001,
        email : identifier,
        password : buffer,
        pluginKey : "34C9V6AS8",
        version : options.pluginVersion()
      }).then(function(options) {
        if (view.loginEnd(), options.success) {
          view.setStorageAccount(view.accountCache);
          view.setStoragePassword(view.passwordCache);
          var isExpired = options.expired;
          data.remainDays = options.remainDays;
          data.trial = options.trial;
          var identifier = options.name;
          if (isExpired) {
            view.error("\u8d26\u6237\u5df2\u5230\u671f");
            view.expirePrompt.show(data.trial);
            request.event("login", "expire");
          } else {
            view.setStorageAutoLogin(true);
            ui.getContainer().display(ui.PageType.main);
            ui.getContainer().getFooter().setRemainDays(data.remainDays, data.trial);
            ui.getContainer().getFooter().setName(identifier);
            request.event("login", "success");
          }
        } else {
          var code = options.errorCode;
          if (1 == code) {
            view.error("\u8d26\u6237\u4e0d\u5b58\u5728");
          } else {
            if (2 == code) {
              view.error("\u767b\u5f55\u5bc6\u7801\u9519\u8bef");
            } else {
              if (3 == code) {
                view.error("\u8d26\u6237\u672a\u6fc0\u6d3b");
              } else {
                if (4 == code) {
                  view.error("\u5f53\u524d\u63d2\u4ef6\u4e0d\u5b58\u5728");
                }
              }
            }
          }
          request.event("login", "fail");
        }
      }, function(canCreateDiscussions) {
        view.loginEnd();
        view.error("\u670d\u52a1\u5668\u4e0d\u53ef\u7528");
      });
    }, init.prototype.error = function(name) {
      var visibleSubmenu = $(".login-page .error-prompt");
      var n = $(".login-page .error-prompt a");
      if (name) {
        if (!visibleSubmenu.hasClass("visible")) {
          visibleSubmenu.addClass("visible");
        }
      } else {
        visibleSubmenu.removeClass("visible");
      }
      n.text(name);
      this.setStorageAutoLogin(false);
    }, init.prototype.loginStart = function() {
      var $dt = $(".login-page .login-btn");
      if (!$dt.hasClass("disable")) {
        $dt.addClass("disable");
      }
      $dt.text("\u767b\u5f55\u4e2d");
    }, init.prototype.loginEnd = function() {
      var $dt = $(".login-page .login-btn");
      $dt.removeClass("disable");
      $dt.text("\u767b\u5f55");
    }, init.prototype.checkEmail = function(val) {
      return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+(w+([.-]\w+))*/.test(val);
    }, init.prototype.getStorageAccount = function() {
      var storage = this.getStorage();
      return storage.has("account") ? storage.get("account") : "";
    }, init.prototype.setStorageAccount = function(t) {
      this.getStorage().set("account", t);
    }, init.prototype.getStoragePassword = function() {
      var storage = this.getStorage();
      return storage.has("password") ? storage.get("password") : "";
    }, init.prototype.setStoragePassword = function(t) {
      this.getStorage().set("password", t);
    }, init.prototype.getStorageAutoLogin = function() {
      var storage = this.getStorage();
      return !!storage.has("autoLogin") && storage.get("autoLogin");
    }, init.prototype.setStorageAutoLogin = function(t) {
      this.getStorage().set("autoLogin", t);
    }, init.prototype.getStorage = function() {
      return NodeStorage.createStorage("./login.dat");
    }, init.prototype.logout = function() {
      this.setStorageAutoLogin(false);
    }, init;
  }();
  data.LoginPage = LoginPage;
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var $ = require(0);
  var neatHelp = require(8);
  var Validation = require(11);
  var newOrg = function() {
    /**
     * @param {?} id
     * @return {undefined}
     */
    function handler(id) {
      this.document = $(id);
      this.initView();
    }
    return handler.prototype.initView = function() {
      var t = this;
      this.mask = $(".expire-prompt-mask");
      this.prompt = $(".expire-prompt");
      var connection1 = this.prompt.find(".title-container");
      this.closeBtn = new neatHelp.IconButton(this.document, connection1, "./assets/close-icon-light.svg", "./assets/close-icon-dark.svg", null, ["close-btn"]);
      this.title = this.prompt.find(".display-title");
      this.des = this.prompt.find(".des");
      this.buyBtn = this.prompt.find(".buy-btn");
      this.closeBtn.onClick(function() {
        return t.closeClick_handler();
      });
      this.buyBtn.click(function() {
        return t.buyClick_handler();
      });
    }, handler.prototype.show = function(saveCallBack) {
      if (saveCallBack) {
        this.title.text("\u8bd5\u7528\u671f\u5df2\u7ed3\u675f");
        this.des.text("\u8d2d\u4e70\u540e\u65b9\u53ef\u7ee7\u7eed\u4f7f\u7528");
      } else {
        this.title.text("\u5f53\u524d\u8d26\u6237\u5df2\u5230\u671f");
        this.des.text("\u7eed\u8d39\u540e\u65b9\u53ef\u7ee7\u7eed\u4f7f\u7528");
      }
      if (!this.prompt.hasClass("visible")) {
        this.prompt.addClass("visible");
      }
      if (!this.mask.hasClass("visible")) {
        this.mask.addClass("visible");
      }
    }, handler.prototype.closeClick_handler = function() {
      this.hide();
    }, handler.prototype.buyClick_handler = function() {
      /** @type {string} */
      var url = "http://www.fancynode.com.cn/sweet_onion?name=" + Validation.getContainer().getLoginPage().getCurrentAccount() + "&key=" + Validation.getContainer().getLoginPage().getCurrentPassword(true) + "&anchor=price-container";
      window.cep.util.openURLInDefaultBrowser(url);
      this.hide();
    }, handler.prototype.hide = function() {
      this.prompt.removeClass("visible");
      this.mask.removeClass("visible");
    }, handler;
  }();
  e.ExpirePrompt = newOrg;
}, function(canCreateDiscussions, exports, require) {
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  var $ = require(0);
  var tree = require(8);
  var mongodb = require(64);
  var fsevents = require(65);
  var component = require(11);
  var t = require(17);
  var Footer = function() {
    /**
     * @param {string} path
     * @return {undefined}
     */
    function init(path) {
      var settings = this;
      /** @type {string} */
      this.document = path;
      this.about = new mongodb.AboutPrompt(path);
      this.userBtn = new tree.IconButton(path, $(".footer-container"), "./assets/user-head-icon-libht.svg", "./assets/user-head-icon-dark.svg", null, ["account-btn"]);
      /** @type {string} */
      this.userBtn.label = "";
      this.prompt = $('<div class="prompt"></div>').appendTo(".footer-container");
      $('<div class="space"></div>').appendTo(".footer-container");
      this.aboutBtn = $('<div class="about-btn"></div>').appendTo($(".footer-container"));
      this.aboutBtn.click(function() {
        return settings.aboutClick_handler();
      });
      this.prompt.click(function() {
        return settings.promptClick_handler();
      });
      this.menuPrompt = new fsevents.MenuPrompt(path, this.userBtn.getBuild());
      this.menuPrompt.init([{
        id : "setting",
        text : "\u8d26\u6237\u8bbe\u7f6e",
        type : "text"
      }, {
        id : "buy",
        text : "\u8d2d\u4e70",
        type : "text"
      }, {
        id : "",
        text : "",
        type : "gapline"
      }, {
        id : "logout",
        text : "\u6ce8\u9500",
        type : "text"
      }], "top", 0, -5);
      this.menuPrompt.onSelect(function(t) {
        return settings.menuSelected(t);
      });
    }
    return init.prototype.menuSelected = function(fn) {
      if (t.event("menu", "select", fn), "setting" == fn) {
        var e = component.getContainer().getLoginPage().getCurrentAccount();
        var harFileURL = component.getContainer().getLoginPage().getCurrentPassword(true);
        /** @type {string} */
        var url = "http://www.fancynode.com.cn/user?name=" + e + "&key=" + harFileURL;
        window.cep.util.openURLInDefaultBrowser(url);
      } else {
        if ("buy" == fn) {
          /** @type {string} */
          url = "http://www.fancynode.com.cn/sweet_onion?name=" + e + "&key=" + harFileURL + "&anchor=price-container";
          window.cep.util.openURLInDefaultBrowser(url);
        } else {
          if ("logout" == fn) {
            component.getContainer().display(component.PageType.login);
            component.getContainer().getLoginPage().logout();
          }
        }
      }
    }, init.prototype.show = function() {
      if (!$(".footer-container").hasClass("visible")) {
        $(".footer-container").addClass("visible");
      }
    }, init.prototype.hide = function() {
      $(".footer-container").removeClass("visible");
    }, init.prototype.setName = function(name) {
      /** @type {string} */
      this.userBtn.label = name;
    }, init.prototype.aboutClick_handler = function() {
      t.event("about", "open");
      this.about.show();
    }, init.prototype.promptClick_handler = function() {
      t.event("remainDays", "click");
      /** @type {string} */
      var url = "http://www.fancynode.com.cn/sweet_onion?name=" + component.getContainer().getLoginPage().getCurrentAccount() + "&key=" + component.getContainer().getLoginPage().getCurrentPassword(true) + "&anchor=price-container";
      window.cep.util.openURLInDefaultBrowser(url);
    }, init.prototype.setRemainDays = function(formatters, customFormatters) {
      if (formatters < 30) {
        if (customFormatters) {
          this.prompt.text("(\u8bd5\u7528\u671f" + formatters + "\u5929)");
        } else {
          this.prompt.text("(\u5269\u4f59" + formatters + "\u5929)");
        }
        if (formatters <= 3) {
          this.prompt.addClass("expiring");
        } else {
          this.prompt.removeClass("expiring");
        }
      } else {
        this.prompt.text("");
      }
    }, init;
  }();
  exports.Footer = Footer;
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var $ = require(0);
  var Breakpoints = require(8);
  var _ = require(18);
  var options = require(4);
  var newOrg = function() {
    /**
     * @param {?} id
     * @return {undefined}
     */
    function handler(id) {
      this.document = $(id);
      this.initView();
    }
    return handler.prototype.initView = function() {
      var t = this;
      this.mask = $(".about-prompt-mask");
      this.prompt = $(".about-prompt");
      $(".about-prompt .version .content").text("v" + options.pluginVersion());
      this.closeBtn = new Breakpoints.IconButton(this.document, this.prompt, "./assets/close-icon-light.svg", "./assets/close-icon-dark.svg", null, ["close-btn"]);
      this.closeBtn.onClick(function() {
        return t.closeClick_handler();
      });
    }, handler.prototype.show = function() {
      var handle = this;
      if (!this.prompt.hasClass("visible")) {
        this.prompt.addClass("visible");
      }
      if (!this.mask.hasClass("visible")) {
        this.mask.addClass("visible");
      }
      setTimeout(function() {
        /**
         * @param {!Event} e
         * @return {undefined}
         */
        handle.documentClick_handler_bind = function(e) {
          handle.documentClick_handler(e);
        };
        handle.document.on("click", handle.documentClick_handler_bind);
      }, 1);
    }, handler.prototype.documentClick_handler = function(ast) {
      if (!_.contains(ast.target, this.prompt.get(0))) {
        this.hide();
      }
    }, handler.prototype.closeClick_handler = function() {
      this.hide();
    }, handler.prototype.buyClick_handler = function() {
      this.hide();
    }, handler.prototype.hide = function() {
      this.prompt.removeClass("visible");
      this.mask.removeClass("visible");
      if (this.documentClick_handler_bind) {
        this.document.unbind("click", this.documentClick_handler_bind);
      }
      /** @type {null} */
      this.documentClick_handler_bind = null;
    }, handler;
  }();
  e.AboutPrompt = newOrg;
}, function(canCreateDiscussions, e, require) {
  Object.defineProperty(e, "__esModule", {
    value : true
  });
  var $ = require(0);
  var url = require(18);
  var newOrg = function() {
    /**
     * @param {?} html
     * @param {?} target
     * @param {number} value
     * @return {undefined}
     */
    function self(html, target, value) {
      /** @type {string} */
      this.pos = "bottom";
      /** @type {number} */
      this.offsetX = 0;
      /** @type {number} */
      this.offsetY = 0;
      /** @type {!Array} */
      this.onSelectFuncs = [];
      /** @type {!Array} */
      this.onCloses = [];
      /** @type {!Array} */
      this.onOpens = [];
      this.target = $(target);
      this.document = $(html);
      /** @type {number} */
      this.maxWidth = value;
    }
    return self.prototype.init = function(config, p, x, y) {
      var r = this;
      if (p) {
        /** @type {number} */
        this.pos = p;
      }
      if (x) {
        /** @type {number} */
        this.offsetX = x;
      }
      if (y) {
        /** @type {number} */
        this.offsetY = y;
      }
      this.mask = $('<div class="menu-container-mask"></div>').appendTo($("body"));
      /** @type {string} */
      var header = '<div class="menu-container">';
      /** @type {number} */
      var i = 0;
      for (; i < config.length; i++) {
        if ("text" == config[i].type) {
          /** @type {string} */
          header = header + ('<div class="menu-item" data="' + config[i].id + '">' + config[i].text + "</div>");
        } else {
          if ("gapline" == config[i].type) {
            /** @type {string} */
            header = header + '<div class="gapline"></div>';
          }
        }
      }
      /** @type {string} */
      header = header + "</div>";
      this.prompt = $(header).appendTo($("body"));
      if (this.maxWidth) {
        this.prompt.css("max-width", this.maxWidth + "px");
      }
      this.target.click(function(canCreateDiscussions) {
        r.targetClick_handler();
      });
    }, self.prototype.targetClick_handler = function() {
      var that = this;
      var cx = this.target.offset().left;
      var ay = this.target.offset().top;
      var w = this.target.outerWidth();
      var p = this.target.outerHeight();
      var radius = this.prompt.outerWidth();
      var cy = this.prompt.outerHeight();
      /** @type {number} */
      var x = 0;
      /** @type {number} */
      var y = 0;
      if ("top" == this.pos) {
        x = cx;
        /** @type {number} */
        y = ay - cy;
      } else {
        if ("bottom" == this.pos) {
          x = cx;
          y = ay + p;
        } else {
          if ("left" == this.pos) {
            x = cx + w;
            y = ay;
          } else {
            if ("right" == this.pos) {
              /** @type {number} */
              x = cx - radius;
              y = ay;
            }
          }
        }
      }
      x = x + this.offsetX;
      y = y + this.offsetY;
      this.prompt.css("left", x + "px");
      this.prompt.css("top", y + "px");
      this.mask.appendTo($("body"));
      this.prompt.appendTo($("body"));
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < this.onOpens.length; layer_i++) {
        this.onOpens[layer_i]();
      }
      setTimeout(function() {
        if (!that.prompt.hasClass("visible")) {
          that.prompt.addClass("visible");
        }
        if (!that.mask.hasClass("visible")) {
          that.mask.addClass("visible");
        }
        /**
         * @param {!Event} init
         * @return {undefined}
         */
        that.documentClick_handler_bind = function(init) {
          that.documentClick_handler(init);
        };
        that.document.on("click", that.documentClick_handler_bind);
        /**
         * @param {!Event} e
         * @return {undefined}
         */
        that.documentKeyup_handler_bind = function(e) {
          that.documentKeyup_handler(e);
        };
        that.document.on("keyup", that.documentKeyup_handler_bind);
      }, 1);
    }, self.prototype.documentClick_handler = function(event) {
      if (url.contains(event.target, this.prompt.get(0))) {
        if ($(event.target).hasClass("menu-item")) {
          var agents_html = $(event.target).attr("data");
          /** @type {number} */
          var layer_i = 0;
          for (; layer_i < this.onSelectFuncs.length; layer_i++) {
            (0, this.onSelectFuncs[layer_i])(agents_html);
          }
          this.hide();
        }
      } else {
        this.hide();
      }
    }, self.prototype.documentKeyup_handler = function(event) {
      if (27 == event.keyCode) {
        this.hide();
      }
    }, self.prototype.hide = function() {
      if (this.documentClick_handler_bind) {
        this.document.unbind("click", this.documentClick_handler_bind);
      }
      /** @type {null} */
      this.documentClick_handler_bind = null;
      if (this.documentKeyup_handler_bind) {
        this.document.unbind("keyup", this.documentKeyup_handler_bind);
      }
      /** @type {null} */
      this.documentKeyup_handler_bind = null;
      this.prompt.removeClass("visible");
      this.mask.removeClass("visible");
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < this.onCloses.length; layer_i++) {
        this.onCloses[layer_i]();
      }
    }, self.prototype.onSelect = function(value) {
      this.onSelectFuncs.push(value);
    }, self.prototype.onClose = function(onCloseFunc) {
      this.onCloses.push(onCloseFunc);
    }, self.prototype.onOpen = function(value) {
      this.onOpens.push(value);
    }, self;
  }();
  e.MenuPrompt = newOrg;
}]);
