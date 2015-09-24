Shine.DefaultBody = React.createClass({
	displayName: "MainBody",
	render() {
		return (
			<main id="content">
				{this.props.children}
			</main>
		)
	}
});
