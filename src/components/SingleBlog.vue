<template>
  <article class="max-w-5xl mx-auto">
    <header class="mb-14">
      <h1
        class="
          text-3xl text-center
          font-bold
          leading-normal
          text-gray-900
          mt-0
          mb-3
        "
      >
        <div class="text-center">
          {{ blog.title }}
        </div>
      </h1>
    </header>
    <article v-html="blog.textField">{{ blog.textField }}</article>
  </article>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http
      .get(
        `https://vuejs-18224-default-rtdb.europe-west1.firebasedatabase.app/posts/${this.id}/.json`
      )
      .then((data) => {
         return data.json();
      })
      .then((data) => {
         this.blog = data;
      });
  },
};
</script>

<style>
</style>