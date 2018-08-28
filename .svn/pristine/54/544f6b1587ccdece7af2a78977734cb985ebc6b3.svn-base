<template>
  <div class="add-edit-form-box">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" style="width: 300px;">
      <el-form-item label="老师名称" prop="name">
        <el-input v-model="form.name" maxlength="50"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phone">
        <el-input v-model="form.phone" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="部门" prop="depId">
        <el-select filterable v-model="form.depId" placeholder="请选择">
          <el-option
            v-for="item in deps"
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
        <el-input v-model="form.personSign" maxlength="100"></el-input>
      </el-form-item>
      <!--<el-form-item label="特长">-->
        <!--<el-input v-model="form.skill" maxlength="100"></el-input>-->
      <!--</el-form-item>-->
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
        <image_upload v-model="form.headPic" />
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
  import * as teacher from '@/API/settings/account/teacher';
  import * as depart from '@/API/settings/school/department';
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
          phone: {required: true, trigger: 'blur', validator: this.changePhoneHandle},
          depId: this.formRules({required: true})
        },
        //部门下拉列表
        deps: null,
        uploading: false
      }
    },
    created(){
      let vm = this;
      let sid = JSON.parse(this.s.get('baseInfo')).sid;
      //初始化部门下拉列表
      depart.departOptions.r('sid=' + sid).then(function (res) {
        let data = res.data;
        if (data.code == 0) {
          vm.deps = data.data;
        }
      });

      //编辑时id不为空，展示数据
      vm.form.id = this.$route.query.id;
      if (vm.form.id) {
        teacher.queryById.r(vm.form.id).then(function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.form = data.data;
          }
        });
      }
    },
    methods: {
      //验证班级编号
      changePhoneHandle(rule, value, callback){
        let reg =/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if (!value) {
          callback(new Error('请填写手机号码'))
        }else if(!reg.test(value)) {
          callback(new Error('您输入的手机号不正确!'))
        }else if (value) {
          let vm = this;
          let params = 'phone=' + value;
          if (vm.form.id) {
            params += '&id=' + vm.form.id;
          }
          teacher.checkPhone.r(params).then(function (res) {
            let data = res.data;
            if (data.code == 0) {
              let bl = data.data;
              bl ? callback() : callback(new Error('该号码重复'));
            }
          });
        }
      },
      //提交
      onSubmit(){
        if (this.uploading) {
          this.$message.warning('当前正在上传,请稍等!')
          return;
        }
        let vm = this;
        if (!this.form.id) {
          teacher.saveTeacher.r(this.form).then(function (res) {
            let data = res.data;
            if (data.code == 0) {
              vm.$message('新增成功');
              vm.$routerGo(-1);
            }
          });
        } else {
          teacher.editTeacher.r(this.form).then(function (res) {
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
