<template>
  <cv-grid fullWidth>
    <cv-row>
      <cv-column
        ><div class="cv-grid-story__preview-col">
          <cv-select :label="label" value="heartRate" @change="actionChange">
            <cv-select-option disabled selected hidden
              >Choose an option</cv-select-option
            >
            <cv-select-optgroup label="HealthKit">
              <cv-select-option value="heartRate"
                >Heart Rate</cv-select-option
              >
              <cv-select-option value="strideLength"
                >Stride Length</cv-select-option
              >
            </cv-select-optgroup>
            <cv-select-optgroup label="EHealth">
              <cv-select-option value="tabletBattery"
                >Tablet Battery</cv-select-option
              >
              <cv-select-option value="insBattery"
                >INS Battery</cv-select-option
              >
            </cv-select-optgroup>
          </cv-select>
        </div></cv-column
      >
      <cv-column
        ><div class="cv-grid-story__preview-col">
          <cv-radio-group :vertical="vertical" @change="actionChange">
            <cv-radio-button
              name="group-1"
              label="1 Day"
              value="day"
              :checked="checked1"
              :hide-label="hideLabel"
              :label-left="labelLeft"
            />
            <cv-radio-button
              name="group-1"
              label="1 Week"
              value="week"
              :disabled="disabled2"
              :hide-label="hideLabel"
              :label-left="labelLeft"
            />
            <cv-radio-button
              name="group-1"
              label="1 Month"
              value="month"
              :hide-label="hideLabel"
              :label-left="labelLeft"
            />
          </cv-radio-group></div
      ></cv-column>
    </cv-row>
  </cv-grid>
</template>

<script>
export default {
  name: "ControlBar",
  data: () => ({
    checked1: true,
    disabled2: false,
    hideLabel: false,
    labelLeft: false,
    vertical: false,
  }),
  methods: {
    actionChange(param) {
      console.log("CHANGED")
      console.log(param)
      if(param == "heartRate") {
        this.$store.commit("UPDATE_GRAPH", "heartRate")
      }
      else if(param == "strideLength") {
        this.$store.commit("UPDATE_GRAPH", "strideLength")
      }
    }
  }
};
</script>
