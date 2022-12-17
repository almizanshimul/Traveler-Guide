import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import '../UserAuth.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialMedia from '../SocialMedia/SocialMedia';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
      );

    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');


    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    let loadingElement;
    let errorElement;

    // Form Submit Handle
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    
    if (loading) {
        loadingElement = <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'><strong>Error: </strong>{error.message} Please create a new Account</p>;
    }
    if (user) {
        navigate(from, { replace: true })
    }

    const handleResetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Mail Sent');
        }else{
            toast('Please Enter your Email address');
        }
    }

    return (
        <Container className='my-5 w-50 m-res-user-auth'>
            <h2 className='my-3 text-center'>Login</h2>
            <Row className='align-items-center'>
                <Col className='shadow rounded p-5 my-3'>
                    <Form onSubmit={handleSubmit} className=''>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        </Form.Group>
                        {errorElement}
                        <Button className='w-100 submit-button' variant="primary" type="submit">
                            Login {loadingElement}
                        </Button>
                    </Form>
                    <p className='m-2'>Forget Password? <span className='text-decoration-none text-primary' style={{cursor:'pointer'}} onClick={handleResetPassword}>Reset Password</span></p>
                    <p className='m-2'>New to Travel Guide? <Link to="/signup" className='text-decoration-none'>Create an Account</Link></p>
                    <p className='or-text text-center'><span>Or</span></p>
                    <SocialMedia></SocialMedia>
                    <ToastContainer />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;