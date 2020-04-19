<template>
  <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
    <div class="card-header">
      {{ description }}
      <button
        type="button"
        class="ml-2 mb-1 close"
        data-dismiss="toast"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="card-body" :style="changeBackground()" style="color: black">
      <h4 class="card-title">Severity: {{ severity }}</h4>
      <p class="card-text">Threat Type: {{ threatType }}</p>
      <p class="card-text">Alert Info:</p>
      <p class="card-text">{{ alertInfo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertInfo",
  props: ["modID", "description", "severity", "alertInfo", "threatType"],
  methods: {
    changeBackground() {
      if (this.severity == "LOW") {
        return { backgroundColor: "#FFFF00" };
      } else if (this.severity == "MEDIUM") {
        return { backgroundColor: "#FF8C00" };
      } else if (this.severity == "HIGH") {
        return { backgroundColor: "#FF0000" };
      }
    }
  }
};
</script>
