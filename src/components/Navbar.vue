<template>
  <nav>
    <a href="#" @click="changeName">{{ logo }}</a>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="link.link">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import bus from "../main";

export default {
  name: "Navbar",
  props: {
    logo: {
      type: String,
      require: true,
    },
    links: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeName() {
      // this.$emit("changeName", 'hellllllllllllllo there')
      this.logo = "Sume change";
      bus.$emit("nameChanged", "this is in the navbar");
    },
  },
  // beforeCreate() {
  //   alert("Runs before creation");
  // },
  // created() {
  //   alert("Created");
  // },
  // beforeMount() {
  //   alert("Before Mount");
  // },
  // mounted() {
  //   alert("Mounted");
  // },
  // beforeUpdate() {
  //   alert("before update");
  // },
  // updated() {
  //   alert("Updated");
  // },
};
</script>
  
<style scoped>
nav {
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: space-between;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  display: inline-block;
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: underline;
}
</style>
