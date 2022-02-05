import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { getProducts } from './actions/Productactions';
import Buy from './Components/Buy/Buy';
import Cart from './Components/Cart/Cart';
import Delivery from './Components/Delivery/Delivery';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import ProductDelivery from './Components/Product/ProductDelivery';
import ProductSub from './Components/Product/ProductSub';
import UpdateProduct from './Components/Product/UpdateProduct';
import Subscription from './Components/Subscription/Subscription.js';
const App = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[] )
    
  return (
      <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/product/add/1" element={<Product/>} />
                <Route exact path="/product/add/2" element={<ProductSub/>} />
                <Route exact path="/product/add/3" element={<ProductDelivery/>} />
                <Route exact path="/product/edit/:id" element={<UpdateProduct/>} />
                <Route exact path="/products/cart" element={<Cart/>} />
                <Route exact path="/products/buy" element={<Buy/>} />
                <Route exact path="/product/sub/:id" element={<Subscription/>} />
                <Route exact path="/product/delivery/:id" element={<Delivery/>} />
            </Routes>
        </Container>
      </BrowserRouter>
  )
};

export default App;
