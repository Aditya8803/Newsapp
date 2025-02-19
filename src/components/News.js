import React, {useEffect,useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)
// const [hasMore, setHasMore] = useState(true)
// document.title = capitaliseFirstLetter(props.category) + "-NewsMonkey"
  const capitaliseFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=81aee4c6141848ba9a004adbc1b8e899

const  updateNews = async() => {
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
setLoading(true);
  let data = await fetch(url);
  let parsedData = await data.json()
setArticles(parsedData.articles)
setTotalResults(parsedData.totalResults)
setLoading(false);
    props.setProgress(100);
}
useEffect(() => {
  updateNews();
  // eslint-disable-next-line
}, [])



const handlePrevClick=async ()=>{
setPage(page-1)
updateNews();
}

const handleNextClick=async()=>{
setPage(page+1)
updateNews();
  }
  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81aee4c6141848ba9a004adbc1b8e899&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
  let parsedData = await data.json()
setArticles(articles.concat(parsedData.articles))
setTotalResults(parsedData.totalResults)
};

    return (
      <>
        <h1 className="text-center"style={{margin:'35px 0px',marginTop:'90px'}}>NewsMonkey - Top {capitaliseFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length< totalResults}
          loader={articles.length < totalResults && <Spinner/>}
        >
      <div className="container">
        <div className="row">
        {articles.map((element)=>{
              return <div className="col-md-3" key={element.url}>
              <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
        </div>
      </div>
        </InfiniteScroll>
        </>
    )
  }
export default News
News.defaultProps = {
    country: 'in',
    pageSize:8,
    category:'general',
  }
News.propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
