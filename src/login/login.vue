<template>
  <div class="login-container">
    <el-card class="box-card">
      <el-image
      style="width: 140px; height: 140px; border-radius:70px"
      :src='require("../assets/logo.png")'></el-image>
      <el-form ref="form" :model="loginInfo" :loginRules="loginRules">
        <el-form-item>
          <el-input v-model="loginInfo.name"  placeholder="用户名" ></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="loginInfo.password"  placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="text-align:center">
          <el-button type="primary" @click="submitInfo">登录</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginInfo: {
        name: '',
        password: ''
      },
      loginRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 75, message: '长度在 3 到 7 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.login-container {
  background-color: #2b4b6b;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .box-card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
   overflow: visible;
    .el-image{
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%,-50%);
      z-index: 99;
      background-color: #fff;
    }
    .el-form{
      margin: 80px 40px 0 40px;
    }
  }
}
</style>
