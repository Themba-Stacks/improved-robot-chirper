import { profileRequest, cheepRequest } from "/requests/request";

Page({
  data: {
    title: 'profile',
    userProfile: '',
    userCheeps: '',
    isModal: false
  },
  async onLoad() {
    const profile = await profileRequest();
    const cheeps = await cheepRequest();
    const filteredCheeps = cheeps.filter((cheep) => {
      return cheep.handle === profile.uniqueHandle
    });
    this.setData({userProfile: profile, userCheeps: filteredCheeps})
  },

  async getCheeps() {
    const profile = this.data.userProfile;
    const cheeps = await cheepRequest();
    const filteredCheeps = cheeps.filter((cheep) => {
      return cheep.handle === profile.uniqueHandle
    });
    this.setData({userCheeps: filteredCheeps})
  },

  showCheepModal() {
    this.setData({isModal: !this.data.isModal});
  },
});
