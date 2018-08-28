<template>
    <div class="questType">
          <SearchForm :items="items" :showMessage="true" :inline="true" :model="search" ref="onSubmit"></SearchForm>
    
          <div class="button-box">
            <el-button @click='goAdd()' type='primary' icon="el-icon-plus" class='btn-add' style='margin-bottom: 15px;'>添加</el-button>
           
            <el-button @click="delectList" type="danger" plain icon="el-icon-close" class="btn-delete" >批量删除</el-button>
        </div>
          
          
          <DataTable :loading="loading" :columns="columns" :data="data" :total="total" :page-size="search.size" @page-change="pageChange" @selection-change="selectionChange"></DataTable>
    </div>
</template>
<script>

    // 模块的引用
    import SearchForm from '@components/search-form/index';
    import DataTable from '@components/data-table/index'

    //  接口
    import answerWay from '@src/network/subject/quest-setting/answerway';
    //  答题类型
    import answerType from '@src/network/subject/quest-setting/answer-public.js';

    export default {
        name: 'questType',
        data: function () {
            return {
                search: {
                    current: 1,
                    gradeId: '',
                    size: 10,
//                  name: '',
//                  insertTime: '',
                    gqtypeId: ''
                },
                items: [
                    {
                        prop: 'gradeId',
                        type: 'select',
                        label: '年级',
                        options: [
                        ],
                        hasAll: true,
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        },
                    },
                    {
                        prop: 'gqtypeId',
                        type: 'select',
                        label: '答题方式',
                        options: [
                        ],
                        hasAll: true,
                        defaultProps: {
                            id: 'Id',
                            label: 'name'
                        },
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '查询',
                                btnType: 'warning',
                                handleClick: (row) => {
                                    this.answerWay();
                                }
                            }
                        ]
                    }
                ],
                // table的属性设置
                columns: [
                	{
						//  全选模块
                        type: 'selection'	
					},
                    {
                        label: '题目类型ID',
                        prop: 'id'
                    },
                    {
                        label: '答题年级',
                        prop: 'gradeName'
                    },
                    {
                        label: '答题方式',
                        prop: 'gptypeName',
                    },
                    {
                        label: '添加时间',
                        prop: 'insertTime',
                        renderContent: (h, { row }) => {
                            return this.global.dateFilter.ymdHm(row.insertTime)
                        }
                    },
                    {
                        type: 'action',
                        width: '250',
                        label: '操作',
                        renderContent: (h, { row }) => {
                            return [
                               <el-button type='primary' size='mini' on-click={() => this.$router.push(`answerWay/edit/${row.id}`)}>更新</el-button>,
                               <el-button type='danger' size='mini' on-click={() => this.global.deleteConfirm.call(this, this.delect, row.id)}>删除</el-button>
                            ];
                        }
                    }
                ],
                data: [],
                loading: true, //  加载缓冲
                total: 0,  // 总页数,
				deleteArr:[],

            }
        },
        components: {
            SearchForm,
            DataTable
        },
        methods: {
        	selectionChange(data) {
				this.deleteArr=[];
				for (let item of data){
					this.deleteArr.push(
						item.id
					)
				}
			},
            pageChange(index) {
                this.search.current = index;
                this.answerWay();
            },
            answerWay() {
                let params = {
                    ...this.search
                };
                this.loading = true;
                answerWay.list(params).then(res => {
                	console.log('表格',res)
                    if(res.data.code === 0) {
                        this.loading = false;
                        this.data = res.data.data.records;
                        this.total = res.data.data.total;
                    }
                })
            },
            delect(id){
            	if(this.data.length === 1 && this.search.current > 1) {
           			this.search.current--;
           		}
                answerWay.del(id).then(res => {
                    if(res.data.code === 0) {
                        this.$message.success('删除成功');
                        this.answerWay();
                    }
                })
            },
            delectList() {
				let self=this;
		        if(this.deleteArr.length === 0) {
		          this.$message.error('请至少选择一项');
		          
		          return;
		        }else{
//		        	console.log(this.deleteArr)
		        	if(this.data.length === 1 && this.search.current > 1) {
           				this.search.current--;
           			}
		        	let ids=this.deleteArr
		        	this.global.deleteConfirm.call(this,function(){
		        		answerWay.dels(ids).then(res => {
					          if(res.data.code === 0) {
					            self.$message.success('删除成功');
					            self.answerWay();
					          }
					     })
		        	})	
		        	
		        }
		        
		   },
            answerType() {
                answerType.answerList().then(res => {
                	
                    if(res.data.code == 0){
                        this.items[1].options = res.data.data
                    }
                })
            },
            goAdd(){
            	this.$router.push({
					path:'answerWay/add'
				})
            }
        },
        mounted() {
            this.answerWay();
            this.items[0].options = this.global.session.get('gradeList')
        },
        created (){
            // 获取全部答题类型
            this.answerType()
        }
    }
</script>
<style lang="less">
    .questType{
    .bread-title{
        padding: 10px 0 10px 20px;
    .last >span{color: #474e5d;}
    }
    .content{
        background-color: #ffffff;padding: 20px 18px;
    
    }
    }
    .button-box{
    	.btn-add{
    		float: left;
    	}
    	.btn-delete{
    		float:right
    	}
    }
</style>

