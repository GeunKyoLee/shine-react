
Post.List = React.createClass({
  render() {
    const postsCount = this.props.postsCount;
    const loadMore = postsCount > this.props.posts.length ?
      <App.LoadMore loading={this.props.onLoading}
                    onClick={this.props.onLoadMore} /> : null;

    return (
      <App.Page>
        <article className="page">
          <header>
            <h3>{L('label_post')} <small>{L('label_list')}</small></h3>
            <div className="actions">
              <button className="btn btn-primary pull-right"
                      onClick={this.props.onNewPost}>{L('label_new_post')}</button>
            </div>
          </header>

          <section className="list-bar">
            <div className="pull-left">
              <p>{L('text_post_total', [postsCount])}</p>
            </div>
            <div className="pull-right">

            </div>
          </section>

          <Post.PagedList {...this.props} />

          {loadMore}
        </article>
      </App.Page>
    )
  }
});

