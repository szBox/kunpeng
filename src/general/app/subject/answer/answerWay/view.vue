<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="100px" :model="search" ref="functionAddForm"></SearchForm>
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
                    gptypeName: '',
                    gradeId: ''
                },
                items: [
                    {
                        prop: 'gradeId',
                        type: 'select',
                        label: '年级',
                        placeholder: '请选择年级',
                        options: [
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'gradeId',
                        type: 'select',
                        label: '年级',
                        placeholder: '请选择年级',
                        options: [
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'gradeId',
                        type: 'select',
                        label: '年级',
                        placeholder: '请选择年级',
                        options: [
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
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

<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="100px" :model="search" ref="functionAddForm"></SearchForm>
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';

    import answerWay from '@src/network/subject/quest-setting/answerway';
    export default {
        data() {
            return {
                search: {
                    name: '',
                    gptypeName: '',
                    gradeName: '',


                },
                items: [
                    {
                        prop: 'gradeName',
                        type: 'text',
                        label: '年级:'
                    },
                    {
                        prop: 'gptypeName',
                        type: 'text',
                        label: '答题类型:'
                    },
                    {
                        prop: 'gptypeName',
                        type: 'text',
                        label: '答题方式:'
                    },
                    {
                        type: 'action',
                        actionList: [
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
            // 添加
            getDetail() {
                let obj = this.$route.params.obj;
                this.search = obj;
                console.log(obj)
            }
        },
        mounted(){
            this.items[0].options = this.global.session.get('gradeList')
            this.getDetail()
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

