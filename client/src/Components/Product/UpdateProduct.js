import {  Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FileBase from 'react-file-base64'
import Input from './Input';
import Styles from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import {  editProduct } from '../../actions/Productactions';

const UpdateProduct = () => {
    const classes = Styles()
    const initialValues = {imageUrl:"",price:"",name:"",type:""}
    
    const [productInfo,setProductInfo] = useState(initialValues)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        setProductInfo({...productInfo,[e.target.name]:e.target.value})
    }
   const {id} = useParams()
   const product = useSelector((state)=>(id? state.products.products.find((product)=>product._id===id ) :null))
   useEffect(()=>{
        if(product) setProductInfo(product)
    },[product])

    const handleSubmit = (e)=>{
        e.preventDefault()

        dispatch(editProduct(id,productInfo))
        setProductInfo(initialValues)
        navigate('/')
    }
  return (
      <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                <Typography variant='h6' color='primary'>Edit Product details</Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                     <Typography >Product Type : {productInfo.type}</Typography>
                     <Typography >Product Name : {productInfo.name}</Typography>
                    <Grid container spacing={1}>
                        <Input name="price" label="Price" value={productInfo.price} handleChange={handleChange} />
                        <div className={classes.fileInput}>
                            <Typography>Choose a product image</Typography>
                            <FileBase type="file" multiple={false} onDone={({base64})=>setProductInfo({...productInfo,imageUrl:base64})} />
                        </div>
                    </Grid>
                    <Button type="submit" className={classes.button} variant='contained' color='success' >Update Product</Button>
                    
                </form>
            </Paper>
      </Container>
     
  )
};

export default UpdateProduct;
