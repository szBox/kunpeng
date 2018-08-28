<template>
    <div class="function-add">
    	<h4>学年新增</h4>
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
					beginTime: "",
					endTime: "",
					name: "",

					dateArr: '',
                },
                items: [
                	 {
                        prop: 'name',
                        type: 'input',
                        label: '学年名称:  ',
                       	placeholder: '请输入学年名称',
                        rules: [
                            {required: true, message: '学年名称不能为空'}
                        ],
                        addition: (h) => {
                        	return [<span style='margin-left:8px;color:#C0C4CC'>格式:2017-2018 第n学期</span>];
                        }
                    },
                   
                     {
                       	
						prop: 'dateArr',
			            type: 'dateRange',
			            label: '时间',
			            disabled: false,
						rules: [
                            {required: true, message: '时间不能为空'}
                        ],
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
        		let params;
        		if(this.search.dateArr) {
					params = {
						...this.search,
						beginTime: this.search.dateArr[0],
						endTime: this.search.dateArr[1]
					}
				}else{
					params = {
						...this.search
					}
				}
        		school.xuenianAdd(params).then(res => {
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

