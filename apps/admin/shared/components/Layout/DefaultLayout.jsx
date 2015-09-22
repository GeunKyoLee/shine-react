
Shine.DefaultLayout = React.createClass({
	displayName: 'MainLayout',
  render() {
    return (
	    <div id="container">
		    <Shine.DefaultHeader />
		    <Shine.DefaultBody children={this.props.children}/>
		    <Shine.DefaultAsideLeft />
		    <Shine.DefaultFooter />
	    </div>
    )
  }
});


