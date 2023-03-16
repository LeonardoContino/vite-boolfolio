<script>
import axios from "axios";
const ApiBaseUri = "http://localhost:8000/api/";

import ProjectCard from "../components/Projects/ProjectCard.vue";
export default {
  name: "ProjectDetail",
  components: { ProjectCard },
  data: () => ({
    project: null,
  }),
  methods: {
    getProject() {
      const endpoint = ApiBaseUri + "projects/" + this.$route.params.slug;
      axios
        .get(endpoint)
        .then((res) => {
          this.project = res.data;
        })
        .catch(() => {
          this.$router.push({ name: "not-found" });
        })
        .then(() => {});
    },
  },
  created() {
    this.getProject();
  },
};
</script>

<template>
  <ProjectCard :isDetail="true" :project="project"></ProjectCard>
</template>
