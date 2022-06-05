import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assests/styles/navBar.css'

const Navbar = () => {

    const navigate = useNavigate()

    const toPurchases = () => navigate("/purchases")
    const toLogin = () => navigate("/login")
    const toHome = () => navigate("/")

    return (
        <header className='nav-container'>
            <h5 onClick={toHome}>E-COMMERCE</h5>
            
            <ul className='list-navbar'>
                <li onClick={toLogin}><i class="fa-solid fa-user"></i></li>
                <li onClick={toPurchases}><i class="fa-solid fa-shop"></i></li>
                <li><i class="fa-solid fa-cart-shopping"></i></li>
            </ul>
            
        </header>
    );
};

export default Navbar;