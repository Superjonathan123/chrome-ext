var ze, J, rs, me, Pt, os, cs, ds, mt, st, nt, Ie = {}, ls = [], zs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, je = Array.isArray;
function pe(e, s) {
  for (var n in s) e[n] = s[n];
  return e;
}
function ht(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function ps(e, s, n) {
  var i, a, r, c = {};
  for (r in s) r == "key" ? i = s[r] : r == "ref" ? a = s[r] : c[r] = s[r];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? ze.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (r in e.defaultProps) c[r] === void 0 && (c[r] = e.defaultProps[r]);
  return $e(e, c, i, a, null);
}
function $e(e, s, n, i, a) {
  var r = { type: e, props: s, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++rs, __i: -1, __u: 0 };
  return a == null && J.vnode != null && J.vnode(r), r;
}
function Y(e) {
  return e.children;
}
function Re(e, s) {
  this.props = e, this.context = s;
}
function ye(e, s) {
  if (s == null) return e.__ ? ye(e.__, e.__i + 1) : null;
  for (var n; s < e.__k.length; s++) if ((n = e.__k[s]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? ye(e) : null;
}
function us(e) {
  var s, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, s = 0; s < e.__k.length; s++) if ((n = e.__k[s]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return us(e);
  }
}
function Tt(e) {
  (!e.__d && (e.__d = !0) && me.push(e) && !Fe.__r++ || Pt != J.debounceRendering) && ((Pt = J.debounceRendering) || os)(Fe);
}
function Fe() {
  for (var e, s, n, i, a, r, c, o = 1; me.length; ) me.length > o && me.sort(cs), e = me.shift(), o = me.length, e.__d && (n = void 0, i = void 0, a = (i = (s = e).__v).__e, r = [], c = [], s.__P && ((n = pe({}, i)).__v = i.__v + 1, J.vnode && J.vnode(n), _t(s.__P, n, i, s.__n, s.__P.namespaceURI, 32 & i.__u ? [a] : null, r, a ?? ye(i), !!(32 & i.__u), c), n.__v = i.__v, n.__.__k[n.__i] = n, _s(r, n, c), i.__e = i.__ = null, n.__e != a && us(n)));
  Fe.__r = 0;
}
function ms(e, s, n, i, a, r, c, o, p, d, u) {
  var l, m, h, _, v, g, C, f = i && i.__k || ls, x = s.length;
  for (p = js(n, s, f, p, x), l = 0; l < x; l++) (h = n.__k[l]) != null && (m = h.__i == -1 ? Ie : f[h.__i] || Ie, h.__i = l, g = _t(e, h, m, a, r, c, o, p, d, u), _ = h.__e, h.ref && m.ref != h.ref && (m.ref && gt(m.ref, null, h), u.push(h.ref, h.__c || _, h)), v == null && _ != null && (v = _), (C = !!(4 & h.__u)) || m.__k === h.__k ? p = hs(h, p, e, C) : typeof h.type == "function" && g !== void 0 ? p = g : _ && (p = _.nextSibling), h.__u &= -7);
  return n.__e = v, p;
}
function js(e, s, n, i, a) {
  var r, c, o, p, d, u = n.length, l = u, m = 0;
  for (e.__k = new Array(a), r = 0; r < a; r++) (c = s[r]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = e.__k[r] = $e(null, c, null, null, null) : je(c) ? c = e.__k[r] = $e(Y, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = e.__k[r] = $e(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : e.__k[r] = c, p = r + m, c.__ = e, c.__b = e.__b + 1, o = null, (d = c.__i = Qs(c, n, p, l)) != -1 && (l--, (o = n[d]) && (o.__u |= 2)), o == null || o.__v == null ? (d == -1 && (a > u ? m-- : a < u && m++), typeof c.type != "function" && (c.__u |= 4)) : d != p && (d == p - 1 ? m-- : d == p + 1 ? m++ : (d > p ? m-- : m++, c.__u |= 4))) : e.__k[r] = null;
  if (l) for (r = 0; r < u; r++) (o = n[r]) != null && (2 & o.__u) == 0 && (o.__e == i && (i = ye(o)), fs(o, o));
  return i;
}
function hs(e, s, n, i) {
  var a, r;
  if (typeof e.type == "function") {
    for (a = e.__k, r = 0; a && r < a.length; r++) a[r] && (a[r].__ = e, s = hs(a[r], s, n, i));
    return s;
  }
  e.__e != s && (i && (s && e.type && !s.parentNode && (s = ye(e)), n.insertBefore(e.__e, s || null)), s = e.__e);
  do
    s = s && s.nextSibling;
  while (s != null && s.nodeType == 8);
  return s;
}
function Qs(e, s, n, i) {
  var a, r, c, o = e.key, p = e.type, d = s[n], u = d != null && (2 & d.__u) == 0;
  if (d === null && o == null || u && o == d.key && p == d.type) return n;
  if (i > (u ? 1 : 0)) {
    for (a = n - 1, r = n + 1; a >= 0 || r < s.length; ) if ((d = s[c = a >= 0 ? a-- : r++]) != null && (2 & d.__u) == 0 && o == d.key && p == d.type) return c;
  }
  return -1;
}
function At(e, s, n) {
  s[0] == "-" ? e.setProperty(s, n ?? "") : e[s] = n == null ? "" : typeof n != "number" || zs.test(s) ? n : n + "px";
}
function Te(e, s, n, i, a) {
  var r, c;
  e: if (s == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof i == "string" && (e.style.cssText = i = ""), i) for (s in i) n && s in n || At(e.style, s, "");
    if (n) for (s in n) i && n[s] == i[s] || At(e.style, s, n[s]);
  }
  else if (s[0] == "o" && s[1] == "n") r = s != (s = s.replace(ds, "$1")), c = s.toLowerCase(), s = c in e || s == "onFocusOut" || s == "onFocusIn" ? c.slice(2) : s.slice(2), e.l || (e.l = {}), e.l[s + r] = n, n ? i ? n.u = i.u : (n.u = mt, e.addEventListener(s, r ? nt : st, r)) : e.removeEventListener(s, r ? nt : st, r);
  else {
    if (a == "http://www.w3.org/2000/svg") s = s.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (s != "width" && s != "height" && s != "href" && s != "list" && s != "form" && s != "tabIndex" && s != "download" && s != "rowSpan" && s != "colSpan" && s != "role" && s != "popover" && s in e) try {
      e[s] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && s[4] != "-" ? e.removeAttribute(s) : e.setAttribute(s, s == "popover" && n == 1 ? "" : n));
  }
}
function Mt(e) {
  return function(s) {
    if (this.l) {
      var n = this.l[s.type + e];
      if (s.t == null) s.t = mt++;
      else if (s.t < n.u) return;
      return n(J.event ? J.event(s) : s);
    }
  };
}
function _t(e, s, n, i, a, r, c, o, p, d) {
  var u, l, m, h, _, v, g, C, f, x, k, y, S, E, N, w, T, F = s.type;
  if (s.constructor !== void 0) return null;
  128 & n.__u && (p = !!(32 & n.__u), r = [o = s.__e = n.__e]), (u = J.__b) && u(s);
  e: if (typeof F == "function") try {
    if (C = s.props, f = "prototype" in F && F.prototype.render, x = (u = F.contextType) && i[u.__c], k = u ? x ? x.props.value : u.__ : i, n.__c ? g = (l = s.__c = n.__c).__ = l.__E : (f ? s.__c = l = new F(C, k) : (s.__c = l = new Re(C, k), l.constructor = F, l.render = Ks), x && x.sub(l), l.state || (l.state = {}), l.__n = i, m = l.__d = !0, l.__h = [], l._sb = []), f && l.__s == null && (l.__s = l.state), f && F.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = pe({}, l.__s)), pe(l.__s, F.getDerivedStateFromProps(C, l.__s))), h = l.props, _ = l.state, l.__v = s, m) f && F.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), f && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (f && F.getDerivedStateFromProps == null && C !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(C, k), s.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(C, l.__s, k) === !1) {
        for (s.__v != n.__v && (l.props = C, l.state = l.__s, l.__d = !1), s.__e = n.__e, s.__k = n.__k, s.__k.some(function(V) {
          V && (V.__ = s);
        }), y = 0; y < l._sb.length; y++) l.__h.push(l._sb[y]);
        l._sb = [], l.__h.length && c.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(C, l.__s, k), f && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(h, _, v);
      });
    }
    if (l.context = k, l.props = C, l.__P = e, l.__e = !1, S = J.__r, E = 0, f) {
      for (l.state = l.__s, l.__d = !1, S && S(s), u = l.render(l.props, l.state, l.context), N = 0; N < l._sb.length; N++) l.__h.push(l._sb[N]);
      l._sb = [];
    } else do
      l.__d = !1, S && S(s), u = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++E < 25);
    l.state = l.__s, l.getChildContext != null && (i = pe(pe({}, i), l.getChildContext())), f && !m && l.getSnapshotBeforeUpdate != null && (v = l.getSnapshotBeforeUpdate(h, _)), w = u, u != null && u.type === Y && u.key == null && (w = gs(u.props.children)), o = ms(e, je(w) ? w : [w], s, n, i, a, r, c, o, p, d), l.base = s.__e, s.__u &= -161, l.__h.length && c.push(l), g && (l.__E = l.__ = null);
  } catch (V) {
    if (s.__v = null, p || r != null) if (V.then) {
      for (s.__u |= p ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; ) o = o.nextSibling;
      r[r.indexOf(o)] = null, s.__e = o;
    } else {
      for (T = r.length; T--; ) ht(r[T]);
      it(s);
    }
    else s.__e = n.__e, s.__k = n.__k, V.then || it(s);
    J.__e(V, s, n);
  }
  else r == null && s.__v == n.__v ? (s.__k = n.__k, s.__e = n.__e) : o = s.__e = Ws(n.__e, s, n, i, a, r, c, p, d);
  return (u = J.diffed) && u(s), 128 & s.__u ? void 0 : o;
}
function it(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(it);
}
function _s(e, s, n) {
  for (var i = 0; i < n.length; i++) gt(n[i], n[++i], n[++i]);
  J.__c && J.__c(s, e), e.some(function(a) {
    try {
      e = a.__h, a.__h = [], e.some(function(r) {
        r.call(a);
      });
    } catch (r) {
      J.__e(r, a.__v);
    }
  });
}
function gs(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : je(e) ? e.map(gs) : pe({}, e);
}
function Ws(e, s, n, i, a, r, c, o, p) {
  var d, u, l, m, h, _, v, g = n.props || Ie, C = s.props, f = s.type;
  if (f == "svg" ? a = "http://www.w3.org/2000/svg" : f == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), r != null) {
    for (d = 0; d < r.length; d++) if ((h = r[d]) && "setAttribute" in h == !!f && (f ? h.localName == f : h.nodeType == 3)) {
      e = h, r[d] = null;
      break;
    }
  }
  if (e == null) {
    if (f == null) return document.createTextNode(C);
    e = document.createElementNS(a, f, C.is && C), o && (J.__m && J.__m(s, r), o = !1), r = null;
  }
  if (f == null) g === C || o && e.data == C || (e.data = C);
  else {
    if (r = r && ze.call(e.childNodes), !o && r != null) for (g = {}, d = 0; d < e.attributes.length; d++) g[(h = e.attributes[d]).name] = h.value;
    for (d in g) if (h = g[d], d != "children") {
      if (d == "dangerouslySetInnerHTML") l = h;
      else if (!(d in C)) {
        if (d == "value" && "defaultValue" in C || d == "checked" && "defaultChecked" in C) continue;
        Te(e, d, null, h, a);
      }
    }
    for (d in C) h = C[d], d == "children" ? m = h : d == "dangerouslySetInnerHTML" ? u = h : d == "value" ? _ = h : d == "checked" ? v = h : o && typeof h != "function" || g[d] === h || Te(e, d, h, g[d], a);
    if (u) o || l && (u.__html == l.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), s.__k = [];
    else if (l && (e.innerHTML = ""), ms(s.type == "template" ? e.content : e, je(m) ? m : [m], s, n, i, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, r, c, r ? r[0] : n.__k && ye(n, 0), o, p), r != null) for (d = r.length; d--; ) ht(r[d]);
    o || (d = "value", f == "progress" && _ == null ? e.removeAttribute("value") : _ != null && (_ !== e[d] || f == "progress" && !_ || f == "option" && _ != g[d]) && Te(e, d, _, g[d], a), d = "checked", v != null && v != e[d] && Te(e, d, v, g[d], a));
  }
  return e;
}
function gt(e, s, n) {
  try {
    if (typeof e == "function") {
      var i = typeof e.__u == "function";
      i && e.__u(), i && s == null || (e.__u = e(s));
    } else e.current = s;
  } catch (a) {
    J.__e(a, n);
  }
}
function fs(e, s, n) {
  var i, a;
  if (J.unmount && J.unmount(e), (i = e.ref) && (i.current && i.current != e.__e || gt(i, null, s)), (i = e.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (r) {
      J.__e(r, s);
    }
    i.base = i.__P = null;
  }
  if (i = e.__k) for (a = 0; a < i.length; a++) i[a] && fs(i[a], s, n || typeof e.type != "function");
  n || ht(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ks(e, s, n) {
  return this.constructor(e, n);
}
function ys(e, s, n) {
  var i, a, r, c;
  s == document && (s = document.documentElement), J.__ && J.__(e, s), a = (i = !1) ? null : s.__k, r = [], c = [], _t(s, e = s.__k = ps(Y, null, [e]), a || Ie, Ie, s.namespaceURI, a ? null : s.firstChild ? ze.call(s.childNodes) : null, r, a ? a.__e : s.firstChild, i, c), _s(r, e, c);
}
ze = ls.slice, J = { __e: function(e, s, n, i) {
  for (var a, r, c; s = s.__; ) if ((a = s.__c) && !a.__) try {
    if ((r = a.constructor) && r.getDerivedStateFromError != null && (a.setState(r.getDerivedStateFromError(e)), c = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, i || {}), c = a.__d), c) return a.__E = a;
  } catch (o) {
    e = o;
  }
  throw e;
} }, rs = 0, Re.prototype.setState = function(e, s) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = pe({}, this.state), typeof e == "function" && (e = e(pe({}, n), this.props)), e && pe(n, e), e != null && this.__v && (s && this._sb.push(s), Tt(this));
}, Re.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Tt(this));
}, Re.prototype.render = Y, me = [], os = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, cs = function(e, s) {
  return e.__v.__b - s.__v.__b;
}, Fe.__r = 0, ds = /(PointerCapture)$|Capture$/i, mt = 0, st = Mt(!1), nt = Mt(!0);
var Js = 0;
function t(e, s, n, i, a, r) {
  s || (s = {});
  var c, o, p = s;
  if ("ref" in p) for (o in p = {}, s) o == "ref" ? c = s[o] : p[o] = s[o];
  var d = { type: e, props: p, key: n, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Js, __i: -1, __u: 0, __source: a, __self: r };
  if (typeof e == "function" && (c = e.defaultProps)) for (o in c) p[o] === void 0 && (p[o] = c[o]);
  return J.vnode && J.vnode(d), d;
}
const ce = {
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
  ]
};
function Ys(e) {
  return new Promise((s) => setTimeout(s, e));
}
function Zs() {
  return Ys(50 + Math.random() * 150);
}
function Xs(e) {
  const [s, n] = e.split("?"), i = new URLSearchParams(n || "");
  if (s === "/api/extension/mds/dashboard")
    return { success: !0, data: ce.dashboard };
  if (s === "/api/extension/mds/doc-risks")
    return { success: !0, data: ce.docRisks };
  if (s === "/api/extension/mds/pdpm-potential") {
    const d = i.get("externalAssessmentId"), u = ce.pdpmPotential[d];
    return u ? { success: !0, data: u } : { success: !1, error: `No PDPM data for assessment ${d}` };
  }
  const a = s.match(/\/api\/extension\/patients\/([^/]+)\/assessments/);
  if (a) {
    const d = a[1], u = ce.patientAssessments[d];
    return u ? { success: !0, data: u } : { success: !1, error: `No assessments for patient ${d}` };
  }
  const r = s.match(/\/api\/extension\/mds\/items\/([^/]+)/);
  if (r) {
    const d = decodeURIComponent(r[1]), u = ce.itemDetail[d];
    return u ? { success: !0, data: u } : {
      success: !0,
      data: {
        item: { mdsItem: d, itemName: d, description: `MDS Item ${d}`, status: "dont_code", evidence: [] },
        diagnosisSummary: null,
        treatmentSummary: null
      }
    };
  }
  if (s === "/api/extension/mds/queryable-items")
    return { success: !0, data: ce.queryableItems };
  if (s === "/api/extension/mds/queryable-items/batch-generate")
    return { success: !0, data: { generated: !0 } };
  if (s === "/api/extension/practitioners")
    return { success: !0, data: ce.practitioners };
  if (s === "/api/extension/certifications/dashboard")
    return { success: !0, data: ce.certDashboard };
  if (s === "/api/extension/certifications/practitioners")
    return { success: !0, data: ce.practitioners };
  if (s === "/api/extension/certifications/by-patient") {
    const d = i.get("patientId"), u = ce.certifications || [];
    return { success: !0, data: { certifications: d ? u.filter((m) => m.patientId === d) : u } };
  }
  const c = s.match(/\/api\/extension\/certifications\/([^/]+)\/sends/);
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
  const o = s.match(/\/api\/extension\/certifications\/([^/]+)\/(send|skip|delay|edit-reason|unskip)/);
  if (o)
    return { success: !0, data: { certId: o[1], action: o[2] } };
  if (s === "/api/extension/certifications") {
    const d = i.get("status"), u = ce.certifications || [];
    return { success: !0, data: { certifications: d ? u.filter((m) => m.status === d) : u } };
  }
  const p = s.match(/\/api\/extension\/documents\/([^/]+)/);
  return p ? {
    success: !0,
    data: {
      document: {
        id: p[1],
        title: "Clinical Document",
        documentType: "Progress Note",
        effectiveDate: "2026-01-22",
        fileSize: 245760,
        signedUrl: null
        // No real PDF in demo — viewer will show empty state
      }
    }
  } : (console.warn("[DemoMock] Unhandled API endpoint:", s), { success: !1, error: `Demo: unhandled endpoint ${s}` });
}
async function en(e) {
  switch (await Zs(), e.type) {
    case "GET_ORG":
      return { org: "demo-org" };
    case "GET_AUTH_STATE":
      return { authenticated: !0 };
    case "API_REQUEST":
      return Xs(e.endpoint);
    default:
      return console.log("[DemoMock] Unhandled message type:", e.type), {};
  }
}
function tn() {
  typeof window.chrome > "u" && (window.chrome = {}), window.chrome.runtime || (window.chrome.runtime = {}), window.chrome.runtime.sendMessage = function(e, s) {
    const n = en(e);
    if (typeof s == "function") {
      n.then(s).catch((i) => {
        console.error("[DemoMock] Error in callback handler:", i), s({ success: !1, error: i.message });
      });
      return;
    }
    return n;
  }, window.chrome.runtime.getURL = function(e) {
    return e.startsWith("lib/") ? `./${e}` : e;
  }, window.chrome.runtime.id = "demo-mock-extension-id", console.log("[DemoMock] Chrome API mocks installed");
}
function sn() {
  window.__DEMO_CERT_DATA = ce.certifications || [], localStorage.setItem("CORE.org_code", "demo-org"), window.getOrg = () => ({ org: "demo-org" }), window.getChatFacilityInfo = () => "SUNNY MEADOWS DEMO FACILITY", window.getChatPatientId = () => "2657226", window.getPatientNameFromPage = () => "Doe, Jane", window.getCurrentParams = () => ({
    facilityName: "SUNNY MEADOWS DEMO FACILITY",
    orgSlug: "demo-org",
    assessmentId: "4860265"
  }), window.QueryAPI = {
    async fetchPractitioners(s, n) {
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
    async generateNote(s, n) {
      await new Promise((c) => setTimeout(c, 500 + Math.random() * 500));
      const i = n.pdpmCategoryName || n.mdsItemName || n.itemName || s;
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
        }[s] || `Dear Doctor,

I am writing to request your clinical assessment regarding ${i} (${s}) for this patient's current MDS assessment.

Based on our review of the clinical documentation, there appears to be evidence supporting this diagnosis/condition that may warrant coding on the MDS. Your confirmation would help ensure accurate assessment completion.

Thank you for your prompt attention to this matter.`,
        preferredIcd10: n.recommendedIcd10?.[0] || { code: "R69", description: "Illness, unspecified" },
        icd10Options: n.recommendedIcd10 || [
          { code: "R69", description: "Illness, unspecified" }
        ]
      };
    },
    async createQuery(s) {
      return await new Promise((n) => setTimeout(n, 300)), {
        query: {
          id: `demo-query-${Date.now()}`,
          mdsItem: s.mdsItem,
          mdsItemName: s.mdsItemName,
          status: "draft",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
    },
    async sendQuery(s, n, i) {
      return await new Promise((a) => setTimeout(a, 300)), console.log(`[DemoMock] QueryAPI.sendQuery: ${s} → practitioners: ${n.join(", ")}`), { success: !0, sentAt: (/* @__PURE__ */ new Date()).toISOString() };
    },
    async resendQuery(s) {
      return await new Promise((n) => setTimeout(n, 200)), console.log(`[DemoMock] QueryAPI.resendQuery: ${s}`), { success: !0 };
    }
  };
  function e(s, n) {
    console.log(`[DemoMock] SuperToast.${s}:`, n), window.dispatchEvent(new CustomEvent("demo:toast", { detail: { type: s, message: n } }));
  }
  window.SuperToast = {
    show(s) {
      e("info", s.message || s);
    },
    success(s) {
      e("success", s);
    },
    error(s) {
      e("error", s);
    },
    info(s) {
      e("info", s);
    },
    warning(s) {
      e("warning", s);
    }
  }, window.SuperOverlay = {
    facilityName: "SUNNY MEADOWS DEMO FACILITY",
    patientId: "2657226",
    assessmentId: "4860265"
  }, window.navigateToMDSItem = (s) => {
    console.log("[DemoMock] navigateToMDSItem:", s);
  }, window.PDPMAnalyzerLauncher = {
    open(s) {
      console.log("[DemoMock] PDPMAnalyzerLauncher.open:", s), window.dispatchEvent(new CustomEvent("demo:open-pdpm", { detail: s }));
    }
  }, window.QueryDetailModal = {
    show(s) {
      console.log("[DemoMock] QueryDetailModal.show:", s);
    }
  }, window.renderSplitAdministrations = async (s, n, i, a) => {
    await new Promise((w) => setTimeout(w, 400));
    const r = !n?.includes("tar"), c = r ? "MAR" : "TAR", o = r ? "super-admin-badge--mar" : "super-admin-badge--tar", p = r ? "💊" : "⚡", u = {
      "mar-010": { name: "Aspirin 81mg PO Daily", directions: "Take by mouth once daily with food", startDate: "2025-12-20", endDate: null },
      "mar-012": { name: "Lisinopril 20mg PO Daily", directions: "Take by mouth once daily in the morning", startDate: "2025-12-15", endDate: null },
      "mar-001": { name: "Metformin 500mg PO BID", directions: "Take by mouth twice daily with meals", startDate: "2025-11-01", endDate: null },
      "doc-nutr-004": { name: "Ensure Plus 8 OZ Oral Liquid", directions: "Give 8 oz Ensure Plus by mouth twice daily with lunch and dinner for nutritional supplementation", startDate: "2026-01-22", endDate: null },
      "doc-nutr-003": { name: "Fortified Cereal 6 OZ", directions: "Give 6 oz fortified cereal by mouth once daily with breakfast to increase caloric and protein intake", startDate: "2026-01-22", endDate: null }
    }[n] || { name: "Medication Order", directions: "As directed", startDate: "2025-12-20", endDate: null }, l = [], m = new Date(2026, 0, 27);
    for (let w = 6; w >= 0; w--) {
      const T = new Date(m);
      T.setDate(T.getDate() - w), l.push(T);
    }
    const h = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], _ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], v = (w) => `${_[w.getMonth()]} ${w.getDate()}, ${w.getFullYear()}`, g = `${v(l[0])} - ${v(l[l.length - 1])}`, C = (w) => w ? new Date(w).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "", f = l.map((w) => `
      <th class="super-admin-grid__date-header">
        <div class="super-admin-grid__day">${h[w.getDay()]}</div>
        <div class="super-admin-grid__date">${_[w.getMonth()]} ${w.getDate()}</div>
      </th>
    `).join(""), k = u.name.includes("BID") ? ["0800", "1800"] : ["0800"], y = ["RN-JD", "RN-KM", "RN-TS", "LPN-AB"], S = (w) => {
      const T = parseInt(w.substring(0, 2), 10), F = w.substring(2), V = T >= 12 ? "PM" : "AM";
      return `${T > 12 ? T - 12 : T === 0 ? 12 : T}:${F} ${V}`;
    }, E = k.map((w) => {
      const T = l.map((F, V) => {
        const D = (V + (w === "1800" ? 2 : 0)) % y.length;
        return `<td class="super-admin-grid__cell super-admin-grid__cell--given">
          <span class="super-admin-grid__check">✓</span>
          <span class="super-admin-grid__initials">${y[D]}</span>
        </td>`;
      }).join("");
      return `<tr class="super-admin-grid__row">
        <td class="super-admin-grid__time">${S(w)}</td>
        ${T}
      </tr>`;
    }).join(""), N = k.length * l.length;
    s.innerHTML = `
      <div class="super-split__admin">
        <div class="super-admin-modal__header">
          <div class="super-admin-modal__title-row">
            <span class="super-admin-modal__icon">${p}</span>
            <div class="super-admin-modal__title">
              <span class="super-admin-modal__order-name">${u.name}</span>
              <span class="super-admin-badge ${o}">${c}</span>
            </div>
          </div>
          ${u.directions ? `<div class="super-admin-modal__directions">${u.directions}</div>` : ""}
          <div class="super-admin-modal__meta">
            ${k.length} time slot${k.length !== 1 ? "s" : ""}
            <span class="super-admin-modal__dates">
              Start: ${C(u.startDate)}
              ${u.endDate ? ` · Stop: ${C(u.endDate)}` : ""}
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
                  ${f}
                </tr>
              </thead>
              <tbody>
                ${E}
              </tbody>
            </table>
          </div>
        </div>
        <div class="super-admin-modal__footer">
          <span class="super-admin-modal__event-count">${N} events</span>
          <div class="super-admin-legend">
            <span class="super-admin-legend__item super-admin-legend__item--given">✓ Given</span>
            <span class="super-admin-legend__item super-admin-legend__item--refused">2 Refused</span>
            <span class="super-admin-legend__item super-admin-legend__item--loa">3 LOA</span>
            <span class="super-admin-legend__item super-admin-legend__item--hold">5 Hold</span>
          </div>
        </div>
      </div>
    `;
  }, window.renderSplitNote = async (s, n, i) => {
    await new Promise((p) => setTimeout(p, 350));
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
    }[n];
    function c(p) {
      return p.map((d) => {
        let u = "super-split-pdf__line";
        return d.highlight === "keyword" || d.highlight === !0 ? u += " super-split-pdf__line--keyword" : d.highlight === "contextual" && (u += " super-split-pdf__line--contextual"), d.bold && (u += " super-split-pdf__line--bold"), `<div class="${u}">${d.text || "&nbsp;"}</div>`;
      }).join("");
    }
    if (r) {
      const p = r.pageContent[1], d = r.pages;
      let u = 1;
      if (s.innerHTML = `
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
            ${c(p)}
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
        let v = function() {
          _.innerHTML = c(r.pageContent[u]), h.textContent = `Page ${u} of ${d}`, l.disabled = u <= 1, m.disabled = u >= d;
        };
        var o = v;
        const l = s.querySelector(".super-split-pdf__prev"), m = s.querySelector(".super-split-pdf__next"), h = s.querySelector(".super-split-pdf__page-num"), _ = s.querySelector(".super-split-pdf__paper");
        l.addEventListener("click", () => {
          u > 1 && (u--, v());
        }), m.addEventListener("click", () => {
          u < d && (u++, v());
        });
      }
    } else {
      const p = [
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
      s.innerHTML = `
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
            ${c(p)}
          </div>
          <div class="super-split-pdf__footer">
            <span class="super-split-pdf__page-num">Page 1 of 1</span>
          </div>
        </div>`;
    }
  }, window.renderSplitTherapy = async (s, n, i, a) => {
    await new Promise((r) => setTimeout(r, 300)), s.innerHTML = `
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
  }, window.QuerySendModal = {
    show(s) {
      console.log("[DemoMock] QuerySendModal.show (stub):", s?.mdsItem);
    }
  }, window.CertAPI = {
    async sendCert(s, n, i) {
      return await new Promise((a) => setTimeout(a, 300)), console.log("[DemoMock] CertAPI.sendCert:", s), e("success", "Certification sent successfully"), { success: !0 };
    },
    async skipCert(s, n) {
      return await new Promise((i) => setTimeout(i, 200)), console.log("[DemoMock] CertAPI.skipCert:", s), e("info", "Certification skipped"), { success: !0 };
    },
    async delayCert(s, n) {
      return await new Promise((i) => setTimeout(i, 200)), console.log("[DemoMock] CertAPI.delayCert:", s), e("info", "Certification delayed"), { success: !0 };
    },
    async saveClinicalReason(s, n) {
      return await new Promise((i) => setTimeout(i, 200)), console.log("[DemoMock] CertAPI.saveClinicalReason:", s, n), { success: !0 };
    },
    async unskipCert(s) {
      return await new Promise((n) => setTimeout(n, 200)), console.log("[DemoMock] CertAPI.unskipCert:", s), e("info", "Certification unskipped"), { success: !0 };
    },
    async fetchPractitioners(s, n) {
      return await new Promise((i) => setTimeout(i, 200)), [
        { id: "pract-001", firstName: "Demo", lastName: "Provider", title: "MD", name: "Dr. Demo Provider", phone: "555-0101", npi: "1234567890" },
        { id: "pract-002", firstName: "Sample", lastName: "Doctor", title: "DO", name: "Dr. Sample Doctor", phone: "555-0102", npi: "0987654321" },
        { id: "pract-003", firstName: "Jane", lastName: "Specialist", title: "NP", name: "Jane Specialist, NP", phone: "555-0103", npi: "1122334455" }
      ];
    },
    async fetchPractitionerWorkload(s) {
      return await new Promise((n) => setTimeout(n, 200)), {
        practitioner: { id: s, name: "Dr. Demo Provider" },
        stats: { pending: 3, signed: 12, overdue: 1 },
        certs: []
      };
    },
    async fetchDashboard(s, n) {
      return await new Promise((i) => setTimeout(i, 200)), { pending: 4, overdue: 1, dueSoon: 2, signedLast7Days: 3 };
    },
    async fetchCertifications(s, n, i) {
      return await new Promise((a) => setTimeout(a, 200)), window.__DEMO_CERT_DATA || [];
    },
    async fetchByPatient(s, n, i) {
      return await new Promise((r) => setTimeout(r, 200)), (window.__DEMO_CERT_DATA || []).filter((r) => r.patientId === i);
    },
    async fetchSendHistory(s) {
      return await new Promise((n) => setTimeout(n, 200)), [
        { id: "send-1", certId: s, sentAt: new Date(Date.now() - 3 * 864e5).toISOString(), practitioner: { name: "Dr. Demo Provider" }, method: "fax" }
      ];
    }
  }, window.CONFIG = { DEV_MODE: !0 }, console.log("[DemoMock] Global mocks installed");
}
var Ce, ne, Ze, Lt, ke = 0, vs = [], ie = J, $t = ie.__b, Rt = ie.__r, Et = ie.diffed, Ot = ie.__c, qt = ie.unmount, Ht = ie.__;
function ft(e, s) {
  ie.__h && ie.__h(ne, e, ke || s), ke = 0;
  var n = ne.__H || (ne.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function b(e) {
  return ke = 1, nn(ws, e);
}
function nn(e, s, n) {
  var i = ft(Ce++, 2);
  if (i.t = e, !i.__c && (i.__ = [ws(void 0, s), function(o) {
    var p = i.__N ? i.__N[0] : i.__[0], d = i.t(p, o);
    p !== d && (i.__N = [d, i.__[1]], i.__c.setState({}));
  }], i.__c = ne, !ne.__f)) {
    var a = function(o, p, d) {
      if (!i.__c.__H) return !0;
      var u = i.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (u.every(function(m) {
        return !m.__N;
      })) return !r || r.call(this, o, p, d);
      var l = i.__c.props !== o;
      return u.forEach(function(m) {
        if (m.__N) {
          var h = m.__[0];
          m.__ = m.__N, m.__N = void 0, h !== m.__[0] && (l = !0);
        }
      }), r && r.call(this, o, p, d) || l;
    };
    ne.__f = !0;
    var r = ne.shouldComponentUpdate, c = ne.componentWillUpdate;
    ne.componentWillUpdate = function(o, p, d) {
      if (this.__e) {
        var u = r;
        r = void 0, a(o, p, d), r = u;
      }
      c && c.call(this, o, p, d);
    }, ne.shouldComponentUpdate = a;
  }
  return i.__N || i.__;
}
function z(e, s) {
  var n = ft(Ce++, 3);
  !ie.__s && bs(n.__H, s) && (n.__ = e, n.u = s, ne.__H.__h.push(n));
}
function ee(e) {
  return ke = 5, ae(function() {
    return { current: e };
  }, []);
}
function ae(e, s) {
  var n = ft(Ce++, 7);
  return bs(n.__H, s) && (n.__ = e(), n.__H = s, n.__h = e), n.__;
}
function X(e, s) {
  return ke = 8, ae(function() {
    return e;
  }, s);
}
function an() {
  for (var e; e = vs.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Ee), e.__H.__h.forEach(at), e.__H.__h = [];
  } catch (s) {
    e.__H.__h = [], ie.__e(s, e.__v);
  }
}
ie.__b = function(e) {
  ne = null, $t && $t(e);
}, ie.__ = function(e, s) {
  e && s.__k && s.__k.__m && (e.__m = s.__k.__m), Ht && Ht(e, s);
}, ie.__r = function(e) {
  Rt && Rt(e), Ce = 0;
  var s = (ne = e.__c).__H;
  s && (Ze === ne ? (s.__h = [], ne.__h = [], s.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (s.__h.forEach(Ee), s.__h.forEach(at), s.__h = [], Ce = 0)), Ze = ne;
}, ie.diffed = function(e) {
  Et && Et(e);
  var s = e.__c;
  s && s.__H && (s.__H.__h.length && (vs.push(s) !== 1 && Lt === ie.requestAnimationFrame || ((Lt = ie.requestAnimationFrame) || rn)(an)), s.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), Ze = ne = null;
}, ie.__c = function(e, s) {
  s.some(function(n) {
    try {
      n.__h.forEach(Ee), n.__h = n.__h.filter(function(i) {
        return !i.__ || at(i);
      });
    } catch (i) {
      s.some(function(a) {
        a.__h && (a.__h = []);
      }), s = [], ie.__e(i, n.__v);
    }
  }), Ot && Ot(e, s);
}, ie.unmount = function(e) {
  qt && qt(e);
  var s, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(i) {
    try {
      Ee(i);
    } catch (a) {
      s = a;
    }
  }), n.__H = void 0, s && ie.__e(s, n.__v));
};
var Ft = typeof requestAnimationFrame == "function";
function rn(e) {
  var s, n = function() {
    clearTimeout(i), Ft && cancelAnimationFrame(s), setTimeout(e);
  }, i = setTimeout(n, 35);
  Ft && (s = requestAnimationFrame(n));
}
function Ee(e) {
  var s = ne, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), ne = s;
}
function at(e) {
  var s = ne;
  e.__c = e.__(), ne = s;
}
function bs(e, s) {
  return !e || e.length !== s.length || s.some(function(n, i) {
    return n !== e[i];
  });
}
function ws(e, s) {
  return typeof s == "function" ? s(e) : s;
}
function on({ facilityName: e, orgSlug: s }) {
  const [n, i] = b(null), [a, r] = b(!0), [c, o] = b(null), p = X(async () => {
    r(!0), o(null);
    try {
      const d = new URLSearchParams({
        facilityName: e,
        orgSlug: s,
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
      console.error("[MDSCommandCenter] Failed to fetch dashboard:", d), o(d.message || "Failed to load dashboard");
    } finally {
      r(!1);
    }
  }, [e, s]);
  return z(() => {
    p();
  }, [p]), { data: n, loading: a, error: c, retry: p };
}
function cn({ facilityName: e, orgSlug: s, windowDays: n = 30, enabled: i = !1 }) {
  const [a, r] = b(null), [c, o] = b(!1), [p, d] = b(null);
  return z(() => {
    if (!i || !e) {
      r(null), d(null);
      return;
    }
    let u = !1;
    o(!0), d(null);
    async function l() {
      try {
        if (!(await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" })).authenticated)
          throw new Error("Please log in to view documentation risks");
        const h = getOrg(), _ = s || h?.org, v = new URLSearchParams({
          facilityName: e,
          orgSlug: _,
          windowDays: String(n)
        }), g = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/doc-risks?${v}`,
          options: { method: "GET" }
        });
        if (!g.success)
          throw new Error(g.error || "Failed to load documentation risks");
        u || r(g.data);
      } catch (m) {
        u || d(m.message || "Failed to load documentation risks");
      } finally {
        u || o(!1);
      }
    }
    return l(), () => {
      u = !0;
    };
  }, [e, s, n, i]), { data: a, loading: c, error: p };
}
function dn({ facilityName: e, orgSlug: s, enabled: n = !1 }) {
  const [i, a] = b(null), [r, c] = b(!1), [o, p] = b(null), d = X(async () => {
    if (!(!n || !e || !s)) {
      c(!0), p(null);
      try {
        const u = new URLSearchParams({ facilityName: e, orgSlug: s }), l = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/certifications/dashboard?${u}`,
          options: { method: "GET" }
        });
        if (!l.success) {
          a(null);
          return;
        }
        a(l.data || null);
      } catch (u) {
        console.warn("[Certifications] Dashboard unavailable:", u), a(null);
      } finally {
        c(!1);
      }
    }
  }, [e, s, n]);
  return z(() => {
    d();
  }, [d]), { data: i, loading: r, error: o, retry: d };
}
function Oe({
  options: e = [],
  value: s,
  onChange: n,
  placeholder: i = "Select…",
  size: a = "default",
  searchable: r = !1,
  searchPlaceholder: c = "Search…",
  className: o = "",
  ariaLabel: p,
  align: d = "left"
}) {
  const [u, l] = b(!1), [m, h] = b(""), [_, v] = b(-1), g = ee(null), C = ee(null), f = ee(null), x = e.find((N) => N.value === s) || null;
  z(() => {
    if (!u) return;
    const N = (w) => {
      g.current && !g.current.contains(w.target) && l(!1);
    };
    return document.addEventListener("mousedown", N, !0), () => document.removeEventListener("mousedown", N, !0);
  }, [u]), z(() => {
    u && (h(""), v(-1), r && C.current && requestAnimationFrame(() => C.current?.focus({ preventScroll: !0 })));
  }, [u, r]);
  const k = m.toLowerCase(), y = m ? e.filter(
    (N) => N.label.toLowerCase().includes(k) || N.subtitle && N.subtitle.toLowerCase().includes(k) || N.badge && N.badge.toLowerCase().includes(k)
  ) : e, S = X((N) => {
    if (!u && (N.key === "Enter" || N.key === " " || N.key === "ArrowDown")) {
      N.preventDefault(), l(!0);
      return;
    }
    if (u)
      switch (N.key) {
        case "ArrowDown":
          N.preventDefault(), v((w) => Math.min(w + 1, y.length - 1));
          break;
        case "ArrowUp":
          N.preventDefault(), v((w) => Math.max(w - 1, 0));
          break;
        case "Enter":
          N.preventDefault(), _ >= 0 && y[_] && (n(y[_].value), l(!1));
          break;
        case "Escape":
          N.preventDefault(), l(!1);
          break;
        case "Tab":
          l(!1);
          break;
      }
  }, [u, _, y, n]);
  return z(() => {
    if (_ < 0 || !f.current) return;
    f.current.children[_]?.scrollIntoView({ block: "nearest" });
  }, [_]), /* @__PURE__ */ t(
    "div",
    {
      class: `ss__root${a === "compact" ? " ss__root--compact" : ""} ${o}`,
      ref: g,
      onKeyDown: S,
      children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            class: `ss__trigger${u ? " ss__trigger--open" : ""}`,
            onClick: () => l(!u),
            "aria-haspopup": "listbox",
            "aria-expanded": u,
            "aria-label": p,
            children: [
              /* @__PURE__ */ t("span", { class: "ss__trigger-text", children: x ? x.label : /* @__PURE__ */ t("span", { class: "ss__placeholder", children: i }) }),
              /* @__PURE__ */ t("svg", { class: `ss__chevron${u ? " ss__chevron--open" : ""}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
            ]
          }
        ),
        u && /* @__PURE__ */ t("div", { class: `ss__dropdown${d === "right" ? " ss__dropdown--right" : ""}`, role: "listbox", children: [
          r && /* @__PURE__ */ t("div", { class: "ss__search-wrap", children: [
            /* @__PURE__ */ t("svg", { class: "ss__search-icon", width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
              /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "8" }),
              /* @__PURE__ */ t("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
            ] }),
            /* @__PURE__ */ t(
              "input",
              {
                ref: C,
                class: "ss__search",
                type: "text",
                placeholder: c,
                value: m,
                onInput: (N) => {
                  h(N.target.value), v(-1);
                },
                autocomplete: "off"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { class: "ss__list", ref: f, children: [
            y.map((N, w) => {
              const T = N.value === s;
              return /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  class: `ss__option${T ? " ss__option--active" : ""}${w === _ ? " ss__option--hl" : ""}`,
                  role: "option",
                  "aria-selected": T,
                  onClick: () => {
                    n(N.value), l(!1);
                  },
                  onMouseEnter: () => v(w),
                  children: [
                    /* @__PURE__ */ t("div", { class: "ss__option-body", children: [
                      /* @__PURE__ */ t("span", { class: "ss__option-label", children: N.label }),
                      N.subtitle && /* @__PURE__ */ t("span", { class: "ss__option-sub", children: N.subtitle })
                    ] }),
                    N.badge && /* @__PURE__ */ t("span", { class: "ss__option-badge", children: N.badge }),
                    T && /* @__PURE__ */ t("svg", { class: "ss__check", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 7L6 10L11 4", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                  ]
                },
                N.value
              );
            }),
            y.length === 0 && /* @__PURE__ */ t("div", { class: "ss__empty", children: "No matches" })
          ] })
        ] })
      ]
    }
  );
}
const ln = [
  { value: "all", label: "All", color: null },
  { value: "overdue", label: "Overdue", color: "#ef4444" },
  { value: "urgent", label: "Urgent", color: "#f97316" },
  { value: "approaching", label: "Approaching", color: "#eab308" },
  { value: "on_track", label: "On Track", color: "#22c55e" }
];
function Xe({ value: e, label: s, highlight: n }) {
  return /* @__PURE__ */ t("span", { class: `mds-cc__stat${n ? " mds-cc__stat--highlight" : ""}`, children: [
    /* @__PURE__ */ t("strong", { children: e }),
    " ",
    s
  ] });
}
function pn({
  summary: e,
  facilityName: s,
  onClose: n,
  activeView: i,
  onViewChange: a,
  queryCount: r,
  certCount: c,
  certsEnabled: o,
  docRiskCount: p,
  payerFilter: d,
  onPayerFilterChange: u,
  classFilter: l,
  onClassFilterChange: m,
  focusFilter: h,
  onFocusFilterChange: _,
  urgencyFilter: v,
  onUrgencyFilterChange: g
}) {
  const C = e?.total ?? 0, f = e?.urgent ?? 0, x = e?.hippsImprovements ?? e?.withHippsImprovements ?? 0, k = e?.pendingQueries ?? e?.pendingQueriesCount ?? 0, y = e?.totalRevenueOpportunityPerDay ?? 0;
  return /* @__PURE__ */ t("div", { class: "mds-cc__header", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__title-row", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__title-group", children: [
        /* @__PURE__ */ t("span", { class: "mds-cc__title", children: "MDS Command Center" }),
        s && /* @__PURE__ */ t("span", { class: "mds-cc__facility-name", children: s })
      ] }),
      /* @__PURE__ */ t("button", { class: "mds-cc__close-btn", onClick: n, "aria-label": "Close", children: /* @__PURE__ */ t("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
        /* @__PURE__ */ t("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ t("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      ] }) })
    ] }),
    /* @__PURE__ */ t("div", { class: "mds-cc__stats-strip", children: [
      /* @__PURE__ */ t(Xe, { value: C, label: "assessments" }),
      /* @__PURE__ */ t("span", { class: "mds-cc__stats-sep", children: "|" }),
      /* @__PURE__ */ t(Xe, { value: f, label: "urgent", highlight: f > 0 }),
      y > 0 && /* @__PURE__ */ t(Y, { children: [
        /* @__PURE__ */ t("span", { class: "mds-cc__stats-sep", children: "|" }),
        /* @__PURE__ */ t("span", { class: "mds-cc__stat mds-cc__stat--revenue", children: [
          /* @__PURE__ */ t("strong", { children: [
            "$",
            Math.round(y),
            "/day available"
          ] }),
          x > 0 && /* @__PURE__ */ t("span", { class: "mds-cc__stat-sub", children: [
            " across ",
            x,
            " improvements"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("span", { class: "mds-cc__stats-sep", children: "|" }),
      /* @__PURE__ */ t(Xe, { value: k, label: "pending queries", highlight: k > 0 }),
      p > 0 && /* @__PURE__ */ t(Y, { children: [
        /* @__PURE__ */ t("span", { class: "mds-cc__stats-sep", children: "|" }),
        /* @__PURE__ */ t("span", { class: "mds-cc__stat mds-cc__stat--amber", children: [
          "⚠",
          " ",
          /* @__PURE__ */ t("strong", { children: p }),
          " doc risk",
          p !== 1 ? "s" : ""
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: "mds-cc__view-switcher", children: [
      /* @__PURE__ */ t(
        "button",
        {
          class: `mds-cc__view-tab${i === "overview" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => a("overview"),
          children: "Overview"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          class: `mds-cc__view-tab${i === "assessments" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => a("assessments"),
          children: "Assessments"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          class: `mds-cc__view-tab${i === "queries" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => a("queries"),
          children: [
            "Queries",
            r > 0 && /* @__PURE__ */ t("span", { class: "mds-cc__view-tab-badge", children: r })
          ]
        }
      ),
      o && /* @__PURE__ */ t(
        "button",
        {
          class: `mds-cc__view-tab${i === "certs" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => a("certs"),
          children: [
            "Certs",
            c > 0 && /* @__PURE__ */ t("span", { class: "mds-cc__view-tab-badge", children: c })
          ]
        }
      ),
      p > 0 && /* @__PURE__ */ t(
        "button",
        {
          class: `mds-cc__view-tab${i === "docRisks" ? " mds-cc__view-tab--active" : ""}`,
          onClick: () => a("docRisks"),
          children: [
            "Doc Risks",
            /* @__PURE__ */ t("span", { class: "mds-cc__view-tab-badge mds-cc__view-tab-badge--amber", children: p })
          ]
        }
      )
    ] }),
    i === "assessments" && /* @__PURE__ */ t("div", { class: "mds-cc__filter-row", children: [
      /* @__PURE__ */ t(
        Oe,
        {
          size: "compact",
          options: [
            { value: "all", label: "All Classes" },
            { value: "pps_payment", label: "PPS / Payment" },
            { value: "obra_cmi", label: "OBRA / CMI" },
            { value: "end_of_stay", label: "End of Stay" }
          ],
          value: l,
          onChange: m,
          ariaLabel: "Assessment class filter"
        }
      ),
      /* @__PURE__ */ t(
        Oe,
        {
          size: "compact",
          options: [
            { value: "all", label: "All Payers" },
            { value: "medicare_a", label: "Medicare A" },
            { value: "medicaid", label: "Medicaid" },
            { value: "managed_care", label: "Managed Care" }
          ],
          value: d,
          onChange: u,
          ariaLabel: "Payer filter"
        }
      ),
      /* @__PURE__ */ t(
        Oe,
        {
          size: "compact",
          options: [
            { value: "all", label: "All Assessments" },
            { value: "revenue", label: "Revenue Opportunities" },
            { value: "issues", label: "Has Issues" }
          ],
          value: h,
          onChange: _,
          ariaLabel: "Focus filter"
        }
      )
    ] }),
    i === "assessments" && g && /* @__PURE__ */ t("div", { class: "mds-cc__urgency-pills", children: [
      ln.map((S) => {
        const E = v === S.value;
        return /* @__PURE__ */ t(
          "button",
          {
            class: `mds-cc__urgency-pill${E ? " mds-cc__urgency-pill--active" : ""}`,
            style: E && S.color ? { background: S.color, borderColor: S.color, color: "#fff" } : void 0,
            onClick: () => g(S.value),
            children: [
              S.color && /* @__PURE__ */ t("span", { class: "mds-cc__urgency-pill-dot", style: { background: E ? "#fff" : S.color } }),
              S.label
            ]
          },
          S.value
        );
      }),
      _ && /* @__PURE__ */ t(
        "button",
        {
          class: `mds-cc__urgency-pill mds-cc__revenue-pill${h === "revenue" ? " mds-cc__revenue-pill--active" : ""}`,
          onClick: () => _(h === "revenue" ? "all" : "revenue"),
          title: "Show only assessments with revenue opportunities",
          children: [
            /* @__PURE__ */ t("span", { class: "mds-cc__revenue-pill-icon", children: "$" }),
            "Revenue"
          ]
        }
      )
    ] })
  ] });
}
function Bt({ facilityName: e, orgSlug: s, status: n, patientId: i }) {
  const [a, r] = b([]), [c, o] = b(!0), [p, d] = b(null), u = X(async () => {
    if (!(!e || !s)) {
      o(!0), d(null);
      try {
        const l = new URLSearchParams({ facilityName: e, orgSlug: s });
        n && l.set("status", n), i && l.set("patientId", i);
        const m = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/certifications?${l}`,
          options: { method: "GET" }
        });
        if (!m.success)
          throw new Error(m.error || "Failed to load certifications");
        r(m.data?.certifications || []);
      } catch (l) {
        console.error("[Certifications] Failed to fetch certifications:", l), d(l.message || "Failed to load certifications");
      } finally {
        o(!1);
      }
    }
  }, [e, s, n, i]);
  return z(() => {
    u();
  }, [u]), { certs: a, loading: c, error: p, refetch: u };
}
const un = {
  initial: { label: "Initial", cls: "cert__type-badge--initial" },
  day_14_recert: { label: "Day 14", cls: "cert__type-badge--recert" },
  day_30_recert: { label: "Day 30", cls: "cert__type-badge--recert" }
};
function yt({ type: e }) {
  const s = un[e];
  return s ? /* @__PURE__ */ t("span", { class: `cert__type-badge ${s.cls}`, children: s.label }) : null;
}
function mn(e) {
  if (!e) return null;
  const s = new Date(e), n = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0), Math.floor((s - n) / 864e5);
}
function hn(e) {
  if (!e) return "";
  const s = new Date(e);
  return isNaN(s) ? e : s.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Ds({ status: e, isDelayed: s, dueDate: n, signedAt: i }) {
  const a = mn(n), r = a !== null && a < 0, c = a !== null && a >= 0 && a <= 3;
  if ((s || e === "delayed") && r) {
    const o = Math.abs(a);
    return /* @__PURE__ */ t("span", { class: "cert__status-badge cert__status-badge--overdue", children: [
      o,
      " DAY",
      o !== 1 ? "S" : "",
      " OVERDUE"
    ] });
  }
  if (r && (e === "pending" || e === "sent")) {
    const o = Math.abs(a);
    return /* @__PURE__ */ t("span", { class: "cert__status-badge cert__status-badge--overdue", children: [
      o,
      " DAY",
      o !== 1 ? "S" : "",
      " OVERDUE"
    ] });
  }
  if (c && e !== "signed" && e !== "skipped") {
    const o = a === 0 ? "DUE TODAY" : `DUE IN ${a} DAY${a !== 1 ? "S" : ""}`;
    return /* @__PURE__ */ t("span", { class: "cert__status-badge cert__status-badge--due-soon", children: o });
  }
  return e === "sent" ? /* @__PURE__ */ t("span", { class: "cert__status-badge cert__status-badge--awaiting", children: "AWAITING SIGNATURE" }) : e === "signed" ? /* @__PURE__ */ t("span", { class: "cert__status-badge cert__status-badge--signed", children: [
    "Signed ",
    hn(i)
  ] }) : e === "delayed" || s ? /* @__PURE__ */ t("span", { class: "cert__status-badge cert__status-badge--delayed", children: "DELAYED" }) : e === "skipped" ? /* @__PURE__ */ t("span", { class: "cert__status-badge cert__status-badge--skipped", children: "SKIPPED" }) : /* @__PURE__ */ t("span", { class: "cert__status-badge cert__status-badge--pending", children: "PENDING" });
}
function _n({ payerType: e }) {
  return e !== "managed_care" ? null : /* @__PURE__ */ t("span", { class: "cert__ma-badge", children: "MA" });
}
function gn(e) {
  if (!e) return "";
  const s = new Date(e);
  return isNaN(s) ? e : s.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function fn(e) {
  if (!e) return "";
  const s = new Date(e);
  return isNaN(s) ? e : s.toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
function Is(e) {
  if (!e) return null;
  const s = new Date(e), n = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0), Math.floor((s - n) / 864e5);
}
function yn(e) {
  const s = Is(e.dueDate), n = s !== null && s < 0, i = e.sends?.length > 0;
  return e.status === "skipped" ? { label: "Unskip", variant: "ghost", action: "unskip" } : e.status === "signed" ? null : n ? { label: i ? "Resend" : "Send", variant: "destructive", action: "send" } : e.status === "delayed" ? { label: i ? "Resend" : "Send", variant: "destructive", action: "send" } : i ? { label: "Resend", variant: "outline", action: "send" } : { label: "Send", variant: "primary", action: "send" };
}
function vn({ sends: e }) {
  if (!e || e.length === 0) return null;
  const s = e.length === 1 ? `Sent to ${e[0].practitionerName}` : `Sent ${e.length} times`;
  return /* @__PURE__ */ t("span", { class: "cert__row-meta cert__row-meta--link cert__sends-summary", children: s });
}
function bn({ sends: e }) {
  return /* @__PURE__ */ t("div", { class: "cert__sends-detail", children: e.map((s, n) => /* @__PURE__ */ t("div", { class: "cert__sends-detail-row", children: [
    /* @__PURE__ */ t("span", { class: "cert__sends-detail-name", children: [
      s.practitionerName,
      s.practitionerTitle ? `, ${s.practitionerTitle}` : ""
    ] }),
    /* @__PURE__ */ t("span", { class: "cert__sends-detail-date", children: fn(s.sentAt) }),
    s.smsStatus && /* @__PURE__ */ t("span", { class: `cert__sends-detail-status cert__sends-detail-status--${s.smsStatus}`, children: s.smsStatus })
  ] }, n)) });
}
function Gt({ cert: e, compact: s, onSend: n, onSkip: i, onUnskip: a, onDelay: r, onEditReason: c, onViewPractitioner: o }) {
  const [p, d] = b(!1), [u, l] = b(!1), m = ee(null);
  z(() => {
    if (!p) return;
    const w = (T) => {
      m.current && !m.current.contains(T.target) && d(!1);
    };
    return document.addEventListener("click", w, !0), () => document.removeEventListener("click", w, !0);
  }, [p]);
  const h = yn(e), _ = e.type === "day_14_recert" || e.type === "day_30_recert", v = e.status !== "skipped" && e.status !== "signed", g = e.status === "pending" && !e.isDelayed && e.status !== "signed", C = _ && e.status !== "signed", f = e.sends?.length > 0, x = Is(e.dueDate), k = x !== null && x < 0, y = x !== null && x >= 0 && x <= 3;
  let S = "";
  e.status === "signed" ? S = " cert__row--signed" : e.status === "skipped" ? S = " cert__row--skipped" : k || e.isDelayed ? S = " cert__row--overdue" : y && (S = " cert__row--due-soon");
  function E(w) {
    w.stopPropagation(), h && (h.action === "send" && n?.(e), h.action === "unskip" && a?.(e));
  }
  function N(w) {
    d(!1), w === "skip" && i?.(e), w === "delay" && r?.(e), w === "editReason" && c?.(e);
  }
  return /* @__PURE__ */ t("div", { class: `cert__row${S}`, children: [
    /* @__PURE__ */ t("div", { class: "cert__row-top", children: [
      /* @__PURE__ */ t("div", { class: "cert__row-left", children: [
        /* @__PURE__ */ t(yt, { type: e.type }),
        !s && /* @__PURE__ */ t("span", { class: "cert__row-patient", children: e.patientName }),
        !s && /* @__PURE__ */ t(_n, { payerType: e.payerType })
      ] }),
      /* @__PURE__ */ t("div", { class: "cert__row-right", children: [
        /* @__PURE__ */ t(
          Ds,
          {
            status: e.status,
            isDelayed: e.isDelayed,
            dueDate: e.dueDate,
            signedAt: e.signedAt
          }
        ),
        h && /* @__PURE__ */ t(
          "button",
          {
            class: `cert__row-action cert__row-action--${h.variant}`,
            onClick: E,
            children: h.label
          }
        ),
        (v || g || C) && /* @__PURE__ */ t("div", { class: "cert__row-menu-container", ref: m, children: [
          /* @__PURE__ */ t(
            "button",
            {
              class: "cert__row-menu-btn",
              onClick: (w) => {
                w.stopPropagation(), d(!p);
              },
              "aria-label": "More actions",
              children: /* @__PURE__ */ t("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: [
                /* @__PURE__ */ t("circle", { cx: "8", cy: "3", r: "1.5" }),
                /* @__PURE__ */ t("circle", { cx: "8", cy: "8", r: "1.5" }),
                /* @__PURE__ */ t("circle", { cx: "8", cy: "13", r: "1.5" })
              ] })
            }
          ),
          p && /* @__PURE__ */ t("div", { class: "cert__row-menu", children: [
            v && /* @__PURE__ */ t("button", { class: "cert__row-menu-item", onClick: () => N("skip"), children: "Skip Certification" }),
            g && /* @__PURE__ */ t("button", { class: "cert__row-menu-item", onClick: () => N("delay"), children: "Mark as Delayed" }),
            C && /* @__PURE__ */ t("button", { class: "cert__row-menu-item", onClick: () => N("editReason"), children: "Edit Clinical Reason" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: "cert__row-bottom", children: [
      e.dueDate && /* @__PURE__ */ t("span", { class: "cert__row-meta", children: [
        "Due ",
        gn(e.dueDate)
      ] }),
      !s && e.currentMedicareDay != null && /* @__PURE__ */ t("span", { class: "cert__row-meta", children: [
        "Medicare Day ",
        e.currentMedicareDay
      ] }),
      f && /* @__PURE__ */ t("span", { onClick: (w) => {
        w.stopPropagation(), l(!u);
      }, children: /* @__PURE__ */ t(vn, { sends: e.sends }) }),
      e.signedByName && /* @__PURE__ */ t(
        "span",
        {
          class: `cert__row-meta${e.signedByPractitionerId && o ? " cert__row-meta--link" : ""}`,
          onClick: e.signedByPractitionerId && o ? (w) => {
            w.stopPropagation(), o(e.signedByPractitionerId);
          } : void 0,
          children: [
            e.signedByName,
            e.signedByTitle ? `, ${e.signedByTitle}` : ""
          ]
        }
      )
    ] }),
    u && f && /* @__PURE__ */ t(bn, { sends: e.sends })
  ] });
}
function wn({ payerType: e }) {
  const s = e === "managed_care";
  return /* @__PURE__ */ t("span", { class: `cert__stay-type-badge${s ? " cert__stay-type-badge--managed" : ""}`, children: s ? "Managed" : "Med A" });
}
function Dn(e) {
  if (!e) return "";
  const s = new Date(e);
  return isNaN(s) ? e : s.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function rt(e) {
  if (!e) return null;
  const s = new Date(e), n = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0), Math.floor((s - n) / 864e5);
}
const In = ["initial", "day_14_recert", "day_30_recert"], Cn = { initial: "I", day_14_recert: "14", day_30_recert: "30" };
function kn(e) {
  if (!e) return "empty";
  const s = rt(e.dueDate), n = s !== null && s < 0;
  return e.status === "signed" ? "signed" : e.status === "skipped" ? "skipped" : n || e.isDelayed ? "overdue" : e.status === "sent" ? "sent" : s !== null && s >= 0 && s <= 3 ? "due-soon" : "pending";
}
function Sn({ allCerts: e }) {
  const s = {};
  for (const n of e)
    s[n.type] = n;
  return /* @__PURE__ */ t("div", { class: "cert__chain-indicator", children: In.map((n, i) => {
    const a = s[n], r = kn(a);
    return /* @__PURE__ */ t("span", { class: "cert__chain-item", children: [
      i > 0 && /* @__PURE__ */ t("span", { class: "cert__chain-line" }),
      /* @__PURE__ */ t("span", { class: `cert__chain-dot cert__chain-dot--${r}` }),
      /* @__PURE__ */ t("span", { class: `cert__chain-label cert__chain-label--${r}`, children: Cn[n] })
    ] }, n);
  }) });
}
function Nn({
  stayId: e,
  displayCerts: s,
  historyCerts: n,
  allCerts: i,
  onSend: a,
  onSkip: r,
  onDelay: c,
  onUnskip: o,
  onEditReason: p,
  onViewPractitioner: d
}) {
  const [u, l] = b(!1), m = i[0], h = m.patientName, _ = m.payerType, v = m.currentMedicareDay, g = m.partAStartDate, C = s.some((k) => {
    const y = rt(k.dueDate);
    return y !== null && y < 0 || k.isDelayed;
  }), f = !C && s.some((k) => {
    const y = rt(k.dueDate);
    return y !== null && y >= 0 && y <= 3;
  });
  let x = "";
  return C ? x = " cert__stay-card--overdue" : f && (x = " cert__stay-card--due-soon"), /* @__PURE__ */ t("div", { class: `cert__stay-card${x}`, children: [
    /* @__PURE__ */ t("div", { class: "cert__stay-header", children: [
      /* @__PURE__ */ t("div", { class: "cert__stay-header-left", children: [
        /* @__PURE__ */ t("span", { class: "cert__stay-patient", children: h }),
        /* @__PURE__ */ t(wn, { payerType: _ }),
        /* @__PURE__ */ t(Sn, { allCerts: i })
      ] }),
      /* @__PURE__ */ t("div", { class: "cert__stay-header-right", children: [
        v != null && /* @__PURE__ */ t("span", { class: "cert__stay-meta", children: [
          "Day ",
          v
        ] }),
        g && /* @__PURE__ */ t("span", { class: "cert__stay-meta", children: Dn(g) })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: "cert__stay-certs", children: s.map((k) => /* @__PURE__ */ t(
      Gt,
      {
        cert: k,
        compact: !0,
        onSend: a,
        onSkip: r,
        onDelay: c,
        onUnskip: o,
        onEditReason: p,
        onViewPractitioner: d
      },
      k.id
    )) }),
    n.length > 0 && /* @__PURE__ */ t("div", { class: "cert__stay-history", children: [
      /* @__PURE__ */ t(
        "button",
        {
          class: "cert__stay-history-toggle",
          onClick: () => l(!u),
          children: [
            /* @__PURE__ */ t("span", { class: "cert__stay-history-icon", children: u ? "▼" : "▶" }),
            n.length,
            " previous certification",
            n.length !== 1 ? "s" : ""
          ]
        }
      ),
      u && /* @__PURE__ */ t("div", { class: "cert__stay-history-list", children: n.map((k) => /* @__PURE__ */ t(
        Gt,
        {
          cert: k,
          compact: !0,
          onSend: a,
          onSkip: r,
          onDelay: c,
          onUnskip: o,
          onEditReason: p,
          onViewPractitioner: d
        },
        k.id
      )) })
    ] })
  ] });
}
function Qe({ isOpen: e, onClose: s, title: n, subtitle: i, children: a, actions: r = [] }) {
  const c = ee(null);
  return z(() => {
    if (!e) return;
    const o = (p) => {
      p.key === "Escape" && s();
    };
    return document.addEventListener("keydown", o), document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", o), document.body.style.overflow = "";
    };
  }, [e, s]), e ? /* @__PURE__ */ t(
    "div",
    {
      class: "cm-overlay",
      ref: c,
      onClick: (o) => {
        o.target === c.current && s();
      },
      children: /* @__PURE__ */ t("div", { class: "cm", children: [
        /* @__PURE__ */ t("div", { class: "cm__header", children: [
          /* @__PURE__ */ t("div", { class: "cm__header-text", children: [
            /* @__PURE__ */ t("h2", { class: "cm__title", children: n }),
            i && /* @__PURE__ */ t("span", { class: "cm__subtitle", children: i })
          ] }),
          /* @__PURE__ */ t("button", { class: "cm__close", onClick: s, "aria-label": "Close", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", children: /* @__PURE__ */ t("path", { d: "M1 1l12 12M13 1L1 13" }) }) })
        ] }),
        /* @__PURE__ */ t("div", { class: "cm__body", children: a }),
        r.length > 0 && /* @__PURE__ */ t("div", { class: "cm__footer", children: r.map((o, p) => /* @__PURE__ */ t(
          "button",
          {
            class: `cm__btn cm__btn--${o.variant || "secondary"}`,
            onClick: o.onClick,
            disabled: o.disabled,
            children: o.label
          },
          p
        )) })
      ] })
    }
  ) : null;
}
const xn = [
  { value: "home_health", label: "Home Health Agency" },
  { value: "facility_care", label: "Facility Care" },
  { value: "other", label: "Other" }
];
function Cs(e) {
  return e ? e === "Home Health Agency" ? { option: "home_health", otherText: "" } : e === "Facility Care" ? { option: "facility_care", otherText: "" } : e.startsWith("Other: ") ? { option: "other", otherText: e.slice(7) } : { option: "other", otherText: e } : { option: "", otherText: "" };
}
function ks(e, s) {
  return e === "home_health" ? "Home Health Agency" : e === "facility_care" ? "Facility Care" : e === "other" ? `Other: ${s}` : "";
}
function ot(e, s) {
  return e ? e === "other" ? s.trim().length > 0 : !0 : !1;
}
function Ss({ option: e, otherText: s, onOptionChange: n, onOtherTextChange: i }) {
  return /* @__PURE__ */ t("div", { class: "cm-discharge", children: [
    xn.map((a) => /* @__PURE__ */ t(
      "label",
      {
        class: `cm-discharge__option${e === a.value ? " cm-discharge__option--selected" : ""}`,
        children: [
          /* @__PURE__ */ t(
            "input",
            {
              type: "radio",
              class: "cm-discharge__radio",
              name: "dischargePlan",
              value: a.value,
              checked: e === a.value,
              onChange: () => n(a.value)
            }
          ),
          /* @__PURE__ */ t("span", { class: "cm-discharge__dot" }),
          /* @__PURE__ */ t("span", { class: "cm-discharge__label", children: a.label })
        ]
      },
      a.value
    )),
    e === "other" && /* @__PURE__ */ t(
      "input",
      {
        class: "cm-input cm-discharge__other-input",
        type: "text",
        value: s,
        onInput: (a) => i(a.target.value),
        placeholder: "e.g., Assisted living, long-term care, hospice...",
        autoFocus: !0
      }
    )
  ] });
}
function Ns({ isOpen: e, onClose: s, cert: n, facilityName: i, orgSlug: a, onSent: r }) {
  const [c, o] = b(""), [p, d] = b(30), [u, l] = b(""), [m, h] = b(""), [_, v] = b(""), [g, C] = b([]), [f, x] = b(!1), [k, y] = b(/* @__PURE__ */ new Set()), [S, E] = b(!1), N = n?.type === "day_14_recert" || n?.type === "day_30_recert", w = n?.isDelayed, T = n?.type === "initial" ? "Initial" : n?.type === "day_14_recert" ? "Day 14 Recert" : "Day 30 Recert";
  z(() => {
    if (!e || !n) return;
    o(n.clinicalReason || ""), d(n.estimatedDays || 30);
    const $ = Cs(n.planForDischarge);
    l($.option), h($.otherText), v(n.delayReason || ""), y(/* @__PURE__ */ new Set()), x(!0), window.CertAPI.fetchPractitioners(i, a).then((M) => C(M)).catch((M) => console.error("[Certifications] Failed to load practitioners:", M)).finally(() => x(!1));
  }, [e, n?.id]);
  function F() {
    if (k.size === 0 || N && !c.trim() || N && !ot(u, m) || w && !_.trim()) return;
    E(!0);
    const $ = ks(u, m);
    (N ? window.CertAPI.saveClinicalReason(n.id, { clinicalReason: c, estimatedDays: p, planForDischarge: $ }) : Promise.resolve()).then(() => window.CertAPI.sendCert(n.id, [...k], w ? _ : void 0)).then(() => {
      const G = g.filter((Q) => k.has(Q.id)).map((Q) => `${Q.firstName} ${Q.lastName}`), K = G.length <= 2 ? G.join(" & ") : `${G.length} practitioners`;
      window.SuperToast?.success?.(`${T} for ${n.patientName} sent to ${K}`), r?.(), s();
    }).catch((G) => {
      console.error("[Certifications] Failed to send:", G), window.SuperToast?.error?.("Failed to send certification");
    }).finally(() => E(!1));
  }
  function V($) {
    y((M) => {
      const G = new Set(M);
      return G.has($) ? G.delete($) : G.add($), G;
    });
  }
  function D() {
    y(
      ($) => $.size === g.length ? /* @__PURE__ */ new Set() : new Set(g.map((M) => M.id))
    );
  }
  if (!n) return null;
  const B = k.size > 0 && (!N || c.trim()) && (!N || ot(u, m)) && (!w || _.trim()) && !S;
  return /* @__PURE__ */ t(
    Qe,
    {
      isOpen: e,
      onClose: s,
      title: "Send Certification",
      subtitle: `${n.patientName} · ${T}`,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: s },
        {
          label: S ? "Sending..." : `Send to ${k.size} practitioner${k.size !== 1 ? "s" : ""}`,
          variant: "primary",
          onClick: F,
          disabled: !B
        }
      ],
      children: [
        N && /* @__PURE__ */ t("div", { class: "cm-section", children: [
          /* @__PURE__ */ t("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ t("span", { class: "cm-section__icon", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
              /* @__PURE__ */ t("polyline", { points: "14 2 14 8 20 8" }),
              /* @__PURE__ */ t("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
              /* @__PURE__ */ t("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
            ] }) }),
            /* @__PURE__ */ t("span", { class: "cm-section__label", children: "Clinical Reason" })
          ] }),
          /* @__PURE__ */ t(
            "textarea",
            {
              class: "cm-input cm-input--textarea",
              rows: 2,
              value: c,
              onInput: ($) => o($.target.value),
              placeholder: "Reason for continued skilled nursing care..."
            }
          ),
          /* @__PURE__ */ t("div", { class: "cm-section__row", children: [
            /* @__PURE__ */ t("span", { class: "cm-section__meta", children: "Estimated stay" }),
            /* @__PURE__ */ t("div", { class: "cm-input--days-wrap", children: [
              /* @__PURE__ */ t(
                "input",
                {
                  class: "cm-input cm-input--days",
                  type: "number",
                  min: 1,
                  value: p,
                  onInput: ($) => d(parseInt($.target.value) || 30)
                }
              ),
              /* @__PURE__ */ t("span", { class: "cm-input--days-unit", children: "days" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { class: "cm-section__divider" }),
          /* @__PURE__ */ t("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ t("span", { class: "cm-section__icon", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ t("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
              /* @__PURE__ */ t("polyline", { points: "9 22 9 12 15 12 15 22" })
            ] }) }),
            /* @__PURE__ */ t("span", { class: "cm-section__label", children: "Plan for Discharge" })
          ] }),
          /* @__PURE__ */ t(
            Ss,
            {
              option: u,
              otherText: m,
              onOptionChange: l,
              onOtherTextChange: h
            }
          )
        ] }),
        w && /* @__PURE__ */ t("div", { class: "cm-section cm-section--warn", children: [
          /* @__PURE__ */ t("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ t("span", { class: "cm-section__icon cm-section__icon--warn", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ t("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
              /* @__PURE__ */ t("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
            ] }) }),
            /* @__PURE__ */ t("span", { class: "cm-section__label", children: "Delay Reason" }),
            /* @__PURE__ */ t("span", { class: "cm-section__badge cm-section__badge--warn", children: "Required" })
          ] }),
          /* @__PURE__ */ t("p", { class: "cm-section__hint", children: "This certification is overdue. Document the reason for compliance." }),
          /* @__PURE__ */ t(
            "textarea",
            {
              class: "cm-input cm-input--textarea",
              rows: 2,
              value: _,
              onInput: ($) => v($.target.value),
              placeholder: "Why was this certification delayed..."
            }
          )
        ] }),
        n.sends?.length > 0 && /* @__PURE__ */ t("div", { class: "cm-notice", children: [
          /* @__PURE__ */ t("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ t("path", { d: "M12 16v-4M12 8h.01" })
          ] }),
          "Previously sent to ",
          n.sends.map(($) => $.practitionerName).join(", ")
        ] }),
        /* @__PURE__ */ t("div", { class: "cm-section", children: [
          /* @__PURE__ */ t("div", { class: "cm-section__head", children: [
            /* @__PURE__ */ t("span", { class: "cm-section__icon", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ t("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
              /* @__PURE__ */ t("circle", { cx: "9", cy: "7", r: "4" }),
              /* @__PURE__ */ t("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
            ] }) }),
            /* @__PURE__ */ t("span", { class: "cm-section__label", children: "Send to" }),
            /* @__PURE__ */ t("span", { class: "cm-section__count", children: [
              k.size,
              " of ",
              g.length
            ] })
          ] }),
          f ? /* @__PURE__ */ t("div", { class: "cm-loading", children: [
            /* @__PURE__ */ t("div", { class: "cm-loading__spinner" }),
            "Loading practitioners..."
          ] }) : /* @__PURE__ */ t("div", { class: "cm-practitioners", children: [
            /* @__PURE__ */ t("label", { class: "cm-pract cm-pract--all", children: [
              /* @__PURE__ */ t(
                "input",
                {
                  type: "checkbox",
                  class: "cm-check",
                  checked: k.size === g.length && g.length > 0,
                  onChange: D
                }
              ),
              /* @__PURE__ */ t("span", { class: "cm-check-box" }),
              /* @__PURE__ */ t("span", { class: "cm-pract__label", children: "Select all" })
            ] }),
            g.map(($) => /* @__PURE__ */ t("label", { class: `cm-pract${k.has($.id) ? " cm-pract--selected" : ""}`, children: [
              /* @__PURE__ */ t(
                "input",
                {
                  type: "checkbox",
                  class: "cm-check",
                  checked: k.has($.id),
                  onChange: () => V($.id)
                }
              ),
              /* @__PURE__ */ t("span", { class: "cm-check-box" }),
              /* @__PURE__ */ t("span", { class: "cm-pract__label", children: [
                $.firstName,
                " ",
                $.lastName,
                $.title && /* @__PURE__ */ t("span", { class: "cm-pract__title", children: $.title })
              ] })
            ] }, $.id))
          ] })
        ] })
      ]
    }
  );
}
function xs({ isOpen: e, onClose: s, cert: n, onSkipped: i }) {
  const [a, r] = b(""), [c, o] = b(!1);
  function p() {
    a.trim() && (o(!0), i(a).then(() => {
      r(""), s();
    }).catch(() => o(!1)));
  }
  return /* @__PURE__ */ t(
    Qe,
    {
      isOpen: e,
      onClose: s,
      title: "Skip Certification",
      subtitle: n?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: s },
        { label: c ? "Skipping..." : "Skip", variant: "primary", onClick: p, disabled: !a.trim() || c }
      ],
      children: /* @__PURE__ */ t("div", { class: "cm-section", children: [
        /* @__PURE__ */ t("div", { class: "cm-section__head", children: /* @__PURE__ */ t("span", { class: "cm-section__label", children: "Reason for Skipping" }) }),
        /* @__PURE__ */ t(
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
function Pn({ isOpen: e, onClose: s, cert: n, onSaved: i }) {
  const [a, r] = b(""), [c, o] = b(30), [p, d] = b(""), [u, l] = b(""), [m, h] = b(!1);
  z(() => {
    if (e && n) {
      r(n.clinicalReason || ""), o(n.estimatedDays || 30);
      const g = Cs(n.planForDischarge);
      d(g.option), l(g.otherText);
    }
  }, [e, n?.id]);
  const _ = a.trim() && ot(p, u) && !m;
  function v() {
    if (!_) return;
    h(!0);
    const g = ks(p, u);
    i({ clinicalReason: a, estimatedDays: c, planForDischarge: g }).then(() => s()).catch(() => h(!1));
  }
  return /* @__PURE__ */ t(
    Qe,
    {
      isOpen: e,
      onClose: s,
      title: "Edit Clinical Reason",
      subtitle: n?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: s },
        { label: m ? "Saving..." : "Save", variant: "primary", onClick: v, disabled: !_ }
      ],
      children: /* @__PURE__ */ t("div", { class: "cm-section", children: [
        /* @__PURE__ */ t("div", { class: "cm-section__head", children: [
          /* @__PURE__ */ t("span", { class: "cm-section__icon", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
            /* @__PURE__ */ t("polyline", { points: "14 2 14 8 20 8" }),
            /* @__PURE__ */ t("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
            /* @__PURE__ */ t("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
          ] }) }),
          /* @__PURE__ */ t("span", { class: "cm-section__label", children: "Clinical Reason" })
        ] }),
        /* @__PURE__ */ t(
          "textarea",
          {
            class: "cm-input cm-input--textarea",
            rows: 3,
            value: a,
            onInput: (g) => r(g.target.value),
            placeholder: "Describe the clinical reason for continued skilled nursing care..."
          }
        ),
        /* @__PURE__ */ t("div", { class: "cm-section__row", children: [
          /* @__PURE__ */ t("span", { class: "cm-section__meta", children: "Estimated stay" }),
          /* @__PURE__ */ t("div", { class: "cm-input--days-wrap", children: [
            /* @__PURE__ */ t(
              "input",
              {
                class: "cm-input cm-input--days",
                type: "number",
                min: 1,
                value: c,
                onInput: (g) => o(parseInt(g.target.value) || 30)
              }
            ),
            /* @__PURE__ */ t("span", { class: "cm-input--days-unit", children: "days" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { class: "cm-section__divider" }),
        /* @__PURE__ */ t("div", { class: "cm-section__head", children: [
          /* @__PURE__ */ t("span", { class: "cm-section__icon", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ t("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
            /* @__PURE__ */ t("polyline", { points: "9 22 9 12 15 12 15 22" })
          ] }) }),
          /* @__PURE__ */ t("span", { class: "cm-section__label", children: "Plan for Discharge" })
        ] }),
        /* @__PURE__ */ t(
          Ss,
          {
            option: p,
            otherText: u,
            onOptionChange: d,
            onOtherTextChange: l
          }
        )
      ] })
    }
  );
}
function Ps({ isOpen: e, onClose: s, cert: n, onDelayed: i }) {
  const [a, r] = b(""), [c, o] = b(!1);
  function p() {
    a.trim() && (o(!0), i(a).then(() => {
      r(""), s();
    }).catch(() => o(!1)));
  }
  return /* @__PURE__ */ t(
    Qe,
    {
      isOpen: e,
      onClose: s,
      title: "Mark as Delayed",
      subtitle: n?.patientName,
      actions: [
        { label: "Cancel", variant: "secondary", onClick: s },
        { label: c ? "Saving..." : "Mark Delayed", variant: "primary", onClick: p, disabled: !a.trim() || c }
      ],
      children: /* @__PURE__ */ t("div", { class: "cm-section cm-section--warn", children: [
        /* @__PURE__ */ t("div", { class: "cm-section__head", children: [
          /* @__PURE__ */ t("span", { class: "cm-section__icon cm-section__icon--warn", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ t("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
            /* @__PURE__ */ t("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
          ] }) }),
          /* @__PURE__ */ t("span", { class: "cm-section__label", children: "Delay Reason" }),
          /* @__PURE__ */ t("span", { class: "cm-section__badge cm-section__badge--warn", children: "Required" })
        ] }),
        /* @__PURE__ */ t("p", { class: "cm-section__hint", children: "This will log a delay reason for compliance. The cert remains unsent." }),
        /* @__PURE__ */ t(
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
function Tn(e) {
  const [s, n] = b(null), [i, a] = b(!1), [r, c] = b(null), [o, p] = b(0), d = X(() => {
    p((u) => u + 1);
  }, []);
  return z(() => {
    if (!e || !window.CertAPI) {
      n(null);
      return;
    }
    let u = !1;
    return a(!0), c(null), window.CertAPI.fetchPractitionerWorkload(e).then((l) => {
      u || n(l);
    }).catch((l) => {
      u || c(l.message || "Failed to load practitioner data");
    }).finally(() => {
      u || a(!1);
    }), () => {
      u = !0;
    };
  }, [e, o]), { data: s, loading: i, error: r, retry: d };
}
function ct(e) {
  if (!e) return "";
  const s = new Date(e);
  return isNaN(s) ? e : s.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function An({ item: e }) {
  const s = !!e.type && (e.type === "initial" || e.type.includes("recert"));
  return /* @__PURE__ */ t("div", { class: "cert__workload-row", children: [
    /* @__PURE__ */ t("div", { class: "cert__workload-row-top", children: s ? /* @__PURE__ */ t(Y, { children: [
      /* @__PURE__ */ t(yt, { type: e.type }),
      /* @__PURE__ */ t("span", { class: "cert__workload-patient", children: e.patientName }),
      /* @__PURE__ */ t(
        Ds,
        {
          status: e.status,
          isDelayed: e.isDelayed,
          dueDate: e.dueDate,
          signedAt: e.signedAt
        }
      )
    ] }) : /* @__PURE__ */ t(Y, { children: [
      /* @__PURE__ */ t("span", { class: "cert__workload-query-badge", children: "Query" }),
      /* @__PURE__ */ t("span", { class: "cert__workload-patient", children: e.patientName }),
      e.mdsItem && /* @__PURE__ */ t("span", { class: "cert__workload-meta", children: [
        e.mdsItem,
        e.mdsItemName ? ` — ${e.mdsItemName}` : ""
      ] })
    ] }) }),
    /* @__PURE__ */ t("div", { class: "cert__workload-row-bottom", children: [
      s && e.dueDate && /* @__PURE__ */ t("span", { class: "cert__row-meta", children: [
        "Due ",
        ct(e.dueDate)
      ] }),
      !s && e.sentAt && /* @__PURE__ */ t("span", { class: "cert__row-meta", children: [
        "Sent ",
        ct(e.sentAt)
      ] })
    ] })
  ] });
}
function Mn({ item: e }) {
  const s = !!e.type && (e.type === "initial" || e.type.includes("recert"));
  return /* @__PURE__ */ t("div", { class: "cert__workload-row", children: [
    /* @__PURE__ */ t("div", { class: "cert__workload-row-top", children: s ? /* @__PURE__ */ t(Y, { children: [
      /* @__PURE__ */ t(yt, { type: e.type }),
      /* @__PURE__ */ t("span", { class: "cert__workload-patient", children: e.patientName })
    ] }) : /* @__PURE__ */ t(Y, { children: [
      /* @__PURE__ */ t("span", { class: "cert__workload-query-badge", children: "Query" }),
      /* @__PURE__ */ t("span", { class: "cert__workload-patient", children: e.patientName }),
      e.mdsItem && /* @__PURE__ */ t("span", { class: "cert__workload-meta", children: e.mdsItem })
    ] }) }),
    /* @__PURE__ */ t("div", { class: "cert__workload-row-bottom", children: [
      e.signedAt && /* @__PURE__ */ t("span", { class: "cert__row-meta", children: [
        "Signed ",
        ct(e.signedAt)
      ] }),
      !s && e.selectedIcd10Code && /* @__PURE__ */ t("span", { class: "cert__row-meta", children: [
        "ICD-10: ",
        e.selectedIcd10Code
      ] })
    ] })
  ] });
}
function Ln({ practitionerId: e, onBack: s }) {
  const { data: n, loading: i, error: a, retry: r } = Tn(e);
  if (i)
    return /* @__PURE__ */ t("div", { class: "cert__workload", children: [
      /* @__PURE__ */ t("div", { class: "cert__workload-header", children: /* @__PURE__ */ t("button", { class: "cert__workload-back", onClick: s, children: [
        "←",
        " Back to Certs"
      ] }) }),
      /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__spinner" }),
        /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: "Loading practitioner..." })
      ] })
    ] });
  if (a)
    return /* @__PURE__ */ t("div", { class: "cert__workload", children: [
      /* @__PURE__ */ t("div", { class: "cert__workload-header", children: /* @__PURE__ */ t("button", { class: "cert__workload-back", onClick: s, children: [
        "←",
        " Back to Certs"
      ] }) }),
      /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__state-icon", children: "⚠" }),
        /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: a }),
        /* @__PURE__ */ t("button", { class: "mds-cc__retry-btn", onClick: r, children: "Retry" })
      ] })
    ] });
  if (!n) return null;
  const { practitioner: c, queue: o = [], recentlySigned: p = [] } = n;
  return /* @__PURE__ */ t("div", { class: "cert__workload", children: [
    /* @__PURE__ */ t("div", { class: "cert__workload-header", children: /* @__PURE__ */ t("button", { class: "cert__workload-back", onClick: s, children: [
      "←",
      " Back to Certs"
    ] }) }),
    /* @__PURE__ */ t("div", { class: "cert__workload-info", children: [
      /* @__PURE__ */ t("div", { class: "cert__workload-name", children: [
        c?.firstName,
        " ",
        c?.lastName,
        c?.title && /* @__PURE__ */ t("span", { class: "cert__workload-title", children: [
          ", ",
          c.title
        ] })
      ] }),
      c?.phone && /* @__PURE__ */ t("div", { class: "cert__workload-phone", children: c.phone })
    ] }),
    /* @__PURE__ */ t("div", { class: "cert__workload-section", children: [
      /* @__PURE__ */ t("div", { class: "cert__workload-section-header", children: [
        "In Queue",
        o.length > 0 && /* @__PURE__ */ t("span", { class: "cert__workload-section-count", children: o.length })
      ] }),
      o.length === 0 ? /* @__PURE__ */ t("div", { class: "cert__workload-empty", children: "No items in queue" }) : o.map((d, u) => /* @__PURE__ */ t(An, { item: d }, u))
    ] }),
    /* @__PURE__ */ t("div", { class: "cert__workload-section", children: [
      /* @__PURE__ */ t("div", { class: "cert__workload-section-header", children: [
        "Recently Signed",
        p.length > 0 && /* @__PURE__ */ t("span", { class: "cert__workload-section-count", children: p.length })
      ] }),
      p.length === 0 ? /* @__PURE__ */ t("div", { class: "cert__workload-empty", children: "No recent signatures" }) : p.map((d, u) => /* @__PURE__ */ t(Mn, { item: d }, u))
    ] })
  ] });
}
const $n = [
  { id: "action", label: "Action Needed" },
  { id: "awaiting", label: "Awaiting Signature" },
  { id: "overdue", label: "Overdue" },
  { id: "dueSoon", label: "Due Soon" },
  { id: "signed", label: "Signed" }
];
function dt(e) {
  if (!e) return null;
  const s = new Date(e), n = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0), Math.floor((s - n) / 864e5);
}
function Ut(e) {
  const s = dt(e.dueDate);
  return s !== null && s < 0 ? s : e.isDelayed ? -0.5 : s ?? 1 / 0;
}
const Rn = [
  { id: "all", label: "All" },
  { id: "medicare", label: "Med A" },
  { id: "managed", label: "Managed" }
];
function Vt(e, s) {
  return s === "all" ? !0 : s === "managed" ? e.payerType === "managed_care" : e.payerType !== "managed_care";
}
function En({ facilityName: e, orgSlug: s, patientId: n, patientName: i }) {
  const [a, r] = b("action"), [c, o] = b("all"), [p, d] = b(null), [u, l] = b(null), [m, h] = b(null), [_, v] = b(null), [g, C] = b(null), { certs: f, loading: x, error: k, refetch: y } = Bt({
    facilityName: e,
    orgSlug: s,
    patientId: n
  }), { certs: S, loading: E, refetch: N } = Bt({
    facilityName: e,
    orgSlug: s,
    patientId: n,
    status: "signed"
  }), w = X(() => {
    y(), N();
  }, [y, N]), T = ae(
    () => f.filter((R) => Vt(R, c)),
    [f, c]
  ), F = ae(
    () => S.filter((R) => Vt(R, c)),
    [S, c]
  ), V = ae(() => {
    const R = f.length + S.length;
    let j = 0, te = 0;
    for (const I of [...f, ...S])
      I.payerType === "managed_care" ? te++ : j++;
    return { all: R, medicare: j, managed: te };
  }, [f, S]), D = ae(() => {
    let R = 0, j = 0, te = 0;
    for (const I of T) {
      const P = dt(I.dueDate);
      P !== null && P < 0 || I.isDelayed ? R++ : P !== null && P >= 0 && P <= 3 && j++, I.status === "sent" && te++;
    }
    return {
      action: T.length,
      awaiting: te,
      overdue: R,
      dueSoon: j,
      signed: F.length
    };
  }, [T, F]), B = ae(() => {
    let R;
    if (a === "signed" ? R = F : R = T.filter((I) => {
      const P = dt(I.dueDate), U = P !== null && P < 0, q = P !== null && P >= 0 && P <= 3;
      return a === "awaiting" ? I.status === "sent" : a === "overdue" ? U || I.isDelayed : a === "dueSoon" ? q && !U : !0;
    }), R.length === 0) return [];
    const j = {};
    for (const I of R) {
      const P = I.partAStayId || I.id;
      j[P] || (j[P] = { stayId: P, displayCerts: [], historyCerts: [] }), j[P].displayCerts.push(I);
    }
    if (a !== "signed")
      for (const I of F) {
        const P = I.partAStayId;
        P && j[P] && j[P].historyCerts.push(I);
      }
    const te = Object.values(j);
    for (const I of te) {
      I.displayCerts.sort((U, q) => (U.sequenceNumber || 0) - (q.sequenceNumber || 0)), I.historyCerts.sort((U, q) => (U.sequenceNumber || 0) - (q.sequenceNumber || 0));
      const P = /* @__PURE__ */ new Set();
      I.allCerts = [];
      for (const U of [...I.displayCerts, ...I.historyCerts])
        P.has(U.id) || (P.add(U.id), I.allCerts.push(U));
      I.allCerts.sort((U, q) => (U.sequenceNumber || 0) - (q.sequenceNumber || 0));
    }
    return te.sort((I, P) => {
      const U = Math.min(...I.displayCerts.map(Ut)), q = Math.min(...P.displayCerts.map(Ut));
      return U - q;
    }), te;
  }, [T, F, a]);
  async function $(R) {
    await window.CertAPI.skipCert(m.id, R), window.SuperToast?.success?.("Certification skipped"), w();
  }
  async function M(R) {
    await window.CertAPI.delayCert(_.id, R), window.SuperToast?.success?.("Certification marked as delayed"), w();
  }
  async function G({ clinicalReason: R, estimatedDays: j, planForDischarge: te }) {
    await window.CertAPI.saveClinicalReason(g.id, { clinicalReason: R, estimatedDays: j, planForDischarge: te }), window.SuperToast?.success?.(`Clinical details updated for ${g.patientName}`), w();
  }
  async function K(R) {
    try {
      await window.CertAPI.unskipCert(R.id), window.SuperToast?.success?.("Certification restored"), w();
    } catch (j) {
      console.error("[Certifications] Failed to unskip:", j), window.SuperToast?.error?.("Failed to restore certification");
    }
  }
  const Q = a === "signed" ? E : x;
  return p ? /* @__PURE__ */ t("div", { class: "cert__view", children: /* @__PURE__ */ t(
    Ln,
    {
      practitionerId: p,
      onBack: () => d(null)
    }
  ) }) : /* @__PURE__ */ t("div", { class: "cert__view", children: [
    n && i && /* @__PURE__ */ t("div", { class: "cert__patient-banner", children: [
      "Showing certs for ",
      /* @__PURE__ */ t("strong", { children: i })
    ] }),
    /* @__PURE__ */ t("div", { class: "cert__filters", children: [
      /* @__PURE__ */ t("div", { class: "cert__stay-type-filter", children: Rn.map((R) => /* @__PURE__ */ t(
        "button",
        {
          class: `cert__stay-type-pill${c === R.id ? " cert__stay-type-pill--active" : ""}`,
          onClick: () => o(R.id),
          children: [
            R.label,
            V[R.id] > 0 && /* @__PURE__ */ t("span", { class: "cert__stay-type-pill-count", children: V[R.id] })
          ]
        },
        R.id
      )) }),
      /* @__PURE__ */ t("div", { class: "cert__sub-tabs", children: $n.map((R) => /* @__PURE__ */ t(
        "button",
        {
          class: `cert__sub-tab${a === R.id ? " cert__sub-tab--active" : ""}`,
          onClick: () => r(R.id),
          children: [
            R.label,
            D[R.id] > 0 && /* @__PURE__ */ t("span", { class: "cert__sub-tab-count", children: D[R.id] })
          ]
        },
        R.id
      )) })
    ] }),
    /* @__PURE__ */ t("div", { class: "cert__list", children: [
      Q && /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__spinner" }),
        /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: "Loading certifications..." })
      ] }),
      !Q && k && /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__state-icon", children: "⚠" }),
        /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: k }),
        /* @__PURE__ */ t("button", { class: "mds-cc__retry-btn", onClick: w, children: "Retry" })
      ] }),
      !Q && !k && B.length === 0 && /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__state-icon", children: a === "overdue" ? "✅" : "📋" }),
        /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: [
          a === "action" && "All certifications are up to date",
          a === "awaiting" && "No certifications awaiting signature",
          a === "overdue" && "No overdue certifications",
          a === "dueSoon" && "No certifications due soon",
          a === "signed" && "No certifications signed in the last 7 days"
        ] })
      ] }),
      !Q && !k && B.map((R) => /* @__PURE__ */ t(
        Nn,
        {
          stayId: R.stayId,
          displayCerts: R.displayCerts,
          historyCerts: R.historyCerts,
          allCerts: R.allCerts,
          onSend: (j) => l(j),
          onSkip: (j) => h(j),
          onDelay: (j) => v(j),
          onUnskip: K,
          onEditReason: (j) => C(j),
          onViewPractitioner: (j) => d(j)
        },
        R.stayId
      ))
    ] }),
    /* @__PURE__ */ t(
      Ns,
      {
        isOpen: !!u,
        onClose: () => l(null),
        cert: u,
        facilityName: e,
        orgSlug: s,
        onSent: w
      }
    ),
    /* @__PURE__ */ t(
      xs,
      {
        isOpen: !!m,
        onClose: () => h(null),
        cert: m,
        onSkipped: $
      }
    ),
    /* @__PURE__ */ t(
      Ps,
      {
        isOpen: !!_,
        onClose: () => v(null),
        cert: _,
        onDelayed: M
      }
    ),
    /* @__PURE__ */ t(
      Pn,
      {
        isOpen: !!g,
        onClose: () => C(null),
        cert: g,
        onSaved: G
      }
    )
  ] });
}
function We(e) {
  return !e || e.mode === "not_applicable" ? !1 : "isApplicable" in e ? !!e.isApplicable : !0;
}
function On(e) {
  if (!e) return "";
  switch (e.mode) {
    case "medicare":
      return "Medicare";
    case "state_rate":
      return e.stateName || "State Rate";
    case "cmi":
      return "CMI";
    default:
      return "";
  }
}
function qn(e) {
  return We(e) && e.delta > 0 ? e.delta : 0;
}
function Se(e, s = "long") {
  if (!We(e) || !(e.delta > 0)) return null;
  const n = s === "short" ? "/d" : "/day";
  switch (e.mode) {
    case "medicare":
      return `+$${Math.round(e.delta)}${n}`;
    case "state_rate":
      return `+$${Math.round(e.delta)}${n}`;
    case "cmi":
      return `+${e.delta.toFixed(2)} CMI`;
    default:
      return null;
  }
}
function zt(e) {
  return e ? e.replace(/_/g, "") : null;
}
function Hn(e) {
  if (!We(e) || !(e.delta > 0)) return null;
  const s = On(e), n = !!e.isEstimated;
  switch (e.mode) {
    case "medicare": {
      const i = e.current?.total, a = e.potential?.total;
      return i == null && a == null ? null : {
        current: i != null ? `$${Math.round(i).toLocaleString()}/day` : null,
        potential: a != null ? `$${Math.round(a).toLocaleString()}/day` : null,
        delta: `+$${Math.round(e.delta).toLocaleString()}/day`,
        label: s,
        isEstimated: n
      };
    }
    case "state_rate": {
      const i = e.current?.rate, a = e.potential?.rate;
      return i == null && a == null ? null : {
        current: i != null ? `$${Math.round(i).toLocaleString()}/day` : null,
        potential: a != null ? `$${Math.round(a).toLocaleString()}/day` : null,
        delta: `+$${Math.round(e.delta).toLocaleString()}/day`,
        label: s,
        isEstimated: n,
        currentGroupCode: zt(e.current?.groupCode),
        potentialGroupCode: zt(e.potential?.groupCode)
      };
    }
    case "cmi": {
      const i = e.current?.total, a = e.potential?.total;
      return i == null && a == null ? null : {
        current: i != null ? `${i.toFixed(3)} CMI` : null,
        potential: a != null ? `${a.toFixed(3)} CMI` : null,
        delta: `+${e.delta.toFixed(3)} CMI`,
        label: s,
        isEstimated: n
      };
    }
    default:
      return null;
  }
}
const Fn = {
  overdue: "#ef4444",
  urgent: "#f97316",
  approaching: "#eab308",
  on_track: "#22c55e",
  completed: "#6b7280"
}, Bn = {
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
function et({ label: e, status: s }) {
  const n = Bn[s];
  return n ? /* @__PURE__ */ t("span", { class: `mds-cc__uda-badge mds-cc__uda-badge--${n.cls}`, title: n.tip, children: [
    e,
    " ",
    n.icon
  ] }) : null;
}
function lt(e) {
  return e ? e.replace(/^(Medicare|Medicaid|Managed\s*Care)\s*[-\u2013\u2014]\s*/i, "").replace(/\s*\/\s*/g, " ").replace(/\s*-\s*None\s*PPS\s*/i, "").replace(/\s{2,}/g, " ").trim() || e : "";
}
function Gn(e, s) {
  if (!e) return { dateText: "", deadlineText: "", cls: "na" };
  const n = new Date(e);
  if (isNaN(n)) return { dateText: "", deadlineText: "", cls: "na" };
  const i = n.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  if ((s?.urgency || "on_track") === "completed")
    return { dateText: i, deadlineText: "", cls: "done" };
  const r = s?.completionDaysRemaining;
  if (r != null)
    return r < 0 ? { dateText: i, deadlineText: `${Math.abs(r)}d overdue`, cls: "overdue" } : r === 0 ? { dateText: i, deadlineText: "Due today", cls: "urgent" } : r <= 3 ? { dateText: i, deadlineText: `${r}d left`, cls: "urgent" } : r <= 7 ? { dateText: i, deadlineText: `${r}d left`, cls: "approaching" } : { dateText: i, deadlineText: `${r}d left`, cls: "ok" };
  const c = /* @__PURE__ */ new Date();
  c.setHours(0, 0, 0, 0);
  const o = new Date(n);
  o.setDate(o.getDate() + 14);
  const p = Math.round((o - c) / 864e5);
  return p < 0 ? { dateText: i, deadlineText: `${Math.abs(p)}d overdue`, cls: "overdue" } : p === 0 ? { dateText: i, deadlineText: "Due today", cls: "urgent" } : p <= 3 ? { dateText: i, deadlineText: `${p}d left`, cls: "urgent" } : p <= 7 ? { dateText: i, deadlineText: `${p}d left`, cls: "approaching" } : { dateText: i, deadlineText: `${p}d left`, cls: "ok" };
}
function Un({ assessment: e, isExpanded: s, onToggle: n, onOpenAnalyzer: i }) {
  const {
    patientName: a,
    assessmentType: r,
    ardDate: c,
    pdpm: o,
    assessmentClass: p,
    sectionProgress: d,
    udaSummary: u,
    querySummary: l
  } = e, m = e.deadlines, h = m?.urgency || "on_track", v = p === "end_of_stay" ? null : Se(o?.payment, "short"), g = Gn(c, m), C = d?.total > 0 && d.completed === d.total, f = (l?.pending || 0) + (l?.sent || 0);
  return /* @__PURE__ */ t(
    "div",
    {
      class: `mds-cc__card${s ? " mds-cc__card--expanded" : ""}`,
      style: { borderLeftColor: Fn[h] || "#9ca3af" },
      onClick: n,
      role: "button",
      tabIndex: 0,
      onKeyDown: (x) => {
        (x.key === "Enter" || x.key === " ") && (x.preventDefault(), n());
      },
      children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__card-line1", children: [
          /* @__PURE__ */ t("span", { class: "mds-cc__card-name", children: a || "Unknown" }),
          /* @__PURE__ */ t("span", { class: "mds-cc__card-badges", children: [
            /* @__PURE__ */ t(et, { label: "BIM", status: u?.bims }),
            /* @__PURE__ */ t(et, { label: "GG", status: u?.gg }),
            /* @__PURE__ */ t(et, { label: "PHQ", status: u?.phq9 }),
            d?.total > 0 && /* @__PURE__ */ t("span", { class: `mds-cc__card-progress${C ? " mds-cc__card-progress--done" : ""}`, children: [
              /* @__PURE__ */ t("span", { class: "mds-cc__card-progress-bar", children: /* @__PURE__ */ t(
                "span",
                {
                  class: "mds-cc__card-progress-fill",
                  style: { width: `${Math.round(d.completed / d.total * 100)}%` }
                }
              ) }),
              /* @__PURE__ */ t("span", { class: "mds-cc__card-progress-text", children: [
                d.completed,
                "/",
                d.total
              ] })
            ] }),
            v && /* @__PURE__ */ t(
              "span",
              {
                class: `mds-cc__card-revenue${i ? " mds-cc__card-revenue--clickable" : ""}`,
                onClick: i ? (x) => {
                  x.stopPropagation(), i();
                } : void 0,
                title: i ? "Open PDPM Analyzer" : void 0,
                role: i ? "button" : void 0,
                children: v
              }
            ),
            f > 0 && /* @__PURE__ */ t("span", { class: "mds-cc__card-queries", children: [
              f,
              "Q"
            ] }),
            /* @__PURE__ */ t("span", { class: `mds-cc__chevron${s ? " mds-cc__chevron--open" : ""}`, children: "›" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { class: "mds-cc__card-line2", children: [
          /* @__PURE__ */ t("span", { class: "mds-cc__card-type", children: lt(r) }),
          g.dateText && /* @__PURE__ */ t(Y, { children: [
            /* @__PURE__ */ t("span", { class: "mds-cc__card-meta-sep", children: "·" }),
            /* @__PURE__ */ t("span", { class: "mds-cc__card-ard-date", children: [
              "ARD ",
              g.dateText
            ] })
          ] }),
          g.deadlineText && /* @__PURE__ */ t(Y, { children: [
            /* @__PURE__ */ t("span", { class: "mds-cc__card-meta-sep", children: "·" }),
            /* @__PURE__ */ t("span", { class: `mds-cc__card-ard mds-cc__card-ard--${g.cls}`, children: g.deadlineText })
          ] })
        ] })
      ]
    }
  );
}
function Vn(e) {
  const [s, n] = b(null), [i, a] = b(!1), [r, c] = b(null);
  return z(() => {
    if (!e) {
      n(null), c(null);
      return;
    }
    let o = !1;
    a(!0), c(null);
    async function p() {
      try {
        if (!(await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" })).authenticated)
          throw new Error("Please log in to view detail");
        const l = getOrg()?.org, m = window.getChatFacilityInfo?.() || "", h = new URLSearchParams({
          externalAssessmentId: e,
          facilityName: m,
          orgSlug: l
        }), _ = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${h}`,
          options: { method: "GET" }
        });
        if (!_.success)
          throw new Error(_.error || "Failed to load assessment detail");
        o || n(_.data);
      } catch (d) {
        o || c(d.message || "Failed to load detail");
      } finally {
        o || a(!1);
      }
    }
    return p(), () => {
      o = !0;
    };
  }, [e]), { detailData: s, loading: i, error: r };
}
function jt(e, s) {
  if (!s?.meta?.ntaTiers) return null;
  for (const n of s.meta.ntaTiers)
    if ((n.levels || []).includes(e)) return n.tier;
  return null;
}
function Ts(e, s) {
  if (s?.mode === "state_rate") {
    const n = jt(e.currentLevel, s), i = jt(e.newLevel, s);
    return n != null && i != null ? `NTA: Tier ${n} → Tier ${i}` : "NTA: tier upgrade";
  }
  return `NTA: ${e.currentLevel} → ${e.newLevel}`;
}
function zn(e, s) {
  const n = [];
  return e.impact?.slp?.wouldChangeGroup && n.push(`SLP: ${e.impact.slp.currentGroup} → ${e.impact.slp.newGroup}`), e.impact?.nta?.wouldChangeLevel && n.push(Ts(e.impact.nta, s)), e.impact?.nursing?.wouldChangeGroup && n.push(`Nursing: ${e.impact.nursing.currentPaymentGroup} → ${e.impact.nursing.newPaymentGroup}`), e.impact?.ptot?.wouldChangeGroup && n.push(`PT/OT: ${e.impact.ptot.currentGroup} → ${e.impact.ptot.newGroup}`), n;
}
function jn(e, s) {
  const n = e.pdpmImpact?.componentImpacts;
  if (!n) return [];
  const i = [];
  return n.slp?.wouldChangeGroup && i.push(`SLP: ${n.slp.currentGroup} → ${n.slp.newGroup}`), n.nta?.wouldChangeLevel && i.push(Ts(n.nta, s)), n.nursing?.wouldChangeGroup && i.push(`Nursing: ${n.nursing.currentPaymentGroup} → ${n.nursing.newPaymentGroup}`), n.ptot?.wouldChangeGroup && i.push(`PT/OT: ${n.ptot.currentGroup} → ${n.ptot.newGroup}`), i;
}
function Qn(e) {
  if (!e) return "not yet sent";
  const s = Math.floor((Date.now() - new Date(e)) / 864e5);
  return s === 0 ? "sent today" : `sent ${s}d ago`;
}
function As(e) {
  if (!e?.checks)
    return e?.status === "failed" && e.issues?.length > 0 ? e.issues.map((i) => i.message || i) : [];
  const s = { bims: "BIMS", phq9: "PHQ-9", gg: "GG", orders: "Orders", therapyDocs: "Therapy" }, n = [];
  for (const [i, a] of Object.entries(e.checks))
    a.status === "failed" && n.push(a.message || `${s[i] || i} incomplete`);
  return n;
}
function Wn({ pdpm: e, detailData: s, payment: n, sectionProgress: i, compliance: a, isEndOfStay: r }) {
  const c = [], o = s?.currentHipps || e?.currentHipps, p = s?.potentialHipps || e?.potentialHipps, d = p && p !== o && !r, l = We(n) && n.delta > 0 ? Se(n, "short") : null;
  d && l ? c.push(/* @__PURE__ */ t("span", { class: "mds-cc__ss-part mds-cc__ss-part--revenue", children: [
    l,
    " opportunity"
  ] })) : d && c.push(/* @__PURE__ */ t("span", { class: "mds-cc__ss-part", children: [
    "HIPPS ",
    o,
    " ",
    "→",
    " ",
    p
  ] })), i?.percentComplete != null && c.push(/* @__PURE__ */ t("span", { class: "mds-cc__ss-part", children: [
    "Sections ",
    i.percentComplete,
    "%"
  ] }));
  const m = As(a), h = s?.enhancedDetections?.filter(
    (v) => v.solverStatus === "dont_code" && (v.diagnosisPassed === !1 || v.activeStatusPassed === !1)
  ).length || 0, _ = m.length + h;
  return _ > 0 && c.push(/* @__PURE__ */ t("span", { class: "mds-cc__ss-part mds-cc__ss-part--issues", children: [
    "⚠",
    " ",
    _,
    " ",
    _ === 1 ? "issue" : "issues"
  ] })), c.length === 0 ? null : /* @__PURE__ */ t("div", { class: "mds-cc__ss", children: c.map((v, g) => /* @__PURE__ */ t(Y, { children: [
    g > 0 && /* @__PURE__ */ t("span", { class: "mds-cc__ss-sep" }),
    v
  ] })) });
}
function Kn({ detailData: e, onSelectItem: s }) {
  const n = e?.enhancedDetections || [], i = e?.payment, a = n.filter(
    (p) => p.wouldChangeHipps && p.solverStatus !== "query_sent" && p.solverStatus !== "awaiting_response" && p.solverStatus !== "dont_code"
  );
  if (a.length === 0) return null;
  const r = e?.currentHipps, c = e?.potentialHipps, o = c && c !== r ? ` (${r} → ${c})` : "";
  return /* @__PURE__ */ t("div", { class: "mds-cc__ps", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__ps-header", children: [
      a.length,
      " ",
      a.length === 1 ? "item" : "items",
      " would change HIPPS",
      o
    ] }),
    /* @__PURE__ */ t("div", { class: "mds-cc__ps-items", children: a.map((p, d) => {
      const u = p.mdsItem?.startsWith("I8000:") ? "I8000" : p.mdsItem, l = zn(p, i);
      return /* @__PURE__ */ t(
        "div",
        {
          class: "mds-cc__ps-item mds-cc__ps-item--clickable",
          onClick: () => s(p),
          role: "button",
          title: "View evidence",
          children: [
            /* @__PURE__ */ t("div", { class: "mds-cc__ps-item-top", children: [
              /* @__PURE__ */ t("span", { class: "mds-cc__ps-item-name", children: p.itemName }),
              /* @__PURE__ */ t("span", { class: "mds-cc__ps-item-code", children: u })
            ] }),
            l.length > 0 && /* @__PURE__ */ t("div", { class: "mds-cc__ps-item-detail", children: [
              "Would change ",
              l.join(", ")
            ] })
          ]
        },
        d
      );
    }) })
  ] });
}
function Jn({ detailData: e }) {
  const n = (e?.enhancedDetections || []).filter(
    (i) => i.solverStatus === "dont_code" && (i.diagnosisPassed === !1 || i.activeStatusPassed === !1)
  );
  return n.length === 0 ? null : /* @__PURE__ */ t("div", { class: "mds-cc__ps", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__ps-header mds-cc__ps-header--amber", children: [
      n.length,
      " documentation ",
      n.length === 1 ? "risk" : "risks"
    ] }),
    /* @__PURE__ */ t("div", { class: "mds-cc__ps-items", children: n.map((i, a) => {
      const r = i.mdsItem?.startsWith("I8000:") ? "I8000" : i.mdsItem, c = [];
      return i.diagnosisPassed === !1 && c.push("No physician diagnosis"), i.activeStatusPassed === !1 && c.push("No active treatment order"), /* @__PURE__ */ t("div", { class: "mds-cc__ps-item", children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__ps-item-top", children: [
          /* @__PURE__ */ t("span", { class: "mds-cc__ps-item-name", children: i.itemName }),
          /* @__PURE__ */ t("span", { class: "mds-cc__ps-item-code", children: r })
        ] }),
        c.length > 0 && /* @__PURE__ */ t("div", { class: "mds-cc__ps-item-detail", children: c.join(" · ") })
      ] }, a);
    }) })
  ] });
}
function Yn({ detailData: e, querySummary: s, assessmentClass: n }) {
  const i = e?.outstandingQueries || [], a = e?.payment, r = i.filter(
    (d) => d.status === "sent" || d.status === "pending" || d.status === "awaiting_response"
  );
  if (r.length > 0)
    return /* @__PURE__ */ t("div", { class: "mds-cc__ps", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__ps-header", children: [
        r.length,
        " pending ",
        r.length === 1 ? "query" : "queries"
      ] }),
      /* @__PURE__ */ t("div", { class: "mds-cc__ps-items", children: r.map((d, u) => {
        const l = jn(d, a);
        return /* @__PURE__ */ t("div", { class: "mds-cc__ps-item", children: [
          /* @__PURE__ */ t("div", { class: "mds-cc__ps-item-top", children: [
            /* @__PURE__ */ t("span", { class: "mds-cc__ps-item-name", children: d.mdsItemName }),
            d.mdsItem && /* @__PURE__ */ t("span", { class: "mds-cc__ps-item-code", children: d.mdsItem }),
            /* @__PURE__ */ t("span", { class: "mds-cc__ps-item-meta", children: Qn(d.sentAt) })
          ] }),
          l.length > 0 && /* @__PURE__ */ t("div", { class: "mds-cc__ps-item-detail", children: [
            "Would change ",
            l.join(", ")
          ] })
        ] }, u);
      }) })
    ] });
  if (n !== "pps_payment" || !s) return null;
  const { pending: c = 0, sent: o = 0 } = s;
  if (c === 0 && o === 0) return null;
  const p = [];
  return c > 0 && p.push(`${c} pending`), o > 0 && p.push(`${o} sent, awaiting response`), /* @__PURE__ */ t("div", { class: "mds-cc__ps", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__ps-header", children: "Outstanding queries" }),
    /* @__PURE__ */ t("div", { class: "mds-cc__ps-item-detail", style: { paddingLeft: "0" }, children: p.join(" · ") })
  ] });
}
function Zn({ compliance: e }) {
  const s = As(e);
  return s.length === 0 ? null : /* @__PURE__ */ t("div", { class: "mds-cc__ps", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__ps-header mds-cc__ps-header--amber", children: [
      s.length,
      " compliance ",
      s.length === 1 ? "issue" : "issues"
    ] }),
    /* @__PURE__ */ t("div", { class: "mds-cc__ps-item-detail", style: { paddingLeft: "0" }, children: s.join(" · ") })
  ] });
}
function Xn() {
  return /* @__PURE__ */ t("div", { class: "mds-cc__prev-detail-loading", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
    /* @__PURE__ */ t("span", { children: "Loading assessment detail..." })
  ] });
}
function ei({ message: e }) {
  return /* @__PURE__ */ t("div", { class: "mds-cc__prev-detail-error", children: /* @__PURE__ */ t("span", { children: [
    "⚠",
    " ",
    e
  ] }) });
}
function ti({ assessment: e, onOpenAnalyzer: s, onSelectItem: n }) {
  const { pdpm: i, sectionProgress: a, compliance: r, querySummary: c } = e, o = e.externalAssessmentId || e.assessmentId, p = e.assessmentClass === "end_of_stay", { detailData: d, loading: u, error: l } = Vn(o), m = d?.payment || i?.payment;
  return /* @__PURE__ */ t("div", { class: "mds-cc__preview", onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ t(
      Wn,
      {
        pdpm: i,
        detailData: d,
        payment: m,
        sectionProgress: a,
        compliance: r,
        isEndOfStay: p
      }
    ),
    u && /* @__PURE__ */ t(Xn, {}),
    !u && l && /* @__PURE__ */ t(ei, { message: l }),
    !u && d && /* @__PURE__ */ t(Y, { children: [
      /* @__PURE__ */ t(Kn, { detailData: d, onSelectItem: n }),
      /* @__PURE__ */ t(Jn, { detailData: d })
    ] }),
    /* @__PURE__ */ t(
      Yn,
      {
        detailData: u ? null : d,
        querySummary: c,
        assessmentClass: e.assessmentClass
      }
    ),
    /* @__PURE__ */ t(Zn, { compliance: r }),
    /* @__PURE__ */ t("div", { class: "mds-cc__prev-actions", children: [
      /* @__PURE__ */ t("button", { class: "mds-cc__action-btn mds-cc__action-btn--primary", onClick: s, children: "Open Full Analyzer" }),
      o && /* @__PURE__ */ t(
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
function Ms(e, s, n) {
  const [i, a] = b(null), [r, c] = b(!1), [o, p] = b(null);
  return z(() => {
    if (!e || !n?.assessmentId) return;
    let d = !1;
    a(null), p(null), c(!0);
    async function u() {
      try {
        const m = getOrg()?.org, h = window.getChatFacilityInfo?.() || "";
        if (!m || !h)
          throw new Error("Could not determine organization or facility");
        const _ = e.includes(":") ? e.split(":")[0] : e;
        let v = `/api/extension/mds/items/${encodeURIComponent(_)}?externalAssessmentId=${n.assessmentId}&facilityName=${encodeURIComponent(h)}&orgSlug=${encodeURIComponent(m)}`;
        s && (v += `&categoryKey=${encodeURIComponent(s)}`), chrome.runtime.sendMessage({ type: "API_REQUEST", endpoint: v }, (g) => {
          d || (g?.success ? a(g.data) : p(g?.error || "Failed to load item detail"), c(!1));
        });
      } catch (l) {
        d || (p(l.message || "Failed to load item detail"), c(!1));
      }
    }
    return u(), () => {
      d = !0;
    };
  }, [e, s, n?.assessmentId]), { data: i, loading: r, error: o };
}
function vt(e, s) {
  if (s) {
    if (s.startsWith("order-")) return "order";
    if (s.startsWith("mar-")) return "mar";
    if (s.startsWith("lab-")) return "lab-result";
  }
  if (!e) return "document";
  const n = e.toLowerCase();
  return n.includes("dc_summary") || n.includes("discharge") ? "progress-note" : n.includes("lab") ? "lab-result" : n.includes("order") ? "order" : n.includes("mar") ? "mar" : n.includes("vital") ? "vital-signs" : n.includes("nursing") ? "nursing-note" : n.includes("history") || n.includes("h&p") || n.includes("physical") || n.includes("eval") || n.includes("st ") || n.includes("slp") ? "progress-note" : "document";
}
const bt = {
  order: "Order",
  mar: "MAR",
  "lab-result": "Lab",
  "progress-note": "Progress Note",
  "nursing-note": "Nursing Note",
  "vital-signs": "Vitals",
  "therapy-doc": "Therapy Doc",
  document: "Document"
};
function re(e) {
  const s = e.sourceType || "", n = e.sourceId || e.id || "", i = e.type || "", a = e.evidenceId || n;
  if (n && n.includes("-chunk-"))
    return { viewerType: "document", id: n.split("-chunk-")[0], chunk: parseInt(n.split("-chunk-")[1], 10) };
  if (s === "progress-note" && n) return { viewerType: "clinical-note", id: n };
  if (s === "therapy-doc" && n) return { viewerType: "therapy-document", id: n };
  if (s === "document" && n) return { viewerType: "document", id: n };
  if (i === "clinical_note" && n)
    return { viewerType: "clinical-note", id: n.replace(/^pcc-prognote-/, "").replace(/^patient-practnote-/, "") };
  if (i === "therapy_document" && n)
    return { viewerType: "therapy-document", id: n.replace(/^therapy-doc-/, "") };
  if (i === "document" && n) return { viewerType: "document", id: n };
  if (i === "order" && n) return { viewerType: "order", id: n };
  if (a) {
    if (a.startsWith("therapy-doc-")) return { viewerType: "therapy-document", id: a.replace("therapy-doc-", "") };
    if (a.startsWith("pcc-prognote-")) return { viewerType: "clinical-note", id: a.replace("pcc-prognote-", "") };
    if (a.startsWith("patient-practnote-")) return { viewerType: "clinical-note", id: a.replace("patient-practnote-", "") };
    if (a.includes("-chunk-")) return { viewerType: "document", id: a.split("-chunk-")[0], chunk: parseInt(a.split("-chunk-")[1], 10) };
  }
  return { viewerType: null, id: null };
}
function si(e) {
  const s = re(e), n = e.quoteText || e.quote || e.snippet || "";
  if (s.viewerType === "clinical-note" && s.id)
    return window.showClinicalNoteModal?.(s.id);
  if (s.viewerType === "therapy-document" && s.id)
    return window.showTherapyDocModal?.(s.id, n);
  if (s.viewerType === "document" && s.id)
    return window.showDocumentModal?.(s.id, e.wordBlocks || []);
  const i = e.sourceId || e.evidenceId || "";
  if ((e.sourceType === "order" || i.startsWith("order-")) && window.showAdministrationModal)
    return window.showAdministrationModal(i.replace(/^order-/, ""));
  window.SuperDocViewer?.open(e);
}
function ni(e) {
  const s = re(e);
  return e.sourceType === "order" || (e.evidenceId || "").startsWith("order-") ? "View Administrations" : s.viewerType === "therapy-document" ? "View Document" : s.viewerType === "clinical-note" ? "View Note" : s.viewerType === "document" ? "View PDF" : null;
}
const Qt = () => /* @__PURE__ */ t("svg", { class: "sid__step-icon sid__step-icon--pass", viewBox: "0 0 20 20", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ t("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clip-rule": "evenodd" }) }), Wt = () => /* @__PURE__ */ t("svg", { class: "sid__step-icon sid__step-icon--fail", viewBox: "0 0 20 20", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ t("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", "clip-rule": "evenodd" }) }), Ls = () => /* @__PURE__ */ t("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ t("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
function Kt(e) {
  const s = e.sourceType || e.type || "", n = e.evidenceId || e.sourceId || "";
  return s === "order" || s === "mar" || s === "medication" || n.startsWith("order-") || n.startsWith("admin-") || n.startsWith("mar-") ? "orders" : s === "progress-note" || s === "nursing-note" || s === "clinical_note" || e.type === "clinical_note" || n.startsWith("pcc-prognote-") || n.startsWith("patient-practnote-") ? "notes" : s === "document" || s === "therapy-doc" || e.type === "document" || e.type === "therapy_document" || n.startsWith("therapy-doc-") || n.includes("-chunk-") ? "documents" : s ? "other" : "documents";
}
const ii = { orders: "Orders", notes: "Notes", documents: "Documents", other: "Other" };
function ai({ fall: e }) {
  const s = e.incidentDate ? new Date(e.incidentDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";
  let n = "No injury", i = "";
  return e.hasMajorInjury ? (n = "Major injury", i = "super-fall__injury--major", e.injuryTypes?.length && (n += `: ${e.injuryTypes.join(", ")}`)) : e.hasInjury && (n = "Minor injury", i = "super-fall__injury--minor", e.injuryTypes?.length && (n += `: ${e.injuryTypes.join(", ")}`)), /* @__PURE__ */ t("div", { class: "super-fall-row", onClick: () => {
    e.incidentId && window.showIncidentDetailModal && window.showIncidentDetailModal(e.incidentId);
  }, role: "button", children: [
    /* @__PURE__ */ t("div", { class: "super-fall__header", children: [
      /* @__PURE__ */ t("span", { class: "super-fall__date", children: s }),
      /* @__PURE__ */ t("span", { class: "super-fall__type", children: e.incidentType || "Fall" })
    ] }),
    e.residentName && /* @__PURE__ */ t("div", { class: "super-fall__resident", children: e.residentName }),
    /* @__PURE__ */ t("div", { class: `super-fall__injury ${i}`, children: n }),
    e.incidentId && /* @__PURE__ */ t("div", { class: "super-fall__action", children: [
      /* @__PURE__ */ t("span", { children: "View Incident" }),
      /* @__PURE__ */ t(Ls, {})
    ] })
  ] });
}
function ri({ ev: e, index: s, onViewSource: n }) {
  const i = e.quoteText || e.orderDescription || e.quote || e.snippet || e.text || "";
  if (!i && !e.rationale) return null;
  const a = e.sourceType || vt(e.displayName, e.evidenceId), r = e.displayName || bt[a] || a, c = ni(e), o = !!c;
  return /* @__PURE__ */ t(
    "div",
    {
      class: `sid__ev-card${o ? " sid__ev-card--clickable" : ""}`,
      onClick: o ? () => {
        if (n) {
          const d = re(e), u = e.sourceType === "order" || (e.evidenceId || "").startsWith("order-"), l = d.viewerType;
          if (l === "document" || l === "clinical-note" || l === "therapy-document" || u) {
            n(e, s);
            return;
          }
        }
        si(e);
      } : void 0,
      role: o ? "button" : void 0,
      children: [
        /* @__PURE__ */ t("div", { class: "sid__ev-header", children: /* @__PURE__ */ t("span", { class: `sid__ev-type sid__ev-type--${a}`, children: r }) }),
        i && /* @__PURE__ */ t("div", { class: "sid__ev-quote", children: i }),
        e.rationale && /* @__PURE__ */ t("div", { class: "sid__ev-rationale", children: e.rationale }),
        o && /* @__PURE__ */ t("div", { class: "sid__ev-action", children: [
          /* @__PURE__ */ t("span", { children: c }),
          /* @__PURE__ */ t(Ls, {})
        ] })
      ]
    }
  );
}
function Ae({ label: e, impact: s }) {
  if (!s || !s.wouldChangeGroup && !s.wouldChangeLevel) return null;
  const n = s.currentGroup || s.currentLevel || s.currentPaymentGroup, i = s.newGroup || s.newLevel || s.newPaymentGroup;
  return /* @__PURE__ */ t("span", { class: "sid__impact", children: [
    e,
    " ",
    /* @__PURE__ */ t("span", { class: "sid__impact-from", children: n }),
    " → ",
    /* @__PURE__ */ t("span", { class: "sid__impact-to", children: i })
  ] });
}
function oi({ diagnosisSummary: e, treatmentSummary: s, validation: n }) {
  const i = n?.diagnosisCheck?.passed ?? n?.diagnosisPassed, a = n?.treatmentCheck?.passed ?? n?.activeStatusPassed;
  return /* @__PURE__ */ t("div", { class: "sid__steps", children: [
    /* @__PURE__ */ t("div", { class: `sid__step ${i ? "sid__step--pass" : "sid__step--fail"}`, children: [
      i ? /* @__PURE__ */ t(Qt, {}) : /* @__PURE__ */ t(Wt, {}),
      /* @__PURE__ */ t("div", { class: "sid__step-content", children: [
        /* @__PURE__ */ t("div", { class: "sid__step-label", children: "Diagnosis" }),
        e && /* @__PURE__ */ t("div", { class: "sid__step-summary", children: e })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: `sid__step ${a ? "sid__step--pass" : "sid__step--fail"}`, children: [
      a ? /* @__PURE__ */ t(Qt, {}) : /* @__PURE__ */ t(Wt, {}),
      /* @__PURE__ */ t("div", { class: "sid__step-content", children: [
        /* @__PURE__ */ t("div", { class: "sid__step-label", children: "Treatment" }),
        s && /* @__PURE__ */ t("div", { class: "sid__step-summary", children: s })
      ] })
    ] })
  ] });
}
function ci({ rationale: e }) {
  return e ? /* @__PURE__ */ t("div", { class: "sid__rationale", children: [
    /* @__PURE__ */ t("div", { class: "sid__rationale-label", children: "Rationale" }),
    e
  ] }) : null;
}
function di({ carePlan: e }) {
  if (!e) return null;
  const [s, n] = b(!1), i = e.onCarePlan, a = e.items || [];
  return /* @__PURE__ */ t("div", { class: "sid__careplan", children: [
    /* @__PURE__ */ t(
      "button",
      {
        class: "sid__careplan-toggle",
        type: "button",
        onClick: () => a.length > 0 && n(!s),
        children: [
          /* @__PURE__ */ t("span", { class: `sid__careplan-dot ${i ? "sid__careplan-dot--on" : "sid__careplan-dot--off"}` }),
          /* @__PURE__ */ t("span", { class: "sid__careplan-title", children: "Care Plan" }),
          /* @__PURE__ */ t("span", { class: "sid__careplan-status", children: i ? "On Care Plan" : "Not on Care Plan" }),
          a.length > 0 && /* @__PURE__ */ t("span", { class: `sid__findings-arrow ${s ? "sid__findings-arrow--open" : ""}`, children: "▶" })
        ]
      }
    ),
    s && a.length > 0 && /* @__PURE__ */ t("ul", { class: "sid__careplan-items", children: a.map((r, c) => /* @__PURE__ */ t("li", { children: r }, c)) })
  ] });
}
function $s({ variant: e = "compact", data: s, detectionItem: n, mdsItem: i, onViewSource: a, onDismiss: r, dismissing: c, assessmentId: o }) {
  const p = e === "full", d = s?.item, u = !!d?.columns, l = d && !u, m = !!(s?.diagnosisSummary || s?.treatmentSummary);
  let h = d?.status;
  !h && u && (h = Object.values(d.columns || {}).some((W) => W?.answer?.toLowerCase() === "yes") ? "code" : "dont_code");
  const _ = h === "needs_physician_query", v = h === "code" || h === "recommend_coding", g = _ ? "sid__verdict-dot--query" : v ? "sid__verdict-dot--code" : "sid__verdict-dot--no-code", C = _ ? "Needs Query" : v ? "Recommend Coding" : h?.replace(/_/g, " ") || "Don't Code", f = d?.evidence || d?.queryEvidence || [], x = [];
  if (u) {
    const A = /* @__PURE__ */ new Set();
    for (const W of Object.values(d.columns || {}))
      W?.evidence && W.evidence.forEach((oe) => {
        const ue = oe.sourceId || oe.quote || JSON.stringify(oe);
        A.has(ue) || (A.add(ue), x.push(oe));
      });
  }
  const k = l ? f : x, [y, S] = b(!1), [E, N] = b(null), w = {};
  k.forEach((A) => {
    const W = Kt(A);
    w[W] = (w[W] || 0) + 1;
  });
  const T = Object.keys(w).sort(), F = T.length > 1, V = E ? k.filter((A) => Kt(A) === E) : k, D = y ? V : V.slice(0, 4), B = d?.keyFindings || [], [$, M] = b(p), G = n?.impact, K = G && (G.slp || G.nta || G.nursing || G.ptot), Q = d?.columns || {}, R = Object.keys(Q), [j, te] = b(R[0] || "A"), I = Q[j], P = d?.subItems || [], [U, q] = b(!1), [Z, L] = b(""), O = i?.startsWith("I8000:") ? "I8000" : i;
  return /* @__PURE__ */ t(Y, { children: [
    /* @__PURE__ */ t("div", { class: "sid__verdict", children: [
      /* @__PURE__ */ t("span", { class: `sid__verdict-dot ${g}` }),
      /* @__PURE__ */ t("span", { class: "sid__verdict-text", children: C })
    ] }),
    m && /* @__PURE__ */ t(
      oi,
      {
        diagnosisSummary: s.diagnosisSummary,
        treatmentSummary: s.treatmentSummary,
        validation: d?.validation
      }
    ),
    m && s?.carePlan && /* @__PURE__ */ t(di, { carePlan: s.carePlan }),
    !m && u && I && /* @__PURE__ */ t("div", { class: "sid__rationale", children: [
      /* @__PURE__ */ t("div", { class: "sid__col-answer", children: [
        /* @__PURE__ */ t("span", { class: "sid__col-label", children: [
          "Column ",
          j,
          ":"
        ] }),
        /* @__PURE__ */ t("span", { class: `sid__col-badge ${I.answer?.toLowerCase() === "yes" ? "sid__col-badge--yes" : "sid__col-badge--no"}`, children: I.answer?.toUpperCase() }),
        (I.firstAdministered || I.lastAdministered) && /* @__PURE__ */ t("span", { class: "sid__col-dates", children: [
          I.firstAdministered,
          I.firstAdministered && I.lastAdministered && " – ",
          I.lastAdministered
        ] })
      ] }),
      I.rationale && /* @__PURE__ */ t("div", { children: I.rationale })
    ] }),
    !m && !u && /* @__PURE__ */ t(ci, { rationale: d?.rationale }),
    u && R.length > 1 && /* @__PURE__ */ t("div", { class: "sid__coltabs", children: R.map((A) => {
      const oe = Q[A]?.answer?.toLowerCase() === "yes";
      return /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          class: `sid__coltab ${j === A ? "sid__coltab--on" : ""}`,
          onClick: () => te(A),
          children: [
            "Col ",
            A,
            /* @__PURE__ */ t("span", { class: `sid__coltab-dot ${oe ? "sid__coltab-dot--yes" : ""}` })
          ]
        },
        A
      );
    }) }),
    P.length > 0 && /* @__PURE__ */ t("div", { class: "sid__subs", children: P.map((A, W) => {
      const oe = A.columns?.A;
      if (!oe) return null;
      const ue = oe.answer?.toLowerCase() === "yes";
      return /* @__PURE__ */ t("div", { class: `sid__sub ${ue ? "sid__sub--on" : ""}`, children: [
        /* @__PURE__ */ t("span", { class: `sid__sub-dot ${ue ? "sid__sub-dot--yes" : ""}`, children: ue ? "✓" : "–" }),
        /* @__PURE__ */ t("span", { class: "sid__sub-name", children: A.description })
      ] }, A.mdsItem || W);
    }) }),
    p && K && /* @__PURE__ */ t("div", { class: "sid__impacts", children: [
      /* @__PURE__ */ t(Ae, { label: "NTA", impact: G.nta }),
      /* @__PURE__ */ t(Ae, { label: "Nursing", impact: G.nursing }),
      /* @__PURE__ */ t(Ae, { label: "SLP", impact: G.slp }),
      /* @__PURE__ */ t(Ae, { label: "PT/OT", impact: G.ptot })
    ] }),
    d?.falls?.length > 0 && /* @__PURE__ */ t("div", { class: "super-falls-section", children: [
      /* @__PURE__ */ t("div", { class: "super-falls-section__label", children: [
        "Falls (",
        d.fallCount ?? d.falls.length,
        ")"
      ] }),
      d.lookbackWindow && /* @__PURE__ */ t("div", { class: "super-lookback-info", children: [
        "Lookback: ",
        d.lookbackWindow.startDate,
        " – ",
        d.lookbackWindow.endDate,
        " (",
        d.lookbackWindow.daysCovered,
        " days)"
      ] }),
      /* @__PURE__ */ t("div", { class: "super-falls-list", children: d.falls.map((A, W) => /* @__PURE__ */ t(ai, { fall: A }, A.incidentId || W)) })
    ] }),
    k.length > 0 && /* @__PURE__ */ t("div", { class: "sid__evidence", children: [
      /* @__PURE__ */ t("div", { class: "sid__ev-label", children: [
        "Evidence (",
        k.length,
        ")"
      ] }),
      F && /* @__PURE__ */ t("div", { class: "sid__ev-filters", children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            class: `sid__ev-chip ${E === null ? "sid__ev-chip--active" : ""}`,
            onClick: () => {
              N(null), S(!1);
            },
            children: [
              "All (",
              k.length,
              ")"
            ]
          }
        ),
        T.map((A) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            class: `sid__ev-chip ${E === A ? "sid__ev-chip--active" : ""}`,
            onClick: () => {
              N(E === A ? null : A), S(!1);
            },
            children: [
              ii[A] || A,
              " (",
              w[A],
              ")"
            ]
          },
          A
        ))
      ] }),
      /* @__PURE__ */ t("div", { class: "sid__ev-list", children: D.map((A, W) => /* @__PURE__ */ t(ri, { ev: A, index: W, onViewSource: a }, W)) }),
      V.length > 4 && !y && /* @__PURE__ */ t("button", { class: "sid__ev-show-more", type: "button", onClick: () => S(!0), children: [
        "Show all ",
        V.length,
        " ↓"
      ] })
    ] }),
    B.length > 0 && /* @__PURE__ */ t(Y, { children: [
      /* @__PURE__ */ t("button", { class: "sid__findings-toggle", type: "button", onClick: () => M(!$), children: [
        /* @__PURE__ */ t("span", { class: `sid__findings-arrow ${$ ? "sid__findings-arrow--open" : ""}`, children: "▶" }),
        "Key Findings (",
        B.length,
        ")"
      ] }),
      $ && /* @__PURE__ */ t("ul", { class: "sid__findings", children: B.map((A, W) => /* @__PURE__ */ t("li", { children: A }, W)) })
    ] }),
    U && r ? /* @__PURE__ */ t("div", { class: "sid__dismiss-form", children: [
      /* @__PURE__ */ t("label", { children: "Why do you disagree? (optional)" }),
      /* @__PURE__ */ t(
        "textarea",
        {
          value: Z,
          onInput: (A) => L(A.target.value),
          placeholder: "Enter reason...",
          disabled: c
        }
      ),
      /* @__PURE__ */ t("div", { class: "sid__dismiss-form-btns", children: [
        /* @__PURE__ */ t(
          "button",
          {
            class: "sid__btn sid__btn--secondary",
            type: "button",
            disabled: c,
            onClick: () => {
              q(!1), L("");
            },
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            class: "sid__btn sid__btn--primary",
            type: "button",
            disabled: c,
            onClick: () => r(Z),
            children: c ? "Submitting..." : "Submit"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ t("div", { class: "sid__actions", children: [
      r && /* @__PURE__ */ t("button", { class: "sid__btn sid__btn--dismiss", type: "button", onClick: () => q(!0), children: "Dismiss" }),
      /* @__PURE__ */ t("div", { class: "sid__actions-right", children: [
        /* @__PURE__ */ t("button", { class: "sid__btn sid__btn--primary", onClick: () => {
          const A = {
            mdsItem: d?.mdsItem || i,
            description: d?.description || n?.itemName,
            aiAnswer: d
          };
          window.QuerySendModal?.show(A);
        }, type: "button", children: "Query Physician" }),
        i && /* @__PURE__ */ t("button", { class: "sid__btn sid__btn--secondary", onClick: () => window.navigateToMDSItem?.(i, o), type: "button", children: [
          "Go to ",
          O,
          " ↗"
        ] })
      ] })
    ] })
  ] });
}
const le = [50, 75, 100, 125, 150, 200], li = 100;
function wt({
  url: e,
  wordBlocks: s = [],
  targetPage: n = 1,
  title: i = "Document",
  documentType: a,
  effectiveDate: r,
  fileSize: c,
  onClose: o,
  openInNewTabUrl: p
}) {
  const [d, u] = b(null), [l, m] = b(n), [h, _] = b(1), [v, g] = b(li), [C, f] = b(0), [x, k] = b(!0), [y, S] = b(!1), [E, N] = b(null), [w, T] = b(String(n)), F = ee(null), V = ee(null), D = ee(null), B = ee({}), $ = ee(null), M = ee(0);
  c && (c / 1024 > 1024 ? `${(c / 1024 / 1024).toFixed(1)}` : `${(c / 1024).toFixed(0)}`);
  const G = (I) => {
    if (!I) return "";
    try {
      return new Date(I).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    } catch {
      return I;
    }
  };
  z(() => {
    if (!e) {
      N("No document URL available"), k(!1);
      return;
    }
    let I = !1;
    return (async () => {
      try {
        if (typeof pdfjsLib > "u") throw new Error("PDF.js library not loaded");
        pdfjsLib.GlobalWorkerOptions.workerSrc || (pdfjsLib.GlobalWorkerOptions.workerSrc = chrome.runtime.getURL("lib/pdf.worker.min.js"));
        const P = await pdfjsLib.getDocument(e).promise;
        if (I) return;
        const U = Math.min(n, P.numPages);
        u(P), _(P.numPages), m(U), T(String(U)), k(!1);
      } catch (P) {
        I || (console.error("[PDFViewer] Load failed:", P), N(`Failed to load PDF: ${P.message}`), k(!1));
      }
    })(), () => {
      I = !0;
    };
  }, [e]);
  const K = X(async (I) => {
    if (!d) return;
    const P = F.current, U = V.current, q = D.current;
    if (!P || !U || !q) return;
    const Z = ++M.current, L = Math.max(1, Math.min(I, h));
    S(!0);
    try {
      const O = await d.getPage(L);
      if (M.current !== Z) return;
      const A = await pi(O, L, B, C), W = q.clientWidth, oe = Math.max(W - 16, 200), ue = O.getViewport({ scale: 1, rotation: A }), Vs = oe / ue.width * (v / 100), ge = O.getViewport({ scale: Vs, rotation: A }), St = P.getContext("2d"), Nt = U.getContext("2d");
      if (P.width = ge.width, P.height = ge.height, U.width = ge.width, U.height = ge.height, St.clearRect(0, 0, P.width, P.height), Nt.clearRect(0, 0, U.width, U.height), await O.render({ canvasContext: St, viewport: ge }).promise, M.current !== Z) return;
      const xt = (s || []).filter((Pe) => Pe.p === L);
      if (xt.length > 0) {
        const Pe = hi(Nt, xt, ge, A);
        Pe.length > 0 && _i(Pe, q);
      }
    } catch (O) {
      console.error("[PDFViewer] Render failed:", O);
    } finally {
      M.current === Z && S(!1);
    }
  }, [d, h, v, C, s]);
  z(() => {
    d && K(l);
  }, [d, l, v, C, K]);
  const Q = X((I) => {
    const P = Math.max(1, Math.min(I, h));
    m(P), T(String(P));
  }, [h]), R = X((I) => {
    g((P) => {
      const U = le.indexOf(P);
      if (U === -1) {
        const q = le.reduce((L, O) => Math.abs(O - P) < Math.abs(L - P) ? O : L), Z = le.indexOf(q);
        return le[Math.max(0, Math.min(Z + I, le.length - 1))];
      }
      return le[Math.max(0, Math.min(U + I, le.length - 1))];
    });
  }, []), j = X(() => {
    f((I) => (I + 90) % 360), B.current = {};
  }, []);
  z(() => {
    const I = (P) => {
      if ($.current && !(P.target.tagName === "INPUT" || P.target.tagName === "TEXTAREA") && $.current.closest(".super-pdf-modal"))
        switch (P.key) {
          case "ArrowLeft":
            P.preventDefault(), m((U) => {
              const q = Math.max(1, U - 1);
              return T(String(q)), q;
            });
            break;
          case "ArrowRight":
            P.preventDefault(), m((U) => {
              const q = Math.min(h, U + 1);
              return T(String(q)), q;
            });
            break;
          case "+":
          case "=":
            P.preventDefault(), R(1);
            break;
          case "-":
            P.preventDefault(), R(-1);
            break;
          case "r":
          case "R":
            P.preventDefault(), j();
            break;
        }
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [h, R, j]);
  const te = () => {
    const I = parseInt(w, 10);
    !isNaN(I) && I >= 1 && I <= h ? Q(I) : T(String(l));
  };
  return x ? /* @__PURE__ */ t("div", { class: "super-pdfv super-pdfv--center", ref: $, children: /* @__PURE__ */ t("div", { class: "super-pdfv__loader", children: [
    /* @__PURE__ */ t("div", { class: "super-pdfv__loader-ring" }),
    /* @__PURE__ */ t("span", { children: "Loading document..." })
  ] }) }) : E ? /* @__PURE__ */ t("div", { class: "super-pdfv super-pdfv--center", ref: $, children: /* @__PURE__ */ t("div", { class: "super-pdfv__empty-state", children: [
    /* @__PURE__ */ t("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "#9ca3af", "stroke-width": "1.5", children: [
      /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ t("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
      /* @__PURE__ */ t("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
    ] }),
    /* @__PURE__ */ t("p", { children: E })
  ] }) }) : /* @__PURE__ */ t("div", { class: "super-pdfv", ref: $, children: [
    /* @__PURE__ */ t("div", { class: "super-pdfv__header", children: [
      /* @__PURE__ */ t("div", { class: "super-pdfv__header-left", children: [
        /* @__PURE__ */ t("svg", { class: "super-pdfv__header-icon", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
          /* @__PURE__ */ t("polyline", { points: "14 2 14 8 20 8" })
        ] }),
        /* @__PURE__ */ t("span", { class: "super-pdfv__header-title", children: i }),
        r && /* @__PURE__ */ t("span", { class: "super-pdfv__header-date", children: G(r) })
      ] }),
      /* @__PURE__ */ t("div", { class: "super-pdfv__header-right", children: [
        /* @__PURE__ */ t("div", { class: "super-pdfv__group", children: [
          /* @__PURE__ */ t("button", { class: "super-pdfv__tb-btn", onClick: () => Q(l - 1), disabled: l <= 1, title: "Previous page", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", children: /* @__PURE__ */ t("polyline", { points: "15 18 9 12 15 6" }) }) }),
          /* @__PURE__ */ t("div", { class: "super-pdfv__page-pill", children: [
            /* @__PURE__ */ t(
              "input",
              {
                class: "super-pdfv__page-input",
                type: "text",
                value: w,
                onInput: (I) => T(I.target.value),
                onBlur: te,
                onKeyDown: (I) => I.key === "Enter" && I.target.blur(),
                style: { width: `${Math.max(2, String(h).length + 0.5)}ch` }
              }
            ),
            /* @__PURE__ */ t("span", { class: "super-pdfv__page-of", children: [
              "of ",
              h
            ] })
          ] }),
          /* @__PURE__ */ t("button", { class: "super-pdfv__tb-btn", onClick: () => Q(l + 1), disabled: l >= h, title: "Next page", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", children: /* @__PURE__ */ t("polyline", { points: "9 18 15 12 9 6" }) }) })
        ] }),
        /* @__PURE__ */ t("div", { class: "super-pdfv__tb-sep" }),
        /* @__PURE__ */ t("div", { class: "super-pdfv__group", children: [
          /* @__PURE__ */ t("button", { class: "super-pdfv__tb-btn", onClick: () => R(-1), disabled: v <= le[0], title: "Zoom out", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ t("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) }) }),
          /* @__PURE__ */ t("span", { class: "super-pdfv__zoom-label", children: [
            v,
            "%"
          ] }),
          /* @__PURE__ */ t("button", { class: "super-pdfv__tb-btn", onClick: () => R(1), disabled: v >= le[le.length - 1], title: "Zoom in", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
            /* @__PURE__ */ t("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
            /* @__PURE__ */ t("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
          ] }) })
        ] }),
        /* @__PURE__ */ t("div", { class: "super-pdfv__tb-sep" }),
        /* @__PURE__ */ t("button", { class: "super-pdfv__tb-btn", onClick: j, title: "Rotate 90°", children: /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ t("polyline", { points: "1 4 1 10 7 10" }),
          /* @__PURE__ */ t("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
        ] }) }),
        p && /* @__PURE__ */ t("a", { href: p, target: "_blank", rel: "noopener noreferrer", class: "super-pdfv__open-btn", title: "Open in new tab", children: /* @__PURE__ */ t("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [
          /* @__PURE__ */ t("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
          /* @__PURE__ */ t("polyline", { points: "15 3 21 3 21 9" }),
          /* @__PURE__ */ t("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: "super-pdfv__scroll", ref: D, children: [
      /* @__PURE__ */ t("div", { class: "super-pdfv__canvas-wrap", children: [
        /* @__PURE__ */ t("canvas", { class: "super-pdfv__canvas", ref: F }),
        /* @__PURE__ */ t("canvas", { class: "super-pdfv__highlight", ref: V })
      ] }),
      y && /* @__PURE__ */ t("div", { class: "super-pdfv__page-loading", children: /* @__PURE__ */ t("div", { class: "super-pdfv__loader-ring super-pdfv__loader-ring--sm" }) })
    ] })
  ] });
}
async function pi(e, s, n, i) {
  if (n.current[s] !== void 0)
    return (n.current[s] + i) % 360;
  const a = e.view, r = a[2] - a[0], c = a[3] - a[1];
  let o = 0, p = 0;
  try {
    const u = (await e.getTextContent()).items.filter((l) => l.str && l.str.trim().length > 0);
    if (p = u.length, u.length >= 3) {
      const l = { 0: 0, 90: 0, 180: 0, 270: 0 };
      for (const _ of u) {
        const [v, g] = _.transform, C = Math.abs(v), f = Math.abs(g);
        C < 0.01 && f < 0.01 || (C > f ? l[v > 0 ? 0 : 180]++ : l[g > 0 ? 90 : 270]++);
      }
      let m = 0, h = 0;
      for (const [_, v] of Object.entries(l))
        v > m && (m = v, h = parseInt(_));
      h !== 0 && (o = h);
    }
  } catch {
  }
  if (o === 0 && p < 3)
    try {
      const d = await e.getOperatorList();
      let u = [1, 0, 0, 1, 0, 0];
      for (let l = 0; l < d.fnArray.length; l++)
        if (d.fnArray[l] === 12 && (u = d.argsArray[l]), d.fnArray[l] === 85 || d.fnArray[l] === 82) {
          const [m, h] = u;
          Math.abs(h) > Math.abs(m) * 5 && Math.abs(u[2]) > Math.abs(u[3]) * 5 && (o = h > 0 ? 270 : 90);
          break;
        }
    } catch {
    }
  return o === 0 && r > c * 1.05 && (o = 90), n.current[s] = o, (o + i) % 360;
}
function ui(e, s, n, i) {
  const { x: a, y: r, w: c, h: o } = e, p = i % 360;
  return p === 0 ? { x: a * s, y: r * n, w: c * s, h: o * n } : p === 90 ? { x: (1 - r - o) * s, y: a * n, w: o * s, h: c * n } : p === 180 ? { x: (1 - a - c) * s, y: (1 - r - o) * n, w: c * s, h: o * n } : { x: r * s, y: (1 - a - c) * n, w: o * s, h: c * n };
}
function mi(e) {
  if (e.length <= 1) return e;
  const s = [...e].sort((a, r) => a.y - r.y || a.x - r.x), n = [];
  let i = { ...s[0] };
  for (let a = 1; a < s.length; a++) {
    const r = s[a], c = Math.max(i.h, r.h), o = Math.abs(i.y + i.h / 2 - (r.y + r.h / 2)) < c * 0.6, d = r.x - (i.x + i.w) < c * 0.5;
    if (o && d) {
      const u = Math.max(i.x + i.w, r.x + r.w), l = Math.min(i.y, r.y), m = Math.max(i.y + i.h, r.y + r.h);
      i.x = Math.min(i.x, r.x), i.y = l, i.w = u - i.x, i.h = m - l;
    } else
      n.push(i), i = { ...r };
  }
  return n.push(i), n;
}
function hi(e, s, n, i) {
  const a = n.width, r = n.height, c = s.map((p) => ui(p, a, r, i)), o = mi(c);
  return e.fillStyle = "rgba(250, 204, 21, 0.28)", o.forEach((p) => {
    const l = p.x - 2, m = p.y - 2, h = p.w + 4, _ = p.h + 4;
    e.beginPath(), e.moveTo(l + 3, m), e.lineTo(l + h - 3, m), e.quadraticCurveTo(l + h, m, l + h, m + 3), e.lineTo(l + h, m + _ - 3), e.quadraticCurveTo(l + h, m + _, l + h - 3, m + _), e.lineTo(l + 3, m + _), e.quadraticCurveTo(l, m + _, l, m + _ - 3), e.lineTo(l, m + 3), e.quadraticCurveTo(l, m, l + 3, m), e.closePath(), e.fill();
  }), o.map((p, d) => ({ ...p, isActive: d === 0 }));
}
function _i(e, s) {
  if (!e.length || !s) return;
  const n = e.find((a) => a.isActive) || e[0], i = s.querySelector(".super-pdfv__canvas-wrap");
  i && requestAnimationFrame(() => {
    const a = s.getBoundingClientRect(), r = i.getBoundingClientRect(), c = r.left - a.left + s.scrollLeft, o = r.top - a.top + s.scrollTop;
    s.scrollTo({
      left: Math.max(0, c + n.x + n.w / 2 - s.clientWidth / 2),
      top: Math.max(0, o + n.y + n.h / 2 - s.clientHeight / 2),
      behavior: "smooth"
    });
  });
}
function gi(e) {
  const { sourceType: s, evidenceId: n } = e, i = e.sourceId || e.id || "", a = e.type;
  if (s === "progress-note" && i)
    return { viewerType: "clinical-note", id: i };
  if (s === "therapy-doc" && i)
    return { viewerType: "therapy-document", id: i };
  if (s === "document" && i)
    return { viewerType: "document", id: i };
  if (i && i.includes("-chunk-"))
    return { viewerType: "document", id: i.split("-chunk-")[0], chunk: parseInt(i.split("-chunk-")[1], 10) };
  if (a === "clinical_note" && i)
    return { viewerType: "clinical-note", id: i.replace(/^pcc-prognote-/, "").replace(/^patient-practnote-/, "") };
  if (a === "therapy_document" && i)
    return { viewerType: "therapy-document", id: i.replace(/^therapy-doc-/, "") };
  if (a === "document" && i)
    return { viewerType: "document", id: i };
  const r = n || i;
  if (r) {
    if (r.startsWith("therapy-doc-"))
      return { viewerType: "therapy-document", id: r.replace("therapy-doc-", "") };
    if (r.startsWith("pcc-prognote-"))
      return { viewerType: "clinical-note", id: r.replace("pcc-prognote-", "") };
    if (r.startsWith("patient-practnote-"))
      return { viewerType: "clinical-note", id: r.replace("patient-practnote-", "") };
    if (r.includes("-chunk-"))
      return { viewerType: "document", id: r.split("-chunk-")[0], chunk: parseInt(r.split("-chunk-")[1], 10) };
  }
  return { viewerType: null, id: null };
}
function Dt() {
  const e = document.querySelector(".icd10-viewer-modal__container");
  return e || document.body;
}
async function fi(e, s) {
  const n = `/api/extension/clinical-notes/${e}?facilityName=${encodeURIComponent(s.facilityName)}&orgSlug=${s.orgSlug}`, i = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: n
  });
  if (!i.success) throw new Error(i.error);
  return i.data;
}
async function yi(e, s) {
  const n = `/api/extension/therapy-documents/${e}?facilityName=${encodeURIComponent(s.facilityName)}&orgSlug=${s.orgSlug}`, i = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: n
  });
  if (!i.success) throw new Error(i.error);
  return i.data;
}
async function Ne(e, s) {
  const n = `/api/extension/documents/${e}?facilityName=${encodeURIComponent(s.facilityName)}&orgSlug=${s.orgSlug}`, i = await chrome.runtime.sendMessage({
    type: "API_REQUEST",
    endpoint: n
  });
  if (!i.success) throw new Error(i.error);
  return i.data;
}
function H(e) {
  return e ? String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "";
}
function Be(e) {
  if (!e) return "";
  try {
    return new Date(e).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  } catch {
    return e;
  }
}
function vi(e) {
  if (!e) return "";
  try {
    return new Date(e).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  } catch {
    return e;
  }
}
const Ke = "data-evidence-highlight";
function Ge(e) {
  return e ? e.toLowerCase().replace(/\s+/g, " ").trim() : "";
}
function Rs(e, s) {
  if (!e || !s) return !1;
  const n = Ge(e), i = Ge(s);
  return n.length < 10 || i.length < 10 ? !1 : n.includes(i) || i.includes(n);
}
function Es(e, s, n = 4) {
  if (!e || !s) return !1;
  const i = Ge(e);
  return Ge(s).split(/\s+/).filter((o) => o.length >= n).filter((o) => i.includes(o)).length >= 2;
}
function Ue(e, s) {
  return Rs(s, e) || Es(s, e);
}
function bi(e, s) {
  return e.some((n) => Rs(n, s) || Es(n, s));
}
function Jt(e) {
  if (!e) return "";
  try {
    const s = new Date(e);
    if (isNaN(s.getTime())) return e;
    const n = s.getMonth() + 1, i = s.getDate(), a = s.getFullYear();
    let r = s.getHours();
    const c = s.getMinutes().toString().padStart(2, "0"), o = s.getSeconds().toString().padStart(2, "0"), p = r >= 12 ? "PM" : "AM";
    return r = r % 12 || 12, `${n}/${i}/${a} ${r}:${c}:${o} ${p}`;
  } catch {
    return e;
  }
}
function de(e, s) {
  const n = !document.querySelector(".icd10-viewer-modal__container");
  n && (document.body.style.overflow = "hidden");
  const i = () => {
    n && (document.body.style.overflow = ""), e.remove();
  };
  e.querySelector(`.${s}__close`).addEventListener("click", i), e.querySelector(`.${s}__backdrop`).addEventListener("click", i);
  const a = (r) => {
    r.key === "Escape" && (i(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a);
}
function It(e, s, n) {
  const i = e.querySelector(`.${n}__body`);
  i.innerHTML = `
    <div class="super-viewer-error">
      <div class="super-viewer-error__icon">⚠️</div>
      <div class="super-viewer-error__message">${H(s)}</div>
    </div>
  `;
}
async function wi(e) {
  const s = await window.getCurrentParams(), n = Di();
  Dt().appendChild(n);
  try {
    const i = await fi(e, s);
    Ii(n, i.note);
  } catch (i) {
    It(n, i.message, "super-note-modal");
  }
}
function Di() {
  const e = document.createElement("div");
  return e.className = "super-note-modal", e.innerHTML = `
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
  `, de(e, "super-note-modal"), e;
}
function Ii(e, s) {
  const n = e.querySelector(".super-note-modal__container"), i = s.noteType === "practitioner" ? "Practitioner Note" : "Progress Note", a = s.noteType === "practitioner" ? "super-note-badge--practitioner" : "super-note-badge--progress";
  n.innerHTML = `
    <div class="super-note-modal__header">
      <div class="super-note-modal__title-row">
        <span class="super-note-modal__icon">📝</span>
        <div class="super-note-modal__title">
          <span class="super-note-modal__name">${H(s.department || i)}</span>
          <span class="super-note-badge ${a}">${i}</span>
        </div>
        <button class="super-note-modal__close">&times;</button>
      </div>
      ${s.provider ? `<div class="super-note-modal__provider">${H(s.provider)}</div>` : ""}
      <div class="super-note-modal__meta">
        ${s.effectiveDate ? `<span>${Be(s.effectiveDate)}</span>` : ""}
        ${s.visitType ? `<span class="super-note-modal__visit-type">${H(s.visitType)}</span>` : ""}
        ${s.task ? `<span class="super-note-modal__task">${H(s.task)}</span>` : ""}
      </div>
    </div>

    <div class="super-note-modal__body">
      <div class="super-note-modal__text">${H(s.noteText || "No note content available.")}</div>
    </div>

    <div class="super-note-modal__footer">
      ${s.signedDate ? `<span class="super-note-modal__signed">Signed: ${vi(s.signedDate)}</span>` : ""}
      ${s.hasAddendum ? '<span class="super-note-modal__addendum">Has Addendum</span>' : ""}
    </div>
  `, de(e, "super-note-modal");
}
async function Ci(e, s = null) {
  const n = await window.getCurrentParams(), i = ki();
  Dt().appendChild(i);
  try {
    const a = await yi(e, n);
    Si(i, a.therapyDocument, s);
  } catch (a) {
    It(i, a.message, "super-therapy-modal");
  }
}
function ki() {
  const e = document.createElement("div");
  return e.className = "super-therapy-modal", e.dataset.zoom = "100", e.innerHTML = `
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
  `, de(e, "super-therapy-modal"), _e(e), e.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", e.remove();
  }), e;
}
function _e(e) {
  const s = [50, 75, 100, 125, 150];
  e.querySelectorAll(".super-therapy-modal__zoom-btn").forEach((n) => {
    n.addEventListener("click", () => {
      const i = n.dataset.zoomAction, a = parseInt(e.dataset.zoom) || 100, r = s.indexOf(a);
      let c = a;
      i === "in" && r < s.length - 1 ? c = s[r + 1] : i === "out" && r > 0 && (c = s[r - 1]), e.dataset.zoom = c;
      const o = e.querySelector(".super-therapy-modal__zoom-level");
      o && (o.textContent = `${c}%`);
      const p = e.querySelector(".super-therapy-doc");
      p && (p.style.transform = `scale(${c / 100})`, p.style.transformOrigin = "top center");
    });
  });
}
function Si(e, s, n = null) {
  const { documentType: i } = s;
  switch (i) {
    case "EVAL":
      Ai(e, s, n);
      break;
    case "TEN":
      Ti(e, s, n);
      break;
    case "PR":
      Mi(e, s, n);
      break;
    case "RECERT":
      Li(e, s, n);
      break;
    case "DISCH":
      $i(e, s, n);
      break;
    default:
      Ri(e, s, n);
  }
  n && setTimeout(() => {
    Ni(e);
  }, 100);
}
function Ni(e) {
  const s = e.querySelectorAll(`[${Ke}="true"]`);
  if (s.length === 0 || (s[0].scrollIntoView({ behavior: "smooth", block: "center" }), s.length === 1)) return;
  const n = document.createElement("div");
  n.className = "super-therapy-highlight-nav", n.innerHTML = `
    <button class="super-therapy-highlight-nav__btn" data-action="prev" title="Previous highlight">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <span class="super-therapy-highlight-nav__count">1 of ${s.length}</span>
    <button class="super-therapy-highlight-nav__btn" data-action="next" title="Next highlight">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  `;
  const i = e.querySelector(".super-therapy-modal__body");
  i && i.appendChild(n);
  let a = 0;
  const r = (c) => {
    s.forEach((o) => o.classList.remove("super-therapy-highlight--active")), s[c].classList.add("super-therapy-highlight--active"), s[c].scrollIntoView({ behavior: "smooth", block: "center" }), n.querySelector(".super-therapy-highlight-nav__count").textContent = `${c + 1} of ${s.length}`;
  };
  n.querySelectorAll(".super-therapy-highlight-nav__btn").forEach((c) => {
    c.addEventListener("click", () => {
      c.dataset.action === "prev" ? a = a > 0 ? a - 1 : s.length - 1 : a = a < s.length - 1 ? a + 1 : 0, r(a);
    });
  }), s[0].classList.add("super-therapy-highlight--active");
}
const xi = {
  PT: "Physical Therapy",
  OT: "Occupational Therapy",
  ST: "Speech Therapy"
}, Pi = {
  EVAL: "Initial Evaluation",
  TEN: "Treatment Encounter Note(s)",
  PR: "Progress Report",
  RECERT: "Recertification",
  DISCH: "Discharge Summary"
};
function se(e, ...s) {
  for (const n of s) {
    if (e[n] !== void 0) return e[n];
    const i = n.charAt(0).toUpperCase() + n.slice(1);
    if (e[i] !== void 0) return e[i];
  }
  return null;
}
function be(e) {
  const s = e.jsonData || {}, n = s.Parameters || s.parameters || {}, i = e.discipline || "", a = xi[i] || i || "Therapy", r = e.documentType || "", c = Pi[r] || s.BodyDocumentName || s.bodyDocumentName || r, o = e.providerName || se(n, "ProviderName", "providerName") || se(s, "HeaderProviderName", "headerProviderName") || "", p = se(n, "PatientName", "patientName") || se(s, "HeaderPatientName", "headerPatientName") || se(s, "BodyPatientName", "bodyPatientName") || "";
  return `
    <div class="super-therapy-doc__header">
      <div class="super-therapy-doc__discipline">${H(a)}</div>
      <div class="super-therapy-doc__title">${H(c)}</div>
    </div>
    <div class="super-therapy-doc__info-row">
      <div class="super-therapy-doc__provider">
        <span class="super-therapy-doc__provider-label">Provider: </span>${H(o)}
      </div>
      <div class="super-therapy-doc__patient">${H(p)}</div>
    </div>
  `;
}
function we(e) {
  const s = e.jsonData || {}, n = s.Parameters || s.parameters || {}, i = se(n, "PatientName", "patientName") || se(s, "BodyPatientName", "bodyPatientName") || "", a = se(n, "MedicalRecordNumber", "medicalRecordNumber") || se(s, "BodyMRN", "bodyMRN") || "", r = se(n, "DateOfBirth", "dateOfBirth") || se(s, "BodyDOB", "bodyDOB") || "", c = se(n, "PayerName", "payerName") || "", o = se(n, "StartOfCare", "startOfCare") || "";
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Identification Information</div>
      <div class="super-therapy-section__body">
        <table class="super-therapy-id-table">
          <tr>
            <td class="super-therapy-id-table__label">Patient:</td>
            <td class="super-therapy-id-table__value">${H(i)}</td>
            ${r ? `<td class="super-therapy-id-table__label">DOB:</td><td class="super-therapy-id-table__value">${H(r)}</td>` : ""}
            ${o ? `<td class="super-therapy-id-table__label">Start of Care:</td><td class="super-therapy-id-table__value">${H(o)}</td>` : ""}
          </tr>
          <tr>
            ${c ? `<td class="super-therapy-id-table__label">Payer:</td><td class="super-therapy-id-table__value">${H(c)}</td>` : ""}
            <td class="super-therapy-id-table__label">MRN:</td>
            <td class="super-therapy-id-table__value" ${c ? "" : 'colspan="3"'}>${H(a)}</td>
          </tr>
        </table>
      </div>
    </div>
  `;
}
function Je(e) {
  if (!e || e.length === 0) return "";
  const s = e.filter((i) => i.IsMedicalDx || i.isMedicalDx), n = e.filter((i) => i.IsTreatmentDx || i.isTreatmentDx);
  return s.length === 0 && n.length === 0 ? "" : `
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
            ${s.map((i) => `
              <tr>
                <td>Medical</td>
                <td class="super-therapy-dx-table__code">${H(i.Code || i.code || "")}</td>
                <td>${H(i.Description || i.description || "")}</td>
                <td>${Be(i.OnsetDate || i.onsetDate) || "-"}</td>
              </tr>
            `).join("")}
            ${n.map((i) => `
              <tr>
                <td>Treatment</td>
                <td class="super-therapy-dx-table__code">${H(i.Code || i.code || "")}</td>
                <td>${H(i.Description || i.description || "")}</td>
                <td>${Be(i.OnsetDate || i.onsetDate) || "-"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function Yt(e, s = !1, n = null) {
  const i = s ? "LTG" : "STG", a = e.GoalNum || e.goalNum || "?", r = e.GoalStatus || e.goalStatus || "Continue", c = `super-therapy-goal__status--${r.toLowerCase().replace(/\s+/g, "")}`, o = e.GoalText || e.goalText || "", p = e.TargetDate || e.targetDate || "", d = e.GoalPlofText || e.goalPlofText || "", u = e.BaselineValueText || e.baselineValueText || "", l = e.PriorValueText || e.priorValueText || "", m = e.CurrentValueText || e.currentValueText || "", h = e.Comments || e.comments || "", _ = e.MeasurementCaption || e.measurementCaption || "", C = bi([o, h, u, l, m, d], n) ? `${Ke}="true"` : "", f = Ue(n, o) ? "super-therapy-highlight" : "", x = Ue(n, h) ? "super-therapy-highlight" : "";
  return `
    <div class="super-therapy-goal" ${C}>
      <div class="super-therapy-goal__header">
        <div class="super-therapy-goal__title">${i} #${a} - ${r}</div>
        <span class="super-therapy-goal__status ${c}">${r}</span>
      </div>
      <div class="super-therapy-goal__body">
        <p class="super-therapy-goal__text ${f}">${H(o)}</p>
        ${p ? `<p class="super-therapy-goal__target">Target: ${Be(p)}</p>` : ""}
      </div>
      <div class="super-therapy-goal__progress">
        <div>
          <div class="super-therapy-goal__progress-item">
            <div class="super-therapy-goal__progress-label">PLOF</div>
            <div class="super-therapy-goal__progress-value">${H(d || "Not specified")}</div>
          </div>
          ${u ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Baseline${_ ? ` <span class="super-therapy-goal__progress-sublabel">(${H(_)})</span>` : ""}</div>
              <div class="super-therapy-goal__progress-value">${H(u)}</div>
            </div>
          ` : ""}
        </div>
        <div>
          ${l ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Previous</div>
              <div class="super-therapy-goal__progress-value">${H(l)}</div>
            </div>
          ` : ""}
          ${m ? `
            <div class="super-therapy-goal__progress-item">
              <div class="super-therapy-goal__progress-label">Current</div>
              <div class="super-therapy-goal__progress-value">${H(m)}</div>
            </div>
          ` : ""}
        </div>
      </div>
      ${h ? `
        <div class="super-therapy-goal__comments">
          <span class="super-therapy-goal__comments-label">Comments: </span>
          <span class="${x}">${H(h)}</span>
        </div>
      ` : ""}
    </div>
  `;
}
function Ct(e, s = null) {
  if (!e || e.length === 0) return "";
  const n = e.filter((a) => !a.IsLongTerm && !a.isLongTerm), i = e.filter((a) => a.IsLongTerm || a.isLongTerm);
  return `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Goals</div>
      <div class="super-therapy-section__body">
        ${i.length > 0 ? `
          <div class="super-therapy-goals-title">Long-Term Goals</div>
          ${i.map((a) => Yt(a, !0, s)).join("")}
        ` : ""}
        ${n.length > 0 ? `
          <div class="super-therapy-goals-title">Short-Term Goals</div>
          ${n.map((a) => Yt(a, !1, s)).join("")}
        ` : ""}
      </div>
    </div>
  `;
}
function kt(e) {
  return !e || e.length === 0 ? "" : `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Plan of Treatment - Interventions</div>
      <div class="super-therapy-section__body">
        ${e.map((s) => `
          <div class="super-therapy-intervention">
            <span class="super-therapy-intervention__code">${H(s.Code || s.code || "")}</span>
            - ${H(s.Description || s.description || "")}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
function Ye(e, s = null) {
  if (!e || e.length === 0) return "";
  const n = {};
  return e.forEach((i) => {
    const a = i.PrintSectionName || i.printSectionName || i.SectionName || i.sectionName || "Assessment", r = i.PrintGroupName || i.printGroupName || i.GroupName || i.groupName || "", c = i.GroupValues || i.groupValues || "";
    n[a] || (n[a] = []), n[a].push({ groupName: r, values: c });
  }), Object.entries(n).map(([i, a]) => `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">${H(i)}</div>
      <div class="super-therapy-section__body">
        ${a.map((r) => {
    const c = Ue(s, r.values), o = c ? `${Ke}="true"` : "", p = c ? "super-therapy-highlight" : "";
    return `
            <div class="super-therapy-detail-item" ${o}>
              ${r.groupName ? `<div class="super-therapy-detail-item__name">${H(r.groupName)}</div>` : ""}
              <div class="super-therapy-detail-item__value ${p}">${H(r.values)}</div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `).join("");
}
function Os(e) {
  if (!e) return "";
  const s = e.Dates || e.dates || [], n = e.ServiceRows || e.serviceRows || [];
  return s.length === 0 || n.length === 0 ? "" : `
    <div class="super-therapy-section">
      <div class="super-therapy-section-header">Service Matrix</div>
      <div class="super-therapy-section__body">
        <table class="super-therapy-matrix">
          <thead>
            <tr>
              <th class="super-therapy-matrix__service-col">Service</th>
              ${s.map((i) => `<th>${H(i)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${n.map((i) => `
              <tr>
                <td class="super-therapy-matrix__service-col">${H(i.ServiceCodeAndAbbrev || "")}</td>
                ${s.map((a) => {
    const r = i.DurationsByDate?.[a] || "";
    return `<td>${r ? r + "m" : "-"}</td>`;
  }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
        ${e.TotalUniqueDays ? `<div style="margin-top: 8px; font-size: 12px; color: #6b7280;">Total Treatment Days: ${e.TotalUniqueDays}</div>` : ""}
      </div>
    </div>
  `;
}
function xe(e) {
  if (!e) return "";
  const s = e.OriginalSignatureText || e.originalSignatureText, n = e.OriginalSignatureDate || e.originalSignatureDate, i = e.OriginalCoSignatureText || e.originalCoSignatureText, a = e.OriginalCosignatureDate || e.originalCosignatureDate;
  return !s && !i ? "" : `
    <div class="super-therapy-signatures">
      ${s ? `
        <div class="super-therapy-signature">
          <div class="super-therapy-signature__line">
            <div class="super-therapy-signature__name-area">
              <div class="super-therapy-signature__name">${H(s)}</div>
              <div class="super-therapy-signature__label">Original Signature:</div>
            </div>
            ${n ? `
              <div class="super-therapy-signature__date-area">
                <div class="super-therapy-signature__date">${Jt(n)}</div>
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
              <div class="super-therapy-signature__name">${H(i)}</div>
              <div class="super-therapy-signature__label">Cosignature:</div>
            </div>
            ${a ? `
              <div class="super-therapy-signature__date-area">
                <div class="super-therapy-signature__date">${Jt(a)}</div>
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
function De(e, s = 100) {
  return `
    <div class="super-therapy-modal__toolbar">
      <div class="super-therapy-modal__toolbar-title">${H(e)}</div>
      <div class="super-therapy-modal__toolbar-controls">
        <div class="super-therapy-modal__zoom">
          <button class="super-therapy-modal__zoom-btn" data-zoom-action="out" title="Zoom Out">−</button>
          <span class="super-therapy-modal__zoom-level">${s}%</span>
          <button class="super-therapy-modal__zoom-btn" data-zoom-action="in" title="Zoom In">+</button>
        </div>
        <button class="super-therapy-modal__close">&times;</button>
      </div>
    </div>
  `;
}
function Ti(e, s, n = null) {
  const i = e.querySelector(".super-therapy-modal__container"), a = s.jsonData || {}, r = parseInt(e.dataset.zoom) || 100, c = s.displayName || `${s.discipline} TEN - Treatment Note`, o = a.Sections || a.sections || [], p = se(a, "CompletedDateFormatted", "completedDateFormatted") || "", d = se(a, "AssessmentDateFormatted", "assessmentDateFormatted") || p, u = {
    OriginalSignatureText: a.OriginalSignatureText || a.originalSignatureText,
    OriginalSignatureDate: a.OriginalSignatureDate || a.originalSignatureDate,
    OriginalCoSignatureText: a.OriginalCoSignatureText || a.originalCoSignatureText,
    OriginalCosignatureDate: a.OriginalCosignatureDate || a.originalCosignatureDate
  }, l = [], m = o[0];
  m && (m.Details || m.details || []).forEach((_) => {
    l.push({
      name: _.PrintGroupName || _.printGroupName || "",
      value: _.GroupValues || _.groupValues || ""
    });
  }), i.innerHTML = `
    ${De(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${be(s)}
        ${we(s)}

        <!-- Date of Service box -->
        <div class="super-therapy-dates-box">
          <div class="super-therapy-dates-box__item">Date of Service: ${H(d)}</div>
          <div class="super-therapy-dates-box__item">Completed Date: ${H(p)}</div>
        </div>

        <!-- Summary of Daily Skilled Services -->
        ${l.length > 0 ? `
          <div class="super-therapy-section">
            <div class="super-therapy-section-header">Summary of Daily Skilled Services</div>
            <div class="super-therapy-section__body">
              ${l.map((h) => {
    const _ = /^\d{5}/.test(h.name), v = Ue(n, h.value), g = v ? `${Ke}="true"` : "", C = v ? "super-therapy-highlight" : "";
    return `
                  <div class="super-therapy-detail-item" ${g}>
                    <div class="super-therapy-detail-item__name ${_ ? "super-therapy-detail-item__name--code" : ""}">${H(h.name)}</div>
                    <div class="super-therapy-detail-item__value ${C}">${H(h.value)}</div>
                  </div>
                `;
  }).join("")}
            </div>
          </div>
        ` : ""}

        ${xe(u)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, de(e, "super-therapy-modal"), _e(e), e.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", e.remove();
  });
}
function Ai(e, s, n = null) {
  const i = e.querySelector(".super-therapy-modal__container"), a = s.jsonData || {}, r = parseInt(e.dataset.zoom) || 100, c = s.displayName || `${s.discipline} Eval - Initial Evaluation`, o = a.IdentifierInfo || a.identifierInfo || {}, p = a.Diagnoses || a.diagnoses || [], d = a.GoalTargets || a.goalTargets || [], u = a.Approaches || a.approaches || [], l = a.AssessmentLayout || a.assessmentLayout || [], m = a.ESignatures || a.eSignatures || {}, h = se(o, "Frequency", "frequency") || "", _ = se(o, "Duration", "duration") || "", v = se(o, "Intensity", "intensity") || "", g = se(o, "DateRange", "dateRange") || "", C = se(o, "PhysicianFullName", "physicianFullName") || "", f = se(o, "NPI", "npi") || "";
  i.innerHTML = `
    ${De(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${be(s)}
        ${we(s)}

        <!-- Treatment Plan Info -->
        ${h || _ || v || g ? `
          <div class="super-therapy-plan-info">
            ${g ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Certification Period: </span>${H(g)}</div>` : ""}
            ${h ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Frequency: </span>${H(h)}</div>` : ""}
            ${_ ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Duration: </span>${H(_)}</div>` : ""}
            ${v ? `<div class="super-therapy-plan-info__item"><span class="super-therapy-plan-info__label">Intensity: </span>${H(v)}</div>` : ""}
          </div>
        ` : ""}

        <!-- Physician Certification -->
        ${C ? `
          <div class="super-therapy-section">
            <div class="super-therapy-section-header">Physician Certification</div>
            <div class="super-therapy-section__body">
              <div><strong>Physician:</strong> ${H(C)}</div>
              ${f ? `<div><strong>NPI:</strong> ${H(f)}</div>` : ""}
            </div>
          </div>
        ` : ""}

        ${Je(p)}
        ${Ct(d, n)}
        ${kt(u)}
        ${Ye(l, n)}
        ${xe(m)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, de(e, "super-therapy-modal"), _e(e), e.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", e.remove();
  });
}
function Mi(e, s, n = null) {
  const i = e.querySelector(".super-therapy-modal__container"), a = s.jsonData || {}, r = parseInt(e.dataset.zoom) || 100, c = s.displayName || `${s.discipline} PR - Progress Report`, o = a.Diagnoses || a.diagnoses || [], p = a.AllActiveShortTermGoals || a.allActiveShortTermGoals || [], d = a.AllActiveLongTermGoals || a.allActiveLongTermGoals || [], u = [...p.map((v) => ({ ...v, IsLongTerm: !1 })), ...d.map((v) => ({ ...v, IsLongTerm: !0 }))], l = a.Approaches || a.approaches || [], m = a.AssessmentLayout || a.assessmentLayout || [], h = a.ServiceMatrixData || a.serviceMatrixData || {}, _ = a.ESignatures || a.eSignatures || {};
  i.innerHTML = `
    ${De(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${be(s)}
        ${we(s)}
        ${Je(o)}
        ${Ct(u, n)}
        ${Os(h)}
        ${kt(l)}
        ${Ye(m, n)}
        ${xe(_)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, de(e, "super-therapy-modal"), _e(e), e.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", e.remove();
  });
}
function Li(e, s, n = null) {
  const i = e.querySelector(".super-therapy-modal__container"), a = s.jsonData || {}, r = parseInt(e.dataset.zoom) || 100, c = s.displayName || `${s.discipline} Recert - Recertification`, o = a.Diagnoses || a.diagnoses || [], p = a.ProgressGoalTargets || a.progressGoalTargets || [], d = a.Approaches || a.approaches || [], u = a.AssessmentLayout || a.assessmentLayout || [], l = a.ServiceMatrixData || a.serviceMatrixData || {}, m = a.ESignatures || a.eSignatures || {};
  i.innerHTML = `
    ${De(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${be(s)}
        ${we(s)}
        ${Je(o)}
        ${Ct(p, n)}
        ${Os(l)}
        ${kt(d)}
        ${Ye(u, n)}
        ${xe(m)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, de(e, "super-therapy-modal"), _e(e), e.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", e.remove();
  });
}
function $i(e, s, n = null) {
  const i = e.querySelector(".super-therapy-modal__container"), a = s.jsonData || {}, r = parseInt(e.dataset.zoom) || 100, c = s.displayName || `${s.discipline} Disch - Discharge Summary`, o = a.Diagnoses || a.diagnoses || [], p = a.AssessmentLayout || a.assessmentLayout || [], d = a.ESignatures || a.eSignatures || {};
  i.innerHTML = `
    ${De(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${be(s)}
        ${we(s)}
        ${Je(o)}
        ${Ye(p, n)}
        ${xe(d)}
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, de(e, "super-therapy-modal"), _e(e), e.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", e.remove();
  });
}
function Ri(e, s, n = null) {
  const i = e.querySelector(".super-therapy-modal__container"), a = s.jsonData || {}, r = parseInt(e.dataset.zoom) || 100, c = s.displayName || "Therapy Document";
  i.innerHTML = `
    ${De(c, r)}
    <div class="super-therapy-modal__body">
      <div class="super-therapy-doc">
        ${be(s)}
        ${we(s)}
        <div class="super-therapy-section">
          <div class="super-therapy-section-header">Document Content</div>
          <div class="super-therapy-section__body">
            <pre class="super-therapy-raw-content">${H(JSON.stringify(a, null, 2))}</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="super-therapy-modal__footer">
      <button class="super-therapy-modal__btn super-therapy-modal__btn--secondary super-therapy-modal__close-btn">Close</button>
    </div>
  `, de(e, "super-therapy-modal"), _e(e), e.querySelector(".super-therapy-modal__close-btn")?.addEventListener("click", () => {
    document.body.style.overflow = "", e.remove();
  });
}
async function Ei(e, s = null) {
  const n = await window.getCurrentParams(), i = Oi();
  Dt().appendChild(i);
  try {
    const a = await Ne(e, n);
    qi(i, a.document, s);
  } catch (a) {
    It(i, a.message, "super-pdf-modal");
  }
}
function Oi() {
  const e = document.createElement("div");
  return e.className = "super-pdf-modal", e.innerHTML = `
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
  `, de(e, "super-pdf-modal"), e;
}
function qi(e, s, n = null) {
  const i = e.querySelector(".super-pdf-modal__container"), a = n && n.length > 0 && n[0].p ? n[0].p : 1, r = () => {
    document.body.style.overflow = "", e.remove();
  };
  i.innerHTML = `
    <div class="super-pdf-modal__header">
      <div class="super-pdf-modal__title-row">
        <span class="super-pdf-modal__icon">📄</span>
        <div class="super-pdf-modal__title">
          <span class="super-pdf-modal__name">${H(s.title || "Document")}</span>
          ${s.documentType ? `<span class="super-pdf-badge">${H(s.documentType)}</span>` : ""}
        </div>
        <button class="super-pdf-modal__close">&times;</button>
      </div>
    </div>
    <div class="super-pdf-modal__body"></div>
  `, de(e, "super-pdf-modal");
  const c = e.querySelector(".super-pdf-modal__body");
  ys(
    ps(wt, {
      url: s.signedUrl || null,
      wordBlocks: n || [],
      targetPage: a,
      title: s.title || "Document",
      documentType: s.documentType,
      effectiveDate: s.effectiveDate,
      fileSize: s.fileSize,
      onClose: r,
      expiresAt: !0,
      openInNewTabUrl: s.signedUrl || null
    }),
    c
  );
}
window.showClinicalNoteModal = wi;
window.showTherapyDocModal = Ci;
window.showDocumentModal = Ei;
window.parseEvidenceForViewer = gi;
window.SuperDocViewer = {
  open(e) {
    if (!e) return;
    const s = e.sourceType || e.type || "";
    if (s === "clinical_note" || s === "progress_note" || s === "practitioner_note") {
      const n = e.viewerId || e.sourceId || e.id;
      window.showClinicalNoteModal(n);
    } else if (s === "therapy_doc" || s === "therapy") {
      const n = e.viewerId || e.sourceId || e.id;
      window.showTherapyDocModal(n, e.quote);
    } else if (s === "pdf" || s === "document") {
      const n = e.viewerId || e.sourceId || e.id;
      window.showDocumentModal(n, e.wordBlocks || []);
    }
  }
};
function qe(e) {
  return e.sourceType === "order" || (e.evidenceId || "").startsWith("order-");
}
function Hi(e) {
  return (e.sourceId || e.evidenceId || "").replace(/^order-/, "");
}
function Fi(e) {
  const s = re(e).viewerType;
  return s === "document" || s === "clinical-note" || s === "therapy-document" || qe(e);
}
function qs({ item: e, context: s, onClose: n }) {
  const i = e?.mdsItem, a = e?.categoryKey, { data: r, loading: c, error: o } = Ms(i, a, s), p = i?.startsWith("I8000:") ? "I8000" : i, [d, u] = b(null), l = ee(/* @__PURE__ */ new Map()), m = ee(null), h = ee(null), v = Bi(r).filter(Fi), g = d && qe(d.ev), C = d ? re(d.ev).viewerType : null, f = C === "clinical-note", x = C === "therapy-document", k = d && !g && !f && !x, y = v.filter((D) => qe(D) ? !1 : re(D).viewerType === "document");
  z(() => {
    if (!r || y.length === 0) return;
    (async () => {
      let B;
      try {
        B = await window.getCurrentParams();
      } catch {
        return;
      }
      for (const $ of y) {
        const M = re($);
        if (!M.id || l.current.has(M.id)) continue;
        const G = Ne(M.id, B).then((K) => {
          const Q = l.current.get(M.id);
          return Q && (Q.document = K.document), K.document;
        }).catch((K) => (console.warn("[ItemPopover] Prefetch failed for", M.id, K), null));
        l.current.set(M.id, { document: null, promise: G });
      }
    })();
  }, [r]);
  const [S, E] = b(null), [N, w] = b(!1);
  z(() => {
    if (!d || g || f || x) {
      E(null), w(!1);
      return;
    }
    const D = re(d.ev);
    if (!D.id) return;
    const B = l.current.get(D.id);
    if (B?.document) {
      E(B.document), w(!1);
      return;
    }
    w(!0), (async () => {
      try {
        let M;
        if (B?.promise)
          M = await B.promise;
        else {
          const G = await window.getCurrentParams();
          M = (await Ne(D.id, G)).document, l.current.set(D.id, { document: M, promise: Promise.resolve(M) });
        }
        E(M);
      } catch (M) {
        console.error("[ItemPopover] Failed to load document:", M), E(null);
      } finally {
        w(!1);
      }
    })();
  }, [d, g, f, x]), z(() => {
    if (!g || !m.current) return;
    const D = m.current, B = Hi(d.ev);
    D.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading administrations...</span></div>', window.renderSplitAdministrations ? (async () => {
      const G = getOrg()?.org, K = window.getChatFacilityInfo?.() || "", Q = { assessmentId: s?.assessmentId, orgSlug: G, facilityName: K };
      await window.renderSplitAdministrations(D, B, void 0, Q);
    })().catch((M) => {
      console.error("[ItemPopover] Failed to load administrations:", M), D.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load administrations</span></div>';
    }) : D.innerHTML = '<div class="cc-pop__viewer-loading"><span>Administration viewer not available</span></div>';
  }, [d, g]), z(() => {
    if (!f && !x || !h.current) return;
    const D = h.current, B = re(d.ev), $ = d.ev.quoteText || d.ev.quote || d.ev.snippet || "";
    D.innerHTML = '<div class="cc-pop__viewer-loading"><div class="mds-cc__spinner mds-cc__spinner--sm"></div><span>Loading...</span></div>', (async () => {
      const K = getOrg()?.org, Q = window.getChatFacilityInfo?.() || "", R = { assessmentId: s?.assessmentId, orgSlug: K, facilityName: Q };
      f && window.renderSplitNote ? await window.renderSplitNote(D, B.id, R) : x && window.renderSplitTherapy ? await window.renderSplitTherapy(D, B.id, $, R) : D.innerHTML = '<div class="cc-pop__viewer-loading"><span>Viewer not available</span></div>';
    })().catch((G) => {
      console.error("[ItemPopover] Failed to load source:", G), D.innerHTML = '<div class="cc-pop__viewer-loading"><span>Failed to load</span></div>';
    });
  }, [d, f, x]);
  const T = X((D, B) => {
    u({ ev: D, index: B });
  }, []), F = X(() => {
    u(null);
  }, []), V = d !== null;
  return /* @__PURE__ */ t("div", { class: "cc-pop__backdrop", onClick: (D) => {
    D.target === D.currentTarget && n();
  }, children: /* @__PURE__ */ t("div", { class: `cc-pop${V ? " cc-pop--split" : ""}`, onClick: (D) => D.stopPropagation(), children: [
    /* @__PURE__ */ t("div", { class: "cc-pop__header", children: /* @__PURE__ */ t("div", { class: "cc-pop__header-top", children: [
      /* @__PURE__ */ t("div", { class: "cc-pop__header-left", children: [
        V && /* @__PURE__ */ t("button", { class: "cc-pop__back-btn", onClick: F, type: "button", children: [
          /* @__PURE__ */ t("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ t("polyline", { points: "15 18 9 12 15 6" }) }),
          "Back"
        ] }),
        /* @__PURE__ */ t("span", { class: "cc-pop__code", children: p }),
        /* @__PURE__ */ t("span", { class: "cc-pop__name", children: e?.itemName || r?.item?.description || "Item Detail" })
      ] }),
      /* @__PURE__ */ t("button", { class: "cc-pop__close", onClick: n, type: "button", children: "×" })
    ] }) }),
    V ? /* @__PURE__ */ t("div", { class: "cc-pop__split-body", children: [
      /* @__PURE__ */ t("div", { class: "cc-pop__sources", children: [
        /* @__PURE__ */ t("div", { class: "cc-pop__sources-label", children: [
          "Sources (",
          v.length,
          ")"
        ] }),
        v.map((D, B) => {
          const $ = qe(D), M = D.sourceType || vt(D.displayName, D.evidenceId), G = D.displayName || bt[M] || ($ ? "Orders" : "Document"), K = D.quoteText || D.orderDescription || D.quote || D.snippet || D.text || "", Q = D.wordBlocks?.[0]?.p, R = d.ev === D;
          return /* @__PURE__ */ t(
            "div",
            {
              class: `cc-pop__source-card${R ? " cc-pop__source-card--active" : ""}`,
              onClick: () => u({ ev: D, index: B }),
              role: "button",
              children: [
                /* @__PURE__ */ t("div", { class: `cc-pop__source-badge${$ ? " cc-pop__source-badge--order" : ""}`, children: G }),
                K && /* @__PURE__ */ t("div", { class: "cc-pop__source-snippet", children: K }),
                !$ && Q && /* @__PURE__ */ t("div", { class: "cc-pop__source-page", children: [
                  "Page ",
                  Q
                ] })
              ]
            },
            B
          );
        })
      ] }),
      /* @__PURE__ */ t("div", { class: "cc-pop__viewer", children: [
        k && N && /* @__PURE__ */ t("div", { class: "cc-pop__viewer-loading", children: [
          /* @__PURE__ */ t("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
          /* @__PURE__ */ t("span", { children: "Loading document..." })
        ] }),
        k && !N && S && /* @__PURE__ */ t(
          wt,
          {
            url: S.signedUrl || null,
            wordBlocks: d.ev.wordBlocks || [],
            targetPage: d.ev.wordBlocks?.[0]?.p || 1,
            title: S.title || "Document",
            documentType: S.documentType,
            effectiveDate: S.effectiveDate,
            fileSize: S.fileSize,
            expiresAt: !0,
            openInNewTabUrl: S.signedUrl || null
          }
        ),
        k && !N && !S && /* @__PURE__ */ t("div", { class: "cc-pop__viewer-loading", children: /* @__PURE__ */ t("span", { children: "Failed to load document" }) }),
        g && /* @__PURE__ */ t("div", { ref: m, class: "cc-pop__admin-viewer" }),
        (f || x) && /* @__PURE__ */ t("div", { ref: h, class: "cc-pop__note-viewer" })
      ] })
    ] }) : /* @__PURE__ */ t("div", { class: "cc-pop__body", children: [
      c && /* @__PURE__ */ t("div", { class: "cc-pop__loading", children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
        /* @__PURE__ */ t("span", { children: "Loading..." })
      ] }),
      o && /* @__PURE__ */ t("div", { class: "cc-pop__error", children: o }),
      !c && !o && r && /* @__PURE__ */ t(
        $s,
        {
          variant: "compact",
          data: r,
          detectionItem: e,
          mdsItem: i,
          onViewSource: T
        }
      )
    ] }),
    V && !c && !o && r && /* @__PURE__ */ t("div", { style: { padding: "0 16px 12px", flexShrink: 0, borderTop: "1px solid #e5e7eb" }, children: /* @__PURE__ */ t("div", { class: "sid__actions", children: [
      /* @__PURE__ */ t("button", { class: "sid__btn sid__btn--primary", onClick: () => window.QuerySendModal?.show(r.item || r), type: "button", children: "Query Physician" }),
      i && /* @__PURE__ */ t("button", { class: "sid__btn sid__btn--secondary", onClick: () => window.navigateToMDSItem?.(i), type: "button", children: [
        "Go to ",
        p,
        " ↗"
      ] })
    ] }) })
  ] }) });
}
function Bi(e) {
  const s = e?.item;
  if (!s) return [];
  if (!!!s.columns) return s.evidence || s.queryEvidence || [];
  const i = [], a = /* @__PURE__ */ new Set();
  for (const r of Object.values(s.columns || {}))
    r?.evidence && r.evidence.forEach((c) => {
      const o = c.sourceId || c.quote || JSON.stringify(c);
      a.has(o) || (a.add(o), i.push(c));
    });
  return i;
}
function he(e) {
  return e.deadlines?.urgency || e.urgency || "on_track";
}
function Gi(e, s, n, i) {
  let a = e;
  return s !== "all" && (a = a.filter((r) => r.payerType === s)), n !== "all" && (a = a.filter((r) => r.assessmentClass === n)), i === "revenue" && (a = a.filter((r) => r.pdpm?.hasImprovements)), i === "issues" && (a = a.filter((r) => {
    const c = r.udaSummary, o = c && (c.bims === "missing" || c.bims === "near_miss" || c.bims === "in_progress" || c.phq9 === "missing" || c.phq9 === "near_miss" || c.phq9 === "in_progress" || c.gg === "missing" || c.gg === "near_miss" || c.gg === "in_progress"), p = r.compliance?.checks?.orders ? r.compliance.checks.orders.status !== "passed" : !1;
    return o || p;
  })), a;
}
const Ve = ["overdue", "urgent", "approaching", "on_track", "completed"], Ui = {
  overdue: { label: "OVERDUE", color: "#ef4444" },
  urgent: { label: "URGENT", color: "#f97316" },
  approaching: { label: "APPROACHING", color: "#eab308" },
  on_track: { label: "ON TRACK", color: "#22c55e" },
  completed: { label: "COMPLETED", color: "#6b7280" }
};
function Vi(e) {
  const s = {};
  for (const n of Ve) s[n] = [];
  for (const n of e) {
    const i = he(n);
    s[i] ? s[i].push(n) : s.on_track.push(n);
  }
  for (const n of Ve)
    s[n].sort((i, a) => {
      const r = i.ardDate ? new Date(i.ardDate) : /* @__PURE__ */ new Date(0), c = a.ardDate ? new Date(a.ardDate) : /* @__PURE__ */ new Date(0);
      return r - c;
    });
  return s;
}
function zi(e) {
  let s = 0, n = 0;
  for (const a of e) {
    const r = a.udaSummary;
    r && ((r.bims === "complete" || r.bims === "locked_in_range") && s++, (r.gg === "complete" || r.gg === "locked_in_range") && s++, (r.phq9 === "complete" || r.phq9 === "locked_in_range") && s++), a.pdpm?.hasImprovements && n++;
  }
  const i = [];
  return s > 0 && i.push(`${s} UDAs complete`), n > 0 && i.push(`${n} revenue opp.`), i.join(" · ") || `${e.length} assessment${e.length !== 1 ? "s" : ""}`;
}
function Zt(e) {
  let s = 0;
  const n = he(e);
  return n === "overdue" ? s += 4 : n === "urgent" ? s += 3 : n === "approaching" && (s += 2), qn(e.pdpm?.payment) > 0 && (s += 3), e.udaSummary && (e.udaSummary.bims === "missing" && (s += 1), e.udaSummary.phq9 === "missing" && (s += 1), e.udaSummary.gg === "missing" && (s += 1)), s;
}
const ji = {
  overdue: "#ef4444",
  urgent: "#f97316",
  approaching: "#eab308",
  on_track: "#22c55e",
  completed: "#6b7280"
};
function Qi(e) {
  const s = [];
  if (e.sectionProgress?.total > 0 && s.push(`${e.sectionProgress.completed}/${e.sectionProgress.total} sections`), e.udaSummary) {
    const n = [];
    e.udaSummary.bims === "missing" && n.push("BIMS"), e.udaSummary.phq9 === "missing" && n.push("PHQ-9"), e.udaSummary.gg === "missing" && n.push("GG"), n.length > 0 && s.push(`${n.join(", ")} missing`);
  }
  return s.join(" · ");
}
function Wi({ assessments: e, outstandingQueries: s, onViewChange: n, onOpenAssessment: i }) {
  const a = ae(() => {
    let o = 0, p = 0, d = 0, u = 0, l = 0, m = 0;
    for (const h of e) {
      const _ = he(h);
      _ === "overdue" && o++, (_ === "urgent" || _ === "approaching") && p++, h.isHippsOpportunityPrimary && d++;
      const v = h.detectionSummary?.docRisks;
      v && (u += v.total || 0, l += v.diagnosisMissing || 0, m += v.treatmentMissing || 0);
    }
    return { overdue: o, urgent: p, hipps: d, queries: (s || []).length, docRiskTotal: u, docRiskDx: l, docRiskTx: m };
  }, [e, s]), r = ae(() => [...e].filter((o) => {
    const p = he(o);
    return p === "overdue" || p === "urgent" || p === "approaching";
  }).sort((o, p) => Zt(p) - Zt(o)).slice(0, 8), [e]), c = ae(() => e.filter((o) => o.isHippsOpportunityPrimary).slice(0, 5), [e]);
  return /* @__PURE__ */ t("div", { class: "mds-cc__overview", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__ov-cards", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__ov-card mds-cc__ov-card--red", onClick: () => n("assessments"), children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-icon", children: /* @__PURE__ */ t("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#ef4444", "stroke-width": "2", children: [
          /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ t("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
          /* @__PURE__ */ t("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
        ] }) }),
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-body", children: [
          /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-num", children: a.overdue }),
          /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-label", children: "Overdue" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { class: "mds-cc__ov-card mds-cc__ov-card--orange", onClick: () => n("assessments"), children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-icon", children: /* @__PURE__ */ t("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#f97316", "stroke-width": "2", children: [
          /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ t("polyline", { points: "12 6 12 12 16 14" })
        ] }) }),
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-body", children: [
          /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-num", children: a.urgent }),
          /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-label", children: "Urgent" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { class: "mds-cc__ov-card mds-cc__ov-card--green", onClick: () => n("assessments"), children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-icon", children: /* @__PURE__ */ t("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#22c55e", "stroke-width": "2", children: [
          /* @__PURE__ */ t("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
          /* @__PURE__ */ t("polyline", { points: "22 4 12 14.01 9 11.01" })
        ] }) }),
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-body", children: [
          /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-num", children: a.hipps }),
          /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-label", children: "HIPPS Opportunities" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { class: "mds-cc__ov-card mds-cc__ov-card--blue", onClick: () => n("queries"), children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-icon", children: /* @__PURE__ */ t("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#6366f1", "stroke-width": "2", children: [
          /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
          /* @__PURE__ */ t("polyline", { points: "14 2 14 8 20 8" }),
          /* @__PURE__ */ t("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
          /* @__PURE__ */ t("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
        ] }) }),
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-body", children: [
          /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-num", children: a.queries }),
          /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-label", children: "Outstanding Queries" })
        ] })
      ] })
    ] }),
    a.docRiskTotal > 0 && /* @__PURE__ */ t("div", { class: "mds-cc__ov-card mds-cc__ov-card--amber mds-cc__ov-card--full", onClick: () => n("docRisks"), children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-icon", children: /* @__PURE__ */ t("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#d97706", "stroke-width": "2", children: [
        /* @__PURE__ */ t("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
        /* @__PURE__ */ t("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
        /* @__PURE__ */ t("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
      ] }) }),
      /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-body", children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-num", children: a.docRiskTotal }),
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-label", children: "Documentation Risks" }),
        /* @__PURE__ */ t("div", { class: "mds-cc__ov-card-sublabel", children: [
          a.docRiskDx > 0 && /* @__PURE__ */ t("span", { children: [
            a.docRiskDx,
            " missing diagnosis"
          ] }),
          a.docRiskDx > 0 && a.docRiskTx > 0 && /* @__PURE__ */ t("span", { children: " · " }),
          a.docRiskTx > 0 && /* @__PURE__ */ t("span", { children: [
            a.docRiskTx,
            " missing treatment"
          ] })
        ] })
      ] })
    ] }),
    r.length > 0 && /* @__PURE__ */ t("div", { class: "mds-cc__ov-section", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__ov-section-header", children: "Needs Attention" }),
      r.map((o) => {
        const p = o.id || o.assessmentId || o.externalAssessmentId, d = he(o), u = Se(o.pdpm?.payment), l = Qi(o), m = lt(o.assessmentType);
        return /* @__PURE__ */ t("div", { class: "mds-cc__ov-priority", onClick: () => i(o), children: [
          /* @__PURE__ */ t("span", { class: "mds-cc__urgency-dot", style: { background: ji[d] || "#9ca3af" } }),
          /* @__PURE__ */ t("span", { class: "mds-cc__ov-priority-name", children: o.patientName }),
          m && /* @__PURE__ */ t("span", { class: "mds-cc__ov-priority-type", children: m }),
          o.pdpm?.currentHipps && /* @__PURE__ */ t("span", { class: "mds-cc__ov-hipps-code", children: o.pdpm.currentHipps }),
          /* @__PURE__ */ t("span", { class: "mds-cc__ov-priority-issues", children: l }),
          u && /* @__PURE__ */ t("span", { class: "mds-cc__card-badge--revenue", children: u })
        ] }, p);
      })
    ] }),
    c.length > 0 && /* @__PURE__ */ t("div", { class: "mds-cc__ov-section", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__ov-section-header", children: "HIPPS Opportunities" }),
      c.map((o) => {
        const p = o.id || o.assessmentId || o.externalAssessmentId, d = Se(o.pdpm?.payment), u = lt(o.assessmentType);
        return /* @__PURE__ */ t("div", { class: "mds-cc__ov-hipps-row", onClick: () => i(o), children: [
          /* @__PURE__ */ t("span", { class: "mds-cc__ov-hipps-name", children: o.patientName }),
          u && /* @__PURE__ */ t("span", { class: "mds-cc__ov-priority-type", children: u }),
          /* @__PURE__ */ t("span", { class: "mds-cc__ov-hipps-codes", children: [
            o.pdpm?.currentHipps && /* @__PURE__ */ t("span", { class: "mds-cc__ov-hipps-code", children: o.pdpm.currentHipps }),
            o.pdpm?.potentialHipps && o.pdpm.potentialHipps !== o.pdpm.currentHipps && /* @__PURE__ */ t(Y, { children: [
              /* @__PURE__ */ t("span", { class: "mds-cc__ov-hipps-arrow", children: "→" }),
              /* @__PURE__ */ t("span", { class: "mds-cc__ov-hipps-code mds-cc__ov-hipps-code--improved", children: o.pdpm.potentialHipps })
            ] })
          ] }),
          d && /* @__PURE__ */ t("span", { class: "mds-cc__card-badge--revenue", children: d })
        ] }, p);
      })
    ] })
  ] });
}
function Hs() {
  return /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__spinner" }),
    /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: "Loading assessments..." })
  ] });
}
function Ki({ message: e, onRetry: s }) {
  return /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__state-icon", children: "⚠" }),
    /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: e }),
    /* @__PURE__ */ t("button", { class: "mds-cc__retry-btn", onClick: s, children: "Retry" })
  ] });
}
function Ji() {
  return /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__state-icon", children: "📋" }),
    /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: "No assessments found." })
  ] });
}
function Yi(e) {
  if (!e) return "";
  const s = Math.floor((Date.now() - new Date(e)) / 864e5);
  return s === 0 ? "today" : s === 1 ? "1d ago" : `${s}d ago`;
}
function Fs(e) {
  return e ? e.replace(/\s*\/\s*/g, " ").replace(/\s{2,}/g, " ").trim() : "";
}
function Zi(e) {
  const s = e.ardDaysRemaining;
  if (s == null) return null;
  let n, i;
  return s < 0 ? (n = `ARD passed ${Math.abs(s)}d ago`, i = "mds-cc__ard--critical") : s === 0 ? (n = "ARD today", i = "mds-cc__ard--critical") : s <= 3 ? (n = `ARD in ${s}d`, i = "mds-cc__ard--warn") : (n = `ARD in ${s}d`, i = "mds-cc__ard--neutral"), /* @__PURE__ */ t("span", { class: `mds-cc__ard ${i}`, children: n });
}
function Xt(e) {
  return [...e].sort((s, n) => {
    const i = s.ardDaysRemaining ?? 1 / 0, a = n.ardDaysRemaining ?? 1 / 0;
    return i - a;
  });
}
function es({ q: e, expanded: s, onToggle: n, onOpenAssessment: i, assessmentCtx: a, isPending: r }) {
  const c = Se(e.assessmentPayment), o = e.sentTo?.[0] || e.practitioner, p = o ? `${o.firstName || ""} ${o.lastName || ""}`.trim() : null, d = o?.title;
  return /* @__PURE__ */ t("div", { class: `mds-cc__qcard${s ? " mds-cc__qcard--open" : ""}`, children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__qcard-header", onClick: n, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__qcard-left", children: [
        /* @__PURE__ */ t("span", { class: "mds-cc__qcard-patient", children: e.patientName }),
        /* @__PURE__ */ t("div", { class: "mds-cc__qcard-diag", children: [
          /* @__PURE__ */ t("span", { class: "mds-cc__qcard-code", children: e.mdsItem }),
          /* @__PURE__ */ t("span", { class: "mds-cc__qcard-name", children: e.mdsItemName })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { class: "mds-cc__qcard-right", children: [
        Zi(e),
        c && /* @__PURE__ */ t("span", { class: `mds-cc__qcard-delta${r ? " mds-cc__qcard-delta--pending" : ""}`, children: c }),
        /* @__PURE__ */ t("svg", { class: `mds-cc__qcard-chevron${s ? " mds-cc__qcard-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: "mds-cc__qcard-meta", children: [
      a && /* @__PURE__ */ t("span", { class: "mds-cc__qcard-ctx", children: a }),
      /* @__PURE__ */ t("span", { class: `mds-cc__qcard-status mds-cc__qcard-status--${r ? "pending" : "sent"}`, children: r ? "Not yet sent" : `Sent ${Yi(e.sentAt)}` }),
      p && /* @__PURE__ */ t("span", { class: "mds-cc__qcard-practitioner", children: [
        "to ",
        p,
        d ? `, ${d}` : ""
      ] })
    ] }),
    s && /* @__PURE__ */ t("div", { class: "mds-cc__qcard-body", children: /* @__PURE__ */ t("div", { class: "mds-cc__qcard-actions", children: [
      /* @__PURE__ */ t("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--primary", onClick: (u) => {
        u.stopPropagation(), i();
      }, children: "Open in PDPM Analyzer" }),
      !r && /* @__PURE__ */ t("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--secondary", onClick: (u) => {
        u.stopPropagation();
        const l = u.currentTarget;
        l.textContent = "Sending...", l.disabled = !0;
        try {
          window.QueryAPI.resendQuery(e.id).then(() => {
            window.SuperToast?.success?.("SMS resent"), l.textContent = "Sent!";
          }).catch((m) => {
            console.error("[Super] Resend failed:", m), window.SuperToast?.error?.("Failed to resend"), l.textContent = "Resend SMS", l.disabled = !1;
          });
        } catch (m) {
          console.error("[Super] Resend error:", m), l.textContent = "Resend SMS", l.disabled = !1;
        }
      }, children: "Resend SMS" })
    ] }) })
  ] });
}
function Xi({ outstandingQueries: e, recentlySigned: s, assessments: n, onOpenAssessment: i }) {
  const [a, r] = b(null), c = Xt((e || []).filter((m) => m.status === "pending")), o = Xt((e || []).filter((m) => m.status === "sent" || m.status === "awaiting_response"));
  function p(m) {
    const h = (n || []).find((_) => _.id === m.mdsAssessmentId);
    return h?.externalAssessmentId || h?.assessmentId || h?.id || m.mdsAssessmentId;
  }
  function d(m) {
    const h = (n || []).find((_) => _.id === m.mdsAssessmentId);
    return h && Fs(h.assessmentType) || null;
  }
  async function u(m) {
    try {
      const h = await fetch(`/api/extension/diagnosis-queries/${m}/pdf`), { pdfUrl: _ } = await h.json();
      _ && window.open(_, "_blank");
    } catch (h) {
      console.warn("[Super] PDF fetch failed", h);
    }
  }
  const l = c.length + o.length;
  return /* @__PURE__ */ t("div", { class: "mds-cc__queries-view", children: [
    o.length > 0 && /* @__PURE__ */ t("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ t("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--sent" }),
        "Awaiting Doctor",
        /* @__PURE__ */ t("span", { class: "mds-cc__queries-group-count", children: o.length })
      ] }),
      o.map((m) => /* @__PURE__ */ t(
        es,
        {
          q: m,
          expanded: a === m.id,
          onToggle: () => r(a === m.id ? null : m.id),
          onOpenAssessment: () => i?.(p(m)),
          assessmentCtx: d(m),
          isPending: !1
        },
        m.id
      ))
    ] }),
    c.length > 0 && /* @__PURE__ */ t("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ t("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--pending" }),
        "Needs to be Sent",
        /* @__PURE__ */ t("span", { class: "mds-cc__queries-group-count", children: c.length })
      ] }),
      c.map((m) => /* @__PURE__ */ t(
        es,
        {
          q: m,
          expanded: a === m.id,
          onToggle: () => r(a === m.id ? null : m.id),
          onOpenAssessment: () => i?.(p(m)),
          assessmentCtx: d(m),
          isPending: !0
        },
        m.id
      ))
    ] }),
    s && s.length > 0 && /* @__PURE__ */ t("div", { class: "mds-cc__queries-group", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__queries-group-label", children: [
        /* @__PURE__ */ t("span", { class: "mds-cc__queries-group-dot mds-cc__queries-group-dot--signed" }),
        "Recently Signed",
        /* @__PURE__ */ t("span", { class: "mds-cc__queries-group-count", children: s.length })
      ] }),
      s.map((m) => {
        const h = m.status === "signed", _ = m.status === "rejected", v = m.practitioner || m.sentTo?.[0];
        return /* @__PURE__ */ t("div", { class: `mds-cc__qcard mds-cc__qcard--signed${_ ? " mds-cc__qcard--rejected" : ""}`, children: [
          /* @__PURE__ */ t("div", { class: "mds-cc__qcard-header", onClick: () => r(a === m.id ? null : m.id), role: "button", tabIndex: 0, children: [
            /* @__PURE__ */ t("div", { class: "mds-cc__qcard-left", children: [
              /* @__PURE__ */ t("span", { class: "mds-cc__qcard-patient", children: m.patientName }),
              /* @__PURE__ */ t("div", { class: "mds-cc__qcard-diag", children: [
                /* @__PURE__ */ t("span", { class: "mds-cc__qcard-code", children: m.mdsItem }),
                /* @__PURE__ */ t("span", { class: "mds-cc__qcard-name", children: m.mdsItemName })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { class: "mds-cc__qcard-right", children: [
              /* @__PURE__ */ t("span", { class: `mds-cc__qcard-status-badge mds-cc__qcard-status-badge--${m.status}`, children: h ? "Signed" : "Rejected" }),
              /* @__PURE__ */ t("svg", { class: `mds-cc__qcard-chevron${a === m.id ? " mds-cc__qcard-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { class: "mds-cc__qcard-meta", children: [
            v && /* @__PURE__ */ t("span", { class: "mds-cc__qcard-practitioner", children: [
              v.firstName,
              " ",
              v.lastName,
              v.title ? `, ${v.title}` : ""
            ] }),
            h && m.selectedIcd10Code && /* @__PURE__ */ t("span", { class: "mds-cc__qcard-icd", children: m.selectedIcd10Code }),
            _ && m.rejectionReason && /* @__PURE__ */ t("span", { class: "mds-cc__qcard-rejection", children: [
              "“",
              m.rejectionReason,
              "”"
            ] })
          ] }),
          a === m.id && /* @__PURE__ */ t("div", { class: "mds-cc__qcard-body", children: /* @__PURE__ */ t("div", { class: "mds-cc__qcard-actions", children: [
            /* @__PURE__ */ t("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--primary", onClick: (g) => {
              g.stopPropagation(), i?.(p(m));
            }, children: "Open in PDPM Analyzer" }),
            m.hasPdf && /* @__PURE__ */ t("button", { class: "mds-cc__qcard-btn mds-cc__qcard-btn--secondary", onClick: (g) => {
              g.stopPropagation(), u(m.id);
            }, children: "View Signed PDF" })
          ] }) })
        ] }, m.id || m.mdsItem);
      })
    ] }),
    l === 0 && (!s || s.length === 0) && /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__state-icon", children: "✉" }),
      /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: "No outstanding queries." })
    ] })
  ] });
}
function ea({ facilityName: e, orgSlug: s }) {
  const { data: n, loading: i, error: a } = cn({ facilityName: e, orgSlug: s, enabled: !0 });
  if (i) return /* @__PURE__ */ t(Hs, {});
  if (a) return /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__state-icon", children: "⚠" }),
    /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: a })
  ] });
  const r = n?.items || [], c = n?.summary || {};
  return r.length === 0 ? /* @__PURE__ */ t("div", { class: "mds-cc__state-container", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__state-icon", children: "✅" }),
    /* @__PURE__ */ t("p", { class: "mds-cc__state-text", children: "No documentation risks found." })
  ] }) : /* @__PURE__ */ t("div", { class: "mds-cc__doc-risks-view", children: [
    /* @__PURE__ */ t("div", { class: "mds-cc__doc-risks-summary", children: [
      /* @__PURE__ */ t("span", { class: "mds-cc__doc-risks-summary-icon", children: "⚠" }),
      /* @__PURE__ */ t("div", { class: "mds-cc__doc-risks-summary-body", children: [
        /* @__PURE__ */ t("div", { class: "mds-cc__doc-risks-summary-title", children: [
          c.total || r.length,
          " Documentation Risk",
          (c.total || r.length) !== 1 ? "s" : ""
        ] }),
        /* @__PURE__ */ t("div", { class: "mds-cc__doc-risks-summary-detail", children: [
          "Diagnoses lacking chart documentation support",
          (c.diagnosisMissing > 0 || c.treatmentMissing > 0) && /* @__PURE__ */ t("span", { children: [
            " · ",
            c.diagnosisMissing > 0 && `${c.diagnosisMissing} missing diagnosis`,
            c.diagnosisMissing > 0 && c.treatmentMissing > 0 && " · ",
            c.treatmentMissing > 0 && `${c.treatmentMissing} missing treatment`
          ] })
        ] })
      ] })
    ] }),
    r.map((o, p) => /* @__PURE__ */ t("div", { class: "mds-cc__doc-risk-row", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__doc-risk-row-top", children: [
        /* @__PURE__ */ t("span", { class: "mds-cc__query-patient", children: o.patientName }),
        o.assessmentType && /* @__PURE__ */ t("span", { class: "mds-cc__ov-priority-type", children: Fs(o.assessmentType) })
      ] }),
      /* @__PURE__ */ t("div", { class: "mds-cc__doc-risk-row-item", children: [
        /* @__PURE__ */ t("span", { class: "mds-cc__query-item-code", children: o.mdsItem }),
        /* @__PURE__ */ t("span", { class: "mds-cc__query-item-name", children: [
          "· ",
          o.itemName
        ] }),
        /* @__PURE__ */ t("div", { class: "mds-cc__doc-risk-pills", children: [
          o.missingDiagnosis && /* @__PURE__ */ t("span", { class: "mds-cc__doc-risk-pill", children: "Diagnosis" }),
          o.missingTreatment && /* @__PURE__ */ t("span", { class: "mds-cc__doc-risk-pill", children: "Active Treatment" })
        ] })
      ] }),
      o.rationale && /* @__PURE__ */ t("div", { class: "mds-cc__doc-risk-rationale", children: o.rationale })
    ] }, p))
  ] });
}
function ta({ urgencyKey: e, items: s, isCollapsed: n, onToggleCollapse: i, expandedId: a, onToggleCard: r, onOpenAnalyzer: c, onSelectItem: o }) {
  const p = Ui[e];
  return !s || s.length === 0 ? null : /* @__PURE__ */ t("div", { class: "mds-cc__urgency-group", children: [
    /* @__PURE__ */ t(
      "div",
      {
        class: "mds-cc__urgency-group-header",
        onClick: () => i(e),
        role: "button",
        tabIndex: 0,
        onKeyDown: (d) => {
          (d.key === "Enter" || d.key === " ") && (d.preventDefault(), i(e));
        },
        children: [
          /* @__PURE__ */ t("span", { class: `mds-cc__urgency-group-arrow${n ? "" : " mds-cc__urgency-group-arrow--open"}`, children: "›" }),
          /* @__PURE__ */ t("span", { class: "mds-cc__urgency-group-dot", style: { background: p.color } }),
          /* @__PURE__ */ t("span", { class: "mds-cc__urgency-group-label", style: { color: p.color }, children: p.label }),
          /* @__PURE__ */ t("span", { class: "mds-cc__urgency-group-count", children: [
            "(",
            s.length,
            ")"
          ] }),
          n && /* @__PURE__ */ t("span", { class: "mds-cc__urgency-group-summary", children: zi(s) })
        ]
      }
    ),
    !n && /* @__PURE__ */ t("div", { class: "mds-cc__urgency-group-body", children: s.map((d) => {
      const u = d.id || d.assessmentId || d.externalAssessmentId, l = a === u;
      return /* @__PURE__ */ t("div", { class: "mds-cc__card-wrapper", "data-assessment-id": u, children: [
        /* @__PURE__ */ t(
          Un,
          {
            assessment: d,
            isExpanded: l,
            onToggle: () => r(u),
            onOpenAnalyzer: () => c(d)
          }
        ),
        l && /* @__PURE__ */ t(
          ti,
          {
            assessment: d,
            onOpenAnalyzer: () => c(d),
            onSelectItem: o ? (m) => o(m, d) : void 0
          }
        )
      ] }, u);
    }) })
  ] });
}
function sa({ facilityName: e, orgSlug: s, onClose: n, initialExpandedId: i }) {
  const [a, r] = b(i ? "assessments" : "overview"), [c, o] = b("all"), [p, d] = b("all"), [u, l] = b("all"), [m, h] = b("all"), [_, v] = b(/* @__PURE__ */ new Set(["completed"])), [g, C] = b(i || null), [f, x] = b(null), { data: k, loading: y, error: S, retry: E } = on({ facilityName: e, orgSlug: s }), { data: N } = dn({ facilityName: e, orgSlug: s, enabled: !0 }), w = N !== null, T = w ? (N?.pending || 0) + (N?.overdue || 0) : 0, F = typeof window.getChatPatientId == "function" ? window.getChatPatientId() : null, V = typeof window.getPatientNameFromPage == "function" ? window.getPatientNameFromPage() : null, D = k?.assessments || [], B = k?.summary || {}, $ = ae(() => {
    let L = 0;
    for (const O of D) {
      const A = O.detectionSummary?.docRisks;
      A && (L += A.total || 0);
    }
    return L;
  }, [D]), M = ae(() => {
    const L = Gi(D, c, p, u);
    return Vi(L);
  }, [D, c, p, u]);
  ae(() => {
    (M.overdue?.length || 0) + (M.urgent?.length || 0) + (M.approaching?.length || 0) + (M.on_track?.length || 0) > 20 && !_.has("on_track") && v((O) => /* @__PURE__ */ new Set([...O, "on_track"]));
  }, [M]);
  const G = ee(!1);
  z(() => {
    if (!i || !D.length || G.current) return;
    G.current = !0;
    const L = D.find(
      (O) => (O.externalAssessmentId || O.assessmentId || O.id) === i
    );
    if (L) {
      const O = he(L);
      v((A) => {
        if (!A.has(O)) return A;
        const W = new Set(A);
        return W.delete(O), W;
      }), requestAnimationFrame(() => {
        const A = I.current?.querySelector(`[data-assessment-id="${i}"]`);
        A && A.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }, [D, i]);
  const K = ae(() => m === "all" ? Ve : [m], [m]), Q = ae(() => Ve.reduce((L, O) => L + (M[O]?.length || 0), 0), [M]);
  function R(L) {
    v((O) => {
      const A = new Set(O);
      return A.has(L) ? A.delete(L) : A.add(L), A;
    });
  }
  function j(L) {
    C((O) => {
      const A = O === L ? null : L;
      return A && requestAnimationFrame(() => {
        const W = I.current?.querySelector(`[data-assessment-id="${A}"]`);
        W && W.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }), A;
    });
  }
  const te = ee(null), I = ee(null);
  z(() => {
    if (a === "assessments" && te.current) {
      const L = te.current;
      te.current = null, requestAnimationFrame(() => {
        const O = I.current?.querySelector(`[data-assessment-id="${L}"]`);
        O && (O.scrollIntoView({ behavior: "smooth", block: "center" }), O.classList.add("mds-cc__card-wrapper--highlight"), setTimeout(() => O.classList.remove("mds-cc__card-wrapper--highlight"), 1500));
      });
    }
  }, [a, g]);
  function P(L) {
    const O = L.id || L.assessmentId || L.externalAssessmentId, A = he(L);
    v((W) => {
      if (!W.has(A)) return W;
      const oe = new Set(W);
      return oe.delete(A), oe;
    }), C(O), te.current = O, r("assessments");
  }
  function U(L) {
    const O = L.externalAssessmentId || L.assessmentId || L.id;
    n({ hide: !0 }), window.PDPMAnalyzerLauncher?.open({ scope: "mds", assessmentId: O });
  }
  function q(L) {
    n({ hide: !0 }), window.PDPMAnalyzerLauncher?.open({ scope: "mds", assessmentId: L });
  }
  function Z(L) {
    L.target === L.currentTarget && n();
  }
  return /* @__PURE__ */ t("div", { class: "mds-cc__overlay", onClick: Z, children: /* @__PURE__ */ t("div", { class: "mds-cc__modal", role: "dialog", "aria-modal": "true", "aria-label": "MDS Command Center", children: [
    f && /* @__PURE__ */ t(
      qs,
      {
        item: f.item,
        context: { assessmentId: f.assessmentId },
        onClose: () => x(null)
      }
    ),
    /* @__PURE__ */ t(
      pn,
      {
        summary: B,
        facilityName: e,
        onClose: n,
        activeView: a,
        onViewChange: r,
        queryCount: (k?.outstandingQueries || []).length,
        certCount: T,
        certsEnabled: w,
        docRiskCount: $,
        payerFilter: c,
        onPayerFilterChange: o,
        classFilter: p,
        onClassFilterChange: d,
        focusFilter: u,
        onFocusFilterChange: l,
        urgencyFilter: m,
        onUrgencyFilterChange: h
      }
    ),
    /* @__PURE__ */ t("div", { class: "mds-cc__list", ref: I, children: [
      y && /* @__PURE__ */ t(Hs, {}),
      !y && S && /* @__PURE__ */ t(Ki, { message: S, onRetry: E }),
      !y && !S && a === "overview" && /* @__PURE__ */ t(
        Wi,
        {
          assessments: D,
          outstandingQueries: k?.outstandingQueries || [],
          onViewChange: r,
          onOpenAssessment: P
        }
      ),
      !y && !S && a === "assessments" && /* @__PURE__ */ t(Y, { children: [
        Q === 0 && /* @__PURE__ */ t(Ji, {}),
        Q > 0 && /* @__PURE__ */ t("div", { class: "mds-cc__assessments", children: K.map((L) => /* @__PURE__ */ t(
          ta,
          {
            urgencyKey: L,
            items: M[L],
            isCollapsed: _.has(L),
            onToggleCollapse: R,
            expandedId: g,
            onToggleCard: j,
            onOpenAnalyzer: U,
            onSelectItem: (O, A) => {
              const W = A.externalAssessmentId || A.assessmentId || A.id;
              x({ item: O, assessmentId: W });
            }
          },
          L
        )) })
      ] }),
      !y && !S && a === "queries" && /* @__PURE__ */ t(
        Xi,
        {
          outstandingQueries: k?.outstandingQueries || [],
          recentlySigned: k?.recentlySigned || [],
          assessments: D,
          onOpenAssessment: q
        }
      ),
      !y && !S && a === "docRisks" && /* @__PURE__ */ t(ea, { facilityName: e, orgSlug: s }),
      a === "certs" && /* @__PURE__ */ t(
        En,
        {
          facilityName: e,
          orgSlug: s,
          patientId: F,
          patientName: V
        }
      )
    ] })
  ] }) });
}
function na(e, s) {
  const [n, i] = b([]), [a, r] = b(null), [c, o] = b(""), [p, d] = b(!1), [u, l] = b(!1), [m, h] = b(null), [_, v] = b(0), [g, C] = b(0), f = X(() => {
    v((y) => y + 1);
  }, []), x = X(() => {
    C((y) => y + 1);
  }, []);
  async function k() {
    if (!(await chrome.runtime.sendMessage({ type: "GET_AUTH_STATE" })).authenticated) throw new Error("Please log in to view MDS data");
    const E = getOrg()?.org, N = window.getChatFacilityInfo?.() || "";
    if (!E || !N) throw new Error("Could not determine organization or facility");
    return { orgSlug: E, facilityName: N };
  }
  return z(() => {
    if (!e) return;
    let y = !1;
    async function S() {
      d(!0), h(null);
      try {
        const { orgSlug: E, facilityName: N } = await k();
        if (e.scope === "mds" && e.assessmentId) {
          const w = new URLSearchParams({ externalAssessmentId: e.assessmentId, facilityName: N, orgSlug: E }), T = await chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/mds/pdpm-potential?${w}`,
            options: { method: "GET" }
          });
          if (!T.success) throw new Error(T.error || "Failed to load MDS data");
          y || (r(T.data), o(T.data?.patientName || e.patientName || ""), i([]));
        } else if (e.scope === "patient" && e.patientId) {
          const w = new URLSearchParams({ facilityName: N, orgSlug: E }), T = await chrome.runtime.sendMessage({
            type: "API_REQUEST",
            endpoint: `/api/extension/patients/${e.patientId}/assessments?${w}`,
            options: { method: "GET" }
          });
          if (!T.success) throw new Error(T.error || "Failed to load patient data");
          const F = T.data?.data || T.data || T;
          y || (i(F.assessments || []), o(F.patientName || e.patientName || "Patient"), r(null));
        } else
          y || (i([]), r(null));
      } catch (E) {
        y || h(E.message || "Failed to load data");
      } finally {
        y || d(!1);
      }
    }
    return S(), () => {
      y = !0;
    };
  }, [e?.scope, e?.assessmentId, e?.patientId, _]), z(() => {
    if (e?.scope !== "patient" || !s) return;
    let y = !1;
    async function S() {
      l(!0), r(null);
      try {
        const { orgSlug: E, facilityName: N } = await k(), w = new URLSearchParams({ externalAssessmentId: s, facilityName: N, orgSlug: E }), T = await chrome.runtime.sendMessage({
          type: "API_REQUEST",
          endpoint: `/api/extension/mds/pdpm-potential?${w}`,
          options: { method: "GET" }
        });
        if (!T.success) throw new Error(T.error || "Failed to load assessment data");
        y || r(T.data);
      } catch (E) {
        y || h(E.message || "Failed to load assessment detail");
      } finally {
        y || l(!1);
      }
    }
    return S(), () => {
      y = !0;
    };
  }, [e?.scope, s, g]), z(() => {
    function y() {
      C((S) => S + 1);
    }
    return window.addEventListener("super:item-decision", y), () => window.removeEventListener("super:item-decision", y);
  }, []), { assessments: n, detail: a, patientName: c, loading: p, detailLoading: u, error: m, retry: f, retryDetail: x };
}
const ts = ["bims", "phq9", "gg", "orders", "therapyDocs"], ss = { bims: "BIMS", phq9: "PHQ-9", gg: "GG", orders: "Orders", therapyDocs: "Therapy" }, pt = 6;
function fe(e) {
  return e ? new Date(e).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
}
function ia(e) {
  if (!e) return "";
  const s = e.split(`
`)[0].trim();
  return s.length > 80 ? s.slice(0, 77) + "…" : s;
}
function aa(e, s) {
  if (!e || !s?.start || !s?.end) return null;
  const n = new Date(e).getTime();
  return n >= new Date(s.start).getTime() && n <= new Date(s.end).getTime();
}
function ra({ check: e }) {
  const s = e?.foundUda;
  if (!s) return null;
  const n = !!s.lockedDate, i = aa(s.lockedDate || s.date, e.searchedDateRange);
  return /* @__PURE__ */ t("div", { class: "pdpm-an__cc-detail", children: /* @__PURE__ */ t("div", { class: "pdpm-an__cc-uda-grid", children: [
    /* @__PURE__ */ t("span", { class: "pdpm-an__cc-uda-key", children: "Assessment" }),
    /* @__PURE__ */ t("span", { class: "pdpm-an__cc-uda-val", children: s.description }),
    s.date && /* @__PURE__ */ t(Y, { children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__cc-uda-key", children: "Completed" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__cc-uda-val", children: fe(s.date) })
    ] }),
    /* @__PURE__ */ t("span", { class: "pdpm-an__cc-uda-key", children: "Lock" }),
    /* @__PURE__ */ t("span", { class: "pdpm-an__cc-uda-val", children: n ? /* @__PURE__ */ t("span", { class: "pdpm-an__cc-lock pdpm-an__cc-lock--yes", children: [
      /* @__PURE__ */ t("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
        /* @__PURE__ */ t("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ t("path", { d: "M4 5V3.5a2 2 0 014 0V5", stroke: "currentColor", "stroke-width": "1.2", fill: "none" })
      ] }),
      fe(s.lockedDate)
    ] }) : /* @__PURE__ */ t("span", { class: "pdpm-an__cc-lock pdpm-an__cc-lock--no", children: [
      /* @__PURE__ */ t("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
        /* @__PURE__ */ t("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ t("path", { d: "M4 5V3.5a2 2 0 014 0", stroke: "currentColor", "stroke-width": "1.2", fill: "none" })
      ] }),
      "Unlocked"
    ] }) }),
    e.searchedDateRange && /* @__PURE__ */ t(Y, { children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__cc-uda-key", children: "Window" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__cc-uda-val", children: [
        fe(e.searchedDateRange.start),
        " ",
        "–",
        " ",
        fe(e.searchedDateRange.end),
        i === !0 && /* @__PURE__ */ t("span", { class: "pdpm-an__cc-window pdpm-an__cc-window--in", children: "In range" }),
        i === !1 && /* @__PURE__ */ t("span", { class: "pdpm-an__cc-window pdpm-an__cc-window--out", children: "Outside range" })
      ] })
    ] })
  ] }) });
}
function oa({ check: e }) {
  const s = e?.unsignedOrders;
  if (!s || s.length === 0) return null;
  const n = s.slice(0, pt), i = s.length - pt;
  return /* @__PURE__ */ t("div", { class: "pdpm-an__cc-detail", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__cc-detail-summary", children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__cc-detail-stat pdpm-an__cc-detail-stat--fail", children: [
        e.unsignedCount,
        " unsigned"
      ] }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__cc-detail-stat", children: [
        e.totalOrders,
        " total"
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: "pdpm-an__cc-orders", children: [
      n.map((a, r) => /* @__PURE__ */ t("div", { class: "pdpm-an__cc-order", children: [
        /* @__PURE__ */ t("span", { class: "pdpm-an__cc-order-name", children: ia(a.orderName) }),
        /* @__PURE__ */ t("span", { class: "pdpm-an__cc-order-meta", children: [
          a.category !== "Other" && /* @__PURE__ */ t("span", { class: "pdpm-an__cc-order-cat", children: a.category }),
          a.startDate && /* @__PURE__ */ t("span", { children: fe(a.startDate) })
        ] })
      ] }, r)),
      i > 0 && /* @__PURE__ */ t("span", { class: "pdpm-an__cc-orders-more", children: [
        "+",
        i,
        " more unsigned"
      ] })
    ] })
  ] });
}
function ca({ check: e }) {
  if (!e) return null;
  const s = e.unsignedDocs || [];
  return /* @__PURE__ */ t("div", { class: "pdpm-an__cc-detail", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__cc-detail-summary", children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__cc-detail-stat pdpm-an__cc-detail-stat--pass", children: [
        e.signedDocs,
        " signed"
      ] }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__cc-detail-stat", children: [
        e.totalDocs,
        " total"
      ] })
    ] }),
    s.length > 0 && /* @__PURE__ */ t("div", { class: "pdpm-an__cc-orders", children: s.slice(0, pt).map((n, i) => /* @__PURE__ */ t("div", { class: "pdpm-an__cc-order", children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__cc-order-name", children: n.description || n.name || `Document ${i + 1}` }),
      n.date && /* @__PURE__ */ t("span", { class: "pdpm-an__cc-order-meta", children: fe(n.date) })
    ] }, i)) })
  ] });
}
function da({ checkKey: e, check: s }) {
  return e === "orders" ? /* @__PURE__ */ t(oa, { check: s }) : e === "therapyDocs" ? /* @__PURE__ */ t(ca, { check: s }) : /* @__PURE__ */ t(ra, { check: s });
}
function la({ data: e, collapsed: s, onToggleCollapse: n }) {
  const [i, a] = b(null), r = e?.compliance || {}, c = r.checks || {}, o = r.summary?.passed ?? 0, p = r.summary?.total ?? ts.length, d = r.summary?.notApplicable ?? 0, u = p - d, l = (m) => a(i === m ? null : m);
  return /* @__PURE__ */ t("div", { class: `pdpm-an__card${o === u ? " pdpm-an__card--success" : " pdpm-an__card--warning"}`, children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: n, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-icon", children: "✓" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-title", children: "Compliance" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-badge", children: [
        o,
        "/",
        u
      ] }),
      /* @__PURE__ */ t("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ t("div", { class: "pdpm-an__cc-body", children: [
      /* @__PURE__ */ t("div", { class: "pdpm-an__cc-chips", children: ts.map((m) => {
        const h = c[m];
        if (!h || h.status === "not_applicable") return null;
        const _ = h.status === "passed", v = h.foundUda || m === "orders" || m === "therapyDocs";
        return /* @__PURE__ */ t(
          "button",
          {
            class: `pdpm-an__cc-chip${_ ? " pdpm-an__cc-chip--pass" : " pdpm-an__cc-chip--fail"}${i === m ? " pdpm-an__cc-chip--active" : ""}`,
            onClick: v ? () => l(m) : void 0,
            title: h.message || "",
            children: [
              /* @__PURE__ */ t("span", { class: "pdpm-an__cc-chip-icon", children: _ ? "✓" : "✗" }),
              ss[m] || m
            ]
          },
          m
        );
      }) }),
      i && c[i] && c[i].status !== "not_applicable" && /* @__PURE__ */ t("div", { class: "pdpm-an__cc-expanded", children: [
        /* @__PURE__ */ t("div", { class: "pdpm-an__cc-expanded-label", children: [
          ss[i],
          ": ",
          c[i].message
        ] }),
        /* @__PURE__ */ t(da, { checkKey: i, check: c[i] })
      ] })
    ] })
  ] });
}
function He(e) {
  return e.sourceType === "order" || e.type === "order" || (e.evidenceId || "").startsWith("order-");
}
function pa(e) {
  return (e.sourceId || e.evidenceId || "").replace(/^order-/, "");
}
function Bs(e) {
  return e.type === "medication" || (e.sourceId || "").startsWith("admin-");
}
function ua(e) {
  if (Bs(e)) return !0;
  const s = re(e).viewerType;
  return s === "document" || s === "clinical-note" || s === "therapy-document" || s === "order" || He(e);
}
function ma({ item: e, context: s, onBack: n, onSplitChange: i, onDismiss: a }) {
  const r = e?.mdsItem, c = e?.categoryKey, { data: o, loading: p, error: d } = Ms(r, c, s), u = r?.startsWith("I8000:") ? "I8000" : r, l = o?.item, m = l?.status === "needs_physician_query", [h, _] = b(!1), v = l?.userDecision?.decision, g = v !== "disagree" && v !== "agree", C = X(async (I) => {
    _(!0);
    try {
      const U = getOrg()?.org, q = window.getChatFacilityInfo?.() || "", Z = r?.includes(":") ? r.split(":")[0] : r, L = e?.column || "", O = await chrome.runtime.sendMessage({
        type: "API_REQUEST",
        endpoint: `/api/extension/mds/items/${encodeURIComponent(Z)}/decision`,
        options: {
          method: "POST",
          body: JSON.stringify({
            externalAssessmentId: s?.assessmentId,
            facilityName: q,
            orgSlug: U,
            decision: "disagree",
            note: I || "",
            mdsColumn: L
          })
        }
      });
      if (!O?.success) throw new Error(O?.error || "Failed to save decision");
      const A = `${Z}-${L}`;
      window.SuperOverlay?.dismissedItems && (window.SuperOverlay.dismissedItems.add(A), chrome.storage.local.set({ superDismissedItems: Array.from(window.SuperOverlay.dismissedItems) })), window.dispatchEvent(new CustomEvent("super:item-decision", {
        detail: { mdsItem: Z, column: L, decision: "disagree" }
      })), window.SuperToast?.success?.("Item dismissed"), a?.();
    } catch (P) {
      console.error("[ItemDetailView] Dismiss failed:", P), window.SuperToast?.error?.(P.message || "Failed to dismiss"), _(!1);
    }
  }, [r, e, s, a]), [f, x] = b(null), k = ee(/* @__PURE__ */ new Map()), [y, S] = b(null), [E, N] = b(!1), w = ee(null), F = ha(o).filter(ua), V = f !== null, D = f && Bs(f.ev), B = f && !D && He(f.ev), $ = f ? re(f.ev).viewerType : null, M = !D && $ === "clinical-note", G = !D && $ === "therapy-document", K = f && !B && !M && !G && !D, Q = ee(null);
  z(() => {
    i?.(V);
  }, [V]);
  const R = F.filter((I) => He(I) ? !1 : re(I).viewerType === "document");
  z(() => {
    if (!o || R.length === 0) return;
    (async () => {
      let P;
      try {
        P = await window.getCurrentParams();
      } catch {
        return;
      }
      for (const U of R) {
        const q = re(U);
        if (!q.id || k.current.has(q.id)) continue;
        const Z = Ne(q.id, P).then((L) => {
          const O = k.current.get(q.id);
          return O && (O.document = L.document), L.document;
        }).catch((L) => (console.warn("[ItemDetailView] Prefetch failed for", q.id, L), null));
        k.current.set(q.id, { document: null, promise: Z });
      }
    })();
  }, [o]), z(() => {
    if (!f || B || M || G) {
      S(null), N(!1);
      return;
    }
    const I = re(f.ev);
    if (!I.id) return;
    const P = k.current.get(I.id);
    if (P?.document) {
      S(P.document), N(!1);
      return;
    }
    N(!0), (async () => {
      try {
        let q;
        if (P?.promise)
          q = await P.promise;
        else {
          const Z = await window.getCurrentParams();
          q = (await Ne(I.id, Z)).document, k.current.set(I.id, { document: q, promise: Promise.resolve(q) });
        }
        S(q);
      } catch (q) {
        console.error("[ItemDetailView] Failed to load document:", q), S(null);
      } finally {
        N(!1);
      }
    })();
  }, [f, B]), z(() => {
    if (!B || !w.current) return;
    const I = w.current, P = pa(f.ev);
    I.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><div class="pdpm-an__spinner"></div><span>Loading administrations...</span></div>', window.renderSplitAdministrations ? (async () => {
      const Z = getOrg()?.org, L = window.getChatFacilityInfo?.() || "", O = { assessmentId: s?.assessmentId, orgSlug: Z, facilityName: L };
      await window.renderSplitAdministrations(I, P, void 0, O);
    })().catch((q) => {
      console.error("[ItemDetailView] Failed to load administrations:", q), I.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Failed to load administrations</span></div>';
    }) : I.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Administration viewer not available</span></div>';
  }, [f, B]), z(() => {
    if (!M && !G || !Q.current) return;
    const I = Q.current, P = re(f.ev), U = f.ev.quoteText || f.ev.quote || f.ev.snippet || "";
    I.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><div class="pdpm-an__spinner"></div><span>Loading...</span></div>', (async () => {
      const L = getOrg()?.org, O = window.getChatFacilityInfo?.() || "", A = { assessmentId: s?.assessmentId, orgSlug: L, facilityName: O };
      M && window.renderSplitNote ? await window.renderSplitNote(I, P.id, A) : G && window.renderSplitTherapy ? await window.renderSplitTherapy(I, P.id, U, A) : I.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Viewer not available</span></div>';
    })().catch((Z) => {
      console.error("[ItemDetailView] Failed to load source:", Z), I.innerHTML = '<div class="idv__viewer-loading" style="position:static;padding:40px 0"><span>Failed to load</span></div>';
    });
  }, [f, M, G]);
  const j = X((I, P) => {
    x({ ev: I, index: P });
  }, []), te = X(() => {
    x(null);
  }, []);
  return /* @__PURE__ */ t("div", { class: `idv${V ? " idv--split" : ""}`, children: [
    /* @__PURE__ */ t("div", { class: "idv__head", children: [
      /* @__PURE__ */ t("button", { class: "idv__back", onClick: V ? te : n, type: "button", children: [
        /* @__PURE__ */ t("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ t("path", { d: "M9 11L5 7l4-4", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }),
        "Back"
      ] }),
      /* @__PURE__ */ t("span", { class: "idv__code", children: u }),
      /* @__PURE__ */ t("h2", { class: "idv__name", children: l?.description || l?.kbCategory?.categoryName || e?.itemName || "Item Detail" }),
      m && /* @__PURE__ */ t("span", { class: "idv__badge idv__badge--amber", children: "Needs Query" })
    ] }),
    p && /* @__PURE__ */ t("div", { class: "pdpm-an__state", children: [
      /* @__PURE__ */ t("div", { class: "pdpm-an__spinner" }),
      /* @__PURE__ */ t("p", { children: "Loading..." })
    ] }),
    d && /* @__PURE__ */ t("div", { class: "pdpm-an__state", children: /* @__PURE__ */ t("p", { children: d }) }),
    !p && !d && o && !V && /* @__PURE__ */ t("div", { class: "idv__body", children: /* @__PURE__ */ t(
      $s,
      {
        variant: "full",
        data: o,
        detectionItem: e,
        mdsItem: r,
        onViewSource: j,
        onDismiss: g ? C : void 0,
        dismissing: h,
        assessmentId: s?.assessmentId
      }
    ) }),
    !p && !d && o && V && /* @__PURE__ */ t("div", { class: "idv__split-body", children: [
      /* @__PURE__ */ t("div", { class: "idv__sources", children: [
        /* @__PURE__ */ t("div", { class: "idv__sources-label", children: [
          "Sources (",
          F.length,
          ")"
        ] }),
        F.map((I, P) => {
          const U = He(I), q = I.sourceType || vt(I.displayName, I.evidenceId), Z = I.displayName || bt[q] || (U ? "Orders" : "Document"), L = I.quoteText || I.orderDescription || I.quote || I.snippet || I.text || "", O = I.wordBlocks?.[0]?.p, A = f.ev === I;
          return /* @__PURE__ */ t(
            "div",
            {
              class: `idv__source-card${A ? " idv__source-card--active" : ""}`,
              onClick: () => x({ ev: I, index: P }),
              role: "button",
              children: [
                /* @__PURE__ */ t("div", { class: `idv__source-badge${U ? " idv__source-badge--order" : ""}`, children: Z }),
                L && /* @__PURE__ */ t("div", { class: "idv__source-snippet", children: L }),
                !U && O && /* @__PURE__ */ t("div", { class: "idv__source-page", children: [
                  "Page ",
                  O
                ] })
              ]
            },
            P
          );
        })
      ] }),
      /* @__PURE__ */ t("div", { class: "idv__viewer", children: [
        K && E && /* @__PURE__ */ t("div", { class: "idv__viewer-loading", children: [
          /* @__PURE__ */ t("div", { class: "pdpm-an__spinner" }),
          /* @__PURE__ */ t("span", { children: "Loading document..." })
        ] }),
        K && !E && y && /* @__PURE__ */ t(
          wt,
          {
            url: y.signedUrl || null,
            wordBlocks: f.ev.wordBlocks || [],
            targetPage: f.ev.wordBlocks?.[0]?.p || 1,
            title: y.title || "Document",
            documentType: y.documentType,
            effectiveDate: y.effectiveDate,
            fileSize: y.fileSize,
            expiresAt: !0,
            openInNewTabUrl: y.signedUrl || null
          }
        ),
        K && !E && !y && /* @__PURE__ */ t("div", { class: "idv__viewer-loading", children: /* @__PURE__ */ t("span", { children: "Failed to load document" }) }),
        B && /* @__PURE__ */ t("div", { ref: w, class: "idv__admin-viewer" }),
        (M || G) && /* @__PURE__ */ t("div", { ref: Q, class: "idv__note-viewer" }),
        D && /* @__PURE__ */ t("div", { class: "idv__note-viewer", children: /* @__PURE__ */ t("div", { class: "super-split__content", children: [
          /* @__PURE__ */ t("div", { class: "super-split__content-header", children: [
            /* @__PURE__ */ t("h3", { class: "super-split__content-title", children: "Administration Record" }),
            /* @__PURE__ */ t("span", { class: "super-split__content-badge", children: "Medication" })
          ] }),
          f.ev.date && /* @__PURE__ */ t("div", { class: "super-split__content-meta", children: f.ev.date }),
          /* @__PURE__ */ t("div", { class: "super-split__content-body", children: /* @__PURE__ */ t("pre", { class: "super-split__note-text", children: f.ev.text || f.ev.quote || f.ev.quoteText || "No details available." }) })
        ] }) })
      ] })
    ] })
  ] });
}
function ha(e) {
  const s = e?.item;
  if (!s) return [];
  if (!!!s.columns)
    return [...s.evidence || [], ...s.queryEvidence || []];
  const i = [], a = /* @__PURE__ */ new Set();
  for (const r of Object.values(s.columns || {}))
    for (const c of [...r?.evidence || [], ...r?.queryEvidence || []]) {
      const o = c.sourceId || c.quote || JSON.stringify(c);
      a.has(o) || (a.add(o), i.push(c));
    }
  return i;
}
function _a(e) {
  const [s, n] = b([]), [i, a] = b(!1), [r, c] = b(null), [o, p] = b(0), d = X(() => {
    p((u) => u + 1);
  }, []);
  return z(() => {
    if (!e || !window.CertAPI) {
      n([]);
      return;
    }
    let u = !1;
    return a(!0), c(null), (async () => {
      try {
        const m = getOrg()?.org, h = window.getChatFacilityInfo?.() || "";
        if (!m || !h) {
          u || (n([]), a(!1));
          return;
        }
        const _ = await window.CertAPI.fetchByPatient(h, m, e);
        u || n(_ || []);
      } catch {
        u || n([]);
      } finally {
        u || a(!1);
      }
    })(), () => {
      u = !0;
    };
  }, [e, o]), { certs: s, loading: i, error: r, refresh: d };
}
const ga = ["initial", "day_14_recert", "day_30_recert"], fa = {
  initial: "Initial",
  day_14_recert: "Day 14",
  day_30_recert: "Day 30"
};
function ya(e) {
  if (!e) return null;
  const s = new Date(e), n = /* @__PURE__ */ new Date();
  return s.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0), Math.floor((s - n) / 864e5);
}
function tt(e) {
  if (!e) return "";
  const s = new Date(e);
  return isNaN(s) ? e : s.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function va(e) {
  if (!e) return { variant: "empty", label: "—" };
  const s = ya(e.dueDate), n = s !== null && s < 0;
  return e.status === "signed" ? {
    variant: "signed",
    label: "Signed",
    detail: tt(e.signedAt),
    subDetail: e.signedByName || ""
  } : e.status === "skipped" ? { variant: "skipped", label: "Skipped", showUnskip: !0 } : (e.isDelayed || e.status === "delayed") && n ? {
    variant: "overdue",
    label: `${Math.abs(s)}d overdue`,
    showSend: !0
  } : n ? {
    variant: "overdue",
    label: `${Math.abs(s)}d overdue`,
    showSend: !0
  } : e.status === "sent" ? {
    variant: "sent",
    label: "Awaiting",
    detail: tt(e.sentAt)
  } : {
    variant: "pending",
    label: "Pending",
    detail: e.dueDate ? `Due ${tt(e.dueDate)}` : "",
    showSend: !0
  };
}
function ba({ type: e, cert: s, onAction: n }) {
  const i = va(s);
  return /* @__PURE__ */ t("div", { class: `cert-chain__slot cert-chain__slot--${i.variant}`, children: [
    /* @__PURE__ */ t("div", { class: "cert-chain__slot-header", children: /* @__PURE__ */ t("span", { class: "cert-chain__slot-type", children: fa[e] }) }),
    /* @__PURE__ */ t("div", { class: "cert-chain__slot-status", children: i.label }),
    i.detail && /* @__PURE__ */ t("div", { class: "cert-chain__slot-detail", children: i.detail }),
    i.subDetail && /* @__PURE__ */ t("div", { class: "cert-chain__slot-sub", children: i.subDetail }),
    i.showSend && s && /* @__PURE__ */ t(
      "button",
      {
        class: `cert-chain__slot-btn cert-chain__slot-btn--${i.variant === "overdue" ? "destructive" : "primary"}`,
        onClick: (a) => {
          a.stopPropagation(), n(s, "send");
        },
        children: "Send"
      }
    ),
    i.showUnskip && s && /* @__PURE__ */ t(
      "button",
      {
        class: "cert-chain__slot-btn cert-chain__slot-btn--ghost",
        onClick: (a) => {
          a.stopPropagation(), n(s, "unskip");
        },
        children: "Unskip"
      }
    )
  ] });
}
function wa({ certs: e, onAction: s }) {
  const n = {};
  for (const i of e)
    n[i.type] = i;
  return /* @__PURE__ */ t("div", { class: "cert-chain__stay", children: ga.map((i, a) => /* @__PURE__ */ t("div", { class: "cert-chain__step-wrapper", children: [
    a > 0 && /* @__PURE__ */ t("div", { class: "cert-chain__connector" }),
    /* @__PURE__ */ t(ba, { type: i, cert: n[i] || null, onAction: s })
  ] }, i)) });
}
function Da({ certs: e, onAction: s }) {
  const n = ae(() => {
    if (!e || e.length === 0) return [];
    const i = {};
    for (const r of e) {
      const c = r.partAStayId || "unknown";
      i[c] || (i[c] = []), i[c].push(r);
    }
    const a = Object.entries(i);
    for (const [, r] of a)
      r.sort((c, o) => (c.sequenceNumber || 0) - (o.sequenceNumber || 0));
    return a.sort((r, c) => {
      const o = Math.max(...r[1].map((d) => d.sequenceNumber || 0));
      return Math.max(...c[1].map((d) => d.sequenceNumber || 0)) - o;
    }), a;
  }, [e]);
  return n.length === 0 ? null : /* @__PURE__ */ t("div", { class: "cert-chain", children: n.map(([i, a]) => /* @__PURE__ */ t(wa, { certs: a, onAction: s }, i)) });
}
function Ia({ patientId: e, collapsed: s, onToggleCollapse: n }) {
  const { certs: i, loading: a, refresh: r } = _a(e), [c, o] = b(null), [p, d] = b(null), [u, l] = b(null), [m, h] = b({ facilityName: "", orgSlug: "" }), _ = X(async () => {
    if (m.facilityName && m.orgSlug) return m;
    const x = getOrg()?.org || "", y = { facilityName: window.getChatFacilityInfo?.() || "", orgSlug: x };
    return h(y), y;
  }, [m]), v = X(async (f, x) => {
    if (x === "send")
      await _(), o(f);
    else if (x === "skip")
      d(f);
    else if (x === "delay")
      l(f);
    else if (x === "unskip")
      try {
        await window.CertAPI.unskipCert(f.id), window.SuperToast?.success?.("Certification restored"), r();
      } catch (k) {
        console.error("[CertSection] Failed to unskip:", k), window.SuperToast?.error?.("Failed to restore certification");
      }
  }, [_, r]);
  async function g(f) {
    await window.CertAPI.skipCert(p.id, f), window.SuperToast?.success?.("Certification skipped"), r();
  }
  async function C(f) {
    await window.CertAPI.delayCert(u.id, f), window.SuperToast?.success?.("Certification marked as delayed"), r();
  }
  return a ? /* @__PURE__ */ t("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: n, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-title", children: "Certifications" }),
      /* @__PURE__ */ t("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ t("div", { class: "pdpm-an__card-body", style: "padding: 16px; text-align: center; color: #6b7280; font-size: 13px;", children: "Loading certifications..." })
  ] }) : !i || i.length === 0 ? null : /* @__PURE__ */ t(Y, { children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__card", children: [
      /* @__PURE__ */ t("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: n, role: "button", tabIndex: 0, children: [
        /* @__PURE__ */ t("span", { class: "pdpm-an__card-title", children: "Certifications" }),
        /* @__PURE__ */ t("span", { class: "pdpm-an__card-badge", children: i.length }),
        /* @__PURE__ */ t("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] }),
      !s && /* @__PURE__ */ t("div", { class: "pdpm-an__card-body", style: "padding: 8px 12px;", children: /* @__PURE__ */ t(Da, { certs: i, onAction: v }) })
    ] }),
    /* @__PURE__ */ t(
      Ns,
      {
        isOpen: !!c,
        onClose: () => o(null),
        cert: c,
        facilityName: m.facilityName,
        orgSlug: m.orgSlug,
        onSent: r
      }
    ),
    /* @__PURE__ */ t(
      xs,
      {
        isOpen: !!p,
        onClose: () => d(null),
        cert: p,
        onSkipped: g
      }
    ),
    /* @__PURE__ */ t(
      Ps,
      {
        isOpen: !!u,
        onClose: () => l(null),
        cert: u,
        onDelayed: C
      }
    )
  ] });
}
function Gs(e) {
  return e ? new Date(e).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
}
function ut(e) {
  return e && e.replace(/[\s/]+$/, "").trim() || null;
}
function Ca({ assessments: e, selectedId: s, onChange: n }) {
  if (!e || e.length <= 1) return null;
  const i = e.map((a) => ({
    value: a.id,
    label: ut(a.type) || ut(a.assessmentType) || "Assessment",
    subtitle: a.ardDate ? `ARD ${Gs(a.ardDate)}` : void 0,
    badge: a.currentHipps || a.hipps || void 0
  }));
  return /* @__PURE__ */ t(
    Oe,
    {
      options: i,
      value: s,
      onChange: n,
      align: "right",
      ariaLabel: "Select assessment"
    }
  );
}
const Me = {
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
function ve(e, s) {
  const n = s?.replace(/\[.*\]$/, "") || "", i = e?.replace(/\[.*\]$/, "") || "";
  return e && /^[A-Z]{1,2}\d+[A-Z]?(\[.*\])?$/.test(e) ? Me[i] || Me[n] || e : e && i !== n ? e : Me[n] || Me[i] || e || s;
}
function ns(e, s) {
  if (!s?.meta?.ntaTiers) return null;
  for (const n of s.meta.ntaTiers)
    if ((n.levels || []).includes(e)) return n.tier;
  return null;
}
function ka(e, s) {
  if (s?.mode === "state_rate") {
    const n = ns(e.currentLevel, s), i = ns(e.newLevel, s);
    return n != null && i != null ? `NTA: Tier ${n} → Tier ${i}` : "NTA: tier upgrade";
  }
  return `NTA: ${e.currentLevel} → ${e.newLevel}`;
}
function Us({ impact: e, payment: s, variant: n }) {
  const i = [];
  return e?.nta?.wouldChangeLevel && i.push({ label: "NTA", text: ka(e.nta, s) }), e?.nursing?.wouldChangeGroup && i.push({ label: "Nursing", from: e.nursing.currentPaymentGroup, to: e.nursing.newPaymentGroup }), e?.slp?.wouldChangeGroup && i.push({ label: "SLP", from: e.slp.currentGroup, to: e.slp.newGroup }), e?.ptot?.wouldChangeGroup && i.push({ label: "PT/OT", from: e.ptot.currentGroup, to: e.ptot.newGroup }), i.length === 0 ? null : /* @__PURE__ */ t("div", { class: n === "pending" ? "pdpm-an__impact-chips pdpm-an__impact-chips--pending" : "pdpm-an__impact-chips", children: i.map((r, c) => /* @__PURE__ */ t("span", { class: "pdpm-an__impact-chip", children: [
    /* @__PURE__ */ t("span", { class: "pdpm-an__impact-chip-k", children: r.label }),
    /* @__PURE__ */ t("span", { class: "pdpm-an__impact-chip-v", children: r.text || `${r.from} → ${r.to}` })
  ] }, c)) });
}
function Sa({ data: e, onItemClick: s }) {
  const n = e?.enhancedDetections || [], i = e?.payment, a = n.filter(
    (r) => r.wouldChangeHipps && r.solverStatus !== "query_sent" && r.solverStatus !== "awaiting_response" && r.solverStatus !== "dont_code" && r.userDecision?.decision !== "disagree"
  );
  return a.length === 0 ? null : /* @__PURE__ */ t("div", { class: "pdpm-an__opps", children: a.map((r, c) => {
    const o = r.mdsItem?.startsWith("I8000:") ? "I8000" : r.mdsItem;
    return /* @__PURE__ */ t(
      "div",
      {
        class: "pdpm-an__opp-row",
        onClick: () => s && s(r),
        role: "button",
        tabIndex: 0,
        onKeyDown: (p) => {
          (p.key === "Enter" || p.key === " ") && (p.preventDefault(), s?.(r));
        },
        children: [
          /* @__PURE__ */ t("span", { class: "pdpm-an__opp-icon", children: "⚡" }),
          /* @__PURE__ */ t("span", { class: "pdpm-an__opp-code", children: o }),
          /* @__PURE__ */ t("span", { class: "pdpm-an__opp-name", children: ve(r.itemName, r.mdsItem) }),
          /* @__PURE__ */ t(Us, { impact: r.impact, payment: i }),
          /* @__PURE__ */ t("svg", { class: "pdpm-an__opp-go", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ t("path", { d: "M5 3l4 4-4 4", stroke: "currentColor", "stroke-width": "1.3", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ]
      },
      c
    );
  }) });
}
function Na({ data: e, onItemClick: s, collapsed: n, onToggleCollapse: i }) {
  const r = (e?.enhancedDetections || []).filter(
    (c) => c.solverStatus === "dont_code" && (c.diagnosisPassed === !1 || c.activeStatusPassed === !1) && c.userDecision?.decision !== "disagree"
  );
  return r.length === 0 ? null : /* @__PURE__ */ t("div", { class: "pdpm-an__card pdpm-an__card--doc-risk", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: i, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-icon", children: "⚠" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-title", children: "Documentation Risks" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--amber", children: r.length }),
      /* @__PURE__ */ t("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ t("div", { class: "pdpm-an__doc-risk-list", children: r.map((c, o) => {
      const p = c.mdsItem?.startsWith("I8000:") ? "I8000" : c.mdsItem, d = [];
      return c.diagnosisPassed === !1 && d.push("No physician diagnosis found"), c.activeStatusPassed === !1 && d.push("No active treatment order found"), /* @__PURE__ */ t(
        "div",
        {
          class: "pdpm-an__doc-risk-item",
          onClick: () => s && s(c),
          role: "button",
          tabIndex: 0,
          onKeyDown: (u) => {
            (u.key === "Enter" || u.key === " ") && (u.preventDefault(), s && s(c));
          },
          children: [
            /* @__PURE__ */ t("div", { class: "pdpm-an__doc-risk-top", children: [
              /* @__PURE__ */ t("span", { class: "pdpm-an__driver-section", children: p }),
              /* @__PURE__ */ t("span", { class: "pdpm-an__driver-text", children: ve(c.itemName, c.mdsItem) })
            ] }),
            /* @__PURE__ */ t("div", { class: "pdpm-an__doc-risk-badges", children: d.map((u, l) => /* @__PURE__ */ t("span", { class: "pdpm-an__doc-risk-badge", children: u }, l)) }),
            c.rationale && /* @__PURE__ */ t("div", { class: "pdpm-an__doc-risk-rationale", children: c.rationale })
          ]
        },
        o
      );
    }) })
  ] });
}
function xa(e) {
  if (!e) return "not yet sent";
  const s = Math.floor((Date.now() - new Date(e)) / 864e5);
  return s === 0 ? "sent today" : `sent ${s}d ago`;
}
function Pa({ data: e, onQueryClick: s, collapsed: n, onToggleCollapse: i }) {
  const a = e?.outstandingQueries || [], r = e?.payment, c = a.filter(
    (o) => o.status === "sent" || o.status === "pending" || o.status === "awaiting_response"
  );
  return c.length === 0 ? null : /* @__PURE__ */ t("div", { class: "pdpm-an__card pdpm-an__card--queries", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: i, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-icon", children: "✉" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-title", children: "Pending Queries" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--pending", children: c.length }),
      /* @__PURE__ */ t("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ t("ul", { class: "pdpm-an__query-list", children: c.map((o, p) => {
      const d = o.pdpmImpact?.componentImpacts, u = d ? { slp: d.slp, nta: d.nta, nursing: d.nursing, ptot: d.ptot } : null, l = o.status === "sent" || o.status === "awaiting_response";
      return /* @__PURE__ */ t(
        "li",
        {
          class: "pdpm-an__query-item pdpm-an__query-item--clickable",
          onClick: () => s && s(o),
          role: "button",
          tabIndex: 0,
          children: [
            /* @__PURE__ */ t("div", { class: "pdpm-an__query-top", children: [
              /* @__PURE__ */ t("div", { class: "pdpm-an__query-main", children: [
                o.mdsItem && /* @__PURE__ */ t("span", { class: "pdpm-an__query-code", children: o.mdsItem }),
                /* @__PURE__ */ t("span", { class: "pdpm-an__query-text", children: ve(o.mdsItemName, o.mdsItem) })
              ] }),
              /* @__PURE__ */ t("span", { class: `pdpm-an__query-status-pill${l ? "" : " pdpm-an__query-status-pill--draft"}`, children: l ? xa(o.sentAt) : "draft" })
            ] }),
            u && /* @__PURE__ */ t(Us, { impact: u, payment: r, variant: "pending" })
          ]
        },
        p
      );
    }) })
  ] });
}
function Ta(e) {
  if (!e) return "";
  const s = Math.floor((Date.now() - new Date(e)) / 864e5);
  return s === 0 ? "today" : s === 1 ? "yesterday" : `${s}d ago`;
}
function Aa({ data: e, onQueryClick: s, collapsed: n, onToggleCollapse: i }) {
  const r = (e?.recentlySigned || e?.signedQueries || e?.completedQueries || []).filter(
    (o) => o.status === "signed" || o.status === "completed" || o.status === "resolved" || o.signedAt
  );
  if (r.length === 0) return null;
  const c = r.filter((o) => o.mdsItemCoded === !1).length;
  return /* @__PURE__ */ t("div", { class: "pdpm-an__card pdpm-an__card--signed", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: i, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-icon", children: "✓" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-title", children: "Recently Signed" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-badge", children: r.length }),
      c > 0 && /* @__PURE__ */ t("span", { class: "pdpm-an__card-badge pdpm-an__card-badge--coding", children: [
        c,
        " need coding"
      ] }),
      /* @__PURE__ */ t("svg", { class: `pdpm-an__card-chevron${n ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !n && /* @__PURE__ */ t("ul", { class: "pdpm-an__query-list", children: r.map((o, p) => {
      const d = o.mdsItemCoded === !1, u = o.mdsItemCoded === !0, l = Ta(o.signedAt || o.completedAt);
      return /* @__PURE__ */ t(
        "li",
        {
          class: `pdpm-an__signed-item${d ? " pdpm-an__signed-item--needs-coding" : ""} pdpm-an__signed-item--clickable`,
          onClick: () => s && s(o),
          role: "button",
          tabIndex: 0,
          children: [
            o.mdsItem && /* @__PURE__ */ t("span", { class: "pdpm-an__query-code pdpm-an__query-code--signed", children: o.mdsItem }),
            /* @__PURE__ */ t("span", { class: "pdpm-an__query-text", children: ve(o.mdsItemName, o.mdsItem) }),
            /* @__PURE__ */ t("div", { class: "pdpm-an__signed-badges", children: [
              d && /* @__PURE__ */ t("span", { class: "pdpm-an__signed-badge pdpm-an__signed-badge--coding", children: "Needs Coding" }),
              u && /* @__PURE__ */ t("span", { class: "pdpm-an__signed-badge pdpm-an__signed-badge--coded", children: "Coded" }),
              l && /* @__PURE__ */ t("span", { class: "pdpm-an__query-date", children: l })
            ] })
          ]
        },
        p
      );
    }) })
  ] });
}
function Ma({ nta: e, potentialLevel: s, payment: n }) {
  if (!e) return null;
  if (n?.mode === "state_rate") {
    if (e.currentPoints == null || e.pointsNeeded == null) return null;
    const h = n.current?.ntaTier?.tier, _ = h != null ? h - 1 : null, v = _ != null && _ >= 1 ? `Tier ${_}` : null;
    if (!v && e.pointsNeeded <= 0) return null;
    const g = e.currentPoints + e.pointsNeeded, C = g > 0 ? Math.round(e.currentPoints / g * 100) : 0;
    return /* @__PURE__ */ t("div", { class: "pdpm-an__nta-inline", children: [
      /* @__PURE__ */ t("div", { class: "pdpm-an__nta-sbar", children: /* @__PURE__ */ t("div", { class: "pdpm-an__nta-sfill", style: { width: `${C}%` } }) }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__nta-slbl", children: [
        e.pointsNeeded === 1 ? "1 pt" : `${e.pointsNeeded} pts`,
        " away",
        v ? ` from ${v}` : ""
      ] })
    ] });
  }
  const i = e.levels;
  if (!i || i.length < 2 || !e.currentLevel) return null;
  const a = i.findIndex((h) => h.code === e.currentLevel);
  if (a === -1) return null;
  const r = s || e.nextLevel, c = r ? i.findIndex((h) => h.code === r) : -1;
  if (c <= a) return null;
  const o = (h) => h / (i.length - 1) * 100, p = Math.max(o(a), 4), u = o(c) - p, l = e.pointsNeeded, m = e.nextLevel;
  return /* @__PURE__ */ t("div", { class: "pdpm-an__nta-track", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__nta-bar", children: [
      /* @__PURE__ */ t("div", { class: "pdpm-an__nta-bar-cur", style: { width: `${p}%` } }),
      /* @__PURE__ */ t("div", { class: "pdpm-an__nta-bar-gain", style: { left: `${p}%`, width: `${u}%` } })
    ] }),
    /* @__PURE__ */ t("div", { class: "pdpm-an__nta-lvls", children: i.map((h, _) => /* @__PURE__ */ t("span", { class: `pdpm-an__nta-lvl${_ === a ? " pdpm-an__nta-lvl--cur" : ""}${_ === c ? " pdpm-an__nta-lvl--tgt" : ""}`, children: h.code }, h.code)) }),
    l != null && l > 0 && m && /* @__PURE__ */ t("span", { class: "pdpm-an__nta-away", children: [
      l === 1 ? "1 pt" : `${l} pts`,
      " ",
      "→",
      " ",
      m
    ] })
  ] });
}
function La({ gap: e }) {
  const s = e?.slp;
  if (!s || s.tier1Met == null && s.tier2Met == null) return null;
  const n = (s.tier2Met ?? 0) + (s.tier2Needed ?? 0);
  return /* @__PURE__ */ t("div", { class: "pdpm-an__tier-row", children: [
    s.tier1Met != null && /* @__PURE__ */ t("span", { class: "pdpm-an__tier-segment", children: [
      "Tier 1: ",
      Array.from({ length: s.tier1Met }, (i, a) => /* @__PURE__ */ t("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--filled", children: "●" }, a)),
      " ",
      s.tier1Met,
      " met"
    ] }),
    (s.tier2Met != null || s.tier2Needed != null) && /* @__PURE__ */ t("span", { class: "pdpm-an__tier-segment", children: [
      s.tier1Met != null && /* @__PURE__ */ t("span", { class: "pdpm-an__tier-sep", children: "·" }),
      "Tier 2: ",
      Array.from({ length: s.tier2Met ?? 0 }, (i, a) => /* @__PURE__ */ t("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--filled", children: "●" }, `f${a}`)),
      Array.from({ length: s.tier2Needed ?? 0 }, (i, a) => /* @__PURE__ */ t("span", { class: "pdpm-an__tier-dot pdpm-an__tier-dot--empty", children: "○" }, `e${a}`)),
      " ",
      s.tier2Met ?? 0,
      "/",
      n
    ] })
  ] });
}
function $a(e) {
  const s = { ptot: [], slp: [], nursing: [], nta: [] };
  if (!e) return s;
  if (e.nta?.contributingConditions && (s.nta = e.nta.contributingConditions.map((n) => ({
    mdsItem: n.mdsItem,
    itemName: n.categoryName,
    helpText: `+${n.points} pts (${n.categoryName})`,
    pointsAdded: n.points
  }))), e.slp) {
    const n = [];
    if (e.slp.tier2?.hasSwallowingDisorder && n.push({ mdsItem: "K0100A", itemName: "Swallowing Disorder", helpText: "Tier 2: swallowing" }), e.slp.tier2?.hasMechanicallyAlteredDiet && n.push({ mdsItem: "K0520C1", itemName: "Mechanically Altered Diet", helpText: "Tier 2: mechanically altered diet" }), e.slp.comorbidities)
      for (const i of e.slp.comorbidities)
        i.isPresent && i.comorbidityNumber <= 100 && n.push({ mdsItem: i.mdsItem, itemName: i.name, helpText: `Tier 1 comorbidity: ${i.name}` });
    e.slp.tier1?.hasCognitiveImpairment && n.push({ mdsItem: "C0500", itemName: "Cognitive Impairment", helpText: "Tier 1: cognitive impairment" }), e.slp.tier1?.hasAcuteNeuro && n.push({ mdsItem: "I4500", itemName: "Acute Neurological", helpText: "Tier 1: acute neurological condition" }), s.slp = n;
  }
  if (e.nursing?.conditionsEvaluated) {
    const n = { ES: "Extensive Services", SCH: "Special Care High", SCL: "Special Care Low", CC: "Clinically Complex" };
    s.nursing = e.nursing.conditionsEvaluated.filter((i) => i.isMet).map((i) => ({
      mdsItem: i.triggeringItems?.[0] || "",
      itemName: i.subcategoryName,
      helpText: `${n[i.mainCategory] || i.mainCategory}: ${i.subcategoryName}`
    }));
  }
  return s;
}
function Ra({ data: e, payment: s, onItemClick: n, collapsed: i, onToggleCollapse: a }) {
  const [r, c] = b(null), o = e?.gapAnalysis || {}, p = e?.hippsDecoded || {}, d = e?.potentialHippsDecoded || {}, u = e?.enhancedDetections || [], l = $a(e?.calculation), m = [
    {
      label: "PT/OT",
      key: "ptot",
      currentCode: p.ptot?.code,
      potential: d.ptot?.code,
      name: p.ptot?.name,
      detail: o.ptot?.clinicalCategoryName,
      items: o.ptot?.detectionsToHelp || [],
      captured: l.ptot
    },
    {
      label: "SLP",
      key: "slp",
      currentCode: p.slp?.code,
      potential: d.slp?.code,
      name: p.slp?.name,
      detail: o.slp?.clinicalCategoryName,
      items: o.slp?.detectionsToHelp || [],
      captured: l.slp
    },
    {
      label: "Nursing",
      key: "nursing",
      currentCode: p.nursing?.code,
      potential: d.nursing?.code,
      name: p.nursing?.name,
      detail: o.nursing?.qualifyingSubcategoryName,
      items: o.nursing?.detectionsToHelp || [],
      captured: l.nursing
    },
    {
      label: "NTA",
      key: "nta",
      currentCode: s?.mode === "state_rate" && s.current?.ntaTier?.tier != null ? `Tier ${s.current.ntaTier.tier}` : p.nta?.code,
      potential: s?.mode === "state_rate" ? s.potential?.ntaTier?.tier != null && s.potential.ntaTier.tier !== s.current?.ntaTier?.tier ? `Tier ${s.potential.ntaTier.tier}` : null : d.nta?.code,
      name: s?.mode === "state_rate" && s.current?.ntaTier?.label || p.nta?.name,
      detail: s?.mode === "state_rate" && s.current?.ntaTier?.pointRange || o.nta?.clinicalCategoryName,
      items: o.nta?.detectionsToHelp || [],
      captured: l.nta,
      ntaProgress: o.nta
    }
  ];
  return m.some((_) => _.currentCode || _.potential) ? /* @__PURE__ */ t("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: a, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-icon", children: "☰" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-title", children: "PDPM Components" }),
      /* @__PURE__ */ t("svg", { class: `pdpm-an__card-chevron${i ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !i && /* @__PURE__ */ t("div", { class: "pdpm-an__components", children: m.map((_) => {
      if (!_.currentCode && !_.potential) return null;
      const v = _.potential && _.currentCode && _.potential !== _.currentCode, g = _.items.length > 0, C = _.captured.length > 0, f = r === _.key, x = () => {
        (g || C || _.detail) && c(f ? null : _.key);
      }, k = g || C || _.detail;
      return /* @__PURE__ */ t(
        "div",
        {
          class: `pdpm-an__comp-row${v ? " pdpm-an__comp-row--improved" : ""}${f ? " pdpm-an__comp-row--expanded" : ""}`,
          children: [
            /* @__PURE__ */ t(
              "div",
              {
                class: `pdpm-an__comp-header${k ? " pdpm-an__comp-header--clickable" : ""}`,
                onClick: k ? x : void 0,
                role: k ? "button" : void 0,
                tabIndex: k ? 0 : void 0,
                onKeyDown: k ? (y) => {
                  (y.key === "Enter" || y.key === " ") && (y.preventDefault(), x());
                } : void 0,
                children: [
                  /* @__PURE__ */ t("span", { class: "pdpm-an__comp-label", children: _.label }),
                  /* @__PURE__ */ t("span", { class: "pdpm-an__comp-name", children: _.name || "—" }),
                  _.currentCode && /* @__PURE__ */ t("span", { class: "pdpm-an__comp-code", children: _.currentCode }),
                  v && /* @__PURE__ */ t("span", { class: "pdpm-an__comp-change", children: [
                    "→",
                    " ",
                    _.potential
                  ] }),
                  k && /* @__PURE__ */ t("svg", { class: `pdpm-an__comp-chevron${f ? " pdpm-an__comp-chevron--open" : ""}`, width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ t("path", { d: "M4 5.5L7 8.5L10 5.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                ]
              }
            ),
            _.ntaProgress && /* @__PURE__ */ t(Ma, { nta: _.ntaProgress, potentialLevel: _.potential, payment: s }),
            f && /* @__PURE__ */ t("div", { class: "pdpm-an__comp-detail", children: [
              _.detail && /* @__PURE__ */ t("div", { class: "pdpm-an__comp-qualifier", children: _.detail }),
              _.key === "slp" && /* @__PURE__ */ t(La, { gap: o }),
              g && /* @__PURE__ */ t(Y, { children: [
                C && /* @__PURE__ */ t("div", { class: "pdpm-an__captured-label pdpm-an__captured-label--opps", children: "Opportunities" }),
                /* @__PURE__ */ t("div", { class: "pdpm-an__ci-list", children: _.items.map((y, S) => {
                  const E = y.mdsItem?.startsWith("I8000:") ? "I8000" : y.mdsItem, N = (w) => {
                    if (w.stopPropagation(), !n) return;
                    const T = u.find((F) => F.mdsItem === y.mdsItem);
                    T && n(T);
                  };
                  return /* @__PURE__ */ t(
                    "div",
                    {
                      class: "pdpm-an__ci-row",
                      onClick: N,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (w) => {
                        (w.key === "Enter" || w.key === " ") && (w.preventDefault(), N(w));
                      },
                      children: [
                        /* @__PURE__ */ t("span", { class: "pdpm-an__ci-code", children: E }),
                        /* @__PURE__ */ t("div", { class: "pdpm-an__ci-body", children: [
                          /* @__PURE__ */ t("span", { class: "pdpm-an__ci-name", children: ve(y.itemName, y.mdsItem) }),
                          y.helpText && /* @__PURE__ */ t("span", { class: "pdpm-an__ci-help", children: y.helpText })
                        ] }),
                        y.pointsAdded != null && /* @__PURE__ */ t("span", { class: "pdpm-an__ci-impact pdpm-an__ci-impact--pts", children: [
                          "+",
                          y.pointsAdded,
                          " pts"
                        ] })
                      ]
                    },
                    S
                  );
                }) })
              ] }),
              C && /* @__PURE__ */ t("div", { class: "pdpm-an__captured", children: [
                (g || _.detail) && /* @__PURE__ */ t("div", { class: "pdpm-an__captured-label", children: "Currently captured" }),
                /* @__PURE__ */ t("div", { class: "pdpm-an__ci-list", children: _.captured.map((y, S) => {
                  const E = y.mdsItem?.startsWith("I8000:") ? "I8000" : y.mdsItem, N = (w) => {
                    if (w.stopPropagation(), !n) return;
                    const T = u.find((F) => F.mdsItem === y.mdsItem);
                    T && n(T);
                  };
                  return /* @__PURE__ */ t(
                    "div",
                    {
                      class: "pdpm-an__ci-row pdpm-an__ci-row--captured",
                      onClick: N,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (w) => {
                        (w.key === "Enter" || w.key === " ") && (w.preventDefault(), N(w));
                      },
                      children: [
                        /* @__PURE__ */ t("span", { class: "pdpm-an__ci-check", children: "✓" }),
                        /* @__PURE__ */ t("span", { class: "pdpm-an__ci-code", children: E }),
                        /* @__PURE__ */ t("div", { class: "pdpm-an__ci-body", children: [
                          /* @__PURE__ */ t("span", { class: "pdpm-an__ci-name", children: ve(y.itemName, y.mdsItem) }),
                          y.helpText && /* @__PURE__ */ t("span", { class: "pdpm-an__ci-help", children: y.helpText })
                        ] }),
                        y.pointsAdded != null && /* @__PURE__ */ t("span", { class: "pdpm-an__ci-impact pdpm-an__ci-impact--pts", children: [
                          "+",
                          y.pointsAdded,
                          " pts"
                        ] })
                      ]
                    },
                    `cap-${S}`
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
const Ea = {
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
function Le({ value: e, max: s, label: n, severity: i, impact: a, extra: r }) {
  const c = Ea[i] || "#9ca3af", o = e != null && s > 0 ? Math.round(e / s * 100) : 0, p = 20, d = 2 * Math.PI * p, u = d - o / 100 * d;
  return /* @__PURE__ */ t("div", { class: "pdpm-an__sc", title: a || "", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__sc-ring", children: [
      /* @__PURE__ */ t("svg", { width: "52", height: "52", viewBox: "0 0 52 52", children: [
        /* @__PURE__ */ t("circle", { cx: "26", cy: "26", r: p, fill: "none", stroke: "#f1f5f9", "stroke-width": "4" }),
        e != null && /* @__PURE__ */ t(
          "circle",
          {
            cx: "26",
            cy: "26",
            r: p,
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
      /* @__PURE__ */ t("span", { class: "pdpm-an__sc-val", children: e ?? "—" })
    ] }),
    /* @__PURE__ */ t("span", { class: "pdpm-an__sc-label", children: n }),
    i && /* @__PURE__ */ t("span", { class: "pdpm-an__sc-severity", style: { color: c }, children: i }),
    r && /* @__PURE__ */ t("span", { class: "pdpm-an__sc-extra", children: r })
  ] });
}
const Oa = [
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
function qa({ breakdown: e }) {
  if (!e) return null;
  const s = e.selfCare || {}, n = e.mobility || {}, i = { ...s, ...n };
  return /* @__PURE__ */ t("div", { class: "pdpm-an__gg", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__gg-header", children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__gg-title", children: "GG Functional Items" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__gg-total", children: [
        "Total: ",
        e.total,
        "/24"
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: "pdpm-an__gg-grid", children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__gg-th", children: "Item" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__gg-th", children: "Score" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__gg-th", children: "Used In" }),
      Oa.map((a) => {
        const r = i[a.key];
        return /* @__PURE__ */ t(Y, { children: [
          /* @__PURE__ */ t("span", { class: "pdpm-an__gg-cell", children: a.label }),
          /* @__PURE__ */ t("span", { class: "pdpm-an__gg-cell pdpm-an__gg-cell--score", children: r ?? "—" }),
          /* @__PURE__ */ t("span", { class: `pdpm-an__gg-cell pdpm-an__gg-scope${a.scope === "ptot" ? " pdpm-an__gg-scope--ptot" : ""}`, children: a.scope === "ptot" ? "PT/OT only" : "Nursing + PT/OT" })
        ] });
      })
    ] }),
    /* @__PURE__ */ t("div", { class: "pdpm-an__gg-avgs", children: [
      n.bedMobilityAverage != null && /* @__PURE__ */ t("span", { children: [
        "Bed Mobility Avg: ",
        n.bedMobilityAverage
      ] }),
      n.transferAverage != null && /* @__PURE__ */ t("span", { children: [
        "Transfer Avg: ",
        n.transferAverage
      ] }),
      n.walkingAverage != null && /* @__PURE__ */ t("span", { children: [
        "Walking Avg: ",
        n.walkingAverage
      ] })
    ] })
  ] });
}
function Ha({ data: e, collapsed: s, onToggleCollapse: n }) {
  const i = e?.sectionProgress;
  if (!i || !i.total) return null;
  const { sections: a = {} } = i, r = Object.entries(a);
  let c = 0, o = 0, p = 0;
  for (const [, l] of r)
    l === "Complete" || l === "Completed" || l === "Locked" ? c++ : l === "In Progress" ? o++ : p++;
  const d = r.length || i.total || 0, u = d > 0 ? Math.round(c / d * 100) : 0;
  return /* @__PURE__ */ t("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: n, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-icon", children: "📋" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-title", children: "MDS Sections" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-badge", children: [
        u,
        "%"
      ] }),
      /* @__PURE__ */ t("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ t("div", { class: "pdpm-an__sp-body", children: [
      /* @__PURE__ */ t("div", { class: "pdpm-an__sp-bar-row", children: [
        /* @__PURE__ */ t("div", { class: "pdpm-an__sp-bar", children: /* @__PURE__ */ t("div", { class: "pdpm-an__sp-fill", style: { width: `${u}%` } }) }),
        /* @__PURE__ */ t("div", { class: "pdpm-an__sp-counts", children: [
          c > 0 && /* @__PURE__ */ t("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--done", children: [
            c,
            " done"
          ] }),
          o > 0 && /* @__PURE__ */ t("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--wip", children: [
            o,
            " in progress"
          ] }),
          p > 0 && /* @__PURE__ */ t("span", { class: "pdpm-an__sp-count pdpm-an__sp-count--todo", children: [
            p,
            " not started"
          ] })
        ] })
      ] }),
      r.length > 0 && /* @__PURE__ */ t("div", { class: "pdpm-an__sp-tags", children: r.map(([l, m]) => {
        const h = m === "Complete" || m === "Completed", _ = m === "Locked";
        return /* @__PURE__ */ t("span", { class: `pdpm-an__sp-tag ${h || _ ? "pdpm-an__sp-tag--done" : m === "In Progress" ? "pdpm-an__sp-tag--wip" : "pdpm-an__sp-tag--todo"}`, title: m, children: [
          (h || _) && /* @__PURE__ */ t("span", { class: "pdpm-an__sp-tag-check", children: "✓" }),
          l
        ] }, l);
      }) })
    ] })
  ] });
}
function Fa({ data: e, collapsed: s, onToggleCollapse: n }) {
  const [i, a] = b(!1), r = e?.scores;
  if (!r) return null;
  const c = r.bims, o = r.phq9, p = r.nursingFunctionalScore, d = r.ptotFunctionalScore, u = r.functionalScoreBreakdown;
  if (!c && !o && !p && !d) return null;
  const l = o?.score != null && o.score !== 99 ? o.score : o?.staffAssessmentScore, m = (o?.score == null || o?.score === 99) && o?.staffAssessmentScore != null ? "(Staff assessment)" : null, h = [];
  return c?.meetsImpairmentThreshold && h.push({ color: "#d97706", text: c.pdpmImpact || "Cognitive impairment detected — affects SLP and Nursing classification" }), o?.meetsDepressionThreshold && h.push({ color: "#ea580c", text: o.pdpmImpact || "Depression threshold met — upgrades Nursing payment group" }), p?.meetsBSCPThreshold && h.push({ color: "#6366f1", text: p.bscpNote || "NFS ≥ 11 — BSCP category eligible" }), /* @__PURE__ */ t("div", { class: "pdpm-an__card", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__card-header pdpm-an__card-header--collapsible", onClick: n, role: "button", tabIndex: 0, children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-icon", children: "🧠" }),
      /* @__PURE__ */ t("span", { class: "pdpm-an__card-title", children: "Clinical Scores" }),
      /* @__PURE__ */ t("svg", { class: `pdpm-an__card-chevron${s ? "" : " pdpm-an__card-chevron--open"}`, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }),
    !s && /* @__PURE__ */ t("div", { class: "pdpm-an__scores-body", children: [
      /* @__PURE__ */ t("div", { class: "pdpm-an__scores-row", children: [
        c && /* @__PURE__ */ t(Le, { value: c.score, max: 15, label: "BIMS", severity: c.severity, impact: c.pdpmImpact }),
        o && /* @__PURE__ */ t(Le, { value: l, max: 27, label: "PHQ-9", severity: o.severity, impact: o.pdpmImpact, extra: m }),
        p && /* @__PURE__ */ t(Le, { value: p.score, max: 16, label: "NFS", severity: p.severity, impact: p.pdpmImpact }),
        d && /* @__PURE__ */ t(Le, { value: d.score, max: 24, label: "PT/OT Func", severity: d.severity, impact: d.pdpmImpact })
      ] }),
      h.length > 0 && /* @__PURE__ */ t("div", { class: "pdpm-an__thresholds", children: h.map((_, v) => /* @__PURE__ */ t("div", { class: "pdpm-an__threshold", style: { borderLeftColor: _.color }, children: _.text }, v)) }),
      u && /* @__PURE__ */ t("div", { class: "pdpm-an__gg-toggle-wrap", children: [
        /* @__PURE__ */ t("button", { class: "pdpm-an__gg-toggle", onClick: () => a(!i), children: [
          i ? "Hide" : "Show",
          " GG Item Breakdown",
          /* @__PURE__ */ t("svg", { class: `pdpm-an__card-chevron${i ? " pdpm-an__card-chevron--open" : ""}`, width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ] }),
        i && /* @__PURE__ */ t(qa, { breakdown: u })
      ] })
    ] })
  ] });
}
function Ba({ data: e }) {
  if (!e) return null;
  const s = e.summary || {}, n = e.calculation || {}, i = e.payment, a = s.currentHipps || n.hippsCode || "?????", r = s.potentialHippsIfCoded, c = i?.mode === "state_rate", o = (S) => S ? S.replace(/_/g, "") : null, p = c && o(i.current?.groupCode) || a, d = c ? o(i.potential?.groupCode) ?? p : r, u = c ? d && d !== p : s.hasImprovements && r && r !== a, l = Hn(i), m = e.compliance?.summary || {}, h = m.passed ?? 0, _ = m.notApplicable ?? 0, v = (m.total ?? 0) - _, g = e.sectionProgress;
  let C = 0, f = 0;
  if (g?.sections)
    for (const S of Object.values(g.sections))
      f++, (S === "Complete" || S === "Completed" || S === "Locked") && C++;
  f || (f = g?.total ?? 0);
  const x = f > 0 ? Math.round(C / f * 100) : 0, k = (e.enhancedDetections || []).filter(
    (S) => S.wouldChangeHipps && S.solverStatus !== "query_sent" && S.solverStatus !== "awaiting_response" && S.solverStatus !== "dont_code" && S.userDecision?.decision !== "disagree"
  ).length, y = l && l.delta && l.delta !== "+$0/day" && l.delta !== "+0";
  return /* @__PURE__ */ t("div", { class: "pdpm-an__summary", children: [
    y && /* @__PURE__ */ t("div", { class: "pdpm-an__summary-delta", children: l.delta }),
    /* @__PURE__ */ t("div", { class: "pdpm-an__summary-codes", children: [
      /* @__PURE__ */ t("span", { class: "pdpm-an__summary-code", children: p }),
      u && /* @__PURE__ */ t(Y, { children: [
        /* @__PURE__ */ t("span", { class: "pdpm-an__summary-arrow", children: "→" }),
        /* @__PURE__ */ t("span", { class: "pdpm-an__summary-code pdpm-an__summary-code--green", children: d })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: "pdpm-an__summary-stats", children: [
      f > 0 && /* @__PURE__ */ t("span", { class: "pdpm-an__summary-stat", children: [
        x,
        "% MDS"
      ] }),
      v > 0 && /* @__PURE__ */ t("span", { class: "pdpm-an__summary-stat", children: [
        h,
        "/",
        v,
        " Compliance"
      ] }),
      k > 0 && /* @__PURE__ */ t("span", { class: "pdpm-an__summary-stat pdpm-an__summary-stat--green", children: [
        k,
        " Opp",
        k !== 1 ? "s" : ""
      ] })
    ] })
  ] });
}
function Ga() {
  return /* @__PURE__ */ t("div", { class: "pdpm-an__state", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__spinner" }),
    /* @__PURE__ */ t("p", { children: "Loading assessment data…" })
  ] });
}
function Ua({ message: e, onRetry: s }) {
  return /* @__PURE__ */ t("div", { class: "pdpm-an__state", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__state-icon", children: "⚠" }),
    /* @__PURE__ */ t("p", { children: e }),
    /* @__PURE__ */ t("button", { class: "pdpm-an__retry-btn", onClick: s, children: "Retry" })
  ] });
}
function Va({ assessmentData: e, onItemClick: s, onQueryClick: n, patientId: i }) {
  const [a, r] = b({}), c = (o) => r((p) => ({ ...p, [o]: !p[o] }));
  return e ? /* @__PURE__ */ t("div", { class: "pdpm-an__content", children: [
    /* @__PURE__ */ t(Ba, { data: e }),
    /* @__PURE__ */ t(Sa, { data: e, onItemClick: s }),
    /* @__PURE__ */ t(Pa, { data: e, onQueryClick: n, collapsed: a.queries, onToggleCollapse: () => c("queries") }),
    /* @__PURE__ */ t(Aa, { data: e, onQueryClick: n, collapsed: a.signed, onToggleCollapse: () => c("signed") }),
    /* @__PURE__ */ t(Ra, { data: e, payment: e?.payment, onItemClick: s, collapsed: a.components, onToggleCollapse: () => c("components") }),
    /* @__PURE__ */ t(Ha, { data: e, collapsed: a.sections, onToggleCollapse: () => c("sections") }),
    /* @__PURE__ */ t(Na, { data: e, onItemClick: s, collapsed: a.docRisks, onToggleCollapse: () => c("docRisks") }),
    /* @__PURE__ */ t(Fa, { data: e, collapsed: a.scores, onToggleCollapse: () => c("scores") }),
    /* @__PURE__ */ t(la, { data: e, collapsed: a.compliance, onToggleCollapse: () => c("compliance") }),
    i && /* @__PURE__ */ t(Ia, { patientId: i, collapsed: a.certs, onToggleCollapse: () => c("certs") })
  ] }) : /* @__PURE__ */ t("div", { class: "pdpm-an__state", children: /* @__PURE__ */ t("p", { children: "No assessment data available." }) });
}
function za({ mode: e, onToggle: s }) {
  const n = e === "panel" ? "Expand to modal" : "Dock as side panel";
  return /* @__PURE__ */ t("button", { class: "pdpm-an__mode-toggle", onClick: s, title: n, "aria-label": n, children: e === "panel" ? (
    // Expand icon (arrows pointing outward)
    /* @__PURE__ */ t("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ t("path", { d: "M5.5 2H3a1 1 0 00-1 1v2.5M10.5 2H13a1 1 0 011 1v2.5M10.5 14H13a1 1 0 001-1v-2.5M5.5 14H3a1 1 0 01-1-1v-2.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
  ) : (
    // Sidebar/panel icon (panel docked right)
    /* @__PURE__ */ t("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ t("rect", { x: "2", y: "2", width: "12", height: "12", rx: "1.5", stroke: "currentColor", "stroke-width": "1.5" }),
      /* @__PURE__ */ t("line", { x1: "10", y1: "2", x2: "10", y2: "14", stroke: "currentColor", "stroke-width": "1.5" })
    ] })
  ) });
}
function ja({ context: e, onClose: s, initialMode: n = "modal" }) {
  const [i, a] = b(null), [r, c] = b(null), [o, p] = b(n), [d, u] = b(!1), {
    assessments: l,
    detail: m,
    patientName: h,
    loading: _,
    detailLoading: v,
    error: g,
    retry: C,
    retryDetail: f
  } = na(e, i), x = l?.[0]?.id;
  e?.scope === "patient" && x && !i && a(x);
  const k = o === "panel";
  function y(M) {
    k || M.target === M.currentTarget && s();
  }
  function S() {
    s(), typeof MDSCommandCenterLauncher < "u" && MDSCommandCenterLauncher.open();
  }
  function E() {
    p((M) => M === "modal" ? "panel" : "modal");
  }
  const N = h || e?.patientName || "", w = m || null, T = l.find((M) => M.id === i), F = ut(
    w?.assessmentType || w?.type || T?.type
  ) || "", V = w?.ardDate || T?.ardDate ? Gs(w?.ardDate || T?.ardDate) : "", D = _ || v, B = k ? "pdpm-an__panel-backdrop" : "pdpm-an__overlay", $ = (k ? "pdpm-an__panel" : "pdpm-an__modal") + (d ? " pdpm-an--split" : "");
  return /* @__PURE__ */ t("div", { class: B, onClick: y, children: /* @__PURE__ */ t("div", { class: $, role: "dialog", "aria-modal": k ? "false" : "true", "aria-label": "PDPM Analyzer", children: [
    /* @__PURE__ */ t("div", { class: "pdpm-an__header", children: [
      /* @__PURE__ */ t("div", { class: "pdpm-an__header-left", children: [
        /* @__PURE__ */ t("button", { class: "pdpm-an__back-btn", onClick: S, children: [
          "←",
          " Command Center"
        ] }),
        /* @__PURE__ */ t("div", { class: "pdpm-an__patient-info", children: [
          N && /* @__PURE__ */ t("span", { class: "pdpm-an__patient-name", children: N }),
          F && /* @__PURE__ */ t("span", { class: "pdpm-an__assessment-label", children: F }),
          V && /* @__PURE__ */ t("span", { class: "pdpm-an__ard-date", children: [
            "ARD ",
            V
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { class: "pdpm-an__header-right", children: [
        /* @__PURE__ */ t(
          Ca,
          {
            assessments: l,
            selectedId: i,
            onChange: (M) => {
              a(M), c(null);
            }
          }
        ),
        /* @__PURE__ */ t(za, { mode: o, onToggle: E }),
        /* @__PURE__ */ t("button", { class: "pdpm-an__close-btn", onClick: s, "aria-label": "Close", children: "✕" })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: "pdpm-an__body", children: [
      D && /* @__PURE__ */ t(Ga, {}),
      !D && g && /* @__PURE__ */ t(Ua, { message: g, onRetry: m ? f : C }),
      !D && !g && (r ? /* @__PURE__ */ t(
        ma,
        {
          item: r.item,
          context: { ...e, assessmentId: i || e?.assessmentId, patientName: N },
          onBack: () => {
            c(null), u(!1);
          },
          onSplitChange: u,
          onDismiss: () => {
            c(null), u(!1);
          }
        }
      ) : /* @__PURE__ */ t(
        Va,
        {
          assessmentData: w,
          patientId: e?.patientId,
          onItemClick: (M) => c({ type: "detection", item: M }),
          onQueryClick: (M) => {
            const G = {
              ...M,
              patientName: M.patientName || N,
              locationName: M.locationName || e?.facilityName || ""
            };
            window.QueryDetailModal?.show(G, null, { showPdfButton: M.hasPdf ?? !1 });
          }
        }
      ))
    ] })
  ] }) });
}
function Qa({ queryData: e, onClose: s }) {
  const [n, i] = b(1), [a, r] = b(!0), [c, o] = b(""), [p, d] = b([]), [u, l] = b(""), [m, h] = b([]), [_, v] = b(null), [g, C] = b(""), [f, x] = b(!1), [k, y] = b(!1), [S, E] = b(null), N = ee(null), w = e?.mdsItem || "", T = e?.description || e?.aiAnswer?.itemName || "Unknown";
  z(() => {
    (async () => {
      try {
        const D = await window.getCurrentParams?.() || {
          facilityName: "SUNNY MEADOWS DEMO FACILITY",
          orgSlug: "demo-org",
          assessmentId: "4860265"
        };
        D.patientName = window.getPatientNameFromPage?.() || "Doe, Jane", D.patientId = window.getChatPatientId?.() || "2657226", E(D);
        const B = await window.QueryAPI?.fetchPractitioners?.(D.facilityName, D.orgSlug) || [];
        h(B);
        const $ = await window.QueryAPI?.generateNote?.(w, e?.aiAnswer || e) || {};
        o($.note || `Please review the clinical evidence for potential ${T}. See supporting documentation below.`), d($.icd10Options || []), l($.preferredIcd10?.code || $.icd10Options?.[0]?.code || "");
      } catch (D) {
        console.error("[DemoQueryModal] Load failed:", D);
      } finally {
        r(!1);
      }
    })();
  }, []);
  const F = async () => {
    if (_) {
      x(!0);
      try {
        const { query: D } = await window.QueryAPI.createQuery({
          patientId: S?.patientId,
          facilityName: S?.facilityName,
          orgSlug: S?.orgSlug,
          mdsAssessmentId: S?.assessmentId,
          mdsItem: w,
          mdsItemName: T,
          aiGeneratedNote: c
        });
        await window.QueryAPI.sendQuery(D.id, [_.id], c), y(!0), setTimeout(() => {
          s(), window.SuperToast?.success?.("Query sent successfully");
        }, 1200);
      } catch (D) {
        console.error("[DemoQueryModal] Send failed:", D), window.SuperToast?.error?.(`Failed to send: ${D.message}`), x(!1);
      }
    }
  }, V = m.filter((D) => g ? (D.name || `${D.firstName} ${D.lastName}`).toLowerCase().includes(g.toLowerCase()) : !0);
  return k ? /* @__PURE__ */ t("div", { class: "dqm__backdrop", ref: N, children: /* @__PURE__ */ t("div", { class: "dqm__modal dqm__modal--success", children: /* @__PURE__ */ t("div", { class: "dqm__success", children: [
    /* @__PURE__ */ t("div", { class: "dqm__success-icon", children: "✓" }),
    /* @__PURE__ */ t("div", { class: "dqm__success-text", children: "Query Sent!" }),
    /* @__PURE__ */ t("div", { class: "dqm__success-sub", children: [
      "Sent to ",
      _?.name || `${_?.firstName} ${_?.lastName}`
    ] })
  ] }) }) }) : /* @__PURE__ */ t("div", { class: "dqm__backdrop", ref: N, onClick: (D) => {
    D.target === N.current && s();
  }, children: /* @__PURE__ */ t("div", { class: "dqm__modal", onClick: (D) => D.stopPropagation(), children: [
    /* @__PURE__ */ t("div", { class: "dqm__header", children: [
      /* @__PURE__ */ t("div", { class: "dqm__header-left", children: [
        /* @__PURE__ */ t("span", { class: "dqm__header-icon", children: "?" }),
        /* @__PURE__ */ t("span", { class: "dqm__header-title", children: "Send Diagnosis Query" }),
        w && /* @__PURE__ */ t("span", { class: "dqm__header-badge", children: w })
      ] }),
      /* @__PURE__ */ t("button", { class: "dqm__close", onClick: s, type: "button", children: "×" })
    ] }),
    /* @__PURE__ */ t("div", { class: "dqm__progress", children: [
      /* @__PURE__ */ t("div", { class: `dqm__step ${n >= 1 ? "dqm__step--active" : ""} ${n > 1 ? "dqm__step--done" : ""}`, children: [
        /* @__PURE__ */ t("span", { class: "dqm__step-num", children: n > 1 ? "✓" : "1" }),
        /* @__PURE__ */ t("span", { class: "dqm__step-label", children: "Review" })
      ] }),
      /* @__PURE__ */ t("div", { class: `dqm__step-line ${n > 1 ? "dqm__step-line--active" : ""}` }),
      /* @__PURE__ */ t("div", { class: `dqm__step ${n >= 2 ? "dqm__step--active" : ""}`, children: [
        /* @__PURE__ */ t("span", { class: "dqm__step-num", children: "2" }),
        /* @__PURE__ */ t("span", { class: "dqm__step-label", children: "Send" })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { class: "dqm__body", children: a ? /* @__PURE__ */ t("div", { class: "dqm__loading", children: [
      /* @__PURE__ */ t("div", { class: "mds-cc__spinner mds-cc__spinner--sm" }),
      /* @__PURE__ */ t("span", { children: "Loading query details..." })
    ] }) : n === 1 ? (
      /* ── Step 1: Review ── */
      /* @__PURE__ */ t("div", { class: "dqm__step-content", children: [
        /* @__PURE__ */ t("div", { class: "dqm__info-card", children: [
          /* @__PURE__ */ t("div", { class: "dqm__info-row", children: [
            /* @__PURE__ */ t("span", { class: "dqm__patient-name", children: S?.patientName || "Patient" }),
            /* @__PURE__ */ t("span", { class: "dqm__facility", children: S?.facilityName || "" })
          ] }),
          /* @__PURE__ */ t("div", { class: "dqm__diagnosis-row", children: [
            /* @__PURE__ */ t("span", { class: "dqm__diag-code", children: w }),
            /* @__PURE__ */ t("span", { class: "dqm__diag-name", children: T })
          ] })
        ] }),
        p.length > 0 && /* @__PURE__ */ t("div", { class: "dqm__field", children: [
          /* @__PURE__ */ t("label", { class: "dqm__label", children: "ICD-10 Code" }),
          /* @__PURE__ */ t("select", { class: "dqm__select", value: u, onChange: (D) => l(D.target.value), children: p.map((D) => /* @__PURE__ */ t("option", { value: D.code, children: [
            D.code,
            D.description ? ` — ${D.description}` : ""
          ] }, D.code)) })
        ] }),
        /* @__PURE__ */ t("div", { class: "dqm__field", children: [
          /* @__PURE__ */ t("label", { class: "dqm__label", children: "Note for Physician" }),
          /* @__PURE__ */ t(
            "textarea",
            {
              class: "dqm__textarea",
              rows: "5",
              value: c,
              onInput: (D) => o(D.target.value),
              placeholder: "Enter note for physician..."
            }
          )
        ] })
      ] })
    ) : (
      /* ── Step 2: Send ── */
      /* @__PURE__ */ t("div", { class: "dqm__step-content", children: [
        /* @__PURE__ */ t("div", { class: "dqm__info-card", children: [
          /* @__PURE__ */ t("div", { class: "dqm__info-row", children: [
            /* @__PURE__ */ t("span", { class: "dqm__patient-name", children: S?.patientName || "Patient" }),
            /* @__PURE__ */ t("span", { class: "dqm__facility", children: S?.facilityName || "" })
          ] }),
          /* @__PURE__ */ t("div", { class: "dqm__diagnosis-row", children: [
            /* @__PURE__ */ t("span", { class: "dqm__diag-code", children: w }),
            /* @__PURE__ */ t("span", { class: "dqm__diag-name", children: T })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { class: "dqm__field", children: [
          /* @__PURE__ */ t("label", { class: "dqm__label", children: "Send to Physician" }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "text",
              class: "dqm__search",
              placeholder: "Search practitioners...",
              value: g,
              onInput: (D) => C(D.target.value)
            }
          ),
          /* @__PURE__ */ t("div", { class: "dqm__pract-list", children: V.map((D) => {
            const B = D.name || `${D.firstName} ${D.lastName}`, $ = _?.id === D.id;
            return /* @__PURE__ */ t(
              "div",
              {
                class: `dqm__pract-item ${$ ? "dqm__pract-item--selected" : ""}`,
                onClick: () => v(D),
                children: [
                  /* @__PURE__ */ t("div", { class: "dqm__pract-avatar", children: (D.firstName?.[0] || B[0]).toUpperCase() }),
                  /* @__PURE__ */ t("div", { class: "dqm__pract-info", children: [
                    /* @__PURE__ */ t("div", { class: "dqm__pract-name", children: B }),
                    D.title && /* @__PURE__ */ t("div", { class: "dqm__pract-title", children: D.title })
                  ] }),
                  $ && /* @__PURE__ */ t("span", { class: "dqm__pract-check", children: "✓" })
                ]
              },
              D.id
            );
          }) }),
          /* @__PURE__ */ t("div", { class: "dqm__hint", children: "They will be notified via SMS" })
        ] })
      ] })
    ) }),
    /* @__PURE__ */ t("div", { class: "dqm__footer", children: n === 1 ? /* @__PURE__ */ t(Y, { children: [
      /* @__PURE__ */ t("button", { class: "dqm__btn dqm__btn--secondary", onClick: s, type: "button", children: "Cancel" }),
      /* @__PURE__ */ t("button", { class: "dqm__btn dqm__btn--primary", onClick: () => i(2), disabled: a, type: "button", children: "Next" })
    ] }) : /* @__PURE__ */ t(Y, { children: [
      /* @__PURE__ */ t("button", { class: "dqm__btn dqm__btn--secondary", onClick: () => i(1), disabled: f, type: "button", children: "Back" }),
      /* @__PURE__ */ t("button", { class: "dqm__btn dqm__btn--primary", onClick: F, disabled: !_ || f, type: "button", children: f ? "Sending..." : "Send Query" })
    ] }) })
  ] }) });
}
const is = "SUNNY MEADOWS DEMO FACILITY", Wa = "demo-org", Ka = {
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
function Ja({ toast: e, onDismiss: s }) {
  if (!e) return null;
  const n = {
    success: { bg: "#ecfdf5", border: "#6ee7b7", text: "#065f46" },
    error: { bg: "#fef2f2", border: "#fca5a5", text: "#991b1b" },
    info: { bg: "#eff6ff", border: "#93c5fd", text: "#1e40af" },
    warning: { bg: "#fffbeb", border: "#fcd34d", text: "#92400e" }
  }, i = n[e.type] || n.info;
  return /* @__PURE__ */ t(
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
        background: i.bg,
        color: i.text,
        border: `1px solid ${i.border}`,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        maxWidth: "340px",
        animation: "fadeInUp 0.2s ease"
      },
      onClick: s,
      children: e.message
    }
  );
}
function Ya() {
  const [e, s] = b(null), [n, i] = b(null), [a, r] = b(null), [c, o] = b(null), [p, d] = b(null), u = ee(null), l = ee([]);
  z(() => {
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
    ].forEach((C) => {
      document.querySelectorAll(C).forEach((f) => {
        f.style.display = "none";
      });
    });
  }, []), z(() => {
    function g(C) {
      const f = C.detail?.code;
      f && (s("itemPopover"), i({
        mdsItem: f,
        categoryKey: f,
        itemName: Za(f)
      }));
    }
    return window.addEventListener("demo:badge-click", g), () => window.removeEventListener("demo:badge-click", g);
  }, []), z(() => {
    document.querySelectorAll(".super-badge").forEach((C) => C.remove());
    const g = [];
    for (const [C, f] of Object.entries(Ka)) {
      const x = document.getElementById(`${C}_wrapper`);
      if (!x) continue;
      const k = x.querySelector(".question_label");
      if (!k || k.querySelector(".super-badge")) continue;
      const y = document.createElement("span");
      y.className = `super-badge super-badge--${f.status}`, y.textContent = f.label, y.setAttribute("data-mds-item", C), y.style.cssText = `
        display: inline-flex; align-items: center; gap: 4px;
        padding: 3px 8px; border-radius: 4px; font-size: 11px;
        font-weight: 600; cursor: pointer; margin-left: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        vertical-align: middle;
      `, f.status === "match" ? (y.style.background = "#dcfce7", y.style.color = "#166534", y.style.border = "1px solid #86efac") : f.status === "mismatch" ? (y.style.background = "#fee2e2", y.style.color = "#991b1b", y.style.border = "1px solid #fca5a5") : f.status === "review" && (y.style.background = "#fef3c7", y.style.color = "#92400e", y.style.border = "1px solid #fcd34d"), y.addEventListener("click", (E) => {
        E.stopPropagation(), E.preventDefault(), window.dispatchEvent(new CustomEvent("demo:badge-click", { detail: { code: C } }));
      }), y.addEventListener("mouseenter", () => {
        y.style.transform = "translateY(-1px)", y.style.boxShadow = "0 2px 6px rgba(0,0,0,0.12)";
      }), y.addEventListener("mouseleave", () => {
        y.style.transform = "", y.style.boxShadow = "";
      });
      const S = k.querySelector(":scope > b");
      S ? S.appendChild(y) : k.appendChild(y), g.push(y);
    }
    return l.current = g, console.log(`[PCCDemoApp] Injected ${g.length} Super badges into PCC form`), () => {
      g.forEach((C) => C.remove());
    };
  }, []), z(() => {
    function g(C) {
      const f = C.detail;
      r({
        scope: f?.scope || "mds",
        assessmentId: f?.assessmentId || "4860265",
        facilityName: is
      }), s("pdpmMds");
    }
    return window.addEventListener("demo:open-pdpm", g), () => window.removeEventListener("demo:open-pdpm", g);
  }, []), z(() => {
    function g(C) {
      const { type: f, message: x } = C.detail || {};
      o({ type: f || "info", message: x || "" }), clearTimeout(u.current), u.current = setTimeout(() => o(null), 3e3);
    }
    return window.addEventListener("demo:toast", g), () => {
      window.removeEventListener("demo:toast", g), clearTimeout(u.current);
    };
  }, []), z(() => {
    window.QuerySendModal = {
      show(g) {
        g && !g.aiAnswer && (g.keyFindings || g.evidence || g.rationale || g.status) && (g = { mdsItem: g.mdsItem, description: g.description, aiAnswer: g }), d(g);
      }
    };
  }, []);
  const m = X(() => {
    s(null), i(null), r(null);
  }, []), h = X((g) => {
    g?.hide || s(null);
  }, []), _ = X(() => {
    s(null), i(null);
  }, []), v = X(() => {
    s("commandCenter");
  }, []);
  return /* @__PURE__ */ t(Y, { children: [
    e === "commandCenter" && /* @__PURE__ */ t(
      sa,
      {
        facilityName: is,
        orgSlug: Wa,
        onClose: h
      }
    ),
    e === "pdpmMds" && a && /* @__PURE__ */ t("div", { style: er, children: [
      /* @__PURE__ */ t("div", { style: tr, children: [
        /* @__PURE__ */ t("span", { style: { fontWeight: 600 }, children: "PDPM Analyzer" }),
        /* @__PURE__ */ t("button", { onClick: m, style: sr, children: "×" })
      ] }),
      /* @__PURE__ */ t("div", { style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ t(
        ja,
        {
          context: a,
          onClose: m
        }
      ) })
    ] }),
    e === "itemPopover" && n && /* @__PURE__ */ t(
      qs,
      {
        item: n,
        context: { assessmentId: "4860265" },
        onClose: _
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        class: "super-demo-fab",
        onClick: v,
        title: "Open Super Command Center",
        style: Xa,
        children: [
          /* @__PURE__ */ t("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ t("rect", { x: "3", y: "3", width: "7", height: "7" }),
            /* @__PURE__ */ t("rect", { x: "14", y: "3", width: "7", height: "7" }),
            /* @__PURE__ */ t("rect", { x: "3", y: "14", width: "7", height: "7" }),
            /* @__PURE__ */ t("rect", { x: "14", y: "14", width: "7", height: "7" })
          ] }),
          /* @__PURE__ */ t("span", { style: { marginLeft: "8px", fontSize: "13px", fontWeight: 600 }, children: "Super" })
        ]
      }
    ),
    p && /* @__PURE__ */ t(
      Qa,
      {
        queryData: p,
        onClose: () => d(null)
      }
    ),
    /* @__PURE__ */ t(Ja, { toast: c, onDismiss: () => o(null) })
  ] });
}
function Za(e) {
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
  }[e] || `MDS Item ${e}`;
}
const Xa = {
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
}, er = {
  position: "fixed",
  inset: "20px",
  zIndex: 1e5,
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
}, tr = {
  padding: "12px 16px",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f9fafb",
  flexShrink: 0
}, sr = {
  background: "transparent",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
  color: "#6b7280",
  padding: "0 4px",
  lineHeight: 1
};
tn();
sn();
window.__DEMO_MODE = !0;
function as() {
  let e = document.getElementById("super-demo-root");
  e || (e = document.createElement("div"), e.id = "super-demo-root", document.body.appendChild(e)), ys(/* @__PURE__ */ t(Ya, {}), e), console.log("[PCC Demo] PCCDemoApp mounted");
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", as) : as();
