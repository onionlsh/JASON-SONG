// pages/detail/detail.js
//获取数据list，跳转的时候从这里拿数据
let datas = require('../../datas/list-data');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj: {},//详情对象
    index: 0, 
    isCollected: true,//收藏
  },

  /**
   * 收藏
   */
  collect(){
    //每一次操作都是取反的结果
    let isCollected = !this.data.isCollected;
    /**
     * 1.从缓存中获取数据
     * 2.把点击后的值传入缓存中
     */
    let obj = wx.getStorageSync('isCollected');
    obj[this.data.index] = isCollected;
    // 提示用户收藏的状态
    let title = isCollected ? '收藏成功' : '取消收藏';
    wx.showToast({
      title,
      icon: 'success'
    });
    //存储到缓存
    wx.setStorage({
      key: 'isCollected',
      data: obj,
    });
    this.setData({
      isCollected: isCollected
    });
  },
  /**
   * 分享按钮
   */
  handleShare(){
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到qq空间', '分享到微信好友'],
      itemColor: '#666',
      success(res) {
        console.log('分享成功',res);
      },
      fail(res) {
        console.log('分享失败')
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   * 详情页数据加载，应该从页面加载完成的时候进行数据渲染
   */
  onLoad: function (options) {
    //这个页面options={id:0}
    let id = options.id;
    this.setData({
      dataObj: datas.songList[id],
      index: id
    });
    //获取本地缓存
    let storageObj = wx.getStorageSync('isCollected');
    console.log(storageObj);
    //检查是否有存储过数据
    if(!storageObj){
      storageObj = {};
      wx.setStorage({
        key: 'isCollected',
        data: storageObj,
      });
    }else{
      let isCollected = storageObj[id]?true:false;
      this.setData({
        isCollected: isCollected
      });
    }
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