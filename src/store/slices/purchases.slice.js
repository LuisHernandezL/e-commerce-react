import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

const baseUrl = 'https://ecommerce-api-react.herokuapp.com/api/v1';
export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases:(state,action)=>{
            return action.payload
        }

    }
})

export const { setPurchases } = purchasesSlice.actions;

export const getPurchases = () => (dispatch) => {
    /* dispatch(setIsLoading(true)); */
    return axios.get(baseUrl+"/purchases",getConfig())
        .then(res => dispatch(setPurchases(res.data.data.purchases)))
        /* .finally(() => dispatch(setIsLoading(false))); */
}

export default purchasesSlice.reducer;
