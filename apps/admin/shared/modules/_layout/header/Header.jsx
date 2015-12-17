const { Link } = ReactRouter;

App.Header = React.createClass({
  getDefaultProps() {
    return {
      hideAccount: false,
    }
  },

  render() {
    if (this.props.type === 'emailEdit') {
      return (
        <header>
          <div>

          </div>
        </header>
      )
    }


    const accountButton = (!this.props.hideAccount) ?
      <App.AccountInfo /> : null;

    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src="/images/logo-inversed.svg"/>
          </Link>
          <span className="title">Administration</span>
        </div>
        <div className="header-right">
          {accountButton}
        </div>
      </header>
    )
  }
});