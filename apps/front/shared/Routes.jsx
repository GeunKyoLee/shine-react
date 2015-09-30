
Meteor.startup(function () {
  if (Meteor.isClient) {
    const {Router, Route, Redirect} = ReactRouter;
    const browserHistory = ReactRouter.history
      .useQueries(ReactRouter.history.createHistory)();

    React.render((
      <Router history={browserHistory}>
        <Route component={Shine.DefaultLayout}>
          <Redirect from="home" to="/home/newest" />
          <Route path="home" component={Shine.HomeLoader}>
            <Route path=":order"/>
          </Route>
          <Route path="myworks" component={Shine.HomeLoader} />
          <Route path="category" component={Shine.HomeLoader}>
            <Route path=":categories">
            </Route>
          </Route>
          <Route path="category/:categories/:postId" component={Shine.PostViewComponent}/>
        </Route>
        <Redirect from="/" to="/home" />
      </Router>
    ), document.body);
  }
});
