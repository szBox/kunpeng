<template>
	<div>
		<h4>阅读档案详情</h4>
		<SearchForm :items="items" :showMessage="true" :inline="true" labelWidth="" :model="search" ref="locationAddForm"></SearchForm>
		<DataTable :loading="loading" :columns="columns" :data="data" :total="total" :page-size="search.size" @page-change="pageChange"></DataTable>
		<el-button type='primary' @click='goback'>返回</el-button>
	</div>

</template>

<script>
	import DataTable from '@components/data-table/index';
	import SearchForm from '@components/search-form/index';
	
	import statistics from '@src/network/statistics/statistics.js'

	export default {
		data() {
			return {
				search: {
					studentId:this.$route.params.id,
					bookName: "",
					classId: '',
					gradeId: '',
					stuName: "",
					current: 1,
					size:10
				},
				
				columns: [
					{
						label: '学号',
						prop: 'stuid'
					},
					{
						label: '学生姓名',
						prop: 'stuname'
					},
					{
						label: '阅读年级',
						prop: 'gradename'
					},
					{
						label: '阅读书籍总数',
						prop: 'readBookCount'
					},
					{
						label: '答题总分数',
						prop: 'maxScore'
					},
					{
						label:'阅读评价',
						prop: 'evaluate',
						renderContent: (h, { row }) => {
							if(row.evaluate==null || row.evaluate==''){
								return ('暂无评价')
							}else{
								return (row.evaluate)
							}
//							return row.evaluate.map(q => {
//								 return ({q})
//							})
//                          return [
//                              <el-button type='primary' size='mini' on-click={() => this.$router.push('function/add/' + row.id)}>添加子菜单</el-button>,
//                              <el-button type='primary' size='mini' on-click={() => this.$router.push({ name: '更新功能模块', params: { obj: row }})}>更新</el-button>,
//                              <el-button type='danger' size='mini' on-click={() => this.global.deleteConfirm.call(this, this.deleteOne, row.id)}>删除</el-button>
//                          ];
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
				statistics.table3Info(this.search).then(res => {
//                  console.log('学生阅读档案 表格',res)  //接受到的参数
					if(res.data.code === 0) {
						this.loading = false;
						this.data = res.data.data.records;
                        this.total =  res.data.data.total;
                    }
                    
                })
           },
			
		    goback(){
           		 this.$router.go(-1);
            }
    
		},
		mounted() {
			console.log(this.$route.params,'222222')
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

	
</style>

