<template>
	<div>
		<SearchForm :items="items" :showMessage="true" :inline="true" labelWidth="" :model="search" ref="locationAddForm"></SearchForm>
		<el-button @click='goAdd()' type='primary' icon="el-icon-plus" style='margin-bottom: 15px;'>添加</el-button>
		
		<DataTable :loading="loading" :columns="columns" :data="data" :total="total" :page-size="search.size" @page-change="pageChange"  @selection-change="selectionChange"></DataTable>
		
	</div>

</template>

<script>
	import DataTable from '@components/data-table/index';
	import SearchForm from '@components/search-form/index';
	import grade from '@src/network/home/gradeList.js'
	import Class from '@src/network/home/classList.js'
	import adminS from '@src/network/books/booksAdmin/adminList.js'
	import Add  from '@src/network/books/booksAdmin/booksAdd.js'
	import global from '@src/lib/global.js'
	export default {
		data() {
			return {
				search: {				
					gradeId: '',
					typeId:'',
					name: "",
					sid: global.session.get('user').sid,
					typeId: '',
					current: 1,
					size:6
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
                        label: '推荐类型',
                        options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        hasAll: true
                    },
                    
                    {
                        prop: 'stuName',
                        type: 'input',
                        label: '推荐书籍名称',
                    },
                   
                    {
                        type: 'action',
                        actionList: [
                            {
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
				columns: [
					{
						//  全选模块
                        type: 'selection'	
					},
					
					{
						label: '推荐书籍ID',
						prop: 'stuId'
					},
					{
						label: '推荐书籍名称',
						prop: 'name'
					},
					{
						label: '年级',
						prop: 'gradeName'
					},
					{
						label: '推荐类别',
						prop: 'readBookCount'
					},
					{
						label: '作者',
						prop: 'scoreCount'
					},
					{
						label: '出版社',
						prop: 'scoreCount'
					},
					{
						label: '书籍封面',
						prop: 'scoreCount'
					},

					{
						label: '操作',
						type: 'action',
						renderContent: (h, { row }) => {
							if(row.evaluate==null || row.evaluate==''){
								return [
									<el-button type='primary' on-click={() => this.speakAdd(row.stuId)}  size='mini' >评价</el-button>,
									<el-button type='' style='border:1px solid #409EFF; color:#409EFF' size='mini' on-click={() => this.$router.push({ name: '统计详情', params: { sid: row.id }})}>查看</el-button>,
								]
							}else{
								return [
									<el-button type='' on-click={() => this.speakEdit(row.stuId,row.evaluate)} style='background:#FF9900; color:#fff; border:none' size='mini'>修改</el-button>,
									<el-button type='' style='border:1px solid #409EFF; color:#409EFF' size='mini' on-click={() => this.$router.push({ name: '统计详情', params: { sid: row.id }})}>查看</el-button>,
								]
								
							}
                          
                        }
					},
				],
				data: [],
				total: 0,
				loading: true
			}
		},
		methods: {
			pageChange(index) {
				this.search.current = index;
				this.tableList();
			},
			
			tableList() {
				adminS.booksAdmin(this.search).then(res => {
                    console.log('推荐管理表格',res)  //接受到的参数
					if(res.data.code === 0) {
						this.loading = false;
						this.data = res.data.data.records;
                        this.total =  res.data.data.total;
                    }
                    
                })
            },
            gradeList(){
				grade.gradeList().then(res => {
                    console.log('grade 下拉列表',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[0].options = res.data.data;
                    }
                    
                })
			},
			classList(){
				let params = {
					sid:1,
					gid:this.search.gradeId
				};
				Class.classList(params).then(res => {
                    console.log('班级下拉 列表',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[1].options = res.data.data;
                    }
                    
                })
			},
			goAdd(){
				this.$router.push({
					name: '添加阅读书籍'
				})
			}
    
		},
		mounted() {
	
			this.gradeList()
			this.tableList()
			this.classList()
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

	
</style>

