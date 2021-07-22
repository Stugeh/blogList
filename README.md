# blogList 

### Unbuilt client here: https://github.com/Stugeh/FullstackOpen2020/tree/master/part7/blogList/client

CRUD app made with the mern stack where users can manage a database of blogs.

deployed at https://blog-list-improved.herokuapp.com/ production version has some minor routing issues due to react router and back end routing not working together as intended but the app functions apart from those issues.

## Structure:
* Build: built frontend
* Controllers: backend routers
* Models: Mongo schemas
* Utils: middleware, configs, etc.

**Bugs on the deployed version:** 
* When not logged in the app doesnt give a warning that blog was not added.
* Missing backend routes for blogs/:id for example. Currently user is redirected to the main page if refreshing on those pages where the backend route doesn't exist.
