/**
 * Created by ProgrammingPearls on 15. 9. 26..
 */
Shine.HomeLoader = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    // Post subscribe
    let query = {};

    let options = {
      limit: Config.increment
    };

    let postHandle = Meteor.subscribe('releasedPostsList', query, options);

    return {
      postHandle,
      homeLoading: ! postHandle.ready(),
      postAllCount: Counts.get('releasedPostsListCount'),
      post: Posts.find().fetch(),
    }
  },

  componentWillUnmount() {
    //this.data.postHandle.stop();
  },

  render() {
    if (this.data.homeLoading) {
      return (
        <Shine.Spinner />
      )
    }

    return (
      <Shine.Home
        post={ this.data.post }
        postAllCount={ this.data.postAllCount }

        />
    )
  }
});