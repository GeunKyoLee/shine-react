
const { Router, Route, IndexRoute } = ReactRouter;

const requireAuth = function(nextState, replaceState) {
  if (! Meteor.loggingIn() && ! Meteor.user()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/sign-in');
  }
};

if (Meteor.isClient) {
  const createHistory = ReactRouter.history.createHistory;

  const routes = (
    <Route path="/" component={App.Layout}>
      <IndexRoute component={Dashboard.ViewContainer} onEnter={requireAuth} />

      <Route path="dashboard" component={Dashboard.ViewContainer} onEnter={requireAuth} />

      <Route path="profile"
             component={Profile.ViewContainer} onEnter={requireAuth} />
      <Route path="profile/edit/:name"
             component={Profile.EditContainer} onEnter={requireAuth} />

      <Route path="about" component={About.ViewContainer} onEnter={requireAuth} />

      <Route path="accounts" component={Account.ListContainer} onEnter={requireAuth} />
      <Route path="account/edit/:id" component={Account.EditContainer} onEnter={requireAuth} />

      <Route path="posts" component={Post.ListContainer} onEnter={requireAuth} />
      <Route path="post/view/:id" component={Post.ViewContainer} onEnter={requireAuth} />
      <Route path="post/edit/:id" component={Post.EditContainer} onEnter={requireAuth} />
      <Route path="post/new" component={Post.NewContainer} onEnter={requireAuth} />

    </Route>
  );

  const router = (
    <Router history={createHistory()}>
      <Route path="/sign-in" component={Account.SignInContainer} />
      <Route path="sign-up" component={Account.SignUpContainer} />
      <Route path="forgot-password"
             component={Account.ForgotPasswordContainer} />
      <Route path="reset-password/:token"
             component={Account.ResetPasswordContainer} />

      {routes}

      <Route path="*" component={App.NotFound} />
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
