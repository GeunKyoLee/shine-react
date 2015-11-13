
App.PostForm = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;

    this.props.onSubmit(title, content);
  },

  render() {
    return (
      <article className="overlay-page">
        <Form.Form onSubmit={this.handleSubmit}>
          <Form.InputText id="title"
                          name="title"
                          label={L('label_title')} />

          <Form.TextArea id="content"
                         name="content"
                         label={L('label_content')} />

          <Form.Button className="btn btn-primary">
            {L('command_submit')}
          </Form.Button>
          <Form.Button type="reset" className="btn btn-default">
            {L('command_cancel')}
          </Form.Button>
        </Form.Form>
      </article>
    )
  }
});
