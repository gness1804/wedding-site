(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    154: function(e, t, a) {},
    161: function(e, t, a) {},
    162: function(e, t, a) {},
    163: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        c = a.n(n),
        r = a(42),
        o = a.n(r),
        l = a(23),
        i = a.n(l),
        m = a(43),
        s = a(25),
        d = a(47),
        u = a(2),
        p = a(9),
        E = a(44),
        h = a.n(E),
        g = c.a.createContext({ pageContent: {}, dates: {} }),
        x = function(e, t) {
          switch (t.type) {
            case 'GET_PAGE_CONTENT':
              return Object.assign({}, e, { pageContent: t.pageContent });
            case 'GET_DATES':
              return Object.assign({}, e, { dates: t.dates });
            default:
              return e;
          }
        },
        N = { type: 'GET_PAGE_CONTENT', pageContent: {} },
        b = { type: 'GET_DATES', dates: {} },
        v = a(10),
        f = a.n(v),
        y = function(e, t) {
          var a = Date.parse(e),
            n = Date.now();
          return t && (n = Date.parse(t)), (a - n) / 864e5;
        },
        w = {
          colors: {
            primary: 'red darken-4',
            secondary: 'pink darken-3',
            tertiary: 'pink darken-4',
            mainBackground: 'pink lighten-5',
            whiteBackground: 'grey lighten-5',
            mainText: 'mainText',
            whiteText: 'grey-text text-lighten-5',
          },
          text: {
            mainShadow: 'mainShadow',
            fonts: { mainHeading: 'mainHeading', mainContent: 'mainContent' },
          },
          padding: { mainPaddingAllSides: 'mainPaddingAllSides' },
        },
        T = (a(154),
        function() {
          var e = Object(n.useContext)(g).state,
            t = e.pageContent,
            a = e.dates,
            r = null;
          if (0 === Object.keys(t).length || 0 === Object.keys(a).length)
            return c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement('h1', null, 'Loading...'),
            );
          var o = t.header,
            l = Math.floor(y(a.ceremony)),
            i = Math.floor(y(a.reception));
          l &&
            i &&
            (r = c.a.createElement(
              'div',
              {
                className: 'counter-elem card center z-depth-2 '
                  .concat(w.colors.primary, ' ')
                  .concat(w.padding.mainPaddingAllSides, ' ')
                  .concat(w.text.fonts.mainHeading),
              },
              c.a.createElement(f.a, {
                className: ''
                  .concat(w.colors.mainText, ' ')
                  .concat(w.text.mainShadow),
                source: o.counterWedding.replace('{{counter}}', l),
              }),
              c.a.createElement(f.a, {
                className: ''
                  .concat(w.colors.mainText, ' ')
                  .concat(w.text.mainShadow),
                source: o.counterReception.replace('{{counter}}', i),
              }),
            ));
          var m = o.links,
            s = m.home,
            d = m.ceremony,
            p = m.reception,
            E = m.rsvp,
            h = m.ourStory,
            x = c.a.createElement(
              'div',
              { className: 'nav-content header-links' },
              c.a.createElement(
                'ul',
                {
                  className:
                    'tabs tabs-transparent center header-links-desktop',
                },
                c.a.createElement(
                  'li',
                  { className: 'tab' },
                  c.a.createElement(
                    u.b,
                    {
                      className: ''.concat(w.colors.mainText),
                      to: s.url,
                      title: s.text,
                    },
                    s.text,
                  ),
                ),
                c.a.createElement(
                  'li',
                  { className: 'tab' },
                  c.a.createElement(
                    u.b,
                    {
                      className: ''.concat(w.colors.mainText),
                      to: d.url,
                      title: d.text,
                    },
                    d.text,
                  ),
                ),
                c.a.createElement(
                  'li',
                  { className: 'tab' },
                  c.a.createElement(
                    u.b,
                    {
                      className: ''.concat(w.colors.mainText),
                      to: p.url,
                      title: p.text,
                    },
                    p.text,
                  ),
                ),
                c.a.createElement(
                  'li',
                  { className: 'tab' },
                  c.a.createElement(
                    u.b,
                    {
                      className: ''.concat(w.colors.mainText),
                      to: E.url,
                      title: E.text,
                    },
                    E.text,
                  ),
                ),
                c.a.createElement(
                  'li',
                  { className: 'tab' },
                  c.a.createElement(
                    u.b,
                    {
                      className: ''.concat(w.colors.mainText),
                      to: h.url,
                      title: h.text,
                    },
                    h.text,
                  ),
                ),
              ),
              c.a.createElement(
                'ul',
                { className: 'center header-links-mobile' },
                c.a.createElement(
                  'li',
                  null,
                  c.a.createElement(
                    u.b,
                    { to: s.url, title: s.text },
                    c.a.createElement(
                      'i',
                      { className: 'material-icons' },
                      'home',
                    ),
                  ),
                ),
                c.a.createElement(
                  'li',
                  null,
                  c.a.createElement(
                    u.b,
                    { to: d.url, title: d.text },
                    c.a.createElement(
                      'i',
                      { className: 'material-icons' },
                      'account_balance',
                    ),
                  ),
                ),
                c.a.createElement(
                  'li',
                  null,
                  c.a.createElement(
                    u.b,
                    { to: p.url, title: p.text },
                    c.a.createElement(
                      'i',
                      { className: 'material-icons' },
                      'local_bar',
                    ),
                  ),
                ),
                c.a.createElement(
                  'li',
                  null,
                  c.a.createElement(
                    u.b,
                    { to: E.url, title: E.text },
                    c.a.createElement(
                      'i',
                      { className: 'material-icons' },
                      'person_add',
                    ),
                  ),
                ),
                c.a.createElement(
                  'li',
                  null,
                  c.a.createElement(
                    u.b,
                    { to: h.url, title: h.text },
                    c.a.createElement(
                      'i',
                      { className: 'material-icons' },
                      'library_books',
                    ),
                  ),
                ),
              ),
            );
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              'div',
              {
                className: 'header-main-container z-depth-3 '.concat(
                  w.colors.primary,
                ),
              },
              c.a.createElement(
                'div',
                { className: 'nav-wrapper' },
                c.a.createElement(
                  'a',
                  { href: o.links.home.url, title: o.title },
                  c.a.createElement(
                    'h1',
                    {
                      className: 'brand-logo center headline-text '
                        .concat(w.colors.mainText, ' ')
                        .concat(w.text.mainShadow, ' ')
                        .concat(w.text.fonts.mainHeading),
                    },
                    o.title,
                  ),
                ),
              ),
              x,
            ),
            r,
          );
        }),
        k = (a(161),
        function() {
          var e = Object(n.useContext)(g).state.pageContent.home;
          return e && 0 !== Object.keys(e).length
            ? c.a.createElement(
                'div',
                {
                  className: 'card page-component z-depth-1 '
                    .concat(w.colors.primary, ' ')
                    .concat(w.padding.mainPaddingAllSides),
                },
                c.a.createElement(
                  'div',
                  { className: 'card '.concat(w.colors.whiteBackground) },
                  c.a.createElement(
                    'div',
                    { className: 'card-image main-pic' },
                    c.a.createElement('img', {
                      src: e.mainPic,
                      alt: e.mainPicAltText,
                    }),
                  ),
                  c.a.createElement(
                    'div',
                    { className: 'card-content' },
                    c.a.createElement('p', null, e.mainPicDescription),
                  ),
                ),
                c.a.createElement(f.a, {
                  className: ''.concat(w.colors.mainText),
                  source: e.introText,
                }),
                c.a.createElement(f.a, {
                  className: ''.concat(w.colors.whiteText),
                  source: e.detailsText,
                }),
                c.a.createElement(f.a, {
                  className: ''.concat(w.colors.whiteText),
                  source: e.callToAction,
                }),
              )
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement('h1', null, 'Loading...'),
              );
        }),
        C = function() {
          return c.a.createElement(
            'div',
            {
              className: 'card page-component z-depth-1 '.concat(
                w.colors.primary,
              ),
            },
            c.a.createElement('p', null, 'I am the Ceremony component.'),
          );
        },
        O = function() {
          return c.a.createElement(
            'div',
            {
              className: 'card page-component z-depth-1 '.concat(
                w.colors.primary,
              ),
            },
            c.a.createElement('p', null, 'I am the our story component.'),
          );
        },
        S = function() {
          return c.a.createElement(
            'div',
            {
              className: 'card page-component z-depth-1 '.concat(
                w.colors.primary,
              ),
            },
            c.a.createElement('p', null, 'I am the reception component.'),
          );
        },
        j = function() {
          return c.a.createElement(
            'div',
            {
              className: 'card page-component z-depth-1 '.concat(
                w.colors.primary,
              ),
            },
            c.a.createElement('p', null, 'I am the RSVP component.'),
          );
        },
        P = function() {
          return c.a.createElement(
            'div',
            {
              className: 'card page-component not-found z-depth-1 '.concat(
                w.colors.primary,
              ),
            },
            c.a.createElement(
              'h1',
              null,
              'Sorry, this page does not exist. Please try again.',
            ),
            c.a.createElement(u.b, { to: '/' }, 'Home'),
          );
        },
        A = function() {
          var e = Object(n.useContext)(g),
            t = Object(n.useReducer)(x, e),
            a = Object(d.a)(t, 2),
            r = a[0],
            o = a[1],
            l = function(e) {
              return Object(s.a)({}, b, { dates: e });
            },
            E = (function() {
              var e = Object(m.a)(
                i.a.mark(function e() {
                  var t;
                  return i.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 4),
                              h.a.get('/api/v1/content')
                            );
                          case 4:
                            (t = e.sent),
                              o(
                                ((a = t.data.pageContent),
                                Object(s.a)({}, N, { pageContent: a })),
                              ),
                              o(l(t.data.dates)),
                              (e.next = 12);
                            break;
                          case 9:
                            throw ((e.prev = 9),
                            (e.t0 = e.catch(0)),
                            new Error(
                              'Error fetching page content: '.concat(
                                e.t0.message || JSON.stringify(e.t0),
                              ),
                            ));
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                      var a;
                    },
                    e,
                    null,
                    [[0, 9]],
                  );
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(n.useEffect)(function() {
              E();
            }, []),
            c.a.createElement(
              g.Provider,
              { value: { state: r, dispatch: o } },
              c.a.createElement(
                u.a,
                null,
                c.a.createElement(
                  'div',
                  {
                    className: 'container '
                      .concat(w.colors.mainBackground, ' ')
                      .concat(w.text.fonts.mainContent),
                  },
                  c.a.createElement(T, null),
                  c.a.createElement(
                    p.c,
                    null,
                    c.a.createElement(p.a, {
                      exact: !0,
                      path: '/',
                      component: k,
                    }),
                    c.a.createElement(p.a, { path: '/ceremony', component: C }),
                    c.a.createElement(p.a, {
                      path: '/reception',
                      component: S,
                    }),
                    c.a.createElement(p.a, { path: '/rsvp', component: j }),
                    c.a.createElement(p.a, {
                      path: '/our-story',
                      component: O,
                    }),
                    c.a.createElement(p.a, { component: P }),
                  ),
                ),
              ),
            )
          );
        };
      a(162),
        Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
            ),
        );
      o.a.render(c.a.createElement(A, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    48: function(e, t, a) {
      e.exports = a(163);
    },
  },
  [[48, 1, 2]],
]);
//# sourceMappingURL=main.adfa729a.chunk.js.map
