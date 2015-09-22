Shine.DefaultBody = React.createClass({
	displayName: "Body",
	render() {
		return (
			<div className="body">
				{this.props.children}
			</div>
		)
	}
});
