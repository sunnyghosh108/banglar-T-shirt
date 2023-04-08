import React from 'react';
import './Brother.css'
import { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';
const Brother = () => {
    const ring=useContext(RingContext);
    return (
        <div>
            <h2>Brother</h2>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Brother;