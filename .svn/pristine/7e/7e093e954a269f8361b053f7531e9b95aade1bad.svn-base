<template>
  <div class="add-edit-form-box">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="form.name" style="width: 200px;" maxlength="50"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="formValid('form',onSubmit)">
                    <span v-if="form.id ==null">
                        新增
                    </span>
          <span v-if="form.id !=null">
                        编辑
                    </span>
        </el-button>
        <el-button @click="$routerGo(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

  import * as department from '@/API/settings/school/department';

  export default {
    name: 'department_edit',
    data(){
      return {
        form: {
          id: null,
        },
        rules: {
          name: this.formRules({required: true})
        }
      }
    },
    created(){
      let vm = this;
      vm.form.id = this.$route.query.id;
      if (vm.form.id) {
        department.queryById.r(vm.form.id).then(function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.form = data.data;
          }
        });
      }
    },
    methods: {
      onSubmit(form){
        let vm = this;
        if (!this.form.id) {
          department.saveDepartment.r(this.form).then(function (res) {
            let data = res.data;
            if (data.code == 0) {
              vm.$message('新增成功');
              vm.$routerGo(-1);
            }
          });
        } else {
          department.editDepartment.r(this.form).then(function (res) {
            let data = res.data;
            if (data.code == 0) {
              vm.$message('修改成功');
              vm.$routerGo(-1);
            }
          });
        }
      }
    }
  }
</script>
<style>

</style>
