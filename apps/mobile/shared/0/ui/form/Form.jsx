
Form.Form = React.createClass({
  render() {
    return (
      <form id={this.props.id} className={this.props.className}>
        {this.props.children}
      </form>
    )
  }
});