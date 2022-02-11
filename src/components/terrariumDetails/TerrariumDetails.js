import './TerrariumDetails.css';
import GaugeChart from 'react-gauge-chart'
import {BsGearFill} from 'react-icons/bs';
import {MdClose} from 'react-icons/md';
import CircularSlider from 'advanced-react-circular-slider';
import 'advanced-react-circular-slider/main.css';
import TimePicker from '../timePicker/TimePicker';
import Humidifier from '../humidifier/Humidifier';
import { useState, useEffect } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import TemperatureSettings from '../temperatureSettings/TemperatureSettings';

const TerrariumDetails = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isHumidifierOn, setIsHumidifierOn] = useState(false);
    const [sunriseTimeType, setSunriseTimeType] = useState('AM');
    const [sunsetTimeType, setSunsetTimeType] = useState('AM');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
        .then(res => {  
            return res.json();
        })
        .then((data) => {
             setIsLoading(false);
        })
    }, []);

    useEffect(() => {
        const settingsContainer = document.getElementById('settings-container');
        const settingsModal = document.getElementById('settings-modal');

        if(settingsContainer == null || settingsModal == null) return;

        if(isSettingsOpen ){
            settingsContainer.classList.add('settings-container--open');
            settingsModal.classList.add('settings-modal--open');
        }
        else {
            settingsContainer.classList.remove('settings-container--open');
            settingsModal.classList.remove('settings-modal--open');
        }

    }, [isSettingsOpen])

    if(isLoading){
        return (
            <div className='terrarium-details-container'>
                <BounceLoader />
            </div>
        );
    }
    else {
        return (  
            <div className='terrarium-details-container'>

                <div id='settings-container' className='settings-container'>
                    <div id='settings-modal' className='settings-modal'>
                    <button  className='close-btn' onClick={() => setIsSettingsOpen(false)}><MdClose /></button>
                        <TemperatureSettings />
                    </div>
                </div>

                <div id='temperature-get' className='details-item'>
                    <button className='gear-btn' onClick={() => setIsSettingsOpen(true)}><BsGearFill /></button>
                    <h2 className='details-item__title'>Temperature</h2>
                    <GaugeChart 
                        id="temperature-gauge"
                        nrOfLevels={3}
                        arcPadding={0.02}
                        percent={0.9} 
                        textColor="#000"
                        colors={['#e3e3e3', '#c4c4c4', '#737373']}
                        formatTextValue={() => 40 +'\u00b0C'}
                    />
                </div>
    
                <div id='temperature-set' className='details-item details-item--slider'>
                    <CircularSlider
                        labelTop="Bulb %"
                        width={210}
                        min={0}
                        max={100}
                        step={1}
                        labelStep={0}
                        appendToValue=""
                        knobSize={40}
                        trackSize={15}
                        trackColor='#e3e3e3'
                        labelColor='#464A4F'
                        knobColor='#464A4F'
                        progressColorFrom='#c4c4c4'
                        progressColorTo='#c4c4c4'
                    />
                </div>
    
                <div id='humidity-get' className='details-item'>
                    <button className='gear-btn' ><BsGearFill /></button>
                    <h2 className='details-item__title'>Humidity</h2>
                    <GaugeChart 
                        id="humidity-gauge"
                        nrOfLevels={3}
                        arcPadding={0.02}
                        percent={0.6} 
                        textColor="#000"
                        colors={['#e3e3e3', '#c4c4c4', '#737373']}
                        formatTextValue={() => 60 +     '%'}
                    />
                </div>
    
                <div id='water-get' className='details-item'>
                    <h2 className='details-item__title'>Water</h2>
                    <GaugeChart 
                        id="water-gauge"
                        nrOfLevels={3}
                        arcPadding={0.02}
                        percent={1} 
                        textColor="#000"
                        colors={['#e3e3e3', '#c4c4c4', '#737373']}
                        formatTextValue={() => 100 +     '%'}
                    />
                </div>
    
                <div id='uva-get' className='details-item'>
                    <h2 className='details-item__title'>UVA</h2>
                    <GaugeChart 
                        id="uva-gauge"
                        nrOfLevels={3}
                        arcPadding={0.02}
                        percent={0.3} 
                        textColor="#000"
                        colors={['#e3e3e3', '#c4c4c4', '#737373']}
                        formatTextValue={() => 30 +     '%'}
                    />
                </div>
    
                <div id='uvb-get' className='details-item'>
                    <h2 className='details-item__title'>UVB</h2>
                    <GaugeChart 
                        id="uvb-gauge"
                        nrOfLevels={3}
                        arcPadding={0.01}
                        percent={0.1} 
                        textColor="#000"
                        colors={['#e3e3e3', '#c4c4c4', '#737373']}
                        formatTextValue={() => 10 + '%'}
                    />
                </div>
    
                <div id='sunrise-set' className='details-item'>
                    <h2 className='details-item__title'>Sunrise time</h2>
                    <TimePicker componentName={'sunrise-time'} changeTimeType={setSunriseTimeType} timeType={sunriseTimeType} />
                </div>
    
                <div id='sunset-set' className='details-item'>
                    <h2 className='details-item__title'>Sunset time</h2>
                    <TimePicker componentName={'sunset-time'} changeTimeType={setSunsetTimeType} timeType={sunsetTimeType}/>
                </div>
    
                <div id='humidifier-set' className='details-item'>
                    <h2 className='details-item__title'>Humidifier</h2>
                    <Humidifier changeIsHumidifierOn={setIsHumidifierOn}  isHumidifierOn={isHumidifierOn} />
                </div>
    
            </div>
        );
    }

    
}
 
export default TerrariumDetails;