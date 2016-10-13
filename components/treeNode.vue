<style lang="less">
</style>
<template>
    <li draggable="true" @dragstart.stop="handleDragStart($event)" @dragenter="handleDragEnter" @dragleave="handleDragLeave" @dragover.prevent="handleDragOver" @drop.stop="handleDrop($event)" @dragend.prevent="handleDragEnd">
        <span @mouseenter="showOprators" @mouseleave="hideOprators">
                <a>{{node.name}}</a>
                <small v-if="show_oprators">
                    <a @click="editNode" href="#">edit</a> | <a @click="removeNode" href="#">remove</a> | <a @click="addNode" href="#">add</a>
                </small>
            </span>
        <ul v-show="node.children.length">
            <tree-node v-for="node in node.children" :node.sync="node"></tree-node>
        </ul>
    </li>
</template>
<script>
export default {
    name: 'tree-node',
    props: ['node'],
    data() {
        return {
            show_oprators: false,
            is_draged: false,
        }
    },
    methods: {
        handleDrop: function(e) {
            var vm = window.__drop_node__;

            this.$el.style.backgroundColor = '';
            vm.$el.style.backgroundColor = '';

            var __parent__ = this;
            while (__parent__ !== undefined) {
                if (__parent__ === vm) {
                    return;
                }
                __parent__ = __parent__.$parent;
            }

            var current_node = vm.node;
            vm.$parent.node.children = vm.$parent.node.children.filter(function(node) {
                return node !== current_node;
            });
            this.node.children.push(current_node);

        },
        handleDragEnd: function() {
            this.$el.style.backgroundColor = '';
        },
        handleDragStart: function(e) {
            this.show = false;
            this.is_draged = true;
            window.__drop_node__ = this;
            this.$el.style.backgroundColor = 'grey';
        },
        handleDragEnter: function() {
            if (!this.is_draged) this.$el.style.backgroundColor = "yellow";
        },
        handleDragLeave: function() {
            if (!this.is_draged) this.$el.style.backgroundColor = "";
        },
        handleDragOver: function() {},

        showOprators: function() {
            this.show_oprators = true;
        },
        hideOprators: function() {
            this.show_oprators = false;
        },

        addNode: function() {
            var name = prompt("Input the name of new node", "new node");
            if (!!name && !!name.trim()) {
                this.node.children.push({
                    name: name.trim(),
                    children: []
                });
            }
        },
        removeNode: function() {
            if (confirm('Do you want to remove node: ' + this.node.name)) {
                var current_node = this.node;
                this.$parent.node.children = this.$parent.node.children.filter(function(node) {
                    return node !== current_node;
                });
            }
        },
        editNode: function() {
            var name = prompt("Input the name of new node", this.node.name);
            if (!!name && !!name.trim()) {
                this.node.name = name.trim();
            }
        }
    }
}
</script>
