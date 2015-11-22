
Form.InputText = React.createClass({
  getDefaultProps() {
    return {
      type: 'text',
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
        <input type={this.props.type}
               id={this.props.id}
               className="form-control"
               name={this.props.name}
               value={this.props.value}
               placeholder={this.props.placeholder}
               ref={this.props.ref}
               onChange={this.props.onChange} />
        <p className="help-block">{this.props.error}</p>
      </div>
    )
  }
});