Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    openProfile() {
      my.redirectTo({
        url: '../profile/profile'
      });
    },
    openWebApp() {
      my.navigateTo({
        url: '../web-app/web-app'
      });
    },
    openHome() {
      my.redirectTo({
        url: '../index/index'
      });
    }
  },
});
