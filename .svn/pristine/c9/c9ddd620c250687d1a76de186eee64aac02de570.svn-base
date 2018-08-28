<template>
  <div class="upload-box clearfix">
    <div class="addFiles">
      <input type="file" class="addFilesBtn" @change="addFiles($event)"/>

      <div class="files-cover-img" v-if="isSingle" v-for="i in fileUrlList">
        <img :src=" i "/>
        <div class="files-ctrl"></div>
      </div>

    </div>
    <div class="img-list" v-if="!isSingle">
      <div class="file-img-box" v-for="i in fileUrlList">
        <img :src=" i "/>
      </div>
    </div>
  </div>
</template>
<script>
  export default({
    props:{
      isSingle:{
        type:Boolean,
        default:true
      },
      type:{
        type:String,
        default:'image'
      }
    },
    data(){
      return {
        fileList:[],
        fileUrlList:[],
      }
    },
    methods:{
      addFiles(e){
        let target = e.target , file = target.files[0] , vm = this , reader = new FileReader() , key = 'jingjingSystem/'+file.type+'/'+new Date().getTime()

        if(file.type.indexOf(this.type) == -1){
          this.$message('请上传'+this.type+'格式的文件')
          return
        }

        this.fileList.push({
          files:file,
          name:file.name,
          size:file.size
        })

        this.uploadFiles(file,key)

      },
      removeFile(index){
        this.fileList.splice(index,1)
      },
      uploadFiles(file,key){
        let vm = this
        this.alyConfig.uploadToAliyun(file,key,function(url){
          console.log(url)
          vm.fileUrlList.push(url)
        })
      },
      getFileUrl(){
        if(this.fileUrlList.length > 1){
          return this.fileUrlList
        }else{
          return this.fileUrlList[0]
        }
      }
    },
    created(){

    }
  })
</script>
<style scoped>
  .addFiles{
    width:7rem;
    height:7rem;
    border:1px dashed #ccc;
    position:relative;
    float:left;
    border-radius:8px;
  }
  .addFiles:hover{
    border:1px dashed #409EFF;
  }
  .addFiles .files-cover-img{
    position:absolute;
    width:100%;
    height:100%;
    z-index:2;
    top:0;
    left:0;
  }
  .files-cover-img img{
    width:100%;
  }
  .files-cover-img .files-ctrl{
    position:absolute;
  }
  .file-img-box{
    width:3rem;
    height:3rem;
    float:left;
    margin:0 5px;
  }
  .file-img-box img{
    width:100%;
  }
  .addFiles:before , .addFiles:after{
    content: '';
    display:block;
    position:absolute;
    background:#D3D1D6;
  }
  .addFiles::before{
    width:2rem;
    height:0.2rem;
    top:50%;
    margin-top:-0.1rem;
    left:50%;
    margin-left:-1rem;
  }
  .addFiles::after{
    width:0.2rem;
    height:2rem;
    top:50%;
    margin-top:-1rem;
    left:50%;
    margin-left:-0.1rem;
  }
  .addFilesBtn{
    opacity:0;
    width:100%;
    height:100%;
    cursor: pointer;
  }
  .addFiles img{
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    z-index:103;
  }
  .img-list{
    margin-left: 3rem;
  }
</style>
