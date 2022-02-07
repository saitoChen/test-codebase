<template>
  <a-modal v-model="visible" title="修改密码" :footer="null" :width="430">
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" @submit="handleSubmit" :colon="true">
      <a-form-item label="ID" v-show="showFields">
        <a-input
          v-decorator="[
            'userId',
            {
              initialValue: userId
            }
          ]"
          placeholder="userId"
        />
      </a-form-item>
      <a-form-item label="新密码" has-feedback>
        <a-input-password
          v-decorator="[
            'newPsd',
            {
              rules: [
                { required: true, message: '请填写新密码' },
                {
                  validator: validateToNextPassword
                }
              ]
            }
          ]"
        />
      </a-form-item>
      <a-form-item label="确认密码" has-feedback>
        <a-input-password
          v-decorator="[
            'comfirmPsd',
            {
              rules: [
                { required: true, message: '请填写确认密码' },
                {
                  validator: compareToFirstPassword
                }
              ]
            }
          ]"
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          确认
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
import { mapGetters } from 'vuex'
// import { resetPwd } from "@/api/resetPwd";
export default {
  name: 'ResetPwd',
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'passwordUpdate' })
  },
  computed: {
    ...mapGetters('user', ['userInfo'])
  },
  data() {
    return {
      visible: false,
      confirmDirty: false,
      userId: '',
      // 隐藏的表单字段
      showFields: false
    }
  },
  props: {
    userType: {
      type: String,
      default: ''
    }
  },
  methods: {
    initDialog(userId) {
      this.form.resetFields()
      this.visible = true
      this.userId = userId
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('newPsd')) {
        callback('密码不一致，请重新输入')
      } else {
        callback()
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['comfirmPsd'], { force: true })
      }
      callback()
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    handleSubmit(e) {
      e.preventDefault()
      const that = this
      this.form.validateFields((err, values) => {
        let extra = { scope: '' }
        // TODO:
        switch (this.userType) {
          case 'system':
            extra.scope = 0
            break
          case 'enterprise':
            extra.scope = 1
            break
          case 'individuals':
            extra.scope = 2
            break
          default:
        }
        values = { ...values, ...extra }
        // 新密码与确认密码必须相同
        if (!err) {
          // resetPwd(values)
          //   .then(res => {
          //     if (res.errors && res.errors.length > 0) {
          //       this.$message.error(err.errors[0].message);
          //     } else {
          //       this.$message.success("修改密码成功");
          //       this.visible = false;
          //       if (
          //         this.userType === "system" &&
          //         values.userId === this.userInfo.id
          //       ) {
          //         that.$store
          //           .dispatch("user/Logout")
          //           .then(res => {
          //             window.location.reload();
          //             that.$notification.open({
          //               message: "登出提醒",
          //               description: "您已成功退出登录",
          //               onClick: () => {
          //                 console.log("退出登录!");
          //               }
          //             });
          //           })
          //           .catch(err => {
          //             if (err.message) {
          //               that.$message.error({
          //                 title: "错误",
          //                 description: err.message
          //               });
          //             }
          //           });
          //       }
          //     }
          //   })
          //   .catch(err => {
          //     console.log(err);
          //     if (err.errors && err.errors.length > 0) {
          //       this.$message.error(err.errors[0].message);
          //     }
          //   });
        }
      })
    }
  }
}
</script>
<style lang="less" scoped></style>
