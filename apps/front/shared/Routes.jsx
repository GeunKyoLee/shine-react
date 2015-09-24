Meteor.startup(function () {
  if (Meteor.isClient) {
    const {Router, Route, Redirect} = ReactRouter;

    const browserHistory = ReactRouter.history
	    .useQueries(ReactRouter.history.createHistory)();

    React.render((
	    <Router history={browserHistory}>
		    <Route component={Shine.DefaultLayout}>
			    <Redirect from="home" to="/home/newest" />
			    <Route path="home" component={Shine.Home}>
				    <Route path=":order" component={Shine.Home}/>
			    </Route>
		    </Route>
		    <Redirect from="/" to="/home" />
	    </Router>
    ), document.body);
  }
});
