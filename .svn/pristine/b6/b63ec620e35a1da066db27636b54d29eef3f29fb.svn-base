<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
   		<el-button @click="() => this.global.formValidate.call(this,'functionAddForm', getAdd)" type='primary' >添加</el-button>
    	<el-button @click='goBack()' type='danger' >返回</el-button>
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
	import booksType from '@src/network/books/booksType.js';
    export default {
        data() {
            return {
                search: {
                  	name:'',
                },

                items: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '推荐书籍名称',
                        placeholder: '请输入书籍类别',
                        rules: [
                            {required: true, message: '书籍类别不能为空'}
                        ],
                    },
                    
                    

                ]
            }
        },
        methods: {
            getAdd(){
            	booksType.Add(this.search).then(res => {
                    console.log('添加 ' ,res)  //接受到的参数
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

