// pages/buyer/order/management.js
Page({
  data: {
		orderList: []
  },

	onLoad: function() {
		wx.setNavigationBarTitle({
			title: '订单管理',
		});
		
		let tmp = [];
		for (var i = 0; i < 10; ++i) {
			tmp.push({
				sellerName: "XX汽配店",
				date: "2018-01-01",
				time: "00:00:00",
				price: 9999.99,
				status: 0
			});
		}
		this.setData({
			orderList: tmp
		});
	}
})