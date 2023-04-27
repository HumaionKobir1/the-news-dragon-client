import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import '../../../src/style/style.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';



const Header = () => {
    const {user} = useContext(AuthContext);

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex gap-2 mb-3 bg p-3'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100} className='text-danger'>
                    I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam molestias cupiditate maxime eos accusamus illum expedita vero ipsum eius dolores tempora, consectetur suscipit veniam ullam obcaecati qui eum impedit quas. Quisquam accusantium ratione earum ullam dolore quibusdam ducimus ipsam necessitatibus, qui distinctio ipsum tempora! Cumque consequuntur optio ipsa animi blanditiis.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg"  variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='' to='/'><Nav.Link href="">Home</Nav.Link></Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        {user && <Nav.Link href="#deets" className='mt-auto'>
                            <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle> {user.displayName}
                        </Nav.Link>}

                        <Nav.Link eventKey={2} href="#memes">
                        {user ? 
                        <Button variant="secondary">LogOut</Button>:
                        <Link><Button variant="secondary">LogIn</Button></Link>
                        }
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;