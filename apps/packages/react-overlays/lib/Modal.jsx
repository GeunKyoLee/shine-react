
Overlay.Modal = React.createClass({

  componentDidMount() {
    $('.modal').modal('show');
  },

  onReject(e) {
    e.preventDefault();

    $('.modal').modal('hide');
    this.props.reject();
  },

  onConfirm(e) {
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
              {this.props.children}
            </div>
            <div className="modal-footer">
              <Button className="btn btn-default" onClick={this.onReject}>{L('command_cancel')}</Button>
              <Button className="btn btn-primary" onClick={this.onConfirm}>{L('command_ok')}</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
