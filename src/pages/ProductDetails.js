import '../assests/styles/productDetail.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../store/slices/products.slices';
import ProductCard from '../componentes/ProductCard';
import { Carousel } from 'react-bootstrap';
import { addToCart } from '../store/slices/cart.slices';

const ProductDetails = () => {

    const [product, setProduct] = useState();
    const [productsFiltered, setProductsFiltered] = useState([]);
    const[cart,setCart]=useState("")

    const { id } = useParams();
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.products);
    

    useEffect(() => { dispatch(getProducts()) }, [dispatch]);

    useEffect(() => {

        const productFind = productsList.find(
            productItem => productItem.id === +id
        );

        const filtered = productsList.filter(
            productItem => productItem?.category.id === productFind?.category.id
        );

        setProductsFiltered(filtered);

        setProduct(productFind);

    }, [id, dispatch, productsList]);

    const addCart = ()=>{
        const productToAdd={
            id:id,
            quantity:cart
        }
        dispatch(addToCart(productToAdd));
    }

    

    return (
        <div className='product-detail-container'>
            {/* <div className='product-data'>
                <div className='image-options'>
                    <div className='button-container'><button><i class="fa-solid fa-angle-left"></i></button></div>
                    <img src={product?.productImgs[0]} alt="" />
                    <div className='button-container'><button><i class="fa-solid fa-angle-right"></i></button></div>
                </div>
                <div className='image-subOptions'>
                    <img src={product?.productImgs[0]} alt="" />
                    <img src={product?.productImgs[1]} alt="" />
                    <img src={product?.productImgs[2]} alt="" />
                </div>
            </div>  */}
            <Carousel style={{maxWidth:'500px'}} className='mx-auto'>
                <Carousel.Item >
                    <img
                        style={{minWidth: "200px",
                            maxWidth: "274px",
                            height:"350px"}}
                        className="d-block w-100"
                        src={product?.productImgs[0]}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{minWidth: "200px",
                        maxWidth: "274px",
                        height:"350px"}}
                        className="d-block w-100"
                        src={product?.productImgs[1]}
                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{minWidth: "200px",
                        maxWidth: "300px",
                        height:"350px"}}
                        className="d-block w-100"
                        src={product?.productImgs[2]}
                        alt="Third slide"
                    />

        
                </Carousel.Item>
            </Carousel>

            <div className='product-options'>
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>
                <div className='options-subdata'>
                    <div className='options-subdata-1'>
                        <p> <span>Price:</span><b> ${product?.price}</b></p>
                    </div>
                    <div className='options-subdata-2'>
                        <p>Quantity</p>
                        <div>
                            <input type="number" onChange={e=>setCart(e.target.value)} value={cart}/>
                        </div>
                    </div>
                </div>

                <button className='add-product-button' onClick={addCart}>Add Product</button>


            </div>
            <h3>Discover similar items</h3>
            <div className='suggestions'>
                {
                    productsFiltered.map(product => (
                        <div className='product-wrapper' key={product.id}>
                            <ProductCard product={product} />

                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ProductDetails;