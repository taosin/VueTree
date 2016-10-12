    var app = new Vue({
        el: '#app',
        data: {

        },
        computed: {
            tree_json: function(){
                return JSON.stringify(this.rootNode);
            }
        },
        components: {
            'tree': Tree
        },
    });