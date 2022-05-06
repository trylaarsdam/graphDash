/* eslint-disable no-empty */
/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function createGraphData(state) {
  var graphData = []
  let selectedDept = state.selectedDept
  let selectedMetric = state.selectedMetric

  if(selectedDept && selectedMetric) {

  }
  else if(selectedMetric) {
    for(var entry of state.jsonData) {
      if(entry[state.selectedMetric.label] != undefined) {
        graphData.push({
          group: entry.DEPT,
          value: entry[state.selectedMetric.label]
        })
      }
    }
  }

  state.graphData = graphData
  console.log(state.graphData)
}

const state = {
  graph: "bar",
  mode: "healthKit",
  deptList: [],
  jsonData: [],
  metricList: [],
  graphData: [],
  selectedDept: "",
  selectedMetric: "",
  showingAnnotations: {
    userSeizure: true,
    tabletSeizure: true,
    aura: true,
    comments: true,
  },
  buttonToggles: {
    healthKitSwitch: "primary",
    batterySwitch: "secondary"
  },
  dateRange: undefined
}

const actions = {
  changeHomeText: ({commit}, context) => {
    commit('UPDATE_GRAPH', context)
  }
}

const mutations = {
  SET_GRAPH(state, graph) {
    state.graph = graph 
  },
  ADD_DEPT(state, dept) {
    state.deptList.push({
      name: dept.replace(/\W/, "_").toLowerCase(),
      label: dept,
      value: dept.replace(/\W/, "_").toLowerCase(),
      disabled: false,
    })
  },
  ADD_METRIC(state, metric) {
    state.metricList.push({
      name: metric.replace(/\W/, "_").toLowerCase(),
      label: metric,
      value: metric.replace(/\W/, "_").toLowerCase(),
      disabled: false,
    })
  },
  SET_DEPT(state, dept) {
    console.log("SET_DEPT: " + dept.label)
    state.selectedDept = dept
    createGraphData(state)
  },
  SET_METRIC(state, metric) {
    console.log("SET_METRIC: " + metric.label)
    state.selectedMetric = metric
    createGraphData(state)
  },
  SET_DATA(state, data) {
    state.jsonData = JSON.parse(data)
  },
  UPDATE_GRAPH(state, text) {
    state.graph = text
  },
  UPDATE_MODE(state, text) {
    state.mode = text
  },
  UPDATE_ANNOTATIONS_TOGGLE(state, annotation) {
    switch(annotation) {
      case "userSeizure":
        state.showingAnnotations.userSeizure = !state.showingAnnotations.userSeizure
        break
      case "tabletSeizure":
        state.showingAnnotations.tabletSeizure = !state.showingAnnotations.tabletSeizure
        break
      case "aura":
        state.showingAnnotations.aura = !state.showingAnnotations.aura
        break
      case "comments":
        state.showingAnnotations.comments = !state.showingAnnotations.comments
        break
    }
  },
  UPDATE_MODE_BUTTON_TOGGLE(state) {
    if(state.buttonToggles.healthKitSwitch == "primary") {
      state.buttonToggles.healthKitSwitch = "secondary"
      state.buttonToggles.batterySwitch = "primary"
      state.mode = "eHealth"
    }
    else {
      state.buttonToggles.healthKitSwitch = "primary"
      state.buttonToggles.batterySwitch = "secondary"
      state.mode = "healthKit"
    }
  },
  UPDATE_START_TIME(state, time) {
    if(time == null) {
      state.dateRange = undefined
    }
    else {
      state.dateRange = [time, new Date().toISOString()]
    }
  }
}

const getters = {}

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  actions,
  mutations
})