<template>
  <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
    <div class="card-header">Severity: {{ severity }}</div>
    <div class="card-body" :style="changeBackground()" style="color: black">
      <h4 class="card-title">{{ modID }}</h4>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertInfo",
  props: ["modID", "description", "severity"],
  methods: {
    changeBackground() {
      if (this.severity == "Low") {
        return { backgroundColor: "#FFFF00" };
      } else if (this.severity == "Medium") {
        return { backgroundColor: "#FF8C00" };
      } else if (this.severity == "High") {
        return { backgroundColor: "#FF0000" };
      }
    }
  }
};
</script>
