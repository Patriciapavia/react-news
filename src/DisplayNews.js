import React from "react";
import DisplaynewsData from "./DisplaynewsData";

function DisplayNews({ news }) {
  return news ? (
    <section>
      <div className="row">
        {news.map((newsData) => (
          <DisplaynewsData
            key={newsData.title}
            newsData={newsData}
          ></DisplaynewsData>
        ))}
      </div>
    </section>
  ) : (
    <section>
      <h1>Not Avaiable</h1>
    </section>
  );
}

export default DisplayNews;
