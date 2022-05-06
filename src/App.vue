<template>
  <div>
    <AppBar />
    <div id="chart-container">
      <table class="full-height full-width">
        <tr>
          <td style="width:75%; min-width:0px;" class="row-padding">
            <div class="cv-grid-story__preview-col full-height">
              <MainChart :graphData="this.$store.state.graphData"/>
            </div>
          </td>
          <td style="width:25%; min-width:0px;" class="row-padding">
              <ChartControl />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import MainChart from "./components/MainChart.vue";
import Vue from "vue";
import CarbonComponentsVue from "@carbon/vue";
import { CarbonIconsVue } from "@carbon/icons-vue";
import Notification20 from "@carbon/icons-vue/es/notification/20";
import ControlBar from "./components/ControlBar.vue";
import Vuex from "vuex";
import ChartControl from "./components/ChartControl.vue";
import chartsVue from "@carbon/charts-vue";

Vue.use(chartsVue);
Vue.use(Vuex);

Vue.use(CarbonComponentsVue);
Vue.use(CarbonIconsVue, {
  components: {
    Notification20,
    ControlBar,
    ChartControl,
  },
});

import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: {
    MainChart,
    AppBar,
  },
  data: () => ({
    links: ["Dashboard"],
    label: "Parameter:",
  }),
};
</script>

<style local>
#chart-container {
  height: 95vh;
  width: 100%;
  padding: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.full-width {
  width: 100%;
}
.full-height {
  height: 82vh;
}
.row-padding{
  padding: 1rem;
}
</style>
