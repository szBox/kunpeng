<template>
  <div class="add-edit-form-box">
    <el-form>
      <el-form-item>
        <template>学生名字：<span>{{g.name}}</span></template>
      </el-form-item>
      <el-form-item>
        <template>电话号码：<span>{{g.phone}}</span></template>
      </el-form-item>
      <el-form-item>
        <template>昵称：<span>{{g.nickName}}</span></template>
      </el-form-item>
      <el-form-item>
        <template>所属班级：<span>{{g.className}}</span></template>
      </el-form-item>
      <el-form-item>
        <template>性别：<span v-if="g.sex==1">男</span><span v-if="g.sex==2">女</span></template>
      </el-form-item>
      <el-form-item>
        <template>个性签名：<span>{{g.personSign}}</span></template>
      </el-form-item>
      <el-form-item label="头像：">
          <img :src="g.headPic" alt="" style="width: 90px;height: 90px;display: block;">
      </el-form-item>
      <el-form-item>
        <template>新增时间：<span>{{g.insertTime | formatDate }}</span></template>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="$routerGo(-1)">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import * as student from  '@/API/settings/account/student';
  import {formatDate} from '@/assets/js/filters';

  export default {
    data(){
      return {
        id: this.$route.params.id,
        g: {}
      }
    },
    created(){
      let vm = this;
      student.queryById.r(vm.id).then(function (res) {
        let data = res.data;
        if (data.code == 0) {
          vm.g = data.data;
        }
      });
    },
    filters: {
      formatDate: function (time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    }
  }
</script>
<style scoped>
  .el-form-item {
    margin-bottom: 0;
  }
</style>
