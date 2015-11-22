
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
          <header>
            <h3>{L('label_about')}</h3>
          </header>

          <div className="page-body">
            <div className="list-item">
              <p className="key">{L('label_about_version')}</p>
              <p className="value">{this.props.version}</p>
            </div>
          </div>
        </article>
      </App.Page>
    )
  }
});
