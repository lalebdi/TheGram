import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated &&(
            <div className="login-page">
                <h1> LeahGram </h1>
        <button onClick={() => loginWithRedirect()} className="login-btn">
            Login
        </button>
        </div>
    )
    )
}

export default LoginButton
