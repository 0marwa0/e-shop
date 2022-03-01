import {createSlice} from "@reduxjs/toolkit"

const cartSlice =createSlice({
name:"cart",
initialState:{
    cart:[],
}
,reducers:{
    addProduct(state,action){
        state.cart.push(action.payload)
        console.log(state.cart);
    },
    removeProduct(state,action){
        const index=state.cart.findIndex(
            cart=>cart.id===action.payload
        )
        state.cart.splice(index,1)
    }

}

}




)
export const {addProduct,removeProduct}=cartSlice.actions
export default cartSlice.reducer;