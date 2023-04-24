import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}-NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

    // handelePrevClick = async () => {
    // setPage(page-1)
    //     updateNews();
    // }
    // handeleNextClick = async () => {
    // setPage(page+1)
    // updateNews();
    // }

    return (
        <>

            <h1 className="text-center " style={{margin:'35px 0px',marginTop:'90px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >


                <div className="container">
                    <div className="row ">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="conatiner d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handelePrevClick}>&larr; Previous</button>
                    <button disabled={page >= Math.ceil(totalResults / pageSize)} type="button" className="btn btn-dark" onClick={handeleNextClick}>Next &rarr;</button>
                </div> */}

        </>
    )
}
News.Props = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News;