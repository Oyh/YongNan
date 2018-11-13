// pages/seller/info/details.js
Page({
  data: {
		seller: {
			shopName: 'XX汽配城',
			address: '中山市小榄镇XX路XX号XX商铺XX路XX号XX商铺XX路XX号XX商铺',
			contactName: '李四',
			contactTel: '12345678901',
			businessHours: '9:00 ～ 21:00',
			mainBrand: '兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼',
			mainParts: '兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼'
		}
  },

  onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '商铺管理'
		});
  }
})