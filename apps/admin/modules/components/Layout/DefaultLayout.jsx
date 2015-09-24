
Shine.DefaultLayout = React.createClass({
	displayName: 'MainLayout',

	aside: 'left',

	toggleAside() {

	},

  render() {
    return (
	    <div id="container">
				<Shine.DefaultHeader onButtonClick={this.toggleAside} />
		    <Shine.DefaultBody children={this.props.children} />
				<Shine.DefaultAside location={this.aside} />
				<Shine.DefaultFooter />
			</div>
    )
  }
});
