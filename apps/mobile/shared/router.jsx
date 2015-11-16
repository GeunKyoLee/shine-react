
const { Router, Route, IndexRoute } = ReactRouter;

if (Meteor.isClient) {
  const createHistory = ReactRouter.history.createHistory;
  const onRouterUpdate = App.AsideLeft.hide;

  // client-side routes
  const routes = (
    <Route path="/" component={App.Layout} >
      <Route path="home" component={App.HomeContainer} />
      <Route path="about" component={App.AboutContainer} />

      <Route path="posts" component={App.PostsContainer} />
      <Route path="post/view/:id" component={App.PostViewContainer} />
      <Route path="post/edit/:id" component={App.PostEditContainer} />
      <Route path="post/new" component={App.PostNewContainer} />

      <Route path="sign-in" component={Accounts.SignInContainer} />
      <Route path="sign-up" component={Accounts.SignUpContainer} />
      <Route path="forgot-password"
             component={Accounts.ForgotPasswordContainer} />
      <Route path="reset-password/:token"
             component={Accounts.ResetPasswordContainer} />

      <IndexRoute component={App.HomeContainer} />

      <Route path="*" component={App.NotFound} />
    </Route>
  );

  const router = (
    <Router history={createHistory()} onUpdate={onRouterUpdate}>
      {routes}
    </Router>
  );

  Accounts.onResetPasswordLink(function (token, done) {
    console.log('token: ' + token);
    createHistory().pushState(null, `/reset-password/${token}`);
  });


  Meteor.startup(function() {
    ReactDOM.render(router, document.getElementById('app-container'));
  });
} else {
  // server-side routes
  const routes = (
    <Route path="/" component={App.Layout}>
      <IndexRoute component={App.HomeContainer} />
      <Route path="home" component={App.HomeContainer} />
      <Route path="*" component={App.NotFound} />
    </Route>
  );

  ReactRouterSSR.Run(routes);
}
