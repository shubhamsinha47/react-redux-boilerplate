import React from 'react'

import { Link } from 'react-router-dom'

import env from "./../Config/Env"
import MainPageLayout from './Layouts/MainPageLayout'

class Home extends React.Component {
	constructor() {
		super();
	}

    render() {
        return (
            <MainPageLayout> 
            	<main>
                    <p>Home Page</p>
                </main>
            </MainPageLayout>
        )
    }
}

export default Home