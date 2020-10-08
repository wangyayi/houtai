<template>
  <div class="login-container">
    <el-card class="box-card">
      <el-image
      style="width: 140px; height: 140px; border-radius:70px"
      :src='require("../assets/logo.png")'></el-image>
      <el-form ref="loginForm" :model="loginInfo" :rules="loginRules">
        <el-form-item prop="name">
          <el-input v-model="loginInfo.name"  placeholder="用户名" ></el-input>
        </el-form-item>
        <el-form-item prop="password">
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.loginInfo.password !== '') {
          if (!/^[1-9a-z_-]{6}$/.test(this.loginInfo.password)) {
            // 如果验证不成功，显示错误信息
            callback(new Error('密码是六位数'))
          } else {
            callback()
          }
        }
      }
    }
    return {
      loginInfo: {
        name: '',
        password: ''
      },
      loginRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitInfo (formName) {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert('登录成功!')
          this.$router.push('/home')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
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
