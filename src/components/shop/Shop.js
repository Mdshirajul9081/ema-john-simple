import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Products';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products=useLoaderData();
    const [cart,setCart]=useState([])
    const clearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    
    useEffect(()=>{
        
        // console.log('localStorage frist line',products);
        const strodCart=getStoredCart();
        const savedCart=[];
        for (const id in strodCart){
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity = strodCart[id];
                addedProduct.quantity=quantity;
              savedCart.push(addedProduct);
            }

            
            
        }
       setCart(savedCart);
        // console.log('local storage finesed');

    },[products])

    const hendelClick=(selectedProduct)=>{
        console.log(selectedProduct);
        let newCart =[];
        const exists= cart.find(product=>product.id===selectedProduct.id);
        if(!exists){
           selectedProduct.quantity=1;
           newCart=[...cart,selectedProduct];
        }
        else{
            const rest =cart.filter(product=>product.id !==selectedProduct.id);
            exists.quantity=exists.quantity+1;
            newCart =[...rest,exists];

        }
        
       
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container '>
           <div className="products-container">
           {
            products.map(product=><Product 
                key={product.id}
                product={product}
                hendelClick={hendelClick}
                ></Product>)
           }
           </div>
           <div className="cards-container">
           <Cart clearCart={clearCart} cart={cart}>
            <Link to='/orders'><button>order review</button></Link>
           </Cart>
           </div>
        </div>
    );
};

export default Shop;