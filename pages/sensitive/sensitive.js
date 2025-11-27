// sensitive.js
Page({
  data: {
    pageTitle: '敏感数据测试',
    // 测试敏感数据
    testSensitiveData: {
      // 符合格式的数据
      valid: '_mask|algorithm|nonce|encrypt|mac|138****1234',
      // 不符合格式的数据
      invalid: '13812341234',
      // 非字符串数据
      notString: 123
    }
  },

  onLoad() {
    console.log('敏感数据测试页面加载');
  },

  onShow() {
    console.log('敏感数据测试页面显示');
  }
});