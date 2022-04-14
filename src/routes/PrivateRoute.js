import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
    const { isAuth } = useSelector(state => state.user);
    return (
        <Route
            {...rest}
            render={(props) => (
                isAuth
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            )}
        />
    )
}

export default PrivateRoute;

