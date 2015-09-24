Shine.DefaultBody = React.createClass({
	displayName: "MainBody",

	render() {
		const { postReady, postList } = this.props;
		let Home = React.cloneElement(this.props.children, { postReady, postList });

		return (
			<main id="content">
				{Home}
			</main>
		)
	}
});
