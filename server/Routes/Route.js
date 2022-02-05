import express from 'express';
import { createProduct, editProduct, getCartItem, getProducts } from '../Controllers/Products.js';

const router = express.Router()

router.get('/',getProducts)
router.get('/cart/:id',getCartItem)
router.post('/',createProduct)
router.patch('/:id',editProduct)

export default router;