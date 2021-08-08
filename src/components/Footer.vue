<template>
  <footer class="flex justify-center bg-gray-900 color-white-900 py-9">
    <div class="text-white">&#169;{{ copyright }}</div>
  </footer>
</template>

<script>
import bus from "../main";
export default {
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      copyright: "Copyright  2020-" + new Date().getFullYear(),
    };
  },
  created() {
    bus.$on("nameChanged", (data) => {
      this.name = data;
    });
  },
};
</script>

<style scoped>
</style>>

 