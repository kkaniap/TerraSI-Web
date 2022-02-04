import './Humidifier.css';
import Switch from "react-switch";
import { useState } from 'react';

const Humidifier = (props) => {

    const [isChecked, setIsChecked] = useState(props.isHumidifierOn);
    const changeChecked = () => {
        props.changeIsHumidifierOn(!isChecked);
        setIsChecked(!isChecked);
    }

    return (  
        <Switch
            onChange={changeChecked}
            checked={isChecked}
            className="react-switch custom-switch"
        />
    );
}
 
export default Humidifier;