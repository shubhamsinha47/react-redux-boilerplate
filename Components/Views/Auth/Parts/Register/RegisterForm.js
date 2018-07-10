import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import emit from './../../../../Actions'
import { Button, Display } from './../../../../Helpers/BaseComponents'
import { requestHandlerPost, logData, parshErrorObject } from './../../../../Helpers/Helper'

class RegisterForm extends React.Component {
	constructor() {
		super();
		this.state = {
			'is_loading' : false,
			'error': {}
		}
		this.submitForm = this.submitForm.bind(this)
	}

	submitForm() {
		try	{
			console.log('form submited')
		} catch (e) {
			console.log(e)
		}
	}

    render() {
    	let { is_loading, error } = this.state
        return (
        	<form action="javascript:void(0)" onSubmit={this.submitForm}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Type a Username" ref="username" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Type Your Email" ref="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Type a Password" ref="password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm your Password" ref="password_confirmation" />
                </div>
                <div className="form-btn">
                	<Button className="btn" is_loading = { is_loading }>Register</Button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps = {}) => {
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators( { emit: emit }, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(RegisterForm))