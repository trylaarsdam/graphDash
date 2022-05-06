<template>
<ccv-line-chart :data='data' :options='options' id="battChart"></ccv-line-chart>
</template>

<script>
import "@carbon/charts/styles.css";


import "../assets/plex-and-carbon-components.css";


var graphData = []
var thresholds = []


  // fetch("http://localhost:5329/products/test", requestOptions)
  //   .then(response => response.json())
  //   .then(data => {
  //     graphData = data;
  //   });

export default {
	name: "BatteryChart",
	components: {},
  props: ["dateRange"],
	data() {
		return {
			data: graphData,
      thresholds: [],
      options: {
        "title": "",
        "animations": true,
        "axes": {
            "bottom": {
                "title": "Time",
                "mapsTo": "date",
                "scaleType": "time",
                "thresholds": thresholds,
                "domain": this.$store.state.dateRange
            },
            "left": {
                "mapsTo": "value",
                "title": "Percent Remaining",
                "scaleType": "linear"
            }
        },
        "experimental": true,
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
        "curve": "curveMonotoneX",
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
      }
		};
	},
  created() {
  },
  watch: { 
    dateRange: function(newVal) { // watch it
    if(newVal == undefined) {
      this.options.axes.bottom.domain = [
        this.data[0].date,
        new Date().toISOString().slice(0, -5) + "+0000"
      ]
    } else {
      this.options.axes.bottom.domain = newVal
    }
    }
  }
};
</script>
  