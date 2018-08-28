<template>
	<div  class="test-creation">
        <el-form  labelWidth="140px">
            <el-form-item :label="item.typeName + '(' + item.value + '分):'" v-for="(item, index) in dataObj" key="index">
                <el-input type="number" min="0" max="" v-model="item.num"></el-input>
            </el-form-item>
            
            <el-form-item v-if='dataObj.length>0' label= '题目总数量:'>
                <el-input type="text" v-model="total==0?'':total" disabled></el-input>
            </el-form-item>
            <el-form-item v-if='dataObj.length>0' label= '试卷总分:'>
                <el-input type="text" v-model="score==0?'':score" disabled></el-input>
            </el-form-item>
            
        </el-form>
    </div>
</template>

<script>
	export default{
		data(){
			return{
				total:0,
				score:0,
			}
		},
		props:{
			dataObj: {
				type: Array,
				default () {return []}
			},
		},
		watch: {
			dataObj: {
			    handler: function (val, oldVal) { 
			      	this.total=0;
			      	this.score=0;
//			      	console.log(val,'ssssss')
					for(var i=0; i<val.length; i++){
						this.total += Number(val[i].num);
						this.score += Number(val[i].num)*Number(val[i].value);
					}
					this.$emit('EmitAction',this.dataObj,this.total,this.score);
			    },
			    deep: true
			},
        },
	}
</script>

<style lang="less">
	.test-creation input{
		width: 202px;
	}
</style>