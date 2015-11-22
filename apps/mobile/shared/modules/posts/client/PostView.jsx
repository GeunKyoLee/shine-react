
const contentView = function(content) {
  if (! content) return null;
  
  let value = "";
  switch (content.type) {
    case 'text':
      value = content.data;
      break;

    case 'html':
      value = content.data;
      break;

    case 'markdown':
      value = content.data;
      break;
  }

  return value;
};

App.PostView = React.createClass({
  render() {
    const title = this.props.post && this.props.post.title;
    const content = this.props.post && this.props.post.content;

    return (
      <App.Page>
        <App.Header title={L('label_post_view')} />

        <article className="page">
          <header>
            <h3>{title}</h3>
          </header>

          <div className="post-view">
            {contentView(content)}
          </div>
        </article>
      </App.Page>
    )
  }
});
