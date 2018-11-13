// pages/buyer/index/index.js
Page({
  data: {
    sortSelected: true,
    brandList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
    partsList: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
		seller: ['AA汽配店', 'BB汽配店', 'CC汽配店', 'DD汽配店', 'EE汽配店']
  },

  selectSort: function(e) {
    let tapID = e.currentTarget.id;
    let ss = this.data.sortSelected;
    if ((ss && (tapID == 'parts')) || (!ss && (tapID == 'brand'))) {
      this.setData({
        sortSelected: !ss
      });
    }
  },

  goSearchByType: function(e) {
    let itemID = e.target.id;
    if (itemID == "") return;

    itemID = itemID.substr(4);
		// console.log(itemID);
		let that = this.data;
		itemID = parseInt(itemID);
		console.log("搜索" + (that.sortSelected ? "品牌" : "配件") +
			(that.sortSelected ? that.brandList[itemID] : that.partsList[itemID]));
  },
	
	showMore: function(e) {

	},

	jumpToSearch: function(e) {
		wx.navigateTo({
			url: '../search/search',
		})
	}
})