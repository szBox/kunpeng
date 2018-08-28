<template>
    <div class="function-add">
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
   	
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
					 {
                        type: 'action',
                        actionList: [
                            {
                                text: '更新',
                                btnType: 'primary',
                                handleClick: (row) => {
                                    this.global.formValidate.call(this,'functionAddForm', this.getEdit);
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
        	getInit (){
        		let id =this.$route.params.id
        		booksType.See(id).then(res => {
                    console.log('类别 下拉列表',res)  //接受到的参数
					if(res.data.code === 0) {
						this.search = res.data.data;
                    }
                    
                })
        	},
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
        	this.getInit();
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

