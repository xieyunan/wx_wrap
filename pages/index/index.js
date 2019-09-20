//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navList:[
      {"text":"首页","id":0},
      {"text":"动画","id":1},
      {"text":"喜剧","id":2},
      {"text":"音乐","id":3},
      {"text":"科技","id":4},
      {"text":"体育","id":5},
      {"text":"军事","id":6},
      {"text":"生活","id":7},
    ],
    swipterList:[
      {"link":"","image":"//i0.hdslb.com/bfs/archive/bf3fd6a44f36f0ded1da85132f09ca858390babe.jpg@880w_440h.jpg"},
      {"link":"","image":"//i0.hdslb.com/bfs/archive/2932c0b4dd91785e84fac7817533be898d6aba69.jpg@880w_440h.webp"},
      {"link":"","image":"https://i0.hdslb.com/bfs/sycp/creative_img/201909/bfad9ff9495bc532d87c5165731bf85c.jpg@880w_440h.jpg"},
      {"link":"","image":"https://i0.hdslb.com/bfs/sycp/creative_img/201909/6e3f4cb39d6a665b7c7b2fb90640e42f.jpg"}
    ],
    videoList:[],
    currentIndex:0,
  },
  //导航点击事件
  activeNav(e){
    // console.log(e)
    this.setData({
      currentIndex:e.currentTarget.dataset.index
    })
  },
  //获取导航数据
  // getNavList(){
    // let that = this
  //   wx.request({
  //     url: 'https://URL',
  //     data: {},
  //     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //     // header: {}, // 设置请求的 header
  //     success: function(res){
  //       // success
          // if(res.data.code === 200){
          //   that.setDate({
          //     navList:res.data.data.navList
          //   })
          // }
  //     },
  //     fail: function() {
  //       // fail
  //     },
  //     complete: function() {
  //       // complete
  //     }
  //   })
  // },
  // onLoad:function(options){
  //   this.getNavList()
  // }
  
})
