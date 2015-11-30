
const { Link } = ReactRouter;

const AccountListItem = React.createClass({
  render() {
    const account = this.props.account;
    if (! account) return null;

    const name = account.profile && account.profile.name;
    const email = account.emails[0].address;
    const createdAt = moment(account.createdAt).format('YYYY-MM-DD HH:mm');

    return (
      <tr className="account-item">
        <td>{account._id}</td>
        <td><Link to={`/account/view/${account._id}`} >{name}</Link></td>
        <td>{email}</td>
        <td>{createdAt}</td>
      </tr>
    )
  }
});

Account.List = React.createClass({
  accounts() {
    if (this.props.accounts.length === 0) {
      return (<div key={'_'} className="account-item">{L('text_no_accounts')}</div>);
    }

    return this.props.accounts.map((account) => (
      <AccountListItem key={account._id} account={account} />
    ));
  },

  handleNewAccount(e) {
    e.preventDefault();
/*
    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Account.NewContainer />, { className: 'slide-up' })
      .then((value) => {
        console.log('value = ' + value);
      });
*/
  },

  render() {
    if (this.props.loading) return <App.Spinner />;

    return (
      <App.Page className="footer-on">
        <article className="page">
          <header>
            <h3>{L('label_account')} <small>{L('label_list')}</small></h3>
            <div className="actions">
              <button className="btn btn-primary pull-right"
                      onClick={this.handleNewAccount}>{L('label_new_account')}</button>
            </div>
          </header>

          <div className="account-list">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>{L('label_id')}</th>
                  <th>{L('label_name')}</th>
                  <th>{L('label_email')}</th>
                  <th>{L('label_created_at')}</th>
                </tr>
              </thead>
              <tbody>
                {this.accounts()}
              </tbody>
            </table>
          </div>
        </article>
      </App.Page>
    )
  }
});
