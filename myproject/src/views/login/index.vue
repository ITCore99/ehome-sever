<template>
    <div class="login-wrap">
        <div class="wrap">
          <h3 class="title">党建E家后台管理系统</h3>
          <el-form ref="form" :model="form">
            <el-form-item label="用户名：">
              <el-input v-model="form.idCardNumber"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input v-model="form.pwd" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="btn" @click="handlerSubmit">登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data()
        {
          return{
            form:{
              idCardNumber:"123456",
              pwd:"123456",
            }
          }
        },
        methods:{
          handlerSubmit()
          {
            this.$axios.post("/login",this.form).then(res=>{
              if(res.code==200)
              {
                sessionStorage.setItem("token",res.token);
                this.$store.commit("INITUSERINFO",res.data);
                this.$message.success(res.msg);
                setTimeout(()=>{
                  this.$router.push("/layout/home");
                },500);
              }else
              {
                this.$message.error(res.msg);
              }
            })
          },
        },


    }
</script>

<style scoped lang="scss">
.login-wrap
{
  width: 100%;
  height: 100vh;
  background: #304156;
  overflow: hidden;

  .wrap
  {
    width: 400px;
    height: 350px;
    margin: 180px auto;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #fff;
    padding: 30px;

  }
  .title
  {
    color:#fff;
    font-weight: 400;
    text-align: center;
  }
  .btn
  {
    width: 100%;
    margin-top:22px;
  }
  /deep/ .el-form-item__label
  {
    color:#fff;
  }
}

</style>
