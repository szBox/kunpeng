<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
   		
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
	import booksSet from '@src/network/books/booksSet.js';
    export default {
        data() {
            return {
                search: {
                  	name:'',
                  	remark:''
                },

                items: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '阅读类型名称',
                        placeholder: '请输入阅读类型',
                        rules: [
                            {required: true, message: '书籍类别不能为空'}
                        ],
                    },
                    {
                        prop: 'remark', 		             	
                        label: '说明',
                        placeholder: '请输入阅读说明',
                        rules: [
                            {required: true, message: '书籍类别不能为空'}
                        ],
                        type: 'textarea',
//						renderContent: () => {
//							return <el-input type="textarea" v-model="remark"></el-input>
//						}
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
            getAdd(){
            	booksSet.Add(this.search).then(res => {
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

