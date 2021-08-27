import showBlogs from './components/ShowBlogs.vue';
import NewBlog from './components/NewBlog.vue';
import SingleBlog from './components/SingleBlog.vue';

export default [
    {path:'/',component: showBlogs},
    {path:'/new',component: NewBlog},
    {path:'/blog/:id',component: SingleBlog},
]