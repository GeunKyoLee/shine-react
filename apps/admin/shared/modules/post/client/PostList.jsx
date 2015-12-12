
const { Link } = ReactRouter;

Post.List = React.createClass({
  render() {
    const postsCount = this.props.postsCount;
    const loadMore = postsCount > this.props.posts.length ?
      <App.LoadMore loading={this.props.onLoading}
                    onClick={this.props.onLoadMore} /> : null;

    return (
      <App.Page>

        <header>
          <h3>{L('label_post')} <small>{L('label_list')}</small></h3>
        </header>

        <section className="list-bar">
          <div className="pull-left">
            <p>{L('text_post_total', [postsCount])}</p>
          </div>
        </section>

        <Post.PagedList {...this.props} />

        {loadMore}

      </App.Page>
    )
  }
});

