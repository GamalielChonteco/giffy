const apiKey = 'CuCSWayxu8x1d8kvPbjQh50wvebSXvjE'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse

  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs({ keyword = 'malcolm in the middle' } =  {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(apiURL)
      .then(resp => resp.json())
      .then(fromApiResponseToGifs)
}
