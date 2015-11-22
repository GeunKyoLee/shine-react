
const navs = [
  { path: '/home', name: 'title_home' },
  { path: '/about', name: 'label_about' },
  { path: '/posts', name: 'label_posts_list' },
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
        <nav className="links">
          {this.navList()}
        </nav>
      </div>
    )
  }
});