import React, { useState } from 'react';
import Styles from './Styles';
import {useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Button, Container, Paper, TextField, Typography} from '@material-ui/core'

const Subscription = () => {
    const classes = Styles()
    const {id } = useParams()
    const [issub,setIssub] =useState(true)
    const [expDate,setExpDate] =useState('')
    const product = useSelector((state)=>(id? state.products.products.find((product)=>product._id===id):null))
    console.log(expDate)
  return (
    <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                <Typography variant='h6' color='primary'>Product details</Typography>
                <Typography >Product Type : {product.type}</Typography>
                <Typography >Product Name : {product.name}</Typography>
                <Typography >Product Price : {product.price}</Typography>
                {issub?(<>
                        <Typography >Select Expiry Date(*)</Typography>
                    <TextField value={expDate} onChange={(e)=>setExpDate(e.target.value)} type="date" required ></TextField>
                    <Button onClick={()=>{if(expDate) setIssub(!issub)}} className={classes.button} variant='contained' color='primary' >Buy Product</Button>
                </>):
                (
                    <>
                    <Typography color='secondary' >Product bought Successfuly </Typography>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                      <Typography >Product Expiry Date : {expDate}</Typography>
                    </div>
                    </>
                )
                }
               
            </Paper>
        </Container>
  )
};

export default Subscription;
