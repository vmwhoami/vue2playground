export default{
    computed:{
        filteredBlogs(){
          
            return this.posts.filter((post)=>{
              return post.title.toLowerCase().match(this.title.toLowerCase())
            })
          }
    }
}