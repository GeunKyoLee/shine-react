
App.AsideLeft = React.createClass({
  statics: {
    toggle() {
      $('#container').toggleClass('aside-left-on');
    },

    hide() {
      $('#container').removeClass('aside-left-on');
    }
  },

  render() {
    return (
      <aside className="left">
        <h1>Aside</h1>

        <App.AsideNavs />
      </aside>
    )
  }
});
