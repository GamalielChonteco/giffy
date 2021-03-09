import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGif';
import useGifs from 'hooks/useGifs';
import TrendingSearches from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';
import { useCallback } from 'react';

export default function Home() {

  const [, pushLocation] = useLocation()
  const { gifs } = useGifs({ limit: 15 })

  const handleSubmit = useCallback(({ keyword }) => {
    pushLocation(`/search/${ keyword }`)
  }, [pushLocation])

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
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
