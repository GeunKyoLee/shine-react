
Overlay.Confirm = React.createClass({

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
              <p>{this.props.message}</p>
            </div>
            <div className="modal-footer">
              <Button className="btn btn-default" onClick={this.onReject}>{L('command_no')}</Button>
              <Button className="btn btn-primary" onClick={this.onConfirm}>{L('command_yes')}</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
