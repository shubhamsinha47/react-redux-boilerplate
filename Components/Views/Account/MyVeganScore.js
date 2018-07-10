import React from 'react'

import env from "./../../Config/Env"
import { Link } from 'react-router-dom'
import MainPageLayout from './../Layouts/MainPageLayout'

import AccountNav from './../Includes/AccountNav'

class MyVeganScore extends React.Component {
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
                                <div className="tab-content border-bottom-box">
                                    <h3>Vegan Score</h3>    
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 pr-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim exercitation <a href="#"> understanding your score</a> ullamco laboris nisi ut aliquip ex ad minim veniam, quis nostrudcommodo consequat. </p>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                                            <a href="javascript:void(0)" className="btn">Download Report</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vegan-section">
                                <div className="tab-section">
                                    <div className="tab-header">
                                        <div className="colmn">
                                            <h4>Overall Risk</h4>
                                            <div className="type-box very-high">
                                                <h5>Very High</h5>
                                            </div>
                                            <i className="ion-chevron-down"></i>
                                        </div>
                                        <div className="chart-section very-high">
                                            <div className="colmn">
                                                <div className="colmn-img text-center">
                                                    <img src={`${env.baseImageUrl}very-high.png`} />
                                                </div>
                                                <div className="colmn-text">
                                                    <h5>Very high risk of deficiency</h5>
                                                    <p>Your overall risk of deficiency is calculated from a weighted score based on our three major categories. Make sure to investigate further as a low risk here could mask a single important nutrient deficiency.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="colmn">
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}plus.png`} />
                                                    <h6>Best foods</h6>
                                                    <ul>
                                                        <li><span> Yams drizzled with olive oil</span></li>
                                                        <li><span>Beets</span> </li>
                                                        <li><span> Dark leafy greens</span></li>
                                                        <li><span>Paprika</span></li>
                                                        <li><span>Spirulina</span></li>
                                                        <li><span>Kimchee</span></li>
                                                        <li><span>Blueberries</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}check-mark.png`} />
                                                    <h6>Recommended nutrients</h6>
                                                    <ul>
                                                        <li><span>L-theanine</span></li>
                                                        <li><span>Vitamin B12</span> </li>
                                                        <li><span>Magnesium</span></li>
                                                        <li><span>S. Boulardii</span></li>
                                                        <li><span>Vitamin C</span></li>
                                                        <li><span>Vitamin A</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}close-mark.png`} />
                                                    <h6>Foods to Avoid</h6>
                                                    <ul>
                                                        <li><span>Cruciferous vegetables</span></li>
                                                        <li><span>Fava beans</span></li>
                                                        <li><span>NAC</span></li>
                                                        <li><span>Glutathione</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-section">
                                    <div className="tab-header">
                                        <div className="colmn">
                                            <h5>Blood Sugar</h5>
                                            <div className="type-box very-low">
                                                <h5>Very Low</h5>
                                            </div>
                                            <i className="ion-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="colmn">
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}plus.png`} />
                                                    <h6>Best foods</h6>
                                                    <ul>
                                                        <li><span> Yams drizzled with olive oil</span></li>
                                                        <li><span>Beets</span> </li>
                                                        <li><span> Dark leafy greens</span></li>
                                                        <li><span>Paprika</span></li>
                                                        <li><span>Spirulina</span></li>
                                                        <li><span>Kimchee</span></li>
                                                        <li><span>Blueberries</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}check-mark.png`} />
                                                    <h6>Recommended nutrients</h6>
                                                    <ul>
                                                        <li><span>L-theanine</span></li>
                                                        <li><span>Vitamin B12</span> </li>
                                                        <li><span>Magnesium</span></li>
                                                        <li><span>S. Boulardii</span></li>
                                                        <li><span>Vitamin C</span></li>
                                                        <li><span>Vitamin A</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}close-mark.png`} />
                                                    <h6>Foods to Avoid</h6>
                                                    <ul>
                                                        <li><span>Cruciferous vegetables</span></li>
                                                        <li><span>Fava beans</span></li>
                                                        <li><span>NAC</span></li>
                                                        <li><span>Glutathione</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-section">
                                    <div className="tab-header">
                                        <div className="colmn">
                                            <h5>Vitamins</h5>
                                            <div className="type-box low">
                                                <h5>Low</h5>
                                            </div>
                                            <i className="ion-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="chart-section low">
                                            <div className="colmn">
                                                <div className="colmn-img text-center">
                                                    <img src={`${env.baseImageUrl}low.png`} />
                                                </div>
                                                <div className="colmn-text">
                                                    <h5>Low risk of deficiency</h5>
                                                    <p>Your SNPs suggest that you are at low risk of developing vitamin deficiencies when following a nutritionally rich vegan diet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="colmn">
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}plus.png`} />
                                                    <h6>Best foods</h6>
                                                    <ul>
                                                        <li><span> Yams drizzled with olive oil</span></li>
                                                        <li><span>Beets</span> </li>
                                                        <li><span> Dark leafy greens</span></li>
                                                        <li><span>Paprika</span></li>
                                                        <li><span>Spirulina</span></li>
                                                        <li><span>Kimchee</span></li>
                                                        <li><span>Blueberries</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}check-mark.png`} />
                                                    <h6>Recommended nutrients</h6>
                                                    <ul>
                                                        <li><span>L-theanine</span></li>
                                                        <li><span>Vitamin B12</span> </li>
                                                        <li><span>Magnesium</span></li>
                                                        <li><span>S. Boulardii</span></li>
                                                        <li><span>Vitamin C</span></li>
                                                        <li><span>Vitamin A</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}close-mark.png`} />
                                                    <h6>Foods to Avoid</h6>
                                                    <ul>
                                                        <li><span>Cruciferous vegetables</span></li>
                                                        <li><span>Fava beans</span></li>
                                                        <li><span>NAC</span></li>
                                                        <li><span>Glutathione</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="table-section vegan-table">
                                            <h5>Detailed Vitamin Information</h5>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th className="blank"></th>
                                                        <th>Gene</th>
                                                        <th>SNP ID</th> 
                                                        <th>Major Allele</th>
                                                        <th>Minor Allele</th>
                                                        <th>Customer Genotype</th>
                                                        <th>Science Score</th>
                                                        <th>Result</th>
                                                        <th className="blank"></th>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="9">
                                                            <table className="group">
                                                                <tbody>
                                                                    <tr>
                                                                        <td><span className="type-box very-high"></span></td>
                                                                        <td><a href="#"> MTHFR </a></td>
                                                                        <td>C667T</td>
                                                                        <td><strong>C</strong></td>
                                                                        <td><strong className="red">T</strong></td>
                                                                        <td className="blank"></td>
                                                                        <td>
                                                                            <ul>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star-outline"></i></li>
                                                                            </ul>
                                                                        </td>
                                                                        <td>
                                                                            <div className="result warning">
                                                                                <p>+</p>
                                                                                <p>-</p>
                                                                            </div>
                                                                        </td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td>C667T</td>
                                                                        <td><strong>C</strong></td>
                                                                        <td><strong>T</strong></td>
                                                                        <td className="blank"></td>
                                                                        <td>
                                                                            <ul>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star-outline"></i></li>
                                                                            </ul>
                                                                        </td>
                                                                        <td>
                                                                            <div className="result success">
                                                                                <p>+</p>
                                                                                <p>-</p>
                                                                            </div>
                                                                        </td>
                                                                        <td><i className="ion-chevron-right"></i></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td>C667T</td>
                                                                        <td><strong>C</strong></td>
                                                                        <td><strong className="red">T</strong></td>
                                                                        <td className="blank"></td>
                                                                        <td>
                                                                            <ul>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star-outline"></i></li>
                                                                            </ul>
                                                                        </td>
                                                                        <td>
                                                                            <div className="result warning">
                                                                                <p>+</p>
                                                                                <p>-</p>
                                                                            </div>
                                                                        </td>
                                                                        <td></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="9">
                                                            <table className="group group-50">
                                                                <tbody>
                                                                    <tr>
                                                                        <td><span className="type-box low"></span></td>
                                                                        <td><a href="#"> MTHFR </a></td>
                                                                        <td>C667T</td>
                                                                        <td><strong>C</strong></td>
                                                                        <td><strong className="red">T</strong></td>
                                                                        <td className="blank"></td>
                                                                        <td>
                                                                            <ul>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star-outline"></i></li>
                                                                            </ul>
                                                                        </td>
                                                                        <td>
                                                                            <div className="result danger">
                                                                                <p>+</p>
                                                                                <p>-</p>
                                                                            </div>
                                                                        </td>
                                                                        <td><i className="ion-chevron-right"></i></td>
                                                                    </tr>  
                                                                </tbody>                                      
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="9">
                                                            <table className="group group-50">
                                                                <tbody>
                                                                    <tr>
                                                                        <td><span className="type-box warning"></span></td>
                                                                        <td><a href="#"> MTHFR </a></td>
                                                                        <td>C667T</td>
                                                                        <td><strong>C</strong></td>
                                                                        <td><strong className="red">T</strong></td>
                                                                        <td className="blank"></td>
                                                                        <td>
                                                                            <ul>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star-outline"></i></li>
                                                                            </ul>
                                                                        </td>
                                                                        <td>
                                                                            <div className="result danger">
                                                                                <p>+</p>
                                                                                <p>-</p>
                                                                            </div>
                                                                        </td>
                                                                        <td><i className="ion-chevron-right"></i></td>
                                                                    </tr> 
                                                                </tbody>                                       
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-section">
                                    <div className="tab-header">
                                        <div className="colmn">
                                            <h5>Minerals & Metals</h5>
                                            <div className="type-box very-low">
                                                <h5>Very Low</h5>
                                            </div>
                                            <i className="ion-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="colmn">
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}plus.png`} />
                                                    <h6>Best foods</h6>
                                                    <ul>
                                                        <li><span> Yams drizzled with olive oil</span></li>
                                                        <li><span>Beets</span> </li>
                                                        <li><span> Dark leafy greens</span></li>
                                                        <li><span>Paprika</span></li>
                                                        <li><span>Spirulina</span></li>
                                                        <li><span>Kimchee</span></li>
                                                        <li><span>Blueberries</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}check-mark.png`} />
                                                    <h6>Recommended nutrients</h6>
                                                    <ul>
                                                        <li><span>L-theanine</span></li>
                                                        <li><span>Vitamin B12</span></li>
                                                        <li><span>Magnesium</span></li>
                                                        <li><span>S. Boulardii</span></li>
                                                        <li><span>Vitamin C</span></li>
                                                        <li><span>Vitamin A</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}close-mark.png`} />
                                                    <h6>Foods to Avoid</h6>
                                                    <ul>
                                                        <li><span>Cruciferous vegetables</span></li>
                                                        <li><span>Fava beans</span></li>
                                                        <li><span>NAC</span></li>
                                                        <li><span>Glutathione</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-section">
                                    <div className="tab-header">
                                        <div className="colmn">
                                            <h5>Phospholipids</h5>
                                            <div className="type-box high">
                                                <h5>high</h5>
                                            </div>
                                            <i className="ion-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="colmn">
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}plus.png`} />
                                                    <h6>Best foods</h6>
                                                    <ul>
                                                        <li><span> Yams drizzled with olive oil</span></li>
                                                        <li><span>Beets</span> </li>
                                                        <li><span> Dark leafy greens</span></li>
                                                        <li><span>Paprika</span></li>
                                                        <li><span>Spirulina</span></li>
                                                        <li><span>Kimchee</span></li>
                                                        <li><span>Blueberries</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}check-mark.png`} />
                                                    <h6>Recommended nutrients</h6>
                                                    <ul>
                                                        <li><span>L-theanine</span></li>
                                                        <li><span>Vitamin B12</span> </li>
                                                        <li><span>Magnesium</span></li>
                                                        <li><span>S. Boulardii</span></li>
                                                        <li><span>Vitamin C</span></li>
                                                        <li><span>Vitamin A</span></li>
                                                    </ul>
                                                </span>
                                            </div>
                                            <div className="colmn-box text-center">
                                                <span>
                                                    <img src={`${env.baseImageUrl}close-mark.png`} />
                                                    <h6>Foods to Avoid</h6>
                                                    <ul>
                                                        <li><span>Cruciferous vegetables</span></li>
                                                        <li><span>Fava beans</span></li>
                                                        <li><span>NAC</span></li>
                                                        <li><span>Glutathione</span></li>
                                                    </ul>
                                                </span>
                                            </div>
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

export default MyVeganScore