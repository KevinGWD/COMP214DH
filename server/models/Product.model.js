import mongoose from'mongoose';
		 const ProductSchema = new mongoose.Schema({
      name: {
        type: String,
        trim: true,
        required: 'Name is required'
        },
          description: {
            type: String,
              trim: true,
            required: 'description is required'
            },
            price: {
            type: Number,
            required: 'price is required'
            },
            quantity: {
            type: Number,
            required: 'quantity is required'            
            },
            category: {
            type: String,
            required: 'catagory is required'
            },
        });
     const ProductModel = mongoose.model('Product', ProductSchema);

     export default ProductModel
