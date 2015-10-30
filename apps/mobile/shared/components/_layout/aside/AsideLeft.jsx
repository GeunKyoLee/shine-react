
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
        <App.AsideAccounts />

        <App.AsideNavs />
      </aside>
    )
  }
});
