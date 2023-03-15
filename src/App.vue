<script>
import axios from "axios";
import Appheader from "./components/AppHeader.vue";
import AppProjects from "./components/Projects/AppProjects.vue";

const ApiBaseUri = "http://localhost:8000/api";
export default {
  name: "AppVue",
  components: { Appheader, AppProjects },
  data: () => ({
    projects: [],
  }),
  methods: {
    fetchProjects() {
      axios.get(ApiBaseUri + "/projects").then((res) => {
        this.projects = res.data;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>
<template>
  <Appheader></Appheader>

  <main class="container">
    <AppProjects :projects="projects"></AppProjects>
  </main>
</template>
