<template>
    <div class="function-add">
    	<h4>老师信息详情</h4>
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
    	
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
	import account from '@src/network/setting/account/account.js';
    export default {
        data() {
            return {
                search: {
                  	
                },

                items: [
                    {
                        prop: 'name',
                        type: 'text',
                        label: '姓名:  ',
                       
                    },
                    {
                        prop: 'sex', 		             	
                        label: '性别:  ',
                        type: 'text',
                    },
//                   {
//                      prop: 'classId',
//                      type: 'text',
//                      label: '学号:  ',
//                     
//                  },
                     {
                        prop: 'className', 		             	
                        label: '所带班级:  ',
                        type: 'text',
//						renderContent: () => {
//							return <el-input type="textarea" v-model="remark"></el-input>
//						}
                    },
                    {
                     	prop: 'depName', 		             	
                        label: '所在部门:  ',
                        type: 'text',
//						renderContent: () => {
//							return <el-input type="textarea" v-model="remark"></el-input>
//						}
                    },
                     {
                        prop: 'phone',
                        type: 'text',
                        label: '手机号码:  ',
                       
                    },
                    {
                        prop: 'headPic',
                        label: '头像:  ',
                        type:'img',
                        width:'70',
                        height:'70',
                       
                    },
                    {
                        type: 'action',
                        actionList: [
//                          {
//                              text: '提交',
//                              btnType: 'primary',
//                              handleClick: (row) => {
//                                  this.global.formValidate.call(this,'functionAddForm', this.save);
//                              }
//                          },
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
            	let id=this.$route.params.id;
        		account.TeacherSee(id).then(res => {
                    console.log('老师信息详情',res)  //接受到的参数
					if(res.data.code === 0) {
						this.search = res.data.data;
						if(this.search.sex=='1'){
							this.search.sex='男'
						}
						if(this.search.sex=='2'){
							this.search.sex='女'
						}
						if(this.search.headPic.indexOf('?uploadId')){
				           this.search.headPic=this.search.headPic.split('?uploadId')[0]
				        }
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
    .el-form-item__label{
    	text-align: center !important;
    }
</style>

