import './Home.css';
import NewsItem from '../newsItem/NewsItem';

const Home = () => {
    return ( 
        <div className='home-container'>
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
     );
}
 
export default Home;