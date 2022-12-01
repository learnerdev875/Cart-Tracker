import React from 'react'
import './Header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Outlet } from 'react-router';

const Header = () => {
  return (
    <>
    <div className='header-container'>
        <h1>My <ShoppingCartOutlinedIcon fontSize='large' style={{color:'red'}}/></h1> 
    </div>
    <Outlet/>
    </>
  )
}

export default Header