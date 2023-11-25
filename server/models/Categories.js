const mongoose = require('mongoose');
		 const CategoriesSchema = new mongoose.Schema({
      name: {
        type: String,
        trim: true,
        required: 'Name is required'
        }})
   module.exports = mongoose.model('Categories', CategoriesSchema);
