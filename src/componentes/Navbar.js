import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assests/styles/navBar.css'
import logo from '../assests/images/logo.png'
import { getCart } from '../store/slices/cart.slices';
import { useDispatch } from 'react-redux';
import { Button, Offcanvas } from 'react-bootstrap';

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toPurchases = () => navigate("/purchases");
    const toLogin = () => navigate("/user");
    const toHome = () => navigate("/");


    useEffect(() => {
        dispatch(getCart())
    }, [dispatch]);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 



    return (
        <>
        <header className='nav-container'>
            <div className='logo'>
                <img src={logo} alt="logo" onClick={toHome} />
            </div>

            <ul className='list-navbar'>
                <li><Button><i className="fa-solid fa-user" onClick={toLogin}></i></Button></li>
                <li><Button><i className="fa-solid fa-shop" onClick={toPurchases}></i></Button></li>
                <li><Button onClick={handleShow}><i className="fa-solid fa-cart-shopping"></i></Button></li>
            </ul>
            
        </header>
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Navbar;