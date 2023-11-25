// custom-tab-bar/index.ts
Component({
  /**
   * 页面的初始数据
   */
  data: {
		value: '/pages/home/index',
    list: [
      { value: '/pages/home/index', icon: 'home', ariaLabel: '首页' },
      { value: '/pages/app/index', icon: 'app', ariaLabel: '软件' },
      { value: '/pages/chat/index', icon: 'chat', ariaLabel: '聊天' },
      { value: '/pages/mine/index', icon: 'user', ariaLabel: '我的' },
    ],
	},
	methods: {
		onChange(e: any) {
      this.setData({
        value: e.detail.value,
			});
			wx.switchTab({
        url: e.detail.value,
			});
    },
	},
})