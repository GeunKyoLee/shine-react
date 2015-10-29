
const { Router, Route, IndexRoute } = ReactRouter;

if (Meteor.isClient) {
  const history = ReactRouter.history
    .useQueries(ReactRouter.history.createHistory)();

  const onRouterUpdate = () => App.AsideLeft.hide();

  Meteor.startup(function() {
    React.render((
      <Router history={history} onUpdate={onRouterUpdate}>
        <Route path="/" component={App.Layout} >
          <IndexRoute component={App.HomeContainer} />
          <Route path="home" component={App.HomeContainer} />
          <Route path="about" component={App.AboutContainer} />
          <Route path="*" component={App.NotFound} />
        </Route>
      </Router>
    ), document.body);
  });
} else {

  ReactRouterSSR.Run(
    <Route path="/" component={App.Layout}>
      <IndexRoute component={App.HomeContainer} />
      <Route path="home" component={App.HomeContainer} />
      <Route path="*" component={App.NotFound} />
    </Route>
  );
}
