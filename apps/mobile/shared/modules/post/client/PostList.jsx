
Post.List = React.createClass({

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

  renderFooter() {
    return (
      <App.Footer>
        <button className="btn btn-primary btn-block"
                onClick={this.handleNewPost}>{L('label_new_post')}</button>
      </App.Footer>
    )
  },

  render() {
    const loadMore = this.props.postsCount > this.props.posts.length ?
      <App.LoadMore loading={this.props.onLoading}
                    onClick={this.props.onLoadMore} /> : null;

    return (
      <App.Page title={L('label_post')}
                footer={this.renderFooter()} >

          <Post.PagedList {...this.props} />
          {loadMore}

      </App.Page>
    )
  }
});
