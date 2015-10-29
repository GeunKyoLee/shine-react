NavButton = React.createClass({

  onMenu() {
    App.AsideLeft.toggle();
  },

  render() {
    return (
      <button className="btn btn-default" onClick={this.onMenu}>
        <i className="fa fa-bars"></i>
      </button>
    )
  }
});

