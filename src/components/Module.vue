<template>
  <div class="jumbotron">
    <h1 class="display-3">{{ name }}</h1>
    <p class="lead">{{ description }}</p>
    <hr class="my-4" />
    <p>Created By: {{ author }}</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" :href="url" role="button">Explore</a>
    </p>

    <div class="form-group">
      <div class="custom-control custom-switch">
        <input
          @click="toggleEnabled"
          type="checkbox"
          class="custom-control-input"
          :id="compID"
          :checked="toggle"
        />
        <label class="custom-control-label" :for="compID">Disable/Enable</label>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = "api/modules";

export default {
  name: "Module",
  props: ["name", "description", "author", "enabled", "id", "url"],
  data: function() {
    return {
      compID: null,
      toggle: null
    };
  },
  methods: {
    toggleEnabled() {
      this.toggle = !this.toggle;
      var send = {
        id: this.id
      };

      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(send),
        headers: {
          "content-type": "application/json"
        }
      });
      //.then(response => response.json()).then(result => {})
    }
  },
  mounted() {
    this.compID = this._uid;
    this.toggle = this.enabled;
  }
};
</script>
