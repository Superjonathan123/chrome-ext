var Ve, se, ls, ps, De, un, us, ms, hs, Qt, At, Mt, _s, He = {}, gs = [], Xs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ze = Array.isArray;
function we(t, n) {
  for (var s in n) t[s] = n[s];
  return t;
}
function jt(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function F(t, n, s) {
  var a, i, r, c = {};
  for (r in n) r == "key" ? a = n[r] : r == "ref" ? i = n[r] : c[r] = n[r];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? Ve.call(arguments, 2) : s), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) c[r] === void 0 && (c[r] = t.defaultProps[r]);
  return qe(t, c, a, i, null);
}
function qe(t, n, s, a, i) {
  var r = { type: t, props: n, key: s, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++ls, __i: -1, __u: 0 };
  return i == null && se.vnode != null && se.vnode(r), r;
}
function ea() {
  return { current: null };
}
function Y(t) {
  return t.children;
}
function Oe(t, n) {
  this.props = t, this.context = n;
}
function Te(t, n) {
  if (n == null) return t.__ ? Te(t.__, t.__i + 1) : null;
  for (var s; n < t.__k.length; n++) if ((s = t.__k[n]) != null && s.__e != null) return s.__e;
  return typeof t.type == "function" ? Te(t) : null;
}
function fs(t) {
  var n, s;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++) if ((s = t.__k[n]) != null && s.__e != null) {
      t.__e = t.__c.base = s.__e;
      break;
    }
    return fs(t);
  }
}
function Et(t) {
  (!t.__d && (t.__d = !0) && De.push(t) && !rt.__r++ || un != se.debounceRendering) && ((un = se.debounceRendering) || us)(rt);
}
function rt() {
  for (var t, n, s, a, i, r, c, o = 1; De.length; ) De.length > o && De.sort(ms), t = De.shift(), o = De.length, t.__d && (s = void 0, a = void 0, i = (a = (n = t).__v).__e, r = [], c = [], n.__P && ((s = we({}, a)).__v = a.__v + 1, se.vnode && se.vnode(s), Kt(n.__P, s, a, n.__n, n.__P.namespaceURI, 32 & a.__u ? [i] : null, r, i ?? Te(a), !!(32 & a.__u), c), s.__v = a.__v, s.__.__k[s.__i] = s, bs(r, s, c), a.__e = a.__ = null, s.__e != i && fs(s)));
  rt.__r = 0;
}
function ys(t, n, s, a, i, r, c, o, l, d, u) {
  var p, m, h, _, f, g, y, v = a && a.__k || gs, S = n.length;
  for (l = ta(s, n, v, l, S), p = 0; p < S; p++) (h = s.__k[p]) != null && (m = h.__i == -1 ? He : v[h.__i] || He, h.__i = p, g = Kt(t, h, m, i, r, c, o, l, d, u), _ = h.__e, h.ref && m.ref != h.ref && (m.ref && Yt(m.ref, null, h), u.push(h.ref, h.__c || _, h)), f == null && _ != null && (f = _), (y = !!(4 & h.__u)) || m.__k === h.__k ? l = vs(h, l, t, y) : typeof h.type == "function" && g !== void 0 ? l = g : _ && (l = _.nextSibling), h.__u &= -7);
  return s.__e = f, l;
}
function ta(t, n, s, a, i) {
  var r, c, o, l, d, u = s.length, p = u, m = 0;
  for (t.__k = new Array(i), r = 0; r < i; r++) (c = n[r]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[r] = qe(null, c, null, null, null) : ze(c) ? c = t.__k[r] = qe(Y, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[r] = qe(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[r] = c, l = r + m, c.__ = t, c.__b = t.__b + 1, o = null, (d = c.__i = na(c, s, l, p)) != -1 && (p--, (o = s[d]) && (o.__u |= 2)), o == null || o.__v == null ? (d == -1 && (i > u ? m-- : i < u && m++), typeof c.type != "function" && (c.__u |= 4)) : d != l && (d == l - 1 ? m-- : d == l + 1 ? m++ : (d > l ? m-- : m++, c.__u |= 4))) : t.__k[r] = null;
  if (p) for (r = 0; r < u; r++) (o = s[r]) != null && (2 & o.__u) == 0 && (o.__e == a && (a = Te(o)), Ds(o, o));
  return a;
}
function vs(t, n, s, a) {
  var i, r;
  if (typeof t.type == "function") {
    for (i = t.__k, r = 0; i && r < i.length; r++) i[r] && (i[r].__ = t, n = vs(i[r], n, s, a));
    return n;
  }
  t.__e != n && (a && (n && t.type && !n.parentNode && (n = Te(t)), s.insertBefore(t.__e, n || null)), n = t.__e);
  do
    n = n && n.nextSibling;
  while (n != null && n.nodeType == 8);
  return n;
}
function ws(t, n) {
  return n = n || [], t == null || typeof t == "boolean" || (ze(t) ? t.some(function(s) {
    ws(s, n);
  }) : n.push(t)), n;
}
function na(t, n, s, a) {
  var i, r, c, o = t.key, l = t.type, d = n[s], u = d != null && (2 & d.__u) == 0;
  if (d === null && o == null || u && o == d.key && l == d.type) return s;
  if (a > (u ? 1 : 0)) {
    for (i = s - 1, r = s + 1; i >= 0 || r < n.length; ) if ((d = n[c = i >= 0 ? i-- : r++]) != null && (2 & d.__u) == 0 && o == d.key && l == d.type) return c;
  }
  return -1;
}
function mn(t, n, s) {
  n[0] == "-" ? t.setProperty(n, s ?? "") : t[n] = s == null ? "" : typeof s != "number" || Xs.test(n) ? s : s + "px";
}
function Ke(t, n, s, a, i) {
  var r, c;
  e: if (n == "style") if (typeof s == "string") t.style.cssText = s;
  else {
    if (typeof a == "string" && (t.style.cssText = a = ""), a) for (n in a) s && n in s || mn(t.style, n, "");
    if (s) for (n in s) a && s[n] == a[n] || mn(t.style, n, s[n]);
  }
  else if (n[0] == "o" && n[1] == "n") r = n != (n = n.replace(hs, "$1")), c = n.toLowerCase(), n = c in t || n == "onFocusOut" || n == "onFocusIn" ? c.slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + r] = s, s ? a ? s.u = a.u : (s.u = Qt, t.addEventListener(n, r ? Mt : At, r)) : t.removeEventListener(n, r ? Mt : At, r);
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
function hn(t) {
  return function(n) {
    if (this.l) {
      var s = this.l[n.type + t];
      if (n.t == null) n.t = Qt++;
      else if (n.t < s.u) return;
      return s(se.event ? se.event(n) : n);
    }
  };
}
function Kt(t, n, s, a, i, r, c, o, l, d) {
  var u, p, m, h, _, f, g, y, v, S, C, b, P, E, x, k, D, N = n.type;
  if (n.constructor !== void 0) return null;
  128 & s.__u && (l = !!(32 & s.__u), r = [o = n.__e = s.__e]), (u = se.__b) && u(n);
  e: if (typeof N == "function") try {
    if (y = n.props, v = "prototype" in N && N.prototype.render, S = (u = N.contextType) && a[u.__c], C = u ? S ? S.props.value : u.__ : a, s.__c ? g = (p = n.__c = s.__c).__ = p.__E : (v ? n.__c = p = new N(y, C) : (n.__c = p = new Oe(y, C), p.constructor = N, p.render = aa), S && S.sub(p), p.state || (p.state = {}), p.__n = a, m = p.__d = !0, p.__h = [], p._sb = []), v && p.__s == null && (p.__s = p.state), v && N.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = we({}, p.__s)), we(p.__s, N.getDerivedStateFromProps(y, p.__s))), h = p.props, _ = p.state, p.__v = n, m) v && N.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), v && p.componentDidMount != null && p.__h.push(p.componentDidMount);
    else {
      if (v && N.getDerivedStateFromProps == null && y !== h && p.componentWillReceiveProps != null && p.componentWillReceiveProps(y, C), n.__v == s.__v || !p.__e && p.shouldComponentUpdate != null && p.shouldComponentUpdate(y, p.__s, C) === !1) {
        for (n.__v != s.__v && (p.props = y, p.state = p.__s, p.__d = !1), n.__e = s.__e, n.__k = s.__k, n.__k.some(function(O) {
          O && (O.__ = n);
        }), b = 0; b < p._sb.length; b++) p.__h.push(p._sb[b]);
        p._sb = [], p.__h.length && c.push(p);
        break e;
      }
      p.componentWillUpdate != null && p.componentWillUpdate(y, p.__s, C), v && p.componentDidUpdate != null && p.__h.push(function() {
        p.componentDidUpdate(h, _, f);
      });
    }
    if (p.context = C, p.props = y, p.__P = t, p.__e = !1, P = se.__r, E = 0, v) {
      for (p.state = p.__s, p.__d = !1, P && P(n), u = p.render(p.props, p.state, p.context), x = 0; x < p._sb.length; x++) p.__h.push(p._sb[x]);
      p._sb = [];
    } else do
      p.__d = !1, P && P(n), u = p.render(p.props, p.state, p.context), p.state = p.__s;
    while (p.__d && ++E < 25);
    p.state = p.__s, p.getChildContext != null && (a = we(we({}, a), p.getChildContext())), v && !m && p.getSnapshotBeforeUpdate != null && (f = p.getSnapshotBeforeUpdate(h, _)), k = u, u != null && u.type === Y && u.key == null && (k = Is(u.props.children)), o = ys(t, ze(k) ? k : [k], n, s, a, i, r, c, o, l, d), p.base = n.__e, n.__u &= -161, p.__h.length && c.push(p), g && (p.__E = p.__ = null);
  } catch (O) {
    if (n.__v = null, l || r != null) if (O.then) {
      for (n.__u |= l ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; ) o = o.nextSibling;
      r[r.indexOf(o)] = null, n.__e = o;
    } else {
      for (D = r.length; D--; ) jt(r[D]);
      $t(n);
    }
    else n.__e = s.__e, n.__k = s.__k, O.then || $t(n);
    se.__e(O, n, s);
  }
  else r == null && n.__v == s.__v ? (n.__k = s.__k, n.__e = s.__e) : o = n.__e = sa(s.__e, n, s, a, i, r, c, l, d);
  return (u = se.diffed) && u(n), 128 & n.__u ? void 0 : o;
}
function $t(t) {
  t && t.__c && (t.__c.__e = !0), t && t.__k && t.__k.forEach($t);
}
function bs(t, n, s) {
  for (var a = 0; a < s.length; a++) Yt(s[a], s[++a], s[++a]);
  se.__c && se.__c(n, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      se.__e(r, i.__v);
    }
  });
}
function Is(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : ze(t) ? t.map(Is) : we({}, t);
}
function sa(t, n, s, a, i, r, c, o, l) {
  var d, u, p, m, h, _, f, g = s.props || He, y = n.props, v = n.type;
  if (v == "svg" ? i = "http://www.w3.org/2000/svg" : v == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), r != null) {
    for (d = 0; d < r.length; d++) if ((h = r[d]) && "setAttribute" in h == !!v && (v ? h.localName == v : h.nodeType == 3)) {
      t = h, r[d] = null;
      break;
    }
  }
  if (t == null) {
    if (v == null) return document.createTextNode(y);
    t = document.createElementNS(i, v, y.is && y), o && (se.__m && se.__m(n, r), o = !1), r = null;
  }
  if (v == null) g === y || o && t.data == y || (t.data = y);
  else {
    if (r = r && Ve.call(t.childNodes), !o && r != null) for (g = {}, d = 0; d < t.attributes.length; d++) g[(h = t.attributes[d]).name] = h.value;
    for (d in g) if (h = g[d], d != "children") {
      if (d == "dangerouslySetInnerHTML") p = h;
      else if (!(d in y)) {
        if (d == "value" && "defaultValue" in y || d == "checked" && "defaultChecked" in y) continue;
        Ke(t, d, null, h, i);
      }
    }
    for (d in y) h = y[d], d == "children" ? m = h : d == "dangerouslySetInnerHTML" ? u = h : d == "value" ? _ = h : d == "checked" ? f = h : o && typeof h != "function" || g[d] === h || Ke(t, d, h, g[d], i);
    if (u) o || p && (u.__html == p.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), n.__k = [];
    else if (p && (t.innerHTML = ""), ys(n.type == "template" ? t.content : t, ze(m) ? m : [m], n, s, a, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, r, c, r ? r[0] : s.__k && Te(s, 0), o, l), r != null) for (d = r.length; d--; ) jt(r[d]);
    o || (d = "value", v == "progress" && _ == null ? t.removeAttribute("value") : _ != null && (_ !== t[d] || v == "progress" && !_ || v == "option" && _ != g[d]) && Ke(t, d, _, g[d], i), d = "checked", f != null && f != t[d] && Ke(t, d, f, g[d], i));
  }
  return t;
}
function Yt(t, n, s) {
  try {
    if (typeof t == "function") {
      var a = typeof t.__u == "function";
      a && t.__u(), a && n == null || (t.__u = t(n));
    } else t.current = n;
  } catch (i) {
    se.__e(i, s);
  }
}
function Ds(t, n, s) {
  var a, i;
  if (se.unmount && se.unmount(t), (a = t.ref) && (a.current && a.current != t.__e || Yt(a, null, n)), (a = t.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (r) {
      se.__e(r, n);
    }
    a.base = a.__P = null;
  }
  if (a = t.__k) for (i = 0; i < a.length; i++) a[i] && Ds(a[i], n, s || typeof t.type != "function");
  s || jt(t.__e), t.__c = t.__ = t.__e = void 0;
}
function aa(t, n, s) {
  return this.constructor(t, s);
}
function Ce(t, n, s) {
  var a, i, r, c;
  n == document && (n = document.documentElement), se.__ && se.__(t, n), i = (a = typeof s == "function") ? null : s && s.__k || n.__k, r = [], c = [], Kt(n, t = (!a && s || n).__k = F(Y, null, [t]), i || He, He, n.namespaceURI, !a && s ? [s] : i ? null : n.firstChild ? Ve.call(n.childNodes) : null, r, !a && s ? s : i ? i.__e : n.firstChild, a, c), bs(r, t, c);
}
function Cs(t, n) {
  Ce(t, n, Cs);
}
function ia(t, n, s) {
  var a, i, r, c, o = we({}, t.props);
  for (r in t.type && t.type.defaultProps && (c = t.type.defaultProps), n) r == "key" ? a = n[r] : r == "ref" ? i = n[r] : o[r] = n[r] === void 0 && c != null ? c[r] : n[r];
  return arguments.length > 2 && (o.children = arguments.length > 3 ? Ve.call(arguments, 2) : s), qe(t.type, o, a || t.key, i || t.ref, null);
}
function ra(t) {
  function n(s) {
    var a, i;
    return this.getChildContext || (a = /* @__PURE__ */ new Set(), (i = {})[n.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      a = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value != r.value && a.forEach(function(c) {
        c.__e = !0, Et(c);
      });
    }, this.sub = function(r) {
      a.add(r);
      var c = r.componentWillUnmount;
      r.componentWillUnmount = function() {
        a && a.delete(r), c && c.call(r);
      };
    }), s.children;
  }
  return n.__c = "__cC" + _s++, n.__ = t, n.Provider = n.__l = (n.Consumer = function(s, a) {
    return s.children(a);
  }).contextType = n, n;
}
Ve = gs.slice, se = { __e: function(t, n, s, a) {
  for (var i, r, c; n = n.__; ) if ((i = n.__c) && !i.__) try {
    if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), c = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, a || {}), c = i.__d), c) return i.__E = i;
  } catch (o) {
    t = o;
  }
  throw t;
} }, ls = 0, ps = function(t) {
  return t != null && t.constructor === void 0;
}, Oe.prototype.setState = function(t, n) {
  var s;
  s = this.__s != null && this.__s != this.state ? this.__s : this.__s = we({}, this.state), typeof t == "function" && (t = t(we({}, s), this.props)), t && we(s, t), t != null && this.__v && (n && this._sb.push(n), Et(this));
}, Oe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Et(this));
}, Oe.prototype.render = Y, De = [], us = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ms = function(t, n) {
  return t.__v.__b - n.__v.__b;
}, rt.__r = 0, hs = /(PointerCapture)$|Capture$/i, Qt = 0, At = hn(!1), Mt = hn(!0), _s = 0;
const oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: Oe,
  Fragment: Y,
  cloneElement: ia,
  createContext: ra,
  createElement: F,
  createRef: ea,
  h: F,
  hydrate: Cs,
  get isValidElement() {
    return ps;
  },
  get options() {
    return se;
  },
  render: Ce,
  toChildArray: ws
}, Symbol.toStringTag, { value: "Module" }));
var ca = 0;
function e(t, n, s, a, i, r) {
  n || (n = {});
  var c, o, l = n;
  if ("ref" in l) for (o in l = {}, n) o == "ref" ? c = n[o] : l[o] = n[o];
  var d = { type: t, props: l, key: s, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ca, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof t == "function" && (c = t.defaultProps)) for (o in c) l[o] === void 0 && (l[o] = c[o]);
  return se.vnode && se.vnode(d), d;
}
const _e = {
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
}, da = [
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
function I(t) {
  return da.find((n) => n.patientName.startsWith(t));
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
function la(t) {
  const n = t, s = pe(n, 1), a = pe(n, 2), i = pe(n, 3), r = pe(n, 4), c = pe(n, 5), o = pe(n, 6);
  return [
    // Monday — urgent opener
    de(n, "cert_overdue", I("Coble"), {
      urgency: "overdue",
      meta: { certId: "cert_coble_01", type: "day_14_recert", status: "pending", bucket: "needs_to_send", daysOverdue: 32 }
    }),
    de(n, "cp_review_due", I("Hagerich"), {
      urgency: "warning",
      meta: { nextReviewDate: n, pccReviewId: null, pccCarePlanId: "cp_hagerich_01" }
    }),
    de(n, "query_due", I("Saffle"), {
      urgency: "warning",
      meta: { queryId: "q_saffle_01", itemCode: "I5100", status: "sent", linkedArdDate: i }
    }),
    // Tuesday — admit + sig + cp review
    de(s, "admit", I("Clark"), {
      meta: { payer: "Medicare A", location: "4-South" }
    }),
    de(s, "mds_ard", I("Clasper"), {
      meta: { assessmentId: "mds_clasper_01", pccAssessmentId: "4860311", description: "Admission + 5-Day PPS", status: "In Progress", ardDate: s }
    }),
    de(s, "cp_review_expected", I("Packoski"), {
      urgency: "warning",
      meta: { relatedArdDate: pe(s, 2), expectedType: "quarterly" }
    }),
    // Wednesday — sig change MDS + queries in flight
    de(a, "mds_ard", I("Stamper"), {
      urgency: "warning",
      meta: { assessmentId: "mds_stamper_01", pccAssessmentId: "4860312", description: "Significant Change", status: "In Progress", ardDate: a }
    }),
    de(a, "query_due", I("Schmalzriedt"), {
      meta: { queryId: "q_schmalz_01", itemCode: "I2900", status: "sent", linkedArdDate: pe(a, 5) }
    }),
    de(a, "query_due", I("Nugent"), {
      meta: { queryId: "q_nugent_01", itemCode: "J1550", status: "sent", linkedArdDate: pe(a, 6) }
    }),
    // Thursday — query due + cp review
    de(i, "query_due", I("Bruton"), {
      urgency: "warning",
      meta: { queryId: "q_bruton_01", itemCode: "I1100", status: "pending", linkedArdDate: pe(i, 2) }
    }),
    de(i, "cp_review_in_progress", I("Henstreet"), {
      meta: { startDate: pe(i, -1), targetCompletionDate: pe(i, 3), pccReviewId: "rev_henstreet_01", pccCarePlanId: "cp_henstreet_01" }
    }),
    // Friday — discharge, cp review, cert
    de(r, "discharge", I("Watkins"), {
      meta: { actionCode: "DD" }
    }),
    de(r, "cp_review_due", I("McCants"), {
      meta: { nextReviewDate: r, pccReviewId: null, pccCarePlanId: "cp_mccants_01" }
    }),
    de(r, "cert_due", I("Clappor"), {
      urgency: "warning",
      meta: { certId: "cert_clappor_01", type: "day_14_recert", status: "pending", bucket: "needs_to_send", sentAt: null }
    }),
    // Saturday — query-heavy day
    de(c, "query_due", I("Ashley"), {
      meta: { queryId: "q_ashley_01", itemCode: "I5100", status: "sent", linkedArdDate: pe(c, 4) }
    }),
    de(c, "query_due", I("Hoffie"), {
      meta: { queryId: "q_hoffie_01", itemCode: "I2900", status: "sent", linkedArdDate: pe(c, 3) }
    }),
    de(c, "query_due", I("Rogers"), {
      meta: { queryId: "q_rogers_01", itemCode: "J1550", status: "sent", linkedArdDate: pe(c, 5) }
    }),
    de(c, "query_due", I("Smith"), {
      meta: { queryId: "q_smith_01", itemCode: "O0100", status: "pending", linkedArdDate: pe(c, 6) }
    }),
    // Sunday — quiet, one cert
    de(o, "cert_due", I("Saffle"), {
      meta: { certId: "cert_saffle_01", type: "day_14_recert", status: "pending", bucket: "needs_to_send", sentAt: null }
    })
  ];
}
function pa() {
  const t = (s) => new Date(Date.now() - s * 864e5).toISOString().slice(0, 10), n = (s) => new Date(Date.now() - s * 36e5).toISOString();
  return {
    mdsCoding: {
      count: 4,
      patients: [
        { patientId: I("Stamper").patientId, patientExternalId: I("Stamper").patientExternalId, patientName: I("Stamper").patientName, status: "In Progress", description: "Significant Change", ardDate: t(2), sectionsCompleted: 12, sectionsTotal: 18, daysToCompleteBy: 12, pccAssessmentId: "4860312", assessmentId: "mds_stamper_01" },
        { patientId: I("Clasper").patientId, patientExternalId: I("Clasper").patientExternalId, patientName: I("Clasper").patientName, status: "In Progress", description: "Admission + 5-Day PPS", ardDate: t(5), sectionsCompleted: 16, sectionsTotal: 18, daysToCompleteBy: 9, pccAssessmentId: "4860311", assessmentId: "mds_clasper_01" },
        { patientId: I("Hagerich").patientId, patientExternalId: I("Hagerich").patientExternalId, patientName: I("Hagerich").patientName, status: "In Progress", description: "Quarterly", ardDate: t(12), sectionsCompleted: 15, sectionsTotal: 18, daysToCompleteBy: 2, pccAssessmentId: "4860305", assessmentId: "mds_hagerich_01" },
        { patientId: I("Saffle").patientId, patientExternalId: I("Saffle").patientExternalId, patientName: I("Saffle").patientName, status: "In Progress", description: "Annual + 5-Day PPS", ardDate: t(16), sectionsCompleted: 10, sectionsTotal: 18, daysToCompleteBy: -2, pccAssessmentId: "4860320", assessmentId: "mds_saffle_01" }
      ],
      completedRecently: {
        count: 3,
        windowDays: 7,
        patients: [
          { patientId: I("Coble").patientId, patientExternalId: I("Coble").patientExternalId, patientName: I("Coble").patientName, description: "Quarterly", ardDate: t(10), lockedAt: n(18), pccAssessmentId: "4860301", assessmentId: "mds_coble_done" },
          { patientId: I("Watkins").patientId, patientExternalId: I("Watkins").patientExternalId, patientName: I("Watkins").patientName, description: "Entry", ardDate: t(9), lockedAt: n(40), pccAssessmentId: "4860302", assessmentId: "mds_watkins_done" },
          { patientId: I("Nugent").patientId, patientExternalId: I("Nugent").patientExternalId, patientName: I("Nugent").patientName, description: "Annual", ardDate: t(13), lockedAt: n(96), pccAssessmentId: "4860303", assessmentId: "mds_nugent_done" }
        ]
      }
    },
    carePlansToOpen: {
      count: 2,
      patients: [
        { patientId: I("Clark").patientId, patientExternalId: I("Clark").patientExternalId, patientName: I("Clark").patientName, admitDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), hoursSinceAdmit: 8 },
        { patientId: I("Clasper").patientId, patientExternalId: I("Clasper").patientExternalId, patientName: I("Clasper").patientName, admitDate: new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10), hoursSinceAdmit: 52 }
      ],
      completedRecently: {
        count: 2,
        windowDays: 7,
        patients: [
          { patientId: I("Ashley").patientId, patientExternalId: I("Ashley").patientExternalId, patientName: I("Ashley").patientName, admitDate: t(5), carePlanOpenedAt: n(30), pccCarePlanId: "cp_ashley_01" },
          { patientId: I("Hoffie").patientId, patientExternalId: I("Hoffie").patientExternalId, patientName: I("Hoffie").patientName, admitDate: t(6), carePlanOpenedAt: n(62), pccCarePlanId: "cp_hoffie_01" }
        ]
      }
    },
    carePlansToReview: {
      count: 5,
      patients: [
        { patientId: I("Hagerich").patientId, patientExternalId: I("Hagerich").patientExternalId, patientName: I("Hagerich").patientName, expectedDate: new Date(Date.now() - 864e5).toISOString().slice(0, 10), state: "overdue", pccReviewId: null, pccCarePlanId: "cp_hagerich_01" },
        { patientId: I("Packoski").patientId, patientExternalId: I("Packoski").patientExternalId, patientName: I("Packoski").patientName, expectedDate: new Date(Date.now() + 864e5).toISOString().slice(0, 10), state: "expected", pccReviewId: null, pccCarePlanId: "cp_packoski_01" },
        { patientId: I("Henstreet").patientId, patientExternalId: I("Henstreet").patientExternalId, patientName: I("Henstreet").patientName, expectedDate: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10), state: "in_progress", pccReviewId: "rev_henstreet_01", pccCarePlanId: "cp_henstreet_01" },
        { patientId: I("McCants").patientId, patientExternalId: I("McCants").patientExternalId, patientName: I("McCants").patientName, expectedDate: new Date(Date.now() + 4 * 864e5).toISOString().slice(0, 10), state: "expected", pccReviewId: null, pccCarePlanId: "cp_mccants_01" },
        { patientId: I("Stamper").patientId, patientExternalId: I("Stamper").patientExternalId, patientName: I("Stamper").patientName, expectedDate: new Date(Date.now() + 5 * 864e5).toISOString().slice(0, 10), state: "expected", pccReviewId: null, pccCarePlanId: "cp_stamper_01" }
      ],
      completedRecently: {
        count: 4,
        windowDays: 7,
        patients: [
          { patientId: I("Smith").patientId, patientExternalId: I("Smith").patientExternalId, patientName: I("Smith").patientName, reviewCompletedAt: n(22), pccReviewId: "rev_smith_01", pccCarePlanId: "cp_smith_01" },
          { patientId: I("Bruton").patientId, patientExternalId: I("Bruton").patientExternalId, patientName: I("Bruton").patientName, reviewCompletedAt: n(54), pccReviewId: "rev_bruton_01", pccCarePlanId: "cp_bruton_01" },
          { patientId: I("Rogers").patientId, patientExternalId: I("Rogers").patientExternalId, patientName: I("Rogers").patientName, reviewCompletedAt: n(76), pccReviewId: "rev_rogers_01", pccCarePlanId: "cp_rogers_01" },
          { patientId: I("Schmalzriedt").patientId, patientExternalId: I("Schmalzriedt").patientExternalId, patientName: I("Schmalzriedt").patientName, reviewCompletedAt: n(120), pccReviewId: "rev_schmalz_01", pccCarePlanId: "cp_schmalz_01" }
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
          { patientId: I("Nugent").patientId, patientExternalId: I("Nugent").patientExternalId, patientName: I("Nugent").patientName, queryId: "q_nugent_done_01", itemCode: "I2100", signedAt: n(28) },
          { patientId: I("Bruton").patientId, patientExternalId: I("Bruton").patientExternalId, patientName: I("Bruton").patientName, queryId: "q_bruton_done_01", itemCode: "I5100", signedAt: n(50) },
          { patientId: I("Smith").patientId, patientExternalId: I("Smith").patientExternalId, patientName: I("Smith").patientName, queryId: "q_smith_done_01", itemCode: "J1550", signedAt: n(78) },
          { patientId: I("Clappor").patientId, patientExternalId: I("Clappor").patientExternalId, patientName: I("Clappor").patientName, queryId: "q_clappor_done_01", itemCode: "I0020", signedAt: n(130) }
        ]
      }
    },
    certs: {
      count: 12,
      needsToSend: { count: 4, upcomingCount: 2, overdueCount: 1 },
      awaitingSignature: { count: 8, overdueCount: 2 },
      overdueList: [
        { certId: "cert_ashley_01", patientId: I("Ashley").patientId, patientExternalId: I("Ashley").patientExternalId, patientName: I("Ashley").patientName, type: "day_14_recert", bucket: "awaiting_signature", dueDate: new Date(Date.now() - 4 * 864e5).toISOString().slice(0, 10), daysOverdue: 4 },
        { certId: "cert_hoffie_01", patientId: I("Hoffie").patientId, patientExternalId: I("Hoffie").patientExternalId, patientName: I("Hoffie").patientName, type: "initial", bucket: "awaiting_signature", dueDate: new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10), daysOverdue: 2 },
        { certId: "cert_rogers_01", patientId: I("Rogers").patientId, patientExternalId: I("Rogers").patientExternalId, patientName: I("Rogers").patientName, type: "day_14_recert", bucket: "needs_to_send", dueDate: new Date(Date.now() - 1 * 864e5).toISOString().slice(0, 10), daysOverdue: 1 }
      ],
      completedRecently: {
        count: 5,
        windowDays: 7,
        patients: [
          { certId: "cert_stamper_done_01", patientId: I("Stamper").patientId, patientExternalId: I("Stamper").patientExternalId, patientName: I("Stamper").patientName, type: "day_14_recert", signedAt: n(12) },
          { certId: "cert_mccants_done_01", patientId: I("McCants").patientId, patientExternalId: I("McCants").patientExternalId, patientName: I("McCants").patientName, type: "initial", signedAt: n(36) },
          { certId: "cert_watkins_done_01", patientId: I("Watkins").patientId, patientExternalId: I("Watkins").patientExternalId, patientName: I("Watkins").patientName, type: "day_30_recert", signedAt: n(60) },
          { certId: "cert_clark_done_01", patientId: I("Clark").patientId, patientExternalId: I("Clark").patientExternalId, patientName: I("Clark").patientName, type: "initial", signedAt: n(96) },
          { certId: "cert_packoski_done_01", patientId: I("Packoski").patientId, patientExternalId: I("Packoski").patientExternalId, patientName: I("Packoski").patientName, type: "day_14_recert", signedAt: n(140) }
        ]
      }
    },
    interviewsOwed: {
      count: 6,
      distinctPatientCount: 5,
      byType: { bims: 3, phq: 2, gg: 5, pain: 0 },
      patients: [
        { patientId: I("Stamper").patientId, patientExternalId: I("Stamper").patientExternalId, patientName: I("Stamper").patientName, dueType: "gg", dueDate: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10), status: "in_progress", mdsDescription: "Significant Change", pccAssessmentId: "4860312", assessmentId: "mds_stamper_01", assessmentIds: ["mds_stamper_01"] },
        { patientId: I("Clasper").patientId, patientExternalId: I("Clasper").patientExternalId, patientName: I("Clasper").patientName, dueType: "gg", dueDate: new Date(Date.now() + 1 * 864e5).toISOString().slice(0, 10), status: "in_progress", mdsDescription: "Admission + 5-Day PPS", pccAssessmentId: "4860311", assessmentId: "mds_clasper_01", assessmentIds: ["mds_clasper_01", "mds_clasper_02"] },
        { patientId: I("Saffle").patientId, patientExternalId: I("Saffle").patientExternalId, patientName: I("Saffle").patientName, dueType: "gg", dueDate: new Date(Date.now() - 1 * 864e5).toISOString().slice(0, 10), status: "not_open", mdsDescription: "Annual + 5-Day PPS", pccAssessmentId: "4860320", assessmentId: "mds_saffle_01", assessmentIds: ["mds_saffle_01"] },
        { patientId: I("Hagerich").patientId, patientExternalId: I("Hagerich").patientExternalId, patientName: I("Hagerich").patientName, dueType: "bims", dueDate: new Date(Date.now() + 3 * 864e5).toISOString().slice(0, 10), status: "not_open", mdsDescription: "Quarterly", pccAssessmentId: "4860305", assessmentId: "mds_hagerich_01", assessmentIds: ["mds_hagerich_01"] },
        { patientId: I("Nugent").patientId, patientExternalId: I("Nugent").patientExternalId, patientName: I("Nugent").patientName, dueType: "phq", dueDate: new Date(Date.now() + 4 * 864e5).toISOString().slice(0, 10), status: "not_open", mdsDescription: "5-Day PPS", pccAssessmentId: "4860318", assessmentId: "mds_nugent_01", assessmentIds: ["mds_nugent_01"] }
      ],
      completedRecently: {
        count: 7,
        windowDays: 7,
        patients: [
          { patientId: I("Coble").patientId, patientExternalId: I("Coble").patientExternalId, patientName: I("Coble").patientName, dueType: "gg", mdsDescription: "Quarterly", completedAt: n(18), pccAssessmentId: "4860301", assessmentId: "mds_coble_done" },
          { patientId: I("Coble").patientId, patientExternalId: I("Coble").patientExternalId, patientName: I("Coble").patientName, dueType: "bims", mdsDescription: "Quarterly", completedAt: n(18), pccAssessmentId: "4860301", assessmentId: "mds_coble_done" },
          { patientId: I("Nugent").patientId, patientExternalId: I("Nugent").patientExternalId, patientName: I("Nugent").patientName, dueType: "gg", mdsDescription: "Annual", completedAt: n(96), pccAssessmentId: "4860303", assessmentId: "mds_nugent_done" },
          { patientId: I("Nugent").patientId, patientExternalId: I("Nugent").patientExternalId, patientName: I("Nugent").patientName, dueType: "phq", mdsDescription: "Annual", completedAt: n(96), pccAssessmentId: "4860303", assessmentId: "mds_nugent_done" },
          { patientId: I("Watkins").patientId, patientExternalId: I("Watkins").patientExternalId, patientName: I("Watkins").patientName, dueType: "gg", mdsDescription: "Entry", completedAt: n(40), pccAssessmentId: "4860302", assessmentId: "mds_watkins_done" },
          { patientId: I("Ashley").patientId, patientExternalId: I("Ashley").patientExternalId, patientName: I("Ashley").patientName, dueType: "bims", mdsDescription: "5-Day PPS", completedAt: n(54), pccAssessmentId: "4860304", assessmentId: "mds_ashley_done" },
          { patientId: I("Hoffie").patientId, patientExternalId: I("Hoffie").patientExternalId, patientName: I("Hoffie").patientName, dueType: "gg", mdsDescription: "Quarterly", completedAt: n(140), pccAssessmentId: "4860306", assessmentId: "mds_hoffie_done" }
        ]
      }
    },
    skilledMCR: {
      count: 4,
      patients: [
        I("Clark"),
        I("Stamper"),
        I("Saffle"),
        I("Clappor")
      ].map((s) => ({ patientId: s.patientId, patientExternalId: s.patientExternalId, patientName: s.patientName }))
    },
    skilledManagedCare: {
      count: 3,
      patients: [
        I("Packoski"),
        I("Henstreet"),
        I("Bruton")
      ].map((s) => ({ patientId: s.patientId, patientExternalId: s.patientExternalId, patientName: s.patientName }))
    }
  };
}
const ua = {
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
function ma(t, n) {
  if (!n || !t?.answers) return [];
  const s = [], a = n.toLowerCase();
  return t.answers.sections.forEach((i, r) => {
    i.content.forEach((c, o) => {
      c.questions.forEach((l, d) => {
        const u = `${r}:${o}:${d}`, p = l.questionText?.toLowerCase() || "";
        if (l.value && a.includes(l.value.toLowerCase())) {
          s.push(u);
          return;
        }
        if (p && a.includes(p)) {
          s.push(u);
          return;
        }
        l.options?.forEach((m, h) => {
          m.selected && a.includes(m.text.toLowerCase()) && s.push(`${u}:${h}`);
        });
      });
    });
  }), s;
}
function ha(t, n) {
  const s = ua[t];
  if (!s)
    return { success: !1, error: `Demo: no UDA fixture for ${t}` };
  const a = t === "demo-nutrition-v3" ? ["0:0:0:0", "0:1:0:0", "0:2:0:0", "0:3:0:0"] : [], i = n ? a.length ? a : ma(s, n) : [];
  return {
    success: !0,
    data: {
      uda: s,
      matchKeys: i
    }
  };
}
function _a(t) {
  return new Promise((n) => setTimeout(n, t));
}
function ga() {
  return _a(50 + Math.random() * 150);
}
function fa(t) {
  const [n, s] = t.split("?"), a = new URLSearchParams(s || "");
  if (n === "/api/extension/mds/dashboard")
    return { success: !0, data: _e.dashboard };
  if (n === "/api/extension/mds/doc-risks")
    return { success: !0, data: _e.docRisks };
  if (n === "/api/extension/mds/ard-recommendation")
    return { success: !0, data: _e.ardRecommendation };
  if (n === "/api/extension/mds/pdpm-potential") {
    const u = a.get("externalAssessmentId"), p = _e.pdpmPotential[u];
    return p ? { success: !0, data: p } : { success: !1, error: `No PDPM data for assessment ${u}` };
  }
  const i = n.match(/\/api\/extension\/patients\/([^/]+)\/assessments/);
  if (i) {
    const u = i[1], p = _e.patientAssessments[u];
    return p ? { success: !0, data: p } : { success: !1, error: `No assessments for patient ${u}` };
  }
  const r = n.match(/\/api\/extension\/mds\/items\/([^/]+)/);
  if (r) {
    const u = decodeURIComponent(r[1]), p = _e.itemDetail[u];
    return p ? { success: !0, data: p } : {
      success: !0,
      data: {
        item: { mdsItem: u, itemName: u, description: `MDS Item ${u}`, status: "dont_code", evidence: [] },
        diagnosisSummary: null,
        treatmentSummary: null
      }
    };
  }
  if (n === "/api/extension/mds/queryable-items")
    return { success: !0, data: _e.queryableItems };
  if (n === "/api/extension/mds/queryable-items/batch-generate")
    return { success: !0, data: { generated: !0 } };
  if (n === "/api/extension/practitioners")
    return { success: !0, data: _e.practitioners };
  if (n === "/api/extension/certifications/dashboard")
    return { success: !0, data: _e.certDashboard };
  if (n === "/api/extension/certifications/practitioners")
    return { success: !0, data: _e.practitioners };
  if (n === "/api/extension/certifications/by-patient") {
    const u = a.get("patientId"), p = _e.certifications || [];
    return { success: !0, data: { certifications: u ? p.filter((h) => h.patientId === u) : p } };
  }
  const c = n.match(/\/api\/extension\/certifications\/([^/]+)\/sends/);
  if (c)
    return {
      success: !0,
      data: [{
        id: "send-1",
        certId: c[1],
        sentAt: new Date(Date.now() - 3 * 864e5).toISOString(),
        practitioner: { name: "Dr. Demo Provider" },
        method: "fax"
      }]
    };
  const o = n.match(/\/api\/extension\/certifications\/([^/]+)\/(send|skip|delay|edit-reason|unskip)/);
  if (o)
    return { success: !0, data: { certId: o[1], action: o[2] } };
  if (n === "/api/extension/certifications") {
    const u = a.get("status"), p = _e.certifications || [];
    return { success: !0, data: { certifications: u ? p.filter((h) => h.status === u) : p } };
  }
  if (n === "/api/extension/planner/week-events") {
    const u = a.get("startDate"), p = a.get("endDate");
    return !u || !p ? { success: !1, error: "Missing required param: startDate or endDate" } : {
      success: !0,
      data: {
        events: la(u),
        meta: {
          facilityName: a.get("facilityName") || "Demo Facility",
          startDate: u,
          endDate: p,
          generatedAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      }
    };
  }
  if (n === "/api/extension/planner/summary")
    return {
      success: !0,
      data: {
        summary: pa(),
        meta: { generatedAt: (/* @__PURE__ */ new Date()).toISOString() }
      }
    };
  const l = n.match(/\/api\/extension\/documents\/([^/]+)/);
  if (l)
    return {
      success: !0,
      data: {
        document: {
          id: l[1],
          title: "Clinical Document",
          documentType: "Progress Note",
          effectiveDate: "2026-01-22",
          fileSize: 245760,
          signedUrl: null
          // No real PDF in demo — viewer will show empty state
        }
      }
    };
  const d = n.match(/\/api\/extension\/patients\/([^/]+)\/uda\/([^/]+)/);
  if (d) {
    const u = d[2], p = a.get("quote") || null;
    return ha(u, p);
  }
  return console.warn("[DemoMock] Unhandled API endpoint:", n), { success: !1, error: `Demo: unhandled endpoint ${n}` };
}
async function ya(t) {
  switch (await ga(), t.type) {
    case "GET_ORG":
      return { org: "demo-org" };
    case "GET_AUTH_STATE":
      return { authenticated: !0 };
    case "API_REQUEST":
      return fa(t.endpoint);
    default:
      return console.log("[DemoMock] Unhandled message type:", t.type), {};
  }
}
function va() {
  typeof window.chrome > "u" && (window.chrome = {}), window.chrome.runtime || (window.chrome.runtime = {}), window.chrome.runtime.sendMessage = function(t, n) {
    const s = ya(t);
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
var Fe, oe, vt, _n, Ue = 0, ks = [], ce = se, gn = ce.__b, fn = ce.__r, yn = ce.diffed, vn = ce.__c, wn = ce.unmount, bn = ce.__;
function Jt(t, n) {
  ce.__h && ce.__h(oe, t, Ue || n), Ue = 0;
  var s = oe.__H || (oe.__H = { __: [], __h: [] });
  return t >= s.__.length && s.__.push({}), s.__[t];
}
function w(t) {
  return Ue = 1, wa(Ss, t);
}
function wa(t, n, s) {
  var a = Jt(Fe++, 2);
  if (a.t = t, !a.__c && (a.__ = [Ss(void 0, n), function(o) {
    var l = a.__N ? a.__N[0] : a.__[0], d = a.t(l, o);
    l !== d && (a.__N = [d, a.__[1]], a.__c.setState({}));
  }], a.__c = oe, !oe.__f)) {
    var i = function(o, l, d) {
      if (!a.__c.__H) return !0;
      var u = a.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (u.every(function(m) {
        return !m.__N;
      })) return !r || r.call(this, o, l, d);
      var p = a.__c.props !== o;
      return u.forEach(function(m) {
        if (m.__N) {
          var h = m.__[0];
          m.__ = m.__N, m.__N = void 0, h !== m.__[0] && (p = !0);
        }
      }), r && r.call(this, o, l, d) || p;
    };
    oe.__f = !0;
    var r = oe.shouldComponentUpdate, c = oe.componentWillUpdate;
    oe.componentWillUpdate = function(o, l, d) {
      if (this.__e) {
        var u = r;
        r = void 0, i(o, l, d), r = u;
      }
      c && c.call(this, o, l, d);
    }, oe.shouldComponentUpdate = i;
  }
  return a.__N || a.__;
}
function U(t, n) {
  var s = Jt(Fe++, 3);
  !ce.__s && Ns(s.__H, n) && (s.__ = t, s.u = n, oe.__H.__h.push(s));
}
function ne(t) {
  return Ue = 5, J(function() {
    return { current: t };
  }, []);
}
function J(t, n) {
  var s = Jt(Fe++, 7);
  return Ns(s.__H, n) && (s.__ = t(), s.__H = n, s.__h = t), s.__;
}
function j(t, n) {
  return Ue = 8, J(function() {
    return t;
  }, n);
}
function ba() {
  for (var t; t = ks.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(et), t.__H.__h.forEach(Lt), t.__H.__h = [];
  } catch (n) {
    t.__H.__h = [], ce.__e(n, t.__v);
  }
}
ce.__b = function(t) {
  oe = null, gn && gn(t);
}, ce.__ = function(t, n) {
  t && n.__k && n.__k.__m && (t.__m = n.__k.__m), bn && bn(t, n);
}, ce.__r = function(t) {
  fn && fn(t), Fe = 0;
  var n = (oe = t.__c).__H;
  n && (vt === oe ? (n.__h = [], oe.__h = [], n.__.forEach(function(s) {
    s.__N && (s.__ = s.__N), s.u = s.__N = void 0;
  })) : (n.__h.forEach(et), n.__h.forEach(Lt), n.__h = [], Fe = 0)), vt = oe;
}, ce.diffed = function(t) {
  yn && yn(t);
  var n = t.__c;
  n && n.__H && (n.__H.__h.length && (ks.push(n) !== 1 && _n === ce.requestAnimationFrame || ((_n = ce.requestAnimationFrame) || Ia)(ba)), n.__H.__.forEach(function(s) {
    s.u && (s.__H = s.u), s.u = void 0;
  })), vt = oe = null;
}, ce.__c = function(t, n) {
  n.some(function(s) {
    try {
      s.__h.forEach(et), s.__h = s.__h.filter(function(a) {
        return !a.__ || Lt(a);
      });
    } catch (a) {
      n.some(function(i) {
        i.__h && (i.__h = []);
      }), n = [], ce.__e(a, s.__v);
    }
  }), vn && vn(t, n);
}, ce.unmount = function(t) {
  wn && wn(t);
  var n, s = t.__c;
  s && s.__H && (s.__H.__.forEach(function(a) {
    try {
      et(a);
    } catch (i) {
      n = i;
    }
  }), s.__H = void 0, n && ce.__e(n, s.__v));
};
var In = typeof requestAnimationFrame == "function";
function Ia(t) {
  var n, s = function() {
    clearTimeout(a), In && cancelAnimationFrame(n), setTimeout(t);
  }, a = setTimeout(s, 35);
  In && (n = requestAnimationFrame(s));
}
function et(t) {
  var n = oe, s = t.__c;
  typeof s == "function" && (t.__c = void 0, s()), oe = n;
}
function Lt(t) {
  var n = oe;
  t.__c = t.__(), oe = n;
}
function Ns(t, n) {
  return !t || t.length !== n.length || n.some(function(s, a) {
    return s !== t[a];
  });
}
function Ss(t, n) {
  return typeof n == "function" ? n(t) : n;
}
function Da(t) {
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
function Rt({ uda: t, matchKeys: n, quoteText: s, onClose: a }) {
  const i = n instanceof Set ? n : new Set(n || []), r = ne(null);
  U(() => {
    if (r.current) {
      const l = setTimeout(() => {
        r.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
      return () => clearTimeout(l);
    }
  }, [t]);
  const c = t?.answers?.sections?.length ?? 0;
  let o = !1;
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
          Da(t.date)
        ] }),
        /* @__PURE__ */ e("span", { className: "super-uda-viewer__meta-item", children: [
          c,
          " section",
          c !== 1 ? "s" : ""
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
    /* @__PURE__ */ e("div", { className: "super-uda-viewer__body", children: t?.answers ? t.answers.sections.map((l, d) => /* @__PURE__ */ e("div", { className: "super-uda-viewer__section", children: [
      /* @__PURE__ */ e("div", { className: "super-uda-viewer__section-title", children: [
        l.description,
        i.size > 0 && /* @__PURE__ */ e("span", { className: "super-uda-viewer__section-match-count", children: [
          "(",
          i.size,
          " match",
          i.size !== 1 ? "es" : "",
          ")"
        ] })
      ] }),
      l.content.map((u, p) => /* @__PURE__ */ e("div", { className: "super-uda-viewer__content-group", children: [
        u.sectionTitle && u.sectionTitle !== l.description && /* @__PURE__ */ e("div", { className: "super-uda-viewer__subheader", children: u.sectionTitle }),
        u.questions.map((m, h) => {
          const _ = `${d}:${p}:${h}`, f = i.has(_), g = m.options?.some((C, b) => i.has(`${_}:${b}`)) ?? !1, y = f || g, v = y && !o;
          v && (o = !0);
          const S = m.value ?? m.options?.filter((C) => C.selected).map((C) => C.text).join("; ") ?? "";
          return /* @__PURE__ */ e(
            "div",
            {
              ref: v ? r : void 0,
              className: "super-uda-viewer__row" + (y ? " super-uda-viewer__row--highlighted" : ""),
              children: [
                /* @__PURE__ */ e("div", { className: "super-uda-viewer__row-question", children: m.questionText }),
                /* @__PURE__ */ e("div", { className: "super-uda-viewer__row-answer", children: S || /* @__PURE__ */ e("span", { className: "super-uda-viewer__row-empty", children: "—" }) })
              ]
            },
            h
          );
        })
      ] }, p))
    ] }, d)) : /* @__PURE__ */ e("div", { className: "super-uda-viewer__empty", children: "UDA answers have not been synced for this assessment." }) })
  ] });
}
async function Dn(t, n) {
  const s = window.SuperOverlay?.patientId || "2657226", a = new URLSearchParams({
    facilityName: window.SuperOverlay?.facilityName || "SUNNY MEADOWS DEMO FACILITY",
    orgSlug: "demo-org"
  });
  n && a.set("quote", n);
  const i = `/api/extension/patients/${s}/uda/${t}?${a.toString()}`, r = await chrome.runtime.sendMessage({ type: "API_REQUEST", endpoint: i });
  if (!r?.success) throw new Error(r?.error || "Failed to load UDA");
  return r.data;
}
function Ca() {
  window.__DEMO_CERT_DATA = _e.certifications || [], localStorage.setItem("CORE.org_code", "demo-org"), window.getOrg = () => ({ org: "demo-org" }), window.getChatFacilityInfo = () => "SUNNY MEADOWS DEMO FACILITY", window.getChatPatientId = () => "2657226", window.getPatientNameFromPage = () => "Doe, Jane", window.getCurrentParams = () => ({
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
      await new Promise((c) => setTimeout(c, 500 + Math.random() * 500));
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
    await new Promise((k) => setTimeout(k, 400));
    const r = !s?.includes("tar"), c = r ? "MAR" : "TAR", o = r ? "super-admin-badge--mar" : "super-admin-badge--tar", l = r ? "💊" : "⚡", u = {
      "mar-010": { name: "Aspirin 81mg PO Daily", directions: "Take by mouth once daily with food", startDate: "2025-12-20", endDate: null },
      "mar-012": { name: "Lisinopril 20mg PO Daily", directions: "Take by mouth once daily in the morning", startDate: "2025-12-15", endDate: null },
      "mar-001": { name: "Metformin 500mg PO BID", directions: "Take by mouth twice daily with meals", startDate: "2025-11-01", endDate: null },
      "doc-nutr-004": { name: "Ensure Plus 8 OZ Oral Liquid", directions: "Give 8 oz Ensure Plus by mouth twice daily with lunch and dinner for nutritional supplementation", startDate: "2026-01-22", endDate: null },
      "doc-nutr-003": { name: "Fortified Cereal 6 OZ", directions: "Give 6 oz fortified cereal by mouth once daily with breakfast to increase caloric and protein intake", startDate: "2026-01-22", endDate: null }
    }[s] || { name: "Medication Order", directions: "As directed", startDate: "2025-12-20", endDate: null }, p = [], m = new Date(2026, 0, 27);
    for (let k = 6; k >= 0; k--) {
      const D = new Date(m);
      D.setDate(D.getDate() - k), p.push(D);
    }
    const h = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], _ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], f = (k) => `${_[k.getMonth()]} ${k.getDate()}, ${k.getFullYear()}`, g = `${f(p[0])} - ${f(p[p.length - 1])}`, y = (k) => k ? new Date(k).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "", v = p.map((k) => `
      <th class="super-admin-grid__date-header">
        <div class="super-admin-grid__day">${h[k.getDay()]}</div>
        <div class="super-admin-grid__date">${_[k.getMonth()]} ${k.getDate()}</div>
      </th>
    `).join(""), C = u.name.includes("BID") ? ["0800", "1800"] : ["0800"], b = ["RN-JD", "RN-KM", "RN-TS", "LPN-AB"], P = (k) => {
      const D = parseInt(k.substring(0, 2), 10), N = k.substring(2), O = D >= 12 ? "PM" : "AM";
      return `${D > 12 ? D - 12 : D === 0 ? 12 : D}:${N} ${O}`;
    }, E = C.map((k) => {
      const D = p.map((N, O) => {
        const M = (O + (k === "1800" ? 2 : 0)) % b.length;
        return `<td class="super-admin-grid__cell super-admin-grid__cell--given">
          <span class="super-admin-grid__check">✓</span>
          <span class="super-admin-grid__initials">${b[M]}</span>
        </td>`;
      }).join("");
      return `<tr class="super-admin-grid__row">
        <td class="super-admin-grid__time">${P(k)}</td>
        ${D}
      </tr>`;
    }).join(""), x = C.length * p.length;
    n.innerHTML = `
      <div class="super-split__admin">
        <div class="super-admin-modal__header">
          <div class="super-admin-modal__title-row">
            <span class="super-admin-modal__icon">${l}</span>
            <div class="super-admin-modal__title">
              <span class="super-admin-modal__order-name">${u.name}</span>
              <span class="super-admin-badge ${o}">${c}</span>
            </div>
          </div>
          ${u.directions ? `<div class="super-admin-modal__directions">${u.directions}</div>` : ""}
          <div class="super-admin-modal__meta">
            ${C.length} time slot${C.length !== 1 ? "s" : ""}
            <span class="super-admin-modal__dates">
              Start: ${y(u.startDate)}
              ${u.endDate ? ` · Stop: ${y(u.endDate)}` : ""}
            </span>
          </div>
        </div>
        <div class="super-admin-modal__date-bar">
          <button class="super-admin-modal__nav-btn" title="Previous week">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <span class="super-admin-modal__date-range">📅 ${g}</span>
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
                  ${v}
                </tr>
              </thead>
              <tbody>
                ${E}
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
    await new Promise((l) => setTimeout(l, 350));
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
    function c(l) {
      return l.map((d) => {
        let u = "super-split-pdf__line";
        return d.highlight === "keyword" || d.highlight === !0 ? u += " super-split-pdf__line--keyword" : d.highlight === "contextual" && (u += " super-split-pdf__line--contextual"), d.bold && (u += " super-split-pdf__line--bold"), `<div class="${u}">${d.text || "&nbsp;"}</div>`;
      }).join("");
    }
    if (r) {
      const l = r.pageContent[1], d = r.pages;
      let u = 1;
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
            ${c(l)}
          </div>
          ${d > 1 ? `
          <div class="super-split-pdf__footer">
            <button class="super-split-pdf__page-btn super-split-pdf__prev" disabled>&#8249;</button>
            <span class="super-split-pdf__page-num">Page 1 of ${d}</span>
            <button class="super-split-pdf__page-btn super-split-pdf__next">&#8250;</button>
          </div>` : `
          <div class="super-split-pdf__footer">
            <span class="super-split-pdf__page-num">Page 1 of 1</span>
          </div>`}
        </div>`, d > 1) {
        let f = function() {
          _.innerHTML = c(r.pageContent[u]), h.textContent = `Page ${u} of ${d}`, p.disabled = u <= 1, m.disabled = u >= d;
        };
        var o = f;
        const p = n.querySelector(".super-split-pdf__prev"), m = n.querySelector(".super-split-pdf__next"), h = n.querySelector(".super-split-pdf__page-num"), _ = n.querySelector(".super-split-pdf__paper");
        p.addEventListener("click", () => {
          u > 1 && (u--, f());
        }), m.addEventListener("click", () => {
          u < d && (u++, f());
        });
      }
    } else {
      const l = [
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
            ${c(l)}
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
      const { uda: i, matchKeys: r } = await Dn(s, a || null);
      n.innerHTML = "";
      const c = document.createElement("div");
      c.style.cssText = "width:100%;height:100%;display:flex;flex-direction:column;min-height:0;", n.appendChild(c), Ce(
        F(Rt, {
          uda: i,
          matchKeys: new Set(r || []),
          quoteText: a || null
        }),
        c
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
      document.body.style.overflow = "", document.removeEventListener("keydown", c), a.remove();
    }, c = (o) => {
      o.key === "Escape" && r();
    };
    document.addEventListener("keydown", c), a.querySelector(".super-uda-modal__backdrop").addEventListener("click", r);
    try {
      const { uda: o, matchKeys: l } = await Dn(n, s || null);
      i.innerHTML = "", Ce(
        F(Rt, {
          uda: o,
          matchKeys: new Set(l || []),
          quoteText: s || null,
          onClose: r
        }),
        i
      );
    } catch (o) {
      i.innerHTML = `<div class="super-uda-modal__error">${o.message || "Failed to load UDA"}</div>`;
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
function ka({ facilityName: t, orgSlug: n }) {
  const [s, a] = w(null), [i, r] = w(!0), [c, o] = w(null), l = j(async () => {
    r(!0), o(null);
    try {
      const d = new URLSearchParams({
        facilityName: t,
        orgSlug: n,
        windowDays: "30"
      }), u = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/dashboard?${d}`,
        options: { method: "GET" }
      });
      if (!u.success)
        throw new Error(u.error || "Failed to load MDS dashboard data");
      a(u.data);
    } catch (d) {
      console.error("[MDSCommandCenter] Failed to fetch dashboard:", d), o(d.message || "Failed to load dashboard");
    } finally {
      r(!1);
    }
  }, [t, n]);
  return U(() => {
    l();
  }, [l]), { data: s, loading: i, error: c, retry: l };
}
function Na({ facilityName: t, orgSlug: n, enabled: s = !0 }) {
  const [a, i] = w(null), [r, c] = w(!1), [o, l] = w(null);
  return U(() => {
    if (!s || !t) {
      i(null), l(null);
      return;
    }
    let d = !1;
    c(!0), l(null);
    async function u() {
      try {
        if (!(await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" })).authenticated)
          throw new Error("Please log in to view the MDS schedule");
        const m = typeof getOrg == "function" ? getOrg() : null, h = n || m?.org, _ = new URLSearchParams({
          facilityName: t,
          orgSlug: h
        }), f = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/schedule?${_}`,
          options: { method: "GET" }
        });
        if (!f.success)
          throw new Error(f.error || "Failed to load MDS schedule");
        d || i(f.data);
      } catch (p) {
        d || l(p.message || "Failed to load MDS schedule");
      } finally {
        d || c(!1);
      }
    }
    return u(), () => {
      d = !0;
    };
  }, [t, n, s]), { data: a, loading: r, error: o };
}
function Sa({ facilityName: t, orgSlug: n, enabled: s = !1 }) {
  const [a, i] = w(null), [r, c] = w(!1), [o, l] = w(null), d = j(async () => {
    if (!(!s || !t || !n)) {
      c(!0), l(null);
      try {
        const u = new URLSearchParams({ facilityName: t, orgSlug: n }), p = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/certifications/dashboard?${u}`,
          options: { method: "GET" }
        });
        if (!p.success) {
          i(null);
          return;
        }
        i(p.data || null);
      } catch (u) {
        console.warn("[Certifications] Dashboard unavailable:", u), i(null);
      } finally {
        c(!1);
      }
    }
  }, [t, n, s]);
  return U(() => {
    d();
  }, [d]), { data: a, loading: r, error: o, retry: d };
}
function qt({ facilityName: t, orgSlug: n, status: s, patientId: a }) {
  const [i, r] = w([]), [c, o] = w(!0), [l, d] = w(null), u = j(async () => {
    if (!(!t || !n)) {
      o(!0), d(null);
      try {
        const p = new URLSearchParams({ facilityName: t, orgSlug: n });
        s && p.set("status", s), a && p.set("patientId", a);
        const m = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/certifications?${p}`,
          options: { method: "GET" }
        });
        if (!m.success)
          throw new Error(m.error || "Failed to load certifications");
        r(m.data?.certifications || []);
      } catch (p) {
        console.error("[Certifications] Failed to fetch certifications:", p), d(p.message || "Failed to load certifications");
      } finally {
        o(!1);
      }
    }
  }, [t, n, s, a]);
  return U(() => {
    u();
  }, [u]), { certs: i, loading: c, error: l, refetch: u };
}
function tt({
  options: t = [],
  value: n,
  onChange: s,
  placeholder: a = "Select…",
  size: i = "default",
  searchable: r = !1,
  searchPlaceholder: c = "Search…",
  className: o = "",
  ariaLabel: l,
  align: d = "left"
}) {
  const [u, p] = w(!1), [m, h] = w(""), [_, f] = w(-1), g = ne(null), y = ne(null), v = ne(null), S = t.find((x) => x.value === n) || null;
  U(() => {
    if (!u) return;
    const x = (k) => {
      g.current && !g.current.contains(k.target) && p(!1);
    };
    return document.addEventListener("mousedown", x, !0), () => document.removeEventListener("mousedown", x, !0);
  }, [u]), U(() => {
    u && (h(""), f(-1), r && y.current && requestAnimationFrame(() => y.current?.focus({ preventScroll: !0 })));
  }, [u, r]);
  const C = m.toLowerCase(), b = m ? t.filter(
    (x) => x.label.toLowerCase().includes(C) || x.subtitle && x.subtitle.toLowerCase().includes(C) || x.badge && x.badge.toLowerCase().includes(C)
  ) : t, P = j((x) => {
    if (!u && (x.key === "Enter" || x.key === " " || x.key === "ArrowDown")) {
      x.preventDefault(), p(!0);
      return;
    }
    if (u)
      switch (x.key) {
        case "ArrowDown":
          x.preventDefault(), f((k) => Math.min(k + 1, b.length - 1));
          break;
        case "ArrowUp":
          x.preventDefault(), f((k) => Math.max(k - 1, 0));
          break;
        case "Enter":
          x.preventDefault(), _ >= 0 && b[_] && (s(b[_].value), p(!1));
          break;
        case "Escape":
          x.preventDefault(), p(!1);
          break;
        case "Tab":
          p(!1);
          break;
      }
  }, [u, _, b, s]);
  return U(() => {
    if (_ < 0 || !v.current) return;
    v.current.children[_]?.scrollIntoView({ block: "nearest" });
  }, [_]), /* @__PURE__ */ e(
    "div",
    {
      class: `ss__root${i === "compact" ? " ss__root--compact" : ""} ${o}`,
      ref: g,
      onKeyDown: P,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `ss__trigger${u ? " ss__trigger--open" : ""}`,
            onClick: () => p(!u),
            "aria-haspopup": "listbox",
            "aria-expanded": u,
            "aria-label": l,
            children: [
              /* @__PURE__ */ e("span", { class: "ss__trigger-text", children: S ? S.label : /* @__PURE__ */ e("span", { class: "ss__placeholder", children: a }) }),
              /* @__PURE__ */ e("svg", { class: `ss__chevron${u ? " ss__chevron--open" : ""}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
            ]
          }
        ),
        u && /* @__PURE__ */ e("div", { class: `ss__dropdown${d === "right" ? " ss__dropdown--right" : ""}`, role: "listbox", children: [
          r && /* @__PURE__ */ e("div", { class: "ss__search-wrap", children: [
            /* @__PURE__ */ e("svg", { class: "ss__search-icon", width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
              /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
              /* @__PURE__ */ e("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: y,
                class: "ss__search",
                type: "text",
                placeholder: c,
                value: m,
                onInput: (x) => {
                  h(x.target.value), f(-1);
                },
                autocomplete: "off"
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { class: "ss__list", ref: v, children: [
            b.map((x, k) => {
              const D = x.value === n;
              return /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  class: `ss__option${D ? " ss__option--active" : ""}${k === _ ? " ss__option--hl" : ""}`,
                  role: "option",
                  "aria-selected": D,
                  onClick: () => {
                    s(x.value), p(!1);
                  },
                  onMouseEnter: () => f(k),
                  children: [
                    /* @__PURE__ */ e("div", { class: "ss__option-body", children: [
                      /* @__PURE__ */ e("span", { class: "ss__option-label", children: x.label }),
                      x.subtitle && /* @__PURE__ */ e("span", { class: "ss__option-sub", children: x.subtitle })
                    ] }),
                    x.badge && /* @__PURE__ */ e("span", { class: "ss__option-badge", children: x.badge }),
                    D && /* @__PURE__ */ e("svg", { class: "ss__check", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 7L6 10L11 4", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                  ]
                },
                x.value
              );
            }),
            b.length === 0 && /* @__PURE__ */ e("div", { class: "ss__empty", children: "No matches" })
          ] })
        ] })
      ]
    }
  );
}
const xa = [
  { value: "all", label: "All", color: null },
  { value: "overdue", label: "Overdue", color: "#ef4444" },
  { value: "urgent", label: "Urgent", color: "#f97316" },
  { value: "approaching", label: "Approaching", color: "#eab308" },
  { value: "on_track", label: "On Track", color: "#22c55e" }
];
function wt({ value: t, label: n, highlight: s }) {
  return /* @__PURE__ */ e("span", { class: `mds-cc__stat${s ? " mds-cc__stat--highlight" : ""}`, children: [
    /* @__PURE__ */ e("strong", { children: t }),
    " ",
    n
  ] });
}
function Pa({
  summary: t,
  facilityName: n,
  onClose: s,
  activeView: a,
  onViewChange: i,
  viewMode: r,
  onViewModeChange: c,
  isFullscreen: o,
  onToggleFullscreen: l,
  queryCount: d,
  certCount: u,
  certsEnabled: p,
  complianceGaps: m,
  payerFilter: h,
  onPayerFilterChange: _,
  classFilter: f,
  onClassFilterChange: g,
  focusFilter: y,
  onFocusFilterChange: v,
  urgencyFilter: S,
  onUrgencyFilterChange: C
}) {
  const b = t?.total ?? 0, P = t?.urgent ?? 0, E = t?.hippsImprovements ?? t?.withHippsImprovements ?? 0, x = t?.pendingQueries ?? t?.pendingQueriesCount ?? 0, k = t?.totalRevenueOpportunityPerDay ?? 0;
  return /* @__PURE__ */ e("div", { class: "mds-cc__header", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__title-row", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__title-group", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__title", children: "MDS Command Center" }),
        n && /* @__PURE__ */ e("span", { class: "mds-cc__facility-name", children: n })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__title-actions", children: [
        l && /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__icon-btn${o ? " mds-cc__icon-btn--exit" : ""}`,
            onClick: l,
            "aria-label": o ? "Exit fullscreen" : "Enter fullscreen",
            title: o ? "Exit fullscreen" : "Fullscreen",
            children: o ? /* @__PURE__ */ e(Y, { children: [
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
      /* @__PURE__ */ e(wt, { value: b, label: "assessments" }),
      /* @__PURE__ */ e("span", { class: "mds-cc__stats-sep", children: "|" }),
      /* @__PURE__ */ e(wt, { value: P, label: "urgent", highlight: P > 0 }),
      k > 0 && /* @__PURE__ */ e(Y, { children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__stats-sep", children: "|" }),
        /* @__PURE__ */ e("span", { class: "mds-cc__stat mds-cc__stat--revenue", children: [
          /* @__PURE__ */ e("strong", { children: [
            "$",
            Math.round(k),
            "/day available"
          ] }),
          E > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__stat-sub", children: [
            " across ",
            E,
            " improvements"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("span", { class: "mds-cc__stats-sep", children: "|" }),
      /* @__PURE__ */ e(wt, { value: x, label: "pending queries", highlight: x > 0 })
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
            d > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__view-tab-badge", children: d })
          ]
        }
      ),
      p && /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${a === "certs" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => i("certs"),
          children: [
            "Certs",
            u > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__view-tab-badge", children: u })
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
      r !== "calendar" && /* @__PURE__ */ e(Y, { children: [
        /* @__PURE__ */ e(
          tt,
          {
            size: "compact",
            options: [
              { value: "all", label: "All Classes" },
              { value: "pps_payment", label: "PPS / Payment" },
              { value: "obra_cmi", label: "OBRA / CMI" },
              { value: "end_of_stay", label: "End of Stay" }
            ],
            value: f,
            onChange: g,
            ariaLabel: "Assessment class filter"
          }
        ),
        /* @__PURE__ */ e(
          tt,
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
          tt,
          {
            size: "compact",
            options: [
              { value: "all", label: "All Assessments" },
              { value: "revenue", label: "Revenue Opportunities" },
              { value: "issues", label: "Has Issues" }
            ],
            value: y,
            onChange: v,
            ariaLabel: "Focus filter"
          }
        )
      ] }),
      c && /* @__PURE__ */ e("div", { class: "mds-cc__viewmode-toggle", children: [
        /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__viewmode-btn${r === "list" ? " mds-cc__viewmode-btn--active" : ""}`,
            onClick: () => c("list"),
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
            onClick: () => c("calendar"),
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
    a === "assessments" && r !== "calendar" && C && /* @__PURE__ */ e("div", { class: "mds-cc__urgency-pills", children: [
      xa.map((D) => {
        const N = S === D.value;
        return /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__urgency-pill${N ? " mds-cc__urgency-pill--active" : ""}`,
            style: N && D.color ? { background: D.color, borderColor: D.color, color: "#fff" } : void 0,
            onClick: () => C(D.value),
            children: [
              D.color && /* @__PURE__ */ e("span", { class: "mds-cc__urgency-pill-dot", style: { background: N ? "#fff" : D.color } }),
              D.label
            ]
          },
          D.value
        );
      }),
      v && /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__urgency-pill mds-cc__revenue-pill${y === "revenue" ? " mds-cc__revenue-pill--active" : ""}`,
          onClick: () => v(y === "revenue" ? "all" : "revenue"),
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
const Ta = {
  initial: { label: "Initial", cls: "cert__type-badge--initial" },
  day_14_recert: { label: "Day 14", cls: "cert__type-badge--recert" },
  day_30_recert: { label: "Day 30", cls: "cert__type-badge--recert" }
};
function Zt({ type: t }) {
  const n = Ta[t];
  return n ? /* @__PURE__ */ e("span", { class: `cert__type-badge ${n.cls}`, children: n.label }) : null;
}
function Aa(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function Ma(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function xs({ status: t, isDelayed: n, dueDate: s, signedAt: a }) {
  const i = Aa(s), r = i !== null && i < 0, c = i !== null && i >= 0 && i <= 3;
  if ((n || t === "delayed") && r) {
    const o = Math.abs(i);
    return /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--overdue", children: [
      o,
      " DAY",
      o !== 1 ? "S" : "",
      " OVERDUE"
    ] });
  }
  if (r && (t === "pending" || t === "sent")) {
    const o = Math.abs(i);
    return /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--overdue", children: [
      o,
      " DAY",
      o !== 1 ? "S" : "",
      " OVERDUE"
    ] });
  }
  if (c && t !== "signed" && t !== "skipped") {
    const o = i === 0 ? "DUE TODAY" : `DUE IN ${i} DAY${i !== 1 ? "S" : ""}`;
    return /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--due-soon", children: o });
  }
  return t === "sent" ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--awaiting", children: "AWAITING SIGNATURE" }) : t === "signed" ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--signed", children: [
    "Signed ",
    Ma(a)
  ] }) : t === "delayed" || n ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--delayed", children: "DELAYED" }) : t === "skipped" ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--skipped", children: "SKIPPED" }) : /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--pending", children: "PENDING" });
}
function Ea({ payerType: t }) {
  return t !== "managed_care" ? null : /* @__PURE__ */ e("span", { class: "cert__ma-badge", children: "MA" });
}
function $a(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function La(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
function Ps(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function Ra(t) {
  const n = Ps(t.dueDate), s = n !== null && n < 0, a = t.sends?.length > 0;
  return t.status === "skipped" ? { label: "Unskip", variant: "ghost", action: "unskip" } : t.status === "signed" ? null : s ? { label: a ? "Resend" : "Send", variant: "destructive", action: "send" } : t.status === "delayed" ? { label: a ? "Resend" : "Send", variant: "destructive", action: "send" } : a ? { label: "Resend", variant: "outline", action: "send" } : { label: "Send", variant: "primary", action: "send" };
}
function qa({ sends: t }) {
  if (!t || t.length === 0) return null;
  const n = t.length === 1 ? `Sent to ${t[0].practitionerName}` : `Sent ${t.length} times`;
  return /* @__PURE__ */ e("span", { class: "cert__row-meta cert__row-meta--link cert__sends-summary", children: n });
}
function Oa({ sends: t }) {
  return /* @__PURE__ */ e("div", { class: "cert__sends-detail", children: t.map((n, s) => /* @__PURE__ */ e("div", { class: "cert__sends-detail-row", children: [
    /* @__PURE__ */ e("span", { class: "cert__sends-detail-name", children: [
      n.practitionerName,
      n.practitionerTitle ? `, ${n.practitionerTitle}` : ""
    ] }),
    /* @__PURE__ */ e("span", { class: "cert__sends-detail-date", children: La(n.sentAt) }),
    n.smsStatus && /* @__PURE__ */ e("span", { class: `cert__sends-detail-status cert__sends-detail-status--${n.smsStatus}`, children: n.smsStatus })
  ] }, s)) });
}
function Cn({ cert: t, compact: n, onSend: s, onSkip: a, onUnskip: i, onDelay: r, onEditReason: c, onViewPractitioner: o }) {
  const [l, d] = w(!1), [u, p] = w(!1), m = ne(null);
  U(() => {
    if (!l) return;
    const k = (D) => {
      m.current && !m.current.contains(D.target) && d(!1);
    };
    return document.addEventListener("click", k, !0), () => document.removeEventListener("click", k, !0);
  }, [l]);
  const h = Ra(t), _ = t.type === "day_14_recert" || t.type === "day_30_recert", f = t.status !== "skipped" && t.status !== "signed", g = t.status === "pending" && !t.isDelayed && t.status !== "signed", y = _ && t.status !== "signed", v = t.sends?.length > 0, S = Ps(t.dueDate), C = S !== null && S < 0, b = S !== null && S >= 0 && S <= 3;
  let P = "";
  t.status === "signed" ? P = " cert__row--signed" : t.status === "skipped" ? P = " cert__row--skipped" : C || t.isDelayed ? P = " cert__row--overdue" : b && (P = " cert__row--due-soon");
  function E(k) {
    k.stopPropagation(), h && (h.action === "send" && s?.(t), h.action === "unskip" && i?.(t));
  }
  function x(k) {
    d(!1), k === "skip" && a?.(t), k === "delay" && r?.(t), k === "editReason" && c?.(t);
  }
  return /* @__PURE__ */ e("div", { class: `cert__row${P}`, children: [
    /* @__PURE__ */ e("div", { class: "cert__row-top", children: [
      /* @__PURE__ */ e("div", { class: "cert__row-left", children: [
        /* @__PURE__ */ e(Zt, { type: t.type }),
        !n && /* @__PURE__ */ e("span", { class: "cert__row-patient", children: t.patientName }),
        !n && /* @__PURE__ */ e(Ea, { payerType: t.payerType })
      ] }),
      /* @__PURE__ */ e("div", { class: "cert__row-right", children: [
        /* @__PURE__ */ e(
          xs,
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
            onClick: E,
            children: h.label
          }
        ),
        (f || g || y) && /* @__PURE__ */ e("div", { class: "cert__row-menu-container", ref: m, children: [
          /* @__PURE__ */ e(
            "button",
            {
              class: "cert__row-menu-btn",
              onClick: (k) => {
                k.stopPropagation(), d(!l);
              },
              "aria-label": "More actions",
              children: /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: [
                /* @__PURE__ */ e("circle", { cx: "8", cy: "3", r: "1.5" }),
                /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "1.5" }),
                /* @__PURE__ */ e("circle", { cx: "8", cy: "13", r: "1.5" })
              ] })
            }
          ),
          l && /* @__PURE__ */ e("div", { class: "cert__row-menu", children: [
            f && /* @__PURE__ */ e("button", { class: "cert__row-menu-item", onClick: () => x("skip"), children: "Skip Certification" }),
            g && /* @__PURE__ */ e("button", { class: "cert__row-menu-item", onClick: () => x("delay"), children: "Mark as Delayed" }),
            y && /* @__PURE__ */ e("button", { class: "cert__row-menu-item", onClick: () => x("editReason"), children: "Edit Clinical Reason" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__row-bottom", children: [
      t.dueDate && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Due ",
        $a(t.dueDate)
      ] }),
      !n && t.currentMedicareDay != null && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Medicare Day ",
        t.currentMedicareDay
      ] }),
      v && /* @__PURE__ */ e("span", { onClick: (k) => {
        k.stopPropagation(), p(!u);
      }, children: /* @__PURE__ */ e(qa, { sends: t.sends }) }),
      t.signedByName && /* @__PURE__ */ e(
        "span",
        {
          class: `cert__row-meta${t.signedByPractitionerId && o ? " cert__row-meta--link" : ""}`,
          onClick: t.signedByPractitionerId && o ? (k) => {
            k.stopPropagation(), o(t.signedByPractitionerId);
          } : void 0,
          children: [
            t.signedByName,
            t.signedByTitle ? `, ${t.signedByTitle}` : ""
          ]
        }
      )
    ] }),
    u && v && /* @__PURE__ */ e(Oa, { sends: t.sends })
  ] });
}
function Ba({ payerType: t }) {
  const n = t === "managed_care";
  return /* @__PURE__ */ e("span", { class: `cert__stay-type-badge${n ? " cert__stay-type-badge--managed" : ""}`, children: n ? "Managed" : "Med A" });
}
function Ha(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Ot(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
const Fa = ["initial", "day_14_recert", "day_30_recert"], Ua = { initial: "I", day_14_recert: "14", day_30_recert: "30" };
function Ga(t) {
  if (!t) return "empty";
  const n = Ot(t.dueDate), s = n !== null && n < 0;
  return t.status === "signed" ? "signed" : t.status === "skipped" ? "skipped" : s || t.isDelayed ? "overdue" : t.status === "sent" ? "sent" : n !== null && n >= 0 && n <= 3 ? "due-soon" : "pending";
}
function Va({ allCerts: t }) {
  const n = {};
  for (const s of t)
    n[s.type] = s;
  return /* @__PURE__ */ e("div", { class: "cert__chain-indicator", children: Fa.map((s, a) => {
    const i = n[s], r = Ga(i);
    return /* @__PURE__ */ e("span", { class: "cert__chain-item", children: [
      a > 0 && /* @__PURE__ */ e("span", { class: "cert__chain-line" }),
      /* @__PURE__ */ e("span", { class: `cert__chain-dot cert__chain-dot--${r}` }),
      /* @__PURE__ */ e("span", { class: `cert__chain-label cert__chain-label--${r}`, children: Ua[s] })
    ] }, s);
  }) });
}
function za({
  stayId: t,
  displayCerts: n,
  historyCerts: s,
  allCerts: a,
  onSend: i,
  onSkip: r,
  onDelay: c,
  onUnskip: o,
  onEditReason: l,
  onViewPractitioner: d
}) {
  const [u, p] = w(!1), m = a[0], h = m.patientName, _ = m.payerType, f = m.currentMedicareDay, g = m.partAStartDate, y = n.some((C) => {
    const b = Ot(C.dueDate);
    return b !== null && b < 0 || C.isDelayed;
  }), v = !y && n.some((C) => {
    const b = Ot(C.dueDate);
    return b !== null && b >= 0 && b <= 3;
  });
  let S = "";
  return y ? S = " cert__stay-card--overdue" : v && (S = " cert__stay-card--due-soon"), /* @__PURE__ */ e("div", { class: `cert__stay-card${S}`, children: [
    /* @__PURE__ */ e("div", { class: "cert__stay-header", children: [
      /* @__PURE__ */ e("div", { class: "cert__stay-header-left", children: [
        /* @__PURE__ */ e("span", { class: "cert__stay-patient", children: h }),
        /* @__PURE__ */ e(Ba, { payerType: _ }),
        /* @__PURE__ */ e(Va, { allCerts: a })
      ] }),
      /* @__PURE__ */ e("div", { class: "cert__stay-header-right", children: [
        f != null && /* @__PURE__ */ e("span", { class: "cert__stay-meta", children: [
          "Day ",
          f
        ] }),
        g && /* @__PURE__ */ e("span", { class: "cert__stay-meta", children: Ha(g) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__stay-certs", children: n.map((C) => /* @__PURE__ */ e(
      Cn,
      {
        cert: C,
        compact: !0,
        onSend: i,
        onSkip: r,
        onDelay: c,
        onUnskip: o,
        onEditReason: l,
        onViewPractitioner: d
      },
      C.id
    )) }),
    s.length > 0 && /* @__PURE__ */ e("div", { class: "cert__stay-history", children: [
      /* @__PURE__ */ e(
        "button",
        {
          class: "cert__stay-history-toggle",
          onClick: () => p(!u),
          children: [
            /* @__PURE__ */ e("span", { class: "cert__stay-history-icon", children: u ? "▼" : "▶" }),
            s.length,
            " previous certification",
            s.length !== 1 ? "s" : ""
          ]
        }
      ),
      u && /* @__PURE__ */ e("div", { class: "cert__stay-history-list", children: s.map((C) => /* @__PURE__ */ e(
        Cn,
        {
          cert: C,
          compact: !0,
          onSend: i,
          onSkip: r,
          onDelay: c,
          onUnskip: o,
          onEditReason: l,
          onViewPractitioner: d
        },
        C.id
      )) })
    ] })
  ] });
}
function mt({ isOpen: t, onClose: n, title: s, subtitle: a, children: i, actions: r = [] }) {
  const c = ne(null);
  return U(() => {
    if (!t) return;
    const o = (l) => {
      l.key === "Escape" && n();
    };
    return document.addEventListener("keydown", o), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", o), document.body.style.overflow = "";
    };
  }, [t, n]), t ? /* @__PURE__ */ e(
    "div",
    {
      class: "cm-overlay",
      ref: c,
      onClick: (o) => {
        o.target === c.current && n();
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
        r.length > 0 && /* @__PURE__ */ e("div", { class: "cm__footer", children: r.map((o, l) => /* @__PURE__ */ e(
          "button",
          {
            class: `cm__btn cm__btn--${o.variant || "secondary"}`,
            onClick: o.onClick,
            disabled: o.disabled,
            children: o.label
          },
          l
        )) })
      ] })
    }
  ) : null;
}
const Wa = [
  { value: "home_health", label: "Home Health Agency" },
  { value: "facility_care", label: "Facility Care" },
  { value: "other", label: "Other" }
];
function Ts(t) {
  return t ? t === "Home Health Agency" ? { option: "home_health", otherText: "" } : t === "Facility Care" ? { option: "facility_care", otherText: "" } : t.startsWith("Other: ") ? { option: "other", otherText: t.slice(7) } : { option: "other", otherText: t } : { option: "", otherText: "" };
}
function As(t, n) {
  return t === "home_health" ? "Home Health Agency" : t === "facility_care" ? "Facility Care" : t === "other" ? `Other: ${n}` : "";
}
function Bt(t, n) {
  return t ? t === "other" ? n.trim().length > 0 : !0 : !1;
}
function Ms({ option: t, otherText: n, onOptionChange: s, onOtherTextChange: a }) {
  return /* @__PURE__ */ e("div", { class: "cm-discharge", children: [
    Wa.map((i) => /* @__PURE__ */ e(
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
function Es({ isOpen: t, onClose: n, cert: s, facilityName: a, orgSlug: i, onSent: r }) {
  const [c, o] = w(""), [l, d] = w(30), [u, p] = w(""), [m, h] = w(""), [_, f] = w(""), [g, y] = w([]), [v, S] = w(!1), [C, b] = w(/* @__PURE__ */ new Set()), [P, E] = w(!1), x = s?.type === "day_14_recert" || s?.type === "day_30_recert", k = s?.isDelayed, D = s?.type === "initial" ? "Initial" : s?.type === "day_14_recert" ? "Day 14 Recert" : "Day 30 Recert";
  U(() => {
    if (!t || !s) return;
    o(s.clinicalReason || ""), d(s.estimatedDays || 30);
    const $ = Ts(s.planForDischarge);
    p($.option), h($.otherText), f(s.delayReason || ""), b(/* @__PURE__ */ new Set()), S(!0), window.CertAPI.fetchPractitioners(a, i).then((q) => y(q)).catch((q) => console.error("[Certifications] Failed to load practitioners:", q)).finally(() => S(!1));
  }, [t, s?.id]);
  function N() {
    if (C.size === 0 || x && !c.trim() || x && !Bt(u, m) || k && !_.trim()) return;
    E(!0);
    const $ = As(u, m);
    (x ? window.CertAPI.saveClinicalReason(s.id, { clinicalReason: c, estimatedDays: l, planForDischarge: $ }) : Promise.resolve()).then(() => window.CertAPI.sendCert(s.id, [...C], k ? _ : void 0)).then(() => {
      const H = g.filter((K) => C.has(K.id)).map((K) => `${K.firstName} ${K.lastName}`), Z = H.length <= 2 ? H.join(" & ") : `${H.length} practitioners`;
      window.SuperToast?.success?.(`${D} for ${s.patientName} sent to ${Z}`), r?.(), n();
    }).catch((H) => {
      console.error("[Certifications] Failed to send:", H), window.SuperToast?.error?.("Failed to send certification");
    }).finally(() => E(!1));
  }
  function O($) {
    b((q) => {
      const H = new Set(q);
      return H.has($) ? H.delete($) : H.add($), H;
    });
  }
  function M() {
    b(
      ($) => $.size === g.length ? /* @__PURE__ */ new Set() : new Set(g.map((q) => q.id))
    );
  }
  if (!s) return null;
  const A = C.size > 0 && (!x || c.trim()) && (!x || Bt(u, m)) && (!k || _.trim()) && !P;
  return /* @__PURE__ */ e(
    mt,
    {
      isOpen: t,
      onClose: n,
      title: "Send Certification",
      subtitle: `${s.patientName} · ${D}`,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        {
          label: P ? "Sending..." : `Send to ${C.size} practitioner${C.size !== 1 ? "s" : ""}`,
          variant: "primary",
          onClick: N,
          disabled: !A
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
              value: c,
              onInput: ($) => o($.target.value),
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
                  value: l,
                  onInput: ($) => d(parseInt($.target.value) || 30)
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
            Ms,
            {
              option: u,
              otherText: m,
              onOptionChange: p,
              onOtherTextChange: h
            }
          )
        ] }),
        k && /* @__PURE__ */ e("div", { class: "cm-section cm-section--warn", children: [
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
              onInput: ($) => f($.target.value),
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
          s.sends.map(($) => $.practitionerName).join(", ")
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
              C.size,
              " of ",
              g.length
            ] })
          ] }),
          v ? /* @__PURE__ */ e("div", { class: "cm-loading", children: [
            /* @__PURE__ */ e("div", { class: "cm-loading__spinner" }),
            "Loading practitioners..."
          ] }) : /* @__PURE__ */ e("div", { class: "cm-practitioners", children: [
            /* @__PURE__ */ e("label", { class: "cm-pract cm-pract--all", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  class: "cm-check",
                  checked: C.size === g.length && g.length > 0,
                  onChange: M
                }
              ),
              /* @__PURE__ */ e("span", { class: "cm-check-box" }),
              /* @__PURE__ */ e("span", { class: "cm-pract__label", children: "Select all" })
            ] }),
            g.map(($) => /* @__PURE__ */ e("label", { class: `cm-pract${C.has($.id) ? " cm-pract--selected" : ""}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  class: "cm-check",
                  checked: C.has($.id),
                  onChange: () => O($.id)
                }
              ),
              /* @__PURE__ */ e("span", { class: "cm-check-box" }),
              /* @__PURE__ */ e("span", { class: "cm-pract__label", children: [
                $.firstName,
                " ",
                $.lastName,
                $.title && /* @__PURE__ */ e("span", { class: "cm-pract__title", children: $.title })
              ] })
            ] }, $.id))
          ] })
        ] })
      ]
    }
  );
}
function $s({ isOpen: t, onClose: n, cert: s, onSkipped: a }) {
  const [i, r] = w(""), [c, o] = w(!1);
  function l() {
    i.trim() && (o(!0), a(i).then(() => {
      r(""), n();
    }).catch(() => o(!1)));
  }
  return /* @__PURE__ */ e(
    mt,
    {
      isOpen: t,
      onClose: n,
      title: "Skip Certification",
      subtitle: s?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        { label: c ? "Skipping..." : "Skip", variant: "primary", onClick: l, disabled: !i.trim() || c }
      ],
      children: /* @__PURE__ */ e("div", { class: "cm-section", children: [
        /* @__PURE__ */ e("div", { class: "cm-section__head", children: /* @__PURE__ */ e("span", { class: "cm-section__label", children: "Reason for Skipping" }) }),
        /* @__PURE__ */ e(
          "textarea",
          {
            class: "cm-input cm-input--textarea",
            rows: 3,
            value: i,
            onInput: (d) => r(d.target.value),
            placeholder: "Why is this certification being skipped?"
          }
        )
      ] })
    }
  );
}
function Qa({ isOpen: t, onClose: n, cert: s, onSaved: a }) {
  const [i, r] = w(""), [c, o] = w(30), [l, d] = w(""), [u, p] = w(""), [m, h] = w(!1);
  U(() => {
    if (t && s) {
      r(s.clinicalReason || ""), o(s.estimatedDays || 30);
      const g = Ts(s.planForDischarge);
      d(g.option), p(g.otherText);
    }
  }, [t, s?.id]);
  const _ = i.trim() && Bt(l, u) && !m;
  function f() {
    if (!_) return;
    h(!0);
    const g = As(l, u);
    a({ clinicalReason: i, estimatedDays: c, planForDischarge: g }).then(() => n()).catch(() => h(!1));
  }
  return /* @__PURE__ */ e(
    mt,
    {
      isOpen: t,
      onClose: n,
      title: "Edit Clinical Reason",
      subtitle: s?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        { label: m ? "Saving..." : "Save", variant: "primary", onClick: f, disabled: !_ }
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
            onInput: (g) => r(g.target.value),
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
                value: c,
                onInput: (g) => o(parseInt(g.target.value) || 30)
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
          Ms,
          {
            option: l,
            otherText: u,
            onOptionChange: d,
            onOtherTextChange: p
          }
        )
      ] })
    }
  );
}
function Ls({ isOpen: t, onClose: n, cert: s, onDelayed: a }) {
  const [i, r] = w(""), [c, o] = w(!1);
  function l() {
    i.trim() && (o(!0), a(i).then(() => {
      r(""), n();
    }).catch(() => o(!1)));
  }
  return /* @__PURE__ */ e(
    mt,
    {
      isOpen: t,
      onClose: n,
      title: "Mark as Delayed",
      subtitle: s?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        { label: c ? "Saving..." : "Mark Delayed", variant: "primary", onClick: l, disabled: !i.trim() || c }
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
            onInput: (d) => r(d.target.value),
            placeholder: "Why is this certification being delayed?"
          }
        )
      ] })
    }
  );
}
function ja(t) {
  const [n, s] = w(null), [a, i] = w(!1), [r, c] = w(null), [o, l] = w(0), d = j(() => {
    l((u) => u + 1);
  }, []);
  return U(() => {
    if (!t || !window.CertAPI) {
      s(null);
      return;
    }
    let u = !1;
    return i(!0), c(null), window.CertAPI.fetchPractitionerWorkload(t).then((p) => {
      u || s(p);
    }).catch((p) => {
      u || c(p.message || "Failed to load practitioner data");
    }).finally(() => {
      u || i(!1);
    }), () => {
      u = !0;
    };
  }, [t, o]), { data: n, loading: a, error: r, retry: d };
}
function Ht(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Ka({ item: t }) {
  const n = !!t.type && (t.type === "initial" || t.type.includes("recert"));
  return /* @__PURE__ */ e("div", { class: "cert__workload-row", children: [
    /* @__PURE__ */ e("div", { class: "cert__workload-row-top", children: n ? /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e(Zt, { type: t.type }),
      /* @__PURE__ */ e("span", { class: "cert__workload-patient", children: t.patientName }),
      /* @__PURE__ */ e(
        xs,
        {
          status: t.status,
          isDelayed: t.isDelayed,
          dueDate: t.dueDate,
          signedAt: t.signedAt
        }
      )
    ] }) : /* @__PURE__ */ e(Y, { children: [
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
        Ht(t.dueDate)
      ] }),
      !n && t.sentAt && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Sent ",
        Ht(t.sentAt)
      ] })
    ] })
  ] });
}
function Ya({ item: t }) {
  const n = !!t.type && (t.type === "initial" || t.type.includes("recert"));
  return /* @__PURE__ */ e("div", { class: "cert__workload-row", children: [
    /* @__PURE__ */ e("div", { class: "cert__workload-row-top", children: n ? /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e(Zt, { type: t.type }),
      /* @__PURE__ */ e("span", { class: "cert__workload-patient", children: t.patientName })
    ] }) : /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e("span", { class: "cert__workload-query-badge", children: "Query" }),
      /* @__PURE__ */ e("span", { class: "cert__workload-patient", children: t.patientName }),
      t.mdsItem && /* @__PURE__ */ e("span", { class: "cert__workload-meta", children: t.mdsItem })
    ] }) }),
    /* @__PURE__ */ e("div", { class: "cert__workload-row-bottom", children: [
      t.signedAt && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Signed ",
        Ht(t.signedAt)
      ] }),
      !n && t.selectedIcd10Code && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "ICD-10: ",
        t.selectedIcd10Code
      ] })
    ] })
  ] });
}
function Ja({ practitionerId: t, onBack: n }) {
  const { data: s, loading: a, error: i, retry: r } = ja(t);
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
  const { practitioner: c, queue: o = [], recentlySigned: l = [] } = s;
  return /* @__PURE__ */ e("div", { class: "cert__workload", children: [
    /* @__PURE__ */ e("div", { class: "cert__workload-header", children: /* @__PURE__ */ e("button", { class: "cert__workload-back", onClick: n, children: [
      "←",
      " Back to Certs"
    ] }) }),
    /* @__PURE__ */ e("div", { class: "cert__workload-info", children: [
      /* @__PURE__ */ e("div", { class: "cert__workload-name", children: [
        c?.firstName,
        " ",
        c?.lastName,
        c?.title && /* @__PURE__ */ e("span", { class: "cert__workload-title", children: [
          ", ",
          c.title
        ] })
      ] }),
      c?.phone && /* @__PURE__ */ e("div", { class: "cert__workload-phone", children: c.phone })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__workload-section", children: [
      /* @__PURE__ */ e("div", { class: "cert__workload-section-header", children: [
        "In Queue",
        o.length > 0 && /* @__PURE__ */ e("span", { class: "cert__workload-section-count", children: o.length })
      ] }),
      o.length === 0 ? /* @__PURE__ */ e("div", { class: "cert__workload-empty", children: "No items in queue" }) : o.map((d, u) => /* @__PURE__ */ e(Ka, { item: d }, u))
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__workload-section", children: [
      /* @__PURE__ */ e("div", { class: "cert__workload-section-header", children: [
        "Recently Signed",
        l.length > 0 && /* @__PURE__ */ e("span", { class: "cert__workload-section-count", children: l.length })
      ] }),
      l.length === 0 ? /* @__PURE__ */ e("div", { class: "cert__workload-empty", children: "No recent signatures" }) : l.map((d, u) => /* @__PURE__ */ e(Ya, { item: d }, u))
    ] })
  ] });
}
const Za = [
  { id: "action", label: "Action Needed" },
  { id: "awaiting", label: "Awaiting Signature" },
  { id: "overdue", label: "Overdue" },
  { id: "dueSoon", label: "Due Soon" },
  { id: "signed", label: "Signed" }
];
function Ft(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function kn(t) {
  const n = Ft(t.dueDate);
  return n !== null && n < 0 ? n : t.isDelayed ? -0.5 : n ?? 1 / 0;
}
const Xa = [
  { id: "all", label: "All" },
  { id: "medicare", label: "Med A" },
  { id: "managed", label: "Managed" }
];
function Nn(t, n) {
  return n === "all" ? !0 : n === "managed" ? t.payerType === "managed_care" : t.payerType !== "managed_care";
}
function ei({ facilityName: t, orgSlug: n, patientId: s, patientName: a }) {
  const [i, r] = w("action"), [c, o] = w("all"), [l, d] = w(null), [u, p] = w(null), [m, h] = w(null), [_, f] = w(null), [g, y] = w(null), { certs: v, loading: S, error: C, refetch: b } = qt({
    facilityName: t,
    orgSlug: n,
    patientId: s
  }), { certs: P, loading: E, refetch: x } = qt({
    facilityName: t,
    orgSlug: n,
    patientId: s,
    status: "signed"
  }), k = j(() => {
    b(), x();
  }, [b, x]), D = J(
    () => v.filter((R) => Nn(R, c)),
    [v, c]
  ), N = J(
    () => P.filter((R) => Nn(R, c)),
    [P, c]
  ), O = J(() => {
    const R = v.length + P.length;
    let B = 0, ee = 0;
    for (const T of [...v, ...P])
      T.payerType === "managed_care" ? ee++ : B++;
    return { all: R, medicare: B, managed: ee };
  }, [v, P]), M = J(() => {
    let R = 0, B = 0, ee = 0;
    for (const T of D) {
      const L = Ft(T.dueDate);
      L !== null && L < 0 || T.isDelayed ? R++ : L !== null && L >= 0 && L <= 3 && B++, T.status === "sent" && ee++;
    }
    return {
      action: D.length,
      awaiting: ee,
      overdue: R,
      dueSoon: B,
      signed: N.length
    };
  }, [D, N]), A = J(() => {
    let R;
    if (i === "signed" ? R = N : R = D.filter((T) => {
      const L = Ft(T.dueDate), W = L !== null && L < 0, G = L !== null && L >= 0 && L <= 3;
      return i === "awaiting" ? T.status === "sent" : i === "overdue" ? W || T.isDelayed : i === "dueSoon" ? G && !W : !0;
    }), R.length === 0) return [];
    const B = {};
    for (const T of R) {
      const L = T.partAStayId || T.id;
      B[L] || (B[L] = { stayId: L, displayCerts: [], historyCerts: [] }), B[L].displayCerts.push(T);
    }
    if (i !== "signed")
      for (const T of N) {
        const L = T.partAStayId;
        L && B[L] && B[L].historyCerts.push(T);
      }
    const ee = Object.values(B);
    for (const T of ee) {
      T.displayCerts.sort((W, G) => (W.sequenceNumber || 0) - (G.sequenceNumber || 0)), T.historyCerts.sort((W, G) => (W.sequenceNumber || 0) - (G.sequenceNumber || 0));
      const L = /* @__PURE__ */ new Set();
      T.allCerts = [];
      for (const W of [...T.displayCerts, ...T.historyCerts])
        L.has(W.id) || (L.add(W.id), T.allCerts.push(W));
      T.allCerts.sort((W, G) => (W.sequenceNumber || 0) - (G.sequenceNumber || 0));
    }
    return ee.sort((T, L) => {
      const W = Math.min(...T.displayCerts.map(kn)), G = Math.min(...L.displayCerts.map(kn));
      return W - G;
    }), ee;
  }, [D, N, i]);
  async function $(R) {
    await window.CertAPI.skipCert(m.id, R), window.SuperToast?.success?.("Certification skipped"), k();
  }
  async function q(R) {
    await window.CertAPI.delayCert(_.id, R), window.SuperToast?.success?.("Certification marked as delayed"), k();
  }
  async function H({ clinicalReason: R, estimatedDays: B, planForDischarge: ee }) {
    await window.CertAPI.saveClinicalReason(g.id, { clinicalReason: R, estimatedDays: B, planForDischarge: ee }), window.SuperToast?.success?.(`Clinical details updated for ${g.patientName}`), k();
  }
  async function Z(R) {
    try {
      await window.CertAPI.unskipCert(R.id), window.SuperToast?.success?.("Certification restored"), k();
    } catch (B) {
      console.error("[Certifications] Failed to unskip:", B), window.SuperToast?.error?.("Failed to restore certification");
    }
  }
  const K = i === "signed" ? E : S;
  return l ? /* @__PURE__ */ e("div", { class: "cert__view", children: /* @__PURE__ */ e(
    Ja,
    {
      practitionerId: l,
      onBack: () => d(null)
    }
  ) }) : /* @__PURE__ */ e("div", { class: "cert__view", children: [
    s && a && /* @__PURE__ */ e("div", { class: "cert__patient-banner", children: [
      "Showing certs for ",
      /* @__PURE__ */ e("strong", { children: a })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__filters", children: [
      /* @__PURE__ */ e("div", { class: "cert__stay-type-filter", children: Xa.map((R) => /* @__PURE__ */ e(
        "button",
        {
          class: `cert__stay-type-pill${c === R.id ? " cert__stay-type-pill--active" : ""}`,
          onClick: () => o(R.id),
          children: [
            R.label,
            O[R.id] > 0 && /* @__PURE__ */ e("span", { class: "cert__stay-type-pill-count", children: O[R.id] })
          ]
        },
        R.id
      )) }),
      /* @__PURE__ */ e("div", { class: "cert__sub-tabs", children: Za.map((R) => /* @__PURE__ */ e(
        "button",
        {
          class: `cert__sub-tab${i === R.id ? " cert__sub-tab--active" : ""}`,
          onClick: () => r(R.id),
          children: [
            R.label,
            M[R.id] > 0 && /* @__PURE__ */ e("span", { class: "cert__sub-tab-count", children: M[R.id] })
          ]
        },
        R.id
      )) })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__list", children: [
      K && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__spinner" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "Loading certifications..." })
      ] }),
      !K && C && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "⚠" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: C }),
        /* @__PURE__ */ e("button", { class: "mds-cc__retry-btn", onClick: k, children: "Retry" })
      ] }),
      !K && !C && A.length === 0 && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: i === "overdue" ? "✅" : "📋" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: [
          i === "action" && "All certifications are up to date",
          i === "awaiting" && "No certifications awaiting signature",
          i === "overdue" && "No overdue certifications",
          i === "dueSoon" && "No certifications due soon",
          i === "signed" && "No certifications signed in the last 7 days"
        ] })
      ] }),
      !K && !C && A.map((R) => /* @__PURE__ */ e(
        za,
        {
          stayId: R.stayId,
          displayCerts: R.displayCerts,
          historyCerts: R.historyCerts,
          allCerts: R.allCerts,
          onSend: (B) => p(B),
          onSkip: (B) => h(B),
          onDelay: (B) => f(B),
          onUnskip: Z,
          onEditReason: (B) => y(B),
          onViewPractitioner: (B) => d(B)
        },
        R.stayId
      ))
    ] }),
    /* @__PURE__ */ e(
      Es,
      {
        isOpen: !!u,
        onClose: () => p(null),
        cert: u,
        facilityName: t,
        orgSlug: n,
        onSent: k
      }
    ),
    /* @__PURE__ */ e(
      $s,
      {
        isOpen: !!m,
        onClose: () => h(null),
        cert: m,
        onSkipped: $
      }
    ),
    /* @__PURE__ */ e(
      Ls,
      {
        isOpen: !!_,
        onClose: () => f(null),
        cert: _,
        onDelayed: q
      }
    ),
    /* @__PURE__ */ e(
      Qa,
      {
        isOpen: !!g,
        onClose: () => y(null),
        cert: g,
        onSaved: H
      }
    )
  ] });
}
function Xt(t) {
  return !t || t.mode === "not_applicable" ? !1 : "isApplicable" in t ? !!t.isApplicable : !0;
}
function ti(t) {
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
function en(t, n = "long") {
  if (!Xt(t) || !(t.delta > 0)) return null;
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
function Sn(t) {
  return t ? t.replace(/_/g, "") : null;
}
function ni(t) {
  if (!Xt(t) || !(t.delta > 0)) return null;
  const n = ti(t), s = !!t.isEstimated;
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
        currentGroupCode: Sn(t.current?.groupCode),
        potentialGroupCode: Sn(t.potential?.groupCode)
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
const si = {
  overdue: "#ef4444",
  urgent: "#f97316",
  approaching: "#eab308",
  on_track: "#22c55e",
  completed: "#6b7280"
}, ai = {
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
function bt({ label: t, status: n }) {
  const s = ai[n];
  return s ? /* @__PURE__ */ e("span", { class: `mds-cc__uda-badge mds-cc__uda-badge--${s.cls}`, title: s.tip, children: [
    t,
    " ",
    s.icon
  ] }) : null;
}
function Rs(t) {
  return t ? t.replace(/^(Medicare|Medicaid|Managed\s*Care)\s*[-\u2013\u2014]\s*/i, "").replace(/\s*\/\s*/g, " ").replace(/\s*-\s*None\s*PPS\s*/i, "").replace(/\s{2,}/g, " ").trim() || t : "";
}
function xn(t) {
  return t.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function ii(t, n) {
  if (!t) return { dateText: "", completionText: "", deadlineText: "", cls: "na", isCompleted: !1 };
  const s = new Date(t);
  if (isNaN(s)) return { dateText: "", completionText: "", deadlineText: "", cls: "na", isCompleted: !1 };
  const a = xn(s), i = new Date(s);
  i.setDate(i.getDate() + 14);
  const r = xn(i);
  if ((n?.urgency || "on_track") === "completed")
    return { dateText: a, completionText: r, deadlineText: "", cls: "done", isCompleted: !0 };
  const o = n?.completionDaysRemaining ?? Math.round((i - ri()) / 864e5);
  let l, d;
  return o < 0 ? (l = `${Math.abs(o)}d overdue`, d = "overdue") : o === 0 ? (l = "Due today", d = "urgent") : o <= 3 ? (l = `${o}d left`, d = "urgent") : o <= 7 ? (l = `${o}d left`, d = "approaching") : (l = `${o}d left`, d = "ok"), { dateText: a, completionText: r, deadlineText: l, cls: d, isCompleted: !1 };
}
function ri() {
  const t = /* @__PURE__ */ new Date();
  return t.setHours(0, 0, 0, 0), t;
}
function It(t) {
  return t ? t === "missing" || t === "not_created" || t === "near_miss" || t === "out_of_range" || t === "in_progress" : !1;
}
function oi({ assessment: t, isExpanded: n, onToggle: s, onOpenAnalyzer: a }) {
  const {
    patientName: i,
    assessmentType: r,
    ardDate: c,
    pdpm: o,
    assessmentClass: l,
    sectionProgress: d,
    udaSummary: u,
    querySummary: p
  } = t, m = t.deadlines, h = m?.urgency || "on_track", f = l === "end_of_stay" ? null : en(o?.payment, "short"), g = ii(c, m), y = d?.total > 0 && d.completed === d.total, v = d?.total > 0 ? Math.round(d.completed / d.total * 100) : 0, S = (p?.pending || 0) + (p?.sent || 0), C = It(u?.bims) || It(u?.gg) || It(u?.phq9), b = h === "on_track" || h === "completed", P = g.isCompleted ? "✓ Completed" : g.deadlineText || "", E = g.isCompleted ? "done" : g.cls;
  return /* @__PURE__ */ e(
    "div",
    {
      class: `mds-cc__card${n ? " mds-cc__card--expanded" : ""}`,
      style: { borderLeftColor: si[h] || "#9ca3af" },
      onClick: s,
      role: "button",
      tabIndex: 0,
      onKeyDown: (x) => {
        (x.key === "Enter" || x.key === " ") && (x.preventDefault(), s());
      },
      children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__card-row1", children: [
          /* @__PURE__ */ e("span", { class: "mds-cc__card-name", children: i || "Unknown" }),
          P && /* @__PURE__ */ e("span", { class: `mds-cc__card-urgency mds-cc__card-urgency--${E}`, children: P }),
          /* @__PURE__ */ e("span", { class: `mds-cc__chevron${n ? " mds-cc__chevron--open" : ""}`, children: "›" })
        ] }),
        /* @__PURE__ */ e("div", { class: "mds-cc__card-row2", children: [
          /* @__PURE__ */ e("span", { class: "mds-cc__card-type", children: Rs(r) }),
          g.dateText && /* @__PURE__ */ e(Y, { children: [
            /* @__PURE__ */ e("span", { class: "mds-cc__card-meta-sep", children: "·" }),
            /* @__PURE__ */ e("span", { class: "mds-cc__card-ard-date", children: [
              "ARD ",
              g.dateText
            ] }),
            g.completionText && !g.isCompleted && /* @__PURE__ */ e(Y, { children: [
              /* @__PURE__ */ e("span", { class: "mds-cc__card-meta-sep", children: "·" }),
              /* @__PURE__ */ e("span", { class: "mds-cc__card-complete-date", children: [
                "Complete by ",
                g.completionText
              ] })
            ] })
          ] })
        ] }),
        (C || d?.total > 0 || f || S > 0) && /* @__PURE__ */ e("div", { class: "mds-cc__card-row3", children: [
          C && /* @__PURE__ */ e("span", { class: "mds-cc__card-row3-group", children: [
            /* @__PURE__ */ e(bt, { label: "BIM", status: u?.bims }),
            /* @__PURE__ */ e(bt, { label: "GG", status: u?.gg }),
            /* @__PURE__ */ e(bt, { label: "PHQ", status: u?.phq9 })
          ] }),
          d?.total > 0 && /* @__PURE__ */ e("span", { class: `mds-cc__card-progress${y ? " mds-cc__card-progress--done" : ""}${b ? " mds-cc__card-progress--subtle" : ""}`, children: [
            /* @__PURE__ */ e("span", { class: "mds-cc__card-progress-bar", children: /* @__PURE__ */ e(
              "span",
              {
                class: "mds-cc__card-progress-fill",
                style: { width: `${v}%` }
              }
            ) }),
            !b && /* @__PURE__ */ e("span", { class: "mds-cc__card-progress-text", children: [
              d.completed,
              "/",
              d.total
            ] })
          ] }),
          S > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__card-queries", children: [
            S,
            " pending ",
            S === 1 ? "query" : "queries"
          ] }),
          f && /* @__PURE__ */ e(
            "span",
            {
              class: `mds-cc__card-revenue${a ? " mds-cc__card-revenue--clickable" : ""}`,
              onClick: a ? (x) => {
                x.stopPropagation(), a();
              } : void 0,
              title: a ? "Open PDPM Analyzer" : void 0,
              role: a ? "button" : void 0,
              children: f
            }
          )
        ] })
      ]
    }
  );
}
function ci(t) {
  const [n, s] = w(null), [a, i] = w(!1), [r, c] = w(null);
  return U(() => {
    if (!t) {
      s(null), c(null);
      return;
    }
    let o = !1;
    i(!0), c(null);
    async function l() {
      try {
        if (!(await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" })).authenticated)
          throw new Error("Please log in to view detail");
        const p = getOrg()?.org, m = window.getChatFacilityInfo?.() || "", h = new URLSearchParams({
          externalAssessmentId: t,
          facilityName: m,
          orgSlug: p
        }), _ = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${h}`,
          options: { method: "GET" }
        });
        if (!_.success)
          throw new Error(_.error || "Failed to load assessment detail");
        o || s(_.data);
      } catch (d) {
        o || c(d.message || "Failed to load detail");
      } finally {
        o || i(!1);
      }
    }
    return l(), () => {
      o = !0;
    };
  }, [t]), { detailData: n, loading: a, error: r };
}
function di(t) {
  const n = [];
  return t.impact?.nursing?.wouldChangeGroup && n.push("raises nursing"), t.impact?.ptot?.wouldChangeGroup && n.push("raises PT/OT"), t.impact?.slp?.wouldChangeGroup && n.push("raises speech therapy"), t.impact?.nta?.wouldChangeLevel && n.push("raises NTA tier"), n.length === 0 ? "" : n.join(" · ");
}
function li(t) {
  if (!t) return "not yet sent";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "sent today" : `sent ${n}d ago`;
}
function qs(t) {
  if (!t?.checks)
    return t?.status === "failed" && t.issues?.length > 0 ? t.issues.map((a) => a.message || a) : [];
  const n = { bims: "BIMS", phq9: "PHQ-9", gg: "GG", orders: "Orders", therapyDocs: "Therapy" }, s = [];
  for (const [a, i] of Object.entries(t.checks))
    i.status === "failed" && s.push(i.message || `${n[a] || a} incomplete`);
  return s;
}
function pi({ pdpm: t, detailData: n, payment: s, sectionProgress: a, compliance: i, isEndOfStay: r }) {
  const c = [], o = n?.currentHipps || t?.currentHipps, l = n?.potentialHipps || t?.potentialHipps, d = l && l !== o && !r, p = Xt(s) && s.delta > 0 ? en(s, "short") : null;
  d && p ? c.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part mds-cc__ss-part--revenue", children: [
    p,
    " opportunity"
  ] })) : d && c.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part", children: [
    "HIPPS ",
    o,
    " ",
    "→",
    " ",
    l
  ] })), a?.percentComplete != null && c.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part", children: [
    "Sections ",
    a.percentComplete,
    "%"
  ] }));
  const m = qs(i), h = n?.enhancedDetections?.filter(
    (f) => f.solverStatus === "dont_code" && (f.diagnosisPassed === !1 || f.activeStatusPassed === !1)
  ).length || 0, _ = m.length + h;
  return _ > 0 && c.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part mds-cc__ss-part--issues", children: [
    "⚠",
    " ",
    _,
    " ",
    _ === 1 ? "issue" : "issues"
  ] })), c.length === 0 ? null : /* @__PURE__ */ e("div", { class: "mds-cc__ss", children: c.map((f, g) => /* @__PURE__ */ e(Y, { children: [
    g > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__ss-sep" }),
    f
  ] })) });
}
function ui({ detailData: t, onSelectItem: n }) {
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
      const c = di(i);
      return /* @__PURE__ */ e(
        "div",
        {
          class: "mds-cc__ps-item mds-cc__ps-item--clickable",
          onClick: () => n(i),
          role: "button",
          title: "View evidence",
          children: [
            /* @__PURE__ */ e("span", { class: "mds-cc__ps-item-name", children: i.itemName }),
            c && /* @__PURE__ */ e("span", { class: "mds-cc__ps-item-impact", children: [
              "— ",
              c
            ] })
          ]
        },
        r
      );
    }) })
  ] });
}
function mi() {
  return /* @__PURE__ */ e("div", { class: "mds-cc__prev-detail-loading", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
    /* @__PURE__ */ e("span", { children: "Loading assessment detail..." })
  ] });
}
function hi({ message: t }) {
  return /* @__PURE__ */ e("div", { class: "mds-cc__prev-detail-error", children: /* @__PURE__ */ e("span", { children: [
    "⚠",
    " ",
    t
  ] }) });
}
const Pn = {
  bims: "nursing or social services",
  phq9: "nursing",
  gg: "therapy"
}, Tn = {
  bims: "BIMS",
  phq9: "PHQ-9",
  gg: "GG"
};
function _i(t) {
  if (!t) return [];
  const n = [];
  for (const s of ["bims", "phq9", "gg"]) {
    const a = t[s];
    a === "missing" || a === "not_created" ? n.push({ key: s, label: Tn[s], owner: Pn[s], severity: "missing" }) : (a === "near_miss" || a === "out_of_range") && n.push({ key: s, label: Tn[s], owner: Pn[s], severity: "out_of_range" });
  }
  return n;
}
function gi({ assessment: t, detailData: n }) {
  const s = _i(t.udaSummary), a = qs(t.compliance), i = (n?.outstandingQueries || []).filter(
    (l) => l.status === "sent" || l.status === "pending" || l.status === "awaiting_response"
  ), r = (n?.enhancedDetections || []).filter(
    (l) => l.solverStatus === "dont_code" && (l.diagnosisPassed === !1 || l.activeStatusPassed === !1)
  );
  if (!(s.length > 0 || a.length > 0 || i.length > 0 || r.length > 0)) return null;
  const o = s.length + a.length + i.length + r.length;
  return /* @__PURE__ */ e("div", { class: "mds-cc__blockers", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__blockers-header", children: [
      "⚠",
      " ",
      o,
      " ",
      o === 1 ? "blocker" : "blockers"
    ] }),
    s.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__blockers-group", children: s.map((l) => /* @__PURE__ */ e("div", { class: "mds-cc__blocker mds-cc__blocker--uda", children: [
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-label", children: l.label }),
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-status", children: l.severity === "missing" ? "Not completed" : "Outside window" }),
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-owner", children: [
        "→",
        " ",
        l.owner
      ] })
    ] }, l.key)) }),
    i.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__blockers-group", children: i.map((l, d) => /* @__PURE__ */ e("div", { class: "mds-cc__blocker mds-cc__blocker--query", children: [
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-label", children: [
        l.mdsItem || "Query",
        ": ",
        l.mdsItemName
      ] }),
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-status", children: li(l.sentAt) })
    ] }, d)) }),
    r.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__blockers-group", children: r.map((l, d) => {
      const u = l.mdsItem?.startsWith("I8000:") ? "I8000" : l.mdsItem, p = [];
      return l.diagnosisPassed === !1 && p.push("no dx"), l.activeStatusPassed === !1 && p.push("no active tx"), /* @__PURE__ */ e("div", { class: "mds-cc__blocker mds-cc__blocker--risk", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__blocker-label", children: [
          u,
          ": ",
          l.itemName
        ] }),
        /* @__PURE__ */ e("span", { class: "mds-cc__blocker-status", children: p.join(" · ") })
      ] }, d);
    }) }),
    a.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__blockers-group", children: a.map((l, d) => /* @__PURE__ */ e("div", { class: "mds-cc__blocker mds-cc__blocker--compliance", children: /* @__PURE__ */ e("span", { class: "mds-cc__blocker-label", children: l }) }, d)) })
  ] });
}
function Os({ assessment: t, onOpenAnalyzer: n, onSelectItem: s }) {
  const { pdpm: a, sectionProgress: i, compliance: r } = t, c = t.externalAssessmentId || t.assessmentId, o = t.assessmentClass === "end_of_stay", { detailData: l, loading: d, error: u } = ci(c), p = l?.payment || a?.payment;
  return /* @__PURE__ */ e("div", { class: "mds-cc__preview", onClick: (m) => m.stopPropagation(), children: [
    /* @__PURE__ */ e(gi, { assessment: t, detailData: l }),
    /* @__PURE__ */ e(
      pi,
      {
        pdpm: a,
        detailData: l,
        payment: p,
        sectionProgress: i,
        compliance: r,
        isEndOfStay: o
      }
    ),
    d && /* @__PURE__ */ e(mi, {}),
    !d && u && /* @__PURE__ */ e(hi, { message: u }),
    !d && l && /* @__PURE__ */ e(ui, { detailData: l, onSelectItem: s }),
    /* @__PURE__ */ e("div", { class: "mds-cc__prev-actions", children: [
      /* @__PURE__ */ e("button", { class: "mds-cc__action-btn mds-cc__action-btn--primary", onClick: n, children: "Open Full Analyzer" }),
      c && /* @__PURE__ */ e(
        "button",
        {
          class: "mds-cc__action-btn mds-cc__action-btn--secondary",
          onClick: () => {
            try {
              sessionStorage.setItem("super_cc_restore", JSON.stringify({
                expandedId: c,
                openAnalyzer: !0,
                analyzerMode: "panel",
                timestamp: Date.now()
              }));
            } catch {
            }
            location.href = `${location.origin}/clinical/mds3/sectionlisting.xhtml?ESOLassessid=${c}`;
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
const tn = {
  overdue: "#ef4444",
  urgent: "#f97316",
  approaching: "#eab308",
  on_track: "#22c55e",
  completed: "#6b7280",
  far_out: "#9ca3af"
}, fi = {
  assessments: "MDS",
  queries: "QUERY",
  certs: "CERT"
};
function Ut(t) {
  if (!t) return null;
  const n = typeof t == "string" ? /* @__PURE__ */ new Date(t + "T00:00:00") : new Date(t);
  return isNaN(n) ? null : (n.setHours(0, 0, 0, 0), n);
}
function ot(t) {
  if (!t) return null;
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), a = String(t.getDate()).padStart(2, "0");
  return `${n}-${s}-${a}`;
}
function yi(t) {
  return t.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
function vi(t) {
  return t.getDate();
}
function wi(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth();
}
function Bs(t) {
  const n = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), t.getTime() === n.getTime();
}
function bi(t) {
  const n = new Date(t);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function ct(t) {
  const n = new Date(t), a = (n.getDay() + 6) % 7;
  return n.setDate(n.getDate() - a), n.setHours(0, 0, 0, 0), n;
}
function Be(t, n) {
  const s = new Date(t);
  return s.setDate(s.getDate() + n), s;
}
function An(t, n) {
  const s = new Date(t);
  return s.setMonth(s.getMonth() + n), s;
}
function Ii(t, n, s, a) {
  const i = [];
  for (const r of t || []) {
    if (!r.ardDate) continue;
    const c = r.deadlines?.urgency || "on_track";
    i.push({
      id: r.id || r.assessmentId || r.externalAssessmentId,
      layer: "assessments",
      patientId: r.patientId,
      patientName: r.patientName,
      type: Rs(r.assessmentType) || r.assessmentType,
      date: r.ardDate,
      urgency: c,
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
      type: ki(r.assessmentType),
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
      urgency: Di(r.ardDaysRemaining),
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
      urgency: Ci(r),
      kind: "cert",
      ref: r
    });
  return i;
}
function Di(t) {
  return t == null ? "on_track" : t < 0 ? "overdue" : t <= 3 ? "urgent" : t <= 7 ? "approaching" : "on_track";
}
function Ci(t) {
  const n = t.dueDate ? /* @__PURE__ */ new Date(t.dueDate + "T00:00:00") : null;
  if (!n) return "on_track";
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const a = Math.round((n - s) / 864e5);
  return a < 0 || t.isDelayed ? "overdue" : a <= 3 ? "urgent" : a <= 7 ? "approaching" : "on_track";
}
function ki(t) {
  return t === "quarterly" ? "Quarterly" : t === "annual" ? "Annual" : t === "admission" ? "Admission" : t;
}
function Ni(t) {
  return t ? t.replace(/\s*\(\d[\d-]*\)\s*$/, "").trim().replace(/\w\S*/g, (s) => s[0].toUpperCase() + s.slice(1).toLowerCase()) : "";
}
function Si({ anchorDate: t, itemsByDay: n, onSelectDay: s, selectedDay: a }) {
  const i = bi(t), r = ct(i), c = [];
  for (let l = 0; l < 42; l++) c.push(Be(r, l));
  return /* @__PURE__ */ e("div", { class: "mds-cc__cal-month", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-weekdays", children: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((l) => /* @__PURE__ */ e("div", { class: "mds-cc__cal-weekday", children: l }, l)) }),
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-grid", children: c.map((l) => {
      const d = ot(l), u = n.get(d) || [], p = wi(l, t), m = Bs(l);
      return /* @__PURE__ */ e(
        "div",
        {
          class: `mds-cc__cal-day${p ? "" : " mds-cc__cal-day--out"}${m ? " mds-cc__cal-day--today" : ""}${a === d ? " mds-cc__cal-day--selected" : ""}${u.length > 0 ? " mds-cc__cal-day--has-items" : ""}`,
          onClick: () => u.length > 0 && s(d),
          role: u.length > 0 ? "button" : void 0,
          tabIndex: u.length > 0 ? 0 : void 0,
          children: [
            /* @__PURE__ */ e("div", { class: "mds-cc__cal-day-num", children: vi(l) }),
            u.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__cal-day-dots", children: [
              u.slice(0, 4).map((_, f) => /* @__PURE__ */ e(
                "span",
                {
                  class: "mds-cc__cal-dot",
                  style: { background: tn[_.urgency] || "#9ca3af" }
                },
                f
              )),
              u.length > 4 && /* @__PURE__ */ e("span", { class: "mds-cc__cal-day-overflow", children: [
                "+",
                u.length - 4
              ] })
            ] })
          ]
        },
        d
      );
    }) })
  ] });
}
function xi({ anchorDate: t, itemsByDay: n, onItemClick: s }) {
  const a = ct(t), i = [];
  for (let c = 0; c < 7; c++) i.push(Be(a, c));
  const r = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return /* @__PURE__ */ e("div", { class: "mds-cc__cal-week", children: i.map((c, o) => {
    const l = ot(c), d = n.get(l) || [], u = Bs(c);
    return /* @__PURE__ */ e("div", { class: `mds-cc__cal-week-col${u ? " mds-cc__cal-week-col--today" : ""}`, children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-header", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-week-dow", children: r[o] }),
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-week-date", children: c.toLocaleDateString("en-US", { month: "short", day: "numeric" }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-body", children: [
        d.length === 0 && /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-empty", children: "—" }),
        d.map((p) => {
          const m = p.kind === "open";
          return /* @__PURE__ */ e(
            "div",
            {
              class: `mds-cc__cal-week-item mds-cc__cal-week-item--${p.kind}${m ? " mds-cc__cal-week-item--clickable" : ""}`,
              style: { borderLeftColor: tn[p.urgency] || "#9ca3af" },
              title: `${p.patientName} · ${p.type}`,
              onClick: m ? () => s?.(p) : void 0,
              role: m ? "button" : void 0,
              tabIndex: m ? 0 : void 0,
              children: [
                /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-patient", children: Ni(p.patientName) }),
                /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-type", children: p.type })
              ]
            },
            p.id
          );
        })
      ] })
    ] }, l);
  }) });
}
function Pi({ dayKey: t, items: n, onClose: s, onOpenAnalyzer: a }) {
  const [i, r] = w(null);
  if (U(() => {
    r(null);
  }, [t]), !t || !n || n.length === 0) return null;
  const c = Ut(t), o = c ? c.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : t;
  return i && i.kind === "open" && i.ref ? /* @__PURE__ */ e(Y, { children: [
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
              o
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
        Os,
        {
          assessment: i.ref,
          onOpenAnalyzer: () => a?.(i.ref)
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ e(Y, { children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-backdrop", onClick: s }),
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-header", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-panel-date", children: o }),
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
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-items", children: n.map((l) => {
        const d = l.kind === "open", u = fi[l.layer] || "";
        return /* @__PURE__ */ e(
          "div",
          {
            class: `mds-cc__cal-panel-item mds-cc__cal-panel-item--${l.layer}${d ? " mds-cc__cal-panel-item--clickable" : ""}`,
            style: { borderLeftColor: tn[l.urgency] || "#9ca3af" },
            onClick: d ? () => r(l) : void 0,
            role: d ? "button" : void 0,
            tabIndex: d ? 0 : void 0,
            children: [
              /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-item-top", children: [
                /* @__PURE__ */ e("span", { class: `mds-cc__cal-panel-item-layer mds-cc__cal-panel-item-layer--${l.layer}`, children: u }),
                /* @__PURE__ */ e("span", { class: "mds-cc__cal-panel-item-patient", children: l.patientName })
              ] }),
              /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-item-meta", children: [
                l.type,
                l.kind === "upcoming" && /* @__PURE__ */ e("span", { class: "mds-cc__cal-panel-item-badge", children: "Not opened" })
              ] }),
              d && /* @__PURE__ */ e("span", { class: "mds-cc__cal-panel-item-chevron", children: "›" })
            ]
          },
          l.id
        );
      }) })
    ] })
  ] });
}
function Dt({ label: t, count: n, active: s, color: a, onToggle: i }) {
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
const Ti = { assessments: !0, queries: !0, certs: !0 };
function Ai({
  dashboardAssessments: t,
  scheduleItems: n,
  outstandingQueries: s,
  certs: a,
  onJumpToAssessment: i
}) {
  const [r, c] = w("month"), [o, l] = w(Ti), d = J(
    () => Ii(t, n, s, a),
    [t, n, s, a]
  ), u = J(
    () => d.filter((N) => o[N.layer]),
    [d, o]
  ), p = J(() => {
    const N = /* @__PURE__ */ new Map();
    for (const M of u) {
      const A = M.date, $ = N.get(A) || [];
      $.push(M), N.set(A, $);
    }
    const O = { overdue: 0, urgent: 1, approaching: 2, on_track: 3, far_out: 4, completed: 5 };
    for (const M of N.values())
      M.sort((A, $) => (O[A.urgency] ?? 9) - (O[$.urgency] ?? 9));
    return N;
  }, [u]), m = J(() => {
    const N = /* @__PURE__ */ new Date();
    if (N.setHours(0, 0, 0, 0), u.length === 0) return N;
    const O = `${N.getFullYear()}-${String(N.getMonth() + 1).padStart(2, "0")}`;
    if (u.some((H) => (H.date || "").startsWith(O))) return N;
    const $ = [...u].sort((H, Z) => (H.date || "").localeCompare(Z.date || ""))[0];
    return Ut($.date) || N;
  }, [u]), [h, _] = w(m), [f, g] = w(null), y = ne(!1);
  U(() => {
    y.current || _(m);
  }, [m]);
  const v = f ? p.get(f) : null, C = J(() => {
    if (r === "month") {
      const $ = `${h.getFullYear()}-${String(h.getMonth() + 1).padStart(2, "0")}`;
      return u.filter((q) => !(q.date || "").startsWith($));
    }
    const N = ct(h), O = Be(N, 6), M = ot(N), A = ot(O);
    return u.filter(($) => ($.date || "") < M || ($.date || "") > A);
  }, [u, h, r]).filter((N) => N.urgency === "overdue" || N.urgency === "urgent").length;
  function b() {
    y.current = !0, g(null), _(r === "month" ? An(h, -1) : Be(h, -7));
  }
  function P() {
    y.current = !0, g(null), _(r === "month" ? An(h, 1) : Be(h, 7));
  }
  function E() {
    y.current = !0, g(null);
    const N = /* @__PURE__ */ new Date();
    N.setHours(0, 0, 0, 0), _(N);
  }
  function x() {
    const N = u.filter((A) => A.urgency === "overdue" || A.urgency === "urgent");
    if (N.length === 0) return;
    const O = [...N].sort((A, $) => (A.date || "").localeCompare($.date || "")), M = Ut(O[0].date);
    M && (y.current = !0, g(null), _(M));
  }
  function k(N) {
    if (i && N.kind === "open" && N.ref) {
      const O = N.ref.id || N.ref.assessmentId || N.ref.externalAssessmentId;
      i(O);
    }
  }
  const D = r === "month" ? yi(h) : `Week of ${ct(h).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
  return /* @__PURE__ */ e("div", { class: "mds-cc__cal", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-toolbar", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-nav", children: [
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-nav-btn", onClick: b, "aria-label": "Previous", children: "‹" }),
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-today-btn", onClick: E, children: "Today" }),
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-nav-btn", onClick: P, "aria-label": "Next", children: "›" }),
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-label", children: D })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-mode", children: [
        /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__cal-mode-btn${r === "month" ? " mds-cc__cal-mode-btn--active" : ""}`,
            onClick: () => {
              c("month"), g(null);
            },
            children: "Month"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__cal-mode-btn${r === "week" ? " mds-cc__cal-mode-btn--active" : ""}`,
            onClick: () => {
              c("week"), g(null);
            },
            children: "Week"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-layers", children: [
      /* @__PURE__ */ e(
        Dt,
        {
          label: "Assessments",
          count: d.filter((N) => N.layer === "assessments").length,
          active: o.assessments,
          color: "#6366f1",
          onToggle: () => l((N) => ({ ...N, assessments: !N.assessments }))
        }
      ),
      /* @__PURE__ */ e(
        Dt,
        {
          label: "Queries",
          count: d.filter((N) => N.layer === "queries").length,
          active: o.queries,
          color: "#a855f7",
          onToggle: () => l((N) => ({ ...N, queries: !N.queries }))
        }
      ),
      /* @__PURE__ */ e(
        Dt,
        {
          label: "Certs",
          count: d.filter((N) => N.layer === "certs").length,
          active: o.certs,
          color: "#0891b2",
          onToggle: () => l((N) => ({ ...N, certs: !N.certs }))
        }
      )
    ] }),
    C > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__cal-banner", onClick: x, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "mds-cc__cal-banner-icon", children: "⚠" }),
      /* @__PURE__ */ e("span", { children: [
        /* @__PURE__ */ e("strong", { children: C }),
        " overdue ",
        C === 1 ? "item" : "items",
        " outside this ",
        r
      ] }),
      /* @__PURE__ */ e("span", { class: "mds-cc__cal-banner-action", children: "Jump to earliest ›" })
    ] }),
    r === "month" && /* @__PURE__ */ e(
      Si,
      {
        anchorDate: h,
        itemsByDay: p,
        onSelectDay: g,
        selectedDay: f
      }
    ),
    r === "week" && /* @__PURE__ */ e(
      xi,
      {
        anchorDate: h,
        itemsByDay: p,
        onItemClick: k
      }
    ),
    r === "month" && v && /* @__PURE__ */ e(
      Pi,
      {
        dayKey: f,
        items: v,
        onClose: () => g(null),
        onOpenAnalyzer: (N) => {
          g(null), i?.(N.id || N.assessmentId || N.externalAssessmentId);
        }
      }
    )
  ] });
}
function Hs(t, n, s) {
  const [a, i] = w(null), [r, c] = w(!1), [o, l] = w(null);
  return U(() => {
    if (!t || !s?.assessmentId) return;
    let d = !1;
    i(null), l(null), c(!0);
    async function u() {
      try {
        const m = getOrg()?.org, h = window.getChatFacilityInfo?.() || "";
        if (!m || !h)
          throw new Error("Could not determine organization or facility");
        const _ = t.includes(":") ? t.split(":")[0] : t;
        let f = `/api/extension/mds/items/${encodeURIComponent(_)}?externalAssessmentId=${s.assessmentId}&facilityName=${encodeURIComponent(h)}&orgSlug=${encodeURIComponent(m)}`;
        n && (f += `&categoryKey=${encodeURIComponent(n)}`), chrome.runtime.sendMessage({ type: "API_REQUEST", endpoint: f }, (g) => {
          d || (g?.success ? i(g.data) : l(g?.error || "Failed to load item detail"), c(!1));
        });
      } catch (p) {
        d || (l(p.message || "Failed to load item detail"), c(!1));
      }
    }
    return u(), () => {
      d = !0;
    };
  }, [t, n, s?.assessmentId]), { data: a, loading: r, error: o };
}
function nn(t, n) {
  if (n) {
    if (n.startsWith("order-")) return "order";
    if (n.startsWith("mar-")) return "mar";
    if (n.startsWith("lab-")) return "lab-result";
  }
  if (!t) return "document";
  const s = t.toLowerCase();
  return s.includes("dc_summary") || s.includes("discharge") ? "progress-note" : s.includes("lab") ? "lab-result" : s.includes("order") ? "order" : s.includes("mar") ? "mar" : s.includes("vital") ? "vital-signs" : s.includes("nursing") ? "nursing-note" : s.includes("history") || s.includes("h&p") || s.includes("physical") || s.includes("eval") || s.includes("st ") || s.includes("slp") ? "progress-note" : "document";
}
const sn = {
  order: "Order",
  mar: "MAR",
  "lab-result": "Lab",
  "progress-note": "Progress Note",
  "nursing-note": "Nursing Note",
  "vital-signs": "Vitals",
  "therapy-doc": "Therapy Doc",
  document: "Document"
};
function ue(t) {
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
    return { viewerType: "clinical-note", id: s.replace(/^pcc-prognote-/, "").replace(/^patient-practnote-/, "") };
  if (a === "therapy_document" && s)
    return { viewerType: "therapy-document", id: s.replace(/^therapy-doc-/, "") };
  if (a === "document" && s) return { viewerType: "document", id: s };
  if (a === "order" && s) return { viewerType: "order", id: s };
  if (i) {
    if (i.startsWith("therapy-doc-")) return { viewerType: "therapy-document", id: i.replace("therapy-doc-", "") };
    if (i.startsWith("pcc-prognote-")) return { viewerType: "clinical-note", id: i.replace("pcc-prognote-", "") };
    if (i.startsWith("patient-practnote-")) return { viewerType: "clinical-note", id: i.replace("patient-practnote-", "") };
    if (i.includes("-chunk-")) return { viewerType: "document", id: i.split("-chunk-")[0], chunk: parseInt(i.split("-chunk-")[1], 10) };
    if (i.startsWith("uda-")) return { viewerType: "uda", id: i.replace("uda-", "") };
  }
  return { viewerType: null, id: null };
}
function Mi(t) {
  const n = ue(t), s = t.quoteText || t.quote || t.snippet || "";
  if (n.viewerType === "clinical-note" && n.id)
    return window.showClinicalNoteModal?.(n.id);
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
function Ei(t) {
  const n = ue(t);
  return t.sourceType === "order" || (t.evidenceId || "").startsWith("order-") ? "View Administrations" : n.viewerType === "therapy-document" ? "View Document" : n.viewerType === "clinical-note" ? "View Note" : n.viewerType === "document" ? "View PDF" : n.viewerType === "uda" ? "View Assessment" : null;
}
const Mn = () => /* @__PURE__ */ e("svg", { class: "sid__step-icon sid__step-icon--pass", viewBox: "0 0 20 20", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ e("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clip-rule": "evenodd" }) }), En = () => /* @__PURE__ */ e("svg", { class: "sid__step-icon sid__step-icon--fail", viewBox: "0 0 20 20", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ e("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", "clip-rule": "evenodd" }) }), Fs = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
function $n(t) {
  const n = t.sourceType || t.type || "", s = t.evidenceId || t.sourceId || "";
  return n === "order" || n === "mar" || n === "medication" || s.startsWith("order-") || s.startsWith("admin-") || s.startsWith("mar-") ? "orders" : n === "progress-note" || n === "nursing-note" || n === "clinical_note" || t.type === "clinical_note" || s.startsWith("pcc-prognote-") || s.startsWith("patient-practnote-") ? "notes" : n === "document" || n === "therapy-doc" || t.type === "document" || t.type === "therapy_document" || s.startsWith("therapy-doc-") || s.includes("-chunk-") ? "documents" : n ? "other" : "documents";
}
const $i = { orders: "Orders", notes: "Notes", documents: "Documents", other: "Other" };
function Li({ fall: t }) {
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
      /* @__PURE__ */ e(Fs, {})
    ] })
  ] });
}
function Ri({ ev: t, index: n, onViewSource: s }) {
  const a = t.quoteText || t.orderDescription || t.quote || t.snippet || t.text || "";
  if (!a && !t.rationale) return null;
  const i = t.sourceType || nn(t.displayName, t.evidenceId), r = t.displayName || sn[i] || i, c = Ei(t), o = !!c;
  return /* @__PURE__ */ e(
    "div",
    {
      class: `sid__ev-card${o ? " sid__ev-card--clickable" : ""}`,
      onClick: o ? () => {
        if (s) {
          const d = ue(t), u = t.sourceType === "order" || (t.evidenceId || "").startsWith("order-"), p = d.viewerType;
          if (p === "document" || p === "clinical-note" || p === "therapy-document" || u) {
            s(t, n);
            return;
          }
        }
        Mi(t);
      } : void 0,
      role: o ? "button" : void 0,
      children: [
        /* @__PURE__ */ e("div", { class: "sid__ev-header", children: /* @__PURE__ */ e("span", { class: `sid__ev-type sid__ev-type--${i}`, children: r }) }),
        a && /* @__PURE__ */ e("div", { class: "sid__ev-quote", children: a }),
        t.rationale && /* @__PURE__ */ e("div", { class: "sid__ev-rationale", children: t.rationale }),
        o && /* @__PURE__ */ e("div", { class: "sid__ev-action", children: [
          /* @__PURE__ */ e("span", { children: c }),
          /* @__PURE__ */ e(Fs, {})
        ] })
      ]
    }
  );
}
function Ye({ label: t, impact: n }) {
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
function qi({ diagnosisSummary: t, treatmentSummary: n, validation: s }) {
  const a = s?.diagnosisCheck?.passed ?? s?.diagnosisPassed, i = s?.treatmentCheck?.passed ?? s?.activeStatusPassed;
  return /* @__PURE__ */ e("div", { class: "sid__steps", children: [
    /* @__PURE__ */ e("div", { class: `sid__step ${a ? "sid__step--pass" : "sid__step--fail"}`, children: [
      a ? /* @__PURE__ */ e(Mn, {}) : /* @__PURE__ */ e(En, {}),
      /* @__PURE__ */ e("div", { class: "sid__step-content", children: [
        /* @__PURE__ */ e("div", { class: "sid__step-label", children: "Diagnosis" }),
        t && /* @__PURE__ */ e("div", { class: "sid__step-summary", children: t })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: `sid__step ${i ? "sid__step--pass" : "sid__step--fail"}`, children: [
      i ? /* @__PURE__ */ e(Mn, {}) : /* @__PURE__ */ e(En, {}),
      /* @__PURE__ */ e("div", { class: "sid__step-content", children: [
        /* @__PURE__ */ e("div", { class: "sid__step-label", children: "Treatment" }),
        n && /* @__PURE__ */ e("div", { class: "sid__step-summary", children: n })
      ] })
    ] })
  ] });
}
function Oi({ rationale: t }) {
  return t ? /* @__PURE__ */ e("div", { class: "sid__rationale", children: [
    /* @__PURE__ */ e("div", { class: "sid__rationale-label", children: "Rationale" }),
    t
  ] }) : null;
}
function Bi({ carePlan: t }) {
  if (!t) return null;
  const [n, s] = w(!1), a = t.onCarePlan, i = t.items || [];
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
    n && i.length > 0 && /* @__PURE__ */ e("ul", { class: "sid__careplan-items", children: i.map((r, c) => /* @__PURE__ */ e("li", { children: r }, c)) })
  ] });
}
function Us({ variant: t = "compact", data: n, detectionItem: s, mdsItem: a, onViewSource: i, onDismiss: r, dismissing: c, assessmentId: o }) {
  const l = t === "full", d = n?.item, u = !!d?.columns, p = d && !u, m = !!(n?.diagnosisSummary || n?.treatmentSummary);
  let h = d?.status;
  !h && u && (h = Object.values(d.columns || {}).some((ie) => ie?.answer?.toLowerCase() === "yes") ? "code" : "dont_code");
  const _ = h === "needs_physician_query", f = h === "code" || h === "recommend_coding", g = _ ? "sid__verdict-dot--query" : f ? "sid__verdict-dot--code" : "sid__verdict-dot--no-code", y = _ ? "Needs Query" : f ? "Recommend Coding" : h?.replace(/_/g, " ") || "Don't Code", v = d?.evidence || d?.queryEvidence || [], S = [];
  if (u) {
    const V = /* @__PURE__ */ new Set();
    for (const ie of Object.values(d.columns || {}))
      ie?.evidence && ie.evidence.forEach((me) => {
        const Q = me.sourceId || me.quote || JSON.stringify(me);
        V.has(Q) || (V.add(Q), S.push(me));
      });
  }
  const C = p ? v : S, [b, P] = w(!1), [E, x] = w(null), k = {};
  C.forEach((V) => {
    const ie = $n(V);
    k[ie] = (k[ie] || 0) + 1;
  });
  const D = Object.keys(k).sort(), N = D.length > 1, O = E ? C.filter((V) => $n(V) === E) : C, M = b ? O : O.slice(0, 4), A = d?.keyFindings || [], [$, q] = w(l), H = s?.impact, Z = H && (H.slp || H.nta || H.nursing || H.ptot), K = d?.columns || {}, R = Object.keys(K), [B, ee] = w(R[0] || "A"), T = K[B], L = d?.subItems || [], [W, G] = w(!1), [ae, X] = w(""), te = a?.startsWith("I8000:") ? "I8000" : a;
  return /* @__PURE__ */ e(Y, { children: [
    /* @__PURE__ */ e("div", { class: "sid__verdict", children: [
      /* @__PURE__ */ e("span", { class: `sid__verdict-dot ${g}` }),
      /* @__PURE__ */ e("span", { class: "sid__verdict-text", children: y })
    ] }),
    m && /* @__PURE__ */ e(
      qi,
      {
        diagnosisSummary: n.diagnosisSummary,
        treatmentSummary: n.treatmentSummary,
        validation: d?.validation
      }
    ),
    m && n?.carePlan && /* @__PURE__ */ e(Bi, { carePlan: n.carePlan }),
    !m && u && T && /* @__PURE__ */ e("div", { class: "sid__rationale", children: [
      /* @__PURE__ */ e("div", { class: "sid__col-answer", children: [
        /* @__PURE__ */ e("span", { class: "sid__col-label", children: [
          "Column ",
          B,
          ":"
        ] }),
        /* @__PURE__ */ e("span", { class: `sid__col-badge ${T.answer?.toLowerCase() === "yes" ? "sid__col-badge--yes" : "sid__col-badge--no"}`, children: T.answer?.toUpperCase() }),
        (T.firstAdministered || T.lastAdministered) && /* @__PURE__ */ e("span", { class: "sid__col-dates", children: [
          T.firstAdministered,
          T.firstAdministered && T.lastAdministered && " – ",
          T.lastAdministered
        ] })
      ] }),
      T.rationale && /* @__PURE__ */ e("div", { children: T.rationale })
    ] }),
    !m && !u && /* @__PURE__ */ e(Oi, { rationale: d?.rationale }),
    u && R.length > 1 && /* @__PURE__ */ e("div", { class: "sid__coltabs", children: R.map((V) => {
      const me = K[V]?.answer?.toLowerCase() === "yes";
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `sid__coltab ${B === V ? "sid__coltab--on" : ""}`,
          onClick: () => ee(V),
          children: [
            "Col ",
            V,
            /* @__PURE__ */ e("span", { class: `sid__coltab-dot ${me ? "sid__coltab-dot--yes" : ""}` })
          ]
        },
        V
      );
    }) }),
    L.length > 0 && /* @__PURE__ */ e("div", { class: "sid__subs", children: L.map((V, ie) => {
      const me = V.columns?.A;
      if (!me) return null;
      const Q = me.answer?.toLowerCase() === "yes";
      return /* @__PURE__ */ e("div", { class: `sid__sub ${Q ? "sid__sub--on" : ""}`, children: [
        /* @__PURE__ */ e("span", { class: `sid__sub-dot ${Q ? "sid__sub-dot--yes" : ""}`, children: Q ? "✓" : "–" }),
        /* @__PURE__ */ e("span", { class: "sid__sub-name", children: V.description })
      ] }, V.mdsItem || ie);
    }) }),
    l && Z && /* @__PURE__ */ e("div", { class: "sid__impacts", children: [
      /* @__PURE__ */ e(Ye, { label: "NTA", impact: H.nta }),
      /* @__PURE__ */ e(Ye, { label: "Nursing", impact: H.nursing }),
      /* @__PURE__ */ e(Ye, { label: "SLP", impact: H.slp }),
      /* @__PURE__ */ e(Ye, { label: "PT/OT", impact: H.ptot })
    ] }),
    d?.falls?.length > 0 && /* @__PURE__ */ e("div", { class: "super-falls-section", children: [
      /* @__PURE__ */ e("div", { class: "super-falls-section__label", children: [
        "Falls (",
        d.fallCount ?? d.falls.length,
        ")"
      ] }),
      d.lookbackWindow && /* @__PURE__ */ e("div", { class: "super-lookback-info", children: [
        "Lookback: ",
        d.lookbackWindow.startDate,
        " – ",
        d.lookbackWindow.endDate,
        " (",
        d.lookbackWindow.daysCovered,
        " days)"
      ] }),
      /* @__PURE__ */ e("div", { class: "super-falls-list", children: d.falls.map((V, ie) => /* @__PURE__ */ e(Li, { fall: V }, V.incidentId || ie)) })
    ] }),
    C.length > 0 && /* @__PURE__ */ e("div", { class: "sid__evidence", children: [
      /* @__PURE__ */ e("div", { class: "sid__ev-label", children: [
        "Evidence (",
        C.length,
        ")"
      ] }),
      N && /* @__PURE__ */ e("div", { class: "sid__ev-filters", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `sid__ev-chip ${E === null ? "sid__ev-chip--active" : ""}`,
            onClick: () => {
              x(null), P(!1);
            },
            children: [
              "All (",
              C.length,
              ")"
            ]
          }
        ),
        D.map((V) => /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `sid__ev-chip ${E === V ? "sid__ev-chip--active" : ""}`,
            onClick: () => {
              x(E === V ? null : V), P(!1);
            },
            children: [
              $i[V] || V,
              " (",
              k[V],
              ")"
            ]
          },
          V
        ))
      ] }),
      /* @__PURE__ */ e("div", { class: "sid__ev-list", children: M.map((V, ie) => /* @__PURE__ */ e(Ri, { ev: V, index: ie, onViewSource: i }, ie)) }),
      O.length > 4 && !b && /* @__PURE__ */ e("button", { class: "sid__ev-show-more", type: "button", onClick: () => P(!0), children: [
        "Show all ",
        O.length,
        " ↓"
      ] })
    ] }),
    A.length > 0 && /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e("button", { class: "sid__findings-toggle", type: "button", onClick: () => q(!$), children: [
        /* @__PURE__ */ e("span", { class: `sid__findings-arrow ${$ ? "sid__findings-arrow--open" : ""}`, children: "▶" }),
        "Key Findings (",
        A.length,
        ")"
      ] }),
      $ && /* @__PURE__ */ e("ul", { class: "sid__findings", children: A.map((V, ie) => /* @__PURE__ */ e("li", { children: V }, ie)) })
    ] }),
    W && r ? /* @__PURE__ */ e("div", { class: "sid__dismiss-form", children: [
      /* @__PURE__ */ e("label", { children: "Why do you disagree? (optional)" }),
      /* @__PURE__ */ e(
        "textarea",
        {
          value: ae,
          onInput: (V) => X(V.target.value),
          placeholder: "Enter reason...",
          disabled: c
        }
      ),
      /* @__PURE__ */ e("div", { class: "sid__dismiss-form-btns", children: [
        /* @__PURE__ */ e(
          "button",
          {
            class: "sid__btn sid__btn--secondary",
            type: "button",
            disabled: c,
            onClick: () => {
              G(!1), X("");
            },
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            class: "sid__btn sid__btn--primary",
            type: "button",
            disabled: c,
            onClick: () => r(ae),
            children: c ? "Submitting..." : "Submit"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e("div", { class: "sid__actions", children: [
      r && /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--dismiss", type: "button", onClick: () => G(!0), children: "Dismiss" }),
      /* @__PURE__ */ e("div", { class: "sid__actions-right", children: [
        /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--primary", onClick: () => {
          const V = {
            mdsItem: d?.mdsItem || a,
            description: d?.description || s?.itemName,
            aiAnswer: d
          };
          window.QuerySendModal?.show(V);
        }, type: "button", children: "Query Physician" }),
        a && /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--secondary", onClick: () => window.navigateToMDSItem?.(a, o), type: "button", children: [
          "Go to ",
          te,
          " ↗"
        ] })
      ] })
    ] })
  ] });
}
const ve = [50, 75, 100, 125, 150, 200], Hi = 100;
function an({
  url: t,
  wordBlocks: n = [],
  targetPage: s = 1,
  title: a = "Document",
  documentType: i,
  effectiveDate: r,
  fileSize: c,
  onClose: o,
  openInNewTabUrl: l
}) {
  const [d, u] = w(null), [p, m] = w(s), [h, _] = w(1), [f, g] = w(Hi), [y, v] = w(0), [S, C] = w(!0), [b, P] = w(!1), [E, x] = w(null), [k, D] = w(String(s)), N = ne(null), O = ne(null), M = ne(null), A = ne({}), $ = ne(null), q = ne(0);
  c && (c / 1024 > 1024 ? `${(c / 1024 / 1024).toFixed(1)}` : `${(c / 1024).toFixed(0)}`);
  const H = (T) => {
    if (!T) return "";
    try {
      return new Date(T).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    } catch {
      return T;
    }
  };
  U(() => {
    if (!t) {
      x("No document URL available"), C(!1);
      return;
    }
    let T = !1;
    return (async () => {
      try {
        if (typeof pdfjsLib > "u") throw new Error("PDF.js library not loaded");
        pdfjsLib.GlobalWorkerOptions.workerSrc || (pdfjsLib.GlobalWorkerOptions.workerSrc = chrome.runtime.getURL("lib/pdf.worker.min.js"));
        const L = await pdfjsLib.getDocument(t).promise;
        if (T) return;
        const W = Math.min(s, L.numPages);
        u(L), _(L.numPages), m(W), D(String(W)), C(!1);
      } catch (L) {
        T || (console.error("[PDFViewer] Load failed:", L), x(`Failed to load PDF: ${L.message}`), C(!1));
      }
    })(), () => {
      T = !0;
    };
  }, [t]);
  const Z = j(async (T) => {
    if (!d) return;
    const L = N.current, W = O.current, G = M.current;
    if (!L || !W || !G) return;
    const ae = ++q.current, X = Math.max(1, Math.min(T, h));
    P(!0);
    try {
      const te = await d.getPage(X);
      if (q.current !== ae) return;
      const V = await Fi(te, X, A, y), ie = G.clientWidth, me = Math.max(ie - 16, 200), Q = te.getViewport({ scale: 1, rotation: V }), ye = me / Q.width * (f / 100), he = te.getViewport({ scale: ye, rotation: V }), Se = L.getContext("2d"), ln = W.getContext("2d");
      if (L.width = he.width, L.height = he.height, W.width = he.width, W.height = he.height, Se.clearRect(0, 0, L.width, L.height), ln.clearRect(0, 0, W.width, W.height), await te.render({ canvasContext: Se, viewport: he }).promise, q.current !== ae) return;
      const pn = (n || []).filter((je) => je.p === X);
      if (pn.length > 0) {
        const je = Vi(ln, pn, he, V);
        je.length > 0 && zi(je, G);
      }
    } catch (te) {
      console.error("[PDFViewer] Render failed:", te);
    } finally {
      q.current === ae && P(!1);
    }
  }, [d, h, f, y, n]);
  U(() => {
    d && Z(p);
  }, [d, p, f, y, Z]);
  const K = j((T) => {
    const L = Math.max(1, Math.min(T, h));
    m(L), D(String(L));
  }, [h]), R = j((T) => {
    g((L) => {
      const W = ve.indexOf(L);
      if (W === -1) {
        const G = ve.reduce((X, te) => Math.abs(te - L) < Math.abs(X - L) ? te : X), ae = ve.indexOf(G);
        return ve[Math.max(0, Math.min(ae + T, ve.length - 1))];
      }
      return ve[Math.max(0, Math.min(W + T, ve.length - 1))];
    });
  }, []), B = j(() => {
    v((T) => (T + 90) % 360), A.current = {};
  }, []);
  U(() => {
    const T = (L) => {
      if ($.current && !(L.target.tagName === "INPUT" || L.target.tagName === "TEXTAREA") && $.current.closest(".super-pdf-modal"))
        switch (L.key) {
          case "ArrowLeft":
            L.preventDefault(), m((W) => {
              const G = Math.max(1, W - 1);
              return D(String(G)), G;
            });
            break;
          case "ArrowRight":
            L.preventDefault(), m((W) => {
              const G = Math.min(h, W + 1);
              return D(String(G)), G;
            });
            break;
          case "+":
          case "=":
            L.preventDefault(), R(1);
            break;
          case "-":
            L.preventDefault(), R(-1);
            break;
          case "r":
          case "R":
            L.preventDefault(), B();
            break;
        }
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [h, R, B]);
  const ee = () => {
    const T = parseInt(k, 10);
    !isNaN(T) && T >= 1 && T <= h ? K(T) : D(String(p));
  };
  return S ? /* @__PURE__ */ e("div", { class: "super-pdfv super-pdfv--center", ref: $, children: /* @__PURE__ */ e("div", { class: "super-pdfv__loader", children: [
    /* @__PURE__ */ e("div", { class: "super-pdfv__loader-ring" }),
    /* @__PURE__ */ e("span", { children: "Loading document..." })
  ] }) }) : E ? /* @__PURE__ */ e("div", { class: "super-pdfv super-pdfv--center", ref: $, children: /* @__PURE__ */ e("div", { class: "super-pdfv__empty-state", children: [
    /* @__PURE__ */ e("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "#9ca3af", "stroke-width": "1.5", children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
    ] }),
    /* @__PURE__ */ e("p", { children: E })
  ] }) }) : /* @__PURE__ */ e("div", { class: "super-pdfv", ref: $, children: [
    /* @__PURE__ */ e("div", { class: "super-pdfv__header", children: [
      /* @__PURE__ */ e("div", { class: "super-pdfv__header-left", children: [
        /* @__PURE__ */ e("svg", { class: "super-pdfv__header-icon", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
          /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" })
        ] }),
        /* @__PURE__ */ e("span", { class: "super-pdfv__header-title", children: a }),
        r && /* @__PURE__ */ e("span", { class: "super-pdfv__header-date", children: H(r) })
      ] }),
      /* @__PURE__ */ e("div", { class: "super-pdfv__header-right", children: [
        /* @__PURE__ */ e("div", { class: "super-pdfv__group", children: [
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => K(p - 1), disabled: p <= 1, title: "Previous page", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", children: /* @__PURE__ */ e("polyline", { points: "15 18 9 12 15 6" }) }) }),
          /* @__PURE__ */ e("div", { class: "super-pdfv__page-pill", children: [
            /* @__PURE__ */ e(
              "input",
              {
                class: "super-pdfv__page-input",
                type: "text",
                value: k,
                onInput: (T) => D(T.target.value),
                onBlur: ee,
                onKeyDown: (T) => T.key === "Enter" && T.target.blur(),
                style: { width: `${Math.max(2, String(h).length + 0.5)}ch` }
              }
            ),
            /* @__PURE__ */ e("span", { class: "super-pdfv__page-of", children: [
              "of ",
              h
            ] })
          ] }),
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => K(p + 1), disabled: p >= h, title: "Next page", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", children: /* @__PURE__ */ e("polyline", { points: "9 18 15 12 9 6" }) }) })
        ] }),
        /* @__PURE__ */ e("div", { class: "super-pdfv__tb-sep" }),
        /* @__PURE__ */ e("div", { class: "super-pdfv__group", children: [
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => R(-1), disabled: f <= ve[0], title: "Zoom out", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) }) }),
          /* @__PURE__ */ e("span", { class: "super-pdfv__zoom-label", children: [
            f,
            "%"
          ] }),
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => R(1), disabled: f >= ve[ve.length - 1], title: "Zoom in", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
            /* @__PURE__ */ e("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
            /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
          ] }) })
        ] }),
        /* @__PURE__ */ e("div", { class: "super-pdfv__tb-sep" }),
        /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: B, title: "Rotate 90°", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ e("polyline", { points: "1 4 1 10 7 10" }),
          /* @__PURE__ */ e("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
        ] }) }),
        l && /* @__PURE__ */ e("a", { href: l, target: "_blank", rel: "noopener noreferrer", class: "super-pdfv__open-btn", title: "Open in new tab", children: /* @__PURE__ */ e("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
          /* @__PURE__ */ e("polyline", { points: "15 3 21 3 21 9" }),
          /* @__PURE__ */ e("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "super-pdfv__scroll", ref: M, children: [
      /* @__PURE__ */ e("div", { class: "super-pdfv__canvas-wrap", children: [
        /* @__PURE__ */ e("canvas", { class: "super-pdfv__canvas", ref: N }),
        /* @__PURE__ */ e("canvas", { class: "super-pdfv__highlight", ref: O })
      ] }),
      b && /* @__PURE__ */ e("div", { class: "super-pdfv__page-loading", children: /* @__PURE__ */ e("div", { class: "super-pdfv__loader-ring super-pdfv__loader-ring--sm" }) })
    ] })
  ] });
}
async function Fi(t, n, s, a) {
  if (s.current[n] !== void 0)
    return (s.current[n] + a) % 360;
  const i = t.view, r = i[2] - i[0], c = i[3] - i[1];
  let o = 0, l = 0;
  try {
    const u = (await t.getTextContent()).items.filter((p) => p.str && p.str.trim().length > 0);
    if (l = u.length, u.length >= 3) {
      const p = { 0: 0, 90: 0, 180: 0, 270: 0 };
      for (const _ of u) {
        const [f, g] = _.transform, y = Math.abs(f), v = Math.abs(g);
        y < 0.01 && v < 0.01 || (y > v ? p[f > 0 ? 0 : 180]++ : p[g > 0 ? 90 : 270]++);
      }
      let m = 0, h = 0;
      for (const [_, f] of Object.entries(p))
        f > m && (m = f, h = parseInt(_));
      h !== 0 && (o = h);
    }
  } catch {
  }
  if (o === 0 && l < 3)
    try {
      const d = await t.getOperatorList();
      let u = [1, 0, 0, 1, 0, 0];
      for (let p = 0; p < d.fnArray.length; p++)
        if (d.fnArray[p] === 12 && (u = d.argsArray[p]), d.fnArray[p] === 85 || d.fnArray[p] === 82) {
          const [m, h] = u;
          Math.abs(h) > Math.abs(m) * 5 && Math.abs(u[2]) > Math.abs(u[3]) * 5 && (o = h > 0 ? 270 : 90);
          break;
        }
    } catch {
    }
  return o === 0 && r > c * 1.05 && (o = 90), s.current[n] = o, (o + a) % 360;
}
function Ui(t, n, s, a) {
  const { x: i, y: r, w: c, h: o } = t, l = a % 360;
  return l === 0 ? { x: i * n, y: r * s, w: c * n, h: o * s } : l === 90 ? { x: (1 - r - o) * n, y: i * s, w: o * n, h: c * s } : l === 180 ? { x: (1 - i - c) * n, y: (1 - r - o) * s, w: c * n, h: o * s } : { x: r * n, y: (1 - i - c) * s, w: o * n, h: c * s };
}
function Gi(t) {
  if (t.length <= 1) return t;
  const n = [...t].sort((i, r) => i.y - r.y || i.x - r.x), s = [];
  let a = { ...n[0] };
  for (let i = 1; i < n.length; i++) {
    const r = n[i], c = Math.max(a.h, r.h), o = Math.abs(a.y + a.h / 2 - (r.y + r.h / 2)) < c * 0.6, d = r.x - (a.x + a.w) < c * 0.5;
    if (o && d) {
      const u = Math.max(a.x + a.w, r.x + r.w), p = Math.min(a.y, r.y), m = Math.max(a.y + a.h, r.y + r.h);
      a.x = Math.min(a.x, r.x), a.y = p, a.w = u - a.x, a.h = m - p;
    } else
      s.push(a), a = { ...r };
  }
  return s.push(a), s;
}
function Vi(t, n, s, a) {
  const i = s.width, r = s.height, c = n.map((l) => Ui(l, i, r, a)), o = Gi(c);
  return t.fillStyle = "rgba(250, 204, 21, 0.28)", o.forEach((l) => {
    const p = l.x - 2, m = l.y - 2, h = l.w + 4, _ = l.h + 4;
    t.beginPath(), t.moveTo(p + 3, m), t.lineTo(p + h - 3, m), t.quadraticCurveTo(p + h, m, p + h, m + 3), t.lineTo(p + h, m + _ - 3), t.quadraticCurveTo(p + h, m + _, p + h - 3, m + _), t.lineTo(p + 3, m + _), t.quadraticCurveTo(p, m + _, p, m + _ - 3), t.lineTo(p, m + 3), t.quadraticCurveTo(p, m, p + 3, m), t.closePath(), t.fill();
  }), o.map((l, d) => ({ ...l, isActive: d === 0 }));
}
function zi(t, n) {
  if (!t.length || !n) return;
  const s = t.find((i) => i.isActive) || t[0], a = n.querySelector(".super-pdfv__canvas-wrap");
  a && requestAnimationFrame(() => {
    const i = n.getBoundingClientRect(), r = a.getBoundingClientRect(), c = r.left - i.left + n.scrollLeft, o = r.top - i.top + n.scrollTop;
    n.scrollTo({
      left: Math.max(0, c + s.x + s.w / 2 - n.clientWidth / 2),
      top: Math.max(0, o + s.y + s.h / 2 - n.clientHeight / 2),
      behavior: "smooth"
    });
  });
}
function Wi(t) {
  const { sourceType: n, evidenceId: s } = t, a = t.sourceId || t.id || "", i = t.type;
  if (n === "progress-note" && a)
    return { viewerType: "clinical-note", id: a };
  if (n === "therapy-doc" && a)
    return { viewerType: "therapy-document", id: a };
  if (n === "document" && a)
    return { viewerType: "document", id: a };
  if (n === "uda") {
    const c = (a || s || "").replace(/^uda-/, "");
    if (c) return { viewerType: "uda", id: c };
  }
  if (a && a.includes("-chunk-"))
    return { viewerType: "document", id: a.split("-chunk-")[0], chunk: parseInt(a.split("-chunk-")[1], 10) };
  if (i === "clinical_note" && a)
    return { viewerType: "clinical-note", id: a.replace(/^pcc-prognote-/, "").replace(/^patient-practnote-/, "") };
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
    if (r.startsWith("patient-practnote-"))
      return { viewerType: "clinical-note", id: r.replace("patient-practnote-", "") };
    if (r.includes("-chunk-"))
      return { viewerType: "document", id: r.split("-chunk-")[0], chunk: parseInt(r.split("-chunk-")[1], 10) };
    if (r.startsWith("uda-"))
      return { viewerType: "uda", id: r.replace("uda-", "") };
  }
  return { viewerType: null, id: null };
}
function ht() {
  const t = document.querySelector(".icd10-viewer-modal__container");
  return t || document.body;
}
async function Qi(t, n) {
  const s = `/api/extension/clinical-notes/${t}?facilityName=${encodeURIComponent(n.facilityName)}&orgSlug=${n.orgSlug}`, a = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: s
  });
  if (!a.success) throw new Error(a.error);
  return a.data;
}
async function ji(t, n) {
  const s = `/api/extension/therapy-documents/${t}?facilityName=${encodeURIComponent(n.facilityName)}&orgSlug=${n.orgSlug}`, a = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: s
  });
  if (!a.success) throw new Error(a.error);
  return a.data;
}
async function Ge(t, n) {
  const s = `/api/extension/documents/${t}?facilityName=${encodeURIComponent(n.facilityName)}&orgSlug=${n.orgSlug}`, a = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: s
  });
  if (!a.success) throw new Error(a.error);
  return a.data;
}
async function Ki(t, n, s, a = null) {
  let i = `/api/extension/patients/${n}/uda/${t}?facilityName=${encodeURIComponent(s.facilityName)}&orgSlug=${s.orgSlug}`;
  a && (i += `&quote=${encodeURIComponent(a)}`);
  const r = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: i
  });
  if (!r.success) throw new Error(r.error);
  return r.data;
}
function Yi() {
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
function dt(t) {
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
function Ji(t) {
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
const _t = "data-evidence-highlight";
function lt(t) {
  return t ? t.toLowerCase().replace(/\s+/g, " ").trim() : "";
}
function Gs(t, n) {
  if (!t || !n) return !1;
  const s = lt(t), a = lt(n);
  return s.length < 10 || a.length < 10 ? !1 : s.includes(a) || a.includes(s);
}
function Vs(t, n, s = 4) {
  if (!t || !n) return !1;
  const a = lt(t);
  return lt(n).split(/\s+/).filter((o) => o.length >= s).filter((o) => a.includes(o)).length >= 2;
}
function pt(t, n) {
  return Gs(n, t) || Vs(n, t);
}
function Zi(t, n) {
  return t.some((s) => Gs(s, n) || Vs(s, n));
}
function Ln(t) {
  if (!t) return "";
  try {
    const n = new Date(t);
    if (isNaN(n.getTime())) return t;
    const s = n.getMonth() + 1, a = n.getDate(), i = n.getFullYear();
    let r = n.getHours();
    const c = n.getMinutes().toString().padStart(2, "0"), o = n.getSeconds().toString().padStart(2, "0"), l = r >= 12 ? "PM" : "AM";
    return r = r % 12 || 12, `${s}/${a}/${i} ${r}:${c}:${o} ${l}`;
  } catch {
    return t;
  }
}
function fe(t, n) {
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
function rn(t, n, s) {
  const a = t.querySelector(`.${s}__body`);
  a.innerHTML = `
    <div class="super-viewer-error">
      <div class="super-viewer-error__icon">⚠️</div>
      <div class="super-viewer-error__message">${z(n)}</div>
    </div>
  `;
}
async function Xi(t) {
  const n = await window.getCurrentParams(), s = er();
  ht().appendChild(s);
  try {
    const a = await Qi(t, n);
    tr(s, a.note);
  } catch (a) {
    rn(s, a.message, "super-note-modal");
  }
}
function er() {
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
  `, fe(t, "super-note-modal"), t;
}
function tr(t, n) {
  const s = t.querySelector(".super-note-modal__container"), a = n.noteType === "practitioner" ? "Practitioner Note" : "Progress Note", i = n.noteType === "practitioner" ? "super-note-badge--practitioner" : "super-note-badge--progress";
  s.innerHTML = `
    <div class="super-note-modal__header">
      <div class="super-note-modal__title-row">
        <span class="super-note-modal__icon">📝</span>
        <div class="super-note-modal__title">
          <span class="super-note-modal__name">${z(n.department || a)}</span>
          <span class="super-note-badge ${i}">${a}</span>
        </div>
        <button class="super-note-modal__close">&times;</button>
      </div>
      ${n.provider ? `<div class="super-note-modal__provider">${z(n.provider)}</div>` : ""}
      <div class="super-note-modal__meta">
        ${n.effectiveDate ? `<span>${dt(n.effectiveDate)}</span>` : ""}
        ${n.visitType ? `<span class="super-note-modal__visit-type">${z(n.visitType)}</span>` : ""}
        ${n.task ? `<span class="super-note-modal__task">${z(n.task)}</span>` : ""}
      </div>
    </div>

    <div class="super-note-modal__body">
      <div class="super-note-modal__text">${z(n.noteText || "No note content available.")}</div>
    </div>

    <div class="super-note-modal__footer">
      ${n.signedDate ? `<span class="super-note-modal__signed">Signed: ${Ji(n.signedDate)}</span>` : ""}
      ${n.hasAddendum ? '<span class="super-note-modal__addendum">Has Addendum</span>' : ""}
    </div>
  `, fe(t, "super-note-modal");
}
async function nr(t, n = null) {
  const s = await window.getCurrentParams(), a = sr();
  ht().appendChild(a);
  try {
    const i = await ji(t, s);
    ar(a, i.therapyDocument, n);
  } catch (i) {
    rn(a, i.message, "super-therapy-modal");
  }
}
function sr() {
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
  `, fe(t, "super-therapy-modal"), Ne(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  }), t;
}
function Ne(t) {
  const n = [50, 75, 100, 125, 150];
  t.querySelectorAll(".super-therapy-modal__zoom-btn").forEach((s) => {
    s.addEventListener("click", () => {
      const a = s.dataset.zoomAction, i = parseInt(t.dataset.zoom) || 100, r = n.indexOf(i);
      let c = i;
      a === "in" && r < n.length - 1 ? c = n[r + 1] : a === "out" && r > 0 && (c = n[r - 1]), t.dataset.zoom = c;
      const o = t.querySelector(".super-therapy-modal__zoom-level");
      o && (o.textContent = `${c}%`);
      const l = t.querySelector(".super-therapy-doc");
      l && (l.style.transform = `scale(${c / 100})`, l.style.transformOrigin = "top center");
    });
  });
}
function ar(t, n, s = null) {
  const { documentType: a } = n;
  switch (a) {
    case "EVAL":
      dr(t, n, s);
      break;
    case "TEN":
      cr(t, n, s);
      break;
    case "PR":
      lr(t, n, s);
      break;
    case "RECERT":
      pr(t, n, s);
      break;
    case "DISCH":
      ur(t, n, s);
      break;
    default:
      mr(t, n, s);
  }
  s && setTimeout(() => {
    ir(t);
  }, 100);
}
function ir(t) {
  const n = t.querySelectorAll(`[${_t}="true"]`);
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
  const r = (c) => {
    n.forEach((o) => o.classList.remove("super-therapy-highlight--active")), n[c].classList.add("super-therapy-highlight--active"), n[c].scrollIntoView({ behavior: "smooth", block: "center" }), s.querySelector(".super-therapy-highlight-nav__count").textContent = `${c + 1} of ${n.length}`;
  };
  s.querySelectorAll(".super-therapy-highlight-nav__btn").forEach((c) => {
    c.addEventListener("click", () => {
      c.dataset.action === "prev" ? i = i > 0 ? i - 1 : n.length - 1 : i = i < n.length - 1 ? i + 1 : 0, r(i);
    });
  }), n[0].classList.add("super-therapy-highlight--active");
}
const rr = {
  PT: "Physical Therapy",
  OT: "Occupational Therapy",
  ST: "Speech Therapy"
}, or = {
  EVAL: "Initial Evaluation",
  TEN: "Treatment Encounter Note(s)",
  PR: "Progress Report",
  RECERT: "Recertification",
  DISCH: "Discharge Summary"
};
function re(t, ...n) {
  for (const s of n) {
    if (t[s] !== void 0) return t[s];
    const a = s.charAt(0).toUpperCase() + s.slice(1);
    if (t[a] !== void 0) return t[a];
  }
  return null;
}
function Ee(t) {
  const n = t.jsonData || {}, s = n.Parameters || n.parameters || {}, a = t.discipline || "", i = rr[a] || a || "Therapy", r = t.documentType || "", c = or[r] || n.BodyDocumentName || n.bodyDocumentName || r, o = t.providerName || re(s, "ProviderName", "providerName") || re(n, "HeaderProviderName", "headerProviderName") || "", l = re(s, "PatientName", "patientName") || re(n, "HeaderPatientName", "headerPatientName") || re(n, "BodyPatientName", "bodyPatientName") || "";
  return `
    <div class="super-therapy-doc__header">
      <div class="super-therapy-doc__discipline">${z(i)}</div>
      <div class="super-therapy-doc__title">${z(c)}</div>
    </div>
    <div class="super-therapy-doc__info-row">
      <div class="super-therapy-doc__provider">
        <span class="super-therapy-doc__provider-label">Provider: </span>${z(o)}
      </div>
      <div class="super-therapy-doc__patient">${z(l)}</div>
    </div>
  `;
}
function $e(t) {
  const n = t.jsonData || {}, s = n.Parameters || n.parameters || {}, a = re(s, "PatientName", "patientName") || re(n, "BodyPatientName", "bodyPatientName") || "", i = re(s, "MedicalRecordNumber", "medicalRecordNumber") || re(n, "BodyMRN", "bodyMRN") || "", r = re(s, "DateOfBirth", "dateOfBirth") || re(n, "BodyDOB", "bodyDOB") || "", c = re(s, "PayerName", "payerName") || "", o = re(s, "StartOfCare", "startOfCare") || "";
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Identification Information</div>
      <div class="super-therapy-section__body">
        <table class="super-therapy-id-table">
          <tr>
            <td class="super-therapy-id-table__label">Patient:</td>
            <td class="super-therapy-id-table__value">${z(a)}</td>
            ${r ? `<td class="super-therapy-id-table__label">DOB:</td><td class="super-therapy-id-table__value">${z(r)}</td>` : ""}
            ${o ? `<td class="super-therapy-id-table__label">Start of Care:</td><td class="super-therapy-id-table__value">${z(o)}</td>` : ""}
          </tr>
          <tr>
            ${c ? `<td class="super-therapy-id-table__label">Payer:</td><td class="super-therapy-id-table__value">${z(c)}</td>` : ""}
            <td class="super-therapy-id-table__label">MRN:</td>
            <td class="super-therapy-id-table__value" ${c ? "" : 'colspan="3"'}>${z(i)}</td>
          </tr>
        </table>
      </div>
    </div>
  `;
}
function gt(t) {
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
                <td>${dt(a.OnsetDate || a.onsetDate) || "-"}</td>
              </tr>
            `).join("")}
            ${s.map((a) => `
              <tr>
                <td>Treatment</td>
                <td class="super-therapy-dx-table__code">${z(a.Code || a.code || "")}</td>
                <td>${z(a.Description || a.description || "")}</td>
                <td>${dt(a.OnsetDate || a.onsetDate) || "-"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function Rn(t, n = !1, s = null) {
  const a = n ? "LTG" : "STG", i = t.GoalNum || t.goalNum || "?", r = t.GoalStatus || t.goalStatus || "Continue", c = `super-therapy-goal__status--${r.toLowerCase().replace(/\s+/g, "")}`, o = t.GoalText || t.goalText || "", l = t.TargetDate || t.targetDate || "", d = t.GoalPlofText || t.goalPlofText || "", u = t.BaselineValueText || t.baselineValueText || "", p = t.PriorValueText || t.priorValueText || "", m = t.CurrentValueText || t.currentValueText || "", h = t.Comments || t.comments || "", _ = t.MeasurementCaption || t.measurementCaption || "", y = Zi([o, h, u, p, m, d], s) ? `${_t}="true"` : "", v = pt(s, o) ? "super-therapy-highlight" : "", S = pt(s, h) ? "super-therapy-highlight" : "";
  return `
    <div class="super-therapy-goal" ${y}>
      <div class="super-therapy-goal__header">
        <div class="super-therapy-goal__title">${a} #${i} - ${r}</div>
        <span class="super-therapy-goal__status ${c}">${r}</span>
      </div>
      <div class="super-therapy-goal__body">
        <p class="super-therapy-goal__text ${v}">${z(o)}</p>
        ${l ? `<p class="super-therapy-goal__target">Target: ${dt(l)}</p>` : ""}
      </div>
      <div class="super-therapy-goal__progress">
        <div>
          <div class="super-therapy-goal__progress-item">
            <div class="super-therapy-goal__progress-label">PLOF</div>
            <div class="super-therapy-goal__progress-value">${z(d || "Not specified")}</div>
          </div>
          ${u ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Baseline${_ ? ` <span class="super-therapy-goal__progress-sublabel">(${z(_)})</span>` : ""}</div>
              <div class="super-therapy-goal__progress-value">${z(u)}</div>
            </div>
          ` : ""}
        </div>
        <div>
          ${p ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Previous</div>
              <div class="super-therapy-goal__progress-value">${z(p)}</div>
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
          <span class="${S}">${z(h)}</span>
        </div>
      ` : ""}
    </div>
  `;
}
function on(t, n = null) {
  if (!t || t.length === 0) return "";
  const s = t.filter((i) => !i.IsLongTerm && !i.isLongTerm), a = t.filter((i) => i.IsLongTerm || i.isLongTerm);
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Goals</div>
      <div class="super-therapy-section__body">
        ${a.length > 0 ? `
          <div class="super-therapy-goals-title">Long-Term Goals</div>
          ${a.map((i) => Rn(i, !0, n)).join("")}
        ` : ""}
        ${s.length > 0 ? `
          <div class="super-therapy-goals-title">Short-Term Goals</div>
          ${s.map((i) => Rn(i, !1, n)).join("")}
        ` : ""}
      </div>
    </div>
  `;
}
function cn(t) {
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
function ft(t, n = null) {
  if (!t || t.length === 0) return "";
  const s = {};
  return t.forEach((a) => {
    const i = a.PrintSectionName || a.printSectionName || a.SectionName || a.sectionName || "Assessment", r = a.PrintGroupName || a.printGroupName || a.GroupName || a.groupName || "", c = a.GroupValues || a.groupValues || "";
    s[i] || (s[i] = []), s[i].push({ groupName: r, values: c });
  }), Object.entries(s).map(([a, i]) => `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">${z(a)}</div>
      <div class="super-therapy-section__body">
        ${i.map((r) => {
    const c = pt(n, r.values), o = c ? `${_t}="true"` : "", l = c ? "super-therapy-highlight" : "";
    return `
            <div class="super-therapy-detail-item" ${o}>
              ${r.groupName ? `<div class="super-therapy-detail-item__name">${z(r.groupName)}</div>` : ""}
              <div class="super-therapy-detail-item__value ${l}">${z(r.values)}</div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `).join("");
}
function zs(t) {
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
function We(t) {
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
                <div class="super-therapy-signature__date">${Ln(s)}</div>
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
                <div class="super-therapy-signature__date">${Ln(i)}</div>
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
function Le(t, n = 100) {
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
function cr(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, c = n.displayName || `${n.discipline} TEN - Treatment Note`, o = i.Sections || i.sections || [], l = re(i, "CompletedDateFormatted", "completedDateFormatted") || "", d = re(i, "AssessmentDateFormatted", "assessmentDateFormatted") || l, u = {
    OriginalSignatureText: i.OriginalSignatureText || i.originalSignatureText,
    OriginalSignatureDate: i.OriginalSignatureDate || i.originalSignatureDate,
    OriginalCoSignatureText: i.OriginalCoSignatureText || i.originalCoSignatureText,
    OriginalCosignatureDate: i.OriginalCosignatureDate || i.originalCosignatureDate
  }, p = [], m = o[0];
  m && (m.Details || m.details || []).forEach((_) => {
    p.push({
      name: _.PrintGroupName || _.printGroupName || "",
      value: _.GroupValues || _.groupValues || ""
    });
  }), a.innerHTML = `
    ${Le(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Ee(n)}
        ${$e(n)}

        <!-- Date of Service box -->
        <div class="super-therapy-dates-box">
          <div class="super-therapy-dates-box__item">Date of Service: ${z(d)}</div>
          <div class="super-therapy-dates-box__item">Completed Date: ${z(l)}</div>
        </div>

        <!-- Summary of Daily Skilled Services -->
        ${p.length > 0 ? `
          <div class="super-therapy-section">
            <div class="super-therapy-section-header">Summary of Daily Skilled Services</div>
            <div class="super-therapy-section__body">
              ${p.map((h) => {
    const _ = /^\d{5}/.test(h.name), f = pt(s, h.value), g = f ? `${_t}="true"` : "", y = f ? "super-therapy-highlight" : "";
    return `
                  <div class="super-therapy-detail-item" ${g}>
                    <div class="super-therapy-detail-item__name ${_ ? "super-therapy-detail-item__name--code" : ""}">${z(h.name)}</div>
                    <div class="super-therapy-detail-item__value ${y}">${z(h.value)}</div>
                  </div>
                `;
  }).join("")}
            </div>
          </div>
        ` : ""}

        ${We(u)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Ne(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function dr(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, c = n.displayName || `${n.discipline} Eval - Initial Evaluation`, o = i.IdentifierInfo || i.identifierInfo || {}, l = i.Diagnoses || i.diagnoses || [], d = i.GoalTargets || i.goalTargets || [], u = i.Approaches || i.approaches || [], p = i.AssessmentLayout || i.assessmentLayout || [], m = i.ESignatures || i.eSignatures || {}, h = re(o, "Frequency", "frequency") || "", _ = re(o, "Duration", "duration") || "", f = re(o, "Intensity", "intensity") || "", g = re(o, "DateRange", "dateRange") || "", y = re(o, "PhysicianFullName", "physicianFullName") || "", v = re(o, "NPI", "npi") || "";
  a.innerHTML = `
    ${Le(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Ee(n)}
        ${$e(n)}

        <!-- Treatment Plan Info -->
        ${h || _ || f || g ? `
          <div class="super-therapy-plan-info">
            ${g ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Certification Period: </span>${z(g)}</div>` : ""}
            ${h ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Frequency: </span>${z(h)}</div>` : ""}
            ${_ ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Duration: </span>${z(_)}</div>` : ""}
            ${f ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Intensity: </span>${z(f)}</div>` : ""}
          </div>
        ` : ""}

        <!-- Physician Certification -->
        ${y ? `
          <div class="super-therapy-section">
            <div class="super-therapy-section-header">Physician Certification</div>
            <div class="super-therapy-section__body">
              <div><strong>Physician:</strong> ${z(y)}</div>
              ${v ? `<div><strong>NPI:</strong> ${z(v)}</div>` : ""}
            </div>
          </div>
        ` : ""}

        ${gt(l)}
        ${on(d, s)}
        ${cn(u)}
        ${ft(p, s)}
        ${We(m)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Ne(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function lr(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, c = n.displayName || `${n.discipline} PR - Progress Report`, o = i.Diagnoses || i.diagnoses || [], l = i.AllActiveShortTermGoals || i.allActiveShortTermGoals || [], d = i.AllActiveLongTermGoals || i.allActiveLongTermGoals || [], u = [...l.map((f) => ({ ...f, IsLongTerm: !1 })), ...d.map((f) => ({ ...f, IsLongTerm: !0 }))], p = i.Approaches || i.approaches || [], m = i.AssessmentLayout || i.assessmentLayout || [], h = i.ServiceMatrixData || i.serviceMatrixData || {}, _ = i.ESignatures || i.eSignatures || {};
  a.innerHTML = `
    ${Le(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Ee(n)}
        ${$e(n)}
        ${gt(o)}
        ${on(u, s)}
        ${zs(h)}
        ${cn(p)}
        ${ft(m, s)}
        ${We(_)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Ne(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function pr(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, c = n.displayName || `${n.discipline} Recert - Recertification`, o = i.Diagnoses || i.diagnoses || [], l = i.ProgressGoalTargets || i.progressGoalTargets || [], d = i.Approaches || i.approaches || [], u = i.AssessmentLayout || i.assessmentLayout || [], p = i.ServiceMatrixData || i.serviceMatrixData || {}, m = i.ESignatures || i.eSignatures || {};
  a.innerHTML = `
    ${Le(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Ee(n)}
        ${$e(n)}
        ${gt(o)}
        ${on(l, s)}
        ${zs(p)}
        ${cn(d)}
        ${ft(u, s)}
        ${We(m)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Ne(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function ur(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, c = n.displayName || `${n.discipline} Disch - Discharge Summary`, o = i.Diagnoses || i.diagnoses || [], l = i.AssessmentLayout || i.assessmentLayout || [], d = i.ESignatures || i.eSignatures || {};
  a.innerHTML = `
    ${Le(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Ee(n)}
        ${$e(n)}
        ${gt(o)}
        ${ft(l, s)}
        ${We(d)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Ne(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function mr(t, n, s = null) {
  const a = t.querySelector(".super-therapy-modal__container"), i = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, c = n.displayName || "Therapy Document";
  a.innerHTML = `
    ${Le(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Ee(n)}
        ${$e(n)}
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
  `, fe(t, "super-therapy-modal"), Ne(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
async function hr(t, n = null) {
  const s = await window.getCurrentParams(), a = _r();
  ht().appendChild(a);
  try {
    const i = await Ge(t, s);
    gr(a, i.document, n);
  } catch (i) {
    rn(a, i.message, "super-pdf-modal");
  }
}
function _r() {
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
  `, fe(t, "super-pdf-modal"), t;
}
function gr(t, n, s = null) {
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
  `, fe(t, "super-pdf-modal");
  const c = t.querySelector(".super-pdf-modal__body");
  Ce(
    F(an, {
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
    c
  );
}
function fr() {
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
async function yr(t, n = null, s = null) {
  const a = await window.getCurrentParams(), i = s || Yi(), r = fr(), c = !document.querySelector(".icd10-viewer-modal__container");
  ht().appendChild(r), c && (document.body.style.overflow = "hidden");
  const o = r.querySelector(".super-uda-modal__container"), l = () => {
    c && (document.body.style.overflow = ""), document.removeEventListener("keydown", d), r.remove();
  }, d = (u) => {
    u.key === "Escape" && l();
  };
  if (document.addEventListener("keydown", d), r.querySelector(".super-uda-modal__backdrop").addEventListener("click", l), !i) {
    o.innerHTML = '<div class="super-uda-modal__error">Missing patient context — open this from a patient page.</div>';
    return;
  }
  try {
    const u = await Ki(t, i, a, n), p = u.uda, m = new Set(u.matchKeys || []);
    o.innerHTML = "", Ce(
      F(Rt, { uda: p, matchKeys: m, quoteText: n, onClose: l }),
      o
    );
  } catch (u) {
    o.innerHTML = `<div class="super-uda-modal__error">${z(u.message || "Failed to load UDA")}</div>`;
  }
}
window.showClinicalNoteModal = Xi;
window.showTherapyDocModal = nr;
window.showDocumentModal = hr;
window.showUdaModal = yr;
window.parseEvidenceForViewer = Wi;
window.SuperDocViewer = {
  open(t) {
    if (!t) return;
    const n = t.sourceType || t.type || "";
    if (n === "clinical_note" || n === "progress_note" || n === "practitioner_note") {
      const s = t.viewerId || t.sourceId || t.id;
      window.showClinicalNoteModal(s);
    } else if (n === "therapy_doc" || n === "therapy") {
      const s = t.viewerId || t.sourceId || t.id;
      window.showTherapyDocModal(s, t.quote);
    } else if (n === "pdf" || n === "document") {
      const s = t.viewerId || t.sourceId || t.id;
      window.showDocumentModal(s, t.wordBlocks || []);
    } else if (n === "uda") {
      const s = t.viewerId || t.sourceId || t.evidenceId || t.id || "", a = String(s).replace(/^uda-/, ""), i = t.quoteText || t.quote || "", r = t.patientId || null;
      a && window.showUdaModal(a, i, r);
    }
  }
};
function nt(t) {
  return t.sourceType === "order" || (t.evidenceId || "").startsWith("order-");
}
function vr(t) {
  return (t.sourceId || t.evidenceId || "").replace(/^order-/, "");
}
function wr(t) {
  const n = ue(t).viewerType;
  return n === "document" || n === "clinical-note" || n === "therapy-document" || nt(t);
}
function Ws({ item: t, context: n, onClose: s }) {
  const a = t?.mdsItem, i = t?.categoryKey, { data: r, loading: c, error: o } = Hs(a, i, n), l = a?.startsWith("I8000:") ? "I8000" : a, [d, u] = w(null), p = ne(/* @__PURE__ */ new Map()), m = ne(null), h = ne(null), f = br(r).filter(wr), g = d && nt(d.ev), y = d ? ue(d.ev).viewerType : null, v = y === "clinical-note", S = y === "therapy-document", C = y === "uda", b = d && !g && !v && !S && !C, P = f.filter((A) => nt(A) ? !1 : ue(A).viewerType === "document");
  U(() => {
    if (!r || P.length === 0) return;
    (async () => {
      let $;
      try {
        $ = await window.getCurrentParams();
      } catch {
        return;
      }
      for (const q of P) {
        const H = ue(q);
        if (!H.id || p.current.has(H.id)) continue;
        const Z = Ge(H.id, $).then((K) => {
          const R = p.current.get(H.id);
          return R && (R.document = K.document), K.document;
        }).catch((K) => (console.warn("[ItemPopover] Prefetch failed for", H.id, K), null));
        p.current.set(H.id, { document: null, promise: Z });
      }
    })();
  }, [r]);
  const [E, x] = w(null), [k, D] = w(!1);
  U(() => {
    if (!d || g || v || S || C) {
      x(null), D(!1);
      return;
    }
    const A = ue(d.ev);
    if (!A.id) return;
    const $ = p.current.get(A.id);
    if ($?.document) {
      x($.document), D(!1);
      return;
    }
    D(!0), (async () => {
      try {
        let H;
        if ($?.promise)
          H = await $.promise;
        else {
          const Z = await window.getCurrentParams();
          H = (await Ge(A.id, Z)).document, p.current.set(A.id, { document: H, promise: Promise.resolve(H) });
        }
        x(H);
      } catch (H) {
        console.error("[ItemPopover] Failed to load document:", H), x(null);
      } finally {
        D(!1);
      }
    })();
  }, [d, g, v, S, C]), U(() => {
    if (!g || !m.current) return;
    const A = m.current, $ = vr(d.ev);
    A.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading administrations...</span></div>', window.renderSplitAdministrations ? (async () => {
      const Z = getOrg()?.org, K = window.getChatFacilityInfo?.() || "", R = { assessmentId: n?.assessmentId, orgSlug: Z, facilityName: K };
      await window.renderSplitAdministrations(A, $, void 0, R);
    })().catch((H) => {
      console.error("[ItemPopover] Failed to load administrations:", H), A.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load administrations</span></div>';
    }) : A.innerHTML = '<div class="cc-pop__viewer-loading"><span>Administration viewer not available</span></div>';
  }, [d, g]), U(() => {
    if (!v && !S || !h.current) return;
    const A = h.current, $ = ue(d.ev), q = d.ev.quoteText || d.ev.quote || d.ev.snippet || "";
    A.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading...</span></div>', (async () => {
      const K = getOrg()?.org, R = window.getChatFacilityInfo?.() || "", B = { assessmentId: n?.assessmentId, orgSlug: K, facilityName: R };
      v && window.renderSplitNote ? await window.renderSplitNote(A, $.id, B) : S && window.renderSplitTherapy ? await window.renderSplitTherapy(A, $.id, q, B) : A.innerHTML = '<div class="cc-pop__viewer-loading"><span>Viewer not available</span></div>';
    })().catch((Z) => {
      console.error("[ItemPopover] Failed to load source:", Z), A.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load</span></div>';
    });
  }, [d, v, S]), U(() => {
    if (!C || !h.current) return;
    const A = h.current, $ = ue(d.ev), q = d.ev.quoteText || d.ev.quote || d.ev.snippet || "";
    A.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading assessment...</span></div>', (async () => {
      window.renderSplitUda ? await window.renderSplitUda(A, $.id, q) : A.innerHTML = '<div class="cc-pop__viewer-loading"><span>UDA viewer not available</span></div>';
    })().catch((Z) => {
      console.error("[ItemPopover] Failed to load UDA:", Z), A.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load</span></div>';
    });
  }, [d, C]);
  const N = j((A, $) => {
    u({ ev: A, index: $ });
  }, []), O = j(() => {
    u(null);
  }, []), M = d !== null;
  return /* @__PURE__ */ e("div", { class: "cc-pop__backdrop", onClick: (A) => {
    A.target === A.currentTarget && s();
  }, children: /* @__PURE__ */ e("div", { class: `cc-pop${M ? " cc-pop--split" : ""}`, onClick: (A) => A.stopPropagation(), children: [
    /* @__PURE__ */ e("div", { class: "cc-pop__header", children: /* @__PURE__ */ e("div", { class: "cc-pop__header-top", children: [
      /* @__PURE__ */ e("div", { class: "cc-pop__header-left", children: [
        M && /* @__PURE__ */ e("button", { class: "cc-pop__back-btn", onClick: O, type: "button", children: [
          /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("polyline", { points: "15 18 9 12 15 6" }) }),
          "Back"
        ] }),
        /* @__PURE__ */ e("span", { class: "cc-pop__code", children: l }),
        /* @__PURE__ */ e("span", { class: "cc-pop__name", children: t?.itemName || r?.item?.description || "Item Detail" })
      ] }),
      /* @__PURE__ */ e("button", { class: "cc-pop__close", onClick: s, type: "button", children: "×" })
    ] }) }),
    M ? /* @__PURE__ */ e("div", { class: "cc-pop__split-body", children: [
      /* @__PURE__ */ e("div", { class: "cc-pop__sources", children: [
        /* @__PURE__ */ e("div", { class: "cc-pop__sources-label", children: [
          "Sources (",
          f.length,
          ")"
        ] }),
        f.map((A, $) => {
          const q = nt(A), H = A.sourceType || nn(A.displayName, A.evidenceId), Z = A.displayName || sn[H] || (q ? "Orders" : "Document"), K = A.quoteText || A.orderDescription || A.quote || A.snippet || A.text || "", R = A.wordBlocks?.[0]?.p, B = d.ev === A;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `cc-pop__source-card${B ? " cc-pop__source-card--active" : ""}`,
              onClick: () => u({ ev: A, index: $ }),
              role: "button",
              children: [
                /* @__PURE__ */ e("div", { class: `cc-pop__source-badge${q ? " cc-pop__source-badge--order" : ""}`, children: Z }),
                K && /* @__PURE__ */ e("div", { class: "cc-pop__source-snippet", children: K }),
                !q && R && /* @__PURE__ */ e("div", { class: "cc-pop__source-page", children: [
                  "Page ",
                  R
                ] })
              ]
            },
            $
          );
        })
      ] }),
      /* @__PURE__ */ e("div", { class: "cc-pop__viewer", children: [
        b && k && /* @__PURE__ */ e("div", { class: "cc-pop__viewer-loading", children: [
          /* @__PURE__ */ e("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
          /* @__PURE__ */ e("span", { children: "Loading document..." })
        ] }),
        b && !k && E && /* @__PURE__ */ e(
          an,
          {
            url: E.signedUrl || null,
            wordBlocks: d.ev.wordBlocks || [],
            targetPage: d.ev.wordBlocks?.[0]?.p || 1,
            title: E.title || "Document",
            documentType: E.documentType,
            effectiveDate: E.effectiveDate,
            fileSize: E.fileSize,
            expiresAt: !0,
            openInNewTabUrl: E.signedUrl || null
          }
        ),
        b && !k && !E && /* @__PURE__ */ e("div", { class: "cc-pop__viewer-loading", children: /* @__PURE__ */ e("span", { children: "Failed to load document" }) }),
        g && /* @__PURE__ */ e("div", { ref: m, class: "cc-pop__admin-viewer" }),
        (v || S || C) && /* @__PURE__ */ e("div", { ref: h, class: "cc-pop__note-viewer" })
      ] })
    ] }) : /* @__PURE__ */ e("div", { class: "cc-pop__body", children: [
      c && /* @__PURE__ */ e("div", { class: "cc-pop__loading", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
        /* @__PURE__ */ e("span", { children: "Loading..." })
      ] }),
      o && /* @__PURE__ */ e("div", { class: "cc-pop__error", children: o }),
      !c && !o && r && /* @__PURE__ */ e(
        Us,
        {
          variant: "compact",
          data: r,
          detectionItem: t,
          mdsItem: a,
          onViewSource: N
        }
      )
    ] }),
    M && !c && !o && r && /* @__PURE__ */ e("div", { style: { padding: "0 16px 12px", flexShrink: 0, borderTop: "1px solid #e5e7eb" }, children: /* @__PURE__ */ e("div", { class: "sid__actions", children: [
      /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--primary", onClick: () => window.QuerySendModal?.show(r.item || r), type: "button", children: "Query Physician" }),
      a && /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--secondary", onClick: () => window.navigateToMDSItem?.(a), type: "button", children: [
        "Go to ",
        l,
        " ↗"
      ] })
    ] }) })
  ] }) });
}
function br(t) {
  const n = t?.item;
  if (!n) return [];
  if (!!!n.columns) return n.evidence || n.queryEvidence || [];
  const a = [], i = /* @__PURE__ */ new Set();
  for (const r of Object.values(n.columns || {}))
    r?.evidence && r.evidence.forEach((c) => {
      const o = c.sourceId || c.quote || JSON.stringify(c);
      i.has(o) || (i.add(o), a.push(c));
    });
  return a;
}
function Ir({ facilityName: t, orgSlug: n, enabled: s }) {
  const [a, i] = w(null), [r, c] = w(!1), [o, l] = w(null), d = j(async () => {
    if (!(!t || !n)) {
      c(!0), l(null);
      try {
        const u = new URLSearchParams({
          facilityName: t || "",
          orgSlug: n || ""
        }), p = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/compliance/dashboard?${u}`
        });
        if (!p.success)
          throw new Error(p.error || "Failed to load compliance dashboard");
        i(p.data);
      } catch (u) {
        console.error("[ComplianceDashboard] Failed to fetch:", u), l(u.message || "Failed to load compliance data");
      } finally {
        c(!1);
      }
    }
  }, [t, n, s]);
  return U(() => {
    d();
  }, [d, s]), { data: a, loading: r, error: o, retry: d };
}
function Dr({ facilityName: t, orgSlug: n, days: s = 30, enabled: a = !0 }) {
  const [i, r] = w(null), [c, o] = w(!1), [l, d] = w(null), u = j(async () => {
    if (!(!a || !t || !n)) {
      o(!0), d(null);
      try {
        const p = new URLSearchParams({
          days: String(s),
          facilityName: t || "",
          orgSlug: n || ""
        }), m = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/compliance/dashboard/trending?${p}`
        });
        if (!m.success)
          throw new Error(m.error || "Failed to load trending data");
        r(m.data);
      } catch (p) {
        console.error("[Trending] Failed to fetch:", p), d(p.message || "Failed to load trending data");
      } finally {
        o(!1);
      }
    }
  }, [t, n, s, a]);
  return U(() => {
    a && u();
  }, [u, a]), { data: i, loading: c, error: l, retry: u };
}
function qn(t) {
  return new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Cr(t) {
  return t >= 80 ? "#22c55e" : t >= 50 ? "#f59e0b" : "#ef4444";
}
function kr({ days: t }) {
  const n = t && t.length >= 3, { points: s, polygonPoints: a, color: i, latestScore: r, firstDate: c, lastDate: o } = J(() => {
    if (!n) return {};
    const l = t.map((_, f) => {
      const g = 5 + f / (t.length - 1) * 290, y = 75 - _.averageScore / 100 * 70;
      return { x: g, y };
    }), d = l.map((_) => `${_.x},${_.y}`).join(" "), u = l[l.length - 1], p = l[0], m = d + ` ${u.x},75 ${p.x},75`, h = t[t.length - 1];
    return {
      points: d,
      polygonPoints: m,
      color: Cr(h.averageScore),
      latestScore: h.averageScore,
      firstDate: qn(t[0].date),
      lastDate: qn(h.date)
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
      /* @__PURE__ */ e("span", { class: "cpc-cv__trend-date-start", children: c }),
      /* @__PURE__ */ e("span", { class: "cpc-cv__trend-score", style: { fontSize: "18px", fontWeight: 700, color: i }, children: [
        r,
        "%"
      ] }),
      /* @__PURE__ */ e("span", { class: "cpc-cv__trend-date-end", children: o })
    ] })
  ] }) : null;
}
const Nr = ({ scores: t, width: n = 48, height: s = 16 }) => {
  const { points: a, color: i, isSingle: r } = J(() => {
    if (!t || t.length === 0)
      return { points: null, color: null, isSingle: !1 };
    const c = t[0].score, o = t[t.length - 1].score, l = o > c ? "#22c55e" : o < c ? "#ef4444" : "#9ca3af";
    if (t.length === 1)
      return { points: null, color: l, isSingle: !0 };
    const d = 1, u = (n - d * 2) / (t.length - 1), p = s - d * 2;
    return { points: t.map((h, _) => {
      const f = d + _ * u, g = d + p - h.score / 100 * p;
      return `${f},${g}`;
    }).join(" "), color: l, isSingle: !1 };
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
function Sr({ patientId: t, facilityName: n, orgSlug: s }) {
  const [a, i] = w(null), [r, c] = w(null), [o, l] = w(!0), [d, u] = w(null), [p, m] = w(!1), h = j(async () => {
    if (t) {
      l(!0), u(null);
      try {
        const f = new URLSearchParams({ facilityName: n || "", orgSlug: s || "" }), [g, y] = await Promise.all([
          chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/patients/${t}/coverage/summary?${f}`
          }),
          chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/patients/${t}/coverage/changes?${f}`
          })
        ]);
        if (!g.success)
          throw new Error(g.error || "Failed to load coverage summary");
        i(g.data), c(y.success ? y.data : null);
      } catch (f) {
        console.error("[CoveragePanel] Failed to fetch coverage:", f), u(f.message || "Failed to load coverage data");
      } finally {
        l(!1);
      }
    }
  }, [t, n, s]), _ = j(async () => {
    if (t) {
      m(!0);
      try {
        await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/patients/${t}/care-plans/check`,
          options: { method: "POST" }
        }), await new Promise((f) => setTimeout(f, 5e3)), await h();
      } catch (f) {
        console.error("[CoveragePanel] Refresh failed:", f), u("Refresh failed. Showing cached data.");
      } finally {
        m(!1);
      }
    }
  }, [t, h]);
  return U(() => {
    h();
  }, [h]), { summary: a, changes: r, loading: o, error: d, refreshing: p, refresh: _, retry: h };
}
async function xr(t, n, s = 5) {
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
      for (const [c, o] of Object.entries(r.data.patients))
        Array.isArray(o) && a.set(c, o.map((l) => ({ date: l.checkedAt, score: l.overallScore })));
  } catch (i) {
    console.warn("[PatientHistory] Batch fetch failed:", i);
  }
  return a;
}
function yt(t) {
  return t >= 80 ? "green" : t >= 50 ? "amber" : "red";
}
const Qs = {
  green: "#22c55e",
  amber: "#f59e0b",
  red: "#ef4444"
};
function Pe(t) {
  return t ? t === t.toUpperCase() && t.length > 3 ? t.toLowerCase().replace(/\b\w/g, (n) => n.toUpperCase()) : t : "";
}
function js(t) {
  if (!t) return;
  const n = new URL(window.location.href).origin;
  window.location.href = `${n}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=-1&ESOLclientid=${t}`;
}
function Pr({ summary: t }) {
  return t ? /* @__PURE__ */ e("div", { class: "cpc-cv__cards", children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__card", children: [
      /* @__PURE__ */ e("div", { class: `cpc-cv__card-value cpc-cv__card-value--${yt(t.overallCoverage)}`, children: [
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
function Tr({ patient: t, histories: n, onOpenCoverage: s }) {
  const a = yt(t.overallScore ?? 0), i = (t.diagnosisMissing || 0) + (t.diagnosisPartial || 0), r = (t.orderMissing || 0) + (t.orderPartial || 0), c = i + r;
  return /* @__PURE__ */ e("div", { class: "cpc-cv__acard", onClick: () => s(t), children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__acard-top", children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__acard-name", children: Pe(t.patientName) }),
      t.levelOfCare && /* @__PURE__ */ e("span", { class: "cpc-cv__acard-loc", children: t.levelOfCare })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__acard-bottom", children: [
      t.hasResults ? /* @__PURE__ */ e(Y, { children: [
        /* @__PURE__ */ e("span", { class: "cpc-cv__mini-bar", style: { width: 60 }, children: /* @__PURE__ */ e("span", { class: "cpc-cv__mini-fill", style: { width: `${t.overallScore}%`, background: Qs[a] } }) }),
        /* @__PURE__ */ e("span", { class: `cpc-cv__acard-pct cpc-cv__acard-pct--${a}`, children: [
          t.overallScore,
          "%"
        ] })
      ] }) : /* @__PURE__ */ e("span", { class: "cpc-cv__row-unchecked", children: "Not checked" }),
      c > 0 && /* @__PURE__ */ e("span", { class: "cpc-cv__gap-badge", children: [
        c,
        " gap",
        c !== 1 ? "s" : ""
      ] })
    ] })
  ] });
}
const Ct = 3;
function kt({ label: t, accent: n, patients: s, histories: a, historiesLoading: i, onOpenCoverage: r, defaultOpen: c }) {
  const [o, l] = w(c), [d, u] = w(!1), m = n === "orange" && i;
  if (!m && (!s || s.length === 0)) return null;
  const h = d ? s : (s || []).slice(0, Ct), _ = (s || []).length - Ct;
  return /* @__PURE__ */ e("div", { class: `cpc-cv__attention-group cpc-cv__attention-group--${n}`, children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__attention-header", onClick: () => l(!o), children: [
      /* @__PURE__ */ e("span", { class: `cpc__section-arrow ${o ? "cpc__section-arrow--open" : ""}`, children: "▶" }),
      /* @__PURE__ */ e("span", { class: "cpc-cv__attention-label", children: t }),
      !m && s && /* @__PURE__ */ e("span", { class: "cpc-cv__attention-count", children: s.length })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "cpc-cv__attention-list", children: m ? /* @__PURE__ */ e("div", { class: "cpc-cv__attention-loading", children: [
      /* @__PURE__ */ e("div", { class: "cpc__spinner cpc__spinner--sm" }),
      /* @__PURE__ */ e("span", { children: "Analyzing trends..." })
    ] }) : /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e("div", { class: "cpc-cv__acards", children: h.map((f) => /* @__PURE__ */ e(
        Tr,
        {
          patient: f,
          histories: a,
          onOpenCoverage: r
        },
        f.patientId
      )) }),
      !d && _ > 0 && /* @__PURE__ */ e("button", { class: "cpc-cv__view-more", onClick: (f) => {
        f.stopPropagation(), u(!0);
      }, children: [
        "View ",
        _,
        " more"
      ] }),
      d && s.length > Ct && /* @__PURE__ */ e("button", { class: "cpc-cv__view-more", onClick: (f) => {
        f.stopPropagation(), u(!1);
      }, children: "Show less" })
    ] }) })
  ] });
}
function Ar({ patient: t, sparklineScores: n, onOpenCoverage: s }) {
  const a = yt(t.overallScore ?? 0), i = (t.diagnosisMissing || 0) + (t.diagnosisPartial || 0), r = (t.orderMissing || 0) + (t.orderPartial || 0), c = i + r;
  return /* @__PURE__ */ e("div", { class: "cpc-cv__row", onClick: () => s(t), children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__row-name", children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__row-patient", children: Pe(t.patientName) }),
      t.levelOfCare && /* @__PURE__ */ e("span", { class: "cpc-cv__row-loc", children: t.levelOfCare })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__row-score", children: t.hasResults ? /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__mini-bar", children: /* @__PURE__ */ e(
        "span",
        {
          class: "cpc-cv__mini-fill",
          style: { width: `${t.overallScore}%`, background: Qs[a] }
        }
      ) }),
      /* @__PURE__ */ e("span", { class: `cpc-cv__row-pct cpc-cv__row-pct--${a}`, children: [
        t.overallScore,
        "%"
      ] })
    ] }) : /* @__PURE__ */ e("span", { class: "cpc-cv__row-unchecked", children: "Not checked" }) }),
    n && n.length > 1 && /* @__PURE__ */ e(Nr, { scores: n }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__row-gaps", children: c > 0 ? /* @__PURE__ */ e("span", { class: "cpc-cv__gap-badge", children: [
      c,
      " gap",
      c !== 1 ? "s" : ""
    ] }) : t.hasResults ? /* @__PURE__ */ e("span", { class: "cpc-cv__gap-ok", children: "✓" }) : null }),
    t.stale && /* @__PURE__ */ e("span", { class: "cpc-cv__stale-dot", title: "Stale" }),
    /* @__PURE__ */ e(
      "button",
      {
        class: "cpc-cv__row-nav",
        title: "Go to patient in PCC",
        onClick: (o) => {
          o.stopPropagation(), js(t.externalPatientId || t.patientId);
        },
        children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
      }
    )
  ] });
}
function On({ item: t, expanded: n, onToggle: s }) {
  const a = t.type === "diagnosis";
  return /* @__PURE__ */ e("div", { class: `cpd__item ${n ? "cpd__item--open" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "cpd__item-row", onClick: s, children: [
      /* @__PURE__ */ e("span", { class: `cpd__item-dot cpd__item-dot--${t.status}` }),
      /* @__PURE__ */ e("div", { class: "cpd__item-main", children: [
        t.code && /* @__PURE__ */ e("span", { class: "cpd__item-code", children: t.code }),
        /* @__PURE__ */ e("span", { class: "cpd__item-desc", children: Pe(t.description) })
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
const Bn = { covered: 0, partial: 1, missing: 2 };
function Mr({ patient: t, facilityName: n, orgSlug: s, onBack: a }) {
  const { summary: i, changes: r, loading: c, error: o, refreshing: l, refresh: d, retry: u } = Sr({
    patientId: t.patientId,
    facilityName: n,
    orgSlug: s
  }), [p, m] = w(null), [h, _] = w(!1), f = i && i.hasResults === !1, g = i && !f, y = J(() => (i?.gaps || []).filter((E) => E.status === "missing"), [i]), v = J(() => (i?.gaps || []).filter((E) => E.status === "partial"), [i]), S = (i?.covered || []).length, C = [];
  i?.pendingChanges?.newDiagnoses > 0 && C.push(`${i.pendingChanges.newDiagnoses} new diagnosis${i.pendingChanges.newDiagnoses > 1 ? "es" : ""}`), i?.pendingChanges?.newOrders > 0 && C.push(`${i.pendingChanges.newOrders} new order${i.pendingChanges.newOrders > 1 ? "s" : ""}`);
  const b = J(() => r?.changes ? r.changes.filter((E) => (Bn[E.currentStatus] ?? 0) > (Bn[E.previousStatus] ?? 0)) : [], [r]), P = i ? yt(i.score) : "red";
  return /* @__PURE__ */ e("div", { class: "cpd", children: [
    /* @__PURE__ */ e("div", { class: "cpd__topbar", children: [
      /* @__PURE__ */ e("button", { class: "cpd__back", onClick: a, title: "Back to all patients", children: [
        /* @__PURE__ */ e("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }) }),
        /* @__PURE__ */ e("span", { children: "All Patients" })
      ] }),
      /* @__PURE__ */ e("div", { class: "cpd__topbar-actions", children: [
        i?.stale && /* @__PURE__ */ e("span", { class: "cpd__stale", children: "Stale" }),
        /* @__PURE__ */ e("button", { class: `cpd__refresh ${l ? "cpd__refresh--spin" : ""}`, onClick: d, disabled: l, children: [
          /* @__PURE__ */ e("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ e("polyline", { points: "23 4 23 10 17 10" }),
            /* @__PURE__ */ e("polyline", { points: "1 20 1 14 7 14" }),
            /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })
          ] }),
          l ? "Checking..." : "Re-check"
        ] }),
        /* @__PURE__ */ e("button", { class: "cpd__pcc-link", onClick: () => js(t.externalPatientId || t.patientId), title: "Open in PCC", children: [
          "Open in PCC",
          /* @__PURE__ */ e("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpd__hero", children: [
      /* @__PURE__ */ e("div", { class: "cpd__hero-left", children: [
        /* @__PURE__ */ e("div", { class: "cpd__name", children: Pe(t.patientName) }),
        /* @__PURE__ */ e("div", { class: "cpd__meta", children: [
          t.levelOfCare && /* @__PURE__ */ e("span", { children: t.levelOfCare }),
          i?.checkedAt && /* @__PURE__ */ e("span", { children: [
            "Checked ",
            new Date(i.checkedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })
          ] })
        ] })
      ] }),
      g && /* @__PURE__ */ e("div", { class: "cpd__hero-right", children: [
        /* @__PURE__ */ e("div", { class: `cpd__score cpd__score--${P}`, children: [
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
        /* @__PURE__ */ e("div", { class: "cpd__score-bar", children: /* @__PURE__ */ e("div", { class: `cpd__score-fill cpd__score-fill--${P}`, style: { width: `${i.score}%` } }) })
      ] })
    ] }),
    c && /* @__PURE__ */ e("div", { class: "cpc__loading", children: [
      /* @__PURE__ */ e("div", { class: "cpc__spinner" }),
      /* @__PURE__ */ e("span", { class: "cpc__loading-text", children: "Loading coverage..." })
    ] }),
    o && !c && /* @__PURE__ */ e("div", { class: "cpc__error", children: [
      /* @__PURE__ */ e("div", { class: "cpc__error-text", children: o }),
      /* @__PURE__ */ e("button", { class: "cpc__retry-btn", onClick: u, children: "Try Again" })
    ] }),
    f && !c && !o && /* @__PURE__ */ e("div", { class: "cpd__empty-state", children: [
      /* @__PURE__ */ e("div", { class: "cpd__empty-title", children: "No coverage data yet" }),
      /* @__PURE__ */ e("div", { class: "cpd__empty-sub", children: "Coverage checks run automatically, or click Re-check above." })
    ] }),
    g && !c && !o && /* @__PURE__ */ e("div", { class: "cpd__body", children: [
      C.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__drift", children: [
        /* @__PURE__ */ e("strong", { children: "Drift alert:" }),
        " ",
        C.join(" and "),
        " added since last coverage check. These haven't been reviewed yet."
      ] }),
      b.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__section", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--red", children: "What Got Worse" }),
        b.map((E, x) => /* @__PURE__ */ e("div", { class: "cpd__change-row", children: [
          /* @__PURE__ */ e("span", { class: "cpd__change-arrow", children: "↓" }),
          /* @__PURE__ */ e("span", { class: "cpd__change-code", children: E.code }),
          /* @__PURE__ */ e("span", { class: "cpd__change-desc", children: Pe(E.description) }),
          /* @__PURE__ */ e("span", { class: "cpd__change-transition", children: [
            E.previousStatus,
            " ",
            "→",
            " ",
            E.currentStatus
          ] })
        ] }, x))
      ] }),
      y.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__section", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--red", children: [
          "Missing From Care Plan",
          /* @__PURE__ */ e("span", { class: "cpd__section-count", children: y.length })
        ] }),
        /* @__PURE__ */ e("div", { class: "cpd__section-hint", children: "These have no care plan focus at all." }),
        y.map((E, x) => /* @__PURE__ */ e(On, { item: E, expanded: p === `m-${x}`, onToggle: () => m(p === `m-${x}` ? null : `m-${x}`) }, `m-${x}`))
      ] }),
      v.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__section", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--amber", children: [
          "Partially Covered",
          /* @__PURE__ */ e("span", { class: "cpd__section-count", children: v.length })
        ] }),
        /* @__PURE__ */ e("div", { class: "cpd__section-hint", children: "Has a related focus but it's incomplete or doesn't fully address the issue." }),
        v.map((E, x) => /* @__PURE__ */ e(On, { item: E, expanded: p === `p-${x}`, onToggle: () => m(p === `p-${x}` ? null : `p-${x}`) }, `p-${x}`))
      ] }),
      S > 0 && /* @__PURE__ */ e("div", { class: "cpd__section cpd__section--muted", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--green cpd__section-head--toggle", onClick: () => _(!h), children: [
          /* @__PURE__ */ e("span", { children: h ? "▼" : "▶" }),
          "Covered",
          /* @__PURE__ */ e("span", { class: "cpd__section-count", children: S })
        ] }),
        h && /* @__PURE__ */ e("div", { class: "cpd__covered-list", children: (i.covered || []).map((E, x) => /* @__PURE__ */ e("div", { class: "cpd__covered-row", children: [
          /* @__PURE__ */ e("span", { class: "cpd__covered-dot" }),
          E.code && /* @__PURE__ */ e("span", { class: "cpd__covered-code", children: E.code }),
          /* @__PURE__ */ e("span", { class: "cpd__covered-desc", children: Pe(E.description) }),
          /* @__PURE__ */ e("span", { class: "cpd__covered-type", children: E.type })
        ] }, x)) })
      ] })
    ] })
  ] });
}
function Er({ data: t, loading: n, error: s, retry: a, trendingData: i, facilityName: r, orgSlug: c, onOpenCoverage: o }) {
  const [l, d] = w("all"), [u, p] = w(null), [m, h] = w(!1), [_, f] = w(null), g = r || t?.facilityName || "", y = c || t?.orgSlug || "";
  U(() => {
    t?.patients?.length && (h(!0), xr(g, y).then(p).finally(() => h(!1)));
  }, [t?.patients, g, y]);
  const { stalePatients: v, decliningPatients: S, uncheckedPatients: C } = J(() => {
    if (!t?.patients) return { stalePatients: [], decliningPatients: [], uncheckedPatients: [] };
    const D = t.patients.filter((M) => M.stale), N = t.patients.filter((M) => !M.hasResults);
    let O = [];
    return u && (O = t.patients.filter((M) => {
      const A = u.get(M.patientId);
      return !A || A.length < 2 ? !1 : A[A.length - 1].score < A[0].score;
    })), { stalePatients: D, decliningPatients: O, uncheckedPatients: N };
  }, [t, u]), b = v.length > 0 || S.length > 0 || C.length > 0, P = J(() => {
    if (!t?.patients) return [];
    let D = t.patients;
    return l === "gaps" ? D = D.filter((N) => N.hasResults && N.overallScore < 100) : l === "unchecked" ? D = D.filter((N) => !N.hasResults) : l === "stale" && (D = D.filter((N) => N.stale)), D;
  }, [t, l]);
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
      Mr,
      {
        patient: _,
        facilityName: r || t?.facilityName || "",
        orgSlug: c || t?.orgSlug || "",
        onBack: () => f(null)
      }
    ) });
  const E = t.patients?.filter((D) => !D.hasResults).length || 0, x = t.summary?.patientsStale || 0, k = t.patients?.filter((D) => D.hasResults && D.overallScore < 100).length || 0;
  return /* @__PURE__ */ e("div", { class: "cpc-cv", children: [
    /* @__PURE__ */ e(kr, { days: i?.days }),
    /* @__PURE__ */ e(Pr, { summary: t.summary }),
    b && /* @__PURE__ */ e("div", { class: "cpc-cv__attention", children: [
      /* @__PURE__ */ e("div", { class: "cpc-cv__attention-title", children: "Needs Attention" }),
      /* @__PURE__ */ e(
        kt,
        {
          label: "New Gaps / Stale Data",
          accent: "red",
          patients: v,
          histories: u,
          historiesLoading: m,
          onOpenCoverage: f,
          defaultOpen: !0
        }
      ),
      /* @__PURE__ */ e(
        kt,
        {
          label: "Declining Coverage",
          accent: "orange",
          patients: S,
          histories: u,
          historiesLoading: m,
          onOpenCoverage: f,
          defaultOpen: !0
        }
      ),
      /* @__PURE__ */ e(
        kt,
        {
          label: "Never Checked",
          accent: "gray",
          patients: C,
          histories: u,
          historiesLoading: m,
          onOpenCoverage: f,
          defaultOpen: !1
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__filters", children: [
      { value: "all", label: `All (${t.patients?.length || 0})` },
      { value: "gaps", label: `With Gaps (${k})` },
      { value: "unchecked", label: `Unchecked (${E})` },
      ...x > 0 ? [{ value: "stale", label: `Stale (${x})` }] : []
    ].map((D) => /* @__PURE__ */ e(
      "button",
      {
        class: `cpc-cv__filter-pill${l === D.value ? " cpc-cv__filter-pill--active" : ""}`,
        onClick: () => d(D.value),
        children: D.label
      },
      D.value
    )) }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__list", children: P.length === 0 ? /* @__PURE__ */ e("div", { class: "cpc__empty", style: { padding: "24px" }, children: "No patients match this filter." }) : P.map((D) => /* @__PURE__ */ e(
      Ar,
      {
        patient: D,
        sparklineScores: u?.get(D.patientId),
        onOpenCoverage: f
      },
      D.patientId
    )) })
  ] });
}
const $r = { urgent: "warning", approaching: "warning" };
function Lr(t) {
  return $r[t] || t || "ok";
}
function Hn(t) {
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), a = String(t.getDate()).padStart(2, "0");
  return `${n}-${s}-${a}`;
}
function Fn(t) {
  const n = new Date(t);
  n.setHours(0, 0, 0, 0);
  const s = n.getDay(), a = s === 0 ? -6 : 1 - s;
  return n.setDate(n.getDate() + a), n;
}
function Nt(t, n) {
  const s = new Date(t);
  return s.setDate(s.getDate() + n), s;
}
function Rr({ facilityName: t, orgSlug: n }) {
  const [s, a] = w(() => Fn(/* @__PURE__ */ new Date())), [i, r] = w([]), [c, o] = w(null), [l, d] = w(!0), [u, p] = w(null), m = J(() => Nt(s, 6), [s]), h = j(async () => {
    if (!t || !n) return;
    d(!0), p(null);
    const y = new URLSearchParams({
      facilityName: t,
      orgSlug: n,
      startDate: Hn(s),
      endDate: Hn(m)
    }), v = new URLSearchParams({ facilityName: t, orgSlug: n });
    try {
      const [S, C] = await Promise.all([
        chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/planner/week-events?${y}`,
          options: { method: "GET" }
        }),
        chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/planner/summary?${v}`,
          options: { method: "GET" }
        })
      ]);
      if (!S?.success) throw new Error(S?.error || "Failed to load planner events");
      if (!C?.success) throw new Error(C?.error || "Failed to load planner summary");
      const P = (S.data?.events || []).map((E) => ({ ...E, urgency: Lr(E.urgency) }));
      r(P), o(C.data?.summary || null);
    } catch (S) {
      console.error("[MdsPlanner] fetch failed", S), p(S.message || "Failed to load planner");
    } finally {
      d(!1);
    }
  }, [t, n, s, m]);
  U(() => {
    h();
  }, [h]), U(() => {
    const y = () => h();
    return window.addEventListener("super:query-sent", y), window.addEventListener("super:cert-signed", y), window.addEventListener("super:care-plan-updated", y), () => {
      window.removeEventListener("super:query-sent", y), window.removeEventListener("super:cert-signed", y), window.removeEventListener("super:care-plan-updated", y);
    };
  }, [h]);
  const _ = j(() => a((y) => Nt(y, -7)), []), f = j(() => a((y) => Nt(y, 7)), []), g = j(() => a(Fn(/* @__PURE__ */ new Date())), []);
  return {
    events: i,
    summary: c,
    loading: l,
    error: u,
    weekStart: s,
    weekEnd: m,
    goPrevWeek: _,
    goNextWeek: f,
    goThisWeek: g,
    refetch: h
  };
}
function Qe() {
  return window.location.origin;
}
const st = (t) => `${Qe()}/admin/client/cp_residentdashboard.jsp?ESOLrow=1&ESOLclientid=${t}`, Un = (t) => `${Qe()}/clinical/mds3/sectionlisting.xhtml?ESOLassessid=${t}`, Gn = (t) => `${Qe()}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=-1&ESOLclientid=${t}`, qr = (t, n) => `${Qe()}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=${t}&ESOLclientid=${n}`, Vn = (t, n) => `${Qe()}/care/chart/cp/careplandetail_rev.jsp?ESOLcareplanid=${t}&ESOLclientid=${n}`;
function dn(t) {
  if (!t) return null;
  const { type: n, meta: s = {}, patientExternalId: a } = t, i = a;
  switch (n) {
    case "admit":
    case "discharge":
    case "readmit":
      return i ? { url: st(i), target: "pcc" } : null;
    case "mds_ard":
    case "mds_due":
      return s.pccAssessmentId ? { url: Un(s.pccAssessmentId), target: "pcc" } : i ? { url: st(i), target: "pcc" } : null;
    case "next_mds_ard":
      return null;
    case "cp_open_needed":
    case "cp_review_expected":
      return i ? { url: Gn(i), target: "pcc" } : null;
    case "cp_review_in_progress":
    case "cp_review_due":
      return s.pccCarePlanId && i ? { url: Vn(s.pccCarePlanId, i), target: "pcc" } : s.pccReviewId && i ? { url: qr(s.pccReviewId, i), target: "pcc" } : i ? { url: Gn(i), target: "pcc" } : null;
    case "cp_completion_due":
      return s.pccCarePlanId && i ? { url: Vn(s.pccCarePlanId, i), target: "pcc" } : s.pccAssessmentId ? { url: Un(s.pccAssessmentId), target: "pcc" } : i ? { url: st(i), target: "pcc" } : null;
    case "query_due":
      return { target: "internal", handler: "query", id: s.queryId };
    case "cert_due":
    case "cert_overdue":
      return { target: "internal", handler: "cert", id: s.certId };
    default:
      return null;
  }
}
function Ae(t) {
  const n = dn(t);
  return n ? n.target === "pcc" && n.url ? (window.location.href = n.url, !0) : n.target === "internal" ? (n.handler === "query" && n.id ? window.dispatchEvent(new CustomEvent("super:open-query", { detail: { queryId: n.id } })) : n.handler === "cert" && n.id && window.dispatchEvent(new CustomEvent("super:open-cert", { detail: { certId: n.id } })), t.patientExternalId && (window.location.href = st(t.patientExternalId)), !0) : !1 : !1;
}
function ke(t) {
  return t ? t.replace(/Significant Change( in Status)?/gi, "Sig Change").replace(/Significant Correction.*?(Assessment)?/gi, "Sig Correction").replace(/Interim Payment Assessment/gi, "IPA").replace(/Part A PPS Discharge( \(OMRA\))?/gi, "PPS Discharge").replace(/\bDeath in Facility\b/gi, "Death").replace(/\s+/g, " ").trim() : "";
}
const Or = {
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
}, Br = {
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
function Hr({ event: t, interactive: n = !1 }) {
  const s = t.urgency || "ok", a = t.type === "mds_ard" || t.type === "mds_due" || t.type === "next_mds_ard", i = a && t.meta?.description ? ke(t.meta.description) : null, r = i ? `${i} ARD` : Or[t.type] || t.type, c = !!dn(t), o = t.type === "cp_completion_due" && t.meta?.isProxy === !0, l = n && c, d = a ? "mds-pl__evt--t-mds" : t.type === "admit" || t.type === "readmit" ? "mds-pl__evt--t-admit" : t.type === "discharge" ? "mds-pl__evt--t-dc" : "";
  return /* @__PURE__ */ e(
    "div",
    {
      class: [
        "mds-pl__evt",
        `mds-pl__evt--u-${s}`,
        d,
        o ? "mds-pl__evt--proxy" : "",
        l ? "mds-pl__evt--clickable" : ""
      ].filter(Boolean).join(" "),
      onClick: l ? (u) => {
        u.stopPropagation(), Ae(t);
      } : void 0,
      title: l ? "Open in PCC" : void 0,
      children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__evt-bar" }),
        /* @__PURE__ */ e("span", { class: "mds-pl__evt-icon", "aria-hidden": "true", children: Br[t.type] }),
        /* @__PURE__ */ e("span", { class: "mds-pl__evt-text", children: [
          /* @__PURE__ */ e("span", { class: "mds-pl__evt-who", children: t.patientName || "Unknown" }),
          /* @__PURE__ */ e("span", { class: "mds-pl__evt-tag", children: r })
        ] })
      ]
    }
  );
}
const Fr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function Ur(t) {
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), a = String(t.getDate()).padStart(2, "0");
  return `${n}-${s}-${a}`;
}
function Gr(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
}
const zn = { overdue: 0, warning: 1, ok: 2 };
function Vr(t) {
  return [...t].sort((n, s) => {
    const a = zn[n.urgency] ?? 3, i = zn[s.urgency] ?? 3;
    return a !== i ? a - i : (n.type || "").localeCompare(s.type || "");
  });
}
function zr({ events: t, weekStart: n, selectedDay: s, onSelectDay: a }) {
  const i = /* @__PURE__ */ new Date();
  i.setHours(0, 0, 0, 0);
  const r = J(() => {
    const c = [], o = /* @__PURE__ */ new Map();
    for (const l of t || [])
      o.has(l.date) || o.set(l.date, []), o.get(l.date).push(l);
    for (let l = 0; l < 7; l++) {
      const d = new Date(n);
      d.setDate(n.getDate() + l);
      const u = Ur(d);
      c.push({
        date: d,
        iso: u,
        events: Vr(o.get(u) || []),
        isToday: Gr(d, i)
      });
    }
    return c;
  }, [t, n]);
  return /* @__PURE__ */ e("div", { class: "mds-pl__week", children: r.map((c) => {
    const o = s === c.iso, l = c.events.length === 0;
    return /* @__PURE__ */ e(
      "div",
      {
        class: `mds-pl__day${c.isToday ? " mds-pl__day--today" : ""}${o ? " mds-pl__day--selected" : ""}${l ? " mds-pl__day--empty" : ""}${a ? " mds-pl__day--clickable" : ""}`,
        onClick: a ? () => a(o ? null : c.iso) : void 0,
        role: a ? "button" : void 0,
        tabIndex: a ? 0 : void 0,
        children: [
          /* @__PURE__ */ e("div", { class: "mds-pl__day-head", children: [
            /* @__PURE__ */ e("span", { class: "mds-pl__day-dow", children: Fr[(c.date.getDay() + 6) % 7] }),
            /* @__PURE__ */ e("span", { class: "mds-pl__day-num", children: c.date.getDate() })
          ] }),
          /* @__PURE__ */ e("div", { class: "mds-pl__day-events", children: [
            c.events.map((d, u) => /* @__PURE__ */ e(Hr, { event: d }, `${d.type}-${d.patientId}-${u}`)),
            l && /* @__PURE__ */ e("span", { class: "mds-pl__day-quiet", children: "—" })
          ] })
        ]
      },
      c.iso
    );
  }) });
}
function Wn(t) {
  if (!t) return !1;
  const n = new Date(t);
  if (isNaN(n)) return !1;
  const s = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n < s;
}
function Qn(t) {
  if (!t) return null;
  const n = new Date(t);
  if (isNaN(n)) return null;
  n.setHours(0, 0, 0, 0);
  const s = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), Math.round((n - s) / 864e5);
}
function Wr(t) {
  if (!t) return [];
  const n = [], s = (i, r, c = {}) => ({
    type: r,
    patientExternalId: i.patientExternalId,
    patientName: i.patientName,
    meta: {
      pccAssessmentId: i.pccAssessmentId,
      pccCarePlanId: i.pccCarePlanId,
      pccReviewId: i.pccReviewId,
      ...c
    }
  });
  for (const i of t.mdsCoding?.patients || []) {
    const r = i.daysToCompleteBy;
    if (r == null) continue;
    const c = i.description ? `MDS · ${ke(i.description)}` : "MDS coding";
    r < 0 ? n.push({ kind: "mds", urgency: "overdue", anchor: "mds-coding", patient: i.patientName, label: c, detail: `${Math.abs(r)}d past lock`, sort: -100 + r, event: s(i, "mds_ard") }) : r <= 2 && n.push({ kind: "mds", urgency: "warning", anchor: "mds-coding", patient: i.patientName, label: c, detail: `${r}d to lock`, sort: r, event: s(i, "mds_ard") });
  }
  for (const i of t.carePlansToOpen?.patients || []) {
    const r = i.hoursSinceAdmit || 0;
    r >= 48 ? n.push({ kind: "cp_open", urgency: "overdue", anchor: "cp-open", patient: i.patientName, label: "Care plan to open", detail: `${r}h since admit`, sort: -80 - r / 24, event: s(i, "cp_open_needed") }) : r >= 24 && n.push({ kind: "cp_open", urgency: "warning", anchor: "cp-open", patient: i.patientName, label: "Care plan to open", detail: `${r}h since admit`, sort: 2, event: s(i, "cp_open_needed") });
  }
  for (const i of t.carePlansToReview?.patients || []) {
    const r = i.state === "overdue" || Wn(i.expectedDate), c = Qn(i.expectedDate), o = i.state === "in_progress" ? "cp_review_in_progress" : "cp_review_due";
    r ? n.push({ kind: "cp_review", urgency: "overdue", anchor: "cp-review", patient: i.patientName, label: "Care plan review", detail: c != null ? `${Math.abs(c)}d past due` : "past due", sort: -60 + (c ?? 0), event: s(i, o) }) : c != null && c <= 2 && n.push({ kind: "cp_review", urgency: "warning", anchor: "cp-review", patient: i.patientName, label: "Care plan review", detail: `due in ${c}d`, sort: c, event: s(i, o) });
  }
  for (const i of t.interviewsOwed?.patients || [])
    if (Wn(i.dueDate)) {
      const r = Qn(i.dueDate) || 0, c = (i.dueType || "").toUpperCase(), o = i.mdsDescription ? `${c} interview · ${ke(i.mdsDescription)}` : `${c} interview`;
      n.push({ kind: "interview", urgency: "overdue", anchor: "interviews", patient: i.patientName, label: o, detail: `${Math.abs(r)}d past due`, sort: -40 + r, event: s(i, "mds_ard") });
    }
  const a = t.certs?.overdueList;
  if (Array.isArray(a) && a.length > 0)
    for (const i of a) {
      const r = "cert_overdue", c = i.type === "day_14_recert" ? "Day-14 recert" : i.type === "day_30_recert" ? "Day-30 recert" : i.type === "initial" ? "Initial cert" : "Cert", o = i.bucket === "awaiting_signature" ? "awaiting sig" : "to send";
      n.push({
        kind: "cert",
        urgency: "overdue",
        anchor: "certs",
        patient: i.patientName,
        label: `${c} · ${o}`,
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
const Qr = {
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
function jr(t) {
  const n = document.getElementById(`mds-pl-q-${t}`);
  n && n.scrollIntoView({ behavior: "smooth", block: "start" });
}
function Kr(t) {
  t.event && Ae(t.event) || jr(t.anchor);
}
function Yr({ summary: t }) {
  const n = Wr(t);
  if (n.length === 0)
    return /* @__PURE__ */ e("div", { class: "mds-pl__focus mds-pl__focus--empty", children: /* @__PURE__ */ e("div", { class: "mds-pl__focus-head", children: [
      /* @__PURE__ */ e("span", { class: "mds-pl__focus-title", children: "Today's focus" }),
      /* @__PURE__ */ e("span", { class: "mds-pl__focus-clear", children: "All caught up ✓" })
    ] }) });
  const [s, a] = w(!1), i = n.filter((d) => d.urgency === "overdue").length, r = n.filter((d) => d.urgency === "warning").length, c = 5, o = s ? n : n.slice(0, c), l = n.length - o.length;
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
      o.map((d, u) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `mds-pl__focus-row mds-pl__focus-row--${d.urgency}`,
          onClick: () => Kr(d),
          title: d.event ? `Open ${d.patient || d.label} in PCC` : `Jump to ${d.label}`,
          children: [
            /* @__PURE__ */ e("span", { class: "mds-pl__focus-icon", children: Qr[d.kind] }),
            /* @__PURE__ */ e("span", { class: "mds-pl__focus-main", children: [
              d.patient && /* @__PURE__ */ e(Y, { children: [
                /* @__PURE__ */ e("span", { class: "mds-pl__focus-patient", children: d.patient }),
                " "
              ] }),
              /* @__PURE__ */ e("span", { class: "mds-pl__focus-label", children: d.label })
            ] }),
            /* @__PURE__ */ e("span", { class: "mds-pl__focus-detail", children: d.detail }),
            /* @__PURE__ */ e("span", { class: "mds-pl__focus-chev", "aria-hidden": "true", children: "›" })
          ]
        },
        u
      )),
      l > 0 && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "mds-pl__focus-more",
          onClick: () => a(!0),
          children: [
            "+ ",
            l,
            " more — show all"
          ]
        }
      ),
      s && n.length > c && /* @__PURE__ */ e(
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
const jn = 14;
function be(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function ut(t) {
  if (!t) return !1;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n < s;
}
function Jr({ count: t, overdueCount: n = 0, doneCount: s = 0 }) {
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
  ] })), /* @__PURE__ */ e("span", { class: "mds-pl__q-count", children: r.map((c, o) => /* @__PURE__ */ e(Y, { children: [
    o > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__q-count-sep", children: " · " }),
    c
  ] })) });
}
function ge({ title: t, count: n, overdueCount: s = 0, doneCount: a = 0, footer: i, anchor: r, children: c }) {
  return /* @__PURE__ */ e("div", { class: "mds-pl__q", id: r ? `mds-pl-q-${r}` : void 0, children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__q-head", children: [
      /* @__PURE__ */ e("h3", { class: "mds-pl__q-title", children: t }),
      /* @__PURE__ */ e(Jr, { count: n, overdueCount: s, doneCount: a })
    ] }),
    c,
    i && /* @__PURE__ */ e("div", { class: "mds-pl__q-footer", children: i })
  ] });
}
function Re({ completed: t, renderRow: n, windowLabel: s = "this week" }) {
  if (!t || t.count === 0) return null;
  const [a, i] = w(!1), r = t.patients || [];
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
function Ie(t) {
  if (t)
    return (n) => {
      n.target.closest("button, a") || Ae(t);
    };
}
const Zr = /* @__PURE__ */ new Set(["In Progress", "Open", "Started", "Not Started"]);
function Xr(t) {
  return t.status ? t.isLocked === !0 ? !1 : Zr.has(t.status) : !0;
}
function eo(t) {
  const n = t.daysToCompleteBy;
  if (n == null) return "pace-ok";
  if (n < 0) return "pace-over";
  const s = t.sectionsTotal || 0;
  if (s === 0) return "pace-ok";
  const i = Math.max(0, jn - n) / jn;
  return (t.sectionsCompleted || 0) / s < i - 0.05 ? "pace-behind" : "pace-ok";
}
function to({ data: t }) {
  const n = (t?.patients || []).filter(Xr), s = t?.completedRecently, a = s?.count || 0;
  if (!t || n.length === 0 && a === 0)
    return /* @__PURE__ */ e(ge, { title: "MDS Coding", count: "0", anchor: "mds-coding", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "No MDS in the coding window." }) });
  const i = n.filter((r) => r.daysToCompleteBy != null && r.daysToCompleteBy < 0).length;
  return /* @__PURE__ */ e(
    ge,
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
            const c = r.sectionsTotal ? Math.round(r.sectionsCompleted / r.sectionsTotal * 100) : 0, o = r.daysToCompleteBy != null && r.daysToCompleteBy < 0, l = eo(r), d = o ? "mds-pl__trow--overdue" : l === "pace-behind" ? "mds-pl__trow--warning" : "", u = {
              type: "mds_ard",
              patientExternalId: r.patientExternalId,
              patientName: r.patientName,
              meta: { pccAssessmentId: r.pccAssessmentId }
            };
            return /* @__PURE__ */ e(
              "tr",
              {
                class: `${d} mds-pl__trow--clickable`.trim(),
                onClick: Ie(u),
                title: `Open ${r.patientName} MDS in PCC`,
                children: [
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: [
                    /* @__PURE__ */ e("div", { class: "mds-pl__t-name-main", children: r.patientName }),
                    r.description && /* @__PURE__ */ e("div", { class: "mds-pl__t-name-sub", children: ke(r.description) })
                  ] }),
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-date", children: be(r.ardDate) }),
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-progress", children: [
                    /* @__PURE__ */ e("span", { class: `mds-pl__bar mds-pl__bar--${l}`, children: /* @__PURE__ */ e("span", { class: "mds-pl__bar-fill", style: { width: `${c}%` } }) }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__bar-label", children: [
                      r.sectionsCompleted,
                      "/",
                      r.sectionsTotal
                    ] })
                  ] }),
                  /* @__PURE__ */ e("td", { class: `mds-pl__t-date${o ? " mds-pl__t-date--over" : ""}`, children: o ? `${Math.abs(r.daysToCompleteBy)}d over` : `${r.daysToCompleteBy}d left` })
                ]
              },
              r.assessmentId || r.patientId
            );
          }) })
        ] }) : null,
        /* @__PURE__ */ e(
          Re,
          {
            completed: s,
            renderRow: (r) => {
              const c = {
                type: "mds_ard",
                patientExternalId: r.patientExternalId,
                patientName: r.patientName,
                meta: { pccAssessmentId: r.pccAssessmentId }
              };
              return /* @__PURE__ */ e(
                "div",
                {
                  class: "mds-pl__done-row",
                  onClick: Ie(c),
                  title: `Open ${r.patientName} MDS in PCC`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: r.patientName }),
                    r.description && /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: ke(r.description) }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "locked ",
                      be(r.lockedAt)
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
function no({ data: t }) {
  const n = t?.completedRecently, s = n?.count || 0;
  return !t || t.count === 0 && s === 0 ? /* @__PURE__ */ e(ge, { title: "Care Plans to Open", count: "0", anchor: "cp-open", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "Nothing to open." }) }) : /* @__PURE__ */ e(
    ge,
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
            const i = a.hoursSinceAdmit >= 48, r = a.hoursSinceAdmit >= 24 && !i, c = i ? "mds-pl__trow--overdue" : r ? "mds-pl__trow--warning" : "", o = {
              type: "cp_open_needed",
              patientExternalId: a.patientExternalId,
              patientName: a.patientName,
              meta: {}
            };
            return /* @__PURE__ */ e(
              "tr",
              {
                class: `${c} mds-pl__trow--clickable`.trim(),
                onClick: Ie(o),
                title: `Open new care plan for ${a.patientName}`,
                children: [
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: a.patientName }),
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-date", children: be(a.admitDate) }),
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
          Re,
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
                  onClick: Ie(i),
                  title: `Open care plan for ${a.patientName}`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: a.patientName }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "opened ",
                      be(a.carePlanOpenedAt)
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
function so({ data: t }) {
  const n = t?.completedRecently, s = n?.count || 0;
  if (!t || t.count === 0 && s === 0)
    return /* @__PURE__ */ e(ge, { title: "Care Plans to Review", count: "0", anchor: "cp-review", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "All caught up." }) });
  const a = (t.patients || []).filter((i) => i.state === "overdue" || ut(i.expectedDate)).length;
  return /* @__PURE__ */ e(
    ge,
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
            const r = i.state === "overdue" || ut(i.expectedDate), c = r ? "mds-pl__trow--overdue" : "", l = {
              type: i.state === "in_progress" ? "cp_review_in_progress" : "cp_review_due",
              patientExternalId: i.patientExternalId,
              patientName: i.patientName,
              meta: { pccCarePlanId: i.pccCarePlanId, pccReviewId: i.pccReviewId }
            };
            return /* @__PURE__ */ e(
              "tr",
              {
                class: `${c} mds-pl__trow--clickable`.trim(),
                onClick: Ie(l),
                title: `Open care plan for ${i.patientName}`,
                children: [
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: i.patientName }),
                  /* @__PURE__ */ e("td", { class: `mds-pl__t-date${r ? " mds-pl__t-date--over" : ""}`, children: be(i.expectedDate) }),
                  /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e("span", { class: `mds-pl__chip mds-pl__chip--${i.state}`, children: i.state.replace("_", " ") }) })
                ]
              },
              `${i.patientId}-${i.expectedDate}`
            );
          }) })
        ] }),
        /* @__PURE__ */ e(
          Re,
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
                  onClick: Ie(r),
                  title: `Open care plan for ${i.patientName}`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: i.patientName }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "reviewed ",
                      be(i.reviewCompletedAt)
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
function ao({ data: t, onOpenQueriesTab: n }) {
  if (!t) return null;
  const s = t.completedRecently, a = s?.count || 0;
  return /* @__PURE__ */ e(
    ge,
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
          Re,
          {
            completed: s,
            renderRow: (i) => /* @__PURE__ */ e("div", { class: "mds-pl__done-row", children: [
              /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: i.patientName }),
              i.itemCode && /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: i.itemCode }),
              /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                "signed ",
                be(i.signedAt)
              ] })
            ] }, i.queryId)
          }
        )
      ]
    }
  );
}
function io({ data: t, onOpenCertsTab: n }) {
  if (!t) return null;
  const s = t.needsToSend || {}, a = t.awaitingSignature || {}, i = (s.overdueCount || 0) + (a.overdueCount || 0), r = t.completedRecently, c = r?.count || 0;
  return /* @__PURE__ */ e(
    ge,
    {
      title: "Certs",
      count: t.count,
      overdueCount: i,
      doneCount: c,
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
          Re,
          {
            completed: r,
            renderRow: (o) => {
              const l = o.type === "day_14_recert" ? "Day-14 recert" : o.type === "day_30_recert" ? "Day-30 recert" : o.type === "initial" ? "Initial cert" : "Cert";
              return /* @__PURE__ */ e("div", { class: "mds-pl__done-row", children: [
                /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: o.patientName }),
                /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: l }),
                /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                  "signed ",
                  be(o.signedAt)
                ] })
              ] }, o.certId);
            }
          }
        )
      ]
    }
  );
}
const ro = {
  not_open: "Not open",
  in_progress: "In progress",
  overdue: "Overdue"
};
function oo(t) {
  return ut(t.dueDate) ? "overdue" : t.status || "not_open";
}
function co({ status: t }) {
  const n = ro[t] || "Not open";
  return /* @__PURE__ */ e("span", { class: `mds-pl__sicon mds-pl__sicon--${t === "overdue" ? "overdue" : t === "in_progress" ? "progress" : "idle"}`, role: "img", "aria-label": n, title: n, children: t === "overdue" ? /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ e("path", { d: "M12 3 L22 20 L2 20 Z" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "10", x2: "12", y2: "14" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] }) : t === "in_progress" ? /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ e("path", { d: "M12 3 A9 9 0 0 1 12 21 Z", fill: "currentColor", stroke: "none" })
  ] }) : /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }) }) });
}
function lo({ data: t }) {
  if (!t) return null;
  const n = t.byType || {}, s = t.patients || [], a = t.completedRecently, i = a?.count || 0, r = s.length;
  if (r === 0 && i === 0)
    return /* @__PURE__ */ e(ge, { title: "Interviews Owed", count: "0", anchor: "interviews", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "All interviews caught up." }) });
  const c = s.filter((o) => ut(o.dueDate)).length;
  return /* @__PURE__ */ e(
    ge,
    {
      title: "Interviews Owed",
      count: r,
      overdueCount: c,
      doneCount: i,
      anchor: "interviews",
      children: [
        r > 0 && /* @__PURE__ */ e(Y, { children: [
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
            /* @__PURE__ */ e("tbody", { children: s.slice(0, 6).map((o) => {
              const l = oo(o), d = l === "overdue", u = d ? "mds-pl__trow--overdue" : "", p = `${o.patientId}-${o.dueType}-${(o.assessmentIds || []).join(",") || o.assessmentId || ""}`, m = {
                type: "mds_ard",
                patientExternalId: o.patientExternalId,
                patientName: o.patientName,
                meta: { pccAssessmentId: o.pccAssessmentId }
              };
              return /* @__PURE__ */ e(
                "tr",
                {
                  class: `${u} mds-pl__trow--clickable`.trim(),
                  onClick: Ie(m),
                  title: `Open ${o.patientName} MDS in PCC`,
                  children: [
                    /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: o.patientName }),
                    /* @__PURE__ */ e("td", { class: "mds-pl__t-type", children: [
                      /* @__PURE__ */ e("div", { class: "mds-pl__t-type-main", children: (o.dueType || "").toUpperCase() }),
                      o.mdsDescription && /* @__PURE__ */ e("div", { class: "mds-pl__t-type-sub", children: ke(o.mdsDescription) })
                    ] }),
                    /* @__PURE__ */ e("td", { class: `mds-pl__t-date${d ? " mds-pl__t-date--over" : ""}`, children: be(o.dueDate) }),
                    /* @__PURE__ */ e("td", { class: "mds-pl__t-status", children: /* @__PURE__ */ e(co, { status: l }) })
                  ]
                },
                p
              );
            }) })
          ] })
        ] }),
        /* @__PURE__ */ e(
          Re,
          {
            completed: a,
            renderRow: (o) => {
              const l = {
                type: "mds_ard",
                patientExternalId: o.patientExternalId,
                patientName: o.patientName,
                meta: { pccAssessmentId: o.pccAssessmentId }
              };
              return /* @__PURE__ */ e(
                "div",
                {
                  class: "mds-pl__done-row",
                  onClick: Ie(l),
                  title: `Open ${o.patientName} MDS in PCC`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: o.patientName }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: [
                      (o.dueType || "").toUpperCase(),
                      o.mdsDescription && /* @__PURE__ */ e(Y, { children: [
                        " · ",
                        ke(o.mdsDescription)
                      ] })
                    ] }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "done ",
                      be(o.completedAt)
                    ] })
                  ]
                },
                `${o.patientId}-${o.dueType}-${o.assessmentId || ""}`
              );
            }
          }
        )
      ]
    }
  );
}
function po({ mcr: t, managed: n }) {
  if (!t && !n) return null;
  const s = (t?.count || 0) + (n?.count || 0);
  return /* @__PURE__ */ e(ge, { title: "Skilled Census", count: `${s} total`, anchor: "skilled", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-roster", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__q-roster-col", children: [
      /* @__PURE__ */ e("div", { class: "mds-pl__q-roster-head", children: [
        "Medicare A · ",
        t?.count || 0
      ] }),
      (t?.patients || []).slice(0, 5).map((a) => /* @__PURE__ */ e(
        "div",
        {
          class: `mds-pl__q-roster-name${a.patientExternalId ? " mds-pl__q-roster-name--clickable" : ""}`,
          onClick: a.patientExternalId ? () => Ae({
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
          onClick: a.patientExternalId ? () => Ae({
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
function uo({ summary: t, onOpenQueriesTab: n, onOpenCertsTab: s }) {
  return t ? /* @__PURE__ */ e("div", { class: "mds-pl__queues-wrap", children: [
    /* @__PURE__ */ e(Yr, { summary: t }),
    /* @__PURE__ */ e("div", { class: "mds-pl__queues", children: [
      /* @__PURE__ */ e(to, { data: t.mdsCoding }),
      /* @__PURE__ */ e(no, { data: t.carePlansToOpen }),
      /* @__PURE__ */ e(so, { data: t.carePlansToReview }),
      /* @__PURE__ */ e(ao, { data: t.queriesOpen, onOpenQueriesTab: n }),
      /* @__PURE__ */ e(io, { data: t.certs, onOpenCertsTab: s }),
      /* @__PURE__ */ e(lo, { data: t.interviewsOwed }),
      /* @__PURE__ */ e(po, { mcr: t.skilledMCR, managed: t.skilledManagedCare })
    ] })
  ] }) : null;
}
const mo = {
  admit: "Admission",
  readmit: "Readmit",
  discharge: "Discharge",
  mds_ard: "MDS ARD",
  next_mds_ard: "Next MDS ARD (forecast)",
  query_due: "Query",
  cert_due: "Certification due",
  cert_overdue: "Certification overdue"
}, ho = {
  overdue: "Overdue",
  warning: "Due soon",
  ok: ""
}, Kn = { overdue: 0, warning: 1, ok: 2 };
function _o(t) {
  const [n, s, a] = t.split("-").map(Number);
  return new Date(n, s - 1, a).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}
function go(t) {
  const { type: n, meta: s = {} } = t, a = [];
  return n === "mds_ard" ? (s.description && a.push(s.description), s.ardDate && a.push(`ARD ${s.ardDate}`), s.status && a.push(s.status.toLowerCase())) : n === "next_mds_ard" ? s.expectedType && a.push(s.expectedType) : n === "query_due" ? (s.itemCode && a.push(s.itemCode), s.status && a.push(s.status), s.linkedArdDate && a.push(`linked ARD ${s.linkedArdDate}`)) : n === "cert_due" || n === "cert_overdue" ? (s.type && a.push(s.type.replace(/_/g, " ")), s.bucket && a.push(s.bucket.replace(/_/g, " ")), s.daysOverdue && a.push(`${s.daysOverdue}d overdue`)) : (n === "admit" || n === "readmit") && (s.payer && a.push(s.payer), s.location && a.push(s.location)), a.join(" · ");
}
function fo({ event: t }) {
  const n = t.urgency || "ok", s = mo[t.type] || t.type, a = ho[n] || "", i = go(t), c = !!dn(t);
  return /* @__PURE__ */ e(
    "div",
    {
      class: `mds-pl__dv-row mds-pl__dv-row--u-${n}${c ? " mds-pl__dv-row--clickable" : ""}`,
      onClick: c ? () => Ae(t) : void 0,
      role: c ? "button" : void 0,
      tabIndex: c ? 0 : void 0,
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
        c && /* @__PURE__ */ e("span", { class: "mds-pl__dv-arrow", children: "›" })
      ]
    }
  );
}
function yo({ date: t, events: n, onBack: s }) {
  const a = [...n].sort((i, r) => {
    const c = Kn[i.urgency] ?? 3, o = Kn[r.urgency] ?? 3;
    return c !== o ? c - o : (i.type || "").localeCompare(r.type || "");
  });
  return /* @__PURE__ */ e("div", { class: "mds-pl__dv", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__dv-top", children: [
      /* @__PURE__ */ e("button", { class: "mds-pl__dv-back", onClick: s, children: [
        /* @__PURE__ */ e("span", { "aria-hidden": "true", children: "‹" }),
        " Back to week"
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-pl__dv-title", children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__dv-title-date", children: _o(t) }),
        /* @__PURE__ */ e("span", { class: "mds-pl__dv-title-count", children: [
          n.length,
          " ",
          n.length === 1 ? "event" : "events"
        ] })
      ] })
    ] }),
    n.length === 0 ? /* @__PURE__ */ e("div", { class: "mds-pl__dv-empty", children: "Nothing scheduled for this day." }) : /* @__PURE__ */ e("div", { class: "mds-pl__dv-list", children: a.map((i, r) => /* @__PURE__ */ e(fo, { event: i }, `${i.type}-${i.patientId}-${r}`)) })
  ] });
}
const vo = /* @__PURE__ */ new Set([
  "admit",
  "readmit",
  "discharge",
  "mds_ard",
  "next_mds_ard",
  "query_due",
  "cert_due",
  "cert_overdue"
]);
function wo(t, n) {
  const s = t.getMonth() === n.getMonth(), a = t.toLocaleDateString("en-US", { month: "short" }), i = n.toLocaleDateString("en-US", { month: "short" });
  return s ? `${a} ${t.getDate()} – ${n.getDate()}` : `${a} ${t.getDate()} – ${i} ${n.getDate()}`;
}
function bo() {
  return /* @__PURE__ */ e("div", { class: "mds-pl__state", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__spinner" }),
    /* @__PURE__ */ e("p", { children: "Loading planner..." })
  ] });
}
function Io({ message: t, onRetry: n }) {
  return /* @__PURE__ */ e("div", { class: "mds-pl__state", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__state-icon", children: "⚠" }),
    /* @__PURE__ */ e("p", { children: t || "Failed to load planner." }),
    /* @__PURE__ */ e("button", { class: "mds-pl__retry", onClick: n, children: "Retry" })
  ] });
}
function Do({ facilityName: t, orgSlug: n, isFullscreen: s, onOpenTab: a }) {
  const {
    events: i,
    summary: r,
    loading: c,
    error: o,
    weekStart: l,
    weekEnd: d,
    goPrevWeek: u,
    goNextWeek: p,
    goThisWeek: m,
    refetch: h
  } = Rr({ facilityName: t, orgSlug: n }), [_, f] = w(null), [g, y] = w(!1), v = J(
    () => (i || []).filter((P) => vo.has(P.type)),
    [i]
  ), S = J(() => _ ? v.filter((P) => P.date === _) : [], [v, _]), C = J(() => wo(l, d), [l, d]), b = v.length;
  return /* @__PURE__ */ e("div", { class: `mds-pl${s ? " mds-pl--full" : " mds-pl--compact"}${g ? " mds-pl--queues-expanded" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__nav-bar", children: [
      /* @__PURE__ */ e("div", { class: "mds-pl__week-nav", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: u, "aria-label": "Previous week", children: "‹" }),
        /* @__PURE__ */ e("span", { class: "mds-pl__week-label", children: C }),
        /* @__PURE__ */ e("button", { type: "button", onClick: p, "aria-label": "Next week", children: "›" }),
        /* @__PURE__ */ e("button", { type: "button", class: "mds-pl__today-btn", onClick: m, children: "Today" })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-pl__nav-right", children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__event-count", children: [
          b === 0 ? "quiet week" : `${b} event${b === 1 ? "" : "s"} this week`,
          !_ && b > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__hint", children: " · click a day for detail" })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `mds-pl__focus-mode-toggle${g ? " mds-pl__focus-mode-toggle--active" : ""}`,
            onClick: () => y((P) => !P),
            "aria-label": g ? "Show calendar" : "Hide calendar — focus on queues",
            title: g ? "Show calendar" : "Hide calendar — focus on queues",
            children: [
              g ? /* @__PURE__ */ e("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
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
              /* @__PURE__ */ e("span", { children: g ? "Show calendar" : "Focus mode" })
            ]
          }
        )
      ] })
    ] }),
    c && /* @__PURE__ */ e(bo, {}),
    !c && o && /* @__PURE__ */ e(Io, { message: o, onRetry: h }),
    !c && !o && /* @__PURE__ */ e("div", { class: "mds-pl__body", children: [
      !g && /* @__PURE__ */ e("section", { class: "mds-pl__left", children: _ ? /* @__PURE__ */ e(
        yo,
        {
          date: _,
          events: S,
          onBack: () => f(null)
        }
      ) : /* @__PURE__ */ e(
        zr,
        {
          events: v,
          weekStart: l,
          selectedDay: null,
          onSelectDay: f
        }
      ) }),
      /* @__PURE__ */ e("aside", { class: "mds-pl__right", children: /* @__PURE__ */ e(
        uo,
        {
          summary: r,
          onOpenQueriesTab: a ? () => a("queries") : void 0,
          onOpenCertsTab: a ? () => a("certs") : void 0
        }
      ) })
    ] })
  ] });
}
function Co(t) {
  return t.deadlines?.urgency || t.urgency || "on_track";
}
function ko(t, n, s, a) {
  let i = t;
  return n !== "all" && (i = i.filter((r) => r.payerType === n)), s !== "all" && (i = i.filter((r) => r.assessmentClass === s)), a === "revenue" && (i = i.filter((r) => r.pdpm?.hasImprovements)), a === "issues" && (i = i.filter((r) => {
    const c = r.udaSummary, o = c && (c.bims === "missing" || c.bims === "near_miss" || c.bims === "in_progress" || c.phq9 === "missing" || c.phq9 === "near_miss" || c.phq9 === "in_progress" || c.gg === "missing" || c.gg === "near_miss" || c.gg === "in_progress"), l = r.compliance?.checks?.orders ? r.compliance.checks.orders.status !== "passed" : !1;
    return o || l;
  })), i;
}
const Gt = ["overdue", "urgent", "approaching", "on_track", "completed"];
function No(t) {
  const n = {};
  for (const s of Gt) n[s] = [];
  for (const s of t) {
    const a = Co(s);
    n[a] ? n[a].push(s) : n.on_track.push(s);
  }
  for (const s of Gt)
    n[s].sort((a, i) => {
      if (a.patientId && i.patientId && a.patientId !== i.patientId)
        return a.patientId.localeCompare(i.patientId);
      const r = a.ardDate ? new Date(a.ardDate) : /* @__PURE__ */ new Date(0), c = i.ardDate ? new Date(i.ardDate) : /* @__PURE__ */ new Date(0);
      return r - c;
    });
  return n;
}
function So() {
  return /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__spinner" }),
    /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "Loading assessments..." })
  ] });
}
function xo({ message: t, onRetry: n }) {
  return /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "⚠" }),
    /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: t }),
    /* @__PURE__ */ e("button", { class: "mds-cc__retry-btn", onClick: n, children: "Retry" })
  ] });
}
function Po() {
  return /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "📋" }),
    /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "No assessments found." })
  ] });
}
function To(t) {
  if (!t) return "";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "today" : n === 1 ? "1d ago" : `${n}d ago`;
}
function Ao(t) {
  return t ? t.replace(/\s*\/\s*/g, " ").replace(/\s{2,}/g, " ").trim() : "";
}
function Mo(t) {
  const n = t.ardDaysRemaining;
  if (n == null) return null;
  let s, a;
  return n < 0 ? (s = `ARD passed ${Math.abs(n)}d ago`, a = "mds-cc__ard--critical") : n === 0 ? (s = "ARD today", a = "mds-cc__ard--critical") : n <= 3 ? (s = `ARD in ${n}d`, a = "mds-cc__ard--warn") : (s = `ARD in ${n}d`, a = "mds-cc__ard--neutral"), /* @__PURE__ */ e("span", { class: `mds-cc__ard ${a}`, children: s });
}
function Yn(t) {
  return [...t].sort((n, s) => {
    const a = n.ardDaysRemaining ?? 1 / 0, i = s.ardDaysRemaining ?? 1 / 0;
    return a - i;
  });
}
function Jn({ q: t, expanded: n, onToggle: s, onOpenAssessment: a, assessmentCtx: i, isPending: r }) {
  const c = en(t.assessmentPayment), o = t.sentTo?.[0] || t.practitioner, l = o ? `${o.firstName || ""} ${o.lastName || ""}`.trim() : null, d = o?.title;
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
        Mo(t),
        c && /* @__PURE__ */ e("span", { class: `mds-cc__qcard-delta${r ? " mds-cc__qcard-delta--pending" : ""}`, children: c }),
        /* @__PURE__ */ e("svg", { class: `mds-cc__qcard-chevron${n ? " mds-cc__qcard-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-cc__qcard-meta", children: [
      i && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-ctx", children: i }),
      /* @__PURE__ */ e("span", { class: `mds-cc__qcard-status mds-cc__qcard-status--${r ? "pending" : "sent"}`, children: r ? "Not yet sent" : `Sent ${To(t.sentAt)}` }),
      l && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-practitioner", children: [
        "to ",
        l,
        d ? `, ${d}` : ""
      ] })
    ] }),
    n && /* @__PURE__ */ e("div", { class: "mds-cc__qcard-body", children: /* @__PURE__ */ e("div", { class: "mds-cc__qcard-actions", children: [
      /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--primary", onClick: (u) => {
        u.stopPropagation(), a();
      }, children: "Open in PDPM Analyzer" }),
      !r && /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--secondary", onClick: (u) => {
        u.stopPropagation();
        const p = u.currentTarget;
        p.textContent = "Sending...", p.disabled = !0;
        try {
          window.QueryAPI.resendQuery(t.id).then(() => {
            window.SuperToast?.success?.("SMS resent"), p.textContent = "Sent!";
          }).catch((m) => {
            console.error("[Super] Resend failed:", m), window.SuperToast?.error?.("Failed to resend"), p.textContent = "Resend SMS", p.disabled = !1;
          });
        } catch (m) {
          console.error("[Super] Resend error:", m), p.textContent = "Resend SMS", p.disabled = !1;
        }
      }, children: "Resend SMS" })
    ] }) })
  ] });
}
function Eo({ outstandingQueries: t, recentlySigned: n, assessments: s, onOpenAssessment: a }) {
  const [i, r] = w(null), c = Yn((t || []).filter((m) => m.status === "pending")), o = Yn((t || []).filter((m) => m.status === "sent" || m.status === "awaiting_response"));
  function l(m) {
    const h = (s || []).find((_) => _.id === m.mdsAssessmentId);
    return h?.externalAssessmentId || h?.assessmentId || h?.id || m.mdsAssessmentId;
  }
  function d(m) {
    const h = (s || []).find((_) => _.id === m.mdsAssessmentId);
    return h && Ao(h.assessmentType) || null;
  }
  async function u(m) {
    try {
      const h = await fetch(`/api/extension/diagnosis-queries/${m}/pdf`), { pdfUrl: _ } = await h.json();
      _ && window.open(_, "_blank");
    } catch (h) {
      console.warn("[Super] PDF fetch failed", h);
    }
  }
  const p = c.length + o.length;
  return /* @__PURE__ */ e("div", { class: "mds-cc__queries-view", children: [
    o.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--sent" }),
        "Awaiting Doctor",
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-count", children: o.length })
      ] }),
      o.map((m) => /* @__PURE__ */ e(
        Jn,
        {
          q: m,
          expanded: i === m.id,
          onToggle: () => r(i === m.id ? null : m.id),
          onOpenAssessment: () => a?.(l(m)),
          assessmentCtx: d(m),
          isPending: !1
        },
        m.id
      ))
    ] }),
    c.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--pending" }),
        "Needs to be Sent",
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-count", children: c.length })
      ] }),
      c.map((m) => /* @__PURE__ */ e(
        Jn,
        {
          q: m,
          expanded: i === m.id,
          onToggle: () => r(i === m.id ? null : m.id),
          onOpenAssessment: () => a?.(l(m)),
          assessmentCtx: d(m),
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
        const h = m.status === "signed", _ = m.status === "rejected", f = m.practitioner || m.sentTo?.[0];
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
            f && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-practitioner", children: [
              f.firstName,
              " ",
              f.lastName,
              f.title ? `, ${f.title}` : ""
            ] }),
            h && m.selectedIcd10Code && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-icd", children: m.selectedIcd10Code }),
            _ && m.rejectionReason && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-rejection", children: [
              "“",
              m.rejectionReason,
              "”"
            ] })
          ] }),
          i === m.id && /* @__PURE__ */ e("div", { class: "mds-cc__qcard-body", children: /* @__PURE__ */ e("div", { class: "mds-cc__qcard-actions", children: [
            /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--primary", onClick: (g) => {
              g.stopPropagation(), a?.(l(m));
            }, children: "Open in PDPM Analyzer" }),
            m.hasPdf && /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--secondary", onClick: (g) => {
              g.stopPropagation(), u(m.id);
            }, children: "View Signed PDF" })
          ] }) })
        ] }, m.id || m.mdsItem);
      })
    ] }),
    p === 0 && (!n || n.length === 0) && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "✉" }),
      /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "No outstanding queries." })
    ] })
  ] });
}
function $o({ facilityName: t, orgSlug: n, onClose: s, initialExpandedId: a }) {
  const [i, r] = w("planner"), [c, o] = w("list"), [l, d] = w(!1), [u, p] = w("all"), [m, h] = w("all"), [_, f] = w("all"), [g, y] = w("all"), [v, S] = w(a || null), [C, b] = w(null), { data: P, loading: E, error: x, retry: k } = ka({ facilityName: t, orgSlug: n }), { data: D } = Na({ facilityName: t, orgSlug: n, enabled: !0 }), { data: N } = Sa({ facilityName: t, orgSlug: n, enabled: !0 }), O = N !== null, M = O ? (N?.pending || 0) + (N?.overdue || 0) : 0, { certs: A } = qt({ facilityName: t, orgSlug: n }), {
    data: $,
    loading: q,
    error: H,
    retry: Z
  } = Ir({ facilityName: t, orgSlug: n, enabled: !0 }), K = $?.summary?.totalGaps || 0, { data: R } = Dr({ facilityName: t, orgSlug: n, enabled: !0 }), B = P?.assessments || [], ee = P?.summary || {}, T = J(() => {
    const Q = ko(B, u, m, _);
    return No(Q);
  }, [B, u, m, _]), L = J(() => {
    const Q = g === "all" ? Gt : [g], le = [];
    for (const ye of Q) {
      const he = T[ye] || [];
      for (const Se of he) le.push(Se);
    }
    return le;
  }, [T, g]), W = L.length, G = ne(!1);
  U(() => {
    !a || !B.length || G.current || (G.current = !0, requestAnimationFrame(() => {
      const Q = te.current?.querySelector(`[data-assessment-id="${a}"]`);
      Q && Q.scrollIntoView({ behavior: "smooth", block: "center" });
    }));
  }, [B, a]);
  function ae(Q) {
    S((le) => {
      const ye = le === Q ? null : Q;
      return ye && requestAnimationFrame(() => {
        const he = te.current?.querySelector(`[data-assessment-id="${ye}"]`);
        he && he.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }), ye;
    });
  }
  const X = ne(null), te = ne(null);
  U(() => {
    if (i === "assessments" && X.current) {
      const Q = X.current;
      X.current = null, requestAnimationFrame(() => {
        const le = te.current?.querySelector(`[data-assessment-id="${Q}"]`);
        le && (le.scrollIntoView({ behavior: "smooth", block: "center" }), le.classList.add("mds-cc__card-wrapper--highlight"), setTimeout(() => le.classList.remove("mds-cc__card-wrapper--highlight"), 1500));
      });
    }
  }, [i, v]);
  function V(Q) {
    const le = Q.externalAssessmentId || Q.assessmentId || Q.id;
    s({ hide: !0 }), window.PDPMAnalyzerLauncher?.open({ scope: "mds", assessmentId: le });
  }
  function ie(Q) {
    s({ hide: !0 }), window.PDPMAnalyzerLauncher?.open({ scope: "mds", assessmentId: Q });
  }
  function me(Q) {
    Q.target === Q.currentTarget && s();
  }
  return /* @__PURE__ */ e("div", { class: "mds-cc__overlay", onClick: me, children: /* @__PURE__ */ e("div", { class: `mds-cc__modal${l ? " mds-cc__modal--fullscreen" : ""}`, role: "dialog", "aria-modal": "true", "aria-label": "MDS Command Center", children: [
    C && /* @__PURE__ */ e(
      Ws,
      {
        item: C.item,
        context: { assessmentId: C.assessmentId },
        onClose: () => b(null)
      }
    ),
    /* @__PURE__ */ e(
      Pa,
      {
        summary: ee,
        facilityName: t,
        onClose: s,
        activeView: i,
        onViewChange: r,
        viewMode: c,
        onViewModeChange: o,
        isFullscreen: l,
        onToggleFullscreen: () => d((Q) => !Q),
        queryCount: (P?.outstandingQueries || []).length,
        certCount: M,
        certsEnabled: O,
        complianceGaps: K,
        payerFilter: u,
        onPayerFilterChange: p,
        classFilter: m,
        onClassFilterChange: h,
        focusFilter: _,
        onFocusFilterChange: f,
        urgencyFilter: g,
        onUrgencyFilterChange: y
      }
    ),
    /* @__PURE__ */ e("div", { class: "mds-cc__list", ref: te, children: [
      E && /* @__PURE__ */ e(So, {}),
      !E && x && /* @__PURE__ */ e(xo, { message: x, onRetry: k }),
      !E && !x && i === "assessments" && c === "list" && /* @__PURE__ */ e(Y, { children: [
        W === 0 && /* @__PURE__ */ e(Po, {}),
        W > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__assessments mds-cc__assessments--flat", children: L.map((Q) => {
          const le = Q.id || Q.assessmentId || Q.externalAssessmentId, ye = v === le;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "mds-cc__card-wrapper",
              "data-assessment-id": le,
              children: [
                /* @__PURE__ */ e(
                  oi,
                  {
                    assessment: Q,
                    isExpanded: ye,
                    onToggle: () => ae(le),
                    onOpenAnalyzer: () => V(Q)
                  }
                ),
                ye && /* @__PURE__ */ e(
                  Os,
                  {
                    assessment: Q,
                    onOpenAnalyzer: () => V(Q),
                    onSelectItem: (he) => {
                      const Se = Q.externalAssessmentId || Q.assessmentId || Q.id;
                      b({ item: he, assessmentId: Se });
                    }
                  }
                )
              ]
            },
            le
          );
        }) })
      ] }),
      !E && !x && i === "assessments" && c === "calendar" && /* @__PURE__ */ e(
        Ai,
        {
          dashboardAssessments: B,
          scheduleItems: D?.schedule || [],
          outstandingQueries: P?.outstandingQueries || [],
          certs: A || [],
          onJumpToAssessment: (Q) => {
            o("list"), S(Q), X.current = Q;
          }
        }
      ),
      !E && !x && i === "queries" && /* @__PURE__ */ e(
        Eo,
        {
          outstandingQueries: P?.outstandingQueries || [],
          recentlySigned: P?.recentlySigned || [],
          assessments: B,
          onOpenAssessment: ie
        }
      ),
      i === "certs" && /* @__PURE__ */ e(
        ei,
        {
          facilityName: t,
          orgSlug: n
        }
      ),
      i === "compliance" && /* @__PURE__ */ e(
        Er,
        {
          data: $,
          loading: q,
          error: H,
          retry: Z,
          trendingData: R,
          facilityName: t,
          orgSlug: n
        }
      ),
      i === "planner" && /* @__PURE__ */ e(
        Do,
        {
          facilityName: t,
          orgSlug: n,
          isFullscreen: l,
          onOpenTab: r
        }
      )
    ] })
  ] }) });
}
function Lo(t, n) {
  const [s, a] = w([]), [i, r] = w(null), [c, o] = w(""), [l, d] = w(!1), [u, p] = w(!1), [m, h] = w(null), [_, f] = w(0), [g, y] = w(0), v = j(() => {
    f((b) => b + 1);
  }, []), S = j(() => {
    y((b) => b + 1);
  }, []);
  async function C() {
    if (!(await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" })).authenticated) throw new Error("Please log in to view MDS data");
    const E = getOrg()?.org, x = window.getChatFacilityInfo?.() || "";
    if (!E || !x) throw new Error("Could not determine organization or facility");
    return { orgSlug: E, facilityName: x };
  }
  return U(() => {
    if (!t) return;
    let b = !1;
    async function P() {
      d(!0), h(null);
      try {
        const { orgSlug: E, facilityName: x } = await C();
        if (t.scope === "mds" && t.assessmentId) {
          const k = new URLSearchParams({ externalAssessmentId: t.assessmentId, facilityName: x, orgSlug: E }), D = await chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/mds/pdpm-potential?${k}`,
            options: { method: "GET" }
          });
          if (!D.success) throw new Error(D.error || "Failed to load MDS data");
          b || (r(D.data), o(D.data?.patientName || t.patientName || ""), a([]));
        } else if (t.scope === "patient" && t.patientId) {
          const k = new URLSearchParams({ facilityName: x, orgSlug: E }), D = await chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/patients/${t.patientId}/assessments?${k}`,
            options: { method: "GET" }
          });
          if (!D.success) throw new Error(D.error || "Failed to load patient data");
          const N = D.data?.data || D.data || D;
          b || (a(N.assessments || []), o(N.patientName || t.patientName || "Patient"), r(null));
        } else
          b || (a([]), r(null));
      } catch (E) {
        b || h(E.message || "Failed to load data");
      } finally {
        b || d(!1);
      }
    }
    return P(), () => {
      b = !0;
    };
  }, [t?.scope, t?.assessmentId, t?.patientId, _]), U(() => {
    if (t?.scope !== "patient" || !n) return;
    let b = !1;
    async function P() {
      p(!0), r(null);
      try {
        const { orgSlug: E, facilityName: x } = await C(), k = new URLSearchParams({ externalAssessmentId: n, facilityName: x, orgSlug: E }), D = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${k}`,
          options: { method: "GET" }
        });
        if (!D.success) throw new Error(D.error || "Failed to load assessment data");
        b || r(D.data);
      } catch (E) {
        b || h(E.message || "Failed to load assessment detail");
      } finally {
        b || p(!1);
      }
    }
    return P(), () => {
      b = !0;
    };
  }, [t?.scope, n, g]), U(() => {
    function b() {
      y((P) => P + 1);
    }
    return window.addEventListener("super:item-decision", b), () => window.removeEventListener("super:item-decision", b);
  }, []), { assessments: s, detail: i, patientName: c, loading: l, detailLoading: u, error: m, retry: v, retryDetail: S };
}
const Zn = ["bims", "phq9", "gg", "orders", "therapyDocs"], Xn = { bims: "BIMS", phq9: "PHQ-9", gg: "GG", orders: "Orders", therapyDocs: "Therapy" }, Vt = 6;
function xe(t) {
  return t ? new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
}
function Ro(t) {
  if (!t) return "";
  const n = t.split(`
`)[0].trim();
  return n.length > 80 ? n.slice(0, 77) + "…" : n;
}
function qo(t, n) {
  if (!t || !n?.start || !n?.end) return null;
  const s = new Date(t).getTime();
  return s >= new Date(n.start).getTime() && s <= new Date(n.end).getTime();
}
function Oo({ check: t }) {
  const n = t?.foundUda;
  if (!n) return null;
  const s = !!n.lockedDate, a = qo(n.lockedDate || n.date, t.searchedDateRange);
  return /* @__PURE__ */ e("div", { class: "pdpm-an__cc-detail", children: /* @__PURE__ */ e("div", { class: "pdpm-an__cc-uda-grid", children: [
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Assessment" }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: n.description }),
    n.date && /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Completed" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: xe(n.date) })
    ] }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Lock" }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: s ? /* @__PURE__ */ e("span", { class: "pdpm-an__cc-lock pdpm-an__cc-lock--yes", children: [
      /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ e("path", { d: "M4 5V3.5a2 2 0 014 0V5", stroke: "currentColor", "stroke-width": "1.2", fill: "none" })
      ] }),
      xe(n.lockedDate)
    ] }) : /* @__PURE__ */ e("span", { class: "pdpm-an__cc-lock pdpm-an__cc-lock--no", children: [
      /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ e("path", { d: "M4 5V3.5a2 2 0 014 0", stroke: "currentColor", "stroke-width": "1.2", fill: "none" })
      ] }),
      "Unlocked"
    ] }) }),
    t.searchedDateRange && /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Window" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: [
        xe(t.searchedDateRange.start),
        " ",
        "–",
        " ",
        xe(t.searchedDateRange.end),
        a === !0 && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-window pdpm-an__cc-window--in", children: "In range" }),
        a === !1 && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-window pdpm-an__cc-window--out", children: "Outside range" })
      ] })
    ] })
  ] }) });
}
function Bo({ check: t }) {
  const n = t?.unsignedOrders;
  if (!n || n.length === 0) return null;
  const s = n.slice(0, Vt), a = n.length - Vt;
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
        /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-name", children: Ro(i.orderName) }),
        /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-meta", children: [
          i.category !== "Other" && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-cat", children: i.category }),
          i.startDate && /* @__PURE__ */ e("span", { children: xe(i.startDate) })
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
function Ho({ check: t }) {
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
    n.length > 0 && /* @__PURE__ */ e("div", { class: "pdpm-an__cc-orders", children: n.slice(0, Vt).map((s, a) => /* @__PURE__ */ e("div", { class: "pdpm-an__cc-order", children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-name", children: s.description || s.name || `Document ${a + 1}` }),
      s.date && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-meta", children: xe(s.date) })
    ] }, a)) })
  ] });
}
function Fo({ checkKey: t, check: n }) {
  return t === "orders" ? /* @__PURE__ */ e(Bo, { check: n }) : t === "therapyDocs" ? /* @__PURE__ */ e(Ho, { check: n }) : /* @__PURE__ */ e(Oo, { check: n });
}
function Uo({ data: t, collapsed: n, onToggleCollapse: s }) {
  const [a, i] = w(null), r = t?.compliance || {}, c = r.checks || {}, o = r.summary?.passed ?? 0, l = r.summary?.total ?? Zn.length, d = r.summary?.notApplicable ?? 0, u = l - d, p = (m) => i(a === m ? null : m);
  return /* @__PURE__ */ e("div", { class: `pdpm-an__card${o === u ? " pdpm-an__card--success" : " pdpm-an__card--warning"}`, children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "✓" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Compliance" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: [
        o,
        "/",
        u
      ] }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__cc-body", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__cc-chips", children: Zn.map((m) => {
        const h = c[m];
        if (!h || h.status === "not_applicable") return null;
        const _ = h.status === "passed", f = h.foundUda || m === "orders" || m === "therapyDocs";
        return /* @__PURE__ */ e(
          "button",
          {
            class: `pdpm-an__cc-chip${_ ? " pdpm-an__cc-chip--pass" : " pdpm-an__cc-chip--fail"}${a === m ? " pdpm-an__cc-chip--active" : ""}`,
            onClick: f ? () => p(m) : void 0,
            title: h.message || "",
            children: [
              /* @__PURE__ */ e("span", { class: "pdpm-an__cc-chip-icon", children: _ ? "✓" : "✗" }),
              Xn[m] || m
            ]
          },
          m
        );
      }) }),
      a && c[a] && c[a].status !== "not_applicable" && /* @__PURE__ */ e("div", { class: "pdpm-an__cc-expanded", children: [
        /* @__PURE__ */ e("div", { class: "pdpm-an__cc-expanded-label", children: [
          Xn[a],
          ": ",
          c[a].message
        ] }),
        /* @__PURE__ */ e(Fo, { checkKey: a, check: c[a] })
      ] })
    ] })
  ] });
}
function at(t) {
  return t.sourceType === "order" || t.type === "order" || (t.evidenceId || "").startsWith("order-");
}
function Go(t) {
  return (t.sourceId || t.evidenceId || "").replace(/^order-/, "");
}
function Ks(t) {
  return t.type === "medication" || (t.sourceId || "").startsWith("admin-");
}
function Vo(t) {
  if (Ks(t)) return !0;
  const n = ue(t).viewerType;
  return n === "document" || n === "clinical-note" || n === "therapy-document" || n === "order" || at(t);
}
function Ys({ item: t, context: n, onBack: s, onSplitChange: a, onDismiss: i }) {
  const r = t?.mdsItem, c = t?.categoryKey, { data: o, loading: l, error: d } = Hs(r, c, n), u = r?.startsWith("I8000:") ? "I8000" : r, p = o?.item, m = p?.status === "needs_physician_query", [h, _] = w(!1), f = p?.userDecision?.decision, g = f !== "disagree" && f !== "agree", y = j(async (T) => {
    _(!0);
    try {
      const W = getOrg()?.org, G = window.getChatFacilityInfo?.() || "", ae = r?.includes(":") ? r.split(":")[0] : r, X = t?.column || "", te = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/items/${encodeURIComponent(ae)}/decision`,
        options: {
          method: "POST",
          body: JSON.stringify({
            externalAssessmentId: n?.assessmentId,
            facilityName: G,
            orgSlug: W,
            decision: "disagree",
            note: T || "",
            mdsColumn: X
          })
        }
      });
      if (!te?.success) throw new Error(te?.error || "Failed to save decision");
      const V = `${ae}-${X}`;
      window.SuperOverlay?.dismissedItems && (window.SuperOverlay.dismissedItems.add(V), chrome.storage.local.set({ superDismissedItems: Array.from(window.SuperOverlay.dismissedItems) })), window.dispatchEvent(new CustomEvent("super:item-decision", {
        detail: { mdsItem: ae, column: X, decision: "disagree" }
      })), window.SuperToast?.success?.("Item dismissed"), i?.();
    } catch (L) {
      console.error("[ItemDetailView] Dismiss failed:", L), window.SuperToast?.error?.(L.message || "Failed to dismiss"), _(!1);
    }
  }, [r, t, n, i]), [v, S] = w(null), C = ne(/* @__PURE__ */ new Map()), [b, P] = w(null), [E, x] = w(!1), k = ne(null), N = zo(o).filter(Vo), O = v !== null, M = v && Ks(v.ev), A = v && !M && at(v.ev), $ = v ? ue(v.ev).viewerType : null, q = !M && $ === "clinical-note", H = !M && $ === "therapy-document", Z = v && !A && !q && !H && !M, K = ne(null);
  U(() => {
    a?.(O);
  }, [O]);
  const R = N.filter((T) => at(T) ? !1 : ue(T).viewerType === "document");
  U(() => {
    if (!o || R.length === 0) return;
    (async () => {
      let L;
      try {
        L = await window.getCurrentParams();
      } catch {
        return;
      }
      for (const W of R) {
        const G = ue(W);
        if (!G.id || C.current.has(G.id)) continue;
        const ae = Ge(G.id, L).then((X) => {
          const te = C.current.get(G.id);
          return te && (te.document = X.document), X.document;
        }).catch((X) => (console.warn("[ItemDetailView] Prefetch failed for", G.id, X), null));
        C.current.set(G.id, { document: null, promise: ae });
      }
    })();
  }, [o]), U(() => {
    if (!v || A || q || H) {
      P(null), x(!1);
      return;
    }
    const T = ue(v.ev);
    if (!T.id) return;
    const L = C.current.get(T.id);
    if (L?.document) {
      P(L.document), x(!1);
      return;
    }
    x(!0), (async () => {
      try {
        let G;
        if (L?.promise)
          G = await L.promise;
        else {
          const ae = await window.getCurrentParams();
          G = (await Ge(T.id, ae)).document, C.current.set(T.id, { document: G, promise: Promise.resolve(G) });
        }
        P(G);
      } catch (G) {
        console.error("[ItemDetailView] Failed to load document:", G), P(null);
      } finally {
        x(!1);
      }
    })();
  }, [v, A]), U(() => {
    if (!A || !k.current) return;
    const T = k.current, L = Go(v.ev);
    T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><div class="pdpm-an__spinner"></div><span>Loading administrations...</span></div>', window.renderSplitAdministrations ? (async () => {
      const ae = getOrg()?.org, X = window.getChatFacilityInfo?.() || "", te = { assessmentId: n?.assessmentId, orgSlug: ae, facilityName: X };
      await window.renderSplitAdministrations(T, L, void 0, te);
    })().catch((G) => {
      console.error("[ItemDetailView] Failed to load administrations:", G), T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Failed to load administrations</span></div>';
    }) : T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Administration viewer not available</span></div>';
  }, [v, A]), U(() => {
    if (!q && !H || !K.current) return;
    const T = K.current, L = ue(v.ev), W = v.ev.quoteText || v.ev.quote || v.ev.snippet || "";
    T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><div class="pdpm-an__spinner"></div><span>Loading...</span></div>', (async () => {
      const X = getOrg()?.org, te = window.getChatFacilityInfo?.() || "", V = { assessmentId: n?.assessmentId, orgSlug: X, facilityName: te };
      q && window.renderSplitNote ? await window.renderSplitNote(T, L.id, V) : H && window.renderSplitTherapy ? await window.renderSplitTherapy(T, L.id, W, V) : T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Viewer not available</span></div>';
    })().catch((ae) => {
      console.error("[ItemDetailView] Failed to load source:", ae), T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Failed to load</span></div>';
    });
  }, [v, q, H]);
  const B = j((T, L) => {
    S({ ev: T, index: L });
  }, []), ee = j(() => {
    S(null);
  }, []);
  return /* @__PURE__ */ e("div", { class: `idv${O ? " idv--split" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "idv__head", children: [
      /* @__PURE__ */ e("button", { class: "idv__back", onClick: O ? ee : s, type: "button", children: [
        /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M9 11L5 7l4-4", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }),
        "Back"
      ] }),
      /* @__PURE__ */ e("span", { class: "idv__code", children: u }),
      /* @__PURE__ */ e("h2", { class: "idv__name", children: p?.description || p?.kbCategory?.categoryName || t?.itemName || "Item Detail" }),
      m && /* @__PURE__ */ e("span", { class: "idv__badge idv__badge--amber", children: "Needs Query" })
    ] }),
    l && /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__spinner" }),
      /* @__PURE__ */ e("p", { children: "Loading..." })
    ] }),
    d && /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: /* @__PURE__ */ e("p", { children: d }) }),
    !l && !d && o && !O && /* @__PURE__ */ e("div", { class: "idv__body", children: /* @__PURE__ */ e(
      Us,
      {
        variant: "full",
        data: o,
        detectionItem: t,
        mdsItem: r,
        onViewSource: B,
        onDismiss: g ? y : void 0,
        dismissing: h,
        assessmentId: n?.assessmentId
      }
    ) }),
    !l && !d && o && O && /* @__PURE__ */ e("div", { class: "idv__split-body", children: [
      /* @__PURE__ */ e("div", { class: "idv__sources", children: [
        /* @__PURE__ */ e("div", { class: "idv__sources-label", children: [
          "Sources (",
          N.length,
          ")"
        ] }),
        N.map((T, L) => {
          const W = at(T), G = T.sourceType || nn(T.displayName, T.evidenceId), ae = T.displayName || sn[G] || (W ? "Orders" : "Document"), X = T.quoteText || T.orderDescription || T.quote || T.snippet || T.text || "", te = T.wordBlocks?.[0]?.p, V = v.ev === T;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `idv__source-card${V ? " idv__source-card--active" : ""}`,
              onClick: () => S({ ev: T, index: L }),
              role: "button",
              children: [
                /* @__PURE__ */ e("div", { class: `idv__source-badge${W ? " idv__source-badge--order" : ""}`, children: ae }),
                X && /* @__PURE__ */ e("div", { class: "idv__source-snippet", children: X }),
                !W && te && /* @__PURE__ */ e("div", { class: "idv__source-page", children: [
                  "Page ",
                  te
                ] })
              ]
            },
            L
          );
        })
      ] }),
      /* @__PURE__ */ e("div", { class: "idv__viewer", children: [
        Z && E && /* @__PURE__ */ e("div", { class: "idv__viewer-loading", children: [
          /* @__PURE__ */ e("div", { class: "pdpm-an__spinner" }),
          /* @__PURE__ */ e("span", { children: "Loading document..." })
        ] }),
        Z && !E && b && /* @__PURE__ */ e(
          an,
          {
            url: b.signedUrl || null,
            wordBlocks: v.ev.wordBlocks || [],
            targetPage: v.ev.wordBlocks?.[0]?.p || 1,
            title: b.title || "Document",
            documentType: b.documentType,
            effectiveDate: b.effectiveDate,
            fileSize: b.fileSize,
            expiresAt: !0,
            openInNewTabUrl: b.signedUrl || null
          }
        ),
        Z && !E && !b && /* @__PURE__ */ e("div", { class: "idv__viewer-loading", children: /* @__PURE__ */ e("span", { children: "Failed to load document" }) }),
        A && /* @__PURE__ */ e("div", { ref: k, class: "idv__admin-viewer" }),
        (q || H) && /* @__PURE__ */ e("div", { ref: K, class: "idv__note-viewer" }),
        M && /* @__PURE__ */ e("div", { class: "idv__note-viewer", children: /* @__PURE__ */ e("div", { class: "super-split__content", children: [
          /* @__PURE__ */ e("div", { class: "super-split__content-header", children: [
            /* @__PURE__ */ e("h3", { class: "super-split__content-title", children: "Administration Record" }),
            /* @__PURE__ */ e("span", { class: "super-split__content-badge", children: "Medication" })
          ] }),
          v.ev.date && /* @__PURE__ */ e("div", { class: "super-split__content-meta", children: v.ev.date }),
          /* @__PURE__ */ e("div", { class: "super-split__content-body", children: /* @__PURE__ */ e("pre", { class: "super-split__note-text", children: v.ev.text || v.ev.quote || v.ev.quoteText || "No details available." }) })
        ] }) })
      ] })
    ] })
  ] });
}
function zo(t) {
  const n = t?.item;
  if (!n) return [];
  if (!!!n.columns)
    return [...n.evidence || [], ...n.queryEvidence || []];
  const a = [], i = /* @__PURE__ */ new Set();
  for (const r of Object.values(n.columns || {}))
    for (const c of [...r?.evidence || [], ...r?.queryEvidence || []]) {
      const o = c.sourceId || c.quote || JSON.stringify(c);
      i.has(o) || (i.add(o), a.push(c));
    }
  return a;
}
function Wo(t) {
  const [n, s] = w([]), [a, i] = w(!1), [r, c] = w(null), [o, l] = w(0), d = j(() => {
    l((u) => u + 1);
  }, []);
  return U(() => {
    if (!t || !window.CertAPI) {
      s([]);
      return;
    }
    let u = !1;
    return i(!0), c(null), (async () => {
      try {
        const m = getOrg()?.org, h = window.getChatFacilityInfo?.() || "";
        if (!m || !h) {
          u || (s([]), i(!1));
          return;
        }
        const _ = await window.CertAPI.fetchByPatient(h, m, t);
        u || s(_ || []);
      } catch {
        u || s([]);
      } finally {
        u || i(!1);
      }
    })(), () => {
      u = !0;
    };
  }, [t, o]), { certs: n, loading: a, error: r, refresh: d };
}
const Qo = ["initial", "day_14_recert", "day_30_recert"], jo = {
  initial: "Initial",
  day_14_recert: "Day 14",
  day_30_recert: "Day 30"
};
function Ko(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function St(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Yo(t) {
  if (!t) return { variant: "empty", label: "—" };
  const n = Ko(t.dueDate), s = n !== null && n < 0;
  return t.status === "signed" ? {
    variant: "signed",
    label: "Signed",
    detail: St(t.signedAt),
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
    detail: St(t.sentAt)
  } : {
    variant: "pending",
    label: "Pending",
    detail: t.dueDate ? `Due ${St(t.dueDate)}` : "",
    showSend: !0
  };
}
function Jo({ type: t, cert: n, onAction: s }) {
  const a = Yo(n);
  return /* @__PURE__ */ e("div", { class: `cert-chain__slot cert-chain__slot--${a.variant}`, children: [
    /* @__PURE__ */ e("div", { class: "cert-chain__slot-header", children: /* @__PURE__ */ e("span", { class: "cert-chain__slot-type", children: jo[t] }) }),
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
function Zo({ certs: t, onAction: n }) {
  const s = {};
  for (const a of t)
    s[a.type] = a;
  return /* @__PURE__ */ e("div", { class: "cert-chain__stay", children: Qo.map((a, i) => /* @__PURE__ */ e("div", { class: "cert-chain__step-wrapper", children: [
    i > 0 && /* @__PURE__ */ e("div", { class: "cert-chain__connector" }),
    /* @__PURE__ */ e(Jo, { type: a, cert: s[a] || null, onAction: n })
  ] }, a)) });
}
function Xo({ certs: t, onAction: n }) {
  const s = J(() => {
    if (!t || t.length === 0) return [];
    const a = {};
    for (const r of t) {
      const c = r.partAStayId || "unknown";
      a[c] || (a[c] = []), a[c].push(r);
    }
    const i = Object.entries(a);
    for (const [, r] of i)
      r.sort((c, o) => (c.sequenceNumber || 0) - (o.sequenceNumber || 0));
    return i.sort((r, c) => {
      const o = Math.max(...r[1].map((d) => d.sequenceNumber || 0));
      return Math.max(...c[1].map((d) => d.sequenceNumber || 0)) - o;
    }), i;
  }, [t]);
  return s.length === 0 ? null : /* @__PURE__ */ e("div", { class: "cert-chain", children: s.map(([a, i]) => /* @__PURE__ */ e(Zo, { certs: i, onAction: n }, a)) });
}
function ec({ patientId: t, collapsed: n, onToggleCollapse: s }) {
  const { certs: a, loading: i, refresh: r } = Wo(t), [c, o] = w(null), [l, d] = w(null), [u, p] = w(null), [m, h] = w({ facilityName: "", orgSlug: "" }), _ = j(async () => {
    if (m.facilityName && m.orgSlug) return m;
    const S = getOrg()?.org || "", b = { facilityName: window.getChatFacilityInfo?.() || "", orgSlug: S };
    return h(b), b;
  }, [m]), f = j(async (v, S) => {
    if (S === "send")
      await _(), o(v);
    else if (S === "skip")
      d(v);
    else if (S === "delay")
      p(v);
    else if (S === "unskip")
      try {
        await window.CertAPI.unskipCert(v.id), window.SuperToast?.success?.("Certification restored"), r();
      } catch (C) {
        console.error("[CertSection] Failed to unskip:", C), window.SuperToast?.error?.("Failed to restore certification");
      }
  }, [_, r]);
  async function g(v) {
    await window.CertAPI.skipCert(l.id, v), window.SuperToast?.success?.("Certification skipped"), r();
  }
  async function y(v) {
    await window.CertAPI.delayCert(u.id, v), window.SuperToast?.success?.("Certification marked as delayed"), r();
  }
  return i ? /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Certifications" }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__card-body", style: "padding: 16px; text-align: center; color: #6b7280; font-size: 13px;", children: "Loading certifications..." })
  ] }) : !a || a.length === 0 ? null : /* @__PURE__ */ e(Y, { children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
        /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Certifications" }),
        /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: a.length }),
        /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] }),
      !n && /* @__PURE__ */ e("div", { class: "pdpm-an__card-body", style: "padding: 8px 12px;", children: /* @__PURE__ */ e(Xo, { certs: a, onAction: f }) })
    ] }),
    /* @__PURE__ */ e(
      Es,
      {
        isOpen: !!c,
        onClose: () => o(null),
        cert: c,
        facilityName: m.facilityName,
        orgSlug: m.orgSlug,
        onSent: r
      }
    ),
    /* @__PURE__ */ e(
      $s,
      {
        isOpen: !!l,
        onClose: () => d(null),
        cert: l,
        onSkipped: g
      }
    ),
    /* @__PURE__ */ e(
      Ls,
      {
        isOpen: !!u,
        onClose: () => p(null),
        cert: u,
        onDelayed: y
      }
    )
  ] });
}
function Js(t) {
  return t ? new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
}
function zt(t) {
  return t && t.replace(/[\s/]+$/, "").trim() || null;
}
function tc({ assessments: t, selectedId: n, onChange: s }) {
  if (!t || t.length <= 1) return null;
  const a = t.map((i) => ({
    value: i.id,
    label: zt(i.type) || zt(i.assessmentType) || "Assessment",
    subtitle: i.ardDate ? `ARD ${Js(i.ardDate)}` : void 0,
    badge: i.currentHipps || i.hipps || void 0
  }));
  return /* @__PURE__ */ e(
    tt,
    {
      options: a,
      value: n,
      onChange: s,
      align: "right",
      ariaLabel: "Select assessment"
    }
  );
}
const Je = {
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
function Me(t, n) {
  const s = n?.replace(/\[.*\]$/, "") || "", a = t?.replace(/\[.*\]$/, "") || "";
  return t && /^[A-Z]{1,2}\d+[A-Z]?(\[.*\])?$/.test(t) ? Je[a] || Je[s] || t : t && a !== s ? t : Je[s] || Je[a] || t || n;
}
function es(t, n) {
  if (!n?.meta?.ntaTiers) return null;
  for (const s of n.meta.ntaTiers)
    if ((s.levels || []).includes(t)) return s.tier;
  return null;
}
function nc(t, n) {
  if (n?.mode === "state_rate") {
    const s = es(t.currentLevel, n), a = es(t.newLevel, n);
    return s != null && a != null ? `NTA: Tier ${s} → Tier ${a}` : "NTA: tier upgrade";
  }
  return `NTA: ${t.currentLevel} → ${t.newLevel}`;
}
function Zs({ impact: t, payment: n, variant: s }) {
  const a = [];
  return t?.nta?.wouldChangeLevel && a.push({ label: "NTA", text: nc(t.nta, n) }), t?.nursing?.wouldChangeGroup && a.push({ label: "Nursing", from: t.nursing.currentPaymentGroup, to: t.nursing.newPaymentGroup }), t?.slp?.wouldChangeGroup && a.push({ label: "SLP", from: t.slp.currentGroup, to: t.slp.newGroup }), t?.ptot?.wouldChangeGroup && a.push({ label: "PT/OT", from: t.ptot.currentGroup, to: t.ptot.newGroup }), a.length === 0 ? null : /* @__PURE__ */ e("div", { class: s === "pending" ? "pdpm-an__impact-chips pdpm-an__impact-chips--pending" : "pdpm-an__impact-chips", children: a.map((r, c) => /* @__PURE__ */ e("span", { class: "pdpm-an__impact-chip", children: [
    /* @__PURE__ */ e("span", { class: "pdpm-an__impact-chip-k", children: r.label }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__impact-chip-v", children: r.text || `${r.from} → ${r.to}` })
  ] }, c)) });
}
function sc({ data: t, onItemClick: n }) {
  const s = t?.enhancedDetections || [], a = t?.payment, i = s.filter(
    (r) => r.wouldChangeHipps && r.solverStatus !== "query_sent" && r.solverStatus !== "awaiting_response" && r.solverStatus !== "dont_code" && r.userDecision?.decision !== "disagree"
  );
  return i.length === 0 ? null : /* @__PURE__ */ e("div", { class: "pdpm-an__opps", children: i.map((r, c) => {
    const o = r.mdsItem?.startsWith("I8000:") ? "I8000" : r.mdsItem;
    return /* @__PURE__ */ e(
      "div",
      {
        class: "pdpm-an__opp-row",
        onClick: () => n && n(r),
        role: "button",
        tabIndex: 0,
        onKeyDown: (l) => {
          (l.key === "Enter" || l.key === " ") && (l.preventDefault(), n?.(r));
        },
        children: [
          /* @__PURE__ */ e("span", { class: "pdpm-an__opp-icon", children: "⚡" }),
          /* @__PURE__ */ e("span", { class: "pdpm-an__opp-code", children: o }),
          /* @__PURE__ */ e("span", { class: "pdpm-an__opp-name", children: Me(r.itemName, r.mdsItem) }),
          /* @__PURE__ */ e(Zs, { impact: r.impact, payment: a }),
          /* @__PURE__ */ e("svg", { class: "pdpm-an__opp-go", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M5 3l4 4-4 4", stroke: "currentColor", "stroke-width": "1.3", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ]
      },
      c
    );
  }) });
}
function ac({ data: t, onItemClick: n, collapsed: s, onToggleCollapse: a }) {
  const r = (t?.enhancedDetections || []).filter(
    (c) => c.solverStatus === "dont_code" && (c.diagnosisPassed === !1 || c.activeStatusPassed === !1) && c.userDecision?.decision !== "disagree"
  );
  return r.length === 0 ? null : /* @__PURE__ */ e("div", { class: "pdpm-an__card pdpm-an__card--doc-risk", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: a, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "⚠" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Documentation Risks" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--amber", children: r.length }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-list", children: r.map((c, o) => {
      const l = c.mdsItem?.startsWith("I8000:") ? "I8000" : c.mdsItem, d = [];
      return c.diagnosisPassed === !1 && d.push("No physician diagnosis found"), c.activeStatusPassed === !1 && d.push("No active treatment order found"), /* @__PURE__ */ e(
        "div",
        {
          class: "pdpm-an__doc-risk-item",
          onClick: () => n && n(c),
          role: "button",
          tabIndex: 0,
          onKeyDown: (u) => {
            (u.key === "Enter" || u.key === " ") && (u.preventDefault(), n && n(c));
          },
          children: [
            /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-top", children: [
              /* @__PURE__ */ e("span", { class: "pdpm-an__driver-section", children: l }),
              /* @__PURE__ */ e("span", { class: "pdpm-an__driver-text", children: Me(c.itemName, c.mdsItem) })
            ] }),
            /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-badges", children: d.map((u, p) => /* @__PURE__ */ e("span", { class: "pdpm-an__doc-risk-badge", children: u }, p)) }),
            c.rationale && /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-rationale", children: c.rationale })
          ]
        },
        o
      );
    }) })
  ] });
}
function ic(t) {
  if (!t) return "not yet sent";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "sent today" : `sent ${n}d ago`;
}
function rc({ data: t, onQueryClick: n, collapsed: s, onToggleCollapse: a }) {
  const i = t?.outstandingQueries || [], r = t?.payment, c = i.filter(
    (o) => o.status === "sent" || o.status === "pending" || o.status === "awaiting_response"
  );
  return c.length === 0 ? null : /* @__PURE__ */ e("div", { class: "pdpm-an__card pdpm-an__card--queries", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: a, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "✉" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Pending Queries" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--pending", children: c.length }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ e("ul", { class: "pdpm-an__query-list", children: c.map((o, l) => {
      const d = o.pdpmImpact?.componentImpacts, u = d ? { slp: d.slp, nta: d.nta, nursing: d.nursing, ptot: d.ptot } : null, p = o.status === "sent" || o.status === "awaiting_response";
      return /* @__PURE__ */ e(
        "li",
        {
          class: "pdpm-an__query-item pdpm-an__query-item--clickable",
          onClick: () => n && n(o),
          role: "button",
          tabIndex: 0,
          children: [
            /* @__PURE__ */ e("div", { class: "pdpm-an__query-top", children: [
              /* @__PURE__ */ e("div", { class: "pdpm-an__query-main", children: [
                o.mdsItem && /* @__PURE__ */ e("span", { class: "pdpm-an__query-code", children: o.mdsItem }),
                /* @__PURE__ */ e("span", { class: "pdpm-an__query-text", children: Me(o.mdsItemName, o.mdsItem) })
              ] }),
              /* @__PURE__ */ e("span", { class: `pdpm-an__query-status-pill${p ? "" : " pdpm-an__query-status-pill--draft"}`, children: p ? ic(o.sentAt) : "draft" })
            ] }),
            u && /* @__PURE__ */ e(Zs, { impact: u, payment: r, variant: "pending" })
          ]
        },
        l
      );
    }) })
  ] });
}
function oc(t) {
  if (!t) return "";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "today" : n === 1 ? "yesterday" : `${n}d ago`;
}
function cc({ data: t, onQueryClick: n, collapsed: s, onToggleCollapse: a }) {
  const r = (t?.recentlySigned || t?.signedQueries || t?.completedQueries || []).filter(
    (o) => o.status === "signed" || o.status === "completed" || o.status === "resolved" || o.signedAt
  );
  if (r.length === 0) return null;
  const c = r.filter((o) => o.mdsItemCoded === !1).length;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__card pdpm-an__card--signed", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: a, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "✓" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Recently Signed" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: r.length }),
      c > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--coding", children: [
        c,
        " need coding"
      ] }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ e("ul", { class: "pdpm-an__query-list", children: r.map((o, l) => {
      const d = o.mdsItemCoded === !1, u = o.mdsItemCoded === !0, p = oc(o.signedAt || o.completedAt);
      return /* @__PURE__ */ e(
        "li",
        {
          class: `pdpm-an__signed-item${d ? " pdpm-an__signed-item--needs-coding" : ""} pdpm-an__signed-item--clickable`,
          onClick: () => n && n(o),
          role: "button",
          tabIndex: 0,
          children: [
            o.mdsItem && /* @__PURE__ */ e("span", { class: "pdpm-an__query-code pdpm-an__query-code--signed", children: o.mdsItem }),
            /* @__PURE__ */ e("span", { class: "pdpm-an__query-text", children: Me(o.mdsItemName, o.mdsItem) }),
            /* @__PURE__ */ e("div", { class: "pdpm-an__signed-badges", children: [
              d && /* @__PURE__ */ e("span", { class: "pdpm-an__signed-badge pdpm-an__signed-badge--coding", children: "Needs Coding" }),
              u && /* @__PURE__ */ e("span", { class: "pdpm-an__signed-badge pdpm-an__signed-badge--coded", children: "Coded" }),
              p && /* @__PURE__ */ e("span", { class: "pdpm-an__query-date", children: p })
            ] })
          ]
        },
        l
      );
    }) })
  ] });
}
function dc({ nta: t, potentialLevel: n, payment: s }) {
  if (!t) return null;
  if (s?.mode === "state_rate") {
    if (t.currentPoints == null || t.pointsNeeded == null) return null;
    const h = s.current?.ntaTier?.tier, _ = h != null ? h - 1 : null, f = _ != null && _ >= 1 ? `Tier ${_}` : null;
    if (!f && t.pointsNeeded <= 0) return null;
    const g = t.currentPoints + t.pointsNeeded, y = g > 0 ? Math.round(t.currentPoints / g * 100) : 0;
    return /* @__PURE__ */ e("div", { class: "pdpm-an__nta-inline", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__nta-sbar", children: /* @__PURE__ */ e("div", { class: "pdpm-an__nta-sfill", style: { width: `${y}%` } }) }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__nta-slbl", children: [
        t.pointsNeeded === 1 ? "1 pt" : `${t.pointsNeeded} pts`,
        " away",
        f ? ` from ${f}` : ""
      ] })
    ] });
  }
  const a = t.levels;
  if (!a || a.length < 2 || !t.currentLevel) return null;
  const i = a.findIndex((h) => h.code === t.currentLevel);
  if (i === -1) return null;
  const r = n || t.nextLevel, c = r ? a.findIndex((h) => h.code === r) : -1;
  if (c <= i) return null;
  const o = (h) => h / (a.length - 1) * 100, l = Math.max(o(i), 4), u = o(c) - l, p = t.pointsNeeded, m = t.nextLevel;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__nta-track", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__nta-bar", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__nta-bar-cur", style: { width: `${l}%` } }),
      /* @__PURE__ */ e("div", { class: "pdpm-an__nta-bar-gain", style: { left: `${l}%`, width: `${u}%` } })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__nta-lvls", children: a.map((h, _) => /* @__PURE__ */ e("span", { class: `pdpm-an__nta-lvl${_ === i ? " pdpm-an__nta-lvl--cur" : ""}${_ === c ? " pdpm-an__nta-lvl--tgt" : ""}`, children: h.code }, h.code)) }),
    p != null && p > 0 && m && /* @__PURE__ */ e("span", { class: "pdpm-an__nta-away", children: [
      p === 1 ? "1 pt" : `${p} pts`,
      " ",
      "→",
      " ",
      m
    ] })
  ] });
}
function lc({ gap: t }) {
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
function pc(t) {
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
function uc({ data: t, payment: n, onItemClick: s, collapsed: a, onToggleCollapse: i }) {
  const [r, c] = w(null), o = t?.gapAnalysis || {}, l = t?.hippsDecoded || {}, d = t?.potentialHippsDecoded || {}, u = t?.enhancedDetections || [], p = pc(t?.calculation), m = [
    {
      label: "PT/OT",
      key: "ptot",
      currentCode: l.ptot?.code,
      potential: d.ptot?.code,
      name: l.ptot?.name,
      detail: o.ptot?.clinicalCategoryName,
      items: o.ptot?.detectionsToHelp || [],
      captured: p.ptot
    },
    {
      label: "SLP",
      key: "slp",
      currentCode: l.slp?.code,
      potential: d.slp?.code,
      name: l.slp?.name,
      detail: o.slp?.clinicalCategoryName,
      items: o.slp?.detectionsToHelp || [],
      captured: p.slp
    },
    {
      label: "Nursing",
      key: "nursing",
      currentCode: l.nursing?.code,
      potential: d.nursing?.code,
      name: l.nursing?.name,
      detail: o.nursing?.qualifyingSubcategoryName,
      items: o.nursing?.detectionsToHelp || [],
      captured: p.nursing
    },
    {
      label: "NTA",
      key: "nta",
      currentCode: n?.mode === "state_rate" && n.current?.ntaTier?.tier != null ? `Tier ${n.current.ntaTier.tier}` : l.nta?.code,
      potential: n?.mode === "state_rate" ? n.potential?.ntaTier?.tier != null && n.potential.ntaTier.tier !== n.current?.ntaTier?.tier ? `Tier ${n.potential.ntaTier.tier}` : null : d.nta?.code,
      name: n?.mode === "state_rate" && n.current?.ntaTier?.label || l.nta?.name,
      detail: n?.mode === "state_rate" && n.current?.ntaTier?.pointRange || o.nta?.clinicalCategoryName,
      items: o.nta?.detectionsToHelp || [],
      captured: p.nta,
      ntaProgress: o.nta
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
      const f = _.potential && _.currentCode && _.potential !== _.currentCode, g = _.items.length > 0, y = _.captured.length > 0, v = r === _.key, S = () => {
        (g || y || _.detail) && c(v ? null : _.key);
      }, C = g || y || _.detail;
      return /* @__PURE__ */ e(
        "div",
        {
          class: `pdpm-an__comp-row${f ? " pdpm-an__comp-row--improved" : ""}${v ? " pdpm-an__comp-row--expanded" : ""}`,
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                class: `pdpm-an__comp-header${C ? " pdpm-an__comp-header--clickable" : ""}`,
                onClick: C ? S : void 0,
                role: C ? "button" : void 0,
                tabIndex: C ? 0 : void 0,
                onKeyDown: C ? (b) => {
                  (b.key === "Enter" || b.key === " ") && (b.preventDefault(), S());
                } : void 0,
                children: [
                  /* @__PURE__ */ e("span", { class: "pdpm-an__comp-label", children: _.label }),
                  /* @__PURE__ */ e("span", { class: "pdpm-an__comp-name", children: _.name || "—" }),
                  _.currentCode && /* @__PURE__ */ e("span", { class: "pdpm-an__comp-code", children: _.currentCode }),
                  f && /* @__PURE__ */ e("span", { class: "pdpm-an__comp-change", children: [
                    "→",
                    " ",
                    _.potential
                  ] }),
                  C && /* @__PURE__ */ e("svg", { class: `pdpm-an__comp-chevron${v ? " pdpm-an__comp-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M4 5.5L7 8.5L10 5.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                ]
              }
            ),
            _.ntaProgress && /* @__PURE__ */ e(dc, { nta: _.ntaProgress, potentialLevel: _.potential, payment: n }),
            v && /* @__PURE__ */ e("div", { class: "pdpm-an__comp-detail", children: [
              _.detail && /* @__PURE__ */ e("div", { class: "pdpm-an__comp-qualifier", children: _.detail }),
              _.key === "slp" && /* @__PURE__ */ e(lc, { gap: o }),
              g && /* @__PURE__ */ e(Y, { children: [
                y && /* @__PURE__ */ e("div", { class: "pdpm-an__captured-label pdpm-an__captured-label--opps", children: "Opportunities" }),
                /* @__PURE__ */ e("div", { class: "pdpm-an__ci-list", children: _.items.map((b, P) => {
                  const E = b.mdsItem?.startsWith("I8000:") ? "I8000" : b.mdsItem, x = (k) => {
                    if (k.stopPropagation(), !s) return;
                    const D = u.find((N) => N.mdsItem === b.mdsItem);
                    D && s(D);
                  };
                  return /* @__PURE__ */ e(
                    "div",
                    {
                      class: "pdpm-an__ci-row",
                      onClick: x,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (k) => {
                        (k.key === "Enter" || k.key === " ") && (k.preventDefault(), x(k));
                      },
                      children: [
                        /* @__PURE__ */ e("span", { class: "pdpm-an__ci-code", children: E }),
                        /* @__PURE__ */ e("div", { class: "pdpm-an__ci-body", children: [
                          /* @__PURE__ */ e("span", { class: "pdpm-an__ci-name", children: Me(b.itemName, b.mdsItem) }),
                          b.helpText && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-help", children: b.helpText })
                        ] }),
                        b.pointsAdded != null && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-impact pdpm-an__ci-impact--pts", children: [
                          "+",
                          b.pointsAdded,
                          " pts"
                        ] })
                      ]
                    },
                    P
                  );
                }) })
              ] }),
              y && /* @__PURE__ */ e("div", { class: "pdpm-an__captured", children: [
                (g || _.detail) && /* @__PURE__ */ e("div", { class: "pdpm-an__captured-label", children: "Currently captured" }),
                /* @__PURE__ */ e("div", { class: "pdpm-an__ci-list", children: _.captured.map((b, P) => {
                  const E = b.mdsItem?.startsWith("I8000:") ? "I8000" : b.mdsItem, x = (k) => {
                    if (k.stopPropagation(), !s) return;
                    const D = u.find((N) => N.mdsItem === b.mdsItem);
                    D && s(D);
                  };
                  return /* @__PURE__ */ e(
                    "div",
                    {
                      class: "pdpm-an__ci-row pdpm-an__ci-row--captured",
                      onClick: x,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (k) => {
                        (k.key === "Enter" || k.key === " ") && (k.preventDefault(), x(k));
                      },
                      children: [
                        /* @__PURE__ */ e("span", { class: "pdpm-an__ci-check", children: "✓" }),
                        /* @__PURE__ */ e("span", { class: "pdpm-an__ci-code", children: E }),
                        /* @__PURE__ */ e("div", { class: "pdpm-an__ci-body", children: [
                          /* @__PURE__ */ e("span", { class: "pdpm-an__ci-name", children: Me(b.itemName, b.mdsItem) }),
                          b.helpText && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-help", children: b.helpText })
                        ] }),
                        b.pointsAdded != null && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-impact pdpm-an__ci-impact--pts", children: [
                          "+",
                          b.pointsAdded,
                          " pts"
                        ] })
                      ]
                    },
                    `cap-${P}`
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
const mc = {
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
function Ze({ value: t, max: n, label: s, severity: a, impact: i, extra: r }) {
  const c = mc[a] || "#9ca3af", o = t != null && n > 0 ? Math.round(t / n * 100) : 0, l = 20, d = 2 * Math.PI * l, u = d - o / 100 * d;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__sc", title: i || "", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__sc-ring", children: [
      /* @__PURE__ */ e("svg", { width: "52", height: "52", viewBox: "0 0 52 52", children: [
        /* @__PURE__ */ e("circle", { cx: "26", cy: "26", r: l, fill: "none", stroke: "#f1f5f9", "stroke-width": "4" }),
        t != null && /* @__PURE__ */ e(
          "circle",
          {
            cx: "26",
            cy: "26",
            r: l,
            fill: "none",
            stroke: c,
            "stroke-width": "4",
            "stroke-dasharray": d,
            "stroke-dashoffset": u,
            "stroke-linecap": "round",
            transform: "rotate(-90 26 26)"
          }
        )
      ] }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__sc-val", children: t ?? "—" })
    ] }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__sc-label", children: s }),
    a && /* @__PURE__ */ e("span", { class: "pdpm-an__sc-severity", style: { color: c }, children: a }),
    r && /* @__PURE__ */ e("span", { class: "pdpm-an__sc-extra", children: r })
  ] });
}
const hc = [
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
function _c({ breakdown: t }) {
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
      hc.map((i) => {
        const r = a[i.key];
        return /* @__PURE__ */ e(Y, { children: [
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
function gc({ data: t, collapsed: n, onToggleCollapse: s }) {
  const a = t?.sectionProgress;
  if (!a || !a.total) return null;
  const { sections: i = {} } = a, r = Object.entries(i);
  let c = 0, o = 0, l = 0;
  for (const [, p] of r)
    p === "Complete" || p === "Completed" || p === "Locked" ? c++ : p === "In Progress" ? o++ : l++;
  const d = r.length || a.total || 0, u = d > 0 ? Math.round(c / d * 100) : 0;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "📋" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "MDS Sections" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: [
        u,
        "%"
      ] }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__sp-body", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__sp-bar-row", children: [
        /* @__PURE__ */ e("div", { class: "pdpm-an__sp-bar", children: /* @__PURE__ */ e("div", { class: "pdpm-an__sp-fill", style: { width: `${u}%` } }) }),
        /* @__PURE__ */ e("div", { class: "pdpm-an__sp-counts", children: [
          c > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--done", children: [
            c,
            " done"
          ] }),
          o > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--wip", children: [
            o,
            " in progress"
          ] }),
          l > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--todo", children: [
            l,
            " not started"
          ] })
        ] })
      ] }),
      r.length > 0 && /* @__PURE__ */ e("div", { class: "pdpm-an__sp-tags", children: r.map(([p, m]) => {
        const h = m === "Complete" || m === "Completed", _ = m === "Locked";
        return /* @__PURE__ */ e("span", { class: `pdpm-an__sp-tag ${h || _ ? "pdpm-an__sp-tag--done" : m === "In Progress" ? "pdpm-an__sp-tag--wip" : "pdpm-an__sp-tag--todo"}`, title: m, children: [
          (h || _) && /* @__PURE__ */ e("span", { class: "pdpm-an__sp-tag-check", children: "✓" }),
          p
        ] }, p);
      }) })
    ] })
  ] });
}
function fc({ data: t, collapsed: n, onToggleCollapse: s }) {
  const [a, i] = w(!1), r = t?.scores;
  if (!r) return null;
  const c = r.bims, o = r.phq9, l = r.nursingFunctionalScore, d = r.ptotFunctionalScore, u = r.functionalScoreBreakdown;
  if (!c && !o && !l && !d) return null;
  const p = o?.score != null && o.score !== 99 ? o.score : o?.staffAssessmentScore, m = (o?.score == null || o?.score === 99) && o?.staffAssessmentScore != null ? "(Staff assessment)" : null, h = [];
  return c?.meetsImpairmentThreshold && h.push({ color: "#d97706", text: c.pdpmImpact || "Cognitive impairment detected — affects SLP and Nursing classification" }), o?.meetsDepressionThreshold && h.push({ color: "#ea580c", text: o.pdpmImpact || "Depression threshold met — upgrades Nursing payment group" }), l?.meetsBSCPThreshold && h.push({ color: "#6366f1", text: l.bscpNote || "NFS ≥ 11 — BSCP category eligible" }), /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "🧠" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Clinical Scores" }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__scores-body", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__scores-row", children: [
        c && /* @__PURE__ */ e(Ze, { value: c.score, max: 15, label: "BIMS", severity: c.severity, impact: c.pdpmImpact }),
        o && /* @__PURE__ */ e(Ze, { value: p, max: 27, label: "PHQ-9", severity: o.severity, impact: o.pdpmImpact, extra: m }),
        l && /* @__PURE__ */ e(Ze, { value: l.score, max: 16, label: "NFS", severity: l.severity, impact: l.pdpmImpact }),
        d && /* @__PURE__ */ e(Ze, { value: d.score, max: 24, label: "PT/OT Func", severity: d.severity, impact: d.pdpmImpact })
      ] }),
      h.length > 0 && /* @__PURE__ */ e("div", { class: "pdpm-an__thresholds", children: h.map((_, f) => /* @__PURE__ */ e("div", { class: "pdpm-an__threshold", style: { borderLeftColor: _.color }, children: _.text }, f)) }),
      u && /* @__PURE__ */ e("div", { class: "pdpm-an__gg-toggle-wrap", children: [
        /* @__PURE__ */ e("button", { class: "pdpm-an__gg-toggle", onClick: () => i(!a), children: [
          a ? "Hide" : "Show",
          " GG Item Breakdown",
          /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${a ? " pdpm-an__card-chevron--open" : ""}`, width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ] }),
        a && /* @__PURE__ */ e(_c, { breakdown: u })
      ] })
    ] })
  ] });
}
function yc({ data: t }) {
  if (!t) return null;
  const n = t.summary || {}, s = t.calculation || {}, a = t.payment, i = n.currentHipps || s.hippsCode || "?????", r = n.potentialHippsIfCoded, c = a?.mode === "state_rate", o = (P) => P ? P.replace(/_/g, "") : null, l = c && o(a.current?.groupCode) || i, d = c ? o(a.potential?.groupCode) ?? l : r, u = c ? d && d !== l : n.hasImprovements && r && r !== i, p = ni(a), m = t.compliance?.summary || {}, h = m.passed ?? 0, _ = m.notApplicable ?? 0, f = (m.total ?? 0) - _, g = t.sectionProgress;
  let y = 0, v = 0;
  if (g?.sections)
    for (const P of Object.values(g.sections))
      v++, (P === "Complete" || P === "Completed" || P === "Locked") && y++;
  v || (v = g?.total ?? 0);
  const S = v > 0 ? Math.round(y / v * 100) : 0, C = (t.enhancedDetections || []).filter(
    (P) => P.wouldChangeHipps && P.solverStatus !== "query_sent" && P.solverStatus !== "awaiting_response" && P.solverStatus !== "dont_code" && P.userDecision?.decision !== "disagree"
  ).length, b = p && p.delta && p.delta !== "+$0/day" && p.delta !== "+0";
  return /* @__PURE__ */ e("div", { class: "pdpm-an__summary", children: [
    b && /* @__PURE__ */ e("div", { class: "pdpm-an__summary-delta", children: p.delta }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__summary-codes", children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__summary-code", children: l }),
      u && /* @__PURE__ */ e(Y, { children: [
        /* @__PURE__ */ e("span", { class: "pdpm-an__summary-arrow", children: "→" }),
        /* @__PURE__ */ e("span", { class: "pdpm-an__summary-code pdpm-an__summary-code--green", children: d })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__summary-stats", children: [
      v > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__summary-stat", children: [
        S,
        "% MDS"
      ] }),
      f > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__summary-stat", children: [
        h,
        "/",
        f,
        " Compliance"
      ] }),
      C > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__summary-stat pdpm-an__summary-stat--green", children: [
        C,
        " Opp",
        C !== 1 ? "s" : ""
      ] })
    ] })
  ] });
}
function vc() {
  return /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__spinner" }),
    /* @__PURE__ */ e("p", { children: "Loading assessment data…" })
  ] });
}
function wc({ message: t, onRetry: n }) {
  return /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__state-icon", children: "⚠" }),
    /* @__PURE__ */ e("p", { children: t }),
    /* @__PURE__ */ e("button", { class: "pdpm-an__retry-btn", onClick: n, children: "Retry" })
  ] });
}
function bc({ assessmentData: t, onItemClick: n, onQueryClick: s, patientId: a }) {
  const [i, r] = w({}), c = (o) => r((l) => ({ ...l, [o]: !l[o] }));
  return t ? /* @__PURE__ */ e("div", { class: "pdpm-an__content", children: [
    /* @__PURE__ */ e(yc, { data: t }),
    /* @__PURE__ */ e(sc, { data: t, onItemClick: n }),
    /* @__PURE__ */ e(rc, { data: t, onQueryClick: s, collapsed: i.queries, onToggleCollapse: () => c("queries") }),
    /* @__PURE__ */ e(cc, { data: t, onQueryClick: s, collapsed: i.signed, onToggleCollapse: () => c("signed") }),
    /* @__PURE__ */ e(uc, { data: t, payment: t?.payment, onItemClick: n, collapsed: i.components, onToggleCollapse: () => c("components") }),
    /* @__PURE__ */ e(gc, { data: t, collapsed: i.sections, onToggleCollapse: () => c("sections") }),
    /* @__PURE__ */ e(ac, { data: t, onItemClick: n, collapsed: i.docRisks, onToggleCollapse: () => c("docRisks") }),
    /* @__PURE__ */ e(fc, { data: t, collapsed: i.scores, onToggleCollapse: () => c("scores") }),
    /* @__PURE__ */ e(Uo, { data: t, collapsed: i.compliance, onToggleCollapse: () => c("compliance") }),
    a && /* @__PURE__ */ e(ec, { patientId: a, collapsed: i.certs, onToggleCollapse: () => c("certs") })
  ] }) : /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: /* @__PURE__ */ e("p", { children: "No assessment data available." }) });
}
function Ic({ mode: t, onToggle: n }) {
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
function Dc({ context: t, onClose: n, initialMode: s = "modal" }) {
  const [a, i] = w(null), [r, c] = w(null), [o, l] = w(s), [d, u] = w(!1), {
    assessments: p,
    detail: m,
    patientName: h,
    loading: _,
    detailLoading: f,
    error: g,
    retry: y,
    retryDetail: v
  } = Lo(t, a), S = p?.[0]?.id;
  t?.scope === "patient" && S && !a && i(S);
  const C = o === "panel";
  function b(q) {
    C || q.target === q.currentTarget && n();
  }
  function P() {
    n(), typeof MDSCommandCenterLauncher < "u" && MDSCommandCenterLauncher.open();
  }
  function E() {
    l((q) => q === "modal" ? "panel" : "modal");
  }
  const x = h || t?.patientName || "", k = m || null, D = p.find((q) => q.id === a), N = zt(
    k?.assessmentType || k?.type || D?.type
  ) || "", O = k?.ardDate || D?.ardDate ? Js(k?.ardDate || D?.ardDate) : "", M = _ || f, A = C ? "pdpm-an__panel-backdrop" : "pdpm-an__overlay", $ = (C ? "pdpm-an__panel" : "pdpm-an__modal") + (d ? " pdpm-an--split" : "");
  return /* @__PURE__ */ e("div", { class: A, onClick: b, children: /* @__PURE__ */ e("div", { class: $, role: "dialog", "aria-modal": C ? "false" : "true", "aria-label": "PDPM Analyzer", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__header", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__header-left", children: [
        /* @__PURE__ */ e("button", { class: "pdpm-an__back-btn", onClick: P, children: [
          "←",
          " Command Center"
        ] }),
        /* @__PURE__ */ e("div", { class: "pdpm-an__patient-info", children: [
          x && /* @__PURE__ */ e("span", { class: "pdpm-an__patient-name", children: x }),
          N && /* @__PURE__ */ e("span", { class: "pdpm-an__assessment-label", children: N }),
          O && /* @__PURE__ */ e("span", { class: "pdpm-an__ard-date", children: [
            "ARD ",
            O
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "pdpm-an__header-right", children: [
        /* @__PURE__ */ e(
          tc,
          {
            assessments: p,
            selectedId: a,
            onChange: (q) => {
              i(q), c(null);
            }
          }
        ),
        /* @__PURE__ */ e(Ic, { mode: o, onToggle: E }),
        /* @__PURE__ */ e("button", { class: "pdpm-an__close-btn", onClick: n, "aria-label": "Close", children: "✕" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__body", children: [
      M && /* @__PURE__ */ e(vc, {}),
      !M && g && /* @__PURE__ */ e(wc, { message: g, onRetry: m ? v : y }),
      !M && !g && (r ? /* @__PURE__ */ e(
        Ys,
        {
          item: r.item,
          context: { ...t, assessmentId: a || t?.assessmentId, patientName: x },
          onBack: () => {
            c(null), u(!1);
          },
          onSplitChange: u,
          onDismiss: () => {
            c(null), u(!1);
          }
        }
      ) : /* @__PURE__ */ e(
        bc,
        {
          assessmentData: k,
          patientId: t?.patientId,
          onItemClick: (q) => c({ type: "detection", item: q }),
          onQueryClick: (q) => {
            const H = {
              ...q,
              patientName: q.patientName || x,
              locationName: q.locationName || t?.facilityName || ""
            };
            window.QueryDetailModal?.show(H, null, { showPdfButton: q.hasPdf ?? !1 });
          }
        }
      ))
    ] })
  ] }) });
}
function Cc({ queryData: t, onClose: n }) {
  const [s, a] = w(1), [i, r] = w(!0), [c, o] = w(""), [l, d] = w([]), [u, p] = w(""), [m, h] = w([]), [_, f] = w(null), [g, y] = w(""), [v, S] = w(!1), [C, b] = w(!1), [P, E] = w(null), x = ne(null), k = t?.mdsItem || "", D = t?.description || t?.aiAnswer?.itemName || "Unknown";
  U(() => {
    (async () => {
      try {
        const M = await window.getCurrentParams?.() || {
          facilityName: "SUNNY MEADOWS DEMO FACILITY",
          orgSlug: "demo-org",
          assessmentId: "4860265"
        };
        M.patientName = window.getPatientNameFromPage?.() || "Doe, Jane", M.patientId = window.getChatPatientId?.() || "2657226", E(M);
        const A = await window.QueryAPI?.fetchPractitioners?.(M.facilityName, M.orgSlug) || [];
        h(A);
        const $ = await window.QueryAPI?.generateNote?.(k, t?.aiAnswer || t) || {};
        o($.note || `Please review the clinical evidence for potential ${D}. See supporting documentation below.`), d($.icd10Options || []), p($.preferredIcd10?.code || $.icd10Options?.[0]?.code || "");
      } catch (M) {
        console.error("[DemoQueryModal] Load failed:", M);
      } finally {
        r(!1);
      }
    })();
  }, []);
  const N = async () => {
    if (_) {
      S(!0);
      try {
        const { query: M } = await window.QueryAPI.createQuery({
          patientId: P?.patientId,
          facilityName: P?.facilityName,
          orgSlug: P?.orgSlug,
          mdsAssessmentId: P?.assessmentId,
          mdsItem: k,
          mdsItemName: D,
          aiGeneratedNote: c
        });
        await window.QueryAPI.sendQuery(M.id, [_.id], c), b(!0), setTimeout(() => {
          n(), window.SuperToast?.success?.("Query sent successfully");
        }, 1200);
      } catch (M) {
        console.error("[DemoQueryModal] Send failed:", M), window.SuperToast?.error?.(`Failed to send: ${M.message}`), S(!1);
      }
    }
  }, O = m.filter((M) => g ? (M.name || `${M.firstName} ${M.lastName}`).toLowerCase().includes(g.toLowerCase()) : !0);
  return C ? /* @__PURE__ */ e("div", { class: "dqm__backdrop", ref: x, children: /* @__PURE__ */ e("div", { class: "dqm__modal dqm__modal--success", children: /* @__PURE__ */ e("div", { class: "dqm__success", children: [
    /* @__PURE__ */ e("div", { class: "dqm__success-icon", children: "✓" }),
    /* @__PURE__ */ e("div", { class: "dqm__success-text", children: "Query Sent!" }),
    /* @__PURE__ */ e("div", { class: "dqm__success-sub", children: [
      "Sent to ",
      _?.name || `${_?.firstName} ${_?.lastName}`
    ] })
  ] }) }) }) : /* @__PURE__ */ e("div", { class: "dqm__backdrop", ref: x, onClick: (M) => {
    M.target === x.current && n();
  }, children: /* @__PURE__ */ e("div", { class: "dqm__modal", onClick: (M) => M.stopPropagation(), children: [
    /* @__PURE__ */ e("div", { class: "dqm__header", children: [
      /* @__PURE__ */ e("div", { class: "dqm__header-left", children: [
        /* @__PURE__ */ e("span", { class: "dqm__header-icon", children: "?" }),
        /* @__PURE__ */ e("span", { class: "dqm__header-title", children: "Send Diagnosis Query" }),
        k && /* @__PURE__ */ e("span", { class: "dqm__header-badge", children: k })
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
            /* @__PURE__ */ e("span", { class: "dqm__patient-name", children: P?.patientName || "Patient" }),
            /* @__PURE__ */ e("span", { class: "dqm__facility", children: P?.facilityName || "" })
          ] }),
          /* @__PURE__ */ e("div", { class: "dqm__diagnosis-row", children: [
            /* @__PURE__ */ e("span", { class: "dqm__diag-code", children: k }),
            /* @__PURE__ */ e("span", { class: "dqm__diag-name", children: D })
          ] })
        ] }),
        l.length > 0 && /* @__PURE__ */ e("div", { class: "dqm__field", children: [
          /* @__PURE__ */ e("label", { class: "dqm__label", children: "ICD-10 Code" }),
          /* @__PURE__ */ e("select", { class: "dqm__select", value: u, onChange: (M) => p(M.target.value), children: l.map((M) => /* @__PURE__ */ e("option", { value: M.code, children: [
            M.code,
            M.description ? ` — ${M.description}` : ""
          ] }, M.code)) })
        ] }),
        /* @__PURE__ */ e("div", { class: "dqm__field", children: [
          /* @__PURE__ */ e("label", { class: "dqm__label", children: "Note for Physician" }),
          /* @__PURE__ */ e(
            "textarea",
            {
              class: "dqm__textarea",
              rows: "5",
              value: c,
              onInput: (M) => o(M.target.value),
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
            /* @__PURE__ */ e("span", { class: "dqm__patient-name", children: P?.patientName || "Patient" }),
            /* @__PURE__ */ e("span", { class: "dqm__facility", children: P?.facilityName || "" })
          ] }),
          /* @__PURE__ */ e("div", { class: "dqm__diagnosis-row", children: [
            /* @__PURE__ */ e("span", { class: "dqm__diag-code", children: k }),
            /* @__PURE__ */ e("span", { class: "dqm__diag-name", children: D })
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
              value: g,
              onInput: (M) => y(M.target.value)
            }
          ),
          /* @__PURE__ */ e("div", { class: "dqm__pract-list", children: O.map((M) => {
            const A = M.name || `${M.firstName} ${M.lastName}`, $ = _?.id === M.id;
            return /* @__PURE__ */ e(
              "div",
              {
                class: `dqm__pract-item ${$ ? "dqm__pract-item--selected" : ""}`,
                onClick: () => f(M),
                children: [
                  /* @__PURE__ */ e("div", { class: "dqm__pract-avatar", children: (M.firstName?.[0] || A[0]).toUpperCase() }),
                  /* @__PURE__ */ e("div", { class: "dqm__pract-info", children: [
                    /* @__PURE__ */ e("div", { class: "dqm__pract-name", children: A }),
                    M.title && /* @__PURE__ */ e("div", { class: "dqm__pract-title", children: M.title })
                  ] }),
                  $ && /* @__PURE__ */ e("span", { class: "dqm__pract-check", children: "✓" })
                ]
              },
              M.id
            );
          }) }),
          /* @__PURE__ */ e("div", { class: "dqm__hint", children: "They will be notified via SMS" })
        ] })
      ] })
    ) }),
    /* @__PURE__ */ e("div", { class: "dqm__footer", children: s === 1 ? /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e("button", { class: "dqm__btn dqm__btn--secondary", onClick: n, type: "button", children: "Cancel" }),
      /* @__PURE__ */ e("button", { class: "dqm__btn dqm__btn--primary", onClick: () => a(2), disabled: i, type: "button", children: "Next" })
    ] }) : /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e("button", { class: "dqm__btn dqm__btn--secondary", onClick: () => a(1), disabled: v, type: "button", children: "Back" }),
      /* @__PURE__ */ e("button", { class: "dqm__btn dqm__btn--primary", onClick: N, disabled: !_ || v, type: "button", children: v ? "Sending..." : "Send Query" })
    ] }) })
  ] }) });
}
const ts = "SUNNY MEADOWS DEMO FACILITY", kc = "demo-org", Nc = {
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
function Sc({ toast: t, onDismiss: n }) {
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
        bottom: "80px",
        left: "24px",
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
function xc() {
  const [t, n] = w(null), [s, a] = w(null), [i, r] = w(null), [c, o] = w(null), [l, d] = w(null), u = ne(null), p = ne([]);
  U(() => {
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
      "#super-chat-button",
      ".super-chat-fab",
      "#super-chat-panel",
      ".super-chat-panel",
      "#notesModal",
      ".super-modal"
    ].forEach((y) => {
      document.querySelectorAll(y).forEach((v) => {
        v.style.display = "none";
      });
    });
  }, []), U(() => {
    function g(y) {
      const v = y.detail?.code;
      v && (n("itemPopover"), a({
        mdsItem: v,
        categoryKey: v,
        itemName: Pc(v)
      }));
    }
    return window.addEventListener("demo:badge-click", g), () => window.removeEventListener("demo:badge-click", g);
  }, []), U(() => {
    document.querySelectorAll(".super-badge").forEach((y) => y.remove());
    const g = [];
    for (const [y, v] of Object.entries(Nc)) {
      const S = document.getElementById(`${y}_wrapper`);
      if (!S) continue;
      const C = S.querySelector(".question_label");
      if (!C || C.querySelector(".super-badge")) continue;
      const b = document.createElement("span");
      b.className = `super-badge super-badge--${v.status}`, b.textContent = v.label, b.setAttribute("data-mds-item", y), b.style.cssText = `
        display: inline-flex; align-items: center; gap: 4px;
        padding: 3px 8px; border-radius: 4px; font-size: 11px;
        font-weight: 600; cursor: pointer; margin-left: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        vertical-align: middle;
      `, v.status === "match" ? (b.style.background = "#dcfce7", b.style.color = "#166534", b.style.border = "1px solid #86efac") : v.status === "mismatch" ? (b.style.background = "#fee2e2", b.style.color = "#991b1b", b.style.border = "1px solid #fca5a5") : v.status === "review" && (b.style.background = "#fef3c7", b.style.color = "#92400e", b.style.border = "1px solid #fcd34d"), b.addEventListener("click", (E) => {
        E.stopPropagation(), E.preventDefault(), window.dispatchEvent(new CustomEvent("demo:badge-click", { detail: { code: y } }));
      }), b.addEventListener("mouseenter", () => {
        b.style.transform = "translateY(-1px)", b.style.boxShadow = "0 2px 6px rgba(0,0,0,0.12)";
      }), b.addEventListener("mouseleave", () => {
        b.style.transform = "", b.style.boxShadow = "";
      });
      const P = C.querySelector(":scope > b");
      P ? P.appendChild(b) : C.appendChild(b), g.push(b);
    }
    return p.current = g, console.log(`[PCCDemoApp] Injected ${g.length} Super badges into PCC form`), () => {
      g.forEach((y) => y.remove());
    };
  }, []), U(() => {
    function g(y) {
      const v = y.detail;
      r({
        scope: v?.scope || "mds",
        assessmentId: v?.assessmentId || "4860265",
        facilityName: ts
      }), n("pdpmMds");
    }
    return window.addEventListener("demo:open-pdpm", g), () => window.removeEventListener("demo:open-pdpm", g);
  }, []), U(() => {
    function g(y) {
      const { type: v, message: S } = y.detail || {};
      o({ type: v || "info", message: S || "" }), clearTimeout(u.current), u.current = setTimeout(() => o(null), 3e3);
    }
    return window.addEventListener("demo:toast", g), () => {
      window.removeEventListener("demo:toast", g), clearTimeout(u.current);
    };
  }, []), U(() => {
    window.QuerySendModal = {
      show(g) {
        g && !g.aiAnswer && (g.keyFindings || g.evidence || g.rationale || g.status) && (g = { mdsItem: g.mdsItem, description: g.description, aiAnswer: g }), d(g);
      }
    };
  }, []);
  const m = j(() => {
    n(null), a(null), r(null);
  }, []), h = j((g) => {
    g?.hide || n(null);
  }, []), _ = j(() => {
    n(null), a(null);
  }, []), f = j(() => {
    n("commandCenter");
  }, []);
  return /* @__PURE__ */ e(Y, { children: [
    t === "commandCenter" && /* @__PURE__ */ e(
      $o,
      {
        facilityName: ts,
        orgSlug: kc,
        onClose: h
      }
    ),
    t === "pdpmMds" && i && /* @__PURE__ */ e("div", { style: Ac, children: [
      /* @__PURE__ */ e("div", { style: Mc, children: [
        /* @__PURE__ */ e("span", { style: { fontWeight: 600 }, children: "PDPM Analyzer" }),
        /* @__PURE__ */ e("button", { onClick: m, style: Ec, children: "×" })
      ] }),
      /* @__PURE__ */ e("div", { style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ e(
        Dc,
        {
          context: i,
          onClose: m
        }
      ) })
    ] }),
    t === "itemPopover" && s && /* @__PURE__ */ e(
      Ws,
      {
        item: s,
        context: { assessmentId: "4860265" },
        onClose: _
      }
    ),
    /* @__PURE__ */ e(
      "button",
      {
        class: "super-demo-fab",
        onClick: f,
        title: "Open Super Command Center",
        style: Tc,
        children: [
          /* @__PURE__ */ e("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7" }),
            /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7" }),
            /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7" }),
            /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7" })
          ] }),
          /* @__PURE__ */ e("span", { style: { marginLeft: "8px", fontSize: "13px", fontWeight: 600 }, children: "Super" })
        ]
      }
    ),
    l && /* @__PURE__ */ e(
      Cc,
      {
        queryData: l,
        onClose: () => d(null)
      }
    ),
    /* @__PURE__ */ e(Sc, { toast: c, onDismiss: () => o(null) })
  ] });
}
function Pc(t) {
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
const Tc = {
  position: "fixed",
  bottom: "24px",
  left: "24px",
  zIndex: 99999,
  display: "flex",
  alignItems: "center",
  padding: "12px 20px",
  borderRadius: "28px",
  background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
  color: "white",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 4px 14px rgba(99,102,241,0.4)",
  transition: "transform 0.15s ease, box-shadow 0.15s ease",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
}, Ac = {
  position: "fixed",
  inset: "20px",
  zIndex: 1e5,
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
}, Mc = {
  padding: "12px 16px",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f9fafb",
  flexShrink: 0
}, Ec = {
  background: "transparent",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
  color: "#6b7280",
  padding: "0 4px",
  lineHeight: 1
}, ns = {
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
function $c(t, n) {
  if (ns[t]) return ns[t];
  if (!n) return t;
  const s = n.split(/[,(]/)[0].trim();
  return s.length > 40 ? s.substring(0, 40) + "…" : s;
}
function xt(t) {
  let n = !1, s = !1;
  for (const a of t || [])
    if (a.category === "nta" && (n = !0), a.category === "slp" && (s = !0), n && s) break;
  return { nta: n, slp: s };
}
function Lc({ topRanked: t, approved: n, annotations: s }) {
  const a = (t || []).map((o) => ({
    kind: "group",
    key: `t:${o.groupId}`,
    origin: "topRanked",
    rank: o.rank,
    code: o.groupCode,
    description: o.groupName,
    badges: xt(o.annotations || []),
    group: o
  })), i = (n || []).map((o) => ({
    kind: "group",
    key: `a:${o.groupId}`,
    origin: "approved",
    code: o.groupCode,
    description: o.groupName,
    badges: xt(o.annotations || []),
    group: o
  })), r = { other: {}, speculative: {} };
  for (const o of s || []) {
    const l = (o.icd10Code || "").substring(0, 3);
    if (!l) continue;
    const d = o.category === "speculative" ? "speculative" : "other";
    r[d][l] || (r[d][l] = { baseCode: l, items: [], description: "" }), r[d][l].items.push(o), !r[d][l].description && o.description && (r[d][l].description = o.description);
  }
  const c = (o, l) => Object.values(o).map((d) => ({
    kind: "baseCode",
    key: `${l}:${d.baseCode}`,
    origin: l === "s" ? "speculative" : "other",
    code: d.baseCode,
    description: $c(d.baseCode, d.description),
    badges: xt(d.items),
    count: d.items.length,
    baseCode: d.baseCode,
    items: d.items
  })).sort((d, u) => u.count - d.count || d.code.localeCompare(u.code));
  return {
    topPicks: a,
    approved: i,
    other: c(r.other, "o"),
    speculative: c(r.speculative, "s")
  };
}
function Pt(t) {
  return [
    ...t.topPicks,
    ...t.other,
    ...t.speculative,
    ...t.approved
  ];
}
function Rc(t) {
  return t.topPicks.length ? t.topPicks[0].key : t.other.length ? t.other[0].key : t.speculative.length ? t.speculative[0].key : t.approved.length ? t.approved[0].key : null;
}
function ss(t) {
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
function Wt({ name: t }) {
  return t === "check" ? F(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    F("polyline", { points: "20 6 9 17 4 12" })
  ) : t === "alert" ? F(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    F("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
    F("line", { x1: 12, y1: 9, x2: 12, y2: 13 }),
    F("line", { x1: 12, y1: 17, x2: 12.01, y2: 17 })
  ) : t === "star" ? F(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    F("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
  ) : t === "chevron" ? F(
    "svg",
    { width: 12, height: 12, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    F("polyline", { points: "6 9 12 15 18 9" })
  ) : null;
}
function Xe({ row: t, selected: n, onClick: s }) {
  const a = ["icd10-sb__row"];
  return n && a.push("icd10-sb__row--selected"), t.rank != null && a.push("icd10-sb__row--ranked"), F(
    "div",
    {
      class: a.join(" "),
      onClick: () => s(t.key)
    },
    t.rank != null && F("span", { class: "icd10-sb__rank" }, `#${t.rank}`),
    F("span", { class: "icd10-sb__code" }, t.code),
    F("span", { class: "icd10-sb__desc", title: t.description }, t.description),
    (t.badges.nta || t.badges.slp) && F(
      "span",
      { class: "icd10-sb__badges" },
      t.badges.nta && F("span", { class: "icd10-sb__badge icd10-sb__badge--nta" }, "NTA"),
      t.badges.slp && F("span", { class: "icd10-sb__badge icd10-sb__badge--slp" }, "SLP")
    )
  );
}
function as({ label: t, count: n, icon: s, open: a, onToggle: i, variant: r }) {
  const c = ["icd10-sb__section-hdr", "icd10-sb__section-hdr--collapsible"];
  return r && c.push(`icd10-sb__section-hdr--${r}`), F(
    "button",
    {
      type: "button",
      class: c.join(" "),
      onClick: i,
      "aria-expanded": a
    },
    s && F("span", { class: "icd10-sb__section-icon" }, F(Wt, { name: s })),
    F("span", { class: "icd10-sb__section-label" }, t),
    F("span", { class: "icd10-sb__section-count" }, n),
    F(
      "span",
      { class: `icd10-sb__section-chevron ${a ? "icd10-sb__section-chevron--open" : ""}` },
      F(Wt, { name: "chevron" })
    )
  );
}
function is({ label: t, icon: n }) {
  return F(
    "div",
    { class: "icd10-sb__section-hdr icd10-sb__section-hdr--static" },
    n && F("span", { class: "icd10-sb__section-icon" }, F(Wt, { name: n })),
    F("span", { class: "icd10-sb__section-label" }, t)
  );
}
function qc({ topRanked: t = [], approved: n = [], annotations: s = [], onSelect: a }) {
  const [i, r] = w(!1), [c, o] = w(!1), [l, d] = w(null), u = ne(null), p = J(
    () => Lc({ topRanked: t, approved: n, annotations: s }),
    [t, n, s]
  ), m = J(() => {
    const y = /* @__PURE__ */ new Set();
    for (const v of Pt(p)) y.add(v.key);
    return y;
  }, [p]);
  U(() => {
    if (l && m.has(l) ? l : null) return;
    const v = Rc(p);
    if (!v || u.current === v) return;
    u.current = v, d(v);
    const S = Pt(p).find((C) => C.key === v);
    S && a && a(ss(S));
  }, [p, l, m, a]);
  const h = (y) => {
    d(y);
    const v = Pt(p).find((S) => S.key === y);
    v && a && a(ss(v));
  }, _ = p.approved.length > 0, f = p.other.length > 0, g = p.speculative.length > 0;
  return F(
    "div",
    { class: "icd10-sb" },
    _ && F(
      "section",
      { class: "icd10-sb__section" },
      F(as, {
        label: "Approved",
        count: p.approved.length,
        icon: "check",
        open: i,
        onToggle: () => r((y) => !y)
      }),
      i && F(
        "div",
        { class: "icd10-sb__section-body" },
        p.approved.map(
          (y) => F(Xe, { key: y.key, row: y, selected: l === y.key, onClick: h })
        )
      )
    ),
    F(
      "section",
      { class: "icd10-sb__section" },
      F(is, { label: "Top picks", icon: "star" }),
      F(
        "div",
        { class: "icd10-sb__section-body" },
        p.topPicks.length > 0 ? p.topPicks.map(
          (y) => F(Xe, { key: y.key, row: y, selected: l === y.key, onClick: h })
        ) : F("div", { class: "icd10-sb__empty" }, "No suggestions yet")
      )
    ),
    f && F(
      "section",
      { class: "icd10-sb__section" },
      F(is, { label: "Other suggestions" }),
      F(
        "div",
        { class: "icd10-sb__section-body" },
        p.other.map(
          (y) => F(Xe, { key: y.key, row: y, selected: l === y.key, onClick: h })
        )
      )
    ),
    g && F(
      "section",
      { class: "icd10-sb__section" },
      F(as, {
        label: "Speculative",
        count: p.speculative.length,
        icon: "alert",
        open: c,
        onToggle: () => o((y) => !y),
        variant: "warning"
      }),
      c && F(
        "div",
        { class: "icd10-sb__section-body" },
        p.speculative.map(
          (y) => F(Xe, { key: y.key, row: y, selected: l === y.key, onClick: h })
        )
      )
    )
  );
}
function Oc({ patientId: t, facilityName: n, orgSlug: s, assessmentId: a }) {
  const [i, r] = w(null), [c, o] = w(!0), [l, d] = w(null), [u, p] = w(null), m = j(async () => {
    o(!0), d(null);
    try {
      const S = new URLSearchParams({ facilityName: n, orgSlug: s });
      a && S.set("externalAssessmentId", a), t && S.set("patientExternalId", t);
      const C = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/ard-recommendation?${S}`
      });
      if (!C.success)
        throw new Error(C.error || "Failed to fetch ARD recommendation");
      const b = C.data || C;
      if (b.success === !1)
        throw new Error(b.error || "Failed to fetch ARD recommendation");
      r(b), b.recommendedDayNumber && p((P) => P ?? b.recommendedDayNumber);
    } catch (S) {
      console.error("[ArdEstimator] Fetch error:", S), d(S.message || "Failed to load ARD recommendation");
    } finally {
      o(!1);
    }
  }, [t, n, s, a]);
  U(() => {
    (t || a) && m();
  }, [m]), U(() => {
    const S = () => m();
    return window.addEventListener("super:query-sent", S), window.addEventListener("super:item-decision", S), () => {
      window.removeEventListener("super:query-sent", S), window.removeEventListener("super:item-decision", S);
    };
  }, [m]);
  const h = i?.scores?.find((S) => S.dayNumber === u) || null, _ = i?.classifiedItems || [], f = _.filter(
    (S) => S.classification === "time_sensitive_captured" || S.classification === "time_sensitive_at_risk" || S.classification === "time_sensitive_missed"
  ), g = _.filter(
    (S) => S.classification === "needs_review"
  ), y = _.filter(
    (S) => S.classification === "item_to_query"
  ), v = _.filter(
    (S) => S.classification === "always_captured" && Bc(S)
  );
  return {
    result: i,
    loading: c,
    error: l,
    selectedDay: u,
    setSelectedDay: p,
    selectedScore: h,
    timeSensitiveItems: f,
    needsReviewItems: g,
    queryItems: y,
    alwaysCapturedItems: v,
    refetch: m
  };
}
function Bc(t) {
  return t.ntaPoints !== null && t.ntaPoints > 0 || !!t.nursingInfo || t.pdpmComponents.length > 0;
}
function Hc(t) {
  if (!t) return "";
  const n = t.split("-");
  return n.length !== 3 ? t : `${parseInt(n[1])}/${parseInt(n[2])}`;
}
function Fc({
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
          const c = r.dayNumber === n, o = r.dayNumber === s;
          let l = "ard-est__day-btn";
          return c ? l += " ard-est__day-btn--selected" : o && (l += " ard-est__day-btn--recommended"), /* @__PURE__ */ e(
            "button",
            {
              className: l,
              onClick: () => a(r.dayNumber),
              title: `Day ${r.dayNumber}: ${r.date}`,
              children: [
                /* @__PURE__ */ e("span", { className: "ard-est__day-num", children: [
                  "D",
                  r.dayNumber
                ] }),
                /* @__PURE__ */ e("span", { className: "ard-est__day-date", children: Hc(r.date) }),
                o && !c && /* @__PURE__ */ e("span", { className: "ard-est__day-best", children: "BEST" })
              ]
            },
            r.dayNumber
          );
        }) })
      ] }),
      i.map((r, c) => {
        const o = r.firstAdministered && r.lastAdministered, l = r.classification === "needs_review";
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
              /* @__PURE__ */ e("div", { className: "ard-est__timeline-grid", children: t.map((d) => {
                const u = d.dayNumber, p = r.capturedOnDays.includes(u), m = u === n;
                return o ? /* @__PURE__ */ e(
                  "div",
                  {
                    className: `ard-est__gantt-cell${p ? " ard-est__gantt-cell--captured" : ""}${m ? " ard-est__gantt-cell--ring" : ""}`,
                    title: `Day ${u}: ${p ? "Captured" : "Not captured"}`,
                    children: p && /* @__PURE__ */ e("span", { className: "ard-est__gantt-num", children: u })
                  },
                  u
                ) : /* @__PURE__ */ e(
                  "div",
                  {
                    className: `ard-est__gantt-cell ard-est__gantt-cell--unknown${m ? " ard-est__gantt-cell--ring" : ""}${l ? " ard-est__gantt-cell--review" : ""}`,
                    title: `${r.description}: No date range`,
                    children: /* @__PURE__ */ e("span", { className: "ard-est__gantt-q", children: "?" })
                  },
                  u
                );
              }) })
            ]
          },
          `${r.mdsItem}-${r.mdsColumn || ""}-${c}`
        );
      })
    ] })
  ] });
}
function Uc({
  result: t,
  selectedDay: n,
  timeSensitiveItems: s,
  needsReviewItems: a
}) {
  if (!t || !n) return null;
  const i = n === t.recommendedDayNumber, r = new Set(t.scores.map((p) => p.estimatedPpd)).size === 1, c = t.scores.find((p) => p.dayNumber === n), o = t.scores.find((p) => p.dayNumber === t.recommendedDayNumber), l = [...s, ...a];
  let d = "";
  if (r && l.length === 0)
    d = "Any date works — no time-sensitive items found. All PDPM value comes from diagnoses captured regardless of ARD date.";
  else if (r && a.length > 0 && s.length === 0) {
    const p = a.slice(0, 3).map((m) => m.description).join(", ");
    d = `All dates produce the same score. ${a.length} possible item${a.length > 1 ? "s" : ""} (${p}) — confirm dates to refine.`;
  } else if (i) {
    const p = n + 1, m = l.filter(
      (h) => h.capturedOnDays.includes(n) && !h.capturedOnDays.includes(p)
    );
    if (m.length > 0) {
      const h = m.map((f) => {
        const g = [];
        return f.nursingInfo && g.push(f.nursingInfo.mainCategory + " nursing"), f.ntaPoints && f.ntaPoints > 0 && g.push(`+${f.ntaPoints} NTA`), f.pdpmComponents.length > 0 && !f.nursingInfo && !f.ntaPoints && g.push(f.pdpmComponents.join("/")), `${f.description}${g.length ? ` (${g.join(", ")})` : ""}`;
      }).join("; ");
      d = `Recommended. ${n >= 8 ? "A later ARD" : `Day ${p}+`} would lose: ${h}.`;
    } else
      d = "Recommended. All time-sensitive items captured.";
  } else {
    const p = (c?.estimatedPpd ?? 0) - (o?.estimatedPpd ?? 0);
    if (p < -0.5) {
      const m = l.filter(
        (_) => _.capturedOnDays.includes(t.recommendedDayNumber) && !_.capturedOnDays.includes(n)
      ), h = m.map((_) => _.description).join(", ");
      d = `$${Math.abs(p).toFixed(0)}/day less than Day ${t.recommendedDayNumber}${m.length > 0 ? `. Loses: ${h}` : ""}.`;
    } else p > 0.5 ? d = `$${p.toFixed(0)}/day more than Day ${t.recommendedDayNumber}. Consider this date.` : d = `Same score as Day ${t.recommendedDayNumber}.`;
  }
  let u = "neutral";
  return i ? u = "positive" : r || (u = "warning"), /* @__PURE__ */ e("div", { className: `ard-est__rec-text ard-est__rec-text--${u}`, children: [
    /* @__PURE__ */ e("span", { className: "ard-est__rec-text-bold", children: [
      "Day ",
      n,
      " ",
      "—",
      " "
    ] }),
    d
  ] });
}
const it = [
  { level: "NF", min: 0, max: 0 },
  { level: "NE", min: 1, max: 2 },
  { level: "ND", min: 3, max: 7 },
  { level: "NC", min: 8, max: 11 },
  { level: "NB", min: 12, max: 15 },
  { level: "NA", min: 16, max: 20 }
], Tt = 20;
function rs(t) {
  for (const n of it)
    if (t >= n.min && t <= n.max) return n;
  return it[it.length - 1];
}
function Gc({ currentPoints: t, potentialPoints: n }) {
  if (t == null) return null;
  const s = n != null && n > t, a = Math.min(t / Tt * 100, 100), i = s ? Math.min(n / Tt * 100, 100) : 0, r = rs(t), c = s ? rs(n) : null;
  return /* @__PURE__ */ e("div", { className: "ard-est__nta-bar", children: [
    /* @__PURE__ */ e("div", { className: "ard-est__nta-track", children: [
      it.map((o) => {
        const l = (o.max - o.min + 1) / (Tt + 1) * 100;
        return /* @__PURE__ */ e(
          "div",
          {
            className: `ard-est__nta-seg${o.level === r.level ? " ard-est__nta-seg--current" : ""}`,
            style: { width: `${l}%` },
            children: /* @__PURE__ */ e("span", { className: "ard-est__nta-seg-label", children: o.level })
          },
          o.level
        );
      }),
      /* @__PURE__ */ e("div", { className: "ard-est__nta-fill", style: { width: `${a}%` } }),
      s && /* @__PURE__ */ e(
        "div",
        {
          className: "ard-est__nta-fill ard-est__nta-fill--ghost",
          style: { left: `${a}%`, width: `${i - a}%` }
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "ard-est__nta-legend", children: [
      /* @__PURE__ */ e("span", { children: [
        t,
        " pts (",
        r.level,
        ")"
      ] }),
      s && /* @__PURE__ */ e("span", { className: "ard-est__nta-legend-potential", children: [
        "potential ",
        n,
        " pts (",
        c.level,
        ") if queries confirmed"
      ] })
    ] })
  ] });
}
async function Vc(t, n, s, a) {
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
function zc({ item: t, componentLabel: n, isActive: s, onSelect: a, onAddQuery: i, isQueued: r }) {
  const c = t.userDecision?.decision === "disagree", o = t.solverAnswer === "needs_review" || t.classification === "needs_review", l = t.classification === "item_to_query" && !t.queryStatus, d = !!t.queryStatus, u = !o && !l && !d;
  return /* @__PURE__ */ e(
    "div",
    {
      className: `ard-est__item-row${s ? " ard-est__item-row--active" : ""}${c ? " ard-est__item-row--dismissed" : ""}`,
      role: "button",
      tabIndex: 0,
      onClick: () => a(t),
      onKeyDown: (p) => p.key === "Enter" && a(t),
      children: [
        /* @__PURE__ */ e("span", { className: "ard-est__item-code", children: [
          t.mdsItem,
          t.mdsColumn || ""
        ] }),
        /* @__PURE__ */ e("span", { className: "ard-est__item-desc", children: t.description }),
        t.ntaPoints > 0 && n === "NTA" && /* @__PURE__ */ e("span", { className: "ard-est__item-pts", children: [
          "+",
          t.ntaPoints
        ] }),
        c && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--dismissed", children: "dismissed" }),
        !c && d && /* @__PURE__ */ e("span", { className: `ard-est__status ard-est__status--${t.queryStatus}`, children: t.queryStatus }),
        !c && !d && l && !r && /* @__PURE__ */ e(
          "button",
          {
            className: "ard-est__add-query-btn",
            onClick: (p) => {
              p.stopPropagation(), i(t.mdsItem);
            },
            children: "+ Add Query"
          }
        ),
        !c && !d && l && r && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--queued", children: "queued" }),
        !c && !d && o && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--review", children: "possible" }),
        !c && u && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--coded", children: "coded" }),
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
const Wc = { emerald: "positive", blue: "info", amber: "warning", slate: "neutral" };
function Qc(t, n) {
  if (t === "Nursing") {
    const s = n.nursingMainCategory;
    return s === "ES" ? "emerald" : s === "SCH" ? "blue" : "amber";
  }
  return t === "NTA" ? n.ntaPoints >= 12 ? "emerald" : n.ntaPoints >= 6 ? "blue" : "amber" : "slate";
}
function jc({ label: t, value: n, sub: s, items: a, color: i, activeItem: r, onSelect: c, onAddQuery: o, selectedIds: l, ntaBar: d }) {
  const u = Wc[i] || "neutral";
  return /* @__PURE__ */ e("div", { className: `ard-est__comp-card ard-est__comp-card--${u}`, children: [
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
    d,
    a.length > 0 && /* @__PURE__ */ e("div", { className: "ard-est__comp-items", children: a.map((p, m) => /* @__PURE__ */ e(
      zc,
      {
        item: p,
        componentLabel: t,
        isActive: r === p.mdsItem + (p.mdsColumn || ""),
        onSelect: c,
        onAddQuery: o,
        isQueued: l?.has(p.mdsItem)
      },
      `${t}-${p.mdsItem}-${m}`
    )) }),
    a.length === 0 && /* @__PURE__ */ e("div", { className: "ard-est__comp-empty", children: "No detected items" })
  ] });
}
function Kc({ score: t, allItems: n, activeItem: s, onSelectItem: a, onAddQuery: i, selectedIds: r, potentialNtaPoints: c, potentialPpd: o }) {
  if (!t) return null;
  const l = n.filter((f) => f.pdpmComponents?.includes("nursing") || f.nursingInfo), d = n.filter((f) => f.pdpmComponents?.includes("nta") || f.ntaPoints && f.ntaPoints > 0), u = n.filter((f) => f.pdpmComponents?.includes("slp")), p = n.filter((f) => f.pdpmComponents?.includes("ptot")), m = o != null && Math.abs(o - (t.estimatedPpd || 0)) > 0.5, h = m ? o - (t.estimatedPpd || 0) : 0, _ = [
    { label: "Nursing", value: t.nursingMainCategory, sub: t.nursingPaymentGroup, items: l },
    {
      label: "NTA",
      value: t.ntaLevel,
      sub: `${t.ntaPoints} pts`,
      items: d,
      ntaBar: /* @__PURE__ */ e(Gc, { currentPoints: t.ntaPoints, potentialPoints: c })
    },
    { label: "SLP", value: t.slpGroup, sub: "Speech", items: u },
    { label: "PT/OT", value: t.ptotGroup, sub: "Therapy", items: p }
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
          o.toFixed(0),
          " (+$",
          h.toFixed(0),
          ")"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "ard-est__breakdown-cards", children: _.map((f) => /* @__PURE__ */ e(
      jc,
      {
        ...f,
        color: Qc(f.label, t),
        activeItem: s,
        onSelect: a,
        onAddQuery: i,
        selectedIds: r
      },
      f.label
    )) })
  ] });
}
function Yc({ title: t, count: n, defaultOpen: s = !0, children: a }) {
  const [i, r] = w(s);
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
function Jc({ patientId: t, facilityName: n, orgSlug: s, assessmentId: a, onComplete: i }) {
  const [r, c] = w("idle"), [o, l] = w([]), [d, u] = w([]), [p, m] = w(null), [h, _] = w({ current: 0, total: 0 }), [f, g] = w(null), y = ne(!1), v = j(async (k) => {
    if (k.length === 0) return;
    c("generating"), g(null), _({ current: 0, total: k.length }), y.current = !1;
    const D = [];
    try {
      const N = window.QueryAPI.fetchPractitioners(n, s);
      for (let M = 0; M < k.length && !y.current; M++) {
        const A = k[M], $ = A.pdpmCategoryName || A.mdsItemName || A.mdsItem;
        _({ current: M, total: k.length, currentItemName: $ });
        try {
          const q = await window.QueryAPI.generateNote(
            A.mdsItem,
            A
          );
          D.push({
            item: A,
            noteText: q.note,
            preferredIcd10: q.preferredIcd10,
            icd10Options: q.icd10Options
          });
        } catch (q) {
          console.error(`[BatchQuery] Failed to generate note for ${A.mdsItem}:`, q), D.push({
            item: A,
            noteText: "",
            error: q.message
          });
        }
      }
      _({ current: k.length, total: k.length });
      try {
        const M = await N;
        u(M);
      } catch (M) {
        console.error("[BatchQuery] Failed to fetch practitioners:", M), u([]);
      }
      const O = D.filter((M) => M.noteText);
      l(O), O.length === 0 ? (g("Failed to generate any notes. Please try again."), c("idle")) : c("reviewing");
    } catch (N) {
      console.error("[BatchQuery] Generation failed:", N), g(N.message), c("idle");
    }
  }, [t, n, s, a]), S = j((k, D) => {
    l(
      (N) => N.map(
        (O) => O.item.mdsItem === k ? { ...O, noteText: D } : O
      )
    );
  }, []), C = j((k, D) => {
    l(
      (N) => N.map(
        (O) => O.item.mdsItem === k ? { ...O, selectedIcd10: D } : O
      )
    );
  }, []), b = j(async () => {
    if (!p || o.length === 0) return;
    c("sending"), g(null), _({ current: 0, total: o.length }), y.current = !1;
    const k = [];
    try {
      for (let D = 0; D < o.length && !y.current; D++) {
        const { item: N, noteText: O, selectedIcd10: M, preferredIcd10: A } = o[D];
        _({ current: D, total: o.length });
        const $ = M || A?.code || null, q = $ ? [{ code: $ }] : N.recommendedIcd10 || [];
        try {
          const { query: H } = await window.QueryAPI.createQuery({
            patientId: t,
            facilityName: n,
            orgSlug: s,
            mdsAssessmentId: a,
            mdsItem: N.mdsItem,
            mdsItemName: N.pdpmCategoryName || N.mdsItemName || N.mdsItem,
            queryReason: N.rationale || "",
            keyFindings: N.keyFindings || [],
            queryEvidence: N.queryEvidence || N.evidence || [],
            recommendedIcd10: q,
            aiGeneratedNote: O
          });
          await window.QueryAPI.sendQuery(
            H.id,
            [p],
            O
          ), k.push({ ...H, mdsItem: N.mdsItem });
        } catch (H) {
          console.error(`[BatchQuery] Failed to create/send query for ${N.mdsItem}:`, H);
        }
      }
      if (_({ current: o.length, total: o.length }), c("complete"), i) {
        const D = d.find((O) => O.id === p), N = D ? D.firstName && D.lastName ? `${D.firstName} ${D.lastName}${D.title ? `, ${D.title}` : ""}` : D.name || "Provider" : "Provider";
        i(k, N);
      }
    } catch (D) {
      console.error("[BatchQuery] Send failed:", D), g(D.message), c("reviewing");
    }
  }, [t, n, s, a, o, p, d, i]), P = j(() => {
    c("idle"), l([]), _({ current: 0, total: 0 });
  }, []), E = j(() => {
    c("idle"), l([]), u([]), m(null), _({ current: 0, total: 0 }), g(null), y.current = !1;
  }, []), x = j(() => {
    y.current = !0;
  }, []);
  return {
    state: r,
    generatedQueries: o,
    practitioners: d,
    selectedPractitionerId: p,
    setSelectedPractitionerId: m,
    progress: h,
    error: f,
    generate: v,
    updateNote: S,
    updateIcd10: C,
    sendAll: b,
    backToSelection: P,
    reset: E,
    abort: x
  };
}
const Zc = ({
  generatedQueries: t,
  practitioners: n,
  selectedPractitionerId: s,
  onSelectPractitioner: a,
  onUpdateNote: i,
  onUpdateIcd10: r,
  onSend: c,
  onBack: o,
  isSending: l,
  progress: d
}) => {
  const u = ne(null), p = ne(!1);
  U(() => {
    if (!u.current || n.length === 0 || p.current) return;
    u.current.innerHTML = "";
    const h = n.map((_) => ({
      id: _.id,
      label: ed(_),
      subtitle: _.title || _.specialty || ""
    }));
    if (typeof window.SuperDropdown?.create == "function")
      window.SuperDropdown.create(u.current, {
        items: h,
        placeholder: "Select a practitioner...",
        searchPlaceholder: "Search practitioners...",
        onSelect: (_) => {
          a(_.id);
        }
      }), p.current = !0;
    else {
      const _ = document.createElement("select");
      _.className = "qr__physician-select-fallback", _.style.cssText = "width:100%;padding:10px 12px;border:1px solid #d0d5dd;border-radius:8px;font-size:14px;color:#344054;background:#fff;cursor:pointer;";
      const f = document.createElement("option");
      f.value = "", f.textContent = "Select a practitioner...", f.disabled = !0, f.selected = !0, _.appendChild(f), h.forEach((g) => {
        const y = document.createElement("option");
        y.value = g.id, y.textContent = g.label + (g.subtitle ? ` — ${g.subtitle}` : ""), _.appendChild(y);
      }), _.addEventListener("change", (g) => {
        a(g.target.value);
      }), u.current.appendChild(_), p.current = !0;
    }
    return () => {
      p.current = !1;
    };
  }, [n, a]);
  const m = s && t.length > 0 && !l;
  return /* @__PURE__ */ e("div", { className: "qr", children: [
    /* @__PURE__ */ e("div", { className: "qr__header", children: [
      /* @__PURE__ */ e("button", { className: "qr__back-btn", onClick: o, disabled: l, children: [
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
        l && /* @__PURE__ */ e("div", { className: "qr__sending-status", children: [
          /* @__PURE__ */ e("div", { className: "qr__sending-spinner" }),
          "Sending ",
          d.current + 1,
          "/",
          d.total
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            className: "qr__send-btn",
            disabled: !m,
            onClick: c,
            children: [
              /* @__PURE__ */ e("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
                /* @__PURE__ */ e("path", { d: "M22 2L11 13" }),
                /* @__PURE__ */ e("path", { d: "M22 2L15 22L11 13L2 9L22 2Z" })
              ] }),
              l ? "Sending..." : "Send All"
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
      /* @__PURE__ */ e("div", { className: "qr__physician-dropdown", ref: u })
    ] }),
    /* @__PURE__ */ e("div", { className: "qr__body", children: t.map((h, _) => /* @__PURE__ */ e(
      Xc,
      {
        gq: h,
        index: _,
        total: t.length,
        onUpdateNote: i,
        onUpdateIcd10: r,
        disabled: l
      },
      h.item.mdsItem
    )) })
  ] });
}, Xc = ({ gq: t, index: n, total: s, onUpdateNote: a, onUpdateIcd10: i, disabled: r }) => {
  const c = t.item.pdpmCategoryName || t.item.mdsItemName || t.item.mdsItem, o = J(() => {
    const d = /* @__PURE__ */ new Set(), u = [], p = (m, h, _) => {
      !m || d.has(m) || (d.add(m), u.push({ code: m, description: h || "", source: _ }));
    };
    if (t.preferredIcd10 && p(t.preferredIcd10.code, t.preferredIcd10.description, "recommended"), t.icd10Options)
      for (const m of t.icd10Options)
        p(m.code, m.description, "ai");
    if (t.item.recommendedIcd10)
      for (const m of t.item.recommendedIcd10)
        p(m.code, m.description, "item");
    return u;
  }, [t]), l = t.selectedIcd10 || t.preferredIcd10?.code || "";
  return /* @__PURE__ */ e("div", { className: "qr__card", children: [
    /* @__PURE__ */ e("div", { className: "qr__card-header", children: [
      /* @__PURE__ */ e("span", { className: "qr__card-number", children: n + 1 }),
      /* @__PURE__ */ e("h3", { className: "qr__card-name", children: c }),
      /* @__PURE__ */ e("span", { className: "qr__card-mds", children: t.item.mdsItem })
    ] }),
    /* @__PURE__ */ e("div", { className: "qr__card-body", children: [
      o.length > 0 && /* @__PURE__ */ e("div", { className: "qr__field", children: [
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
            value: l,
            onChange: (d) => i(t.item.mdsItem, d.target.value),
            disabled: r,
            children: o.map((d) => /* @__PURE__ */ e("option", { value: d.code, children: [
              d.code,
              d.description ? ` — ${d.description}` : ""
            ] }, d.code))
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
            onInput: (d) => a(t.item.mdsItem, d.target.value),
            disabled: r,
            rows: 5
          }
        )
      ] })
    ] }),
    t.error && /* @__PURE__ */ e("div", { className: "qr__card-error", children: t.error })
  ] });
};
function ed(t) {
  return t.firstName && t.lastName ? `${t.firstName} ${t.lastName}${t.title ? `, ${t.title}` : ""}` : t.name || "Unknown";
}
const td = () => /* @__PURE__ */ e(
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
), os = () => /* @__PURE__ */ e(
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
), cs = () => /* @__PURE__ */ e(
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
), nd = () => /* @__PURE__ */ e(
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
function sd({ item: t }) {
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
function ad({ queueCount: t, batchState: n, progress: s, onClear: a, onGenerate: i }) {
  const r = n === "idle", c = n === "generating", l = c || n === "sending";
  return t === 0 && r ? null : /* @__PURE__ */ e("div", { className: "ard-est__query-queue", children: [
    r && /* @__PURE__ */ e(Y, { children: [
      /* @__PURE__ */ e("div", { className: "ard-est__queue-left", children: [
        /* @__PURE__ */ e("span", { className: "ard-est__queue-badge", children: t }),
        /* @__PURE__ */ e("span", { className: "ard-est__queue-text", children: [
          t === 1 ? "query" : "queries",
          " ready"
        ] }),
        /* @__PURE__ */ e("button", { className: "ard-est__queue-clear", onClick: a, children: "clear" })
      ] }),
      /* @__PURE__ */ e("button", { className: "ard-est__queue-send-btn", onClick: i, children: [
        /* @__PURE__ */ e(nd, {}),
        "Send Queries"
      ] })
    ] }),
    l && /* @__PURE__ */ e("div", { className: "ard-est__batch-progress", children: [
      /* @__PURE__ */ e("div", { className: "ard-est__batch-progress-bar", children: /* @__PURE__ */ e(
        "div",
        {
          className: "ard-est__batch-progress-fill",
          style: { width: `${s.total > 0 ? s.current / s.total * 100 : 0}%` }
        }
      ) }),
      /* @__PURE__ */ e("span", { className: "ard-est__batch-progress-text", children: [
        c ? "Generating" : "Sending",
        " ",
        s.current,
        "/",
        s.total,
        "..."
      ] })
    ] })
  ] });
}
function id({
  patientId: t,
  patientName: n,
  facilityName: s,
  orgSlug: a,
  assessmentId: i,
  onBack: r,
  onClose: c
}) {
  const {
    result: o,
    loading: l,
    error: d,
    selectedDay: u,
    setSelectedDay: p,
    selectedScore: m,
    timeSensitiveItems: h,
    needsReviewItems: _,
    alwaysCapturedItems: f,
    refetch: g
  } = Oc({ patientId: t, facilityName: s, orgSlug: a, assessmentId: i }), [y, v] = w(!1), [S, C] = w(/* @__PURE__ */ new Set()), [b, P] = w(null), [E, x] = w(null), [k, D] = w(null), N = i || o?.externalAssessmentId;
  J(() => (o?.classifiedItems || []).filter(
    (R) => R.classification === "item_to_query" && !R.queryStatus
  ), [o?.classifiedItems]);
  const O = j((R) => {
    C((B) => {
      const ee = new Set(B);
      return ee.add(R), ee;
    });
  }, []);
  j((R) => {
    C((B) => {
      const ee = new Set(B);
      return ee.delete(R), ee;
    });
  }, []);
  const M = j(() => {
    C(/* @__PURE__ */ new Set());
  }, []), A = j((R) => {
    const B = R.mdsItem + (R.mdsColumn || "");
    if (k === B) {
      D(null), x(null);
      return;
    }
    D(B), x({ item: R });
  }, [k]), $ = J(() => (o?.classifiedItems || []).filter((R) => S.has(R.mdsItem)), [o?.classifiedItems, S]), q = Jc({
    patientId: t,
    facilityName: s,
    orgSlug: a,
    assessmentId: N,
    onComplete: (R, B) => {
      M(), P({ count: R.length, practitionerName: B }), setTimeout(() => P(null), 4e3), g();
    }
  }), H = j(async () => {
    const R = [];
    for (const B of $)
      try {
        const ee = B.mdsItem + (B.mdsColumn || ""), T = await Vc(ee, N, s, a), L = T?.item || T;
        R.push({
          mdsItem: B.mdsItem,
          mdsItemName: B.description,
          pdpmCategoryName: B.description,
          rationale: L?.rationale || L?.queryReason || T?.diagnosisSummary || "",
          keyFindings: L?.keyFindings || [],
          evidence: L?.evidence || [],
          queryEvidence: L?.queryEvidence || L?.evidence || [],
          recommendedIcd10: L?.recommendedIcd10 || [],
          ...L
        });
      } catch (ee) {
        console.error(`[ArdEstimator] Failed to fetch detail for ${B.mdsItem}:`, ee), R.push({
          mdsItem: B.mdsItem,
          mdsItemName: B.description,
          pdpmCategoryName: B.description,
          rationale: B.queryPdpmImpact || "",
          keyFindings: [],
          evidence: [],
          queryEvidence: []
        });
      }
    q.generate(R);
  }, [$, N, s, a, q]), Z = [...h, ..._], K = /* @__PURE__ */ e("div", { className: "ard-est__header", children: [
    /* @__PURE__ */ e("div", { className: "ard-est__header-left", children: [
      r && q.state === "idle" && /* @__PURE__ */ e("button", { className: "ard-est__back-btn", onClick: r, title: "Back", children: /* @__PURE__ */ e(cs, {}) }),
      q.state === "reviewing" && /* @__PURE__ */ e("button", { className: "ard-est__back-btn", onClick: q.backToSelection, title: "Back to estimate", children: /* @__PURE__ */ e(cs, {}) }),
      /* @__PURE__ */ e("div", { children: [
        /* @__PURE__ */ e("h2", { className: "ard-est__title", children: [
          /* @__PURE__ */ e(td, {}),
          q.state === "reviewing" ? "Review & Send Queries" : "PDPM Estimate & ARD Recommendation"
        ] }),
        /* @__PURE__ */ e("p", { className: "ard-est__subtitle", children: q.state === "reviewing" ? `${q.generatedQueries.length} queries ready to send` : l ? "Loading..." : `5-Day PPS · Admitted ${o?.admissionDate || "—"}` })
      ] })
    ] }),
    m && q.state === "idle" && /* @__PURE__ */ e("div", { className: "ard-est__header-right", children: [
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
        o?.potentialPpd != null && Math.abs(o.potentialPpd - (m.estimatedPpd || 0)) > 0.5 && /* @__PURE__ */ e("span", { className: "ard-est__header-potential", children: [
          "potential $",
          o.potentialPpd.toFixed(0),
          "/day"
        ] })
      ] })
    ] })
  ] });
  if (l)
    return /* @__PURE__ */ e("div", { className: "ard-est", children: [
      K,
      /* @__PURE__ */ e("div", { className: "ard-est__loading", children: [
        /* @__PURE__ */ e("div", { className: "ard-est__spinner" }),
        /* @__PURE__ */ e("p", { className: "ard-est__loading-text", children: "Calculating optimal ARD..." })
      ] })
    ] });
  if (d)
    return /* @__PURE__ */ e("div", { className: "ard-est", children: [
      K,
      /* @__PURE__ */ e("div", { className: "ard-est__error", children: [
        /* @__PURE__ */ e(os, {}),
        /* @__PURE__ */ e("p", { className: "ard-est__error-text", children: d }),
        /* @__PURE__ */ e("button", { className: "ard-est__error-retry", onClick: g, children: "Retry" })
      ] })
    ] });
  if (q.state === "reviewing" || q.state === "sending")
    return /* @__PURE__ */ e("div", { className: "ard-est", children: [
      K,
      /* @__PURE__ */ e("div", { className: "ard-est__body", children: /* @__PURE__ */ e(
        Zc,
        {
          generatedQueries: q.generatedQueries,
          practitioners: q.practitioners,
          selectedPractitionerId: q.selectedPractitionerId,
          onSelectPractitioner: q.setSelectedPractitionerId,
          onUpdateNote: q.updateNote,
          onUpdateIcd10: q.updateIcd10,
          onSend: q.sendAll,
          onBack: q.backToSelection,
          isSending: q.state === "sending",
          progress: q.progress
        }
      ) })
    ] });
  if (E) {
    const R = {
      assessmentId: N,
      scope: "mds"
    };
    return /* @__PURE__ */ e("div", { className: "ard-est ard-est--detail-view", children: /* @__PURE__ */ e(
      Ys,
      {
        item: {
          mdsItem: E.item.mdsItem + (E.item.mdsColumn || ""),
          itemName: E.item.description,
          column: E.item.mdsColumn || ""
        },
        context: R,
        onBack: () => {
          x(null), D(null);
        },
        onDismiss: () => {
          x(null), D(null);
        }
      }
    ) });
  }
  return /* @__PURE__ */ e("div", { className: "ard-est", children: [
    K,
    b && /* @__PURE__ */ e("div", { className: "ard-est__success-banner", children: [
      /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
        /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        /* @__PURE__ */ e("polyline", { points: "22 4 12 14.01 9 11.01" })
      ] }),
      b.count,
      " quer",
      b.count === 1 ? "y" : "ies",
      " sent to ",
      b.practitionerName
    ] }),
    /* @__PURE__ */ e("div", { className: "ard-est__body", children: [
      /* @__PURE__ */ e(
        Fc,
        {
          scores: o?.scores || [],
          selectedDay: u,
          recommendedDay: o?.recommendedDayNumber,
          onSelectDay: p,
          ganttItems: Z
        }
      ),
      /* @__PURE__ */ e(
        Uc,
        {
          result: o,
          selectedDay: u,
          timeSensitiveItems: h,
          needsReviewItems: _
        }
      ),
      (o?.classifiedItems || []).length === 0 && o?.sectionsMissing?.length > 0 && /* @__PURE__ */ e("div", { className: "ard-est__no-data", children: [
        /* @__PURE__ */ e("div", { className: "ard-est__no-data-icon", children: /* @__PURE__ */ e("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "#94a3b8", strokeWidth: "1.5", children: [
          /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ e("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
          /* @__PURE__ */ e("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
        ] }) }),
        /* @__PURE__ */ e("h4", { className: "ard-est__no-data-title", children: "AI Analysis Not Run Yet" }),
        /* @__PURE__ */ e("p", { className: "ard-est__no-data-text", children: [
          "The PDPM score above is based on the current MDS coding. Run the AI solver on Sections ",
          o.sectionsMissing.join(", "),
          " to get item-level recommendations, ARD optimization, and query suggestions."
        ] })
      ] }),
      (o?.classifiedItems || []).length > 0 && /* @__PURE__ */ e(
        Kc,
        {
          score: m,
          allItems: o?.classifiedItems || [],
          activeItem: k,
          onSelectItem: A,
          onAddQuery: O,
          selectedIds: S,
          potentialNtaPoints: o?.potentialNtaPoints,
          potentialPpd: o?.potentialPpd
        }
      ),
      f.length > 0 && /* @__PURE__ */ e(
        Yc,
        {
          title: "Already Captured (PDPM items)",
          count: f.length,
          defaultOpen: !1,
          children: f.map((R, B) => /* @__PURE__ */ e(sd, { item: R }, `cap-${R.mdsItem}-${B}`))
        }
      ),
      (o?.classifiedItems || []).length > 0 && o?.sectionsMissing?.length > 0 && /* @__PURE__ */ e("div", { className: "ard-est__warning", children: [
        /* @__PURE__ */ e(os, {}),
        /* @__PURE__ */ e("span", { children: [
          "Missing solver data for Section",
          o.sectionsMissing.length > 1 ? "s" : "",
          " ",
          o.sectionsMissing.join(", "),
          ". Run those solvers for a more complete recommendation."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(
      ad,
      {
        queueCount: S.size,
        batchState: q.state,
        progress: q.progress,
        onClear: M,
        onGenerate: H
      }
    )
  ] });
}
va();
Ca();
window.__DEMO_MODE = !0;
window.__preact = oa;
window.__ICD10SidebarComponent = qc;
window.__ArdEstimator = id;
function ds() {
  let t = document.getElementById("super-demo-root");
  t || (t = document.createElement("div"), t.id = "super-demo-root", document.body.appendChild(t)), Ce(/* @__PURE__ */ e(xc, {}), t), console.log("[PCC Demo] PCCDemoApp mounted");
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ds) : ds();
