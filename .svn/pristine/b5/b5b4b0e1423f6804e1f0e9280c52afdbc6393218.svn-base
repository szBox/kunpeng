<template>
    <div class="function-add">
    	<h4>更新老师信息</h4>
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
                	depId:'',
                	name:'',
                	classId:'',
                	headPic:'',
                	phone:'',
                	sid: this.global.session.get('user').sid,
                  	sex:''
                },
                items: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '姓名:  ',
                       	placeholder: '请输入老师姓名',
                        rules: [
                            {required: true, message: '老师姓名不能为空'}
                        ],
                    },
                    {
                        prop: 'sex', 		             	
                        label: '性别:  ',
                        type: 'select',
                        options: [
                        	{id:'1',value:'男'},
                        	{id:'2',value:'女'}
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'value'
                        },
                        rules: [
                            {required: true, message: '性别不能为空'}
                        ],
                    },
//                   {
//                      prop: 'classId',
//                      type: 'input',
//                      label: '学号:  ',
//                      placeholder: '请输入学号',
//                      rules: [
//                          {required: true, message: '学号不能为空'},
//                          { type: 'number', message: '学号必须为数字值'}
//                      ],
//                  },
                     {
                        prop: 'depId', 		             	
                        label: '所在部门:  ',
                        type: 'select',
                         options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        rules: [
                            {required: true, message: '所在部门不能为空'}
                        ],
                    },
                     {
                        prop: 'classId', 		             	
                        label: '所带班级:  ',
                        type: 'select',
                         options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        rules: [
                            {required: true, message: '所带班级不能为空'}
                        ],
                    },
                     {
                        prop: 'phone',
                        type: 'input',
                        label: '手机号码:  ',
                       	placeholder: '请输入手机号',
                        rules: [
                            {required: true, message: '手机号不能为空'},
//                          {type: 'number', message: '手机号必须为数字值'},
//                          {max:11,min:11,message:'请正确输入手机号'},
                        ],
                    },
					 {
                        prop: 'personSign',
                        type: 'input',
                        label: '个性签名:  ',
                       	placeholder: '请输入您的个性签名',
                        rules: [
                            {required: true, message: '个性签名不能为空'},
//                          {type: 'number', message: '手机号必须为数字值'},
//                          {max:11,min:11,message:'请正确输入手机号'},
                        ],
                    },
                    {
                        prop: 'headPic',
                        type: 'upload',
                        label: '头像:  ',
                        limit: 1, //文件最大上传个数
                        fileList:[],
                        rules: [
                            {required: true, message: '头像不能为空'}
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
						this.items[5].fileList.push({
			        		name: '',
			        		url: this.search.headPic
			        	})
                    }
                    
                })
        	},
        	depSel(){
        		let params = {
        			sid : this.global.session.get('user').sid,
        		};
        		account.depSelect(params).then(res => {
                    console.log('部门下拉',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[2].options = res.data.data;
						
                    }
				})
        	},
        	classSel(){
        		let params = {
        			sid : this.global.session.get('user').sid,
        			gid : ''
        		};
        		account.classSelect(params).then(res => {
                    console.log('班级下拉',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[3].options = res.data.data;
						
                    }
				})
        	},
        	
        	getEdit (){
        		if(this.search.sex=='男'){
					this.search.sex=1
				}
				if(this.search.sex=='女'){
					this.search.sex=2
				}
        		account.TeacherEdit(this.search).then(res => {
                    console.log('更新成功',res)  //接受到的参数
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
         	this.classSel();
         	this.depSel();
                        
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

