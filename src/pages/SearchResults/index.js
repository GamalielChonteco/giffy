import ListOfGifs from '../../components/ListOfGif';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';

export default function SearchResult({ params }) {

    const { keyword } = params
    
    const { loading, gifs } = useGifs({ keyword })

    return <>
        {
            loading
                ? <Spinner />
                : <ListOfGifs gifs={gifs} />
        }
    </>
}
