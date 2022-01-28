import { BsFillExclamationCircleFill } from 'react-icons/bs';
import {MdClose} from 'react-icons/md';
import './Notifications.css';

const Notifications = (props) => {
    return ( 
        <div id='notifications' className='notifications'>
                <button className='close-btn' onClick={() => props.changeIsOpen(false)}><MdClose /></button>
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
     );
}
 
export default Notifications;