import React from 'react'

import { connect } from 'react-redux'

import env from './../../Config/Env'
import { withRouter } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { isEmpty } from './../../Helpers/Helper'
import StoreManager from './../../Config/StoreManager'

const storeManager = new StoreManager();

const ToggleLink = (props) => {
	if (!isEmpty(props.users)) {
		return (
			<span>
				<li><Link to = '/my-account'><i className="ion-ios-person-outline"></i>My Account</Link></li>	
				<li><a href="javascript:void(0)" onClick={props.logOutUser}><i className="ion-ios-person-outline"></i>Logout</a></li>
			</span>
		)
	}

	return <li><Link to = '/login'><i className="ion-ios-person-outline"></i>Login</Link></li>
}

class Header extends React.Component {

	constructor() {
		super()
		this.logOutUser = this.logOutUser.bind(this)
	}

	logOutUser() {
		storeManager.reset()
		location.href = location.origin
	}

    render() {
        return (
            <header>
			    <div className="container">
			        <nav className="navbar navbar-expand-lg navbar-light py-0">
			            <div className="logo-section">
			                <Link className="navbar-brand text-center" to="/"><img src={`${env.baseImageUrl}logo.png`} /></Link>
			                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			                    <span className="navbar-toggler-icon"></span>
			                </button>
			                <div className="top-navbar">
			                    <ul>
			                        <ToggleLink {...this.props} logOutUser = { this.logOutUser } />
			                    </ul>
			                </div>
			            </div>
			        </nav>
			    </div>
			</header>
        )
    }
}

const mapStateToProps = (state, ownProps = {}) => {
    return {
        users: state.users
    }
}

export default withRouter(connect(mapStateToProps)(Header))