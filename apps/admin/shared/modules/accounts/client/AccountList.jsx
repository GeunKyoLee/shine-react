
Account.List = React.createClass({
  render() {
    const accountsCount = this.props.accountsCount;

    const loadMore = accountsCount > this.props.accounts.length ?
      <App.LoadMore loading={this.props.onLoading}
                    onClick={this.props.onLoadMore} /> : null;

    return (
      <App.Page>
        <header>
          <h3>
            {L('label_account')}
            <small>{L('label_list')}</small>
          </h3>

          <div className="actions">
            <button className="btn btn-primary pull-right"
                    onClick={this.handleNewAccount}>
              {L('label_new_account')}
            </button>
          </div>
        </header>

        <section className="list-bar">
          <div className="pull-left">
            <p>{L('text_account_total', [accountsCount])}</p>
          </div>
          <div className="pull-right">

          </div>
        </section>

        <Account.PagedList {...this.props} />

        {loadMore}
      </App.Page>
    )
  }
});

