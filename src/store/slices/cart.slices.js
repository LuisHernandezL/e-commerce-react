import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

const baseUrl = 'https://ecommerce-api-react.herokuapp.com/api/v1';
export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart:(state,action)=>{
            return action.payload
        }

    }
})

export const { setCart } = cartSlice.actions;

export const getCart = () => (dispatch) => {
    /* dispatch(setIsLoading(true)); */
    return axios.get(baseUrl+'/cart',getConfig())
        .then(res => dispatch(setCart(res.data.data.cart.products)))
        /* .finally(() => dispatch(setIsLoading(false))); */
}

export const addToCart = (addCart) => (dispatch) => {
    /* dispatch(setIsLoading(true)); */
    return axios.post(baseUrl+'/cart',addCart,getConfig())
        .then(() => {
            dispatch(getCart());
            alert("Se Anadio un producto")
        })
        .catch(error=>console.log(error.response))
        /* .finally(() => dispatch(setIsLoading(false))); */
}
export default cartSlice.reducer;
