
Form.InputText = React.createClass({
  getDefaultProps() {
    return { type: 'text' }
  },

  render() {
    const label = (this.props.label) ?
      (<label>{this.props.label}</label>) : null;

    return (
      <div className="form-group">
        {label}
        <input type={this.props.type}
               id={this.props.id}
               className="form-control"
               name={this.props.name}
               value={this.props.value}
               placeholder={this.props.placeholder} />
      </div>
    )
  }
});