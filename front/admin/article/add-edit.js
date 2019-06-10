var vm = new Vue({
    el: "#admin",
    data: {},
    methods: {
        submit: function () {
            axios.post('/admin/article/test', {id:1}).then(function () {

            });


        }

    }

});