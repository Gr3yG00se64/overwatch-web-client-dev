<template>
  <div class="text-center">
    <img alt="Vue logo" src="../assets/logo.png" class="my-5" />
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
      header: "About Overwatch",
      message:
        "Overwatch is a free and open-source program that was created with individuals and small businesses in mind."
    };
  },
  components: {
    GenInfo
  }
};
</script>
