import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signusingGoogle, signusingFacebook, error, createUser, userLogin} = useAuth();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[taggleReg, setTaggleReg] = useState(false);

    /**
     * handledignIn
     */
    const handleSigninSignup = e =>{
        e.preventDefault();
        taggleReg?
        createUser(email, password):
        userLogin(email, password);
    }
    
    /**
     * handleEmail
     */
     const handleEmail = e =>{
        setEmail(e.target.value);
    }

    /**
     * handleEmail
     */
     const handlePassword = e =>{
        setPassword(e.target.value);
    }

    /**
     * handleEmail
     */
     const tagleReg = e =>{
        setTaggleReg(e.target.checked);
    }

    return (
        <div>
            <section id='loginForm'>
                <Container>
                    <Row>
                        <Col className="offset-md-3 col-md-6">
                            <div className="loginform">
                                {error?
                                    <div className="error-massage">
                                    <p>{error}</p>
                                    </div>:
                                    ''
                                }
                                <h4 className="text-center">{taggleReg?'Registation':'Login'}</h4>
                                <Form onSubmit={handleSigninSignup} >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check onChange={tagleReg} type="checkbox" label="Register Now" />
                                    </Form.Group>
                                    <Button variant="primary" className='loginBtn' type="submit">
                                        {
                                            taggleReg?'Registation':'Login'
                                        }
                                    </Button>
                                </Form>
                                <div className="provider-login">
                                    <div className="withSign googleSign">
                                        <Button onClick={signusingGoogle}>
                                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Login with Google
                                        </Button>
                                    </div>
                                    <div className="withSign facebookSign">
                                        <Button onClick={signusingFacebook}>
                                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> Login with Facebook
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Login;