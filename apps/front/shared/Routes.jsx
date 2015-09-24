// client routing
const clientRouter = [
  { path: '/',
    component: Shine.DefaultLayout,
	  indexRoute: { component: Shine.Home },
    childRoutes: [
      { path: '/home', component: Shine.Home }
    ]
  },
  { path: '/about',
    component: Shine.About,
  }
];

// server routing
const serverRouter = [
  { path: '/',
    component: Shine.DefaultLayout,
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

