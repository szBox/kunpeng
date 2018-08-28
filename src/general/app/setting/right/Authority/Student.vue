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
	import authority from '@src/network/setting/right/authority.js';
	import home from '@src/network/home/home.js';
	export default {
		data() {
			return {
				search: {
					current: 1,
					size: 10,
					name:'',
					gradeId:'',
					classId:'',
					depId:'',
					identityId:'',
					phone:'',
					sex:'',
					sid:this.global.session.get('user').sid,
				},
				
				items: [
					{
                        prop: 'gradeId',
                        type: 'select',
                        label: '年级',
                        value:'',
//                      rules: [
//                          {required: true, message: '位置不能为空'}
//                      ],
                        options: [
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        hasAll: true,
                        change: (val) => {
                            this.classList(val);
                        }
                    },
                    {
                        prop: 'classId',
                        type: 'select',
                        label: '班级',
                        value:'',
                        options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        hasAll: true
                    },
					{
						prop: 'identityId',
						type: 'select',
						label: '身份',
						defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
						options: [],
						hasAll: true,
					},
					{
						prop: 'name',
						type: 'input',
						label: '教师名称',
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
						label: '学生名称',
						prop: 'name'
					},
					{
						label:'头像',
						prop: 'headPic',
						type:'img',
						renderContent: (h, { row }) => {
							if(row.headPic.indexOf('?uploadId')){
					           return [<img style='width:50px;height:50px;border-radius:50%' src={row.headPic.split('?uploadId')[0]} />]
					        }else{
					           return [<img style='width:50px;height:50px;border-radius:50%' src={row.headPic}/>];
					        }
                        }
					},
					{
						label: '所在班级',
						prop: 'className',
					
					},
					{
						label: '身份名称',
						prop: 'identity',
						renderContent: (h, { row }) => {
							if(row.identity==null){
					           return '暂无'
					        }else{
					           return row.identity
					        }
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
								<el-button type='primary'  on-click={() => this.$router.push(`student/see/${row.id}`)}  size='mini' >查看</el-button>,
								<el-button type='warning ' on-click={() => this.$router.push(`student/edit/${row.id}`)}  size='mini' >设置权限</el-button>,
								<el-button type='danger' on-click={() => this.global.deleteConfirm.call(this, this.delect, row.id)} size='mini' >取消权限</el-button>,
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
			
        	IdentitySel(){
        		let params = {
        			type:2,
        		};
        		authority.IdentitySelect(params).then(res => {
                    console.log('身份下拉',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[2].options = res.data.data;
						
                    }
				})
        	},
        	classList(){
				let params = {
					sid:this.global.session.get('user').sid,
					gid:this.search.gradeId
				};
				home.classList(params).then(res => {
//                  console.log('班级下拉 列表',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[1].options = res.data.data;
                    }
                    
                })
			},
			tableList() {
				authority.tableAuthorityS(this.search).then(res => {
					console.log('学生权限表格', res) //接受到的参数
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
				authority.IdentityDelete(id).then(res => {
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
					let ids = this.deleteArr.toString()
					this.global.deleteConfirm.call(this, function() {
						identity.IdentityDelete(ids).then(res => {
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
					path: 'student/add'
				})
			},

		},
		mounted() {
			this.items[0].options=this.global.session.get('gradeList') 
			this.classList();
			this.IdentitySel();
			this.tableList();
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