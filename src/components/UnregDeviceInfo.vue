<template>
  <div class="card border-info mb-3" style="max-width: 20rem;">
    <div class="card-header">Unregistered Device</div>
    <div class="card-body">
      <h4 class="card-title">IP: {{ ip }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnregDeviceInfo",
  props: ["ip"]
};
</script>
