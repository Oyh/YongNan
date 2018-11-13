// pages/buyer/order/finish.js
Page({
  data: {
		iconSize: 200,
		orderID: "2018000011112222"
  },

  onReady: function () {
		this.setData({
			iconSize: wx.getSystemInfoSync().windowWidth * 0.5
		});
  }
})