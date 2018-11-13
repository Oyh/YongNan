// pages/seller/info/modify.js
Page({
	data: {
		seller: {
			shopName: 'XX汽配城',
			address: '中山市小榄镇XX路XX号XX商铺XX路XX号XX商铺XX路XX号XX商铺',
			contactName: '李四',
			contactTel: '12345678901',
			businessHours: '9:00 ～ 21:00',
			mainBrand: '兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼',
			mainParts: '兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼，兰博基尼',
			imageUrl: ''
		}
	},

	onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '商铺信息修改'
		});
	},

	handleInput(e) {
		let label = e.target.dataset.label;
		let value = e.detail.value;
		let str = 'seller.' + label;
		this.setData({
			[str]: value
		});
		// console.log(this.data.seller);
	},

	chooseImage(e) {
		let that = this;
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success(res) {
				that.setData({
					'seller.imageUrl': res.tempFilePaths[0]
				});
			}
		});
	},

	handleImagePreview(e) {
		let url = this.data.goods.imageUrl;
		wx.previewImage({
			current: url,
			urls: [url]
		});
	},

	removeImage(e) {
		this.setData({
			'seller.imageUrl': ''
		});
	}
})