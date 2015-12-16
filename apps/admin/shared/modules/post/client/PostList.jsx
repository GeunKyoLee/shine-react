
const { Link } = ReactRouter;

Post.List = React.createClass({
  render() {
    return (
      <App.Page>

        <header>
          <h3>{L('label_post')} <small>{L('label_list')}</small></h3>
        </header>

        <section className="list-bar">
          <div className="pull-left">
            <p>{L('text_post_total', [this.props.postsCount])}</p>
          </div>
        </section>

        <Post.PagedList {...this.props} />

      </App.Page>
    )
  }
});

