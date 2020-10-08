import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"


// Write ProtectedRoute function here
const ProtectedRoute = ({component: Component, ...rest}) => {
    console.log({...rest})
    return (
        <Route
        {...rest}
        render={(props) => {
            return checkAuth() ? (<Component {...props} />) : (<Redirect to='/login' />)

        }}
        />
    )
}

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    console.log(cookie);
    
    return cookies['loggedIn'] ? true : false
}





const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/car/:id" component={Car} />
        </Switch>
    );
};

export default Router;