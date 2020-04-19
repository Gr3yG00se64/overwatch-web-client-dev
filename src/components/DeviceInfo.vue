<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Device IP: {{ ip }}</h4>
      <h6 class="card-subtitle mb-2 text-muted">
        Device Type: {{ deviceType }}
      </h6>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertInfo",
  props: ["deviceType", "description", "ip"]
};
</script>
