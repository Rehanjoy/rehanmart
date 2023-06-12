import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Checkout from '../pages/Checkout'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import AddProduct from '../Admin/AddProduct'
import AllProduct from '../Admin/AllProduct'

import Users from '../Admin/Users'
import Dashboard from '../Admin/Dashboard'

function Routers() {
  return <Routes>
    <Route path='/' element={<Navigate to='home' />} />
    <Route path='home' element={<Home />} />
    <Route path='cart' element={<Cart />} />
    <Route path='shop/:id' element={<ProductDetails />} />
    <Route path='shop' element={<Shop />} />

      <Route path='/*' element={<ProtectedRoute/>}>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='dashboard/all-products' element={<AllProduct/>}/>
        <Route path='dashboard/add-products' element={<AddProduct/>}/>
        <Route path='dashboard/users' element={<Users/>}/>
      </Route>




    <Route path='login' element={<Login />} />
    <Route path='signup' element={<Signup />} />

  </Routes>
}
export default Routers