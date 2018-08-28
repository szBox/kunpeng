<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
    import grade from '@src/network/home/gradeList.js'
    import type from '@src/network/home/bookType.js'
    export default {
        data() {
            return {
                search: {
                    gradeId: '',
                    name: '',
                    type: 1,
                    url: '',
                    iconUrl: '',
                    sortNo: 1
                },
                items: [
                    {
                        prop: 'parentId',
                        type: 'input',
                        label: '推荐书籍名称',
                        placeholder: '请输入书籍名称',
                        rules: [
                            {required: true, message: '书籍名称不能为空'}
                        ],
                    },
                    {
                        prop: 'parentId',
                        type: 'input',
                        label: '作者',
                        placeholder: '请输入作者',
                        rules: [
                            {required: true, message: '作者不能为空'}
                        ],
                    },
                    {
                        prop: 'parentId',
                        type: 'input',
                        label: '出版社',
                        placeholder: '请输入出版社',
                        rules: [
                            {required: true, message: '出版社不能为空'}
                        ],
                    },
                     {
                        prop: 'gradeId',
                        type: 'select',
                        label: '年级',
                        rules: [
                            {required: true ,message: '年级不能为空'}
                        ],
                        options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        hasAll: true
                    },
                     {
                        prop: 'classId',
                        type: 'select',
                        label: '类别',
                        rules: [
                            {required: true , message: '类别不能为空'}
                        ],
                        options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        hasAll: true
                    },
                  
                    {
                        prop: 'iconUrl',
                        type: 'upload',
                        label: '书籍封面',
                        limit: 1, //文件最大上传个数
                        fileList:[],
                        rules: [
                            {required: true, message: '封面不能为空'}
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
            chooseBook() {
                
            },
            gradeList(){
				grade.gradeList().then(res => {
                    console.log('grade 下拉列表',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[3].options = res.data.data;
                    }
                    
                })
			},
           	
            initData() {
                let id = this.$route.params.id;
                let obj = this.$route.params.obj;
                if(id) {
                    this.search = {
                        parentId: +id,
                        name: '',
                        type: 1,
                        url: '',
                        iconUrl: '',
                        sortNo: 1
                    }
                }
                if(obj) this.search = { ...obj };
            },
            save() {
                let params = {
                    ...this.search
                };
                let obj = this.$route.params.obj;
                if(obj) {
                    funcApi.edit(params).then((res) => {
                        if(res.data.code == 0){
                            this.$message.success('修改成功');
                            this.$router.go(-1);
                        }
                    })
                }else{
                    funcApi.add(params).then((res) => {
                        if(res.data.code == 0){
                            this.$message.success('添加成功');
                            this.$router.go(-1);
                        }
                    })
                }
            }
        },
        created() {
            this.gradeList();
        },
        activated() {
            this.initData();
        },
        components: {
            SearchForm
        }
    }
</script>
<style lang="less" scoped>
    .function-add{
        padding: 40px;
        background-color: #ffffff;
    }
</style>

