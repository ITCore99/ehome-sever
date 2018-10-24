<template>
    <div class="wrap">
       <label class="label">
         <input type="file" class="input" @change="getFile"/>
         <span v-if="!value" class="icon">+</span>
         <img  v-else :src="value" class="img"/>
       </label>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "upLoadView",
        props:{
          value:{  /**使用v-model的话只能写value*/
            type:String
          }
        },
        data()
        {
          return{
            token:"",
            imgUrl:"",
          }
        },
        methods:
          {
            getFile(event)
            {
               let formData=new FormData();
               formData.append("file",event.target.files[0]);
               formData.append("token",this.token);
               axios.post("https://upload-z1.qiniup.com",formData,{headers:{"content-type":"multipart/form-data"}}).then(res=>{
                 if(res.status==200)
                 {
                   this.imgUrl=res.data.url;
                   this.$emit("input",this.imgUrl)
                 }
               })
            },
            getToken()
            {
              axios.get("http://upload.yaojunrong.com/getToken").then(res=>{
                if(res.data.code==200)
                {
                  this.token=res.data.data; /**保存token*/
                }
              }).catch(err=>{
                console.log(err);
              })
            },
        },
        created()
        {
          this.getToken();
        }
    }
</script>

<style scoped lang="scss">
.wrap
{
  .input
  {
    display: none;
  }
  .label
  {
    display: block;
    width: 80px;
    height: 80px;
    background: #f1f1f1;
    border:1px solid #888;
    position: relative;
  }
  .icon
  {
    position: absolute;
    color:#fff;
    font-size:50px;
    line-height: 2;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .img
  {
    width: 80px;
    height: 80px;
  }
}
</style>
