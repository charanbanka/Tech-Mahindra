import mongoose from 'mongoose';

const ProductDetail = mongoose.Schema({
    name:String,
    type:String,
    imageUrl:String,
    price:Number
})

export default mongoose.model('ProductDetails',ProductDetail)