<template>
  <cv-header aria-label="Carbon header">
  <cv-skip-to-content href="#main-content">
    Skip to content
  </cv-skip-to-content>
  <cv-header-name href="javascript:void(0)" prefix="Graph">
    Dash
  </cv-header-name>
  <template v-slot:header-global>
  </template>
    <template v-slot:left-panels v-if="areLeftPanels">
      
    </template>
    <template v-slot:right-panels v-if="areRightPanels">
    
  <cv-header-panel  id="user-panel">
      An empty user panel
    </cv-header-panel>
  <cv-header-panel  id="notifications-panel">
      An empty panel
    </cv-header-panel>
  <cv-header-panel id="switcher-panel">
      <cv-switcher>
        <cv-switcher-item>
          <cv-switcher-item-link href="javascript:void(0)" selected>
            Selected app
          </cv-switcher-item-link>
        </cv-switcher-item>
        <cv-switcher-item>
          <cv-switcher-item-link href="javascript:void(0)">
            Other app
          </cv-switcher-item-link>
        </cv-switcher-item>
        <cv-switcher-item>
          <cv-switcher-item-link href="javascript:void(0)">
            Other app
          </cv-switcher-item-link>
        </cv-switcher-item>
        <cv-switcher-item>
          <cv-switcher-item-link href="javascript:void(0)">
            Other app
          </cv-switcher-item-link>
        </cv-switcher-item>
        <cv-switcher-item>
          <cv-switcher-item-link href="javascript:void(0)">
            Other app
          </cv-switcher-item-link>
        </cv-switcher-item>
        <cv-switcher-item>
          <cv-switcher-item-link href="javascript:void(0)">
            Other app
          </cv-switcher-item-link>
        </cv-switcher-item>
      </cv-switcher>
    </cv-header-panel>
  </template>
</cv-header>
</template>

<script>
export default {
  name: "MainHeader",
  data: () => ({
    "light": false,
    "label": "Search input label",
    "placeholder": "Patient ID",
    "disabled": false,
    "hideLabel": true,
    "size": "",
    "clearArialabel": "Custom search aria label",
    "inline": false,
  })
}
</script>
