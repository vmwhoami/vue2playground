<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
          <form v-if="!submitted" method="POST">
            <div class="mb-4">
              <label class="text-xl text-gray-600"
                >Title <span class="text-red-500">*</span></label
              >
              <input
                type="text"
                name="title"
                class="border-2 border-gray-300 p-2 w-full"
                id="title"
                v-model.lazy="blog.title"
              />
            </div>
            <div class="mb-8">
              <label class="text-xl text-gray-600"
                >Content <span class="text-red-500">*</span></label
              >
              <ckeditor
                :editor="editor"
                v-model.lazy="blog.textField"
                :config="editorConfig"
              ></ckeditor>
            </div>
            <div class="flex p-1">
              <button
                class="p-3 bg-blue-500 text-white hover:bg-blue-400"
                @click.prevent="submitForm"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      blog: {
        title: "",
        textField: "",
        checkbox: [],
        author: "",
      },
      authors: ["Hemingway", "Tolstoy", "Artos", "Bartos"],

      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      console.log(this.blog);
      this.$http
        .post(
          "https://vuejs-18224-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
          this.blog
        )
        .then(() => {
          this.submitted = true;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
</style>