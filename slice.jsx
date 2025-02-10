import {createSlice} from '@reduxjs/toolkit'
import {ToastContainer,toast} from 'react-toastify'
const initialState={
    cartArray:[],
    total:0,
    qty:0
}

const CartSlice= createSlice({
    name:"CART",
    initialState,
    reducers:{

        addToCart(state,action){
            const exits= state.cartArray.findIndex((val)=>val.id===action.payload.id)
            if(exits==-1){
                state.cartArray.push({...action.payload,qty:1})
                state.total+= Math.floor(action.payload.price)
                toast.success("Item Added successfully")
                console.log(exits)
            }
            else{
                state.cartArray[exits].qty+=1;
                state.total+= Math.floor(action.payload.price)
                toast.error("Item already there..")
            } 
        },
        
        removeToCart(state,action){
         state.cartArray= state.cartArray.filter((val)=>val.id!= action.payload)
         state.total-=action.payload.qty* Math.floor(action.payload.price)
        },
        increaseQty: (state, action) => {
            const item = state.cartArray.find((item) => item.id === action.payload);
            if (item) {
              item.qty += 1;
            }
            state.total = state.cartArray.reduce((sum, item) => sum + item.price * item.qty, 0);
          },
          decreaseQty: (state, action) => {
            const item = state.cartArray.find((item) => item.id === action.payload);
            if (item && item.qty > 1) {
              item.qty -= 1;
            }
            state.total = state.cartArray.reduce((sum, item) => sum + item.price * item.qty, 0);
          },
    }
})


export default CartSlice.reducer
export const {addToCart,removeToCart,increaseQty,decreaseQty}= CartSlice.actions  