
App.PostFormContainer = React.createClass({
  handleSubmit(title, content) {
    console.log(title, content);
  },

  render() {
    return (
      <App.PostForm onSubmit={this.handleSubmit}/>
    )
  }
});
