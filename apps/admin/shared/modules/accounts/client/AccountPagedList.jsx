
const { Link } = ReactRouter;

const AccountListHead = React.createClass({
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

const AccountListItem = React.createClass({
  render() {
    const account = this.props.account;
    if (! account) return null;

    const name = account.profile && account.profile.name;
    const email = account.emails[0].address;
    const createdAt = moment(account.createdAt).format('YYYY-MM-DD HH:mm');

    return (
      <tr>
        <td>{account._id}</td>
        <td><Link to={`/account/edit/${account._id}`} >{name}</Link></td>
        <td>{email}</td>
        <td>{createdAt}</td>
      </tr>
    )
  }
});

Account.PagedList = React.createClass({
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

  accounts() {
    if (this.props.accounts.length === 0) {
      return (
        <tr>
          <td key={'_'}>{L('text_no_accounts')}</td>
        </tr>
      );
    }

    return this.props.accounts.map((account) => (
      <AccountListItem key={account._id} account={account} />
    ));
  },

  render() {
    const columns = [
      { title: L('label_id'), field: '_id' },
      { title: L('label_name'), field: 'profile.name' },
      { title: L('label_email'), field: 'emails.address' },
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
            {this.accounts()}
          </tbody>
        </table>
      </div>
    )
  }
});
