// pages/seller/order/details.js
Page({
  data: {
		order: {
			buyer: {
				name: 'XX汽配店',
				tel: '12345678901'
			},

			rider: {
				name: '张三',
				tel: '12345678901'
			},

			items: [
				{ name: '配件0', price: 999.99, num: 1 },
				{ name: '配件1', price: 999.99, num: 1 },
				{ name: '配件2', price: 999.99, num: 1 }
			],

			ID: '2018000011112222',
			date: '2018-01-01',
			time: '00:00:00',
			deliveryCost: 10,
			totalPrice: 9999.99
		}
  },

  onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '订单详情',
		});
  }
})