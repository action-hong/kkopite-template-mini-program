import { I18n, getI18nInstance } from '@miniprogram-i18n/core'
import computedBehavior from 'miniprogram-computed'
const i18n = getI18nInstance()

/**
 * @type {WechatMiniprogram.App.Instance<IAppOption>}
 */
const app = getApp()

Component({
  behaviors: [I18n, computedBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached () {

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onShow () {
      wx.setNavigationBarTitle({
        title: i18n.t('setting.title')
      })
    },
    onLoad () {
    }
  },
  computed: {

  },
  watch: {
    
  }
})