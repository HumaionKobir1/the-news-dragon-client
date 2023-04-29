import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <Spinner animation='border' variant='primary'/>

    }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};


export default PrivateRouter;

/**
 * --------------
 *      STEPS
----------------

1. Check user is logged in or not
2. If user is logged in, then allow them to visit the route
3. Else redirect the user to the login page
 * */ 