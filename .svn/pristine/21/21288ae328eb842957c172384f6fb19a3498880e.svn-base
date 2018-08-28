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
	import account from '@src/network/setting/account/account.js';
	export default {
		data() {
			return {
				search: {
					classId: '',
					userId: '',
					nickName: '',
					name: "",
					sid: this.global.session.get('user').sid,
					phone: '',
					sex: '',
					current: 1,
					size: 10,

				},
				items: [{
						prop: 'name',
						type: 'input',
						label: '姓名',
						value: '',
						options: [],
					},
					{
						prop: 'phone',
						type: 'input',
						label: '手机号',
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
						label: '序号',
						renderContent: (h, {row,$index}) => {
							return $index+1
							
						}
					},
					{
						label: '姓名',
						prop: 'name'
					},
					{
						label: '性别',
						prop: 'sex',
						renderContent: (h, {
							row
						}) => {
							if(row.sex == '1') {
								return '男'
							}
							if(row.sex == '2') {
								return '女'
							}

						}
					},
					{
						label: '头像',
						prop: 'headpic',
						type: 'img',
						renderContent: (h, {row}) => {
							if(row.headPic.indexOf('?uploadId')) {
								return [<img style='width:50px;height:50px' src={row.headPic.split('?uploadId')[0]} />]
							} else {
								return [<img style='width:50px;height:50px' src={row.headPic}/>];
							}
						}
					},
					{
						label: '所在班级',
						prop: 'className',
						renderContent: (h, {
							row
						}) => {
							if(row.className == '' || row.className == null) {
								return '暂无'
							} else {
								return row.className
							}

						}

					},
					{
						label: '身份信息',
						prop: 'phone'
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
				account.tableStudent(this.search).then(res => {
					console.log('学生表格', res) //接受到的参数
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
				account.StudentDelete(id).then(res => {
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
						account.StudentDeleteS(ids).then(res => {
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
					path: 'accountStudent/add'
				})
			},

		},
		mounted() {
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