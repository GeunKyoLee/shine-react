
Form.Switch = React.createClass({

  render() {
    const className = "radio-switch" + (this.props.on ? " on" : "");

    return (
      <div className={className} onClick={this.props.onClick}>
        <div className="handle"></div>
      </div>
    )
  }
});
