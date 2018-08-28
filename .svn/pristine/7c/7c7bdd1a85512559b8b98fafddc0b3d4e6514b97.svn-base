<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
   		<el-button @click="() => this.global.formValidate.call(this,'functionAddForm', getEdit)" type='primary' >更新</el-button>
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
                    id: '',
  					name: ''
                },
                items: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '推荐书籍类别',
                        placeholder: '请输入书籍类别',
                        rules: [
                            {required: true, message: '书籍类别不能为空'}
                        ],
                    },

                ]
            }
        },
        methods: {
             getEdit(){
            	booksType.Edit(this.search).then(res => {
					if(res.data.code === 0) {
						this.$message.success('更新成功');
						this.$router.go(-1);
                    }
                    
                })
            },
            goBack(){
            	this.$router.go(-1);
            }
        },
        created() {
    	 	this.search.id=this.$route.params.init.id;
    	 	this.search.name=this.$route.params.init.name;
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

