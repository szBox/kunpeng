<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="100px" :model="search" ref="locationAddForm"></SearchForm>
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
    export default {
        data() {
            return {
                search: {
                    location: ''
                },
                items: [
                    {
                        prop: 'location',
                        type: 'select',
                        label: '上级菜单',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ],
                        options: [
                            {value: 1, text: 'aaa'}
                        ]
                    },
                    {
                        prop: 'location',
                        type: 'input',
                        label: '功能名称',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'location',
                        type: 'input',
                        label: '菜单URL',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'location',
                        type: 'upload',
                        label: '图片',
                        limit: 1, //文件最大上传个数
                        fileList:[],
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'location',
                        type: 'radio',
                        label: '菜单类型',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ],
                        options: [
                            {value: 1, text: 'aaa'}
                        ]
                    },
                    {
                        prop: 'location',
                        type: 'input',
                        label: '排序NO',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '提交',
                                btnType: 'primary',
                                handleClick: (row) => {
                                    this.formValidate('locationAddForm', this.save);
                                }
                            },
                            {
                                text: '返回',
                                btnType: 'primary',
                                handleClick: (row) => {
                                    this.$router.go(-1);
                                }
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            save() {
                let sid = this.s.getJ('baseInfo').sid;
                let params = {};
                if(this.search.bak1 != undefined) {
                    params = {
                        ...this.search,
                        location: this.getNameById([this.search.bak1], this.options),
                        sid
                    }
                }else{
                    params = {
                        ...this.search,
                        sid
                    }
                }
                location.add.r(params).then((res) => {
                    if(res.data.code == 0){
                        this.$message.success('添加成功');
                        this.$routerGo(-1);
                    }
                })
            }
        },
        created() {
        },
        components: {
            SearchForm
        }
    }
</script>
<style lang="less" scoped>
    .function-add{
        padding: 40px;
    }
</style>

