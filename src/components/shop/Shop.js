import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Products';
import Card from '../card/Card';

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
           <Card card={card}></Card>
           </div>
        </div>
    );
};

export default Shop;