<script>
import axios from "axios";
import AppProjects from "../components/Projects/AppProjects.vue";
import ProjectList from "./ProjectList.vue";
const ApiBaseUri = "http://localhost:8000/api";
export default {
  name: "TypeProjects",
  components: { AppProjects, ProjectList },
  data: () => ({
    hasError: false,
    projects: [],
    type: null,
  }),
  methods: {
    fetchProjects(endpoint = null) {
      if (!endpoint)
        endpoint = `${ApiBaseUri}/types/${this.$route.params.id}/projects`;

      axios
        .get(endpoint)
        .then((res) => {
          this.projects = res.data.projects;
          this.type = res.data.type;
        })
        .catch(() => {
          this.hasError = true;
        });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <h2 class="my-3">Progetti della categoria {{ type?.label }}</h2>
  <AppProjects :projects="projects"></AppProjects>
</template>
