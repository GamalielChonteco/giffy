import Gif from "../../components/Gif";
import useGlobalGifs from "../../hooks/useGlobalGif";
// import StaticContext from "./../../context/StaticContext";

export default function Detail({ params }) {

    // const context = useContext(StaticContext)
    const gifs = useGlobalGifs()

    const gif = gifs.find(singleGif => singleGif.id === params.id)

    console.log(gif);

    return <Gif {...gif} />
}
