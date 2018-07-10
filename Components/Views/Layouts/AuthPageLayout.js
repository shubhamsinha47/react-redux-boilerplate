import React from 'react'

import HeaderLogin from './../Includes/HeaderLogin'
import Footer from './../Includes/Footer'

class AuthPageLayout extends React.Component {
	componentWillMount() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    render() {
        return (
            <div>
            	<HeaderLogin />
				{ this.props.children }
				<Footer />
			</div>
        )
    }
}

export default AuthPageLayout