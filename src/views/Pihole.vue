<template>
  <div class="text-center">
    <h1 class="my-3">Pihole Module</h1>

    <p>Longer Description for Pihole here</p>

    <p>
      Please copy the link below and paste it into a new tab to access Pihole's
      webpage
    </p>
    <h2>{{ serverip }}:8000/admin</h2>
  </div>
</template>

<script>
const API_URL = "../api/pihole";

export default {
  name: "logger",
  data: function() {
    return {
      toggle: false,
      serverip: ""
    };
  },
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.serverip = result.serverip;
      });
  }
};
</script>
