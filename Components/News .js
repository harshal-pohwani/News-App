import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
//import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

// let { title, description, iUrl, newsUrl, author, date } = this.props;

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const capitalFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aaf6d7dfcb6c4337837f1fccd23ac3a2&page=${page}&pageSize=${props.pageSize}`;
    // 
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalFirst(props.category)} - Newsapp`;
    updateNews();
    //eslint-disable-next-line
  }, [])



  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aaf6d7dfcb6c4337837f1fccd23ac3a2&page=${page + 1}&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

  };

  return (
    <div className='container' my-3>
      <h1 className='text-center headline' >News - Top {capitalFirst(props.category)}  Headlines</h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div >
          <div className='row my-3 '>
            {articles.map((element) => {
              return <div className='col md-4 ' key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} iUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div></div>
      </InfiniteScroll>

    </div>
  );
}


export default News 