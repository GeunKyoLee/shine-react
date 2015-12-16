
Category.List = React.createClass({
  render() {
    return (
      <App.Page>
        <header>
          <h3>{L('label_category')} <small>{L('label_list')}</small></h3>
          <div className="actions">
            <button className="btn btn-primary pull-right"
                    onClick={this.props.onNewCategory}>{L('label_new_category')}</button>
          </div>
        </header>

        <section className="list-bar">
          <div className="pull-left">
            <p>{L('text_category_total', [this.props.categoriesCount])}</p>
          </div>
          <div className="pull-right">

          </div>
        </section>

        <Category.PagedList {...this.props} onEdit={this.props.onEdit}
                                            onActive={this.props.onActive} />
      </App.Page>
    )
  }
});

