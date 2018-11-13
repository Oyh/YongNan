// pages/buyer/search/search.js
Page({
  data: {
		searchResult: [],

		brandKeyword: '不限',
		partsKeyword: '不限',
		selectNav: 2,

		brandList: [
			{ order: 'A~G', child: ['宝马', '宝马', '宝马', '宝马', '宝马', '宝马', '宝马', '宝马', '宝马', '宝马'] },
			{ order: 'H~N', child: ['林肯', '林肯', '林肯', '林肯', '林肯', '林肯', '林肯', '林肯', '林肯', '林肯'] },
			{ order: 'O~T', child: ['日产', '日产', '日产', '日产', '日产', '日产', '日产', '日产', '日产', '日产'] },
			{ order: 'U~Z', child: ['五菱', '五菱', '五菱', '五菱', '五菱', '五菱', '五菱', '五菱', '五菱', '五菱'] },
		],
		brandOrder: 0,
		brandIndex: -1,
		lastBrandOrder: 0,
		lastBrandIndex: -1,

		partsList: [
			{ category:'外观件', child: [
				{ subcategory: '护杠类', child: ['前后护杠', '前后杠支架', '前后杠骨架', '前后杠泡沫'] },
				{ subcategory: '灯类', child: ['大灯', '尾灯', '雾灯', '日行灯', '叶子板灯', '顶灯', '示廓灯'] },
				{ subcategory: '镜类', child: ['倒车镜', '中视镜'] },
				{ subcategory: '雨刮类', child: ['雨刮导流板（雨刮汲水槽）', '雨刮片', '雨刮电机', '雨刮喷水马达', '雨刮联动杆'] },
				{ subcategory: '胶条饰条类', child: ['玻璃胶条', '天窗密封胶条', '车门饰条', '前后杠饰条'] },
				{ subcategory: '护杠类', child: ['前后护杠', '前后杠支架', '前后杠骨架', '前后杠泡沫'] },
				{ subcategory: '护杠类', child: ['前后护杠', '前后杠支架', '前后杠骨架', '前后杠泡沫'] }
			]}
		]
  },

	onLoad: function() {
		this.requestSeller(true);
	},

	showMenu: function(e) {
		let nav = e.currentTarget.dataset.nav;
		this.setData({
			selectNav: (this.data.selectNav == nav) ? 0 : nav
		});
	},
	hideMenu: function(e) {
		this.setData({
			selectNav: 0
		});
	},

	selectBrandOrder: function(e) {
		if (this.data.brandOrder == e.target.id) return;
		if (this.data.lastBrandOrder == e.target.id) {
			this.setData({
				brandOrder: this.data.lastBrandOrder,
				brandIndex: this.data.lastBrandIndex
			});
		} else {
			this.setData({
				brandOrder: e.target.id,
				brandIndex: -1
			});
		}
	},
	selectBrandItem: function(e) {
		let tmp = (this.data.brandIndex == e.target.id) ? -1 : e.target.id;
		this.setData({
			brandIndex: tmp,
			lastBrandOrder: this.data.brandOrder,
			lastBrandIndex: tmp,
			brandKeyword: (tmp == -1) ? '不限' :
				(this.data.brandList[this.data.brandOrder].child[tmp] + tmp)
		});
	},

	requestSeller: function(isNew) {
		if (isNew) {
			this.data.searchResult = [];
		}
		let len = this.data.searchResult.length;
		for (var i = 0; i < 8; ++i) {
			this.data.searchResult.push({
				name: '商家' + (len + i),
				brand: 'XX,XX,XX,XX,XX,XX,XX,XX,XX,XX,XX,XX',
				parts: 'YY,YY,YY,YY,YY,YY,YY,YY,YY,YY,YY,YY'
			});
		}
		this.setData({
			searchResult: this.data.searchResult
		});
	}
})