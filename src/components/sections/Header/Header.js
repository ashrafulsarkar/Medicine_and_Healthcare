import React from 'react';
import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    // console.log(useAuth());
    const {user, logOut} = useAuth();
    // const user= 0;
    return (
        <header>
            <Container>
                <div className="header-top">
                    <Row className="align-items-center">
                        <Col>
                            <div className="top-contact text-center">
                                <h5>1 (471) 280 80 80</h5>
                                <span>9.00 am - 8.00 pm</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="logo text-center">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                        </Col>
                        <Col>
                            <div className="location text-center">
                            <h5>489 5th Avenue</h5>
                            <span>New York, NY</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="header-boottom">
                    <Row>
                        <Col>
                            <Navbar collapseOnSelect expand="lg">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                                    <Nav>
                                        <Nav.Item>
                                            <Nav.Link as = {Link} to="/home">Home</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as = {Link} to="/about">About</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>
                                        </Nav.Item>
                                        {user?.email?
                                            <Navbar.Text>
                                                Sign In As : {user?.displayName}
                                            </Navbar.Text>:
                                            ''
                                        }
                                        {user?.email?
                                            <Nav.Item>
                                                <Button className="logout-btn" onClick={logOut}>Logout</Button>
                                            </Nav.Item>:
                                            <Nav.Item>
                                                <Nav.Link as = {Link} to="/login">Login</Nav.Link>
                                            </Nav.Item>
                                        }
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </div>
            </Container>
        </header>
    );
};

export default Header;