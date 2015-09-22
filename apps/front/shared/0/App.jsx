// App component - represents the whole app
Shine = {};

Shine.createClazz= function (html) {
  return React.createClass({
    render() {
      return (html);
    }
  })
};

Shine.App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getInitialState() {
    return {

    }
  },

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {

    return {
      currentUser: Meteor.user(),
    };
  },

  render() {
    return (
      <div id="container">
        <Shine.Header
          currentUser={this.data.currentUser}
          />
      </div>


    )
  }
});
