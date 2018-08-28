<template>
    <div  class="topic">
        <el-form :label-position="labelPosition" labelWidth="140px" :model="form" >
            <el-form-item :label="item.typeName + '(' + item.value + '分):'" v-for="(item, index) in form" key="123">
                <el-input type="number" min="0" max="" v-model="search['input'+index]"></el-input>
            </el-form-item>
            <el-form-item label= '题目总数量:'>
                <el-input type="text" v-model="amount" readonly></el-input>
            </el-form-item>
            <el-form-item label= '试卷总分:'>
                <el-input type="text" v-model="score" readonly></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">生成试卷</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import setApi from '@src/network/subject/quest-setting/problemSet/automatic.js';

    export default{
        data () {
            return{
                search: {},
                labelPosition: 'right',
                score: '',
                amount: '',
                number: '',
                gradeId: this.message,
                form:[
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
                        this.form = res.data.data;
                        this.form.forEach((item, index) => {
                            this.$set(this.search, `input${index}`, 0);
                        })
                    }
                })
            },

        },
        // 监听数据变化
        watch: {
            score (value) {
                this.score = value
            },
            amount (value) {
//                console.log(value,'112')
                this.amount = value
            },
            search: {
                handler(newV) {
                    let count = 0;
                    let score = 0;
                    Object.keys(newV).forEach((item, index) => {
                        console.log(newV[item])
                        count += parseInt(newV[item]);
                        score += parseInt(newV[item]) * parseInt(this.form[index]['value']);
                    })
                    this.amount = count;
                    this.score = score;
                },
                deep: true
            }
        },
        created () {
        }
    }
</script>
<style>
    .topic{width: 349px;}
</style>
