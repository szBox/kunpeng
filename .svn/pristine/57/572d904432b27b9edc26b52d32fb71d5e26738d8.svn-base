<template>
    <div  class="topic">
        <el-form :label-position="labelPosition" labelWidth="140px" :model="form" >
            <el-form-item :label="item.typeName + '(' + item.value + '分):'" v-for="(item, index) in form" key="123">
                <el-input v-model="message"></el-input>
            </el-form-item>
            <el-form-item label= '题目总数量:'>
                <el-input type="text">{{amount}}</el-input>
            </el-form-item>
            <el-form-item label= '试卷总分:'>
                <el-input type="text">{{score}}</el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">生成试卷</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import setApi from '@src/network/subject/quest-setting/problemSet/automatic.js';

    export default{
        data () {
            return{
                labelPosition: 'right',
                score: '',
                amount: '',
                number: '',
                gradeId: this.message,
                form:[
                    {name: '理解题',value: '10', id: 0},
                    {name: '理解题',value: '10', id: 1},
                    {name: '理解题',value: '10', id: 2}

                ]
            }
        },
        props: ['message'],
        methods: {
            // 类型对应分值
            readValue () {
              let params = {gradeId: this.message ? this.message : 131};
                setApi.readValue(params).then(res => {
                    if(res.data.code === 0) {
                        this.form = res.data.data
                    }
                })
            },

        },
        computed: {
            // 总分
            score: {
                get () {
                    return (this.form.thinking * 5) + (this.search.memory * 5) + (this.search.understand * 5)
                }
            },
            // 总数量
            amount: {
                get () {
                    return parseInt(this.search.thinking ? this.search.thinking : 0) + parseInt(this.search.memory ? this.search.memory : 0) + parseInt(this.search.understand ? this.search.understand : 0)
                }
            }
        },
        // 监听数据变化
        watch: {
            score (value) {
                this.score = value
            },
            amount (value) {
                console.log(value,'112')
                this.amount = value
            }
        },
        created () {
            this.readValue()
        }
    }
</script>
<style>
    .topic{width: 349px;}
</style>
