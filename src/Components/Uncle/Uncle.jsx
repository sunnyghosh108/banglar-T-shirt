import React from 'react';
import './Uncle.css'
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';
import { useContext } from 'react';

const Uncle = () => {
    const [money,setMoney]=useContext(MoneyContext) ;
    return (
        <div>
            <h3>Uncle</h3>
            <p><small>grandpa money:{money}</small></p>
            <button onClick={()=>setMoney(money+1000)}>Send 1000tk</button>
            <section className='flex'>
                <Cousin>Surya</Cousin>
                <Cousin>Nila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;