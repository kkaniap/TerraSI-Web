import './NewsDetails.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

const News = () => {

    const { id } = useParams();
    const [newsContent, setNewsContent] = useState();

    useEffect(() =>{
        getNewsContent();
    }, []);

    const getNewsContent = () => {
        fetch('/newsText/news_1.html')
        .then(data => data.text())
        .then(data => setNewsContent(data))
    }

    return ( 
        <div className="news-details-container">
            <img className='img-header' src='https://github.com/kkaniap/TerraSI-Web-v1/blob/master/src/assets/newsAssets/NewsID/3/logo_3.png?raw=true' />
            <h2 className='details__title'>How to save money with TerraSI</h2>
            <div className='details__content' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(newsContent)}}>
            </div>
        </div>
     );
}
 
export default News;