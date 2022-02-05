import {  Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FileBase from 'react-file-base64'
import Input from './Input';
import Styles from './Styles';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../actions/Productactions';

const ProductSub = () => {
    const classes = Styles()
    const initialValues = {name:"",type:"Subscription-based",imageUrl:"",price:""}
    const [productInfo,setProductInfo] = useState(initialValues)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        setProductInfo({...productInfo,[e.target.name]:e.target.value})
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(createProduct(productInfo))
        setProductInfo(initialValues)
        navigate('/')
    }
  return (
      <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                <Typography variant='h6' color='primary'>Enter Product details</Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Typography >Product Type : {productInfo.type}</Typography>
                    <Grid container spacing={1}>
                        <Input name="name" label="Product Name" value={productInfo.name} handleChange={handleChange} />
                        <Input name="price" label="Price" value={productInfo.price} handleChange={handleChange} />
                        <div className={classes.fileInput}>
                            <Typography>Choose a product image</Typography>
                            <FileBase type="file" multiple={false} onDone={({base64})=>setProductInfo({...productInfo,imageUrl:base64})} />
                        </div>
                    </Grid>
                    <Button type="submit" className={classes.button} variant='contained' color='success' >Add Product</Button>
                    
                </form>
            </Paper>
      </Container>
     
  )
};

export default ProductSub;
