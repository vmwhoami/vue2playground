export default{
    computed:{
        filteredBlogs(){
            return this.posts.filter((post)=>{
              return post.API.toLowerCase().match(this.searchField.toLowerCase())
            })
          }
    }
}