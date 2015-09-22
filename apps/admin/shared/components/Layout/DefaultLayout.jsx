
Shine.DefaultLayout = React.createClass({
	displayName: 'Layout',
  render() {
    return (
	    <div className="container">
		    <Shine.DefaultHeader />
		    <Shine.DefaultBody children={this.props.children}/>
		    <Shine.DefaultFooter />
	    </div>
    )
  }
});


