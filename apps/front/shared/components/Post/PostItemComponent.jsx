Shine.PostItemComponent = React.createClass({
  mixins: [ReactMeteorData],

  /**
   * 발생시점 : 최초 렌더링 직전에 called
   * 발생장소 : client or server
   */
  componentWillUnmount() {
    console.log('PostItem Component onDestroyed');
    console.log('this.data.postHandle: ', this.data.postHandle);
    this.data.postHandle.stop();
    
  },

  getMeteorData() {

    let postHandle = Meteor.subscribe('releasedPostView', this.props.params.postId);

    return {
      postHandle,
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