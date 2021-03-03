import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGif';
import useGifs from '../../hooks/useGifs';

const POPULAR_GIFS = ['Malcolm in the middle', 'Los Simpons', 'Gravity Falls']

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()

  const { gifs } = useGifs()

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
        <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..." />
      </form>
      <h3 className="App-title">Última busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los Gifs más populares</h3>
      <ul>
        {
          POPULAR_GIFS.map(popularGif => (
            <li key={popularGif}>
              <Link to={`/search/${popularGif}`}>Gifs populares de {popularGif}</Link>
            </li>
          ))
        }
      </ul>
    </>
  );
}
