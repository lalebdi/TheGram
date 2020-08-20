import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
require('dotenv').config();

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;



//  Auth0 uses React context will be able to access properties within the app.
ReactDOM.render(
  <Auth0Provider
  domain = {domain}
  clientId = {clientId}
  redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA