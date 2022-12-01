import React,{useEffect} from 'react'
import Product from './Product'
import './Products.css'

const Products = ({state,dispatch}) => {
  return (
    <div className='products'>
      {state.products.map(product =>{
        return <Product  key={product.id} product={product} dispatch={dispatch} state={state}/>
      })}
    </div>
  )
}

export default Products