
const { Link } = ReactRouter;

const PostListItem = React.createClass({
  render() {
    const post = this.props.post;
    if (! post) return null;
    const createdAt = moment(post.createdAt).format('YYYY-MM-DD HH:mm');

    return (
      <tr className="post-item">
        <td>{post._id}</td>
        <td>{post.category && post.category.title}</td>
        <td><Link to={`/post/edit/${post._id}`} >{post.title}</Link></td>
        <td>{post.author.name}</td>
        <td>{createdAt}</td>
      </tr>
    )
  }
});

Post.PagedList = React.createClass({
  scrollPos: new ReactiveVar(0),

  componentDidMount() {
    Meteor.setTimeout(() => {
      $(this.refs.list).parent().scrollTop(this.scrollPos.get());
    }, 300);
  },

  componentWillUnmount() {
    const scrollTop = $(this.refs.list).parent().scrollTop();
    this.scrollPos.set(scrollTop);
  },

  posts() {
    if (this.props.posts.length === 0) {
      return (
        <tr>
          <td key={'_'} className="post-item">{L('text_no_posts')}</td>
        </tr>
      );
    }

    return this.props.posts.map((post) => (
      <PostListItem key={post._id} post={post} />
    ));
  },

  render() {
    const columns = [
      { title: L('label_id'), field: '_id' },
      { title: L('label_category'), field: 'category.title' },
      { title: L('label_title'), field: 'title' },
      { title: L('label_author'), field: 'author.name' },
      { title: L('label_created_at'), field: 'createdAt' },
    ];

    return (
      <div className="table-list" ref="list">
        <table className="table table-bordered table-striped">
          <thead>
            <App.TableHeadSort columns={columns}
                               sort={this.props.pagination.sort}
                               onSort={this.props.onSort} />
          </thead>
          <tbody>
            {this.posts()}
          </tbody>
        </table>
      </div>
    )
  }
});
