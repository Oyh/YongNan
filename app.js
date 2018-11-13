//app.js
App({
  onLaunch: function() {
		var logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now());
		wx.setStorageSync('logs', logs);
  },

  globalData: {
    userInfo: null,
		thirdSession: null,
		userType: 0
  }
})