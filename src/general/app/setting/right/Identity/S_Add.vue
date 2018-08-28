<template>
    <div class="function-add">
    	<h4>学生身份新增</h4>
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
    	
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
	import identity from '@src/network/setting/right/identity.js';
    export default {
        data() {
            return {
                search: {
                	name:'',
                	remark:'',
                	type:2
                },
                items: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '学生身份:  ',
                       	placeholder: '请输入学生身份',
                        rules: [
                            {required: true, message: '学生身份不能为空'}
                        ],
                    },
                     {
                        prop: 'remark',
                        type: 'input',
                        label: '学生身份描述:  ',
                       	placeholder: '请输入身份描述',
                        rules: [
                            {required: true, message: '身份描述不能为空'}
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
        		identity.IdentityAdd(this.search).then(res => {
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

