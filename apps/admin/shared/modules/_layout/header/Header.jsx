
App.Header = React.createClass({
  getDefaultProps() {
    return {
      title: 'Page-Title',
      hideAccount: false,
    }
  },

  render() {
    const accountButton = (! this.props.hideAccount) ?
      <App.AccountInfo /> : null;

    return (
      <header>
        <div className="logo">
          <img src="/images/logo-inversed.svg" />
          <span className="title">Administration</span>
        </div>
        <div className="header-right">
          {accountButton}
        </div>
      </header>
    )
  }
});