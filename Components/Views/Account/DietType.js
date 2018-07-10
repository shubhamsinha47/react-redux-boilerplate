import React from 'react'

import env from "./../../Config/Env"
import { Link } from 'react-router-dom'
import MainPageLayout from './../Layouts/MainPageLayout'

import AccountNav from './../Includes/AccountNav'

class DietType extends React.Component {
	constructor() {
		super();
	}

    render() {
        return (
            <MainPageLayout> 
                <main className="bg-battan">
                    <div className="container">
                        <div className="row">
                            <div className="page-tab-section">
                                <AccountNav />
                                <div className="tab-content gene-content">   
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-0">
                                            <h3>My Diet Type</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </MainPageLayout>
        )
    }
}

export default DietType