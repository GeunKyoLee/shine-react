
const navs = [
  { path: '/dashboard', name: 'label_dashboard' },
  { path: '/accounts', name: 'label_account' },
  { path: '/categories', name: 'label_category' },
  { path: '/posts', name: 'label_post' },
  { path: '/admins', name: 'label_admin' },
  { path: '/about', name: 'label_about' },
];

const { Link } = ReactRouter;

App.AsideNavs = React.createClass({
  navList() {
    return navs.map((item, i) => {
      return (
        <Link key={i} to={item.path}>{L(item.name)}</Link>
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