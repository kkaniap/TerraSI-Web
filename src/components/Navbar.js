import './Navbar.css';
import React, { useState } from 'react';
import { BsBell } from 'react-icons/bs';


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
                    <button id='notification-bell'>
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
        </nav>
    );
}
 
export default Navbar;