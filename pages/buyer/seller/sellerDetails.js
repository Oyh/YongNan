// pages/buyer/seller/sellerDetails.js
Page({
  data: {
		seller:{
			announcement: '测试测试测试测试测试测试测试测' +
				'试测试测试测试测试测测试测试测试测测' +
				'试测试测试测试测试测试测试测试测试测' +
				'试测试测试测测试测试测试测测试测试测',
			address: '中⼭山市⼩小榄镇XX路路XX号XX商铺XX号XX商铺XX号XX商铺XX号',
			contact: '12345678901',
			bussinessHours: '9:00 ~ 21:00',
			brand: '兰博基尼，兰博基尼， 兰博基尼，兰博基尼，兰博基尼',
			parts: '兰博基尼，兰博基尼， 兰博基尼，兰博基尼，兰博基尼'
		}
  },

  onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '永南气配城的一间奔驰配件店',
		});
  }
})