
import { isValidObjectId } from 'mongoose';
import ProductModel from '../models/Product.model.js';

const Create = async (req, res) => {
    const product = new ProductModel(req.body);
    try {
        await product.validate();
        console.log('Product schema is valid');
        try {
            await product.save();
            res.status(200).json({ message: "Successfully signed up !" })
        }
        catch {
            (err) => {
                res.status(400).json({
                    error: `${err.message}`
                })
            }
        }
    } catch (err) {
        res.status(200).send('Please enter the document according to document schema')
        console.error(err.message);
    }
}

const Update = async (req, res, next) => {
    try {
        await ProductModel.findByIdAndUpdate(req.profile.id, req.body)
        const product = await ProductModel.findById(req.profile.id)
        res.status(200).send(`${product}\n This product is updated !`)
    }
    catch {
        (err) => {
            res.status(400).json({
                error: `${err.message}`
            })
        }
    }
}

const Retrieve = async (req, res) => {
    try {
        let results = null;
        if (req.query.name) {
            const kw = req.query.name
            results = await ProductModel.find({'name': new RegExp(kw, 'i')})
        } else {
            results = await ProductModel.find()
        }
        if (results.length > 0) {
            return res.status(200).send(results)
        } else {
            res.send('nothing found')
        }
    }
    catch {
        (err) => {
            res.status(400).json({
                error: `${err.message}`
            })
        }
    }
}


const Delete = async (req, res, next) => {
    try {
        await ProductModel.deleteOne(req.profile);
        res.status(200).send(`${req.profile}\n This product has been deleted `)
    }
    catch {
        (err) => {
            res.status(400).json({
                error: `${err.message}`
            })
        }
    }
}

const FindItem = async (req, res, next, id) => {
    if (isValidObjectId(id)) {
        try {
            const product = await ProductModel.findById(id);
            if (product) {
                req.profile = product;
                next()
            }
            else {
                res.send('Item not found !')
            }
        }
        catch {
            (err) => {
                res.status(400).json({
                    error: `${err.message}`
                })
            }
        }
    } else {
        res.send('Invalid MongoDB ID!')
    }
}

const ShowSingleItem = (req, res, next) => {
    try {
        res.status(200).send(req.profile);
    }
    catch {
        (err) => {
            res.status(400).json({
                error: `${err.message}`
            })
        }
    }
}

const DeleteAll = async (req, res, next) => {
    try {
        await ProductModel.deleteMany({});
        res.status(200).json({ message: "All products are deleted !" })
    }
    catch {
        (err) => {
            res.status(400).json({
                error: `${err.message}`
            })
        }
    }
}

const productContoller = { Create, Update, Retrieve, Delete, DeleteAll, ShowSingleItem, FindItem }
export default productContoller;