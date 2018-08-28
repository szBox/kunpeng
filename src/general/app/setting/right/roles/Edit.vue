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
                            {required: true, message: '模板名称不能为空'}
                        ],
						value: '',
						options: [],
					},
					{
						prop: 'remark',
						type: 'input',
						label: '描述',
						placeholder: '请输入描述',
						rules: [
                            {required: true, message: '描述内容不能为空'}
                        ],
						value: '',
						options: [],
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
				],

			}
		},
		methods: {
			getInit (){
            	let id=this.$route.params.id;
        		roles.roleSee(id).then(res => {
                    console.log('权限模板详情',res)  //接受到的参数
					if(res.data.code === 0) {
						this.search = res.data.data;
                    }
                    
                })
        	},
			getEdit (){
        		roles.roleEdit(this.search).then(res => {
					if(res.data.code === 0) {
						this.$message.success('更新成功');
						this.$router.go(-1);
                    }
				})
        	},
		},
		mounted() {
			this.getInit();
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