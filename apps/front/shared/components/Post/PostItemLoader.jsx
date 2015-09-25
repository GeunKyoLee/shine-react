Shine.PostItemLoader = React.createClass({
  mixins: [ReactMeteorData],

  /**
   * 발생시점 : 최초 렌더링 직후 called
   * 발생장소 : only client
   * React.findDOMNode(this)로 접근 가능
   */
  componentWillUnmount() {
    console.log('PostItemLoader Component onDestroyed');
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