import React from 'react';
import './Myself.css';
import Special from '../Special/Special';
const Myself = ({ring}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;