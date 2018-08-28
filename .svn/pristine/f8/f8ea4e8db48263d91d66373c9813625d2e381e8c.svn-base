<template>
    <div class="view">
        <div class="title">
            更新分值管理
        </div>
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="100px" :model="search" ref="functionAddForm"></SearchForm>
    </div>
</template>
<script>

    import SearchForm from '@components/search-form/index';
    import scoreNum from '@src/network/subject/quest-setting/score';
    // 题目类型
    import quseType from '@src/network/subject/quest-setting/answer-public.js'

    export default{
        data () {
            return{
                search: {
                    value: '',
                    typeId: '',
                    gradeId: ''
                },
                items:[
                    {
                        prop: 'gradeId',
                        type: 'select',
                        label: '年级:',
                        placeholder: '请选择',
                        options: [
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'typeId',
                        type: 'select',
                        label: '题目类型: ',
                        placeholder: '请选择',
                        options: [
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'value',
                        type: 'input',
                        label: '分值：'
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '提交',
                                btnType: 'danger',
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
            save() {
                let params = {
                    gradeId: this.search.gradeId,
                    typeId: this.search.typeId,
                    value: this.search.value
                };
                scoreNum.add(params).then((res) => {
                    if(res.data.code == 0){
                        this.$message.success('添加成功');
                        this.$router.go(-1);
                    }else {
                        this.$message.success('修改失败');
                    }
                })
            },
            questType () {
                quseType.questType().then(res => {
                    if(res.data.code === 0) {
                        this.items[1].options = res.data.data
                    }
                })
            }
        },
        components: {
            SearchForm
        },
        mounted () {
            this.questType();
            this.items[0].options = this.global.session.get('gradeList')
        },
        created () {
        }
    }
</script>
<style lang="less">
    .view{
        background-color: #ffffff;
        padding: 40px;
    .title{
        font-size: 18px;
        color: #454c5c;
        padding-left: 5px;
        font-weight: bold;
        border-left: 4px solid #2C8DEE;
        margin-bottom: 20px;
    }
    }

</style>
