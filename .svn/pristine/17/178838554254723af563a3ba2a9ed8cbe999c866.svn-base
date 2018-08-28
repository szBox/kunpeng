<template>
	<div class="answer-options">
		<!--{{ options }}-->
		<span>答案Id ：{{correct}}</span>
		<p>
			选项	ID ：{{qclist}}
		</p>
		<!--<div class="input-list" v-for="(item, index) in options" :key="index">
			<el-input v-model="item.value" class="my-input">
			    <template slot="prepend">{{optionTitle[index]}}:</template>
		  	</el-input>
		  	
		  	<i class="el-icon-remove" v-if="index > 1" @click="remove(index)"></i>
		  	<i class="el-icon-circle-plus" v-if="index == options.length - 1" @click="add()"></i>
		</div>-->
		<!--<div  class="check-list" >
			<div v-for="(item, index) in options" :key="index">
				<el-checkbox v-model="checked">{{optionTitle[index]}}</el-checkbox>
			</div>
		</div>-->
		
		
	
			
			<div class="input-list" v-for="(item, index) in options.qclist" :key="index">
				<el-input v-model="item.value" class="my-input">
		    		<template slot="prepend">{{optionTitle[index]}}:</template>
		    		<!--<template slot="prepend">{{item.id}}:</template>-->
	  			</el-input>	
			</div>
			
			<!--<div  class="check-list">
				<span>正确答案</span>
				<p v-for="(item, index) in options.qclist" :key="index">
					<el-checkbox  v-model="item.id">{{optionTitle[index] | answerFilters(val,item.id,ids)}}</el-checkbox>
				</p>
			</div>-->
			
  			<el-form-item inline='true' label="正确答案" prop="type">
			    <el-checkbox-group v-for="(item, index) in qclist" v-model="correct" :key="item">
			    	<el-checkbox @change='changeAnswer()' :label='item'>{{optionTitle[index]}}</el-checkbox>
			    </el-checkbox-group>
		    </el-form-item>
		
	</div>
</template>

<script>
	export default {
		name: 'answer-options',
		props: {
			value: Array,
			correct:{
				type: Array,
				default () {return []}
			},
			qclist:{
				type: Array,
				default () {return []}
			},
			options: {
				type: Array,
				default () {return []}
			}
		},
		data() {
			return {
				optionTitle: ['A','B','C','D','E','F','G']
			}
		},
		methods: {
			remove(index) {
				this.options.splice(index, 1);
			},
//			add() {}
			changeAnswer(){
//				console.log(this.correct);
				 this.$emit('EmitAnswer', this.correct)
			},
			
		},
		watch:{
	     
	      correct (val){
	   			console.log(this.correct);
//	         	 vm.$emit('selectItem',vm.value)
	   
	      }
	   },
		mounted() {
			
			setTimeout(()=>{
				console.log('prpo',this.options)
			},1000)
			
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
	}
</style>