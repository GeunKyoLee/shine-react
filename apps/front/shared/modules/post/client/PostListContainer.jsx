
Post.ListContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('postsList');

    return {
      loading: (! handle.ready()),
      posts: Post.collection.find({}, { sort: { createdAt: -1 }}).fetch(),
    }
  },

  render() {
    return (
      <Post.List {...this.data} />
    )
  }
});