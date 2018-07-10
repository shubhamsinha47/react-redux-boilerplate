import React from 'react'

import { Link } from 'react-router-dom'
import env from "./../../Config/Env"

class HeaderLogin extends React.Component {
    render() {
        return (
        	<div className="account-header text-center">
		        <Link to = '/'>
	            	<img src={`${env.baseImageUrl}logo.png`} />
	            </Link>
		    </div>
        )
    }
}

export default HeaderLogin