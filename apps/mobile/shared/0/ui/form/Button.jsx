
Form.Button = React.createClass({
  render() {
    return (
      <button type="submit" className={this.props.className}>
        {this.props.children}
      </button>
    )
  }
});
