
App.AsideLeft = React.createClass({
  statics: {
    toggle() {
      $('#layout-main').toggleClass('aside-left-on');
      /*
      const container = document.getElementById('layout-main');
      container.className = (container.className) ? '' : 'aside-left-on';
      */
    },

    hide() {
      $('#layout-main').removeClass('aside-left-on');
      //document.getElementById('layout-main').className = '';
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
