import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const baseUrl = 'https://ecommerce-api-react.herokuapp.com/api/v1';

    const [ product, setProduct ] = useState([])

    const { id } = useParams();

    useEffect(()=> {
        axios.get(baseUrl+`/products/${id}`)
            .then(res => setProduct(res.data.data.product))
    },[])

    console.log(product)

    return (
        <div>
            <h1>Product Details</h1>
        </div>
    );
};

export default ProductDetails;