import './TimePicker.css';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import { useState, useEffect } from 'react';


const TimePicker = (props) => {

    const [timeType, setTimeType] = useState('AM');

    const changeTimeType = (value) => {
        props.changeTimeType(value);
        setTimeType(value);
    }

    const hoursValidation = (e) => {
        if(e.target.value > 12 || e.target.value < 0){
            e.target.classList.add('time-picker-error');
            return false;
        }

        e.target.classList.remove('time-picker-error');
        return true;
    }

    const minutesValidation = (e) => {
        if(e.target.value > 59 || e.target.value < 0){
            e.target.classList.add('time-picker-error');
            return false;
        }

        e.target.classList.remove('time-picker-error');
        return true;
    }

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
                <input type="number" id="hours-input" onChange={(e) => hoursValidation(e)}/>
                <IoIosArrowDown />
            </div>
            <span>:</span>
            <div className='time-picker'>
                <IoIosArrowUp />
                <input type="number" id="minutes-input" onChange={(e) => minutesValidation(e)} />
                <IoIosArrowDown />
            </div>
            <div className='time-type'>
                <button id='time-am' onClick={() => changeTimeType('AM')}>AM</button>
                <button id='time-pm' onClick={() => changeTimeType('PM')}>PM</button>
            </div>
        </div>
     );
}
 
export default TimePicker;