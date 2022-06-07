import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filterProducts, getProducts } from '../store/slices/products.slices';

const ProductDetails = () => {
    const [product,setProduct]=useState();
    const [ productsFiltered, setProductsFiltered ] = useState([]);
    
    const {id}=useParams();
    const dispatch = useDispatch();
    const productsList = useSelector(state=>state.products);
    
    useEffect(() => {dispatch(getProducts())}, [ dispatch ]);

    useEffect(() => {
        
        const productFind = productsList.find(
            productItem => productItem.id === +id
        );

        const filtered = productsList.filter(
            productItem => productItem.category.id === productFind.category.id
        );

        setProductsFiltered(filtered);

        setProduct(productFind);
        
    }, [ id, dispatch, productsList ]);


   
    
    return (
        <div>
            <h1>Product Details</h1>
        </div>
    );
};

export default ProductDetails;