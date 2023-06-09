import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import LeftNav from '../shared/leftNav/LeftNav';
import RightNav from '../shared/rightNav/RightNav';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBer from '../shared/navigationBer/NavigationBer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBer></NavigationBer>
            <Container className='mt-5'>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;