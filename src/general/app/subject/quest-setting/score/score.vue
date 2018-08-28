<template>
    <div class="questType">
          <SearchForm :items="items" :showMessage="true" :inline="true" :model="search" ref="onSubmit"></SearchForm>
          <div class="button-box">
              <el-button class='btn-add' v-has="10010301" type="primary" icon="el-icon-plus" @click="$router.push('score/add')">添加</el-button>
              <el-button  class="btn-delete" type="danger" plain icon="el-icon-close" @click="delectAll(id)">批量删除</el-button>
          </div>

          
          <DataTable :loading="loading" :columns="columns" :data="data" :total="total" :page-size="search.size" @page-change="pageChange" @selection-change="selectionChange"></DataTable>
    </div>
</template>
<script>

    // 模块的引用
    import SearchForm from '@components/search-form/index';
    import DataTable from '@components/data-table/index'

    //  接口
    import scoreApi from '@src/network/subject/quest-setting/score.js';
    import quseType from '@src/network/subject/quest-setting/answer-public.js'

    export default {
        name: 'questType',
        data: function () {
            return {
                search: {
                    current: 1,  // 当前页数
                    size: 10,   // 条数
                    id: '',
                    gradeName: '',
                    typeName: '',
                    value: '',
                    typeId:'',
                    gradeId: '',
                    gptypeName: ''
                },
 
                items: [
                    {
                        prop: 'gradeId',
                        type: 'select',
                        label: '年级',
                        placeholder: '请选择',
                        options: [
                        ],
                        hasAll: true,
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'typeId',
                        type: 'select',
                        label: '题目类型',
                        placeholder: '请选择',
                        options: [

                        ],
                        hasAll: true,
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '查询',
                                btnType: 'warning',
                                handleClick: (row) => {
                                    this.scoreList();
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
                        label: '年级',
                        prop: 'gradeName'
                    },
                    {
                        label: '题目类型',
                        prop: 'typeName',
                    },
                    {
                        label: '分值',
                        prop: 'value',
                    },
                    {
                        type: 'action',
                        width: '250',
                        label: '操作',
                        renderContent: (h, { row }) => {
                            return [
                                <el-button type='primary' size='mini' on-click={() => this.$router.push(`score/edit/${row.id}`)}>更新</el-button>,
                            <el-button type='danger' size='mini' on-click={() => this.global.deleteConfirm.call(this, this.delect, row.id)}>删除</el-button>
                            ];
                        }
                    }
                ],
                data: [],
                loading: true, //  加载缓冲
                total: 0,  // 总页数
				deleteArr: [],	

            }
        },
        components: {
            SearchForm,
            DataTable
        },
        methods: {
            pageChange(index) {
                this.search.current = index;
                this.scoreList();
            },
            selectionChange(data) {
				this.deleteArr=[];
				for (let item of data){
					this.deleteArr.push(
						item.id
					)
				}
			},
            scoreList() {
                let params = {
                    ...this.search
                };
                this.loading = true;
                scoreApi.list(params).then(res => {
                    if(res.data.code === 0) {
                        this.loading = false;
                        this.data = res.data.data.records;
                        this.total =  res.data.data.total;
                    }
                })
            },
            delect(id){
            	if(this.data.length === 1 && this.search.current > 1) {
           				this.search.current--;
           		}
                scoreApi.del(id).then(res => {
                    if(res.data.code === 0) {
                        this.$message.success('删除成功');
                        this.scoreList();
                    }
                })
            },
            delectAll() {
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
		        	console.log('ids,',ids)
		        	this.global.deleteConfirm.call(this,function(){
		        		scoreApi.dels(ids).then(res => {
					          if(res.data.code === 0) {
					            self.$message.success('删除成功');
					            self.scoreList();
					          }
					     })
		        	})	
		        	
		        }
		        
		   },
            // 题目类型
            questType () {
                quseType.questType().then(res => {
                    if(res.data.code === 0) {
                        this.items[1].options = res.data.data
                    }
                })
            }
        },
        mounted() {
            this.scoreList();
            this.questType();
            this.items[0].options = this.global.session.get('gradeList')
        }
    }
</script>
<style lang="less">
</style>

