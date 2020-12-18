//index.js
//获取应用实例

Page({
  data: {

  },
  //轮播图改变事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
})
