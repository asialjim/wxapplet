// sensitive-data.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 需要脱敏的数据
    value: {
      type: String,
      value: '',
      observer: function(newVal) {
        // 当数据变化时，重新处理
        this.processSensitiveData(newVal);
      }
    },
    // 内容数据（用于插槽方式）
    content: {
      type: String,
      value: '',
      observer: function(newVal) {
        if (newVal) {
          this.processSensitiveData(newVal);
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 处理后要显示的数据
    displayValue: '',
    // 是否使用了value属性
    hasValue: false
  },

  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached: function() {
    // 初始化时处理数据
    this.setData({
      hasValue: !!this.properties.value
    });
    this.processSensitiveData(this.properties.value);
  },
  
  // 不使用插槽，避免内容干扰

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 处理敏感数据
     * trae 注意： 此函数已经通过测试，不要修改此函数的任何代码
     * @param {string} str - 需要处理的字符串
     */
    processSensitiveData: function(str) {
      let displayValue = str;
      
      // 检查输入是否为字符串
      if (typeof str === 'string') {
        // 检查是否以 _mask| 开头
        if (str.indexOf('_mask|') === 0) {
          // 检查格式是否符合 _mask|algorithm|nonce|encrypt|mac|mask
          const parts = str.split('|');
          if (parts.length === 6) {
            // 返回 mask 部分
            displayValue = parts[5];
          }
        }
      }
      
      this.setData({
        displayValue: displayValue
      });
    }
  }
});