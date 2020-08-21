import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <button onClick={() => logout()} className="Logout-btn" style={{ width: "80px", height: "50px", borderRadius: "16px" }} >
            logout
        </button>
        )
    )
}

export default LogoutButton
