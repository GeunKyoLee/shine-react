Shine.PostList = React.createClass({
	mixins: [Mixins.accounts, Mixins.utils],

	render() {

		const { Link } = ReactRouter;

    let { categoryId, title, author, createdAt } = this.props;
    let { likes, comments } = this.props.count;

    let postId = this.props._id;
    let content = this.props.content.data;

		return (
			<li className="post-item">
				<h3 className="title">
					<Link to={`/category/${ categoryId }/${ postId }`}>{ title }</Link>
				</h3>
				<p>
					{content}
				</p>
				<div className="info">
		      <span className="author">
		        <i>by </i><Link to="accountView">{ this.userDisplayName(author) }</Link>
		      </span>
		      <span className="counts">
		        <span className="count"><i className="fa fa-heart-o"></i>{ likes }</span>
		        <span className="count"><i className="fa fa-comment-o"></i>{ comments }</span>
		      </span>
					<span className="date">{ this.momentFromNow( createdAt ) }</span>
				</div>
			</li>
		)
	}
});
