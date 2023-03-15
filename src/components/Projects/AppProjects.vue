<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ProjectsList",
  components: { ProjectCard, ProjectCard, ProjectCard },
  props: { projects: Array },
};
</script>

<template>
  <div>
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    >
    </ProjectCard>
  </div>
</template>
