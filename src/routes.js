import showBlogs from './components/ShowBlogs.vue';
import AddBlog from './components/AddBlog.vue';
import ListBlogs from './components/ListBlogs.vue'

export default [
    {path:'/',component: showBlogs},
    {path:'/add',component: AddBlog},
    {path:'/list',component: ListBlogs}
]