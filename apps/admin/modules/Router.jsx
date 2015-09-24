
// client routing
const clientRouter = [
  { path: '/',
    component: Shine.DefaultLayout,
	  childRoutes: [
				{ path: '/home', component: Shine.Home },
				{ path: '/account', component: Shine.Account }
		]/*,
    onEnter: function() {
      if (! Meteor.userId()) {
        Accounts.ui.dialog.show('signIn');
      }
    }*/
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

  // setup Router
  if (Meteor.isClient) {
    const { Router, Route } = ReactRouter;
    const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

    React.render((
      <Router history={history}>
        <Route path='/' component={Shine.DefaultLayout} >
          <Route path='home' component={Shine.Home} />
        </Route>
      </Router>
    ), document.body); //document.getElementById('#container'));
  } else {
    const { IndexRoute, Route } = ReactRouter;

    ReactRouterSSR.Run(serverRouter);
  }
});

//https://github.com/rackt/react-router/blob/master/docs/guides/basics/RouteConfiguration.md
