
const navs = [
  { path: '/dashboard', name: 'label_dashboard', icon: 'fa fa-dashboard' },
  { path: '/accounts', name: 'label_account', icon: 'fa fa-user' },
  { path: '/categories', name: 'label_category', icon: 'fa fa-tags' },
  { path: '/posts', name: 'label_post', icon: 'fa fa-pencil-square-o' },
  { path: '/admins', name: 'label_admin', icon: 'fa fa-key' },
  { path: '/about', name: 'label_about', icon: 'fa fa-info-circle' },
];

const { Link } = ReactRouter;

App.AsideNavs = React.createClass({
  navList() {
    return navs.map((item, i) => {
      return (
        <Link key={i} to={item.path}>
          <i className={item.icon}></i><span>{L(item.name)}</span>
        </Link>
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