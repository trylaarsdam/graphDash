<template>
  <div id="mainchart-container">
      <HealthKitChart v-if="this.$store.state.mode == 'healthKit' && renderComponent" :options="value"/>
      <BatteryChart v-if="this.$store.state.mode == 'eHealth' && renderComponent" :dateRange="this.$store.state.dateRange"/>
  </div>
</template>

<script>
import HealthKitChart from "./HealthKitChart.vue"
import BatteryChart from "./BatteryChart.vue"

export default {
  name: "MainChart",
	components: {
    HealthKitChart,
    BatteryChart
  },
  methods: {
    forceRerender() {
      // Removing from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Adding the component back in
        this.renderComponent = true;
      });
    }
  },
  props: ["graphData"],
  data: () => ({
    renderComponent: true,
  }),
  watch: { 
    graphData: function() { // watch it
      console.log("graphData changed");
      this.forceRerender();
    }
  }
}
</script>

<style local>
#mainchart-container {
  height: 100%;
  width: 100%;
}
</style>