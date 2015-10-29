Shine.PostViewComponent = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let currentUser = Meteor.user();
    let postsHandle = Meteor.subscribe('releasedPostView', this.props.params.postId);

    return {
      currentUser,
      postsHandle,
      postsLoading: ! postsHandle.ready(),
      posts: Posts.findOne(),
      likes: PostLikes.findOne()
    }
  },

  canEdit() {
    if (this.data.currentUser) {
      try {
        //todo : Change beneath code returned.. into line 22 code
        // canEdit = this.postAccess('update', this.data.currentUser, this.props.params.postId);
        return this.data.currentUser._id === this.data.posts.author._id;
      } catch (ex) {
        console.log('ex: ', ex);
      }
    }
  },

  render() {
    if (this.data.postsLoading) {
      return (
        <Shine.Spinner />
      )
    }
    return (
      <Shine.PostView
        currentUser={this.data.currentUser}
        canEdit={this.canEdit}
        posts={this.data.posts}
        likes={this.data.likes}/>
    )
  }
});