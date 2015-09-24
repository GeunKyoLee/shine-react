Shine.PostItem = React.createClass({
	mixins: [Mixins.accounts, Mixins.utils],

	render() {
		const { Link } = ReactRouter;

		return (
			<li className="post-item">
				<h3 className="title">
					<Link to="postView">{ this.props.title }</Link>
				</h3>
				<p>
					{this.props.content.data}
				</p>
				<div className="info">
		      <span className="author">
		        <i>by </i><Link to="accountView">{ this.userDisplayName(this.props.author) }</Link>
		      </span>
		      <span className="counts">
		        <span className="count"><i className="fa fa-heart-o"></i>{ this.props.count.likes }</span>
		        <span className="count"><i className="fa fa-comment-o"></i>{ this.props.count.comments }</span>
		      </span>
					<span className="date">{ this.momentFromNow(this.props.createdAt) }</span>
				</div>
			</li>
		)
	}
});
