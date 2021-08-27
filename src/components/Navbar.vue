<template>
  <nav class="bg-white dark:bg-gray-800">
    <div class="container p-6 mx-auto">
      <a
        class="
          block
          text-2xl
          font-bold
          text-center text-white-800
          dark:text-white
          lg:text-3xl
          hover:text-gray-700
          dark:hover:text-gray-300
        "
        href="/"
      >
        <svg
          class="vmlogo"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="32"
          viewBox="0 0 52 32"
        >
          <title>vmlogo8-Converted</title>
          <path
            d="M15.626 6.090l4.473-5.577c0.134-0.167 0.323-0.257 0.535-0.257l28.899 0.022c0.58 0 0.892 0.669 0.535 1.115l-4.796 5.967-19.419 24.125c-0.279 0.346-0.792 0.346-1.071 0l-24.215-30.093c-0.357-0.446-0.045-1.115 0.535-1.115h7.205c0.212 0 0.402 0.089 0.535 0.257l15.939 19.798c0.279 0.346 0.792 0.346 1.071 0l10.44-12.972 0.825-0.993c0.368-0.446 0.056-1.127-0.524-1.127v0c-0.212 0-0.402 0.089-0.535 0.257l-10.206 12.615c-0.279 0.346-0.792 0.335-1.071 0l-3.58-4.462c-0.201-0.257-0.201-0.613 0-0.859l5.209-6.436c0.368-0.446 0.045-1.115-0.535-1.127h-0.245c-0.212 0-0.402 0.089-0.535 0.257l-4.818 5.923c-0.279 0.335-0.792 0.335-1.071 0l-3.58-4.462c-0.201-0.245-0.201-0.602 0-0.859z"
          ></path>
        </svg>
      </a>

      <div
        class="
          flex
          items-center
          justify-center
          mt-6
          text-gray-600
          capitalize
          dark:text-gray-300
        "
      >
        <a
          href="/"
          class="
            text-gray-800
            dark:text-gray-200
            border-b-2 border-blue-500
            mx-1.5
            sm:mx-6
          "
          >home</a
        >

        <a
          href="/new"
          class="
            border-b-2 border-transparent
            hover:text-gray-800
            dark:hover:text-gray-200
            hover:border-blue-500
            mx-1.5
            sm:mx-6
          "
          >new</a
        >

        <a
          href="#"
          class="
            border-b-2 border-transparent
            hover:text-gray-800
            dark:hover:text-gray-200
            hover:border-blue-500
            mx-1.5
            sm:mx-6
          "
          >pricing</a
        >

        <a
          href="#"
          class="
            border-b-2 border-transparent
            hover:text-gray-800
            dark:hover:text-gray-200
            hover:border-blue-500
            mx-1.5
            sm:mx-6
          "
          >blog</a
        >

        <a
          href="#"
          class="
            border-b-2 border-transparent
            hover:text-gray-800
            dark:hover:text-gray-200
            hover:border-blue-500
            mx-1.5
            sm:mx-6
          "
        >
          <svg
            class="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m.75 19h7.092c4.552 0 6.131-6.037 2.107-8.203 2.701-2.354 1.029-6.797-2.595-6.797h-6.604c-.414 0-.75.336-.75.75v13.5c0 .414.336.75.75.75zm.75-13.5h5.854c3.211 0 3.215 4.768 0 4.768h-5.854zm0 6.268h6.342c3.861 0 3.861 5.732 0 5.732h-6.342z"
            />
            <path
              d="m18.374 7.857c-3.259 0-5.755 2.888-5.635 5.159-.247 3.28 2.397 5.984 5.635 5.984 2.012 0 3.888-1.065 4.895-2.781.503-.857-.791-1.613-1.293-.76-.739 1.259-2.12 2.041-3.602 2.041-2.187 0-3.965-1.668-4.125-3.771 1.443.017 4.136-.188 8.987-.033.016 0 .027-.008.042-.008 2-.09-.189-5.831-4.904-5.831zm-3.928 4.298c1.286-3.789 6.718-3.676 7.89.064-4.064.097-6.496-.066-7.89-.064z"
            />
            <path
              d="m21.308 6.464c.993 0 .992-1.5 0-1.5h-5.87c-.993 0-.992 1.5 0 1.5z"
            />
          </svg>
        </a>
      </div>
    </div>
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
 .vmlogo{
   text-align: center;
   fill: white;
 width: 100px;
   height: 100px;
   
 }
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
