Shine.DefaultHeader = React.createClass({
	displayName: "MainHeader",
//	mixins: [Shine.Aside],

	// 최초 렌더링이 일어나기 직전에 클라이언트 or 서버에서 한번 호출
	componentWillMount() {
		console.log('onCreated');
	},

	// 최초 렌더링이 일어난 다음 클라이언트에서만 한번 호출 (서버에서 호출 X)
	// 이 시점에서 React.findDOMNode(this)로 접근 가능
	componentDidMount() {
		console.log('onRendered');
	},

	// 컴포넌트가 DOM에서 마운트 해제 되기 직전에 호출
	componentWillUnmount() {
		console.log('onDestroyed');
	},

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
