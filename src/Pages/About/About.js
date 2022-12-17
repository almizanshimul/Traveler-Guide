import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='my-5'>
            <Row className='align-items-center'>
                <Col xs={12} md={4} className='my-3'>
                    <img src='https://i.ibb.co/QPfF7RN/almizanshimul.jpg' className='d-block img-fluid shadow p-2 mb-5 bg-body rounded-circle' alt='Al Mizan' />
                </Col>
                <Col xs={12} md={8} className='my-3'>
                    <h3 className='fs-2 fw-bold text-info'>About</h3>
                    <p className='fs-5'>I am Al Mizan. I am a junior web developer. Currently, I am learning about React. I started my web development journey with Programming Hero.</p>
                    <h3 className='fs-2 fw-bold text-info'>Goal</h3>
                    <p className='fs-5'>My Goal is to be a Full Stack Web Developer. I want to shine my career in the Web Development Sector. That's why I am preparing myself everyday. The journey of a full stack developer is not very easy. So, I am working hard to achieve my goal. I will try my best and InshahAllah I will be successful. My next mission is Back End.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About; <h2>This is About page</h2>