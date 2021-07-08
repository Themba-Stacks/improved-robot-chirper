import { cheepRequest } from "/requests/request"
import { authenticateUser } from "/auth/auth";
import { pay } from "/pay/pay";

Page({
  data: {
    isModal: false,
    cheeps: [
      {
        image: "/assets/images/vodacom_logo.svg",
        text: 'Technology can take us far but with the power of humanity, we are able to go #FurtherTogether. Learn more: https://bit.ly/3fx6DrT'
      },
      {
        image: "/assets/images/vodacom_logo.svg",
        text: 'Vodacom Contract customers can make it easy to discover the hottest African artists on Apple Music this Africa Month. Just subscribe with your Vodacom account. http://bit.ly/vatbAppleServices'
      },
      {
        image: "/assets/images/vodacom_logo.svg",
        text: 'Good morning hope you guys are doing well'
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
  showCheepModal() {
    this.setData({isModal: !this.data.isModal});
  },

  test(e) {
    console.log('hello')
    my.alert({
      content: JSON.stringify(e.detail),
    });
    this.webViewContext.postMessage({ 'sendToWebView': '1' });
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
