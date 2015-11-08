
App.Layout = React.createClass({

  render() {
    const path = this.props.location.pathname;

    const notificationsContainer = Meteor.isClient ?
      <Overlay.NotificationsContainer /> : null;

    return (
      <div id="container">
        <RouteTransition name="slide" path={path} component="main" >
          <div key={path} className="page-wrapper">{this.props.children}</div>
        </RouteTransition>

        <App.AsideLeft />
        {notificationsContainer}
      </div>
    )
  }
});
