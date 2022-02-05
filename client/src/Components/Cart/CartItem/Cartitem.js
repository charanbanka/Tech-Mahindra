import { Button, CircularProgress, Paper, Typography } from '@material-ui/core';
import React from 'react';
import jsPDF from 'jspdf';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Styles from './Styles';

const Cartitem = ({product,cart}) => {
    const classes= Styles()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //const carts = useSelector((state)=>state.products.cart)
    const handleRemove = ()=>{
      dispatch({type:"REMOVECART",payload:product._id})
      
      if(!cart) navigate('/')
    }
    const handleBuy = ()=>{
        if(product.type=="Downloadable")
        {
         var doc = new jsPDF('landscape','px','a4','false')
         doc.text(20, 20, 'Dummy PDF file');
         doc.save('dummypdf.pdf')
        }
        else if(product.type=="Subscription-based")
             navigate(`/product/sub/${product._id}`)
        else
            navigate(`/product/delivery/${product._id}`)

        dispatch({type:"REMOVECART",payload:product._id})

    }
  return (
    <Paper className={classes.paper}>
        <img className={classes.image} src={product.imageUrl} title={product.title} />
        <div className={classes.content}>
        <Typography variant="h5" color="secondary" >{product.type}</Typography>
        <Typography variant="h5" color="primary" >{product.name}</Typography>
        <Typography variant='h6' color='inherit'>₹ {product.price}</Typography>
        </div>
        <div className={classes.buttons}>
        <Button variant="contained" color="primary" size='small'style={{marginRight:"16px"}} onClick={handleRemove} > Remove from Cart</Button>
        <Button variant="contained" color="secondary" size='small' onClick={handleBuy} > Buy Now</Button>
        </div>
    </Paper>
  )
};

export default Cartitem;
