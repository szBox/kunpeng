<template>
    <div class="questAction">
    	<h4>更新动态组题</h4>
        <div>
            <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="140px" :model="search" ref="functionAddForm"></SearchForm>
        	<test-creation :dataObj='typeList' @EmitAction='EmitInit'></test-creation>
        	<div class="my-btn-box" style="margin-left: 140px;">
              <el-button class='btn-add' type="primary" @click="edit()">更新</el-button>
              <el-button  class="btn-delete" type="danger" @click='back()'>返回</el-button>
          </div>
        </div>
    </div>
</template>
<script>

    // 模块的引用
    import SearchForm from '@components/search-form/index';
	import testCreation from '@components/test-creation/index';
    //  接口
    import setApi from '@src/network/subject/quest-setting/problemSet/dynamic.js';
	import answerOption from '@src/network/subject/quest-setting/answer-public.js';
    export default {
        name: 'questType',
        data: function () {
            return {
                search: {
                    answerDate:'',
                    gradeId: '',
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
                            {required: true, message: '年级不能为空'}
                        ],
                        change: (val) => {
                        	this.search.typeId='';
                        	this.questType (val);
                        	
                        },
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'answerDate',
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
                    {
                        label: '类型数量分配 ：'
                    },
//                  {
//                      prop: 'memory',
//                      type: 'input',
//                      label: '记忆(5分)：',
//                      rules: [
//                          {required: true, message: '记忆题不能为空'}
//                      ]
//                  },
//                  {
//                      prop: 'understand',
//                      type: 'input',
//                      label: '理解(5分)：',
//                      rules: [
//                          {required: true, message: '理解题不能为空'}
//                      ]
//                  },
//                  {
//                      prop: 'thinking',
//                      type: 'input',
//                      label: '思考(5分)：',
//                      rules: [
//                          {required: true, message: '思考不能为空'}
//                      ]
//                  },
//                  {
//                      prop: 'questionScore',
//                      type: 'input',
//                      label: '试卷总分：',
//                      disabled:true,
//                      rules: [
//                          {required: true, message: '试卷总分不能为空'}
//                      ]
//                  },
//                  {
//                      prop: 'questionsCount',
//                      type: 'input',
//						disabled:true,
//                      label: '题目总数量：',
//                      rules: [
//                          {required: true, message: '题目总数量不能为空'}
//                      ]
//                  },
 
                ],
                // table的属性设置
                data: [],
                typeList:[],
                loading: true, //  加载缓冲
                ranks:[],
                score:'', //分数
                total:'', //题目数量
            }
        },
        components: {
            SearchForm,
            testCreation
        },
        methods: {
             // 题目类型
            questType (val) {
            	let params = { gradeId: val}
                answerOption.questionType(params).then(res => {
                    if(res.data.code === 0) {
                    	console.log('选择年级----',res)
                        this.typeList= res.data.data;
	                      for(var i=0; i<this.typeList.length; i++){
	                      	this.$set(this.typeList[i], 'num', '')
	                      }
                        
                    }
                })
            },
            EmitInit(obj,total,s){
            	this.ranks=[];
            	this.score=s;
            	this.total=total;
            	for(var i=0; i<obj.length; i++){
         			this.ranks.push({
         				id:obj[i].typeId,
         				value:Number(obj[i].num)
         			})
            	}
            },
            getInit(){
            	let id = this.$route.params.id;
                setApi.get(id).then((res) => {
                	console.log('默认 init ----',res)
                    if(res.data.code == 0){
                       this.search=res.data.data
					   this.typeList = res.data.data.typeValueList;
					   for(var i=0; i<res.data.data.typeValueList.length; i++){
					   		this.$set(this.typeList[i], 'num', res.data.data.typeValueList[i].proportion);
					   		this.$set(this.typeList[i], 'value', res.data.data.typeValueList[i].value);
					   		this.$set(this.typeList[i], 'typeName', res.data.data.typeValueList[i].name);
					   		this.$set(this.typeList[i], 'typeId', res.data.data.typeValueList[i].id);
					   }
                    }
                })
            	
            },
            edit() {
            	let self=this;
            	this.global.formValidate.call(this,'functionAddForm',function(){
            		console.log('数目',self.total);
	            	console.log('总分',self.score);
	            	console.log('ranks',self.ranks)
	            	if(self.score==0||self.total==0){
	            		self.$message.error('请输入类型数量');
	            	}else{
		                let params = {
		                    answerDate: self.search.answerDate,
		                    gradeId: self.search.gradeId,
		                    questionScore: self.score,
		                    questionsCount:self.total,
		                    ranks:self.ranks,
		                    id:self.$route.params.id,
		                };
		                setApi.edit(params).then((res) => {
		                    if(res.data.code == 0){
		                        self.$message.success('更新成功');
		                        self.$router.go(-1);
		                    }
		                })
					}
            	});
            },
            back(){
            	this.$router.go(-1);
            }
        },
        mounted() {
        	this.getInit();
        	
            this.items[0].options = this.global.session.get('gradeList')
        },

    }
</script>
<style>
	.questAction .el-input-number{
		width: 202px;
	}
</style>
<style lang="less" type="text/less">
	.my-btn-box{
		
	}
    .questType{
    .bread-title{
        padding: 10px 0 10px 20px;
    .last >span{color: #474e5d;}
    }
    .content{
        background-color: #ffffff;
        padding: 20px 40px;
    .button-box{
    .delectBatch{float: right}
    }
    }
    }
</style>

