
const { Link } = ReactRouter;

App.Posts = React.createClass({
  posts() {
    if (this.props.posts.length === 0) return  (<div>no list</div>);

    return this.props.posts.map((post) => (
      <Link key={post._id} to={`/post/view/${post._id}`} className="post-item">
        {post.title}
      </Link>
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
      <App.Page>
        <App.Header title={L('title_post_list')} />

        <article className="page">
          {this.posts()}
        </article>

        <App.Footer>
          <button className="btn btn-primary" onClick={this.handleNewPost}>new post</button>
        </App.Footer>
      </App.Page>
    )
  }
});
