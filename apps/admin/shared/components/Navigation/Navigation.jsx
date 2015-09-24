Shine.Navigation = React.createClass({
	displayName: "Navigation",

	t(key) { return I18n.get(key); },

  render() {
	  const { Link } = ReactRouter;
    return (
	    <div>
		    <ul>
			    <li><Link to="/"><T9n>title_home</T9n></Link></li>
			    <li><Link to="/about"><T9n>about</T9n></Link></li>
			    <li><Link to="/account">{I18n.get('title_account')}</Link></li>
		    </ul>
	    </div>
    )
  }
});