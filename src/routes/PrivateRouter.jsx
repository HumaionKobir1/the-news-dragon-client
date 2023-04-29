import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRouter = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRouter;

/*
*-------------
        STEPS
----------------

1. Check user is logged in or not
2. If user is logged in, then allow them to visit the route
3. Else redirect the user to the login page
 * */ 