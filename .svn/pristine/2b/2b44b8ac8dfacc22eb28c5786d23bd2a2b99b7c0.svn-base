<template>
  <div>
    <div>
      <div class="ctrl_btn_box">
        <el-button v-has="10030201" type="primary" icon="el-icon-plus" @click="$routerGo('student/add')">添加</el-button>
        <el-button v-has="10030202" icon="el-icon-close " type="danger" plain @click="deleteByIds()">删除</el-button>
      </div>
      <div class="ctrl_form_box">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="学生名字">
            <el-input placeholder="请输入名字" v-model="name" clearable></el-input>
          </el-form-item>
          <el-form-item label="电话号码">
            <el-input placeholder="请输入" v-model="phone" clearable></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="classId">
            <el-select v-model="classId" filterable clearable  placeholder="请选择班级">
              <el-option
                v-for="item in classList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" @click="listPage()">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="table-box">
      <el-table
        :data="studentListData.records"
        v-loading="loading"
        stripe
        @selection-change="handleSelection">
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          type="index"
          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="学生名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话号码"
          width="150">
        </el-table-column>
        <el-table-column
          prop="nickName"
          label="昵称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          :formatter="formatSet">
        </el-table-column>
        <el-table-column
          prop="className"
          label="所在班级"
          width="150">
        </el-table-column>
        <el-table-column
          prop="headPic"
          label="头像"
          width="120">
          <template slot-scope="scope">
            <img :src="scope.row.headPic" alt="" style="width: 90px;height: 90px">
          </template>
        </el-table-column>
        <el-table-column
          prop="personSign"
          label="个性签名">
        </el-table-column>
        <el-table-column
          label="操作"
          width="220">
          <template slot-scope="scope">
            <el-button v-has="10030204" type="primary" size="mini" @click="$routerGo('student/detail/'+scope.row.id)">查看</el-button>
            <el-button v-has="10030203" type="primary" size="mini" @click="$routerGo({path:'student/edit',query:{id:scope.row.id}})">修改
            </el-button>
            <el-button v-has="10030202" type="danger" size="mini" @click="deleteById(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block" v-if="studentListData.total">
      <!--<span student="demonstration">大于 7 页时的效果</span>-->
      <el-button size="mini" @click="handleCurrentChange(1)">首页</el-button>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="studentListData.current"
        :page-sizes="[20, 50, 100]"
        :page-size="studentListData.size"
        layout="prev, pager, next"
        :total="studentListData.total">
      </el-pagination>
      <el-button size="mini" @click="handleCurrentChange(studentListData.pages)">尾页</el-button>
    </div>
  </div>
</template>
<script>

  import * as student from  '@/API/settings/account/student';
  import * as classtable from '@/API/settings/school/class';

  export default {
    name: 'student',
    data(){
      return {
        studentListData: {},
        name: null,
        phone:null,
        classId:null,
        ids: [],
        classList:[],
        loading: true
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
      this.listPage();
    },
    methods: {
      //页码改变
      handleCurrentChange(current) {
        this.listPage({current: current, size: this.studentListData.size});
      },
      //显示条数改变
      handleSizeChange(pageSize){
        this.listPage({size: pageSize});
      },
      //列表
      listPage(params){
        let vm = this;
        params = this.objExtend({
          current: 1,
          size: 20,
          name: this.name,
          phone:this.phone,
          classId:this.classId
        }, params);
        student.listPage.r(params).then(function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.studentListData = data.data;
            vm.loading = false;
          }
        });
      },
      //性别格式化
      formatSet(row, column){
        let state = row[column.property];
        if (state == 1) {
          return "男";
        } else {
          return "女";
        }
      },
      //删除
      deleteById(id){
        let vm = this;
        this.n_deleteFunc(student.deleteById, id, function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.listPage();
            vm.$message('删除成功');
          }
        });
      },
      //删除多个
      deleteByIds(){
        let vm = this;
        if(vm.ids.length==0){
          this.$message.error('请至少选择一项');
          return;
        }
        this.n_deleteFunc(student.deleteByIds, vm.ids, function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.listPage();
            vm.$message('删除成功');
          }
        });
      },
      //删除框选中事件
      handleSelection(selection){
        let vm = this;
        vm.ids = [];
        selection.forEach(data=> {
          vm.ids.push(data.id);
        })
      }

    }
  }
</script>
<style>

</style>
