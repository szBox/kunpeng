<template>
  <div class="add-edit-form-box">
  	<h4>角色模板设置</h4>
    <el-form label-width="100px" class="demo-ruleForm">
    
      <el-form-item label-width="120px" label="权限模板名称">
        <template><span>{{role.name}}</span></template>
      </el-form-item>
      <el-form-item label-width="120px" label="设置权限">
        <el-tree
          :data="allMenus"
          :default-checked-keys="roleMenus"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
          :props="defaultProps">
        </el-tree>
      </el-form-item>
      <el-form-item>
        <el-button v-has="10010605" type="primary" @click="submitForm()">提交</el-button>
        <el-button type="danger" @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
	import roles from '@src/network/setting/right/roles.js';
  import authority from '@src/network/setting/right/authority.js';
  export default {
    data() {
      return {
        role: {},
        allMenus: [],
        roleMenus: [],
        defaultProps:{
          children: 'trees',
          label: 'name'
        }
      };
    },
    created(){
      let vm = this, id = this.$route.params.id;
      vm.initRole(id);
      vm.initRoleMenus(id);
    },
    methods: {
      initRole (id){
      		let vm = this;
            roles.roleSee(id).then(res => {
                    console.log('权限模板详情',res)  //接受到的参数
					if(res.data.code === 0) {
						 vm.role = res.data.data;
                    }
                    
                })
        	},
      initAllMenus(){
        let id = this.$route.params.id;
        let vm = this;
        authority.allMenu().then(function(res){
          if(res.data.code == 0){
            vm.allMenus = res.data.data;
          }
        })
      },
      initRoleMenus(id){
        let vm = this;
        roles.detailRight(id).then(function(res){
          if(res.data.code == 0){
            vm.roleMenus = res.data.data;
            vm.initAllMenus();
          }
        })
      },
      submitForm() {
        let vm = this;
        let checkedIds = vm.$refs.tree.getCheckedKeys();
        let halfCheckedIds = vm.$refs.tree.getHalfCheckedKeys();
        let allIds = halfCheckedIds.concat(checkedIds);
//      let param = {
//        "id": vm.role.id,
//        codes: allIds
//      };
        roles.roleSet(vm.$route.params.id,allIds).then(function(res){
          if(res.data.code == 0){
            vm.$message.success('设置权限成功');
           	vm.$router.go(-1);
          }
        })
      },
      goBack() {
				this.$router.go(-1);
			}
    }
  }
</script>
<style>

</style>

