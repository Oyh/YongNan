// pages/seller/goods/management.js
Page({
  data: {
		goods: []
  },

  onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '商品管理'
		});

		for (var i = 0; i < 10; ++i) {
			this.data.goods.push({
				name: '配件名称',
				price: 999.99,
				brand: '兰博基尼',
				parts: '车门车窗',
				description: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
				x: 0
			})
		}
		this.setData({
			goods: this.data.goods
		});
	},

	handleMovableChange: function (e) {
		if (e.detail.source == 'friction') {
			if (e.detail.x < -50) {
				this.showButton(e);
			} else {
				this.hideButton(e);
			}
		} else if (e.detail.source == 'out-of-bounds' && e.detail.x == 0) {
			this.hideButton(e);
		}
	},

	showButton: function (e) {
		this.setXMove(e.currentTarget.dataset.index, -100);
	},

	hideButton: function (e) {
		this.setXMove(e.currentTarget.dataset.index, 0);
	},

	setXMove: function (i, newX) {
		this.data.goods[i].x = newX;
		this.setData({
			goods: this.data.goods
		});
	}
})