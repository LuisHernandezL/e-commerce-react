import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts,filterProducts,filterCategory } from '../store/slices/products.slices';
import '../assests/styles/home.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl = 'https://ecommerce-api-react.herokuapp.com/api/v1';

const Home = () => {
    
    const [search,setSearch]=useState('');

    const products = useSelector(state=>state.products);
    const dispatch = useDispatch();

    const [categories,setCategories]=useState([]);
    
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getProducts())
    },[]);

    const getFilterProducts =() =>{
        dispatch(filterProducts(search))
    };

    useEffect(()=>{
        axios.get(baseUrl+'/products/categories')
        .then(res=>setCategories(res.data.data.categories))

    },[]);

    const categoryFilter = (id)=>{
        dispatch(filterCategory(id));
    };

    const goDetail = (id)=>{
        navigate(`/product/${id}`)
    }
    

    

    


    return (
        <div className='products-container'>
            <div className='search-box'>
                <input 
                    type="text" 
                    id='search-bar'
                    onChange={e=>setSearch(e.target.value)}
                    value={search}
                />
                <button 
                    id='search-bar'
                    onClick={getFilterProducts}
                >
                    Search
                </button>
            </div>
            <div className='categories-container'>
                <ul className='categories-wrapper'>
                    {
                        categories.map(category=>(
                            <li key={category.id} onClick={()=>categoryFilter(category.id)}>{category.name}</li>
                        ))
                    }
                </ul>

            </div>
            <ul>
                {
                    products.map(product=>(
                        <li key={product.id} className='product-wrapper' onClick={()=>goDetail(product.id)}>
                            <div className='product-container'>
                                <div className='product-image'>
                                    <img src={product.productImgs[0]} alt="" />
                                </div>
                                

                                <div className='product-info'>
                                    <h3>{product.title}</h3>
                                    <div>
                                        Price:
                                        <p>$ {product.price}</p>
                                    </div>
                                    <button>
                                        Buy
                                    </button>

                                </div>

                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Home;