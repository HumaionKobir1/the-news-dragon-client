import React, { useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/style.css'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error =>{
                console.log(error);
            })
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Col className='mx-auto shadow-sm p-3 mb-5 bg-white rounded' xl={4} xs={12}>

        <Container className="p-5  mt-3">
            <Form onSubmit={handleSubmit}>
                <h3 className="text-center mb-2 text-secondary">Please Register your account</h3>
                <hr className='mb-4' />

                <Form.Group controlId="formBasicName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                    required
                    className='bg mb-3'
                    type="text"
                    placeholder="Enter Your Name"
                    name='name'                    
                />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                <Form.Label>Your photo url</Form.Label>
                <Form.Control
                    required
                    className='bg mb-3'
                    type="text"
                    placeholder="Enter Your Name"
                    name='photo'                    
                />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    required
                    className='bg mb-3'
                    type="email"
                    placeholder="Enter email"
                    name= 'email'
                />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className='mb-3'>
                    <Form.Control
                    required
                    className='bg'
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name='password'
                    />
                    <Form.Check
                    type="checkbox"
                    label="Show password"
                    className="ml-2"
                    onChange={togglePasswordVisibility}
                    />
                </div>
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                Sign Up
                </Button>
                    
                <p className="mt-3 mb-0 text-center text-secondary">
                Already have an account?{" "}
                    <Link to="/login"><u>Login</u></Link>
                </p>
            </Form>
        </Container>
        </Col>
    );
};

export default Register;