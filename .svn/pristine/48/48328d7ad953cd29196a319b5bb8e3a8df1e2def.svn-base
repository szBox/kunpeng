<template>
  <div class="add-edit-form-box">
    <el-form ref="form" :model="form" label-width="80px" style="width: 300px;" :rules="rules">
      <el-form-item label="学生名称" prop="name">
        <el-input v-model="form.name" maxlength="50"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phone">
        <el-input v-model="form.phone" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickName">
        <el-input v-model="form.nickName" maxlength="50"></el-input>
      </el-form-item>
      <el-form-item label="班级" prop="classId">
        <el-select v-model="form.classId" filterable placeholder="请选择班级">
          <el-option
            v-for="item in classList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="个性签名">
        <el-input v-model="form.personSign"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <!--<el-upload-->
          <!--class="avatar-uploader"-->
          <!--action="https://jsonplaceholder.typicode.com/posts/"-->
          <!--:show-file-list="false"-->
          <!--:on-success="handleAvatarSuccess"-->
          <!--:before-upload="beforeAvatarUpload">-->
          <!--<img v-if="form.headPic" :src="form.headPic" class="avatar">-->
          <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
        <!--</el-upload>-->
        <image_upload v-model="form.headPic"/>
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
  import * as student from '@/API/settings/account/student';
  import * as classtable from '@/API/settings/school/class';
  import image_upload from '@/components/upload/image-upload';

  export default {
    name: 'dep_edit',
    data(){
      return {
        form: {
          id: null,
          name: '',
          sex: 1,
          headPic: null
        },
        rules: {
          name: this.formRules({required: true}),
          phone: this.formRules({required: true, type: 'phone'}),
//          nickName: this.formRules({required: true}),
          classId: this.formRules({required: true}),
        },
        classList: null,
        uploading: false
      }
    },
    created(){
      let vm = this;
      let sid = JSON.parse(this.s.get('baseInfo')).sid;

      //初始化班级下拉列表
      classtable.classOptions.r("sid=" + sid + '&gid=').then(function (res) {
        let data = res.data;
        if (data.code == 0) {
          vm.classList = data.data;
        }
      });

      //编辑时id不为空，展示数据
      vm.form.id = this.$route.query.id;
      if (vm.form.id) {
        student.queryById.r(vm.form.id).then(function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.form = data.data;
          }
        });
      }
    },
    methods: {
      //提交
      onSubmit(){

        if (this.uploading) {
          this.$message.warning('当前正在上传,请稍等!')
          return;
        }
        let bl = false, vm = this;

        if (!this.form.id) {
          student.saveStudent.r(this.form).then(function (res) {
            let data = res.data;
            if (data.code == 0) {
              vm.$message('新增成功');
              vm.$routerGo(-1);
            }
          });
        } else {
          student.editStudent.r(this.form).then(function (res) {
            let data = res.data;
            if (data.code == 0) {
              vm.$message('修改成功');
              vm.$routerGo(-1);
            }
          });
        }
      },
      //上传成功
      handleAvatarSuccess(res, file) {
        this.form.headPic = URL.createObjectURL(file.raw);
        this.uploading = false;
      },
      //上传之前验证操作
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        if (isJPG && isLt2M) {
          this.uploading = true;
        }
        return isJPG && isLt2M;
      }
    },
    components: {
      image_upload
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }

  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
</style>
