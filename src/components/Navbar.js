import './Navbar.css';
import React, { useState } from 'react';
import { BsBell, BsFillExclamationCircleFill } from 'react-icons/bs';


const Navbar  = () => {

    let isOpen = false;

    const toggleMenu = () => {
        let menu = document.getElementById('hamburger-menu');
        let hamburgerIcon = document.getElementById('hamburger-icon');

        if( isOpen ) {
            menu.classList.remove('hamburger-menu--open');
            hamburgerIcon.classList.remove('hamburger-icon--open');
        }
        else {
            menu.classList.add('hamburger-menu--open');
            hamburgerIcon.classList.add('hamburger-icon--open');
        }    

        isOpen = !isOpen;
    }

    const toggleNotification = () => {
        console.log('kania123');
    }

    return (  
        <nav className='navbar'>
            <div className='navbar-content'>
                <div className='logo'>T</div>
                <div className='navbar-menu'>
                    <div id='hamburger-icon' className='hamburger-icon' onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id='hamburger-menu' className='hamburger-menu'>
                        <a>Home</a>
                        <a>Terrariums</a>
                        <a>Settings</a>
                        <a>Logout</a>
                    </div>
                    <button id='notification-bell' onClick={toggleNotification}>
                        <BsBell />
                    </button>
                    <div className='list-menu'>
                        <a>Home</a>
                        <a>Terrariums</a>
                        <a>Settings</a>
                        <a>Logout</a>
                    </div>
                </div>
            </div>
            <div id='notifications'>
                <a className='notification'>
                    <div className='notification__icon'>
                        <BsFillExclamationCircleFill />
                    </div>
                    <div className='notification__content'>
                        <b>Name</b><br />
                        <span>High temperature in terrarium</span>
                    </div>
                </a>

                <a className='notification'>
                    <div className='notification__icon'>
                        <BsFillExclamationCircleFill />
                    </div>
                    <div className='notification__content'>
                        <b>Name</b><br />
                        <span>High temperature in terrarium</span>
                    </div>
                </a>
            </div>
        </nav>
    );
}
 
export default Navbar;