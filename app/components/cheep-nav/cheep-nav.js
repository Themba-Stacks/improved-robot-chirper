Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    openProfile() {
      my.navigateTo({
        url: '../profile/profile'
      });
    },
    openWebApp() {
      my.navigateTo({
        url: '../web-app/web-app'
      });
    },
    openView() {
      my.navigateTo({
        url: '../view/view'
      });
    },
    openHome() {
      my.navigateTo({
        url: '../index/index'
      });
    }
  },
});
