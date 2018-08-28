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
    import setApi from '@src/network/subject/quest-setting/problemSet/dynamic.js';

    export default {
        name: 'questType',
        data: function () {
            return {
                search: {
                    questionScore: '',
                    questionsCount: '',
                    memory: '',
                    understand: '',
                    thinking: '',
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
                        prop: 'insertTime',
                        type: 'input',
                        label: '答题时间：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ],
                        renderContent: (h, { row }) => {
                            return this.global.dateFilter.ymdHm(row.insertTime)
                        }
                    },
                    {
                        label: '类型数量分配 ：'
                    },
                    {
                        prop: 'memory',
                        type: 'input',
                        label: '记忆(5分)：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'understand',
                        type: 'input',
                        label: '理解(5分)：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'thinking',
                        type: 'input',
                        label: '思考(5分)：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'questionScore',
                        type: 'input',
                        label: '试卷总分：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'questionsCount',
                        type: 'input',
                        label: '题目总数量：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    }
                ],
                // table的属性设置
                data: [],
                loading: true, //  加载缓冲
                total: 0  // 总页数
            }
        },
        components: {
            SearchForm
        },
        methods: {
            pageChange(index) {
                this.search.current = index;
            },
            save() {
                let params = {
                    answerDate: this.search.answerDate,
                    id: this.search.id,
                    questionScore: this.search.questionScore,
                    questionsCount: this.search.questionsCount
                };
                setApi.edit(params).then((res) => {
                    if(res.data.code == 0){
                        this.$message.success('修改成功');
                        this.$router.go(-1);
                    }
                })
            },
            init () {
                let id = this.$route.params.id;
                console.log(id),
                    setApi.get(id).then(res => {
                        if(res.data.code === 0) {
                            this.search.questionScore = res.data.data.questionScore;
                            this.search.questionsCount = res.data.data.questionsCount;
                            this.search.id = res.data.data.id;
                            this.search.gradeId = res.data.data.gradeId;
                            this.search.insertTime = res.data.data.insertTime;
                            this.search.answerDate = res.data.data.answerDate;

                        }
                    })
            }
        },
        mounted() {
            this.items[0].options = this.global.session.get('gradeList')
        },
        computed: {
            // 总分
            questionScore: {
                get () {
                    return (this.search.thinking * 5) + (this.search.memory * 5) + (this.search.understand * 5)
                }
            },
            // 总数量
            questionsCount: {
                get () {
                    return parseInt(this.search.thinking ? this.search.thinking : 0) + parseInt(this.search.memory ? this.search.memory : 0) + parseInt(this.search.understand ? this.search.understand : 0)
                }
            }
        },
        // 监听数据变化
        watch: {
            questionScore (value) {
                this.search.questionScore = value
            },
            questionsCount (value) {
                console.log(value,'112')
                this.search.questionsCount = value
            }
        },
        created() {
            this.init()
        }
    }
</script>
<style lang="less" type="text/less">
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

