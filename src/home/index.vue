<template>
  <div class="home-container">
    <!-- 主体部分 -->
    <el-container>
      <!-- 左侧部分 -->
      <el-aside width="200px">
        <el-menu
          default-active="2"
          background-color="#303133"
          text-color="#fff"
          active-text-color="rgb(255, 208, 75)"
        >
         <div >
             logo
         </div>
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
           <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
           <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
           <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!--左侧部分结束 -->
      <!-- 右侧部分 -->
      <el-container>
        <el-header>Header</el-header>
        <!-- 主体部分 -->
        <el-main>Main</el-main>
      </el-container>
      <!-- 右侧部分结束 -->
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.home-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #d3dce6;
    padding-left: 10px;
    height: 100%;
    .el-menu{
        height: 100%;
        color: #303133;
        div{
            color: #d3dce6;
            height: 60px;
            line-height: 60px;
            width: 100%;
            text-align: center;
        }
    }
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }
}
</style>
