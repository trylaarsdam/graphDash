<template>
<ccv-simple-bar-chart :data='data' :options='options'></ccv-simple-bar-chart>
</template>

<script>
import Vue from "vue";
import "@carbon/charts/styles.css";
import chartsVue from "@carbon/charts-vue";
import { ChartTypes } from "@carbon/charts/interfaces/enums";

import "../assets/plex-and-carbon-components.css";

Vue.use(chartsVue);


export default {
	name: "HealthKitChart",
	components: {},
  // props: ["options"],
	data() {
		return {
			data: this.$store.state.graphData,
      thresholds: [],
      options: {
        "title": this.$store.state.selectedMetric.label,
        "animations": true,
        "axes": {
            "bottom": {
                "title": "Departments",
                "mapsTo": "group",
                "scaleType": "labels"
                // "thresholds": thresholds,
            },
            "left": {
                "mapsTo": "value",
                "title": "Value",
                "scaleType": "linear"
            }
        },
        "experimental": true,
        "bounds": {
          "upperBoundMapsTo": "max",
          "lowerBoundMapsTo": "min"
        },
        "legend": {
          "clickable": true,
          // "position": "right",
          // "orientation": "vertical",
        },
        "zoomBar": {
            "top": {
                "enabled": true
            }
        },
        "points": {
          radius: 1
        },
        "toolbar": {
          "enabled": true,
          "numberOfIcons": 5,
          "controls": [
            {
              "type": "Zoom in"
            },
            {
              "type": "Reset zoom"
            },
            {
              "type": "Zoom out"
            },
            {
              "type": "Make fullscreen"
            },
            {
              "type": "Export as PNG"
            },
            {
              "type": "Show as data-table"
            }
          ]
        },
        "height": "100%",
        "width": "100%",
        "comboChartTypes": [ // takes an array of objects
        {
            "type": ChartTypes.AREA, // use a valid ChartType from enums
            "options": {}, // component specific options (i.e, turn on the scatter points, adjust scatter radius)
            "correspondingDatasets": [] // the datasets that we want to map with this type of chart
        },
        {
            "type": ChartTypes.LINE, // use a valid ChartType from enums
            "options": {
                "points": {
                    "enabled": false // disabling the scatter points on the LineChart here won't affect the points in the AreaChart
                }
            }, // component specific options
            "correspondingDatasets": []
        }]
      }
		};
	},
  created() {
    
  }
};
</script>
  