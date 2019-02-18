export const getUserInfo = async (id, apiKey) => {

  const url = `https://tech-connect-be.herokuapp.com/api/v1/users/${id}?api_key=${apiKey}`
  const key = {api_key: apiKey}
  try {
    const response = await fetch(url)
    if (!response.ok) {
      const errorText = await response.json()
      throw Error(errorText.error)
    }
    
    const userInfo = await response.json()
    const cleanedUser = {id: userInfo.data.id, ...userInfo.data.attributes}
    return cleanedUser
  } catch(err) {
    console.log(err)
  }
}