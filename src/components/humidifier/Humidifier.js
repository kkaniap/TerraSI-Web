import './Humidifier.css';
import Switch from "react-switch";
import { useState } from 'react';

const Humidifier = (props) => {
    return (  
        <Switch
            onChange={() => {props.changeIsHumidifierOn(!props.isHumidifierOn)}}
            checked={props.isHumidifierOn}
            className="react-switch custom-switch"
        />
    );
}
 
export default Humidifier;