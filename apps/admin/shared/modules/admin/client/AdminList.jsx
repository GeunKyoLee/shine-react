
Admin.List = React.createClass({
  render() {
    const adminsCount = this.props.adminsCount;

    const loadMore = adminsCount > this.props.admins.length ?
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
              {L('label_new_admin')}
            </button>
          </div>
        </header>

        <section className="list-bar">
          <div className="pull-left">
            <p>{L('text_account_total', [adminsCount])}</p>
          </div>
          <div className="pull-right">

          </div>
        </section>

        <Admin.PagedList {...this.props} />

        {loadMore}
      </App.Page>
    )
  }
});

