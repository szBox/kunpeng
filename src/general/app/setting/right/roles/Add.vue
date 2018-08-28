<template>
	<div class="see-box">
		<h4>角色模板详情</h4>
		<SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>

	</div>

</template>

<script>
	import DataTable from '@components/data-table/index';
	import SearchForm from '@components/search-form/index';
	import roles from '@src/network/setting/right/roles.js';
	export default {
		data() {
			return {
				search: {
					name: "",
					remark: "",
					type: 1,
				},
	
				items: [
					{
						prop: 'name',
						type: 'input',
						label: '权限模板名称',
						placeholder: '请输入权限模板名称',
                        rules: [
                            {required: true, message: '权限模板名称不能为空'}
                        ],
					},
					{
						prop: 'remark',
						type: 'input',
						label: '描述',
						placeholder: '请输入描述',
                        rules: [
                            {required: true, message: '描述不能为空'}
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
				],

			}
		},
		methods: {
			getAdd (){
        		roles.roleAdd(this.search).then(res => {
					if(res.data.code === 0) {
						this.$message.success('添加成功');
						this.$router.go(-1);
                    }
                    
                })
        	},

		},
		mounted() {

		},
		components: {
			DataTable,
			SearchForm
		}
	}
</script>
<style>

</style>

<style lang="less" scoped>
	.button-box {
		.btn-add {
			float: left;
		}
		.btn-delete {
			float: right
		}
	}
</style>