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
                    <h1>Home Page</h1>
                </main>
            </MainPageLayout>
        )
    }
}

export default Home