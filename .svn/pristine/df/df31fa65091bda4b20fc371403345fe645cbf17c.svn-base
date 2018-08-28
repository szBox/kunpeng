<template>
    <div class="questAction">
          <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="140px" :model="search" ref="functionAddForm"></SearchForm>
         
          <div class="alertBox2">
              <el-dialog
                  title="提示"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :close-on-click-modal='false'	
                  :before-close="handleClose">
                  <span>
                      	试卷保存成功，名为：{{paper}}，是否前往查看？
                  </span>
                  <span slot="footer" class="dialog-footer">
                      
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="gopaper">确 定</el-button>
                   </span>
              </el-dialog>
          </div>
    </div>
</template>
<script>

    // 模块的引用
    import SearchForm from '@components/search-form/index';
	import DataTable from '@components/data-table/index';
    //  接口
    import answerOption from '@src/network/subject/quest-setting/answer-public.js';

    export default {
        name: 'questType',
        data: function () {
            return {
                
                search: {
                    current: 1,
                    id: '',
                    size: 10,
                    gradeId: '',
                    readTypeId: '',
                    readBookId: '',
                    gradeName: '',
                    amount: '',
                    score: '',
                    time:30,
                    quesTypeId:'',
                    idsArr:[],
                },
                search2: {
                    gptypeName: '',
                    quesTypeId: ''
                },
                items: [
                    {
                        prop: 'gradeId',
                        type: 'select',
                        label: '年级',
                        placeholder: '请选择年级',
                        options: [
                        ],
                        rules: [
                            {required: true, message: '请选择年级'}
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        },
                        change: (val) => {
                        	this.search.readBookId='';
                            this.readingType();
                            this.search.quesTypeId='';
							this.items[4].defaultChecks = [];
							this.items[4].defaultChecksName = [];
                            this.items[4].treeData=[];
                            this.search.score='';
                            this.search.amount='';
                            this.readingBook(val, this.search.name);
                        }
                    },
                    {
                        prop: 'readTypeId',
                        type: 'select',
                        label: '阅读类型',
                        placeholder: '请选择阅读类型',
                         rules: [
                            {required: true, message: '阅读类型不能为空'}
                        ],
                        options: [
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        },
                        change: (val) => {
                        	this.search.readBookId='';
                        	this.search.quesTypeId='';
							this.items[4].defaultChecks = [];
							this.items[4].defaultChecksName = [];
                            this.items[4].treeData=[];
                            this.search.score='';
                            this.search.amount='';
                            this.readingBook(this.search.gradeId, val);
                        }
                    },
                    {
                        prop: 'readBookId',
                        type: 'select',
                        label: '阅读书籍',
                        placeholder: '请选择阅读书籍',
                         rules: [
                            {required: true, message: '阅读书籍不能为空'}
                        ],
                        options: [
                        ],
                        change: (val) => {
//                          this.questType();
							this.items[4].defaultChecks = [];
							this.items[4].defaultChecksName = [];
                            this.items[4].treeData=[];
                            this.search.score='';
                            this.search.amount='';
                            this.getTitle();
                        },
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'time',
                        type: 'number',
                        label: '答题时间：',
                        position: 'right',
                        min:30,
                        max:150,
                        rules: [
                            {required: true, message: '答题时间不能为空'}
                        ],
                        addition: (h) => {
                        	return [<span style='margin-left:8px'>分钟</span>];
                        }
                    },
                    {prop: 'quesTypeId',
                        type: 'selectTree',
                        label: '选择题目：',
                        rules: [
                            {required: true, message: '请选择题目'}
                        ],
                        placeholder: '请选择题目',
                        defaultChecks: [],
                        defaultChecksName: [],
                        defaultProps: {
                            label: 'typeName',
                            children: 'questionsList'
                        },
                        treeData: []
                    },
                    
                    
                    
                    
                    {
                        prop: 'amount',
                        type: 'input',
                        disabled:true,
                        label: '题目总数量：',
                        rules: [
                            {required: true, message: '题目总数量不能为空'}
                        ]
                    },
                    {
                        prop: 'score',
                        type: 'input',
                        disabled:true,
                        label: '试卷总分：',
                        rules: [
                            {required: true, message: '试卷总分不能为空'}
                        ]
                    },
                   
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '提交',
                                btnType: 'primary',
                                handleClick: (row) => {
                                    this.global.formValidate.call(this,'functionAddForm', this.save);
                                }
                            },
                        ]
                    }
                ],

                dialogVisible: false,
                data: [],
                paper:'',
                loading: true, //  加载缓冲
            }
        },
        components: {
        	DataTable,
            SearchForm
        },
        methods: {
			
            // 阅读类型下拉
            readingType () {
                let params = {current: 1, size: 10, gradeId: ''}
                answerOption.readingType(params).then(res => {
                    if(res.data.code === 0) {
                        this.items[1].options  = res.data.data.records
                    }
                })
            },
            // 题目类型
//          questType () {
//          	let params ={
//          		gradeId:this.search.gradeId,
//          		typeId:this.search.readBookId
//          	}
//              answerOption.questType().then(res => {
//                  if(res.data.code === 0) {
//                      console.log(res.data.data,'题目类型');
//                      
//                  }
//              })
//          },
            // 阅读书籍名称
            readingBook (gradeId, readTypeId) {
                let params = {gradeId,readTypeId}
                answerOption.readingBooks(params).then(res => {
                    if(res.data.code === 0) {
                        this.items[2].options  = res.data.data
                    }
                })
            },
            // 选择题目
            checkQust () {
            	console.log('vuvu',this.search.quesTypeId)
                             
            },
            // 获取问题
            getTitle () {
                let params = {
                    readBookId: this.search.readBookId,
                    gradeId:this.search.gradeId,
                    size:9999,
                    current:1,
                };
                answerOption.questAllS(params).then(res => {
                    if(res.data.code == 0) {
                    	console.log('timu',res);
                    	for(var i=0; i<res.data.data.length; i++){
                    		for(var j=0; j<res.data.data[i].questionsList.length; j++){
						   		this.$set(res.data.data[i].questionsList[j], 'typeName', res.data.data[i].questionsList[j].name);
						   		this.$set(res.data.data[i].questionsList[j], 'typeId', res.data.data[i].questionsList[j].id);	
						   		console.log(res.data.data[i].questionsList,'111111')
                    		}
					    }
						this.items[4].treeData = res.data.data
						
                    }
                })
            },
            save () {
            	
                let params = {
                    tpQuestionsList: this.search.idsArr,
                    gradeId: this.search.gradeId,
                    readTypeId: this.search.readTypeId,
                    readBookId: this.search.readBookId,
                    answerTime: this.search.answerTime,
                    score: this.search.score,
                    gqTypeId: 2,
                    amount: this.search.amount
                };
                if(this.search.amount==0 || this.search.amount=='' || this.search.score==0 || this.search.score==''){
                	this.$message.error('请选择题目')
                }else{
                	 answerOption.add(params).then(res => {
	                    if(res.data.code === 0) {
	                    	this.$message.success('提交成功');
	                        this.dialogVisible = true;
		                    this.paper=res.data.data
		                    console.log('生成成功',res)
		                    
	                    } else {
	                        this.$message.error('生成失败')
	                    }
	                })
                }
               
            },
             gopaper(){
            	this.dialogVisible=false;
            	this.$router.push({
            		path:'/subject/problemSet/paper'
            	})
            }
			
        },
        watch:{
        	'search.quesTypeId'(val){
        		console.log(val);
        		this.search.amount=0;
        		this.search.score=0;
        		this.search.idsArr=[];
        		for(var i=0; i<val.length; i++){
        			this.search.amount=Number(val.length);
					this.search.score += Number(val[i].value);
					this.search.idsArr.push(val[i].id);
				}
        		console.log(this.search.idsArr)
        	}
        },
        mounted() {
            this.items[0].options = this.global.session.get('gradeList');
        },
        computed: {

        }
    }
</script>

<style>
	.questAction .el-input-number{
		width: 202px;
	}
	
</style>
<style lang="less">
	.alertBox{
		padding-left: 70px;
	}
    .content {
       .top{
           margin-bottom: 20px;
          .title{
              margin-top: 10px;display: inline-block;
          }
       }
    .el-table td{
        border-bottom: none;
    }
    }

</style>

