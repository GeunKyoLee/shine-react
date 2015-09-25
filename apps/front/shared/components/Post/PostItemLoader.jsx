Shine.PostItemLoader = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    let postHandle = Meteor.subscribe('releasedPostView', this.props.params.postId);

    return {
      postLoading: ! postHandle.ready(),
      post: Posts.findOne(this.props.params.postId),
      likes: PostLikes.findOne(),
    }
  },

  render() {

    if (this.data.postLoading) {
      // loading component
      return (
        <Shine.Spinner />
      )
    }

    return (
      <Shine.PostItem post={ this.data.post }/>
    )
  }
});