
App.AboutContainer = React.createClass({
  getInitialState() {
    return {
      version: '0.1.1'
    }
  },

  render() {
    return <App.About version={this.state.version} />;
  }
});
