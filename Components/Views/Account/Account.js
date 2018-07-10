import React from 'react'

import env from "./../../Config/Env"
import { Link } from 'react-router-dom'
import MainPageLayout from './../Layouts/MainPageLayout'
import AccountNav from './../Includes/AccountNav'
import AccountSideNav from './../Includes/AccountSideNav'

class Account extends React.Component {
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
                                <div className="tab-content border-bottom-box account-tab">  
                                    <h3>Account</h3>  
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-0">
                                            <ul>
                                                <li className="active"><a href="javascript:void(0)">General</a></li>
                                                <li><a href="javascript:void(0)">Billing</a></li>
                                                <li><a href="javascript:void(0)">Orders</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                            <form>
                                                <div className="form-group half">
                                                    <label>First Name</label>
                                                    <input type="text" className="form-control" placeholder="John" />
                                                </div>
                                                <div className="form-group half">
                                                    <label>Last Name</label>
                                                    <input type="text" className="form-control" placeholder="O'Connor" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Username</label>
                                                    <input type="text" className="form-control" placeholder="joconnor" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="text" className="form-control" placeholder="john@mygenefood.com" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="text" className="form-control" placeholder="***************" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Confirm Password</label>
                                                    <input type="text" className="form-control" placeholder="" />
                                                </div>
                                                <button type="button" className="btn">Save</button>
                                            </form>
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

export default Account