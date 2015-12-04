
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

Post.PagedList = React.createClass({
  scrollPos: new ReactiveVar(0),

  componentDidMount() {
    Meteor.setTimeout(() => {
      /*
      const route = RouteTransition.current();
      console.log('componentDidMount');
      console.log(route);
      if (route && route.scroll) {
        $(this.refs.list).parent().scrollTop(route.scroll);
      }
      */
      $(this.refs.list).parent().scrollTop(this.scrollPos.get());
    }, 300);
  },

  componentWillUnmount() {

    const scrollTop = $(this.refs.list).parent().scrollTop();
    this.scrollPos.set(scrollTop);
    console.log('scrollPos: ' + this.scrollPos.get());
/*
    const route = RouteTransition.prev();
    if (route) route.scroll = scrollTop;
    console.log('componentWillUnmount');
    console.log(route);
*/
  },

  posts() {
    if (this.props.posts.length === 0) {
      return (<div key={'_'} className="post-item">{L('text_no_posts')}</div>);
    }

    return this.props.posts.map((post) => (
      <PostListItem key={post._id} post={post} />
    ));
  },

  render() {
    return (
      <div className="post-list" ref="list">
        {this.posts()}
      </div>
    )
  }
});
