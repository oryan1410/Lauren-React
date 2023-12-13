import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/login.css';
import { Container } from 'react-bootstrap';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email: ', email);

        if (email === 'oryan1410@gmail.com' && password === '123456') {
            console.log('login success');
            localStorage.setItem('isLogin', true);
            navigate('/home');
        } else {
            alert(`wrong email or password, 'isLogin', ${localStorage.getItem('isLogin')}`);
        }
    };

    return (
        <Container>
            <div className='loginPage'>
                <span className='pageHeader'>login-admin</span>
                <form onSubmit={handleSubmit}>
                    <div className='feildDiv'>
                        <label className='loginLabel'>
                            Email:
                        </label>
                        <input className='loginInput' type="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className='feildDiv'>
                        <label className='loginLabel'>
                            Password:
                        </label>
                        <input className='loginInput' type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </Container>
    );
};

export default LoginPage;
