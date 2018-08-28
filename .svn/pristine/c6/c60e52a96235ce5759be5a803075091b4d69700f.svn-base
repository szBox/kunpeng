<template>
    <div class="function-add">
    	<h4>班级新增</h4>
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
    	
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
	import school from '@src/network/setting/school/school.js';
    export default {
        data() {
            return {
                search: {
                	gradeId: '',
					name: "",
					num: "",
					sid: this.global.session.get('user').sid,
					teacherId: '',
					userId: ''
                },
                items: [
                	 {
                        prop: 'num',
                        type: 'input',
                        label: '班级编号:  ',
                       	placeholder: '请输入班级编号',
                        rules: [
                            {required: true, message: '班级编号不能为空'}
                        ],
                    },
                    {
                        prop: 'name',
                        type: 'input',
                        label: '班级名称:  ',
                       	placeholder: '请输入班级名称',
                        rules: [
                            {required: true, message: '班级名称不能为空'}
                        ],
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
                        change: (val) => {
//                         console.log(val)
                        },
                    },
                     {
                        prop: 'teacherId',
                        type: 'select',
                        label: '班主任',
                        rules: [
                            {required: true ,message: '版主任不能为空'}
                        ],
                        options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        change: (val) => {
//                         console.log(val)
                        },
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
        	
        	getAdd (){
        		school.ClassAdd(this.search).then(res => {
                    console.log('添加成功',res)  //接受到的参数
					if(res.data.code === 0) {
						this.$message.success('添加成功');
						this.$router.go(-1);
                    }
				})
        	},
        	teacherSel (){
        		let params = {
        			sid : this.global.session.get('user').sid,
        		};
        		school.TeacherSelect(params).then(res => {
                    console.log('班级下拉',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[3].options = res.data.data;
						
                    }
				})
        	},
            goBack(){
            	this.$router.go(-1);
            }
          
        },
		created (){
			this.items[2].options  =this.global.session.get('gradeList');
			this.teacherSel();
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

