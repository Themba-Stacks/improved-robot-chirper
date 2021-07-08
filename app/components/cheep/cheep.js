Component({
  mixins: [],
  data: {

  },
  props: {
    cheep: {
      image: "/assets/images/cheep_button.svg",
      text: 'Default'
    },
  },
  didMount() {

  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    cheepTapped(event) {
      console.log('Open Cheep Page')
      this.props.cheep
      const cheepStr = Object.keys(this.props.cheep).map(key => key + '=' + this.props.cheep[key]).join('&');
      my.navigateTo({
        url: `/pages/view/view?${cheepStr}`,
      })
    }
  },
});
