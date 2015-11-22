
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
        <App.Header title={L('label_profile')} />

        <article className="page">
          <div className="list">
            <div className="list-item">
              <p className="title">

              </p>
              <p className="value">

              </p>
            </div>
          </div>
        </article>

        <App.Footer >
          <button className="btn btn-primary btn-lg btn-block"
                  onClick={this.signOut}>
            {L('command_sign_out')}
          </button>
        </App.Footer>
      </App.Page>
    )
  }
});
