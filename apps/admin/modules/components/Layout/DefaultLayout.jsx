
Shine.DefaultLayout = React.createClass({
  getInitialState() {
    const pin = Meteor.isClient && localStorage.getItem(this.asidePinKey);

    return {
      asideLocation: 'left',
      asideShow: false,
      asidePin: !! (pin && pin === 'true')
    }
  },

  displayName: 'MainLayout',

  asidePinKey: 'ASIDE-PIN',

  className() {
    var classFixed = this.state.asidePin &&
      'aside-' + this.state.asideLocation + '-fixed';
    var classShow = this.state.asideShow &&
      'aside-' + this.state.asideLocation + '-on';

    return classFixed + ' ' + classShow;
  },

  onAsidePinChange(pinned) {
    this.setState({ asidePin: pinned });
    if (Meteor.isClient) localStorage.setItem(this.asidePinKey, pinned);
  },

  onAsideToggle() {
    if (! this.state.asidePin) {
      this.setState({ asideShow: ! this.state.asideShow });
    }
  },

  render() {
    return (
	    <div id="container" className={this.className()}>
				<Shine.DefaultHeader onAsideToggle={this.onAsideToggle} />
		    <Shine.DefaultBody children={this.props.children} />
				<Shine.DefaultAside
					location={this.state.asideLocation}
					pin={this.state.asidePin}
          onAsidePinChange={this.onAsidePinChange} />
				<Shine.DefaultFooter />
			</div>
    )
  }
});
