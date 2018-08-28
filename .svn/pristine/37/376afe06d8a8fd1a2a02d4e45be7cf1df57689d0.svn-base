<template>
    <div class="questType">
        <div class="content">
            <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="140px" :model="search" ref="functionAddForm"></SearchForm>
            <div class="alertBox">
                <el-dialog :visible.sync="centerDialogVisible">
                    <div class="top">
                        <span>共勾选: 道题</span>
                        <span>共:分</span>
                    </div>
                    <SearchForm :items="items2" :showMessage="true" :inline="true" labelWidth="140px" :model="form"></SearchForm>
                    <el-checkbox-group v-model="checkList" class="checkList">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                    </el-checkbox-group>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
            </div>
        </div>
    </div>
</template>
<script>

    // 模块的引用
    import SearchForm from '@components/search-form/index';

    //  接口
    import answerOption from '@src/network/subject/quest-setting/answer-public.js';

    export default {
        name: 'questType',
        data: function () {
            return {
                centerDialogVisible: true,
                checkList: [],
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
                        prop: 'readType',
                        type: 'select',
                        label: '阅读类型',
                        placeholder: '请选择阅读类型',
                        options: [
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'gradeName',
                        type: 'select',
                        label: '阅读书籍',
                        placeholder: '请选择阅读书籍',
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
                        ]
                    },
                    {
                        prop: 'number',
                        type: 'input',
                        label: '题目总数量：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'score',
                        type: 'input',
                        label: '试卷总分：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        prop: 'totalNumber',
                        type: 'text',
                        label: '已勾选：',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ],
                        addition: () => {
                            return [
                                <el-button type="primary" on-click={() => this.chooseQust()} style="margin-left: 20px;">查询</el-button>
                            ]
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
                            }
                        ]
                    }
                ],
                items2: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '题目类型名称',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ]
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '查询',
                                btnType: 'primary',
                                handleClick: (row) => {
                                    this.questList();
                                }
                            }
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
            // 选择题目
            checkQust () {
                this.centerDialogVisible = true;
            }

        },
        mounted() {
            this.items[0].options = this.global.session.get('gradeList');
            this.readingType(),
            this.readingBook()
        },
        computed: {
//            totalScore: function () {
//                return this.score = this.totalNumber * 5
//            }
        }
    }
</script>
<style lang="less">
    .checkList .el-checkbox{display: block;margin-left: 0;}
</style>

