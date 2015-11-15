const { CSSTransitionGroup } = React.addons;

const CSSTransitionGroupAppear = React.createClass({
  componentDidMount() {
    this.props.onMount(true);
  },

  componentWillUnmount() {
    this.props.onMount(false);
  },

  render() {
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

  handleClose(e) {
    if (this.refs.wrapper !== e.target) return;

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
      <div className="overlay-backdrop">
        <CSSTransitionGroupAppear {...props} mounted={this.state.mounted}
                                             onMount={this.onMount} >
          <div className="overlay-wrapper"
               ref="wrapper"
               onClick={this.handleClose}>{this.props.children}</div>
        </CSSTransitionGroupAppear>
      </div>
    )
  }
});
