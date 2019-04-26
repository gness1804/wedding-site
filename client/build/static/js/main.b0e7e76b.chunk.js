(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    130: function(e, t, a) {},
    137: function(e, t, a) {},
    138: function(e, t, a) {},
    139: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        c = a.n(n),
        r = a(36),
        o = a.n(r),
        l = a(20),
        i = a.n(l),
        m = a(37),
        s = a(22),
        d = a(40),
        u = a(2),
        p = a(8),
        E = (a(48), c.a.createContext({ pageContent: {}, dates: {} })),
        h = function(e, t) {
          switch (t.type) {
            case 'GET_PAGE_CONTENT':
              return Object.assign({}, e, { pageContent: t.pageContent });
            case 'GET_DATES':
              return Object.assign({}, e, { dates: t.dates });
            default:
              return e;
          }
        },
        g = { type: 'GET_PAGE_CONTENT', pageContent: {} },
        x = { type: 'GET_DATES', dates: {} },
        N = a(9),
        b = a.n(N),
        f = function(e, t) {
          var a = Date.parse(e),
            n = Date.now();
          return t && (n = Date.parse(t)), (a - n) / 864e5;
        },
        v = {
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
        y = (a(130),
        function() {
          var e = Object(n.useContext)(E).state,
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
            l = Math.floor(f(a.ceremony)),
            i = Math.floor(f(a.reception));
          l &&
            i &&
            (r = c.a.createElement(
              'div',
              {
                className: 'counter-elem card center z-depth-2 '
                  .concat(v.colors.primary, ' ')
                  .concat(v.padding.mainPaddingAllSides, ' ')
                  .concat(v.text.fonts.mainHeading),
              },
              c.a.createElement(b.a, {
                className: ''
                  .concat(v.colors.mainText, ' ')
                  .concat(v.text.mainShadow),
                source: o.counterWedding.replace('{{counter}}', l),
              }),
              c.a.createElement(b.a, {
                className: ''
                  .concat(v.colors.mainText, ' ')
                  .concat(v.text.mainShadow),
                source: o.counterReception.replace('{{counter}}', i),
              }),
            ));
          var m = o.links,
            s = m.home,
            d = m.ceremony,
            p = m.reception,
            h = m.rsvp,
            g = m.ourStory,
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
                      className: ''.concat(v.colors.mainText),
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
                      className: ''.concat(v.colors.mainText),
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
                      className: ''.concat(v.colors.mainText),
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
                      className: ''.concat(v.colors.mainText),
                      to: h.url,
                      title: h.text,
                    },
                    h.text,
                  ),
                ),
                c.a.createElement(
                  'li',
                  { className: 'tab' },
                  c.a.createElement(
                    u.b,
                    {
                      className: ''.concat(v.colors.mainText),
                      to: g.url,
                      title: g.text,
                    },
                    g.text,
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
                    { to: h.url, title: h.text },
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
                    { to: g.url, title: g.text },
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
                  v.colors.primary,
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
                        .concat(v.colors.mainText, ' ')
                        .concat(v.text.mainShadow, ' ')
                        .concat(v.text.fonts.mainHeading),
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
        w = (a(137),
        function() {
          var e = Object(n.useContext)(E).state.pageContent.home;
          return e && 0 !== Object.keys(e).length
            ? c.a.createElement(
                'div',
                {
                  className: 'card page-component z-depth-1 '
                    .concat(v.colors.primary, ' ')
                    .concat(v.padding.mainPaddingAllSides),
                },
                c.a.createElement(
                  'div',
                  { className: 'card '.concat(v.colors.whiteBackground) },
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
                c.a.createElement(b.a, {
                  className: ''.concat(v.colors.mainText),
                  source: e.introText,
                }),
                c.a.createElement(b.a, {
                  className: ''.concat(v.colors.whiteText),
                  source: e.detailsText,
                }),
                c.a.createElement(b.a, {
                  className: ''.concat(v.colors.whiteText),
                  source: e.callToAction,
                }),
              )
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement('h1', null, 'Loading...'),
              );
        }),
        T = function() {
          return c.a.createElement(
            'div',
            {
              className: 'card page-component z-depth-1 '.concat(
                v.colors.primary,
              ),
            },
            c.a.createElement('p', null, 'I am the Ceremony component.'),
          );
        },
        k = function() {
          return c.a.createElement(
            'div',
            {
              className: 'card page-component z-depth-1 '.concat(
                v.colors.primary,
              ),
            },
            c.a.createElement('p', null, 'I am the our story component.'),
          );
        },
        C = function() {
          return c.a.createElement(
            'div',
            {
              className: 'card page-component z-depth-1 '.concat(
                v.colors.primary,
              ),
            },
            c.a.createElement('p', null, 'I am the reception component.'),
          );
        },
        O = function() {
          return c.a.createElement(
            'div',
            {
              className: 'card page-component z-depth-1 '.concat(
                v.colors.primary,
              ),
            },
            c.a.createElement('p', null, 'I am the RSVP component.'),
          );
        },
        S = function() {
          return c.a.createElement(
            'div',
            {
              className: 'card page-component not-found z-depth-1 '.concat(
                v.colors.primary,
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
        j = function() {
          var e = Object(n.useContext)(E),
            t = Object(n.useReducer)(h, e),
            a = Object(d.a)(t, 2),
            r = a[0],
            o = a[1],
            l = function(e) {
              return Object(s.a)({}, x, { dates: e });
            },
            N = (function() {
              var e = Object(m.a)(
                i.a.mark(function e() {
                  var t, a, n, c;
                  return i.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (t = ''.concat(
                                location.href,
                                '/server/contentService.js',
                              )),
                              (e.next = 4),
                              fetch(t)
                            );
                          case 4:
                            return (
                              (a = e.sent),
                              o(
                                ((r = a.data),
                                Object(s.a)({}, g, { pageContent: r })),
                              ),
                              (n = ''.concat(
                                location.href,
                                '/server/datesService.js',
                              )),
                              (e.next = 9),
                              fetch(n)
                            );
                          case 9:
                            (c = e.sent), o(l(c.data)), (e.next = 16);
                            break;
                          case 13:
                            throw ((e.prev = 13),
                            (e.t0 = e.catch(0)),
                            new Error(
                              'Error fetching page content: '.concat(
                                e.t0.message || JSON.stringify(e.t0),
                              ),
                            ));
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                      var r;
                    },
                    e,
                    null,
                    [[0, 13]],
                  );
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(n.useEffect)(function() {
              N();
            }, []),
            c.a.createElement(
              E.Provider,
              { value: { state: r, dispatch: o } },
              c.a.createElement(
                u.a,
                null,
                c.a.createElement(
                  'div',
                  {
                    className: 'container '
                      .concat(v.colors.mainBackground, ' ')
                      .concat(v.text.fonts.mainContent),
                  },
                  c.a.createElement(y, null),
                  c.a.createElement(
                    p.c,
                    null,
                    c.a.createElement(p.a, {
                      exact: !0,
                      path: '/',
                      component: w,
                    }),
                    c.a.createElement(p.a, { path: '/ceremony', component: T }),
                    c.a.createElement(p.a, {
                      path: '/reception',
                      component: C,
                    }),
                    c.a.createElement(p.a, { path: '/rsvp', component: O }),
                    c.a.createElement(p.a, {
                      path: '/our-story',
                      component: k,
                    }),
                    c.a.createElement(p.a, { component: S }),
                  ),
                ),
              ),
            )
          );
        };
      a(138),
        Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
            ),
        );
      o.a.render(c.a.createElement(j, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    41: function(e, t, a) {
      e.exports = a(139);
    },
  },
  [[41, 1, 2]],
]);
//# sourceMappingURL=main.b0e7e76b.chunk.js.map
