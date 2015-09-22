/**
 * Created by ProgrammingPearls on 15. 9. 21..
 */

Shine.DefaultHeader = React.createClass({
	mixins: [ReactMeteorData, Shine.Aside],

	getInitialState() {
		return {
			currentUser: this.props.currentUser
		}
	},

	getMeteorData() {

		if (Meteor.isClient) {
			const sub = [Meteor.subscribe('systemView')];

			const subsReady = _.all(sub, function (handle) {
				return handle.ready();
			});

			return {
				subsReady: subsReady,
				siteName: Systems.find({_id: 'siteName'}).fetch()
			}
		}

		if (Meteor.isServer){
			return {};
		}
	},

	toggleAside() {
		if (Meteor.isClient){
			this.toggle('left');
		}
	},

	render() {
		let IsNotification;
		if (this.state.currentUser) {
			IsNotification = Shine.createClazz(<button type="button" id="btnNotification" className="btn .btn-info-custom btn-header" data-toggle="notifications"><i className="fa fa-2x fa-bell"></i></button>);
		} else {
			IsNotification = Shine.createClazz(<div></div>);
		}

		const { Link } = ReactRouter;

		return (
			<header>
				<div className="logo back-bg">
					<Link to="/home">{ this.data.subsReady ? this.data.siteName[0].value : "아직" }</Link>
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
