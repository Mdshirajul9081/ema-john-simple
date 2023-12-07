import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Products';

const Shop = () => {
    const[products,setProducts]=useState([]);
    const [card,setCard]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const hendelClick=(product)=>{
        console.log(product);
        const newCard=[...card,product];
        setCard(newCard);
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
            <h2>order summary</h2>
            <p>selected item:{card.length}</p>
            <p>total price :${}</p>
           </div>
        </div>
    );
};

export default Shop;