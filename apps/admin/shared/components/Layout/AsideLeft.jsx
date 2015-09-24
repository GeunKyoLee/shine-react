


Shine.DefaultAsideLeft = React.createClass({
  displayName: "MainAside",

  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
  },

  render() {
    return (
      <div class="ui sidebar inverted vertical menu">
        <a class="item">
          1
        </a>
        <a class="item">
          2
        </a>
        <a class="item">
          3
        </a>
      </div>
    )
  }
});
/*
 Shine.DefaultAsideLeft = React.createClass({
 displayName: "MainAside",

 propTypes: {
 // This component gets the task to display through a React prop.
 // We can use propTypes to indicate it is required
 },

 render() {
 return (
 <aside className="left">
 <header>
 <button className="btn btn-link btn-xs aside-pin active"
 data-toggle="button" aria-pressed="false" autoComplete="off">
 <i className="fa fa-thumb-tack"></i>
 </button>
 </header>
 <div className="body">
 <div id="nav-main">
 </div>
 </div>
 </aside>
 )
 }
 });
 */