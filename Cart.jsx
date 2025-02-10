import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToCart,increaseQty, decreaseQty } from '../redux/slice';
import { MdDelete } from 'react-icons/md';
import axios from 'axios'


function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartArray);
  const qty= useSelector((state)=>state.cart.qty)
  const total=useSelector((state)=>state.cart.total)
  const checkOut=async()=>{
        try{
           const res= await fetch("http://localhost:5000/api/auth/payments",{
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              item:[
                {
                  id:item.id,
                  qty:qty,
                  price:itemPrice,
                  name: item.name
                }
              ]
            })
           })
        }
        catch(error){
          console.log(error)
        }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h1>
      <h4 className="text-xl font-bold mb-4 text-center">Total Cart Items: {cartItems.length}</h4>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 flex flex-col items-center bg-white shadow-md">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mb-2" />
              <h3 className="font-semibold text-gray-800 text-center">{item.title}</h3>
              <p className="text-gray-600">₹{item.price}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400 disabled:bg-gray-500"
                  onClick={() => dispatch(decreaseQty(item.id))}
                  disabled={item.qty <= 1}
                >
                  -
                </button>
                <span className="px-2 py-1 bg-gray-200">{item.qty}</span>
                <button
                  className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400 disabled:bg-gray-500"
                  onClick={() => dispatch(increaseQty(item.id))}
                >
                  +
                </button>
                <div className="text-xl font-bold gap-2" >Sub Total: {(item.price * item.qty).toFixed(2)}</div>
              </div>
              <button
                className="mt-2 text-red-500 hover:text-red-700"
                onClick={() => dispatch(removeToCart(item.id))}
              >
                <MdDelete size={24} />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-xl font-bold">Total: ₹{total.toFixed(2)}</div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={checkOut}>
            Checkout
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate('/gallery')}
          >
            Go To Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
