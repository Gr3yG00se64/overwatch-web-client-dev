<template>
  <div>
    <div class="text-center">
      <div class="my-3">
        <h1>Settings</h1>
      </div>
    </div>

    <div class="container center-div">
      <form>
        <fieldset>
          <legend>API Keys</legend>
          <div class="form-group">
            <label for="safebrowsingAPI">Google Safebrowsing API</label>
            <input
              v-model="safebrowsing_api_key"
              type="text"
              class="form-control"
              id="GoogleSafebrowsingInput"
              aria-describedby="Google Safebrowsing"
              placeholder="Please enter your Google Safebrowsing API Key"
              style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
            />
            <small id="SafebrowsingHelp" class="form-text text-muted"
              >For help acquiring this, please reference:
              https://www.rsjoomla.com/support/documentation/rsfirewall-user-guide/frequently-asked-questions/how-to-generate-a-google-safe-browsing-api-key.html</small
            >
          </div>
        </fieldset>
        <button
          @click="submitSafebrowsingAPI"
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
        <fieldset>
          <legend>Wifi Settings</legend>
          <div class="form-group">
            <label for="Wifi SSID">Wifi SSID</label>
            <input
              v-model="wifi_ssid"
              type="text"
              class="form-control"
              id="WifiSSIDInput"
              aria-describedby="Wifi SSID"
              placeholder="Please enter your Wifi SSID"
              style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
            />
            <small id="WifiSSIDHelp" class="form-text text-muted"
              >For help, please reference:
              https://www.howtogeek.com/334935/what-is-an-ssid-or-service-set-identifier/</small
            >
          </div>
          <div class="form-group">
            <label for="Wifi Password Help">Wifi Password</label>
            <input
              v-model="wifi_password"
              type="password"
              class="form-control"
              id="WifiPasswordInput"
              aria-describedby="Wifi Password"
              placeholder="Please enter your WiFi Password"
              style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
            />
            <small id="deviceTypeHelp" class="form-text text-muted"
              >For help acquiring this, please reference:
              https://www.howtogeek.com/233159/how-to-find-your-wi-fi-password/</small
            >
          </div>
        </fieldset>
        <button @click="submitWifi()" type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const API_APIKEY_URL = "api/settings/apikeys";
const API_WIFI_URL = "api/settings/wifi";

export default {
  name: "home",
  data: function() {
    return {
      safebrowsing_api_key: "",
      wifi_ssid: "",
      wifi_password: ""
    };
  },
  mounted() {
    fetch(API_APIKEY_URL)
      .then(response => response.json())
      .then(result => {
        var apiList = result.apikeys;

        for (var index = 0; index < apiList.length; index += 1) {
          if (apiList[index].name === "googlesafebrowsing") {
            this.safebrowsing_api_key = apiList[index].key;
          }
        }
      });

    fetch(API_WIFI_URL)
      .then(response => response.json())
      .then(result => {
        this.wifi_ssid = result.ssid;
        this.wifi_password = result.password;
      });
  },
  methods: {
    submitWifi(e) {
      var send = {
        ssid: this.wifi_ssid,
        password: this.wifi_password
      };

      fetch(API_WIFI_URL, {
        method: "POST",
        body: JSON.stringify(send),
        headers: {
          "content-type": "application/json"
        }
      });

      e.preventDefault();
    },
    submitSafebrowsingAPI() {
      var send = {
        name: "googlesafebrowsing",
        key: this.safebrowsing_api_key
      };

      fetch(API_APIKEY_URL, {
        method: "POST",
        body: JSON.stringify(send),
        headers: {
          "content-type": "application/json"
        }
      });
    }
  }
};
</script>
