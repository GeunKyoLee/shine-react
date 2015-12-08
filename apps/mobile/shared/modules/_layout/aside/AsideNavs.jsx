

const { Link } = ReactRouter;

App.AsideNavs = React.createClass({

  render() {
    return (
      <div id="nav-main">
        <nav className="links">
          <Link to="/home">{L('label_home')}</Link>
          <Category.ListContainer />
          <Link to="/about">{L('label_about')}</Link>
        </nav>
      </div>
    )
  }
});