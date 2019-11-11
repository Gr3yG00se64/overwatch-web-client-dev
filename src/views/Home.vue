<template>
  <div class="text-center">
    <img alt="Overwatch Logo" src="../assets/logo.png" class="my-5" />
    <GenInfo :header="header" :message="message" />
  </div>
</template>

<script>
// @ is an alias to /src
import GenInfo from "@/components/GenInfo.vue";

export default {
  name: "home",
  data: function() {
    return {
      header: "Welcome to Overwatch!",
      message: "Start exploring to get started!"
    };
  },
  components: {
    GenInfo
  }
};
</script>
