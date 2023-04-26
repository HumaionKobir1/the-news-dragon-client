import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import './rightNav.css'



const RightNav = () => {
    return (
        <>
            <div>
            <h2>Login with</h2>
            <Button  variant="outline-primary"><FaGoogle /> Login with Google</Button>{' '}
            <Button className='mt-1' variant="outline-secondary"><FaGithub/> Login wth Github</Button>{' '}
            </div>

            <div className='mt-3'>
                <ListGroup>
                    <h2>Find Us On</h2>
                    <ListGroup.Item className='p-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaTwitter></FaTwitter> Twitter in</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <Qzone></Qzone>

            <div className='learn h-40 mt-4 text-white p-5 text-center'>
                <h1>Create an Amazing Newspaper</h1>
                <br />
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <br />
                <Button variant="danger">Learn More</Button>
            </div>

        </>
    );
};

export default RightNav;