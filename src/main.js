import Vue from "vue";
import { getPathName } from "./utility/helper.js";
import CreateMeasureList from "./measure-form/CreateMeasureList.vue";
import "bootstrap/dist/css/bootstrap.min.css";

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
  render: h => h(Page)
});
