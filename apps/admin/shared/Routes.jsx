
// client routing
const clientRouter = [
  { path: '/',
    component: Shine.App,
    childRoutes: [
      { path: '/accounts', component: Shine.Account }
    ]
  },
  { path: '/about',
    component: Shine.About,
  }
];

// server routing
const serverRouter = [
  { path: '/',
    component: Shine.App,
    childRoutes: [
      { path: '/accounts', component: Shine.Account }
    ]
  }
];


Meteor.startup(function() {

  // language setup
  I18n.init();
  I18n.loadLanguage("en", 'I18n_data_en');
  I18n.loadLanguage("ko", 'I18n_data_ko');
  I18n.setLanguage("ko");

  // router setup
  if (Meteor.isClient) {
    const { Router, Route } = ReactRouter;
    const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

    React.render((
      <Router history={history} routes={clientRouter} />
    ), document.body);
  } else {
    const { IndexRoute, Route } = ReactRouter;

    ReactRouterSSR.Run(serverRouter);
  }
});
