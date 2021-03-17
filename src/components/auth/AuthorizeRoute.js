import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './UserContext';

export function AuthorizeRoute(props) {
    const { isAuth } = useContext(UserContext);

    if (!isAuth()) {
        return <Redirect to={{ pathname: '/login' }} />
    }

    return (
        <Route {...props} >
            {props.children}
        </Route>
    );
}
