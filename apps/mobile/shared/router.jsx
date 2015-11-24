
const { Router, Route, IndexRoute } = ReactRouter;

const requireAuth = function(nextState, replaceState) {
  if (! Meteor.loggingIn() && ! Meteor.user()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/sign-in');
  }
};

if (Meteor.isClient) {
  const createHistory = ReactRouter.history.createHistory;
  const onRouterUpdate = App.AsideLeft.hide;

  const routes = (
    <Route path="/" component={App.Layout} >
      <Route path="home" component={App.HomeContainer} />

      <Route path="sign-in" component={Accounts.ui.SignInContainer} />
      <Route path="sign-up" component={Accounts.ui.SignUpContainer} />
      <Route path="forgot-password"
             component={Accounts.ui.ForgotPasswordContainer} />
      <Route path="reset-password/:token"
             component={Accounts.ui.ResetPasswordContainer} />

      <Route path="profile"
             component={App.ProfileContainer}
             onEnter={requireAuth} />
      <Route path="profile/edit/:name"
             component={App.ProfileEditContainer}
             onEnter={requireAuth} />

      <Route path="about" component={App.AboutContainer} />

      <Route path="posts" component={App.PostsContainer} />
      <Route path="post/view/:id" component={App.PostViewContainer} />
      <Route path="post/edit/:id" component={App.PostEditContainer} />
      <Route path="post/new" component={App.PostNewContainer} />

      <IndexRoute component={App.HomeContainer} />

      <Route path="*" component={App.NotFound} />
    </Route>
  );

  const router = (
    <Router history={createHistory()} onUpdate={onRouterUpdate}>
      {routes}
    </Router>
  );

  Accounts.onResetPasswordLink((token) => {
    createHistory().pushState(null, `/reset-password/${token}`);
  });

  Meteor.startup(function() {
    ReactDOM.render(router, document.getElementById('app-container'));
  });

} else {
  // server-side routes
  /*
  const routes = (
    <Route path="/" component={App.Layout}>
      <IndexRoute component={App.HomeContainer}/>
      <Route path="home" component={App.HomeContainer}/>
      <Route path="*" component={App.NotFound}/>
    </Route>
  );

  ReactRouterSSR.Run(routes);
  */
}
