
Form.Button = React.createClass({
  getDefaultProps() {
    return {
      type: 'submit',
      className: 'btn btn-default',
    }
  },

  render() {
    return (
      <button type={this.props.type} className={this.props.className}>
        {this.props.children}
      </button>
    )
  }
});
