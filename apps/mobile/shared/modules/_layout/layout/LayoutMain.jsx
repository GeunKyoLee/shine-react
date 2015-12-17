
App.LayoutMain = React.createClass({

  render() {
    const path = this.props.location.pathname;

    return (
      <div id="layout-main" className="layout">
        <App.Header />

        <RouteTransition location={this.props.location}
                         component="main"
                         className="route-views">
          <div key={path} className="route-view">{this.props.children}</div>
        </RouteTransition>

        <App.AsideLeft />
      </div>
    )
  }
});
