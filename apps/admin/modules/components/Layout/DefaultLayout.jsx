
Shine.DefaultLayout = React.createClass({
  getInitialState() {
    const pin = localStorage.getItem(this.asidePinKey);

    return {
      asideLocation: 'left',
      asidePin: !! (pin && pin === 'true')
    }
  },

  displayName: 'MainLayout',

  asideLocationClassName() {
    return 'aside-' + this.state.asideLocation + '-on';
  },

  asidePinKey: 'ASIDE-PIN',

	onAsidePinChange(pinned) {
    localStorage.setItem(this.asidePinKey, pinned);
    this.setState({ asidePin: pinned });
    if (pinned) {
      $('#container').addClass('aside-left-fixed');
      $('#container').removeClass(this.asideLocationClassName());
    } else {
      $('#container').addClass(this.asideLocationClassName());
      $('#container').removeClass('aside-left-fixed');
    }
  },

  toggleAside() {
    if (! this.state.asidePin) {
      $('#container').toggleClass(this.asideLocationClassName());
    }
  },

  className() {
    if (this.state.asidePin) {
      return 'aside-left-fixed';
    } else {
      return '';
    }
  },

  render() {
    return (
	    <div id="container" className={this.className()}>
				<Shine.DefaultHeader toggleAside={this.toggleAside} />
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
