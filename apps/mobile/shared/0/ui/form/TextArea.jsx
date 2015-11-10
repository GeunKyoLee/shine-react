
Form.TextArea = React.createClass({
  getDefaultProps() {
    return {}
  },

  render() {
    const label = (this.props.label) ?
      (<label>{this.props.label}</label>) : null;

    return (
      <div className="form-group">
        {label}
        <textarea id={this.props.id}
                  className="form-control"
                  name={this.props.name}
                  placeholder={this.props.placeholder}>
          {this.props.children}
        </textarea>
      </div>
    )
  }
});