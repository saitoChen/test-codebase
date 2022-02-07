<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <a-button type="primary" @click="handleCreate('CREATE')">新建</a-button>
    <a-button type="" @click="handleUpdate('UPDATE')">修改</a-button>
    <!-- <a-button type="primary"  @click="handle('CREATE')">新建</a-button>
      <a-button type=""  @click="handle('UPDATE')">修改</a-button> -->
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <img src="~@/assets/logo.svg" class="logo" alt="logo" />
            <span class="title">返利系统</span>
          </a>
        </div>
        <div class="desc">
          天士力返利系统
        </div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import { deviceMixin } from '@/store/device-mixin'
import Update from '@/common/operation/update'
import Create from '@/common/operation/create'
import * as Cfg from '@/common/operation/config'

let fn = Cfg.getInstance()
export default {
  name: 'UserLayout',
  mixins: [deviceMixin],
  mounted() {
    document.body.classList.add('userLayout')
  },
  beforeDestroy() {
    document.body.classList.remove('userLayout')
  },
  data: function() {
    return {
      status: ''
    }
  },
  methods: {
    handle(status) {
      this.status = status
      this.instance = fn(this.status)
    },
    handleCreate(status) {
      this.handle(status)
      this.instance.save()
    },
    handleUpdate(status) {
      this.handle(status)
      this.instance.save()
    }
  }
}
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
  height: 100%;

  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
    background-size: 100%;
    padding: 110px 0 144px;
    position: relative;

    a {
      text-decoration: none;
    }

    .top {
      text-align: center;

      .header {
        height: 44px;
        line-height: 44px;

        .badge {
          position: absolute;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          margin-left: -12px;
          margin-top: -10px;
          opacity: 0.8;
        }

        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
          border-style: none;
        }

        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }

    .main {
      min-width: 260px;
      width: 368px;
      margin: 0 auto;
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
</style>
