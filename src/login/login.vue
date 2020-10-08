<template>
  <div class="login-container">
    <el-card class="box-card">
      <el-image
      style="width: 140px; height: 140px; border-radius:70px"
      :src='require("../assets/logo.png")'></el-image>
      <el-form ref="loginForm" :model="loginInfo" :rules="loginRules">
        <el-form-item prop="name">
          <el-input v-model="loginInfo.mobile"  placeholder="电话号码" ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginInfo.code"  placeholder="验证码"></el-input>
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
import user from '../api/userInfo.js'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.loginInfo.code !== '') {
          if (!/^[0-9]{6}$/.test(this.loginInfo.code)) {
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
        mobile: '13611111111',
        code: '246810'
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为11位', trigger: 'blur' }
        ],
        code: [
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
          // 发送请求
          this.$http({
            method: 'post',
            url: 'authorizations',
            data: {
              mobile: this.loginInfo.mobile,
              code: this.loginInfo.code
            }
          }).then(res => {
            // 保存用户信息到本地
            user.saveInfo(res.data.data)
          })
          // localStorage.setItem('key', this.loginInfo)
          this.$router.push('/')
          // this.$message({
          //   message: '登录成功啦',
          //   type: 'success'
          // })
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
