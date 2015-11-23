
App.ProfileEditEmail = React.createClass({

  handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;

    this.props.onSubmit(email);
  },

  componentDidMount() {
    $('form input:first').focus();
  },

  render() {
    return (
      <div className="accounts-ui-frame">
        <Form.Form id="form-change-email" onSubmit={this.handleSubmit}>
          <Form.InputText id="email"
                          name="email"
                          placeholder={L('label_email')} />

          <Form.Button type="submit"
                       className="btn btn-primary btn-block">
            {L('command_save')}
          </Form.Button>
        </Form.Form>
      </div>
    )
  }
});
