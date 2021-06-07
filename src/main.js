import Vue from "vue";
import { getPathName } from "./utility/helper.js";
import CreateMeasureList from "./CreateMeasureList.vue";
import vuetify from "./vuetify";

const LOCATION_PATH_NAME = getPathName(window.location.pathname);
let Page = CreateMeasureList;

switch (LOCATION_PATH_NAME) {
  case "CreateMeasureList":
    Page = CreateMeasureList;
    break;
  default:
    Page = CreateMeasureList;
}

new Vue({
  el: "#app",
  vuetify,
  render: h => h(Page)
});
