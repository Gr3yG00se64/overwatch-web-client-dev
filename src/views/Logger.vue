<template>
  <div class="text-center">
    <h1 class="my-3">Logger Module</h1>

    <p>Longer Description for the Logger Module Here.</p>

    <p>Please press the button to receive the network logs</p>

    <button
      @click="receiveLog"
      type="Export Logs"
      class="btn btn-primary btn-lg"
    >
      Download Logs
    </button>
  </div>
</template>

<script>
import axios from "axios";

const API_URL = "api/logs";

export default {
  name: "logger",
  data: function() {
    return {
      toggle: false
    };
  },
  methods: {
    receiveLog() {
      axios({
        url: API_URL,
        method: "GET",
        responseType: "blob" // important
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "log.zip"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    }
  }
};
</script>
