
const { Link } = ReactRouter;

const AdminListHead = React.createClass({
  handleSort(field) {
    this.props.onSort(field);
  },

  icon(field, sort) {
    if (field === sort.field) {
      return (sort.value === 1) ? "fa fa-sort-asc" : "fa fa-sort-desc";
    } else {
      return "fa fa-sort";
    }
  },

  render() {
    const columns = this.props.columns.map((column, i) => {

      return (
        <th key={i}
            className="sort"
            onClick={this.handleSort.bind(null, column.field)}>
          {column.title}
          <i className={this.icon(column.field, this.props.sort)}></i>
        </th>
      )
    });

    return <tr>{columns}</tr>;
  }
});

const AdminListItem = React.createClass({
  render() {
    const admin = this.props.admin;
    if (! admin) return null;

    const username = admin.username;
    const name = admin.profile && admin.profile.name;
    const createdAt = moment(admin.createdAt).format('YYYY-MM-DD HH:mm');

    return (
      <tr>
        <td>{admin._id}</td>
        <td><Link to={`/admin/view/${admin._id}`} >{username}</Link></td>
        <td>{name}</td>
        <td>{createdAt}</td>
      </tr>
    )
  }
});

Admin.PagedList = React.createClass({
  scrollPos: new ReactiveVar(0),

  componentDidMount() {
    Meteor.setTimeout(() => {
      $(this.refs.list).parent().scrollTop(this.scrollPos.get());
    }, 300);
  },

  componentWillUnmount() {
    const scrollTop = $(this.refs.list).parent().scrollTop();
    this.scrollPos.set(scrollTop);
  },

  admins() {
    if (this.props.admins.length === 0) {
      return (
        <tr>
          <td key={'_'} colSpan="4">{L('text_no_admins')}</td>
        </tr>
      );
    }

    return this.props.admins.map((admin) => (
      <AdminListItem key={admin._id} admin={admin} />
    ));
  },

  render() {
    const columns = [
      { title: L('label_id'), field: '_id' },
      { title: L('label_username'), field: 'username' },
      { title: L('label_name'), field: 'profile.name' },
      { title: L('label_created_at'), field: 'createdAt' },
    ];

    return (
      <div className="table-list" ref="list">
        <table className="table table-bordered table-striped">
          <thead>
            <App.TableHeadSort columns={columns}
                               sort={this.props.pagination.sort}
                               onSort={this.props.onSort} />
          </thead>
          <tbody>
            {this.admins()}
          </tbody>
        </table>
      </div>
    )
  }
});
