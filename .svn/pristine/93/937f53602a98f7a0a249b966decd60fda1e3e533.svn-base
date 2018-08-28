<template>
  <div>

    <el-upload
      v-if="isImgUploader"
      action=""
      list-type="picture-card"
      :accept="accept"
      :limit="limit"
      :file-list="initFileList"
      :http-request="upload"
      :on-remove="removeFile"
      :on-success="uploadSuccess"
      :on-exceed="uploadeExceed"
      :before-upload="beforeUpload"
      :auto-upload="true">
      <i class="el-icon-plus"></i>
    </el-upload>


    <el-upload
      v-else
      class="avatar-uploader"
      ref="upload"
      drag
      action=""
      :accept="accept"
      :limit="limit"
      :show-file-list="true"
      :file-list="initFileList"
      :http-request="upload"
      :on-remove="removeFile"
      :on-success="uploadSuccess"
      :on-exceed="uploadeExceed"
      :before-upload="beforeUpload"
      :auto-upload="true">
      <i class="el-icon-upload"></i>

      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>


    </el-upload>


  </div>

</template>
<script>
  /**
   常用文件格式验证
   图片: image/*  ,  image/jpg
   .xls,doc:  application/vnd.ms-excel , application/msword
   .xlsx   application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
   .xltx   application/vnd.openxmlformats-officedocument.spreadsheetml.template
   .potx   application/vnd.openxmlformats-officedocument.presentationml.template
   .ppsx   application/vnd.openxmlformats-officedocument.presentationml.slideshow
   .pptx   application/vnd.openxmlformats-officedocument.presentationml.presentation
   .sldx   application/vnd.openxmlformats-officedocument.presentationml.slide
   .docx   application/vnd.openxmlformats-officedocument.wordprocessingml.document
   .dotx   application/vnd.openxmlformats-officedocument.wordprocessingml.template
   .xlsm   application/vnd.ms-excel.addin.macroEnabled.12
   .xlsb   application/vnd.ms-excel.sheet.binary.macroEnabled.12
   .pdf    application/pdf
   .zip    aplication/zip
   .rar    application/x-rar-compressed
   video   video/*
   */

  export default({
    props: {
      accept: {
        type: String,
        default: 'image/*'
      },
      value: {
        type: [Array, String],
        default: function () {
          return []
        }
      },
      limit: {
        type: [Number],
        default: 1
      }
    },
    data(){
      return {
        fileList: [],
        imageUrl: '',
        first:true,
        imgList: [],
        initFileList: [],
        showFileList:false
      }
    },
    created(){

    },
    methods: {
      beforeUpload(file){
        let type = this.accept , fileType = file.type , vm = this

        console.log(fileType)

        if(type == 'image/*'){
          if(fileType.indexOf('image') == -1){
            vm.$message.error('文件格式错误');
            return false
          }
        }else if(type == 'video/*'){
          if(fileType.indexOf('video') == -1){
            vm.$message.error('文件格式错误');
            return false
          }
        }else if(type == 'audio/mpeg' || type == 'audio/mp3'){
          if(fileType.indexOf('audio') == -1){
            vm.$message.error('文件格式错误');
            return false
          }
        }else{
          if(type.indexOf(fileType) == -1){
            vm.$message.error('文件格式错误');
            return false
          }
        }
        return true
      },

      setInitFileList(){
        let arr = [], vm = this

        if (this.value.length <= 0)return

        if (typeof(this.value) == 'string') {
          arr.push({
            status: 'success',
            percentage: 100,
            response: this.value,
            url:this.value,
            name: ''
          })
        } else {
          this.value.forEach(function (i) {
            arr.push({
              status: 'success',
              percentage: 100,
              response: i,
              url:i,
              name: i.name
            })
          })
        }

        this.first = false

        this.fileList = this.initFileList = arr

      },
      upload(item){
        let vm = this, base = this.s.getJ('baseInfo'),
          key = base.sid + '/' + item.file.type + '/0/' + base.id + '/' + this.getNowDate() + '/' + new Date().getTime()

        this.alyConfig.uploadToAliyun(item.file, key, function (p) {

          vm.uploadProgress(p, item)

        }).then(function (res) {

          if(res.res.requestUrls[0].indexOf('?uploadId')){
            item.onSuccess(res.res.requestUrls[0].split('?uploadId')[0])
          }else{
            item.onSuccess(res.res.requestUrls[0])
          }


        }).catch(function (e) {
          item.onError('上传失败')
          vm.$message('上传失败')
        })
      },

      uploadProgress(p, item){
        let progress = {
          percent: p * 100
        }

        item.onProgress(progress)
      },

      removeFile(item, flist){
        this.fileList = []
        this.fileList = flist

        if (this.limit == 1) {
          flist.length > 0 ? this.$emit('input', flist[0].response) : this.$emit('input', '')
        } else {
          this.$emit('input', this.setEletoArr(flist, 'response'))
        }

      },

      uploadSuccess(r, f, flist){

        if(this.first){
          this.first = false
        }

        this.fileList = []

        this.fileList = flist

        if (this.limit == 1) {
          this.$emit('input', flist[0].response)
        } else {
          this.$emit('input', this.setEletoArr(flist, 'response'))
        }
      },

      uploadeExceed(){
        this.$message('超出文件选择数量')
      }
    },
    computed: {
      isImgUploader(){
        if(this.accept.indexOf('image') > -1){
          return true
        }else{
          return false
        }
      }
    },
    watch: {
      'value'(){
        if(this.first){
          this.setInitFileList()
        }
      }
    }
  })
</script>
<style scoped>
  .icon-list {
    width: 100%;
  }

  .icon-list .item {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    overflow: hidden;
    margin-right: 10px;
  }

  .icon-list .item img {
    width: 100%;
    min-height: 100%;
  }

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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
