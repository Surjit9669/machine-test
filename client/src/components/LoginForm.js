import React, { useState } from 'react';
import { login } from '../apiRequest';
import { useNavigate } from 'react-router-dom'

function LoginForm({ onLogin }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async () => {
        await login({ email, password })
            .then((res) => {
                setLoginError(res.data.message);
                alert('Login successful');
                navigate('/home')
            })
            .catch((error) => console.error('Login error:', error));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin()
    }

    return (
        <>
            <div>
                <h3>Login</h3>
            </div>

            <form className="formContainer" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="loginBtn" >
                    Login
                </button>
                {loginError && <p>{loginError}</p>}
            </form>
        </>
    );
}

export default LoginForm;
