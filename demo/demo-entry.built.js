var ze, se, ks, Cs, ke, kn, Ns, Ss, xs, rn, Gt, Vt, Ps, Ge = {}, Ts = [], gi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, je = Array.isArray;
function be(t, n) {
  for (var s in n) t[s] = n[s];
  return t;
}
function on(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function G(t, n, s) {
  var i, a, r, o = {};
  for (r in n) r == "key" ? i = n[r] : r == "ref" ? a = n[r] : o[r] = n[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ze.call(arguments, 2) : s), typeof t == "function" && t.defaultProps != null) for (r in t.defaultProps) o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return Be(t, o, i, a, null);
}
function Be(t, n, s, i, a) {
  var r = { type: t, props: n, key: s, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++ks, __i: -1, __u: 0 };
  return a == null && se.vnode != null && se.vnode(r), r;
}
function fi() {
  return { current: null };
}
function J(t) {
  return t.children;
}
function Fe(t, n) {
  this.props = t, this.context = n;
}
function Le(t, n) {
  if (n == null) return t.__ ? Le(t.__, t.__i + 1) : null;
  for (var s; n < t.__k.length; n++) if ((s = t.__k[n]) != null && s.__e != null) return s.__e;
  return typeof t.type == "function" ? Le(t) : null;
}
function As(t) {
  var n, s;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++) if ((s = t.__k[n]) != null && s.__e != null) {
      t.__e = t.__c.base = s.__e;
      break;
    }
    return As(t);
  }
}
function Wt(t) {
  (!t.__d && (t.__d = !0) && ke.push(t) && !mt.__r++ || kn != se.debounceRendering) && ((kn = se.debounceRendering) || Ns)(mt);
}
function mt() {
  for (var t, n, s, i, a, r, o, c = 1; ke.length; ) ke.length > c && ke.sort(Ss), t = ke.shift(), c = ke.length, t.__d && (s = void 0, i = void 0, a = (i = (n = t).__v).__e, r = [], o = [], n.__P && ((s = be({}, i)).__v = i.__v + 1, se.vnode && se.vnode(s), cn(n.__P, s, i, n.__n, n.__P.namespaceURI, 32 & i.__u ? [a] : null, r, a ?? Le(i), !!(32 & i.__u), o), s.__v = i.__v, s.__.__k[s.__i] = s, $s(r, s, o), i.__e = i.__ = null, s.__e != a && As(s)));
  mt.__r = 0;
}
function Ms(t, n, s, i, a, r, o, c, l, d, u) {
  var p, m, h, _, g, f, y, w = i && i.__k || Ts, k = n.length;
  for (l = yi(s, n, w, l, k), p = 0; p < k; p++) (h = s.__k[p]) != null && (m = h.__i == -1 ? Ge : w[h.__i] || Ge, h.__i = p, f = cn(t, h, m, a, r, o, c, l, d, u), _ = h.__e, h.ref && m.ref != h.ref && (m.ref && dn(m.ref, null, h), u.push(h.ref, h.__c || _, h)), g == null && _ != null && (g = _), (y = !!(4 & h.__u)) || m.__k === h.__k ? l = Ls(h, l, t, y) : typeof h.type == "function" && f !== void 0 ? l = f : _ && (l = _.nextSibling), h.__u &= -7);
  return s.__e = g, l;
}
function yi(t, n, s, i, a) {
  var r, o, c, l, d, u = s.length, p = u, m = 0;
  for (t.__k = new Array(a), r = 0; r < a; r++) (o = n[r]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = t.__k[r] = Be(null, o, null, null, null) : je(o) ? o = t.__k[r] = Be(J, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = t.__k[r] = Be(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : t.__k[r] = o, l = r + m, o.__ = t, o.__b = t.__b + 1, c = null, (d = o.__i = vi(o, s, l, p)) != -1 && (p--, (c = s[d]) && (c.__u |= 2)), c == null || c.__v == null ? (d == -1 && (a > u ? m-- : a < u && m++), typeof o.type != "function" && (o.__u |= 4)) : d != l && (d == l - 1 ? m-- : d == l + 1 ? m++ : (d > l ? m-- : m++, o.__u |= 4))) : t.__k[r] = null;
  if (p) for (r = 0; r < u; r++) (c = s[r]) != null && (2 & c.__u) == 0 && (c.__e == i && (i = Le(c)), qs(c, c));
  return i;
}
function Ls(t, n, s, i) {
  var a, r;
  if (typeof t.type == "function") {
    for (a = t.__k, r = 0; a && r < a.length; r++) a[r] && (a[r].__ = t, n = Ls(a[r], n, s, i));
    return n;
  }
  t.__e != n && (i && (n && t.type && !n.parentNode && (n = Le(t)), s.insertBefore(t.__e, n || null)), n = t.__e);
  do
    n = n && n.nextSibling;
  while (n != null && n.nodeType == 8);
  return n;
}
function Es(t, n) {
  return n = n || [], t == null || typeof t == "boolean" || (je(t) ? t.some(function(s) {
    Es(s, n);
  }) : n.push(t)), n;
}
function vi(t, n, s, i) {
  var a, r, o, c = t.key, l = t.type, d = n[s], u = d != null && (2 & d.__u) == 0;
  if (d === null && c == null || u && c == d.key && l == d.type) return s;
  if (i > (u ? 1 : 0)) {
    for (a = s - 1, r = s + 1; a >= 0 || r < n.length; ) if ((d = n[o = a >= 0 ? a-- : r++]) != null && (2 & d.__u) == 0 && c == d.key && l == d.type) return o;
  }
  return -1;
}
function Cn(t, n, s) {
  n[0] == "-" ? t.setProperty(n, s ?? "") : t[n] = s == null ? "" : typeof s != "number" || gi.test(n) ? s : s + "px";
}
function Ze(t, n, s, i, a) {
  var r, o;
  e: if (n == "style") if (typeof s == "string") t.style.cssText = s;
  else {
    if (typeof i == "string" && (t.style.cssText = i = ""), i) for (n in i) s && n in s || Cn(t.style, n, "");
    if (s) for (n in s) i && s[n] == i[n] || Cn(t.style, n, s[n]);
  }
  else if (n[0] == "o" && n[1] == "n") r = n != (n = n.replace(xs, "$1")), o = n.toLowerCase(), n = o in t || n == "onFocusOut" || n == "onFocusIn" ? o.slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + r] = s, s ? i ? s.u = i.u : (s.u = rn, t.addEventListener(n, r ? Vt : Gt, r)) : t.removeEventListener(n, r ? Vt : Gt, r);
  else {
    if (a == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in t) try {
      t[n] = s ?? "";
      break e;
    } catch {
    }
    typeof s == "function" || (s == null || s === !1 && n[4] != "-" ? t.removeAttribute(n) : t.setAttribute(n, n == "popover" && s == 1 ? "" : s));
  }
}
function Nn(t) {
  return function(n) {
    if (this.l) {
      var s = this.l[n.type + t];
      if (n.t == null) n.t = rn++;
      else if (n.t < s.u) return;
      return s(se.event ? se.event(n) : n);
    }
  };
}
function cn(t, n, s, i, a, r, o, c, l, d) {
  var u, p, m, h, _, g, f, y, w, k, C, I, P, A, x, D, N, S = n.type;
  if (n.constructor !== void 0) return null;
  128 & s.__u && (l = !!(32 & s.__u), r = [c = n.__e = s.__e]), (u = se.__b) && u(n);
  e: if (typeof S == "function") try {
    if (y = n.props, w = "prototype" in S && S.prototype.render, k = (u = S.contextType) && i[u.__c], C = u ? k ? k.props.value : u.__ : i, s.__c ? f = (p = n.__c = s.__c).__ = p.__E : (w ? n.__c = p = new S(y, C) : (n.__c = p = new Fe(y, C), p.constructor = S, p.render = bi), k && k.sub(p), p.state || (p.state = {}), p.__n = i, m = p.__d = !0, p.__h = [], p._sb = []), w && p.__s == null && (p.__s = p.state), w && S.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = be({}, p.__s)), be(p.__s, S.getDerivedStateFromProps(y, p.__s))), h = p.props, _ = p.state, p.__v = n, m) w && S.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), w && p.componentDidMount != null && p.__h.push(p.componentDidMount);
    else {
      if (w && S.getDerivedStateFromProps == null && y !== h && p.componentWillReceiveProps != null && p.componentWillReceiveProps(y, C), n.__v == s.__v || !p.__e && p.shouldComponentUpdate != null && p.shouldComponentUpdate(y, p.__s, C) === !1) {
        for (n.__v != s.__v && (p.props = y, p.state = p.__s, p.__d = !1), n.__e = s.__e, n.__k = s.__k, n.__k.some(function(E) {
          E && (E.__ = n);
        }), I = 0; I < p._sb.length; I++) p.__h.push(p._sb[I]);
        p._sb = [], p.__h.length && o.push(p);
        break e;
      }
      p.componentWillUpdate != null && p.componentWillUpdate(y, p.__s, C), w && p.componentDidUpdate != null && p.__h.push(function() {
        p.componentDidUpdate(h, _, g);
      });
    }
    if (p.context = C, p.props = y, p.__P = t, p.__e = !1, P = se.__r, A = 0, w) {
      for (p.state = p.__s, p.__d = !1, P && P(n), u = p.render(p.props, p.state, p.context), x = 0; x < p._sb.length; x++) p.__h.push(p._sb[x]);
      p._sb = [];
    } else do
      p.__d = !1, P && P(n), u = p.render(p.props, p.state, p.context), p.state = p.__s;
    while (p.__d && ++A < 25);
    p.state = p.__s, p.getChildContext != null && (i = be(be({}, i), p.getChildContext())), w && !m && p.getSnapshotBeforeUpdate != null && (g = p.getSnapshotBeforeUpdate(h, _)), D = u, u != null && u.type === J && u.key == null && (D = Rs(u.props.children)), c = Ms(t, je(D) ? D : [D], n, s, i, a, r, o, c, l, d), p.base = n.__e, n.__u &= -161, p.__h.length && o.push(p), f && (p.__E = p.__ = null);
  } catch (E) {
    if (n.__v = null, l || r != null) if (E.then) {
      for (n.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      r[r.indexOf(c)] = null, n.__e = c;
    } else {
      for (N = r.length; N--; ) on(r[N]);
      Qt(n);
    }
    else n.__e = s.__e, n.__k = s.__k, E.then || Qt(n);
    se.__e(E, n, s);
  }
  else r == null && n.__v == s.__v ? (n.__k = s.__k, n.__e = s.__e) : c = n.__e = wi(s.__e, n, s, i, a, r, o, l, d);
  return (u = se.diffed) && u(n), 128 & n.__u ? void 0 : c;
}
function Qt(t) {
  t && t.__c && (t.__c.__e = !0), t && t.__k && t.__k.forEach(Qt);
}
function $s(t, n, s) {
  for (var i = 0; i < s.length; i++) dn(s[i], s[++i], s[++i]);
  se.__c && se.__c(n, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(r) {
        r.call(a);
      });
    } catch (r) {
      se.__e(r, a.__v);
    }
  });
}
function Rs(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : je(t) ? t.map(Rs) : be({}, t);
}
function wi(t, n, s, i, a, r, o, c, l) {
  var d, u, p, m, h, _, g, f = s.props || Ge, y = n.props, w = n.type;
  if (w == "svg" ? a = "http://www.w3.org/2000/svg" : w == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), r != null) {
    for (d = 0; d < r.length; d++) if ((h = r[d]) && "setAttribute" in h == !!w && (w ? h.localName == w : h.nodeType == 3)) {
      t = h, r[d] = null;
      break;
    }
  }
  if (t == null) {
    if (w == null) return document.createTextNode(y);
    t = document.createElementNS(a, w, y.is && y), c && (se.__m && se.__m(n, r), c = !1), r = null;
  }
  if (w == null) f === y || c && t.data == y || (t.data = y);
  else {
    if (r = r && ze.call(t.childNodes), !c && r != null) for (f = {}, d = 0; d < t.attributes.length; d++) f[(h = t.attributes[d]).name] = h.value;
    for (d in f) if (h = f[d], d != "children") {
      if (d == "dangerouslySetInnerHTML") p = h;
      else if (!(d in y)) {
        if (d == "value" && "defaultValue" in y || d == "checked" && "defaultChecked" in y) continue;
        Ze(t, d, null, h, a);
      }
    }
    for (d in y) h = y[d], d == "children" ? m = h : d == "dangerouslySetInnerHTML" ? u = h : d == "value" ? _ = h : d == "checked" ? g = h : c && typeof h != "function" || f[d] === h || Ze(t, d, h, f[d], a);
    if (u) c || p && (u.__html == p.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), n.__k = [];
    else if (p && (t.innerHTML = ""), Ms(n.type == "template" ? t.content : t, je(m) ? m : [m], n, s, i, w == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, r, o, r ? r[0] : s.__k && Le(s, 0), c, l), r != null) for (d = r.length; d--; ) on(r[d]);
    c || (d = "value", w == "progress" && _ == null ? t.removeAttribute("value") : _ != null && (_ !== t[d] || w == "progress" && !_ || w == "option" && _ != f[d]) && Ze(t, d, _, f[d], a), d = "checked", g != null && g != t[d] && Ze(t, d, g, f[d], a));
  }
  return t;
}
function dn(t, n, s) {
  try {
    if (typeof t == "function") {
      var i = typeof t.__u == "function";
      i && t.__u(), i && n == null || (t.__u = t(n));
    } else t.current = n;
  } catch (a) {
    se.__e(a, s);
  }
}
function qs(t, n, s) {
  var i, a;
  if (se.unmount && se.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || dn(i, null, n)), (i = t.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (r) {
      se.__e(r, n);
    }
    i.base = i.__P = null;
  }
  if (i = t.__k) for (a = 0; a < i.length; a++) i[a] && qs(i[a], n, s || typeof t.type != "function");
  s || on(t.__e), t.__c = t.__ = t.__e = void 0;
}
function bi(t, n, s) {
  return this.constructor(t, s);
}
function Ce(t, n, s) {
  var i, a, r, o;
  n == document && (n = document.documentElement), se.__ && se.__(t, n), a = (i = typeof s == "function") ? null : s && s.__k || n.__k, r = [], o = [], cn(n, t = (!i && s || n).__k = G(J, null, [t]), a || Ge, Ge, n.namespaceURI, !i && s ? [s] : a ? null : n.firstChild ? ze.call(n.childNodes) : null, r, !i && s ? s : a ? a.__e : n.firstChild, i, o), $s(r, t, o);
}
function Os(t, n) {
  Ce(t, n, Os);
}
function Ii(t, n, s) {
  var i, a, r, o, c = be({}, t.props);
  for (r in t.type && t.type.defaultProps && (o = t.type.defaultProps), n) r == "key" ? i = n[r] : r == "ref" ? a = n[r] : c[r] = n[r] === void 0 && o != null ? o[r] : n[r];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? ze.call(arguments, 2) : s), Be(t.type, c, i || t.key, a || t.ref, null);
}
function Di(t) {
  function n(s) {
    var i, a;
    return this.getChildContext || (i = /* @__PURE__ */ new Set(), (a = {})[n.__c] = this, this.getChildContext = function() {
      return a;
    }, this.componentWillUnmount = function() {
      i = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value != r.value && i.forEach(function(o) {
        o.__e = !0, Wt(o);
      });
    }, this.sub = function(r) {
      i.add(r);
      var o = r.componentWillUnmount;
      r.componentWillUnmount = function() {
        i && i.delete(r), o && o.call(r);
      };
    }), s.children;
  }
  return n.__c = "__cC" + Ps++, n.__ = t, n.Provider = n.__l = (n.Consumer = function(s, i) {
    return s.children(i);
  }).contextType = n, n;
}
ze = Ts.slice, se = { __e: function(t, n, s, i) {
  for (var a, r, o; n = n.__; ) if ((a = n.__c) && !a.__) try {
    if ((r = a.constructor) && r.getDerivedStateFromError != null && (a.setState(r.getDerivedStateFromError(t)), o = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, i || {}), o = a.__d), o) return a.__E = a;
  } catch (c) {
    t = c;
  }
  throw t;
} }, ks = 0, Cs = function(t) {
  return t != null && t.constructor === void 0;
}, Fe.prototype.setState = function(t, n) {
  var s;
  s = this.__s != null && this.__s != this.state ? this.__s : this.__s = be({}, this.state), typeof t == "function" && (t = t(be({}, s), this.props)), t && be(s, t), t != null && this.__v && (n && this._sb.push(n), Wt(this));
}, Fe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Wt(this));
}, Fe.prototype.render = J, ke = [], Ns = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ss = function(t, n) {
  return t.__v.__b - n.__v.__b;
}, mt.__r = 0, xs = /(PointerCapture)$|Capture$/i, rn = 0, Gt = Nn(!1), Vt = Nn(!0), Ps = 0;
const ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: Fe,
  Fragment: J,
  cloneElement: Ii,
  createContext: Di,
  createElement: G,
  createRef: fi,
  h: G,
  hydrate: Os,
  get isValidElement() {
    return Cs;
  },
  get options() {
    return se;
  },
  render: Ce,
  toChildArray: Es
}, Symbol.toStringTag, { value: "Module" }));
var Ci = 0;
function e(t, n, s, i, a, r) {
  n || (n = {});
  var o, c, l = n;
  if ("ref" in l) for (c in l = {}, n) c == "ref" ? o = n[c] : l[c] = n[c];
  var d = { type: t, props: l, key: s, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ci, __i: -1, __u: 0, __source: a, __self: r };
  if (typeof t == "function" && (o = t.defaultProps)) for (c in o) l[c] === void 0 && (l[c] = o[c]);
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
}, Ni = [
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
function b(t) {
  return Ni.find((n) => n.patientName.startsWith(t));
}
function pe(t, n) {
  const [s, i, a] = t.split("-").map(Number), r = new Date(s, i - 1, a);
  return r.setDate(r.getDate() + n), `${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}-${String(r.getDate()).padStart(2, "0")}`;
}
function de(t, n, s, { urgency: i = "ok", meta: a = {} } = {}) {
  return {
    date: t,
    type: n,
    patientId: s.patientId,
    patientExternalId: s.patientExternalId,
    patientName: s.patientName,
    urgency: i,
    meta: a
  };
}
function Si(t) {
  const n = t, s = pe(n, 1), i = pe(n, 2), a = pe(n, 3), r = pe(n, 4), o = pe(n, 5), c = pe(n, 6);
  return [
    // Monday — urgent opener
    de(n, "cert_overdue", b("Coble"), {
      urgency: "overdue",
      meta: { certId: "cert_coble_01", type: "day_14_recert", status: "pending", bucket: "needs_to_send", daysOverdue: 32 }
    }),
    de(n, "cp_review_due", b("Hagerich"), {
      urgency: "warning",
      meta: { nextReviewDate: n, pccReviewId: null, pccCarePlanId: "cp_hagerich_01" }
    }),
    de(n, "query_due", b("Saffle"), {
      urgency: "warning",
      meta: { queryId: "q_saffle_01", itemCode: "I5100", status: "sent", linkedArdDate: a }
    }),
    // Tuesday — admit + sig + cp review
    de(s, "admit", b("Clark"), {
      meta: { payer: "Medicare A", location: "4-South" }
    }),
    de(s, "mds_ard", b("Clasper"), {
      meta: { assessmentId: "mds_clasper_01", pccAssessmentId: "4860311", description: "Admission + 5-Day PPS", status: "In Progress", ardDate: s }
    }),
    de(s, "cp_review_expected", b("Packoski"), {
      urgency: "warning",
      meta: { relatedArdDate: pe(s, 2), expectedType: "quarterly" }
    }),
    // Wednesday — sig change MDS + queries in flight
    de(i, "mds_ard", b("Stamper"), {
      urgency: "warning",
      meta: { assessmentId: "mds_stamper_01", pccAssessmentId: "4860312", description: "Significant Change", status: "In Progress", ardDate: i }
    }),
    de(i, "query_due", b("Schmalzriedt"), {
      meta: { queryId: "q_schmalz_01", itemCode: "I2900", status: "sent", linkedArdDate: pe(i, 5) }
    }),
    de(i, "query_due", b("Nugent"), {
      meta: { queryId: "q_nugent_01", itemCode: "J1550", status: "sent", linkedArdDate: pe(i, 6) }
    }),
    // Thursday — query due + cp review
    de(a, "query_due", b("Bruton"), {
      urgency: "warning",
      meta: { queryId: "q_bruton_01", itemCode: "I1100", status: "pending", linkedArdDate: pe(a, 2) }
    }),
    de(a, "cp_review_in_progress", b("Henstreet"), {
      meta: { startDate: pe(a, -1), targetCompletionDate: pe(a, 3), pccReviewId: "rev_henstreet_01", pccCarePlanId: "cp_henstreet_01" }
    }),
    // Friday — discharge, cp review, cert
    de(r, "discharge", b("Watkins"), {
      meta: { actionCode: "DD" }
    }),
    de(r, "cp_review_due", b("McCants"), {
      meta: { nextReviewDate: r, pccReviewId: null, pccCarePlanId: "cp_mccants_01" }
    }),
    de(r, "cert_due", b("Clappor"), {
      urgency: "warning",
      meta: { certId: "cert_clappor_01", type: "day_14_recert", status: "pending", bucket: "needs_to_send", sentAt: null }
    }),
    // Saturday — query-heavy day
    de(o, "query_due", b("Ashley"), {
      meta: { queryId: "q_ashley_01", itemCode: "I5100", status: "sent", linkedArdDate: pe(o, 4) }
    }),
    de(o, "query_due", b("Hoffie"), {
      meta: { queryId: "q_hoffie_01", itemCode: "I2900", status: "sent", linkedArdDate: pe(o, 3) }
    }),
    de(o, "query_due", b("Rogers"), {
      meta: { queryId: "q_rogers_01", itemCode: "J1550", status: "sent", linkedArdDate: pe(o, 5) }
    }),
    de(o, "query_due", b("Smith"), {
      meta: { queryId: "q_smith_01", itemCode: "O0100", status: "pending", linkedArdDate: pe(o, 6) }
    }),
    // Sunday — quiet, one cert
    de(c, "cert_due", b("Saffle"), {
      meta: { certId: "cert_saffle_01", type: "day_14_recert", status: "pending", bucket: "needs_to_send", sentAt: null }
    })
  ];
}
function xi() {
  const t = (s) => new Date(Date.now() - s * 864e5).toISOString().slice(0, 10), n = (s) => new Date(Date.now() - s * 36e5).toISOString();
  return {
    mdsCoding: {
      count: 4,
      patients: [
        { patientId: b("Stamper").patientId, patientExternalId: b("Stamper").patientExternalId, patientName: b("Stamper").patientName, status: "In Progress", description: "Significant Change", ardDate: t(2), sectionsCompleted: 12, sectionsTotal: 18, daysToCompleteBy: 12, pccAssessmentId: "4860312", assessmentId: "mds_stamper_01" },
        { patientId: b("Clasper").patientId, patientExternalId: b("Clasper").patientExternalId, patientName: b("Clasper").patientName, status: "In Progress", description: "Admission + 5-Day PPS", ardDate: t(5), sectionsCompleted: 16, sectionsTotal: 18, daysToCompleteBy: 9, pccAssessmentId: "4860311", assessmentId: "mds_clasper_01" },
        { patientId: b("Hagerich").patientId, patientExternalId: b("Hagerich").patientExternalId, patientName: b("Hagerich").patientName, status: "In Progress", description: "Quarterly", ardDate: t(12), sectionsCompleted: 15, sectionsTotal: 18, daysToCompleteBy: 2, pccAssessmentId: "4860305", assessmentId: "mds_hagerich_01" },
        { patientId: b("Saffle").patientId, patientExternalId: b("Saffle").patientExternalId, patientName: b("Saffle").patientName, status: "In Progress", description: "Annual + 5-Day PPS", ardDate: t(16), sectionsCompleted: 10, sectionsTotal: 18, daysToCompleteBy: -2, pccAssessmentId: "4860320", assessmentId: "mds_saffle_01" }
      ],
      completedRecently: {
        count: 3,
        windowDays: 7,
        patients: [
          { patientId: b("Coble").patientId, patientExternalId: b("Coble").patientExternalId, patientName: b("Coble").patientName, description: "Quarterly", ardDate: t(10), lockedAt: n(18), pccAssessmentId: "4860301", assessmentId: "mds_coble_done" },
          { patientId: b("Watkins").patientId, patientExternalId: b("Watkins").patientExternalId, patientName: b("Watkins").patientName, description: "Entry", ardDate: t(9), lockedAt: n(40), pccAssessmentId: "4860302", assessmentId: "mds_watkins_done" },
          { patientId: b("Nugent").patientId, patientExternalId: b("Nugent").patientExternalId, patientName: b("Nugent").patientName, description: "Annual", ardDate: t(13), lockedAt: n(96), pccAssessmentId: "4860303", assessmentId: "mds_nugent_done" }
        ]
      }
    },
    carePlansToOpen: {
      count: 2,
      patients: [
        { patientId: b("Clark").patientId, patientExternalId: b("Clark").patientExternalId, patientName: b("Clark").patientName, admitDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), hoursSinceAdmit: 8 },
        { patientId: b("Clasper").patientId, patientExternalId: b("Clasper").patientExternalId, patientName: b("Clasper").patientName, admitDate: new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10), hoursSinceAdmit: 52 }
      ],
      completedRecently: {
        count: 2,
        windowDays: 7,
        patients: [
          { patientId: b("Ashley").patientId, patientExternalId: b("Ashley").patientExternalId, patientName: b("Ashley").patientName, admitDate: t(5), carePlanOpenedAt: n(30), pccCarePlanId: "cp_ashley_01" },
          { patientId: b("Hoffie").patientId, patientExternalId: b("Hoffie").patientExternalId, patientName: b("Hoffie").patientName, admitDate: t(6), carePlanOpenedAt: n(62), pccCarePlanId: "cp_hoffie_01" }
        ]
      }
    },
    carePlansToReview: {
      count: 5,
      patients: [
        { patientId: b("Hagerich").patientId, patientExternalId: b("Hagerich").patientExternalId, patientName: b("Hagerich").patientName, expectedDate: new Date(Date.now() - 864e5).toISOString().slice(0, 10), state: "overdue", pccReviewId: null, pccCarePlanId: "cp_hagerich_01" },
        { patientId: b("Packoski").patientId, patientExternalId: b("Packoski").patientExternalId, patientName: b("Packoski").patientName, expectedDate: new Date(Date.now() + 864e5).toISOString().slice(0, 10), state: "expected", pccReviewId: null, pccCarePlanId: "cp_packoski_01" },
        { patientId: b("Henstreet").patientId, patientExternalId: b("Henstreet").patientExternalId, patientName: b("Henstreet").patientName, expectedDate: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10), state: "in_progress", pccReviewId: "rev_henstreet_01", pccCarePlanId: "cp_henstreet_01" },
        { patientId: b("McCants").patientId, patientExternalId: b("McCants").patientExternalId, patientName: b("McCants").patientName, expectedDate: new Date(Date.now() + 4 * 864e5).toISOString().slice(0, 10), state: "expected", pccReviewId: null, pccCarePlanId: "cp_mccants_01" },
        { patientId: b("Stamper").patientId, patientExternalId: b("Stamper").patientExternalId, patientName: b("Stamper").patientName, expectedDate: new Date(Date.now() + 5 * 864e5).toISOString().slice(0, 10), state: "expected", pccReviewId: null, pccCarePlanId: "cp_stamper_01" }
      ],
      completedRecently: {
        count: 4,
        windowDays: 7,
        patients: [
          { patientId: b("Smith").patientId, patientExternalId: b("Smith").patientExternalId, patientName: b("Smith").patientName, reviewCompletedAt: n(22), pccReviewId: "rev_smith_01", pccCarePlanId: "cp_smith_01" },
          { patientId: b("Bruton").patientId, patientExternalId: b("Bruton").patientExternalId, patientName: b("Bruton").patientName, reviewCompletedAt: n(54), pccReviewId: "rev_bruton_01", pccCarePlanId: "cp_bruton_01" },
          { patientId: b("Rogers").patientId, patientExternalId: b("Rogers").patientExternalId, patientName: b("Rogers").patientName, reviewCompletedAt: n(76), pccReviewId: "rev_rogers_01", pccCarePlanId: "cp_rogers_01" },
          { patientId: b("Schmalzriedt").patientId, patientExternalId: b("Schmalzriedt").patientExternalId, patientName: b("Schmalzriedt").patientName, reviewCompletedAt: n(120), pccReviewId: "rev_schmalz_01", pccCarePlanId: "cp_schmalz_01" }
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
          { patientId: b("Nugent").patientId, patientExternalId: b("Nugent").patientExternalId, patientName: b("Nugent").patientName, queryId: "q_nugent_done_01", itemCode: "I2100", signedAt: n(28) },
          { patientId: b("Bruton").patientId, patientExternalId: b("Bruton").patientExternalId, patientName: b("Bruton").patientName, queryId: "q_bruton_done_01", itemCode: "I5100", signedAt: n(50) },
          { patientId: b("Smith").patientId, patientExternalId: b("Smith").patientExternalId, patientName: b("Smith").patientName, queryId: "q_smith_done_01", itemCode: "J1550", signedAt: n(78) },
          { patientId: b("Clappor").patientId, patientExternalId: b("Clappor").patientExternalId, patientName: b("Clappor").patientName, queryId: "q_clappor_done_01", itemCode: "I0020", signedAt: n(130) }
        ]
      }
    },
    certs: {
      count: 12,
      needsToSend: { count: 4, upcomingCount: 2, overdueCount: 1 },
      awaitingSignature: { count: 8, overdueCount: 2 },
      overdueList: [
        { certId: "cert_ashley_01", patientId: b("Ashley").patientId, patientExternalId: b("Ashley").patientExternalId, patientName: b("Ashley").patientName, type: "day_14_recert", bucket: "awaiting_signature", dueDate: new Date(Date.now() - 4 * 864e5).toISOString().slice(0, 10), daysOverdue: 4 },
        { certId: "cert_hoffie_01", patientId: b("Hoffie").patientId, patientExternalId: b("Hoffie").patientExternalId, patientName: b("Hoffie").patientName, type: "initial", bucket: "awaiting_signature", dueDate: new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10), daysOverdue: 2 },
        { certId: "cert_rogers_01", patientId: b("Rogers").patientId, patientExternalId: b("Rogers").patientExternalId, patientName: b("Rogers").patientName, type: "day_14_recert", bucket: "needs_to_send", dueDate: new Date(Date.now() - 1 * 864e5).toISOString().slice(0, 10), daysOverdue: 1 }
      ],
      completedRecently: {
        count: 5,
        windowDays: 7,
        patients: [
          { certId: "cert_stamper_done_01", patientId: b("Stamper").patientId, patientExternalId: b("Stamper").patientExternalId, patientName: b("Stamper").patientName, type: "day_14_recert", signedAt: n(12) },
          { certId: "cert_mccants_done_01", patientId: b("McCants").patientId, patientExternalId: b("McCants").patientExternalId, patientName: b("McCants").patientName, type: "initial", signedAt: n(36) },
          { certId: "cert_watkins_done_01", patientId: b("Watkins").patientId, patientExternalId: b("Watkins").patientExternalId, patientName: b("Watkins").patientName, type: "day_30_recert", signedAt: n(60) },
          { certId: "cert_clark_done_01", patientId: b("Clark").patientId, patientExternalId: b("Clark").patientExternalId, patientName: b("Clark").patientName, type: "initial", signedAt: n(96) },
          { certId: "cert_packoski_done_01", patientId: b("Packoski").patientId, patientExternalId: b("Packoski").patientExternalId, patientName: b("Packoski").patientName, type: "day_14_recert", signedAt: n(140) }
        ]
      }
    },
    interviewsOwed: {
      count: 6,
      distinctPatientCount: 5,
      byType: { bims: 3, phq: 2, gg: 5, pain: 0 },
      patients: [
        { patientId: b("Stamper").patientId, patientExternalId: b("Stamper").patientExternalId, patientName: b("Stamper").patientName, dueType: "gg", dueDate: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10), status: "in_progress", mdsDescription: "Significant Change", pccAssessmentId: "4860312", assessmentId: "mds_stamper_01", assessmentIds: ["mds_stamper_01"] },
        { patientId: b("Clasper").patientId, patientExternalId: b("Clasper").patientExternalId, patientName: b("Clasper").patientName, dueType: "gg", dueDate: new Date(Date.now() + 1 * 864e5).toISOString().slice(0, 10), status: "in_progress", mdsDescription: "Admission + 5-Day PPS", pccAssessmentId: "4860311", assessmentId: "mds_clasper_01", assessmentIds: ["mds_clasper_01", "mds_clasper_02"] },
        { patientId: b("Saffle").patientId, patientExternalId: b("Saffle").patientExternalId, patientName: b("Saffle").patientName, dueType: "gg", dueDate: new Date(Date.now() - 1 * 864e5).toISOString().slice(0, 10), status: "not_open", mdsDescription: "Annual + 5-Day PPS", pccAssessmentId: "4860320", assessmentId: "mds_saffle_01", assessmentIds: ["mds_saffle_01"] },
        { patientId: b("Hagerich").patientId, patientExternalId: b("Hagerich").patientExternalId, patientName: b("Hagerich").patientName, dueType: "bims", dueDate: new Date(Date.now() + 3 * 864e5).toISOString().slice(0, 10), status: "not_open", mdsDescription: "Quarterly", pccAssessmentId: "4860305", assessmentId: "mds_hagerich_01", assessmentIds: ["mds_hagerich_01"] },
        { patientId: b("Nugent").patientId, patientExternalId: b("Nugent").patientExternalId, patientName: b("Nugent").patientName, dueType: "phq", dueDate: new Date(Date.now() + 4 * 864e5).toISOString().slice(0, 10), status: "not_open", mdsDescription: "5-Day PPS", pccAssessmentId: "4860318", assessmentId: "mds_nugent_01", assessmentIds: ["mds_nugent_01"] }
      ],
      completedRecently: {
        count: 7,
        windowDays: 7,
        patients: [
          { patientId: b("Coble").patientId, patientExternalId: b("Coble").patientExternalId, patientName: b("Coble").patientName, dueType: "gg", mdsDescription: "Quarterly", completedAt: n(18), pccAssessmentId: "4860301", assessmentId: "mds_coble_done" },
          { patientId: b("Coble").patientId, patientExternalId: b("Coble").patientExternalId, patientName: b("Coble").patientName, dueType: "bims", mdsDescription: "Quarterly", completedAt: n(18), pccAssessmentId: "4860301", assessmentId: "mds_coble_done" },
          { patientId: b("Nugent").patientId, patientExternalId: b("Nugent").patientExternalId, patientName: b("Nugent").patientName, dueType: "gg", mdsDescription: "Annual", completedAt: n(96), pccAssessmentId: "4860303", assessmentId: "mds_nugent_done" },
          { patientId: b("Nugent").patientId, patientExternalId: b("Nugent").patientExternalId, patientName: b("Nugent").patientName, dueType: "phq", mdsDescription: "Annual", completedAt: n(96), pccAssessmentId: "4860303", assessmentId: "mds_nugent_done" },
          { patientId: b("Watkins").patientId, patientExternalId: b("Watkins").patientExternalId, patientName: b("Watkins").patientName, dueType: "gg", mdsDescription: "Entry", completedAt: n(40), pccAssessmentId: "4860302", assessmentId: "mds_watkins_done" },
          { patientId: b("Ashley").patientId, patientExternalId: b("Ashley").patientExternalId, patientName: b("Ashley").patientName, dueType: "bims", mdsDescription: "5-Day PPS", completedAt: n(54), pccAssessmentId: "4860304", assessmentId: "mds_ashley_done" },
          { patientId: b("Hoffie").patientId, patientExternalId: b("Hoffie").patientExternalId, patientName: b("Hoffie").patientName, dueType: "gg", mdsDescription: "Quarterly", completedAt: n(140), pccAssessmentId: "4860306", assessmentId: "mds_hoffie_done" }
        ]
      }
    },
    skilledMCR: {
      count: 4,
      patients: [
        b("Clark"),
        b("Stamper"),
        b("Saffle"),
        b("Clappor")
      ].map((s) => ({ patientId: s.patientId, patientExternalId: s.patientExternalId, patientName: s.patientName }))
    },
    skilledManagedCare: {
      count: 3,
      patients: [
        b("Packoski"),
        b("Henstreet"),
        b("Bruton")
      ].map((s) => ({ patientId: s.patientId, patientExternalId: s.patientExternalId, patientName: s.patientName }))
    }
  };
}
const Pi = {
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
function Ti(t, n) {
  if (!n || !t?.answers) return [];
  const s = [], i = n.toLowerCase();
  return t.answers.sections.forEach((a, r) => {
    a.content.forEach((o, c) => {
      o.questions.forEach((l, d) => {
        const u = `${r}:${c}:${d}`, p = l.questionText?.toLowerCase() || "";
        if (l.value && i.includes(l.value.toLowerCase())) {
          s.push(u);
          return;
        }
        if (p && i.includes(p)) {
          s.push(u);
          return;
        }
        l.options?.forEach((m, h) => {
          m.selected && i.includes(m.text.toLowerCase()) && s.push(`${u}:${h}`);
        });
      });
    });
  }), s;
}
function Ai(t, n) {
  const s = Pi[t];
  if (!s)
    return { success: !1, error: `Demo: no UDA fixture for ${t}` };
  const i = t === "demo-nutrition-v3" ? ["0:0:0:0", "0:1:0:0", "0:2:0:0", "0:3:0:0"] : [], a = n ? i.length ? i : Ti(s, n) : [];
  return {
    success: !0,
    data: {
      uda: s,
      matchKeys: a
    }
  };
}
function Mi(t) {
  return new Promise((n) => setTimeout(n, t));
}
function Li() {
  return Mi(50 + Math.random() * 150);
}
function Ei(t) {
  const [n, s] = t.split("?"), i = new URLSearchParams(s || "");
  if (n === "/api/extension/mds/dashboard")
    return { success: !0, data: _e.dashboard };
  if (n === "/api/extension/mds/doc-risks")
    return { success: !0, data: _e.docRisks };
  if (n === "/api/extension/mds/ard-recommendation")
    return { success: !0, data: _e.ardRecommendation };
  if (n === "/api/extension/mds/pdpm-potential") {
    const u = i.get("externalAssessmentId"), p = _e.pdpmPotential[u];
    return p ? { success: !0, data: p } : { success: !1, error: `No PDPM data for assessment ${u}` };
  }
  const a = n.match(/\/api\/extension\/patients\/([^/]+)\/assessments/);
  if (a) {
    const u = a[1], p = _e.patientAssessments[u];
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
    const u = i.get("patientId"), p = _e.certifications || [];
    return { success: !0, data: { certifications: u ? p.filter((h) => h.patientId === u) : p } };
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
    const u = i.get("status"), p = _e.certifications || [];
    return { success: !0, data: { certifications: u ? p.filter((h) => h.status === u) : p } };
  }
  if (n === "/api/extension/planner/week-events") {
    const u = i.get("startDate"), p = i.get("endDate");
    return !u || !p ? { success: !1, error: "Missing required param: startDate or endDate" } : {
      success: !0,
      data: {
        events: Si(u),
        meta: {
          facilityName: i.get("facilityName") || "Demo Facility",
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
        summary: xi(),
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
    const u = d[2], p = i.get("quote") || null;
    return Ai(u, p);
  }
  return console.warn("[DemoMock] Unhandled API endpoint:", n), { success: !1, error: `Demo: unhandled endpoint ${n}` };
}
async function $i(t) {
  switch (await Li(), t.type) {
    case "GET_ORG":
      return { org: "demo-org" };
    case "GET_AUTH_STATE":
      return { authenticated: !0 };
    case "API_REQUEST":
      return Ei(t.endpoint);
    default:
      return console.log("[DemoMock] Unhandled message type:", t.type), {};
  }
}
function Ri() {
  typeof window.chrome > "u" && (window.chrome = {}), window.chrome.runtime || (window.chrome.runtime = {}), window.chrome.runtime.sendMessage = function(t, n) {
    const s = $i(t);
    if (typeof n == "function") {
      s.then(n).catch((i) => {
        console.error("[DemoMock] Error in callback handler:", i), n({ success: !1, error: i.message });
      });
      return;
    }
    return s;
  }, window.chrome.runtime.getURL = function(t) {
    return t.startsWith("lib/") ? `./${t}` : t;
  }, window.chrome.runtime.id = "demo-mock-extension-id", console.log("[DemoMock] Chrome API mocks installed");
}
var Ve, oe, Nt, Sn, We = 0, Hs = [], ce = se, xn = ce.__b, Pn = ce.__r, Tn = ce.diffed, An = ce.__c, Mn = ce.unmount, Ln = ce.__;
function ln(t, n) {
  ce.__h && ce.__h(oe, t, We || n), We = 0;
  var s = oe.__H || (oe.__H = { __: [], __h: [] });
  return t >= s.__.length && s.__.push({}), s.__[t];
}
function v(t) {
  return We = 1, qi(Fs, t);
}
function qi(t, n, s) {
  var i = ln(Ve++, 2);
  if (i.t = t, !i.__c && (i.__ = [Fs(void 0, n), function(c) {
    var l = i.__N ? i.__N[0] : i.__[0], d = i.t(l, c);
    l !== d && (i.__N = [d, i.__[1]], i.__c.setState({}));
  }], i.__c = oe, !oe.__f)) {
    var a = function(c, l, d) {
      if (!i.__c.__H) return !0;
      var u = i.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (u.every(function(m) {
        return !m.__N;
      })) return !r || r.call(this, c, l, d);
      var p = i.__c.props !== c;
      return u.forEach(function(m) {
        if (m.__N) {
          var h = m.__[0];
          m.__ = m.__N, m.__N = void 0, h !== m.__[0] && (p = !0);
        }
      }), r && r.call(this, c, l, d) || p;
    };
    oe.__f = !0;
    var r = oe.shouldComponentUpdate, o = oe.componentWillUpdate;
    oe.componentWillUpdate = function(c, l, d) {
      if (this.__e) {
        var u = r;
        r = void 0, a(c, l, d), r = u;
      }
      o && o.call(this, c, l, d);
    }, oe.shouldComponentUpdate = a;
  }
  return i.__N || i.__;
}
function F(t, n) {
  var s = ln(Ve++, 3);
  !ce.__s && Bs(s.__H, n) && (s.__ = t, s.u = n, oe.__H.__h.push(s));
}
function ee(t) {
  return We = 5, Y(function() {
    return { current: t };
  }, []);
}
function Y(t, n) {
  var s = ln(Ve++, 7);
  return Bs(s.__H, n) && (s.__ = t(), s.__H = n, s.__h = t), s.__;
}
function U(t, n) {
  return We = 8, Y(function() {
    return t;
  }, n);
}
function Oi() {
  for (var t; t = Hs.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(ot), t.__H.__h.forEach(zt), t.__H.__h = [];
  } catch (n) {
    t.__H.__h = [], ce.__e(n, t.__v);
  }
}
ce.__b = function(t) {
  oe = null, xn && xn(t);
}, ce.__ = function(t, n) {
  t && n.__k && n.__k.__m && (t.__m = n.__k.__m), Ln && Ln(t, n);
}, ce.__r = function(t) {
  Pn && Pn(t), Ve = 0;
  var n = (oe = t.__c).__H;
  n && (Nt === oe ? (n.__h = [], oe.__h = [], n.__.forEach(function(s) {
    s.__N && (s.__ = s.__N), s.u = s.__N = void 0;
  })) : (n.__h.forEach(ot), n.__h.forEach(zt), n.__h = [], Ve = 0)), Nt = oe;
}, ce.diffed = function(t) {
  Tn && Tn(t);
  var n = t.__c;
  n && n.__H && (n.__H.__h.length && (Hs.push(n) !== 1 && Sn === ce.requestAnimationFrame || ((Sn = ce.requestAnimationFrame) || Hi)(Oi)), n.__H.__.forEach(function(s) {
    s.u && (s.__H = s.u), s.u = void 0;
  })), Nt = oe = null;
}, ce.__c = function(t, n) {
  n.some(function(s) {
    try {
      s.__h.forEach(ot), s.__h = s.__h.filter(function(i) {
        return !i.__ || zt(i);
      });
    } catch (i) {
      n.some(function(a) {
        a.__h && (a.__h = []);
      }), n = [], ce.__e(i, s.__v);
    }
  }), An && An(t, n);
}, ce.unmount = function(t) {
  Mn && Mn(t);
  var n, s = t.__c;
  s && s.__H && (s.__H.__.forEach(function(i) {
    try {
      ot(i);
    } catch (a) {
      n = a;
    }
  }), s.__H = void 0, n && ce.__e(n, s.__v));
};
var En = typeof requestAnimationFrame == "function";
function Hi(t) {
  var n, s = function() {
    clearTimeout(i), En && cancelAnimationFrame(n), setTimeout(t);
  }, i = setTimeout(s, 35);
  En && (n = requestAnimationFrame(s));
}
function ot(t) {
  var n = oe, s = t.__c;
  typeof s == "function" && (t.__c = void 0, s()), oe = n;
}
function zt(t) {
  var n = oe;
  t.__c = t.__(), oe = n;
}
function Bs(t, n) {
  return !t || t.length !== n.length || n.some(function(s, i) {
    return s !== t[i];
  });
}
function Fs(t, n) {
  return typeof n == "function" ? n(t) : n;
}
function Bi(t) {
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
function jt({ uda: t, matchKeys: n, quoteText: s, onClose: i }) {
  const a = n instanceof Set ? n : new Set(n || []), r = ee(null);
  F(() => {
    if (r.current) {
      const l = setTimeout(() => {
        r.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
      return () => clearTimeout(l);
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
          Bi(t.date)
        ] }),
        /* @__PURE__ */ e("span", { className: "super-uda-viewer__meta-item", children: [
          o,
          " section",
          o !== 1 ? "s" : ""
        ] }),
        a.size > 0 && /* @__PURE__ */ e("span", { className: "super-uda-viewer__meta-matches", children: [
          a.size,
          " match",
          a.size !== 1 ? "es" : ""
        ] })
      ] }),
      i && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "super-uda-viewer__close",
          onClick: i,
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
        a.size > 0 && /* @__PURE__ */ e("span", { className: "super-uda-viewer__section-match-count", children: [
          "(",
          a.size,
          " match",
          a.size !== 1 ? "es" : "",
          ")"
        ] })
      ] }),
      l.content.map((u, p) => /* @__PURE__ */ e("div", { className: "super-uda-viewer__content-group", children: [
        u.sectionTitle && u.sectionTitle !== l.description && /* @__PURE__ */ e("div", { className: "super-uda-viewer__subheader", children: u.sectionTitle }),
        u.questions.map((m, h) => {
          const _ = `${d}:${p}:${h}`, g = a.has(_), f = m.options?.some((C, I) => a.has(`${_}:${I}`)) ?? !1, y = g || f, w = y && !c;
          w && (c = !0);
          const k = m.value ?? m.options?.filter((C) => C.selected).map((C) => C.text).join("; ") ?? "";
          return /* @__PURE__ */ e(
            "div",
            {
              ref: w ? r : void 0,
              className: "super-uda-viewer__row" + (y ? " super-uda-viewer__row--highlighted" : ""),
              children: [
                /* @__PURE__ */ e("div", { className: "super-uda-viewer__row-question", children: m.questionText }),
                /* @__PURE__ */ e("div", { className: "super-uda-viewer__row-answer", children: k || /* @__PURE__ */ e("span", { className: "super-uda-viewer__row-empty", children: "—" }) })
              ]
            },
            h
          );
        })
      ] }, p))
    ] }, d)) : /* @__PURE__ */ e("div", { className: "super-uda-viewer__empty", children: "UDA answers have not been synced for this assessment." }) })
  ] });
}
async function $n(t, n) {
  const s = window.SuperOverlay?.patientId || "2657226", i = new URLSearchParams({
    facilityName: window.SuperOverlay?.facilityName || "SUNNY MEADOWS DEMO FACILITY",
    orgSlug: "demo-org"
  });
  n && i.set("quote", n);
  const a = `/api/extension/patients/${s}/uda/${t}?${i.toString()}`, r = await chrome.runtime.sendMessage({ type: "API_REQUEST", endpoint: a });
  if (!r?.success) throw new Error(r?.error || "Failed to load UDA");
  return r.data;
}
function Fi() {
  window.__DEMO_CERT_DATA = _e.certifications || [], localStorage.setItem("CORE.org_code", "demo-org"), window.getOrg = () => ({ org: "demo-org" }), window.getChatFacilityInfo = () => "SUNNY MEADOWS DEMO FACILITY", window.getChatPatientId = () => "2657226", window.getPatientNameFromPage = () => "Doe, Jane", window.getCurrentParams = () => ({
    facilityName: "SUNNY MEADOWS DEMO FACILITY",
    orgSlug: "demo-org",
    assessmentId: "4860265"
  }), window.QueryAPI = {
    async fetchPractitioners(n, s) {
      return await new Promise((i) => setTimeout(i, 200)), [
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
      const i = s.pdpmCategoryName || s.mdsItemName || s.itemName || n;
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

I am writing to request your clinical assessment regarding ${i} (${n}) for this patient's current MDS assessment.

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
    async sendQuery(n, s, i) {
      return await new Promise((a) => setTimeout(a, 300)), console.log(`[DemoMock] QueryAPI.sendQuery: ${n} → practitioners: ${s.join(", ")}`), { success: !0, sentAt: (/* @__PURE__ */ new Date()).toISOString() };
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
  }, window.renderSplitAdministrations = async (n, s, i, a) => {
    await new Promise((D) => setTimeout(D, 400));
    const r = !s?.includes("tar"), o = r ? "MAR" : "TAR", c = r ? "super-admin-badge--mar" : "super-admin-badge--tar", l = r ? "💊" : "⚡", u = {
      "mar-010": { name: "Aspirin 81mg PO Daily", directions: "Take by mouth once daily with food", startDate: "2025-12-20", endDate: null },
      "mar-012": { name: "Lisinopril 20mg PO Daily", directions: "Take by mouth once daily in the morning", startDate: "2025-12-15", endDate: null },
      "mar-001": { name: "Metformin 500mg PO BID", directions: "Take by mouth twice daily with meals", startDate: "2025-11-01", endDate: null },
      "doc-nutr-004": { name: "Ensure Plus 8 OZ Oral Liquid", directions: "Give 8 oz Ensure Plus by mouth twice daily with lunch and dinner for nutritional supplementation", startDate: "2026-01-22", endDate: null },
      "doc-nutr-003": { name: "Fortified Cereal 6 OZ", directions: "Give 6 oz fortified cereal by mouth once daily with breakfast to increase caloric and protein intake", startDate: "2026-01-22", endDate: null }
    }[s] || { name: "Medication Order", directions: "As directed", startDate: "2025-12-20", endDate: null }, p = [], m = new Date(2026, 0, 27);
    for (let D = 6; D >= 0; D--) {
      const N = new Date(m);
      N.setDate(N.getDate() - D), p.push(N);
    }
    const h = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], _ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], g = (D) => `${_[D.getMonth()]} ${D.getDate()}, ${D.getFullYear()}`, f = `${g(p[0])} - ${g(p[p.length - 1])}`, y = (D) => D ? new Date(D).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "", w = p.map((D) => `
      <th class="super-admin-grid__date-header">
        <div class="super-admin-grid__day">${h[D.getDay()]}</div>
        <div class="super-admin-grid__date">${_[D.getMonth()]} ${D.getDate()}</div>
      </th>
    `).join(""), C = u.name.includes("BID") ? ["0800", "1800"] : ["0800"], I = ["RN-JD", "RN-KM", "RN-TS", "LPN-AB"], P = (D) => {
      const N = parseInt(D.substring(0, 2), 10), S = D.substring(2), E = N >= 12 ? "PM" : "AM";
      return `${N > 12 ? N - 12 : N === 0 ? 12 : N}:${S} ${E}`;
    }, A = C.map((D) => {
      const N = p.map((S, E) => {
        const B = (E + (D === "1800" ? 2 : 0)) % I.length;
        return `<td class="super-admin-grid__cell super-admin-grid__cell--given">
          <span class="super-admin-grid__check">✓</span>
          <span class="super-admin-grid__initials">${I[B]}</span>
        </td>`;
      }).join("");
      return `<tr class="super-admin-grid__row">
        <td class="super-admin-grid__time">${P(D)}</td>
        ${N}
      </tr>`;
    }).join(""), x = C.length * p.length;
    n.innerHTML = `
      <div class="super-split__admin">
        <div class="super-admin-modal__header">
          <div class="super-admin-modal__title-row">
            <span class="super-admin-modal__icon">${l}</span>
            <div class="super-admin-modal__title">
              <span class="super-admin-modal__order-name">${u.name}</span>
              <span class="super-admin-badge ${c}">${o}</span>
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
                  ${w}
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
  }, window.renderSplitNote = async (n, s, i) => {
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
    function o(l) {
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
            ${o(l)}
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
        let g = function() {
          _.innerHTML = o(r.pageContent[u]), h.textContent = `Page ${u} of ${d}`, p.disabled = u <= 1, m.disabled = u >= d;
        };
        var c = g;
        const p = n.querySelector(".super-split-pdf__prev"), m = n.querySelector(".super-split-pdf__next"), h = n.querySelector(".super-split-pdf__page-num"), _ = n.querySelector(".super-split-pdf__paper");
        p.addEventListener("click", () => {
          u > 1 && (u--, g());
        }), m.addEventListener("click", () => {
          u < d && (u++, g());
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
            ${o(l)}
          </div>
          <div class="super-split-pdf__footer">
            <span class="super-split-pdf__page-num">Page 1 of 1</span>
          </div>
        </div>`;
    }
  }, window.renderSplitTherapy = async (n, s, i, a) => {
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
  }, window.renderSplitUda = async (n, s, i) => {
    try {
      const { uda: a, matchKeys: r } = await $n(s, i || null);
      n.innerHTML = "";
      const o = document.createElement("div");
      o.style.cssText = "width:100%;height:100%;display:flex;flex-direction:column;min-height:0;", n.appendChild(o), Ce(
        G(jt, {
          uda: a,
          matchKeys: new Set(r || []),
          quoteText: i || null
        }),
        o
      );
    } catch (a) {
      console.error("[DemoMock] renderSplitUda failed:", a), n.innerHTML = `<div class="cc-pop__viewer-loading"><span>Failed to load: ${a.message}</span></div>`;
    }
  }, window.showUdaModal = async (n, s) => {
    const i = document.createElement("div");
    i.className = "super-uda-modal", i.innerHTML = `
      <div class="super-uda-modal__backdrop"></div>
      <div class="super-uda-modal__container">
        <div class="super-uda-modal__loading">
          <div class="super-uda-modal__loading-spinner"></div>
          <span>Loading assessment...</span>
        </div>
      </div>
    `, document.body.appendChild(i), document.body.style.overflow = "hidden";
    const a = i.querySelector(".super-uda-modal__container"), r = () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", o), i.remove();
    }, o = (c) => {
      c.key === "Escape" && r();
    };
    document.addEventListener("keydown", o), i.querySelector(".super-uda-modal__backdrop").addEventListener("click", r);
    try {
      const { uda: c, matchKeys: l } = await $n(n, s || null);
      a.innerHTML = "", Ce(
        G(jt, {
          uda: c,
          matchKeys: new Set(l || []),
          quoteText: s || null,
          onClose: r
        }),
        a
      );
    } catch (c) {
      a.innerHTML = `<div class="super-uda-modal__error">${c.message || "Failed to load UDA"}</div>`;
    }
  }, window.QuerySendModal = {
    show(n) {
      console.log("[DemoMock] QuerySendModal.show (stub):", n?.mdsItem);
    }
  }, window.CertAPI = {
    async sendCert(n, s, i) {
      return await new Promise((a) => setTimeout(a, 300)), console.log("[DemoMock] CertAPI.sendCert:", n), t("success", "Certification sent successfully"), { success: !0 };
    },
    async skipCert(n, s) {
      return await new Promise((i) => setTimeout(i, 200)), console.log("[DemoMock] CertAPI.skipCert:", n), t("info", "Certification skipped"), { success: !0 };
    },
    async delayCert(n, s) {
      return await new Promise((i) => setTimeout(i, 200)), console.log("[DemoMock] CertAPI.delayCert:", n), t("info", "Certification delayed"), { success: !0 };
    },
    async saveClinicalReason(n, s) {
      return await new Promise((i) => setTimeout(i, 200)), console.log("[DemoMock] CertAPI.saveClinicalReason:", n, s), { success: !0 };
    },
    async unskipCert(n) {
      return await new Promise((s) => setTimeout(s, 200)), console.log("[DemoMock] CertAPI.unskipCert:", n), t("info", "Certification unskipped"), { success: !0 };
    },
    async fetchPractitioners(n, s) {
      return await new Promise((i) => setTimeout(i, 200)), [
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
      return await new Promise((i) => setTimeout(i, 200)), { pending: 4, overdue: 1, dueSoon: 2, signedLast7Days: 3 };
    },
    async fetchCertifications(n, s, i) {
      return await new Promise((a) => setTimeout(a, 200)), window.__DEMO_CERT_DATA || [];
    },
    async fetchByPatient(n, s, i) {
      return await new Promise((r) => setTimeout(r, 200)), (window.__DEMO_CERT_DATA || []).filter((r) => r.patientId === i);
    },
    async fetchSendHistory(n) {
      return await new Promise((s) => setTimeout(s, 200)), [
        { id: "send-1", certId: n, sentAt: new Date(Date.now() - 3 * 864e5).toISOString(), practitioner: { name: "Dr. Demo Provider" }, method: "fax" }
      ];
    }
  }, window.CONFIG = { DEV_MODE: !0 }, console.log("[DemoMock] Global mocks installed");
}
function Ui({ facilityName: t, orgSlug: n }) {
  const [s, i] = v(null), [a, r] = v(!0), [o, c] = v(null), l = U(async () => {
    r(!0), c(null);
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
      i(u.data);
    } catch (d) {
      console.error("[MDSCommandCenter] Failed to fetch dashboard:", d), c(d.message || "Failed to load dashboard");
    } finally {
      r(!1);
    }
  }, [t, n]);
  return F(() => {
    l();
  }, [l]), { data: s, loading: a, error: o, retry: l };
}
function Gi({ facilityName: t, orgSlug: n, enabled: s = !0 }) {
  const [i, a] = v(null), [r, o] = v(!1), [c, l] = v(null);
  return F(() => {
    if (!s || !t) {
      a(null), l(null);
      return;
    }
    let d = !1;
    o(!0), l(null);
    async function u() {
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
        d || a(g.data);
      } catch (p) {
        d || l(p.message || "Failed to load MDS schedule");
      } finally {
        d || o(!1);
      }
    }
    return u(), () => {
      d = !0;
    };
  }, [t, n, s]), { data: i, loading: r, error: c };
}
function Vi({ facilityName: t, orgSlug: n, enabled: s = !1 }) {
  const [i, a] = v(null), [r, o] = v(!1), [c, l] = v(null), d = U(async () => {
    if (!(!s || !t || !n)) {
      o(!0), l(null);
      try {
        const u = new URLSearchParams({ facilityName: t, orgSlug: n }), p = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/certifications/dashboard?${u}`,
          options: { method: "GET" }
        });
        if (!p.success) {
          a(null);
          return;
        }
        a(p.data || null);
      } catch (u) {
        console.warn("[Certifications] Dashboard unavailable:", u), a(null);
      } finally {
        o(!1);
      }
    }
  }, [t, n, s]);
  return F(() => {
    d();
  }, [d]), { data: i, loading: r, error: c, retry: d };
}
function Kt({ facilityName: t, orgSlug: n, status: s, patientId: i }) {
  const [a, r] = v([]), [o, c] = v(!0), [l, d] = v(null), u = U(async () => {
    if (!(!t || !n)) {
      c(!0), d(null);
      try {
        const p = new URLSearchParams({ facilityName: t, orgSlug: n });
        s && p.set("status", s), i && p.set("patientId", i);
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
        c(!1);
      }
    }
  }, [t, n, s, i]);
  return F(() => {
    u();
  }, [u]), { certs: a, loading: o, error: l, refetch: u };
}
function ct({
  options: t = [],
  value: n,
  onChange: s,
  placeholder: i = "Select…",
  size: a = "default",
  searchable: r = !1,
  searchPlaceholder: o = "Search…",
  className: c = "",
  ariaLabel: l,
  align: d = "left"
}) {
  const [u, p] = v(!1), [m, h] = v(""), [_, g] = v(-1), f = ee(null), y = ee(null), w = ee(null), k = t.find((x) => x.value === n) || null;
  F(() => {
    if (!u) return;
    const x = (D) => {
      f.current && !f.current.contains(D.target) && p(!1);
    };
    return document.addEventListener("mousedown", x, !0), () => document.removeEventListener("mousedown", x, !0);
  }, [u]), F(() => {
    u && (h(""), g(-1), r && y.current && requestAnimationFrame(() => y.current?.focus({ preventScroll: !0 })));
  }, [u, r]);
  const C = m.toLowerCase(), I = m ? t.filter(
    (x) => x.label.toLowerCase().includes(C) || x.subtitle && x.subtitle.toLowerCase().includes(C) || x.badge && x.badge.toLowerCase().includes(C)
  ) : t, P = U((x) => {
    if (!u && (x.key === "Enter" || x.key === " " || x.key === "ArrowDown")) {
      x.preventDefault(), p(!0);
      return;
    }
    if (u)
      switch (x.key) {
        case "ArrowDown":
          x.preventDefault(), g((D) => Math.min(D + 1, I.length - 1));
          break;
        case "ArrowUp":
          x.preventDefault(), g((D) => Math.max(D - 1, 0));
          break;
        case "Enter":
          x.preventDefault(), _ >= 0 && I[_] && (s(I[_].value), p(!1));
          break;
        case "Escape":
          x.preventDefault(), p(!1);
          break;
        case "Tab":
          p(!1);
          break;
      }
  }, [u, _, I, s]);
  return F(() => {
    if (_ < 0 || !w.current) return;
    w.current.children[_]?.scrollIntoView({ block: "nearest" });
  }, [_]), /* @__PURE__ */ e(
    "div",
    {
      class: `ss__root${a === "compact" ? " ss__root--compact" : ""} ${c}`,
      ref: f,
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
              /* @__PURE__ */ e("span", { class: "ss__trigger-text", children: k ? k.label : /* @__PURE__ */ e("span", { class: "ss__placeholder", children: i }) }),
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
                placeholder: o,
                value: m,
                onInput: (x) => {
                  h(x.target.value), g(-1);
                },
                autocomplete: "off"
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { class: "ss__list", ref: w, children: [
            I.map((x, D) => {
              const N = x.value === n;
              return /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  class: `ss__option${N ? " ss__option--active" : ""}${D === _ ? " ss__option--hl" : ""}`,
                  role: "option",
                  "aria-selected": N,
                  onClick: () => {
                    s(x.value), p(!1);
                  },
                  onMouseEnter: () => g(D),
                  children: [
                    /* @__PURE__ */ e("div", { class: "ss__option-body", children: [
                      /* @__PURE__ */ e("span", { class: "ss__option-label", children: x.label }),
                      x.subtitle && /* @__PURE__ */ e("span", { class: "ss__option-sub", children: x.subtitle })
                    ] }),
                    x.badge && /* @__PURE__ */ e("span", { class: "ss__option-badge", children: x.badge }),
                    N && /* @__PURE__ */ e("svg", { class: "ss__check", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 7L6 10L11 4", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                  ]
                },
                x.value
              );
            }),
            I.length === 0 && /* @__PURE__ */ e("div", { class: "ss__empty", children: "No matches" })
          ] })
        ] })
      ]
    }
  );
}
const Wi = [
  { value: "all", label: "All", color: null },
  { value: "overdue", label: "Overdue", color: "#ef4444" },
  { value: "urgent", label: "Urgent", color: "#f97316" },
  { value: "approaching", label: "Approaching", color: "#eab308" },
  { value: "on_track", label: "On Track", color: "#22c55e" }
];
function St({ value: t, label: n, highlight: s }) {
  return /* @__PURE__ */ e("span", { class: `mds-cc__stat${s ? " mds-cc__stat--highlight" : ""}`, children: [
    /* @__PURE__ */ e("strong", { children: t }),
    " ",
    n
  ] });
}
function Qi({
  summary: t,
  facilityName: n,
  onClose: s,
  activeView: i,
  onViewChange: a,
  viewMode: r,
  onViewModeChange: o,
  isFullscreen: c,
  onToggleFullscreen: l,
  queryCount: d,
  certCount: u,
  certsEnabled: p,
  complianceGaps: m,
  payerFilter: h,
  onPayerFilterChange: _,
  classFilter: g,
  onClassFilterChange: f,
  focusFilter: y,
  onFocusFilterChange: w,
  urgencyFilter: k,
  onUrgencyFilterChange: C
}) {
  const I = t?.total ?? 0, P = t?.urgent ?? 0, A = t?.hippsImprovements ?? t?.withHippsImprovements ?? 0, x = t?.pendingQueries ?? t?.pendingQueriesCount ?? 0, D = t?.totalRevenueOpportunityPerDay ?? 0;
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
            class: `mds-cc__icon-btn${c ? " mds-cc__icon-btn--exit" : ""}`,
            onClick: l,
            "aria-label": c ? "Exit fullscreen" : "Enter fullscreen",
            title: c ? "Exit fullscreen" : "Fullscreen",
            children: c ? /* @__PURE__ */ e(J, { children: [
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
    i !== "planner" && /* @__PURE__ */ e("div", { class: "mds-cc__stats-strip", children: [
      /* @__PURE__ */ e(St, { value: I, label: "assessments" }),
      /* @__PURE__ */ e("span", { class: "mds-cc__stats-sep", children: "|" }),
      /* @__PURE__ */ e(St, { value: P, label: "urgent", highlight: P > 0 }),
      D > 0 && /* @__PURE__ */ e(J, { children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__stats-sep", children: "|" }),
        /* @__PURE__ */ e("span", { class: "mds-cc__stat mds-cc__stat--revenue", children: [
          /* @__PURE__ */ e("strong", { children: [
            "$",
            Math.round(D),
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
      /* @__PURE__ */ e(St, { value: x, label: "pending queries", highlight: x > 0 })
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-cc__view-switcher", children: [
      /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${i === "planner" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => a("planner"),
          children: "Planner"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${i === "assessments" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => a("assessments"),
          children: "Assessments"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${i === "queries" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => a("queries"),
          children: [
            "Queries",
            d > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__view-tab-badge", children: d })
          ]
        }
      ),
      p && /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${i === "certs" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => a("certs"),
          children: [
            "Certs",
            u > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__view-tab-badge", children: u })
          ]
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__view-tab${i === "compliance" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => a("compliance"),
          children: [
            "Care Plan",
            m > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__view-tab-badge mds-cc__view-tab-badge--amber", children: m })
          ]
        }
      )
    ] }),
    i === "assessments" && /* @__PURE__ */ e("div", { class: "mds-cc__filter-row", children: [
      r !== "calendar" && /* @__PURE__ */ e(J, { children: [
        /* @__PURE__ */ e(
          ct,
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
          ct,
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
          ct,
          {
            size: "compact",
            options: [
              { value: "all", label: "All Assessments" },
              { value: "revenue", label: "Revenue Opportunities" },
              { value: "issues", label: "Has Issues" }
            ],
            value: y,
            onChange: w,
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
    i === "assessments" && r !== "calendar" && C && /* @__PURE__ */ e("div", { class: "mds-cc__urgency-pills", children: [
      Wi.map((N) => {
        const S = k === N.value;
        return /* @__PURE__ */ e(
          "button",
          {
            class: `mds-cc__urgency-pill${S ? " mds-cc__urgency-pill--active" : ""}`,
            style: S && N.color ? { background: N.color, borderColor: N.color, color: "#fff" } : void 0,
            onClick: () => C(N.value),
            children: [
              N.color && /* @__PURE__ */ e("span", { class: "mds-cc__urgency-pill-dot", style: { background: S ? "#fff" : N.color } }),
              N.label
            ]
          },
          N.value
        );
      }),
      w && /* @__PURE__ */ e(
        "button",
        {
          class: `mds-cc__urgency-pill mds-cc__revenue-pill${y === "revenue" ? " mds-cc__revenue-pill--active" : ""}`,
          onClick: () => w(y === "revenue" ? "all" : "revenue"),
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
const zi = {
  initial: { label: "Initial", cls: "cert__type-badge--initial" },
  day_14_recert: { label: "Day 14", cls: "cert__type-badge--recert" },
  day_30_recert: { label: "Day 30", cls: "cert__type-badge--recert" }
};
function pn({ type: t }) {
  const n = zi[t];
  return n ? /* @__PURE__ */ e("span", { class: `cert__type-badge ${n.cls}`, children: n.label }) : null;
}
function ji(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function Ki(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Us({ status: t, isDelayed: n, dueDate: s, signedAt: i }) {
  const a = ji(s), r = a !== null && a < 0, o = a !== null && a >= 0 && a <= 3;
  if ((n || t === "delayed") && r) {
    const c = Math.abs(a);
    return /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--overdue", children: [
      c,
      " DAY",
      c !== 1 ? "S" : "",
      " OVERDUE"
    ] });
  }
  if (r && (t === "pending" || t === "sent")) {
    const c = Math.abs(a);
    return /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--overdue", children: [
      c,
      " DAY",
      c !== 1 ? "S" : "",
      " OVERDUE"
    ] });
  }
  if (o && t !== "signed" && t !== "skipped") {
    const c = a === 0 ? "DUE TODAY" : `DUE IN ${a} DAY${a !== 1 ? "S" : ""}`;
    return /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--due-soon", children: c });
  }
  return t === "sent" ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--awaiting", children: "AWAITING SIGNATURE" }) : t === "signed" ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--signed", children: [
    "Signed ",
    Ki(i)
  ] }) : t === "delayed" || n ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--delayed", children: "DELAYED" }) : t === "skipped" ? /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--skipped", children: "SKIPPED" }) : /* @__PURE__ */ e("span", { class: "cert__status-badge cert__status-badge--pending", children: "PENDING" });
}
function Ji({ payerType: t }) {
  return t !== "managed_care" ? null : /* @__PURE__ */ e("span", { class: "cert__ma-badge", children: "MA" });
}
function Yi(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Zi(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
function Gs(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function Xi(t) {
  const n = Gs(t.dueDate), s = n !== null && n < 0, i = t.sends?.length > 0;
  return t.status === "skipped" ? { label: "Unskip", variant: "ghost", action: "unskip" } : t.status === "signed" ? null : s ? { label: i ? "Resend" : "Send", variant: "destructive", action: "send" } : t.status === "delayed" ? { label: i ? "Resend" : "Send", variant: "destructive", action: "send" } : i ? { label: "Resend", variant: "outline", action: "send" } : { label: "Send", variant: "primary", action: "send" };
}
function ea({ sends: t }) {
  if (!t || t.length === 0) return null;
  const n = t.length === 1 ? `Sent to ${t[0].practitionerName}` : `Sent ${t.length} times`;
  return /* @__PURE__ */ e("span", { class: "cert__row-meta cert__row-meta--link cert__sends-summary", children: n });
}
function ta({ sends: t }) {
  return /* @__PURE__ */ e("div", { class: "cert__sends-detail", children: t.map((n, s) => /* @__PURE__ */ e("div", { class: "cert__sends-detail-row", children: [
    /* @__PURE__ */ e("span", { class: "cert__sends-detail-name", children: [
      n.practitionerName,
      n.practitionerTitle ? `, ${n.practitionerTitle}` : ""
    ] }),
    /* @__PURE__ */ e("span", { class: "cert__sends-detail-date", children: Zi(n.sentAt) }),
    n.smsStatus && /* @__PURE__ */ e("span", { class: `cert__sends-detail-status cert__sends-detail-status--${n.smsStatus}`, children: n.smsStatus })
  ] }, s)) });
}
function Rn({ cert: t, compact: n, onSend: s, onSkip: i, onUnskip: a, onDelay: r, onEditReason: o, onViewPractitioner: c }) {
  const [l, d] = v(!1), [u, p] = v(!1), m = ee(null);
  F(() => {
    if (!l) return;
    const D = (N) => {
      m.current && !m.current.contains(N.target) && d(!1);
    };
    return document.addEventListener("click", D, !0), () => document.removeEventListener("click", D, !0);
  }, [l]);
  const h = Xi(t), _ = t.type === "day_14_recert" || t.type === "day_30_recert", g = t.status !== "skipped" && t.status !== "signed", f = t.status === "pending" && !t.isDelayed && t.status !== "signed", y = _ && t.status !== "signed", w = t.sends?.length > 0, k = Gs(t.dueDate), C = k !== null && k < 0, I = k !== null && k >= 0 && k <= 3;
  let P = "";
  t.status === "signed" ? P = " cert__row--signed" : t.status === "skipped" ? P = " cert__row--skipped" : C || t.isDelayed ? P = " cert__row--overdue" : I && (P = " cert__row--due-soon");
  function A(D) {
    D.stopPropagation(), h && (h.action === "send" && s?.(t), h.action === "unskip" && a?.(t));
  }
  function x(D) {
    d(!1), D === "skip" && i?.(t), D === "delay" && r?.(t), D === "editReason" && o?.(t);
  }
  return /* @__PURE__ */ e("div", { class: `cert__row${P}`, children: [
    /* @__PURE__ */ e("div", { class: "cert__row-top", children: [
      /* @__PURE__ */ e("div", { class: "cert__row-left", children: [
        /* @__PURE__ */ e(pn, { type: t.type }),
        !n && /* @__PURE__ */ e("span", { class: "cert__row-patient", children: t.patientName }),
        !n && /* @__PURE__ */ e(Ji, { payerType: t.payerType })
      ] }),
      /* @__PURE__ */ e("div", { class: "cert__row-right", children: [
        /* @__PURE__ */ e(
          Us,
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
        (g || f || y) && /* @__PURE__ */ e("div", { class: "cert__row-menu-container", ref: m, children: [
          /* @__PURE__ */ e(
            "button",
            {
              class: "cert__row-menu-btn",
              onClick: (D) => {
                D.stopPropagation(), d(!l);
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
            g && /* @__PURE__ */ e("button", { class: "cert__row-menu-item", onClick: () => x("skip"), children: "Skip Certification" }),
            f && /* @__PURE__ */ e("button", { class: "cert__row-menu-item", onClick: () => x("delay"), children: "Mark as Delayed" }),
            y && /* @__PURE__ */ e("button", { class: "cert__row-menu-item", onClick: () => x("editReason"), children: "Edit Clinical Reason" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__row-bottom", children: [
      t.dueDate && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Due ",
        Yi(t.dueDate)
      ] }),
      !n && t.currentMedicareDay != null && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Medicare Day ",
        t.currentMedicareDay
      ] }),
      w && /* @__PURE__ */ e("span", { onClick: (D) => {
        D.stopPropagation(), p(!u);
      }, children: /* @__PURE__ */ e(ea, { sends: t.sends }) }),
      t.signedByName && /* @__PURE__ */ e(
        "span",
        {
          class: `cert__row-meta${t.signedByPractitionerId && c ? " cert__row-meta--link" : ""}`,
          onClick: t.signedByPractitionerId && c ? (D) => {
            D.stopPropagation(), c(t.signedByPractitionerId);
          } : void 0,
          children: [
            t.signedByName,
            t.signedByTitle ? `, ${t.signedByTitle}` : ""
          ]
        }
      )
    ] }),
    u && w && /* @__PURE__ */ e(ta, { sends: t.sends })
  ] });
}
function na({ payerType: t }) {
  const n = t === "managed_care";
  return /* @__PURE__ */ e("span", { class: `cert__stay-type-badge${n ? " cert__stay-type-badge--managed" : ""}`, children: n ? "Managed" : "Med A" });
}
function sa(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Jt(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
const ia = ["initial", "day_14_recert", "day_30_recert"], aa = { initial: "I", day_14_recert: "14", day_30_recert: "30" };
function ra(t) {
  if (!t) return "empty";
  const n = Jt(t.dueDate), s = n !== null && n < 0;
  return t.status === "signed" ? "signed" : t.status === "skipped" ? "skipped" : s || t.isDelayed ? "overdue" : t.status === "sent" ? "sent" : n !== null && n >= 0 && n <= 3 ? "due-soon" : "pending";
}
function oa({ allCerts: t }) {
  const n = {};
  for (const s of t)
    n[s.type] = s;
  return /* @__PURE__ */ e("div", { class: "cert__chain-indicator", children: ia.map((s, i) => {
    const a = n[s], r = ra(a);
    return /* @__PURE__ */ e("span", { class: "cert__chain-item", children: [
      i > 0 && /* @__PURE__ */ e("span", { class: "cert__chain-line" }),
      /* @__PURE__ */ e("span", { class: `cert__chain-dot cert__chain-dot--${r}` }),
      /* @__PURE__ */ e("span", { class: `cert__chain-label cert__chain-label--${r}`, children: aa[s] })
    ] }, s);
  }) });
}
function ca({
  stayId: t,
  displayCerts: n,
  historyCerts: s,
  allCerts: i,
  onSend: a,
  onSkip: r,
  onDelay: o,
  onUnskip: c,
  onEditReason: l,
  onViewPractitioner: d
}) {
  const [u, p] = v(!1), m = i[0], h = m.patientName, _ = m.payerType, g = m.currentMedicareDay, f = m.partAStartDate, y = n.some((C) => {
    const I = Jt(C.dueDate);
    return I !== null && I < 0 || C.isDelayed;
  }), w = !y && n.some((C) => {
    const I = Jt(C.dueDate);
    return I !== null && I >= 0 && I <= 3;
  });
  let k = "";
  return y ? k = " cert__stay-card--overdue" : w && (k = " cert__stay-card--due-soon"), /* @__PURE__ */ e("div", { class: `cert__stay-card${k}`, children: [
    /* @__PURE__ */ e("div", { class: "cert__stay-header", children: [
      /* @__PURE__ */ e("div", { class: "cert__stay-header-left", children: [
        /* @__PURE__ */ e("span", { class: "cert__stay-patient", children: h }),
        /* @__PURE__ */ e(na, { payerType: _ }),
        /* @__PURE__ */ e(oa, { allCerts: i })
      ] }),
      /* @__PURE__ */ e("div", { class: "cert__stay-header-right", children: [
        g != null && /* @__PURE__ */ e("span", { class: "cert__stay-meta", children: [
          "Day ",
          g
        ] }),
        f && /* @__PURE__ */ e("span", { class: "cert__stay-meta", children: sa(f) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__stay-certs", children: n.map((C) => /* @__PURE__ */ e(
      Rn,
      {
        cert: C,
        compact: !0,
        onSend: a,
        onSkip: r,
        onDelay: o,
        onUnskip: c,
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
        Rn,
        {
          cert: C,
          compact: !0,
          onSend: a,
          onSkip: r,
          onDelay: o,
          onUnskip: c,
          onEditReason: l,
          onViewPractitioner: d
        },
        C.id
      )) })
    ] })
  ] });
}
function wt({ isOpen: t, onClose: n, title: s, subtitle: i, children: a, actions: r = [] }) {
  const o = ee(null);
  return F(() => {
    if (!t) return;
    const c = (l) => {
      l.key === "Escape" && n();
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
            i && /* @__PURE__ */ e("span", { class: "cm__subtitle", children: i })
          ] }),
          /* @__PURE__ */ e("button", { class: "cm__close", onClick: n, "aria-label": "Close", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", children: /* @__PURE__ */ e("path", { d: "M1 1l12 12M13 1L1 13" }) }) })
        ] }),
        /* @__PURE__ */ e("div", { class: "cm__body", children: a }),
        r.length > 0 && /* @__PURE__ */ e("div", { class: "cm__footer", children: r.map((c, l) => /* @__PURE__ */ e(
          "button",
          {
            class: `cm__btn cm__btn--${c.variant || "secondary"}`,
            onClick: c.onClick,
            disabled: c.disabled,
            children: c.label
          },
          l
        )) })
      ] })
    }
  ) : null;
}
const da = [
  { value: "home_health", label: "Home Health Agency" },
  { value: "facility_care", label: "Facility Care" },
  { value: "other", label: "Other" }
];
function Vs(t) {
  return t ? t === "Home Health Agency" ? { option: "home_health", otherText: "" } : t === "Facility Care" ? { option: "facility_care", otherText: "" } : t.startsWith("Other: ") ? { option: "other", otherText: t.slice(7) } : { option: "other", otherText: t } : { option: "", otherText: "" };
}
function Ws(t, n) {
  return t === "home_health" ? "Home Health Agency" : t === "facility_care" ? "Facility Care" : t === "other" ? `Other: ${n}` : "";
}
function Yt(t, n) {
  return t ? t === "other" ? n.trim().length > 0 : !0 : !1;
}
function Qs({ option: t, otherText: n, onOptionChange: s, onOtherTextChange: i }) {
  return /* @__PURE__ */ e("div", { class: "cm-discharge", children: [
    da.map((a) => /* @__PURE__ */ e(
      "label",
      {
        class: `cm-discharge__option${t === a.value ? " cm-discharge__option--selected" : ""}`,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "radio",
              class: "cm-discharge__radio",
              name: "dischargePlan",
              value: a.value,
              checked: t === a.value,
              onChange: () => s(a.value)
            }
          ),
          /* @__PURE__ */ e("span", { class: "cm-discharge__dot" }),
          /* @__PURE__ */ e("span", { class: "cm-discharge__label", children: a.label })
        ]
      },
      a.value
    )),
    t === "other" && /* @__PURE__ */ e(
      "input",
      {
        class: "cm-input cm-discharge__other-input",
        type: "text",
        value: n,
        onInput: (a) => i(a.target.value),
        placeholder: "e.g., Assisted living, long-term care, hospice...",
        autoFocus: !0
      }
    )
  ] });
}
function zs({ isOpen: t, onClose: n, cert: s, facilityName: i, orgSlug: a, onSent: r }) {
  const [o, c] = v(""), [l, d] = v(30), [u, p] = v(""), [m, h] = v(""), [_, g] = v(""), [f, y] = v([]), [w, k] = v(!1), [C, I] = v(/* @__PURE__ */ new Set()), [P, A] = v(!1), x = s?.type === "day_14_recert" || s?.type === "day_30_recert", D = s?.isDelayed, N = s?.type === "initial" ? "Initial" : s?.type === "day_14_recert" ? "Day 14 Recert" : "Day 30 Recert";
  F(() => {
    if (!t || !s) return;
    c(s.clinicalReason || ""), d(s.estimatedDays || 30);
    const q = Vs(s.planForDischarge);
    p(q.option), h(q.otherText), g(s.delayReason || ""), I(/* @__PURE__ */ new Set()), k(!0), window.CertAPI.fetchPractitioners(i, a).then((L) => y(L)).catch((L) => console.error("[Certifications] Failed to load practitioners:", L)).finally(() => k(!1));
  }, [t, s?.id]);
  function S() {
    if (C.size === 0 || x && !o.trim() || x && !Yt(u, m) || D && !_.trim()) return;
    A(!0);
    const q = Ws(u, m);
    (x ? window.CertAPI.saveClinicalReason(s.id, { clinicalReason: o, estimatedDays: l, planForDischarge: q }) : Promise.resolve()).then(() => window.CertAPI.sendCert(s.id, [...C], D ? _ : void 0)).then(() => {
      const O = f.filter((j) => C.has(j.id)).map((j) => `${j.firstName} ${j.lastName}`), Z = O.length <= 2 ? O.join(" & ") : `${O.length} practitioners`;
      window.SuperToast?.success?.(`${N} for ${s.patientName} sent to ${Z}`), r?.(), n();
    }).catch((O) => {
      console.error("[Certifications] Failed to send:", O), window.SuperToast?.error?.("Failed to send certification");
    }).finally(() => A(!1));
  }
  function E(q) {
    I((L) => {
      const O = new Set(L);
      return O.has(q) ? O.delete(q) : O.add(q), O;
    });
  }
  function B() {
    I(
      (q) => q.size === f.length ? /* @__PURE__ */ new Set() : new Set(f.map((L) => L.id))
    );
  }
  if (!s) return null;
  const M = C.size > 0 && (!x || o.trim()) && (!x || Yt(u, m)) && (!D || _.trim()) && !P;
  return /* @__PURE__ */ e(
    wt,
    {
      isOpen: t,
      onClose: n,
      title: "Send Certification",
      subtitle: `${s.patientName} · ${N}`,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        {
          label: P ? "Sending..." : `Send to ${C.size} practitioner${C.size !== 1 ? "s" : ""}`,
          variant: "primary",
          onClick: S,
          disabled: !M
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
              onInput: (q) => c(q.target.value),
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
                  onInput: (q) => d(parseInt(q.target.value) || 30)
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
            Qs,
            {
              option: u,
              otherText: m,
              onOptionChange: p,
              onOtherTextChange: h
            }
          )
        ] }),
        D && /* @__PURE__ */ e("div", { class: "cm-section cm-section--warn", children: [
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
              onInput: (q) => g(q.target.value),
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
          s.sends.map((q) => q.practitionerName).join(", ")
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
              f.length
            ] })
          ] }),
          w ? /* @__PURE__ */ e("div", { class: "cm-loading", children: [
            /* @__PURE__ */ e("div", { class: "cm-loading__spinner" }),
            "Loading practitioners..."
          ] }) : /* @__PURE__ */ e("div", { class: "cm-practitioners", children: [
            /* @__PURE__ */ e("label", { class: "cm-pract cm-pract--all", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  class: "cm-check",
                  checked: C.size === f.length && f.length > 0,
                  onChange: B
                }
              ),
              /* @__PURE__ */ e("span", { class: "cm-check-box" }),
              /* @__PURE__ */ e("span", { class: "cm-pract__label", children: "Select all" })
            ] }),
            f.map((q) => /* @__PURE__ */ e("label", { class: `cm-pract${C.has(q.id) ? " cm-pract--selected" : ""}`, children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  class: "cm-check",
                  checked: C.has(q.id),
                  onChange: () => E(q.id)
                }
              ),
              /* @__PURE__ */ e("span", { class: "cm-check-box" }),
              /* @__PURE__ */ e("span", { class: "cm-pract__label", children: [
                q.firstName,
                " ",
                q.lastName,
                q.title && /* @__PURE__ */ e("span", { class: "cm-pract__title", children: q.title })
              ] })
            ] }, q.id))
          ] })
        ] })
      ]
    }
  );
}
function js({ isOpen: t, onClose: n, cert: s, onSkipped: i }) {
  const [a, r] = v(""), [o, c] = v(!1);
  function l() {
    a.trim() && (c(!0), i(a).then(() => {
      r(""), n();
    }).catch(() => c(!1)));
  }
  return /* @__PURE__ */ e(
    wt,
    {
      isOpen: t,
      onClose: n,
      title: "Skip Certification",
      subtitle: s?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        { label: o ? "Skipping..." : "Skip", variant: "primary", onClick: l, disabled: !a.trim() || o }
      ],
      children: /* @__PURE__ */ e("div", { class: "cm-section", children: [
        /* @__PURE__ */ e("div", { class: "cm-section__head", children: /* @__PURE__ */ e("span", { class: "cm-section__label", children: "Reason for Skipping" }) }),
        /* @__PURE__ */ e(
          "textarea",
          {
            class: "cm-input cm-input--textarea",
            rows: 3,
            value: a,
            onInput: (d) => r(d.target.value),
            placeholder: "Why is this certification being skipped?"
          }
        )
      ] })
    }
  );
}
function la({ isOpen: t, onClose: n, cert: s, onSaved: i }) {
  const [a, r] = v(""), [o, c] = v(30), [l, d] = v(""), [u, p] = v(""), [m, h] = v(!1);
  F(() => {
    if (t && s) {
      r(s.clinicalReason || ""), c(s.estimatedDays || 30);
      const f = Vs(s.planForDischarge);
      d(f.option), p(f.otherText);
    }
  }, [t, s?.id]);
  const _ = a.trim() && Yt(l, u) && !m;
  function g() {
    if (!_) return;
    h(!0);
    const f = Ws(l, u);
    i({ clinicalReason: a, estimatedDays: o, planForDischarge: f }).then(() => n()).catch(() => h(!1));
  }
  return /* @__PURE__ */ e(
    wt,
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
            value: a,
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
          Qs,
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
function Ks({ isOpen: t, onClose: n, cert: s, onDelayed: i }) {
  const [a, r] = v(""), [o, c] = v(!1);
  function l() {
    a.trim() && (c(!0), i(a).then(() => {
      r(""), n();
    }).catch(() => c(!1)));
  }
  return /* @__PURE__ */ e(
    wt,
    {
      isOpen: t,
      onClose: n,
      title: "Mark as Delayed",
      subtitle: s?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: n },
        { label: o ? "Saving..." : "Mark Delayed", variant: "primary", onClick: l, disabled: !a.trim() || o }
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
            value: a,
            onInput: (d) => r(d.target.value),
            placeholder: "Why is this certification being delayed?"
          }
        )
      ] })
    }
  );
}
function pa(t) {
  const [n, s] = v(null), [i, a] = v(!1), [r, o] = v(null), [c, l] = v(0), d = U(() => {
    l((u) => u + 1);
  }, []);
  return F(() => {
    if (!t || !window.CertAPI) {
      s(null);
      return;
    }
    let u = !1;
    return a(!0), o(null), window.CertAPI.fetchPractitionerWorkload(t).then((p) => {
      u || s(p);
    }).catch((p) => {
      u || o(p.message || "Failed to load practitioner data");
    }).finally(() => {
      u || a(!1);
    }), () => {
      u = !0;
    };
  }, [t, c]), { data: n, loading: i, error: r, retry: d };
}
function Zt(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function ua({ item: t }) {
  const n = !!t.type && (t.type === "initial" || t.type.includes("recert"));
  return /* @__PURE__ */ e("div", { class: "cert__workload-row", children: [
    /* @__PURE__ */ e("div", { class: "cert__workload-row-top", children: n ? /* @__PURE__ */ e(J, { children: [
      /* @__PURE__ */ e(pn, { type: t.type }),
      /* @__PURE__ */ e("span", { class: "cert__workload-patient", children: t.patientName }),
      /* @__PURE__ */ e(
        Us,
        {
          status: t.status,
          isDelayed: t.isDelayed,
          dueDate: t.dueDate,
          signedAt: t.signedAt
        }
      )
    ] }) : /* @__PURE__ */ e(J, { children: [
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
        Zt(t.dueDate)
      ] }),
      !n && t.sentAt && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Sent ",
        Zt(t.sentAt)
      ] })
    ] })
  ] });
}
function ma({ item: t }) {
  const n = !!t.type && (t.type === "initial" || t.type.includes("recert"));
  return /* @__PURE__ */ e("div", { class: "cert__workload-row", children: [
    /* @__PURE__ */ e("div", { class: "cert__workload-row-top", children: n ? /* @__PURE__ */ e(J, { children: [
      /* @__PURE__ */ e(pn, { type: t.type }),
      /* @__PURE__ */ e("span", { class: "cert__workload-patient", children: t.patientName })
    ] }) : /* @__PURE__ */ e(J, { children: [
      /* @__PURE__ */ e("span", { class: "cert__workload-query-badge", children: "Query" }),
      /* @__PURE__ */ e("span", { class: "cert__workload-patient", children: t.patientName }),
      t.mdsItem && /* @__PURE__ */ e("span", { class: "cert__workload-meta", children: t.mdsItem })
    ] }) }),
    /* @__PURE__ */ e("div", { class: "cert__workload-row-bottom", children: [
      t.signedAt && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "Signed ",
        Zt(t.signedAt)
      ] }),
      !n && t.selectedIcd10Code && /* @__PURE__ */ e("span", { class: "cert__row-meta", children: [
        "ICD-10: ",
        t.selectedIcd10Code
      ] })
    ] })
  ] });
}
function ha({ practitionerId: t, onBack: n }) {
  const { data: s, loading: i, error: a, retry: r } = pa(t);
  if (i)
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
  if (a)
    return /* @__PURE__ */ e("div", { class: "cert__workload", children: [
      /* @__PURE__ */ e("div", { class: "cert__workload-header", children: /* @__PURE__ */ e("button", { class: "cert__workload-back", onClick: n, children: [
        "←",
        " Back to Certs"
      ] }) }),
      /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "⚠" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: a }),
        /* @__PURE__ */ e("button", { class: "mds-cc__retry-btn", onClick: r, children: "Retry" })
      ] })
    ] });
  if (!s) return null;
  const { practitioner: o, queue: c = [], recentlySigned: l = [] } = s;
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
      c.length === 0 ? /* @__PURE__ */ e("div", { class: "cert__workload-empty", children: "No items in queue" }) : c.map((d, u) => /* @__PURE__ */ e(ua, { item: d }, u))
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__workload-section", children: [
      /* @__PURE__ */ e("div", { class: "cert__workload-section-header", children: [
        "Recently Signed",
        l.length > 0 && /* @__PURE__ */ e("span", { class: "cert__workload-section-count", children: l.length })
      ] }),
      l.length === 0 ? /* @__PURE__ */ e("div", { class: "cert__workload-empty", children: "No recent signatures" }) : l.map((d, u) => /* @__PURE__ */ e(ma, { item: d }, u))
    ] })
  ] });
}
const _a = [
  { id: "action", label: "Action Needed" },
  { id: "awaiting", label: "Awaiting Signature" },
  { id: "overdue", label: "Overdue" },
  { id: "dueSoon", label: "Due Soon" },
  { id: "signed", label: "Signed" }
];
function Xt(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function qn(t) {
  const n = Xt(t.dueDate);
  return n !== null && n < 0 ? n : t.isDelayed ? -0.5 : n ?? 1 / 0;
}
const ga = [
  { id: "all", label: "All" },
  { id: "medicare", label: "Med A" },
  { id: "managed", label: "Managed" }
];
function On(t, n) {
  return n === "all" ? !0 : n === "managed" ? t.payerType === "managed_care" : t.payerType !== "managed_care";
}
function fa({ facilityName: t, orgSlug: n, patientId: s, patientName: i }) {
  const [a, r] = v("action"), [o, c] = v("all"), [l, d] = v(null), [u, p] = v(null), [m, h] = v(null), [_, g] = v(null), [f, y] = v(null), { certs: w, loading: k, error: C, refetch: I } = Kt({
    facilityName: t,
    orgSlug: n,
    patientId: s
  }), { certs: P, loading: A, refetch: x } = Kt({
    facilityName: t,
    orgSlug: n,
    patientId: s,
    status: "signed"
  }), D = U(() => {
    I(), x();
  }, [I, x]), N = Y(
    () => w.filter(($) => On($, o)),
    [w, o]
  ), S = Y(
    () => P.filter(($) => On($, o)),
    [P, o]
  ), E = Y(() => {
    const $ = w.length + P.length;
    let H = 0, te = 0;
    for (const T of [...w, ...P])
      T.payerType === "managed_care" ? te++ : H++;
    return { all: $, medicare: H, managed: te };
  }, [w, P]), B = Y(() => {
    let $ = 0, H = 0, te = 0;
    for (const T of N) {
      const R = Xt(T.dueDate);
      R !== null && R < 0 || T.isDelayed ? $++ : R !== null && R >= 0 && R <= 3 && H++, T.status === "sent" && te++;
    }
    return {
      action: N.length,
      awaiting: te,
      overdue: $,
      dueSoon: H,
      signed: S.length
    };
  }, [N, S]), M = Y(() => {
    let $;
    if (a === "signed" ? $ = S : $ = N.filter((T) => {
      const R = Xt(T.dueDate), z = R !== null && R < 0, V = R !== null && R >= 0 && R <= 3;
      return a === "awaiting" ? T.status === "sent" : a === "overdue" ? z || T.isDelayed : a === "dueSoon" ? V && !z : !0;
    }), $.length === 0) return [];
    const H = {};
    for (const T of $) {
      const R = T.partAStayId || T.id;
      H[R] || (H[R] = { stayId: R, displayCerts: [], historyCerts: [] }), H[R].displayCerts.push(T);
    }
    if (a !== "signed")
      for (const T of S) {
        const R = T.partAStayId;
        R && H[R] && H[R].historyCerts.push(T);
      }
    const te = Object.values(H);
    for (const T of te) {
      T.displayCerts.sort((z, V) => (z.sequenceNumber || 0) - (V.sequenceNumber || 0)), T.historyCerts.sort((z, V) => (z.sequenceNumber || 0) - (V.sequenceNumber || 0));
      const R = /* @__PURE__ */ new Set();
      T.allCerts = [];
      for (const z of [...T.displayCerts, ...T.historyCerts])
        R.has(z.id) || (R.add(z.id), T.allCerts.push(z));
      T.allCerts.sort((z, V) => (z.sequenceNumber || 0) - (V.sequenceNumber || 0));
    }
    return te.sort((T, R) => {
      const z = Math.min(...T.displayCerts.map(qn)), V = Math.min(...R.displayCerts.map(qn));
      return z - V;
    }), te;
  }, [N, S, a]);
  async function q($) {
    await window.CertAPI.skipCert(m.id, $), window.SuperToast?.success?.("Certification skipped"), D();
  }
  async function L($) {
    await window.CertAPI.delayCert(_.id, $), window.SuperToast?.success?.("Certification marked as delayed"), D();
  }
  async function O({ clinicalReason: $, estimatedDays: H, planForDischarge: te }) {
    await window.CertAPI.saveClinicalReason(f.id, { clinicalReason: $, estimatedDays: H, planForDischarge: te }), window.SuperToast?.success?.(`Clinical details updated for ${f.patientName}`), D();
  }
  async function Z($) {
    try {
      await window.CertAPI.unskipCert($.id), window.SuperToast?.success?.("Certification restored"), D();
    } catch (H) {
      console.error("[Certifications] Failed to unskip:", H), window.SuperToast?.error?.("Failed to restore certification");
    }
  }
  const j = a === "signed" ? A : k;
  return l ? /* @__PURE__ */ e("div", { class: "cert__view", children: /* @__PURE__ */ e(
    ha,
    {
      practitionerId: l,
      onBack: () => d(null)
    }
  ) }) : /* @__PURE__ */ e("div", { class: "cert__view", children: [
    s && i && /* @__PURE__ */ e("div", { class: "cert__patient-banner", children: [
      "Showing certs for ",
      /* @__PURE__ */ e("strong", { children: i })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__filters", children: [
      /* @__PURE__ */ e("div", { class: "cert__stay-type-filter", children: ga.map(($) => /* @__PURE__ */ e(
        "button",
        {
          class: `cert__stay-type-pill${o === $.id ? " cert__stay-type-pill--active" : ""}`,
          onClick: () => c($.id),
          children: [
            $.label,
            E[$.id] > 0 && /* @__PURE__ */ e("span", { class: "cert__stay-type-pill-count", children: E[$.id] })
          ]
        },
        $.id
      )) }),
      /* @__PURE__ */ e("div", { class: "cert__sub-tabs", children: _a.map(($) => /* @__PURE__ */ e(
        "button",
        {
          class: `cert__sub-tab${a === $.id ? " cert__sub-tab--active" : ""}`,
          onClick: () => r($.id),
          children: [
            $.label,
            B[$.id] > 0 && /* @__PURE__ */ e("span", { class: "cert__sub-tab-count", children: B[$.id] })
          ]
        },
        $.id
      )) })
    ] }),
    /* @__PURE__ */ e("div", { class: "cert__list", children: [
      j && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__spinner" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "Loading certifications..." })
      ] }),
      !j && C && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "⚠" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: C }),
        /* @__PURE__ */ e("button", { class: "mds-cc__retry-btn", onClick: D, children: "Retry" })
      ] }),
      !j && !C && M.length === 0 && /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: a === "overdue" ? "✅" : "📋" }),
        /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: [
          a === "action" && "All certifications are up to date",
          a === "awaiting" && "No certifications awaiting signature",
          a === "overdue" && "No overdue certifications",
          a === "dueSoon" && "No certifications due soon",
          a === "signed" && "No certifications signed in the last 7 days"
        ] })
      ] }),
      !j && !C && M.map(($) => /* @__PURE__ */ e(
        ca,
        {
          stayId: $.stayId,
          displayCerts: $.displayCerts,
          historyCerts: $.historyCerts,
          allCerts: $.allCerts,
          onSend: (H) => p(H),
          onSkip: (H) => h(H),
          onDelay: (H) => g(H),
          onUnskip: Z,
          onEditReason: (H) => y(H),
          onViewPractitioner: (H) => d(H)
        },
        $.stayId
      ))
    ] }),
    /* @__PURE__ */ e(
      zs,
      {
        isOpen: !!u,
        onClose: () => p(null),
        cert: u,
        facilityName: t,
        orgSlug: n,
        onSent: D
      }
    ),
    /* @__PURE__ */ e(
      js,
      {
        isOpen: !!m,
        onClose: () => h(null),
        cert: m,
        onSkipped: q
      }
    ),
    /* @__PURE__ */ e(
      Ks,
      {
        isOpen: !!_,
        onClose: () => g(null),
        cert: _,
        onDelayed: L
      }
    ),
    /* @__PURE__ */ e(
      la,
      {
        isOpen: !!f,
        onClose: () => y(null),
        cert: f,
        onSaved: O
      }
    )
  ] });
}
function un(t) {
  return !t || t.mode === "not_applicable" ? !1 : "isApplicable" in t ? !!t.isApplicable : !0;
}
function ya(t) {
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
function mn(t, n = "long") {
  if (!un(t) || !(t.delta > 0)) return null;
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
function Hn(t) {
  return t ? t.replace(/_/g, "") : null;
}
function va(t) {
  if (!un(t) || !(t.delta > 0)) return null;
  const n = ya(t), s = !!t.isEstimated;
  switch (t.mode) {
    case "medicare": {
      const i = t.current?.total, a = t.potential?.total;
      return i == null && a == null ? null : {
        current: i != null ? `$${Math.round(i).toLocaleString()}/day` : null,
        potential: a != null ? `$${Math.round(a).toLocaleString()}/day` : null,
        delta: `+$${Math.round(t.delta).toLocaleString()}/day`,
        label: n,
        isEstimated: s
      };
    }
    case "state_rate": {
      const i = t.current?.rate, a = t.potential?.rate;
      return i == null && a == null ? null : {
        current: i != null ? `$${Math.round(i).toLocaleString()}/day` : null,
        potential: a != null ? `$${Math.round(a).toLocaleString()}/day` : null,
        delta: `+$${Math.round(t.delta).toLocaleString()}/day`,
        label: n,
        isEstimated: s,
        currentGroupCode: Hn(t.current?.groupCode),
        potentialGroupCode: Hn(t.potential?.groupCode)
      };
    }
    case "cmi": {
      const i = t.current?.total, a = t.potential?.total;
      return i == null && a == null ? null : {
        current: i != null ? `${i.toFixed(3)} CMI` : null,
        potential: a != null ? `${a.toFixed(3)} CMI` : null,
        delta: `+${t.delta.toFixed(3)} CMI`,
        label: n,
        isEstimated: s
      };
    }
    default:
      return null;
  }
}
const wa = {
  overdue: "#ef4444",
  urgent: "#f97316",
  approaching: "#eab308",
  on_track: "#22c55e",
  completed: "#6b7280"
}, ba = {
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
function xt({ label: t, status: n }) {
  const s = ba[n];
  return s ? /* @__PURE__ */ e("span", { class: `mds-cc__uda-badge mds-cc__uda-badge--${s.cls}`, title: s.tip, children: [
    t,
    " ",
    s.icon
  ] }) : null;
}
function Js(t) {
  return t ? t.replace(/^(Medicare|Medicaid|Managed\s*Care)\s*[-\u2013\u2014]\s*/i, "").replace(/\s*\/\s*/g, " ").replace(/\s*-\s*None\s*PPS\s*/i, "").replace(/\s{2,}/g, " ").trim() || t : "";
}
function Bn(t) {
  return t.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Ia(t, n) {
  if (!t) return { dateText: "", completionText: "", deadlineText: "", cls: "na", isCompleted: !1 };
  const s = new Date(t);
  if (isNaN(s)) return { dateText: "", completionText: "", deadlineText: "", cls: "na", isCompleted: !1 };
  const i = Bn(s), a = new Date(s);
  a.setDate(a.getDate() + 14);
  const r = Bn(a);
  if ((n?.urgency || "on_track") === "completed")
    return { dateText: i, completionText: r, deadlineText: "", cls: "done", isCompleted: !0 };
  const c = n?.completionDaysRemaining ?? Math.round((a - Da()) / 864e5);
  let l, d;
  return c < 0 ? (l = `${Math.abs(c)}d overdue`, d = "overdue") : c === 0 ? (l = "Due today", d = "urgent") : c <= 3 ? (l = `${c}d left`, d = "urgent") : c <= 7 ? (l = `${c}d left`, d = "approaching") : (l = `${c}d left`, d = "ok"), { dateText: i, completionText: r, deadlineText: l, cls: d, isCompleted: !1 };
}
function Da() {
  const t = /* @__PURE__ */ new Date();
  return t.setHours(0, 0, 0, 0), t;
}
function Pt(t) {
  return t ? t === "missing" || t === "not_created" || t === "near_miss" || t === "out_of_range" || t === "in_progress" : !1;
}
function ka({ assessment: t, isExpanded: n, onToggle: s, onOpenAnalyzer: i }) {
  const {
    patientName: a,
    assessmentType: r,
    ardDate: o,
    pdpm: c,
    assessmentClass: l,
    sectionProgress: d,
    udaSummary: u,
    querySummary: p
  } = t, m = t.deadlines, h = m?.urgency || "on_track", g = l === "end_of_stay" ? null : mn(c?.payment, "short"), f = Ia(o, m), y = d?.total > 0 && d.completed === d.total, w = d?.total > 0 ? Math.round(d.completed / d.total * 100) : 0, k = (p?.pending || 0) + (p?.sent || 0), C = Pt(u?.bims) || Pt(u?.gg) || Pt(u?.phq9), I = h === "on_track" || h === "completed", P = f.isCompleted ? "✓ Completed" : f.deadlineText || "", A = f.isCompleted ? "done" : f.cls;
  return /* @__PURE__ */ e(
    "div",
    {
      class: `mds-cc__card${n ? " mds-cc__card--expanded" : ""}`,
      style: { borderLeftColor: wa[h] || "#9ca3af" },
      onClick: s,
      role: "button",
      tabIndex: 0,
      onKeyDown: (x) => {
        (x.key === "Enter" || x.key === " ") && (x.preventDefault(), s());
      },
      children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__card-row1", children: [
          /* @__PURE__ */ e("span", { class: "mds-cc__card-name", children: a || "Unknown" }),
          P && /* @__PURE__ */ e("span", { class: `mds-cc__card-urgency mds-cc__card-urgency--${A}`, children: P }),
          /* @__PURE__ */ e("span", { class: `mds-cc__chevron${n ? " mds-cc__chevron--open" : ""}`, children: "›" })
        ] }),
        /* @__PURE__ */ e("div", { class: "mds-cc__card-row2", children: [
          /* @__PURE__ */ e("span", { class: "mds-cc__card-type", children: Js(r) }),
          f.dateText && /* @__PURE__ */ e(J, { children: [
            /* @__PURE__ */ e("span", { class: "mds-cc__card-meta-sep", children: "·" }),
            /* @__PURE__ */ e("span", { class: "mds-cc__card-ard-date", children: [
              "ARD ",
              f.dateText
            ] }),
            f.completionText && !f.isCompleted && /* @__PURE__ */ e(J, { children: [
              /* @__PURE__ */ e("span", { class: "mds-cc__card-meta-sep", children: "·" }),
              /* @__PURE__ */ e("span", { class: "mds-cc__card-complete-date", children: [
                "Complete by ",
                f.completionText
              ] })
            ] })
          ] })
        ] }),
        (C || d?.total > 0 || g || k > 0) && /* @__PURE__ */ e("div", { class: "mds-cc__card-row3", children: [
          C && /* @__PURE__ */ e("span", { class: "mds-cc__card-row3-group", children: [
            /* @__PURE__ */ e(xt, { label: "BIM", status: u?.bims }),
            /* @__PURE__ */ e(xt, { label: "GG", status: u?.gg }),
            /* @__PURE__ */ e(xt, { label: "PHQ", status: u?.phq9 })
          ] }),
          d?.total > 0 && /* @__PURE__ */ e("span", { class: `mds-cc__card-progress${y ? " mds-cc__card-progress--done" : ""}${I ? " mds-cc__card-progress--subtle" : ""}`, children: [
            /* @__PURE__ */ e("span", { class: "mds-cc__card-progress-bar", children: /* @__PURE__ */ e(
              "span",
              {
                class: "mds-cc__card-progress-fill",
                style: { width: `${w}%` }
              }
            ) }),
            !I && /* @__PURE__ */ e("span", { class: "mds-cc__card-progress-text", children: [
              d.completed,
              "/",
              d.total
            ] })
          ] }),
          k > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__card-queries", children: [
            k,
            " pending ",
            k === 1 ? "query" : "queries"
          ] }),
          g && /* @__PURE__ */ e(
            "span",
            {
              class: `mds-cc__card-revenue${i ? " mds-cc__card-revenue--clickable" : ""}`,
              onClick: i ? (x) => {
                x.stopPropagation(), i();
              } : void 0,
              title: i ? "Open PDPM Analyzer" : void 0,
              role: i ? "button" : void 0,
              children: g
            }
          )
        ] })
      ]
    }
  );
}
function Ca(t) {
  const [n, s] = v(null), [i, a] = v(!1), [r, o] = v(null);
  return F(() => {
    if (!t) {
      s(null), o(null);
      return;
    }
    let c = !1;
    a(!0), o(null);
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
        c || s(_.data);
      } catch (d) {
        c || o(d.message || "Failed to load detail");
      } finally {
        c || a(!1);
      }
    }
    return l(), () => {
      c = !0;
    };
  }, [t]), { detailData: n, loading: i, error: r };
}
function Na(t) {
  const n = [];
  return t.impact?.nursing?.wouldChangeGroup && n.push("raises nursing"), t.impact?.ptot?.wouldChangeGroup && n.push("raises PT/OT"), t.impact?.slp?.wouldChangeGroup && n.push("raises speech therapy"), t.impact?.nta?.wouldChangeLevel && n.push("raises NTA tier"), n.length === 0 ? "" : n.join(" · ");
}
function Sa(t) {
  if (!t) return "not yet sent";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "sent today" : `sent ${n}d ago`;
}
function Ys(t) {
  if (!t?.checks)
    return t?.status === "failed" && t.issues?.length > 0 ? t.issues.map((i) => i.message || i) : [];
  const n = { bims: "BIMS", phq9: "PHQ-9", gg: "GG", orders: "Orders", therapyDocs: "Therapy" }, s = [];
  for (const [i, a] of Object.entries(t.checks))
    a.status === "failed" && s.push(a.message || `${n[i] || i} incomplete`);
  return s;
}
function xa({ pdpm: t, detailData: n, payment: s, sectionProgress: i, compliance: a, isEndOfStay: r }) {
  const o = [], c = n?.currentHipps || t?.currentHipps, l = n?.potentialHipps || t?.potentialHipps, d = l && l !== c && !r, p = un(s) && s.delta > 0 ? mn(s, "short") : null;
  d && p ? o.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part mds-cc__ss-part--revenue", children: [
    p,
    " opportunity"
  ] })) : d && o.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part", children: [
    "HIPPS ",
    c,
    " ",
    "→",
    " ",
    l
  ] })), i?.percentComplete != null && o.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part", children: [
    "Sections ",
    i.percentComplete,
    "%"
  ] }));
  const m = Ys(a), h = n?.enhancedDetections?.filter(
    (g) => g.solverStatus === "dont_code" && (g.diagnosisPassed === !1 || g.activeStatusPassed === !1)
  ).length || 0, _ = m.length + h;
  return _ > 0 && o.push(/* @__PURE__ */ e("span", { class: "mds-cc__ss-part mds-cc__ss-part--issues", children: [
    "⚠",
    " ",
    _,
    " ",
    _ === 1 ? "issue" : "issues"
  ] })), o.length === 0 ? null : /* @__PURE__ */ e("div", { class: "mds-cc__ss", children: o.map((g, f) => /* @__PURE__ */ e(J, { children: [
    f > 0 && /* @__PURE__ */ e("span", { class: "mds-cc__ss-sep" }),
    g
  ] })) });
}
function Pa({ detailData: t, onSelectItem: n }) {
  const i = (t?.enhancedDetections || []).filter(
    (a) => a.wouldChangeHipps && a.solverStatus !== "query_sent" && a.solverStatus !== "awaiting_response" && a.solverStatus !== "dont_code"
  );
  return i.length === 0 ? null : /* @__PURE__ */ e("div", { class: "mds-cc__ps", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__ps-header", children: [
      i.length,
      " revenue ",
      i.length === 1 ? "opportunity" : "opportunities"
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-cc__ps-items", children: i.map((a, r) => {
      const o = Na(a);
      return /* @__PURE__ */ e(
        "div",
        {
          class: "mds-cc__ps-item mds-cc__ps-item--clickable",
          onClick: () => n(a),
          role: "button",
          title: "View evidence",
          children: [
            /* @__PURE__ */ e("span", { class: "mds-cc__ps-item-name", children: a.itemName }),
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
function Ta() {
  return /* @__PURE__ */ e("div", { class: "mds-cc__prev-detail-loading", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
    /* @__PURE__ */ e("span", { children: "Loading assessment detail..." })
  ] });
}
function Aa({ message: t }) {
  return /* @__PURE__ */ e("div", { class: "mds-cc__prev-detail-error", children: /* @__PURE__ */ e("span", { children: [
    "⚠",
    " ",
    t
  ] }) });
}
const Fn = {
  bims: "nursing or social services",
  phq9: "nursing",
  gg: "therapy"
}, Un = {
  bims: "BIMS",
  phq9: "PHQ-9",
  gg: "GG"
};
function Ma(t) {
  if (!t) return [];
  const n = [];
  for (const s of ["bims", "phq9", "gg"]) {
    const i = t[s];
    i === "missing" || i === "not_created" ? n.push({ key: s, label: Un[s], owner: Fn[s], severity: "missing" }) : (i === "near_miss" || i === "out_of_range") && n.push({ key: s, label: Un[s], owner: Fn[s], severity: "out_of_range" });
  }
  return n;
}
function La({ assessment: t, detailData: n }) {
  const s = Ma(t.udaSummary), i = Ys(t.compliance), a = (n?.outstandingQueries || []).filter(
    (l) => l.status === "sent" || l.status === "pending" || l.status === "awaiting_response"
  ), r = (n?.enhancedDetections || []).filter(
    (l) => l.solverStatus === "dont_code" && (l.diagnosisPassed === !1 || l.activeStatusPassed === !1)
  );
  if (!(s.length > 0 || i.length > 0 || a.length > 0 || r.length > 0)) return null;
  const c = s.length + i.length + a.length + r.length;
  return /* @__PURE__ */ e("div", { class: "mds-cc__blockers", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__blockers-header", children: [
      "⚠",
      " ",
      c,
      " ",
      c === 1 ? "blocker" : "blockers"
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
    a.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__blockers-group", children: a.map((l, d) => /* @__PURE__ */ e("div", { class: "mds-cc__blocker mds-cc__blocker--query", children: [
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-label", children: [
        l.mdsItem || "Query",
        ": ",
        l.mdsItemName
      ] }),
      /* @__PURE__ */ e("span", { class: "mds-cc__blocker-status", children: Sa(l.sentAt) })
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
    i.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__blockers-group", children: i.map((l, d) => /* @__PURE__ */ e("div", { class: "mds-cc__blocker mds-cc__blocker--compliance", children: /* @__PURE__ */ e("span", { class: "mds-cc__blocker-label", children: l }) }, d)) })
  ] });
}
function Zs({ assessment: t, onOpenAnalyzer: n, onSelectItem: s }) {
  const { pdpm: i, sectionProgress: a, compliance: r } = t, o = t.externalAssessmentId || t.assessmentId, c = t.assessmentClass === "end_of_stay", { detailData: l, loading: d, error: u } = Ca(o), p = l?.payment || i?.payment;
  return /* @__PURE__ */ e("div", { class: "mds-cc__preview", onClick: (m) => m.stopPropagation(), children: [
    /* @__PURE__ */ e(La, { assessment: t, detailData: l }),
    /* @__PURE__ */ e(
      xa,
      {
        pdpm: i,
        detailData: l,
        payment: p,
        sectionProgress: a,
        compliance: r,
        isEndOfStay: c
      }
    ),
    d && /* @__PURE__ */ e(Ta, {}),
    !d && u && /* @__PURE__ */ e(Aa, { message: u }),
    !d && l && /* @__PURE__ */ e(Pa, { detailData: l, onSelectItem: s }),
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
const hn = {
  overdue: "#ef4444",
  urgent: "#f97316",
  approaching: "#eab308",
  on_track: "#22c55e",
  completed: "#6b7280",
  far_out: "#9ca3af"
}, Ea = {
  assessments: "MDS",
  queries: "QUERY",
  certs: "CERT"
};
function en(t) {
  if (!t) return null;
  const n = typeof t == "string" ? /* @__PURE__ */ new Date(t + "T00:00:00") : new Date(t);
  return isNaN(n) ? null : (n.setHours(0, 0, 0, 0), n);
}
function ht(t) {
  if (!t) return null;
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0");
  return `${n}-${s}-${i}`;
}
function $a(t) {
  return t.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
function Ra(t) {
  return t.getDate();
}
function qa(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth();
}
function Xs(t) {
  const n = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), t.getTime() === n.getTime();
}
function Oa(t) {
  const n = new Date(t);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function _t(t) {
  const n = new Date(t), i = (n.getDay() + 6) % 7;
  return n.setDate(n.getDate() - i), n.setHours(0, 0, 0, 0), n;
}
function Ue(t, n) {
  const s = new Date(t);
  return s.setDate(s.getDate() + n), s;
}
function Gn(t, n) {
  const s = new Date(t);
  return s.setMonth(s.getMonth() + n), s;
}
function Ha(t, n, s, i) {
  const a = [];
  for (const r of t || []) {
    if (!r.ardDate) continue;
    const o = r.deadlines?.urgency || "on_track";
    a.push({
      id: r.id || r.assessmentId || r.externalAssessmentId,
      layer: "assessments",
      patientId: r.patientId,
      patientName: r.patientName,
      type: Js(r.assessmentType) || r.assessmentType,
      date: r.ardDate,
      urgency: o,
      kind: "open",
      ref: r
    });
  }
  for (const r of n || [])
    r.isOpened || r.dueDate && a.push({
      id: `sched-${r.patientId}-${r.assessmentType}-${r.dueDate}`,
      layer: "assessments",
      patientId: r.patientId,
      patientName: r.patientName,
      type: Ua(r.assessmentType),
      date: r.dueDate,
      urgency: r.urgency || "on_track",
      kind: "upcoming",
      ref: r
    });
  for (const r of s || [])
    r.ardDate && a.push({
      id: `query-${r.id}`,
      layer: "queries",
      patientId: r.patientId,
      patientName: r.patientName,
      type: `Query: ${r.mdsItem || ""} ${r.mdsItemName || ""}`.trim(),
      date: r.ardDate,
      urgency: Ba(r.ardDaysRemaining),
      kind: "query",
      ref: r
    });
  for (const r of i || [])
    r.dueDate && a.push({
      id: `cert-${r.id}`,
      layer: "certs",
      patientId: r.patientId,
      patientName: r.patientName,
      type: `${r.certType || "Cert"}${r.stayType ? ` (${r.stayType})` : ""}`,
      date: r.dueDate,
      urgency: Fa(r),
      kind: "cert",
      ref: r
    });
  return a;
}
function Ba(t) {
  return t == null ? "on_track" : t < 0 ? "overdue" : t <= 3 ? "urgent" : t <= 7 ? "approaching" : "on_track";
}
function Fa(t) {
  const n = t.dueDate ? /* @__PURE__ */ new Date(t.dueDate + "T00:00:00") : null;
  if (!n) return "on_track";
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const i = Math.round((n - s) / 864e5);
  return i < 0 || t.isDelayed ? "overdue" : i <= 3 ? "urgent" : i <= 7 ? "approaching" : "on_track";
}
function Ua(t) {
  return t === "quarterly" ? "Quarterly" : t === "annual" ? "Annual" : t === "admission" ? "Admission" : t;
}
function Ga(t) {
  return t ? t.replace(/\s*\(\d[\d-]*\)\s*$/, "").trim().replace(/\w\S*/g, (s) => s[0].toUpperCase() + s.slice(1).toLowerCase()) : "";
}
function Va({ anchorDate: t, itemsByDay: n, onSelectDay: s, selectedDay: i }) {
  const a = Oa(t), r = _t(a), o = [];
  for (let l = 0; l < 42; l++) o.push(Ue(r, l));
  return /* @__PURE__ */ e("div", { class: "mds-cc__cal-month", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-weekdays", children: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((l) => /* @__PURE__ */ e("div", { class: "mds-cc__cal-weekday", children: l }, l)) }),
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-grid", children: o.map((l) => {
      const d = ht(l), u = n.get(d) || [], p = qa(l, t), m = Xs(l);
      return /* @__PURE__ */ e(
        "div",
        {
          class: `mds-cc__cal-day${p ? "" : " mds-cc__cal-day--out"}${m ? " mds-cc__cal-day--today" : ""}${i === d ? " mds-cc__cal-day--selected" : ""}${u.length > 0 ? " mds-cc__cal-day--has-items" : ""}`,
          onClick: () => u.length > 0 && s(d),
          role: u.length > 0 ? "button" : void 0,
          tabIndex: u.length > 0 ? 0 : void 0,
          children: [
            /* @__PURE__ */ e("div", { class: "mds-cc__cal-day-num", children: Ra(l) }),
            u.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__cal-day-dots", children: [
              u.slice(0, 4).map((_, g) => /* @__PURE__ */ e(
                "span",
                {
                  class: "mds-cc__cal-dot",
                  style: { background: hn[_.urgency] || "#9ca3af" }
                },
                g
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
function Wa({ anchorDate: t, itemsByDay: n, onItemClick: s }) {
  const i = _t(t), a = [];
  for (let o = 0; o < 7; o++) a.push(Ue(i, o));
  const r = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return /* @__PURE__ */ e("div", { class: "mds-cc__cal-week", children: a.map((o, c) => {
    const l = ht(o), d = n.get(l) || [], u = Xs(o);
    return /* @__PURE__ */ e("div", { class: `mds-cc__cal-week-col${u ? " mds-cc__cal-week-col--today" : ""}`, children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-header", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-week-dow", children: r[c] }),
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-week-date", children: o.toLocaleDateString("en-US", { month: "short", day: "numeric" }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-body", children: [
        d.length === 0 && /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-empty", children: "—" }),
        d.map((p) => {
          const m = p.kind === "open";
          return /* @__PURE__ */ e(
            "div",
            {
              class: `mds-cc__cal-week-item mds-cc__cal-week-item--${p.kind}${m ? " mds-cc__cal-week-item--clickable" : ""}`,
              style: { borderLeftColor: hn[p.urgency] || "#9ca3af" },
              title: `${p.patientName} · ${p.type}`,
              onClick: m ? () => s?.(p) : void 0,
              role: m ? "button" : void 0,
              tabIndex: m ? 0 : void 0,
              children: [
                /* @__PURE__ */ e("div", { class: "mds-cc__cal-week-patient", children: Ga(p.patientName) }),
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
function Qa({ dayKey: t, items: n, onClose: s, onOpenAnalyzer: i }) {
  const [a, r] = v(null);
  if (F(() => {
    r(null);
  }, [t]), !t || !n || n.length === 0) return null;
  const o = en(t), c = o ? o.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : t;
  return a && a.kind === "open" && a.ref ? /* @__PURE__ */ e(J, { children: [
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
        /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-detail-patient", children: a.patientName }),
        /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-detail-type", children: a.type })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-body", children: /* @__PURE__ */ e(
        Zs,
        {
          assessment: a.ref,
          onOpenAnalyzer: () => i?.(a.ref)
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ e(J, { children: [
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
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-panel-items", children: n.map((l) => {
        const d = l.kind === "open", u = Ea[l.layer] || "";
        return /* @__PURE__ */ e(
          "div",
          {
            class: `mds-cc__cal-panel-item mds-cc__cal-panel-item--${l.layer}${d ? " mds-cc__cal-panel-item--clickable" : ""}`,
            style: { borderLeftColor: hn[l.urgency] || "#9ca3af" },
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
function Tt({ label: t, count: n, active: s, color: i, onToggle: a }) {
  return /* @__PURE__ */ e(
    "button",
    {
      class: `mds-cc__cal-layer${s ? " mds-cc__cal-layer--active" : ""}`,
      style: s ? { borderColor: i, color: i } : void 0,
      onClick: a,
      type: "button",
      children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-layer-dot", style: { background: s ? i : "#d1d5db" } }),
        t,
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-layer-count", children: n })
      ]
    }
  );
}
const za = { assessments: !0, queries: !0, certs: !0 };
function ja({
  dashboardAssessments: t,
  scheduleItems: n,
  outstandingQueries: s,
  certs: i,
  onJumpToAssessment: a
}) {
  const [r, o] = v("month"), [c, l] = v(za), d = Y(
    () => Ha(t, n, s, i),
    [t, n, s, i]
  ), u = Y(
    () => d.filter((S) => c[S.layer]),
    [d, c]
  ), p = Y(() => {
    const S = /* @__PURE__ */ new Map();
    for (const B of u) {
      const M = B.date, q = S.get(M) || [];
      q.push(B), S.set(M, q);
    }
    const E = { overdue: 0, urgent: 1, approaching: 2, on_track: 3, far_out: 4, completed: 5 };
    for (const B of S.values())
      B.sort((M, q) => (E[M.urgency] ?? 9) - (E[q.urgency] ?? 9));
    return S;
  }, [u]), m = Y(() => {
    const S = /* @__PURE__ */ new Date();
    if (S.setHours(0, 0, 0, 0), u.length === 0) return S;
    const E = `${S.getFullYear()}-${String(S.getMonth() + 1).padStart(2, "0")}`;
    if (u.some((O) => (O.date || "").startsWith(E))) return S;
    const q = [...u].sort((O, Z) => (O.date || "").localeCompare(Z.date || ""))[0];
    return en(q.date) || S;
  }, [u]), [h, _] = v(m), [g, f] = v(null), y = ee(!1);
  F(() => {
    y.current || _(m);
  }, [m]);
  const w = g ? p.get(g) : null, C = Y(() => {
    if (r === "month") {
      const q = `${h.getFullYear()}-${String(h.getMonth() + 1).padStart(2, "0")}`;
      return u.filter((L) => !(L.date || "").startsWith(q));
    }
    const S = _t(h), E = Ue(S, 6), B = ht(S), M = ht(E);
    return u.filter((q) => (q.date || "") < B || (q.date || "") > M);
  }, [u, h, r]).filter((S) => S.urgency === "overdue" || S.urgency === "urgent").length;
  function I() {
    y.current = !0, f(null), _(r === "month" ? Gn(h, -1) : Ue(h, -7));
  }
  function P() {
    y.current = !0, f(null), _(r === "month" ? Gn(h, 1) : Ue(h, 7));
  }
  function A() {
    y.current = !0, f(null);
    const S = /* @__PURE__ */ new Date();
    S.setHours(0, 0, 0, 0), _(S);
  }
  function x() {
    const S = u.filter((M) => M.urgency === "overdue" || M.urgency === "urgent");
    if (S.length === 0) return;
    const E = [...S].sort((M, q) => (M.date || "").localeCompare(q.date || "")), B = en(E[0].date);
    B && (y.current = !0, f(null), _(B));
  }
  function D(S) {
    if (a && S.kind === "open" && S.ref) {
      const E = S.ref.id || S.ref.assessmentId || S.ref.externalAssessmentId;
      a(E);
    }
  }
  const N = r === "month" ? $a(h) : `Week of ${_t(h).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
  return /* @__PURE__ */ e("div", { class: "mds-cc__cal", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__cal-toolbar", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__cal-nav", children: [
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-nav-btn", onClick: I, "aria-label": "Previous", children: "‹" }),
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-today-btn", onClick: A, children: "Today" }),
        /* @__PURE__ */ e("button", { class: "mds-cc__cal-nav-btn", onClick: P, "aria-label": "Next", children: "›" }),
        /* @__PURE__ */ e("span", { class: "mds-cc__cal-label", children: N })
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
        Tt,
        {
          label: "Assessments",
          count: d.filter((S) => S.layer === "assessments").length,
          active: c.assessments,
          color: "#6366f1",
          onToggle: () => l((S) => ({ ...S, assessments: !S.assessments }))
        }
      ),
      /* @__PURE__ */ e(
        Tt,
        {
          label: "Queries",
          count: d.filter((S) => S.layer === "queries").length,
          active: c.queries,
          color: "#a855f7",
          onToggle: () => l((S) => ({ ...S, queries: !S.queries }))
        }
      ),
      /* @__PURE__ */ e(
        Tt,
        {
          label: "Certs",
          count: d.filter((S) => S.layer === "certs").length,
          active: c.certs,
          color: "#0891b2",
          onToggle: () => l((S) => ({ ...S, certs: !S.certs }))
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
      Va,
      {
        anchorDate: h,
        itemsByDay: p,
        onSelectDay: f,
        selectedDay: g
      }
    ),
    r === "week" && /* @__PURE__ */ e(
      Wa,
      {
        anchorDate: h,
        itemsByDay: p,
        onItemClick: D
      }
    ),
    r === "month" && w && /* @__PURE__ */ e(
      Qa,
      {
        dayKey: g,
        items: w,
        onClose: () => f(null),
        onOpenAnalyzer: (S) => {
          f(null), a?.(S.id || S.assessmentId || S.externalAssessmentId);
        }
      }
    )
  ] });
}
function ei(t, n, s) {
  const [i, a] = v(null), [r, o] = v(!1), [c, l] = v(null);
  return F(() => {
    if (!t || !s?.assessmentId) return;
    let d = !1;
    a(null), l(null), o(!0);
    async function u() {
      try {
        const m = getOrg()?.org, h = window.getChatFacilityInfo?.() || "";
        if (!m || !h)
          throw new Error("Could not determine organization or facility");
        const _ = t.includes(":") ? t.split(":")[0] : t;
        let g = `/api/extension/mds/items/${encodeURIComponent(_)}?externalAssessmentId=${s.assessmentId}&facilityName=${encodeURIComponent(h)}&orgSlug=${encodeURIComponent(m)}`;
        n && (g += `&categoryKey=${encodeURIComponent(n)}`), chrome.runtime.sendMessage({ type: "API_REQUEST", endpoint: g }, (f) => {
          d || (f?.success ? a(f.data) : l(f?.error || "Failed to load item detail"), o(!1));
        });
      } catch (p) {
        d || (l(p.message || "Failed to load item detail"), o(!1));
      }
    }
    return u(), () => {
      d = !0;
    };
  }, [t, n, s?.assessmentId]), { data: i, loading: r, error: c };
}
function _n(t, n) {
  if (n) {
    if (n.startsWith("order-")) return "order";
    if (n.startsWith("mar-")) return "mar";
    if (n.startsWith("lab-")) return "lab-result";
  }
  if (!t) return "document";
  const s = t.toLowerCase();
  return s.includes("dc_summary") || s.includes("discharge") ? "progress-note" : s.includes("lab") ? "lab-result" : s.includes("order") ? "order" : s.includes("mar") ? "mar" : s.includes("vital") ? "vital-signs" : s.includes("nursing") ? "nursing-note" : s.includes("history") || s.includes("h&p") || s.includes("physical") || s.includes("eval") || s.includes("st ") || s.includes("slp") ? "progress-note" : "document";
}
const gn = {
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
  const n = t.sourceType || "", s = t.sourceId || t.id || "", i = t.type || "", a = t.evidenceId || s;
  if (s && s.includes("-chunk-"))
    return { viewerType: "document", id: s.split("-chunk-")[0], chunk: parseInt(s.split("-chunk-")[1], 10) };
  if (n === "progress-note" && s) return { viewerType: "clinical-note", id: s };
  if (n === "therapy-doc" && s) return { viewerType: "therapy-document", id: s };
  if (n === "document" && s) return { viewerType: "document", id: s };
  if (n === "uda") {
    const r = (s || a || "").replace(/^uda-/, "");
    if (r) return { viewerType: "uda", id: r };
  }
  if (i === "clinical_note" && s)
    return { viewerType: "clinical-note", id: s.replace(/^pcc-prognote-/, "").replace(/^patient-practnote-/, "") };
  if (i === "therapy_document" && s)
    return { viewerType: "therapy-document", id: s.replace(/^therapy-doc-/, "") };
  if (i === "document" && s) return { viewerType: "document", id: s };
  if (i === "order" && s) return { viewerType: "order", id: s };
  if (a) {
    if (a.startsWith("therapy-doc-")) return { viewerType: "therapy-document", id: a.replace("therapy-doc-", "") };
    if (a.startsWith("pcc-prognote-")) return { viewerType: "clinical-note", id: a.replace("pcc-prognote-", "") };
    if (a.startsWith("patient-practnote-")) return { viewerType: "clinical-note", id: a.replace("patient-practnote-", "") };
    if (a.includes("-chunk-")) return { viewerType: "document", id: a.split("-chunk-")[0], chunk: parseInt(a.split("-chunk-")[1], 10) };
    if (a.startsWith("uda-")) return { viewerType: "uda", id: a.replace("uda-", "") };
  }
  return { viewerType: null, id: null };
}
function Ka(t) {
  const n = ue(t), s = t.quoteText || t.quote || t.snippet || "";
  if (n.viewerType === "clinical-note" && n.id)
    return window.showClinicalNoteModal?.(n.id);
  if (n.viewerType === "therapy-document" && n.id)
    return window.showTherapyDocModal?.(n.id, s);
  if (n.viewerType === "document" && n.id)
    return window.showDocumentModal?.(n.id, t.wordBlocks || []);
  if (n.viewerType === "uda" && n.id)
    return window.showUdaModal?.(n.id, s, t.patientId || null);
  const i = t.sourceId || t.evidenceId || "";
  if ((t.sourceType === "order" || i.startsWith("order-")) && window.showAdministrationModal)
    return window.showAdministrationModal(i.replace(/^order-/, ""));
  window.SuperDocViewer?.open(t);
}
function Ja(t) {
  const n = ue(t);
  return t.sourceType === "order" || (t.evidenceId || "").startsWith("order-") ? "View Administrations" : n.viewerType === "therapy-document" ? "View Document" : n.viewerType === "clinical-note" ? "View Note" : n.viewerType === "document" ? "View PDF" : n.viewerType === "uda" ? "View Assessment" : null;
}
const Vn = () => /* @__PURE__ */ e("svg", { class: "sid__step-icon sid__step-icon--pass", viewBox: "0 0 20 20", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ e("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clip-rule": "evenodd" }) }), Wn = () => /* @__PURE__ */ e("svg", { class: "sid__step-icon sid__step-icon--fail", viewBox: "0 0 20 20", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ e("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", "clip-rule": "evenodd" }) }), ti = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
function Qn(t) {
  const n = t.sourceType || t.type || "", s = t.evidenceId || t.sourceId || "";
  return n === "order" || n === "mar" || n === "medication" || s.startsWith("order-") || s.startsWith("admin-") || s.startsWith("mar-") ? "orders" : n === "progress-note" || n === "nursing-note" || n === "clinical_note" || t.type === "clinical_note" || s.startsWith("pcc-prognote-") || s.startsWith("patient-practnote-") ? "notes" : n === "document" || n === "therapy-doc" || t.type === "document" || t.type === "therapy_document" || s.startsWith("therapy-doc-") || s.includes("-chunk-") ? "documents" : n ? "other" : "documents";
}
const Ya = { orders: "Orders", notes: "Notes", documents: "Documents", other: "Other" };
function Za({ fall: t }) {
  const n = t.incidentDate ? new Date(t.incidentDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";
  let s = "No injury", i = "";
  return t.hasMajorInjury ? (s = "Major injury", i = "super-fall__injury--major", t.injuryTypes?.length && (s += `: ${t.injuryTypes.join(", ")}`)) : t.hasInjury && (s = "Minor injury", i = "super-fall__injury--minor", t.injuryTypes?.length && (s += `: ${t.injuryTypes.join(", ")}`)), /* @__PURE__ */ e("div", { class: "super-fall-row", onClick: () => {
    t.incidentId && window.showIncidentDetailModal && window.showIncidentDetailModal(t.incidentId);
  }, role: "button", children: [
    /* @__PURE__ */ e("div", { class: "super-fall__header", children: [
      /* @__PURE__ */ e("span", { class: "super-fall__date", children: n }),
      /* @__PURE__ */ e("span", { class: "super-fall__type", children: t.incidentType || "Fall" })
    ] }),
    t.residentName && /* @__PURE__ */ e("div", { class: "super-fall__resident", children: t.residentName }),
    /* @__PURE__ */ e("div", { class: `super-fall__injury ${i}`, children: s }),
    t.incidentId && /* @__PURE__ */ e("div", { class: "super-fall__action", children: [
      /* @__PURE__ */ e("span", { children: "View Incident" }),
      /* @__PURE__ */ e(ti, {})
    ] })
  ] });
}
function Xa({ ev: t, index: n, onViewSource: s }) {
  const i = t.quoteText || t.orderDescription || t.quote || t.snippet || t.text || "";
  if (!i && !t.rationale) return null;
  const a = t.sourceType || _n(t.displayName, t.evidenceId), r = t.displayName || gn[a] || a, o = Ja(t), c = !!o;
  return /* @__PURE__ */ e(
    "div",
    {
      class: `sid__ev-card${c ? " sid__ev-card--clickable" : ""}`,
      onClick: c ? () => {
        if (s) {
          const d = ue(t), u = t.sourceType === "order" || (t.evidenceId || "").startsWith("order-"), p = d.viewerType;
          if (p === "document" || p === "clinical-note" || p === "therapy-document" || u) {
            s(t, n);
            return;
          }
        }
        Ka(t);
      } : void 0,
      role: c ? "button" : void 0,
      children: [
        /* @__PURE__ */ e("div", { class: "sid__ev-header", children: /* @__PURE__ */ e("span", { class: `sid__ev-type sid__ev-type--${a}`, children: r }) }),
        i && /* @__PURE__ */ e("div", { class: "sid__ev-quote", children: i }),
        t.rationale && /* @__PURE__ */ e("div", { class: "sid__ev-rationale", children: t.rationale }),
        c && /* @__PURE__ */ e("div", { class: "sid__ev-action", children: [
          /* @__PURE__ */ e("span", { children: o }),
          /* @__PURE__ */ e(ti, {})
        ] })
      ]
    }
  );
}
function Xe({ label: t, impact: n }) {
  if (!n || !n.wouldChangeGroup && !n.wouldChangeLevel) return null;
  const s = n.currentGroup || n.currentLevel || n.currentPaymentGroup, i = n.newGroup || n.newLevel || n.newPaymentGroup;
  return /* @__PURE__ */ e("span", { class: "sid__impact", children: [
    t,
    " ",
    /* @__PURE__ */ e("span", { class: "sid__impact-from", children: s }),
    " → ",
    /* @__PURE__ */ e("span", { class: "sid__impact-to", children: i })
  ] });
}
function er({ diagnosisSummary: t, treatmentSummary: n, validation: s }) {
  const i = s?.diagnosisCheck?.passed ?? s?.diagnosisPassed, a = s?.treatmentCheck?.passed ?? s?.activeStatusPassed;
  return /* @__PURE__ */ e("div", { class: "sid__steps", children: [
    /* @__PURE__ */ e("div", { class: `sid__step ${i ? "sid__step--pass" : "sid__step--fail"}`, children: [
      i ? /* @__PURE__ */ e(Vn, {}) : /* @__PURE__ */ e(Wn, {}),
      /* @__PURE__ */ e("div", { class: "sid__step-content", children: [
        /* @__PURE__ */ e("div", { class: "sid__step-label", children: "Diagnosis" }),
        t && /* @__PURE__ */ e("div", { class: "sid__step-summary", children: t })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: `sid__step ${a ? "sid__step--pass" : "sid__step--fail"}`, children: [
      a ? /* @__PURE__ */ e(Vn, {}) : /* @__PURE__ */ e(Wn, {}),
      /* @__PURE__ */ e("div", { class: "sid__step-content", children: [
        /* @__PURE__ */ e("div", { class: "sid__step-label", children: "Treatment" }),
        n && /* @__PURE__ */ e("div", { class: "sid__step-summary", children: n })
      ] })
    ] })
  ] });
}
function tr({ rationale: t }) {
  return t ? /* @__PURE__ */ e("div", { class: "sid__rationale", children: [
    /* @__PURE__ */ e("div", { class: "sid__rationale-label", children: "Rationale" }),
    t
  ] }) : null;
}
function nr({ carePlan: t }) {
  if (!t) return null;
  const [n, s] = v(!1), i = t.onCarePlan, a = t.items || [];
  return /* @__PURE__ */ e("div", { class: "sid__careplan", children: [
    /* @__PURE__ */ e(
      "button",
      {
        class: "sid__careplan-toggle",
        type: "button",
        onClick: () => a.length > 0 && s(!n),
        children: [
          /* @__PURE__ */ e("span", { class: `sid__careplan-dot ${i ? "sid__careplan-dot--on" : "sid__careplan-dot--off"}` }),
          /* @__PURE__ */ e("span", { class: "sid__careplan-title", children: "Care Plan" }),
          /* @__PURE__ */ e("span", { class: "sid__careplan-status", children: i ? "On Care Plan" : "Not on Care Plan" }),
          a.length > 0 && /* @__PURE__ */ e("span", { class: `sid__findings-arrow ${n ? "sid__findings-arrow--open" : ""}`, children: "▶" })
        ]
      }
    ),
    n && a.length > 0 && /* @__PURE__ */ e("ul", { class: "sid__careplan-items", children: a.map((r, o) => /* @__PURE__ */ e("li", { children: r }, o)) })
  ] });
}
function ni({ variant: t = "compact", data: n, detectionItem: s, mdsItem: i, onViewSource: a, onDismiss: r, dismissing: o, assessmentId: c }) {
  const l = t === "full", d = n?.item, u = !!d?.columns, p = d && !u, m = !!(n?.diagnosisSummary || n?.treatmentSummary);
  let h = d?.status;
  !h && u && (h = Object.values(d.columns || {}).some((ae) => ae?.answer?.toLowerCase() === "yes") ? "code" : "dont_code");
  const _ = h === "needs_physician_query", g = h === "code" || h === "recommend_coding", f = _ ? "sid__verdict-dot--query" : g ? "sid__verdict-dot--code" : "sid__verdict-dot--no-code", y = _ ? "Needs Query" : g ? "Recommend Coding" : h?.replace(/_/g, " ") || "Don't Code", w = d?.evidence || d?.queryEvidence || [], k = [];
  if (u) {
    const W = /* @__PURE__ */ new Set();
    for (const ae of Object.values(d.columns || {}))
      ae?.evidence && ae.evidence.forEach((me) => {
        const K = me.sourceId || me.quote || JSON.stringify(me);
        W.has(K) || (W.add(K), k.push(me));
      });
  }
  const C = p ? w : k, [I, P] = v(!1), [A, x] = v(null), D = {};
  C.forEach((W) => {
    const ae = Qn(W);
    D[ae] = (D[ae] || 0) + 1;
  });
  const N = Object.keys(D).sort(), S = N.length > 1, E = A ? C.filter((W) => Qn(W) === A) : C, B = I ? E : E.slice(0, 4), M = d?.keyFindings || [], [q, L] = v(l), O = s?.impact, Z = O && (O.slp || O.nta || O.nursing || O.ptot), j = d?.columns || {}, $ = Object.keys(j), [H, te] = v($[0] || "A"), T = j[H], R = d?.subItems || [], [z, V] = v(!1), [ie, X] = v(""), ne = i?.startsWith("I8000:") ? "I8000" : i;
  return /* @__PURE__ */ e(J, { children: [
    /* @__PURE__ */ e("div", { class: "sid__verdict", children: [
      /* @__PURE__ */ e("span", { class: `sid__verdict-dot ${f}` }),
      /* @__PURE__ */ e("span", { class: "sid__verdict-text", children: y })
    ] }),
    m && /* @__PURE__ */ e(
      er,
      {
        diagnosisSummary: n.diagnosisSummary,
        treatmentSummary: n.treatmentSummary,
        validation: d?.validation
      }
    ),
    m && n?.carePlan && /* @__PURE__ */ e(nr, { carePlan: n.carePlan }),
    !m && u && T && /* @__PURE__ */ e("div", { class: "sid__rationale", children: [
      /* @__PURE__ */ e("div", { class: "sid__col-answer", children: [
        /* @__PURE__ */ e("span", { class: "sid__col-label", children: [
          "Column ",
          H,
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
    !m && !u && /* @__PURE__ */ e(tr, { rationale: d?.rationale }),
    u && $.length > 1 && /* @__PURE__ */ e("div", { class: "sid__coltabs", children: $.map((W) => {
      const me = j[W]?.answer?.toLowerCase() === "yes";
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `sid__coltab ${H === W ? "sid__coltab--on" : ""}`,
          onClick: () => te(W),
          children: [
            "Col ",
            W,
            /* @__PURE__ */ e("span", { class: `sid__coltab-dot ${me ? "sid__coltab-dot--yes" : ""}` })
          ]
        },
        W
      );
    }) }),
    R.length > 0 && /* @__PURE__ */ e("div", { class: "sid__subs", children: R.map((W, ae) => {
      const me = W.columns?.A;
      if (!me) return null;
      const K = me.answer?.toLowerCase() === "yes";
      return /* @__PURE__ */ e("div", { class: `sid__sub ${K ? "sid__sub--on" : ""}`, children: [
        /* @__PURE__ */ e("span", { class: `sid__sub-dot ${K ? "sid__sub-dot--yes" : ""}`, children: K ? "✓" : "–" }),
        /* @__PURE__ */ e("span", { class: "sid__sub-name", children: W.description })
      ] }, W.mdsItem || ae);
    }) }),
    l && Z && /* @__PURE__ */ e("div", { class: "sid__impacts", children: [
      /* @__PURE__ */ e(Xe, { label: "NTA", impact: O.nta }),
      /* @__PURE__ */ e(Xe, { label: "Nursing", impact: O.nursing }),
      /* @__PURE__ */ e(Xe, { label: "SLP", impact: O.slp }),
      /* @__PURE__ */ e(Xe, { label: "PT/OT", impact: O.ptot })
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
      /* @__PURE__ */ e("div", { class: "super-falls-list", children: d.falls.map((W, ae) => /* @__PURE__ */ e(Za, { fall: W }, W.incidentId || ae)) })
    ] }),
    C.length > 0 && /* @__PURE__ */ e("div", { class: "sid__evidence", children: [
      /* @__PURE__ */ e("div", { class: "sid__ev-label", children: [
        "Evidence (",
        C.length,
        ")"
      ] }),
      S && /* @__PURE__ */ e("div", { class: "sid__ev-filters", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `sid__ev-chip ${A === null ? "sid__ev-chip--active" : ""}`,
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
        N.map((W) => /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `sid__ev-chip ${A === W ? "sid__ev-chip--active" : ""}`,
            onClick: () => {
              x(A === W ? null : W), P(!1);
            },
            children: [
              Ya[W] || W,
              " (",
              D[W],
              ")"
            ]
          },
          W
        ))
      ] }),
      /* @__PURE__ */ e("div", { class: "sid__ev-list", children: B.map((W, ae) => /* @__PURE__ */ e(Xa, { ev: W, index: ae, onViewSource: a }, ae)) }),
      E.length > 4 && !I && /* @__PURE__ */ e("button", { class: "sid__ev-show-more", type: "button", onClick: () => P(!0), children: [
        "Show all ",
        E.length,
        " ↓"
      ] })
    ] }),
    M.length > 0 && /* @__PURE__ */ e(J, { children: [
      /* @__PURE__ */ e("button", { class: "sid__findings-toggle", type: "button", onClick: () => L(!q), children: [
        /* @__PURE__ */ e("span", { class: `sid__findings-arrow ${q ? "sid__findings-arrow--open" : ""}`, children: "▶" }),
        "Key Findings (",
        M.length,
        ")"
      ] }),
      q && /* @__PURE__ */ e("ul", { class: "sid__findings", children: M.map((W, ae) => /* @__PURE__ */ e("li", { children: W }, ae)) })
    ] }),
    z && r ? /* @__PURE__ */ e("div", { class: "sid__dismiss-form", children: [
      /* @__PURE__ */ e("label", { children: "Why do you disagree? (optional)" }),
      /* @__PURE__ */ e(
        "textarea",
        {
          value: ie,
          onInput: (W) => X(W.target.value),
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
              V(!1), X("");
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
            onClick: () => r(ie),
            children: o ? "Submitting..." : "Submit"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e("div", { class: "sid__actions", children: [
      r && /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--dismiss", type: "button", onClick: () => V(!0), children: "Dismiss" }),
      /* @__PURE__ */ e("div", { class: "sid__actions-right", children: [
        /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--primary", onClick: () => {
          const W = {
            mdsItem: d?.mdsItem || i,
            description: d?.description || s?.itemName,
            aiAnswer: d
          };
          window.QuerySendModal?.show(W);
        }, type: "button", children: "Query Physician" }),
        i && /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--secondary", onClick: () => window.navigateToMDSItem?.(i, c), type: "button", children: [
          "Go to ",
          ne,
          " ↗"
        ] })
      ] })
    ] })
  ] });
}
const ve = [50, 75, 100, 125, 150, 200], sr = 100;
function fn({
  url: t,
  wordBlocks: n = [],
  targetPage: s = 1,
  title: i = "Document",
  documentType: a,
  effectiveDate: r,
  fileSize: o,
  onClose: c,
  openInNewTabUrl: l
}) {
  const [d, u] = v(null), [p, m] = v(s), [h, _] = v(1), [g, f] = v(sr), [y, w] = v(0), [k, C] = v(!0), [I, P] = v(!1), [A, x] = v(null), [D, N] = v(String(s)), S = ee(null), E = ee(null), B = ee(null), M = ee({}), q = ee(null), L = ee(0);
  o && (o / 1024 > 1024 ? `${(o / 1024 / 1024).toFixed(1)}` : `${(o / 1024).toFixed(0)}`);
  const O = (T) => {
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
  F(() => {
    if (!t) {
      x("No document URL available"), C(!1);
      return;
    }
    let T = !1;
    return (async () => {
      try {
        if (typeof pdfjsLib > "u") throw new Error("PDF.js library not loaded");
        pdfjsLib.GlobalWorkerOptions.workerSrc || (pdfjsLib.GlobalWorkerOptions.workerSrc = chrome.runtime.getURL("lib/pdf.worker.min.js"));
        const R = await pdfjsLib.getDocument(t).promise;
        if (T) return;
        const z = Math.min(s, R.numPages);
        u(R), _(R.numPages), m(z), N(String(z)), C(!1);
      } catch (R) {
        T || (console.error("[PDFViewer] Load failed:", R), x(`Failed to load PDF: ${R.message}`), C(!1));
      }
    })(), () => {
      T = !0;
    };
  }, [t]);
  const Z = U(async (T) => {
    if (!d) return;
    const R = S.current, z = E.current, V = B.current;
    if (!R || !z || !V) return;
    const ie = ++L.current, X = Math.max(1, Math.min(T, h));
    P(!0);
    try {
      const ne = await d.getPage(X);
      if (L.current !== ie) return;
      const W = await ir(ne, X, M, y), ae = V.clientWidth, me = Math.max(ae - 16, 200), K = ne.getViewport({ scale: 1, rotation: W }), ye = me / K.width * (g / 100), he = ne.getViewport({ scale: ye, rotation: W }), xe = R.getContext("2d"), In = z.getContext("2d");
      if (R.width = he.width, R.height = he.height, z.width = he.width, z.height = he.height, xe.clearRect(0, 0, R.width, R.height), In.clearRect(0, 0, z.width, z.height), await ne.render({ canvasContext: xe, viewport: he }).promise, L.current !== ie) return;
      const Dn = (n || []).filter((Ye) => Ye.p === X);
      if (Dn.length > 0) {
        const Ye = or(In, Dn, he, W);
        Ye.length > 0 && cr(Ye, V);
      }
    } catch (ne) {
      console.error("[PDFViewer] Render failed:", ne);
    } finally {
      L.current === ie && P(!1);
    }
  }, [d, h, g, y, n]);
  F(() => {
    d && Z(p);
  }, [d, p, g, y, Z]);
  const j = U((T) => {
    const R = Math.max(1, Math.min(T, h));
    m(R), N(String(R));
  }, [h]), $ = U((T) => {
    f((R) => {
      const z = ve.indexOf(R);
      if (z === -1) {
        const V = ve.reduce((X, ne) => Math.abs(ne - R) < Math.abs(X - R) ? ne : X), ie = ve.indexOf(V);
        return ve[Math.max(0, Math.min(ie + T, ve.length - 1))];
      }
      return ve[Math.max(0, Math.min(z + T, ve.length - 1))];
    });
  }, []), H = U(() => {
    w((T) => (T + 90) % 360), M.current = {};
  }, []);
  F(() => {
    const T = (R) => {
      if (q.current && !(R.target.tagName === "INPUT" || R.target.tagName === "TEXTAREA") && q.current.closest(".super-pdf-modal"))
        switch (R.key) {
          case "ArrowLeft":
            R.preventDefault(), m((z) => {
              const V = Math.max(1, z - 1);
              return N(String(V)), V;
            });
            break;
          case "ArrowRight":
            R.preventDefault(), m((z) => {
              const V = Math.min(h, z + 1);
              return N(String(V)), V;
            });
            break;
          case "+":
          case "=":
            R.preventDefault(), $(1);
            break;
          case "-":
            R.preventDefault(), $(-1);
            break;
          case "r":
          case "R":
            R.preventDefault(), H();
            break;
        }
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [h, $, H]);
  const te = () => {
    const T = parseInt(D, 10);
    !isNaN(T) && T >= 1 && T <= h ? j(T) : N(String(p));
  };
  return k ? /* @__PURE__ */ e("div", { class: "super-pdfv super-pdfv--center", ref: q, children: /* @__PURE__ */ e("div", { class: "super-pdfv__loader", children: [
    /* @__PURE__ */ e("div", { class: "super-pdfv__loader-ring" }),
    /* @__PURE__ */ e("span", { children: "Loading document..." })
  ] }) }) : A ? /* @__PURE__ */ e("div", { class: "super-pdfv super-pdfv--center", ref: q, children: /* @__PURE__ */ e("div", { class: "super-pdfv__empty-state", children: [
    /* @__PURE__ */ e("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "#9ca3af", "stroke-width": "1.5", children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
    ] }),
    /* @__PURE__ */ e("p", { children: A })
  ] }) }) : /* @__PURE__ */ e("div", { class: "super-pdfv", ref: q, children: [
    /* @__PURE__ */ e("div", { class: "super-pdfv__header", children: [
      /* @__PURE__ */ e("div", { class: "super-pdfv__header-left", children: [
        /* @__PURE__ */ e("svg", { class: "super-pdfv__header-icon", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
          /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" })
        ] }),
        /* @__PURE__ */ e("span", { class: "super-pdfv__header-title", children: i }),
        r && /* @__PURE__ */ e("span", { class: "super-pdfv__header-date", children: O(r) })
      ] }),
      /* @__PURE__ */ e("div", { class: "super-pdfv__header-right", children: [
        /* @__PURE__ */ e("div", { class: "super-pdfv__group", children: [
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => j(p - 1), disabled: p <= 1, title: "Previous page", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", children: /* @__PURE__ */ e("polyline", { points: "15 18 9 12 15 6" }) }) }),
          /* @__PURE__ */ e("div", { class: "super-pdfv__page-pill", children: [
            /* @__PURE__ */ e(
              "input",
              {
                class: "super-pdfv__page-input",
                type: "text",
                value: D,
                onInput: (T) => N(T.target.value),
                onBlur: te,
                onKeyDown: (T) => T.key === "Enter" && T.target.blur(),
                style: { width: `${Math.max(2, String(h).length + 0.5)}ch` }
              }
            ),
            /* @__PURE__ */ e("span", { class: "super-pdfv__page-of", children: [
              "of ",
              h
            ] })
          ] }),
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => j(p + 1), disabled: p >= h, title: "Next page", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", children: /* @__PURE__ */ e("polyline", { points: "9 18 15 12 9 6" }) }) })
        ] }),
        /* @__PURE__ */ e("div", { class: "super-pdfv__tb-sep" }),
        /* @__PURE__ */ e("div", { class: "super-pdfv__group", children: [
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => $(-1), disabled: g <= ve[0], title: "Zoom out", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) }) }),
          /* @__PURE__ */ e("span", { class: "super-pdfv__zoom-label", children: [
            g,
            "%"
          ] }),
          /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: () => $(1), disabled: g >= ve[ve.length - 1], title: "Zoom in", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
            /* @__PURE__ */ e("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
            /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
          ] }) })
        ] }),
        /* @__PURE__ */ e("div", { class: "super-pdfv__tb-sep" }),
        /* @__PURE__ */ e("button", { class: "super-pdfv__tb-btn", onClick: H, title: "Rotate 90°", children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
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
    /* @__PURE__ */ e("div", { class: "super-pdfv__scroll", ref: B, children: [
      /* @__PURE__ */ e("div", { class: "super-pdfv__canvas-wrap", children: [
        /* @__PURE__ */ e("canvas", { class: "super-pdfv__canvas", ref: S }),
        /* @__PURE__ */ e("canvas", { class: "super-pdfv__highlight", ref: E })
      ] }),
      I && /* @__PURE__ */ e("div", { class: "super-pdfv__page-loading", children: /* @__PURE__ */ e("div", { class: "super-pdfv__loader-ring super-pdfv__loader-ring--sm" }) })
    ] })
  ] });
}
async function ir(t, n, s, i) {
  if (s.current[n] !== void 0)
    return (s.current[n] + i) % 360;
  const a = t.view, r = a[2] - a[0], o = a[3] - a[1];
  let c = 0, l = 0;
  try {
    const u = (await t.getTextContent()).items.filter((p) => p.str && p.str.trim().length > 0);
    if (l = u.length, u.length >= 3) {
      const p = { 0: 0, 90: 0, 180: 0, 270: 0 };
      for (const _ of u) {
        const [g, f] = _.transform, y = Math.abs(g), w = Math.abs(f);
        y < 0.01 && w < 0.01 || (y > w ? p[g > 0 ? 0 : 180]++ : p[f > 0 ? 90 : 270]++);
      }
      let m = 0, h = 0;
      for (const [_, g] of Object.entries(p))
        g > m && (m = g, h = parseInt(_));
      h !== 0 && (c = h);
    }
  } catch {
  }
  if (c === 0 && l < 3)
    try {
      const d = await t.getOperatorList();
      let u = [1, 0, 0, 1, 0, 0];
      for (let p = 0; p < d.fnArray.length; p++)
        if (d.fnArray[p] === 12 && (u = d.argsArray[p]), d.fnArray[p] === 85 || d.fnArray[p] === 82) {
          const [m, h] = u;
          Math.abs(h) > Math.abs(m) * 5 && Math.abs(u[2]) > Math.abs(u[3]) * 5 && (c = h > 0 ? 270 : 90);
          break;
        }
    } catch {
    }
  return c === 0 && r > o * 1.05 && (c = 90), s.current[n] = c, (c + i) % 360;
}
function ar(t, n, s, i) {
  const { x: a, y: r, w: o, h: c } = t, l = i % 360;
  return l === 0 ? { x: a * n, y: r * s, w: o * n, h: c * s } : l === 90 ? { x: (1 - r - c) * n, y: a * s, w: c * n, h: o * s } : l === 180 ? { x: (1 - a - o) * n, y: (1 - r - c) * s, w: o * n, h: c * s } : { x: r * n, y: (1 - a - o) * s, w: c * n, h: o * s };
}
function rr(t) {
  if (t.length <= 1) return t;
  const n = [...t].sort((a, r) => a.y - r.y || a.x - r.x), s = [];
  let i = { ...n[0] };
  for (let a = 1; a < n.length; a++) {
    const r = n[a], o = Math.max(i.h, r.h), c = Math.abs(i.y + i.h / 2 - (r.y + r.h / 2)) < o * 0.6, d = r.x - (i.x + i.w) < o * 0.5;
    if (c && d) {
      const u = Math.max(i.x + i.w, r.x + r.w), p = Math.min(i.y, r.y), m = Math.max(i.y + i.h, r.y + r.h);
      i.x = Math.min(i.x, r.x), i.y = p, i.w = u - i.x, i.h = m - p;
    } else
      s.push(i), i = { ...r };
  }
  return s.push(i), s;
}
function or(t, n, s, i) {
  const a = s.width, r = s.height, o = n.map((l) => ar(l, a, r, i)), c = rr(o);
  return t.fillStyle = "rgba(250, 204, 21, 0.28)", c.forEach((l) => {
    const p = l.x - 2, m = l.y - 2, h = l.w + 4, _ = l.h + 4;
    t.beginPath(), t.moveTo(p + 3, m), t.lineTo(p + h - 3, m), t.quadraticCurveTo(p + h, m, p + h, m + 3), t.lineTo(p + h, m + _ - 3), t.quadraticCurveTo(p + h, m + _, p + h - 3, m + _), t.lineTo(p + 3, m + _), t.quadraticCurveTo(p, m + _, p, m + _ - 3), t.lineTo(p, m + 3), t.quadraticCurveTo(p, m, p + 3, m), t.closePath(), t.fill();
  }), c.map((l, d) => ({ ...l, isActive: d === 0 }));
}
function cr(t, n) {
  if (!t.length || !n) return;
  const s = t.find((a) => a.isActive) || t[0], i = n.querySelector(".super-pdfv__canvas-wrap");
  i && requestAnimationFrame(() => {
    const a = n.getBoundingClientRect(), r = i.getBoundingClientRect(), o = r.left - a.left + n.scrollLeft, c = r.top - a.top + n.scrollTop;
    n.scrollTo({
      left: Math.max(0, o + s.x + s.w / 2 - n.clientWidth / 2),
      top: Math.max(0, c + s.y + s.h / 2 - n.clientHeight / 2),
      behavior: "smooth"
    });
  });
}
function dr(t) {
  const { sourceType: n, evidenceId: s } = t, i = t.sourceId || t.id || "", a = t.type;
  if (n === "progress-note" && i)
    return { viewerType: "clinical-note", id: i };
  if (n === "therapy-doc" && i)
    return { viewerType: "therapy-document", id: i };
  if (n === "document" && i)
    return { viewerType: "document", id: i };
  if (n === "uda") {
    const o = (i || s || "").replace(/^uda-/, "");
    if (o) return { viewerType: "uda", id: o };
  }
  if (i && i.includes("-chunk-"))
    return { viewerType: "document", id: i.split("-chunk-")[0], chunk: parseInt(i.split("-chunk-")[1], 10) };
  if (a === "clinical_note" && i)
    return { viewerType: "clinical-note", id: i.replace(/^pcc-prognote-/, "").replace(/^patient-practnote-/, "") };
  if (a === "therapy_document" && i)
    return { viewerType: "therapy-document", id: i.replace(/^therapy-doc-/, "") };
  if (a === "document" && i)
    return { viewerType: "document", id: i };
  const r = s || i;
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
function bt() {
  const t = document.querySelector(".icd10-viewer-modal__container");
  return t || document.body;
}
async function lr(t, n) {
  const s = `/api/extension/clinical-notes/${t}?facilityName=${encodeURIComponent(n.facilityName)}&orgSlug=${n.orgSlug}`, i = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: s
  });
  if (!i.success) throw new Error(i.error);
  return i.data;
}
async function pr(t, n) {
  const s = `/api/extension/therapy-documents/${t}?facilityName=${encodeURIComponent(n.facilityName)}&orgSlug=${n.orgSlug}`, i = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: s
  });
  if (!i.success) throw new Error(i.error);
  return i.data;
}
async function Qe(t, n) {
  const s = `/api/extension/documents/${t}?facilityName=${encodeURIComponent(n.facilityName)}&orgSlug=${n.orgSlug}`, i = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: s
  });
  if (!i.success) throw new Error(i.error);
  return i.data;
}
async function ur(t, n, s, i = null) {
  let a = `/api/extension/patients/${n}/uda/${t}?facilityName=${encodeURIComponent(s.facilityName)}&orgSlug=${s.orgSlug}`;
  i && (a += `&quote=${encodeURIComponent(i)}`);
  const r = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: a
  });
  if (!r.success) throw new Error(r.error);
  return r.data;
}
function mr() {
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
function Q(t) {
  return t ? String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "";
}
function gt(t) {
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
function hr(t) {
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
const It = "data-evidence-highlight";
function ft(t) {
  return t ? t.toLowerCase().replace(/\s+/g, " ").trim() : "";
}
function si(t, n) {
  if (!t || !n) return !1;
  const s = ft(t), i = ft(n);
  return s.length < 10 || i.length < 10 ? !1 : s.includes(i) || i.includes(s);
}
function ii(t, n, s = 4) {
  if (!t || !n) return !1;
  const i = ft(t);
  return ft(n).split(/\s+/).filter((c) => c.length >= s).filter((c) => i.includes(c)).length >= 2;
}
function yt(t, n) {
  return si(n, t) || ii(n, t);
}
function _r(t, n) {
  return t.some((s) => si(s, n) || ii(s, n));
}
function zn(t) {
  if (!t) return "";
  try {
    const n = new Date(t);
    if (isNaN(n.getTime())) return t;
    const s = n.getMonth() + 1, i = n.getDate(), a = n.getFullYear();
    let r = n.getHours();
    const o = n.getMinutes().toString().padStart(2, "0"), c = n.getSeconds().toString().padStart(2, "0"), l = r >= 12 ? "PM" : "AM";
    return r = r % 12 || 12, `${s}/${i}/${a} ${r}:${o}:${c} ${l}`;
  } catch {
    return t;
  }
}
function fe(t, n) {
  const s = !document.querySelector(".icd10-viewer-modal__container");
  s && (document.body.style.overflow = "hidden");
  const i = () => {
    s && (document.body.style.overflow = ""), t.remove();
  };
  t.querySelector(`.${n}__close`).addEventListener("click", i), t.querySelector(`.${n}__backdrop`).addEventListener("click", i);
  const a = (r) => {
    r.key === "Escape" && (i(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a);
}
function yn(t, n, s) {
  const i = t.querySelector(`.${s}__body`);
  i.innerHTML = `
    <div class="super-viewer-error">
      <div class="super-viewer-error__icon">⚠️</div>
      <div class="super-viewer-error__message">${Q(n)}</div>
    </div>
  `;
}
async function gr(t) {
  const n = await window.getCurrentParams(), s = fr();
  bt().appendChild(s);
  try {
    const i = await lr(t, n);
    yr(s, i.note);
  } catch (i) {
    yn(s, i.message, "super-note-modal");
  }
}
function fr() {
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
function yr(t, n) {
  const s = t.querySelector(".super-note-modal__container"), i = n.noteType === "practitioner" ? "Practitioner Note" : "Progress Note", a = n.noteType === "practitioner" ? "super-note-badge--practitioner" : "super-note-badge--progress";
  s.innerHTML = `
    <div class="super-note-modal__header">
      <div class="super-note-modal__title-row">
        <span class="super-note-modal__icon">📝</span>
        <div class="super-note-modal__title">
          <span class="super-note-modal__name">${Q(n.department || i)}</span>
          <span class="super-note-badge ${a}">${i}</span>
        </div>
        <button class="super-note-modal__close">&times;</button>
      </div>
      ${n.provider ? `<div class="super-note-modal__provider">${Q(n.provider)}</div>` : ""}
      <div class="super-note-modal__meta">
        ${n.effectiveDate ? `<span>${gt(n.effectiveDate)}</span>` : ""}
        ${n.visitType ? `<span class="super-note-modal__visit-type">${Q(n.visitType)}</span>` : ""}
        ${n.task ? `<span class="super-note-modal__task">${Q(n.task)}</span>` : ""}
      </div>
    </div>

    <div class="super-note-modal__body">
      <div class="super-note-modal__text">${Q(n.noteText || "No note content available.")}</div>
    </div>

    <div class="super-note-modal__footer">
      ${n.signedDate ? `<span class="super-note-modal__signed">Signed: ${hr(n.signedDate)}</span>` : ""}
      ${n.hasAddendum ? '<span class="super-note-modal__addendum">Has Addendum</span>' : ""}
    </div>
  `, fe(t, "super-note-modal");
}
async function vr(t, n = null) {
  const s = await window.getCurrentParams(), i = wr();
  bt().appendChild(i);
  try {
    const a = await pr(t, s);
    br(i, a.therapyDocument, n);
  } catch (a) {
    yn(i, a.message, "super-therapy-modal");
  }
}
function wr() {
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
  `, fe(t, "super-therapy-modal"), Se(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  }), t;
}
function Se(t) {
  const n = [50, 75, 100, 125, 150];
  t.querySelectorAll(".super-therapy-modal__zoom-btn").forEach((s) => {
    s.addEventListener("click", () => {
      const i = s.dataset.zoomAction, a = parseInt(t.dataset.zoom) || 100, r = n.indexOf(a);
      let o = a;
      i === "in" && r < n.length - 1 ? o = n[r + 1] : i === "out" && r > 0 && (o = n[r - 1]), t.dataset.zoom = o;
      const c = t.querySelector(".super-therapy-modal__zoom-level");
      c && (c.textContent = `${o}%`);
      const l = t.querySelector(".super-therapy-doc");
      l && (l.style.transform = `scale(${o / 100})`, l.style.transformOrigin = "top center");
    });
  });
}
function br(t, n, s = null) {
  const { documentType: i } = n;
  switch (i) {
    case "EVAL":
      Nr(t, n, s);
      break;
    case "TEN":
      Cr(t, n, s);
      break;
    case "PR":
      Sr(t, n, s);
      break;
    case "RECERT":
      xr(t, n, s);
      break;
    case "DISCH":
      Pr(t, n, s);
      break;
    default:
      Tr(t, n, s);
  }
  s && setTimeout(() => {
    Ir(t);
  }, 100);
}
function Ir(t) {
  const n = t.querySelectorAll(`[${It}="true"]`);
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
  const i = t.querySelector(".super-therapy-modal__body");
  i && i.appendChild(s);
  let a = 0;
  const r = (o) => {
    n.forEach((c) => c.classList.remove("super-therapy-highlight--active")), n[o].classList.add("super-therapy-highlight--active"), n[o].scrollIntoView({ behavior: "smooth", block: "center" }), s.querySelector(".super-therapy-highlight-nav__count").textContent = `${o + 1} of ${n.length}`;
  };
  s.querySelectorAll(".super-therapy-highlight-nav__btn").forEach((o) => {
    o.addEventListener("click", () => {
      o.dataset.action === "prev" ? a = a > 0 ? a - 1 : n.length - 1 : a = a < n.length - 1 ? a + 1 : 0, r(a);
    });
  }), n[0].classList.add("super-therapy-highlight--active");
}
const Dr = {
  PT: "Physical Therapy",
  OT: "Occupational Therapy",
  ST: "Speech Therapy"
}, kr = {
  EVAL: "Initial Evaluation",
  TEN: "Treatment Encounter Note(s)",
  PR: "Progress Report",
  RECERT: "Recertification",
  DISCH: "Discharge Summary"
};
function re(t, ...n) {
  for (const s of n) {
    if (t[s] !== void 0) return t[s];
    const i = s.charAt(0).toUpperCase() + s.slice(1);
    if (t[i] !== void 0) return t[i];
  }
  return null;
}
function Re(t) {
  const n = t.jsonData || {}, s = n.Parameters || n.parameters || {}, i = t.discipline || "", a = Dr[i] || i || "Therapy", r = t.documentType || "", o = kr[r] || n.BodyDocumentName || n.bodyDocumentName || r, c = t.providerName || re(s, "ProviderName", "providerName") || re(n, "HeaderProviderName", "headerProviderName") || "", l = re(s, "PatientName", "patientName") || re(n, "HeaderPatientName", "headerPatientName") || re(n, "BodyPatientName", "bodyPatientName") || "";
  return `
    <div class="super-therapy-doc__header">
      <div class="super-therapy-doc__discipline">${Q(a)}</div>
      <div class="super-therapy-doc__title">${Q(o)}</div>
    </div>
    <div class="super-therapy-doc__info-row">
      <div class="super-therapy-doc__provider">
        <span class="super-therapy-doc__provider-label">Provider: </span>${Q(c)}
      </div>
      <div class="super-therapy-doc__patient">${Q(l)}</div>
    </div>
  `;
}
function qe(t) {
  const n = t.jsonData || {}, s = n.Parameters || n.parameters || {}, i = re(s, "PatientName", "patientName") || re(n, "BodyPatientName", "bodyPatientName") || "", a = re(s, "MedicalRecordNumber", "medicalRecordNumber") || re(n, "BodyMRN", "bodyMRN") || "", r = re(s, "DateOfBirth", "dateOfBirth") || re(n, "BodyDOB", "bodyDOB") || "", o = re(s, "PayerName", "payerName") || "", c = re(s, "StartOfCare", "startOfCare") || "";
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Identification Information</div>
      <div class="super-therapy-section__body">
        <table class="super-therapy-id-table">
          <tr>
            <td class="super-therapy-id-table__label">Patient:</td>
            <td class="super-therapy-id-table__value">${Q(i)}</td>
            ${r ? `<td class="super-therapy-id-table__label">DOB:</td><td class="super-therapy-id-table__value">${Q(r)}</td>` : ""}
            ${c ? `<td class="super-therapy-id-table__label">Start of Care:</td><td class="super-therapy-id-table__value">${Q(c)}</td>` : ""}
          </tr>
          <tr>
            ${o ? `<td class="super-therapy-id-table__label">Payer:</td><td class="super-therapy-id-table__value">${Q(o)}</td>` : ""}
            <td class="super-therapy-id-table__label">MRN:</td>
            <td class="super-therapy-id-table__value" ${o ? "" : 'colspan="3"'}>${Q(a)}</td>
          </tr>
        </table>
      </div>
    </div>
  `;
}
function Dt(t) {
  if (!t || t.length === 0) return "";
  const n = t.filter((i) => i.IsMedicalDx || i.isMedicalDx), s = t.filter((i) => i.IsTreatmentDx || i.isTreatmentDx);
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
            ${n.map((i) => `
              <tr>
                <td>Medical</td>
                <td class="super-therapy-dx-table__code">${Q(i.Code || i.code || "")}</td>
                <td>${Q(i.Description || i.description || "")}</td>
                <td>${gt(i.OnsetDate || i.onsetDate) || "-"}</td>
              </tr>
            `).join("")}
            ${s.map((i) => `
              <tr>
                <td>Treatment</td>
                <td class="super-therapy-dx-table__code">${Q(i.Code || i.code || "")}</td>
                <td>${Q(i.Description || i.description || "")}</td>
                <td>${gt(i.OnsetDate || i.onsetDate) || "-"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function jn(t, n = !1, s = null) {
  const i = n ? "LTG" : "STG", a = t.GoalNum || t.goalNum || "?", r = t.GoalStatus || t.goalStatus || "Continue", o = `super-therapy-goal__status--${r.toLowerCase().replace(/\s+/g, "")}`, c = t.GoalText || t.goalText || "", l = t.TargetDate || t.targetDate || "", d = t.GoalPlofText || t.goalPlofText || "", u = t.BaselineValueText || t.baselineValueText || "", p = t.PriorValueText || t.priorValueText || "", m = t.CurrentValueText || t.currentValueText || "", h = t.Comments || t.comments || "", _ = t.MeasurementCaption || t.measurementCaption || "", y = _r([c, h, u, p, m, d], s) ? `${It}="true"` : "", w = yt(s, c) ? "super-therapy-highlight" : "", k = yt(s, h) ? "super-therapy-highlight" : "";
  return `
    <div class="super-therapy-goal" ${y}>
      <div class="super-therapy-goal__header">
        <div class="super-therapy-goal__title">${i} #${a} - ${r}</div>
        <span class="super-therapy-goal__status ${o}">${r}</span>
      </div>
      <div class="super-therapy-goal__body">
        <p class="super-therapy-goal__text ${w}">${Q(c)}</p>
        ${l ? `<p class="super-therapy-goal__target">Target: ${gt(l)}</p>` : ""}
      </div>
      <div class="super-therapy-goal__progress">
        <div>
          <div class="super-therapy-goal__progress-item">
            <div class="super-therapy-goal__progress-label">PLOF</div>
            <div class="super-therapy-goal__progress-value">${Q(d || "Not specified")}</div>
          </div>
          ${u ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Baseline${_ ? ` <span class="super-therapy-goal__progress-sublabel">(${Q(_)})</span>` : ""}</div>
              <div class="super-therapy-goal__progress-value">${Q(u)}</div>
            </div>
          ` : ""}
        </div>
        <div>
          ${p ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Previous</div>
              <div class="super-therapy-goal__progress-value">${Q(p)}</div>
            </div>
          ` : ""}
          ${m ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Current</div>
              <div class="super-therapy-goal__progress-value">${Q(m)}</div>
            </div>
          ` : ""}
        </div>
      </div>
      ${h ? `
        <div class="super-therapy-goal__comments">
          <span class="super-therapy-goal__comments-label">Comments: </span>
          <span class="${k}">${Q(h)}</span>
        </div>
      ` : ""}
    </div>
  `;
}
function vn(t, n = null) {
  if (!t || t.length === 0) return "";
  const s = t.filter((a) => !a.IsLongTerm && !a.isLongTerm), i = t.filter((a) => a.IsLongTerm || a.isLongTerm);
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Goals</div>
      <div class="super-therapy-section__body">
        ${i.length > 0 ? `
          <div class="super-therapy-goals-title">Long-Term Goals</div>
          ${i.map((a) => jn(a, !0, n)).join("")}
        ` : ""}
        ${s.length > 0 ? `
          <div class="super-therapy-goals-title">Short-Term Goals</div>
          ${s.map((a) => jn(a, !1, n)).join("")}
        ` : ""}
      </div>
    </div>
  `;
}
function wn(t) {
  return !t || t.length === 0 ? "" : `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Plan of Treatment - Interventions</div>
      <div class="super-therapy-section__body">
        ${t.map((n) => `
          <div class="super-therapy-intervention">
            <span class="super-therapy-intervention__code">${Q(n.Code || n.code || "")}</span>
            - ${Q(n.Description || n.description || "")}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
function kt(t, n = null) {
  if (!t || t.length === 0) return "";
  const s = {};
  return t.forEach((i) => {
    const a = i.PrintSectionName || i.printSectionName || i.SectionName || i.sectionName || "Assessment", r = i.PrintGroupName || i.printGroupName || i.GroupName || i.groupName || "", o = i.GroupValues || i.groupValues || "";
    s[a] || (s[a] = []), s[a].push({ groupName: r, values: o });
  }), Object.entries(s).map(([i, a]) => `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">${Q(i)}</div>
      <div class="super-therapy-section__body">
        ${a.map((r) => {
    const o = yt(n, r.values), c = o ? `${It}="true"` : "", l = o ? "super-therapy-highlight" : "";
    return `
            <div class="super-therapy-detail-item" ${c}>
              ${r.groupName ? `<div class="super-therapy-detail-item__name">${Q(r.groupName)}</div>` : ""}
              <div class="super-therapy-detail-item__value ${l}">${Q(r.values)}</div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `).join("");
}
function ai(t) {
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
              ${n.map((i) => `<th>${Q(i)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${s.map((i) => `
              <tr>
                <td class="super-therapy-matrix__service-col">${Q(i.ServiceCodeAndAbbrev || "")}</td>
                ${n.map((a) => {
    const r = i.DurationsByDate?.[a] || "";
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
function Ke(t) {
  if (!t) return "";
  const n = t.OriginalSignatureText || t.originalSignatureText, s = t.OriginalSignatureDate || t.originalSignatureDate, i = t.OriginalCoSignatureText || t.originalCoSignatureText, a = t.OriginalCosignatureDate || t.originalCosignatureDate;
  return !n && !i ? "" : `
    <div class="super-therapy-signatures">
      ${n ? `
        <div class="super-therapy-signature">
          <div class="super-therapy-signature__line">
            <div class="super-therapy-signature__name-area">
              <div class="super-therapy-signature__name">${Q(n)}</div>
              <div class="super-therapy-signature__label">Original Signature:</div>
            </div>
            ${s ? `
              <div class="super-therapy-signature__date-area">
                <div class="super-therapy-signature__date">${zn(s)}</div>
                <div class="super-therapy-signature__date-label">Date</div>
              </div>
            ` : ""}
          </div>
        </div>
      ` : ""}
      ${i ? `
        <div class="super-therapy-signature">
          <div class="super-therapy-signature__line">
            <div class="super-therapy-signature__name-area">
              <div class="super-therapy-signature__name">${Q(i)}</div>
              <div class="super-therapy-signature__label">Cosignature:</div>
            </div>
            ${a ? `
              <div class="super-therapy-signature__date-area">
                <div class="super-therapy-signature__date">${zn(a)}</div>
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
function Oe(t, n = 100) {
  return `
    <div class="super-therapy-modal__toolbar">
      <div class="super-therapy-modal__toolbar-title">${Q(t)}</div>
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
function Cr(t, n, s = null) {
  const i = t.querySelector(".super-therapy-modal__container"), a = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || `${n.discipline} TEN - Treatment Note`, c = a.Sections || a.sections || [], l = re(a, "CompletedDateFormatted", "completedDateFormatted") || "", d = re(a, "AssessmentDateFormatted", "assessmentDateFormatted") || l, u = {
    OriginalSignatureText: a.OriginalSignatureText || a.originalSignatureText,
    OriginalSignatureDate: a.OriginalSignatureDate || a.originalSignatureDate,
    OriginalCoSignatureText: a.OriginalCoSignatureText || a.originalCoSignatureText,
    OriginalCosignatureDate: a.OriginalCosignatureDate || a.originalCosignatureDate
  }, p = [], m = c[0];
  m && (m.Details || m.details || []).forEach((_) => {
    p.push({
      name: _.PrintGroupName || _.printGroupName || "",
      value: _.GroupValues || _.groupValues || ""
    });
  }), i.innerHTML = `
    ${Oe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Re(n)}
        ${qe(n)}

        <!-- Date of Service box -->
        <div class="super-therapy-dates-box">
          <div class="super-therapy-dates-box__item">Date of Service: ${Q(d)}</div>
          <div class="super-therapy-dates-box__item">Completed Date: ${Q(l)}</div>
        </div>

        <!-- Summary of Daily Skilled Services -->
        ${p.length > 0 ? `
          <div class="super-therapy-section">
            <div class="super-therapy-section-header">Summary of Daily Skilled Services</div>
            <div class="super-therapy-section__body">
              ${p.map((h) => {
    const _ = /^\d{5}/.test(h.name), g = yt(s, h.value), f = g ? `${It}="true"` : "", y = g ? "super-therapy-highlight" : "";
    return `
                  <div class="super-therapy-detail-item" ${f}>
                    <div class="super-therapy-detail-item__name ${_ ? "super-therapy-detail-item__name--code" : ""}">${Q(h.name)}</div>
                    <div class="super-therapy-detail-item__value ${y}">${Q(h.value)}</div>
                  </div>
                `;
  }).join("")}
            </div>
          </div>
        ` : ""}

        ${Ke(u)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Se(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function Nr(t, n, s = null) {
  const i = t.querySelector(".super-therapy-modal__container"), a = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || `${n.discipline} Eval - Initial Evaluation`, c = a.IdentifierInfo || a.identifierInfo || {}, l = a.Diagnoses || a.diagnoses || [], d = a.GoalTargets || a.goalTargets || [], u = a.Approaches || a.approaches || [], p = a.AssessmentLayout || a.assessmentLayout || [], m = a.ESignatures || a.eSignatures || {}, h = re(c, "Frequency", "frequency") || "", _ = re(c, "Duration", "duration") || "", g = re(c, "Intensity", "intensity") || "", f = re(c, "DateRange", "dateRange") || "", y = re(c, "PhysicianFullName", "physicianFullName") || "", w = re(c, "NPI", "npi") || "";
  i.innerHTML = `
    ${Oe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Re(n)}
        ${qe(n)}

        <!-- Treatment Plan Info -->
        ${h || _ || g || f ? `
          <div class="super-therapy-plan-info">
            ${f ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Certification Period: </span>${Q(f)}</div>` : ""}
            ${h ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Frequency: </span>${Q(h)}</div>` : ""}
            ${_ ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Duration: </span>${Q(_)}</div>` : ""}
            ${g ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Intensity: </span>${Q(g)}</div>` : ""}
          </div>
        ` : ""}

        <!-- Physician Certification -->
        ${y ? `
          <div class="super-therapy-section">
            <div class="super-therapy-section-header">Physician Certification</div>
            <div class="super-therapy-section__body">
              <div><strong>Physician:</strong> ${Q(y)}</div>
              ${w ? `<div><strong>NPI:</strong> ${Q(w)}</div>` : ""}
            </div>
          </div>
        ` : ""}

        ${Dt(l)}
        ${vn(d, s)}
        ${wn(u)}
        ${kt(p, s)}
        ${Ke(m)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Se(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function Sr(t, n, s = null) {
  const i = t.querySelector(".super-therapy-modal__container"), a = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || `${n.discipline} PR - Progress Report`, c = a.Diagnoses || a.diagnoses || [], l = a.AllActiveShortTermGoals || a.allActiveShortTermGoals || [], d = a.AllActiveLongTermGoals || a.allActiveLongTermGoals || [], u = [...l.map((g) => ({ ...g, IsLongTerm: !1 })), ...d.map((g) => ({ ...g, IsLongTerm: !0 }))], p = a.Approaches || a.approaches || [], m = a.AssessmentLayout || a.assessmentLayout || [], h = a.ServiceMatrixData || a.serviceMatrixData || {}, _ = a.ESignatures || a.eSignatures || {};
  i.innerHTML = `
    ${Oe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Re(n)}
        ${qe(n)}
        ${Dt(c)}
        ${vn(u, s)}
        ${ai(h)}
        ${wn(p)}
        ${kt(m, s)}
        ${Ke(_)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Se(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function xr(t, n, s = null) {
  const i = t.querySelector(".super-therapy-modal__container"), a = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || `${n.discipline} Recert - Recertification`, c = a.Diagnoses || a.diagnoses || [], l = a.ProgressGoalTargets || a.progressGoalTargets || [], d = a.Approaches || a.approaches || [], u = a.AssessmentLayout || a.assessmentLayout || [], p = a.ServiceMatrixData || a.serviceMatrixData || {}, m = a.ESignatures || a.eSignatures || {};
  i.innerHTML = `
    ${Oe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Re(n)}
        ${qe(n)}
        ${Dt(c)}
        ${vn(l, s)}
        ${ai(p)}
        ${wn(d)}
        ${kt(u, s)}
        ${Ke(m)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Se(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function Pr(t, n, s = null) {
  const i = t.querySelector(".super-therapy-modal__container"), a = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || `${n.discipline} Disch - Discharge Summary`, c = a.Diagnoses || a.diagnoses || [], l = a.AssessmentLayout || a.assessmentLayout || [], d = a.ESignatures || a.eSignatures || {};
  i.innerHTML = `
    ${Oe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Re(n)}
        ${qe(n)}
        ${Dt(c)}
        ${kt(l, s)}
        ${Ke(d)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Se(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
function Tr(t, n, s = null) {
  const i = t.querySelector(".super-therapy-modal__container"), a = n.jsonData || {}, r = parseInt(t.dataset.zoom) || 100, o = n.displayName || "Therapy Document";
  i.innerHTML = `
    ${Oe(o, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${Re(n)}
        ${qe(n)}
        <div class="super-therapy-section">
          <div class="super-therapy-section-header">Document Content</div>
          <div class="super-therapy-section__body">
            <pre class="super-therapy-raw-content">${Q(JSON.stringify(a, null, 2))}</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, fe(t, "super-therapy-modal"), Se(t), t.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", t.remove();
  });
}
async function Ar(t, n = null) {
  const s = await window.getCurrentParams(), i = Mr();
  bt().appendChild(i);
  try {
    const a = await Qe(t, s);
    Lr(i, a.document, n);
  } catch (a) {
    yn(i, a.message, "super-pdf-modal");
  }
}
function Mr() {
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
function Lr(t, n, s = null) {
  const i = t.querySelector(".super-pdf-modal__container"), a = s && s.length > 0 && s[0].p ? s[0].p : 1, r = () => {
    document.body.style.overflow = "", t.remove();
  };
  i.innerHTML = `
    <div class="super-pdf-modal__header">
      <div class="super-pdf-modal__title-row">
        <span class="super-pdf-modal__icon">📄</span>
        <div class="super-pdf-modal__title">
          <span class="super-pdf-modal__name">${Q(n.title || "Document")}</span>
          ${n.documentType ? `<span class="super-pdf-badge">${Q(n.documentType)}</span>` : ""}
        </div>
        <button class="super-pdf-modal__close">&times;</button>
      </div>
    </div>
    <div class="super-pdf-modal__body"></div>
  `, fe(t, "super-pdf-modal");
  const o = t.querySelector(".super-pdf-modal__body");
  Ce(
    G(fn, {
      url: n.signedUrl || null,
      wordBlocks: s || [],
      targetPage: a,
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
function Er() {
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
async function $r(t, n = null, s = null) {
  const i = await window.getCurrentParams(), a = s || mr(), r = Er(), o = !document.querySelector(".icd10-viewer-modal__container");
  bt().appendChild(r), o && (document.body.style.overflow = "hidden");
  const c = r.querySelector(".super-uda-modal__container"), l = () => {
    o && (document.body.style.overflow = ""), document.removeEventListener("keydown", d), r.remove();
  }, d = (u) => {
    u.key === "Escape" && l();
  };
  if (document.addEventListener("keydown", d), r.querySelector(".super-uda-modal__backdrop").addEventListener("click", l), !a) {
    c.innerHTML = '<div class="super-uda-modal__error">Missing patient context — open this from a patient page.</div>';
    return;
  }
  try {
    const u = await ur(t, a, i, n), p = u.uda, m = new Set(u.matchKeys || []);
    c.innerHTML = "", Ce(
      G(jt, { uda: p, matchKeys: m, quoteText: n, onClose: l }),
      c
    );
  } catch (u) {
    c.innerHTML = `<div class="super-uda-modal__error">${Q(u.message || "Failed to load UDA")}</div>`;
  }
}
window.showClinicalNoteModal = gr;
window.showTherapyDocModal = vr;
window.showDocumentModal = Ar;
window.showUdaModal = $r;
window.parseEvidenceForViewer = dr;
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
      const s = t.viewerId || t.sourceId || t.evidenceId || t.id || "", i = String(s).replace(/^uda-/, ""), a = t.quoteText || t.quote || "", r = t.patientId || null;
      i && window.showUdaModal(i, a, r);
    }
  }
};
function dt(t) {
  return t.sourceType === "order" || (t.evidenceId || "").startsWith("order-");
}
function Rr(t) {
  return (t.sourceId || t.evidenceId || "").replace(/^order-/, "");
}
function qr(t) {
  const n = ue(t).viewerType;
  return n === "document" || n === "clinical-note" || n === "therapy-document" || dt(t);
}
function Or({ item: t, context: n, onClose: s }) {
  const i = t?.mdsItem, a = t?.categoryKey, { data: r, loading: o, error: c } = ei(i, a, n), l = i?.startsWith("I8000:") ? "I8000" : i, [d, u] = v(null), p = ee(/* @__PURE__ */ new Map()), m = ee(null), h = ee(null), g = Hr(r).filter(qr), f = d && dt(d.ev), y = d ? ue(d.ev).viewerType : null, w = y === "clinical-note", k = y === "therapy-document", C = y === "uda", I = d && !f && !w && !k && !C, P = g.filter((M) => dt(M) ? !1 : ue(M).viewerType === "document");
  F(() => {
    if (!r || P.length === 0) return;
    (async () => {
      let q;
      try {
        q = await window.getCurrentParams();
      } catch {
        return;
      }
      for (const L of P) {
        const O = ue(L);
        if (!O.id || p.current.has(O.id)) continue;
        const Z = Qe(O.id, q).then((j) => {
          const $ = p.current.get(O.id);
          return $ && ($.document = j.document), j.document;
        }).catch((j) => (console.warn("[ItemPopover] Prefetch failed for", O.id, j), null));
        p.current.set(O.id, { document: null, promise: Z });
      }
    })();
  }, [r]);
  const [A, x] = v(null), [D, N] = v(!1);
  F(() => {
    if (!d || f || w || k || C) {
      x(null), N(!1);
      return;
    }
    const M = ue(d.ev);
    if (!M.id) return;
    const q = p.current.get(M.id);
    if (q?.document) {
      x(q.document), N(!1);
      return;
    }
    N(!0), (async () => {
      try {
        let O;
        if (q?.promise)
          O = await q.promise;
        else {
          const Z = await window.getCurrentParams();
          O = (await Qe(M.id, Z)).document, p.current.set(M.id, { document: O, promise: Promise.resolve(O) });
        }
        x(O);
      } catch (O) {
        console.error("[ItemPopover] Failed to load document:", O), x(null);
      } finally {
        N(!1);
      }
    })();
  }, [d, f, w, k, C]), F(() => {
    if (!f || !m.current) return;
    const M = m.current, q = Rr(d.ev);
    M.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading administrations...</span></div>', window.renderSplitAdministrations ? (async () => {
      const Z = getOrg()?.org, j = window.getChatFacilityInfo?.() || "", $ = { assessmentId: n?.assessmentId, orgSlug: Z, facilityName: j };
      await window.renderSplitAdministrations(M, q, void 0, $);
    })().catch((O) => {
      console.error("[ItemPopover] Failed to load administrations:", O), M.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load administrations</span></div>';
    }) : M.innerHTML = '<div class="cc-pop__viewer-loading"><span>Administration viewer not available</span></div>';
  }, [d, f]), F(() => {
    if (!w && !k || !h.current) return;
    const M = h.current, q = ue(d.ev), L = d.ev.quoteText || d.ev.quote || d.ev.snippet || "";
    M.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading...</span></div>', (async () => {
      const j = getOrg()?.org, $ = window.getChatFacilityInfo?.() || "", H = { assessmentId: n?.assessmentId, orgSlug: j, facilityName: $ };
      w && window.renderSplitNote ? await window.renderSplitNote(M, q.id, H) : k && window.renderSplitTherapy ? await window.renderSplitTherapy(M, q.id, L, H) : M.innerHTML = '<div class="cc-pop__viewer-loading"><span>Viewer not available</span></div>';
    })().catch((Z) => {
      console.error("[ItemPopover] Failed to load source:", Z), M.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load</span></div>';
    });
  }, [d, w, k]), F(() => {
    if (!C || !h.current) return;
    const M = h.current, q = ue(d.ev), L = d.ev.quoteText || d.ev.quote || d.ev.snippet || "";
    M.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading assessment...</span></div>', (async () => {
      window.renderSplitUda ? await window.renderSplitUda(M, q.id, L) : M.innerHTML = '<div class="cc-pop__viewer-loading"><span>UDA viewer not available</span></div>';
    })().catch((Z) => {
      console.error("[ItemPopover] Failed to load UDA:", Z), M.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load</span></div>';
    });
  }, [d, C]);
  const S = U((M, q) => {
    u({ ev: M, index: q });
  }, []), E = U(() => {
    u(null);
  }, []), B = d !== null;
  return /* @__PURE__ */ e("div", { class: "cc-pop__backdrop", onClick: (M) => {
    M.target === M.currentTarget && s();
  }, children: /* @__PURE__ */ e("div", { class: `cc-pop${B ? " cc-pop--split" : ""}`, onClick: (M) => M.stopPropagation(), children: [
    /* @__PURE__ */ e("div", { class: "cc-pop__header", children: /* @__PURE__ */ e("div", { class: "cc-pop__header-top", children: [
      /* @__PURE__ */ e("div", { class: "cc-pop__header-left", children: [
        B && /* @__PURE__ */ e("button", { class: "cc-pop__back-btn", onClick: E, type: "button", children: [
          /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("polyline", { points: "15 18 9 12 15 6" }) }),
          "Back"
        ] }),
        /* @__PURE__ */ e("span", { class: "cc-pop__code", children: l }),
        /* @__PURE__ */ e("span", { class: "cc-pop__name", children: t?.itemName || r?.item?.description || "Item Detail" })
      ] }),
      /* @__PURE__ */ e("button", { class: "cc-pop__close", onClick: s, type: "button", children: "×" })
    ] }) }),
    B ? /* @__PURE__ */ e("div", { class: "cc-pop__split-body", children: [
      /* @__PURE__ */ e("div", { class: "cc-pop__sources", children: [
        /* @__PURE__ */ e("div", { class: "cc-pop__sources-label", children: [
          "Sources (",
          g.length,
          ")"
        ] }),
        g.map((M, q) => {
          const L = dt(M), O = M.sourceType || _n(M.displayName, M.evidenceId), Z = M.displayName || gn[O] || (L ? "Orders" : "Document"), j = M.quoteText || M.orderDescription || M.quote || M.snippet || M.text || "", $ = M.wordBlocks?.[0]?.p, H = d.ev === M;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `cc-pop__source-card${H ? " cc-pop__source-card--active" : ""}`,
              onClick: () => u({ ev: M, index: q }),
              role: "button",
              children: [
                /* @__PURE__ */ e("div", { class: `cc-pop__source-badge${L ? " cc-pop__source-badge--order" : ""}`, children: Z }),
                j && /* @__PURE__ */ e("div", { class: "cc-pop__source-snippet", children: j }),
                !L && $ && /* @__PURE__ */ e("div", { class: "cc-pop__source-page", children: [
                  "Page ",
                  $
                ] })
              ]
            },
            q
          );
        })
      ] }),
      /* @__PURE__ */ e("div", { class: "cc-pop__viewer", children: [
        I && D && /* @__PURE__ */ e("div", { class: "cc-pop__viewer-loading", children: [
          /* @__PURE__ */ e("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
          /* @__PURE__ */ e("span", { children: "Loading document..." })
        ] }),
        I && !D && A && /* @__PURE__ */ e(
          fn,
          {
            url: A.signedUrl || null,
            wordBlocks: d.ev.wordBlocks || [],
            targetPage: d.ev.wordBlocks?.[0]?.p || 1,
            title: A.title || "Document",
            documentType: A.documentType,
            effectiveDate: A.effectiveDate,
            fileSize: A.fileSize,
            expiresAt: !0,
            openInNewTabUrl: A.signedUrl || null
          }
        ),
        I && !D && !A && /* @__PURE__ */ e("div", { class: "cc-pop__viewer-loading", children: /* @__PURE__ */ e("span", { children: "Failed to load document" }) }),
        f && /* @__PURE__ */ e("div", { ref: m, class: "cc-pop__admin-viewer" }),
        (w || k || C) && /* @__PURE__ */ e("div", { ref: h, class: "cc-pop__note-viewer" })
      ] })
    ] }) : /* @__PURE__ */ e("div", { class: "cc-pop__body", children: [
      o && /* @__PURE__ */ e("div", { class: "cc-pop__loading", children: [
        /* @__PURE__ */ e("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
        /* @__PURE__ */ e("span", { children: "Loading..." })
      ] }),
      c && /* @__PURE__ */ e("div", { class: "cc-pop__error", children: c }),
      !o && !c && r && /* @__PURE__ */ e(
        ni,
        {
          variant: "compact",
          data: r,
          detectionItem: t,
          mdsItem: i,
          onViewSource: S
        }
      )
    ] }),
    B && !o && !c && r && /* @__PURE__ */ e("div", { style: { padding: "0 16px 12px", flexShrink: 0, borderTop: "1px solid #e5e7eb" }, children: /* @__PURE__ */ e("div", { class: "sid__actions", children: [
      /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--primary", onClick: () => window.QuerySendModal?.show(r.item || r), type: "button", children: "Query Physician" }),
      i && /* @__PURE__ */ e("button", { class: "sid__btn sid__btn--secondary", onClick: () => window.navigateToMDSItem?.(i), type: "button", children: [
        "Go to ",
        l,
        " ↗"
      ] })
    ] }) })
  ] }) });
}
function Hr(t) {
  const n = t?.item;
  if (!n) return [];
  if (!!!n.columns) return n.evidence || n.queryEvidence || [];
  const i = [], a = /* @__PURE__ */ new Set();
  for (const r of Object.values(n.columns || {}))
    r?.evidence && r.evidence.forEach((o) => {
      const c = o.sourceId || o.quote || JSON.stringify(o);
      a.has(c) || (a.add(c), i.push(o));
    });
  return i;
}
function Br({ facilityName: t, orgSlug: n, enabled: s }) {
  const [i, a] = v(null), [r, o] = v(!1), [c, l] = v(null), d = U(async () => {
    if (!(!t || !n)) {
      o(!0), l(null);
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
        a(p.data);
      } catch (u) {
        console.error("[ComplianceDashboard] Failed to fetch:", u), l(u.message || "Failed to load compliance data");
      } finally {
        o(!1);
      }
    }
  }, [t, n, s]);
  return F(() => {
    d();
  }, [d, s]), { data: i, loading: r, error: c, retry: d };
}
function Fr({ facilityName: t, orgSlug: n, days: s = 30, enabled: i = !0 }) {
  const [a, r] = v(null), [o, c] = v(!1), [l, d] = v(null), u = U(async () => {
    if (!(!i || !t || !n)) {
      c(!0), d(null);
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
        c(!1);
      }
    }
  }, [t, n, s, i]);
  return F(() => {
    i && u();
  }, [u, i]), { data: a, loading: o, error: l, retry: u };
}
function Kn(t) {
  return new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Ur(t) {
  return t >= 80 ? "#22c55e" : t >= 50 ? "#f59e0b" : "#ef4444";
}
function Gr({ days: t }) {
  const n = t && t.length >= 3, { points: s, polygonPoints: i, color: a, latestScore: r, firstDate: o, lastDate: c } = Y(() => {
    if (!n) return {};
    const l = t.map((_, g) => {
      const f = 5 + g / (t.length - 1) * 290, y = 75 - _.averageScore / 100 * 70;
      return { x: f, y };
    }), d = l.map((_) => `${_.x},${_.y}`).join(" "), u = l[l.length - 1], p = l[0], m = d + ` ${u.x},75 ${p.x},75`, h = t[t.length - 1];
    return {
      points: d,
      polygonPoints: m,
      color: Ur(h.averageScore),
      latestScore: h.averageScore,
      firstDate: Kn(t[0].date),
      lastDate: Kn(h.date)
    };
  }, [t, n]);
  return n ? /* @__PURE__ */ e("div", { class: "cpc-cv__trend", children: [
    /* @__PURE__ */ e("svg", { viewBox: "0 0 300 80", width: "100%", height: "80", class: "cpc-cv__trend-svg", children: [
      /* @__PURE__ */ e(
        "polygon",
        {
          points: i,
          fill: a,
          opacity: "0.1"
        }
      ),
      /* @__PURE__ */ e(
        "polyline",
        {
          points: s,
          fill: "none",
          stroke: a,
          "stroke-width": "2"
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__trend-labels", style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#64748b", marginTop: "4px" }, children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__trend-date-start", children: o }),
      /* @__PURE__ */ e("span", { class: "cpc-cv__trend-score", style: { fontSize: "18px", fontWeight: 700, color: a }, children: [
        r,
        "%"
      ] }),
      /* @__PURE__ */ e("span", { class: "cpc-cv__trend-date-end", children: c })
    ] })
  ] }) : null;
}
const Vr = ({ scores: t, width: n = 48, height: s = 16 }) => {
  const { points: i, color: a, isSingle: r } = Y(() => {
    if (!t || t.length === 0)
      return { points: null, color: null, isSingle: !1 };
    const o = t[0].score, c = t[t.length - 1].score, l = c > o ? "#22c55e" : c < o ? "#ef4444" : "#9ca3af";
    if (t.length === 1)
      return { points: null, color: l, isSingle: !0 };
    const d = 1, u = (n - d * 2) / (t.length - 1), p = s - d * 2;
    return { points: t.map((h, _) => {
      const g = d + _ * u, f = d + p - h.score / 100 * p;
      return `${g},${f}`;
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
      children: r ? /* @__PURE__ */ e("circle", { cx: n / 2, cy: s / 2, r: 2, fill: a }) : /* @__PURE__ */ e(
        "polyline",
        {
          points: i,
          fill: "none",
          stroke: a,
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      )
    }
  );
};
function Wr({ patientId: t, facilityName: n, orgSlug: s }) {
  const [i, a] = v(null), [r, o] = v(null), [c, l] = v(!0), [d, u] = v(null), [p, m] = v(!1), h = U(async () => {
    if (t) {
      l(!0), u(null);
      try {
        const g = new URLSearchParams({ facilityName: n || "", orgSlug: s || "" }), [f, y] = await Promise.all([
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
        a(f.data), o(y.success ? y.data : null);
      } catch (g) {
        console.error("[CoveragePanel] Failed to fetch coverage:", g), u(g.message || "Failed to load coverage data");
      } finally {
        l(!1);
      }
    }
  }, [t, n, s]), _ = U(async () => {
    if (t) {
      m(!0);
      try {
        await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/patients/${t}/care-plans/check`,
          options: { method: "POST" }
        }), await new Promise((g) => setTimeout(g, 5e3)), await h();
      } catch (g) {
        console.error("[CoveragePanel] Refresh failed:", g), u("Refresh failed. Showing cached data.");
      } finally {
        m(!1);
      }
    }
  }, [t, h]);
  return F(() => {
    h();
  }, [h]), { summary: i, changes: r, loading: c, error: d, refreshing: p, refresh: _, retry: h };
}
async function Qr(t, n, s = 5) {
  const i = /* @__PURE__ */ new Map();
  try {
    const a = new URLSearchParams({
      facilityName: t || "",
      orgSlug: n || "",
      limit: String(s)
    }), r = await chrome.runtime.sendMessage({
      type: "API_REQUEST",
      endpoint: `/api/extension/compliance/dashboard/history?${a}`
    });
    if (r?.success && r?.data?.patients)
      for (const [o, c] of Object.entries(r.data.patients))
        Array.isArray(c) && i.set(o, c.map((l) => ({ date: l.checkedAt, score: l.overallScore })));
  } catch (a) {
    console.warn("[PatientHistory] Batch fetch failed:", a);
  }
  return i;
}
function Ct(t) {
  return t >= 80 ? "green" : t >= 50 ? "amber" : "red";
}
const ri = {
  green: "#22c55e",
  amber: "#f59e0b",
  red: "#ef4444"
};
function Ae(t) {
  return t ? t === t.toUpperCase() && t.length > 3 ? t.toLowerCase().replace(/\b\w/g, (n) => n.toUpperCase()) : t : "";
}
function oi(t) {
  if (!t) return;
  const n = new URL(window.location.href).origin;
  window.location.href = `${n}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=-1&ESOLclientid=${t}`;
}
function zr({ summary: t }) {
  return t ? /* @__PURE__ */ e("div", { class: "cpc-cv__cards", children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__card", children: [
      /* @__PURE__ */ e("div", { class: `cpc-cv__card-value cpc-cv__card-value--${Ct(t.overallCoverage)}`, children: [
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
function jr({ patient: t, histories: n, onOpenCoverage: s }) {
  const i = Ct(t.overallScore ?? 0), a = (t.diagnosisMissing || 0) + (t.diagnosisPartial || 0), r = (t.orderMissing || 0) + (t.orderPartial || 0), o = a + r;
  return /* @__PURE__ */ e("div", { class: "cpc-cv__acard", onClick: () => s(t), children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__acard-top", children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__acard-name", children: Ae(t.patientName) }),
      t.levelOfCare && /* @__PURE__ */ e("span", { class: "cpc-cv__acard-loc", children: t.levelOfCare })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__acard-bottom", children: [
      t.hasResults ? /* @__PURE__ */ e(J, { children: [
        /* @__PURE__ */ e("span", { class: "cpc-cv__mini-bar", style: { width: 60 }, children: /* @__PURE__ */ e("span", { class: "cpc-cv__mini-fill", style: { width: `${t.overallScore}%`, background: ri[i] } }) }),
        /* @__PURE__ */ e("span", { class: `cpc-cv__acard-pct cpc-cv__acard-pct--${i}`, children: [
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
const At = 3;
function Mt({ label: t, accent: n, patients: s, histories: i, historiesLoading: a, onOpenCoverage: r, defaultOpen: o }) {
  const [c, l] = v(o), [d, u] = v(!1), m = n === "orange" && a;
  if (!m && (!s || s.length === 0)) return null;
  const h = d ? s : (s || []).slice(0, At), _ = (s || []).length - At;
  return /* @__PURE__ */ e("div", { class: `cpc-cv__attention-group cpc-cv__attention-group--${n}`, children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__attention-header", onClick: () => l(!c), children: [
      /* @__PURE__ */ e("span", { class: `cpc__section-arrow ${c ? "cpc__section-arrow--open" : ""}`, children: "▶" }),
      /* @__PURE__ */ e("span", { class: "cpc-cv__attention-label", children: t }),
      !m && s && /* @__PURE__ */ e("span", { class: "cpc-cv__attention-count", children: s.length })
    ] }),
    c && /* @__PURE__ */ e("div", { class: "cpc-cv__attention-list", children: m ? /* @__PURE__ */ e("div", { class: "cpc-cv__attention-loading", children: [
      /* @__PURE__ */ e("div", { class: "cpc__spinner cpc__spinner--sm" }),
      /* @__PURE__ */ e("span", { children: "Analyzing trends..." })
    ] }) : /* @__PURE__ */ e(J, { children: [
      /* @__PURE__ */ e("div", { class: "cpc-cv__acards", children: h.map((g) => /* @__PURE__ */ e(
        jr,
        {
          patient: g,
          histories: i,
          onOpenCoverage: r
        },
        g.patientId
      )) }),
      !d && _ > 0 && /* @__PURE__ */ e("button", { class: "cpc-cv__view-more", onClick: (g) => {
        g.stopPropagation(), u(!0);
      }, children: [
        "View ",
        _,
        " more"
      ] }),
      d && s.length > At && /* @__PURE__ */ e("button", { class: "cpc-cv__view-more", onClick: (g) => {
        g.stopPropagation(), u(!1);
      }, children: "Show less" })
    ] }) })
  ] });
}
function Kr({ patient: t, sparklineScores: n, onOpenCoverage: s }) {
  const i = Ct(t.overallScore ?? 0), a = (t.diagnosisMissing || 0) + (t.diagnosisPartial || 0), r = (t.orderMissing || 0) + (t.orderPartial || 0), o = a + r;
  return /* @__PURE__ */ e("div", { class: "cpc-cv__row", onClick: () => s(t), children: [
    /* @__PURE__ */ e("div", { class: "cpc-cv__row-name", children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__row-patient", children: Ae(t.patientName) }),
      t.levelOfCare && /* @__PURE__ */ e("span", { class: "cpc-cv__row-loc", children: t.levelOfCare })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__row-score", children: t.hasResults ? /* @__PURE__ */ e(J, { children: [
      /* @__PURE__ */ e("span", { class: "cpc-cv__mini-bar", children: /* @__PURE__ */ e(
        "span",
        {
          class: "cpc-cv__mini-fill",
          style: { width: `${t.overallScore}%`, background: ri[i] }
        }
      ) }),
      /* @__PURE__ */ e("span", { class: `cpc-cv__row-pct cpc-cv__row-pct--${i}`, children: [
        t.overallScore,
        "%"
      ] })
    ] }) : /* @__PURE__ */ e("span", { class: "cpc-cv__row-unchecked", children: "Not checked" }) }),
    n && n.length > 1 && /* @__PURE__ */ e(Vr, { scores: n }),
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
          c.stopPropagation(), oi(t.externalPatientId || t.patientId);
        },
        children: /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
      }
    )
  ] });
}
function Jn({ item: t, expanded: n, onToggle: s }) {
  const i = t.type === "diagnosis";
  return /* @__PURE__ */ e("div", { class: `cpd__item ${n ? "cpd__item--open" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "cpd__item-row", onClick: s, children: [
      /* @__PURE__ */ e("span", { class: `cpd__item-dot cpd__item-dot--${t.status}` }),
      /* @__PURE__ */ e("div", { class: "cpd__item-main", children: [
        t.code && /* @__PURE__ */ e("span", { class: "cpd__item-code", children: t.code }),
        /* @__PURE__ */ e("span", { class: "cpd__item-desc", children: Ae(t.description) })
      ] }),
      /* @__PURE__ */ e("span", { class: "cpd__item-type", children: i ? "Dx" : "Order" }),
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
const Yn = { covered: 0, partial: 1, missing: 2 };
function Jr({ patient: t, facilityName: n, orgSlug: s, onBack: i }) {
  const { summary: a, changes: r, loading: o, error: c, refreshing: l, refresh: d, retry: u } = Wr({
    patientId: t.patientId,
    facilityName: n,
    orgSlug: s
  }), [p, m] = v(null), [h, _] = v(!1), g = a && a.hasResults === !1, f = a && !g, y = Y(() => (a?.gaps || []).filter((A) => A.status === "missing"), [a]), w = Y(() => (a?.gaps || []).filter((A) => A.status === "partial"), [a]), k = (a?.covered || []).length, C = [];
  a?.pendingChanges?.newDiagnoses > 0 && C.push(`${a.pendingChanges.newDiagnoses} new diagnosis${a.pendingChanges.newDiagnoses > 1 ? "es" : ""}`), a?.pendingChanges?.newOrders > 0 && C.push(`${a.pendingChanges.newOrders} new order${a.pendingChanges.newOrders > 1 ? "s" : ""}`);
  const I = Y(() => r?.changes ? r.changes.filter((A) => (Yn[A.currentStatus] ?? 0) > (Yn[A.previousStatus] ?? 0)) : [], [r]), P = a ? Ct(a.score) : "red";
  return /* @__PURE__ */ e("div", { class: "cpd", children: [
    /* @__PURE__ */ e("div", { class: "cpd__topbar", children: [
      /* @__PURE__ */ e("button", { class: "cpd__back", onClick: i, title: "Back to all patients", children: [
        /* @__PURE__ */ e("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }) }),
        /* @__PURE__ */ e("span", { children: "All Patients" })
      ] }),
      /* @__PURE__ */ e("div", { class: "cpd__topbar-actions", children: [
        a?.stale && /* @__PURE__ */ e("span", { class: "cpd__stale", children: "Stale" }),
        /* @__PURE__ */ e("button", { class: `cpd__refresh ${l ? "cpd__refresh--spin" : ""}`, onClick: d, disabled: l, children: [
          /* @__PURE__ */ e("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ e("polyline", { points: "23 4 23 10 17 10" }),
            /* @__PURE__ */ e("polyline", { points: "1 20 1 14 7 14" }),
            /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })
          ] }),
          l ? "Checking..." : "Re-check"
        ] }),
        /* @__PURE__ */ e("button", { class: "cpd__pcc-link", onClick: () => oi(t.externalPatientId || t.patientId), title: "Open in PCC", children: [
          "Open in PCC",
          /* @__PURE__ */ e("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "cpd__hero", children: [
      /* @__PURE__ */ e("div", { class: "cpd__hero-left", children: [
        /* @__PURE__ */ e("div", { class: "cpd__name", children: Ae(t.patientName) }),
        /* @__PURE__ */ e("div", { class: "cpd__meta", children: [
          t.levelOfCare && /* @__PURE__ */ e("span", { children: t.levelOfCare }),
          a?.checkedAt && /* @__PURE__ */ e("span", { children: [
            "Checked ",
            new Date(a.checkedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })
          ] })
        ] })
      ] }),
      f && /* @__PURE__ */ e("div", { class: "cpd__hero-right", children: [
        /* @__PURE__ */ e("div", { class: `cpd__score cpd__score--${P}`, children: [
          a.score,
          /* @__PURE__ */ e("span", { children: "%" })
        ] }),
        /* @__PURE__ */ e("div", { class: "cpd__score-detail", children: [
          a.diagnosisCovered,
          "/",
          a.diagnosisTotal,
          " dx · ",
          a.orderCovered,
          "/",
          a.orderTotal,
          " orders"
        ] }),
        /* @__PURE__ */ e("div", { class: "cpd__score-bar", children: /* @__PURE__ */ e("div", { class: `cpd__score-fill cpd__score-fill--${P}`, style: { width: `${a.score}%` } }) })
      ] })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "cpc__loading", children: [
      /* @__PURE__ */ e("div", { class: "cpc__spinner" }),
      /* @__PURE__ */ e("span", { class: "cpc__loading-text", children: "Loading coverage..." })
    ] }),
    c && !o && /* @__PURE__ */ e("div", { class: "cpc__error", children: [
      /* @__PURE__ */ e("div", { class: "cpc__error-text", children: c }),
      /* @__PURE__ */ e("button", { class: "cpc__retry-btn", onClick: u, children: "Try Again" })
    ] }),
    g && !o && !c && /* @__PURE__ */ e("div", { class: "cpd__empty-state", children: [
      /* @__PURE__ */ e("div", { class: "cpd__empty-title", children: "No coverage data yet" }),
      /* @__PURE__ */ e("div", { class: "cpd__empty-sub", children: "Coverage checks run automatically, or click Re-check above." })
    ] }),
    f && !o && !c && /* @__PURE__ */ e("div", { class: "cpd__body", children: [
      C.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__drift", children: [
        /* @__PURE__ */ e("strong", { children: "Drift alert:" }),
        " ",
        C.join(" and "),
        " added since last coverage check. These haven't been reviewed yet."
      ] }),
      I.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__section", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--red", children: "What Got Worse" }),
        I.map((A, x) => /* @__PURE__ */ e("div", { class: "cpd__change-row", children: [
          /* @__PURE__ */ e("span", { class: "cpd__change-arrow", children: "↓" }),
          /* @__PURE__ */ e("span", { class: "cpd__change-code", children: A.code }),
          /* @__PURE__ */ e("span", { class: "cpd__change-desc", children: Ae(A.description) }),
          /* @__PURE__ */ e("span", { class: "cpd__change-transition", children: [
            A.previousStatus,
            " ",
            "→",
            " ",
            A.currentStatus
          ] })
        ] }, x))
      ] }),
      y.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__section", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--red", children: [
          "Missing From Care Plan",
          /* @__PURE__ */ e("span", { class: "cpd__section-count", children: y.length })
        ] }),
        /* @__PURE__ */ e("div", { class: "cpd__section-hint", children: "These have no care plan focus at all." }),
        y.map((A, x) => /* @__PURE__ */ e(Jn, { item: A, expanded: p === `m-${x}`, onToggle: () => m(p === `m-${x}` ? null : `m-${x}`) }, `m-${x}`))
      ] }),
      w.length > 0 && /* @__PURE__ */ e("div", { class: "cpd__section", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--amber", children: [
          "Partially Covered",
          /* @__PURE__ */ e("span", { class: "cpd__section-count", children: w.length })
        ] }),
        /* @__PURE__ */ e("div", { class: "cpd__section-hint", children: "Has a related focus but it's incomplete or doesn't fully address the issue." }),
        w.map((A, x) => /* @__PURE__ */ e(Jn, { item: A, expanded: p === `p-${x}`, onToggle: () => m(p === `p-${x}` ? null : `p-${x}`) }, `p-${x}`))
      ] }),
      k > 0 && /* @__PURE__ */ e("div", { class: "cpd__section cpd__section--muted", children: [
        /* @__PURE__ */ e("div", { class: "cpd__section-head cpd__section-head--green cpd__section-head--toggle", onClick: () => _(!h), children: [
          /* @__PURE__ */ e("span", { children: h ? "▼" : "▶" }),
          "Covered",
          /* @__PURE__ */ e("span", { class: "cpd__section-count", children: k })
        ] }),
        h && /* @__PURE__ */ e("div", { class: "cpd__covered-list", children: (a.covered || []).map((A, x) => /* @__PURE__ */ e("div", { class: "cpd__covered-row", children: [
          /* @__PURE__ */ e("span", { class: "cpd__covered-dot" }),
          A.code && /* @__PURE__ */ e("span", { class: "cpd__covered-code", children: A.code }),
          /* @__PURE__ */ e("span", { class: "cpd__covered-desc", children: Ae(A.description) }),
          /* @__PURE__ */ e("span", { class: "cpd__covered-type", children: A.type })
        ] }, x)) })
      ] })
    ] })
  ] });
}
function Yr({ data: t, loading: n, error: s, retry: i, trendingData: a, facilityName: r, orgSlug: o, onOpenCoverage: c }) {
  const [l, d] = v("all"), [u, p] = v(null), [m, h] = v(!1), [_, g] = v(null), f = r || t?.facilityName || "", y = o || t?.orgSlug || "";
  F(() => {
    t?.patients?.length && (h(!0), Qr(f, y).then(p).finally(() => h(!1)));
  }, [t?.patients, f, y]);
  const { stalePatients: w, decliningPatients: k, uncheckedPatients: C } = Y(() => {
    if (!t?.patients) return { stalePatients: [], decliningPatients: [], uncheckedPatients: [] };
    const N = t.patients.filter((B) => B.stale), S = t.patients.filter((B) => !B.hasResults);
    let E = [];
    return u && (E = t.patients.filter((B) => {
      const M = u.get(B.patientId);
      return !M || M.length < 2 ? !1 : M[M.length - 1].score < M[0].score;
    })), { stalePatients: N, decliningPatients: E, uncheckedPatients: S };
  }, [t, u]), I = w.length > 0 || k.length > 0 || C.length > 0, P = Y(() => {
    if (!t?.patients) return [];
    let N = t.patients;
    return l === "gaps" ? N = N.filter((S) => S.hasResults && S.overallScore < 100) : l === "unchecked" ? N = N.filter((S) => !S.hasResults) : l === "stale" && (N = N.filter((S) => S.stale)), N;
  }, [t, l]);
  if (n)
    return /* @__PURE__ */ e("div", { class: "cpc__loading", children: [
      /* @__PURE__ */ e("div", { class: "cpc__spinner" }),
      /* @__PURE__ */ e("span", { class: "cpc__loading-text", children: "Loading compliance data..." })
    ] });
  if (s)
    return /* @__PURE__ */ e("div", { class: "cpc__error", children: [
      /* @__PURE__ */ e("div", { class: "cpc__error-text", children: s }),
      /* @__PURE__ */ e("button", { class: "cpc__retry-btn", onClick: i, children: "Try Again" })
    ] });
  if (!t) return null;
  if (_)
    return /* @__PURE__ */ e("div", { class: "cpc-cv", children: /* @__PURE__ */ e(
      Jr,
      {
        patient: _,
        facilityName: r || t?.facilityName || "",
        orgSlug: o || t?.orgSlug || "",
        onBack: () => g(null)
      }
    ) });
  const A = t.patients?.filter((N) => !N.hasResults).length || 0, x = t.summary?.patientsStale || 0, D = t.patients?.filter((N) => N.hasResults && N.overallScore < 100).length || 0;
  return /* @__PURE__ */ e("div", { class: "cpc-cv", children: [
    /* @__PURE__ */ e(Gr, { days: a?.days }),
    /* @__PURE__ */ e(zr, { summary: t.summary }),
    I && /* @__PURE__ */ e("div", { class: "cpc-cv__attention", children: [
      /* @__PURE__ */ e("div", { class: "cpc-cv__attention-title", children: "Needs Attention" }),
      /* @__PURE__ */ e(
        Mt,
        {
          label: "New Gaps / Stale Data",
          accent: "red",
          patients: w,
          histories: u,
          historiesLoading: m,
          onOpenCoverage: g,
          defaultOpen: !0
        }
      ),
      /* @__PURE__ */ e(
        Mt,
        {
          label: "Declining Coverage",
          accent: "orange",
          patients: k,
          histories: u,
          historiesLoading: m,
          onOpenCoverage: g,
          defaultOpen: !0
        }
      ),
      /* @__PURE__ */ e(
        Mt,
        {
          label: "Never Checked",
          accent: "gray",
          patients: C,
          histories: u,
          historiesLoading: m,
          onOpenCoverage: g,
          defaultOpen: !1
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__filters", children: [
      { value: "all", label: `All (${t.patients?.length || 0})` },
      { value: "gaps", label: `With Gaps (${D})` },
      { value: "unchecked", label: `Unchecked (${A})` },
      ...x > 0 ? [{ value: "stale", label: `Stale (${x})` }] : []
    ].map((N) => /* @__PURE__ */ e(
      "button",
      {
        class: `cpc-cv__filter-pill${l === N.value ? " cpc-cv__filter-pill--active" : ""}`,
        onClick: () => d(N.value),
        children: N.label
      },
      N.value
    )) }),
    /* @__PURE__ */ e("div", { class: "cpc-cv__list", children: P.length === 0 ? /* @__PURE__ */ e("div", { class: "cpc__empty", style: { padding: "24px" }, children: "No patients match this filter." }) : P.map((N) => /* @__PURE__ */ e(
      Kr,
      {
        patient: N,
        sparklineScores: u?.get(N.patientId),
        onOpenCoverage: g
      },
      N.patientId
    )) })
  ] });
}
const Zr = { urgent: "warning", approaching: "warning" };
function Xr(t) {
  return Zr[t] || t || "ok";
}
function Zn(t) {
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0");
  return `${n}-${s}-${i}`;
}
function Xn(t) {
  const n = new Date(t);
  n.setHours(0, 0, 0, 0);
  const s = n.getDay(), i = s === 0 ? -6 : 1 - s;
  return n.setDate(n.getDate() + i), n;
}
function Lt(t, n) {
  const s = new Date(t);
  return s.setDate(s.getDate() + n), s;
}
function eo({ facilityName: t, orgSlug: n }) {
  const [s, i] = v(() => Xn(/* @__PURE__ */ new Date())), [a, r] = v([]), [o, c] = v(null), [l, d] = v(!0), [u, p] = v(null), m = Y(() => Lt(s, 6), [s]), h = U(async () => {
    if (!t || !n) return;
    d(!0), p(null);
    const y = new URLSearchParams({
      facilityName: t,
      orgSlug: n,
      startDate: Zn(s),
      endDate: Zn(m)
    }), w = new URLSearchParams({ facilityName: t, orgSlug: n });
    try {
      const [k, C] = await Promise.all([
        chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/planner/week-events?${y}`,
          options: { method: "GET" }
        }),
        chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/planner/summary?${w}`,
          options: { method: "GET" }
        })
      ]);
      if (!k?.success) throw new Error(k?.error || "Failed to load planner events");
      if (!C?.success) throw new Error(C?.error || "Failed to load planner summary");
      const P = (k.data?.events || []).map((A) => ({ ...A, urgency: Xr(A.urgency) }));
      r(P), c(C.data?.summary || null);
    } catch (k) {
      console.error("[MdsPlanner] fetch failed", k), p(k.message || "Failed to load planner");
    } finally {
      d(!1);
    }
  }, [t, n, s, m]);
  F(() => {
    h();
  }, [h]), F(() => {
    const y = () => h();
    return window.addEventListener("super:query-sent", y), window.addEventListener("super:cert-signed", y), window.addEventListener("super:care-plan-updated", y), () => {
      window.removeEventListener("super:query-sent", y), window.removeEventListener("super:cert-signed", y), window.removeEventListener("super:care-plan-updated", y);
    };
  }, [h]);
  const _ = U(() => i((y) => Lt(y, -7)), []), g = U(() => i((y) => Lt(y, 7)), []), f = U(() => i(Xn(/* @__PURE__ */ new Date())), []);
  return {
    events: a,
    summary: o,
    loading: l,
    error: u,
    weekStart: s,
    weekEnd: m,
    goPrevWeek: _,
    goNextWeek: g,
    goThisWeek: f,
    refetch: h
  };
}
function Je() {
  return window.location.origin;
}
const lt = (t) => `${Je()}/admin/client/cp_residentdashboard.jsp?ESOLrow=1&ESOLclientid=${t}`, es = (t) => `${Je()}/clinical/mds3/sectionlisting.xhtml?ESOLassessid=${t}`, ts = (t) => `${Je()}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=-1&ESOLclientid=${t}`, to = (t, n) => `${Je()}/admin/client/cp_careplans_rev.jsp?ESOLreviewid=${t}&ESOLclientid=${n}`, ns = (t, n) => `${Je()}/care/chart/cp/careplandetail_rev.jsp?ESOLcareplanid=${t}&ESOLclientid=${n}`;
function bn(t) {
  if (!t) return null;
  const { type: n, meta: s = {}, patientExternalId: i } = t, a = i;
  switch (n) {
    case "admit":
    case "discharge":
    case "readmit":
      return a ? { url: lt(a), target: "pcc" } : null;
    case "mds_ard":
    case "mds_due":
      return s.pccAssessmentId ? { url: es(s.pccAssessmentId), target: "pcc" } : a ? { url: lt(a), target: "pcc" } : null;
    case "next_mds_ard":
      return null;
    case "cp_open_needed":
    case "cp_review_expected":
      return a ? { url: ts(a), target: "pcc" } : null;
    case "cp_review_in_progress":
    case "cp_review_due":
      return s.pccCarePlanId && a ? { url: ns(s.pccCarePlanId, a), target: "pcc" } : s.pccReviewId && a ? { url: to(s.pccReviewId, a), target: "pcc" } : a ? { url: ts(a), target: "pcc" } : null;
    case "cp_completion_due":
      return s.pccCarePlanId && a ? { url: ns(s.pccCarePlanId, a), target: "pcc" } : s.pccAssessmentId ? { url: es(s.pccAssessmentId), target: "pcc" } : a ? { url: lt(a), target: "pcc" } : null;
    case "query_due":
      return { target: "internal", handler: "query", id: s.queryId };
    case "cert_due":
    case "cert_overdue":
      return { target: "internal", handler: "cert", id: s.certId };
    default:
      return null;
  }
}
function Ee(t) {
  const n = bn(t);
  return n ? n.target === "pcc" && n.url ? (window.location.href = n.url, !0) : n.target === "internal" ? (n.handler === "query" && n.id ? window.dispatchEvent(new CustomEvent("super:open-query", { detail: { queryId: n.id } })) : n.handler === "cert" && n.id && window.dispatchEvent(new CustomEvent("super:open-cert", { detail: { certId: n.id } })), t.patientExternalId && (window.location.href = lt(t.patientExternalId)), !0) : !1 : !1;
}
function Ne(t) {
  return t ? t.replace(/Significant Change( in Status)?/gi, "Sig Change").replace(/Significant Correction.*?(Assessment)?/gi, "Sig Correction").replace(/Interim Payment Assessment/gi, "IPA").replace(/Part A PPS Discharge( \(OMRA\))?/gi, "PPS Discharge").replace(/\bDeath in Facility\b/gi, "Death").replace(/\s+/g, " ").trim() : "";
}
const no = {
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
}, so = {
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
function io({ event: t, interactive: n = !1 }) {
  const s = t.urgency || "ok", i = t.type === "mds_ard" || t.type === "mds_due" || t.type === "next_mds_ard", a = i && t.meta?.description ? Ne(t.meta.description) : null, r = a ? `${a} ARD` : no[t.type] || t.type, o = !!bn(t), c = t.type === "cp_completion_due" && t.meta?.isProxy === !0, l = n && o, d = i ? "mds-pl__evt--t-mds" : t.type === "admit" || t.type === "readmit" ? "mds-pl__evt--t-admit" : t.type === "discharge" ? "mds-pl__evt--t-dc" : "";
  return /* @__PURE__ */ e(
    "div",
    {
      class: [
        "mds-pl__evt",
        `mds-pl__evt--u-${s}`,
        d,
        c ? "mds-pl__evt--proxy" : "",
        l ? "mds-pl__evt--clickable" : ""
      ].filter(Boolean).join(" "),
      onClick: l ? (u) => {
        u.stopPropagation(), Ee(t);
      } : void 0,
      title: l ? "Open in PCC" : void 0,
      children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__evt-bar" }),
        /* @__PURE__ */ e("span", { class: "mds-pl__evt-icon", "aria-hidden": "true", children: so[t.type] }),
        /* @__PURE__ */ e("span", { class: "mds-pl__evt-text", children: [
          /* @__PURE__ */ e("span", { class: "mds-pl__evt-who", children: t.patientName || "Unknown" }),
          /* @__PURE__ */ e("span", { class: "mds-pl__evt-tag", children: r })
        ] })
      ]
    }
  );
}
const ao = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function ro(t) {
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0");
  return `${n}-${s}-${i}`;
}
function oo(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
}
const ss = { overdue: 0, warning: 1, ok: 2 };
function co(t) {
  return [...t].sort((n, s) => {
    const i = ss[n.urgency] ?? 3, a = ss[s.urgency] ?? 3;
    return i !== a ? i - a : (n.type || "").localeCompare(s.type || "");
  });
}
function lo({ events: t, weekStart: n, selectedDay: s, onSelectDay: i }) {
  const a = /* @__PURE__ */ new Date();
  a.setHours(0, 0, 0, 0);
  const r = Y(() => {
    const o = [], c = /* @__PURE__ */ new Map();
    for (const l of t || [])
      c.has(l.date) || c.set(l.date, []), c.get(l.date).push(l);
    for (let l = 0; l < 7; l++) {
      const d = new Date(n);
      d.setDate(n.getDate() + l);
      const u = ro(d);
      o.push({
        date: d,
        iso: u,
        events: co(c.get(u) || []),
        isToday: oo(d, a)
      });
    }
    return o;
  }, [t, n]);
  return /* @__PURE__ */ e("div", { class: "mds-pl__week", children: r.map((o) => {
    const c = s === o.iso, l = o.events.length === 0;
    return /* @__PURE__ */ e(
      "div",
      {
        class: `mds-pl__day${o.isToday ? " mds-pl__day--today" : ""}${c ? " mds-pl__day--selected" : ""}${l ? " mds-pl__day--empty" : ""}${i ? " mds-pl__day--clickable" : ""}`,
        onClick: i ? () => i(c ? null : o.iso) : void 0,
        role: i ? "button" : void 0,
        tabIndex: i ? 0 : void 0,
        children: [
          /* @__PURE__ */ e("div", { class: "mds-pl__day-head", children: [
            /* @__PURE__ */ e("span", { class: "mds-pl__day-dow", children: ao[(o.date.getDay() + 6) % 7] }),
            /* @__PURE__ */ e("span", { class: "mds-pl__day-num", children: o.date.getDate() })
          ] }),
          /* @__PURE__ */ e("div", { class: "mds-pl__day-events", children: [
            o.events.map((d, u) => /* @__PURE__ */ e(io, { event: d }, `${d.type}-${d.patientId}-${u}`)),
            l && /* @__PURE__ */ e("span", { class: "mds-pl__day-quiet", children: "—" })
          ] })
        ]
      },
      o.iso
    );
  }) });
}
function is(t) {
  if (!t) return !1;
  const n = new Date(t);
  if (isNaN(n)) return !1;
  const s = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n < s;
}
function as(t) {
  if (!t) return null;
  const n = new Date(t);
  if (isNaN(n)) return null;
  n.setHours(0, 0, 0, 0);
  const s = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), Math.round((n - s) / 864e5);
}
function po(t) {
  if (!t) return [];
  const n = [], s = (a, r, o = {}) => ({
    type: r,
    patientExternalId: a.patientExternalId,
    patientName: a.patientName,
    meta: {
      pccAssessmentId: a.pccAssessmentId,
      pccCarePlanId: a.pccCarePlanId,
      pccReviewId: a.pccReviewId,
      ...o
    }
  });
  for (const a of t.mdsCoding?.patients || []) {
    const r = a.daysToCompleteBy;
    if (r == null) continue;
    const o = a.description ? `MDS · ${Ne(a.description)}` : "MDS coding";
    r < 0 ? n.push({ kind: "mds", urgency: "overdue", anchor: "mds-coding", patient: a.patientName, label: o, detail: `${Math.abs(r)}d past lock`, sort: -100 + r, event: s(a, "mds_ard") }) : r <= 2 && n.push({ kind: "mds", urgency: "warning", anchor: "mds-coding", patient: a.patientName, label: o, detail: `${r}d to lock`, sort: r, event: s(a, "mds_ard") });
  }
  for (const a of t.carePlansToOpen?.patients || []) {
    const r = a.hoursSinceAdmit || 0;
    r >= 48 ? n.push({ kind: "cp_open", urgency: "overdue", anchor: "cp-open", patient: a.patientName, label: "Care plan to open", detail: `${r}h since admit`, sort: -80 - r / 24, event: s(a, "cp_open_needed") }) : r >= 24 && n.push({ kind: "cp_open", urgency: "warning", anchor: "cp-open", patient: a.patientName, label: "Care plan to open", detail: `${r}h since admit`, sort: 2, event: s(a, "cp_open_needed") });
  }
  for (const a of t.carePlansToReview?.patients || []) {
    const r = a.state === "overdue" || is(a.expectedDate), o = as(a.expectedDate), c = a.state === "in_progress" ? "cp_review_in_progress" : "cp_review_due";
    r ? n.push({ kind: "cp_review", urgency: "overdue", anchor: "cp-review", patient: a.patientName, label: "Care plan review", detail: o != null ? `${Math.abs(o)}d past due` : "past due", sort: -60 + (o ?? 0), event: s(a, c) }) : o != null && o <= 2 && n.push({ kind: "cp_review", urgency: "warning", anchor: "cp-review", patient: a.patientName, label: "Care plan review", detail: `due in ${o}d`, sort: o, event: s(a, c) });
  }
  for (const a of t.interviewsOwed?.patients || [])
    if (is(a.dueDate)) {
      const r = as(a.dueDate) || 0, o = (a.dueType || "").toUpperCase(), c = a.mdsDescription ? `${o} interview · ${Ne(a.mdsDescription)}` : `${o} interview`;
      n.push({ kind: "interview", urgency: "overdue", anchor: "interviews", patient: a.patientName, label: c, detail: `${Math.abs(r)}d past due`, sort: -40 + r, event: s(a, "mds_ard") });
    }
  const i = t.certs?.overdueList;
  if (Array.isArray(i) && i.length > 0)
    for (const a of i) {
      const r = "cert_overdue", o = a.type === "day_14_recert" ? "Day-14 recert" : a.type === "day_30_recert" ? "Day-30 recert" : a.type === "initial" ? "Initial cert" : "Cert", c = a.bucket === "awaiting_signature" ? "awaiting sig" : "to send";
      n.push({
        kind: "cert",
        urgency: "overdue",
        anchor: "certs",
        patient: a.patientName,
        label: `${o} · ${c}`,
        detail: `${a.daysOverdue}d overdue`,
        sort: -20 - (a.daysOverdue || 0),
        event: {
          type: r,
          patientExternalId: a.patientExternalId,
          patientName: a.patientName,
          meta: { certId: a.certId, type: a.type, bucket: a.bucket, daysOverdue: a.daysOverdue }
        }
      });
    }
  else {
    const a = t.certs?.needsToSend?.overdueCount || 0, r = t.certs?.awaitingSignature?.overdueCount || 0;
    a > 0 && n.push({ kind: "cert", urgency: "overdue", anchor: "certs", patient: null, label: "Certs to send", detail: `${a} overdue`, sort: -20, event: null }), r > 0 && n.push({ kind: "cert", urgency: "overdue", anchor: "certs", patient: null, label: "Certs awaiting sig", detail: `${r} overdue`, sort: -19, event: null });
  }
  return n.sort((a, r) => a.sort - r.sort);
}
const uo = {
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
function mo(t) {
  const n = document.getElementById(`mds-pl-q-${t}`);
  n && n.scrollIntoView({ behavior: "smooth", block: "start" });
}
function ho(t) {
  t.event && Ee(t.event) || mo(t.anchor);
}
function _o({ summary: t }) {
  const n = po(t);
  if (n.length === 0)
    return /* @__PURE__ */ e("div", { class: "mds-pl__focus mds-pl__focus--empty", children: /* @__PURE__ */ e("div", { class: "mds-pl__focus-head", children: [
      /* @__PURE__ */ e("span", { class: "mds-pl__focus-title", children: "Today's focus" }),
      /* @__PURE__ */ e("span", { class: "mds-pl__focus-clear", children: "All caught up ✓" })
    ] }) });
  const [s, i] = v(!1), a = n.filter((d) => d.urgency === "overdue").length, r = n.filter((d) => d.urgency === "warning").length, o = 5, c = s ? n : n.slice(0, o), l = n.length - c.length;
  return /* @__PURE__ */ e("div", { class: "mds-pl__focus", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__focus-head", children: [
      /* @__PURE__ */ e("span", { class: "mds-pl__focus-title", children: "Today's focus" }),
      /* @__PURE__ */ e("span", { class: "mds-pl__focus-summary", children: [
        a > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__focus-count mds-pl__focus-count--overdue", children: [
          a,
          " overdue"
        ] }),
        a > 0 && r > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__focus-sep", children: " · " }),
        r > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__focus-count mds-pl__focus-count--warning", children: [
          r,
          " soon"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-pl__focus-list", children: [
      c.map((d, u) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `mds-pl__focus-row mds-pl__focus-row--${d.urgency}`,
          onClick: () => ho(d),
          title: d.event ? `Open ${d.patient || d.label} in PCC` : `Jump to ${d.label}`,
          children: [
            /* @__PURE__ */ e("span", { class: "mds-pl__focus-icon", children: uo[d.kind] }),
            /* @__PURE__ */ e("span", { class: "mds-pl__focus-main", children: [
              d.patient && /* @__PURE__ */ e(J, { children: [
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
          onClick: () => i(!0),
          children: [
            "+ ",
            l,
            " more — show all"
          ]
        }
      ),
      s && n.length > o && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "mds-pl__focus-more",
          onClick: () => i(!1),
          children: "Show fewer"
        }
      )
    ] })
  ] });
}
const rs = 14;
function Ie(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function vt(t) {
  if (!t) return !1;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n < s;
}
function go({ count: t, overdueCount: n = 0, doneCount: s = 0 }) {
  const i = typeof t == "number" ? t : parseInt(t, 10) || 0, a = Math.max(0, i - n), r = [];
  return n > 0 && r.push(/* @__PURE__ */ e("span", { class: "mds-pl__q-count-overdue", children: [
    n,
    " overdue"
  ] })), a > 0 && n > 0 && r.push(/* @__PURE__ */ e("span", { class: "mds-pl__q-count-rest", children: [
    a,
    " open"
  ] })), r.length === 0 && r.push(/* @__PURE__ */ e("span", { children: i })), s > 0 && r.push(/* @__PURE__ */ e("span", { class: "mds-pl__q-count-done", children: [
    s,
    " done"
  ] })), /* @__PURE__ */ e("span", { class: "mds-pl__q-count", children: r.map((o, c) => /* @__PURE__ */ e(J, { children: [
    c > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__q-count-sep", children: " · " }),
    o
  ] })) });
}
function ge({ title: t, count: n, overdueCount: s = 0, doneCount: i = 0, footer: a, anchor: r, children: o }) {
  return /* @__PURE__ */ e("div", { class: "mds-pl__q", id: r ? `mds-pl-q-${r}` : void 0, children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__q-head", children: [
      /* @__PURE__ */ e("h3", { class: "mds-pl__q-title", children: t }),
      /* @__PURE__ */ e(go, { count: n, overdueCount: s, doneCount: i })
    ] }),
    o,
    a && /* @__PURE__ */ e("div", { class: "mds-pl__q-footer", children: a })
  ] });
}
function He({ completed: t, renderRow: n, windowLabel: s = "this week" }) {
  if (!t || t.count === 0) return null;
  const [i, a] = v(!1), r = t.patients || [];
  return /* @__PURE__ */ e("div", { class: `mds-pl__done ${i ? "mds-pl__done--open" : ""}`, children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        class: "mds-pl__done-toggle",
        onClick: () => a(!i),
        "aria-expanded": i,
        children: [
          /* @__PURE__ */ e("svg", { class: "mds-pl__done-check", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ e("polyline", { points: "20 6 9 17 4 12" }) }),
          /* @__PURE__ */ e("span", { class: "mds-pl__done-label", children: [
            t.count,
            " done ",
            s
          ] }),
          /* @__PURE__ */ e("span", { class: "mds-pl__done-chev", "aria-hidden": "true", children: i ? "▾" : "▸" })
        ]
      }
    ),
    i && r.length > 0 && /* @__PURE__ */ e("div", { class: "mds-pl__done-body", children: r.map(n) })
  ] });
}
function De(t) {
  if (t)
    return (n) => {
      n.target.closest("button, a") || Ee(t);
    };
}
const fo = /* @__PURE__ */ new Set(["In Progress", "Open", "Started", "Not Started"]);
function yo(t) {
  return t.status ? t.isLocked === !0 ? !1 : fo.has(t.status) : !0;
}
function vo(t) {
  const n = t.daysToCompleteBy;
  if (n == null) return "pace-ok";
  if (n < 0) return "pace-over";
  const s = t.sectionsTotal || 0;
  if (s === 0) return "pace-ok";
  const a = Math.max(0, rs - n) / rs;
  return (t.sectionsCompleted || 0) / s < a - 0.05 ? "pace-behind" : "pace-ok";
}
function wo({ data: t }) {
  const n = (t?.patients || []).filter(yo), s = t?.completedRecently, i = s?.count || 0;
  if (!t || n.length === 0 && i === 0)
    return /* @__PURE__ */ e(ge, { title: "MDS Coding", count: "0", anchor: "mds-coding", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "No MDS in the coding window." }) });
  const a = n.filter((r) => r.daysToCompleteBy != null && r.daysToCompleteBy < 0).length;
  return /* @__PURE__ */ e(
    ge,
    {
      title: "MDS Coding",
      count: n.length,
      overdueCount: a,
      doneCount: i,
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
            const o = r.sectionsTotal ? Math.round(r.sectionsCompleted / r.sectionsTotal * 100) : 0, c = r.daysToCompleteBy != null && r.daysToCompleteBy < 0, l = vo(r), d = c ? "mds-pl__trow--overdue" : l === "pace-behind" ? "mds-pl__trow--warning" : "", u = {
              type: "mds_ard",
              patientExternalId: r.patientExternalId,
              patientName: r.patientName,
              meta: { pccAssessmentId: r.pccAssessmentId }
            };
            return /* @__PURE__ */ e(
              "tr",
              {
                class: `${d} mds-pl__trow--clickable`.trim(),
                onClick: De(u),
                title: `Open ${r.patientName} MDS in PCC`,
                children: [
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: [
                    /* @__PURE__ */ e("div", { class: "mds-pl__t-name-main", children: r.patientName }),
                    r.description && /* @__PURE__ */ e("div", { class: "mds-pl__t-name-sub", children: Ne(r.description) })
                  ] }),
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-date", children: Ie(r.ardDate) }),
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-progress", children: [
                    /* @__PURE__ */ e("span", { class: `mds-pl__bar mds-pl__bar--${l}`, children: /* @__PURE__ */ e("span", { class: "mds-pl__bar-fill", style: { width: `${o}%` } }) }),
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
          He,
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
                  onClick: De(o),
                  title: `Open ${r.patientName} MDS in PCC`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: r.patientName }),
                    r.description && /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: Ne(r.description) }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "locked ",
                      Ie(r.lockedAt)
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
function bo({ data: t }) {
  const n = t?.completedRecently, s = n?.count || 0;
  return !t || t.count === 0 && s === 0 ? /* @__PURE__ */ e(ge, { title: "Care Plans to Open", count: "0", anchor: "cp-open", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "Nothing to open." }) }) : /* @__PURE__ */ e(
    ge,
    {
      title: "Care Plans to Open",
      count: t.count,
      overdueCount: (t.patients || []).filter((i) => i.hoursSinceAdmit >= 48).length,
      doneCount: s,
      anchor: "cp-open",
      children: [
        t.count > 0 && /* @__PURE__ */ e("table", { class: "mds-pl__t mds-pl__t--cpopen", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: [
            /* @__PURE__ */ e("th", { children: "Patient" }),
            /* @__PURE__ */ e("th", { children: "Admit" }),
            /* @__PURE__ */ e("th", { children: "Since" })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: t.patients.slice(0, 6).map((i) => {
            const a = i.hoursSinceAdmit >= 48, r = i.hoursSinceAdmit >= 24 && !a, o = a ? "mds-pl__trow--overdue" : r ? "mds-pl__trow--warning" : "", c = {
              type: "cp_open_needed",
              patientExternalId: i.patientExternalId,
              patientName: i.patientName,
              meta: {}
            };
            return /* @__PURE__ */ e(
              "tr",
              {
                class: `${o} mds-pl__trow--clickable`.trim(),
                onClick: De(c),
                title: `Open new care plan for ${i.patientName}`,
                children: [
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: i.patientName }),
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-date", children: Ie(i.admitDate) }),
                  /* @__PURE__ */ e("td", { class: `mds-pl__t-date${a ? " mds-pl__t-date--over" : ""}`, children: [
                    i.hoursSinceAdmit,
                    "h"
                  ] })
                ]
              },
              i.patientId
            );
          }) })
        ] }),
        /* @__PURE__ */ e(
          He,
          {
            completed: n,
            renderRow: (i) => {
              const a = {
                type: "cp_review_in_progress",
                patientExternalId: i.patientExternalId,
                patientName: i.patientName,
                meta: { pccCarePlanId: i.pccCarePlanId }
              };
              return /* @__PURE__ */ e(
                "div",
                {
                  class: "mds-pl__done-row",
                  onClick: De(a),
                  title: `Open care plan for ${i.patientName}`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: i.patientName }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "opened ",
                      Ie(i.carePlanOpenedAt)
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
function Io({ data: t }) {
  const n = t?.completedRecently, s = n?.count || 0;
  if (!t || t.count === 0 && s === 0)
    return /* @__PURE__ */ e(ge, { title: "Care Plans to Review", count: "0", anchor: "cp-review", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "All caught up." }) });
  const i = (t.patients || []).filter((a) => a.state === "overdue" || vt(a.expectedDate)).length;
  return /* @__PURE__ */ e(
    ge,
    {
      title: "Care Plans to Review",
      count: t.count,
      overdueCount: i,
      doneCount: s,
      anchor: "cp-review",
      children: [
        t.count > 0 && /* @__PURE__ */ e("table", { class: "mds-pl__t mds-pl__t--cpreview", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: [
            /* @__PURE__ */ e("th", { children: "Patient" }),
            /* @__PURE__ */ e("th", { children: "Due" }),
            /* @__PURE__ */ e("th", { children: "State" })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: t.patients.slice(0, 6).map((a) => {
            const r = a.state === "overdue" || vt(a.expectedDate), o = r ? "mds-pl__trow--overdue" : "", l = {
              type: a.state === "in_progress" ? "cp_review_in_progress" : "cp_review_due",
              patientExternalId: a.patientExternalId,
              patientName: a.patientName,
              meta: { pccCarePlanId: a.pccCarePlanId, pccReviewId: a.pccReviewId }
            };
            return /* @__PURE__ */ e(
              "tr",
              {
                class: `${o} mds-pl__trow--clickable`.trim(),
                onClick: De(l),
                title: `Open care plan for ${a.patientName}`,
                children: [
                  /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: a.patientName }),
                  /* @__PURE__ */ e("td", { class: `mds-pl__t-date${r ? " mds-pl__t-date--over" : ""}`, children: Ie(a.expectedDate) }),
                  /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e("span", { class: `mds-pl__chip mds-pl__chip--${a.state}`, children: a.state.replace("_", " ") }) })
                ]
              },
              `${a.patientId}-${a.expectedDate}`
            );
          }) })
        ] }),
        /* @__PURE__ */ e(
          He,
          {
            completed: n,
            renderRow: (a) => {
              const r = {
                type: "cp_review_in_progress",
                patientExternalId: a.patientExternalId,
                patientName: a.patientName,
                meta: { pccCarePlanId: a.pccCarePlanId, pccReviewId: a.pccReviewId }
              };
              return /* @__PURE__ */ e(
                "div",
                {
                  class: "mds-pl__done-row",
                  onClick: De(r),
                  title: `Open care plan for ${a.patientName}`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: a.patientName }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "reviewed ",
                      Ie(a.reviewCompletedAt)
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
function Do({ data: t, onOpenQueriesTab: n }) {
  if (!t) return null;
  const s = t.completedRecently, i = s?.count || 0;
  return /* @__PURE__ */ e(
    ge,
    {
      title: "Queries Outstanding",
      count: t.count,
      doneCount: i,
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
          He,
          {
            completed: s,
            renderRow: (a) => /* @__PURE__ */ e("div", { class: "mds-pl__done-row", children: [
              /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: a.patientName }),
              a.itemCode && /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: a.itemCode }),
              /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                "signed ",
                Ie(a.signedAt)
              ] })
            ] }, a.queryId)
          }
        )
      ]
    }
  );
}
function ko({ data: t, onOpenCertsTab: n }) {
  if (!t) return null;
  const s = t.needsToSend || {}, i = t.awaitingSignature || {}, a = (s.overdueCount || 0) + (i.overdueCount || 0), r = t.completedRecently, o = r?.count || 0;
  return /* @__PURE__ */ e(
    ge,
    {
      title: "Certs",
      count: t.count,
      overdueCount: a,
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
            /* @__PURE__ */ e("div", { class: "mds-pl__q-split-num", children: i.count || 0 }),
            /* @__PURE__ */ e("div", { class: "mds-pl__q-split-label", children: [
              "awaiting sig",
              i.overdueCount ? ` · ${i.overdueCount} overdue` : ""
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e(
          He,
          {
            completed: r,
            renderRow: (c) => {
              const l = c.type === "day_14_recert" ? "Day-14 recert" : c.type === "day_30_recert" ? "Day-30 recert" : c.type === "initial" ? "Initial cert" : "Cert";
              return /* @__PURE__ */ e("div", { class: "mds-pl__done-row", children: [
                /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: c.patientName }),
                /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: l }),
                /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                  "signed ",
                  Ie(c.signedAt)
                ] })
              ] }, c.certId);
            }
          }
        )
      ]
    }
  );
}
const Co = {
  not_open: "Not open",
  in_progress: "In progress",
  overdue: "Overdue"
};
function No(t) {
  return vt(t.dueDate) ? "overdue" : t.status || "not_open";
}
function So({ status: t }) {
  const n = Co[t] || "Not open";
  return /* @__PURE__ */ e("span", { class: `mds-pl__sicon mds-pl__sicon--${t === "overdue" ? "overdue" : t === "in_progress" ? "progress" : "idle"}`, role: "img", "aria-label": n, title: n, children: t === "overdue" ? /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ e("path", { d: "M12 3 L22 20 L2 20 Z" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "10", x2: "12", y2: "14" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] }) : t === "in_progress" ? /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ e("path", { d: "M12 3 A9 9 0 0 1 12 21 Z", fill: "currentColor", stroke: "none" })
  ] }) : /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }) }) });
}
function xo({ data: t }) {
  if (!t) return null;
  const n = t.byType || {}, s = t.patients || [], i = t.completedRecently, a = i?.count || 0, r = s.length;
  if (r === 0 && a === 0)
    return /* @__PURE__ */ e(ge, { title: "Interviews Owed", count: "0", anchor: "interviews", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-empty", children: "All interviews caught up." }) });
  const o = s.filter((c) => vt(c.dueDate)).length;
  return /* @__PURE__ */ e(
    ge,
    {
      title: "Interviews Owed",
      count: r,
      overdueCount: o,
      doneCount: a,
      anchor: "interviews",
      children: [
        r > 0 && /* @__PURE__ */ e(J, { children: [
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
              const l = No(c), d = l === "overdue", u = d ? "mds-pl__trow--overdue" : "", p = `${c.patientId}-${c.dueType}-${(c.assessmentIds || []).join(",") || c.assessmentId || ""}`, m = {
                type: "mds_ard",
                patientExternalId: c.patientExternalId,
                patientName: c.patientName,
                meta: { pccAssessmentId: c.pccAssessmentId }
              };
              return /* @__PURE__ */ e(
                "tr",
                {
                  class: `${u} mds-pl__trow--clickable`.trim(),
                  onClick: De(m),
                  title: `Open ${c.patientName} MDS in PCC`,
                  children: [
                    /* @__PURE__ */ e("td", { class: "mds-pl__t-name", children: c.patientName }),
                    /* @__PURE__ */ e("td", { class: "mds-pl__t-type", children: [
                      /* @__PURE__ */ e("div", { class: "mds-pl__t-type-main", children: (c.dueType || "").toUpperCase() }),
                      c.mdsDescription && /* @__PURE__ */ e("div", { class: "mds-pl__t-type-sub", children: Ne(c.mdsDescription) })
                    ] }),
                    /* @__PURE__ */ e("td", { class: `mds-pl__t-date${d ? " mds-pl__t-date--over" : ""}`, children: Ie(c.dueDate) }),
                    /* @__PURE__ */ e("td", { class: "mds-pl__t-status", children: /* @__PURE__ */ e(So, { status: l }) })
                  ]
                },
                p
              );
            }) })
          ] })
        ] }),
        /* @__PURE__ */ e(
          He,
          {
            completed: i,
            renderRow: (c) => {
              const l = {
                type: "mds_ard",
                patientExternalId: c.patientExternalId,
                patientName: c.patientName,
                meta: { pccAssessmentId: c.pccAssessmentId }
              };
              return /* @__PURE__ */ e(
                "div",
                {
                  class: "mds-pl__done-row",
                  onClick: De(l),
                  title: `Open ${c.patientName} MDS in PCC`,
                  children: [
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-name", children: c.patientName }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-sub", children: [
                      (c.dueType || "").toUpperCase(),
                      c.mdsDescription && /* @__PURE__ */ e(J, { children: [
                        " · ",
                        Ne(c.mdsDescription)
                      ] })
                    ] }),
                    /* @__PURE__ */ e("span", { class: "mds-pl__done-row-date", children: [
                      "done ",
                      Ie(c.completedAt)
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
function Po({ mcr: t, managed: n }) {
  if (!t && !n) return null;
  const s = (t?.count || 0) + (n?.count || 0);
  return /* @__PURE__ */ e(ge, { title: "Skilled Census", count: `${s} total`, anchor: "skilled", children: /* @__PURE__ */ e("div", { class: "mds-pl__q-roster", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__q-roster-col", children: [
      /* @__PURE__ */ e("div", { class: "mds-pl__q-roster-head", children: [
        "Medicare A · ",
        t?.count || 0
      ] }),
      (t?.patients || []).slice(0, 5).map((i) => /* @__PURE__ */ e(
        "div",
        {
          class: `mds-pl__q-roster-name${i.patientExternalId ? " mds-pl__q-roster-name--clickable" : ""}`,
          onClick: i.patientExternalId ? () => Ee({
            type: "admit",
            patientExternalId: i.patientExternalId,
            patientName: i.patientName,
            meta: {}
          }) : void 0,
          title: i.patientExternalId ? `Open ${i.patientName} in PCC` : void 0,
          children: i.patientName
        },
        i.patientId
      ))
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-pl__q-roster-col", children: [
      /* @__PURE__ */ e("div", { class: "mds-pl__q-roster-head", children: [
        "Managed · ",
        n?.count || 0
      ] }),
      (n?.patients || []).slice(0, 5).map((i) => /* @__PURE__ */ e(
        "div",
        {
          class: `mds-pl__q-roster-name${i.patientExternalId ? " mds-pl__q-roster-name--clickable" : ""}`,
          onClick: i.patientExternalId ? () => Ee({
            type: "admit",
            patientExternalId: i.patientExternalId,
            patientName: i.patientName,
            meta: {}
          }) : void 0,
          title: i.patientExternalId ? `Open ${i.patientName} in PCC` : void 0,
          children: i.patientName
        },
        i.patientId
      ))
    ] })
  ] }) });
}
function To({ summary: t, onOpenQueriesTab: n, onOpenCertsTab: s }) {
  return t ? /* @__PURE__ */ e("div", { class: "mds-pl__queues-wrap", children: [
    /* @__PURE__ */ e(_o, { summary: t }),
    /* @__PURE__ */ e("div", { class: "mds-pl__queues", children: [
      /* @__PURE__ */ e(wo, { data: t.mdsCoding }),
      /* @__PURE__ */ e(bo, { data: t.carePlansToOpen }),
      /* @__PURE__ */ e(Io, { data: t.carePlansToReview }),
      /* @__PURE__ */ e(Do, { data: t.queriesOpen, onOpenQueriesTab: n }),
      /* @__PURE__ */ e(ko, { data: t.certs, onOpenCertsTab: s }),
      /* @__PURE__ */ e(xo, { data: t.interviewsOwed }),
      /* @__PURE__ */ e(Po, { mcr: t.skilledMCR, managed: t.skilledManagedCare })
    ] })
  ] }) : null;
}
const Ao = {
  admit: "Admission",
  readmit: "Readmit",
  discharge: "Discharge",
  mds_ard: "MDS ARD",
  next_mds_ard: "Next MDS ARD (forecast)",
  query_due: "Query",
  cert_due: "Certification due",
  cert_overdue: "Certification overdue"
}, Mo = {
  overdue: "Overdue",
  warning: "Due soon",
  ok: ""
}, os = { overdue: 0, warning: 1, ok: 2 };
function Lo(t) {
  const [n, s, i] = t.split("-").map(Number);
  return new Date(n, s - 1, i).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}
function Eo(t) {
  const { type: n, meta: s = {} } = t, i = [];
  return n === "mds_ard" ? (s.description && i.push(s.description), s.ardDate && i.push(`ARD ${s.ardDate}`), s.status && i.push(s.status.toLowerCase())) : n === "next_mds_ard" ? s.expectedType && i.push(s.expectedType) : n === "query_due" ? (s.itemCode && i.push(s.itemCode), s.status && i.push(s.status), s.linkedArdDate && i.push(`linked ARD ${s.linkedArdDate}`)) : n === "cert_due" || n === "cert_overdue" ? (s.type && i.push(s.type.replace(/_/g, " ")), s.bucket && i.push(s.bucket.replace(/_/g, " ")), s.daysOverdue && i.push(`${s.daysOverdue}d overdue`)) : (n === "admit" || n === "readmit") && (s.payer && i.push(s.payer), s.location && i.push(s.location)), i.join(" · ");
}
function $o({ event: t }) {
  const n = t.urgency || "ok", s = Ao[t.type] || t.type, i = Mo[n] || "", a = Eo(t), o = !!bn(t);
  return /* @__PURE__ */ e(
    "div",
    {
      class: `mds-pl__dv-row mds-pl__dv-row--u-${n}${o ? " mds-pl__dv-row--clickable" : ""}`,
      onClick: o ? () => Ee(t) : void 0,
      role: o ? "button" : void 0,
      tabIndex: o ? 0 : void 0,
      children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__dv-bar" }),
        /* @__PURE__ */ e("div", { class: "mds-pl__dv-body", children: [
          /* @__PURE__ */ e("div", { class: "mds-pl__dv-header", children: [
            /* @__PURE__ */ e("span", { class: "mds-pl__dv-name", children: t.patientName || "Unknown" }),
            /* @__PURE__ */ e("span", { class: "mds-pl__dv-type", children: s }),
            i && /* @__PURE__ */ e("span", { class: `mds-pl__dv-urgency mds-pl__dv-urgency--${n}`, children: i })
          ] }),
          a && /* @__PURE__ */ e("div", { class: "mds-pl__dv-meta", children: a })
        ] }),
        o && /* @__PURE__ */ e("span", { class: "mds-pl__dv-arrow", children: "›" })
      ]
    }
  );
}
function Ro({ date: t, events: n, onBack: s }) {
  const i = [...n].sort((a, r) => {
    const o = os[a.urgency] ?? 3, c = os[r.urgency] ?? 3;
    return o !== c ? o - c : (a.type || "").localeCompare(r.type || "");
  });
  return /* @__PURE__ */ e("div", { class: "mds-pl__dv", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__dv-top", children: [
      /* @__PURE__ */ e("button", { class: "mds-pl__dv-back", onClick: s, children: [
        /* @__PURE__ */ e("span", { "aria-hidden": "true", children: "‹" }),
        " Back to week"
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-pl__dv-title", children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__dv-title-date", children: Lo(t) }),
        /* @__PURE__ */ e("span", { class: "mds-pl__dv-title-count", children: [
          n.length,
          " ",
          n.length === 1 ? "event" : "events"
        ] })
      ] })
    ] }),
    n.length === 0 ? /* @__PURE__ */ e("div", { class: "mds-pl__dv-empty", children: "Nothing scheduled for this day." }) : /* @__PURE__ */ e("div", { class: "mds-pl__dv-list", children: i.map((a, r) => /* @__PURE__ */ e($o, { event: a }, `${a.type}-${a.patientId}-${r}`)) })
  ] });
}
const qo = /* @__PURE__ */ new Set([
  "admit",
  "readmit",
  "discharge",
  "mds_ard",
  "next_mds_ard",
  "query_due",
  "cert_due",
  "cert_overdue"
]);
function Oo(t, n) {
  const s = t.getMonth() === n.getMonth(), i = t.toLocaleDateString("en-US", { month: "short" }), a = n.toLocaleDateString("en-US", { month: "short" });
  return s ? `${i} ${t.getDate()} – ${n.getDate()}` : `${i} ${t.getDate()} – ${a} ${n.getDate()}`;
}
function Ho() {
  return /* @__PURE__ */ e("div", { class: "mds-pl__state", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__spinner" }),
    /* @__PURE__ */ e("p", { children: "Loading planner..." })
  ] });
}
function Bo({ message: t, onRetry: n }) {
  return /* @__PURE__ */ e("div", { class: "mds-pl__state", children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__state-icon", children: "⚠" }),
    /* @__PURE__ */ e("p", { children: t || "Failed to load planner." }),
    /* @__PURE__ */ e("button", { class: "mds-pl__retry", onClick: n, children: "Retry" })
  ] });
}
function Fo({ facilityName: t, orgSlug: n, isFullscreen: s, onOpenTab: i }) {
  const {
    events: a,
    summary: r,
    loading: o,
    error: c,
    weekStart: l,
    weekEnd: d,
    goPrevWeek: u,
    goNextWeek: p,
    goThisWeek: m,
    refetch: h
  } = eo({ facilityName: t, orgSlug: n }), [_, g] = v(null), [f, y] = v(!1), w = Y(
    () => (a || []).filter((P) => qo.has(P.type)),
    [a]
  ), k = Y(() => _ ? w.filter((P) => P.date === _) : [], [w, _]), C = Y(() => Oo(l, d), [l, d]), I = w.length;
  return /* @__PURE__ */ e("div", { class: `mds-pl${s ? " mds-pl--full" : " mds-pl--compact"}${f ? " mds-pl--queues-expanded" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "mds-pl__nav-bar", children: [
      /* @__PURE__ */ e("div", { class: "mds-pl__week-nav", children: [
        /* @__PURE__ */ e("button", { type: "button", onClick: u, "aria-label": "Previous week", children: "‹" }),
        /* @__PURE__ */ e("span", { class: "mds-pl__week-label", children: C }),
        /* @__PURE__ */ e("button", { type: "button", onClick: p, "aria-label": "Next week", children: "›" }),
        /* @__PURE__ */ e("button", { type: "button", class: "mds-pl__today-btn", onClick: m, children: "Today" })
      ] }),
      /* @__PURE__ */ e("div", { class: "mds-pl__nav-right", children: [
        /* @__PURE__ */ e("span", { class: "mds-pl__event-count", children: [
          I === 0 ? "quiet week" : `${I} event${I === 1 ? "" : "s"} this week`,
          !_ && I > 0 && /* @__PURE__ */ e("span", { class: "mds-pl__hint", children: " · click a day for detail" })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `mds-pl__focus-mode-toggle${f ? " mds-pl__focus-mode-toggle--active" : ""}`,
            onClick: () => y((P) => !P),
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
    o && /* @__PURE__ */ e(Ho, {}),
    !o && c && /* @__PURE__ */ e(Bo, { message: c, onRetry: h }),
    !o && !c && /* @__PURE__ */ e("div", { class: "mds-pl__body", children: [
      !f && /* @__PURE__ */ e("section", { class: "mds-pl__left", children: _ ? /* @__PURE__ */ e(
        Ro,
        {
          date: _,
          events: k,
          onBack: () => g(null)
        }
      ) : /* @__PURE__ */ e(
        lo,
        {
          events: w,
          weekStart: l,
          selectedDay: null,
          onSelectDay: g
        }
      ) }),
      /* @__PURE__ */ e("aside", { class: "mds-pl__right", children: /* @__PURE__ */ e(
        To,
        {
          summary: r,
          onOpenQueriesTab: i ? () => i("queries") : void 0,
          onOpenCertsTab: i ? () => i("certs") : void 0
        }
      ) })
    ] })
  ] });
}
function Uo(t) {
  return t.deadlines?.urgency || t.urgency || "on_track";
}
function Go(t, n, s, i) {
  let a = t;
  return n !== "all" && (a = a.filter((r) => r.payerType === n)), s !== "all" && (a = a.filter((r) => r.assessmentClass === s)), i === "revenue" && (a = a.filter((r) => r.pdpm?.hasImprovements)), i === "issues" && (a = a.filter((r) => {
    const o = r.udaSummary, c = o && (o.bims === "missing" || o.bims === "near_miss" || o.bims === "in_progress" || o.phq9 === "missing" || o.phq9 === "near_miss" || o.phq9 === "in_progress" || o.gg === "missing" || o.gg === "near_miss" || o.gg === "in_progress"), l = r.compliance?.checks?.orders ? r.compliance.checks.orders.status !== "passed" : !1;
    return c || l;
  })), a;
}
const tn = ["overdue", "urgent", "approaching", "on_track", "completed"];
function Vo(t) {
  const n = {};
  for (const s of tn) n[s] = [];
  for (const s of t) {
    const i = Uo(s);
    n[i] ? n[i].push(s) : n.on_track.push(s);
  }
  for (const s of tn)
    n[s].sort((i, a) => {
      if (i.patientId && a.patientId && i.patientId !== a.patientId)
        return i.patientId.localeCompare(a.patientId);
      const r = i.ardDate ? new Date(i.ardDate) : /* @__PURE__ */ new Date(0), o = a.ardDate ? new Date(a.ardDate) : /* @__PURE__ */ new Date(0);
      return r - o;
    });
  return n;
}
function Wo() {
  return /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__spinner" }),
    /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "Loading assessments..." })
  ] });
}
function Qo({ message: t, onRetry: n }) {
  return /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "⚠" }),
    /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: t }),
    /* @__PURE__ */ e("button", { class: "mds-cc__retry-btn", onClick: n, children: "Retry" })
  ] });
}
function zo() {
  return /* @__PURE__ */ e("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ e("div", { class: "mds-cc__state-icon", children: "📋" }),
    /* @__PURE__ */ e("p", { class: "mds-cc__state-text", children: "No assessments found." })
  ] });
}
function jo(t) {
  if (!t) return "";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "today" : n === 1 ? "1d ago" : `${n}d ago`;
}
function Ko(t) {
  return t ? t.replace(/\s*\/\s*/g, " ").replace(/\s{2,}/g, " ").trim() : "";
}
function Jo(t) {
  const n = t.ardDaysRemaining;
  if (n == null) return null;
  let s, i;
  return n < 0 ? (s = `ARD passed ${Math.abs(n)}d ago`, i = "mds-cc__ard--critical") : n === 0 ? (s = "ARD today", i = "mds-cc__ard--critical") : n <= 3 ? (s = `ARD in ${n}d`, i = "mds-cc__ard--warn") : (s = `ARD in ${n}d`, i = "mds-cc__ard--neutral"), /* @__PURE__ */ e("span", { class: `mds-cc__ard ${i}`, children: s });
}
function cs(t) {
  return [...t].sort((n, s) => {
    const i = n.ardDaysRemaining ?? 1 / 0, a = s.ardDaysRemaining ?? 1 / 0;
    return i - a;
  });
}
function ds({ q: t, expanded: n, onToggle: s, onOpenAssessment: i, assessmentCtx: a, isPending: r }) {
  const o = mn(t.assessmentPayment), c = t.sentTo?.[0] || t.practitioner, l = c ? `${c.firstName || ""} ${c.lastName || ""}`.trim() : null, d = c?.title;
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
        Jo(t),
        o && /* @__PURE__ */ e("span", { class: `mds-cc__qcard-delta${r ? " mds-cc__qcard-delta--pending" : ""}`, children: o }),
        /* @__PURE__ */ e("svg", { class: `mds-cc__qcard-chevron${n ? " mds-cc__qcard-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "mds-cc__qcard-meta", children: [
      a && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-ctx", children: a }),
      /* @__PURE__ */ e("span", { class: `mds-cc__qcard-status mds-cc__qcard-status--${r ? "pending" : "sent"}`, children: r ? "Not yet sent" : `Sent ${jo(t.sentAt)}` }),
      l && /* @__PURE__ */ e("span", { class: "mds-cc__qcard-practitioner", children: [
        "to ",
        l,
        d ? `, ${d}` : ""
      ] })
    ] }),
    n && /* @__PURE__ */ e("div", { class: "mds-cc__qcard-body", children: /* @__PURE__ */ e("div", { class: "mds-cc__qcard-actions", children: [
      /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--primary", onClick: (u) => {
        u.stopPropagation(), i();
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
function Yo({ outstandingQueries: t, recentlySigned: n, assessments: s, onOpenAssessment: i }) {
  const [a, r] = v(null), o = cs((t || []).filter((m) => m.status === "pending")), c = cs((t || []).filter((m) => m.status === "sent" || m.status === "awaiting_response"));
  function l(m) {
    const h = (s || []).find((_) => _.id === m.mdsAssessmentId);
    return h?.externalAssessmentId || h?.assessmentId || h?.id || m.mdsAssessmentId;
  }
  function d(m) {
    const h = (s || []).find((_) => _.id === m.mdsAssessmentId);
    return h && Ko(h.assessmentType) || null;
  }
  async function u(m) {
    try {
      const h = await fetch(`/api/extension/diagnosis-queries/${m}/pdf`), { pdfUrl: _ } = await h.json();
      _ && window.open(_, "_blank");
    } catch (h) {
      console.warn("[Super] PDF fetch failed", h);
    }
  }
  const p = o.length + c.length;
  return /* @__PURE__ */ e("div", { class: "mds-cc__queries-view", children: [
    c.length > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ e("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--sent" }),
        "Awaiting Doctor",
        /* @__PURE__ */ e("span", { class: "mds-cc__queries-group-count", children: c.length })
      ] }),
      c.map((m) => /* @__PURE__ */ e(
        ds,
        {
          q: m,
          expanded: a === m.id,
          onToggle: () => r(a === m.id ? null : m.id),
          onOpenAssessment: () => i?.(l(m)),
          assessmentCtx: d(m),
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
        ds,
        {
          q: m,
          expanded: a === m.id,
          onToggle: () => r(a === m.id ? null : m.id),
          onOpenAssessment: () => i?.(l(m)),
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
        const h = m.status === "signed", _ = m.status === "rejected", g = m.practitioner || m.sentTo?.[0];
        return /* @__PURE__ */ e("div", { class: `mds-cc__qcard mds-cc__qcard--signed${_ ? " mds-cc__qcard--rejected" : ""}`, children: [
          /* @__PURE__ */ e("div", { class: "mds-cc__qcard-header", onClick: () => r(a === m.id ? null : m.id), role: "button", tabIndex: 0, children: [
            /* @__PURE__ */ e("div", { class: "mds-cc__qcard-left", children: [
              /* @__PURE__ */ e("span", { class: "mds-cc__qcard-patient", children: m.patientName }),
              /* @__PURE__ */ e("div", { class: "mds-cc__qcard-diag", children: [
                /* @__PURE__ */ e("span", { class: "mds-cc__qcard-code", children: m.mdsItem }),
                /* @__PURE__ */ e("span", { class: "mds-cc__qcard-name", children: m.mdsItemName })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { class: "mds-cc__qcard-right", children: [
              /* @__PURE__ */ e("span", { class: `mds-cc__qcard-status-badge mds-cc__qcard-status-badge--${m.status}`, children: h ? "Signed" : "Rejected" }),
              /* @__PURE__ */ e("svg", { class: `mds-cc__qcard-chevron${a === m.id ? " mds-cc__qcard-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
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
          a === m.id && /* @__PURE__ */ e("div", { class: "mds-cc__qcard-body", children: /* @__PURE__ */ e("div", { class: "mds-cc__qcard-actions", children: [
            /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--primary", onClick: (f) => {
              f.stopPropagation(), i?.(l(m));
            }, children: "Open in PDPM Analyzer" }),
            m.hasPdf && /* @__PURE__ */ e("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--secondary", onClick: (f) => {
              f.stopPropagation(), u(m.id);
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
function Zo({ facilityName: t, orgSlug: n, onClose: s, initialExpandedId: i }) {
  const [a, r] = v("planner"), [o, c] = v("list"), [l, d] = v(!1), [u, p] = v("all"), [m, h] = v("all"), [_, g] = v("all"), [f, y] = v("all"), [w, k] = v(i || null), [C, I] = v(null), { data: P, loading: A, error: x, retry: D } = Ui({ facilityName: t, orgSlug: n }), { data: N } = Gi({ facilityName: t, orgSlug: n, enabled: !0 }), { data: S } = Vi({ facilityName: t, orgSlug: n, enabled: !0 }), E = S !== null, B = E ? (S?.pending || 0) + (S?.overdue || 0) : 0, { certs: M } = Kt({ facilityName: t, orgSlug: n }), {
    data: q,
    loading: L,
    error: O,
    retry: Z
  } = Br({ facilityName: t, orgSlug: n, enabled: !0 }), j = q?.summary?.totalGaps || 0, { data: $ } = Fr({ facilityName: t, orgSlug: n, enabled: !0 }), H = P?.assessments || [], te = P?.summary || {}, T = Y(() => {
    const K = Go(H, u, m, _);
    return Vo(K);
  }, [H, u, m, _]), R = Y(() => {
    const K = f === "all" ? tn : [f], le = [];
    for (const ye of K) {
      const he = T[ye] || [];
      for (const xe of he) le.push(xe);
    }
    return le;
  }, [T, f]), z = R.length, V = ee(!1);
  F(() => {
    !i || !H.length || V.current || (V.current = !0, requestAnimationFrame(() => {
      const K = ne.current?.querySelector(`[data-assessment-id="${i}"]`);
      K && K.scrollIntoView({ behavior: "smooth", block: "center" });
    }));
  }, [H, i]);
  function ie(K) {
    k((le) => {
      const ye = le === K ? null : K;
      return ye && requestAnimationFrame(() => {
        const he = ne.current?.querySelector(`[data-assessment-id="${ye}"]`);
        he && he.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }), ye;
    });
  }
  const X = ee(null), ne = ee(null);
  F(() => {
    if (a === "assessments" && X.current) {
      const K = X.current;
      X.current = null, requestAnimationFrame(() => {
        const le = ne.current?.querySelector(`[data-assessment-id="${K}"]`);
        le && (le.scrollIntoView({ behavior: "smooth", block: "center" }), le.classList.add("mds-cc__card-wrapper--highlight"), setTimeout(() => le.classList.remove("mds-cc__card-wrapper--highlight"), 1500));
      });
    }
  }, [a, w]);
  function W(K) {
    const le = K.externalAssessmentId || K.assessmentId || K.id;
    s({ hide: !0 }), window.PDPMAnalyzerLauncher?.open({ scope: "mds", assessmentId: le });
  }
  function ae(K) {
    s({ hide: !0 }), window.PDPMAnalyzerLauncher?.open({ scope: "mds", assessmentId: K });
  }
  function me(K) {
    K.target === K.currentTarget && s();
  }
  return /* @__PURE__ */ e("div", { class: "mds-cc__overlay", onClick: me, children: /* @__PURE__ */ e("div", { class: `mds-cc__modal${l ? " mds-cc__modal--fullscreen" : ""}`, role: "dialog", "aria-modal": "true", "aria-label": "MDS Command Center", children: [
    C && /* @__PURE__ */ e(
      Or,
      {
        item: C.item,
        context: { assessmentId: C.assessmentId },
        onClose: () => I(null)
      }
    ),
    /* @__PURE__ */ e(
      Qi,
      {
        summary: te,
        facilityName: t,
        onClose: s,
        activeView: a,
        onViewChange: r,
        viewMode: o,
        onViewModeChange: c,
        isFullscreen: l,
        onToggleFullscreen: () => d((K) => !K),
        queryCount: (P?.outstandingQueries || []).length,
        certCount: B,
        certsEnabled: E,
        complianceGaps: j,
        payerFilter: u,
        onPayerFilterChange: p,
        classFilter: m,
        onClassFilterChange: h,
        focusFilter: _,
        onFocusFilterChange: g,
        urgencyFilter: f,
        onUrgencyFilterChange: y
      }
    ),
    /* @__PURE__ */ e("div", { class: "mds-cc__list", ref: ne, children: [
      A && /* @__PURE__ */ e(Wo, {}),
      !A && x && /* @__PURE__ */ e(Qo, { message: x, onRetry: D }),
      !A && !x && a === "assessments" && o === "list" && /* @__PURE__ */ e(J, { children: [
        z === 0 && /* @__PURE__ */ e(zo, {}),
        z > 0 && /* @__PURE__ */ e("div", { class: "mds-cc__assessments mds-cc__assessments--flat", children: R.map((K) => {
          const le = K.id || K.assessmentId || K.externalAssessmentId, ye = w === le;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "mds-cc__card-wrapper",
              "data-assessment-id": le,
              children: [
                /* @__PURE__ */ e(
                  ka,
                  {
                    assessment: K,
                    isExpanded: ye,
                    onToggle: () => ie(le),
                    onOpenAnalyzer: () => W(K)
                  }
                ),
                ye && /* @__PURE__ */ e(
                  Zs,
                  {
                    assessment: K,
                    onOpenAnalyzer: () => W(K),
                    onSelectItem: (he) => {
                      const xe = K.externalAssessmentId || K.assessmentId || K.id;
                      I({ item: he, assessmentId: xe });
                    }
                  }
                )
              ]
            },
            le
          );
        }) })
      ] }),
      !A && !x && a === "assessments" && o === "calendar" && /* @__PURE__ */ e(
        ja,
        {
          dashboardAssessments: H,
          scheduleItems: N?.schedule || [],
          outstandingQueries: P?.outstandingQueries || [],
          certs: M || [],
          onJumpToAssessment: (K) => {
            c("list"), k(K), X.current = K;
          }
        }
      ),
      !A && !x && a === "queries" && /* @__PURE__ */ e(
        Yo,
        {
          outstandingQueries: P?.outstandingQueries || [],
          recentlySigned: P?.recentlySigned || [],
          assessments: H,
          onOpenAssessment: ae
        }
      ),
      a === "certs" && /* @__PURE__ */ e(
        fa,
        {
          facilityName: t,
          orgSlug: n
        }
      ),
      a === "compliance" && /* @__PURE__ */ e(
        Yr,
        {
          data: q,
          loading: L,
          error: O,
          retry: Z,
          trendingData: $,
          facilityName: t,
          orgSlug: n
        }
      ),
      a === "planner" && /* @__PURE__ */ e(
        Fo,
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
function Xo(t, n) {
  const [s, i] = v([]), [a, r] = v(null), [o, c] = v(""), [l, d] = v(!1), [u, p] = v(!1), [m, h] = v(null), [_, g] = v(0), [f, y] = v(0), w = U(() => {
    g((I) => I + 1);
  }, []), k = U(() => {
    y((I) => I + 1);
  }, []);
  async function C() {
    if (!(await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" })).authenticated) throw new Error("Please log in to view MDS data");
    const A = getOrg()?.org, x = window.getChatFacilityInfo?.() || "";
    if (!A || !x) throw new Error("Could not determine organization or facility");
    return { orgSlug: A, facilityName: x };
  }
  return F(() => {
    if (!t) return;
    let I = !1;
    async function P() {
      d(!0), h(null);
      try {
        const { orgSlug: A, facilityName: x } = await C();
        if (t.scope === "mds" && t.assessmentId) {
          const D = new URLSearchParams({ externalAssessmentId: t.assessmentId, facilityName: x, orgSlug: A }), N = await chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/mds/pdpm-potential?${D}`,
            options: { method: "GET" }
          });
          if (!N.success) throw new Error(N.error || "Failed to load MDS data");
          I || (r(N.data), c(N.data?.patientName || t.patientName || ""), i([]));
        } else if (t.scope === "patient" && t.patientId) {
          const D = new URLSearchParams({ facilityName: x, orgSlug: A }), N = await chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/patients/${t.patientId}/assessments?${D}`,
            options: { method: "GET" }
          });
          if (!N.success) throw new Error(N.error || "Failed to load patient data");
          const S = N.data?.data || N.data || N;
          I || (i(S.assessments || []), c(S.patientName || t.patientName || "Patient"), r(null));
        } else
          I || (i([]), r(null));
      } catch (A) {
        I || h(A.message || "Failed to load data");
      } finally {
        I || d(!1);
      }
    }
    return P(), () => {
      I = !0;
    };
  }, [t?.scope, t?.assessmentId, t?.patientId, _]), F(() => {
    if (t?.scope !== "patient" || !n) return;
    let I = !1;
    async function P() {
      p(!0), r(null);
      try {
        const { orgSlug: A, facilityName: x } = await C(), D = new URLSearchParams({ externalAssessmentId: n, facilityName: x, orgSlug: A }), N = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${D}`,
          options: { method: "GET" }
        });
        if (!N.success) throw new Error(N.error || "Failed to load assessment data");
        I || r(N.data);
      } catch (A) {
        I || h(A.message || "Failed to load assessment detail");
      } finally {
        I || p(!1);
      }
    }
    return P(), () => {
      I = !0;
    };
  }, [t?.scope, n, f]), F(() => {
    function I() {
      y((P) => P + 1);
    }
    return window.addEventListener("super:item-decision", I), () => window.removeEventListener("super:item-decision", I);
  }, []), { assessments: s, detail: a, patientName: o, loading: l, detailLoading: u, error: m, retry: w, retryDetail: k };
}
const ls = ["bims", "phq9", "gg", "orders", "therapyDocs"], ps = { bims: "BIMS", phq9: "PHQ-9", gg: "GG", orders: "Orders", therapyDocs: "Therapy" }, nn = 6;
function Pe(t) {
  return t ? new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
}
function ec(t) {
  if (!t) return "";
  const n = t.split(`
`)[0].trim();
  return n.length > 80 ? n.slice(0, 77) + "…" : n;
}
function tc(t, n) {
  if (!t || !n?.start || !n?.end) return null;
  const s = new Date(t).getTime();
  return s >= new Date(n.start).getTime() && s <= new Date(n.end).getTime();
}
function nc({ check: t }) {
  const n = t?.foundUda;
  if (!n) return null;
  const s = !!n.lockedDate, i = tc(n.lockedDate || n.date, t.searchedDateRange);
  return /* @__PURE__ */ e("div", { class: "pdpm-an__cc-detail", children: /* @__PURE__ */ e("div", { class: "pdpm-an__cc-uda-grid", children: [
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Assessment" }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: n.description }),
    n.date && /* @__PURE__ */ e(J, { children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Completed" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: Pe(n.date) })
    ] }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Lock" }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: s ? /* @__PURE__ */ e("span", { class: "pdpm-an__cc-lock pdpm-an__cc-lock--yes", children: [
      /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ e("path", { d: "M4 5V3.5a2 2 0 014 0V5", stroke: "currentColor", "stroke-width": "1.2", fill: "none" })
      ] }),
      Pe(n.lockedDate)
    ] }) : /* @__PURE__ */ e("span", { class: "pdpm-an__cc-lock pdpm-an__cc-lock--no", children: [
      /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ e("path", { d: "M4 5V3.5a2 2 0 014 0", stroke: "currentColor", "stroke-width": "1.2", fill: "none" })
      ] }),
      "Unlocked"
    ] }) }),
    t.searchedDateRange && /* @__PURE__ */ e(J, { children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-key", children: "Window" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-uda-val", children: [
        Pe(t.searchedDateRange.start),
        " ",
        "–",
        " ",
        Pe(t.searchedDateRange.end),
        i === !0 && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-window pdpm-an__cc-window--in", children: "In range" }),
        i === !1 && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-window pdpm-an__cc-window--out", children: "Outside range" })
      ] })
    ] })
  ] }) });
}
function sc({ check: t }) {
  const n = t?.unsignedOrders;
  if (!n || n.length === 0) return null;
  const s = n.slice(0, nn), i = n.length - nn;
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
      s.map((a, r) => /* @__PURE__ */ e("div", { class: "pdpm-an__cc-order", children: [
        /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-name", children: ec(a.orderName) }),
        /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-meta", children: [
          a.category !== "Other" && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-cat", children: a.category }),
          a.startDate && /* @__PURE__ */ e("span", { children: Pe(a.startDate) })
        ] })
      ] }, r)),
      i > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-orders-more", children: [
        "+",
        i,
        " more unsigned"
      ] })
    ] })
  ] });
}
function ic({ check: t }) {
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
    n.length > 0 && /* @__PURE__ */ e("div", { class: "pdpm-an__cc-orders", children: n.slice(0, nn).map((s, i) => /* @__PURE__ */ e("div", { class: "pdpm-an__cc-order", children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-name", children: s.description || s.name || `Document ${i + 1}` }),
      s.date && /* @__PURE__ */ e("span", { class: "pdpm-an__cc-order-meta", children: Pe(s.date) })
    ] }, i)) })
  ] });
}
function ac({ checkKey: t, check: n }) {
  return t === "orders" ? /* @__PURE__ */ e(sc, { check: n }) : t === "therapyDocs" ? /* @__PURE__ */ e(ic, { check: n }) : /* @__PURE__ */ e(nc, { check: n });
}
function rc({ data: t, collapsed: n, onToggleCollapse: s }) {
  const [i, a] = v(null), r = t?.compliance || {}, o = r.checks || {}, c = r.summary?.passed ?? 0, l = r.summary?.total ?? ls.length, d = r.summary?.notApplicable ?? 0, u = l - d, p = (m) => a(i === m ? null : m);
  return /* @__PURE__ */ e("div", { class: `pdpm-an__card${c === u ? " pdpm-an__card--success" : " pdpm-an__card--warning"}`, children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "✓" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Compliance" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: [
        c,
        "/",
        u
      ] }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__cc-body", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__cc-chips", children: ls.map((m) => {
        const h = o[m];
        if (!h || h.status === "not_applicable") return null;
        const _ = h.status === "passed", g = h.foundUda || m === "orders" || m === "therapyDocs";
        return /* @__PURE__ */ e(
          "button",
          {
            class: `pdpm-an__cc-chip${_ ? " pdpm-an__cc-chip--pass" : " pdpm-an__cc-chip--fail"}${i === m ? " pdpm-an__cc-chip--active" : ""}`,
            onClick: g ? () => p(m) : void 0,
            title: h.message || "",
            children: [
              /* @__PURE__ */ e("span", { class: "pdpm-an__cc-chip-icon", children: _ ? "✓" : "✗" }),
              ps[m] || m
            ]
          },
          m
        );
      }) }),
      i && o[i] && o[i].status !== "not_applicable" && /* @__PURE__ */ e("div", { class: "pdpm-an__cc-expanded", children: [
        /* @__PURE__ */ e("div", { class: "pdpm-an__cc-expanded-label", children: [
          ps[i],
          ": ",
          o[i].message
        ] }),
        /* @__PURE__ */ e(ac, { checkKey: i, check: o[i] })
      ] })
    ] })
  ] });
}
function pt(t) {
  return t.sourceType === "order" || t.type === "order" || (t.evidenceId || "").startsWith("order-");
}
function oc(t) {
  return (t.sourceId || t.evidenceId || "").replace(/^order-/, "");
}
function ci(t) {
  return t.type === "medication" || (t.sourceId || "").startsWith("admin-");
}
function cc(t) {
  if (ci(t)) return !0;
  const n = ue(t).viewerType;
  return n === "document" || n === "clinical-note" || n === "therapy-document" || n === "order" || pt(t);
}
function di({ item: t, context: n, onBack: s, onSplitChange: i, onDismiss: a }) {
  const r = t?.mdsItem, o = t?.categoryKey, { data: c, loading: l, error: d } = ei(r, o, n), u = r?.startsWith("I8000:") ? "I8000" : r, p = c?.item, m = p?.status === "needs_physician_query", [h, _] = v(!1), g = p?.userDecision?.decision, f = g !== "disagree" && g !== "agree", y = U(async (T) => {
    _(!0);
    try {
      const z = getOrg()?.org, V = window.getChatFacilityInfo?.() || "", ie = r?.includes(":") ? r.split(":")[0] : r, X = t?.column || "", ne = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/items/${encodeURIComponent(ie)}/decision`,
        options: {
          method: "POST",
          body: JSON.stringify({
            externalAssessmentId: n?.assessmentId,
            facilityName: V,
            orgSlug: z,
            decision: "disagree",
            note: T || "",
            mdsColumn: X
          })
        }
      });
      if (!ne?.success) throw new Error(ne?.error || "Failed to save decision");
      const W = `${ie}-${X}`;
      window.SuperOverlay?.dismissedItems && (window.SuperOverlay.dismissedItems.add(W), chrome.storage.local.set({ superDismissedItems: Array.from(window.SuperOverlay.dismissedItems) })), window.dispatchEvent(new CustomEvent("super:item-decision", {
        detail: { mdsItem: ie, column: X, decision: "disagree" }
      })), window.SuperToast?.success?.("Item dismissed"), a?.();
    } catch (R) {
      console.error("[ItemDetailView] Dismiss failed:", R), window.SuperToast?.error?.(R.message || "Failed to dismiss"), _(!1);
    }
  }, [r, t, n, a]), [w, k] = v(null), C = ee(/* @__PURE__ */ new Map()), [I, P] = v(null), [A, x] = v(!1), D = ee(null), S = dc(c).filter(cc), E = w !== null, B = w && ci(w.ev), M = w && !B && pt(w.ev), q = w ? ue(w.ev).viewerType : null, L = !B && q === "clinical-note", O = !B && q === "therapy-document", Z = w && !M && !L && !O && !B, j = ee(null);
  F(() => {
    i?.(E);
  }, [E]);
  const $ = S.filter((T) => pt(T) ? !1 : ue(T).viewerType === "document");
  F(() => {
    if (!c || $.length === 0) return;
    (async () => {
      let R;
      try {
        R = await window.getCurrentParams();
      } catch {
        return;
      }
      for (const z of $) {
        const V = ue(z);
        if (!V.id || C.current.has(V.id)) continue;
        const ie = Qe(V.id, R).then((X) => {
          const ne = C.current.get(V.id);
          return ne && (ne.document = X.document), X.document;
        }).catch((X) => (console.warn("[ItemDetailView] Prefetch failed for", V.id, X), null));
        C.current.set(V.id, { document: null, promise: ie });
      }
    })();
  }, [c]), F(() => {
    if (!w || M || L || O) {
      P(null), x(!1);
      return;
    }
    const T = ue(w.ev);
    if (!T.id) return;
    const R = C.current.get(T.id);
    if (R?.document) {
      P(R.document), x(!1);
      return;
    }
    x(!0), (async () => {
      try {
        let V;
        if (R?.promise)
          V = await R.promise;
        else {
          const ie = await window.getCurrentParams();
          V = (await Qe(T.id, ie)).document, C.current.set(T.id, { document: V, promise: Promise.resolve(V) });
        }
        P(V);
      } catch (V) {
        console.error("[ItemDetailView] Failed to load document:", V), P(null);
      } finally {
        x(!1);
      }
    })();
  }, [w, M]), F(() => {
    if (!M || !D.current) return;
    const T = D.current, R = oc(w.ev);
    T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><div class="pdpm-an__spinner"></div><span>Loading administrations...</span></div>', window.renderSplitAdministrations ? (async () => {
      const ie = getOrg()?.org, X = window.getChatFacilityInfo?.() || "", ne = { assessmentId: n?.assessmentId, orgSlug: ie, facilityName: X };
      await window.renderSplitAdministrations(T, R, void 0, ne);
    })().catch((V) => {
      console.error("[ItemDetailView] Failed to load administrations:", V), T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Failed to load administrations</span></div>';
    }) : T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Administration viewer not available</span></div>';
  }, [w, M]), F(() => {
    if (!L && !O || !j.current) return;
    const T = j.current, R = ue(w.ev), z = w.ev.quoteText || w.ev.quote || w.ev.snippet || "";
    T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><div class="pdpm-an__spinner"></div><span>Loading...</span></div>', (async () => {
      const X = getOrg()?.org, ne = window.getChatFacilityInfo?.() || "", W = { assessmentId: n?.assessmentId, orgSlug: X, facilityName: ne };
      L && window.renderSplitNote ? await window.renderSplitNote(T, R.id, W) : O && window.renderSplitTherapy ? await window.renderSplitTherapy(T, R.id, z, W) : T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Viewer not available</span></div>';
    })().catch((ie) => {
      console.error("[ItemDetailView] Failed to load source:", ie), T.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Failed to load</span></div>';
    });
  }, [w, L, O]);
  const H = U((T, R) => {
    k({ ev: T, index: R });
  }, []), te = U(() => {
    k(null);
  }, []);
  return /* @__PURE__ */ e("div", { class: `idv${E ? " idv--split" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "idv__head", children: [
      /* @__PURE__ */ e("button", { class: "idv__back", onClick: E ? te : s, type: "button", children: [
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
    !l && !d && c && !E && /* @__PURE__ */ e("div", { class: "idv__body", children: /* @__PURE__ */ e(
      ni,
      {
        variant: "full",
        data: c,
        detectionItem: t,
        mdsItem: r,
        onViewSource: H,
        onDismiss: f ? y : void 0,
        dismissing: h,
        assessmentId: n?.assessmentId
      }
    ) }),
    !l && !d && c && E && /* @__PURE__ */ e("div", { class: "idv__split-body", children: [
      /* @__PURE__ */ e("div", { class: "idv__sources", children: [
        /* @__PURE__ */ e("div", { class: "idv__sources-label", children: [
          "Sources (",
          S.length,
          ")"
        ] }),
        S.map((T, R) => {
          const z = pt(T), V = T.sourceType || _n(T.displayName, T.evidenceId), ie = T.displayName || gn[V] || (z ? "Orders" : "Document"), X = T.quoteText || T.orderDescription || T.quote || T.snippet || T.text || "", ne = T.wordBlocks?.[0]?.p, W = w.ev === T;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `idv__source-card${W ? " idv__source-card--active" : ""}`,
              onClick: () => k({ ev: T, index: R }),
              role: "button",
              children: [
                /* @__PURE__ */ e("div", { class: `idv__source-badge${z ? " idv__source-badge--order" : ""}`, children: ie }),
                X && /* @__PURE__ */ e("div", { class: "idv__source-snippet", children: X }),
                !z && ne && /* @__PURE__ */ e("div", { class: "idv__source-page", children: [
                  "Page ",
                  ne
                ] })
              ]
            },
            R
          );
        })
      ] }),
      /* @__PURE__ */ e("div", { class: "idv__viewer", children: [
        Z && A && /* @__PURE__ */ e("div", { class: "idv__viewer-loading", children: [
          /* @__PURE__ */ e("div", { class: "pdpm-an__spinner" }),
          /* @__PURE__ */ e("span", { children: "Loading document..." })
        ] }),
        Z && !A && I && /* @__PURE__ */ e(
          fn,
          {
            url: I.signedUrl || null,
            wordBlocks: w.ev.wordBlocks || [],
            targetPage: w.ev.wordBlocks?.[0]?.p || 1,
            title: I.title || "Document",
            documentType: I.documentType,
            effectiveDate: I.effectiveDate,
            fileSize: I.fileSize,
            expiresAt: !0,
            openInNewTabUrl: I.signedUrl || null
          }
        ),
        Z && !A && !I && /* @__PURE__ */ e("div", { class: "idv__viewer-loading", children: /* @__PURE__ */ e("span", { children: "Failed to load document" }) }),
        M && /* @__PURE__ */ e("div", { ref: D, class: "idv__admin-viewer" }),
        (L || O) && /* @__PURE__ */ e("div", { ref: j, class: "idv__note-viewer" }),
        B && /* @__PURE__ */ e("div", { class: "idv__note-viewer", children: /* @__PURE__ */ e("div", { class: "super-split__content", children: [
          /* @__PURE__ */ e("div", { class: "super-split__content-header", children: [
            /* @__PURE__ */ e("h3", { class: "super-split__content-title", children: "Administration Record" }),
            /* @__PURE__ */ e("span", { class: "super-split__content-badge", children: "Medication" })
          ] }),
          w.ev.date && /* @__PURE__ */ e("div", { class: "super-split__content-meta", children: w.ev.date }),
          /* @__PURE__ */ e("div", { class: "super-split__content-body", children: /* @__PURE__ */ e("pre", { class: "super-split__note-text", children: w.ev.text || w.ev.quote || w.ev.quoteText || "No details available." }) })
        ] }) })
      ] })
    ] })
  ] });
}
function dc(t) {
  const n = t?.item;
  if (!n) return [];
  if (!!!n.columns)
    return [...n.evidence || [], ...n.queryEvidence || []];
  const i = [], a = /* @__PURE__ */ new Set();
  for (const r of Object.values(n.columns || {}))
    for (const o of [...r?.evidence || [], ...r?.queryEvidence || []]) {
      const c = o.sourceId || o.quote || JSON.stringify(o);
      a.has(c) || (a.add(c), i.push(o));
    }
  return i;
}
function lc(t) {
  const [n, s] = v([]), [i, a] = v(!1), [r, o] = v(null), [c, l] = v(0), d = U(() => {
    l((u) => u + 1);
  }, []);
  return F(() => {
    if (!t || !window.CertAPI) {
      s([]);
      return;
    }
    let u = !1;
    return a(!0), o(null), (async () => {
      try {
        const m = getOrg()?.org, h = window.getChatFacilityInfo?.() || "";
        if (!m || !h) {
          u || (s([]), a(!1));
          return;
        }
        const _ = await window.CertAPI.fetchByPatient(h, m, t);
        u || s(_ || []);
      } catch {
        u || s([]);
      } finally {
        u || a(!1);
      }
    })(), () => {
      u = !0;
    };
  }, [t, c]), { certs: n, loading: i, error: r, refresh: d };
}
const pc = ["initial", "day_14_recert", "day_30_recert"], uc = {
  initial: "Initial",
  day_14_recert: "Day 14",
  day_30_recert: "Day 30"
};
function mc(t) {
  if (!t) return null;
  const n = new Date(t), s = /* @__PURE__ */ new Date();
  return n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0), Math.floor((n - s) / 864e5);
}
function Et(t) {
  if (!t) return "";
  const n = new Date(t);
  return isNaN(n) ? t : n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function hc(t) {
  if (!t) return { variant: "empty", label: "—" };
  const n = mc(t.dueDate), s = n !== null && n < 0;
  return t.status === "signed" ? {
    variant: "signed",
    label: "Signed",
    detail: Et(t.signedAt),
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
    detail: Et(t.sentAt)
  } : {
    variant: "pending",
    label: "Pending",
    detail: t.dueDate ? `Due ${Et(t.dueDate)}` : "",
    showSend: !0
  };
}
function _c({ type: t, cert: n, onAction: s }) {
  const i = hc(n);
  return /* @__PURE__ */ e("div", { class: `cert-chain__slot cert-chain__slot--${i.variant}`, children: [
    /* @__PURE__ */ e("div", { class: "cert-chain__slot-header", children: /* @__PURE__ */ e("span", { class: "cert-chain__slot-type", children: uc[t] }) }),
    /* @__PURE__ */ e("div", { class: "cert-chain__slot-status", children: i.label }),
    i.detail && /* @__PURE__ */ e("div", { class: "cert-chain__slot-detail", children: i.detail }),
    i.subDetail && /* @__PURE__ */ e("div", { class: "cert-chain__slot-sub", children: i.subDetail }),
    i.showSend && n && /* @__PURE__ */ e(
      "button",
      {
        class: `cert-chain__slot-btn cert-chain__slot-btn--${i.variant === "overdue" ? "destructive" : "primary"}`,
        onClick: (a) => {
          a.stopPropagation(), s(n, "send");
        },
        children: "Send"
      }
    ),
    i.showUnskip && n && /* @__PURE__ */ e(
      "button",
      {
        class: "cert-chain__slot-btn cert-chain__slot-btn--ghost",
        onClick: (a) => {
          a.stopPropagation(), s(n, "unskip");
        },
        children: "Unskip"
      }
    )
  ] });
}
function gc({ certs: t, onAction: n }) {
  const s = {};
  for (const i of t)
    s[i.type] = i;
  return /* @__PURE__ */ e("div", { class: "cert-chain__stay", children: pc.map((i, a) => /* @__PURE__ */ e("div", { class: "cert-chain__step-wrapper", children: [
    a > 0 && /* @__PURE__ */ e("div", { class: "cert-chain__connector" }),
    /* @__PURE__ */ e(_c, { type: i, cert: s[i] || null, onAction: n })
  ] }, i)) });
}
function fc({ certs: t, onAction: n }) {
  const s = Y(() => {
    if (!t || t.length === 0) return [];
    const i = {};
    for (const r of t) {
      const o = r.partAStayId || "unknown";
      i[o] || (i[o] = []), i[o].push(r);
    }
    const a = Object.entries(i);
    for (const [, r] of a)
      r.sort((o, c) => (o.sequenceNumber || 0) - (c.sequenceNumber || 0));
    return a.sort((r, o) => {
      const c = Math.max(...r[1].map((d) => d.sequenceNumber || 0));
      return Math.max(...o[1].map((d) => d.sequenceNumber || 0)) - c;
    }), a;
  }, [t]);
  return s.length === 0 ? null : /* @__PURE__ */ e("div", { class: "cert-chain", children: s.map(([i, a]) => /* @__PURE__ */ e(gc, { certs: a, onAction: n }, i)) });
}
function yc({ patientId: t, collapsed: n, onToggleCollapse: s }) {
  const { certs: i, loading: a, refresh: r } = lc(t), [o, c] = v(null), [l, d] = v(null), [u, p] = v(null), [m, h] = v({ facilityName: "", orgSlug: "" }), _ = U(async () => {
    if (m.facilityName && m.orgSlug) return m;
    const k = getOrg()?.org || "", I = { facilityName: window.getChatFacilityInfo?.() || "", orgSlug: k };
    return h(I), I;
  }, [m]), g = U(async (w, k) => {
    if (k === "send")
      await _(), c(w);
    else if (k === "skip")
      d(w);
    else if (k === "delay")
      p(w);
    else if (k === "unskip")
      try {
        await window.CertAPI.unskipCert(w.id), window.SuperToast?.success?.("Certification restored"), r();
      } catch (C) {
        console.error("[CertSection] Failed to unskip:", C), window.SuperToast?.error?.("Failed to restore certification");
      }
  }, [_, r]);
  async function f(w) {
    await window.CertAPI.skipCert(l.id, w), window.SuperToast?.success?.("Certification skipped"), r();
  }
  async function y(w) {
    await window.CertAPI.delayCert(u.id, w), window.SuperToast?.success?.("Certification marked as delayed"), r();
  }
  return a ? /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Certifications" }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__card-body", style: "padding: 16px; text-align: center; color: #6b7280; font-size: 13px;", children: "Loading certifications..." })
  ] }) : !i || i.length === 0 ? null : /* @__PURE__ */ e(J, { children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
        /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Certifications" }),
        /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: i.length }),
        /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] }),
      !n && /* @__PURE__ */ e("div", { class: "pdpm-an__card-body", style: "padding: 8px 12px;", children: /* @__PURE__ */ e(fc, { certs: i, onAction: g }) })
    ] }),
    /* @__PURE__ */ e(
      zs,
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
      js,
      {
        isOpen: !!l,
        onClose: () => d(null),
        cert: l,
        onSkipped: f
      }
    ),
    /* @__PURE__ */ e(
      Ks,
      {
        isOpen: !!u,
        onClose: () => p(null),
        cert: u,
        onDelayed: y
      }
    )
  ] });
}
function li(t) {
  return t ? new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
}
function sn(t) {
  return t && t.replace(/[\s/]+$/, "").trim() || null;
}
function vc({ assessments: t, selectedId: n, onChange: s }) {
  if (!t || t.length <= 1) return null;
  const i = t.map((a) => ({
    value: a.id,
    label: sn(a.type) || sn(a.assessmentType) || "Assessment",
    subtitle: a.ardDate ? `ARD ${li(a.ardDate)}` : void 0,
    badge: a.currentHipps || a.hipps || void 0
  }));
  return /* @__PURE__ */ e(
    ct,
    {
      options: i,
      value: n,
      onChange: s,
      align: "right",
      ariaLabel: "Select assessment"
    }
  );
}
const et = {
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
function $e(t, n) {
  const s = n?.replace(/\[.*\]$/, "") || "", i = t?.replace(/\[.*\]$/, "") || "";
  return t && /^[A-Z]{1,2}\d+[A-Z]?(\[.*\])?$/.test(t) ? et[i] || et[s] || t : t && i !== s ? t : et[s] || et[i] || t || n;
}
function us(t, n) {
  if (!n?.meta?.ntaTiers) return null;
  for (const s of n.meta.ntaTiers)
    if ((s.levels || []).includes(t)) return s.tier;
  return null;
}
function wc(t, n) {
  if (n?.mode === "state_rate") {
    const s = us(t.currentLevel, n), i = us(t.newLevel, n);
    return s != null && i != null ? `NTA: Tier ${s} → Tier ${i}` : "NTA: tier upgrade";
  }
  return `NTA: ${t.currentLevel} → ${t.newLevel}`;
}
function pi({ impact: t, payment: n, variant: s }) {
  const i = [];
  return t?.nta?.wouldChangeLevel && i.push({ label: "NTA", text: wc(t.nta, n) }), t?.nursing?.wouldChangeGroup && i.push({ label: "Nursing", from: t.nursing.currentPaymentGroup, to: t.nursing.newPaymentGroup }), t?.slp?.wouldChangeGroup && i.push({ label: "SLP", from: t.slp.currentGroup, to: t.slp.newGroup }), t?.ptot?.wouldChangeGroup && i.push({ label: "PT/OT", from: t.ptot.currentGroup, to: t.ptot.newGroup }), i.length === 0 ? null : /* @__PURE__ */ e("div", { class: s === "pending" ? "pdpm-an__impact-chips pdpm-an__impact-chips--pending" : "pdpm-an__impact-chips", children: i.map((r, o) => /* @__PURE__ */ e("span", { class: "pdpm-an__impact-chip", children: [
    /* @__PURE__ */ e("span", { class: "pdpm-an__impact-chip-k", children: r.label }),
    /* @__PURE__ */ e("span", { class: "pdpm-an__impact-chip-v", children: r.text || `${r.from} → ${r.to}` })
  ] }, o)) });
}
function bc({ data: t, onItemClick: n }) {
  const s = t?.enhancedDetections || [], i = t?.payment, a = s.filter(
    (r) => r.wouldChangeHipps && r.solverStatus !== "query_sent" && r.solverStatus !== "awaiting_response" && r.solverStatus !== "dont_code" && r.userDecision?.decision !== "disagree"
  );
  return a.length === 0 ? null : /* @__PURE__ */ e("div", { class: "pdpm-an__opps", children: a.map((r, o) => {
    const c = r.mdsItem?.startsWith("I8000:") ? "I8000" : r.mdsItem;
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
          /* @__PURE__ */ e("span", { class: "pdpm-an__opp-code", children: c }),
          /* @__PURE__ */ e("span", { class: "pdpm-an__opp-name", children: $e(r.itemName, r.mdsItem) }),
          /* @__PURE__ */ e(pi, { impact: r.impact, payment: i }),
          /* @__PURE__ */ e("svg", { class: "pdpm-an__opp-go", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M5 3l4 4-4 4", stroke: "currentColor", "stroke-width": "1.3", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ]
      },
      o
    );
  }) });
}
function Ic({ data: t, onItemClick: n, collapsed: s, onToggleCollapse: i }) {
  const r = (t?.enhancedDetections || []).filter(
    (o) => o.solverStatus === "dont_code" && (o.diagnosisPassed === !1 || o.activeStatusPassed === !1) && o.userDecision?.decision !== "disagree"
  );
  return r.length === 0 ? null : /* @__PURE__ */ e("div", { class: "pdpm-an__card pdpm-an__card--doc-risk", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: i, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "⚠" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Documentation Risks" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--amber", children: r.length }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-list", children: r.map((o, c) => {
      const l = o.mdsItem?.startsWith("I8000:") ? "I8000" : o.mdsItem, d = [];
      return o.diagnosisPassed === !1 && d.push("No physician diagnosis found"), o.activeStatusPassed === !1 && d.push("No active treatment order found"), /* @__PURE__ */ e(
        "div",
        {
          class: "pdpm-an__doc-risk-item",
          onClick: () => n && n(o),
          role: "button",
          tabIndex: 0,
          onKeyDown: (u) => {
            (u.key === "Enter" || u.key === " ") && (u.preventDefault(), n && n(o));
          },
          children: [
            /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-top", children: [
              /* @__PURE__ */ e("span", { class: "pdpm-an__driver-section", children: l }),
              /* @__PURE__ */ e("span", { class: "pdpm-an__driver-text", children: $e(o.itemName, o.mdsItem) })
            ] }),
            /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-badges", children: d.map((u, p) => /* @__PURE__ */ e("span", { class: "pdpm-an__doc-risk-badge", children: u }, p)) }),
            o.rationale && /* @__PURE__ */ e("div", { class: "pdpm-an__doc-risk-rationale", children: o.rationale })
          ]
        },
        c
      );
    }) })
  ] });
}
function Dc(t) {
  if (!t) return "not yet sent";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "sent today" : `sent ${n}d ago`;
}
function kc({ data: t, onQueryClick: n, collapsed: s, onToggleCollapse: i }) {
  const a = t?.outstandingQueries || [], r = t?.payment, o = a.filter(
    (c) => c.status === "sent" || c.status === "pending" || c.status === "awaiting_response"
  );
  return o.length === 0 ? null : /* @__PURE__ */ e("div", { class: "pdpm-an__card pdpm-an__card--queries", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: i, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "✉" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Pending Queries" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--pending", children: o.length }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ e("ul", { class: "pdpm-an__query-list", children: o.map((c, l) => {
      const d = c.pdpmImpact?.componentImpacts, u = d ? { slp: d.slp, nta: d.nta, nursing: d.nursing, ptot: d.ptot } : null, p = c.status === "sent" || c.status === "awaiting_response";
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
                /* @__PURE__ */ e("span", { class: "pdpm-an__query-text", children: $e(c.mdsItemName, c.mdsItem) })
              ] }),
              /* @__PURE__ */ e("span", { class: `pdpm-an__query-status-pill${p ? "" : " pdpm-an__query-status-pill--draft"}`, children: p ? Dc(c.sentAt) : "draft" })
            ] }),
            u && /* @__PURE__ */ e(pi, { impact: u, payment: r, variant: "pending" })
          ]
        },
        l
      );
    }) })
  ] });
}
function Cc(t) {
  if (!t) return "";
  const n = Math.floor((Date.now() - new Date(t)) / 864e5);
  return n === 0 ? "today" : n === 1 ? "yesterday" : `${n}d ago`;
}
function Nc({ data: t, onQueryClick: n, collapsed: s, onToggleCollapse: i }) {
  const r = (t?.recentlySigned || t?.signedQueries || t?.completedQueries || []).filter(
    (c) => c.status === "signed" || c.status === "completed" || c.status === "resolved" || c.signedAt
  );
  if (r.length === 0) return null;
  const o = r.filter((c) => c.mdsItemCoded === !1).length;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__card pdpm-an__card--signed", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: i, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "✓" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Recently Signed" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge", children: r.length }),
      o > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--coding", children: [
        o,
        " need coding"
      ] }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ e("ul", { class: "pdpm-an__query-list", children: r.map((c, l) => {
      const d = c.mdsItemCoded === !1, u = c.mdsItemCoded === !0, p = Cc(c.signedAt || c.completedAt);
      return /* @__PURE__ */ e(
        "li",
        {
          class: `pdpm-an__signed-item${d ? " pdpm-an__signed-item--needs-coding" : ""} pdpm-an__signed-item--clickable`,
          onClick: () => n && n(c),
          role: "button",
          tabIndex: 0,
          children: [
            c.mdsItem && /* @__PURE__ */ e("span", { class: "pdpm-an__query-code pdpm-an__query-code--signed", children: c.mdsItem }),
            /* @__PURE__ */ e("span", { class: "pdpm-an__query-text", children: $e(c.mdsItemName, c.mdsItem) }),
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
function Sc({ nta: t, potentialLevel: n, payment: s }) {
  if (!t) return null;
  if (s?.mode === "state_rate") {
    if (t.currentPoints == null || t.pointsNeeded == null) return null;
    const h = s.current?.ntaTier?.tier, _ = h != null ? h - 1 : null, g = _ != null && _ >= 1 ? `Tier ${_}` : null;
    if (!g && t.pointsNeeded <= 0) return null;
    const f = t.currentPoints + t.pointsNeeded, y = f > 0 ? Math.round(t.currentPoints / f * 100) : 0;
    return /* @__PURE__ */ e("div", { class: "pdpm-an__nta-inline", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__nta-sbar", children: /* @__PURE__ */ e("div", { class: "pdpm-an__nta-sfill", style: { width: `${y}%` } }) }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__nta-slbl", children: [
        t.pointsNeeded === 1 ? "1 pt" : `${t.pointsNeeded} pts`,
        " away",
        g ? ` from ${g}` : ""
      ] })
    ] });
  }
  const i = t.levels;
  if (!i || i.length < 2 || !t.currentLevel) return null;
  const a = i.findIndex((h) => h.code === t.currentLevel);
  if (a === -1) return null;
  const r = n || t.nextLevel, o = r ? i.findIndex((h) => h.code === r) : -1;
  if (o <= a) return null;
  const c = (h) => h / (i.length - 1) * 100, l = Math.max(c(a), 4), u = c(o) - l, p = t.pointsNeeded, m = t.nextLevel;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__nta-track", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__nta-bar", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__nta-bar-cur", style: { width: `${l}%` } }),
      /* @__PURE__ */ e("div", { class: "pdpm-an__nta-bar-gain", style: { left: `${l}%`, width: `${u}%` } })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__nta-lvls", children: i.map((h, _) => /* @__PURE__ */ e("span", { class: `pdpm-an__nta-lvl${_ === a ? " pdpm-an__nta-lvl--cur" : ""}${_ === o ? " pdpm-an__nta-lvl--tgt" : ""}`, children: h.code }, h.code)) }),
    p != null && p > 0 && m && /* @__PURE__ */ e("span", { class: "pdpm-an__nta-away", children: [
      p === 1 ? "1 pt" : `${p} pts`,
      " ",
      "→",
      " ",
      m
    ] })
  ] });
}
function xc({ gap: t }) {
  const n = t?.slp;
  if (!n || n.tier1Met == null && n.tier2Met == null) return null;
  const s = (n.tier2Met ?? 0) + (n.tier2Needed ?? 0);
  return /* @__PURE__ */ e("div", { class: "pdpm-an__tier-row", children: [
    n.tier1Met != null && /* @__PURE__ */ e("span", { class: "pdpm-an__tier-segment", children: [
      "Tier 1: ",
      Array.from({ length: n.tier1Met }, (i, a) => /* @__PURE__ */ e("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--filled", children: "●" }, a)),
      " ",
      n.tier1Met,
      " met"
    ] }),
    (n.tier2Met != null || n.tier2Needed != null) && /* @__PURE__ */ e("span", { class: "pdpm-an__tier-segment", children: [
      n.tier1Met != null && /* @__PURE__ */ e("span", { class: "pdpm-an__tier-sep", children: "·" }),
      "Tier 2: ",
      Array.from({ length: n.tier2Met ?? 0 }, (i, a) => /* @__PURE__ */ e("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--filled", children: "●" }, `f${a}`)),
      Array.from({ length: n.tier2Needed ?? 0 }, (i, a) => /* @__PURE__ */ e("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--empty", children: "○" }, `e${a}`)),
      " ",
      n.tier2Met ?? 0,
      "/",
      s
    ] })
  ] });
}
function Pc(t) {
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
      for (const i of t.slp.comorbidities)
        i.isPresent && i.comorbidityNumber <= 100 && s.push({ mdsItem: i.mdsItem, itemName: i.name, helpText: `Tier 1 comorbidity: ${i.name}` });
    t.slp.tier1?.hasCognitiveImpairment && s.push({ mdsItem: "C0500", itemName: "Cognitive Impairment", helpText: "Tier 1: cognitive impairment" }), t.slp.tier1?.hasAcuteNeuro && s.push({ mdsItem: "I4500", itemName: "Acute Neurological", helpText: "Tier 1: acute neurological condition" }), n.slp = s;
  }
  if (t.nursing?.conditionsEvaluated) {
    const s = { ES: "Extensive Services", SCH: "Special Care High", SCL: "Special Care Low", CC: "Clinically Complex" };
    n.nursing = t.nursing.conditionsEvaluated.filter((i) => i.isMet).map((i) => ({
      mdsItem: i.triggeringItems?.[0] || "",
      itemName: i.subcategoryName,
      helpText: `${s[i.mainCategory] || i.mainCategory}: ${i.subcategoryName}`
    }));
  }
  return n;
}
function Tc({ data: t, payment: n, onItemClick: s, collapsed: i, onToggleCollapse: a }) {
  const [r, o] = v(null), c = t?.gapAnalysis || {}, l = t?.hippsDecoded || {}, d = t?.potentialHippsDecoded || {}, u = t?.enhancedDetections || [], p = Pc(t?.calculation), m = [
    {
      label: "PT/OT",
      key: "ptot",
      currentCode: l.ptot?.code,
      potential: d.ptot?.code,
      name: l.ptot?.name,
      detail: c.ptot?.clinicalCategoryName,
      items: c.ptot?.detectionsToHelp || [],
      captured: p.ptot
    },
    {
      label: "SLP",
      key: "slp",
      currentCode: l.slp?.code,
      potential: d.slp?.code,
      name: l.slp?.name,
      detail: c.slp?.clinicalCategoryName,
      items: c.slp?.detectionsToHelp || [],
      captured: p.slp
    },
    {
      label: "Nursing",
      key: "nursing",
      currentCode: l.nursing?.code,
      potential: d.nursing?.code,
      name: l.nursing?.name,
      detail: c.nursing?.qualifyingSubcategoryName,
      items: c.nursing?.detectionsToHelp || [],
      captured: p.nursing
    },
    {
      label: "NTA",
      key: "nta",
      currentCode: n?.mode === "state_rate" && n.current?.ntaTier?.tier != null ? `Tier ${n.current.ntaTier.tier}` : l.nta?.code,
      potential: n?.mode === "state_rate" ? n.potential?.ntaTier?.tier != null && n.potential.ntaTier.tier !== n.current?.ntaTier?.tier ? `Tier ${n.potential.ntaTier.tier}` : null : d.nta?.code,
      name: n?.mode === "state_rate" && n.current?.ntaTier?.label || l.nta?.name,
      detail: n?.mode === "state_rate" && n.current?.ntaTier?.pointRange || c.nta?.clinicalCategoryName,
      items: c.nta?.detectionsToHelp || [],
      captured: p.nta,
      ntaProgress: c.nta
    }
  ];
  return m.some((_) => _.currentCode || _.potential) ? /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: a, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "☰" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "PDPM Components" }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${i ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !i && /* @__PURE__ */ e("div", { class: "pdpm-an__components", children: m.map((_) => {
      if (!_.currentCode && !_.potential) return null;
      const g = _.potential && _.currentCode && _.potential !== _.currentCode, f = _.items.length > 0, y = _.captured.length > 0, w = r === _.key, k = () => {
        (f || y || _.detail) && o(w ? null : _.key);
      }, C = f || y || _.detail;
      return /* @__PURE__ */ e(
        "div",
        {
          class: `pdpm-an__comp-row${g ? " pdpm-an__comp-row--improved" : ""}${w ? " pdpm-an__comp-row--expanded" : ""}`,
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                class: `pdpm-an__comp-header${C ? " pdpm-an__comp-header--clickable" : ""}`,
                onClick: C ? k : void 0,
                role: C ? "button" : void 0,
                tabIndex: C ? 0 : void 0,
                onKeyDown: C ? (I) => {
                  (I.key === "Enter" || I.key === " ") && (I.preventDefault(), k());
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
                  C && /* @__PURE__ */ e("svg", { class: `pdpm-an__comp-chevron${w ? " pdpm-an__comp-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ e("path", { d: "M4 5.5L7 8.5L10 5.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                ]
              }
            ),
            _.ntaProgress && /* @__PURE__ */ e(Sc, { nta: _.ntaProgress, potentialLevel: _.potential, payment: n }),
            w && /* @__PURE__ */ e("div", { class: "pdpm-an__comp-detail", children: [
              _.detail && /* @__PURE__ */ e("div", { class: "pdpm-an__comp-qualifier", children: _.detail }),
              _.key === "slp" && /* @__PURE__ */ e(xc, { gap: c }),
              f && /* @__PURE__ */ e(J, { children: [
                y && /* @__PURE__ */ e("div", { class: "pdpm-an__captured-label pdpm-an__captured-label--opps", children: "Opportunities" }),
                /* @__PURE__ */ e("div", { class: "pdpm-an__ci-list", children: _.items.map((I, P) => {
                  const A = I.mdsItem?.startsWith("I8000:") ? "I8000" : I.mdsItem, x = (D) => {
                    if (D.stopPropagation(), !s) return;
                    const N = u.find((S) => S.mdsItem === I.mdsItem);
                    N && s(N);
                  };
                  return /* @__PURE__ */ e(
                    "div",
                    {
                      class: "pdpm-an__ci-row",
                      onClick: x,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (D) => {
                        (D.key === "Enter" || D.key === " ") && (D.preventDefault(), x(D));
                      },
                      children: [
                        /* @__PURE__ */ e("span", { class: "pdpm-an__ci-code", children: A }),
                        /* @__PURE__ */ e("div", { class: "pdpm-an__ci-body", children: [
                          /* @__PURE__ */ e("span", { class: "pdpm-an__ci-name", children: $e(I.itemName, I.mdsItem) }),
                          I.helpText && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-help", children: I.helpText })
                        ] }),
                        I.pointsAdded != null && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-impact pdpm-an__ci-impact--pts", children: [
                          "+",
                          I.pointsAdded,
                          " pts"
                        ] })
                      ]
                    },
                    P
                  );
                }) })
              ] }),
              y && /* @__PURE__ */ e("div", { class: "pdpm-an__captured", children: [
                (f || _.detail) && /* @__PURE__ */ e("div", { class: "pdpm-an__captured-label", children: "Currently captured" }),
                /* @__PURE__ */ e("div", { class: "pdpm-an__ci-list", children: _.captured.map((I, P) => {
                  const A = I.mdsItem?.startsWith("I8000:") ? "I8000" : I.mdsItem, x = (D) => {
                    if (D.stopPropagation(), !s) return;
                    const N = u.find((S) => S.mdsItem === I.mdsItem);
                    N && s(N);
                  };
                  return /* @__PURE__ */ e(
                    "div",
                    {
                      class: "pdpm-an__ci-row pdpm-an__ci-row--captured",
                      onClick: x,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (D) => {
                        (D.key === "Enter" || D.key === " ") && (D.preventDefault(), x(D));
                      },
                      children: [
                        /* @__PURE__ */ e("span", { class: "pdpm-an__ci-check", children: "✓" }),
                        /* @__PURE__ */ e("span", { class: "pdpm-an__ci-code", children: A }),
                        /* @__PURE__ */ e("div", { class: "pdpm-an__ci-body", children: [
                          /* @__PURE__ */ e("span", { class: "pdpm-an__ci-name", children: $e(I.itemName, I.mdsItem) }),
                          I.helpText && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-help", children: I.helpText })
                        ] }),
                        I.pointsAdded != null && /* @__PURE__ */ e("span", { class: "pdpm-an__ci-impact pdpm-an__ci-impact--pts", children: [
                          "+",
                          I.pointsAdded,
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
const Ac = {
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
function tt({ value: t, max: n, label: s, severity: i, impact: a, extra: r }) {
  const o = Ac[i] || "#9ca3af", c = t != null && n > 0 ? Math.round(t / n * 100) : 0, l = 20, d = 2 * Math.PI * l, u = d - c / 100 * d;
  return /* @__PURE__ */ e("div", { class: "pdpm-an__sc", title: a || "", children: [
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
            stroke: o,
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
    i && /* @__PURE__ */ e("span", { class: "pdpm-an__sc-severity", style: { color: o }, children: i }),
    r && /* @__PURE__ */ e("span", { class: "pdpm-an__sc-extra", children: r })
  ] });
}
const Mc = [
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
function Lc({ breakdown: t }) {
  if (!t) return null;
  const n = t.selfCare || {}, s = t.mobility || {}, i = { ...n, ...s };
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
      Mc.map((a) => {
        const r = i[a.key];
        return /* @__PURE__ */ e(J, { children: [
          /* @__PURE__ */ e("span", { class: "pdpm-an__gg-cell", children: a.label }),
          /* @__PURE__ */ e("span", { class: "pdpm-an__gg-cell pdpm-an__gg-cell--score", children: r ?? "—" }),
          /* @__PURE__ */ e("span", { class: `pdpm-an__gg-cell pdpm-an__gg-scope${a.scope === "ptot" ? " pdpm-an__gg-scope--ptot" : ""}`, children: a.scope === "ptot" ? "PT/OT only" : "Nursing + PT/OT" })
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
function Ec({ data: t, collapsed: n, onToggleCollapse: s }) {
  const i = t?.sectionProgress;
  if (!i || !i.total) return null;
  const { sections: a = {} } = i, r = Object.entries(a);
  let o = 0, c = 0, l = 0;
  for (const [, p] of r)
    p === "Complete" || p === "Completed" || p === "Locked" ? o++ : p === "In Progress" ? c++ : l++;
  const d = r.length || i.total || 0, u = d > 0 ? Math.round(o / d * 100) : 0;
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
          o > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--done", children: [
            o,
            " done"
          ] }),
          c > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--wip", children: [
            c,
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
function $c({ data: t, collapsed: n, onToggleCollapse: s }) {
  const [i, a] = v(!1), r = t?.scores;
  if (!r) return null;
  const o = r.bims, c = r.phq9, l = r.nursingFunctionalScore, d = r.ptotFunctionalScore, u = r.functionalScoreBreakdown;
  if (!o && !c && !l && !d) return null;
  const p = c?.score != null && c.score !== 99 ? c.score : c?.staffAssessmentScore, m = (c?.score == null || c?.score === 99) && c?.staffAssessmentScore != null ? "(Staff assessment)" : null, h = [];
  return o?.meetsImpairmentThreshold && h.push({ color: "#d97706", text: o.pdpmImpact || "Cognitive impairment detected — affects SLP and Nursing classification" }), c?.meetsDepressionThreshold && h.push({ color: "#ea580c", text: c.pdpmImpact || "Depression threshold met — upgrades Nursing payment group" }), l?.meetsBSCPThreshold && h.push({ color: "#6366f1", text: l.bscpNote || "NFS ≥ 11 — BSCP category eligible" }), /* @__PURE__ */ e("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: s, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-icon", children: "🧠" }),
      /* @__PURE__ */ e("span", { class: "pdpm-an__card-title", children: "Clinical Scores" }),
      /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ e("div", { class: "pdpm-an__scores-body", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__scores-row", children: [
        o && /* @__PURE__ */ e(tt, { value: o.score, max: 15, label: "BIMS", severity: o.severity, impact: o.pdpmImpact }),
        c && /* @__PURE__ */ e(tt, { value: p, max: 27, label: "PHQ-9", severity: c.severity, impact: c.pdpmImpact, extra: m }),
        l && /* @__PURE__ */ e(tt, { value: l.score, max: 16, label: "NFS", severity: l.severity, impact: l.pdpmImpact }),
        d && /* @__PURE__ */ e(tt, { value: d.score, max: 24, label: "PT/OT Func", severity: d.severity, impact: d.pdpmImpact })
      ] }),
      h.length > 0 && /* @__PURE__ */ e("div", { class: "pdpm-an__thresholds", children: h.map((_, g) => /* @__PURE__ */ e("div", { class: "pdpm-an__threshold", style: { borderLeftColor: _.color }, children: _.text }, g)) }),
      u && /* @__PURE__ */ e("div", { class: "pdpm-an__gg-toggle-wrap", children: [
        /* @__PURE__ */ e("button", { class: "pdpm-an__gg-toggle", onClick: () => a(!i), children: [
          i ? "Hide" : "Show",
          " GG Item Breakdown",
          /* @__PURE__ */ e("svg", { class: `pdpm-an__card-chevron${i ? " pdpm-an__card-chevron--open" : ""}`, width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ] }),
        i && /* @__PURE__ */ e(Lc, { breakdown: u })
      ] })
    ] })
  ] });
}
function Rc({ data: t }) {
  if (!t) return null;
  const n = t.summary || {}, s = t.calculation || {}, i = t.payment, a = n.currentHipps || s.hippsCode || "?????", r = n.potentialHippsIfCoded, o = i?.mode === "state_rate", c = (P) => P ? P.replace(/_/g, "") : null, l = o && c(i.current?.groupCode) || a, d = o ? c(i.potential?.groupCode) ?? l : r, u = o ? d && d !== l : n.hasImprovements && r && r !== a, p = va(i), m = t.compliance?.summary || {}, h = m.passed ?? 0, _ = m.notApplicable ?? 0, g = (m.total ?? 0) - _, f = t.sectionProgress;
  let y = 0, w = 0;
  if (f?.sections)
    for (const P of Object.values(f.sections))
      w++, (P === "Complete" || P === "Completed" || P === "Locked") && y++;
  w || (w = f?.total ?? 0);
  const k = w > 0 ? Math.round(y / w * 100) : 0, C = (t.enhancedDetections || []).filter(
    (P) => P.wouldChangeHipps && P.solverStatus !== "query_sent" && P.solverStatus !== "awaiting_response" && P.solverStatus !== "dont_code" && P.userDecision?.decision !== "disagree"
  ).length, I = p && p.delta && p.delta !== "+$0/day" && p.delta !== "+0";
  return /* @__PURE__ */ e("div", { class: "pdpm-an__summary", children: [
    I && /* @__PURE__ */ e("div", { class: "pdpm-an__summary-delta", children: p.delta }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__summary-codes", children: [
      /* @__PURE__ */ e("span", { class: "pdpm-an__summary-code", children: l }),
      u && /* @__PURE__ */ e(J, { children: [
        /* @__PURE__ */ e("span", { class: "pdpm-an__summary-arrow", children: "→" }),
        /* @__PURE__ */ e("span", { class: "pdpm-an__summary-code pdpm-an__summary-code--green", children: d })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__summary-stats", children: [
      w > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__summary-stat", children: [
        k,
        "% MDS"
      ] }),
      g > 0 && /* @__PURE__ */ e("span", { class: "pdpm-an__summary-stat", children: [
        h,
        "/",
        g,
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
function qc() {
  return /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__spinner" }),
    /* @__PURE__ */ e("p", { children: "Loading assessment data…" })
  ] });
}
function Oc({ message: t, onRetry: n }) {
  return /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__state-icon", children: "⚠" }),
    /* @__PURE__ */ e("p", { children: t }),
    /* @__PURE__ */ e("button", { class: "pdpm-an__retry-btn", onClick: n, children: "Retry" })
  ] });
}
function Hc({ assessmentData: t, onItemClick: n, onQueryClick: s, patientId: i }) {
  const [a, r] = v({}), o = (c) => r((l) => ({ ...l, [c]: !l[c] }));
  return t ? /* @__PURE__ */ e("div", { class: "pdpm-an__content", children: [
    /* @__PURE__ */ e(Rc, { data: t }),
    /* @__PURE__ */ e(bc, { data: t, onItemClick: n }),
    /* @__PURE__ */ e(kc, { data: t, onQueryClick: s, collapsed: a.queries, onToggleCollapse: () => o("queries") }),
    /* @__PURE__ */ e(Nc, { data: t, onQueryClick: s, collapsed: a.signed, onToggleCollapse: () => o("signed") }),
    /* @__PURE__ */ e(Tc, { data: t, payment: t?.payment, onItemClick: n, collapsed: a.components, onToggleCollapse: () => o("components") }),
    /* @__PURE__ */ e(Ec, { data: t, collapsed: a.sections, onToggleCollapse: () => o("sections") }),
    /* @__PURE__ */ e(Ic, { data: t, onItemClick: n, collapsed: a.docRisks, onToggleCollapse: () => o("docRisks") }),
    /* @__PURE__ */ e($c, { data: t, collapsed: a.scores, onToggleCollapse: () => o("scores") }),
    /* @__PURE__ */ e(rc, { data: t, collapsed: a.compliance, onToggleCollapse: () => o("compliance") }),
    i && /* @__PURE__ */ e(yc, { patientId: i, collapsed: a.certs, onToggleCollapse: () => o("certs") })
  ] }) : /* @__PURE__ */ e("div", { class: "pdpm-an__state", children: /* @__PURE__ */ e("p", { children: "No assessment data available." }) });
}
function Bc({ mode: t, onToggle: n }) {
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
function ms({ context: t, onClose: n, initialMode: s = "modal" }) {
  const [i, a] = v(null), [r, o] = v(null), [c, l] = v(s), [d, u] = v(!1), {
    assessments: p,
    detail: m,
    patientName: h,
    loading: _,
    detailLoading: g,
    error: f,
    retry: y,
    retryDetail: w
  } = Xo(t, i), k = p?.[0]?.id;
  t?.scope === "patient" && k && !i && a(k);
  const C = c === "panel";
  function I(L) {
    C || L.target === L.currentTarget && n();
  }
  function P() {
    n(), typeof MDSCommandCenterLauncher < "u" && MDSCommandCenterLauncher.open();
  }
  function A() {
    l((L) => L === "modal" ? "panel" : "modal");
  }
  const x = h || t?.patientName || "", D = m || null, N = p.find((L) => L.id === i), S = sn(
    D?.assessmentType || D?.type || N?.type
  ) || "", E = D?.ardDate || N?.ardDate ? li(D?.ardDate || N?.ardDate) : "", B = _ || g, M = C ? "pdpm-an__panel-backdrop" : "pdpm-an__overlay", q = (C ? "pdpm-an__panel" : "pdpm-an__modal") + (d ? " pdpm-an--split" : "");
  return /* @__PURE__ */ e("div", { class: M, onClick: I, children: /* @__PURE__ */ e("div", { class: q, role: "dialog", "aria-modal": C ? "false" : "true", "aria-label": "PDPM Analyzer", children: [
    /* @__PURE__ */ e("div", { class: "pdpm-an__header", children: [
      /* @__PURE__ */ e("div", { class: "pdpm-an__header-left", children: [
        /* @__PURE__ */ e("button", { class: "pdpm-an__back-btn", onClick: P, children: [
          "←",
          " Command Center"
        ] }),
        /* @__PURE__ */ e("div", { class: "pdpm-an__patient-info", children: [
          x && /* @__PURE__ */ e("span", { class: "pdpm-an__patient-name", children: x }),
          S && /* @__PURE__ */ e("span", { class: "pdpm-an__assessment-label", children: S }),
          E && /* @__PURE__ */ e("span", { class: "pdpm-an__ard-date", children: [
            "ARD ",
            E
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "pdpm-an__header-right", children: [
        /* @__PURE__ */ e(
          vc,
          {
            assessments: p,
            selectedId: i,
            onChange: (L) => {
              a(L), o(null);
            }
          }
        ),
        /* @__PURE__ */ e(Bc, { mode: c, onToggle: A }),
        /* @__PURE__ */ e("button", { class: "pdpm-an__close-btn", onClick: n, "aria-label": "Close", children: "✕" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "pdpm-an__body", children: [
      B && /* @__PURE__ */ e(qc, {}),
      !B && f && /* @__PURE__ */ e(Oc, { message: f, onRetry: m ? w : y }),
      !B && !f && (r ? /* @__PURE__ */ e(
        di,
        {
          item: r.item,
          context: { ...t, assessmentId: i || t?.assessmentId, patientName: x },
          onBack: () => {
            o(null), u(!1);
          },
          onSplitChange: u,
          onDismiss: () => {
            o(null), u(!1);
          }
        }
      ) : /* @__PURE__ */ e(
        Hc,
        {
          assessmentData: D,
          patientId: t?.patientId,
          onItemClick: (L) => o({ type: "detection", item: L }),
          onQueryClick: (L) => {
            const O = {
              ...L,
              patientName: L.patientName || x,
              locationName: L.locationName || t?.facilityName || ""
            };
            window.QueryDetailModal?.show(O, null, { showPdfButton: L.hasPdf ?? !1 });
          }
        }
      ))
    ] })
  ] }) });
}
function Fc({ patientId: t, facilityName: n, orgSlug: s, assessmentId: i }) {
  const [a, r] = v([]), [o, c] = v(null), [l, d] = v(null), [u, p] = v(null), [m, h] = v(!0), [_, g] = v(null), f = U(async () => {
    h(!0), g(null);
    try {
      const y = new URLSearchParams({
        patientId: t,
        facilityName: n,
        orgSlug: s
      });
      i && y.set("externalAssessmentId", i);
      const w = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/queryable-items?${y}`
      });
      if (!w.success)
        throw new Error(w.error || "Failed to fetch queryable items");
      const k = w.data || {}, C = i || k.assessment?.externalAssessmentId || null;
      let I = {};
      if (C) {
        const D = new URLSearchParams({
          facilityName: n,
          orgSlug: s,
          externalAssessmentId: C
        }), N = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${D}`
        });
        I = N.success ? N.data || {} : {};
      }
      const P = {};
      if (I.enhancedDetections)
        for (const D of I.enhancedDetections)
          P[D.mdsItem] = {
            wouldChangeHipps: D.wouldChangeHipps,
            impact: D.impact
          };
      if (I.outstandingQueries)
        for (const D of I.outstandingQueries)
          D.pdpmImpact && (P[D.mdsItem] = {
            wouldChangeHipps: D.pdpmImpact.wouldChangeHipps,
            impact: D.pdpmImpact.componentImpacts || D.pdpmImpact
          });
      const x = (k.items || []).map((D) => ({
        ...D,
        pdpmImpact: P[D.mdsItem] || null
      }));
      r(x), c(k.assessment || I.assessment || null), d(k.summary || null), p({
        currentHipps: I.summary?.currentHipps || I.calculation?.hippsCode || null,
        potentialHipps: I.summary?.potentialHippsIfCoded || null,
        hasImprovements: I.summary?.hasImprovements || !1,
        calculation: I.calculation || null,
        enhancedDetections: I.enhancedDetections || []
      });
    } catch (y) {
      console.error("[QueryItems] Failed to fetch data:", y), g(y.message);
    } finally {
      h(!1);
    }
  }, [t, n, s, i]);
  return F(() => {
    t && n && s ? f() : (h(!1), g("Missing required context (patient, facility, or organization)."));
  }, [f]), {
    items: a,
    setItems: r,
    assessment: o,
    summary: l,
    pdpmData: u,
    loading: m,
    error: _,
    retry: f
  };
}
function Uc(t, n) {
  const [s, i] = v(/* @__PURE__ */ new Set()), a = Y(() => t.filter(
    (u) => !u.existingQuery && !n.has(u.mdsItem)
  ), [t, n]), r = U((u) => {
    i((p) => {
      const m = new Set(p);
      return m.has(u) ? m.delete(u) : m.add(u), m;
    });
  }, []), o = U(() => {
    const u = a.filter((p) => p.solverStatus === "needs_physician_query").map((p) => p.mdsItem);
    i(new Set(u));
  }, [a]), c = U(() => {
    i(/* @__PURE__ */ new Set());
  }, []), l = U((u) => s.has(u), [s]), d = Y(() => t.filter((u) => s.has(u.mdsItem)), [t, s]);
  return {
    selectedIds: s,
    selectedItems: d,
    selectedCount: s.size,
    selectableCount: a.length,
    toggle: r,
    selectAllQueryable: o,
    deselectAll: c,
    isSelected: l
  };
}
function ui({ patientId: t, facilityName: n, orgSlug: s, assessmentId: i, onComplete: a }) {
  const [r, o] = v("idle"), [c, l] = v([]), [d, u] = v([]), [p, m] = v(null), [h, _] = v({ current: 0, total: 0 }), [g, f] = v(null), y = ee(!1), w = U(async (D) => {
    if (D.length === 0) return;
    o("generating"), f(null), _({ current: 0, total: D.length }), y.current = !1;
    const N = [];
    try {
      const S = window.QueryAPI.fetchPractitioners(n, s);
      for (let B = 0; B < D.length && !y.current; B++) {
        const M = D[B], q = M.pdpmCategoryName || M.mdsItemName || M.mdsItem;
        _({ current: B, total: D.length, currentItemName: q });
        try {
          const L = await window.QueryAPI.generateNote(
            M.mdsItem,
            M
          );
          N.push({
            item: M,
            noteText: L.note,
            preferredIcd10: L.preferredIcd10,
            icd10Options: L.icd10Options
          });
        } catch (L) {
          console.error(`[BatchQuery] Failed to generate note for ${M.mdsItem}:`, L), N.push({
            item: M,
            noteText: "",
            error: L.message
          });
        }
      }
      _({ current: D.length, total: D.length });
      try {
        const B = await S;
        u(B);
      } catch (B) {
        console.error("[BatchQuery] Failed to fetch practitioners:", B), u([]);
      }
      const E = N.filter((B) => B.noteText);
      l(E), E.length === 0 ? (f("Failed to generate any notes. Please try again."), o("idle")) : o("reviewing");
    } catch (S) {
      console.error("[BatchQuery] Generation failed:", S), f(S.message), o("idle");
    }
  }, [t, n, s, i]), k = U((D, N) => {
    l(
      (S) => S.map(
        (E) => E.item.mdsItem === D ? { ...E, noteText: N } : E
      )
    );
  }, []), C = U((D, N) => {
    l(
      (S) => S.map(
        (E) => E.item.mdsItem === D ? { ...E, selectedIcd10: N } : E
      )
    );
  }, []), I = U(async () => {
    if (!p || c.length === 0) return;
    o("sending"), f(null), _({ current: 0, total: c.length }), y.current = !1;
    const D = [];
    try {
      for (let N = 0; N < c.length && !y.current; N++) {
        const { item: S, noteText: E, selectedIcd10: B, preferredIcd10: M } = c[N];
        _({ current: N, total: c.length });
        const q = B || M?.code || null, L = q ? [{ code: q }] : S.recommendedIcd10 || [];
        try {
          const { query: O } = await window.QueryAPI.createQuery({
            patientId: t,
            facilityName: n,
            orgSlug: s,
            mdsAssessmentId: i,
            mdsItem: S.mdsItem,
            mdsItemName: S.pdpmCategoryName || S.mdsItemName || S.mdsItem,
            queryReason: S.rationale || "",
            keyFindings: S.keyFindings || [],
            queryEvidence: S.queryEvidence || S.evidence || [],
            recommendedIcd10: L,
            aiGeneratedNote: E
          });
          await window.QueryAPI.sendQuery(
            O.id,
            [p],
            E
          ), D.push({ ...O, mdsItem: S.mdsItem });
        } catch (O) {
          console.error(`[BatchQuery] Failed to create/send query for ${S.mdsItem}:`, O);
        }
      }
      if (_({ current: c.length, total: c.length }), o("complete"), a) {
        const N = d.find((E) => E.id === p), S = N ? N.firstName && N.lastName ? `${N.firstName} ${N.lastName}${N.title ? `, ${N.title}` : ""}` : N.name || "Provider" : "Provider";
        a(D, S);
      }
    } catch (N) {
      console.error("[BatchQuery] Send failed:", N), f(N.message), o("reviewing");
    }
  }, [t, n, s, i, c, p, d, a]), P = U(() => {
    o("idle"), l([]), _({ current: 0, total: 0 });
  }, []), A = U(() => {
    o("idle"), l([]), u([]), m(null), _({ current: 0, total: 0 }), f(null), y.current = !1;
  }, []), x = U(() => {
    y.current = !0;
  }, []);
  return {
    state: r,
    generatedQueries: c,
    practitioners: d,
    selectedPractitionerId: p,
    setSelectedPractitionerId: m,
    progress: h,
    error: g,
    generate: w,
    updateNote: k,
    updateIcd10: C,
    sendAll: I,
    backToSelection: P,
    reset: A,
    abort: x
  };
}
const Gc = ({ assessment: t, summary: n, pdpmData: s }) => {
  const i = s?.calculation, a = s?.hasImprovements && s.potentialHipps && s.potentialHipps !== s.currentHipps, r = Vc(s);
  return /* @__PURE__ */ e("div", { className: "query-items__header", children: [
    /* @__PURE__ */ e("div", { className: "query-items__header-top", children: [
      /* @__PURE__ */ e("div", { className: "query-items__assessment-info", children: t && /* @__PURE__ */ e(J, { children: [
        /* @__PURE__ */ e("strong", { children: t.description || "Assessment" }),
        t.ardDate && /* @__PURE__ */ e("span", { children: [
          " · ARD: ",
          Wc(t.ardDate)
        ] })
      ] }) }),
      s && s.currentHipps && /* @__PURE__ */ e("div", { className: "query-items__hipps", children: [
        /* @__PURE__ */ e("span", { className: "query-items__hipps-current", children: s.currentHipps }),
        a ? /* @__PURE__ */ e(J, { children: [
          /* @__PURE__ */ e("span", { className: "query-items__hipps-arrow", children: "→" }),
          /* @__PURE__ */ e("span", { className: "query-items__hipps-potential", children: s.potentialHipps })
        ] }) : /* @__PURE__ */ e("span", { className: "query-items__hipps-same", children: "No change" })
      ] })
    ] }),
    i && /* @__PURE__ */ e("div", { className: "query-items__components", children: [
      /* @__PURE__ */ e(nt, { label: "PT/OT", current: i.ptot, change: r.ptot }),
      /* @__PURE__ */ e(nt, { label: "SLP", current: i.slp, change: r.slp }),
      /* @__PURE__ */ e(nt, { label: "Nursing", current: i.nursing, change: r.nursing }),
      /* @__PURE__ */ e(nt, { label: "NTA", current: i.nta, change: r.nta })
    ] }),
    n && /* @__PURE__ */ e("div", { className: "query-items__summary", children: [
      /* @__PURE__ */ e("div", { className: "query-items__summary-stat", children: [
        /* @__PURE__ */ e("span", { className: "query-items__summary-count query-items__summary-count--query", children: n.needsPhysicianQuery || 0 }),
        /* @__PURE__ */ e("span", { children: "Query Recommended" })
      ] }),
      /* @__PURE__ */ e("div", { className: "query-items__summary-stat", children: [
        /* @__PURE__ */ e("span", { className: "query-items__summary-count query-items__summary-count--coded", children: n.coded || 0 }),
        /* @__PURE__ */ e("span", { children: "Coded" })
      ] }),
      /* @__PURE__ */ e("div", { className: "query-items__summary-stat", children: [
        /* @__PURE__ */ e("span", { className: "query-items__summary-count query-items__summary-count--review", children: n.needsReview || 0 }),
        /* @__PURE__ */ e("span", { children: "Needs Review" })
      ] })
    ] })
  ] });
}, nt = ({ label: t, current: n, change: s }) => {
  if (!n) return null;
  const i = s && s.to && s.to !== n;
  return /* @__PURE__ */ e("div", { className: `query-items__component${i ? " query-items__component--has-change" : ""}`, children: [
    /* @__PURE__ */ e("span", { className: "query-items__component-label", children: t }),
    /* @__PURE__ */ e("span", { className: "query-items__component-value", children: n }),
    i && /* @__PURE__ */ e(J, { children: [
      /* @__PURE__ */ e("span", { className: "query-items__component-arrow", children: "→" }),
      /* @__PURE__ */ e("span", { className: "query-items__component-new", children: s.to })
    ] })
  ] });
};
function Vc(t) {
  const n = { ptot: null, slp: null, nursing: null, nta: null };
  if (!t?.enhancedDetections) return n;
  for (const s of t.enhancedDetections)
    s.impact && (s.impact.ptot?.wouldChangeGroup && !n.ptot && (n.ptot = { to: s.impact.ptot.newGroup }), s.impact.slp?.wouldChangeGroup && !n.slp && (n.slp = { to: s.impact.slp.newGroup }), s.impact.nursing?.wouldChangeGroup && !n.nursing && (n.nursing = { to: s.impact.nursing.newPaymentGroup }), s.impact.nta?.wouldChangeLevel && !n.nta && (n.nta = { to: s.impact.nta.newLevel }));
  return n;
}
function Wc(t) {
  if (!t) return "";
  try {
    const n = new Date(t);
    return `${n.getMonth() + 1}/${n.getDate()}/${n.getFullYear()}`;
  } catch {
    return t;
  }
}
const st = ({ item: t, isActive: n, isChecked: s, onSelect: i, onToggleCheck: a }) => {
  const r = t.pdpmCategoryName || t.mdsItemName || t.mdsItem, o = t.solverStatus === "needs_physician_query", c = !!t.existingQuery;
  return /* @__PURE__ */ e(
    "div",
    {
      className: `qi-sidebar__item${n ? " qi-sidebar__item--active" : ""}${o ? " qi-sidebar__item--query" : ""}`,
      onClick: () => i(t.mdsItem),
      children: [
        /* @__PURE__ */ e("div", { className: "qi-sidebar__item-check", onClick: (d) => {
          d.stopPropagation(), c || a(t.mdsItem);
        }, children: /* @__PURE__ */ e(
          "input",
          {
            type: "checkbox",
            checked: s,
            disabled: c,
            readOnly: !0
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "qi-sidebar__item-info", children: [
          /* @__PURE__ */ e("div", { className: "qi-sidebar__item-name", children: r }),
          /* @__PURE__ */ e("div", { className: "qi-sidebar__item-meta", children: [
            /* @__PURE__ */ e("span", { className: "qi-sidebar__item-code", children: t.mdsItem }),
            t.pdpmComponent && /* @__PURE__ */ e("span", { className: "qi-sidebar__item-component", children: t.pdpmComponent })
          ] }),
          /* @__PURE__ */ e("div", { className: "qi-sidebar__item-steps", children: [
            t.diagnosisSummary !== void 0 && /* @__PURE__ */ e("span", { className: `qi-sidebar__step qi-sidebar__step--${t.diagnosisPassed ? "pass" : "fail"}`, children: [
              t.diagnosisPassed ? "✓" : "✗",
              " Dx"
            ] }),
            t.treatmentSummary !== void 0 && /* @__PURE__ */ e("span", { className: `qi-sidebar__step qi-sidebar__step--${t.activeStatusPassed ? "pass" : "fail"}`, children: [
              t.activeStatusPassed ? "✓" : "✗",
              " Tx"
            ] }),
            t.existingQuery && /* @__PURE__ */ e("span", { className: `qi-sidebar__query-pill qi-sidebar__query-pill--${t.existingQuery.status}`, children: t.existingQuery.status })
          ] })
        ] })
      ]
    }
  );
}, Qc = ({ items: t, activeItem: n, onSelect: s, isChecked: i, onToggleCheck: a, dismissedItems: r }) => {
  const { queryItems: o, onMdsItems: c, canCodeItems: l, reviewItems: d } = Y(() => {
    const u = [], p = [], m = [], h = [];
    for (const _ of t)
      r.has(_.mdsItem) || (_.solverStatus === "needs_physician_query" ? u.push(_) : _.solverStatus === "needs_review" ? h.push(_) : _.codedOnMds ? p.push(_) : m.push(_));
    return { queryItems: u, onMdsItems: p, canCodeItems: m, reviewItems: h };
  }, [t, r]);
  return /* @__PURE__ */ e("div", { className: "qi-sidebar", children: [
    o.length > 0 && /* @__PURE__ */ e("div", { className: "qi-sidebar__group", children: [
      /* @__PURE__ */ e("div", { className: "qi-sidebar__group-header qi-sidebar__group-header--query", children: [
        /* @__PURE__ */ e("span", { children: "Needs Query" }),
        /* @__PURE__ */ e("span", { className: "qi-sidebar__group-count", children: o.length })
      ] }),
      o.map((u) => /* @__PURE__ */ e(
        st,
        {
          item: u,
          isActive: n === u.mdsItem,
          isChecked: i(u.mdsItem),
          onSelect: s,
          onToggleCheck: a
        },
        u.mdsItem
      ))
    ] }),
    l.length > 0 && /* @__PURE__ */ e("div", { className: "qi-sidebar__group", children: [
      /* @__PURE__ */ e("div", { className: "qi-sidebar__group-header qi-sidebar__group-header--can-code", children: [
        /* @__PURE__ */ e("span", { children: "Can Code" }),
        /* @__PURE__ */ e("span", { className: "qi-sidebar__group-count", children: l.length })
      ] }),
      l.map((u) => /* @__PURE__ */ e(
        st,
        {
          item: u,
          isActive: n === u.mdsItem,
          isChecked: i(u.mdsItem),
          onSelect: s,
          onToggleCheck: a
        },
        u.mdsItem
      ))
    ] }),
    d.length > 0 && /* @__PURE__ */ e("div", { className: "qi-sidebar__group", children: [
      /* @__PURE__ */ e("div", { className: "qi-sidebar__group-header qi-sidebar__group-header--review", children: [
        /* @__PURE__ */ e("span", { children: "Needs Review" }),
        /* @__PURE__ */ e("span", { className: "qi-sidebar__group-count", children: d.length })
      ] }),
      d.map((u) => /* @__PURE__ */ e(
        st,
        {
          item: u,
          isActive: n === u.mdsItem,
          isChecked: i(u.mdsItem),
          onSelect: s,
          onToggleCheck: a
        },
        u.mdsItem
      ))
    ] }),
    c.length > 0 && /* @__PURE__ */ e("div", { className: "qi-sidebar__group", children: [
      /* @__PURE__ */ e("div", { className: "qi-sidebar__group-header qi-sidebar__group-header--on-mds", children: [
        /* @__PURE__ */ e("span", { children: "On MDS" }),
        /* @__PURE__ */ e("span", { className: "qi-sidebar__group-count", children: c.length })
      ] }),
      c.map((u) => /* @__PURE__ */ e(
        st,
        {
          item: u,
          isActive: n === u.mdsItem,
          isChecked: i(u.mdsItem),
          onSelect: s,
          onToggleCheck: a
        },
        u.mdsItem
      ))
    ] })
  ] });
}, zc = ({ status: t }) => {
  const s = {
    code: "Can Code",
    coded: "Can Code",
    needs_physician_query: "Query Recommended",
    needs_review: "Needs Review"
  }[t] || t;
  return /* @__PURE__ */ e("span", { className: `query-items__status-badge query-items__status-badge--${t}`, children: s });
}, jc = ({ pdpmImpact: t }) => {
  if (!t || !t.impact) return null;
  const { impact: n } = t, s = [];
  return n.nta?.wouldChangeLevel && s.push({ label: "NTA", from: n.nta.currentLevel, to: n.nta.newLevel }), n.slp?.wouldChangeGroup && s.push({ label: "SLP", from: n.slp.currentGroup, to: n.slp.newGroup }), n.nursing?.wouldChangeGroup && s.push({ label: "Nursing", from: n.nursing.currentPaymentGroup, to: n.nursing.newPaymentGroup }), n.ptot?.wouldChangeGroup && s.push({ label: "PT/OT", from: n.ptot.currentGroup, to: n.ptot.newGroup }), s.length === 0 ? null : /* @__PURE__ */ e(J, { children: s.map((i, a) => /* @__PURE__ */ e("span", { className: "query-items__pdpm-badge", children: [
    i.label,
    ": ",
    i.from || "?",
    /* @__PURE__ */ e("span", { className: "query-items__pdpm-arrow", children: "→" }),
    /* @__PURE__ */ e("span", { className: "query-items__pdpm-new", children: i.to || "?" })
  ] }, a)) });
};
function mi(t) {
  return t.quoteText || t.quote || t.orderDescription || t.findingText || t.text || "";
}
function Kc(t) {
  if (t.sourceType) return t.sourceType;
  const n = t.evidenceId || "";
  if (n.startsWith("therapy-doc-")) return "therapy-doc";
  if (n.startsWith("pcc-prognote-") || n.startsWith("patient-practnote-")) return "progress-note";
  if (n.startsWith("order-")) return "order";
  if (n.startsWith("lab-")) return "lab-result";
  if (n.startsWith("mar-")) return "mar";
  if (n.startsWith("uda-")) return "uda";
  const s = t.type || "";
  if (s === "clinical_note") return "progress-note";
  if (s === "therapy_document") return "therapy-doc";
  if (s === "order") return "order";
  if (s === "lab_result") return "lab-result";
  if (s === "document") return "document";
  const i = (t.displayName || "").toLowerCase();
  return i.includes("therapy") || i.includes("eval") ? "therapy-doc" : i.includes("lab") ? "lab-result" : i.includes("order") ? "order" : "document";
}
const Jc = {
  "progress-note": "Progress Note",
  "therapy-doc": "Therapy Doc",
  order: "Order",
  "lab-result": "Lab Result",
  "nursing-note": "Nursing Note",
  "vital-signs": "Vitals",
  mar: "MAR",
  uda: "Assessment",
  document: "Document"
};
function Yc(t) {
  if (typeof window.parseEvidenceForViewer == "function") {
    const { viewerType: n } = window.parseEvidenceForViewer(t);
    return !!n;
  }
  return !1;
}
function Zc(t) {
  if (typeof window.parseEvidenceForViewer != "function") return;
  const { viewerType: n, id: s } = window.parseEvidenceForViewer(t);
  if (!n || !s) return;
  const i = mi(t), a = t.wordBlocks || null;
  n === "clinical-note" && typeof window.showClinicalNoteModal == "function" ? window.showClinicalNoteModal(s) : n === "therapy-document" && typeof window.showTherapyDocModal == "function" ? window.showTherapyDocModal(s, i) : n === "document" && typeof window.showDocumentModal == "function" ? window.showDocumentModal(s, a) : n === "uda" && typeof window.showUdaModal == "function" && window.showUdaModal(s, i, t.patientId || null);
}
const $t = ({ ev: t }) => {
  const n = Kc(t), s = t.displayName || Jc[n] || "Evidence", i = mi(t), a = Yc(t), r = t.date || t.serviceDate || "";
  return /* @__PURE__ */ e(
    "div",
    {
      className: `qi-detail__evidence-card${a ? " qi-detail__evidence-card--viewable" : ""}`,
      onClick: a ? () => Zc(t) : void 0,
      children: [
        /* @__PURE__ */ e("div", { className: "qi-detail__evidence-card-header", children: [
          /* @__PURE__ */ e("span", { className: `qi-detail__evidence-type qi-detail__evidence-type--${n}`, children: s }),
          r && /* @__PURE__ */ e("span", { className: "qi-detail__evidence-date", children: r }),
          a && /* @__PURE__ */ e("span", { className: "qi-detail__evidence-view-link", children: [
            "View",
            /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
              /* @__PURE__ */ e("polyline", { points: "15 3 21 3 21 9" }),
              /* @__PURE__ */ e("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
            ] })
          ] })
        ] }),
        i && /* @__PURE__ */ e("div", { className: "qi-detail__evidence-quote", children: i }),
        t.rationale && /* @__PURE__ */ e("div", { className: "qi-detail__evidence-rationale", children: t.rationale })
      ]
    }
  );
}, Xc = ({ item: t }) => {
  if (!t)
    return /* @__PURE__ */ e("div", { className: "qi-detail qi-detail--empty", children: [
      /* @__PURE__ */ e("div", { className: "qi-detail__empty-icon", children: /* @__PURE__ */ e("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ e("path", { d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" }) }) }),
      /* @__PURE__ */ e("div", { className: "qi-detail__empty-text", children: "Select an item to view evidence" })
    ] });
  const n = t.pdpmCategoryName || t.mdsItemName || t.mdsItem, s = t.solverStatus === "needs_physician_query", i = t.queryEvidence || [], a = t.evidence || [], r = {};
  for (const l of a) {
    const d = l.evidenceRole || "supporting";
    r[d] || (r[d] = []), r[d].push(l);
  }
  const o = {
    diagnosis: "Step 1: Diagnosis",
    active_treatment: "Step 2: Active Treatment",
    supporting: "Supporting Evidence"
  }, c = ["diagnosis", "active_treatment", "supporting"];
  return /* @__PURE__ */ e("div", { className: "qi-detail", children: [
    /* @__PURE__ */ e("div", { className: "qi-detail__header", children: [
      /* @__PURE__ */ e("div", { className: "qi-detail__header-top", children: [
        /* @__PURE__ */ e("h2", { className: "qi-detail__name", children: n }),
        /* @__PURE__ */ e(zc, { status: t.solverStatus })
      ] }),
      /* @__PURE__ */ e("div", { className: "qi-detail__header-meta", children: [
        /* @__PURE__ */ e("span", { className: "qi-detail__code", children: t.mdsItem }),
        t.pdpmComponent && /* @__PURE__ */ e("span", { className: "qi-detail__component", children: t.pdpmComponent }),
        /* @__PURE__ */ e(jc, { pdpmImpact: t.pdpmImpact }),
        t.codedOnMds && /* @__PURE__ */ e("span", { className: "qi-detail__coded-badge", children: "On MDS" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "qi-detail__content", children: [
      (t.diagnosisSummary || t.treatmentSummary) && /* @__PURE__ */ e("div", { className: "qi-detail__steps", children: [
        t.diagnosisSummary && /* @__PURE__ */ e("div", { className: `qi-detail__step qi-detail__step--${t.diagnosisPassed ? "pass" : "fail"}`, children: [
          /* @__PURE__ */ e("span", { className: "qi-detail__step-icon", children: t.diagnosisPassed ? "✓" : "✗" }),
          /* @__PURE__ */ e("div", { className: "qi-detail__step-body", children: [
            /* @__PURE__ */ e("div", { className: "qi-detail__step-label", children: "Step 1: Diagnosis" }),
            /* @__PURE__ */ e("div", { className: "qi-detail__step-text", children: t.diagnosisSummary })
          ] })
        ] }),
        t.treatmentSummary && /* @__PURE__ */ e("div", { className: `qi-detail__step qi-detail__step--${t.activeStatusPassed ? "pass" : "fail"}`, children: [
          /* @__PURE__ */ e("span", { className: "qi-detail__step-icon", children: t.activeStatusPassed ? "✓" : "✗" }),
          /* @__PURE__ */ e("div", { className: "qi-detail__step-body", children: [
            /* @__PURE__ */ e("div", { className: "qi-detail__step-label", children: "Step 2: Active Treatment" }),
            /* @__PURE__ */ e("div", { className: "qi-detail__step-text", children: t.treatmentSummary })
          ] })
        ] })
      ] }),
      s && !t.diagnosisSummary && t.rationale && /* @__PURE__ */ e("div", { className: "qi-detail__rationale", children: [
        /* @__PURE__ */ e("div", { className: "qi-detail__section-label", children: "Rationale" }),
        /* @__PURE__ */ e("p", { children: t.rationale })
      ] }),
      t.keyFindings && t.keyFindings.length > 0 && /* @__PURE__ */ e("div", { className: "qi-detail__findings", children: [
        /* @__PURE__ */ e("div", { className: "qi-detail__section-label", children: "Key Findings" }),
        /* @__PURE__ */ e("ul", { className: "qi-detail__findings-list", children: t.keyFindings.map((l, d) => /* @__PURE__ */ e("li", { children: typeof l == "string" ? l : l.text || l.finding || JSON.stringify(l) }, d)) })
      ] }),
      i.length > 0 && /* @__PURE__ */ e("div", { className: "qi-detail__evidence-section", children: [
        /* @__PURE__ */ e("div", { className: "qi-detail__section-label", children: [
          "Query Evidence",
          /* @__PURE__ */ e("span", { className: "qi-detail__section-count", children: i.length })
        ] }),
        i.map((l, d) => /* @__PURE__ */ e($t, { ev: l }, d))
      ] }),
      a.length > 0 && /* @__PURE__ */ e("div", { className: "qi-detail__evidence-section", children: [
        c.map((l) => {
          const d = r[l];
          return !d || d.length === 0 ? null : /* @__PURE__ */ e("div", { className: "qi-detail__evidence-group", children: [
            /* @__PURE__ */ e("div", { className: "qi-detail__section-label", children: [
              o[l] || l,
              /* @__PURE__ */ e("span", { className: "qi-detail__section-count", children: d.length })
            ] }),
            d.map((u, p) => /* @__PURE__ */ e($t, { ev: u }, p))
          ] }, l);
        }),
        Object.keys(r).filter((l) => !c.includes(l)).map((l) => /* @__PURE__ */ e("div", { className: "qi-detail__evidence-group", children: [
          /* @__PURE__ */ e("div", { className: "qi-detail__section-label", children: l }),
          r[l].map((d, u) => /* @__PURE__ */ e($t, { ev: d }, u))
        ] }, l))
      ] }),
      t.recommendedIcd10 && t.recommendedIcd10.length > 0 && /* @__PURE__ */ e("div", { className: "qi-detail__icd10-section", children: [
        /* @__PURE__ */ e("div", { className: "qi-detail__section-label", children: "Suggested ICD-10 Codes" }),
        /* @__PURE__ */ e("div", { className: "qi-detail__icd10-codes", children: t.recommendedIcd10.map((l, d) => /* @__PURE__ */ e("span", { className: "qi-detail__icd10-code", title: l.description || "", children: [
          l.code || l,
          l.description && /* @__PURE__ */ e("span", { className: "qi-detail__icd10-desc", children: l.description })
        ] }, d)) })
      ] })
    ] })
  ] });
}, ed = ({
  selectedCount: t,
  selectableCount: n,
  batchState: s,
  progress: i,
  onSelectAll: a,
  onDeselectAll: r,
  onGenerate: o
}) => {
  const c = s === "idle", l = s === "generating", u = l || s === "sending";
  return n === 0 && c ? /* @__PURE__ */ e("div", { className: "query-items__batch-bar query-items__batch-bar--hidden" }) : /* @__PURE__ */ e("div", { className: "query-items__batch-bar", children: [
    /* @__PURE__ */ e("div", { className: "query-items__batch-left", children: [
      c && /* @__PURE__ */ e(J, { children: [
        /* @__PURE__ */ e("span", { className: "query-items__batch-count", children: [
          /* @__PURE__ */ e("span", { children: t }),
          " of ",
          n,
          " items selected"
        ] }),
        t > 0 ? /* @__PURE__ */ e("button", { className: "query-items__select-all-btn", onClick: r, children: "Deselect all" }) : /* @__PURE__ */ e("button", { className: "query-items__select-all-btn", onClick: a, children: "Select all queryable" })
      ] }),
      u && /* @__PURE__ */ e("div", { className: "query-items__progress", children: [
        /* @__PURE__ */ e("div", { className: "query-items__progress-bar", children: /* @__PURE__ */ e(
          "div",
          {
            className: "query-items__progress-fill",
            style: { width: `${i.total > 0 ? i.current / i.total * 100 : 0}%` }
          }
        ) }),
        /* @__PURE__ */ e("span", { className: "query-items__progress-text", children: [
          l ? "Generating" : "Sending",
          " ",
          i.current,
          "/",
          i.total,
          "..."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "query-items__batch-right", children: c && /* @__PURE__ */ e(
      "button",
      {
        className: "query-items__generate-btn",
        disabled: t === 0,
        onClick: o,
        children: [
          /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ e("path", { d: "M22 2L11 13" }),
            /* @__PURE__ */ e("path", { d: "M22 2L15 22L11 13L2 9L22 2Z" })
          ] }),
          "Generate Queries"
        ]
      }
    ) })
  ] });
}, hi = ({
  generatedQueries: t,
  practitioners: n,
  selectedPractitionerId: s,
  onSelectPractitioner: i,
  onUpdateNote: a,
  onUpdateIcd10: r,
  onSend: o,
  onBack: c,
  isSending: l,
  progress: d
}) => {
  const u = ee(null), p = ee(!1);
  F(() => {
    if (!u.current || n.length === 0 || p.current) return;
    u.current.innerHTML = "";
    const h = n.map((_) => ({
      id: _.id,
      label: nd(_),
      subtitle: _.title || _.specialty || ""
    }));
    if (typeof window.SuperDropdown?.create == "function")
      window.SuperDropdown.create(u.current, {
        items: h,
        placeholder: "Select a practitioner...",
        searchPlaceholder: "Search practitioners...",
        onSelect: (_) => {
          i(_.id);
        }
      }), p.current = !0;
    else {
      const _ = document.createElement("select");
      _.className = "qr__physician-select-fallback", _.style.cssText = "width:100%;padding:10px 12px;border:1px solid #d0d5dd;border-radius:8px;font-size:14px;color:#344054;background:#fff;cursor:pointer;";
      const g = document.createElement("option");
      g.value = "", g.textContent = "Select a practitioner...", g.disabled = !0, g.selected = !0, _.appendChild(g), h.forEach((f) => {
        const y = document.createElement("option");
        y.value = f.id, y.textContent = f.label + (f.subtitle ? ` — ${f.subtitle}` : ""), _.appendChild(y);
      }), _.addEventListener("change", (f) => {
        i(f.target.value);
      }), u.current.appendChild(_), p.current = !0;
    }
    return () => {
      p.current = !1;
    };
  }, [n, i]);
  const m = s && t.length > 0 && !l;
  return /* @__PURE__ */ e("div", { className: "qr", children: [
    /* @__PURE__ */ e("div", { className: "qr__header", children: [
      /* @__PURE__ */ e("button", { className: "qr__back-btn", onClick: c, disabled: l, children: [
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
            onClick: o,
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
      td,
      {
        gq: h,
        index: _,
        total: t.length,
        onUpdateNote: a,
        onUpdateIcd10: r,
        disabled: l
      },
      h.item.mdsItem
    )) })
  ] });
}, td = ({ gq: t, index: n, total: s, onUpdateNote: i, onUpdateIcd10: a, disabled: r }) => {
  const o = t.item.pdpmCategoryName || t.item.mdsItemName || t.item.mdsItem, c = Y(() => {
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
            value: l,
            onChange: (d) => a(t.item.mdsItem, d.target.value),
            disabled: r,
            children: c.map((d) => /* @__PURE__ */ e("option", { value: d.code, children: [
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
            onInput: (d) => i(t.item.mdsItem, d.target.value),
            disabled: r,
            rows: 5
          }
        )
      ] })
    ] }),
    t.error && /* @__PURE__ */ e("div", { className: "qr__card-error", children: t.error })
  ] });
};
function nd(t) {
  return t.firstName && t.lastName ? `${t.firstName} ${t.lastName}${t.title ? `, ${t.title}` : ""}` : t.name || "Unknown";
}
const _i = ({
  patientId: t,
  patientName: n,
  facilityName: s,
  orgSlug: i,
  assessmentId: a,
  onBack: r,
  onClose: o
}) => {
  const [c, l] = v(/* @__PURE__ */ new Set()), [d, u] = v(null), [p, m] = v(null), {
    items: h,
    setItems: _,
    assessment: g,
    summary: f,
    pdpmData: y,
    loading: w,
    error: k,
    retry: C
  } = Fc({ patientId: t, facilityName: s, orgSlug: i, assessmentId: a }), {
    selectedCount: I,
    selectedItems: P,
    selectableCount: A,
    toggle: x,
    selectAllQueryable: D,
    deselectAll: N,
    isSelected: S
  } = Uc(h, c), E = ui({
    patientId: t,
    facilityName: s,
    orgSlug: i,
    assessmentId: a,
    onComplete: (L, O) => {
      const Z = new Set(L.map((j) => j.mdsItem));
      _((j) => j.map(($) => Z.has($.mdsItem) ? {
        ...$,
        existingQuery: { status: "sent", sentAt: (/* @__PURE__ */ new Date()).toISOString() }
      } : $)), N(), m({ count: L.length, practitionerName: O }), setTimeout(() => m(null), 3e3);
    }
  });
  F(() => {
    if (!w && h.length > 0 && !d) {
      const L = h.find((O) => O.solverStatus === "needs_physician_query");
      u(L ? L.mdsItem : h[0].mdsItem);
    }
  }, [w, h]);
  const B = Y(() => d && h.find((L) => L.mdsItem === d) || null, [d, h]), M = U(() => {
    E.generate(P);
  }, [E, P]);
  if (w)
    return /* @__PURE__ */ e("div", { className: "query-items", children: /* @__PURE__ */ e("div", { className: "query-items__skeleton", children: [
      /* @__PURE__ */ e("div", { className: "query-items__skeleton-header" }),
      /* @__PURE__ */ e("div", { className: "query-items__skeleton-card" }),
      /* @__PURE__ */ e("div", { className: "query-items__skeleton-card" }),
      /* @__PURE__ */ e("div", { className: "query-items__skeleton-card" })
    ] }) });
  if (k)
    return /* @__PURE__ */ e("div", { className: "query-items", children: /* @__PURE__ */ e("div", { className: "query-items__error", children: [
      /* @__PURE__ */ e("div", { className: "query-items__error-icon", children: /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ e("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        /* @__PURE__ */ e("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
      ] }) }),
      /* @__PURE__ */ e("p", { className: "query-items__error-text", children: k }),
      /* @__PURE__ */ e("button", { className: "query-items__error-retry", onClick: C, children: "Retry" })
    ] }) });
  if (h.length === 0)
    return /* @__PURE__ */ e("div", { className: "query-items", children: /* @__PURE__ */ e("div", { className: "query-items__empty", children: [
      /* @__PURE__ */ e("div", { className: "query-items__empty-icon", children: /* @__PURE__ */ e("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ e("path", { d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" }),
        /* @__PURE__ */ e("rect", { x: "9", y: "3", width: "6", height: "4", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M9 14l2 2 4-4" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "query-items__empty-title", children: "No Queryable Items" }),
      /* @__PURE__ */ e("p", { className: "query-items__empty-text", children: "All MDS items are either properly coded or don't require physician queries at this time." })
    ] }) });
  const q = E.state === "reviewing" || E.state === "sending";
  return /* @__PURE__ */ e("div", { className: "query-items", style: { position: "relative" }, children: [
    q ? (
      /* ── Review & Send page ── */
      /* @__PURE__ */ e(
        hi,
        {
          generatedQueries: E.generatedQueries,
          practitioners: E.practitioners,
          selectedPractitionerId: E.selectedPractitionerId,
          onSelectPractitioner: E.setSelectedPractitionerId,
          onUpdateNote: E.updateNote,
          onUpdateIcd10: E.updateIcd10,
          onSend: E.sendAll,
          onBack: E.backToSelection,
          isSending: E.state === "sending",
          progress: E.progress
        }
      )
    ) : (
      /* ── Selection page (split layout) ── */
      /* @__PURE__ */ e(J, { children: [
        /* @__PURE__ */ e(
          Gc,
          {
            assessment: g,
            summary: f,
            pdpmData: y
          }
        ),
        /* @__PURE__ */ e("div", { className: "query-items__split", children: [
          /* @__PURE__ */ e(
            Qc,
            {
              items: h,
              activeItem: d,
              onSelect: u,
              isChecked: S,
              onToggleCheck: x,
              dismissedItems: c
            }
          ),
          /* @__PURE__ */ e(Xc, { item: B })
        ] }),
        E.error && /* @__PURE__ */ e("div", { className: "query-items__batch-error", children: [
          /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ e("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
            /* @__PURE__ */ e("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
          ] }),
          /* @__PURE__ */ e("span", { children: E.error }),
          /* @__PURE__ */ e("button", { onClick: E.reset, className: "query-items__batch-error-dismiss", children: "×" })
        ] }),
        /* @__PURE__ */ e(
          ed,
          {
            selectedCount: I,
            selectableCount: A,
            batchState: E.state,
            progress: E.progress,
            onSelectAll: D,
            onDeselectAll: N,
            onGenerate: M
          }
        ),
        E.state === "generating" && /* @__PURE__ */ e("div", { className: "query-items__generating-overlay", children: [
          /* @__PURE__ */ e("div", { className: "query-items__generating-spinner" }),
          /* @__PURE__ */ e("div", { className: "query-items__generating-title", children: "Generating Queries..." }),
          /* @__PURE__ */ e("div", { className: "query-items__generating-progress-text", children: [
            E.progress.current + 1,
            " of ",
            E.progress.total
          ] }),
          /* @__PURE__ */ e("div", { className: "query-items__generating-bar", children: /* @__PURE__ */ e(
            "div",
            {
              className: "query-items__generating-bar-fill",
              style: { width: `${(E.progress.current + 1) / E.progress.total * 100}%` }
            }
          ) }),
          E.progress.currentItemName && /* @__PURE__ */ e("div", { className: "query-items__generating-item-name", children: E.progress.currentItemName })
        ] })
      ] })
    ),
    p && /* @__PURE__ */ e("div", { className: "query-items__success-overlay", children: [
      /* @__PURE__ */ e("div", { className: "query-items__success-icon", children: /* @__PURE__ */ e("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ e("polyline", { points: "20 6 9 17 4 12" }) }) }),
      /* @__PURE__ */ e("div", { className: "query-items__success-text", children: [
        p.count,
        " ",
        p.count === 1 ? "Query" : "Queries",
        " Sent"
      ] }),
      /* @__PURE__ */ e("div", { className: "query-items__success-subtitle", children: [
        "to ",
        p.practitionerName
      ] })
    ] })
  ] });
};
let sd = 0;
function id() {
  return `demo-tc-${++sd}-${Date.now().toString(36)}`;
}
function Rt(t) {
  return new Promise((n) => setTimeout(n, t));
}
function it(t, n) {
  const s = t.toLowerCase();
  return n.some((i) => s.includes(i));
}
function ad(t) {
  return it(t, ["malnutrition", "nutrition", "weight loss", "albumin", "aphasia"]) ? rd() : it(t, ["pdpm", "hipps", "opportunities", "reimbursement", "revenue"]) ? od() : it(t, ["iv fluid", "iv ", "intravenous", "fluids", "hospital doc"]) ? cd() : it(t, ["medication", "med ", "meds", "drug", "prescription", "taking"]) ? dd() : ld();
}
function rd() {
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
function od() {
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
function cd() {
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
function dd() {
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
function ld() {
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
function pd(t) {
  const [n, s] = v([]), [i, a] = v("ready"), [r, o] = v(null), [c, l] = v(
    () => typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `demo-${Date.now()}`
  ), d = ee(!1), u = ee(!1);
  F(() => {
    m();
  }, [t]);
  const p = U(
    async (g) => {
      if (i !== "ready" || u.current || !g.trim()) return;
      d.current = !1, u.current = !0, o(null);
      const f = { role: "user", content: g }, y = { role: "assistant", content: "", parts: [] };
      if (s((k) => [...k, f, y]), a("submitted"), await Rt(600), d.current) {
        u.current = !1;
        return;
      }
      a("streaming");
      const w = ad(g);
      for (const k of w) {
        if (d.current) break;
        if (k.type === "tool") {
          const C = id(), I = {
            type: `tool-${k.toolName}`,
            toolCallId: C,
            status: "running",
            input: k.input,
            output: void 0
          };
          if (y.parts.push(I), s((P) => {
            const A = [...P];
            return A[A.length - 1] = { ...y, parts: [...y.parts] }, A;
          }), await Rt(k.delayMs || 800), d.current) break;
          I.status = "done", I.output = k.output, s((P) => {
            const A = [...P];
            return A[A.length - 1] = { ...y, parts: [...y.parts] }, A;
          });
        } else if (k.type === "text") {
          if (await Rt(k.delayMs || 600), d.current) break;
          const C = { type: "text", content: k.content };
          y.parts.push(C), y.content = k.content, s((I) => {
            const P = [...I];
            return P[P.length - 1] = { ...y, parts: [...y.parts] }, P;
          });
        }
      }
      a("ready"), u.current = !1;
    },
    [i]
  ), m = U(() => {
    d.current = !0, u.current = !1, s([]), a("ready"), o(null), l(
      typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `demo-${Date.now()}`
    );
  }, []), h = U(() => {
    d.current = !0, u.current = !1, a("ready");
  }, []), _ = U((g, f) => {
    d.current = !0, u.current = !1, l(g), s(f || []), a("ready"), o(null);
  }, []);
  return { messages: n, status: i, error: r, sessionId: c, send: p, clear: m, stop: h, setMessages: s, loadSession: _ };
}
const ud = {
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
function md({ docId: t, page: n = 1, highlightText: s = !1, onClose: i }) {
  const a = ud[t], [r, o] = v(n);
  F(() => {
    o(n);
  }, [n]);
  const c = U(
    (h) => {
      h.key === "Escape" && i?.();
    },
    [i]
  );
  if (F(() => (document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c)), [c]), !a)
    return /* @__PURE__ */ e("div", { className: "fake-doc-viewer__backdrop", onClick: i, children: /* @__PURE__ */ e("div", { className: "fake-doc-viewer__panel", onClick: (h) => h.stopPropagation(), children: [
      /* @__PURE__ */ e("div", { className: "fake-doc-viewer__header", children: [
        /* @__PURE__ */ e("button", { className: "fake-doc-viewer__back-btn", onClick: i, children: "← Back" }),
        /* @__PURE__ */ e("div", { className: "fake-doc-viewer__header-title", children: /* @__PURE__ */ e("span", { className: "fake-doc-viewer__title", children: "Document Not Found" }) }),
        /* @__PURE__ */ e("button", { className: "fake-doc-viewer__close-btn", onClick: i, children: "✕" })
      ] }),
      /* @__PURE__ */ e("div", { className: "fake-doc-viewer__canvas", children: /* @__PURE__ */ e("div", { className: "fake-doc-viewer__page", children: /* @__PURE__ */ e("p", { children: [
        "The requested document (ID: ",
        t,
        ") could not be found."
      ] }) }) })
    ] }) });
  const l = a.pages.length, d = Math.max(1, Math.min(r, l)), u = a.pages.find((h) => h.pageNum === d) || a.pages[0], p = () => o((h) => Math.max(1, h - 1)), m = () => o((h) => Math.min(l, h + 1));
  return /* @__PURE__ */ e("div", { className: "fake-doc-viewer__backdrop", onClick: i, children: /* @__PURE__ */ e("div", { className: "fake-doc-viewer__panel", onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ e("div", { className: "fake-doc-viewer__header", children: [
      /* @__PURE__ */ e("button", { className: "fake-doc-viewer__back-btn", onClick: i, children: "← Back" }),
      /* @__PURE__ */ e("div", { className: "fake-doc-viewer__header-title", children: [
        /* @__PURE__ */ e("span", { className: "fake-doc-viewer__title", children: a.title }),
        /* @__PURE__ */ e("span", { className: "fake-doc-viewer__date", children: a.date })
      ] }),
      /* @__PURE__ */ e("span", { className: "fake-doc-viewer__type-badge", children: a.type }),
      /* @__PURE__ */ e("button", { className: "fake-doc-viewer__close-btn", onClick: i, children: "✕" })
    ] }),
    /* @__PURE__ */ e("div", { className: "fake-doc-viewer__toolbar", children: [
      /* @__PURE__ */ e("div", { className: "fake-doc-viewer__page-nav", children: [
        /* @__PURE__ */ e(
          "button",
          {
            className: "fake-doc-viewer__nav-btn",
            onClick: p,
            disabled: d <= 1,
            children: "‹ Prev"
          }
        ),
        /* @__PURE__ */ e("span", { className: "fake-doc-viewer__page-indicator", children: [
          "Page ",
          d,
          " of ",
          l
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            className: "fake-doc-viewer__nav-btn",
            onClick: m,
            disabled: d >= l,
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
        dangerouslySetInnerHTML: { __html: u.content }
      }
    ) })
  ] }) });
}
function hd(t) {
  if (!t) return "";
  let n = t;
  const s = [];
  n = n.replace(/```(\w*)\n([\s\S]*?)```/g, (c, l, d) => {
    const u = s.length;
    return s.push(`<pre><code>${Me(d.trimEnd())}</code></pre>`), `\0CODEBLOCK${u}\0`;
  });
  const i = [];
  n = n.replace(/`([^`]+)`/g, (c, l) => {
    const d = i.length;
    return i.push(`<code>${Me(l)}</code>`), `\0INLINE${d}\0`;
  });
  const a = n.split(`
`), r = [];
  let o = 0;
  for (; o < a.length; ) {
    const c = a[o];
    if (o + 1 < a.length && _d(a[o + 1]) && c.includes("|")) {
      const d = [c, a[o + 1]];
      for (o += 2; o < a.length && a[o].trim().startsWith("|"); )
        d.push(a[o]), o++;
      r.push(gd(d));
      continue;
    }
    const l = c.match(/^(#{1,4})\s+(.+)$/);
    if (l) {
      const d = l[1].length;
      r.push(`<h${d}>${Te(l[2])}</h${d}>`), o++;
      continue;
    }
    if (/^[\s]*[-*]\s+/.test(c)) {
      const d = [];
      for (; o < a.length && /^[\s]*[-*]\s+/.test(a[o]); )
        d.push(a[o].replace(/^[\s]*[-*]\s+/, "")), o++;
      r.push("<ul>" + d.map((u) => `<li>${Te(u)}</li>`).join("") + "</ul>");
      continue;
    }
    if (/^[\s]*\d+[.)]\s+/.test(c)) {
      const d = [];
      for (; o < a.length && /^[\s]*\d+[.)]\s+/.test(a[o]); )
        d.push(a[o].replace(/^[\s]*\d+[.)]\s+/, "")), o++;
      r.push("<ol>" + d.map((u) => `<li>${Te(u)}</li>`).join("") + "</ol>");
      continue;
    }
    if (c.trim() === "") {
      r.push("<br>"), o++;
      continue;
    }
    r.push(Te(c)), o++;
  }
  return n = r.join(`
`), n = n.replace(/\x00CODEBLOCK(\d+)\x00/g, (c, l) => s[l]), n = n.replace(/\x00INLINE(\d+)\x00/g, (c, l) => i[l]), n = n.replace(/(<br>\s*){3,}/g, "<br><br>"), n;
}
function Te(t) {
  return t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}
function _d(t) {
  return t ? /^\|?[\s-:|]+\|[\s-:|]*$/.test(t.trim()) : !1;
}
function gd(t) {
  const n = hs(t[0]), s = t.slice(2);
  let i = '<div class="super-chat-table-wrap"><table class="super-chat-table">';
  i += "<thead><tr>";
  for (const a of n)
    i += `<th>${Te(a)}</th>`;
  if (i += "</tr></thead>", s.length > 0) {
    i += "<tbody>";
    for (const a of s) {
      const r = hs(a);
      i += "<tr>";
      for (let o = 0; o < n.length; o++)
        i += `<td>${Te(r[o] || "")}</td>`;
      i += "</tr>";
    }
    i += "</tbody>";
  }
  return i += "</table></div>", i;
}
function hs(t) {
  let n = t.trim();
  return n.startsWith("|") && (n = n.slice(1)), n.endsWith("|") && (n = n.slice(0, -1)), n.split("|").map((s) => s.trim());
}
function Me(t) {
  if (!t) return "";
  const n = document.createElement("div");
  return n.textContent = t, n.innerHTML;
}
function fd({ content: t }) {
  return /* @__PURE__ */ e("div", { class: "super-chat-message super-chat-message--user", children: /* @__PURE__ */ e(
    "div",
    {
      class: "super-chat-message__content",
      dangerouslySetInnerHTML: { __html: Me(t) }
    }
  ) });
}
const yd = {
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
}, vd = {
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
function wd(t) {
  return yd[t] || Id(t);
}
function bd(t) {
  return vd[t] || "🔍";
}
function Id(t) {
  return t.replace(/([A-Z])/g, " $1").replace(/^./, (n) => n.toUpperCase()).trim();
}
function Dd(t, n) {
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
function kd(t, n) {
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
function Cd({ part: t }) {
  const [n, s] = v(!1), i = t.type.replace("tool-", ""), a = i === "think", r = t.output !== void 0 && t.output !== null, o = t.status === "running" && !r, c = wd(i), l = bd(i), d = Dd(i, t.input), u = r ? kd(i, t.output) : "";
  return /* @__PURE__ */ e("div", { class: `super-chat-tool ${a ? "super-chat-tool--thinking" : ""} ${o ? "super-chat-tool--running" : ""} ${n ? "super-chat-tool--expanded" : ""}`, children: [
    /* @__PURE__ */ e(
      "div",
      {
        class: "super-chat-tool__header",
        onClick: () => s(!n),
        children: [
          /* @__PURE__ */ e("span", { class: "super-chat-tool__icon", children: l }),
          /* @__PURE__ */ e("span", { class: "super-chat-tool__name", children: c }),
          d && /* @__PURE__ */ e("span", { class: "super-chat-tool__summary", children: d }),
          u && !o && /* @__PURE__ */ e("span", { class: "super-chat-tool__result-summary", children: u }),
          /* @__PURE__ */ e("span", { class: `super-chat-tool__status ${r ? "super-chat-tool__status--done" : "super-chat-tool__status--loading"}`, children: r ? "✓" : o ? /* @__PURE__ */ e("span", { class: "super-chat-tool__spinner" }) : "⏷" }),
          /* @__PURE__ */ e("span", { class: "super-chat-tool__toggle", children: n ? "▴" : "▾" })
        ]
      }
    ),
    n && /* @__PURE__ */ e("div", { class: "super-chat-tool__body", children: [
      t.input && /* @__PURE__ */ e("div", { class: "super-chat-tool__section", children: [
        /* @__PURE__ */ e("div", { class: "super-chat-tool__section-label", children: a && t.input.thought ? "Thought Process" : "Parameters" }),
        /* @__PURE__ */ e("pre", { children: a && t.input.thought ? Me(t.input.thought) : Me(JSON.stringify(t.input, null, 2)) })
      ] }),
      r && !a && /* @__PURE__ */ e("div", { class: "super-chat-tool__section", children: [
        /* @__PURE__ */ e("div", { class: "super-chat-tool__section-label", children: "Results" }),
        /* @__PURE__ */ e("pre", { children: Me(
          typeof t.output == "string" ? t.output : JSON.stringify(t.output, null, 2)
        ) })
      ] })
    ] })
  ] });
}
function Nd({ content: t }) {
  return t?.trim() ? /* @__PURE__ */ e(
    "div",
    {
      class: "super-chat-message__content",
      dangerouslySetInnerHTML: { __html: hd(t) }
    }
  ) : null;
}
function Sd({ message: t }) {
  const n = t.parts || [], s = n.filter((c) => c.type?.startsWith("tool-")), i = n.filter((c) => c.type === "text"), a = s.some((c) => c.status === "running"), r = i.length > 0 ? i.map((c) => c.content).join("") : t.content || "", o = s.length > 0 || r.trim();
  return /* @__PURE__ */ e("div", { class: "super-chat-message super-chat-message--assistant", children: [
    s.length > 0 && /* @__PURE__ */ e("div", { class: "super-chat-tools-container", children: [
      s.map((c) => /* @__PURE__ */ e(Cd, { part: c }, c.toolCallId)),
      a && /* @__PURE__ */ e("div", { class: "super-chat-tools-progress", children: [
        /* @__PURE__ */ e("span", { class: "super-chat-tools-progress__spinner" }),
        /* @__PURE__ */ e("span", { children: "Working..." })
      ] })
    ] }),
    r.trim() && /* @__PURE__ */ e(Nd, { content: r }),
    !o && /* @__PURE__ */ e("div", { class: "super-chat-message__content super-chat-message__loading", children: /* @__PURE__ */ e("span", { class: "super-chat-inline-loader", children: [
      /* @__PURE__ */ e("span", {}),
      /* @__PURE__ */ e("span", {}),
      /* @__PURE__ */ e("span", {})
    ] }) })
  ] });
}
function xd({ onSend: t, status: n }) {
  const [s, i] = v(""), a = ee(null), r = n === "ready";
  F(() => {
    r && a.current && a.current.focus();
  }, [r]);
  const o = () => {
    !s.trim() || !r || (t(s.trim()), i(""), a.current && (a.current.style.height = "auto"));
  }, c = (u) => {
    u.key === "Enter" && !u.shiftKey && (u.preventDefault(), o());
  }, l = (u) => {
    i(u.target.value);
    const p = u.target;
    p.style.height = "auto", p.style.height = Math.min(p.scrollHeight, 120) + "px";
  };
  let d;
  if (!r)
    d = n === "submitted" ? "Searching records..." : "Generating response...";
  else {
    const u = typeof window.getChatContext == "function" ? window.getChatContext() : {};
    u.externalPatientId || u.externalAssessmentId ? d = "Ask about this patient..." : u.facilityName ? d = "Search across this facility..." : d = "Search across your facilities...";
  }
  return /* @__PURE__ */ e("div", { class: "super-chat-input-container", children: [
    /* @__PURE__ */ e(
      "textarea",
      {
        ref: a,
        class: "super-chat-input",
        value: s,
        onInput: l,
        onKeyDown: c,
        placeholder: d,
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
const Pd = [
  "Does this patient have malnutrition?",
  "What are the PDPM opportunities?",
  "Look for IV fluids in hospital docs",
  "What medications is this patient on?"
];
function Td({ patientId: t, onClose: n }) {
  const { messages: s, status: i, send: a, clear: r } = pd(t), [o, c] = v(null), l = ee(null);
  F(() => {
    l.current && (l.current.scrollTop = l.current.scrollHeight);
  }, [s]);
  const d = U((p) => {
    const m = p.target.closest('a[href^="#doc:"]');
    if (m) {
      p.preventDefault();
      const _ = m.getAttribute("href").replace("#doc:", "").split(":");
      c({ docId: _[0], page: parseInt(_[1], 10) || 1 });
      return;
    }
    p.target.closest('a[href^="#viewer:"]') && p.preventDefault();
  }, []), u = U((p) => {
    a(p);
  }, [a]);
  return /* @__PURE__ */ e(J, { children: [
    /* @__PURE__ */ e("div", { class: "super-chat-overlay", onClick: (p) => {
      p.target.classList.contains("super-chat-overlay") && n();
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
      /* @__PURE__ */ e("div", { class: "super-chat-messages", ref: l, onClick: d, children: s.length === 0 ? (
        // Custom demo empty state with our specific suggestions
        /* @__PURE__ */ e("div", { class: "super-chat-empty", children: [
          /* @__PURE__ */ e("div", { class: "super-chat-empty__icon", children: "✨" }),
          /* @__PURE__ */ e("div", { class: "super-chat-empty__title", children: "Hi, I'm your AI assistant" }),
          /* @__PURE__ */ e("div", { class: "super-chat-empty__text", children: "I can search clinical notes, hospital records, labs, medications, and help analyze MDS coding opportunities." }),
          /* @__PURE__ */ e("div", { class: "super-chat-empty__suggestions", children: Pd.map((p) => /* @__PURE__ */ e(
            "button",
            {
              class: "super-chat-empty__suggestion",
              onClick: () => u(p),
              children: p
            },
            p
          )) })
        ] })
      ) : /* @__PURE__ */ e(J, { children: [
        s.map((p, m) => p.role === "user" ? /* @__PURE__ */ e(fd, { content: p.content }, m) : /* @__PURE__ */ e(Sd, { message: p }, m)),
        i === "submitted" && /* @__PURE__ */ e("div", { class: "super-chat-message super-chat-message--assistant", children: /* @__PURE__ */ e("div", { class: "super-chat-typing", children: [
          /* @__PURE__ */ e("div", { class: "super-chat-typing__dots", children: [
            /* @__PURE__ */ e("div", { class: "super-chat-typing__dot" }),
            /* @__PURE__ */ e("div", { class: "super-chat-typing__dot" }),
            /* @__PURE__ */ e("div", { class: "super-chat-typing__dot" })
          ] }),
          /* @__PURE__ */ e("span", { children: "Analyzing patient data..." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ e(xd, { onSend: a, status: i })
    ] }) }),
    o && /* @__PURE__ */ e(
      md,
      {
        docId: o.docId,
        page: o.page,
        highlightText: !0,
        onClose: () => c(null)
      }
    )
  ] });
}
const at = "SUNNY MEADOWS DEMO FACILITY", _s = "demo-org", we = {
  commandCenter: {
    facilityName: at,
    orgSlug: _s
  },
  pdpmMds: {
    context: { scope: "mds", assessmentId: "4860265", facilityName: at }
  },
  pdpmPatient: {
    context: { scope: "patient", patientId: "2657226", patientName: "Doe, Jane", facilityName: at }
  },
  queryItems: {
    patientId: "2657226",
    patientName: "Doe, Jane",
    facilityName: at,
    orgSlug: _s,
    assessmentId: "4860265"
  },
  chat: {
    patientId: "2657226"
  }
}, Ad = [
  { id: "commandCenter", label: "Command Center", icon: "📋", color: "#6366f1" },
  { id: "pdpmMds", label: "PDPM (MDS)", icon: "📊", color: "#22c55e" },
  { id: "pdpmPatient", label: "PDPM (Patient)", icon: "🧑", color: "#f97316" },
  { id: "queryItems", label: "Query Items", icon: "📝", color: "#3b82f6" },
  { id: "chat", label: "AI Chat", icon: "💬", color: "#8b5cf6" }
];
function Md() {
  const [t, n] = v(null), [s, i] = v(!1);
  F(() => {
    function o(c) {
      const l = c.detail;
      l?.scope === "mds" && l?.assessmentId && n("pdpmMds");
    }
    return window.addEventListener("demo:open-pdpm", o), () => window.removeEventListener("demo:open-pdpm", o);
  }, []), F(() => {
    function o() {
      n("chat");
    }
    return window.addEventListener("demo:open-chat", o), () => window.removeEventListener("demo:open-chat", o);
  }, []);
  function a() {
    n(null);
  }
  function r(o) {
    o?.hide || n(null);
  }
  return /* @__PURE__ */ e(J, { children: [
    t === "commandCenter" && /* @__PURE__ */ e(
      Zo,
      {
        facilityName: we.commandCenter.facilityName,
        orgSlug: we.commandCenter.orgSlug,
        onClose: r
      }
    ),
    t === "pdpmMds" && /* @__PURE__ */ e("div", { class: "demo-pdpm-wrapper", style: qt, children: [
      /* @__PURE__ */ e("div", { class: "demo-pdpm-header", style: Ot, children: [
        /* @__PURE__ */ e("span", { style: { fontWeight: 600 }, children: "PDPM Analyzer (MDS Scope)" }),
        /* @__PURE__ */ e("button", { onClick: a, style: Ht, children: "×" })
      ] }),
      /* @__PURE__ */ e("div", { style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ e(
        ms,
        {
          context: we.pdpmMds.context,
          onClose: a
        }
      ) })
    ] }),
    t === "pdpmPatient" && /* @__PURE__ */ e("div", { class: "demo-pdpm-wrapper", style: qt, children: [
      /* @__PURE__ */ e("div", { class: "demo-pdpm-header", style: Ot, children: [
        /* @__PURE__ */ e("span", { style: { fontWeight: 600 }, children: "PDPM Analyzer (Patient Scope)" }),
        /* @__PURE__ */ e("button", { onClick: a, style: Ht, children: "×" })
      ] }),
      /* @__PURE__ */ e("div", { style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ e(
        ms,
        {
          context: we.pdpmPatient.context,
          onClose: a
        }
      ) })
    ] }),
    t === "queryItems" && /* @__PURE__ */ e("div", { class: "demo-query-wrapper", style: qt, children: [
      /* @__PURE__ */ e("div", { class: "demo-query-header", style: Ot, children: [
        /* @__PURE__ */ e("span", { style: { fontWeight: 600 }, children: "Query Items Page" }),
        /* @__PURE__ */ e("button", { onClick: a, style: Ht, children: "×" })
      ] }),
      /* @__PURE__ */ e("div", { style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ e(
        _i,
        {
          patientId: we.queryItems.patientId,
          patientName: we.queryItems.patientName,
          facilityName: we.queryItems.facilityName,
          orgSlug: we.queryItems.orgSlug,
          assessmentId: we.queryItems.assessmentId,
          onClose: a,
          onBack: a
        }
      ) })
    ] }),
    t === "chat" && /* @__PURE__ */ e(
      Td,
      {
        patientId: we.chat.patientId,
        onClose: a
      }
    ),
    /* @__PURE__ */ e("div", { style: Ld, children: [
      s && /* @__PURE__ */ e("div", { style: $d, children: Ad.map((o) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            n(o.id), i(!1);
          },
          style: {
            ...Rd,
            background: o.color
          },
          title: o.label,
          children: [
            /* @__PURE__ */ e("span", { style: { fontSize: "16px", marginRight: "8px" }, children: o.icon }),
            /* @__PURE__ */ e("span", { style: { fontSize: "12px", fontWeight: 500 }, children: o.label })
          ]
        },
        o.id
      )) }),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => i(!s),
          style: {
            ...Ed,
            transform: s ? "rotate(45deg)" : "rotate(0deg)"
          },
          title: "Open Preact Demo Modules",
          children: "+"
        }
      )
    ] })
  ] });
}
const Ld = {
  position: "fixed",
  bottom: "24px",
  left: "24px",
  zIndex: 99999,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px"
}, Ed = {
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
  fontWeight: 300,
  transition: "transform 0.2s ease",
  lineHeight: 1
}, $d = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  marginBottom: "4px"
}, Rd = {
  display: "flex",
  alignItems: "center",
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  color: "white",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  whiteSpace: "nowrap",
  transition: "opacity 0.15s"
}, qt = {
  position: "fixed",
  inset: "20px",
  zIndex: 1e5,
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
}, Ot = {
  padding: "12px 16px",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f9fafb",
  flexShrink: 0
}, Ht = {
  background: "transparent",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
  color: "#6b7280",
  padding: "0 4px",
  lineHeight: 1
}, gs = {
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
function qd(t, n) {
  if (gs[t]) return gs[t];
  if (!n) return t;
  const s = n.split(/[,(]/)[0].trim();
  return s.length > 40 ? s.substring(0, 40) + "…" : s;
}
function Bt(t) {
  let n = !1, s = !1;
  for (const i of t || [])
    if (i.category === "nta" && (n = !0), i.category === "slp" && (s = !0), n && s) break;
  return { nta: n, slp: s };
}
function Od({ topRanked: t, approved: n, annotations: s }) {
  const i = (t || []).map((c) => ({
    kind: "group",
    key: `t:${c.groupId}`,
    origin: "topRanked",
    rank: c.rank,
    code: c.groupCode,
    description: c.groupName,
    badges: Bt(c.annotations || []),
    group: c
  })), a = (n || []).map((c) => ({
    kind: "group",
    key: `a:${c.groupId}`,
    origin: "approved",
    code: c.groupCode,
    description: c.groupName,
    badges: Bt(c.annotations || []),
    group: c
  })), r = { other: {}, speculative: {} };
  for (const c of s || []) {
    const l = (c.icd10Code || "").substring(0, 3);
    if (!l) continue;
    const d = c.category === "speculative" ? "speculative" : "other";
    r[d][l] || (r[d][l] = { baseCode: l, items: [], description: "" }), r[d][l].items.push(c), !r[d][l].description && c.description && (r[d][l].description = c.description);
  }
  const o = (c, l) => Object.values(c).map((d) => ({
    kind: "baseCode",
    key: `${l}:${d.baseCode}`,
    origin: l === "s" ? "speculative" : "other",
    code: d.baseCode,
    description: qd(d.baseCode, d.description),
    badges: Bt(d.items),
    count: d.items.length,
    baseCode: d.baseCode,
    items: d.items
  })).sort((d, u) => u.count - d.count || d.code.localeCompare(u.code));
  return {
    topPicks: i,
    approved: a,
    other: o(r.other, "o"),
    speculative: o(r.speculative, "s")
  };
}
function Ft(t) {
  return [
    ...t.topPicks,
    ...t.other,
    ...t.speculative,
    ...t.approved
  ];
}
function Hd(t) {
  return t.topPicks.length ? t.topPicks[0].key : t.other.length ? t.other[0].key : t.speculative.length ? t.speculative[0].key : t.approved.length ? t.approved[0].key : null;
}
function fs(t) {
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
function an({ name: t }) {
  return t === "check" ? G(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    G("polyline", { points: "20 6 9 17 4 12" })
  ) : t === "alert" ? G(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    G("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
    G("line", { x1: 12, y1: 9, x2: 12, y2: 13 }),
    G("line", { x1: 12, y1: 17, x2: 12.01, y2: 17 })
  ) : t === "star" ? G(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    G("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
  ) : t === "chevron" ? G(
    "svg",
    { width: 12, height: 12, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2 },
    G("polyline", { points: "6 9 12 15 18 9" })
  ) : null;
}
function rt({ row: t, selected: n, onClick: s }) {
  const i = ["icd10-sb__row"];
  return n && i.push("icd10-sb__row--selected"), t.rank != null && i.push("icd10-sb__row--ranked"), G(
    "div",
    {
      class: i.join(" "),
      onClick: () => s(t.key)
    },
    t.rank != null && G("span", { class: "icd10-sb__rank" }, `#${t.rank}`),
    G("span", { class: "icd10-sb__code" }, t.code),
    G("span", { class: "icd10-sb__desc", title: t.description }, t.description),
    (t.badges.nta || t.badges.slp) && G(
      "span",
      { class: "icd10-sb__badges" },
      t.badges.nta && G("span", { class: "icd10-sb__badge icd10-sb__badge--nta" }, "NTA"),
      t.badges.slp && G("span", { class: "icd10-sb__badge icd10-sb__badge--slp" }, "SLP")
    )
  );
}
function ys({ label: t, count: n, icon: s, open: i, onToggle: a, variant: r }) {
  const o = ["icd10-sb__section-hdr", "icd10-sb__section-hdr--collapsible"];
  return r && o.push(`icd10-sb__section-hdr--${r}`), G(
    "button",
    {
      type: "button",
      class: o.join(" "),
      onClick: a,
      "aria-expanded": i
    },
    s && G("span", { class: "icd10-sb__section-icon" }, G(an, { name: s })),
    G("span", { class: "icd10-sb__section-label" }, t),
    G("span", { class: "icd10-sb__section-count" }, n),
    G(
      "span",
      { class: `icd10-sb__section-chevron ${i ? "icd10-sb__section-chevron--open" : ""}` },
      G(an, { name: "chevron" })
    )
  );
}
function vs({ label: t, icon: n }) {
  return G(
    "div",
    { class: "icd10-sb__section-hdr icd10-sb__section-hdr--static" },
    n && G("span", { class: "icd10-sb__section-icon" }, G(an, { name: n })),
    G("span", { class: "icd10-sb__section-label" }, t)
  );
}
function Bd({ topRanked: t = [], approved: n = [], annotations: s = [], onSelect: i }) {
  const [a, r] = v(!1), [o, c] = v(!1), [l, d] = v(null), u = ee(null), p = Y(
    () => Od({ topRanked: t, approved: n, annotations: s }),
    [t, n, s]
  ), m = Y(() => {
    const y = /* @__PURE__ */ new Set();
    for (const w of Ft(p)) y.add(w.key);
    return y;
  }, [p]);
  F(() => {
    if (l && m.has(l) ? l : null) return;
    const w = Hd(p);
    if (!w || u.current === w) return;
    u.current = w, d(w);
    const k = Ft(p).find((C) => C.key === w);
    k && i && i(fs(k));
  }, [p, l, m, i]);
  const h = (y) => {
    d(y);
    const w = Ft(p).find((k) => k.key === y);
    w && i && i(fs(w));
  }, _ = p.approved.length > 0, g = p.other.length > 0, f = p.speculative.length > 0;
  return G(
    "div",
    { class: "icd10-sb" },
    _ && G(
      "section",
      { class: "icd10-sb__section" },
      G(ys, {
        label: "Approved",
        count: p.approved.length,
        icon: "check",
        open: a,
        onToggle: () => r((y) => !y)
      }),
      a && G(
        "div",
        { class: "icd10-sb__section-body" },
        p.approved.map(
          (y) => G(rt, { key: y.key, row: y, selected: l === y.key, onClick: h })
        )
      )
    ),
    G(
      "section",
      { class: "icd10-sb__section" },
      G(vs, { label: "Top picks", icon: "star" }),
      G(
        "div",
        { class: "icd10-sb__section-body" },
        p.topPicks.length > 0 ? p.topPicks.map(
          (y) => G(rt, { key: y.key, row: y, selected: l === y.key, onClick: h })
        ) : G("div", { class: "icd10-sb__empty" }, "No suggestions yet")
      )
    ),
    g && G(
      "section",
      { class: "icd10-sb__section" },
      G(vs, { label: "Other suggestions" }),
      G(
        "div",
        { class: "icd10-sb__section-body" },
        p.other.map(
          (y) => G(rt, { key: y.key, row: y, selected: l === y.key, onClick: h })
        )
      )
    ),
    f && G(
      "section",
      { class: "icd10-sb__section" },
      G(ys, {
        label: "Speculative",
        count: p.speculative.length,
        icon: "alert",
        open: o,
        onToggle: () => c((y) => !y),
        variant: "warning"
      }),
      o && G(
        "div",
        { class: "icd10-sb__section-body" },
        p.speculative.map(
          (y) => G(rt, { key: y.key, row: y, selected: l === y.key, onClick: h })
        )
      )
    )
  );
}
function Fd({ patientId: t, facilityName: n, orgSlug: s, assessmentId: i }) {
  const [a, r] = v(null), [o, c] = v(!0), [l, d] = v(null), [u, p] = v(null), m = U(async () => {
    c(!0), d(null);
    try {
      const k = new URLSearchParams({ facilityName: n, orgSlug: s });
      i && k.set("externalAssessmentId", i), t && k.set("patientExternalId", t);
      const C = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/ard-recommendation?${k}`
      });
      if (!C.success)
        throw new Error(C.error || "Failed to fetch ARD recommendation");
      const I = C.data || C;
      if (I.success === !1)
        throw new Error(I.error || "Failed to fetch ARD recommendation");
      r(I), I.recommendedDayNumber && p((P) => P ?? I.recommendedDayNumber);
    } catch (k) {
      console.error("[ArdEstimator] Fetch error:", k), d(k.message || "Failed to load ARD recommendation");
    } finally {
      c(!1);
    }
  }, [t, n, s, i]);
  F(() => {
    (t || i) && m();
  }, [m]), F(() => {
    const k = () => m();
    return window.addEventListener("super:query-sent", k), window.addEventListener("super:item-decision", k), () => {
      window.removeEventListener("super:query-sent", k), window.removeEventListener("super:item-decision", k);
    };
  }, [m]);
  const h = a?.scores?.find((k) => k.dayNumber === u) || null, _ = a?.classifiedItems || [], g = _.filter(
    (k) => k.classification === "time_sensitive_captured" || k.classification === "time_sensitive_at_risk" || k.classification === "time_sensitive_missed"
  ), f = _.filter(
    (k) => k.classification === "needs_review"
  ), y = _.filter(
    (k) => k.classification === "item_to_query"
  ), w = _.filter(
    (k) => k.classification === "always_captured" && Ud(k)
  );
  return {
    result: a,
    loading: o,
    error: l,
    selectedDay: u,
    setSelectedDay: p,
    selectedScore: h,
    timeSensitiveItems: g,
    needsReviewItems: f,
    queryItems: y,
    alwaysCapturedItems: w,
    refetch: m
  };
}
function Ud(t) {
  return t.ntaPoints !== null && t.ntaPoints > 0 || !!t.nursingInfo || t.pdpmComponents.length > 0;
}
function Gd(t) {
  if (!t) return "";
  const n = t.split("-");
  return n.length !== 3 ? t : `${parseInt(n[1])}/${parseInt(n[2])}`;
}
function Vd({
  scores: t,
  selectedDay: n,
  recommendedDay: s,
  onSelectDay: i,
  ganttItems: a
}) {
  return !t || t.length === 0 ? null : /* @__PURE__ */ e("div", { className: "ard-est__day-picker", children: [
    /* @__PURE__ */ e("h3", { className: "ard-est__section-label", children: "Pick ARD Date" }),
    /* @__PURE__ */ e("div", { className: "ard-est__timeline", children: [
      /* @__PURE__ */ e("div", { className: "ard-est__timeline-row", children: [
        /* @__PURE__ */ e("div", { className: "ard-est__timeline-label" }),
        /* @__PURE__ */ e("div", { className: "ard-est__timeline-grid", children: t.map((r) => {
          const o = r.dayNumber === n, c = r.dayNumber === s;
          let l = "ard-est__day-btn";
          return o ? l += " ard-est__day-btn--selected" : c && (l += " ard-est__day-btn--recommended"), /* @__PURE__ */ e(
            "button",
            {
              className: l,
              onClick: () => i(r.dayNumber),
              title: `Day ${r.dayNumber}: ${r.date}`,
              children: [
                /* @__PURE__ */ e("span", { className: "ard-est__day-num", children: [
                  "D",
                  r.dayNumber
                ] }),
                /* @__PURE__ */ e("span", { className: "ard-est__day-date", children: Gd(r.date) }),
                c && !o && /* @__PURE__ */ e("span", { className: "ard-est__day-best", children: "BEST" })
              ]
            },
            r.dayNumber
          );
        }) })
      ] }),
      a.map((r, o) => {
        const c = r.firstAdministered && r.lastAdministered, l = r.classification === "needs_review";
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
                return c ? /* @__PURE__ */ e(
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
          `${r.mdsItem}-${r.mdsColumn || ""}-${o}`
        );
      })
    ] })
  ] });
}
function Wd({
  result: t,
  selectedDay: n,
  timeSensitiveItems: s,
  needsReviewItems: i
}) {
  if (!t || !n) return null;
  const a = n === t.recommendedDayNumber, r = new Set(t.scores.map((p) => p.estimatedPpd)).size === 1, o = t.scores.find((p) => p.dayNumber === n), c = t.scores.find((p) => p.dayNumber === t.recommendedDayNumber), l = [...s, ...i];
  let d = "";
  if (r && l.length === 0)
    d = "Any date works — no time-sensitive items found. All PDPM value comes from diagnoses captured regardless of ARD date.";
  else if (r && i.length > 0 && s.length === 0) {
    const p = i.slice(0, 3).map((m) => m.description).join(", ");
    d = `All dates produce the same score. ${i.length} possible item${i.length > 1 ? "s" : ""} (${p}) — confirm dates to refine.`;
  } else if (a) {
    const p = n + 1, m = l.filter(
      (h) => h.capturedOnDays.includes(n) && !h.capturedOnDays.includes(p)
    );
    if (m.length > 0) {
      const h = m.map((g) => {
        const f = [];
        return g.nursingInfo && f.push(g.nursingInfo.mainCategory + " nursing"), g.ntaPoints && g.ntaPoints > 0 && f.push(`+${g.ntaPoints} NTA`), g.pdpmComponents.length > 0 && !g.nursingInfo && !g.ntaPoints && f.push(g.pdpmComponents.join("/")), `${g.description}${f.length ? ` (${f.join(", ")})` : ""}`;
      }).join("; ");
      d = `Recommended. ${n >= 8 ? "A later ARD" : `Day ${p}+`} would lose: ${h}.`;
    } else
      d = "Recommended. All time-sensitive items captured.";
  } else {
    const p = (o?.estimatedPpd ?? 0) - (c?.estimatedPpd ?? 0);
    if (p < -0.5) {
      const m = l.filter(
        (_) => _.capturedOnDays.includes(t.recommendedDayNumber) && !_.capturedOnDays.includes(n)
      ), h = m.map((_) => _.description).join(", ");
      d = `$${Math.abs(p).toFixed(0)}/day less than Day ${t.recommendedDayNumber}${m.length > 0 ? `. Loses: ${h}` : ""}.`;
    } else p > 0.5 ? d = `$${p.toFixed(0)}/day more than Day ${t.recommendedDayNumber}. Consider this date.` : d = `Same score as Day ${t.recommendedDayNumber}.`;
  }
  let u = "neutral";
  return a ? u = "positive" : r || (u = "warning"), /* @__PURE__ */ e("div", { className: `ard-est__rec-text ard-est__rec-text--${u}`, children: [
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
const ut = [
  { level: "NF", min: 0, max: 0 },
  { level: "NE", min: 1, max: 2 },
  { level: "ND", min: 3, max: 7 },
  { level: "NC", min: 8, max: 11 },
  { level: "NB", min: 12, max: 15 },
  { level: "NA", min: 16, max: 20 }
], Ut = 20;
function ws(t) {
  for (const n of ut)
    if (t >= n.min && t <= n.max) return n;
  return ut[ut.length - 1];
}
function Qd({ currentPoints: t, potentialPoints: n }) {
  if (t == null) return null;
  const s = n != null && n > t, i = Math.min(t / Ut * 100, 100), a = s ? Math.min(n / Ut * 100, 100) : 0, r = ws(t), o = s ? ws(n) : null;
  return /* @__PURE__ */ e("div", { className: "ard-est__nta-bar", children: [
    /* @__PURE__ */ e("div", { className: "ard-est__nta-track", children: [
      ut.map((c) => {
        const l = (c.max - c.min + 1) / (Ut + 1) * 100;
        return /* @__PURE__ */ e(
          "div",
          {
            className: `ard-est__nta-seg${c.level === r.level ? " ard-est__nta-seg--current" : ""}`,
            style: { width: `${l}%` },
            children: /* @__PURE__ */ e("span", { className: "ard-est__nta-seg-label", children: c.level })
          },
          c.level
        );
      }),
      /* @__PURE__ */ e("div", { className: "ard-est__nta-fill", style: { width: `${i}%` } }),
      s && /* @__PURE__ */ e(
        "div",
        {
          className: "ard-est__nta-fill ard-est__nta-fill--ghost",
          style: { left: `${i}%`, width: `${a - i}%` }
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
        o.level,
        ") if queries confirmed"
      ] })
    ] })
  ] });
}
async function zd(t, n, s, i) {
  const a = new URLSearchParams({ facilityName: s, orgSlug: i });
  n && a.set("externalAssessmentId", n);
  const r = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: `/api/extension/mds/items/${encodeURIComponent(t)}?${a}`
  });
  if (!r.success)
    throw new Error(r.error || "Failed to fetch item details");
  return r.data;
}
function jd({ item: t, componentLabel: n, isActive: s, onSelect: i, onAddQuery: a, isQueued: r }) {
  const o = t.userDecision?.decision === "disagree", c = t.solverAnswer === "needs_review" || t.classification === "needs_review", l = t.classification === "item_to_query" && !t.queryStatus, d = !!t.queryStatus, u = !c && !l && !d;
  return /* @__PURE__ */ e(
    "div",
    {
      className: `ard-est__item-row${s ? " ard-est__item-row--active" : ""}${o ? " ard-est__item-row--dismissed" : ""}`,
      role: "button",
      tabIndex: 0,
      onClick: () => i(t),
      onKeyDown: (p) => p.key === "Enter" && i(t),
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
        o && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--dismissed", children: "dismissed" }),
        !o && d && /* @__PURE__ */ e("span", { className: `ard-est__status ard-est__status--${t.queryStatus}`, children: t.queryStatus }),
        !o && !d && l && !r && /* @__PURE__ */ e(
          "button",
          {
            className: "ard-est__add-query-btn",
            onClick: (p) => {
              p.stopPropagation(), a(t.mdsItem);
            },
            children: "+ Add Query"
          }
        ),
        !o && !d && l && r && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--queued", children: "queued" }),
        !o && !d && c && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--review", children: "possible" }),
        !o && u && /* @__PURE__ */ e("span", { className: "ard-est__status ard-est__status--coded", children: "coded" }),
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
const Kd = { emerald: "positive", blue: "info", amber: "warning", slate: "neutral" };
function Jd(t, n) {
  if (t === "Nursing") {
    const s = n.nursingMainCategory;
    return s === "ES" ? "emerald" : s === "SCH" ? "blue" : "amber";
  }
  return t === "NTA" ? n.ntaPoints >= 12 ? "emerald" : n.ntaPoints >= 6 ? "blue" : "amber" : "slate";
}
function Yd({ label: t, value: n, sub: s, items: i, color: a, activeItem: r, onSelect: o, onAddQuery: c, selectedIds: l, ntaBar: d }) {
  const u = Kd[a] || "neutral";
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
      i.length > 0 && /* @__PURE__ */ e("span", { className: "ard-est__comp-count", children: [
        i.length,
        " item",
        i.length !== 1 ? "s" : ""
      ] })
    ] }),
    d,
    i.length > 0 && /* @__PURE__ */ e("div", { className: "ard-est__comp-items", children: i.map((p, m) => /* @__PURE__ */ e(
      jd,
      {
        item: p,
        componentLabel: t,
        isActive: r === p.mdsItem + (p.mdsColumn || ""),
        onSelect: o,
        onAddQuery: c,
        isQueued: l?.has(p.mdsItem)
      },
      `${t}-${p.mdsItem}-${m}`
    )) }),
    i.length === 0 && /* @__PURE__ */ e("div", { className: "ard-est__comp-empty", children: "No detected items" })
  ] });
}
function Zd({ score: t, allItems: n, activeItem: s, onSelectItem: i, onAddQuery: a, selectedIds: r, potentialNtaPoints: o, potentialPpd: c }) {
  if (!t) return null;
  const l = n.filter((g) => g.pdpmComponents?.includes("nursing") || g.nursingInfo), d = n.filter((g) => g.pdpmComponents?.includes("nta") || g.ntaPoints && g.ntaPoints > 0), u = n.filter((g) => g.pdpmComponents?.includes("slp")), p = n.filter((g) => g.pdpmComponents?.includes("ptot")), m = c != null && Math.abs(c - (t.estimatedPpd || 0)) > 0.5, h = m ? c - (t.estimatedPpd || 0) : 0, _ = [
    { label: "Nursing", value: t.nursingMainCategory, sub: t.nursingPaymentGroup, items: l },
    {
      label: "NTA",
      value: t.ntaLevel,
      sub: `${t.ntaPoints} pts`,
      items: d,
      ntaBar: /* @__PURE__ */ e(Qd, { currentPoints: t.ntaPoints, potentialPoints: o })
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
          c.toFixed(0),
          " (+$",
          h.toFixed(0),
          ")"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "ard-est__breakdown-cards", children: _.map((g) => /* @__PURE__ */ e(
      Yd,
      {
        ...g,
        color: Jd(g.label, t),
        activeItem: s,
        onSelect: i,
        onAddQuery: a,
        selectedIds: r
      },
      g.label
    )) })
  ] });
}
function Xd({ title: t, count: n, defaultOpen: s = !0, children: i }) {
  const [a, r] = v(s);
  return /* @__PURE__ */ e("div", { className: "ard-est__collapsible", children: [
    /* @__PURE__ */ e(
      "button",
      {
        className: "ard-est__collapsible-header",
        onClick: () => r(!a),
        children: [
          /* @__PURE__ */ e(
            "svg",
            {
              className: `ard-est__collapsible-chevron${a ? " ard-est__collapsible-chevron--open" : ""}`,
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
    a && /* @__PURE__ */ e("div", { className: "ard-est__collapsible-body", children: i })
  ] });
}
const el = () => /* @__PURE__ */ e(
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
), bs = () => /* @__PURE__ */ e(
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
), Is = () => /* @__PURE__ */ e(
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
), tl = () => /* @__PURE__ */ e(
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
function nl({ item: t }) {
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
function sl({ queueCount: t, batchState: n, progress: s, onClear: i, onGenerate: a }) {
  const r = n === "idle", o = n === "generating", l = o || n === "sending";
  return t === 0 && r ? null : /* @__PURE__ */ e("div", { className: "ard-est__query-queue", children: [
    r && /* @__PURE__ */ e(J, { children: [
      /* @__PURE__ */ e("div", { className: "ard-est__queue-left", children: [
        /* @__PURE__ */ e("span", { className: "ard-est__queue-badge", children: t }),
        /* @__PURE__ */ e("span", { className: "ard-est__queue-text", children: [
          t === 1 ? "query" : "queries",
          " ready"
        ] }),
        /* @__PURE__ */ e("button", { className: "ard-est__queue-clear", onClick: i, children: "clear" })
      ] }),
      /* @__PURE__ */ e("button", { className: "ard-est__queue-send-btn", onClick: a, children: [
        /* @__PURE__ */ e(tl, {}),
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
function il({
  patientId: t,
  patientName: n,
  facilityName: s,
  orgSlug: i,
  assessmentId: a,
  onBack: r,
  onClose: o
}) {
  const {
    result: c,
    loading: l,
    error: d,
    selectedDay: u,
    setSelectedDay: p,
    selectedScore: m,
    timeSensitiveItems: h,
    needsReviewItems: _,
    alwaysCapturedItems: g,
    refetch: f
  } = Fd({ patientId: t, facilityName: s, orgSlug: i, assessmentId: a }), [y, w] = v(!1), [k, C] = v(/* @__PURE__ */ new Set()), [I, P] = v(null), [A, x] = v(null), [D, N] = v(null), S = a || c?.externalAssessmentId;
  Y(() => (c?.classifiedItems || []).filter(
    ($) => $.classification === "item_to_query" && !$.queryStatus
  ), [c?.classifiedItems]);
  const E = U(($) => {
    C((H) => {
      const te = new Set(H);
      return te.add($), te;
    });
  }, []);
  U(($) => {
    C((H) => {
      const te = new Set(H);
      return te.delete($), te;
    });
  }, []);
  const B = U(() => {
    C(/* @__PURE__ */ new Set());
  }, []), M = U(($) => {
    const H = $.mdsItem + ($.mdsColumn || "");
    if (D === H) {
      N(null), x(null);
      return;
    }
    N(H), x({ item: $ });
  }, [D]), q = Y(() => (c?.classifiedItems || []).filter(($) => k.has($.mdsItem)), [c?.classifiedItems, k]), L = ui({
    patientId: t,
    facilityName: s,
    orgSlug: i,
    assessmentId: S,
    onComplete: ($, H) => {
      B(), P({ count: $.length, practitionerName: H }), setTimeout(() => P(null), 4e3), f();
    }
  }), O = U(async () => {
    const $ = [];
    for (const H of q)
      try {
        const te = H.mdsItem + (H.mdsColumn || ""), T = await zd(te, S, s, i), R = T?.item || T;
        $.push({
          mdsItem: H.mdsItem,
          mdsItemName: H.description,
          pdpmCategoryName: H.description,
          rationale: R?.rationale || R?.queryReason || T?.diagnosisSummary || "",
          keyFindings: R?.keyFindings || [],
          evidence: R?.evidence || [],
          queryEvidence: R?.queryEvidence || R?.evidence || [],
          recommendedIcd10: R?.recommendedIcd10 || [],
          ...R
        });
      } catch (te) {
        console.error(`[ArdEstimator] Failed to fetch detail for ${H.mdsItem}:`, te), $.push({
          mdsItem: H.mdsItem,
          mdsItemName: H.description,
          pdpmCategoryName: H.description,
          rationale: H.queryPdpmImpact || "",
          keyFindings: [],
          evidence: [],
          queryEvidence: []
        });
      }
    L.generate($);
  }, [q, S, s, i, L]), Z = [...h, ..._], j = /* @__PURE__ */ e("div", { className: "ard-est__header", children: [
    /* @__PURE__ */ e("div", { className: "ard-est__header-left", children: [
      r && L.state === "idle" && /* @__PURE__ */ e("button", { className: "ard-est__back-btn", onClick: r, title: "Back", children: /* @__PURE__ */ e(Is, {}) }),
      L.state === "reviewing" && /* @__PURE__ */ e("button", { className: "ard-est__back-btn", onClick: L.backToSelection, title: "Back to estimate", children: /* @__PURE__ */ e(Is, {}) }),
      /* @__PURE__ */ e("div", { children: [
        /* @__PURE__ */ e("h2", { className: "ard-est__title", children: [
          /* @__PURE__ */ e(el, {}),
          L.state === "reviewing" ? "Review & Send Queries" : "PDPM Estimate & ARD Recommendation"
        ] }),
        /* @__PURE__ */ e("p", { className: "ard-est__subtitle", children: L.state === "reviewing" ? `${L.generatedQueries.length} queries ready to send` : l ? "Loading..." : `5-Day PPS · Admitted ${c?.admissionDate || "—"}` })
      ] })
    ] }),
    m && L.state === "idle" && /* @__PURE__ */ e("div", { className: "ard-est__header-right", children: [
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
  if (l)
    return /* @__PURE__ */ e("div", { className: "ard-est", children: [
      j,
      /* @__PURE__ */ e("div", { className: "ard-est__loading", children: [
        /* @__PURE__ */ e("div", { className: "ard-est__spinner" }),
        /* @__PURE__ */ e("p", { className: "ard-est__loading-text", children: "Calculating optimal ARD..." })
      ] })
    ] });
  if (d)
    return /* @__PURE__ */ e("div", { className: "ard-est", children: [
      j,
      /* @__PURE__ */ e("div", { className: "ard-est__error", children: [
        /* @__PURE__ */ e(bs, {}),
        /* @__PURE__ */ e("p", { className: "ard-est__error-text", children: d }),
        /* @__PURE__ */ e("button", { className: "ard-est__error-retry", onClick: f, children: "Retry" })
      ] })
    ] });
  if (L.state === "reviewing" || L.state === "sending")
    return /* @__PURE__ */ e("div", { className: "ard-est", children: [
      j,
      /* @__PURE__ */ e("div", { className: "ard-est__body", children: /* @__PURE__ */ e(
        hi,
        {
          generatedQueries: L.generatedQueries,
          practitioners: L.practitioners,
          selectedPractitionerId: L.selectedPractitionerId,
          onSelectPractitioner: L.setSelectedPractitionerId,
          onUpdateNote: L.updateNote,
          onUpdateIcd10: L.updateIcd10,
          onSend: L.sendAll,
          onBack: L.backToSelection,
          isSending: L.state === "sending",
          progress: L.progress
        }
      ) })
    ] });
  if (A) {
    const $ = {
      assessmentId: S,
      scope: "mds"
    };
    return /* @__PURE__ */ e("div", { className: "ard-est ard-est--detail-view", children: /* @__PURE__ */ e(
      di,
      {
        item: {
          mdsItem: A.item.mdsItem + (A.item.mdsColumn || ""),
          itemName: A.item.description,
          column: A.item.mdsColumn || ""
        },
        context: $,
        onBack: () => {
          x(null), N(null);
        },
        onDismiss: () => {
          x(null), N(null);
        }
      }
    ) });
  }
  return /* @__PURE__ */ e("div", { className: "ard-est", children: [
    j,
    I && /* @__PURE__ */ e("div", { className: "ard-est__success-banner", children: [
      /* @__PURE__ */ e("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
        /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        /* @__PURE__ */ e("polyline", { points: "22 4 12 14.01 9 11.01" })
      ] }),
      I.count,
      " quer",
      I.count === 1 ? "y" : "ies",
      " sent to ",
      I.practitionerName
    ] }),
    /* @__PURE__ */ e("div", { className: "ard-est__body", children: [
      /* @__PURE__ */ e(
        Vd,
        {
          scores: c?.scores || [],
          selectedDay: u,
          recommendedDay: c?.recommendedDayNumber,
          onSelectDay: p,
          ganttItems: Z
        }
      ),
      /* @__PURE__ */ e(
        Wd,
        {
          result: c,
          selectedDay: u,
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
        Zd,
        {
          score: m,
          allItems: c?.classifiedItems || [],
          activeItem: D,
          onSelectItem: M,
          onAddQuery: E,
          selectedIds: k,
          potentialNtaPoints: c?.potentialNtaPoints,
          potentialPpd: c?.potentialPpd
        }
      ),
      g.length > 0 && /* @__PURE__ */ e(
        Xd,
        {
          title: "Already Captured (PDPM items)",
          count: g.length,
          defaultOpen: !1,
          children: g.map(($, H) => /* @__PURE__ */ e(nl, { item: $ }, `cap-${$.mdsItem}-${H}`))
        }
      ),
      (c?.classifiedItems || []).length > 0 && c?.sectionsMissing?.length > 0 && /* @__PURE__ */ e("div", { className: "ard-est__warning", children: [
        /* @__PURE__ */ e(bs, {}),
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
      sl,
      {
        queueCount: k.size,
        batchState: L.state,
        progress: L.progress,
        onClear: B,
        onGenerate: O
      }
    )
  ] });
}
Ri();
Fi();
window.__DEMO_MODE = !0;
window.__preact = ki;
window.__QueryItemsPage = _i;
window.__ICD10SidebarComponent = Bd;
window.__ArdEstimator = il;
function Ds() {
  let t = document.getElementById("super-demo-root");
  t || (t = document.createElement("div"), t.id = "super-demo-root", document.body.appendChild(t)), Ce(/* @__PURE__ */ e(Md, {}), t), console.log("[Demo] DemoApp mounted");
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ds) : Ds();
