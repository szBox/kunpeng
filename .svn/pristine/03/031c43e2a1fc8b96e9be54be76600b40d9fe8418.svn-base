<template>
	<div>
		<SearchForm :items="items" :showMessage="true" :inline="true" labelWidth="" :model="search" ref="locationAddForm"></SearchForm>

		<div class="button-box">
			<el-button @click='goAdd()' type='primary' icon="el-icon-plus" class='btn-add' style='margin-bottom: 15px;'>添加</el-button>

			<el-button @click="delectList" type="danger" plain icon="el-icon-close" class="btn-delete">批量删除</el-button>
		</div>

		<DataTable :loading="loading" :columns="columns" :data="data" :total="total" :page-size="search.size" @page-change="pageChange" @selection-change="selectionChange"></DataTable>

	</div>

</template>

<script>
	import DataTable from '@components/data-table/index';
	import SearchForm from '@components/search-form/index';
	import school from '@src/network/setting/school/school.js';
	export default {
		data() {
			return {
				search: {
					current: 1,
					size: 10,
					gradeId: '',
					name:'',
					sid:'',
					teacherId:'',
					userId:'',
					num:'',
				},
				
				items: [
					{
						prop: 'name',
						type: 'input',
						label: '部门名称',
						value: '',
						options: [],
					},
					
					{
						type: 'action',
						actionList: [{
								text: '查询',
								btnType: 'warning',
								handleClick: () => {
									this.tableList()
									//                                  this.formValidate('locationAddForm', this.save);
								}
							},

						]
					}
				],
				columns: [{
						//  全选模块
						type: 'selection'
					},
					{
						label: '编号',
						prop:'id',
					},
					{
						label: '部门名称',
						prop: 'name'
					},
					
					{
						label: '学校',
						prop: 'schoolName'
					},
						{
						label: '创建时间',
						prop: 'insertTime',
						renderContent: (h, { row }) => {
					         return this.global.dateFilter.ymdHm(row.insertTime)					        
                        }
					},
				
					{
						label: '操作',
						type: 'action',
						width: '320px',
						renderContent: (h, {
							row
						}) => {
							return [
								<el-button type='primary' on-click={() => this.$router.push(`accountStudent/see/${row.id}`)}  size='mini' >查看</el-button>,
								<el-button type='' on-click={() => this.$router.push(`accountStudent/edit/${row.id}`)} style='border:1px solid #409EFF; color:#409EFF' size='mini' >更新</el-button>,
								<el-button type='danger' on-click={() => this.global.deleteConfirm.call(this, this.delect, row.id)} size='mini' >删除</el-button>,
								//								<el-button type='warning' on-click={() => this.global.deleteConfirm.call(this, this.delect, row.id)} size='mini' >修改手机号</el-button>,
							]
						}
					},
				],
				data: [],
				total: 0,
				deleteArr: [],
				loading: true
			}
		},
		methods: {
			pageChange(index) {
				this.search.current = index;
				this.tableList();
			},
			tableList() {
				school.tableDep(this.search).then(res => {
					console.log('部门表格', res) //接受到的参数
					if(res.data.code === 0) {
						this.loading = false;
						this.data = res.data.data.records;
						this.total = res.data.data.total;

					}

				})
			},
			selectionChange(data) {
				this.deleteArr = [];
				for(let item of data) {
					this.deleteArr.push(
						item.id
					)
				}
			},
			delect(id) {
				if(this.data.length === 1 && this.search.current > 1) {
					this.search.current--;
				}
				school.DepDelete(id).then(res => {
					if(res.data.code === 0) {
						this.$message.success('删除成功');
						this.tableList()
					}

				})

			},
			delectList() {
				let self = this;
				if(this.deleteArr.length === 0) {
					this.$message.error('请至少选择一项');

					return;
				} else {
					//		        	console.log(this.deleteArr)
					if(this.data.length === 1 && this.search.current > 1) {
						this.search.current--;
					}
					let ids = this.deleteArr
					this.global.deleteConfirm.call(this, function() {
						school.DepDeleteS(ids).then(res => {
							if(res.data.code === 0) {
								self.$message.success('删除成功');
								self.tableList();
							}
						})
					})

				}

			},
			goAdd() {
				this.$router.push({
					path: 'depAdmin/add'
				})
			},

		},
		mounted() {
			this.items[0].options = this.global.session.get('gradeList')
			this.tableList()
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