<template>
	<div class="paperSee">
		<h4>查看试卷</h4>
		<ul class="ul-head">
			<li>
				<div>阅读类型 : <span>{{search.readTypeName}} </span></div>
				<div><span>总题目数 : </span>{{search.s}}道</div>
			</li>
			<li>
				<div>阅读年级 : <span>{{search.gradeName}}</span></div>
				<div>答题时间 : <span>{{search.answerTime}}分钟</span></div>
			</li>
			<li>
				<div>阅读书籍名称 : <span>{{search.readBookName}}</span></div>
				<div>总分数 : <span>{{search.score}}分</span></div>
			</li>
			<li>
				<div>组题方式 : <span>{{search.gqTypeName}}</span></div>
			</li>
			
		</ul>
	
	</div>

</template>

<script>
	import DataTable from '@components/data-table/index';
	import SearchForm from '@components/search-form/index';
	import home from '@src/network/home/home.js';
	import paper from '@src/network/subject/quest-setting/paper.js'
	export default {
		data() {
			return {
				search: {
				
					gqTypeId: '',
					gradeId: '',
					name: "",
					readBookId: '',
					readTypeId: '',
					sid: this.global.session.get('user').sid,
					status: "",
					current: 1,
					size: 10,
					stuId:'',
					
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
                            this.bookSelect(val);
                        }
                    },
                    {
                        prop: 'readTypeId',
                        type: 'select',
                        label: '阅读类型',
                        options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        hasAll: true
                    },
                    
                    {
                        prop: 'readBookId',
                        type: 'select',
                        label: '书籍名称',
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
									this.paperList()
//                                  this.formValidate('locationAddForm', this.save);
                                }
                            },
                            
                        ]
                    }
                ],
				data: [],
				total: 0,
			}
		},
		methods: {
			pageChange (index) {
				this.search.current = index;
		
			},
		
			
         
           changeSwitch (row){
           	   	paper.Edit(row).then(res => {
                    console.log('单条更新',res)  //接受到的参数
					if(res.data.code === 0) {
			
                    }
                    
                })
//		       this.paperList();
		    
           },
   
		},
		mounted() {
			this.search=this.$route.params.init;
			console.log(this.$route.params.init)

		},
		components: {
			DataTable,
			SearchForm
		}
	}
</script>


<style lang="less" scoped>
	.paperSee{
		background: #fff;
		padding: 20px;
	}
	ul.ul-head{
		overflow: hidden;
		li{
			font-size: 14px;
			float: left;
			margin-right: 50px;
			>div{
				margin-bottom: 20px;
				>span{
					color: #666;
				}
			}
		}
	}
</style>

