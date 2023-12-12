import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Products';
import Card from '../card/Card';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const[products,setProducts]=useState([]);
    const [card,setCard]=useState([])
    useEffect(()=>{
        // console.log('product load before fetch');
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>{
            
            setProducts(data)
            console.log("product loaded");
        })
    },[])
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
       setCard(savedCart);
        // console.log('local storage finesed');

    },[products])

    const hendelClick=(selectedProduct)=>{
        console.log(selectedProduct);
        let newCart =[];
        const exists= card.find(product=>product.id===selectedProduct.id);
        if(!exists){
           selectedProduct.quantity=1;
           newCart=[...card,selectedProduct];
        }
        else{
            const rest =card.filter(product=>product.id !==selectedProduct.id);
            exists.quantity=exists.quantity+1;
            newCart =[...rest,exists];

        }
        
       
        setCard(newCart);
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
           <Card card={card}></Card>
           </div>
        </div>
    );
};

export default Shop;