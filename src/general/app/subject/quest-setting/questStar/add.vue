<template>
    <div class="view">
        <div class="title">
           	 添加题目星级
        </div>
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="100px" :model="search" ref="functionAddForm"></SearchForm>
    </div>
</template>
<script>

    import SearchForm from '@components/search-form/index';
    import questApi from '@src/network/subject/quest-setting/questStar';
    export default{
        data () {
            return{
                search: {
                },
                items:[
                    {
                        prop: 'rank',
                        type: 'input',
                        label: '题目星级：',
                        placeholder: '请输入题目星级',
                        rules: [
                            {required: true, message: '题目星级不能为空'}
                        ],
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
            save() {
                let params = {
                    id: this.search.id,
                    rank: this.search.rank,
                    remark: this.search.remark
                };
                questApi.add(params).then((res) => {
                    if(res.data.code == 0){
                        this.$message.success('修改成功');
                        this.$router.go(-1);
                    }
                })
            },
      
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
