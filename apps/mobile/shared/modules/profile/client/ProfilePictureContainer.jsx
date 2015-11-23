
App.ProfilePictureContainer = React.createClass({
  handleUpload(error, data) {
    if (error) {
      console.log('Cloudinary.uploadImage error: ');
      console.log(error);
    } else {
      const object = {
        url: data.result.url,
        surl: data.result.secure_url,
        size: data.result.bytes,
        width: data.result.width,
        height: data.result.height,
        ext: data.result.format,
        mime: data.originalFiles[0].type,
        original: data.originalFiles[0].name,
        repoId: data.result.public_id
      };
      console.log('upload success');

      Meteor.call('profilePictureInsert', object, (error, result) => {
        if (error) {
          console.log(error.reason);
        } else {
          console.log('picture upload success');
        }
      });
    }
  },

  render() {
    const options = {
      config: {
        cloud_name: this.props.cloudinary.cloudName,
        api_key: this.props.cloudinary.apiKey
      },
      options: {
        upload_preset: this.props.cloudinary.presets.accounts
      },
      ui: {
        buttonHTML: this.props.buttonHTML,
        showProgress: true
      }
    };

    return (
      <div className="picture">
        <Cloudinary.DirectUploader options={options}
                                   onUpload={this.handleUpload} />
        <Cloudinary.ProgressBar />
      </div>
    )
  }
})