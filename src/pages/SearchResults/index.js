import { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';

import ListOfGifs from 'components/ListOfGif';
import Spinner from 'components/Spinner';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import { Helmet } from 'react-helmet';

export default function SearchResult({ params }) {

    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword, limit: 10 })
    const externalRef = useRef()
    
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    const title = gifs ? `Giffy | ${gifs.length} resultados de ${keyword}` : ''
    

    const debounceHandleNextPage = useCallback(debounce( // eslint-disable-line react-hooks/exhaustive-deps
        () => setPage(prevPage => prevPage + 1), 200
    ), [])

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return <>
        {
            loading
                ? <Spinner />
                : <>
                    <Helmet>
                        <title>{title}</title>
                        <meta name="description" content={title}></meta>
                    </Helmet>
                    <div className="App-wrapper">
                        <h3 className="App-title">{decodeURI(keyword)}</h3>
                        <ListOfGifs gifs={gifs} />
                        <div id="visor" ref={externalRef}></div>
                    </div>
                </>
        }
    </>
}
