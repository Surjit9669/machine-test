import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import UploadIcon from '@mui/icons-material/Upload';

import ChatApp from './ChatApp'

const Home = () => {

    const navigate = useNavigate()

    const UploadClick = () => {
        navigate('/upload/file/Video')
    }
    const chatClick = () => {
        navigate('/user/chat')
    }

    const handleLogout = () => {
        navigate('/')
    }



    return (
        <div className='homePage'>


            <div className='logoutBtn' onClick={UploadClick}>
                <UploadIcon fontSize='large' />
                <h4>Upload</h4>
            </div>

            <div className='logoutBtn' onClick={chatClick}>
                <ChatIcon fontSize='large' />
                <h4>Chat</h4>
            </div>

            <div className='logoutBtn' onClick={handleLogout}>
                <LogoutIcon fontSize='large' />
                <h4>Logout</h4>
            </div>




        </div >
    )
}

export default Home