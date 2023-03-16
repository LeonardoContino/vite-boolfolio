<script>
export default {
  name: "ProjectCard",
  props: { project: Object },
};
</script>

<template>
  <div class="card my-3">
    <div class="card-header">
      {{ project.title }}
    </div>
    <div class="card-body">
      {{ project.content }}
    </div>
    <div class="card-footer d-flex align-items-center justify-content-between">
      <div>
        {{ project.updated_at }}
      </div>
      <RouterLink
        class="btn btn-primary"
        :to="{ name: 'project-detail', params: { slug: project.slug } }"
        >Vedi</RouterLink
      >
    </div>
  </div>
</template>
