
App.PostForm = React.createClass({
  getDefaultProps() {
    return {
      errors: []
    }
  },

  errorMessage(attribute) {
    if (this.props.errors && this.props.errors.length > 0) {
      const error = _.find(this.props.errors,
        (error) => (error.attribute === attribute));

      if (error) {
        return _.reduce(error.messages, (value, msg) => value + msg, "");
      }
    }

    return "";
  },

  handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;

    this.props.onSubmit(title, content);
  },

  handleCancel(e) {
    console.log('cancel button');
    e.preventDefault();

    this.props.onCancel();
  },

  render() {
    return (
      <Form.Form onSubmit={this.handleSubmit}>
        <Form.InputText id="title"
                        name="title"
                        label={L('label_title')}
                        error={this.errorMessage('title')} />

        <Form.TextArea id="content"
                       name="content"
                       label={L('label_content')}
                       error={this.errorMessage('content')}
                       rows="10" />

        <Form.Actions>
          <Form.Button type="submit" className="btn btn-primary">
            {L('command_register')}
          </Form.Button>
          <Form.Button className="btn btn-default"
                       onClick={this.handleCancel} >
            {L('command_cancel')}
          </Form.Button>
        </Form.Actions>
      </Form.Form>
    )
  }
});
