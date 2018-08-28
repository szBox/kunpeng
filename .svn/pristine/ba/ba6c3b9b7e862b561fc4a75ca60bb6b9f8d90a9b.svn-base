<template>
    <div class="view">
        <div class="title">
            查看答题设置
        </div>
        <SearchForm :items="items"  :inline="false" :model="search" ref="onSubmit"></SearchForm>
    </div>
</template>
<script>

    import SearchForm from '@components/search-form/index';

    import answerApi from '@src/network/subject/quest-setting/answer';

    export default{
        data () {
            return{
                search: {
                    id: '',
                    name: '',
                    value: '',
                    remark: ''
                },
                items:[
                    {
                        prop: 'name',
                        type: 'text',
                        label: '答题设置名称 ：'
                    },
                    {
                        prop: 'value',
                        type: 'text',
                        label: '答题设置值 ：'
                    },
                    {
                        prop: 'remark',
                        type: 'text',
                        label: '说明 ：'
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
            init() {
                let id = this.$route.params.id;
                answerApi.get(id).then(res => {
                    if(res.data.code === 0) {
                        this.search = res.data.data;
                        console.log(this.search,'00')
                    }
                })
            }

        },
        components: {
            SearchForm
        },
        mounted(){
            this.init()
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
