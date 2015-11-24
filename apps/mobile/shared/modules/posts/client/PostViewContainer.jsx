
App.PostViewContainer = React.createClass({
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
    if (this.data.loading) return <App.Spinner />;

    return (
      <App.PostView post={this.data.post} />
    )
  }
});
