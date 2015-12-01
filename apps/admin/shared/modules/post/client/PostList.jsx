
const { Link } = ReactRouter;

const PostListItem = React.createClass({
  render() {
    const post = this.props.post;
    if (! post) return null;
    const createdAt = moment(post.createdAt).fromNow(); //.format('YYYY-MM-DD HH:mm');

    return (
      <div className="post-item">
        <Link to={`/post/view/${post._id}`} >
          <p className="title">{post.title}</p>
          <p className="info">
            <span className="author">{post.author.name}</span>
            <span className="datetime">{createdAt}</span>
          </p>
        </Link>
      </div>
    )
  }
});

Post.List = React.createClass({
  posts() {
    if (this.props.posts.length === 0) {
      return (<div key={'_'} className="post-item">{L('text_no_posts')}</div>);
    }

    return this.props.posts.map((post) => (
      <PostListItem key={post._id} post={post} />
    ));
  },

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
    if (this.props.loading) return <App.Spinner />;

    return (
      <App.Page>
        <article className="page">
          <header>
            <h3>{L('label_post')} <small>{L('label_list')}</small></h3>
            <div className="actions">
              <button className="btn btn-primary pull-right"
                      onClick={this.handleNewPost}>{L('label_new_post')}</button>
            </div>
          </header>

          <div className="post-list">
            {this.posts()}
          </div>
        </article>
      </App.Page>
    )
  }
});
