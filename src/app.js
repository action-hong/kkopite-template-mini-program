import { promisifyAll } from 'miniprogram-api-promise'
import { initI18n } from '@miniprogram-i18n/core'
import locales from './i18n/locales'

// promise 化
const wxp = {}
promisifyAll(wx, wxp)
wx = wxp

initI18n(locales)

// app.js
App({
  onLaunch: function () {
    this.globalData.systemInfo = wx.getSystemInfoSync()
    const width = this.globalData.systemInfo.windowWidth
    const ratio = 750 / width
    // 计算状态栏加上导航栏的高度, 单位为rpx
    this.globalData.ratio = ratio
    this.globalData.statusAndNavigatorHeight = (this.globalData.systemInfo.statusBarHeight + 64) * ratio
    // 获取unionId
    // wx.login()
    //   .then(res => {
    //     wx.request({
    //       url: 'http://52.81.254.107:9080/anon/openid/get_openid.bida',
    //       data: {
    //         jsCode: res.code,
    //         id: weAppKeyID
    //       }
    //     }).then(res => {
    //       console.log('genOpenId', res)
    //       const data = JSON.parse(res.data.data)
    //       // eslint-disable-next-line camelcase
    //       const { session_key } = data
    //       wx.getSetting()
    //         .then(res => {
    //           console.log('getSetting', res)
    //           if (res.authSetting['scope.userInfo']) {
    //             wx.getUserInfo()
    //               .then(res => {
    //                 console.log('getUserInfo', res)
    //                 const { encryptedData, iv } = res
    //                 wx.request({
    //                   url: 'http://52.81.254.107:9080/anon/openid/decodeDatas.bida',
    //                   data: {
    //                     encryptedData,
    //                     iv,
    //                     sessionKey: session_key
    //                   }
    //                 }).then(res => {
    //                   console.log('解密数据', JSON.parse(res.data.data))
    //                 })
    //               })
    //           }
    //         })
    //     })
    //   })
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     wx.request({
    //       url: 'http://52.81.254.107:9080/anon/openid/get_openid.bida',
    //       data: {
    //         jsCode: res.code,
    //         id: weAppKeyID
    //       },
    //       success: res => {
    //         console.log('getOpenId', res)
    //       },
    //       fail: err => {
    //         console.error(err)
    //       }
    //     })
    //     console.log(res.code)
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           console.log('返回的用户信息', res)
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
  },
  onHide () {
    // wx.closeBluetoothAdapter()
  }
})
