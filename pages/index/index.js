// pages/index/index.js
const login = require('../common/login.js');
var app = getApp();

Page({
  data: {
		canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

	bindGetUserInfo: function(e) {
		if (e.detail.userInfo){
			// login.userLogin();
			// login.getUserType();
			wx.showToast({
				title: '请稍等',
				icon: 'loading',
				duration: 2000,
				success: function() {},
				complete: function() {
					wx.redirectTo({
						url: '../buyer/index/index'
					})
				}
			})
		} else {
			wx.showModal({
				title: '温馨提示',
				content: '必须先授权才能进入商城',
				showCancel: false,
				confirmText: '我知道了'
			})
		}
	}
})