<template>
    <div class="function-add">
    	<h4>学期新增</h4>
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
					name: "",
					isused:'',

                },
                items: [
                	 {
                        prop: 'name',
                        type: 'input',
                        label: '学期名称:  ',
                       	placeholder: '请输入学期名称',
                        rules: [
                            {required: true, message: '学期名称不能为空'}
                        ],
                        addition: (h) => {
                        	return [<span style='margin-left:8px;color:#C0C4CC'>格式:2017-2018 第n学期</span>];
                        }
                    },
                   	{
                        prop: 'isused', 		             	
                        label: '状态:  ',
                        type: 'select',
                        options: [
                        	{id:'Y',value:'在用'},
                        	{id:'N',value:'失效'}
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'value'
                        },
                        rules: [
                            {required: true, message: '状态不能为空'}
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
        	
        	getAdd (){
        		school.xueqiAdd(this.search).then(res => {
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
//			this.teacherSel();
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

