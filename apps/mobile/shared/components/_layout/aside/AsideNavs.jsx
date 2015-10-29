
const navs = [
  { path: '/home', name: 'title_home' },
  { path: '/about', name: 'title_about' },
];

const { Link } = ReactRouter;

App.AsideNavs = React.createClass({
  navList() {
    return navs.map((item, i) => {
      return (
        <Link key={item.path} to={item.path}>{L(item.name)}</Link>
      )
    });
  },

  render() {
    return (
      <div id="nav-main">
        {this.navList()}
      </div>
    )
  }
});