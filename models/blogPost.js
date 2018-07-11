const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 * ========================================= 
 * Create a blog post schema and model
 * ========================================= 
 */

 const blogPostSchema = new Schema({
     title: {
         type: String,
         required: [true, 'Title is required']
     },
     content: {
         type: String,
         required: [true, 'Content is required']
     },
    createdAt: {
         type: Date,
         default: Date.now
     }
 });


 const blogPost = mongoose.model('blogPost', blogPostSchema);

 module.exports = blogPost;