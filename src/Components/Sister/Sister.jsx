import React from 'react';
import './Sister.css'
import { MoneyContext } from '../GrandPa/GrandPa';
import { useContext } from 'react';

const Sister = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Sister</h2>
            <p><small>grandpa money:{money}</small></p>
        </div>
    );
};

export default Sister;