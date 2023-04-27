import React from 'react';
import NavigationBer from '../shared/navigationBer/NavigationBer';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;