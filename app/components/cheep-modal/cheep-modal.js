import { newCheepRequest } from "/requests/request"

Component({
  mixins: [],
  data: {
    cheepValue: ""
  },
  props: {},
  methods: {
     submit: async function () {
      // await newCheepRequest(this.data.cheepValue)
      // console.log(this.data.cheepValue)
      this.$page.setData({
        showModal: false
      })

    },
    onReset() {
      console.log('cleared form')
    },
    getValue(event) {
      this.setData({cheepValue: event.detail.value})
    }
  },
});
