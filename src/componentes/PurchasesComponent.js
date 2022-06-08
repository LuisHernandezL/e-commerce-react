import React from 'react';
import { useNavigate } from 'react-router-dom';

const PurchasesComponent = ({purchases}) => {
    

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(purchases.createdAt).toLocaleDateString('en-us', options);
    const navigate=useNavigate();

    
    

    return (
        <div>
            
            <div>
                
                <div className='purchase-container'>
                    <li className='list-group-item active title'>{date}</li>
                    {
                        purchases.cart.products.map(product=>(
                            
                            <ul onClick={()=>navigate(`/product/${product.id}`)} key={product.id} className='list-group'>
                                
                                <li className='list-group-item'>{product.title}</li>
                                <li className='list-group-item'>$ {product.price}</li>
                                <li className='list-group-item'>Items: {product.productsInCart.quantity}</li>
                            </ul>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default PurchasesComponent;