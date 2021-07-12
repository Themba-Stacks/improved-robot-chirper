const express = require("express");
let cheeps = require("./mock_cheeps.json");
const profile = require("./mock_profile.json");
const fs = require("fs");
const bodyParser = require("body-parser");
const axios = require("axios");
const port = 3000;
const app = express();
const clientId = "2020122325111778413994";
const path = require("path");

app.use(express.json());

app.get("/", (req, res) => {
  //   res.send("Hello World");
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.post("/auth", async (req, res) => {
  // get the authCode from request
  const authCode = req.body.authCode;

  // get the access token
  const accessTokenResponse = await getAccessToken(authCode);

  // get the user data
  const userInformationResponse = await getUserUserInformation(
    accessTokenResponse.accessToken
  );

  let email = userInformationResponse.userInfo.contactInfos[0].contactNo;
  let phoneNumber = userInformationResponse.userInfo.contactInfos[1].contactNo;

  // reverse lookup to get the user

  res.send({
    email: email,
    phoneNumber: phoneNumber,
  });
});

app.post("/pay", async (req, res) => {
  const paymentIdentity = await makePayment("216610000000259832353");

  console.log("pay response ---------");
  console.log(paymentIdentity);

  res.send({ paymentUrl: paymentIdentity.redirectActionForm.redirectUrl });
});

const makePayment = async (userId) => {
  const merchantPaymentId =
    "c0a83b171613987371793100" + Math.floor(Math.random() * 10000); //Generating a Unique payment Identifier, this is the merchant's unique payment reference

  const body = {
    productCode: "CASHIER_PAYMENT",
    salesCode: "51051000101000000011",
    paymentNotifyUrl: "https://nodeapi.ajaberdein.com/payment-notification",
    paymentRequestId: merchantPaymentId,
    paymentRedirectUrl: "https://nodeapi.ajaberdein.com/payment-notification",
    paymentExpiryTime: "2022-02-22T17:49:31+08:00",
    paymentAmount: {
      currency: "ZAR",
      value: "10200",
    },
    order: {
      goods: {
        referenceGoodsId: "goods-269334",
        goodsUnitAmount: {
          currency: "ZAR",
          value: "10200",
        },
        goodsName: "The Amazing AJ T-Shirt",
      },
      env: {
        terminalType: "MINI_APP",
      },
      orderDescription: "AJs Clothing",
      buyer: {
        referenceBuyerId: userId, //Mini-Program user's unique ID
      },
    },
  };

  let config = {
    headers: {
      "Content-Type": "application/json",
      "client-id": "2020122325111778413994",
      "request-time": "2021-02-22T17:49:26.913+08:00",
      signature: "algorithm=RSA256, keyVersion=1, signature=testing_signature",
    },
  };

  const response = await axios.post(
    "https://vodapay-gateway.sandbox.vfs.africa/v2/payments/pay",
    body,
    config
  );

  return response.data;
};

getAccessToken = async (authCode) => {
  const body = {
    grantType: "AUTHORIZATION_CODE",
    authCode: authCode,
  };

  let config = {
    headers: {
      "Content-Type": "application/json",
      "client-id": "2020122325111778413994",
      "request-time": "2021-02-22T17:49:26.913+08:00",
      signature: "algorithm=RSA256, keyVersion=1, signature=testing_signature",
    },
  };

  const response = await axios.post(
    "https://vodapay-gateway.sandbox.vfs.africa/v2/authorizations/applyToken",
    body,
    config
  );

  console.log("accessToken resp");
  console.log(response.data);

  return response.data;
};

getUserUserInformation = async (accessToken) => {
  const body = {
    authClientId: clientId,
    accessToken: accessToken,
  };

  console.log("accessToken");
  console.log(accessToken);

  let config = {
    headers: {
      "Content-Type": "application/json",
      "client-id": clientId,
      "request-time": "2021-02-22T17:49:26.913+08:00",
      signature: "algorithm=RSA256, keyVersion=1, signature=testing_signature",
    },
  };

  const response = await axios.post(
    "https://vodapay-gateway.sandbox.vfs.africa/v2/customers/user/inquiryUserInfo",
    body,
    config
  );

  return response.data;
};

app.get("/cheeps", (req, res) => {
  res.send(cheeps);
});

app.get("/profile", (req, res) => {
  res.send(profile);
});

app.post("/cheep", (req, res) => {
  fs.readFile("./mock_cheeps.json", (err, data) => {
    const cheepsData = JSON.parse(data);
    console.log(cheepsData);
    cheepsData.cheeps.push(req.body);

    cheeps = cheepsData;

    fs.writeFile(
      "./mock_cheeps.json",
      JSON.stringify(cheepsData, null, 2),
      (err) => console.log(err)
    );
  });
  res.send("success");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
