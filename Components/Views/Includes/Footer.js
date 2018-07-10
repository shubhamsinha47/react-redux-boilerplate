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
                            <div className="logo-colmn">
                                <img src={`${env.baseImageUrl}footer-logo.png`} />
                                <p>By you using this site, you agree the information contained here is for informational purposes only. For specific medical questions, consult your doctor.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <ul>
                                <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                <li><a href="javascript:void(0)">Terms of Use</a></li>
                                <li><a href="javascript:void(0)">Contact</a></li>
                            </ul>
                        </div>
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