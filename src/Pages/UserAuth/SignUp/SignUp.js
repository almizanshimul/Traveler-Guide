import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import SocialMedia from '../SocialMedia/SocialMedia';



const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    let errorElement;
    let loadingElement;

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        createUserWithEmailAndPassword(email, password);
        toast();

    }
    if (loading) {
        loadingElement = <Loading></Loading>
    }
    if (error) {
        errorElement = <p className="text-danger"><strong>Error: </strong>{error.message}</p>;
    }
    if (user) {
        navigate('/')
    }


    return (
        <Container className='my-5 w-50 m-res-user-auth'>
            <h2 className='my-3 text-center'>Register Travel Guide</h2>
            <Row className='align-items-center'>
                <Col className='shadow rounded p-5'>
                    <Form onSubmit={handleSubmit} className=''>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        {errorElement}
                        <Button className='w-100 submit-button' variant="primary" type="submit">
                            Sign up {loadingElement}
                        </Button>
                    </Form>
                    <p className='m-2'>Already have an Account? <Link to="/login" className='text-decoration-none'>Login</Link></p>
                    <p className='or-text text-center'><span>Or</span></p>
                    <SocialMedia></SocialMedia>
                    <ToastContainer />

                </Col>
            </Row>
        </Container>

    );
};

export default SignUp;