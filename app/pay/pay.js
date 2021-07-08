

// on checkout
export const pay = async () => {

  // 1. get the payment identity 
  my.request({
    url: 'http://localhost:3000/pay',
    method: 'POST',
    data: {},

    timeout: 3000,

    
    success: (result) => {
      // 2. launch the cashier page and pay

      makePayment(result.data.paymentUrl)

    },
    fail: () => {

    },
    complete: () => {

    }
  });

  const makePayment = (paymentUrl) => {

    my.tradePay({
      paymentUrl: paymentUrl, // get the payment from the OpenAPI first
      success: (res) => {
        // Result of transaction
        // 9000	Pay success
        // 8000	Trade is processing
        // 4000	Pay failed
        // 6001	User cancel to pay
        my.alert({
          content: JSON.stringify(res),
        });
      },
      fail: (res) => {
        my.alert({
          content: JSON.stringify(res),
        });
      }
    });


  }

}