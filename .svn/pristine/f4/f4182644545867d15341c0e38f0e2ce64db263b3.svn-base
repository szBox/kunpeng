<template>
    <div class="function-add">
    	<h4>班级详情</h4>
        <SearchForm :items="items" :showMessage="true" :inline="false" labelWidth="120px" :model="search" ref="functionAddForm"></SearchForm>
    	
    </div>
</template>
<script>
    import SearchForm from '@components/search-form/index';
	import school from '@src/network/setting/school/school.js';
    export default {
        data() {
            return {
                search: {
                	gradeId: '',
					name: "",
					num: "",
					sid: this.global.session.get('user').sid,
					teacherId: '',
					userId: ''
                },
                items: [
                	 {
                        prop: 'num',
                        type: 'text',
                        label: '班级编号:  ',
                        
                    },
                    {
                        prop: 'name',
                        type: 'text',
                        label: '班级名称:  ',
                       
                    },
                     {
                        prop: 'name',
                        type: 'text',
                        label: '年级',
                        
                        options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        change: (val) => {
//                         console.log(val)
                        },
                    },
                     {
                        prop: 'teacherName',
                        type: 'text',
                        label: '班主任',
                        
                        options: [  
                        ],
                        defaultProps: {
                        	id: 'id',
                        	label: 'name'
                        },
                        change: (val) => {
//                         console.log(val)
                        },
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

                ]
            }
        },
        methods: {
        	 getInit (){
            	let id=this.$route.params.id;
        		school.ClassSee(id).then(res => {
                    console.log('班级信息详情',res)  //接受到的参数
					if(res.data.code === 0) {
						this.search = res.data.data;
						
                    }
                    
                })
        	},
            goBack(){
            	this.$router.go(-1);
            }
          
        },
		created (){
			this.getInit()
		},
        components: {
            SearchForm
        }
    }
</script>
<style lang="less" scoped>
    .function-add{
        padding: 40px;
        background-color: #ffffff;
    }
    .el-form-item__label{
    	text-align: center !important;
    }
</style>

