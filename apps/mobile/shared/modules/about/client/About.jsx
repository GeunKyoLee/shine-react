
const { Link } = ReactRouter;

App.About = React.createClass({
  getDefaultProps() {
    return {
      version: ''
    }
  },

  render() {
    return (
      <App.Page>
        <App.Header title={L('label_about')} />

        <article className="page">
          <div className="page-body">
            <div className="list bordered">
              <div className="list-item">
                <div className="key">{L('label_about_version')}</div>
                <div className="value">{this.props.version}</div>
              </div>
            </div>
          </div>
        </article>
      </App.Page>
    )
  }
});
