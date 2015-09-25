Shine.Spinner = React.createClass({

  render() {
    return (
      <div className="spinner-wrapper">
        <SpinnerView />
      </div>
    )
  }
});

Shine.LoadMoreSpinner = React.createClass({

  render() {
    return (
      <div className="list-spinner-wrapper">
        <SpinnerView />
      </div>
    )
  }
});