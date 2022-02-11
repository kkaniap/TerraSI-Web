import './NewsItem.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

const News = () => {

    const [newsItemContent, setNewsItemContent] = useState();

    useEffect(() => {
        fetchNewsItemContent();
    }, []);

    const fetchNewsItemContent = () => {
        fetch('/newsText/newsItem_1.html')
        .then(data => data.text())
        .then(data => setNewsItemContent(data))
    }

    return (
        <Link to="/news/1" className='hiperlink'>
            <div className='news-container'>
                <div className='news__img'>
                    <img src='https://github.com/kkaniap/TerraSI-Web-v1/blob/master/src/assets/homeAssets/NewsID/3/logo_mobile_3.png?raw=true' />
                </div>
                <h2 className='news__title'>How to save money with TerraSI</h2>
                <div className='news__content' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(newsItemContent)}}>
                </div>
            </div>
        </Link>

      );
}
 
export default News;