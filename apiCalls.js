export const getLocations = async () => {
    const url = 'https://tech-connect-be.herokuapp.com/api/v1/locations'
    const response = await fetch(url)
    const locationData = await response.json()
    return locationData.data.map(location => {
      return {label: location.attributes.city}
    })
  }

export const getEmployers = async () => {
  const url = 'https://tech-connect-be.herokuapp.com/api/v1/employers'
  const response = await fetch(url)
  const employerData = await response.json()
  return employerData.data.map(location => {
    return {label: location.attributes.name}
  })
}


export const getPositions = async () => {
  const url = 'https://tech-connect-be.herokuapp.com/api/v1/positions'
  const response = await fetch(url)
  const positionData = await response.json()
  return positionData.data.map(location => {
    return {label: location.attributes.job_title}
  })
}

export const getAllUsers = async (key) => {
  const url = 'https://tech-connect-be.herokuapp.com/api/v1/users'
  const response = await fetch(url, {
    method: 'GET',
    body: JSON.stringify(key)
  })
  console.log(response)
  const userData = await response.json()
  console.log(userData)
  return userData.data.map(user => {
    return user.attributes
  })

}