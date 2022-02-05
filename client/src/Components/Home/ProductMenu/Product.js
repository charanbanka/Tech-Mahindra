import { Button, CircularProgress, Paper, Typography } from '@material-ui/core';
import React from 'react';
import jsPDF from 'jspdf'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { getCartItem } from '../../../actions/Productactions';

import Styles from './Styles';

const Product = ({product}) => {
 const classes = Styles()
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const carts = useSelector((state)=>state.products.cart)
 const handleCart = ()=>{
   const isfound = carts.find((cart)=>cart._id===product._id)
   if(!isfound)
        dispatch(getCartItem(product._id))
   navigate('/products/cart')
 }
 const handleClick=()=>{
   navigate(`/product/edit/${product._id}`)
 }
 const handleDownload = ()=>{
   console.log(product.name)
   if(product.type=="Downloadable")
   {
    var doc = new jsPDF('landscape','px','a4','false')
    doc.text(20, 20, 'Dummy PDF file');
    doc.save('dummypdf.pdf')
    return <Typography>Successfully downloaded</Typography>
   }
   else if(product.type=="Subscription-based")
      navigate(`/product/sub/${product._id}`)
   else 
    navigate(`/product/delivery/${product._id}`)
    
   //dispatch({type:"REMOVECART",payload:product._id})
 }
      if (!product) {
        return (
          <Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em" />
          </Paper>
        );
      }
  return (
    <Paper className={classes.paper}>
      <div className={classes.edit}>
       <Button onClick={handleClick} >Edit</Button>
      </div>
       
        <img className={classes.image} src={product.imageUrl} title={product.title} />
         <div className={classes.content}>
         <Typography variant="h5" color="secondary" >{product.type}</Typography>
           <Typography variant="h5" color="primary" >{product.name}</Typography>
           <Typography variant='h6' color='inherit'>₹ {product.price}</Typography>
         </div>
         <div className={classes.buttons}>
         <Button variant="contained" color="primary" size='small'style={{marginRight:"16px"}} onClick={handleCart} > Add to Cart</Button>
           <Button variant="contained" color="secondary" size='small' onClick={handleDownload} > Buy Now</Button>
         </div>
    </Paper>
  )
};

export default Product;
