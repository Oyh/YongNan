// pages/seller/goods/addOrModify.js
Page({
  data: {
		goods: {
			name: '',
			price: '',
			brand: '',
			parts: '',
			description: '',
			imageUrl: ''
		}
  },

  onLoad: function (options) {

  },

	handleInput(e) {
		let label = e.target.dataset.label;
		let value = e.detail.value;
		let str = 'goods.' + label;
		this.setData({
			[str]: value
		});
		console.log(this.data.goods);
	},

	chooseImage(e) {
		let that = this;
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success(res) {
				that.setData({
					'goods.imageUrl': res.tempFilePaths[0]
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
			'goods.imageUrl': ''
		});
	}
})