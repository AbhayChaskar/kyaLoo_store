// import { ActionTypes } from "../constants/actionTypes"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [{
        id: 1,
        title: "Product 1",
        category: "Category 1",
    }],
}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
    },
})

export const { setProducts } = productSlice.actions
export default productSlice.reducer