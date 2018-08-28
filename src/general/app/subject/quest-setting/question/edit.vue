<template>
	<div class="paperSee">
		<h4>更新题目</h4>
		<SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="140px" :model="search" ref="functionAddForm">
			
			
		</SearchForm>

		<AnswerOptions style='width:500px; margin-left: 60px;' :correct="correct" :qclist='qclist' :options='titleInfo' :imgUrl='imgUrl' :timg='timg' @EmitAnswer='editInit'></AnswerOptions>
		<div class="btn-dialog" style="margin-left: 140px;">
			<el-button  @click='getEdit()'  type='primary' >提交</el-button>
			<el-button @click='goBack()' type='danger' >返回</el-button>
		</div>

		
	</div>

</template>

<script>
	
	import SearchForm from '@components/search-form/index';
	import answerOption from '@src/network/subject/quest-setting/answer-public.js';
	import questionApi from '@src/network/subject/quest-setting/questions.js'
	import AnswerOptions from '@components/answer-options/index';
	export default {
		data() {
			return {
				search: {
                    gradeId: '',
                    bookName:'',
					bookId:'',
                    questionsRandId:'',
                    qyId:'',
                    id:'',
                },
				titleInfo:{
					name:'',
					qclist:'',
					correct:'',
				},
				imgState:false,
				correct:[],
				qclist:[],
				timg:'',
				imgUrl:'',
				titleName:'',
				titleNameData:'',
				timgData:'',
				qclistData:[],
				correctData:[],
				items: [
                    {
                        prop: 'bookName',
                        type: 'input',
                        label: '阅读书籍名称',
                        placeholder: '请选择阅读书籍',
                        disabled:true,
                    },
                    {
                        prop: 'qyId',
                        type: 'select',
                        label: '题目类型',
                        placeholder: '请选择题目类型',
                        options: [
                        ],
                        rules: [
                            {required: true, message: '题目类型不能为空'}
                        ],
                        defaultProps: {
                            id: 'typeId',
                            label: 'typeName'
                        }
                    },
                     {
                         label: '题目星级难度：',
                         prop: 'questionsRandId',
                         type:'rate',
                         rules: [
                            {required: true, message: '难度不能为空'}
                        ]
                    },
                ],
				data: [],
				total: 0,
				loading: true
			}
		},
		methods: {
			getInit (){
				let id=this.$route.params.id
				questionApi.see(id).then(res => {
                    console.log('题目详情',res)  //接受到的参数
					if(res.data.code === 0) {
						if(res.data.data.imageUrl!=null){
							
							if(res.data.data.imageUrl.indexOf('?uploadId')){
						    	res.data.data.imageUrl=res.data.data.imageUrl.split('?uploadId')[0]
							}else{
								res.data.data.imageUrl=res.data.data.imageUrl;
							}
						}
						this.loading=false;
						this.search = res.data.data;
						this.questionType();
						let correctInit ='';
						this.qclist=[];
						this.correct=[];
						this.titleInfo=res.data.data;
						this.timg=res.data.data.imageUrl ? [{name: '', url: res.data.data.imageUrl}] : [];
						for(var i=0; i<res.data.data.qclist.length; i++){
							this.qclist.push(res.data.data.qclist[i].id)
						}
						correctInit=res.data.data.correct.split(',')
						for(var j=0; j<correctInit.length; j++){
							this.correct.push(Number(correctInit[j]))
						}
						
                    }
                    
                })
			},
			 // 题目类型下拉
            questionType () {
                let params = { gradeId: this.search.gradeId}
                answerOption.questionType(params).then(res => {
                	console.log('题目类型',res)
                    if(res.data.code === 0) {
                        this.items[1].options  = res.data.data;
                    }
                })
            },
			editInit (name,option,answer,timg){
				this.titleNameData=name;
				this.qclistData =option;
				this.correctData=answer;
				if(timg.indexOf('?uploadId')){
				     this.timgData=timg.split('?uploadId')[0]
				}else{
					this.timgData=timg;
				}
				
			},
			getEdit (){
				// 获取组件传过来的 答案的值      this.editInit()
				let optionErr=true
				console.log('返回的11',this.titleNameData,this.qclistData,this.correctData);
				for(var i=0; i<this.qclistData.length; i++){
					if(this.qclistData[i].value==''){
						optionErr=false;
					}
				}
				if(this.titleNameData==''){
					this.$message.error('题目名称不能为空');
				}
				else if(this.search.questionsRandId=='' || this.search.questionsRandId==null){
					this.$message.error('星级难度不能为空');
				}
				else if(this.timg.length>0 && this.timgData== ""){
					this.$message.error('题目图片不能为空');
				}
				else if(optionErr==false){
					this.$message.error('选项内容不能为空');
				}
				else if(this.correctData==''){
					this.$message.error('请至少选择一个正确答案');
				}else{
					//请求ajax
					console.log('11111');
					let params ={
						//"answerTypeId": 0,
						correctChoiceIds:this.correctData,
						readBookId: this.search.bookId,
						imageUrl: this.timgData,
						name: this.titleNameData,
						id:this.search.id,
						questionChoices:this.qclistData, 
						questionsTypeId: this.search.qyId,
						questionsRankId: this.search.questionsRandId,
					}

					
					questionApi.edit(params).then(res => {
	                    console.log('更新题目',res)  //接受到的参数
						if(res.data.code === 0) {
							this.$message.success('更新成功');
							this.$router.go(-1);
	                    }
                    
               		})
				}
			},
			goBack(){
            	this.$router.go(-1);
            },
   
		},
		mounted() {
			this.getInit();
		},

		components: {
			SearchForm,
			AnswerOptions
		}
	}
</script>


<style lang="less" scoped>
	
	.paperSee{
		background: #fff;
		padding: 20px;
	}
	.paper-cover {
		>img{
			max-width: 400px;
			max-height:200px;	
		}
	}
	ul.ul-head{
		padding-left: 0;
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
	ul.paper-box{
		padding-left: 0;
		>li{
			margin: 30px 0;
		}
		.paper-title{
			margin: 5px 0;
			}
		ul.ul-abcd{
			padding-left: 0;
			margin-left: 22px;
			overflow: hidden;
			li{
				/*float: left;*/
				margin: 8px 0;
				/*margin-right: 30px;*/
			}
			
			/*li:nth-child(3n){
				clear: left;
			}*/
		}
		p.answer-hh{
			margin-top: 10px;
			margin-left: 24px;
		}
	}
	.option-A{
		display: inline-block;
		width: 25px;
		height: 25px;
		line-height: 25px;
		text-align: center;
	}
	.optionActive{
		border: 1px solid red;
		border-radius: 50%;
	}
	.edit-tips{
		font-size: 14px;
		font-style: normal;
		cursor: pointer;
		color: #fff;
		margin-left: 20px;
		padding: 4px 6px;
		text-align: center;
		background: #FE9900;
		border-radius: 4px;
	}
</style>

