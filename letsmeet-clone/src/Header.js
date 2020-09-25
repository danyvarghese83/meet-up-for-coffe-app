import React from 'react'
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import TextsmsIcon from '@material-ui/icons/Textsms';

function Header() {
    return (
        <div className="header">
            <IconButton>
            <AccountCircleIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img
            className='header_logo'
            src="https://image.freepik.com/free-photo/cup-coffee-latte-coffee-beans-isolated-white-background_126277-559.jpg"
            alt='spark'>
            </img>
            <IconButton>
            <TextsmsIcon fontSize="large" className="header_icon"/>
            </IconButton>
            
        </div>
    )
}

export default Header
