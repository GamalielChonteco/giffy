import { useEffect, useState } from "react"
import Category from "components/Category"
import getTrendingTerms from "services/getTrendingService"

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTerms()
            .then(setTrends)
    }, [])

    return (
        <Category name="Tendencias" options={trends} />
    )
}
