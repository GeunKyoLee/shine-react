if (typeof Dashboard === 'undefined') Dashboard = {};

Dashboard.View = React.createClass({
  render() {
    return (
      <App.Page>
        <article className="page">
          <header>
            <h3>{L('label_dashboard')}</h3>
          </header>

        </article>
      </App.Page>
    )
  }
});

