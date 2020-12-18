"use strict";
/*!
 * Page: pages/user/User
 * License: MIT
 * Created: 2020-10-13 19:52
 */
/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
const app = getApp()

Page({
  data: {
    listData:[
        {"code":"01","text":"text1","type":"type1"},
        {"code":"02","text":"text2","type":"type2"},
        {"code":"03","text":"text3","type":"type3"},
        {"code":"04","text":"text4","type":"type4"},
        {"code":"05","text":"text5","type":"type5"},
        {"code":"06","text":"text6","type":"type6"},
        {"code":"07","text":"text7","type":"type7"}
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})


//# sourceMappingURL=user.js.map
