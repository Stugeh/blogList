/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  url: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [{ content: String, id: Number }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

})

blogSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.__v
  },
})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog
