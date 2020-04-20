<template>
  <div class="text-center">
    <h1 class="my-3">IDS Module</h1>

    <p>
      Longer Description for the IDS Module Here. Speak about the different
      forms of protection.
    </p>

    <h1 class="my-5">Alerts</h1>

    <h4>Sort Alert Options</h4>
    <div style="display: in-line-block">
      <button
        @click="sortLowToHigh"
        type="button"
        class="btn btn-warning"
        style="margin-right: 30px"
      >
        Low->High
      </button>
      <button @click="sortHighToLow" type="button" class="btn btn-danger">
        High->Low
      </button>
    </div>

    <br />
    <br />
    <br />

    <div class="container">
      <div v-for="(group, index) in groupAlerts" :key="index" class="row">
        <div v-for="alert in group" :key="alert._id" class="col">
          <AlertInfo
            :modID="alert.modID"
            :description="alert.description"
            :severity="alert.severity"
            :alertInfo="alert.alertInfo"
            :threatType="alert.threatType"
            :date="alert.date"
            :mongoID="alert._id"
          />
        </div>
      </div>
    </div>

    <br />
    <br />
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
  methods: {
    sortHighToLow() {
      let tempArray = [];
      let lowArray = [];
      let medArray = [];
      let highArray = [];

      let index = 0;

      for (index = 0; index < this.alertList.length; index += 1) {
        if (this.alertList[index].severity == "LOW") {
          lowArray.push(this.alertList[index]);
        }
        if (this.alertList[index].severity == "MEDIUM") {
          medArray.push(this.alertList[index]);
        }
        if (this.alertList[index].severity == "HIGH") {
          highArray.push(this.alertList[index]);
        }
      }

      for (index = 0; index < highArray.length; index += 1) {
        tempArray.push(highArray[index]);
      }
      for (index = 0; index < medArray.length; index += 1) {
        tempArray.push(medArray[index]);
      }
      for (index = 0; index < lowArray.length; index += 1) {
        tempArray.push(lowArray[index]);
      }

      this.alertList = [...tempArray];
    },
    sortLowToHigh() {
      let tempArray = [];
      let lowArray = [];
      let medArray = [];
      let highArray = [];

      let index = 0;

      for (index = 0; index < this.alertList.length; index += 1) {
        if (this.alertList[index].severity == "LOW") {
          lowArray.push(this.alertList[index]);
        }
        if (this.alertList[index].severity == "MEDIUM") {
          medArray.push(this.alertList[index]);
        }
        if (this.alertList[index].severity == "HIGH") {
          highArray.push(this.alertList[index]);
        }
      }

      for (index = 0; index < lowArray.length; index += 1) {
        tempArray.push(lowArray[index]);
      }
      for (index = 0; index < medArray.length; index += 1) {
        tempArray.push(medArray[index]);
      }
      for (index = 0; index < highArray.length; index += 1) {
        tempArray.push(highArray[index]);
      }

      this.alertList = [...tempArray];
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
