export const cheepRequest = async () => {

  const data = await my.request({
    url: "http://localhost:3000/cheeps",
    method: "GET",
    timeout: 3000
  });

  return data.data.cheeps.map((item) => {
    return {
      image: item.profileImageSrc,
      handle: item.handle,
      text: item.message
    }
  });

}

export const profileRequest = async () => {

  const response = await my.request({
    url: "http://localhost:3000/profile",
    method: "GET",
    timeout: 3000
  });

  return response.data
}

export const newCheepRequest = async (data) => {

  const response = await my.request({
    url: "http://localhost:3000/cheep",
    method: "POST",
    timeout: 3000,
    data: data
  });

  return response
}

export const auth = async (authCode) => {
  const response = await my.request({
    url: "http://localhost:3000/auth",
    method: "POST",
    data: {
      authCode
    }
  })

  return response
}
