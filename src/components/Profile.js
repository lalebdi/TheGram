import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div className="profile-container" >
            <img src={user.picture} alt={user.name} className="profile-img"/>
            <div className="profile-info" >
                <h3> {user.name} </h3>
                <p>{user.nickname}</p>
                {/* <JSONPretty data={ user } /> */}
            </div>
        </div>
        )
    )
}

export default Profile
