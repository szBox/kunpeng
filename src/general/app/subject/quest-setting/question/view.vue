<template>
	<div class="questSee">
		<h4>查看题目</h4>
		
		<ul class="quest-ul">
			<li>
				<i>阅读书籍名称 :</i> <span>{{init.bookName}} </span>
			</li>
			<li>
				<div><i>题目类型 : </i><span>{{init.qyname}}</span></div>
				<div>
					<i>题目星级难度 : </i>
					<el-rate style='float: left;' disabled v-model="init.questionsRandId"></el-rate>
				</div>
			</li>
			<li>
				<div><i>题目 : </i><span>{{init.name}}</span></div>
			</li>
			<li v-if='init.imageUrl!=null&&init.imageUrl!=""'>
				<div><i>题目图片:</i> <img class="quest-img" :src="init.imageUrl"/></div>
			</li>
			<li>
				<div>
					<i>选择答案 : </i>
					<ul class="ul-abcd">
						<li v-for='(option,index) in init.qclist'>
							<span class='option-A'  :class="{
								'optionActive': init.correct.indexOf(option.id) != -1}">
								{{index+1 | optionFilter}} :
							</span>
							{{option.value}}
						</li>
						
						
					</ul>
				</div>
			</li>
			<li>
				<div><i>正确答案 : </i><span style="color: red;">{{init.correct | answerFn(init.qclist)}}</span></div>
			</li>
			
		</ul>
			<el-button style='margin-left: 130px;' v-if='!loading' @click='goBack()' type='danger' >返回</el-button>
		
	</div>

</template>

<script>
	
	import questionApi from '@src/network/subject/quest-setting/questions.js'
	export default {
		data() {
			return {
				data: [],
				init:[],
				total: 0,
				loading: true
			}
		},
		filters:{
			optionFilter(val){
				if(val==1){
					return 'A'
				}
				if(val==2){
					return 'B'
				}
				if(val==3){
					return 'C'
				}
				if(val==4){
					return 'D'
				}
				if(val==5){
					return 'E'
				}
			},
			answerFn(val,ids){
				var abcd=''
				var abcdArr =['A','B','C','D','E'];
				if(val!=undefined){
					var answerData = val.split(',');
					for(var i=0; i<ids.length; i++){
						for(var j=0; j<answerData.length; j++){
							if(ids[i].id==answerData[j]){
								abcd += abcdArr[ids.indexOf(ids[i])]
							}
						}
					}
					return abcd
				}
			}	
		},
		methods: {
			getQuest (){
				let id=this.$route.params.id
				questionApi.see(id).then(res => {
                    console.log('题目详情',res)  //接受到的参数
					if(res.data.code === 0) {
						this.loading=false;
						this.init = res.data.data;
//						this.data=res.data.data.questionsList
						if(res.data.data.imageUrl!=null){
							
							if(res.data.data.imageUrl.indexOf('?uploadId')){
						     this.init.imageUrl=res.data.data.imageUrl.split('?uploadId')[0]
							}else{
								this.init.imageUrl=res.data.data.imageUrl;
							}
						}
						
                    }
                    
                })
			},
			goBack(){
            	this.$router.go(-1);
            }
   
		},
		mounted() {
			this.getQuest();
		},
		components: {
		
		}
	}
</script>


<style lang="less" scoped>
	
	
	.paper-cover {
		>img{
			max-width: 400px;
			max-height:200px;	
		}
	}
	ul.quest-ul{
		padding-left: 0;
		overflow: hidden;
		>li{
			font-size: 14px;
			overflow: hidden;
			margin-bottom: 40px;
			i{
				color: #999;
				font-style: normal;
				float:left;
				width: 105px;
				text-align: right;
				margin-right: 25px;
			}
			
			ul.ul-abcd{
				float: left;
				padding-left: 0;
				overflow: hidden;
				li{
					margin-bottom: 15px;
				}
				li:last-child{
					margin-bottom:0;
				}
			}
			
			img.quest-img{
				max-width: 400px;
				max-height:200px;
			}
			>div{
				float:left;
				line-height: 20px;
				margin-right: 60px;
				>span{
					color: #666;
				}
			}
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
	
	
</style>

