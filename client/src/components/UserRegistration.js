import React, { useState } from 'react';
import { register } from '../apiRequest';
import { useNavigate } from 'react-router-dom'



const UserRegistration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const navigate = useNavigate()


    const handleRegistration = async () => {
        await register({ email, password })
            .then((res) => {
                console.log(res.data.message);
                setRegistrationError(res.data.message);
                navigate('/home')
            })
            .catch((err) => {
                console.error('Registration error:', err);
            });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration()
    }
    return (
        <>
            <div>
                <h3>Register</h3>
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
                <button className="regBtn" >
                    Register
                </button>
                {registrationError && <p>{registrationError}</p>}
            </form>
        </>
    );
};

export default UserRegistration;
