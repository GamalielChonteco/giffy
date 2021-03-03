import Gif from '../Gif/index';
import './styles.css'

const ListOfGifs = ({ gifs }) => {

  return (
    <div className="ListOfGifs">
      {
        gifs.map(({ id, title, url }) =>
          <Gif
            id={id}
            key={id}
            title={title}
            url={url}
          />
        )
      }
    </div>
  )
}

export default ListOfGifs;