/*
const { Router, Route, IndexRoute } = ReactRouter;

const createHistory = ReactRouter.history.createHistory;

ClientRouter = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      isAuthenticated: (Meteor.userId() !== null),
      user: Meteor.user()
    }
  },

  _requireAuth(nextState, replaceState) {
    if (! this.data.isAuthenticated) {
      replaceState({ nextPathname: nextState.location.pathname }, '/sign-in');
    }
  },

  _hideAside: App.AsideLeft.hide,

  componentWillMount() {
    Accounts.onResetPasswordLink((token) => {
      createHistory().pushState(null, `/reset-password/${token}`);
    });
  },

  render() {
    if (Meteor.loggingIn()) return <App.Spinner />;

    return (
      <Router history={createHistory()} onUpdate={this._hideAside}>
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
                 onEnter={this.requireAuth} />
          <Route path="profile/edit/:name"
                 component={App.ProfileEditContainer}
                 onEnter={this.requireAuth} />

          <Route path="about" component={App.AboutContainer} />

          <Route path="posts" component={App.PostsContainer} />
          <Route path="post/view/:id" component={App.PostViewContainer} />
          <Route path="post/edit/:id" component={App.PostEditContainer} />
          <Route path="post/new" component={App.PostNewContainer} />

          <IndexRoute component={App.HomeContainer} />

          <Route path="*" component={App.NotFound} />
        </Route>
      </Router>
    )
  }
});
*/