import { cheepRequest } from "/requests/request"
import { authenticateUser } from "/auth/auth";
import { pay } from "/pay/pay";

Page({
  data: {
    showModal: false,
    cheeps: [
      {
        image: "/assets/images/cheep_button.svg",
        text: 'My Index Cheep'
      },
      {
        image: "/assets/images/cheep_button.svg",
        text: 'My Index Cheep 2'
      },
      {
        image: "/assets/images/cheep_button.svg",
        text: 'My Index Cheep 3'
      }
    ]
  },
  async onLoad() {
    var app = getApp()
    const cheeps = await cheepRequest();
    this.setData({
      cheeps: cheeps
    })

    // authenticateUser();

  },
  test(e) {
    console.log('hello')
    my.alert({
      content: JSON.stringify(e.detail),
    });
    this.webViewContext.postMessage({ 'sendToWebView': '1' });
  },

  onNewCheep() {
    this.setData({
      showModal: !this.data.showModal
    })
  },

  onOpenProfile() {
    my.navigateTo({
      url: '../profile/profile',
    });
  },

  makePayment() {
    pay()
  },
  openWebApp() {
    my.navigateTo({
      url: '../web-app/web-app',
    });
  }

});
