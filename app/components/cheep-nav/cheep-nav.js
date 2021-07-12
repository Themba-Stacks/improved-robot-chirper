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
    openView() {
      my.redirectTo({
        url: '../view/view'
      });
    },
    openHome() {
      my.redirectTo({
        url: '../index/index'
      });
    }
  },
});
