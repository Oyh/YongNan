// pages/buyer/mine/favorite.js
Page({
  data: {
		favorite: [],
  },

	onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '我的收藏'
		});

		let tmp = [];
		for (var i = 0; i < 10; ++i) {
			tmp.push({
				name: 'XX汽配店' + i,
				x: 0
			});
		}
		this.setData({
			favorite: tmp
		});
	},

	handleMovableChange: function(e) {
		if (e.detail.source == 'friction') {
			if (e.detail.x < -30) {
				this.showDelButton(e);
			} else {
				this.hideDelButton(e);
			}
		} else if (e.detail.source == 'out-of-bounds' && e.detail.x == 0) {
			this.hideDelButton(e);
		}
	},

	showDelButton: function (e) {
		let i = e.currentTarget.dataset.index;
		this.setXMove(i, -100);
	},

	hideDelButton: function (e) {
		let i = e.currentTarget.dataset.index;
		this.setXMove(i, 0);
	},

	setXMove: function(i, newX) {
		this.data.favorite[i].x = newX;
		this.setData({
			favorite: this.data.favorite
		});
	}
})