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
            </el-form-item>

                <i class="el-icon-remove" @click="remove()"></i>
                <i class="el-icon-circle-plus" @click="add()"></i>


            <el-form-item  label="正确答案:">
                <el-checkbox-group    v-model="correct" class='checkbox-group' @change="changeFun">
                    <el-checkbox  :label='index' class='checkbox-check' v-for="(item, index) in optionTitle">{{increase[index]}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-button type="primary" @click="save" style="margin-left: 120px">生成试卷</el-button>
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
//                    console.log(this.answerList)
                }
            },
            remove() {
                const length = this.optionTitle.length;
                this.optionTitle.pop();
                this.$delete(this.search, `input${length-1}`);
            },
            add() {
                const length = this.optionTitle.length;
                this.optionTitle.push(length);
                this.$set(this.search, `input${length}`, '');
            },
            changeFun(value) {
                this.correct = value;
                this.search2()
//                this.$emit('options',[this.correct,this.search])
            },
            save () {
                console.log(this.message);
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
                        this.$message.success('生成失败')
                    }
                })
            }

        },
        created() {
            this.search2()
        }
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
