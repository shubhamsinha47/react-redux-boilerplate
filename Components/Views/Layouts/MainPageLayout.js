import React from 'react'

import Header from './../Includes/Header'
import Footer from './../Includes/Footer'

class MainPageLayout extends React.Component {
	componentWillMount() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    render() {
        return (
            <div>
            	<Header />
				{ this.props.children }
				<Footer />
			</div>
        )
    }
}

export default MainPageLayout