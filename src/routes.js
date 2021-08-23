import showBlogs from './components/ShowBlogs.vue';
import AddBlog from './components/AddBlog.vue';

export default [
    {path:'/',component: showBlogs},
    {path:'/add',component: AddBlog}
]