import React from 'react';
import './Friend.css'
const Friend = ({ring}) => {
    return (
        <div>
            <h2>Friend</h2>
            <section>
                {ring && <p><small>Ring:Diamond</small></p>}
            </section>
        </div>
    );
};

export default Friend;