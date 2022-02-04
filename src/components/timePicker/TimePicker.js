import './TimePicker.css';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import { useState, useEffect } from 'react';


const TimePicker = (props) => {

    const [timeType, setTimeType] = useState('AM');

    useEffect(() => {
        if(timeType == 'AM'){
            document.querySelector('#time-picker-' + props.componentName + ' #time-am').classList.add('time-type--selected');
            document.querySelector('#time-picker-' + props.componentName + ' #time-pm').classList.remove('time-type--selected');
        }
        else{
            document.querySelector('#time-picker-' + props.componentName + ' #time-pm').classList.add('time-type--selected');
            document.querySelector('#time-picker-' + props.componentName + ' #time-am').classList.remove('time-type--selected');
        }
    }, [timeType]);

    return ( 
        <div id={'time-picker-' + props.componentName} className='time-picker-container'>
            <div className='time-picker'>
                <IoIosArrowUp />
                <input type="number" id="hours-input" />
                <IoIosArrowDown />
            </div>
            <span>:</span>
            <div className='time-picker'>
                <IoIosArrowUp />
                <input type="number" id="minutes-input" />
                <IoIosArrowDown />
            </div>
            <div className='time-type'>
                <button id='time-am' onClick={() => setTimeType('AM')}>AM</button>
                <button id='time-pm' onClick={() => setTimeType('PM')}>PM</button>
            </div>
        </div>
     );
}
 
export default TimePicker;