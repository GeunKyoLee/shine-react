
const { Link } = ReactRouter;

const PostItem = React.createClass({
  render() {
    return (
      <div className="post-item">
        <Link to={`/post/view/${this.props.post._id}`} >
          {this.props.post.title}
        </Link>
      </div>
    )
  }
});

App.Home = React.createClass({
  posts() {
    if (this.props.posts.length === 0) {
      return  (<div key={'_'}className="post-item">{L('text_no_posts')}</div>);
    }

    return this.props.posts.map((post) => (
      <PostItem key={post._id} post={post} />
    ));
  },

  handleNewPost() {
    Overlay.page(<App.PostFormContainer />, { className: 'slide-up' })
      .then((value) => {
        console.log('value = ' + value);
      });
  },

  render() {
    if (this.props.loading) return <App.Spinner />;

    return (
      <App.Page className="footer-on">
        <App.HomeHeader />

        <article className="page">
          <div className="post-list">
            {this.posts()}
          </div>
        </article>

        <App.Footer>
          <button className="btn btn-primary btn-block"
                  onClick={this.handleNewPost}>{L('label_new_post')}</button>
        </App.Footer>
      </App.Page>
    )
  }
});
