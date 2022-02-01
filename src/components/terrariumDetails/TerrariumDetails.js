import './TerrariumDetails.css';
import GaugeChart from 'react-gauge-chart'
import {BsGearFill} from 'react-icons/bs';

const TerrariumDetails = () => {
    return (  
        <div className='terrarium-details-container'>
            <div id='temperature-item' className='details-item'>
                <button className='gear-btn' ><BsGearFill /></button>
                <h2 className='details-item__title'>Temperature</h2>
                <GaugeChart 
                    id="temperature-gauge"
                    nrOfLevels={7}
                    percent={0.9} 
                    textColor="#000"
                    formatTextValue={() => 40 +'\u00b0C'}
                />
            </div>
        </div>
    );
}
 
export default TerrariumDetails;