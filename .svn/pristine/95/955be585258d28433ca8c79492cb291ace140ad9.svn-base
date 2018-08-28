<template>
  <div class="add-edit-form-box">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" style="width: 300px;">
      <el-form-item label="班级编号" prop="num">
        <el-input v-model="form.num" maxlength="10"></el-input>
      </el-form-item>
      <el-form-item label="班级名称" prop="name">
        <el-input v-model="form.name" maxlength="50"></el-input>
      </el-form-item>
      <el-form-item label="年级" prop="gradeId">
        <el-select v-model="form.gradeId" placeholder="请选择">
          <el-option
            v-for="item in grades"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="班主任">
        <el-select v-model="teacher" placeholder="请选择" value-key="id">
          <el-option
            v-for="item in teachers"
            :key="item.id"
            :label="item.name"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="form.state">
          <el-radio :label="1">在用</el-radio>
          <el-radio :label="2">禁用</el-radio>
        </el-radio-group>
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

  import * as classtable from '@/API/settings/school/class';
  import * as teacher from '@/API/settings/account/teacher';
  import * as grade from '@/API/settings/school/grade';

  export default {
    name: 'classtable_edit',
    data(){
      return {
        form: {
          id: null,
          name: '',
          state: 1
        },
        rules: {
          num: {required: true, trigger: 'blur', validator: this.changeNumHandle},
          name: {required: true, trigger: 'blur', validator: this.changeNameHandle},
          gradeId: this.formRules({required: true}),
        },
        //老师下拉数据
        teachers: null,
        //年级下拉数据
        grades: null,
        //编辑时展示的数据
        teacher: null,
        //班级编号是否可用
        numIsExist: true
      }
    },
    created(){
      let vm = this;
      let sid = JSON.parse(this.s.get('baseInfo')).sid;
      //编辑时id不为空，展示数据
      vm.form.id = this.$route.query.id;
      //初始化老师下拉列表
      let param = 'sid=' + sid;
      if (vm.form.id) {
        param += '&id=' + vm.form.id;
      }
      teacher.classTeacherOptions.r(param).then(function (res) {
        let data = res.data;
        if (data.code == 0) {
          vm.teachers = data.data;
        }
      });
      //初始化年级下拉列表
      grade.gradeOptions.r().then(function (res) {
        let data = res.data;
        if (data.code == 0) {
          vm.grades = data.data;
        }
      });

      if (vm.form.id) {
        classtable.queryById.r(vm.form.id).then(function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.form = data.data;
            vm.teacher = {id: vm.form.teacherId, name: vm.form.teacherName}
          }
        });
      }
    },
    methods: {
      //验证班级编号
      changeNumHandle(rule, value, callback){
        if (!value) {
          callback(new Error('请填写班级编号'))
        } else if (value) {
          let vm = this;
          let params = 'num=' + value;
          if (vm.form.id) {
            params += '&id=' + vm.form.id;
          }
          classtable.checkClassNum.r(params).then(function (res) {
            let data = res.data;
            if (data.code == 0) {
              let bl = data.data;
              bl ? callback() : callback(new Error('该编号重复'));
            }
          });
        }
      },
      //验证班级名称
      changeNameHandle(rule, value, callback){
        if (!value) {
          callback(new Error('请填写班级名字'))
        } else if (value) {
          let vm = this;
          let params = 'name=' + value;
          if (vm.form.id) {
            params += '&id=' + vm.form.id;
          }
          classtable.checkClassName.r(params).then(function (res) {
            let data = res.data;
            if (data.code == 0) {
              let bl = data.data;
              bl ? callback() : callback(new Error('该名字重复'));
            }
          });
        }
      },
      //提交
      onSubmit(){
        let vm = this;
        if (this.teacher) {
          this.form.teacherId = this.teacher.id;
          this.form.userId = this.teacher.userId;
        }
        if (!this.form.id) {
          classtable.saveClass.r(this.form).then(function (res) {
            let data = res.data;
            if (data.code == 0) {
              vm.$message('新增成功');
              vm.$routerGo(-1);
            }
          });
        } else {
          classtable.editClass.r(this.form).then(function (res) {
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
