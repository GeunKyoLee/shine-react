Shine.DefaultHeader = React.createClass({
	displayName: "MainHeader",
//	mixins: [Shine.Aside],

	render() {
		const { Link } = ReactRouter;
		return (
			<header id="header">
				<div className="logo">
					<Link to="/home">{L('brand')}</Link>
				</div>
				<div className="header-left">
					<button
						type="button"
						className="btn btn-header"
						onClick={this.props.toggleAside}><i className="fa fa-2x fa-bars"></i></button>
				</div>
			</header>
		)
	}
});
