import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/home')
    }

    return (
        <header className='header'>
            <div onClick={handleBack}><ArrowBackIcon />Back </div>

        </header>)
}

export default Header