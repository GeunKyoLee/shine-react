
Post.ViewContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const postId = this.props.params.id;
    const handle = Meteor.subscribe('postView', postId);

    return {
      loading: (! handle.ready()),
      post: Post.collection.findOne({ _id: postId }),
    }
  },

  render() {
    if (this.data.loading) return <App.Spinner />;

    return (
      <Post.View post={this.data.post} />
    )
  }
});
