
Account.List = React.createClass({
  render() {
    return (
      <App.Page>
        <header>
          <h3>
            {L('label_account')}
            <small>{L('label_list')}</small>
          </h3>
        </header>

        <section className="list-bar">
          <div className="pull-left">
            <p>{L('text_account_total', [this.props.accountsCount])}</p>
          </div>
          <div className="pull-right">

          </div>
        </section>

        <Account.PagedList {...this.props} />

      </App.Page>
    )
  }
});

