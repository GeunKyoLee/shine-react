
const { Route, IndexRoute } = ReactRouter;

const routes = (
  <Route path="/" component={App.Layout}>
    <IndexRoute component={App.HomeContainer} />
    <Route path="home" component={App.HomeContainer} />
    <Route path="*" component={App.NotFound} />
  </Route>
);

ReactRouterSSR.Run(routes);

