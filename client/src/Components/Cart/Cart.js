import { CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import React  from 'react';
import { useSelector } from 'react-redux';
import Cartitem from './CartItem/Cartitem';
import Styles from './Styles'

const Cart = () => {
  const classes= Styles()
  const {cart,isLoading} = useSelector((state)=>state.products)
  
  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  
   
  return (
    <>
      <Typography variant='h4' color='secondary' className={classes.typograpy}>Your Cart</Typography>
      <Grid container spacing={2} className={classes.container}>
          {cart.map((product)=>(
              <Grid key={product._id} item xs={12} sm={6} md={4} lg={4}>
                  <Cartitem product={product} cart={cart} />
              </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Cart;
