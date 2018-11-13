// pages/seller/main/main.js
Page({
  data: {
		seller: {
			name: 'XX汽配店',
			grade: '5.0',
			business: {
				monthlyOrder: 99,
				monthlyIncome: 9999.99
			}
		}
  },

  onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '首页'
		});
  }
})