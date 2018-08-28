<template>
    <div class="add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
    import questApi from '@src/network/subject/quest-setting/quest-type';
    export default {
        data() {
            return {
                search: {
                    name: '',
                    remark: ''
                },
                items: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '题目类型名称',
                        placeholder: '请输入类型名称',
                        rules: [
                            {required: true, message: '类型名称不能为空'}
                        ]
                    },
                    {
                        prop: 'remark',
                        type: 'textarea',
                        label: '说明',
                        placeholder: '请输入说明',
                        rules: [
                            {required: true, message: '说明不能为空'}
                        ],
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '提交',
                                btnType: 'primary',
                                handleClick: (row) => {
                                    this.global.formValidate.call(this,'functionAddForm', this.save);
                                }
                            },
                            {
                                text: '返回',
                                btnType: 'danger',
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
            // 添加
            save() {
                let params = {
                    ...this.search   //  参数
                };
                let obj = this.$route.params.obj;
//                if(obj) {
//                    questApi.edit(params).then((res) => {
//                        if(res.data.code == 0){
//                            this.$message.success('修改成功');
//                            this.$router.go(-1);
//                        }
//                    })
//                }else{
//                    questApi.add(params).then((res) => {
//                        if(res.data.code == 0){
//                            this.$message.success('添加成功');
//                            this.$router.go(-1);
//                        }
//                    })
//                }
                questApi.add(params).then((res) => {
                    if(res.data.code == 0){
                        this.$message.success('添加成功');
                        this.$router.go(-1);
                    }
                })
            }
        },
        created() {
        },
        activated() {
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

