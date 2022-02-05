import React, { useState } from 'react';
import Styles from './Styles';
import {useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Button, Container, Paper, TextField, Typography} from '@material-ui/core'

const Delivery = () => {
    const classes = Styles()
    const {id } = useParams()
    const [isdel,setIsdel] =useState(true)
    const [address,setAdress] =useState('')
    const product = useSelector((state)=>(id? state.products.products.find((product)=>product._id===id):null))
    console.log(address)
  return (
    <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                <Typography variant='h6' color='primary'>Product details</Typography>
                <Typography >Product Type : {product.type}</Typography>
                <Typography >Product Name : {product.name}</Typography>
                <Typography >Product Price : {product.price}</Typography>
                {isdel?(<>
                    <TextField value={address} onChange={(e)=>setAdress(e.target.value)} label="Enter Adress"  required ></TextField>
                    <Button onClick={()=>{if(address) setIsdel(!isdel)}} className={classes.button} variant='contained' color='primary' >Buy Product</Button>
                </>):
                (
                    <div style={{display:"grid" , marginLeft:"40px"}}>
                      <Typography >Address : {address}</Typography>
                      <Typography color='secondary'>In Transit</Typography>
                    </div>
                )
                }
               
            </Paper>
        </Container>
  )
};

export default Delivery;
