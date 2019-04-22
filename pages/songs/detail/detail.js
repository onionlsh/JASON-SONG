// pages/songs/detail/detail.js

let appDatas = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    song:{},
    isPlay:false
  },
  /**
   * 播放音乐
   */
  musicControl(){
    let isPlay = !this.data.isPlay;

    if(isPlay){
      wx.playBackgroundAudio({
        dataUrl: this.data.song.url,
        title: this.data.song.title,
        coverImgUrl: this.data.song.picture
      });
    }else{
      wx.pauseBackgroundAudio();
    }

    this.setData({
      isPlay: isPlay
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      song: appDatas.data.songs[options.id]
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