
Admin.View = React.createClass({
  render() {
    if (this.props.loading) return <App.Spinner />;

    const admin = this.props.admin;

    return (
      <App.Page>
        <article className="page">
          <p>{L('label_username')}</p>
          <p>{admin.username}</p>
        </article>
      </App.Page>
    )
  }
});