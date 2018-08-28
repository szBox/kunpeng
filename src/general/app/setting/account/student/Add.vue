<template>
    <div class="function-add">
    	<h4>添加学生</h4>
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
                       	placeholder: '请输入学生姓名',
                        rules: [
                            {required: true, message: '学生姓名不能为空'}
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
                        prop: 'classId', 		             	
                        label: '班级:  ',
                        type: 'select',
                         options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        rules: [
                            {required: true, message: '班级不能为空'}
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
        	classSel(){
        		let params = {
        			sid : this.global.session.get('user').sid,
        			gid : ''
        		};
        		account.classSelect(params).then(res => {
                    console.log('班级下拉',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[2].options = res.data.data;
						
                    }
				})
        	},
        	getAdd (){
        		account.StudentAdd(this.search).then(res => {
                    console.log('添加成功',res)  //接受到的参数
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
         	this.classSel();
                        
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

