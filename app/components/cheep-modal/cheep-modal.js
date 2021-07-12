import { newCheepRequest } from "/requests/request";

Component({
  mixins: [],
  data: {},
  props: {},
  methods: {
    onSubmit: async function (event) {
      await newCheepRequest({
        userName: "user",
        profileImageSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        message: event.detail.value.cheeptext,
      });
      this.props.onShowCheepModal();

      this.$page.getCheeps();
    },
  },
});
