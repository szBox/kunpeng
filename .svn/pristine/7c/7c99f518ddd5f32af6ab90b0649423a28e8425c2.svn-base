<template>
    <div class="add-edit-form-box">
        <el-form>
            <el-form-item>
                <template>编号：<span>{{g.id}}</span></template>
            </el-form-item>
            <el-form-item>
                <template>年级名称：<span>{{g.name}}</span></template>
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
    import * as grade from  '@/API/settings/school/grade';
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
            grade.queryById.r(vm.id).then(function (res) {
                let data = res.data;
                if (data.code == 0) {
                    vm.g = data.data;
                }
            });
        },
        filters:{
            formatDate: function(time){
                let date = new Date(time);
                return formatDate(date,'yyyy-MM-dd hh:mm:ss');
            }
        }
    }
</script>
<style scoped>
    .el-form-item {
        margin-bottom: 0;
    }
</style>
