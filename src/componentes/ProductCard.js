import React from 'react';

const ProductCard = ({product}) => {
    
    return (
        <div className='product-container'>
            <div className='product-image'>
                <img src={product?.productImgs[0]} alt="" />
            </div>
            <div>
                <h2>{product?.title}</h2>
                <p>{product?.price}</p>
                <button className='btn btn-primary'>add</button>
            </div>   
        </div>
    );
};

export default ProductCard;