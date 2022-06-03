import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://ecommerce-api-react.herokuapp.com/api/v1'


export const productsSlice = createSlice({
    name: 'products',
    initialState:[],
    reducers: {
        setProducts:(state,action)=> {
            return action.payload}

    }
})

export const { setProducts } = productsSlice.actions;


export const getProducts = () => (dispatch) => {
    /* dispatch(setIsLoading(true)); */
    return axios.get(baseUrl+'/products')
        .then(res => dispatch(setProducts(res.data.data.products)))
        /* .finally(() => dispatch(setIsLoading(false))); */
};

export const filterProducts = (query) => (dispatch) => {
    /* dispatch(setIsLoading(true)); */
    return axios.get(baseUrl+`/products?query=${query}`)
        .then((res) => dispatch(setProducts(res.data.data.products)))
        /* .finally(() => dispatch(setIsLoading(false))); */
};

export const filterCategory = (id) => (dispatch) => {
    /* dispatch(setIsLoading(true)); */
    return axios.get(baseUrl+`/products?category=${id}`)
        .then(res => dispatch(setProducts(res.data.data.products)));
        /* .finally(() => dispatch(setIsLoading(false))); */
}



export default productsSlice.reducer;


