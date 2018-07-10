import React from 'react'

import LoginForm from './Parts/Login/LoginForm'
import RegisterForm from './Parts/Register/RegisterForm'

import AuthPageLayout from './../Layouts/AuthPageLayout'

class Auth extends React.Component {
    render() {
        return (	
        	<AuthPageLayout>			
		        <main>
			        <div className="container">
			            <div className="row">
			                <div className="create-account-section">
			                    <div className="row">
			                        <div className="colmn-form border-bottom-box create-section">
			                            <h3>Create a free account</h3>
			                            <p>Creating a GeneFood account allows you to get more out of your 23andMe data. Create an account to get started.</p>
			                            <RegisterForm />
			                        </div>
			                        <div className="colmn-form already-section">
			                            <h3>Already registered?</h3>
			                            <p>Login to your account.</p>
			                            <LoginForm />
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </main>
		    </AuthPageLayout>
        )
    }
}

export default Auth