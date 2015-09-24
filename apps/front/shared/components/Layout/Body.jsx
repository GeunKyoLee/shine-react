Shine.DefaultBody = React.createClass({
	displayName: "MainBody",

	render() {
		const { postReady, postList, postAllCount } = this.props;
		let Home = React.cloneElement(this.props.children, { postReady, postList, postAllCount });

		return (
			<main id="content">
				{Home}
			</main>
		)
	}
});
