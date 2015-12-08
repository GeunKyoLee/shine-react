
App.Header = React.createClass({
  getDefaultProps() {
    return {
      title: 'Page-Title'
    }
  },

  render() {

    return (
      <header>
        <div className="logo"><img src="/images/logo-inversed.svg" /></div>
        <div className="header-left">
          <NavButton />
        </div>
        <div className="header-right">
          <App.AccountInfo />
        </div>
      </header>
    )
  }
});