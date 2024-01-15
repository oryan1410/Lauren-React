import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { I18nextProvider } from 'react-i18next';
import './i18n';

// if (process.env.NODE_ENV !== 'production') {
//   const axe = require('@axe-core/react');
//   axe(React, ReactDOM, 1000);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <I18nextProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </I18nextProvider>
    </BrowserRouter>
);

reportWebVitals();