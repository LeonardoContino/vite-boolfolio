<script>
export default {
  name: "PostList",
  props: { projects: Array },
};
</script>

<template>
  <ul>
    <li v-for="project in projects" :key="project.id">
      {{ project.title }}
    </li>
  </ul>
</template>
