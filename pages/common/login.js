function userLogin() {
	wx.checkSession({
		success: function() {
			getUserType();
		},
		fail: function() {
			onLogin();
		}
	})
}

function getUserType() {
	let ts = null;
	wx.getStorage({
		key: 'thirdSession',
		success: function(res) {
			ts = res.data;
		}
	});
	wx.request({
		url: '',
		data: {
			thirdSession: ts
		},
		success: function(res) {
			// getApp().globalData.thirdSession
			// getApp().globalData.userType
			if (res.data.state == 0) {
				// 3rd_session无效
				onLogin();
			} else {
				// 3rd_session有效
				getApp().globalData.thirdSession = ts;
				getApp().globalData.userType = res.data.type;
			}
		},
		fail: function(res) {
		}
	})
}

function onLogin() {
	wx.login({
		success: function (res) {
			if (res.code) {
				wx.request({
					url: '',
					data: {
						code: res.code
					},
					success: function (res) {
						let that = this;
						if (逻辑成功) {
							var json = JSON.parse(res.data.Data);
							wx.setStorage({
								key: 'thirdSession',
								data: 'json.thirdSession',
							});
							getApp().globalData.thirdSession = res.data.thirdSession;
							getApp().globalData.userType = res.data.type;
						} else {
							console.log('后台出错，请重试');
						}
					},
					fail: function (res) {
						console.log('后台出错，请重试');
					}
				})
			}
		},
		fail: function (res) {
			console.log('登录出错，请重试');
		}
	})
}

module.exports.userLogin = userLogin;
module.exports.getUserType = getUserType;
module.exports.onLogin = onLogin;