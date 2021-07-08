
import { pay } from "/pay/pay";
import { authenticateUser } from "/auth/auth";


Page({
  onLoad(e) {
    this.webViewContext = my.createWebViewContext('web-view-1');
  },


  onMessage(e) {

    // if (e.detail.action === 'auth') {
    //   authenticateUser()
    // }

    // if (e.detail.action === 'pay') {
    //   pay()
    // }

    my.alert({
      content: JSON.stringify(e.detail),
    });
    setTimeout(() => {
      this.webViewContext.postMessage({ actionResult: "auth success" });
    }, 1000)
  },
});