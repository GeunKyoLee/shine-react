AsidePin = React.createClass({
  getInitialState() {
    return { pinned: this.props.pin }
  },

  active() {
    return (this.state.pinned) ? 'active' : '';
  },

  toggle() {
    const pinned = ! this.state.pinned
    this.setState({ pinned: pinned });
    this.props.onChange(pinned);
  },

  render() {
    var className = 'btn btn-link btn-xs aside-pin ' + this.active();
    return (
      <button className={className} onClick={this.toggle}>
        <i className="fa fa-thumb-tack"></i>
      </button>
    )
  }
});
