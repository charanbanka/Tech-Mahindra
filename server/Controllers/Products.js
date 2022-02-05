
import ProductDetails from "../models/ProductDetails.js"
import mongoose from 'mongoose';


export const getProducts = async(req,res) =>{
    try {
        const Products = await ProductDetails.find()
        res.status(200).json(Products)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const getCartItem = async(req,res) =>{
    const {id} = req.params

    console.log(id)
    try {
        const Products = await ProductDetails.findById(id)
        //console.log(Products)
        res.status(200).json(Products)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const createProduct = async(req,res) =>{
    const newProduct = new ProductDetails(req.body)
    try {
        await newProduct.save()
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(404).json(error.message)
    }
}


export const editProduct = async(req,res) =>{
    const {id:_id} = req.params
    const product = req.body
    
    try {
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`)

        const Products = await ProductDetails.findByIdAndUpdate(_id,product,{new:true})
        res.status(200).json(Products)
    } catch (error) {
        res.status(404).json(error.message)
    }
}