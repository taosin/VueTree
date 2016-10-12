import vtree from '../vtree.vue'
window.vtree = vtree
var vTree = {
  vtree: component,
  install: function(Vue) {
    Vue.component('vtree', vtree)
  }
}
module.exports = vTree