<template>
	<div>
		<SearchForm :items="items" :showMessage="true" :inline="true" labelWidth="" :model="search"></SearchForm>
		<DataTable :loading="loading" :columns="columns" :data="data" :total="total" :page-size="search.size" @page-change="pageChange"></DataTable>
	</div>

</template>

<script>
	import DataTable from '@components/data-table/index';
	import SearchForm from '@components/search-form/index';
	import grade from '@src/network/home/gradeList.js'
	import Class from '@src/network/home/classList.js'
	import Php from '@src/network/statistics/PhpList.js'
//	import allList from '@src/network/statistics/allList.js'
	export default {
		data() {
			return {
				search: {
					classId: '',
					gradeId: '',
					stuName: "",
					startDate: '',
					endDate: "",
					dateArr: '',
					label: 0,
					current: 1,
					size: 6
					
				},
			
				items: [
					{
						prop: 'dateArr',
			            type: 'dateRange',
			            label: '时间范围',
			            disabled: false
					},
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
                        options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        hasAll: true
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
						label: '排名',
						prop: '',
//						renderContent: (h, { row, $index }) => {
//							return (+$index+1)+(this.search.current)*(this.search.size);
//						}
					},
					{
						label: '学生姓名',
						prop: 'name'
					},
					{
						label: '班级',
						prop: 'className'
					},
					
					{
						label: '阅读书籍总数目',
						prop: 'bookCount'
					},
					{
						label: '阅读书籍总分值',
						prop: 'score'
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
			gradeList(){
				grade.gradeList().then(res => {
                    console.log('grade 下拉列表',res)  //接受到的参数
					if(res.data.code === 0) {
						this.items[1].options = res.data.data;
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
						this.items[2].options = res.data.data;
                    }
                    
                })
			},
			tableList() {
				let params;
				if(this.search.dateArr) {
					params = {
						...this.search,
						startDate: this.search.dateArr[0],
						endDate: this.search.dateArr[1]
					}
				}else{
					params = {
						...this.search
					}
				}
				Php.PhpList(params).then(res => {
                    console.log('阅读统计 表格',res)  //接受到的参数
					if(res.data.code === 0) {
						
						this.loading = false;
						this.data = res.data.data.pages.records;
                        this.total =  res.data.data.pages.total;
                    }
                    
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

<style lang="less" scoped>

	
</style>

