import React from 'react';
import './Special.css'
import { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';
const Special = ({ring}) => {
    const angti=useContext(RingContext)
    return (
        <div>
            <h3>Janu</h3>
            <p><small>Ring:{ring}</small></p>
        </div>
    );
};

export default Special;