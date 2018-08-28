  <template>
  <div>
    <div class="ctrl_btn_box">
      <el-button v-has="10020101" type="primary" icon="el-icon-plus" @click="$routerGo('grade/add')">添加</el-button>
      <el-button v-has="10020103" icon="el-icon-close " type="danger" plain @click="deleteByIds()">删除</el-button>
    </div>
    <div class="table-box">
      <el-table
        :data="gradeListData.records"
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
          label="年级名称">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button v-has="10020104" type="primary" size="mini" @click="$routerGo('grade/detail/'+scope.row.id)">查看</el-button>
            <el-button v-has="10020102" type="primary" size="mini" @click="$routerGo({path:'grade/edit',query:{id:scope.row.id}})">修改</el-button>
            <el-button v-has="10020103" type="danger" size="mini" @click="deleteById(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-button size="mini" @click="handleCurrentChange(1)">首页</el-button>
      <!--<span class="demonstration">大于 7 页时的效果</span>-->
      <el-pagination
        background
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="gradeListData.current"
        :page-sizes="[20, 50, 100]"
        :page-size="gradeListData.size"
        layout="prev, pager, next"
        :total="gradeListData.total">
      </el-pagination>
      <el-button size="mini" @click="handleCurrentChange(gradeListData.pages)">尾页</el-button>
    </div>
  </div>
</template>
<script>

  import * as grade from  '@/API/settings/school/grade';

  export default {
    name: 'grade',
    data(){
      return {
        gradeListData: {},
        ids: [],
        loading: true
      }
    },
    created(){
      this.listPage();
    },
    methods: {
      handleCurrentChange(currentPage) {
        this.listPage({current: currentPage,size:this.gradeListData.size});
      },
      handleSizeChange(pageSize){
        this.listPage({size:pageSize});
      },
      listPage(params){
        let vm = this;
        params = this.objExtend({
          current: 1,
          size: 20
        }, params);
        grade.listPage.r(params).then(function (res) {
          let data = res.data;
          if (data.code == 0) {
            vm.gradeListData = data.data;
            vm.loading = false;
          }
        });
      },
      deleteById(id){
        let vm = this;
        this.n_deleteFunc(grade.deleteById, id, function (res) {
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
        this.n_deleteFunc(grade.deleteByIds, vm.ids, function (res) {
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
