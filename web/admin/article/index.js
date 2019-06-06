var vm = new Vue({
    el: "#admin",
    data: {
        form:{
            id:''
        }
    },
    methods: {
        add: function () {
            layer.open({
                type: 2,
                title: this.form.id?'修改文章':'添加文章',
                closeBtn:true,
                shade: [0.8],
                area: ['50%', '80%'],
                shift:2,
                content:['/admin/article/create','yes']
            });
        }
    }




});

