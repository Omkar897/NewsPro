import React, { useEffect, useState } from "react";
import NewsContainer from "./NewsContainer";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&Category=${props.category}&apiKey=165dd7322a024fa98fe0453d6ed213f3&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${props.category} - NewsGrind`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&Category=${props.category}&apiKey=165dd7322a024fa98fe0453d6ed213f3&page=${
      page + 1
    }&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="container row">
          <h1
            className="text-center"
            style={{ marginTop: "90px", marginBottom: "45px" }}
          >
            NewsGrind - Top Headlines on {props.category}
          </h1>

          {articles.map((element) => (
            <div
              className="col-md-4 d-flex justify-content-center"
              key={element.url}
            >
              <NewsContainer
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          ></InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  Category: "General",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  Category: PropTypes.string,
};

export default News;
