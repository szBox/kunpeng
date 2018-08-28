<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
        <div class="alertBox">
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
    import questApi from '@src/network/subject/quest-setting/questions';
    export default {
        data() {
            return {
                search: {
                    dialogFormVisible: false,
                    answerTypeId: '',
                    choices: [],
                    correctChoiceIds: [],
                    anstname: '',
                    bookName: '',
                    id: 0,
                    name: '',
                    qyname: '',
                    imageUrl: '',
                    insertTime: '',
                    questionsRankId: 1,
                    questionsTypeId: 1,
                    readBookId: '2'
                },
                items: [
                    {
                        prop: 'bookName',
                        type: 'input',
                        label: '阅读书籍名称',
                        placeholder: '请选择书籍名称',
                        rules: [
                            {required: true, message: '书籍名称不能为空'}
                        ],
                        options: [{id: 1, name: '作为一级菜单'}],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        },
                        addition: () => {
                            return [
                                <el-button type="warning" style="margin-left: 20px;" on-click="dialogFormVisible = true">选择书籍</el-button>
                            ]
                        }
                    },
                      {
                          prop: 'questionsTypeId',
                          type: 'select',
                          label: '题目类型',
                          placeholder: '请选择题目类型',
                          rules: [
                              {required: true, message: '题目类型不能为空'}
                          ],
                          options: [
                              {id: 1, name: '记忆选择题'},
                              {id: 2, name: '记忆判断题'},
                              {id: 3, name: '理解选择题'},
                              {id: 4, name: '记忆判断题'}

                          ],
                          defaultProps: {
                              id: 'id',
                              label: 'name'
                          }
                      },
                    {
                        label: '题目星级名称',
                        prop: 'questionsRankId',
                        renderContent: (h, {row}) => {
                            return (
                                <el-rate value={row.questionsRankId} max={row.questionsRankId} disabled text-color="#ff9900"></el-rate>
                            )
                        }
                    },
                      {
                        prop: 'anstname',
                        type: 'input',
                        label: '题目'
                    },
                    {
                        prop: 'imageUrl',
                        type: 'upload',
                        label: '图片',
                        limit: 1, //文件最大上传个数
                        fileList:[]
                    },
                    {
                        prop: 'choices',
                        placeholder: 'A:',
                        type: 'input',
                        label: '选择答案'
                     },
                    {
                        type: 'input',
                        placeholder: 'B:',
                    },
                    {
                        prop: 'anstname',
                        type: 'input',
                        placeholder: 'C:',
                    },
                    {
                        prop: 'anstname',
                        type: 'input',
                        placeholder: 'D:',
                    },
                    {
                        prop: 'correctChoiceIds',
                        type: 'radio',
                        label: '正确答案',
                        rules: [
                            {required: true, message: '位置不能为空'}
                        ],
                        options: [
                            {value: 1, text: 'A'},
                            {value: 2, text: 'B'},
                            {value: 3, text: 'C'},
                            {value: 4, text: 'D'}
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
            chooseBook () {
                this.dialogFormVisible = true
            }
//            initMenu() {
//                questApi.getMenus().then(res => {
//                    if(res.data.code === 0) {
//                        this.items[0].options = this.items[0].options.concat(res.data.data);
//                    }
//                });
//            },
//            initData() {
//                let id = this.$route.params.id;
//                let obj = this.$route.params.obj;
//                if(id) {
//                    this.search = {
//                        parentId: +id,
//                        name: '',
//                        type: 1,
//                        url: '',
//                        iconUrl: '',
//                        sortNo: 1
//                    }
//                }
//                if(obj) this.search = { ...obj };
//            },
//            save() {
//                let params = {
//                    ...this.search
//                };
//                let obj = this.$route.params.obj;
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
//            }
        },
        created() {
//            this.initMenu();
        },
        activated() {
//            this.initData();
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

