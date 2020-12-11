// index.js
import { I18n } from '@miniprogram-i18n/core'
import computedBehavior from 'miniprogram-computed'
// 获取应用实例
/**
 * @type {WechatMiniprogram.App.Instance<IAppOption>}
 */
const app = getApp()

Component({
  behaviors: [I18n, computedBehavior],
  data: {
    name: 'kkopite',
    show: false,
    currentDate: new Date().getTime()
  },
  methods: {
    onDateConfirm: function (date) {
      console.log('选中的日期', date)
      this.setData({
        currentDate: date.detail,
        show: false
      })
    },
    toggleDatePicker: function () {
      this.setData({
        show: !this.data.show
      })
    }
  },
  computed: {
    showDate (data) {
      return new Date(data.currentDate).toString()
    }
  }
})
