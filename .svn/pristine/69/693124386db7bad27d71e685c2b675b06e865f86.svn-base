<template>
    <div class="answer-options">
        <!--<div class="input-list" v-for="(item, index) in options" :key="index">-->
            <!--<el-input v-model="item.value" class="my-input">-->
                <!--<template slot="prepend">{{optionTitle[index]}}:</template>-->
              <!--</el-input>-->

              <!--<i class="el-icon-remove" v-if="index > 1" @click="remove(index)"></i>-->
              <!--<i class="el-icon-circle-plus" v-if="index == options.length - 1" @click="add()"></i>-->
        <!--</div>-->
        <!--<div  class="check-list" >-->
            <!--<div v-for="(item, index) in options" :key="index">-->
                <!--<el-checkbox v-model="checked">{{optionTitle[index]}}</el-checkbox>-->
            <!--</div>-->
        <!--</div>-->

        <el-form class='answer-form' ref="form" :rules="rules" label-width="100px" style='overflow: hidden;'>
            <el-form-item :label="increase[index]"  class="input-list" v-for="(item, index) in optionTitle" :key="index">
                <el-input class="my-input" v-model="search['input'+index]" style="width: 242px">
                </el-input>
            	 <i class="el-icon-remove" v-if="index == optionTitle.length - 1" @click="remove(index)"></i>
                <i class="el-icon-circle-plus" v-if="index == optionTitle.length - 1" @click="add()"></i>
            
            </el-form-item>

               


            <el-form-item  label="正确答案:">
                <el-checkbox-group    v-model="correct" class='checkbox-group' @change="changeFun">
                    <el-checkbox  :label='index' class='checkbox-check' v-for="(item, index) in optionTitle" :key="index">{{increase[index]}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-button type="primary" @click="save" style="margin-left: 100px">提交</el-button>
        </el-form>
    </div>
</template>

<script>
    import questionApi from '@src/network/subject/quest-setting/questions.js'

    export default {
        name: 'answer-options',
        data() {
            return {
                correct: [],
                search: {
                    input0:'',
                    input1:'',
                    input2:'',
                    input3: ''
                },
                answerList: [],
                optionTitle: ['A','B','C','D'],
                increase: ['A','B','C','D','E','F','G']
            }
        },
        props:['message','prompt'],
        methods: {
            search2() {
                for ( var i in this.search){
                    this.answerList.push(this.search[i]);
                      console.log('init----',this.answerList)
                }
            },
            remove(index) {
                const length = this.optionTitle.length;
                if(length>2){
                	this.optionTitle.pop();
                	this.$delete(this.search, `input${length-1}`);
                	this.answerList.splice(index,1);
                	console.log('xiabiao',index);
                	if(this.correct.indexOf(index)>-1){
                		this.correct.splice(this.correct.indexOf(index),1);
                	}
                	
                }else{
           			this.$message.error('选项最少2个');
                }
                
                
            },
            add() {
                const length = this.optionTitle.length;
                if(length<5){
                	this.optionTitle.push(length);
                	this.$set(this.search, `input${length}`, '');
                }else{
                	this.$message.error('选项最多5个');
                }
                
                
            },
            changeFun(value) {
                this.correct = value;
//              this.search2()
//                this.$emit('options',[this.correct,this.search])
            },
            save () {
            	
            	let ifAnswer=true,ifCorrect=true,ifTitle=true;//选项，答案，题目
            	let ifGrade=true,ifType=true,ifBook=true,ifStar=true; //年级，类型，书籍，难度
            	for(var i=0; i<this.answerList.length; i++){
            		if(this.answerList[i]==''){
            			ifAnswer=false;
            			this.$message.error('选项内容不能为空');
            		}
            	}
            	if(this.message.gradeId==''){
            		ifGrade=false;
            		this.$message.error('年级不能为空');
            	}
            	else if(this.message.questionsTypeId==''){
            		ifType=false;
            		this.$message.error('题目类型不能为空');
            	}
            	else if(this.message.readBookId==''){
            		ifBook=false;
            		this.$message.error('阅读书籍不能为空');
            	}
            	else if(this.message.name==''){
            		ifTitle=false;
            		this.$message.error('题目内容不能为空');
            	}
            	else if(this.message.questionsRankId==''){
            		ifStar=false;
            		this.$message.error('题目难度不能为空');
            	}
            	else if(this.correct.length<1){
            		ifCorrect=false;
            		this.$message.error('答案不能为空');
            	}
            	if(ifAnswer==true && ifCorrect==true && ifTitle==true && ifGrade==true && ifType==true && ifBook==true && ifStar==true){
//          		console.log('选项',this.answerList);
//          		console.log('答案',this.correct)
//          		console.log('init',this.message);
            		let params = {
	                    correctChoiceIds: this.correct,
	                    choices: this.answerList,
	                     ...this.message
                	};
	                questionApi.add(params).then(res => {
	                    if(res.data.code === 0) {
	                        this.$message.success('提交成功');
	                        this.$router.go(-1);
	                    } else {
	                        this.$message.error('生成失败')
	                    }
	                })
            	}
            	
               
                
            },
           

        },
        watch:{
        	'search.input0'(val){
        		console.log('选项A---',val);
        		this.answerList[0]=val;
        	},
        	'search.input1'(val){
        		console.log('选项B---',val);
        		this.answerList[1]=val;
        	},
        	'search.input2'(val){
        		console.log('选项C---',val);
//      		this.answerList[2] = !!val ? val : '';
        		if(val!=undefined){
        			this.answerList[2] = val
        		}
        		
        	},
        	'search.input3'(val){
        		console.log('选项D---',val);
//      		this.answerList[3]=val;
				if(val!=undefined){
        			this.answerList[3] = val
        		}
        	},
        	'search.input4'(val){
        		console.log('选项E---',val);
//      		this.answerList[4]=val;
				if(val!=undefined){
        			this.answerList[4] = val
        		}
        	},
        },
        created() {
            this.search2()
        },
     	
    }
</script>

<style lang="less" scoped>
    .answer-options{
    .input-list{
        margin-bottom: 10px;
    i{
        display: inline-block;
        vertical-align: middle;
        font-size: 35px;
        cursor: pointer;
    }
    div.el-form-item__content{
        margin-left: 0 !important;
    }
    }
    .check-list{
        overflow: hidden;
        line-height: 50px;
    span{
        float: left;
    }
    >p{
         float: left;

         margin:0 30px 0 0;
     }
    }
    .checkbox-group{
        float: left;
        margin-right: 30px;
        /*.checkbox-check{
            margin-left: 30px;
        }*/
    }

    }
    img.paper-cover {
        max-width: 400px;
        max-height:200px;

    }
</style>
