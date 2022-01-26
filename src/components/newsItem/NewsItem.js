import './NewsItem.css';

const News = () => {
    return (
        <div className='news-container'>
            <div className='news__img'>
                <img src='http://terrasi.herokuapp.com/assets/homeAssets/NewsID/3/logo_3.png' />
            </div>
            <h2 className='news__title'>How to save money with TerraSI</h2>
            <div className='news__content'>
                We are pleased to inform you that we have started cooperation with ReptileSupply. This will contribute to better quality of our terrariums.If you want to know more about our cooperation, please visit this post.
            </div>
        </div>
      );
}
 
export default News;