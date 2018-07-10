import React from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Web from './Web'
import store from './../Reducers'
import bootstrapApp from './../Config/bootstrap'

class RouterFrontEnd extends React.Component {
    constructor() {
        super()
        bootstrapApp()
    }

    render() {
        return (
            <Provider store={store}>
                <Web />
            </Provider>
        )
    }
}

export default RouterFrontEnd