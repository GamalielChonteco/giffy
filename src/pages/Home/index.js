import { useState } from 'react';
import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGif';
import useGifs from 'hooks/useGifs';
import TrendingSearches from 'components/TrendingSearches';

import './style.css'

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()

  const { gifs } = useGifs({ limit: 15})

  const handleSubmit = e => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..." />
      </form>

      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>

        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}
