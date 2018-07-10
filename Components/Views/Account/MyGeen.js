import React from 'react'
import { Link } from 'react-router-dom'

import env from "./../../Config/Env"
import MainPageLayout from './../Layouts/MainPageLayout'

import AccountNav from './../Includes/AccountNav'

class MyGeen extends React.Component {
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
                                            <h3>My Genes</h3> 
                                            <p>Click the <a href="javascript:void(0)"> <img src="images/plus-green.png" /> Αdd to my Genes</a> button on any gene<br /> within the Genetics and Nutrition Guide to add it to your profile.</p>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-right">
                                            <a href="javascript:void(0)" className="btn btn-gray">Report Summary</a>
                                            <Link to="/custom-nutrition-plan" className="btn">Visit Guide</Link>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 full-row">
                                            <p>You can also import genes automatically:</p>
                                            <button type="button" className="btn btn-red semi-btn"><img src="images/plus-white.png" />  Import all red genes</button>
                                            <button type="button" className="btn btn-yellow semi-btn"><img src="images/plus-white.png" />  Import all yellow genes</button>
                                            <button type="button" className="btn btn-green semi-btn"><img src="images/plus-white.png" />  Import all red genes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gene-section">
                                <a href="#" className="clear-btn">Clear all genes <img src="images/close-btn.png" /></a>
                                <div className="nutrient-box">
                                    <h5>Your Top Nutrients</h5>
                                    <ul className="list-colmn">
                                        <li>Vitamin C</li>
                                        <li>Vitamin D</li>
                                        <li>Vitamin B12</li>
                                        <li>S. Boulardii</li>
                                        <li>Magnesium</li>
                                    </ul>
                                </div>
                                <div className="genebox-section">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center gene-box">
                                            <a href="#"><img src="images/close.png" /></a>
                                            <h5>Folate</h5>
                                            <p><strong>MTHFR</strong></p>
                                            <p>MTHFR is an involved in the conversion of dietary folate into a variety of key products.</p>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center gene-box border-red">
                                            <a href="#"><img src="images/close.png" /></a>
                                            <h5>Histamine</h5>
                                            <p><strong>COMT</strong></p>
                                            <p>COMT is an enzyme which inactivates important neurotransmitters such as dopamine and epinephrine.</p>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center gene-box border-yellow">
                                            <a href="#"><img src="images/close.png" /></a>
                                            <h5>Sulphur</h5>
                                            <p><strong>CBS</strong></p>
                                            <p>CBS is an enzyme which converts homocysteine into cystathionine, the first step of the transsulfuration pathway.</p>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center gene-box">
                                            <a href="#"><img src="images/close.png" /></a>
                                            <h5>Histamine</h5>
                                            <p><strong>AOC1</strong></p>
                                            <p>AOC1 is an enzyme that breaks down histamine and other related compounds.</p>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center gene-box border-yellow">
                                            <a href="#"><img src="images/close.png" /></a>
                                            <h5>Choline</h5>
                                            <p><strong>PEMT</strong></p>
                                            <p>PEMT is an enzyme which generates phosphatidylcholine, a key component of cell membranes.</p>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center gene-box">
                                            <a href="#"><img src="images/close.png" /></a>
                                            <h5>B12</h5>
                                            <p><strong>MTRR</strong></p>
                                            <p>MTRR is an enzyme which helps maintain methionine synthase function, a key component of the methionine cycle.</p>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center gene-box blank-box">
                                            <a href="#"><img src="images/plus-box.png" /></a>
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

export default MyGeen