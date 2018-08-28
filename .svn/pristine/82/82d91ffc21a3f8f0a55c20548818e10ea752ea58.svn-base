<template>
  <div>
    <div class="ctrl_btn_box">
      <el-button v-has="10020301" type="primary" icon="el-icon-plus" @click="$routerGo('department/add')">添加</el-button>
      <el-button v-has="10020302" icon="el-icon-close " type="danger" plain @click="deleteByIds()">删除</el-button>
    </div>
    <div class="ctrl_form_box">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="部门名称">
          <el-input placeholder="输入名称" v-model="name" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button v-has="10020304" type="warning" @click="listPage()">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-box">
      <el-table
        :data="departmentListData.records"
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
          label="部门名称">
        </el-table-column>
        <el-table-column
          prop="schoolName"
          label="学校">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button v-has="10020304" type="primary" size="mini" @click="$routerGo('department/detail/'+scope.row.id)">查看</el-button>
            <el-button v-has="10020303" type="primary" size="mini" @click="$routerGo({path:'department/edit',query:{id:scope.row.id}})">修改</el-button>
            <el-button v-has="10020302" type="danger" size="mini" @click="deleteById(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block" v-if="departmentListData.total">
      <el-button size="mini" @click="handleCurrentChange(1)">首页</el-button>
      <!--<span class="demonstration">大于 7 页时的效果</span>-->
      <el-pagination
        background
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="departmentListData.current"
        :page-sizes="[20, 50, 100]"
        :page-size="departmentListData.size"
        layout="prev, pager, next"
        :total="departmentListData.total">
      </el-pagination>
      <el-button size="mini" @click="handleCurrentChange(departmentListData.pages)">尾页</el-button>
    </div>
  </div>
</template>
<script>

  import * as department from  '@/API/settings/school/department';

  export default {
    name: 'department',
    data(){
      return {
        departmentListData: {},
        ids: [],
        name:null,
        loading: true
      }
    },
    created(){
      this.listPage();
    },
    methods: {
      //列表
      listPage(params){
        let vm = this;
        params = this.objExtend({
          current: 1,
          size: 20,
          name:this.name
        },params);
        department.listPage.r(params).then(function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.departmentListData = data.data;
            vm.loading = false;
          }
        });
      },
      handleCurrentChange(currentPage) {
        this.listPage({current:currentPage,size:this.departmentListData.size});
      },
      handleSizeChange(pageSize){
        this.listPage({size:pageSize});
      },
      deleteById(id){
        let vm = this;
        this.n_deleteFunc(department.deleteById, id, function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.listPage();
            vm.$message('删除成功');
          }
        });
      },
      deleteByIds(){
        let vm = this;
        if(vm.ids.length==0){
          this.$message.error('请至少选择一项');
          return;
        }
        this.n_deleteFunc(department.deleteByIds, vm.ids, function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.listPage();
            vm.$message('删除成功');
          }
        });
      },
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
