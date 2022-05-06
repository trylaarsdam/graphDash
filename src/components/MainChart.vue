<template>
  <div id="mainchart-container">
      <HealthKitChart v-if="this.$store.state.graph == 'bar' && renderComponent" :options="value"/>
      <PieChart v-if="this.$store.state.graph == 'pie' && renderComponent" :dateRange="this.$store.state.dateRange"/>
  </div>
</template>

<script>
import HealthKitChart from "./HealthKitChart.vue"
import PieChart from "./PieChart.vue"

export default {
  name: "MainChart",
	components: {
    HealthKitChart,
    PieChart
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