import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Title = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <div className="title">
      <h1>LeahGram</h1>
      <h2>A simple & fun way to share photos</h2>
      <p>Share your posts by clicking the button below</p>
    </div>
    )
  )
}

export default Title;