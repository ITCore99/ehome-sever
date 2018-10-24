<template>
    <div class="layout-wrap">
      <el-row>
        <el-col :span="4" class="colwarp">
          <sliderNav></sliderNav>
        </el-col>
        <el-col :span="20" style="height:100vh;overflow: scroll">
          <headerNav></headerNav>
          <div class="content">
            <router-view/>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    import headerNav from "@/components/headerNav";
    import sliderNav from "@/components/sliderNav";
    export default {
        name: "index",
        components:{
          "headerNav":headerNav,
          "sliderNav":sliderNav,
        }
    }
</script>

<style scoped>
.content
{
  padding: 20px;
  box-sizing: border-box;
  background: #f1f1f1;
  min-height: calc(100vh - 51px);
}
.colwarp
{
  height:100%;
}
</style>
