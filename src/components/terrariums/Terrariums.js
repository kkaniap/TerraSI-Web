import './Terrariums.css';
import {BsGearFill} from 'react-icons/bs';
import {MdClose} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Terrariums = () => {

    const[errorMessage, setErrorMessage] = useState('');
    const[isChangeNameOpen, setChangeNameOpen] = useState(false);

    useEffect(() => {
        const changeNameContainer = document.getElementById('change-name-container');
        const changeNameModal = document.getElementById('change-name');

        if(isChangeNameOpen){
            changeNameContainer.classList.add('change-name-container--open');
            changeNameModal.classList.add('change-name--open');            
        }
        else{
            changeNameContainer.classList.remove('change-name-container--open');
            changeNameModal.classList.remove('change-name--open');
        }

    }, [isChangeNameOpen]);

    const valideTerrariumName = () => {
        const terrariumName = document.getElementById("terrarium-name");
        if(terrariumName.value.trim() == ''){
            terrariumName.style.border = '2px solid red';
            setErrorMessage('Name field is mandatory');
        }
    }

    return ( 
        <div className='terrariums-container'>
            <div id='change-name-container' className='change-name-container'>
                <div id='change-name' className='change-name'>
                    <button className='close-btn' onClick={() => setChangeNameOpen(false)}><MdClose /></button>
                    <p>{ errorMessage }</p>
                    <input type="text" id="terrarium-name" name="terrarium-name" />
                    <button className='save-btn' onClick={() => valideTerrariumName()}> Save </button>
                </div>
            </div>
    
            <div className='terrarium-item'>
                <button className='gear-btn' onClick={ () => setChangeNameOpen(true) }><BsGearFill /></button>
                <Link to='/terrariums/1' >
                    <div className='terrarium-item__img' >
                        <img src='/images/lizard.svg' />
                    </div>
                    <h2>Tegenaria agrestis</h2>
                </Link>
            </div>

            <div className='terrarium-item'>
                <button className='gear-btn' onClick={ () => setChangeNameOpen(true) }><BsGearFill /></button>
                <Link to='/terrariums/1' >
                    <div className='terrarium-item__img' >
                        <img src='/images/spider.svg' />
                    </div>
                    <h2>Tegenaria agrestis</h2>
                </Link>
            </div>

            <div className='terrarium-item'>
                <button className='gear-btn' onClick={ () => setChangeNameOpen(true) }><BsGearFill /></button>
                <Link to='/terrariums/1' >
                    <div className='terrarium-item__img' >
                        <img src='/images/snake.svg' />
                    </div>
                    <h2>Elaphe longissima</h2>
                </Link>
            </div>

        </div>
     );
}
 
export default Terrariums;