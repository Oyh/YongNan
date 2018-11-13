// pages/buyer/mine/mine.js
Page({
  data: {
		buyer: {
			name: 'OOOYH',
			lastPoints: 0,
			points: 999
		}
  },

  onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '我的'
		});
  }
})