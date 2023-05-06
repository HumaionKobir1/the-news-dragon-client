import React from 'react';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <h1>this is home page</h1>
        </div>
    );
};

export default Home;