import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CardSidebar = ({show,handleClose}) => {
    const cartProducts = useSelector(state=>state.cart)
    const navigate = useNavigate();
    console.log(cartProducts);
    
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
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cartProducts.map(cartProduct=>(
                            <div key={cartProduct.id} >
                                <div onClick={()=>selectProduct(cartProduct)}>
                                    <h5>{cartProduct.title}</h5>
                                    <p>$ {cartProduct.price}</p>
                                    <p><b>Quantity:</b> {cartProduct.productsInCart.quantity}</p>
                                </div>
                                
                            </div>
                        ))
                    }
                     <div>
                     <h3>Total:</h3>
                    <p><b>$</b> {TotalPrice(cartProducts)}</p>
                     </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default CardSidebar;