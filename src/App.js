import React,{useReducer,useEffect} from 'react'
import  './App.css'
import Header from './components/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Products from './components/Products'
import reducer from './reducers/cartReducer'
import Cart from './components/Cart'
import Axios from 'axios'

const App = () => {
  const [state,dispatch] = useReducer(reducer,{
    products:[],
    cart:[]
  })
  useEffect(()=>{
    Axios.get('https://fakestoreapi.com/products')
    .then(res => dispatch({type:'ADD_PRODUCTS',payload:res.data}))
    .catch(error => alert(error.message))
  },[])
  return (
    <div className='main'>
     <Header/>
     <div className='main-container'>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch}/>
     </div>
    </div>
  )
}

export default App