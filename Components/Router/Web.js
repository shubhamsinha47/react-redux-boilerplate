import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PrivateRoute, GuestRoute } from './../Helpers/RouteHelper'

import Env from './../Config/Env'

import Home from './../Views/Home'
import Auth from './../Views/Auth/Auth'

class Web extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <GuestRoute users = { this.props.users } path="/login" component={Auth}/>
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Web)