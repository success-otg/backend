<template>
  <div class="phone">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item class="item" prop="phone">
        <el-input placeholder="电话" type="text" v-model="ruleForm2.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="item" prop="password">
        <el-input placeholder="密码" type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
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
    name: "Phone",
    data() {
      let validatePhone = (rule, value, callback) => {
        if (value === ''){
          callback(new Error('请输入手机号码'))
        } else {
          if (!(/^1[34578]\d{9}$/.test(value))) {
            callback(new Error('手机号码不合法'))
          }else {
            callback()
          }
        }
      }
      let validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          /*if (this.ruleForm2.password !== '') {
            this.$refs.ruleForm2.validateField('password');
          }*/
          callback();
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
          loginFlag: 1,
          phone: '',
          password: '',
          captcha: ''
        },
        rules2: {
          phone: [
            {validator: validatePhone, trigger: 'blur'}
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
    },
    computed:{
      ...mapState(['isLogin', 'imageUrl'])
    },
    methods: {
      ...mapMutations(['isLoged']),
      ...mapActions(['forFreshCaptcha']),
      async submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const res = await login(this.ruleForm2)
            if (res.status === 1){
              this.isLoged()
              if (this.isLogin) {
                this.$router.push('/')
              }
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changeCaptcha(){
        this.forFreshCaptcha()
      }
    }
  }
</script>

<style lang="less">
  .phone {
    .el-form {
      .item {
        margin-left: -100px;
        .el-input{
          width: calc(100% - 60px);
          margin: 0 30px;
        }
      }
      .captcha{
        position: relative;
        .el-input{
          width: 45%;
        }
        img{
          position: absolute;
          right: 50px;
          width: 25%;
          height: 40px;
          vertical-align: middle;
        }
        .el-icon-refresh{
          position: absolute;
          font-size: 20px;
          right: 30px;
          top: 10px;
          vertical-align: middle;
        }
      }
      .btns{
        margin-left: -100px;
        text-align: center;
      }
    }
  }
</style>
