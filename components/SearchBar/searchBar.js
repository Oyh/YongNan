// component/searchBox.js
Component({
  properties: {
		keywords: {
			type: String,
			value: ""
		},
		disable: Boolean,
		focus: Boolean,
		showButton: {
			type: Boolean,
			value: false
		}
  },

  data: {
  },

  methods: {
		_keywordInput: function (e) {
			this.setData({
				keywords: e.detail.value
			})
		},
		_searchEvent: function() {
			var kw = {
				keywords: this.data.keywords
			};
			this.triggerEvent("search", kw);
		},
		_jumpEvent: function() {
			this.triggerEvent("jump");
		}
  }
})
