const apiKey = 'CuCSWayxu8x1d8kvPbjQh50wvebSXvjE'

export default function getGifs({ keyword = 'malcolm in the middle' } =  {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(apiURL)
      .then(resp => resp.json())
      .then(response => {
        const { data = [] } = response
        const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
      })
}
