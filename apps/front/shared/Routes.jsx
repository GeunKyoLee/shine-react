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
  if (Meteor.isClient) {
    const {Router, Route} = ReactRouter;
    const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

    React.render((
      <Router history={history} routes={clientRouter} />
    ), document.body);
  }

  if (Meteor.isServer) {

    ReactRouterSSR.Run(serverRouter);
  }
});

