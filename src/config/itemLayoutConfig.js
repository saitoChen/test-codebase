export const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

// Item间距
export const rowGutter = {
  xs: 16, // 480px
  sm: 0, // 576px    竖屏
  md: 16, // 768px    横屏
  lg: 16 // 992px
}

// 每个Item占外部空间的配置
export const queryColItemLayout = {
  xs: { span: 24, offset: 0, pull: 0, push: 0 }, // 480px
  sm: { span: 16, offset: 0, pull: 0, push: 0 }, // 576px 竖屏
  md: { span: 8, offset: 0, pull: 0, push: 0 }, // 768px 横屏
  lg: { span: 8, offset: 0, pull: 0, push: 0 } // 992px
}

// 每个Item内部空间分配的配置
export const queryFormItemLayout = {
  labelCol: {
    xs: { span: 24, offset: 0, pull: 0, push: 0 }, // 480px
    sm: { span: 10, offset: 0, pull: 0, push: 0 }, // 576px    竖屏
    md: { span: 8, offset: 0, pull: 1, push: 0 }, // 768px    横屏
    lg: { span: 8, offset: 0, pull: 1, push: 0 } // 992px
  },
  wrapperCol: {
    xs: { span: 24, offset: 0, pull: 0, push: 0 }, // 480px
    sm: { span: 14, offset: 0, pull: 0, push: 0 }, // 576px 竖屏
    md: { span: 16, offset: 0, pull: 1, push: 0 }, // 768px 横屏
    lg: { span: 16, offset: 0, pull: 1, push: 0 } // 992px
  }
}

// 按钮组配置
export const buttonColItemLayout = {
  xs: { span: 24, offset: 0, pull: 0, push: 0 }, // 480px
  sm: { span: 4, offset: 0, pull: 0, push: 0 }, // 576px  竖屏
  md: { span: 4, offset: 0, pull: 0, push: 0 }, // 768px  横屏
  lg: { span: 4, offset: 0, pull: 0, push: 0 } // 992px
}

// 0-未签约，1-已签约，2-已作废，3-已删除
// export const statusSelectMap = [
//   {
//     key: "0",
//     value: "未签字"
//   },
//   {
//     key: "1",
//     value: "已签字"
//   },
//   {
//     key: "2",
//     value: "已作废"
//   }
// ];
