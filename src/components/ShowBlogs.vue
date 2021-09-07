<template>
  <div>
    <h2>Show blogs</h2>
    <input
      class="mx-7 lg:mx-6 mt-32 flex-grow"
      type="text"
      v-model="searchField"
      placeholder="SearchBox"
    />
    <main class="mx-7 lg:mx-6 mt-32 flex-grow">
      <div class="flex flex-wrap -mx-2">
        <div
          class="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2"
          v-for="post in filteredBlogs"
          :key="post.title"
        >
          <router-link :to="'blog/' + post.id">
            <div class="rounded shadow-md h-full">
              <div class="px-6 py-5">
                <p class="text-gray-700 mb-1">{{ post.timeStamp }}</p>
                <h2>
                  {{ post.title }}
                </h2>
                <div v-html="post.textField"></div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMain";
import purifyText from "../mixins/purifyText";
import { mapState } from "vuex";

export default {
  data() {
    return {
      posts: [],
      searchField: "",
    };
  },
  created() {
    this.$http
      .get(
        "https://vuejs-18224-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const arrayOfObjects = [];
        for (let key in data) {
          data[key].id = key;
          arrayOfObjects.push(data[key]);
        }
        this.posts = arrayOfObjects;
        console.log(arrayOfObjects);
      });
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    theme: {
      bind: (el, binding) => {
        if (binding.value == "wide") {
          el.style.maxWidth = "800px";
          el.style.margin = "0 auto";
          el.style.padding = "10px 20px";
        }
      },
    },
  },
  mixins: [searchMixin, purifyText],
  computed: mapState({
    someName: (state) => state.propertiesName,
  }),
};
</script>
.red
<style scoped>
</style>



