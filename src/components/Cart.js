import React,{useState,useEffect} from 'react'
import './Cart.css'

const Cart = ({state,dispatch}) => {
  const {cart} = state;
  const [total,setTotal] = useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price)*Number(curr.quantity) ,0))
  },[cart])
  return (
    <div className='cart'><h1>Cart</h1>
        {cart.length === 0  && <h1>Cart is Empty</h1>}
        {cart.map(cart =>(
          <div key={cart.id} className='cart_item'>
            <img src={cart.image} className='cart_image' />
            <div className="cart_info">
              <h1>{cart.title}</h1>
              <p>${cart.price}</p>
              <p>Quantity:{cart.quantity}</p>
              <button className='cart_button' onClick={()=> dispatch({type:'ADD_QUAN',payload:cart})}>+</button>
              <button className='cart_button' onClick={()=> dispatch({type:'DECREASE_QUAN',payload:cart})}>-</button>
            </div>
          </div> 
        ))}
      <p>Your total is :${total}</p>
    </div>
  )
}

export default Cart