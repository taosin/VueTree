!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="./dist/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),i=r(o);window.vtree=i["default"];var a={vtree:component,install:function(e){e.component("vtree",i["default"])}};e.exports=a},function(e,t,n){var r,o,i={};n(2),r=n(6),o=n(12),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(a.template=o),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=c[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(d(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(d(r.parts[i],t));c[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],d=o[3],u={css:a,media:s,sourceMap:d};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=h(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function d(e,t){var n,r,o;if(t.singleton){var i=m++;n=v||(v=s(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=s(t),r=l.bind(null,n),o=function(){a(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],d=c[s.id];d.refs--,i.push(d)}if(e){var u=o(e);r(u,t)}for(var a=0;a<i.length;a++){var d=i[a];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete c[d.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),i=r(o);t["default"]={name:"tree",components:{"tree-node":i["default"]},props:["node"],data:function(){return{rootNode:{name:"Root",children:[{name:"A",children:[{name:"A1",children:[]},{name:"A2",children:[]}]},{name:"B",children:[{name:"B1",children:[]},{name:"B2",children:[]}]},{name:"C",children:[{name:"C1",children:[]},{name:"C2",children:[]}]}]},title:"Vue 无限层级树增删改以及拖拽节点"}},methods:{}}},function(e,t,n){var r,o,i={};n(8),r=n(10),o=n(11),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(a.template=o),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"tree-node",props:["node"],data:function(){return{show_oprators:!1,is_draged:!1}},methods:{handleDrop:function(e){var t=window.__drop_node__;this.$el.style.backgroundColor="",t.$el.style.backgroundColor="";for(var n=this;void 0!==n;){if(n===t)return;n=n.$parent}var r=t.node;t.$parent.node.children=t.$parent.node.children.filter(function(e){return e!==r}),this.node.children.push(r)},handleDragEnd:function(){this.$el.style.backgroundColor=""},handleDragStart:function(e){this.show=!1,this.is_draged=!0,window.__drop_node__=this,this.$el.style.backgroundColor="grey"},handleDragEnter:function(){this.is_draged||(this.$el.style.backgroundColor="yellow")},handleDragLeave:function(){this.is_draged||(this.$el.style.backgroundColor="")},handleDragOver:function(){},showOprators:function(){this.show_oprators=!0},hideOprators:function(){this.show_oprators=!1},addNode:function(){var e=prompt("Input the name of new node","new node");e&&e.trim()&&this.node.children.push({name:e.trim(),children:[]})},removeNode:function(){if(confirm("Do you want to remove node: "+this.node.name)){var e=this.node;this.$parent.node.children=this.$parent.node.children.filter(function(t){return t!==e})}},editNode:function(){var e=prompt("Input the name of new node",this.node.name);e&&e.trim()&&(this.node.name=e.trim())}}}},function(e,t){e.exports=' <li draggable=true @dragstart.stop=handleDragStart($event) @dragenter=handleDragEnter @dragleave=handleDragLeave @dragover.prevent=handleDragOver @drop.stop=handleDrop($event) @dragend.prevent=handleDragEnd> <span @mouseenter=showOprators @mouseleave=hideOprators> <a @click=toggle>{{node.name}}</a> <small v-if=show_oprators> <a @click=editNode href=#>edit</a> | <a @click=removeNode href=#>remove</a> | <a @click=addNode href=#>add</a> </small> </span> <ul v-show=node.children.length> <tree-node v-for="node in node.children" :node.sync=node></tree-node> </ul> </li> '},function(e,t){e.exports=" <ul> <tree-node :node.sync=node></tree-node> <ul> </ul></ul>"}]);