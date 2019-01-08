<template>
  <div class="username">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item class="item" prop="user_name">
        <el-input placeholder="用户名" type="text" v-model="ruleForm2.user_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="item" prop="password">
        <el-input placeholder="密码" type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="item" prop="captcha">
        <el-input v-model.number="ruleForm2.captcha"></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Username",
    data() {
      let validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'))
        } else {
          callback()
        }
      }
      let validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.password !== '') {
            this.$refs.ruleForm2.validateField('password');
          }
          callback();
        }
      };
      let validateCaptcha = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'))
        } else {
          if (value.length !== 4 || !value.test(/^[0-9]*$/)) {
            callback(new Error('验证码错误'))
          }
        }
      }
      return {
        ruleForm2: {
          loginFlag: 0,
          user_name: '',
          password: '',
          captcha: ''
        },
        rules2: {
          user_name: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ],
          captcha: [
            {validator: validateCaptcha, trigger: 'blur'}
          ]
        }
      }
    },
    created() {
      console.log(this.ruleForm2.captcha.length)
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
  .username {
    .el-form {
      .item {
        margin-left: -100px;
        .el-input{
          width: calc(100% - 60px);
          margin: 0 30px;
        }
      }
      .btns{
        margin-left: -100px;
        text-align: center;
      }
    }
  }
</style>