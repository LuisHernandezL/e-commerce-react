import React from 'react';
import { useNavigate } from 'react-router-dom';

const PurchasesComponent = ({purchases}) => {
    

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(purchases.createdAt).toLocaleDateString('en-us', options);
    const navigate=useNavigate();

    
    

    return (
        <div>
            
            <div>
                <h4>{date}</h4>
                <div className='purchase-container'>
                    {
                        purchases.cart.products.map(product=>(
                            <ul onClick={()=>navigate(`/product/${product.id}`)} key={product.id}>
                                <li>{product.title}</li>
                                <li>$ {product.price}</li>
                                <li>Items: {product.productsInCart.quantity}</li>
                            </ul>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default PurchasesComponent;