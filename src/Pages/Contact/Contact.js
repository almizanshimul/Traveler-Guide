import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className='my-5'>
            <h2 className='my-3 text-center'>Get In Touch!</h2>
            <Row className='align-items-center'>
                <Col xs={12} md={6} className='my-3'>
                    <img src='https://i.ibb.co/BwVrkh3/map.png' className='d-block img-fluid' alt='ChapaiNawabganj Map' />
                </Col>
                <Col xs={12} md={6} className='my-3'>
                    <Form onClick={(e) => e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTextArea">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                        </Form.Group>
                        <Button className='w-100' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;