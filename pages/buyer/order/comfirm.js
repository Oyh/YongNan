// pages/buyer/order/comfirm.js
Page({
  data: {
		seller: {
			name: "XX汽配店"
		},
		order: [],
		deliveryCost: 0,
		totalPrice: 0,
		buyer: {
			name: "",
			tel: "",
			address: ""
		}
  },

	onReady: function() {
		let tmp = [], p = 0;
		for (var i = 0; i < 6; ++i) {
			tmp.push({
				name: "配件" + i,
				price: 9999.99,
				num: 1
			});
			p += 9999.99;
		}
		this.setData({
			totalPrice: p + 10,
			deliveryCost: 10,
			order: tmp,
			address: ""
		});
	},

	chooseAddress: function(e) {
		let that = this;
		if (wx.chooseAddress) {
			wx.chooseAddress({
				success: function(res) {
					console.log(res);
					that.setData({
						buyer: {
							name: res.userName,
							tel: res.telNumber,
							address: res.provinceName + res.cityName + res.countyName + res.detailInfo
						}
					});
				},
				fail: function(err) {
					console.log(JSON.stringify(err));
				}
			});
		} else {
			console.log('当前版本微信不支持chooseAddress');
		}
	}
})