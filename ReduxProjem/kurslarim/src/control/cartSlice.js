import {createSlice} from "@reduxjs/toolkit";
import courseItems from "../courseItems"
const initialState = {
    cartItems:courseItems,
    quantity:5,
    total:0
}

const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        //clearcart aksiyonunu tanımlıyoruz
        clearCart:(state)=>{
            state.cartItems=[];
        },
        removeCartItem:(state,action)=>{
           // console.log(action.payload) buradaki payload biz id olarak gönderdik
           const itemId= action.payload;
           //silmek istediğimiz id değerini filtreleyip state deki cartItems listesini güncellemiş olduk
           state.cartItems=state.cartItems.filter((item)=>item.id !==itemId);
            
        },
        increase:(state,action)=>{
            const itemId= action.payload;
            const cartItem = state.cartItems.find((item)=>item.id===itemId);
            cartItem.quantity +=1;
        },
         decrease:(state,action)=>{
            const itemId= action.payload;
            const cartItem = state.cartItems.find((item)=>item.id===itemId);
            cartItem.quantity -=1;
        },
        calculateTotal:(state)=>{
            let total=0;
            let quantity=0;
            state.cartItems.forEach((item)=>{
               total += item.quantity*item.price;
               quantity += item.quantity;
            });
            //hesaplamayı yaptıktan sonra asıl statei güncellemeyi yapıyoruz
            state.quantity=quantity;
            state.total=total;
        }
    }
});

export const {clearCart, removeCartItem, increase , decrease,calculateTotal}=cartSlice.actions;

export default cartSlice.reducer;