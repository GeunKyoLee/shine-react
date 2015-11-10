
const { Link } = ReactRouter;

App.Posts = React.createClass({
  posts() {
    if (this.props.posts.length === 0) return  (<div>no list</div>);

    return this.props.posts.map((post) => (
      <Link to={`/post/view/${post._id}`} className="post-item">
        {post.title}
      </Link>
    ));
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
          <Link to="/post/new">new post</Link>
        </App.Footer>
      </App.Page>
    )
  }
});
