<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
   		
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
	import booksAdmin from '@src/network/books/booksAdmin.js';
    export default {
        data() {
            return {
                search: {
                    gradeId: '',
                    name: '',
                    author:'',
                    coverUrl:'',
                    press:'',
                    typeId:''
                },
  
                
                types:{
                	current: 1,
					name: "",
					sid:  this.global.session.get('user').sid,
					size: 9999
                }
                ,
                items: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '推荐书籍名称',
                        placeholder: '请输入书籍名称',
                        rules: [
                            {required: true, message: '书籍名称不能为空'}
                        ],
                    },
                    {
                        prop: 'author',
                        type: 'input',
                        label: '作者',
                        placeholder: '请输入作者',
                        rules: [
                            {required: true, message: '作者不能为空'}
                        ],
                    },
                    {
                        prop: 'press',
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
                        change: (val) => {
//                         console.log(val)
                        },
                    },
                     {
                        prop: 'typeId',
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
                    },
                  
                    {
                        prop: 'coverUrl',
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
                                    this.global.formValidate.call(this,'functionAddForm', this.getAdd);
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
            getType(){
            	booksAdmin.booksTyesList(this.types).then(res => {
//                  console.log('类别 下拉列表',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[4].options = res.data.data.records;
                    }
                    
                })
            },
            getAdd(){
            	booksAdmin.Add(this.search).then(res => {
//                  console.log('添加 ' ,res)  //接受到的参数
					if(res.data.code === 0) {
						this.$message.success('添加成功');
						this.$router.go(-1);
                    }
                    
                })
            },
            goBack(){
            	this.$router.go(-1);
            }
          
        },
        created() {
        	this.getType();
        	this.items[3].options  =this.global.session.get('gradeList')
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

