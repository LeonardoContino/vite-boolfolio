<script>
export default {
  name: "ProjectCard",
  props: { project: Object, isDetail: Boolean },
};
</script>

<template>
  <div class="card my-3">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h2>{{ project.title }}</h2>
      <div class="badge" :style="{ backgroundColor: project.type?.color }">
        {{ project.type?.label }}
      </div>
    </div>
    <div class="card-body">
      {{ project.content }}
    </div>
    <div class="card-footer d-flex align-items-center justify-content-between">
      <div>
        {{ project.updated_at }}
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
