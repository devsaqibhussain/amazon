import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    products: [],
    productsNumber: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const addProductExists = state.products.find((product)=>product.id === action.payload.id);
            console.log(action.payload.quantity)
            if (addProductExists){
                addProductExists.quantity = addProductExists.quantity + parseInt(action.payload.quantity);
            } else{
                state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)})
            }
            state.productsNumber = state.productsNumber + parseInt(action.payload.quantity)
            
        },
        removeFromCart: (state,action) =>{
            // Find the product to be removed from array.
            const productToBeRemoved = state.products.find((product)=>product.id === action.payload)
            // Adjust the productsNumber after removing it.
            state.productsNumber = state.productsNumber - productToBeRemoved.quantity
            // Find the index of product to be removed.
            const index = state.products.findIndex((product)=>product.id === action.payload)
            // Removed the product.
            state.products.splice(index,1);
        }
        
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;