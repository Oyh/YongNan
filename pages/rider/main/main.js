// pages/rider/main/main.js
Page({
	data: {
		rider: {
			name: '李四',
			tel: '12345678901',
			grade: '5.0',
			business: {
				monthlyOrder: 99,
				monthlyIncome: 9999.99
			},
			order: []
		}
	},

	onLoad: function() {
		for (var i = 0; i < 10; ++i) {
			this.data.rider.order.push({
				seller: 'XX汽配店',
				buyer: 'OOOYH',
				address: '中山市小榄镇甲甲路乙乙号丙丙店甲甲路乙乙号丙丙店甲甲路乙乙号丙丙店',
				status: '配送中'
			})
		}
		this.setData({
			'rider.order': this.data.rider.order
		});
	}
})