export default{
    computed:{
        filteredBlogs(){
          console.log(this.posts);
            return this.posts.filter((post)=>{
              return post.title.toLowerCase().match(this.title.toLowerCase())
            })
          }
    }
}