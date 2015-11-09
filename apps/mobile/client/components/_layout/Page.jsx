

App.Page = React.createClass({

  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    )
  }
});
