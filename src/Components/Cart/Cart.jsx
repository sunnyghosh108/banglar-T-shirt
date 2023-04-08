import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
           <h2>Order Summary:{cart.length}
           {
            cart.map(tshirt=><p 
                key={tshirt._id}>
                {tshirt.name}<button onClick={()=>handleRemoveFromCart(tshirt._id)}>*</button></p>)
           }
           </h2> 
        </div>
    );
};

export default Cart;