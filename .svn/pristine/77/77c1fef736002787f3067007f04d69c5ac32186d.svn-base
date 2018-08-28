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
					insertTime:''
				},
	
				items: [
					{
						prop: 'name',
						type: 'text',
						label: '权限模板名称',
						value: '',
						options: [],
					},
					{
						prop: 'remark',
						type: 'text',
						label: '描述',
						value: '',
						options: [],
					},
					 {
                        prop: 'insertTime',
                        type: 'text',
                        label: '新增时间:  ',
                      	
                    },
					 {
                        type: 'action',
                        actionList: [
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
						this.search.insertTime = this.global.dateFilter.ymdHm(res.data.data.insertTime)
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