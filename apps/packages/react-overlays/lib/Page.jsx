const { CSSTransitionGroup } = React.addons;

const TransitionPortal = React.createClass({
  componentDidMount() {
    console.log('overlay-container mounted');
    this.node = document.getElementById('overlay-container');
    if (! this.node) {
      this.node = document.createElement('div');
      //this.node.className = 'overlay-container';
      this.node.id = 'overlay-container';
      document.body.appendChild(this.node);
      console.log('overlay-container created');
    }

    this.componentDidUpdate();
  },

  componentWillUnmount() {
    console.log('overlay-container unmounted');
    //document.body.removeChild(this.node);
  },

  componentDidUpdate() {
    React.render((
      <CSSTransitionGroup {...this.props} component="div">
        {this.props.children}
      </CSSTransitionGroup>
    ), this.node);
  },

  render() {
    return React.DOM.noscript();
  }
});

Overlay.Page = React.createClass({

  propTypes: {
    isOpen: React.PropTypes.bool.isRequired,
    backdropClosesModal: React.PropTypes.bool,
    className: React.PropTypes.string,

    onCancel: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      isOpen: false,
      title: '',
      closeable: true
    };
  },

  handleClick(event) {
    event.stopPropagation();

    if (event.target.dataset.overlay) this.props.onCancel();
  },

  handleKeyDown (event) {
    if (event.keyCode === 27) {
      this.props.onCancel();
    }
  },

  _noPropagate(event) {
    event.stopPropagation();
  },

  _listenForEsc(event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      this._closeModal(event);
    }
  },

  // destroy the modal from inside
  _closeModal(event) {
    event.stopPropagation(); // avoid other events, ESC doesn't provide event
    //React.unmountComponentAtNode(document.getElementById('overlay'));
  },

  renderOverlay() {
    return (
      <div className="overlay">{this.props.children}</div>
    )
  },

  render() {
    const props = {
      transitionName: this.props.className,
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300,
    };

    const overlay = (this.props.isOpen) ? this.renderOverlay() : null;

    return (
      <TransitionPortal {...props} onClick={this.handleClick} >
        {overlay}
      </TransitionPortal>
    )
  }
});

