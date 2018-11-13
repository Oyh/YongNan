// pages/buyer/seller/seller.js
Page({
  data: {
		toView: null,

		naviFixed: false,
		naviHeight: null,
		navi: [
			{ category: '外观件', subcategory: ['啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类'] },
			{ category: '外观件', subcategory: ['啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类'] },
			{ category: '外观件', subcategory: ['啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类'] },
			{ category: '外观件', subcategory: ['啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类', '啊啊啊啊类'] }
		],
		naviSelected: 0,
		subNaviSelected: 0,

		parts: [],
		selectedPatrs: [],
		totalPrice: 1e-9,
		isShowCart: false,

		seller: {
			announcement: '公告：测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测测试测试测试测试测'
		}
  },

  onLoad: function() {
		wx.setNavigationBarTitle({
			title: '永南气配城的一间奔驰配件店',
		});
  },

	onReady: function() {
		let that = this;
		let query = wx.createSelectorQuery();
		query.select('.seller-info-container').boundingClientRect((res) => {
			that.setData({
				naviHeight: res.height
			});
		}).exec();

		let tmp = [];
		for (var i = 0; i < 4; ++i) {
			for (var j = 0; j < 6; ++j) {
				tmp.push({
					name: '配件名字' + (i * 6 + j),
					id: 'p' + i + '-' + j,
					price: 99.99,
					num: 0
				})
			}
		}
		this.setData({
			parts: tmp,
			toView: 'top'
		});
	},

	scroll: function(e) {
		if (this.data.naviFixed == (e.detail.scrollTop > this.data.naviHeight)) {
			return;
		}
		this.setData({
			naviFixed: (e.detail.scrollTop > this.data.naviHeight)
		});
	},

	favoriteSeller: function(e) {
		console.log(e);
	},

	selectCategory: function(e) {
		let sc = parseInt(e.currentTarget.id.substr(1));
		let ns = this.data.naviSelected;
		this.setData({
			naviSelected: sc,
			subNaviSelected: (sc == ns) ? this.data.subNaviSelected : 0
		});
		this.setData({
			toView: 'p' + this.data.naviSelected + '-' + this.data.subNaviSelected
		});
	},

	selectSubcategory: function(e) {
		let ssc = parseInt(e.currentTarget.id.substr(3));
		this.setData({
			subNaviSelected: ssc,
			toView: 'p' + this.data.naviSelected + '-' + ssc
		});
	},

	increaseNum: function (e) {
		let i = e.target.dataset.index;
		let tmp = this.data.parts[i];
		let str = 'parts[' + i + '].num';
		this.setData({
			[str]: tmp.num + 1,
			totalPrice: this.data.totalPrice + tmp.price
		});
	},

	decreaseNum: function (e) {
		let i = e.target.dataset.index;
		let tmp = this.data.parts[i];
		let str = 'parts[' + i + '].num';
		this.setData({
			[str]: tmp.num - 1,
			totalPrice: this.data.totalPrice - tmp.price
		});
	},

	showCart: function() {
		this.setData({
			isShowCart: !this.data.isShowCart
		});
	},

	clearCart: function() {
		let len = this.data.parts.length;
		for (var i = 0; i < len; ++i) {
			let str = 'parts[' + i + '].num';
			this.setData({
				[str]: 0
			});
		}
		this.setData({
			totalPrice: 1e-9
		});
	}
})