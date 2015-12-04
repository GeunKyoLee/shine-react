
Post.List = React.createClass({

  render() {
    const loadMore = this.props.postsCount > this.props.posts.length ?
      <App.LoadMore loading={this.props.onLoading}
                    onClick={this.props.onLoadMore} /> : null;

    return (
      <App.Page className="footer-on">
        <App.Header title={L('label_posts_list')} />

        <article className="page" ref="page">
          <Post.PagedList {...this.props} />

          {loadMore}
        </article>

        <App.Footer>
          <button className="btn btn-primary btn-block"
                  onClick={this.handleNewPost}>{L('label_new_post')}</button>
        </App.Footer>
      </App.Page>
    )
  }
});
