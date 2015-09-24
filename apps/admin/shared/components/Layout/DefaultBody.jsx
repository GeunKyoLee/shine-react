Shine.DefaultBody = React.createClass({
	displayName: "MainBody",
	render() {
		return (
			<main id="content" class="pusher">
				{this.props.children}
			</main>
		)
	}
});
