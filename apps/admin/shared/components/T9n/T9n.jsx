T9n = React.createClass({
  t() {
    return I18n.get(this.props.children);
  },

  render() {
    return (
      <span>{this.t()}</span>
    );
  }
});
