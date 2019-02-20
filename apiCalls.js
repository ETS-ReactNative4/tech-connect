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
  const url = `https://tech-connect-be.herokuapp.com/api/v1/users?api_key=${key}`
  const response = await fetch(url)
  const userData = await response.json()
  return userData.data.map(user => {
    const { name, github, linkedin, bio, position, location, employer } = user.attributes
    return {
      name,
      github,
      linkedin,
      bio,
      id: user.id, 
      job_title: position ? position.job_title : null, 
      city: location ? location.city : null,
      employer: employer ? employer : null
    }
  })
}

export const getUsersFilter = async (key, filter, name) => {
  const url = `https://tech-connect-be.herokuapp.com/api/v1/users/find?${filter}=${name}&api_key=${key}`
  const response = await fetch(url)
  const userData = await response.json()
  return userData.data.map(user => {
    const { name, github, linkedin, bio, position, location, employer } = user.attributes
    return {
      name,
      github,
      linkedin,
      bio,
      id: user.id, 
      job_title: position ? position.job_title : null, 
      city: location ? location.city : null,
      employer: employer ? employer : null
    }
  })
}

export const getUserInfo = async (id, apiKey) => {
  const url = `https://tech-connect-be.herokuapp.com/api/v1/users/${id}?api_key=${apiKey}`
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

export const sendConnectionRequest = async (key, id, inputs) => {
  const url = `https://tech-connect-be.herokuapp.com/api/v1/mailers`
  const body = {...inputs, api_key: key, connection_id: id}
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      const errorText = await response.json()
      throw Error(errorText.error)
    }

    const result = await response.json()
    return result.success
  } catch(err) {
    return 'Please fill out all the fields'
  }
}

export const getMessages = async (apiKey) => {
  const url = `https://tech-connect-be.herokuapp.com/api/v1/messages?api_key=${apiKey}`
  try {
    const response = await fetch(url)

    if (!response.ok) {
      const errorText = await response.json()
      throw Error(errorText.error)
    }

    const result = await response.json()
    return result.data
  } catch(err) {
    console.log(err)
  }
}



