import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, storage, ...rest }) => {
    return (
        <Route
            {...rest}
            render={ props => {
                if(localStorage.getItem('token')) {
                    return <Component {...rest} storage={storage}/>;
                }else{
                    return <Redirect to="/" />;
                }
            }}
        />
    )
}

export default PrivateRoute;
