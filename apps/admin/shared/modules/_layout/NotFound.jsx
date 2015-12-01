
const { Link } = ReactRouter;

App.NotFound = React.createClass({
  render() {
    return (
      <div id="container">
        <App.Header title={L('label_page_not_found')} />

        <App.Page {...this.props}>
          <article className="page">
            <header>
              <h3>{L('label_page_not_found')}</h3>
            </header>

            <section>
              <Link to="/" className="btn btn-primary">
                {L('label_go_home')}
              </Link>
            </section>
          </article>
        </App.Page>
      </div>
    )
  }
});
