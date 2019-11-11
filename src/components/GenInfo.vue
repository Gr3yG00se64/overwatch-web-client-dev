<template>
  <div class="text-center">
    <h1>{{ header }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "GenInfo",
  props: ["header", "message"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
