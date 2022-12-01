import React from 'react'
import './Product.css'

const Product = ({state,product,dispatch}) => {
  return (
    <div className='product'>
      <img src={product.image} alt="product_image" className='product_image' />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        {state.cart.some(p => p.id===product.id)?<button className='remove_cart' onClick={()=> dispatch({type:'REMOVE_FROM_CART',payload:product.id})}>Remove From Cart</button>:<button className='add_cart' onClick={()=>dispatch({type:'ADD_TO_CART',
        payload:{
          id:product.id,
          title:product.title,
          price:product.price,
          image:product.image,
          quantity:1
        }})}>Add To Cart</button>}
      </div>
    </div>
  )
}

export default Product