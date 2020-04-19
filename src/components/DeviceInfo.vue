<template>
  <div class="card" v-if="show">
    <div class="card-body">
      <button
        @click="deleteDevice"
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
const API_URL_DELETE_DEVICE = "api/devices/delete";

export default {
  name: "DeviceInfo",
  props: ["deviceType", "description", "ip", "mongoID"],
  data: function() {
    return {
      //Store Modules in database?
      show: true
    };
  },
  methods: {
    deleteDevice() {
      var send = {
        id: this.mongoID
      };

      fetch(API_URL_DELETE_DEVICE, {
        method: "POST",
        body: JSON.stringify(send),
        headers: {
          "content-type": "application/json"
        }
      });

      this.show = !this.show;
    }
  }
};
</script>
