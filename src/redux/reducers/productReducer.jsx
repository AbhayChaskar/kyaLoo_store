import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [{
        id: 1,
        title: "Shirts",
        category: "Linen",
    }],
}

const productSlice = createSlice({
    name: 'kyaLoo_store',
    initialState,
    reducers: {
      setProducts: (state, action) => {
        state.products = action.payload;
      },
    },
  });
  
  export const { setProducts } = productSlice.actions;
  export default productSlice.reducer; 

// export const productReducer = (state = initialState, {type, payload}) => {
//     switch (type) {
//         case ActionTypes.SET_PRODUCTS:
//             return state
//         default:
//             return state
//     }
// }