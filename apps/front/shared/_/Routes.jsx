
Meteor.startup(function() {
  if (Meteor.isClient) {
    const {Router, Route} = ReactRouter;
    const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

    React.render((
      <Router history={history}>
        <Route path="/" component={App}>
          {/* ... */}
        </Route>
      </Router>
    ), document.body);
  }

  if (Meteor.isServer) {
    const {IndexRoute, Route} = ReactRouter;

    AppRoutes = (
      <Route path="/" component={App}>
        {/* ... */}
      </Route>
    );
/*
    HomePage = React.createClass({
      mixins: [ReactMeteorData],

      getMeteorData() {
        Meteor.subscribe('profile');

        return {
          profile: Profile.findOne({ user: Meteor.userId() })
        };
      },

      render() {
        return <div>Hi {profile.name}</div>;
      }
    });
*/
    ReactRouterSSR.Run(AppRoutes);
  }
});

