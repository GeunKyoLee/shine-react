
App.PostFormContainer = React.createClass({
  handleSubmit(title, content) {
    console.log(title, content);

    const post = {
      title, content
    };

    const self = this;
    Meteor.call('postInsert', post, (error) => {
      if (error) {
        return self.props.reject(-1);
      }

      return self.props.fulfill(1);
    });
  },

  handleCancel() {
    this.props.reject(-1);
  },

  render() {
    return (
      <App.PostForm onSubmit={this.handleSubmit} onCancel={this.handleCancel} />
    )
  }
});
