<script>
export default {
  name: "notFoundPage",
};
</script>

<template>
  <div
    class="d-flex vh-100 flex-column align-items-center justify-content-center"
  >
    <h2 class="text-center text-dark">404 | Not found</h2>
    <button @click="$router.back()" class="btn btn-sm btn-secondary">
      indietro
    </button>
  </div>
</template>
