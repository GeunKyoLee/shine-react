
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

  getInitialState() {
    return {
      iconView: false
    }
  },

  handleView() {
    $('#container').toggleClass('aside-icon-view');
    this.setState({ iconView: ! this.state.iconView });
  },

  render() {
    const icon = this.state.iconView ? 'fa fa-arrow-right' : 'fa fa-arrow-left';

    return (
      <aside className="left">
        <App.AsideNavs />

        <div className="icon-view-handle" onClick={this.handleView}>
          <i className={icon}></i>
        </div>
      </aside>
    )
  }
});
