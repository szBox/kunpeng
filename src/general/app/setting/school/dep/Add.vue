<template>
    <div class="function-add">
    	<h4>部门新增</h4>
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
                	name:'',
                	sid:this.global.session.get('user').sid,
                },
                items: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '部门名称:  ',
                       	placeholder: '请输入部门名称',
                        rules: [
                            {required: true, message: '部门名称不能为空'}
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
        		school.DepAdd(this.search).then(res => {
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

