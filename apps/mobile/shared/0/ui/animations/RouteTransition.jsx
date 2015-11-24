
const { CSSTransitionGroup } = React.addons;
const { History } = ReactRouter;

const RouteStack = {
  _stack: [],

  init(path) {
    this._stack = (path) ? [path] : [];
  },

  push(path) {
    this._stack.push(path);
    console.log('routeStack push: ' + path);
  },

  pop(depth = 1) {
    if (depth > 1) {
      for (let i = 0; i < depth; i++) {
        const path = this._stack.pop();
        console.log('routeStack pop: ' + path);
      }
    } else {
      const path = this._stack.pop();
      console.log('routeStack pop: ' + path);
      return path;
    }
  },

  replace(path) {
    console.log('routeStack replace: ' + path);
    this._stack.pop();
    this._stack.push(path);
  },

  count() {
    return this._stack && this._stack.length;
  },

  top() {
    return this._stack && this._stack[this._stack.length - 1];
  }
};

RouteTransition = React.createClass({
  mixins: [History],

  statics: {
    stack: RouteStack,
    goBack: (history) => {
      RouteStack.pop();
      history.goBack();
      RouteStack.pop();
    },
    canGoBack: () => {
      return (RouteStack.count() > 1);
    }
  },

  getInitialState() {
    return {
      transitionName: 'slide',
      currentDepth: 1
    };
  },

  componentWillReceiveProps(props) {
    const { path, name } = props;
    RouteStack.push(path);
    const depth = RouteStack.count();
    const transitionName = (depth > this.state.currentDepth) ?
      `${name}-left` : `${name}-right`;
    this.setState({ transitionName, currentDepth: depth });
  },

  render() {
    const props = {
      transitionName: this.state.transitionName,
      transitionEnterTimeout: 300,
      transitionLeaveTimeout: 300,
      component: this.props.component,
      className: this.props.className
    };

    return (
      <CSSTransitionGroup {...props} >
        {this.props.children}
      </CSSTransitionGroup>
    )
  }
});
