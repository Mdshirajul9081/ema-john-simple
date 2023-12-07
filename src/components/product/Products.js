import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Product = (props) => {
    
    const {hendelClick,product}=props;
    const{img, name, seller,price,ratings} = product;
  
    return (
        <div className='product'>
         <img src={img} alt=''></img>
         <div className='product-info'>
         <p className='product-name'>{name}</p>
         <p className='product-price'>Price:${price}</p>
         <p className='product-seller'>Manufacturer:{seller}</p>
         <p className='product-rating'>Rating:{ratings}</p>
         </div>
         <button onClick={()=>hendelClick(product)} className='btn'>
            <p>add to card</p>
            <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon>

         </button>
        </div>
    );
};

export default Product;