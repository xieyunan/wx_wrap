// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:["浙江","苏州","上海"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    // let videoId = options.id;
    // this.getCurrentVideo(videoId)
  //加载框
    // wx.showLoading({
    //   title:"加载中"
    // })
    // setTimeout(function(){
    //   wx.hideLoading()
    // },2000)
  //系统参数
    wx.getSystemInfo({
      success: function(res) {
        // success
        console.log(res)
      }
    })
  },
  getCurrentVideo(videoIds){
    wx.request({
      url: 'https://URL?id='+videoIds,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
      },
      
    })
  },
  ts01:function(){
    wx.showToast({
      title:"提示01",
      icon:"loading",
      duration:3000
    })
  },
  ts02:function(){
    wx.showToast({
      title:"提示01",
      image:"../../assets/img/bilibili.png",
      duration:2000
    })
  },
  tsk01:function(){
    wx.showLoading({
      title:"加载中"
    })
  },
  yck01:function(){
    wx.hideLoading()
  },
  cd01:function(){
    wx.showActionSheet({
      itemList:["A","B","C","D","E"]
    })
  },
  cd02:function(){
    let tmp = this.data.city
    wx.showActionSheet({
      itemList:this.data.city,
      success(res){
        // console.log(res.tapIndex) //下标
        console.log(tmp[res.tapIndex]);
      },
      fail(res){
        console.log(res.errMsg)
      }
    })
  },
  tz01:function(e){
    wx.switchTab({
      url: 'url',
    
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})