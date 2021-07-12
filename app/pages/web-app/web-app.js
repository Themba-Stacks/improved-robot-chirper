
import { pay } from "/pay/pay";
import { authenticateUser } from "/auth/auth";


Page({
  data: {
    title: "web"
  },
  onLoad(e) {
    this.webViewContext = my.createWebViewContext('web-view-1');
  },


  onMessage(e) {
    switch(e.detail.message){
      case "auth":
        authenticateUser()
      break;
      case 'pay':
        pay();
      break;
      default:
        console.log('No message handler for:',e.detail.message)  
      break;
    }

    my.alert({
      content: JSON.stringify(e.detail),
    });
    
    this.webViewContext.postMessage({ message: "Message Received" });
  
  },
});