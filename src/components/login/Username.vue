<template>
  <div class="username">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item class="item" prop="user_name">
        <el-input placeholder="用户名" type="text" v-model="ruleForm2.user_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="item" prop="password">
        <el-input placeholder="密码" type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
        <span class="levels"><span :style="{color: colors.cl1}">弱  </span><span
          :style="{color: colors.cl2}">中  </span><span :style="{color: colors.cl3}">强</span></span>
      </el-form-item>
      <el-form-item class="item captcha" prop="captcha">
        <el-input placeholder="验证码" v-model.number="ruleForm2.captcha"></el-input>
        <span>
        <img :src="imageUrl" alt="img"/>
        <i class="el-icon-refresh" @click="changeCaptcha"></i>
          </span>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {login} from "../../api"
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    name: "Username",
    data() {
      let validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length < 6 || value.length > 16) {
            callback(new Error('请输入6-12位密码'))
          }
          if (/^[0-9]{6,16}$|^[a-zA-Z]{6,16}$/.test(value)) {
            this.colors.cl1 = 'red'
          } else if (/^[A-Za-z0-9]{6,16}$/.test(value)) {
            this.colors.cl2 = 'yellow'
          } else if (/^\w{6,16}$/.test(value)) {
            this.colors.cl3 = 'green'
          }
          callback()
        }
      };
      let validateCaptcha = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'))
        } else {
          callback()
        }
      }
      return {
        ruleForm2: {
          loginFlag: 0,
          user_name: '',
          password: '',
          captcha: ''
        },
        colors: {
          cl1: '',
          cl2: '',
          cl3: ''
        },
        rules2: {
          user_name: [
            {required: true, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, minLength: 6, maxLength: 16, trigger: 'blur'}
          ],
          captcha: [
            {validator: validateCaptcha, trigger: 'blur'}
          ]
        }
      }
    },
    created() {
      this.forFreshCaptcha()
    },
    mounted() {
    },
    computed: {
      ...mapState(['imageUrl'])
    },
    methods: {
      ...mapMutations([]),
      ...mapActions(['forFreshCaptcha']),
      async submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const res = await login(this.ruleForm2)
            console.log(res)
            if (res.status === 1) {
              this.$message({
                type: 'success',
                message: res.message
              })
              this.$router.push('/manage')
            }else {
              this.$message({
                type: 'error',
                message: res.message
              })
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.colors.cl3 = ''
        this.colors.cl2 = ''
        this.colors.cl1 = ''
        this.$refs[formName].resetFields();
      },
      changeCaptcha() {
        this.forFreshCaptcha()
      }
    }
  }
</script>

<style lang="less">
  .username {
    .el-form {
      .item {
        margin-left: -100px;

        .el-form-item__error {
          margin-left: 30px;
        }

        .el-input {
          width: calc(100% - 60px);
          margin: 0 30px;
        }

        .levels {
          display: block;
          width: 100%;
          font-size: 12px;
          color: darkgray;
          margin: -10px 0 -30px;
          text-align: center;
        }
      }

      .captcha {
        position: relative;

        .el-input {
          width: 45%;
        }

        img {
          position: absolute;
          right: 50px;
          width: 25%;
          height: 40px;
          vertical-align: middle;
        }

        .el-icon-refresh {
          position: absolute;
          font-size: 20px;
          right: 30px;
          top: 10px;
          vertical-align: middle;
        }
      }

      .btns {
        margin-left: -100px;
        text-align: center;
      }
    }
  }
</style>