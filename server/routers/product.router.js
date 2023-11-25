import productContoller from '../controller/product.contoller.js';

import express from 'express'

const router=express.Router();

    router.route('/').get(productContoller.Retrieve )
    router.route('/').post(productContoller.Create )
    router.route('/').delete(productContoller.DeleteAll)
    router.param('productId', productContoller.FindItem)
    router.route('/:productId').get(productContoller.ShowSingleItem)
    router.route('/:productId').put(productContoller.Update)
    router.route('/:productId').delete(productContoller.Delete)

export default router;
