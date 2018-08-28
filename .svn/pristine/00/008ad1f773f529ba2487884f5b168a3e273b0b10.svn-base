<template>
    <div class="function-add">
    	<h4>查看阅读书籍</h4>
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
    	<el-button @click='goBack()' type='danger'  style='margin-left: 115px;'>返回</el-button>
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
	import booksSet from '@src/network/books/booksSet.js';
    export default {
        data() {
            return {
                search: {
                  	coverUrl: '',
					gradeName:'',
					name: "",
					readTypeName: '',

                },

                items: [
                    {
                        prop: 'name',
                        type: 'text',
                        label: '阅读书籍名称',
                       
                    },
                    {
                        prop: 'coverUrl', 		             	
                        label: '书籍封面',
                        type: 'img',
                    },
                     {
                        prop: 'readTypeName',
                        type: 'text',
                        label: '阅读类型',
                       
                    },
                     {
                        prop: 'gradeName',
                        type: 'text',
                        label: '年级',
                       
                    },

                ]
            }
        },
        methods: {
            
            goBack(){
            	this.$router.go(-1);
            }
          
        },
        
         created() {
         	console.log(this.$route.params.init)
    	 	this.search=this.$route.params.init
			if(this.search.coverUrl.indexOf('?uploadId')){
	           this.search.coverUrl=this.search.coverUrl.split('?uploadId')[0]
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
    .el-form-item__label{
    	text-align: center !important;
    }
</style>

