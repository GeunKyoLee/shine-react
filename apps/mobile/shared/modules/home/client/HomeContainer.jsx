
App.HomeContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('postsList');

    return {
      loading: (! handle.ready()),
      posts: Posts.find({}, { sort: { createdAt: -1 }}).fetch(),
    }
  },

  render() {
    return <App.Home {...this.data} />;
  }
});
