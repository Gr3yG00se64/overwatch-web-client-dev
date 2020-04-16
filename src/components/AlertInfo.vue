<template>
  <div class="{{" severity }}>
    <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
      <div class="card-header">Severity: {{ severity }}</div>
      <div class="card-body">
        <h4 class="card-title">{{ modID }}</h4>
        <p class="card-text">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertInfo",
  props: ["modID", "description", "severity"]
};
</script>

<style>
.Low {
  background-color: yellow;
}
.Medium {
  background-color: orange;
}
.High {
  background-color: red;
}
</style>
