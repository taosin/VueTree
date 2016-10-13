import VueTree from '../vtree.vue'
window.VueTree=VueTree
const install = function(Vue) {
    if (install.installed) return;
    Vue.component('vtree', VueTree)
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};
module.exports = {
    install
}