import { newCheepRequest } from "/requests/request"

Component({
  mixins: [],
  data: {},
  props: {},
  didMount() { 
    console.log(this.$page)
    self = this
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
     onSubmit: async function (event) {

      await newCheepRequest()
      this.$page.setData({
        showModal: false
      })

    },
    onReset() {
      console.log('cleared form')
    }
  },

});
