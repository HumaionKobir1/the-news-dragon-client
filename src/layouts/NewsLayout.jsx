import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import LeftNav from '../shared/leftNav/LeftNav';
import RightNav from '../shared/rightNav/RightNav';
import { Col, Container, Row } from 'react-bootstrap';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-3'>
                <Row>
                    <Col lg={9}>
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

export default NewsLayout;