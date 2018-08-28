<template>
    <div class="function-add">
    	<h4>部门编辑</h4>
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
                	name:'',
                	sid:this.global.session.get('user').sid,
                },
                items: [
                    {
                        prop: 'name',
                        type: 'input',
                        label: '部门名称:  ',
                       	placeholder: '请输入部门名称',
                        rules: [
                            {required: true, message: '部门名称不能为空'}
                        ],
                    },
                    {
                        type: 'action',
                        actionList: [
                            {
                                text: '更新',
                                btnType: 'primary',
                                handleClick: (row) => {
                                    this.global.formValidate.call(this,'functionAddForm', this.getEdit);
                                }
                            },
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
        		school.DepSee(id).then(res => {
                    console.log('班级信息详情',res)  //接受到的参数
					if(res.data.code === 0) {
						this.search = res.data.data;
						
                    }
                    
                })
        	},
        	getEdit (){
        		school.DepEdit(this.search).then(res => {
					if(res.data.code === 0) {
						this.$message.success('更新成功');
						this.$router.go(-1);
                    }
				})
        	},
            goBack(){
            	this.$router.go(-1);
            }
          
        },
		created (){
			this.getInit();
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

