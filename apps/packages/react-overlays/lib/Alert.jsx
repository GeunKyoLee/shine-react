
Overlay.Alert = React.createClass({

  componentDidMount() {
    $('.modal').modal('show');
  },

  onClick(e) {
    e.preventDefault();

    $('.modal').modal('hide');
    this.props.fulfill();
  },

  render() {
    return (
      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <p>{this.props.message}</p>
            </div>
            <div className="modal-footer">
              <Button className="btn btn-primary" onClick={this.onClick}>{L('command_ok')}</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
