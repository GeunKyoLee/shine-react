
App.Profile = React.createClass({

  render() {
    const user = this.props.user;

    return (
      <App.Page className="footer-on">
        <App.Header title={L('label_profile')} />

        <article className="page">
          <div className="list">
            <div className="list-item">
              <p className="key">
                {L('label_email')}
              </p>
              <p className="value">
                {user.emails[0].address}
              </p>
            </div>

            <div className="list-item">
              <p className="key">
                {L('label_password')}
              </p>
              <p className="value"></p>
            </div>

            <div className="list-item">
              <p className="key">
                {L('label_name')}
              </p>
              <p className="value">
                {user.profile && user.profile.name}
              </p>
            </div>

          </div>
        </article>

        <App.Footer >
          <button className="btn btn-primary btn-lg btn-block"
                  onClick={this.props.onSignOut}>
            {L('command_sign_out')}
          </button>
        </App.Footer>
      </App.Page>
    )
  }
});
