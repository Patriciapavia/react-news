import React, { useEffect, useState } from "react";
import DisplayNews from "./DisplayNews";
import axios from "axios";

function GetNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=au&apiKey=45a403ebcaf74eefa85290bade9c0b5f`
      )
      .then((res) => {
        setNews(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <DisplayNews news={news} />
    </div>
  );
}

export default GetNews;
