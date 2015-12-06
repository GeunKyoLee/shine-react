
App.AsideLeft = React.createClass({
  statics: {
    toggle() {
      $('#container').toggleClass('aside-left-on');
      //const container = document.getElementById('container');
      //container.className = (container.className) ? '' : 'aside-left-on';
    },

    hide() {
      $('#container').removeClass('aside-left-on');
      //document.getElementById('container').className = '';
    }
  },

  render() {
    return (
      <aside className="left">
        <App.AsideNavs />
      </aside>
    )
  }
});
