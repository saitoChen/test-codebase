<template>
  <div class="main">
    <a-form-model ref="loginForm" :model="loginForm" :rules="rules">
      <a-form-model-item ref="usernameItem" prop="username">
        <a-input v-model="loginForm.username" placeholder="请输入用户名" />
      </a-form-model-item>
      <a-form-model-item ref="passwordItem" prop="password">
        <a-input v-model="loginForm.password" placeholder="请输入密码" />
      </a-form-model-item>
      <a-form-model-item style="margin-top:24px">
        <a-button
          type="primary"
          class="login-button"
          @click="submit"
          :loading="state.loginBtn"
          :disabled="state.loginBtn"
          >确定</a-button
        >
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import md5 from 'md5'
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'
import { getSmsCaptcha } from '@/api/login'
import { rstr2b64 } from '@/utils/md5'

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入用密码', trigger: 'blur' }]
      },
      isLoginError: false,
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  methods: {
    submit() {
      this.state.loginBtn = true
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const params = this.generateParams()
          this.$store
            .dispatch('user/Login', params)
            .then(res => {
              this.loginSuccess(res)
            })
            .catch(err => this.requestFailed(err))
            .finally(() => {
              this.state.loginBtn = false
            })
        }
        this.state.loginBtn = false
      })
    },
    generateParams() {
      return {
        userName: this.loginForm.username,
        password: rstr2b64(this.loginForm.password),
        code: this.loginForm.code,
        loginType: 0,
        uniqueid: 'image389c9902-5013-4b7a-b95a-417b39560f70',
        loginSource: String(new Date().getTime() + parseInt(Math.random() * 10000)).slice(3),
        checkCodeUniqueId: 'image389c9902-5013-4b7a-b95a-417b39560f70',
        instanceId: 1,
        tenantId: 1
      }
    },
    loginSuccess(res) {
      this.$router.push({ path: '/' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      }, 1000)
      this.isLoginError = false
    },
    requestFailed(err) {
      this.isLoginError = true
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
}
</script>

<style lang="less" scoped>
label {
  font-size: 14px;
}

.forge-password {
  font-size: 14px;
}

.login-button {
  padding: 0 15px;
  font-size: 16px;
  height: 40px;
  width: 100%;
}

.user-login-other {
  text-align: left;
  margin-top: 24px;
  line-height: 22px;

  .item-icon {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.2);
    margin-left: 16px;
    vertical-align: middle;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .register {
    float: right;
  }
}
</style>
