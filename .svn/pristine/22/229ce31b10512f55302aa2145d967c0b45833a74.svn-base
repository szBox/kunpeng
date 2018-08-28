<template>
    <div class="function">
        <div class="button-box">
            <el-button v-has="10010301" type="primary" icon="el-icon-plus" @click="$router.push('function/add')">添加</el-button>
        </div>
        <!-- <DataTable :loading="loading" :columns="columns" :data="data" :total="total" :page-size="search.size" @page-change="pageChange" @selection-change="selectionChange"></DataTable> -->
        <DataTable :loading="loading" :columns="columns" :data="data"></DataTable>
    </div>
</template>
<script>
    import DataTable from '@components/data-table/index';
    import funcApi from '@src/network/setting/right/function.js';
    export default {
        data() {
            return {
                search: {
                    currnet: 1,
                    size: 10
                },
                columns: [
                    {
                        label: '编号',
                        prop: 'id'
                    },
                    {
                        label: '菜单名',
                        prop: 'name'
                    },
                    {
                        label: '菜单类型',
                        prop: 'type',
                        formatter: (row => {
                            if(row.type == 1) {
                                return 'Folder';
                            }else if(row.type == 2) {
                                return 'Document';
                            }else{
                                return 'Function';
                            }
                        })
                    },
                    {
                        label: 'URL',
                        prop: 'url'
                    },
                    {
                        type: 'action',
                        width: '320',
                        label: '操作',
                        renderContent: (h, { row }) => {
                            return [
                                <el-button type='primary' size='mini' on-click={() => this.$routerGo({path:'nfc/edit/'+row.nfcno})}>添加子菜单</el-button>,
                                <el-button type='primary' size='mini' on-click={() => this.deleteConfirm(this.deleteOne, row.nfcno)}>更新</el-button>,
                                <el-button type='danger' size='mini' on-click={() => this.deleteConfirm(this.deleteOne, row.nfcno)}>删除</el-button>
                            ];
                        }
                    }
                ],
                data: [],
                total: 0,
                loading: true
            }
        },
        methods: {
            getList() {
                this.loading = true;
                funcApi.list().then(res => {
                    if(res.data.code === 0) {
                        this.loading = false;
                        this.data = res.data.data;
                        this.total = this.data.length;
                    }
                })
            }
        },
        mounted() {
            this.getList();
        },
        components: {
            DataTable
        }
    }
</script>
<style lang="less" scoped>
    .function{
        .button-box{
            margin-bottom: 20px;
        }
    }   
</style>

