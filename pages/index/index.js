//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        inputShowed: false,
        inputVal: ""
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
    handleClickItem: function(e) {
        wx.navigateTo({
            url: 'bookDetail?id=1'
        })
    },
    handleScan: function(e) {
        wx.scanCode({
            success: (res) => {
                console.log(res)
                wx.request({
                    url: 'https://api.douban.com/v2/book/isbn/:9787111128069', //仅为示例，并非真实的接口地址
                    success: function(res) {
                        console.log(res.data)
                    } 
                })
            }
        })
    }
})
