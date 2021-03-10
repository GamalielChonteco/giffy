import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGif';
import useGifs from 'hooks/useGifs';
import TrendingSearches from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';
import { useCallback } from 'react';
import { Helmet } from 'react-helmet';

export default function Home() {

  const [, pushLocation] = useLocation()
  const { gifs } = useGifs({ limit: 15 })

  const handleSubmit = useCallback(({ keyword }) => {
    pushLocation(`/search/${ keyword }`)
  }, [pushLocation])

  return (
    <>
      <Helmet>
        <title>Giffy | Home</title>
      </Helmet>
      <header className="o-header">
        <SearchForm onSubmit={handleSubmit} />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  );
}
