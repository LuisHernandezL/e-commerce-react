import '../assests/styles/productDetail.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../store/slices/products.slices';
import ProductCard from '../componentes/ProductCard';

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

    console.log(productsFiltered);

    return (
        <div className='product-detail-container'>
            <div className='product-data'>
                <div className='image-options'>
                    <div className='button-container'><button>atras</button></div>
                    <img src={product?.productImgs[0]} alt="" />
                    <div className='button-container'><button>delante</button></div>
                </div>
                <div className='image-subOptions'>
                    <img src={product?.productImgs[0]} alt="" />
                    <img src={product?.productImgs[1]} alt="" />
                    <img src={product?.productImgs[2]} alt="" />
                </div>
            </div>
            <div className='product-options'>
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>
                <p>price: {product?.price}</p>
                <div>
                    <p>quantity</p>
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                </div>
                <button>Add Product</button>
            </div>
            <h3>Discover similar items</h3>
            <div className='suggestions'>
                {
                    productsFiltered.map(product => (
                        <div className='product-wrapper'>
                            <ProductCard product={product}/>
                            
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ProductDetails;