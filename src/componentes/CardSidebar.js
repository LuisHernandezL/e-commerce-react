import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../assests/styles/cartSideBar.css'

const CardSidebar = ({show,handleClose}) => {
    const cartProducts = useSelector(state=>state.cart)
    const navigate = useNavigate();
    
    const selectProduct = (cartProduct)=>{
        handleClose();
        navigate(`/product/${cartProduct.id}`);
    };

    const TotalPrice = (cartProducts)=>{
        let total=0;
        cartProducts?.forEach(product => {
            total = total + (+product.price*product.productsInCart.quantity)
            
        });
        return total
    }



    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton className='title-cart'>
                    <Offcanvas.Title className='mx-auto'>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cartProducts.map(cartProduct=>(
                            <div className='base-container-cart' key={cartProduct.id} >
                                <div className='cart-product-container' onClick={()=>selectProduct(cartProduct)}>
                                    <div className='cart-product-1'>
                                        <h5>{cartProduct.title}</h5>
                                        <p>$ {cartProduct.price}</p>
                                        <p><b>Quantity:</b> {cartProduct.productsInCart.quantity}</p>
                                    </div>
                                    <div className='cart-product-2'>
                                        <button><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                    }
                    <div className='end-information'>
                        <div className='total-container'>
                            <h3>Total:</h3>
                            <p><b>$</b> {TotalPrice(cartProducts)}</p>
                        </div>
                        <button className='btn btn-primary'>Purchase</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default CardSidebar;