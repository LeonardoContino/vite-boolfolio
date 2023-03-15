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
    <div class="card-footer">
      {{ project.updated_at }}
    </div>
  </div>
</template>
