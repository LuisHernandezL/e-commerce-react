import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assests/styles/navBar.css'
import logo from '../assests/images/logo.png'
import { getCart } from '../store/slices/cart.slices';
import { useDispatch } from 'react-redux';
const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toPurchases = () => navigate("/purchases");
    const toLogin = () => navigate("/login");
    const toHome = () => navigate("/");

    useEffect(()=>{
        dispatch(getCart())
    },[dispatch]);

    return (
        <header className='nav-container'>
            <div className='logo'>
                <img src={logo} alt="logo" onClick={toHome}/>
            </div>
            
            <ul className='list-navbar'>
                <li onClick={toLogin}><i className="fa-solid fa-user"></i></li>
                <li onClick={toPurchases}><i className="fa-solid fa-shop"></i></li>
                <li><i className="fa-solid fa-cart-shopping"></i></li>
            </ul>
            
        </header>
    );
};

export default Navbar;