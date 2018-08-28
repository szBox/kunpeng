<template>
    <div class="questAction">
        <div>
            <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="140px" :model="search" ref="functionAddForm"></SearchForm>
        	<test-creation :dataObj='typeList' @EmitAction='EmitInit'></test-creation>
        	<div class="alertBox">
                <el-dialog
                    title="温馨提示"
                    :visible.sync="prompt"
                    width="30%"
                    center>
                    <span>试卷保存成功，名为：{{paper}}，是否前往查看？</span>
                    <span slot="footer" class="dialog-footer">
                       <el-button type="primary" @click='gopaper'>是</el-button>
                       <el-button type="danger" @click="prompt = false">否</el-button>
                    </span>
                </el-dialog>
            </div>
        	<div class="my-btn-box" style="margin-left: 140px;">
              <el-button class='btn-add' type="primary" @click="save()">生成试卷</el-button>
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
    import setAuto from '@src/network/subject/quest-setting/problemSet/automatic.js';
	import answerOption from '@src/network/subject/quest-setting/answer-public.js';
    export default {
        name: 'questType',
        data: function () {
            return {
                search: {
                    insertTime:30,
                    gradeId: '',
                    readBookId:'',
                    name:'',
                    typeReadId:'',
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
                        	this.search.readBookId='';
                        	this.search.questionsTypeId='';
                        	this.search.typeId='';
                            this.readingType();
                            this.readingBook(val, this.search.readTypeId)
                        	
                        	this.questType (val);
                        	
                        },
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'typeReadId',
                        type: 'select',
                        label: '阅读类型',
                        placeholder: '请选择阅读类型',
                        options: [
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        },
                        change: (val) => {
                        	this.search.readBookId='';
                            this.readingBook(this.search.gradeId, val);
                        }
                    },
                    {
                        prop: 'readBookId',
                        type: 'select',
                        label: '阅读书籍',
                        placeholder: '请选择阅读书籍',
                        options: [
                        ],
                        rules: [
                            {required: true, message: '阅读书籍不能为空'}
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'insertTime',
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
 
                ],
                // table的属性设置
                data: [],
                typeList:[],
                loading: true, //  加载缓冲
                ranks:[],
                prompt:false,
                score:'', //分数
                total:'', //题目数量
                paper:'',
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
                        this.typeList= res.data.data;
	                      for(var i=0; i<this.typeList.length; i++){
	                      	this.$set(this.typeList[i], 'num', '')
	                      }
                        
                    }
                })
            },
            // 阅读类型下拉
            readingType () {
                let params = {current: 1, size: 10, gradeId: ''}
                answerOption.readingType(params).then(res => {
                    if(res.data.code === 0) {
                        this.items[1].options  = res.data.data.records;
                    }
                })
            },
            // 阅读图书下拉
            readingBook (gradeId, readTypeId) {
                let params = {gradeId,readTypeId}
                answerOption.readingBooks(params).then(res => {
                    if(res.data.code === 0) {
                        this.items[2].options  = res.data.data
                    }
                })
            },
            EmitInit(obj,total,s){
            	this.ranks=[];
            	this.score=s;
            	this.total=total;
            	for(var i=0; i<obj.length; i++){
         			this.ranks.push({
         				rankId:obj[i].typeId,
         				proportion:Number(obj[i].num)
         			})
            	}
            },
            save() {
            	let self=this;
            	this.global.formValidate.call(this,'functionAddForm',function(){
	            	if(self.score==0||self.total==0){
	            		self.$message.error('请输入类型数量');
	            	}else{
		                let params = {
		                    answerTime: self.search.insertTime,
		                    gradeId: self.search.gradeId,
		                    score: self.score,
		                    amount:self.total,
		                    tpRankList:self.ranks,
		                    gqTypeId:1,
		                    name:self.search.name,
		                    readBookId:self.search.readBookId,
		                    readTypeId:self.search.typeReadId,
		                };
		                setAuto.add(params).then((res) => {
		                    if(res.data.code == 0){
		                    	self.prompt=true;
		                    	self.paper=res.data.data
		                    	console.log('生成成功',res)
		                        self.$message.success('添加成功');
		                    }
		                })
					}
            	});
            },
            back(){
            	this.$router.go(-1);
            },
            gopaper(){
            	this.prompt=false;
            	this.$router.push({
            		path:'/subject/problemSet/paper'
            	})
            }
        },
        mounted() {
        	
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

