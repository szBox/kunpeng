<template>
  <div>
    <div>
      <div class="ctrl_btn_box">
        <el-button v-has="10020201" type="primary" icon="el-icon-plus" @click="$routerGo('class/add')">添加</el-button>
        <el-button v-has="10020203" icon="el-icon-close " type="danger" plain @click="deleteByIds()">删除</el-button>
      </div>
      <div class="ctrl_form_box">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="年级" prop="gradeId">
            <el-select v-model="gradeId" clearable placeholder="请选择">
              <el-option
                v-for="item in grades"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="班级名称">
            <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio v-model="state" label="1">在用</el-radio>
            <el-radio v-model="state" label="2">失效</el-radio>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" @click="listPage()">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="table-box">
      <el-table
        :data="classListData.records"
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
          prop="gradeName"
          label="年级名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="班级名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="teacherName"
          label="班主任"
          width="180">
        </el-table-column>
        <el-table-column
          prop="insertTime"
          label="创建时间"
          :formatter="formatDate">
        </el-table-column>
        <el-table-column
          prop="schoolName"
          label="学校">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          :formatter="formatState"
          width="100">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button v-has="10020204" type="primary" size="mini" @click="$routerGo('class/detail/'+scope.row.id)">查看</el-button>
            <el-button v-has="10020202" type="primary" size="mini" @click="$routerGo({path:'class/edit',query:{id:scope.row.id}})">修改
            </el-button>
            <el-button v-has="10020203" type="danger" size="mini" @click="deleteById(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block" v-if="classListData.total">
      <el-button size="mini" @click="handleCurrentChange(1)">首页</el-button>
      <!--<span class="demonstration">大于 7 页时的效果</span>-->
      <el-pagination
        background
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="classListData.current"
        :page-sizes="[20, 50, 100]"
        :page-size="classListData.size"
        layout="prev, pager, next"
        :total="classListData.total">
      </el-pagination>
      <el-button size="mini" @click="handleCurrentChange(classListData.pages)">尾页</el-button>
    </div>
  </div>
</template>
<script>

  import * as classtable from  '@/API/settings/school/class';
  import * as grade from '@/API/settings/school/grade';
  import {formatDate} from '@/assets/js/filters';

  export default {
    name: 'class',
    data(){
      return {
        classListData: {},
        name: '',
        state: '1',
        ids: [],
        grades:[],
        gradeId:null,
        loading: true
      }
    },
    created(){
      let vm =this;
      //初始化年级下拉列表
      grade.gradeOptions.r().then(function (res) {
        let data = res.data;
        if (data.code == 0) {
          vm.grades = data.data;
        }
      });
      this.listPage();
    },
    methods: {
      //页码改变
      handleCurrentChange(current) {
        this.listPage({current:current,size:this.classListData.size});
      },
      //显示条数改变
      handleSizeChange(pageSize){
        this.listPage({size:pageSize});
      },
      //列表
      listPage(params){
        let vm = this;
        params = this.objExtend({
          current: 1,
          size: 20,
          name:this.name,
          state: this.state,
          gradeId:this.gradeId
        },params);
        classtable.listPage.r(params).then(function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.classListData = data.data;
            vm.loading = false;
          }
        });
      },
      //日期格式化
      formatDate(row, column){
        let date = new Date(row[column.property]);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      },
      //状态格式化
      formatState(row, column){
        let state = row[column.property];
        if (state == 1) {
          return "在用";
        } else {
          return "禁用";
        }
      },
      //删除
      deleteById(id){
        let vm = this;
        this.n_deleteFunc(classtable.deleteById, id, function (res) {
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
        this.n_deleteFunc(classtable.deleteByIds, vm.ids, function (res) {
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
