import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Model';
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const { isloading } = useAuth0();

  if(isloading) return <div>Loading...</div>
  
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
