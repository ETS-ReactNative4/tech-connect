getLocations = async () => {
    const url = 'https://tech-connect-be.herokuapp.com/api/v1/locations'
    const response = await fetch(url)
    const locationData = await response.json()
    const locations = locationData.data.map(location => {
      return {label: location.attributes.city}
    })
    this.setState({ locations })
  }


getEmployers = async () => {
  const url = 'https://tech-connect-be.herokuapp.com/api/v1/employers'
  const response = await fetch(url)
  const locationData = await response.json()
  const locations = locationData.data.map(location => {
    return {label: location.attributes.name}
  })
  this.setState({ locations })
}
