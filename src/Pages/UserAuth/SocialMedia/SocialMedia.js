import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';



const SocialMedia = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }

    let errorMessage;
    let loadingMessage;

    if (error) {
        errorMessage = <p className='text-danger'><strong>Error: </strong>{error?.message}</p>
    }
    if (loading) {
        loadingMessage = <Loading></Loading>;
    }

    return (
        <div>
            {errorMessage}
            <span className='connect-social connect-goggle' onClick={() => { signInWithGoogle() }} style={{ cursor: 'pointer' }}><img alt="Google" src="https://i.ibb.co/txyDHDN/google.png" /> Connect with Goggle {loadingMessage}</span>
        </div>
    );
};

export default SocialMedia;