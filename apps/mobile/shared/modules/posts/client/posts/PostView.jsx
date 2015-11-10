
App.PostView = React.createClass({
  render() {
    const title = this.props.post && this.props.post.title;
    const content = this.props.post && this.props.post.content;

    return (
      <App.Page>
        <App.Header title={L('title_post_view')} />

        <article className="page">
          <h3>{title}</h3>

          <div>{content}</div>
        </article>
      </App.Page>
    )
  }
});
