
App.PostViewContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const postId = this.params.id;
    const handle = Meteor.subscribe('postView', postId);

    return {
      loading: (! handle.ready()),
      post: Posts.findOne({ _id: postId }),
    }
  },

  render() {
    return (
      <App.PostView {...this.data} />
    )
  }
});
