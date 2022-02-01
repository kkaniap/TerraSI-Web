import './TerrariumDetails.css';
import GaugeChart from 'react-gauge-chart'
import {BsGearFill} from 'react-icons/bs';

import CircularSlider from 'advanced-react-circular-slider';
import 'advanced-react-circular-slider/main.css';


const TerrariumDetails = () => {
    return (  
        <div className='terrarium-details-container'>
            <div id='temperature-get' className='details-item'>
                <button className='gear-btn' ><BsGearFill /></button>
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


        </div>
    );
}
 
export default TerrariumDetails;