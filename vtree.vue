<style lang="less">
</style>
<template>
    <ul>
        <tree-node :node.sync="node"></tree-node>
        <ul>
</template>
<script>
import TreeNode from "./components/treeNode.vue";
export default {
    name: 'tree',
    components: {
        'tree-node': TreeNode
    },
    props: ['node'],
    data(){
        return {
            rootNode: {
                name: 'Root',
                children: [{
                    name: 'A',
                    children: [{
                        name: 'A1',
                        children: []
                    }, {
                        name: 'A2',
                        children: []
                    }]
                }, {
                    name: 'B',
                    children: [{
                        name: 'B1',
                        children: []
                    }, {
                        name: 'B2',
                        children: []
                    }]
                }, {
                    name: 'C',
                    children: [{
                        name: 'C1',
                        children: []
                    }, {
                        name: 'C2',
                        children: []
                    }]
                }, ]
            },
            title: 'Vue 无限层级树增删改以及拖拽节点'
        }
    },
    methods: {

    }
}
</script>
