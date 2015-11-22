
const { Link } = ReactRouter;

App.Profile = React.createClass({

  render() {
    const user = this.props.user;
    const profileName = (user.profile && user.profile.name) || ' ';

    return (
      <App.Page className="footer-on">
        <App.Header title={L('label_profile')} />

        <article className="page">
          <div className="list">
            <Link to="/profile/edit/email" className="list-item">
              <div className="key">
                {L('label_email')}
              </div>
              <div className="value">
                <p>{user.emails[0].address}</p>
                <i className="fa fa-angle-right"></i>
              </div>
            </Link>

            <Link to="/profile/edit/password" className="list-item">
              <div className="key">
                {L('label_password')}
              </div>
              <div className="value">
                <p>&nbsp;</p>
                <i className="fa fa-angle-right"></i>
              </div>
            </Link>

            <Link to="/profile/edit/name" className="list-item">
              <div className="key">
                {L('label_name')}
              </div>
              <div className="value">
                <p>{profileName}</p>
                <i className="fa fa-angle-right"></i>
              </div>
            </Link>

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
