import React, { useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/style.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // perform login logic here
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Col className='mx-auto shadow-sm p-3 mb-5 bg-white rounded' xl={4} xs={12} mt-2>

        <Container className="p-5  rounded ">
            <Form onSubmit={handleSubmit}>
                <h3 className="text-center mb-2 text-secondary">Login your account</h3>
                <hr className='mb-4' />
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    className='bg mb-3'
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className='mb-3'>
                    <Form.Control
                    className='bg'
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Check
                    type="checkbox"
                    label="Show password"
                    className="ml-2"
                    onChange={togglePasswordVisibility}
                    />
                </div>
                </Form.Group>

                <div className='d-flex justify-content-between align-items-center'>
                    <Button variant="primary" type="submit" block>
                    Submit
                    </Button>
                    
                    <p className='mb-0'><Link className='text-decoration-none'>Forgot Password?</Link></p>
                </div>
                
                <p className="mt-3 mb-0 text-center text-secondary">
                Don't have an account?{" "}
                <a href="">
                    <Link to="/register"><u>Register</u></Link>
                </a>
                </p>
            </Form>
        </Container>
        </Col>
    );
};

export default Login;