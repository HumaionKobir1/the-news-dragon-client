import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBer = () => {
    const {user} = useContext(AuthContext);

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg"  variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto mt-auto d-flex gap-3 ">
                        <Link className='text-decoration-none text-secondary'  to='/category/0'>Home</Link>
                        <Link className='text-decoration-none text-secondary'  to='/category/0'>About</Link>
                        <Link className='text-decoration-none text-secondary'  to='/category/0'>Contact</Link>
                        
                    </Nav>
                    <Nav>
                        {user && <Nav.Link href="#deets" className='mt-auto'>
                            <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle> {user.displayName}
                        </Nav.Link>}

                        <Nav.Link eventKey={2} href="#memes">
                        {user ? 
                        <Button variant="secondary">LogOut</Button>:
                        <Link to="/login"><Button variant="secondary">LogIn</Button></Link>
                        }
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBer;