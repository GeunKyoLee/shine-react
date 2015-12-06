
Form.TextArea = React.createClass({
  getDefaultProps() {
    return {
      error: "",
      onChange: () => {}
    }
  },

  render() {
    const label = (this.props.label) ?
      (<label>{this.props.label}</label>) : null;

    const className = (_.isEmpty(this.props.error)) ?
      "form-group" : "form-group has-error";

    return (
      <div className={className}>
        {label}
        <textarea id={this.props.id}
                  className="form-control"
                  rows={this.props.rows}
                  name={this.props.name}
                  value={this.props.value}
                  placeholder={this.props.placeholder}
                  onChange={this.handleChange} />
        <p className="help-block">{this.props.error}</p>
      </div>
    )
  }
});