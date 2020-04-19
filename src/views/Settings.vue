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
        <br />
        <br />
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
              placeholder="Please enter your WiFi password"
              style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
            />
            <br />
            <input
              v-model="wifi_password_validation"
              type="password"
              class="form-control"
              id="WifiPasswordInputVal"
              aria-describedby="Wifi Password Validation"
              placeholder="Please re-enter your WiFi password"
              style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
            />
          </div>
        </fieldset>
        <button @click="submitWifi" type="submit" class="btn btn-primary">
          Submit
        </button>
        <br />
        <br />
        <fieldset>
          <legend>Login Settings</legend>
          <div class="form-group">
            <label for="Auth Username">Username</label>
            <input
              v-model="user"
              type="text"
              class="form-control"
              id="AuthUsername"
              aria-describedby="Auth Username"
              placeholder="Please enter your new login username"
              style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
            />
            <small id="WifiSSIDHelp" class="form-text text-muted"
              >This is the username you will use to access the Web
              Portal.</small
            >
          </div>
          <div class="form-group">
            <label for="Auth Password">Password</label>
            <input
              v-model="user_password"
              type="password"
              class="form-control"
              id="AuthPassword"
              aria-describedby="Auth Password"
              placeholder="Please enter your new login password"
              style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
            />
            <small id="AuthPassword" class="form-text text-muted"
              >This is the password you will use to access the Web
              Portal.</small
            >
            <br />
            <input
              v-model="user_password_validation"
              type="password"
              class="form-control"
              id="AuthPasswordVal"
              aria-describedby="Auth Password"
              placeholder="Please re-enter your new login password"
              style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
            />
            <small id="AuthPassword" class="form-text text-muted"
              >This is the password you will use to access the Web
              Portal.</small
            >
          </div>
        </fieldset>
        <button @click="submitAuth" type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <br />
      <br />

      <h2>Reset Options</h2>
      <br />

      <h4>Click the button below to delete all registered devices</h4>
      <br />
      <button @click="clearDevices" type="submit" class="btn btn-danger">
        Delete Devices
      </button>

      <br />
      <br />

      <h4>Click the button below to delete all Alerts</h4>
      <br />
      <button @click="clearAlerts" type="submit" class="btn btn-danger">
        Delete Alerts
      </button>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
const API_APIKEY_URL = "api/settings/apikeys";
const API_WIFI_URL = "api/settings/wifi";
const API_USER_URL = "api/settings/adduser";
const API_CLEAR_ALERTS = "api/alerts/clear";
const API_CLEAR_DEVICES = "api/devices/clear";

export default {
  name: "home",
  data: function() {
    return {
      safebrowsing_api_key: "",
      wifi_ssid: "",
      wifi_password: "",
      wifi_password_validation: "",
      user: "",
      user_password: "",
      user_password_validation: ""
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
      });
  },
  methods: {
    submitWifi() {
      if (this.wifi_password === this.wifi_password_validation) {
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
      }
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
    },
    submitAuth() {
      if (this.user_password === this.user_password_validation) {
        var send = {
          username: this.user,
          password: this.user_password
        };

        fetch(API_USER_URL, {
          method: "POST",
          body: JSON.stringify(send),
          headers: {
            "content-type": "application/json"
          }
        });
      }
    },
    clearDevices() {
      fetch(API_CLEAR_DEVICES, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "content-type": "application/json"
        }
      });
    },
    clearAlerts() {
      fetch(API_CLEAR_ALERTS, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "content-type": "application/json"
        }
      });
    }
  }
};
</script>
