<template>
  <footer>
    <div>&#169;{{ copyright }}</div>
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
      copyright: "Copyright 2020-" + new Date().getFullYear(),
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
footer {
  display: flex;
}
</style>>

 