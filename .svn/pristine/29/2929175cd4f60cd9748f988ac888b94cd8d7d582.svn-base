<template>
    <div class="view">
        <div class="title">
            更新题型分类
        </div>
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
    </div>
</template>
<script>

    import SearchForm from '@components/search-form/index';
    import reading from '@src/network/subject/quest-setting/reading.js';


    export default{
        data () {
            return{
                search: {
                    stuName: this.$route.query.stuName,
                    className: this.$route.query.className,
                    remark: this.$route.query.remark,
                    verifyName: this.$route.verifyName,
                    verifyRemark: this.$route.query.verifyRemark,
                    verifyStatus: this.$route.query.verifyStatus,
                    answerNum: ''
                },
                items: [
                    {
                        prop: 'stuName',
                        type: 'text',
                        label: '学生姓名：'
                    },
                    {
                        prop: 'className',
                        type: 'text',
                        label: '所在年级：'
                    },
                    {
                        prop: 'verifyName',
                        type: 'text',
                        label: '申请挑战年级:'
                    },
                    {
                        prop: 'remark',
                        type: 'text',
                        label: '申请原因：'
                    },
                    {
                        prop: 'verifyStatus',
                        type: 'select',
                        label: '申请状态：',
                        placeholder: '请选择',
                        options: [
                            {id: 0, name: '未处理'},
                            {id: 1, name: '通过'},
                            {id: 2, name: '驳回'}
                        ],
                        formatter: (row => {
                            if(row.verifyStatus == 0) {
                                return '未处理';
                            }else if(row.type == 2) {
                                return '为通过';
                            }else{
                                return '驳回';
                            }
                        }),
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'answerNum',
                        type: 'input',
                        label: '新增答题机会：'
                    },
                    {
                        prop: 'verifyRemark',
                        type: 'textarea',
                        label: '审批原因：'
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
            save() {
                let params = {
                    ...this.search
                };
                console.log(params,'3333')
                reading.edit(params).then((res) => {
                    if(res.data.code == 0){
                        this.$message.success('修改成功');
                        this.$router.go(-1);
                    }
                })
            }

        },
        components: {
            SearchForm
        },
        created(){
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
