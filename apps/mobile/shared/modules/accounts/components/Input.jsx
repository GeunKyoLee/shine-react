
Accounts.Input = React.createClass({
  getDefaultProps() {
    return {
      type: 'text'
    }
  },

  render() {
    const label = this.props.label ? <label>{this.props.label}</label> : null;

    return (
      <div className="form-group">
        <input type={this.props.type}
               id={this.props.id}
               className="form-control"
               name={this.props.name}
               placeholder={this.props.label} />
      </div>
    )
  }
});
