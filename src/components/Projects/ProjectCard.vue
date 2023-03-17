<script>
import { RouterLink } from "vue-router";

export default {
  name: "ProjectCard",
  props: { project: Object, isDetail: Boolean },
  components: { RouterLink },
};
</script>

<template>
  <div class="card my-3">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h2>{{ project.title }}</h2>
      <RouterLink
        v-if="project.type"
        :to="{ name: 'type-projects', params: { id: project.type.id } }"
      >
        <div class="badge" :style="{ backgroundColor: project.type?.color }">
          {{ project.type?.label }}
        </div>
      </RouterLink>
    </div>
    <div class="card-body">
      {{ project.content }}
    </div>
    <div class="card-footer d-flex align-items-center justify-content-between">
      <div>
        {{ project.updated_at }}
      </div>

      <div v-if="project.technologies?.length">
        <span
          v-for="tech in project.technologies"
          :key="tech.id"
          class="badge me-2"
          :style="{ backgroundColor: tech.color }"
          >{{ tech.label }}</span
        >
      </div>
      <RouterLink
        v-if="!isDetail"
        class="btn btn-primary"
        :to="{ name: 'project-detail', params: { slug: project.slug } }"
        >Vedi</RouterLink
      >
    </div>
  </div>
</template>
