<template>
    <div class="questAction">
    	<h4>查看动态组题</h4>
        <div>
            <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="140px" :model="search" ref="functionAddForm">
            	
            </SearchForm>
        </div>
        
    </div>
</template>
<script>

    // 模块的引用
    import SearchForm from '@components/search-form/index';

    //  接口
    import setApi from '@src/network/subject/quest-setting/problemSet/dynamic.js';

    export default {
        name: 'questType',
        data: function () {
            return {
                search: {
                    questionScore: '',
                    questionsCount: '',
                    answerDate:'',
                    memory: '',
                    understand: '',
                    thinking: '',
                    gradeId: '',
                    id: ''
                },
                items: [
                    {
                        prop: 'gradeName',
                        type: 'text',
                        label: '年级：',
                        placeholder: '请选择年级',
                        options: [
                        ],
                        defaultProps: {
                            id: 'id',
                            label: 'name'
                        }
                    },
                    {
                        prop: 'answerDate',
                        type: 'text',
                        label: '答题时间：',
                        addition: (h) => {
                        	return [<span style='margin-left:8px'>分钟</span>];
                        }
                    },
                    {
                        label: '类型数量分配 ：',
                    	type:'custom-text',
                    	renderContent:(h)=>{
                    		return (
                    			<ul  style='padding-left:0;margin:0'>
                    				{this.dataInit.map((item, index) => {
                    					return (<li>
							        			<span>{item.name}</span>
							        			<small>({item.value}分):</small>
							        			<span style='margin-left:6px'>共{item.proportion}道题</span>
            							</li>)
                    				})}
						        </ul>
                    		);
                    	}
                    },
                    {
                        prop: 'questionScore',
                        type: 'text',
                        label: '试卷总分：',
                        
                    },
                    {
                        prop: 'questionsCount',
                        type: 'text',
                        label: '题目总数量：',
                       
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '返回',
                                btnType: 'danger',
                                handleClick: (row) => {
                                    this.$router.go(-1);
                                }
                            }
                        ]
                    }
                ],
                // table的属性设置
                dataInit: [],
                loading: true, //  加载缓冲
                total: 0  // 总页数
            }
        },
        components: {
            SearchForm
        },
        methods: {
            getInit(){
            	let id = this.$route.params.id;
                setApi.get(id).then((res) => {
                    if(res.data.code == 0){
                       this.search=res.data.data
                       this.dataInit = res.data.data.typeValueList
                    }
                })
            	
            },
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

