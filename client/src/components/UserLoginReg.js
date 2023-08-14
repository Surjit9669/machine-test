import React from 'react'
import LoginForm from './LoginForm'
import UserRegistration from './UserRegistration'
import { useNavigate } from 'react-router-dom'



const UserLoginReg = () => {


    return (<div className='container'>
        <div className='leftContainer'>
            <LoginForm />
        </div>
        <div className='rightContainer'>
            <UserRegistration />
        </div>
    </div>
    )
}

export default UserLoginReg