<template>
    <div class="questType">
        <div class="content">
            <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="140px" :model="search" ref="functionAddForm"></SearchForm>
        </div>
    </div>
</template>
<script>

    // 模块的引用
    import SearchForm from '@components/search-form/index';

    //  接口
    import answerOption from '@src/network/subject/quest-setting/answer-public.js';
    import ProblemSet from '@src/network/subject/quest-setting/problemSet/dynamic.js'

    export default {
        name: 'questType',
        data: function () {
            return {
                instertime: '',
                search: {
                    current: 1,
                    size: 10,
                    gradeId: '',
                    readType: '',
                    gradeName: ''
                },
                form: {
                    time: '',
                    score: '',
                    number: ''
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
                        prop: 'time',
                        type: 'input',
                        label: '答题时间：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ],
//                        renderContent: (h, { search }) => {
//                            return this.global.dateFilter.ymdHm(search.insertTime)
//                        }
                    },
                    {
                        prop: 'number',
                        type: 'text',
                        label: '题目类型数量  ：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'score',
                        type: 'input',
                        label: '记忆(5分)：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'score',
                        type: 'input',
                        label: '理解(5分)：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'score',
                        type: 'input',
                        label: '思考(5分)：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'score',
                        type: 'text',
                        label: '试卷总分：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'totalNumber',
                        type: 'text',
                        label: '题目总数量：',
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
                                    this.global.formValidate.call(this,'functionAddForm', this.save);
                                }
                            },
                        ]
                    }
                ],
                // table的属性设置
                data: [],
                loading: true, //  加载缓冲
                total: 0  // 总页数,


            }
        },
        components: {
            SearchForm
        },
        methods: {
            pageChange(index) {
                this.search.current = index;
                this.questList();
            },
            // 阅读类型下拉
            readingType () {
                let params = {current: 1, size: 10, name: ''}
                answerOption.readingType(params).then(res => {
                    if(res.data.code === 0) {
                        this.items[1].options  = res.data.data.records
                    }
                })
            },
            readingBook () {
                let params = {current: 1, size: 10, name: '',gradeId: '',readTypeId: ''}
                answerOption.readingBooks(params).then(res => {
                    if(res.data.code === 0) {
                        this.items[2].options  = res.data.data
                    }
                })
            },
            init () {
                let id = this.$route.params.id;
                ProblemSet.get(id).then(res => {
                    if(res.data.code === 0) {
                        this.search = res.data.data;
                        this.instertime = this.global.dateFilter.ymdHm(this.search.insertTime)
                    }
                })
            }
        },
        mounted() {
            this.items[0].options = this.global.session.get('gradeList');
            this.readingType(),
            this.readingBook()
        },
        created() {
            this.init()
        }
    }
</script>
<style lang="less">
    .questType{
    .bread-title{
        padding: 10px 0 10px 20px;
    .last >span{color: #474e5d;}
    }
    .content{
        background-color: #ffffff;
        padding: 40px 60px;
    .button-box{
    .delectBatch{float: right}
    }
    }
    }
</style>

