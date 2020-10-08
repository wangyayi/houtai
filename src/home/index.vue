<template>
  <div class="home-container">
    <!-- 主体部分 -->
    <el-container>
      <!-- 左侧部分 -->
      <el-aside width="200px">
        <el-menu
         router
          :default-active="$route.path"
          background-color="#303133"
          text-color="#fff"
          active-text-color="rgb(255, 208, 75)"
        >
          <div>logo</div>
          <el-menu-item index="/">
            <i class="el-icon-house"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/content">
            <i class="el-icon-menu"></i>
            <span slot="title">内容管理</span>
          </el-menu-item>
          <el-menu-item index="/pictures">
            <i class="el-icon-picture"></i>
            <span slot="title">素材管理</span>
          </el-menu-item>
          <el-menu-item index="/article">
            <i class="el-icon-setting"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="/comment">
            <i class="el-icon-document"></i>
            <span slot="title">评论管理</span>
          </el-menu-item>
          <el-menu-item index="/fans">
            <i class="el-icon-magic-stick"></i>
            <span slot="title">粉丝管理</span>
          </el-menu-item>
          <el-menu-item index="/setting">
            <i class="el-icon-document"></i>
            <span slot="title">个人设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!--左侧部分结束 -->
      <!-- 右侧部分 -->
      <el-container>
        <el-header>
          <!-- 左边的图标 -->
          <span>后台管理系统</span>
          <!-- 右边用户登录信息 -->
          <el-menu>
          <el-submenu index="1">
            <template slot="title">
                <span>我是图片</span>
                {{userName}}
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
          </el-menu>
        </el-header>
        <!-- 主体部分 -->
        <el-main>
           <router-view></router-view>
        </el-main>
      </el-container>
      <!-- 右侧部分结束 -->
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '小白'
    }
  }
}
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
    background-color: #fff;
    color: #333;
    text-align: center;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    height: 100%;
    .el-menu {
      padding-left: 10px;
      height: 100%;
      color: #303133;
      div {
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
