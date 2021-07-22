/**
 * @jest-environment node
 */
const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/user')

describe('GET works as intended for api/blogs', () => {
    beforeEach(async () => {
        await Blog.deleteMany({})
        const blogs = helper.initialBlogs
            .map(note => new Blog(note))
        const promiseArray = blogs.map(blog => blog.save())
        await Promise.all(promiseArray)
    })
    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('correct amount of blogs is returned.', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body.length).toEqual(6)
    })

    test('blog has a field id', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body[0].id).toBeDefined()
    })
})

describe('POST operation works as intended for api/blogs', () => {
    const newUser = {
        username: 'TestUser',
        name: 'Tuukka Veteli',
        password: 'password'
    }
    let token = undefined

    test('init works', async () => {
        await User.deleteMany({})
        await Blog.deleteMany({})
        await User.insertMany(helper.initialUsers)
        await Blog.insertMany(helper.initialBlogs)
        const blogs = await api.get('/api/blogs')
        const users = await api.get('/api/users')
        expect(blogs.body.length).toEqual(helper.initialBlogs.length)
        expect(users.body.length).toEqual(helper.initialUsers.length)

        await api
            .post('/api/users')
            .send(newUser)
        const response = await api
            .post('/api/login')
            .send({ username: newUser.username, password: newUser.password })
        token = response.body.token
        expect(token.length).not.toEqual(0)
    })

    beforeEach(async () => {
        await Blog.deleteMany({})
        await User.deleteMany({})
        await User.insertMany(helper.initialUsers)
        await Blog.insertMany(helper.initialBlogs)
        await api
            .post('/api/users')
            .send(newUser)
        const response = await api
        .post('/api/login')
        .send({ username: newUser.username, password: newUser.password })
        token = response.body.token
    })

    const newBlog = {
        title: 'blogtitle',
        author: 'testAuthor',
        url: 'www.blog.com',
        likes: 12,
        userId: '5a422a851b54a676234d17f7'
    }

    test('POST goes through with correct code and content type', async () => {
        const res = await api
            .post('/api/blogs')
            .set('Authorization', `bearer ${token}`)
            .send(newBlog)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('Amount of blogs in db grows by one', async () => {
        await api
            .post('/api/blogs')
            .set('Authorization', `bearer ${token}`)
            .send(newBlog)

        const blogs = await api.get('/api/blogs')
        expect(blogs.body.length).toEqual(helper.initialBlogs.length + 1)
    })

    test('New blog is found in the database', async () => {
        await api
            .post('/api/blogs')
            .set('Authorization', `bearer ${token}`)
            .send(newBlog)

        const res = await api.get('/api/blogs')
        const blogs = res.body.map(r => r.title)
        expect(blogs).toContain(newBlog.title)
    })

    test('Likes default to 0', async () => {
        const noLikeBlog = {
            title: 'blogtitle',
            author: 'testAuthor',
            url: 'www.blog.com',
            userId: "5a422a851b54a676234d17f9",
        }
        await api
            .post('/api/blogs')
            .set('Authorization', `bearer ${token}`)
            .send(noLikeBlog)

            .expect(200)
        const res = await api.get('/api/blogs')
        const blogs = res.body.filter(blog => blog.title === noLikeBlog.title)
        expect(blogs[0].likes).toEqual(0)

    })

    test('decline post if no url given', async () => {
        const noUrlBlog = {
            title: 'blogtitle',
            author: 'testAuthor',
            userId: "5a422a851b54a676234d17f8",
        }
        await api
            .post('/api/blogs')
            .set('Authorization', `bearer ${token}`)
            .send(noUrlBlog)
            .expect(400)
    })

    test('decline post if no title given', async () => {
        const noTitleBlog = {
            author: 'testAuthor',
            url: 'www.blog.com',
            userId: "5a422a851b54a676234d17f9",
        }
        await api
            .post('/api/blogs')
            .set('Authorization', `bearer ${token}`)
            .send(noTitleBlog)
            .expect(400)
    })
})

describe('DELETE operation works as intended for api/blogs', () => {
    const newUser = {
        username: 'TestUser',
        name: 'Tuukka Veteli',
        password: 'password'
    }
    const newBlog = {
        title: 'blogtitle',
        author: 'testAuthor',
        url: 'www.blog.com',
    }
    let token = undefined

    test('DELETE test initialization works', async () => { 
        await Blog.deleteMany({})
        await User.deleteMany({})
        await User.insertMany(helper.initialUsers)
        await Blog.insertMany(helper.initialBlogs)

        await api
            .post('/api/users')
            .send(newUser)

        const response = await api
            .post('/api/login')
            .send({ username: newUser.username, password: newUser.password })
        token = response.body.token
        
        await api
            .post('/api/blogs')
            .set('Authorization', `bearer ${token}`)
            .send(newBlog)
        
        const blogs = await api.get('/api/blogs')
        const users = await api.get('/api/users')
        expect(blogs.body.length).toEqual(helper.initialBlogs.length+1)
        expect(users.body.length).toEqual(helper.initialUsers.length+1)
    })

    beforeEach(async () => {
        await Blog.deleteMany({})
        await User.deleteMany({})
        await User.insertMany(helper.initialUsers)
        await Blog.insertMany(helper.initialBlogs)

        await api
            .post('/api/users')
            .send(newUser)

        const response = await api
            .post('/api/login')
            .send({ username: newUser.username, password: newUser.password })
        token = response.body.token
        
        await api
            .post('/api/blogs')
            .set('Authorization', `bearer ${token}`)
            .send(newBlog)
    })

    test('DELETE command goes through and database has one less entry', async () => {
        const blogs = await api.get('/api/blogs/')
        const {id} = blogs.body.find(blog => blog.title === newBlog.title)
        
        await api
            .delete(`/api/blogs/${id}`)
            .set('Authorization', `bearer ${token}`)
            .expect(204)
        
        const blogdb = await api.get('/api/blogs/')
        expect(blogdb.body.length).toEqual(helper.initialBlogs.length)
    })

})

describe('PUT operation works as intended for api/blogs', () => {
    const newUser = {
        username: 'TestUser',
        name: 'Tuukka Veteli',
        password: 'password'
    }
    const newBlog = {
        title: 'blogtitle',
        author: 'testAuthor',
        url: 'www.blog.com',
    }
    let token = undefined
    beforeEach(async () => {
        await Blog.deleteMany({})
        await Blog.insertMany(helper.initialBlogs)
        await api
            .post('/api/users')
            .send(newUser)
        const response = await api
            .post('/api/login')
            .send({ username: newUser.username, password: newUser.password })
        token = response.body.token

        await api
            .post('/api/blogs')
            .set('Authorization', `bearer ${token}`)
            .send(newBlog)
    })

    test('Entry gets updated', async () => {
        const blogs = await api.get('/api/blogs/')
        const blog = blogs.body.find(blog => blog.title === newBlog.title)
        const updatedBlog = { ...blog, likes: 9999, user: blog.user.id}
        await api
            .put(`/api/blogs/${blog.id}`, updatedBlog)
            .set('Authorization', `bearer ${token}`)
            .send(updatedBlog)
            .expect(200)
        const newBlogs = await api.get('/api/blogs/')
        
        expect(newBlogs.body.find(blog => blog.title === newBlog.title).likes).toEqual(9999)
    })
})

describe('Adding user', () => {
    beforeEach(async () => {
        await User.deleteMany({})
        await User.insertMany(helper.initialUsers)
    })
    const newUser = {
        username: 'Stugehh',
        name: 'TuukkaV',
        password: 'passwordd'
    }
    const uNamelessUser = {
        name: 'Tuukka',
        password: 'password'
    }
    const shortPwUser = {
        username: 'Stuge',
        name: 'Tuukka',
        password: 'pw'
    }

    test('User added', async () => {
        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })
    test('Usernameless user is rejected', async () => {
        await api
            .post('/api/users')
            .send(uNamelessUser)
            .expect(400)
    })
    test('Passwords shorter than 3 symbols are rejected', async () => {
        await api
            .post('/api/users')
            .send(shortPwUser)
            .expect(400)
    })
})

describe('Getting user list', () => {
    beforeEach(async () => {
        await User.deleteMany({})
        await User.insertMany(helper.initialUsers)
    })

    test('Get returns all users', async () => {
        const blogDb = await api.get('/api/users')
        expect(blogDb.body.length).toEqual(helper.initialUsers.length)
        expect(blogDb.body[0].name).toEqual(helper.initialUsers[0].name)
    })
})

afterAll(() => {
    mongoose.connection.close()
})