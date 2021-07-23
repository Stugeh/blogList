import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Togglable from './togglable'
import blogService from '../services/blogs'
//
// Renders a single blog in the list
//

const Blog = ({ blog, setBlogs, testHandler = () => {} }) => {
  const [updatedBlog, setBlog] = useState(blog)
  const blogRef = useRef()

  const addLike = async (event) => {
    event.preventDefault()
    testHandler()
    try {
      const newBlog = {
        ...updatedBlog,
        likes: updatedBlog.likes + 1,
        user: updatedBlog.user.id,
      }
      setBlog(await blogService.update(blog.id, newBlog))
    } catch (e) {
      throw new Error(e)
    }
  }

  const deleteBlog = async () => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`delete blog ${blog.title}?`)) {
      setBlog(await blogService.removeBlog(blog.id))
      setBlogs(await blogService.getAll())
    }
  }

  return (
    <div className="blog">
      Title:
      {' '}
      {updatedBlog.title}
      <br />
      Author:
      {' '}
      {updatedBlog.author}
      <Togglable buttonLabel="expand" ref={blogRef} className="moreInfo">
        Likes:
        {' '}
        {updatedBlog.likes}
        <button onClick={addLike} id="likeBtn">like</button>
        <br />
        URL:
        {' '}
        {updatedBlog.url}
        <br />
        <button onClick={deleteBlog}>delete</button>
        <br />
      </Togglable>
      <br />
    </div>
  )
}

Blog.displayName = 'Blog'
Blog.propTypes = {
  blog: PropTypes.object,
  setBlogs: PropTypes.func,
}

export default Blog
