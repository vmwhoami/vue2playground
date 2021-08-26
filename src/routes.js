import showBlogs from './components/ShowBlogs.vue';
import AddBlog from './components/AddBlog.vue';
import SingleBlog from './components/SingleBlog.vue';

export default [
    {path:'/',component: showBlogs},
    {path:'/add',component: AddBlog},
    {path:'/blog/:id',component: SingleBlog},
]