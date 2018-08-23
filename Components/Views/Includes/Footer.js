import React from 'react'

import { Link } from 'react-router-dom'
import env from "./../../Config/Env"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <p>Copyright © 2018 SHUBHAM. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer