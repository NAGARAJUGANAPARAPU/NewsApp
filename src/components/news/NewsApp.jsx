import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        ` https://newsapi.org/v2/top-headlines?q=trump&apiKey=${apiKey}`
      );
      console.log("API key:", apiKey);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false); // Done loading whether success or fail
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Top Headlines</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid">
            {articles.map((article, index) => (
              <div className="content" key={index}>
                <h2 className="title">{article.title}</h2>
                <p className="description">{article.description}</p>
                <img
                  className="img"
                  src={article.urlToImage}
                  alt={article.title}
                />
                <a className="url" href={article.url}>
                  Read more
                </a>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
