<template>
    <div class="upload">
        <el-upload
            class="upload-demo"
            action=""
            :http-request="upload"
            :file-list="fileList"
            :limit="limit"
            :on-success="success"
            :on-exceed="exceed"
            :on-remove="remove"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
    import Bus from './event.js';
    export default {
        data() {
            return {
                files: []
            };
        },
        props: {
            value: [String, Number],
            fileList: {
                type: Array,
                default () { return [] }
            },
            limit: Number
        },
        methods: {
            upload(item) {
                let vm = this;
                let base = this.global.session.get('user');
                let key = base.sid + '/' + item.file.type + '/0/' + base.id + '/' + this.global.getNowDate() + '/' + new Date().getTime();
				console.log(key)
                this.global.alyConfig.uploadToAliyun(item.file, key, function (p) {

                }).then(function (res) {
                    if(res.res.statusCode === 200) {
                        item.onSuccess();
                        vm.pass(res.res.requestUrls[0]);
                    }
                }).catch(function (e) {
                    item.onError('上传失败')
                    this.$message('上传失败')
                })
            },
            success(response, file, fileList) {
                // console.log(file, response, fileList)
            },
            exceed() {
                this.$message.error(`文件数不能超过${this.limit}个`);
            },
            remove(file, fileList) {
                this.$emit('input', fileList[0] && fileList[0].url || '');
            },
            pass(url){
                this.$emit('input', url);
            }
        },
        updated() {
            this.$emit('input', this.fileList[0].url || '');
        }
    }
</script>
<style lang="less" scoped>

</style>

