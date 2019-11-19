<template>
  <div>
    <div class="text-center">
      <h1 class="my-3">Modules</h1>
    </div>

    <div class="container">
      <div v-for="(group, index) in groupModules" :key="index" class="row">
        <div v-for="mod in group" :key="mod._id" class="col">
          <Module
            :name="mod.name"
            :description="mod.description"
            :author="mod.author"
            :enabled="mod.enabled"
            :id="mod.id"
            :url="mod.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Module from "@/components/Module.vue";

const API_URL = "http://localhost:5670/mod-data";

export default {
  name: "modules",
  data: function() {
    return {
      //Store Modules in database?
      modList: []
    };
  },
  computed: {
    groupModules() {
      let index = 0;
      let arrayLength = this.modList.length;
      let tempArray = [];
      let myChunk = null;
      let chunk_size = 2;
      let array = [...this.modList];

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
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.modList = result.modules;
      });
  },
  components: {
    Module
  }
};
</script>

<style scoped>
.col {
  border: 1px solid transparent;
  max-width: 50%;
}
</style>
