import React from 'react';
import './Card.css'
import { faColonSign } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    const {card}=props;
  //  console.log(card);
    // console.log(props);
  let total=0;
  let shipping=0;
  let quantity =0;
  
  for(const product of card){
    quantity=quantity+product.quantity;
    total=total+product.price*product.quantity; 
  shipping=shipping+product.shipping;
  }
   const tax= parseFloat((total*0.1).toFixed(2));
     const grandTotal=total+shipping+tax;
    return (
        <div className='card'>
             <h2>order summary</h2>
             <p>selected item:{quantity}</p>
             <p> Price:${total}</p>
             <p>shipping:{shipping}</p>
             <p>tax: {tax}</p>
             <h3>Grand total:{grandTotal .toFixed(2)}</h3>
           
        </div>
    );
};

export default Card;