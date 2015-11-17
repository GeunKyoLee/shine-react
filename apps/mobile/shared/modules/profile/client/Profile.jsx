
const { History } = ReactRouter;

App.Profile = React.createClass({
  mixins: [History],

  signOut() {
    Meteor.logout();
    this.history.pushState(null, '/');
  },

  render() {
    return (
      <App.Page className="footer-on">
        <App.Header title={L('title_profile')} />

        <article className="page">
          profile
        </article>

        <App.Footer >
          <button className="btn btn-primary btn-lg btn-block" onClick={this.signOut}>
            {L('command_sign_out')}
          </button>
        </App.Footer>
      </App.Page>
    )
  }
});
