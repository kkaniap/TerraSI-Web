import './TemperatureSettings.css';

const TemperatureSettings = () => {
    return ( 
        <div className='temperature-settings-container'>

                <label >Min temperature </label>
                <input type="number" id='min-temperature' name='min-temperature' />

                <label >Max temperature </label>
                <input type="number" id='max-temperature' name='min-temperature' />

                <button className='save-btn' onClick={() => {}}> Save </button>
        </div>
     );
}
 
export default TemperatureSettings;