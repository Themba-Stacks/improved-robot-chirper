import { auth } from "/requests/request";

export const authenticateUser = () => {
  my.getAuthCode({
    scopes: ["auth_user", "NOTIFICATION_INBOX"],
    success: (res) => {

      // User has agreed to authentication

      // GET AUTH CODE: FOR TESTING PURPOSES ONLY
      my.request({
        url: 'https://vodapay-gateway.sandbox.vfs.africa/v2/authorizations/applyAuthCode',
        headers: {
          "Content-Type": "application/json",
          "Client-ID": "2020122325111778413994",
          "request-time": "2021-02-22T17:49:26.913+08:00",
          signature: `algorithm=RSA256, keyVersion=1, signature=KEhXthj4bJ801Hqw8kaLvEKc0Rii8KsNUazw7kZgjxyGSPuOZ48058UVJUkkR`,
        },
        method: 'POST',
        data: {
          "clientId": "2020122325111778413994",
          "userId": "216610000000259832353",
          "scopes": "NOTIFICATION_INBOX, auth_user"
        },
        timeout: 3000,
        success: async (result) => {
            let userInformation = await auth(result.data.authCode);

            my.setStorage({
              key: "user",
              data: userInformation.data
            })
            
        },
      
      });

      console.log(res.authCode)
      // auth(res.authCode)

    },
    fail: (res) => {
      // User has authenticated
    }
  });
}