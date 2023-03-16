<script>
import Appheader from "./components/AppHeader.vue";
import HomePage from "./pages/HomePage.vue";

export default {
  name: "AppVue",
  components: { Appheader, HomePage },
};
</script>
<template>
  <Appheader></Appheader>
  <HomePage></HomePage>
</template>
