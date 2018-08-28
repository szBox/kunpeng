<template>
    <div class="problemSet">
        <div class="contend">
            <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="100px" :model="search" ref="functionAddForm"></SearchForm>
        </div>
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
    export default {
        data() {
            return {
                search: {
                    parentId: 1,
                    name: '',
                    type: 1,
                    url: '',
                    iconUrl: '',
                    sortNo: 1
                },
                items: [
                    {
                        prop: 'parentId',
                        type: 'select',
                        label: '年级',
                        placeholder: '请选择年级',
                        rules: [
                            {required: true, message: '年级不能为空'}
                        ],
                        options: [{id: 1, name: '三年级'}],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'parentId',
                        type: 'select',
                        label: '阅读类型',
                        placeholder: '请选择阅读类型',
                        rules: [
                            {required: true, message: '阅读类型不能为空'}
                        ],
                        options: [{id: 1, name: '必读'}],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'parentId',
                        type: 'select',
                        label: '阅读书籍',
                        placeholder: '请选择阅读书籍',
                        rules: [
                            {required: true, message: '阅读书籍不能为空'}
                        ],
                        options: [{id: 1, name: 'XX'}],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'num   ',
                        type: 'input',
                        label: '题目数量',
                        addition: () => {
                            return [
                                <el-input v-model="input" placeholder="请输入内容" label="试卷总分"></el-input>,
                                <el-input v-model="input" placeholder="请输入内容" label="答题时间"></el-input>


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
//        methods: {
//            initMenu() {
//                funcApi.getMenus().then(res => {
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
//                    funcApi.edit(params).then((res) => {
//                        if(res.data.code == 0){
//                            this.$message.success('修改成功');
//                            this.$router.go(-1);
//                        }
//                    })
//                }else{
//                    funcApi.add(params).then((res) => {
//                        if(res.data.code == 0){
//                            this.$message.success('添加成功');
//                            this.$router.go(-1);
//                        }
//                    })
//                }
//            }
//        },
//        created() {
//            this.initMenu();
//        },
//        activated() {
//            this.initData();
//        },
        components: {
            SearchForm
        }
    }
</script>
<style lang="less" scoped>
    .problemSet{
        padding: 10px;
        .contend{
            background-color: #fff;
            padding: 10px;

        }
    }
</style>

