Shine.AsideAccount = React.createClass({
	propTypes: {
		showLogin: React.PropTypes.func
	},

  render() {
	  let IsCurrentUser;
	  if (this.props.currentUser) {
		  IsCurrentUser = Shine.createClazz(
			  <div id="user-status" className="well well-sm">
				  <a href="{{pathFor 'profileView'}}" className="avatar-sm">
					  getPicture currentUser
					  <span className="user-name">userDisplayName currentUser</span>
				  </a>
				  <button
					  onClick={this.props.logout}
					  className="btn btn-app btn-link pull-right"
					  data-action="signOut">
					  <i className="fa fa-sign-out" title="로그아웃"></i>
				  </button>
			  </div>
		  )
	  } else {
		  IsCurrentUser = Shine.createClazz(
			  <button
				  onClick={this.props.showLogin}
				  id="sign-in"
				  className="btn btn-app btn-block"
				  data-action="signIn">로그인</button>
		  )
	  }

    return (
	    <div className="account-info">
				<IsCurrentUser />
	    </div>
    )
  }
});
