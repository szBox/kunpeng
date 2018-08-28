<template>
    <div class="select-tree">
        <el-popover placement="bottom" width="202" v-model="visible">
            <el-tree
                :data="treeData"
                show-checkbox
                node-key="id"
                :accordion="true"
                ref="tree"
                :props="defaultProps"
                @check="checkChange"
                :default-checked-keys="defaultChecks"
                highlight-current>
            </el-tree>
            <el-input slot="reference" readonly v-model="text" placeholder="请输入内容"></el-input>
        </el-popover>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                text: '',
                visible: false
            }
        },
        props: {
            value: String,
            defaultChecks: {
                type: Array,
                default () { return  [] }
            },
            treeData: {
                type: Array,
                default () { return [] }
            },
            defaultProps: {
                type: Object,
                default () { return {} }
            },
            defaultChecksName: {
                type: Array,
                default () { return  [] }
            }
        },
        methods: {
            checkChange() {
                let checkNodes = this.$refs.tree.getCheckedNodes(true);
                let names = [];
                for(let item of checkNodes) {
                    names.push(item.name);
                }
                let checkKeys = this.$refs.tree.getCheckedKeys(true);
                this.text = names.join(',');
                this.$emit('input', checkKeys);
            },
            init() {
                let textArr = [];
                for(let item of this.defaultChecks) {
                    let txt = this.$refs.tree.getNode(item).data.name;
                    textArr.push(txt);
                };
                this.text = textArr.join(',');
            }
        },
        watch: {
            defaultChecksName: {
                handler(newV) {
                    this.text = newV.join(',');
                },
                deep: true
            },
            defaultChecks: {
                handler(newV) {
                    this.$refs.tree.setCheckedKeys(newV);
                    this.$emit('input', newV);
                },
                deep: true
            }
        }
    }
</script>
<style lang="less" scoped>
    .select-tree{
        width: 220px;
        .el-input{
            width: 100%;
        }
        .el-popover{
            width: 100%;
        }
    }
</style>

