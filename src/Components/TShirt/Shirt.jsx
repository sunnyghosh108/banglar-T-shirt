import React from 'react';
import './TShirt.css'
const Shirt = ({tshirt,handleAddToCart}) => {
    const {picture,name,price}=tshirt;
    return (
        <div className='t-shirt'>
            < img src={picture} alt=''/>
            <h4>{name}</h4>
            <p>Price:${price}</p>
            <button className='btn-cart' onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Shirt;