import React from 'react'

import { isEmpty } from './Helper'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest, users }) => (
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

export const GuestRoute = ({ component: Component, ...rest, users }) => (
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