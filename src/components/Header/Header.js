import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
            <a href="/Order">Order</a>
            <a href="/Order Review">Order Review</a>
            <a href="/manage inventory">Manage inventory</a>
            <a href="/login">login</a>
           </div>
        </nav>
    );
};

export default Header;