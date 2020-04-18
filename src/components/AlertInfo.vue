<template>
  <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
    <div class="card-header">{{ description }}</div>
    <div class="card-body" :style="changeBackground()" style="color: black">
      <h4 class="card-title">Severity: {{ severity }}</h4>
      <p class="card-text">Threat Type: {{ threatType }}</p>
      <p class="card-text">Alert Info: {{ alertInfo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertInfo",
  props: ["modID", "description", "severity", "alertInfo", "threatType"],
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
