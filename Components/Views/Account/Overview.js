import React from 'react'

import env from "./../../Config/Env"
import MainPageLayout from './../Layouts/MainPageLayout'

import AccountNav from './../Includes/AccountNav'

class Overview extends React.Component {
	constructor() {
		super();
	}

    render() {
        return (
            <MainPageLayout> 
            	<main>
                    <div className="inner-contant">
                        <div className="container">
                            <AccountNav active = { "overview" } />
                            <div className="accounts-tab-content table-section">
                                <div className="colmn">
                                    <h2>Basics</h2>
                                    <button type="button" className="btn primary-btn">Report Summary</button>
                                </div>
                                <p>Additional description area. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis.</p>
                                <div className="alert-list">
                                    <ul>
                                        <li>“wild” type - most common</li>
                                        <li>heterozygous, one copy of risk allele</li>
                                        <li>homozygous, two copies of risk allele</li>
                                    </ul>
                                </div>
                                <h3>Top SNPs</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Pathway</th>
                                            <th>Gene</th> 
                                            <th>SNP ID</th>
                                            <th>Major Allele</th>
                                            <th>Minor Allele</th>
                                            <th>Result</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td rowSpan="3" className="border-danger"><a href="#">Folate</a></td>
                                            <td rowSpan="3" >MTHFR</td>
                                            <td>C667T</td>
                                            <td><span className="default">C</span></td>
                                            <td><span className="danger">T</span></td>
                                            <td><div className="result result-warning">+ / -</div></td>
                                            <td rowSpan="3">X</td>
                                        </tr>
                                        <tr>
                                            <td>C667T</td>
                                            <td><span className="success">C</span></td>
                                            <td><span className="danger">T</span></td>
                                            <td><div className="result result-success">+ / +</div></td>
                                        </tr>
                                        <tr>
                                            <td>C667T</td>
                                            <td><span className="success">A</span></td>
                                            <td><span className="danger">T</span></td>
                                            <td><div className="result result-warning">+ / -</div></td>
                                        </tr>
                                        <tr>
                                            <td className="border-success"><a href="#">B12</a></td>
                                            <td>MTRR</td>
                                            <td>A66G</td>
                                            <td><span className="default">C</span></td>
                                            <td><span className="default">T</span></td>
                                            <td><div className="result result-danger">+ / -</div></td>
                                            <td>X</td>
                                        </tr>
                                        <tr>
                                            <td className="border-warning"><a href="#">Histamine</a></td>
                                            <td>AOC1</td>
                                            <td>C47T</td>
                                            <td><span className="default">C</span></td>
                                            <td><span className="danger">T</span></td>
                                            <td><div className="result result-success">+ / -</div></td>
                                            <td rowSpan="3">X</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button type="button" className="btn load-btn">Other top SNPs listed here</button>
                            </div>
                        </div>
                    </div>
                </main>
            </MainPageLayout>
        )
    }
}

export default Overview