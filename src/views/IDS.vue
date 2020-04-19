<template>
  <div class="text-center">
    <h1 class="my-3">IDS Module</h1>

    <p>
      Longer Description for the IDS Module Here. Speak about the different
      forms of protection.
    </p>

    <h2 class="my-5">Alerts</h2>

    <div class="container">
      <div v-for="(group, index) in groupAlerts" :key="index" class="row">
        <div v-for="alert in group" :key="alert._id" class="col">
          <AlertInfo
            :modID="alert.modID"
            :description="alert.description"
            :severity="alert.severity"
            :alertInfo="alert.alertInfo"
            :threatType="alert.threatType"
            :mongoID="alert._id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertInfo from "@/components/AlertInfo.vue";
const API_URL_ALERTS = "../api/alerts";

export default {
  name: "ids",
  data: function() {
    return {
      alertList: [],
      deviceType: "",
      description: "",
      ip: ""
    };
  },
  mounted() {
    fetch(API_URL_ALERTS)
      .then(response => response.json())
      .then(result => {
        this.alertList = result;
      });
  },
  computed: {
    groupAlerts() {
      let index = 0;
      let arrayLength = this.alertList.length;
      let tempArray = [];
      let myChunk = null;
      let chunk_size = 3;
      let array = [...this.alertList];

      if (arrayLength > 0) {
        for (index = 0; index < arrayLength; index += chunk_size) {
          myChunk = array.slice(index, index + chunk_size);
          tempArray.push(myChunk);
        }

        return tempArray;
      }
      return [];
    }
  },
  components: {
    AlertInfo
  }
};
</script>

<style>
.col {
  max-width: 30%;
}
</style>
