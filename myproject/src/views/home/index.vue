<template>
  <div class="home-wape">
     <div class="home">
       我是首页
     </div>
  </div>
</template>

<script>
    export default {
        name: "index",
        created()
        {
          this.$store.state.title="0"
        }
    }
</script>

<style scoped lang="scss">
.home-wape
{

  .home
  {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size:30px;
    color:#888;
  }
}
</style>
