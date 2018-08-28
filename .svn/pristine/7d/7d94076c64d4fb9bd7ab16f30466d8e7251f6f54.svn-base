<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
   		<el-button @click="() => this.global.formValidate.call(this,'functionAddForm', getEdit)" type='primary' >更新</el-button>
    	<el-button @click='goBack()' type='danger' >返回</el-button>
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
 	import booksSet from '@src/network/books/booksSet.js';
    export default {
        data() {
            return {
                search: {
                  	coverUrl: "",
					gradeId: '',
					name: "",
					readTypeId: ''
                },
				readTypeSle:{
					name:'',
					sid: this.global.session.get('user').sid,
					current: 1,
					size:9999999
				},
                items: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '阅读书籍名称',
                        placeholder: '请输入书籍名称',
                        rules: [
                            {required: true, message: '书籍名称不能为空'}
                        ],
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
                        prop: 'readTypeId',
                        type: 'select',
                        label: '阅读类型',
                        rules: [
                            {required: true , message: '阅读类型不能为空'}
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
                   
                ]
            }
        },
        methods: {
            selType(){
            	booksSet.readSel(this.readTypeSle).then(res => {
                    console.log('类别 下拉列表',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[2].options = res.data.data.records;
                    }
                    
                })
            },
            getEdit(){
            	booksSet.Edit(this.search).then(res => {
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
        	console.log(this.$route.params.init);
    	 	this.search=this.$route.params.init
    	 	if(this.search.coverUrl.indexOf('?uploadId')){
	           this.search.coverUrl=this.search.coverUrl.split('?uploadId')[0]
	        }
        	this.items[1].fileList.push({
        		name: '',
        		url: this.search.coverUrl
        	})
        	this.selType();
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

