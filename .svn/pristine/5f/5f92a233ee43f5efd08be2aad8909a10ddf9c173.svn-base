<template>
    <div class="questType">
        <div class="content">
            <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="140px" :model="search" ref="functionAddForm"></SearchForm>
            <options style='margin-left: 40px;' :message="this.search" :prompt="prompt"></options>
            <div class="alertBox">
                <el-dialog
                    title="温馨提示"
                    :visible.sync="prompt"
                    width="30%"
                    center>
                    <span>试卷保存成功，名为：钢铁是怎样炼成的-试卷1，是否前往查看？</span>
                    <span slot="footer" class="dialog-footer">
                       <el-button type="primary">是</el-button>
                       <el-button type="primary" @click="prompt = false">否</el-button>
                    </span>
                </el-dialog>
            </div>
        </div>
    </div>
</template>
<script>

    // 模块的引用
    import SearchForm from '@components/search-form/index';
    import Options from '@components/options/index'

    //  接口
    import answerOption from '@src/network/subject/quest-setting/answer-public.js';
    import questionApi from '@src/network/subject/quest-setting/questions.js'

    export default {
        name: 'questType',
        data: function () {
            return {
                prompt: false,
                search: {
                    imageUrl: '',
                    name: '',
                    questionsRankId: 2,
                    questionsTypeId:'',
                    readBookId: '',
                    gradeId: '',
                    typeReadId:'',
                },
                items: [
                    {
                        prop: 'gradeId',
                        type: 'select',
                        label: '年级',
                        placeholder: '请选择年级',
                        options: [
                        ],
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        },
                        change: (val) => {
                        	this.search.readBookId='';
                        	this.search.questionsTypeId='';
                            this.readingType();
                            this.questionType (val)
                            this.readingBook(val, this.search.readTypeId)
                        }
                    },
                    {
                        prop: 'typeReadId',
                        type: 'select',
                        label: '阅读类型',
                        placeholder: '请选择阅读类型',
                        options: [
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        },
                        change: (val) => {
                        	this.search.readBookId='';
                            this.readingBook(this.search.gradeId, val);
                        }
                    },
                    {
                        prop: 'readBookId',
                        type: 'select',
                        label: '阅读书籍',
                        placeholder: '请选择阅读书籍',
                        options: [
                        ],
                        rules: [
                            {required: true, message: '阅读书籍不能为空'}
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                	{
                        prop: 'questionsTypeId',
                        type: 'select',
                        label: '题目类型',
                        placeholder: '请选择题目类型',
                        options: [
                        ],
                        rules: [
                            {required: true, message: '题目类型不能为空'}
                        ],
                        defaultProps: {
                            id: 'typeId',
                            label: 'typeName'
                        }
                    },
                    {
                        prop: 'name',
                        type: 'textarea',
                        label: '题目：',
                        
                        rules: [
                            {required: true, message: '题目不能为空'}
                        ]
                    },
                     {
                         label: '题目星级难度：',
                         prop: 'questionsRankId',
                         type:'rate',
                         rules: [
                            {required: true, message: '难度不能为空'}
                        ]
                     },
                    {
                        prop: 'imageUrl',
                        type: 'upload',
                        label: '图片：',
                        limit: 1, //文件最大上传个数
                        fileList:[]
                    }
                ],
                // table的属性设置
                data: [],
                loading: true, //  加载缓冲
                total: 0  // 总页数
            }
        },
        components: {
            SearchForm,
            Options
        },
        methods: {
            childMess(data){
               for(var i = 1; i <= data.length; i++){
                  this.choices = data[1];
                  this.correctChoiceIds = data[0]
               }

            },
            pageChange(index) {
                this.search.current = index;
                this.questList();
            },
            // 阅读类型下拉
            readingType () {
                let params = {current: 1, size: 10, gradeId: ''}
                answerOption.readingType(params).then(res => {
                	console.log('阅读类型',res)
                    if(res.data.code === 0) {
                        this.items[1].options  = res.data.data.records;
                    }
                })
            },
             // 题目类型下拉
            questionType (val) {
                let params = { gradeId: val}
                answerOption.questionType(params).then(res => {
                	console.log('题目类型',res)
                    if(res.data.code === 0) {
                        this.items[3].options  = res.data.data;
                    }
                })
            },
            // 阅读图书下拉
            readingBook (gradeId, readTypeId) {
                let params = {gradeId,readTypeId}
                answerOption.readingBooks(params).then(res => {
                    if(res.data.code === 0) {
                        this.items[2].options  = res.data.data
                    }
                })
            }
        },
        mounted() {
            // 年级下拉
            this.items[0].options = this.global.session.get('gradeList')


        }
    }
</script>
<style lang="less" type="text/less">

</style>

