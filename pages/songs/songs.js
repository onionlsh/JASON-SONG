// pages/songs/songs.js
//数据源于豆瓣，仅供测试使用，切勿商用
const SONG_URL = 'https://douban.fm/j/v2/query/song?q=%E5%BC%A0%E6%9D%B0&start=1&limit=50';

let appDatas = getApp();
let localData = require('../../datas/songs-list');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    songs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: SONG_URL,
      success: response => {
        this.setData({
          songs: response.data.items
        });
        //更新到全局app中
        appDatas.data.songs = response.data.items;
        //console.log(appDatas.data.songs);
        localData = null;
      },
      //原豆瓣URL不能通过WX的审核，需要从本地获取
      fail: response => {
        console.log('调用接口失败');
        this.setData({
          songs: localData.list
        });
        appDatas.data.songs = localData.list;
      }
    });
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