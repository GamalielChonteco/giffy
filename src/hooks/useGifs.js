import { useContext, useEffect, useState } from "react"
import GifsContext from "context/GifsContext"
import getGifs from "services/getGifs"

const INITIAL_PAGE = 0

const useGifs = ({ keyword, limit = 5 } = {}) => {

    const { gifs, setGifs} = useContext(GifsContext)
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword: keywordToUse, limit })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            if (keyword) localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, keywordToUse, setGifs, limit])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        getGifs({ keyword: keywordToUse, page })
        .then(nextGifs => {
                setLoadingNextPage(false)
                setGifs(prevGifs => prevGifs.concat(nextGifs))
            })
    }, [keywordToUse, page, setGifs])

    return {loading, loadingNextPage, gifs, setPage};
}
 
export default useGifs;