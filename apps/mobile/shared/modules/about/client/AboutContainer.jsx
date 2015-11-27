
App.AboutContainer = React.createClass({
  getInitialState() {
    return {
      version: APP_VERSION
    }
  },

  render() {
    return <App.About version={this.state.version} />;
  }
});
