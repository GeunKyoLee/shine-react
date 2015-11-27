
const ConnectionAlert = React.createClass({
  render() {
    return (
      <div className="emergency-alert">
        disconnected
      </div>
    )
  }
});

App.Layout = React.createClass({

  render() {
    const path = this.props.location.pathname;

    const notificationsContainer = Meteor.isClient ?
      <Overlay.NotificationsContainer /> : null;

    return (
      <div id="container">
        <App.AsideLeft />
        <RouteTransition location={this.props.location}
                         component="main"
                         className="route-views">
          <div key={path} className="route-view">{this.props.children}</div>
        </RouteTransition>

        {notificationsContainer}
        <ConnectionAlarm />
      </div>
    )
  }
});
