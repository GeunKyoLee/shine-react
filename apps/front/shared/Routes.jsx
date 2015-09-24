Meteor.startup(function () {

  if (Meteor.isClient) {
    const {Router, Route, IndexRoute} = ReactRouter;

    const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

    React.render((
      <Router history={history}>
        <Route path="/" component={Shine.DefaultLayout}>
          <IndexRoute component={Shine.Home}/>
          <Route path="/home" component={Shine.Home}>
            <Route path="/home/:order" component={Shine.Home}/>
          </Route>
        </Route>
      </Router>
    ), document.body);
  }
});