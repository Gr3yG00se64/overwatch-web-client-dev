<template>
  <div class="card">
    <div class="card-body">
      <button
        type="button"
        class="ml-2 mb-1 close"
        data-dismiss="toast"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h5 class="card-title">Device IP: {{ ip }}</h5>
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
