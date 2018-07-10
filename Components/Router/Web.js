import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Env from './../Config/Env'
import { isEmpty } from './../Helpers/Helper'

import Home from './../Views/Home'
import Auth from './../Views/Auth/Auth'
import Account from './../Views/Account/Account'

const PrivateRoute = ({ component: Component, ...rest, users }) => (
    <Route
        {...rest}
        render={ props =>
            isEmpty(users) ? (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            ) : (
                <Component {...props} />
            )
        }
    />
)

const GuestRoute = ({ component: Component, ...rest, users }) => (
    <Route
        {...rest}
        render={ props =>
            isEmpty(users) ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        }
    />
)

class Web extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <GuestRoute users = { this.props.users } path="/login" component={Auth}/>
                    <PrivateRoute users = { this.props.users } path="/my-account" component={Account} />
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