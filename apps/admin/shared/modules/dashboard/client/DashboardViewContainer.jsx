
Dashboard.ViewContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const limit = 10;
    const sort = { createdAt: -1 };
    const handle = Meteor.subscribe('postsList', { limit, sort });

    return {
      loading: (! handle.ready()),
      posts: Post.collection.find({}, { sort: { createdAt: -1 }}).fetch(),
    }
  },

  render() {
    return <Dashboard.View {...this.data} />;
  }
});
