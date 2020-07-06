import React from "react";

const DisplaynewsData = (props) => {
  const { newsData } = props;
  return (
    <div className="col-md-3">
      <div className="card mb4 shadow-sm">
        <div className="card-body">
          <div className="card">
            <p>
              {" "}
              <strong>{newsData.title}</strong>
            </p>
          </div>

          <img
            className="display-img img-thumbnail rounded mx-auto d-block"
            src={newsData.urlToImage}
            alt="poster "
          ></img>

          <p>{newsData.author}</p>
          <p>{newsData.content}</p>
          <p>{newsData.description}</p>
          <p>{newsData.pubishedAt}</p>
          <p>
            {" "}
            <a
              target="_blank"
              href={`${newsData.url}`}
              className="btn btn-primary rounded mx-auto  btn-block"
            >
              See Full Details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplaynewsData;
