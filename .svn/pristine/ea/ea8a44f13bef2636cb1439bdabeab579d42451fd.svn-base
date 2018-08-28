<template>
  <upload v-model="res"></upload>
</template>
<script>
  import upload from '@/components/upload/e-upload'
  export default({
    props:['value'],
    data(){
      return {
        accept:'',
        res:this.value
      }
    },
    components:{
      upload
    },
    watch:{
      'res'(val){
        this.$emit('input',val)
      }
    }
  })
</script>
<style>

</style>
