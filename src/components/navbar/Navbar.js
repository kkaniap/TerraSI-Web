import './Navbar.css';
import { BsBell } from 'react-icons/bs';
import Notifications from '../notifications/Notifications';
import { useState, useEffect } from 'react';

const Navbar  = () => {

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    
    useEffect(() => {
        let menu = document.getElementById('hamburger-menu');
        let hamburgerIcon = document.getElementById('hamburger-icon');

        if( isHamburgerOpen ) {
            menu.classList.add('hamburger-menu--open');
            hamburgerIcon.classList.add('hamburger-icon--open');
        }
        else {
            menu.classList.remove('hamburger-menu--open');
            hamburgerIcon.classList.remove('hamburger-icon--open');
        }    
    }, [isHamburgerOpen]);

    useEffect(() => {
        let notifications = document.getElementById('notifications');

        if( isNotificationsOpen ) {
            notifications.classList.add('notifications--show');
        }
        else {
            notifications.classList.remove('notifications--show');
        }
    }, [isNotificationsOpen]);

    return (  
        <nav className='navbar'>
            <div className='navbar-content'>
                <div className='logo'>T</div>
                <div className='navbar-menu'>
                    <div id='hamburger-icon' className='hamburger-icon' onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
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
                    <button id='notification-bell' onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}>
                        <BsBell />
                    </button>
                    <div className='desktop-menu'>
                        <a>Home</a>
                        <a>Terrariums</a>
                        <a>Settings</a>
                        <a>Logout</a>
                    </div>
                </div>
            </div>
            <Notifications changeIsOpen={open => setIsNotificationsOpen(open)}/>
        </nav>
    );
}
 
export default Navbar;