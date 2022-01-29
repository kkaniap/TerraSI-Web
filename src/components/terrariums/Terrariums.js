import './Terrariums.css';
import {BsGearFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Terrariums = () => {
    return ( 
        <div className='terrariums-container'>
                <Link to='/' >
                    <div className='terrarium-item'>
                        <button className='gear-btn' ><BsGearFill /></button>
                        <div className='terrarium-item__img' >
                            <img src='/images/lizard.svg' />
                        </div>
                        <h2>Tegenaria agrestis</h2>
                    </div>
                </Link>

                <Link to='/' >
                    <div className='terrarium-item'>
                        <button className='gear-btn' ><BsGearFill /></button>
                        <div className='terrarium-item__img' >
                            <img src='/images/lizard.svg' />
                        </div>
                        <h2>Tegenaria agrestis</h2>
                    </div>
                </Link>

                <Link to='/' >
                    <div className='terrarium-item'>
                        <button className='gear-btn' ><BsGearFill /></button>
                        <div className='terrarium-item__img' >
                            <img src='/images/lizard.svg' />
                        </div>
                        <h2>Tegenaria agrestis</h2>
                    </div>
                </Link>
        </div>
     );
}
 
export default Terrariums;