import { Link } from 'wouter';
import './Gif.css'

const Gif = ({ id, title, url}) => {
    return (
        <div className="Gif">
            <Link className='Gif-link' to={`/gif/${id}`}>
                <h4>{ title }</h4>
                <img src={url} alt={title} />
            </Link>
        </div>
    );
}
 
export default Gif;