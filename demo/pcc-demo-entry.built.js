var et, ae, Us, Vs, Ce, Rn, zs, Ws, Qs, _n, Yt, Jt, js, Ke = {}, Ks = [], Ka = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, tt = Array.isArray;
function Ie(t, n) {
  for (var s in n) t[s] = n[s];
  return t;
}
function gn(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function j(t, n, s) {
  var a, i, r, o = {};
  for (r in n) r == "key" ? a = n[r] : r == "ref" ? i = n[r] : o[r] = n[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? et.call(arguments, 2) : s), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return We(t, o, a, i, null);
}
function We(t, n, s, a, i) {
  var r = { type: t, props: n, key: s, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Us, __i: -1, __u: 0 };
  return i == null && ae.vnode != null && ae.vnode(r), r;
}
function Ya() {
  return { current: null };
}
function K(t) {
  return t.children;
}
function Qe(t, n) {
  this.props = t, this.context = n;
}
function $e(t, n) {
  if (n == null) return t.__ ? $e(t.__, t.__i + 1) : null;
  for (var s; n < t.__k.length; n++) if ((s = t.__k[n]) != null && s.__e != null) return s.__e;
  return typeof t.type == "function" ? $e(t) : null;
}
function Ys(t) {
  var n, s;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++) if ((s = t.__k[n]) != null && s.__e != null) {
      t.__e = t.__c.base = s.__e;
      break;
    }
    return Ys(t);
  }
}
function Zt(t) {
  (!t.__d && (t.__d = !0) && Ce.push(t) && !It.__r++ || Rn != ae.debounceRendering) && ((Rn = ae.debounceRendering) || zs)(It);
}
function It() {
  for (var t, n, s, a, i, r, o, c = 1; Ce.length; ) Ce.length > c && Ce.sort(Ws), t = Ce.shift(), c = Ce.length, t.__d && (s = void 0, a = void 0, i = (a = (n = t).__v).__e, r = [], o = [], n.__P && ((s = Ie({}, a)).__v = a.__v + 1, ae.vnode && ae.vnode(s), fn(n.__P, s, a, n.__n, n.__P.namespaceURI, 32 & a.__u ? [i] : null, r, i ?? $e(a), !!(32 & a.__u), o), s.__v = a.__v, s.__.__k[s.__i] = s, ea(r, s, o), a.__e = a.__ = null, s.__e != i && Ys(s)));
  It.__r = 0;
}
function Js(t, n, s, a, i, r, o, c, d, l, p) {
  var u, m, h, _, g, f, b, y = a && a.__k || Ks, I = n.length;
  for (d = Ja(s, n, y, d, I), u = 0; u < I; u++) (h = s.__k[u]) != null && (m = h.__i == -1 ? Ke : y[h.__i] || Ke, h.__i = u, f = fn(t, h, m, i, r, o, c, d, l, p), _ = h.__e, h.ref && m.ref != h.ref && (m.ref && yn(m.ref, null, h), p.push(h.ref, h.__c || _, h)), g == null && _ != null && (g = _), (b = !!(4 & h.__u)) || m.__k === h.__k ? d = Zs(h, d, t, b) : typeof h.type == "function" && f !== void 0 ? d = f : _ && (d = _.nextSibling), h.__u &= -7);
  return s.__e = g, d;
}
function Ja(t, n, s, a, i) {
  var r, o, c, d, l, p = s.length, u = p, m = 0;
  for (t.__k = new Array(i), r = 0; r < i; r++) (o = n[r]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = t.__k[r] = We(null, o, null, null, null) : tt(o) ? o = t.__k[r] = We(K, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = t.__k[r] = We(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : t.__k[r] = o, d = r + m, o.__ = t, o.__b = t.__b + 1, c = null, (l = o.__i = Za(o, s, d, u)) != -1 && (u--, (c = s[l]) && (c.__u |= 2)), c == null || c.__v == null ? (l == -1 && (i > p ? m-- : i < p && m++), typeof o.type != "function" && (o.__u |= 4)) : l != d && (l == d - 1 ? m-- : l == d + 1 ? m++ : (l > d ? m-- : m++, o.__u |= 4))) : t.__k[r] = null;
  if (u) for (r = 0; r < p; r++) (c = s[r]) != null && (2 & c.__u) == 0 && (c.__e == a && (a = $e(c)), na(c, c));
  return a;
}
function Zs(t, n, s, a) {
  var i, r;
  if (typeof t.type == "function") {
    for (i = t.__k, r = 0; i && r < i.length; r++) i[r] && (i[r].__ = t, n = Zs(i[r], n, s, a));
    return n;
  }
  t.__e != n && (a && (n && t.type && !n.parentNode && (n = $e(t)), s.insertBefore(t.__e, n || null)), n = t.__e);
  do
    n = n && n.nextSibling;
  while (n != null && n.nodeType == 8);
  return n;
}
function Xs(t, n) {
  return n = n || [], t == null || typeof t == "boolean" || (tt(t) ? t.some(function(s) {
    Xs(s, n);
  }) : n.push(t)), n;
}
function Za(t, n, s, a) {
  var i, r, o, c = t.key, d = t.type, l = n[s], p = l != null && (2 & l.__u) == 0;
  if (l === null && c == null || p && c == l.key && d == l.type) return s;
  if (a > (p ? 1 : 0)) {
    for (i = s - 1, r = s + 1; i >= 0 || r < n.length; ) if ((l = n[o = i >= 0 ? i-- : r++]) != null && (2 & l.__u) == 0 && c == l.key && d == l.type) return o;
  }
  return -1;
}
function qn(t, n, s) {
  n[0] == "-" ? t.setProperty(n, s ?? "") : t[n] = s == null ? "" : typeof s != "number" || Ka.test(n) ? s : s + "px";
}
function it(t, n, s, a, i) {
  var r, o;
  e: if (n == "style") if (typeof s == "string") t.style.cssText = s;
  else {
    if (typeof a == "string" && (t.style.cssText = a = ""), a) for (n in a) s && n in s || qn(t.style, n, "");
    if (s) for (n in s) a && s[n] == a[n] || qn(t.style, n, s[n]);
  }
  else if (n[0] == "o" && n[1] == "n") r = n != (n = n.replace(Qs, "$1")), o = n.toLowerCase(), n = o in t || n == "onFocusOut" || n == "onFocusIn" ? o.slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + r] = s, s ? a ? s.u = a.u : (s.u = _n, t.addEventListener(n, r ? Jt : Yt, r)) : t.removeEventListener(n, r ? Jt : Yt, r);
  else {
    if (i == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in t) try {
      t[n] = s ?? "";
      break e;
    } catch {
    }
    typeof s == "function" || (s == null || s === !1 && n[4] != "-" ? t.removeAttribute(n) : t.setAttribute(n, n == "popover" && s == 1 ? "" : s));
  }
}
function On(t) {
  return function(n) {
    if (this.l) {
      var s = this.l[n.type + t];
      if (n.t == null) n.t = _n++;
      else if (n.t < s.u) return;
      return s(ae.event ? ae.event(n) : n);
    }
  };
}
function fn(t, n, s, a, i, r, o, c, d, l) {
  var p, u, m, h, _, g, f, b, y, I, D, k, T, A, x, C, S, w = n.type;
  if (n.constructor !== void 0) return null;
  128 & s.__u && (d = !!(32 & s.__u), r = [c = n.__e = s.__e]), (p = ae.__b) && p(n);
  e: if (typeof w == "function") try {
    if (b = n.props, y = "prototype" in w && w.prototype.render, I = (p = w.contextType) && a[p.__c], D = p ? I ? I.props.value : p.__ : a, s.__c ? f = (u = n.__c = s.__c).__ = u.__E : (y ? n.__c = u = new w(b, D) : (n.__c = u = new Qe(b, D), u.constructor = w, u.render = ei), I && I.sub(u), u.state || (u.state = {}), u.__n = a, m = u.__d = !0, u.__h = [], u._sb = []), y && u.__s == null && (u.__s = u.state), y && w.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Ie({}, u.__s)), Ie(u.__s, w.getDerivedStateFromProps(b, u.__s))), h = u.props, _ = u.state, u.__v = n, m) y && w.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), y && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (y && w.getDerivedStateFromProps == null && b !== h && u.componentWillReceiveProps != null && u.componentWillReceiveProps(b, D), n.__v == s.__v || !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(b, u.__s, D) === !1) {
        for (n.__v != s.__v && (u.props = b, u.state = u.__s, u.__d = !1), n.__e = s.__e, n.__k = s.__k, n.__k.some(function(O) {
          O && (O.__ = n);
        }), k = 0; k < u._sb.length; k++) u.__h.push(u._sb[k]);
        u._sb = [], u.__h.length && o.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(b, u.__s, D), y && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(h, _, g);
      });
    }
    if (u.context = D, u.props = b, u.__P = t, u.__e = !1, T = ae.__r, A = 0, y) {
      for (u.state = u.__s, u.__d = !1, T && T(n), p = u.render(u.props, u.state, u.context), x = 0; x < u._sb.length; x++) u.__h.push(u._sb[x]);
      u._sb = [];
    } else do
      u.__d = !1, T && T(n), p = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++A < 25);
    u.state = u.__s, u.getChildContext != null && (a = Ie(Ie({}, a), u.getChildContext())), y && !m && u.getSnapshotBeforeUpdate != null && (g = u.getSnapshotBeforeUpdate(h, _)), C = p, p != null && p.type === K && p.key == null && (C = ta(p.props.children)), c = Js(t, tt(C) ? C : [C], n, s, a, i, r, o, c, d, l), u.base = n.__e, n.__u &= -161, u.__h.length && o.push(u), f && (u.__E = u.__ = null);
  } catch (O) {
    if (n.__v = null, d || r != null) if (O.then) {
      for (n.__u |= d ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      r[r.indexOf(c)] = null, n.__e = c;
    } else {
      for (S = r.length; S--; ) gn(r[S]);
      Xt(n);
    }
    else n.__e = s.__e, n.__k = s.__k, O.then || Xt(n);
    ae.__e(O, n, s);
  }
  else r == null && n.__v == s.__v ? (n.__k = s.__k, n.__e = s.__e) : c = n.__e = Xa(s.__e, n, s, a, i, r, o, d, l);
  return (p = ae.diffed) && p(n), 128 & n.__u ? void 0 : c;
}
function Xt(t) {
  t && t.__c && (t.__c.__e = !0), t && t.__k && t.__k.forEach(Xt);
}
function ea(t, n, s) {
  for (var a = 0; a < s.length; a++) yn(s[a], s[++a], s[++a]);
  ae.__c && ae.__c(n, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      ae.__e(r, i.__v);
    }
  });
}
function ta(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : tt(t) ? t.map(ta) : Ie({}, t);
}
function Xa(t, n, s, a, i, r, o, c, d) {
  var l, p, u, m, h, _, g, f = s.props || Ke, b = n.props, y = n.type;
  if (y == "svg" ? i = "http://www.w3.org/2000/svg" : y == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), r != null) {
    for (l = 0; l < r.length; l++) if ((h = r[l]) && "setAttribute" in h == !!y && (y ? h.localName == y : h.nodeType == 3)) {
      t = h, r[l] = null;
      break;
    }
  }
  if (t == null) {
    if (y == null) return document.createTextNode(b);
    t = document.createElementNS(i, y, b.is && b), c && (ae.__m && ae.__m(n, r), c = !1), r = null;
  }
  if (y == null) f === b || c && t.data == b || (t.data = b);
  else {
    if (r = r && et.call(t.childNodes), !c && r != null) for (f = {}, l = 0; l < t.attributes.length; l++) f[(h = t.attributes[l]).name] = h.value;
    for (l in f) if (h = f[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") u = h;
      else if (!(l in b)) {
        if (l == "value" && "defaultValue" in b || l == "checked" && "defaultChecked" in b) continue;
        it(t, l, null, h, i);
      }
    }
    for (l in b) h = b[l], l == "children" ? m = h : l == "dangerouslySetInnerHTML" ? p = h : l == "value" ? _ = h : l == "checked" ? g = h : c && typeof h != "function" || f[l] === h || it(t, l, h, f[l], i);
    if (p) c || u && (p.__html == u.__html || p.__html == t.innerHTML) || (t.innerHTML = p.__html), n.__k = [];
    else if (u && (t.innerHTML = ""), Js(n.type == "template" ? t.content : t, tt(m) ? m : [m], n, s, a, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, r, o, r ? r[0] : s.__k && $e(s, 0), c, d), r != null) for (l = r.length; l--; ) gn(r[l]);
    c || (l = "value", y == "progress" && _ == null ? t.removeAttribute("value") : _ != null && (_ !== t[l] || y == "progress" && !_ || y == "option" && _ != f[l]) && it(t, l, _, f[l], i), l = "checked", g != null && g != t[l] && it(t, l, g, f[l], i));
  }
  return t;
}
function yn(t, n, s) {
  try {
    if (typeof t == "function") {
      var a = typeof t.__u == "function";
      a && t.__u(), a && n == null || (t.__u = t(n));
    } else t.current = n;
  } catch (i) {
    ae.__e(i, s);
  }
}
function na(t, n, s) {
  var a, i;
  if (ae.unmount && ae.unmount(t), (a = t.ref) && (a.current && a.current != t.__e || yn(a, null, n)), (a = t.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (r) {
      ae.__e(r, n);
    }
    a.base = a.__P = null;
  }
  if (a = t.__k) for (i = 0; i < a.length; i++) a[i] && na(a[i], n, s || typeof t.type != "function");
  s || gn(t.__e), t.__c = t.__ = t.__e = void 0;
}
function ei(t, n, s) {
  return this.constructor(t, s);
}
function Se(t, n, s) {
  var a, i, r, o;
  n == document && (n = document.documentElement), ae.__ && ae.__(t, n), i = (a = typeof s == "function") ? null : s && s.__k || n.__k, r = [], o = [], fn(n, t = (!a && s || n).__k = j(K, null, [t]), i || Ke, Ke, n.namespaceURI, !a && s ? [s] : i ? null : n.firstChild ? et.call(n.childNodes) : null, r, !a && s ? s : i ? i.__e : n.firstChild, a, o), ea(r, t, o);
}
function sa(t, n) {
  Se(t, n, sa);
}
function ti(t, n, s) {
  var a, i, r, o, c = Ie({}, t.props);
  for (r in t.type && t.type.defaultProps && (o = t.type.defaultProps), n) r == "key" ? a = n[r] : r == "ref" ? i = n[r] : c[r] = n[r] === void 0 && o != null ? o[r] : n[r];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? et.call(arguments, 2) : s), We(t.type, c, a || t.key, i || t.ref, null);
}
function ni(t) {
  function n(s) {
    var a, i;
    return this.getChildContext || (a = /* @__PURE__ */ new Set(), (i = {})[n.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      a = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value != r.value && a.forEach(function(o) {
        o.__e = !0, Zt(o);
      });
    }, this.sub = function(r) {
      a.add(r);
      var o = r.componentWillUnmount;
      r.componentWillUnmount = function() {
        a && a.delete(r), o && o.call(r);
      };
    }), s.children;
  }
  return n.__c = "__cC" + js++, n.__ = t, n.Provider = n.__l = (n.Consumer = function(s, a) {
    return s.children(a);
  }).contextType = n, n;
}
et = Ks.slice, ae = { __e: function(t, n, s, a) {
  for (var i, r, o; n = n.__; ) if ((i = n.__c) && !i.__) try {
    if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, a || {}), o = i.__d), o) return i.__E = i;
  } catch (c) {
    t = c;
  }
  throw t;
} }, Us = 0, Vs = function(t) {
  return t != null && t.constructor === void 0;
}, Qe.prototype.setState = function(t, n) {
  var s;
  s = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ie({}, this.state), typeof t == "function" && (t = t(Ie({}, s), this.props)), t && Ie(s, t), t != null && this.__v && (n && this._sb.push(n), Zt(this));
}, Qe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Zt(this));
}, Qe.prototype.render = K, Ce = [], zs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ws = function(t, n) {
  return t.__v.__b - n.__v.__b;
}, It.__r = 0, Qs = /(PointerCapture)$|Capture$/i, _n = 0, Yt = On(!1), Jt = On(!0), js = 0;
const si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: Qe,
  Fragment: K,
  cloneElement: ti,
  createContext: ni,
  createElement: j,
  createRef: Ya,
  h: j,
  hydrate: sa,
  get isValidElement() {
    return Vs;
  },
  get options() {
    return ae;
  },
  render: Se,
  toChildArray: Xs
}, Symbol.toStringTag, { value: "Module" }));
var ai = 0;
function e(t, n, s, a, i, r) {
  n || (n = {});
  var o, c, d = n;
  if ("ref" in d) for (c in d = {}, n) c == "ref" ? o = n[c] : d[c] = n[c];
  var l = { type: t, props: d, key: s, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ai, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof t == "function" && (o = t.defaultProps)) for (c in o) d[c] === void 0 && (d[c] = o[c]);
  return ae.vnode && ae.vnode(l), l;
}
const ge = {
  // ════════════════════════════════════════════
  // DASHBOARD (useCommandCenter)
  // ════════════════════════════════════════════
  dashboard: {
    assessments: [
      {
        id: "4860265",
        externalAssessmentId: "4860265",
        patientId: "2657226",
        patientName: "Doe, Jane",
        assessmentType: "Quarterly",
        ardDate: "2026-01-13",
        status: "open",
        payerType: "medicaid",
        assessmentClass: "obra",
        isHippsOpportunityPrimary: !0,
        deadlines: {
          urgency: "urgent",
          ardDaysRemaining: 3,
          transmissionDue: "2026-01-27"
        },
        udaSummary: {
          bims: "complete",
          phq9: "missing",
          gg: "complete"
        },
        pdpm: {
          hasImprovements: !0,
          currentHipps: "KAQD",
          potentialHipps: "KBQE",
          payment: {
            currentDaily: 482.5,
            potentialDaily: 538.2,
            remainingDays: 14
          }
        },
        compliance: {
          summary: { passed: 4, total: 5 },
          checks: {
            bims: { status: "passed" },
            phq9: { status: "failed", message: "PHQ-9 not found in lookback period" },
            gg: { status: "passed" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 14, total: 18 },
        detectionSummary: {
          total: 4,
          hippsChanging: 3,
          docRisks: { total: 1, diagnosisMissing: 1, treatmentMissing: 0 }
        }
      },
      {
        id: "4862100",
        externalAssessmentId: "4862100",
        patientId: "2657300",
        patientName: "Smith, Robert",
        assessmentType: "5-Day PPS",
        ardDate: "2026-01-10",
        status: "open",
        payerType: "medicare",
        assessmentClass: "pps",
        isHippsOpportunityPrimary: !0,
        deadlines: {
          urgency: "overdue",
          ardDaysRemaining: -4,
          transmissionDue: "2026-01-24"
        },
        udaSummary: {
          bims: "complete",
          phq9: "complete",
          gg: "in_progress"
        },
        pdpm: {
          hasImprovements: !0,
          currentHipps: "CBQJ",
          potentialHipps: "CBQL",
          payment: {
            currentDaily: 610.8,
            potentialDaily: 645.3,
            remainingDays: 26
          }
        },
        compliance: {
          summary: { passed: 5, total: 5 },
          checks: {
            bims: { status: "passed" },
            phq9: { status: "passed" },
            gg: { status: "passed" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 12, total: 18 },
        detectionSummary: {
          total: 5,
          hippsChanging: 2,
          docRisks: { total: 2, diagnosisMissing: 1, treatmentMissing: 1 }
        }
      },
      {
        id: "4863500",
        externalAssessmentId: "4863500",
        patientId: "2657450",
        patientName: "Johnson, Mary",
        assessmentType: "5-Day PPS",
        ardDate: "2026-01-20",
        status: "open",
        payerType: "medicare",
        assessmentClass: "pps",
        isHippsOpportunityPrimary: !1,
        deadlines: {
          urgency: "approaching",
          ardDaysRemaining: 7,
          transmissionDue: "2026-02-03"
        },
        udaSummary: {
          bims: "complete",
          phq9: "complete",
          gg: "complete"
        },
        pdpm: {
          hasImprovements: !1,
          currentHipps: "LAQF",
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 5, total: 5 },
          checks: {
            bims: { status: "passed" },
            phq9: { status: "passed" },
            gg: { status: "passed" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 16, total: 18 },
        detectionSummary: {
          total: 0,
          hippsChanging: 0,
          docRisks: { total: 0, diagnosisMissing: 0, treatmentMissing: 0 }
        }
      },
      {
        id: "4864001",
        externalAssessmentId: "4864001",
        patientId: "2657501",
        patientName: "Wilson, James",
        assessmentType: "Annual",
        ardDate: "2026-01-25",
        status: "open",
        payerType: "medicaid",
        assessmentClass: "obra",
        isHippsOpportunityPrimary: !1,
        deadlines: {
          urgency: "on_track",
          ardDaysRemaining: 12,
          transmissionDue: "2026-02-08"
        },
        udaSummary: {
          bims: "complete",
          phq9: "complete",
          gg: "missing"
        },
        pdpm: {
          hasImprovements: !1,
          currentHipps: "KAQD",
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 4, total: 5 },
          checks: {
            bims: { status: "passed" },
            phq9: { status: "passed" },
            gg: { status: "failed", message: "GG assessment not locked" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 10, total: 18 },
        detectionSummary: {
          total: 1,
          hippsChanging: 0,
          docRisks: { total: 0, diagnosisMissing: 0, treatmentMissing: 0 }
        }
      },
      {
        id: "4855102",
        externalAssessmentId: "4855102",
        patientId: "2657226",
        patientName: "Doe, Jane",
        assessmentType: "Annual",
        ardDate: "2025-12-15",
        status: "locked",
        payerType: "medicaid",
        assessmentClass: "obra",
        isHippsOpportunityPrimary: !1,
        deadlines: {
          urgency: "completed",
          ardDaysRemaining: -30,
          transmissionDue: "2025-12-29"
        },
        udaSummary: {
          bims: "locked_in_range",
          phq9: "locked_in_range",
          gg: "locked_in_range"
        },
        pdpm: {
          hasImprovements: !1,
          currentHipps: "KAQD",
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 5, total: 5 },
          checks: {
            bims: { status: "passed" },
            phq9: { status: "passed" },
            gg: { status: "passed" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 18, total: 18 },
        detectionSummary: {
          total: 0,
          hippsChanging: 0,
          docRisks: { total: 0, diagnosisMissing: 0, treatmentMissing: 0 }
        }
      },
      {
        id: "4865200",
        externalAssessmentId: "4865200",
        patientId: "2657300",
        patientName: "Smith, Robert",
        assessmentType: "Interim Payment",
        ardDate: "2026-01-24",
        status: "open",
        payerType: "medicare",
        assessmentClass: "pps",
        isHippsOpportunityPrimary: !1,
        deadlines: {
          urgency: "approaching",
          ardDaysRemaining: 10,
          transmissionDue: "2026-02-07"
        },
        udaSummary: {
          bims: "near_miss",
          phq9: "complete",
          gg: "complete"
        },
        pdpm: {
          hasImprovements: !1,
          currentHipps: "CBQJ",
          potentialHipps: null
        },
        compliance: {
          summary: { passed: 4, total: 5 },
          checks: {
            bims: { status: "failed", message: "BIMS near miss — locked outside lookback" },
            phq9: { status: "passed" },
            gg: { status: "passed" },
            orders: { status: "passed" },
            therapyDocs: { status: "passed" }
          }
        },
        sectionProgress: { completed: 8, total: 18 },
        detectionSummary: {
          total: 0,
          hippsChanging: 0,
          docRisks: { total: 0, diagnosisMissing: 0, treatmentMissing: 0 }
        }
      }
    ],
    summary: {
      totalAssessments: 6,
      openAssessments: 5,
      overdue: 1,
      urgent: 1,
      approaching: 2,
      onTrack: 1,
      hippsOpportunities: 2,
      totalRevenueOpportunity: "$780/day"
    },
    outstandingQueries: [
      {
        id: "q-003",
        mdsAssessmentId: "4860265",
        patientName: "Doe, Jane",
        mdsItem: "I4900",
        mdsItemName: "Schizophrenia",
        status: "sent",
        sentAt: new Date(Date.now() - 2 * 864e5).toISOString(),
        ardDaysRemaining: 3,
        assessmentPayment: { currentDaily: 482.5, potentialDaily: 538.2, remainingDays: 14 },
        sentTo: [{ firstName: "Demo", lastName: "Provider", title: "MD" }]
      },
      {
        id: "q-004",
        mdsAssessmentId: "4862100",
        patientName: "Smith, Robert",
        mdsItem: "I5100",
        mdsItemName: "Quadriplegia",
        status: "sent",
        sentAt: new Date(Date.now() - 5 * 864e5).toISOString(),
        ardDaysRemaining: -4,
        assessmentPayment: { currentDaily: 610.8, potentialDaily: 645.3, remainingDays: 26 },
        sentTo: [{ firstName: "Sample", lastName: "Doctor", title: "DO" }]
      },
      {
        id: "q-001",
        mdsAssessmentId: "4860265",
        patientName: "Doe, Jane",
        mdsItem: "I5600",
        mdsItemName: "Malnutrition",
        status: "pending",
        ardDaysRemaining: 3,
        assessmentPayment: { currentDaily: 482.5, potentialDaily: 538.2, remainingDays: 14 }
      }
    ],
    recentlySigned: [
      {
        id: "q-005",
        mdsAssessmentId: "4860265",
        patientName: "Doe, Jane",
        mdsItem: "I6200",
        mdsItemName: "Diabetes Mellitus",
        status: "signed",
        signedAt: new Date(Date.now() - 864e5).toISOString(),
        mdsItemCoded: !1,
        hasPdf: !0,
        practitioner: { firstName: "Demo", lastName: "Provider", title: "MD" },
        selectedIcd10Code: "E11.9"
      }
    ]
  },
  // ════════════════════════════════════════════
  // DOC RISKS (useDocRisks)
  // ════════════════════════════════════════════
  docRisks: {
    summary: { total: 3, diagnosisMissing: 2, treatmentMissing: 1 },
    items: [
      {
        patientName: "Doe, Jane",
        assessmentType: "Quarterly",
        mdsItem: "I5600",
        itemName: "Malnutrition",
        missingDiagnosis: !0,
        missingTreatment: !1,
        rationale: "Nutrition assessment documents significant weight loss (12.6%), low albumin/prealbumin, and PO intake <50%, but no ICD-10 code for malnutrition on Med Diag."
      },
      {
        patientName: "Smith, Robert",
        assessmentType: "5-Day PPS",
        mdsItem: "I4300",
        itemName: "Diabetes with PVD",
        missingDiagnosis: !0,
        missingTreatment: !1,
        rationale: "Lab results and medication list support diabetes diagnosis, but no PVD code documented."
      },
      {
        patientName: "Smith, Robert",
        assessmentType: "5-Day PPS",
        mdsItem: "O0400A3",
        itemName: "IV Medications",
        missingDiagnosis: !1,
        missingTreatment: !0,
        rationale: "MAR shows IV antibiotic course, but treatment not reflected on active treatment plan."
      }
    ]
  },
  // ════════════════════════════════════════════
  // PDPM POTENTIAL (usePDPMAnalyzer - keyed by assessmentId)
  // ════════════════════════════════════════════
  pdpmPotential: {
    4860265: {
      patientName: "Doe, Jane",
      assessment: {
        id: "4860265",
        externalAssessmentId: "4860265",
        externalPatientId: "2657226",
        patientId: "2657226",
        description: "Quarterly",
        ardDate: "2026-01-13",
        status: "open"
      },
      summary: {
        currentHipps: "KAQD",
        potentialHippsIfCoded: "KBQE",
        hasImprovements: !0,
        totalActionableItems: 3
      },
      calculation: {
        hippsCode: "KAQD",
        ptot: "TK",
        slp: "SA",
        nursing: "CA1",
        nta: "ND"
      },
      payment: {
        currentDaily: 482.5,
        potentialDaily: 538.2,
        remainingDays: 14
      },
      enhancedDetections: [
        {
          mdsItem: "I5600",
          itemName: "Malnutrition",
          section: "I",
          wouldChangeHipps: !0,
          solverStatus: "detected",
          confidence: 0.95,
          rationale: "Nutrition assessment documents significant weight loss (12.6% in 3 months), low albumin (2.9) and prealbumin (12), PO intake <50%, with supplementation orders supporting malnutrition diagnosis.",
          evidence: [
            { sourceType: "progress-note", sourceId: "doc-nutr-001", quote: "Weight Loss: 17 lbs (12.6%) in past 3 months. PO Intake: < 50% meals/est. needs. Moderate protein-calorie malnutrition.", documentName: "Nutrition Progress Note" },
            { sourceType: "lab_result", sourceId: "doc-nutr-002", quote: "Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low)", documentName: "Nutrition Lab Panel" }
          ],
          impact: {
            nta: { wouldChangeGroup: !0, currentGroup: "ND", newGroup: "NE" }
          }
        },
        {
          mdsItem: "I4300",
          itemName: "Diabetes with Peripheral Vascular Disease",
          section: "I",
          wouldChangeHipps: !0,
          solverStatus: "detected",
          confidence: 0.85,
          rationale: "Lab results show elevated HbA1c and medication list includes diabetic medications. Progress note documents PVD symptoms.",
          evidence: [
            { sourceType: "lab_result", sourceId: "doc-081", quote: "HbA1c: 8.2%, GFR 42, Creatinine 1.8", documentName: "Lab Results 1/18" },
            { sourceType: "progress-note", sourceId: "doc-082", quote: "Bilateral lower extremity edema with diminished pedal pulses noted.", documentName: "MD Progress Note" }
          ],
          impact: {
            nta: { wouldChangeLevel: !0, currentLevel: "ND", newLevel: "NE" }
          }
        },
        {
          mdsItem: "O0400A3",
          itemName: "IV Medications",
          section: "O",
          wouldChangeHipps: !0,
          solverStatus: "detected",
          confidence: 0.95,
          rationale: "MAR shows active IV antibiotic course (Vancomycin) during lookback period.",
          evidence: [
            { sourceType: "order", sourceId: "order-080", quote: "Vancomycin 1g IV Q12H - administered 1/12, 1/13", documentName: "MAR" }
          ],
          impact: {
            nursing: { wouldChangeGroup: !0, currentPaymentGroup: "CA1", newPaymentGroup: "CB1" }
          }
        },
        {
          mdsItem: "I2900",
          itemName: "Drug/Medication induced depression",
          section: "I",
          wouldChangeHipps: !1,
          solverStatus: "detected",
          confidence: 0.72,
          rationale: "PHQ-9 assessment missing. Multiple medications on profile associated with depressive side effects.",
          evidence: [
            { sourceType: "progress-note", sourceId: "doc-083", quote: "Patient reports feeling down and having little interest in activities.", documentName: "Nursing Assessment" }
          ]
        }
      ],
      outstandingQueries: [
        {
          id: "q-003",
          mdsItem: "I4900",
          mdsItemName: "Schizophrenia",
          status: "sent",
          sentAt: new Date(Date.now() - 2 * 864e5).toISOString(),
          pdpmImpact: { wouldChangeHipps: !1 }
        }
      ],
      recentlySigned: [
        {
          id: "q-005",
          mdsItem: "I6200",
          mdsItemName: "Diabetes Mellitus",
          status: "signed",
          signedAt: new Date(Date.now() - 864e5).toISOString(),
          mdsItemCoded: !1
        }
      ],
      compliance: {
        summary: { passed: 4, total: 5 },
        checks: {
          bims: { status: "passed", message: "BIMS completed", foundUda: { description: "BIMS Assessment", date: "2026-01-12", lockedDate: "2026-01-12" } },
          phq9: { status: "failed", message: "PHQ-9 not found in lookback period" },
          gg: { status: "passed", message: "GG completed", foundUda: { description: "GG Functional Assessment", date: "2026-01-11", lockedDate: "2026-01-12" } },
          orders: { status: "passed", message: "All orders signed" },
          therapyDocs: { status: "passed", message: "Therapy documentation complete" }
        }
      }
    },
    4862100: {
      patientName: "Smith, Robert",
      assessment: {
        id: "4862100",
        externalAssessmentId: "4862100",
        externalPatientId: "2657300",
        patientId: "2657300",
        description: "5-Day PPS",
        ardDate: "2026-01-10",
        status: "open"
      },
      summary: {
        currentHipps: "CBQJ",
        potentialHippsIfCoded: "CBQL",
        hasImprovements: !0,
        totalActionableItems: 5
      },
      calculation: {
        hippsCode: "CBQJ",
        ptot: "TL",
        slp: "SB",
        nursing: "CB2",
        nta: "NF"
      },
      payment: {
        currentDaily: 610.8,
        potentialDaily: 645.3,
        remainingDays: 26
      },
      enhancedDetections: [
        {
          mdsItem: "I5100",
          itemName: "Hemiplegia/Hemiparesis",
          section: "I",
          wouldChangeHipps: !0,
          solverStatus: "detected",
          confidence: 0.96,
          rationale: "Post-CVA left hemiparesis well documented in PT/OT evaluations.",
          evidence: [
            { sourceType: "progress-note", sourceId: "doc-084", quote: "Left-sided hemiparesis with 2/5 strength in left upper and lower extremities.", documentName: "PT Evaluation" }
          ],
          impact: {
            ptot: { wouldChangeGroup: !0, currentGroup: "TL", newGroup: "TM" }
          }
        },
        {
          mdsItem: "K0510A",
          itemName: "Parenteral/IV Feeding",
          section: "K",
          wouldChangeHipps: !0,
          solverStatus: "detected",
          confidence: 0.88,
          rationale: "IV fluids administered during lookback period per MAR records.",
          evidence: [
            { sourceType: "order", sourceId: "order-081", quote: "D5 1/2NS 1000ml IV at 75ml/hr - running", documentName: "MAR" }
          ],
          impact: {
            nta: { wouldChangeLevel: !0, currentLevel: "NF", newLevel: "NG" }
          }
        }
      ],
      outstandingQueries: [
        {
          id: "q-004",
          mdsItem: "I5100",
          mdsItemName: "Quadriplegia",
          status: "sent",
          sentAt: new Date(Date.now() - 5 * 864e5).toISOString(),
          pdpmImpact: { wouldChangeHipps: !1 }
        }
      ],
      recentlySigned: [],
      compliance: {
        summary: { passed: 5, total: 5 },
        checks: {
          bims: { status: "passed", message: "BIMS completed" },
          phq9: { status: "passed", message: "PHQ-9 completed" },
          gg: { status: "passed", message: "GG completed" },
          orders: { status: "passed", message: "All orders signed" },
          therapyDocs: { status: "passed", message: "Therapy documentation complete" }
        }
      }
    }
  },
  // ════════════════════════════════════════════
  // PATIENT ASSESSMENTS (usePDPMAnalyzer patient scope)
  // ════════════════════════════════════════════
  patientAssessments: {
    2657226: {
      patientName: "Doe, Jane",
      assessments: [
        {
          id: "4860265",
          externalAssessmentId: "4860265",
          type: "Quarterly",
          assessmentType: "Quarterly",
          ardDate: "2026-01-13",
          status: "open",
          currentHipps: "KAQD",
          hipps: "KAQD"
        },
        {
          id: "4855102",
          externalAssessmentId: "4855102",
          type: "Annual",
          assessmentType: "Annual",
          ardDate: "2025-12-15",
          status: "locked",
          currentHipps: "KAQD",
          hipps: "KAQD"
        }
      ]
    },
    2657300: {
      patientName: "Smith, Robert",
      assessments: [
        {
          id: "4862100",
          externalAssessmentId: "4862100",
          type: "5-Day PPS",
          assessmentType: "5-Day PPS",
          ardDate: "2026-01-10",
          status: "open",
          currentHipps: "CBQJ",
          hipps: "CBQJ"
        }
      ]
    }
  },
  // ════════════════════════════════════════════
  // CERTIFICATION DASHBOARD (useCertDashboard)
  // ════════════════════════════════════════════
  certDashboard: {
    pending: 4,
    overdue: 1,
    dueSoon: 2,
    signedLast7Days: 3
  },
  // ════════════════════════════════════════════
  // CERTIFICATIONS LIST (useCertifications)
  // ════════════════════════════════════════════
  certifications: [
    // ── Stay 001: Doe, Jane (Medicare Part A) ──
    {
      id: "cert-001",
      patientId: "2657226",
      patientName: "Doe, Jane",
      status: "pending",
      type: "initial",
      sequenceNumber: 0,
      payerType: "medicare",
      partAStayId: "stay-001",
      partAStartDate: "2025-12-20",
      currentMedicareDay: 45,
      admitDate: "2025-12-20",
      certPeriodStart: "2025-12-20",
      certPeriodEnd: "2026-01-19",
      dueDate: new Date(Date.now() + 2 * 864e5).toISOString().split("T")[0],
      clinicalReason: "Requires skilled nursing for IV antibiotic therapy and wound management following surgical debridement of sacral pressure ulcer. Patient also requires daily PT/OT for functional mobility restoration.",
      estimatedDays: 30,
      planForDischarge: "home_with_services",
      assignedPractitioner: { id: "pract-001", name: "Dr. Demo Provider", title: "MD" },
      sends: [],
      certChain: [
        { type: "initial", status: "pending", dueDate: new Date(Date.now() + 2 * 864e5).toISOString().split("T")[0] }
      ]
    },
    {
      id: "cert-004",
      patientId: "2657226",
      patientName: "Doe, Jane",
      status: "signed",
      type: "day_14_recert",
      sequenceNumber: 1,
      payerType: "medicare",
      partAStayId: "stay-001",
      partAStartDate: "2025-12-20",
      currentMedicareDay: 45,
      admitDate: "2025-12-20",
      certPeriodStart: "2025-12-20",
      certPeriodEnd: "2026-01-19",
      dueDate: "2026-01-10",
      clinicalReason: "Continued skilled nursing for wound care and IV medications. Wound showing slow but steady improvement with granulation tissue forming.",
      estimatedDays: 30,
      planForDischarge: "home_with_services",
      signedAt: new Date(Date.now() - 4 * 864e5).toISOString(),
      signedByName: "Dr. Demo Provider",
      signedByTitle: "MD",
      signedByPractitionerId: "pract-001",
      sends: [
        { sentAt: new Date(Date.now() - 6 * 864e5).toISOString(), practitionerName: "Dr. Demo Provider", practitionerTitle: "MD", smsStatus: "delivered" }
      ],
      certChain: [
        { type: "initial", status: "signed", dueDate: "2025-12-30" },
        { type: "day_14_recert", status: "signed", dueDate: "2026-01-10" }
      ]
    },
    // ── Stay 002: Smith, Robert (Medicare Part A) ──
    {
      id: "cert-006",
      patientId: "2657300",
      patientName: "Smith, Robert",
      status: "pending",
      type: "initial",
      sequenceNumber: 0,
      payerType: "medicare",
      partAStayId: "stay-002",
      partAStartDate: "2025-11-15",
      currentMedicareDay: 78,
      admitDate: "2025-11-15",
      certPeriodStart: "2025-11-15",
      certPeriodEnd: "2025-12-15",
      dueDate: new Date(Date.now() + 4 * 864e5).toISOString().split("T")[0],
      clinicalReason: "",
      estimatedDays: null,
      planForDischarge: null,
      assignedPractitioner: null,
      sends: [],
      certChain: [
        { type: "initial", status: "pending", dueDate: new Date(Date.now() + 4 * 864e5).toISOString().split("T")[0] },
        { type: "day_14_recert", status: "pending", dueDate: new Date(Date.now() - 1 * 864e5).toISOString().split("T")[0] }
      ]
    },
    {
      id: "cert-002",
      patientId: "2657300",
      patientName: "Smith, Robert",
      status: "pending",
      type: "day_14_recert",
      sequenceNumber: 1,
      payerType: "medicare",
      partAStayId: "stay-002",
      partAStartDate: "2025-11-15",
      currentMedicareDay: 78,
      admitDate: "2025-11-15",
      certPeriodStart: "2026-01-15",
      certPeriodEnd: "2026-02-14",
      dueDate: new Date(Date.now() - 1 * 864e5).toISOString().split("T")[0],
      clinicalReason: "Post-CVA rehabilitation requiring daily PT/OT/SLP. Patient demonstrating slow but measurable functional gains. Left hemiparesis persists — requires max assist for transfers.",
      estimatedDays: 30,
      planForDischarge: "home_with_services",
      assignedPractitioner: { id: "pract-002", name: "Dr. Sample Doctor", title: "DO" },
      sends: [],
      certChain: [
        { type: "initial", status: "signed", dueDate: "2025-12-15" },
        { type: "day_14_recert", status: "pending", dueDate: new Date(Date.now() - 1 * 864e5).toISOString().split("T")[0] }
      ]
    },
    // ── Johnson, Mary (Managed Care) ──
    {
      id: "cert-003",
      patientId: "2657450",
      patientName: "Johnson, Mary",
      status: "sent",
      type: "initial",
      sequenceNumber: 0,
      payerType: "managed_care",
      partAStayId: null,
      partAStartDate: null,
      currentMedicareDay: null,
      admitDate: "2026-01-05",
      certPeriodStart: "2026-01-05",
      certPeriodEnd: "2026-02-04",
      dueDate: new Date(Date.now() + 5 * 864e5).toISOString().split("T")[0],
      clinicalReason: "Skilled nursing for medication management and fall prevention program. Patient with complex polypharmacy requiring daily nursing assessment.",
      estimatedDays: 30,
      planForDischarge: "long_term_care",
      assignedPractitioner: { id: "pract-001", name: "Dr. Demo Provider", title: "MD" },
      sends: [
        { sentAt: new Date(Date.now() - 2 * 864e5).toISOString(), practitionerName: "Dr. Demo Provider", practitionerTitle: "MD", smsStatus: "delivered" }
      ],
      certChain: [
        { type: "initial", status: "sent", dueDate: new Date(Date.now() + 5 * 864e5).toISOString().split("T")[0] }
      ]
    },
    // ── Wilson, James (Managed Care — Skipped) ──
    {
      id: "cert-005",
      patientId: "2657501",
      patientName: "Wilson, James",
      status: "skipped",
      type: "initial",
      sequenceNumber: 0,
      payerType: "managed_care",
      partAStayId: null,
      partAStartDate: null,
      currentMedicareDay: null,
      admitDate: "2026-01-02",
      certPeriodStart: "2026-01-02",
      certPeriodEnd: "2026-02-01",
      dueDate: "2026-01-12",
      skipReason: "Payer does not require certification for this stay type.",
      sends: [],
      certChain: [
        { type: "initial", status: "skipped", dueDate: "2026-01-12" }
      ]
    },
    // ── Anderson, Patricia (Medicare Part A — Day 30 recert delayed) ──
    {
      id: "cert-007",
      patientId: "2657600",
      patientName: "Anderson, Patricia",
      status: "pending",
      type: "day_30_recert",
      sequenceNumber: 2,
      isDelayed: !0,
      payerType: "medicare",
      partAStayId: "stay-003",
      partAStartDate: "2025-11-01",
      currentMedicareDay: 92,
      admitDate: "2025-11-01",
      certPeriodStart: "2026-01-01",
      certPeriodEnd: "2026-01-31",
      dueDate: new Date(Date.now() + 1 * 864e5).toISOString().split("T")[0],
      clinicalReason: "Continued skilled nursing for tracheostomy care, ventilator weaning protocol, and respiratory therapy. Patient on gradual weaning schedule.",
      estimatedDays: 30,
      planForDischarge: "long_term_care",
      assignedPractitioner: { id: "pract-003", name: "Jane Specialist, NP", title: "NP" },
      sends: [],
      certChain: [
        { type: "initial", status: "signed", dueDate: "2025-11-20" },
        { type: "day_14_recert", status: "signed", dueDate: "2025-12-15" },
        { type: "day_30_recert", status: "pending", dueDate: new Date(Date.now() + 1 * 864e5).toISOString().split("T")[0] }
      ]
    }
  ],
  // ════════════════════════════════════════════
  // ITEM DETAIL (useItemDetail - keyed by MDS code)
  // ════════════════════════════════════════════
  itemDetail: {
    I0400: {
      item: {
        mdsItem: "I0400",
        itemName: "Coronary Artery Disease (CAD)",
        section: "I",
        description: "I0400 — Has the resident been diagnosed with coronary artery disease (CAD)?",
        status: "needs_physician_query",
        validation: {
          diagnosisCheck: { passed: !1 },
          treatmentCheck: { passed: !0 }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-020",
            documentName: "Cardiology Consult",
            displayName: "Cardiology Consult — 12/18/2025",
            effectiveDate: "2025-12-18",
            quote: "History of coronary artery disease s/p PCI with drug-eluting stent to LAD in 2022. Chronic stable angina well controlled on current regimen.",
            rationale: "Specialist documentation of established CAD diagnosis with interventional history.",
            pageNumber: 1
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-021",
            documentName: "H&P — Admission",
            displayName: "H&P — Admission — 12/20/2025",
            effectiveDate: "2025-12-20",
            quote: "PMH: CAD s/p stent, HTN, DM type 2, CKD stage 3. Continue home medications.",
            rationale: "Admission history documenting CAD as part of past medical history.",
            pageNumber: 1
          },
          {
            sourceType: "order",
            sourceId: "mar-010",
            documentName: "MAR",
            displayName: "MAR — 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Aspirin 81mg PO daily — administered 0800. Atorvastatin 40mg PO QHS — administered 2100. Metoprolol succinate 25mg PO BID — administered 0800, 2000.",
            rationale: "Active medications consistent with CAD treatment regimen."
          }
        ],
        keyFindings: [
          "Cardiology consult documents CAD s/p PCI with DES to LAD (2022)",
          "No ICD-10 code for CAD on current problem list",
          "Active CAD medications: aspirin, atorvastatin, metoprolol"
        ]
      },
      diagnosisSummary: 'PCC response is "No" but clinical documentation suggests possible CAD. Cardiology consult from 12/2025 references chronic stable angina and coronary stenting history. No ICD-10 code for CAD on current problem list.',
      treatmentSummary: "Patient on aspirin 81mg daily, atorvastatin 40mg daily, and metoprolol 25mg BID — consistent with CAD management."
    },
    I0700: {
      item: {
        mdsItem: "I0700",
        itemName: "Hypertension (HTN)",
        section: "I",
        description: "I0700 — Has the resident been diagnosed with hypertension?",
        status: "code",
        validation: {
          diagnosisCheck: { passed: !0 },
          treatmentCheck: { passed: !0 }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-025",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "HTN stable on current regimen. BP today 138/82. Continue lisinopril and amlodipine. Recheck BP in 2 weeks.",
            rationale: "Physician documentation confirming active hypertension management.",
            pageNumber: 1
          },
          {
            sourceType: "order",
            sourceId: "mar-012",
            documentName: "MAR",
            displayName: "MAR — 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Lisinopril 20mg PO daily — administered 0800. Amlodipine 5mg PO daily — administered 0800.",
            rationale: "Active antihypertensive medications on MAR."
          }
        ],
        keyFindings: [
          "Active ICD-10 code I10 on problem list",
          "BP 138/82 on latest vitals — within target range",
          "Lisinopril 20mg + amlodipine 5mg daily regimen"
        ]
      },
      diagnosisSummary: "Hypertension well documented with active ICD-10 code I10 on problem list. Vital signs and medication regimen confirm active management.",
      treatmentSummary: "Lisinopril 20mg daily, amlodipine 5mg daily. BP monitoring per protocol with parameters documented."
    },
    I0900: {
      item: {
        mdsItem: "I0900",
        itemName: "Peripheral Vascular Disease (PVD) or Peripheral Arterial Disease (PAD)",
        section: "I",
        description: "I0900 — Has the resident been diagnosed with peripheral vascular disease (PVD) or peripheral arterial disease (PAD)?",
        status: "needs_physician_query",
        validation: {
          diagnosisCheck: { passed: !1 },
          treatmentCheck: { passed: !0 }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-003",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Bilateral lower extremity edema with diminished pedal pulses noted. Continue compression stockings. Monitor for skin breakdown.",
            rationale: "Physical findings consistent with PVD but not definitively diagnosed.",
            pageNumber: 1
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-030",
            documentName: "Nursing Assessment",
            displayName: "Nursing Assessment — 01/25/2026",
            effectiveDate: "2026-01-25",
            quote: "Bilateral pedal edema 2+, feet cool to touch, diminished DP pulses bilaterally. Skin intact, no ulcerations. Compression stockings applied.",
            rationale: "Nursing assessment documenting vascular symptoms needing clinical correlation.",
            pageNumber: 1
          }
        ],
        keyFindings: [
          "Bilateral LE edema with diminished pedal pulses",
          "Symptoms overlap with diabetic neuropathy — clarification needed",
          "No PVD/PAD ICD-10 code on problem list",
          "Compression stockings ordered but no specific PVD treatment plan"
        ]
      },
      diagnosisSummary: "Documentation is ambiguous. Progress notes describe bilateral lower extremity edema and diminished pedal pulses, but these symptoms could also indicate diabetic neuropathy or venous insufficiency. No definitive PVD/PAD diagnosis on problem list.",
      treatmentSummary: "Compression stockings ordered. Diabetic foot care protocol in place. Vascular checks BID — but no specific PVD treatment plan."
    },
    I2000: {
      item: {
        mdsItem: "I2000",
        itemName: "Diabetes Mellitus (DM)",
        section: "I",
        description: "I2000 — Has the resident been diagnosed with diabetes mellitus (DM)?",
        status: "code",
        validation: {
          diagnosisCheck: { passed: !0 },
          treatmentCheck: { passed: !0 }
        },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-006",
            documentName: "Lab Results",
            displayName: "Lab Results — 01/18/2026",
            effectiveDate: "2026-01-18",
            quote: "HbA1c: 8.2%, Fasting glucose: 186 mg/dL. Diabetes management suboptimal — consider medication adjustment.",
            rationale: "Lab values confirming active diabetes with suboptimal control."
          },
          {
            sourceType: "order",
            sourceId: "mar-001",
            documentName: "MAR",
            displayName: "MAR — 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Metformin 500mg PO BID — administered 0800, 1800. Blood glucose AC: 0730=168, 1130=142, 1730=195. HS: 2100=156.",
            rationale: "Active diabetic medication and glucose monitoring."
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-025",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "DM type 2 — HbA1c elevated at 8.2%. Will increase metformin and add sliding scale insulin for glucose >200.",
            rationale: "Physician management of diabetes with medication adjustment.",
            pageNumber: 1
          }
        ],
        keyFindings: [
          "ICD-10 E11.9 on active problem list",
          "HbA1c 8.2% — suboptimal glycemic control",
          "Metformin 500mg BID + glucose monitoring AC & HS",
          "Physician adjusting regimen — adding sliding scale insulin"
        ]
      },
      diagnosisSummary: "Type 2 diabetes well documented. ICD-10 E11.9 on active problem list. Lab monitoring and multiple diabetic medications confirm active diagnosis.",
      treatmentSummary: "Metformin 500mg BID, blood glucose monitoring AC & HS, diabetic diet, podiatry consult Q3 months."
    },
    I5600: {
      item: {
        mdsItem: "I5600",
        itemName: "Malnutrition",
        section: "I",
        description: "I5600 — Malnutrition (protein or calorie) or at risk for malnutrition.",
        status: "recommend_coding",
        validation: {
          diagnosisCheck: { passed: !0 },
          treatmentCheck: { passed: !0 }
        },
        evidence: [
          {
            evidenceId: "uda-demo-nutrition-v3",
            sourceType: "uda",
            sourceId: "demo-nutrition-v3",
            displayName: "Nutrition Assessment - V 3 (2/27/2026)",
            effectiveDate: "2026-02-27",
            date: "2026-02-27",
            quote: "Existing diagnosis of Protein/Calorie Malnutrition? (NTA point): Yes",
            quoteText: "Existing diagnosis of Protein/Calorie Malnutrition? (NTA point): Yes",
            rationale: "Dietitian-signed nutrition assessment documents existing protein/calorie malnutrition.",
            evidenceRole: "supporting"
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-nutr-001",
            documentName: "Nutrition Progress Note",
            displayName: "Nutrition Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Weight Loss: 17 lbs (12.6%) in past 3 months. PO Intake: < 50% meals/est. needs. Moderate protein-calorie malnutrition diagnosed.",
            rationale: "Dietitian assessment documenting malnutrition with objective weight loss and intake data.",
            pageNumber: 2,
            pdfData: {
              filename: "NUTRITION_01_22_36001641.PDF",
              title: "Nutrition Progress Note",
              pages: 2,
              pageContent: {
                1: [
                  { text: "NUTRITION PROGRESS NOTE", highlight: !1 },
                  { text: "Patient: Doe, Jane", highlight: !1 },
                  { text: "Date: 01/22/2026", highlight: !1 },
                  { text: "Dietitian: Sarah Kim, RD, LD", highlight: !1 },
                  { text: "", highlight: !1 },
                  { text: "NUTRITIONAL STATUS:", highlight: !1 },
                  { text: "Current Weight: 118 lbs (53.5 kg)", highlight: !1 },
                  { text: "Usual Body Weight: 135 lbs (61.2 kg)", highlight: !1 },
                  { text: "Weight Loss: 17 lbs (12.6%) in past 3 months", highlight: "keyword" },
                  { text: "", highlight: !1 },
                  { text: "DIETARY INTAKE:", highlight: !1 },
                  { text: "Ongoing PO Intake: < 50% meals/est. needs", highlight: "keyword" },
                  { text: "Patient reports decreased appetite and early satiety.", highlight: !1 },
                  { text: "Difficulty with textures due to dysphagia.", highlight: "contextual" }
                ],
                2: [
                  { text: "LABORATORY VALUES:", highlight: !1 },
                  { text: "Albumin: 2.9 g/dL (Low)", highlight: "keyword" },
                  { text: "Prealbumin: 12 mg/dL (Low)", highlight: "keyword" },
                  { text: "Total Protein: 5.8 g/dL (Low)", highlight: !1 },
                  { text: "", highlight: !1 },
                  { text: "MALNUTRITION DIAGNOSIS:", highlight: !1 },
                  { text: "Moderate protein-calorie malnutrition based on:", highlight: "keyword" },
                  { text: "- Significant unintentional weight loss (>10% in 3 months)", highlight: !1 },
                  { text: "- Inadequate oral intake (<50% estimated needs)", highlight: !1 },
                  { text: "- Low albumin and prealbumin", highlight: !1 },
                  { text: "", highlight: !1 },
                  { text: "RECOMMENDATIONS:", highlight: !1 },
                  { text: "1. Fortified foods - pudding, cereal, milk", highlight: !1 },
                  { text: "2. Ensure Plus BID with meals", highlight: !1 },
                  { text: "3. Liberalized diet texture per SLP recommendations", highlight: !1 },
                  { text: "4. Weekly weights", highlight: !1 },
                  { text: "5. Re-evaluate in 1 week", highlight: !1 }
                ]
              }
            }
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-nutr-002",
            documentName: "Nutrition Lab Panel",
            displayName: "Nutrition Lab Panel — 01/20/2026",
            effectiveDate: "2026-01-20",
            quote: "Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low). Low values suggest malnutrition and/or inflammatory state.",
            rationale: "Lab values confirming malnutrition with low albumin and prealbumin.",
            pdfData: {
              filename: "LAB_NUTRITION_01_20_38001789.PDF",
              title: "Nutrition Panel Results",
              pages: 1,
              content: [
                { text: "LABORATORY REPORT", highlight: !1 },
                { text: "Patient: Doe, Jane", highlight: !1 },
                { text: "Date Collected: 01/20/2026 06:15", highlight: !1 },
                { text: "", highlight: !1 },
                { text: "NUTRITION PANEL:", highlight: !1 },
                { text: "", highlight: !1 },
                { text: "Albumin: 2.9 g/dL                    (L) Ref: 3.5-5.0", highlight: "keyword" },
                { text: "Prealbumin: 12 mg/dL                 (L) Ref: 18-38", highlight: "keyword" },
                { text: "Total Protein: 5.8 g/dL              (L) Ref: 6.0-8.3", highlight: !1 },
                { text: "Transferrin: 165 mg/dL               (L) Ref: 200-360", highlight: !1 },
                { text: "", highlight: !1 },
                { text: "Note: Low albumin and prealbumin suggest malnutrition", highlight: "keyword" },
                { text: "and/or inflammatory state. Clinical correlation advised.", highlight: !1 }
              ]
            }
          },
          {
            sourceType: "order",
            sourceId: "doc-nutr-004",
            documentName: "MAR - Ensure Plus",
            displayName: "MAR — Ensure Plus 8oz BID — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Ensure Plus 8oz BID with meals for nutritional supplementation",
            rationale: "Oral nutrition supplement order supports malnutrition diagnosis and active treatment.",
            marData: {
              medication: "Ensure Plus 8 OZ Oral Liquid",
              route: "ORAL",
              instructions: "Give 8 oz Ensure Plus by mouth twice daily with lunch and dinner for nutritional supplementation and malnutrition treatment",
              frequency: "BID with meals",
              dateRange: { start: "2026-01-22", end: "2026-01-28" },
              administrations: [
                { date: "2026-01-22", time: "Lunch", status: "given" },
                { date: "2026-01-22", time: "Dinner", status: "given" },
                { date: "2026-01-23", time: "Lunch", status: "given" },
                { date: "2026-01-23", time: "Dinner", status: "refused" },
                { date: "2026-01-24", time: "Lunch", status: "given" },
                { date: "2026-01-24", time: "Dinner", status: "given" },
                { date: "2026-01-25", time: "Lunch", status: "given" },
                { date: "2026-01-25", time: "Dinner", status: "given" },
                { date: "2026-01-26", time: "Lunch", status: "given" },
                { date: "2026-01-26", time: "Dinner", status: "refused" },
                { date: "2026-01-27", time: "Lunch", status: "given" },
                { date: "2026-01-27", time: "Dinner", status: "given" },
                { date: "2026-01-28", time: "Lunch", status: "given" },
                { date: "2026-01-28", time: "Dinner", status: "given" }
              ]
            }
          },
          {
            sourceType: "order",
            sourceId: "doc-nutr-003",
            documentName: "MAR - Fortified Cereal",
            displayName: "MAR — Fortified Cereal 6oz QD — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Fortified Cereal 6 oz QD to increase caloric and protein intake",
            rationale: "Nutrition intervention order for fortified foods supports malnutrition treatment.",
            marData: {
              medication: "Fortified Cereal 6 OZ",
              route: "ORAL",
              instructions: "Give 6 oz fortified cereal by mouth once daily to increase caloric and protein intake for malnutrition",
              frequency: "Daily with breakfast",
              dateRange: { start: "2026-01-22", end: "2026-01-28" },
              administrations: [
                { date: "2026-01-22", time: "Breakfast", status: "given" },
                { date: "2026-01-23", time: "Breakfast", status: "given" },
                { date: "2026-01-24", time: "Breakfast", status: "given" },
                { date: "2026-01-25", time: "Breakfast", status: "refused" },
                { date: "2026-01-26", time: "Breakfast", status: "given" },
                { date: "2026-01-27", time: "Breakfast", status: "given" },
                { date: "2026-01-28", time: "Breakfast", status: "given" }
              ]
            }
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-nutr-006",
            documentName: "Weight Monitoring Flow Sheet",
            displayName: "Weight Monitoring — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Weight trend: 135 lbs → 128 lbs → 118 lbs. Total loss: 17 lbs (12.6%). >10% in 3 months = SEVERE weight loss.",
            rationale: "Nursing documentation of progressive weight loss meeting malnutrition criteria.",
            pdfData: {
              filename: "NURSING_WEIGHTS_01_22_38001945.PDF",
              title: "Weight Monitoring Flow Sheet",
              pages: 1,
              content: [
                { text: "WEIGHT MONITORING - 3 MONTH TREND", highlight: !1 },
                { text: "Patient: Doe, Jane", highlight: !1 },
                { text: "Date: 01/22/2026", highlight: !1 },
                { text: "", highlight: !1 },
                { text: "WEIGHT HISTORY:", highlight: !1 },
                { text: "10/22/2025: 135.0 lbs (Usual body weight)", highlight: !1 },
                { text: "11/15/2025: 132.5 lbs (-2.5 lbs)", highlight: !1 },
                { text: "12/20/2025: 128.0 lbs (-7.0 lbs from usual)", highlight: "keyword" },
                { text: "01/15/2026: 120.5 lbs (-14.5 lbs from usual)", highlight: "keyword" },
                { text: "01/22/2026: 118.0 lbs (-17.0 lbs from usual)", highlight: "keyword" },
                { text: "", highlight: !1 },
                { text: "WEIGHT LOSS PERCENTAGE:", highlight: !1 },
                { text: "Total Loss: 17 lbs over 3 months", highlight: "keyword" },
                { text: "Percentage: 12.6% of usual body weight", highlight: "keyword" },
                { text: "", highlight: !1 },
                { text: "SIGNIFICANCE:", highlight: !1 },
                { text: ">10% weight loss in 3 months = SEVERE weight loss", highlight: "keyword" },
                { text: "Meets criteria for malnutrition diagnosis", highlight: "keyword" },
                { text: "", highlight: !1 },
                { text: "INTERVENTIONS INITIATED:", highlight: !1 },
                { text: "- Dietary consult completed", highlight: !1 },
                { text: "- Nutritional supplements ordered", highlight: !1 },
                { text: "- Weekly weight monitoring ongoing", highlight: !1 }
              ]
            }
          }
        ],
        keyFindings: [
          "Weight loss 12.6% (17 lbs) in 3 months — meets severe weight loss criteria",
          "Albumin 2.9 g/dL and Prealbumin 12 mg/dL — both below normal",
          "PO intake <50% of estimated needs documented by dietitian",
          "Ensure Plus BID and fortified cereal QD ordered as interventions",
          "No malnutrition ICD-10 code on active problem list"
        ],
        recommendedIcd10: [
          { code: "E44.0", description: "Moderate protein-calorie malnutrition" },
          { code: "E46", description: "Unspecified protein-calorie malnutrition" }
        ]
      },
      diagnosisSummary: "Nutrition assessment from 1/22 documents moderate protein-calorie malnutrition: 12.6% weight loss in 3 months, PO intake <50%, albumin 2.9, prealbumin 12. No malnutrition ICD-10 code on active problem list.",
      treatmentSummary: "Ensure Plus 8oz BID, fortified cereal 6oz QD, pureed diet with nectar thick liquids, weekly weights, dietitian follow-up.",
      carePlan: {
        onCarePlan: !0,
        items: ["Ensure Plus 8oz BID between meals", "Weekly weights every Monday AM", "Dietitian follow-up monthly", "Calorie count x 3 days if intake worsens"]
      }
    },
    I4300: {
      item: {
        mdsItem: "I4300",
        itemName: "Diabetes Mellitus with Peripheral Vascular Disease",
        section: "I",
        description: "Active diagnosis of Diabetes Mellitus combined with Peripheral Vascular Disease.",
        status: "needs_physician_query",
        validation: {
          diagnosisCheck: { passed: !0 },
          treatmentCheck: { passed: !0 }
        },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-006",
            documentName: "Lab Results",
            displayName: "Lab Results — 01/18/2026",
            effectiveDate: "2026-01-18",
            quote: "HbA1c: 8.2%, Fasting glucose: 186 mg/dL, GFR: 42, Creatinine: 1.8",
            rationale: "Lab values confirming uncontrolled diabetes with renal involvement."
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-003",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Bilateral lower extremity edema with diminished pedal pulses noted. Continue diabetic foot care protocol. Compression stockings ordered.",
            rationale: "Physician documentation of peripheral vascular disease symptoms.",
            pageNumber: 1
          },
          {
            sourceType: "order",
            sourceId: "mar-001",
            documentName: "MAR",
            displayName: "MAR — 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Metformin 500mg PO BID — administered 0800, 1800",
            rationale: "Active diabetes medication administration."
          }
        ],
        keyFindings: [
          "DM well documented with HbA1c 8.2%",
          "PVD symptoms noted but no specific ICD-10 on problem list",
          "Metformin 500mg BID + vascular checks per protocol"
        ]
      },
      diagnosisSummary: "Diabetes well documented with medications and lab monitoring. PVD symptoms noted in progress notes but no specific ICD-10 code on problem list.",
      treatmentSummary: "Metformin 500mg BID, blood glucose monitoring AC & HS, vascular checks per protocol.",
      carePlan: {
        onCarePlan: !0,
        items: ["Blood glucose monitoring AC and HS", "Diabetic foot care and vascular checks", "Consistent carbohydrate meal plan"]
      }
    },
    O0400A3: {
      item: {
        mdsItem: "O0400A3",
        itemName: "IV Medications",
        section: "O",
        description: "IV Medications — received any type of IV medications during the lookback period.",
        status: "code",
        rationale: "Vancomycin 1g IV Q12H administered during lookback period for suspected cellulitis.",
        evidence: [
          {
            sourceType: "order",
            sourceId: "mar-002",
            documentName: "MAR",
            displayName: "MAR — 01/13/2026",
            effectiveDate: "2026-01-13",
            quote: "Vancomycin 1g IV Q12H — administered 1/12 2200, 1/13 1000, 1/13 2200",
            rationale: "IV medication administration documented in MAR during lookback period."
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-003",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/12/2026",
            effectiveDate: "2026-01-12",
            quote: "Started Vancomycin IV for suspected cellulitis. Monitor labs and clinical response.",
            rationale: "Physician order for IV antibiotic corroborating MAR records.",
            pageNumber: 1
          }
        ]
      },
      diagnosisSummary: null,
      treatmentSummary: "Vancomycin 1g IV Q12H administered during lookback period for suspected infection."
    },
    I2900: {
      item: {
        mdsItem: "I2900",
        itemName: "Drug/Medication Induced Depression",
        section: "I",
        description: "Drug or medication-induced depression — depression caused by or associated with medication side effects.",
        status: "dont_code",
        validation: {
          diagnosisCheck: { passed: !1 },
          treatmentCheck: { passed: !1 }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-007",
            documentName: "Nursing Assessment",
            displayName: "Nursing Assessment — 01/25/2026",
            effectiveDate: "2026-01-25",
            quote: 'Patient reports feeling down and having little interest in activities. Declined recreational therapy today. States she "just wants to rest."',
            rationale: "Nursing documentation of depressive symptoms.",
            pageNumber: 1
          }
        ],
        keyFindings: [
          "PHQ-9 not completed during lookback period",
          "Beta-blockers and opioids on profile — depressive side effects possible",
          "Nursing notes mention low mood and decreased activity"
        ]
      },
      diagnosisSummary: "PHQ-9 not completed during lookback period. Multiple medications on profile (beta-blockers, opioids) associated with depressive side effects. Nursing notes mention low mood.",
      treatmentSummary: "No active antidepressant therapy. No mental health referral on file.",
      carePlan: { onCarePlan: !1 }
    },
    I5100: {
      item: {
        mdsItem: "I5100",
        itemName: "Hemiplegia/Hemiparesis",
        section: "I",
        description: "Hemiplegia or hemiparesis — paralysis or weakness affecting one side of the body.",
        status: "code",
        validation: {
          diagnosisCheck: { passed: !0 },
          treatmentCheck: { passed: !0 }
        },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-010",
            documentName: "PT Evaluation",
            displayName: "PT Evaluation — 01/06/2026",
            effectiveDate: "2026-01-06",
            quote: "Left-sided hemiparesis with 2/5 strength in left upper and lower extremities. Requires max assist for transfers and ambulation.",
            rationale: "PT evaluation documenting hemiparesis severity and functional impact.",
            pageNumber: 1
          }
        ],
        keyFindings: [
          "Left hemiparesis following CVA — well documented",
          "2/5 strength left UE and LE",
          "PT 5x/week + OT 5x/week for functional mobility"
        ]
      },
      diagnosisSummary: "Left hemiparesis following CVA well documented across PT, OT, and physician notes.",
      treatmentSummary: "Receiving PT 5x/week and OT 5x/week for functional mobility and ADL training.",
      carePlan: {
        onCarePlan: !0,
        items: ["PT 5x/week for functional mobility", "OT 5x/week for ADL training", "Fall prevention and safety awareness", "Transfer training with progressive assist reduction"]
      }
    },
    K0510A: {
      item: {
        mdsItem: "K0510A",
        itemName: "Parenteral/IV Feeding",
        section: "K",
        description: "Parenteral or IV feeding received during the lookback period.",
        status: "code",
        rationale: "IV fluids (D5 1/2NS) administered during lookback period for hydration management.",
        evidence: [
          {
            sourceType: "order",
            sourceId: "mar-003",
            documentName: "MAR",
            displayName: "MAR — 01/08/2026",
            effectiveDate: "2026-01-08",
            quote: "D5 1/2NS 1000ml IV at 75ml/hr — running continuously",
            rationale: "Active IV fluid administration documented in MAR."
          }
        ]
      },
      diagnosisSummary: null,
      treatmentSummary: "IV fluids (D5 1/2NS) administered during lookback period for hydration management."
    },
    // ── Section I items with no existing detail (populated for demo) ──
    I0100: {
      item: {
        mdsItem: "I0100",
        itemName: "Cancer",
        section: "I",
        description: "I0100 — Does the resident have a current or active diagnosis of cancer?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-040",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "No active cancer diagnosis. History of basal cell carcinoma excised 2019, no recurrence. Last dermatology follow-up 6/2025 — clear.",
            rationale: "Physician documentation confirming no active cancer.",
            pageNumber: 1
          }
        ],
        keyFindings: ["History of BCC excised 2019 — no recurrence", "Dermatology follow-up clear 06/2025"]
      },
      diagnosisSummary: "No active cancer diagnosis found. History of basal cell carcinoma excised in 2019 with no recurrence documented.",
      treatmentSummary: "No active cancer treatment. Routine dermatology follow-up only.",
      carePlan: { onCarePlan: !1 }
    },
    I0200: {
      item: {
        mdsItem: "I0200",
        itemName: "Anemia",
        section: "I",
        description: "I0200 — Does the resident have a current diagnosis of anemia (e.g., iron deficiency, B12, folate)?",
        status: "code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-041",
            documentName: "Lab Results",
            displayName: "Lab Results — 01/15/2026",
            effectiveDate: "2026-01-15",
            quote: "Hemoglobin: 9.8 g/dL (L), Hematocrit: 29.4% (L), MCV: 76 fL (L), Ferritin: 12 ng/mL (L). Iron deficiency anemia.",
            rationale: "Lab values consistent with iron deficiency anemia."
          },
          {
            sourceType: "order",
            sourceId: "mar-041",
            documentName: "MAR",
            displayName: "MAR — 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Ferrous sulfate 325mg PO TID — administered 0800, 1200, 1800.",
            rationale: "Active iron supplementation for anemia treatment."
          }
        ],
        keyFindings: ["Hgb 9.8, Hct 29.4%, Ferritin 12 — iron deficiency anemia", "Ferrous sulfate 325mg TID active on MAR"]
      },
      diagnosisSummary: "Iron deficiency anemia documented with ICD-10 D50.9. Lab values confirm: Hgb 9.8, Ferritin 12.",
      treatmentSummary: "Ferrous sulfate 325mg TID. Follow-up labs ordered in 4 weeks.",
      carePlan: {
        onCarePlan: !0,
        items: ["Iron supplementation with meals", "CBC and iron panel recheck in 4 weeks", "Monitor for signs of GI bleeding"]
      }
    },
    I0300: {
      item: {
        mdsItem: "I0300",
        itemName: "Atrial Fibrillation or Other Dysrhythmias",
        section: "I",
        description: "I0300 — Does the resident have atrial fibrillation or other dysrhythmias?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-042",
            documentName: "Cardiology Consult",
            displayName: "Cardiology Consult — 12/18/2025",
            effectiveDate: "2025-12-18",
            quote: "Normal sinus rhythm on 12-lead ECG. No history of atrial fibrillation or other dysrhythmias. Holter monitor 2025 showed no significant arrhythmias.",
            rationale: "Cardiology documentation confirming no dysrhythmia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Normal sinus rhythm on ECG", "Holter monitor 2025 — no arrhythmias"]
      },
      diagnosisSummary: "No atrial fibrillation or dysrhythmia documented. ECG shows normal sinus rhythm. Holter monitor negative.",
      treatmentSummary: "No antiarrhythmic therapy required.",
      carePlan: { onCarePlan: !1 }
    },
    I0500: {
      item: {
        mdsItem: "I0500",
        itemName: "Deep Venous Thrombosis (DVT)",
        section: "I",
        description: "I0500 — Does the resident have a current diagnosis of deep venous thrombosis (DVT)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-043",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "No history of DVT or PE. Lower extremity edema attributed to venous insufficiency, not thrombotic. Duplex ultrasound 11/2025 negative for DVT.",
            rationale: "Physician documentation ruling out DVT.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Duplex US 11/2025 negative for DVT", "LE edema attributed to venous insufficiency"]
      },
      diagnosisSummary: "No DVT documented. Duplex ultrasound 11/2025 negative. Lower extremity edema from venous insufficiency.",
      treatmentSummary: "No anticoagulation for DVT. Compression stockings for venous insufficiency only.",
      carePlan: { onCarePlan: !1 }
    },
    I0600: {
      item: {
        mdsItem: "I0600",
        itemName: "Heart Failure",
        section: "I",
        description: "I0600 — Does the resident have heart failure (e.g., CHF, pulmonary edema)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-044",
            documentName: "Cardiology Consult",
            displayName: "Cardiology Consult — 12/18/2025",
            effectiveDate: "2025-12-18",
            quote: "Echocardiogram 12/2025: LVEF 58%, no wall motion abnormalities, no valvular disease. No clinical evidence of heart failure.",
            rationale: "Cardiology evaluation ruling out heart failure.",
            pageNumber: 2
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-045",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "No signs of fluid overload. Lungs clear bilaterally. No peripheral edema concerning for CHF. BNP 45 pg/mL (normal).",
            rationale: "Physical exam and labs ruling out heart failure.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Echo LVEF 58% — normal", "BNP 45 pg/mL — normal", "No signs of fluid overload"]
      },
      diagnosisSummary: "No heart failure documented. Echo shows preserved EF at 58%. BNP within normal limits.",
      treatmentSummary: "No heart failure therapy. Current cardiac medications for HTN/CAD only.",
      carePlan: { onCarePlan: !1 }
    },
    I0800: {
      item: {
        mdsItem: "I0800",
        itemName: "Orthostatic Hypotension",
        section: "I",
        description: "I0800 — Does the resident have orthostatic hypotension?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-046",
            documentName: "Nursing Assessment",
            displayName: "Nursing Assessment — 01/25/2026",
            effectiveDate: "2026-01-25",
            quote: "Orthostatic vitals: Supine 134/80, Standing 128/76 (1 min), 130/78 (3 min). No dizziness or lightheadedness reported. Negative orthostatic screen.",
            rationale: "Nursing assessment with negative orthostatic vitals.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Orthostatic vitals negative — no significant BP drop", "No symptoms of dizziness on standing"]
      },
      diagnosisSummary: "No orthostatic hypotension documented. Orthostatic vital signs within normal parameters.",
      treatmentSummary: "No specific orthostatic hypotension treatment. Fall precautions in place for general safety.",
      carePlan: { onCarePlan: !1 }
    },
    I1100: {
      item: {
        mdsItem: "I1100",
        itemName: "Cirrhosis",
        section: "I",
        description: "I1100 — Does the resident have cirrhosis?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-047",
            documentName: "Lab Results",
            displayName: "Lab Results — 01/15/2026",
            effectiveDate: "2026-01-15",
            quote: "LFTs: AST 28 U/L (normal), ALT 22 U/L (normal), Albumin 3.8 g/dL (normal), Total bilirubin 0.9 mg/dL (normal). No evidence of hepatic dysfunction.",
            rationale: "Normal liver function tests ruling out cirrhosis."
          }
        ],
        keyFindings: ["LFTs all within normal limits", "No hepatic dysfunction documented"]
      },
      diagnosisSummary: "No cirrhosis documented. Liver function tests all within normal range.",
      treatmentSummary: "No hepatic disease management required.",
      carePlan: { onCarePlan: !1 }
    },
    I1200: {
      item: {
        mdsItem: "I1200",
        itemName: "GERD",
        section: "I",
        description: "I1200 — Does the resident have gastroesophageal reflux disease (GERD)?",
        status: "code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-048",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "GERD well controlled on current PPI. No breakthrough symptoms. Continue omeprazole 20mg daily.",
            rationale: "Physician documentation of active GERD with treatment.",
            pageNumber: 1
          },
          {
            sourceType: "order",
            sourceId: "mar-048",
            documentName: "MAR",
            displayName: "MAR — 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Omeprazole 20mg PO daily — administered 0730 (30 min before breakfast).",
            rationale: "Active PPI therapy for GERD."
          }
        ],
        keyFindings: ["GERD on active problem list with ICD-10 K21.0", "Omeprazole 20mg daily — well controlled"]
      },
      diagnosisSummary: "GERD well documented on problem list. Active PPI therapy with good symptom control.",
      treatmentSummary: "Omeprazole 20mg daily. Dietary modifications — elevated HOB, no late meals.",
      carePlan: {
        onCarePlan: !0,
        items: ["PPI administered 30 min before breakfast", "HOB elevated 30 degrees at night", "Avoid late meals — nothing 3 hours before bed"]
      }
    },
    I2100: {
      item: {
        mdsItem: "I2100",
        itemName: "Thyroid Disorder",
        section: "I",
        description: "I2100 — Does the resident have a thyroid disorder (e.g., hypothyroidism, hyperthyroidism)?",
        status: "code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-049",
            documentName: "Lab Results",
            displayName: "Lab Results — 01/15/2026",
            effectiveDate: "2026-01-15",
            quote: "TSH: 6.8 mIU/L (H), Free T4: 0.7 ng/dL (L-normal). Subclinical hypothyroidism on levothyroxine therapy.",
            rationale: "Lab values confirming hypothyroidism under treatment."
          },
          {
            sourceType: "order",
            sourceId: "mar-049",
            documentName: "MAR",
            displayName: "MAR — 01/27/2026",
            effectiveDate: "2026-01-27",
            quote: "Levothyroxine 75mcg PO daily — administered 0630 (on empty stomach, 30 min before food).",
            rationale: "Active thyroid replacement therapy."
          }
        ],
        keyFindings: ["TSH 6.8 — suboptimally controlled hypothyroidism", "Levothyroxine 75mcg daily active on MAR"]
      },
      diagnosisSummary: "Hypothyroidism documented with ICD-10 E03.9. TSH 6.8 on latest labs — dose adjustment may be needed.",
      treatmentSummary: "Levothyroxine 75mcg daily. TSH recheck ordered in 6 weeks.",
      carePlan: {
        onCarePlan: !0,
        items: ["Levothyroxine on empty stomach at 0630", "TSH recheck in 6 weeks", "Hold calcium/iron 4 hours after dose"]
      }
    },
    I2300: {
      item: {
        mdsItem: "I2300",
        itemName: "Hyperglycemia",
        section: "I",
        description: "I2300 — Does the resident have hyperglycemia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-050",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Blood glucose elevations are attributed to known diabetes mellitus (I2000), not a separate hyperglycemia diagnosis. Covered under DM management plan.",
            rationale: "Glucose elevations accounted for under DM diagnosis.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Glucose elevations managed under DM (I2000)", "No separate hyperglycemia diagnosis"]
      },
      diagnosisSummary: "No separate hyperglycemia diagnosis. Blood glucose elevations managed under diabetes mellitus (I2000).",
      treatmentSummary: "Glucose management covered under DM treatment plan — metformin, sliding scale, monitoring.",
      carePlan: { onCarePlan: !1 }
    },
    I4200: {
      item: {
        mdsItem: "I4200",
        itemName: "Multi-Drug Resistant Organism (MDRO)",
        section: "I",
        description: "I4200 — Does the resident have an infection with a multi-drug resistant organism (MDRO)?",
        status: "code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-051",
            documentName: "Microbiology Report",
            displayName: "Microbiology Report — 01/10/2026",
            effectiveDate: "2026-01-10",
            quote: "Urine culture: E. coli >100,000 CFU/mL. ESBL-producing. Resistant to ampicillin, ciprofloxacin, TMP-SMX. Sensitive to meropenem, nitrofurantoin.",
            rationale: "Culture confirming ESBL-producing E. coli — qualifies as MDRO."
          },
          {
            sourceType: "order",
            sourceId: "mar-051",
            documentName: "MAR",
            displayName: "MAR — 01/12/2026",
            effectiveDate: "2026-01-12",
            quote: "Nitrofurantoin 100mg PO BID x 7 days — started 01/12. Contact precautions initiated per infection control protocol.",
            rationale: "Active antibiotic treatment for MDRO infection."
          }
        ],
        keyFindings: ["ESBL-producing E. coli in urine culture", "Contact precautions initiated", "Treated with nitrofurantoin 100mg BID"]
      },
      diagnosisSummary: "MDRO infection documented: ESBL-producing E. coli UTI confirmed by culture 01/10/2026.",
      treatmentSummary: "Nitrofurantoin 100mg BID x 7 days. Contact precautions per infection control protocol.",
      carePlan: {
        onCarePlan: !0,
        items: ["Contact precautions per infection control", "Antibiotic with food to reduce GI upset", "Repeat urine culture after antibiotics complete", "Monitor for C. diff symptoms"]
      }
    },
    I4400: {
      item: {
        mdsItem: "I4400",
        itemName: "Pneumonia",
        section: "I",
        description: "I4400 — Does the resident have pneumonia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-052",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Lungs clear to auscultation bilaterally. No cough, fever, or respiratory distress. Chest X-ray 01/05 — no infiltrates. No active pneumonia.",
            rationale: "Clinical exam and imaging ruling out pneumonia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Lungs CTA bilaterally", "CXR 01/05 — no infiltrates", "No respiratory symptoms"]
      },
      diagnosisSummary: "No pneumonia documented. Chest X-ray clear, lungs clear on exam, no respiratory symptoms.",
      treatmentSummary: "No pneumonia treatment. Pneumococcal and influenza vaccines up to date.",
      carePlan: { onCarePlan: !1 }
    },
    I4500: {
      item: {
        mdsItem: "I4500",
        itemName: "Septicemia",
        section: "I",
        description: "I4500 — Does the resident have septicemia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "lab_result",
            sourceId: "doc-053",
            documentName: "Lab Results",
            displayName: "Lab Results — 01/15/2026",
            effectiveDate: "2026-01-15",
            quote: "WBC: 7.2 (normal), Lactate: 1.1 mmol/L (normal), Procalcitonin: 0.04 ng/mL (normal). Blood cultures 01/10 — no growth at 5 days.",
            rationale: "Labs and cultures ruling out septicemia."
          }
        ],
        keyFindings: ["Blood cultures negative at 5 days", "WBC, lactate, procalcitonin all normal"]
      },
      diagnosisSummary: "No septicemia documented. Blood cultures negative, inflammatory markers normal.",
      treatmentSummary: "No sepsis treatment. UTI treated with targeted antibiotics only.",
      carePlan: { onCarePlan: !1 }
    },
    I4900: {
      item: {
        mdsItem: "I4900",
        itemName: "Schizophrenia",
        section: "I",
        description: "I4900 — Does the resident have schizophrenia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-054",
            documentName: "Psychiatric Evaluation",
            displayName: "Psychiatric Evaluation — 12/15/2025",
            effectiveDate: "2025-12-15",
            quote: "No history of schizophrenia or psychotic disorders. Psychiatric review of systems negative for hallucinations, delusions, or disorganized thinking.",
            rationale: "Psychiatric evaluation confirming no schizophrenia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Psychiatric evaluation negative for psychotic disorders", "No antipsychotic medications on profile"]
      },
      diagnosisSummary: "No schizophrenia documented. Psychiatric evaluation negative for psychotic symptoms.",
      treatmentSummary: "No antipsychotic medications prescribed.",
      carePlan: { onCarePlan: !1 }
    },
    I5200: {
      item: {
        mdsItem: "I5200",
        itemName: "Paraplegia",
        section: "I",
        description: "I5200 — Does the resident have paraplegia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-055",
            documentName: "PT Evaluation",
            displayName: "PT Evaluation — 01/06/2026",
            effectiveDate: "2026-01-06",
            quote: "Left hemiparesis noted (see I5100) but bilateral lower extremity function preserved. Patient ambulates with rolling walker and min assist. No paraplegia.",
            rationale: "PT evaluation confirming no paraplegia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Bilateral LE function preserved", "Ambulates with walker and min assist"]
      },
      diagnosisSummary: "No paraplegia documented. Left hemiparesis (I5100) but both lower extremities functional.",
      treatmentSummary: "PT 5x/week for mobility. No paraplegia-specific treatment needed.",
      carePlan: { onCarePlan: !1 }
    },
    I5250: {
      item: {
        mdsItem: "I5250",
        itemName: "Quadriplegia",
        section: "I",
        description: "I5250 — Does the resident have quadriplegia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-056",
            documentName: "PT Evaluation",
            displayName: "PT Evaluation — 01/06/2026",
            effectiveDate: "2026-01-06",
            quote: "Right upper and lower extremities with full strength 5/5. Left-sided weakness 2-3/5 from CVA. No quadriplegia — functional use of right side.",
            rationale: "PT documentation ruling out quadriplegia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["Right side full strength 5/5", "Left side weakness from CVA only — not quadriplegia"]
      },
      diagnosisSummary: "No quadriplegia documented. Right-sided extremities with full strength. Left hemiparesis only.",
      treatmentSummary: "No quadriplegia-specific interventions. PT/OT for left-sided weakness.",
      carePlan: { onCarePlan: !1 }
    },
    I5300: {
      item: {
        mdsItem: "I5300",
        itemName: "Aphasia",
        section: "I",
        description: "I5300 — Does the resident have aphasia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-057",
            documentName: "SLP Evaluation",
            displayName: "SLP Evaluation — 01/20/2026",
            effectiveDate: "2026-01-20",
            quote: "No aphasia documented. Communication intact. Swallowing evaluation only — dysphagia noted but language function preserved.",
            rationale: "SLP evaluation found no aphasia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["No aphasia documented in clinical records", "Communication abilities intact per SLP evaluation"]
      },
      diagnosisSummary: "No aphasia documented. SLP evaluation focused on swallowing/dysphagia only.",
      treatmentSummary: "No aphasia-specific therapy. SLP treating dysphagia only.",
      carePlan: { onCarePlan: !1 }
    },
    I5350: {
      item: {
        mdsItem: "I5350",
        itemName: "Non-Alzheimer Dementia",
        section: "I",
        description: "I5350 — Does the resident have non-Alzheimer dementia (e.g., vascular, Lewy body)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-058",
            documentName: "Neurology Consult",
            displayName: "Neurology Consult — 12/20/2025",
            effectiveDate: "2025-12-20",
            quote: "MMSE 22/30 — mild cognitive impairment likely related to CVA sequelae. Does not meet criteria for dementia diagnosis at this time. Monitor and reassess in 3 months.",
            rationale: "Neurology evaluation — cognitive impairment from CVA but not dementia.",
            pageNumber: 2
          }
        ],
        keyFindings: ["MMSE 22/30 — mild cognitive impairment", "CVA-related, not dementia per neurology", "Reassess in 3 months"]
      },
      diagnosisSummary: "No non-Alzheimer dementia documented. Mild cognitive impairment from CVA — does not meet dementia criteria per neurology.",
      treatmentSummary: "Cognitive stimulation activities. Neurology follow-up in 3 months for reassessment.",
      carePlan: { onCarePlan: !1 }
    },
    I5400: {
      item: {
        mdsItem: "I5400",
        itemName: "Alzheimer Disease",
        section: "I",
        description: "I5400 — Does the resident have Alzheimer disease?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-059",
            documentName: "Neurology Consult",
            displayName: "Neurology Consult — 12/20/2025",
            effectiveDate: "2025-12-20",
            quote: "No clinical features suggestive of Alzheimer disease. Cognitive changes are acute post-CVA, not progressive degenerative pattern. No cholinesterase inhibitors indicated.",
            rationale: "Neurology ruling out Alzheimer disease.",
            pageNumber: 2
          }
        ],
        keyFindings: ["Cognitive changes acute post-CVA, not progressive", "No Alzheimer features per neurology"]
      },
      diagnosisSummary: "No Alzheimer disease documented. Cognitive impairment attributed to CVA, not neurodegenerative disease.",
      treatmentSummary: "No Alzheimer-specific medications. No cholinesterase inhibitors or memantine.",
      carePlan: { onCarePlan: !1 }
    },
    I5500: {
      item: {
        mdsItem: "I5500",
        itemName: "Multiple Sclerosis",
        section: "I",
        description: "I5500 — Does the resident have multiple sclerosis (MS)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-060",
            documentName: "Neurology Consult",
            displayName: "Neurology Consult — 12/20/2025",
            effectiveDate: "2025-12-20",
            quote: "No history of multiple sclerosis. Left-sided weakness is consistent with ischemic stroke, not demyelinating disease. MRI brain shows old infarct, no white matter lesions.",
            rationale: "Neurology ruling out MS — findings consistent with stroke.",
            pageNumber: 3
          }
        ],
        keyFindings: ["MRI — old infarct, no MS-type white matter lesions", "Weakness from stroke, not demyelination"]
      },
      diagnosisSummary: "No multiple sclerosis documented. MRI shows old infarct only, no demyelinating lesions.",
      treatmentSummary: "No MS disease-modifying therapy. Neurological deficits managed as CVA sequelae.",
      carePlan: { onCarePlan: !1 }
    },
    I5700: {
      item: {
        mdsItem: "I5700",
        itemName: "Schizophrenia (Section I)",
        section: "I",
        description: "I5700 — Does the resident have schizophrenia?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-061",
            documentName: "Psychiatric Evaluation",
            displayName: "Psychiatric Evaluation — 12/15/2025",
            effectiveDate: "2025-12-15",
            quote: "No history or symptoms of schizophrenia. See I4900 evaluation. Mental status exam: oriented x3, no psychotic features, thought process linear and goal-directed.",
            rationale: "Psychiatric evaluation negative for schizophrenia.",
            pageNumber: 1
          }
        ],
        keyFindings: ["No psychotic features on mental status exam", "Thought process linear and goal-directed"]
      },
      diagnosisSummary: "No schizophrenia. Psychiatric evaluation negative — no psychotic symptoms.",
      treatmentSummary: "No antipsychotic medications. No psychiatric treatment for psychosis.",
      carePlan: { onCarePlan: !1 }
    },
    I5800: {
      item: {
        mdsItem: "I5800",
        itemName: "Anxiety Disorder",
        section: "I",
        description: "I5800 — Does the resident have an anxiety disorder?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-062",
            documentName: "Psychiatric Evaluation",
            displayName: "Psychiatric Evaluation — 12/15/2025",
            effectiveDate: "2025-12-15",
            quote: "GAD-7 score: 4 (minimal anxiety). Patient reports occasional worry about health but no panic attacks, avoidance behaviors, or functional impairment from anxiety.",
            rationale: "Psychiatric screening negative for anxiety disorder.",
            pageNumber: 1
          }
        ],
        keyFindings: ["GAD-7 score 4 — minimal anxiety", "No panic attacks or avoidance behaviors"]
      },
      diagnosisSummary: "No anxiety disorder documented. GAD-7 score 4 — minimal, subclinical anxiety only.",
      treatmentSummary: "No anxiolytic medications. Supportive counseling available PRN.",
      carePlan: { onCarePlan: !1 }
    },
    I5900: {
      item: {
        mdsItem: "I5900",
        itemName: "PTSD",
        section: "I",
        description: "I5900 — Does the resident have post-traumatic stress disorder (PTSD)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-063",
            documentName: "Psychiatric Evaluation",
            displayName: "Psychiatric Evaluation — 12/15/2025",
            effectiveDate: "2025-12-15",
            quote: "No history of PTSD. Patient denies traumatic experiences, nightmares, flashbacks, or hypervigilance. PC-PTSD-5 screen negative.",
            rationale: "PTSD screening negative.",
            pageNumber: 2
          }
        ],
        keyFindings: ["PC-PTSD-5 screen negative", "No trauma history, nightmares, or flashbacks"]
      },
      diagnosisSummary: "No PTSD documented. Screening negative — no traumatic stress symptoms.",
      treatmentSummary: "No PTSD-specific treatment or trauma-focused therapy.",
      carePlan: { onCarePlan: !1 }
    },
    I5950: {
      item: {
        mdsItem: "I5950",
        itemName: "Psychotic Disorder",
        section: "I",
        description: "I5950 — Does the resident have a psychotic disorder (other than schizophrenia)?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-064",
            documentName: "Psychiatric Evaluation",
            displayName: "Psychiatric Evaluation — 12/15/2025",
            effectiveDate: "2025-12-15",
            quote: "No psychotic features identified. No hallucinations (auditory or visual), no delusions, no disorganized speech. Reality testing intact.",
            rationale: "Psychiatric evaluation ruling out psychotic disorder.",
            pageNumber: 1
          }
        ],
        keyFindings: ["No hallucinations or delusions", "Reality testing intact"]
      },
      diagnosisSummary: "No psychotic disorder documented. Psychiatric evaluation — no hallucinations, delusions, or disorganized thinking.",
      treatmentSummary: "No antipsychotic medications. No psychosis treatment.",
      carePlan: { onCarePlan: !1 }
    },
    I6000: {
      item: {
        mdsItem: "I6000",
        itemName: "Asthma / COPD / Chronic Lung Disease",
        section: "I",
        description: "I6000 — Does the resident have asthma, COPD, or chronic lung disease?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-065",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Lungs clear to auscultation bilaterally. No wheezing, rhonchi, or prolonged expiratory phase. No history of asthma, COPD, or chronic lung disease. SpO2 97% on room air.",
            rationale: "Clinical exam negative for chronic lung disease.",
            pageNumber: 1
          },
          {
            sourceType: "progress-note",
            sourceId: "doc-066",
            documentName: "Chest X-Ray Report",
            displayName: "Chest X-Ray — 01/05/2026",
            effectiveDate: "2026-01-05",
            quote: "Lungs clear bilaterally. No hyperinflation. Normal cardiac silhouette. No pleural effusion.",
            rationale: "Chest imaging with no evidence of chronic lung disease."
          }
        ],
        keyFindings: ["Lungs CTA — no wheezing or rhonchi", "SpO2 97% on room air", "CXR — no hyperinflation or chronic changes"]
      },
      diagnosisSummary: "No asthma, COPD, or chronic lung disease documented. Lungs clear, SpO2 97%, imaging normal.",
      treatmentSummary: "No bronchodilators or inhaled corticosteroids. No supplemental oxygen.",
      carePlan: { onCarePlan: !1 }
    },
    I6100: {
      item: {
        mdsItem: "I6100",
        itemName: "Respiratory Failure",
        section: "I",
        description: "I6100 — Does the resident have respiratory failure?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-067",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Respiratory status stable. SpO2 97% on room air. No supplemental oxygen required. ABG not indicated — no clinical concern for respiratory failure.",
            rationale: "Clinical assessment ruling out respiratory failure.",
            pageNumber: 1
          }
        ],
        keyFindings: ["SpO2 97% on room air — no supplemental O2", "No respiratory distress or failure"]
      },
      diagnosisSummary: "No respiratory failure documented. Oxygenation adequate on room air.",
      treatmentSummary: "No supplemental oxygen. No respiratory support devices.",
      carePlan: { onCarePlan: !1 }
    },
    I6200: {
      item: {
        mdsItem: "I6200",
        itemName: "None of the Above (Respiratory)",
        section: "I",
        description: "I6200 — None of the above respiratory conditions.",
        status: "dont_code",
        evidence: [],
        rationale: "No respiratory conditions identified in I6000-I6100. This is a confirmation item."
      },
      diagnosisSummary: null,
      treatmentSummary: null
    },
    I6300: {
      item: {
        mdsItem: "I6300",
        itemName: "None of the Above (Additional)",
        section: "I",
        description: "I6300 — None of the above additional conditions.",
        status: "dont_code",
        evidence: [],
        rationale: "Confirmation item — no additional conditions in this category."
      },
      diagnosisSummary: null,
      treatmentSummary: null
    },
    I6500: {
      item: {
        mdsItem: "I6500",
        itemName: "Seizure Disorder / Epilepsy",
        section: "I",
        description: "I6500 — Does the resident have a seizure disorder or epilepsy?",
        status: "dont_code",
        validation: { diagnosisCheck: { passed: !0 }, treatmentCheck: { passed: !0 } },
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-068",
            documentName: "Neurology Consult",
            displayName: "Neurology Consult — 12/20/2025",
            effectiveDate: "2025-12-20",
            quote: "No seizure history. Post-CVA prophylactic seizure medication not indicated per current guidelines. EEG not required. No witnessed seizure activity.",
            rationale: "Neurology evaluation confirming no seizure disorder.",
            pageNumber: 3
          }
        ],
        keyFindings: ["No seizure history", "No prophylactic anticonvulsants indicated post-CVA", "No witnessed seizure activity"]
      },
      diagnosisSummary: "No seizure disorder or epilepsy documented. Neurology evaluation negative.",
      treatmentSummary: "No anticonvulsant medications. No seizure precautions beyond standard post-CVA monitoring.",
      carePlan: { onCarePlan: !1 }
    },
    I7900: {
      item: {
        mdsItem: "I7900",
        itemName: "None of the Above (Neurological)",
        section: "I",
        description: "I7900 — None of the above neurological conditions (besides those already coded).",
        status: "dont_code",
        evidence: [],
        rationale: "Hemiparesis (I5100) and Malnutrition (I5600) are coded. No additional neurological conditions apply."
      },
      diagnosisSummary: null,
      treatmentSummary: null
    },
    I8000: {
      item: {
        mdsItem: "I8000",
        itemName: "Additional Active Diagnoses",
        section: "I",
        description: "I8000 — Does the resident have additional active diagnoses not captured above?",
        status: "dont_code",
        evidence: [
          {
            sourceType: "progress-note",
            sourceId: "doc-069",
            documentName: "MD Progress Note",
            displayName: "MD Progress Note — 01/22/2026",
            effectiveDate: "2026-01-22",
            quote: "Active problem list reviewed. All active diagnoses captured in Sections I0100-I7900. CKD Stage 3, Obesity, and Chronic pain documented in problem list but not MDS-reportable in Section I.",
            rationale: "Physician review confirming all Section I diagnoses captured.",
            pageNumber: 1
          }
        ],
        keyFindings: ["All Section I diagnoses captured above", "CKD Stage 3, Obesity, Chronic pain on problem list — not Section I items"]
      },
      diagnosisSummary: "No additional Section I diagnoses to capture. Other active conditions (CKD, obesity, chronic pain) not reportable here.",
      treatmentSummary: "All active treatments documented under their respective Section I items.",
      carePlan: { onCarePlan: !1 }
    }
  },
  // ════════════════════════════════════════════
  // QUERYABLE ITEMS (useQueryItems)
  // ════════════════════════════════════════════
  queryableItems: {
    assessment: {
      id: "4860265",
      externalAssessmentId: "4860265",
      patientId: "2657226",
      patientName: "Doe, Jane",
      description: "Quarterly",
      ardDate: "2026-01-13"
    },
    summary: {
      totalItems: 6,
      queryRecommended: 3,
      alreadyCoded: 1,
      recommendCoding: 2
    },
    items: [
      {
        mdsItem: "I5600",
        mdsItemName: "Malnutrition",
        pdpmCategoryName: "Malnutrition",
        section: "I",
        solverStatus: "needs_physician_query",
        confidence: 0.95,
        rationale: "Nutrition assessment documents significant weight loss (12.6%), low albumin (2.9) and prealbumin (12), PO intake <50%. No malnutrition ICD-10 code on active problem list — physician confirmation needed.",
        keyFindings: [
          "Weight loss 12.6% (17 lbs) in 3 months — severe",
          "Albumin 2.9 g/dL, Prealbumin 12 mg/dL — both low",
          "PO intake <50% of estimated needs",
          "Ensure Plus BID and fortified cereal ordered",
          "No malnutrition ICD-10 on problem list"
        ],
        evidence: [
          { sourceType: "progress-note", sourceId: "doc-nutr-001", quote: "Weight Loss: 17 lbs (12.6%) in past 3 months. PO Intake < 50%. Moderate protein-calorie malnutrition.", documentName: "Nutrition Progress Note" },
          { sourceType: "lab_result", sourceId: "doc-nutr-002", quote: "Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low)", documentName: "Nutrition Lab Panel" }
        ],
        queryEvidence: [
          { sourceType: "progress-note", sourceId: "doc-nutr-001", quote: "Weight Loss: 17 lbs (12.6%) in past 3 months. Moderate protein-calorie malnutrition diagnosed based on significant unintentional weight loss, inadequate oral intake, and low albumin/prealbumin.", documentName: "Nutrition Progress Note", effectiveDate: "2026-01-22" },
          { sourceType: "lab_result", sourceId: "doc-nutr-002", quote: "Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low). Low values suggest malnutrition.", documentName: "Nutrition Lab Panel", effectiveDate: "2026-01-20" },
          { sourceType: "order", sourceId: "doc-nutr-004", quote: "Ensure Plus 8oz BID with meals for nutritional supplementation", documentName: "MAR - Ensure Plus", effectiveDate: "2026-01-22" }
        ],
        recommendedIcd10: [
          { code: "E44.0", description: "Moderate protein-calorie malnutrition" },
          { code: "E46", description: "Unspecified protein-calorie malnutrition" }
        ],
        existingQuery: null
      },
      {
        mdsItem: "I4300",
        mdsItemName: "Diabetes with PVD",
        pdpmCategoryName: "Diabetes with Peripheral Vascular Disease",
        section: "I",
        solverStatus: "needs_physician_query",
        confidence: 0.85,
        rationale: "Lab results confirm diabetes. PVD symptoms documented but no specific PVD ICD-10 code. Physician query needed to confirm combination diagnosis.",
        keyFindings: [
          "HbA1c 8.2% — uncontrolled diabetes",
          "Diminished pedal pulses documented",
          "No PVD diagnosis on problem list"
        ],
        evidence: [
          { sourceType: "lab_result", sourceId: "doc-081", quote: "HbA1c: 8.2%, GFR: 42", documentName: "Lab Results" },
          { sourceType: "progress-note", sourceId: "doc-082", quote: "Bilateral lower extremity edema with diminished pedal pulses.", documentName: "MD Progress Note" }
        ],
        queryEvidence: [
          { sourceType: "lab_result", sourceId: "doc-081", quote: "HbA1c: 8.2%, Fasting glucose: 186 mg/dL", documentName: "Lab Results", effectiveDate: "2026-01-18" },
          { sourceType: "progress-note", sourceId: "doc-082", quote: "Bilateral lower extremity edema with diminished pedal pulses noted.", documentName: "MD Progress Note", effectiveDate: "2026-01-22" }
        ],
        recommendedIcd10: [
          { code: "E11.51", description: "Type 2 DM with diabetic peripheral angiopathy" }
        ],
        existingQuery: null
      },
      {
        mdsItem: "I2900",
        mdsItemName: "Drug/Medication Induced Depression",
        pdpmCategoryName: "Drug/Medication Induced Depression",
        section: "I",
        solverStatus: "needs_physician_query",
        confidence: 0.72,
        rationale: "PHQ-9 missing. Nursing notes document depressive symptoms. Multiple medications with depressive side-effect profiles on MAR.",
        keyFindings: [
          "PHQ-9 assessment not completed",
          "Patient reports feeling down",
          "Multiple medications with depression side effects"
        ],
        evidence: [
          { sourceType: "progress-note", sourceId: "doc-083", quote: "Patient reports feeling down and having little interest in activities.", documentName: "Nursing Assessment" }
        ],
        queryEvidence: [
          { sourceType: "progress-note", sourceId: "doc-083", quote: "Patient reports feeling down and having little interest in activities. Declined recreational therapy.", documentName: "Nursing Assessment", effectiveDate: "2026-01-25" }
        ],
        recommendedIcd10: [
          { code: "F32.9", description: "Major depressive disorder, single episode, unspecified" }
        ],
        existingQuery: null
      },
      {
        mdsItem: "O0400A3",
        mdsItemName: "IV Medications",
        pdpmCategoryName: "IV Medications",
        section: "O",
        solverStatus: "recommend_coding",
        confidence: 0.95,
        rationale: "MAR confirms IV antibiotic administration during lookback period. This is a treatment item — can be coded based on documentation without physician query.",
        keyFindings: [
          "Vancomycin IV administered during lookback",
          "Physician order on file",
          "Can be coded without query"
        ],
        evidence: [
          { sourceType: "order", sourceId: "order-080", quote: "Vancomycin 1g IV Q12H — administered 1/12, 1/13", documentName: "MAR" }
        ],
        queryEvidence: [],
        recommendedIcd10: [],
        existingQuery: null
      },
      {
        mdsItem: "I4900",
        mdsItemName: "Schizophrenia",
        pdpmCategoryName: "Schizophrenia",
        section: "I",
        solverStatus: "needs_physician_query",
        confidence: 0.45,
        rationale: "Historical mention in old discharge summary. No recent documentation supporting active diagnosis.",
        keyFindings: [
          "Historical mention only",
          "No active symptoms documented",
          "Query already sent"
        ],
        evidence: [],
        queryEvidence: [],
        recommendedIcd10: [
          { code: "F20.9", description: "Schizophrenia, unspecified" }
        ],
        existingQuery: {
          id: "q-003",
          status: "sent",
          sentAt: new Date(Date.now() - 2 * 864e5).toISOString()
        }
      },
      {
        mdsItem: "E11.9",
        mdsItemName: "Type 2 Diabetes Mellitus",
        pdpmCategoryName: "Diabetes Mellitus",
        section: "I",
        solverStatus: "already_coded",
        confidence: 0.98,
        rationale: "E11.9 is on active problem list and well documented in clinical records.",
        keyFindings: [
          "ICD-10 E11.9 on problem list",
          "Active medications (Metformin)",
          "Lab monitoring in place"
        ],
        evidence: [
          { sourceType: "diagnosis_list", quote: "E11.9 - Type 2 Diabetes Mellitus without complications", documentName: "Active Problem List" }
        ],
        queryEvidence: [],
        recommendedIcd10: [],
        existingQuery: null
      }
    ]
  },
  // ════════════════════════════════════════════
  // PRACTITIONERS (useBatchQuery)
  // ════════════════════════════════════════════
  practitioners: [
    {
      id: "pract-001",
      firstName: "Demo",
      lastName: "Provider",
      title: "MD",
      name: "Dr. Demo Provider",
      phone: "555-0101"
    },
    {
      id: "pract-002",
      firstName: "Sample",
      lastName: "Doctor",
      title: "DO",
      name: "Dr. Sample Doctor",
      phone: "555-0102"
    },
    {
      id: "pract-003",
      firstName: "Jane",
      lastName: "Specialist",
      title: "NP",
      name: "Jane Specialist, NP",
      phone: "555-0103"
    }
  ],
  // ════════════════════════════════════════════
  // ARD RECOMMENDATION (useArdEstimator)
  // 5-Day PPS scenario for Doe, Jane. Day 5 is the recommended ARD,
  // Day 3 drops NTA because a look-back-limited dx wasn't captured yet.
  // ════════════════════════════════════════════
  ardRecommendation: {
    success: !0,
    externalAssessmentId: "4860265",
    admissionDate: "2026-01-10",
    recommendedDayNumber: 5,
    potentialPpd: 612,
    scores: [
      {
        dayNumber: 1,
        dayDate: "2026-01-10",
        hippsCode: "HBC11",
        estimatedPpd: 498,
        nursingMainCategory: "CDE",
        nursingPaymentGroup: "CBC1",
        ntaLevel: "NE",
        ntaPoints: 4,
        slpGroup: "SB",
        ptotGroup: "TB"
      },
      {
        dayNumber: 2,
        dayDate: "2026-01-11",
        hippsCode: "HBC11",
        estimatedPpd: 498,
        nursingMainCategory: "CDE",
        nursingPaymentGroup: "CBC1",
        ntaLevel: "NE",
        ntaPoints: 4,
        slpGroup: "SB",
        ptotGroup: "TB"
      },
      {
        dayNumber: 3,
        dayDate: "2026-01-12",
        hippsCode: "HBC11",
        estimatedPpd: 498,
        nursingMainCategory: "CDE",
        nursingPaymentGroup: "CBC1",
        ntaLevel: "NE",
        ntaPoints: 4,
        slpGroup: "SB",
        ptotGroup: "TB"
      },
      {
        dayNumber: 4,
        dayDate: "2026-01-13",
        hippsCode: "HDC21",
        estimatedPpd: 556,
        nursingMainCategory: "CDE",
        nursingPaymentGroup: "CBC2",
        ntaLevel: "ND",
        ntaPoints: 7,
        slpGroup: "SC",
        ptotGroup: "TB"
      },
      {
        dayNumber: 5,
        dayDate: "2026-01-14",
        hippsCode: "HDE21",
        estimatedPpd: 589,
        nursingMainCategory: "CDE",
        nursingPaymentGroup: "CBC2",
        ntaLevel: "NC",
        ntaPoints: 10,
        slpGroup: "SC",
        ptotGroup: "TB"
      }
    ],
    classifiedItems: [
      {
        mdsItem: "I4300",
        mdsColumn: "",
        description: "Aphasia",
        classification: "time_sensitive_captured",
        ntaPoints: 0,
        pdpmComponents: ["slp"],
        nursingInfo: null,
        queryStatus: null,
        capturedOnDays: [1, 2, 3, 4, 5],
        solverAnswer: "yes",
        queryPdpmImpact: ""
      },
      {
        mdsItem: "K0510",
        mdsColumn: "B1",
        description: "Mechanically altered diet",
        classification: "time_sensitive_captured",
        ntaPoints: 0,
        pdpmComponents: ["slp"],
        nursingInfo: null,
        queryStatus: null,
        capturedOnDays: [1, 2, 3, 4, 5],
        solverAnswer: "yes",
        queryPdpmImpact: ""
      },
      {
        mdsItem: "I2900",
        mdsColumn: "",
        description: "Diabetes mellitus",
        classification: "time_sensitive_at_risk",
        ntaPoints: 2,
        pdpmComponents: ["nta"],
        nursingInfo: null,
        queryStatus: null,
        capturedOnDays: [4, 5],
        solverAnswer: "yes",
        queryPdpmImpact: "Captured only on Days 4–5 — earlier ARD loses 2 NTA points."
      },
      {
        mdsItem: "I2100",
        mdsColumn: "",
        description: "Septicemia",
        classification: "item_to_query",
        ntaPoints: 3,
        pdpmComponents: ["nta"],
        nursingInfo: null,
        queryStatus: null,
        capturedOnDays: [],
        solverAnswer: "needs_review",
        queryPdpmImpact: "Hospital notes reference sepsis — confirm diagnosis for +3 NTA."
      },
      {
        mdsItem: "I2000",
        mdsColumn: "",
        description: "Pneumonia",
        classification: "item_to_query",
        ntaPoints: 2,
        pdpmComponents: ["nta"],
        nursingInfo: null,
        queryStatus: null,
        capturedOnDays: [],
        solverAnswer: "needs_review",
        queryPdpmImpact: "Chest imaging suggests infiltrate — confirm for +2 NTA."
      },
      {
        mdsItem: "O0110",
        mdsColumn: "A1",
        description: "IV medications",
        classification: "item_to_query",
        ntaPoints: 5,
        pdpmComponents: ["nta"],
        nursingInfo: null,
        queryStatus: "sent",
        capturedOnDays: [],
        solverAnswer: "needs_review",
        queryPdpmImpact: "Query sent — awaiting response."
      },
      {
        mdsItem: "GG0170",
        mdsColumn: "C1",
        description: "Functional mobility — bed mobility",
        classification: "always_captured",
        ntaPoints: 0,
        pdpmComponents: ["ptot", "nursing"],
        nursingInfo: { category: "CDE" },
        queryStatus: null,
        capturedOnDays: [1, 2, 3, 4, 5],
        solverAnswer: "coded",
        queryPdpmImpact: ""
      },
      {
        mdsItem: "B0700",
        mdsColumn: "",
        description: "Makes self understood",
        classification: "needs_review",
        ntaPoints: 0,
        pdpmComponents: ["slp"],
        nursingInfo: null,
        queryStatus: null,
        capturedOnDays: [],
        solverAnswer: "needs_review",
        queryPdpmImpact: "Documentation is ambiguous — review with SLP."
      },
      {
        mdsItem: "N0415",
        mdsColumn: "H1",
        description: "Anticoagulant",
        classification: "always_captured",
        ntaPoints: 1,
        pdpmComponents: ["nta"],
        nursingInfo: null,
        queryStatus: null,
        capturedOnDays: [1, 2, 3, 4, 5],
        solverAnswer: "coded",
        queryPdpmImpact: ""
      }
    ]
  }
}, ii = [
  { patientId: "pat_hagerich", patientExternalId: "2657001", patientName: "Hagerich, Laurel" },
  { patientId: "pat_clark", patientExternalId: "2657002", patientName: "Clark, Terrence" },
  { patientId: "pat_saffle", patientExternalId: "2657003", patientName: "Saffle, Elinor" },
  { patientId: "pat_coble", patientExternalId: "2657004", patientName: "Coble, Gary" },
  { patientId: "pat_packoski", patientExternalId: "2657005", patientName: "Packoski, Diane" },
  { patientId: "pat_stamper", patientExternalId: "2657006", patientName: "Stamper, Bill" },
  { patientId: "pat_schmalz", patientExternalId: "2657007", patientName: "Schmalzriedt, Rolf" },
  { patientId: "pat_nugent", patientExternalId: "2657008", patientName: "Nugent, Carol" },
  { patientId: "pat_bruton", patientExternalId: "2657009", patientName: "Bruton, Angela" },
  { patientId: "pat_henstreet", patientExternalId: "2657010", patientName: "Henstreet, Ray" },
  { patientId: "pat_watkins", patientExternalId: "2657011", patientName: "Watkins, Marva" },
  { patientId: "pat_mccants", patientExternalId: "2657012", patientName: "McCants, Gloria" },
  { patientId: "pat_clappor", patientExternalId: "2657013", patientName: "Clappor, Bruno" },
  { patientId: "pat_ashley", patientExternalId: "2657014", patientName: "Ashley, Jamie" },
  { patientId: "pat_hoffie", patientExternalId: "2657015", patientName: "Hoffie, Shirley" },
  { patientId: "pat_rogers", patientExternalId: "2657016", patientName: "Rogers, Warren" },
  { patientId: "pat_smith", patientExternalId: "2657017", patientName: "Smith, Bertha" },
  { patientId: "pat_clasper", patientExternalId: "2657018", patientName: "Clasper, Ronald" }
];
function N(t) {
  return ii.find((n) => n.patientName.startsWith(t));
}
function pe(t, n) {
  const [s, a, i] = t.split("-").map(Number), r = new Date(s, a - 1, i);
  return r.setDate(r.getDate() + n), `${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}-${String(r.getDate()).padStart(2, "0")}`;
}
function de(t, n, s, { urgency: a = "ok", meta: i = {} } = {}) {
  return {
    date: t,
    type: n,
    patientId: s.patientId,
    patientExternalId: s.patientExternalId,
    patientName: s.patientName,
    urgency: a,
    meta: i
  };
}
function ri(t) {
  const n = t, s = pe(n, 1), a = pe(n, 2), i = pe(n, 3), r = pe(n, 4), o = pe(n, 5), c = pe(n, 6);
  return [
    // Monday — urgent opener
    de(n, "cert_overdue", N("Coble"), {
      urgency: "overdue",
      meta: { certId: "cert_coble_01", type: "day_14_recert", status: "pending", bucket: "needs_to_send", daysOverdue: 32 }
    }),
    de(n, "cp_review_due", N("Hagerich"), {
      urgency: "warning",
      meta: { nextReviewDate: n, pccReviewId: null, pccCarePlanId: "cp_hagerich_01" }
    }),
    de(n, "query_due", N("Saffle"), {
      urgency: "warning",
      meta: { queryId: "q_saffle_01", itemCode: "I5100", status: "sent", linkedArdDate: i }
    }),
    // Tuesday — admit + sig + cp review
    de(s, "admit", N("Clark"), {
      meta: { payer: "Medicare A", location: "4-South" }
    }),
    de(s, "mds_ard", N("Clasper"), {
      meta: { assessmentId: "mds_clasper_01", pccAssessmentId: "4860311", description: "Admission + 5-Day PPS", status: "In Progress", ardDate: s }
    }),
    de(s, "cp_review_expected", N("Packoski"), {
      urgency: "warning",
      meta: { relatedArdDate: pe(s, 2), expectedType: "quarterly" }
    }),
    // Wednesday — sig change MDS + queries in flight
    de(a, "mds_ard", N("Stamper"), {
      urgency: "warning",
      meta: { assessmentId: "mds_stamper_01", pccAssessmentId: "4860312", description: "Significant Change", status: "In Progress", ardDate: a }
    }),
    de(a, "query_due", N("Schmalzriedt"), {
      meta: { queryId: "q_schmalz_01", itemCode: "I2900", status: "sent", linkedArdDate: pe(a, 5) }
    }),
    de(a, "query_due", N("Nugent"), {
      meta: { queryId: "q_nugent_01", itemCode: "J1550", status: "sent", linkedArdDate: pe(a, 6) }
    }),
    // Thursday — query due + cp review
    de(i, "query_due", N("Bruton"), {
      urgency: "warning",
      meta: { queryId: "q_bruton_01", itemCode: "I1100", status: "pending", linkedArdDate: pe(i, 2) }
    }),
    de(i, "cp_review_in_progress", N("Henstreet"), {
      meta: { startDate: pe(i, -1), targetCompletionDate: pe(i, 3), pccReviewId: "rev_henstreet_01", pccCarePlanId: "cp_henstreet_01" }
    }),
    // Friday — discharge, cp review, cert
    de(r, "discharge", N("Watkins"), {
      meta: { actionCode: "DD" }
    }),
    de(r, "cp_review_due", N("McCants"), {
      meta: { nextReviewDate: r, pccReviewId: null, pccCarePlanId: "cp_mccants_01" }
    }),
    de(r, "cert_due", N("Clappor"), {
      urgency: "warning",
      meta: { certId: "cert_clappor_01", type: "day_14_recert", status: "pending", bucket: "needs_to_send", sentAt: null }
    }),
    // Saturday — query-heavy day
    de(o, "query_due", N("Ashley"), {
      meta: { queryId: "q_ashley_01", itemCode: "I5100", status: "sent", linkedArdDate: pe(o, 4) }
    }),
    de(o, "query_due", N("Hoffie"), {
      meta: { queryId: "q_hoffie_01", itemCode: "I2900", status: "sent", linkedArdDate: pe(o, 3) }
    }),
    de(o, "query_due", N("Rogers"), {
      meta: { queryId: "q_rogers_01", itemCode: "J1550", status: "sent", linkedArdDate: pe(o, 5) }
    }),
    de(o, "query_due", N("Smith"), {
      meta: { queryId: "q_smith_01", itemCode: "O0100", status: "pending", linkedArdDate: pe(o, 6) }
    }),
    // Sunday — quiet, one cert
    de(c, "cert_due", N("Saffle"), {
      meta: { certId: "cert_saffle_01", type: "day_14_recert", status: "pending", bucket: "needs_to_send", sentAt: null }
    })
  ];
}
function oi() {
  const t = (s) => new Date(Date.now() - s * 864e5).toISOString().slice(0, 10), n = (s) => new Date(Date.now() - s * 36e5).toISOString();
  return {
    mdsCoding: {
      count: 4,
      patients: [
        { patientId: N("Stamper").patientId, patientExternalId: N("Stamper").patientExternalId, patientName: N("Stamper").patientName, status: "In Progress", description: "Significant Change", ardDate: t(2), sectionsCompleted: 12, sectionsTotal: 18, daysToCompleteBy: 12, pccAssessmentId: "4860312", assessmentId: "mds_stamper_01" },
        { patientId: N("Clasper").patientId, patientExternalId: N("Clasper").patientExternalId, patientName: N("Clasper").patientName, status: "In Progress", description: "Admission + 5-Day PPS", ardDate: t(5), sectionsCompleted: 16, sectionsTotal: 18, daysToCompleteBy: 9, pccAssessmentId: "4860311", assessmentId: "mds_clasper_01" },
        { patientId: N("Hagerich").patientId, patientExternalId: N("Hagerich").patientExternalId, patientName: N("Hagerich").patientName, status: "In Progress", description: "Quarterly", ardDate: t(12), sectionsCompleted: 15, sectionsTotal: 18, daysToCompleteBy: 2, pccAssessmentId: "4860305", assessmentId: "mds_hagerich_01" },
        { patientId: N("Saffle").patientId, patientExternalId: N("Saffle").patientExternalId, patientName: N("Saffle").patientName, status: "In Progress", description: "Annual + 5-Day PPS", ardDate: t(16), sectionsCompleted: 10, sectionsTotal: 18, daysToCompleteBy: -2, pccAssessmentId: "4860320", assessmentId: "mds_saffle_01" }
      ],
      completedRecently: {
        count: 3,
        windowDays: 7,
        patients: [
          { patientId: N("Coble").patientId, patientExternalId: N("Coble").patientExternalId, patientName: N("Coble").patientName, description: "Quarterly", ardDate: t(10), lockedAt: n(18), pccAssessmentId: "4860301", assessmentId: "mds_coble_done" },
          { patientId: N("Watkins").patientId, patientExternalId: N("Watkins").patientExternalId, patientName: N("Watkins").patientName, description: "Entry", ardDate: t(9), lockedAt: n(40), pccAssessmentId: "4860302", assessmentId: "mds_watkins_done" },
          { patientId: N("Nugent").patientId, patientExternalId: N("Nugent").patientExternalId, patientName: N("Nugent").patientName, description: "Annual", ardDate: t(13), lockedAt: n(96), pccAssessmentId: "4860303", assessmentId: "mds_nugent_done" }
        ]
      }
    },
    carePlansToOpen: {
      count: 2,
      patients: [
        { patientId: N("Clark").patientId, patientExternalId: N("Clark").patientExternalId, patientName: N("Clark").patientName, admitDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), hoursSinceAdmit: 8 },
        { patientId: N("Clasper").patientId, patientExternalId: N("Clasper").patientExternalId, patientName: N("Clasper").patientName, admitDate: new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10), hoursSinceAdmit: 52 }
      ],
      completedRecently: {
        count: 2,
        windowDays: 7,
        patients: [
          { patientId: N("Ashley").patientId, patientExternalId: N("Ashley").patientExternalId, patientName: N("Ashley").patientName, admitDate: t(5), carePlanOpenedAt: n(30), pccCarePlanId: "cp_ashley_01" },
          { patientId: N("Hoffie").patientId, patientExternalId: N("Hoffie").patientExternalId, patientName: N("Hoffie").patientName, admitDate: t(6), carePlanOpenedAt: n(62), pccCarePlanId: "cp_hoffie_01" }
        ]
      }
    },
    carePlansToReview: {
      count: 5,
      patients: [
        { patientId: N("Hagerich").patientId, patientExternalId: N("Hagerich").patientExternalId, patientName: N("Hagerich").patientName, expectedDate: new Date(Date.now() - 864e5).toISOString().slice(0, 10), state: "overdue", pccReviewId: null, pccCarePlanId: "cp_hagerich_01" },
        { patientId: N("Packoski").patientId, patientExternalId: N("Packoski").patientExternalId, patientName: N("Packoski").patientName, expectedDate: new Date(Date.now() + 864e5).toISOString().slice(0, 10), state: "expected", pccReviewId: null, pccCarePlanId: "cp_packoski_01" },
        { patientId: N("Henstreet").patientId, patientExternalId: N("Henstreet").patientExternalId, patientName: N("Henstreet").patientName, expectedDate: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10), state: "in_progress", pccReviewId: "rev_henstreet_01", pccCarePlanId: "cp_henstreet_01" },
        { patientId: N("McCants").patientId, patientExternalId: N("McCants").patientExternalId, patientName: N("McCants").patientName, expectedDate: new Date(Date.now() + 4 * 864e5).toISOString().slice(0, 10), state: "expected", pccReviewId: null, pccCarePlanId: "cp_mccants_01" },
        { patientId: N("Stamper").patientId, patientExternalId: N("Stamper").patientExternalId, patientName: N("Stamper").patientName, expectedDate: new Date(Date.now() + 5 * 864e5).toISOString().slice(0, 10), state: "expected", pccReviewId: null, pccCarePlanId: "cp_stamper_01" }
      ],
      completedRecently: {
        count: 4,
        windowDays: 7,
        patients: [
          { patientId: N("Smith").patientId, patientExternalId: N("Smith").patientExternalId, patientName: N("Smith").patientName, reviewCompletedAt: n(22), pccReviewId: "rev_smith_01", pccCarePlanId: "cp_smith_01" },
          { patientId: N("Bruton").patientId, patientExternalId: N("Bruton").patientExternalId, patientName: N("Bruton").patientName, reviewCompletedAt: n(54), pccReviewId: "rev_bruton_01", pccCarePlanId: "cp_bruton_01" },
          { patientId: N("Rogers").patientId, patientExternalId: N("Rogers").patientExternalId, patientName: N("Rogers").patientName, reviewCompletedAt: n(76), pccReviewId: "rev_rogers_01", pccCarePlanId: "cp_rogers_01" },
          { patientId: N("Schmalzriedt").patientId, patientExternalId: N("Schmalzriedt").patientExternalId, patientName: N("Schmalzriedt").patientName, reviewCompletedAt: n(120), pccReviewId: "rev_schmalz_01", pccCarePlanId: "cp_schmalz_01" }
        ]
      }
    },
    queriesOpen: {
      count: 8,
      pending: 3,
      sent: 5,
      completedRecently: {
        count: 4,
        windowDays: 7,
        patients: [
          { patientId: N("Nugent").patientId, patientExternalId: N("Nugent").patientExternalId, patientName: N("Nugent").patientName, queryId: "q_nugent_done_01", itemCode: "I2100", signedAt: n(28) },
          { patientId: N("Bruton").patientId, patientExternalId: N("Bruton").patientExternalId, patientName: N("Bruton").patientName, queryId: "q_bruton_done_01", itemCode: "I5100", signedAt: n(50) },
          { patientId: N("Smith").patientId, patientExternalId: N("Smith").patientExternalId, patientName: N("Smith").patientName, queryId: "q_smith_done_01", itemCode: "J1550", signedAt: n(78) },
          { patientId: N("Clappor").patientId, patientExternalId: N("Clappor").patientExternalId, patientName: N("Clappor").patientName, queryId: "q_clappor_done_01", itemCode: "I0020", signedAt: n(130) }
        ]
      }
    },
    certs: {
      count: 12,
      needsToSend: { count: 4, upcomingCount: 2, overdueCount: 1 },
      awaitingSignature: { count: 8, overdueCount: 2 },
      overdueList: [
        { certId: "cert_ashley_01", patientId: N("Ashley").patientId, patientExternalId: N("Ashley").patientExternalId, patientName: N("Ashley").patientName, type: "day_14_recert", bucket: "awaiting_signature", dueDate: new Date(Date.now() - 4 * 864e5).toISOString().slice(0, 10), daysOverdue: 4 },
        { certId: "cert_hoffie_01", patientId: N("Hoffie").patientId, patientExternalId: N("Hoffie").patientExternalId, patientName: N("Hoffie").patientName, type: "initial", bucket: "awaiting_signature", dueDate: new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10), daysOverdue: 2 },
        { certId: "cert_rogers_01", patientId: N("Rogers").patientId, patientExternalId: N("Rogers").patientExternalId, patientName: N("Rogers").patientName, type: "day_14_recert", bucket: "needs_to_send", dueDate: new Date(Date.now() - 1 * 864e5).toISOString().slice(0, 10), daysOverdue: 1 }
      ],
      completedRecently: {
        count: 5,
        windowDays: 7,
        patients: [
          { certId: "cert_stamper_done_01", patientId: N("Stamper").patientId, patientExternalId: N("Stamper").patientExternalId, patientName: N("Stamper").patientName, type: "day_14_recert", signedAt: n(12) },
          { certId: "cert_mccants_done_01", patientId: N("McCants").patientId, patientExternalId: N("McCants").patientExternalId, patientName: N("McCants").patientName, type: "initial", signedAt: n(36) },
          { certId: "cert_watkins_done_01", patientId: N("Watkins").patientId, patientExternalId: N("Watkins").patientExternalId, patientName: N("Watkins").patientName, type: "day_30_recert", signedAt: n(60) },
          { certId: "cert_clark_done_01", patientId: N("Clark").patientId, patientExternalId: N("Clark").patientExternalId, patientName: N("Clark").patientName, type: "initial", signedAt: n(96) },
          { certId: "cert_packoski_done_01", patientId: N("Packoski").patientId, patientExternalId: N("Packoski").patientExternalId, patientName: N("Packoski").patientName, type: "day_14_recert", signedAt: n(140) }
        ]
      }
    },
    interviewsOwed: {
      count: 6,
      distinctPatientCount: 5,
      byType: { bims: 3, phq: 2, gg: 5, pain: 0 },
      patients: [
        { patientId: N("Stamper").patientId, patientExternalId: N("Stamper").patientExternalId, patientName: N("Stamper").patientName, dueType: "gg", dueDate: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10), status: "in_progress", mdsDescription: "Significant Change", pccAssessmentId: "4860312", assessmentId: "mds_stamper_01", assessmentIds: ["mds_stamper_01"] },
        { patientId: N("Clasper").patientId, patientExternalId: N("Clasper").patientExternalId, patientName: N("Clasper").patientName, dueType: "gg", dueDate: new Date(Date.now() + 1 * 864e5).toISOString().slice(0, 10), status: "in_progress", mdsDescription: "Admission + 5-Day PPS", pccAssessmentId: "4860311", assessmentId: "mds_clasper_01", assessmentIds: ["mds_clasper_01", "mds_clasper_02"] },
        { patientId: N("Saffle").patientId, patientExternalId: N("Saffle").patientExternalId, patientName: N("Saffle").patientName, dueType: "gg", dueDate: new Date(Date.now() - 1 * 864e5).toISOString().slice(0, 10), status: "not_open", mdsDescription: "Annual + 5-Day PPS", pccAssessmentId: "4860320", assessmentId: "mds_saffle_01", assessmentIds: ["mds_saffle_01"] },
        { patientId: N("Hagerich").patientId, patientExternalId: N("Hagerich").patientExternalId, patientName: N("Hagerich").patientName, dueType: "bims", dueDate: new Date(Date.now() + 3 * 864e5).toISOString().slice(0, 10), status: "not_open", mdsDescription: "Quarterly", pccAssessmentId: "4860305", assessmentId: "mds_hagerich_01", assessmentIds: ["mds_hagerich_01"] },
        { patientId: N("Nugent").patientId, patientExternalId: N("Nugent").patientExternalId, patientName: N("Nugent").patientName, dueType: "phq", dueDate: new Date(Date.now() + 4 * 864e5).toISOString().slice(0, 10), status: "not_open", mdsDescription: "5-Day PPS", pccAssessmentId: "4860318", assessmentId: "mds_nugent_01", assessmentIds: ["mds_nugent_01"] }
      ],
      completedRecently: {
        count: 7,
        windowDays: 7,
        patients: [
          { patientId: N("Coble").patientId, patientExternalId: N("Coble").patientExternalId, patientName: N("Coble").patientName, dueType: "gg", mdsDescription: "Quarterly", completedAt: n(18), pccAssessmentId: "4860301", assessmentId: "mds_coble_done" },
          { patientId: N("Coble").patientId, patientExternalId: N("Coble").patientExternalId, patientName: N("Coble").patientName, dueType: "bims", mdsDescription: "Quarterly", completedAt: n(18), pccAssessmentId: "4860301", assessmentId: "mds_coble_done" },
          { patientId: N("Nugent").patientId, patientExternalId: N("Nugent").patientExternalId, patientName: N("Nugent").patientName, dueType: "gg", mdsDescription: "Annual", completedAt: n(96), pccAssessmentId: "4860303", assessmentId: "mds_nugent_done" },
          { patientId: N("Nugent").patientId, patientExternalId: N("Nugent").patientExternalId, patientName: N("Nugent").patientName, dueType: "phq", mdsDescription: "Annual", completedAt: n(96), pccAssessmentId: "4860303", assessmentId: "mds_nugent_done" },
          { patientId: N("Watkins").patientId, patientExternalId: N("Watkins").patientExternalId, patientName: N("Watkins").patientName, dueType: "gg", mdsDescription: "Entry", completedAt: n(40), pccAssessmentId: "4860302", assessmentId: "mds_watkins_done" },
          { patientId: N("Ashley").patientId, patientExternalId: N("Ashley").patientExternalId, patientName: N("Ashley").patientName, dueType: "bims", mdsDescription: "5-Day PPS", completedAt: n(54), pccAssessmentId: "4860304", assessmentId: "mds_ashley_done" },
          { patientId: N("Hoffie").patientId, patientExternalId: N("Hoffie").patientExternalId, patientName: N("Hoffie").patientName, dueType: "gg", mdsDescription: "Quarterly", completedAt: n(140), pccAssessmentId: "4860306", assessmentId: "mds_hoffie_done" }
        ]
      }
    },
    skilledMCR: {
      count: 4,
      patients: [
        N("Clark"),
        N("Stamper"),
        N("Saffle"),
        N("Clappor")
      ].map((s) => ({ patientId: s.patientId, patientExternalId: s.patientExternalId, patientName: s.patientName }))
    },
    skilledManagedCare: {
      count: 3,
      patients: [
        N("Packoski"),
        N("Henstreet"),
        N("Bruton")
      ].map((s) => ({ patientId: s.patientId, patientExternalId: s.patientExternalId, patientName: s.patientName }))
    }
  };
}
const aa = "2026-04-24", ia = "America/Chicago", ci = [
  { id: "uti", label: "UTI" },
  { id: "catheter", label: "Indwelling Catheter" },
  { id: "falls_major_injury", label: "Falls with Major Injury" },
  { id: "antipsychotic_long", label: "Antipsychotic (long-stay)" },
  { id: "weight_loss", label: "Weight Loss" },
  { id: "pressure_ulcer_long", label: "Pressure Ulcer (long-stay)" },
  { id: "phq9_depression", label: "Depression (PHQ-9)" },
  { id: "adl_decline", label: "ADL Decline (GG)" },
  { id: "physical_restraints", label: "Physical Restraints" },
  { id: "low_risk_incontinence", label: "Low-Risk Incontinence" }
], Bn = {
  uti: { triggering: 3, excluded: 1, applicable: 82 },
  catheter: { triggering: 2, excluded: 0, applicable: 82 },
  falls_major_injury: { triggering: 1, excluded: 0, applicable: 82 },
  antipsychotic_long: { triggering: 4, excluded: 2, applicable: 61 },
  weight_loss: { triggering: 2, excluded: 0, applicable: 82 },
  pressure_ulcer_long: { triggering: 1, excluded: 0, applicable: 61 },
  phq9_depression: { triggering: 3, excluded: 0, applicable: 58 },
  adl_decline: { triggering: 5, excluded: 1, applicable: 74 },
  physical_restraints: { triggering: 0, excluded: 0, applicable: 82 },
  low_risk_incontinence: { triggering: 1, excluded: 0, applicable: 44 }
};
function Ve(t, n, s, a = "OBRA_QUARTERLY", i = "OBRA_ANNUAL") {
  const r = [];
  for (const [o, [c, d]] of Object.entries(t))
    r.push({
      mdsItem: `${o}5`,
      value: String(c).padStart(2, "0"),
      note: `Prior ${a.replace(/_/g, " ").toLowerCase()}`,
      assessmentArdDate: n,
      assessmentType: a
    }), r.push({
      mdsItem: `${o}1`,
      value: String(d).padStart(2, "0"),
      note: `Target ${i.replace(/_/g, " ").toLowerCase()}`,
      assessmentArdDate: s,
      assessmentType: i
    });
  return r;
}
const li = [
  // ── ADL Decline (GG) — primary demo story ────────────────────────
  {
    patientId: "demo-p-1001",
    externalPatientId: "2657226",
    firstName: "Jane",
    lastName: "Doe",
    target: { type: "OBRA_ANNUAL", ardDate: "2026-04-29" },
    measures: [
      {
        id: "adl_decline",
        label: "ADL Decline (GG)",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [
            { label: "Re-assess GG items with nursing + therapy", detail: "Any shift average improvement of ≥1 point clears the trigger on next OBRA." },
            { label: "Review PT/OT decline notes", detail: "Confirm whether the drop is temporary (infection, missed shift) or a new functional baseline." },
            { label: "Re-score on target ARD", effectiveDate: "2026-04-29" }
          ]
        },
        evidence: Ve({
          GG0170D: [4, 2],
          // Sit to Stand
          GG0170F: [4, 2],
          // Toilet Transfer
          GG0170I: [3, 2],
          // Walk 10 Feet
          GG0130A: [5, 4]
          // Eating
        }, "2026-01-22", "2026-04-22")
      },
      {
        id: "phq9_depression",
        label: "Depression (PHQ-9)",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [
            { label: "Rescreen D0200 with resident", detail: "Trigger clears when total PHQ-9 score < 10 on next qualifying assessment." }
          ]
        },
        evidence: [
          { mdsItem: "D0200A1", value: "2", note: "Target PHQ-9 item A — little interest" },
          { mdsItem: "D0200B1", value: "3", note: "Target PHQ-9 item B — feeling down" },
          { mdsItem: "D0300", value: "14", note: "Target PHQ-9 total (triggers at ≥10)" }
        ]
      }
    ]
  },
  {
    patientId: "demo-p-1002",
    externalPatientId: "2657227",
    firstName: "Marcus",
    lastName: "Reyes",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-05-02" },
    measures: [
      {
        id: "adl_decline",
        label: "ADL Decline (GG)",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [
            { label: "Confirm GG accuracy with therapy", detail: 'PT last noted "ambulation with min assist x 50 ft" — verify against MDS coding.' }
          ]
        },
        evidence: Ve({
          GG0170J: [4, 2],
          // Walk 50 Feet
          GG0170K: [4, 2]
          // Walk 150 Feet
        }, "2026-02-01", "2026-04-30")
      }
    ]
  },
  {
    patientId: "demo-p-1003",
    externalPatientId: "2657228",
    firstName: "Eleanor",
    lastName: "Novak",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-04-21" },
    measures: [
      {
        id: "adl_decline",
        label: "ADL Decline (GG)",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [
            { label: "Schedule new ARD — target has passed", detail: "ARD was 4/21; a new qualifying assessment is required to clear." }
          ]
        },
        evidence: Ve({
          GG0170D: [3, 1],
          GG0170B: [3, 1]
        }, "2026-01-18", "2026-04-18")
      },
      {
        id: "weight_loss",
        label: "Weight Loss",
        triggers: !0,
        clearGuidance: {
          actionType: "time",
          clearDate: "2026-07-18",
          actions: [
            { label: "Fortified diet + weekly weights", detail: "Trigger rolls off the 180-day scan window on 7/18." }
          ]
        },
        evidence: [
          { mdsItem: "K0300", value: "2", note: "Target weight-loss flag (>10% in 180d)" }
        ]
      }
    ]
  },
  {
    patientId: "demo-p-1004",
    externalPatientId: "2657229",
    firstName: "Harold",
    lastName: "Park",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-05-05" },
    measures: [
      {
        id: "adl_decline",
        label: "ADL Decline (GG)",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [
            { label: "Review GG documentation for Toilet Transfer", detail: "Nursing notes reference setup-only — verify shift-by-shift coding." }
          ]
        },
        evidence: Ve({
          GG0170F: [5, 3]
        }, "2026-02-05", "2026-05-03")
      }
    ]
  },
  {
    patientId: "demo-p-1005",
    externalPatientId: "2657230",
    firstName: "Priya",
    lastName: "Shankar",
    target: { type: "OBRA_ANNUAL", ardDate: "2026-05-10" },
    measures: [
      {
        id: "adl_decline",
        label: "ADL Decline (GG)",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [
            { label: "Code clean on target ARD", detail: "All current shift averages back at baseline — likely clears without further action." }
          ]
        },
        evidence: Ve({
          GG0170D: [4, 3]
        }, "2026-01-28", "2026-04-23")
      }
    ]
  },
  // ── UTI ─────────────────────────────────────────────────────────
  {
    patientId: "demo-p-2001",
    externalPatientId: "2657231",
    firstName: "Lillian",
    lastName: "Cho",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-05-03" },
    measures: [
      {
        id: "uti",
        label: "UTI",
        triggers: !0,
        clearGuidance: {
          actionType: "time",
          clearDate: "2026-05-15",
          actions: [
            { label: "Rolls off on 5/15", detail: "UTI I2300 coded 2/5; rolls off the 90-day scan window automatically." }
          ]
        },
        evidence: [
          { mdsItem: "I2300", value: "1", note: "Target UTI coded on 2/5" }
        ]
      }
    ]
  },
  {
    patientId: "demo-p-2002",
    externalPatientId: "2657232",
    firstName: "Robert",
    lastName: "Aldridge",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-05-12" },
    measures: [
      {
        id: "uti",
        label: "UTI",
        triggers: !0,
        clearGuidance: {
          actionType: "time",
          clearDate: "2026-06-02",
          actions: [{ label: "Rolls off on 6/2", detail: "Active UTI — 28 days to scan-window exit." }]
        },
        evidence: [
          { mdsItem: "I2300", value: "1", note: "Target UTI coded on 3/4" }
        ]
      }
    ]
  },
  {
    patientId: "demo-p-2003",
    externalPatientId: "2657233",
    firstName: "Diane",
    lastName: "Forester",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-04-30" },
    measures: [
      {
        id: "uti",
        label: "UTI",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [{ label: "Code clean on target ARD", detail: "UTI resolved — code I2300 = 0 on next qualifying assessment." }]
        },
        evidence: [
          { mdsItem: "I2300", value: "1", note: "Target UTI coded (still lookback)" }
        ]
      }
    ]
  },
  // ── Catheter ─────────────────────────────────────────────────────
  {
    patientId: "demo-p-3001",
    externalPatientId: "2657234",
    firstName: "Samuel",
    lastName: "Okafor",
    target: { type: "OBRA_ANNUAL", ardDate: "2026-05-01" },
    measures: [
      {
        id: "catheter",
        label: "Indwelling Catheter",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [{ label: "Confirm medical necessity", detail: "Attach urologist order documenting continued indication." }]
        },
        evidence: [
          { mdsItem: "H0100A", value: "1", note: "Target indwelling catheter present" }
        ]
      }
    ]
  },
  // ── Falls w/ Major Injury ───────────────────────────────────────
  {
    patientId: "demo-p-4001",
    externalPatientId: "2657235",
    firstName: "Martha",
    lastName: "Blanchard",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-05-08" },
    measures: [
      {
        id: "falls_major_injury",
        label: "Falls with Major Injury",
        triggers: !0,
        clearGuidance: {
          actionType: "time",
          clearDate: "2026-08-20",
          actions: [{ label: "Roll-off only", detail: "Falls scan window is 180d; no coding action clears it sooner." }]
        },
        evidence: [
          { mdsItem: "J1900C", value: "1", note: "Target major-injury fall coded 2/20" }
        ]
      }
    ]
  },
  // ── Antipsychotic (long) ────────────────────────────────────────
  ...["5001", "5002", "5003", "5004"].map((t, n) => ({
    patientId: `demo-p-${t}`,
    externalPatientId: `26572${40 + n}`,
    firstName: ["Gerald", "Alma", "Vance", "Ruth"][n],
    lastName: ["Simmons", "Vega", "Pritchard", "McCarthy"][n],
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-05-04" },
    measures: [
      {
        id: "antipsychotic_long",
        label: "Antipsychotic (long-stay)",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [
            { label: "GDR attempt + review exclusion codes", detail: "Document GDR outcome; confirm I5950 / I5400 diagnoses." }
          ]
        },
        evidence: [
          { mdsItem: "N0415A1", value: "1", note: "Target antipsychotic in last 7 days" }
        ]
      }
    ]
  })),
  // ── Weight Loss second patient ──────────────────────────────────
  {
    patientId: "demo-p-6001",
    externalPatientId: "2657250",
    firstName: "Henry",
    lastName: "Grisham",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-05-10" },
    measures: [
      {
        id: "weight_loss",
        label: "Weight Loss",
        triggers: !0,
        clearGuidance: {
          actionType: "time",
          clearDate: "2026-06-22",
          actions: [{ label: "Dietitian reassessment", detail: "Current weight trend flat — rolls off in 59d." }]
        },
        evidence: [
          { mdsItem: "K0300", value: "2", note: "Target weight-loss flag" }
        ]
      }
    ]
  },
  // ── PHQ-9 (two additional beyond Doe) ───────────────────────────
  {
    patientId: "demo-p-7001",
    externalPatientId: "2657251",
    firstName: "Isobel",
    lastName: "Crane",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-05-07" },
    measures: [
      {
        id: "phq9_depression",
        label: "Depression (PHQ-9)",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [{ label: "Rescreen D0200 + review med regimen" }]
        },
        evidence: [
          { mdsItem: "D0300", value: "12", note: "Target PHQ-9 total (triggers at ≥10)" }
        ]
      }
    ]
  },
  {
    patientId: "demo-p-7002",
    externalPatientId: "2657252",
    firstName: "Clifford",
    lastName: "Bateson",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-05-13" },
    measures: [
      {
        id: "phq9_depression",
        label: "Depression (PHQ-9)",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [{ label: "Document therapy referral" }]
        },
        evidence: [
          { mdsItem: "D0300", value: "11", note: "Target PHQ-9 total" }
        ]
      }
    ]
  },
  // ── Pressure Ulcer (long) ───────────────────────────────────────
  {
    patientId: "demo-p-8001",
    externalPatientId: "2657253",
    firstName: "Margaret",
    lastName: "Hollis",
    target: { type: "OBRA_ANNUAL", ardDate: "2026-05-06" },
    measures: [
      {
        id: "pressure_ulcer_long",
        label: "Pressure Ulcer (long-stay)",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [{ label: "Heal to stage 0 or document POA", detail: "Confirm present-on-admission status in nursing admission note." }]
        },
        evidence: [
          { mdsItem: "M0300B1", value: "2", note: "Target Stage 2 pressure ulcer" }
        ]
      }
    ]
  },
  // ── Low-risk incontinence ────────────────────────────────────────
  {
    patientId: "demo-p-9001",
    externalPatientId: "2657254",
    firstName: "Benjamin",
    lastName: "Carver",
    target: { type: "OBRA_QUARTERLY", ardDate: "2026-05-11" },
    measures: [
      {
        id: "low_risk_incontinence",
        label: "Low-Risk Incontinence",
        triggers: !0,
        clearGuidance: {
          clearsOnNextObra: !0,
          actionType: "next_obra",
          actions: [{ label: "Toileting program — review H0200A status" }]
        },
        evidence: [
          { mdsItem: "H0300", value: "2", note: "Target bladder continence — always incontinent" }
        ]
      }
    ]
  }
], di = {
  facilityDate: aa,
  timezone: ia,
  measuresEvaluated: ci,
  summary: {
    byMeasure: Bn,
    totalTriggering: Object.values(Bn).reduce((t, n) => t + n.triggering, 0)
  },
  patients: li
};
function rt(t, n, s) {
  return {
    id: "gg_decline_canary",
    category: "gg",
    label: n,
    qmId: "adl_decline",
    urgency: s.severity === "severe" ? "high" : s.severity === "moderate" ? "medium" : "low",
    latestSignalDate: s.date,
    suggestedAction: "Review GG decline and consider re-education / therapy referral before next ARD.",
    signals: s.items.map((a, i) => ({
      source: "gg_decline_service",
      refId: `${t}-gg-${i}`,
      date: s.date,
      text: `${a.name}: baseline ${a.baseline} → worst ${a.worstShiftAverage.toFixed(1)} (${a.severity})`,
      detail: a
    }))
  };
}
const ui = {
  facilityDate: aa,
  signalCounts: {
    gg_decline_canary: { actionable: 4, suppressed: 1 },
    weight_decline_canary: { actionable: 2, suppressed: 0 },
    ua_canary: { actionable: 2, suppressed: 1 },
    foley_order: { actionable: 1, suppressed: 0 },
    antipsychotic_order: { actionable: 3, suppressed: 0 }
  },
  patients: [
    // ── Jane Doe: GG decline canary (primary clickthrough) ─────────
    {
      patientId: "demo-p-1001",
      externalPatientId: "2657226",
      firstName: "Jane",
      lastName: "Doe",
      events: [],
      canaries: [
        rt("demo-p-1001", "GG decline (pre-ARD)", {
          date: "2026-04-23",
          severity: "moderate",
          items: [
            { name: "Sit to Stand", mdsKey: "GG0170D", baseline: 4, worstShiftAverage: 2.3, severity: "moderate" },
            { name: "Toilet Transfer", mdsKey: "GG0170F", baseline: 4, worstShiftAverage: 2, severity: "moderate" },
            { name: "Walk 10 Feet", mdsKey: "GG0170I", baseline: 3, worstShiftAverage: 2, severity: "mild" },
            { name: "Eating", mdsKey: "GG0130A", baseline: 5, worstShiftAverage: 4, severity: "mild" }
          ]
        })
      ]
    },
    // ── Marcus Reyes: severe GG decline on walk items ──────────────
    {
      patientId: "demo-p-1002",
      externalPatientId: "2657227",
      firstName: "Marcus",
      lastName: "Reyes",
      events: [],
      canaries: [
        rt("demo-p-1002", "GG decline — ambulation", {
          date: "2026-04-22",
          severity: "severe",
          items: [
            { name: "Walk 50 Feet", mdsKey: "GG0170J", baseline: 4, worstShiftAverage: 1.7, severity: "severe" },
            { name: "Walk 150 Feet", mdsKey: "GG0170K", baseline: 4, worstShiftAverage: 1.7, severity: "severe" }
          ]
        })
      ]
    },
    // ── Eleanor Novak: mild GG + weight decline ────────────────────
    {
      patientId: "demo-p-1003",
      externalPatientId: "2657228",
      firstName: "Eleanor",
      lastName: "Novak",
      events: [
        {
          id: "weight_decline_canary",
          category: "vitals",
          label: "Weight decline",
          qmId: "weight_loss",
          urgency: "medium",
          latestSignalDate: "2026-04-22",
          suggestedAction: "Fortified diet + weekly weights",
          signals: [
            { source: "vitals", date: "2026-04-22", text: "Weight 112.4 lb today vs 119.0 lb on 2026-03-11", detail: { observedPct: 5.5 } }
          ]
        }
      ],
      canaries: [
        rt("demo-p-1003", "GG decline — transfers", {
          date: "2026-04-21",
          severity: "severe",
          items: [
            { name: "Sit to Stand", mdsKey: "GG0170D", baseline: 3, worstShiftAverage: 1.3, severity: "severe" },
            { name: "Sit to Lying", mdsKey: "GG0170B", baseline: 3, worstShiftAverage: 1, severity: "severe" }
          ]
        })
      ]
    },
    // ── Priya Shankar: GG with only one item ───────────────────────
    {
      patientId: "demo-p-1005",
      externalPatientId: "2657230",
      firstName: "Priya",
      lastName: "Shankar",
      events: [],
      canaries: [
        rt("demo-p-1005", "GG decline — single item", {
          date: "2026-04-20",
          severity: "mild",
          items: [
            { name: "Sit to Stand", mdsKey: "GG0170D", baseline: 4, worstShiftAverage: 3.3, severity: "mild" }
          ]
        })
      ]
    },
    // ── Non-GG alerts to round out the dashboard ───────────────────
    {
      patientId: "demo-p-2002",
      externalPatientId: "2657232",
      firstName: "Robert",
      lastName: "Aldridge",
      events: [
        {
          id: "ua_canary",
          category: "uti",
          label: "UA ordered — verify result",
          qmId: "uti",
          urgency: "medium",
          latestSignalDate: "2026-04-23",
          suggestedAction: "Confirm UA result before coding I2300.",
          signals: [
            { source: "order", refId: "ord-ua-1", date: "2026-04-23", text: "Order: UA with C&S — pending" }
          ]
        }
      ],
      canaries: []
    },
    {
      patientId: "demo-p-5001",
      externalPatientId: "2657240",
      firstName: "Gerald",
      lastName: "Simmons",
      events: [
        {
          id: "antipsychotic_order",
          category: "antipsychotic",
          label: "Antipsychotic started",
          qmId: "antipsychotic_long",
          urgency: "low",
          latestSignalDate: "2026-04-20",
          suggestedAction: "Confirm GDR + exclusion diagnosis",
          signals: [
            { source: "order", refId: "ord-ap-1", date: "2026-04-20", text: "Order: Quetiapine 25mg PO QHS — initiated" }
          ]
        }
      ],
      canaries: []
    },
    {
      patientId: "demo-p-3001",
      externalPatientId: "2657234",
      firstName: "Samuel",
      lastName: "Okafor",
      events: [
        {
          id: "foley_order",
          category: "catheter",
          label: "Foley placement order",
          qmId: "catheter",
          urgency: "low",
          latestSignalDate: "2026-04-22",
          suggestedAction: "Ensure urologist indication is documented",
          signals: [
            { source: "order", refId: "ord-foley-1", date: "2026-04-22", text: "Order: 16Fr Foley for urinary retention — continue until urology appt" }
          ]
        }
      ],
      canaries: []
    }
  ]
};
function ot(t, n, { startDate: s = "2026-03-25", endDate: a = "2026-04-23" } = {}) {
  const i = [];
  let r = 1;
  const o = /* @__PURE__ */ new Date(s + "T12:00:00Z"), c = /* @__PURE__ */ new Date(a + "T12:00:00Z"), d = Math.round((c - o) / (1440 * 60 * 1e3));
  for (const l of n)
    for (let p = 0; p <= d; p += 1) {
      const u = new Date(o);
      u.setUTCDate(o.getUTCDate() + p);
      const m = u.toISOString().slice(0, 10), h = p / Math.max(1, d), _ = l.worstShiftAverage;
      for (const g of [0, 1, 2]) {
        const b = Math.max(0, h - 0.1 * (g === 0 ? 0 : g === 1 ? 0.4 : 0.8)), y = Math.round(l.baseline + (_ - l.baseline) * b), I = Math.max(1, Math.min(6, y)), D = String(I).padStart(2, "0");
        i.push({
          id: `${t}-${l.mdsKey}-${m}-${g}-${r++}`,
          patientId: t,
          mdsQuestionKey: l.mdsKey,
          interventionName: l.name,
          shiftIndex: g,
          recordedDate: m,
          observationDate: m,
          value: D,
          loggedValue: D,
          aideName: ["J. Alvarez, CNA", "K. Dumont, CNA", "M. Okafor, CNA"][g]
        });
      }
    }
  return i;
}
const pi = {
  "demo-p-1001": {
    decline: {
      locationName: "Unit 3 — 308-B",
      mdsArdDate: "2026-01-22",
      overallSeverity: "moderate",
      baselines: [
        { mdsKey: "GG0170D", name: "Sit to Stand", value: 4, rawValue: "04" },
        { mdsKey: "GG0170F", name: "Toilet Transfer", value: 4, rawValue: "04" },
        { mdsKey: "GG0170I", name: "Walk 10 Feet", value: 3, rawValue: "03" },
        { mdsKey: "GG0130A", name: "Eating", value: 5, rawValue: "05" },
        { mdsKey: "GG0170B", name: "Sit to Lying", value: 4, rawValue: "04" }
      ],
      declines: [
        { mdsKey: "GG0170D", name: "Sit to Stand", baseline: 4, worstShiftAverage: 2.3, declineMagnitude: 1.7, severity: "moderate" },
        { mdsKey: "GG0170F", name: "Toilet Transfer", baseline: 4, worstShiftAverage: 2, declineMagnitude: 2, severity: "moderate" },
        { mdsKey: "GG0170I", name: "Walk 10 Feet", baseline: 3, worstShiftAverage: 2, declineMagnitude: 1, severity: "mild" },
        { mdsKey: "GG0130A", name: "Eating", baseline: 5, worstShiftAverage: 4, declineMagnitude: 1, severity: "mild" }
      ]
    },
    scores: ot("demo-p-1001", [
      { mdsKey: "GG0170D", name: "Sit to Stand", baseline: 4, worstShiftAverage: 2.3 },
      { mdsKey: "GG0170F", name: "Toilet Transfer", baseline: 4, worstShiftAverage: 2 },
      { mdsKey: "GG0170I", name: "Walk 10 Feet", baseline: 3, worstShiftAverage: 2 },
      { mdsKey: "GG0130A", name: "Eating", baseline: 5, worstShiftAverage: 4 },
      { mdsKey: "GG0170B", name: "Sit to Lying", baseline: 4, worstShiftAverage: 3.7 }
    ]),
    snooze: null
  },
  "demo-p-1002": {
    decline: {
      locationName: "Unit 2 — 214-A",
      mdsArdDate: "2026-02-01",
      overallSeverity: "severe",
      baselines: [
        { mdsKey: "GG0170J", name: "Walk 50 Feet", value: 4, rawValue: "04" },
        { mdsKey: "GG0170K", name: "Walk 150 Feet", value: 4, rawValue: "04" }
      ],
      declines: [
        { mdsKey: "GG0170J", name: "Walk 50 Feet", baseline: 4, worstShiftAverage: 1.7, declineMagnitude: 2.3, severity: "severe" },
        { mdsKey: "GG0170K", name: "Walk 150 Feet", baseline: 4, worstShiftAverage: 1.7, declineMagnitude: 2.3, severity: "severe" }
      ]
    },
    scores: ot("demo-p-1002", [
      { mdsKey: "GG0170J", name: "Walk 50 Feet", baseline: 4, worstShiftAverage: 1.7 },
      { mdsKey: "GG0170K", name: "Walk 150 Feet", baseline: 4, worstShiftAverage: 1.7 }
    ]),
    snooze: null
  },
  "demo-p-1003": {
    decline: {
      locationName: "Unit 3 — 312-A",
      mdsArdDate: "2026-01-18",
      overallSeverity: "severe",
      baselines: [
        { mdsKey: "GG0170D", name: "Sit to Stand", value: 3, rawValue: "03" },
        { mdsKey: "GG0170B", name: "Sit to Lying", value: 3, rawValue: "03" }
      ],
      declines: [
        { mdsKey: "GG0170D", name: "Sit to Stand", baseline: 3, worstShiftAverage: 1.3, declineMagnitude: 1.7, severity: "severe" },
        { mdsKey: "GG0170B", name: "Sit to Lying", baseline: 3, worstShiftAverage: 1, declineMagnitude: 2, severity: "severe" }
      ]
    },
    scores: ot("demo-p-1003", [
      { mdsKey: "GG0170D", name: "Sit to Stand", baseline: 3, worstShiftAverage: 1.3 },
      { mdsKey: "GG0170B", name: "Sit to Lying", baseline: 3, worstShiftAverage: 1 }
    ]),
    snooze: null
  },
  "demo-p-1005": {
    decline: {
      locationName: "Unit 1 — 104",
      mdsArdDate: "2026-01-28",
      overallSeverity: "mild",
      baselines: [
        { mdsKey: "GG0170D", name: "Sit to Stand", value: 4, rawValue: "04" }
      ],
      declines: [
        { mdsKey: "GG0170D", name: "Sit to Stand", baseline: 4, worstShiftAverage: 3.3, declineMagnitude: 0.7, severity: "mild" }
      ]
    },
    scores: ot("demo-p-1005", [
      { mdsKey: "GG0170D", name: "Sit to Stand", baseline: 4, worstShiftAverage: 3.3 }
    ]),
    snooze: null
  }
}, mi = ["2026-04-24", "2026-04-23", "2026-04-22", "2026-04-21", "2026-04-20", "2026-04-19", "2026-04-18"];
function ie(t) {
  return {
    id: t.id,
    patientId: t.patientId,
    patientName: t.patientName,
    room: t.room,
    severity: t.severity,
    category: t.category,
    subcategory: t.subcategory,
    finding: t.finding,
    narrative: t.narrative,
    timestamp: t.timestamp
  };
}
const ra = {
  "2026-04-24": [
    ie({ id: "f-24-1", patientId: "demo-p-1003", patientName: "Novak, Eleanor", room: "312-A", severity: "critical", category: "Fall", subcategory: "Unwitnessed fall", finding: "Unwitnessed floor-find at 0412", narrative: "Resident found on floor beside bed; no LOC reported. Head-to-toe negative for major injury. Vitals stable. Neuro checks ×24h ordered.", timestamp: "2026-04-24T04:12:00Z" }),
    ie({ id: "f-24-2", patientId: "demo-p-1001", patientName: "Doe, Jane", room: "308-B", severity: "high", category: "GG decline", subcategory: "Transfers", finding: "Toilet Transfer: 4 → 2 avg on day shift", narrative: "Three consecutive shifts charting max-assist for toileting; PT to reassess.", timestamp: "2026-04-24T07:45:00Z" }),
    ie({ id: "f-24-3", patientId: "demo-p-2001", patientName: "Cho, Lillian", room: "205", severity: "high", category: "Infection", subcategory: "UTI — new", finding: "Positive UA; culture pending", narrative: "Cloudy, foul-smelling urine. Leuk est large, nitrite positive. C&S sent. MD notified — awaiting order.", timestamp: "2026-04-24T02:30:00Z" }),
    ie({ id: "f-24-4", patientId: "demo-p-5001", patientName: "Simmons, Gerald", room: "216", severity: "medium", category: "Behavior", subcategory: "Verbal agitation", finding: "Two episodes of loud verbal agitation overnight", narrative: "Redirected with 1:1 reassurance. No physical aggression. Care plan updated.", timestamp: "2026-04-24T01:15:00Z" }),
    ie({ id: "f-24-5", patientId: "demo-p-1002", patientName: "Reyes, Marcus", room: "214-A", severity: "medium", category: "Pain", subcategory: "New onset", finding: "Reports 6/10 hip pain with ambulation", narrative: "No acute signs on exam. PRN acetaminophen given with effect. PT informed.", timestamp: "2026-04-24T06:50:00Z" }),
    ie({ id: "f-24-6", patientId: "demo-p-8001", patientName: "Hollis, Margaret", room: "119", severity: "medium", category: "Skin", subcategory: "Pressure ulcer", finding: "Stage 2 sacral PU — unchanged", narrative: "Wound re-measured; base clean, edges defined, no tunneling. Continue current orders.", timestamp: "2026-04-24T05:20:00Z" }),
    ie({ id: "f-24-7", patientId: "demo-p-7001", patientName: "Crane, Isobel", room: "222", severity: "low", category: "Mood", subcategory: "Tearful episode", finding: "Tearful during AM care", narrative: "Verbalized grief around recent family news. Social services notified.", timestamp: "2026-04-24T08:10:00Z" }),
    ie({ id: "f-24-8", patientId: "demo-p-9001", patientName: "Carver, Benjamin", room: "110", severity: "low", category: "Continence", subcategory: "New incontinence", finding: "Two incontinence episodes on night shift", narrative: "Toileting schedule adjusted to Q2h. No s/s UTI at present.", timestamp: "2026-04-24T03:40:00Z" })
  ],
  "2026-04-23": [
    ie({ id: "f-23-1", patientId: "demo-p-4001", patientName: "Blanchard, Martha", room: "228", severity: "critical", category: "Fall", subcategory: "Witnessed fall", finding: "Witnessed fall — no injury", narrative: "Resident slid off chair while transferring; caught by CNA, no impact. Reinforced call-light use.", timestamp: "2026-04-23T14:22:00Z" }),
    ie({ id: "f-23-2", patientId: "demo-p-2002", patientName: "Aldridge, Robert", room: "207", severity: "high", category: "Infection", subcategory: "UTI — worsening", finding: "Increasing confusion + flank pain", narrative: "MD notified; UA ordered. ABX to start pending culture.", timestamp: "2026-04-23T09:05:00Z" }),
    ie({ id: "f-23-3", patientId: "demo-p-6001", patientName: "Grisham, Henry", room: "121", severity: "high", category: "Nutrition", subcategory: "Weight decline", finding: "5.5% weight loss over 42d", narrative: "Dietitian consulted; fortified meals + ensure BID started.", timestamp: "2026-04-23T12:00:00Z" }),
    ie({ id: "f-23-4", patientId: "demo-p-1002", patientName: "Reyes, Marcus", room: "214-A", severity: "medium", category: "GG decline", subcategory: "Ambulation", finding: "Walk 50 Feet: 4 → 2 on day shift", narrative: "PT reports steady decline over 10 days; equipment reassessment scheduled.", timestamp: "2026-04-23T15:30:00Z" }),
    ie({ id: "f-23-5", patientId: "demo-p-1005", patientName: "Shankar, Priya", room: "104", severity: "low", category: "Behavior", subcategory: "Restlessness", finding: "Restlessness after supper", narrative: "Redirected with music therapy; settled within 15 min.", timestamp: "2026-04-23T19:10:00Z" }),
    ie({ id: "f-23-6", patientId: "demo-p-7002", patientName: "Bateson, Clifford", room: "223", severity: "low", category: "Mood", subcategory: "Withdrawn", finding: "Declined group activity", narrative: "Verbalized fatigue. No new mood complaints elicited.", timestamp: "2026-04-23T16:40:00Z" })
  ],
  "2026-04-22": [
    ie({ id: "f-22-1", patientId: "demo-p-1001", patientName: "Doe, Jane", room: "308-B", severity: "high", category: "GG decline", subcategory: "Ambulation", finding: "Walk 10 Feet: 3 → 2", narrative: "Required contact guard assist for short distance. Had independently ambulated 2 weeks prior.", timestamp: "2026-04-22T11:00:00Z" }),
    ie({ id: "f-22-2", patientId: "demo-p-3001", patientName: "Okafor, Samuel", room: "302", severity: "medium", category: "Urinary", subcategory: "Foley flow", finding: "Decreased Foley output × 4h", narrative: "Bladder scan 120mL. Flushed per protocol with good return.", timestamp: "2026-04-22T22:05:00Z" }),
    ie({ id: "f-22-3", patientId: "demo-p-5002", patientName: "Vega, Alma", room: "218", severity: "medium", category: "Behavior", subcategory: "Refused meds", finding: "Refused evening meds", narrative: "Offered with snack; accepted 2nd attempt.", timestamp: "2026-04-22T20:45:00Z" }),
    ie({ id: "f-22-4", patientId: "demo-p-8001", patientName: "Hollis, Margaret", room: "119", severity: "low", category: "Skin", subcategory: "Routine", finding: "Skin check documented", narrative: "No new findings. Continue pressure-relief schedule.", timestamp: "2026-04-22T09:15:00Z" })
  ],
  "2026-04-21": [
    ie({ id: "f-21-1", patientId: "demo-p-1003", patientName: "Novak, Eleanor", room: "312-A", severity: "high", category: "GG decline", subcategory: "Transfers", finding: "Sit to Stand: 3 → 1", narrative: "Required max assist for sit-to-stand after period of independence.", timestamp: "2026-04-21T08:30:00Z" }),
    ie({ id: "f-21-2", patientId: "demo-p-5003", patientName: "Pritchard, Vance", room: "225", severity: "medium", category: "Medication", subcategory: "Antipsychotic", finding: "New Quetiapine order", narrative: "Started 25mg PO QHS for sleep disturbance — GDR attempt planned in 2 weeks.", timestamp: "2026-04-21T13:10:00Z" })
  ],
  "2026-04-20": [
    ie({ id: "f-20-1", patientId: "demo-p-6001", patientName: "Grisham, Henry", room: "121", severity: "medium", category: "Nutrition", subcategory: "Poor intake", finding: "Ate <25% of last 3 meals", narrative: "Dietitian to follow-up in AM. Preferences review scheduled.", timestamp: "2026-04-20T18:00:00Z" }),
    ie({ id: "f-20-2", patientId: "demo-p-9001", patientName: "Carver, Benjamin", room: "110", severity: "low", category: "Fall", subcategory: "Near-miss", finding: "Near-miss on transfer", narrative: "Slipped during wheelchair transfer; steadied by CNA. No injury. Re-education provided.", timestamp: "2026-04-20T11:20:00Z" })
  ],
  "2026-04-19": [
    ie({ id: "f-19-1", patientId: "demo-p-1004", patientName: "Park, Harold", room: "309", severity: "medium", category: "GG decline", subcategory: "Transfers", finding: "Toilet Transfer: 5 → 3", narrative: "New decline over weekend — therapy to evaluate.", timestamp: "2026-04-19T10:05:00Z" })
  ],
  "2026-04-18": [
    ie({ id: "f-18-1", patientId: "demo-p-7002", patientName: "Bateson, Clifford", room: "223", severity: "low", category: "Mood", subcategory: "Withdrawn", finding: "Declined therapy session", narrative: "Verbalized fatigue; will reoffer tomorrow.", timestamp: "2026-04-18T15:40:00Z" })
  ]
};
function oa(t) {
  const n = { critical: 0, high: 0, medium: 0, low: 0 };
  for (const s of t) {
    const a = (s.severity || "").toLowerCase();
    a in n && (n[a] += 1);
  }
  return n;
}
function hi() {
  return {
    timezone: ia,
    locationId: "demo-loc-1",
    reports: mi.map((t) => ({
      id: `demo-report-${t}`,
      reportDate: t,
      facilityDate: t,
      status: "final",
      counts: oa(ra[t] || [])
    }))
  };
}
function _i(t) {
  const n = ra[t];
  return n ? {
    id: `demo-report-${t}`,
    reportDate: t,
    facilityDate: t,
    status: "final",
    counts: oa(n),
    findings: n
  } : null;
}
const gi = {
  "demo-nutrition-v3": {
    id: "demo-nutrition-v3",
    description: "Nutrition Assessment - V 3",
    date: "2026-02-27",
    type: "Admission",
    category: "Nutrition",
    createdBy: "skim.rd",
    lockedDate: "2026-02-27",
    answers: {
      assessmentId: "demo-nutrition-v3",
      title: "Nutrition Assessment - V 3",
      metadata: {
        resident: "Doe, Jane",
        description: "Nutrition Assessment - V 3",
        date: "2026-02-27"
      },
      sections: [
        {
          sectionCode: "NUTR",
          description: "Nutrition Assessment - V 3",
          signedBy: "Sarah Kim, RD, LD",
          signedDate: "2026-02-27",
          content: [
            {
              sectionNumber: "1",
              sectionTitle: "Relevant Medications & Diagnoses",
              questions: [
                {
                  questionId: "q1",
                  questionText: "Existing diagnosis of Protein/Calorie Malnutrition? (NTA point)",
                  answerType: "radio",
                  options: [
                    { value: "yes", text: "Yes", selected: !0 },
                    { value: "no", text: "No", selected: !1 }
                  ]
                }
              ]
            },
            {
              sectionNumber: "2",
              sectionTitle: "Identification of Risk Indicators",
              questions: [
                {
                  questionId: "q2",
                  questionText: "Are there current lab values (<60 days)?",
                  answerType: "radio",
                  options: [
                    { value: "yes", text: "Yes", selected: !0 },
                    { value: "no", text: "No", selected: !1 }
                  ]
                },
                {
                  questionId: "q2b",
                  questionText: "Albumin (most recent)",
                  answerType: "text",
                  value: "2.9 g/dL (Low)"
                },
                {
                  questionId: "q2c",
                  questionText: "Prealbumin (most recent)",
                  answerType: "text",
                  value: "12 mg/dL (Low)"
                }
              ]
            },
            {
              sectionNumber: "3",
              sectionTitle: "Enteral Feeding/IV Fluids",
              questions: [
                {
                  questionId: "q3",
                  questionText: "Did the resident have IV Hydration in Lookback period? (MDS Section K)",
                  answerType: "radio",
                  options: [
                    { value: "yes", text: "Yes", selected: !0 },
                    { value: "no", text: "No", selected: !1 }
                  ]
                }
              ]
            },
            {
              sectionNumber: "4",
              sectionTitle: "Nutrient Needs",
              questions: [
                {
                  questionId: "q4",
                  questionText: "Nutrition Needs Computed?",
                  answerType: "radio",
                  options: [
                    { value: "yes", text: "Yes", selected: !0 },
                    { value: "no", text: "No", selected: !1 }
                  ]
                },
                {
                  questionId: "q4b",
                  questionText: "Estimated caloric needs",
                  answerType: "text",
                  value: "1600–1800 kcal/day"
                },
                {
                  questionId: "q4c",
                  questionText: "Estimated protein needs",
                  answerType: "text",
                  value: "65–80 g/day"
                }
              ]
            },
            {
              sectionNumber: "5",
              sectionTitle: "Dietitian Recommendations",
              questions: [
                {
                  questionId: "q5",
                  questionText: "Recommended interventions",
                  answerType: "textarea",
                  value: "Fortified foods, Ensure Plus BID with meals, weekly weights, re-evaluate in 1 week."
                }
              ]
            }
          ]
        }
      ]
    }
  }
};
function fi(t, n) {
  if (!n || !t?.answers) return [];
  const s = [], a = n.toLowerCase();
  return t.answers.sections.forEach((i, r) => {
    i.content.forEach((o, c) => {
      o.questions.forEach((d, l) => {
        const p = `${r}:${c}:${l}`, u = d.questionText?.toLowerCase() || "";
        if (d.value && a.includes(d.value.toLowerCase())) {
          s.push(p);
          return;
        }
        if (u && a.includes(u)) {
          s.push(p);
          return;
        }
        d.options?.forEach((m, h) => {
          m.selected && a.includes(m.text.toLowerCase()) && s.push(`${p}:${h}`);
        });
      });
    });
  }), s;
}
function yi(t, n) {
  const s = gi[t];
  if (!s)
    return { success: !1, error: `Demo: no UDA fixture for ${t}` };
  const a = t === "demo-nutrition-v3" ? ["0:0:0:0", "0:1:0:0", "0:2:0:0", "0:3:0:0"] : [], i = n ? a.length ? a : fi(s, n) : [];
  return {
    success: !0,
    data: {
      uda: s,
      matchKeys: i
    }
  };
}
function vi(t) {
  return new Promise((n) => setTimeout(n, t));
}
function bi() {
  return vi(50 + Math.random() * 150);
}
function wi(t) {
  const [n, s] = t.split("?"), a = new URLSearchParams(s || "");
  if (n === "/api/extension/mds/dashboard")
    return { success: !0, data: ge.dashboard };
  if (n === "/api/extension/mds/doc-risks")
    return { success: !0, data: ge.docRisks };
  if (n === "/api/extension/mds/ard-recommendation")
    return { success: !0, data: ge.ardRecommendation };
  if (n === "/api/extension/mds/pdpm-potential") {
    const m = a.get("externalAssessmentId"), h = ge.pdpmPotential[m];
    return h ? { success: !0, data: h } : { success: !1, error: `No PDPM data for assessment ${m}` };
  }
  const i = n.match(/\/api\/extension\/patients\/([^/]+)\/assessments/);
  if (i) {
    const m = i[1], h = ge.patientAssessments[m];
    return h ? { success: !0, data: h } : { success: !1, error: `No assessments for patient ${m}` };
  }
  const r = n.match(/\/api\/extension\/mds\/items\/([^/]+)/);
  if (r) {
    const m = decodeURIComponent(r[1]), h = ge.itemDetail[m];
    return h ? { success: !0, data: h } : {
      success: !0,
      data: {
        item: { mdsItem: m, itemName: m, description: `MDS Item ${m}`, status: "dont_code", evidence: [] },
        diagnosisSummary: null,
        treatmentSummary: null
      }
    };
  }
  if (n === "/api/extension/mds/queryable-items")
    return { success: !0, data: ge.queryableItems };
  if (n === "/api/extension/mds/queryable-items/batch-generate")
    return { success: !0, data: { generated: !0 } };
  if (n === "/api/extension/practitioners")
    return { success: !0, data: ge.practitioners };
  if (n === "/api/extension/certifications/dashboard")
    return { success: !0, data: ge.certDashboard };
  if (n === "/api/extension/certifications/practitioners")
    return { success: !0, data: ge.practitioners };
  if (n === "/api/extension/certifications/by-patient") {
    const m = a.get("patientId"), h = ge.certifications || [];
    return { success: !0, data: { certifications: m ? h.filter((g) => g.patientId === m) : h } };
  }
  const o = n.match(/\/api\/extension\/certifications\/([^/]+)\/sends/);
  if (o)
    return {
      success: !0,
      data: [{
        id: "send-1",
        certId: o[1],
        sentAt: new Date(Date.now() - 3 * 864e5).toISOString(),
        practitioner: { name: "Dr. Demo Provider" },
        method: "fax"
      }]
    };
  const c = n.match(/\/api\/extension\/certifications\/([^/]+)\/(send|skip|delay|edit-reason|unskip)/);
  if (c)
    return { success: !0, data: { certId: c[1], action: c[2] } };
  if (n === "/api/extension/certifications") {
    const m = a.get("status"), h = ge.certifications || [];
    return { success: !0, data: { certifications: m ? h.filter((g) => g.status === m) : h } };
  }
  if (n === "/api/extension/planner/week-events") {
    const m = a.get("startDate"), h = a.get("endDate");
    return !m || !h ? { success: !1, error: "Missing required param: startDate or endDate" } : {
      success: !0,
      data: {
        events: ri(m),
        meta: {
          facilityName: a.get("facilityName") || "Demo Facility",
          startDate: m,
          endDate: h,
          generatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      }
    };
  }
  if (n === "/api/extension/planner/summary")
    return {
      success: !0,
      data: {
        summary: oi(),
        meta: { generatedAt: (/* @__PURE__ */ new Date()).toISOString() }
      }
    };
  const d = n.match(/\/api\/extension\/documents\/([^/]+)/);
  if (d)
    return {
      success: !0,
      data: {
        document: {
          id: d[1],
          title: "Clinical Document",
          documentType: "Progress Note",
          effectiveDate: "2026-01-22",
          fileSize: 245760,
          signedUrl: null
          // No real PDF in demo — viewer will show empty state
        }
      }
    };
  const l = n.match(/\/api\/extension\/patients\/([^/]+)\/uda\/([^/]+)/);
  if (l) {
    const m = l[2], h = a.get("quote") || null;
    return yi(m, h);
  }
  if (n === "/api/extension/qm-planner/currently-triggering")
    return { success: !0, data: di };
  if (n === "/api/extension/qm-planner/preventable-alerts")
    return { success: !0, data: ui };
  const p = n.match(/\/api\/extension\/patients\/([^/]+)\/gg-decline$/);
  if (p) {
    const m = p[1], h = pi[m];
    return h ? { success: !0, data: h } : { success: !1, error: `Demo: no GG detail for ${m}` };
  }
  if (/\/api\/extension\/patients\/[^/]+\/(gg-decline\/snooze|preventable-alert-snooze)(\/[^/]+)?$/.test(n))
    return { success: !0, data: { ok: !0 } };
  if (n.match(/\/api\/patients\/([^/]+)\/evidence$/))
    return { success: !0, data: { evidence: [] } };
  if (n === "/api/extension/24hr-report") {
    const m = a.get("date");
    if (m) {
      const h = _i(m);
      return h ? { success: !0, data: { report: h } } : { success: !1, status: 404, error: "Report not found" };
    }
    return { success: !0, data: hi() };
  }
  return console.warn("[DemoMock] Unhandled API endpoint:", n), { success: !1, error: `Demo: unhandled endpoint ${n}` };
}
async function Ii(t) {
  switch (await bi(), t.type) {
    case "GET_ORG":
      return { org: "demo-org" };
    case "GET_AUTH_STATE":
      return { authenticated: !0 };
    case "API_REQUEST":
      return wi(t.endpoint);
    default:
      return console.log("[DemoMock] Unhandled message type:", t.type), {};
  }
}
function Di() {
  typeof window.chrome > "u" && (window.chrome = {}), window.chrome.runtime || (window.chrome.runtime = {}), window.chrome.runtime.sendMessage = function(t, n) {
    const s = Ii(t);
    if (typeof n == "function") {
      s.then(n).catch((a) => {
        console.error("[DemoMock] Error in callback handler:", a), n({ success: !1, error: a.message });
      });
      return;
    }
    return s;
  }, window.chrome.runtime.getURL = function(t) {
    return t.startsWith("lib/") ? `./${t}` : t;
  }, window.chrome.runtime.id = "demo-mock-extension-id", console.log("[DemoMock] Chrome API mocks installed");
}
var Ye, ce, $t, Hn, Je = 0, ca = [], le = ae, Fn = le.__b, Gn = le.__r, Un = le.diffed, Vn = le.__c, zn = le.unmount, Wn = le.__;
function vn(t, n) {
  le.__h && le.__h(ce, t, Je || n), Je = 0;
  var s = ce.__H || (ce.__H = { __: [], __h: [] });
  return t >= s.__.length && s.__.push({}), s.__[t];
}
function v(t) {
  return Je = 1, ki(da, t);
}
function ki(t, n, s) {
  var a = vn(Ye++, 2);
  if (a.t = t, !a.__c && (a.__ = [da(void 0, n), function(c) {
    var d = a.__N ? a.__N[0] : a.__[0], l = a.t(d, c);
    d !== l && (a.__N = [l, a.__[1]], a.__c.setState({}));
  }], a.__c = ce, !ce.__f)) {
    var i = function(c, d, l) {
      if (!a.__c.__H) return !0;
      var p = a.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (p.every(function(m) {
        return !m.__N;
      })) return !r || r.call(this, c, d, l);
      var u = a.__c.props !== c;
      return p.forEach(function(m) {
        if (m.__N) {
          var h = m.__[0];
          m.__ = m.__N, m.__N = void 0, h !== m.__[0] && (u = !0);
        }
      }), r && r.call(this, c, d, l) || u;
    };
    ce.__f = !0;
    var r = ce.shouldComponentUpdate, o = ce.componentWillUpdate;
    ce.componentWillUpdate = function(c, d, l) {
      if (this.__e) {
        var p = r;
        r = void 0, i(c, d, l), r = p;
      }
      o && o.call(this, c, d, l);
    }, ce.shouldComponentUpdate = i;
  }
  return a.__N || a.__;
}
function G(t, n) {
  var s = vn(Ye++, 3);
  !le.__s && la(s.__H, n) && (s.__ = t, s.u = n, ce.__H.__h.push(s));
}
function ee(t) {
  return Je = 5, Z(function() {
    return { current: t };
  }, []);
}
function Z(t, n) {
  var s = vn(Ye++, 7);
  return la(s.__H, n) && (s.__ = t(), s.__H = n, s.__h = t), s.__;
}
function F(t, n) {
  return Je = 8, Z(function() {
    return t;
  }, n);
}
function Ni() {
  for (var t; t = ca.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(_t), t.__H.__h.forEach(en), t.__H.__h = [];
  } catch (n) {
    t.__H.__h = [], le.__e(n, t.__v);
  }
}
le.__b = function(t) {
  ce = null, Fn && Fn(t);
}, le.__ = function(t, n) {
  t && n.__k && n.__k.__m && (t.__m = n.__k.__m), Wn && Wn(t, n);
}, le.__r = function(t) {
  Gn && Gn(t), Ye = 0;
  var n = (ce = t.__c).__H;
  n && ($t === ce ? (n.__h = [], ce.__h = [], n.__.forEach(function(s) {
    s.__N && (s.__ = s.__N), s.u = s.__N = void 0;
  })) : (n.__h.forEach(_t), n.__h.forEach(en), n.__h = [], Ye = 0)), $t = ce;
}, le.diffed = function(t) {
  Un && Un(t);
  var n = t.__c;
  n && n.__H && (n.__H.__h.length && (ca.push(n) !== 1 && Hn === le.requestAnimationFrame || ((Hn = le.requestAnimationFrame) || Ci)(Ni)), n.__H.__.forEach(function(s) {
    s.u && (s.__H = s.u), s.u = void 0;
  })), $t = ce = null;
}, le.__c = function(t, n) {
  n.some(function(s) {
    try {
      s.__h.forEach(_t), s.__h = s.__h.filter(function(a) {
        return !a.__ || en(a);
      });
    } catch (a) {
      n.some(function(i) {
        i.__h && (i.__h = []);
      }), n = [], le.__e(a, s.__v);
    }
  }), Vn && Vn(t, n);
}, le.unmount = function(t) {
  zn && zn(t);
  var n, s = t.__c;
  s && s.__H && (s.__H.__.forEach(function(a) {
    try {
      _t(a);
    } catch (i) {
      n = i;
    }
  }), s.__H = void 0, n && le.__e(n, s.__v));
};
var Qn = typeof requestAnimationFrame == "function";
function Ci(t) {
  var n, s = function() {
    clearTimeout(a), Qn && cancelAnimationFrame(n), setTimeout(t);
  }, a = setTimeout(s, 35);
  Qn && (n = requestAnimationFrame(s));
}
function _t(t) {
  var n = ce, s = t.__c;
  typeof s == "function" && (t.__c = void 0, s()), ce = n;
}
function en(t) {
  var n = ce;
  t.__c = t.__(), ce = n;
}
function la(t, n) {
  return !t || t.length !== n.length || n.some(function(s, a) {
    return s !== t[a];
  });
}
function da(t, n) {
  return typeof n == "function" ? n(t) : n;
}
function Si(t) {
  if (!t) return "";
  try {
    return new Date(t).toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric"
    });
  } catch {
    return t;
  }
}
function tn({ uda: t, matchKeys: n, quoteText: s, onClose: a }) {
  const i = n instanceof Set ? n : new Set(n || []), r = ee(null);
  G(() => {
    if (r.current) {
      const d = setTimeout(() => {
        r.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
      return () => clearTimeout(d);
    }
  }, [t]);
  const o = t?.answers?.sections?.length ?? 0;
  let c = !1;
  return /* @__PURE__ */ e("div", { className: "super-uda-viewer", children: [
    /* @__PURE__ */ e("div", { className: "super-uda-viewer__header", children: [
      /* @__PURE__ */ e("div", { className: "super-uda-viewer__title", children: [
        /* @__PURE__ */ e("svg", { className: "super-uda-viewer__title-icon", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
          /* @__PURE__ */ e("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" }),
          /* @__PURE__ */ e("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
          /* @__PURE__ */ e("path", { d: "M9 12h6M9 16h6M9 8h0" })
        ] }),
        /* @__PURE__ */ e("span", { children: t?.description || "UDA Assessment" })
      ] }),
      /* @__PURE__ */ e("div", { className: "super-uda-viewer__meta", children: [
        t?.date && /* @__PURE__ */ e("span", { className: "super-uda-viewer__meta-item", children: [
          /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
            /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
            /* @__PURE__ */ e("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
            /* @__PURE__ */ e("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
            /* @__PURE__ */ e("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
          ] }),
          Si(t.date)
        ] }),
        /* @__PURE__ */ e("span", { className: "super-uda-viewer__meta-item", children: [
          o,
          " section",
          o !== 1 ? "s" : ""
        ] }),
        i.size > 0 && /* @__PURE__ */ e("span", { className: "super-uda-viewer__meta-matches", children: [
          i.size,
          " match",
          i.size !== 1 ? "es" : ""
        ] })
      ] }),
      a && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "super-uda-viewer__close",
          onClick: a,
          "aria-label": "Close",
          children: "×"
        }
      )
    ] }),
    s && /* @__PURE__ */ e("div", { className: "super-uda-viewer__quote-bar", children: [
      /* @__PURE__ */ e("span", { className: "super-uda-viewer__quote-label", children: "Looking for:" }),
      /* @__PURE__ */ e("span", { className: "super-uda-viewer__quote-text", children: [
        "“",
        s,
        "”"
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "super-uda-viewer__body", children: t?.answers ? t.answers.sections.map((d, l) => /* @__PURE__ */ e("div", { className: "super-uda-viewer__section", children: [
      /* @__PURE__ */ e("div", { className: "super-uda-viewer__section-title", children: [
        d.description,
        i.size > 0 && /* @__PURE__ */ e("span", { className: "super-uda-viewer__section-match-count", children: [
          "(",
          i.size,
          " match",
          i.size !== 1 ? "es" : "",
          ")"
        ] })
      ] }),
      d.content.map((p, u) => /* @__PURE__ */ e("div", { className: "super-uda-viewer__content-group", children: [
        p.sectionTitle && p.sectionTitle !== d.description && /* @__PURE__ */ e("div", { className: "super-uda-viewer__subheader", children: p.sectionTitle }),
        p.questions.map((m, h) => {
          const _ = `${l}:${u}:${h}`, g = i.has(_), f = m.options?.some((D, k) => i.has(`${_}:${k}`)) ?? !1, b = g || f, y = b && !c;
          y && (c = !0);
          const I = m.value ?? m.options?.filter((D) => D.selected).map((D) => D.text).join("; ") ?? "";
          return /* @__PURE__ */ e(
            "div",
            {
              ref: y ? r : void 0,
              className: "super-uda-viewer__row" + (b ? " super-uda-viewer__row--highlighted" : ""),
              children: [
                /* @__PURE__ */ e("div", { className: "super-uda-viewer__row-question", children: m.questionText }),
                /* @__PURE__ */ e("div", { className: "super-uda-viewer__row-answer", children: I || /* @__PURE__ */ e("span", { className: "super-uda-viewer__row-empty", children: "—" }) })
              ]
            },
            h
          );
        })
      ] }, u))
    ] }, l)) : /* @__PURE__ */ e("div", { className: "super-uda-viewer__empty", children: "UDA answers have not been synced for this assessment." }) })
  ] });
}
async function jn(t, n) {
  const s = window.SuperOverlay?.patientId || "2657226", a = new URLSearchParams({
    facilityName: window.SuperOverlay?.facilityName || "SUNNY MEADOWS DEMO FACILITY",
    orgSlug: "demo-org"
  });
  n && a.set("quote", n);
  const i = `/api/extension/patients/${s}/uda/${t}?${a.toString()}`, r = await chrome.runtime.sendMessage({ type: "API_REQUEST", endpoint: i });
  if (!r?.success) throw new Error(r?.error || "Failed to load UDA");
  return r.data;
}
function xi() {
  window.__DEMO_CERT_DATA = ge.certifications || [], localStorage.setItem("CORE.org_code", "demo-org"), window.getOrg = () => ({ org: "demo-org" }), window.getChatFacilityInfo = () => "SUNNY MEADOWS DEMO FACILITY", window.getChatPatientId = () => "2657226", window.getPatientNameFromPage = () => "Doe, Jane", window.getCurrentParams = () => ({
    facilityName: "SUNNY MEADOWS DEMO FACILITY",
    orgSlug: "demo-org",
    assessmentId: "4860265"
  }), window.QueryAPI = {
    async fetchPractitioners(n, s) {
      return await new Promise((a) => setTimeout(a, 200)), [
        {
          id: "pract-001",
          firstName: "Demo",
          lastName: "Provider",
          title: "MD",
          name: "Dr. Demo Provider",
          phone: "555-0101"
        },
        {
          id: "pract-002",
          firstName: "Sample",
          lastName: "Doctor",
          title: "DO",
          name: "Dr. Sample Doctor",
          phone: "555-0102"
        },
        {
          id: "pract-003",
          firstName: "Jane",
          lastName: "Specialist",
          title: "NP",
          name: "Jane Specialist, NP",
          phone: "555-0103"
        }
      ];
    },
    async generateNote(n, s) {
      await new Promise((o) => setTimeout(o, 500 + Math.random() * 500));
      const a = s.pdpmCategoryName || s.mdsItemName || s.itemName || n;
      return {
        note: {
          I5600: `Dear Doctor,

I am writing to request your clinical assessment regarding malnutrition for this patient's current MDS assessment.

Our review of the clinical documentation reveals the following evidence:

• Weight loss of 17 lbs (12.6%) over the past 3 months (135 lbs → 118 lbs)
• PO intake documented at <50% of estimated needs
• Albumin: 2.9 g/dL (Low, ref: 3.5-5.0)
• Prealbumin: 12 mg/dL (Low, ref: 18-38)
• Dietitian has diagnosed moderate protein-calorie malnutrition
• Current interventions: Ensure Plus 8oz BID, Fortified Cereal 6oz QD

Please confirm whether a malnutrition diagnosis (ICD-10: E44.0) is appropriate for this patient.

Thank you for your prompt attention to this matter.`
        }[n] || `Dear Doctor,

I am writing to request your clinical assessment regarding ${a} (${n}) for this patient's current MDS assessment.

Based on our review of the clinical documentation, there appears to be evidence supporting this diagnosis/condition that may warrant coding on the MDS. Your confirmation would help ensure accurate assessment completion.

Thank you for your prompt attention to this matter.`,
        preferredIcd10: s.recommendedIcd10?.[0] || { code: "R69", description: "Illness, unspecified" },
        icd10Options: s.recommendedIcd10 || [
          { code: "R69", description: "Illness, unspecified" }
        ]
      };
    },
    async createQuery(n) {
      return await new Promise((s) => setTimeout(s, 300)), {
        query: {
          id: `demo-query-${Date.now()}`,
          mdsItem: n.mdsItem,
          mdsItemName: n.mdsItemName,
          status: "draft",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
    },
    async sendQuery(n, s, a) {
      return await new Promise((i) => setTimeout(i, 300)), console.log(`[DemoMock] QueryAPI.sendQuery: ${n} → practitioners: ${s.join(", ")}`), { success: !0, sentAt: (/* @__PURE__ */ new Date()).toISOString() };
    },
    async resendQuery(n) {
      return await new Promise((s) => setTimeout(s, 200)), console.log(`[DemoMock] QueryAPI.resendQuery: ${n}`), { success: !0 };
    }
  };
  function t(n, s) {
    console.log(`[DemoMock] SuperToast.${n}:`, s), window.dispatchEvent(new CustomEvent("demo:toast", { detail: { type: n, message: s } }));
  }
  window.SuperToast = {
    show(n) {
      t("info", n.message || n);
    },
    success(n) {
      t("success", n);
    },
    error(n) {
      t("error", n);
    },
    info(n) {
      t("info", n);
    },
    warning(n) {
      t("warning", n);
    }
  }, window.SuperOverlay = {
    facilityName: "SUNNY MEADOWS DEMO FACILITY",
    patientId: "2657226",
    assessmentId: "4860265"
  }, window.navigateToMDSItem = (n) => {
    console.log("[DemoMock] navigateToMDSItem:", n);
  }, window.PDPMAnalyzerLauncher = {
    open(n) {
      console.log("[DemoMock] PDPMAnalyzerLauncher.open:", n), window.dispatchEvent(new CustomEvent("demo:open-pdpm", { detail: n }));
    }
  }, window.QueryDetailModal = {
    show(n) {
      console.log("[DemoMock] QueryDetailModal.show:", n);
    }
  }, window.renderSplitAdministrations = async (n, s, a, i) => {
    await new Promise((C) => setTimeout(C, 400));
    const r = !s?.includes("tar"), o = r ? "MAR" : "TAR", c = r ? "super-admin-badge--mar" : "super-admin-badge--tar", d = r ? "💊" : "⚡", p = {
      "mar-010": { name: "Aspirin 81mg PO Daily", directions: "Take by mouth once daily with food", startDate: "2025-12-20", endDate: null },
      "mar-012": { name: "Lisinopril 20mg PO Daily", directions: "Take by mouth once daily in the morning", startDate: "2025-12-15", endDate: null },
      "mar-001": { name: "Metformin 500mg PO BID", directions: "Take by mouth twice daily with meals", startDate: "2025-11-01", endDate: null },
      "doc-nutr-004": { name: "Ensure Plus 8 OZ Oral Liquid", directions: "Give 8 oz Ensure Plus by mouth twice daily with lunch and dinner for nutritional supplementation", startDate: "2026-01-22", endDate: null },
      "doc-nutr-003": { name: "Fortified Cereal 6 OZ", directions: "Give 6 oz fortified cereal by mouth once daily with breakfast to increase caloric and protein intake", startDate: "2026-01-22", endDate: null }
    }[s] || { name: "Medication Order", directions: "As directed", startDate: "2025-12-20", endDate: null }, u = [], m = new Date(2026, 0, 27);
    for (let C = 6; C >= 0; C--) {
      const S = new Date(m);
      S.setDate(S.getDate() - C), u.push(S);
    }
    const h = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], _ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], g = (C) => `${_[C.getMonth()]} ${C.getDate()}, ${C.getFullYear()}`, f = `${g(u[0])} - ${g(u[u.length - 1])}`, b = (C) => C ? new Date(C).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "", y = u.map((C) => `
      <th class="super-admin-grid__date-header">
        <div class="super-admin-grid__day">${h[C.getDay()]}</div>
        <div class="super-admin-grid__date">${_[C.getMonth()]} ${C.getDate()}</div>
      </th>
    `).join(""), D = p.name.includes("BID") ? ["0800", "1800"] : ["0800"], k = ["RN-JD", "RN-KM", "RN-TS", "LPN-AB"], T = (C) => {
      const S = parseInt(C.substring(0, 2), 10), w = C.substring(2), O = S >= 12 ? "PM" : "AM";
      return `${S > 12 ? S - 12 : S === 0 ? 12 : S}:${w} ${O}`;
    }, A = D.map((C) => {
      const S = u.map((w, O) => {
        const E = (O + (C === "1800" ? 2 : 0)) % k.length;
        return `<td class="super-admin-grid__cell super-admin-grid__cell--given">
          <span class="super-admin-grid__check">✓</span>
          <span class="super-admin-grid__initials">${k[E]}</span>
        </td>`;
      }).join("");
      return `<tr class="super-admin-grid__row">
        <td class="super-admin-grid__time">${T(C)}</td>
        ${S}
      </tr>`;
    }).join(""), x = D.length * u.length;
    n.innerHTML = `
      <div class="super-split__admin">
        <div class="super-admin-modal__header">
          <div class="super-admin-modal__title-row">
            <span class="super-admin-modal__icon">${d}</span>
            <div class="super-admin-modal__title">
              <span class="super-admin-modal__order-name">${p.name}</span>
              <span class="super-admin-badge ${c}">${o}</span>
            </div>
          </div>
          ${p.directions ? `<div class="super-admin-modal__directions">${p.directions}</div>` : ""}
          <div class="super-admin-modal__meta">
            ${D.length} time slot${D.length !== 1 ? "s" : ""}
            <span class="super-admin-modal__dates">
              Start: ${b(p.startDate)}
              ${p.endDate ? ` · Stop: ${b(p.endDate)}` : ""}
            </span>
          </div>
        </div>
        <div class="super-admin-modal__date-bar">
          <button class="super-admin-modal__nav-btn" title="Previous week">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <span class="super-admin-modal__date-range">📅 ${f}</span>
          <button class="super-admin-modal__nav-btn" title="Next week">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <div class="super-admin-modal__body">
          <div class="super-admin-grid-wrapper">
            <table class="super-admin-grid">
              <thead>
                <tr>
                  <th class="super-admin-grid__time-header">Time</th>
                  ${y}
                </tr>
              </thead>
              <tbody>
                ${A}
              </tbody>
            </table>
          </div>
        </div>
        <div class="super-admin-modal__footer">
          <span class="super-admin-modal__event-count">${x} events</span>
          <div class="super-admin-legend">
            <span class="super-admin-legend__item super-admin-legend__item--given">✓ Given</span>
            <span class="super-admin-legend__item super-admin-legend__item--refused">2 Refused</span>
            <span class="super-admin-legend__item super-admin-legend__item--loa">3 LOA</span>
            <span class="super-admin-legend__item super-admin-legend__item--hold">5 Hold</span>
          </div>
        </div>
      </div>
    `;
  }, window.renderSplitNote = async (n, s, a) => {
    await new Promise((d) => setTimeout(d, 350));
    const r = {
      "doc-nutr-001": {
        title: "NUTRITION_01_22_36001641.PDF",
        pages: 2,
        pageContent: {
          1: [
            { text: "NUTRITION PROGRESS NOTE", highlight: !1, bold: !0 },
            { text: "", highlight: !1 },
            { text: "Patient: Doe, Jane                    MRN: 000000", highlight: !1 },
            { text: "Date: 01/22/2026                      Time: 10:28", highlight: !1 },
            { text: "Dietitian: Sarah Kim, RD, LD", highlight: !1 },
            { text: "_______________________________________________", highlight: !1 },
            { text: "", highlight: !1 },
            { text: "NUTRITIONAL STATUS:", highlight: !1, bold: !0 },
            { text: "Current Weight: 118 lbs (53.5 kg)", highlight: !1 },
            { text: "Usual Body Weight: 135 lbs (61.2 kg)", highlight: !1 },
            { text: "Weight Loss: 17 lbs (12.6%) in past 3 months", highlight: "keyword" },
            { text: "BMI: 20.2 (within normal range but declining)", highlight: !1 },
            { text: "", highlight: !1 },
            { text: "DIETARY INTAKE:", highlight: !1, bold: !0 },
            { text: "Ongoing PO Intake: < 50% meals/est. needs", highlight: "keyword" },
            { text: "Patient reports decreased appetite and early satiety.", highlight: !1 },
            { text: "Difficulty with textures due to dysphagia.", highlight: "contextual" },
            { text: "Meal observation: consumed ~40% of lunch, refused", highlight: !1 },
            { text: "dessert and most of entree.", highlight: !1 }
          ],
          2: [
            { text: "LABORATORY VALUES:", highlight: !1, bold: !0 },
            { text: "Albumin: 2.9 g/dL (Low)            Ref: 3.5-5.0", highlight: "keyword" },
            { text: "Prealbumin: 12 mg/dL (Low)          Ref: 18-38", highlight: "keyword" },
            { text: "Total Protein: 5.8 g/dL (Low)       Ref: 6.0-8.3", highlight: !1 },
            { text: "Transferrin: 165 mg/dL (Low)         Ref: 200-360", highlight: !1 },
            { text: "", highlight: !1 },
            { text: "MALNUTRITION DIAGNOSIS:", highlight: !1, bold: !0 },
            { text: "Moderate protein-calorie malnutrition based on:", highlight: "keyword" },
            { text: "- Significant unintentional weight loss (>10% in 3 months)", highlight: !1 },
            { text: "- Inadequate oral intake (<50% estimated needs)", highlight: !1 },
            { text: "- Low albumin and prealbumin", highlight: !1 },
            { text: "", highlight: !1 },
            { text: "RECOMMENDATIONS:", highlight: !1, bold: !0 },
            { text: "1. Fortified foods - pudding, cereal, milk", highlight: !1 },
            { text: "2. Ensure Plus BID with meals", highlight: !1 },
            { text: "3. Liberalized diet texture per SLP recommendations", highlight: !1 },
            { text: "4. Weekly weights", highlight: !1 },
            { text: "5. Re-evaluate in 1 week", highlight: !1 },
            { text: "", highlight: !1 },
            { text: "_______________________________________________", highlight: !1 },
            { text: "Electronically signed: Sarah Kim, RD, LD  01/22/2026", highlight: !1 }
          ]
        }
      },
      "doc-nutr-002": {
        title: "LAB_NUTRITION_01_20_38001789.PDF",
        pages: 1,
        pageContent: {
          1: [
            { text: "LABORATORY REPORT", highlight: !1, bold: !0 },
            { text: "", highlight: !1 },
            { text: "Patient: Doe, Jane                    MRN: 000000", highlight: !1 },
            { text: "Date Collected: 01/20/2026 06:15", highlight: !1 },
            { text: "Ordering Physician: Dr. Demo Provider, MD", highlight: !1 },
            { text: "_______________________________________________", highlight: !1 },
            { text: "", highlight: !1 },
            { text: "NUTRITION PANEL:", highlight: !1, bold: !0 },
            { text: "", highlight: !1 },
            { text: "Test                  Result          Flag    Reference", highlight: !1, bold: !0 },
            { text: "─────────────────────────────────────────────────────", highlight: !1 },
            { text: "Albumin               2.9 g/dL        (L)     3.5-5.0", highlight: "keyword" },
            { text: "Prealbumin            12 mg/dL         (L)     18-38", highlight: "keyword" },
            { text: "Total Protein         5.8 g/dL         (L)     6.0-8.3", highlight: !1 },
            { text: "Transferrin           165 mg/dL        (L)     200-360", highlight: !1 },
            { text: "CRP                   18.5 mg/L        (H)     0.0-10.0", highlight: !1 },
            { text: "", highlight: !1 },
            { text: "─────────────────────────────────────────────────────", highlight: !1 },
            { text: "Note: Low albumin and prealbumin suggest malnutrition", highlight: "keyword" },
            { text: "and/or inflammatory state. Clinical correlation advised.", highlight: !1 },
            { text: "", highlight: !1 },
            { text: "Verified by: Lab Director  01/20/2026 07:30", highlight: !1 }
          ]
        }
      },
      "doc-nutr-006": {
        title: "NURSING_WEIGHTS_01_22_38001945.PDF",
        pages: 1,
        pageContent: {
          1: [
            { text: "WEIGHT MONITORING - 3 MONTH TREND", highlight: !1, bold: !0 },
            { text: "", highlight: !1 },
            { text: "Patient: Doe, Jane                    MRN: 000000", highlight: !1 },
            { text: "Date: 01/22/2026", highlight: !1 },
            { text: "_______________________________________________", highlight: !1 },
            { text: "", highlight: !1 },
            { text: "WEIGHT HISTORY:", highlight: !1, bold: !0 },
            { text: "Date          Weight        Change from Usual", highlight: !1, bold: !0 },
            { text: "─────────────────────────────────────────────", highlight: !1 },
            { text: "10/22/2025    135.0 lbs     (Usual body weight)", highlight: !1 },
            { text: "11/15/2025    132.5 lbs     -2.5 lbs", highlight: !1 },
            { text: "12/20/2025    128.0 lbs     -7.0 lbs from usual", highlight: "keyword" },
            { text: "01/15/2026    120.5 lbs     -14.5 lbs from usual", highlight: "keyword" },
            { text: "01/22/2026    118.0 lbs     -17.0 lbs from usual", highlight: "keyword" },
            { text: "", highlight: !1 },
            { text: "WEIGHT LOSS PERCENTAGE:", highlight: !1, bold: !0 },
            { text: "Total Loss: 17 lbs over 3 months", highlight: "keyword" },
            { text: "Percentage: 12.6% of usual body weight", highlight: "keyword" },
            { text: "", highlight: !1 },
            { text: "SIGNIFICANCE:", highlight: !1, bold: !0 },
            { text: ">10% weight loss in 3 months = SEVERE weight loss", highlight: "keyword" },
            { text: "Meets criteria for malnutrition diagnosis", highlight: "keyword" },
            { text: "", highlight: !1 },
            { text: "INTERVENTIONS INITIATED:", highlight: !1, bold: !0 },
            { text: "- Dietary consult completed", highlight: !1 },
            { text: "- Nutritional supplements ordered", highlight: !1 },
            { text: "- Weekly weight monitoring ongoing", highlight: !1 },
            { text: "", highlight: !1 },
            { text: "_______________________________________________", highlight: !1 },
            { text: "Documented by: RN-JD  01/22/2026 08:15", highlight: !1 }
          ]
        }
      }
    }[s];
    function o(d) {
      return d.map((l) => {
        let p = "super-split-pdf__line";
        return l.highlight === "keyword" || l.highlight === !0 ? p += " super-split-pdf__line--keyword" : l.highlight === "contextual" && (p += " super-split-pdf__line--contextual"), l.bold && (p += " super-split-pdf__line--bold"), `<div class="${p}">${l.text || "&nbsp;"}</div>`;
      }).join("");
    }
    if (r) {
      const d = r.pageContent[1], l = r.pages;
      let p = 1;
      if (n.innerHTML = `
        <style>
          .super-split-pdf { background: #525659; padding: 20px; min-height: 100%; display: flex; flex-direction: column; }
          .super-split-pdf__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; padding: 0 4px; }
          .super-split-pdf__filename { color: #cbd5e1; font-size: 11px; font-family: monospace; }
          .super-split-pdf__legend { display: flex; gap: 12px; }
          .super-split-pdf__legend-item { font-size: 10px; color: #94a3b8; display: flex; align-items: center; gap: 4px; }
          .super-split-pdf__legend-swatch { width: 12px; height: 10px; border-radius: 2px; }
          .super-split-pdf__legend-swatch--keyword { background: linear-gradient(120deg, #fef08a 0%, #fde047 100%); }
          .super-split-pdf__legend-swatch--contextual { background: linear-gradient(120deg, #bfdbfe 0%, #93c5fd 100%); }
          .super-split-pdf__paper { background: white; padding: 40px 48px; border-radius: 4px; box-shadow: 0 4px 16px rgba(0,0,0,0.3); flex: 1; min-height: 300px; }
          .super-split-pdf__line { font-family: 'Courier New', Courier, monospace; font-size: 12.5px; line-height: 1.8; color: #1f2937; margin-bottom: 1px; white-space: pre-wrap; }
          .super-split-pdf__line--keyword { background: linear-gradient(120deg, #fef08a 0%, #fde047 100%); padding: 1px 4px; margin: 1px -4px; border-radius: 2px; }
          .super-split-pdf__line--contextual { background: linear-gradient(120deg, #bfdbfe 0%, #93c5fd 100%); padding: 1px 4px; margin: 1px -4px; border-radius: 2px; }
          .super-split-pdf__line--bold { font-weight: 700; }
          .super-split-pdf__footer { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 10px; margin-top: 12px; }
          .super-split-pdf__page-btn { background: rgba(255,255,255,0.15); border: none; color: white; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: center; }
          .super-split-pdf__page-btn:hover { background: rgba(255,255,255,0.25); }
          .super-split-pdf__page-btn:disabled { opacity: 0.3; cursor: default; }
          .super-split-pdf__page-num { color: #e2e8f0; font-size: 12px; }
        </style>
        <div class="super-split-pdf">
          <div class="super-split-pdf__header">
            <span class="super-split-pdf__filename">${r.title}</span>
            <div class="super-split-pdf__legend">
              <span class="super-split-pdf__legend-item"><span class="super-split-pdf__legend-swatch super-split-pdf__legend-swatch--keyword"></span>Keyword Match</span>
              <span class="super-split-pdf__legend-item"><span class="super-split-pdf__legend-swatch super-split-pdf__legend-swatch--contextual"></span>Contextual</span>
            </div>
          </div>
          <div class="super-split-pdf__paper">
            ${o(d)}
          </div>
          ${l > 1 ? `
          <div class="super-split-pdf__footer">
            <button class="super-split-pdf__page-btn super-split-pdf__prev" disabled>&#8249;</button>
            <span class="super-split-pdf__page-num">Page 1 of ${l}</span>
            <button class="super-split-pdf__page-btn super-split-pdf__next">&#8250;</button>
          </div>` : `
          <div class="super-split-pdf__footer">
            <span class="super-split-pdf__page-num">Page 1 of 1</span>
          </div>`}
        </div>`, l > 1) {
        let g = function() {
          _.innerHTML = o(r.pageContent[p]), h.textContent = `Page ${p} of ${l}`, u.disabled = p <= 1, m.disabled = p >= l;
        };
        var c = g;
        const u = n.querySelector(".super-split-pdf__prev"), m = n.querySelector(".super-split-pdf__next"), h = n.querySelector(".super-split-pdf__page-num"), _ = n.querySelector(".super-split-pdf__paper");
        u.addEventListener("click", () => {
          p > 1 && (p--, g());
        }), m.addEventListener("click", () => {
          p < l && (p++, g());
        });
      }
    } else {
      const d = [
        { text: "PROGRESS NOTE", highlight: !1, bold: !0 },
        { text: "", highlight: !1 },
        { text: "Patient: Doe, Jane                    MRN: 000000", highlight: !1 },
        { text: "Date: 01/22/2026                      Time: 14:32", highlight: !1 },
        { text: "Provider: Dr. Demo Provider, MD", highlight: !1 },
        { text: "_______________________________________________", highlight: !1 },
        { text: "", highlight: !1 },
        { text: "SUBJECTIVE:", highlight: !1, bold: !0 },
        { text: "Patient reports mild intermittent chest discomfort,", highlight: !1 },
        { text: "not activity related. Denies shortness of breath at", highlight: !1 },
        { text: "rest. Reports compliance with medication regimen.", highlight: !1 },
        { text: "", highlight: !1 },
        { text: "OBJECTIVE:", highlight: !1, bold: !0 },
        { text: "VS: BP 138/82, HR 72 reg, RR 18, SpO2 97% RA", highlight: !1 },
        { text: "General: Alert, oriented x3, in no acute distress", highlight: !1 },
        { text: "CV: RRR, no murmurs/rubs/gallops. +1 bilateral LE edema", highlight: !1 },
        { text: "Resp: CTAB, no wheezes or crackles", highlight: !1 },
        { text: "", highlight: !1 },
        { text: "ASSESSMENT:", highlight: !1, bold: !0 },
        { text: "1. HTN — stable on current regimen", highlight: !1 },
        { text: "2. Type 2 DM — suboptimal control, HbA1c 8.2%", highlight: !1 },
        { text: "3. CKD Stage 3 — stable, GFR 42", highlight: !1 },
        { text: "", highlight: !1 },
        { text: "PLAN:", highlight: !1, bold: !0 },
        { text: "- Continue current medications", highlight: !1 },
        { text: "- Recheck HbA1c in 3 months", highlight: !1 },
        { text: "- Monitor renal function, repeat BMP in 4 weeks", highlight: !1 },
        { text: "", highlight: !1 },
        { text: "_______________________________________________", highlight: !1 },
        { text: "Electronically signed: Dr. Demo Provider, MD  01/22/2026", highlight: !1 }
      ];
      n.innerHTML = `
        <style>
          .super-split-pdf { background: #525659; padding: 20px; min-height: 100%; display: flex; flex-direction: column; }
          .super-split-pdf__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; padding: 0 4px; }
          .super-split-pdf__filename { color: #cbd5e1; font-size: 11px; font-family: monospace; }
          .super-split-pdf__paper { background: white; padding: 40px 48px; border-radius: 4px; box-shadow: 0 4px 16px rgba(0,0,0,0.3); flex: 1; min-height: 300px; }
          .super-split-pdf__line { font-family: 'Courier New', Courier, monospace; font-size: 12.5px; line-height: 1.8; color: #1f2937; margin-bottom: 1px; white-space: pre-wrap; }
          .super-split-pdf__line--bold { font-weight: 700; }
          .super-split-pdf__footer { display: flex; align-items: center; justify-content: center; padding: 10px; margin-top: 12px; }
          .super-split-pdf__page-num { color: #e2e8f0; font-size: 12px; }
        </style>
        <div class="super-split-pdf">
          <div class="super-split-pdf__header">
            <span class="super-split-pdf__filename">PROGRESS_NOTE_01_22.PDF</span>
          </div>
          <div class="super-split-pdf__paper">
            ${o(d)}
          </div>
          <div class="super-split-pdf__footer">
            <span class="super-split-pdf__page-num">Page 1 of 1</span>
          </div>
        </div>`;
    }
  }, window.renderSplitTherapy = async (n, s, a, i) => {
    await new Promise((r) => setTimeout(r, 300)), n.innerHTML = `
      <div style="padding:16px;font-family:system-ui,-apple-system,sans-serif;font-size:13px;color:#1e293b;line-height:1.6;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #e2e8f0;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:8px;height:8px;border-radius:50%;background:#f59e0b;"></div>
            <span style="font-weight:600;font-size:14px;">Therapy Documentation</span>
          </div>
          <span style="font-size:11px;color:#94a3b8;">01/20/2026 — Jane Specialist, PT, DPT</span>
        </div>
        <div style="margin-bottom:14px;">
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#f59e0b;margin-bottom:6px;">Treatment Session</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px;">
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Type:</strong> PT - Skilled</div>
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Duration:</strong> 45 min</div>
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Setting:</strong> Therapy gym</div>
            <div style="padding:6px 8px;background:#fffbeb;border-radius:4px;"><strong>Supervision:</strong> Direct</div>
          </div>
        </div>
        <div style="margin-bottom:14px;">
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#f59e0b;margin-bottom:6px;">Functional Status</div>
          <table style="width:100%;border-collapse:collapse;font-size:12px;">
            <tr><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;font-weight:500;">Transfers</td><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;">Mod A (FIM 3) → Min A (FIM 4)</td></tr>
            <tr><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;font-weight:500;">Ambulation</td><td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;">Max A x1 50ft (FW) → Mod A x1 100ft</td></tr>
            <tr><td style="padding:6px 8px;font-weight:500;">Balance (Berg)</td><td style="padding:6px 8px;">18/56 → 24/56</td></tr>
          </table>
        </div>
        <div>
          <div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#f59e0b;margin-bottom:6px;">Treatment Notes</div>
          <p style="margin:0;color:#334155;">Patient participated in therapeutic exercise program targeting LE strengthening, dynamic balance, and gait training. Left-sided hemiparesis continues to limit functional mobility. Patient required verbal cues for safety awareness during ambulation. Demonstrated improved weight shifting and stance phase on affected side compared to prior session.</p>
        </div>
        <div style="margin-top:16px;padding:10px;background:#fffbeb;border-radius:6px;border-left:3px solid #f59e0b;">
          <div style="font-size:11px;color:#92400e;">Documented by <strong>Jane Specialist, PT, DPT</strong> on 01/20/2026 at 11:15</div>
        </div>
      </div>`;
  }, window.renderSplitUda = async (n, s, a) => {
    try {
      const { uda: i, matchKeys: r } = await jn(s, a || null);
      n.innerHTML = "";
      const o = document.createElement("div");
      o.style.cssText = "width:100%;height:100%;display:flex;flex-direction:column;min-height:0;", n.appendChild(o), Se(
        j(tn, {
          uda: i,
          matchKeys: new Set(r || []),
          quoteText: a || null
        }),
        o
      );
    } catch (i) {
      console.error("[DemoMock] renderSplitUda failed:", i), n.innerHTML = `<div class="cc-pop__viewer-loading"><span>Failed to load: ${i.message}</span></div>`;
    }
  }, window.showUdaModal = async (n, s) => {
    const a = document.createElement("div");
    a.className = "super-uda-modal", a.innerHTML = `
      <div class="super-uda-modal__backdrop"></div>
      <div class="super-uda-modal__container">
        <div class="super-uda-modal__loading">
          <div class="super-uda-modal__loading-spinner"></div>
          <span>Loading assessment...</span>
        </div>
      </div>
    `, document.body.appendChild(a), document.body.style.overflow = "hidden";
    const i = a.querySelector(".super-uda-modal__container"), r = () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", o), a.remove();
    }, o = (c) => {
      c.key === "Escape" && r();
    };
    document.addEventListener("keydown", o), a.querySelector(".super-uda-modal__backdrop").addEventListener("click", r);
    try {
      const { uda: c, matchKeys: d } = await jn(n, s || null);
      i.innerHTML = "", Se(
        j(tn, {
          uda: c,
          matchKeys: new Set(d || []),
          quoteText: s || null,
          onClose: r
        }),
        i
      );
    } catch (c) {
      i.innerHTML = `<div class="super-uda-modal__error">${c.message || "Failed to load UDA"}</div>`;
    }
  }, window.QuerySendModal = {
    show(n) {
      console.log("[DemoMock] QuerySendModal.show (stub):", n?.mdsItem);
    }
  }, window.CertAPI = {
    async sendCert(n, s, a) {
      return await new Promise((i) => setTimeout(i, 300)), console.log("[DemoMock] CertAPI.sendCert:", n), t("success", "Certification sent successfully"), { success: !0 };
    },
    async skipCert(n, s) {
      return await new Promise((a) => setTimeout(a, 200)), console.log("[DemoMock] CertAPI.skipCert:", n), t("info", "Certification skipped"), { success: !0 };
    },
    async delayCert(n, s) {
      return await new Promise((a) => setTimeout(a, 200)), console.log("[DemoMock] CertAPI.delayCert:", n), t("info", "Certification delayed"), { success: !0 };
    },
    async saveClinicalReason(n, s) {
      return await new Promise((a) => setTimeout(a, 200)), console.log("[DemoMock] CertAPI.saveClinicalReason:", n, s), { success: !0 };
    },
    async unskipCert(n) {
      return await new Promise((s) => setTimeout(s, 200)), console.log("[DemoMock] CertAPI.unskipCert:", n), t("info", "Certification unskipped"), { success: !0 };
    },
    async fetchPractitioners(n, s) {
      return await new Promise((a) => setTimeout(a, 200)), [
        { id: "pract-001", firstName: "Demo", lastName: "Provider", title: "MD", name: "Dr. Demo Provider", phone: "555-0101", npi: "1234567890" },
        { id: "pract-002", firstName: "Sample", lastName: "Doctor", title: "DO", name: "Dr. Sample Doctor", phone: "555-0102", npi: "0987654321" },
        { id: "pract-003", firstName: "Jane", lastName: "Specialist", title: "NP", name: "Jane Specialist, NP", phone: "555-0103", npi: "1122334455" }
      ];
    },
    async fetchPractitionerWorkload(n) {
      return await new Promise((s) => setTimeout(s, 200)), {
        practitioner: { id: n, name: "Dr. Demo Provider" },
        stats: { pending: 3, signed: 12, overdue: 1 },
        certs: []
      };
    },
    async fetchDashboard(n, s) {
      return await new Promise((a) => setTimeout(a, 200)), { pending: 4, overdue: 1, dueSoon: 2, signedLast7Days: 3 };
    },
    async fetchCertifications(n, s, a) {
      return await new Promise((i) => setTimeout(i, 200)), window.__DEMO_CERT_DATA || [];
    },
    async fetchByPatient(n, s, a) {
      return await new Promise((r) => setTimeout(r, 200)), (window.__DEMO_CERT_DATA || []).filter((r) => r.patientId === a);
    },
    async fetchSendHistory(n) {
      return await new Promise((s) => setTimeout(s, 200)), [
        { id: "send-1", certId: n, sentAt: new Date(Date.now() - 3 * 864e5).toISOString(), practitioner: { name: "Dr. Demo Provider" }, method: "fax" }
      ];
    }
  }, window.CONFIG = { DEV_MODE: !0 }, console.log("[DemoMock] Global mocks installed");
}
function Pi({ facilityName: t, orgSlug: n }) {
  const [s, a] = v(null), [i, r] = v(!0), [o, c] = v(null), d = F(async () => {
    r(!0), c(null);
    try {
      const l = new URLSearchParams({
        facilityName: t,
        orgSlug: n,
        windowDays: "30"
      }), p = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/dashboard?${l}`,
        options: { method: "GET" }
      });
      if (!p.success)
        throw new Error(p.error || "Failed to load MDS dashboard data");
      a(p.data);
    } catch (l) {
      console.error("[MDSCommandCenter] Failed to fetch dashboard:", l), c(l.message || "Failed to load dashboard");
    } finally {
      r(!1);
    }
  }, [t, n]);
  return G(() => {
    d();
  }, [d]), { data: s, loading: i, error: o, retry: d };
}
function Ti({ facilityName: t, orgSlug: n, enabled: s = !0 }) {
  const [a, i] = v(null), [r, o] = v(!1), [c, d] = v(null);
  return G(() => {
    if (!s || !t) {
      i(null), d(null);
      return;
    }
    let l = !1;
    o(!0), d(null);
    async function p() {
      try {
        if (!(await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" })).authenticated)
          throw new Error("Please log in to view the MDS schedule");
        const m = typeof getOrg == "function" ? getOrg() : null, h = n || m?.org, _ = new URLSearchParams({
          facilityName: t,
          orgSlug: h
        }), g = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/schedule?${_}`,
          options: { method: "GET" }
        });
        if (!g.success)
          throw new Error(g.error || "Failed to load MDS schedule");
        l || i(g.data);
      } catch (u) {
        l || d(u.message || "Failed to load MDS schedule");
      } finally {
        l || o(!1);
      }
    }
    return p(), () => {
      l = !0;
    };
  }, [t, n, s]), { data: a, loading: r, error: c };
}
function Ai({ facilityName: t, orgSlug: n, enabled: s = !1 }) {
  const [a, i] = v(null), [r, o] = v(!1), [c, d] = v(null), l = F(async () => {
    if (!(!s || !t || !n)) {
      o(!0), d(null);
      try {
        const p = new URLSearchParams({ facilityName: t, orgSlug: n }), u = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/certifications/dashboard?${p}`,
          options: { method: "GET" }
        });
        if (!u.success) {
          i(null);
          return;
        }
        i(u.data || null);
      } catch (p) {
        console.warn("[Certifications] Dashboard unavailable:", p), i(null);
      } finally {
        o(!1);
      }
    }
  }, [t, n, s]);
  return G(() => {
    l();
  }, [l]), { data: a, loading: r, error: c, retry: l };
}
function nn({ facilityName: t, orgSlug: n, status: s, patientId: a }) {
  const [i, r] = v([]), [o, c] = v(!0), [d, l] = v(null), p = F(async () => {
    if (!(!t || !n)) {
      c(!0), l(null);
      try {
        const u = new URLSearchParams({ facilityName: t, orgSlug: n });
        s && u.set("status", s), a && u.set("patientId", a);
        const m = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/certifications?${u}`,
          options: { method: "GET" }
        });
        if (!m.success)
          throw new Error(m.error || "Failed to load certifications");
        r(m.data?.certifications || []);
      } catch (u) {
        console.error("[Certifications] Failed to fetch certifications:", u), l(u.message || "Failed to load certifications");
      } finally {
        c(!1);
      }
    }
  }, [t, n, s, a]);
  return G(() => {
    p();
  }, [p]), { certs: i, loading: o, error: d, refetch: p };
}
function gt({
  options: t = [],
  value: n,
  onChange: s,
  placeholder: a = "Select…",
  size: i = "default",
  searchable: r = !1,
  searchPlaceholder: o = "Search…",
  className: c = "",
  ariaLabel: d,
  align: l = "left"
}) {
  const [p, u] = v(!1), [m, h] = v(""), [_, g] = v(-1), f = ee(null), b = ee(null), y = ee(null), I = t.find((x) => x.value === n) || null;
  G(() => {
    if (!p) return;
    const x = (C) => {
      f.current && !f.current.contains(C.target) && u(!1);
    };
    return document.addEventListener("mousedown", x, !0), () => document.removeEventListener("mousedown", x, !0);
  }, [p]), G(() => {
    p && (h(""), g(-1), r && b.current && requestAnimationFrame(() => b.current?.focus({ preventScroll: !0 })));
  }, [p, r]);
  const D = m.toLowerCase(), k = m ? t.filter(
    (x) => x.label.toLowerCase().includes(D) || x.subtitle && x.subtitle.toLowerCase().includes(D) || x.badge && x.badge.toLowerCase().includes(D)
  ) : t, T = F((x) => {
    if (!p && (x.key === "Enter" || x.key === " " || x.key === "ArrowDown")) {
      x.preventDefault(), u(!0);
      return;
    }
    if (p)
      switch (x.key) {
        case "ArrowDown":
          x.preventDefault(), g((C) => Math.min(C + 1, k.length - 1));
          break;
        case "ArrowUp":
          x.preventDefault(), g((C) => Math.max(C - 1, 0));
          break;
        case "Enter":
          x.preventDefault(), _ >= 0 && k[_] && (s(k[_].value), u(!1));
          break;
        case "Escape":
          x.preventDefault(), u(!1);
          break;
        case "Tab":
          u(!1);
          break;
      }
  }, [p, _, k, s]);
  return G(() => {
    if (_ < 0 || !y.current) return;
    y.current.children[_]?.scrollIntoView({ block: "nearest" });
  }, [_]), /* @__PURE__ */ e(
    "div",
    {
      class: `ss__root${i === "compact" ? " ss__root--compact" : ""} ${c}`,
      ref: f,
      onKeyDown: T,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `ss__trigger${p ? " ss__trigger--open" : ""}`,
            onClick: () => u(!p),
            "aria-haspopup": "listbox",
            "aria-expanded": p,
            "aria-label": d,
            children: [
              /* @__PURE__ */ e("span", { class: "ss__trigger-text", children: I ? I.label : /* @__PURE__ */ e("span", { class: "ss__placeholder", children: a }) }),
              /* @__PURE__ */ e("svg", { class: `ss__chevron${p ? " ss__chevron--open" : ""}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
            ]
          }
        ),
        p && /* @__PURE__ */ e("div", { class: `ss__dropdown${l === "right" ? " ss__dropdown--right" : ""}`, role: "listbox", children: [
          r && /* @__PURE__ */ e("div", { class: "ss__search-wrap", children: [
            /* @__PURE__ */ e("svg", { class: "ss__search-icon", width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
              /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
              /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: b,
                class: "ss__search",
                type: "text",
                placeholder: o,
                value: m,
                onInput: (x) => {
                  h(x.target.value), g(-1);
                },
                autocomplete: "off"
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { class: "ss__list", ref: y, children: [
            k.map((x, C) => {
              const S = x.value === n;
              return /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  class: `ss__option${S ? " ss__option--active" : ""}${C === _ ? " ss__option--hl" : ""}`,
                  role: "option",
                  "aria-selected": S,
                  onClick: () => {
                    s(x.value), u(!1);
                  },
                  onMouseEnter: () => g(C),
                  children: [
                    /* @__PURE__ */ e("div", { class: "ss__option-body", children: [
                      /* @__PURE__ */ e("span", { class: "ss__option-label", children: x.label }),
                      x.subtitle && /* @__PURE__ */ e("span", { class: "ss__option-sub", children: x.subtitle })
                    ] }),
                    x.badge && /* @__PURE__ */ e("span", { class: "ss__option-badge", children: x.badge }),
                    S && /* @__PURE__ */ e("svg", { class: "ss__check", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 7L6 10L11 4", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                  ]
                },
                x.value
              );
            }),
            k.length === 0 && /* @__PURE__ */ e("div", { class: "ss__empty", children: "No matches" })
          ] })
        ] })
      ]
    }
  );
}
const Mi = [
  { value: "all", label: "All", color: null },
  { value: "overdue", label: "Overdue", color: "#ef4444" },
  { value: "urgent", label: "Urgent", color: "#f97316" },
  { value: "approaching", label: "Approaching", color: "#eab308" },
  { value: "on_track", label: "On Track", color: "#22c55e" }
];
function Rt({ value: t, label: n, highlight: s }) {
  return /* @__PURE__ */ e("span", { class: `mds-cc__stat${s ? " mds-cc__stat--highlight" : ""}`, children: [
    /* @__PURE__ */ e("strong", { children: t }),
    " ",
    n
  ] });
}
function Li({
  summary: t,
  facilityName: n,
  onClose: s,
  activeView: a,
  onViewChange: i,
  viewMode: r,
  onViewModeChange: o,
  isFullscreen: c,
  onToggleFullscreen: d,
  queryCount: l,
  certCount: p,
  certsEnabled: u,
  complianceGaps: m,
  payerFilter: h,
  onPayerFilterChange: _,
  classFilter: g,
  onClassFilterChange: f,
  focusFilter: b,
  onFocusFilterChange: y,
  urgencyFilter: I,
  onUrgencyFilterChange: D
}) {
  const k = t?.total ?? 0, T = t?.urgent ?? 0, A = t?.hippsImprovements ?? t?.withHippsImprovements ?? 0, x = t?.pendingQueries ?? t?.pendingQueriesCount ?? 0, C = t?.totalRevenueOpportunityPerDay ?? 0;
  return /* @__PURE__ */ e("div", { class: "mds-cc__header", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__title-row", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__title-group", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__title", children: "MDS Command Center" }),
        n && /* @__PURE__ */ e("span", { class: "mds-cc__facility-name", children: n })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__title-actions", children: [
        d && /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__icon-btn${c ? " mds-cc__icon-btn--exit" : ""}`,
            onClick: d,
            "aria-label": c ? "Exit fullscreen" : "Enter fullscreen",
            title: c ? "Exit fullscreen" : "Fullscreen",
            children: c ? /* @__PURE__ */ e(K, { children: [
              /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
                /* @__PURE__ */ e("path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }),
                /* @__PURE__ */ e("path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }),
                /* @__PURE__ */ e("path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }),
                /* @__PURE__ */ e("path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" })
              ] }),
              /* @__PURE__ */ e("span", { children: "Exit fullscreen" })
            ] }) : /* @__PURE__ */ e("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
              /* @__PURE__ */ e("path", { d: "M3 3h6" }),
              /* @__PURE__ */ e("path", { d: "M3 3v6" }),
              /* @__PURE__ */ e("path", { d: "M21 3h-6" }),
              /* @__PURE__ */ e("path", { d: "M21 3v6" }),
              /* @__PURE__ */ e("path", { d: "M3 21h6" }),
              /* @__PURE__ */ e("path", { d: "M3 21v-6" }),
              /* @__PURE__ */ e("path", { d: "M21 21h-6" }),
              /* @__PURE__ */ e("path", { d: "M21 21v-6" })
            ] })
          }
        ),
        /* @__PURE__ */ e("button", { class: "mds-cc__close-btn", onClick: s, "aria-label": "Close", children: /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) })
      ] })
    ] }),
    a !== "planner" && /* @__PURE__ */ e("div", { class: "mds-cc__stats-strip", children: [
      /* @__PURE__ */ e(Rt, { value: k, label: "assessments" }),
      /* @__PURE__ */ e("span", { class: "mds-cc__stats-sep", children: "|" }),
      /* @__PURE__ */ e(Rt, { value: T, label: "urgent", highlight: T > 0 }),
      C > 0 && /* @__PURE__ */ e(K, { children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__stats-sep", children: "|" }),
        /* @__PURE__ */ e("span", { class: "mds-cc__stat mds-cc__stat--revenue", children: [
          /* @__PURE__ */ e("strong", { children: [
            "$",
            Math.round(C),
            "/day available"
          ] }),
          A > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__stat-sub", children: [
            " across ",
            A,
            " improvements"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("span", { class: "mds-cc__stats-sep", children: "|" }),
      /* @__PURE__ */ e(Rt, { value: x, label: "pending queries", highlight: x > 0 })
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-cc__view-switcher", children: [
      /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${a === "planner" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => i("planner"),
          children: "Planner"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${a === "assessments" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => i("assessments"),
          children: "Assessments"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${a === "queries" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => i("queries"),
          children: [
            "Queries",
            l > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__view-tab-badge", children: l })
          ]
        }
      ),
      u && /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${a === "certs" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => i("certs"),
          children: [
            "Certs",
            p > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__view-tab-badge", children: p })
          ]
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${a === "compliance" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => i("compliance"),
          children: [
            "Care Plan",
            m > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__view-tab-badge mds-cc__view-tab-badge--amber", children: m })
          ]
        }
      )
    ] }),
    a === "assessments" && /* @__PURE__ */ e("div", { class: "mds-cc__filter-row", children: [
      r !== "calendar" && /* @__PURE__ */ e(K, { children: [
        /* @__PURE__ */ e(
          gt,
          {
            size: "compact",
            options: [
              { value: "all", label: "All Classes" },
              { value: "pps_payment", label: "PPS / Payment" },
              { value: "obra_cmi", label: "OBRA / CMI" },
              { value: "end_of_stay", label: "End of Stay" }
            ],
            value: g,
            onChange: f,
            ariaLabel: "Assessment class filter"
          }
        ),
        /* @__PURE__ */ e(
          gt,
          {
            size: "compact",
            options: [
              { value: "all", label: "All Payers" },
              { value: "medicare_a", label: "Medicare A" },
              { value: "medicaid", label: "Medicaid" },
              { value: "managed_care", label: "Managed Care" }
            ],
            value: h,
            onChange: _,
            ariaLabel: "Payer filter"
          }
        ),
        /* @__PURE__ */ e(
          gt,
          {
            size: "compact",
            options: [
              { value: "all", label: "All Assessments" },
              { value: "revenue", label: "Revenue Opportunities" },
              { value: "issues", label: "Has Issues" }
            ],
            value: b,
            onChange: y,
            ariaLabel: "Focus filter"
          }
        )
      ] }),
      o && /* @__PURE__ */ e("div", { class: "mds-cc__viewmode-toggle", children: [
        /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__viewmode-btn${r === "list" ? " mds-cc__viewmode-btn--active" : ""}`,
            onClick: () => o("list"),
            title: "List view",
            "aria-label": "List view",
            children: [
              /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
                /* @__PURE__ */ e("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
                /* @__PURE__ */ e("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
                /* @__PURE__ */ e("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
                /* @__PURE__ */ e("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
                /* @__PURE__ */ e("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
                /* @__PURE__ */ e("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
              ] }),
              "List"
            ]
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__viewmode-btn${r === "calendar" ? " mds-cc__viewmode-btn--active" : ""}`,
            onClick: () => o("calendar"),
            title: "Calendar view",
            "aria-label": "Calendar view",
            children: [
              /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
                /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                /* @__PURE__ */ e("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                /* @__PURE__ */ e("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                /* @__PURE__ */ e("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
              ] }),
              "Calendar"
            ]
          }
        )
      ] })
    ] }),
    a === "assessments" && r !== "calendar" && D && /* @__PURE__ */ e("div", { class: "mds-cc__urgency-pills", children: [
      Mi.map((S) => {
        const w = I === S.value;
        return /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__urgency-pill${w ? " mds-cc__urgency-pill--active" : ""}`,
            style: w && S.color ? { background: S.color, borderColor: S.color, color: "#fff" } : void 0,
            onClick: () => D(S.value),
            children: [
              S.color && /* @__PURE__ */ e("span", { class: "mds-cc__urgency-pill-dot", style: { background: w ? "#fff" : S.color } }),
              S.label
            ]
          },
          S.value
        );
      }),
      y && /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__urgency-pill mds-cc__revenue-pill${b === "revenue" ? " mds-cc__revenue-pill--active" : ""}`,
          onClick: () => y(b === "revenue" ? "all" : "revenue"),
          title: "Show only assessments with revenue opportunities",
          children: [
            /* @__PURE__ */ e("span", { class: "mds-cc__revenue-pill-icon", children: "$" }),
            "Revenue"
          ]
        }
      )
    ] })
  ] });
}
const Ei = {
  initial: { label: "Initial", cls: "cert__type-badge--initial" },
  day_14_recert: { label: "Day 14", cls: "cert__type-badge--recert" },
  day_30_recert: { label: "Day 30", cls: "cert__type-badge--recert" }
};
function bn({ type: t }) {
  const n = Ei[t];
  return n ? /* @__PURE__ */ e("span", { class: `cert__type-badge ${n.cls}`, children: n.label }) : null;
}
function $i(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function Ri(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function ua({ status: t, isDelayed: n, dueDate: s, signedAt: a }) {
  const i = $i(s), r = i !== null && i < 0, o = i !== null && i >= 0 && i <= 3;
  if ((n || t === "delayed") && r) {
    const c = Math.abs(i);
    return /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--overdue", children: [
      c,
      " DAY",
      c !== 1 ? "S" : "",
      " OVERDUE"
    ] });
  }
  if (r && (t === "pending" || t === "sent")) {
    const c = Math.abs(i);
    return /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--overdue", children: [
      c,
      " DAY",
      c !== 1 ? "S" : "",
      " OVERDUE"
    ] });
  }
  if (o && t !== "signed" && t !== "skipped") {
    const c = i === 0 ? "DUE TODAY" : `DUE IN ${i} DAY${i !== 1 ? "S" : ""}`;
    return /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--due-soon", children: c });
  }
  return t === "sent" ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--awaiting", children: "AWAITING SIGNATURE" }) : t === "signed" ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--signed", children: [
    "Signed ",
    Ri(a)
  ] }) : t === "delayed" || n ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--delayed", children: "DELAYED" }) : t === "skipped" ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--skipped", children: "SKIPPED" }) : /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--pending", children: "PENDING" });
}
function qi({ payerType: t }) {
  return t !== "managed_care" ? null : /* @__PURE__ */ e("span", { class: "cert__ma-badge", children: "MA" });
}
function Oi(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Bi(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
function pa(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function Hi(t) {
  const n = pa(t.dueDate), s = n !== null && n < 0, a = t.sends?.length > 0;
  return t.status === "skipped" ? { label: "Unskip", variant: "ghost", action: "unskip" } : t.status === "signed" ? null : s ? { label: a ? "Resend" : "Send", variant: "destructive", action: "send" } : t.status === "delayed" ? { label: a ? "Resend" : "Send", variant: "destructive", action: "send" } : a ? { label: "Resend", variant: "outline", action: "send" } : { label: "Send", variant: "primary", action: "send" };
}
function Fi({ sends: t }) {
  if (!t || t.length === 0) return null;
  const n = t.length === 1 ? `Sent to ${t[0].practitionerName}` : `Sent ${t.length} times`;
  return /* @__PURE__ */ e("span", { class: "cert__row-meta cert__row-meta--link cert__sends-summary", children: n });
}
function Gi({ sends: t }) {
  return /* @__PURE__ */ e("div", { class: "cert__sends-detail", children: t.map((n, s) => /* @__PURE__ */ e("div", { class: "cert__sends-detail-row", children: [
    /* @__PURE__ */ e("span", { class: "cert__sends-detail-name", children: [
      n.practitionerName,
      n.practitionerTitle ? `, ${n.practitionerTitle}` : ""
    ] }),
    /* @__PURE__ */ e("span", { class: "cert__sends-detail-date", children: Bi(n.sentAt) }),
    n.smsStatus && /* @__PURE__ */ e("span", { class: `cert__sends-detail-status cert__sends-detail-status--${n.smsStatus}`, children: n.smsStatus })
  ] }, s)) });
}
function Kn({ cert: t, compact: n, onSend: s, onSkip: a, onUnskip: i, onDelay: r, onEditReason: o, onViewPractitioner: c }) {
  const [d, l] = v(!1), [p, u] = v(!1), m = ee(null);
  G(() => {
    if (!d) return;
    const C = (S) => {
      m.current && !m.current.contains(S.target) && l(!1);
    };
    return document.addEventListener("click", C, !0), () => document.removeEventListener("click", C, !0);
  }, [d]);
  const h = Hi(t), _ = t.type === "day_14_recert" || t.type === "day_30_recert", g = t.status !== "skipped" && t.status !== "signed", f = t.status === "pending" && !t.isDelayed && t.status !== "signed", b = _ && t.status !== "signed", y = t.sends?.length > 0, I = pa(t.dueDate), D = I !== null && I < 0, k = I !== null && I >= 0 && I <= 3;
  let T = "";
  t.status === "signed" ? T = " cert__row--signed" : t.status === "skipped" ? T = " cert__row--skipped" : D || t.isDelayed ? T = " cert__row--overdue" : k && (T = " cert__row--due-soon");
  function A(C) {
    C.stopPropagation(), h && (h.action === "send" && s?.(t), h.action === "unskip" && i?.(t));
  }
  function x(C) {
    l(!1), C === "skip" && a?.(t), C === "delay" && r?.(t), C === "editReason" && o?.(t);
  }
  return /* @__PURE__ */ e("div", { class: `cert__row${T}`, children: [
    /* @__PURE__ */ e("div", { class: "cert__row-top", children: [
      /* @__PURE__ */ e("div", { class: "cert__row-left", children: [
        /* @__PURE__ */ e(bn, { type: t.type }),
        !n && /* @__PURE__ */ e("span", { class: "cert__row-patient", children: t.patientName }),
        !n && /* @__PURE__ */ e(qi, { payerType: t.payerType })
      ] }),
      /* @__PURE__ */ e("div", { class: "cert__row-right", children: [
        /* @__PURE__ */ e(
          ua,
          {
            status: t.status,
            isDelayed: t.isDelayed,
            dueDate: t.dueDate,
            signedAt: t.signedAt
          }
        ),
        h && /* @__PURE__ */ e(
          "button",
          {
            class: `cert__row-action cert__row-action--${h.variant}`,
            onClick: A,
            children: h.label
          }
        ),
        (g || f || b) && /* @__PURE__ */ e("div", { class: "cert__row-menu-container", ref: m, children: [
          /* @__PURE__ */ e(
            "button",
            {
              class: "cert__row-menu-btn",
              onClick: (C) => {
                C.stopPropagation(), l(!d);
              },
              "aria-label": "More actions",
              children: /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: [
                /* @__PURE__ */ e("circle", { cx: "8", cy: "3", r: "1.5" }),
                /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "1.5" }),
                /* @__PURE__ */ e("circle", { cx: "8", cy: "13", r: "1.5" })
              ] })
            }
          ),
          d && /* @__PURE__ */ e("div", { class: "cert__row-menu", children: [
            g && /* @__PURE__ */ e("button", { class: "cert__row-menu-item", onClick: () => x("skip"), children: "Skip Certification" }),
            f && /* @__PURE__ */ e("button", { class: "cert__row-menu-item", onClick: () => x("delay"), children: "Mark as Delayed" }),
            b && /* @__PURE__ */ e("button", { class: "cert__row-menu-item", onClick: () => x("editReason"), children: "Edit Clinical Reason" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__row-bottom", children: [
      t.dueDate && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Due ",
        Oi(t.dueDate)
      ] }),
      !n && t.currentMedicareDay != null && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Medicare Day ",
        t.currentMedicareDay
      ] }),
      y && /* @__PURE__ */ e("span", { onClick: (C) => {
        C.stopPropagation(), u(!p);
      }, children: /* @__PURE__ */ e(Fi, { sends: t.sends }) }),
      t.signedByName && /* @__PURE__ */ e(
        "span",
        {
          class: `cert__row-meta${t.signedByPractitionerId && c ? " cert__row-meta--link" : ""}`,
          onClick: t.signedByPractitionerId && c ? (C) => {
            C.stopPropagation(), c(t.signedByPractitionerId);
          } : void 0,
          children: [
            t.signedByName,
            t.signedByTitle ? `, ${t.signedByTitle}` : ""
          ]
        }
      )
    ] }),
    p && y && /* @__PURE__ */ e(Gi, { sends: t.sends })
  ] });
}
function Ui({ payerType: t }) {
  const n = t === "managed_care";
  return /* @__PURE__ */ e("span", { class: `cert__stay-type-badge${n ? " cert__stay-type-badge--managed" : ""}`, children: n ? "Managed" : "Med A" });
}
function Vi(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function sn(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
const zi = ["initial", "day_14_recert", "day_30_recert"], Wi = { initial: "I", day_14_recert: "14", day_30_recert: "30" };
function Qi(t) {
  if (!t) return "empty";
  const n = sn(t.dueDate), s = n !== null && n < 0;
  return t.status === "signed" ? "signed" : t.status === "skipped" ? "skipped" : s || t.isDelayed ? "overdue" : t.status === "sent" ? "sent" : n !== null && n >= 0 && n <= 3 ? "due-soon" : "pending";
}
function ji({ allCerts: t }) {
  const n = {};
  for (const s of t)
    n[s.type] = s;
  return /* @__PURE__ */ e("div", { class: "cert__chain-indicator", children: zi.map((s, a) => {
    const i = n[s], r = Qi(i);
    return /* @__PURE__ */ e("span", { class: "cert__chain-item", children: [
      a > 0 && /* @__PURE__ */ e("span", { class: "cert__chain-line" }),
      /* @__PURE__ */ e("span", { class: `cert__chain-dot cert__chain-dot--${r}` }),
      /* @__PURE__ */ e("span", { class: `cert__chain-label cert__chain-label--${r}`, children: Wi[s] })
    ] }, s);
  }) });
}
function Ki({
  stayId: t,
  displayCerts: n,
  historyCerts: s,
  allCerts: a,
  onSend: i,
  onSkip: r,
  onDelay: o,
  onUnskip: c,
  onEditReason: d,
  onViewPractitioner: l
}) {
  const [p, u] = v(!1), m = a[0], h = m.patientName, _ = m.payerType, g = m.currentMedicareDay, f = m.partAStartDate, b = n.some((D) => {
    const k = sn(D.dueDate);
    return k !== null && k < 0 || D.isDelayed;
  }), y = !b && n.some((D) => {
    const k = sn(D.dueDate);
    return k !== null && k >= 0 && k <= 3;
  });
  let I = "";
  return b ? I = " cert__stay-card--overdue" : y && (I = " cert__stay-card--due-soon"), /* @__PURE__ */ e("div", { class: `cert__stay-card${I}`, children: [
    /* @__PURE__ */ e("div", { class: "cert__stay-header", children: [
      /* @__PURE__ */ e("div", { class: "cert__stay-header-left", children: [
        /* @__PURE__ */ e("span", { class: "cert__stay-patient", children: h }),
        /* @__PURE__ */ e(Ui, { payerType: _ }),
        /* @__PURE__ */ e(ji, { allCerts: a })
      ] }),
      /* @__PURE__ */ e("div", { class: "cert__stay-header-right", children: [
        g != null && /* @__PURE__ */ e("span", { class: "cert__stay-meta", children: [
          "Day ",
          g
        ] }),
        f && /* @__PURE__ */ e("span", { class: "cert__stay-meta", children: Vi(f) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__stay-certs", children: n.map((D) => /* @__PURE__ */ e(
      Kn,
      {
        cert: D,
        compact: !0,
        onSend: i,
        onSkip: r,
        onDelay: o,
        onUnskip: c,
        onEditReason: d,
        onViewPractitioner: l
      },
      D.id
    )) }),
    s.length > 0 && /* @__PURE__ */ e("div", { class: "cert__stay-history", children: [
      /* @__PURE__ */ e(
        "button",
        {
          class: "cert__stay-history-toggle",
          onClick: () => u(!p),
          children: [
            /* @__PURE__ */ e("span", { class: "cert__stay-history-icon", children: p ? "▼" : "▶" }),
            s.length,
            " previous certification",
            s.length !== 1 ? "s" : ""
          ]
        }
      ),
      p && /* @__PURE__ */ e("div", { class: "cert__stay-history-list", children: s.map((D) => /* @__PURE__ */ e(
        Kn,
        {
          cert: D,
          compact: !0,
          onSend: i,
          onSkip: r,
          onDelay: o,
          onUnskip: c,
          onEditReason: d,
          onViewPractitioner: l
        },
        D.id
      )) })
    ] })
  ] });
}
function Pt({ isOpen: t, onClose: n, title: s, subtitle: a, children: i, actions: r = [] }) {
  const o = ee(null);
  return G(() => {
    if (!t) return;
    const c = (d) => {
      d.key === "Escape" && n();
    };
    return document.addEventListener("keydown", c), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", c), document.body.style.overflow = "";
    };
  }, [t, n]), t ? /* @__PURE__ */ e(
    "div",
    {
      class: "cm-overlay",
      ref: o,
      onClick: (c) => {
        c.target === o.current && n();
      },
      children: /* @__PURE__ */ e("div", { class: "cm", children: [
        /* @__PURE__ */ e("div", { class: "cm__header", children: [
          /* @__PURE__ */ e("div", { class: "cm__header-text", children: [
            /* @__PURE__ */ e("h2", { class: "cm__title", children: s }),
            a && /* @__PURE__ */ e("span", { class: "cm__subtitle", children: a })
          ] }),
          /* @__PURE__ */ e("button", { class: "cm__close", onClick: n, "aria-label": "Close", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", children: /* @__PURE__ */ e("path", { d: "M1 1l12 12M13 1L1 13" }) }) })
        ] }),
        /* @__PURE__ */ e("div", { class: "cm__body", children: i }),
        r.length > 0 && /* @__PURE__ */ e("div", { class: "cm__footer", children: r.map((c, d) => /* @__PURE__ */ e(
          "button",
          {
            class: `cm__btn cm__btn--${c.variant || "secondary"}`,
            onClick: c.onClick,
            disabled: c.disabled,
            children: c.label
          },
          d
        )) })
      ] })
    }
  ) : null;
}
const Yi = [
  { value: "home_health", label: "Home Health Agency" },
  { value: "facility_care", label: "Facility Care" },
  { value: "other", label: "Other" }
];
function ma(t) {
  return t ? t === "Home Health Agency" ? { option: "home_health", otherText: "" } : t === "Facility Care" ? { option: "facility_care", otherText: "" } : t.startsWith("Other: ") ? { option: "other", otherText: t.slice(7) } : { option: "other", otherText: t } : { option: "", otherText: "" };
}
function ha(t, n) {
  return t === "home_health" ? "Home Health Agency" : t === "facility_care" ? "Facility Care" : t === "other" ? `Other: ${n}` : "";
}
function an(t, n) {
  return t ? t === "other" ? n.trim().length > 0 : !0 : !1;
}
function _a({ option: t, otherText: n, onOptionChange: s, onOtherTextChange: a }) {
  return /* @__PURE__ */ e("div", { class: "cm-discharge", children: [
    Yi.map((i) => /* @__PURE__ */ e(
      "label",
      {
        class: `cm-discharge__option${t === i.value ? " cm-discharge__option--selected" : ""}`,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "radio",
              class: "cm-discharge__radio",
              name: "dischargePlan",
              value: i.value,
              checked: t === i.value,
              onChange: () => s(i.value)
            }
          ),
          /* @__PURE__ */ e("span", { class: "cm-discharge__dot" }),
          /* @__PURE__ */ e("span", { class: "cm-discharge__label", children: i.label })
        ]
      },
      i.value
    )),
    t === "other" && /* @__PURE__ */ e(
      "input",
      {
        class: "cm-input cm-discharge__other-input",
        type: "text",
        value: n,
        onInput: (i) => a(i.target.value),
        placeholder: "e.g., Assisted living, long-term care, hospice...",
        autoFocus: !0
      }
    )
  ] });
}
function ga({ isOpen: t, onClose: n, cert: s, facilityName: a, orgSlug: i, onSent: r }) {
  const [o, c] = v(""), [d, l] = v(30), [p, u] = v(""), [m, h] = v(""), [_, g] = v(""), [f, b] = v([]), [y, I] = v(!1), [D, k] = v(/* @__PURE__ */ new Set()), [T, A] = v(!1), x = s?.type === "day_14_recert" || s?.type === "day_30_recert", C = s?.isDelayed, S = s?.type === "initial" ? "Initial" : s?.type === "day_14_recert" ? "Day 14 Recert" : "Day 30 Recert";
  G(() => {
    if (!t || !s) return;
    c(s.clinicalReason || ""), l(s.estimatedDays || 30);
    const M = ma(s.planForDischarge);
    u(M.option), h(M.otherText), g(s.delayReason || ""), k(/* @__PURE__ */ new Set()), I(!0), window.CertAPI.fetchPractitioners(a, i).then((R) => b(R)).catch((R) => console.error("[Certifications] Failed to load practitioners:", R)).finally(() => I(!1));
  }, [t, s?.id]);
  function w() {
    if (D.size === 0 || x && !o.trim() || x && !an(p, m) || C && !_.trim()) return;
    A(!0);
    const M = ha(p, m);
    (x ? window.CertAPI.saveClinicalReason(s.id, { clinicalReason: o, estimatedDays: d, planForDischarge: M }) : Promise.resolve()).then(() => window.CertAPI.sendCert(s.id, [...D], C ? _ : void 0)).then(() => {
      const B = f.filter((W) => D.has(W.id)).map((W) => `${W.firstName} ${W.lastName}`), X = B.length <= 2 ? B.join(" & ") : `${B.length} practitioners`;
      window.SuperToast?.success?.(`${S} for ${s.patientName} sent to ${X}`), r?.(), n();
    }).catch((B) => {
      console.error("[Certifications] Failed to send:", B), window.SuperToast?.error?.("Failed to send certification");
    }).finally(() => A(!1));
  }
  function O(M) {
    k((R) => {
      const B = new Set(R);
      return B.has(M) ? B.delete(M) : B.add(M), B;
    });
  }
  function E() {
    k(
      (M) => M.size === f.length ? /* @__PURE__ */ new Set() : new Set(f.map((R) => R.id))
    );
  }
  if (!s) return null;
  const P = D.size > 0 && (!x || o.trim()) && (!x || an(p, m)) && (!C || _.trim()) && !T;
  return /* @__PURE__ */ e(
    Pt,
    {
      isOpen: t,
      onClose: n,
      title: "Send Certification",
      subtitle: `${s.patientName} · ${S}`,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        {
          label: T ? "Sending..." : `Send to ${D.size} practitioner${D.size !== 1 ? "s" : ""}`,
          variant: "primary",
          onClick: w,
          disabled: !P
        }
      ],
      children: [
        x && /* @__PURE__ */ e("div", { class: "cm-section", children: [
          /* @__PURE__ */ e("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ e("span", { class: "cm-section__icon", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
              /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
              /* @__PURE__ */ e("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
              /* @__PURE__ */ e("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
            ] }) }),
            /* @__PURE__ */ e("span", { class: "cm-section__label", children: "Clinical Reason" })
          ] }),
          /* @__PURE__ */ e(
            "textarea",
            {
              class: "cm-input cm-input--textarea",
              rows: 2,
              value: o,
              onInput: (M) => c(M.target.value),
              placeholder: "Reason for continued skilled nursing care..."
            }
          ),
          /* @__PURE__ */ e("div", { class: "cm-section__row", children: [
            /* @__PURE__ */ e("span", { class: "cm-section__meta", children: "Estimated stay" }),
            /* @__PURE__ */ e("div", { class: "cm-input--days-wrap", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  class: "cm-input cm-input--days",
                  type: "number",
                  min: 1,
                  value: d,
                  onInput: (M) => l(parseInt(M.target.value) || 30)
                }
              ),
              /* @__PURE__ */ e("span", { class: "cm-input--days-unit", children: "days" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { class: "cm-section__divider" }),
          /* @__PURE__ */ e("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ e("span", { class: "cm-section__icon", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ e("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
              /* @__PURE__ */ e("polyline", { points: "9 22 9 12 15 12 15 22" })
            ] }) }),
            /* @__PURE__ */ e("span", { class: "cm-section__label", children: "Plan for Discharge" })
          ] }),
          /* @__PURE__ */ e(
            _a,
            {
              option: p,
              otherText: m,
              onOptionChange: u,
              onOtherTextChange: h
            }
          )
        ] }),
        C && /* @__PURE__ */ e("div", { class: "cm-section cm-section--warn", children: [
          /* @__PURE__ */ e("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ e("span", { class: "cm-section__icon cm-section__icon--warn", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ e("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
              /* @__PURE__ */ e("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
            ] }) }),
            /* @__PURE__ */ e("span", { class: "cm-section__label", children: "Delay Reason" }),
            /* @__PURE__ */ e("span", { class: "cm-section__badge cm-section__badge--warn", children: "Required" })
          ] }),
          /* @__PURE__ */ e("p", { class: "cm-section__hint", children: "This certification is overdue. Document the reason for compliance." }),
          /* @__PURE__ */ e(
            "textarea",
            {
              class: "cm-input cm-input--textarea",
              rows: 2,
              value: _,
              onInput: (M) => g(M.target.value),
              placeholder: "Why was this certification delayed..."
            }
          )
        ] }),
        s.sends?.length > 0 && /* @__PURE__ */ e("div", { class: "cm-notice", children: [
          /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ e("path", { d: "M12 16v-4M12 8h.01" })
          ] }),
          "Previously sent to ",
          s.sends.map((M) => M.practitionerName).join(", ")
        ] }),
        /* @__PURE__ */ e("div", { class: "cm-section", children: [
          /* @__PURE__ */ e("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ e("span", { class: "cm-section__icon", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ e("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
              /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
              /* @__PURE__ */ e("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
            ] }) }),
            /* @__PURE__ */ e("span", { class: "cm-section__label", children: "Send to" }),
            /* @__PURE__ */ e("span", { class: "cm-section__count", children: [
              D.size,
              " of ",
              f.length
            ] })
          ] }),
          y ? /* @__PURE__ */ e("div", { class: "cm-loading", children: [
            /* @__PURE__ */ e("div", { class: "cm-loading__spinner" }),
            "Loading practitioners..."
          ] }) : /* @__PURE__ */ e("div", { class: "cm-practitioners", children: [
            /* @__PURE__ */ e("label", { class: "cm-pract cm-pract--all", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  class: "cm-check",
                  checked: D.size === f.length && f.length > 0,
                  onChange: E
                }
              ),
              /* @__PURE__ */ e("span", { class: "cm-check-box" }),
              /* @__PURE__ */ e("span", { class: "cm-pract__label", children: "Select all" })
            ] }),
            f.map((M) => /* @__PURE__ */ e("label", { class: `cm-pract${D.has(M.id) ? " cm-pract--selected" : ""}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  class: "cm-check",
                  checked: D.has(M.id),
                  onChange: () => O(M.id)
                }
              ),
              /* @__PURE__ */ e("span", { class: "cm-check-box" }),
              /* @__PURE__ */ e("span", { class: "cm-pract__label", children: [
                M.firstName,
                " ",
                M.lastName,
                M.title && /* @__PURE__ */ e("span", { class: "cm-pract__title", children: M.title })
              ] })
            ] }, M.id))
          ] })
        ] })
      ]
    }
  );
}
function fa({ isOpen: t, onClose: n, cert: s, onSkipped: a }) {
  const [i, r] = v(""), [o, c] = v(!1);
  function d() {
    i.trim() && (c(!0), a(i).then(() => {
      r(""), n();
    }).catch(() => c(!1)));
  }
  return /* @__PURE__ */ e(
    Pt,
    {
      isOpen: t,
      onClose: n,
      title: "Skip Certification",
      subtitle: s?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        { label: o ? "Skipping..." : "Skip", variant: "primary", onClick: d, disabled: !i.trim() || o }
      ],
      children: /* @__PURE__ */ e("div", { class: "cm-section", children: [
        /* @__PURE__ */ e("div", { class: "cm-section__head", children: /* @__PURE__ */ e("span", { class: "cm-section__label", children: "Reason for Skipping" }) }),
        /* @__PURE__ */ e(
          "textarea",
          {
            class: "cm-input cm-input--textarea",
            rows: 3,
            value: i,
            onInput: (l) => r(l.target.value),
            placeholder: "Why is this certification being skipped?"
          }
        )
      ] })
    }
  );
}
function Ji({ isOpen: t, onClose: n, cert: s, onSaved: a }) {
  const [i, r] = v(""), [o, c] = v(30), [d, l] = v(""), [p, u] = v(""), [m, h] = v(!1);
  G(() => {
    if (t && s) {
      r(s.clinicalReason || ""), c(s.estimatedDays || 30);
      const f = ma(s.planForDischarge);
      l(f.option), u(f.otherText);
    }
  }, [t, s?.id]);
  const _ = i.trim() && an(d, p) && !m;
  function g() {
    if (!_) return;
    h(!0);
    const f = ha(d, p);
    a({ clinicalReason: i, estimatedDays: o, planForDischarge: f }).then(() => n()).catch(() => h(!1));
  }
  return /* @__PURE__ */ e(
    Pt,
    {
      isOpen: t,
      onClose: n,
      title: "Edit Clinical Reason",
      subtitle: s?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        { label: m ? "Saving..." : "Save", variant: "primary", onClick: g, disabled: !_ }
      ],
      children: /* @__PURE__ */ e("div", { class: "cm-section", children: [
        /* @__PURE__ */ e("div", { class: "cm-section__head", children: [
          /* @__PURE__ */ e("span", { class: "cm-section__icon", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
            /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
            /* @__PURE__ */ e("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
            /* @__PURE__ */ e("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
          ] }) }),
          /* @__PURE__ */ e("span", { class: "cm-section__label", children: "Clinical Reason" })
        ] }),
        /* @__PURE__ */ e(
          "textarea",
          {
            class: "cm-input cm-input--textarea",
            rows: 3,
            value: i,
            onInput: (f) => r(f.target.value),
            placeholder: "Describe the clinical reason for continued skilled nursing care..."
          }
        ),
        /* @__PURE__ */ e("div", { class: "cm-section__row", children: [
          /* @__PURE__ */ e("span", { class: "cm-section__meta", children: "Estimated stay" }),
          /* @__PURE__ */ e("div", { class: "cm-input--days-wrap", children: [
            /* @__PURE__ */ e(
              "input",
              {
                class: "cm-input cm-input--days",
                type: "number",
                min: 1,
                value: o,
                onInput: (f) => c(parseInt(f.target.value) || 30)
              }
            ),
            /* @__PURE__ */ e("span", { class: "cm-input--days-unit", children: "days" })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { class: "cm-section__divider" }),
        /* @__PURE__ */ e("div", { class: "cm-section__head", children: [
          /* @__PURE__ */ e("span", { class: "cm-section__icon", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ e("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
            /* @__PURE__ */ e("polyline", { points: "9 22 9 12 15 12 15 22" })
          ] }) }),
          /* @__PURE__ */ e("span", { class: "cm-section__label", children: "Plan for Discharge" })
        ] }),
        /* @__PURE__ */ e(
          _a,
          {
            option: d,
            otherText: p,
            onOptionChange: l,
            onOtherTextChange: u
          }
        )
      ] })
    }
  );
}
function ya({ isOpen: t, onClose: n, cert: s, onDelayed: a }) {
  const [i, r] = v(""), [o, c] = v(!1);
  function d() {
    i.trim() && (c(!0), a(i).then(() => {
      r(""), n();
    }).catch(() => c(!1)));
  }
  return /* @__PURE__ */ e(
    Pt,
    {
      isOpen: t,
      onClose: n,
      title: "Mark as Delayed",
      subtitle: s?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        { label: o ? "Saving..." : "Mark Delayed", variant: "primary", onClick: d, disabled: !i.trim() || o }
      ],
      children: /* @__PURE__ */ e("div", { class: "cm-section cm-section--warn", children: [
        /* @__PURE__ */ e("div", { class: "cm-section__head", children: [
          /* @__PURE__ */ e("span", { class: "cm-section__icon cm-section__icon--warn", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ e("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
            /* @__PURE__ */ e("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
          ] }) }),
          /* @__PURE__ */ e("span", { class: "cm-section__label", children: "Delay Reason" }),
          /* @__PURE__ */ e("span", { class: "cm-section__badge cm-section__badge--warn", children: "Required" })
        ] }),
        /* @__PURE__ */ e("p", { class: "cm-section__hint", children: "This will log a delay reason for compliance. The cert remains unsent." }),
        /* @__PURE__ */ e(
          "textarea",
          {
            class: "cm-input cm-input--textarea",
            rows: 3,
            value: i,
            onInput: (l) => r(l.target.value),
            placeholder: "Why is this certification being delayed?"
          }
        )
      ] })
    }
  );
}
function Zi(t) {
  const [n, s] = v(null), [a, i] = v(!1), [r, o] = v(null), [c, d] = v(0), l = F(() => {
    d((p) => p + 1);
  }, []);
  return G(() => {
    if (!t || !window.CertAPI) {
      s(null);
      return;
    }
    let p = !1;
    return i(!0), o(null), window.CertAPI.fetchPractitionerWorkload(t).then((u) => {
      p || s(u);
    }).catch((u) => {
      p || o(u.message || "Failed to load practitioner data");
    }).finally(() => {
      p || i(!1);
    }), () => {
      p = !0;
    };
  }, [t, c]), { data: n, loading: a, error: r, retry: l };
}
function rn(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Xi({ item: t }) {
  const n = !!t.type && (t.type === "initial" || t.type.includes("recert"));
  return /* @__PURE__ */ e("div", { class: "cert__workload-row", children: [
    /* @__PURE__ */ e("div", { class: "cert__workload-row-top", children: n ? /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e(bn, { type: t.type }),
      /* @__PURE__ */ e("span", { class: "cert__workload-patient", children: t.patientName }),
      /* @__PURE__ */ e(
        ua,
        {
          status: t.status,
          isDelayed: t.isDelayed,
          dueDate: t.dueDate,
          signedAt: t.signedAt
        }
      )
    ] }) : /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("span", { class: "cert__workload-query-badge", children: "Query" }),
      /* @__PURE__ */ e("span", { class: "cert__workload-patient", children: t.patientName }),
      t.mdsItem && /* @__PURE__ */ e("span", { class: "cert__workload-meta", children: [
        t.mdsItem,
        t.mdsItemName ? ` — ${t.mdsItemName}` : ""
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { class: "cert__workload-row-bottom", children: [
      n && t.dueDate && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Due ",
        rn(t.dueDate)
      ] }),
      !n && t.sentAt && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Sent ",
        rn(t.sentAt)
      ] })
    ] })
  ] });
}
function er({ item: t }) {
  const n = !!t.type && (t.type === "initial" || t.type.includes("recert"));
  return /* @__PURE__ */ e("div", { class: "cert__workload-row", children: [
    /* @__PURE__ */ e("div", { class: "cert__workload-row-top", children: n ? /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e(bn, { type: t.type }),
      /* @__PURE__ */ e("span", { class: "cert__workload-patient", children: t.patientName })
    ] }) : /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("span", { class: "cert__workload-query-badge", children: "Query" }),
      /* @__PURE__ */ e("span", { class: "cert__workload-patient", children: t.patientName }),
      t.mdsItem && /* @__PURE__ */ e("span", { class: "cert__workload-meta", children: t.mdsItem })
    ] }) }),
    /* @__PURE__ */ e("div", { class: "cert__workload-row-bottom", children: [
      t.signedAt && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Signed ",
        rn(t.signedAt)
      ] }),
      !n && t.selectedIcd10Code && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "ICD-10: ",
        t.selectedIcd10Code
      ] })
    ] })
  ] });
}
function tr({ practitionerId: t, onBack: n }) {
  const { data: s, loading: a, error: i, retry: r } = Zi(t);
  if (a)
    return /* @__PURE__ */ e("div", { class: "cert__workload", children: [
      /* @__PURE__ */ e("div", { class: "cert__workload-header", children: /* @__PURE__ */ e("button", { class: "cert__workload-back", onClick: n, children: [
        "←",
        " Back to Certs"
      ] }) }),
      /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__spinner" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "Loading practitioner..." })
      ] })
    ] });
  if (i)
    return /* @__PURE__ */ e("div", { class: "cert__workload", children: [
      /* @__PURE__ */ e("div", { class: "cert__workload-header", children: /* @__PURE__ */ e("button", { class: "cert__workload-back", onClick: n, children: [
        "←",
        " Back to Certs"
      ] }) }),
      /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "⚠" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: i }),
        /* @__PURE__ */ e("button", { class: "mds-cc__retry-btn", onClick: r, children: "Retry" })
      ] })
    ] });
  if (!s) return null;
  const { practitioner: o, queue: c = [], recentlySigned: d = [] } = s;
  return /* @__PURE__ */ e("div", { class: "cert__workload", children: [
    /* @__PURE__ */ e("div", { class: "cert__workload-header", children: /* @__PURE__ */ e("button", { class: "cert__workload-back", onClick: n, children: [
      "←",
      " Back to Certs"
    ] }) }),
    /* @__PURE__ */ e("div", { class: "cert__workload-info", children: [
      /* @__PURE__ */ e("div", { class: "cert__workload-name", children: [
        o?.firstName,
        " ",
        o?.lastName,
        o?.title && /* @__PURE__ */ e("span", { class: "cert__workload-title", children: [
          ", ",
          o.title
        ] })
      ] }),
      o?.phone && /* @__PURE__ */ e("div", { class: "cert__workload-phone", children: o.phone })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__workload-section", children: [
      /* @__PURE__ */ e("div", { class: "cert__workload-section-header", children: [
        "In Queue",
        c.length > 0 && /* @__PURE__ */ e("span", { class: "cert__workload-section-count", children: c.length })
      ] }),
      c.length === 0 ? /* @__PURE__ */ e("div", { class: "cert__workload-empty", children: "No items in queue" }) : c.map((l, p) => /* @__PURE__ */ e(Xi, { item: l }, p))
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__workload-section", children: [
      /* @__PURE__ */ e("div", { class: "cert__workload-section-header", children: [
        "Recently Signed",
        d.length > 0 && /* @__PURE__ */ e("span", { class: "cert__workload-section-count", children: d.length })
      ] }),
      d.length === 0 ? /* @__PURE__ */ e("div", { class: "cert__workload-empty", children: "No recent signatures" }) : d.map((l, p) => /* @__PURE__ */ e(er, { item: l }, p))
    ] })
  ] });
}
const nr = [
  { id: "action", label: "Action Needed" },
  { id: "awaiting", label: "Awaiting Signature" },
  { id: "overdue", label: "Overdue" },
  { id: "dueSoon", label: "Due Soon" },
  { id: "signed", label: "Signed" }
];
function on(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function Yn(t) {
  const n = on(t.dueDate);
  return n !== null && n < 0 ? n : t.isDelayed ? -0.5 : n ?? 1 / 0;
}
const sr = [
  { id: "all", label: "All" },
  { id: "medicare", label: "Med A" },
  { id: "managed", label: "Managed" }
];
function Jn(t, n) {
  return n === "all" ? !0 : n === "managed" ? t.payerType === "managed_care" : t.payerType !== "managed_care";
}
function ar({ facilityName: t, orgSlug: n, patientId: s, patientName: a }) {
  const [i, r] = v("action"), [o, c] = v("all"), [d, l] = v(null), [p, u] = v(null), [m, h] = v(null), [_, g] = v(null), [f, b] = v(null), { certs: y, loading: I, error: D, refetch: k } = nn({
    facilityName: t,
    orgSlug: n,
    patientId: s
  }), { certs: T, loading: A, refetch: x } = nn({
    facilityName: t,
    orgSlug: n,
    patientId: s,
    status: "signed"
  }), C = F(() => {
    k(), x();
  }, [k, x]), S = Z(
    () => y.filter((q) => Jn(q, o)),
    [y, o]
  ), w = Z(
    () => T.filter((q) => Jn(q, o)),
    [T, o]
  ), O = Z(() => {
    const q = y.length + T.length;
    let H = 0, te = 0;
    for (const L of [...y, ...T])
      L.payerType === "managed_care" ? te++ : H++;
    return { all: q, medicare: H, managed: te };
  }, [y, T]), E = Z(() => {
    let q = 0, H = 0, te = 0;
    for (const L of S) {
      const $ = on(L.dueDate);
      $ !== null && $ < 0 || L.isDelayed ? q++ : $ !== null && $ >= 0 && $ <= 3 && H++, L.status === "sent" && te++;
    }
    return {
      action: S.length,
      awaiting: te,
      overdue: q,
      dueSoon: H,
      signed: w.length
    };
  }, [S, w]), P = Z(() => {
    let q;
    if (i === "signed" ? q = w : q = S.filter((L) => {
      const $ = on(L.dueDate), V = $ !== null && $ < 0, U = $ !== null && $ >= 0 && $ <= 3;
      return i === "awaiting" ? L.status === "sent" : i === "overdue" ? V || L.isDelayed : i === "dueSoon" ? U && !V : !0;
    }), q.length === 0) return [];
    const H = {};
    for (const L of q) {
      const $ = L.partAStayId || L.id;
      H[$] || (H[$] = { stayId: $, displayCerts: [], historyCerts: [] }), H[$].displayCerts.push(L);
    }
    if (i !== "signed")
      for (const L of w) {
        const $ = L.partAStayId;
        $ && H[$] && H[$].historyCerts.push(L);
      }
    const te = Object.values(H);
    for (const L of te) {
      L.displayCerts.sort((V, U) => (V.sequenceNumber || 0) - (U.sequenceNumber || 0)), L.historyCerts.sort((V, U) => (V.sequenceNumber || 0) - (U.sequenceNumber || 0));
      const $ = /* @__PURE__ */ new Set();
      L.allCerts = [];
      for (const V of [...L.displayCerts, ...L.historyCerts])
        $.has(V.id) || ($.add(V.id), L.allCerts.push(V));
      L.allCerts.sort((V, U) => (V.sequenceNumber || 0) - (U.sequenceNumber || 0));
    }
    return te.sort((L, $) => {
      const V = Math.min(...L.displayCerts.map(Yn)), U = Math.min(...$.displayCerts.map(Yn));
      return V - U;
    }), te;
  }, [S, w, i]);
  async function M(q) {
    await window.CertAPI.skipCert(m.id, q), window.SuperToast?.success?.("Certification skipped"), C();
  }
  async function R(q) {
    await window.CertAPI.delayCert(_.id, q), window.SuperToast?.success?.("Certification marked as delayed"), C();
  }
  async function B({ clinicalReason: q, estimatedDays: H, planForDischarge: te }) {
    await window.CertAPI.saveClinicalReason(f.id, { clinicalReason: q, estimatedDays: H, planForDischarge: te }), window.SuperToast?.success?.(`Clinical details updated for ${f.patientName}`), C();
  }
  async function X(q) {
    try {
      await window.CertAPI.unskipCert(q.id), window.SuperToast?.success?.("Certification restored"), C();
    } catch (H) {
      console.error("[Certifications] Failed to unskip:", H), window.SuperToast?.error?.("Failed to restore certification");
    }
  }
  const W = i === "signed" ? A : I;
  return d ? /* @__PURE__ */ e("div", { class: "cert__view", children: /* @__PURE__ */ e(
    tr,
    {
      practitionerId: d,
      onBack: () => l(null)
    }
  ) }) : /* @__PURE__ */ e("div", { class: "cert__view", children: [
    s && a && /* @__PURE__ */ e("div", { class: "cert__patient-banner", children: [
      "Showing certs for ",
      /* @__PURE__ */ e("strong", { children: a })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__filters", children: [
      /* @__PURE__ */ e("div", { class: "cert__stay-type-filter", children: sr.map((q) => /* @__PURE__ */ e(
        "button",
        {
          class: `cert__stay-type-pill${o === q.id ? " cert__stay-type-pill--active" : ""}`,
          onClick: () => c(q.id),
          children: [
            q.label,
            O[q.id] > 0 && /* @__PURE__ */ e("span", { class: "cert__stay-type-pill-count", children: O[q.id] })
          ]
        },
        q.id
      )) }),
      /* @__PURE__ */ e("div", { class: "cert__sub-tabs", children: nr.map((q) => /* @__PURE__ */ e(
        "button",
        {
          class: `cert__sub-tab${i === q.id ? " cert__sub-tab--active" : ""}`,
          onClick: () => r(q.id),
          children: [
            q.label,
            E[q.id] > 0 && /* @__PURE__ */ e("span", { class: "cert__sub-tab-count", children: E[q.id] })
          ]
        },
        q.id
      )) })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__list", children: [
      W && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__spinner" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "Loading certifications..." })
      ] }),
      !W && D && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "⚠" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: D }),
        /* @__PURE__ */ e("button", { class: "mds-cc__retry-btn", onClick: C, children: "Retry" })
      ] }),
      !W && !D && P.length === 0 && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: i === "overdue" ? "✅" : "📋" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: [
          i === "action" && "All certifications are up to date",
          i === "awaiting" && "No certifications awaiting signature",
          i === "overdue" && "No overdue certifications",
          i === "dueSoon" && "No certifications due soon",
          i === "signed" && "No certifications signed in the last 7 days"
        ] })
      ] }),
      !W && !D && P.map((q) => /* @__PURE__ */ e(
        Ki,
        {
          stayId: q.stayId,
          displayCerts: q.displayCerts,
          historyCerts: q.historyCerts,
          allCerts: q.allCerts,
          onSend: (H) => u(H),
          onSkip: (H) => h(H),
          onDelay: (H) => g(H),
          onUnskip: X,
          onEditReason: (H) => b(H),
          onViewPractitioner: (H) => l(H)
        },
        q.stayId
      ))
    ] }),
    /* @__PURE__ */ e(
      ga,
      {
        isOpen: !!p,
        onClose: () => u(null),
        cert: p,
        facilityName: t,
        orgSlug: n,
        onSent: C
      }
    ),
    /* @__PURE__ */ e(
      fa,
      {
        isOpen: !!m,
        onClose: () => h(null),
        cert: m,
        onSkipped: M
      }
    ),
    /* @__PURE__ */ e(
      ya,
      {
        isOpen: !!_,
        onClose: () => g(null),
        cert: _,
        onDelayed: R
      }
    ),
    /* @__PURE__ */ e(
      Ji,
      {
        isOpen: !!f,
        onClose: () => b(null),
        cert: f,
        onSaved: B
      }
    )
  ] });
}
function wn(t) {
  return !t || t.mode === "not_applicable" ? !1 : "isApplicable" in t ? !!t.isApplicable : !0;
}
function ir(t) {
  if (!t) return "";
  switch (t.mode) {
    case "medicare":
      return "Medicare";
    case "state_rate":
      return t.stateName || "State Rate";
    case "cmi":
      return "CMI";
    default:
      return "";
  }
}
function In(t, n = "long") {
  if (!wn(t) || !(t.delta > 0)) return null;
  const s = n === "short" ? "/d" : "/day";
  switch (t.mode) {
    case "medicare":
      return `+$${Math.round(t.delta)}${s}`;
    case "state_rate":
      return `+$${Math.round(t.delta)}${s}`;
    case "cmi":
      return `+${t.delta.toFixed(2)} CMI`;
    default:
      return null;
  }
}
function Zn(t) {
  return t ? t.replace(/_/g, "") : null;
}
function rr(t) {
  if (!wn(t) || !(t.delta > 0)) return null;
  const n = ir(t), s = !!t.isEstimated;
  switch (t.mode) {
    case "medicare": {
      const a = t.current?.total, i = t.potential?.total;
      return a == null && i == null ? null : {
        current: a != null ? `$${Math.round(a).toLocaleString()}/day` : null,
        potential: i != null ? `$${Math.round(i).toLocaleString()}/day` : null,
        delta: `+$${Math.round(t.delta).toLocaleString()}/day`,
        label: n,
        isEstimated: s
      };
    }
    case "state_rate": {
      const a = t.current?.rate, i = t.potential?.rate;
      return a == null && i == null ? null : {
        current: a != null ? `$${Math.round(a).toLocaleString()}/day` : null,
        potential: i != null ? `$${Math.round(i).toLocaleString()}/day` : null,
        delta: `+$${Math.round(t.delta).toLocaleString()}/day`,
        label: n,
        isEstimated: s,
        currentGroupCode: Zn(t.current?.groupCode),
        potentialGroupCode: Zn(t.potential?.groupCode)
      };
    }
    case "cmi": {
      const a = t.current?.total, i = t.potential?.total;
      return a == null && i == null ? null : {
        current: a != null ? `${a.toFixed(3)} CMI` : null,
        potential: i != null ? `${i.toFixed(3)} CMI` : null,
        delta: `+${t.delta.toFixed(3)} CMI`,
        label: n,
        isEstimated: s
      };
    }
    default:
      return null;
  }
}
const or = {
  overdue: "#ef4444",
  urgent: "#f97316",
  approaching: "#eab308",
  on_track: "#22c55e",
  completed: "#6b7280"
}, cr = {
  complete: { icon: "✓", cls: "done", tip: "Locked in range" },
  locked_in_range: { icon: "✓", cls: "done", tip: "Locked in range" },
  in_progress: { icon: "◐", cls: "wip", tip: "In progress" },
  near_miss: { icon: "!", cls: "warn", tip: "Outside date range" },
  out_of_range: { icon: "!", cls: "warn", tip: "Outside date range" },
  missing: { icon: "✗", cls: "miss", tip: "Not created" },
  not_created: { icon: "✗", cls: "miss", tip: "Not created" },
  not_required: null
  // hidden entirely
};
function qt({ label: t, status: n }) {
  const s = cr[n];
  return s ? /* @__PURE__ */ e("span", { class: `mds-cc__uda-badge mds-cc__uda-badge--${s.cls}`, title: s.tip, children: [
    t,
    " ",
    s.icon
  ] }) : null;
}
function va(t) {
  return t ? t.replace(/^(Medicare|Medicaid|Managed\s*Care)\s*[-\u2013\u2014]\s*/i, "").replace(/\s*\/\s*/g, " ").replace(/\s*-\s*None\s*PPS\s*/i, "").replace(/\s{2,}/g, " ").trim() || t : "";
}
function Xn(t) {
  return t.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function lr(t, n) {
  if (!t) return { dateText: "", completionText: "", deadlineText: "", cls: "na", isCompleted: !1 };
  const s = new Date(t);
  if (isNaN(s)) return { dateText: "", completionText: "", deadlineText: "", cls: "na", isCompleted: !1 };
  const a = Xn(s), i = new Date(s);
  i.setDate(i.getDate() + 14);
  const r = Xn(i);
  if ((n?.urgency || "on_track") === "completed")
    return { dateText: a, completionText: r, deadlineText: "", cls: "done", isCompleted: !0 };
  const c = n?.completionDaysRemaining ?? Math.round((i - dr()) / 864e5);
  let d, l;
  return c < 0 ? (d = `${Math.abs(c)}d overdue`, l = "overdue") : c === 0 ? (d = "Due today", l = "urgent") : c <= 3 ? (d = `${c}d left`, l = "urgent") : c <= 7 ? (d = `${c}d left`, l = "approaching") : (d = `${c}d left`, l = "ok"), { dateText: a, completionText: r, deadlineText: d, cls: l, isCompleted: !1 };
}
function dr() {
  const t = /* @__PURE__ */ new Date();
  return t.setHours(0, 0, 0, 0), t;
}
function Ot(t) {
  return t ? t === "missing" || t === "not_created" || t === "near_miss" || t === "out_of_range" || t === "in_progress" : !1;
}
function ur({ assessment: t, isExpanded: n, onToggle: s, onOpenAnalyzer: a }) {
  const {
    patientName: i,
    assessmentType: r,
    ardDate: o,
    pdpm: c,
    assessmentClass: d,
    sectionProgress: l,
    udaSummary: p,
    querySummary: u
  } = t, m = t.deadlines, h = m?.urgency || "on_track", g = d === "end_of_stay" ? null : In(c?.payment, "short"), f = lr(o, m), b = l?.total > 0 && l.completed === l.total, y = l?.total > 0 ? Math.round(l.completed / l.total * 100) : 0, I = (u?.pending || 0) + (u?.sent || 0), D = Ot(p?.bims) || Ot(p?.gg) || Ot(p?.phq9), k = h === "on_track" || h === "completed", T = f.isCompleted ? "✓ Completed" : f.deadlineText || "", A = f.isCompleted ? "done" : f.cls;
  return /* @__PURE__ */ e(
    "div",
    {
      class: `mds-cc__card${n ? " mds-cc__card--expanded" : ""}`,
      style: { borderLeftColor: or[h] || "#9ca3af" },
      onClick: s,
      role: "button",
      tabIndex: 0,
      onKeyDown: (x) => {
        (x.key === "Enter" || x.key === " ") && (x.preventDefault(), s());
      },
      children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__card-row1", children: [
          /* @__PURE__ */ e("span", { class: "mds-cc__card-name", children: i || "Unknown" }),
          T && /* @__PURE__ */ e("span", { class: `mds-cc__card-urgency mds-cc__card-urgency--${A}`, children: T }),
          /* @__PURE__ */ e("span", { class: `mds-cc__chevron${n ? " mds-cc__chevron--open" : ""}`, children: "›" })
        ] }),
        /* @__PURE__ */ e("div", { class: "mds-cc__card-row2", children: [
          /* @__PURE__ */ e("span", { class: "mds-cc__card-type", children: va(r) }),
          f.dateText && /* @__PURE__ */ e(K, { children: [
            /* @__PURE__ */ e("span", { class: "mds-cc__card-meta-sep", children: "·" }),
            /* @__PURE__ */ e("span", { class: "mds-cc__card-ard-date", children: [
              "ARD ",
              f.dateText
            ] }),
            f.completionText && !f.isCompleted && /* @__PURE__ */ e(K, { children: [
              /* @__PURE__ */ e("span", { class: "mds-cc__card-meta-sep", children: "·" }),
              /* @__PURE__ */ e("span", { class: "mds-cc__card-complete-date", children: [
                "Complete by ",
                f.completionText
              ] })
            ] })
          ] })
        ] }),
        (D || l?.total > 0 || g || I > 0) && /* @__PURE__ */ e("div", { class: "mds-cc__card-row3", children: [
          D && /* @__PURE__ */ e("span", { class: "mds-cc__card-row3-group", children: [
            /* @__PURE__ */ e(qt, { label: "BIM", status: p?.bims }),
            /* @__PURE__ */ e(qt, { label: "GG", status: p?.gg }),
            /* @__PURE__ */ e(qt, { label: "PHQ", status: p?.phq9 })
          ] }),
          l?.total > 0 && /* @__PURE__ */ e("span", { class: `mds-cc__card-progress${b ? " mds-cc__card-progress--done" : ""}${k ? " mds-cc__card-progress--subtle" : ""}`, children: [
            /* @__PURE__ */ e("span", { class: "mds-cc__card-progress-bar", children: /* @__PURE__ */ e(
              "span",
              {
                class: "mds-cc__card-progress-fill",
                style: { width: `${y}%` }
              }
            ) }),
            !k && /* @__PURE__ */ e("span", { class: "mds-cc__card-progress-text", children: [
              l.completed,
              "/",
              l.total
            ] })
          ] }),
          I > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__card-queries", children: [
            I,
            " pending ",
            I === 1 ? "query" : "queries"
          ] }),
          g && /* @__PURE__ */ e(
            "span",
            {
              class: `mds-cc__card-revenue${a ? " mds-cc__card-revenue--clickable" : ""}`,
              onClick: a ? (x) => {
                x.stopPropagation(), a();
              } : void 0,
              title: a ? "Open PDPM Analyzer" : void 0,
              role: a ? "button" : void 0,
              children: g
            }
          )
        ] })
      ]
    }
  );
}
function pr(t) {
  const [n, s] = v(null), [a, i] = v(!1), [r, o] = v(null);
  return G(() => {
    if (!t) {
      s(null), o(null);
      return;
    }
    let c = !1;
    i(!0), o(null);
    async function d() {
      try {
        if (!(await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" })).authenticated)
          throw new Error("Please log in to view detail");
        const u = getOrg()?.org, m = window.getChatFacilityInfo?.() || "", h = new URLSearchParams({
          externalAssessmentId: t,
          facilityName: m,
          orgSlug: u
        }), _ = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${h}`,
          options: { method: "GET" }
        });
        if (!_.success)
          throw new Error(_.error || "Failed to load assessment detail");
        c || s(_.data);
      } catch (l) {
        c || o(l.message || "Failed to load detail");
      } finally {
        c || i(!1);
      }
    }
    return d(), () => {
      c = !0;
    };
  }, [t]), { detailData: n, loading: a, error: r };
}
function mr(t) {
  const n = [];
  return t.impact?.nursing?.wouldChangeGroup && n.push("raises nursing"), t.impact?.ptot?.wouldChangeGroup && n.push("raises PT/OT"), t.impact?.slp?.wouldChangeGroup && n.push("raises speech therapy"), t.impact?.nta?.wouldChangeLevel && n.push("raises NTA tier"), n.length === 0 ? "" : n.join(" · ");
}
function hr(t) {
  if (!t) return "not yet sent";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "sent today" : `sent ${n}d ago`;
}
function ba(t) {
  if (!t?.checks)
    return t?.status === "failed" && t.issues?.length > 0 ? t.issues.map((a) => a.message || a) : [];
  const n = { bims: "BIMS", phq9: "PHQ-9", gg: "GG", orders: "Orders", therapyDocs: "Therapy" }, s = [];
  for (const [a, i] of Object.entries(t.checks))
    i.status === "failed" && s.push(i.message || `${n[a] || a} incomplete`);
  return s;
}
function _r({ pdpm: t, detailData: n, payment: s, sectionProgress: a, compliance: i, isEndOfStay: r }) {
  const o = [], c = n?.currentHipps || t?.currentHipps, d = n?.potentialHipps || t?.potentialHipps, l = d && d !== c && !r, u = wn(s) && s.delta > 0 ? In(s, "short") : null;
  l && u ? o.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part mds-cc__ss-part--revenue", children: [
    u,
    " opportunity"
  ] })) : l && o.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part", children: [
    "HIPPS ",
    c,
    " ",
    "→",
    " ",
    d
  ] })), a?.percentComplete != null && o.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part", children: [
    "Sections ",
    a.percentComplete,
    "%"
  ] }));
  const m = ba(i), h = n?.enhancedDetections?.filter(
    (g) => g.solverStatus === "dont_code" && (g.diagnosisPassed === !1 || g.activeStatusPassed === !1)
  ).length || 0, _ = m.length + h;
  return _ > 0 && o.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part mds-cc__ss-part--issues", children: [
    "⚠",
    " ",
    _,
    " ",
    _ === 1 ? "issue" : "issues"
  ] })), o.length === 0 ? null : /* @__PURE__ */ e("div", { class: "mds-cc__ss", children: o.map((g, f) => /* @__PURE__ */ e(K, { children: [
    f > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__ss-sep" }),
    g
  ] })) });
}
function gr({ detailData: t, onSelectItem: n }) {
  const a = (t?.enhancedDetections || []).filter(
    (i) => i.wouldChangeHipps && i.solverStatus !== "query_sent" && i.solverStatus !== "awaiting_response" && i.solverStatus !== "dont_code"
  );
  return a.length === 0 ? null : /* @__PURE__ */ e("div", { class: "mds-cc__ps", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__ps-header", children: [
      a.length,
      " revenue ",
      a.length === 1 ? "opportunity" : "opportunities"
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-cc__ps-items", children: a.map((i, r) => {
      const o = mr(i);
      return /* @__PURE__ */ e(
        "div",
        {
          class: "mds-cc__ps-item mds-cc__ps-item--clickable",
          onClick: () => n(i),
          role: "button",
          title: "View evidence",
          children: [
            /* @__PURE__ */ e("span", { class: "mds-cc__ps-item-name", children: i.itemName }),
            o && /* @__PURE__ */ e("span", { class: "mds-cc__ps-item-impact", children: [
              "— ",
              o
            ] })
          ]
        },
        r
      );
    }) })
  ] });
}
function fr() {
  return /* @__PURE__ */ e("div", { class: "mds-cc__prev-detail-loading", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
    /* @__PURE__ */ e("span", { children: "Loading assessment detail..." })
  ] });
}
function yr({ message: t }) {
  return /* @__PURE__ */ e("div", { class: "mds-cc__prev-detail-error", children: /* @__PURE__ */ e("span", { children: [
    "⚠",
    " ",
    t
  ] }) });
}
const es = {
  bims: "nursing or social services",
  phq9: "nursing",
  gg: "therapy"
}, ts = {
  bims: "BIMS",
  phq9: "PHQ-9",
  gg: "GG"
};
function vr(t) {
  if (!t) return [];
  const n = [];
  for (const s of ["bims", "phq9", "gg"]) {
    const a = t[s];
    a === "missing" || a === "not_created" ? n.push({ key: s, label: ts[s], owner: es[s], severity: "missing" }) : (a === "near_miss" || a === "out_of_range") && n.push({ key: s, label: ts[s], owner: es[s], severity: "out_of_range" });
  }
  return n;
}
function br({ assessment: t, detailData: n }) {
  const s = vr(t.udaSummary), a = ba(t.compliance), i = (n?.outstandingQueries || []).filter(
    (d) => d.status === "sent" || d.status === "pending" || d.status === "awaiting_response"
  ), r = (n?.enhancedDetections || []).filter(
    (d) => d.solverStatus === "dont_code" && (d.diagnosisPassed === !1 || d.activeStatusPassed === !1)
  );
  if (!(s.length > 0 || a.length > 0 || i.length > 0 || r.length > 0)) return null;
  const c = s.length + a.length + i.length + r.length;
  return /* @__PURE__ */ e("div", { class: "mds-cc__blockers", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__blockers-header", children: [
      "⚠",
      " ",
      c,
      " ",
      c === 1 ? "blocker" : "blockers"
    ] }),
    s.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__blockers-group", children: s.map((d) => /* @__PURE__ */ e("div", { class: "mds-cc__blocker mds-cc__blocker--uda", children: [
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-label", children: d.label }),
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-status", children: d.severity === "missing" ? "Not completed" : "Outside window" }),
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-owner", children: [
        "→",
        " ",
        d.owner
      ] })
    ] }, d.key)) }),
    i.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__blockers-group", children: i.map((d, l) => /* @__PURE__ */ e("div", { class: "mds-cc__blocker mds-cc__blocker--query", children: [
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-label", children: [
        d.mdsItem || "Query",
        ": ",
        d.mdsItemName
      ] }),
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-status", children: hr(d.sentAt) })
    ] }, l)) }),
    r.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__blockers-group", children: r.map((d, l) => {
      const p = d.mdsItem?.startsWith("I8000:") ? "I8000" : d.mdsItem, u = [];
      return d.diagnosisPassed === !1 && u.push("no dx"), d.activeStatusPassed === !1 && u.push("no active tx"), /* @__PURE__ */ e("div", { class: "mds-cc__blocker mds-cc__blocker--risk", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__blocker-label", children: [
          p,
          ": ",
          d.itemName
        ] }),
        /* @__PURE__ */ e("span", { class: "mds-cc__blocker-status", children: u.join(" · ") })
      ] }, l);
    }) }),
    a.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__blockers-group", children: a.map((d, l) => /* @__PURE__ */ e("div", { class: "mds-cc__blocker mds-cc__blocker--compliance", children: /* @__PURE__ */ e("span", { class: "mds-cc__blocker-label", children: d }) }, l)) })
  ] });
}
function wa({ assessment: t, onOpenAnalyzer: n, onSelectItem: s }) {
  const { pdpm: a, sectionProgress: i, compliance: r } = t, o = t.externalAssessmentId || t.assessmentId, c = t.assessmentClass === "end_of_stay", { detailData: d, loading: l, error: p } = pr(o), u = d?.payment || a?.payment;
  return /* @__PURE__ */ e("div", { class: "mds-cc__preview", onClick: (m) => m.stopPropagation(), children: [
    /* @__PURE__ */ e(br, { assessment: t, detailData: d }),
    /* @__PURE__ */ e(
      _r,
      {
        pdpm: a,
        detailData: d,
        payment: u,
        sectionProgress: i,
        compliance: r,
        isEndOfStay: c
      }
    ),
    l && /* @__PURE__ */ e(fr, {}),
    !l && p && /* @__PURE__ */ e(yr, { message: p }),
    !l && d && /* @__PURE__ */ e(gr, { detailData: d, onSelectItem: s }),
    /* @__PURE__ */ e("div", { class: "mds-cc__prev-actions", children: [
      /* @__PURE__ */ e("button", { class: "mds-cc__action-btn mds-cc__action-btn--primary", onClick: n, children: "Open Full Analyzer" }),
      o && /* @__PURE__ */ e(
        "button",
        {
          class: "mds-cc__action-btn mds-cc__action-btn--secondary",
          onClick: () => {
            try {
              sessionStorage.setItem("super_cc_restore", JSON.stringify({
                expandedId: o,
                openAnalyzer: !0,
                analyzerMode: "panel",
                timestamp: Date.now()
              }));
            } catch {
            }
            location.href = `${location.origin}/clinical/mds3/sectionlisting.xhtml?ESOLassessid=${o}`;
          },
          children: [
            "Go to MDS ",
            "↗"
          ]
        }
      )
    ] })
  ] });
}
const Dn = {
  overdue: "#ef4444",
  urgent: "#f97316",
  approaching: "#eab308",
  on_track: "#22c55e",
  completed: "#6b7280",
  far_out: "#9ca3af"
}, wr = {
  assessments: "MDS",
  queries: "QUERY",
  certs: "CERT"
};
function cn(t) {
  if (!t) return null;
  const n = typeof t == "string" ? /* @__PURE__ */ new Date(t + "T00:00:00") : new Date(t);
  return isNaN(n) ? null : (n.setHours(0, 0, 0, 0), n);
}
function Dt(t) {
  if (!t) return null;
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), a = String(t.getDate()).padStart(2, "0");
  return `${n}-${s}-${a}`;
}
function Ir(t) {
  return t.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
function Dr(t) {
  return t.getDate();
}
function kr(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth();
}
function Ia(t) {
  const n = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), t.getTime() === n.getTime();
}
function Nr(t) {
  const n = new Date(t);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function kt(t) {
  const n = new Date(t), a = (n.getDay() + 6) % 7;
  return n.setDate(n.getDate() - a), n.setHours(0, 0, 0, 0), n;
}
function je(t, n) {
  const s = new Date(t);
  return s.setDate(s.getDate() + n), s;
}
function ns(t, n) {
  const s = new Date(t);
  return s.setMonth(s.getMonth() + n), s;
}
function Cr(t, n, s, a) {
  const i = [];
  for (const r of t || []) {
    if (!r.ardDate) continue;
    const o = r.deadlines?.urgency || "on_track";
    i.push({
      id: r.id || r.assessmentId || r.externalAssessmentId,
      layer: "assessments",
      patientId: r.patientId,
      patientName: r.patientName,
      type: va(r.assessmentType) || r.assessmentType,
      date: r.ardDate,
      urgency: o,
      kind: "open",
      ref: r
    });
  }
  for (const r of n || [])
    r.isOpened || r.dueDate && i.push({
      id: `sched-${r.patientId}-${r.assessmentType}-${r.dueDate}`,
      layer: "assessments",
      patientId: r.patientId,
      patientName: r.patientName,
      type: Pr(r.assessmentType),
      date: r.dueDate,
      urgency: r.urgency || "on_track",
      kind: "upcoming",
      ref: r
    });
  for (const r of s || [])
    r.ardDate && i.push({
      id: `query-${r.id}`,
      layer: "queries",
      patientId: r.patientId,
      patientName: r.patientName,
      type: `Query: ${r.mdsItem || ""} ${r.mdsItemName || ""}`.trim(),
      date: r.ardDate,
      urgency: Sr(r.ardDaysRemaining),
      kind: "query",
      ref: r
    });
  for (const r of a || [])
    r.dueDate && i.push({
      id: `cert-${r.id}`,
      layer: "certs",
      patientId: r.patientId,
      patientName: r.patientName,
      type: `${r.certType || "Cert"}${r.stayType ? ` (${r.stayType})` : ""}`,
      date: r.dueDate,
      urgency: xr(r),
      kind: "cert",
      ref: r
    });
  return i;
}
function Sr(t) {
  return t == null ? "on_track" : t < 0 ? "overdue" : t <= 3 ? "urgent" : t <= 7 ? "approaching" : "on_track";
}
function xr(t) {
  const n = t.dueDate ? /* @__PURE__ */ new Date(t.dueDate + "T00:00:00") : null;
  if (!n) return "on_track";
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const a = Math.round((n - s) / 864e5);
  return a < 0 || t.isDelayed ? "overdue" : a <= 3 ? "urgent" : a <= 7 ? "approaching" : "on_track";
}
function Pr(t) {
  return t === "quarterly" ? "Quarterly" : t === "annual" ? "Annual" : t === "admission" ? "Admission" : t;
}
function Tr(t) {
  return t ? t.replace(/\s*\(\d[\d-]*\)\s*$/, "").trim().replace(/\w\S*/g, (s) => s[0].toUpperCase() + s.slice(1).toLowerCase()) : "";
}
function Ar({ anchorDate: t, itemsByDay: n, onSelectDay: s, selectedDay: a }) {
  const i = Nr(t), r = kt(i), o = [];
  for (let d = 0; d < 42; d++) o.push(je(r, d));
  return /* @__PURE__ */ e("div", { class: "mds-cc__cal-month", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-weekdays", children: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => /* @__PURE__ */ e("div", { class: "mds-cc__cal-weekday", children: d }, d)) }),
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-grid", children: o.map((d) => {
      const l = Dt(d), p = n.get(l) || [], u = kr(d, t), m = Ia(d);
      return /* @__PURE__ */ e(
        "div",
        {
          class: `mds-cc__cal-day${u ? "" : " mds-cc__cal-day--out"}${m ? " mds-cc__cal-day--today" : ""}${a === l ? " mds-cc__cal-day--selected" : ""}${p.length > 0 ? " mds-cc__cal-day--has-items" : ""}`,
          onClick: () => p.length > 0 && s(l),
          role: p.length > 0 ? "button" : void 0,
          tabIndex: p.length > 0 ? 0 : void 0,
          children: [
            /* @__PURE__ */ e("div", { class: "mds-cc__cal-day-num", children: Dr(d) }),
            p.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__cal-day-dots", children: [
              p.slice(0, 4).map((_, g) => /* @__PURE__ */ e(
                "span",
                {
                  class: "mds-cc__cal-dot",
                  style: { background: Dn[_.urgency] || "#9ca3af" }
                },
                g
              )),
              p.length > 4 && /* @__PURE__ */ e("span", { class: "mds-cc__cal-day-overflow", children: [
                "+",
                p.length - 4
              ] })
            ] })
          ]
        },
        l
      );
    }) })
  ] });
}
function Mr({ anchorDate: t, itemsByDay: n, onItemClick: s }) {
  const a = kt(t), i = [];
  for (let o = 0; o < 7; o++) i.push(je(a, o));
  const r = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return /* @__PURE__ */ e("div", { class: "mds-cc__cal-week", children: i.map((o, c) => {
    const d = Dt(o), l = n.get(d) || [], p = Ia(o);
    return /* @__PURE__ */ e("div", { class: `mds-cc__cal-week-col${p ? " mds-cc__cal-week-col--today" : ""}`, children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-header", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-week-dow", children: r[c] }),
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-week-date", children: o.toLocaleDateString("en-US", { month: "short", day: "numeric" }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-body", children: [
        l.length === 0 && /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-empty", children: "—" }),
        l.map((u) => {
          const m = u.kind === "open";
          return /* @__PURE__ */ e(
            "div",
            {
              class: `mds-cc__cal-week-item mds-cc__cal-week-item--${u.kind}${m ? " mds-cc__cal-week-item--clickable" : ""}`,
              style: { borderLeftColor: Dn[u.urgency] || "#9ca3af" },
              title: `${u.patientName} · ${u.type}`,
              onClick: m ? () => s?.(u) : void 0,
              role: m ? "button" : void 0,
              tabIndex: m ? 0 : void 0,
              children: [
                /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-patient", children: Tr(u.patientName) }),
                /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-type", children: u.type })
              ]
            },
            u.id
          );
        })
      ] })
    ] }, d);
  }) });
}
function Lr({ dayKey: t, items: n, onClose: s, onOpenAnalyzer: a }) {
  const [i, r] = v(null);
  if (G(() => {
    r(null);
  }, [t]), !t || !n || n.length === 0) return null;
  const o = cn(t), c = o ? o.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : t;
  return i && i.kind === "open" && i.ref ? /* @__PURE__ */ e(K, { children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-backdrop", onClick: s }),
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel mds-cc__cal-panel--detail", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-header", children: [
        /* @__PURE__ */ e(
          "button",
          {
            class: "mds-cc__cal-panel-back",
            onClick: () => r(null),
            "aria-label": "Back to day",
            children: [
              /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ e("polyline", { points: "15 18 9 12 15 6" }) }),
              c
            ]
          }
        ),
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-panel-close", onClick: s, "aria-label": "Close", children: /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-detail-title", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-detail-patient", children: i.patientName }),
        /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-detail-type", children: i.type })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-body", children: /* @__PURE__ */ e(
        wa,
        {
          assessment: i.ref,
          onOpenAnalyzer: () => a?.(i.ref)
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ e(K, { children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-backdrop", onClick: s }),
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-header", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-panel-date", children: c }),
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-panel-close", onClick: s, "aria-label": "Close", children: /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-count", children: [
        n.length,
        " ",
        n.length === 1 ? "assessment" : "assessments"
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-items", children: n.map((d) => {
        const l = d.kind === "open", p = wr[d.layer] || "";
        return /* @__PURE__ */ e(
          "div",
          {
            class: `mds-cc__cal-panel-item mds-cc__cal-panel-item--${d.layer}${l ? " mds-cc__cal-panel-item--clickable" : ""}`,
            style: { borderLeftColor: Dn[d.urgency] || "#9ca3af" },
            onClick: l ? () => r(d) : void 0,
            role: l ? "button" : void 0,
            tabIndex: l ? 0 : void 0,
            children: [
              /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-item-top", children: [
                /* @__PURE__ */ e("span", { class: `mds-cc__cal-panel-item-layer mds-cc__cal-panel-item-layer--${d.layer}`, children: p }),
                /* @__PURE__ */ e("span", { class: "mds-cc__cal-panel-item-patient", children: d.patientName })
              ] }),
              /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-item-meta", children: [
                d.type,
                d.kind === "upcoming" && /* @__PURE__ */ e("span", { class: "mds-cc__cal-panel-item-badge", children: "Not opened" })
              ] }),
              l && /* @__PURE__ */ e("span", { class: "mds-cc__cal-panel-item-chevron", children: "›" })
            ]
          },
          d.id
        );
      }) })
    ] })
  ] });
}
function Bt({ label: t, count: n, active: s, color: a, onToggle: i }) {
  return /* @__PURE__ */ e(
    "button",
    {
      class: `mds-cc__cal-layer${s ? " mds-cc__cal-layer--active" : ""}`,
      style: s ? { borderColor: a, color: a } : void 0,
      onClick: i,
      type: "button",
      children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-layer-dot", style: { background: s ? a : "#d1d5db" } }),
        t,
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-layer-count", children: n })
      ]
    }
  );
}
const Er = { assessments: !0, queries: !0, certs: !0 };
function $r({
  dashboardAssessments: t,
  scheduleItems: n,
  outstandingQueries: s,
  certs: a,
  onJumpToAssessment: i
}) {
  const [r, o] = v("month"), [c, d] = v(Er), l = Z(
    () => Cr(t, n, s, a),
    [t, n, s, a]
  ), p = Z(
    () => l.filter((w) => c[w.layer]),
    [l, c]
  ), u = Z(() => {
    const w = /* @__PURE__ */ new Map();
    for (const E of p) {
      const P = E.date, M = w.get(P) || [];
      M.push(E), w.set(P, M);
    }
    const O = { overdue: 0, urgent: 1, approaching: 2, on_track: 3, far_out: 4, completed: 5 };
    for (const E of w.values())
      E.sort((P, M) => (O[P.urgency] ?? 9) - (O[M.urgency] ?? 9));
    return w;
  }, [p]), m = Z(() => {
    const w = /* @__PURE__ */ new Date();
    if (w.setHours(0, 0, 0, 0), p.length === 0) return w;
    const O = `${w.getFullYear()}-${String(w.getMonth() + 1).padStart(2, "0")}`;
    if (p.some((B) => (B.date || "").startsWith(O))) return w;
    const M = [...p].sort((B, X) => (B.date || "").localeCompare(X.date || ""))[0];
    return cn(M.date) || w;
  }, [p]), [h, _] = v(m), [g, f] = v(null), b = ee(!1);
  G(() => {
    b.current || _(m);
  }, [m]);
  const y = g ? u.get(g) : null, D = Z(() => {
    if (r === "month") {
      const M = `${h.getFullYear()}-${String(h.getMonth() + 1).padStart(2, "0")}`;
      return p.filter((R) => !(R.date || "").startsWith(M));
    }
    const w = kt(h), O = je(w, 6), E = Dt(w), P = Dt(O);
    return p.filter((M) => (M.date || "") < E || (M.date || "") > P);
  }, [p, h, r]).filter((w) => w.urgency === "overdue" || w.urgency === "urgent").length;
  function k() {
    b.current = !0, f(null), _(r === "month" ? ns(h, -1) : je(h, -7));
  }
  function T() {
    b.current = !0, f(null), _(r === "month" ? ns(h, 1) : je(h, 7));
  }
  function A() {
    b.current = !0, f(null);
    const w = /* @__PURE__ */ new Date();
    w.setHours(0, 0, 0, 0), _(w);
  }
  function x() {
    const w = p.filter((P) => P.urgency === "overdue" || P.urgency === "urgent");
    if (w.length === 0) return;
    const O = [...w].sort((P, M) => (P.date || "").localeCompare(M.date || "")), E = cn(O[0].date);
    E && (b.current = !0, f(null), _(E));
  }
  function C(w) {
    if (i && w.kind === "open" && w.ref) {
      const O = w.ref.id || w.ref.assessmentId || w.ref.externalAssessmentId;
      i(O);
    }
  }
  const S = r === "month" ? Ir(h) : `Week of ${kt(h).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
  return /* @__PURE__ */ e("div", { class: "mds-cc__cal", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-toolbar", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-nav", children: [
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-nav-btn", onClick: k, "aria-label": "Previous", children: "‹" }),
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-today-btn", onClick: A, children: "Today" }),
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-nav-btn", onClick: T, "aria-label": "Next", children: "›" }),
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-label", children: S })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-mode", children: [
        /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__cal-mode-btn${r === "month" ? " mds-cc__cal-mode-btn--active" : ""}`,
            onClick: () => {
              o("month"), f(null);
            },
            children: "Month"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__cal-mode-btn${r === "week" ? " mds-cc__cal-mode-btn--active" : ""}`,
            onClick: () => {
              o("week"), f(null);
            },
            children: "Week"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-layers", children: [
      /* @__PURE__ */ e(
        Bt,
        {
          label: "Assessments",
          count: l.filter((w) => w.layer === "assessments").length,
          active: c.assessments,
          color: "#6366f1",
          onToggle: () => d((w) => ({ ...w, assessments: !w.assessments }))
        }
      ),
      /* @__PURE__ */ e(
        Bt,
        {
          label: "Queries",
          count: l.filter((w) => w.layer === "queries").length,
          active: c.queries,
          color: "#a855f7",
          onToggle: () => d((w) => ({ ...w, queries: !w.queries }))
        }
      ),
      /* @__PURE__ */ e(
        Bt,
        {
          label: "Certs",
          count: l.filter((w) => w.layer === "certs").length,
          active: c.certs,
          color: "#0891b2",
          onToggle: () => d((w) => ({ ...w, certs: !w.certs }))
        }
      )
    ] }),
    D > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__cal-banner", onClick: x, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "mds-cc__cal-banner-icon", children: "⚠" }),
      /* @__PURE__ */ e("span", { children: [
        /* @__PURE__ */ e("strong", { children: D }),
        " overdue ",
        D === 1 ? "item" : "items",
        " outside this ",
        r
      ] }),
      /* @__PURE__ */ e("span", { class: "mds-cc__cal-banner-action", children: "Jump to earliest ›" })
    ] }),
    r === "month" && /* @__PURE__ */ e(
      Ar,
      {
        anchorDate: h,
        itemsByDay: u,
        onSelectDay: f,
        selectedDay: g
      }
    ),
    r === "week" && /* @__PURE__ */ e(
      Mr,
      {
        anchorDate: h,
        itemsByDay: u,
        onItemClick: C
      }
    ),
    r === "month" && y && /* @__PURE__ */ e(
      Lr,
      {
        dayKey: g,
        items: y,
        onClose: () => f(null),
        onOpenAnalyzer: (w) => {
          f(null), i?.(w.id || w.assessmentId || w.externalAssessmentId);
        }
      }
    )
  ] });
}
function Da(t, n, s) {
  const [a, i] = v(null), [r, o] = v(!1), [c, d] = v(null);
  return G(() => {
    if (!t || !s?.assessmentId) return;
    let l = !1;
    i(null), d(null), o(!0);
    async function p() {
      try {
        const m = getOrg()?.org, h = window.getChatFacilityInfo?.() || "";
        if (!m || !h)
          throw new Error("Could not determine organization or facility");
        const _ = t.includes(":") ? t.split(":")[0] : t;
        let g = `/api/extension/mds/items/${encodeURIComponent(_)}?externalAssessmentId=${s.assessmentId}&facilityName=${encodeURIComponent(h)}&orgSlug=${encodeURIComponent(m)}`;
        n && (g += `&categoryKey=${encodeURIComponent(n)}`), chrome.runtime.sendMessage({ type: "API_REQUEST", endpoint: g }, (f) => {
          l || (f?.success ? i(f.data) : d(f?.error || "Failed to load item detail"), o(!1));
        });
      } catch (u) {
        l || (d(u.message || "Failed to load item detail"), o(!1));
      }
    }
    return p(), () => {
      l = !0;
    };
  }, [t, n, s?.assessmentId]), { data: a, loading: r, error: c };
}
function kn(t, n) {
  if (n) {
    if (n.startsWith("order-")) return "order";
    if (n.startsWith("mar-")) return "mar";
    if (n.startsWith("lab-")) return "lab-result";
  }
  if (!t) return "document";
  const s = t.toLowerCase();
  return s.includes("dc_summary") || s.includes("discharge") ? "progress-note" : s.includes("lab") ? "lab-result" : s.includes("order") ? "order" : s.includes("mar") ? "mar" : s.includes("vital") ? "vital-signs" : s.includes("nursing") ? "nursing-note" : s.includes("history") || s.includes("h&p") || s.includes("physical") || s.includes("eval") || s.includes("st ") || s.includes("slp") ? "progress-note" : "document";
}
const Nn = {
  order: "Order",
  mar: "MAR",
  "lab-result": "Lab",
  "progress-note": "Progress Note",
  "nursing-note": "Nursing Note",
  "vital-signs": "Vitals",
  "therapy-doc": "Therapy Doc",
  document: "Document"
};
function me(t) {
  const n = t.sourceType || "", s = t.sourceId || t.id || "", a = t.type || "", i = t.evidenceId || s;
  if (s && s.includes("-chunk-"))
    return { viewerType: "document", id: s.split("-chunk-")[0], chunk: parseInt(s.split("-chunk-")[1], 10) };
  if (n === "progress-note" && s) return { viewerType: "clinical-note", id: s };
  if (n === "therapy-doc" && s) return { viewerType: "therapy-document", id: s };
  if (n === "document" && s) return { viewerType: "document", id: s };
  if (n === "uda") {
    const r = (s || i || "").replace(/^uda-/, "");
    if (r) return { viewerType: "uda", id: r };
  }
  if (a === "clinical_note" && s)
    return {
      viewerType: "clinical-note",
      id: s.replace(/^pcc-prognote-/, "").replace(/^pcc-practnote-/, "").replace(/^patient-practnote-/, "")
    };
  if (a === "therapy_document" && s)
    return { viewerType: "therapy-document", id: s.replace(/^therapy-doc-/, "") };
  if (a === "document" && s) return { viewerType: "document", id: s };
  if (a === "order" && s) return { viewerType: "order", id: s };
  if (i) {
    if (i.startsWith("therapy-doc-")) return { viewerType: "therapy-document", id: i.replace("therapy-doc-", "") };
    if (i.startsWith("pcc-prognote-")) return { viewerType: "clinical-note", id: i.replace("pcc-prognote-", "") };
    if (i.startsWith("pcc-practnote-")) return { viewerType: "clinical-note", id: i.replace("pcc-practnote-", "") };
    if (i.startsWith("patient-practnote-")) return { viewerType: "clinical-note", id: i.replace("patient-practnote-", "") };
    if (i.includes("-chunk-")) return { viewerType: "document", id: i.split("-chunk-")[0], chunk: parseInt(i.split("-chunk-")[1], 10) };
    if (i.startsWith("uda-")) return { viewerType: "uda", id: i.replace("uda-", "") };
  }
  return { viewerType: null, id: null };
}
function Rr(t) {
  const n = me(t), s = t.quoteText || t.quote || t.snippet || "";
  if (n.viewerType === "clinical-note" && n.id)
    return window.showClinicalNoteModal?.(n.id, s || null);
  if (n.viewerType === "therapy-document" && n.id)
    return window.showTherapyDocModal?.(n.id, s);
  if (n.viewerType === "document" && n.id)
    return window.showDocumentModal?.(n.id, t.wordBlocks || []);
  if (n.viewerType === "uda" && n.id)
    return window.showUdaModal?.(n.id, s, t.patientId || null);
  const a = t.sourceId || t.evidenceId || "";
  if ((t.sourceType === "order" || a.startsWith("order-")) && window.showAdministrationModal)
    return window.showAdministrationModal(a.replace(/^order-/, ""));
  window.SuperDocViewer?.open(t);
}
function qr(t) {
  const n = me(t);
  return t.sourceType === "order" || (t.evidenceId || "").startsWith("order-") ? "View Administrations" : n.viewerType === "therapy-document" ? "View Document" : n.viewerType === "clinical-note" ? "View Note" : n.viewerType === "document" ? "View PDF" : n.viewerType === "uda" ? "View Assessment" : null;
}
const ss = () => /* @__PURE__ */ e("svg", { class: "sid__step-icon sid__step-icon--pass", viewBox: "0 0 20 20", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ e("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clip-rule": "evenodd" }) }), as = () => /* @__PURE__ */ e("svg", { class: "sid__step-icon sid__step-icon--fail", viewBox: "0 0 20 20", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ e("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", "clip-rule": "evenodd" }) }), ka = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
function is(t) {
  const n = t.sourceType || t.type || "", s = t.evidenceId || t.sourceId || "";
  return n === "order" || n === "mar" || n === "medication" || s.startsWith("order-") || s.startsWith("admin-") || s.startsWith("mar-") ? "orders" : n === "progress-note" || n === "nursing-note" || n === "clinical_note" || t.type === "clinical_note" || s.startsWith("pcc-prognote-") || s.startsWith("pcc-practnote-") || s.startsWith("patient-practnote-") ? "notes" : n === "document" || n === "therapy-doc" || t.type === "document" || t.type === "therapy_document" || s.startsWith("therapy-doc-") || s.includes("-chunk-") ? "documents" : n ? "other" : "documents";
}
const Or = { orders: "Orders", notes: "Notes", documents: "Documents", other: "Other" };
function Br({ fall: t }) {
  const n = t.incidentDate ? new Date(t.incidentDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";
  let s = "No injury", a = "";
  return t.hasMajorInjury ? (s = "Major injury", a = "super-fall__injury--major", t.injuryTypes?.length && (s += `: ${t.injuryTypes.join(", ")}`)) : t.hasInjury && (s = "Minor injury", a = "super-fall__injury--minor", t.injuryTypes?.length && (s += `: ${t.injuryTypes.join(", ")}`)), /* @__PURE__ */ e("div", { class: "super-fall-row", onClick: () => {
    t.incidentId && window.showIncidentDetailModal && window.showIncidentDetailModal(t.incidentId);
  }, role: "button", children: [
    /* @__PURE__ */ e("div", { class: "super-fall__header", children: [
      /* @__PURE__ */ e("span", { class: "super-fall__date", children: n }),
      /* @__PURE__ */ e("span", { class: "super-fall__type", children: t.incidentType || "Fall" })
    ] }),
    t.residentName && /* @__PURE__ */ e("div", { class: "super-fall__resident", children: t.residentName }),
    /* @__PURE__ */ e("div", { class: `super-fall__injury ${a}`, children: s }),
    t.incidentId && /* @__PURE__ */ e("div", { class: "super-fall__action", children: [
      /* @__PURE__ */ e("span", { children: "View Incident" }),
      /* @__PURE__ */ e(ka, {})
    ] })
  ] });
}
function Hr({ ev: t, index: n, onViewSource: s }) {
  const a = t.quoteText || t.orderDescription || t.quote || t.snippet || t.text || "";
  if (!a && !t.rationale) return null;
  const i = t.sourceType || kn(t.displayName, t.evidenceId), r = t.displayName || Nn[i] || i, o = qr(t), c = !!o;
  return /* @__PURE__ */ e(
    "div",
    {
      class: `sid__ev-card${c ? " sid__ev-card--clickable" : ""}`,
      onClick: c ? () => {
        if (s) {
          const l = me(t), p = t.sourceType === "order" || (t.evidenceId || "").startsWith("order-"), u = l.viewerType;
          if (u === "document" || u === "clinical-note" || u === "therapy-document" || p) {
            s(t, n);
            return;
          }
        }
        Rr(t);
      } : void 0,
      role: c ? "button" : void 0,
      children: [
        /* @__PURE__ */ e("div", { class: "sid__ev-header", children: /* @__PURE__ */ e("span", { class: `sid__ev-type sid__ev-type--${i}`, children: r }) }),
        a && /* @__PURE__ */ e("div", { class: "sid__ev-quote", children: a }),
        t.rationale && /* @__PURE__ */ e("div", { class: "sid__ev-rationale", children: t.rationale }),
        c && /* @__PURE__ */ e("div", { class: "sid__ev-action", children: [
          /* @__PURE__ */ e("span", { children: o }),
          /* @__PURE__ */ e(ka, {})
        ] })
      ]
    }
  );
}
function ct({ label: t, impact: n }) {
  if (!n || !n.wouldChangeGroup && !n.wouldChangeLevel) return null;
  const s = n.currentGroup || n.currentLevel || n.currentPaymentGroup, a = n.newGroup || n.newLevel || n.newPaymentGroup;
  return /* @__PURE__ */ e("span", { class: "sid__impact", children: [
    t,
    " ",
    /* @__PURE__ */ e("span", { class: "sid__impact-from", children: s }),
    " → ",
    /* @__PURE__ */ e("span", { class: "sid__impact-to", children: a })
  ] });
}
function Fr({ diagnosisSummary: t, treatmentSummary: n, validation: s }) {
  const a = s?.diagnosisCheck?.passed ?? s?.diagnosisPassed, i = s?.treatmentCheck?.passed ?? s?.activeStatusPassed;
  return /* @__PURE__ */ e("div", { class: "sid__steps", children: [
    /* @__PURE__ */ e("div", { class: `sid__step ${a ? "sid__step--pass" : "sid__step--fail"}`, children: [
      a ? /* @__PURE__ */ e(ss, {}) : /* @__PURE__ */ e(as, {}),
      /* @__PURE__ */ e("div", { class: "sid__step-content", children: [
        /* @__PURE__ */ e("div", { class: "sid__step-label", children: "Diagnosis" }),
        t && /* @__PURE__ */ e("div", { class: "sid__step-summary", children: t })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: `sid__step ${i ? "sid__step--pass" : "sid__step--fail"}`, children: [
      i ? /* @__PURE__ */ e(ss, {}) : /* @__PURE__ */ e(as, {}),
      /* @__PURE__ */ e("div", { class: "sid__step-content", children: [
        /* @__PURE__ */ e("div", { class: "sid__step-label", children: "Treatment" }),
        n && /* @__PURE__ */ e("div", { class: "sid__step-summary", children: n })
      ] })
    ] })
  ] });
}
function Gr({ rationale: t }) {
  return t ? /* @__PURE__ */ e("div", { class: "sid__rationale", children: [
    /* @__PURE__ */ e("div", { class: "sid__rationale-label", children: "Rationale" }),
    t
  ] }) : null;
}
function Ur({ carePlan: t }) {
  if (!t) return null;
  const [n, s] = v(!1), a = t.onCarePlan, i = t.items || [];
  return /* @__PURE__ */ e("div", { class: "sid__careplan", children: [
    /* @__PURE__ */ e(
      "button",
      {
        class: "sid__careplan-toggle",
        type: "button",
        onClick: () => i.length > 0 && s(!n),
        children: [
          /* @__PURE__ */ e("span", { class: `sid__careplan-dot ${a ? "sid__careplan-dot--on" : "sid__careplan-dot--off"}` }),
          /* @__PURE__ */ e("span", { class: "sid__careplan-title", children: "Care Plan" }),
          /* @__PURE__ */ e("span", { class: "sid__careplan-status", children: a ? "On Care Plan" : "Not on Care Plan" }),
          i.length > 0 && /* @__PURE__ */ e("span", { class: `sid__findings-arrow ${n ? "sid__findings-arrow--open" : ""}`, children: "▶" })
        ]
      }
    ),
    n && i.length > 0 && /* @__PURE__ */ e("ul", { class: "sid__careplan-items", children: i.map((r, o) => /* @__PURE__ */ e("li", { children: r }, o)) })
  ] });
}
function Na({ variant: t = "compact", data: n, detectionItem: s, mdsItem: a, onViewSource: i, onDismiss: r, dismissing: o, assessmentId: c }) {
  const d = t === "full", l = n?.item, p = !!l?.columns, u = l && !p, m = !!(n?.diagnosisSummary || n?.treatmentSummary);
  let h = l?.status;
  !h && p && (h = Object.values(l.columns || {}).some((re) => re?.answer?.toLowerCase() === "yes") ? "code" : "dont_code");
  const _ = h === "needs_physician_query", g = h === "code" || h === "recommend_coding", f = _ ? "sid__verdict-dot--query" : g ? "sid__verdict-dot--code" : "sid__verdict-dot--no-code", b = _ ? "Needs Query" : g ? "Recommend Coding" : h?.replace(/_/g, " ") || "Don't Code", y = l?.evidence || l?.queryEvidence || [], I = [];
  if (p) {
    const Q = /* @__PURE__ */ new Set();
    for (const re of Object.values(l.columns || {}))
      re?.evidence && re.evidence.forEach((he) => {
        const Y = he.sourceId || he.quote || JSON.stringify(he);
        Q.has(Y) || (Q.add(Y), I.push(he));
      });
  }
  const D = u ? y : I, [k, T] = v(!1), [A, x] = v(null), C = {};
  D.forEach((Q) => {
    const re = is(Q);
    C[re] = (C[re] || 0) + 1;
  });
  const S = Object.keys(C).sort(), w = S.length > 1, O = A ? D.filter((Q) => is(Q) === A) : D, E = k ? O : O.slice(0, 4), P = l?.keyFindings || [], [M, R] = v(d), B = s?.impact, X = B && (B.slp || B.nta || B.nursing || B.ptot), W = l?.columns || {}, q = Object.keys(W), [H, te] = v(q[0] || "A"), L = W[H], $ = l?.subItems || [], [V, U] = v(!1), [J, ne] = v(""), se = a?.startsWith("I8000:") ? "I8000" : a;
  return /* @__PURE__ */ e(K, { children: [
    /* @__PURE__ */ e("div", { class: "sid__verdict", children: [
      /* @__PURE__ */ e("span", { class: `sid__verdict-dot ${f}` }),
      /* @__PURE__ */ e("span", { class: "sid__verdict-text", children: b })
    ] }),
    m && /* @__PURE__ */ e(
      Fr,
      {
        diagnosisSummary: n.diagnosisSummary,
        treatmentSummary: n.treatmentSummary,
        validation: l?.validation
      }
    ),
    m && n?.carePlan && /* @__PURE__ */ e(Ur, { carePlan: n.carePlan }),
    !m && p && L && /* @__PURE__ */ e("div", { class: "sid__rationale", children: [
      /* @__PURE__ */ e("div", { class: "sid__col-answer", children: [
        /* @__PURE__ */ e("span", { class: "sid__col-label", children: [
          "Column ",
          H,
          ":"
        ] }),
        /* @__PURE__ */ e("span", { class: `sid__col-badge ${L.answer?.toLowerCase() === "yes" ? "sid__col-badge--yes" : "sid__col-badge--no"}`, children: L.answer?.toUpperCase() }),
        (L.firstAdministered || L.lastAdministered) && /* @__PURE__ */ e("span", { class: "sid__col-dates", children: [
          L.firstAdministered,
          L.firstAdministered && L.lastAdministered && " – ",
          L.lastAdministered
        ] })
      ] }),
      L.rationale && /* @__PURE__ */ e("div", { children: L.rationale })
    ] }),
    !m && !p && /* @__PURE__ */ e(Gr, { rationale: l?.rationale }),
    p && q.length > 1 && /* @__PURE__ */ e("div", { class: "sid__coltabs", children: q.map((Q) => {
      const he = W[Q]?.answer?.toLowerCase() === "yes";
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `sid__coltab ${H === Q ? "sid__coltab--on" : ""}`,
          onClick: () => te(Q),
          children: [
            "Col ",
            Q,
            /* @__PURE__ */ e("span", { class: `sid__coltab-dot ${he ? "sid__coltab-dot--yes" : ""}` })
          ]
        },
        Q
      );
    }) }),
    $.length > 0 && /* @__PURE__ */ e("div", { class: "sid__subs", children: $.map((Q, re) => {
      const he = Q.columns?.A;
      if (!he) return null;
      const Y = he.answer?.toLowerCase() === "yes";
      return /* @__PURE__ */ e("div", { class: `sid__sub ${Y ? "sid__sub--on" : ""}`, children: [
        /* @__PURE__ */ e("span", { class: `sid__sub-dot ${Y ? "sid__sub-dot--yes" : ""}`, children: Y ? "✓" : "–" }),
        /* @__PURE__ */ e("span", { class: "sid__sub-name", children: Q.description })
      ] }, Q.mdsItem || re);
    }) }),
    d && X && /* @__PURE__ */ e("div", { class: "sid__impacts", children: [
      /* @__PURE__ */ e(ct, { label: "NTA", impact: B.nta }),
      /* @__PURE__ */ e(ct, { label: "Nursing", impact: B.nursing }),
      /* @__PURE__ */ e(ct, { label: "SLP", impact: B.slp }),
      /* @__PURE__ */ e(ct, { label: "PT/OT", impact: B.ptot })
    ] }),
    l?.falls?.length > 0 && /* @__PURE__ */ e("div", { class: "super-falls-section", children: [
      /* @__PURE__ */ e("div", { class: "super-falls-section__label", children: [
        "Falls (",
        l.fallCount ?? l.falls.length,
        ")"
      ] }),
      l.lookbackWindow && /* @__PURE__ */ e("div", { class: "super-lookback-info", children: [
        "Lookback: ",
        l.lookbackWindow.startDate,
        " – ",
        l.lookbackWindow.endDate,
        " (",
        l.lookbackWindow.daysCovered,
        " days)"
      ] }),
      /* @__PURE__ */ e("div", { class: "super-falls-list", children: l.falls.map((Q, re) => /* @__PURE__ */ e(Br, { fall: Q }, Q.incidentId || re)) })
    ] }),
    D.length > 0 && /* @__PURE__ */ e("div", { class: "sid__evidence", children: [
      /* @__PURE__ */ e("div", { class: "sid__ev-label", children: [
        "Evidence (",
        D.length,
        ")"
      ] }),
      w && /* @__PURE__ */ e("div", { class: "sid__ev-filters", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `sid__ev-chip ${A === null ? "sid__ev-chip--active" : ""}`,
            onClick: () => {
              x(null), T(!1);
            },
            children: [
              "All (",
              D.length,
              ")"
            ]
          }
        ),
        S.map((Q) => /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `sid__ev-chip ${A === Q ? "sid__ev-chip--active" : ""}`,
            onClick: () => {
              x(A === Q ? null : Q), T(!1);
            },
            children: [
              Or[Q] || Q,
              " (",
              C[Q],
              ")"
            ]
          },
          Q
        ))
      ] }),
      /* @__PURE__ */ e("div", { class: "sid__ev-list", children: E.map((Q, re) => /* @__PURE__ */ e(Hr, { ev: Q, index: re, onViewSource: i }, re)) }),
      O.length > 4 && !k && /* @__PURE__ */ e("button", { class: "sid__ev-show-more", type: "button", onClick: () => T(!0), children: [
        "Show all ",
        O.length,
        " ↓"
      ] })
    ] }),
    P.length > 0 && /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("button", { class: "sid__findings-toggle", type: "button", onClick: () => R(!M), children: [
        /* @__PURE__ */ e("span", { class: `sid__findings-arrow ${M ? "sid__findings-arrow--open" : ""}`, children: "▶" }),
        "Key Findings (",
        P.length,
        ")"
      ] }),
      M && /* @__PURE__ */ e("ul", { class: "sid__findings", children: P.map((Q, re) => /* @__PURE__ */ e("li", { children: Q }, re)) })
    ] }),
    V && r ? /* @__PURE__ */ e("div", { class: "sid__dismiss-form", children: [
      /* @__PURE__ */ e("label", { children: "Why do you disagree? (optional)" }),
      /* @__PURE__ */ e(
        "textarea",
        {
          value: J,
          onInput: (Q) => ne(Q.target.value),
          placeholder: "Enter reason...",
          disabled: o
        }
      ),
      /* @__PURE__ */ e("div", { class: "sid__dismiss-form-btns", children: [
        /* @__PURE__ */ e(
          "button",
          {
            class: "sid__btn sid__btn--secondary",
            type: "button",
            disabled: o,
            onClick: () => {
              U(!1), ne("");
            },
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            class: "sid__btn sid__btn--primary",
            type: "button",
            disabled: o,
            onClick: () => r(J),
            children: o ? "Submitting..." : "Submit"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e("div", { class: "sid__actions", children: [
      r && /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--dismiss", type: "button", onClick: () => U(!0), children: "Dismiss" }),
      /* @__PURE__ */ e("div", { class: "sid__actions-right", children: [
        /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--primary", onClick: () => {
          const Q = {
            mdsItem: l?.mdsItem || a,
            description: l?.description || s?.itemName,
            aiAnswer: l
          };
          window.QuerySendModal?.show(Q);
        }, type: "button", children: "Query Physician" }),
        a && /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--secondary", onClick: () => window.navigateToMDSItem?.(a, c), type: "button", children: [
          "Go to ",
          se,
          " ↗"
        ] })
      ] })
    ] })
  ] });
}
const we = [50, 75, 100, 125, 150, 200], Vr = 100;
function Cn({
  url: t,
  wordBlocks: n = [],
  targetPage: s = 1,
  title: a = "Document",
  documentType: i,
  effectiveDate: r,
  fileSize: o,
  onClose: c,
  openInNewTabUrl: d
}) {
  const [l, p] = v(null), [u, m] = v(s), [h, _] = v(1), [g, f] = v(Vr), [b, y] = v(0), [I, D] = v(!0), [k, T] = v(!1), [A, x] = v(null), [C, S] = v(String(s)), w = ee(null), O = ee(null), E = ee(null), P = ee({}), M = ee(null), R = ee(0);
  o && (o / 1024 > 1024 ? `${(o / 1024 / 1024).toFixed(1)}` : `${(o / 1024).toFixed(0)}`);
  const B = (L) => {
    if (!L) return "";
    try {
      return new Date(L).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    } catch {
      return L;
    }
  };
  G(() => {
    if (!t) {
      x("No document URL available"), D(!1);
      return;
    }
    let L = !1;
    return (async () => {
      try {
        if (typeof pdfjsLib > "u") throw new Error("PDF.js library not loaded");
        pdfjsLib.GlobalWorkerOptions.workerSrc || (pdfjsLib.GlobalWorkerOptions.workerSrc = chrome.runtime.getURL("lib/pdf.worker.min.js"));
        const $ = await pdfjsLib.getDocument(t).promise;
        if (L) return;
        const V = Math.min(s, $.numPages);
        p($), _($.numPages), m(V), S(String(V)), D(!1);
      } catch ($) {
        L || (console.error("[PDFViewer] Load failed:", $), x(`Failed to load PDF: ${$.message}`), D(!1));
      }
    })(), () => {
      L = !0;
    };
  }, [t]);
  const X = F(async (L) => {
    if (!l) return;
    const $ = w.current, V = O.current, U = E.current;
    if (!$ || !V || !U) return;
    const J = ++R.current, ne = Math.max(1, Math.min(L, h));
    T(!0);
    try {
      const se = await l.getPage(ne);
      if (R.current !== J) return;
      const Q = await zr(se, ne, P, b), re = U.clientWidth, he = Math.max(re - 16, 200), Y = se.getViewport({ scale: 1, rotation: Q }), be = he / Y.width * (g / 100), _e = se.getViewport({ scale: be, rotation: Q }), Te = $.getContext("2d"), En = V.getContext("2d");
      if ($.width = _e.width, $.height = _e.height, V.width = _e.width, V.height = _e.height, Te.clearRect(0, 0, $.width, $.height), En.clearRect(0, 0, V.width, V.height), await se.render({ canvasContext: Te, viewport: _e }).promise, R.current !== J) return;
      const $n = (n || []).filter((at) => at.p === ne);
      if ($n.length > 0) {
        const at = jr(En, $n, _e, Q);
        at.length > 0 && Kr(at, U);
      }
    } catch (se) {
      console.error("[PDFViewer] Render failed:", se);
    } finally {
      R.current === J && T(!1);
    }
  }, [l, h, g, b, n]);
  G(() => {
    l && X(u);
  }, [l, u, g, b, X]);
  const W = F((L) => {
    const $ = Math.max(1, Math.min(L, h));
    m($), S(String($));
  }, [h]), q = F((L) => {
    f(($) => {
      const V = we.indexOf($);
      if (V === -1) {
        const U = we.reduce((ne, se) => Math.abs(se - $) < Math.abs(ne - $) ? se : ne), J = we.indexOf(U);
        return we[Math.max(0, Math.min(J + L, we.length - 1))];
      }
      return we[Math.max(0, Math.min(V + L, we.length - 1))];
    });
  }, []), H = F(() => {
    y((L) => (L + 90) % 360), P.current = {};
  }, []);
  G(() => {
    const L = ($) => {
      if (M.current && !($.target.tagName === "INPUT" || $.target.tagName === "TEXTAREA") && M.current.closest(".super-pdf-modal"))
        switch ($.key) {
          case "ArrowLeft":
            $.preventDefault(), m((V) => {
              const U = Math.max(1, V - 1);
              return S(String(U)), U;
            });
            break;
          case "ArrowRight":
            $.preventDefault(), m((V) => {
              const U = Math.min(h, V + 1);
              return S(String(U)), U;
            });
            break;
          case "+":
          case "=":
            $.preventDefault(), q(1);
            break;
          case "-":
            $.preventDefault(), q(-1);
            break;
          case "r":
          case "R":
            $.preventDefault(), H();
            break;
        }
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [h, q, H]);
  const te = () => {
    const L = parseInt(C, 10);
    !isNaN(L) && L >= 1 && L <= h ? W(L) : S(String(u));
  };
  return I ? /* @__PURE__ */ e("div", { class: "super-pdfv super-pdfv--center", ref: M, children: /* @__PURE__ */ e("div", { class: "super-pdfv__loader", children: [
    /* @__PURE__ */ e("div", { class: "super-pdfv__loader-ring" }),
    /* @__PURE__ */ e("span", { children: "Loading document..." })
  ] }) }) : A ? /* @__PURE__ */ e("div", { class: "super-pdfv super-pdfv--center", ref: M, children: /* @__PURE__ */ e("div", { class: "super-pdfv__empty-state", children: [
    /* @__PURE__ */ e("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "#9ca3af", "stroke-width": "1.5", children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
    ] }),
    /* @__PURE__ */ e("p", { children: A })
  ] }) }) : /* @__PURE__ */ e("div", { class: "super-pdfv", ref: M, children: [
    /* @__PURE__ */ e("div", { class: "super-pdfv__header", children: [
      /* @__PURE__ */ e("div", { class: "super-pdfv__header-left", children: [
        /* @__PURE__ */ e("svg", { class: "super-pdfv__header-icon", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
          /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" })
        ] }),
        /* @__PURE__ */ e("span", { class: "super-pdfv__header-title", children: a }),
        r && /* @__PURE__ */ e("span", { class: "super-pdfv__header-date", children: B(r) })
      ] }),
      /* @__PURE__ */ e("div", { class: "super-pdfv__header-right", children: [
        /* @__PURE__ */ e("div", { class: "super-pdfv__group", children: [
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => W(u - 1), disabled: u <= 1, title: "Previous page", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", children: /* @__PURE__ */ e("polyline", { points: "15 18 9 12 15 6" }) }) }),
          /* @__PURE__ */ e("div", { class: "super-pdfv__page-pill", children: [
            /* @__PURE__ */ e(
              "input",
              {
                class: "super-pdfv__page-input",
                type: "text",
                value: C,
                onInput: (L) => S(L.target.value),
                onBlur: te,
                onKeyDown: (L) => L.key === "Enter" && L.target.blur(),
                style: { width: `${Math.max(2, String(h).length + 0.5)}ch` }
              }
            ),
            /* @__PURE__ */ e("span", { class: "super-pdfv__page-of", children: [
              "of ",
              h
            ] })
          ] }),
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => W(u + 1), disabled: u >= h, title: "Next page", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", children: /* @__PURE__ */ e("polyline", { points: "9 18 15 12 9 6" }) }) })
        ] }),
        /* @__PURE__ */ e("div", { class: "super-pdfv__tb-sep" }),
        /* @__PURE__ */ e("div", { class: "super-pdfv__group", children: [
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => q(-1), disabled: g <= we[0], title: "Zoom out", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) }) }),
          /* @__PURE__ */ e("span", { class: "super-pdfv__zoom-label", children: [
            g,
            "%"
          ] }),
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => q(1), disabled: g >= we[we.length - 1], title: "Zoom in", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
            /* @__PURE__ */ e("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
            /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
          ] }) })
        ] }),
        /* @__PURE__ */ e("div", { class: "super-pdfv__tb-sep" }),
        /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: H, title: "Rotate 90°", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ e("polyline", { points: "1 4 1 10 7 10" }),
          /* @__PURE__ */ e("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
        ] }) }),
        d && /* @__PURE__ */ e("a", { href: d, target: "_blank", rel: "noopener noreferrer", class: "super-pdfv__open-btn", title: "Open in new tab", children: /* @__PURE__ */ e("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
          /* @__PURE__ */ e("polyline", { points: "15 3 21 3 21 9" }),
          /* @__PURE__ */ e("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "super-pdfv__scroll", ref: E, children: [
      /* @__PURE__ */ e("div", { class: "super-pdfv__canvas-wrap", children: [
        /* @__PURE__ */ e("canvas", { class: "super-pdfv__canvas", ref: w }),
        /* @__PURE__ */ e("canvas", { class: "super-pdfv__highlight", ref: O })
      ] }),
      k && /* @__PURE__ */ e("div", { class: "super-pdfv__page-loading", children: /* @__PURE__ */ e("div", { class: "super-pdfv__loader-ring super-pdfv__loader-ring--sm" }) })
    ] })
  ] });
}
async function zr(t, n, s, a) {
  if (s.current[n] !== void 0)
    return (s.current[n] + a) % 360;
  const i = t.view, r = i[2] - i[0], o = i[3] - i[1];
  let c = 0, d = 0;
  try {
    const p = (await t.getTextContent()).items.filter((u) => u.str && u.str.trim().length > 0);
    if (d = p.length, p.length >= 3) {
      const u = { 0: 0, 90: 0, 180: 0, 270: 0 };
      for (const _ of p) {
        const [g, f] = _.transform, b = Math.abs(g), y = Math.abs(f);
        b < 0.01 && y < 0.01 || (b > y ? u[g > 0 ? 0 : 180]++ : u[f > 0 ? 90 : 270]++);
      }
      let m = 0, h = 0;
      for (const [_, g] of Object.entries(u))
        g > m && (m = g, h = parseInt(_));
      h !== 0 && (c = h);
    }
  } catch {
  }
  if (c === 0 && d < 3)
    try {
      const l = await t.getOperatorList();
      let p = [1, 0, 0, 1, 0, 0];
      for (let u = 0; u < l.fnArray.length; u++)
        if (l.fnArray[u] === 12 && (p = l.argsArray[u]), l.fnArray[u] === 85 || l.fnArray[u] === 82) {
          const [m, h] = p;
          Math.abs(h) > Math.abs(m) * 5 && Math.abs(p[2]) > Math.abs(p[3]) * 5 && (c = h > 0 ? 270 : 90);
          break;
        }
    } catch {
    }
  return c === 0 && r > o * 1.05 && (c = 90), s.current[n] = c, (c + a) % 360;
}
function Wr(t, n, s, a) {
  const { x: i, y: r, w: o, h: c } = t, d = a % 360;
  return d === 0 ? { x: i * n, y: r * s, w: o * n, h: c * s } : d === 90 ? { x: (1 - r - c) * n, y: i * s, w: c * n, h: o * s } : d === 180 ? { x: (1 - i - o) * n, y: (1 - r - c) * s, w: o * n, h: c * s } : { x: r * n, y: (1 - i - o) * s, w: c * n, h: o * s };
}
function Qr(t) {
  if (t.length <= 1) return t;
  const n = [...t].sort((i, r) => i.y - r.y || i.x - r.x), s = [];
  let a = { ...n[0] };
  for (let i = 1; i < n.length; i++) {
    const r = n[i], o = Math.max(a.h, r.h), c = Math.abs(a.y + a.h / 2 - (r.y + r.h / 2)) < o * 0.6, l = r.x - (a.x + a.w) < o * 0.5;
    if (c && l) {
      const p = Math.max(a.x + a.w, r.x + r.w), u = Math.min(a.y, r.y), m = Math.max(a.y + a.h, r.y + r.h);
      a.x = Math.min(a.x, r.x), a.y = u, a.w = p - a.x, a.h = m - u;
    } else
      s.push(a), a = { ...r };
  }
  return s.push(a), s;
}
function jr(t, n, s, a) {
  const i = s.width, r = s.height, o = n.map((d) => Wr(d, i, r, a)), c = Qr(o);
  return t.fillStyle = "rgba(250, 204, 21, 0.28)", c.forEach((d) => {
    const u = d.x - 2, m = d.y - 2, h = d.w + 4, _ = d.h + 4;
    t.beginPath(), t.moveTo(u + 3, m), t.lineTo(u + h - 3, m), t.quadraticCurveTo(u + h, m, u + h, m + 3), t.lineTo(u + h, m + _ - 3), t.quadraticCurveTo(u + h, m + _, u + h - 3, m + _), t.lineTo(u + 3, m + _), t.quadraticCurveTo(u, m + _, u, m + _ - 3), t.lineTo(u, m + 3), t.quadraticCurveTo(u, m, u + 3, m), t.closePath(), t.fill();
  }), c.map((d, l) => ({ ...d, isActive: l === 0 }));
}
function Kr(t, n) {
  if (!t.length || !n) return;
  const s = t.find((i) => i.isActive) || t[0], a = n.querySelector(".super-pdfv__canvas-wrap");
  a && requestAnimationFrame(() => {
    const i = n.getBoundingClientRect(), r = a.getBoundingClientRect(), o = r.left - i.left + n.scrollLeft, c = r.top - i.top + n.scrollTop;
    n.scrollTo({
      left: Math.max(0, o + s.x + s.w / 2 - n.clientWidth / 2),
      top: Math.max(0, c + s.y + s.h / 2 - n.clientHeight / 2),
      behavior: "smooth"
    });
  });
}
function Ca(t) {
  const { sourceType: n, evidenceId: s } = t, a = t.sourceId || t.id || "", i = t.type;
  if (n === "progress-note" && a)
    return { viewerType: "clinical-note", id: a };
  if (n === "therapy-doc" && a)
    return { viewerType: "therapy-document", id: a };
  if (n === "document" && a)
    return { viewerType: "document", id: a };
  if (n === "uda") {
    const o = (a || s || "").replace(/^uda-/, "");
    if (o) return { viewerType: "uda", id: o };
  }
  if (a && a.includes("-chunk-"))
    return { viewerType: "document", id: a.split("-chunk-")[0], chunk: parseInt(a.split("-chunk-")[1], 10) };
  if (i === "clinical_note" && a)
    return { viewerType: "clinical-note", id: a.replace(/^pcc-prognote-/, "").replace(/^pcc-practnote-/, "").replace(/^patient-practnote-/, "") };
  if (i === "therapy_document" && a)
    return { viewerType: "therapy-document", id: a.replace(/^therapy-doc-/, "") };
  if (i === "document" && a)
    return { viewerType: "document", id: a };
  const r = s || a;
  if (r) {
    if (r.startsWith("therapy-doc-"))
      return { viewerType: "therapy-document", id: r.replace("therapy-doc-", "") };
    if (r.startsWith("pcc-prognote-"))
      return { viewerType: "clinical-note", id: r.replace("pcc-prognote-", "") };
    if (r.startsWith("pcc-practnote-"))
      return { viewerType: "clinical-note", id: r.replace("pcc-practnote-", "") };
    if (r.startsWith("patient-practnote-"))
      return { viewerType: "clinical-note", id: r.replace("patient-practnote-", "") };
    if (r.includes("-chunk-"))
      return { viewerType: "document", id: r.split("-chunk-")[0], chunk: parseInt(r.split("-chunk-")[1], 10) };
    if (r.startsWith("uda-"))
      return { viewerType: "uda", id: r.replace("uda-", "") };
  }
  return { viewerType: null, id: null };
}
function Tt() {
  const t = document.querySelector(".icd10-viewer-modal__container");
  return t || document.body;
}
async function Yr(t, n) {
  const s = `/api/extension/clinical-notes/${t}?facilityName=${encodeURIComponent(n.facilityName)}&orgSlug=${n.orgSlug}`, a = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: s
  });
  if (!a.success) throw new Error(a.error);
  return a.data;
}
async function Jr(t, n) {
  const s = `/api/extension/therapy-documents/${t}?facilityName=${encodeURIComponent(n.facilityName)}&orgSlug=${n.orgSlug}`, a = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: s
  });
  if (!a.success) throw new Error(a.error);
  return a.data;
}
async function Ze(t, n) {
  const s = `/api/extension/documents/${t}?facilityName=${encodeURIComponent(n.facilityName)}&orgSlug=${n.orgSlug}`, a = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: s
  });
  if (!a.success) throw new Error(a.error);
  return a.data;
}
async function Zr(t, n, s, a = null) {
  let i = `/api/extension/patients/${n}/uda/${t}?facilityName=${encodeURIComponent(s.facilityName)}&orgSlug=${s.orgSlug}`;
  a && (i += `&quote=${encodeURIComponent(a)}`);
  const r = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: i
  });
  if (!r.success) throw new Error(r.error);
  return r.data;
}
function Xr() {
  if (typeof window < "u") {
    const t = window.SuperOverlay?.patientId;
    if (t) return t;
    try {
      const n = new URL(window.location.href).searchParams.get("ESOLclientid");
      if (n) return n;
    } catch {
    }
  }
  return null;
}
function z(t) {
  return t ? String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "";
}
function Nt(t) {
  if (!t) return "";
  try {
    return new Date(t).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  } catch {
    return t;
  }
}
function eo(t) {
  if (!t) return "";
  try {
    return new Date(t).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  } catch {
    return t;
  }
}
const Oe = "data-evidence-highlight";
function Ct(t) {
  return t ? t.toLowerCase().replace(/\s+/g, " ").trim() : "";
}
function Sa(t, n) {
  if (!t || !n) return !1;
  const s = Ct(t), a = Ct(n);
  return s.length < 10 || a.length < 10 ? !1 : s.includes(a) || a.includes(s);
}
function xa(t, n, s = 4) {
  if (!t || !n) return !1;
  const a = Ct(t);
  return Ct(n).split(/\s+/).filter((c) => c.length >= s).filter((c) => a.includes(c)).length >= 2;
}
function St(t, n) {
  return Sa(n, t) || xa(n, t);
}
function to(t, n) {
  return t.some((s) => Sa(s, n) || xa(s, n));
}
function rs(t) {
  if (!t) return "";
  try {
    const n = new Date(t);
    if (isNaN(n.getTime())) return t;
    const s = n.getMonth() + 1, a = n.getDate(), i = n.getFullYear();
    let r = n.getHours();
    const o = n.getMinutes().toString().padStart(2, "0"), c = n.getSeconds().toString().padStart(2, "0"), d = r >= 12 ? "PM" : "AM";
    return r = r % 12 || 12, `${s}/${a}/${i} ${r}:${o}:${c} ${d}`;
  } catch {
    return t;
  }
}
function ve(t, n) {
  const s = !document.querySelector(".icd10-viewer-modal__container");
  s && (document.body.style.overflow = "hidden");
  const a = () => {
    s && (document.body.style.overflow = ""), t.remove();
  };
  t.querySelector(`.${n}__close`).addEventListener("click", a), t.querySelector(`.${n}__backdrop`).addEventListener("click", a);
  const i = (r) => {
    r.key === "Escape" && (a(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i);
}
function Sn(t, n, s) {
  const a = t.querySelector(`.${s}__body`);
  a.innerHTML = `
    <div class="super-viewer-error">
      <div class="super-viewer-error__icon">⚠️</div>
      <div class="super-viewer-error__message">${z(n)}</div>
    </div>
  `;
}
async function no(t, n = null) {
  console.log("[NoteHighlight] showClinicalNoteModal noteId=", t, "quote?", !!n, "quoteLen=", n ? n.length : 0);
  const s = await window.getCurrentParams(), a = so();
  Tt().appendChild(a);
  try {
    const i = await Yr(t, s);
    console.log("[NoteHighlight] note fetched, noteText length:", i?.note?.noteText?.length || 0), io(a, i.note, n);
  } catch (i) {
    console.error("[NoteHighlight] fetch failed:", i), Sn(a, i.message, "super-note-modal");
  }
}
function so() {
  const t = document.createElement("div");
  return t.className = "super-note-modal", t.innerHTML = `
    <div class="super-note-modal__backdrop"></div>
    <div class="super-note-modal__container">
      <div class="super-note-modal__header">
        <div class="super-note-modal__title">
          <span class="super-note-modal__name">Loading...</span>
        </div>
        <button class="super-note-modal__close">&times;</button>
      </div>
      <div class="super-note-modal__body">
        <div class="super-viewer-loading">
          <div class="super-viewer-loading__spinner"></div>
          <span>Loading note...</span>
        </div>
      </div>
    </div>
  `, ve(t, "super-note-modal"), t;
}
function ao(t, n) {
  if (!t) return "No note content available.";
  const s = String(t);
  if (!n) return z(s);
  const a = String(n).split(/[.;:\n]+/).map((l) => l.replace(/[*"'`()]/g, "").trim()).filter((l) => l.length >= 15);
  if (console.log("[NoteHighlight] quote length:", n.length, "phrases extracted:", a.length, a), a.length === 0) return z(s);
  const i = s.toLowerCase(), r = [];
  for (const l of a) {
    const p = l.toLowerCase();
    let u = 0;
    for (; (u = i.indexOf(p, u)) !== -1; )
      r.push([u, u + l.length]), u += l.length;
  }
  if (console.log("[NoteHighlight] raw match ranges:", r.length), r.length === 0) {
    const l = String(n).toLowerCase().replace(/[*"'`()]/g, "").split(/\s+/).filter((p) => p.length >= 3);
    for (let p = 0; p <= l.length - 3; p++) {
      const u = l.slice(p, p + 3).join(" ");
      if (u.length < 12) continue;
      let m = 0;
      for (; (m = i.indexOf(u, m)) !== -1; )
        r.push([m, m + u.length]), m += u.length;
    }
    console.log("[NoteHighlight] trigram fallback ranges:", r.length);
  }
  if (r.length === 0)
    return console.log("[NoteHighlight] no matches found; rendering plain escaped text"), z(s);
  r.sort((l, p) => l[0] - p[0]);
  const o = [r[0].slice()];
  for (let l = 1; l < r.length; l++) {
    const p = o[o.length - 1], u = r[l];
    u[0] <= p[1] ? p[1] = Math.max(p[1], u[1]) : o.push(u.slice());
  }
  console.log("[NoteHighlight] merged ranges:", o.length, o);
  let c = "", d = 0;
  for (const [l, p] of o)
    d < l && (c += z(s.slice(d, l))), c += `<mark class="super-note-highlight" ${Oe}="true">${z(s.slice(l, p))}</mark>`, d = p;
  return d < s.length && (c += z(s.slice(d))), c;
}
function io(t, n, s = null) {
  const a = t.querySelector(".super-note-modal__container"), i = n.noteType === "practitioner" ? "Practitioner Note" : "Progress Note", r = n.noteType === "practitioner" ? "super-note-badge--practitioner" : "super-note-badge--progress";
  a.innerHTML = `
    <div class="super-note-modal__header">
      <div class="super-note-modal__title-row">
        <span class="super-note-modal__icon">📝</span>
        <div class="super-note-modal__title">
          <span class="super-note-modal__name">${z(n.department || i)}</span>
          <span class="super-note-badge ${r}">${i}</span>
        </div>
        <button class="super-note-modal__close">&times;</button>
      </div>
      ${n.provider ? `<div class="super-note-modal__provider">${z(n.provider)}</div>` : ""}
      <div class="super-note-modal__meta">
        ${n.effectiveDate ? `<span>${Nt(n.effectiveDate)}</span>` : ""}
        ${n.visitType ? `<span class="super-note-modal__visit-type">${z(n.visitType)}</span>` : ""}
        ${n.task ? `<span class="super-note-modal__task">${z(n.task)}</span>` : ""}
      </div>
    </div>

    <div class="super-note-modal__body">
      <div class="super-note-modal__text">${ao(n.noteText, s)}</div>
    </div>

    <div class="super-note-modal__footer">
      ${n.signedDate ? `<span class="super-note-modal__signed">Signed: ${eo(n.signedDate)}</span>` : ""}
      ${n.hasAddendum ? '<span class="super-note-modal__addendum">Has Addendum</span>' : ""}
    </div>
  `, ve(t, "super-note-modal"), s && setTimeout(() => {
    const o = t.querySelectorAll(`[${Oe}="true"]`);
    console.log("[NoteHighlight] post-render marks found in DOM:", o.length), o.length > 0 && o[0].scrollIntoView({ behavior: "smooth", block: "center" });
  }, 80);
}
async function ro(t, n = null) {
  const s = await window.getCurrentParams(), a = oo();
  Tt().appendChild(a);
  try {
    const i = await Jr(t, s);
    co(a, i.therapyDocument, n);
  } catch (i) {
    Sn(a, i.message, "super-therapy-modal");
  }
}
function oo() {
  const t = document.createElement("div");
  return t.className = "super-therapy-modal", t.dataset.zoom = "100", t.innerHTML = `
    <div class="super-therapy-modal__backdrop"></div>
    <div class="super-therapy-modal__container">
      <div class="super-therapy-modal__toolbar">
        <div class="super-therapy-modal__toolbar-title">Loading...</div>
        <div class="super-therapy-modal__toolbar-controls">
          <div class="super-therapy-modal__zoom">
            <button class="super-therapy-modal__zoom-btn" data-zoom-action="out" title="Zoom Out">−</button>
            <span class="super-therapy-modal__zoom-level">100%</span>
            <button class="super-therapy-modal__zoom-btn" data-zoom-action="in" title="Zoom In">+</button>
          </div>
          <button class="super-therapy-modal__close">&times;</button>
        </div>
      </div>
      <div class="super-therapy-modal__body">
        <div class="super-viewer-loading">
          <div class="super-viewer-loading__spinner"></div>
          <span>Loading therapy document...</span>
        </div>
      </div>
      <div class="super-therapy-modal__footer">
        <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
      </div>
    </div>
  `, ve(t, "super-therapy-modal"), Pe(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  }), t;
}
function Pe(t) {
  const n = [50, 75, 100, 125, 150];
  t.querySelectorAll(".super-therapy-modal__zoom-btn").forEach((s) => {
    s.addEventListener("click", () => {
      const a = s.dataset.zoomAction, i = parseInt(t.dataset.zoom) || 100, r = n.indexOf(i);
      let o = i;
      a === "in" && r < n.length - 1 ? o = n[r + 1] : a === "out" && r > 0 && (o = n[r - 1]), t.dataset.zoom = o;
      const c = t.querySelector(".super-therapy-modal__zoom-level");
      c && (c.textContent = `${o}%`);
      const d = t.querySelector(".super-therapy-doc");
      d && (d.style.transform = `scale(${o / 100})`, d.style.transformOrigin = "top center");
    });
  });
}
function co(t, n, s = null) {
  const { documentType: a } = n;
  switch (a) {
    case "EVAL":
      ho(t, n, s);
      break;
    case "TEN":
      mo(t, n, s);
      break;
    case "PR":
      _o(t, n, s);
      break;
    case "RECERT":
      go(t, n, s);
      break;
    case "DISCH":
      fo(t, n, s);
      break;
    default:
      yo(t, n, s);
  }
  s && setTimeout(() => {
    lo(t);
  }, 100);
}
function lo(t) {
  const n = t.querySelectorAll(`[${Oe}="true"]`);
  if (n.length === 0 || (n[0].scrollIntoView({ behavior: "smooth", block: "center" }), n.length === 1)) return;
  const s = document.createElement("div");
  s.className = "super-therapy-highlight-nav", s.innerHTML = `
    <button class="super-therapy-highlight-nav__btn" data-action="prev" title="Previous highlight">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <span class="super-therapy-highlight-nav__count">1 of ${n.length}</span>
    <button class="super-therapy-highlight-nav__btn" data-action="next" title="Next highlight">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  `;
  const a = t.querySelector(".super-therapy-modal__body");
  a && a.appendChild(s);
  let i = 0;
  const r = (o) => {
    n.forEach((c) => c.classList.remove("super-therapy-highlight--active")), n[o].classList.add("super-therapy-highlight--active"), n[o].scrollIntoView({ behavior: "smooth", block: "center" }), s.querySelector(".super-therapy-highlight-nav__count").textContent = `${o + 1} of ${n.length}`;
  };
  s.querySelectorAll(".super-therapy-highlight-nav__btn").forEach((o) => {
    o.addEventListener("click", () => {
      o.dataset.action === "prev" ? i = i > 0 ? i - 1 : n.length - 1 : i = i < n.length - 1 ? i + 1 : 0, r(i);
    });
  }), n[0].classList.add("super-therapy-highlight--active");
}
const uo = {
  PT: "Physical Therapy",
  OT: "Occupational Therapy",
  ST: "Speech Therapy"
}, po = {
  EVAL: "Initial Evaluation",
  TEN: "Treatment Encounter Note(s)",
  PR: "Progress Report",
  RECERT: "Recertification",
  DISCH: "Discharge Summary"
};
function oe(t, ...n) {
  for (const s of n) {
    if (t[s] !== void 0) return t[s];
    const a = s.charAt(0).toUpperCase() + s.slice(1);
    if (t[a] !== void 0) return t[a];
  }
  return null;
}
function Be(t) {
  const n = t.jsonData || {}, s = n.Parameters || n.parameters || {}, a = t.discipline || "", i = uo[a] || a || "Therapy", r = t.documentType || "", o = po[r] || n.BodyDocumentName || n.bodyDocumentName || r, c = t.providerName || oe(s, "ProviderName", "providerName") || oe(n, "HeaderProviderName", "headerProviderName") || "", d = oe(s, "PatientName", "patientName") || oe(n, "HeaderPatientName", "headerPatientName") || oe(n, "BodyPatientName", "bodyPatientName") || "";
  return `
    <div class="super-therapy-doc__header">
      <div class="super-therapy-doc__discipline">${z(i)}</div>
      <div class="super-therapy-doc__title">${z(o)}</div>
    </div>
    <div class="super-therapy-doc__info-row">
      <div class="super-therapy-doc__provider">
        <span class="super-therapy-doc__provider-label">Provider: </span>${z(c)}
      </div>
      <div class="super-therapy-doc__patient">${z(d)}</div>
    </div>
  `;
}
function He(t) {
  const n = t.jsonData || {}, s = n.Parameters || n.parameters || {}, a = oe(s, "PatientName", "patientName") || oe(n, "BodyPatientName", "bodyPatientName") || "", i = oe(s, "MedicalRecordNumber", "medicalRecordNumber") || oe(n, "BodyMRN", "bodyMRN") || "", r = oe(s, "DateOfBirth", "dateOfBirth") || oe(n, "BodyDOB", "bodyDOB") || "", o = oe(s, "PayerName", "payerName") || "", c = oe(s, "StartOfCare", "startOfCare") || "";
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Identification Information</div>
      <div class="super-therapy-section__body">
        <table class="super-therapy-id-table">
          <tr>
            <td class="super-therapy-id-table__label">Patient:</td>
            <td class="super-therapy-id-table__value">${z(a)}</td>
            ${r ? `<td class="super-therapy-id-table__label">DOB:</td><td class="super-therapy-id-table__value">${z(r)}</td>` : ""}
            ${c ? `<td class="super-therapy-id-table__label">Start of Care:</td><td class="super-therapy-id-table__value">${z(c)}</td>` : ""}
          </tr>
          <tr>
            ${o ? `<td class="super-therapy-id-table__label">Payer:</td><td class="super-therapy-id-table__value">${z(o)}</td>` : ""}
            <td class="super-therapy-id-table__label">MRN:</td>
            <td class="super-therapy-id-table__value" ${o ? "" : 'colspan="3"'}>${z(i)}</td>
          </tr>
        </table>
      </div>
    </div>
  `;
}
function At(t) {
  if (!t || t.length === 0) return "";
  const n = t.filter((a) => a.IsMedicalDx || a.isMedicalDx), s = t.filter((a) => a.IsTreatmentDx || a.isTreatmentDx);
  return n.length === 0 && s.length === 0 ? "" : `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Diagnoses</div>
      <div class="super-therapy-section__body">
        <table class="super-therapy-dx-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Code</th>
              <th>Description</th>
              <th>Onset</th>
            </tr>
          </thead>
          <tbody>
            ${n.map((a) => `
              <tr>
                <td>Medical</td>
                <td class="super-therapy-dx-table__code">${z(a.Code || a.code || "")}</td>
                <td>${z(a.Description || a.description || "")}</td>
                <td>${Nt(a.OnsetDate || a.onsetDate) || "-"}</td>
              </tr>
            `).join("")}
            ${s.map((a) => `
              <tr>
                <td>Treatment</td>
                <td class="super-therapy-dx-table__code">${z(a.Code || a.code || "")}</td>
                <td>${z(a.Description || a.description || "")}</td>
                <td>${Nt(a.OnsetDate || a.onsetDate) || "-"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function os(t, n = !1, s = null) {
  const a = n ? "LTG" : "STG", i = t.GoalNum || t.goalNum || "?", r = t.GoalStatus || t.goalStatus || "Continue", o = `super-therapy-goal__status--${r.toLowerCase().replace(/\s+/g, "")}`, c = t.GoalText || t.goalText || "", d = t.TargetDate || t.targetDate || "", l = t.GoalPlofText || t.goalPlofText || "", p = t.BaselineValueText || t.baselineValueText || "", u = t.PriorValueText || t.priorValueText || "", m = t.CurrentValueText || t.currentValueText || "", h = t.Comments || t.comments || "", _ = t.MeasurementCaption || t.measurementCaption || "", b = to([c, h, p, u, m, l], s) ? `${Oe}="true"` : "", y = St(s, c) ? "super-therapy-highlight" : "", I = St(s, h) ? "super-therapy-highlight" : "";
  return `
    <div class="super-therapy-goal" ${b}>
      <div class="super-therapy-goal__header">
        <div class="super-therapy-goal__title">${a} #${i} - ${r}</div>
        <span class="super-therapy-goal__status ${o}">${r}</span>
      </div>
      <div class="super-therapy-goal__body">
        <p class="super-therapy-goal__text ${y}">${z(c)}</p>
        ${d ? `<p class="super-therapy-goal__target">Target: ${Nt(d)}</p>` : ""}
      </div>
      <div class="super-therapy-goal__progress">
        <div>
          <div class="super-therapy-goal__progress-item">
            <div class="super-therapy-goal__progress-label">PLOF</div>
            <div class="super-therapy-goal__progress-value">${z(l || "Not specified")}</div>
          </div>
          ${p ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Baseline${_ ? ` <span class="super-therapy-goal__progress-sublabel">(${z(_)})</span>` : ""}</div>
              <div class="super-therapy-goal__progress-value">${z(p)}</div>
            </div>
          ` : ""}
        </div>
        <div>
          ${u ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Previous</div>
              <div class="super-therapy-goal__progress-value">${z(u)}</div>
            </div>
          ` : ""}
          ${m ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Current</div>
              <div class="super-therapy-goal__progress-value">${z(m)}</div>
            </div>
          ` : ""}
        </div>
      </div>
      ${h ? `
        <div class="super-therapy-goal__comments">
          <span class="super-therapy-goal__comments-label">Comments: </span>
          <span class="${I}">${z(h)}</span>
        </div>
      ` : ""}
    </div>
  `;
}
function xn(t, n = null) {
  if (!t || t.length === 0) return "";
  const s = t.filter((i) => !i.IsLongTerm && !i.isLongTerm), a = t.filter((i) => i.IsLongTerm || i.isLongTerm);
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Goals</div>
      <div class="super-therapy-section__body">
        ${a.length > 0 ? `
          <div class="super-therapy-goals-title">Long-Term Goals</div>
          ${a.map((i) => os(i, !0, n)).join("")}
        ` : ""}
        ${s.length > 0 ? `
          <div class="super-therapy-goals-title">Short-Term Goals</div>
          ${s.map((i) => os(i, !1, n)).join("")}
        ` : ""}
      </div>
    </div>
  `;
}
function Pn(t) {
  return !t || t.length === 0 ? "" : `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Plan of Treatment - Interventions</div>
      <div class="super-therapy-section__body">
        ${t.map((n) => `
          <div class="super-therapy-intervention">
            <span class="super-therapy-intervention__code">${z(n.Code || n.code || "")}</span>
            - ${z(n.Description || n.description || "")}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
function Mt(t, n = null) {
  if (!t || t.length === 0) return "";
  const s = {};
  return t.forEach((a) => {
    const i = a.PrintSectionName || a.printSectionName || a.SectionName || a.sectionName || "Assessment", r = a.PrintGroupName || a.printGroupName || a.GroupName || a.groupName || "", o = a.GroupValues || a.groupValues || "";
    s[i] || (s[i] = []), s[i].push({ groupName: r, values: o });
  }), Object.entries(s).map(([a, i]) => `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">${z(a)}</div>
      <div class="super-therapy-section__body">
        ${i.map((r) => {
    const o = St(n, r.values), c = o ? `${Oe}="true"` : "", d = o ? "super-therapy-highlight" : "";
    return `
            <div class="super-therapy-detail-item" ${c}>
              ${r.groupName ? `<div class="super-therapy-detail-item__name">${z(r.groupName)}</div>` : ""}
              <div class="super-therapy-detail-item__value ${d}">${z(r.values)}</div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `).join("");
}
function Pa(t) {
  if (!t) return "";
  const n = t.Dates || t.dates || [], s = t.ServiceRows || t.serviceRows || [];
  return n.length === 0 || s.length === 0 ? "" : `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Service Matrix</div>
      <div class="super-therapy-section__body">
        <table class="super-therapy-matrix">
          <thead>
            <tr>
              <th class="super-therapy-matrix__service-col">Service</th>
              ${n.map((a) => `<th>${z(a)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${s.map((a) => `
              <tr>
                <td class="super-therapy-matrix__service-col">${z(a.ServiceCodeAndAbbrev || "")}</td>
                ${n.map((i) => {
    const r = a.DurationsByDate?.[i] || "";
    return `<td>${r ? r + "m" : "-"}</td>`;
  }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
        ${t.TotalUniqueDays ? `<div style="margin-top: 8px; font-size: 12px; color: #6b7280;">Total Treatment Days: ${t.TotalUniqueDays}</div>` : ""}
      </div>
    </div>
  `;
}
function nt(t) {
  if (!t) return "";
  const n = t.OriginalSignatureText || t.originalSignatureText, s = t.OriginalSignatureDate || t.originalSignatureDate, a = t.OriginalCoSignatureText || t.originalCoSignatureText, i = t.OriginalCosignatureDate || t.originalCosignatureDate;
  return !n && !a ? "" : `
    <div class="super-therapy-signatures">
      ${n ? `
        <div class="super-therapy-signature">
          <div class="super-therapy-signature__line">
            <div class="super-therapy-signature__name-area">
              <div class="super-therapy-signature__name">${z(n)}</div>
              <div class="super-therapy-signature__label">Original Signature:</div>
            </div>
            ${s ? `
              <div class="super-therapy-signature__date-area">
                <div class="super-therapy-signature__date">${rs(s)}</div>
                <div class="super-therapy-signature__date-label">Date</div>
              </div>
            ` : ""}
          </div>
        </div>
      ` : ""}
      ${a ? `
        <div class="super-therapy-signature">
          <div class="super-therapy-signature__line">
            <div class="super-therapy-signature__name-area">
              <div class="super-therapy-signature__name">${z(a)}</div>
              <div class="super-therapy-signature__label">Cosignature:</div>
            </div>
            ${i ? `
              <div class="super-therapy-signature__date-area">
                <div class="super-therapy-signature__date">${rs(i)}</div>
                <div class="super-therapy-signature__date-label">Date</div>
              </div>
            ` : ""}
          </div>
        </div>
      ` : ""}
      <div class="super-therapy-page-num">Page 1 of 1</div>
    </div>
  `;
}
function Fe(t, n = 100) {
  return `
    <div class="super-therapy-modal__toolbar">
      <div class="super-therapy-modal__toolbar-title">${z(t)}</div>
      <div class="super-therapy-modal__toolbar-controls">
        <div class="super-therapy-modal__zoom">
          <button class="super-therapy-modal__zoom-btn" data-zoom-action="out" title="Zoom Out">−</button>
          <span class="super-therapy-modal__zoom-level">${n}%</span>
          <button class="super-therapy-modal__zoom-btn" data-zoom-action="in" title="Zoom In">+</button>
        </div>
        <button class="super-therapy-modal__close">&times;</button>
      </div>
    </div>
  `;
}
function mo(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || `${n.discipline} TEN - Treatment Note`, c = i.Sections || i.sections || [], d = oe(i, "CompletedDateFormatted", "completedDateFormatted") || "", l = oe(i, "AssessmentDateFormatted", "assessmentDateFormatted") || d, p = {
    OriginalSignatureText: i.OriginalSignatureText || i.originalSignatureText,
    OriginalSignatureDate: i.OriginalSignatureDate || i.originalSignatureDate,
    OriginalCoSignatureText: i.OriginalCoSignatureText || i.originalCoSignatureText,
    OriginalCosignatureDate: i.OriginalCosignatureDate || i.originalCosignatureDate
  }, u = [], m = c[0];
  m && (m.Details || m.details || []).forEach((_) => {
    u.push({
      name: _.PrintGroupName || _.printGroupName || "",
      value: _.GroupValues || _.groupValues || ""
    });
  }), a.innerHTML = `
    ${Fe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Be(n)}
        ${He(n)}

        <!-- Date of Service box -->
        <div class="super-therapy-dates-box">
          <div class="super-therapy-dates-box__item">Date of Service: ${z(l)}</div>
          <div class="super-therapy-dates-box__item">Completed Date: ${z(d)}</div>
        </div>

        <!-- Summary of Daily Skilled Services -->
        ${u.length > 0 ? `
          <div class="super-therapy-section">
            <div class="super-therapy-section-header">Summary of Daily Skilled Services</div>
            <div class="super-therapy-section__body">
              ${u.map((h) => {
    const _ = /^\d{5}/.test(h.name), g = St(s, h.value), f = g ? `${Oe}="true"` : "", b = g ? "super-therapy-highlight" : "";
    return `
                  <div class="super-therapy-detail-item" ${f}>
                    <div class="super-therapy-detail-item__name ${_ ? "super-therapy-detail-item__name--code" : ""}">${z(h.name)}</div>
                    <div class="super-therapy-detail-item__value ${b}">${z(h.value)}</div>
                  </div>
                `;
  }).join("")}
            </div>
          </div>
        ` : ""}

        ${nt(p)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, ve(t, "super-therapy-modal"), Pe(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function ho(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || `${n.discipline} Eval - Initial Evaluation`, c = i.IdentifierInfo || i.identifierInfo || {}, d = i.Diagnoses || i.diagnoses || [], l = i.GoalTargets || i.goalTargets || [], p = i.Approaches || i.approaches || [], u = i.AssessmentLayout || i.assessmentLayout || [], m = i.ESignatures || i.eSignatures || {}, h = oe(c, "Frequency", "frequency") || "", _ = oe(c, "Duration", "duration") || "", g = oe(c, "Intensity", "intensity") || "", f = oe(c, "DateRange", "dateRange") || "", b = oe(c, "PhysicianFullName", "physicianFullName") || "", y = oe(c, "NPI", "npi") || "";
  a.innerHTML = `
    ${Fe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Be(n)}
        ${He(n)}

        <!-- Treatment Plan Info -->
        ${h || _ || g || f ? `
          <div class="super-therapy-plan-info">
            ${f ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Certification Period: </span>${z(f)}</div>` : ""}
            ${h ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Frequency: </span>${z(h)}</div>` : ""}
            ${_ ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Duration: </span>${z(_)}</div>` : ""}
            ${g ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Intensity: </span>${z(g)}</div>` : ""}
          </div>
        ` : ""}

        <!-- Physician Certification -->
        ${b ? `
          <div class="super-therapy-section">
            <div class="super-therapy-section-header">Physician Certification</div>
            <div class="super-therapy-section__body">
              <div><strong>Physician:</strong> ${z(b)}</div>
              ${y ? `<div><strong>NPI:</strong> ${z(y)}</div>` : ""}
            </div>
          </div>
        ` : ""}

        ${At(d)}
        ${xn(l, s)}
        ${Pn(p)}
        ${Mt(u, s)}
        ${nt(m)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, ve(t, "super-therapy-modal"), Pe(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function _o(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || `${n.discipline} PR - Progress Report`, c = i.Diagnoses || i.diagnoses || [], d = i.AllActiveShortTermGoals || i.allActiveShortTermGoals || [], l = i.AllActiveLongTermGoals || i.allActiveLongTermGoals || [], p = [...d.map((g) => ({ ...g, IsLongTerm: !1 })), ...l.map((g) => ({ ...g, IsLongTerm: !0 }))], u = i.Approaches || i.approaches || [], m = i.AssessmentLayout || i.assessmentLayout || [], h = i.ServiceMatrixData || i.serviceMatrixData || {}, _ = i.ESignatures || i.eSignatures || {};
  a.innerHTML = `
    ${Fe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Be(n)}
        ${He(n)}
        ${At(c)}
        ${xn(p, s)}
        ${Pa(h)}
        ${Pn(u)}
        ${Mt(m, s)}
        ${nt(_)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, ve(t, "super-therapy-modal"), Pe(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function go(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || `${n.discipline} Recert - Recertification`, c = i.Diagnoses || i.diagnoses || [], d = i.ProgressGoalTargets || i.progressGoalTargets || [], l = i.Approaches || i.approaches || [], p = i.AssessmentLayout || i.assessmentLayout || [], u = i.ServiceMatrixData || i.serviceMatrixData || {}, m = i.ESignatures || i.eSignatures || {};
  a.innerHTML = `
    ${Fe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Be(n)}
        ${He(n)}
        ${At(c)}
        ${xn(d, s)}
        ${Pa(u)}
        ${Pn(l)}
        ${Mt(p, s)}
        ${nt(m)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, ve(t, "super-therapy-modal"), Pe(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function fo(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || `${n.discipline} Disch - Discharge Summary`, c = i.Diagnoses || i.diagnoses || [], d = i.AssessmentLayout || i.assessmentLayout || [], l = i.ESignatures || i.eSignatures || {};
  a.innerHTML = `
    ${Fe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Be(n)}
        ${He(n)}
        ${At(c)}
        ${Mt(d, s)}
        ${nt(l)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, ve(t, "super-therapy-modal"), Pe(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function yo(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || "Therapy Document";
  a.innerHTML = `
    ${Fe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Be(n)}
        ${He(n)}
        <div class="super-therapy-section">
          <div class="super-therapy-section-header">Document Content</div>
          <div class="super-therapy-section__body">
            <pre class="super-therapy-raw-content">${z(JSON.stringify(i, null, 2))}</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, ve(t, "super-therapy-modal"), Pe(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
async function vo(t, n = null) {
  const s = await window.getCurrentParams(), a = bo();
  Tt().appendChild(a);
  try {
    const i = await Ze(t, s);
    wo(a, i.document, n);
  } catch (i) {
    Sn(a, i.message, "super-pdf-modal");
  }
}
function bo() {
  const t = document.createElement("div");
  return t.className = "super-pdf-modal", t.innerHTML = `
    <div class="super-pdf-modal__backdrop"></div>
    <div class="super-pdf-modal__container">
      <div class="super-pdf-modal__header">
        <div class="super-pdf-modal__title">
          <span class="super-pdf-modal__name">Loading...</span>
        </div>
        <button class="super-pdf-modal__close">&times;</button>
      </div>
      <div class="super-pdf-modal__body">
        <div class="super-viewer-loading">
          <div class="super-viewer-loading__spinner"></div>
          <span>Loading document...</span>
        </div>
      </div>
    </div>
  `, ve(t, "super-pdf-modal"), t;
}
function wo(t, n, s = null) {
  const a = t.querySelector(".super-pdf-modal__container"), i = s && s.length > 0 && s[0].p ? s[0].p : 1, r = () => {
    document.body.style.overflow = "", t.remove();
  };
  a.innerHTML = `
    <div class="super-pdf-modal__header">
      <div class="super-pdf-modal__title-row">
        <span class="super-pdf-modal__icon">📄</span>
        <div class="super-pdf-modal__title">
          <span class="super-pdf-modal__name">${z(n.title || "Document")}</span>
          ${n.documentType ? `<span class="super-pdf-badge">${z(n.documentType)}</span>` : ""}
        </div>
        <button class="super-pdf-modal__close">&times;</button>
      </div>
    </div>
    <div class="super-pdf-modal__body"></div>
  `, ve(t, "super-pdf-modal");
  const o = t.querySelector(".super-pdf-modal__body");
  Se(
    j(Cn, {
      url: n.signedUrl || null,
      wordBlocks: s || [],
      targetPage: i,
      title: n.title || "Document",
      documentType: n.documentType,
      effectiveDate: n.effectiveDate,
      fileSize: n.fileSize,
      onClose: r,
      expiresAt: !0,
      openInNewTabUrl: n.signedUrl || null
    }),
    o
  );
}
function Io() {
  const t = document.createElement("div");
  return t.className = "super-uda-modal", t.innerHTML = `
    <div class="super-uda-modal__backdrop"></div>
    <div class="super-uda-modal__container">
      <div class="super-uda-modal__loading">
        <div class="super-uda-modal__loading-spinner"></div>
        <span>Loading assessment...</span>
      </div>
    </div>
  `, t;
}
async function Do(t, n = null, s = null) {
  const a = await window.getCurrentParams(), i = s || Xr(), r = Io(), o = !document.querySelector(".icd10-viewer-modal__container");
  Tt().appendChild(r), o && (document.body.style.overflow = "hidden");
  const c = r.querySelector(".super-uda-modal__container"), d = () => {
    o && (document.body.style.overflow = ""), document.removeEventListener("keydown", l), r.remove();
  }, l = (p) => {
    p.key === "Escape" && d();
  };
  if (document.addEventListener("keydown", l), r.querySelector(".super-uda-modal__backdrop").addEventListener("click", d), !i) {
    c.innerHTML = '<div class="super-uda-modal__error">Missing patient context — open this from a patient page.</div>';
    return;
  }
  try {
    const p = await Zr(t, i, a, n), u = p.uda, m = new Set(p.matchKeys || []);
    c.innerHTML = "", Se(
      j(tn, { uda: u, matchKeys: m, quoteText: n, onClose: d }),
      c
    );
  } catch (p) {
    c.innerHTML = `<div class="super-uda-modal__error">${z(p.message || "Failed to load UDA")}</div>`;
  }
}
window.showClinicalNoteModal = no;
window.showTherapyDocModal = ro;
window.showDocumentModal = vo;
window.showUdaModal = Do;
window.parseEvidenceForViewer = Ca;
window.SuperDocViewer = {
  open(t) {
    if (!t) return;
    console.log("[NoteHighlight] SuperDocViewer.open received:", {
      sourceType: t.sourceType,
      type: t.type,
      evidenceId: t.evidenceId,
      sourceId: t.sourceId,
      quoteText: t.quoteText?.slice(0, 60),
      quote: t.quote?.slice(0, 60)
    });
    const n = t.sourceType || t.type || "";
    if (n === "clinical_note" || n === "progress_note" || n === "practitioner_note") {
      const a = t.viewerId || t.sourceId || t.id || "", i = String(a).replace(/^pcc-prognote-/, "").replace(/^pcc-practnote-/, "").replace(/^patient-practnote-/, ""), r = t.quoteText || t.quote || "";
      window.showClinicalNoteModal(i, r || null);
      return;
    }
    if (n === "therapy_doc" || n === "therapy") {
      const a = t.viewerId || t.sourceId || t.id;
      window.showTherapyDocModal(a, t.quote);
      return;
    }
    if (n === "pdf" || n === "document") {
      const a = t.viewerId || t.sourceId || t.id;
      window.showDocumentModal(a, t.wordBlocks || []);
      return;
    }
    if (n === "uda") {
      const a = t.viewerId || t.sourceId || t.evidenceId || t.id || "", i = String(a).replace(/^uda-/, ""), r = t.quoteText || t.quote || "", o = t.patientId || null;
      i && window.showUdaModal(i, r, o);
      return;
    }
    const s = Ca(t);
    if (!(!s?.viewerType || !s.id)) {
      if (s.viewerType === "clinical-note") {
        const a = t.quoteText || t.quote || "";
        window.showClinicalNoteModal(s.id, a || null);
      } else if (s.viewerType === "therapy-document")
        window.showTherapyDocModal(s.id, t.quoteText || t.quote || "");
      else if (s.viewerType === "document")
        window.showDocumentModal(s.id, t.wordBlocks || []);
      else if (s.viewerType === "uda") {
        const a = t.quoteText || t.quote || "";
        window.showUdaModal(s.id, a, t.patientId || null);
      }
    }
  }
};
function ft(t) {
  return t.sourceType === "order" || (t.evidenceId || "").startsWith("order-");
}
function ko(t) {
  return (t.sourceId || t.evidenceId || "").replace(/^order-/, "");
}
function No(t) {
  const n = me(t).viewerType;
  return n === "document" || n === "clinical-note" || n === "therapy-document" || ft(t);
}
function Ta({ item: t, context: n, onClose: s }) {
  const a = t?.mdsItem, i = t?.categoryKey, { data: r, loading: o, error: c } = Da(a, i, n), d = a?.startsWith("I8000:") ? "I8000" : a, [l, p] = v(null), u = ee(/* @__PURE__ */ new Map()), m = ee(null), h = ee(null), g = Co(r).filter(No), f = l && ft(l.ev), b = l ? me(l.ev).viewerType : null, y = b === "clinical-note", I = b === "therapy-document", D = b === "uda", k = l && !f && !y && !I && !D, T = g.filter((P) => ft(P) ? !1 : me(P).viewerType === "document");
  G(() => {
    if (!r || T.length === 0) return;
    (async () => {
      let M;
      try {
        M = await window.getCurrentParams();
      } catch {
        return;
      }
      for (const R of T) {
        const B = me(R);
        if (!B.id || u.current.has(B.id)) continue;
        const X = Ze(B.id, M).then((W) => {
          const q = u.current.get(B.id);
          return q && (q.document = W.document), W.document;
        }).catch((W) => (console.warn("[ItemPopover] Prefetch failed for", B.id, W), null));
        u.current.set(B.id, { document: null, promise: X });
      }
    })();
  }, [r]);
  const [A, x] = v(null), [C, S] = v(!1);
  G(() => {
    if (!l || f || y || I || D) {
      x(null), S(!1);
      return;
    }
    const P = me(l.ev);
    if (!P.id) return;
    const M = u.current.get(P.id);
    if (M?.document) {
      x(M.document), S(!1);
      return;
    }
    S(!0), (async () => {
      try {
        let B;
        if (M?.promise)
          B = await M.promise;
        else {
          const X = await window.getCurrentParams();
          B = (await Ze(P.id, X)).document, u.current.set(P.id, { document: B, promise: Promise.resolve(B) });
        }
        x(B);
      } catch (B) {
        console.error("[ItemPopover] Failed to load document:", B), x(null);
      } finally {
        S(!1);
      }
    })();
  }, [l, f, y, I, D]), G(() => {
    if (!f || !m.current) return;
    const P = m.current, M = ko(l.ev);
    P.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading administrations...</span></div>', window.renderSplitAdministrations ? (async () => {
      const X = getOrg()?.org, W = window.getChatFacilityInfo?.() || "", q = { assessmentId: n?.assessmentId, orgSlug: X, facilityName: W };
      await window.renderSplitAdministrations(P, M, void 0, q);
    })().catch((B) => {
      console.error("[ItemPopover] Failed to load administrations:", B), P.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load administrations</span></div>';
    }) : P.innerHTML = '<div class="cc-pop__viewer-loading"><span>Administration viewer not available</span></div>';
  }, [l, f]), G(() => {
    if (!y && !I || !h.current) return;
    const P = h.current, M = me(l.ev), R = l.ev.quoteText || l.ev.quote || l.ev.snippet || "";
    console.log("[NoteHighlight/popover] viewingSource.ev keys:", Object.keys(l.ev), "quote?", !!R, "first60:", (l.ev.quoteText || l.ev.quote || "").slice(0, 60)), P.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading...</span></div>', (async () => {
      const W = getOrg()?.org, q = window.getChatFacilityInfo?.() || "", H = { assessmentId: n?.assessmentId, orgSlug: W, facilityName: q };
      y && window.renderSplitNote ? await window.renderSplitNote(P, M.id, H, R || null) : I && window.renderSplitTherapy ? await window.renderSplitTherapy(P, M.id, R, H) : P.innerHTML = '<div class="cc-pop__viewer-loading"><span>Viewer not available</span></div>';
    })().catch((X) => {
      console.error("[ItemPopover] Failed to load source:", X), P.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load</span></div>';
    });
  }, [l, y, I]), G(() => {
    if (!D || !h.current) return;
    const P = h.current, M = me(l.ev), R = l.ev.quoteText || l.ev.quote || l.ev.snippet || "";
    P.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading assessment...</span></div>', (async () => {
      window.renderSplitUda ? await window.renderSplitUda(P, M.id, R) : P.innerHTML = '<div class="cc-pop__viewer-loading"><span>UDA viewer not available</span></div>';
    })().catch((X) => {
      console.error("[ItemPopover] Failed to load UDA:", X), P.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load</span></div>';
    });
  }, [l, D]);
  const w = F((P, M) => {
    p({ ev: P, index: M });
  }, []), O = F(() => {
    p(null);
  }, []), E = l !== null;
  return /* @__PURE__ */ e("div", { class: "cc-pop__backdrop", onClick: (P) => {
    P.target === P.currentTarget && s();
  }, children: /* @__PURE__ */ e("div", { class: `cc-pop${E ? " cc-pop--split" : ""}`, onClick: (P) => P.stopPropagation(), children: [
    /* @__PURE__ */ e("div", { class: "cc-pop__header", children: /* @__PURE__ */ e("div", { class: "cc-pop__header-top", children: [
      /* @__PURE__ */ e("div", { class: "cc-pop__header-left", children: [
        E && /* @__PURE__ */ e("button", { class: "cc-pop__back-btn", onClick: O, type: "button", children: [
          /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("polyline", { points: "15 18 9 12 15 6" }) }),
          "Back"
        ] }),
        /* @__PURE__ */ e("span", { class: "cc-pop__code", children: d }),
        /* @__PURE__ */ e("span", { class: "cc-pop__name", children: t?.itemName || r?.item?.description || "Item Detail" })
      ] }),
      /* @__PURE__ */ e("button", { class: "cc-pop__close", onClick: s, type: "button", children: "×" })
    ] }) }),
    E ? /* @__PURE__ */ e("div", { class: "cc-pop__split-body", children: [
      /* @__PURE__ */ e("div", { class: "cc-pop__sources", children: [
        /* @__PURE__ */ e("div", { class: "cc-pop__sources-label", children: [
          "Sources (",
          g.length,
          ")"
        ] }),
        g.map((P, M) => {
          const R = ft(P), B = P.sourceType || kn(P.displayName, P.evidenceId), X = P.displayName || Nn[B] || (R ? "Orders" : "Document"), W = P.quoteText || P.orderDescription || P.quote || P.snippet || P.text || "", q = P.wordBlocks?.[0]?.p, H = l.ev === P;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `cc-pop__source-card${H ? " cc-pop__source-card--active" : ""}`,
              onClick: () => p({ ev: P, index: M }),
              role: "button",
              children: [
                /* @__PURE__ */ e("div", { class: `cc-pop__source-badge${R ? " cc-pop__source-badge--order" : ""}`, children: X }),
                W && /* @__PURE__ */ e("div", { class: "cc-pop__source-snippet", children: W }),
                !R && q && /* @__PURE__ */ e("div", { class: "cc-pop__source-page", children: [
                  "Page ",
                  q
                ] })
              ]
            },
            M
          );
        })
      ] }),
      /* @__PURE__ */ e("div", { class: "cc-pop__viewer", children: [
        k && C && /* @__PURE__ */ e("div", { class: "cc-pop__viewer-loading", children: [
          /* @__PURE__ */ e("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
          /* @__PURE__ */ e("span", { children: "Loading document..." })
        ] }),
        k && !C && A && /* @__PURE__ */ e(
          Cn,
          {
            url: A.signedUrl || null,
            wordBlocks: l.ev.wordBlocks || [],
            targetPage: l.ev.wordBlocks?.[0]?.p || 1,
            title: A.title || "Document",
            documentType: A.documentType,
            effectiveDate: A.effectiveDate,
            fileSize: A.fileSize,
            expiresAt: !0,
            openInNewTabUrl: A.signedUrl || null
          }
        ),
        k && !C && !A && /* @__PURE__ */ e("div", { class: "cc-pop__viewer-loading", children: /* @__PURE__ */ e("span", { children: "Failed to load document" }) }),
        f && /* @__PURE__ */ e("div", { ref: m, class: "cc-pop__admin-viewer" }),
        (y || I || D) && /* @__PURE__ */ e("div", { ref: h, class: "cc-pop__note-viewer" })
      ] })
    ] }) : /* @__PURE__ */ e("div", { class: "cc-pop__body", children: [
      o && /* @__PURE__ */ e("div", { class: "cc-pop__loading", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
        /* @__PURE__ */ e("span", { children: "Loading..." })
      ] }),
      c && /* @__PURE__ */ e("div", { class: "cc-pop__error", children: c }),
      !o && !c && r && /* @__PURE__ */ e(
        Na,
        {
          variant: "compact",
          data: r,
          detectionItem: t,
          mdsItem: a,
          onViewSource: w
        }
      )
    ] }),
    E && !o && !c && r && /* @__PURE__ */ e("div", { style: { padding: "0 16px 12px", flexShrink: 0, borderTop: "1px solid #e5e7eb" }, children: /* @__PURE__ */ e("div", { class: "sid__actions", children: [
      /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--primary", onClick: () => window.QuerySendModal?.show(r.item || r), type: "button", children: "Query Physician" }),
      a && /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--secondary", onClick: () => window.navigateToMDSItem?.(a), type: "button", children: [
        "Go to ",
        d,
        " ↗"
      ] })
    ] }) })
  ] }) });
}
function Co(t) {
  const n = t?.item;
  if (!n) return [];
  if (!!!n.columns) return n.evidence || n.queryEvidence || [];
  const a = [], i = /* @__PURE__ */ new Set();
  for (const r of Object.values(n.columns || {}))
    r?.evidence && r.evidence.forEach((o) => {
      const c = o.sourceId || o.quote || JSON.stringify(o);
      i.has(c) || (i.add(c), a.push(o));
    });
  return a;
}
function So({ facilityName: t, orgSlug: n, enabled: s }) {
  const [a, i] = v(null), [r, o] = v(!1), [c, d] = v(null), l = F(async () => {
    if (!(!t || !n)) {
      o(!0), d(null);
      try {
        const p = new URLSearchParams({
          facilityName: t || "",
          orgSlug: n || ""
        }), u = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/compliance/dashboard?${p}`
        });
        if (!u.success)
          throw new Error(u.error || "Failed to load compliance dashboard");
        i(u.data);
      } catch (p) {
        console.error("[ComplianceDashboard] Failed to fetch:", p), d(p.message || "Failed to load compliance data");
      } finally {
        o(!1);
      }
    }
  }, [t, n, s]);
  return G(() => {
    l();
  }, [l, s]), { data: a, loading: r, error: c, retry: l };
}
function xo({ facilityName: t, orgSlug: n, days: s = 30, enabled: a = !0 }) {
  const [i, r] = v(null), [o, c] = v(!1), [d, l] = v(null), p = F(async () => {
    if (!(!a || !t || !n)) {
      c(!0), l(null);
      try {
        const u = new URLSearchParams({
          days: String(s),
          facilityName: t || "",
          orgSlug: n || ""
        }), m = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/compliance/dashboard/trending?${u}`
        });
        if (!m.success)
          throw new Error(m.error || "Failed to load trending data");
        r(m.data);
      } catch (u) {
        console.error("[Trending] Failed to fetch:", u), l(u.message || "Failed to load trending data");
      } finally {
        c(!1);
      }
    }
  }, [t, n, s, a]);
  return G(() => {
    a && p();
  }, [p, a]), { data: i, loading: o, error: d, retry: p };
}
function cs(t) {
  return new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Po(t) {
  return t >= 80 ? "#22c55e" : t >= 50 ? "#f59e0b" : "#ef4444";
}
function To({ days: t }) {
  const n = t && t.length >= 3, { points: s, polygonPoints: a, color: i, latestScore: r, firstDate: o, lastDate: c } = Z(() => {
    if (!n) return {};
    const d = t.map((_, g) => {
      const f = 5 + g / (t.length - 1) * 290, b = 75 - _.averageScore / 100 * 70;
      return { x: f, y: b };
    }), l = d.map((_) => `${_.x},${_.y}`).join(" "), p = d[d.length - 1], u = d[0], m = l + ` ${p.x},75 ${u.x},75`, h = t[t.length - 1];
    return {
      points: l,
      polygonPoints: m,
      color: Po(h.averageScore),
      latestScore: h.averageScore,
      firstDate: cs(t[0].date),
      lastDate: cs(h.date)
    };
  }, [t, n]);
  return n ? /* @__PURE__ */ e("div", { class: "cpc-cv__trend", children: [
    /* @__PURE__ */ e("svg", { viewBox: "0 0 300 80", width: "100%", height: "80", class: "cpc-cv__trend-svg", children: [
      /* @__PURE__ */ e(
        "polygon",
        {
          points: a,
          fill: i,
          opacity: "0.1"
        }
      ),
      /* @__PURE__ */ e(
        "polyline",
        {
          points: s,
          fill: "none",
          stroke: i,
          "stroke-width": "2"
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__trend-labels", style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#64748b", marginTop: "4px" }, children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__trend-date-start", children: o }),
      /* @__PURE__ */ e("span", { class: "cpc-cv__trend-score", style: { fontSize: "18px", fontWeight: 700, color: i }, children: [
        r,
        "%"
      ] }),
      /* @__PURE__ */ e("span", { class: "cpc-cv__trend-date-end", children: c })
    ] })
  ] }) : null;
}
const Ao = ({ scores: t, width: n = 48, height: s = 16 }) => {
  const { points: a, color: i, isSingle: r } = Z(() => {
    if (!t || t.length === 0)
      return { points: null, color: null, isSingle: !1 };
    const o = t[0].score, c = t[t.length - 1].score, d = c > o ? "#22c55e" : c < o ? "#ef4444" : "#9ca3af";
    if (t.length === 1)
      return { points: null, color: d, isSingle: !0 };
    const l = 1, p = (n - l * 2) / (t.length - 1), u = s - l * 2;
    return { points: t.map((h, _) => {
      const g = l + _ * p, f = l + u - h.score / 100 * u;
      return `${g},${f}`;
    }).join(" "), color: d, isSingle: !1 };
  }, [t, n, s]);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "svg",
    {
      class: "cpc-cv__sparkline",
      width: n,
      height: s,
      viewBox: `0 0 ${n} ${s}`,
      style: { display: "inline-block", verticalAlign: "middle" },
      children: r ? /* @__PURE__ */ e("circle", { cx: n / 2, cy: s / 2, r: 2, fill: i }) : /* @__PURE__ */ e(
        "polyline",
        {
          points: a,
          fill: "none",
          stroke: i,
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      )
    }
  );
};
function Mo({ patientId: t, facilityName: n, orgSlug: s }) {
  const [a, i] = v(null), [r, o] = v(null), [c, d] = v(!0), [l, p] = v(null), [u, m] = v(!1), h = F(async () => {
    if (t) {
      d(!0), p(null);
      try {
        const g = new URLSearchParams({ facilityName: n || "", orgSlug: s || "" }), [f, b] = await Promise.all([
          chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/patients/${t}/coverage/summary?${g}`
          }),
          chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/patients/${t}/coverage/changes?${g}`
          })
        ]);
        if (!f.success)
          throw new Error(f.error || "Failed to load coverage summary");
        i(f.data), o(b.success ? b.data : null);
      } catch (g) {
        console.error("[CoveragePanel] Failed to fetch coverage:", g), p(g.message || "Failed to load coverage data");
      } finally {
        d(!1);
      }
    }
  }, [t, n, s]), _ = F(async () => {
    if (t) {
      m(!0);
      try {
        await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/patients/${t}/care-plans/check`,
          options: { method: "POST" }
        }), await new Promise((g) => setTimeout(g, 5e3)), await h();
      } catch (g) {
        console.error("[CoveragePanel] Refresh failed:", g), p("Refresh failed. Showing cached data.");
      } finally {
        m(!1);
      }
    }
  }, [t, h]);
  return G(() => {
    h();
  }, [h]), { summary: a, changes: r, loading: c, error: l, refreshing: u, refresh: _, retry: h };
}
async function Lo(t, n, s = 5) {
  const a = /* @__PURE__ */ new Map();
  try {
    const i = new URLSearchParams({
      facilityName: t || "",
      orgSlug: n || "",
      limit: String(s)
    }), r = await chrome.runtime.sendMessage({
      type: "API_REQUEST",
      endpoint: `/api/extension/compliance/dashboard/history?${i}`
    });
    if (r?.success && r?.data?.patients)
      for (const [o, c] of Object.entries(r.data.patients))
        Array.isArray(c) && a.set(o, c.map((d) => ({ date: d.checkedAt, score: d.overallScore })));
  } catch (i) {
    console.warn("[PatientHistory] Batch fetch failed:", i);
  }
  return a;
}
function Lt(t) {
  return t >= 80 ? "green" : t >= 50 ? "amber" : "red";
}
const Aa = {
  green: "#22c55e",
  amber: "#f59e0b",
  red: "#ef4444"
};
function Le(t) {
  return t ? t === t.toUpperCase() && t.length > 3 ? t.toLowerCase().replace(/\b\w/g, (n) => n.toUpperCase()) : t : "";
}
function Ma(t) {
  if (!t) return;
  const n = new URL(window.location.href).origin;
  window.location.href = `${n}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=-1&ESOLclientid=${t}`;
}
function Eo({ summary: t }) {
  return t ? /* @__PURE__ */ e("div", { class: "cpc-cv__cards", children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__card", children: [
      /* @__PURE__ */ e("div", { class: `cpc-cv__card-value cpc-cv__card-value--${Lt(t.overallCoverage)}`, children: [
        t.overallCoverage,
        "%"
      ] }),
      /* @__PURE__ */ e("div", { class: "cpc-cv__card-label", children: "Overall Coverage" })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__card", children: [
      /* @__PURE__ */ e("div", { class: "cpc-cv__card-value", children: t.totalGaps }),
      /* @__PURE__ */ e("div", { class: "cpc-cv__card-label", children: "Total Gaps" })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__card", children: [
      /* @__PURE__ */ e("div", { class: "cpc-cv__card-value", children: [
        t.patientsChecked,
        "/",
        t.totalPatients
      ] }),
      /* @__PURE__ */ e("div", { class: "cpc-cv__card-label", children: "Patients Checked" })
    ] }),
    t.patientsStale > 0 && /* @__PURE__ */ e("div", { class: "cpc-cv__card cpc-cv__card--warn", children: [
      /* @__PURE__ */ e("div", { class: "cpc-cv__card-value", children: t.patientsStale }),
      /* @__PURE__ */ e("div", { class: "cpc-cv__card-label", children: "Stale" })
    ] })
  ] }) : null;
}
function $o({ patient: t, histories: n, onOpenCoverage: s }) {
  const a = Lt(t.overallScore ?? 0), i = (t.diagnosisMissing || 0) + (t.diagnosisPartial || 0), r = (t.orderMissing || 0) + (t.orderPartial || 0), o = i + r;
  return /* @__PURE__ */ e("div", { class: "cpc-cv__acard", onClick: () => s(t), children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__acard-top", children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__acard-name", children: Le(t.patientName) }),
      t.levelOfCare && /* @__PURE__ */ e("span", { class: "cpc-cv__acard-loc", children: t.levelOfCare })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__acard-bottom", children: [
      t.hasResults ? /* @__PURE__ */ e(K, { children: [
        /* @__PURE__ */ e("span", { class: "cpc-cv__mini-bar", style: { width: 60 }, children: /* @__PURE__ */ e("span", { class: "cpc-cv__mini-fill", style: { width: `${t.overallScore}%`, background: Aa[a] } }) }),
        /* @__PURE__ */ e("span", { class: `cpc-cv__acard-pct cpc-cv__acard-pct--${a}`, children: [
          t.overallScore,
          "%"
        ] })
      ] }) : /* @__PURE__ */ e("span", { class: "cpc-cv__row-unchecked", children: "Not checked" }),
      o > 0 && /* @__PURE__ */ e("span", { class: "cpc-cv__gap-badge", children: [
        o,
        " gap",
        o !== 1 ? "s" : ""
      ] })
    ] })
  ] });
}
const Ht = 3;
function Ft({ label: t, accent: n, patients: s, histories: a, historiesLoading: i, onOpenCoverage: r, defaultOpen: o }) {
  const [c, d] = v(o), [l, p] = v(!1), m = n === "orange" && i;
  if (!m && (!s || s.length === 0)) return null;
  const h = l ? s : (s || []).slice(0, Ht), _ = (s || []).length - Ht;
  return /* @__PURE__ */ e("div", { class: `cpc-cv__attention-group cpc-cv__attention-group--${n}`, children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__attention-header", onClick: () => d(!c), children: [
      /* @__PURE__ */ e("span", { class: `cpc__section-arrow ${c ? "cpc__section-arrow--open" : ""}`, children: "▶" }),
      /* @__PURE__ */ e("span", { class: "cpc-cv__attention-label", children: t }),
      !m && s && /* @__PURE__ */ e("span", { class: "cpc-cv__attention-count", children: s.length })
    ] }),
    c && /* @__PURE__ */ e("div", { class: "cpc-cv__attention-list", children: m ? /* @__PURE__ */ e("div", { class: "cpc-cv__attention-loading", children: [
      /* @__PURE__ */ e("div", { class: "cpc__spinner cpc__spinner--sm" }),
      /* @__PURE__ */ e("span", { children: "Analyzing trends..." })
    ] }) : /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("div", { class: "cpc-cv__acards", children: h.map((g) => /* @__PURE__ */ e(
        $o,
        {
          patient: g,
          histories: a,
          onOpenCoverage: r
        },
        g.patientId
      )) }),
      !l && _ > 0 && /* @__PURE__ */ e("button", { class: "cpc-cv__view-more", onClick: (g) => {
        g.stopPropagation(), p(!0);
      }, children: [
        "View ",
        _,
        " more"
      ] }),
      l && s.length > Ht && /* @__PURE__ */ e("button", { class: "cpc-cv__view-more", onClick: (g) => {
        g.stopPropagation(), p(!1);
      }, children: "Show less" })
    ] }) })
  ] });
}
function Ro({ patient: t, sparklineScores: n, onOpenCoverage: s }) {
  const a = Lt(t.overallScore ?? 0), i = (t.diagnosisMissing || 0) + (t.diagnosisPartial || 0), r = (t.orderMissing || 0) + (t.orderPartial || 0), o = i + r;
  return /* @__PURE__ */ e("div", { class: "cpc-cv__row", onClick: () => s(t), children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__row-name", children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__row-patient", children: Le(t.patientName) }),
      t.levelOfCare && /* @__PURE__ */ e("span", { class: "cpc-cv__row-loc", children: t.levelOfCare })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__row-score", children: t.hasResults ? /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__mini-bar", children: /* @__PURE__ */ e(
        "span",
        {
          class: "cpc-cv__mini-fill",
          style: { width: `${t.overallScore}%`, background: Aa[a] }
        }
      ) }),
      /* @__PURE__ */ e("span", { class: `cpc-cv__row-pct cpc-cv__row-pct--${a}`, children: [
        t.overallScore,
        "%"
      ] })
    ] }) : /* @__PURE__ */ e("span", { class: "cpc-cv__row-unchecked", children: "Not checked" }) }),
    n && n.length > 1 && /* @__PURE__ */ e(Ao, { scores: n }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__row-gaps", children: o > 0 ? /* @__PURE__ */ e("span", { class: "cpc-cv__gap-badge", children: [
      o,
      " gap",
      o !== 1 ? "s" : ""
    ] }) : t.hasResults ? /* @__PURE__ */ e("span", { class: "cpc-cv__gap-ok", children: "✓" }) : null }),
    t.stale && /* @__PURE__ */ e("span", { class: "cpc-cv__stale-dot", title: "Stale" }),
    /* @__PURE__ */ e(
      "button",
      {
        class: "cpc-cv__row-nav",
        title: "Go to patient in PCC",
        onClick: (c) => {
          c.stopPropagation(), Ma(t.externalPatientId || t.patientId);
        },
        children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
      }
    )
  ] });
}
function ls({ item: t, expanded: n, onToggle: s }) {
  const a = t.type === "diagnosis";
  return /* @__PURE__ */ e("div", { class: `cpd__item ${n ? "cpd__item--open" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "cpd__item-row", onClick: s, children: [
      /* @__PURE__ */ e("span", { class: `cpd__item-dot cpd__item-dot--${t.status}` }),
      /* @__PURE__ */ e("div", { class: "cpd__item-main", children: [
        t.code && /* @__PURE__ */ e("span", { class: "cpd__item-code", children: t.code }),
        /* @__PURE__ */ e("span", { class: "cpd__item-desc", children: Le(t.description) })
      ] }),
      /* @__PURE__ */ e("span", { class: "cpd__item-type", children: a ? "Dx" : "Order" }),
      /* @__PURE__ */ e("span", { class: `cpd__item-chevron ${n ? "cpd__item-chevron--open" : ""}`, children: "▶" })
    ] }),
    n && /* @__PURE__ */ e("div", { class: "cpd__item-detail", children: [
      t.matchedFocus && /* @__PURE__ */ e("div", { class: "cpd__item-field", children: [
        /* @__PURE__ */ e("div", { class: "cpd__item-field-label", children: "Matched Focus" }),
        /* @__PURE__ */ e("div", { class: "cpd__item-field-value", children: t.matchedFocus })
      ] }),
      t.matchedIntervention && /* @__PURE__ */ e("div", { class: "cpd__item-field", children: [
        /* @__PURE__ */ e("div", { class: "cpd__item-field-label", children: "Intervention" }),
        /* @__PURE__ */ e("div", { class: "cpd__item-field-value", children: t.matchedIntervention })
      ] }),
      t.reason && /* @__PURE__ */ e("div", { class: "cpd__item-reason", children: t.reason }),
      !t.matchedFocus && !t.matchedIntervention && !t.reason && /* @__PURE__ */ e("div", { class: "cpd__item-reason", children: "No matching care plan focus found." })
    ] })
  ] });
}
const ds = { covered: 0, partial: 1, missing: 2 };
function qo({ patient: t, facilityName: n, orgSlug: s, onBack: a }) {
  const { summary: i, changes: r, loading: o, error: c, refreshing: d, refresh: l, retry: p } = Mo({
    patientId: t.patientId,
    facilityName: n,
    orgSlug: s
  }), [u, m] = v(null), [h, _] = v(!1), g = i && i.hasResults === !1, f = i && !g, b = Z(() => (i?.gaps || []).filter((A) => A.status === "missing"), [i]), y = Z(() => (i?.gaps || []).filter((A) => A.status === "partial"), [i]), I = (i?.covered || []).length, D = [];
  i?.pendingChanges?.newDiagnoses > 0 && D.push(`${i.pendingChanges.newDiagnoses} new diagnosis${i.pendingChanges.newDiagnoses > 1 ? "es" : ""}`), i?.pendingChanges?.newOrders > 0 && D.push(`${i.pendingChanges.newOrders} new order${i.pendingChanges.newOrders > 1 ? "s" : ""}`);
  const k = Z(() => r?.changes ? r.changes.filter((A) => (ds[A.currentStatus] ?? 0) > (ds[A.previousStatus] ?? 0)) : [], [r]), T = i ? Lt(i.score) : "red";
  return /* @__PURE__ */ e("div", { class: "cpd", children: [
    /* @__PURE__ */ e("div", { class: "cpd__topbar", children: [
      /* @__PURE__ */ e("button", { class: "cpd__back", onClick: a, title: "Back to all patients", children: [
        /* @__PURE__ */ e("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }) }),
        /* @__PURE__ */ e("span", { children: "All Patients" })
      ] }),
      /* @__PURE__ */ e("div", { class: "cpd__topbar-actions", children: [
        i?.stale && /* @__PURE__ */ e("span", { class: "cpd__stale", children: "Stale" }),
        /* @__PURE__ */ e("button", { class: `cpd__refresh ${d ? "cpd__refresh--spin" : ""}`, onClick: l, disabled: d, children: [
          /* @__PURE__ */ e("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ e("polyline", { points: "23 4 23 10 17 10" }),
            /* @__PURE__ */ e("polyline", { points: "1 20 1 14 7 14" }),
            /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })
          ] }),
          d ? "Checking..." : "Re-check"
        ] }),
        /* @__PURE__ */ e("button", { class: "cpd__pcc-link", onClick: () => Ma(t.externalPatientId || t.patientId), title: "Open in PCC", children: [
          "Open in PCC",
          /* @__PURE__ */ e("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpd__hero", children: [
      /* @__PURE__ */ e("div", { class: "cpd__hero-left", children: [
        /* @__PURE__ */ e("div", { class: "cpd__name", children: Le(t.patientName) }),
        /* @__PURE__ */ e("div", { class: "cpd__meta", children: [
          t.levelOfCare && /* @__PURE__ */ e("span", { children: t.levelOfCare }),
          i?.checkedAt && /* @__PURE__ */ e("span", { children: [
            "Checked ",
            new Date(i.checkedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })
          ] })
        ] })
      ] }),
      f && /* @__PURE__ */ e("div", { class: "cpd__hero-right", children: [
        /* @__PURE__ */ e("div", { class: `cpd__score cpd__score--${T}`, children: [
          i.score,
          /* @__PURE__ */ e("span", { children: "%" })
        ] }),
        /* @__PURE__ */ e("div", { class: "cpd__score-detail", children: [
          i.diagnosisCovered,
          "/",
          i.diagnosisTotal,
          " dx · ",
          i.orderCovered,
          "/",
          i.orderTotal,
          " orders"
        ] }),
        /* @__PURE__ */ e("div", { class: "cpd__score-bar", children: /* @__PURE__ */ e("div", { class: `cpd__score-fill cpd__score-fill--${T}`, style: { width: `${i.score}%` } }) })
      ] })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "cpc__loading", children: [
      /* @__PURE__ */ e("div", { class: "cpc__spinner" }),
      /* @__PURE__ */ e("span", { class: "cpc__loading-text", children: "Loading coverage..." })
    ] }),
    c && !o && /* @__PURE__ */ e("div", { class: "cpc__error", children: [
      /* @__PURE__ */ e("div", { class: "cpc__error-text", children: c }),
      /* @__PURE__ */ e("button", { class: "cpc__retry-btn", onClick: p, children: "Try Again" })
    ] }),
    g && !o && !c && /* @__PURE__ */ e("div", { class: "cpd__empty-state", children: [
      /* @__PURE__ */ e("div", { class: "cpd__empty-title", children: "No coverage data yet" }),
      /* @__PURE__ */ e("div", { class: "cpd__empty-sub", children: "Coverage checks run automatically, or click Re-check above." })
    ] }),
    f && !o && !c && /* @__PURE__ */ e("div", { class: "cpd__body", children: [
      D.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__drift", children: [
        /* @__PURE__ */ e("strong", { children: "Drift alert:" }),
        " ",
        D.join(" and "),
        " added since last coverage check. These haven't been reviewed yet."
      ] }),
      k.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__section", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--red", children: "What Got Worse" }),
        k.map((A, x) => /* @__PURE__ */ e("div", { class: "cpd__change-row", children: [
          /* @__PURE__ */ e("span", { class: "cpd__change-arrow", children: "↓" }),
          /* @__PURE__ */ e("span", { class: "cpd__change-code", children: A.code }),
          /* @__PURE__ */ e("span", { class: "cpd__change-desc", children: Le(A.description) }),
          /* @__PURE__ */ e("span", { class: "cpd__change-transition", children: [
            A.previousStatus,
            " ",
            "→",
            " ",
            A.currentStatus
          ] })
        ] }, x))
      ] }),
      b.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__section", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--red", children: [
          "Missing From Care Plan",
          /* @__PURE__ */ e("span", { class: "cpd__section-count", children: b.length })
        ] }),
        /* @__PURE__ */ e("div", { class: "cpd__section-hint", children: "These have no care plan focus at all." }),
        b.map((A, x) => /* @__PURE__ */ e(ls, { item: A, expanded: u === `m-${x}`, onToggle: () => m(u === `m-${x}` ? null : `m-${x}`) }, `m-${x}`))
      ] }),
      y.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__section", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--amber", children: [
          "Partially Covered",
          /* @__PURE__ */ e("span", { class: "cpd__section-count", children: y.length })
        ] }),
        /* @__PURE__ */ e("div", { class: "cpd__section-hint", children: "Has a related focus but it's incomplete or doesn't fully address the issue." }),
        y.map((A, x) => /* @__PURE__ */ e(ls, { item: A, expanded: u === `p-${x}`, onToggle: () => m(u === `p-${x}` ? null : `p-${x}`) }, `p-${x}`))
      ] }),
      I > 0 && /* @__PURE__ */ e("div", { class: "cpd__section cpd__section--muted", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--green cpd__section-head--toggle", onClick: () => _(!h), children: [
          /* @__PURE__ */ e("span", { children: h ? "▼" : "▶" }),
          "Covered",
          /* @__PURE__ */ e("span", { class: "cpd__section-count", children: I })
        ] }),
        h && /* @__PURE__ */ e("div", { class: "cpd__covered-list", children: (i.covered || []).map((A, x) => /* @__PURE__ */ e("div", { class: "cpd__covered-row", children: [
          /* @__PURE__ */ e("span", { class: "cpd__covered-dot" }),
          A.code && /* @__PURE__ */ e("span", { class: "cpd__covered-code", children: A.code }),
          /* @__PURE__ */ e("span", { class: "cpd__covered-desc", children: Le(A.description) }),
          /* @__PURE__ */ e("span", { class: "cpd__covered-type", children: A.type })
        ] }, x)) })
      ] })
    ] })
  ] });
}
function Oo({ data: t, loading: n, error: s, retry: a, trendingData: i, facilityName: r, orgSlug: o, onOpenCoverage: c }) {
  const [d, l] = v("all"), [p, u] = v(null), [m, h] = v(!1), [_, g] = v(null), f = r || t?.facilityName || "", b = o || t?.orgSlug || "";
  G(() => {
    t?.patients?.length && (h(!0), Lo(f, b).then(u).finally(() => h(!1)));
  }, [t?.patients, f, b]);
  const { stalePatients: y, decliningPatients: I, uncheckedPatients: D } = Z(() => {
    if (!t?.patients) return { stalePatients: [], decliningPatients: [], uncheckedPatients: [] };
    const S = t.patients.filter((E) => E.stale), w = t.patients.filter((E) => !E.hasResults);
    let O = [];
    return p && (O = t.patients.filter((E) => {
      const P = p.get(E.patientId);
      return !P || P.length < 2 ? !1 : P[P.length - 1].score < P[0].score;
    })), { stalePatients: S, decliningPatients: O, uncheckedPatients: w };
  }, [t, p]), k = y.length > 0 || I.length > 0 || D.length > 0, T = Z(() => {
    if (!t?.patients) return [];
    let S = t.patients;
    return d === "gaps" ? S = S.filter((w) => w.hasResults && w.overallScore < 100) : d === "unchecked" ? S = S.filter((w) => !w.hasResults) : d === "stale" && (S = S.filter((w) => w.stale)), S;
  }, [t, d]);
  if (n)
    return /* @__PURE__ */ e("div", { class: "cpc__loading", children: [
      /* @__PURE__ */ e("div", { class: "cpc__spinner" }),
      /* @__PURE__ */ e("span", { class: "cpc__loading-text", children: "Loading compliance data..." })
    ] });
  if (s)
    return /* @__PURE__ */ e("div", { class: "cpc__error", children: [
      /* @__PURE__ */ e("div", { class: "cpc__error-text", children: s }),
      /* @__PURE__ */ e("button", { class: "cpc__retry-btn", onClick: a, children: "Try Again" })
    ] });
  if (!t) return null;
  if (_)
    return /* @__PURE__ */ e("div", { class: "cpc-cv", children: /* @__PURE__ */ e(
      qo,
      {
        patient: _,
        facilityName: r || t?.facilityName || "",
        orgSlug: o || t?.orgSlug || "",
        onBack: () => g(null)
      }
    ) });
  const A = t.patients?.filter((S) => !S.hasResults).length || 0, x = t.summary?.patientsStale || 0, C = t.patients?.filter((S) => S.hasResults && S.overallScore < 100).length || 0;
  return /* @__PURE__ */ e("div", { class: "cpc-cv", children: [
    /* @__PURE__ */ e(To, { days: i?.days }),
    /* @__PURE__ */ e(Eo, { summary: t.summary }),
    k && /* @__PURE__ */ e("div", { class: "cpc-cv__attention", children: [
      /* @__PURE__ */ e("div", { class: "cpc-cv__attention-title", children: "Needs Attention" }),
      /* @__PURE__ */ e(
        Ft,
        {
          label: "New Gaps / Stale Data",
          accent: "red",
          patients: y,
          histories: p,
          historiesLoading: m,
          onOpenCoverage: g,
          defaultOpen: !0
        }
      ),
      /* @__PURE__ */ e(
        Ft,
        {
          label: "Declining Coverage",
          accent: "orange",
          patients: I,
          histories: p,
          historiesLoading: m,
          onOpenCoverage: g,
          defaultOpen: !0
        }
      ),
      /* @__PURE__ */ e(
        Ft,
        {
          label: "Never Checked",
          accent: "gray",
          patients: D,
          histories: p,
          historiesLoading: m,
          onOpenCoverage: g,
          defaultOpen: !1
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__filters", children: [
      { value: "all", label: `All (${t.patients?.length || 0})` },
      { value: "gaps", label: `With Gaps (${C})` },
      { value: "unchecked", label: `Unchecked (${A})` },
      ...x > 0 ? [{ value: "stale", label: `Stale (${x})` }] : []
    ].map((S) => /* @__PURE__ */ e(
      "button",
      {
        class: `cpc-cv__filter-pill${d === S.value ? " cpc-cv__filter-pill--active" : ""}`,
        onClick: () => l(S.value),
        children: S.label
      },
      S.value
    )) }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__list", children: T.length === 0 ? /* @__PURE__ */ e("div", { class: "cpc__empty", style: { padding: "24px" }, children: "No patients match this filter." }) : T.map((S) => /* @__PURE__ */ e(
      Ro,
      {
        patient: S,
        sparklineScores: p?.get(S.patientId),
        onOpenCoverage: g
      },
      S.patientId
    )) })
  ] });
}
const Bo = { urgent: "warning", approaching: "warning" };
function Ho(t) {
  return Bo[t] || t || "ok";
}
function us(t) {
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), a = String(t.getDate()).padStart(2, "0");
  return `${n}-${s}-${a}`;
}
function ps(t) {
  const n = new Date(t);
  n.setHours(0, 0, 0, 0);
  const s = n.getDay(), a = s === 0 ? -6 : 1 - s;
  return n.setDate(n.getDate() + a), n;
}
function Gt(t, n) {
  const s = new Date(t);
  return s.setDate(s.getDate() + n), s;
}
function Fo({ facilityName: t, orgSlug: n }) {
  const [s, a] = v(() => ps(/* @__PURE__ */ new Date())), [i, r] = v([]), [o, c] = v(null), [d, l] = v(!0), [p, u] = v(null), m = Z(() => Gt(s, 6), [s]), h = F(async () => {
    if (!t || !n) return;
    l(!0), u(null);
    const b = new URLSearchParams({
      facilityName: t,
      orgSlug: n,
      startDate: us(s),
      endDate: us(m)
    }), y = new URLSearchParams({ facilityName: t, orgSlug: n });
    try {
      const [I, D] = await Promise.all([
        chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/planner/week-events?${b}`,
          options: { method: "GET" }
        }),
        chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/planner/summary?${y}`,
          options: { method: "GET" }
        })
      ]);
      if (!I?.success) throw new Error(I?.error || "Failed to load planner events");
      if (!D?.success) throw new Error(D?.error || "Failed to load planner summary");
      const T = (I.data?.events || []).map((A) => ({ ...A, urgency: Ho(A.urgency) }));
      r(T), c(D.data?.summary || null);
    } catch (I) {
      console.error("[MdsPlanner] fetch failed", I), u(I.message || "Failed to load planner");
    } finally {
      l(!1);
    }
  }, [t, n, s, m]);
  G(() => {
    h();
  }, [h]), G(() => {
    const b = () => h();
    return window.addEventListener("super:query-sent", b), window.addEventListener("super:cert-signed", b), window.addEventListener("super:care-plan-updated", b), () => {
      window.removeEventListener("super:query-sent", b), window.removeEventListener("super:cert-signed", b), window.removeEventListener("super:care-plan-updated", b);
    };
  }, [h]);
  const _ = F(() => a((b) => Gt(b, -7)), []), g = F(() => a((b) => Gt(b, 7)), []), f = F(() => a(ps(/* @__PURE__ */ new Date())), []);
  return {
    events: i,
    summary: o,
    loading: d,
    error: p,
    weekStart: s,
    weekEnd: m,
    goPrevWeek: _,
    goNextWeek: g,
    goThisWeek: f,
    refetch: h
  };
}
function st() {
  return window.location.origin;
}
const yt = (t) => `${st()}/admin/client/cp_residentdashboard.jsp?ESOLrow=1&ESOLclientid=${t}`, ms = (t) => `${st()}/clinical/mds3/sectionlisting.xhtml?ESOLassessid=${t}`, hs = (t) => `${st()}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=-1&ESOLclientid=${t}`, Go = (t, n) => `${st()}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=${t}&ESOLclientid=${n}`, _s = (t, n) => `${st()}/care/chart/cp/careplandetail_rev.jsp?ESOLcareplanid=${t}&ESOLclientid=${n}`;
function Tn(t) {
  if (!t) return null;
  const { type: n, meta: s = {}, patientExternalId: a } = t, i = a;
  switch (n) {
    case "admit":
    case "discharge":
    case "readmit":
      return i ? { url: yt(i), target: "pcc" } : null;
    case "mds_ard":
    case "mds_due":
      return s.pccAssessmentId ? { url: ms(s.pccAssessmentId), target: "pcc" } : i ? { url: yt(i), target: "pcc" } : null;
    case "next_mds_ard":
      return null;
    case "cp_open_needed":
    case "cp_review_expected":
      return i ? { url: hs(i), target: "pcc" } : null;
    case "cp_review_in_progress":
    case "cp_review_due":
      return s.pccCarePlanId && i ? { url: _s(s.pccCarePlanId, i), target: "pcc" } : s.pccReviewId && i ? { url: Go(s.pccReviewId, i), target: "pcc" } : i ? { url: hs(i), target: "pcc" } : null;
    case "cp_completion_due":
      return s.pccCarePlanId && i ? { url: _s(s.pccCarePlanId, i), target: "pcc" } : s.pccAssessmentId ? { url: ms(s.pccAssessmentId), target: "pcc" } : i ? { url: yt(i), target: "pcc" } : null;
    case "query_due":
      return { target: "internal", handler: "query", id: s.queryId };
    case "cert_due":
    case "cert_overdue":
      return { target: "internal", handler: "cert", id: s.certId };
    default:
      return null;
  }
}
function Re(t) {
  const n = Tn(t);
  return n ? n.target === "pcc" && n.url ? (window.location.href = n.url, !0) : n.target === "internal" ? (n.handler === "query" && n.id ? window.dispatchEvent(new CustomEvent("super:open-query", { detail: { queryId: n.id } })) : n.handler === "cert" && n.id && window.dispatchEvent(new CustomEvent("super:open-cert", { detail: { certId: n.id } })), t.patientExternalId && (window.location.href = yt(t.patientExternalId)), !0) : !1 : !1;
}
function xe(t) {
  return t ? t.replace(/Significant Change( in Status)?/gi, "Sig Change").replace(/Significant Correction.*?(Assessment)?/gi, "Sig Correction").replace(/Interim Payment Assessment/gi, "IPA").replace(/Part A PPS Discharge( \(OMRA\))?/gi, "PPS Discharge").replace(/\bDeath in Facility\b/gi, "Death").replace(/\s+/g, " ").trim() : "";
}
const Uo = {
  admit: "admit",
  readmit: "readmit",
  discharge: "discharge",
  mds_ard: "MDS ARD",
  mds_due: "MDS due",
  next_mds_ard: "next ARD",
  cp_open_needed: "CP open",
  cp_review_expected: "CP review",
  cp_review_in_progress: "CP in progress",
  cp_review_due: "CP review",
  cp_completion_due: "CP complete",
  query_due: "query",
  cert_due: "cert",
  cert_overdue: "cert overdue"
}, Vo = {
  admit: /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", children: [
    /* @__PURE__ */ e("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }),
  readmit: /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", children: [
    /* @__PURE__ */ e("polyline", { points: "1 4 1 10 7 10" }),
    /* @__PURE__ */ e("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
  ] }),
  discharge: /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", children: [
    /* @__PURE__ */ e("path", { d: "M14 3h6v6" }),
    /* @__PURE__ */ e("line", { x1: "10", y1: "14", x2: "21", y2: "3" }),
    /* @__PURE__ */ e("path", { d: "M20 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" })
  ] }),
  mds_ard: /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" })
  ] }),
  mds_due: /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ e("line", { x1: "8", y1: "13", x2: "14", y2: "13" }),
    /* @__PURE__ */ e("line", { x1: "8", y1: "17", x2: "12", y2: "17" })
  ] }),
  next_mds_ard: /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ e("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ e("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ e("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }),
  query_due: /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.4", "stroke-linecap": "round", children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] }),
  cert_due: /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ e("path", { d: "M20 7h-7" }),
    /* @__PURE__ */ e("path", { d: "M14 17H5" }),
    /* @__PURE__ */ e("circle", { cx: "17", cy: "17", r: "3" }),
    /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "3" })
  ] }),
  cert_overdue: /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ e("path", { d: "M20 7h-7" }),
    /* @__PURE__ */ e("path", { d: "M14 17H5" }),
    /* @__PURE__ */ e("circle", { cx: "17", cy: "17", r: "3" }),
    /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "3" })
  ] })
};
function zo({ event: t, interactive: n = !1 }) {
  const s = t.urgency || "ok", a = t.type === "mds_ard" || t.type === "mds_due" || t.type === "next_mds_ard", i = a && t.meta?.description ? xe(t.meta.description) : null, r = i ? `${i} ARD` : Uo[t.type] || t.type, o = !!Tn(t), c = t.type === "cp_completion_due" && t.meta?.isProxy === !0, d = n && o, l = a ? "mds-pl__evt--t-mds" : t.type === "admit" || t.type === "readmit" ? "mds-pl__evt--t-admit" : t.type === "discharge" ? "mds-pl__evt--t-dc" : "";
  return /* @__PURE__ */ e(
    "div",
    {
      class: [
        "mds-pl__evt",
        `mds-pl__evt--u-${s}`,
        l,
        c ? "mds-pl__evt--proxy" : "",
        d ? "mds-pl__evt--clickable" : ""
      ].filter(Boolean).join(" "),
      onClick: d ? (p) => {
        p.stopPropagation(), Re(t);
      } : void 0,
      title: d ? "Open in PCC" : void 0,
      children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__evt-bar" }),
        /* @__PURE__ */ e("span", { class: "mds-pl__evt-icon", "aria-hidden": "true", children: Vo[t.type] }),
        /* @__PURE__ */ e("span", { class: "mds-pl__evt-text", children: [
          /* @__PURE__ */ e("span", { class: "mds-pl__evt-who", children: t.patientName || "Unknown" }),
          /* @__PURE__ */ e("span", { class: "mds-pl__evt-tag", children: r })
        ] })
      ]
    }
  );
}
const Wo = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function Qo(t) {
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), a = String(t.getDate()).padStart(2, "0");
  return `${n}-${s}-${a}`;
}
function jo(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
}
const gs = { overdue: 0, warning: 1, ok: 2 };
function Ko(t) {
  return [...t].sort((n, s) => {
    const a = gs[n.urgency] ?? 3, i = gs[s.urgency] ?? 3;
    return a !== i ? a - i : (n.type || "").localeCompare(s.type || "");
  });
}
function Yo({ events: t, weekStart: n, selectedDay: s, onSelectDay: a }) {
  const i = /* @__PURE__ */ new Date();
  i.setHours(0, 0, 0, 0);
  const r = Z(() => {
    const o = [], c = /* @__PURE__ */ new Map();
    for (const d of t || [])
      c.has(d.date) || c.set(d.date, []), c.get(d.date).push(d);
    for (let d = 0; d < 7; d++) {
      const l = new Date(n);
      l.setDate(n.getDate() + d);
      const p = Qo(l);
      o.push({
        date: l,
        iso: p,
        events: Ko(c.get(p) || []),
        isToday: jo(l, i)
      });
    }
    return o;
  }, [t, n]);
  return /* @__PURE__ */ e("div", { class: "mds-pl__week", children: r.map((o) => {
    const c = s === o.iso, d = o.events.length === 0;
    return /* @__PURE__ */ e(
      "div",
      {
        class: `mds-pl__day${o.isToday ? " mds-pl__day--today" : ""}${c ? " mds-pl__day--selected" : ""}${d ? " mds-pl__day--empty" : ""}${a ? " mds-pl__day--clickable" : ""}`,
        onClick: a ? () => a(c ? null : o.iso) : void 0,
        role: a ? "button" : void 0,
        tabIndex: a ? 0 : void 0,
        children: [
          /* @__PURE__ */ e("div", { class: "mds-pl__day-head", children: [
            /* @__PURE__ */ e("span", { class: "mds-pl__day-dow", children: Wo[(o.date.getDay() + 6) % 7] }),
            /* @__PURE__ */ e("span", { class: "mds-pl__day-num", children: o.date.getDate() })
          ] }),
          /* @__PURE__ */ e("div", { class: "mds-pl__day-events", children: [
            o.events.map((l, p) => /* @__PURE__ */ e(zo, { event: l }, `${l.type}-${l.patientId}-${p}`)),
            d && /* @__PURE__ */ e("span", { class: "mds-pl__day-quiet", children: "—" })
          ] })
        ]
      },
      o.iso
    );
  }) });
}
function fs(t) {
  if (!t) return !1;
  const n = new Date(t);
  if (isNaN(n)) return !1;
  const s = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n < s;
}
function ys(t) {
  if (!t) return null;
  const n = new Date(t);
  if (isNaN(n)) return null;
  n.setHours(0, 0, 0, 0);
  const s = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), Math.round((n - s) / 864e5);
}
function Jo(t) {
  if (!t) return [];
  const n = [], s = (i, r, o = {}) => ({
    type: r,
    patientExternalId: i.patientExternalId,
    patientName: i.patientName,
    meta: {
      pccAssessmentId: i.pccAssessmentId,
      pccCarePlanId: i.pccCarePlanId,
      pccReviewId: i.pccReviewId,
      ...o
    }
  });
  for (const i of t.mdsCoding?.patients || []) {
    const r = i.daysToCompleteBy;
    if (r == null) continue;
    const o = i.description ? `MDS · ${xe(i.description)}` : "MDS coding";
    r < 0 ? n.push({ kind: "mds", urgency: "overdue", anchor: "mds-coding", patient: i.patientName, label: o, detail: `${Math.abs(r)}d past lock`, sort: -100 + r, event: s(i, "mds_ard") }) : r <= 2 && n.push({ kind: "mds", urgency: "warning", anchor: "mds-coding", patient: i.patientName, label: o, detail: `${r}d to lock`, sort: r, event: s(i, "mds_ard") });
  }
  for (const i of t.carePlansToOpen?.patients || []) {
    const r = i.hoursSinceAdmit || 0;
    r >= 48 ? n.push({ kind: "cp_open", urgency: "overdue", anchor: "cp-open", patient: i.patientName, label: "Care plan to open", detail: `${r}h since admit`, sort: -80 - r / 24, event: s(i, "cp_open_needed") }) : r >= 24 && n.push({ kind: "cp_open", urgency: "warning", anchor: "cp-open", patient: i.patientName, label: "Care plan to open", detail: `${r}h since admit`, sort: 2, event: s(i, "cp_open_needed") });
  }
  for (const i of t.carePlansToReview?.patients || []) {
    const r = i.state === "overdue" || fs(i.expectedDate), o = ys(i.expectedDate), c = i.state === "in_progress" ? "cp_review_in_progress" : "cp_review_due";
    r ? n.push({ kind: "cp_review", urgency: "overdue", anchor: "cp-review", patient: i.patientName, label: "Care plan review", detail: o != null ? `${Math.abs(o)}d past due` : "past due", sort: -60 + (o ?? 0), event: s(i, c) }) : o != null && o <= 2 && n.push({ kind: "cp_review", urgency: "warning", anchor: "cp-review", patient: i.patientName, label: "Care plan review", detail: `due in ${o}d`, sort: o, event: s(i, c) });
  }
  for (const i of t.interviewsOwed?.patients || [])
    if (fs(i.dueDate)) {
      const r = ys(i.dueDate) || 0, o = (i.dueType || "").toUpperCase(), c = i.mdsDescription ? `${o} interview · ${xe(i.mdsDescription)}` : `${o} interview`;
      n.push({ kind: "interview", urgency: "overdue", anchor: "interviews", patient: i.patientName, label: c, detail: `${Math.abs(r)}d past due`, sort: -40 + r, event: s(i, "mds_ard") });
    }
  const a = t.certs?.overdueList;
  if (Array.isArray(a) && a.length > 0)
    for (const i of a) {
      const r = "cert_overdue", o = i.type === "day_14_recert" ? "Day-14 recert" : i.type === "day_30_recert" ? "Day-30 recert" : i.type === "initial" ? "Initial cert" : "Cert", c = i.bucket === "awaiting_signature" ? "awaiting sig" : "to send";
      n.push({
        kind: "cert",
        urgency: "overdue",
        anchor: "certs",
        patient: i.patientName,
        label: `${o} · ${c}`,
        detail: `${i.daysOverdue}d overdue`,
        sort: -20 - (i.daysOverdue || 0),
        event: {
          type: r,
          patientExternalId: i.patientExternalId,
          patientName: i.patientName,
          meta: { certId: i.certId, type: i.type, bucket: i.bucket, daysOverdue: i.daysOverdue }
        }
      });
    }
  else {
    const i = t.certs?.needsToSend?.overdueCount || 0, r = t.certs?.awaitingSignature?.overdueCount || 0;
    i > 0 && n.push({ kind: "cert", urgency: "overdue", anchor: "certs", patient: null, label: "Certs to send", detail: `${i} overdue`, sort: -20, event: null }), r > 0 && n.push({ kind: "cert", urgency: "overdue", anchor: "certs", patient: null, label: "Certs awaiting sig", detail: `${r} overdue`, sort: -19, event: null });
  }
  return n.sort((i, r) => i.sort - r.sort);
}
const Zo = {
  mds: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" })
  ] }),
  cp_open: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
    /* @__PURE__ */ e("path", { d: "M12 20h9" }),
    /* @__PURE__ */ e("path", { d: "M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
  ] }),
  cp_review: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ e("polyline", { points: "20 6 9 17 4 12" }) }),
  interview: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ e("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }) }),
  cert: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "7" }),
    /* @__PURE__ */ e("polyline", { points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" })
  ] })
};
function Xo(t) {
  const n = document.getElementById(`mds-pl-q-${t}`);
  n && n.scrollIntoView({ behavior: "smooth", block: "start" });
}
function ec(t) {
  t.event && Re(t.event) || Xo(t.anchor);
}
function tc({ summary: t }) {
  const n = Jo(t);
  if (n.length === 0)
    return /* @__PURE__ */ e("div", { class: "mds-pl__focus mds-pl__focus--empty", children: /* @__PURE__ */ e("div", { class: "mds-pl__focus-head", children: [
      /* @__PURE__ */ e("span", { class: "mds-pl__focus-title", children: "Today's focus" }),
      /* @__PURE__ */ e("span", { class: "mds-pl__focus-clear", children: "All caught up ✓" })
    ] }) });
  const [s, a] = v(!1), i = n.filter((l) => l.urgency === "overdue").length, r = n.filter((l) => l.urgency === "warning").length, o = 5, c = s ? n : n.slice(0, o), d = n.length - c.length;
  return /* @__PURE__ */ e("div", { class: "mds-pl__focus", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__focus-head", children: [
      /* @__PURE__ */ e("span", { class: "mds-pl__focus-title", children: "Today's focus" }),
      /* @__PURE__ */ e("span", { class: "mds-pl__focus-summary", children: [
        i > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__focus-count mds-pl__focus-count--overdue", children: [
          i,
          " overdue"
        ] }),
        i > 0 && r > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__focus-sep", children: " · " }),
        r > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__focus-count mds-pl__focus-count--warning", children: [
          r,
          " soon"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-pl__focus-list", children: [
      c.map((l, p) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `mds-pl__focus-row mds-pl__focus-row--${l.urgency}`,
          onClick: () => ec(l),
          title: l.event ? `Open ${l.patient || l.label} in PCC` : `Jump to ${l.label}`,
          children: [
            /* @__PURE__ */ e("span", { class: "mds-pl__focus-icon", children: Zo[l.kind] }),
            /* @__PURE__ */ e("span", { class: "mds-pl__focus-main", children: [
              l.patient && /* @__PURE__ */ e(K, { children: [
                /* @__PURE__ */ e("span", { class: "mds-pl__focus-patient", children: l.patient }),
                " "
              ] }),
              /* @__PURE__ */ e("span", { class: "mds-pl__focus-label", children: l.label })
            ] }),
            /* @__PURE__ */ e("span", { class: "mds-pl__focus-detail", children: l.detail }),
            /* @__PURE__ */ e("span", { class: "mds-pl__focus-chev", "aria-hidden": "true", children: "›" })
          ]
        },
        p
      )),
      d > 0 && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "mds-pl__focus-more",
          onClick: () => a(!0),
          children: [
            "+ ",
            d,
            " more — show all"
          ]
        }
      ),
      s && n.length > o && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "mds-pl__focus-more",
          onClick: () => a(!1),
          children: "Show fewer"
        }
      )
    ] })
  ] });
}
const vs = 14;
function De(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function xt(t) {
  if (!t) return !1;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n < s;
}
function nc({ count: t, overdueCount: n = 0, doneCount: s = 0 }) {
  const a = typeof t == "number" ? t : parseInt(t, 10) || 0, i = Math.max(0, a - n), r = [];
  return n > 0 && r.push(/* @__PURE__ */ e("span", { class: "mds-pl__q-count-overdue", children: [
    n,
    " overdue"
  ] })), i > 0 && n > 0 && r.push(/* @__PURE__ */ e("span", { class: "mds-pl__q-count-rest", children: [
    i,
    " open"
  ] })), r.length === 0 && r.push(/* @__PURE__ */ e("span", { children: a })), s > 0 && r.push(/* @__PURE__ */ e("span", { class: "mds-pl__q-count-done", children: [
    s,
    " done"
  ] })), /* @__PURE__ */ e("span", { class: "mds-pl__q-count", children: r.map((o, c) => /* @__PURE__ */ e(K, { children: [
    c > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__q-count-sep", children: " · " }),
    o
  ] })) });
}
function ye({ title: t, count: n, overdueCount: s = 0, doneCount: a = 0, footer: i, anchor: r, children: o }) {
  return /* @__PURE__ */ e("div", { class: "mds-pl__q", id: r ? `mds-pl-q-${r}` : void 0, children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__q-head", children: [
      /* @__PURE__ */ e("h3", { class: "mds-pl__q-title", children: t }),
      /* @__PURE__ */ e(nc, { count: n, overdueCount: s, doneCount: a })
    ] }),
    o,
    i && /* @__PURE__ */ e("div", { class: "mds-pl__q-footer", children: i })
  ] });
}
function Ge({ completed: t, renderRow: n, windowLabel: s = "this week" }) {
  if (!t || t.count === 0) return null;
  const [a, i] = v(!1), r = t.patients || [];
  return /* @__PURE__ */ e("div", { class: `mds-pl__done ${a ? "mds-pl__done--open" : ""}`, children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        class: "mds-pl__done-toggle",
        onClick: () => i(!a),
        "aria-expanded": a,
        children: [
          /* @__PURE__ */ e("svg", { class: "mds-pl__done-check", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("polyline", { points: "20 6 9 17 4 12" }) }),
          /* @__PURE__ */ e("span", { class: "mds-pl__done-label", children: [
            t.count,
            " done ",
            s
          ] }),
          /* @__PURE__ */ e("span", { class: "mds-pl__done-chev", "aria-hidden": "true", children: a ? "▾" : "▸" })
        ]
      }
    ),
    a && r.length > 0 && /* @__PURE__ */ e("div", { class: "mds-pl__done-body", children: r.map(n) })
  ] });
}
function Ne(t) {
  if (t)
    return (n) => {
      n.target.closest("button, a") || Re(t);
    };
}
const sc = /* @__PURE__ */ new Set(["In Progress", "Open", "Started", "Not Started"]);
function ac(t) {
  return t.status ? t.isLocked === !0 ? !1 : sc.has(t.status) : !0;
}
function ic(t) {
  const n = t.daysToCompleteBy;
  if (n == null) return "pace-ok";
  if (n < 0) return "pace-over";
  const s = t.sectionsTotal || 0;
  if (s === 0) return "pace-ok";
  const i = Math.max(0, vs - n) / vs;
  return (t.sectionsCompleted || 0) / s < i - 0.05 ? "pace-behind" : "pace-ok";
}
function rc({ data: t }) {
  const n = (t?.patients || []).filter(ac), s = t?.completedRecently, a = s?.count || 0;
  if (!t || n.length === 0 && a === 0)
    return /* @__PURE__ */ e(ye, { title: "MDS Coding", count: "0", anchor: "mds-coding", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "No MDS in the coding window." }) });
  const i = n.filter((r) => r.daysToCompleteBy != null && r.daysToCompleteBy < 0).length;
  return /* @__PURE__ */ e(
    ye,
    {
      title: "MDS Coding",
      count: n.length,
      overdueCount: i,
      doneCount: a,
      anchor: "mds-coding",
      children: [
        n.length > 0 ? /* @__PURE__ */ e("table", { class: "mds-pl__t mds-pl__t--coding", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: [
            /* @__PURE__ */ e("th", { children: "Patient" }),
            /* @__PURE__ */ e("th", { children: "ARD" }),
            /* @__PURE__ */ e("th", { children: "Progress" }),
            /* @__PURE__ */ e("th", { children: "Due" })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: n.slice(0, 6).map((r) => {
            const o = r.sectionsTotal ? Math.round(r.sectionsCompleted / r.sectionsTotal * 100) : 0, c = r.daysToCompleteBy != null && r.daysToCompleteBy < 0, d = ic(r), l = c ? "mds-pl__trow--overdue" : d === "pace-behind" ? "mds-pl__trow--warning" : "", p = {
              type: "mds_ard",
              patientExternalId: r.patientExternalId,
              patientName: r.patientName,
              meta: { pccAssessmentId: r.pccAssessmentId }
            };
            return /* @__PURE__ */ e(
              "tr",
              {
                class: `${l} mds-pl__trow--clickable`.trim(),
                onClick: Ne(p),
                title: `Open ${r.patientName} MDS in PCC`,
                children: [
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: [
                    /* @__PURE__ */ e("div", { class: "mds-pl__t-name-main", children: r.patientName }),
                    r.description && /* @__PURE__ */ e("div", { class: "mds-pl__t-name-sub", children: xe(r.description) })
                  ] }),
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-date", children: De(r.ardDate) }),
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-progress", children: [
                    /* @__PURE__ */ e("span", { class: `mds-pl__bar mds-pl__bar--${d}`, children: /* @__PURE__ */ e("span", { class: "mds-pl__bar-fill", style: { width: `${o}%` } }) }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__bar-label", children: [
                      r.sectionsCompleted,
                      "/",
                      r.sectionsTotal
                    ] })
                  ] }),
                  /* @__PURE__ */ e("td", { class: `mds-pl__t-date${c ? " mds-pl__t-date--over" : ""}`, children: c ? `${Math.abs(r.daysToCompleteBy)}d over` : `${r.daysToCompleteBy}d left` })
                ]
              },
              r.assessmentId || r.patientId
            );
          }) })
        ] }) : null,
        /* @__PURE__ */ e(
          Ge,
          {
            completed: s,
            renderRow: (r) => {
              const o = {
                type: "mds_ard",
                patientExternalId: r.patientExternalId,
                patientName: r.patientName,
                meta: { pccAssessmentId: r.pccAssessmentId }
              };
              return /* @__PURE__ */ e(
                "div",
                {
                  class: "mds-pl__done-row",
                  onClick: Ne(o),
                  title: `Open ${r.patientName} MDS in PCC`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: r.patientName }),
                    r.description && /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: xe(r.description) }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "locked ",
                      De(r.lockedAt)
                    ] })
                  ]
                },
                r.assessmentId || r.patientId
              );
            }
          }
        )
      ]
    }
  );
}
function oc({ data: t }) {
  const n = t?.completedRecently, s = n?.count || 0;
  return !t || t.count === 0 && s === 0 ? /* @__PURE__ */ e(ye, { title: "Care Plans to Open", count: "0", anchor: "cp-open", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "Nothing to open." }) }) : /* @__PURE__ */ e(
    ye,
    {
      title: "Care Plans to Open",
      count: t.count,
      overdueCount: (t.patients || []).filter((a) => a.hoursSinceAdmit >= 48).length,
      doneCount: s,
      anchor: "cp-open",
      children: [
        t.count > 0 && /* @__PURE__ */ e("table", { class: "mds-pl__t mds-pl__t--cpopen", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: [
            /* @__PURE__ */ e("th", { children: "Patient" }),
            /* @__PURE__ */ e("th", { children: "Admit" }),
            /* @__PURE__ */ e("th", { children: "Since" })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: t.patients.slice(0, 6).map((a) => {
            const i = a.hoursSinceAdmit >= 48, r = a.hoursSinceAdmit >= 24 && !i, o = i ? "mds-pl__trow--overdue" : r ? "mds-pl__trow--warning" : "", c = {
              type: "cp_open_needed",
              patientExternalId: a.patientExternalId,
              patientName: a.patientName,
              meta: {}
            };
            return /* @__PURE__ */ e(
              "tr",
              {
                class: `${o} mds-pl__trow--clickable`.trim(),
                onClick: Ne(c),
                title: `Open new care plan for ${a.patientName}`,
                children: [
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: a.patientName }),
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-date", children: De(a.admitDate) }),
                  /* @__PURE__ */ e("td", { class: `mds-pl__t-date${i ? " mds-pl__t-date--over" : ""}`, children: [
                    a.hoursSinceAdmit,
                    "h"
                  ] })
                ]
              },
              a.patientId
            );
          }) })
        ] }),
        /* @__PURE__ */ e(
          Ge,
          {
            completed: n,
            renderRow: (a) => {
              const i = {
                type: "cp_review_in_progress",
                patientExternalId: a.patientExternalId,
                patientName: a.patientName,
                meta: { pccCarePlanId: a.pccCarePlanId }
              };
              return /* @__PURE__ */ e(
                "div",
                {
                  class: "mds-pl__done-row",
                  onClick: Ne(i),
                  title: `Open care plan for ${a.patientName}`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: a.patientName }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "opened ",
                      De(a.carePlanOpenedAt)
                    ] })
                  ]
                },
                a.patientId
              );
            }
          }
        )
      ]
    }
  );
}
function cc({ data: t }) {
  const n = t?.completedRecently, s = n?.count || 0;
  if (!t || t.count === 0 && s === 0)
    return /* @__PURE__ */ e(ye, { title: "Care Plans to Review", count: "0", anchor: "cp-review", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "All caught up." }) });
  const a = (t.patients || []).filter((i) => i.state === "overdue" || xt(i.expectedDate)).length;
  return /* @__PURE__ */ e(
    ye,
    {
      title: "Care Plans to Review",
      count: t.count,
      overdueCount: a,
      doneCount: s,
      anchor: "cp-review",
      children: [
        t.count > 0 && /* @__PURE__ */ e("table", { class: "mds-pl__t mds-pl__t--cpreview", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: [
            /* @__PURE__ */ e("th", { children: "Patient" }),
            /* @__PURE__ */ e("th", { children: "Due" }),
            /* @__PURE__ */ e("th", { children: "State" })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: t.patients.slice(0, 6).map((i) => {
            const r = i.state === "overdue" || xt(i.expectedDate), o = r ? "mds-pl__trow--overdue" : "", d = {
              type: i.state === "in_progress" ? "cp_review_in_progress" : "cp_review_due",
              patientExternalId: i.patientExternalId,
              patientName: i.patientName,
              meta: { pccCarePlanId: i.pccCarePlanId, pccReviewId: i.pccReviewId }
            };
            return /* @__PURE__ */ e(
              "tr",
              {
                class: `${o} mds-pl__trow--clickable`.trim(),
                onClick: Ne(d),
                title: `Open care plan for ${i.patientName}`,
                children: [
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: i.patientName }),
                  /* @__PURE__ */ e("td", { class: `mds-pl__t-date${r ? " mds-pl__t-date--over" : ""}`, children: De(i.expectedDate) }),
                  /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e("span", { class: `mds-pl__chip mds-pl__chip--${i.state}`, children: i.state.replace("_", " ") }) })
                ]
              },
              `${i.patientId}-${i.expectedDate}`
            );
          }) })
        ] }),
        /* @__PURE__ */ e(
          Ge,
          {
            completed: n,
            renderRow: (i) => {
              const r = {
                type: "cp_review_in_progress",
                patientExternalId: i.patientExternalId,
                patientName: i.patientName,
                meta: { pccCarePlanId: i.pccCarePlanId, pccReviewId: i.pccReviewId }
              };
              return /* @__PURE__ */ e(
                "div",
                {
                  class: "mds-pl__done-row",
                  onClick: Ne(r),
                  title: `Open care plan for ${i.patientName}`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: i.patientName }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "reviewed ",
                      De(i.reviewCompletedAt)
                    ] })
                  ]
                },
                i.patientId
              );
            }
          }
        )
      ]
    }
  );
}
function lc({ data: t, onOpenQueriesTab: n }) {
  if (!t) return null;
  const s = t.completedRecently, a = s?.count || 0;
  return /* @__PURE__ */ e(
    ye,
    {
      title: "Queries Outstanding",
      count: t.count,
      doneCount: a,
      anchor: "queries",
      footer: n && /* @__PURE__ */ e("button", { class: "mds-pl__q-link", onClick: n, children: "Open Queries tab ›" }),
      children: [
        /* @__PURE__ */ e("div", { class: "mds-pl__q-split", children: [
          /* @__PURE__ */ e("div", { class: "mds-pl__q-split-item", children: [
            /* @__PURE__ */ e("div", { class: "mds-pl__q-split-num", children: t.sent }),
            /* @__PURE__ */ e("div", { class: "mds-pl__q-split-label", children: "awaiting doctor" })
          ] }),
          /* @__PURE__ */ e("div", { class: "mds-pl__q-split-item", children: [
            /* @__PURE__ */ e("div", { class: "mds-pl__q-split-num", children: t.pending }),
            /* @__PURE__ */ e("div", { class: "mds-pl__q-split-label", children: "to send" })
          ] })
        ] }),
        /* @__PURE__ */ e(
          Ge,
          {
            completed: s,
            renderRow: (i) => /* @__PURE__ */ e("div", { class: "mds-pl__done-row", children: [
              /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: i.patientName }),
              i.itemCode && /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: i.itemCode }),
              /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                "signed ",
                De(i.signedAt)
              ] })
            ] }, i.queryId)
          }
        )
      ]
    }
  );
}
function dc({ data: t, onOpenCertsTab: n }) {
  if (!t) return null;
  const s = t.needsToSend || {}, a = t.awaitingSignature || {}, i = (s.overdueCount || 0) + (a.overdueCount || 0), r = t.completedRecently, o = r?.count || 0;
  return /* @__PURE__ */ e(
    ye,
    {
      title: "Certs",
      count: t.count,
      overdueCount: i,
      doneCount: o,
      anchor: "certs",
      footer: n && /* @__PURE__ */ e("button", { class: "mds-pl__q-link", onClick: n, children: "Open Certs tab ›" }),
      children: [
        /* @__PURE__ */ e("div", { class: "mds-pl__q-split", children: [
          /* @__PURE__ */ e("div", { class: "mds-pl__q-split-item", children: [
            /* @__PURE__ */ e("div", { class: "mds-pl__q-split-num", children: s.count || 0 }),
            /* @__PURE__ */ e("div", { class: "mds-pl__q-split-label", children: [
              "to send",
              s.upcomingCount ? ` · ${s.upcomingCount} soon` : "",
              s.overdueCount ? ` · ${s.overdueCount} overdue` : ""
            ] })
          ] }),
          /* @__PURE__ */ e("div", { class: "mds-pl__q-split-item", children: [
            /* @__PURE__ */ e("div", { class: "mds-pl__q-split-num", children: a.count || 0 }),
            /* @__PURE__ */ e("div", { class: "mds-pl__q-split-label", children: [
              "awaiting sig",
              a.overdueCount ? ` · ${a.overdueCount} overdue` : ""
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e(
          Ge,
          {
            completed: r,
            renderRow: (c) => {
              const d = c.type === "day_14_recert" ? "Day-14 recert" : c.type === "day_30_recert" ? "Day-30 recert" : c.type === "initial" ? "Initial cert" : "Cert";
              return /* @__PURE__ */ e("div", { class: "mds-pl__done-row", children: [
                /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: c.patientName }),
                /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: d }),
                /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                  "signed ",
                  De(c.signedAt)
                ] })
              ] }, c.certId);
            }
          }
        )
      ]
    }
  );
}
const uc = {
  not_open: "Not open",
  in_progress: "In progress",
  overdue: "Overdue"
};
function pc(t) {
  return xt(t.dueDate) ? "overdue" : t.status || "not_open";
}
function mc({ status: t }) {
  const n = uc[t] || "Not open";
  return /* @__PURE__ */ e("span", { class: `mds-pl__sicon mds-pl__sicon--${t === "overdue" ? "overdue" : t === "in_progress" ? "progress" : "idle"}`, role: "img", "aria-label": n, title: n, children: t === "overdue" ? /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ e("path", { d: "M12 3 L22 20 L2 20 Z" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "10", x2: "12", y2: "14" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] }) : t === "in_progress" ? /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ e("path", { d: "M12 3 A9 9 0 0 1 12 21 Z", fill: "currentColor", stroke: "none" })
  ] }) : /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }) }) });
}
function hc({ data: t }) {
  if (!t) return null;
  const n = t.byType || {}, s = t.patients || [], a = t.completedRecently, i = a?.count || 0, r = s.length;
  if (r === 0 && i === 0)
    return /* @__PURE__ */ e(ye, { title: "Interviews Owed", count: "0", anchor: "interviews", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "All interviews caught up." }) });
  const o = s.filter((c) => xt(c.dueDate)).length;
  return /* @__PURE__ */ e(
    ye,
    {
      title: "Interviews Owed",
      count: r,
      overdueCount: o,
      doneCount: i,
      anchor: "interviews",
      children: [
        r > 0 && /* @__PURE__ */ e(K, { children: [
          /* @__PURE__ */ e("div", { class: "mds-pl__q-chips", children: [
            n.gg ? /* @__PURE__ */ e("span", { class: "mds-pl__chip mds-pl__chip--gg", children: [
              "GG · ",
              n.gg
            ] }) : null,
            n.bims ? /* @__PURE__ */ e("span", { class: "mds-pl__chip mds-pl__chip--bims", children: [
              "BIMS · ",
              n.bims
            ] }) : null,
            n.phq ? /* @__PURE__ */ e("span", { class: "mds-pl__chip mds-pl__chip--phq", children: [
              "PHQ · ",
              n.phq
            ] }) : null
          ] }),
          /* @__PURE__ */ e("table", { class: "mds-pl__t mds-pl__t--interviews", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: [
              /* @__PURE__ */ e("th", { children: "Patient" }),
              /* @__PURE__ */ e("th", { children: "Type" }),
              /* @__PURE__ */ e("th", { children: "Due" }),
              /* @__PURE__ */ e("th", { class: "mds-pl__t-status-head", children: "Status" })
            ] }) }),
            /* @__PURE__ */ e("tbody", { children: s.slice(0, 6).map((c) => {
              const d = pc(c), l = d === "overdue", p = l ? "mds-pl__trow--overdue" : "", u = `${c.patientId}-${c.dueType}-${(c.assessmentIds || []).join(",") || c.assessmentId || ""}`, m = {
                type: "mds_ard",
                patientExternalId: c.patientExternalId,
                patientName: c.patientName,
                meta: { pccAssessmentId: c.pccAssessmentId }
              };
              return /* @__PURE__ */ e(
                "tr",
                {
                  class: `${p} mds-pl__trow--clickable`.trim(),
                  onClick: Ne(m),
                  title: `Open ${c.patientName} MDS in PCC`,
                  children: [
                    /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: c.patientName }),
                    /* @__PURE__ */ e("td", { class: "mds-pl__t-type", children: [
                      /* @__PURE__ */ e("div", { class: "mds-pl__t-type-main", children: (c.dueType || "").toUpperCase() }),
                      c.mdsDescription && /* @__PURE__ */ e("div", { class: "mds-pl__t-type-sub", children: xe(c.mdsDescription) })
                    ] }),
                    /* @__PURE__ */ e("td", { class: `mds-pl__t-date${l ? " mds-pl__t-date--over" : ""}`, children: De(c.dueDate) }),
                    /* @__PURE__ */ e("td", { class: "mds-pl__t-status", children: /* @__PURE__ */ e(mc, { status: d }) })
                  ]
                },
                u
              );
            }) })
          ] })
        ] }),
        /* @__PURE__ */ e(
          Ge,
          {
            completed: a,
            renderRow: (c) => {
              const d = {
                type: "mds_ard",
                patientExternalId: c.patientExternalId,
                patientName: c.patientName,
                meta: { pccAssessmentId: c.pccAssessmentId }
              };
              return /* @__PURE__ */ e(
                "div",
                {
                  class: "mds-pl__done-row",
                  onClick: Ne(d),
                  title: `Open ${c.patientName} MDS in PCC`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: c.patientName }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: [
                      (c.dueType || "").toUpperCase(),
                      c.mdsDescription && /* @__PURE__ */ e(K, { children: [
                        " · ",
                        xe(c.mdsDescription)
                      ] })
                    ] }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "done ",
                      De(c.completedAt)
                    ] })
                  ]
                },
                `${c.patientId}-${c.dueType}-${c.assessmentId || ""}`
              );
            }
          }
        )
      ]
    }
  );
}
function _c({ mcr: t, managed: n }) {
  if (!t && !n) return null;
  const s = (t?.count || 0) + (n?.count || 0);
  return /* @__PURE__ */ e(ye, { title: "Skilled Census", count: `${s} total`, anchor: "skilled", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-roster", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__q-roster-col", children: [
      /* @__PURE__ */ e("div", { class: "mds-pl__q-roster-head", children: [
        "Medicare A · ",
        t?.count || 0
      ] }),
      (t?.patients || []).slice(0, 5).map((a) => /* @__PURE__ */ e(
        "div",
        {
          class: `mds-pl__q-roster-name${a.patientExternalId ? " mds-pl__q-roster-name--clickable" : ""}`,
          onClick: a.patientExternalId ? () => Re({
            type: "admit",
            patientExternalId: a.patientExternalId,
            patientName: a.patientName,
            meta: {}
          }) : void 0,
          title: a.patientExternalId ? `Open ${a.patientName} in PCC` : void 0,
          children: a.patientName
        },
        a.patientId
      ))
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-pl__q-roster-col", children: [
      /* @__PURE__ */ e("div", { class: "mds-pl__q-roster-head", children: [
        "Managed · ",
        n?.count || 0
      ] }),
      (n?.patients || []).slice(0, 5).map((a) => /* @__PURE__ */ e(
        "div",
        {
          class: `mds-pl__q-roster-name${a.patientExternalId ? " mds-pl__q-roster-name--clickable" : ""}`,
          onClick: a.patientExternalId ? () => Re({
            type: "admit",
            patientExternalId: a.patientExternalId,
            patientName: a.patientName,
            meta: {}
          }) : void 0,
          title: a.patientExternalId ? `Open ${a.patientName} in PCC` : void 0,
          children: a.patientName
        },
        a.patientId
      ))
    ] })
  ] }) });
}
function gc({ summary: t, onOpenQueriesTab: n, onOpenCertsTab: s }) {
  return t ? /* @__PURE__ */ e("div", { class: "mds-pl__queues-wrap", children: [
    /* @__PURE__ */ e(tc, { summary: t }),
    /* @__PURE__ */ e("div", { class: "mds-pl__queues", children: [
      /* @__PURE__ */ e(rc, { data: t.mdsCoding }),
      /* @__PURE__ */ e(oc, { data: t.carePlansToOpen }),
      /* @__PURE__ */ e(cc, { data: t.carePlansToReview }),
      /* @__PURE__ */ e(lc, { data: t.queriesOpen, onOpenQueriesTab: n }),
      /* @__PURE__ */ e(dc, { data: t.certs, onOpenCertsTab: s }),
      /* @__PURE__ */ e(hc, { data: t.interviewsOwed }),
      /* @__PURE__ */ e(_c, { mcr: t.skilledMCR, managed: t.skilledManagedCare })
    ] })
  ] }) : null;
}
const fc = {
  admit: "Admission",
  readmit: "Readmit",
  discharge: "Discharge",
  mds_ard: "MDS ARD",
  next_mds_ard: "Next MDS ARD (forecast)",
  query_due: "Query",
  cert_due: "Certification due",
  cert_overdue: "Certification overdue"
}, yc = {
  overdue: "Overdue",
  warning: "Due soon",
  ok: ""
}, bs = { overdue: 0, warning: 1, ok: 2 };
function vc(t) {
  const [n, s, a] = t.split("-").map(Number);
  return new Date(n, s - 1, a).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}
function bc(t) {
  const { type: n, meta: s = {} } = t, a = [];
  return n === "mds_ard" ? (s.description && a.push(s.description), s.ardDate && a.push(`ARD ${s.ardDate}`), s.status && a.push(s.status.toLowerCase())) : n === "next_mds_ard" ? s.expectedType && a.push(s.expectedType) : n === "query_due" ? (s.itemCode && a.push(s.itemCode), s.status && a.push(s.status), s.linkedArdDate && a.push(`linked ARD ${s.linkedArdDate}`)) : n === "cert_due" || n === "cert_overdue" ? (s.type && a.push(s.type.replace(/_/g, " ")), s.bucket && a.push(s.bucket.replace(/_/g, " ")), s.daysOverdue && a.push(`${s.daysOverdue}d overdue`)) : (n === "admit" || n === "readmit") && (s.payer && a.push(s.payer), s.location && a.push(s.location)), a.join(" · ");
}
function wc({ event: t }) {
  const n = t.urgency || "ok", s = fc[t.type] || t.type, a = yc[n] || "", i = bc(t), o = !!Tn(t);
  return /* @__PURE__ */ e(
    "div",
    {
      class: `mds-pl__dv-row mds-pl__dv-row--u-${n}${o ? " mds-pl__dv-row--clickable" : ""}`,
      onClick: o ? () => Re(t) : void 0,
      role: o ? "button" : void 0,
      tabIndex: o ? 0 : void 0,
      children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__dv-bar" }),
        /* @__PURE__ */ e("div", { class: "mds-pl__dv-body", children: [
          /* @__PURE__ */ e("div", { class: "mds-pl__dv-header", children: [
            /* @__PURE__ */ e("span", { class: "mds-pl__dv-name", children: t.patientName || "Unknown" }),
            /* @__PURE__ */ e("span", { class: "mds-pl__dv-type", children: s }),
            a && /* @__PURE__ */ e("span", { class: `mds-pl__dv-urgency mds-pl__dv-urgency--${n}`, children: a })
          ] }),
          i && /* @__PURE__ */ e("div", { class: "mds-pl__dv-meta", children: i })
        ] }),
        o && /* @__PURE__ */ e("span", { class: "mds-pl__dv-arrow", children: "›" })
      ]
    }
  );
}
function Ic({ date: t, events: n, onBack: s }) {
  const a = [...n].sort((i, r) => {
    const o = bs[i.urgency] ?? 3, c = bs[r.urgency] ?? 3;
    return o !== c ? o - c : (i.type || "").localeCompare(r.type || "");
  });
  return /* @__PURE__ */ e("div", { class: "mds-pl__dv", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__dv-top", children: [
      /* @__PURE__ */ e("button", { class: "mds-pl__dv-back", onClick: s, children: [
        /* @__PURE__ */ e("span", { "aria-hidden": "true", children: "‹" }),
        " Back to week"
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-pl__dv-title", children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__dv-title-date", children: vc(t) }),
        /* @__PURE__ */ e("span", { class: "mds-pl__dv-title-count", children: [
          n.length,
          " ",
          n.length === 1 ? "event" : "events"
        ] })
      ] })
    ] }),
    n.length === 0 ? /* @__PURE__ */ e("div", { class: "mds-pl__dv-empty", children: "Nothing scheduled for this day." }) : /* @__PURE__ */ e("div", { class: "mds-pl__dv-list", children: a.map((i, r) => /* @__PURE__ */ e(wc, { event: i }, `${i.type}-${i.patientId}-${r}`)) })
  ] });
}
const Dc = /* @__PURE__ */ new Set([
  "admit",
  "readmit",
  "discharge",
  "mds_ard",
  "next_mds_ard",
  "query_due",
  "cert_due",
  "cert_overdue"
]);
function kc(t, n) {
  const s = t.getMonth() === n.getMonth(), a = t.toLocaleDateString("en-US", { month: "short" }), i = n.toLocaleDateString("en-US", { month: "short" });
  return s ? `${a} ${t.getDate()} – ${n.getDate()}` : `${a} ${t.getDate()} – ${i} ${n.getDate()}`;
}
function Nc() {
  return /* @__PURE__ */ e("div", { class: "mds-pl__state", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__spinner" }),
    /* @__PURE__ */ e("p", { children: "Loading planner..." })
  ] });
}
function Cc({ message: t, onRetry: n }) {
  return /* @__PURE__ */ e("div", { class: "mds-pl__state", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__state-icon", children: "⚠" }),
    /* @__PURE__ */ e("p", { children: t || "Failed to load planner." }),
    /* @__PURE__ */ e("button", { class: "mds-pl__retry", onClick: n, children: "Retry" })
  ] });
}
function Sc({ facilityName: t, orgSlug: n, isFullscreen: s, onOpenTab: a }) {
  const {
    events: i,
    summary: r,
    loading: o,
    error: c,
    weekStart: d,
    weekEnd: l,
    goPrevWeek: p,
    goNextWeek: u,
    goThisWeek: m,
    refetch: h
  } = Fo({ facilityName: t, orgSlug: n }), [_, g] = v(null), [f, b] = v(!1), y = Z(
    () => (i || []).filter((T) => Dc.has(T.type)),
    [i]
  ), I = Z(() => _ ? y.filter((T) => T.date === _) : [], [y, _]), D = Z(() => kc(d, l), [d, l]), k = y.length;
  return /* @__PURE__ */ e("div", { class: `mds-pl${s ? " mds-pl--full" : " mds-pl--compact"}${f ? " mds-pl--queues-expanded" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__nav-bar", children: [
      /* @__PURE__ */ e("div", { class: "mds-pl__week-nav", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: p, "aria-label": "Previous week", children: "‹" }),
        /* @__PURE__ */ e("span", { class: "mds-pl__week-label", children: D }),
        /* @__PURE__ */ e("button", { type: "button", onClick: u, "aria-label": "Next week", children: "›" }),
        /* @__PURE__ */ e("button", { type: "button", class: "mds-pl__today-btn", onClick: m, children: "Today" })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-pl__nav-right", children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__event-count", children: [
          k === 0 ? "quiet week" : `${k} event${k === 1 ? "" : "s"} this week`,
          !_ && k > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__hint", children: " · click a day for detail" })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `mds-pl__focus-mode-toggle${f ? " mds-pl__focus-mode-toggle--active" : ""}`,
            onClick: () => b((T) => !T),
            "aria-label": f ? "Show calendar" : "Hide calendar — focus on queues",
            title: f ? "Show calendar" : "Hide calendar — focus on queues",
            children: [
              f ? /* @__PURE__ */ e("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
                /* @__PURE__ */ e("polyline", { points: "4 14 10 14 10 20" }),
                /* @__PURE__ */ e("polyline", { points: "20 10 14 10 14 4" }),
                /* @__PURE__ */ e("line", { x1: "14", y1: "10", x2: "21", y2: "3" }),
                /* @__PURE__ */ e("line", { x1: "3", y1: "21", x2: "10", y2: "14" })
              ] }) : /* @__PURE__ */ e("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
                /* @__PURE__ */ e("polyline", { points: "15 3 21 3 21 9" }),
                /* @__PURE__ */ e("polyline", { points: "9 21 3 21 3 15" }),
                /* @__PURE__ */ e("line", { x1: "21", y1: "3", x2: "14", y2: "10" }),
                /* @__PURE__ */ e("line", { x1: "3", y1: "21", x2: "10", y2: "14" })
              ] }),
              /* @__PURE__ */ e("span", { children: f ? "Show calendar" : "Focus mode" })
            ]
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ e(Nc, {}),
    !o && c && /* @__PURE__ */ e(Cc, { message: c, onRetry: h }),
    !o && !c && /* @__PURE__ */ e("div", { class: "mds-pl__body", children: [
      !f && /* @__PURE__ */ e("section", { class: "mds-pl__left", children: _ ? /* @__PURE__ */ e(
        Ic,
        {
          date: _,
          events: I,
          onBack: () => g(null)
        }
      ) : /* @__PURE__ */ e(
        Yo,
        {
          events: y,
          weekStart: d,
          selectedDay: null,
          onSelectDay: g
        }
      ) }),
      /* @__PURE__ */ e("aside", { class: "mds-pl__right", children: /* @__PURE__ */ e(
        gc,
        {
          summary: r,
          onOpenQueriesTab: a ? () => a("queries") : void 0,
          onOpenCertsTab: a ? () => a("certs") : void 0
        }
      ) })
    ] })
  ] });
}
function xc(t) {
  return t.deadlines?.urgency || t.urgency || "on_track";
}
function Pc(t, n, s, a) {
  let i = t;
  return n !== "all" && (i = i.filter((r) => r.payerType === n)), s !== "all" && (i = i.filter((r) => r.assessmentClass === s)), a === "revenue" && (i = i.filter((r) => r.pdpm?.hasImprovements)), a === "issues" && (i = i.filter((r) => {
    const o = r.udaSummary, c = o && (o.bims === "missing" || o.bims === "near_miss" || o.bims === "in_progress" || o.phq9 === "missing" || o.phq9 === "near_miss" || o.phq9 === "in_progress" || o.gg === "missing" || o.gg === "near_miss" || o.gg === "in_progress"), d = r.compliance?.checks?.orders ? r.compliance.checks.orders.status !== "passed" : !1;
    return c || d;
  })), i;
}
const ln = ["overdue", "urgent", "approaching", "on_track", "completed"];
function Tc(t) {
  const n = {};
  for (const s of ln) n[s] = [];
  for (const s of t) {
    const a = xc(s);
    n[a] ? n[a].push(s) : n.on_track.push(s);
  }
  for (const s of ln)
    n[s].sort((a, i) => {
      if (a.patientId && i.patientId && a.patientId !== i.patientId)
        return a.patientId.localeCompare(i.patientId);
      const r = a.ardDate ? new Date(a.ardDate) : /* @__PURE__ */ new Date(0), o = i.ardDate ? new Date(i.ardDate) : /* @__PURE__ */ new Date(0);
      return r - o;
    });
  return n;
}
function Ac() {
  return /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__spinner" }),
    /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "Loading assessments..." })
  ] });
}
function Mc({ message: t, onRetry: n }) {
  return /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "⚠" }),
    /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: t }),
    /* @__PURE__ */ e("button", { class: "mds-cc__retry-btn", onClick: n, children: "Retry" })
  ] });
}
function Lc() {
  return /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "📋" }),
    /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "No assessments found." })
  ] });
}
function Ec(t) {
  if (!t) return "";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "today" : n === 1 ? "1d ago" : `${n}d ago`;
}
function $c(t) {
  return t ? t.replace(/\s*\/\s*/g, " ").replace(/\s{2,}/g, " ").trim() : "";
}
function Rc(t) {
  const n = t.ardDaysRemaining;
  if (n == null) return null;
  let s, a;
  return n < 0 ? (s = `ARD passed ${Math.abs(n)}d ago`, a = "mds-cc__ard--critical") : n === 0 ? (s = "ARD today", a = "mds-cc__ard--critical") : n <= 3 ? (s = `ARD in ${n}d`, a = "mds-cc__ard--warn") : (s = `ARD in ${n}d`, a = "mds-cc__ard--neutral"), /* @__PURE__ */ e("span", { class: `mds-cc__ard ${a}`, children: s });
}
function ws(t) {
  return [...t].sort((n, s) => {
    const a = n.ardDaysRemaining ?? 1 / 0, i = s.ardDaysRemaining ?? 1 / 0;
    return a - i;
  });
}
function Is({ q: t, expanded: n, onToggle: s, onOpenAssessment: a, assessmentCtx: i, isPending: r }) {
  const o = In(t.assessmentPayment), c = t.sentTo?.[0] || t.practitioner, d = c ? `${c.firstName || ""} ${c.lastName || ""}`.trim() : null, l = c?.title;
  return /* @__PURE__ */ e("div", { class: `mds-cc__qcard${n ? " mds-cc__qcard--open" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__qcard-header", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__qcard-left", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__qcard-patient", children: t.patientName }),
        /* @__PURE__ */ e("div", { class: "mds-cc__qcard-diag", children: [
          /* @__PURE__ */ e("span", { class: "mds-cc__qcard-code", children: t.mdsItem }),
          /* @__PURE__ */ e("span", { class: "mds-cc__qcard-name", children: t.mdsItemName })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__qcard-right", children: [
        Rc(t),
        o && /* @__PURE__ */ e("span", { class: `mds-cc__qcard-delta${r ? " mds-cc__qcard-delta--pending" : ""}`, children: o }),
        /* @__PURE__ */ e("svg", { class: `mds-cc__qcard-chevron${n ? " mds-cc__qcard-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-cc__qcard-meta", children: [
      i && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-ctx", children: i }),
      /* @__PURE__ */ e("span", { class: `mds-cc__qcard-status mds-cc__qcard-status--${r ? "pending" : "sent"}`, children: r ? "Not yet sent" : `Sent ${Ec(t.sentAt)}` }),
      d && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-practitioner", children: [
        "to ",
        d,
        l ? `, ${l}` : ""
      ] })
    ] }),
    n && /* @__PURE__ */ e("div", { class: "mds-cc__qcard-body", children: /* @__PURE__ */ e("div", { class: "mds-cc__qcard-actions", children: [
      /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--primary", onClick: (p) => {
        p.stopPropagation(), a();
      }, children: "Open in PDPM Analyzer" }),
      !r && /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--secondary", onClick: (p) => {
        p.stopPropagation();
        const u = p.currentTarget;
        u.textContent = "Sending...", u.disabled = !0;
        try {
          window.QueryAPI.resendQuery(t.id).then(() => {
            window.SuperToast?.success?.("SMS resent"), u.textContent = "Sent!";
          }).catch((m) => {
            console.error("[Super] Resend failed:", m), window.SuperToast?.error?.("Failed to resend"), u.textContent = "Resend SMS", u.disabled = !1;
          });
        } catch (m) {
          console.error("[Super] Resend error:", m), u.textContent = "Resend SMS", u.disabled = !1;
        }
      }, children: "Resend SMS" })
    ] }) })
  ] });
}
function qc({ outstandingQueries: t, recentlySigned: n, assessments: s, onOpenAssessment: a }) {
  const [i, r] = v(null), o = ws((t || []).filter((m) => m.status === "pending")), c = ws((t || []).filter((m) => m.status === "sent" || m.status === "awaiting_response"));
  function d(m) {
    const h = (s || []).find((_) => _.id === m.mdsAssessmentId);
    return h?.externalAssessmentId || h?.assessmentId || h?.id || m.mdsAssessmentId;
  }
  function l(m) {
    const h = (s || []).find((_) => _.id === m.mdsAssessmentId);
    return h && $c(h.assessmentType) || null;
  }
  async function p(m) {
    try {
      const h = await fetch(`/api/extension/diagnosis-queries/${m}/pdf`), { pdfUrl: _ } = await h.json();
      _ && window.open(_, "_blank");
    } catch (h) {
      console.warn("[Super] PDF fetch failed", h);
    }
  }
  const u = o.length + c.length;
  return /* @__PURE__ */ e("div", { class: "mds-cc__queries-view", children: [
    c.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--sent" }),
        "Awaiting Doctor",
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-count", children: c.length })
      ] }),
      c.map((m) => /* @__PURE__ */ e(
        Is,
        {
          q: m,
          expanded: i === m.id,
          onToggle: () => r(i === m.id ? null : m.id),
          onOpenAssessment: () => a?.(d(m)),
          assessmentCtx: l(m),
          isPending: !1
        },
        m.id
      ))
    ] }),
    o.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--pending" }),
        "Needs to be Sent",
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-count", children: o.length })
      ] }),
      o.map((m) => /* @__PURE__ */ e(
        Is,
        {
          q: m,
          expanded: i === m.id,
          onToggle: () => r(i === m.id ? null : m.id),
          onOpenAssessment: () => a?.(d(m)),
          assessmentCtx: l(m),
          isPending: !0
        },
        m.id
      ))
    ] }),
    n && n.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--signed" }),
        "Recently Signed",
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-count", children: n.length })
      ] }),
      n.map((m) => {
        const h = m.status === "signed", _ = m.status === "rejected", g = m.practitioner || m.sentTo?.[0];
        return /* @__PURE__ */ e("div", { class: `mds-cc__qcard mds-cc__qcard--signed${_ ? " mds-cc__qcard--rejected" : ""}`, children: [
          /* @__PURE__ */ e("div", { class: "mds-cc__qcard-header", onClick: () => r(i === m.id ? null : m.id), role: "button", tabIndex: 0, children: [
            /* @__PURE__ */ e("div", { class: "mds-cc__qcard-left", children: [
              /* @__PURE__ */ e("span", { class: "mds-cc__qcard-patient", children: m.patientName }),
              /* @__PURE__ */ e("div", { class: "mds-cc__qcard-diag", children: [
                /* @__PURE__ */ e("span", { class: "mds-cc__qcard-code", children: m.mdsItem }),
                /* @__PURE__ */ e("span", { class: "mds-cc__qcard-name", children: m.mdsItemName })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { class: "mds-cc__qcard-right", children: [
              /* @__PURE__ */ e("span", { class: `mds-cc__qcard-status-badge mds-cc__qcard-status-badge--${m.status}`, children: h ? "Signed" : "Rejected" }),
              /* @__PURE__ */ e("svg", { class: `mds-cc__qcard-chevron${i === m.id ? " mds-cc__qcard-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { class: "mds-cc__qcard-meta", children: [
            g && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-practitioner", children: [
              g.firstName,
              " ",
              g.lastName,
              g.title ? `, ${g.title}` : ""
            ] }),
            h && m.selectedIcd10Code && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-icd", children: m.selectedIcd10Code }),
            _ && m.rejectionReason && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-rejection", children: [
              "“",
              m.rejectionReason,
              "”"
            ] })
          ] }),
          i === m.id && /* @__PURE__ */ e("div", { class: "mds-cc__qcard-body", children: /* @__PURE__ */ e("div", { class: "mds-cc__qcard-actions", children: [
            /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--primary", onClick: (f) => {
              f.stopPropagation(), a?.(d(m));
            }, children: "Open in PDPM Analyzer" }),
            m.hasPdf && /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--secondary", onClick: (f) => {
              f.stopPropagation(), p(m.id);
            }, children: "View Signed PDF" })
          ] }) })
        ] }, m.id || m.mdsItem);
      })
    ] }),
    u === 0 && (!n || n.length === 0) && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "✉" }),
      /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "No outstanding queries." })
    ] })
  ] });
}
function Oc({ facilityName: t, orgSlug: n, onClose: s, initialExpandedId: a }) {
  const [i, r] = v("planner"), [o, c] = v("list"), [d, l] = v(!1), [p, u] = v("all"), [m, h] = v("all"), [_, g] = v("all"), [f, b] = v("all"), [y, I] = v(a || null), [D, k] = v(null), { data: T, loading: A, error: x, retry: C } = Pi({ facilityName: t, orgSlug: n }), { data: S } = Ti({ facilityName: t, orgSlug: n, enabled: !0 }), { data: w } = Ai({ facilityName: t, orgSlug: n, enabled: !0 }), O = w !== null, E = O ? (w?.pending || 0) + (w?.overdue || 0) : 0, { certs: P } = nn({ facilityName: t, orgSlug: n }), {
    data: M,
    loading: R,
    error: B,
    retry: X
  } = So({ facilityName: t, orgSlug: n, enabled: !0 }), W = M?.summary?.totalGaps || 0, { data: q } = xo({ facilityName: t, orgSlug: n, enabled: !0 }), H = T?.assessments || [], te = T?.summary || {}, L = Z(() => {
    const Y = Pc(H, p, m, _);
    return Tc(Y);
  }, [H, p, m, _]), $ = Z(() => {
    const Y = f === "all" ? ln : [f], ue = [];
    for (const be of Y) {
      const _e = L[be] || [];
      for (const Te of _e) ue.push(Te);
    }
    return ue;
  }, [L, f]), V = $.length, U = ee(!1);
  G(() => {
    !a || !H.length || U.current || (U.current = !0, requestAnimationFrame(() => {
      const Y = se.current?.querySelector(`[data-assessment-id="${a}"]`);
      Y && Y.scrollIntoView({ behavior: "smooth", block: "center" });
    }));
  }, [H, a]);
  function J(Y) {
    I((ue) => {
      const be = ue === Y ? null : Y;
      return be && requestAnimationFrame(() => {
        const _e = se.current?.querySelector(`[data-assessment-id="${be}"]`);
        _e && _e.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }), be;
    });
  }
  const ne = ee(null), se = ee(null);
  G(() => {
    if (i === "assessments" && ne.current) {
      const Y = ne.current;
      ne.current = null, requestAnimationFrame(() => {
        const ue = se.current?.querySelector(`[data-assessment-id="${Y}"]`);
        ue && (ue.scrollIntoView({ behavior: "smooth", block: "center" }), ue.classList.add("mds-cc__card-wrapper--highlight"), setTimeout(() => ue.classList.remove("mds-cc__card-wrapper--highlight"), 1500));
      });
    }
  }, [i, y]);
  function Q(Y) {
    const ue = Y.externalAssessmentId || Y.assessmentId || Y.id;
    s({ hide: !0 }), window.PDPMAnalyzerLauncher?.open({ scope: "mds", assessmentId: ue });
  }
  function re(Y) {
    s({ hide: !0 }), window.PDPMAnalyzerLauncher?.open({ scope: "mds", assessmentId: Y });
  }
  function he(Y) {
    Y.target === Y.currentTarget && s();
  }
  return /* @__PURE__ */ e("div", { class: "mds-cc__overlay", onClick: he, children: /* @__PURE__ */ e("div", { class: `mds-cc__modal${d ? " mds-cc__modal--fullscreen" : ""}`, role: "dialog", "aria-modal": "true", "aria-label": "MDS Command Center", children: [
    D && /* @__PURE__ */ e(
      Ta,
      {
        item: D.item,
        context: { assessmentId: D.assessmentId },
        onClose: () => k(null)
      }
    ),
    /* @__PURE__ */ e(
      Li,
      {
        summary: te,
        facilityName: t,
        onClose: s,
        activeView: i,
        onViewChange: r,
        viewMode: o,
        onViewModeChange: c,
        isFullscreen: d,
        onToggleFullscreen: () => l((Y) => !Y),
        queryCount: (T?.outstandingQueries || []).length,
        certCount: E,
        certsEnabled: O,
        complianceGaps: W,
        payerFilter: p,
        onPayerFilterChange: u,
        classFilter: m,
        onClassFilterChange: h,
        focusFilter: _,
        onFocusFilterChange: g,
        urgencyFilter: f,
        onUrgencyFilterChange: b
      }
    ),
    /* @__PURE__ */ e("div", { class: "mds-cc__list", ref: se, children: [
      A && /* @__PURE__ */ e(Ac, {}),
      !A && x && /* @__PURE__ */ e(Mc, { message: x, onRetry: C }),
      !A && !x && i === "assessments" && o === "list" && /* @__PURE__ */ e(K, { children: [
        V === 0 && /* @__PURE__ */ e(Lc, {}),
        V > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__assessments mds-cc__assessments--flat", children: $.map((Y) => {
          const ue = Y.id || Y.assessmentId || Y.externalAssessmentId, be = y === ue;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "mds-cc__card-wrapper",
              "data-assessment-id": ue,
              children: [
                /* @__PURE__ */ e(
                  ur,
                  {
                    assessment: Y,
                    isExpanded: be,
                    onToggle: () => J(ue),
                    onOpenAnalyzer: () => Q(Y)
                  }
                ),
                be && /* @__PURE__ */ e(
                  wa,
                  {
                    assessment: Y,
                    onOpenAnalyzer: () => Q(Y),
                    onSelectItem: (_e) => {
                      const Te = Y.externalAssessmentId || Y.assessmentId || Y.id;
                      k({ item: _e, assessmentId: Te });
                    }
                  }
                )
              ]
            },
            ue
          );
        }) })
      ] }),
      !A && !x && i === "assessments" && o === "calendar" && /* @__PURE__ */ e(
        $r,
        {
          dashboardAssessments: H,
          scheduleItems: S?.schedule || [],
          outstandingQueries: T?.outstandingQueries || [],
          certs: P || [],
          onJumpToAssessment: (Y) => {
            c("list"), I(Y), ne.current = Y;
          }
        }
      ),
      !A && !x && i === "queries" && /* @__PURE__ */ e(
        qc,
        {
          outstandingQueries: T?.outstandingQueries || [],
          recentlySigned: T?.recentlySigned || [],
          assessments: H,
          onOpenAssessment: re
        }
      ),
      i === "certs" && /* @__PURE__ */ e(
        ar,
        {
          facilityName: t,
          orgSlug: n
        }
      ),
      i === "compliance" && /* @__PURE__ */ e(
        Oo,
        {
          data: M,
          loading: R,
          error: B,
          retry: X,
          trendingData: q,
          facilityName: t,
          orgSlug: n
        }
      ),
      i === "planner" && /* @__PURE__ */ e(
        Sc,
        {
          facilityName: t,
          orgSlug: n,
          isFullscreen: d,
          onOpenTab: r
        }
      )
    ] })
  ] }) });
}
function Bc(t, n) {
  const [s, a] = v([]), [i, r] = v(null), [o, c] = v(""), [d, l] = v(!1), [p, u] = v(!1), [m, h] = v(null), [_, g] = v(0), [f, b] = v(0), y = F(() => {
    g((k) => k + 1);
  }, []), I = F(() => {
    b((k) => k + 1);
  }, []);
  async function D() {
    if (!(await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" })).authenticated) throw new Error("Please log in to view MDS data");
    const A = getOrg()?.org, x = window.getChatFacilityInfo?.() || "";
    if (!A || !x) throw new Error("Could not determine organization or facility");
    return { orgSlug: A, facilityName: x };
  }
  return G(() => {
    if (!t) return;
    let k = !1;
    async function T() {
      l(!0), h(null);
      try {
        const { orgSlug: A, facilityName: x } = await D();
        if (t.scope === "mds" && t.assessmentId) {
          const C = new URLSearchParams({ externalAssessmentId: t.assessmentId, facilityName: x, orgSlug: A }), S = await chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/mds/pdpm-potential?${C}`,
            options: { method: "GET" }
          });
          if (!S.success) throw new Error(S.error || "Failed to load MDS data");
          k || (r(S.data), c(S.data?.patientName || t.patientName || ""), a([]));
        } else if (t.scope === "patient" && t.patientId) {
          const C = new URLSearchParams({ facilityName: x, orgSlug: A }), S = await chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/patients/${t.patientId}/assessments?${C}`,
            options: { method: "GET" }
          });
          if (!S.success) throw new Error(S.error || "Failed to load patient data");
          const w = S.data?.data || S.data || S;
          k || (a(w.assessments || []), c(w.patientName || t.patientName || "Patient"), r(null));
        } else
          k || (a([]), r(null));
      } catch (A) {
        k || h(A.message || "Failed to load data");
      } finally {
        k || l(!1);
      }
    }
    return T(), () => {
      k = !0;
    };
  }, [t?.scope, t?.assessmentId, t?.patientId, _]), G(() => {
    if (t?.scope !== "patient" || !n) return;
    let k = !1;
    async function T() {
      u(!0), r(null);
      try {
        const { orgSlug: A, facilityName: x } = await D(), C = new URLSearchParams({ externalAssessmentId: n, facilityName: x, orgSlug: A }), S = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${C}`,
          options: { method: "GET" }
        });
        if (!S.success) throw new Error(S.error || "Failed to load assessment data");
        k || r(S.data);
      } catch (A) {
        k || h(A.message || "Failed to load assessment detail");
      } finally {
        k || u(!1);
      }
    }
    return T(), () => {
      k = !0;
    };
  }, [t?.scope, n, f]), G(() => {
    function k() {
      b((T) => T + 1);
    }
    return window.addEventListener("super:item-decision", k), () => window.removeEventListener("super:item-decision", k);
  }, []), { assessments: s, detail: i, patientName: o, loading: d, detailLoading: p, error: m, retry: y, retryDetail: I };
}
const Ds = ["bims", "phq9", "gg", "orders", "therapyDocs"], ks = { bims: "BIMS", phq9: "PHQ-9", gg: "GG", orders: "Orders", therapyDocs: "Therapy" }, dn = 6;
function Ae(t) {
  return t ? new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
}
function Hc(t) {
  if (!t) return "";
  const n = t.split(`
`)[0].trim();
  return n.length > 80 ? n.slice(0, 77) + "…" : n;
}
function Fc(t, n) {
  if (!t || !n?.start || !n?.end) return null;
  const s = new Date(t).getTime();
  return s >= new Date(n.start).getTime() && s <= new Date(n.end).getTime();
}
function Gc({ check: t }) {
  const n = t?.foundUda;
  if (!n) return null;
  const s = !!n.lockedDate, a = Fc(n.lockedDate || n.date, t.searchedDateRange);
  return /* @__PURE__ */ e("div", { class: "pdpm-an__cc-detail", children: /* @__PURE__ */ e("div", { class: "pdpm-an__cc-uda-grid", children: [
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Assessment" }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: n.description }),
    n.date && /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Completed" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: Ae(n.date) })
    ] }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Lock" }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: s ? /* @__PURE__ */ e("span", { class: "pdpm-an__cc-lock pdpm-an__cc-lock--yes", children: [
      /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ e("path", { d: "M4 5V3.5a2 2 0 014 0V5", stroke: "currentColor", "stroke-width": "1.2", fill: "none" })
      ] }),
      Ae(n.lockedDate)
    ] }) : /* @__PURE__ */ e("span", { class: "pdpm-an__cc-lock pdpm-an__cc-lock--no", children: [
      /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ e("path", { d: "M4 5V3.5a2 2 0 014 0", stroke: "currentColor", "stroke-width": "1.2", fill: "none" })
      ] }),
      "Unlocked"
    ] }) }),
    t.searchedDateRange && /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Window" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: [
        Ae(t.searchedDateRange.start),
        " ",
        "–",
        " ",
        Ae(t.searchedDateRange.end),
        a === !0 && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-window pdpm-an__cc-window--in", children: "In range" }),
        a === !1 && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-window pdpm-an__cc-window--out", children: "Outside range" })
      ] })
    ] })
  ] }) });
}
function Uc({ check: t }) {
  const n = t?.unsignedOrders;
  if (!n || n.length === 0) return null;
  const s = n.slice(0, dn), a = n.length - dn;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__cc-detail", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__cc-detail-summary", children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-detail-stat pdpm-an__cc-detail-stat--fail", children: [
        t.unsignedCount,
        " unsigned"
      ] }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-detail-stat", children: [
        t.totalOrders,
        " total"
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__cc-orders", children: [
      s.map((i, r) => /* @__PURE__ */ e("div", { class: "pdpm-an__cc-order", children: [
        /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-name", children: Hc(i.orderName) }),
        /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-meta", children: [
          i.category !== "Other" && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-cat", children: i.category }),
          i.startDate && /* @__PURE__ */ e("span", { children: Ae(i.startDate) })
        ] })
      ] }, r)),
      a > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-orders-more", children: [
        "+",
        a,
        " more unsigned"
      ] })
    ] })
  ] });
}
function Vc({ check: t }) {
  if (!t) return null;
  const n = t.unsignedDocs || [];
  return /* @__PURE__ */ e("div", { class: "pdpm-an__cc-detail", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__cc-detail-summary", children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-detail-stat pdpm-an__cc-detail-stat--pass", children: [
        t.signedDocs,
        " signed"
      ] }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-detail-stat", children: [
        t.totalDocs,
        " total"
      ] })
    ] }),
    n.length > 0 && /* @__PURE__ */ e("div", { class: "pdpm-an__cc-orders", children: n.slice(0, dn).map((s, a) => /* @__PURE__ */ e("div", { class: "pdpm-an__cc-order", children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-name", children: s.description || s.name || `Document ${a + 1}` }),
      s.date && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-meta", children: Ae(s.date) })
    ] }, a)) })
  ] });
}
function zc({ checkKey: t, check: n }) {
  return t === "orders" ? /* @__PURE__ */ e(Uc, { check: n }) : t === "therapyDocs" ? /* @__PURE__ */ e(Vc, { check: n }) : /* @__PURE__ */ e(Gc, { check: n });
}
function Wc({ data: t, collapsed: n, onToggleCollapse: s }) {
  const [a, i] = v(null), r = t?.compliance || {}, o = r.checks || {}, c = r.summary?.passed ?? 0, d = r.summary?.total ?? Ds.length, l = r.summary?.notApplicable ?? 0, p = d - l, u = (m) => i(a === m ? null : m);
  return /* @__PURE__ */ e("div", { class: `pdpm-an__card${c === p ? " pdpm-an__card--success" : " pdpm-an__card--warning"}`, children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "✓" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Compliance" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: [
        c,
        "/",
        p
      ] }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__cc-body", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__cc-chips", children: Ds.map((m) => {
        const h = o[m];
        if (!h || h.status === "not_applicable") return null;
        const _ = h.status === "passed", g = h.foundUda || m === "orders" || m === "therapyDocs";
        return /* @__PURE__ */ e(
          "button",
          {
            class: `pdpm-an__cc-chip${_ ? " pdpm-an__cc-chip--pass" : " pdpm-an__cc-chip--fail"}${a === m ? " pdpm-an__cc-chip--active" : ""}`,
            onClick: g ? () => u(m) : void 0,
            title: h.message || "",
            children: [
              /* @__PURE__ */ e("span", { class: "pdpm-an__cc-chip-icon", children: _ ? "✓" : "✗" }),
              ks[m] || m
            ]
          },
          m
        );
      }) }),
      a && o[a] && o[a].status !== "not_applicable" && /* @__PURE__ */ e("div", { class: "pdpm-an__cc-expanded", children: [
        /* @__PURE__ */ e("div", { class: "pdpm-an__cc-expanded-label", children: [
          ks[a],
          ": ",
          o[a].message
        ] }),
        /* @__PURE__ */ e(zc, { checkKey: a, check: o[a] })
      ] })
    ] })
  ] });
}
function vt(t) {
  return t.sourceType === "order" || t.type === "order" || (t.evidenceId || "").startsWith("order-");
}
function Qc(t) {
  return (t.sourceId || t.evidenceId || "").replace(/^order-/, "");
}
function La(t) {
  return t.type === "medication" || (t.sourceId || "").startsWith("admin-");
}
function jc(t) {
  if (La(t)) return !0;
  const n = me(t).viewerType;
  return n === "document" || n === "clinical-note" || n === "therapy-document" || n === "order" || vt(t);
}
function Ea({ item: t, context: n, onBack: s, onSplitChange: a, onDismiss: i }) {
  const r = t?.mdsItem, o = t?.categoryKey, { data: c, loading: d, error: l } = Da(r, o, n), p = r?.startsWith("I8000:") ? "I8000" : r, u = c?.item, m = u?.status === "needs_physician_query", [h, _] = v(!1), g = u?.userDecision?.decision, f = g !== "disagree" && g !== "agree", b = F(async (L) => {
    _(!0);
    try {
      const V = getOrg()?.org, U = window.getChatFacilityInfo?.() || "", J = r?.includes(":") ? r.split(":")[0] : r, ne = t?.column || "", se = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/items/${encodeURIComponent(J)}/decision`,
        options: {
          method: "POST",
          body: JSON.stringify({
            externalAssessmentId: n?.assessmentId,
            facilityName: U,
            orgSlug: V,
            decision: "disagree",
            note: L || "",
            mdsColumn: ne
          })
        }
      });
      if (!se?.success) throw new Error(se?.error || "Failed to save decision");
      const Q = `${J}-${ne}`;
      window.SuperOverlay?.dismissedItems && (window.SuperOverlay.dismissedItems.add(Q), chrome.storage.local.set({ superDismissedItems: Array.from(window.SuperOverlay.dismissedItems) })), window.dispatchEvent(new CustomEvent("super:item-decision", {
        detail: { mdsItem: J, column: ne, decision: "disagree" }
      })), window.SuperToast?.success?.("Item dismissed"), i?.();
    } catch ($) {
      console.error("[ItemDetailView] Dismiss failed:", $), window.SuperToast?.error?.($.message || "Failed to dismiss"), _(!1);
    }
  }, [r, t, n, i]), [y, I] = v(null), D = ee(/* @__PURE__ */ new Map()), [k, T] = v(null), [A, x] = v(!1), C = ee(null), w = Kc(c).filter(jc), O = y !== null, E = y && La(y.ev), P = y && !E && vt(y.ev), M = y ? me(y.ev).viewerType : null, R = !E && M === "clinical-note", B = !E && M === "therapy-document", X = y && !P && !R && !B && !E, W = ee(null);
  G(() => {
    a?.(O);
  }, [O]);
  const q = w.filter((L) => vt(L) ? !1 : me(L).viewerType === "document");
  G(() => {
    if (!c || q.length === 0) return;
    (async () => {
      let $;
      try {
        $ = await window.getCurrentParams();
      } catch {
        return;
      }
      for (const V of q) {
        const U = me(V);
        if (!U.id || D.current.has(U.id)) continue;
        const J = Ze(U.id, $).then((ne) => {
          const se = D.current.get(U.id);
          return se && (se.document = ne.document), ne.document;
        }).catch((ne) => (console.warn("[ItemDetailView] Prefetch failed for", U.id, ne), null));
        D.current.set(U.id, { document: null, promise: J });
      }
    })();
  }, [c]), G(() => {
    if (!y || P || R || B) {
      T(null), x(!1);
      return;
    }
    const L = me(y.ev);
    if (!L.id) return;
    const $ = D.current.get(L.id);
    if ($?.document) {
      T($.document), x(!1);
      return;
    }
    x(!0), (async () => {
      try {
        let U;
        if ($?.promise)
          U = await $.promise;
        else {
          const J = await window.getCurrentParams();
          U = (await Ze(L.id, J)).document, D.current.set(L.id, { document: U, promise: Promise.resolve(U) });
        }
        T(U);
      } catch (U) {
        console.error("[ItemDetailView] Failed to load document:", U), T(null);
      } finally {
        x(!1);
      }
    })();
  }, [y, P]), G(() => {
    if (!P || !C.current) return;
    const L = C.current, $ = Qc(y.ev);
    L.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><div class="pdpm-an__spinner"></div><span>Loading administrations...</span></div>', window.renderSplitAdministrations ? (async () => {
      const J = getOrg()?.org, ne = window.getChatFacilityInfo?.() || "", se = { assessmentId: n?.assessmentId, orgSlug: J, facilityName: ne };
      await window.renderSplitAdministrations(L, $, void 0, se);
    })().catch((U) => {
      console.error("[ItemDetailView] Failed to load administrations:", U), L.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Failed to load administrations</span></div>';
    }) : L.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Administration viewer not available</span></div>';
  }, [y, P]), G(() => {
    if (!R && !B || !W.current) return;
    const L = W.current, $ = me(y.ev), V = y.ev.quoteText || y.ev.quote || y.ev.snippet || "";
    L.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><div class="pdpm-an__spinner"></div><span>Loading...</span></div>', (async () => {
      const ne = getOrg()?.org, se = window.getChatFacilityInfo?.() || "", Q = { assessmentId: n?.assessmentId, orgSlug: ne, facilityName: se };
      R && window.renderSplitNote ? await window.renderSplitNote(L, $.id, Q, V || null) : B && window.renderSplitTherapy ? await window.renderSplitTherapy(L, $.id, V, Q) : L.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Viewer not available</span></div>';
    })().catch((J) => {
      console.error("[ItemDetailView] Failed to load source:", J), L.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Failed to load</span></div>';
    });
  }, [y, R, B]);
  const H = F((L, $) => {
    I({ ev: L, index: $ });
  }, []), te = F(() => {
    I(null);
  }, []);
  return /* @__PURE__ */ e("div", { class: `idv${O ? " idv--split" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "idv__head", children: [
      /* @__PURE__ */ e("button", { class: "idv__back", onClick: O ? te : s, type: "button", children: [
        /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M9 11L5 7l4-4", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }),
        "Back"
      ] }),
      /* @__PURE__ */ e("span", { class: "idv__code", children: p }),
      /* @__PURE__ */ e("h2", { class: "idv__name", children: u?.description || u?.kbCategory?.categoryName || t?.itemName || "Item Detail" }),
      m && /* @__PURE__ */ e("span", { class: "idv__badge idv__badge--amber", children: "Needs Query" })
    ] }),
    d && /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__spinner" }),
      /* @__PURE__ */ e("p", { children: "Loading..." })
    ] }),
    l && /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: /* @__PURE__ */ e("p", { children: l }) }),
    !d && !l && c && !O && /* @__PURE__ */ e("div", { class: "idv__body", children: /* @__PURE__ */ e(
      Na,
      {
        variant: "full",
        data: c,
        detectionItem: t,
        mdsItem: r,
        onViewSource: H,
        onDismiss: f ? b : void 0,
        dismissing: h,
        assessmentId: n?.assessmentId
      }
    ) }),
    !d && !l && c && O && /* @__PURE__ */ e("div", { class: "idv__split-body", children: [
      /* @__PURE__ */ e("div", { class: "idv__sources", children: [
        /* @__PURE__ */ e("div", { class: "idv__sources-label", children: [
          "Sources (",
          w.length,
          ")"
        ] }),
        w.map((L, $) => {
          const V = vt(L), U = L.sourceType || kn(L.displayName, L.evidenceId), J = L.displayName || Nn[U] || (V ? "Orders" : "Document"), ne = L.quoteText || L.orderDescription || L.quote || L.snippet || L.text || "", se = L.wordBlocks?.[0]?.p, Q = y.ev === L;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `idv__source-card${Q ? " idv__source-card--active" : ""}`,
              onClick: () => I({ ev: L, index: $ }),
              role: "button",
              children: [
                /* @__PURE__ */ e("div", { class: `idv__source-badge${V ? " idv__source-badge--order" : ""}`, children: J }),
                ne && /* @__PURE__ */ e("div", { class: "idv__source-snippet", children: ne }),
                !V && se && /* @__PURE__ */ e("div", { class: "idv__source-page", children: [
                  "Page ",
                  se
                ] })
              ]
            },
            $
          );
        })
      ] }),
      /* @__PURE__ */ e("div", { class: "idv__viewer", children: [
        X && A && /* @__PURE__ */ e("div", { class: "idv__viewer-loading", children: [
          /* @__PURE__ */ e("div", { class: "pdpm-an__spinner" }),
          /* @__PURE__ */ e("span", { children: "Loading document..." })
        ] }),
        X && !A && k && /* @__PURE__ */ e(
          Cn,
          {
            url: k.signedUrl || null,
            wordBlocks: y.ev.wordBlocks || [],
            targetPage: y.ev.wordBlocks?.[0]?.p || 1,
            title: k.title || "Document",
            documentType: k.documentType,
            effectiveDate: k.effectiveDate,
            fileSize: k.fileSize,
            expiresAt: !0,
            openInNewTabUrl: k.signedUrl || null
          }
        ),
        X && !A && !k && /* @__PURE__ */ e("div", { class: "idv__viewer-loading", children: /* @__PURE__ */ e("span", { children: "Failed to load document" }) }),
        P && /* @__PURE__ */ e("div", { ref: C, class: "idv__admin-viewer" }),
        (R || B) && /* @__PURE__ */ e("div", { ref: W, class: "idv__note-viewer" }),
        E && /* @__PURE__ */ e("div", { class: "idv__note-viewer", children: /* @__PURE__ */ e("div", { class: "super-split__content", children: [
          /* @__PURE__ */ e("div", { class: "super-split__content-header", children: [
            /* @__PURE__ */ e("h3", { class: "super-split__content-title", children: "Administration Record" }),
            /* @__PURE__ */ e("span", { class: "super-split__content-badge", children: "Medication" })
          ] }),
          y.ev.date && /* @__PURE__ */ e("div", { class: "super-split__content-meta", children: y.ev.date }),
          /* @__PURE__ */ e("div", { class: "super-split__content-body", children: /* @__PURE__ */ e("pre", { class: "super-split__note-text", children: y.ev.text || y.ev.quote || y.ev.quoteText || "No details available." }) })
        ] }) })
      ] })
    ] })
  ] });
}
function Kc(t) {
  const n = t?.item;
  if (!n) return [];
  if (!!!n.columns)
    return [...n.evidence || [], ...n.queryEvidence || []];
  const a = [], i = /* @__PURE__ */ new Set();
  for (const r of Object.values(n.columns || {}))
    for (const o of [...r?.evidence || [], ...r?.queryEvidence || []]) {
      const c = o.sourceId || o.quote || JSON.stringify(o);
      i.has(c) || (i.add(c), a.push(o));
    }
  return a;
}
function Yc(t) {
  const [n, s] = v([]), [a, i] = v(!1), [r, o] = v(null), [c, d] = v(0), l = F(() => {
    d((p) => p + 1);
  }, []);
  return G(() => {
    if (!t || !window.CertAPI) {
      s([]);
      return;
    }
    let p = !1;
    return i(!0), o(null), (async () => {
      try {
        const m = getOrg()?.org, h = window.getChatFacilityInfo?.() || "";
        if (!m || !h) {
          p || (s([]), i(!1));
          return;
        }
        const _ = await window.CertAPI.fetchByPatient(h, m, t);
        p || s(_ || []);
      } catch {
        p || s([]);
      } finally {
        p || i(!1);
      }
    })(), () => {
      p = !0;
    };
  }, [t, c]), { certs: n, loading: a, error: r, refresh: l };
}
const Jc = ["initial", "day_14_recert", "day_30_recert"], Zc = {
  initial: "Initial",
  day_14_recert: "Day 14",
  day_30_recert: "Day 30"
};
function Xc(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function Ut(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function el(t) {
  if (!t) return { variant: "empty", label: "—" };
  const n = Xc(t.dueDate), s = n !== null && n < 0;
  return t.status === "signed" ? {
    variant: "signed",
    label: "Signed",
    detail: Ut(t.signedAt),
    subDetail: t.signedByName || ""
  } : t.status === "skipped" ? { variant: "skipped", label: "Skipped", showUnskip: !0 } : (t.isDelayed || t.status === "delayed") && s ? {
    variant: "overdue",
    label: `${Math.abs(n)}d overdue`,
    showSend: !0
  } : s ? {
    variant: "overdue",
    label: `${Math.abs(n)}d overdue`,
    showSend: !0
  } : t.status === "sent" ? {
    variant: "sent",
    label: "Awaiting",
    detail: Ut(t.sentAt)
  } : {
    variant: "pending",
    label: "Pending",
    detail: t.dueDate ? `Due ${Ut(t.dueDate)}` : "",
    showSend: !0
  };
}
function tl({ type: t, cert: n, onAction: s }) {
  const a = el(n);
  return /* @__PURE__ */ e("div", { class: `cert-chain__slot cert-chain__slot--${a.variant}`, children: [
    /* @__PURE__ */ e("div", { class: "cert-chain__slot-header", children: /* @__PURE__ */ e("span", { class: "cert-chain__slot-type", children: Zc[t] }) }),
    /* @__PURE__ */ e("div", { class: "cert-chain__slot-status", children: a.label }),
    a.detail && /* @__PURE__ */ e("div", { class: "cert-chain__slot-detail", children: a.detail }),
    a.subDetail && /* @__PURE__ */ e("div", { class: "cert-chain__slot-sub", children: a.subDetail }),
    a.showSend && n && /* @__PURE__ */ e(
      "button",
      {
        class: `cert-chain__slot-btn cert-chain__slot-btn--${a.variant === "overdue" ? "destructive" : "primary"}`,
        onClick: (i) => {
          i.stopPropagation(), s(n, "send");
        },
        children: "Send"
      }
    ),
    a.showUnskip && n && /* @__PURE__ */ e(
      "button",
      {
        class: "cert-chain__slot-btn cert-chain__slot-btn--ghost",
        onClick: (i) => {
          i.stopPropagation(), s(n, "unskip");
        },
        children: "Unskip"
      }
    )
  ] });
}
function nl({ certs: t, onAction: n }) {
  const s = {};
  for (const a of t)
    s[a.type] = a;
  return /* @__PURE__ */ e("div", { class: "cert-chain__stay", children: Jc.map((a, i) => /* @__PURE__ */ e("div", { class: "cert-chain__step-wrapper", children: [
    i > 0 && /* @__PURE__ */ e("div", { class: "cert-chain__connector" }),
    /* @__PURE__ */ e(tl, { type: a, cert: s[a] || null, onAction: n })
  ] }, a)) });
}
function sl({ certs: t, onAction: n }) {
  const s = Z(() => {
    if (!t || t.length === 0) return [];
    const a = {};
    for (const r of t) {
      const o = r.partAStayId || "unknown";
      a[o] || (a[o] = []), a[o].push(r);
    }
    const i = Object.entries(a);
    for (const [, r] of i)
      r.sort((o, c) => (o.sequenceNumber || 0) - (c.sequenceNumber || 0));
    return i.sort((r, o) => {
      const c = Math.max(...r[1].map((l) => l.sequenceNumber || 0));
      return Math.max(...o[1].map((l) => l.sequenceNumber || 0)) - c;
    }), i;
  }, [t]);
  return s.length === 0 ? null : /* @__PURE__ */ e("div", { class: "cert-chain", children: s.map(([a, i]) => /* @__PURE__ */ e(nl, { certs: i, onAction: n }, a)) });
}
function al({ patientId: t, collapsed: n, onToggleCollapse: s }) {
  const { certs: a, loading: i, refresh: r } = Yc(t), [o, c] = v(null), [d, l] = v(null), [p, u] = v(null), [m, h] = v({ facilityName: "", orgSlug: "" }), _ = F(async () => {
    if (m.facilityName && m.orgSlug) return m;
    const I = getOrg()?.org || "", k = { facilityName: window.getChatFacilityInfo?.() || "", orgSlug: I };
    return h(k), k;
  }, [m]), g = F(async (y, I) => {
    if (I === "send")
      await _(), c(y);
    else if (I === "skip")
      l(y);
    else if (I === "delay")
      u(y);
    else if (I === "unskip")
      try {
        await window.CertAPI.unskipCert(y.id), window.SuperToast?.success?.("Certification restored"), r();
      } catch (D) {
        console.error("[CertSection] Failed to unskip:", D), window.SuperToast?.error?.("Failed to restore certification");
      }
  }, [_, r]);
  async function f(y) {
    await window.CertAPI.skipCert(d.id, y), window.SuperToast?.success?.("Certification skipped"), r();
  }
  async function b(y) {
    await window.CertAPI.delayCert(p.id, y), window.SuperToast?.success?.("Certification marked as delayed"), r();
  }
  return i ? /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Certifications" }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__card-body", style: "padding: 16px; text-align: center; color: #6b7280; font-size: 13px;", children: "Loading certifications..." })
  ] }) : !a || a.length === 0 ? null : /* @__PURE__ */ e(K, { children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
        /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Certifications" }),
        /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: a.length }),
        /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] }),
      !n && /* @__PURE__ */ e("div", { class: "pdpm-an__card-body", style: "padding: 8px 12px;", children: /* @__PURE__ */ e(sl, { certs: a, onAction: g }) })
    ] }),
    /* @__PURE__ */ e(
      ga,
      {
        isOpen: !!o,
        onClose: () => c(null),
        cert: o,
        facilityName: m.facilityName,
        orgSlug: m.orgSlug,
        onSent: r
      }
    ),
    /* @__PURE__ */ e(
      fa,
      {
        isOpen: !!d,
        onClose: () => l(null),
        cert: d,
        onSkipped: f
      }
    ),
    /* @__PURE__ */ e(
      ya,
      {
        isOpen: !!p,
        onClose: () => u(null),
        cert: p,
        onDelayed: b
      }
    )
  ] });
}
function $a(t) {
  return t ? new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
}
function un(t) {
  return t && t.replace(/[\s/]+$/, "").trim() || null;
}
function il({ assessments: t, selectedId: n, onChange: s }) {
  if (!t || t.length <= 1) return null;
  const a = t.map((i) => ({
    value: i.id,
    label: un(i.type) || un(i.assessmentType) || "Assessment",
    subtitle: i.ardDate ? `ARD ${$a(i.ardDate)}` : void 0,
    badge: i.currentHipps || i.hipps || void 0
  }));
  return /* @__PURE__ */ e(
    gt,
    {
      options: a,
      value: n,
      onChange: s,
      align: "right",
      ariaLabel: "Select assessment"
    }
  );
}
const lt = {
  K0100: "Swallowing Disorder",
  K0200: "Height & Weight",
  K0520A: "Nutritional Approach — Parenteral/IV",
  K0520B: "Nutritional Approach — Feeding Tube",
  K0520C: "Nutritional Approach — Mechanically Altered Diet",
  K0710: "Percent Intake by Artificial Route",
  B0100: "Comatose",
  B0700: "Makes Self Understood",
  B0800: "Ability to Understand Others",
  C0100: "Should Brief Interview for Mental Status Be Conducted",
  C0200: "Repetition of Three Words",
  C0300: "Temporal Orientation",
  C0400: "Recall",
  C0500: "BIMS Summary Score",
  C0700: "Short-term Memory OK",
  C0800: "Long-term Memory OK",
  C0900: "Memory/Recall Ability",
  C1000: "Cognitive Skills for Daily Decision Making",
  D0100: "Should Resident Mood Interview Be Conducted",
  D0200: "Resident Mood Interview (PHQ-2)",
  D0300: "PHQ-9 Total Severity Score",
  D0350: "Safety Notification — PHQ",
  D0600: "Staff Assessment of Resident Mood (PHQ-9-OV)",
  E0100: "Psychosis",
  E0200: "Behavioral Symptoms — Presence & Frequency",
  E0800: "Rejection of Care",
  E0900: "Wandering",
  G0110: "ADL Self-Performance",
  G0120: "ADL Support Provided — Bathing",
  G0300: "Balance During Transitions and Walking",
  G0400: "Functional Limitation in Range of Motion",
  GG0130: "Self-Care — Admission Performance",
  GG0170: "Mobility — Admission Performance",
  H0100: "Appliances — Indwelling Catheter",
  H0200: "Urinary Toileting Program",
  H0300: "Urinary Continence",
  H0400: "Bowel Continence",
  H0500: "Bowel Toileting Program",
  H0600: "Appliances — Ostomy",
  I0020: "Indicate Conditions or Diseases — Cancer",
  I0100: "Active Diagnoses — Cancer",
  I0200: "Active Diagnoses — Anemia",
  I0300: "Active Diagnoses — Atrial Fibrillation",
  I0400: "Active Diagnoses — Coronary Artery Disease",
  I0500: "Active Diagnoses — Deep Venous Thrombosis",
  I0600: "Active Diagnoses — Heart Failure",
  I0700: "Active Diagnoses — Hypertension",
  I0900: "Active Diagnoses — Peripheral Vascular Disease",
  I2000: "Active Diagnoses — Pneumonia",
  I2100: "Active Diagnoses — Septicemia",
  I2300: "Active Diagnoses — Urinary Tract Infection",
  I2500: "Active Diagnoses — Cerebrovascular Accident (CVA)",
  I2900: "Active Diagnoses — Hemiplegia/Hemiparesis",
  I3700: "Active Diagnoses — Anxiety Disorder",
  I3800: "Active Diagnoses — Depression",
  I3900: "Active Diagnoses — Schizophrenia",
  I4000: "Active Diagnoses — Psychotic Disorder",
  I4200: "Active Diagnoses — PTSD",
  I4300: "Active Diagnoses — Tourette Syndrome",
  I4400: "Active Diagnoses — Aphasia",
  I4500: "Active Diagnoses — Cerebral Palsy",
  I4900: "Active Diagnoses — Multi-Drug Resistant Organism",
  I5100: "Active Diagnoses — Quadriplegia",
  I5200: "Active Diagnoses — Additional Diagnosis",
  I5250: "Active Diagnoses — Additional Diagnosis (cont.)",
  I5300: "Active Diagnoses — Additional Diagnosis (cont.)",
  I5350: "Active Diagnoses — Additional Diagnosis (cont.)",
  I5400: "Active Diagnoses — Additional Diagnosis (cont.)",
  I5500: "Active Diagnoses — Additional Diagnosis (cont.)",
  I5550: "Active Diagnoses — Additional Diagnosis (cont.)",
  I5600: "Active Diagnoses — Additional Diagnosis (cont.)",
  I5700: "Active Diagnoses — Additional Diagnosis (cont.)",
  I8000: "Active Diagnoses — Additional Active Diagnosis",
  J0100: "Pain Management — Pain Screening",
  J0200: "Pain — Should Pain Assessment Be Conducted",
  J0300: "Pain Presence",
  J0400: "Pain Frequency",
  J0500: "Pain Effect on Function",
  J0600: "Pain Intensity — Numeric Rating Scale",
  J0850: "Pain Intensity — Verbal Descriptor Scale",
  M0100: "Determination of Skin Treatments",
  M0150: "Risk of Developing Pressure Ulcers",
  M0210: "Unhealed Pressure Ulcer(s)",
  M0300: "Current Number of Unhealed Pressure Ulcers",
  M0610: "Dimensions of Unhealed Stage 3 or 4 Pressure Ulcers",
  M0700: "Most Severe Tissue Type for Any Pressure Ulcer",
  M0800: "Worsening in Pressure Ulcer Status Since Prior Assessment",
  M0900: "Healed Pressure Ulcers",
  M1030: "Number of Venous and Arterial Ulcers",
  M1040: "Other Skin Ulcer or Open Lesion",
  M1200: "Skin & Ulcer Treatments",
  N0415: "High-Risk Drug Classes — Use & Indication",
  O0100: "Special Treatments, Procedures, and Programs",
  O0250: "Influenza Vaccine",
  O0300: "Pneumococcal Vaccine",
  O0400: "Therapies",
  O0500: "Restorative Nursing Programs",
  O0600: "Physician Examinations",
  O0700: "Physician Orders"
};
function qe(t, n) {
  const s = n?.replace(/\[.*\]$/, "") || "", a = t?.replace(/\[.*\]$/, "") || "";
  return t && /^[A-Z]{1,2}\d+[A-Z]?(\[.*\])?$/.test(t) ? lt[a] || lt[s] || t : t && a !== s ? t : lt[s] || lt[a] || t || n;
}
function Ns(t, n) {
  if (!n?.meta?.ntaTiers) return null;
  for (const s of n.meta.ntaTiers)
    if ((s.levels || []).includes(t)) return s.tier;
  return null;
}
function rl(t, n) {
  if (n?.mode === "state_rate") {
    const s = Ns(t.currentLevel, n), a = Ns(t.newLevel, n);
    return s != null && a != null ? `NTA: Tier ${s} → Tier ${a}` : "NTA: tier upgrade";
  }
  return `NTA: ${t.currentLevel} → ${t.newLevel}`;
}
function Ra({ impact: t, payment: n, variant: s }) {
  const a = [];
  return t?.nta?.wouldChangeLevel && a.push({ label: "NTA", text: rl(t.nta, n) }), t?.nursing?.wouldChangeGroup && a.push({ label: "Nursing", from: t.nursing.currentPaymentGroup, to: t.nursing.newPaymentGroup }), t?.slp?.wouldChangeGroup && a.push({ label: "SLP", from: t.slp.currentGroup, to: t.slp.newGroup }), t?.ptot?.wouldChangeGroup && a.push({ label: "PT/OT", from: t.ptot.currentGroup, to: t.ptot.newGroup }), a.length === 0 ? null : /* @__PURE__ */ e("div", { class: s === "pending" ? "pdpm-an__impact-chips pdpm-an__impact-chips--pending" : "pdpm-an__impact-chips", children: a.map((r, o) => /* @__PURE__ */ e("span", { class: "pdpm-an__impact-chip", children: [
    /* @__PURE__ */ e("span", { class: "pdpm-an__impact-chip-k", children: r.label }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__impact-chip-v", children: r.text || `${r.from} → ${r.to}` })
  ] }, o)) });
}
function ol({ data: t, onItemClick: n }) {
  const s = t?.enhancedDetections || [], a = t?.payment, i = s.filter(
    (r) => r.wouldChangeHipps && r.solverStatus !== "query_sent" && r.solverStatus !== "awaiting_response" && r.solverStatus !== "dont_code" && r.userDecision?.decision !== "disagree"
  );
  return i.length === 0 ? null : /* @__PURE__ */ e("div", { class: "pdpm-an__opps", children: i.map((r, o) => {
    const c = r.mdsItem?.startsWith("I8000:") ? "I8000" : r.mdsItem;
    return /* @__PURE__ */ e(
      "div",
      {
        class: "pdpm-an__opp-row",
        onClick: () => n && n(r),
        role: "button",
        tabIndex: 0,
        onKeyDown: (d) => {
          (d.key === "Enter" || d.key === " ") && (d.preventDefault(), n?.(r));
        },
        children: [
          /* @__PURE__ */ e("span", { class: "pdpm-an__opp-icon", children: "⚡" }),
          /* @__PURE__ */ e("span", { class: "pdpm-an__opp-code", children: c }),
          /* @__PURE__ */ e("span", { class: "pdpm-an__opp-name", children: qe(r.itemName, r.mdsItem) }),
          /* @__PURE__ */ e(Ra, { impact: r.impact, payment: a }),
          /* @__PURE__ */ e("svg", { class: "pdpm-an__opp-go", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M5 3l4 4-4 4", stroke: "currentColor", "stroke-width": "1.3", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ]
      },
      o
    );
  }) });
}
function cl({ data: t, onItemClick: n, collapsed: s, onToggleCollapse: a }) {
  const r = (t?.enhancedDetections || []).filter(
    (o) => o.solverStatus === "dont_code" && (o.diagnosisPassed === !1 || o.activeStatusPassed === !1) && o.userDecision?.decision !== "disagree"
  );
  return r.length === 0 ? null : /* @__PURE__ */ e("div", { class: "pdpm-an__card pdpm-an__card--doc-risk", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: a, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "⚠" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Documentation Risks" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--amber", children: r.length }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-list", children: r.map((o, c) => {
      const d = o.mdsItem?.startsWith("I8000:") ? "I8000" : o.mdsItem, l = [];
      return o.diagnosisPassed === !1 && l.push("No physician diagnosis found"), o.activeStatusPassed === !1 && l.push("No active treatment order found"), /* @__PURE__ */ e(
        "div",
        {
          class: "pdpm-an__doc-risk-item",
          onClick: () => n && n(o),
          role: "button",
          tabIndex: 0,
          onKeyDown: (p) => {
            (p.key === "Enter" || p.key === " ") && (p.preventDefault(), n && n(o));
          },
          children: [
            /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-top", children: [
              /* @__PURE__ */ e("span", { class: "pdpm-an__driver-section", children: d }),
              /* @__PURE__ */ e("span", { class: "pdpm-an__driver-text", children: qe(o.itemName, o.mdsItem) })
            ] }),
            /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-badges", children: l.map((p, u) => /* @__PURE__ */ e("span", { class: "pdpm-an__doc-risk-badge", children: p }, u)) }),
            o.rationale && /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-rationale", children: o.rationale })
          ]
        },
        c
      );
    }) })
  ] });
}
function ll(t) {
  if (!t) return "not yet sent";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "sent today" : `sent ${n}d ago`;
}
function dl({ data: t, onQueryClick: n, collapsed: s, onToggleCollapse: a }) {
  const i = t?.outstandingQueries || [], r = t?.payment, o = i.filter(
    (c) => c.status === "sent" || c.status === "pending" || c.status === "awaiting_response"
  );
  return o.length === 0 ? null : /* @__PURE__ */ e("div", { class: "pdpm-an__card pdpm-an__card--queries", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: a, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "✉" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Pending Queries" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--pending", children: o.length }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ e("ul", { class: "pdpm-an__query-list", children: o.map((c, d) => {
      const l = c.pdpmImpact?.componentImpacts, p = l ? { slp: l.slp, nta: l.nta, nursing: l.nursing, ptot: l.ptot } : null, u = c.status === "sent" || c.status === "awaiting_response";
      return /* @__PURE__ */ e(
        "li",
        {
          class: "pdpm-an__query-item pdpm-an__query-item--clickable",
          onClick: () => n && n(c),
          role: "button",
          tabIndex: 0,
          children: [
            /* @__PURE__ */ e("div", { class: "pdpm-an__query-top", children: [
              /* @__PURE__ */ e("div", { class: "pdpm-an__query-main", children: [
                c.mdsItem && /* @__PURE__ */ e("span", { class: "pdpm-an__query-code", children: c.mdsItem }),
                /* @__PURE__ */ e("span", { class: "pdpm-an__query-text", children: qe(c.mdsItemName, c.mdsItem) })
              ] }),
              /* @__PURE__ */ e("span", { class: `pdpm-an__query-status-pill${u ? "" : " pdpm-an__query-status-pill--draft"}`, children: u ? ll(c.sentAt) : "draft" })
            ] }),
            p && /* @__PURE__ */ e(Ra, { impact: p, payment: r, variant: "pending" })
          ]
        },
        d
      );
    }) })
  ] });
}
function ul(t) {
  if (!t) return "";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "today" : n === 1 ? "yesterday" : `${n}d ago`;
}
function pl({ data: t, onQueryClick: n, collapsed: s, onToggleCollapse: a }) {
  const r = (t?.recentlySigned || t?.signedQueries || t?.completedQueries || []).filter(
    (c) => c.status === "signed" || c.status === "completed" || c.status === "resolved" || c.signedAt
  );
  if (r.length === 0) return null;
  const o = r.filter((c) => c.mdsItemCoded === !1).length;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__card pdpm-an__card--signed", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: a, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "✓" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Recently Signed" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: r.length }),
      o > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--coding", children: [
        o,
        " need coding"
      ] }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ e("ul", { class: "pdpm-an__query-list", children: r.map((c, d) => {
      const l = c.mdsItemCoded === !1, p = c.mdsItemCoded === !0, u = ul(c.signedAt || c.completedAt);
      return /* @__PURE__ */ e(
        "li",
        {
          class: `pdpm-an__signed-item${l ? " pdpm-an__signed-item--needs-coding" : ""} pdpm-an__signed-item--clickable`,
          onClick: () => n && n(c),
          role: "button",
          tabIndex: 0,
          children: [
            c.mdsItem && /* @__PURE__ */ e("span", { class: "pdpm-an__query-code pdpm-an__query-code--signed", children: c.mdsItem }),
            /* @__PURE__ */ e("span", { class: "pdpm-an__query-text", children: qe(c.mdsItemName, c.mdsItem) }),
            /* @__PURE__ */ e("div", { class: "pdpm-an__signed-badges", children: [
              l && /* @__PURE__ */ e("span", { class: "pdpm-an__signed-badge pdpm-an__signed-badge--coding", children: "Needs Coding" }),
              p && /* @__PURE__ */ e("span", { class: "pdpm-an__signed-badge pdpm-an__signed-badge--coded", children: "Coded" }),
              u && /* @__PURE__ */ e("span", { class: "pdpm-an__query-date", children: u })
            ] })
          ]
        },
        d
      );
    }) })
  ] });
}
function ml({ nta: t, potentialLevel: n, payment: s }) {
  if (!t) return null;
  if (s?.mode === "state_rate") {
    if (t.currentPoints == null || t.pointsNeeded == null) return null;
    const h = s.current?.ntaTier?.tier, _ = h != null ? h - 1 : null, g = _ != null && _ >= 1 ? `Tier ${_}` : null;
    if (!g && t.pointsNeeded <= 0) return null;
    const f = t.currentPoints + t.pointsNeeded, b = f > 0 ? Math.round(t.currentPoints / f * 100) : 0;
    return /* @__PURE__ */ e("div", { class: "pdpm-an__nta-inline", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__nta-sbar", children: /* @__PURE__ */ e("div", { class: "pdpm-an__nta-sfill", style: { width: `${b}%` } }) }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__nta-slbl", children: [
        t.pointsNeeded === 1 ? "1 pt" : `${t.pointsNeeded} pts`,
        " away",
        g ? ` from ${g}` : ""
      ] })
    ] });
  }
  const a = t.levels;
  if (!a || a.length < 2 || !t.currentLevel) return null;
  const i = a.findIndex((h) => h.code === t.currentLevel);
  if (i === -1) return null;
  const r = n || t.nextLevel, o = r ? a.findIndex((h) => h.code === r) : -1;
  if (o <= i) return null;
  const c = (h) => h / (a.length - 1) * 100, d = Math.max(c(i), 4), p = c(o) - d, u = t.pointsNeeded, m = t.nextLevel;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__nta-track", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__nta-bar", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__nta-bar-cur", style: { width: `${d}%` } }),
      /* @__PURE__ */ e("div", { class: "pdpm-an__nta-bar-gain", style: { left: `${d}%`, width: `${p}%` } })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__nta-lvls", children: a.map((h, _) => /* @__PURE__ */ e("span", { class: `pdpm-an__nta-lvl${_ === i ? " pdpm-an__nta-lvl--cur" : ""}${_ === o ? " pdpm-an__nta-lvl--tgt" : ""}`, children: h.code }, h.code)) }),
    u != null && u > 0 && m && /* @__PURE__ */ e("span", { class: "pdpm-an__nta-away", children: [
      u === 1 ? "1 pt" : `${u} pts`,
      " ",
      "→",
      " ",
      m
    ] })
  ] });
}
function hl({ gap: t }) {
  const n = t?.slp;
  if (!n || n.tier1Met == null && n.tier2Met == null) return null;
  const s = (n.tier2Met ?? 0) + (n.tier2Needed ?? 0);
  return /* @__PURE__ */ e("div", { class: "pdpm-an__tier-row", children: [
    n.tier1Met != null && /* @__PURE__ */ e("span", { class: "pdpm-an__tier-segment", children: [
      "Tier 1: ",
      Array.from({ length: n.tier1Met }, (a, i) => /* @__PURE__ */ e("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--filled", children: "●" }, i)),
      " ",
      n.tier1Met,
      " met"
    ] }),
    (n.tier2Met != null || n.tier2Needed != null) && /* @__PURE__ */ e("span", { class: "pdpm-an__tier-segment", children: [
      n.tier1Met != null && /* @__PURE__ */ e("span", { class: "pdpm-an__tier-sep", children: "·" }),
      "Tier 2: ",
      Array.from({ length: n.tier2Met ?? 0 }, (a, i) => /* @__PURE__ */ e("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--filled", children: "●" }, `f${i}`)),
      Array.from({ length: n.tier2Needed ?? 0 }, (a, i) => /* @__PURE__ */ e("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--empty", children: "○" }, `e${i}`)),
      " ",
      n.tier2Met ?? 0,
      "/",
      s
    ] })
  ] });
}
function _l(t) {
  const n = { ptot: [], slp: [], nursing: [], nta: [] };
  if (!t) return n;
  if (t.nta?.contributingConditions && (n.nta = t.nta.contributingConditions.map((s) => ({
    mdsItem: s.mdsItem,
    itemName: s.categoryName,
    helpText: `+${s.points} pts (${s.categoryName})`,
    pointsAdded: s.points
  }))), t.slp) {
    const s = [];
    if (t.slp.tier2?.hasSwallowingDisorder && s.push({ mdsItem: "K0100A", itemName: "Swallowing Disorder", helpText: "Tier 2: swallowing" }), t.slp.tier2?.hasMechanicallyAlteredDiet && s.push({ mdsItem: "K0520C1", itemName: "Mechanically Altered Diet", helpText: "Tier 2: mechanically altered diet" }), t.slp.comorbidities)
      for (const a of t.slp.comorbidities)
        a.isPresent && a.comorbidityNumber <= 100 && s.push({ mdsItem: a.mdsItem, itemName: a.name, helpText: `Tier 1 comorbidity: ${a.name}` });
    t.slp.tier1?.hasCognitiveImpairment && s.push({ mdsItem: "C0500", itemName: "Cognitive Impairment", helpText: "Tier 1: cognitive impairment" }), t.slp.tier1?.hasAcuteNeuro && s.push({ mdsItem: "I4500", itemName: "Acute Neurological", helpText: "Tier 1: acute neurological condition" }), n.slp = s;
  }
  if (t.nursing?.conditionsEvaluated) {
    const s = { ES: "Extensive Services", SCH: "Special Care High", SCL: "Special Care Low", CC: "Clinically Complex" };
    n.nursing = t.nursing.conditionsEvaluated.filter((a) => a.isMet).map((a) => ({
      mdsItem: a.triggeringItems?.[0] || "",
      itemName: a.subcategoryName,
      helpText: `${s[a.mainCategory] || a.mainCategory}: ${a.subcategoryName}`
    }));
  }
  return n;
}
function gl({ data: t, payment: n, onItemClick: s, collapsed: a, onToggleCollapse: i }) {
  const [r, o] = v(null), c = t?.gapAnalysis || {}, d = t?.hippsDecoded || {}, l = t?.potentialHippsDecoded || {}, p = t?.enhancedDetections || [], u = _l(t?.calculation), m = [
    {
      label: "PT/OT",
      key: "ptot",
      currentCode: d.ptot?.code,
      potential: l.ptot?.code,
      name: d.ptot?.name,
      detail: c.ptot?.clinicalCategoryName,
      items: c.ptot?.detectionsToHelp || [],
      captured: u.ptot
    },
    {
      label: "SLP",
      key: "slp",
      currentCode: d.slp?.code,
      potential: l.slp?.code,
      name: d.slp?.name,
      detail: c.slp?.clinicalCategoryName,
      items: c.slp?.detectionsToHelp || [],
      captured: u.slp
    },
    {
      label: "Nursing",
      key: "nursing",
      currentCode: d.nursing?.code,
      potential: l.nursing?.code,
      name: d.nursing?.name,
      detail: c.nursing?.qualifyingSubcategoryName,
      items: c.nursing?.detectionsToHelp || [],
      captured: u.nursing
    },
    {
      label: "NTA",
      key: "nta",
      currentCode: n?.mode === "state_rate" && n.current?.ntaTier?.tier != null ? `Tier ${n.current.ntaTier.tier}` : d.nta?.code,
      potential: n?.mode === "state_rate" ? n.potential?.ntaTier?.tier != null && n.potential.ntaTier.tier !== n.current?.ntaTier?.tier ? `Tier ${n.potential.ntaTier.tier}` : null : l.nta?.code,
      name: n?.mode === "state_rate" && n.current?.ntaTier?.label || d.nta?.name,
      detail: n?.mode === "state_rate" && n.current?.ntaTier?.pointRange || c.nta?.clinicalCategoryName,
      items: c.nta?.detectionsToHelp || [],
      captured: u.nta,
      ntaProgress: c.nta
    }
  ];
  return m.some((_) => _.currentCode || _.potential) ? /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: i, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "☰" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "PDPM Components" }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${a ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !a && /* @__PURE__ */ e("div", { class: "pdpm-an__components", children: m.map((_) => {
      if (!_.currentCode && !_.potential) return null;
      const g = _.potential && _.currentCode && _.potential !== _.currentCode, f = _.items.length > 0, b = _.captured.length > 0, y = r === _.key, I = () => {
        (f || b || _.detail) && o(y ? null : _.key);
      }, D = f || b || _.detail;
      return /* @__PURE__ */ e(
        "div",
        {
          class: `pdpm-an__comp-row${g ? " pdpm-an__comp-row--improved" : ""}${y ? " pdpm-an__comp-row--expanded" : ""}`,
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                class: `pdpm-an__comp-header${D ? " pdpm-an__comp-header--clickable" : ""}`,
                onClick: D ? I : void 0,
                role: D ? "button" : void 0,
                tabIndex: D ? 0 : void 0,
                onKeyDown: D ? (k) => {
                  (k.key === "Enter" || k.key === " ") && (k.preventDefault(), I());
                } : void 0,
                children: [
                  /* @__PURE__ */ e("span", { class: "pdpm-an__comp-label", children: _.label }),
                  /* @__PURE__ */ e("span", { class: "pdpm-an__comp-name", children: _.name || "—" }),
                  _.currentCode && /* @__PURE__ */ e("span", { class: "pdpm-an__comp-code", children: _.currentCode }),
                  g && /* @__PURE__ */ e("span", { class: "pdpm-an__comp-change", children: [
                    "→",
                    " ",
                    _.potential
                  ] }),
                  D && /* @__PURE__ */ e("svg", { class: `pdpm-an__comp-chevron${y ? " pdpm-an__comp-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M4 5.5L7 8.5L10 5.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                ]
              }
            ),
            _.ntaProgress && /* @__PURE__ */ e(ml, { nta: _.ntaProgress, potentialLevel: _.potential, payment: n }),
            y && /* @__PURE__ */ e("div", { class: "pdpm-an__comp-detail", children: [
              _.detail && /* @__PURE__ */ e("div", { class: "pdpm-an__comp-qualifier", children: _.detail }),
              _.key === "slp" && /* @__PURE__ */ e(hl, { gap: c }),
              f && /* @__PURE__ */ e(K, { children: [
                b && /* @__PURE__ */ e("div", { class: "pdpm-an__captured-label pdpm-an__captured-label--opps", children: "Opportunities" }),
                /* @__PURE__ */ e("div", { class: "pdpm-an__ci-list", children: _.items.map((k, T) => {
                  const A = k.mdsItem?.startsWith("I8000:") ? "I8000" : k.mdsItem, x = (C) => {
                    if (C.stopPropagation(), !s) return;
                    const S = p.find((w) => w.mdsItem === k.mdsItem);
                    S && s(S);
                  };
                  return /* @__PURE__ */ e(
                    "div",
                    {
                      class: "pdpm-an__ci-row",
                      onClick: x,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (C) => {
                        (C.key === "Enter" || C.key === " ") && (C.preventDefault(), x(C));
                      },
                      children: [
                        /* @__PURE__ */ e("span", { class: "pdpm-an__ci-code", children: A }),
                        /* @__PURE__ */ e("div", { class: "pdpm-an__ci-body", children: [
                          /* @__PURE__ */ e("span", { class: "pdpm-an__ci-name", children: qe(k.itemName, k.mdsItem) }),
                          k.helpText && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-help", children: k.helpText })
                        ] }),
                        k.pointsAdded != null && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-impact pdpm-an__ci-impact--pts", children: [
                          "+",
                          k.pointsAdded,
                          " pts"
                        ] })
                      ]
                    },
                    T
                  );
                }) })
              ] }),
              b && /* @__PURE__ */ e("div", { class: "pdpm-an__captured", children: [
                (f || _.detail) && /* @__PURE__ */ e("div", { class: "pdpm-an__captured-label", children: "Currently captured" }),
                /* @__PURE__ */ e("div", { class: "pdpm-an__ci-list", children: _.captured.map((k, T) => {
                  const A = k.mdsItem?.startsWith("I8000:") ? "I8000" : k.mdsItem, x = (C) => {
                    if (C.stopPropagation(), !s) return;
                    const S = p.find((w) => w.mdsItem === k.mdsItem);
                    S && s(S);
                  };
                  return /* @__PURE__ */ e(
                    "div",
                    {
                      class: "pdpm-an__ci-row pdpm-an__ci-row--captured",
                      onClick: x,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (C) => {
                        (C.key === "Enter" || C.key === " ") && (C.preventDefault(), x(C));
                      },
                      children: [
                        /* @__PURE__ */ e("span", { class: "pdpm-an__ci-check", children: "✓" }),
                        /* @__PURE__ */ e("span", { class: "pdpm-an__ci-code", children: A }),
                        /* @__PURE__ */ e("div", { class: "pdpm-an__ci-body", children: [
                          /* @__PURE__ */ e("span", { class: "pdpm-an__ci-name", children: qe(k.itemName, k.mdsItem) }),
                          k.helpText && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-help", children: k.helpText })
                        ] }),
                        k.pointsAdded != null && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-impact pdpm-an__ci-impact--pts", children: [
                          "+",
                          k.pointsAdded,
                          " pts"
                        ] })
                      ]
                    },
                    `cap-${T}`
                  );
                }) })
              ] })
            ] })
          ]
        },
        _.key
      );
    }) })
  ] }) : null;
}
const fl = {
  // BIMS — lower = worse
  Intact: "#059669",
  "Mildly Impaired": "#d97706",
  "Moderately/Severely Impaired": "#ef4444",
  // PHQ-9 — higher = worse
  "None/Minimal": "#059669",
  Mild: "#84cc16",
  Moderate: "#d97706",
  "Moderately Severe": "#ea580c",
  Severe: "#ef4444",
  // NFS
  "Low Needs": "#059669",
  "Medium Needs": "#d97706",
  "High Needs": "#ef4444",
  // PT/OT
  "Fully Independent": "#059669",
  "Moderate/Independent": "#84cc16",
  Dependent: "#d97706",
  "Most Dependent": "#ef4444"
};
function dt({ value: t, max: n, label: s, severity: a, impact: i, extra: r }) {
  const o = fl[a] || "#9ca3af", c = t != null && n > 0 ? Math.round(t / n * 100) : 0, d = 20, l = 2 * Math.PI * d, p = l - c / 100 * l;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__sc", title: i || "", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__sc-ring", children: [
      /* @__PURE__ */ e("svg", { width: "52", height: "52", viewBox: "0 0 52 52", children: [
        /* @__PURE__ */ e("circle", { cx: "26", cy: "26", r: d, fill: "none", stroke: "#f1f5f9", "stroke-width": "4" }),
        t != null && /* @__PURE__ */ e(
          "circle",
          {
            cx: "26",
            cy: "26",
            r: d,
            fill: "none",
            stroke: o,
            "stroke-width": "4",
            "stroke-dasharray": l,
            "stroke-dashoffset": p,
            "stroke-linecap": "round",
            transform: "rotate(-90 26 26)"
          }
        )
      ] }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__sc-val", children: t ?? "—" })
    ] }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__sc-label", children: s }),
    a && /* @__PURE__ */ e("span", { class: "pdpm-an__sc-severity", style: { color: o }, children: a }),
    r && /* @__PURE__ */ e("span", { class: "pdpm-an__sc-extra", children: r })
  ] });
}
const yl = [
  { key: "eating", label: "Eating", code: "GG0130A", scope: "both" },
  { key: "oralHygiene", label: "Oral Hygiene", code: "GG0130B", scope: "ptot" },
  { key: "toiletingHygiene", label: "Toileting Hygiene", code: "GG0130C", scope: "both" },
  { key: "sittingToLying", label: "Sitting to Lying", code: "GG0170B", scope: "both" },
  { key: "lyingToSitting", label: "Lying to Sitting", code: "GG0170C", scope: "both" },
  { key: "sitToStand", label: "Sit to Stand", code: "GG0170D", scope: "both" },
  { key: "transfer", label: "Transfer", code: "GG0170E", scope: "both" },
  { key: "toiletTransfer", label: "Toilet Transfer", code: "GG0170F", scope: "both" },
  { key: "walking50", label: "Walking 50ft", code: "GG0170J", scope: "ptot" },
  { key: "walking150", label: "Walking 150ft", code: "GG0170K", scope: "ptot" }
];
function vl({ breakdown: t }) {
  if (!t) return null;
  const n = t.selfCare || {}, s = t.mobility || {}, a = { ...n, ...s };
  return /* @__PURE__ */ e("div", { class: "pdpm-an__gg", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__gg-header", children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__gg-title", children: "GG Functional Items" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__gg-total", children: [
        "Total: ",
        t.total,
        "/24"
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__gg-grid", children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__gg-th", children: "Item" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__gg-th", children: "Score" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__gg-th", children: "Used In" }),
      yl.map((i) => {
        const r = a[i.key];
        return /* @__PURE__ */ e(K, { children: [
          /* @__PURE__ */ e("span", { class: "pdpm-an__gg-cell", children: i.label }),
          /* @__PURE__ */ e("span", { class: "pdpm-an__gg-cell pdpm-an__gg-cell--score", children: r ?? "—" }),
          /* @__PURE__ */ e("span", { class: `pdpm-an__gg-cell pdpm-an__gg-scope${i.scope === "ptot" ? " pdpm-an__gg-scope--ptot" : ""}`, children: i.scope === "ptot" ? "PT/OT only" : "Nursing + PT/OT" })
        ] });
      })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__gg-avgs", children: [
      s.bedMobilityAverage != null && /* @__PURE__ */ e("span", { children: [
        "Bed Mobility Avg: ",
        s.bedMobilityAverage
      ] }),
      s.transferAverage != null && /* @__PURE__ */ e("span", { children: [
        "Transfer Avg: ",
        s.transferAverage
      ] }),
      s.walkingAverage != null && /* @__PURE__ */ e("span", { children: [
        "Walking Avg: ",
        s.walkingAverage
      ] })
    ] })
  ] });
}
function bl({ data: t, collapsed: n, onToggleCollapse: s }) {
  const a = t?.sectionProgress;
  if (!a || !a.total) return null;
  const { sections: i = {} } = a, r = Object.entries(i);
  let o = 0, c = 0, d = 0;
  for (const [, u] of r)
    u === "Complete" || u === "Completed" || u === "Locked" ? o++ : u === "In Progress" ? c++ : d++;
  const l = r.length || a.total || 0, p = l > 0 ? Math.round(o / l * 100) : 0;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "📋" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "MDS Sections" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: [
        p,
        "%"
      ] }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__sp-body", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__sp-bar-row", children: [
        /* @__PURE__ */ e("div", { class: "pdpm-an__sp-bar", children: /* @__PURE__ */ e("div", { class: "pdpm-an__sp-fill", style: { width: `${p}%` } }) }),
        /* @__PURE__ */ e("div", { class: "pdpm-an__sp-counts", children: [
          o > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--done", children: [
            o,
            " done"
          ] }),
          c > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--wip", children: [
            c,
            " in progress"
          ] }),
          d > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--todo", children: [
            d,
            " not started"
          ] })
        ] })
      ] }),
      r.length > 0 && /* @__PURE__ */ e("div", { class: "pdpm-an__sp-tags", children: r.map(([u, m]) => {
        const h = m === "Complete" || m === "Completed", _ = m === "Locked";
        return /* @__PURE__ */ e("span", { class: `pdpm-an__sp-tag ${h || _ ? "pdpm-an__sp-tag--done" : m === "In Progress" ? "pdpm-an__sp-tag--wip" : "pdpm-an__sp-tag--todo"}`, title: m, children: [
          (h || _) && /* @__PURE__ */ e("span", { class: "pdpm-an__sp-tag-check", children: "✓" }),
          u
        ] }, u);
      }) })
    ] })
  ] });
}
function wl({ data: t, collapsed: n, onToggleCollapse: s }) {
  const [a, i] = v(!1), r = t?.scores;
  if (!r) return null;
  const o = r.bims, c = r.phq9, d = r.nursingFunctionalScore, l = r.ptotFunctionalScore, p = r.functionalScoreBreakdown;
  if (!o && !c && !d && !l) return null;
  const u = c?.score != null && c.score !== 99 ? c.score : c?.staffAssessmentScore, m = (c?.score == null || c?.score === 99) && c?.staffAssessmentScore != null ? "(Staff assessment)" : null, h = [];
  return o?.meetsImpairmentThreshold && h.push({ color: "#d97706", text: o.pdpmImpact || "Cognitive impairment detected — affects SLP and Nursing classification" }), c?.meetsDepressionThreshold && h.push({ color: "#ea580c", text: c.pdpmImpact || "Depression threshold met — upgrades Nursing payment group" }), d?.meetsBSCPThreshold && h.push({ color: "#6366f1", text: d.bscpNote || "NFS ≥ 11 — BSCP category eligible" }), /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "🧠" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Clinical Scores" }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__scores-body", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__scores-row", children: [
        o && /* @__PURE__ */ e(dt, { value: o.score, max: 15, label: "BIMS", severity: o.severity, impact: o.pdpmImpact }),
        c && /* @__PURE__ */ e(dt, { value: u, max: 27, label: "PHQ-9", severity: c.severity, impact: c.pdpmImpact, extra: m }),
        d && /* @__PURE__ */ e(dt, { value: d.score, max: 16, label: "NFS", severity: d.severity, impact: d.pdpmImpact }),
        l && /* @__PURE__ */ e(dt, { value: l.score, max: 24, label: "PT/OT Func", severity: l.severity, impact: l.pdpmImpact })
      ] }),
      h.length > 0 && /* @__PURE__ */ e("div", { class: "pdpm-an__thresholds", children: h.map((_, g) => /* @__PURE__ */ e("div", { class: "pdpm-an__threshold", style: { borderLeftColor: _.color }, children: _.text }, g)) }),
      p && /* @__PURE__ */ e("div", { class: "pdpm-an__gg-toggle-wrap", children: [
        /* @__PURE__ */ e("button", { class: "pdpm-an__gg-toggle", onClick: () => i(!a), children: [
          a ? "Hide" : "Show",
          " GG Item Breakdown",
          /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${a ? " pdpm-an__card-chevron--open" : ""}`, width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ] }),
        a && /* @__PURE__ */ e(vl, { breakdown: p })
      ] })
    ] })
  ] });
}
function Il({ data: t }) {
  if (!t) return null;
  const n = t.summary || {}, s = t.calculation || {}, a = t.payment, i = n.currentHipps || s.hippsCode || "?????", r = n.potentialHippsIfCoded, o = a?.mode === "state_rate", c = (T) => T ? T.replace(/_/g, "") : null, d = o && c(a.current?.groupCode) || i, l = o ? c(a.potential?.groupCode) ?? d : r, p = o ? l && l !== d : n.hasImprovements && r && r !== i, u = rr(a), m = t.compliance?.summary || {}, h = m.passed ?? 0, _ = m.notApplicable ?? 0, g = (m.total ?? 0) - _, f = t.sectionProgress;
  let b = 0, y = 0;
  if (f?.sections)
    for (const T of Object.values(f.sections))
      y++, (T === "Complete" || T === "Completed" || T === "Locked") && b++;
  y || (y = f?.total ?? 0);
  const I = y > 0 ? Math.round(b / y * 100) : 0, D = (t.enhancedDetections || []).filter(
    (T) => T.wouldChangeHipps && T.solverStatus !== "query_sent" && T.solverStatus !== "awaiting_response" && T.solverStatus !== "dont_code" && T.userDecision?.decision !== "disagree"
  ).length, k = u && u.delta && u.delta !== "+$0/day" && u.delta !== "+0";
  return /* @__PURE__ */ e("div", { class: "pdpm-an__summary", children: [
    k && /* @__PURE__ */ e("div", { class: "pdpm-an__summary-delta", children: u.delta }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__summary-codes", children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__summary-code", children: d }),
      p && /* @__PURE__ */ e(K, { children: [
        /* @__PURE__ */ e("span", { class: "pdpm-an__summary-arrow", children: "→" }),
        /* @__PURE__ */ e("span", { class: "pdpm-an__summary-code pdpm-an__summary-code--green", children: l })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__summary-stats", children: [
      y > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__summary-stat", children: [
        I,
        "% MDS"
      ] }),
      g > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__summary-stat", children: [
        h,
        "/",
        g,
        " Compliance"
      ] }),
      D > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__summary-stat pdpm-an__summary-stat--green", children: [
        D,
        " Opp",
        D !== 1 ? "s" : ""
      ] })
    ] })
  ] });
}
function Dl() {
  return /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__spinner" }),
    /* @__PURE__ */ e("p", { children: "Loading assessment data…" })
  ] });
}
function kl({ message: t, onRetry: n }) {
  return /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__state-icon", children: "⚠" }),
    /* @__PURE__ */ e("p", { children: t }),
    /* @__PURE__ */ e("button", { class: "pdpm-an__retry-btn", onClick: n, children: "Retry" })
  ] });
}
function Nl({ assessmentData: t, onItemClick: n, onQueryClick: s, patientId: a }) {
  const [i, r] = v({}), o = (c) => r((d) => ({ ...d, [c]: !d[c] }));
  return t ? /* @__PURE__ */ e("div", { class: "pdpm-an__content", children: [
    /* @__PURE__ */ e(Il, { data: t }),
    /* @__PURE__ */ e(ol, { data: t, onItemClick: n }),
    /* @__PURE__ */ e(dl, { data: t, onQueryClick: s, collapsed: i.queries, onToggleCollapse: () => o("queries") }),
    /* @__PURE__ */ e(pl, { data: t, onQueryClick: s, collapsed: i.signed, onToggleCollapse: () => o("signed") }),
    /* @__PURE__ */ e(gl, { data: t, payment: t?.payment, onItemClick: n, collapsed: i.components, onToggleCollapse: () => o("components") }),
    /* @__PURE__ */ e(bl, { data: t, collapsed: i.sections, onToggleCollapse: () => o("sections") }),
    /* @__PURE__ */ e(cl, { data: t, onItemClick: n, collapsed: i.docRisks, onToggleCollapse: () => o("docRisks") }),
    /* @__PURE__ */ e(wl, { data: t, collapsed: i.scores, onToggleCollapse: () => o("scores") }),
    /* @__PURE__ */ e(Wc, { data: t, collapsed: i.compliance, onToggleCollapse: () => o("compliance") }),
    a && /* @__PURE__ */ e(al, { patientId: a, collapsed: i.certs, onToggleCollapse: () => o("certs") })
  ] }) : /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: /* @__PURE__ */ e("p", { children: "No assessment data available." }) });
}
function Cl({ mode: t, onToggle: n }) {
  const s = t === "panel" ? "Expand to modal" : "Dock as side panel";
  return /* @__PURE__ */ e("button", { class: "pdpm-an__mode-toggle", onClick: n, title: s, "aria-label": s, children: t === "panel" ? (
    // Expand icon (arrows pointing outward)
    /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ e("path", { d: "M5.5 2H3a1 1 0 00-1 1v2.5M10.5 2H13a1 1 0 011 1v2.5M10.5 14H13a1 1 0 001-1v-2.5M5.5 14H3a1 1 0 01-1-1v-2.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
  ) : (
    // Sidebar/panel icon (panel docked right)
    /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "12", height: "12", rx: "1.5", stroke: "currentColor", "stroke-width": "1.5" }),
      /* @__PURE__ */ e("line", { x1: "10", y1: "2", x2: "10", y2: "14", stroke: "currentColor", "stroke-width": "1.5" })
    ] })
  ) });
}
function Sl({ context: t, onClose: n, initialMode: s = "modal" }) {
  const [a, i] = v(null), [r, o] = v(null), [c, d] = v(s), [l, p] = v(!1), {
    assessments: u,
    detail: m,
    patientName: h,
    loading: _,
    detailLoading: g,
    error: f,
    retry: b,
    retryDetail: y
  } = Bc(t, a), I = u?.[0]?.id;
  t?.scope === "patient" && I && !a && i(I);
  const D = c === "panel";
  function k(R) {
    D || R.target === R.currentTarget && n();
  }
  function T() {
    n(), typeof MDSCommandCenterLauncher < "u" && MDSCommandCenterLauncher.open();
  }
  function A() {
    d((R) => R === "modal" ? "panel" : "modal");
  }
  const x = h || t?.patientName || "", C = m || null, S = u.find((R) => R.id === a), w = un(
    C?.assessmentType || C?.type || S?.type
  ) || "", O = C?.ardDate || S?.ardDate ? $a(C?.ardDate || S?.ardDate) : "", E = _ || g, P = D ? "pdpm-an__panel-backdrop" : "pdpm-an__overlay", M = (D ? "pdpm-an__panel" : "pdpm-an__modal") + (l ? " pdpm-an--split" : "");
  return /* @__PURE__ */ e("div", { class: P, onClick: k, children: /* @__PURE__ */ e("div", { class: M, role: "dialog", "aria-modal": D ? "false" : "true", "aria-label": "PDPM Analyzer", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__header", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__header-left", children: [
        /* @__PURE__ */ e("button", { class: "pdpm-an__back-btn", onClick: T, children: [
          "←",
          " Command Center"
        ] }),
        /* @__PURE__ */ e("div", { class: "pdpm-an__patient-info", children: [
          x && /* @__PURE__ */ e("span", { class: "pdpm-an__patient-name", children: x }),
          w && /* @__PURE__ */ e("span", { class: "pdpm-an__assessment-label", children: w }),
          O && /* @__PURE__ */ e("span", { class: "pdpm-an__ard-date", children: [
            "ARD ",
            O
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "pdpm-an__header-right", children: [
        /* @__PURE__ */ e(
          il,
          {
            assessments: u,
            selectedId: a,
            onChange: (R) => {
              i(R), o(null);
            }
          }
        ),
        /* @__PURE__ */ e(Cl, { mode: c, onToggle: A }),
        /* @__PURE__ */ e("button", { class: "pdpm-an__close-btn", onClick: n, "aria-label": "Close", children: "✕" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__body", children: [
      E && /* @__PURE__ */ e(Dl, {}),
      !E && f && /* @__PURE__ */ e(kl, { message: f, onRetry: m ? y : b }),
      !E && !f && (r ? /* @__PURE__ */ e(
        Ea,
        {
          item: r.item,
          context: { ...t, assessmentId: a || t?.assessmentId, patientName: x },
          onBack: () => {
            o(null), p(!1);
          },
          onSplitChange: p,
          onDismiss: () => {
            o(null), p(!1);
          }
        }
      ) : /* @__PURE__ */ e(
        Nl,
        {
          assessmentData: C,
          patientId: t?.patientId,
          onItemClick: (R) => o({ type: "detection", item: R }),
          onQueryClick: (R) => {
            const B = {
              ...R,
              patientName: R.patientName || x,
              locationName: R.locationName || t?.facilityName || ""
            };
            window.QueryDetailModal?.show(B, null, { showPdfButton: R.hasPdf ?? !1 });
          }
        }
      ))
    ] })
  ] }) });
}
function Xe(t) {
  return t && typeof t == "object" && "success" in t && "data" in t ? t.data : t;
}
function xl({ facilityName: t, orgSlug: n }) {
  const [s, a] = v(null), [i, r] = v(null), [o, c] = v(!0), [d, l] = v(null), p = F(async () => {
    if (!t || !n) {
      l("Missing facility or organization context"), c(!1);
      return;
    }
    c(!0), l(null);
    const u = new URLSearchParams({ facilityName: t, orgSlug: n });
    try {
      const [m, h] = await Promise.all([
        chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/qm-planner/currently-triggering?${u}`,
          options: { method: "GET" }
        }),
        chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/qm-planner/preventable-alerts?${u}`,
          options: { method: "GET" }
        })
      ]);
      if (!m?.success) throw new Error(m?.error || "Failed to load currently-triggering");
      if (!h?.success) throw new Error(h?.error || "Failed to load preventable alerts");
      a(Xe(m.data)), r(Xe(h.data));
    } catch (m) {
      console.error("[QMBoard] fetch failed", m), l(m.message || "Failed to load QM board");
    } finally {
      c(!1);
    }
  }, [t, n]);
  return G(() => {
    p();
  }, [p]), G(() => {
    const u = () => p();
    return window.addEventListener("super:qm-snooze-changed", u), () => window.removeEventListener("super:qm-snooze-changed", u);
  }, [p]), { currentlyTriggering: s, preventableAlerts: i, loading: o, error: d, retry: p };
}
function Pl({ tile: t, onClick: n }) {
  const { status: s, label: a, triggering: i, alerts: r } = t;
  return /* @__PURE__ */ e(
    "button",
    {
      className: `qmb-tile qmb-tile--${s}`,
      onClick: () => n(t.id),
      type: "button",
      children: [
        /* @__PURE__ */ e("div", { className: "qmb-tile__label", children: a }),
        /* @__PURE__ */ e("div", { className: "qmb-tile__num-wrap", children: [
          /* @__PURE__ */ e("div", { className: "qmb-tile__num", children: i }),
          /* @__PURE__ */ e("div", { className: "qmb-tile__sub", children: s === "clean" ? "✓ clean" : s === "skipped" ? "n/a" : "triggering" })
        ] }),
        /* @__PURE__ */ e("div", { className: "qmb-tile__foot", children: [
          r > 0 ? /* @__PURE__ */ e("span", { className: "qmb-tile__alert", children: [
            "⚡ ",
            r
          ] }) : /* @__PURE__ */ e("span", { children: "·" }),
          /* @__PURE__ */ e("span", { className: "qmb-tile__trend qmb-tile__trend--flat", children: "→" })
        ] })
      ]
    }
  );
}
const qa = 1440 * 60 * 1e3;
function Tl(t, n) {
  if (!t) return null;
  const s = new Date(t).getTime(), a = new Date(n).getTime();
  return Math.round((s - a) / qa);
}
function Al(t) {
  if (!t) return null;
  const n = new Date(t);
  return n.setDate(n.getDate() + 92), n.toISOString().slice(0, 10);
}
function Ml(t, n) {
  if (!t?.measuresEvaluated) return [];
  const s = t.facilityDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), a = n?.signalCounts || {}, i = t.summary?.byMeasure || {}, r = {
    uti: a.ua_canary?.actionable || 0,
    catheter: a.foley_order?.actionable || 0,
    antipsychotic_long: a.antipsychotic_order?.actionable || 0,
    weight_loss: a.weight_decline_canary?.actionable || 0,
    adl_decline: a.gg_decline_canary?.actionable || 0
  };
  return t.measuresEvaluated.map((o) => {
    const c = i[o.id] || { triggering: 0, applicable: 0 }, d = r[o.id] || 0;
    let l;
    return c.triggering >= 5 ? l = "hot" : c.triggering > 0 ? l = "warn" : d > 0 ? l = "alert" : l = "clean", {
      id: o.id,
      label: Ue(o.id, o.label),
      triggering: c.triggering,
      alerts: d,
      applicable: c.applicable,
      status: l,
      _facilityDate: s
    };
  });
}
function Ue(t, n) {
  return {
    uti: "UTI",
    catheter: "Indwelling Catheter",
    falls_major_injury: "Falls w/ Major Injury",
    antipsychotic_long: "Antipsychotic (long)",
    weight_loss: "Weight Loss",
    pressure_ulcer_long: "Pressure Ulcer (long)",
    phq9_depression: "Depression (PHQ-9)",
    adl_decline: "ADL Decline",
    physical_restraints: "Physical Restraints",
    low_risk_incontinence: "Low-Risk Incontinence",
    discharge_function: "Discharge Function",
    antipsychotic_new: "Antipsychotic (new)",
    pressure_ulcer_short: "Pressure Ulcer (short)",
    influenza_vaccine: "Influenza Vaccination"
  }[t] || n || t;
}
function An(t) {
  if (!t?.patients) return [];
  const n = t.facilityDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), s = [];
  for (const a of t.patients)
    for (const i of a.measures || []) {
      if (!i.triggers) continue;
      const r = a.target?.ardDate || null, o = !!i.clearGuidance?.clearsOnNextObra, c = i.clearGuidance?.clearDate || null, d = c || (o ? Al(r) : null), l = d ? Tl(d, n) : null, p = l == null ? "stable" : l < 0 ? "overdue" : l <= 7 ? "soon" : "later";
      s.push({
        patientId: a.patientId,
        externalPatientId: a.externalPatientId,
        name: Ba(a),
        targetType: a.target?.type || "—",
        ardDate: r,
        measureId: i.id,
        measureLabel: Ue(i.id, i.label),
        clearDate: d,
        clearDateIsEstimate: !c && o,
        daysUntilClear: l,
        clearActionType: i.clearGuidance?.actionType || "none",
        clearsOnNextObra: o,
        clearActions: i.clearGuidance?.actions || [],
        evidence: i.evidence || [],
        urgency: p
      });
    }
  return s;
}
function Oa(t, { includeSuppressed: n = !1 } = {}) {
  if (!t?.patients) return [];
  const s = [];
  for (const i of t.patients)
    for (const r of [...i.events || [], ...i.canaries || []])
      !n && (r.snooze || r.suppressedByExistingCoding) || s.push({
        patientId: i.patientId,
        externalPatientId: i.externalPatientId,
        name: Ba(i),
        alertId: r.id,
        category: r.category,
        label: r.label,
        qmId: r.qmId,
        urgency: r.urgency,
        latestSignalDate: r.latestSignalDate,
        suggestedAction: r.suggestedAction,
        signals: r.signals || [],
        snooze: r.snooze || null,
        suppressedByExistingCoding: !!r.suppressedByExistingCoding
      });
  const a = { high: 0, medium: 1, low: 2 };
  return s.sort(
    (i, r) => (a[i.urgency] ?? 9) - (a[r.urgency] ?? 9) || (r.latestSignalDate || "").localeCompare(i.latestSignalDate || "")
  ), s;
}
function Ba(t) {
  return `${t.lastName || ""}, ${t.firstName || ""}`.replace(/^, |, $/g, "").trim() || "—";
}
const Ll = {
  GG0170B: "Sit to Lying",
  GG0170D: "Sit to Stand",
  GG0170F: "Toilet Transfer",
  GG0130A: "Eating",
  GG0170I: "Walk 10 Feet",
  GG0170J: "Walk 50 Feet",
  GG0170K: "Walk 150 Feet"
};
function El(t) {
  return t && t.replace(/[1-9]$/, "");
}
function Ha(t, n) {
  if (!n || n.length === 0) return null;
  if (t === "adl_decline") {
    const a = /* @__PURE__ */ new Map();
    for (const r of n) {
      const o = El(r.mdsItem);
      a.has(o) || a.set(o, { target: null, prior: null, name: Ll[o] || o });
      const c = /^Target\b/i.test(r.note || ""), d = /^Prior\b/i.test(r.note || ""), l = parseInt(r.value, 10);
      c ? a.get(o).target = l : d && (a.get(o).prior = l);
    }
    const i = [];
    for (const [, r] of a)
      r.target != null && r.prior != null && r.target !== r.prior && i.push(`${r.name} ${r.prior} → ${r.target}`);
    return i.length ? i.join(" · ") : null;
  }
  const s = n.find((a) => /target/i.test(a.note || "")) || n[0];
  return s?.note && !/^Prior/i.test(s.note) ? s.note : null;
}
function Mn(t) {
  if (!t) return "";
  if (t.source === "vitals") {
    const n = /([0-9.]+)\s*lb.*?vs\s*([0-9.]+)\s*lb.*?on\s*(\d{4}-\d{2}-\d{2})/i.exec(t.text || "");
    if (n) {
      const s = parseFloat(n[1]), a = parseFloat(n[2]), i = new Date(n[3]), r = t.date ? new Date(t.date) : /* @__PURE__ */ new Date(), o = Math.max(1, Math.round((r - i) / qa)), c = Math.abs(a - s).toFixed(1).replace(/\.0$/, ""), d = t.detail?.observedPct, l = d != null ? ` (${d.toFixed(1)}%)` : "";
      return `${s < a ? "Lost" : "Gained"} ${c} lb in ${o}d${l}`;
    }
  }
  if (t.source === "gg_decline_service" && t.detail) {
    const n = t.detail;
    if (n.name && n.baseline != null && n.worstShiftAverage != null)
      return `${n.name}: ${n.baseline} → ${n.worstShiftAverage.toFixed(1)} (${n.severity})`;
  }
  return t.text || "";
}
function fe(t) {
  if (!t) return "";
  try {
    return (/* @__PURE__ */ new Date(t + "T00:00:00")).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return t;
  }
}
function $l(t) {
  if (!t) return "";
  if (t.urgency === "overdue") return "OVERDUE";
  const n = t.daysUntilClear;
  if (n != null) {
    const s = t.clearDateIsEstimate ? "~" : "";
    return n === 0 ? "today" : n === 1 ? `${s}1d` : `${s}${n}d`;
  }
  return t.clearActionType === "stay_locked" ? "next admit" : "—";
}
function Ln(t) {
  if (!t) return null;
  if (t.urgency === "overdue") {
    const n = t.daysUntilClear != null ? Math.abs(t.daysUntilClear) : 0;
    return {
      verb: "Schedule new ARD",
      detail: n ? `${n}d past target` : "past target",
      tone: "urgent"
    };
  }
  if (t.clearActionType === "stay_locked")
    return { verb: "Clears on discharge", detail: "no action", tone: "passive" };
  if (t.clearsOnNextObra) {
    const n = t.clearDateIsEstimate, s = t.daysUntilClear;
    return { verb: "Code clean", detail: s != null ? `next ARD ${n ? "~" : ""}${s}d out` : "on next ARD", tone: "active" };
  }
  return t.clearActionType === "time" && t.daysUntilClear != null ? {
    verb: `Rolls off ${t.daysUntilClear}d`,
    detail: "no action",
    tone: "passive"
  } : t.daysUntilClear != null ? {
    verb: `Clears ${t.daysUntilClear}d`,
    detail: null,
    tone: "passive"
  } : { verb: "Review", detail: null, tone: "active" };
}
function Et(t) {
  if (!t) return null;
  const n = t.suggestedAction;
  return {
    verb: n && n.length <= 22 ? n : "Prevent",
    detail: fe(t.latestSignalDate) || null,
    tone: "alert"
  };
}
function Rl({
  triggeringRows: t,
  alerts: n,
  onRowClick: s,
  onAlertClick: a,
  onViewAllClearing: i,
  onViewAllHeadsUp: r
}) {
  const o = [...t].sort((u, m) => Cs(u) - Cs(m)), c = o.slice(0, 5), d = o.filter((u) => u.urgency === "overdue").length, l = o.filter((u) => u.urgency === "soon" || u.urgency === "overdue").length, p = n.slice(0, 5);
  return /* @__PURE__ */ e("div", { className: "qmb-rail", children: [
    /* @__PURE__ */ e("div", { className: "qmb-panel", children: [
      /* @__PURE__ */ e("div", { className: "qmb-panel__head", children: [
        /* @__PURE__ */ e("h3", { className: "qmb-panel__title", children: "Clearing soon" }),
        /* @__PURE__ */ e("span", { className: `qmb-panel__count ${d ? "qmb-panel__count--hot" : ""}`, children: [
          d ? `${d} overdue · ` : "",
          l,
          " this week"
        ] })
      ] }),
      c.length === 0 ? /* @__PURE__ */ e("div", { className: "qmb-panel__empty", children: "Nothing triggering right now." }) : c.map((u) => {
        const m = Ln(u);
        return /* @__PURE__ */ e(
          "div",
          {
            className: "qmb-qrow",
            onClick: () => s(u),
            children: [
              /* @__PURE__ */ e("span", { className: `qmb-qrow__dot qmb-qrow__dot--${u.urgency === "overdue" ? "urgent" : u.urgency === "soon" ? "soon" : "stable"}` }),
              /* @__PURE__ */ e("span", { className: "qmb-qrow__body", children: /* @__PURE__ */ e("span", { className: "qmb-qrow__name", children: [
                u.name,
                /* @__PURE__ */ e("span", { className: "qmb-qrow__qm", children: u.measureLabel })
              ] }) }),
              /* @__PURE__ */ e(Ss, { cta: m })
            ]
          },
          `${u.patientId}-${u.measureId}`
        );
      }),
      o.length > 5 && /* @__PURE__ */ e("button", { type: "button", className: "qmb-panel__foot", onClick: i, children: [
        "View all ",
        o.length,
        " ›"
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "qmb-panel", children: [
      /* @__PURE__ */ e("div", { className: "qmb-panel__head", children: [
        /* @__PURE__ */ e("h3", { className: "qmb-panel__title", children: "Heads-up" }),
        /* @__PURE__ */ e("span", { className: "qmb-panel__count qmb-panel__count--alert", children: [
          n.length,
          " incoming"
        ] })
      ] }),
      p.length === 0 ? /* @__PURE__ */ e("div", { className: "qmb-panel__empty", children: "No preventable alerts right now." }) : p.map((u) => {
        const m = Et(u);
        return /* @__PURE__ */ e(
          "div",
          {
            className: "qmb-qrow",
            onClick: () => a(u),
            children: [
              /* @__PURE__ */ e("span", { className: "qmb-qrow__dot qmb-qrow__dot--alert" }),
              /* @__PURE__ */ e("span", { className: "qmb-qrow__body", children: [
                /* @__PURE__ */ e("span", { className: "qmb-qrow__name", children: [
                  u.name,
                  u.qmId && /* @__PURE__ */ e("span", { className: "qmb-qrow__qm", children: Ue(u.qmId) })
                ] }),
                /* @__PURE__ */ e("span", { className: "qmb-qrow__meta", children: ql(u) })
              ] }),
              /* @__PURE__ */ e(Ss, { cta: m })
            ]
          },
          `${u.patientId}-${u.alertId}`
        );
      }),
      n.length > 5 && /* @__PURE__ */ e("button", { type: "button", className: "qmb-panel__foot", onClick: r, children: [
        "View all ",
        n.length,
        " ›"
      ] })
    ] })
  ] });
}
function Cs(t) {
  return t.urgency === "overdue" ? 0 : t.urgency === "soon" ? 1 + (t.daysUntilClear ?? 7) : t.urgency === "later" ? 100 + (t.daysUntilClear ?? 999) : 1e3;
}
function ql(t) {
  const n = t.signals?.[0];
  if (n) {
    const s = Mn(n);
    if (s) return s;
  }
  return t.label;
}
function Ss({ cta: t }) {
  return t ? /* @__PURE__ */ e("span", { className: `qmb-cta qmb-cta--${t.tone}`, children: [
    /* @__PURE__ */ e("span", { className: "qmb-cta__verb", children: t.verb }),
    t.detail && /* @__PURE__ */ e("span", { className: "qmb-cta__detail", children: t.detail })
  ] }) : null;
}
function Ol({
  measureId: t,
  currentlyTriggering: n,
  preventableAlerts: s,
  onBack: a,
  onRowClick: i,
  onAlertClick: r
}) {
  const c = An(n).filter((m) => m.measureId === t), d = n?.measuresEvaluated?.find((m) => m.id === t), l = Ue(t, d?.label), p = [];
  for (const m of s?.patients || [])
    for (const h of [...m.events || [], ...m.canaries || []])
      h.qmId === t && (h.snooze || h.suppressedByExistingCoding || p.push({
        patientId: m.patientId,
        name: `${m.lastName || ""}, ${m.firstName || ""}`.trim(),
        alertId: h.id,
        label: h.label,
        qmId: h.qmId,
        urgency: h.urgency,
        latestSignalDate: h.latestSignalDate,
        suggestedAction: h.suggestedAction,
        signals: h.signals || []
      }));
  const u = n?.summary?.byMeasure?.[t];
  return /* @__PURE__ */ e("div", { className: "qmb-detail", children: [
    /* @__PURE__ */ e("div", { className: "qmb-backbar", children: /* @__PURE__ */ e("div", { children: [
      /* @__PURE__ */ e("button", { type: "button", className: "qmb-backbar__btn", onClick: a, children: "‹ Back to measures" }),
      /* @__PURE__ */ e("span", { className: "qmb-backbar__title", children: l }),
      /* @__PURE__ */ e("span", { className: "qmb-backbar__sub", children: [
        u ? `${u.triggering} triggering · ${u.applicable} applicable` : "",
        p.length ? ` · ${p.length} heads-up` : ""
      ] })
    ] }) }),
    c.length === 0 ? /* @__PURE__ */ e("div", { className: "qmb-empty", children: "No currently-triggering residents." }) : /* @__PURE__ */ e("div", { className: "qmb-rows", children: c.map((m) => {
      const h = Ha(m.measureId, m.evidence), _ = Ln(m);
      return /* @__PURE__ */ e(
        "div",
        {
          className: `qmb-row qmb-row--${m.urgency === "overdue" ? "urgent" : m.urgency === "soon" ? "soon" : "stable"} ${h ? "qmb-row--with-why" : ""}`,
          onClick: () => i(m),
          children: [
            /* @__PURE__ */ e("span", { className: "qmb-row__dot" }),
            /* @__PURE__ */ e("span", { className: "qmb-row__name", children: m.name }),
            /* @__PURE__ */ e("span", { className: "qmb-row__meta", children: [
              Bl(m.targetType),
              m.ardDate && /* @__PURE__ */ e("span", { className: "qmb-row__sep", children: "·" }),
              m.ardDate && /* @__PURE__ */ e("span", { children: [
                "ARD ",
                fe(m.ardDate)
              ] })
            ] }),
            /* @__PURE__ */ e(xs, { cta: _ }),
            h && /* @__PURE__ */ e("span", { className: "qmb-row__why", children: [
              /* @__PURE__ */ e("span", { className: "qmb-row__why-arrow", children: "↘" }),
              " ",
              h
            ] })
          ]
        },
        `${m.patientId}-${m.measureId}`
      );
    }) }),
    p.length > 0 && /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("div", { className: "qmb-slabel", style: { marginTop: 20 }, children: [
        /* @__PURE__ */ e("span", { children: "Heads-up on this measure" }),
        /* @__PURE__ */ e("span", { className: "qmb-slabel__meta", children: [
          p.length,
          " incoming signal",
          p.length === 1 ? "" : "s"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "qmb-rows", children: p.map((m) => {
        const h = Et(m);
        return /* @__PURE__ */ e(
          "div",
          {
            className: "qmb-row qmb-row--alert",
            onClick: () => r(m),
            children: [
              /* @__PURE__ */ e("span", { className: "qmb-row__dot qmb-row__dot--alert" }),
              /* @__PURE__ */ e("span", { className: "qmb-row__name", children: m.name }),
              /* @__PURE__ */ e("span", { className: "qmb-row__meta", children: Mn(m.signals?.[0]) || m.label }),
              /* @__PURE__ */ e(xs, { cta: h })
            ]
          },
          `${m.patientId}-${m.alertId}`
        );
      }) })
    ] })
  ] });
}
function Bl(t) {
  return t ? t.replace(/[\s/]+$/, "").trim() : "";
}
function xs({ cta: t }) {
  return t ? /* @__PURE__ */ e("span", { className: `qmb-row__cta qmb-row__cta--${t.tone}`, children: [
    /* @__PURE__ */ e("span", { className: "qmb-row__cta-verb", children: t.verb }),
    t.detail && /* @__PURE__ */ e("span", { className: "qmb-row__cta-detail", children: t.detail })
  ] }) : null;
}
function Hl({ patientId: t, facilityName: n, orgSlug: s, days: a = 30, mode: i = "qm", enabled: r = !0 }) {
  const [o, c] = v(null), [d, l] = v(r), [p, u] = v(null), m = F(() => {
    if (!r) return () => {
    };
    if (!t || !n || !s)
      return l(!1), u("Missing patient, facility, or org context"), () => {
      };
    let h = !1;
    l(!0), u(null);
    const _ = new URLSearchParams({
      facilityName: n,
      orgSlug: s,
      days: String(a),
      mode: i
    });
    return chrome.runtime.sendMessage({
      type: "API_REQUEST",
      endpoint: `/api/extension/patients/${t}/gg-decline?${_}`,
      options: { method: "GET" }
    }).then((g) => {
      if (!h) {
        if (!g?.success) throw new Error(g?.error || "Failed to load GG detail");
        c(Xe(g.data));
      }
    }).catch((g) => {
      h || (console.error("[QMBoard] gg-decline fetch failed", g), u(g.message || "Failed to load"));
    }).finally(() => {
      h || l(!1);
    }), () => {
      h = !0;
    };
  }, [t, n, s, a, i, r]);
  return G(() => {
    let h = m();
    const _ = () => {
      h && h(), h = m();
    };
    return window.addEventListener("super:qm-snooze-changed", _), () => {
      window.removeEventListener("super:qm-snooze-changed", _), h && h();
    };
  }, [m]), { data: o, loading: d, error: p };
}
function Fl({ facilityName: t, orgSlug: n }) {
  const [s, a] = v(!1), [i, r] = v(null), o = new URLSearchParams({ facilityName: t, orgSlug: n }).toString(), c = F(async (m, h, _) => {
    a(!0), r(null);
    try {
      const g = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: m,
        options: {
          method: h,
          headers: _ ? { "Content-Type": "application/json" } : void 0,
          body: _ ? JSON.stringify(_) : void 0
        }
      });
      if (!g?.success) throw new Error(g?.error || "Request failed");
      return window.dispatchEvent(new CustomEvent("super:qm-snooze-changed")), Xe(g.data);
    } catch (g) {
      throw console.error("[QMBoard] snooze mutation failed", g), r(g.message || "Mutation failed"), g;
    } finally {
      a(!1);
    }
  }, [o]), d = F((m, h, _) => c(
    `/api/extension/patients/${m}/gg-decline/snooze?${o}`,
    "POST",
    { days: h, reason: _ }
  ), [c, o]), l = F((m, h) => c(
    `/api/extension/patients/${m}/gg-decline/snooze/${h}?${o}`,
    "DELETE",
    null
  ), [c, o]), p = F((m, h, _, g) => c(
    `/api/extension/patients/${m}/preventable-alert-snooze?${o}`,
    "POST",
    { alertId: h, days: _, reason: g }
  ), [c, o]), u = F((m, h) => c(
    `/api/extension/patients/${m}/preventable-alert-snooze/${h}?${o}`,
    "DELETE",
    null
  ), [c, o]);
  return { snoozeGg: d, unsnoozeGg: l, snoozeAlert: p, unsnoozeAlert: u, pending: s, error: i };
}
const Gl = [
  { v: 6, short: "Indep" },
  { v: 5, short: "Setup" },
  { v: 4, short: "Supv" },
  { v: 3, short: "Mod" },
  { v: 2, short: "Max" },
  { v: 1, short: "Dep" }
], Fa = {
  6: "Independent",
  5: "Setup/clean-up",
  4: "Supervision",
  3: "Moderate",
  2: "Maximal",
  1: "Dependent"
}, Ul = {
  severe: "qmb-chart-card__badge--severe",
  moderate: "qmb-chart-card__badge--moderate",
  mild: "qmb-chart-card__badge--mild"
};
function Vl({ item: t, points: n, shiftColor: s = "#3b82f6" }) {
  const [u, m] = v(null), h = ee(null), _ = t.declineMagnitude && t.declineMagnitude >= 1, g = _ ? `↘ ${t.declineMagnitude.toFixed(t.declineMagnitude % 1 === 0 ? 0 : 1)}-pt` : "Stable", f = _ ? Ul[t.severity] || "qmb-chart-card__badge--mild" : "qmb-chart-card__badge--stable", b = t.baseline != null ? `${Fa[t.baseline] || "—"} (${String(t.baseline).padStart(2, "0")})` : "Not in MDS", y = (w) => 176 - (w - 1) / 5 * 162, I = n.length, D = (w) => I <= 1 ? 52 + 454 / 2 : 52 + w / (I - 1) * 454, k = I > 0, T = k ? n.map((w, O) => `${O ? "L" : "M"}${D(O).toFixed(1)} ${y(w.value).toFixed(1)}`).join(" ") : "", A = n[0]?.date || "", x = n[n.length - 1]?.date || "", C = u ? n[u.i] : null, S = u && u.x > 520 * 0.62;
  return /* @__PURE__ */ e("div", { className: "qmb-chart-card", children: [
    /* @__PURE__ */ e("div", { className: "qmb-chart-card__head", children: [
      /* @__PURE__ */ e("div", { className: "qmb-chart-card__title-group", children: [
        /* @__PURE__ */ e("h4", { className: "qmb-chart-card__title", children: t.name }),
        t.baseline != null && /* @__PURE__ */ e("div", { className: "qmb-chart-card__sub", children: [
          "Baseline: ",
          /* @__PURE__ */ e("b", { children: b }),
          _ && t.worstShiftAverage != null && /* @__PURE__ */ e(K, { children: [
            " → Worst avg: ",
            /* @__PURE__ */ e("b", { style: { color: "#b91c1c" }, children: t.worstShiftAverage.toFixed(1) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("span", { className: `qmb-chart-card__badge ${f}`, children: g })
    ] }),
    /* @__PURE__ */ e("div", { className: "qmb-chart-card__svg-wrap", children: [
      /* @__PURE__ */ e(
        "svg",
        {
          ref: h,
          className: "qmb-chart-card__svg",
          viewBox: "0 0 520 200",
          preserveAspectRatio: "xMidYMid meet",
          onMouseLeave: () => m(null),
          children: [
            Gl.map(({ v: w, short: O }) => /* @__PURE__ */ e("g", { children: [
              /* @__PURE__ */ e(
                "line",
                {
                  x1: 52,
                  y1: y(w),
                  x2: 506,
                  y2: y(w),
                  stroke: "#f3f4f6",
                  strokeWidth: "1",
                  strokeDasharray: "2 3"
                }
              ),
              /* @__PURE__ */ e("text", { x: 44, y: y(w) + 4, fontSize: "11", fill: "#9ca3af", textAnchor: "end", children: O })
            ] }, w)),
            t.baseline != null && /* @__PURE__ */ e("g", { children: [
              /* @__PURE__ */ e(
                "line",
                {
                  x1: 52,
                  y1: y(t.baseline),
                  x2: 506,
                  y2: y(t.baseline),
                  stroke: "#6366f1",
                  strokeWidth: "1.5",
                  strokeDasharray: "6 4",
                  opacity: "0.9"
                }
              ),
              /* @__PURE__ */ e(
                "text",
                {
                  x: 502,
                  y: y(t.baseline) + 14,
                  fontSize: "10",
                  fill: "#6366f1",
                  textAnchor: "end",
                  fontWeight: "600",
                  children: "Baseline"
                }
              )
            ] }),
            k && /* @__PURE__ */ e(K, { children: [
              /* @__PURE__ */ e("path", { d: T, fill: "none", stroke: s, strokeWidth: "2" }),
              n.map((w, O) => /* @__PURE__ */ e("g", { children: [
                /* @__PURE__ */ e(
                  "circle",
                  {
                    cx: D(O),
                    cy: y(w.value),
                    r: u?.i === O ? 5 : 3.5,
                    fill: s,
                    stroke: "#fff",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ e(
                  "circle",
                  {
                    cx: D(O),
                    cy: y(w.value),
                    r: "14",
                    fill: "transparent",
                    onMouseEnter: () => m({ i: O, x: D(O), y: y(w.value) }),
                    style: { cursor: "pointer" }
                  }
                )
              ] }, `${w.date}-${O}`))
            ] }),
            u && /* @__PURE__ */ e(
              "line",
              {
                x1: u.x,
                y1: 14,
                x2: u.x,
                y2: 176,
                stroke: "#9ca3af",
                strokeWidth: "1",
                strokeDasharray: "3 3",
                opacity: "0.5"
              }
            ),
            A && /* @__PURE__ */ e("text", { x: 52, y: 194, fontSize: "10", fill: "#9ca3af", children: Vt(A) }),
            x && x !== A && /* @__PURE__ */ e("text", { x: 506, y: 194, fontSize: "10", fill: "#9ca3af", textAnchor: "end", children: Vt(x) }),
            !k && /* @__PURE__ */ e(
              "text",
              {
                x: 52 + 454 / 2,
                y: 14 + 162 / 2,
                fontSize: "12",
                fill: "#9ca3af",
                textAnchor: "middle",
                fontStyle: "italic",
                children: "No scores in window"
              }
            )
          ]
        }
      ),
      C && /* @__PURE__ */ e(
        "div",
        {
          className: "qmb-chart-tooltip",
          style: {
            left: `${u.x / 520 * 100}%`,
            top: `${u.y / 200 * 100}%`,
            transform: S ? "translate(-100%, -50%) translateX(-10px)" : "translate(0, -50%) translateX(10px)"
          },
          children: [
            /* @__PURE__ */ e("div", { className: "qmb-chart-tooltip__date", children: Vt(C.date) }),
            C.entries && C.entries.length > 0 ? C.entries.map((w, O) => /* @__PURE__ */ e("div", { className: "qmb-chart-tooltip__row", children: [
              /* @__PURE__ */ e("span", { className: "qmb-chart-tooltip__dot", style: { background: w.shiftColor || s } }),
              /* @__PURE__ */ e("span", { className: "qmb-chart-tooltip__shift", children: [
                w.shift || "—",
                ":"
              ] }),
              /* @__PURE__ */ e("span", { className: "qmb-chart-tooltip__label", children: [
                /* @__PURE__ */ e("b", { children: w.label }),
                " ",
                /* @__PURE__ */ e("span", { style: { color: "#9ca3af" }, children: [
                  "(",
                  w.value,
                  ")"
                ] })
              ] }),
              w.aideName && /* @__PURE__ */ e("span", { className: "qmb-chart-tooltip__aide", children: [
                "— ",
                w.aideName
              ] })
            ] }, O)) : /* @__PURE__ */ e("div", { className: "qmb-chart-tooltip__row", children: [
              /* @__PURE__ */ e("span", { className: "qmb-chart-tooltip__dot", style: { background: s } }),
              /* @__PURE__ */ e("span", { className: "qmb-chart-tooltip__label", children: [
                /* @__PURE__ */ e("b", { children: zl(C.value) }),
                " (",
                C.value.toFixed(1),
                ")"
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
function Vt(t) {
  if (!t) return "";
  const [, n, s] = t.split("-");
  return !n || !s ? t : `${Number(n)}/${Number(s)}`;
}
function zl(t) {
  if (t == null) return "—";
  const n = Math.round(t);
  return Fa[n] || "—";
}
const pn = [
  { key: "day", idx: 0, label: "Day", color: "#3b82f6" },
  { key: "evening", idx: 1, label: "Evening", color: "#22c55e" },
  { key: "night", idx: 2, label: "Night", color: "#a855f7" },
  { key: "average", idx: null, label: "Average", color: "#475569" }
], Ga = {
  "01": "Dependent",
  "02": "Maximal",
  "03": "Moderate",
  "04": "Supervision",
  "05": "Setup",
  "06": "Independent",
  "07": "Refused",
  "09": "N/A",
  10: "Env. limit",
  88: "Medical reason"
}, Ua = { 0: "Day", 1: "Evening", 2: "Night" }, Wl = { 0: "#3b82f6", 1: "#22c55e", 2: "#a855f7" }, Ql = {
  severe: "qmb-pill qmb-pill--severe",
  moderate: "qmb-pill qmb-pill--moderate",
  mild: "qmb-pill qmb-pill--mild"
};
function jl({ alert: t, facilityName: n, orgSlug: s, onBack: a }) {
  const { data: i, loading: r, error: o } = Hl({
    patientId: t.patientId,
    facilityName: n,
    orgSlug: s,
    days: 30,
    mode: "qm",
    enabled: !0
  });
  return r ? /* @__PURE__ */ e("div", { className: "qmb-detail", children: [
    /* @__PURE__ */ e(zt, { alert: t, onBack: a }),
    /* @__PURE__ */ e("div", { className: "qmb-empty", children: "Loading GG history…" })
  ] }) : o ? /* @__PURE__ */ e("div", { className: "qmb-detail", children: [
    /* @__PURE__ */ e(zt, { alert: t, onBack: a }),
    /* @__PURE__ */ e("div", { className: "qmb-empty qmb-empty--error", children: [
      "Failed to load: ",
      o
    ] })
  ] }) : i?.decline ? /* @__PURE__ */ e(
    Kl,
    {
      alert: t,
      gg: i,
      facilityName: n,
      orgSlug: s,
      onBack: a
    }
  ) : /* @__PURE__ */ e("div", { className: "qmb-detail", children: [
    /* @__PURE__ */ e(zt, { alert: t, onBack: a }),
    /* @__PURE__ */ e("div", { className: "qmb-empty", children: "No GG decline data for this resident." })
  ] });
}
function Kl({ alert: t, gg: n, facilityName: s, orgSlug: a, onBack: i }) {
  const [r, o] = v("average"), [c, d] = v("charts"), [l, p] = v(!1), u = n.decline, m = n.scores || [], h = Z(() => {
    const y = /* @__PURE__ */ new Map();
    for (const I of u.baselines || [])
      y.set(I.mdsKey, { mdsKey: I.mdsKey, name: I.name, baseline: I.value, rawValue: I.rawValue });
    for (const I of u.declines || []) {
      const D = y.get(I.mdsKey) || { mdsKey: I.mdsKey, name: I.name };
      y.set(I.mdsKey, {
        ...D,
        baseline: D.baseline ?? I.baseline,
        worstShiftAverage: I.worstShiftAverage,
        declineMagnitude: I.declineMagnitude,
        severity: I.severity
      });
    }
    for (const I of m)
      I.mdsQuestionKey && (y.has(I.mdsQuestionKey) || y.set(I.mdsQuestionKey, {
        mdsKey: I.mdsQuestionKey,
        name: I.interventionName || I.mdsQuestionKey
      }));
    return [...y.values()];
  }, [u, m]), _ = Z(
    () => Zl(m, h, r),
    [m, h, r]
  ), g = pn.find((y) => y.key === r)?.color || "#3b82f6", f = u.overallSeverity, b = f ? Ql[f] || "qmb-pill" : null;
  return /* @__PURE__ */ e("div", { className: "qmb-detail", children: [
    /* @__PURE__ */ e("div", { className: "qmb-backbar", children: [
      /* @__PURE__ */ e("div", { className: "qmb-backbar__left", children: [
        /* @__PURE__ */ e("button", { type: "button", className: "qmb-backbar__btn", onClick: i, children: "‹ Back" }),
        /* @__PURE__ */ e("span", { className: "qmb-backbar__title", children: t.name }),
        f && /* @__PURE__ */ e("span", { className: b, children: f }),
        /* @__PURE__ */ e("div", { className: "qmb-backbar__subline", children: [
          /* @__PURE__ */ e("span", { children: u.locationName }),
          u.mdsArdDate && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "qmb-baselines-toggle",
              onClick: () => p((y) => !y),
              children: [
                "· MDS Baseline: ",
                /* @__PURE__ */ e("u", { children: u.mdsArdDate }),
                " ",
                /* @__PURE__ */ e("span", { children: l ? "▴" : "▾" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e(
        Va,
        {
          patientId: t.patientId,
          snooze: n.snooze,
          kind: "gg",
          facilityName: s,
          orgSlug: a
        }
      )
    ] }),
    l && /* @__PURE__ */ e(Yl, { baselines: u.baselines }),
    /* @__PURE__ */ e("div", { className: "qmb-item-pills", children: h.map((y) => {
      const I = (u.declines || []).find((k) => k.mdsKey === y.mdsKey), D = I && I.declineMagnitude >= 1;
      return /* @__PURE__ */ e(
        "span",
        {
          className: `qmb-item-pill ${D ? `qmb-item-pill--${I.severity || "declined"}` : ""}`,
          children: [
            y.name,
            D && /* @__PURE__ */ e("span", { className: "qmb-item-pill__delta", children: [
              "↘ ",
              I.declineMagnitude.toFixed(I.declineMagnitude % 1 === 0 ? 0 : 1),
              "pt"
            ] })
          ]
        },
        y.mdsKey
      );
    }) }),
    /* @__PURE__ */ e("div", { className: "qmb-view-controls", children: [
      /* @__PURE__ */ e("div", { className: "qmb-seg", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `qmb-seg__btn ${c === "charts" ? "is-active" : ""}`,
            onClick: () => d("charts"),
            children: "📊 Charts"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: `qmb-seg__btn ${c === "table" ? "is-active" : ""}`,
            onClick: () => d("table"),
            children: "≡ Table"
          }
        )
      ] }),
      c === "charts" && /* @__PURE__ */ e("div", { className: "qmb-seg", children: pn.map((y) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: `qmb-seg__btn ${r === y.key ? "is-active" : ""}`,
          onClick: () => o(y.key),
          style: r === y.key ? { "--active-color": y.color } : void 0,
          children: y.label
        },
        y.key
      )) })
    ] }),
    c === "charts" ? /* @__PURE__ */ e("div", { className: "qmb-chart-grid", children: h.map((y) => /* @__PURE__ */ e(
      Vl,
      {
        item: y,
        points: _.get(y.mdsKey) || [],
        shiftColor: g
      },
      y.mdsKey
    )) }) : /* @__PURE__ */ e(Jl, { scores: m })
  ] });
}
function zt({ alert: t, onBack: n }) {
  return /* @__PURE__ */ e("div", { className: "qmb-backbar", children: /* @__PURE__ */ e("div", { children: [
    /* @__PURE__ */ e("button", { type: "button", className: "qmb-backbar__btn", onClick: n, children: "‹ Back" }),
    /* @__PURE__ */ e("span", { className: "qmb-backbar__title", children: t.name })
  ] }) });
}
function Yl({ baselines: t }) {
  return !t || !t.length ? null : /* @__PURE__ */ e("div", { className: "qmb-baselines", children: t.map((n) => /* @__PURE__ */ e("div", { className: "qmb-baseline-card", children: [
    /* @__PURE__ */ e("div", { className: "qmb-baseline-card__top", children: [
      /* @__PURE__ */ e("span", { className: "qmb-baseline-card__name", children: n.name }),
      /* @__PURE__ */ e("span", { className: "qmb-baseline-card__key", children: n.mdsKey })
    ] }),
    /* @__PURE__ */ e("div", { className: "qmb-baseline-card__val", children: n.value == null ? /* @__PURE__ */ e("i", { children: "Not in MDS" }) : /* @__PURE__ */ e("b", { children: n.rawValue || n.value }) })
  ] }, n.mdsKey)) });
}
function Va({ patientId: t, snooze: n, kind: s, alertId: a, facilityName: i, orgSlug: r }) {
  const [o, c] = v(!1), { snoozeGg: d, unsnoozeGg: l, snoozeAlert: p, unsnoozeAlert: u, pending: m } = Fl({ facilityName: i, orgSlug: r });
  if (n) {
    const _ = n.snoozedUntil ? new Date(n.snoozedUntil).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "qmb-snooze-btn qmb-snooze-btn--active",
        onClick: async () => {
          try {
            s === "gg" ? await l(t, n.id) : await u(t, n.id);
          } catch {
          }
        },
        disabled: m,
        children: [
          "🕒 Unsnooze ",
          _ && /* @__PURE__ */ e("span", { className: "qmb-snooze-btn__meta", children: [
            "· until ",
            _
          ] })
        ]
      }
    );
  }
  const h = async (_) => {
    try {
      s === "gg" ? await d(t, _, null) : await p(t, a, _, null);
    } catch {
    }
    c(!1);
  };
  return /* @__PURE__ */ e("div", { className: "qmb-snooze-wrap", children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "qmb-snooze-btn",
        onClick: () => c((_) => !_),
        disabled: m,
        children: [
          "🕒 Snooze ",
          o ? "▴" : "▾"
        ]
      }
    ),
    o && /* @__PURE__ */ e("div", { className: "qmb-snooze-menu", children: [
      /* @__PURE__ */ e("button", { type: "button", onClick: () => h(1), children: "1 day" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: () => h(7), children: "7 days" }),
      /* @__PURE__ */ e("button", { type: "button", onClick: () => h(30), children: "30 days" })
    ] })
  ] });
}
function Jl({ scores: t }) {
  const n = [...t].sort((s, a) => {
    const i = (a.recordedDate || "").localeCompare(s.recordedDate || "");
    return i !== 0 ? i : (s.shiftIndex || 0) - (a.shiftIndex || 0);
  });
  return /* @__PURE__ */ e("table", { className: "qmb-scores-table", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: [
      /* @__PURE__ */ e("th", { children: "Date" }),
      /* @__PURE__ */ e("th", { children: "Shift" }),
      /* @__PURE__ */ e("th", { children: "Item" }),
      /* @__PURE__ */ e("th", { children: "Score" }),
      /* @__PURE__ */ e("th", { children: "Aide" })
    ] }) }),
    /* @__PURE__ */ e("tbody", { children: [
      n.map((s) => /* @__PURE__ */ e("tr", { children: [
        /* @__PURE__ */ e("td", { className: "qmb-mono", children: fe(s.recordedDate) }),
        /* @__PURE__ */ e("td", { children: Ua[s.shiftIndex] || "—" }),
        /* @__PURE__ */ e("td", { children: s.interventionName || s.mdsQuestionKey }),
        /* @__PURE__ */ e("td", { children: [
          /* @__PURE__ */ e("b", { children: Ga[s.loggedValue] || "—" }),
          /* @__PURE__ */ e("span", { className: "qmb-mono", style: { marginLeft: 6, color: "#9ca3af" }, children: [
            "(",
            s.loggedValue,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ e("td", { children: s.aideName || "—" })
      ] }, s.id || `${s.patientId}-${s.recordedDate}-${s.shiftIndex}-${s.mdsQuestionKey}`)),
      n.length === 0 && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: 5, style: { textAlign: "center", padding: "24px", color: "#9ca3af", fontStyle: "italic" }, children: "No raw scores in window." }) })
    ] })
  ] });
}
function Zl(t, n, s) {
  const a = /* @__PURE__ */ new Map(), i = s === "average" ? null : pn.find((r) => r.key === s)?.idx;
  for (const r of n) {
    const o = t.filter((l) => l.mdsQuestionKey === r.mdsKey), c = /* @__PURE__ */ new Map();
    for (const l of o) {
      const p = parseInt(l.loggedValue, 10);
      if (!(p >= 1 && p <= 6) || i != null && l.shiftIndex !== i) continue;
      const u = l.recordedDate;
      c.has(u) || c.set(u, { values: [], entries: [] });
      const m = c.get(u);
      m.values.push(p), m.entries.push({
        shift: Ua[l.shiftIndex] || "—",
        shiftColor: Wl[l.shiftIndex] || "#64748b",
        value: p,
        label: Ga[l.loggedValue] || "—",
        aideName: l.aideName || null
      });
    }
    const d = [...c.entries()].map(([l, p]) => ({
      date: l,
      value: p.values.reduce((u, m) => u + m, 0) / p.values.length,
      entries: p.entries
    })).sort((l, p) => l.date.localeCompare(p.date));
    a.set(r.mdsKey, d);
  }
  return a;
}
function Xl({ alert: t, facilityName: n, orgSlug: s, onBack: a }) {
  return t.alertId === "gg_decline_canary" ? /* @__PURE__ */ e(
    jl,
    {
      alert: t,
      facilityName: n,
      orgSlug: s,
      onBack: a
    }
  ) : /* @__PURE__ */ e(
    td,
    {
      alert: t,
      facilityName: n,
      orgSlug: s,
      onBack: a
    }
  );
}
const ed = {
  high: "qmb-pill qmb-pill--high",
  medium: "qmb-pill qmb-pill--medium",
  low: "qmb-pill qmb-pill--low"
};
function td({ alert: t, facilityName: n, orgSlug: s, onBack: a }) {
  const i = t.urgency ? ed[t.urgency] || "qmb-pill" : null;
  return /* @__PURE__ */ e("div", { className: "qmb-detail", children: [
    /* @__PURE__ */ e("div", { className: "qmb-backbar", children: [
      /* @__PURE__ */ e("div", { className: "qmb-backbar__left", children: [
        /* @__PURE__ */ e("button", { type: "button", className: "qmb-backbar__btn", onClick: a, children: "‹ Back" }),
        /* @__PURE__ */ e("span", { className: "qmb-backbar__title", children: t.name }),
        t.urgency && /* @__PURE__ */ e("span", { className: i, children: t.urgency }),
        /* @__PURE__ */ e("div", { className: "qmb-backbar__subline", children: [
          /* @__PURE__ */ e("span", { children: t.label }),
          t.qmId && /* @__PURE__ */ e("span", { className: "qmb-pill qmb-pill--alert", children: Ue(t.qmId) })
        ] })
      ] }),
      t.alertId !== "gg_decline_canary" && /* @__PURE__ */ e(
        Va,
        {
          patientId: t.patientId,
          snooze: t.snooze,
          kind: "alert",
          alertId: t.alertId,
          facilityName: n,
          orgSlug: s
        }
      )
    ] }),
    t.suggestedAction && /* @__PURE__ */ e("p", { className: "qmb-detail__summary", children: t.suggestedAction }),
    /* @__PURE__ */ e(
      nd,
      {
        signals: t.signals,
        patientId: t.patientId,
        facilityName: n,
        orgSlug: s
      }
    )
  ] });
}
function nd({ signals: t, patientId: n, facilityName: s, orgSlug: a }) {
  return !t || t.length === 0 ? /* @__PURE__ */ e("div", { className: "qmb-empty", children: "No signals on this alert." }) : /* @__PURE__ */ e("div", { className: "qmb-signals", children: [
    /* @__PURE__ */ e("div", { className: "qmb-slabel", children: [
      /* @__PURE__ */ e("span", { children: "Signals" }),
      /* @__PURE__ */ e("span", { className: "qmb-slabel__meta", children: [
        t.length,
        " total"
      ] })
    ] }),
    t.map((i, r) => /* @__PURE__ */ e(
      sd,
      {
        signal: i,
        patientId: n,
        facilityName: s,
        orgSlug: a
      },
      `${i.source}-${i.refId || r}-${i.date}`
    ))
  ] });
}
function sd({ signal: t, patientId: n, facilityName: s, orgSlug: a }) {
  const [i, r] = v(!1), o = ad(t);
  return /* @__PURE__ */ e("div", { className: "qmb-signal-wrap", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `qmb-signal ${o ? "qmb-signal--clickable" : ""}`,
        onClick: o ? () => {
          if (t.source === "note" && t.refId) {
            typeof window.showClinicalNoteModal == "function" ? window.showClinicalNoteModal(t.refId) : r((d) => !d);
            return;
          }
          if (t.source === "order" && t.refId) {
            r((d) => !d);
            return;
          }
        } : void 0,
        children: [
          /* @__PURE__ */ e("span", { className: "qmb-signal__date", children: fe(t.date) }),
          /* @__PURE__ */ e("span", { className: "qmb-signal__src", children: t.source }),
          /* @__PURE__ */ e("span", { className: "qmb-signal__text", children: t.text }),
          o && /* @__PURE__ */ e("span", { className: "qmb-signal__cta", children: t.source === "note" ? "open note ›" : "view ›" })
        ]
      }
    ),
    i && t.source === "order" && t.refId && /* @__PURE__ */ e(
      id,
      {
        patientId: n,
        orderId: t.refId,
        facilityName: s,
        orgSlug: a
      }
    )
  ] });
}
function ad(t) {
  return t.refId ? t.source === "note" || t.source === "order" : !1;
}
function id({ patientId: t, orderId: n, facilityName: s, orgSlug: a }) {
  const [i, r] = v({ loading: !0, data: null, error: null });
  if (G(() => {
    let c = !1;
    r({ loading: !0, data: null, error: null });
    const d = new URLSearchParams({
      type: "order",
      sourceId: n,
      ...s ? { facilityName: s } : {},
      ...a ? { orgSlug: a } : {}
    });
    return chrome.runtime.sendMessage({
      type: "API_REQUEST",
      endpoint: `/api/patients/${t}/evidence?${d}`,
      options: { method: "GET" }
    }).then((l) => {
      if (!c) {
        if (!l?.success) throw new Error(l?.error || "Failed to load order");
        r({ loading: !1, data: Xe(l.data), error: null });
      }
    }).catch((l) => {
      c || r({ loading: !1, data: null, error: l.message || "Failed to load" });
    }), () => {
      c = !0;
    };
  }, [t, n, s, a]), i.loading) return /* @__PURE__ */ e("div", { className: "qmb-signal-inline", children: "Loading order…" });
  if (i.error) return /* @__PURE__ */ e("div", { className: "qmb-signal-inline qmb-signal-inline--error", children: [
    "Failed to load: ",
    i.error
  ] });
  const o = i.data || {};
  return /* @__PURE__ */ e("div", { className: "qmb-signal-inline", children: [
    /* @__PURE__ */ e("div", { className: "qmb-signal-inline__grid", children: [
      o.description && /* @__PURE__ */ e(ke, { k: "Description", v: o.description }),
      o.category && /* @__PURE__ */ e(ke, { k: "Category", v: o.category }),
      o.status && /* @__PURE__ */ e(ke, { k: "Status", v: o.status }),
      o.medicationName && /* @__PURE__ */ e(ke, { k: "Medication", v: o.medicationName }),
      o.directions && /* @__PURE__ */ e(ke, { k: "Directions", v: o.directions }),
      o.startDate && /* @__PURE__ */ e(ke, { k: "Start", v: fe(o.startDate) }),
      o.endDate && /* @__PURE__ */ e(ke, { k: "End", v: fe(o.endDate) }),
      o.orderedBy && /* @__PURE__ */ e(ke, { k: "Ordered by", v: o.orderedBy }),
      o.notes && /* @__PURE__ */ e(ke, { k: "Notes", v: o.notes })
    ] }),
    Object.keys(o).length === 0 && /* @__PURE__ */ e("div", { style: { color: "#9ca3af", fontStyle: "italic" }, children: "No details returned." })
  ] });
}
function ke({ k: t, v: n }) {
  return /* @__PURE__ */ e(K, { children: [
    /* @__PURE__ */ e("dt", { children: t }),
    /* @__PURE__ */ e("dd", { children: n })
  ] });
}
const rd = {
  overdue: "qmb-pill qmb-pill--high",
  soon: "qmb-pill qmb-pill--medium",
  later: "qmb-pill qmb-pill--low",
  stable: "qmb-pill qmb-pill--low"
}, od = {
  GG0170B: "Sit to Lying",
  GG0170D: "Sit to Stand",
  GG0170F: "Toilet Transfer",
  GG0130A: "Eating",
  GG0170I: "Walk 10 Feet",
  GG0170J: "Walk 50 Feet",
  GG0170K: "Walk 150 Feet"
};
function cd({ row: t, preventableAlerts: n, onBack: s, onAlertClick: a }) {
  const i = Z(() => Ha(t.measureId, t.evidence), [t]), r = Z(() => Oa(n).filter((l) => l.patientId === t.patientId && l.qmId === t.measureId), [n, t]), o = ld(t), c = rd[t.urgency] || "qmb-pill";
  return /* @__PURE__ */ e("div", { className: "qmb-detail", children: [
    /* @__PURE__ */ e("div", { className: "qmb-backbar", children: /* @__PURE__ */ e("div", { className: "qmb-backbar__left", children: [
      /* @__PURE__ */ e("button", { type: "button", className: "qmb-backbar__btn", onClick: s, children: "‹ Back" }),
      /* @__PURE__ */ e("span", { className: "qmb-backbar__title", children: t.name }),
      /* @__PURE__ */ e("span", { className: c, children: t.urgency || "triggering" }),
      /* @__PURE__ */ e("div", { className: "qmb-backbar__subline", children: [
        /* @__PURE__ */ e("span", { className: "qmb-row__qm", style: { background: "#eef2ff", color: "#4f46e5" }, children: t.measureLabel }),
        /* @__PURE__ */ e("span", { children: bt(t.targetType) }),
        t.ardDate && /* @__PURE__ */ e(K, { children: [
          /* @__PURE__ */ e("span", { className: "qmb-row__sep", children: "·" }),
          /* @__PURE__ */ e("span", { children: [
            "ARD ",
            fe(t.ardDate)
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "qmb-trigger-summary", children: [
      /* @__PURE__ */ e("div", { className: "qmb-trigger-summary__main", children: o.headline }),
      o.sub && /* @__PURE__ */ e("div", { className: "qmb-trigger-summary__sub", children: o.sub })
    ] }),
    /* @__PURE__ */ e("div", { className: "qmb-slabel", children: [
      /* @__PURE__ */ e("span", { children: "Why it's triggering" }),
      /* @__PURE__ */ e("span", { className: "qmb-slabel__meta", children: [
        t.evidence?.length || 0,
        " evidence row",
        (t.evidence?.length || 0) === 1 ? "" : "s"
      ] })
    ] }),
    i && /* @__PURE__ */ e("div", { className: "qmb-trigger-why", children: [
      /* @__PURE__ */ e("span", { className: "qmb-row__why-arrow", children: "↘" }),
      " ",
      i
    ] }),
    /* @__PURE__ */ e(dd, { measureId: t.measureId, evidence: t.evidence || [] }),
    t.clearActions && t.clearActions.length > 0 && /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("div", { className: "qmb-slabel", style: { marginTop: 18 }, children: /* @__PURE__ */ e("span", { children: "What you can do" }) }),
      /* @__PURE__ */ e("ul", { className: "qmb-action-list", children: t.clearActions.map((d, l) => /* @__PURE__ */ e("li", { children: [
        /* @__PURE__ */ e("div", { className: "qmb-action-list__label", children: d.label }),
        d.detail && /* @__PURE__ */ e("div", { className: "qmb-action-list__detail", children: d.detail }),
        d.effectiveDate && /* @__PURE__ */ e("div", { className: "qmb-action-list__detail", children: [
          "Effective ",
          fe(d.effectiveDate)
        ] })
      ] }, l)) })
    ] }),
    r.length > 0 && /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("div", { className: "qmb-slabel", style: { marginTop: 18 }, children: [
        /* @__PURE__ */ e("span", { children: "Related heads-up" }),
        /* @__PURE__ */ e("span", { className: "qmb-slabel__meta", children: [
          r.length,
          " signal",
          r.length === 1 ? "" : "s"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "qmb-rows", children: r.map((d) => {
        const l = Et(d);
        return /* @__PURE__ */ e(
          "div",
          {
            className: "qmb-row qmb-row--alert",
            onClick: () => a(d),
            children: [
              /* @__PURE__ */ e("span", { className: "qmb-row__dot qmb-row__dot--alert" }),
              /* @__PURE__ */ e("span", { className: "qmb-row__name", children: d.label }),
              /* @__PURE__ */ e("span", { className: "qmb-row__meta", children: d.signals?.[0]?.text || "—" }),
              /* @__PURE__ */ e(ud, { cta: l })
            ]
          },
          `${d.patientId}-${d.alertId}`
        );
      }) })
    ] })
  ] });
}
function ld(t) {
  if (t.urgency === "overdue")
    return { headline: "Overdue", sub: "Target ARD has passed without clearing — schedule a new qualifying assessment." };
  const n = $l(t);
  let s = "";
  return t.clearsOnNextObra ? s = "Clears on the next qualifying OBRA with clean coding. Days above are estimated from the typical 46–165 day quarterly window." : t.clearActionType === "time" ? s = `Rolls off on ${fe(t.clearDate)} — no new assessment required, it exits the scan window automatically.` : t.clearActionType === "stay_locked" && (s = "Stay-locked — clears only on the next admission cycle."), { headline: `Clears ${n}`, sub: s };
}
function dd({ measureId: t, evidence: n }) {
  if (!n || n.length === 0)
    return /* @__PURE__ */ e("div", { className: "qmb-empty", children: "No evidence returned." });
  if (t === "adl_decline") {
    const s = /* @__PURE__ */ new Map();
    for (const a of n) {
      const i = (a.mdsItem || "").replace(/[1-9]$/, "");
      s.has(i) || s.set(i, { name: od[i] || i, target: null, prior: null, rows: [] }), s.get(i).rows.push(a);
      const r = parseInt(a.value, 10);
      /^Target/i.test(a.note || "") && (s.get(i).target = { val: r, note: a.note, ardDate: a.assessmentArdDate, type: a.assessmentType }), /^Prior/i.test(a.note || "") && (s.get(i).prior = { val: r, note: a.note, ardDate: a.assessmentArdDate, type: a.assessmentType });
    }
    return /* @__PURE__ */ e("div", { className: "qmb-evidence", children: [...s.entries()].map(([a, i]) => /* @__PURE__ */ e("div", { className: "qmb-evidence__gg", children: [
      /* @__PURE__ */ e("div", { className: "qmb-evidence__gg-title", children: [
        /* @__PURE__ */ e("b", { children: i.name }),
        /* @__PURE__ */ e("span", { className: "qmb-evidence__gg-key", children: a })
      ] }),
      /* @__PURE__ */ e("div", { className: "qmb-evidence__gg-change", children: [
        "Prior ",
        /* @__PURE__ */ e("b", { children: i.prior?.val ?? "—" }),
        " (",
        fe(i.prior?.ardDate),
        ", ",
        bt(i.prior?.type),
        ")",
        " → ",
        "Target ",
        /* @__PURE__ */ e("b", { style: { color: "#b91c1c" }, children: i.target?.val ?? "—" }),
        " (",
        fe(i.target?.ardDate),
        ", ",
        bt(i.target?.type),
        ")"
      ] })
    ] }, a)) });
  }
  return /* @__PURE__ */ e("div", { className: "qmb-evidence", children: n.map((s, a) => /* @__PURE__ */ e("div", { className: "qmb-evidence__row", children: [
    /* @__PURE__ */ e("span", { className: "qmb-mono qmb-evidence__item", children: s.mdsItem || "—" }),
    /* @__PURE__ */ e("span", { className: "qmb-evidence__val", children: [
      /* @__PURE__ */ e("b", { children: s.value ?? "—" }),
      s.assessmentArdDate && /* @__PURE__ */ e("span", { className: "qmb-evidence__meta", children: [
        "· ARD ",
        fe(s.assessmentArdDate),
        s.assessmentType && ` · ${bt(s.assessmentType)}`
      ] })
    ] }),
    s.note && /* @__PURE__ */ e("div", { className: "qmb-evidence__note", children: s.note })
  ] }, a)) });
}
function bt(t) {
  return t ? t.replace(/[\s/]+$/, "").trim() : "";
}
function ud({ cta: t }) {
  return t ? /* @__PURE__ */ e("span", { className: `qmb-row__cta qmb-row__cta--${t.tone}`, children: [
    /* @__PURE__ */ e("span", { className: "qmb-row__cta-verb", children: t.verb }),
    t.detail && /* @__PURE__ */ e("span", { className: "qmb-row__cta-detail", children: t.detail })
  ] }) : null;
}
function pd({ currentlyTriggering: t, onBack: n, onRowClick: s }) {
  const i = [...An(t)].sort((r, o) => Ps(r) - Ps(o));
  return /* @__PURE__ */ e("div", { className: "qmb-detail", children: [
    /* @__PURE__ */ e("div", { className: "qmb-backbar", children: /* @__PURE__ */ e("div", { children: [
      /* @__PURE__ */ e("button", { type: "button", className: "qmb-backbar__btn", onClick: n, children: "‹ Back" }),
      /* @__PURE__ */ e("span", { className: "qmb-backbar__title", children: "Clearing soon" }),
      /* @__PURE__ */ e("span", { className: "qmb-backbar__sub", children: [
        i.length,
        " residents — flat list across all measures"
      ] })
    ] }) }),
    i.length === 0 ? /* @__PURE__ */ e("div", { className: "qmb-empty", children: "Nothing triggering right now." }) : /* @__PURE__ */ e("div", { className: "qmb-rows", children: i.map((r) => {
      const o = Ln(r);
      return /* @__PURE__ */ e(
        "div",
        {
          className: `qmb-row qmb-row--${r.urgency === "overdue" ? "urgent" : r.urgency === "soon" ? "soon" : "stable"}`,
          onClick: () => s(r),
          children: [
            /* @__PURE__ */ e("span", { className: "qmb-row__dot" }),
            /* @__PURE__ */ e("span", { className: "qmb-row__name", children: [
              r.name,
              /* @__PURE__ */ e("span", { className: "qmb-row__qm", children: r.measureLabel })
            ] }),
            /* @__PURE__ */ e("span", { className: "qmb-row__meta", children: r.ardDate ? `ARD ${fe(r.ardDate)}` : "—" }),
            /* @__PURE__ */ e(md, { cta: o })
          ]
        },
        `${r.patientId}-${r.measureId}`
      );
    }) })
  ] });
}
function Ps(t) {
  return t.urgency === "overdue" ? 0 : t.urgency === "soon" ? 1 + (t.daysUntilClear ?? 7) : t.urgency === "later" ? 100 + (t.daysUntilClear ?? 999) : 1e3;
}
function md({ cta: t }) {
  return t ? /* @__PURE__ */ e("span", { className: `qmb-row__cta qmb-row__cta--${t.tone}`, children: [
    /* @__PURE__ */ e("span", { className: "qmb-row__cta-verb", children: t.verb }),
    t.detail && /* @__PURE__ */ e("span", { className: "qmb-row__cta-detail", children: t.detail })
  ] }) : null;
}
function hd({ alerts: t, onBack: n, onAlertClick: s }) {
  return /* @__PURE__ */ e("div", { className: "qmb-detail", children: [
    /* @__PURE__ */ e("div", { className: "qmb-backbar", children: /* @__PURE__ */ e("div", { children: [
      /* @__PURE__ */ e("button", { type: "button", className: "qmb-backbar__btn", onClick: n, children: "‹ Back" }),
      /* @__PURE__ */ e("span", { className: "qmb-backbar__title", children: "Heads-up" }),
      /* @__PURE__ */ e("span", { className: "qmb-backbar__sub", children: [
        t.length,
        " incoming signal",
        t.length === 1 ? "" : "s"
      ] })
    ] }) }),
    t.length === 0 ? /* @__PURE__ */ e("div", { className: "qmb-empty", children: "No preventable alerts right now." }) : /* @__PURE__ */ e("div", { className: "qmb-rows", children: t.map((a) => {
      const i = Et(a);
      return /* @__PURE__ */ e(
        "div",
        {
          className: "qmb-row qmb-row--alert",
          onClick: () => s(a),
          children: [
            /* @__PURE__ */ e("span", { className: "qmb-row__dot qmb-row__dot--alert" }),
            /* @__PURE__ */ e("span", { className: "qmb-row__name", children: [
              a.name,
              a.qmId && /* @__PURE__ */ e("span", { className: "qmb-row__qm", children: Ue(a.qmId) })
            ] }),
            /* @__PURE__ */ e("span", { className: "qmb-row__meta", children: Mn(a.signals?.[0]) || a.label }),
            /* @__PURE__ */ e(_d, { cta: i })
          ]
        },
        `${a.patientId}-${a.alertId}`
      );
    }) })
  ] });
}
function _d({ cta: t }) {
  return t ? /* @__PURE__ */ e("span", { className: `qmb-row__cta qmb-row__cta--${t.tone}`, children: [
    /* @__PURE__ */ e("span", { className: "qmb-row__cta-verb", children: t.verb }),
    t.detail && /* @__PURE__ */ e("span", { className: "qmb-row__cta-detail", children: t.detail })
  ] }) : null;
}
function gd({ facilityName: t, orgSlug: n, onClose: s }) {
  const [a, i] = v([{ kind: "dashboard" }]), r = a[a.length - 1], o = F((w) => i((O) => [...O, w]), []), c = F(() => i((w) => w.length > 1 ? w.slice(0, -1) : w), []), { currentlyTriggering: d, preventableAlerts: l, loading: p, error: u, retry: m } = xl({ facilityName: t, orgSlug: n }), h = Z(
    () => Ml(d, l),
    [d, l]
  ), _ = Z(
    () => An(d),
    [d]
  ), g = Z(
    () => Oa(l),
    [l]
  ), f = _.length, b = _.filter((w) => w.urgency === "overdue").length, y = _.filter((w) => w.urgency === "soon" || w.urgency === "overdue").length, I = g.length, D = (w) => o({ kind: "measure", measureId: w }), k = (w) => o({ kind: "alert", alert: w }), T = (w) => o({ kind: "trigger", row: w }), A = () => o({ kind: "clearing" }), x = () => o({ kind: "headsup" }), C = (w) => T(w), S = r.kind === "clearing" || r.kind === "headsup" || r.kind === "alert" || r.kind === "trigger";
  return /* @__PURE__ */ e("div", { className: "qmb__overlay", role: "dialog", "aria-modal": "true", "aria-labelledby": "qmb-title", children: [
    /* @__PURE__ */ e("div", { className: "qmb__backdrop", onClick: s }),
    /* @__PURE__ */ e("div", { className: "qmb__modal", children: [
      /* @__PURE__ */ e("header", { className: "qmb__header", children: /* @__PURE__ */ e("div", { className: "qmb__title-row", children: [
        /* @__PURE__ */ e("div", { className: "qmb__title-group", children: [
          /* @__PURE__ */ e("h2", { className: "qmb__title", id: "qmb-title", children: "QM Board" }),
          t && /* @__PURE__ */ e("span", { className: "qmb__facility", children: t })
        ] }),
        /* @__PURE__ */ e("button", { type: "button", className: "qmb__close", onClick: s, "aria-label": "Close", children: /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "qmb__summary", children: [
        /* @__PURE__ */ e(ut, { num: f, label: "Triggering" }),
        /* @__PURE__ */ e(ut, { num: y, label: "Clearing ≤ 7d", tone: "soon" }),
        /* @__PURE__ */ e(ut, { num: b, label: "Overdue", tone: "urgent" }),
        /* @__PURE__ */ e(ut, { num: I, label: "Heads-up", tone: "alert" })
      ] }),
      p ? /* @__PURE__ */ e("div", { className: "qmb__loading", children: "Loading QM board…" }) : u ? /* @__PURE__ */ e("div", { className: "qmb__error", children: [
        /* @__PURE__ */ e("div", { children: "Failed to load QM data" }),
        /* @__PURE__ */ e("div", { className: "qmb__error-detail", children: u }),
        /* @__PURE__ */ e("button", { type: "button", className: "qmb__retry", onClick: m, children: "Retry" })
      ] }) : /* @__PURE__ */ e("div", { className: `qmb__body ${S ? "qmb__body--takeover" : ""}`, children: [
        /* @__PURE__ */ e("div", { className: "qmb__left", children: [
          r.kind === "dashboard" && /* @__PURE__ */ e(fd, { tiles: h, onTileClick: D }),
          r.kind === "measure" && /* @__PURE__ */ e(
            Ol,
            {
              measureId: r.measureId,
              currentlyTriggering: d,
              preventableAlerts: l,
              onBack: c,
              onRowClick: C,
              onAlertClick: k
            }
          ),
          r.kind === "clearing" && /* @__PURE__ */ e(
            pd,
            {
              currentlyTriggering: d,
              onBack: c,
              onRowClick: C
            }
          ),
          r.kind === "headsup" && /* @__PURE__ */ e(
            hd,
            {
              alerts: g,
              onBack: c,
              onAlertClick: k
            }
          ),
          r.kind === "alert" && /* @__PURE__ */ e(
            Xl,
            {
              alert: r.alert,
              facilityName: t,
              orgSlug: n,
              onBack: c
            }
          ),
          r.kind === "trigger" && /* @__PURE__ */ e(
            cd,
            {
              row: r.row,
              preventableAlerts: l,
              onBack: c,
              onAlertClick: k
            }
          )
        ] }),
        !S && /* @__PURE__ */ e("aside", { className: "qmb__right", children: /* @__PURE__ */ e(
          Rl,
          {
            triggeringRows: _,
            alerts: g,
            onRowClick: C,
            onAlertClick: k,
            onViewAllClearing: A,
            onViewAllHeadsUp: x
          }
        ) })
      ] })
    ] })
  ] });
}
function ut({ num: t, label: n, tone: s }) {
  return /* @__PURE__ */ e("div", { className: "qmb-stat", children: [
    /* @__PURE__ */ e("span", { className: `qmb-stat__num ${s ? `qmb-stat__num--${s}` : ""}`, children: t }),
    /* @__PURE__ */ e("span", { className: "qmb-stat__label", children: n })
  ] });
}
function fd({ tiles: t, onTileClick: n }) {
  return /* @__PURE__ */ e(K, { children: [
    /* @__PURE__ */ e("div", { className: "qmb-slabel", children: [
      /* @__PURE__ */ e("span", { children: "Measures" }),
      /* @__PURE__ */ e("span", { className: "qmb-slabel__meta", children: [
        t.length,
        " measures · click a tile to drill in"
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "qmb-tiles", children: t.map((s) => /* @__PURE__ */ e(Pl, { tile: s, onClick: n }, s.id)) })
  ] });
}
function Ts(t) {
  return t && typeof t == "object" && "success" in t && "data" in t ? t.data : t;
}
function za(t, n, s = {}) {
  if (!t) return "";
  const [a, i, r] = t.split("-").map(Number);
  if (!a || !i || !r) return t;
  const o = new Date(Date.UTC(a, i - 1, r, 12)), c = new Intl.DateTimeFormat("en-US", {
    weekday: s.weekday ?? "short",
    month: s.month ?? "short",
    day: "numeric",
    year: s.year ?? "numeric",
    timeZone: n || void 0
  });
  try {
    return c.format(o);
  } catch {
    return t;
  }
}
function Wa(t) {
  const n = /* @__PURE__ */ new Date();
  try {
    const s = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: t || void 0
    }).formatToParts(n), a = s.find((o) => o.type === "year")?.value, i = s.find((o) => o.type === "month")?.value, r = s.find((o) => o.type === "day")?.value;
    if (a && i && r) return `${a}-${i}-${r}`;
  } catch {
  }
  return n.toISOString().slice(0, 10);
}
function As(t, n) {
  const [s, a, i] = t.split("-").map(Number), r = new Date(Date.UTC(s, a - 1, i));
  return r.setUTCDate(r.getUTCDate() + n), `${r.getUTCFullYear()}-${String(r.getUTCMonth() + 1).padStart(2, "0")}-${String(r.getUTCDate()).padStart(2, "0")}`;
}
function yd(t, n) {
  if (!t) return null;
  if (typeof t.facilityDate == "string") return t.facilityDate;
  if (typeof t.reportDate == "string" && t.reportDate.length === 10)
    return t.reportDate;
  if (t.reportDate)
    try {
      const s = new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: n || void 0
      }).formatToParts(new Date(t.reportDate)), a = s.find((o) => o.type === "year")?.value, i = s.find((o) => o.type === "month")?.value, r = s.find((o) => o.type === "day")?.value;
      if (a && i && r) return `${a}-${i}-${r}`;
    } catch {
    }
  return null;
}
function vd({ facilityName: t, orgSlug: n, initialDate: s = null }) {
  const [a, i] = v(null), [r, o] = v([]), [c, d] = v({}), [l, p] = v(s), [u, m] = v(void 0), [h, _] = v(!1), [g, f] = v(null), [b, y] = v(!0), [I, D] = v(null), k = ee(/* @__PURE__ */ new Map()), T = F(async () => {
    if (!t || !n)
      return D("Missing facility or organization context"), y(!1), null;
    y(!0), D(null);
    try {
      const P = new URLSearchParams({ facilityName: t, orgSlug: n }), M = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/24hr-report?${P}`,
        options: { method: "GET" }
      });
      if (!M?.success) throw new Error(M?.error || "Failed to load reports list");
      const R = Ts(M.data) || {}, B = R.timezone || null, X = Array.isArray(R.reports) ? R.reports : [], W = [], q = {};
      for (const H of X) {
        const te = yd(H, B);
        te && (W.push(te), q[te] = H);
      }
      return W.sort((H, te) => H < te ? 1 : H > te ? -1 : 0), i(B), o(W), d(q), y(!1), { timezone: B, dates: W };
    } catch (P) {
      return console.error("[24HR] list fetch failed", P), D(P.message || "Failed to load 24-hour reports"), y(!1), null;
    }
  }, [t, n]), A = F(async (P) => {
    if (!P || !t || !n) return;
    const M = k.current.get(P);
    if (M !== void 0) {
      m(M), f(null), _(!1);
      return;
    }
    _(!0), f(null);
    try {
      const R = new URLSearchParams({ facilityName: t, orgSlug: n, date: P }), B = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/24hr-report?${R}`,
        options: { method: "GET" }
      });
      if (!B?.success) {
        if (B?.status === 404 || /not found/i.test(B?.error || "")) {
          k.current.set(P, null), m(null), _(!1);
          return;
        }
        throw new Error(B?.error || "Failed to load report");
      }
      const W = (Ts(B.data) || {}).report || null;
      k.current.set(P, W), m(W);
    } catch (R) {
      console.error("[24HR] day fetch failed", R), f(R.message || "Failed to load report"), m(void 0);
    } finally {
      _(!1);
    }
  }, [t, n]);
  G(() => {
    let P = !1;
    return (async () => {
      const M = await T();
      if (P || !M) return;
      const { timezone: R, dates: B } = M, X = s || B[0] || Wa(R);
      p(X);
    })(), () => {
      P = !0;
    };
  }, [T]), G(() => {
    l && A(l);
  }, [l, A]);
  const x = F((P) => {
    P && p(P);
  }, []), C = F(() => {
    p((P) => P && As(P, -1));
  }, []), S = F(() => {
    p((P) => P && As(P, 1));
  }, []), w = F((P = "prev") => {
    p((M) => !M || r.length === 0 ? M : P === "prev" ? r.find((W) => W < M) || r[0] || M : [...r].sort().find((X) => X > M) || M);
  }, [r]), O = F(() => {
    l && (k.current.delete(l), A(l));
  }, [l, A]), E = F(() => {
    T();
  }, [T]);
  return {
    availableDates: r,
    availableByDate: c,
    timezone: a,
    currentDate: l,
    currentReport: u,
    loading: h,
    listLoading: b,
    error: g,
    listError: I,
    goToDate: x,
    goPrevDay: C,
    goNextDay: S,
    goToNearestAvailable: w,
    retry: O,
    retryList: E
  };
}
function bd({ payload: t, currentReport: n, currentDate: s, bodyRef: a }) {
  const i = ee(!1);
  G(() => {
    if (!t || i.current || !n || s !== t.date) return;
    const r = requestAnimationFrame(() => {
      const o = a.current;
      if (!o) {
        i.current = !0;
        return;
      }
      const c = t.findingId ? o.querySelector(`[data-finding-id="${wd(t.findingId)}"]`) : null;
      if (c) {
        c.scrollIntoView({ block: "center", behavior: "auto" }), c.classList.add("thr__row--pulse");
        const d = () => c.classList.remove("thr__row--pulse");
        c.addEventListener("animationend", d, { once: !0 }), setTimeout(d, 2500);
      } else Number.isFinite(t.scrollTop) && (o.scrollTop = t.scrollTop);
      i.current = !0;
    });
    return () => cancelAnimationFrame(r);
  }, [t, n, s, a]);
}
function wd(t) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(t) : String(t).replace(/(["\\\]])/g, "\\$1");
}
const Id = ["critical", "high", "medium", "low"], Dd = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low"
};
function kd({ counts: t, activeSeverities: n, onToggle: s }) {
  return /* @__PURE__ */ e("div", { class: "thr__severity-strip", role: "group", "aria-label": "Filter by severity", children: Id.map((a) => {
    const i = t?.[a] ?? 0, r = n.has(a);
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        class: `thr__sev-card thr__sev-card--${a} ${r ? "is-active" : ""}`,
        "aria-pressed": r,
        onClick: () => s(a),
        children: [
          /* @__PURE__ */ e("span", { class: "thr__sev-label", children: Dd[a] }),
          /* @__PURE__ */ e("span", { class: "thr__sev-count", children: i })
        ]
      },
      a
    );
  }) });
}
const Ms = {
  falls_safety: { emoji: "🚑", label: "Falls & Safety" },
  behavioral: { emoji: "🧠", label: "Behavioral" },
  vitals_labs: { emoji: "📊", label: "Vitals & Labs" },
  respiratory: { emoji: "🫁", label: "Respiratory" },
  skin_wounds: { emoji: "🩹", label: "Skin & Wounds" },
  medications: { emoji: "💊", label: "Medications" },
  abuse_neglect: { emoji: "⚠️", label: "Abuse & Neglect" },
  other_clinical: { emoji: "🏥", label: "Other Clinical" },
  medications_pain: { emoji: "💊", label: "Medications & Pain" },
  abuse_neglect_rights: { emoji: "⚠️", label: "Abuse / Neglect / Rights" }
};
function Qa(t) {
  return t ? String(t).split(/[_\s]+/).filter(Boolean).map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(" ") : "";
}
function mn(t) {
  if (!t) return null;
  const n = String(t).toLowerCase();
  return Ms[n] ? Ms[n] : { emoji: "", label: Qa(t) };
}
function Nd(t) {
  return t ? Qa(t) : "";
}
function Cd(t) {
  return t?.finding || t?.findingText || t?.narrative || t?.description || "";
}
function Sd({
  search: t,
  onSearchChange: n,
  category: s,
  onCategoryChange: a,
  categories: i,
  hasActiveFilters: r,
  onClear: o,
  visibleCount: c,
  totalCount: d
}) {
  return /* @__PURE__ */ e("div", { class: "thr__filters", children: [
    /* @__PURE__ */ e("div", { class: "thr__filters-controls", children: [
      /* @__PURE__ */ e("div", { class: "thr__search-wrap", children: [
        /* @__PURE__ */ e(
          "svg",
          {
            class: "thr__search-icon",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            children: [
              /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
              /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
            ]
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            type: "search",
            class: "thr__search",
            placeholder: "Search patient, room, finding…",
            value: t,
            onInput: (l) => n(l.currentTarget.value),
            "aria-label": "Search findings"
          }
        )
      ] }),
      /* @__PURE__ */ e(
        xd,
        {
          value: s,
          onChange: a,
          categories: i
        }
      ),
      r && /* @__PURE__ */ e("button", { class: "thr__clear", onClick: o, "aria-label": "Clear filters", children: [
        /* @__PURE__ */ e("span", { class: "thr__clear-x", children: "×" }),
        " Clear"
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "thr__count", "aria-live": "polite", children: [
      c,
      " of ",
      d
    ] })
  ] });
}
function xd({ value: t, onChange: n, categories: s }) {
  const [a, i] = v(!1), r = ee(null);
  G(() => {
    if (!a) return;
    const c = (l) => {
      r.current && !r.current.contains(l.target) && i(!1);
    }, d = (l) => {
      l.key === "Escape" && i(!1);
    };
    return document.addEventListener("mousedown", c), document.addEventListener("keydown", d), () => {
      document.removeEventListener("mousedown", c), document.removeEventListener("keydown", d);
    };
  }, [a]);
  const o = t ? mn(t) : null;
  return /* @__PURE__ */ e("div", { class: "thr__category-wrap", ref: r, children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        class: "thr__category-btn",
        "aria-haspopup": "listbox",
        "aria-expanded": a,
        onClick: () => i((c) => !c),
        children: [
          o ? /* @__PURE__ */ e("span", { children: [
            o.emoji && /* @__PURE__ */ e("span", { class: "thr__chip-emoji", "aria-hidden": "true", children: o.emoji }),
            o.label
          ] }) : /* @__PURE__ */ e("span", { children: "All Categories" }),
          /* @__PURE__ */ e("span", { class: "thr__caret", children: "▾" })
        ]
      }
    ),
    a && /* @__PURE__ */ e("ul", { class: "thr__category-menu", role: "listbox", children: [
      /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `thr__category-opt ${t ? "" : "is-active"}`,
          role: "option",
          "aria-selected": !t,
          onClick: () => {
            n(null), i(!1);
          },
          children: "All Categories"
        }
      ) }),
      s.map((c) => {
        const d = mn(c);
        return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `thr__category-opt ${t === c ? "is-active" : ""}`,
            role: "option",
            "aria-selected": t === c,
            onClick: () => {
              n(c), i(!1);
            },
            children: [
              d?.emoji && /* @__PURE__ */ e("span", { class: "thr__chip-emoji", "aria-hidden": "true", children: d.emoji }),
              d?.label || c
            ]
          }
        ) }, c);
      })
    ] })
  ] });
}
const Pd = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low"
};
function Td() {
  try {
    return new URL(window.location.href).origin;
  } catch {
    return "";
  }
}
function Ad(t) {
  if (!t) return null;
  const n = Td();
  return n ? `${n}/admin/client/cp_residentdashboard.jsp?ESOLrow=1&ESOLclientid=${encodeURIComponent(t)}` : null;
}
function Md(t) {
  if (t.patientName) return t.patientName;
  const n = t.patientFirstName || "";
  return [t.patientLastName || "", n].filter(Boolean).join(", ") || "Unknown";
}
function Ld({ finding: t, onOpenInPCC: n }) {
  const s = (t.severity || "low").toLowerCase(), a = Pd[s] || s, i = Md(t), r = t.room || t.patientRoom || "", o = mn(t.category), c = Nd(t.subcategory || t.type || t.findingType), d = Cd(t), l = t.id || t.findingId || null, p = t.patientId || t.residentId || null, u = Ad(p), m = (h) => {
    u && (h.metaKey || h.ctrlKey || h.shiftKey || h.button === 1 || (h.preventDefault(), n?.(t, { href: u })));
  };
  return /* @__PURE__ */ e("li", { class: "thr__row", "data-finding-id": l || void 0, "data-severity": s, children: [
    /* @__PURE__ */ e("span", { class: `thr__row-bar thr__row-bar--${s}`, "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "thr__row-main", children: [
      /* @__PURE__ */ e("div", { class: "thr__row-heading", children: [
        /* @__PURE__ */ e("span", { class: `thr__sev-badge thr__sev-badge--${s}`, children: a }),
        /* @__PURE__ */ e("span", { class: "thr__row-name", children: i }),
        r && /* @__PURE__ */ e("span", { class: "thr__row-meta", children: r }),
        o && /* @__PURE__ */ e("span", { class: "thr__chip", children: [
          o.emoji && /* @__PURE__ */ e("span", { class: "thr__chip-emoji", "aria-hidden": "true", children: o.emoji }),
          o.label
        ] }),
        c && /* @__PURE__ */ e("span", { class: "thr__chip thr__chip--type", children: c })
      ] }),
      d && /* @__PURE__ */ e("p", { class: "thr__row-text", children: d })
    ] }),
    u && /* @__PURE__ */ e(
      "a",
      {
        class: "thr__row-open",
        href: u,
        onClick: m,
        "aria-label": `Open ${i} in PointClickCare`,
        title: "Open in PointClickCare",
        children: /* @__PURE__ */ e(
          "svg",
          {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            children: [
              /* @__PURE__ */ e("path", { d: "M7 17L17 7" }),
              /* @__PURE__ */ e("polyline", { points: "7 7 17 7 17 17" })
            ]
          }
        )
      }
    )
  ] });
}
function Ed() {
  return /* @__PURE__ */ e("div", { class: "thr__skeleton", "aria-busy": "true", "aria-label": "Loading", children: [0, 1, 2, 3, 4, 5].map((t) => /* @__PURE__ */ e("div", { class: "thr__skeleton-row", children: [
    /* @__PURE__ */ e("span", { class: "thr__skeleton-bar" }),
    /* @__PURE__ */ e("div", { class: "thr__skeleton-body", children: [
      /* @__PURE__ */ e("span", { class: "thr__skeleton-line thr__skeleton-line--short" }),
      /* @__PURE__ */ e("span", { class: "thr__skeleton-line thr__skeleton-line--long" })
    ] })
  ] }, t)) });
}
function $d({ variant: t = "day", date: n, timezone: s, onJumpToLastAvailable: a }) {
  const i = n ? za(n, s, { weekday: "short" }) : "";
  return /* @__PURE__ */ e("div", { class: "thr__empty", role: "status", children: [
    /* @__PURE__ */ e("div", { class: "thr__empty-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(
      "svg",
      {
        width: "36",
        height: "36",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.6",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        children: [
          /* @__PURE__ */ e("path", { d: "M9 17h6" }),
          /* @__PURE__ */ e("path", { d: "M9 13h6" }),
          /* @__PURE__ */ e("path", { d: "M16 3H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" }),
          /* @__PURE__ */ e("path", { d: "M9 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3" })
        ]
      }
    ) }),
    t === "ever" ? /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("h3", { class: "thr__empty-title", children: "No 24-hour reports yet" }),
      /* @__PURE__ */ e("p", { class: "thr__empty-sub", children: "No 24-hour reports have been generated for this facility." })
    ] }) : /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("h3", { class: "thr__empty-title", children: "No 24-hour report for this day" }),
      i && /* @__PURE__ */ e("p", { class: "thr__empty-sub", children: i }),
      a && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "thr__empty-action",
          onClick: a,
          children: "Jump to last available report"
        }
      )
    ] })
  ] });
}
const Rd = "super:24hr:restore", qd = 1, Od = 1800 * 1e3;
function Bd({
  facilityName: t,
  orgSlug: n,
  date: s,
  findingId: a,
  scrollTop: i
}) {
  if (!t || !n || !s) return !1;
  const r = {
    version: qd,
    facilityName: t,
    orgSlug: n,
    date: s,
    findingId: a || null,
    scrollTop: Number.isFinite(i) ? i : 0,
    expiresAt: Date.now() + Od
  };
  try {
    return sessionStorage.setItem(Rd, JSON.stringify(r)), !0;
  } catch (o) {
    return console.warn("[24HR] failed to write restore payload", o), !1;
  }
}
const ze = ["critical", "high", "medium", "low"];
function ja(t) {
  return t ? Array.isArray(t.findings) ? t.findings : Array.isArray(t.items) ? t.items : [] : [];
}
function Hd(t) {
  const n = { critical: 0, high: 0, medium: 0, low: 0 };
  if (!t) return n;
  if (t.counts && typeof t.counts == "object")
    return { ...n, ...t.counts };
  for (const s of ja(t)) {
    const a = (s.severity || "").toLowerCase();
    a in n && (n[a] += 1);
  }
  return n;
}
function Fd({ facilityName: t, orgSlug: n, restore: s, onClose: a }) {
  const {
    availableDates: i,
    timezone: r,
    currentDate: o,
    currentReport: c,
    loading: d,
    listLoading: l,
    error: p,
    listError: u,
    goToDate: m,
    goPrevDay: h,
    goNextDay: _,
    retry: g,
    retryList: f
  } = vd({
    facilityName: t,
    orgSlug: n,
    initialDate: s?.date || null
  }), b = Z(() => Wa(r), [r]), y = i[0] || null, I = i[i.length - 1] || null, D = !!o && (!I || o > I), k = !!o && o < b, T = !!o && !!y && o !== y, [A, x] = v(new Set(ze)), C = ($) => {
    x((V) => {
      const U = new Set(V);
      if (U.size === ze.length)
        return /* @__PURE__ */ new Set([$]);
      if (U.has($)) {
        if (U.delete($), U.size === 0) return new Set(ze);
      } else
        U.add($);
      return U;
    });
  }, S = Z(
    () => Hd(c),
    [c]
  ), [w, O] = v(""), [E, P] = v(null), M = Z(() => ja(c), [c]), R = Z(() => {
    const $ = /* @__PURE__ */ new Set();
    for (const V of M)
      V?.category && $.add(V.category);
    return [...$].sort();
  }, [M]), B = Z(() => {
    const $ = w.trim().toLowerCase(), V = M.filter((J) => {
      const ne = (J.severity || "").toLowerCase();
      return !(!A.has(ne) || E && J.category !== E || $ && ![
        J.patientName,
        J.patientFirstName,
        J.patientLastName,
        J.room,
        J.patientRoom,
        J.category,
        J.subcategory,
        J.type,
        J.findingType,
        J.finding,
        J.findingText,
        J.narrative,
        J.description
      ].filter(Boolean).join(" ").toLowerCase().includes($));
    }), U = { critical: 0, high: 1, medium: 2, low: 3 };
    return V.sort((J, ne) => {
      const se = U[(J.severity || "").toLowerCase()] ?? 9, Q = U[(ne.severity || "").toLowerCase()] ?? 9;
      return se !== Q ? se - Q : (J.patientName || "").localeCompare(ne.patientName || "");
    });
  }, [M, A, E, w]), X = !!w.trim() || !!E || A.size !== ze.length, W = () => {
    O(""), P(null), x(new Set(ze));
  }, q = ee(null), H = ee(null);
  bd({
    payload: s,
    currentReport: c,
    currentDate: o,
    bodyRef: H
  });
  const te = ($, { href: V }) => {
    if (!V) return;
    const U = H.current?.scrollTop ?? 0;
    Bd({
      facilityName: t,
      orgSlug: n,
      date: o,
      findingId: $.id || $.findingId || null,
      scrollTop: U
    }), window.location.href = V;
  };
  return /* @__PURE__ */ e("div", { class: "thr__overlay", onClick: ($) => {
    $.target === $.currentTarget && a();
  }, children: /* @__PURE__ */ e(
    "aside",
    {
      class: "thr__panel",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "24-Hour Report",
      children: [
        /* @__PURE__ */ e("header", { class: "thr__header", children: [
          /* @__PURE__ */ e("div", { class: "thr__header-top", children: [
            /* @__PURE__ */ e("div", { class: "thr__titles", children: [
              /* @__PURE__ */ e("span", { class: "thr__title", children: "24-Hour Report" }),
              t && /* @__PURE__ */ e("span", { class: "thr__facility", children: t })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                class: "thr__close",
                onClick: a,
                "aria-label": "Close",
                title: "Close",
                children: "×"
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { class: "thr__header-date", children: [
            /* @__PURE__ */ e(
              "button",
              {
                class: "thr__nav-btn",
                onClick: h,
                disabled: !D,
                "aria-label": "Previous day",
                children: "‹"
              }
            ),
            /* @__PURE__ */ e("span", { class: "thr__date", children: o ? za(o, r, { weekday: "short" }) : "—" }),
            /* @__PURE__ */ e(
              "button",
              {
                class: "thr__nav-btn",
                onClick: _,
                disabled: !k,
                "aria-label": "Next day",
                children: "›"
              }
            ),
            T && /* @__PURE__ */ e(
              "button",
              {
                class: "thr__jump-today",
                onClick: () => m(y),
                children: "Jump to today"
              }
            )
          ] })
        ] }),
        c && /* @__PURE__ */ e(K, { children: [
          /* @__PURE__ */ e(
            kd,
            {
              counts: S,
              activeSeverities: A,
              onToggle: C
            }
          ),
          /* @__PURE__ */ e(
            Sd,
            {
              search: w,
              onSearchChange: O,
              category: E,
              onCategoryChange: P,
              categories: R,
              hasActiveFilters: X,
              onClear: W,
              visibleCount: B.length,
              totalCount: M.length
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { class: "thr__body", ref: H, children: [
          u && /* @__PURE__ */ e("div", { class: "thr__error", children: [
            /* @__PURE__ */ e("p", { children: "Couldn't load 24-hour reports." }),
            /* @__PURE__ */ e("button", { onClick: f, children: "Retry" })
          ] }),
          !u && p && /* @__PURE__ */ e("div", { class: "thr__error", children: [
            /* @__PURE__ */ e("p", { children: "Couldn't load this report." }),
            /* @__PURE__ */ e("button", { onClick: g, children: "Retry" })
          ] }),
          !u && !p && (d || l && !o) && /* @__PURE__ */ e(Ed, {}),
          !u && !p && !d && c === null && /* @__PURE__ */ e(
            $d,
            {
              variant: i.length === 0 ? "ever" : "day",
              date: o,
              timezone: r,
              onJumpToLastAvailable: i.length > 0 ? () => m(y) : void 0
            }
          ),
          !u && !p && !d && c && B.length === 0 && M.length > 0 && /* @__PURE__ */ e("div", { class: "thr__placeholder", children: [
            "No findings match these filters.",
            " ",
            /* @__PURE__ */ e("button", { class: "thr__inline-link", onClick: W, children: "Clear" })
          ] }),
          !u && !p && !d && c && M.length === 0 && /* @__PURE__ */ e("div", { class: "thr__placeholder", children: "This report has no findings." }),
          !u && !p && !d && c && B.length > 0 && /* @__PURE__ */ e("ul", { class: "thr__row-list", ref: q, children: B.map(($, V) => /* @__PURE__ */ e(Ld, { finding: $, onOpenInPCC: te }, $.id || V)) })
        ] })
      ]
    }
  ) });
}
function Gd({ queryData: t, onClose: n }) {
  const [s, a] = v(1), [i, r] = v(!0), [o, c] = v(""), [d, l] = v([]), [p, u] = v(""), [m, h] = v([]), [_, g] = v(null), [f, b] = v(""), [y, I] = v(!1), [D, k] = v(!1), [T, A] = v(null), x = ee(null), C = t?.mdsItem || "", S = t?.description || t?.aiAnswer?.itemName || "Unknown";
  G(() => {
    (async () => {
      try {
        const E = await window.getCurrentParams?.() || {
          facilityName: "SUNNY MEADOWS DEMO FACILITY",
          orgSlug: "demo-org",
          assessmentId: "4860265"
        };
        E.patientName = window.getPatientNameFromPage?.() || "Doe, Jane", E.patientId = window.getChatPatientId?.() || "2657226", A(E);
        const P = await window.QueryAPI?.fetchPractitioners?.(E.facilityName, E.orgSlug) || [];
        h(P);
        const M = await window.QueryAPI?.generateNote?.(C, t?.aiAnswer || t) || {};
        c(M.note || `Please review the clinical evidence for potential ${S}. See supporting documentation below.`), l(M.icd10Options || []), u(M.preferredIcd10?.code || M.icd10Options?.[0]?.code || "");
      } catch (E) {
        console.error("[DemoQueryModal] Load failed:", E);
      } finally {
        r(!1);
      }
    })();
  }, []);
  const w = async () => {
    if (_) {
      I(!0);
      try {
        const { query: E } = await window.QueryAPI.createQuery({
          patientId: T?.patientId,
          facilityName: T?.facilityName,
          orgSlug: T?.orgSlug,
          mdsAssessmentId: T?.assessmentId,
          mdsItem: C,
          mdsItemName: S,
          aiGeneratedNote: o
        });
        await window.QueryAPI.sendQuery(E.id, [_.id], o), k(!0), setTimeout(() => {
          n(), window.SuperToast?.success?.("Query sent successfully");
        }, 1200);
      } catch (E) {
        console.error("[DemoQueryModal] Send failed:", E), window.SuperToast?.error?.(`Failed to send: ${E.message}`), I(!1);
      }
    }
  }, O = m.filter((E) => f ? (E.name || `${E.firstName} ${E.lastName}`).toLowerCase().includes(f.toLowerCase()) : !0);
  return D ? /* @__PURE__ */ e("div", { class: "dqm__backdrop", ref: x, children: /* @__PURE__ */ e("div", { class: "dqm__modal dqm__modal--success", children: /* @__PURE__ */ e("div", { class: "dqm__success", children: [
    /* @__PURE__ */ e("div", { class: "dqm__success-icon", children: "✓" }),
    /* @__PURE__ */ e("div", { class: "dqm__success-text", children: "Query Sent!" }),
    /* @__PURE__ */ e("div", { class: "dqm__success-sub", children: [
      "Sent to ",
      _?.name || `${_?.firstName} ${_?.lastName}`
    ] })
  ] }) }) }) : /* @__PURE__ */ e("div", { class: "dqm__backdrop", ref: x, onClick: (E) => {
    E.target === x.current && n();
  }, children: /* @__PURE__ */ e("div", { class: "dqm__modal", onClick: (E) => E.stopPropagation(), children: [
    /* @__PURE__ */ e("div", { class: "dqm__header", children: [
      /* @__PURE__ */ e("div", { class: "dqm__header-left", children: [
        /* @__PURE__ */ e("span", { class: "dqm__header-icon", children: "?" }),
        /* @__PURE__ */ e("span", { class: "dqm__header-title", children: "Send Diagnosis Query" }),
        C && /* @__PURE__ */ e("span", { class: "dqm__header-badge", children: C })
      ] }),
      /* @__PURE__ */ e("button", { class: "dqm__close", onClick: n, type: "button", children: "×" })
    ] }),
    /* @__PURE__ */ e("div", { class: "dqm__progress", children: [
      /* @__PURE__ */ e("div", { class: `dqm__step ${s >= 1 ? "dqm__step--active" : ""} ${s > 1 ? "dqm__step--done" : ""}`, children: [
        /* @__PURE__ */ e("span", { class: "dqm__step-num", children: s > 1 ? "✓" : "1" }),
        /* @__PURE__ */ e("span", { class: "dqm__step-label", children: "Review" })
      ] }),
      /* @__PURE__ */ e("div", { class: `dqm__step-line ${s > 1 ? "dqm__step-line--active" : ""}` }),
      /* @__PURE__ */ e("div", { class: `dqm__step ${s >= 2 ? "dqm__step--active" : ""}`, children: [
        /* @__PURE__ */ e("span", { class: "dqm__step-num", children: "2" }),
        /* @__PURE__ */ e("span", { class: "dqm__step-label", children: "Send" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "dqm__body", children: i ? /* @__PURE__ */ e("div", { class: "dqm__loading", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
      /* @__PURE__ */ e("span", { children: "Loading query details..." })
    ] }) : s === 1 ? (
      /* ── Step 1: Review ── */
      /* @__PURE__ */ e("div", { class: "dqm__step-content", children: [
        /* @__PURE__ */ e("div", { class: "dqm__info-card", children: [
          /* @__PURE__ */ e("div", { class: "dqm__info-row", children: [
            /* @__PURE__ */ e("span", { class: "dqm__patient-name", children: T?.patientName || "Patient" }),
            /* @__PURE__ */ e("span", { class: "dqm__facility", children: T?.facilityName || "" })
          ] }),
          /* @__PURE__ */ e("div", { class: "dqm__diagnosis-row", children: [
            /* @__PURE__ */ e("span", { class: "dqm__diag-code", children: C }),
            /* @__PURE__ */ e("span", { class: "dqm__diag-name", children: S })
          ] })
        ] }),
        d.length > 0 && /* @__PURE__ */ e("div", { class: "dqm__field", children: [
          /* @__PURE__ */ e("label", { class: "dqm__label", children: "ICD-10 Code" }),
          /* @__PURE__ */ e("select", { class: "dqm__select", value: p, onChange: (E) => u(E.target.value), children: d.map((E) => /* @__PURE__ */ e("option", { value: E.code, children: [
            E.code,
            E.description ? ` — ${E.description}` : ""
          ] }, E.code)) })
        ] }),
        /* @__PURE__ */ e("div", { class: "dqm__field", children: [
          /* @__PURE__ */ e("label", { class: "dqm__label", children: "Note for Physician" }),
          /* @__PURE__ */ e(
            "textarea",
            {
              class: "dqm__textarea",
              rows: "5",
              value: o,
              onInput: (E) => c(E.target.value),
              placeholder: "Enter note for physician..."
            }
          )
        ] })
      ] })
    ) : (
      /* ── Step 2: Send ── */
      /* @__PURE__ */ e("div", { class: "dqm__step-content", children: [
        /* @__PURE__ */ e("div", { class: "dqm__info-card", children: [
          /* @__PURE__ */ e("div", { class: "dqm__info-row", children: [
            /* @__PURE__ */ e("span", { class: "dqm__patient-name", children: T?.patientName || "Patient" }),
            /* @__PURE__ */ e("span", { class: "dqm__facility", children: T?.facilityName || "" })
          ] }),
          /* @__PURE__ */ e("div", { class: "dqm__diagnosis-row", children: [
            /* @__PURE__ */ e("span", { class: "dqm__diag-code", children: C }),
            /* @__PURE__ */ e("span", { class: "dqm__diag-name", children: S })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { class: "dqm__field", children: [
          /* @__PURE__ */ e("label", { class: "dqm__label", children: "Send to Physician" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              class: "dqm__search",
              placeholder: "Search practitioners...",
              value: f,
              onInput: (E) => b(E.target.value)
            }
          ),
          /* @__PURE__ */ e("div", { class: "dqm__pract-list", children: O.map((E) => {
            const P = E.name || `${E.firstName} ${E.lastName}`, M = _?.id === E.id;
            return /* @__PURE__ */ e(
              "div",
              {
                class: `dqm__pract-item ${M ? "dqm__pract-item--selected" : ""}`,
                onClick: () => g(E),
                children: [
                  /* @__PURE__ */ e("div", { class: "dqm__pract-avatar", children: (E.firstName?.[0] || P[0]).toUpperCase() }),
                  /* @__PURE__ */ e("div", { class: "dqm__pract-info", children: [
                    /* @__PURE__ */ e("div", { class: "dqm__pract-name", children: P }),
                    E.title && /* @__PURE__ */ e("div", { class: "dqm__pract-title", children: E.title })
                  ] }),
                  M && /* @__PURE__ */ e("span", { class: "dqm__pract-check", children: "✓" })
                ]
              },
              E.id
            );
          }) }),
          /* @__PURE__ */ e("div", { class: "dqm__hint", children: "They will be notified via SMS" })
        ] })
      ] })
    ) }),
    /* @__PURE__ */ e("div", { class: "dqm__footer", children: s === 1 ? /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("button", { class: "dqm__btn dqm__btn--secondary", onClick: n, type: "button", children: "Cancel" }),
      /* @__PURE__ */ e("button", { class: "dqm__btn dqm__btn--primary", onClick: () => a(2), disabled: i, type: "button", children: "Next" })
    ] }) : /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("button", { class: "dqm__btn dqm__btn--secondary", onClick: () => a(1), disabled: y, type: "button", children: "Back" }),
      /* @__PURE__ */ e("button", { class: "dqm__btn dqm__btn--primary", onClick: w, disabled: !_ || y, type: "button", children: y ? "Sending..." : "Send Query" })
    ] }) })
  ] }) });
}
let Ud = 0;
function Vd() {
  return `demo-tc-${++Ud}-${Date.now().toString(36)}`;
}
function Wt(t) {
  return new Promise((n) => setTimeout(n, t));
}
function pt(t, n) {
  const s = t.toLowerCase();
  return n.some((a) => s.includes(a));
}
function zd(t) {
  return pt(t, ["malnutrition", "nutrition", "weight loss", "albumin", "aphasia"]) ? Wd() : pt(t, ["pdpm", "hipps", "opportunities", "reimbursement", "revenue"]) ? Qd() : pt(t, ["iv fluid", "iv ", "intravenous", "fluids", "hospital doc"]) ? jd() : pt(t, ["medication", "med ", "meds", "drug", "prescription", "taking"]) ? Kd() : Yd();
}
function Wd() {
  return [
    {
      type: "tool",
      toolName: "searchClinicalNotes",
      input: { keyword: "malnutrition weight loss albumin", noteType: "Nutrition" },
      output: [
        { documentId: "doc-nutr-001", title: "Nutrition Progress Note", date: "2026-01-22", author: "Sarah Kim, RD, LD", snippet: "Moderate protein-calorie malnutrition. Weight loss 12.6% in 3 months. PO intake <50%..." },
        { documentId: "doc-nutr-002", title: "Nutrition Lab Panel", date: "2026-01-20", author: "Lab", snippet: "Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low)..." },
        { documentId: "doc-nutr-006", title: "Weight Monitoring Flow Sheet", date: "2026-01-22", author: "Nursing", snippet: "Weight trend: 135 → 118 lbs. Total loss: 17 lbs (12.6%)..." }
      ],
      delayMs: 800
    },
    {
      type: "tool",
      toolName: "readDocument",
      input: { documentId: "doc-nutr-001", title: "Nutrition Progress Note" },
      output: {
        documentId: "doc-nutr-001",
        title: "Nutrition Progress Note",
        date: "2026-01-22",
        author: "Sarah Kim, RD, LD",
        excerpt: "Weight Loss: 17 lbs (12.6%) in past 3 months. PO Intake: < 50% meals/est. needs. Albumin: 2.9 g/dL (Low), Prealbumin: 12 mg/dL (Low). Moderate protein-calorie malnutrition diagnosed based on significant unintentional weight loss, inadequate oral intake, and low albumin/prealbumin. Recommend fortified foods, Ensure Plus BID, weekly weights.",
        page: 2
      },
      delayMs: 1e3
    },
    {
      type: "tool",
      toolName: "readMAR",
      input: { medication: "Ensure Plus", patientId: "2657226" },
      output: {
        medication: "Ensure Plus 8 OZ Oral Liquid",
        route: "ORAL",
        frequency: "BID with meals",
        recentAdministrations: [
          { date: "01/22", lunch: "Given", dinner: "Given" },
          { date: "01/23", lunch: "Given", dinner: "Refused" },
          { date: "01/24", lunch: "Given", dinner: "Given" },
          { date: "01/25", lunch: "Given", dinner: "Given" },
          { date: "01/26", lunch: "Given", dinner: "Refused" },
          { date: "01/27", lunch: "Given", dinner: "Given" }
        ],
        complianceRate: "83%"
      },
      delayMs: 800
    },
    {
      type: "text",
      content: `## Malnutrition Documentation Found

Yes — there is **strong documented evidence of malnutrition** for this resident.

### Clinical Evidence

From the Nutrition Progress Note (1/22/2026):

> **Weight Loss: 17 lbs (12.6%)** in past 3 months. PO Intake: **< 50%** meals/est. needs. Moderate protein-calorie malnutrition diagnosed.

Lab values confirm:
- **Albumin: 2.9 g/dL** (Low — ref: 3.5-5.0)
- **Prealbumin: 12 mg/dL** (Low — ref: 18-38)

Active treatment via MAR:
- **Ensure Plus 8oz BID** — 83% compliance over past week
- **Fortified Cereal 6oz QD** — administered daily

### MDS Impact

| Item | Current | Suggested | Rationale |
|------|---------|-----------|----------|
| **I5600** (Malnutrition) | Not coded | **1 — Yes** | Dietitian documents moderate protein-calorie malnutrition |
| **NTA Score** | NC | **ND** | Malnutrition activates NTA comorbidity tier |
| **HIPPS** | KAQD | **KBQE** | **+$41.86/day** |

### Sources

- [View Nutrition Progress Note (Page 2)](#doc:doc-nutr-001:2)
- [View Nutrition Lab Panel](#doc:doc-nutr-002:1)
- [View Weight Monitoring Flow Sheet](#doc:doc-nutr-006:1)
- [View MAR — Ensure Plus](#mar:doc-nutr-004)
- [View MAR — Fortified Cereal](#mar:doc-nutr-003)
`,
      delayMs: 600
    }
  ];
}
function Qd() {
  return [
    {
      type: "tool",
      toolName: "getPatientContext",
      input: {},
      output: {
        patientName: "Margaret Thompson",
        age: 78,
        admissionDate: "2026-02-15",
        payerType: "Medicare Part A",
        currentHipps: "KAQD",
        currentPerDiem: "$412.18",
        assessmentType: "5-Day PPS",
        ard: "2026-02-20"
      },
      delayMs: 600
    },
    {
      type: "tool",
      toolName: "searchSemantically",
      input: { query: "PDPM optimization opportunities clinical documentation" },
      output: [
        {
          item: "I5600",
          label: "Malnutrition",
          confidence: 0.95,
          currentValue: null,
          suggestedValue: "1",
          source: "Nutrition Progress Note (doc-nutr-001)",
          hippsImpact: "KAQD → KBQE (+$41.86/day)"
        },
        {
          item: "I4300",
          label: "Diabetes with PVD",
          confidence: 0.85,
          currentValue: null,
          suggestedValue: "1",
          source: "MD H&P (doc-005)",
          hippsImpact: "KBQE → KCQE (+$28.14/day)"
        },
        {
          item: "O0400A3",
          label: "IV Medications (while a resident)",
          confidence: 0.88,
          currentValue: "0",
          suggestedValue: "3",
          source: "Hospital Discharge Summary (doc-090)",
          hippsImpact: "+2 NTA points (+$18.42/day)"
        }
      ],
      delayMs: 1400
    },
    {
      type: "text",
      content: `## PDPM Optimization Opportunities

Based on clinical documentation analysis for **Margaret Thompson**, I found **3 potential opportunities** to improve PDPM accuracy:

| # | MDS Item | Description | Confidence | HIPPS Impact | Source |
|---|----------|-------------|-----------|--------------|--------|
| 1 | **I5600** | Malnutrition | 95% | KAQD → KBQE (**+$41.86/day**) | [Nutrition Progress Note](#doc:doc-nutr-001:2) |
| 2 | **I4300** | Diabetes w/ PVD | 85% | KBQE → KCQE (**+$28.14/day**) | [MD H&P](#doc:doc-005:1) |
| 3 | **O0400A3** | IV Medications | 88% | +2 NTA pts (**+$18.42/day**) | [Discharge Summary](#doc:doc-090:3) |

### Total Potential Impact

**+$88.42/day** (combined) — from current HIPPS **KAQD** ($412.18/day) to optimized **KCQE** ($500.60/day)

> These are opportunities where clinical documentation supports a coding change but the MDS may not yet reflect it. Each should be reviewed by the MDS coordinator.

Would you like me to dive deeper into any of these opportunities?
`,
      delayMs: 600
    }
  ];
}
function jd() {
  return [
    {
      type: "tool",
      toolName: "searchDocuments",
      input: { query: "IV fluids intravenous administration", dateRange: "lookback" },
      output: [
        { documentId: "doc-090", title: "Hospital Discharge Summary", date: "2026-02-14", author: "Dr. James Patel", relevance: 0.95 },
        { documentId: "doc-091", title: "Hospital H&P", date: "2026-02-13", author: "Dr. James Patel", relevance: 0.87 }
      ],
      delayMs: 800
    },
    {
      type: "tool",
      toolName: "readDocument",
      input: { documentId: "doc-090", title: "Hospital Discharge Summary" },
      output: {
        documentId: "doc-090",
        title: "Hospital Discharge Summary",
        date: "2026-02-14",
        author: "Dr. James Patel",
        excerpt: "Hospital Course: Patient admitted for CHF exacerbation. Received IV Normal Saline 1L bolus on admission, then maintained on IV NS at 75mL/hr for 48 hours. IV Lasix 40mg BID administered on days 2-4. Transitioned to oral Lasix 20mg on day 5 prior to discharge to SNF.",
        page: 3
      },
      delayMs: 1e3
    },
    {
      type: "tool",
      toolName: "searchClinicalNotes",
      input: { keyword: "IV", noteType: "Nursing" },
      output: [
        { documentId: "doc-092", title: "Nursing Transfer Note", date: "2026-02-15", author: "RN Maria Lopez", snippet: "Patient transferred from Regional Medical Center. IV site left forearm — discontinued on arrival. Was receiving IV NS at 75mL/hr..." }
      ],
      delayMs: 800
    },
    {
      type: "text",
      content: `## IV Fluid Administration Evidence

Yes — there is **documented evidence of IV fluid and IV medication administration** during the qualifying hospital stay.

### Hospital Documentation

From the Discharge Summary (2/14/2026):

> Patient admitted for CHF exacerbation. Received **IV Normal Saline 1L bolus** on admission, then maintained on **IV NS at 75mL/hr for 48 hours**. **IV Lasix 40mg BID** administered on days 2-4.

The Nursing Transfer Note (2/15/2026) corroborates:

> IV site left forearm — discontinued on arrival. Was receiving IV NS at 75mL/hr.

### MDS Impact

| Item | Current | Suggested | Rationale |
|------|---------|-----------|----------|
| **O0400A3** | 0 — Not coded | **3 — IV while a resident** | Hospital discharge docs confirm IV admin within look-back |
| **NTA Points** | Current | **+2 points** | IV medications add NTA comorbidity points |

> **Note:** The look-back period for O0400A3 includes the qualifying hospital stay per CMS guidance. Both IV NS and IV Lasix qualify as IV medications for PDPM NTA scoring.

### Sources

- [View Hospital Discharge Summary (Page 3)](#doc:doc-090:3)
- [View Hospital H&P](#doc:doc-091:1)
- [View Nursing Transfer Note](#doc:doc-092:1)
`,
      delayMs: 600
    }
  ];
}
function Kd() {
  return [
    {
      type: "tool",
      toolName: "searchMedications",
      input: { patientId: "current", status: "active" },
      output: [
        { name: "Lisinopril 10mg", route: "PO", frequency: "Daily", type: "scheduled", prescriber: "Dr. Sarah Kim", startDate: "2026-02-15" },
        { name: "Metformin 500mg", route: "PO", frequency: "BID", type: "scheduled", prescriber: "Dr. Sarah Kim", startDate: "2026-02-15" },
        { name: "Omeprazole 20mg", route: "PO", frequency: "Daily (AC breakfast)", type: "scheduled", prescriber: "Dr. Sarah Kim", startDate: "2026-02-16" },
        { name: "Atorvastatin 40mg", route: "PO", frequency: "QHS", type: "scheduled", prescriber: "Dr. Sarah Kim", startDate: "2026-02-15" },
        { name: "Albuterol 2.5mg/3mL", route: "INH (nebulizer)", frequency: "Q4H PRN", type: "prn", prescriber: "Dr. Sarah Kim", startDate: "2026-02-15" },
        { name: "Acetaminophen 650mg", route: "PO", frequency: "Q6H PRN", type: "prn", prescriber: "Dr. Sarah Kim", startDate: "2026-02-15" }
      ],
      delayMs: 800
    },
    {
      type: "tool",
      toolName: "searchAdministrationRecords",
      input: { date: "today" },
      output: {
        date: "2026-03-06",
        scheduled: [
          { name: "Lisinopril 10mg", time: "08:00", status: "given", givenBy: "RN Maria Lopez" },
          { name: "Metformin 500mg", time: "08:00", status: "given", givenBy: "RN Maria Lopez" },
          { name: "Metformin 500mg", time: "17:00", status: "scheduled", givenBy: null },
          { name: "Omeprazole 20mg", time: "07:30", status: "given", givenBy: "RN Maria Lopez" },
          { name: "Atorvastatin 40mg", time: "21:00", status: "scheduled", givenBy: null }
        ],
        prn: [
          { name: "Acetaminophen 650mg", time: "06:15", status: "given", givenBy: "RN Maria Lopez", reason: "Headache" }
        ]
      },
      delayMs: 1e3
    },
    {
      type: "text",
      content: `## Current Medications

Here are the active medications for this resident:

### Scheduled Medications

| Medication | Route | Frequency | Today's Status |
|-----------|-------|-----------|----------------|
| Lisinopril 10mg | PO | Daily | Given 08:00 |
| Metformin 500mg | PO | BID | Given 08:00 — 17:00 pending |
| Omeprazole 20mg | PO | Daily (AC breakfast) | Given 07:30 |
| Atorvastatin 40mg | PO | QHS | 21:00 pending |

### PRN Medications

| Medication | Route | Frequency | Last Given |
|-----------|-------|-----------|------------|
| Albuterol 2.5mg/3mL | INH (nebulizer) | Q4H PRN | Not given today |
| Acetaminophen 650mg | PO | Q6H PRN | 06:15 (headache) |

All medications were prescribed by **Dr. Sarah Kim** starting around the admission date (2/15/2026). Morning medications have been administered. Evening doses are still pending.
`,
      delayMs: 600
    }
  ];
}
function Yd() {
  return [
    {
      type: "tool",
      toolName: "think",
      input: { thought: "The user's query doesn't match a specific clinical topic. I'll search broadly and offer guidance." },
      output: { status: "considered" },
      delayMs: 600
    },
    {
      type: "tool",
      toolName: "searchSemantically",
      input: { query: "general clinical documentation review" },
      output: { results: [], message: "No specific results for this query in demo mode." },
      delayMs: 800
    },
    {
      type: "text",
      content: `I don't have a specific scripted answer for that question in demo mode, but here are some things you can try:

- **"Does this patient have malnutrition?"** — Clinical documentation search with MDS impact
- **"What are the PDPM opportunities?"** — Reimbursement optimization analysis
- **"Were IV fluids given in the hospital?"** — Hospital document review with NTA impact
- **"What medications is this patient taking?"** — Active medication list with today's MAR

Try one of these to see the full demo experience!
`,
      delayMs: 600
    }
  ];
}
function Jd(t) {
  const [n, s] = v([]), [a, i] = v("ready"), [r, o] = v(null), [c, d] = v(
    () => typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `demo-${Date.now()}`
  ), l = ee(!1), p = ee(!1);
  G(() => {
    m();
  }, [t]);
  const u = F(
    async (g) => {
      if (a !== "ready" || p.current || !g.trim()) return;
      l.current = !1, p.current = !0, o(null);
      const f = { role: "user", content: g }, b = { role: "assistant", content: "", parts: [] };
      if (s((I) => [...I, f, b]), i("submitted"), await Wt(600), l.current) {
        p.current = !1;
        return;
      }
      i("streaming");
      const y = zd(g);
      for (const I of y) {
        if (l.current) break;
        if (I.type === "tool") {
          const D = Vd(), k = {
            type: `tool-${I.toolName}`,
            toolCallId: D,
            status: "running",
            input: I.input,
            output: void 0
          };
          if (b.parts.push(k), s((T) => {
            const A = [...T];
            return A[A.length - 1] = { ...b, parts: [...b.parts] }, A;
          }), await Wt(I.delayMs || 800), l.current) break;
          k.status = "done", k.output = I.output, s((T) => {
            const A = [...T];
            return A[A.length - 1] = { ...b, parts: [...b.parts] }, A;
          });
        } else if (I.type === "text") {
          if (await Wt(I.delayMs || 600), l.current) break;
          const D = { type: "text", content: I.content };
          b.parts.push(D), b.content = I.content, s((k) => {
            const T = [...k];
            return T[T.length - 1] = { ...b, parts: [...b.parts] }, T;
          });
        }
      }
      i("ready"), p.current = !1;
    },
    [a]
  ), m = F(() => {
    l.current = !0, p.current = !1, s([]), i("ready"), o(null), d(
      typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `demo-${Date.now()}`
    );
  }, []), h = F(() => {
    l.current = !0, p.current = !1, i("ready");
  }, []), _ = F((g, f) => {
    l.current = !0, p.current = !1, d(g), s(f || []), i("ready"), o(null);
  }, []);
  return { messages: n, status: a, error: r, sessionId: c, send: u, clear: m, stop: h, setMessages: s, loadSession: _ };
}
const Zd = {
  "doc-001": {
    title: "SLP Evaluation",
    date: "01/20/2026",
    type: "Speech-Language Pathology",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">Sunny Meadows Rehabilitation Center</div>
            <div class="fake-doc__facility-addr">1200 Meadow Lane, Suite 100 &bull; Springfield, IL 62704 &bull; (217) 555-0142</div>
          </div>
          <div class="fake-doc__title">Speech-Language Pathology Evaluation</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> 23630</div>
            <div><strong>Date:</strong> 01/20/2026</div>
            <div><strong>Physician:</strong> Dr. Demo Provider</div>
            <div><strong>Room:</strong> 308-B</div>
          </div>

          <div class="fake-doc__section-title">Reason for Referral</div>
          <p>Patient referred to Speech-Language Pathology for evaluation of communication difficulties following a left-hemisphere cerebrovascular accident (CVA) sustained on 12/22/2025. Nursing staff report the patient has difficulty expressing her needs and becomes frustrated during conversations. The referring physician requests evaluation of speech-language function and recommendations for treatment.</p>

          <div class="fake-doc__section-title">Medical History</div>
          <p>Significant medical history includes hypertension, Type 2 diabetes mellitus, hyperlipidemia, and congestive heart failure. The patient was admitted to General Hospital on 12/23/2025 following acute onset of right-sided weakness and slurred speech. CT scan confirmed left MCA ischemic stroke. She was transferred to Sunny Meadows Rehabilitation Center on 12/28/2025 for skilled nursing and rehabilitation services.</p>

          <div class="fake-doc__section-title">Oral Motor Examination</div>
          <p>Oral motor examination reveals mild right-sided facial weakness with reduced lip seal on the right. Tongue range of motion is functional with mild weakness on lateral movements to the right. Velopharyngeal function appears adequate during sustained phonation. Dentition is intact with upper and lower dentures in place and well-fitting. No signs of oral apraxia noted during volitional and automatic oral movements.</p>
        `
      },
      {
        pageNum: 2,
        content: `
          <div class="fake-doc__section-title">Language Assessment</div>
          <p>Receptive language skills were assessed using informal measures and subtests from the Boston Diagnostic Aphasia Examination (BDAE). The patient demonstrates adequate auditory comprehension for simple commands and yes/no questions. Comprehension breaks down with multi-step commands and complex syntactic structures.</p>
          <div class="fake-doc__highlight">
            <p>Patient demonstrates significant word-finding difficulties and reduced verbal fluency consistent with expressive aphasia. Spontaneous speech is effortful and limited to 2-3 word phrases. Naming accuracy is approximately 40% for common objects with frequent semantic paraphasias. Repetition of single words is moderately preserved but breaks down at the phrase level.</p>
          </div>

          <div class="fake-doc__section-title">Reading &amp; Writing Assessment</div>
          <p>Reading comprehension at the single word level is functional. Paragraph-level reading comprehension is reduced to approximately 60% accuracy. Writing is limited to signature and single words with assistance. The patient demonstrates difficulty with graphomotor planning in addition to linguistic formulation deficits.</p>

          <div class="fake-doc__section-title">Cognitive-Linguistic Assessment</div>
          <p>Attention to task is adequate for structured activities up to 15 minutes. Short-term auditory memory is reduced, retaining 2 of 4 unrelated words after a brief delay. Problem-solving and reasoning skills are difficult to assess fully given expressive language limitations, though the patient demonstrates functional judgment for basic safety scenarios.</p>

          <div class="fake-doc__section-title">Clinical Impressions</div>
          <div class="fake-doc__highlight">
            <p>Based on this evaluation, the patient presents with moderate expressive aphasia characterized by significant word-finding deficits, reduced verbal fluency, and impaired written expression. Receptive language skills are relatively preserved at the conversational level. Prognosis for improvement is fair given the patient's motivation, family support, and relatively recent onset of deficits. The patient would benefit from intensive speech-language pathology intervention.</p>
          </div>
        `
      },
      {
        pageNum: 3,
        content: `
          <div class="fake-doc__section-title">Goals (90-Day)</div>
          <ol>
            <li>Patient will name common objects with 70% accuracy given minimal phonemic cues in structured tasks.</li>
            <li>Patient will produce 4-5 word phrases to express basic needs and wants with 60% independence.</li>
            <li>Patient will follow 2-step commands with 80% accuracy.</li>
            <li>Patient will utilize a communication board as a compensatory strategy with minimal cueing.</li>
            <li>Patient will write simple sentences of 3-4 words with moderate assistance.</li>
          </ol>

          <div class="fake-doc__section-title">Treatment Plan</div>
          <p>Speech-language pathology services recommended at a frequency of <strong>3 times per week for 45-minute sessions</strong>. Treatment will target:</p>
          <ul>
            <li>Naming and word retrieval through semantic feature analysis and phonological component analysis</li>
            <li>Verbal expression through script training and sentence completion tasks</li>
            <li>Functional communication through multimodal strategies (verbal, gestural, written, communication board)</li>
            <li>Reading and writing skills at the functional level</li>
            <li>Cognitive-linguistic skills including attention and memory as they relate to communication</li>
          </ul>
          <p>Plan of care will be reviewed and updated after 30 days or as clinically indicated.</p>

          <div class="fake-doc__signature-block">
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Sarah Thompson</div>
              <div class="fake-doc__sig-title">Speech-Language Pathologist</div>
              <div class="fake-doc__sig-license">M.S., CCC-SLP &bull; License #SLP-2019-04827</div>
            </div>
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Date: 01/20/2026</div>
            </div>
          </div>

          <div class="fake-doc__footer-note">Sunny Meadows Rehabilitation Center &bull; Speech-Language Pathology Department &bull; Page 3 of 3</div>
        `
      }
    ]
  },
  "doc-003": {
    title: "MD Progress Note",
    date: "01/22/2026",
    type: "Physician Progress Note",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">Sunny Meadows Rehabilitation Center</div>
            <div class="fake-doc__facility-addr">1200 Meadow Lane, Suite 100 &bull; Springfield, IL 62704 &bull; (217) 555-0142</div>
          </div>
          <div class="fake-doc__title">Physician Progress Note</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> 23630</div>
            <div><strong>Date:</strong> 01/22/2026</div>
            <div><strong>Physician:</strong> Dr. Demo Provider</div>
            <div><strong>Room:</strong> 308-B</div>
          </div>

          <div class="fake-doc__section-title">Subjective</div>
          <p>Patient reports feeling "a little better" today. She continues to have difficulty expressing herself and becomes frustrated during conversations. Denies pain, nausea, or shortness of breath. Reports sleeping well. Nursing staff note the patient is cooperative with therapy sessions and ADL care.</p>

          <div class="fake-doc__section-title">Objective</div>
          <p><strong>Vitals:</strong> BP 134/78, HR 72, RR 16, Temp 98.4&deg;F, SpO2 97% on RA</p>
          <p><strong>General:</strong> Alert, oriented x3. Appears well-nourished. Mild right-sided facial droop noted.</p>
          <p><strong>Cardiovascular:</strong> Regular rate and rhythm, no murmurs, gallops, or rubs. Bilateral lower extremity edema trace to 1+, improved from admission.</p>
          <p><strong>Respiratory:</strong> Lungs clear to auscultation bilaterally. No wheezes, rhonchi, or crackles.</p>
          <p><strong>Neurological:</strong> Right upper extremity strength 3/5, right lower extremity 3+/5. Left-sided strength intact. Speech is non-fluent with word-finding pauses.</p>

          <div class="fake-doc__section-title">Assessment</div>
          <div class="fake-doc__highlight">
            <p>Progressive cognitive decline with communication difficulties. Speech therapy addressing expressive language deficits. Patient demonstrates moderate expressive aphasia with relatively preserved comprehension. Current rehabilitation trajectory is appropriate. CHF stable on current medication regimen. Diabetes management requires ongoing monitoring given recent HbA1c of 8.2%.</p>
          </div>

          <div class="fake-doc__section-title">Plan</div>
          <ol>
            <li>Continue current medication regimen. Monitor blood pressure and heart failure symptoms closely.</li>
            <li>Continue SLP therapy 3x/week per evaluation recommendations. Encourage use of communication board on the unit.</li>
            <li>PT/OT to continue per current plan of care for right-sided weakness and functional mobility.</li>
            <li>Adjust diabetic diet and consider insulin adjustment if fasting glucose remains elevated. Recheck HbA1c in 8 weeks.</li>
          </ol>

          <div class="fake-doc__signature-block">
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Dr. Demo Provider</div>
              <div class="fake-doc__sig-title">Attending Physician</div>
              <div class="fake-doc__sig-license">MD &bull; NPI: 1234567890</div>
            </div>
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Date: 01/22/2026</div>
            </div>
          </div>

          <div class="fake-doc__footer-note">Sunny Meadows Rehabilitation Center &bull; Medical Records &bull; Page 1 of 1</div>
        `
      }
    ]
  },
  "doc-081": {
    title: "Lab Results",
    date: "01/18/2026",
    type: "Laboratory Report",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">Quest Diagnostics</div>
            <div class="fake-doc__facility-addr">500 Plaza Drive &bull; Secaucus, NJ 07094 &bull; (800) 222-0446 &bull; www.questdiagnostics.com</div>
          </div>
          <div class="fake-doc__title">Laboratory Report</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> 23630</div>
            <div><strong>Collection Date:</strong> 01/18/2026</div>
            <div><strong>Ordering Physician:</strong> Dr. Demo Provider</div>
            <div><strong>Report Date:</strong> 01/19/2026</div>
          </div>

          <div class="fake-doc__section-title">Comprehensive Metabolic Panel &amp; CBC</div>
          <table class="fake-doc__lab-table">
            <thead>
              <tr>
                <th>Test</th>
                <th>Result</th>
                <th>Flag</th>
                <th>Reference Range</th>
                <th>Units</th>
              </tr>
            </thead>
            <tbody>
              <tr class="fake-doc__lab-row--abnormal">
                <td>Hemoglobin A1c</td>
                <td><span class="fake-doc__highlight-inline">8.2</span></td>
                <td><strong>H</strong></td>
                <td>4.0 - 5.6</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Glucose, Fasting</td>
                <td>186</td>
                <td><strong>H</strong></td>
                <td>70 - 100</td>
                <td>mg/dL</td>
              </tr>
              <tr>
                <td>BUN</td>
                <td>28</td>
                <td><strong>H</strong></td>
                <td>7 - 20</td>
                <td>mg/dL</td>
              </tr>
              <tr class="fake-doc__lab-row--abnormal">
                <td>Creatinine</td>
                <td><span class="fake-doc__highlight-inline">1.8</span></td>
                <td><strong>H</strong></td>
                <td>0.6 - 1.2</td>
                <td>mg/dL</td>
              </tr>
              <tr class="fake-doc__lab-row--abnormal">
                <td>eGFR</td>
                <td><span class="fake-doc__highlight-inline">42</span></td>
                <td><strong>L</strong></td>
                <td>&gt;60</td>
                <td>mL/min/1.73m&sup2;</td>
              </tr>
              <tr>
                <td>Sodium</td>
                <td>138</td>
                <td></td>
                <td>136 - 145</td>
                <td>mEq/L</td>
              </tr>
              <tr>
                <td>Potassium</td>
                <td>4.2</td>
                <td></td>
                <td>3.5 - 5.0</td>
                <td>mEq/L</td>
              </tr>
              <tr>
                <td>Total Cholesterol</td>
                <td>198</td>
                <td></td>
                <td>&lt;200</td>
                <td>mg/dL</td>
              </tr>
              <tr>
                <td>LDL Cholesterol</td>
                <td>112</td>
                <td><strong>H</strong></td>
                <td>&lt;100</td>
                <td>mg/dL</td>
              </tr>
              <tr>
                <td>HDL Cholesterol</td>
                <td>42</td>
                <td><strong>L</strong></td>
                <td>&gt;50</td>
                <td>mg/dL</td>
              </tr>
              <tr>
                <td>WBC</td>
                <td>7.2</td>
                <td></td>
                <td>4.5 - 11.0</td>
                <td>x10&sup3;/&mu;L</td>
              </tr>
              <tr>
                <td>Hemoglobin</td>
                <td>11.8</td>
                <td><strong>L</strong></td>
                <td>12.0 - 16.0</td>
                <td>g/dL</td>
              </tr>
            </tbody>
          </table>

          <div class="fake-doc__footer-note">
            <p><strong>H</strong> = Above normal range &nbsp;&nbsp; <strong>L</strong> = Below normal range</p>
            <p>Quest Diagnostics &bull; CLIA# 22D0928956 &bull; Lab Director: Robert Chen, MD, PhD</p>
          </div>
        `
      }
    ]
  },
  "doc-090": {
    title: "Hospital Discharge Summary",
    date: "12/28/2025",
    type: "Discharge Summary",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">General Hospital Medical Center</div>
            <div class="fake-doc__facility-addr">750 University Boulevard &bull; Springfield, IL 62702 &bull; (217) 555-8000</div>
          </div>
          <div class="fake-doc__title">Discharge Summary</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> H-87452</div>
            <div><strong>Admission Date:</strong> 12/23/2025</div>
            <div><strong>Discharge Date:</strong> 12/28/2025</div>
            <div><strong>Attending:</strong> Dr. J. Williams, MD</div>
          </div>

          <div class="fake-doc__section-title">Admitting Diagnosis</div>
          <p>Acute congestive heart failure exacerbation</p>

          <div class="fake-doc__section-title">Discharge Diagnoses</div>
          <ol>
            <li>Acute on chronic systolic congestive heart failure (HFrEF), EF 35%</li>
            <li>Left middle cerebral artery ischemic stroke (12/22/2025)</li>
            <li>Expressive aphasia secondary to CVA</li>
            <li>Type 2 diabetes mellitus, uncontrolled</li>
            <li>Hypertension</li>
            <li>Hyperlipidemia</li>
            <li>Chronic kidney disease, Stage IIIb (eGFR 42)</li>
            <li>Right-sided hemiparesis</li>
          </ol>
        `
      },
      {
        pageNum: 2,
        content: `
          <div class="fake-doc__section-title">Hospital Course</div>
          <p>This is a 72-year-old female who resides at Sunny Meadows Skilled Nursing Facility and presented to the Emergency Department on 12/23/2025 with progressive dyspnea, bilateral lower extremity edema, and 8-pound weight gain over one week. The patient's family also reported acute onset of right-sided weakness and speech difficulties that began the previous evening (12/22/2025).</p>

          <p>Upon arrival, the patient was in moderate respiratory distress. Initial vital signs showed BP 178/96, HR 102, RR 24, SpO2 91% on room air. Chest X-ray demonstrated bilateral pulmonary congestion with small bilateral pleural effusions. BNP was markedly elevated at 2,840 pg/mL. CT head without contrast revealed a left MCA territory infarct.</p>

          <div class="fake-doc__section-title">Treatment Provided</div>
          <p><strong>Day 1 (12/23):</strong> Patient was started on supplemental oxygen via nasal cannula at 3L/min. IV access was established and fluid resuscitation was initiated cautiously given heart failure. Cardiology and Neurology consults were placed. Continuous telemetry monitoring was initiated.</p>

          <p><strong>Day 2 (12/24):</strong> Echocardiogram showed EF 35% with global hypokinesis, worse in the anterior and apical segments. No significant valvular disease. Neurology recommended against tPA given the patient was outside the treatment window. MRI brain confirmed left MCA ischemic infarct. IV diuresis was initiated.</p>

          <p><strong>Day 3-4 (12/25-26):</strong> Patient responded well to IV diuretic therapy with significant improvement in respiratory status and reduction of peripheral edema. Oxygen was weaned to room air by Day 4. Speech-language pathology performed bedside swallow evaluation and noted moderate expressive aphasia. Diet was advanced to regular texture with thin liquids.</p>

          <p><strong>Day 5 (12/27):</strong> Patient continued to improve. Transitioned from IV to oral diuretics. Physical therapy and occupational therapy evaluated the patient and recommended continued rehabilitation at SNF level of care.</p>
        `
      },
      {
        pageNum: 3,
        content: `
          <div class="fake-doc__section-title">IV Medications Administered</div>
          <div class="fake-doc__highlight">
            <p>During the hospital stay, the patient received IV Normal Saline 0.9% at 125 mL/hr for hydration and medication delivery (12/23 - 12/27). IV Lasix (furosemide) 40 mg BID was administered from 12/24 through 12/27 for diuresis with excellent response. Total IV Lasix administered was 320 mg over the 4-day course.</p>
          </div>

          <div class="fake-doc__section-title">Medication Administration Record (Selected)</div>
          <table class="fake-doc__med-table">
            <thead>
              <tr>
                <th>Medication</th>
                <th>Dose</th>
                <th>Route</th>
                <th>Frequency</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Normal Saline 0.9%</td>
                <td>125 mL/hr</td>
                <td><span class="fake-doc__highlight-inline">IV</span></td>
                <td>Continuous</td>
                <td>12/23 - 12/27</td>
              </tr>
              <tr>
                <td>Furosemide (Lasix)</td>
                <td>40 mg</td>
                <td><span class="fake-doc__highlight-inline">IV</span></td>
                <td>BID</td>
                <td>12/24 - 12/27</td>
              </tr>
              <tr>
                <td>Heparin</td>
                <td>5000 units</td>
                <td>SubQ</td>
                <td>Q12H</td>
                <td>12/23 - 12/27</td>
              </tr>
              <tr>
                <td>Metoprolol</td>
                <td>25 mg</td>
                <td>PO</td>
                <td>BID</td>
                <td>12/23 - 12/28</td>
              </tr>
              <tr>
                <td>Lisinopril</td>
                <td>10 mg</td>
                <td>PO</td>
                <td>Daily</td>
                <td>12/24 - 12/28</td>
              </tr>
              <tr>
                <td>Aspirin</td>
                <td>81 mg</td>
                <td>PO</td>
                <td>Daily</td>
                <td>12/23 - 12/28</td>
              </tr>
            </tbody>
          </table>

          <div class="fake-doc__section-title">Transition Notes</div>
          <p>IV access was discontinued on 12/27 after successful transition to oral medications. The patient tolerated the transition well with no recurrence of symptoms. All IV medications were converted to oral equivalents prior to discharge.</p>
        `
      },
      {
        pageNum: 4,
        content: `
          <div class="fake-doc__section-title">Discharge Condition</div>
          <p>Improved. Patient is hemodynamically stable with oxygen saturation &gt;95% on room air. Peripheral edema has decreased from 3+ to trace bilaterally. Weight decreased by 6.2 pounds from admission. Patient is tolerating oral diet and medications. Right-sided weakness persists but the patient is able to transfer with moderate assistance. Expressive aphasia is present but the patient is able to communicate basic needs.</p>

          <div class="fake-doc__section-title">Discharge Medications</div>
          <ol>
            <li>Furosemide (Lasix) 40 mg PO daily</li>
            <li>Metoprolol succinate 25 mg PO BID</li>
            <li>Lisinopril 10 mg PO daily</li>
            <li>Aspirin 81 mg PO daily</li>
            <li>Atorvastatin 40 mg PO at bedtime</li>
            <li>Metformin 500 mg PO BID (hold if eGFR &lt;30)</li>
            <li>Insulin glargine 18 units SubQ at bedtime</li>
            <li>Potassium chloride 20 mEq PO daily</li>
          </ol>

          <div class="fake-doc__section-title">Discharge Instructions</div>
          <ul>
            <li>Discharge to Sunny Meadows Skilled Nursing Facility for continued rehabilitation</li>
            <li>Daily weights; notify physician for weight gain &gt;2 lbs in 24 hours or &gt;5 lbs in 1 week</li>
            <li>Low-sodium, carbohydrate-controlled diet</li>
            <li>Fluid restriction 1500 mL/day</li>
            <li>Physical therapy, occupational therapy, and speech-language pathology to evaluate and treat</li>
            <li>Follow-up with Cardiology in 2 weeks</li>
            <li>Follow-up with Neurology in 4 weeks</li>
            <li>Follow-up with PCP in 1 week</li>
          </ul>

          <div class="fake-doc__signature-block">
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Dr. J. Williams</div>
              <div class="fake-doc__sig-title">Attending Physician</div>
              <div class="fake-doc__sig-license">MD &bull; NPI: 9876543210</div>
            </div>
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Date: 12/28/2025</div>
            </div>
          </div>

          <div class="fake-doc__footer-note">General Hospital Medical Center &bull; Medical Records &bull; Page 4 of 4</div>
        `
      }
    ]
  },
  "doc-091": {
    title: "Hospital H&P",
    date: "12/23/2025",
    type: "History & Physical",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">General Hospital Medical Center</div>
            <div class="fake-doc__facility-addr">750 University Boulevard &bull; Springfield, IL 62702 &bull; (217) 555-8000</div>
          </div>
          <div class="fake-doc__title">History &amp; Physical</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> H-87452</div>
            <div><strong>Date of Admission:</strong> 12/23/2025</div>
            <div><strong>Attending:</strong> Dr. J. Williams, MD</div>
            <div><strong>Source:</strong> Patient (limited), SNF records, family</div>
          </div>

          <div class="fake-doc__section-title">History of Present Illness</div>
          <p>This is a 72-year-old female resident of Sunny Meadows Skilled Nursing Facility who presents to the Emergency Department with acute onset of progressive dyspnea, bilateral lower extremity edema, and reported weight gain of approximately 8 pounds over the past week. The patient's daughter reports that on the evening of 12/22/2025, the patient developed sudden right-sided weakness and difficulty speaking. The SNF staff noted these changes during evening rounds and contacted the family.</p>
          <p>The patient has a known history of congestive heart failure (HFrEF, last known EF 38% in 06/2025), hypertension, Type 2 diabetes mellitus, and hyperlipidemia. She has been a resident at Sunny Meadows for the past 14 months. Current medications at the SNF include furosemide 20 mg PO daily, metoprolol succinate 25 mg PO BID, lisinopril 5 mg PO daily, metformin 500 mg PO BID, aspirin 81 mg PO daily, and atorvastatin 20 mg PO at bedtime.</p>

          <div class="fake-doc__section-title">Admit Orders</div>
          <div class="fake-doc__highlight">
            <p>Admit to telemetry unit. IV access x2 established. Start NS 0.9% at 125 mL/hr for hydration and medication delivery. IV Lasix 40 mg BID to begin in AM pending initial assessment and labs. Continuous cardiac monitoring. Strict I&amp;Os. Daily weights. Neurology and Cardiology consults. CT head without contrast STAT. Chest X-ray. Labs: CBC, CMP, BNP, troponin x3 q8h, PT/INR, lipid panel, HbA1c, urinalysis.</p>
          </div>

          <div class="fake-doc__section-title">Assessment &amp; Plan</div>
          <p>72-year-old female with acute on chronic heart failure exacerbation and suspected acute ischemic stroke. The combination of progressive volume overload and new neurological deficits necessitates concurrent management of both conditions. Will pursue aggressive diuresis while monitoring neurological status closely. Anticoagulation decisions will be deferred pending stroke team evaluation given the competing risks of hemorrhagic transformation and DVT prophylaxis needs.</p>

          <div class="fake-doc__signature-block">
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Dr. J. Williams</div>
              <div class="fake-doc__sig-title">Attending Physician</div>
              <div class="fake-doc__sig-license">MD &bull; NPI: 9876543210</div>
            </div>
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Date: 12/23/2025</div>
            </div>
          </div>

          <div class="fake-doc__footer-note">General Hospital Medical Center &bull; Medical Records &bull; Page 1 of 1</div>
        `
      }
    ]
  },
  "doc-092": {
    title: "Nursing Transfer Note",
    date: "12/28/2025",
    type: "Nursing Note",
    pages: [
      {
        pageNum: 1,
        content: `
          <div class="fake-doc__letterhead">
            <div class="fake-doc__facility-name">Sunny Meadows Rehabilitation Center</div>
            <div class="fake-doc__facility-addr">1200 Meadow Lane, Suite 100 &bull; Springfield, IL 62704 &bull; (217) 555-0142</div>
          </div>
          <div class="fake-doc__title">Nursing Transfer / Re-Admission Note</div>
          <div class="fake-doc__meta-grid">
            <div><strong>Patient:</strong> Doe, Jane</div>
            <div><strong>DOB:</strong> 04/12/1953</div>
            <div><strong>MR#:</strong> 23630</div>
            <div><strong>Date:</strong> 12/28/2025</div>
            <div><strong>Time:</strong> 14:30</div>
            <div><strong>Room:</strong> 308-B</div>
          </div>

          <div class="fake-doc__section-title">Transfer Summary</div>
          <div class="fake-doc__highlight">
            <p>Patient transferred from General Hospital Medical Center following a 5-day inpatient stay for acute CHF exacerbation and left MCA ischemic stroke. IV access was discontinued prior to transfer. Patient was receiving IV Normal Saline 0.9% at 125 mL/hr and IV Lasix (furosemide) 40 mg BID during the hospital stay. All IV medications have been converted to oral equivalents. No IV fluids or IV medications are to be continued at this time.</p>
          </div>

          <div class="fake-doc__section-title">Assessment on Return</div>
          <p><strong>Vitals on arrival:</strong> BP 128/74, HR 68, RR 16, Temp 98.2&deg;F, SpO2 96% on RA, Weight 158.4 lbs</p>
          <p><strong>Neurological:</strong> Alert, oriented x3. Expressive aphasia noted &mdash; patient able to communicate basic needs with 2-3 word phrases and gestures. Right-sided facial droop present. Right upper extremity weakness (3/5), right lower extremity weakness (3+/5). Left side strength intact.</p>
          <p><strong>Cardiovascular:</strong> Heart sounds regular, no murmurs. Bilateral LE edema trace to 1+, significantly improved per hospital discharge summary. Pedal pulses palpable bilaterally.</p>
          <p><strong>Respiratory:</strong> Lungs clear bilaterally. No respiratory distress. Room air.</p>
          <p><strong>Skin:</strong> Intact. No pressure injuries noted. IV site on left forearm &mdash; clean, dry, no signs of infection. Bandage applied.</p>
          <p><strong>Functional:</strong> Requires moderate assistance for transfers and ambulation. Bed mobility with minimal assistance. Tolerating regular diet with thin liquids.</p>

          <div class="fake-doc__section-title">New Orders Received</div>
          <ul>
            <li>Resume all discharge medications per hospital discharge summary</li>
            <li>Daily weights &mdash; report gain &gt;2 lbs/day or &gt;5 lbs/week to physician</li>
            <li>Low-sodium, carbohydrate-controlled diet</li>
            <li>Fluid restriction 1500 mL/day</li>
            <li>Strict intake and output monitoring</li>
            <li>PT, OT, and SLP to evaluate and treat</li>
            <li>Blood glucose monitoring AC and HS</li>
            <li>Fall precautions</li>
            <li>Cardiology follow-up in 2 weeks, Neurology in 4 weeks</li>
          </ul>

          <div class="fake-doc__signature-block">
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Maria Rodriguez, RN</div>
              <div class="fake-doc__sig-title">Charge Nurse, Unit 3</div>
              <div class="fake-doc__sig-license">BSN, RN &bull; License #RN-2015-38741</div>
            </div>
            <div>
              <div class="fake-doc__sig-line"></div>
              <div class="fake-doc__sig-name">Date: 12/28/2025 &bull; Time: 15:15</div>
            </div>
          </div>

          <div class="fake-doc__footer-note">Sunny Meadows Rehabilitation Center &bull; Nursing Documentation &bull; Page 1 of 1</div>
        `
      }
    ]
  }
};
function Xd({ docId: t, page: n = 1, highlightText: s = !1, onClose: a }) {
  const i = Zd[t], [r, o] = v(n);
  G(() => {
    o(n);
  }, [n]);
  const c = F(
    (h) => {
      h.key === "Escape" && a?.();
    },
    [a]
  );
  if (G(() => (document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c)), [c]), !i)
    return /* @__PURE__ */ e("div", { className: "fake-doc-viewer__backdrop", onClick: a, children: /* @__PURE__ */ e("div", { className: "fake-doc-viewer__panel", onClick: (h) => h.stopPropagation(), children: [
      /* @__PURE__ */ e("div", { className: "fake-doc-viewer__header", children: [
        /* @__PURE__ */ e("button", { className: "fake-doc-viewer__back-btn", onClick: a, children: "← Back" }),
        /* @__PURE__ */ e("div", { className: "fake-doc-viewer__header-title", children: /* @__PURE__ */ e("span", { className: "fake-doc-viewer__title", children: "Document Not Found" }) }),
        /* @__PURE__ */ e("button", { className: "fake-doc-viewer__close-btn", onClick: a, children: "✕" })
      ] }),
      /* @__PURE__ */ e("div", { className: "fake-doc-viewer__canvas", children: /* @__PURE__ */ e("div", { className: "fake-doc-viewer__page", children: /* @__PURE__ */ e("p", { children: [
        "The requested document (ID: ",
        t,
        ") could not be found."
      ] }) }) })
    ] }) });
  const d = i.pages.length, l = Math.max(1, Math.min(r, d)), p = i.pages.find((h) => h.pageNum === l) || i.pages[0], u = () => o((h) => Math.max(1, h - 1)), m = () => o((h) => Math.min(d, h + 1));
  return /* @__PURE__ */ e("div", { className: "fake-doc-viewer__backdrop", onClick: a, children: /* @__PURE__ */ e("div", { className: "fake-doc-viewer__panel", onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ e("div", { className: "fake-doc-viewer__header", children: [
      /* @__PURE__ */ e("button", { className: "fake-doc-viewer__back-btn", onClick: a, children: "← Back" }),
      /* @__PURE__ */ e("div", { className: "fake-doc-viewer__header-title", children: [
        /* @__PURE__ */ e("span", { className: "fake-doc-viewer__title", children: i.title }),
        /* @__PURE__ */ e("span", { className: "fake-doc-viewer__date", children: i.date })
      ] }),
      /* @__PURE__ */ e("span", { className: "fake-doc-viewer__type-badge", children: i.type }),
      /* @__PURE__ */ e("button", { className: "fake-doc-viewer__close-btn", onClick: a, children: "✕" })
    ] }),
    /* @__PURE__ */ e("div", { className: "fake-doc-viewer__toolbar", children: [
      /* @__PURE__ */ e("div", { className: "fake-doc-viewer__page-nav", children: [
        /* @__PURE__ */ e(
          "button",
          {
            className: "fake-doc-viewer__nav-btn",
            onClick: u,
            disabled: l <= 1,
            children: "‹ Prev"
          }
        ),
        /* @__PURE__ */ e("span", { className: "fake-doc-viewer__page-indicator", children: [
          "Page ",
          l,
          " of ",
          d
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            className: "fake-doc-viewer__nav-btn",
            onClick: m,
            disabled: l >= d,
            children: "Next ›"
          }
        )
      ] }),
      s && /* @__PURE__ */ e("span", { className: "fake-doc-viewer__highlight-badge", children: "Evidence highlighted" })
    ] }),
    /* @__PURE__ */ e("div", { className: "fake-doc-viewer__canvas", children: /* @__PURE__ */ e(
      "div",
      {
        className: "fake-doc-viewer__page",
        dangerouslySetInnerHTML: { __html: p.content }
      }
    ) })
  ] }) });
}
function eu(t) {
  if (!t) return "";
  let n = t;
  const s = [];
  n = n.replace(/```(\w*)\n([\s\S]*?)```/g, (c, d, l) => {
    const p = s.length;
    return s.push(`<pre><code>${Ee(l.trimEnd())}</code></pre>`), `\0CODEBLOCK${p}\0`;
  });
  const a = [];
  n = n.replace(/`([^`]+)`/g, (c, d) => {
    const l = a.length;
    return a.push(`<code>${Ee(d)}</code>`), `\0INLINE${l}\0`;
  });
  const i = n.split(`
`), r = [];
  let o = 0;
  for (; o < i.length; ) {
    const c = i[o];
    if (o + 1 < i.length && tu(i[o + 1]) && c.includes("|")) {
      const l = [c, i[o + 1]];
      for (o += 2; o < i.length && i[o].trim().startsWith("|"); )
        l.push(i[o]), o++;
      r.push(nu(l));
      continue;
    }
    const d = c.match(/^(#{1,4})\s+(.+)$/);
    if (d) {
      const l = d[1].length;
      r.push(`<h${l}>${Me(d[2])}</h${l}>`), o++;
      continue;
    }
    if (/^[\s]*[-*]\s+/.test(c)) {
      const l = [];
      for (; o < i.length && /^[\s]*[-*]\s+/.test(i[o]); )
        l.push(i[o].replace(/^[\s]*[-*]\s+/, "")), o++;
      r.push("<ul>" + l.map((p) => `<li>${Me(p)}</li>`).join("") + "</ul>");
      continue;
    }
    if (/^[\s]*\d+[.)]\s+/.test(c)) {
      const l = [];
      for (; o < i.length && /^[\s]*\d+[.)]\s+/.test(i[o]); )
        l.push(i[o].replace(/^[\s]*\d+[.)]\s+/, "")), o++;
      r.push("<ol>" + l.map((p) => `<li>${Me(p)}</li>`).join("") + "</ol>");
      continue;
    }
    if (c.trim() === "") {
      r.push("<br>"), o++;
      continue;
    }
    r.push(Me(c)), o++;
  }
  return n = r.join(`
`), n = n.replace(/\x00CODEBLOCK(\d+)\x00/g, (c, d) => s[d]), n = n.replace(/\x00INLINE(\d+)\x00/g, (c, d) => a[d]), n = n.replace(/(<br>\s*){3,}/g, "<br><br>"), n;
}
function Me(t) {
  return t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}
function tu(t) {
  return t ? /^\|?[\s-:|]+\|[\s-:|]*$/.test(t.trim()) : !1;
}
function nu(t) {
  const n = Ls(t[0]), s = t.slice(2);
  let a = '<div class="super-chat-table-wrap"><table class="super-chat-table">';
  a += "<thead><tr>";
  for (const i of n)
    a += `<th>${Me(i)}</th>`;
  if (a += "</tr></thead>", s.length > 0) {
    a += "<tbody>";
    for (const i of s) {
      const r = Ls(i);
      a += "<tr>";
      for (let o = 0; o < n.length; o++)
        a += `<td>${Me(r[o] || "")}</td>`;
      a += "</tr>";
    }
    a += "</tbody>";
  }
  return a += "</table></div>", a;
}
function Ls(t) {
  let n = t.trim();
  return n.startsWith("|") && (n = n.slice(1)), n.endsWith("|") && (n = n.slice(0, -1)), n.split("|").map((s) => s.trim());
}
function Ee(t) {
  if (!t) return "";
  const n = document.createElement("div");
  return n.textContent = t, n.innerHTML;
}
function su({ content: t }) {
  return /* @__PURE__ */ e("div", { class: "super-chat-message super-chat-message--user", children: /* @__PURE__ */ e(
    "div",
    {
      class: "super-chat-message__content",
      dangerouslySetInnerHTML: { __html: Ee(t) }
    }
  ) });
}
const au = {
  think: "Reasoning",
  searchVitals: "Searching Vitals",
  searchLabs: "Searching Labs",
  searchMedications: "Searching Medications",
  searchOrders: "Searching Orders",
  searchClinicalNotes: "Searching Clinical Notes",
  searchDocuments: "Searching Documents",
  getPatientContext: "Getting Patient Context",
  readDocument: "Reading Document",
  searchSemantically: "Semantic Search",
  searchCarePlans: "Searching Care Plans",
  searchAdministrationRecords: "Searching Administration Records"
}, iu = {
  think: "💭",
  // thought balloon
  searchVitals: "💓",
  // heart
  searchLabs: "🧪",
  // test tube
  searchMedications: "💊",
  // pill
  searchOrders: "📋",
  // clipboard
  searchClinicalNotes: "📝",
  // memo
  searchDocuments: "📄",
  // document
  getPatientContext: "👤",
  // person
  readDocument: "📖",
  // open book
  searchSemantically: "🔍",
  // magnifying glass
  searchCarePlans: "📋",
  // clipboard
  searchAdministrationRecords: "💉"
  // syringe
};
function ru(t) {
  return au[t] || cu(t);
}
function ou(t) {
  return iu[t] || "🔍";
}
function cu(t) {
  return t.replace(/([A-Z])/g, " $1").replace(/^./, (n) => n.toUpperCase()).trim();
}
function lu(t, n) {
  if (!n) return "";
  switch (t) {
    case "searchVitals":
      return n.vitalType ? `"${n.vitalType}"` : "";
    case "searchLabs":
    case "searchMedications":
    case "searchOrders":
    case "searchDocuments":
      return n.keyword ? `"${n.keyword}"` : "";
    case "searchClinicalNotes":
      return n.keyword ? `"${n.keyword}"` : n.noteType || "";
    case "getPatientContext":
      return "diagnoses";
    case "readDocument":
      return n.documentId ? `doc #${n.documentId}` : "";
    case "searchSemantically":
      return n.query ? `"${n.query.slice(0, 30)}${n.query.length > 30 ? "..." : ""}"` : "";
    default:
      return n.keyword ? `"${n.keyword}"` : n.query ? `"${n.query.slice(0, 30)}${n.query.length > 30 ? "..." : ""}"` : "";
  }
}
function du(t, n) {
  if (!n) return "";
  if (typeof n == "string")
    try {
      const s = JSON.parse(n);
      if (Array.isArray(s)) return `${s.length} results`;
      if (s.results && Array.isArray(s.results)) return `${s.results.length} results`;
    } catch {
      if (n.length > 100) return "Results received";
    }
  return Array.isArray(n) ? `${n.length} results` : n.results && Array.isArray(n.results) ? `${n.results.length} results` : "Complete";
}
function uu({ part: t }) {
  const [n, s] = v(!1), a = t.type.replace("tool-", ""), i = a === "think", r = t.output !== void 0 && t.output !== null, o = t.status === "running" && !r, c = ru(a), d = ou(a), l = lu(a, t.input), p = r ? du(a, t.output) : "";
  return /* @__PURE__ */ e("div", { class: `super-chat-tool ${i ? "super-chat-tool--thinking" : ""} ${o ? "super-chat-tool--running" : ""} ${n ? "super-chat-tool--expanded" : ""}`, children: [
    /* @__PURE__ */ e(
      "div",
      {
        class: "super-chat-tool__header",
        onClick: () => s(!n),
        children: [
          /* @__PURE__ */ e("span", { class: "super-chat-tool__icon", children: d }),
          /* @__PURE__ */ e("span", { class: "super-chat-tool__name", children: c }),
          l && /* @__PURE__ */ e("span", { class: "super-chat-tool__summary", children: l }),
          p && !o && /* @__PURE__ */ e("span", { class: "super-chat-tool__result-summary", children: p }),
          /* @__PURE__ */ e("span", { class: `super-chat-tool__status ${r ? "super-chat-tool__status--done" : "super-chat-tool__status--loading"}`, children: r ? "✓" : o ? /* @__PURE__ */ e("span", { class: "super-chat-tool__spinner" }) : "⏷" }),
          /* @__PURE__ */ e("span", { class: "super-chat-tool__toggle", children: n ? "▴" : "▾" })
        ]
      }
    ),
    n && /* @__PURE__ */ e("div", { class: "super-chat-tool__body", children: [
      t.input && /* @__PURE__ */ e("div", { class: "super-chat-tool__section", children: [
        /* @__PURE__ */ e("div", { class: "super-chat-tool__section-label", children: i && t.input.thought ? "Thought Process" : "Parameters" }),
        /* @__PURE__ */ e("pre", { children: i && t.input.thought ? Ee(t.input.thought) : Ee(JSON.stringify(t.input, null, 2)) })
      ] }),
      r && !i && /* @__PURE__ */ e("div", { class: "super-chat-tool__section", children: [
        /* @__PURE__ */ e("div", { class: "super-chat-tool__section-label", children: "Results" }),
        /* @__PURE__ */ e("pre", { children: Ee(
          typeof t.output == "string" ? t.output : JSON.stringify(t.output, null, 2)
        ) })
      ] })
    ] })
  ] });
}
function pu({ content: t }) {
  return t?.trim() ? /* @__PURE__ */ e(
    "div",
    {
      class: "super-chat-message__content",
      dangerouslySetInnerHTML: { __html: eu(t) }
    }
  ) : null;
}
function mu({ message: t }) {
  const n = t.parts || [], s = n.filter((c) => c.type?.startsWith("tool-")), a = n.filter((c) => c.type === "text"), i = s.some((c) => c.status === "running"), r = a.length > 0 ? a.map((c) => c.content).join("") : t.content || "", o = s.length > 0 || r.trim();
  return /* @__PURE__ */ e("div", { class: "super-chat-message super-chat-message--assistant", children: [
    s.length > 0 && /* @__PURE__ */ e("div", { class: "super-chat-tools-container", children: [
      s.map((c) => /* @__PURE__ */ e(uu, { part: c }, c.toolCallId)),
      i && /* @__PURE__ */ e("div", { class: "super-chat-tools-progress", children: [
        /* @__PURE__ */ e("span", { class: "super-chat-tools-progress__spinner" }),
        /* @__PURE__ */ e("span", { children: "Working..." })
      ] })
    ] }),
    r.trim() && /* @__PURE__ */ e(pu, { content: r }),
    !o && /* @__PURE__ */ e("div", { class: "super-chat-message__content super-chat-message__loading", children: /* @__PURE__ */ e("span", { class: "super-chat-inline-loader", children: [
      /* @__PURE__ */ e("span", {}),
      /* @__PURE__ */ e("span", {}),
      /* @__PURE__ */ e("span", {})
    ] }) })
  ] });
}
function hu({ onSend: t, status: n }) {
  const [s, a] = v(""), i = ee(null), r = n === "ready";
  G(() => {
    r && i.current && i.current.focus();
  }, [r]);
  const o = () => {
    !s.trim() || !r || (t(s.trim()), a(""), i.current && (i.current.style.height = "auto"));
  }, c = (p) => {
    p.key === "Enter" && !p.shiftKey && (p.preventDefault(), o());
  }, d = (p) => {
    a(p.target.value);
    const u = p.target;
    u.style.height = "auto", u.style.height = Math.min(u.scrollHeight, 120) + "px";
  };
  let l;
  if (!r)
    l = n === "submitted" ? "Searching records..." : "Generating response...";
  else {
    const p = typeof window.getChatContext == "function" ? window.getChatContext() : {};
    p.externalPatientId || p.externalAssessmentId ? l = "Ask about this patient..." : p.facilityName ? l = "Search across this facility..." : l = "Search across your facilities...";
  }
  return /* @__PURE__ */ e("div", { class: "super-chat-input-container", children: [
    /* @__PURE__ */ e(
      "textarea",
      {
        ref: i,
        class: "super-chat-input",
        value: s,
        onInput: d,
        onKeyDown: c,
        placeholder: l,
        disabled: !r,
        rows: 1
      }
    ),
    /* @__PURE__ */ e(
      "button",
      {
        class: "super-chat-send",
        onClick: o,
        disabled: !r || !s.trim(),
        title: "Send message",
        children: n !== "ready" ? /* @__PURE__ */ e("span", { class: "super-chat-send__spinner" }) : /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ e("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
          /* @__PURE__ */ e("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
        ] })
      }
    )
  ] });
}
const _u = [
  "Does this patient have malnutrition?",
  "What are the PDPM opportunities?",
  "Look for IV fluids in hospital docs",
  "What medications is this patient on?"
];
function gu({ patientId: t, onClose: n }) {
  const { messages: s, status: a, send: i, clear: r } = Jd(t), [o, c] = v(null), d = ee(null);
  G(() => {
    d.current && (d.current.scrollTop = d.current.scrollHeight);
  }, [s]);
  const l = F((u) => {
    const m = u.target.closest('a[href^="#doc:"]');
    if (m) {
      u.preventDefault();
      const _ = m.getAttribute("href").replace("#doc:", "").split(":");
      c({ docId: _[0], page: parseInt(_[1], 10) || 1 });
      return;
    }
    u.target.closest('a[href^="#viewer:"]') && u.preventDefault();
  }, []), p = F((u) => {
    i(u);
  }, [i]);
  return /* @__PURE__ */ e(K, { children: [
    /* @__PURE__ */ e("div", { class: "super-chat-overlay", onClick: (u) => {
      u.target.classList.contains("super-chat-overlay") && n();
    }, children: /* @__PURE__ */ e("div", { class: "super-chat-overlay__panel", children: [
      /* @__PURE__ */ e("div", { class: "super-chat-header", children: [
        /* @__PURE__ */ e("div", { class: "super-chat-header__left", children: [
          /* @__PURE__ */ e("div", { class: "super-chat-header__sparkle", children: /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ e("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" }) }) }),
          /* @__PURE__ */ e("span", { class: "super-chat-header__title", children: "AI Assistant" }),
          /* @__PURE__ */ e("span", { class: "super-chat-header__patient", children: "Doe, Jane" })
        ] }),
        /* @__PURE__ */ e("div", { class: "super-chat-header__actions-right", children: [
          /* @__PURE__ */ e("button", { class: "super-chat-header__btn", onClick: r, title: "New Chat", children: /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
            /* @__PURE__ */ e("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
            /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
          ] }) }),
          /* @__PURE__ */ e("button", { class: "super-chat-header__btn", onClick: n, title: "Close", children: /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
            /* @__PURE__ */ e("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            /* @__PURE__ */ e("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "super-chat-messages", ref: d, onClick: l, children: s.length === 0 ? (
        // Custom demo empty state with our specific suggestions
        /* @__PURE__ */ e("div", { class: "super-chat-empty", children: [
          /* @__PURE__ */ e("div", { class: "super-chat-empty__icon", children: "✨" }),
          /* @__PURE__ */ e("div", { class: "super-chat-empty__title", children: "Hi, I'm your AI assistant" }),
          /* @__PURE__ */ e("div", { class: "super-chat-empty__text", children: "I can search clinical notes, hospital records, labs, medications, and help analyze MDS coding opportunities." }),
          /* @__PURE__ */ e("div", { class: "super-chat-empty__suggestions", children: _u.map((u) => /* @__PURE__ */ e(
            "button",
            {
              class: "super-chat-empty__suggestion",
              onClick: () => p(u),
              children: u
            },
            u
          )) })
        ] })
      ) : /* @__PURE__ */ e(K, { children: [
        s.map((u, m) => u.role === "user" ? /* @__PURE__ */ e(su, { content: u.content }, m) : /* @__PURE__ */ e(mu, { message: u }, m)),
        a === "submitted" && /* @__PURE__ */ e("div", { class: "super-chat-message super-chat-message--assistant", children: /* @__PURE__ */ e("div", { class: "super-chat-typing", children: [
          /* @__PURE__ */ e("div", { class: "super-chat-typing__dots", children: [
            /* @__PURE__ */ e("div", { class: "super-chat-typing__dot" }),
            /* @__PURE__ */ e("div", { class: "super-chat-typing__dot" }),
            /* @__PURE__ */ e("div", { class: "super-chat-typing__dot" })
          ] }),
          /* @__PURE__ */ e("span", { children: "Analyzing patient data..." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ e(hu, { onSend: i, status: a })
    ] }) }),
    o && /* @__PURE__ */ e(
      Xd,
      {
        docId: o.docId,
        page: o.page,
        highlightText: !0,
        onClose: () => c(null)
      }
    )
  ] });
}
function fu({
  onOpenMds: t,
  onOpenQm: n,
  onOpen24hr: s,
  onOpenChat: a,
  mdsBadgeCount: i = 0
}) {
  const [r, o] = v(!1), c = ee(null);
  G(() => {
    if (!r) return;
    const l = (p) => {
      c.current && !c.current.contains(p.target) && o(!1);
    };
    return document.addEventListener("click", l, !0), () => document.removeEventListener("click", l, !0);
  }, [r]);
  const d = (l) => (p) => {
    p.stopPropagation(), o(!1), l?.();
  };
  return /* @__PURE__ */ e(
    "div",
    {
      id: "super-bubbles-container",
      ref: c,
      class: r ? "super-dial--open" : "",
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            id: "super-chat-action",
            type: "button",
            class: "super-dial__action super-dial__action--chat",
            "aria-label": "Open Chat",
            onClick: d(a),
            children: /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            id: "super-mds-action",
            type: "button",
            class: "super-dial__action super-dial__action--mds",
            "aria-label": "Open Dashboard",
            onClick: d(t),
            children: [
              /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
                /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7" }),
                /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7" }),
                /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7" }),
                /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7" })
              ] }),
              i > 0 && /* @__PURE__ */ e("span", { class: "super-dial__action-badge", children: i > 99 ? "99+" : i })
            ]
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            id: "super-qm-action",
            type: "button",
            class: "super-dial__action super-dial__action--qm",
            "aria-label": "QM Board",
            onClick: d(n),
            children: /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ e("path", { d: "M9 11l3 3L22 4" }),
              /* @__PURE__ */ e("path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" })
            ] })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            id: "super-24hr-action",
            type: "button",
            class: "super-dial__action super-dial__action--24hr",
            "aria-label": "24-Hour Report",
            onClick: d(s),
            children: "24H"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            id: "super-bubble-main",
            type: "button",
            class: "super-bubble__main",
            "aria-label": "Super",
            onClick: (l) => {
              l.stopPropagation(), o((p) => !p);
            },
            children: "S"
          }
        )
      ]
    }
  );
}
const mt = "SUNNY MEADOWS DEMO FACILITY", Qt = "demo-org", yu = {
  I0100: { status: "match", label: "+ Super: No" },
  I0200: { status: "match", label: "+ Super: Yes" },
  I0300: { status: "match", label: "+ Super: No" },
  I0400: { status: "mismatch", label: "X Super: No" },
  I0500: { status: "match", label: "+ Super: No" },
  I0600: { status: "match", label: "+ Super: No" },
  I0700: { status: "match", label: "+ Super: Yes" },
  I0800: { status: "match", label: "+ Super: No" },
  I0900: { status: "review", label: "! Super: Needs Review" },
  I1100: { status: "match", label: "+ Super: No" },
  I1200: { status: "match", label: "+ Super: Yes" },
  I2000: { status: "match", label: "+ Super: Yes" },
  I2100: { status: "match", label: "+ Super: Yes" },
  I2300: { status: "match", label: "+ Super: No" },
  I2900: { status: "match", label: "+ Super: No" },
  I4200: { status: "match", label: "+ Super: Yes" },
  I4300: { status: "match", label: "+ Super: No" },
  I4400: { status: "match", label: "+ Super: No" },
  I4500: { status: "match", label: "+ Super: No" },
  I4900: { status: "match", label: "+ Super: No" },
  I5100: { status: "match", label: "+ Super: No" },
  I5200: { status: "match", label: "+ Super: No" },
  I5250: { status: "match", label: "+ Super: No" },
  I5300: { status: "match", label: "+ Super: No" },
  I5350: { status: "match", label: "+ Super: No" },
  I5400: { status: "match", label: "+ Super: No" },
  I5500: { status: "match", label: "+ Super: No" },
  I5600: { status: "match", label: "+ Super: Yes" },
  I5700: { status: "match", label: "+ Super: No" },
  I5800: { status: "match", label: "+ Super: No" },
  I5900: { status: "match", label: "+ Super: No" },
  I5950: { status: "match", label: "+ Super: No" },
  I6000: { status: "match", label: "+ Super: No" },
  I6100: { status: "match", label: "+ Super: No" },
  I6200: { status: "match", label: "+ Super: No" },
  I6300: { status: "match", label: "+ Super: No" },
  I6500: { status: "match", label: "+ Super: No" },
  I7900: { status: "match", label: "+ Super: No" },
  I8000: { status: "match", label: "+ Super: None" }
};
function vu({ toast: t, onDismiss: n }) {
  if (!t) return null;
  const s = {
    success: { bg: "#ecfdf5", border: "#6ee7b7", text: "#065f46" },
    error: { bg: "#fef2f2", border: "#fca5a5", text: "#991b1b" },
    info: { bg: "#eff6ff", border: "#93c5fd", text: "#1e40af" },
    warning: { bg: "#fffbeb", border: "#fcd34d", text: "#92400e" }
  }, a = s[t.type] || s.info;
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        position: "fixed",
        bottom: "96px",
        right: "24px",
        zIndex: 2e5,
        padding: "10px 16px",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: 500,
        background: a.bg,
        color: a.text,
        border: `1px solid ${a.border}`,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        maxWidth: "340px",
        animation: "fadeInUp 0.2s ease"
      },
      onClick: n,
      children: t.message
    }
  );
}
function bu() {
  const [t, n] = v(null), [s, a] = v(null), [i, r] = v(null), [o, c] = v(null), [d, l] = v(null), p = ee(null), u = ee([]);
  G(() => {
    [
      "#superPanel",
      "#superPopover",
      "#superModal",
      ".super-side-panel",
      ".super-popover-panel",
      ".super-modal-overlay",
      "#super-fab-old",
      ".super-fab",
      ".super-menu-fab",
      "#super-menu-fab",
      "#super-chat-button",
      ".super-chat-fab",
      "#super-chat-panel",
      ".super-chat-panel",
      "#super-menu-panel",
      ".super-menu-panel",
      "#notesModal",
      ".super-modal"
    ].forEach((f) => {
      document.querySelectorAll(f).forEach((b) => {
        b.style.display = "none";
      });
    });
  }, []), G(() => {
    function g(f) {
      const b = f.detail?.code;
      b && (n("itemPopover"), a({
        mdsItem: b,
        categoryKey: b,
        itemName: wu(b)
      }));
    }
    return window.addEventListener("demo:badge-click", g), () => window.removeEventListener("demo:badge-click", g);
  }, []), G(() => {
    document.querySelectorAll(".super-badge").forEach((f) => f.remove());
    const g = [];
    for (const [f, b] of Object.entries(yu)) {
      const y = document.getElementById(`${f}_wrapper`);
      if (!y) continue;
      const I = y.querySelector(".question_label");
      if (!I || I.querySelector(".super-badge")) continue;
      const D = document.createElement("span");
      D.className = `super-badge super-badge--${b.status}`, D.textContent = b.label, D.setAttribute("data-mds-item", f), D.style.cssText = `
        display: inline-flex; align-items: center; gap: 4px;
        padding: 3px 8px; border-radius: 4px; font-size: 11px;
        font-weight: 600; cursor: pointer; margin-left: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        vertical-align: middle;
      `, b.status === "match" ? (D.style.background = "#dcfce7", D.style.color = "#166534", D.style.border = "1px solid #86efac") : b.status === "mismatch" ? (D.style.background = "#fee2e2", D.style.color = "#991b1b", D.style.border = "1px solid #fca5a5") : b.status === "review" && (D.style.background = "#fef3c7", D.style.color = "#92400e", D.style.border = "1px solid #fcd34d"), D.addEventListener("click", (T) => {
        T.stopPropagation(), T.preventDefault(), window.dispatchEvent(new CustomEvent("demo:badge-click", { detail: { code: f } }));
      }), D.addEventListener("mouseenter", () => {
        D.style.transform = "translateY(-1px)", D.style.boxShadow = "0 2px 6px rgba(0,0,0,0.12)";
      }), D.addEventListener("mouseleave", () => {
        D.style.transform = "", D.style.boxShadow = "";
      });
      const k = I.querySelector(":scope > b");
      k ? k.appendChild(D) : I.appendChild(D), g.push(D);
    }
    return u.current = g, console.log(`[PCCDemoApp] Injected ${g.length} Super badges into PCC form`), () => {
      g.forEach((f) => f.remove());
    };
  }, []), G(() => {
    function g(f) {
      const b = f.detail || {};
      r({
        scope: b.scope || "mds",
        assessmentId: b.assessmentId || "4860265",
        patientId: b.patientId,
        patientName: b.patientName,
        facilityName: mt
      }), n("pdpm");
    }
    return window.addEventListener("demo:open-pdpm", g), () => window.removeEventListener("demo:open-pdpm", g);
  }, []), G(() => {
    function g(f) {
      const { type: b, message: y } = f.detail || {};
      c({ type: b || "info", message: y || "" }), clearTimeout(p.current), p.current = setTimeout(() => c(null), 3e3);
    }
    return window.addEventListener("demo:toast", g), () => {
      window.removeEventListener("demo:toast", g), clearTimeout(p.current);
    };
  }, []), G(() => {
    window.QuerySendModal = {
      show(g) {
        g && !g.aiAnswer && (g.keyFindings || g.evidence || g.rationale || g.status) && (g = { mdsItem: g.mdsItem, description: g.description, aiAnswer: g }), l(g);
      }
    };
  }, []);
  const m = F(() => {
    n(null), a(null), r(null);
  }, []), h = F((g) => {
    g?.hide || n(null);
  }, []), _ = F(() => {
    n(null), a(null);
  }, []);
  return /* @__PURE__ */ e(K, { children: [
    t === "commandCenter" && /* @__PURE__ */ e(
      Oc,
      {
        facilityName: mt,
        orgSlug: Qt,
        onClose: h
      }
    ),
    t === "qm" && /* @__PURE__ */ e(
      gd,
      {
        facilityName: mt,
        orgSlug: Qt,
        onClose: m
      }
    ),
    t === "24hr" && /* @__PURE__ */ e(
      Fd,
      {
        facilityName: mt,
        orgSlug: Qt,
        onClose: m
      }
    ),
    t === "chat" && /* @__PURE__ */ e(
      gu,
      {
        patientId: "2657226",
        onClose: m
      }
    ),
    t === "pdpm" && i && /* @__PURE__ */ e("div", { style: Iu, children: [
      /* @__PURE__ */ e("div", { style: Du, children: [
        /* @__PURE__ */ e("span", { style: { fontWeight: 600 }, children: "PDPM Analyzer" }),
        /* @__PURE__ */ e("button", { onClick: m, style: ku, children: "×" })
      ] }),
      /* @__PURE__ */ e("div", { style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ e(Sl, { context: i, onClose: m }) })
    ] }),
    t === "itemPopover" && s && /* @__PURE__ */ e(
      Ta,
      {
        item: s,
        context: { assessmentId: "4860265" },
        onClose: _
      }
    ),
    /* @__PURE__ */ e(
      fu,
      {
        onOpenMds: () => n("commandCenter"),
        onOpenQm: () => n("qm"),
        onOpen24hr: () => n("24hr"),
        onOpenChat: () => n("chat")
      }
    ),
    d && /* @__PURE__ */ e(
      Gd,
      {
        queryData: d,
        onClose: () => l(null)
      }
    ),
    /* @__PURE__ */ e(vu, { toast: o, onDismiss: () => c(null) })
  ] });
}
function wu(t) {
  return {
    I0100: "Cancer",
    I0200: "Anemia",
    I0300: "Atrial Fibrillation / Dysrhythmias",
    I0400: "Coronary Artery Disease (CAD)",
    I0500: "Deep Venous Thrombosis (DVT)",
    I0600: "Heart Failure",
    I0700: "Hypertension (HTN)",
    I0800: "Orthostatic Hypotension",
    I0900: "Peripheral Vascular Disease (PVD)",
    I1100: "Cirrhosis",
    I1200: "GERD",
    I2000: "Diabetes Mellitus (DM)",
    I2100: "Thyroid Disorder",
    I2300: "Anemia",
    I2900: "Drug/Medication Induced Depression",
    I4200: "Multi-Drug Resistant Organism (MDRO)",
    I4300: "Diabetes with PVD",
    I4400: "Pneumonia",
    I4500: "Septicemia",
    I4900: "Schizophrenia",
    I5100: "Hemiplegia / Hemiparesis",
    I5200: "Paraplegia",
    I5250: "Quadriplegia",
    I5300: "Aphasia",
    I5350: "Non-Alzheimer Dementia",
    I5400: "Alzheimer Disease",
    I5500: "Multi-Sclerosis",
    I5600: "Malnutrition",
    I5700: "Schizophrenia",
    I5800: "Anxiety Disorder",
    I5900: "PTSD",
    I5950: "Psychotic Disorder",
    I6000: "Asthma / COPD / CLD",
    I6100: "Respiratory Failure",
    I6200: "None of the Above",
    I6300: "None of the Above",
    I6500: "Seizure / Epilepsy",
    I7900: "None of the Above",
    I8000: "Additional Diagnoses"
  }[t] || `MDS Item ${t}`;
}
const Iu = {
  position: "fixed",
  inset: "20px",
  zIndex: 1e5,
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
}, Du = {
  padding: "12px 16px",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f9fafb",
  flexShrink: 0
}, ku = {
  background: "transparent",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
  color: "#6b7280",
  padding: "0 4px",
  lineHeight: 1
}, Es = {
  I69: "Sequelae of cerebrovascular disease",
  G30: "Alzheimer's disease",
  R13: "Dysphagia",
  R47: "Speech disturbances",
  F03: "Dementia",
  F09: "Mental disorder (physiological)",
  N18: "Chronic kidney disease",
  N40: "Benign prostatic hyperplasia",
  M54: "Dorsalgia",
  M62: "Muscle disorders",
  M46: "Inflammatory spondylopathies",
  Z87: "Personal history",
  Z94: "Transplanted organ status",
  E78: "Disorders of lipoprotein metabolism",
  E11: "Type 2 diabetes mellitus",
  E66: "Overweight and obesity",
  G47: "Sleep disorders",
  K21: "Gastro-esophageal reflux disease",
  I10: "Essential hypertension",
  I49: "Cardiac arrhythmias",
  J44: "COPD",
  J96: "Respiratory failure",
  R93: "Abnormal diagnostic imaging",
  R26: "Gait and mobility abnormalities",
  R27: "Coordination disorders",
  R29: "Nervous/musculoskeletal symptoms",
  R33: "Retention of urine",
  R41: "Cognitive symptoms",
  S12: "Cervical vertebra fracture",
  H91: "Hearing loss"
};
function Nu(t, n) {
  if (Es[t]) return Es[t];
  if (!n) return t;
  const s = n.split(/[,(]/)[0].trim();
  return s.length > 40 ? s.substring(0, 40) + "…" : s;
}
function jt(t) {
  let n = !1, s = !1;
  for (const a of t || [])
    if (a.category === "nta" && (n = !0), a.category === "slp" && (s = !0), n && s) break;
  return { nta: n, slp: s };
}
function Cu({ topRanked: t, approved: n, annotations: s }) {
  const a = (t || []).map((c) => ({
    kind: "group",
    key: `t:${c.groupId}`,
    origin: "topRanked",
    rank: c.rank,
    code: c.groupCode,
    description: c.groupName,
    badges: jt(c.annotations || []),
    group: c
  })), i = (n || []).map((c) => ({
    kind: "group",
    key: `a:${c.groupId}`,
    origin: "approved",
    code: c.groupCode,
    description: c.groupName,
    badges: jt(c.annotations || []),
    group: c
  })), r = { other: {}, speculative: {} };
  for (const c of s || []) {
    const d = (c.icd10Code || "").substring(0, 3);
    if (!d) continue;
    const l = c.category === "speculative" ? "speculative" : "other";
    r[l][d] || (r[l][d] = { baseCode: d, items: [], description: "" }), r[l][d].items.push(c), !r[l][d].description && c.description && (r[l][d].description = c.description);
  }
  const o = (c, d) => Object.values(c).map((l) => ({
    kind: "baseCode",
    key: `${d}:${l.baseCode}`,
    origin: d === "s" ? "speculative" : "other",
    code: l.baseCode,
    description: Nu(l.baseCode, l.description),
    badges: jt(l.items),
    count: l.items.length,
    baseCode: l.baseCode,
    items: l.items
  })).sort((l, p) => p.count - l.count || l.code.localeCompare(p.code));
  return {
    topPicks: a,
    approved: i,
    other: o(r.other, "o"),
    speculative: o(r.speculative, "s")
  };
}
function Kt(t) {
  return [
    ...t.topPicks,
    ...t.other,
    ...t.speculative,
    ...t.approved
  ];
}
function Su(t) {
  return t.topPicks.length ? t.topPicks[0].key : t.other.length ? t.other[0].key : t.speculative.length ? t.speculative[0].key : t.approved.length ? t.approved[0].key : null;
}
function $s(t) {
  if (!t) return null;
  if (t.kind === "group") {
    const n = t.group;
    return {
      category: t.origin,
      groupId: n.groupId,
      baseCode: n.groupCode,
      groupName: n.groupName,
      evidenceStrength: n.evidenceStrength || null,
      rationale: n.rationale || null,
      items: n.annotations || []
    };
  }
  return {
    category: t.origin,
    baseCode: t.baseCode,
    items: t.items
  };
}
function hn({ name: t }) {
  return t === "check" ? j(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    j("polyline", { points: "20 6 9 17 4 12" })
  ) : t === "alert" ? j(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    j("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
    j("line", { x1: 12, y1: 9, x2: 12, y2: 13 }),
    j("line", { x1: 12, y1: 17, x2: 12.01, y2: 17 })
  ) : t === "star" ? j(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    j("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
  ) : t === "chevron" ? j(
    "svg",
    { width: 12, height: 12, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    j("polyline", { points: "6 9 12 15 18 9" })
  ) : null;
}
function ht({ row: t, selected: n, onClick: s }) {
  const a = ["icd10-sb__row"];
  return n && a.push("icd10-sb__row--selected"), t.rank != null && a.push("icd10-sb__row--ranked"), j(
    "div",
    {
      class: a.join(" "),
      onClick: () => s(t.key)
    },
    t.rank != null && j("span", { class: "icd10-sb__rank" }, `#${t.rank}`),
    j("span", { class: "icd10-sb__code" }, t.code),
    j("span", { class: "icd10-sb__desc", title: t.description }, t.description),
    (t.badges.nta || t.badges.slp) && j(
      "span",
      { class: "icd10-sb__badges" },
      t.badges.nta && j("span", { class: "icd10-sb__badge icd10-sb__badge--nta" }, "NTA"),
      t.badges.slp && j("span", { class: "icd10-sb__badge icd10-sb__badge--slp" }, "SLP")
    )
  );
}
function Rs({ label: t, count: n, icon: s, open: a, onToggle: i, variant: r }) {
  const o = ["icd10-sb__section-hdr", "icd10-sb__section-hdr--collapsible"];
  return r && o.push(`icd10-sb__section-hdr--${r}`), j(
    "button",
    {
      type: "button",
      class: o.join(" "),
      onClick: i,
      "aria-expanded": a
    },
    s && j("span", { class: "icd10-sb__section-icon" }, j(hn, { name: s })),
    j("span", { class: "icd10-sb__section-label" }, t),
    j("span", { class: "icd10-sb__section-count" }, n),
    j(
      "span",
      { class: `icd10-sb__section-chevron ${a ? "icd10-sb__section-chevron--open" : ""}` },
      j(hn, { name: "chevron" })
    )
  );
}
function qs({ label: t, icon: n }) {
  return j(
    "div",
    { class: "icd10-sb__section-hdr icd10-sb__section-hdr--static" },
    n && j("span", { class: "icd10-sb__section-icon" }, j(hn, { name: n })),
    j("span", { class: "icd10-sb__section-label" }, t)
  );
}
function xu({ topRanked: t = [], approved: n = [], annotations: s = [], onSelect: a }) {
  const [i, r] = v(!1), [o, c] = v(!1), [d, l] = v(null), p = ee(null), u = Z(
    () => Cu({ topRanked: t, approved: n, annotations: s }),
    [t, n, s]
  ), m = Z(() => {
    const b = /* @__PURE__ */ new Set();
    for (const y of Kt(u)) b.add(y.key);
    return b;
  }, [u]);
  G(() => {
    if (d && m.has(d) ? d : null) return;
    const y = Su(u);
    if (!y || p.current === y) return;
    p.current = y, l(y);
    const I = Kt(u).find((D) => D.key === y);
    I && a && a($s(I));
  }, [u, d, m, a]);
  const h = (b) => {
    l(b);
    const y = Kt(u).find((I) => I.key === b);
    y && a && a($s(y));
  }, _ = u.approved.length > 0, g = u.other.length > 0, f = u.speculative.length > 0;
  return j(
    "div",
    { class: "icd10-sb" },
    _ && j(
      "section",
      { class: "icd10-sb__section" },
      j(Rs, {
        label: "Approved",
        count: u.approved.length,
        icon: "check",
        open: i,
        onToggle: () => r((b) => !b)
      }),
      i && j(
        "div",
        { class: "icd10-sb__section-body" },
        u.approved.map(
          (b) => j(ht, { key: b.key, row: b, selected: d === b.key, onClick: h })
        )
      )
    ),
    j(
      "section",
      { class: "icd10-sb__section" },
      j(qs, { label: "Top picks", icon: "star" }),
      j(
        "div",
        { class: "icd10-sb__section-body" },
        u.topPicks.length > 0 ? u.topPicks.map(
          (b) => j(ht, { key: b.key, row: b, selected: d === b.key, onClick: h })
        ) : j("div", { class: "icd10-sb__empty" }, "No suggestions yet")
      )
    ),
    g && j(
      "section",
      { class: "icd10-sb__section" },
      j(qs, { label: "Other suggestions" }),
      j(
        "div",
        { class: "icd10-sb__section-body" },
        u.other.map(
          (b) => j(ht, { key: b.key, row: b, selected: d === b.key, onClick: h })
        )
      )
    ),
    f && j(
      "section",
      { class: "icd10-sb__section" },
      j(Rs, {
        label: "Speculative",
        count: u.speculative.length,
        icon: "alert",
        open: o,
        onToggle: () => c((b) => !b),
        variant: "warning"
      }),
      o && j(
        "div",
        { class: "icd10-sb__section-body" },
        u.speculative.map(
          (b) => j(ht, { key: b.key, row: b, selected: d === b.key, onClick: h })
        )
      )
    )
  );
}
function Pu({ patientId: t, facilityName: n, orgSlug: s, assessmentId: a }) {
  const [i, r] = v(null), [o, c] = v(!0), [d, l] = v(null), [p, u] = v(null), m = F(async () => {
    c(!0), l(null);
    try {
      const I = new URLSearchParams({ facilityName: n, orgSlug: s });
      a && I.set("externalAssessmentId", a), t && I.set("patientExternalId", t);
      const D = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/ard-recommendation?${I}`
      });
      if (!D.success)
        throw new Error(D.error || "Failed to fetch ARD recommendation");
      const k = D.data || D;
      if (k.success === !1)
        throw new Error(k.error || "Failed to fetch ARD recommendation");
      r(k), k.recommendedDayNumber && u((T) => T ?? k.recommendedDayNumber);
    } catch (I) {
      console.error("[ArdEstimator] Fetch error:", I), l(I.message || "Failed to load ARD recommendation");
    } finally {
      c(!1);
    }
  }, [t, n, s, a]);
  G(() => {
    (t || a) && m();
  }, [m]), G(() => {
    const I = () => m();
    return window.addEventListener("super:query-sent", I), window.addEventListener("super:item-decision", I), () => {
      window.removeEventListener("super:query-sent", I), window.removeEventListener("super:item-decision", I);
    };
  }, [m]);
  const h = i?.scores?.find((I) => I.dayNumber === p) || null, _ = i?.classifiedItems || [], g = _.filter(
    (I) => I.classification === "time_sensitive_captured" || I.classification === "time_sensitive_at_risk" || I.classification === "time_sensitive_missed"
  ), f = _.filter(
    (I) => I.classification === "needs_review"
  ), b = _.filter(
    (I) => I.classification === "item_to_query"
  ), y = _.filter(
    (I) => I.classification === "always_captured" && Tu(I)
  );
  return {
    result: i,
    loading: o,
    error: d,
    selectedDay: p,
    setSelectedDay: u,
    selectedScore: h,
    timeSensitiveItems: g,
    needsReviewItems: f,
    queryItems: b,
    alwaysCapturedItems: y,
    refetch: m
  };
}
function Tu(t) {
  return t.ntaPoints !== null && t.ntaPoints > 0 || !!t.nursingInfo || t.pdpmComponents.length > 0;
}
function Au(t) {
  if (!t) return "";
  const n = t.split("-");
  return n.length !== 3 ? t : `${parseInt(n[1])}/${parseInt(n[2])}`;
}
function Mu({
  scores: t,
  selectedDay: n,
  recommendedDay: s,
  onSelectDay: a,
  ganttItems: i
}) {
  return !t || t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "ard-est__day-picker", children: [
    /* @__PURE__ */ e("h3", { className: "ard-est__section-label", children: "Pick ARD Date" }),
    /* @__PURE__ */ e("div", { className: "ard-est__timeline", children: [
      /* @__PURE__ */ e("div", { className: "ard-est__timeline-row", children: [
        /* @__PURE__ */ e("div", { className: "ard-est__timeline-label" }),
        /* @__PURE__ */ e("div", { className: "ard-est__timeline-grid", children: t.map((r) => {
          const o = r.dayNumber === n, c = r.dayNumber === s;
          let d = "ard-est__day-btn";
          return o ? d += " ard-est__day-btn--selected" : c && (d += " ard-est__day-btn--recommended"), /* @__PURE__ */ e(
            "button",
            {
              className: d,
              onClick: () => a(r.dayNumber),
              title: `Day ${r.dayNumber}: ${r.date}`,
              children: [
                /* @__PURE__ */ e("span", { className: "ard-est__day-num", children: [
                  "D",
                  r.dayNumber
                ] }),
                /* @__PURE__ */ e("span", { className: "ard-est__day-date", children: Au(r.date) }),
                c && !o && /* @__PURE__ */ e("span", { className: "ard-est__day-best", children: "BEST" })
              ]
            },
            r.dayNumber
          );
        }) })
      ] }),
      i.map((r, o) => {
        const c = r.firstAdministered && r.lastAdministered, d = r.classification === "needs_review";
        return /* @__PURE__ */ e(
          "div",
          {
            className: "ard-est__timeline-row",
            children: [
              /* @__PURE__ */ e("div", { className: "ard-est__timeline-label", title: r.description, children: [
                /* @__PURE__ */ e("span", { className: "ard-est__timeline-label-text", children: r.description }),
                r.ntaPoints > 0 && /* @__PURE__ */ e("span", { className: "ard-est__timeline-label-pts", children: [
                  "+",
                  r.ntaPoints
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "ard-est__timeline-grid", children: t.map((l) => {
                const p = l.dayNumber, u = r.capturedOnDays.includes(p), m = p === n;
                return c ? /* @__PURE__ */ e(
                  "div",
                  {
                    className: `ard-est__gantt-cell${u ? " ard-est__gantt-cell--captured" : ""}${m ? " ard-est__gantt-cell--ring" : ""}`,
                    title: `Day ${p}: ${u ? "Captured" : "Not captured"}`,
                    children: u && /* @__PURE__ */ e("span", { className: "ard-est__gantt-num", children: p })
                  },
                  p
                ) : /* @__PURE__ */ e(
                  "div",
                  {
                    className: `ard-est__gantt-cell ard-est__gantt-cell--unknown${m ? " ard-est__gantt-cell--ring" : ""}${d ? " ard-est__gantt-cell--review" : ""}`,
                    title: `${r.description}: No date range`,
                    children: /* @__PURE__ */ e("span", { className: "ard-est__gantt-q", children: "?" })
                  },
                  p
                );
              }) })
            ]
          },
          `${r.mdsItem}-${r.mdsColumn || ""}-${o}`
        );
      })
    ] })
  ] });
}
function Lu({
  result: t,
  selectedDay: n,
  timeSensitiveItems: s,
  needsReviewItems: a
}) {
  if (!t || !n) return null;
  const i = n === t.recommendedDayNumber, r = new Set(t.scores.map((u) => u.estimatedPpd)).size === 1, o = t.scores.find((u) => u.dayNumber === n), c = t.scores.find((u) => u.dayNumber === t.recommendedDayNumber), d = [...s, ...a];
  let l = "";
  if (r && d.length === 0)
    l = "Any date works — no time-sensitive items found. All PDPM value comes from diagnoses captured regardless of ARD date.";
  else if (r && a.length > 0 && s.length === 0) {
    const u = a.slice(0, 3).map((m) => m.description).join(", ");
    l = `All dates produce the same score. ${a.length} possible item${a.length > 1 ? "s" : ""} (${u}) — confirm dates to refine.`;
  } else if (i) {
    const u = n + 1, m = d.filter(
      (h) => h.capturedOnDays.includes(n) && !h.capturedOnDays.includes(u)
    );
    if (m.length > 0) {
      const h = m.map((g) => {
        const f = [];
        return g.nursingInfo && f.push(g.nursingInfo.mainCategory + " nursing"), g.ntaPoints && g.ntaPoints > 0 && f.push(`+${g.ntaPoints} NTA`), g.pdpmComponents.length > 0 && !g.nursingInfo && !g.ntaPoints && f.push(g.pdpmComponents.join("/")), `${g.description}${f.length ? ` (${f.join(", ")})` : ""}`;
      }).join("; ");
      l = `Recommended. ${n >= 8 ? "A later ARD" : `Day ${u}+`} would lose: ${h}.`;
    } else
      l = "Recommended. All time-sensitive items captured.";
  } else {
    const u = (o?.estimatedPpd ?? 0) - (c?.estimatedPpd ?? 0);
    if (u < -0.5) {
      const m = d.filter(
        (_) => _.capturedOnDays.includes(t.recommendedDayNumber) && !_.capturedOnDays.includes(n)
      ), h = m.map((_) => _.description).join(", ");
      l = `$${Math.abs(u).toFixed(0)}/day less than Day ${t.recommendedDayNumber}${m.length > 0 ? `. Loses: ${h}` : ""}.`;
    } else u > 0.5 ? l = `$${u.toFixed(0)}/day more than Day ${t.recommendedDayNumber}. Consider this date.` : l = `Same score as Day ${t.recommendedDayNumber}.`;
  }
  let p = "neutral";
  return i ? p = "positive" : r || (p = "warning"), /* @__PURE__ */ e("div", { className: `ard-est__rec-text ard-est__rec-text--${p}`, children: [
    /* @__PURE__ */ e("span", { className: "ard-est__rec-text-bold", children: [
      "Day ",
      n,
      " ",
      "—",
      " "
    ] }),
    l
  ] });
}
const wt = [
  { level: "NF", min: 0, max: 0 },
  { level: "NE", min: 1, max: 2 },
  { level: "ND", min: 3, max: 7 },
  { level: "NC", min: 8, max: 11 },
  { level: "NB", min: 12, max: 15 },
  { level: "NA", min: 16, max: 20 }
], Os = 20;
function Bs(t) {
  for (const n of wt)
    if (t >= n.min && t <= n.max) return n;
  return wt[wt.length - 1];
}
function Eu({ currentPoints: t, potentialPoints: n }) {
  if (t == null) return null;
  const s = n != null && n > t, a = Bs(t), i = s ? Bs(n) : null, r = Os + 1, o = Math.min((a.max + 1) / r * 100, 100), c = s ? Math.min((i.max + 1) / r * 100, 100) : 0;
  return /* @__PURE__ */ e("div", { className: "ard-est__nta-bar", children: [
    /* @__PURE__ */ e("div", { className: "ard-est__nta-track", children: [
      wt.map((d) => {
        const l = (d.max - d.min + 1) / (Os + 1) * 100;
        return /* @__PURE__ */ e(
          "div",
          {
            className: `ard-est__nta-seg${d.level === a.level ? " ard-est__nta-seg--current" : ""}`,
            style: { width: `${l}%` },
            children: /* @__PURE__ */ e("span", { className: "ard-est__nta-seg-label", children: d.level })
          },
          d.level
        );
      }),
      /* @__PURE__ */ e("div", { className: "ard-est__nta-fill", style: { width: `${o}%` } }),
      s && /* @__PURE__ */ e(
        "div",
        {
          className: "ard-est__nta-fill ard-est__nta-fill--ghost",
          style: { left: `${o}%`, width: `${c - o}%` }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "ard-est__nta-legend", children: [
      /* @__PURE__ */ e("span", { children: [
        t,
        " pts (",
        a.level,
        ")"
      ] }),
      s && /* @__PURE__ */ e("span", { className: "ard-est__nta-legend-potential", children: [
        "potential ",
        n,
        " pts (",
        i.level,
        ") if queries confirmed"
      ] })
    ] })
  ] });
}
async function $u(t, n, s, a) {
  const i = new URLSearchParams({ facilityName: s, orgSlug: a });
  n && i.set("externalAssessmentId", n);
  const r = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: `/api/extension/mds/items/${encodeURIComponent(t)}?${i}`
  });
  if (!r.success)
    throw new Error(r.error || "Failed to fetch item details");
  return r.data;
}
function Ru(t) {
  const n = t.mdsColumn;
  return n ? /^[A-Za-z0-9]{1,2}$/.test(n) ? `${t.mdsItem}${n}` : `${t.mdsItem}[${n}]` : t.mdsItem;
}
function qu(t) {
  const n = t.description || "";
  return n === t.mdsItem || n === `${t.mdsItem}[${t.mdsColumn || ""}]` || n === `${t.mdsItem}${t.mdsColumn || ""}` ? t.ntaCategoryName || t.nursingInfo?.label || n || "" : n;
}
function Ou({ item: t, componentLabel: n, isActive: s, onSelect: a, onAddQuery: i, isQueued: r }) {
  const o = t.userDecision?.decision === "disagree", c = t.solverAnswer === "needs_review" || t.classification === "needs_review", d = t.classification === "item_to_query" && !t.queryStatus, l = !!t.queryStatus, p = !c && !d && !l;
  return /* @__PURE__ */ e(
    "div",
    {
      className: `ard-est__item-row${s ? " ard-est__item-row--active" : ""}${o ? " ard-est__item-row--dismissed" : ""}`,
      role: "button",
      tabIndex: 0,
      onClick: () => a(t),
      onKeyDown: (u) => u.key === "Enter" && a(t),
      children: [
        /* @__PURE__ */ e("span", { className: "ard-est__item-code", children: Ru(t) }),
        /* @__PURE__ */ e("span", { className: "ard-est__item-desc", children: qu(t) }),
        t.ntaPoints > 0 && n === "NTA" && /* @__PURE__ */ e("span", { className: "ard-est__item-pts", children: [
          "+",
          t.ntaPoints
        ] }),
        o && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--dismissed", children: "dismissed" }),
        !o && l && /* @__PURE__ */ e("span", { className: `ard-est__status ard-est__status--${t.queryStatus}`, children: t.queryStatus }),
        !o && !l && d && !r && /* @__PURE__ */ e(
          "button",
          {
            className: "ard-est__add-query-btn",
            onClick: (u) => {
              u.stopPropagation(), i(t.mdsItem);
            },
            children: "+ Add Query"
          }
        ),
        !o && !l && d && r && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--queued", children: "queued" }),
        !o && !l && c && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--review", children: "possible" }),
        !o && p && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--coded", children: "coded" }),
        /* @__PURE__ */ e(
          "svg",
          {
            className: "ard-est__item-arrow",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /* @__PURE__ */ e("polyline", { points: "9 18 15 12 9 6" })
          }
        )
      ]
    }
  );
}
const Bu = { emerald: "positive", blue: "info", amber: "warning", slate: "neutral" };
function Hu(t, n) {
  if (t === "Nursing") {
    const s = n.nursingMainCategory;
    return s === "ES" ? "emerald" : s === "SCH" ? "blue" : "amber";
  }
  return t === "NTA" ? n.ntaPoints >= 12 ? "emerald" : n.ntaPoints >= 6 ? "blue" : "amber" : "slate";
}
function Fu({ label: t, value: n, sub: s, items: a, color: i, activeItem: r, onSelect: o, onAddQuery: c, selectedIds: d, ntaBar: l }) {
  const p = Bu[i] || "neutral";
  return /* @__PURE__ */ e("div", { className: `ard-est__comp-card ard-est__comp-card--${p}`, children: [
    /* @__PURE__ */ e("div", { className: "ard-est__comp-header", children: [
      /* @__PURE__ */ e("div", { className: "ard-est__comp-header-left", children: [
        /* @__PURE__ */ e("span", { className: "ard-est__comp-value", children: n }),
        /* @__PURE__ */ e("span", { className: "ard-est__comp-label", children: t }),
        /* @__PURE__ */ e("span", { className: "ard-est__comp-sub", children: [
          "(",
          s,
          ")"
        ] })
      ] }),
      a.length > 0 && /* @__PURE__ */ e("span", { className: "ard-est__comp-count", children: [
        a.length,
        " item",
        a.length !== 1 ? "s" : ""
      ] })
    ] }),
    l,
    a.length > 0 && /* @__PURE__ */ e("div", { className: "ard-est__comp-items", children: a.map((u, m) => /* @__PURE__ */ e(
      Ou,
      {
        item: u,
        componentLabel: t,
        isActive: r === u.mdsItem + (u.mdsColumn || ""),
        onSelect: o,
        onAddQuery: c,
        isQueued: d?.has(u.mdsItem)
      },
      `${t}-${u.mdsItem}-${m}`
    )) }),
    a.length === 0 && /* @__PURE__ */ e("div", { className: "ard-est__comp-empty", children: "No detected items" })
  ] });
}
function Gu({ score: t, allItems: n, activeItem: s, onSelectItem: a, onAddQuery: i, selectedIds: r, potentialNtaPoints: o, potentialPpd: c }) {
  if (!t) return null;
  const d = n.filter((g) => g.pdpmComponents?.includes("nursing") || g.nursingInfo), l = n.filter((g) => g.pdpmComponents?.includes("nta") || g.ntaPoints && g.ntaPoints > 0), p = n.filter((g) => g.pdpmComponents?.includes("slp")), u = n.filter((g) => g.pdpmComponents?.includes("ptot")), m = c != null && Math.abs(c - (t.estimatedPpd || 0)) > 0.5, h = m ? c - (t.estimatedPpd || 0) : 0, _ = [
    { label: "Nursing", value: t.nursingMainCategory, sub: t.nursingPaymentGroup, items: d },
    {
      label: "NTA",
      value: t.ntaLevel,
      sub: `${t.ntaPoints} pts`,
      items: l,
      ntaBar: /* @__PURE__ */ e(Eu, { currentPoints: t.ntaPoints, potentialPoints: o })
    },
    { label: "SLP", value: t.slpGroup, sub: "Speech", items: p },
    { label: "PT/OT", value: t.ptotGroup, sub: "Therapy", items: u }
  ];
  return /* @__PURE__ */ e("div", { className: "ard-est__breakdown", children: [
    /* @__PURE__ */ e("div", { className: "ard-est__breakdown-header", children: [
      /* @__PURE__ */ e("h3", { className: "ard-est__section-label", children: "PDPM Breakdown" }),
      /* @__PURE__ */ e("div", { className: "ard-est__breakdown-ppd", children: [
        /* @__PURE__ */ e("span", { className: "ard-est__breakdown-ppd-label", children: "Est." }),
        /* @__PURE__ */ e("span", { className: "ard-est__breakdown-ppd-value", children: t.estimatedPpd ? `$${t.estimatedPpd.toFixed(0)}` : "—" }),
        /* @__PURE__ */ e("span", { className: "ard-est__breakdown-ppd-unit", children: "/day" }),
        m && /* @__PURE__ */ e("span", { className: "ard-est__breakdown-potential", children: [
          "→",
          " $",
          c.toFixed(0),
          " (+$",
          h.toFixed(0),
          ")"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "ard-est__breakdown-cards", children: _.map((g) => /* @__PURE__ */ e(
      Fu,
      {
        ...g,
        color: Hu(g.label, t),
        activeItem: s,
        onSelect: a,
        onAddQuery: i,
        selectedIds: r
      },
      g.label
    )) })
  ] });
}
function Uu({ title: t, count: n, defaultOpen: s = !0, children: a }) {
  const [i, r] = v(s);
  return /* @__PURE__ */ e("div", { className: "ard-est__collapsible", children: [
    /* @__PURE__ */ e(
      "button",
      {
        className: "ard-est__collapsible-header",
        onClick: () => r(!i),
        children: [
          /* @__PURE__ */ e(
            "svg",
            {
              className: `ard-est__collapsible-chevron${i ? " ard-est__collapsible-chevron--open" : ""}`,
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              children: /* @__PURE__ */ e("polyline", { points: "9 18 15 12 9 6" })
            }
          ),
          /* @__PURE__ */ e("span", { className: "ard-est__collapsible-title", children: t }),
          /* @__PURE__ */ e("span", { className: "ard-est__collapsible-count", children: n })
        ]
      }
    ),
    i && /* @__PURE__ */ e("div", { className: "ard-est__collapsible-body", children: a })
  ] });
}
function Vu({ patientId: t, facilityName: n, orgSlug: s, assessmentId: a, onComplete: i }) {
  const [r, o] = v("idle"), [c, d] = v([]), [l, p] = v([]), [u, m] = v(null), [h, _] = v({ current: 0, total: 0 }), [g, f] = v(null), b = ee(!1), y = F(async (C) => {
    if (C.length === 0) return;
    o("generating"), f(null), _({ current: 0, total: C.length }), b.current = !1;
    const S = [];
    try {
      const w = window.QueryAPI.fetchPractitioners(n, s);
      for (let E = 0; E < C.length && !b.current; E++) {
        const P = C[E], M = P.pdpmCategoryName || P.mdsItemName || P.mdsItem;
        _({ current: E, total: C.length, currentItemName: M });
        try {
          const R = await window.QueryAPI.generateNote(
            P.mdsItem,
            P
          );
          S.push({
            item: P,
            noteText: R.note,
            preferredIcd10: R.preferredIcd10,
            icd10Options: R.icd10Options
          });
        } catch (R) {
          console.error(`[BatchQuery] Failed to generate note for ${P.mdsItem}:`, R), S.push({
            item: P,
            noteText: "",
            error: R.message
          });
        }
      }
      _({ current: C.length, total: C.length });
      try {
        const E = await w;
        p(E);
      } catch (E) {
        console.error("[BatchQuery] Failed to fetch practitioners:", E), p([]);
      }
      const O = S.filter((E) => E.noteText);
      d(O), O.length === 0 ? (f("Failed to generate any notes. Please try again."), o("idle")) : o("reviewing");
    } catch (w) {
      console.error("[BatchQuery] Generation failed:", w), f(w.message), o("idle");
    }
  }, [t, n, s, a]), I = F((C, S) => {
    d(
      (w) => w.map(
        (O) => O.item.mdsItem === C ? { ...O, noteText: S } : O
      )
    );
  }, []), D = F((C, S) => {
    d(
      (w) => w.map(
        (O) => O.item.mdsItem === C ? { ...O, selectedIcd10: S } : O
      )
    );
  }, []), k = F(async () => {
    if (!u || c.length === 0) return;
    o("sending"), f(null), _({ current: 0, total: c.length }), b.current = !1;
    const C = [];
    try {
      for (let S = 0; S < c.length && !b.current; S++) {
        const { item: w, noteText: O, selectedIcd10: E, preferredIcd10: P } = c[S];
        _({ current: S, total: c.length });
        const M = E || P?.code || null, R = M ? [{ code: M }] : w.recommendedIcd10 || [];
        try {
          const { query: B } = await window.QueryAPI.createQuery({
            patientId: t,
            facilityName: n,
            orgSlug: s,
            mdsAssessmentId: a,
            mdsItem: w.mdsItem,
            mdsItemName: w.pdpmCategoryName || w.mdsItemName || w.mdsItem,
            queryReason: w.rationale || "",
            keyFindings: w.keyFindings || [],
            queryEvidence: w.queryEvidence || w.evidence || [],
            recommendedIcd10: R,
            aiGeneratedNote: O
          });
          await window.QueryAPI.sendQuery(
            B.id,
            [u],
            O
          ), C.push({ ...B, mdsItem: w.mdsItem });
        } catch (B) {
          console.error(`[BatchQuery] Failed to create/send query for ${w.mdsItem}:`, B);
        }
      }
      if (_({ current: c.length, total: c.length }), o("complete"), i) {
        const S = l.find((O) => O.id === u), w = S ? S.firstName && S.lastName ? `${S.firstName} ${S.lastName}${S.title ? `, ${S.title}` : ""}` : S.name || "Provider" : "Provider";
        i(C, w);
      }
    } catch (S) {
      console.error("[BatchQuery] Send failed:", S), f(S.message), o("reviewing");
    }
  }, [t, n, s, a, c, u, l, i]), T = F(() => {
    o("idle"), d([]), _({ current: 0, total: 0 });
  }, []), A = F(() => {
    o("idle"), d([]), p([]), m(null), _({ current: 0, total: 0 }), f(null), b.current = !1;
  }, []), x = F(() => {
    b.current = !0;
  }, []);
  return {
    state: r,
    generatedQueries: c,
    practitioners: l,
    selectedPractitionerId: u,
    setSelectedPractitionerId: m,
    progress: h,
    error: g,
    generate: y,
    updateNote: I,
    updateIcd10: D,
    sendAll: k,
    backToSelection: T,
    reset: A,
    abort: x
  };
}
const zu = ({
  generatedQueries: t,
  practitioners: n,
  selectedPractitionerId: s,
  onSelectPractitioner: a,
  onUpdateNote: i,
  onUpdateIcd10: r,
  onSend: o,
  onBack: c,
  isSending: d,
  progress: l
}) => {
  const p = ee(null), u = ee(!1);
  G(() => {
    if (!p.current || n.length === 0 || u.current) return;
    p.current.innerHTML = "";
    const h = n.map((_) => ({
      id: _.id,
      label: Qu(_),
      subtitle: _.title || _.specialty || ""
    }));
    if (typeof window.SuperDropdown?.create == "function")
      window.SuperDropdown.create(p.current, {
        items: h,
        placeholder: "Select a practitioner...",
        searchPlaceholder: "Search practitioners...",
        onSelect: (_) => {
          a(_.id);
        }
      }), u.current = !0;
    else {
      const _ = document.createElement("select");
      _.className = "qr__physician-select-fallback", _.style.cssText = "width:100%;padding:10px 12px;border:1px solid #d0d5dd;border-radius:8px;font-size:14px;color:#344054;background:#fff;cursor:pointer;";
      const g = document.createElement("option");
      g.value = "", g.textContent = "Select a practitioner...", g.disabled = !0, g.selected = !0, _.appendChild(g), h.forEach((f) => {
        const b = document.createElement("option");
        b.value = f.id, b.textContent = f.label + (f.subtitle ? ` — ${f.subtitle}` : ""), _.appendChild(b);
      }), _.addEventListener("change", (f) => {
        a(f.target.value);
      }), p.current.appendChild(_), u.current = !0;
    }
    return () => {
      u.current = !1;
    };
  }, [n, a]);
  const m = s && t.length > 0 && !d;
  return /* @__PURE__ */ e("div", { className: "qr", children: [
    /* @__PURE__ */ e("div", { className: "qr__header", children: [
      /* @__PURE__ */ e("button", { className: "qr__back-btn", onClick: c, disabled: d, children: [
        /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ e("polyline", { points: "15 18 9 12 15 6" }) }),
        "Back"
      ] }),
      /* @__PURE__ */ e("div", { className: "qr__header-center", children: [
        /* @__PURE__ */ e("h2", { className: "qr__title", children: "Review & Send" }),
        /* @__PURE__ */ e("span", { className: "qr__badge", children: [
          t.length,
          " ",
          t.length === 1 ? "Query" : "Queries"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "qr__header-right", children: [
        d && /* @__PURE__ */ e("div", { className: "qr__sending-status", children: [
          /* @__PURE__ */ e("div", { className: "qr__sending-spinner" }),
          "Sending ",
          l.current + 1,
          "/",
          l.total
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            className: "qr__send-btn",
            disabled: !m,
            onClick: o,
            children: [
              /* @__PURE__ */ e("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
                /* @__PURE__ */ e("path", { d: "M22 2L11 13" }),
                /* @__PURE__ */ e("path", { d: "M22 2L15 22L11 13L2 9L22 2Z" })
              ] }),
              d ? "Sending..." : "Send All"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "qr__physician-bar", children: [
      /* @__PURE__ */ e("div", { className: "qr__field-label", children: [
        /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
          /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
        ] }),
        "Physician"
      ] }),
      /* @__PURE__ */ e("div", { className: "qr__physician-dropdown", ref: p })
    ] }),
    /* @__PURE__ */ e("div", { className: "qr__body", children: t.map((h, _) => /* @__PURE__ */ e(
      Wu,
      {
        gq: h,
        index: _,
        total: t.length,
        onUpdateNote: i,
        onUpdateIcd10: r,
        disabled: d
      },
      h.item.mdsItem
    )) })
  ] });
}, Wu = ({ gq: t, index: n, total: s, onUpdateNote: a, onUpdateIcd10: i, disabled: r }) => {
  const o = t.item.pdpmCategoryName || t.item.mdsItemName || t.item.mdsItem, c = Z(() => {
    const l = /* @__PURE__ */ new Set(), p = [], u = (m, h, _) => {
      !m || l.has(m) || (l.add(m), p.push({ code: m, description: h || "", source: _ }));
    };
    if (t.preferredIcd10 && u(t.preferredIcd10.code, t.preferredIcd10.description, "recommended"), t.icd10Options)
      for (const m of t.icd10Options)
        u(m.code, m.description, "ai");
    if (t.item.recommendedIcd10)
      for (const m of t.item.recommendedIcd10)
        u(m.code, m.description, "item");
    return p;
  }, [t]), d = t.selectedIcd10 || t.preferredIcd10?.code || "";
  return /* @__PURE__ */ e("div", { className: "qr__card", children: [
    /* @__PURE__ */ e("div", { className: "qr__card-header", children: [
      /* @__PURE__ */ e("span", { className: "qr__card-number", children: n + 1 }),
      /* @__PURE__ */ e("h3", { className: "qr__card-name", children: o }),
      /* @__PURE__ */ e("span", { className: "qr__card-mds", children: t.item.mdsItem })
    ] }),
    /* @__PURE__ */ e("div", { className: "qr__card-body", children: [
      c.length > 0 && /* @__PURE__ */ e("div", { className: "qr__field", children: [
        /* @__PURE__ */ e("div", { className: "qr__field-label", children: [
          /* @__PURE__ */ e("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
            /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" })
          ] }),
          "ICD-10 Code"
        ] }),
        /* @__PURE__ */ e(
          "select",
          {
            className: "qr__icd10-select",
            value: d,
            onChange: (l) => i(t.item.mdsItem, l.target.value),
            disabled: r,
            children: c.map((l) => /* @__PURE__ */ e("option", { value: l.code, children: [
              l.code,
              l.description ? ` — ${l.description}` : ""
            ] }, l.code))
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "qr__field", children: [
        /* @__PURE__ */ e("div", { className: "qr__field-label", children: [
          /* @__PURE__ */ e("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ e("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
            /* @__PURE__ */ e("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
          ] }),
          "Query Note"
        ] }),
        /* @__PURE__ */ e(
          "textarea",
          {
            className: "qr__note-textarea",
            value: t.noteText,
            onInput: (l) => a(t.item.mdsItem, l.target.value),
            disabled: r,
            rows: 5
          }
        )
      ] })
    ] }),
    t.error && /* @__PURE__ */ e("div", { className: "qr__card-error", children: t.error })
  ] });
};
function Qu(t) {
  return t.firstName && t.lastName ? `${t.firstName} ${t.lastName}${t.title ? `, ${t.title}` : ""}` : t.name || "Unknown";
}
const ju = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#34d399",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
      /* @__PURE__ */ e("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
      /* @__PURE__ */ e("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
      /* @__PURE__ */ e("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
    ]
  }
), Hs = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ e("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    ]
  }
), Fs = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ e("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
      /* @__PURE__ */ e("polyline", { points: "12 19 5 12 12 5" })
    ]
  }
), Ku = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ e("path", { d: "M22 2L11 13" }),
      /* @__PURE__ */ e("path", { d: "M22 2L15 22L11 13L2 9L22 2Z" })
    ]
  }
);
function Yu({ item: t }) {
  return /* @__PURE__ */ e("div", { className: "ard-est__item-row ard-est__item-row--compact", children: [
    /* @__PURE__ */ e("span", { className: "ard-est__item-code", children: [
      t.mdsItem,
      t.mdsColumn || ""
    ] }),
    /* @__PURE__ */ e("span", { className: "ard-est__item-desc", children: t.description }),
    t.ntaPoints > 0 && /* @__PURE__ */ e("span", { className: "ard-est__item-pts", children: [
      "+",
      t.ntaPoints,
      " NTA"
    ] }),
    t.nursingInfo && /* @__PURE__ */ e("span", { className: "ard-est__item-pts", children: t.nursingInfo.mainCategory })
  ] });
}
function Ju({ queueCount: t, batchState: n, progress: s, onClear: a, onGenerate: i }) {
  const r = n === "idle", o = n === "generating", d = o || n === "sending";
  return t === 0 && r ? null : /* @__PURE__ */ e("div", { className: "ard-est__query-queue", children: [
    r && /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("div", { className: "ard-est__queue-left", children: [
        /* @__PURE__ */ e("span", { className: "ard-est__queue-badge", children: t }),
        /* @__PURE__ */ e("span", { className: "ard-est__queue-text", children: [
          t === 1 ? "query" : "queries",
          " ready"
        ] }),
        /* @__PURE__ */ e("button", { className: "ard-est__queue-clear", onClick: a, children: "clear" })
      ] }),
      /* @__PURE__ */ e("button", { className: "ard-est__queue-send-btn", onClick: i, children: [
        /* @__PURE__ */ e(Ku, {}),
        "Send Queries"
      ] })
    ] }),
    d && /* @__PURE__ */ e("div", { className: "ard-est__batch-progress", children: [
      /* @__PURE__ */ e("div", { className: "ard-est__batch-progress-bar", children: /* @__PURE__ */ e(
        "div",
        {
          className: "ard-est__batch-progress-fill",
          style: { width: `${s.total > 0 ? s.current / s.total * 100 : 0}%` }
        }
      ) }),
      /* @__PURE__ */ e("span", { className: "ard-est__batch-progress-text", children: [
        o ? "Generating" : "Sending",
        " ",
        s.current,
        "/",
        s.total,
        "..."
      ] })
    ] })
  ] });
}
function Zu({
  patientId: t,
  patientName: n,
  facilityName: s,
  orgSlug: a,
  assessmentId: i,
  onBack: r,
  onClose: o
}) {
  const {
    result: c,
    loading: d,
    error: l,
    selectedDay: p,
    setSelectedDay: u,
    selectedScore: m,
    timeSensitiveItems: h,
    needsReviewItems: _,
    alwaysCapturedItems: g,
    refetch: f
  } = Pu({ patientId: t, facilityName: s, orgSlug: a, assessmentId: i }), [b, y] = v(!1), [I, D] = v(/* @__PURE__ */ new Set()), [k, T] = v(null), [A, x] = v(null), [C, S] = v(null), w = i || c?.externalAssessmentId;
  Z(() => (c?.classifiedItems || []).filter(
    (q) => q.classification === "item_to_query" && !q.queryStatus
  ), [c?.classifiedItems]);
  const O = F((q) => {
    D((H) => {
      const te = new Set(H);
      return te.add(q), te;
    });
  }, []);
  F((q) => {
    D((H) => {
      const te = new Set(H);
      return te.delete(q), te;
    });
  }, []);
  const E = F(() => {
    D(/* @__PURE__ */ new Set());
  }, []), P = F((q) => {
    const H = q.mdsItem + (q.mdsColumn || "");
    if (C === H) {
      S(null), x(null);
      return;
    }
    S(H), x({ item: q });
  }, [C]), M = Z(() => (c?.classifiedItems || []).filter((q) => I.has(q.mdsItem)), [c?.classifiedItems, I]), R = Vu({
    patientId: t,
    facilityName: s,
    orgSlug: a,
    assessmentId: w,
    onComplete: (q, H) => {
      E(), T({ count: q.length, practitionerName: H }), setTimeout(() => T(null), 4e3), f();
    }
  }), B = F(async () => {
    const q = [];
    for (const H of M)
      try {
        const te = H.mdsItem + (H.mdsColumn || ""), L = await $u(te, w, s, a), $ = L?.item || L;
        q.push({
          mdsItem: H.mdsItem,
          mdsItemName: H.description,
          pdpmCategoryName: H.description,
          rationale: $?.rationale || $?.queryReason || L?.diagnosisSummary || "",
          keyFindings: $?.keyFindings || [],
          evidence: $?.evidence || [],
          queryEvidence: $?.queryEvidence || $?.evidence || [],
          recommendedIcd10: $?.recommendedIcd10 || [],
          ...$
        });
      } catch (te) {
        console.error(`[ArdEstimator] Failed to fetch detail for ${H.mdsItem}:`, te), q.push({
          mdsItem: H.mdsItem,
          mdsItemName: H.description,
          pdpmCategoryName: H.description,
          rationale: H.queryPdpmImpact || "",
          keyFindings: [],
          evidence: [],
          queryEvidence: []
        });
      }
    R.generate(q);
  }, [M, w, s, a, R]), X = [...h, ..._], W = /* @__PURE__ */ e("div", { className: "ard-est__header", children: [
    /* @__PURE__ */ e("div", { className: "ard-est__header-left", children: [
      r && R.state === "idle" && /* @__PURE__ */ e("button", { className: "ard-est__back-btn", onClick: r, title: "Back", children: /* @__PURE__ */ e(Fs, {}) }),
      R.state === "reviewing" && /* @__PURE__ */ e("button", { className: "ard-est__back-btn", onClick: R.backToSelection, title: "Back to estimate", children: /* @__PURE__ */ e(Fs, {}) }),
      /* @__PURE__ */ e("div", { children: [
        /* @__PURE__ */ e("h2", { className: "ard-est__title", children: [
          /* @__PURE__ */ e(ju, {}),
          R.state === "reviewing" ? "Review & Send Queries" : "PDPM Estimate & ARD Recommendation"
        ] }),
        /* @__PURE__ */ e("p", { className: "ard-est__subtitle", children: R.state === "reviewing" ? `${R.generatedQueries.length} queries ready to send` : d ? "Loading..." : `5-Day PPS · Admitted ${c?.admissionDate || "—"}` })
      ] })
    ] }),
    m && R.state === "idle" && /* @__PURE__ */ e("div", { className: "ard-est__header-right", children: [
      /* @__PURE__ */ e("div", { className: "ard-est__header-stat", children: [
        /* @__PURE__ */ e("span", { className: "ard-est__header-stat-label", children: "HIPPS" }),
        /* @__PURE__ */ e("span", { className: "ard-est__header-stat-value ard-est__header-stat-value--hipps", children: m.hippsCode })
      ] }),
      /* @__PURE__ */ e("div", { className: "ard-est__header-stat", children: [
        /* @__PURE__ */ e("span", { className: "ard-est__header-stat-label", children: "Est." }),
        /* @__PURE__ */ e("span", { className: "ard-est__header-stat-value", children: [
          "$",
          m.estimatedPpd?.toFixed(0) || "—",
          /* @__PURE__ */ e("span", { className: "ard-est__header-stat-unit", children: "/day" })
        ] }),
        c?.potentialPpd != null && Math.abs(c.potentialPpd - (m.estimatedPpd || 0)) > 0.5 && /* @__PURE__ */ e("span", { className: "ard-est__header-potential", children: [
          "potential $",
          c.potentialPpd.toFixed(0),
          "/day"
        ] })
      ] })
    ] })
  ] });
  if (d)
    return /* @__PURE__ */ e("div", { className: "ard-est", children: [
      W,
      /* @__PURE__ */ e("div", { className: "ard-est__loading", children: [
        /* @__PURE__ */ e("div", { className: "ard-est__spinner" }),
        /* @__PURE__ */ e("p", { className: "ard-est__loading-text", children: "Calculating optimal ARD..." })
      ] })
    ] });
  if (l)
    return /* @__PURE__ */ e("div", { className: "ard-est", children: [
      W,
      /* @__PURE__ */ e("div", { className: "ard-est__error", children: [
        /* @__PURE__ */ e(Hs, {}),
        /* @__PURE__ */ e("p", { className: "ard-est__error-text", children: l }),
        /* @__PURE__ */ e("button", { className: "ard-est__error-retry", onClick: f, children: "Retry" })
      ] })
    ] });
  if (R.state === "reviewing" || R.state === "sending")
    return /* @__PURE__ */ e("div", { className: "ard-est", children: [
      W,
      /* @__PURE__ */ e("div", { className: "ard-est__body", children: /* @__PURE__ */ e(
        zu,
        {
          generatedQueries: R.generatedQueries,
          practitioners: R.practitioners,
          selectedPractitionerId: R.selectedPractitionerId,
          onSelectPractitioner: R.setSelectedPractitionerId,
          onUpdateNote: R.updateNote,
          onUpdateIcd10: R.updateIcd10,
          onSend: R.sendAll,
          onBack: R.backToSelection,
          isSending: R.state === "sending",
          progress: R.progress
        }
      ) })
    ] });
  if (A) {
    const q = {
      assessmentId: w,
      scope: "mds"
    };
    return /* @__PURE__ */ e("div", { className: "ard-est ard-est--detail-view", children: /* @__PURE__ */ e(
      Ea,
      {
        item: {
          mdsItem: A.item.mdsItem + (A.item.mdsColumn || ""),
          itemName: A.item.description,
          column: A.item.mdsColumn || ""
        },
        context: q,
        onBack: () => {
          x(null), S(null);
        },
        onDismiss: () => {
          x(null), S(null);
        }
      }
    ) });
  }
  return /* @__PURE__ */ e("div", { className: "ard-est", children: [
    W,
    k && /* @__PURE__ */ e("div", { className: "ard-est__success-banner", children: [
      /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
        /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        /* @__PURE__ */ e("polyline", { points: "22 4 12 14.01 9 11.01" })
      ] }),
      k.count,
      " quer",
      k.count === 1 ? "y" : "ies",
      " sent to ",
      k.practitionerName
    ] }),
    /* @__PURE__ */ e("div", { className: "ard-est__body", children: [
      /* @__PURE__ */ e(
        Mu,
        {
          scores: c?.scores || [],
          selectedDay: p,
          recommendedDay: c?.recommendedDayNumber,
          onSelectDay: u,
          ganttItems: X
        }
      ),
      /* @__PURE__ */ e(
        Lu,
        {
          result: c,
          selectedDay: p,
          timeSensitiveItems: h,
          needsReviewItems: _
        }
      ),
      (c?.classifiedItems || []).length === 0 && c?.sectionsMissing?.length > 0 && /* @__PURE__ */ e("div", { className: "ard-est__no-data", children: [
        /* @__PURE__ */ e("div", { className: "ard-est__no-data-icon", children: /* @__PURE__ */ e("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "#94a3b8", strokeWidth: "1.5", children: [
          /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ e("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
          /* @__PURE__ */ e("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
        ] }) }),
        /* @__PURE__ */ e("h4", { className: "ard-est__no-data-title", children: "AI Analysis Not Run Yet" }),
        /* @__PURE__ */ e("p", { className: "ard-est__no-data-text", children: [
          "The PDPM score above is based on the current MDS coding. Run the AI solver on Sections ",
          c.sectionsMissing.join(", "),
          " to get item-level recommendations, ARD optimization, and query suggestions."
        ] })
      ] }),
      (c?.classifiedItems || []).length > 0 && /* @__PURE__ */ e(
        Gu,
        {
          score: m,
          allItems: c?.classifiedItems || [],
          activeItem: C,
          onSelectItem: P,
          onAddQuery: O,
          selectedIds: I,
          potentialNtaPoints: c?.potentialNtaPoints,
          potentialPpd: c?.potentialPpd
        }
      ),
      g.length > 0 && /* @__PURE__ */ e(
        Uu,
        {
          title: "Already Captured (PDPM items)",
          count: g.length,
          defaultOpen: !1,
          children: g.map((q, H) => /* @__PURE__ */ e(Yu, { item: q }, `cap-${q.mdsItem}-${H}`))
        }
      ),
      (c?.classifiedItems || []).length > 0 && c?.sectionsMissing?.length > 0 && /* @__PURE__ */ e("div", { className: "ard-est__warning", children: [
        /* @__PURE__ */ e(Hs, {}),
        /* @__PURE__ */ e("span", { children: [
          "Missing solver data for Section",
          c.sectionsMissing.length > 1 ? "s" : "",
          " ",
          c.sectionsMissing.join(", "),
          ". Run those solvers for a more complete recommendation."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(
      Ju,
      {
        queueCount: I.size,
        batchState: R.state,
        progress: R.progress,
        onClear: E,
        onGenerate: B
      }
    )
  ] });
}
Di();
xi();
window.__DEMO_MODE = !0;
window.__preact = si;
window.__ICD10SidebarComponent = xu;
window.__ArdEstimator = Zu;
function Gs() {
  let t = document.getElementById("super-demo-root");
  t || (t = document.createElement("div"), t.id = "super-demo-root", document.body.appendChild(t)), Se(/* @__PURE__ */ e(bu, {}), t), console.log("[PCC Demo] PCCDemoApp mounted");
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Gs) : Gs();
