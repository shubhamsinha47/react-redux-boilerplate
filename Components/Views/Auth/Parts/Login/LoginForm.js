import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import emit from './../../../../Actions'
import { Link } from 'react-router-dom'
import { Button, Display } from './../../../../Helpers/BaseComponents'
import { requestHandlerPost, logData, parshErrorObject } from './../../../../Helpers/Helper'

class LoginForm extends React.Component {

	constructor() {
		super()	
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
                    <label>Username or Email</label>
                    <input type="text" className="form-control" placeholder="Type your Username or Email" ref="username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Type your Password" ref="password" />
                </div>
                <div className="form-btn">
                	<Button className="btn secondery-btn" is_loading = { is_loading }>Login</Button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        errors: state.errors
    }
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators( { emit: emit }, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(LoginForm))