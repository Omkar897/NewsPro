import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://images.frandroid.com/wp-content/uploads/2021/03/essai-tesla-model-3-performance-2021-1-scaled.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
