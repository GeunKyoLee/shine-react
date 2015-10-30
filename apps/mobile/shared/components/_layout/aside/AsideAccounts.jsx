
const { Link } = ReactRouter;

App.AsideAccounts = React.createClass({
  render() {
    return (
      <div className="account-info">
        <Link to="/sign-in">{L('label_sign_in')}</Link>
      </div>
    )
  }
});
