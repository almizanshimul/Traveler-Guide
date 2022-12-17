import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Checkout = () => {
    return (
        <Container className='my-5 w-50'>
            <h2 className='my-3 text-center'>CheckOut</h2>
            <Row className='align-items-center'>
                <Col className='my-3'>
                    <Form onClick={(e) => e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCompany">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" placeholder="Company" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTextArea">
                            <Form.Label>Order notes (optional)</Form.Label>
                            <Form.Control as="textarea" placeholder="Note About Your order" style={{ height: '100px' }} />
                        </Form.Group>
                        <Button className='w-100' variant="primary" type="submit">
                            Place Order
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;