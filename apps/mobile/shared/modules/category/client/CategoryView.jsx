
Category.View = React.createClass({

  handleNewPost(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Post.NewContainer />, { className: 'slide-up' })
      .then((value) => {
        console.log('value = ' + value);
      });
  },

  render() {
    const loadMore = this.props.postsCount > this.props.posts.length ?
      <App.LoadMore loading={this.props.onLoading}
                    onClick={this.props.onLoadMore} /> : null;

    return (
      <App.Page className="footer-on">
        <App.Header title={L('label_post')} />

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
