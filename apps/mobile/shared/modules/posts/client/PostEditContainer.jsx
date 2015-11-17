
App.PostEditContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const postId = this.props.params.id;
    const handle = Meteor.subscribe('postView', postId);

    return {
      loading: (! handle.ready()),
      post: Posts.findOne({ _id: postId }),
    }
  },

  render() {
    return (
      <App.PostForm {...this.data} onSubmit={this.handleSubmit}
                                   onCancel={this.handleCancel} />
    )
  }
});
