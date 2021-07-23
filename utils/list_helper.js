const _ = require('lodash')
const logger = require('./logger')

const dummy = () => 1

const totalLikes = (blogs) => {
  const likesTot = blogs.reduce((sum, blog) => sum + blog.likes, 0)
  return likesTot
}

const favoriteBlog = (blogs) => {
  // discard empty lists
  if (!blogs[0]) {
    return {}
  }
  // find object with most likes
  const max = blogs.reduce((prev, curr) => ((prev.likes > curr.likes) ? prev : curr))
  logger.info('max', max)
  return {
    title: max.title,
    author: max.author,
    likes: max.likes,
  }
}

const mostBlogs = (blogs) => {
  // discard empty lists
  if (!blogs[0]) {
    return {}
  }
  // create new list of objects with the author names and the number of blogs. Descending order.
  const totalBlogs = _.chain(blogs)
    .groupBy('author')
    .map((blogList, name) => ({
      author: name,
      blogs: blogList.length,
    }))
    .orderBy('blogs', 'desc')
    .value()
  return totalBlogs[0]
}

const mostLikes = (blogs) => {
  if (!blogs[0]) {
    return {}
  }
  const list = _.chain(blogs)
    .groupBy('author')
  // sum each authors likes and create new objects
    .map((blogList, name) => ({
      author: name,
      likes: _.sumBy(blogList, 'likes'),
    }))
    .orderBy('likes', 'desc')
    .value()
  logger.info('***LIST***', list)
  return list[0]
}

module.exports = {
  dummy, totalLikes, mostBlogs, mostLikes, favouriteBlog: favoriteBlog,
}
