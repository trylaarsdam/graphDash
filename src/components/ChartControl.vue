<template>
  <div id="chart-control-wrapper">
    <cv-file-uploader
      :kind="kind"
      :label="label"
      :helperText="helperText"
      :drop-target-label="dropTargetLabel"
      :accept="accept"
      @change="upload"
      :clear-on-reselect="clearOnReselect"
      :initial-state-uploading="initialStateUploading"
      :multiple="multiple"
      :removable="removable"
      :remove-aria-label="removeAriaLabel" ref="fileUploader">
    </cv-file-uploader>
    <!-- <cv-combo-box 
      :light="light"
      label="Department"
      helper-text="Select a department"
      :invalid-message="invalidMessage"
      :title="title"
      :disabled="disabled"
      @change="selectDept"
      :auto-filter="autoFilter"
      :auto-highlight="autoHighlight"
      :value="initialValue"
      :options="this.$store.state.deptList">
    </cv-combo-box> -->
    <cv-combo-box 
      :light="light"
      label="Metric"
      helper-text="Select a metric"
      @change="selectMetric"
      :invalid-message="invalidMessage"
      :title="title"
      :disabled="disabled"
      :auto-filter="autoFilter"
      :auto-highlight="autoHighlight"
      :value="initialValue"
      :options="this.$store.state.metricList">
    </cv-combo-box>
    <cv-combo-box 
      :light="light"
      label="Graph Type"
      helper-text="Select the type of graph you want to display"
      :invalid-message="invalidMessage"
      :title="title"
      :disabled="disabled"
      :auto-filter="autoFilter"
      :auto-highlight="autoHighlight"
      :value="initialValue"
      :options="graphOptions">
    </cv-combo-box>
  </div>
</template>

<script>
export default {
  name: "ChartControl",
  data: () => ({
    "kind": "",
    "label": "Choose file to upload",
    "helperText": "Select the file you want to upload",
    "dropTargetLabel": "",
    "accept": ".csv",
    "clearOnReselect": false,
    "initialStateUploading": false,
    "multiple": false,
    "removable": false,
    "removeAriaLabel": "Custom remove aria label",
    "autoFilter": true,
    "autoHighlight": true,
    "initialValue": "",
    "graphOptions": [
      {
        name: "line",
        label: "Line",
        value: "line",
        disabled: false,
      },
      {
        name: "bar",
        label: "Bar",
        value: "bar",
        disabled: false,
      },
      {
        name: "pie",
        label: "Pie",
        value: "pie",
        disabled: false,
      },
      {
        name: "scatter",
        label: "Scatter",
        value: "scatter",
        disabled: false,
      }
    ]
  }),
  computed: {

  },
  methods: {
    selectDept(item) {
      console.log("select dept", item);
      let dept = this.$store.state.deptList.find(dept => dept.name === item);
      this.$store.commit('SET_DEPT', dept);
    },
    selectMetric(item) {
      console.log("select metric", item);
      let metric = this.$store.state.metricList.find(metric => metric.name === item);
      this.$store.commit('SET_METRIC', metric);
    },
    upload(file) {
      var reader = new FileReader();

      let store = this.$store

      reader.onload = function(event) {

        store.commit("SET_DATA", csvJSON(event.target.result))

        // console.log(store.state.jsonData);

        for(var item of store.state.jsonData) {
          store.commit("ADD_DEPT", item.DEPT)
        }

        // console.log(Object.keys(store.state.jsonData[0]))

        for(var key of Object.keys(store.state.jsonData[0])) {
          if(key != "DEPT") {
            store.commit("ADD_METRIC", key)
          }
          // console.log(key);
        }

        // console.log(store.state.deptList)
      };
      reader.readAsText(file[0].file);
    },
  },
};

function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step 
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);

  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}
</script>

<style local>
#chart-control-wrapper {
  z-index: -1;
}
.full-width-button {
  width: 100%;
}
.threshold-line {
  stroke-width: 2px !important;
}
.active {
  stroke-width: 4px !important;
}
.cv-content-switcher-button {
  padding: 0px;
  justify-items: center;
  align-content: center;
  text-align: center;
}
.bx--content-switcher__label {
  text-align: center;
  width: 100%;
}
</style>
