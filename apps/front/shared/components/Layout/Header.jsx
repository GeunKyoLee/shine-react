/**
 * Created by ProgrammingPearls on 15. 9. 21..
 */

Shine.DefaultHeader = React.createClass({
	mixins: [Shine.Aside],

	toggleAside() {
		if (Meteor.isClient){
			this.toggle('left');
		}
	},

	render() {
		const { Link } = ReactRouter;
		let IsNotification;

		if (this.props.currentUser) {
			IsNotification = Shine.createClazz(<button type="button" id="btnNotification" className="btn .btn-info-custom btn-header" data-toggle="notifications"><i className="fa fa-2x fa-bell"></i></button>);
		} else {
			IsNotification = Shine.createClazz(<div></div>);
		}

		return (
			<header>
				<div className="logo back-bg">
					<Link to="/home">{ this.props.subsReady ? this.props.siteName[0].value : "아직" }</Link>
				</div>

				<div className="header-left">
					<button
						onClick={this.toggleAside}
						type="button"
						className=""
						data-toggle="navigations"><i className="fa fa-2x fa-bars"></i></button>
				</div>

				<div className="header-right">
					<IsNotification />
				</div>
			</header>
		)
	}
});
