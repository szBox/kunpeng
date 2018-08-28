<template>
    <div class="view">
        <h4>推荐书籍详情</h4>
        <SearchForm :items="items"   :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
        
        
    </div>
</template>
<script>

    import SearchForm from '@components/search-form/index';
	import booksAdmin from '@src/network/books/booksAdmin.js';
    export default{
        data () {
           return {
                search: {
                    gradeName: '',
                    name: '',
                    author:'',
                    coverUrl:'',
                    press:'',
                    typeName:''
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
                        type: 'text',
                        label: '推荐书籍名称：',
                    },
                    {
                        prop: 'author',
                        type: 'text',
                        label: '作者：',
                    },
                    {
                        prop: 'press',
                        type: 'text',
                        label: '出版社：',
                      
                    },
                     {
                        prop: 'gradeName',
                        type: 'text',
                        label: '年级：',
                       
                    },
                     {
                        prop: 'typeName',
                        type: 'text',
                        label: '类别：',
                        
                    },
                  
                    {
                        prop: 'coverUrl',
                        type: 'img',

                        height:'120',
                        label: '书籍封面：'
                    },
                     {
                        type: 'action',
                        actionList: [
                           
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
        	getInit (){
        		let id =this.$route.params.id
        		booksAdmin.See(id).then(res => {
                    console.log('类别 下拉列表',res)  //接受到的参数
					if(res.data.code === 0) {
						this.search = res.data.data;
						if(this.search.coverUrl.indexOf('?uploadId')){
				           this.search.coverUrl=this.search.coverUrl.split('?uploadId')[0]
				        }
                    }
                    
                })
        	},
			 goBack(){
            	this.$router.go(-1);
            }

        },
        components: {
            SearchForm
        },
        mounted(){
       		this.getInit();
//     		 if(this.search.coverUrl.indexOf('?uploadId')){
//	           this.search.coverUrl=this.search.coverUrl.split('?uploadId')[0]
//	        }
//      	console.log(this.search)
        }
    }
</script>
<style lang="less">
    .view{
        background-color: #ffffff;
        padding: 40px;
    .title{
        font-size: 18px;
        color: #454c5c;
        padding-left: 5px;
        font-weight: bold;
        border-left: 4px solid #2C8DEE;
        margin-bottom: 20px;
    }
    }

</style>
