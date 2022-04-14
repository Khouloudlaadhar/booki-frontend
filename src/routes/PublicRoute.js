import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PublicRoute({ component: Component, ...rest }) {
    
    const { isAuth } = useSelector(state => state.user);
    return (
        <Route
            {...rest}
            component={(props) => (
                isAuth
                    ? <Redirect to='/hebergements' />
                    : <Component {...props} />
            )}
        />
    )
            }
export default PublicRoute