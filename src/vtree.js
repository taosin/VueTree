import VueTree from '../vtree.vue'
window.VueTree = VueTree
var VueTree = {
  vtree: component,
  install: function(Vue) {
    Vue.component('vtree', vtree)
  }
}
module.exports = VueTree