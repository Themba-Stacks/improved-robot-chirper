if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/cheep/cheep?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/cheep-button/cheep-button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/cheep-modal/cheep-modal?hash=77082571bcce38871015e3fa55fc644572846ca7');
require('../../pages/index/index?hash=f258f1bc6bc9a31db846968d33ee33147db47975');
require('../../pages/view/view?hash=b4da34d03e089c41265c6a2df0026ab258fbe949');
require('../../pages/profile/profile?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/web-app/web-app?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}