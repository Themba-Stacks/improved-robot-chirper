import { profileRequest } from "/requests/request";

Page({
  data: {},
  async onLoad() {
    const profile = await profileRequest()
    this.setData({...profile})
  },
});
