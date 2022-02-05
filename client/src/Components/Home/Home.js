import { Card, CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Product from './ProductMenu/Product';

import Styles from './Styles';

    
const Home = () => {
    const classes = Styles();
    const {products,isLoading} = useSelector((state)=>state.products)
    if (isLoading) {
      return (
        <Paper elevation={6} className={classes.paper}>
          <CircularProgress size="7em" />
        </Paper>
      );
    }
    //console.log(Products)
  return (
    
    <Grid container spacing={2} className={classes.container}>
        {products.map((product)=>(
            <Grid key={product._id} item xs={12} sm={6} md={4} lg={4}>
                <Product product={product} />
                </Grid>
        ))}
    </Grid>
      
  )
};

export default Home;
