const { CSSTransitionGroup } = React.addons;

const CSSTransitionGroupAppear = React.createClass({
  componentDidMount() {
    console.log('transition did mount');
    this.props.onMount(true);
  },

  componentWillUnmount() {
    console.log('transition will unmount');
    this.props.onMount(false);
  },

  render() {
    console.log('transition render: mounted=' + this.props.mounted);
    const children = (this.props.mounted) ? this.props.children : null;

    return (
      <CSSTransitionGroup {...this.props} component="div" >
        {children}
      </CSSTransitionGroup>
    )
  },
});

Overlay.Page = React.createClass({
  getInitialState() {
    return { mounted: false }
  },

  onMount(mounted) {
    return this.setState({ mounted });
  },

  handleClose() {
    this.setState({ mounted: false });

    this.props.reject();
  },

  render() {
    const props = {
      transitionName: this.props.className,
      transitionEnterTimeout: 300,
      transitionLeaveTimeout: 300,
    };

    return (
      <div className="overlay-backdrop" onClick={this.handleClose}>
        <CSSTransitionGroupAppear {...props} mounted={this.state.mounted}
                                             onMount={this.onMount} >
          <div className="overlay-wrapper">{this.props.children}</div>
        </CSSTransitionGroupAppear>
      </div>
    )
  }
});
